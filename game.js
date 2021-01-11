$(document).ready(function () {


    var runningInter = setInterval(generateRegular, 600);

    var highest = localStorage.getItem("highScore");

    if(highest == undefined){

        localStorage.setItem("highScore", 0);

    }
    // Setting high score for the first time
    highest = localStorage.getItem("highScore");
    $(".high").text('Highest Score : ' + highest)
    



    let last;

    function generateRegular() {

        if (last != undefined) {

            $('#img-id').remove();

        }


        let randomNumber = Math.floor(Math.random() * 9);
        console.log(randomNumber);
        var boxes = $('.box-round');
        $('<img/>', {
            id: 'img-id',
            alt: 'This is a mouse',
            src: "rat.png",
        }).appendTo(boxes[randomNumber]);



        // Box animation
        $(boxes[randomNumber]).animate({
            top: "30px"
        }, 300)
        $(boxes[randomNumber]).animate({
            top: "5px"
        }, 300)

        //Adding function for image clicked 
        $('#img-id').click(imageCliked)


        //Image animation
        $('#img-id').animate({
            bottom: "100px"
        }, 400);

        $('#img-id').animate({
            bottom: "10px"

        }, 400);

        last = randomNumber;

    }
    var score = $('#score').text()
   

    function imageCliked() {
        console.log("image clicked")
       
       
        score = Number(score) + 10;

        $('#score').text(score);

        if(score > highest){

            $(".high").text('Highest Score : ' + score)
        }



    }


    // clearing all intervals
    var timeinterval = setInterval(timeCounter, 1000);

    var time = $("#timer").text();


    function timeCounter(){
        if(time == 1){

            clearInterval(timeinterval);
            clearInterval(runningInter)
            $('img').remove()

            $('#menu-btn').click(function(){

                window.location.href = "index.html";
            });

            if(score >= 100){
                $('#luck-msg').text("Brilliant Score!")
            }
            else if(score >= 50){
                $('#luck-msg').text("Good Score!")
            }
            else{
                $('#luck-msg').text("Better Luck Next time!")
            }

            $('#menu').css({"display": "initial" });

            if(score > highest){

                localStorage.setItem("highScore", score);

            }

      
            
        }
           
        time--;
        $("#timer").text(time);
    
    }
  
  /*
    function setCookie(score){

        var highScore = document.cookie.split('=')[1];

        if(highScore == undefined){

            highScore = 0;
        }

        if(score > highScore){
            console.log("Score>high")

            document.cookie = "highScore = "+score;
        }
        console.log("cookis", document.cookie);

        
    }
    */


  

})