import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const _layout = () => {
  const StatusData = [
    {
      id:1,
      profilepic: "https://img.freepik.com/free-photo/front-view-smiling-happy-cute-kid-dressed-striped-shirt-touching-his-spectacles-with-one-hand_259150-59788.jpg?t=st=1721734632~exp=1721738232~hmac=64a76395b89a9639feb9c9b1979521af3ab0ad6b3cb0603940c80715a39974ee&w=360",
      statusname: "Ayo",
      time: "Just now",
      displaystatus:"https://img.freepik.com/free-photo/front-view-smiling-happy-cute-kid-dressed-striped-shirt-touching-his-spectacles-with-one-hand_259150-59788.jpg?t=st=1721734632~exp=1721738232~hmac=64a76395b89a9639feb9c9b1979521af3ab0ad6b3cb0603940c80715a39974ee&w=360"
    },
    {
      id:2,
      profilepic:"https://as2.ftcdn.net/v2/jpg/03/85/15/17/1000_F_385151769_K5O6McT4sWlgdYz4iTyiPfmc1zVF0ZeA.jpg",
      statusname: "Josh",
      time: "2 minutes ago",
      displaystatus:"https://as2.ftcdn.net/v2/jpg/03/85/15/17/1000_F_385151769_K5O6McT4sWlgdYz4iTyiPfmc1zVF0ZeA.jpg"
    },
    {
      id:3,
      profilepic: "https://as2.ftcdn.net/v2/jpg/02/15/24/25/1000_F_215242567_458KCXurOtOVb6XnIArzQihdEk4xuOlp.jpg",
      statusname: "Dee",
      time: "10 minutes ago",
      displaystatus:"https://as2.ftcdn.net/v2/jpg/02/15/24/25/1000_F_215242567_458KCXurOtOVb6XnIArzQihdEk4xuOlp.jpg"
    },
    {
      id:4,
      profilepic: "https://img.freepik.com/free-photo/man-smiling-with-phone-make-with-her-hand_1149-1178.jpg?uid=R155873204&ga=GA1.1.420307970.1720781001&semt=sph",
      statusname: "Smart",
      time: "25 minutes ago",
      displaystatus:"https://img.freepik.com/free-photo/man-smiling-with-phone-make-with-her-hand_1149-1178.jpg?uid=R155873204&ga=GA1.1.420307970.1720781001&semt=sph"
    },
    {
      id:5,
      profilepic: "https://img.freepik.com/free-photo/low-angle-little-boy-posing_23-2148445671.jpg?uid=R155873204&ga=GA1.1.420307970.1720781001&semt=sph",
      statusname: "Leo",
      time: "30 minutes ago",
      displaystatus:"https://img.freepik.com/free-photo/low-angle-little-boy-posing_23-2148445671.jpg?uid=R155873204&ga=GA1.1.420307970.1720781001&semt=sph"
    },
    {
      id:6,
      profilepic: "https://img.freepik.com/free-photo/teenage-boy-with-skateboard_23-2148937828.jpg?t=st=1721739597~exp=1721743197~hmac=8f37003df0458f5f69f2e3a98803901f3341774bfc14f79c09e696f15fa08baf&w=360",
      statusname: "Eniola",
      time: "Today, 10:00 AM",
      displaystatus:"https://img.freepik.com/free-photo/teenage-boy-with-skateboard_23-2148937828.jpg?t=st=1721739597~exp=1721743197~hmac=8f37003df0458f5f69f2e3a98803901f3341774bfc14f79c09e696f15fa08baf&w=360"
    },
    {
      id:7,
      profilepic: "https://img.freepik.com/free-photo/handsome-man-with-glasses_144627-18655.jpg?uid=R155873204&ga=GA1.1.420307970.1720781001&semt=sph",
      statusname: "Lee",
      time: "Today, 10:14 AM",
      displaystatus:"https://img.freepik.com/free-photo/handsome-man-with-glasses_144627-18655.jpg?uid=R155873204&ga=GA1.1.420307970.1720781001&semt=sph"
    },
    {
      id:8,
      profilepic: "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?uid=R155873204&ga=GA1.1.420307970.1720781001&semt=sph",
      statusname: "Jay",
      time: "Today, 10:30 AM",
      displaystatus:"https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?uid=R155873204&ga=GA1.1.420307970.1720781001&semt=sph"
    },
    {
      id:9,
      profilepic: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?uid=R155873204&ga=GA1.1.420307970.1720781001&semt=sph",
      statusname: "Stephen",
      time: "Yesterday, 12:14 PM",
      displaystatus:"https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?uid=R155873204&ga=GA1.1.420307970.1720781001&semt=sph"
    },
    {
      id:10,
      profilepic: "https://img.freepik.com/free-photo/happy-boy-with-adorable-smile_23-2149352351.jpg?uid=R155873204&ga=GA1.1.420307970.1720781001&semt=sph",
      statusname: "Favour",
      time: "Yesterday, 12:14 PM",
      displaystatus:"https://img.freepik.com/free-photo/happy-boy-with-adorable-smile_23-2149352351.jpg?uid=R155873204&ga=GA1.1.420307970.1720781001&semt=sph"
    },
    {
      id:11,
      profilepic: "https://img.freepik.com/free-photo/portrait-young-candid-man-student-boy-with-clean-face-relaxed-facial-expression-casual-smile-checked-shirt-t-shirt-summer-outfit-look-white-background_176420-45901.jpg?uid=R155873204&ga=GA1.1.420307970.1720781001&semt=sph",
      statusname: "Dolapo",
      time: "Yesterday, 12:14 PM",
      displaystatus:"https://img.freepik.com/free-photo/portrait-young-candid-man-student-boy-with-clean-face-relaxed-facial-expression-casual-smile-checked-shirt-t-shirt-summer-outfit-look-white-background_176420-45901.jpg?uid=R155873204&ga=GA1.1.420307970.1720781001&semt=sph"
    },
    {
      id:12,
      profilepic: "https://img.freepik.com/free-photo/shallow-focus-shot-young-black-male-grey-wall_181624-52039.jpg?uid=R155873204&ga=GA1.1.420307970.1720781001&semt=sph",
      statusname: "Dayo",
      time: "Yesterday, 12:14 PM",
      displaystatus:"https://img.freepik.com/free-photo/shallow-focus-shot-young-black-male-grey-wall_181624-52039.jpg?uid=R155873204&ga=GA1.1.420307970.1720781001&semt=sph"
    },

  ]
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false}>
    <View style={styles.page}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
      <Text style={{
        fontSize:23,
        color:"black"
      }}> 
        Updates
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center', }}>
          <Image
          source={require("../../assets/images/camera.png")}
          style={{
            height:25,
            width:25,
            marginRight: 10

          }}
          />
          <Image
          source={require("../../assets/images/search.png")}
          style={{
            height:25,
            width:25,
            marginRight: 10

          }}
          />
          <Image
          source={require("../../assets/images/menu.png")}
          style={{
            height:25,
            width:25,

          }}
          />
      </View>
      </View>
      <Text style={{
        fontSize:23,
        color:"black",
        marginTop:30,
      }}> 
        Status
      </Text>
      <View style= {{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Image
        source={require("../../assets/images/boy.jpg")}
        style = {{
          height:60,
          width: 60,
          marginTop:20,
          borderRadius:100,
        }}
        />
        <View style={{alignContent:"center",}}>
        <Text style={{
          marginLeft:15,
          fontSize:20,
          color:" black"
        }}>
          Add Status
        </Text>
        <Text style={{
          marginLeft:15,
          fontSize:16,
          color:"grey"
        }}>
          Dissappears after 24 hours
        </Text>
        </View>
      </View>
      <FlatList
      data={StatusData}
      renderItem={({item}) => {
        return(
          <View style={styles.container}>
            <Image
            source={{uri:item.profilepic}}
            style ={{
              height:60,
              width:60,
              borderRadius:100,
              marginTop:20,
              borderColor:"green",
              borderWidth:3
            }}
            />
            <View style={{marginLeft:15, alignContent:"center", flex:1}}>
              <Text style={{
                fontSize:20,
              }}>{item.statusname}</Text>
              <Text style={{
                fontSize:16,
                color: "grey"
              }}>{item.time}</Text>
              
            </View>
            <Image
              source={{uri:item.displaystatus}}
              style={{
                height:50,
                width:40,
              }}/>

          </View>
          
        )
      }




    }/>
    </View>
    </ScrollView>
  )
}

export default _layout

const styles = StyleSheet.create({
  page:{
    flex:1,
    backgroundColor:"white",
    paddingHorizontal:15,
    paddingTop:15,
  },
  container:{
    flexDirection:"row",
    alignItems:"center",
  }
})