/**
 * information() is called when the select that we have on the index page changes
 * 
 * This function creates a request for the json and translate it to a JSObject, when
 * the request is ready it calls to the print_portfolio function and send the Object
 */

function information() {
    var requestURL = document.querySelector('#list').value;

    var request = new XMLHttpRequest();

    request.open("GET", requestURL, true);
    request.response = "json";
    request.send();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);

            print_portfolio(data);
        }
    }
}