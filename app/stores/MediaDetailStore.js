/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';
import MediaDetailActions from '../actions/MediaDetailActions';

class MediaDetailStore {
    constructor() {
        this.bindActions(MediaDetailActions);
        this.media = '';
    }

    onGetMediaDetailSuccess(api) {
        var {data} = api;
        this.media = data[0];
    }

    onGetMediaDetailFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(MediaDetailStore);