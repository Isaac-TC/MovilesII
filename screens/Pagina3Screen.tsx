import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Pagina3Screen() {

    const [nombre,setnombre] = useState('')
    const [edad,setedad] = useState(0)
    useEffect(() => {
     if( edad < 0 ){
        setedad(0)
     }
    }, [edad])
    

    function usuario(){
        Alert.alert('Mensaje' , nombre + ' tiene ' + edad + ' años ' )
    }


  return (
    <View style={styles.container}>
      <Text style={{fontSize:40}}>FORMULARIO</Text>
      <TextInput
      style={styles.imput}
      placeholder='Ingresar Nombre'
      onChangeText={ (texto) => setnombre(texto)}
      />

      <TextInput
      style={styles.imput}
      placeholder='Ingresar Edad'
      keyboardType='numeric'
      onChangeText={(texto)=>setedad(+texto)}
      //value= { edad.toString() }
      />
      

      <Button title='Aceptar' onPress={()=>usuario()}/>
    </View>
  )
}

const styles = StyleSheet.create({
    imput:{
        backgroundColor:'#6666',
        fontSize:25,
        height:50,
        width:'85%',
        margin:10

    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})