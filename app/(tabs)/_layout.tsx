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
      <Text style={{
        fontSize:30,
        textAlign:'center',
        justifyContent:'center',
        marginTop:10,
        color:"black",
        fontWeight:'bold',
      }}>
        Congratulations!
      </Text>
      <Image
      source={require("../../assets/images/happy.jpg")}
      style={{
        height:300,
        width:300,
        borderRadius:150,
        marginTop:10,
        alignSelf: 'center'
      }}
      />
      <Text style={{
        fontSize:35,
        textAlign:'center',
        justifyContent:'center',
        marginTop:10,
        color:"black",
        fontWeight:'bold',
      }}>
        Your signup was {"\n"}succesful!
      </Text>
      <TouchableOpacity style={styles.clk7}>
        <Text style={{
          fontSize:25,
          color: "white",
          fontWeight:'bold',
          alignSelf:'center'

        }}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
  page: {
    backgroundColor:"white",
    flex:1,
    paddingHorizontal:20,
    paddingTop:20,
  },
  clk7:{
    height:50,
    backgroundColor: "#55E6C1",
    paddingHorizontal:20,
    justifyContent: "center",
    marginTop:20,
    borderRadius:10,
  },
})