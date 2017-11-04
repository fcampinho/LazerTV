/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';
import BannerActions from '../actions/BannerActions';

class BannerStore {
    constructor() {
        this.bindActions(BannerActions);
        this.banners = [];
    }

    onGetBannerSuccess(api) {
        var {data} = api;
        this.banners = data;
    }

    onGetBannerFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(BannerStore);