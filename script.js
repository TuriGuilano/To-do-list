const listItems = Array.from(document.querySelectorAll("[type='checkbox']"));
const addButton = document.querySelector(".add");
const deleteButton = document.querySelector(".trash");
const inputArea = document.querySelector("#newItem");
const list = document.querySelector(".list");
const divOfList = document.querySelector(".listDiv");
const labels = Array.from(document.querySelectorAll("label"));

//Adding items.

addButton.addEventListener("click", function makeNewListItem() {
	if (inputArea.value !== "") {
		const newItem = document.createElement("input");
		newItem.type = "checkbox";
		list.appendChild(newItem);
		//let newText = document.createElement("input");
		//newText.type = "text";
		//if (newText.innerHTML === inputArea.value) list.appendChild(newItem);
		//list.appendChild(newText);
	}
});

//deleting opnieuw

deleteButton.addEventListener("click", function deleteItem() {
	for (i = 0; i < listItems.length; i++) {
		if (listItems[i].click) listItems[i].remove(i);
		for (i = 0; i < labels.length; i++)
			if (labels[i].click) {
				labels[i].remove([i].innerHTML);
			}
	}
});

//deleting
// listItems.forEach(listItem =>
// 	listItem.addEventListener("dragend", function deleteItem() {
// 		if (event.dataTransfer.dropEffect !== none) {
// 			listItems.remove(listItem);
// 		}
// 	})
// );
