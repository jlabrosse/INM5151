/////////////////////////////////////
// Import des librairies n�cessaires
/////////////////////////////////////
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


/////////////////////////////////////
// Repr�sente l'application
/////////////////////////////////////
var portail = express();


/////////////////////////////////////
// Settings
/////////////////////////////////////
portail.engine('.html', require('ejs').__express); // Pas s�r de cette ligne
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
    
	// TODO: d�placer la validation dans un autre module	
    // Si champs valides, retourne le statut (succes) et l'url de redirection
	if(code == 'admin' && nip == 'admin')
	{
		res.json({statut: "succes", redirection: 'accueil'});
	}
    // Sinon, retourne le statut (erreur) et un message d'erreur � afficher 
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


// Gestion POST d�sinscription page d'accueil
portail.post('/desinscription', function(req, res) {

	res.json({statut: "succes", contenu: 'D�sinscription'});
});


// Gestion POST relev� de notes page d'accueil
portail.post('/relevedenotes', function(req, res) 
{	
	// TODO : Interroger la bd
	// Exemple de donn�es r�cup�r�es de la bd
	var items = [
    {code: 'INF1120', name: 'Programmation I', description: 'A+'}, 
    {code: 'INF1130', name: 'Math�matiques pour informaticien', description: 'A'}, 
    {code: 'INF4375', name: 'Paradigmes des �changes Internet', description: 'A-'}, 
    {code: 'INM5151', name: 'Projet d\'analyse et de mod�lisation', description: 'B+'}, 
    {code: 'INF2120', name: 'Programmation II', description: 'B'}, 
	];

	// TODO : V�rifier l'existence de donn�es
	//        Si aucune donn�e, retourner un statut erreur et un message � afficher
	//		  res.json({statut: "erreur", contenu: 'Vous n'avez aucune note de disponible'});
	// Construction du tableau html correspondant
	
	// TODO : extraire la fonction dans un autre module
	// TODO : g�rer les caract�res accentu�s
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
	 
	// Retourne le tableau html g�n�r� avec les donn�es de la bd
	res.set({ 'content-type': 'application/json; charset=utf-8' });
	res.json({statut: "succes", contenu: resultat});
});


//////////////////////////////////////////////////////////
// D�marrage de l'application
//////////////////////////////////////////////////////////
portail.listen(8080);
