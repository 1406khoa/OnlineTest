import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import ModalSelector from 'react-native-modal-selector';
import { useRouter } from 'expo-router';

const InputScreen = () => {
  const router = useRouter();
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('VND');

  // Danh sách các loại tiền tệ
  const currencyOptions = [
    { key: 'USD', label: 'USD - US Dollar' },
    { key: 'EUR', label: 'EUR - Euro' },
    { key: 'VND', label: 'VND - Vietnamese Dong' },
    { key: 'JPY', label: 'JPY - Japanese Yen' },
    { key: 'GBP', label: 'GBP - British Pound' },
  ];

  const handleConvert = () => {
    if (!amount || isNaN(Number(amount))) {
      alert('Please enter a valid amount.');
      return;
    }

    router.push(
      `/ResultScreen?amount=${amount}&fromCurrency=${fromCurrency}&toCurrency=${toCurrency}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Currency Converter</Text>

      <Text style={styles.label}>Enter Amount:</Text>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={styles.label}>From Currency:</Text>
      <ModalSelector
        data={currencyOptions}
        initValue="Select currency"
        onChange={(option) => setFromCurrency(option.key)}
        style={styles.selector}
      >
        <Text style={styles.selectorText}>{fromCurrency}</Text>
      </ModalSelector>

      <Text style={styles.label}>To Currency:</Text>
      <ModalSelector
        data={currencyOptions}
        initValue="Select currency"
        onChange={(option) => setToCurrency(option.key)}
        style={styles.selector}
      >
        <Text style={styles.selectorText}>{toCurrency}</Text>
      </ModalSelector>

      <TouchableOpacity style={styles.convertButton} onPress={handleConvert}>
        <Text style={styles.convertButtonText}>Convert</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  selector: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  selectorText: {
    fontSize: 16,
    color: '#333',
  },
  convertButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  convertButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default InputScreen;
