/**
 * Toolbar.js
 * Initialize the Toolbar
 */
 window.gui=require("nw.gui");
 window.win= gui.Window.get();
 function initToolBarButtons(){
 	var min=main._("minimal");
 	var max=main._("maximal");
 	var cls=main._("closial");
 	min.addEventListener("click",function(){
 		win.minimize();
 	});
 	max.addEventListener("click",function(){
 		win.maximize();
 	});
 	cls.addEventListener("click",function(){
 		win.close();
 	});
 	window.term.echo("[[g;#5af;#000]Toolbar buttons] initialized");
 }