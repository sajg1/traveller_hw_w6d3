const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transportToFind) {
  return this.journeys.filter((journey) => {
    return (journey.transport === transportToFind);
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return (journey.distance > minDistance);
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((totalDistance, journey) => {
    return totalDistance + journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const modesOfTransport = this.journeys.map((journey) => {
    return journey.transport;
  });
  const uniqueModesOfTransport = modesOfTransport.filter((transport, index, self) => {
    return self.indexOf(transport) === index;
  });
  return uniqueModesOfTransport;
};


module.exports = Traveller;
