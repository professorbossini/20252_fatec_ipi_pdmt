import { 
  Button,
  Pressable,
  StyleSheet, 
  Text, 
  TextInput,
  View 
} from 'react-native';
import { useState } from 'react'


interface Lembrete{
  id: string;
  texto: string;
}

export default function App() {
  const [lembrete, setLembrete] = useState<string>('')
  const [lembretes, setLembretes] = useState<Lembrete[]>([])

  const adicionar = () => {
    const novoLembrete: Lembrete = {
      id: new Date().getTime().toString(),
      texto: lembrete 
    }
    setLembretes(lembretesAtual => [novoLembrete, ...lembretesAtual])
    setLembrete('')
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={lembrete}
        onChangeText={setLembrete} 
        placeholder='Digite um lembrete...'/>
        <Pressable 
          onPress={adicionar}
          style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </Pressable>
        {
          lembretes.map(l => <Text>{l.texto}</Text>)
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    textAlign: 'center',
    borderRadius: 4,
    padding: 12
  },
  button: {
    width: '80%',
    backgroundColor: '#0096F3',
    padding: 12,
    borderRadius: 4
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
});
