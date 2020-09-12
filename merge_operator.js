
const { merge, timer } = require('rxjs');
const { mapTo } = require('rxjs/operators');

// Emits a value after 3 seconds
const $firstRequest = timer(3000).pipe(
  mapTo('First Request...')
);

// Emits a value after 1 second
const $secondRequest = timer(1000).pipe(
  mapTo('Second Request...')
);

// merge joins multiple Observable together and emits their values concurrently
merge($firstRequest, $secondRequest)
  .subscribe(message => console.log(message));

/**
 * Expected Output
 *    Second Request...
 *    First Request...
*/