var todoInput = document.getElementById("todo-input");
var addTodoBtn = document.getElementById("add-btn");
var list = document.getElementById("list");

addTodoBtn.addEventListener("click", function() {
  var todo = todoInput.value;

  // todo item main container
  var item = document.createElement("DIV");
  item.classList.add("item");

  // checkBox    itemText   (editInput)   (updateBtn)   editBtn    removeBtn

  // checkbox
  var checkBox = document.createElement("input");
  checkBox.classList.add("check-box");
  checkBox.type = "checkbox";

  checkBox.addEventListener("click", function() {
    const markCompleted = checkBox.checked
      ? function() {
          itemText.classList.add("completed");
          item.classList.add("completed-item");
        }
      : function() {
          itemText.classList.remove("completed");
          item.classList.remove("completed-item");
        };
    markCompleted();
  });

  // todo item text
  var itemText = document.createElement("DIV");
  itemText.classList.add("item-text");
  itemText.textContent = todo;

  // edit input box, to be hidden at the beginning
  var editInput = document.createElement("input");
  editInput.classList.add("edit-input");
  editInput.classList.add("hide");
  editInput.name = "edit-input";
  editInput.type = "text";
  editInput.value = todo;

  // button to update input, to be hidden in the beginning
  var updateBtn = document.createElement("BUTTON");
  updateBtn.classList.add("action-btn");
  updateBtn.classList.add("update-btn");
  updateBtn.classList.add("hide");
  updateBtn.textContent = "Update";
  updateBtn.type = "button";

  // actions buttons are Edit and remove
  var actionBtns = document.createElement("DIV");
  actionBtns.classList.add("action-btns");

  // Edit todo
  var editBtn = document.createElement("BUTTON");
  editBtn.classList.add("action-btn");
  editBtn.classList.add("edit-btn");
  editBtn.textContent = "Edit";

  editBtn.addEventListener("click", function() {
    editBtn.classList.add("active");
    editInput.classList.remove("hide");
    itemText.classList.add("hide");
    updateBtn.classList.remove("hide");

    updateBtn.addEventListener("click", function() {
      itemText.textContent = editInput.value;
      editBtn.classList.remove("active");
      editInput.classList.add("hide");
      updateBtn.classList.add("hide");
      itemText.classList.remove("hide");
    });
  });

  // remove todo
  var removeBtn = document.createElement("BUTTON");
  removeBtn.classList.add("action-btn");
  removeBtn.classList.add("remove-btn");
  removeBtn.textContent = "Delete";

  removeBtn.addEventListener("click", function() {
    item.parentNode.removeChild(item);
  });

  //putting everything together
  actionBtns.append(updateBtn);
  actionBtns.append(editBtn);
  actionBtns.append(removeBtn);

  item.append(checkBox);
  item.append(itemText);
  item.append(editInput);
  item.append(actionBtns);

  list.append(item);

  todoInput.value = "";
});
