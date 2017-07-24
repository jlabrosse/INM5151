var databaseHandler = require('../database/dataBaseHandler.js'); 

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

	var resultat = '<h2>Cheminement</h2>';
	resultat += '<table class=\"cheminement\">';
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
	resultat += '<div style=\' margin-left: 34%; width: 15%; background-color: #39E85C; border: 5px solid rgb(0, 78, 103); border-radius: 25px; padding: 0px; \'> <h3 style=\' color: rgb(51, 123, 174); \'> Crédits validés </h3> <h2> ' + coursTermines.length * 3 + ' </h2> </div>';
	resultat += '<div style=\' margin-left: 2%; width: 15%; background-color: lightgrey; border: 5px solid rgb(0, 78, 103); border-radius: 25px; padding: 0px;\'> <h3 style=\' color: rgb(51, 123, 174); \'> Total </h3> <h2> ' + databaseHandler.getTotalCreditProgramme() + ' </h2> </div> </div>';
	resultat += '</div>';
	resultat += '<p></p>';
    resultat += '<table class=\"notes\">';
    resultat += '<col width="75"><col width="200"><col width="75"><col width="75">';
    resultat += '<tr><th>Sigle</th><th>Titre</th><th>Crédit</th><th>Résultat</th></tr>';

    for (var cours in coursTermines)
    {
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
        resultat += '<td>' + coursCourant[cours].code + ' </td>';
        resultat += '<td>' + coursCourant[cours].name + ' </td>';
        resultat += '<td>' + coursCourant[cours].frais.toFixed(2) + ' $</td>';
        resultat += '</tr>';
        total += coursCourant[cours].frais;
    }
    total = Math.round(total).toFixed(2);

    resultat += '<tfoot><th style="text-align:left" colspan="2">Total :</th><td>' + total + ' $</td></tfoot></table>';

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
        resultat += '<td>' + coursAnterieure[cours].code + ' </td>';
        resultat += '<td>' + coursAnterieure[cours].name + ' </td>';
        resultat += '<td>' + coursAnterieure[cours].frais.toFixed(2) + ' $</td>';
        resultat += '</tr>';
        total += coursAnterieure[cours].frais;
    }
    total = Math.round(total).toFixed(2);

    resultat += '<tfoot><th style="text-align:left" colspan="2">Total :</th><td>' + total + ' $</td></tfoot></table>';

    return '<h2>Facture antérieure</h2>' + resultat;
}

//////////////////////////////////////////////////
// Construction page Horaire
//////////////////////////////////////////////////
function construirePageHoraire(coursCourant)
{
    var horaireCours = '<h2>Horaire Session Courante</h2>';

    // Tableau Horaire
    horaireCours += '<table class=\"notes\">';
    horaireCours += '<table id="horaireCours" class=\"cours2\" >';
    horaireCours += '<col width="75"><col width="200"><col width="75">';
    horaireCours += '<tr><th>Sigle</th><th>Titre</th><th>Labo</th><th>Professeur</th>';
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
    // Tableau Faire inscription
    var horaireCours = '<h2>Inscription</h2>';
    horaireCours += '<h3 id="selectSessionHeader" class="selectSessionHeader">Selectionnez une session</h3>';
    horaireCours += '<select class="selectSession"><option>----</option><option>A2018</option><option>H2018</option><option>E2019</option></select>';
    horaireCours += '<table id="inscriptionCours" class="cours2 modifHoraire" style="display: none;">';
    horaireCours += '<col width="20%"><col width="20%"><col width="20%"><col width="20%"><col width="20%">';
    horaireCours += '<tr><th>Sigle</th><th>Groupe</th><th>Horaire</th><th>Place</th><th></th></tr>';
    horaireCours += '<tr><td><select class="selectCoursAFaire">' ;
    horaireCours += '<option>Selection</option>' ;
    for (var cours in coursFutures)
    {       
        if(coursFutures[cours].code !== "Langue" && coursFutures[cours].code !== "Compl." && !coursFutures[cours].code.match(/Choix/))
            horaireCours += '<option data-groupe="' + coursFutures[cours].groupe+'">' + coursFutures[cours].code + '</option>';
    }
    horaireCours += '</select></td>';
    horaireCours += '<td><select disabled id="selectGroupeCoursAFaire"></select></td><td></td><td></td>';
    horaireCours += '<td><button type="button" id="validerInscription">Soumettre</button>';
    horaireCours += '</tr>';
	horaireCours += '</table>';
    
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
    horaireCours += '<h3 id="selectSessionHeaderDes" class="selectSessionHeader">Selectionnez une session</h3>';
    horaireCours += '<select id="selectSessionDesinscription" class="selectSession"><option>----</option><option>A2018</option><option>H2018</option><option>E2019</option></select>';
    horaireCours += '<div id="desinscriptionDateLimit" class="dateLimiteHeader" style="display: none;">Date limite: La date limite de désinscription';
    horaireCours += ' sans pénalités pour la session Été 2017';
    horaireCours += ' est le 10 juin 2017<p></p></div>';
    // Tableau desinscription
    horaireCours += '<table id="desinscriptionCours" class="notes modifHoraire" style="display: none;">';
    horaireCours += '<col width="75" id="colSupprimer"><col width="200"><col width="75"><col width="75">';
    horaireCours += '<tr><th>Supprimer</th><th>Sigle</th><th>Titre</th><th>Labo</th><th>Professeur</th>';
    horaireCours += '<th>Local</th><th>Groupe</th><th>Période</th></tr>';

    var i = 1;
    for (var cours in coursCourant)
    {
	
        var boolLabo = 'Non';
        if( coursCourant[cours].labo !== null ){
            boolLabo = 'Oui';
        }
        
        horaireCours += '<tr>';       
        // horaireCours += '<td>' + '<button id="buttonDes" type="button">X</button>' + '</td>';
    horaireCours += '<td>' + '<input id="buttonDes" type="checkbox"></button>' + '</td>';

        horaireCours += '<td>' + coursCourant[cours].code + '</td>';
        horaireCours += '<td>' + coursCourant[cours].name + '</td>';
        horaireCours += '<td>' + boolLabo + '</td>';
        horaireCours += '<td>' + coursCourant[cours].professeur + '</td>';
        horaireCours += '<td>' + coursCourant[cours].local + '</td>';
        horaireCours += '<td>' + coursCourant[cours].groupe + '</td>';
        horaireCours += '<td>' + coursCourant[cours].periode + '</td>';
        
        horaireCours += '</tr>';
	i = i + 1;
    }
    horaireCours += '<td><button type="button" id="confirmerDesinscription">Soumettre</button>';
    horaireCours += '</tr>';
    horaireCours += '</table>';
    
    console.log("FormateurHandler Desinscription : done.");
    // Retourne le tableau html généré avec les données de la bd
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

    //var title = '<div><h1>Facture courante et solde</h1>';
    //var resultat = title + tabCourant + tabAnterieure + '</div>';
	var resultat = tabCourant + tabAnterieure;
	
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
        };
