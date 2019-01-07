$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
    $("#instructions :nth-child(1)").click(function(){
      $("#content").css("font-size", "120%");
    });


    /* On click: Decrease the font size (80%) */
    $("#instructions :nth-child(2)").click(function(){
      $("#content").css("font-size", "80%");
    });


    /* On click: Bold or normalize the green words */
    $("#instructions :nth-child(3)").click(function(){
      $(".green").css('font-weight', 'bold');
    });


    /* On click: Bold or normalize the green words */
    $("#instructions :nth-child(4)").click(function(){
      $(".red").css("text-decoration","underline");
    });

    /* On click: Replace the logo with another image */
    $("#instructions :nth-child(5)").mouseover(function(){
      $("#content :nth-child(1)").attr("src", "images/koala.jpg");
    });


    /* On hover: Display the URL of links in a tooltip when hovering over links */
    $("a").mouseover(function(){
      $(this).attr("title", $(this).attr("href"));
    });

    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
    $("#instructions :nth-child(7)").click(function(){
      $("h2").eq(0).before("<h1>Chapter 1</h1>");
      $("h2").eq(1).before("<h1>Chapter 2</h1>");

    });
});
