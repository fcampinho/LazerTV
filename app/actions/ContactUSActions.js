/**
 * Created by fcampinho on 12/07/2016.
 */
import alt from '../alt';

class ContactUSActions {
    constructor() {
        this.generateActions(
            'postContactUSSuccess',
            'postContactUSFail',
            'updateName',
            'updateEmail',
            'updatePhoneNumber',
            'updateMessage',
            'invalidName',
            'invalidEmail',
            'invalidPhoneNumber',
            'invalidMessage'
        )
        ;
    }

    ContactUS(name, email, phonenumber, message) {
        $.ajax({
            type: 'POST',
            url: '/api/contactus',
            data: {name: name, email: email, phonenumber: phonenumber, message: message }
        })
            .done((data) => {
                this.postContactUSSuccess(data.message);
            })
            .fail((jqXhr) => {
                this.postContactUSFail(jqXhr.responseJSON.message);
            });
    }
}

export default alt.createActions(ContactUSActions);