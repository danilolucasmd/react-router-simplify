# API

* [Router](#router)

* [static Routes](#routes)

### Router

| Props                | Type    | Default | Description                                        |
|----------------------|---------|---------|----------------------------------------------------|
| authenticated        | boolean |         | Indicates if the application is authenticated, you may have this information stored.<br/>If undefined the Router will ignore the authentication in every Route. ||

### static Routes

This values are applied to every object inside the static Routes attribute inside your Routed Component.

| Props             | Type    | Default | Description                                        |
|-------------------|---------|---------|----------------------------------------------------|
| path&nbsp;*       | string  |         | Route's url. If the Routed Component is a sub route, the path is concatenated.<br/>So, if the route to render the component is /pages/first, the path field must be filled with /first |
| exact             | boolean | false   | When true, will only match if the path matches the location.pathname exactly. |
| component&nbsp;*  | node    |         | The Component that will be rendered if the route match the browser's url. |
| authenticWhen     | boolean | false   | Indicates when the route is authentic considering the state of the authenticated prop from Router<br/><br/> (authenticWhen === authenticated) === isAuthenticated<br/><br/>So, when authenticWhen is true and authenticated is true, the route is authenticated. If authenticWhen is false and authenticated is true, the route is not authenticated, and so on.
| redirect          | string  |         | The new location that will be rendered if the Route's authentication fails. |
| allowAnonymous    | boolean | false   | Ignore the authentication when rendering the specific Route. |

\* required prop