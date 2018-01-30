// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // Your code goes here!
    var theHeight = $('#inputHeight').val();
    var theWidth = $('#inputWeight').val();
    var table = $("#pixelCanvas");

    var tbody = $('<tbody></tbody>');
    for (var i = 0; i < theHeight; i++) {
        var tr = $('<tr></tr>');
        for (var j = 0; j < theWidth; j++) {
            var td = $('<td id="id"></td>');
            tr.append(td);
        }
        tbody.append(tr);
    }
    table.append(tbody);
}

function clearTable() {
    $('tbody').remove();
}
//For color picker       
$(document).on('click', '#id', function () {
    var color = $('#colorPicker').val();
    $(this).css('background-color', color);
});