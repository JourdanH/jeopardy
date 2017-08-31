(function() {

  $(function() {
    let apiAnswer;
    let money = 0
    let i = 0
    let apiPoints;
    $("#total").html("You have $" + money)
    let api1Question;
    let api2Question;
    let api3Question;

    function setCategories() {
      $.get("http://jservice.io/api/random?count=3", function(data) {
        $("#category1").html(data[0].category.title.toUpperCase());
        $("#category2").html(data[1].category.title.toUpperCase());
        $("#category3").html(data[2].category.title.toUpperCase());
        api1Question = data[0].category.id;
        api2Question = data[1].category.id;
        api3Question = data[2].category.id;
      })
    }
    function random(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
      }

    $("#category1").click(function() {
       resetFields()
      $.get("http://jservice.io/api/clues?category=" + api1Question, function(data) {
        i=random(0,4);
        $("#questionholder").html(data[i].question)
        $("#pointholder").html("For $" + data[i].value)
        apiAnswer = data[i].answer.toLowerCase();
        apiPoints = data[i].value;
        console.log(apiAnswer)
      })
    })

    $("#category2").click(function() {
       resetFields()
      $.get("http://jservice.io/api/clues?category=" + api2Question, function(data) {
        i=random(0,4);
        $("#questionholder").html(data[i].question)
        $("#pointholder").html("For $" + data[i].value)
        apiAnswer = data[i].answer.toLowerCase();
        apiPoints = data[i].value;
        console.log(apiAnswer)
      })
    })

    $("#category3").click(function() {
       resetFields()
      $.get("http://jservice.io/api/clues?category=" + api3Question, function(data) {
        i=random(0,4);
        $("#questionholder").html(data[i].question)
        $("#pointholder").html("For $" + data[i].value)
        apiAnswer = data[i].answer.toLowerCase();
        apiPoints = data[i].value;
        console.log(apiAnswer);
        
      })
    })

    $("#guess").click(function() {

      var write = $("#answer").val()
      if (apiAnswer == write.toLowerCase()) {
        $("p").text("You were right!");
        $("#total").html("You have $" + (money += apiPoints));
      } else {
        $("p").text("You were wrong! The correct answer is: " +apiAnswer )
      };
      setCategories()
    })

    $("#bet").click(function() {
        resetFields();
          $.get("http://jservice.io/api/random", function(data) {
          $("#question").html("The question is: " + data[0].question);
          $("#category").html("The category is: " + data[0].category.title);
          $("#clue_answer").html(data[0].answer)
          apiAnswer = data[0].answer.toLowerCase();
          apiPoints =money

        })
    })
    setCategories()
    function resetFields() {
      $("#questionholder").html("");
      $("#pointholder").html("");
      $("#question").html("");
      $("#category").html("")
      $("#value").html("");
      $("#clue_answer").html("");
      $("p").html("");
    }




  });

})()
