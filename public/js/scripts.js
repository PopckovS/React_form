$(document).ready(function () {
    $('.select2').select2();



    // $.ajax('?r=admin/days/change', {
    //     type: 'post',
    //     data: {dayID: id, isCurrent: 1},
    //     dataType: 'json',
    //     success: function (data) {
    //         console.log(data);
    //         if (typeof data.error !== 'undefined') {
    //             $.jGrowl(data.error);
    //             return;
    //         }
    //         if (typeof data.errFields != 'undefined') {
    //             var fldMsgs = [];
    //             for (var fld in data.errFields) {
    //                 fldMsgs.push(data.errFields[fld]);
    //             }
    //             $.jGrowl('Некоторые поля введены с ошибками:<br />' + fldMsgs.join('\n<br />'));
    //             return;
    //         }
    //     }
    // });

});