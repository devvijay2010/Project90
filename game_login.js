function adduser()
{
    var name1 = document.getElementById("player1_name").value;
    var name2 = document.getElementById("player2_name").value;

    localStorage.setItem("player1_name", name1)
    localStorage.setItem("player2_name", name2)

    window.location = "index.html";
}