**Prerequisites:**
- You need to have nodejs and npm installed on your machine

**Running the Tests:**
- You will need to install the node modules using:
```
npm install
```

- To run the functional tests in the interactive mode please use:
```
npm run cypress:open
```

or use:
```
npx cypress open
```

Then choose the feature file to run


- To run the functional tests in the console please use:
```
npm run cypress:run
```


### Notes:
- If you faced permission errors on linux try deleting videos folder inside cypress
- The tests are configured to retry for two times if they fail to avoid false negative
- The test on the master branch is written using Cucumber syntax while the test on the `objectModel` branch is written using the page object model (POM) design
- Test is configured to take screenshot & save a screen recording if it failed while running in the console for easy debugging
