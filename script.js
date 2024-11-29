let players = [];

//========this functions for diplaying the formes whet the button add or whet the card clicked==================================================
function displays(){
    let bar = document.getElementById("addPlayer")
    bar.setAttribute("style","display: block;")
}
function displaysgk(){
    let bar = document.getElementById("addGoalkeeper")
    bar.setAttribute("style","display: block;")
}
//========this function for adding the players info into array and called another fun to diplay them============================================
function addCart() {
    if (players.length >= 11) {
        alert("No more players can be added.");
        return;
    }

    let inputs = document.querySelectorAll("#playerForm input");

    for (let input of inputs) {
        if (!input.value.trim()) {
            alert("Please fill all the required fields.");
            return; 
        }
    }
    let player = {
        id: players.length, 
        image: document.getElementById("playerPhoto").value,
        name: document.getElementById("playerName").value,
        club: document.getElementById("clubLogo").value,
        position: document.getElementById("playerPosition").value,
        rating: document.getElementById("playerRating").value,
        flag: document.getElementById("flag").value,
        pace: document.getElementById("playerPace").value,
        shooting: document.getElementById("playerShooting").value,
        passing: document.getElementById("playerPassing").value,
        dribbling: document.getElementById("playerDribbling").value,
        defending: document.getElementById("playerDefending").value,
        physical: document.getElementById("playerPhysical").value,
    };

    players.push(player);
    document.getElementById("playerForm").reset();
    affichage();
    let bar = document.getElementById("addPlayer")
    bar.setAttribute("style","display: none;")
}
//========this function is the first part off edit function==========================================================================================
function edit_Add(index) {
    let bar = document.getElementById("addPlayer")
    bar.setAttribute("style","display: block;")
    let player = players[index];

    document.getElementById("playerPhoto").value = player.image;
    document.getElementById("playerName").value = player.name;
    document.getElementById("clubLogo").value = player.club;
    document.getElementById("playerPosition").value = player.position;
    document.getElementById("playerRating").value = player.rating;
    document.getElementById("flag").value = player.flag;
    document.getElementById("playerPace").value = player.pace;
    document.getElementById("playerShooting").value = player.shooting;
    document.getElementById("playerPassing").value = player.passing;
    document.getElementById("playerDribbling").value = player.dribbling;
    document.getElementById("playerDefending").value = player.defending;
    document.getElementById("playerPhysical").value = player.physical;

    let btn = document.getElementById("addbtn");
    btn.textContent = "Edit Player";
    btn.setAttribute("onclick", `edit(${index})`);
}
//========and this is the second one======================================================================================================================
function edit(index) {
    let player = players[index];

    player.image = document.getElementById("playerPhoto").value;
    player.name = document.getElementById("playerName").value;
    player.club = document.getElementById("clubLogo").value;
    player.position = document.getElementById("playerPosition").value;
    player.rating = document.getElementById("playerRating").value;
    player.flag = document.getElementById("flag").value;
    player.pace = document.getElementById("playerPace").value;
    player.shooting = document.getElementById("playerShooting").value;
    player.passing = document.getElementById("playerPassing").value;
    player.dribbling = document.getElementById("playerDribbling").value;
    player.defending = document.getElementById("playerDefending").value;
    player.physical = document.getElementById("playerPhysical").value;

    let btn = document.getElementById("addbtn");
    btn.textContent = "Add Player";
    btn.setAttribute("onclick", "addCart()");

    document.getElementById("playerForm").reset();
    affichage();
    let bar = document.getElementById("addPlayer")
    bar.setAttribute("style","display: none;")
}
//========this function for deleting existing cards=======================================================================================================
function deletePlayer(index) {
    players.splice(index, 1);
    affichage();
}
//========this the function responsabel off displaying the players array and create new cards===============================================================
function affichage() {
    let rowForwards = document.getElementById("rowForwards");
    let rowMidfielders = document.getElementById("rowMidfielders");
    let rowDefenders = document.getElementById("rowDefenders");

    rowForwards.innerHTML = "";
    rowMidfielders.innerHTML = "";
    rowDefenders.innerHTML = "";

    let goolKeaper = document.getElementById("position");

    if(goolKeaper.value === "GK"){
    for (let i = 0; i < players.length; i++){
        if(players[i].position === "GK" ) {

            let player = players[i]
            let rowGoalkeeper = document.getElementById("rowGoalkeeper");
            rowGoalkeeper.innerHTML = "";
            let divCard = document.createElement("div");

         divCard.classList.add("card");
         divCard.setAttribute("id",`card${player.id}`);

         divCard.innerHTML = `
            <button type="button" class="action-btn" id="deletbtn" onclick="deleteGK(${i})">X</button>
            <button type="button" class="action-btn" id="editbtn" onclick="editGK(${i})">✎</button>

                <h3 class="player-name">${player.name}</h3>
                <img src="${player.image}" class="player-photo" >
                <img src="${player.club}" class="club-logo">
                <img src="${player.flag}" class="flag">
                <p class="position">${player.position}</p>
                <h5 class="rating">Rating: ${player.rating}</h5>
                <ul class="stats">
                    <li>Handling: ${player.handling}</li>
                    <li>Kicking: ${player.kicking}</li>
                    <li>Reflexes: ${player.reflexes}</li>
                    <li>Speed: ${player.speed}</li>
                    <li>Positioning: ${player.positioning}</li>
                </ul>
        `;




        rowGoalkeeper.appendChild(divCard);
       }
    }

    }

    players.forEach((player, index) => {
        let divCard = document.createElement("div");
        divCard.classList.add("card");
        divCard.setAttribute("id", `card${player.id}`);


        divCard.innerHTML = `
            <button type="button" class="action-btn" id="deletbtn" onclick="deletePlayer(${index})">X</button>
            <button type="button" class="action-btn" id="editbtn" onclick="edit_Add(${index})">✎</button>

            <h3 class="player-name">${player.name}</h3>
            <img src="${player.image}" class="player-photo" alt="${player.name}">
            <img src="${player.club}" class="club-logo" alt="Club">
            <img src="${player.flag}" class="flag" alt="Flag">
            <p class="position">${player.position}</p>
            <h5 class="rating">Rating: ${player.rating}</h5>
            <ul class="stats">
                <li>Pace: ${player.pace}</li>
                <li>Shooting: ${player.shooting}</li>
                <li>Passing: ${player.passing}</li>
                <li>Dribbling: ${player.dribbling}</li>
                <li>Defending: ${player.defending}</li>
                <li>Physical: ${player.physical}</li>
            </ul>
        `;
    
        switch (player.position) {
            case "CB":
            case "LB":
            case "RB":
                rowDefenders.appendChild(divCard);
                break;
            case "CM":
            case "LW":
            case "RW":
                rowMidfielders.appendChild(divCard);
                break;
            case "ST":
                rowForwards.appendChild(divCard);
                break;


        }
    });

} 
//=================this function for adding a gool keeper ===================================================================================

function addgoolKeeper() {
   
    let inputs = document.querySelectorAll("#goalkeeperForm input");

    for (let input of inputs) {
        if (!input.value.trim()) {
            alert("Please fill all the required fields.");
            return; 
        }
    }

    let player = {
        id: players.length,
        image: document.getElementById("goalkeeperPhoto").value,
        name: document.getElementById("goalkeeperName").value,
        club: document.getElementById("clubLogo").value,
        position: document.getElementById("goalkeeperPosition").value,
        rating: document.getElementById("goalkeeperRating").value,
        flag: document.getElementById("flag").value,
        handling: document.getElementById("goalkeeperHan").value,
        kicking: document.getElementById("goalkeeperKic").value,
        reflexes: document.getElementById("goalkeeperRef").value,
        speed: document.getElementById("goalkeeperSpd").value,
        positioning: document.getElementById("goalkeeperPos").value,
    };
    
    

    players.push(player);
    document.getElementById("goalkeeperForm").reset();
    affichage();
    let bar = document.getElementById("addGoalkeeper");
    bar.setAttribute("style","display: none;");
}
//========this function for deleting existing gool keeper card================================================================================

function deleteGK(index){
    players.splice(index, 1);
    affichage();
    let rowGoalkeeper = document.getElementById("rowGoalkeeper");
    rowGoalkeeper.innerHTML = '<div onclick="displaysgk()" class="card" id="cardgb"> </div>';
}

//========this function for editing an existing gool keeper card==============================================================================

function editGK(index) {
    let form = document.getElementById("addGoalkeeper");
    form.setAttribute("style", "display: block;");
    let goalkeeper = players[index]; 

    document.getElementById("goalkeeperPhoto").value = goalkeeper.image;
    document.getElementById("goalkeeperName").value = goalkeeper.name;
    document.getElementById("clubLogo").value = goalkeeper.club;
    document.getElementById("goalkeeperPosition").value = goalkeeper.position;
    document.getElementById("goalkeeperRating").value = goalkeeper.rating;
    document.getElementById("flag").value = goalkeeper.flag;
    document.getElementById("goalkeeperHan").value = goalkeeper.handling;
    document.getElementById("goalkeeperKic").value = goalkeeper.kicking;
    document.getElementById("goalkeeperRef").value = goalkeeper.reflexes;
    document.getElementById("goalkeeperSpd").value = goalkeeper.speed;
    document.getElementById("goalkeeperPos").value = goalkeeper.positioning;
}

//================================================================================================================================================

// const apiUrl = '/updated_merge.json'
// let playersData = [];

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     playersData = data;
//     console.log(playersData)
//     displayPlayers(playersData); 
//   })
//   .catch(error => {
//     console.log(error);
//   });



// function displayPlayers(players) {


//     const contentDiv = document.getElementById('content');

// for (let i = 0; i < 9; i++){

//     let player = players[i]
//     let divCard = document.createElement("div");
//     divCard.classList.add("card");
//     divCard.setAttribute("id", `card${player.id}`);

//     divCard.innerHTML = `

//          <h3 class="player-name">${player}</h3>
//       <img src="${player}" class="player-photo" alt="${player
//       <img src="${player}" class="flag" alt="Flag">
//       <img src="${player}" class="club-logo" alt="Club">
//       <p class="position">${player}</p>
//       <h5 class="rating">Rating: ${player[3].table-passing}</h5> <!-- Example rating -->
//       <ul class="stats">
//         <li>Pace: ${player['table-pace']}</li>
//         <li>Shooting: ${player[3]['table-shooting']}</li>
//         <li>Passing: ${player[3]['table-passing']}</li>
//         <li>Dribbling: ${player[3]['table-dribbling']}</li>
//         <li>Defending: ${player[3]['table-defending']}</li>
//         <li>Physical: ${player[3]['table-physicality']}</li>
//       </ul>
//         `;

//     contentDiv.appendChild(divCard);
// }
// }

