//this document allows the importing of html components. Each component e.g. "header" is refered to by its ID in the html page it is being imported into

$(document).ready(function(){ 
    $.get("../parts/header.html", function(data) {
      $("#header").html(data);
    });
  }); 

$(document).ready(function(){ 
    $.get("../parts/email1.html", function(data) {
      $("#email1").html(data);
    });
  }); 

$(document).ready(function(){ 
    $.get("../parts/email2.html", function(data) {
      $("#email2").html(data);
    });
  }); 

$(document).ready(function(){ 
    $.get("../parts/email3.html", function(data) {
      $("#email3").html(data);
    });
  }); 
