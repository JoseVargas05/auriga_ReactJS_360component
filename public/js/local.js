$('document').ready(function(){
	var   link = 0,
		  valor = 0,
		  ident = 0,
          S3 = 0;
         $(".SPF").hide("fast");
         $(".SPP").hide("fast");
         $(".SES").hide("fast");

         $(".HSSC").hide("fast");
         $(".HDMP").hide("fast");
         $(".HSMC").hide("fast");
         $(".HSMS").hide("fast");
	$(function() {
		$(document)
        .on('click','.locales',function(){ 
            valor = $(this).attr("name");
            ident = valor.slice(-1);
            	link = "./img/se/s5/ld/"+valor+".png";

            	$('#Iaviso').css("background-image", "url("+link+")");
            	avisoS();
        })
        .on('click','#Fclose',function(){ avisoH(); })
        .on('click','#AS1',function(){ 
                $('.SPF').toggle('slow');
        })
        .on('click','#AS2',function(){ 
                $('.SPP').toggle('slow');
        })
        .on('click','#AS3',function(){ 
                $('.SES').toggle('slow');
                $('#back').addClass('Cgif').delay(1000).fadeTo('slow', 1);   
        })
        .on('click','#AS4',function(){ 
                $('.HSSC').toggle('slow');
                
        })
        .on('click','#AS5',function(){
                $('.HDMP').toggle('slow');
                
        })
        .on('click','#AS6',function(){
                $('.HSMC').toggle('slow');
                
        })
        .on('click','#AS7',function(){ 
                $('.HSMS').toggle('slow');
                
        });
        

    function avisoS(){
            $("#Faviso").fadeIn(500);
    }
    function avisoH(){
            $("#Faviso").fadeOut(500);
    }


	});
});
