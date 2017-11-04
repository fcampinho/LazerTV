/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';

class SerieListActions {
    constructor() {
        this.generateActions(
            'getSerieListSuccess',
            'getSerieListFail'
        );
    }

    getSerieList() {
        let url = '/api/series/';

        $.ajax({ url: url })
            .done((data) => {
                this.getSerieListSuccess(data);
            })
            .fail((jqXhr) => {
                this.getSerieListFail(jqXhr);
            });
    }
}

export default alt.createActions(SerieListActions);