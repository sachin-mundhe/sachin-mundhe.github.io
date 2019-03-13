function extractItemNumbers(data) {
    //Item Numbers
    var res = data.replace(/st\d\d\d\d\d\d|es\d\d\d\d\d\d/gi, " ");
    var temp = res.match(/\d\d\d\d\d\d|\d\d\d-\d\d\d/gi);
   // console.log(temp);
    var i = 0;
    var listOfItems = [];
    for (i = 0; i < temp.length; i++) {
        itemNumber = temp[i].trim().replace(/-/, "");
        listOfItems.push(itemNumber);
    }
    return listOfItems;
}


function iExtractItemNumbers(data) {
    
    console.log("In Extract fun", data);
    
    //Item Numbers
    var iRes = data.replace(/st\d\d\d\d\d\d|es\d\d\d\d\d\d|esl\d\d\d\d\d/gi, " ");
   // console.log("iRes ", iRes);
    var iTemp = iRes.match(/\d\d\d\d\d\d|\d\d\d-\d\d\d|l\d\d\d\d\d|l\d\d-\d\d\d/gi);
    //console.log("iTemp",iTemp);
    var i = 0;
    var iListOfItems = [];
    for (i = 0; i < iTemp.length; i++) {
        itemNumber = iTemp[i].trim().replace(/-/, "");
        iListOfItems.push(itemNumber);
    }
    return iListOfItems;
}

//
//123456
//456789
//145-7956
//4845-556
//l154356
//Esl48856
//l1234
//l67890
//l456789