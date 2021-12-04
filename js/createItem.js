document.addEventListener('DOMContentLoaded', init());

function init() {
  console.log("Create Items")
}

document.querySelector("#frmCreateItem").addEventListener("submit", async function (e) {
  e.preventDefault();
  const form = document.querySelector("#frmCreateItem")
  const createUrl = form.action;
  try {

    let itemObject = {};

    itemObject.itemName = form.itemName.value;
    itemObject.itemPrice = form.itemPrice.value;
    itemObject.category = {};
    itemObject.category.categoryID = form.categoryID.value;


    itemObjectString = JSON.stringify(itemObject);

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: itemObjectString
    }

    const response = await fetch(createUrl, fetchOptions);
    if(!response.ok) {
      console.log('Error >:(')
    }

  } catch (error) {
    alert(error)
    console.log(error)
  }
})
