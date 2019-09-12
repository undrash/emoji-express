
const emojis = require( "./data/emojis" );


module.exports.defaults = (app) => {

    // ☎️
    app.get( "/%E2%98%8E", (req, res) => { req.url = "/contact"; app.handle( req, res ); } );

    // 📞
    app.get( "/%F0%9F%93%9E", (req, res) => { req.url = "/contact"; app.handle( req, res ); } );

    // 🤙
    app.get( "/%F0%9F%A4%99", (req, res) => { req.url = "/contact"; app.handle( req, res ); } );

    // 📮
    app.get( "/%F0%9F%93%AE", (req, res) => { req.url = "/contact"; app.handle( req, res ); } );

    // 🙋‍♂️
    app.get( "/%F0%9F%99%8B%E2%80%8D%E2%99%82", (req, res) => { req.url = "/about"; app.handle( req, res ); } );

    // 🙋‍♀️
    app.get( "/%F0%9F%99%8B%E2%80%8D%E2%99%80", (req, res) => { req.url = "/about"; app.handle( req, res ); } );

    // 💳
    app.get( "/%F0%9F%92%B3", (req, res) => { req.url = "/pricing"; app.handle( req, res ); } );

    // 💵
    app.get( "/%F0%9F%92%B5", (req, res) => { req.url = "/pricing"; app.handle( req, res ); } );

    // 💰
    app.get( "/%F0%9F%92%B0", (req, res) => { req.url = "/donate"; app.handle( req, res ); } );

    // 💡
    app.get( "/%F0%9F%92%A1", (req, res) => { req.url = "/info"; app.handle( req, res ); } );

    // 🤔
    app.get( "/%F0%9F%A4%94", (req, res) => { req.url = "/faq"; app.handle( req, res ); } );

    // 🏠
    app.get( "/%F0%9F%8F%A0", (req, res) => { req.url = "/home"; app.handle( req, res ); } );

    // 👤
    app.get( "/%F0%9F%91%A4", (req, res) => { req.url = "/profile"; app.handle( req, res ); } );

    // ⚙️
    app.get( "/%E2%9A%99", (req, res) => { req.url = "/settings"; app.handle( req, res ); } );

    // 🛠️
    app.get( "/%F0%9F%9B%A0%EF%B8%8F", (req, res) => { req.url = "/support"; app.handle( req, res ); } );

    // ⌨️
    app.get( "/%E2%8C%A8%EF%B8%8F", (req, res) => { req.url = "/login"; app.handle( req, res ); } );

    // 📜
    app.get( "/%F0%9F%93%9C", (req, res) => { req.url = "/terms"; app.handle( req, res ); } );

    // 🔒
    app.get( "/%F0%9F%94%92", (req, res) => { req.url = "/privacy"; app.handle( req, res ); } );

    // 🖊️
    app.get( "/%F0%9F%96%8A%EF%B8%8F", (req, res) => { req.url = "/posts"; app.handle( req, res ); } );

    // ✔️
    app.get( "/%E2%9C%94%EF%B8%8F", (req, res) => { req.url = "/subscribe"; app.handle( req, res ); } );

    // 🤗
    app.get( "/%F0%9F%A4%97", (req, res) => { req.url = "/join-us"; app.handle( req, res ); } );

    // 🧐
    app.get( "/%F0%9F%A7%90", (req, res) => { req.url = "/search"; app.handle( req, res ); } );

    // 💼
    app.get( "/%F0%9F%92%BC", (req, res) => { req.url = "/careers"; app.handle( req, res ); } );

    // 🚚
    app.get( "/%F0%9F%9A%9A", (req, res) => { req.url = "/delivery"; app.handle( req, res ); } );

    // 📺
    app.get( "/%F0%9F%93%BA", (req, res) => { req.url = "/tv"; app.handle( req, res ); } );

    // 🎙️
    app.get( "/%F0%9F%8E%99%EF%B8%8F", (req, res) => { req.url = "/podcast"; app.handle( req, res ); } );


};



module.exports.set = (app, emoji, route) => {

    let emojiRoute = encodeURI( emoji );

    if ( ! emojiRoute ) return;

    app.get( `/${ emojiRoute }`, (req, res) => { req.url = route; app.handle( req, res ); } );
};



module.exports.translateURLs = (req, res, next) => {

    let URL         = req.originalUrl;

    let emojisSorted    = emojis.sort( (a, b) => ( a.URI.length < b.URI.length ) ? 1 : -1 );

    for ( let emoji of emojisSorted ) {

        if ( URL.indexOf( emoji.URI ) !== -1 ) URL = URL.replace( new RegExp( emoji.URI, "g" ), emoji.name );
    }


    if ( URL !== req.originalUrl ) {
        res.redirect( URL );
    } else {
        next();
    }
};
