// Function to redirect the user from the main page to the message page
function redirectToMessagePage() {
    window.location.href = "message.html"; // Redirects to message.html
}

// Array of possible Valentine’s Day messages
const messages = [
    "You make my heart skip a beat. Happy Valentine’s Day!",
    "Are you made of copper and tellurium? Because you’re Cu-Te!",
    "You are the reason my heart beats faster. Happy Valentine’s Day!",
    "Happy Valentine’s Day! Love you!",
    "Every day is a great day when I’m with you. Happy Valentine’s Day!",
    "You are my forever Valentine!",
    "Happy Valentine’s Day to you!",
    "You and me, together forever. Happy Valentine’s Day!",
    "You are loved!",
    "Happy Valentine’s Day to the one person I’m most in love with: me. But if you want to change that… let’s chat.",
    "Roses are red, violets are blue, I’m single and ready to swipe right on you.",
    "I’m not saying I’m Cupid, but if you’re looking for a love match… I’m right here.",
    "Single? Maybe. Flirty? Always. Send chocolate, please",
    "Roses are red, sugar is sweet, I’m single and ready to make you smile, even if it’s just a treat.",
    "Single on Valentine’s Day, but I’m open to a date… if you can handle all this fun!",
    "Single? Absolutely. But I’m also out here slaying life and waiting for someone who can keep up.",
    "Valentine’s Day is about self-love first, and if you can handle the confidence, I’m open to adding some extra love!",
    "Being single just means I’m focused on becoming the best version of myself. But hey, if you want to join the journey, you better be ready.",
    "Here’s to being single and fabulous. Valentine’s Day is just another reminder that I’m living my best life!",
    "Valentine’s Day is for loving yourself, and trust me, that’s a full-time job. But if you think you can add some extra love, I’m open to it!",
    "Valentine’s Day is a reminder that the most important relationship you can have is with yourself. Keep shining!",
    "Love yourself first, and everything else will follow. Happy Valentine’s Day to the one person who matters most: YOU!",
    "Valentine’s Day isn’t just for romantic love—it’s for honoring yourself and all the progress you’ve made. You are enough!",
    "Celebrate YOU today. You deserve it!",
    "Love yourself first, always. Happy Valentine’s Day!",
    "Keep spreading love—starting with yourself!",
    "May God fill your heart with peace, joy, and His love today and always. Happy Valentine’s Day!",
];

// Function to display a random message on the message page
function generateMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("message").innerText = messages[randomIndex];
}

// This function runs when the message page loads and generates a message
window.onload = function() {
    if (document.getElementById("message")) {
        generateMessage();  // Generate and display the message
    }
};
