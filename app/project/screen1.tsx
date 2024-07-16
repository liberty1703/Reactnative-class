import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const _layout = () => {
  return (
    <View style={styles.page}>
      <Image
      source={require('../../assets/images/planett.jpg')}
      style={{
        height:50,
        width:50,
        alignSelf: 'center',
        borderRadius:150,
      }}
      />
      <Text style={{
        fontSize:30,
        textAlign:'center',
        justifyContent:'center',
        marginTop:10,
        color:"#55E6C1",
        fontWeight:'bold',
      }}>
        Explorezy
      </Text>
      <Image
      source={require("../../assets/images/map.jpg")}
      style={{
        height:260,
        width:260,
        borderRadius:150,
        marginTop:20,
        alignSelf: 'center'
      }}
      />
      <Text style={{
        fontWeight:'bold',
        color:"black",
        fontSize:35,
        alignSelf:'center',
        marginTop:20,
      }}>
        Welcome!
      </Text>
      <Text style={{
        color:"black",
        fontSize:15,
        alignSelf:'center',
        marginTop:10,
        textAlign:'center',
      }}>
        Every journey is an adventure waiting to unfold.{'\n'} 
        Explore memories with our travel app for the modern {'\n'}
         explorer in you!
      </Text>
      <TouchableOpacity style={styles.clk1}>
        <Text style={{
          fontSize:25,
          color: "white",
          fontWeight:'bold',
          alignSelf:'center'

        }}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.clk2}>
        <Text style={{
          fontSize:25,
          color: "#55E6C1",
          fontWeight:'bold',
          alignSelf:'center'

        }}>
          Log In
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor:'white',
    paddingHorizontal:20,
    paddingTop:20,
  },
  clk1:{
    height:50,
    backgroundColor: "#55E6C1",
    paddingHorizontal:20,
    justifyContent: "center",
    marginTop:20,
    borderRadius:10,
  },
  clk2:{
    height:50,
    backgroundColor: "white",
    paddingHorizontal:20,
    justifyContent: "center",
    marginTop:20,
    borderRadius:10,
    borderColor:"black",
    borderWidth:1
  }
})