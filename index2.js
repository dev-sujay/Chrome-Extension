let myLeads = []
let oldLeads = []

// convert string into array
// myLeads =  JSON.parse(myLeads)

// myLeads.push("www.facebook.com")

// convert array back into string
// myLeads = JSON.stringify(myLeads)


const inputEl = document.getElementById("input-el")
const inputBtnEl = document.getElementById("input-btn")
const delBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const saveTabBtn = document.getElementById("savetab-btn")
const storedLeads = JSON.parse(localStorage.getItem("myLeads"))



if (storedLeads) {
    myLeads = storedLeads
    render(myLeads)
}



//   ------> to make the fucntion dynamic as what er write in the parametes in the render funcntion it adjusts itself according to it
//              |
function render(leads) { //-----|

    let listItems = ""

    for (i = 0; i < leads.length; i++) {

        // listItems = "<li><a href='" + myLeads[i] +"' target = '_blank'>" + myLeads[i] + "</a></li> " //very important ****

        // template strings------------->
        listItems += `
                     <li>
                         <a href='${leads[i]}'     target='_blank'>
                             ${leads[i]}
                         </a>
                     </li>
        
                    `

        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li> " //reads the html tags and manipulates the dom

        // other way of doing this is---------------:::----->

        // const li = document.createElement("li")//create a li element
        //  li.textContent = myLeads[i] //change the innertect content
        // ulEl.append(li) // append the li eliment to ulEl
    }
    ulEl.innerHTML = listItems
}


delBtn.addEventListener("click", function () {

    localStorage.clear()
    myLeads = []
    ulEl.innerHTML = ""
    render(myLeads)
})

inputBtnEl.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

})

saveTabBtn.addEventListener("click", function () {
    
    chrome.tabs.query({ active:true, currentWindow:true }, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads) 
    })

})





