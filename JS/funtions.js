console.log("prueba de conecciñon");

//tipos de variables
//const para variables constantes

const pi = 3.1416;
const pulgada = 2.3;
const name = "Keila Vacca";


//var para variables globales

var cal_days = 15;


//let para variables de bloque o locales

let count = 1;
let j = 0;

//formas de impresión

//alert
alert("name");

//console
console.log(name);
console.log(cal_days);
console.log("15");
console.log(true);

//pantalla-boby

document.write(name);
document.getElementById("box_one").innerHTML = "<h1>Keila Vacca</h1>";
document.getElementById("box_two").innerText = "<h1>Keila Vacca</h1>";

//librerias

Swal.fire({
    icon: 'info',
    title: 'Keila Vacca',
    text: name,
    footer: name,
    showConfirmButton: false,
    timer: 2000,
    position: 'center-end'
})
 //  Swal.fire(name);


 //tipos de datos


 //numericos

 var number_one = 10;
 var number_two = 2.5;

 //String
 var text = "soy un texto";

 //booleanos

 var boolean = true; //false

 //array

 var array_num =[1, 2, 3, 4, 5, 6];
 var array_text = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
 var array_mix = [1, "a", 2.5 , "c"];
 var array_mul= [
    {name: "Eliany", last_name:"Navarro", age: "17" },
    {name: "Maria", last_name:"perez", age: "22" },
    {name: "Angie", last_name: "Alvarez", age: "23"},
    {name: "SoFIA", last_name:"Montaguth ", age: "34"},
 ]

 
 //operadores basicos

 //suma
 var suma = number_one + number_two;
 console.log("suma = " + suma);


 //resta

 var resta = number_one - number_two;
 console.log("resta = " + resta);

 //multiplicacion
 var multiplicacion = number_one * number_two;
 console.log("multiplicacion= " + multiplicacion);

 //division

 var division = number_one / number_two;
 console.log("division = " + division);

 //modulo

 var modulo = number_one % number_two;
 console.log("modulo = " + modulo);


 console.log(
    "suma = " + suma + " \n"+
    "resta = " + resta  + " \n"+
    "multiplicacion= " + multiplicacion  + " \n"+
    "division = " + division + " \n"+
    "modulo = " + modulo
 );
var respuesta = 
    "suma = " + suma + "<br>"+
    "resta = " + resta  + "<br>"+
    "multiplicacion= " + multiplicacion  + "<br>"+
    "division = " + division + "<br>"+
    "modulo = " + modulo;

    Swal.fire(respuesta);

    Swal.fire({
      showConfirmButton: false,
      background: '#000' ,
      icon: 'success',
      title: 'respuesta',
      html: respuesta
    });

