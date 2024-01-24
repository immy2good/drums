document.addEventListener("DOMContentLoaded", () => {
  // Function to play sound
  function playSound(key) {
    const audioId = key.toUpperCase();
    const audioElement = document.getElementById(audioId);
    if (audioElement) {
      audioElement.play();
    }
    buttonAnimation(key);
  }

  // Function to add button animation
  function buttonAnimation(currentKey) {
    const activeButton = document.getElementById(currentKey.toUpperCase());
    const textToDisplay = document.getElementById("display");
    let buttonArray = ["Heater 1", "Heater 2", "Heater 3", "Heater 4", "Clap", "Open HH", "Kick n Hat", "Kick", "Close HH"];
    let buttonName;
    // console.log(currentKey);
    if (currentKey === "Q" || currentKey === "q") {
      buttonName = buttonArray[0];} else

    if (currentKey === "W" || currentKey === "w") {
      buttonName = buttonArray[1];} else

    if (currentKey === "E" || currentKey === "e") {
      buttonName = buttonArray[2];} else

    if (currentKey === "A" || currentKey === "a") {
      buttonName = buttonArray[3];} else
    if (currentKey === "S" || currentKey === "s") {
      buttonName = buttonArray[4];} else
    if (currentKey === "D" || currentKey === "d") {
      buttonName = buttonArray[5];} else
    if (currentKey === "Z" || currentKey === "z") {
      buttonName = buttonArray[6];} else
    if (currentKey === "X" || currentKey === "x") {
      buttonName = buttonArray[7];} else
    if (currentKey === "C" || currentKey === "c") {
      buttonName = buttonArray[8];
    }

    console.log(buttonName);

    if (activeButton) {
      activeButton.classList.add("pressed");
      textToDisplay.innerHTML = buttonName;
      setTimeout(() => {
        activeButton.classList.remove("pressed");
        textToDisplay.innerHTML = "";
      }, 150);
    }
  }

  //   function displayText() {
  //     const textToDisplay = document.getElementById("display");

  //   }

  // Event listener for keyboard press
  document.addEventListener("keydown", event => {
    playSound(event.key.toLowerCase());


  });

  // Event listeners for GUI buttons
  document.querySelectorAll(".drum-pad").forEach(button => {
    button.addEventListener("click", () => {
      playSound(button.innerText.toLowerCase());
    });
  });
});