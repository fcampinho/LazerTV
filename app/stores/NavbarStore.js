/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore {
    constructor() {
        this.bindActions(NavbarActions);
        this.navbar = [];
    }

    onGetNavbarSuccess(api) {
        var {data} = api;
        this.navbar = data;
    }

    onGetNavbarFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(NavbarStore);