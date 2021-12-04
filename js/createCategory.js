document.addEventListener('DOMContentLoaded', init());

function init() {
  console.log("Create Category")
}

document.querySelector("#frmCreateCategory").addEventListener("submit", async function (e) {
  e.preventDefault();
  const createUrl = e.target.action;
  try {
    const formData = new FormData(e.target);
    const plainformdata = Object.fromEntries(formData.entries());
    const jsonString = JSON.stringify(plainformdata)

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: jsonString
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
