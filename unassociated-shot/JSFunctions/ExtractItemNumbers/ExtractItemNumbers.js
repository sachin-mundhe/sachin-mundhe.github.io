function extractShots(data) {
    //Item Numbers
    var temp1 = data;
    console.log(temp1);
    var temp = data.match(/shot [a-zA-Z][a-zA-Z]|shot [a-zA-Z]|shot/gi);

    console.log(temp);
    var i = 0;
    var listOfShots = [];
    for (i = 0; i < temp.length; i++) {
        shotName = temp[i].replace(/shot/i, "").trim();
        listOfShots.push(shotName);
    }
    console.log(listOfShots);
    return listOfShots;
}
