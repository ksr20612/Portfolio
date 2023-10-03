import { atom } from 'recoil';

const catalogOnState = atom({
  key: 'catalogState',
  default: false,
});

export default catalogOnState;
