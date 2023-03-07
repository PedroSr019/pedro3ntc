function calcular(){
    var c = parseFloat(document.getElementById("codigo").value);
    var h = parseFloat(document.getElementById("horas").value);
    var e
    var s = h * 10.00
    var st
    if (h > 50){
        e = ((h - 50)* 20);
        st = s + e
        alert("Salario total: "+ st +", Salario recebido por horas extras: " + e + ", Horas trabalhadas: " + h);
    }
    else{
        st = s
        alert("Salario total: " + st + ", Horas trabalhadas: " + h);
    }
}