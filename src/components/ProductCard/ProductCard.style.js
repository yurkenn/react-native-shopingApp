import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eeeeee',
    borderWidth: 1,
    borderColor: '#bdbdbdbd',
    margin: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  body_container: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  price: {
    textAlign: 'right',
    fontSize: 16,
    fontStyle: 'italic',
    color: 'green',
  },
});

export default styles;
