/**
 * Created by fcampinho on 01/07/2016.
 */
import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import  NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = NavbarStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        NavbarStore.listen(this.onChange);
        NavbarActions.getNavbar();
    }

    componentWillUnmount() {
        NavbarStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let menuList = this.state.navbar.map((menu, index) => {
            if (menu.type == 1)
                return (<li key={menu.type}><Link to='/medias/movies'>Filmes</Link></li>);
            else if (menu.type == 2)
                return (<li key={menu.type}><Link to='/series/'>Séries</Link></li>);
            else if (menu.type == 5)
                return (<li key={menu.type}><Link to='/disks'>Musicas</Link></li>);
            else if (menu.type == 4)
                return (<li key={menu.type}><Link to='/medias/animations'>Desenhos</Link></li>);
            else if (menu.type == 3)
                return (<li key={menu.type}><Link to='/medias/shows'>Shows</Link></li>);
            else if (menu.type == 6)
                return (<li key={menu.type}><Link to='/medias/documentaries'>Documentários</Link></li>);
        });

        return (
            <nav className='navbar navbar-inverse'>
                <div className="container-fluid">
                    <div className='navbar-header'>
                        <button type='button' className='pull-left navbar-toggle collapsed' data-toggle='collapse'
                                data-target='#navbar'>
                            <span className='sr-only'>Toggle navigation</span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <Link to='/' className="navbar-brand"><img src="/images/lazertv_40.png"
                                                                  alt="Logomarca Lazer TV"/></Link>
                    </div>
                    <div id='navbar' className='navbar-collapse collapse'>
                        <ul className='nav navbar-nav navbar-static-top'>
                            <li><Link to='/'>Home</Link></li>
                            {menuList}
                            <li><Link to='/contactus'>Fale Conosco</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;