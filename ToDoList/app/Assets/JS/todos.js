/**
 * Created by jason on 9/14/16.
 */

//check off specific todos by clicking
$("li").click(function () {
  $(this).toggleClass("completed");
});

//click on X to delete todo
$("span").click(function (event) {
  //use parent method to remove immediate parent element
  //fadeout has call back function that will remove list item after fadeout has run
  $(this).parent().fadeOut(500, function () {
    //refers to li parent, not span
    $(this).remove();
  });
  //stops click listener from bubbling up into parent elements
  event.stopPropagation();
});
