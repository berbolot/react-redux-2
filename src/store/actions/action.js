import { RESET, USER_NUM} from '../constants/constants'

export const inputNum = (num, randomNum) => ({
  type: USER_NUM,
  num,
  randomNum,
  completed: false,
});

export const resetGame = () => ({
  type: RESET,
});
