const animals = require("./data/animals");
const connection = require("./mongoConnection");
async function main() {
    const animal1 = await animals.create("Sasha", "Dog");
    console.log(animal1);

    const animal2 = await animals.create("Lucy", "Dog");
    console.log(animal2);


    const allMyAnimals = await animals.getAll();
    console.log(allMyAnimals);

    const animal3 = await animals.create("Duke", "Walrus");
    console.log(animal3);

    const animalrename = await animals.rename("5d97e619437f0f33a8d9201d", "Sashita");
    console.log(animalrename);

    const removeanimal = await animals.remove("5d97ecf63a81743c887b5f29");
    console.log(removeanimal);




}


main().catch(error => {
    console.log(error);
});