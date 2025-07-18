import iziToast from "izitoast";


const delayForm = document.querySelector('.form');

delayForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const delay = Number(delayForm.elements.delay.value);
  const state = delayForm.elements.state.value;

  createPromise(delay, state)
    .then((delay) => {
      iziToast.success({
        title: '✅ Success',
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: '❌ Error',
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
  delayForm.reset();
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}