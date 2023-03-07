function imprimirtabuada(){
    var num = parseInt(document.getElementById("num").value);
    var resposta = document.getElementById("resposta");
    var tabuada = '';
    
    for (var i = 1; i <= 10; i++)  
        tabuada += num + " * " + i + " = " + num * i + "<br />";
        resposta.innerHTML = tabuada;
                console.log(tabuada);
            }
                
           