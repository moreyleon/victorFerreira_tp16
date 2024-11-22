const bicicletas = require("./datosBici");
const bici = require("./datosBici");


const dhBici = {

bicicletas : bici,

buscarBici : function (id){
 const mostrar = this.bicicletas.filter(x => x.id === id)
  return mostrar.length > 0 ? mostrar: null;

},
venderBici : function(id){
const vender = this.buscarBici(id);


  if (vender.length > 0) {
    vender[0].vendida = true
    return vender
  } else {
   return "Bicicleta no encontrada"
    
  } 
},
biciParaLaVenta : function(){
const buscar = this.venderBici().filter(x => x.vendida === false)
return buscar

},
totalDeVentas : function(){

  const vendidas = this.bicicletas.filter(x => x.vendida === true)
  const total = vendidas.reduce((acum,indice) => {
   
    return acum + indice.precio;
    
  },0)  
  return  total

},
aumentoBici : function(aumento){
 bicicletas.map( function (bici){
  bici.precio = (bici.precio * aumento/100) + bici.precio
  

 })
 
  return  bicicletas
  
},
biciPorRodado : function(roda){
const traerRodado = this.bicicletas.filter(x => x.rodado === roda)
return traerRodado

},


listarTodasLasBici : function() {
 this.bicicletas.forEach(element => {
 console.log(element);
     
 });

}

}

 // console.log(dhBici.buscarBici(10));
 
// console.log(dhBici.venderBici(1));

//console.log(dhBici.biciParaLaVenta());

//console.log(dhBici.totalDeVentas());

// console.log(dhBici.aumentoBici(20));

// console.log(dhBici.biciPorRodado(28));

console.log(dhBici.listarTodasLasBici());



 

 

