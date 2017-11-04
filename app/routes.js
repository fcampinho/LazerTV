/**
 * Created by fcampinho on 29/06/2016.
 */
import React from 'react';
import {Route} from 'react-router'

import App from './components/App';
import Home from './components/Home';
import MediaList from './components/MediaList';
import MediaPlay from './components/MediaPlay';
import MediaDetail from './components/MediaDetails'
import SerieList from './components/SerieList';
import DiskList from './components/DiskList';
import DiskPlay from './components/DiskPlay';
import ContactUS from './components/ContactUS';
import SerieDetail from './components/SerieDetail'

export default (
    <Route component={App}>
        <Route path='/' component={Home}/>

        <Route path='/series' component={SerieList} />
        <Route path='/series/season/:serieId/:mediaId' component={SerieDetail} />

        <Route path='/medias/:mediaType' component={MediaList} />
        <Route path='/mediadetail/:mediaType/:mediaId/:mediaTitle' component={MediaDetail} />
        <Route path='/mediaplay/:mediaType/:mediaId/:mediaTitle' component={MediaPlay}/>

        <Route path='/disks' component={DiskList}/>
        <Route path='/diskplay' component={DiskPlay}>
            <Route path=':diskId' component={DiskPlay}/>
        </Route>

        <Route path="/contactus" component={ContactUS}/>

        <Route path="*" component={Home} />
    </Route>
);