/**
*  Локализация и дополнительные методы
 * Translated default messages for the jQuery validation plugin.
 * Language: RU
 */
jQuery.extend(jQuery.validator.messages, {
        required: "Это поле необходимо заполнить.",
        remote: "Пожалуйста, введите правильное значение.",
        email: "Пожалуйста, введите корректный адрес электронной почты.",
        url: "Пожалуйста, введите корректный URL.",
        date: "Пожалуйста, введите корректную дату.",
        dateDE: "Пожалуйста, введите корректную дату.",
        dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
        number: "Пожалуйста, введите число.",
        digits: "Пожалуйста, вводите только цифры.",
        creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
        equalTo: "Пожалуйста, введите такое же значение ещё раз.",
        accept: "Пожалуйста, выберите файл с правильным расширением.",
        maxlength: jQuery.format("Пожалуйста, введите не больше {0} символов."),
        minlength: jQuery.format("Пожалуйста, введите не меньше {0} символов."),
        rangelength: jQuery.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
        range: jQuery.format("Пожалуйста, введите число от {0} до {1}."),
        max: jQuery.format("Пожалуйста, введите число, меньшее или равное {0}."),
        min: jQuery.format("Пожалуйста, введите число, большее или равное {0}.")
});

jQuery.validator.addMethod("validate-phone", function(value, element) {
	return this.optional(element) || !/[^\d\-\(\)\+ ]/.test(value);
}, "Должны присутствовать только цифры и дефис");

jQuery.validator.addMethod("multipleSelection", function (value, element) {
        let count = $(element).find('option:selected').length;
        return count >= 2;
}, `Нужно выбрать не менее 2 опций`);

jQuery.validator.addMethod("money", function (value, element) {
        return this.optional(element) || /^\d+(\.\d{0,2})?$/.test(value);
}, `Некорректный денежный формат`);

jQuery.validator.addMethod( "pattern", function( value, element, param ) {
        if ( this.optional( element ) ) {
                return true;
        }
        if ( typeof param === "string" ) {
                param = new RegExp( "^(?:" + param + ")$" );
        }
        return param.test( value );
}, "Invalid format." );