var fs = require('fs');
var databaseHandler = require('../database/dataBaseHandler.js'); 
var database = JSON.parse(fs.readFileSync('./database/database.json'));
var databaseCours = JSON.parse(fs.readFileSync('./database/databaseCours.json'));


//////////////////////////////////////////////////
// Informations étudiant
//////////////////////////////////////////////////
function getDatabase()
{
	return database;
}

function getDatabaseCours()
{
	return databaseCours;
}

function getNom()
{
	var etudiant = database['etudiant'];
	return etudiant['nom'];
}

function getPrenom()
{
	var etudiant = database['etudiant'];
	return etudiant['prenom'];
}

function getCodePermanent()
{
	var etudiant = database['etudiant'];
	return etudiant['codePermanent'];
}

function getCodeProgramme()
{
	var etudiant = database['etudiant'];
	var programme = etudiant['programme'];
	return programme.codeProgramme;
}

function getTitreProgramme()
{
	var etudiant = database['etudiant'];
	var programme = etudiant['programme'];
	return programme['titre'];
}

function getTotalCreditProgramme()
{
	var etudiant = database['etudiant'];
	var programme = etudiant['programme'];
	return programme['totalCredit'];
}
	

//////////////////////////////////////////////////
// Cours terminés
//////////////////////////////////////////////////
function getCoursTermines()
{
	var etudiant = database['etudiant'];
	var programme = etudiant['programme'];
	var coursTermines = programme['coursTermines'];
	
	return coursTermines;
}


//////////////////////////////////////////////////
// Cours à compléter
//////////////////////////////////////////////////
function getCoursACompleter()
{
	var etudiant = database['etudiant'];
	var programme = etudiant['programme'];
	var coursACompleter = programme['coursACompletes'];
	
	return coursACompleter;
}


//////////////////////////////////////////////////
// Cours session
//////////////////////////////////////////////////
function ajouterCoursSession(cours)
{
	var etudiant = database['etudiant'];
	var programme = etudiant['programme'];
	var sessionEnCours = programme['sessionEnCours'];
	
	sessionEnCours.push(cours);
}

function supprimerCoursSession(sigle)
{
	var etudiant = database['etudiant'];
	var programme = etudiant['programme'];
	var coursSession = programme['sessionEnCours'];
	
	for(var i = coursSession.length - 1; i >= 0; i--) {
		if(coursSession[i].sigle === sigle) {
		   coursSession.splice(i, 1);
		}
	}
}

function getCoursSession()
{
	var etudiant = database['etudiant'];
	var programme = etudiant['programme'];
	var coursSession = programme['sessionEnCours'];
	
	return coursSession;
}


//////////////////////////////////////////////////
// Affiche DB dans console
//////////////////////////////////////////////////
function afficherDB()
{
	var etudiant = database['etudiant'];
	console.log('Prenom: ' + etudiant['prenom']);
	console.log('Nom: ' + etudiant['nom']);
	console.log('Code permanent: ' + etudiant['codePermanent']);

	var programme = etudiant['programme'];
	console.log('Code: ' + programme.codeProgramme);
	console.log('Titre: ' + programme['titre']);
	console.log('Credits: ' + programme['totalCredit']);
	
	var coursTermines = programme['coursTermines'];
	console.log('===\nCours completes:\n===\n');
	for(var cours in coursTermines)
	{
		console.log('---');
		console.log('Titre: ' + coursTermines[cours].titre);
		console.log('Sigle: ' + coursTermines[cours].sigle);
		console.log('Credit: ' + coursTermines[cours].credit);
		console.log('Resultat: ' + coursTermines[cours].resultat);
		console.log('Frais: ' + coursTermines[cours].frais);
	}
	
	var sessionEnCours = programme['sessionEnCours'];
	console.log('===\nCours session:\n===\n');
	for(var cours in sessionEnCours)
	{
		console.log('---');
		console.log('Titre: ' + sessionEnCours[cours].titre);
		console.log('Sigle: ' + sessionEnCours[cours].sigle);
		console.log('Credit: ' + sessionEnCours[cours].credit);
		console.log('Resultat: ' + sessionEnCours[cours].resultat);
		console.log('Frais: ' + sessionEnCours[cours].frais);
	}
	
	var coursACompleter = programme['coursACompletes'];
	console.log('===\nCours a completer:\n===\n');
	for(var cours in coursACompleter)
	{
		console.log('---');
		console.log('Titre: ' + coursACompleter[cours].titre);
		console.log('Sigle: ' + coursACompleter[cours].sigle);
		console.log('Credit: ' + coursACompleter[cours].credit);
		console.log('Resultat: ' + coursACompleter[cours].resultat);
		console.log('Frais: ' + coursACompleter[cours].frais);
	}
}


//////////////////////////////////////////////////
// Méthodes accessibles à l'extérieur du module
//////////////////////////////////////////////////
module.exports = 
{
	getDatabase: function() {
		return getDatabase();
	},
	getDatabaseCours: function() {
		return getDatabaseCours();
	},
	getNom: function() {
		return getNom();
	},
	getPrenom: function() {
		return getPrenom();
	},
	getCodePermanent: function() {
		return getCodePermanent();
	},
	getCodeProgramme: function() {
		return getCodeProgramme();
	},
	getTitreProgramme: function() {
		return getTitreProgramme();
	},
	getTotalCreditProgramme: function() {
		return getTotalCreditProgramme();
	},
	getCoursTermines: function() {
		return getCoursTermines();
	},
	getCoursACompleter: function() {
		return getCoursACompleter();
	},
	ajouterCoursSession: function(data) {
		ajouterCoursSession(data);
	},
	supprimerCoursSession: function(data) {
		supprimerCoursSession(data);
	},
	getCoursSession : function() {
		return getCoursSession();
	},
	afficherDB: function() {
		afficherDB();
	}	
}