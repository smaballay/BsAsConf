function resumen(){
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let categoria = document.getElementById("categoria").value;
    let costoTotal = cantidad * 200;

    if (categoria == "Estudiante"){
        costoTotal*=0.2;
    } else if (categoria == "Trainee"){
        costoTotal*=0.5;
    } else {
        costoTotal*=0.85;
    }

    document.getElementById("costoTotal").value = "Total a Pagar: $" + costoTotal;
}