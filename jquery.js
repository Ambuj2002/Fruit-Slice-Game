var playing = false;
var score;
var chances;
var step;
var action;
var fruits=['banana','grapes','lemon','mango','orange'];
$(function(){
    $("#start").click(function(){
        if(playing==true){
            location.reload();
        }
        else{
            playing=true;
            score=0;
            $("#gameover").hide();
            $("#scorevalue").html(score);
            $("#trials").show();
            $("#start").html("Reset Game");
            chances=3;
            addHeart();
            startAction();
        }
    });
    $("#fruit1").mouseover(function(){
        score++;
        $("#scorevalue").html(score);
        $("#slicesound")[0].play();
        // stopAction();
        // startAction();
        clearInterval(action);
        $("#fruit1").hide("explode",500);
        setTimeout(startAction,550);
        // startAction();
        
    })

    function addHeart(){
        $("#trials").empty();
        for(i=1;i<=chances;i++){
            $("#trials").append('<img src="heart.jpg" class="lives" >');
        }
    }
    function startAction(){
        choosefruit();
        $("#fruit1").css({'left':Math.round(500*Math.random()),'top':-50});
        $("#fruit1").show();
        step = Math.round(5*Math.random())+1;
        action=setInterval(function(){
            $("#fruit1").css('top',$("#fruit1").position().top+step);
            if($("#fruit1").position().top > $("#basket").height()){
                if(chances>1){
                    chances--;
                    choosefruit();
                    $("#fruit1").css({'left':Math.round(500*Math.random()),'top':-50});
                    $("#fruit1").show();
                    step = Math.round(5*Math.random())+1;
                    addHeart();
                }
                else{
                    playing=false;
                    $("#start").html("Start Game");
                    $("#gameover").show();
                    $("#trials").hide();
                    $("#gameover").html('<p>Game Over!</p><p>Your Score is ' + score+ '.</p>');
                    stopAction();
                }
            }
        },10)
        
        
    }
    function choosefruit(){
        $("#fruit1").attr('src',fruits[Math.round(4*Math.random())]+'.png');  
    }
    function stopAction(){
        clearInterval(action);
        $("#fruit1").hide();
    }
});