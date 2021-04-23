import yenv from 'yenv';

const CONFIG_PATH = 'config.yml'

export default function run() {
  const configObj = yenv(CONFIG_PATH, { env: 'default' });
  return configObj;
}
