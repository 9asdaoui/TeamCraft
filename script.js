let localPlayers = JSON.parse(localStorage.getItem("players"));
let players = localPlayers ||  [];

affichage();
searchfunction()


//========this functions for diplaying the formes ==============================================================================================
function displays(){
    let bar = document.getElementById("addPlayer");
    bar.setAttribute("style","display: block;");

    let content = document.getElementById("content");
    content.setAttribute("style","display: none;");

    let barr = document.getElementById("addGoalkeeper");
    barr.setAttribute("style","display: none;");

}
function displayscontent(){
    let barr = document.getElementById("addGoalkeeper");
    barr.setAttribute("style","display: none;");

    let bar = document.getElementById("addPlayer");
    bar.setAttribute("style","display: none;");

    let content = document.getElementById("content");
    content.setAttribute("style","display: grid;");
} 
function displaysgk(){
    let barr = document.getElementById("addGoalkeeper");
    barr.setAttribute("style","display: block;");

    let bar = document.getElementById("addPlayer");
    bar.setAttribute("style","display: none;");

    let content = document.getElementById("content");
    content.setAttribute("style","display: none;");
}
//========this function for adding the players info into array and called another fun to diplay them============================================
function addCart() {
    if (players.length >= 29) {
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
    localStorage.setItem("players", JSON.stringify(players));    
    document.getElementById("playerForm").reset();
    affichage();
    let bar = document.getElementById("addPlayer")
    bar.setAttribute("style","display: none;")
}
//========this function is the first part off edit function=====================================================================================
function edit_Add(index) {


    let content = document.getElementById("content");
    content.setAttribute("style","display: none;");
    let barr = document.getElementById("addGoalkeeper");
    barr.setAttribute("style","display: none;");

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
//========and this is the second one============================================================================================================
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
    localStorage.setItem("players", JSON.stringify(players));
    affichage();
    let bar = document.getElementById("addPlayer")
    bar.setAttribute("style","display: none;")
}
//========this function for deleting existing cards=============================================================================================
function deletePlayer(index) {
    players.splice(index, 1);
    localStorage.setItem("players", JSON.stringify(players));
    affichage();
}
//========this the function responsabel off displaying the players array and create new cards===================================================
function affichage() {

    let rowForwards = document.getElementById("rowForwards");
    let rowMidfielders = document.getElementById("rowMidfielders");
    let rowDefenders = document.getElementById("rowDefenders");
    let repDiv = document.getElementById("repContent");


    repDiv.innerHTML=""
    rowForwards.innerHTML = "";
    rowMidfielders.innerHTML = "";
    rowDefenders.innerHTML = "";

    let defendersCount = 0;
    let midfieldersCount = 0;
    let forwardsCount = 0;

    let goolKeaper = document.getElementById("position");

    if(goolKeaper.value === "GK"){
    for (let i = 0; i < players.length; i++){
        if(players[i].position === "GK" ) {

            let player = players[i]
            let rowGoalkeeper = document.getElementById("rowGoalkeeper");
            rowGoalkeeper.innerHTML = "";
        

        let divCard = document.createElement('div');
        divCard.classList.add('card');
        divCard.setAttribute("id",`card${player.id}`);


        let deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.classList.add('action-btn');
        deleteBtn.id = 'deletbtn';
        deleteBtn.textContent = 'X';
        deleteBtn.setAttribute('onclick', `deleteGK(${i})`);
         
        let editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.classList.add('action-btn');
        editBtn.id = 'editbtn';
        editBtn.textContent = '✎';
        editBtn.setAttribute('onclick', `editGK(${i})`);
         
        divCard.appendChild(deleteBtn);
        divCard.appendChild(editBtn);
        
        let playerName = document.createElement('h3');
        playerName.classList.add('player-name');
        playerName.textContent = player.name;
        
        let playerPhoto = document.createElement('img');
        playerPhoto.src = player.image;
        playerPhoto.classList.add('player-photo');
        
        let clubLogo = document.createElement('img');
        clubLogo.src = player.club;
        clubLogo.classList.add('club-logo');
        
        let playerFlag = document.createElement('img');
        playerFlag.src = player.flag;
        playerFlag.classList.add('flag');
        
        let position = document.createElement('p');
        position.classList.add('position');
        position.textContent = player.position;
        
        let rating = document.createElement('h5');
        rating.classList.add('rating');
        rating.textContent = `Rating: ${player.rating}`;
        
        let statsList = document.createElement('ul');
        statsList.classList.add('stats');
        
        let handling = document.createElement('li');
        handling.textContent = `Handling: ${player.handling}`;
        statsList.appendChild(handling);
        
        let kicking = document.createElement('li');
        kicking.textContent = `Kicking: ${player.kicking}`;
        statsList.appendChild(kicking);
        
        let reflexes = document.createElement('li');
        reflexes.textContent = `Reflexes: ${player.reflexes}`;
        statsList.appendChild(reflexes);
        
        let speed = document.createElement('li');
        speed.textContent = `Speed: ${player.speed}`;
        statsList.appendChild(speed);
        
        let positioning = document.createElement('li');
        positioning.textContent = `Positioning: ${player.positioning}`;
        statsList.appendChild(positioning);
        
        divCard.appendChild(playerName);
        divCard.appendChild(playerPhoto);
        divCard.appendChild(clubLogo);
        divCard.appendChild(playerFlag);
        divCard.appendChild(position);
        divCard.appendChild(rating);
        divCard.appendChild(statsList);

        rowGoalkeeper.appendChild(divCard);
       }
    }

    }

    players.forEach((player, index) => {
        let divCard = document.createElement("div");
        divCard.classList.add("card");
        divCard.setAttribute("id", `card${player.id}`);


        let deleteBtn = document.createElement('button');
        deleteBtn.type = 'button';
        deleteBtn.classList.add('action-btn');
        deleteBtn.id = 'deletbtn';
        deleteBtn.textContent = 'X';
        deleteBtn.onclick = () => deletePlayer(index);

        let editBtn = document.createElement('button');
        editBtn.type = 'button';
        editBtn.classList.add('action-btn');
        editBtn.id = 'editbtn';
        editBtn.textContent = '✎';
        editBtn.onclick = () => edit_Add(index);

        let playerName = document.createElement('h3');
        playerName.classList.add('player-name');
        playerName.textContent = player.name;

        let playerPhoto = document.createElement('img');
        playerPhoto.classList.add('player-photo');
        playerPhoto.src = player.image;
        playerPhoto.alt = player.name;

        let clubLogo = document.createElement('img');
        clubLogo.classList.add('club-logo');
        clubLogo.src = player.club;
        clubLogo.alt = 'Club';

        let flagImg = document.createElement('img');
        flagImg.classList.add('flag');
        flagImg.src = player.flag;
        flagImg.alt = 'Flag';

        let positionP = document.createElement('p');
        positionP.classList.add('position');
        positionP.textContent = player.position;

        let ratingH5 = document.createElement('h5');
        ratingH5.classList.add('rating');
        ratingH5.textContent = `Rating: ${player.rating}`;

        let statsUl = document.createElement('ul');
        statsUl.classList.add('stats');

        let stats = [
            { label: 'Pace', value: player.pace },
            { label: 'Shooting', value: player.shooting },
            { label: 'Passing', value: player.passing },
            { label: 'Dribbling', value: player.dribbling },
            { label: 'Defending', value: player.defending },
            { label: 'Physical', value: player.physical }
        ];

        stats.forEach(stat => {
            let li = document.createElement('li');
            li.textContent = `${stat.label}: ${stat.value}`;
            statsUl.appendChild(li);
        });

        divCard.appendChild(deleteBtn);
        divCard.appendChild(editBtn);
        divCard.appendChild(playerName);
        divCard.appendChild(playerPhoto);
        divCard.appendChild(clubLogo);
        divCard.appendChild(flagImg);
        divCard.appendChild(positionP);
        divCard.appendChild(ratingH5);
        divCard.appendChild(statsUl);

        let array = JSON.parse(localStorage.getItem("formationArray"));
       
        switch (player.position) {
            case "CB":
            case "LB":
            case "RB":
                if (defendersCount < array[0]) {
                    rowDefenders.appendChild(divCard);
                    defendersCount++;
                }else{repDiv.appendChild(divCard)}
                break;

            case "CM":
            case "LW":
            case "RW":
                if (midfieldersCount < array[1]) {
                    rowMidfielders.appendChild(divCard);
                    midfieldersCount++;
                }else{repDiv.appendChild(divCard)}
                break;

            case "ST":
                if (forwardsCount < array[2]) {
                    rowForwards.appendChild(divCard);
                    forwardsCount++;
                }else{repDiv.appendChild(divCard)}
                break;
        }
    });

} 
//=================this function for adding a gool keeper ======================================================================================
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
    localStorage.setItem("players", JSON.stringify(players));
    affichage();
    let bar = document.getElementById("addGoalkeeper");
    bar.setAttribute("style","display: none;");
}
//========this function for deleting existing gool keeper card==================================================================================
function deleteGK(index){
    players.splice(index, 1);
    localStorage.setItem("players", JSON.stringify(players));
    affichage();
    let rowGoalkeeper = document.getElementById("rowGoalkeeper");
    rowGoalkeeper.innerHTML = '<div onclick="displaysgk()" class="card" id="cardgb"> </div>';
}
//========this function for editing an existing gool keeper card================================================================================
function editGK(index) {
    let content = document.getElementById("content");
    content.setAttribute("style","display: none;");
    let barr = document.getElementById("addGoalkeeper");
    barr.setAttribute("style","display: none;");
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
//==============================================================================================================================================
function displayPlayers(playersData) {


  const contentDiv = document.getElementById('content');
  let div = document.createElement("div");

  for (let i = 0; i < 9; i++) {
    let player = playersData[i];
  
  
    let divCard = document.createElement("div");
    divCard.classList.add("card");
    divCard.setAttribute("id", `card-${i}`);
    divCard.setAttribute("onclick", `addEXCart(${i})`);

  
    let playerName = document.createElement('h3');
    playerName.classList.add('player-name');
    playerName.setAttribute("id", `player-name-${i}`);
    playerName.textContent = player.name;

    let playerPhotoImg = document.createElement('img');
    playerPhotoImg.classList.add('player-photo');
    playerPhotoImg.setAttribute("id", `player-photo-${i}`);
    playerPhotoImg.src = player.photo;

    let flagImg = document.createElement('img');
    flagImg.classList.add('flag');
    flagImg.setAttribute("id", `flag-${i}`);
    flagImg.src = player.flag;

    let clubLogoImg = document.createElement('img');
    clubLogoImg.classList.add('club-logo');
    clubLogoImg.setAttribute("id", `club-logo-${i}`);
    clubLogoImg.src = player.logo;

    let positionP = document.createElement('p');
    positionP.classList.add('position');
    positionP.setAttribute("id", `position-${i}`);
    positionP.textContent = player.position;

    let ratingH5 = document.createElement('h5');
    ratingH5.classList.add('rating');
    ratingH5.setAttribute("id", `rating-${i}`);
    ratingH5.textContent = `Rating: ${player.rating}`;
    
    let statsUl = document.createElement('ul');
    statsUl.classList.add('stats');
    statsUl.setAttribute("id", `stats-${i}`);


    let statsList = [
        { label: 'Pace', value: player.pace || 'N/A' },
        { label: 'Shooting', value: player.shooting || 'N/A' },
        { label: 'Passing', value: player.passing || 'N/A' },
        { label: 'Dribbling', value: player.dribbling || 'N/A' },
        { label: 'Defending', value: player.defending || 'N/A' },
        { label: 'Physical', value: player.physical || 'N/A' },
    ];

    statsList.forEach(stat => {
        let li = document.createElement('li');
        li.textContent = `${stat.value}`;
        li.setAttribute("id", `stat-${i}-${stat.label.toLowerCase()}`);
        statsUl.appendChild(li);
    });

    divCard.appendChild(playerName);
    divCard.appendChild(ratingH5);
    divCard.appendChild(playerPhotoImg);
    divCard.appendChild(flagImg);
    divCard.appendChild(clubLogoImg);
    divCard.appendChild(positionP);
    divCard.appendChild(statsUl);

    contentDiv.appendChild(divCard);

  };
}
// =============================================================================================================================================

function addEXCart(i) {
    let card = document.getElementById(`card-${i}`);

    let player = {

        id: players.length,
        image: document.getElementById(`player-photo-${i}`).src, 
        name: document.getElementById(`player-name-${i}`).textContent, 
        club: document.getElementById(`club-logo-${i}`).src,
        position: document.getElementById(`position-${i}`).textContent, 
        rating: document.getElementById(`rating-${i}`).textContent,
        flag: document.getElementById(`flag-${i}`).src,
        pace: document.getElementById(`stat-${i}-pace`).textContent,
        shooting: document.getElementById(`stat-${i}-shooting`).textContent,
        passing: document.getElementById(`stat-${i}-passing`).textContent,
        dribbling: document.getElementById(`stat-${i}-dribbling`).textContent,
        defending: document.getElementById(`stat-${i}-defending`).textContent,
        physical: document.getElementById(`stat-${i}-physical`).textContent,

    };

    players.push(player);

    localStorage.setItem("players", JSON.stringify(players));

    affichage();
}
// ==========search functionn===================================================================================================================
function searchfunction() {
    const apiUrl = './updated_merge.json'; 
    let playersData = [];

    let searchInpute = document.getElementById("searchInput").value.trim().toLowerCase(); 
    let content = document.getElementById("content");
    content.innerHTML = "";  

    if (searchInpute === "") { 
        fetch(apiUrl)
            .then(response => {
                return response.json();
            })
            .then(data => {
                displayPlayers(data.players); 
            })
            .catch(error => {
                console.error(error);
            });
        return;
    }

    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let allPlayersData = data.players; 

            playersData = allPlayersData.filter(player => 
                player.name.toLowerCase().includes(searchInpute)
            );

            if (playersData.length === 0) {
                content.innerHTML = "<p>No players found</p>";
            } else {
                displayPlayers(playersData);
            }
        })
        .catch(error => {
            console.error(error);
        });
}
// =============================================================================================================================================
function formation() {


    let formation = document.getElementById("formationSelect").value;

    let formationArray = formation.split("-").map(Number);
   
    localStorage.setItem("formationArray", JSON.stringify(formationArray));

    let array = JSON.parse(localStorage.getItem("formationArray"));
    console.log(array);

    affichage()
    
}

// ================================================================================================================================================================================================