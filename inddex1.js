let textBlock = document.querySelector(".text-wrapper");
let events = ["cut", "copy", "contextmenu"];

events.forEach(evnt => {
  textBlock.addEventListener(evnt, e => {
    e.preventDefault();
    alert(`You are not allowed to ${e.type}`);
  });
});
