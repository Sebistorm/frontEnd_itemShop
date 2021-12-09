document.addEventListener('DOMContentLoaded', init());

function init() {
  console.log("View All Items")
  initItemTable()
}


function initItemTable(){
  fetch("http://localhost:8080/items")
    .then(response => response.json())
    .then(result => {
      renderItemTable(result)
    });
}

function renderItemTable(eventData){
  eventData.forEach(eventEle => {
    insertItemToUI(eventEle);
  });
}

function insertItemToUI(itemData) {
  let ItemContainer = document.querySelector(".tableBody");
  console.log(itemData)
  let item = `
    <div class="Item d-flex col-12 justify-content-around mb-2">
      <div class="col-sm-2">${itemData.itemID}</div>
      <div class="col-sm-2">${itemData.itemName}</div>
      <div class="col-sm-2">${itemData.itemPrice}</div>
      <div class="col-sm-2">${itemData.category.categoryName}</div>
      <div class="col-sm-2"><a href="viewItem.html/?id=${itemData.itemID}">View</a></div>
    </div>`;
  ItemContainer.insertAdjacentHTML("beforeend", item);

}
