import React from "react";
import { View,Text,StyleSheet, ScrollView, Image } from "react-native";
export default function Liberty(){
  return(
    <ScrollView>
    <View style= {styles.page}>
      <View style={{
        backgroundColor:'green',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            A for Apple
          </Text>
      </View>
      <View style={{
        backgroundColor:'red',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            B for Ball
          </Text>
      </View>
      <View style={{
        backgroundColor:'yellow',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            C for cat
          </Text>
      </View>
      <View style={{
        backgroundColor:'grey',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            D for dog
          </Text>
      </View>
      <View style={{
        backgroundColor:'pink',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            E for Egg
          </Text>
      </View>
      <View style={{
        backgroundColor:'indigo',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:10,
        }}>
          <Text>
            F for Fish
          </Text>
      </View>
      <View style={{
        backgroundColor:'pinkaccent',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            G for Goat
          </Text>
      </View>
      <View style={{
        backgroundColor:'blue',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            H for Hen
          </Text>
      </View>
      <View style={{
        backgroundColor:'brown',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            I for Ink
          </Text>
      </View>
      <View style={{
        backgroundColor:'orange',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            J for Juice
          </Text>
      </View>
      <View style={{
        backgroundColor:'magnita',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            K for Kettle
          </Text>
      </View>
      <View style={{
        backgroundColor:'#FFCA33',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            L for Leg
          </Text>
      </View>
      <View style={{
        backgroundColor:'#6ED177',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            M for Mango
          </Text>
      </View>
      <View style={{
        backgroundColor:'brown',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            N for Net
          </Text>
      </View>
      <View style={{
        backgroundColor:'#6E71D1',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            O for Orange
          </Text>
      </View>
      <View style={{
        backgroundColor:'red',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            P for peg
          </Text>
      </View>
      <View style={{
        backgroundColor:'yellow',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            Q for queen
          </Text>
      </View>
      <View style={{
        backgroundColor:'grey',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            R for Red
          </Text>
      </View>
      <View style={{
        backgroundColor:'red',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            S for Sun
          </Text>
      </View>
      <View style={{
        backgroundColor:'blue',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            T for Toy
          </Text>
      </View>
      <View style={{
        backgroundColor:'grey',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            U for Umbrella
          </Text>
      </View>
      <View style={{
        backgroundColor:'yellow',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            V for Violin
          </Text>
      </View>
      <View style={{
        backgroundColor:'indigo',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            W for Water
          </Text>
      </View>
      <View style={{
        backgroundColor:'purple',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            X for X-Ray
          </Text>
      </View>
      <View style={{
        backgroundColor:'grey',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            Y for Year
          </Text>
      </View>
      <View style={{
        backgroundColor:'yellow',
        paddingTop:10,
        paddingBottom:10,
        marginBottom:5,
        }}>
          <Text>
            Z for Zebra
          </Text>
      </View>
    </View>
    <View style = {styles.imagecontainer}>
    <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png"}}
    style={styles.image}
    />
    </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex:1,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom: 20,
    paddingTop:20
  },
  liberty:{
    fontSize: 50,
    color: 'blue',
  },
  image: {
    width:100,
    height: 100,
  },
  imagecontainer:{
    alignItems: 'center',
    justifyContent:'center',
    marginVertical:20,
    
  }
});
