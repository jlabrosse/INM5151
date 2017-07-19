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
    //        res.json({statut: "erreur", contenu: 'Vous n'avez aucune note de disponible'});
    // Construction du tableau html correspondant
    
    // TODO : extraire la fonction dans un autre module
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


// Gestion POST cheminement page d'accueil
portail.post('/cheminement', function(req, res) {

  var cours = [
    {code: 'INF1120', name: 'Programmation I', statut:'complet', prealable:'none'}, 
    {code: 'INF1130', name: 'Mathématiques pour informaticien', statut:'complet', prealable:'none'}, 
    {code: 'MAT1600', name: 'Algèbre matricielle', statut:'complet', prealable:'none'}, 
    {code: 'MET1105', name: 'Gestion des système d\'information', statut:'complet', prealable:'none'}, 
    {code: 'ECO1081', name: 'Économie des technologies de l\'information', statut:'complet', prealable:'none'}, 
    {code: 'INF2120', name: 'Programmation II', statut:'complet', prealable:'INF1120'},
    {code: 'INF2170', name: 'Assembleur', statut:'complet', prealable:'INF1120'}, 
    {code: 'MAT4681', name: 'Statistique pour les sciences', statut:'complet', prealable:'none'}, 
    {code: 'ORH1163', name: 'Comportement organisationnel', statut:'complet', prealable:'none'}, 
    {code: 'Langue', name: 'Cours de langue', statut:'enCours', prealable:'none'}, 
    {code: 'INF3270', name: 'Téléinformatique', statut:'enCours', prealable:'INF2120 INF2170'}, 
    {code: 'INF3143', name: 'Modélisation et spécification formelles de logiciels', statut:'enCours', prealable:'INF1130'}, 
    {code: 'INF3180', name: 'Fichiers et bases de données', statut:'enCours', prealable:'INF2120'}, 
    {code: 'INF3135', name: 'Construction et maintenance de logiciels', statut:'aFaire', prealable:'INF2120'}, 
    {code: 'INF3172', name: 'Principes des système d\'exploitation', statut:'aFaire', prealable:'INF3172'}, 
    {code: 'INF3105', name: 'Structure de données et algorithmes', statut:'aFaire', prealable:'INF1130 INF2120'}, 
    {code: 'INF5151', name: 'Génie logiciel: analyse et modélisation', statut:'aFaire', prealable:'none'}, 
    {code: 'Compl.', name: 'Cours complémentaire', statut:'aFaire', prealable:'none'}, 
    {code: 'INF2160', name: 'Paradigmes de programmation', statut:'aFaire', prealable:'INF1130'}, 
    {code: 'INF5153', name: 'Génie logiciel: conception', statut:'aFaire', prealable:'INF5151'}, 
    {code: 'INM5151', name: 'Projet d\'analyse et de modélisation', statut:'aFaire', prealable:'INF5151 '}, 
    {code: 'Choix1', name: 'Cours au choix', statut:'aFaire', prealable:'Choix1'}, 
    {code: 'INF4375', name: 'Paradigmes des échanges Internet', statut:'aFaire', prealable:'INF2120'}, 
    {code: 'INF6150', name: 'Génie logiciel: conduite de projets informatiques', statut:'aFaire', prealable:'INF5153'}, 
    {code: 'INF5180', name: 'Conception et exploitation d\'une base de données', statut:'aFaire', prealable:'INF3180'}, 
    {code: 'Choix2', name: 'Cours au choix', statut:'aFaire', prealable:'Choix2'}, 
    {code: 'INF4170', name: 'Architecture des ordinateurs', statut:'aFaire', prealable:'INF3172'}, 
    {code: 'INM6000', name: 'Informatique et société', statut:'aFaire', prealable:'none'}, 
    {code: 'Choix3', name: 'Cours au choix', statut:'aFaire', prealable:'Choix3'}, 
    {code: 'Choix4', name: 'Cours au choix', statut:'aFaire', prealable:'Choix4'}, 
    ];

    var listChoix = '<option>Choix</option>' +
                    '<option>INF2015</option>' +
                    '<option>INF4100</option>' +
                    '<option>INF5000</option>' +
                    '<option>INF5071</option>' +
                    '<option>INF5171</option>';

    var resultat = '<table class=\"cheminement\">';
    resultat += '<col width="100"><col width="100"><col width="100"><col width="100"><col width="100">';

    var i;
    var j = 0;
    var newLine = 5;
    resultat += '<tr>';
    for(i in cours)
    {
        if( j > 5 && newLine === 5) {
            j = 0;
            newLine = 4;
        }
        if( j > 0 && !(j % newLine) ) {
            resultat += '</tr>';
            resultat += '<tr>';
        } 
        resultat += '<td id=\"' + cours[i].code + '\"' 
                    + ' style=\"cursor:pointer\"' 
                    + ' class=\"cheminementCell ' + cours[i].statut + '\"' 
                    + ' data-prealable=\"' + cours[i].prealable + '\">' 
                    + '<a href=\"#\"><b>' 
                    + cours[i].code + '</b></br>'  
                    + cours[i].name + '</a>';
        if( cours[i].code.match(/Choix./)) {
            resultat += '<select id=\"coursAu' + cours[i].code + '\">' + listChoix + '</select>';
        }
        resultat += '</td>';
        ++j;

    }
    resultat += '</tr></table>';
    
     
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
