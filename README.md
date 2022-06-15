							██████╗  █████╗ ██████╗ ██╗  ██╗███╗   ███╗ ██████╗ ██████╗ ███████╗        ██╗███████╗
							██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝████╗ ████║██╔═══██╗██╔══██╗██╔════╝        ██║██╔════╝
							██║  ██║███████║██████╔╝█████╔╝ ██╔████╔██║██║   ██║██║  ██║█████╗          ██║███████╗
							██║  ██║██╔══██║██╔══██╗██╔═██╗ ██║╚██╔╝██║██║   ██║██║  ██║██╔══╝     ██   ██║╚════██║
							██████╔╝██║  ██║██║  ██║██║  ██╗██║ ╚═╝ ██║╚██████╔╝██████╔╝███████╗██╗╚█████╔╝███████║
							╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝ ╚════╝ ╚══════╝

Hi, darkMode.js is simple solution for web where you want have dark mode (very simple 😀. But maybe it will be helpfull)
. Is written in pure Javascript.

Author: Marek Hovancak alias Marcus Hovi. Date: 12.3.2020

*************
*Instalation*
*************

- Just create script tag with path to darkMode.js in HTML and you are ready.

******************
*Calling function*
******************

- function darkModeIsActivated() is execute when you click on darkMode button
- You can create that function if you want something change on web when dark mode is activated or not
- This function is execute if you want actvated or deactivated dark mode
- Just paste the following code before the darkMode.js script (create another HTML script tag before the darkMode.js
  script tag) or (paste it into some existing javascript file)
  NOTE : !!! Do not save this function in a block of code that runs when the document is ready !!!

-----------------------------------------------------------
function darkModeIsActivated() { // Your block of code here }
-----------------------------------------------------------

**********
*Settings*
**********

- darkMode.js has default settings but you can change them
- Just paste the following code before the darkMode.js script (create another HTML script tag before the darkMode.js
  script tag) or (paste it into some existing javascript file)
- You don't have to enter all the settings, just the ones you want to change NOTE : !!! Do not save settings in a block
  of code that runs when the document is ready !!!

---------------------------------------------------------------------------------------------------------------------
var settings = { // settings for button and layer position                 : "fixed", // default 'fixed'
top             : "unset", // default 'unset' left             : "unset", // default 'unset'
bottom                   : "50px", // default '50px' right                    : "50px", // default '50px'
buttonBorderRadius       : "50%", // default '50%' transition               : "all .5s ease-out", // default 'all .5s
ease-out'

	// settings for layer
	darkModeBackgroundColor  : "#00040E", 					// default '#000'
	
	// settings for button
	buttonWidth              : "3.5em", 					// default '3.5em'
	buttonHeight             : "3.5em", 					// default '3.5em'
	buttonText               : "🌓",						// default '🌓'
	buttonLineHeight         : "3", 					// default '3'
	buttonBorder             : "3px solid transparent", 			// default '3px solid transparent'
	buttonHoverBorder        : "3px solid #000", 				// default '3px solid #000'
	darkModeButtonHoverBorder: "3px solid #FFF", 				// default '3px solid #FFF'
	buttonColor              : "#000", 					// default '#000'
	darkModeButtonColor      : "#FFF", 					// default '#FFF'
	
	// Settings, where you can set the width of the window where the button will appear (in px) 
	minWindowWidth           : "0",						// default '0'

	// event listener function
	event 					 : "click"                      // default 'click'

};
---------------------------------------------------------------------------------------------------------------------

***************************
*Information about classes*
***************************

- button has classes .darkMode-btn, .darkMode-btn-active
- layer (or background) has classes .darkMode-layer, .darkMode-layer-active
