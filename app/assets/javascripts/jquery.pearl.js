var duration = 100;

function pearl(target, options){

	if($(target).hasClass('in')){
		$(target).animate({left: '-50px'}, duration, function(){
			$(target).animate({left: '-150px'}, duration*2, function(){
				$(target).animate({left: '-200px'}, duration);
			});
		});
		$(target).removeClass('in')
	}else{	
		$(target).animate({left: '-150px'}, duration, function(){
			$(target).animate({left: '-50px'}, duration*2, function(){
				$(target).animate({left: '0px'}, duration);
			});
		});
		$(target).addClass('in');
	}

}


