function addUser(){
    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value;
    number_end=document.getElementById("musk").value;
    localStorage.setItem("winner","none");

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    localStorage.setItem("value_to_end",number_end);
    window.location.replace("Game.html");
}
function win(){
    winner=localStorage.getItem("winner");
    document.getElementById("bin").innerHTML= "Winner="+ winner
}