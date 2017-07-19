//////////////////////////////////////////////////
// Construction tableau cheminement
//////////////////////////////////////////////////
function construireTableauCheminement(databaseCours)
{
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
    for(i in databaseCours)
    {
        if( j > 5 && newLine === 5) {
            j = 0;
            newLine = 4;
        }
        if( j > 0 && !(j % newLine) ) {
            resultat += '</tr>';
            resultat += '<tr>';
        } 
        resultat += '<td id=\"' + databaseCours[i].code + '\"' 
                    + ' style=\"cursor:pointer\"' 
                    + ' class=\"cheminementCell ' + databaseCours[i].statut + '\"' 
                    + ' data-prealable=\"' + databaseCours[i].prealable + '\">' 
                    + '<a href=\"#\">'
                    + databaseCours[i].code + '</br>'  
                    + databaseCours[i].name + '</a>';
        if( databaseCours[i].code.match(/Choix./)) {
            resultat += '<select id=\"coursAu' + databaseCours[i].code + '\">' + listChoix + '</select>';
        }
        resultat += '</td>';
        ++j;

    }
    resultat += '</tr></table>';
	
	return resultat;
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
    
	for(var cours in coursTermines)
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

    for(var cours in coursCourant)
    {
        resultat += '<tr>';
        resultat += '<td>' + coursCourant[cours].sigle + '</td>';
        resultat += '<td>' + coursCourant[cours].titre + '</td>';
        resultat += '<td>' + coursCourant[cours].frais + '</td>';
        resultat += '</tr>';
        total += coursCourant[cours].frais;
    }
    total = Math.round(total * 100) / 100;

    resultat += '<tfoot><th style="text-align:left" colspan="2">Total :</th><td>'+ total +'</td></tfoot></table>'
    
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

    for(var cours in coursAnterieure)
    {
        resultat += '<tr>';
        resultat += '<td>' + coursAnterieure[cours].sigle + '</td>';
        resultat += '<td>' + coursAnterieure[cours].titre + '</td>';
        resultat += '<td>' + coursAnterieure[cours].frais + '</td>';
        resultat += '</tr>';
        total += coursAnterieure[cours].frais;
    }
    total = Math.round(total * 100) / 100;

    resultat += '<tfoot><th style="text-align:left" colspan="2">Total :</th><td>'+ total +'</td></tfoot></table>'
    
    return '<h2>FACTURE ANTERIEURE</h2>' + resultat;
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
	construireTableauCheminement: function(db) {
		return construireTableauCheminement(db);
	},
	construireTableauReleveNotes: function(db) {
		return construireTableauReleveNotes(db);
	},
    construirePageFactures: function(coursCourant, coursAnterieure){
        return construirePageFactures(coursCourant, coursAnterieure);
    }
}