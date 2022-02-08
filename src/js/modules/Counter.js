export default function Counter({ $app }) {
  let defaultCount = 10;
  let countDisplay = HTMLInputElement || null;
  const render = () => {
    $app.innerHTML = `
       <div class="container">
          <h1>ui counter</h1>
          <div class="counter">
            <a href="#" class="minus-button"><span>-</span></a>
            <input name="count" type="text" class="count-display" value="10">
            <a href="#" class="plus-button"><span>+</span></a>
          </div>
        </div>`;
  };

  const plusButtonHandler = () => {
    if (defaultCount < 12) {
      defaultCount++;
    }
    if (countDisplay) {
      countDisplay.value = defaultCount.toString();
    }
  }

  const minusButtonHandler = () => {
    if (defaultCount > 8) {
      defaultCount--;
    }
    if (countDisplay) {
      countDisplay.value = defaultCount.toString();
    }
  }

  const init = () => {
    render();
    countDisplay = document.querySelector(".count-display");
    document.querySelector(".plus-button").addEventListener("click", plusButtonHandler);
    document.querySelector(".minus-button").addEventListener("click", minusButtonHandler);
  };

  init();
}
