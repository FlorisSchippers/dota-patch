import React, {Component} from 'react';
import {Switch, withRouter, Route} from 'react-router-dom';
import App from "../components/App";

// We need a Root component for React Hot Loading.
class Root extends Component {
    state = {};

    componentDidMount() {
    }

    render() {
        return (
            <Switch>
                <Route exact path='/' component={App}/>
            </Switch>
        );
    }
}

export default withRouter(Root);
