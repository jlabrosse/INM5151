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
	}
}