$(function(){
  $("#new_comment_button").click(function( event ){
    event.preventDefault();
    // console.log(this);
    $(this).css("display", "none");
    $("#comment_area").find("form").css("display", "block");
    // Los siguientes comandos reestablecen o limpian los imputs
    // para que al usar el ajax no aparescan los valores precedentes.
    $("textarea").val('');
    $("#autor").val('');
  });

  $("#add_new_comment_button").click(function( event ){
    event.preventDefault();
    // console.log(this);
    comment = $("textarea").val();
    autor = $("#autor").val();
    // console.log(comment);
    // console.log(autor);
    if (comment && autor){
    $("ul").append("<li>"+ comment + "<span>" + autor +"</span></li>");
    $("span").addClass("author");
    };
    
    $("#comment_area").find("form").css("display", "none");
    $("#new_comment_button").css("display", "block");
  });
});

$(document).ready(function(){
    $("#add_new_comment_button").click(function( event ){
      event.preventDefault();
      comment = $("textarea").val();
      autor = $("#autor").val();
      $.post("/",{
      comm: comment,
      author: autor
      });
    });
});