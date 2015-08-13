
$(function() {
    "use strict";
    new WOW({
        mobile: !1
    }).init();
   $(".counter").counterUp({
        delay: 100,
        time: 2e3
    });
	$('#button-send').click(function(event){
		$('#button-send span').html('Sending E-Mail...');
		event.preventDefault();		
		$.ajax({
			type: 'POST',
			url: 'send_form_email.php',
			data: $('#contact_form').serialize(),
			success: function(html) {
				if(html.success == '1')
				{
					$('#button-send span').html('Submit');
					$('#success').show();
				}
				else
				{
					$('#button-send span').html('Submit');
					$('#error').show();
				}					
			},
			error: function(){
				$('#button-send span').html('Submit');
				$('#error').show();
			}
		});
		
	});
});

