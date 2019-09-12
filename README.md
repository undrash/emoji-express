
# emoji-express 🚂

  

 `emoji-express` adds emoji support to your [express](http://expressjs.com/) website's URLs. ✌️
  
  <br>
  
  Examples:
  
  `/contact` routes
  
  https://boardme.app/📮
  
  `/pricing` routes
  
  https://boardme.app/💳



## Default usage (static websites)
It offers automatic emoji support for all the main routes of your website. E.g. contact, pricing, faq, etc.

```js
const express = require('express')
const app = express()

const emoji = require('emoji-express')

emoji.defaults( app )

// Your routes here

app.listen(3000)
```


## Translate emojis from URLs automatically
It translates emojis automatically from URLs.

Examples:

https://yourwebsite.com/🦇🚶‍♂️🚣 

translated: https://yourwebsite.com/batman-walking

https://yourwebsite.com/🔥-in-the-🕳️

translated: https://yourwebsite.com/fire-in-the-hole

```js
const express = require('express')
const app = express()

const emoji = require('emoji-express')

app.use( emoji.translateURLs )

// Your routes here

app.listen(3000)
```



## Custom usage
It links any custom emojis (or strings of emojis) to any URL in your website.

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

`/contact` /☎ /📮 /📞 /🤙

`/about` /🙋‍♂️ /🙋‍♀️  

`/pricing` /💳 /💵 

`/donate` /💰 

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

`/join-us` /🤗

`/search` /🧐

`/careers` /💼

`/delivery` /🚚

`/tv` /📺

`/podcast` /🎙️





<br>

  brought you by
  
  <a href="https://www.boardme.app/">
    <img style="width="100px;" src="https://www.boardme.app/public/img/boardme-blue.svg">
  </a>

