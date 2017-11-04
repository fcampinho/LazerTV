/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';

class EpisodeDetailActions {
    constructor() {
        this.generateActions(
            'getEpisodeDetailSuccess',
            'getEpisodeDetailFail'
        );
    }

    getEpisodeDetail(serieId, mediaId) {
        let url = '/api/series/episode/' + serieId + '/' + mediaId;

        $.ajax({ url: url })
            .done((data) => {
                this.getEpisodeDetailSuccess(data);
            })
            .fail((jqXhr) => {
                this.getEpisodeDetailFail(jqXhr);
            });
    }
}

export default alt.createActions(EpisodeDetailActions);