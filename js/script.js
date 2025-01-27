var bxS;
var cont;

function gerarQuadrados() {

    var input = parseInt(document.getElementById("inputEscolha").value);
    var container = document.getElementById("container-main");

    cont = 0;
    
    container.innerHTML = ""; 
    // o que essa linha tá fazendo???

    for (let i = 1; i <= input; i++) {
        var box = document.createElement("div");

        box.setAttribute("class", "box");
        box.setAttribute("id", "bx" + i);

        box.addEventListener("click", AlterarBox);
        //opção de tornar função anônima

        box.innerHTML = i;

        container.appendChild(box);
    }

    bxS = Math.floor(Math.random() * input) + 1;

    //fiz pra ser de acordo com a quantidade
    if (input > 0 && input <= 10)  {
        setTimeout(function () {
            for (let i = 1; i <= input; i++) {
                var elemento = document.getElementById("bx" + i);
                if (elemento) elemento.remove();
                //esse if nao precisava mas achei legal implementar ele. Ele testa se o elemento existe ai se sim ele o apaga
            }
        }, 10000); //tempo em milesimos
    } 
}

function AlterarBox() {

    var span = document.getElementById("spanErro");

    this.style.backgroundColor = "red";

    var guardaID = this.getAttribute("id");

    if (guardaID == "bx" + bxS) {
        alert("🚀 Você acertou 🚀");
        this.style.backgroundColor = "green";
    } else {
        this.style.backgroundColor = "rgb(140, 3, 3)";
        cont++;
    }

    span.innerHTML = cont;
}