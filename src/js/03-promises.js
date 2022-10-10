import Notiflix from 'notiflix';

const delayInput = document.querySelector('[name="delay"]');
const stepDelayInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
const CreatePromisesBtn = document.querySelector('.form button');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

CreatePromisesBtn.addEventListener('click', e => {
  e.preventDefault();
  const delay = Number(delayInput.value);
  const step = Number(stepDelayInput.value);
  const amount = Number(amountInput.value);

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + step * i)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.warning(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});
