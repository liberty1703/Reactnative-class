import { StyleSheet, Text, View,  Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const _layout = () => {
  return (
    <View style={styles.page}>
      <TouchableOpacity>
      <Image
      source={require(
        '../../assets/images/arrow.png'
      )}
      style={{
        height:30,
        width:30,
      }}
      />
      </TouchableOpacity>
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
        Create Account
      </Text>
     <TextInput style ={styles.inputcontainer}
     placeholder='Full Name '
     placeholderTextColor={"grey"}
   
     />
     <TextInput style ={styles.inputcontainer1}
     placeholder='E-mail '
     placeholderTextColor={"grey"}
     
   
     />
     <TextInput style ={styles.inputcontainer2}
     placeholder='Password '
     secureTextEntry={true}
     placeholderTextColor={"grey"}
   
     />
     <Text style={{
      fontSize:15,
      marginTop:5,
     }}>
      I agree with Privacy Policy and Terms & Conditions
     </Text>
     <TouchableOpacity style={styles.clk3}>
        <Text style={{
          fontSize:25,
          color: "white",
          fontWeight:'bold',
          alignSelf:'center'

        }}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <Text style={{
        fontSize:15,
        color:"black",
        textAlign:'center',
        marginTop: 10,
        fontWeight:'bold'
      }}>
        Already have an account? Log in
      </Text>
      <Text style={{
        fontSize:30,
        color:"black",
        textAlign:'center',
        justifyContent:'center',
        marginTop: 10,
        fontWeight:'bold'
      }}>
        OR
      </Text>
      <TouchableOpacity style={styles.clk4}>
        <Text style={{
          fontSize:20,
          color: "black",
          fontWeight:'bold',
          alignSelf:'center'

        }}>
          Sign Up with Google
        </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clk4}>
        <Text style={{
          fontSize:20,
          color: "black",
          fontWeight:'bold',
          alignSelf:'center'

        }}>
          Sign Up with Facebook
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
  inputcontainer:{
    height: 44,
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 5,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderColor: "grey",
    fontSize:18,
  },
  inputcontainer1:{
    height: 44,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 5,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderColor: "grey",
    fontSize:18,
  },
  inputcontainer2:{
    height: 44,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 5,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderColor: "grey",
    fontSize:18,
  },
  clk3:{
    height:50,
    backgroundColor: "#55E6C1",
    paddingHorizontal:20,
    justifyContent: "center",
    marginTop:20,
    borderRadius:10,
  },
  clk4:{
    height:50,
    backgroundColor: "white",
    paddingHorizontal:20,
    justifyContent: "center",
    marginTop:20,
    borderRadius:10,
    borderColor:"#55E6C1",
    borderWidth:1,
    
  },
  clk5:{
    height:50,
    backgroundColor: "white",
    paddingHorizontal:20,
    justifyContent: "center",
    marginTop:20,
    borderRadius:10,
    borderColor:"#55E6C1",
    borderWidth:1,
  }
})