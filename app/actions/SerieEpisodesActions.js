/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';

class SerieEpisodesActions {
    constructor() {
        this.generateActions(
            'getSerieEpisodesSuccess',
            'getSerieEpisodesFail'
        );
    }

    getSerieEpisodes(serieId, mediaId) {
        let url = '/api/series/season/' + serieId + '/' + mediaId;

        $.ajax({ url: url })
            .done((data) => {
                this.getSerieEpisodesSuccess(data);
            })
            .fail((jqXhr) => {
                this.getSerieEpisodesFail(jqXhr);
            });
    }
}

export default alt.createActions(SerieEpisodesActions);