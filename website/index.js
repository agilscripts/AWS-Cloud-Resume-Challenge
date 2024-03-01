// JavaScript 
const counter = document.querySelector(".counter-number");

async function updateCounter() {
  try {
    let response = await fetch("https://v4xdlyaxewrdrbfx67y2hbfbhq0xcdyl.lambda-url.us-east-1.on.aws/");
    
    console.log('Response Status:', response.status); // Log response status

    if (!response.ok) {
      throw new Error(`Failed to fetch views. Status: ${response.status}`);
    }

    let data = await response.json();

    if (typeof data === 'number') {
      counter.innerHTML = `Views: ${data}`;
    } else {
      throw new Error('Response is not a number.');
    }
  } catch (error) {
    console.error('Error updating counter:', error);
    counter.innerHTML = 'Couldn\'t read views';
  }
}

updateCounter();
