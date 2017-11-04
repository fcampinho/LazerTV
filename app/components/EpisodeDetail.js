/**
 * Created by fcampinho on 25/08/2016.
 */
import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import EpisodeDetailStore from '../stores/EpisodeDetailStore';
import EpisodeDetailActions from '../actions/EpisodeDetailActions';

class EpisodeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = EpisodeDetailStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        EpisodeDetailStore.listen(this.onChange);
        EpisodeDetailActions.getEpisodeDetail(this.props.serieId, this.props.mediaId);
    }

    componentWillUnmount() {
        EpisodeDetailStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.mediaId !== this.props.mediaId) {
            EpisodeDetailActions.getEpisodeDetail(this.props.serieId, this.props.mediaId);
        }
    }

    render() {
        let EpisodeBanner = (
            <div key="banner{this.state.media.id}" className="video-thumbnail">
                <Link
                    to={'/mediaplay/' + this.state.media.type + "/" + this.state.media.id + "/" + this.state.media.title}>
                    <i className="glyphicon glyphicon-play-circle"></i>
                    <img className="img-responsive" src={this.state.media.banner} alt={this.state.media.title}></img>
                </Link>
            </div>
        );

        let EpisodeDetail = (
            <div key={this.state.media.id}>
                <h4>{this.state.media.title}</h4>
                <div className="text-justify padding-botton" dangerouslySetInnerHTML={{__html: this.state.media.storyline}} />
                <div className="text-text padding-botton"
                     dangerouslySetInnerHTML={{__html: this.state.media.detail}}/>
            </div>
        );

        return (
            <div className='container-fluid'>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="panel panel-default nopadding painel-text col-lg-6 col-md-4 col-sm-3 col-xs-12">
                            <div className="panel-body">
                                {EpisodeDetail}
                            </div>
                        </div>
                        <div className='nopadding col-lg-6 col-md-8 col-sm-9 col-xs-12'>
                            {EpisodeBanner}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EpisodeDetail