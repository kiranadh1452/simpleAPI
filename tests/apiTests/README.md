## API tests for SimpleAPI

### Steps to run the tests.

1. Install dependencies of the root app (SimpleAPI)
    ```shell
    npm i
    ```

2. Run expressApp.js
    ```shell
    node expressApp.js
    ```

3. Navigate inside the tests/apiTests Folder and install required dependencies over there
    ```shell
    cd tests/apiTests
    npm i
    ```

4. Rename the file `.env-ex` to `.env` and update the url as given by expressApp.

5. Run the tests
    ```shell
    npm run test:api features/
    ```
