
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_TIME_KEY = 'videoplayer-current-time'; //змінна з ключем збереження та отримання поточного часу відео в об"єкті 

const currentTime = localStorage.getItem(STORAGE_TIME_KEY)
  ? localStorage.getItem(STORAGE_TIME_KEY)
  : 0; //присвоюється значення, отримане з ключа

function getCurrentTime(e) {
  localStorage.setItem(STORAGE_TIME_KEY, e.seconds); //функція встановлює поточний час відео 
}

player.on('timeupdate', throttle(getCurrentTime, 1000)); //Функція використовується для обмеження частоти викликів(раз в секунду)

player.setCurrentTime(currentTime); //метод викликається для Player об’єкта зі currentTime значенням, яке встановлює поточний час відео на значення, отримане з localStorage