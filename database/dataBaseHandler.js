//////////////////////////////////////////////////
// Informations étudiant
//////////////////////////////////////////////////
function getNom(db)
{
	var etudiant = db['etudiant'];
	return etudiant['nom'];
}

function getPrenom(db)
{
	var etudiant = db['etudiant'];
	return etudiant['prenom'];
}

function getCodePermanent(db)
{
	var etudiant = db['etudiant'];
	return etudiant['codePermanent'];
}

function getCodeProgramme(db)
{
	var etudiant = db['etudiant'];
	var programme = etudiant['programme'];
	return programme.codeProgramme;
}

function getTitreProgramme(db)
{
	var etudiant = db['etudiant'];
	var programme = etudiant['programme'];
	return programme['titre'];
}

function getTotalCreditProgramme(db)
{
	var etudiant = db['etudiant'];
	var programme = etudiant['programme'];
	return programme['totalCredit'];
}
	

//////////////////////////////////////////////////
// Cours terminés
//////////////////////////////////////////////////
function getCoursTermines(db)
{
	var etudiant = db['etudiant'];
	var programme = etudiant['programme'];
	var coursTermines = programme['coursTermines'];
	
	return coursTermines;
}


//////////////////////////////////////////////////
// Cours à compléter
//////////////////////////////////////////////////
function getCoursACompleter(db)
{
	var etudiant = db['etudiant'];
	var programme = etudiant['programme'];
	var coursACompleter = programme['coursACompletes'];
	
	return coursACompleter;
}


//////////////////////////////////////////////////
// Cours session
//////////////////////////////////////////////////
function ajouterCoursSession(db, cours)
{
	var etudiant = db['etudiant'];
	var programme = etudiant['programme'];
	var sessionEnCours = programme['sessionEnCours'];
	
	sessionEnCours.push(cours);
}

function supprimerCoursSession(db, sigle)
{
	var etudiant = db['etudiant'];
	var programme = etudiant['programme'];
	var coursSession = programme['sessionEnCours'];
	
	for(var i = coursSession.length - 1; i >= 0; i--) {
		if(coursSession[i].sigle === sigle) {
		   coursSession.splice(i, 1);
		}
	}
}

function getCoursSession(db)
{
	var etudiant = db['etudiant'];
	var programme = etudiant['programme'];
	var coursSession = programme['sessionEnCours'];
	
	return coursSession;
}


//////////////////////////////////////////////////
// Affiche DB dans console
//////////////////////////////////////////////////
function afficherDB(db)
{
	var etudiant = db['etudiant'];
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
	getNom: function(db) {
		return getNom(db);
	},
	getPrenom: function(db) {
		return getPrenom(db);
	},
	getCodePermanent: function(db) {
		return getCodePermanent(db);
	},
	getCodeProgramme: function(db) {
		return getCodeProgramme(db);
	},
	getTitreProgramme: function(db) {
		return getTitreProgramme(db);
	},
	getTotalCreditProgramme: function(db) {
		return getTotalCreditProgramme(db);
	},
	getCoursTermines: function(db) {
		return getCoursTermines(db);
	},
	getCoursACompleter: function(db) {
		return getCoursACompleter(db);
	},
	ajouterCoursSession: function(db, data) {
		ajouterCoursSession(db, data);
	},
	supprimerCoursSession: function(db, data) {
		supprimerCoursSession(db, data);
	},
	getCoursSession : function(db) {
		return getCoursSession(db);
	},
	afficherDB: function(db) {
		afficherDB(db);
	}	
}