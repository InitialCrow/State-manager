// exemple of state3
var state3 = {
	state : new State(false, "canvas2d"),
	init : function(){
		ctx.fillText('state3 stuff', 400, 300);
		ctx.fillText('return', 400, 400);
		$('#canvas').on('click',function (e) {
			var clickedX = e.pageX - this.offsetLeft;
			var clickedY = e.pageY - this.offsetTop;

			if ( clickedX > 350 && clickedX < 500 && clickedY <450 && clickedY > 350){
				$('#canvas').off();
				state3.state.changeState(menu, state3, ctx);
			}
		});
	}
}
