## Simple API

### This is a simple test API built using `Express` framework.

### A. Available End-points:

-   `'/api'`

    > API Homepage

-   `'/api/users'`

    > Returns information about all existing users

-   `/api/user/id=value`

    > Returns information about an user with matching id. Replace value with desired id.

-   `/api/user/name=value`
    > Returns information about an user with matching id. Replace value with desired name.


### B. How to run the API

1. Install dependencies of the SimpleAPI
    ```shell
    npm i
    ```

2. Run expressApp.js
    ```shell
    node expressApp.js
    ```
    > PS: If you want to run the server at different port than 3000, create a `.env` file and add an entry
    ```
    PORT=<port-number>
    ```

### C. How to run the tests
> Checkout [here](https://github.com/kiranadh1452/simpleAPI/blob/master/tests/apiTests/README.md)