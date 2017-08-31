(function(){

  $(function(){
    let apiAnswer;
    let money=0
    let i=0
    let apiPoints;
    $("#total").html("You have $"+money)


    function grab() {
      $.get("http://jservice.io/api/random", function(data){
          $("#question").html("The question is: "+data[0].question)
          $("#category").html("The category is: "+data[0].category.title)
          $("#value").html("The point value is: "+data[0].value)
          console.log(data[0].answer)
          apiAnswer = data[0].answer.toLowerCase();
          apiPoints = data[0].value;
      })
    }

    $("#guess").click(function(){

        var write = $("#answer").val()
         if (apiAnswer == write.toLowerCase()) {
           $("p").text("You were right!");
           $("#total").html("You have $"+(money+=apiPoints));

           }
          else {$("p").text("You were wrong!")
          };
          grab()
    })

    grab()
  })
})()
