import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Login.style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';

const Login = () => {
  const handeLogin = values => {
    console.log(values);
  };

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
            />
            <Input
              placeholder="Sifrenizi Giriniz ..."
              value={values.password}
              onType={handleChange('password')}
            />

            <Button text="Giris Yap ..." onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
