const img = document.querySelectorAll('img')

fetch('https://api-football-standings.azharimm.site/leagues')
  .then(res => {
    if (res.ok) {
      res.json().then(response => {
        for (let i = 0; i <= response.data.length - 1; i++) {
          console.log(response.data[i].logos.light)
          img[i].src = response.data[i].logos.dark
          img[3].src = response.data[3].logos.light
        }
      })
    } else {
      console.log("ERREUR");
    }
  })
