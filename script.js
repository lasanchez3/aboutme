
// Alert text for welcome message
function welcome() {
    let text;
    let person = prompt("Please enter your name:", "");
    if (person == null || person == "") {
        text = "Welcome!";
    } else {
        text = "Hello " + person + "! Welcome to my website!";
    }
    document.getElementById("welcome").innerHTML = text;
}

//Change the text of the button and the paragraph
let paragraphIndex = 0;
const paragraphs = [
    "I am an international student from Colombia 🇨🇴, a country known for its vibrant culture and breathtaking landscapes 🖼️. With a degree in Visual Arts and over nine years of experience as an audiovisual filmmaker, producer, and editor 🎥, I have worked in major media, including television and advertising. Currently, I am in Canada 🇨🇦 pursuing studies in Multimedia Design and Development to expand my skills and creativity in the digital space.🎨",
    "In my free time, I enjoy traveling to discover new places, cultures, and experiences 🌎🧳. Photography is one of my favorite hobbies, as it allows me to capture unique moments and stories 📷. I also cherish spending quality time with my friends and family, whether it's a cozy gathering or an exciting adventure together.👪🏼",
    "When it comes to food, I have a soft spot for sushi 🍣 and traditional Colombian dishes. Sushi's elegant flavors and variety always amaze me, while Colombian food, with its rich taste and comforting qualities, reminds me of home. Whether it’s a bowl of ajiaco or bandeja paisa, each bite feels like a connection to my roots.😋"
];

function toggleParagraph() {
    const paragraphElement = document.getElementById("learn-more-text");
    const buttonElement = document.getElementById("discover-btn");

    if (!paragraphElement || !buttonElement) return;

    if (paragraphElement.style.display === "none" || paragraphElement.textContent === "") {
        paragraphElement.style.display = "block";
    }

    paragraphElement.textContent = paragraphs[paragraphIndex];

    if (paragraphIndex === 0) {
        buttonElement.textContent = "Discover More";
    }
    
    paragraphIndex = (paragraphIndex + 1) % paragraphs.length;
}


// Profile picture hover changes effect
function changePicture() {
    const profilePic = document.getElementById("profile-pic");
    if (profilePic) {
        profilePic.src = "assets/fall.jpg";
    }
}

function resetPicture() {
    const profilePic = document.getElementById("profile-pic");
    if (profilePic) {
        profilePic.src = "assets/me.jpg";
    }
}

// Change the color text every 30 seconds
function changeTextColor() {
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    const textElement = document.getElementById("contact-text");
    if (!textElement) return;

    let colorIndex = 0;
    textElement.style.color = colors[colorIndex];

    setInterval(() => {
        colorIndex = (colorIndex + 1) % colors.length;
        textElement.style.color = colors[colorIndex];
    }, 30000);
}

// DOM is loaded before running scripts
document.addEventListener("DOMContentLoaded", function () {
    welcome();
    changeTextColor();
});
