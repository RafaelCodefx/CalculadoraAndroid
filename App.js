import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calc from './componentes/calc';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bora Calcular?</Text>
      <Calc />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    fontFamily: 'roboto',
    
  },
  texto: {
    fontFamily:'roboto',
    fontSize: 40,
    color: 'red'
  }
});
