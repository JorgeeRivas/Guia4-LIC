//Definir la matriz o arreglo con los datos
var lista = new Array(
  "Abismo",
  "Abusado",
  "Abyecto",
  "Acatar",
  "Abanico",
  "Abecedario",
  "Abeja",
  "Abeto",
  "Babor",
  "Bacteria",
  "Baja",
  "Balón",
  "Ballena",
  "Barómetro",
  "Barbacana",
  "Barbería",
  "Barca",
  "Caño",
  "Cabaña",
  "Caballo",
  "Cabestrillo",
  "Cabildo",
  "Cabrales",
  "Cabrestante",
  "Cadáver",
  "Débil",
  "Déficit",
  "Dúplex",
  "Debate",
  "Decadente",
  "Decaer",
  "Decálogo",
  "Dedal",
  "Defecto",
  "Ecosistema",
  "Edema",
  "Edificante",
  "Eficacia", 
  "Egoísta",
  "Eje",
  "Ejercer",
  "Jabón",
  "Jabugo",
  "Uniforme",
  "Xenofobia",
  "Xerografía",

);

var definiciones = new Array(
  "Profundidad muy grande",
  "Vivo, despierto. Se originó de “aguzado” ",
  "Despreciable, ignominioso",
  "Respetar, obedecer. Venerar, someterse",
  "Objeto que sirve para dar aire",
  "Conjunto de letras de un idioma ordenadas por orden alfabético",
  "Insecto de color amarillo y negro. Las abejas fabrican miel y cera",
  "Árbol de tronco alto y recto. La copa tiene forma de cono y su fruto son las piñas",
  "Parte izquierda de un barco",
  "Organismo muy pequeño que a veces produce enfermedades",
  "Documento en el que un médico confirma que alguien está enfermo y no puede realizar determinadas actividades",
  "Pelota grande llena de aire que sirve para jugar y practicar deportes",
  "Animal mamífero marino. Mide más de 30 metros, es el animal más grande del mundo",
  "Instrumento que mide la presión atmosférica.",
  "Especie de ventana muy estrecha y alargada de una fortaleza o de un castillo por la que disparaban cañones y flechas para defenderse del enemigo",
  "Local donde los hombres se cortaban y arreglaban el pelo, la barba y el bigote.",
  "Embarcación pequeña que puede ser de vela, remos o motor",
  "Tubo por donde sale al exterior un chorro de un líquido. En general, suele ser de una fuente",
  "Casa pequeña hecha de ramas, cañas o troncos que suele estar en el campo",
  "Animal mamífero macho de tamaño mediano o grande. Tiene la cabeza alargada y las orejas pequeñas",
  "Pañuelo o banda que se cuelga del hombro para inmovilizar un brazo o un hombro lesionado",
  "Conjunto de sacerdotes que son miembros de una catedral",
  "Queso asturiano elaborado con leche de oveja, vaca y cabra.",
  "Torno en el que se enrolla una cuerda o cable y gira de forma manual o mecánica",
  "Persona o cosa que tiene poca fuerza o poca resistencia",
  "Situación en la que los gastos son mayores que los ingresos",
  "Vivienda de 2 plantas unidas por una escalera interior.",
  "Discusión o intercambio de opiniones entre varias personas sobre un tema",
  "Que disfruta con el estilo de las cosas que han pasado de moda y son elegantes",
  "Perder alguien o algo fuerza, valor o importancia",
  "Conjunto de reglas o recomendaciones importantes de una actividad.",
  "Utensilio que sirve para empujar la aguja al coser",
  "Algo que está mal o es incorrecto en una persona o una cosa.",
  "Sistema formado por un conjunto de seres vivos, el territorio en el que viven",
  "Inflamación de una parte del cuerpo que se produce por la acumulación de líquido.",
  "Que es bueno como comportamiento y sirve como ejemplo para los demás",
  "Capacidad de lograr el resultado que deseamos después de realizar una acción",
  "Persona que sólo piensa en sí misma y en las cosas que le interesan",
  "Barra que pasa por el centro de una pieza que gira",
  "Hacer las actividades propias de un oficio o una profesión",
  "Producto que sirve para lavar",
  "Pueblo de Huelva famoso por sus jamones, que se llaman jamones de Jabugo",
  "Traje que visten las personas que hacen la misma actividad o trabajo.",
  "Odio a los extranjeros o a las cosas de otros países",
  "Proceso de copia de un texto o una imagen en papel mediante una máquina",


);

var palabras= new Array();
palabras["Profundidad muy grande"]="Abismo";
palabras["Vivo, despierto. Se originó de “aguzado” "] ="Abusado";


//Función iniciar desde donde se controlarán los manejadores de evento
//a utilizar
function iniciar(){
  //Creando el controlador de evento para el evento
  //doble clic sobre los elementos del cuadro de lista
  var lista = document.getElementById("lstsports");
  //Cargando los datos en el cuadro de lista al cargar la página
  cargarLista();

  if(lista.addEventListener){
      lista.addEventListener("dblclick", function(){
          cargarTexto(this.options[this.selectedIndex].text);
      }, false);

  }else if(lista.attachEvent){

      lista.attachEvent("ondblclick", function(){
          cargarTexto(this.options[this.selectedIndex].text);
      });
  }

  //Capturando el campo de texto sobre el que se ingresan los deportes
  //mediante pulsasión de tecla
  var texto = document.getElementById("txtsport");
  if(texto.addEventListener){
      texto.addEventListener("keyup", buscar, false); 
  }
  else if(texto.attachEvent){
      texto.attachEvent("onkeyup", buscar);
  }

}

function cargarLista() {
  // Cargamos el combo
  for(x=0;x<lista.length;x++)
  document.frmsearchsport.lstsports[x] = new Option(lista[x]);
}

function cargarTexto(elemento){
  if(elemento!=null && elemento!=undefined && elemento!=""){
      document.frmsearchsport.txtsport.value = elemento;
      //document.frmsearchsport.txtdefinicion.value = definiciones[indice];
      for(x=0;x<lista.length;x++){
          if(elemento == lista[x]){
              document.frmsearchsport.txtdefinicion.value = definiciones[x];
          }
      }
  }
  
}

function buscar() {
  limpiarLista();
  // Se obtiene el valor del texto
  var str = document.frmsearchsport.txtsport.value;
  // Crear la expresión regular
  var expr = new RegExp("^" + str,"i");
  // Recorrer la lista. Si la expresión regular es OK
  y = 0;

  for(x=0;x<lista.length;x++) {
      if(expr.test(lista[x])) {
          document.frmsearchsport.lstsports[y] = new Option(lista[x]);
          y++;
      }
  }
}

function limpiarLista() {
  for(x=document.frmsearchsport.lstsports.length;x>=0;x--)
  document.frmsearchsport.lstsports[x] = null;
}


 //Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
  window.addEventListener("load", iniciar, false);
}else if(window.attachEvent){
  window.attachEvent("onload", iniciar);
}
