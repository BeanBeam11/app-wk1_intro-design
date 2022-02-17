import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={30} color="#484848" style={styles.goBack}/>
        <Text style={styles.headerText}>數位三甲</Text>
      </View>
      <View style={styles.mask}></View>
      <View style={styles.card}>
        <View style={styles.modalBar}></View>
        <View style={styles.avatarBox}>
          <Image style={styles.avatar} source={require('./assets/avatar.png')} />
        </View>
        <Text style={styles.number}>- 110819015 -</Text>
        <Text style={styles.name}>宋雨函</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BEE0FF',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#484848',
  },
  header: {
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
    width: '100%',
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBack: {
    position: 'absolute',
    left: 25,
  },
  headerText: {
    fontSize: 18,
  },
  mask: {
    backgroundColor: '#484848',
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.4,
  },
  card: {
    backgroundColor: '#FFFFF3',
    alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    height: '80%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  modalBar: {
    width: 40,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#484848',
    marginTop: 10,
    opacity: 0.6,
  },
  avatarBox:{
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#BEE0FF',
    marginTop: 85,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 155,
    height: 155,
    borderRadius: 80,
  },
  number: {
    fontSize: 18,
    marginBottom: 8
  },
  name: {
    fontSize: 36,
  }
});
