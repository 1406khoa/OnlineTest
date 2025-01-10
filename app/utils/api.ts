import axios from 'axios';

const API_URL = 'https://api.exchangerate-api.com/v4/latest';

export const fetchExchangeRate = async (fromCurrency: string, toCurrency: string) => {
  try {
    const response = await axios.get(`${API_URL}/${fromCurrency}`);
    const rates = response.data.rates;

    if (!rates[toCurrency]) {
      throw new Error('Invalid currency code');
    }

    return rates[toCurrency];
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch exchange rate');
  }
};

export default fetchExchangeRate;