# node_react_fullstack
Example app for React with node, oauth, mongo etc...

1) npm install
2) create a google account, go to developer console (google cloud console), api, credentials, and set a new OAuth credentials client
3) update the autorized url for with yours at callBackURL in the index and at google credentials client
4) create a file config/keys.js and add a module.exports = {} with our client id and secret
```javascript 
module.exports = {
    googleClientID: "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
    googleClientSecret: "YYYYYYYYYYYYYYYYYYYYYY"
}
```