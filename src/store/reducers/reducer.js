import { RESET, USER_NUM} from '../constants/constants'


const InputNumReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_NUM: {
      if (Number(action.num) === Number(action.randomNum)) {
        return {
          title: "Поздравляем вы отгадали число",
          description: "играть заново",
          completed: true,
        };
      } else {
        return {
          title: "вы не угадали число",
          description:
            Number(action.num) > Number(action.randomNum)
              ? "Не правильно берите ниже"
              : "Не правильно берите выше",
          completed: false,
        };
      }
    }
    case RESET: {
      return {
        title: "",
        description: "",
        completed: false,
      };
    }
    default:
      return state;
  }
};
export default InputNumReducer;
