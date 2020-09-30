$(document).ready(function () {
    let inputStart = $('#add-contract input[name="date"], #edit-contract input[name="date"]');
    let inputEnd = $('#add-contract input[name="term"], #edit-contract input[name="term"]');

    inputStart.datepicker(
        {
            showButtonPanel: true,
            closeText: 'Reset',
            dateFormat: "yy-mm-dd",
            onClose: function (dateText, inst) {
                if ($(event.target).hasClass('ui-datepicker-close')) {
                    $(inputStart).val('____/__/__');
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
        }
    });

    let contactDate = $("#generate-report input[name='date']");
    contactDate.datepicker({
        showButtonPanel: true,
        closeText: 'Reset',
        dateFormat: "yy-mm-dd",
        onClose: function (dateText, inst) {
            if ($(event.target).hasClass('ui-datepicker-close')) {
                $(contactDate).val('____/__/__');
            }
        },
        onSelect: function (selectedDateTime) {
        }
    });

    /**
     * Меняем данные при выборе другого договора
     */
    // $('select[name="contract_id"]').on('change', function () {
    //     $.ajax({
    //         url: '/contracts/getcontractdata',
    //         dataType: 'json',
    //         type: 'POST',
    //         data: {id: $('option:selected', this).val()},
    //         success: function (data) {
    //             if (data.result === 'error') {
    //                 $.jGrowl(data.msg);
    //             }
    //             console.log(data);
    //             $('input[name="date"]').val(data.contract.date);
    //             $(`select[name="contractor_id"]`).val(data.contract.contractor_id);
    //             $('select[name="contractor_id"]').select2().trigger('change');
    //
    //             $('input[name="price"]').val(data.payment.amount);
    //
    //             $(`select[name="hirer_id"]`).val(data.contract.hirer_id);
    //             $('select[name="hirer_id"]').select2().trigger('change');
    //         },
    //         error: function (data) {
    //             $.jGrowl(data.error);
    //             console.log(data);
    //         }
    //     });
    // });

    /**
     * Меняем данные при выборе другого платежа
     */
    // $('select[name="payment_id"]').on('change', function () {
    //     $.ajax({
    //         url: '/contracts/getcontractdata',
    //         dataType: 'json',
    //         type: 'POST',
    //         data: {payment_id: $('option:selected', this).val()},
    //         success: function (data) {
    //             console.log(data);
    //             $('input[name="date"]').val(data.contract.date);
    //             $(`select[name="contractor_id"]`).val(data.contract.contractor_id);
    //             $('select[name="contractor_id"]').select2().trigger('change');
    //
    //             $('input[name="price"]').val(data.payment.amount);
    //
    //             $(`select[name="hirer_id"]`).val(data.contract.hirer_id);
    //             $('select[name="hirer_id"]').select2().trigger('change');
    //         },
    //         error: function (data) {
    //             $.jGrowl(data.error);
    //             console.log(data);
    //         }
    //     });
    // });

    /** Находим поле формы для типа Договора. */
    let contractType = $('select[name="type"] option:selected').val();

    /** Изменяем поля для валидации при смене типа генерируемого документа */
    $('select[name="type"]').on('change', function () {

        /** Получаем тукущее значение вдял поля: Тип Документа */
        contractType = $('select[name="type"] option:selected').val();

        /** Преключаем табы */
        if (contractType == 1) {
            $('.checkboxesdata1').show();
            $('.checkboxesdata2').hide();
            $('.checkboxesdata3').hide();
            $('.checkboxesdata4').hide();
            contractType = 2;
        } else if (contractType == 2) {
            $('.checkboxesdata1').hide();
            $('.checkboxesdata2').show();
            $('.checkboxesdata3').hide();
            $('.checkboxesdata4').hide();
        }else if (contractType == 3) {
            $('.checkboxesdata1').hide();
            $('.checkboxesdata2').hide();
            $('.checkboxesdata3').show();
            $('.checkboxesdata4').hide();
        }else if (contractType == 4) {
            $('.checkboxesdata1').hide();
            $('.checkboxesdata2').hide();
            $('.checkboxesdata3').hide();
            $('.checkboxesdata4').show();
        }

        contractType = $('option:selected', this).val();
    });





/** ================ ВАЛИДАЦИЯ ФОРМЫ ГЕНЕРАЦИИ ДОГОВОРА ================= */
    $('#generate-report').validate({
        debug: true,
        errorClass: 'error-validate',
        ignore: '*:not([name])',
        rules: {
            date: {
                required: true,
                date: true,
            },
            price: {
                required: true,
                min: 1,
                money: true
            },
            /** Валидция полей 1-го типа Документа */
            /**------------------------------------*/
            "mat_model[]": {
                required: {
                    depends: function (element) {
                        return contractType == 1;
                    }
                }
            },
            "func_activation[]": {
                required: {
                    depends: function (element) {
                        return contractType == 1;
                    }
                }
            },
            "algoritm[]": {
                required: {
                    depends: function (element) {
                        return contractType == 1;
                    }
                }
            },
            "metrics[]": {
                required: {
                    depends: function (element) {
                        return contractType == 1;
                    }
                }
            },
            "services[]": {
                multipleSelection: {
                    depends: function (element) {
                        return contractType == 1;
                    }
                }
            },
            "equipment_composition[]": {
                required: {
                    depends: function (element) {
                        return contractType == 1;
                    }
                }
            },
            "software[]": {
                required: {
                    depends: function (element) {
                        return contractType == 1;
                    }
                }
            },
            "library[]": {
                required: {
                    depends: function (element) {
                        return contractType == 1;
                    }
                }
            },
            /** Валидция полей 2-го типа Документа */
            /**------------------------------------*/
            "tasks[]": {
                required: {
                    depends: function (element) {
                        return contractType == 2;
                    }
                }
            },
            /** Валидция полей 3-го типа Документа */
            /**------------------------------------*/
            "promoter[number_of_hours]":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "promoter[number_of_points]":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "promoter[number_of_people]":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "promoter[number_of_days]":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "promoter[cost_per_hour]":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "supervisor[number_of_hours]":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "supervisor[number_of_points]":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "supervisor[number_of_people]":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "supervisor[number_of_days]":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "supervisor[cost_per_hour]":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "coordination[number_of_hours]":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "coordination[number_of_points]":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "coordination[number_of_people]":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "coordination[number_of_days]":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "coordination[cost_per_hour]":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "trends":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "concentration":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "state_competitive":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "barriers":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "customer_satisfaction":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "current_position":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            "efficiency":{
                required: {
                    depends: function (element) {
                        return contractType == 3;
                    }
                }
            },
            /**------------------------------------*/
        },
        submitHandler: function () {

            let form = $('#generate-report');
            $(form).ajaxSubmit({
                url: '/contracts/generate',
                method: 'post',
                beforeSubmit: function (data) {
                    console.log(data);
                },
                success: function (data) {
                    if (typeof data.errFields != 'undefined') {
                        // var fldMsgs = [];
                        for (var fld in data.errFields) {
                            $(form).find('[name="' + fld + '"]').after(`<label class="error-validate error-validate-backend">${data.errFields[fld]}</label>`);
                        }
                        setTimeout(() => $(".error-validate-backend").remove(), 5000);
                    }
                    if (typeof data.error != 'undefined' && data.error !== '') {
                        $.jGrowl(data.message);
                    } else if (data == 'ok' || (data.msg == 'ok')) {
                        $.jGrowl('Успешно сохранено');
                    }
                    if (typeof data.redirect != 'undefined') {
                        window.location.href = data.redirect;
                    }
                    if (typeof data.reload != 'undefined') {
                        window.location.reload();
                    }
                    console.log(data);
                },
                dataType: "json"
            });
        }
    });

    /**
     * если находимся на странице с редактором, подгружаем контент
     */
    let path = window.location.pathname.split('/');
    if (path.includes('editgenerated')){
        $.ajax({
            url: '/contracts/getdata',
            data: {filepath: $('input[name="docxFilepath"]').val()},
            type: 'post',
            dataType: 'html',
            success: function (data) {
                var editor = new Jodit('#editor');
                editor.value = data;
            }
        });
    }
});
