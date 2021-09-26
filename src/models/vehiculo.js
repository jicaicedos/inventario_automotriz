function iniciar() {
    console.log("Bienvenido al Sistema de Inventario Automotríz")

}

function mostrar() {
    // datos de vehículo
    let placa = document.getElementById("placa").value
    let marca = document.getElementById("marca").value
    let linea = document.getElementById("linea").value
    let modelo = document.getElementById("modelo").value
    let cilindrada = document.getElementById("cilindrada").value
    let color = document.getElementById("color").value

    // Obtenemos el valor seleccionado en tipos (publico/particular)
    let tipo = document.getElementById("tipo") // obtenemos toda la etiqueta
    // let seleccionado = tipo.options[tipo.selectedIndex] // Obtenemos <option value="1">Particular</option>
    // let valor = tipo.options[tipo.selectedIndex].value // Obtenemos: 1
    let tipoVehiculo = tipo.options[tipo.selectedIndex].text // Obtenemos: Particular

    let clase = document.getElementById("clase").value
    let propietario = document.getElementById("propietario").value
    let identificacion = document.getElementById("identificacion").value
    
    console.log("Datos: "+placa)
    console.log("Datos: "+marca)
    console.log("Datos: "+linea)
    console.log("Datos: "+modelo)
    console.log("Datos: "+cilindrada)
    console.log("Datos: "+color)
    console.log("Datos: "+tipoVehiculo)
    console.log("Datos: "+clase)
    console.log("Datos: "+propietario)
    console.log("Datos: "+identificacion)
}