var bxS;
var cont;

function gerarQuadrados() {

    var input = parseInt(document.getElementById("inputEscolha").value);
    var container = document.getElementById("container-main");

    cont = 0;
    
    container.innerHTML = "";

    var idElement = 1;

    for (let i = 1; i <= input; i++) {
        for (let k = 1; k <= 3; k++) {
            var box = document.createElement("div");

            box.setAttribute("class", "box");
            box.setAttribute("id", idElement);

            box.addEventListener("click", AlterarBox);
            //opção de tornar função anônima

            box.innerHTML = idElement;
            // essa atribuição tá quebrando o id de cada box

            container.appendChild(box);
            idElement++;
        }

    }

    bxS = Math.floor(Math.random() * input) + 1;

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
