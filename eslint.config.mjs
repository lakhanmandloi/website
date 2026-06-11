import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier/flat';

const config = [...next, prettier];

export default config;
