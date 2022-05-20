import { setControlState } from "./setControlState";
import { sendForm } from "./sendForm";

const loader = document.querySelector('.loader-overlay');
export function formValidation(form) {
  let invalidControls = []
  let controls = form.querySelectorAll('input');

  controls.forEach(control => {
    setControlState(control, 'valid');
  })

  controls.forEach(control => {
    if(control.type === 'text' && control.getAttribute('data-required') === 'true') {
      if(control.value.trim() === '') {
        invalidControls.push(control)
      }
    }

    if(control.type === 'tel') {
      if(control.value.length !== 16) {
        invalidControls.push(control)
      }
    }

    if(control.type === 'checkbox') {
      if(!control.checked) {
        invalidControls.push(control)
      }
    }
  })

  if(!invalidControls.length) {
    loader.classList.remove('hidden');
    sendForm(form);
  } else {
    invalidControls.forEach(control => {
      setControlState(control, 'invalid');
    })
  }
}
