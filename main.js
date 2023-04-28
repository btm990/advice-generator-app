adviceSection = document.querySelector(".advice")
adviceIdSection = document.querySelector(".card-title span")
adviceButton = document.querySelector(".dice-button")

async function adviceFetch() {
    const adviceResp = await fetch("https://api.adviceslip.com/advice")
    const adviceObj = await adviceResp.json()
    adviceSection.textContent = `"${adviceObj.slip.advice}"` 
    adviceIdSection.textContent = adviceObj.slip.id
}

fetch("https://api.adviceslip.com/advice/71")
    .then(res => res.json())
    .then(adviceSlip => {
        adviceSection.textContent =`"${adviceSlip.slip.advice}"`
        adviceIdSection.textContent = adviceSlip.slip.id
    })

adviceButton.addEventListener('click', adviceFetch)
