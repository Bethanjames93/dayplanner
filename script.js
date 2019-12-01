$(document).ready(function() {

    $(".save").on("click", function() {

    var value = $(this).val(".activity");
    var time = $(this).attr("id");
    
    localStorage.setItem(time, value);

    });

    function hour() {
        var currentHour = moment().hours();
      
        $(".time").each(function() {
            var hourBlock = parseInt($(this).attr("id").split("-")[1]);
      
            if (hourBlock < currentHour) {
                $(this).addClass("past");
            }
      
            else if (hourBlock === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
      
            else {
                $(this).removeClas("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
      }