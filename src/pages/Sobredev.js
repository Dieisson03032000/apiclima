import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function DevInfo() {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={{ fontWeight: 'bold' }}>Dados do desenvolvedor</Text> {"\n"}{'\n'}
        Nome: Dieisson Adriano Debortolli {'\n'}{'\n'}
        Email: 1119383@imed.edu.br {'\n'}{'\n'}
        RA: 1119383
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      padding: 10,
      borderRadius: 10,
      margin: 5,
      backgroundColor: '#dbdbdb',
      justifyContent: 'center'
  }
});