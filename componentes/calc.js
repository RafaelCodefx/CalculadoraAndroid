import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';

export default function Calc() {
  const [input, setInput] = useState(''); // Estado para armazenar a entrada
  const [operation, setOperation] = useState(null); // Estado para armazenar a operação

  // Função para adicionar números ou operações
  const handlePress = (value) => {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      // Caso seja uma operação, armazenamos a operação
      setOperation(value);
      setInput(input + ` ${value} `); // Exibe a operação na tela
    } else {
      // Se for um número, adiciona ao input
      setInput(input + value);
    }
  };

  // Função para realizar o cálculo
  const calculate = () => {
    try {
      // Avalia a expressão matematicamente
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Erro');
    }
  };

  // Função para limpar a tela
  const clear = () => {
    setInput('');
  };

  return (
    <View>
      <StatusBar style="auto" />
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
      </View>

      {/* Linha de botões 1, 2, 3 */}
      <View style={styles.conteiner1}>
        <View style={styles.buton}>
          <Button title="1" color="#4e8b8e" onPress={() => handlePress('1')} />
        </View>
        <View style={styles.buton}>
          <Button title="2" color="#4e8b8e" onPress={() => handlePress('2')} />
        </View>
        <View style={styles.buton}>
          <Button title="3" color="#4e8b8e" onPress={() => handlePress('3')} />
        </View>
      </View>

      {/* Linha de botões 4, 5, 6 */}
      <View style={styles.conteiner1}>
        <View style={styles.buton}>
          <Button title="4" color="#4e8b8e" onPress={() => handlePress('4')} />
        </View>
        <View style={styles.buton}>
          <Button title="5" color="#4e8b8e" onPress={() => handlePress('5')} />
        </View>
        <View style={styles.buton}>
          <Button title="6" color="#4e8b8e" onPress={() => handlePress('6')} />
        </View>
      </View>

      {/* Linha de botões 7, 8, 9 */}
      <View style={styles.conteiner1}>
        <View style={styles.buton}>
          <Button title="7" color="#4e8b8e" onPress={() => handlePress('7')} />
        </View>
        <View style={styles.buton}>
          <Button title="8" color="#4e8b8e" onPress={() => handlePress('8')} />
        </View>
        <View style={styles.buton}>
          <Button title="9" color="#4e8b8e" onPress={() => handlePress('9')} />
        </View>
      </View>

      {/* Linha de botões 0 */}
      <View style={styles.conteiner1}>
        <View style={styles.buton}>
          <Button title="0" color="#4e8b8e" onPress={() => handlePress('0')} />
        </View>
      </View>

      {/* Linha de botões de operação */}
      <View style={styles.conteiner1}>
        <View style={styles.buton}>
          <Button title="+" color="#ff9500" onPress={() => handlePress('+')} />
        </View>
        <View style={styles.buton}>
          <Button title="-" color="#ff3b30" onPress={() => handlePress('-')} />
        </View>
        <View style={styles.buton}>
          <Button title="*" color="#4caf50" onPress={() => handlePress('*')} />
        </View>
        <View style={styles.buton}>
          <Button title="/" color="#1e90ff" onPress={() => handlePress('/')} />
        </View>
      </View>

      {/* Botão de resultado e limpar */}
      <View style={styles.conteiner1}>
        <View style={styles.buton}>
          <Button title="C" color="#ff6347" onPress={clear} />
        </View>
        <View style={styles.buton}>
          <Button title="=" color="#32cd32" onPress={calculate} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    padding: 20,
    backgroundColor: '#333',
  },
  input: {
    fontSize: 36,
    color: 'white',
    textAlign: 'right',
  },
  buton: {
    margin: 5,
    width: 60,
  },
  conteiner1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
