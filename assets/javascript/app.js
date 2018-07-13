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


// $(document).ready(function() {
//     $("#music").get(0).play();
// });

//Background Star Gen from https://dev.to/christopherkade/developing-the-star-wars-opening-crawl-in-htmlcss-2j9e 
const numStars = 150;

   
for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div");  
    star.className = "star";
    var xy = getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    document.body.append(star);
}
    
    
function getRandomPosition() {  
    var y = window.innerWidth;
    var x = window.innerHeight;
    var randomX = Math.floor(Math.random()*x);
    var randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
}

//Random Star Gen End =============================================================================================

var timer = 10;
var index = 0;
var correct = 0;
var wrong = 0;
var intervalId;

$(".correct").hide();
$(".wrong").hide();
$(".reset").hide();
$(".questions").hide();


function reset (){
    location.reload();
}
function endGame (){
    $(".questions").empty().height(0);
    $(".reset").show();
    $(".correct").show().html("Correct Answers: " + correct);
    $(".wrong").show().html("Wrong Answers: " + wrong);
};

function difficulty(){
         
    $(".correct").hide();
    $(".wrong").hide();
    $(".reset").hide();
    $(".timer").hide();
    
var difficultyLevel = ["Apprentice", "Knight", "Master", "Nerd"];


for(var i = 0; i < difficultyLevel.length; i++){
    $(".difficulty").append("<div class='level' id='"+ difficultyLevel[i] +"'>" + difficultyLevel[i] + "</div> <br>")
}

$("#Apprentice").on("click", function(){
    var click = new Audio();
    click.src = "./assets/sounds/Music.mp3"
    click.play();
    var click = new Audio();
    click.src = "./assets/sounds/Music.mp3"
    click.play();
    $(".level").hide();
    $(".difficulty").height(0);
     apprentice();

});

$("#Knight").on("click", function(){
    var click = new Audio();
    click.src = "./assets/sounds/Music.mp3"
    click.play();
    $(".level").hide();
    $(".difficulty").height(0);
     knight();

});

$("#Master").on("click", function(){
    var click = new Audio();
    click.src = "./assets/sounds/Music.mp3"
    click.play();
    $(".level").hide();
    $(".difficulty").height(0);
     master();

});

$("#Nerd").on("click", function(){
    var click = new Audio();
    click.src = "./assets/sounds/Music.mp3"
    click.play();
    $(".level").hide();
    $(".difficulty").height(0);
     nerd();

});

function apprentice(){
    $(".questions").show();
    $(".timer").show();

    var easyQuestions = [
        {
            question: "Is the sun hot?",
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

    var timeLeft = setInterval(function () {
        timer--
        $(".timer").html("<h2 class='counter'>" + timer + "</h2>");

        if (timer == 0){
            wrong++
            index++
            timer = 10;
            $(".timer").html("<h2 class='counter'>" + timer + "</h2>");

            if (index < easyQuestions.length){
                $(".questions").empty();
                $(".questions").append("<h1 class='question'>" + easyQuestions[index].question + "</h1> <br>")
                for(var i = 0; i < easyQuestions[index].options.length; i++){
                    $(".questions").append("<div class='options' info='"+ easyQuestions[index].options[i] +"'>" + easyQuestions[index].options[i] + "</div> <br>")
                }
            }
           else {
            $(".timer").hide();
            $(".counter").empty().height(0);
            clearInterval(timeLeft);
            endGame();
                
            }
        }
    }, 1000);    
   //Looks at the document for all items with the class of options when you click on "this" item
    $(document).on("click", ".options", function(){
        var choosenOption = $(this).attr("info")
        if (choosenOption == easyQuestions[index].answer){
            alert("You're Right!");
            correct++
            $(".correct").html("Correct Answers: " + correct)
        }
        else {
            alert("You're Wrong");
            wrong++
            $(".wrong").html("Wrong Answers: " + wrong)
        }
        
        timer = 11;
        index++;

        if (index < easyQuestions.length){
            $(".questions").empty();
            $(".questions").append("<h1 class='question'>" + easyQuestions[index].question + "</h1> <br>")
            for(var i = 0; i < easyQuestions[index].options.length; i++){
                $(".questions").append("<div class='options' info='"+ easyQuestions[index].options[i] +"'>" + easyQuestions[index].options[i] + "</div> <br>")
            }
        }
       else {
           $(".timer").hide();
           $(".counter").hide().height(0);
           clearInterval(timeLeft);
           endGame();
            
        }
            
    });
    
}

function knight(){
    $(".questions").show();
    $(".timer").show();

    var mediumQuestions = [
        {
            question: "Knight the sun hot?",
            options: ["yes", "no", "maybe"],
            answer: "yes"
        },
        {
            question: "Knight is snow cold?",
            options: ["maybe", "no", "yes"],
            answer: "yes"
        }
    ]
    $(".questions").append("<h1 class='question'>" + mediumQuestions[index].question + "</h1> <br>")
    
    for(var i = 0; i < mediumQuestions[index].options.length; i++){
        $(".questions").append("<div class='options' info='"+ mediumQuestions[index].options[i] +"'>" + mediumQuestions[index].options[i] + "</div> <br>")
    }

    var timeLeft = setInterval(function () {
        timer--
        $(".timer").html("<h2 class='counter'>" + timer + "</h2>");

        if (timer == 0){
            wrong++
            index++
            timer = 10;
            $(".timer").html("<h2 class='counter'>" + timer + "</h2>");

            if (index < mediumQuestions.length){
                $(".questions").empty();
                $(".questions").append("<h1 class='question'>" + mediumQuestions[index].question + "</h1> <br>")
                for(var i = 0; i < mediumQuestions[index].options.length; i++){
                    $(".questions").append("<div class='options' info='"+ mediumQuestions[index].options[i] +"'>" + mediumQuestions[index].options[i] + "</div> <br>")
                }
            }
           else {
            $(".timer").hide();
            $(".counter").empty().height(0);
            clearInterval(timeLeft);
            endGame();
                
            }
        }
    }, 1000);    
   //Looks at the document for all items with the class of options when you click on "this" item
    $(document).on("click", ".options", function(){
        var choosenOption = $(this).attr("info")
        if (choosenOption == mediumQuestions[index].answer){
            alert("You're Right!");
            correct++
            $(".correct").html("Correct Answers: " + correct)
        }
        else {
            alert("You're Wrong");
            wrong++
            $(".wrong").html("Wrong Answers: " + wrong)
        }
        
        timer = 11;
        index++;

        if (index < mediumQuestions.length){
            $(".questions").empty();
            $(".questions").append("<h1 class='question'>" + mediumQuestions[index].question + "</h1> <br>")
            for(var i = 0; i < mediumQuestions[index].options.length; i++){
                $(".questions").append("<div class='options' info='"+ mediumQuestions[index].options[i] +"'>" + mediumQuestions[index].options[i] + "</div> <br>")
            }
        }
       else {
           $(".counter").hide().height(0);
           $(".timer").hide();
           clearInterval(timeLeft);
           endGame();
            
        }
            
    });
    
}

function master(){
    $(".questions").show();
    $(".timer").show();

    var hardQuestions = [
        {
            question: "Master the sun hot?",
            options: ["yes", "no", "maybe"],
            answer: "yes"
        },
        {
            question: "Master is snow cold?",
            options: ["maybe", "no", "yes"],
            answer: "yes"
        }
    ]
    $(".questions").append("<h1 class='question'>" + hardQuestions[index].question + "</h1> <br>")
    
    for(var i = 0; i < hardQuestions[index].options.length; i++){
        $(".questions").append("<div class='options' info='"+ hardQuestions[index].options[i] +"'>" + hardQuestions[index].options[i] + "</div> <br>")
    }

    var timeLeft = setInterval(function () {
        timer--
        $(".timer").html("<h2 class='counter'>" + timer + "</h2>");

        if (timer == 0){
            wrong++
            index++
            timer = 10;
            $(".timer").html("<h2 class='counter'>" + timer + "</h2>");

            if (index < hardQuestions.length){
                $(".questions").empty();
                $(".questions").append("<h1 class='question'>" + hardQuestions[index].question + "</h1> <br>")
                for(var i = 0; i < hardQuestions[index].options.length; i++){
                    $(".questions").append("<div class='options' info='"+ hardQuestions[index].options[i] +"'>" + hardQuestions[index].options[i] + "</div> <br>")
                }
            }
           else {
            $(".timer").hide();
            $(".counter").empty().height(0);
            clearInterval(timeLeft);
            endGame();
                
            }
        }
    }, 1000);    
   //Looks at the document for all items with the class of options when you click on "this" item
    $(document).on("click", ".options", function(){
        var choosenOption = $(this).attr("info")
        if (choosenOption == hardQuestions[index].answer){
            alert("You're Right!");
            correct++
            $(".correct").html("Correct Answers: " + correct)
        }
        else {
            alert("You're Wrong");
            wrong++
            $(".wrong").html("Wrong Answers: " + wrong)
        }
        
        timer = 11;
        index++;

        if (index < hardQuestions.length){
            $(".questions").empty();
            $(".questions").append("<h1 class='question'>" + hardQuestions[index].question + "</h1> <br>")
            for(var i = 0; i < hardQuestions[index].options.length; i++){
                $(".questions").append("<div class='options' info='"+ hardQuestions[index].options[i] +"'>" + hardQuestions[index].options[i] + "</div> <br>")
            }
        }
       else {
           $(".counter").hide().height(0);
           $(".timer").hide();
           clearInterval(timeLeft);
           endGame();
            
        }
            
    });
    
}

function nerd(){
    $(".questions").show();
    $(".timer").show();

    var nerdQuestions = [
        {
            question: "Nerd the sun hot?",
            options: ["yes", "no", "maybe"],
            answer: "yes"
        },
        {
            question: "Nerd is snow cold?",
            options: ["maybe", "no", "yes"],
            answer: "yes"
        }
    ]
    $(".questions").append("<h1 class='question'>" + nerdQuestions[index].question + "</h1> <br>")
    
    for(var i = 0; i < nerdQuestions[index].options.length; i++){
        $(".questions").append("<div class='options' info='"+ nerdQuestions[index].options[i] +"'>" + nerdQuestions[index].options[i] + "</div> <br>")
    }

    var timeLeft = setInterval(function () {
        timer--
        $(".timer").html("<h2 class='counter'>" + timer + "</h2>");

        if (timer == 0){
            wrong++
            index++
            timer = 10;
            $(".timer").html("<h2 class='counter'>" + timer + "</h2>");

            if (index < nerdQuestions.length){
                $(".questions").empty();
                $(".questions").append("<h1 class='question'>" + nerdQuestions[index].question + "</h1> <br>")
                for(var i = 0; i < nerdQuestions[index].options.length; i++){
                    $(".questions").append("<div class='options' info='"+ nerdQuestions[index].options[i] +"'>" + nerdQuestions[index].options[i] + "</div> <br>")
                }
            }
           else {
            $(".timer").hide();
            $(".counter").empty().height(0);
            clearInterval(timeLeft);
            endGame();
                
            }
        }
    }, 1000);    
   //Looks at the document for all items with the class of options when you click on "this" item
    $(document).on("click", ".options", function(){
        var choosenOption = $(this).attr("info")
        if (choosenOption == nerdQuestions[index].answer){
            alert("You're Right!");
            correct++
            $(".correct").html("Correct Answers: " + correct)
        }
        else {
            alert("You're Wrong");
            wrong++
            $(".wrong").html("Wrong Answers: " + wrong)
        }
        
        timer = 11;
        index++;

        if (index < nerdQuestions.length){
            $(".questions").empty();
            $(".questions").append("<h1 class='question'>" + nerdQuestions[index].question + "</h1> <br>")
            for(var i = 0; i < nerdQuestions[index].options.length; i++){
                $(".questions").append("<div class='options' info='"+ nerdQuestions[index].options[i] +"'>" + nerdQuestions[index].options[i] + "</div> <br>")
            }
        }
       else {
           $(".counter").hide().height(0);
           $(".timer").hide();
           clearInterval(timeLeft);
           endGame();
            
        }
            
    });
    
}

}

difficulty();
music(); 
