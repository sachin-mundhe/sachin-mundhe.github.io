function extractAssociatedShots(data) {
    //Item Numbers
    var temp = data.toUpperCase().trim().split(/ |\n/);

    var i = 0;
    var listOfAssociatedShots = [];

    for (i = 0; i < temp.length; i++) {
        var tempstr = temp[i].trim();
        if (tempstr != "") {

            if (tempstr.length <= 2) {
                listOfAssociatedShots.push(tempstr);
            } else if (tempstr.includes("-")) {

                //var indexOfHiphen = tempstr.indexOf("-");
                var rangeVertices = tempstr.split(/-/);
                var a = rangeVertices[0].trim();
                var b = rangeVertices[1].trim();

                if (a.length == 1)
                    if (b.length == 1) {
                        var rangeArray = getRange("", a, "", b);
                        console.log(rangeArray);
                    }
            }
        }
    }
}

function getRange(si1, si2, ei1, ei2) {
    return ["x", "y", "z"];
}




//        shotName = temp[i].replace(/shot/i, "").trim();
//        listOfShots.push(shotName);

//    console.log(listOfShots);
//    return listOfShots;
