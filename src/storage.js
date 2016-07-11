import Storage from 'react-native-storage';

export default new Storage({
  size: 1000,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync : {
  }
});
