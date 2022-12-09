const userInput = document.querySelector("#input-el")
const saveInputBtn = document.querySelector("#input-btn")
const saveTabBtn = document.querySelector("#savetab-btn")
const delAllBtn = document.querySelector("#delete-btn")
const list = document.querySelector("#ul-el")
const olderLeads = JSON.parse(localStorage.getItem("leads"))
let leads = []



const showLeads = (leads) => {
    list.innerHTML = leads.map((item) => {
        return `
        <li>
           <a href='${item}' target='_blank'>
             ${item}
           </a>
          <button class="del-item">del</button> 
        </li>
        `
    }).join("")

    const delItemBtns = list.querySelectorAll(".del-item")
    delItemBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        // console.log(localStorage.leads.indexOf("sujay"));
        // console.log(localStorage.leads);
        btn.parentElement.remove()
      })
    })  

}



if (olderLeads) {
    leads = olderLeads
    console.log(leads);
    showLeads(leads)   
}


saveInputBtn.addEventListener("click", () => {
    leads.push(userInput.value)
    localStorage.setItem("leads", JSON.stringify(leads))
    userInput.value = ""
    showLeads(leads)
})



delAllBtn.addEventListener("click", () => {
  localStorage.clear()
  leads = []
  showLeads(leads)
})
