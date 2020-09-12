
const { concat, timer } = require('rxjs');
const { mapTo } = require('rxjs/operators')

// Emits a value after 3 seconds
const $firstRequest = timer(3000).pipe(
  mapTo('First Request...')
);

// Emits a value after 1 second
const $secondRequest = timer(1000).pipe(
  mapTo('Second Request...')
);

// concat joins multiple Observable together and emits their values sequentially
concat($firstRequest, $secondRequest)
  .subscribe(message => console.log(message));

/**
 * Expected Output
 *    First Request...
 *    Second Request...
*/