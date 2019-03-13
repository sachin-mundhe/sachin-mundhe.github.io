function updateData(count) {
    
    var ref = firebase.database().ref('statics/totalProcessed').once("value",snapshot => {
    if (snapshot.exists()){
        var currentCount = snapshot.val();
        var totalProcessed = currentCount + count;
        firebase.database().ref('statics/totalProcessed').set(totalProcessed);
    }
    else {
        console.log("Sorry something went wrong...:-()");
    }
});
    
}