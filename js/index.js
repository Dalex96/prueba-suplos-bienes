/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/

const content = document.querySelector(`#divResultadosBusqueda`)
const content2 = document.querySelector(`#divResultadosBusqueda2`)
const filterCiudad = document.querySelector(`#selectCiudad`)
const filterCiudad2 = document.querySelector(`#selectCiudad2`)
const filterTipo = document.querySelector(`#selectTipo`)
const filterTipo2 = document.querySelector(`#selectTipo2`)

$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}
/*
  Función que reproduce el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll
*/
function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
       
     } else {
        //this.rewind(1.0, video, intervalRewind);
        video.play();
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
      video.pause();
    }, 10)
}

function saveBien(params){
  console.log(params)
  $.ajax({
      url: "../scripts/controlador.php?option=save_bien",
      type: "POST",
      cache: false,
      data: params,
      success: function(res){
          location.reload();
      },
      error: function(err){
          console.log(err);
      }
  });
}

function deleteBien(params){
  $.ajax({
      url: "../scripts/controlador.php?option=delete_bien",
      type: "POST",
      cache: false,
      data: params,
      success: function(res){
          location.reload();
      },
      error: function(err){
          console.log(err);
      }
  });
}

function listBienes(){
  $.ajax({
      url: "../scripts/controlador.php?option=list_bienes",
      type: "GET",
      cache: false,
      success: function(res){
          let data = JSON.parse(res)
          cleanDraw()
          data.forEach(d => {
            drawListData2(d, content2)
          })
      },
      error: function(err){
          console.log(err);
      }
  });
}

function listAllData () {

  fetch('data-1.json')
    .then(res => res.json())
    .then(bienes => {
      bienes.forEach(bien => {
        drawListData(bien, content)
      })
    })
}

function filterCiudadesReport(){
  const ciudades = []
  fetch('data-1.json')
    .then(res => res.json())
    .then(bienes => {
      bienes.forEach(bien => {
        let bienVar = Object.getOwnPropertyNames(bien)
        bienVar.forEach(label => {
          if(label === 'Ciudad'){
              ciudades.push(bien.Ciudad)
          }
        })
      })
      let newCiudades = arrayRepet(ciudades)
      newCiudades.forEach((c,i) => {
        const ciudad = document.createElement('option')
        ciudad.setAttribute('value', c)
        ciudad.innerHTML = `
          ${c}
        `
        filterCiudad2.appendChild(ciudad)
      })  

    })  
}

function filterTiposReport(){
  const tipo = []
  fetch('data-1.json')
    .then(res => res.json())
    .then(bienes => {
      bienes.forEach(bien => {
        let bienVar = Object.getOwnPropertyNames(bien)
        bienVar.forEach(label => {
          if(label === 'Tipo'){
              tipo.push(bien.Tipo)
          }
        })
      })
      let newTipos = arrayRepet(tipo)
      newTipos.forEach((c,i) => {
        const tipo = document.createElement('option')
        tipo.setAttribute('value', c)
        tipo.innerHTML = `
          ${c}
        `
        filterTipo2.appendChild(tipo)
      })  

    })  
}

function reportExel(){
  $.ajax({
      url: "../reports/index.php",
      type: "POST",
      cache: false,
      success: function(res){
          console.log(res)
      },
      error: function(err){
          console.log(err);
      }
  });  
}

function listCiudades(){
  const ciudades = []
  fetch('data-1.json')
    .then(res => res.json())
    .then(bienes => {
      bienes.forEach(bien => {
        let bienVar = Object.getOwnPropertyNames(bien)
        bienVar.forEach(label => {
          if(label === 'Ciudad'){
              ciudades.push(bien.Ciudad)
          }
        })
      })
      let newCiudades = arrayRepet(ciudades)
      newCiudades.forEach((c,i) => {
        const ciudad = document.createElement('option')
        ciudad.setAttribute('value', c)
        ciudad.innerHTML = `
          ${c}
        `
        filterCiudad.appendChild(ciudad)
      })      
    })  
}

function listTipos(){
  //Listamos todos los elementos del archivo JSON
  const tipos = []
  fetch('data-1.json')
    .then(res => res.json())
    .then(bienes => {
      bienes.forEach(bien => {
        let bienVar = Object.getOwnPropertyNames(bien)
        bienVar.forEach(label => {
          if(label === 'Tipo'){
              tipos.push(bien.Tipo)
          }
        })
      })
      let newTipos = arrayRepet(tipos)
      newTipos.forEach((c,i) => {
        const tipo = document.createElement('option')
        tipo.setAttribute('value', c)
        tipo.innerHTML = `
          ${c}
        `
        filterTipo.appendChild(tipo)
      })      
    }) 
}

function arrayRepet(array){
  const newArray = []
  const myObj = {}
  array.forEach(a => {
    // comprobamos si el valor existe en el objeto
    if (!(a in myObj)) { 
      // si no existe creamos ese valor y lo añadimos al array final, y si sí existe no lo añadimos
      myObj[a] = true
      newArray.push(a)
    }
  })  
  return newArray
}

// filtrar bienes
function filterBienes(ciudad, tipo){
  cleanDraw()
  fetch('data-1.json')
    .then(res => res.json())
    .then(bienes => {
      let dataCiudad = bienes.filter(bien => bien.Ciudad === ciudad || bien.Tipo === tipo)
      dataCiudad.forEach(dataBien => {
        drawListData(dataBien, content)
      })
    })
}
// filtrar bienes por id
function filterBienesById(id, option){
  fetch('data-1.json')
    .then(res => res.json())
    .then(bienes => {
      let dataCiudad = bienes.filter(bien => bien.Id === id)
      dataCiudad.forEach(data => {
        if(option == 1){
          saveBien(data)
        }else{
          deleteBien(data)
        }
      })
    })
}

// cargar contenido
function drawListData(bien, contend){
  const div = document.createElement('div')
  div.setAttribute('class', 'tituloContenido card listData')
  div.setAttribute('style', 'padding:20px')
  div.setAttribute('id', bien.Id)
  div.innerHTML = `
    <div>
    <b>Ciudad: </b><span>${bien.Ciudad}</span><br>
    <b>Direccion: </b><span>${bien.Direccion}</span><br>
    <b>Codigo Postal: </b><span>${bien.Codigo_Postal}</span><br>
    <b>Precio: </b><span>${bien.Precio}</span><br>
    <b>Telefono: </b><span>${bien.Telefono}</span><br>
    <b>Tipo: </b><span>${bien.Tipo}</p></span></br>
    <button onclick="filterBienesById(${bien.Id},${1})">Guardar</button>
    </div>

  `
  contend.appendChild(div)  
}

function drawListData2(bien, contend){
  const div = document.createElement('div')
  div.setAttribute('class', 'tituloContenido card listData2')
  div.setAttribute('style', 'padding:20px')
  div.setAttribute('id', bien.Id)
  div.innerHTML = `
    <div>
    <b>Ciudad: </b><span>${bien.Ciudad}</span><br>
    <b>Direccion: </b><span>${bien.Direccion}</span><br>
    <b>Codigo Postal: </b><span>${bien.Codigo_Postal}</span><br>
    <b>Precio: </b><span>${bien.Precio}</span><br>
    <b>Telefono: </b><span>${bien.Telefono}</span><br>
    <b>Tipo: </b><span>${bien.Tipo}</p></span></br>
    <button onclick="filterBienesById(${bien.Id},${2})">Eliminar</button>
    </div>

  `
  contend.appendChild(div)  
}

function cleanDraw(){
  $(".listData").remove();
}

function cleanDraw2(){
  $(".listData2").remove();
}

$("#submitButton").click((e) => {
  e.preventDefault()
  let ciudad = $("#selectCiudad").val()
  let tipo = $("#selectTipo").val()
  filterBienes(ciudad, tipo)
});

$("#submitButtonReport").click((e) => {
  e.preventDefault()
  let ciudad = $("#selectCiudad").val()
  let tipo = $("#selectTipo").val()
  reportExel()
});

// $('select#selectCiudad').on('change',function(){
//   var valor = $(this).val();
//   alert(valor);
// });

inicializarSlider();
playVideoOnScroll();
filterCiudadesReport()
filterTiposReport()
listTipos()
listCiudades()
listAllData()
listBienes()