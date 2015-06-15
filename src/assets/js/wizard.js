function loadOrigin(){

	var raw = document.getElementById('origins');
	var origin = JSON.parse(raw.innerHTML);

	generateOriginTableHTML( origin );  
}

// This function is called only once - on page load.
// It fills up the origin list via a handlebars template.
// It recieves one parameter - the data we took from origin.json.
function generateOriginTableHTML(data){

	var list = $('#panel1'); 
	
	alert( "list" + JSON.stringify( list ) );

	var theTemplateScript = $("#origins-template").html();

	alert( "tmpl script: " + theTemplateScript );

	//Compile the template​
	var theTemplate = Handlebars.compile (theTemplateScript);
	list.append (theTemplate(data));

	alert( Handlebars.compile );
//    alert( theTemplateScript );
//    alert( theTemplate );
//    alert( theTemplate( data ) );
//    alert( JSON.stringify( list ) );


	// Each origins has a data-index attribute.
	// On click change the url hash to open up a preview for this origin only.
	// Remember: every hashchange triggers the render function.
	// list.find('li').on('click', function (e) {
	// 	e.preventDefault();

	// 	var originIndex = $(this).data('index');

	// 	window.location.hash = 'origin/' + productIndex;
	// })
}