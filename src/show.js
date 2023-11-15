const show = (e) => {
  const showResult = document.querySelector("#showResult");
  e.saveResult
    ? (showResult.value = e.saveResult)
    : e.operand2
    ? (showResult.value = e.operand2)
    : (showResult.value = e.operand1);
};

export default show;
