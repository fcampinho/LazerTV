/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';
import SerieEpisodesActions from '../actions/SerieEpisodesActions';

class SerieEpisodesStore {
    constructor() {
        this.bindActions(SerieEpisodesActions);
        this.medias = [];
    }

    onGetSerieEpisodesSuccess(api) {
        var {data} = api;
        this.medias = data;
    }

    onGetSerieEpisodesFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(SerieEpisodesStore);