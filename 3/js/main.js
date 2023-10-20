const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME = [
  'Саша',
  'Антон',
  'Светлана',
  'Людочка'
];

const DESCRIPTION = [
  'Это я в Москве был. Сейчас дома.',
  'У мамы в Армавире',
  'Анапа 2021',
  'Твой полубокс в глазок виден'
];

const SIMILAR_COMMENTS_COUNT = 30;
const SIMILAR_POST_COUNT = 25;

let arrIdPost = [];
let arrIdCommet = [];

//Функция получающая случайное целое положительное число из диапазона [a,b]
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomId = (arrId, a, b) => {
  let id = getRandomInteger(a, b);
  while(arrId.includes(id)){
    id = getRandomInteger(a, b);
  }
  arrId.push(id);
  return id;
};

//если мы в функции createComment уберем id, то все работает хорошо. А с id ничего не работает)))

const createComment = () => {
  return {
    id: getRandomId(arrIdCommet, 0, 30),
    avatar: 'img/avatar-' + getRandomInteger(1,6) + '.svg',
    message: getRandomArrayElement(MESSAGE),
    name: getRandomArrayElement(NAME),
  };
};

const createPost = () => {
  const similarComments = Array.from({length: SIMILAR_COMMENTS_COUNT}, createComment);
  return {
    id: getRandomId(arrIdPost, 1, 25),
    url: 'photos/' + getRandomId(arrIdPost, 1, 25) + '.jpg',
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomInteger(15, 200),
    comments: similarComments,
  };
};

const similarPosts = Array.from({length: SIMILAR_POST_COUNT}, createPost);

console.log(similarPosts);
console.log(arrIdCommet);
console.log(arrIdPost);
