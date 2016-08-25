$(document).ready(function(){
	$('#form1').submit(function(){
				return false
	});
	$('#btn').click(function(){
		$("#contactCards").append('<div class="card"><div class="cardFront"><h1>'+$('#first').val()+' '+$('#last').val()+
			'</h1><p>Click Here for Description</p></div><div class="cardBack"><p>'+$('#desc').val()+'</p></div></div>');
        $(this).closest('form').find("input[type=text], textarea").val("");
	});
	$(document).on('click', '.card', function(){
		var toggle=true
		$('.card').click(function(){
			if(toggle){
				$(this).children('.cardFront').hide();
				$(this).children('.cardBack').show();
				toggle=false;
				event.stopPropagation()
			}
			else{
				$(this).children('.cardBack').hide();
				$(this).children('.cardFront').show();
				toggle=true;
			}
		});
	});
});
