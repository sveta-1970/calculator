const reducer = (state = { operand1: "", operand2: "", signs: "", saveResult: "", memoryNumber: "" }, action) => {
  switch (action.type) {
    case "OPERAND1":
      return { ...state, operand1: action.payload };
    case "OPERAND2":
      return { ...state, operand2: action.payload };
    case "SIGNS":
      return { ...state, signs: action.payload };
    case "SAVERESULT":
      return {
        //...state остается для хранения числа, занесенного в память m+/m-
        //два операнда и знак обнуляются
        ...state,
        operand1: "",
        operand2: "",
        signs: "",
        saveResult: action.payload.toString(),
      };
    case "SAVE_TO_MEMORY":
      return { ...state, memoryNumber: action.payload, saveResult: "" };
    case "DELETE_FROM_MEMORY":
      return { ...state, memoryNumber: "" };
    case "SHOW_MEMORY_NUMBER":
      return { ...state, memoryNumber: "", saveResult: action.payload };
    default:
      return state;
  }
};

export default reducer;
