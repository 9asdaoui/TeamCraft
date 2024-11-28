let players = [];


function displays(){
    let bar = document.getElementById("addPlayer")
    bar.setAttribute("style","display: block;")
 }
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

function deletePlayer(index) {
    players.splice(index, 1);
    affichage();
}

function affichage() {
    let rowForwards = document.getElementById("rowForwards");
    let rowMidfielders = document.getElementById("rowMidfielders");
    let rowDefenders = document.getElementById("rowDefenders");
    let rowGoalkeeper = document.getElementById("rowGoalkeeper");

    rowForwards.innerHTML = "";
    rowMidfielders.innerHTML = "";
    rowDefenders.innerHTML = "";

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


// const apiUrl = 'https://cors-anywhere.herokuapp.com/https://drop-api.ea.com/rating/fc-24?limit=9';
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
//   const contentDiv = document.getElementById('content');

//   players.forEach(player => {
//     let divCard = document.createElement("div");
//     divCard.classList.add("card");
//     divCard.setAttribute("id", `card${player.id}`);

//     divCard.innerHTML = `
//       <h3 class="player-name">${player.firstName}</h3>
//       <img src="${player.avatarUrl}" class="player-photo" alt="${player.name}">
//       <img src="${player.club}" class="club-logo" alt="Club">
//       <img src="${player.flag}" class="flag" alt="Flag">
//       <p class="position">${player.position}</p>
//       <h5 class="rating">Rating: ${player.rating}</h5>
//       <ul class="stats">
//         <li>Pace: ${player.pace}</li>
//         <li>Shooting: ${player.shooting}</li>
//         <li>Passing: ${player.passing}</li>
//         <li>Dribbling: ${player.dribbling}</li>
//         <li>Defending: ${player.defending}</li>
//         <li>Physical: ${player.physical}</li>
//       </ul>
//     `;

//     contentDiv.appendChild(divCard);
//   });
// }


