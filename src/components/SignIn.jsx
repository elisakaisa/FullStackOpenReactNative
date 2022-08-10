
import { Formik } from "formik";
import { View } from "react-native";
import { useNavigate } from "react-router-native";
import * as yup from 'yup';

import SignInForm from "./SignInForm";
import useSignIn from "../hooks/useSignIn";

const initialValues = {
    password: '',
    username: ''
}

const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(4, 'Username must be greater or equal to 4 characters')
      .required('Username is required'),
    password: yup
      .string()
      .min(8, 'Password must be longer or equal to 8 characters')
      .required('Password is required'),
});

const SignIn = () => {
  const navigate = useNavigate()
  const [signIn] = useSignIn()

  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const data = await signIn({ username, password });
      console.log(data);
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  }
  
  return (
    <View>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    </View>
  );
};

export default SignIn;