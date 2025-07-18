import flatpickr from "flatpickr";
import iziToast from "izitoast";

const refs = {
  datetimePicker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};


let userSelectedDate = null;
let intervalId = null;

refs.startBtn.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
    });
        refs.startBtn.disabled = true;
        userSelectedDate = null;
        return;
    }
        userSelectedDate = selectedDates[0];
        refs.startBtn.disabled = false;
  },
};

flatpickr(refs.datetimePicker, options);
refs.startBtn.addEventListener('click', onStartClick);



 function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}


function updateTimer(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);

  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}

function onStartClick() {
  if (!userSelectedDate) return; 

  refs.startBtn.disabled = true;
  refs.datetimePicker.disabled = true;

  intervalId = setInterval(() => {
    const diff = userSelectedDate - Date.now();

    if (diff <= 0) {
      clearInterval(intervalId);
      updateTimer(0);
      refs.datetimePicker.disabled = false;
      return;
    }
    updateTimer(diff);
  }, 1000);
}