 /////////////////////////////////////
// Import des librairies nécessaires
/////////////////////////////////////
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');


/////////////////////////////////////
// Représente l'application
/////////////////////////////////////
var portail = express();
portail.set('port', (process.env.PORT || 8080));

  
/////////////////////////////////////
// Settings
/////////////////////////////////////
portail.engine('.html', require('ejs').__express); // Pas sûr de cette ligne
portail.set('view engine', 'html');
portail.set('views', __dirname + '/views');
portail.set('database', __dirname + '/database');
portail.set('formateur', __dirname + '/formateur');
portail.use(express.static(path.join(__dirname, 'public')));
portail.use(bodyParser.urlencoded({extended: false}));
portail.use(bodyParser.json());


/////////////////////////////////////
// Imports des modules spécialisés
/////////////////////////////////////
var databaseHandler = require(portail.get('database') + '/dataBaseHandler.js'); 
var formateurHandler = require(portail.get('formateur') + '/formateurHandler.js');


/////////////////////////////////////
// Gestion des GET
/////////////////////////////////////
portail.get('/', function(req, res) 
{   
    console.log('Bienvenue sur l\'application Portail Etudiant');
    
    // Affiche la page connexion.html
    res.render('connexion');
});


portail.get('/connexion', function(req, res) 
{   
    console.log('Page de connexion');

    // Affiche la page connexion.html
    res.render('connexion');
});


portail.get('/accueil', function(req, res)
{
    // Affiche la page accueil.html
    res.render('accueil');
});


//////////////////////////////////////////////////////////
// Gestion des POST
//////////////////////////////////////////////////////////

// Gestion POST page connexion
portail.post('/connexion', function(req, res) {
    
    var code = req.body.code;
    var nip = req.body.nip;
    
    console.log("Code permanent: %s", code);
    console.log("NIP:            %s", nip);
    
    // Si champs valides, retourne le statut (succes) et l'url de redirection
    if(code == 'admin' && nip == 'admin')
    {
        res.json({statut: "succes", redirection: 'accueil'});
    }
    // Sinon, retourne le statut (erreur) et un message d'erreur à afficher 
    else
    {
        res.json({statut: "erreur", message: 'Informations erron&eacute;es!'});
    }
});


// Gestion POST facture page d'accueil
portail.post('/facture', function(req, res) {
    console.log("Start - POST - facture.");

    var coursTermines = databaseHandler.getCoursTermines();
    var coursActuel = databaseHandler.getCoursSession();
    var resultat = formateurHandler.construirePageFactures(coursActuel, coursTermines);

    res.set({ 'content-type': 'application/json; charset=utf-8' });
    res.json({statut: "succes", contenu: resultat});
});


// Gestion POST horaire page d'accueil
portail.post('/horaire', function(req, res) {
    
	// Chargement des cours de la database
    console.log("Page Horaire : Chargement donnees");
    var coursCourant = databaseHandler.getCoursSession();
	
    // Appel Fonction du formateur
    console.log("Page Horaire : Appel du formateur");
    var horaireCours = formateurHandler.construirePageHoraire(coursCourant);
	console.log(horaireCours);
    console.log("Page Horaire : Done");
	res.set({ 'content-type': 'application/json; charset=utf-8' });
    res.json({statut: "succes", contenu: horaireCours});
});


// Gestion POST inscription page d'accueil
portail.post('/inscription', function(req, res) {
    
	// Chargement des cours de la database
    console.log("Page Inscription : Chargement donnees");
    var coursCourant = databaseHandler.getCoursSession();
    var coursFuturs = databaseHandler.getCoursACompleter();
    var coursTermines = databaseHandler.getCoursTermines();
    
	// Appel Fonction du formateur
    console.log("Page Inscription : Appel du formateur");
    var horaireCours = formateurHandler.construirePageInscription(coursCourant, coursFuturs, coursTermines);
    
    console.log("Page Inscription : Done");
    res.json({statut: "succes", contenu: horaireCours});
});


// Gestion POST désinscription page d'accueil
portail.post('/desinscription', function(req, res) {
    
	// Chargement des cours de la database
    console.log("Page Desincription : Chargement donnees");
    var coursCourant = databaseHandler.getCoursSession();
    
	// Appel Fonction du formateur
    console.log("Page Desincription : Appel du formateur");
    var horaireCours = formateurHandler.construirePageDesinscription(coursCourant);
    
    console.log("Page Desincription : Done");
    res.json({statut: "succes", contenu: horaireCours});
});


// Gestion POST relevé de notes page d'accueil
portail.post('/relevedenotes', function(req, res) 
{   
    // Récupération des données
	var coursTermines = databaseHandler.getCoursTermines();
	
	// Construction du tableau html correspondant    
    var resultat = formateurHandler.construireTableauReleveNotes(coursTermines);
     
    // Retourne le tableau html généré avec les données de la bd
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    res.json({statut: "succes", contenu: resultat});
});


// Gestion POST cheminement page d'accueil
portail.post('/cheminement', function(req, res) {
	
	var databaseCours = databaseHandler.getDatabaseCours();
	var database = databaseHandler.getDatabase();
	
	// Construction du tableau de cheminement
	var resultat = formateurHandler.construireTableauCheminement(databaseCours, database);
	
    // Retourne le tableau html généré avec les données de la bd
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    res.json({statut: "succes", contenu: resultat});
});


//////////////////////////////////////////////////////////
// Démarrage de l'application
//////////////////////////////////////////////////////////
portail.listen(portail.get('port'), function(){
    console.log("server is listening on: %s", portail.get('port'));
});
