let car={
    marca:"mazda",
    modelo: 2024,
    peso:1000,
    color: "negro",

}
console.table(car);
console.log(car,marca);
console.log(car["mazda"]);

// agregar una nueva propiedad

car["nueva-prop"]= "hola mundo";
console.table(car);
