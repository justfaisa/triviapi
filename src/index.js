module.exports = {
    anime: function() {
        let anime = require('./assets/anime.json');
        let a = anime[Math.floor(Math.random() * anime.length)]
        return a
    },
};
