
const { from } = require('rxjs');

// The array of data we want to convert to an Observable.
const shows = [
  { name: "The Last Kingdom", seasons: 4, rating: 9.5 },
  { name: "Love Death and Robots", seasons: 1, rating: 9.8 },
  { name: "Arrested Development", seasons: 5, rating: 9.5 },
];

/** 
 * The from() method is capable of converting an array into an Observable
 * Here we're passing in the Array of shows and assigning the returned Observable to $myShows.
 * The $ is not necessary but it's a convention to indicate that the variable is an Observable
*/
const $myShows = from(shows);

/**
 * We then subscribe to the Observable and pass in an Observer.
 * The Observable $myShows will invoke the next(), error() and complete() methods on the Observer
*/
$myShows.subscribe(
  (show) => console.log(show),              // First function is for handling the next value
  (error) => console.log(error),            // Second function is for handling any errors
  () => console.log('Stream is complete.')  // Third function is for handling stream completion
);


/**
 * Expected output
 * > node .\observable.from.implicit.observer.js
 *
 *  { name: 'The Last Kingdom', seasons: 4, rating: 9.5 }
 *  { name: 'Love Death and Robots', seasons: 1, rating: 9.8 }
 *  { name: 'Arrested Development', seasons: 5, rating: 9.5 }
 *  Stream is complete.
 *
*/