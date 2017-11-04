/**
 * Created by fcampinho on 12/07/2016.
 */
import alt from '../alt';
import ContactUSActions from '../actions/ContactUSActions';

class ContactUSStore {
    constructor() {
        this.bindActions(ContactUSActions);
        this.name = '';
        this.email = '';
        this.phonenumber = '';
        this.message = '';
        this.helpBlock = '';
        this.nameValidationState = '';
        this.emailValidationState = '';
        this.phonenumberValidationState = '';
        this.messageValidationState = '';
    }

    onPostContactUSSuccess(successMessage) {
        this.nameValidationState = 'has-success';
        this.emailValidationState = 'has-success';
        this.phonenumberValidationState = 'has-success';
        this.messageValidationState = 'has-success';
        this.helpBlock = successMessage;
    }

    onPostContactUSFail(errorMessage) {
        this.nameValidationState = 'has-error';
        this.emailValidationState = 'has-error';
        this.phonenumberValidationState = 'has-error';
        this.messageValidationState = 'has-error';
        this.helpBlock = errorMessage;
    }

    onUpdateName(event) {
        this.name = event.target.value;
        this.nameValidationState = '';
        this.helpBlock = '';
    }

    onUpdateEmail(event) {
        this.email = event.target.value;
        this.emailValidationState = '';
    }

    onUpdatePhoneNumber(event) {
        this.phonenumber = event.target.value;
        this.phonenumberValidationState = '';
    }

    onUpdateMessage(event) {
        this.message = event.target.value;
        this.messageValidationState = '';
    }

    onInvalidName() {
        this.nameValidationState = 'has-error';
        this.helpBlock = 'Por favor, informe o seu nome.';
    }

    onInvalidEmail() {
        this.emailValidationState = 'has-error';
        //this.helpBlock = 'Por favor, insira o seu e-mail.'
        toastr.warning('Por favor, insira o seu e-mail.');
    }

    onInvalidPhoneNumber() {
        this.phonenumberValidationState = 'has-error';
        this.helpBlock = 'Por favor, insira um telefone de contato.';
    }

    onInvalidMessage() {
        this.messageValidationState = 'has-error';
        this.helpBlock = 'Por favor, insira uma mensagem.';
    }

}

export default alt.createStore(ContactUSStore);