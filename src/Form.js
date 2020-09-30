import React from 'react';
import ReactDOM from 'react-dom';

/** Импортируем стили css */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

/** Импортируем компоненты для полей формы отправки */
import Input from "./components/input";
import Select from "./components/select";

/** Импортируем JSON для дополнительных полей Договора */
import contract_1 from "./contract/checkboxes1.js";
import contract_2 from "./contract/checkboxes2.js";
import contract_3 from "./contract/checkboxes3.js";

/** Импортируем JSON для анкеты */
import anketa_brend from "./anketa/brend.js";
import anketa_mobile from "./anketa/mobile.js";
import anketa_multi from "./anketa/multimedia.js";


class Form extends React.Component {
    /**
     * Конструктор, устанавливает начальные состояния, для главных полей.
     * И привязывает методы к текущему контексту класса.
     * @param props */
    constructor(props)
    {
        super(props);

        /** станавливаем начальные состояния */
        this.state = {
            name: 'Документ',            /** Название документа */
            date: '2020-08-14',          /** Дата договора */
            contractor_id: 'подрядчик',  /** Сторона: подрядчик */
            hirer_id: 'заказчик',        /** Сторонa: заказчик */
            price: '3000000',            /** Цена */
            payment_id: '',              /** Связанный платеж */
            type: '1',                   /** Тип договора */

            // TODO !!! Эти состояния относятся к 3-му типу договоров !!!
            //      !!! но они не добавляются !!!
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


        /** Делаем JSON дополнительных полей свойствами Класса */
        this.contract_1 = contract_1;
        this.contract_2 = contract_2;
        this.contract_3 = contract_3;


        /** Делаем JSON для разных Анкет свойствами Класса */
        this.anketa_brend = anketa_brend;
        this.anketa_mobile = anketa_mobile;
        this.anketa_multi = anketa_multi;


        /** Связываем методы класса чтобы их можно было импользовать */
        this.handleInput = this.handleInput.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleMultiSelect = this.handleMultiSelect.bind(this);

        /** Специальный метод для выбора типа договора */
        this.handleChoseType = this.handleChoseType.bind(this);

        /** Специальный метод для выбора типа анкеты*/
        this.handleChoseAnketa = this.handleChoseAnketa.bind(this);
    }



    /** Метод обработчик события - ввод поля Input */
    handleInput(event)
    {
        let name = event.target.name;
        let value = event.target.value;

        this.setState(
            {[name]: value},
            console.log(this.state)
        )
    }


    /** Метод обработчик события - выбор поля Select */
    handleSelect(event)
    {
        let name = event.target.name;
        let value = event.target.value;

        this.setState(
            {[name]: value},
            console.log(this.state)
        )
    }


    /** Метод обработка события - выбор полей Multi-Select */
    handleMultiSelect(event)
    {
        let {name, value, type, selectedOptions} = event.target;

        value = [...selectedOptions].map(o => o.value)

        this.setState(
            {[name]: value},
            console.log(this.state)
        )
    }


    /** Специальный метод для выбора типа договора - выбор поля Select
     * Метод устанавливает состояния в зависиимости от выбранного типа договора */
    handleChoseType(event)
    {
        this.setState(
            {type: event.target.value}
        )

        /** Выбрать какие состояния установить */
        switch (this.state.type) {
            case "3":
                this.sendStateType_3();
                break;
            case "2":
                this.sendStateType_2();
                break;
            default:
                this.sendStateType_1();
        }
    }


    /**
     * Метод выбирает какую Анкеты отобразить для 3-го типа Договоров
     * @param event */
    handleChoseAnketa(event)
    {
        this.setState(
            {name_anketa: event.target.value}
        )

        /** Выбрать какую анкету подключить */
        switch (this.state.name_anketa) {
            case "brend":
                this.sendStateBrend();
                break;
            case "mobile":
                this.sendStateMobile();
                break;
            case "multi":
                this.sendStateMulti();
                break;
            default:

        }
    }

    /** Добавляем состояние для Анкеты "Бренд" */
    sendStateBrend()
    {
        this.setState({
            firma_work: "",
            familiar: "",
            firma_add: "",
            firma_attribut: "",
            name_firma: "",
        });
    }

    /** Добавляем состояния для Анкеты "Мобильный" */
    sendStateMobile()
    {
        this.setState({
            use_mobile: "",
            internet_connection: "",
            talking: "",
            mobile_firma: "",
            mobile_price: "",
            mobile_time: "",
            mobile_battery: "",
            mobile_goal: "",
            gender: "",
            age: ""
        });
    }

    /** Добавляем состояния для Анкеты "Мульти" */
    sendStateMulti()
    {
        this.setState({
            movie_where: "",
            movie_often: "",
            multimedia_often: "",
            tv_channel: "",
            pk_game: "",
            multimedia_often_page: "",
            multimedia_play: "",
            multimedia_hour: "",
            video_format: "",
            audio_format: "",
        });
    }

    /** Устанавливаем состояние для полей 1-го типа */
    sendStateType_1()
    {
        this.setState({
            mat_model: [],
            func_activation: [],
            algoritm: [],
            pc:{
                equipment_composition: [],
                software: [],
                library: []
            },
            metrics: [],
            services: []
        });
    }

    /** Устанавливаем состояние для полей 2-го типа */
    sendStateType_2()
    {
        this.setState({
            tasks: []
        });
    }

    // TODO !!!!!! Не знаю по чему но эти поля не добавляются !!!!!!
    /** Устанавливаем состояние для полей 3-го типа */
    sendStateType_3()
    {
        this.setState({
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

            name_anketa: '',
            trends: '',
            concentration: '',
            state_competitive: '',
            barriers: '',
            customer_satisfaction: '',
            current_position: '',
            efficiency: '',
            adress: [],
        });


        // TODO
        this.setState({

        });
    }


    /** Генерация всей формы отправки */
    render() {
        return (
            <form method="GET" action="/" id="generate-report">

                {/** Сокрытое поле с ID контракта */}
                <input type="hidden"
                       autoComplete="off"
                       value="15"
                       name="contract_id"
                       className="datepicker"
                />



                <fieldset>
                    {/** Основные поля Формы */}

                        <ul className="row">
                            {/** Наименование документа */}
                            <li>
                                <div className="hold-input">
                                    <label htmlFor="">Наименование документа</label>
                                    <input type="text"
                                           className="datepicker"
                                           id="name"
                                           name="name"
                                           value={this.state.name}
                                           onChange={this.handleInput}
                                    />
                                </div>
                            </li>

                            {/** Дата договора */}
                            <li>
                                <div className="hold-input">
                                    <label htmlFor="period_start">Дата договора</label>
                                    <input type="text"
                                           autoComplete="off"
                                           className="datepicker"
                                           id="date"
                                           name="date"
                                           value={this.state.date}
                                           placeholder="__/__/____"
                                           onChange={this.handleInput}
                                    />
                                </div>
                            </li>
                        </ul>


                        <ul className="row">
                            {/** Сторона: подрядчик */}
                            <li>
                                <div className="hold-input">
                                    <label htmlFor="contractor_id">Сторона: подрядчик</label>
                                    <input type="text"
                                           className="form-control"
                                           id="contractor_id"
                                           name="contractor_id"
                                           value={this.state.contractor_id}
                                           onChange={this.handleInput}
                                    />
                                </div>
                            </li>


                        {/** Сторонa: заказчик */}
                            <li>
                                <div className="hold-input">
                                    <label htmlFor="hirer_id">Сторонa: заказчик</label>
                                    <input type="text"
                                           className="form-control"
                                           id="hirer_id"
                                           name="hirer_id"
                                           value={this.state.hirer_id}
                                           onChange={this.handleInput}
                                    />
                                </div>
                            </li>
                        </ul>


                        <ul className="row ">
                            {/** Сумма */}
                            <li>
                                <div className="hold-input">
                                    <label htmlFor="price">Сумма</label>
                                    <input type="text"
                                           className="form-control"
                                           id="price"
                                           name="price"
                                           value={this.state.price}
                                           onChange={this.handleInput}
                                    />
                                </div>
                            </li>

                            {/** Название платежа */}
                            <li>
                                <div className="hold-input">
                                    <label htmlFor="price">Название платежа</label>

                                    {/** TODO Сделать платеж */}

                                </div>
                            </li>
                        </ul>


                        <ul className="row">
                            {/** Компоненты полей формы */}
                            <li>
                                <div className="hold-input">
                                    <label htmlFor="type">Выбрать тип договора</label>
                                    <select id="type"
                                            name="type"
                                            value={this.state.type}
                                            onChange={this.handleChoseType}>
                                        <option value="" disabled>Выбрать тип договора</option>
                                        <option value="1">Договор №1</option>
                                        <option value="2">Договор №2</option>
                                        <option value="3">Договор №3</option>
                                        <option value="4">Договор №4</option>
                                    </select>
                                </div>
                            </li>
                        </ul>


                    {/** Дополнительные поля */}
                        {this.choseAdditionalFields(this.state.type)}


                    {/** Кнопка отправки */}
                        <div className="hold-btn">
                            <a href="/" className="btn reset" type="reset" name="reset">Отменить</a>
                            <input className="btn add" type="submit" name="doSave" value="Генерировать"/>
                        </div>

                </fieldset>
            </form>
        );
    }



    /**
     * Метод выбирает какие дополнительные поля отобразить, для
     * конкретного типа договора, в зависимости от аргумента.
     * @param AdditionalFieldsType - Состояние атрибута this.state.type
     * @returns {JSX.Element} */
    choseAdditionalFields(AdditionalFieldsType)
    {
        /** Выбираем какие поля будут добавлены */
        switch (AdditionalFieldsType)
        {
            case "4":
                return (
                    <React.Fragment>
                        <div className="checkboxesdata4">
                            {this.AdditionalFields_4()}
                        </div>
                    </React.Fragment>
                );
                break;
            case "3":
                return (
                    <React.Fragment>
                        <div className="checkboxesdata3">
                            {this.AdditionalFields_3()}
                        </div>
                    </React.Fragment>
                );
                break;
            case "2":
                return (
                    <React.Fragment>
                        <div className="checkboxesdata2">
                            {this.AdditionalFields_2()}
                        </div>
                    </React.Fragment>
                );
                break;
            default:
                return (
                    <React.Fragment>
                        <div className="checkboxesdata1">
                            {this.AdditionalFields_1()}
                        </div>
                    </React.Fragment>
                );
        }
    }


    addAnketa(TypeOfAnketa)
    {
        /** Выбираем какие поля будут добавлены */
        switch (TypeOfAnketa)
        {
            case "brend":
                return (
                    <React.Fragment>
                        {this.AddAnketaBrend()}
                    </React.Fragment>
                );
                break;
            case "mobile":
                return (
                    <React.Fragment>
                        {this.AddAnketaMobile()}
                    </React.Fragment>
                );
                break;
            case "multi":
                return (
                    <React.Fragment>
                        {this.AddAnketaMulti()}
                    </React.Fragment>
                );
                break;
            default:
        }
    }


    /**
     * Добавляем Анкету для Бренда
     * @returns {JSX.Element} */
    AddAnketaBrend()
    {
        return(
            <React.Fragment>
                <ul className="row anketa-brend">
                    <li>
                        <div id="ardess-array" className="hold-input">
                            <label htmlFor={"anketa[brend][firma_work]"}>
                                Название какой фирмы Вам первым придет в голову ?
                            </label>
                            <Input inputType={'text'}
                                   name={'anketa[brend][firma_work]'}
                                   value={this.state.firma_work}
                                   placeholder = {'Название какой фирмы Вам первым придет в голову ?'}
                                   handleChange={this.handleInput}
                            />
                        </div>
                    </li>

                    <li>
                        <label htmlFor={'anketa[brend][familiar]'}>
                            Знакомо ли Вам название «название фирмы»?
                        </label>
                        <Select
                            multiple={false}
                            name={'anketa[brend][familiar]'}
                            options = {this.anketa_brend['familiar']}
                            value = {this.state.familiar}
                            placeholder = {'Знакомо ли Вам название «название фирмы»?'}
                            handleChange = {this.handleSelect}
                        />
                    </li>


                    <li>
                        <label htmlFor={'anketa[brend][firma_add]'}>
                            Где Вы видели рекламу 'название-фирмы'?
                        </label>
                        <Select
                            multiple={false}
                            name={'anketa[brend][firma_add]'}
                            options = {this.anketa_brend['firma_add']}
                            value = {this.state.firma_add}
                            placeholder = {"Где Вы видели рекламу 'название-фирмы'?"}
                            handleChange = {this.handleSelect}
                        />
                     </li>

                    <li>
                        <label htmlFor={'anketa[brend][firma_attribut]'}>
                            Какое из следующих свойств связано с 'название-фирмы'?
                        </label>
                        <Select
                            multiple={false}
                            name={'anketa[brend][firma_attribut]'}
                            options = {this.anketa_brend['firma_attribut']}
                            value = {this.state.firma_attribut}
                            placeholder = {"Какое из следующих свойств связано с 'название-фирмы'?"}
                            handleChange = {this.handleSelect}
                        />
                    </li>

                    <li>
                        <label htmlFor={'anketa[brend][name_firma]'}>
                            Как Вы бы оценили качество продуктов 'название-фирмы'?
                        </label>
                        <Select
                            multiple={false}
                            name={'anketa[brend][name_firma]'}
                            options = {this.anketa_brend['name_firma']}
                            value = {this.state.name_firma}
                            placeholder = {"Как Вы бы оценили качество продуктов 'название-фирмы'?"}
                            handleChange = {this.handleSelect}
                        />
                    </li>

                </ul>
            </React.Fragment>
        );
    }


    /**
     * Добавляем Анкету для Мобайл
     * @returns {JSX.Element} */
    AddAnketaMobile()
    {
        return(
            <React.Fragment>
                <ul className="row anketa-mobile">
                    <li>
                        <label>Каким из следующих мобильных устройств Вы владеете?</label>
                        <Select
                            multiple={false}
                            name={'anketa[mobile][use_mobile]'}
                            options = {this.anketa_mobile['use_mobile']}
                            value = {this.state.use_mobile}
                            placeholder = {"Каким из следующих мобильных устройств Вы владеете?"}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                    <li>
                        <label>Для подключения к Интернету Вы пользуетесь</label>
                        <Select
                            multiple={false}
                            name={'anketa[mobile][internet_connection]'}
                            options = {this.anketa_mobile['internet_connection']}
                            value = {this.state.internet_connection}
                            placeholder = {"Для подключения к Интернету Вы пользуетесь"}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                    <li>
                        <label>Для общения чаще всего Вы пользуетесь</label>
                        <Select
                            multiple={false}
                            name={'anketa[mobile][talking]'}
                            options = {this.anketa_mobile['talking']}
                            value = {this.state.talking}
                            placeholder = {"Для общения чаще всего Вы пользуетесь"}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                    <li>
                        <label>Какую фирму мобильных устройств Вы предпочитаете?</label>
                        <Input inputType={'text'}
                               name={'anketa[brend][mobile_firma]'}
                               value={this.state.mobile_firma}
                               placeholder = {'Какую фирму мобильных устройств Вы предпочитаете?'}
                               handleChange={this.handleInput}
                        />
                    </li>
                    <li>
                        <label>Какой была цена Вашего мобильного телефона?</label>
                        <Select
                            multiple={false}
                            name={'anketa[mobile][mobile_price]'}
                            options = {this.anketa_mobile['mobile_price']}
                            value = {this.state.mobile_price}
                            placeholder = {"Какой была цена Вашего мобильного телефона?"}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                    <li>
                    <label>Сколько часов в день Вы пользуетесь своими мобильными устройствами?</label>
                        <Select
                            multiple={false}
                            name={'anketa[mobile][mohile_time]'}
                            options = {this.anketa_mobile['mohile_time']}
                            value = {this.state.mohile_time}
                            placeholder = {"Сколько часов в день Вы пользуетесь своими мобильными устройствами?"}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                    <li>
                    <label>Вам подходит стойкость батареи Вашего мобильного устройства?</label>
                        <Select
                            multiple={false}
                            name={'anketa[mobile][mobile_battery]'}
                            options = {this.anketa_mobile['mobile_battery']}
                            value = {this.state.mobile_battery}
                            placeholder = {"Вам подходит стойкость батареи Вашего мобильного устройства?"}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                    <li>
                    <label>С какой целью Вы чаще всего пользуетесь своими мобильными устройствами?</label>
                        <Select
                            multiple={false}
                            name={'anketa[mobile][mobile_goal]'}
                            options = {this.anketa_mobile['mobile_goal']}
                            value = {this.state.mobile_goal}
                            placeholder = {"С какой целью Вы чаще всего пользуетесь своими мобильными устройствами?"}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                    <li>
                    <label>Укажите Ваш пол</label>
                        <Select
                            multiple={false}
                            name={'anketa[mobile][gender]'}
                            options = {this.anketa_mobile['gender']}
                            value = {this.state.gender}
                            placeholder = {"Укажите Ваш пол"}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                    <li>
                    <label>Сколько Вам лет?</label>
                        <Select
                            multiple={false}
                            name={'anketa[mobile][age]'}
                            options = {this.anketa_mobile['age']}
                            value = {this.state.age}
                            placeholder = {"Сколько Вам лет?"}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                </ul>
            </React.Fragment>
        );
    }


    /**
     * Добавляем Анкету для Мульти
     * @returns {JSX.Element} */
    AddAnketaMulti()
    {
        return(
            <React.Fragment>
                <ul className="row anketa-multi">
                    <li>
                        <label>Где Вы чаще всего смотрите фильмы?</label>
                        <Select
                            multiple={false}
                            name={'anketa[multi][movie_where]'}
                            options = {this.anketa_multi['movie_where']}
                            value = {this.state.movie_where}
                            placeholder = {"Где Вы чаще всего смотрите фильмы?"}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                    <li>
                        <label>Как часто Вы ходите в кино?</label>
                        <Input inputType={'text'}
                               name={'anketa[multi][movie_often]'}
                               value={this.state.movie_often}
                               placeholder = {'Как часто Вы ходите в кино?'}
                               handleChange={this.handleInput}
                        />
                    </li>
                    <li>
                        <label>Откуда чаще всего Вы получаете мультимедиа?</label>
                        <Select
                            multiple={false}
                            name={'anketa[multi][multimedia_often]'}
                            options = {this.anketa_multi['multimedia_often']}
                            value = {this.state.multimedia_often}
                            placeholder = {"Откуда чаще всего Вы получаете мультимедиа?"}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                    <li>
                        <label>Какой телеканал Вы смотрите чаще всего?</label>
                        <Input inputType={'text'}
                               name={'anketa[multi][tv_channel]'}
                               value={this.state.tv_channel}
                               placeholder = {'Какой телеканал Вы смотрите чаще всего?'}
                               handleChange={this.handleInput}
                        />
                    </li>
                    <li>
                        <label>Вы играете в компьютерные игры?</label>
                        <Select
                            multiple={false}
                            name={'anketa[multi][pk_game]'}
                            options = {this.anketa_multi['pk_game']}
                            value = {this.state.pk_game}
                            placeholder = {"Вы играете в компьютерные игры?"}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                    <li>
                        <label>Какую страницу мультимедиа Вы посещаете чаще всего?</label>
                        <Input inputType={'text'}
                               name={'anketa[multi][multimedia_often_page]'}
                               value={this.state.multimedia_often_page}
                               placeholder = {'Какую страницу мультимедиа Вы посещаете чаще всего?'}
                               handleChange={this.handleInput}
                        />
                    </li>
                    <li>
                        <label>Каким плеером мультимедиа Вы пользуетесь чаще всего?</label>
                        <Input inputType={'text'}
                               name={'anketa[multi][multimedia_play]'}
                               value={this.state.multimedia_play}
                               placeholder = {'Каким плеером мультимедиа Вы пользуетесь чаще всего?'}
                               handleChange={this.handleInput}
                        />
                    </li>
                    <li>
                        <label>Сколько часов в день вы в среднем уделяете мультимедиа?</label>
                        <Input inputType={'text'}
                               name={'anketa[multi][multimedia_hour]'}
                               value={this.state.multimedia_hour}
                               placeholder = {'Сколько часов в день Вы в среднем уделяете мультимедиа?'}
                               handleChange={this.handleInput}
                        />
                    </li>
                    <li>
                        <label>Какой видеоформат Вы предпочитаете?</label>
                        <Select
                            multiple={false}
                            name={'anketa[multi][video_format]'}
                            options = {this.anketa_multi['video_format']}
                            value = {this.state.video_format}
                            placeholder = {"Какой видеоформат Вы предпочитаете?"}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                    <li>
                        <label>Каким аудиоформатом Вы пользуетесь, слушая музыку?</label>
                        <Select
                            multiple={false}
                            name={'anketa[multi][audio_format]'}
                            options = {this.anketa_multi['audio_format']}
                            value = {this.state.audio_format}
                            placeholder = {"Каким аудиоформатом Вы пользуетесь, слушая музыку?"}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                </ul>
            </React.Fragment>
        );
    }



    /**
     * Добавляем поля формы для 1-го типа Договора
     * @returns {JSX.Element} */
    AdditionalFields_1()
    {
        return(
            <React.Fragment>
                {/*select2-container select2-container-multi select2*/}
                <ul className="row">
                    <li>
                        <label>Нейросеть</label>
                        <Select
                            class={"select2"}
                            multiple={"multiple"}
                            name={'mat_model'}
                            options = {this.contract_1['mat_model']}
                            value = {this.state.mat_model}
                            placeholder = {'Нейросеть'}
                            handleChange = {this.handleMultiSelect}
                        />
                    </li>
                    <li>
                        <label>Функция активации</label>
                        <Select
                            class={"select2"}
                            multiple={"multiple"}
                            name={'func_activation'}
                            options = {this.contract_1['func_activation']}
                            value = {this.state.func_activation}
                            placeholder = {'Функция активации'}
                            handleChange = {this.handleMultiSelect}
                        />
                    </li>
                </ul>

                <ul className="row">
                    <li>
                        <label>Алгоритмы</label>
                        <Select
                            class={"select2"}
                            multiple={"multiple"}
                            name={'algoritm'}
                            options = {this.contract_1['algoritm']}
                            value = {this.state.algoritm}
                            placeholder = {'Алгоритмы'}
                            handleChange = {this.handleMultiSelect}
                        />
                    </li>
                    <li>
                        <label>Метрики</label>
                        <Select
                            class={"select2"}
                            multiple={"multiple"}
                            name={'metrics'}
                            options = {this.contract_1['metrics']}
                            value = {this.state.metrics}
                            placeholder = {'Метрики'}
                            handleChange = {this.handleMultiSelect}
                        />
                    </li>
                </ul>

                <ul className="row">
                    <li>
                        <label>Услуги</label>
                         <Select
                            class={"select2"}
                            multiple={"multiple"}
                            name={'services'}
                            options = {this.contract_1['services']}
                            value = {this.state.services}
                            placeholder = {'Услуги'}
                            handleChange = {this.handleMultiSelect}
                        />
                    </li>
                </ul>

                <ul className="row">
                    <label>ПЭВМ</label>
                    <li>
                        <label>Состав оборудования</label>
                        <Select
                            class={"select2"}
                            multiple={"multiple"}
                            name={'equipment_composition'}
                            options = {this.contract_1['pc']['equipment_composition']}
                            value = {this.state.equipment_composition}
                            placeholder = {'ПЭВМ'}
                            handleChange = {this.handleMultiSelect}
                        />
                    </li>
                </ul>

                <ul className="row">
                    <li>
                        <label>ПО</label>
                        <Select
                            class={"select2"}
                            multiple={"multiple"}
                            name={'software'}
                            options = {this.contract_1['pc']['software']}
                            value = {this.state.software}
                            placeholder = {'ПО'}
                            handleChange = {this.handleMultiSelect}
                        />
                    </li>

                    <li>
                        <label>Библиотеки</label>
                        <Select
                            class={"select2"}
                            multiple={"multiple"}
                            name={'library'}
                            options = {this.contract_1['pc']['library']}
                            value = {this.state.library}
                            placeholder = {'Библиотеки'}
                            handleChange = {this.handleMultiSelect}
                        />
                    </li>
                </ul>

            </React.Fragment>
        );
    }



    /**
     * Добавляем поля формы для 2-го типа Договора
     * @returns {JSX.Element} */
    AdditionalFields_2()
    {
        return(
            <React.Fragment>
                <ul className="row checkboxesdata2">
                    <li>
                        <Select
                            multiple={"multiple"}
                            name={'tasks'}
                            options = {this.contract_2['tasks']}
                            value = {this.state.tasks}
                            placeholder = {'Задачи'}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                </ul>
            </React.Fragment>
        );
    }



    /**
     * Добавляем поля формы для 3-го типа Договора
     * @returns {JSX.Element} */
    AdditionalFields_3()
    {
        return(
            <React.Fragment>

                {/** Промоутер */}
                    {this.promoterFieldsType_3()}


                {/** Супервайзер */}
                    {this.supervisorFieldsType_3()}


                {/** Координация, сбор данных */}
                    {this.coordinationFieldsType_3()}

                {/** Одиночные поля Select */}
                    {this.ordinaryFields()}

                {/** Адреса */}
                    {this.adresaFields_3()}

                {/** Поле для выбора Анкеты */}
                    {this.anketaFields_3()}

                {/** Анкета */}
                    {this.addAnketa(this.state.name_anketa)}

            </React.Fragment>
        );
    }


    /**
     * Поля "Промоутер" для 3-го типа Договора
     * @returns {JSX.Element}*/
    promoterFieldsType_3()
    {
        return(
            <React.Fragment>
                    <ul className="row">
                        <label>Промоутер:</label>
                        <li>
                            <div className="hold-input">
                                <label htmlFor="promoter[number_of_hours]">Кол-во часов</label>
                                <Input inputType={'text'}
                                       name={'promoter[number_of_hours]'}
                                       value={this.state.promoter.number_of_hours}
                                       placeholder = {'Кол-во часов'}
                                       handleChange={this.handleInput}
                                />
                            </div>
                        </li>
                        <li>
                            <div className="hold-input">
                                <label htmlFor="promoter[number_of_people]">Кол-во человек</label>
                                <Input inputType={'text'}
                                       name={'promoter[number_of_people]'}
                                       value={this.state.promoter.number_of_people}
                                       placeholder = {'Кол-во человек'}
                                       handleChange={this.handleInput}
                                />
                            </div>
                        </li>
                    </ul>

                    <ul className="row">
                        <li>
                            <div className="hold-input">
                                <label htmlFor="promoter[number_of_days]">Кол-во дней</label>
                                <Input inputType={'text'}
                                       name={'promoter[number_of_days]'}
                                       value={this.state.promoter.number_of_days}
                                       placeholder = {'Кол-во дней'}
                                       handleChange={this.handleInput}
                                />
                            </div>
                        </li>
                        <li>
                            <div className="hold-input">
                                <label htmlFor="promoter[cost_per_hour]">Стоимость часа</label>
                                <Input inputType={'text'}
                                       name={'promoter[cost_per_hour]'}
                                       value={this.state.promoter.cost_per_hour}
                                       placeholder = {'Стоимость часа'}
                                       handleChange={this.handleInput}
                                />
                            </div>
                        </li>
                    </ul>
            </React.Fragment>
        );
    }



    /**
     * Поля "Супервайзер" для 3-го типа Договора
     * @returns {JSX.Element}*/
    supervisorFieldsType_3()
    {
        return(
            <React.Fragment>
                <ul className="row">
                    <label>Супервайзер</label>
                    <li>
                        <div className="hold-input">
                            <label htmlFor="period_start">Кол-во часов</label>
                            <Input inputType={'text'}
                                   name={'supervisor[number_of_hours]'}
                                   value={this.state.supervisor.number_of_hours}
                                   placeholder = {'Кол-во часов'}
                                   handleChange={this.handleInput}
                            />
                        </div>
                    </li>
                    <li>
                        <div className="hold-input">
                            <label htmlFor="supervisor[number_of_people]">Кол-во человек</label>
                            <Input inputType={'text'}
                                   name={'supervisor[number_of_people]'}
                                   value={this.state.supervisor.number_of_people}
                                   placeholder = {'Кол-во человек'}
                                   handleChange={this.handleInput}
                            />
                        </div>
                    </li>
                </ul>

                <ul className="row">
                    <li>
                        <div className="hold-input">
                            <label htmlFor="supervisor[number_of_days]">Кол-во дней</label>
                            <Input inputType={'text'}
                                   name={'supervisor[number_of_days]'}
                                   value={this.state.supervisor.number_of_days}
                                   placeholder = {'Кол-во дней'}
                                   handleChange={this.handleInput}
                            />
                        </div>
                    </li>
                    <li>
                        <div className="hold-input">
                            <label htmlFor="supervisor[cost_per_hour]">Стоимость часа</label>
                            <Input inputType={'text'}
                                   name={'supervisor[cost_per_hour]'}
                                   value={this.state.supervisor.cost_per_hour}
                                   placeholder = {'Стоимость часа'}
                                   handleChange={this.handleInput}
                            />
                        </div>
                    </li>
                </ul>
            </React.Fragment>
        );
    }


    /**
     * Поля "Координация" для 3-го типа Договора
     * @returns {JSX.Element}*/
    coordinationFieldsType_3()
    {
        return(
            <React.Fragment>
                <ul className="row">
                    <label>Координация, сбор данных</label>
                        <li>
                            <div className="hold-input">
                                <label htmlFor="period_start">Кол-во часов</label>
                                <Input inputType={'text'}
                                       name={'coordination[number_of_hours]'}
                                       value={this.state.coordination.number_of_hours}
                                       placeholder = {'Кол-во часов'}
                                       handleChange={this.handleInput}
                                />
                            </div>
                        </li>
                        <li>
                            <div className="hold-input">
                                <label htmlFor="period_start">Кол-во человек</label>
                                <Input inputType={'text'}
                                       name={'coordination[number_of_people]'}
                                       value={this.state.coordination.number_of_people}
                                       placeholder = {'Кол-во человек'}
                                       handleChange={this.handleInput}
                                />
                            </div>
                        </li>
                    </ul>

                    <ul className="row">
                        <li>
                            <div className="hold-input">
                                <label htmlFor="period_start">Кол-во дней</label>
                                <Input inputType={'text'}
                                       name={'coordination[number_of_days]'}
                                       value={this.state.coordination.number_of_days}
                                       placeholder = {'Кол-во дней'}
                                       handleChange={this.handleInput}
                                />
                            </div>
                        </li>

                        <li>
                            <div className="hold-input">
                                <label htmlFor="period_start">Стоимость часа</label>
                                <Input inputType={'text'}
                                       name={'coordination[cost_per_hour]'}
                                       value={this.state.coordination.cost_per_hour}
                                       placeholder = {'Стоимость часа'}
                                       handleChange={this.handleInput}
                                />
                            </div>
                        </li>
                    </ul>
            </React.Fragment>
        );
    }


    /**
     * Одинарные поля для 3-го Договора
     * @returns {JSX.Element}*/
    ordinaryFields()
    {
        return(
            <React.Fragment>
                <ul className="row">
                    <li>
                        <label>Тенденции и перспективы развития рынка:</label>
                        <Select
                            class={"select2"}
                            multiple={false}
                            name={'trends'}
                            options = {this.contract_3['trends']}
                            value = {this.state.trends}
                            placeholder = {'Тенденции и перспективы развития рынка:'}
                            handleChange = {this.handleSelect}
                        />
                    </li>

                    <li>
                        <label>Уровень концентрации товарного рынка:</label>
                        <Select
                            class={"select2"}
                            multiple={false}
                            name={'concentration'}
                            options = {this.contract_3['concentration']}
                            value = {this.state.concentration}
                            placeholder = {'Уровень концентрации товарного рынка:'}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                </ul>

                <ul className="row">
                    <li>
                        <label>Состояние конкурентной среды на рынке:</label>
                        <Select
                            class={"select2"}
                            multiple={false}
                            name={'state_competitive'}
                            options = {this.contract_3['state_competitive']}
                            value = {this.state.state_competitive}
                            placeholder = {'Состояние конкурентной среды на рынке:'}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                    <li>
                        <label>Барьеры входа на рынок:</label>
                        <Select
                            class={"select2"}
                            multiple={false}
                            name={'barriers'}
                            options = {this.contract_3['barriers']}
                            value = {this.state.barriers}
                            placeholder = {'Барьеры входа на рынок:'}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                </ul>

                <ul className="row">
                    <li>
                        <label>Уровень удовлетворѐнности спроса потребителей:</label>
                        <Select
                            class={"select2"}
                            multiple={false}
                            name={'customer_satisfaction'}
                            options = {this.contract_3['customer_satisfaction']}
                            value = {this.state.customer_satisfaction}
                            placeholder = {'Уровень удовлетворѐнности спроса потребителей:'}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                    <li>
                        <label>Текущая позиции Заказичка на рынке:</label>
                        <Select
                            class={"select2"}
                            multiple={false}
                            name={'current_position'}
                            options = {this.contract_3['current_position']}
                            value = {this.state.current_position}
                            placeholder = {'Текущая позиции Заказичка на рынке:'}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                </ul>

                <ul className="row">
                    <li>
                        <label>Эффективность рекламной и PR-активности производителя и его конкурентов:</label>
                        <Select
                            class={"select2"}
                            multiple={false}
                            name={'efficiency'}
                            options = {this.contract_3['efficiency']}
                            value = {this.state.efficiency}
                            placeholder = {'Эффективность рекламной и PR-активности производителя и его конкурентов:'}
                            handleChange = {this.handleSelect}
                        />
                    </li>
                </ul>
            </React.Fragment>
        );
    }


    /**
     * Адреса для 3-го типа Договора
     * @returns {JSX.Element} */
    adresaFields_3()
    {
        return(
            <React.Fragment>
                <Input inputType={'text'}
                       name={'adress'}
                       value={this.state.adress}
                       placeholder = {'Адреса :'}
                       handleChange={this.handleInput}
                />
            </React.Fragment>
        );
    }


    /** Специальное поле для выбора конкретной анкеты для заполнения
     * Анкета для 3-го типа Договора
     * @returns {JSX.Element} */
    anketaFields_3()
    {
        return(
            <React.Fragment>
                <ul className="row">
                    <label htmlFor="">Анкета :</label>
                    <li>
                        <div className="hold-input">
                            <select
                                    className={"select2"}
                                    id="name_anketa"
                                    name="name_anketa"
                                    value={this.state.name_anketa}
                                    onChange={this.handleChoseAnketa}>
                                <option value="" disabled>Анкета :</option>
                                <option value="brend">Узнаваемость бренда</option>
                                <option value="mobile">Использование мобильных устройств</option>
                                <option value="multi">Потребление мультимедиа</option>
                            </select>
                        </div>
                    </li>
                </ul>
            </React.Fragment>
        );
    }


    /**
     * Добавляем поля формы для 4-го типа Договора
     * @returns {JSX.Element} */
    AdditionalFields_4()
    {
        return(
            <Input inputType={'text'}
                   name={'add4'}
                   value={this.state.add4}
                   placeholder = {'Enter your add4444444444'}
                   handleChange={this.handleInput}
            />
        );
    }


}



export default Form;