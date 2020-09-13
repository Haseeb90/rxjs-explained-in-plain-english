
const { Observable, from } = require('rxjs');
const { mergeMap } = require('rxjs/operators');

// You can Observe season one
function getSeasonOneEpisodes() {
  return from([
    { id: 'S01-E01', 
      duration: '56min', 
      name: 'One to rule them all', 
      season: 'Season 1' 
    },
    { id: 'S01-E02', 
      duration: '50min', 
      name: 'Flatten this Observable.', 
      season: 'Season 1' 
    },
  ]);
}

// You can also Observe season two
function getSeasonTwoEpisodes() {
  return from([
    { id: 'S02-E01', 
      duration: '60min', 
      name: 'Where\'s my Observable?', 
      season: 'Season 2' 
    },
    { id: 'S02-E02', 
      duration: '40min', 
      name: 'Subscribe to this one.', 
      season: 'Season 2' 
    },
  ]);
}

function getAllEpisodesForThisSeries() {
  return new Observable(observer => {

    // Emits episodes for season one
    observer.next(getSeasonOneEpisodes());

    // Emits episodes for season two
    observer.next(getSeasonTwoEpisodes());

    // Once all seasons are done the series is complete
    observer.complete();
  });
}

/**
 * With mergeMap we can flatten the nested Observable and get
 * the values emitted from the inner Observable. 
 * 
 * The Operator returns an Observable that emits 
*/
const TheLastKingdom$ = getAllEpisodesForThisSeries();

TheLastKingdom$.pipe(
  mergeMap(season => season)
).subscribe(episode => console.log(episode));



// /**
//  * Without using mergeMap() we'd need to have nested subscriptions
//  * to get through the entire series.
// */
// const TheLastKingdom$ = getAllEpisodesForThisSeries();

// TheLastKingdom$.subscribe(seasons => {// captures one season at a time
//   let currentSeason = '';

//   seasons.subscribe(episode => {
//     // Goes through all episodes before going to the next season
//     console.log(episode);
//     currentSeason = episode.season;
//   });

//   console.log(`End of ${currentSeason}...\n`)
// });
