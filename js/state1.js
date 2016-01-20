// exemple of state1

//we create the menu
var menu = {
	state : new State(true, "canvas2d"), // need to create state property like this true if you want this state be the first active state, "canvas2d " for the randerer you use

	init : function(){ // need to proced with init function its call with state-manager
		menu.titlePlay = "Play";
		menu.titleCustomStuff = "CustomStuff";
		menu.titleOption = "Option";
		menu.titleScore = "Score";

		// draw the menu
		ctx.font = "30px Helvetica";
		ctx.fillStyle ="#fff";
		ctx.fillText(menu.titlePlay, 450, 300);
		ctx.fillText(menu.titleCustomStuff, 450, 400);
		ctx.fillText(menu.titleOption, 450, 500);
		ctx.fillText(menu.titleScore, 450, 600);

		// mapping click event
		$('#canvas').on('click',function (e) {
			var clickedX = e.pageX - this.offsetLeft;
			var clickedY = e.pageY - this.offsetTop;

			if ( clickedX > 420 && clickedX < 580 && clickedY > 250 && clickedY < 320){
				$('#canvas').off();
				menu.state.changeState(state2, menu, ctx);	
			}
			if ( clickedX > 420 && clickedX < 700 && clickedY > 350 && clickedY < 420){
				$('#canvas').off();
				menu.state.changeState(state3, menu, ctx);	
			}
			if ( clickedX > 420 && clickedX < 600 && clickedY > 480 && clickedY < 520){
				$('#canvas').off();
				menu.state.changeState(state4, menu, ctx);			
			}
			if ( clickedX > 420 && clickedX < 580 && clickedY > 550 && clickedY < 620){
				$('#canvas').off();
				menu.state.changeState(state5, menu, ctx);	
			}
		});
	}

	
};