// default settings
var defaultSettings = {

	// settings for button and layer
	position: "fixed",
	top: "unset",
	left: "unset",
	bottom: "50px",
	right: "50px",
	buttonBorderRadius: "50%",
	transition: "all .5s ease",

	// settings for layer
	darkModeBackgroundColor: "#000",

	// settings for button
	buttonWidth: "3.5em",
	buttonHeight: "3.5em",
	buttonText: "🌓",
	buttonLineHeight: "3",
	buttonBorder: "3px solid transparent",
	buttonHoverBorder: "3px solid #000",
	darkModeButtonHoverBorder: "3px solid #FFF",
	buttonColor: "#000",
	darkModeButtonColor: "#FFF",

	// Settings, where you can set the width of the window where the button will appear (in px) 
	minWindowWidth: "0",

	// event listener function
	event: "click"

};

//
var settings = Object.assign( {}, defaultSettings, settings );

// create style element
var style = document.createElement( 'style' );

style.classList.add( "darkMode-style" );

style.type = 'text/css';

// insert classes with properties (I insert each class separately so it could be read easier)
style.innerText += ".darkMode-btn, .darkMode-layer \n { box-sizing : border-box; margin : 0; padding : 0; position : " + settings.position + ";  bottom : " + settings.bottom + ";  right : " + settings.right + "; top : " + settings.top + ";  left : " + settings.left + "; border-radius : " + settings.buttonBorderRadius + ";  transition : " + settings.transition + "; }";

style.innerText += " .darkMode-btn { background : " + settings.buttonColor + "; z-index :  50;  width : " + settings.buttonWidth + ";  height : " + settings.buttonHeight + ";  border : " + settings.buttonBorder + ";  cursor : pointer;   user-select : none;  font-size : 1em; line-height : " + settings.buttonLineHeight + ";  text-align : center; }";

style.innerText += " .darkMode-layer { background : " + settings.darkModeBackgroundColor + "; z-index : -10;  width : 3.4em;  height : 3.4em; }";

style.innerText += " .darkMode-layer-active { transform : scale(100); }";

style.innerText += " .darkMode-btn-active { background : " + settings.darkModeButtonColor + "; }";

style.innerText += " .darkMode-btn:hover { border : " + settings.buttonHoverBorder + "; }";

style.innerText += " .darkMode-btn-active:hover { border : " + settings.darkModeButtonHoverBorder + ";  }";


// create button and set class and id
var darkModeBtn = document.createElement( "DIV" );

darkModeBtn.classList.add( "darkMode-btn" );

// insert text to button
darkModeBtn.innerText = settings.buttonText;


//create layer and set class 
var darkModeLayer = document.createElement( "DIV" );

darkModeLayer.setAttribute( "class", "darkMode-layer" );


// toggle class after click button
darkModeBtn.addEventListener( settings.event, function () {

	darkModeBtn.classList.toggle( "darkMode-btn-active" );

	darkModeLayer.classList.toggle( "darkMode-layer-active" );

	// call function if exists
	if ( typeof darkModeIsActivated === "function" ) {
		darkModeIsActivated();
	}
} );

// delete or append if window width is
function appendAndDeleteByWindowWidth() {

	// set current window width
	var currentWidth = window.innerWidth;

	// if current window with is lower than settings then if exists button,remove button and layer 
	if ( currentWidth < settings.minWindowWidth ) {

		if ( document.getElementById( "darkMode-btn" ) ) {

			// remove button and layer
			darkModeBtn.remove();
			darkModeLayer.remove();
		}
	}
	// otherwise append button and layer if they dont't exists
	else {

		if ( !document.getElementById( "darkMode-btn" ) ) {

			// append button and layer to body
			document.body.appendChild( darkModeBtn );
			document.body.appendChild( darkModeLayer );
		}
	}
}

// on window resize call function
window.onresize = function () {
	appendAndDeleteByWindowWidth()
};

// append button and layer if window with is correct (at beginning)
appendAndDeleteByWindowWidth();

// append style element to head
document.getElementsByTagName( 'head' )[ 0 ].appendChild( style );
