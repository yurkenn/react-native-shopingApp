import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const stlyes = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  body_container: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
  },
  desc: {
    fontStyle: 'italic',
    marginTop: 10,
    fontSize: 16,
  },
  price: {
    fontWeight: 'bold',
    textAlign: 'right',
    color: 'green',
    marginTop: 10,
    fontSize: 16,
  },
});

export default stlyes;
