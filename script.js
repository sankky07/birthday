let codeCorrect = "8598";
let emojiAnswer = "snoring";

function checkCode() {
  const input = document.getElementById("codeInput").value;
  const feedback = document.getElementById("codeFeedback");
  if (input === codeCorrect) {
    feedback.textContent = "✅ Correct code! Mission 1 complete.";
    document.getElementById("mission2").classList.remove("hidden");
  } else {
    feedback.textContent = "❌ Incorrect. Try again, Agent.";
  }
}

function checkEmoji() {
  const input = document.getElementById("emojiInput").value.toLowerCase().trim();
  const feedback = document.getElementById("emojiFeedback");
  if (input.includes(emojiAnswer)) {
    feedback.textContent = "✅ Nailed it! Proceed to final mission.";
    document.getElementById("mission3").classList.remove("hidden");
  } else {
    feedback.textContent = "❌ Not quite, Agent. Think again!";
  }
}

// ✅ Sweet Tooth Mission (replacing old launch sequence)
function checkSweet() {
  const input = document.getElementById("sweetInput").value.toLowerCase().trim();
  const feedback = document.getElementById("sweetFeedback");
  if (input.includes("chenapodo") || input.includes("chena podo")) {
    feedback.textContent = "✅ Correct! Final message unlocked!";
    document.getElementById("finalMessage").classList.remove("hidden");
  } else {
    feedback.textContent = "❌ Sweet... but not the right one. Try again!";
  }
}
