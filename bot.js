// bot.js
const axios = require('axios');

// The URL you want to keep alive
const targetUrl = 'https://bot-2-939z.onrender.com'; // Replace with the URL of the page you want to keep alive

// Function to make an HTTP request to the target URL
async function keepAlive() {
  try {
    await axios.get(targetUrl);
    await axios.get('https://inidev.co.uk')
    console.log(`Successfully pinged ${targetUrl} at ${new Date().toISOString()}`);
  } catch (error) {
    console.error(`Error pinging ${targetUrl}:`, error);
  }
}

// Run the keepAlive function periodically (e.g., every 5 minutes)
setInterval(keepAlive, 5 * 60 * 1000); // 5 minutes in milliseconds

// Initial call to start the bot immediately
keepAlive();
