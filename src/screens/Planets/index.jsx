import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import styles from "./styles";
import Title from "../../components/Title";
// Import planet repository or any relevant code for managing planet data
import planetsRepository from "../../models/planets/PlanetsRepository";

export default function Planets() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [allPlanets, setAllPlanets] = useState([]);

  useEffect(() => {
    if (isFocused) {
      const planets = planetsRepository.getAll();
      setAllPlanets(planets);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Title title="Planets" />
      <Text>Tela de listagem de todos os planetas</Text>

      {allPlanets.length > 0 ? (
        <View style={styles.planetList}>
          {allPlanets.map((planet) => (
            <View key={planet.id} style={styles.planetItem}>
              <View>
                <Text style={styles.planetName}>{planet.planetName}</Text>
              </View>

              <View style={styles.planetActions}>
                <TouchableOpacity
                  style={styles.detailsButton}
                  onPress={() =>
                    navigation.navigate("Profile", { data: planet })
                  }
                >
                  <Text>Detalhes</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      ) : (
        <Text>Não há planetas cadastrados</Text>
      )}
    </View>
  );
}
