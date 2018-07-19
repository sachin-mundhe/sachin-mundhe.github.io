function generateTable(listOfItems) {
    var table = document.getElementById("cpyTable");
    var i = 0;
    for (i = 0; i < listOfItems.length; i++) {
        var row = table.insertRow(i);
        row.insertCell(0).innerHTML = listOfItems[i];
    }
}
