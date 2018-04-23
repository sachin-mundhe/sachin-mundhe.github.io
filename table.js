/*
var tblObj = document.getElementById("myTable");
var updateObj1 = document.getElementById("updateInfo1");
updateObj1.innerHTML = tblObj.rows.length;
*/

var info;

function addRowHandlers(el) {

    var body = document.body,
        range, sel;
    if (document.createRange && window.getSelection) {
        range = document.createRange();
        sel = window.getSelection();
        sel.removeAllRanges();
        try {
            range.selectNodeContents(el);
            sel.addRange(range);
            console.log(range);

        } catch (e) {
            range.selectNode(el);
            sel.addRange(range);
        }
    } else if (body.createTextRange) {
        range = body.createTextRange();
        range.moveToElementText(el);
        range.select();
        console.log("OST");
    }

    document.execCommand("Copy");


    //    console.log(document.getElementById("myTable"));

    //    var textRange = document.body.createTextRange();
    //    textRange.moveToElementText(document.getElementById("myTable"));
    //    textRange.execCommand("Copy");


    //            function(row) 
    //            {
    //                return function() { 
    //                                        var cell = row.getElementsByTagName("td")[0];
    //                                        var id = cell.innerHTML;
    //                                        alert("id:" + id);
    //                                 };
    //            };
    //    
    //    for (i = 0; i < rows.length; i++) {
    //        console.log(i); 
    //        var currentRow = table.rows[i];
    //        currentRow.onclick = createClickHandler(currentRow);
    //    }
}

//window.onload = addRowHandlers();
