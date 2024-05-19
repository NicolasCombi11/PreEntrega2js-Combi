let confirmacion = window.confirm("Bienvenido a Suplementos La Plata, ¿Desea buscar un producto en stock?")

if (confirmacion === true){

    const Proteinas = function(nombre,precio,cantidad){
        this.nombre= nombre
        this.precio = precio
        this.cantidad = cantidad
    }
                       
    let producto1= new Proteinas ("Wheyprotein", 21000, 20)
    let producto2= new Proteinas ("Ena", 19500, 26)
    let producto3= new Proteinas ("Bodyadvance", 31000, 45)
    let producto4= new Proteinas ("Gentech", 11500, 23)
    let producto5= new Proteinas ("Maverick", 59000, 13)
    let producto6= new Proteinas ("Prolac", 24800, 33)
    let producto7= new Proteinas ("BestWhey", 62000, 3)

let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7]

function filtrarProductos(){
    let palabraClave = prompt("Ingresa el producto que deseas buscar").trim().toUpperCase()
    let resultado = lista.filter((x)=> x.nombre.toUpperCase().includes(palabraClave.toUpperCase()))

    if (resultado.length > 0){
        console.table(resultado)
    }else{
     alert("No se encontro ninguna coincidencia con: "+ palabraClave)
    }

}

filtrarProductos()

}else{

window.confirm("Ingresando al sistema para agregar un producto al stock")

const Proteinas = function(nombre,precio,cantidad){
    this.nombre= nombre
    this.precio = precio
    this.cantidad = cantidad
}
                   
let producto1= new Proteinas ("Wheyprotein", 21000, 20)
let producto2= new Proteinas ("Ena", 19500, 26)
let producto3= new Proteinas ("Bodyadvance", 31000, 45)
let producto4= new Proteinas ("Gentech", 11500, 23)
let producto5= new Proteinas ("Maverick", 59000, 13)
let producto6= new Proteinas ("Prolac", 24800, 33)
let producto7= new Proteinas ("BestWhey", 62000, 3)

let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7]

function agregarProducto(){
    let nombre = prompt("ingresa el nombre del producto").toUpperCase()
    let precio = parseFloat(prompt("ingresa el precio del producto"))
    let cantidad = parseInt(prompt("ingresa el stock del producto"))

    if(isNaN(precio) || isNaN(cantidad) || nombre == "" ){
        alert("por favor ingresa datos validos")
        return
    }

    let producto= new Proteinas(nombre, precio, cantidad)

    if(lista.some((x)=>x.nombre === producto.nombre)){
        alert("El producto ya esta cargado en el sistema")
        return
    }

    lista.push(producto)
    console.table(lista)

    
}




agregarProducto()
}

