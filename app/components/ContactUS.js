/**
 * Created by fcampinho on 12/07/2016.
 */
import React from 'react';
import ContactUSStore from '../stores/ContactUSStore';
import ContactUSActions from '../actions/ContactUSActions';

class ContactUS extends React.Component {
    constructor(props) {
        super(props);
        this.state = ContactUSStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        ContactUSStore.listen(this.onChange);
    }

    componentWillUnmount() {
        ContactUSStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleSubmit(event) {
        event.preventDefault();

        var name = this.state.name.trim();
        var email = this.state.email.trim();
        var phonenumber = this.state.phonenumber.trim();
        var message = this.state.message.trim();

        if (!name) {
            ContactUSActions.invalidName();
            this.refs.nameTextField.getDOMNode().focus();
        }

        if (!email) {
            ContactUSActions.invalidEmail();
            this.refs.emailTextField.getDOMNode().focus();
        }

        if (!phonenumber) {
            ContactUsAction.invalidPhoneNumber();
            this.refs.phonenumberTextField.getDOMNode().focus();
        }

        if (!message){
            ContactUSActions.invalidMessage();
            this.refs.messageTextField.getDOMNode().focus();
        }

        if (name && email && phonenumber && message) {
            ContactUSActions.ContactUS(name, email, phonenumber, message);
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='row flipInX animated'>
                    <div className='col-sm-8'>
                        <div className='panel panel-default'>
                            <div className='panel-heading'>Fale Conosco</div>
                            <div className='panel-body'>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <div className={'form-group ' + this.state.nameValidationState}>
                                        <label className='control-label'>Name</label>
                                        <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                                               onChange={ContactUSActions.updateName} autoFocus/>
                                        <span className='help-block'>{this.state.helpBlock}</span>
                                    </div>
                                    <div className={'form-group ' + this.state.emailValidationState}>
                                        <label className='control-label'>E-mail</label>
                                        <input type='email' className='form-control' ref='emailTextField' value={this.state.email}
                                               onChange={ContactUSActions.updateEmail} autoFocus/>
                                    </div>
                                    <div className={'form-group ' + this.state.phonenumberValidationState}>
                                        <label className='control-label'>Telefone</label>
                                        <input type='text' className='form-control' ref='phonenumberTextField' value={this.state.phonenumber}
                                               onChange={ContactUSActions.updatePhoneNumber} autoFocus/>
                                    </div>
                                    <div className={'form-group ' + this.state.messageValidationState}>
                                        <label className='control-label'>Mensagem</label>
                                        <input type='text' className='form-control' ref='messageTextField' value={this.state.message}
                                               onChange={ContactUSActions.updateMessage} autoFocus/>
                                    </div>
                                    <button type='submit' className='btn btn-primary'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUS;