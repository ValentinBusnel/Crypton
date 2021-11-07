const imgs = document.querySelectorAll('img')
const idLeagues = [39, 299, 61, 78, 135, 140, 2];

TweenMax.from(".highlights-title", 2, {
  delay: 1.5,
  opacity: 0,
  x: 350,
  ease: Expo.easeInOut,
})

TweenMax.from(".highlights", 2, {
  delay: 0,
  opacity: 0,
  y: -1050,
  ease: Expo.easeInOut,
})

TweenMax.from(".feed", 1, {
  delay: 1,
  opacity: 0,
  y: -1050,
  ease: Expo.easeInOut,
})

TweenMax.from(".crypton-title", 2, {
  delay: 1.5,
  opacity: 0,
  y: -350,
  ease: Expo.easeInOut,
})

TweenMax.from(".classement-test", 2, {
  delay: 2,
  opacity: 0,
  z: -500,
  ease: Expo.easeInOut,
})

TweenMax.from(".launchpad", 2, {
  delay: 0,
  opacity: 0,
  y: -1050,
  ease: Expo.easeInOut,
})

TweenMax.from(".score-title", 2, {
  delay: 1.5,
  opacity: 0,
  x: -350,
  ease: Expo.easeInOut,
})

TweenMax.from("._scorebatEmbeddedPlayer_", 1, {
  delay: 2,
  opacity: 0,
  y: 350,
  ease: Expo.easeInOut,
})

const myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "76e77c5ebc99ab3db8216510b4a095b1");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

idLeagues.forEach((id) => {
  imgs[0].src = `https://media.api-sports.io/football/leagues/2.png`;
  imgs[1].src = `https://media.api-sports.io/football/leagues/3.png`;
  imgs[2].src = `https://media.api-sports.io/football/leagues/848.png`;
  imgs[3].src = `https://media.api-sports.io/football/leagues/39.png`;
  imgs[4].src = `https://media.api-sports.io/football/leagues/61.png`;
  imgs[5].src = `https://media.api-sports.io/football/leagues/78.png`;
  imgs[6].src = `https://media.api-sports.io/football/leagues/135.png`;
  imgs[7].src = `https://media.api-sports.io/football/leagues/140.png`;
  imgs[8].src = `https://media.api-sports.io/football/leagues/299.png`;
})

const displayHeader = () => {
    const newTr = document.createElement("tr");
    newTr.innerHTML =
                   `<td>RANK</td>
                    <td></td>
                    <td class="team-header">TEAM</td>
                    <td>MJ</td>
                    <td>W</td>
                    <td>D</td>
                    <td>L</td>
                    <td>GF</td>
                    <td>GA</td>
                    <td>GD</td>
                    <td>PTS</td>`;
    document.querySelector("tbody").appendChild(newTr).classList.add("test");
};

const displayChampionnat = (league) => {
  displayHeader();
  league.forEach(element => {
    const newTr = document.createElement("tr");
    newTr.innerHTML =
                      `<td>${element.rank}</td>
                      <td><img style="height: 30px;" src="${element.team.logo}" alt=""></td>
                      <td class="team">${element.team.name}</td>
                      <td>${element.all.played}</td>
                      <td>${element.all.win}</td>
                      <td>${element.all.draw}</td>
                      <td>${element.all.lose}</td>
                      <td>${element.all.goals.for}</td>
                      <td>${element.all.goals.against}</td>
                      <td>${element.goalsDiff}</td>
                      <td>${element.points}</td>`;
    document.querySelector("tbody").appendChild(newTr);
  });
};



const fetchApiFootball = (league) => {
  fetch(`https://v3.football.api-sports.io/standings?league=${league}&season=2021`, requestOptions)
    .then(res => res.json())
    .then(result => {
      const cup = result.response[0].league.standings;
      const league = result.response[0].league.standings[0];
      if (cup.length === 8) {
        cup.forEach((groups) => {
          displayChampionnat(groups);
        });
      } else {
        displayChampionnat(league);
      }
    })
};

fetchApiFootball(61)

const pL = document.querySelector(".premiere-league")
const primeraDivision = document.querySelector(".primera-division")
const ligue1 = document.querySelector(".ligue-1")
const bundesliga = document.querySelector(".bundesliga")
const serieA = document.querySelector(".serie-A")
const laLiga = document.querySelector(".la-Liga")
const ldc = document.querySelector(".ldc")
const europa = document.querySelector(".europa")
const conference = document.querySelector(".conference")

pL.addEventListener("click", (event) => {
  document.querySelector("tbody").innerHTML = "";
  document.querySelector("thead").classList.remove("d-none");
  TweenMax.from("tbody", 1, {
    delay: 0.2,
    opacity: 0,
    z: 0,
    ease: Expo.easeInOut,
  })
  fetchApiFootball(39); //39 PL |
});

primeraDivision.addEventListener("click", (event) => {
  console.log(event);
  document.querySelector("tbody").innerHTML = "";
  document.querySelector("thead").classList.remove("d-none");
  TweenMax.from("tbody", 1, {
    delay: 0.2,
    opacity: 0,
    z: 0,
    ease: Expo.easeInOut,
  })
  fetchApiFootball(299); //39 PL |
});

ligue1.addEventListener("click", (event) => {
  document.querySelector("tbody").innerHTML = "";
  document.querySelector("thead").classList.remove("d-none");
  TweenMax.from("tbody", 1, {
    delay: 0.2,
    opacity: 0,
    z: 0,
    ease: Expo.easeInOut,
  })
  fetchApiFootball(61); //39 PL |
});

bundesliga.addEventListener("click", (event) => {
  document.querySelector("tbody").innerHTML = "";
  document.querySelector("thead").classList.remove("d-none");
  TweenMax.from("tbody", 1, {
    delay: 0.2,
    opacity: 0,
    z: -150,
    ease: Expo.easeInOut,
  })
  fetchApiFootball(78); //39 PL |
});

serieA.addEventListener("click", (event) => {
  document.querySelector("tbody").innerHTML = "";
  document.querySelector("thead").classList.remove("d-none");
  TweenMax.from("tbody", 1, {
    delay: 0.2,
    opacity: 0,
    z: -150,
    ease: Expo.easeInOut,
  })
  fetchApiFootball(135); //39 PL |
});

laLiga.addEventListener("click", (event) => {
  document.querySelector("tbody").innerHTML = "";
  document.querySelector("thead").classList.remove("d-none");
  TweenMax.from("tbody", 1, {
    delay: 0.2,
    opacity: 0,
    z: -150,
    ease: Expo.easeInOut,
  })
  fetchApiFootball(140); //39 PL |
});

ldc.addEventListener("click", (event) => {
  document.querySelector("tbody").innerHTML = "";
  document.querySelector("thead").classList.remove("d-none");
  TweenMax.from("tbody", 1, {
    delay: 0.2,
    opacity: 0,
    z: -150,
    ease: Expo.easeInOut,
  })
  fetchApiFootball(2); //39 PL |
});

europa.addEventListener("click", (event) => {
  document.querySelector("tbody").innerHTML = "";
  document.querySelector("thead").classList.remove("d-none");
  TweenMax.from("tbody", 1, {
    delay: 0.2,
    opacity: 0,
    z: -150,
    ease: Expo.easeInOut,
  })
  fetchApiFootball(3); //39 PL |
});

conference.addEventListener("click", (event) => {
  document.querySelector("tbody").innerHTML = "";
  document.querySelector("thead").classList.remove("d-none");
  TweenMax.from("tbody", 1, {
    delay: 0.2,
    opacity: 0,
    z: -150,
    ease: Expo.easeInOut,
  })
  fetchApiFootball(848); //39 PL |
});
