import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const _layout = () => {
  return (
    <View style ={styles.page}>
    <Image
    source={
      require("../../assets/images/settings.png")}
      style={{
        height:5,
        width: 5,
        paddingHorizontal:20,
        paddingVertical:20,
        alignSelf:'flex-end',
        justifyContent:'center',
        backgroundColor:'#0000',
        

        
      }}
      />
      <Image
      
      source={
        require("../../assets/images/FacebookLite.png")}
        style= {{
          height:60,
          width:60,
          alignSelf:'center',
          marginTop: 40,
          borderColor:"grey",
          borderWidth:1,
          borderRadius:30,
        }}
        />
        <Image
        source={
          require(
            "../../assets/images/picture.jpg"
          )
        }
        style={{
          height:260,
          width:260,
          marginTop: 20,
          borderRadius:125,
          alignSelf:'center',
          justifyContent:'center',
          borderColor:"#ffff",
          borderWidth:10,
        }}
        />
      
        <Text style= {{
          fontSize: 35,
          fontWeight:"bold",
          marginTop:20,
          textAlign: 'center',
          justifyContent:'center'
        }}>
          Jewoola Favour
        </Text>
        <Text style= {{
          fontSize: 15,
          marginTop:3,
          textAlign: 'center',
          justifyContent:'center',
          color:'grey'
        }}>
          9+ notifications
        </Text>
        <TouchableOpacity style = {styles.clickbtn}>
          <Text style = {{
            fontSize: 20,
            color:"#fff",
            fontWeight: 'bold',
            textAlign: 'center',
            justifyContent:'center'
            
          }}>
            Log in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.clickbtn2}>
          <Text style = {{
            fontSize: 20,
            color:"#0000000",
            fontWeight: 'bold',
            textAlign: 'center',
            justifyContent:'center'
            
          }}>
            Log into another account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.clickbtn3}>
        <Text style = {{
            fontSize: 20,
            color:"blue",
            fontWeight: 'bold',
            textAlign: 'center',
            justifyContent:'center'
            
          }}>
            Create new account
          </Text>
        </TouchableOpacity>
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
  page: {
    flex:1,
    backgroundColor: "#fffff",
  },
  clickbtn:{
    height: 50,
    width:350,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
    marginHorizontal:20,
    
    
  },
  clickbtn2:{
    height: 50,
    width:350,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 30,
    borderWidth:0.3,
    borderColor:"grey",
    paddingHorizontal: 20,
    marginHorizontal:20,
  },
  clickbtn3: {
    height: 50,
    width:350,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
    marginHorizontal:20,
    borderWidth: 1,
    borderColor: 'blue'
  }
})
