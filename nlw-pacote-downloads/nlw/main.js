function creategame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon=${player1}.svg" alt="bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon=${player2}.svg" alt="bandeira do ${player2}">
      <img src="" alt="">
   </li>
  
 `
}
let delay = -0.4; 
function createcard(date, day, games) {
  delay = delay + 0.4; 
  return `
  <div  class="card" sttyle="animation-delay:${delay}s">
    <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
  </div>    
  `
}

document.querySelector("#cards").innerHTML =
  createcard("20/11", "Domingo", creategame("qatar", "13:00", "ecuador")) +
  createcard(
    "21/11",
    "Segunda-Feira",
    creategame("england", "10:00", "iran") +
      creategame("senegal", "13:00", "netherlands") +
      creategame("united states", "16:00", "wales")
  ) +
  createcard(
    "22/11",
    "Terça-Feira",
    creategame("argentina", "07:00", "saudi arabia") +
      creategame("denmark", "10:00", "tunisia") +
      creategame("mexico", "13:00", "poland") +
      creategame("france", "13:00", "australia")
  ) +
  createcard(
    "23/11",
    "Quarta-Feira",
    creategame("morocco", "07:00", "croatia") +
      creategame("germany", "10:00", "japan") +
      creategame("spain", "13:00", "costa rica") +
      creategame("belgium", "16:00", "canada")
  ) +
  createcard(
    "24/11",
    "Quinta-Feira",
    creategame("switzerland", "07:00", "cameroon") +
      creategame("uruguay", "10:00", "south korea") +
      creategame("portugal", "13:00", "ghana") +
      creategame("brazil", "16:00", "serbia")
  ) +
  createcard("25/11","Sexta-Feira",
    creategame("wales", "07:00", "iran") +
      creategame("qatar", "10:00", "senegal") +
      creategame("netherlands", "13:00", "ecuador") +
      creategame("england", "16:00", "united states")) +
  createcard("26/11","Sábado",
    creategame("tunisia", "07:00", "australia") +
      creategame("poland", "10:00", "saudi arabia") +
      creategame("france", "13:00", "denmark") +
      creategame("argentina", "16:00", "mexico")
  ) +
  createcard("27/11","Domingo",
    creategame("japan", "07:00", "costa rica") +
      creategame("belgium", "10:00", "morocco") +
      creategame("croatia", "13:00", "canada") +
      creategame("spain", "16:00", "germany")
  )
