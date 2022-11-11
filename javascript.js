// Objetos
const Tecno1 ={
    nombre: "Tablet",
    precio: 15000,
    marca:"TCL",
    origen: "Brasil"
}
const Tecno2 ={
    nombre: "IPad",
    precio: 100000,
    marca: "Iphone",
    origen: "China"
}
const Tecno3 ={
    nombre: "Xiaomi Pad",
    precio: 70000,
    marca: "Xiaomi", 
    origen: "China"
}
class Producto {
    constructor(nombre, pulgadas, precio){
    this.nombre = nombre;
    this.pulgadas = pulgadas;
    this.precio = precio;
}
}
let television1 = new Producto("Samsung", 32, 45000)
let television2 = new Producto("Noblex", 43, 66000)
let television3 = new Producto("Noblex", 50, 90000)


// Arrays de Objetos

const Tecnologia = [Tecno1, Tecno2, Tecno3]
const Tv = [television1, television2, television3]


let seleccion = prompt ("Seleccione entre Tecnologia o Tv")
switch (seleccion) {
    case "Tecnologia":
        Tecnologia.forEach((Tecnologia)=>{
            console.log (Tecnologia.nombre +" Marca:  " + Tecnologia.marca)
            console.log ("Valor: $ " + Tecnologia.precio)
            console.log ("Origen: " + Tecnologia.origen)
            
        })
        break;
    case "Tv":
        Tv.forEach((Tv)=>{
            console.log(Tv.nombre)
            console.log(Tv.pulgadas + " Pulgadas")
            console.log("Su precio es $ " + Tv.precio)
        })
        break;

    default:
        alert ("Escriba bien las opciones")
        break;
}



   











 
