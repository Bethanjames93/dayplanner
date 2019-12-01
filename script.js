$(document).ready(function() {

    $(".save").on("click", function() {

    var value = $(this).val(".activity");
    var time = $(this).attr("id");
    
    localStorage.setItem(time, value);

    });

    