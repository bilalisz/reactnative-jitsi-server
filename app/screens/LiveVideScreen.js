import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
// import {Icon} from 'react-native-elements';
// import JitsiMeet, {JitsiMeetView} from 'react-native-jitsi-meet';

function LiveVideScreen({joinMeeting,onClose}) {
 
//   useEffect(() => {
//     setTimeout(() => {
//       const url = 'https://your.jitsi.server/roomName'; // can also be only room name and will connect to jitsi meet servers
//       const userInfo = {
//         displayName: 'User',
//         email: 'user@example.com',
//         avatar: 'https:/gravatar.com/avatar/abc123',
//       };
//       JitsiMeet.call(url, userInfo);
    
//       /* You can also use JitsiMeet.audioCall(url) for audio only call */
//       /* You can programmatically end the call with JitsiMeet.endCall() */
//     }, 1000);
//   });

  return (
    <View style={styles.container}>
      <Text>Live Video Screen</Text>
      {/* <JitsiMeetView
        onConferenceTerminated={()=>console.log('onConferenceTerminated')}
        onConferenceJoined={()=>console.log('onConferenceJoined')}
        onConferenceWillJoin={()=>console.log('onConferenceWillJoin')}
        style={{flex: 1, height: '100%', width: '100%'}}
      /> */}
      <View style={styles.videoWrapper}>
        <Text style={{fontSize: 18, color: '#fff'}}>1</Text>
        <Text style={{fontSize: 18, color: '#fff'}}>2</Text>
        <Text onPress={onClose} style={{fontSize: 18, color: '#fff'}}>Close</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({

  container: {
    backgroundColor: 'red',
    width: '100%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginVertical: 10,
  },
  videoWrapper: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    margin: 5,
    backgroundColor: '#c6dddb',
  },
});
export default LiveVideScreen;
