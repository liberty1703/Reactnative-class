import { View, Image, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const redesign = () => {
  return (
    <View style={styles.page}>
      <TouchableOpacity>
      <Image
      source={require("../../assets/images/settings.png")}
      style={{
        height:5,
        width:5,
        paddingHorizontal:20,
        paddingVertical:20,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        backgroundColor: "#ffff"
      }}
      />
      </TouchableOpacity>
      <Image
      source={require(
        "../../assets/images/FacebookLite.png"
      )}
      style={{
        height:60,
        width:60,
        alignSelf:'center',
        justifyContent: 'center',
        marginTop:40,
        borderColor:"grey",
        borderWidth:1,
        borderRadius:30,
      }}
      />
      <Image
      source={require("../../assets/images/picture.jpg")}
      style={{
        height:260,
        width: 260,
        borderRadius:125,
        marginTop:20,
        alignSelf:'center',
        justifyContent:'center',
        borderColor:"#FFFF",
        borderWidth:10,
      }} />

      <Text style={{
        fontSize:35,
        fontWeight:'bold',
        marginTop:20,
        textAlign:'center',
        justifyContent: 'center',
      }}>
      Jewoola Favour
      </Text>
      <Text style={{
        fontSize:15,
        fontWeight:'bold',
        marginTop:3,
        textAlign:'center',
        justifyContent: 'center',
        color: "grey"
      }}>
      9+ notifications
      </Text>
      <TouchableOpacity style= {styles.clikbtn1}>
        <Text style={{
          fontSize:20,
          
          textAlign:'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          color: "white"
        }}>
          Log in
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.clikbtn2}>
        <Text style={{
          fontSize:20,
          
          textAlign:'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          color: "black"
        }}>
          Log into another account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.clikbtn3}>
        <Text style={{
          fontSize:20,
          
          textAlign:'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          color: "blue"
        }}>
          create new account
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default redesign
const styles = StyleSheet.create ({
  page:{
    backgroundColor:"white",
    flex:1,
  },
  clikbtn1: {
    height:50,
    width:350,
    backgroundColor:"blue",
    paddingHorizontal:20,
    marginHorizontal:20,
    marginTop: 20,
    borderRadius:30,
    alignItems: "center",
    justifyContent: 'center',
  },
  clikbtn2:{
    height:50,
    width:350,
    backgroundColor:"white",
    paddingHorizontal:20,
    marginHorizontal:20,
    marginTop: 20,
    borderRadius:30,
    alignItems: "center",
    justifyContent: 'center',
    borderWidth:1,
    borderColor:"grey"
  },
  clikbtn3:{
    height:50,
    width:350,
    backgroundColor:"white",
    paddingHorizontal:20,
    marginHorizontal:20,
    marginTop: 20,
    borderRadius:30,
    alignItems: "center",
    justifyContent: 'center',
    borderWidth:1,
    borderColor:"blue"
  }
})