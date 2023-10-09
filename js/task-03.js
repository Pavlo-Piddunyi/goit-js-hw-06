const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// Отримуємо доступ до елементу ul.gallery
const galleryList = document.querySelector(".gallery");

// Створюємо розмітку для кожного зображення та об'єднуємо їх
const imagesMarkup = images.map(image => `
  <li>
    <img src="${image.url}" alt="${image.alt}" height= 300px>
  </li>
`).join("");

// Вставляємо отриманий HTML в ul.gallery
galleryList.insertAdjacentHTML("beforeend", imagesMarkup);