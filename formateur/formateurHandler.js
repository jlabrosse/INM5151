var fs = require('fs');
var databaseHandler = require('../database/dataBaseHandler.js'); 
var database = JSON.parse(fs.readFileSync('./database/database.json'));

//////////////////////////////////////////////////
// Construction tableau cheminement
//////////////////////////////////////////////////
function construireTableauCheminement(databaseCours, database)
{
    var listChoix = '<option>Choix</option>' +
            '<option>INF2015</option>' +
            '<option>INF4100</option>' +
            '<option>INF5000</option>' +
            '<option>INF5071</option>' +
            '<option>INF5171</option>';

	var resultat = '<table class=\"cheminement\">';
    resultat += '<col width="20%"><col width="20%"><col width="20%"><col width="20%"><col width="20%">';
    var i;
    var j = 0;
    var newLine = 5;
    resultat += '<tr>';
    for (i in databaseCours)
    {
        if (j > 5 && newLine === 5) {
            j = 0;
            newLine = 4;
        }
        if (j > 0 && !(j % newLine)) {
            resultat += '</tr>';
            resultat += '<tr>';
        }
        resultat += '<td id=\"' + databaseCours[i].code + '\"'
                + ' style=\"cursor:pointer\"'
                + ' class=\"cheminementCell ' + findCoursStatus(database, databaseCours[i].code) + '\"'
                + ' data-prealable=\"' + databaseCours[i].prealable + '\">'
                + '<a class="cheminementSigle" href=\"#\">'
                + databaseCours[i].code + '</br><span class="cheminementName">'
                + databaseCours[i].name + '</span></a>';
        if (databaseCours[i].code.match(/Choix./)) {
            resultat += '<select class="selectCoursChoix" id=\"coursAu' + databaseCours[i].code + '\">' + listChoix + '</select>';
        }
        resultat += '</td>';
        ++j;

    }
    resultat += '</tr></table>';
    return resultat;
}

function findCoursStatus ( database, sigle ) {
    var complet = database['etudiant']['programme']['coursTermines'];
    var enCours = database['etudiant']['programme']['sessionEnCours'];
    var aFaire = database['etudiant']['programme']['coursACompletes'];
    for( var i = 0; i < complet.length; ++i ) {
        if( complet[i]['code'] === sigle )
            return "complet";
    }
    for( var i = 0; i < enCours.length; ++i ) {
        if( enCours[i]['code'] === sigle )
            return "enCours";
    }
    return "aFaire";

}

//////////////////////////////////////////////////
// Construction tableau relevé de  notes
//////////////////////////////////////////////////
function construireTableauReleveNotes(coursTermines)
{
    var resultat = '<h2>Relevé de notes</h2>';
	resultat += '<div style=\' display: flex; width: 100%; text-align: center; \'>';
	resultat += '<div style=\' margin-left: 2%; width: 15%; background-color: #39E85C; border: 5px solid rgb(0, 78, 103); border-radius: 25px; padding: 0px; \'> <h3 style=\' color: rgb(51, 123, 174); \'> Crédits validés </h3> <h2> ' + coursTermines.length * 3 + ' </h2> </div>';
	resultat += '<div style=\' margin-left: 2%; width: 15%; background-color: lightgrey; border: 5px solid rgb(0, 78, 103); border-radius: 25px; padding: 0px;\'> <h3 style=\' color: rgb(51, 123, 174); \'> Total </h3> <h2> ' + databaseHandler.getTotalCreditProgramme(database) + ' </h2> </div> </div>';
	resultat += '</div>';
	resultat += '<p></p>';
    resultat += '<table class=\"notes\">';
    resultat += '<col width="75"><col width="200"><col width="75"><col width="75">';
    resultat += '<tr><th>Sigle</th><th>Titre</th><th>Crédit</th><th>Résultat</th></tr>';

    for (var cours in coursTermines)
    {
        console.log(coursTermines[cours]);
        resultat += '<tr>';
        resultat += '<td>' + coursTermines[cours].code + '</td>';
        resultat += '<td>' + coursTermines[cours].name + '</td>';
        resultat += '<td>' + '3' + '</td>';
        resultat += '<td>' + coursTermines[cours].resultat + '</td>';
        resultat += '</tr>';
    }

    resultat += '</table>';

    console.log("done.");

    return resultat;
}

//////////////////////////////////////////////////
// Construction tableau relevé de facture courante
//////////////////////////////////////////////////
function construireTableauFactureCourante(coursCourant)
{
    var resultat = '';
    resultat += '<table class=\"facture\">';
    //resultat += '<col width="75"><col width="200"><col width="75">';
    resultat += '<tr><th>Sigle</th><th>Titre</th><th>Frais</th></tr>';
    var total = 0;

    for (var cours in coursCourant)
    {
        resultat += '<tr>';
        resultat += '<td>' + coursCourant[cours].code + '</td>';
        resultat += '<td>' + coursCourant[cours].name + '</td>';
        resultat += '<td>' + coursCourant[cours].frais + '</td>';
        resultat += '</tr>';
        total += coursCourant[cours].frais;
    }
    total = Math.round(total * 100) / 100;

    resultat += '<tfoot><th style="text-align:left" colspan="2">Total :</th><td>' + total + '</td></tfoot></table>'

    return '<h2>Facture courante</h2>' + resultat;
}

//////////////////////////////////////////////////
// Construction tableau relevé de facture anterieure
//////////////////////////////////////////////////
function construireTableauFactureAnterieure(coursAnterieure)
{
    var resultat = '';
    resultat += '<table class=\"facture\">';
    //resultat += '<col width="75"><col width="200"><col width="75">';
    resultat += '<tr><th>Sigle</th><th>Titre</th><th>Frais</th></tr>';
    var total = 0;

    for (var cours in coursAnterieure)
    {
        resultat += '<tr>';
        resultat += '<td>' + coursAnterieure[cours].code + '</td>';
        resultat += '<td>' + coursAnterieure[cours].name + '</td>';
        resultat += '<td>' + coursAnterieure[cours].frais + '</td>';
        resultat += '</tr>';
        total += coursAnterieure[cours].frais;
    }
    total = Math.round(total * 100) / 100;

    resultat += '<tfoot><th style="text-align:left" colspan="2">Total :</th><td>' + total + '</td></tfoot></table>'

    return '<h2>Facture anterieure</h2>' + resultat;
}

//////////////////////////////////////////////////
// Construction page Horaire
//////////////////////////////////////////////////
function construirePageHoraire(coursCourant)
{
    var horaireCours = '<h2>Horaire Session Courante</h2>';

    // Tableau Horaire
    horaireCours += '<table class=\"cours\">';
    horaireCours += '<col width="75"><col width="200"><col width="75">';
    horaireCours += '<tr><th>Sigle</th><th>Titre</th><th>Labo</th><th>Professeur</th>'
    horaireCours += '<th>Local</th><th>Groupe</th><th>Période</th></tr>';
    
    for (var cours in coursCourant)
    {
        var boolLabo = 'Non';
        if( coursCourant[cours].labo !== null ){
            boolLabo = 'Oui';
        }
        
        horaireCours += '<tr>';
        horaireCours += '<td>' + coursCourant[cours].code + '</td>';
        horaireCours += '<td>' + coursCourant[cours].name + '</td>';
        horaireCours += '<td>' + boolLabo + '</td>';
        horaireCours += '<td>' + coursCourant[cours].professeur + '</td>';
        horaireCours += '<td>' + coursCourant[cours].local + '</td>';
        horaireCours += '<td>' + coursCourant[cours].groupe + '</td>';
        horaireCours += '<td>' + coursCourant[cours].periode + '</td>';
        horaireCours += '</tr>';
    }
    horaireCours += '</table>';

    console.log("FormateurHandler Horaire : done.");
	
    // Retourne le tableau html généré avec les données de la bd
    return horaireCours;
}

//////////////////////////////////////////////////
// Construction page Inscription
//////////////////////////////////////////////////
function construirePageInscription(coursCourant, coursFutures, coursTermines)
{
    // var horaireCours = '<h2>Faire son inscription</h2>';
    // // Texte sur date limite d'inscription
    // horaireCours += '<div>Date limite: La date limite d\'inscription';
    // horaireCours += ' pour la session Automne 2017';
    // horaireCours += ' est le 27 juin 2017</div>';
    // // Tableau -(Affiche horaire actuelle)
    // horaireCours += '<h3>Mon horaire</h3>';
    // horaireCours += '<table class=\"cours\">';
    // horaireCours += '<col width="75"><col width="200"><col width="75">';
    // horaireCours += '<tr><th>Sigle</th><th>Titre</th><th>Labo</th><th>Professeur</th>'
    // horaireCours += '<th>Local</th><th>Groupe</th><th>Période</th></tr>';

    // for (var cours in coursCourant)
    // {
    //     var boolLabo = 'Non';
    //     if( coursCourant[cours].labo !== null ){
    //         boolLabo = 'Oui';
    //     }
        
    //     horaireCours += '<tr>';
    //     horaireCours += '<td>' + coursCourant[cours].code + '</td>';
    //     horaireCours += '<td>' + coursCourant[cours].name + '</td>';
    //     horaireCours += '<td>' + boolLabo + '</td>';
    //     horaireCours += '<td>' + coursCourant[cours].professeur + '</td>';
    //     horaireCours += '<td>' + coursCourant[cours].local + '</td>';
    //     horaireCours += '<td>' + coursCourant[cours].groupe + '</td>';
    //     horaireCours += '<td>' + coursCourant[cours].periode + '</td>';
    //     horaireCours += '</tr>';
    // }
    var horaireCours = "";
    horaireCours += '</table>';
    // Tableau Faire inscription
    horaireCours += '<h3>S\'inscrire</h3>';
    horaireCours += '<table id="inscriptionCours" class=\"cours\">';
    horaireCours += '<tr><th>Sigle</th><th>Groupe</th><th></th></tr>';
    horaireCours += '<tr><td><select class="selectCoursAFaire">' ;
    horaireCours += '<option>Selection</option>' ;
    for (var cours in coursFutures)
    {       
        if(coursFutures[cours].code !== "Langue" && coursFutures[cours].code !== "Compl." && !coursFutures[cours].code.match(/Choix/))
            horaireCours += '<option data-groupe="' + coursFutures[cours].groupe+'">' + coursFutures[cours].code + '</option>';
    }
    horaireCours += '</select></td>';
    horaireCours += '<td><select disabled id="selectGroupeCoursAFaire"></select></td>'
    horaireCours += '<td><button type="button" id="validerInscription">Soumettre</button>'
    horaireCours += '</tr></table>';

    
    console.log("FormateurHandler Inscription : done.");
    // Retourne le tableau html généré avec les données de la bd
    return horaireCours;
}

//////////////////////////////////////////////////
// Construction page Desinscription
//////////////////////////////////////////////////
function construirePageDesinscription(coursCourant)
{
    var horaireCours = '<h2>Désinscription</h2>';
    // Texte sur date limite de désinscription
    horaireCours += '<div>Date limite: La date limite de désinscription'
    horaireCours += ' sans pénalités pour la session Été 2017'
    horaireCours += ' est le 10 juin 2017</div>'
    // Tableau desinscription
    horaireCours += '<table class=\"cours\">';
    horaireCours += '<col width="75"><col width="200"><col width="75">';
    horaireCours += '<tr><th>Supprimer</th><th>Sigle</th><th>Titre</th><th>Labo</th><th>Professeur</th>'
    horaireCours += '<th>Local</th><th>Groupe</th><th>Période</th></tr>';

    for (var cours in coursCourant)
    {
        var boolLabo = 'Non';
        if( coursCourant[cours].labo !== null ){
            boolLabo = 'Oui';
        }
        
        horaireCours += '<tr>';
        
        horaireCours += '<td>' + '<button type="button" onclick="effacerCours();" >X</button>' + '</td>';
        horaireCours += '<td>' + coursCourant[cours].code + '</td>';
        horaireCours += '<td>' + coursCourant[cours].name + '</td>';
        horaireCours += '<td>' + boolLabo + '</td>';
        horaireCours += '<td>' + coursCourant[cours].professeur + '</td>';
        horaireCours += '<td>' + coursCourant[cours].local + '</td>';
        horaireCours += '<td>' + coursCourant[cours].groupe + '</td>';
        horaireCours += '<td>' + coursCourant[cours].periode + '</td>';
        
        horaireCours += '</tr>';
    }
        
    horaireCours += '</table>';
    
    console.log("FormateurHandler Desinscription : done.");
    // Retourne le tableau html généré avec les données de la bd
    return horaireCours;
}

function effacerCours(){
    return horaireCours;
}

//////////////////////////////////////////////////
// Construction page de factures
//////////////////////////////////////////////////
function construirePageFactures(coursCourant, coursAnterieure)
{
    console.log("construirePageFactures -- start");
    var tabCourant = construireTableauFactureCourante(coursCourant);
    var tabAnterieure = construireTableauFactureAnterieure(coursAnterieure);

    var title = '<div><h1>Facture courante et solde</h1>';

    var resultat = title + tabCourant + tabAnterieure + '</div>';

    console.log("construirePageFactures -- done");
    return resultat;
}


//////////////////////////////////////////////////
// Méthodes accessibles à l'extérieur du module
//////////////////////////////////////////////////
module.exports =
        {
            construireTableauCheminement: function (dbc, db) {
                return construireTableauCheminement(dbc, db);
            },
            construireTableauReleveNotes: function (db) {
                return construireTableauReleveNotes(db);
            },
            construirePageFactures: function (coursCourant, coursAnterieure) {
                return construirePageFactures(coursCourant, coursAnterieure);
            },
            construirePageInscription: function (coursCourant, coursFutures, coursTermines) {
                return construirePageInscription(coursCourant, coursFutures, coursTermines);
            },
            construirePageDesinscription: function (coursCourant) {
                return construirePageDesinscription(coursCourant);
            },
            construirePageHoraire: function (coursCourant) {
                return construirePageHoraire(coursCourant);
            }
        }
