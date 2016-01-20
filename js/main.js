// test for state-manager

// check if canvas exist and we are in
var canvas = document.getElementById('canvas');
if(!canvas){
	alert("Impossible de récupérer le canvas");

}

var ctx = canvas.getContext('2d');

if(!ctx){
	alert("Impossible de récupérer le context du canvas");

}
menu.state.initState(menu);




