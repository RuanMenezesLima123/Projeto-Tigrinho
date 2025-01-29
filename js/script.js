var bxS;
var cont;

function gerarQuadrados() {

    var input = parseInt(document.getElementById("inputEscolha").value);
    // puxa o valor da quantidade de coluna
    var container = document.getElementById("container-main");
    var spanContaErros = document.getElementById("contaErros");

    cont = 0;
    
    container.innerHTML = ""; 
    // o que essa linha tá fazendo???

    var idElement = 1;

    for (let i = 1; i <= input; i++) {
        for(let k = 1; k <= 3; k++){
            
            var box = document.createElement("div");
            // aqui eu crio uma unidade de quadrado (div)

            box.setAttribute("class", "box");
            box.setAttribute("id", "bx" + idElement);

            box.addEventListener("click", alterarBox);
            //opção de tornar função anônima

            box.innerHTML = idElement;

            container.appendChild(box);
            idElement++;
        }
    }

    bxS = Math.floor(Math.random() * input) + 1;

    console.log(bxS);
    setInterval(function() {
        spanContaErros.innerHTML = bxS;
        bxS = Math.floor(Math.random() * input) + 1;
        console.log(bxS);
    }, 5000);

}

function alterarBox() {

    var span = document.getElementById("spanErro");

    this.style.backgroundColor = "red";

    var guardaID = this.getAttribute("id", "bx");

    if (guardaID == "bx" + bxS) {
        alert("🚀 Você acertou 🚀");
        this.style.backgroundColor = "green";
    } else {
        this.style.backgroundColor = "rgb(140, 3, 3)";
        cont++;
    }

    span.innerHTML = cont;
}
