const img = document.querySelectorAll('img')

fetch('https://api-football-standings.azharimm.site/leagues')
  .then(res => {
    if (res.ok) {
      res.json().then(response => {
        for (let i = 0; i <= response.data.length - 1; i++) {
          img[i].src = response.data[i].logos.dark
          img[3].src = response.data[3].logos.light
        }
      })
    } else {
      console.log("ERREUR");
    }
  })

const myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "76e77c5ebc99ab3db8216510b4a095b1");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://v3.football.api-sports.io/standings?league=37&season=2021`, requestOptions)
  .then (response => response.json())
  .then((data) => {
    console.log(data);
  });

const displayClassementPl = (league) => {
  fetch(`https://v3.football.api-sports.io/standings?league=${league}&season=2021`, requestOptions)
    .then(res => {
      if (res.ok) {
        res.json().then(result => {
          console.log(result)
          const PremierLeague = result.response[0].league.standings[0];
          PremierLeague.forEach(element => {
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
        })
      } else {
        console.log("ERREUR");
      }
    })
};


const pL = document.querySelector(".premiere-league")
const ligue1 = document.querySelector(".ligue-1")
const bundesliga = document.querySelector(".bundesliga")
const serieA = document.querySelector(".serie-A")
const laLiga = document.querySelector(".la-Liga")

pL.addEventListener("click", (event) => {
  document.querySelector("tbody").innerHTML = "";
  document.querySelector("thead").classList.remove("d-none");
  displayClassementPl(39); //39 PL |
});

ligue1.addEventListener("click", (event) => {
  document.querySelector("tbody").innerHTML = "";
  document.querySelector("thead").classList.remove("d-none");
  displayClassementPl(61); //39 PL |
});

bundesliga.addEventListener("click", (event) => {
  document.querySelector("tbody").innerHTML = "";
  document.querySelector("thead").classList.remove("d-none");
  displayClassementPl(78); //39 PL |
});

serieA.addEventListener("click", (event) => {
  document.querySelector("tbody").innerHTML = "";
  document.querySelector("thead").classList.remove("d-none");
  displayClassementPl(135); //39 PL |
});

laLiga.addEventListener("click", (event) => {
  document.querySelector("tbody").innerHTML = "";
  document.querySelector("thead").classList.remove("d-none");
  displayClassementPl(140); //39 PL |
});
