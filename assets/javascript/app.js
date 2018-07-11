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
$(".reset").hide();
$(".questions").hide();



function endGame (){
    $(".questions").empty();
    $(".questions").height(0);
    $(".reset").show();
    $(".correct").show();
    $(".wrong").show();
    
};

function difficulty(){
    $(".correct").hide();
    $(".wrong").hide();
    $(".reset").hide();
var difficultyLevel = ["Apprentice", "Knight", "Master", "Nerd"];


for(var i = 0; i < difficultyLevel.length; i++){
    $(".difficulty").append("<div class='level' id='"+ difficultyLevel[i] +"'>" + difficultyLevel[i] + "</div> <br>")
}

$("#Apprentice").on("click", function(){
    $(".level").empty();
    $(".difficulty").height(0);
     apprentice();

});

$("#Knight").on("click", function(){
    $(".level").empty();
    $(".difficulty").height(0);
     knight();

});

$("#Master").on("click", function(){
    $(".level").empty();
    $(".difficulty").height(0);
     master();

});

$("#Nerd").on("click", function(){
    $(".level").empty();
    $(".difficulty").height(0);
     nerd();

});

function apprentice(){
    $(".questions").show();
    var easyQuestions = [
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
    $(".questions").append("<h1 class='question'>" + easyQuestions[index].question + "</h1> <br>")
    
    for(var i = 0; i < easyQuestions[index].options.length; i++){
        $(".questions").append("<div class='options' info='"+ easyQuestions[index].options[i] +"'>" + easyQuestions[index].options[i] + "</div> <br>")
    }
    
    //Looks at the document for all items with the class of options when you click on "this" item
    $(document).on("click", ".options", function(){
        var choosenOption = $(this).attr("info")
        if (choosenOption == easyQuestions[index].answer){
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
    
        if (index < easyQuestions.length){
            $(".questions").empty();
            $(".questions").append(easyQuestions[index].question + "<br>")
            for(var i = 0; i < easyQuestions[index].options.length; i++){
                $(".questions").append("<div class='options' info='"+ easyQuestions[index].options[i] +"'>" + easyQuestions[index].options[i] + "</div> <br>")
            }
        }
       else {
            console.log(index);
            endGame();
        }
    });

}

function knight(){
    $(".questions").show();
    var mediumQuestions = [
        {
            question: "knight questions?",
            options: ["yes", "no", "maybe"],
            answer: "yes"
        },
        {
            question: "is snow cold?",
            options: ["maybe", "no", "yes"],
            answer: "yes"
        }
    ]
    $(".questions").append("<h1 class='question'>" + mediumQuestions[index].question + "</h1> <br>")
    
    for(var i = 0; i < mediumQuestions[index].options.length; i++){
        $(".questions").append("<div class='options' info='"+ mediumQuestions[index].options[i] +"'>" + mediumQuestions[index].options[i] + "</div> <br>")
    }
    
    //Looks at the document for all items with the class of options when you click on "this" item
    $(document).on("click", ".options", function(){
        var choosenOption = $(this).attr("info")
        if (choosenOption == mediumQuestions[index].answer){
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
    
        if (index < mediumQuestions.length){
            $(".questions").empty();
            $(".questions").append(mediumQuestions[index].question + "<br>")
            for(var i = 0; i < mediumQuestions[index].options.length; i++){
                $(".questions").append("<div class='options' info='"+ mediumQuestions[index].options[i] +"'>" + mediumQuestions[index].options[i] + "</div> <br>")
            }
        }
       else {
            console.log(index);
            endGame();
        }
    });

}

function master(){
    $(".questions").show();
    var hardQuestions = [
        {
            question: "master questions?",
            options: ["yes", "no", "maybe"],
            answer: "yes"
        },
        {
            question: "is snow cold?",
            options: ["maybe", "no", "yes"],
            answer: "yes"
        }
    ]
    $(".questions").append("<h1 class='question'>" + hardQuestions[index].question + "</h1> <br>")
    
    for(var i = 0; i < hardQuestions[index].options.length; i++){
        $(".questions").append("<div class='options' info='"+ hardQuestions[index].options[i] +"'>" + hardQuestions[index].options[i] + "</div> <br>")
    }
    
    //Looks at the document for all items with the class of options when you click on "this" item
    $(document).on("click", ".options", function(){
        var choosenOption = $(this).attr("info")
        if (choosenOption == hardQuestions[index].answer){
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
    
        if (index < hardQuestions.length){
            $(".questions").empty();
            $(".questions").append(hardQuestions[index].question + "<br>")
            for(var i = 0; i < hardQuestions[index].options.length; i++){
                $(".questions").append("<div class='options' info='"+ hardQuestions[index].options[i] +"'>" + hardQuestions[index].options[i] + "</div> <br>")
            }
        }
       else {
            console.log(index);
            endGame();
        }
    });

}

function nerd(){
    $(".questions").show();
    var nerdQuestions = [
        {
            question: "nerd questions?",
            options: ["yes", "no", "maybe"],
            answer: "yes"
        },
        {
            question: "is snow cold?",
            options: ["maybe", "no", "yes"],
            answer: "yes"
        }
    ]
    $(".questions").append("<h1 class='question'>" + nerdQuestions[index].question + "</h1> <br>")
    
    for(var i = 0; i < nerdQuestions[index].options.length; i++){
        $(".questions").append("<div class='options' info='"+ nerdQuestions[index].options[i] +"'>" + nerdQuestions[index].options[i] + "</div> <br>")
    }
    
    //Looks at the document for all items with the class of options when you click on "this" item
    $(document).on("click", ".options", function(){
        var choosenOption = $(this).attr("info")
        if (choosenOption == nerdQuestions[index].answer){
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
    
        if (index < nerdQuestions.length){
            $(".questions").empty();
            $(".questions").append(nerdQuestions[index].question + "<br>")
            for(var i = 0; i < nerdQuestions[index].options.length; i++){
                $(".questions").append("<div class='options' info='"+ nerdQuestions[index].options[i] +"'>" + nerdQuestions[index].options[i] + "</div> <br>")
            }
        }
       else {
            console.log(index);
            endGame();
        }
    });

}

}






difficulty();

