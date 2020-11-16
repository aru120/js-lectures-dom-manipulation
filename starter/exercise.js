// Exercise!
const animalData = [
  {
    name: "Red Panda",
    imageUrl: "https://i1.wp.com/www.redpandanetwork.org/wp-content/uploads/2018/10/Photo-1-for-Give-page.png?fit=584%2C584&ssl=1",
    description: "not actually a panda",
    donations: 0
  },
  {
    name: "Pangolin",
    imageUrl: "https://i.pinimg.com/originals/bf/ff/93/bfff9395c6ae0d24534f030580924c7e.jpg",
    description: "The Pangolin, otherwise known as the scaly anteater, is the only mammal in the world to be covered from head to toe in keratin scales (the same as human finger nails).",
    donations: 0
  },
  {
    name: "Mantis Shrimp",
    imageUrl: "https://media.wired.com/photos/5bc7d05bf867c63ebba1b104/1:1/w_1800,h_1800,c_limit/mantisshrimp-467993194.jpg",
    description: "The mantis shrimp can punch with the speed of a .22 caliber bullet—strong enough to break the shells of its prey, as well as aquarium glass.",
    donations: 0
  }
]

// Get all these objects to display in the DOM

function renderOneAnimal(animalObj){
 const card = document.createElement("li")
 card.className = "card"

 card.innerHTML = `
  <div class="image">
    <img src="${animalObj.imageUrl}" alt="${animalObj.imageUrl}">
    </div>

    <div class="content">
    <h4>${animalObj.name}</h4>
    <p class="description"> ${animalObj.description} </p>
    </div>

    <button class="button donate-button" data-action="donate">
    $<span class="donation-count">${animalObj.donations}</span> Donated
    </button>
 `

 document.querySelector("#animal-list").append(card)
}


function renderAllAnimals(animalData){
  animalData.forEach(function(animalObj){
    renderOneAnimal(animalObj)
  })
}

renderAllAnimals(animalData)
