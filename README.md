# CSC515 GDrive app Readme
Single page app utilizing the Google Drive API

## The 3 Unique Views:
The Following is a rough outline of what the 3 unique page views for this single page application should contain.

### File Permissions:
A view displaying the files in the user's Drive and the people that those files are shared with
  Allows the user to share/revoke sharing with other users

### File Upload/Download:
A view displaying the files in the user's Drive
  Allows the user to download and upload files

### Files Accessed/Admin View:
A view displaying the history of interactions with the files in the user's Drive
  Shows the user what files were edited, when they were edited, and who edited them

### Helpful Links:
[Google's REST API](https://developers.google.com/drive/v3/reference/)

[Vue.js Framework Guide](https://vuejs.org/v2/guide/)


## Build Setup

``` bash
# install dependencies
npm install

# server with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Adding New Methods (For Developers)
We've changed the way methods are loaded through Vue. There is now a `index.js` file located in the `/src/cmd/` directory.
The methods are added to that file in the Vue format, as seen here: 

![VueMethodsFormat](/docs/methodFormating.jpg?raw=true)

You will import these methods into each vue by using `import cmd from '../cmd'` in the `<script>` section of each Vue. Then add a new method and call `cmd."methodToImport"` as seen here:

![VueImportMethodFormat](/docs/importingMethodToVue.jpg?raw=true)

## Authentication Script location has changed!

The Authentication script (the place where the api key goes) has changed to main.js

The API key and Client ID will be inserted in the initClient method in main.js

![VueImportMethodFormat](/docs/api_key.jpg?raw=true)
