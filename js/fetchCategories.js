document.addEventListener('DOMContentLoaded', init());

function init() {
  console.log("Fetch Categories")
  initCategoriesSelect();
}

// fetch categories - Select i html'en
function initCategoriesSelect(){
  fetch("http://localhost:8080/categories")
    .then(response => response.json())
    .then(result => renderCategoriesSelect(result));
}

function renderCategoriesSelect(result) {
  result.forEach(categories => {
    insertCategoriesToUI(categories);
  });
}

function insertCategoriesToUI(data) {
  let selectContainer = document.querySelector("#sltCategory");
  let option_item = `<option value="${data.categoryID}">${data.categoryName}</option>`;
  selectContainer.insertAdjacentHTML("beforeend", option_item);
}
