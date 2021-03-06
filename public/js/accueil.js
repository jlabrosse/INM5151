

/////////////////////////////////////////////////////////
// Menu Facture
/////////////////////////////////////////////////////////
$(document).ready(function() {

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
			hideLegend();
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
			$("#body-page").append($("<p style=\"text-align: center; color: white;\">").text(' '));
			$("#body-page").append(response.contenu);
			hideLegend();
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
			$("#body-page").append($("<p style=\"text-align: center; color: white;\">").text(' '));
			$("#body-page").append(response.contenu);
			hideLegend();
		}
		else {
			alert('Erreur');
		}
	}).catch(function (err) {
		console.error(err);
	});
});     

// Selection d'une session genere la liste d'inscription
$(document).on("change", ".selectSession", function() {
	var choix = this.options[this.selectedIndex];
	if(choix.value !== "----") {
		$('.modifHoraire').css('display', 'block');
		$('.selectSessionHeader').css('display', 'none');
		$(this).css('display', 'none');
	}

});

// Selection d'un cours a inscrire, genere une nouvelle liste d'inscription
$(document).on("change", ".selectCoursAFaire", function() {
	var choix = this.options[this.selectedIndex];
	var groupes = this.options[this.selectedIndex].getAttribute('data-groupe').split(' ');
	var option = "";
	for( var i = 0; i < groupes.length; ++i ) {
		option += '<option>'+groupes[i]+'</option>'
	}
	var selectGroup = $(this).closest('td').next('td').find('select');
	selectGroup.html(option);
	selectGroup.prop("disabled", false);
	var row = this.parentNode.parentNode;
	showHoraire($(selectGroup).val(), this.parentNode.parentNode);
	showPlace($(selectGroup).val(), this.parentNode.parentNode);
	var row = $(this).parent().parent();
	if ( $('#inscriptionCours tr').length <= 5 && row.is('tr:last'))
		generateNewInscriptionList(this.options, choix);
});

$(document).on("change", ".selectGroupeCoursAFaire", function() {
	var selectGroup = $(this).closest('td').find('select');
	console.log(selectGroup);
	showHoraire($(selectGroup).val(), this.parentNode.parentNode);
	showPlace($(selectGroup).val(), this.parentNode.parentNode);
});

function showPlace( groupe, row ) {
	var place = Math.floor((Math.random() * 30) + 1);
	row.cells[3].innerHTML = place;
}

function showHoraire( groupe, row ) {
	row.cells[2].innerHTML = getHoraire( groupe );
}

function generateNewInscriptionList(list, exclude) {
	var horaireCours = '<tr><td><select class="selectCoursAFaire">' ;
    for (var cours in list)
    {
    	if( list[cours].value && list[cours].value != exclude.value ) {
	        horaireCours += '<option data-groupe="' + list[cours].getAttribute('data-groupe') +'">' + list[cours].value + '</option>';
    	}    
    }
    horaireCours += '</select></td>';
    horaireCours += '<td><select disabled class="selectGroupeCoursAFaire"></select></td><td></td><td></td><td></td>'
    horaireCours += '</tr>';
	$('#inscriptionCours tr:last').after(horaireCours);
}

// Click sur le bouton soumettre valide les conflits d'horaire seulement et genere un tableau resultat
$(document).on('click','#validerInscription', function(){
	
	var row = $('#inscriptionCours tr');
	var groupes = [];
	var sigles = [];
	var horaires = [];
	for(var i = 1; i < row.length; ++i ) {
		var selectCours = row[i].firstChild.firstChild;
		var selectGroupe = row[i].childNodes[1].firstChild;
		var selectedCours = selectCours[selectCours.selectedIndex];
		var selectedGroupe = selectGroupe[selectGroupe.selectedIndex];
		if( selectedCours.value !== "Selection") {
			groupes.push(selectGroupe.value);
			sigles.push(selectedCours.value);
			horaires.push(getHoraire(selectedGroupe.value));

		}
	}
	if( confirm("Voulez-vous ajouter les cours : " + sigles.toString() + " ?") ){
		var [valide, groupes, sigles, horaires] = validateHoraire(groupes, sigles, horaires);
		var result = '<h3>' + getHeader(valide) + '</h3>';
		result += '<table class=\"cours\">';
	    result += '<tr><th>Sigle</th><th>Groupe</th><th>Horaire</th></tr>';
	    for( var i = 0; i < groupes.length; ++i ) {
			result += '<tr><td>' + sigles[i] + '</td><td>'+ groupes[i] + '</td><td>' + horaires[i] + '</td></tr>';
	    }
		
	    result += '</table>';
		$('#body-page').html(result);
	} 
});

function validateHoraire( groupes, sigles, horaires, ) {
	var conflitG = [];
	var conflitS = [];
	var conflitH = [];
	for( var i = 0; i< horaires.length; ++ i ) {
		for( var j = i+1; j< horaires.length; ++j ) {
			if( horaires[i] === horaires[j] ) {
				if( conflitS.indexOf(sigles[i]) === -1 ) {
					conflitG.push(groupes[i]);
					conflitS.push(sigles[i]);
					conflitH.push(horaires[i]);
				}
				if( conflitS.indexOf(sigles[j]) === -1 ) {
					conflitG.push(groupes[j]);
					conflitS.push(sigles[j]);
					conflitH.push(horaires[j]);
				}
			}
		}
	}
	if( conflitS.length !== 0 ) {
		return [false, conflitG, conflitS, conflitH];
	}
	return [true, groupes,sigles,horaires];
}

function getHeader( valide ) {
	if( valide ) 
		return 'Les cours suivant ont &eacute;t&eacute; ajout&eacute;s &agrave; l\'horaire';
	return 'Conflit d\'horaire entre les cours suivant';
}

function getHoraire( groupe ) {
	var jour = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
	var periode = ["9h00 - 12h00", "13h30 - 16h30", "18h00 - 21h00"];
	var result = jour[ Math.floor(groupe/10)-1];
	result += " " + periode[groupe%10];
	return result; 
}
/////////////////////////////////////////////////////////
// Menu d�sinscription
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
			$("#body-page").append($("<p style=\"text-align: center; color: white;\">").text(' '));
			$("#body-page").append(response.contenu);
			hideLegend();
		}
		else {
			alert('Erreur');
		}
	}).catch(function (err) {
		console.error(err);
	});
});   

$(document).on('click', '#confirmerDesinscription', function() {
	var checkboxRows = $('#desinscriptionCours tr td:first-child');
	var rows = $('#desinscriptionCours tr');
	var checkedRows = [];
	var sigles = [];
	for( var i = 0; i < checkboxRows.length-1; ++i) {
		if(!checkboxRows[i].firstChild.checked) {
			checkedRows.push(checkboxRows[i].parentNode);
		} else {
			sigles.push(rows[i+1].cells[1].textContent);
		}
	}
	if( checkedRows.length > 0 ) {
		if(confirm("Voulez-vous vraiment annuler les cours" + sigles.toString() + "?")) {
			$('#desinscriptionCours tr th:first-child').css('display', 'none');
			for( var i = 0; i < checkboxRows.length; ++i) {
				$(checkboxRows).css('display', 'none');
			}
			for( var i = 0; i < checkedRows.length; ++i) {
				$(checkedRows[i]).css('display', 'none');
			}
			$('h2').append('<h5>Ces cours ont &eacute;t&eacute; supprim&eacute;s de l\'horaire</h5>');
		}
	}

});

/////////////////////////////////////////////////////////
// Menu relev� de notes
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
			$("#body-page").append(response.contenu);
			hideLegend();
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
			$("#body-page").append(response.contenu);
			showLegend();
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
	var cells = $(".cheminementCell");
	for( var i = 0; i < cells.length; i++ ) {
		cells[i].style.opacity = 0.2;
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

$(document).on("click", ".selectCoursChoix", function() {
	var cell = $(this).parent();
	var e = document.getElementById("coursAu" + cell.attr("id"));
	var choix = e.options[e.selectedIndex].value;
	prealables = findPrealableForOption(choix).split(' ');
	$(cell).find('.cheminementName').html(getOptionName(choix));
});

function dimPrealablesCell( cell ) {
	var prealables = cell.getAttribute("data-prealable").split(' ');
	for( var i = 0; i < prealables.length; ++i ) {
		if( prealables[i] !== "none") {
			dimPrealablesCell( document.getElementById(prealables[i]));
		}
	}
	cell.style.opacity = .8;
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

function getOptionName( optionId ) {
	switch( optionId ) {
		case "INF2015" : return "D&eacute;veloppement agile";
		case "INF4100" : return "Analyse d'algorithme";
		case "INF5000" : return "Th&eacute;orie des compilateurs";
		case "INF5071" : return "Infographie";
		case "INF5171" : return "Programmation parall&egrave;le";
		default : return "Cours au choix";
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


/////////////////////////////////////////////////////////
// Gestion de la l�gende
/////////////////////////////////////////////////////////
function showLegend() {
	$('#rightBar').html('<div class="complet square"d></div><p>Cours compl&eacute;t&eacute;</p>' +
						'<div class="enCours square"d></div><p>Cours en cours</p>' +
						'<div class="aFaire square"d></div><p>Cours &agrave; faire</p>');
}

function hideLegend() {
	$('#rightBar').html('');
}
});
