

const init = () => {
    // initialize the listener for the search button and trigger the search, when clicked
    document.getElementById("calc-button").addEventListener('click', calculate)
}

const calculate = async () => {
  // get the values
  const numbersField = document.getElementById("numbers-field")
  console.log(numbersField.value)
  const numberStrings = numbersField.value.split(';')
  const numbers = numberStrings.map(ns => parseInt(ns))

  const payload = { numbers: numbers }
  const response = await fetch('/sum', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
  const json = await response.json()
  console.log(json)
  const result = json.result
  document.getElementById("result-text").innerHTML = result
}

