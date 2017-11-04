/**
 * Created by fcampinho on 01/07/2016.
 */
import alt from '../alt';
import SerieListActions from '../actions/SerieListActions';

class SerieListStore {
    constructor() {
        this.bindActions(SerieListActions);
        this.series = [];
    }

    onGetSerieListSuccess(api) {
        var {data} = api;
        this.series = data;
    }

    onGetSerieListFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(SerieListStore);