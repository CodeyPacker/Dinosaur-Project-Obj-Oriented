// Create Dino Constructor
function Dinosaur(species, weight, height, diet, where, when, fact) {
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = [fact];
  this.imgSrc = `images/${this.species}`;

  this.compareWeight = function (humanWeight) {
    let flavorText;
    let difference = Math.abs(humanWeight - this.weight);
    this.weight < humanWeight ? (flavorText = "more") : (flavorText = "less");
    this.fact.push(
      `You weigh ${flavorText} than the dino by ${difference} lbs!`
    );
  };

  this.compareHeight = function (humanHeight) {
    let flavorText;
    let difference = Math.abs(humanHeight - this.height);
    this.height < humanHeight ? (flavorText = "more") : (flavorText = "less");
    this.fact.push(
      `Your height is ${flavorText} than the dino by ${difference} inches!`
    );
  };

  this.compareDiet = function (humanDiet) {
    let flavorText = "";

    this.diet === humanDiet
      ? (flavorText = `You have the same diet as the ${this.species}`)
      : (flavorText = `The ${this.species} is a ${this.diet}`);
    this.fact.push(flavorText);
  };
}

// Create Dino Objects
const dinoData = [];
dinoData.push(
  new Dinosaur(
    "Triceratops",
    13000,
    114,
    "herbavor",
    "North America",
    "Late Cretaceous",
    "First discovered in 1889 by Othniel Charles Marsh"
  ),
  new Dinosaur(
    "Tyrannosaurus Rex",
    11905,
    144,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "The largest known skull measures in at 5 feet long."
  ),
  new Dinosaur(
    "Anklyosaurus",
    10500,
    55,
    "herbavor",
    "North America",
    "Late Cretaceous",
    "Anklyosaurus survived for approximately 135 million years."
  ),
  new Dinosaur(
    "Brachiosaurus",
    70000,
    372,
    "herbavor",
    "North America",
    "Late Jurasic",
    "An asteroid was named 9954 Brachiosaurus in 1991."
  ),
  new Dinosaur(
    "Stegosaurus",
    11600,
    79,
    "herbavor",
    "North America, Europe, Asia",
    "Late Jurasic to Early Cretaceous",
    "The Stegosaurus had between 17 and 22 seperate places and flat spines."
  ),
  new Dinosaur(
    "Elasmosaurus",
    16000,
    59,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "Elasmosaurus was a marine reptile first discovered in Kansas."
  ),
  new Dinosaur(
    "Pteranodon",
    44,
    20,
    "carnivor",
    "North America",
    "Late Cretaceous",
    "Actually a flying reptile, the Pteranodon is not a dinosaur."
  ),
  new Dinosaur(
    "Pigeon",
    0.5,
    29,
    "herbavor",
    "World Wide",
    "Halocene",
    "All birds are living dinosaurs."
  )
);

// Create Human Object
function Human(name, weight, height, diet) {
  this.name = name;
  this.weight = weight;
  this.diet = diet;
  this.height = height;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// Generate Tiles for each Dino in Array
function generateTiles(dinoArray, humanObj) {
  const grid = document.querySelector("#grid");
  dinoArray.forEach(function (d, i) {
    const randomNum = getRandomInt(0, d.fact.length);

    const gridChild = `
      <div class="grid-item ${i === 4 ? "item-4" : ""}">
        <h3>${d.species}</h3>
        <img src="${d.imgSrc.toLowerCase()}.png" alt="${d.species}"/>
        <p>${d.fact[randomNum]}</p>
      </div>`;
    grid.innerHTML += gridChild;
  });

  const halfwayNode = document.querySelector(".item-4");

  // create Human node to be inserted
  const humanGridItem = document.createElement("div");
  const humanName = document.createElement("h3");
  const humanImg = document.createElement("img");
  humanGridItem.classList.add("grid-item");
  humanName.innerHTML = `${humanObj.name}`;
  humanImg.setAttribute("src", "images/human.png");
  humanGridItem.append(humanName);
  humanGridItem.append(humanImg);
  grid.insertBefore(humanGridItem, halfwayNode);
}

// Remove form from screen
const form = document.querySelector("#dino-compare");
const hideForm = () => (form.style.display = "none");

// On button click, prepare and display infographic
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const weight = parseInt(document.querySelector("#weight").value);
  const feet = parseInt(document.querySelector("#feet").value);
  const inches = parseInt(document.querySelector("#inches").value);
  const diet = document.querySelector("#diet").value.toLowerCase();
  const height = parseInt(feet * 12 + inches);
  let person = new Human(name, weight, height, diet);

  hideForm();

  // Run all compare methods for each dino to generate facts
  dinoData.forEach((dino) => {
    dino.compareWeight(person.weight);
    dino.compareHeight(person.height);
    dino.compareDiet(person.diet);
  });

  generateTiles(dinoData, person);
});
