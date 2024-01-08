import { View, Text, TextInput, StyleSheet } from 'react-native';

import { COLORS } from '../../constants/styles';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: COLORS.BLACK,
    marginBottom: 4,
  },
  labelInvalid: {
    color: COLORS.ERROR,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 8,
    fontSize: 16,
    color: COLORS.WHITE,
  },
  inputInvalid: {
    backgroundColor: COLORS.ERROR,
  },
});