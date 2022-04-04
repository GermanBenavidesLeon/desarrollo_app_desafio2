import React from 'react';
import { Modal, Text, View } from 'react-native';
import { Buttons } from '../Buttons/Buttons';
import styles from '../../styles';

const MyModal = (props) => {
    const { visible, onDelete, item, onClose} = props

  return (
    <Modal
        animationType='slide'
        visible={visible}
      >
        <View style={styles.modal}>
          <View style={styles.modal2}>
            <View style={styles.close}>
              <Text style={styles.closeX} onPress={onClose.bind(this)}>X</Text>
            </View>
            <View style={styles.viewModal}>
                <Text style={styles.textModalTitulo}>Agenda</Text>
            </View>
            <View style={styles.viewModal}>
                <View style={styles.viewModal}>
                  <Text style={styles.textModal}>{item.value}</Text>
                </View>
            </View>
            <View style={styles.viewModal}>
                <Text style={styles.textModal}>
                  <Buttons text='Tarea completada' onPress={onDelete.bind(this, item.id)}/>
                </Text>
            </View>
          </View>
        </View>
      </Modal>
  )
}

export default MyModal