// script.js
const apiKey = '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'; // Replace with your actual API key
const apiUrl = 'https://api.openai.com/v1/chat//completions';

document.getElementById('send-button').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value;

    // Make an API request to GPT-3
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    "role": "system",
                    "content": "You are a pelican designed to help write emails to legislators."
                },
                {
                    "role": "user",
                    "content": userInput
                }
            ],
            max_tokens: 50 // Adjust as needed
        })
    });

    const responseData = await response.json();
    const botResponse = responseData.choices[0].text;

    // Display the bot's response in the chat interface
    displayBotResponse(botResponse);

    // Clear the user input field
    document.getElementById('user-input').value = '';
});

function displayBotResponse(response) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'bot-message';
    messageDiv.textContent = response;
    chatMessages.appendChild(messageDiv);
}
