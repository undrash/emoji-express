


module.exports.defaults = (app) => {

    // ☎️
    app.get( "/%E2%98%8E%EF%B8%8F", (req, res) => { req.url = "/contact"; app.handle( req, res ); } );

    // 📞
    app.get( "/%F0%9F%93%9E", (req, res) => { req.url = "/contact"; app.handle( req, res ); } );

    // 🤙
    app.get( "/%F0%9F%A4%99", (req, res) => { req.url = "/contact"; app.handle( req, res ); } );

    // 🙋‍♂️
    app.get( "/%F0%9F%99%8B%E2%80%8D%E2%99%82%EF%B8%8F", (req, res) => { req.url = "/about"; app.handle( req, res ); } );

    // 🙋‍♀️
    app.get( "/%F0%9F%99%8B%E2%80%8D%E2%99%80%EF%B8%8F", (req, res) => { req.url = "/about"; app.handle( req, res ); } );

    // 📜
    app.get( "/%%F0%9F%93%9C", (req, res) => { req.url = "/about"; app.handle( req, res ); } );

    // 💳
    app.get( "/%F0%9F%92%B3", (req, res) => { req.url = "/pricing"; app.handle( req, res ); } );

};


module.exports.set = (app, emoji, route) => {

    let emojiRoute = encodeURI( emoji );

    if ( ! emojiRoute ) return;

    app.get( `/${ emojiRoute }`, (req, res) => { req.url = route; app.handle( req, res ); } );
};
