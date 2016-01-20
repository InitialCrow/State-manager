// exemple of state2
var state2 = {
	state : new State(false, "canvas2d"),
	init : function(){
		ctx.fillText('state2 playing', 400, 300);
		ctx.fillText('return', 400, 400);
		//mapping click event
		$('#canvas').on('click',function (e) {
			var clickedX = e.pageX - this.offsetLeft;
			var clickedY = e.pageY - this.offsetTop;

			if ( clickedX > 350 && clickedX < 500 && clickedY <450 && clickedY > 350){
				$('#canvas').off();
				state2.state.changeState(menu, state2, ctx);
			}
		});
	}

}
