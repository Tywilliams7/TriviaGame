//Variables
var correctAnswers = 0,
    incorrectAnswers = 0,
    unanswered = 0;
    console.log(correctAnswers)
//HTML targets
var empty = $('#empty-div');
var wins = $('#correctAnswers');
var loss = $('#incorrectAnswers');
var ties = $('#incompleteAnswers');
// function to change to next question
//if no more questions left then display end game

//Hide on click of the start button
$(document).ready(function () {
    //Hidden Elements
    $('#first').hide();
    $('#second').hide();
    $('#third').hide();
    $('#forth').hide();
    $('#fifth').hide();
    $('#end-game').hide()

    //
    $("#game-start").click(function () {
        $("#game-start").hide();
        $('#first').show();
        var timeLeft = 7;
        elem = document.getElementById('timer'),
            timerId = setInterval(countdown, 1000);
        function countdown() {
            if (timeLeft == 0) {
                clearInterval(timerId);
                $('#timer').hide();
                $('#first').hide();
                unanswered++,
                empty.append(" <h2>Nope.</h2>");
                empty.append(" <p><b>The correct answer was: Wii Sports.</b></p>.");
                empty.append("<img src='assets/images/wii.gif'>");
                setTimeout(function () { empty.hide();; }, 3000);
                setTimeout(function () { $('#second').show();; }, 3000);
                $('#timer').show(5000);


            } else {
                elem.innerHTML = timeLeft + ' seconds remaining';
                timeLeft--;
            }
        }

    });
    $(".NinWrong").on("click", function () {
        $("#first").hide();
        clearInterval(timerId);
        incorrectAnswers++;
        empty.append(" <h2>Nope.</h2>");
        empty.append(" <p><b>The correct answer was: Wii Sports.</b></p>.");
        empty.append("<img src='assets/images/wii.gif'>");
        setTimeout(function () { empty.hide();; }, 3000);
        setTimeout(function () { $('#second').show();; }, 3000);


    })
    $("#NinCorrect").on("click", function () {
        $("#first").hide();
        clearInterval(timerId);
        correctAnswers++;
        empty.append(" <h2>Great Job!.</h2>");
        empty.append("<img src='assets/images/wii.gif'>");
        setTimeout(function () { empty.hide();; }, 3000);
        setTimeout(function () { $('#second').show();; }, 3000);
    })
    $(".robotWrong").on("click", function () {
        $("#second").hide();
        incorrectAnswers++;
        empty.show()
        empty.empty()
        empty.append(" <h2>Nope.</h2>");
        empty.append(" <p><b>The correct answer was: CL4P-TP.</b></p>.");
        // append img here not working
        empty.append("<img src='assets/images/Clap.gif'>");
        setTimeout(function () { empty.hide();; }, 3000);
        setTimeout(function () { $('#third').show();; }, 3000);
        // timeOut('third')
    })
    $("#robotRight").on("click", function () {
        $("#second").hide();
        correctAnswers++;
        empty.show()
        empty.empty()
        empty.append(" <h2>Great Job!.</h2>");
        //append img here not working
        empty.append("<img src='assets/images/Clap.gif'>");
        setTimeout(function () { empty.hide();; }, 3000);
        setTimeout(function () { $('#third').show();; }, 3000);
    })
    $(".xboxWrong").on("click", function () {
        $("#third").hide();
        incorrectAnswers++;
        empty.show()
        empty.empty()
        empty.append(" <h2>Nope.</h2>");
        empty.append(" <p><b>The correct answer was: NBA 2k15.</b></p>.");
        // append img here not working
        empty.append("<img src='assets/images/2k.gif'>");
        setTimeout(function () { empty.hide();; }, 3000);
        setTimeout(function () { $('#forth').show();; }, 3000);

    })
    $("#xboxRight").on("click", function () {
        $("#third").hide();
        correctAnswers++;
        empty.show()
        empty.empty()
        empty.append(" <h2>Great Job!.</h2>");
        //append img here not working
        empty.append("<img src='assets/images/2k.gif'>");
        setTimeout(function () { empty.hide();; }, 3000);
        setTimeout(function () { $('#forth').show();; }, 3000);
    })
    //Question 4
    $(".4Wrong").on("click", function () {
        $("#forth").hide();
        incorrectAnswers++;
        empty.show()
        empty.empty()
        empty.append(" <h2>Nope.</h2>");
        empty.append(" <p><b>The correct answer was: World of WarCraft.</b></p>.");
        empty.append("<img src='assets/images/wow.gif'>");
        setTimeout(function () { empty.hide();; }, 3000);
        setTimeout(function () { $('#fifth').show();; }, 3000);

    })
    $("#4Right").on("click", function () {
        $("#forth").hide();
        correctAnswers++;
        empty.show()
        empty.empty()
        empty.append(" <h2>Great Job!.</h2>");
        empty.append("<img src='assets/images/wow.gif'>");
        setTimeout(function () { empty.hide();; }, 3000);
        setTimeout(function () { $('#fifth').show();; }, 3000);
    })
    //Question 5
    $(".5Wrong").on("click", function () {
        $("#fifth").hide();
        incorrectAnswers++;
        empty.show()
        empty.empty()
        empty.append(" <h2>Nope.</h2>");
        empty.append(" <p><b>The correct answer was: Apex Legends.</b></p>.");
        empty.append("<img src='assets/images/apex.gif'>");
        wins.html(correctAnswers);
        loss.html(incorrectAnswers);
        ties.html(unanswered);
        setTimeout(function () { empty.hide();; }, 3000);
        setTimeout(function () { $('#end-game').show();; }, 3000);

    })
    $("#5Right").on("click", function () {
        $("#fifth").hide();
        correctAnswers++;
        empty.show()
        empty.empty()
        empty.append(" <h2>Great Job!.</h2>");
        empty.append("<img src='assets/images/apex.gif'>");
        wins.html(correctAnswers);
        loss.html(incorrectAnswers);
        ties.html(unanswered);
        setTimeout(function () { empty.hide();; }, 3000);
        setTimeout(function () { $('#end-game').show();; }, 3000);
    })
    $("#start-over").on("click", function () {
        $("#end-game").hide();
        $("#game-start").show();


    })
});
// var timeLeft = 30;
//         elem = document.getElementById('timer'),
//         timerId = setInterval(countdown, 1000);
// function countdown() {
//     if (timeLeft == 0) {
//         clearTimeout(timerId);     
//     } else {
//         elem.innerHTML = timeLeft + ' seconds remaining';
//         timeLeft--;
//     }
// }


// var timer;

// function myTimer(sec) {
//     if (timer) clearInterval(timer);
//     timer = setInterval(function() { 
//         $('#timer').text(sec--);
//         if (sec == -1) {
//             clearInterval(timer);
//             alert('done');
//         } 
//     }, 1000);
// }

// $("#knap, #reset").click(function() {
//     myTimer(15);
// });






// function timeOut(x) {
//     if (x == 'second') {

//         //show question 2 after 5 seconds
//         setTimeout(function () { $('#empty-div').hide();; }, 3000);
//         setTimeout(function () { $('#second').show();; }, 3000);

//     }
//     if (x == 'third') {
//         $('#empty-div').hide()
//         //show question 2 after 5 seconds
//         setTimeout(function () { $('#third').show();; }, 3000);
//     }
//     if (x == 'forth') {
//         C.empty()
//         //show question 2 after 5 seconds
//         setTimeout(function () { $('#forth').show();; }, 3000);
//     }
// }
