/** Конструктор класса Формы */
constructor(props)
{
    super(props);

    /** Установка состояния для управляемых компонентов
     * Тут перечислены основные поля, общие для любого типа Договора */
    this.state = {
        name: 'Документ',   /** Название документа */
        date: '2020-08-14', /** Дата договора */
        contractor_id: '',  /** Сторона: подрядчик */
        hirer_id: '',       /** Сторонa: заказчик */
        price: '3000000',   /** Цена */
        payment_id: '',     /** Связанный платеж */

        /** Тип договора */
        type: {
            1: "Договор №1",
            2: 'Договор №2',
            3: 'Договор №3',
            4: 'Договор №4'
        },

        /** Обьект с ошибками валидации полей */
        formErrors: {
            name: '',
            date: '',
            contractor_id: '',
            hirer_id: '',
            price: '',
            payment_id: '',
            type: '',
        },

        /** Состояние валидации полей  */
        statusValid: {
            nameValid: false,
            dateValid: false,
            contractor_idValid: false,
            hirer_idValid: false,
            priceValid: false,
            payment_idValid: false,
            typeValid: false,
        },

        /** Активность кнопки отправки формы, даем True после проверки всех полей */
        formValid: false
    }

    /** Связка методов класса для обработки полей формы при вводе */
    this.handleUserInput = this.handleUserInput.bind(this);
}