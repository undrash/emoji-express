
# Emojify your API! 👍

  

 Slashemoji adds emoji support to your [express](http://expressjs.com/) website's URLs. 😇
  
  <br>

  yourwebsite.com/contact     😐
  
  yourwebsite.com/📞          🤩


  <br>


```js
const express = require('express')
const app = express()

const emoji = require('slashemoji')

emoji.init( app )

app.get('/contact', function (req, res) {
  res.send('This is your contact page.')
})

app.listen(3000)
```

## Installation

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install slashemoji
```

## Routes

Emoji support for `/contact`

/☎️

/📞

/🤙

Emoji support for `/about`

/🙋‍♂️

/🙋‍♀️

/📜

<br>

  brought you by
  
  <a href="https://www.boardme.app/">
    <img style="width="100px;" src="https://www.boardme.app/public/img/boardme-blue.svg">
  </a>

