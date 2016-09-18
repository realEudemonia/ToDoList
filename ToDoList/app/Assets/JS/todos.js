/**
 * Created by jason on 9/14/16.
 */

//check off specific todos by clicking
//using on method, using parent element and then specifying li in passed parameters
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function (event) {
  //use parent method to remove immediate parent element
  //fadeout has call back function that will remove list item after fadeout has run
  $(this).parent().fadeOut(500, function () {
    //refers to li parent, not span
    $(this).remove();
  });
  //stops click listener from bubbling up into parent elements
  event.stopPropagation();
});

$("input[type = text]").keypress(function () {
  //using the which command to check which key is being pressed
  //checking if the enter key is pressed (13) and capturing user input
  if(event.which === 13){
    var todoText = $(this).val();
    $(this).val("");
    //create new li and add to ul
    $("ul").append("<li><span>X</span>" + todoText + "</li>")
  }
});
