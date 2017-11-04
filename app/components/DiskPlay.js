/**
 * Created by fcampinho on 01/07/2016.
 */
import React from 'react';
import {Link} from 'react-router';
import {isEqual} from 'underscore';
import DiskPlayStore from '../stores/DiskPlayStore';
import DiskPlayActions from '../actions/DiskPlayActions';

class DiskPlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = DiskPlayStore.getState();
        this.onChange = this.onChange.bind(this);

        this.playNext = this.playNext.bind(this);
        this.setIcons = this.setIcons.bind(this);
    }

    componentDidMount() {
        DiskPlayStore.listen(this.onChange);
        DiskPlayActions.getDisk(this.props.params);
        DiskPlayActions.getMusics(this.props.params);
    }

    componentWillUnmount() {
        DiskPlayStore.unlisten(this.onChange);
    }

    playNext() {
        var index = this.state.currentPlay;
        if (this.state.currentPlay < this.state.musics.length - 1) index += 1;
        else index = 0;

        var url = this.state.musics[index].url;

        this.setIcons(index);
        this.setState({src: url, currentPlay: index});
    }

    playMusic(id, url, index) {
        if (this.state.currentPlay === index) {
            this.setState({src: '', currentPlay: -1});
            this.setIcons(-1);
        }
        else {
            this.setState({src: url, currentPlay: index});
            this.setIcons(index);
        }
    }

    setIcons(index) {
        var icons = this.state.icons;

        for (var i = 0; i < this.state.musics.length; i++) {
            if (i === index) icons[i] = "glyphicon glyphicon-pause";
            else icons[i] = "glyphicon glyphicon-play";
        }

        this.setState({icons: icons});
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let DiskBanner = (
            <div className="row">
                <div className="panel panel-default nopadding disk-text col-lg-6 col-md-8 col-sm-9 col-xs-12">
                    <div className="panel-body scrollable">
                        <div key="disk{this.state.disk.id}">
                            <div className="text-left padding-botton"
                                 dangerouslySetInnerHTML={{__html: this.state.disk.storyline}}/>
                        </div>
                    </div>
                </div>
                <div className='nopadding text-center col-lg-6 col-md-4 col-sm-3 col-xs-12 disk-thumbnail'>
                    <img className="img-responsive img-rounded" src={this.state.disk.cover}
                         alt={this.state.disk.title}></img>
                </div>
            </div>
        );

        let DiskMusics = this.state.musics.map((music, index) => {
            return (
                <div key={music.id} className="row">
                    <div className='col-lg-2 col-md-3 col-sm-4 col-xs-6 nopadding'>
                        <span className={this.state.icons[index]}
                              onClick={this.playMusic.bind(this, music.id, music.url, index)}/>
                        <span className="padding-left">{music.title}</span>
                    </div>
                </div>
            );
        });

        let DiskPlay = (
            <div key={this.state.disk.id} className="row">
                <audio id='audioControl' src={this.state.src} autoPlay
                       className='audio-control' controls="controls" onEnded={this.playNext}>
                    HTML5 Video is required for this example
                </audio>
            </div>
        );

        return (
            <div className='container-fluid'>
                <div className='container-fluid'>
                    <div>
                        {DiskBanner}
                    </div>
                    <div>
                        {DiskMusics}
                    </div>
                    <div>
                        {DiskPlay}
                    </div>
                </div>
            </div>
        );
    }
}

export default DiskPlay