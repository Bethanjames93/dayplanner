$(document).ready(function() {

    $(".save").on("click", function() {

    var value = $(this).val(".activity");
    var time = $(this).attr("id");
    
    localStorage.setItem(time, value);

    });

    function hour() {
        // var currentHour = moment().hour();
      
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

      hour();

      var interval = setInterval(hour, 15000);

      $("#9 .activity").val(localStorage.getItem("9"));
      $("#10 .activity").val(localStorage.getItem("10"));
      $("#11 .activity").val(localStorage.getItem("11"));
      $("#12 .activity").val(localStorage.getItem("12"));
      $("#13 .activity").val(localStorage.getItem("13"));
      $("#14 .activity").val(localStorage.getItem("14"));
      $("#15 .activity").val(localStorage.getItem("15"));
      $("#16 .activity").val(localStorage.getItem("16"));
      $("#17 .activity").val(localStorage.getItem("17"));

      $("#Date").text(moment().format("dddd, MMMM Do"));

      interval();

      });
