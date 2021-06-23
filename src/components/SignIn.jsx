import React from 'react';
import { useHistory } from "react-router-native";

import { View, TouchableWithoutFeedback } from 'react-native';
import { Formik } from 'formik';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';

const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const initialValues = {
    username: '',
    password: '',
  };  

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => {
        return (
          <View style={{
            paddingHorizontal: 12,
            paddingVertical: 20,
            height: 200,
            justifyContent: 'space-around',
            backgroundColor: 'white',
          }}>
            <FormikTextInput name='username' placeholder='Username' />
            <FormikTextInput name='password' placeholder='Password' secureTextEntry />
            <TouchableWithoutFeedback onPress={handleSubmit}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  borderRadius: 4,
                  padding: 12,
                  backgroundColor:'#0355d6',
                  fontWeight:'bold'  
                }}
              >Sign in</Text>
            </TouchableWithoutFeedback>
          </View>  
        );
      }}
    </Formik>
  ); 
};

export default SignIn;
