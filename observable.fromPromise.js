
// const { fromPromise } = require('rxjs/internal/observable/fromPromise');
const { from } = require('rxjs');

function getShowsFromWatchList() { 
  const shows = [
    { name: "The Last Kingdom", seasons: 4, rating: 9.5, isOnWatchList: true },
    { name: "Love Death and Robots", seasons: 1, rating: 9.8, isOnWatchList: true },
    { name: "Arrested Development", seasons: 5, rating: 9.5, isOnWatchList: false },
  ];

  return new Promise((resolve, reject) => resolve(shows));
}

/**
 * Observable.fromPromise returns an Observable that emits the value that the Promise resolved with.
 * In this case the Promise resovlves to the array of shows and the Observable emits the entire array.
 * That's why in the next() method we're looping over the shows.
*/
// const shows$ = fromPromise(getShowsFromWatchList());
const shows$ = from(getShowsFromWatchList());

shows$.subscribe(
  (shows) => {
    shows.forEach(show => console.log(`${show.name} is in your watch list.`));
  },
  (error) => console.log('Oops, something went wrong.'),
  () => console.log('Done listing all shows.')
);