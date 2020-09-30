$(document).ready(function () {
    let inputStart = $("#user_start_filter");
    let inputEnd = $("#user_end_filter");
    let userInput = $("#userID");

    inputStart.datepicker(
        {
            showButtonPanel: true,
            closeText: 'Reset',
            dateFormat: "yy-mm-dd",
            onClose: function (dateText, inst) {
                if ($(event.target).hasClass('ui-datepicker-close')) {
                    $(inputStart).val('____/__/__');
                    getFilteredUsers();
                }
                if (inputEnd.val() != '') {
                    var testStartDate = inputStart.datetimepicker('getDate');
                    var testEndDate = inputEnd.datetimepicker('getDate');
                    if (testStartDate > testEndDate)
                        inputEnd.datetimepicker('setDate', testStartDate);
                } else {
                    inputEnd.val(dateText);
                }
            },
            onSelect: function (selectedDateTime) {
                inputEnd.datetimepicker('option', 'minDate', inputStart.datetimepicker('getDate'));
                getFilteredUsers();
            }
        }
    );
    inputEnd.datepicker({
        showButtonPanel: true,
        closeText: 'Reset',
        dateFormat: "yy-mm-dd",
        onClose: function (dateText, inst) {
            if ($(event.target).hasClass('ui-datepicker-close')) {
                $(inputEnd).val('____/__/__');
                getFilteredUsers();
            }
            if (inputStart.val() != '') {
                var testStartDate = inputStart.datetimepicker('getDate');
                var testEndDate = inputEnd.datetimepicker('getDate');
                if (testStartDate > testEndDate)
                    inputStart.datetimepicker('setDate', testEndDate);
            } else {
                inputStart.val(dateText);
            }
        },
        onSelect: function (selectedDateTime) {
            inputStart.datetimepicker('option', 'maxDate', inputEnd.datetimepicker('getDate'));
            getFilteredUsers();
        }
    });

    userInput.on('change', function () {
        if ($(this).val() != '') {
            $(inputStart).val('____/__/__');
            $(inputEnd).val('____/__/__');
        }
        getFilteredUsers();
    });


    function getFilteredUsers() {
        $('.table-scroll').addClass('start');
        let filter = {start_date: $(inputStart).val(), expiry_date: $(inputEnd).val()};

        if($(inputStart).val() == '____/__/__') {
            filter.start_date = '';
        }
        if($(inputEnd).val() == '____/__/__') {
            filter.expiry_date = '';
        }

        if(userInput.val() != '') {
            filter.userID = userInput.val();
        }

        $.ajax('/user/filter', {
            type: 'post',
            datatype: 'json',
            data: {
                filter: filter,
            },
            success: function(data) {
                //data = JSON.parse(data);
                //console.log(data);
                if (typeof data.error !== 'undefined')
                {
                    $.jGrowl(data.error);
                    $('.table-scroll').removeClass('start');
                    return;
                }
                $(".table-scroll").html(data.table);
                InitVlink();
                $('.table-scroll').removeClass('start');
            }
        });
        return false;
    }

});