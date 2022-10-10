import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateInput = document.querySelector('#datetime-picker');
const startButton = document.querySelector('button[data-start]');
const daysCount = document.querySelector('[data-days]');
const hoursCount = document.querySelector('[data-hours]');
const minutesCount = document.querySelector('[data-minutes]');
const secondsCount = document.querySelector('[data-seconds]');

startButton.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      // window.alert('Please choose a date in the future');
      Notiflix.Notify.failure('Please choose a date in the future');
    } else startButton.removeAttribute('disabled');
  },
};
flatpickr(dateInput, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day); // Remaining days
  const hours = Math.floor((ms % day) / hour); // Remaining hours
  const minutes = Math.floor(((ms % day) % hour) / minute); // Remaining minutes
  const seconds = Math.floor((((ms % day) % hour) % minute) / second); // Remaining seconds
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

startButton.addEventListener('click', () => {
  startButton.setAttribute('disabled', true);
  dateInput.setAttribute('disabled', true);
  const countdown = setInterval(() => {
    const reverseCountTime = new Date(dateInput.value) - new Date();
    if (reverseCountTime > 0) {
      let countingTime = convertMs(reverseCountTime);
      daysCount.textContent = addLeadingZero(countingTime.days);
      hoursCount.textContent = addLeadingZero(countingTime.hours);
      minutesCount.textContent = addLeadingZero(countingTime.minutes);
      secondsCount.textContent = addLeadingZero(countingTime.seconds);
    } else {
      clearInterval(countdown);
      dateInput.removeAttribute('disabled');
    }
  }, 1000);
});
