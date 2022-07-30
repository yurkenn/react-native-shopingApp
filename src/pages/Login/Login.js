import {View, Image, Alert} from 'react-native';
import React from 'react';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';
import usePost from '../../hooks/usePost/usePost';
import Config from 'react-native-config';

import {useDispatch} from 'react-redux';

const Login = () => {
  const {data, post, loading, error} = usePost();
  const dispatch = useDispatch();

  const handeLogin = values => {
    post(Config.API_AUTH_URL + '/login', values);
  };

  if (error) {
    Alert.alert('Dukkan', 'Kullanici Bulunamadi');
  }

  if (data) {
    if (data === 'Error') {
      Alert.alert('Dukkan', 'Kullanici Bulunamadi!');
    } else {
      dispatch({type: 'SET_USER', payload: {user}});
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.image}
          source={require('../../assets/login-logo.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}}
        onSubmit={handeLogin}>
        {({handleSubmit, handleChange, values}) => (
          <View style={styles.body_container}>
            <Input
              placeholder="Kullanici Adini Giriniz ..."
              value={values.username}
              onType={handleChange('username')}
              iconName="account"
            />
            <Input
              placeholder="Sifrenizi Giriniz ..."
              value={values.password}
              onType={handleChange('password')}
              iconName="key"
              isSecure
            />

            <Button text="Giris Yap" onPress={handleSubmit} loading={loading} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;

const user = {
  address: {
    geolocation: {
      lat: '-37.3159',
      long: '81.1496',
    },
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874',
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {
    firstname: 'john',
    lastname: 'doe',
  },
  phone: '1-570-236-7033',
  __v: 0,
};
