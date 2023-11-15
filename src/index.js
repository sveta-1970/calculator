import { createStore } from "redux";
import reducer from "./reducer";
import {
  operand1,
  operand2,
  signs,
  saveResult,
  saveToMemory,
  deleteFromMemory,
  showMemoryNumber,
} from "./action";
import calculate from "./method/calculate";
import show from "./show";

//выбираем родительский элемент для кнопок
const btns = document.querySelector(".keys");

//навешиваем прослушиватель событий
btns.addEventListener("click", (event) => {
  //выбираем цифры и точку, проверяем с помощью регул.выражения
  //с помощью dispatch отправляем action в reducer
  //для того, чтобы отправлять значение не по одной цифре,
  //нужно передавать в action старое и новое значение
  if (/[0-9.]/g.test(event.target.value)) {
    //если есть уже знак, то записываем второй операнд если нет - первый
    store.dispatch(
      store.getState().signs
        ? operand2(store.getState().operand2, event.target.value)
        : operand1(store.getState().operand1, event.target.value)
    );
  } else if (/[*/+-]/.test(event.target.value)) {
    store.dispatch(signs(event.target.value));
  } 

  //когда два операнда и знак введены, нужно разблокировать равенство
  //второй операнд попадает в стор после знака, поэтому проверяем наличие его в сторе
  if (store.getState().operand2) {
    document.getElementById("eq").disabled = false;
  }
  //кнопка равенства уже разблокирована, поэтому можно при нажатии на нее 
  //получить ее значение через event
  //после вычисления результат передается в стор как saveResult,
  //при чем оба операнда и знак обнуляются
  if (/[=]/.test(event.target.value)) {
    store.dispatch(saveResult(calculate(store.getState())));
  }
  /*
  //работа с памятью
  if (/^[m+]$/.test(event.target.value)) {
    console.log(event.target.value);
    store.dispatch(saveToMemory(store.getState()).saveResult);
  }
  if (/^[m-]$/.test(event.target.value)) {
    store.dispatch(deleteFromMemory(store.getState()).saveResult);
  }

  if (/^[mrc]$/.test(event.target.value)) {
    store.dispatch(showMemoryNumber(store.getState()).saveResult);
  }

  */
});

//в store будем записывать измененное значение
const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
  show(store.getState());
});
