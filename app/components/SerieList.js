/**
 * Created by fcampinho on 01/07/2016.
 */
import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import SerieListStore from '../stores/SerieListStore';
import SerieListActions from '../actions/SerieListActions';

class SerieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = SerieListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        SerieListStore.listen(this.onChange);
        SerieListActions.getSerieList();
    }

    componentWillUnmount() {
        SerieListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let serieList = this.state.series.map((serie, index) => {
            return (
                <div key={serie.id} className='col-lg-2 col-md-3 col-sm-4 col-xs-6 padding-botton'>
                    <Link to={'/series/season/' + serie.id + '/0'}>
                        <img className="img-responsive" src={serie.cover} alt={serie.title}/>
                    </Link>
                </div>
            );
        });
        return (
            <div className='container-fluid'>
                <div className='row'>
                    {serieList}
                </div>
            </div>
        );
    }
}

export default SerieList