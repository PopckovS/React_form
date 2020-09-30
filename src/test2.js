import React from 'react';
import ReactDOM from 'react-dom';

/** Подключаем Компоненты для реддеринга полей формы отправки */
import Select from "./components/select";
import Input from "./components/input";

/** Подключаем стили Bootstrap для стилизации формы отправки */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class Form extends React.Component
{

    /** Конструктор класса Формы */
    constructor(props)
    {
        super(props);

        /** Установка состояния для управляемых компонентов
         * Тут перечислены основные поля, общие для любого типа Договора */
        this.state = {
            name: 'Документ',            /** Название документа */
            date: '2020-08-14',          /** Дата договора */
            contractor_id: 'подрядчик',  /** Сторона: подрядчик */
            hirer_id: 'заказчик',        /** Сторонa: заказчик */
            price: '3000000',            /** Цена */
            payment_id: '',              /** Связанный платеж */
            type: '1',                   /** Тип договора */
        }

        /** Связываем методы класса чтобы их можно было импользовать */
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleUserSelect = this.handleUserSelect.bind(this);
        this.handleUserMultiSelect = this.handleUserMultiSelect.bind(this);
    }






    /** Обработка поля Input */
    handleUserInput(event)
    {
        let name = event.target.name;
        let value = event.target.value;

        this.setState(
            {[name]: value},
            console.log(this.state)
        )
    }



    /** Обработка селектора */
    handleUserSelect(event)
    {
        let name = event.target.name;
        let value = event.target.value;


        this.setState(
            {[name]: value},
            console.log(this.state)
        )
    }



    /** Обработка Мульти-селектора */
    handleUserMultiSelect(event)
    {
        let {name, value, type, selectedOptions} = event.target;

        value = [...selectedOptions].map(o => o.value)

        this.setState(
            {[name]: value},
            console.log(this.state)
        )
    }



    /**  */
    // shouldComponentUpdate(){}



    /** При монтировании компонента */
    componentDidMount()
    {
    }

    /** При демонтаже компонента */
    componentWillUnmount()
    {
    }




    // /** ВТОРОЙ ТИП ПОЛЕЙ
    //  * @returns {JSX.Element} */
    // additionalFields_2()
    // {
    //     /** Добовляем новое состояние для Второго типа Дополнительных полей */
    //     this.setState(
    //         {tasks: []}
    //     );
    //
    //
    //     return(
    //         <div className="form-group">
    //             <label htmlFor="tasks">Задачи</label>
    //             <select multiple={true}
    //                     id={"tasks"}
    //                     name={"tasks"}
    //                     value={this.state.tasks}
    //                     onChange={this.handleUserMultiSelect}>
    //                 <option value="1">№1</option>
    //                 <option value="2">№2</option>
    //                 <option value="3">№3</option>
    //                 <option value="4">№4</option>
    //             </select>
    //         </div>
    //     );
    // }
    //
    //
    //
    //
    //
    // additionalFields_3()
    // {
    //     this.setState({
    //         tasks1: [],
    //         tasks2: []
    //     });
    //
    //
    //     return(
    //         <React.Fragment>
    //                 <div className="form-group">
    //                     <label htmlFor="tasks1">Кол-во часов</label>
    //                     <input type="text"
    //                            className="form-control"
    //                            id="tasks1"
    //                            name="tasks1"
    //                            value={this.state.tasks1}
    //                            onChange={this.handleUserInput}
    //                     />
    //                 </div>
    //
    //                 <div className="form-group">
    //                     <label htmlFor="tasks2">Кол-во часов</label>
    //                     <input type="text"
    //                            className="form-control"
    //                            id="tasks2"
    //                            name="tasks2"
    //                            value={this.state.tasks2}
    //                            onChange={this.handleUserInput}
    //                     />
    //                 </div>
    //         </React.Fragment>
    //     );
    // }
    //
    // additionalFields_4()
    // {
    //
    // }



    // /** Выбираем какой тип дополнительных полей будет выбран,
    //  * на основании нашего состояния, по дефолту это будет первый тип полей */
    // choseAdditionalFields()
    // {
    //     switch (this.state.type)
    //     {
    //         case "2":
    //             return(
    //                 <React.Fragment>
    //                     {/*{this.additionalFields_2()}*/}
    //                     22222222
    //                 </React.Fragment>
    //             );
    //             break;
    //         case "3":
    //             return(
    //                 <React.Fragment>
    //                     {/*{this.additionalFields_3()}*/}
    //                     33333
    //                 </React.Fragment>
    //             );
    //             break;
    //         case "4":
    //             return(
    //                 <React.Fragment>
    //                     {/*{this.additionalFields_4()}*/}
    //                     4444
    //                 </React.Fragment>
    //             );
    //             break;
    //         default:
    //     }
    //
    //
    //     return(
    //         this.additionalFields_1()
    //         // <React.Fragment>
    //         //     {/*{this.additionalFields_1()}*/}
    //         //     11111
    //         // </React.Fragment>
    //     );
    // }

    // additionalFields_1()
    // {
    //     return(
    //         11111
    //     );
    // }

    // this.setState(
    // {FIX: ''},
// )

    additionalState_1() {
        this.setState({add1: 'add1'});
    }

    additionalState_2() {
        this.setState({add2: 'add2'});
    }

    additionalState_3() {
        this.setState({add3: 'add3'});
    }

    additionalState_4() {
        this.setState({add4: 'add4'});
    }


    /** Рендер формы отправки */
    render()
    {


        // if(this.state.type == "1"){
        //      let additionalFields = <AdditionalFields_1 />
        // }
        // if(this.state.type == "2"){
        //     let additionalFields = <AdditionalFields_2 />
        // }
        // if(this.state.type == "3"){
        //     let additionalFields = <AdditionalFields_3 />
        // }
        // if(this.state.type == "4"){
        //     let additionalFields = <AdditionalFields_4 />
        // }


        return(
            <form className="demoForm">
                <h2>Форма отправки</h2>

                {/** Основные поля формы отправки, одинаковые для всех */}
                {/** Наименование документа */}
                <div className="form-group">
                    <label htmlFor="name">Наименование документа</label>
                    <input type="text"
                           className="form-control"
                           id="name"
                           name="name"
                           value={this.state.name}
                           onChange={this.handleUserInput}
                    />
                </div>

                {/** Дата договора */}
                <div className="form-group">
                    <label htmlFor="date">Дата договора</label>
                    <input type="date"
                           className="form-control"
                           id="date"
                           name="date"
                           value={this.state.date}
                           placeholder="__/__/____"
                           onChange={this.handleUserInput}
                    />
                </div>

                {/** Сторона: подрядчик */}
                <div className="form-group">
                    <label htmlFor="contractor_id">Сторона: подрядчик</label>
                    <input type="text"
                           className="form-control"
                           id="contractor_id"
                           name="contractor_id"
                           value={this.state.contractor_id}
                           onChange={this.handleUserInput}
                    />
                </div>

                {/** Сторонa: заказчик */}
                <div className="form-group">
                    <label htmlFor="hirer_id">Сторонa: заказчик</label>
                    <input type="text"
                           className="form-control"
                           id="hirer_id"
                           name="hirer_id"
                           value={this.state.hirer_id}
                           onChange={this.handleUserInput}
                    />
                </div>

                {/** Сумма */}
                <div className="form-group">
                    <label htmlFor="price">Сумма</label>
                    <input type="text"
                           className="form-control"
                           id="price"
                           name="price"
                           value={this.state.price}
                           onChange={this.handleUserInput}
                    />
                </div>

                {/** Компоненты полей формы */}
                <select id="type"
                        name="type"
                        value={this.state.type}
                        onChange={this.handleUserSelect}>
                    <option value="1">Договор №1</option>
                    <option value="2">Договор №2</option>
                    <option value="3">Договор №3</option>
                    <option value="4">Договор №4</option>
                </select>


                {/** Дополнительные поля для конкретного типа ДОГОВОРА */}
                {/*<React.Fragment>*/}
                <AllAddFields value={this.state.type}/>
                {/*{additionalFields}*/}
                {/*</React.Fragment>*/}


                {/*        <React.Fragment>*/}
                {/*            {this.choseAdditionalFields()}*/}
                {/*        </React.Fragment>*/}



                {/** Кнопка отправки */}
                <br/><br/>
                <button type="submit" className="btn btn-primary">Генерировать</button>
            </form>
        );
    }
}


function AllAddFields(props) {
    const value = props.type;

    if(value == "2"){
        return <AdditionalFields_2 />;
    }else if(value == "3"){
        return <AdditionalFields_3 />;
    }else if(value == "4"){
        return <AdditionalFields_4 />;
    }

    return <AdditionalFields_1 />;
}


function AdditionalFields_1(props){
    return(
        <h1>AdditionalFields_1</h1>
    );
}
function AdditionalFields_2(props){
    return(
        <h1>AdditionalFields_2</h1>
    );
}
function AdditionalFields_3(props){
    return(
        <h1>AdditionalFields_3</h1>
    );
}
function AdditionalFields_4(props){
    return(
        <h1>AdditionalFields_4</h1>
    );
}




export default Form;




// {/** Компоненты полей формы */}
// <select multiple={true}
//         name="multi_type"
//         value={this.state.multi_type}
//         onChange={this.handleUserMultiSelect}>
//     <option value="2">Договор №2</option>
//     <option value="1">Договор №1</option>
//     <option value="3">Договор №3</option>
//     <option value="4">Договор №4</option>
// </select>
//
//
// {/** Компоненты полей формы */}
// <select name="type" value={this.state.type} onChange={this.handleUserSelect}>
//     <option value="2">Договор №2</option>
//     <option value="1">Договор №1</option>
//     <option value="3">Договор №3</option>
//     <option value="4">Договор №4</option>
// </select>
//
// {/** Компоненты полей формы */}
// <div className="form-group">
//     <label htmlFor="name1">name1</label>
//     <input type="text"
//            className="form-control"
//            name="name1"
//            value={this.state.name1}
//            onChange={this.handleUserInput}
//     />
// </div>
//
//
// {/** Компоненты полей формы */}
// <div className="form-group">
//     <label htmlFor="name2">name2</label>
//     <input type="text"
//            className="form-control"
//            name="name2"
//            value={this.state.name2}
//            onChange={this.handleUserInput}
//     />
// </div>


//
// {/*    /** Обьект с ошибками валидации полей */*/}
// {/*       formErrors: {*/}
// {/*    name: '',*/}
// {/*    date: '',*/}
// {/*    contractor_id: '',*/}
// {/*    hirer_id: '',*/}
// {/*    price: '',*/}
// {/*    payment_id: '',*/}
// {/*    type: '',*/}
// {/*},*/}
//
// {/*    /** Состояние валидации полей  */*/}
// {/*statusValid: {*/}
// {/*    nameValid: false,*/}
// {/*    dateValid: false,*/}
// {/*    contractor_idValid: false,*/}
// {/*    hirer_idValid: false,*/}
// {/*    priceValid: false,*/}
// {/*    payment_idValid: false,*/}
// {/*    typeValid: false,*/}
// {/*},*/}
//
// {/*    /** Активность кнопки отправки формы, даем True после валидации statusValid */*/}
// {/*formValid: false*/}