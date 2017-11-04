/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';

class MediaDetailActions {
    constructor() {
        this.generateActions(
            'getMediaDetailSuccess',
            'getMediaDetailFail'
        );
    }

    getMediaDetail(payload) {
        let url = '/api/medias/' + payload.mediaType + '/' + payload.mediaId;

        $.ajax({ url: url })
            .done((data) => {
                this.getMediaDetailSuccess(data);
            })
            .fail((jqXhr) => {
                this.getMediaDetailFail(jqXhr);
            });
    }
}

export default alt.createActions(MediaDetailActions);