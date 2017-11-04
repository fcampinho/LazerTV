/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';

class MediaPlayActions {
    constructor() {
        this.generateActions(
            'getMediaPlaySuccess',
            'getMediaPlayFail'
        );
    }

    getMedia(payload) {
        let url = '/api/medias/' + payload.mediaType + '/' + payload.mediaId;

        $.ajax({ url: url })
            .done((data) => {
                this.getMediaPlaySuccess(data);
            })
            .fail((jqXhr) => {
                this.getMediaPlayFail(jqXhr);
            });
    }
}

export default alt.createActions(MediaPlayActions);