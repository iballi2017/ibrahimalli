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


// Get the container element
var btnContainer = document.getElementById("links");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}