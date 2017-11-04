/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';

class NavbarActions {
    constructor() {
        this.generateActions(
            'getNavbarSuccess',
            'getNavbarFail'
        );
    }

    getNavbar() {
        let url = '/api/menu/';

        $.ajax({ url: url })
            .done((data) => {
                this.getNavbarSuccess(data);
            })
            .fail((jqXhr) => {
                this.getNavbarFail(jqXhr);
            });
    }
}

export default alt.createActions(NavbarActions);