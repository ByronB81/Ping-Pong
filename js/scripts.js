$(document).ready(function(){
  $("form").submit (function(event){
    // console.log("clicked");
    event.preventDefault();

    var count = parseInt($("input#input1").val());
    var total = [];
    for (var index = 1; index <= count; index += 1)
      // console.log(index);

      if (index % 15 === 0) {
        $(".output").append("<li>" + "<b>Ping Pong Pandemonium</b>" + "</li>");
      }

      else if (index % 5 === 0) {
        $(".output").append("<li>" + "<b>Pong</b>" + "</li>");
      }

      else if (index % 3 === 0) {
       $(".output").append("<li>" + "<b>Ping</b>" + "</li>");
     }
     else {
       $(".output").append("<li>" + index + "</li>");
     }
  });
});
