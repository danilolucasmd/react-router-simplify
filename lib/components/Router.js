import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

export default class Router extends PureComponent {
  renderRoutes(children, auth, baseUrl = '') {
    return (
      <Fragment>
        {children}
        <Switch>
          {(children.type.routes || []).map((route, index) => {
            const path = baseUrl + route.path;
            let CompEl = React.createElement(route.component);
            let Component = CompEl.type.routes && CompEl.type.routes.length ? renderRoutes(CompEl, auth, path) : CompEl;
            
            return (
              <Route
                key={index}
                path={path}
                exact={route.exact}
                render={() => handleAuthentication(Component, route, auth)}
              />
            );
          })}
        </Switch>
      </Fragment>
    );
  }

  handleAuthentication(Component, route, auth) {
    if(!route.allowAnonymous) {
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
        {renderRoutes(this.props.children, this.props.authenticated)}
      </BrowserRouter>
    );
  }
}

Router.propTypes = {
  children: PropTypes.object,
  authenticated: PropTypes.object,
};