'use strict';

process.on('message', data => {
  for (let i = 0; i < 100000; i++) {
    for (let j = 0; j < 10000; j++) {
      let someAnswer = i + j - 3
    }
  }     
  process.send("Results")
})