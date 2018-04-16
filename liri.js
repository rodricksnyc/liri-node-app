require("dotenv").config();
var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require("fs");



if (process.argv[2] === "my-tweets") {
var client = new Twitter(keys.twitter);

var params = {screen_name: 'manhattan_liz', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
  else {
    console.log(error);
  }
});
} else if (process.argv[2] === "spotify-this-song") {
  var spotify = require('node-spotify-api');
  var spotify = new Spotify(keys.spotify);

  var song = process.argv;
  var songName = process.argv[3]

  if (songName) {

  songName = process.argv.slice(3).join(' ');

} else {
  songName = "The Sign";
}
console.log(songName);
  spotify.search({
  type: 'track',
  query: songName
  }, function(err, data) {
  console.log("Spotify Response");
  console.log(data);

  if (err) {
  console.log(err);
}
});
} else if (process.argv[2] === "movie-this") {
  var movie = process.argv;
  var movieName = process.argv[3]

  if (movieName) {
    movieName = process.argv.slice(3).join(' ');
  } else {
    movieName = "The Lives of Others";
  }

// }
var request = require("request");
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=2bf21dd0";


console.log(queryUrl);
request(queryUrl, function(error, response, body) {


if (!error && response.statusCode === 200) {

console.log("Title: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nIMDB Rating: " + JSON.parse(body).imdbRating + "\nRotten Tomatoes Rating: " + JSON.parse(body).Value + "\nCountry Where Produced: " + JSON.parse(body).Country + "\nLanguage: " + JSON.parse(body).Language + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors);
}
});

} else if (process.argv[2] === "do-what-it-says") {
fs.readFile("random.txt", "UTF-8", function(err, data) {
if (err) {
console.log(error);
}
console.log("node liri.js " + data);
});
} else {
console.log("Please write a correct command. Command options are: 'my-tweets', 'spotify-this-song', 'movie-this', 'or do-what-it-says' ");
}
