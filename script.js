// Show current date and time
function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  document.getElementById('dateTime').textContent = now.toLocaleDateString('en-US', options);
}
updateDateTime();
setInterval(updateDateTime, 1000);

// Show a random motivational quote
const quotes = [
  "The best way to get started is to quit talking and begin doing. – Walt Disney",
  "Don't let yesterday take up too much of today. – Will Rogers",
  "It's not whether you get knocked down, it's whether you get up. – Vince Lombardi",
  "If you are working on something exciting, it will keep you motivated. – Steve Jobs",
  "Success is not in what you have, but who you are. – Bo Bennett",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Push yourself, because no one else is going to do it for you."
];
function showRandomQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').textContent = quote;
}
showRandomQuote();

// Theme toggle (light/dark mode)
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')) {
    themeToggle.textContent = '☀️';
    themeToggle.title = 'Switch to light mode';
  } else {
    themeToggle.textContent = '🌙';
    themeToggle.title = 'Switch to dark mode';
  }
});

// Click counter for the main button
let clickCount = 0;
const counterDiv = document.getElementById('counter');
function updateCounter() {
  counterDiv.textContent = `Button clicked: ${clickCount} time${clickCount === 1 ? '' : 's'}`;
}
updateCounter();

document.getElementById('alertBtn').addEventListener('click', function() {
  alert('Hello! You clicked the button. Welcome to web development!');
  const msg = document.getElementById('customMessage');
  msg.textContent = '🎉 Great job! You just triggered your first interactive web element.';
  msg.classList.add('visible');
  this.textContent = 'Clicked!';
  clickCount++;
  updateCounter();
}); 