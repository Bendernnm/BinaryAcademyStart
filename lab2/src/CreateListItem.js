function createListItemCheckBox() {
    var checkBox = $(listItemCheckBox)
        .attr('id', ('listItemCheckBox' + id));
    checkBox.on('click', function () {
        if ($(this).is(':checked')) {
            $(this).next()
                .css('text-decoration', 'line-through')
                .css('background-color', 'Red');
        }
        else {
            $(this).next()
                .css('text-decoration', 'none')
                .css('background-color', 'LightGreen');
        }
    });
    return checkBox;
}

function createListItemDeleteButton() {
    var deleteButton = $(listItemDeleteBtn)
        .attr('id', ('listItemDeleteBtn' + id))
        .hide();
    deleteButton.on('click', function () {
        $(this).parent().remove();
    });

    return deleteButton;
}

function createListItemText(listItemValue) {
    var text = $(listItemText)
        .val(listItemValue)
        .attr('id', ('listItemText' + id))
        .css('background-color', 'LightGreen');
    text.on('dblclick', function () {
        $(this).attr('prevValue', $(this).val());
        $(this).prop('readonly', false);
    });
    text.on('blur', function () {
        $(this).prop('readonly', true);
    });
    text.on('keypress', function (event) {
        if (isESC(event.keyCode)) {
            $(this)
                .val($(this).attr('prevValue'))
                .prop('readonly', true);
        }
        if (isEnter(event.keyCode)) {
            $(this).prop('readonly', true);
        }
    });

    return text;
}

function createListItem(checkBox, text, deleteButton) {
    var li = $(listItemLi)
        .attr('id', ('listItem' + id));
    appendAll(li, checkBox, text, deleteButton);

    li.hover(function () {
        $(this).children(':button').show();
    }, function () {
        $(this).children(':button').hide();
    });

    return li;
}