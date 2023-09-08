import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Settings from './settings.jpg';
import Clock from './clock.png';
import Toogle from './toogle.png';
import BottomAlarm from './alarm.png';
import Clock1 from './clock1.jpg';
import Timer from './timer.jpg';
import Stopwatch from './stopwatch.png';

const Alarm = () => {
  return (
    <View style={styles.upper}>
      <Text style={styles.alarm}> Alarm </Text>
      <img src={Settings} style={styles.settings} />
    </View>
  )
}

const Picture = () => {
  return (
    <View style={styles.clock}>
      <img src={Clock} />
    </View>
  )
};

const Time = () => {
  return (
    <View style={styles.timeContainer}>
      <View style={styles.timeOffer}>
        <View>
          <Text style={styles.time}> 03:45 </Text>
          <Text style={styles.day}> Tommorow </Text>
        </View>
        <View style={styles.toogles}>
          <Text style={styles.timeDescription}>AM </Text>
          <View style={styles.toogle}>
            <img src={Toogle} />
          </View>
        </View>
      </View>

      <View style={styles.timeOffer}>
        <View>
          <Text style={styles.time}> 05:00 </Text>
          <Text style={styles.day}> Tommorow</Text>
        </View>
        <View style={styles.toogles}>
          <Text style={styles.timeDescription}>AM </Text>
          <View style={styles.toogle}>
            <img src={Toogle} />
          </View>
        </View>
      </View>

      <View style={styles.timeOffer}>
        <View>
          <Text style={styles.time}> 05:05 </Text>
          <Text style={styles.day}> Tommorow </Text>
        </View>
        <View style={styles.toogles}>
          <Text style={styles.timeDescription}>AM </Text>
          <View style={styles.toogle}>
            <img src={Toogle} />
          </View>
        </View>
      </View>

      <View style={styles.timeOffer}>
        <View>
          <Text style={styles.time}> 05:10 </Text>
          <Text style={styles.day}> Tommorow</Text>
        </View>
        <View style={styles.toogles}>
          <Text style={styles.timeDescription}>AM </Text>
          <Text style={styles.plus}> + </Text>
          <View style={styles.toogle1}>
            <img src={Toogle} />
          </View>
        </View>
      </View>

    </View>
  )
}

const Bottom = () => {
  return (
    <View style={styles.bottomDesign}>

      <View style={styles.bottoms}>
        <img src={BottomAlarm} style={styles.bottomstyle} />
        <img src={Clock1} style={styles.bottomstyle} />
        <img src={Timer} style={styles.bottomstyle} />
        <img src={Stopwatch} style={styles.bottomstyle} />
      </View>

    </View>
  )
}

const BottomText = () => {
  return (
    <View style={styles.textStyle}>
      <Text style={styles.text}>Alarm</Text>
      <Text style={styles.text1}>Clock</Text>
      <Text style={styles.text2}>Timer</Text>
      <Text style={styles.text3}>Stopwatch</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>

      <View>
        <Alarm />
      </View>

      <View>
        <Picture />
      </View>

      <View>
        <Time />
      </View>

      <View>
        <Bottom />
      </View>

      <View>
        <BottomText/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#ffffff',
    height: '1510px',
    width: '720px',
  },

  upper: {
    flexDirection: 'row',
  },

  alarm: {
    alignItems: 'left',
    marginBottom: '25px',
    marginTop: '30px',
    marginLeft: '7px',
    marginRight: '20px',
    justifyContent: 'flex-start',
    fontSize: '50px',
  },

  settings: {
    width: '70px',
    height: '70px',
    marginTop: '40px',
    marginLeft: '440px',
    marginRight: '10px',
  },

  clock: {
    width: '550px',
    height: '550px',
    justifyContent: 'center',
    marginTop: '30px',
    marginBottom: '30px',
    marginLeft: '80px',
  },

  timeOffer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '8px',
    marginTop: '8px',
  },

  time: {
    fontSize: '80px',
    marginTop: '10px',
  },

  timeDescription: {
    fontSize: '30px',
    flexDirection: 'row',
    marginTop: '40px',
  },

  day: {
    fontSize: '25px',
    marginLeft: '20px',
  },

  plus: {
    color: '#ffffff',
    width: '100px',
    height: '100px',
    fontSize: '79px',
    marginLeft: '20px',
    marginBottom: '10px',
    borderRadius: 100 / 2,
    backgroundColor: '#1e90ff',
    marginLeft: '40px',
  },

  toogle: {
    width: '110px',
    height: '10px',
    marginTop: '20px',
    marginLeft: '290px',

  },

  toogle1: {
    width: '110px',
    height: '10px',
    marginTop: '20px',
    marginLeft: '150px',

  },

  toogles: {
    flexDirection: 'row',
  },

  bottoms: {
    marginTop: '20px',
    height: '70px',
    width: '70px',
    flexDirection: 'row',


  },

  bottomDesign: {
    alignItems: 'left',
    backgroundColor: '##d3d3d3',
  },

  bottomstyle: {
    marginLeft: '50px',
    marginRight: '60px',
  },

  textStyle: {
    flexDirection: 'row',
    
  },

  text: {
    fontSize: '35px',
    marginLeft: '40px',
    marginRight: '30px',
  },

  text1: {
    fontSize: '35px',
    marginLeft: '70px',
    marginRight: '30px',
  },

  text2: {
    fontSize: '35px',
    marginLeft: '70px',
    marginRight: '30px',
  },

  text3: {
    fontSize: '35px',
    marginLeft: '20px',
    marginRight: '30px',
  },
});
