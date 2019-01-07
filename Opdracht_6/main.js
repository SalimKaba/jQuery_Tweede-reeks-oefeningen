/*$("#green").mouseover(function(){
  $("#text").css("color", "green");
});

$("#red").mouseover(function(){
  $("#text").css("color", "red");
});

$("#blue").mouseover(function(){
  $("#text").css("color", "blue");
}); */

$("#green, #red, #blue").mouseover(function(){
  var x = $( this ).css( "background-color" );
  $("#text").css("color", x);
  });

$("#green, #red, #blue").mouseleave(function(){
    $("#text").css("color", "black");
    });


/*$("#green").mouseleave(function(){
  $("#text").css("color", "black");
});

$("#red").mouseleave(function(){
  $("#text").css("color", "black");
});

$("#blue").mouseleave(function(){
  $("#text").css("color", "black");
});*/
