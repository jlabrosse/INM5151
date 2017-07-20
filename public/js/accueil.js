/////////////////////////////////////////////////////////
// Menu Facture
/////////////////////////////////////////////////////////
$('#facture').click(function(){  
	var data = {};
	$.ajax({
		url: 'facture',
		data: data,
		method: 'POST'
	}).then(function (response) {
		if(response.statut == 'succes') {
			$("#body-page").empty();
			$("#body-page").append("<div style='text-align: center'>" + response.contenu + "</div>");
		}
		else {
			alert('Erreur');
		}
	}).catch(function (err) {
		console.error(err);
	});
});  

/////////////////////////////////////////////////////////
// Menu Horaire
/////////////////////////////////////////////////////////
$('#horaire').click(function(){  
	var data = {};
	$.ajax({
		url: 'horaire',
		data: data,
		method: 'POST'
	}).then(function (response) {
		if(response.statut == 'succes') {
			$("#body-page").empty();
			for(var i = 0; i < 5; i++){
				$("#body-page").append($("<p style=\"text-align: center; color: white;\">").text(response.contenu + ' ' + i));
			}
		}
		else {
			alert('Erreur');
		}
	}).catch(function (err) {
		console.error(err);
	});
});       
   
/////////////////////////////////////////////////////////
// Menu inscription
/////////////////////////////////////////////////////////
$('#inscription').click(function(){  
	var data = {};
	$.ajax({
		url: 'inscription',
		data: data,
		method: 'POST'
	}).then(function (response) {
		if(response.statut == 'succes') {
			$("#body-page").empty();
			for(var i = 0; i < 2; i++){
				$("#body-page").append($("<p style=\"text-align: center; color: white;\">").text(response.contenu + ' ' + i));
			}
		}
		else {
			alert('Erreur');
		}
	}).catch(function (err) {
		console.error(err);
	});
});     
   
/////////////////////////////////////////////////////////
// Menu désinscription
/////////////////////////////////////////////////////////
$('#desinscription').click(function(){  
	var data = {};
	$.ajax({
		url: 'desinscription',
		data: data,
		method: 'POST'
	}).then(function (response) {
		if(response.statut == 'succes') {
			$("#body-page").empty();
			for(var i = 0; i < 4; i++){
				$("#body-page").append($("<p style=\"text-align: center; color: white;\">").text(response.contenu + ' ' + i));
			}
		}
		else {
			alert('Erreur');
		}
	}).catch(function (err) {
		console.error(err);
	});
});   

/////////////////////////////////////////////////////////
// Menu relevé de notes
/////////////////////////////////////////////////////////
$('#relevedenotes').click(function(){  
	var data = {};
	$.ajax({
		url: 'relevedenotes',
		data: data,
		method: 'POST'
	}).then(function (response) {
		if(response.statut == 'succes') {
			$("#body-page").empty();
			
			$("#body-page").append($("<p style=\"text-align: center; color: white;\">").text(' '));
			
			/*
			//Exemple de génération de tableau du côté client
			var table = $('<table></table>').addClass('notes').attr('id','notes');
			for (var i = 0; i < 10; i++) 
			{
                row = $('<tr></tr>');
                for (var j = 0; j < 3; j++) 
				{
                    var rowData = $('<td></td>').addClass('bar').text(response.contenu + ' ' + i);
                    row.append(rowData);
                }
                table.append(row);
            }
			$("#body-page").append(table);
			*/
			$("#body-page").append(response.contenu);
		}
		else {
			alert('Erreur');
		}
	}).catch(function (err) {
		console.error(err);
	});
});   
   
/////////////////////////////////////////////////////////
// Menu cheminement
/////////////////////////////////////////////////////////
$('#cheminement').click(function(){  
	var data = {};
	$.ajax({
		url: 'cheminement',
		data: data,
		method: 'POST'
	}).then(function (response) {
		if(response.statut == 'succes') {
			$("#body-page").empty();
			$("#body-page").append($("<p style=\"text-align: center; color: white;\">").text(' '));
			$("#body-page").append(response.contenu);
		}
		else {
			alert('Erreur');
		}
	}).catch(function (err) {
		console.error(err);
	});
});   

/////////////////////////////////////////////////////////
// Cheminement : gestion clic cellule tableau
/////////////////////////////////////////////////////////
$(document).on("click", ".cheminementCell a", function() {
	var cells = document.getElementsByClassName("cheminementCell");
	for( var i = 0; i < cells.length; i++ ) {
		cells[i].style.opacity = .3;
	}
	var cell = $(this).parent();
	cell.css('opacity', 1);

	var prealables = cell.attr("data-prealable").split(' ');
	if( prealables[0].match(/Choix./)) {
		var e = document.getElementById("coursAu" + cell.attr("id"));
		var choix = e.options[e.selectedIndex].value;
		prealables = findPrealableForOption(choix).split(' ');
	}
	for( var i = 0; i < prealables.length; ++i ) {
		dimPrealablesCell( document.getElementById(prealables[i]) );
	}
	return false;//avoid propagation

});

function dimPrealablesCell( cell ) {
	var prealables = cell.getAttribute("data-prealable").split(' ');
	for( var i = 0; i < prealables.length; ++i ) {
		if( prealables[i] !== "none") {
			dimPrealablesCell( document.getElementById(prealables[i]));
		}
	}
	cell.style.opacity = .7;
}

function findPrealableForOption( optionId ) {
	switch( optionId ) {
		case "INF2015" : return "INF1120";
		case "INF4100" : return "INF3105";
		case "INF5000" : return "INF3105";
		case "INF5071" : return "INF3105 MAT1600";
		case "INF5171" : return "INF3172";
		default : return "none";
	}
}

$(document).on("click", "#body-page", function() {
	var cells = document.getElementsByClassName("cheminementCell");
	for( var i = 0; i < cells.length; i++ ) {
		cells[i].style.opacity = 1;
	}

});

/////////////////////////////////////////////////////////
// Barre de menu : animation
/////////////////////////////////////////////////////////
$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

$('ul li a').click(function() {
    $(this).parent().find('ul.sub-menu').toggle();
    return false;
});

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
