var id = 0;

function TaskList(contentId) {
    this.content = $(contentId);
}
TaskList.prototype = {
    initForm: function () {
        appendAll(this.content, cpuCheckBox, cpuTextRow, cpuDeleteAll, cpuList)
    },
    initEvent: function () {
        $('#textRow').on('keypress', function (event) {
            var listItemValue = $(this).val();
            if ((isEnter(event.keyCode)) && (isNotEmptyStrin(listItemValue))) {
                var checkBox = createListItemCheckBox();
                var text = createListItemText(listItemValue);
                var deleteButton = createListItemDeleteButton();
                var li = createListItem(checkBox, text, deleteButton);

                $('#list').append(li);

                id++;
            }
        });

        $('#deleteAll').on('click', deleteAll);

        $('#checkAll').on('click', checkAll);
    },
    init: function () {
        this.initForm();
        this.initEvent();
    }
};