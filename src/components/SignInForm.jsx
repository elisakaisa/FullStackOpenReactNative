import React from 'react'
import { Pressable, StyleSheet,  View } from 'react-native'

import theme from './theme'
import Text from './Text'
import FormikTextInput from './FormikTextInput'

const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.listBackground
    },
    signInButton: {
      backgroundColor: theme.colors.primary,
      padding: 15,
      margin: 10,
      borderRadius: 5,
    }
})


const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name='username' placeholder="Username"/>
      <FormikTextInput name='password' placeholder="Password"/>
      <Pressable style={styles.signInButton} onPress={onSubmit}>
        <Text style={{ textAlign: 'center'}} color="white" fontWeight='bold' fontSize="subheading">Sign in</Text>
      </Pressable>
    </View>
  )
}

export default SignInForm;