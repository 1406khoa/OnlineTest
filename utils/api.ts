import axios from 'axios';

const API_URL = 'https://v6.exchangerate-api.com/v6/b17fbd99e64df7cfd1726665/latest';

export const fetchExchangeRate = async (fromCurrency: string, toCurrency: string) => {
  try {
    const response = await axios.get(`${API_URL}/${fromCurrency}`);

    const url = `${API_URL}/${fromCurrency}`;
    console.log('URL gọi API:', url);


    console.log(response.data);

    const rates = response.data.conversion_rates;

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