$(document).ready(function () {
    function init() {
        if (localStorage["name"]) {
            $('#name').val(localStorage["name"]);
        }
    }
    init();
});

$('.name').keyup(function () {
    localStorage[$(this).attr('name')] = $(this).val();
});

$('#form').submit(function() {
    localStorage.clear();
});