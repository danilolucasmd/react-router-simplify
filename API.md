# API

* [Router](#router)

* [static Routes](#routes)

### Router

| Props                | Type    | Default | Description                                        |
|----------------------|---------|---------|----------------------------------------------------|
| authenticated        | boolean |         | Indicates if the application is authenticated, you may have this information stored.<br>If undefined the Router will disconcider authentication. ||
### static Routes

This values are applied to every object inside the static Routes attribute inside your Routed Component.

| Props             | Type    | Description                                        |
|-------------------|---------|----------------------------------------------------|
| path&nbsp;*       | string  | Route's url. If the Routed Component is a sub route, the path is concatenated.<br/>So, if the route to render the component is /pages/first, the path field must be filled with /first |
| exact             | boolean | When true, will only match if the path matches the location.pathname exactly |
| component&nbsp;*  | node    |                                                    |
| authenticWhen     | boolean |                                                    |
| redirect          | string  |                                                    |
| allowAnonymous    | boolean |                                                    |

\* required prop