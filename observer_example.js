/**
 * An Observer should have the following three methods
  * next() -- To handle the next value emited by the Observable
  * error() -- To handle any errors emited by the Observable
  * complete() -- To handle data stream completion
*/

const Observer = {
  next: function (data) {
    console.log(data);
  },

  error: function (error) {
    console.log(error);
  },

  complete: function () {
    console.log('Stream is complete.');
  }
};