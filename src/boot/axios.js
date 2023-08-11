import { boot } from 'quasar/wrappers'
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export default boot(({ app }) => {
  // Tambahkan instance db ke dalam object `app.config.globalProperties`
  // sehingga Anda dapat mengaksesnya dari seluruh komponen dengan `this.$db`
  
});