$(document).ready(function(){
    $('#proj-1').click(function(){
        console.log("hello, world!");
            $('figcaption').fadein(1000);
            $('figcaption').css('width','100px');
                $('figcaption').css('transition','display 2s');
        // $('figcaption').animate({display:'block'});
        // $('figcaption').animate({width:'0px'});
    })
    // $('#proj-1').mouseout(function(){
    //     $('.figure-caption').css('width','0px');
    //     // $('.figure-caption').css('color','#fff');
    //     $('.figcaption').animate('width','0px');
    //     $('figcaption').hide(3000);
    // })
});