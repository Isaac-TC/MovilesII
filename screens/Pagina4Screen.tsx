import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Pagina4Screen() {
  const [kelvin, setKelvin] = useState(''); 
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  useEffect(() => {
    const kelvinValue = parseFloat(kelvin);
    if (kelvinValue < 0) {
      setKelvin('0');
    } else {
      setCelsius(kelvinValue - 273.15);
      setFahrenheit((kelvinValue - 273.15) * 9 / 5 + 32);
    }
  }, [kelvin]);

  function showResults() {
    Alert.alert(
      'Resultados',
      `Kelvin: ${kelvin}K\nCelsius: ${celsius.toFixed(2)}°C\nFahrenheit: ${fahrenheit.toFixed(2)}°F`
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>Converti Temperatura</Text>

      <TextInput
        style={styles.input}
        placeholder='Ingresar grados Kelvin'
        keyboardType='numeric'
        onChangeText={(texto) => setKelvin(texto)}
        value={kelvin}
      />

      <Button title='Convertir' onPress={showResults} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ccc',
    fontSize: 25,
    height: 50,
    width: '85%',
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
