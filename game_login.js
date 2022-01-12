function addUser(){
    player1name=document.getElementById("player1name").value;
    player2name=document.getElementById("player2name").value;
    localStorage.setItem("Playe_1_name", player1name);
    localStorage.setItem("Playe_2_name", player2name);
    window.location="game_page.html"
}