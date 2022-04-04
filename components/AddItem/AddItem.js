import { useState } from 'react'
import { TextInput, View } from 'react-native';
import { Buttons } from '../Buttons/Buttons'
import styles from '../../styles'

const AddItem = (props) => {
    const [ items, setItems] = useState('');
    const onHandlerChangeText = (text) => setItems(text)
    const { itemAdd } = props

    const onAddItem = () => {
        setItems('')
        itemAdd(items)
    }

  return (
    <View style={styles.buscar}>
          <TextInput 
            placeholder='Ingre un dia' 
            style={styles.input}
            value={items}
            onChangeText={onHandlerChangeText}
          />
        <Buttons
          text="Ver tarea del dia"
          onPress={onAddItem}
        />
      </View>
  )
}

export default AddItem