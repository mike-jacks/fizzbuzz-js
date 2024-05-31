let intervalId;

const fizzbuzz = () => {
  let list = document.getElementById("fizzbuzz");
  list.innerHTML = "";
  let interval = 10;
  let i = 1;

  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    if (i > 100) {
      clearInterval(intervalId);
      return;
    }

    let itemText = "";
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
      itemText = `${i}: fizzbuzz`;
    } else if (i % 3 === 0) {
      console.log("fizz");
      itemText = `${i}: fizz`;
    } else if (i % 5 === 0) {
      console.log("buzz");
      itemText = `${i}: buzz`;
    }
    if (itemText) {
      let listItem = document.createElement("li");
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }
    i++;
  }, interval);
};

const reset = () => {
  document.getElementById("fizzbuzz").innerHTML = "";
  if (intervalId) {
    clearInterval(intervalId);
  }
};
