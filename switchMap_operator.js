
const { timer, interval } = require('rxjs');
const { switchMap, takeWhile, mapTo, map } = require('rxjs/operators');

const shows = [
  { name: "The Last Kingdom", seasons: 4, rating: 9.5, isOnWatchList: true },
  { name: "Love Death and Robots", seasons: 1, rating: 9.8, isOnWatchList: true },
  { name: "Arrested Development", seasons: 5, rating: 9.5, isOnWatchList: false },
  { name: "The Show Down", seasons: 6, rating: 10, isOnWatchList: true },
  { name: "Yet Another Show", seasons: 10, rating: 6, isOnWatchList: true },
];

// Emit a name every second
function showNames$() { 
  return interval(1000).pipe(
    takeWhile(value => value < shows.length),
    map(value => shows[value].name)
  );
}

function getSearchedShowDetails$(showName) {
  const showDetails = shows.filter(show => show.name === showName);

  // Cause a delay anywhere between 0 to 3 seconds to emulate HTTP request
  const randomInterval = Math.floor(Math.random() * 4) * 1000;

  console.log(`Details for ${showName} will be returned in ${randomInterval/1000} seconds.`)
  return timer(randomInterval).pipe(mapTo(showDetails));
}

// Outter Observable gets the show names every second
showNames$().pipe(
  // Inner Observable gets the details but the response may be delayed
  // If the Outter Observable changes before the Inner Observable gets the response
  // then the Inner Observable stops emitting items from the earlier request and 
  // starts emitting items from the new one.
  switchMap(name => getSearchedShowDetails$(name))
).subscribe(showDetails => console.log(showDetails));

