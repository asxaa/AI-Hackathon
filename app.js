const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const chatForm = document.getElementById("chat-form");

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage();
});

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage("You", message, "user");
  userInput.value = "";

  // Simulate AI response with a small delay
  setTimeout(() => {
    let reply = getCoachReply(message.toLowerCase());
    addMessage("CoachBuddy", reply, "coach");
  }, 700);
}

function addMessage(sender, text, role) {
  const p = document.createElement("p");
  p.classList.add(role);
  p.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getCoachReply(msg) {
  if (msg.includes("tired")) {
    return "Take a short break and try slowing your pace. Remember to breathe deeply to keep your energy up!";
  }
  if (msg.includes("pain")) {
    return "Listen to your body; if pain persists, consult a professional. Make sure to stretch gently and stay hydrated.";
  }
  if (msg.includes("warmup")) {
    return "A proper warm-up is essential: try light cardio and dynamic stretches to prepare your body.";
  }
  if (msg.includes("motivation")) {
    return "Keep your goals in mind and remember why you started! You’ve got this!";
  }
  if (msg.includes("improve") && msg.includes("squat")) {
    return "Keep your back straight and your knees aligned with your toes. Imagine sitting back into a chair to engage your glutes properly.";
  }
  if (msg.includes("sore")) {
    return "Make sure to stretch gently and stay hydrated. Rest is important, so consider taking a light recovery day.";
  }
  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hi there! Ready for a great workout today?";
  }
  return "Let's focus on form and breathing.";
}
