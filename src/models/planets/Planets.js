export default class Planets {
  constructor(
    planetName,
    conquestDate,
    primaryColor,
    secondaryColor,
    population,
    naturalResources,
    numSettlements,
    galaxy,
    solarSystem,
    coordinates,
    transmissionFrequency,
    communicationCode,
    planetRulerName,
    planetRulerTitle
  ) {
    this.id = this.generateId();
    this.planetName = planetName;
    this.conquestDate = conquestDate;
    this.primaryColor = primaryColor;
    this.secondaryColor = secondaryColor;
    this.population = population;
    this.naturalResources = naturalResources;
    this.numSettlements = numSettlements;
    this.galaxy = galaxy;
    this.solarSystem = solarSystem;
    this.coordinates = coordinates;
    this.transmissionFrequency = transmissionFrequency;
    this.communicationCode = communicationCode;
    this.planetRulerName = planetRulerName;
    this.planetRulerTitle = planetRulerTitle;
  }

  generateId() {
    return Math.floor(Math.random() * 1000);
  }
}
