function generateTable(listOfItems) {
    var table = document.getElementById("cpyTable");
    var i = 0;
    
    table.innerHTML = null;
    
    for (i = 0; i < listOfItems.length; i++) {
        
        //console.log("Inside gen table\n");
        //console.log("i = ", i);
        //console.log("Data = ", listOfItems[i]);

        var row = table.insertRow(i);
        row.insertCell(0).innerHTML = listOfItems[i];
    }
}
