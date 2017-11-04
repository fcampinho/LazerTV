/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';
import MediaPlayActions from '../actions/MediaPlayActions';

class MediaPlayStore {
    constructor() {
        this.bindActions(MediaPlayActions);
        this.media = '';
    }

    onGetMediaPlaySuccess(api) {
        var {data} = api;
        this.media = data[0];
    }

    onGetMediaPlayFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(MediaPlayStore);