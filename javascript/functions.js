/**
 * print_portfolio() receive a JavaScript Object with the information
 * of the json files and it print the information
 * 
 * Here we use the DOM to update our web with the output
 */
function print_portfolio(jsonObj) {
    var myDiv = document.querySelector('#res');
    var myH2 = document.createElement('h2');
    var myList = document.createElement('ul');

    myDiv.innerHTML = "";
    myH2.textContent = jsonObj.name;
    myDiv.appendChild(myH2);

    var myListItem = document.createElement('li');
    myListItem.textContent = "Children: ";
    myList.appendChild(myListItem);
    if (jsonObj.children.length != 0) {
        for (var i = 0; i < jsonObj.children.length; i++) {
            children1 = jsonObj.children;

            var myNewList1 = document.createElement('ul');
            myList.appendChild(myNewList1);

            var myListItem = document.createElement('li');
            myListItem.textContent = `Name: ${children1[i].name}`;
            myNewList1.appendChild(myListItem);

            var myListItem = document.createElement('li');
            myListItem.textContent = "Children: ";
            myNewList1.appendChild(myListItem);

            if (children1[i].children.length != 0) {
                for (var j = 0; j < children1[i].children.length; j++) {
                    children2 = children1[i].children;
                    var myNewList2 = document.createElement('ul');
                    myNewList1.appendChild(myNewList2);

                    var myListItem = document.createElement('li');
                    myListItem.textContent = `Name: ${children2[j].name}`;
                    myNewList2.appendChild(myListItem);

                    var myListItem = document.createElement('li');
                    myListItem.textContent = "Children: ";
                    myNewList2.appendChild(myListItem);

                    if (children2[j].children.length != 0) {
                        for (var o = 0; o < children2[j].children.length; o++) {
                            children3 = children2[j].children;

                            var myNewList3 = document.createElement('ul');
                            myNewList2.appendChild(myNewList3);

                            var myListItem = document.createElement('li');
                            myListItem.textContent = `Name: ${children3[o].name}`;
                            myNewList3.appendChild(myListItem);

                            var myListItem = document.createElement('li');
                            myListItem.textContent = "Children: ";
                            myNewList3.appendChild(myListItem);

                            if (children3[o].children.length != 0) {
                                for (var k = 0; k < children3[o].children.length; k++) {
                                    children4 = children3[o].children;

                                    var myNewList4 = document.createElement('ul');
                                    myNewList3.appendChild(myNewList4);

                                    var myListItem = document.createElement('li');
                                    myListItem.textContent = `Name: ${children4[k].name}`;
                                    myNewList4.appendChild(myListItem);

                                    var myListItem = document.createElement('li');
                                    myListItem.textContent = "Children: ";
                                    myNewList4.appendChild(myListItem);

                                    if (children4[k].children.length != 0) {
                                        for (var p = 0; p < children4[k].children.length; p++) {
                                            children5 = children4[k].children;

                                            var myNewList5 = document.createElement('ul');
                                            myNewList4.appendChild(myNewList5);

                                            var myListItem = document.createElement('li');
                                            myListItem.textContent = `Name: ${children5[p].name}`;
                                            myNewList4.appendChild(myListItem);

                                            var myListItem = document.createElement('li');
                                            myListItem.textContent = "Children: ";
                                            myNewList4.appendChild(myListItem);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    myDiv.appendChild(myList);
}