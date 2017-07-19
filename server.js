/////////////////////////////////////
// Import des librairies nécessaires
/////////////////////////////////////
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


/////////////////////////////////////
// Représente l'application
/////////////////////////////////////
var portail = express();
portail.set('port', (process.env.PORT || 8080));

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


//////////////////////////////////////////////////////////
// Gestion des POST
//////////////////////////////////////////////////////////

// Gestion POST page connexion
portail.post('/connexion', function(req, res) {
    
    var code = req.body.code;
    var nip = req.body.nip;
    
    console.log("Code permanent: %s", code);
    console.log("NIP:            %s", nip);
    
	// TODO: déplacer la validation dans un autre module	
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


// Gestion POST relevé de notes page d'accueil
portail.post('/relevedenotes', function(req, res) 
{	
	// TODO : Interroger la bd
	// Exemple de données récupérées de la bd
	var items = [
    {code: 'INF1120', name: 'Programmation I', description: 'A+'}, 
    {code: 'INF1130', name: 'Mathématiques pour informaticien', description: 'A'}, 
    {code: 'INF4375', name: 'Paradigmes des échanges Internet', description: 'A-'}, 
    {code: 'INM5151', name: 'Projet d\'analyse et de modélisation', description: 'B+'}, 
    {code: 'INF2120', name: 'Programmation II', description: 'B'}, 
	];

	// TODO : Vérifier l'existence de données
	//        Si aucune donnée, retourner un statut erreur et un message à afficher
	//		  res.json({statut: "erreur", contenu: 'Vous n'avez aucune note de disponible'});
	// Construction du tableau html correspondant
	
	// TODO : extraire la fonction dans un autre module
	// TODO : gérer les caractères accentués
	var resultat = '';
	resultat += '<table class=\"notes\">';
	resultat += '<col width="75"><col width="200"><col width="75">';
	resultat += '<tr><th>Sigle</th><th>Nom</th><th>Note</th></tr>';
	
	var i;
	for(i in items)
	{
		resultat += '<tr>';
		resultat += '<td>' + items[i].code + '</td>';
		resultat += '<td>' + items[i].name + '</td>';
		resultat += '<td>' + items[i].description + '</td>';
		resultat += '</tr>';
	}
	resultat += '</table>';
	 
	// Retourne le tableau html généré avec les données de la bd
	res.set({ 'content-type': 'application/json; charset=utf-8' });
	res.json({statut: "succes", contenu: resultat});
});

// Gestion POST inscription page d'accueil
portail.post('/inscription', function(req, res) 
{	
	// TODO : Interroger la bd
	// Exemple de données récupérées de la bd
	var cours = [
    {code: 'INF1120', name: 'Programmation I', credit: 3 , jour: 'Lundi', periode: 'Matin', duree: 3, type: 'Cours Magistral'}, 
    {code: 'INF1120', name: 'Programmation I', credit: 3 , jour: 'Mardi', periode: 'Soir', duree: 2, type: 'Laboratoire'},
    {code: 'INF1130', name: 'Mathématiques pour informaticien', credit: 3, jour: 'Mardi', periode: 'Apres-Midi', duree: 3, type: 'Cours Magistral'}, 
    {code: 'INF4375', name: 'Paradigmes des échanges Internet', credit: 3, jour: 'Mercredi', periode: 'Apres-Midi', duree: 3, type: 'Cours Magistral'},
    {code: 'INF4375', name: 'Paradigmes des échanges Internet', credit: 3 , jour: 'Mercredi', periode: 'Matin', duree: 2, type: 'Laboratoire'},  
    {code: 'INM5151', name: 'Projet d\'analyse et de modélisation', credit: 3, jour: 'Jeudi', periode: 'Soir', duree: 3, type: 'Cours Magistral'}, 
    {code: 'INF2120', name: 'Programmation II', credit: 3, jour: 'Vendredi', periode: 'Apres-Midi', duree: 3, type: 'Cours Magistral'}, 
    {code: 'INF2120', name: 'Programmation II', credit: 3 , jour: 'Jeudi', periode: 'Apres-Midi', duree: 2, type: 'Laboratoire'}, 
	];

        // Si aucun cours, afficher un message approprie sur la page
	
	var horaireCours = '<h2>Horaire Session</h2>';
	horaireCours += '<table class=\"cours\">';
	horaireCours += '<col width="75"><col width="200"><col width="75">';
	horaireCours += '<tr><th>Sigle</th><th>Nom</th><th>Jour</th><th>Periode</th><th>Duree</th><th>Type</th></tr>';
	
	var i;
	for(i in cours)
	{
		horaireCours += '<tr>';
		horaireCours += '<td>' + cours[i].code + '</td>';
		horaireCours += '<td>' + cours[i].name + '</td>';
		horaireCours += '<td>' + cours[i].jour + '</td>';
                horaireCours += '<td>' + cours[i].periode + '</td>';
                horaireCours += '<td>' + cours[i].duree + '</td>';
                horaireCours += '<td>' + cours[i].type + '</td>';
		horaireCours += '</tr>';
	}
	horaireCours += '<tr>';
	horaireCours += '</table>';

	// Tableau d'inscription 
	horaireCours += '<h2>Inscription</h2>
	horaireCours += '<table class=\"inscription"\">';
	horaireCours += '<tr><th>Sigle</th><th>Groupe</th></tr>;
        
        
	 
	// Retourne le tableau html généré avec les données de la bd
	res.set({ 'content-type': 'application/json; charset=utf-8' });
	res.json({statut: "succes", contenu: horaireCours});
});

// Gestion POST inscription page d'accueil
portail.post('/desinscription', function(req, res) 
{
    // TODO : Interroger la bd
	// Exemple de données récupérées de la bd
	var coursDes = [
    {code: 'INF1120', name: 'Programmation I', credit: 3 , jour: 'Lundi', periode: 'Matin', duree: 3, type: 'Cours Magistral'}, 
    {code: 'INF1130', name: 'Mathématiques pour informaticien', credit: 3, jour: 'Mardi', periode: 'Apres-Midi', duree: 3, type: 'Cours Magistral'}, 
    {code: 'INF4375', name: 'Paradigmes des échanges Internet', credit: 3, jour: 'Mercredi', periode: 'Apres-Midi', duree: 3, type: 'Cours Magistral'},
    {code: 'INM5151', name: 'Projet d\'analyse et de modélisation', credit: 3, jour: 'Jeudi', periode: 'Soir', duree: 3, type: 'Cours Magistral'}, 
    {code: 'INF2120', name: 'Programmation II', credit: 3, jour: 'Vendredi', periode: 'Apres-Midi', duree: 3, type: 'Cours Magistral'}, 
	];

        // Si aucun cours, afficher un message approprie sur la page
	
	var horaireCours = '';
	horaireCours += '<table class=\"cours\">';
	horaireCours += '<col width="75"><col width="200"><col width="75">';
	horaireCours += '<tr><th>Sigle</th><th>Nom</th><th>Jour</th><th>Periode</th><th>Duree</th><th>Supprimer</th></tr>';
	
	var i;
	for(i in coursDes)
	{
		horaireCours += '<tr>';
		horaireCours += '<td>' + coursDes[i].code + '</td>';
		horaireCours += '<td>' + coursDes[i].name + '</td>';
		horaireCours += '<td>' + coursDes[i].jour + '</td>';
                horaireCours += '<td>' + coursDes[i].periode + '</td>';
                horaireCours += '<td>' + coursDes[i].duree + '</td>';
		horaireCours += '<td>' + '<button type="button">X</button>' + '</td>';
		horaireCours += '</tr>';
	}
	horaireCours += '</table>';
        
        
	 
	// Retourne le tableau html généré avec les données de la bd
	res.set({ 'content-type': 'application/json; charset=utf-8' });
	res.json({statut: "succes", contenu: horaireCours});
});

//////////////////////////////////////////////////////////
// Démarrage de l'application
//////////////////////////////////////////////////////////
portail.listen(portail.get('port'), function(){
    console.log("server is listening on: %s", portail.get('port'));
});
