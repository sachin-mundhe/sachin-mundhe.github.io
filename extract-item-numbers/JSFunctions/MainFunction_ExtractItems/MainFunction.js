function mainFunction() {

    var listOfItems = extractItemNumbers(document.getElementById("itemNumbers").value);

    //Clear table
    // document.getElementById("cpyTable").innerHTML = "";

    //Create table
    generateTable(listOfItems);

    console.log(listOfItems);

    //Copy table to clipboard
    copyTable();
}
