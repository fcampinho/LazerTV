/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';

class BannerActions {
    constructor() {
        this.generateActions(
            'getBannerSuccess',
            'getBannerFail'
        );
    }

    getBanner() {
        let url = '/api/advertisements/2';

        $.ajax({ url: url })
            .done((data) => {
                this.getBannerSuccess(data);
            })
            .fail((jqXhr) => {
                this.getBannerFail(jqXhr);
            });
    }
}

export default alt.createActions(BannerActions);