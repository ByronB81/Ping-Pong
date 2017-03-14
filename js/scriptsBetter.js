var wholeFunction = function(count) {
var countArray = [];
for (var index = 1; index <= count; index += 1) {
	countArray.push(index);
};

alert(countArray);
var pingPongArray = countArray.map(function(entry) {
 if (entry % 15 === 0) {
      return "Ping-pong pandemonium";
      }
      else if (entry % 5 === 0) {
      return "pong";
      }
      else if (entry % 3 === 0) {
					return "Ping";
     }
     else {
       return entry;
     }
});
     return pingPongArray;
};








$(document).ready(function(){
  $("form").submit (function(event){
    event.preventDefault();
    var count = parseInt($("input#input1").val());
    var results = wholeFunction(count);
    results.forEach(function(result){
       $(".output").append("<li>" + result + "</li>");
     });
  });
});
