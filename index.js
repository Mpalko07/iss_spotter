const { fetchISSFlyOverTimes } = require('./iss');

const exampleCoords = { latitude: 43.653226, longitude: -79.3831843 };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});