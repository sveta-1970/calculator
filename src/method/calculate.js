const calculate = ({ operand1, operand2, signs }) => {
  //превращаем строку в цифру, т.к. при сложении строк происходит конкатенация
  operand1 = parseFloat(operand1);
  operand2 = parseFloat(operand2);

  switch (signs) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "/":
      return operand1 / operand2;
    case "*":
      return operand1 * operand2;
    default:
      throw new Error("No sign");
  }
};

export default calculate;
