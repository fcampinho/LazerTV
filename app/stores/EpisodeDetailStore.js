/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';
import EpisodeDetailActions from '../actions/EpisodeDetailActions';

class EpisodeDetailStore {
    constructor() {
        this.bindActions(EpisodeDetailActions);
        this.media = '';
    }

    onGetEpisodeDetailSuccess(api) {
        var {data} = api;
        this.media = data[0];
    }

    onGetEpisodeDetailFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(EpisodeDetailStore);