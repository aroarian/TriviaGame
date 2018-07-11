//Questions: array of objects

    //each object should have the question, the options will be an array to choose from and the correct answer

    //var index of 0 to access the first questions, the first options and the first correct answer


//click on event to compare to the correct answer

    //if answer is correct. increment a variable (correct answers)

    //if incorrect. will increment incorrect answers.

    //increment the index so that we can display the next question options and have access to the correct answer

    //check to see if you have made it to the last question and display results

    //get totals and display results


//timer

    //if timer ends the game is complete and it checks to see what the user has answered.

var index = 0
var correct = 0
var wrong = 0

$(".correct").hide();
$(".wrong").hide();

function endGame (){
    $(".questions").empty();
    $(".correct").show();
    $(".wrong").show();
};

var questions = [
    {
        question: "is the sun hot?",
        options: ["yes", "no", "maybe"],
        answer: "yes"
    },
    {
        question: "is snow cold?",
        options: ["maybe", "no", "yes"],
        answer: "yes"
    }
]
$(".questions").append(questions[index].question + "<br>")

for(var i = 0; i < questions[index].options.length; i++){
    $(".questions").append("<div class='options' info='"+ questions[index].options[i] +"'>" + questions[index].options[i] + "</div> <br>")
}

//Looks at the document for all items with the class of options when you click on "this" item
$(document).on("click", ".options", function(){
    var choosenOption = $(this).attr("info")
    if (choosenOption == questions[index].answer){
        alert("You're Right!");
        correct++
        $(".correct").html("Correct Answer:" + correct)
    }
    else {
        alert("You're Wrong");
        wrong++
        $(".wrong").html("Wrong Answers:" + wrong)
    }
    
    index++

    if (index < questions.length){
        $(".questions").empty();
        $(".questions").append(questions[index].question + "<br>")
        for(var i = 0; i < questions[index].options.length; i++){
            $(".questions").append("<div class='options' info='"+ questions[index].options[i] +"'>" + questions[index].options[i] + "</div> <br>")
        }
    }
   else {
        console.log(index);
        endGame();
    }
});
