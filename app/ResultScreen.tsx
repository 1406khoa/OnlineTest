import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { fetchExchangeRate } from '../utils/api';

const ResultScreen = () => {
  // Lấy router để quay về hoặc điều hướng khi cần
  const router = useRouter();

  // Lấy tham số từ query string
  const { amount, fromCurrency, toCurrency } = useLocalSearchParams();

  const [result, setResult] = useState<number | null>(null);
  const [rate, setRate] = useState<number | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const convert = async () => {
      try {
        // Kiểm tra xem đã có đủ tham số chưa
        if (!amount || !fromCurrency || !toCurrency) {
          throw new Error('Missing parameters');
        }

        // Fetch tỉ giá
        const exchangeRate = await fetchExchangeRate(
          String(fromCurrency),
          String(toCurrency)
        );

        setRate(exchangeRate);
        setResult(Number(amount) * exchangeRate);
      } catch (err: any) {
        setError(err.message);
      }
    };
    convert();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <>
          <Text style={styles.resultText}>
            {amount} {fromCurrency} = {result?.toFixed(2)} {toCurrency}
          </Text>
          <Text style={styles.rateText}>
            Exchange Rate: 1 {fromCurrency} = {rate} {toCurrency}
          </Text>
        </>
      )}

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style = {styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  resultText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  rateText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  error: {
    fontSize: 16,
    color: 'red',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});


export default ResultScreen;
