import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import AddItem from './components/AddItem/AddItem';
import MyModal from './components/Modal/MyModal';
import styles from './styles';

export default function App() {
  const [count, setCount] = useState(3);
  const [ listItem, setListItem] = useState([{id:1, value:'Lunes = Natacion'},{id:2, value:'Martes = Abuela'}]);
  const [ itemSelected, setItemSelected] = useState({})
  const [ modalVisible, setModalVisible] = useState(false) 
  
  const onHandlerDelete = id => {
    setListItem( currentItem => currentItem.filter ( item => item.id !== id ))
    setItemSelected({})
    setModalVisible(!modalVisible)
    alert('Tarea Finalizada')
  }

  const onHandlerModal = id => {
    setItemSelected( listItem.filter( item => item.id === id ) [0])
    setModalVisible(!modalVisible)
  }

  const closeModal = () => {
    setModalVisible(!modalVisible)
  }

  const addItem = (items) => {
    setListItem (currentItem => 
      [...currentItem, {id: count, value: items}
      ])
      setCount(count + 1)
  }

  // const renderItem = data => <Texto key={data.item.id} id={data.item.id} value={data.item.value}></Texto>
  const renderItem = data => <Text style={styles.listDias} onPress={onHandlerModal.bind(this, data.item.id)}>{data.item.id}. {data.item.value}</Text>

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.nombre}>HORARIOS JUANA!</Text>
      </View>
      <AddItem itemAdd={addItem}/>
      <View style={styles.resultado}>
        <FlatList
          style={styles.listFlat}
          data={listItem}
          renderItem={renderItem}
          keyExtractor={ item => item.id }
        >
        </FlatList>
        {/* {
          listItem.map( item => <Text>{item.value}</Text>)
      } */}
      </View>
      <MyModal onDelete={onHandlerDelete} item={itemSelected} visible={modalVisible} onClose={closeModal}/>
    </View>
  );
}

// function Texto(props) {
//   return <Text onPress={onHandlerModal.bind(this, props.id)}> {props.id}. {props.value}</Text>
// }

