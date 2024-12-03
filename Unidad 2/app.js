function sumar(){
    const x = parseInt(document.getElementById("num1").value);
    const y = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = x+y;
}


function restar(){
    const x = parseInt(document.getElementById("num1").value);
    const y = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = x-y;
}


function multiplicar(){
    const x = parseInt(document.getElementById("num1").value);
    const y = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = x*y;
}


function dividir(){
    const x = parseInt(document.getElementById("num1").value);
    const y = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = x/y;
}
