 //Lenguaje no fuertementetipado 
 //Mensaje al usuario 
 //alert("hola ")
 //alert("Hola")

 //console.log("hola en consola")

 //prompt("Ingrese algo ")
 //Escribir en el DOM 
 //document.write("Hola mundo ")

 //Analogia
 //Vacias 
 // Izquierda(vacio) = valor de la Derecha llena el valor de izquieda 

 Caja = "play 5"
 Botella = 20

 // Tipos de datos JS 
 // String -> Texto (Cadena ) -> La regla es con  " "
 // Numerico -> Interos , Decimales , Moneda -> la regla es sin " "
 // Bolean /Boleano(Bandera) Verdadero/Falso -> la regla  True/False 
 // Array -Vector/Matriz ( Arreglo ) - > [ X,Y,Z,°] la primer posicion 0
 // Consultar Array : nombrevariable[X] x= indice 
 // Objeto - Tiene un atributo(propiedad):Valor  -> {}
 //Consultar Obj : NombreVariable.atributo
 //Arreglo de Obje JSON : Nos permite tener multiples objetos dentro de un arreglo [{prop:valor},{prop:valor},{prop:valor}]


 //Declaracion de Variables 
 //Variable no tiene valor el tipo de dato es undefined /Nan

 //Singular
 var nombre;
 var Edad;
 var tienengatos;
 //singular
 var objpersona;


 //Plural
 var arreglocosas;
 var arreglovacio;
 //arreglo de objetos 
 var objpersonas;



 //Inicializacion 
 nombre = "Alonso"
 Edad = 50
 tienengatos = false
 arreglocosas = ["Alonso", "Yeraf", "Monica", "Pepito", 20, 30, 50, true]
 arreglovacio = []

 objpersona = {
     Nombre: "Monica",
     Provincia: "SJ",
     Edad: 20,
     genero: "Bachata",
     comida: "pizza"
 }


 //JSON
 objpersonas = [

     { //0
         Nombre: "Monica",
         Provincia: "SJ",
         Edad: 20,
         genero: "Bachata",
         comida: "pizza"
     },
     { //1
         Nombre: "Sher",
         Provincia: "SJ",
         Edad: 20,
         genero: "Rock metal",
         comida: "pizza"
     },
     { //2
         Nombre: "Fabian",
         Provincia: "SJ",
         Edad: 20,
         genero: "K-POP",
         comida: "pizza"
     },
     { //3
         Nombre: "Allan",
         Provincia: "SJ",
         Edad: 20,
         genero: "Cumbion",
         comida: "pizza"
     }

 ]

 //Ver tipo de dato
 console.log(typeof(nombre))
 console.log(typeof(Edad))
 console.log(typeof(tienengatos))
 console.log(typeof(arreglocosas))
 console.log(typeof(arreglovacio))

 console.log(arreglocosas[2])
 console.log(arreglocosas[3]) //Mostrar el indice de arreglo
 console.log(arreglocosas)
 console.log(objpersona)

 console.log(objpersona.comida) //Mostrar la propiedad o atributo de un obj

 //Impresion del JSON
 console.log(objpersonas[3].genero)
 console.log(objpersonas[2].genero)
 console.log(objpersonas[0].Nombre)

 //CICLOS 
 let cantidad = objpersonas.length //Contar la cantidad

 for (let index = 0; index < objpersonas.length; index++) {


     console.log(objpersonas[index].Nombre)
         //debugger
 }

 objpersonas.forEach(element => {
     console.log(element.Nombre)

 });

 if (cantidad == 4) {
     // alert("Si cumle")
 } else if (cantidad == 2) {

 } else {

 }


 //Funciones invocar algo que esta adentro 

 cualquiernombre()

 //Funcion con parametros 

 cualquiernombre2("Profe")


 function cualquiernombre() {

     alert("Hola a todos desde la funcion")

 }


 function cualquiernombre2(pato) {

     alert("Hola a todos desde la funcion mi nombre es :." + pato)

 }




 //Elementos Dinamicos , Objetos , Funciones de Flecha y callaback ,promesas API