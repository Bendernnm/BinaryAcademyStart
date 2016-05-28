function checkAll() {
    if ($(this).is(':checked')) {
        checkAllTrue();
    }
    else {
        checkAllFalse();
    }
}

function checkAllTrue() {
    $('li').children(':checkbox')
        .prop('checked', true)
        .end()
        .children(':text')
        .css('text-decoration', 'line-through')
        .css('background-color', 'Red');
}

function checkAllFalse() {
    $('li').children(':checkbox')
        .prop('checked', false)
        .end()
        .children(':text')
        .css('text-decoration', 'none')
        .css('background-color', 'LightGreen');
}

function deleteAll() {
    $('li').remove();
}