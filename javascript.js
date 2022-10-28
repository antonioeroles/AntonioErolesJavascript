let televisor = prompt("TELEVISOR DE:  'Ingrese con números cuantas pulgadas' ")
let a = 45000
let b = 66000
let c = 90000
let index = 1
let pago = parseInt(prompt ("en cuantas cuotas va a pagar  'en números'"))
switch (televisor) {
    case "32":
       console.log ("el precio es de $ " + a)
       if (pago == 1) {
           console.log ("En efectivo tiene un 10 % de descuento")
       }
       else if (pago == 3) {
          for (let index = 1; index <= 3; index++) {
           console.log ("cuota " + index +" es = a: " + a / 3);
           } 
       }
       else if (pago == 6){
        for (let index = 1; index <= 6; index++) {
            console.log ("cuota " + index +" es = a: " + a / 6);
            } 
       }
       else{
        console.log ("escoja entre 1, 3 y 6 pagos")
       }

        break;
    case "43":
        console.log ("el precio es de $ " + b)
        if (pago == 1) {
            console.log ("En efectivo tiene un 10 % de descuento")
        }
        else if (pago == 3) {
           for (let index = 1; index <= 3; index++) {
            console.log ("cuota " + index +" es = a: " + b / 3);
            } 
        }
        else if (pago == 6){
            for (let index = 1; index <= 6; index++) {
                console.log ("cuota " + index +" es = a: " + b / 6);
                } 
           }
           else{
            console.log ("escoja entre 1, 3 y 6 pagos")
           }
        break;
    case "50":
        console.log ("el precio es de $ " + c)
        console.log ("actualmente esta en promocion 15% descuento efectivo")
        if (pago == 1) {
            console.log ("En efectivo tiene un 15 % de descuento")
        }
        else if (pago == 3) {
           for (let index = 1; index <= 3; index++) {
            console.log ("cuota " + index +" es = a: " + c / 3);
            } 
        }
        else if (pago == 6){
            for (let index = 1; index <= 6; index++) {
                console.log ("cuota " + index +" es = a: " + c / 6);
                } 
           }
           else{
            console.log ("escoja entre 1, 3 y 6 pagos")
           }
        break;

    default:
        console.log ("no tenemos stock en este momento")
        break;
}




 
