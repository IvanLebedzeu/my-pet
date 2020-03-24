$(document).ready(function() {
  $("button#press").click(function() {
    $("body").removeClass();    
    $("body").addClass("dark-background");
  });

  $("button#touch").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  
});