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


var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "76e77c5ebc99ab3db8216510b4a095b1");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://v3.football.api-sports.io/standings?league=39&season=2021", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result.response[0].league.standings[0][0].team.name))
  .catch(error => console.log('error', error));


const tBody = document.querySelector("tbody")
const tr = tBody.querySelector("tr")
const td = tr.querySelectorAll("td")
let league = 39;



const displayClassementPl = () => {
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
pL.addEventListener("click", (event) => {
  displayClassementPl();
});
