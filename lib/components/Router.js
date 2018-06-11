import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

export default class Router extends PureComponent {
  renderRoutes(Component, auth, baseUrl = '') {
    return (
      <Switch>
        <Component.type>
          <Switch>
            {(Component.type.routes || []).map((route, index) => {
              const path = baseUrl + route.path;

              let SubComponent = React.createElement(route.component);
              SubComponent = SubComponent.type.routes && SubComponent.type.routes.length ? this.renderRoutes(SubComponent, auth, path) : SubComponent;
              
              return (
                <Route
                  key={index}
                  path={path}
                  exact={route.exact}
                  render={() => this.handleAuthentication(SubComponent, route, auth)}
                />
              );
            })}
          </Switch>
        </Component.type>
      </Switch>
    );
  }

  handleAuthentication(Component, route, auth) {
    if(auth !== undefined || !route.allowAnonymous) {
      const isAuthenticated = auth === (route.authenticWhen === undefined && true);
  
      if(isAuthenticated) {
        return Component;
      } else {
        return <Redirect from={route.path} to={route.redirect || '/'} />
      }
    }
    
    return Component;
  }

  render() {
    return (
      <BrowserRouter>
        {this.renderRoutes(this.props.children, this.props.authenticated)}
      </BrowserRouter>
    );
  }
}

Router.propTypes = {
  children: PropTypes.object,
  authenticated: PropTypes.bool,
};