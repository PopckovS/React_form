$(document).ready(function () {
    /* Проверка для создания документа */
    $("#add-contract, #edit-contract").validate({
        // debug: true,
        ignore: '*:not([name])',
        errorClass: 'error-validate',
        // errorElement: "span",
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            number: {
                // required: true,
                maxlength: 50,
                pattern: "[а-яА-ЯёЁa-zA-Z\\/\\d]+",
            },
            date: {
                required: true,
                date: true,
            },
            term: {
                required: true,
                date: true,
            }
        },
        messages: {
            number: {
                pattern: 'Формат поля: латинский и русский алфавит, /, цифры',
            },
        },
        submitHandler: function (form) {
            $(form).ajaxSubmit({
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
                        $.jGrowl(data.error);
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

    /* Проверка для создания пользователя */
    $("#add-user, #edit-user").validate({
        debug: true,
        ignore: '*:not([name])',
        errorClass: 'error-validate',
        // errorElement: "span",
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            login: {
                required: true,
                maxlength: 50,
            },
            password: {
                required: true,
                equalTo: '[name="password2"]',
            },
            password2: {
                required: true,
                equalTo: '[name="password"]',
            },
            email: {
                required: true,
                email: true,
            },
            phone: {
                required: true,
                "validate-phone": true,
            }
        },
        messages: {
            password: {
                equalTo: 'Пароли дожны совпадать'
            },
            password2: {
                equalTo: 'Пароли дожны совпадать'
            }
        },
        submitHandler: function (form) {
            $(form).ajaxSubmit({
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
                        $.jGrowl(data.error);
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

    /* Проверка для создания и редактирования исполнителя и заказчика*/
    $("#add-contractor, #edit-contractor, #add-hirer, #edit-hirer").validate({
        ignore: '*:not([name])',
        errorClass: 'error-validate',
        // errorElement: "span",
        rules: {
            name: {
                required: true,
                minlength: 2,
            },
            fio: {
                required: true,
                maxlength: 128,
            },
            address: {
                required: true,
                maxlength: 128,
            },
            INN: {
                required: true,
                digits: true,
                maxlength: 25,
                minlength: 5,
            },
            KPP: {
                required: true,
                digits: true,
                maxlength: 25,
                minlength: 5,
            },
            OGRN: {
                required: true,
                digits: true,
                maxlength: 25,
                minlength: 5,
            },
            checking_account: {
                required: true,
                digits: true,
                maxlength: 25,
                minlength: 5,
            },
            correspondent_account: {
                required: true,
                digits: true,
                maxlength: 25,
                minlength: 5,
            },
            BIC: {
                required: true,
                digits: true,
                maxlength: 25,
                minlength: 5,
            },
        },
        messages: {},
        submitHandler: function (form) {
            $(form).ajaxSubmit({
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
                        $.jGrowl(data.error);
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


    /* Проверка для создания и редактирования платежа */
    $("#add-payment, #edit-payment").validate({
        debug: true,
        ignore: '*:not([name])',
        errorClass: 'error-validate',
        // errorElement: "span",
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            number: {
                // required: true,
                maxlength: 50,
                pattern: "[а-яА-ЯёЁa-zA-Z\\/\\d]+",
            },
            date: {
                required: true,
                date: true,
            },
            invoice_number: {
                required: true,
                digits: true,
            },
            amount: {
                required: true,
                money: true,
                min: 1,
            }
        },
        messages: {
            number: {
                pattern: 'Формат поля: латинский и русский алфавит, /, цифры',
            },
        },
        submitHandler: function (form) {
            $(form).ajaxSubmit({
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
                        $.jGrowl(data.error);
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

    /* Проверка для создания и редактирования отчета */
    $("#add-report, #edit-report").validate({
        debug: true,
        ignore: '*:not([name])',
        errorClass: 'error-validate',
        // errorElement: "span",
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            number: {
                required: true,
                maxlength: 50,
                pattern: "[а-яА-ЯёЁa-zA-Z\\/\\d]+",
            },
            date: {
                required: true,
                date: true,
            },
        },
        messages: {
            number: {
                pattern: 'Формат поля: латинский и русский алфавит, /, цифры',
            },
        },
        submitHandler: function (form) {
            $(form).ajaxSubmit({
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
                        $.jGrowl(data.error);
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
});