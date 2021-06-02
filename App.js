import React,{useState} from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import Jitsi from './app/screens/Jitsi';
import LiveVideScreen from './app/screens/LiveVideScreen';
// import { Divider } from 'react-native-elements';

function App(props) {
const [joinMeeting,setJoinMeeting]=useState(false)

  const handlePressJoinMeeting=()=>{
    setJoinMeeting(true)
    console.log(joinMeeting)
  }

  return (
    <View style={styles.container}>
      <Text>Hello React Native</Text>
      {/* <Divider style={{ backgroundColor: 'blue' }} />; */}
        {!joinMeeting ? <TouchableOpacity style={styles.joinButton}  onPress={handlePressJoinMeeting}>
          <Text  style={styles.buttonText}>Join Meeting</Text>
        </TouchableOpacity>:
        
        <Jitsi onClose={()=>setJoinMeeting(false)}/>
        // <LiveVideScreen onClose={()=>setJoinMeeting(false)}/>
       
      
      }
      
      <Text style={{width:'100%'}}>Buttom</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#c6dddb",
    alignItems:'center',
    paddingHorizontal:10,
    justifyContent:'space-between'
  },
  joinButton:{
    backgroundColor:'#2657d9',
    padding:10,
    borderRadius:5
  },
  buttonText:{
    color:'#fff',
    fontSize:18
  }
})
export default App;
