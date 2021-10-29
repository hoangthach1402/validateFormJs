function Validator(options) {
  function validate(inputElement, rule) {
    var errorMessage = rule.test(inputElement.value)
    var messdiv = inputElement.parentElement.querySelector('#errorMessage')
    if (errorMessage) {
      messdiv.innerText = errorMessage
      inputElement.classList.add('invalid')
    } else {
      messdiv.innerText = ''
      inputElement.classList.remove('invalid')
    }
  }
  var formElement = document.querySelector(options.form)
  if (formElement) {
    options.rules.forEach((rule) => {
      var inputElement = formElement.querySelector(rule.selector)
      if (inputElement) {
        inputElement.onblur = function () {
          validate(inputElement, rule)
        }
      }
    })
  }
}

Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : 'Vui long nhap truong nay'
    },
  }
}

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function () {},
  }
}
