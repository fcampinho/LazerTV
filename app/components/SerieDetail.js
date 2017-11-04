/**
 * Created by fcampinho on 25/08/2016.
 */
import React from 'react';
import EpisodeDetail from './EpisodeDetail';
import SerieEpisodes from './SerieEpisodes'

class SerieDetail extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <EpisodeDetail serieId={this.props.params.serieId} mediaId={this.props.params.mediaId} />
                <SerieEpisodes serieId={this.props.params.serieId} mediaId={this.props.params.mediaId} />
            </div>
        );
    }
}

export default SerieDetail;