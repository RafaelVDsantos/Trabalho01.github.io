function adiciona() {
    var novo = document.getElementById("addItem").value;

    var els = document.getElementById("elemento1");
    var eli = document.createElement("li");
    els.appendChild(eli);
    eli.innerHTML = novo;

    document.getElementById('addItem').value = "";
}

function remuve() {
    var remov = document.getElementById("addItem").value;

    var elementPai = document.getElementById("elemento1");
    var elementtFilho = document.getElementsByTagName("li");
    elementPai.removeChild(elementtFilho[remov - 1]);
}



function adiciona2() {
    var nodo = document.getElementById("add").value;

    var el = document.getElementById("elemento2");
    var eli = document.createElement("li");
    el.appendChild(eli);
    eli.innerHTML = nodo;

    document.getElementById('add').value = "";
}
function remuve2() {
    var remov = document.getElementById("add").value;

    var elementPai = document.getElementById("elemento2");
    var elementtFilho = document.getElementsByTagName("li");
    elementPai.removeChild(elementtFilho[remov - 1]);
}




function adiciona3() {
    var nodo = document.getElementById("addi").value;

    var el = document.getElementById("elemento3");
    var eli = document.createElement("li");
    el.appendChild(eli);
    eli.innerHTML = nodo;

    document.getElementById('addi').value = "";
}
function remuve3() {
    var remov = document.getElementById("addi").value;

    elementPai = document.getElementById("elemento3");
    var elementtFilho = document.getElementsByTagName("li");
    elementPai.removeChild(elementtFilho[remov - 1]);
}




function adiciona4() {
    var nodo = document.getElementById("addt").value;

    var el = document.getElementById("elemento4");
    var eli = document.createElement("li");
    el.appendChild(eli);
    eli.innerHTML = nodo;

    document.getElementById('addt').value = "";
}
function remuve4() {
    var remov = document.getElementById("addt").value;

    var elementPai = document.getElementById("elemento4");
    var elementtFilho = document.getElementsByTagName("li");
    elementPai.removeChild(elementtFilho[remov - 1]);
}