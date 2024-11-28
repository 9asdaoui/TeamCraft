

let addBtn = document.getElementById("addbtn");
let canBtn = document.getElementById("cancel");

let players = [];
let player = {};

let localPlayers = JSON.parse(localStorage.getItem("players"));
console.log(localPlayers);
// localStorage.removeItem("players");
if(localPlayers){players = localPlayers;}


canBtn.addEventListener("click", function() {

    let addPlayer = document.getElementById("addPlayer");
addPlayer.setAttribute("style","display: none;");

let body = document.getElementById("body");
body.setAttribute("style","background-color: #f5f5f5");

let field = document.getElementById("field");
field.setAttribute("style","background-color: #2e8b57");

});

addBtn.addEventListener("click", function () {


    let i = JSON.parse(localStorage.getItem("correntCard"));

    let player = {
        id: i,
        imag:document.getElementById("playerPhoto").value,
        name:document.getElementById("playerName").value,
        club:document.getElementById("clubLogo").value,
        position:document.getElementById("playerPosition").value,
        rating:document.getElementById("playerRating").value,
        flag:document.getElementById("flag").value,
        pace:document.getElementById("playerPace").value,
        shooting:document.getElementById("playerShooting").value,
        passing:document.getElementById("playerPassing").value,
        dribbling:document.getElementById("playerDribbling").value,
        defending:document.getElementById("playerDefending").value,
        physical:document.getElementById("playerPhysical").value,
       
    };
console.log(player)
    players.push(player);
    localStorage.setItem("players", JSON.stringify(players));

    document.getElementById("playerForm").reset();
    affichage()
      
});



function edit_Add (i){

    let savedPlayers = JSON.parse(localStorage.getItem("players"));
    let player = savedPlayers[i];

    document.getElementById("playerPhoto").value = player?.imag ?? "";
    document.getElementById("playerName").value = player?.name ?? "";
    document.getElementById("clubLogo").value = player?.club ?? "";
    document.getElementById("playerPosition").value = player?.position ?? "";
    document.getElementById("playerRating").value = player?.rating ?? "";
    document.getElementById("flag").value = player?.flag ?? "";
    document.getElementById("playerPace").value = player?.pace ?? "";
    document.getElementById("playerShooting").value = player?.shooting ?? "";
    document.getElementById("playerPassing").value = player?.passing ?? "";
    document.getElementById("playerDribbling").value = player?.dribbling ?? "";
    document.getElementById("playerDefending").value = player?.defending ?? "";
    document.getElementById("playerPhysical").value = player?.physical ?? "";


let correntCard = i;
localStorage.setItem("correntCard", JSON.stringify(correntCard));


let addPlayer = document.getElementById("addPlayer");
addPlayer.setAttribute("style","display: block;");
}

function delet(){

}

affichage()
function affichage() {
    let savedPlayers = JSON.parse(localStorage.getItem("players"));

    if (!savedPlayers || savedPlayers.length === 0) {
        console.error("No players found in localStorage.");
        return;
    }

    for (let i = 0; i < 9 ; i++) {
        let player = savedPlayers[i];
        let j = player.id;
        let divCard = document.getElementById(`card${j}`);

        if (!divCard) {
            console.warn(`Card with id "card${j}" not found.`);
        }

        divCard.innerHTML = "";

        let playerName = document.createElement("h3");
        playerName.setAttribute("id","playerNamecard")
        playerName.className = "player-name";
        playerName.textContent = player ? player.name : ""; 
        divCard.appendChild(playerName);

        let img = document.createElement("img");
        img.setAttribute("id","playerPhotocard")
        img.src = player?.imag ?? "images/default-photo.png"; 
        img.className = "player-photo";
        divCard.appendChild(img);


        if(player?.club){
        let clubLogo = document.createElement("img");
        clubLogo.setAttribute("id","clubLogocard")
        clubLogo.src = player?.club ?? "";
        clubLogo.className = "club-logo";
        divCard.appendChild(clubLogo);}


        if(player?.flag){
        let flag = document.createElement("img");
        flag.setAttribute("id","flagcard")
        flag.src = player?.flag ?? "";
        flag.className = "flag";
        divCard.appendChild(flag);}

        if(player?.flag){
        let position = document.createElement("p");
        position.setAttribute("id","playerPositioncard")
        position.textContent = `${player?.position ?? ""}`;
        divCard.appendChild(position);}

        let rating = document.createElement("h5");      
        rating.setAttribute("id","playerRatingcard")
        rating.textContent = player ? `RATING: ${player.rating } ` : "";
        divCard.appendChild(rating);

       
if(player?.pace){
        let stats = document.createElement("ul");
        let statsData = [
            { stat: "PAC", value: player?.pace ?? ""},
            { stat: "PAS", value: player?.passing ?? ""},
            { stat: "SHO", value: player?.shooting ?? ""},
            { stat: "PHY", value: player?.physical ?? ""},
            { stat: "DRI", value: player?.dribbling ?? ""},
            { stat: "DEF", value: player?.defending ?? ""},
        ];

        statsData.forEach(item => {
            let li = document.createElement("li");
            li.setAttribute("id",`${item.stat}`)
            li.innerHTML = `<strong>${item.stat}:</strong> ${item.value}`;
            stats.appendChild(li);
        });
    
        divCard.appendChild(stats);}
    }
}

