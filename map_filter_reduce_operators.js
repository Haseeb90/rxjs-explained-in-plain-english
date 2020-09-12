
const { from } = require('rxjs');
const { filter, map, reduce } = require('rxjs/operators');

const shows = [
  { name: "The Last Kingdom", seasons: 4, rating: 9.5, isOnWatchList: true },
  { name: "Love Death and Robots", seasons: 1, rating: 9.8, isOnWatchList: true },
  { name: "Arrested Development", seasons: 5, rating: 9.5, isOnWatchList: false },
  { name: "Some Show", seasons: 2, rating: 5, isOnWatchList: false },
  { name: "Some Other Show", seasons: 4, rating: 0, isOnWatchList: false },
  { name: "And Another Show", seasons: 8, rating: 1.4, isOnWatchList: false },
  { name: "The Show Down", seasons: 6, rating: 10, isOnWatchList: true },
  { name: "Yet Another Show", seasons: 10, rating: 6, isOnWatchList: true },
];

function getNamesOfShowsWithHighRatingsOnWatchList() {
  return from(shows).pipe(
    // Filter out the shows that have a rating of 5 or higher
    filter(show => show.rating >= 5),

    // Filter the list further to get the ones on my watch list
    filter(show => show.isOnWatchList),
    
    // Get the names of the shows that passed the previous two conditions
    map(show => show.name)
  );
}

getNamesOfShowsWithHighRatingsOnWatchList()
  .subscribe(
    (showName) => console.log(showName),
    (error) => console.log(error),
    () => console.log('Done listing highly rated shows on your watch list.')
);
  
/**
 * Expected Output
 *    The Last Kingdom
 *    Love Death and Robots
 *    The Show Down
 *    Yet Another Show
 *    Done listing highly rated shows on your watch list.
*/

function getTotalNumberOfHighlyRatedShowsOnWatchList() {
  return from(shows).pipe(
    // Filter out the shows that have a rating of 5 or higher
    filter(show => show.rating >= 5),

    // Filter the list further to get the ones on my watch list
    filter(show => show.isOnWatchList),

    // Get the number of shows that passed the previous two conditions
    reduce((accumulator, currentShow) => accumulator += 1, 0)
  );
}

getTotalNumberOfHighlyRatedShowsOnWatchList()
  .subscribe(
    (totalNumberOfShows) => console.log(totalNumberOfShows),
    (error) => console.log(error),
    () => console.log('Done listing the total number of shows.')
);
  
/**
 * Expected Output
 *    4
 *    Done listing the total number of shows.
 */