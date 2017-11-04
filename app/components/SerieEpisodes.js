/**
 * Created by fcampinho on 25/08/2016.
 */
import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import SerieEpisodesStore from '../stores/SerieEpisodesStore';
import SerieEpisodesActions from '../actions/SerieEpisodesActions';

class SerieEpisodes extends React.Component {
    constructor(props) {
        super(props);
        this.state = SerieEpisodesStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        SerieEpisodesStore.listen(this.onChange);
        SerieEpisodesActions.getSerieEpisodes(this.props.serieId, this.props.mediaId);
    }

    componentWillUnmount() {
        SerieEpisodesStore.unlisten(this.onChange);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.serieId !== undefined && this.props.serieId !== undefined)
            if (prevProps.serieId !== this.props.serieId) {
                SerieEpisodesActions.getSerieEpisodes(this.props.serieId, this.props.mediaId);
            }
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let SerieEpisodes = this.state.medias.map((media, index) => {
            return (
                <div key={media.id} className='col-lg-2 col-md-3 col-sm-4 col-xs-6 padding-botton'>
                    <Link to={'/series/season/' + media.serie_id + '/' + media.id}>
                        <img className="img-responsive" src={media.cover} alt={media.title}/>
                    </Link>
                    <div className="panel panel-default nopadding painel-episode">
                        <div className="panel-body">
                            <h4>{media.title}</h4>
                            <div className="text-justify padding-botton" dangerouslySetInnerHTML={{__html: media.storyline}} />
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div className='container-fluid'>
                <h3>Episódios</h3>
                <div className='row'>
                    {SerieEpisodes}
                </div>
            </div>
        );
    }
}

export default SerieEpisodes
