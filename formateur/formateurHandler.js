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
            resultat += '<select id=\"coursAu' + databaseCours[i].code + '\">' + listChoix + '</select>';
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
    var resultat = '';
    resultat += '<table class=\"notes\">';
    resultat += '<col width="75"><col width="200"><col width="75"><col width="75">';
    resultat += '<tr><th>Sigle</th><th>Titre</th><th>Crédit</th><th>Résultat</th></tr>';

    for (var cours in coursTermines)
    {
        console.log(coursTermines[cours]);
        resultat += '<tr>';
        resultat += '<td>' + coursTermines[cours].sigle + '</td>';
        resultat += '<td>' + coursTermines[cours].titre + '</td>';
        resultat += '<td>' + coursTermines[cours].credit + '</td>';
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
        resultat += '<td>' + coursCourant[cours].sigle + '</td>';
        resultat += '<td>' + coursCourant[cours].titre + '</td>';
        resultat += '<td>' + coursCourant[cours].frais + '</td>';
        resultat += '</tr>';
        total += coursCourant[cours].frais;
    }
    total = Math.round(total * 100) / 100;

    resultat += '<tfoot><th style="text-align:left" colspan="2">Total :</th><td>' + total + '</td></tfoot></table>'

    return '<h2>FACTURE COURANTE</h2>' + resultat;
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
        resultat += '<td>' + coursAnterieure[cours].sigle + '</td>';
        resultat += '<td>' + coursAnterieure[cours].titre + '</td>';
        resultat += '<td>' + coursAnterieure[cours].frais + '</td>';
        resultat += '</tr>';
        total += coursAnterieure[cours].frais;
    }
    total = Math.round(total * 100) / 100;

    resultat += '<tfoot><th style="text-align:left" colspan="2">Total :</th><td>' + total + '</td></tfoot></table>'

    return '<h2>FACTURE ANTERIEURE</h2>' + resultat;
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
    var horaireCours = '<h2>Faire son inscription</h2>';
    // Texte sur date limite d'inscription
    horaireCours += '<div>Date limite: La date limite d\'inscription';
    horaireCours += ' pour la session Automne 2017';
    horaireCours += ' est le 27 juin 2017</div>';
    // Tableau -(Affiche horaire actuelle)
    horaireCours += '<h3>Mon horaire</h3>';
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
    // Tableau Faire inscription
    horaireCours += '<h3>S\'inscrire</h3>';
    horaireCours += '<table class=\"cours\">';
    horaireCours += '<tr><th>Sigle</th><th>Groupe</th><th></th></tr>';
    horaireCours += '<tr><td><select>' ;
    for (var cours in coursFutures)
    {       
        horaireCours += '<option>' + coursFutures[cours].code + '</option>';
    }
    horaireCours += '</select></td>';
    horaireCours += '<td><select disabled></select></td>'
    horaireCours += '<td><button type="button" onclick=validerInscription();" >Soumettre</button>'
horaireCours += '</tr>';

    
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

    var title = '<div><h1>FACTURE COURANTE ET SOLDE</h1>';

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
