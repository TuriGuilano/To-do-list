const listItem = document.querySelectorAll("[type='checkbox']");
console.log(listItem);
listItem.addEventListener("click", function checked() {
	listItem.classList.add("active");
});
