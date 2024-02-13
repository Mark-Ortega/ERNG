let givenName = document.querySelector('#name')
let btnClass = document.querySelector('#addNameButton')
let listOfName = document.querySelector('#listOfName')

btnClass.addEventListener('click', () => {
   let actualName = givenName.value
   if (actualName.length != 0) {
      let createAnHTMLList = `
      <div style="display: flex; justify-content: center;">
      <li class="row" style="border-top: 2px solid black; border-bottom: 2px solid black; margin-top: 1%; display: flex; justify-content: space-around; align-items: center; width: 90%">
    
      ${actualName}
      
      <button type="button" class="btn btn-danger" onclick="removeNameFromTheList(this)" style="width: 100px; height: 40px; display: flex; justify-content: center; align-items: center;">Remove</button>
    </div>
      `
      listOfName.innerHTML += createAnHTMLList
      givenName.value = ''
      givenName.classList.remove('red')
   } else{
      givenName.classList.add('red')
   }
})
function removeNameFromTheList(e) {
   e.parentElement.remove()
}

// Couldnt Get li count in time
const numOfLis = document.querySelectorAll("li").length;
console.log(numOfLis)
    