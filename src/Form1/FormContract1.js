import FormParent from "./FormParent";


/**
 * React Класс для формы отправки по генерации договоров.
 * FormParent - Родительский класс создает форму и наследуется от Примесей.
 * В этом классе мы инициалтзируем только начальные данные для длявных полей формы,
 * которые общие для любого типа договора, все отчальные поля генерятся в родительском классе.
 */
class FormContract1 extends FormParent
{
    constructor(props)
    {
        super(props);

        /** TODO Требуется получать начальные данные для инициализации  начальных значений из $_POST */
        /** Добавляем основные состояния, для общих полей формы */
        this.state = {
            name: 'Документ',            /** Название документа */
            date: '2020-08-14',          /** Дата договора */
            contractor_id: 'подрядчик',  /** Сторона: подрядчик */
            hirer_id: 'заказчик',        /** Сторонa: заказчик */
            price: '3000000',            /** Цена */
            payment_id: '',              /** Связанный платеж */
            type: '1',                   /** Тип договора */
        };

        /** TODO ополнительные состояния которые опчемуто недобавляются так как надо ! */
        this.state = {
            // TODO !!! Эти состояния относятся к 3-му типу договоров !!!
            //      !!! но они не добавляются своим методом,ак что я перенес их сюда !!!
            promoter: {
                number_of_hours: '',
                number_of_people: '',
                number_of_days: '',
                cost_per_hour: ''
            },
            supervisor: {
                number_of_hours: '',
                number_of_people: '',
                number_of_days: '',
                cost_per_hour: ''
            },
            coordination: {
                number_of_hours: '',
                number_of_people: '',
                number_of_days: '',
                cost_per_hour: ''
            },

            trends: '',
            concentration: '',
            state_competitive: '',
            barriers: '',
            customer_satisfaction: '',
            current_position: '',
            efficiency: '',

            adress: [],
            name_anketa: '',
            // TODO !!! Тут состояния заканчиваются !!!


            // TODO Сделай так чтобы тут была установка
            //  состояния для 1 -го типа документов по дефолту
        };
    }


}

export default FormContract1
