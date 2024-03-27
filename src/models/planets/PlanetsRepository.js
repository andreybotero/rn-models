import { planet } from "../../data/Profile";
import Planets from "./Planets";


class PlanetsRepository {
  constructor() {
    this.planets = [];
  }

  getAll() {
    return this.planets;
  }

  get(id) {
    return this.planets.find((planet) => planet.id === id);
  }
  
  add(planet) {
    this.planets.push(planet);
  }
  
  remove(id) {
    this.planets = this.planets.filter((planet) => planet.id !== id);
  }
  
  update(
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
      const planet = this.get(id);
      
      if (planet) {
        planet.planetName = planetName;
        planet.conquestDate = conquestDate;
        planet.primaryColor = primaryColor;
        planet.secondaryColor = secondaryColor;
        planet.population = population;
        planet.naturalResources = naturalResources;
        planet.numSettlements = numSettlements;
        planet.galaxy = galaxy;
        planet.solarSystem = solarSystem;
        planet.coordinates = coordinates;
        planet.transmissionFrequency = transmissionFrequency;
        planet.communicationCode = communicationCode;
        planet.planetRulerName = planetRulerName;
        planet.planetRulerTitle = planetRulerTitle;
      }
      return planet;
    }
  }
  
const newplanet = new Planets(
  planet.planetName,
  planet.conquestDate,
  planet.primaryColor,
  planet.secondaryColor,
  planet.population,
  planet.naturalResources,
  planet.numSettlements,
  planet.galaxy,
  planet.solarSystem,
  planet.coordinates,
  planet.transmissionFrequency,
  planet.communicationCode,
  planet.planetRulerName,
  planet.planetRulerTitle
);
const planetsRepository = new PlanetsRepository();
planetsRepository.add(newplanet);

export default planetsRepository;
