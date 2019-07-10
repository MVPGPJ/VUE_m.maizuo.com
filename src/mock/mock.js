const banner = require('./banner.json')
const movies1 = require('./nowPlaying/movies1')
const movies2 = require('./nowPlaying/movies2')
const movies3 = require('./nowPlaying/movies3')
const movies4 = require('./nowPlaying/movies4')
const movies5 = require('./nowPlaying/movies5')

module.exports = function(){
    return {
        banner,
        movies1,
        movies2,
        movies3,
        movies4,
        movies5,
    }
}