// Create Dino Constructor
function Dinosaur(species, weight, height, diet, where, when, fact) {
  this.species = species
  this.weight = weight
  this.height = height
  this.diet = diet
  this.where = where
  this.when = when
  this.fact = fact
}

// Create Dino Objects
const dinoData = []
dinoData.push(
  new Dinosaur('Triceratops', 13000, 114, 'herbavor', 'North America', 'Late Cretaceous', 'First discovered in 1889 by Othniel Charles Marsh'),
  new Dinosaur('Tyrannosaurus Rex', 11905, 144, 'carnivor', 'North America', 'Late Cretaceous', 'The largest known skull measures in at 5 feet long.'),
  new Dinosaur('Anklyosaurus', 10500, 55, 'herbavor', 'North America', 'Late Cretaceous', 'Anklyosaurus survived for approximately 135 million years.'),
  new Dinosaur('Brachiosaurus', 70000, 372, 'herbavor', 'North America', 'Late Jurasic', 'An asteroid was named 9954 Brachiosaurus in 1991.'),
  new Dinosaur('Stegosaurus', 11600, 79, 'herbavor', 'North America, Europe, Asia', 'Late Jurasic to Early Cretaceous', 'The Stegosaurus had between 17 and 22 seperate places and flat spines.'),
  new Dinosaur('Elasmosaurus', 16000, 59, 'carnivor', 'North America', 'Late Cretaceous', 'Elasmosaurus was a marine reptile first discovered in Kansas.'),
  new Dinosaur('Pteranodon', 44, 20, 'carnivor', 'North America', 'Late Cretaceous', 'Actually a flying reptile, the Pteranodon is not a dinosaur.'),
  new Dinosaur('Pigeon', .5, 29, 'herbavor', 'World Wide', 'Halocene', 'All birds are living dinosaurs.')
);

console.log(dinoData);

// Create Human Object
function Human(name, weight, feet, inches, diet) {
  this.name = name;
  this.weight = weight;
  this.feet = feet;
  this.inches = inches;
  this.diet = diet;
  this.height = parseInt((feet * 12) + inches);
}

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array

    // Add tiles to DOM

// Remove form from screen


// On button click, prepare and display infographic
const form = document.querySelector('#dino-compare');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const weight = parseInt(document.querySelector('#weight').value);
  const feet = parseInt(document.querySelector('#feet').value);
  const inches = parseInt(document.querySelector('#inches').value);
  const diet = document.querySelector('#diet').value;

  let person = new Human(name, weight, feet, inches, diet);
  console.log(person);

  form.style.display = 'none';
})