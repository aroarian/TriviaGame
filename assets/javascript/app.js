$(document).ready(function() {
  //Global Variables ======================================================================================
  var stopTimer = false;
  var timer = 10;
  var index = 0;
  var correct = 0;
  var wrong = 0;

  $(".correct").hide();
  $(".wrong").hide();
  $(".reset").hide();
  $(".questions").hide();

  //Reset Functions =======================================================================================
  $(".reset").on("click", function() {
    difficulty();
  });

  //Sound for Reset Button ================================================================================
  var hover = new Audio();
  hover.src = "./assets/sounds/hover.wav";
  $(".reset").mouseenter(function() {
    hover.play();
  });

  //Game End =============================================================================================
  function endGame() {
    $(".questions").empty().height(0);
    $(".current").empty();
    $(".results").show();
    $(".reset").show();
    $(".difficulty").empty();
    $(".correct").show().html("Correct Answers: " + correct);
    $(".wrong").show().html("Wrong Answers: " + wrong);
  };

  //Game Start ============================================================================================
  function difficulty() {
    $(".questions").hide();
    $(".correct").hide();
    $(".wrong").hide();
    $(".reset").hide();
    $(".timer").hide();
    $(".results").hide();

    correct = 0;
    wrong = 0;

    var difficultyLevel = ["Apprentice", "Knight", "Master", "Nerd"];

    for (var i = 0; i < difficultyLevel.length; i++) {
      $(".difficulty").append("<div class='level' id='" + difficultyLevel[i] + "'>" + difficultyLevel[i] + "</div> <br>");
    };

    var hover = new Audio();
    hover.src = "./assets/sounds/hover.wav";
    $(".level").mouseenter(function() {
      hover.play();
    });

    //On Clicks calls difficulty function and plays music ================================================
    $("#Apprentice").on("click", function() {
      var click = new Audio();
      click.src = "./assets/sounds/Music.mp3";
      click.loop = true;
      click.play();
      $(".level").hide();
      $(".difficulty").height(0);
      apprentice();
    });

    $("#Knight").on("click", function() {
      var click = new Audio();
      click.src = "./assets/sounds/Music.mp3";
      click.loop = true;
      click.play();
      $(".level").hide();
      $(".difficulty").height(0);
      knight();
    });

    $("#Master").on("click", function() {
      var click = new Audio();
      click.src = "./assets/sounds/Music.mp3";
      click.loop = true;
      click.play();
      $(".level").hide();
      $(".difficulty").height(0);
      master();
    });

    $("#Nerd").on("click", function() {
      var click = new Audio();
      click.src = "./assets/sounds/Music.mp3";
      click.loop = true;
      click.play();
      $(".level").hide();
      $(".difficulty").height(0);
      nerd();
    });

    $(".answer").on("click", function() {
      return;
    });

    $(".incorrect").on("click", function() {
      return;
    });

    $(".noclick").on("click", function() {
      return;
    });

    //Difficulty functions and questions ============================================================================
    function apprentice() {
      $(".questions").show();
      $(".current").show();
      $(".timer").show();
      timer = 10;
      index = 0;

      var easyQuestions = [
        {
          question: "Worst Star Wars movie?",
          options: ["The Phantom Menace","The Last Jedi","Solo","Attack of the Clones"],
          answer: "The Last Jedi"
        },
        {
          question: "Who was Luke's father?",
          options: ["Palpatine", "Obi-Wan", "Anakin Skywalker", "The Force"],
          answer: "Anakin Skywalker"
        },
        {
          question: '"Never tell me the ____."',
          options: ["Chances", "Odds", "Differences"],
          answer: "Odds"
        },
        {
          question: "Darth Vader's Lightsaber color?",
          options: ["Blue", "Red", "Green", "Yellow"],
          answer: "Red"
        },
        {
          question: "Who shot first?",
          options: ["Han Solo", "Greedo"],
          answer: "Han Solo"
        },
        {
          question: '"I love you. ________."',
          options: ["I love you too", "I know", "Same", "Ditto"],
          answer: "I know"
        },
        {
          question: "What color was Obi-Wan's Lightsaber?",
          options: ["Red", "Yellow", "Green", "Blue"],
          answer: "Blue"
        },
        {
          question: "Who enslaved Princess Leia?",
          options: ["Yoda", "Bobba Fett", "IG-88", "Jabba the Hutt"],
          answer: "Jabba the Hutt"
        },
        {
          question: "Who was frozen in carbonite?",
          options: ["Luke Skywalker", "Princess Leia", "Han Solo"],
          answer: "Han Solo"
        },
        {
          question: "What was Jabba's species?",
          options: ["Charon", "Xexto", "Hutt", "Squib"],
          answer: "Hutt"
        }
      ];

      //Display Question and Options ================================================================
      $(".current").append("<h1 class='question'>" + easyQuestions[index].question + "</h1> <br>");

      for (var i = 0; i < easyQuestions[index].options.length; i++) {
        $(".questions").append(
          "<div class='options' info='" +
            easyQuestions[index].options[i] +
            "'>" +
            easyQuestions[index].options[i] +
            "</div> <br>"
        );
      };

      var hover = new Audio();
      hover.src = "./assets/sounds/hover.wav";
      $(".options").mouseenter(function() {
        hover.play();
      });

      //Timer and timer logic for each question ===========================================================
      var timeLeft = setInterval(function() {
        if (stopTimer) return;

        timer--;
        $(".timer").html("<h2 class='counter'>" + timer + "</h2>");

        if (timer == 0) {
          stopTimer = true;
          wrong++;
          $(".timer").hide();
          $(".questions").empty();
          $(".questions").append("<div class='answer'>" + easyQuestions[index].answer + "</div>");

          setTimeout(function() {
            index++;
            $(".current").empty();
            $(".questions").empty();
            timer = 10;
            $(".timer").html("<h2 class='counter'>" + timer + "</h2>");

            if (index < easyQuestions.length) {
              stopTimer = false;
              $(".timer").show();
              $(".current").append("<h1 class='question'>" + easyQuestions[index].question + "</h1> <br>");

              for (var i = 0; i < easyQuestions[index].options.length; i++) {
                $(".questions").append(
                  "<div class='options' info='" +
                    easyQuestions[index].options[i] +
                    "'>" +
                    easyQuestions[index].options[i] +
                    "</div> <br>"
                );
              }
            } 
            else {
              $(".timer").hide();
              stopTimer = false;
              endGame();
            };

            var hover = new Audio();
            hover.src = "./assets/sounds/hover.wav";
            $(".options").mouseenter(function() {
              hover.play();
            });
          }, 2000);
        }
      }, 1000);

      //Option on click correct/wrong logic ================================================================
      $(document).on("click", ".options", function() {
        var choosenOption = $(this).attr("info");

        if (choosenOption == easyQuestions[index].answer) {
          stopTimer = true;
          $(".options").addClass("noclick").removeClass("options");
          $(this).css({background: "linear-gradient(rgb(8, 109, 38), rgb(2, 21, 34))"});
          $(this).css({border: "2px solid rgb(30, 170, 72)"});
          correct++;
          $(".timer").hide();
        } 
        else {
          stopTimer = true;
          wrong++;
          $(this).css({background: "linear-gradient(rgb(122, 11, 11), rgb(2, 21, 34))"});
          $(this).css({border: "2px solid rgb(226, 20, 20)"});
          $(this).addClass("incorrect").removeClass("options");
          $(".options").addClass("noclick").removeClass("options");
          $(".timer").hide();

          setTimeout(function() {
            $(".questions").empty();
            $(".questions").append("<div class='answer'>" + easyQuestions[index].answer + "</div>");
          }, 1500);
        };

        //Delay switching to next question after selecting an option =====================================
        setTimeout(function() {
          index++;

          if (index < easyQuestions.length) {
            $(".timer").show();
            timer = 10;
            $(".timer").html("<h2 class='counter'>" + timer + "</h2>");
            stopTimer = false;
            $(".current").empty();
            $(".questions").empty();
            $(".current").append("<h1 class='question'>" + easyQuestions[index].question + "</h1> <br>");
            for (var i = 0; i < easyQuestions[index].options.length; i++) {
              $(".questions").append(
                "<div class='options' info='" +
                  easyQuestions[index].options[i] +
                  "'>" +
                  easyQuestions[index].options[i] +
                  "</div> <br>"
              );
            };
          } 
          else {
            $(".timer").hide();
            stopTimer = true;
            endGame();
          };

          var hover = new Audio();
          hover.src = "./assets/sounds/hover.wav";
          $(".options").mouseenter(function() {
            hover.play();
          });
        }, 3000);
      });
    };

    function knight() {
      $(".questions").show();
      $(".current").show();
      $(".timer").show();
      index = 0;
      timer = 10;

      var mediumQuestions = [
        {
          question: '"Feel, Don\'t think. Trust your instincts."',
          options: ["Obi-Wan", "Shmi Skywalker", "Qui-Gon Jinn", "Padme"],
          answer: "Qui-Gon Jinn"
        },
        {
          question: '"I will be Chancellor."',
          options: ["Queen Amidala","Senator Teem","Senator Palpatine","Senator Antilles"],
          answer: "Senator Palpatine"
        },
        {
          question: "Who was Yoda's apprentice?",
          options: ["Obi-Wan", "Qui-Gon Jinn", "Po Nudu", "Count Dooku"],
          answer: "Count Dooku"
        },
        {
          question: "What was Obi-Wan's name on Tatooine?",
          options: ["Ken", "Ben", "Obi", "Wan"],
          answer: "Ben"
        },
        {
          question: "How many suns did Tatooine have?",
          options: ["Six", "Three", "One", "Two"],
          answer: "Two"
        },
        {
          question: "Who had a Death Sentence on 12 systems?",
          options: ["Jabba the Hut", "Han Solo", "Dr. Evazan", "Ponda Baba"],
          answer: "Dr. Evazan"
        },
        {
          question: "What species was Greedo?",
          options: ["Dug", "Transdoshan", "Rodian", "Hutt"],
          answer: "Rodian"
        },
        {
          question: "What type of weapon did Chewbacca's use?",
          options: ["Blaster Rifle","Bowcaster","Blaster Pistol","Ion Blaster"],
          answer: "Bowcaster"
        },
        {
          question: '"Its a trap!"',
          options: ["Luke Skywalker","Princess Leia","Admiral Ackbar","Grand Moff Tarkin"],
          answer: "Admiral Ackbar"
        },
        {
          question: "How many moons does Hoth have?",
          options: ["Six", "Three", "Nine", "None"],
          answer: "Three"
        }
      ];

      $(".current").append("<h1 class='question'>" + mediumQuestions[index].question + "</h1> <br>");

      for (var i = 0; i < mediumQuestions[index].options.length; i++) {
        $(".questions").append(
          "<div class='options' info='" +
            mediumQuestions[index].options[i] +
            "'>" +
            mediumQuestions[index].options[i] +
            "</div> <br>"
        );
      }

      var hover = new Audio();
      hover.src = "./assets/sounds/hover.wav";
      $(".options").mouseenter(function() {
        hover.play();
      });

      var timeLeft = setInterval(function() {
        if (stopTimer) return;

        timer--;
        $(".timer").html("<h2 class='counter'>" + timer + "</h2>");

        if (timer == 0) {
          stopTimer = true;
          wrong++;
          $(".timer").hide();
          $(".questions").empty();
          $(".questions").append("<div class='answer'>" + mediumQuestions[index].answer + "</div>");

          setTimeout(function() {
            index++;
            $(".current").empty();
            $(".questions").empty();
            timer = 10;
            $(".timer").html("<h2 class='counter'>" + timer + "</h2>");

            if (index < mediumQuestions.length) {
              stopTimer = false;
              $(".timer").show();
              $(".current").append("<h1 class='question'>" + mediumQuestions[index].question + "</h1> <br>");
              for (var i = 0; i < mediumQuestions[index].options.length; i++) {
                $(".questions").append(
                  "<div class='options' info='" +
                    mediumQuestions[index].options[i] +
                    "'>" +
                    mediumQuestions[index].options[i] +
                    "</div> <br>"
                );
              };
            } 
            else {
              $(".timer").hide();
              stopTimer = false;
              endGame();
            }

            var hover = new Audio();
            hover.src = "./assets/sounds/hover.wav";
            $(".options").mouseenter(function() {
              hover.play();
            });
          }, 2000);
        };
      }, 1000);

      //Option on click correct/wrong logic ================================================================
      $(document).on("click", ".options", function() {
        var choosenOption = $(this).attr("info");

        if (choosenOption == mediumQuestions[index].answer) {
          stopTimer = true;
          $(".options").addClass("noclick").removeClass("options");
          $(this).css({background: "linear-gradient(rgb(8, 109, 38), rgb(2, 21, 34))"});
          $(this).css({border: "2px solid rgb(30, 170, 72)"});
          correct++;
          $(".timer").hide();
        } 
        else {
          stopTimer = true;
          $(this).css({background: "linear-gradient(rgb(122, 11, 11), rgb(2, 21, 34))"});
          $(this).css({border: "2px solid rgb(226, 20, 20)"});
          $(this).addClass("incorrect").removeClass("options");
          $(".options").addClass("noclick").removeClass("options");
          wrong++;
          $(".timer").hide();

          setTimeout(function() {
            $(".questions").empty();
            $(".questions").append("<div class='answer'>" + mediumQuestions[index].answer + "</div>");
          }, 1500);
        };

        //Delay switching to next question after selecting an option =====================================
        setTimeout(function() {
          index++;

          if (index < mediumQuestions.length) {
            $(".timer").show();
            timer = 10;
            $(".timer").html("<h2 class='counter'>" + timer + "</h2>");
            stopTimer = false;
            $(".current").empty();
            $(".questions").empty();
            $(".current").append("<h1 class='question'>" + mediumQuestions[index].question + "</h1> <br>");
            for (var i = 0; i < mediumQuestions[index].options.length; i++) {
              $(".questions").append(
                "<div class='options' info='" +
                  mediumQuestions[index].options[i] +
                  "'>" +
                  mediumQuestions[index].options[i] +
                  "</div> <br>"
              );
            };
          } 
          else {
            $(".timer").hide();
            stopTimer = true;
            endGame();
          };

          var hover = new Audio();
          hover.src = "./assets/sounds/hover.wav";
          $(".options").mouseenter(function() {
            hover.play();
          });
        }, 3000);
      });
    };

    function master() {
      $(".questions").show();
      $(".current").show();
      $(".timer").show();
      index = 0;
      timer = 10;

      var hardQuestions = [
        {
          question: "Who was Red Three?",
          options: ["Biggs Darklighter","Wedge Antilles","Luke Skywalker","Jek Porkins"],
          answer: "Biggs Darklighter"
        },
        {
          question: "What was Yoda's species?",
          options: ["Unknown", "Trilith", "Yolor", "Yangral"],
          answer: "Unknown"
        },
        {
          question: "Where is an AT-AT most vulnerable?",
          options: ["It's sensor array","The neck","It's drive motor","An escape hatch"],
          answer: "The neck"
        },
        {
          question: "How many nostrils do Tauntauns have?",
          options: ["Two", "Four", "Six", "One"],
          answer: "Four"
        },
        {
          question: "How many people can a AT-ST hold?",
          options: ["Two", "Six", "Three", "Four"],
          answer: "Two"
        },
        {
          question: "Which planet is below Cloud City?",
          options: ["Couscant", "Dagobah", "Hoth", "Besbin"],
          answer: "Besbin"
        },
        {
          question: "Who fixed the hyperdrive on the Falcon?",
          options: ["C-3PO", "R2-D2", "Chewbacca", "Lando"],
          answer: "R2-D2"
        },
        {
          question: "What does AT-AT stand for?",
          options: [
            "All Terrain Armored Transport",
            "All Terrain Assault Titan",
            "All Terrain Assault Tank",
            "All Terrain Armored Tyrant"
          ],
          answer: "All Terrain Armored Transport"
        },
        {
          question: "What were fear, anger and aggression to Yoda?",
          options: ["Fun","The Jedi way","The dark side","Luke's next lesson"],
          answer: "The dark side"
        },
        {
          question: "How many forms of communication does C-3PO know?",
          options: ["Over 9000", "5 Million", "1 Million", "6 Million"],
          answer: "6 Million"
        },
        {
          question: "What was Watto's favorite passtime?",
          options: ["Singing", "Gambling", "Bargaining", "Trading"],
          answer: "Gambling"
        },
        {
          question: "What model of ship was Han's?",
          options: ["X-Wing", "H-Type Nubian", "T-16", "YT-1300"],
          answer: "YT-1300"
        }
      ];

      $(".current").append("<h1 class='question'>" + hardQuestions[index].question + "</h1> <br>");

      for (var i = 0; i < hardQuestions[index].options.length; i++) {
        $(".questions").append(
          "<div class='options' info='" +
            hardQuestions[index].options[i] +
            "'>" +
            hardQuestions[index].options[i] +
            "</div> <br>"
        );
      }

      var hover = new Audio();
      hover.src = "./assets/sounds/hover.wav";
      $(".options").mouseenter(function() {
        hover.play();
      });

      var timeLeft = setInterval(function() {
        if (stopTimer) return;

        timer--;
        $(".timer").html("<h2 class='counter'>" + timer + "</h2>");

        if (timer == 0) {
          stopTimer = true;
          wrong++;
          $(".timer").hide();
          $(".questions").empty();
          $(".questions").append("<div class='answer'>" + hardQuestions[index].answer + "</div>");

          setTimeout(function() {
            index++;
            $(".current").empty();
            $(".questions").empty();
            timer = 10;
            $(".timer").html("<h2 class='counter'>" + timer + "</h2>");

            if (index < hardQuestions.length) {
              stopTimer = false;
              $(".timer").show();
              $(".current").append(
                "<h1 class='question'>" +
                  hardQuestions[index].question +
                  "</h1> <br>"
              );
              for (var i = 0; i < hardQuestions[index].options.length; i++) {
                $(".questions").append(
                  "<div class='options' info='" +
                    hardQuestions[index].options[i] +
                    "'>" +
                    hardQuestions[index].options[i] +
                    "</div> <br>"
                );
              };
            } 
            else {
              $(".timer").hide();
              stopTimer = false;
              endGame();
            };

            var hover = new Audio();
            hover.src = "./assets/sounds/hover.wav";
            $(".options").mouseenter(function() {
              hover.play();
            });
          }, 2000);
        };
      }, 1000);

      //Option on click correct/wrong logic ================================================================
      $(document).on("click", ".options", function() {
        var choosenOption = $(this).attr("info");

        if (choosenOption == hardQuestions[index].answer) {
          stopTimer = true;
          $(".options").addClass("noclick").removeClass("options");
          $(this).css({background: "linear-gradient(rgb(8, 109, 38), rgb(2, 21, 34))"});
          $(this).css({border: "2px solid rgb(30, 170, 72)"});
          correct++;
          $(".timer").hide();
        } 
        else {
          stopTimer = true;
          wrong++;
          $(this).css({background: "linear-gradient(rgb(122, 11, 11), rgb(2, 21, 34))"});
          $(this).css({ border: "2px solid rgb(226, 20, 20)" });
          $(this).addClass("incorrect").removeClass("options");
          $(".options").addClass("noclick").removeClass("options");
          
          $(".timer").hide();

          setTimeout(function() {
            $(".questions").empty();
            $(".questions").append(
              "<div class='answer'>" + hardQuestions[index].answer + "</div>"
            );
          }, 1500);
        }

        //Delay switching to next question after selecting an option =====================================
        setTimeout(function() {
          index++;

          if (index < hardQuestions.length) {
            $(".timer").show();
            timer = 10;
            $(".timer").html("<h2 class='counter'>" + timer + "</h2>");
            stopTimer = false;
            $(".current").empty();
            $(".questions").empty();
            $(".current").append(
              "<h1 class='question'>" +
                hardQuestions[index].question +
                "</h1> <br>"
            );
            for (var i = 0; i < hardQuestions[index].options.length; i++) {
              $(".questions").append(
                "<div class='options' info='" +
                  hardQuestions[index].options[i] +
                  "'>" +
                  hardQuestions[index].options[i] +
                  "</div> <br>"
              );
            }
          } 
          else {
            $(".timer").hide();
            stopTimer = true;
            endGame();
          }

          var hover = new Audio();
          hover.src = "./assets/sounds/hover.wav";
          $(".options").mouseenter(function() {
            hover.play();
          });
        }, 3000);
      });
    };

    function nerd() {
      $(".questions").show();
      $(".current").show();
      $(".timer").show();
      index = 0;
      timer = 10;

      var nerdQuestions = [
        {
          question: "In Cloud City, what platform was Slave I docked?",
          options: ["North", "West", "East", "South"],
          answer: "East"
        },
        {
          question: "What planet did Darth Maul die on?",
          options: ["Naboo", "Tatooine", "Dantooine", "Yavin 4"],
          answer: "Tatooine"
        },
        {
          question: "How old was Mace Windu during the Battle of Naboo?",
          options: ["Thirty-Eight", "Forty", "Fifty", "Forty-Eight"],
          answer: "Forty"
        },
        {
          question: "What was Darth Maul's species?",
          options: ["Human", "Irdonian Zabrak", "Nemoidian", "Rodian"],
          answer: "Irdonian Zabrak"
        },
        {
          question: "What type of armor did Jango Fett wear?",
          options: ["Mandalay", "Mondolary", "Mandaloovian", "Mandalorian"],
          answer: "Mandalorian"
        },
        {
          question: "What model of blaster did clone troopers use?",
          options: ["CD-1334", "DC-270", "DC-15", "CD-1408"],
          answer: "DC-15"
        },
        {
          question: "What clone trooper was in Return of the Jedi?",
          options: ["Rex", "Fives", "Echo", "Cody"],
          answer: "Rex"
        },
        {
          question: "What Jedi did Palpatine kill first?",
          options: ["Agen Kolar", "Kit Fisto", "Saesse Tiin", "Mace Windu"],
          answer: "Agen Kolar"
        },
        {
          question: "What was Jabba the Hutt's homeworld?",
          options: ["Da Soocha V", "Tatooine", "Nal Hutta", "Nar Shaddaa"],
          answer: "Nal Hutta"
        },
        {
          question: "What was Luke's rank on Hoth?",
          options: ["General", "Captain", "Lieutenant", "Commander"],
          answer: "Commander"
        },
        {
          question: "What planet do Rancors come from?",
          options: ["Dathomir", "Dantooine", "Tatooine", "Yavin 4"],
          answer: "Dathomir"
        }
      ];

      $(".current").append("<h1 class='question'>" + nerdQuestions[index].question + "</h1> <br>");

      for (var i = 0; i < nerdQuestions[index].options.length; i++) {
        $(".questions").append(
          "<div class='options' info='" +
            nerdQuestions[index].options[i] +
            "'>" +
            nerdQuestions[index].options[i] +
            "</div> <br>"
        );
      }

      var hover = new Audio();
      hover.src = "./assets/sounds/hover.wav";
      $(".options").mouseenter(function() {
        hover.play();
      });

      var timeLeft = setInterval(function() {
        if (stopTimer) return;

        timer--;
        $(".timer").html("<h2 class='counter'>" + timer + "</h2>");

        if (timer == 0) {
          stopTimer = true;
          wrong++;
          $(".timer").hide();
          $(".questions").empty();
          $(".questions").append("<div class='answer'>" + nerdQuestions[index].answer + "</div>");

          setTimeout(function() {
            index++;
            $(".current").empty();
            $(".questions").empty();

            timer = 10;
            $(".timer").html("<h2 class='counter'>" + timer + "</h2>");

            if (index < nerdQuestions.length) {
              stopTimer = false;
              $(".timer").show();
              $(".current").append("<h1 class='question'>" + nerdQuestions[index].question + "</h1> <br>");
              for (var i = 0; i < nerdQuestions[index].options.length; i++) {
                $(".questions").append(
                  "<div class='options' info='" +
                    nerdQuestions[index].options[i] +
                    "'>" +
                    nerdQuestions[index].options[i] +
                    "</div> <br>"
                );
              }
            } 
            else {
              $(".timer").hide();
              stopTimer = false;
              endGame();
            };

            var hover = new Audio();
            hover.src = "./assets/sounds/hover.wav";
            $(".options").mouseenter(function() {
              hover.play();
            });
          }, 2000);
        };
      }, 1000);

      //Option on click correct/wrong logic ================================================================
      $(document).on("click", ".options", function() {
        var choosenOption = $(this).attr("info");

        if (choosenOption == nerdQuestions[index].answer) {
          stopTimer = true;
          $(".options").addClass("noclick").removeClass("options");
          $(this).css({background: "linear-gradient(rgb(8, 109, 38), rgb(2, 21, 34))"});
          $(this).css({border: "2px solid rgb(30, 170, 72)"});
          correct++;
          $(".timer").hide();
        } 
        else {
          stopTimer = true;
          wrong++;
          $(this).css({background: "linear-gradient(rgb(122, 11, 11), rgb(2, 21, 34))"});
          $(this).css({border: "2px solid rgb(226, 20, 20)"});
          $(this).addClass("incorrect").removeClass("options");
          $(".options").addClass("noclick").removeClass("options");
          $(".timer").hide();

          setTimeout(function() {
            $(".questions").empty();
            $(".questions").append("<div class='answer'>" + nerdQuestions[index].answer + "</div>");
          }, 1500);
        };

        //Delay switching to next question after selecting an option =====================================
        setTimeout(function() {
          index++;

          if (index < nerdQuestions.length) {
            $(".timer").show();
            timer = 10;
            $(".timer").html("<h2 class='counter'>" + timer + "</h2>");
            stopTimer = false;
            $(".current").empty();
            $(".questions").empty();
            $(".current").append("<h1 class='question'>" + nerdQuestions[index].question + "</h1> <br>");

            for (var i = 0; i < nerdQuestions[index].options.length; i++) {
              $(".questions").append(
                "<div class='options' info='" +
                  nerdQuestions[index].options[i] +
                  "'>" +
                  nerdQuestions[index].options[i] +
                  "</div> <br>"
              );
            }
          } 
          else {
            $(".timer").hide();
            stopTimer = true;
            endGame();
          }

          var hover = new Audio();
          hover.src = "./assets/sounds/hover.wav";
          $(".options").mouseenter(function() {
            hover.play();
          });
        }, 3000);
      });
    };
  };

  difficulty();
});
