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

  function showCarbohydrates (donuts) { 
    console.log("show carbohydrates of all donuts: ");
    for (let i = 0; i < donuts.length; ++i) {
      console.log(donuts[i].name + " " + donuts[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.amount);
    }
  }
  
  //////////////////////////

  function showCalories (donuts) {
    console.log("show calories of all donuts: ");
    for (let i = 0; i < donuts.length; ++i) {
      console.log(donuts[i].name + " " + donuts[i].nutrition_facts.nutrition.calories);
    }
  }

  //////////////////////////

  function sumSaturateFat (donuts) {
    let saturateFat;
    let totalSaturateFat = 0;
    for (let i = 0; i < donuts.length; ++i) {
      saturateFat = donuts[i].nutrition_facts.nutrition.fat.fat_type.saturated;
      saturateFat = parseFloat(saturateFat.substring(0,saturateFat.length - 1));
      totalSaturateFat += saturateFat;
    }

    console.log("total amount of saturated fat of all donuts: " + totalSaturateFat);
  }

  ///////////////////////////

  function averageVitamin (donuts) {
    console.log("show average of each vitamin: ");
    let vitaminA; 
    let vitaminC;
    let calcium;
    let iron;
    let totalvitaminA = 0; 
    let totalvitaminC = 0;
    let totalCalcium = 0;
    let totalIron = 0;  
    let arrayVitamins; 

    for (let i = 0; i < donuts.length; ++i) {
      arrayVitamins = donuts[i].nutrition_facts.nutrition.vitamines;
        vitaminA = arrayVitamins.find((vitamin) => vitamin.type === "Vitamin A");
        if (vitaminA.percent.length > 1) {totalvitaminA += parseFloat(vitaminA.percent.substring(0, vitaminA.percent.length - 1))}; ///en JSON error no hay %
        if (vitaminA.percent.length <= 1) {totalvitaminA += parseFloat(vitaminA.percent)}; //error en JSON no hay %
        vitaminC = arrayVitamins.find((vitamin) => vitamin.type === "Vitamin C");
        totalvitaminC += parseFloat(vitaminC.percent.substring(0, vitaminC.percent.length - 1));
        calcium = arrayVitamins.find((vitamin) => vitamin.type === "Calcium");
        totalCalcium += parseFloat(calcium.percent.substring(0, calcium.percent.length - 1));
        iron = arrayVitamins.find((vitamin) => vitamin.type === "Iron");
        totalIron += parseFloat(iron.percent.substring(0, iron.percent.length - 1));  
      }

      console.log("average vitamin A: " + (totalvitaminA / donuts.length) + "%");
      console.log("average vitamin C: " + (totalvitaminC / donuts.length) + "%");
      console.log("average calcium: " + (totalCalcium / donuts.length)+ "%");
      console.log("average iron: " + (totalIron / donuts.length) + "%");
  }

  //////////////////////////
  function batterDonuts (donuts) {
    let all = [];
    for (let i = 0; i < donuts.length; ++i) {
      all = [];
      donuts[i].batters.batter.forEach(element => {
      all.push(element.type);
      });
      console.log(donuts[i].name + " batters: " + all)
    }
  }

  //////////////////////////
  function toppingDonuts (donuts) {
    let all = [];
    for (let i = 0; i < donuts.length; ++i) {
      all = [];
      donuts[i].topping.forEach(element => {
      if (element.type != "None") {all.push(element.type)};
      });
      console.log(donuts[i].name + " toppings: " + all)
    }
  }

  ////////////////////////////
  function affordDonuts (donuts) {
    let quantity;
    let moneySpent;
    let moneyLeft;
    for (let i = 0; i < donuts.length; ++i) {
      quantity = 0;
      moneyLeft = 0;
      moneySpent = 0;

      while (moneySpent <= 4) {quantity++; moneySpent += donuts[i].ppu;}
      quantity -- ;
      moneySpent -=donuts[i].ppu;
      moneyLeft = 4 - moneySpent;

      console.log (donuts[i].name + " can be bought in this quantity: " + quantity + " and this money is left: " + moneyLeft);
    }
  }

  ///////////////////////
  function modifyTrans (donuts) {
    let cholesterol;
    for (let i = 0; i < donuts.length; ++i) {
        cholesterol = donuts[i].nutrition_facts.nutrition.cholesterol.amount;
        cholesterol = parseFloat(cholesterol.substring(0, cholesterol.length - 2));
        if (cholesterol > 12) {donuts[i].nutrition_facts.nutrition.fat.fat_type.trans = "3,2gr"; console.log (donuts[i].name + " " + donuts[i].nutrition_facts.nutrition.fat.fat_type.trans)}
    }
  }

  ///////////////////////
  function modifyCarbo (donuts) {
    let sugar;
    for (let i = 0; i < donuts.length; ++i) {
        sugar = donuts[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars;
        sugar = parseFloat(sugar.substring(0, sugar.length - 1));
        if (sugar > 50) {donuts[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.amount = "42gr"; console.log (donuts[i].name + " " + donuts[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.amount)}
    }
  }

  ///////////////////////
  function addVitamin (donuts) {
    for (let i = 0; i < donuts.length; ++i){
      if (donuts[i].name === "Magic Fusion") {donuts[i].nutrition_facts.nutrition.vitamines.push({type: "Nitacina"}); console.log("vitaminas de Magic Fusion: ");
      donuts[i].nutrition_facts.nutrition.vitamines.forEach((element) => console.log(element.type));}
    }
  }

  //////////////////////
  function addDailyCarb (donuts) {
    for (let i = 0; i < donuts.length; ++i){
      donuts[i].nutrition_facts.nutrition.carbohydrate.daily_value = "53%";
      console.log(donuts[i].name + " " + donuts[i].nutrition_facts.nutrition.carbohydrate.daily_value);
    }
  }

  //////////////////////
  function addAlergen (donuts) {
    for (let i = 0; i < donuts.length; ++i){
      Object.assign(donuts[i], { alergen: "gluten free" });
      console.log(donuts[i].name + " " + donuts[i].alergen);
    }
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

    //Mostrar la media de calorias de todos los donuts
    showCalories (donuts);

    //Mostrar la suma de las grasas saturadas de todos los donuts
    sumSaturateFat (donuts);

    //Mostrar el porcentaje medio de cada vitamina
    averageVitamin (donuts);

    //Listar cada donut con sus posibles masas, batter 
    batterDonuts (donuts);

    //Listar cada donut con sus posibles extras topping
    toppingDonuts (donuts);

    //Mostrar cuántos donuts de cada tipo podemos comprar y las monedas sobrantes tienendo 4 monedas
    affordDonuts (donuts);

    //Los donuts con el colesterol > 12 modificar las grasas trans a 3,2 gr
    modifyTrans (donuts);

    //Donuts con azúcar > 50  modificar el amount de los detalles de carbohidratos a 42gr
    modifyCarbo (donuts);

    //Añadir una vitamina llamada "Nitacina" al donut con el nombre "Magic Fusion"
    addVitamin (donuts);

    //El daily value de los carbohidratos de todos los donuts va a ser de 53%
    addDailyCarb (donuts);

    //Crearle un nuevo atributo "Alergen" al donut llamado "Relaxing Alchemy" y que dentro de el ponga "Gluten Free" 
    addAlergen (donuts);

  });

