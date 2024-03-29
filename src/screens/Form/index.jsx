import React, { useState, useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Title from "../../components/Title";
import Planets from "../../models/planets/Planets";
import planetsRepository from "../../models/planets/PlanetsRepository";

export default function Form({ route }) {
  const { planet, edit } = route.params;

  const [planetName, setName] = useState("");
  const [conquestDate, setConquestDate] = useState("");
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [population, setPopulation] = useState("");
  const [naturalResources, setNaturalResources] = useState("");
  const [numSettlements, setNumSettlements] = useState("");
  const [galaxy, setGalaxy] = useState("");
  const [solarSystem, setSolarSystem] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [transmissionFrequency, setTransmissionFrequency] = useState("");
  const [communicationCode, setCommunicationCode] = useState("");
  const [planetRulerName, setRulerName] = useState("");
  const [planetRulerTitle, setRulerTitle] = useState("");
  const [IsUpdate, setIsUpdate] = useState(edit);

  const navigation = useNavigation();

  useEffect(() => {
    if (edit) {
      setName(planet.Name);
      setConquestDate(planet.conquestDate);
      setPrimaryColor(planet.primaryColor);
      setSecondaryColor(planet.secondaryColor);
      setPopulation(planet.population);
      setNaturalResources(planet.naturalResources);
      setNumSettlements(planet.numSettlements);
      setGalaxy(planet.galaxy);
      setSolarSystem(planet.solarSystem);
      setCoordinates(planet.coordinates);
      setTransmissionFrequency(planet.transmissionFrequency);
      setCommunicationCode(planet.communicationCode);
      setRulerName(planet.planetRulerName);
      setRulerTitle(planet.planetRulerTitle);
      setIsUpdate(true);
    } else {
      ClearInputs();
    }
  }, [planet, edit]);

  const ClearInputs = () => {
    setIsUpdate(false);
    setName("");
    setConquestDate("");
    setPrimaryColor("");
    setSecondaryColor("");
    setPopulation("");
    setNaturalResources("");
    setNumSettlements("");
    setGalaxy("");
    setSolarSystem("");
    setCoordinates("");
    setTransmissionFrequency("");
    setCommunicationCode("");
    setRulerName("");
    setRulerTitle("");
  };

  const handleUserAction = () => {
    if (edit) {
      planetsRepository.update(
        planet.id,
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
      );
      ClearInputs();
    } else {
      const newPlanet = new Planets(
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
      );
      planetsRepository.add(newPlanet);
      ClearInputs();
    }
    navigation.navigate("Planet");
  };

  return (
    <View style={styles.container}>
      <Title title="Cadastro do Planeta" />

      <TextInput
        placeholder="Nome do Planeta"
        style={styles.planetInput}
        onChangeText={setName}
        value={planetName}
      />
      <TextInput
        placeholder="Data de Conquista"
        style={styles.planetInput}
        onChangeText={setConquestDate}
        value={conquestDate}
      />
      <TextInput
        placeholder="Cor Primária"
        style={styles.planetInput}
        onChangeText={setPrimaryColor}
        value={primaryColor}
      />
      <TextInput
        placeholder="Cor Secundária"
        style={styles.planetInput}
        onChangeText={setSecondaryColor}
        value={secondaryColor}
      />
      <TextInput
        placeholder="População"
        style={styles.planetInput}
        onChangeText={setPopulation}
        value={population}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Recursos Naturais"
        style={styles.planetInput}
        onChangeText={setNaturalResources}
        value={naturalResources}
      />
      <TextInput
        placeholder="Número de Assentamentos"
        style={styles.planetInput}
        onChangeText={setNumSettlements}
        value={numSettlements}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Galáxia"
        style={styles.planetInput}
        onChangeText={setGalaxy}
        value={galaxy}
      />
      <TextInput
        placeholder="Sistema Solar"
        style={styles.planetInput}
        onChangeText={setSolarSystem}
        value={solarSystem}
      />
      <TextInput
        placeholder="Coordenadas"
        style={styles.planetInput}
        onChangeText={setCoordinates}
        value={coordinates}
      />
      <TextInput
        placeholder="Frequência de Transmissão"
        style={styles.planetInput}
        onChangeText={setTransmissionFrequency}
        value={transmissionFrequency}
      />
      <TextInput
        placeholder="Código de Comunicação"
        style={styles.planetInput}
        onChangeText={setCommunicationCode}
        value={communicationCode}
      />
      <TextInput
        placeholder="Governante do Planeta (Nome)"
        style={styles.planetInput}
        onChangeText={setRulerName}
        value={planetRulerName}
      />
      <TextInput
        placeholder="Governante do Planeta (Título)"
        style={styles.planetInput}
        onChangeText={setRulerTitle}
        value={planetRulerTitle}
      />

      <TouchableOpacity onPress={handleUserAction}>
        <Text>{IsUpdate ? "Salvar Alterações" : "Criar Planeta"}</Text>
      </TouchableOpacity>

      {IsUpdate && (
        <TouchableOpacity onPress={ClearInputs}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
