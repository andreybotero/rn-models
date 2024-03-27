import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Title from "../../components/Title";

import planetsRepository from "../../models/planets/PlanetsRepository";

export default function PlanetProfile({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  const editPlanet = () => {
    navigation.navigate("Form", { planet: data, edit: true });
  };

  const deletePlanet = () => {
    planetsRepository.remove(data.id);
    navigation.navigate("Form");
  };

  return (
    <View style={styles.container}>
      <Title title="Planet Profile" />

      {data ? (
        <Text>Planet Details</Text>
      ) : (
        <Text>Select a planet to view its details</Text>
      )}

      <View style={styles.planet}>
        <View style={styles.planetDetail}>
          <Text style={styles.text}>Planet Name: {data.planetName}</Text>
          <Text style={styles.text}>Conquest Date: {data.conquestDate}</Text>
          <Text style={styles.text}>Primary Color: {data.primaryColor}</Text>
          <Text style={styles.text}>
            Secondary Color: {data.secondaryColor}
          </Text>
          <Text style={styles.text}>Population: {data.population}</Text>
          <Text style={styles.text}>
            Natural Resources: {data.naturalResources}
          </Text>
          <Text style={styles.text}>
            Number of Settlements: {data.numSettlements}
          </Text>
          <Text style={styles.text}>Galaxy: {data.galaxy}</Text>
          <Text style={styles.text}>Solar System: {data.solarSystem}</Text>
          <Text style={styles.text}>Coordinates: {data.coordinates}</Text>
          <Text style={styles.text}>
            Transmission Frequency: {data.transmissionFrequency}
          </Text>
          <Text style={styles.text}>
            Communication Code: {data.communicationCode}
          </Text>
          <Text style={styles.text}>
            Planet Ruler Name: {data.planetRulerName}
          </Text>
          <Text style={styles.text}>
            Planet Ruler Title: {data.planetRulerTitle}
          </Text>
        </View>

        <View style={styles.planetActions}>
          <TouchableOpacity style={styles.editButton} onPress={editPlanet}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={deletePlanet}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
