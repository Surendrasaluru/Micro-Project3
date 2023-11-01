let foodItems = require("./micro3.json");
function AllItems() {
  console.log(foodItems); //list all the food items
}
AllItems();
function vegetableCategoryItems() {
  let vegetableItems = foodItems.filter(
    (item) => item.category === "Vegetable" //filtering
  );
  console.log(vegetableItems);
}
vegetableCategoryItems(); //calling

function fruitCategoryItems() {
  let fruitItems = foodItems.filter(
    (item) => item.category === "Fruit" //filtering
  );
  console.log(fruitItems);
}
fruitCategoryItems(); //calling

function dairyCategoryItems() {
  let dairyItems = foodItems.filter(
    (item) => item.category === "Dairy" //filtering
  );
  console.log(dairyItems);
}
dairyCategoryItems(); //calling

function protienCategoryItems() {
  let protienItems = foodItems.filter(
    (item) => item.category === "Protien" //filtering
  );
  console.log(protienItems);
}
protienCategoryItems(); //calling

function nutsCategoryItems() {
  let nutsItems = foodItems.filter(
    (item) => item.category === "Nuts" //filtering
  );
  console.log(nutsItems);
}
nutsCategoryItems(); //calling

function grainsCategoryItems() {
  let grainsItems = foodItems.filter(
    (item) => item.category === "Grain" //filtering
  );
  console.log(grainsItems);
}
grainsCategoryItems(); //calling

function calorieAbove100() {
  let calorieAbove100Items = foodItems.filter((item) => item.calorie > 100);
  console.log(calorieAbove100Items);
}
calorieAbove100();

function calorieBelow100() {
  let calorieBelow100Items = foodItems.filter((item) => item.calorie < 100);
  console.log(calorieBelow100Items);
}
calorieBelow100();

function compareByProtien(a, b) {
  return a.protiens - b.protiens;
}
foodItems.sort(compareByProtien);
console.log(foodItems);

function compareByCab(a, b) {
  return b.cab - a.cab;
}
foodItems.sort(compareByCab);
console.log(foodItems);
