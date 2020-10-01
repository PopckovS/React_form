import React from "react";
import Input from "../components/input";
import Select from "../components/select";


/** Примесь добавляет к 3-му типу договора Анкету
 * Анкета может быть трех типов, Бренд,Мрбильный,Мульти */
let AnketaMixin = {

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
    },

    /** Добавляем состояние для Анкеты "Бренд" */
    sendStateBrend() {
        this.setState({
            firma_work: "",
            familiar: "",
            firma_add: "",
            firma_attribut: "",
            name_firma: "",
        });
    },

    /** Добавляем состояния для Анкеты "Мобильный" */
    sendStateMobile() {
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
    },

    /** Добавляем состояния для Анкеты "Мульти" */
    sendStateMulti() {
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
    },


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
    },


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
    },


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
}

export default AnketaMixin;