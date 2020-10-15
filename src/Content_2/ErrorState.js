
/** Обьект с правилами валидацией  */
let ErrorState = {
    name: {type:'text', noEmpty:true},
    adress: {type:'text', noEmpty:true},

    date: {type:'date', noEmpty:true},

    contractor_id: {type:'number', noEmpty:true},
    hirer_id: {type:'number', noEmpty:true},
    price: {type:'number', noEmpty:true},
    payment_id: {type:'number', noEmpty:true},

    type: {type:'text', noEmpty:true},
    selector: {type:'text', noEmpty:true}
};

export default ErrorState;