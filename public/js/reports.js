$(document).ready(function () {

    let dateReport = $('input[name="date"]');
    dateReport.datepicker({
        showButtonPanel: true,
        closeText: 'Reset',
        dateFormat: "yy-mm-dd",
        onClose: function (dateText, inst) {
            if ($(event.target).hasClass('ui-datepicker-close')) {
                $(dateReport).val('____/__/__');
            }
        },
        onSelect: function (selectedDateTime) {
        }
    });

    let reportType = $('select[name="type"] option:selected').val();
    /**
     * изменение полей для валидации при смене типа генерируемого отчета
     */
    $('select[name="type"]').on('change', function () {
        reportType = $('select[name="type"] option:selected').val();
        if (reportType == 1) {
            $('.checkboxesdata1').show();
            $('.checkboxesdata2').hide();
            $('.checkboxesdata3').hide();
            $('.checkboxesdata4').hide();
            reportType = 2;
        } else if (reportType == 2) {
            $('.checkboxesdata1').hide();
            $('.checkboxesdata2').show();
            $('.checkboxesdata3').hide();
            $('.checkboxesdata4').hide();
        }else if (reportType == 3) {
            $('.checkboxesdata1').hide();
            $('.checkboxesdata2').hide();
            $('.checkboxesdata3').show();
            $('.checkboxesdata4').hide();
        }else if (reportType == 4) {
            $('.checkboxesdata1').hide();
            $('.checkboxesdata2').hide();
            $('.checkboxesdata3').hide();
            $('.checkboxesdata4').show();
        }
        reportType = $('option:selected', this).val();
    });

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
            "mat_model[]": {
                required: {
                    depends: function (element) {
                        return reportType == 1;
                    }
                }
            },
            "func_activation[]": {
                required: {
                    depends: function (element) {
                        return reportType == 1;
                    }
                }
            },
            "algoritm[]": {
                required: {
                    depends: function (element) {
                        return reportType == 1;
                    }
                }
            },
            "metrics[]": {
                required: {
                    depends: function (element) {
                        return reportType == 1;
                    }
                }
            },
            "services[]": {
                multipleSelection: {
                    depends: function (element) {
                        return reportType == 1;
                    }
                }
            },
            "equipment_composition[]": {
                required: {
                    depends: function (element) {
                        return reportType == 1;
                    }
                }
            },
            "software[]": {
                required: {
                    depends: function (element) {
                        return reportType == 1;
                    }
                }
            },
            "library[]": {
                required: {
                    depends: function (element) {
                        return reportType == 1;
                    }
                }
            },
            "tasks[]": {
                required: {
                    depends: function (element) {
                        return reportType == 2;
                    }
                }
            },
        },
        submitHandler: function () {
            // console.log();
            let form = $('#generate-report');
            $(form).ajaxSubmit({
                url: '/reports/generate',
                method: 'post',
                beforeSubmit: function (data) {
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
        console.log('query');
        $.ajax({
            url: '/reports/getdata',
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