// Startingpoint for my thinking; empty-ish function, then create the action below and add together later..

// const buttonElement = document
//   .querySelectorAll(".big-five-button")
//   .forEach((buttonElement) => {
//     buttonElement.addEventListener("click", () =>
//       console.log(event.currentTarget.textContent)
//     );
//   });

// const clickedAnimal = document
//   .createElement("li")
//   .innerHTML(event.currentTarget.textContent);
// const spottedAnimals = document.getElementById("spotted-animals-list");
// spottedAnimals.appendChild(clickedAnimal);

// DEEL 1.
const buttonElement = document
  .querySelectorAll(".big-five-button")
  .forEach((buttonElement) => {
    buttonElement.addEventListener("click", function () {
      const clickedAnimal = document.createElement("li");
      const spottedAnimals = document.getElementById("spotted-animals-list");
      spottedAnimals.appendChild(clickedAnimal);
      clickedAnimal.innerHTML = event.currentTarget.textContent;
    });
  });

//   DEEL 2.

const buttonRemoveFirst = document.getElementById("remove-first-item-button");
buttonRemoveFirst.addEventListener("click", function () {
  const parentFirstItem = document.getElementById("spotted-animals-list");
  const childFirstItem = parentFirstItem.getElementsByTagName("li")[0];
  const removedFirstItem = parentFirstItem.removeChild(childFirstItem);
  console.log(removedFirstItem);
});

// DEEL 3.

const buttonRemoveAll = document.getElementById("remove-all-button");
buttonRemoveAll.addEventListener("click", function () {
  const parent = document.getElementById("spotted-animals-list");
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
});
