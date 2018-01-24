import React, { Component } from 'react';

import Aux from '../../hoc/AuxW';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSiderDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSiderDrawer: false});
    };

    sideDrawerTogglehandler = () => {
        this.setState((prevState) => {
            return { showSiderDrawer: !prevState.showSiderDrawer };
        });
    }

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerTogglehandler} />
                <SideDrawer open={this.state.showSiderDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;