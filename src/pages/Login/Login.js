import {View, Image, Alert} from 'react-native';
import React from 'react';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';
import usePost from '../../hooks/usePost/usePost';
import Config from 'react-native-config';

const Login = ({navigation}) => {
  const {data, post, loading, error} = usePost();

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
      navigation.navigate('ProductsPage');
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
