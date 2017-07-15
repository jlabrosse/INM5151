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
// Bases de données
/////////////////////////////////////
var databaseHandler = require("./database/databaseHandler.js"); 
var database = JSON.parse(fs.readFileSync('./database/database.json'));
var databaseCours = JSON.parse(fs.readFileSync('./database/databaseCours.json'));
var formateurHandler = require("./formateur/formateurHandler.js");


/////////////////////////////////////
// Settings
/////////////////////////////////////
portail.engine('.html', require('ejs').__express); // Pas sûr de cette ligne
portail.set('views', __dirname + '/views');
portail.set('view engine', 'html');
portail.use(express.static(path.join(__dirname, 'public')));
portail.use(bodyParser.urlencoded({extended: false}));
portail.use(bodyParser.json());


/////////////////////////////////////
// Page de bienvenue 
/////////////////////////////////////
portail.get('/', function(req, res) 
{   
    console.log('Bienvenue sur l\'application Portail Etudiant');
    
    // Affiche la page connexion.html
    res.render('connexion');
});


/////////////////////////////////////
// Gestion des GET
/////////////////////////////////////
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


portail.get('/facture', function(req, res)
{
    // Affiche la page facture.html
    res.render('facture');
});


portail.get('/horaire', function(req, res)
{
    // Affiche la page horaire.html
    res.render('horaire');
});

portail.get('/cheminement', function(req, res)
{
    // Affiche la page cheminement.html
    res.render('cheminement');
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

    res.json({statut: "succes", contenu: 'Facture'});
});


// Gestion POST horaire page d'accueil
portail.post('/horaire', function(req, res) {

    res.json({statut: "succes", contenu: 'Horaire'});
});


// Gestion POST inscription page d'accueil
portail.post('/inscription', function(req, res) {

    res.json({statut: "succes", contenu: 'Inscription'});
});


// Gestion POST désinscription page d'accueil
portail.post('/desinscription', function(req, res) {

    res.json({statut: "succes", contenu: 'Désinscription'});
});


// Gestion POST relevé de notes page d'accueil
portail.post('/relevedenotes', function(req, res) 
{   
    // Récupération des données
	var coursTermines = databaseHandler.getCoursTermines(database);
	
	// Construction du tableau html correspondant    
    var resultat = formateurHandler.construireTableauReleveNotes(coursTermines);
     
    // Retourne le tableau html généré avec les données de la bd
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    res.json({statut: "succes", contenu: resultat});
});


// Gestion POST cheminement page d'accueil
portail.post('/cheminement', function(req, res) {
	
	// Construction du tableau de cheminement
	var resultat = formateurHandler.construireTableauCheminement(databaseCours);
	
    // Retourne le tableau html généré avec les données de la bd
    res.set({ 'content-type': 'application/json; charset=utf-8' });
    res.json({statut: "succes", contenu: resultat});
});



//////////////////////////////////////////////////////////
// Démarrage de l'application
//////////////////////////////////////////////////////////
portail.listen(portail.get('port'), function(){
    console.log("server is listening on: %s", portail.get('port'));
	
	databaseHandler.afficherDB(database);
});
