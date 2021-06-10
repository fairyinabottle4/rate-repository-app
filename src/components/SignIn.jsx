import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native'
import { Formik } from 'formik'
import Text from './Text';
import FormikTextInput from './FormikTextInput'
import * as yup from 'yup';

const SignIn = () => {

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const initialValues = {
    username: '',
    password: '',
  };  

  const onSubmit = (values) => {
    console.log(values);
  };
  
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => {
        return (
          <View style={{
            paddingHorizontal: 12,
            height: 200,
            justifyContent: 'space-evenly',
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
        )
      }}
    </Formik>
  ); 
};

export default SignIn;
