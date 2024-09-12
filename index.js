function findMostSugar (donuts) {
  let donutsSugar;
  let highestSugar = 0;
  let nameDonut;
    for (let i = 0; i < donuts.length; ++i) {
        donutsSugar = donuts[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars;
        donutsSugar = parseFloat(donutsSugar.substring(0,donutsSugar.length - 1));
        if (donutsSugar > highestSugar) {
          highestSugar = donutsSugar;
          nameDonut = donuts[i].name
        }
    }

    console.log("Donut with highest sugar: " + nameDonut + " " + highestSugar + "g");
}

////////////////////////////////////

function findMostIron (donuts) {
  let donutsIron;
  let highestIron = 0;
  let nameDonut;
    for (let i = 0; i < 5; ++i) {
      for (let j = 0; j < donuts[i].nutrition_facts.nutrition.vitamines.length; ++j) {
        if (donuts[i].nutrition_facts.nutrition.vitamines[j].type === "Iron") {
          donutsIron = donuts[i].nutrition_facts.nutrition.vitamines[j].percent;
          donutsIron = parseFloat(donutsIron.substring(0,donutsIron.length - 1));
          if (donutsIron > highestIron){
            highestIron = donutsIron;
            nameDonut = donuts[i].name;
          }
        }
      }
    }

    console.log("Donut with highest iron: " + nameDonut + " " + highestIron + "%")
}

////////////////////////////////

function findMostProtein (donuts) {
    let donutsProteine;
    let highestProteine = 0;
    let nameDonut;
      for (let i = 0; i < donuts.length; ++i) {
          donutsProteine = donuts[i].nutrition_facts.nutrition.proteine;
          donutsProteine = parseFloat(donutsProteine.substring(0,donutsProteine.length - 1));
          if (donutsProteine > highestProteine) {
            highestProteine = donutsProteine;
            nameDonut = donuts[i].name;
          }
      }
  
      console.log("Donut with highest protein: " + nameDonut + " " + highestProteine + "g");
  }

  /////////////////////////////

  function findLeastFibre (donuts) {
    
  let donutsFibre;
  let leastFibre = donuts[0].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre;
  leastFibre = parseFloat(leastFibre.substring(0,leastFibre.length - 1));
  let nameDonut = donuts[0].name;
    for (let i = 0; i < donuts.length; ++i) {
        donutsFibre = donuts[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre;
        donutsFibre = parseFloat(donutsFibre.substring(0,donutsFibre.length - 1));
        if (donutsFibre < leastFibre) {
          leastFibre = donutsFibre;
          nameDonut = donuts[i].name
          console.log(nameDonut);
        }
    }

    console.log("Donut with lowest fibre: " + nameDonut + " " + leastFibre + "g");
  }

  /////////////////////////////

  function showCalories (donuts) {
    console.log("show calories of all donuts: ")
    for (let i = 0; i < donuts.length; ++i) {
      console.log(donuts[i].name + " " + donuts[i].nutrition_facts.nutrition.calories);
    }
  }

  ////////////////////////////

  function showCarbohydrates (donuts) { ///utiliza eachOf o hay algun otro modo???? full investigate

  }



///////////////////////////////////////MAIN////////////////////////////////////////////////////////////////////////////////////////////////////

let data;
let donuts;

fetch('https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json')
  .then(response => response.text())
  .then(data => {
    data = JSON.parse(data);
    donuts = data.items.item;

    //donut con mas azucar
    findMostSugar (donuts);

    //donut con mas hierro
    findMostIron (donuts);

    //donut con mas proteina
    findMostProtein (donuts);

    //donut with least fiber
    findLeastFibre (donuts);

    //listar todos los donuts y sus calorias
    showCalories (donuts);

    //Listar todos los donuts y sus carbohidratos
    showCarbohydrates (donuts);

  });

