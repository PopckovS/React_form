import showState from "./helpers";

/** Обработчик ввода поля Input */
function handleInput(event){
    const {name, value} = event.currentTarget;
    setFormInputState({...formInputState, [name]: value});
    showState(formInputState, formSelectState);
};

export default handleInput()