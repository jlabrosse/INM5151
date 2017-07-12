// Menu Facture
$('#facture').click(function(){  
	var data = {};
	$.ajax({
		url: 'facture',
		data: data,
		method: 'POST'
	}).then(function (response) {
		if(response.statut == 'succes') {
			$("#body-page").empty();
			$("#body-page").append("<p style=\"text-align: center; color: white;\">" + response.contenu + "</p>");
		}
		else {
			alert('Erreur');
		}
	}).catch(function (err) {
		console.error(err);
	});
});  

// Menu Horaire
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
   
// Menu inscription
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
   
// Menu désinscription
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
   
// Menu relevé de notes
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
   
// Barre de menu
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
