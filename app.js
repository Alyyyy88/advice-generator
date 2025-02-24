const btn = document.querySelector(".btn");

const id = document.querySelector(".title");


const adviceHT = document.querySelector(".advice");



btn.addEventListener("click" ,getAdvice);


async function getAdvice() {
  const url = "https://api.adviceslip.com/advice";
  try {
    const response = await fetch(url);
    if(!response.ok) throw new Error (response.status);
    const advice = await response.json();
    id.textContent =`advice #${advice.slip.id}`;
    adviceHT.textContent = `"${advice.slip.advice}"`
  } catch (error) {
    console.log(error);
  }
}

getAdvice();





