# Flea-Market

Build your own flea-market platform in few minutes.

This project began from charity flea market, and we think a geek team should hold the flea market in geek way. We would focus on different bidding system in next version.

## Architecture

How we communicate between front-end and back-end side.

Token authentication: `http://<hostname>/` w/ package [redux-auth](https://github.com/lynndylanhurley/redux-auth).

GraphQL: `http://<hostname>/graphql` w/ relay standard.

## Installation

Install npm, node, nvm
Reference: node version: v6.2.2

```
git clone https://github.com/Fu-Bo-Tech/fubo-flea-market.git
```

Install package
```
cd fubo-flea-market
npm install
```

start express server
```
npm run start
```

Testing
```
npm test
```
## Setup

Replace `apiUrl` in app/index.js with your back-end hostname or ip address.

app/index.js
```
{
  apiUrl: 'http://flea.fubotech.com.tw/',
}
```

Replace `server` in app.stores/configureStore.dev.js, app.stores/configureStore.prod.js with your back-end hostname or ip address.

app.stores/configureStore.dev.js, app.stores/configureStore.prod.js
```
{
  server: 'http://flea.fubotech.com.tw/graphql',
}
```
