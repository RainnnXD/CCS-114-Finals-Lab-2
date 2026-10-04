// Function that checks the score and returns the remark
function evaluateScore(score) {
  if (score == "") {
    return "Invalid score (empty)";
  } else if (isNaN(score)) {
    return "Invalid score (not a number)";
  }

  score = Number(score);

  //Conditional
  if (score == 0) {
    return "Invalid score (zero)";
  } else if (score < 0) {
    return "Invalid score (negative)";
  } else if (score > 100) {
    return "Invalid score (over 100)";
  } else if (score >= 90) {
    return "Excellent";
  } else if (score >= 75) {
    return "Passed";
  } else {
    return "Failed";
  }
}

function startProgram() {
  document.getElementById("congrats").style.display = "none";
  alert("Welcome to the Score Checker!");

  //Prompt and Confirm
  let name = prompt("Enter your name:");
  let score = prompt("Enter your score:");
  let proceed = confirm("Do you want to continue?");

  // prompt gives null when Cancel is clicked
  if (name == null) {
    name = "";
  }
  if (score == null) {
    score = "";
  }
  name = name.trim();
  score = score.trim();

  if (proceed == false) {
    document.getElementById("nameOutput").textContent = "-";
    document.getElementById("scoreOutput").textContent = "-";
    document.getElementById("remarkOutput").textContent = "Cancelled";
    return;
  }

  if (name == "") {
    name = "Invalid name (empty)";
  }

  document.getElementById("nameOutput").textContent = name;
  document.getElementById("scoreOutput").textContent = score;
  let remark = evaluateScore(score);
  document.getElementById("remarkOutput").textContent = remark;

  // Change the message and add picture on the remark
  let congratsText = document.getElementById("congratsText");
  let congratsImg = document.getElementById("congratsImg");

  if (remark == "Excellent") {
    congratsText.textContent = "Congratulations! Palooo!";
    congratsImg.style.display = "inline";
  } else if (remark == "Passed") {
    congratsText.textContent = "Congratulations! Pasado ang good student!";
    congratsImg.style.display = "inline";
  } else if (remark == "Failed") {
    congratsText.textContent = "Sorry, you failed. Bawi ka next time sah!";
    congratsImg.style.display = "inline";
  } else {
    congratsText.textContent = "Please enter a valid score.";
    congratsImg.style.display = "inline";

  }

  document.getElementById("congrats").style.display = "block";
}

document.getElementById("startBtn").addEventListener("click", startProgram);
