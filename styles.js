import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9575cd',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 30,
    },
    nombre: {
      fontSize: 32,
      fontFamily: 'Helvetica',
      color: '#e0f7fa',
      marginTop: 20,
    },
    buscar: {
      backgroundColor:'#fce4ec',
      width: 300,
      borderRadius: 5,
      marginTop: 20,
      alignItems: 'center',
    },
    input: {
      flex: 2,
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 10,
      width: 220,
      fontSize: 22,
      marginTop: 20,
      marginBottom: 10,
    },
    resultado: {
      flex: 3,
      backgroundColor: '#f3e5f5',
      marginTop: 16,
      padding: 10,
      width: 300,
      borderRadius: 10,
    },
    listFlat: {
      padding: 20,
    },
    listDias: {
      fontSize: 20,
      margin: 5,
      marginLeft: 10,
      padding: 4,
      paddingLeft: 30,
      backgroundColor: '#e1bee7',
    },
    modal: {
      flex: 1,
      backgroundColor: '#f8bbd0',
      padding: 50,
      justifyContent: 'center',
    },
    close: {
      paddingLeft: 180,
      paddingBottom: 15,
    },
    closeX: {
      fontSize: 24,
    },
    modal2: {
      backgroundColor: '#fce4ec',
      height: 320,
      width: 270,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 60,
    },
    viewModal: {
      marginBottom: 10,
    },
    textModalTitulo: {
        fontSize: 26,
        fontWeight: '600',
    },
    textModal: {
      fontSize: 20,
    },
    button: {
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        width: 180,
        height: 50,
        padding: 5,
        marginVertical: 8,
    },
    buttonText: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 20,
    }
  });

