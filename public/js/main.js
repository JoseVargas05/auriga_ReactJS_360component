/*eslint-env jquery, browser*/
/*eslint no-console:'off'*/
$('document').ready(function(){
    $("#Faviso").fadeOut(1);
    //$("#Strans").fadeOut(1);
    $( ".lvl2" ).prop( "checked", true );
    $( ".lvl2" ).attr("disabled", true);
    $("#Aplanos").hide();
    $("#Plvl1").hide();
    svgback = $('#SvgBack');
    $( "#m70" ).prop( "checked", true );
$(function() {
    var bod=$('body'),
        tra=$('#trans'),
        traI=$('#transI'),
        tralvls=$('#translvls'),
        tralvlsO=$('#translvlsO'),
        lvl = true,
        lvlO = true,
        secc = false;
        $('#m20').click (function (){ 
                for( var i = 1 ; i <= 7; i++){
                        $("#AS"+i).toggleClass('SviewT');
                        $("#AS"+i).toggleClass('SviewF');
                    }
        });
        $('#m21').click (function (){ 
                 for( var i = 1 ; i <= 7; i++){
                        $("#AS"+i).toggleClass('SviewT');
                        $("#AS"+i).toggleClass('SviewF');
                    }
        });
    $(document)
        .on('click','.logo',function(){ bod.toggleClass('intro'); intro(1); }) //logo click intro 
        .on('click','#mbtn',function(){ bod.toggleClass('act'); updatenav(bod.attr('data-s'),450); bod.removeClass('idei'); }) //menu 
        .on('click','*[data-go]',function(){
                
            //let el = document.querySelector( ':focus' );
            //if( el ) el.blur();
            var s=$(this).attr('data-go'),
                a=vista(bod.attr('data-s')),
                b=vista(s); 
                $( ".lvl" ).prop( "checked", false );
                $( ".lvl2" ).prop( "checked", true );
                avisoH();

                 $('#back').removeClass('Cgif');   
                 $(".SPF").hide("fast");
                 $(".SPP").hide("fast");
                 $(".SES").hide("fast");

                 $(".HSSC").hide("fast");
                 $(".HDMP").hide("fast");
                 $(".HSMC").hide("fast");
                 $(".HSMS").hide("fast");
                 if(s == "3.1"){
                    $("#m20").prop('checked', true);
                    for( var i = 1 ; i <= 3; i++){
                        $("#AS"+i).addClass('SviewT');
                        $("#AS"+i).removeClass('SviewF');
                    }
                    for( var i = 4 ; i <= 7; i++){
                        $("#AS"+i).addClass('SviewF');
                        $("#AS"+i).removeClass('SviewT');
                    }
                    for( var i = 1 ; i <= 7; i++){
                        $("#AS"+i).show();
                        //console.log("#AS"+i);
                    }
                 }else{
                    for( var i = 1 ; i <= 7; i++){
                        $("#AS"+i).hide();
                        //console.log("#AS"+i);
                    }
                 }
                 if(s == "2.3"){
                    $("#m10").prop('checked', true);
                 }
                if(s == "5.2"){
                    if(lvl == true){
                        $("#Strans").fadeIn(500);
                        tralvls.attr('src','./img/tr/tlvls/lvl_'+1+'.jpg');
                       //niveles(1); 
                   }else{
                       $("#Strans").fadeIn(500);
                       tralvls.attr('src','./img/tr/tlvls/lvl_'+1+'.jpg');
                       //niveles(1);
                   }
                   $( "#m70" ).prop( "checked", true ); 
                }
                if(s == "5.4"){
                    if(lvlO == true){
                        $("#StransO").fadeIn(500);
                        tralvlsO.attr('src','./img/tr/tlvlsO/lvl_'+1+'.jpg');
                       //niveles(1); 
                   }else{
                       $("#StransO").fadeIn(500);
                       tralvlsO.attr('src','./img/tr/tlvlsO/lvl_'+1+'.jpg');
                       //niveles(1);
                   } 
                }
            // console.log(a,b,s);
            bod.removeClass('intro act');
            a&&b&&a!==b ? mapas(parseInt(a),parseInt(b),s) :
            ( (a===false&&b) && tra.attr('src','./img/tr/todo/m_'+b+'.jpg'), updatenav(s,350) ); //transición 
            })
        .on('click','figure.sig',function(){
        carrusel($(this),$(this).parent('.slider'));
        })
        .on('click','.lvl',function(){ /*cambiolvl(this.id);*/ })
        .on('click','#Sseguir',function(){ $("#Strans").fadeOut(500, function() {
              // Animation complete.
              niveles(2);
            });
        })
        .on('click','#SseguirO',function(){ $("#StransO").fadeOut(500, function() {
              // Animation complete.
              nivelesO(2);
            });
        })
        .on('click','#planos',function(){ 
            $("#Aareas").toggle();
            $("#Aplanos").toggle();
            $("#Plvl1").show();
            $( "#m74" ).prop( "checked", false );
            $( "#m73" ).prop( "checked", false );
            $( "#m70" ).prop( "checked", true );
            svgback.attr("xlink:href", "./img/N1BB.png");

        })
        .on('click','#reg',function(){ 
            $("#Aareas").toggle();
            $("#Aplanos").toggle();
            $("#Plvl1").hide();
            $( "#m73" ).prop( "checked", false );
            $( "#m74" ).prop( "checked", false );
        })
        .on('click','#P1',function(){ 
            svgback.attr("xlink:href", "./img/N1BB.png");
        })
        .on('click','#P2',function(){ 
            svgback.attr("xlink:href", "./img/N2BB.png");
        })
        .on('click','#P3',function(){ 
            svgback.attr("xlink:href", "./img/N3BB.png");
        });
    load(1);
    function load(w) { //load transiciones
        var e=(w<63)?'png':'jpg',p=(100*w/226).toFixed(0);
        w<=226 
            ? $('<img src="./img/tr/todo/m_'+w+'.'+e+'">').on('load',function(){ bod.attr('data-load',p); w++; load(w); })
            : ( bod.toggleClass('load intro'), intro(1) );
    }
    function intro(x){ //corre transición intro
        x<62 && ( x++,setTimeout(function(){ traI.attr('src','./img/tr/todo/m_'+x+'.png'); intro(x); },30) )
    }
    function mapas(x,y,z){ //corre transición mapas
        bod.addClass('trans');
        setTimeout(function(){
            if (x!==y){ x<y?x++:x--; tra.attr('src','./img/tr/todo/m_'+x+'.jpg'); mapas(x,y,z); }
            else { console.log('hecho '+x,y,z); updatenav(z,450); }
        },30);
    }
    function vista(x){ //identifica de, y hacia donde vamos
        return x.match(/^(2.1|2.2|2.3)$/)?63:
        x.match(/^(3.1|3.2)$/)?108:
        x.match(/^(4.1)$/)?138:
        x.match(/^(4.2)$/)?169:
        x.match(/^(4.3)$/)?226:false; 
    }
    function updatenav(s,t){ //navegación
        bod.attr('data-s',s);
        setTimeout(function(){
            var subsec=$('#local .c:nth-of-type('+s.split('.')[0]+')'),
                top=($(window).height()/2)-(subsec.outerHeight()/2); 
            $('#local').animate({ scrollTop: ($("#local").scrollTop()-top)+subsec.offset().top },400);
            bod.removeClass('trans');
        },t);
    }
    function carrusel(e,i){ //carrusel galeria
        var slds=i.find('figure'),
            num=slds.length,
            sig=slds.index(e)+1,
            act=sig==1?num:sig-1,
            hid=sig<num?sig+1:1;
        console.log(num,act,sig,hid);
        e.toggleClass('sig');
        i.find('figure:nth-of-type('+hid+')').toggleClass('hid sig').promise().done(function(){
            i.find('figure:nth-of-type('+act+')').addClass('hid');
        });
    }
    load2();
    function load2() { //load translvls
        var num = 70; // the total number of images 

        // Preload all the images to lvls into hidden div
        for (var i=1 ; i<=num ; i++) {
            var img = document.createElement('img');
            img.src = './img/tr/tlvls/lvl_'+i+'.jpg';
            document.getElementById('preload-imgs').appendChild(img);
        }
    }
    load3();
    function load3() { //load translvls
        var num = 61; // the total number of images 

        // Preload all the images to lvls into hidden div
        for (var i=1 ; i<=num ; i++) {
            var img = document.createElement('img');
            img.src = './img/tr/tlvlsO/lvl_'+i+'.jpg';
            document.getElementById('preload-imgs2').appendChild(img);
        }
    }
    function niveles(x){ //corre transición niveles
        x<61 && ( x++,setTimeout(function(){ tralvls.attr('src','./img/tr/tlvls/lvl_'+x+'.jpg'); niveles(x); },30) )
        lvl = false;
    }
    function nivelesO(x){ //corre transición niveles
        x<61 && ( x++,setTimeout(function(){ tralvlsO.attr('src','./img/tr/tlvlsO/lvl_'+x+'.jpg'); nivelesO(x); },30) )
        lvlO = false;
    }
    function nivelesR(x){ //corre transición niveles Reversa
        x>1 && ( x--,setTimeout(function(){ tralvls.attr('src','./img/tr/tlvls/lvl_'+x+'.jpg'); nivelesR(x); },30) )
        lvl = true;
    }
    $('.lvl').prop('checked', false);
    function cambiolvl(x){ //corre transición niveles Reversa
        switch(x) {
            case "m50":
                $("#translvls").attr("src","./img/tr/tlvls/lvl_62.jpg");
                break;
            case "m51":
                $("#translvls").attr("src","./img/tr/tlvls/lvl_63.jpg");
                break;
            case "m52":
                $("#translvls").attr("src","./img/tr/tlvls/lvl_64.jpg");
                break;
            case "m53":
                $("#translvls").attr("src","./img/tr/tlvls/lvl_65.jpg");
                break;
            case "m54":
                $("#translvls").attr("src","./img/tr/tlvls/lvl_66.jpg");
                break;
            case "m55":
                $("#translvls").attr("src","./img/tr/tlvls/lvl_67.jpg");
                break;
            case "m56":
                $("#translvls").attr("src","./img/tr/tlvls/lvl_68.jpg");
                break;
            case "m57":
                $("#translvls").attr("src","./img/tr/tlvls/lvl_69.jpg");
                break;
            case "m58":
                $("#translvls").attr("src","./img/tr/tlvls/lvl_70.jpg");
                break;
            case "m59":
                $("#translvls").attr("src","./img/tr/tlvls/lvl_71.jpg");
                break;
            default:
                $("#translvls").attr("src","./img/tr/tlvls/lvl_61.jpg");
        } 
    }

   /* function avisoS(){
            $("#Faviso").fadeIn(500);
    }*/
    function avisoH(){
            $("#Faviso").fadeOut(500);
    }
    
bod.toggleClass('load intro'), intro(1);
});

});