/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';
import MediaListActions from '../actions/MediaListActions';

class MediaListStore {
    constructor() {
        this.bindActions(MediaListActions);
        this.medias = [];
    }

    onGetMediaListSuccess(api) {
        var {data} = api;
        this.medias = data;
    }

    onGetMediaListFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(MediaListStore);