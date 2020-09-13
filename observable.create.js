
let { Observable } = require('rxjs');

function getShowsOnUsersWatchList() {

  const shows = [
    { name: "The Last Kingdom", seasons: 4, rating: 9.5, isOnWatchList: true },
    { name: "Love Death and Robots", seasons: 1, rating: 9.8, isOnWatchList: true },
    { name: "Arrested Development", seasons: 5, rating: 9.5, isOnWatchList: false },
  ];

  /**
   * Observable.create accepts a function parameter called onSubscription and converts it into an Oservable
   * onSubscription is executed every time an Observer subscribes to the Observable
   * The Observer subscribing is passed as the only parameter to onSubscription function
   * Observable.create allows us to define additional functionality inside the Observable
   * This makes it our responsibility to call the next(), error() and complete() methods of the Observer
  */
  
  // return Observable.create( observer => {
    
  //   shows.forEach(show => {
  //     if (show.isOnWatchList) {
  //       observer.next(`* ${show.name} is on your watch list.`);
  //     }
  //   });

  //   observer.complete();
  // });

  return new Observable(observer => {
    shows.forEach(show => {
      if (show.isOnWatchList) {
        observer.next(`* ${show.name} is on your watch list.`);
      }
    });

    observer.complete();
  });
}

getShowsOnUsersWatchList().subscribe(
  (show) => console.log(show),
  (error) => console.log(error),
  () => console.log('Done watching all shows in your watch list.')
);

/**
 * Expected Output:
 * > node .\observable.create.js
 * 
    * The Last Kingdom is on your watch list.
    * Love Death and Robots is on your watch list.
    Done watching all shows in your watch list
*/
