function mainFunction() {

    var listOfItems = extractItemNumbers(document.getElementById("itemNumbers").value);

    //Clear table
    document.getElementById("cpyTable").innerHTML = "";

    //Create table
    generateTable(listOfItems);

    //Copy table to clipboard
    copyTable();
}
