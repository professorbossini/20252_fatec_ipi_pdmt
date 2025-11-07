import { 
  Alert,
  Button,
  FlatList,
  Linking,
  Pressable,
  StyleSheet, 
  Text, 
  TextInput,
  View 
} from 'react-native';
import { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'


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

  const remover = (lembrete: Lembrete) => {
    // Alert.alert(
    //   // título
    //   'Remover lembrete',
    //   // texto central
    //   `Deseja remover esse lembrete? ${lembrete.texto}`,
    //   // lista de botões
    //   [
    //     {
    //       text: 'Cancelar',
    //       style: 'cancel',
    //     },
    //     {
    //       text: 'Remover',
    //       style: 'destructive',
    //       onPress: () => {
    //         setLembretes((lembretesAtual) => {
    //           return lembretesAtual.filter((l) => l.id !== lembrete.id)
    //         })  
    //       }
    //     }
    //   ]
    // )
    setLembretes(lembretesAtual => lembretesAtual.filter(l => l.id !== lembrete.id))
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
        <FlatList 
          style={styles.list}
          keyExtractor={(l) => l.id}
          data={lembretes}
          ItemSeparatorComponent={() => <View style={{marginVertical: 4}}></View>}
          // ListFooterComponent={() => <FontAwesome name='github' size={40}/>}
          renderItem={(l) => {
            return (
              <View style={styles.listItem}>
                <Text
                  style={styles.listItemText}>
                  {l.item.texto}
                </Text>
                <View style={styles.listItemButtons}>
                  <Pressable
                    onPress={() => remover(l.item)}>
                    <FontAwesome name="trash-o" size={24} color={'red'}/>
                  </Pressable>
                  <Pressable>
                    <FontAwesome name="pencil" size={24} color={'blue'}/>
                  </Pressable>
                </View>
              </View>
            )
          }}/>
          <View style={{borderWidth: 1, borderColor: '#EEE', borderRadius: 4, width: '80%', alignItems: 'center', marginTop: 12, paddingVertical: 8}}>
            <Pressable onPress={() => Linking.openURL('https://github.com/professorbossini')}>
                <FontAwesome name='github' size={40}/>
            </Pressable>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 18
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
  },
  list: {
    marginTop: 12, 
    borderWidth: 1, 
    borderColor: '#DDD', 
    borderRadius: 8, 
    width: '80%',
    padding: 8
  },
  listItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBlockColor: "#EEE",
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemText: {
    textAlign: 'center',
    width: '70%'
  },
  listItemButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '30%'
  }
});

// [
//   {
//     item: {
//       id: 1,
//       texto: 'abc'
//     }
//   },
//   {
//     item: {
//       id: 2,
//       texto: 'abcd'
//     }
//   }
// ]

// [
//   {
//     id: 1,
//     texto: 'abc'
//   },
//   {
//     id: 2,
//     texto: 'abcd'
//   }
// ]
