console.log("Hola");

function mostrar() {
    console.log("Hola 2");

    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "Portfolio1.json", true);

    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState = 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
}