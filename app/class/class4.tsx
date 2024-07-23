import { StyleSheet, Text, View,FlatList,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const _layout = () => {
  const name = [
    "Favour", 
    "Liberty", 
    "Timi", 
    "Abdullahi", 
    "Ayomide",
     "Damola",
     "Favour", 
    "Liberty", 
    "Timi", 
    "Abdullahi", 
    "Ayomide",
     "Damola",
     "Favour", 
    "Liberty", 
    "Timi", 
    "Abdullahi", 
    "Ayomide",
     "Damola",
     "Favour", 
    "Liberty", 
    "Timi", 
    "Abdullahi", 
    "Ayomide",
     "Damola",
     "Favour", 
    "Liberty", 
    "Timi", 
    "Abdullahi", 
    "Ayomide",
     "Damola"

    
    ]
  return (
    <View style = {styles.page}>
      <Text style={{
        fontSize:30, fontWeight:'bold',
        marginBottom: 30,
      }}
      >This is  the List Class</Text>
      <FlatList
      data={name}
      numColumns={2}
      columnWrapperStyle={{justifyContent:'space-between'}}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return(
          <View>
           
          <View style = {styles.container}>
             <Image
            source={require(
              "../../assets/images/boy.jpg"
            )}
            style={{
              height:30,
              width:30,
            }}/>
            <Text>Hello</Text>
            { <TouchableOpacity>
            <Image 
            source={require("../../assets/images/arrowright.png")}
            style={{
              height:14,
              width:14,
            }}
            />
            </TouchableOpacity> }
          </View>
          </View>
        )
      }}
      />
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
  page: {
    flex:1,
    backgroundColor:"white",
    paddingHorizontal:10,
    marginTop:10,
  },
  container: {
    height: 100,
    width: 160,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    // flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    // paddingHorizontal: 10,
  },
})