player1_name=localStorage.getItem("Playe_1_name");
player2_name=localStorage.getItem("Playe_2_name");

player1_score=0;
player2_score=0;

document.getElementById("plr1name").innerHTML=player1_name+": ";
document.getElementById("plr2name").innerHTML=player2_name+": ";

document.getElementById("valuescore1").innerHTML=player1_score;
document.getElementById("valuescore2").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - " + player2_name;

function guess(){
    getword=document.getElementById("input_word").value;
    word=getword.toLowerCase();
    console.log("word in lower case=" + word);

    charAt1=word.charAt(1);
    console.log(charAt1);
     lengthdivide=Math.floor(word.length/2);
     charAt2=word.charAt(lengthdivide);
     console.log(charAt2);
     lengthminus1=word.length-1;
     charAt3=word.charAt(lengthminus1);
     console.log(charAt3);
     removecharAt1=word.replace(charAt1,"_");
     removecharAt2=removecharAt1.replace(charAt2, "_");
     removecharAt3=removecharAt2.replace(charAt3, "_");
     console.log(removecharAt3);
     question_word="<h4 id='word_display'>q."+removecharAt3 + "</h4>";
     input_box="<br> answer: <input type=text' id='guessbox'>";
     check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
     row=question_word + input_box + check_button;
     document.getElementById("output").innerHTML=row;
     document.getElementById("input_word").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){
    getwordtwo=document.getElementById("guessbox").value;
    answer=getwordtwo.toLowerCase();
    console.log("answer in lower case" + answer);
    if (answer == word){
        if (answer_turn == "player1"){
            player1_score=player1_score+1;
            document.getElementById("valuescore1").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("valuescore2").innerHTML=player2_score;
        }
    }
    if (question_turn == "player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="question_turn-" + player2_name;
    }
    else{
        question_turn="player1"
        document.getElementById("player_question").innerHTML="question_turn-" + player1_name;
    }
    if (answer_turn == "player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="answer turn-" + player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="answer turn-" + player1_name;
    }
    document.getElementById("output").innerHTML="";
}