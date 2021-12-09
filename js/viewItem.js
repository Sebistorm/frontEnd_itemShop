document.addEventListener('DOMContentLoaded', init());

function init() {
  console.log("View one Items")
  fetchData()
}
function getID() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('id');
}

function fetchData() {
  let id = getID();
  console.log(id);
  fetch(`http://localhost:8080/findItemByItemID/`+id)
    .then(response => response.json())
    .then(result => setData(result));
}

function setData(data){
  console.log(data[0]);
  let ItemContainer = document.querySelector(".tableBody");
  let item = `
    <div class="Item d-flex col-12 justify-content-around mb-2">
      <div class="col-sm-2">${data[0].itemID}</div>
      <div class="col-sm-2">${data[0].itemName}</div>
      <div class="col-sm-2">${data[0].itemPrice}</div>
      <div class="col-sm-2">${data[0].category.categoryName}</div>
    </div>`;
  ItemContainer.insertAdjacentHTML("beforeend", item);
}

function changeActiveColorName(e) {
  let color = e.value;
  console.log(color);
  document.querySelector(".currentColor").innerHTML = color;
}


