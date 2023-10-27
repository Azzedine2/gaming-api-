function addHiddenClass(title) {
  title.classList.add("hidden");
}
function RmvHiddenClass(title) {
  title.classList.remove("hidden");
  if ((title.style.visibility = "hidden")) {
    title.style.visibility = "visible";
  }
}

export { addHiddenClass, RmvHiddenClass };
