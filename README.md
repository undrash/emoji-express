
# emoji-express 🚂

  

 emoji-express adds emoji support to your [express](http://expressjs.com/) website's URLs. ✌️
  
  <br>
  
  Examples:
  
  `/contact` routes
  
  https://boardme.app/☎
  
  https://boardme.app/📞
  
  https://boardme.app/🤙
  
  `/pricing` routes
  
  https://boardme.app/💳

  https://boardme.app/💵

  https://boardme.app/💰


## Default usage

```js
const express = require('express')
const app = express()

const emoji = require('emoji-express')

emoji.defaults( app )

// Your routes here

app.listen(3000)
```

## Custom usage

```js
const express = require('express')
const app = express()

const emoji = require('emoji-express')

emoji.set( app, '📞', '/your/route/here' )
emoji.set( app, '🍉🍌', '/any/route/you/want' )
emoji.set( app, '🥑😂😂😂', '/any/route/you/want' )

// Your routes here

app.listen(3000)
```


## Installation

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install emoji-express
```

## Defaults

`/contact` /☎️ /📞 /🤙

`/about` /🙋‍♂️ /🙋‍♀️  

`/pricing` /💳 /💵 /💰 

`/info` /💡

`/faq` /🤔

`/home` /🏠

`/profile` /👤

`/settings` /⚙

`/support` / 🛠️

`/login` /⌨️

`/terms` /📜

`/privacy` /🔒

`/posts` /🖊️

`/subscribe` /✔️

<br>

  brought you by
  
  <a href="https://www.boardme.app/">
    <img style="width="100px;" src="https://www.boardme.app/public/img/boardme-blue.svg">
  </a>

