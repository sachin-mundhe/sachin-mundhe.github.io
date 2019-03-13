function mainFunction() {

    var listOfItems = [];
    
    listOfItems = extractItemNumbers(document.getElementById("itemNumbers").value);

    //Clear table
    // document.getElementById("cpyTable").innerHTML = "";
    
   // console.log(listOfItems);

    //Create table
    generateTable(listOfItems);

//    console.log(listOfItems);

    //Copy table to clipboard
    copyTable();
    updateData(listOfItems.length);
}


function imageryTeam() {
    var iListOfItems = [];
   // console.log("Before Extract");
    
    //console.log(document.getElementById("itemNumbers").value);
    
    iListOfItems = iExtractItemNumbers(document.getElementById("itemNumbers").value);
    
    //console.log(iListOfItems);
    //console.log("After Extract");
    
    generateTable(iListOfItems);
    copyTable();
    updateData(iListOfItems.length);

}

