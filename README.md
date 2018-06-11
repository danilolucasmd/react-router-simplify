# React Router Simplify

See [Demo](https://danilolucasmd.github.io/react-router-simplify-example)

See [Example](https://danilolucasmd.github.io/react-router-simplify-example)

## Requirements

* React >= 16.0.0
* React Router >= 16.4.0
* React Router Dom >= 4.3.0

## Install

```bash
yarn add react-router-simplify
```

## Setting the Router in your App

```bash
import { Router } from 'react-router-simplify';

export default class App extends PureComponent {
  render() {
    return (
      <Router authenticated={true}>
        <Page />
      </Router>
    );
  }
}
```
The authenticated prop in the Router component say if the user's session is valid or not, if you have that information stored it should be put in here.

## Turn a Component in to a Routed Component

```bash
  export default Pages extends PureComponent {
    static routes = [
      {
        path: '/first',
        exact: true,
        component: FirstPage,
        authenticWhen: false,
        redirect: '/second',
      },
      {
        path: '/second',
        exact: false,
        component: SecondPage,
        redirect: '/first',
      },
      {
        path: '/third',
        exact: true,
        component: ThirdPage,
        allowAnonymous: true,
      },
    ];

    render() {
      <Fragment>
        <SideNav />
        {this.props.children}
      </Fragment>
    }
  }
```
To make a Routed Component you need to create a static attribute named "routes", It will express all the routes that can be accessed after the curent been displayed.

The Routes will be placed in the children prop, so the Routes will be displayed where you put the {this.props.children} inside the render method of your Component. This will allow you to componse your component with the routes and to route just a single frame of your application, for example.

#### This is just an abstraction of React Router to make it easier to work with, if you have some doubt of how the React Router library works you can access their documentation [here](https://reacttraining.com/react-router/).