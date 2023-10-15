/* Функция для проверки длины строки
   Она принимает строку и максимальную длину, возвращает
    true - строка меньше или равна указанной длине
    false, если строка длиннее. */

const lenghtStr = (str, maxLenght) => {
  let result;
  if (str.length <= maxLenght) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

//console.log(lenghtStr('проверяемая строка', 20));
//console.log(lenghtStr('проверяемая строка', 18));
//console.log(lenghtStr('проверяемая строка', 10));

//Функция для проверки, является ли строка

const isPalindrome = (str) => {
  let oldStr = str.toLowerCase().replaceAll(' ', '');
  let newStr = '';
  let result;
  for (let i = oldStr.length - 1; i >= 0; i--){
    newStr += oldStr.at(i);
  }
  if (newStr === oldStr){
    result = true;
  } else {
    result = false;
  }
  return result;
};

//console.log(isPalindrome('топот'));
//console.log(isPalindrome('ДовОд'));
//console.log(isPalindrome('Кекс'));
//console.log(isPalindrome('Лёша на полке клопа нашёл'));

