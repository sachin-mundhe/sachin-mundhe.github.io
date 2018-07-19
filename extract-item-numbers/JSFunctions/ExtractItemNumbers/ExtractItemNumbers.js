function extractItemNumbers(data) {
    //Item Numbers
    var temp = data.match(/\d\d\d\d\d\d|\d\d\d-\d\d\d/gi);
    console.log(temp);
    var i = 0;
    var listOfItems = [];
    for (i = 0; i < temp.length; i++) {
        itemNumber = temp[i].trim().replace(/-/, "");
        listOfItems.push(itemNumber);
    }
    return listOfItems;
}
