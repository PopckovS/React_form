$(document).ready(function () {
    let inputDate = $("input[name='date']");
    inputDate.datepicker({
        showButtonPanel: true,
        closeText: 'Reset',
        dateFormat: "yy-mm-dd",
        onClose: function (dateText, inst) {
            if ($(event.target).hasClass('ui-datepicker-close')) {
                $(inputDate).val('____/__/__');
            }
        },
        onSelect: function (selectedDateTime) {
        }
    });
});