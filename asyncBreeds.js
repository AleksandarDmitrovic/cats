const fs = require('fs');

const breedDetailsFromFile = function(breed, callbackRunAfterDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error,data) => {
    // CHANGE: Pass data into callback instead of returning it directly
    console.log("In readFile's Callback: it has the data");
    if (!error) callbackRunAfterDone(data);
    if (error) callbackRunAfterDone(undefined);
  });
};




module.exports = breedDetailsFromFile;