import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  inputStyle: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    borderColor: theme.colors.mainBackground,
  },
  inputErrorStyle: {
    borderColor: theme.colors.error,
  }});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [style, styles.inputStyle, error && styles.inputErrorStyle];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;