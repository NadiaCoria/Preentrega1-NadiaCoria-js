let EntradasDisponibles = 200
let PrecioEntrada = 75

function saludar(){
    alert( "Bienvenidos");
}

saludar()

function ReservarEntradas(){
    let CantidadEntradas= parseInt(prompt("Ingrese la cantidad de entradas a reservar"));
    if (CantidadEntradas <= 0){
        alert( "Lo siento, la cantidad debe ser mayor a cero");
        return;
    }
    if (CantidadEntradas > EntradasDisponibles){
        alert("Entradas insuficientes");
        return;
    }

}

ReservarEntradas();

let CostoTotal= CantidadEntradas*PrecioEntrada;
let Confirmacion= confirm("Esta seguro de reservar ${CantidadEntradas} entradas por el total de $${CostoTotal}?");
if (Confirmacion){
    alert("¡Las entradas ya son tuyas!");
} else{
    alert("Reserva CANCELADA.");
}
