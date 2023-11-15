const operand1 = (value1 = "", value2) => {
  return {
    type: "OPERAND1",
    payload: value1 + value2,
  };
};

const operand2 = (value1 = "", value2) => {
  return {
    type: "OPERAND2",
    payload: value1 + value2,
  };
};

const signs = (value) => {
  return {
    type: "SIGNS",
    payload: value,
  };
};

const saveResult = (value) => {
  return {
    type: "SAVERESULT",
    payload: value,
  };
};

const saveToMemory = (value) => {
  return {
    type: "SAVE_TO_MEMORY",
    payload: value,
  };
};

const deleteFromMemory = (value) => {
  return {
    type: "DELETE_FROM_MEMORY",
    payload: value,
  };
};

const showMemoryNumber = (value) => {
  return {
    type: "SHOW_MEMORY_NUMBER",
    payload: value,
  };
};

export {
  operand1,
  operand2,
  signs,
  saveResult,
  saveToMemory,
  deleteFromMemory,
  showMemoryNumber,
};
