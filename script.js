//https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
const input = document.getElementById("input")
const gallary =document.getElementById('gallary')
const button = document.getElementById('button')
const image = document.getElementById("img1")
const photo = document.getElementById("photo")
const h2 = document.getElementById('h2')
const recipe = document.getElementById('recipe')
const box = document.getElementById('box')
const box1 = document.querySelector(".box1")
const btn = document.querySelector(".btn")
box.style.display = "none"
const h3 = document.getElementById('h3')
const b = document.querySelector(".b")
button.addEventListener("click",(e)=>{
    e.preventDefault()
    h2.innerHTML = "fetching your data..."


val(input.value)
})

const val = async(value)=>{
   try {
    const anas = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    const data = await anas.json()
    gallary.textContent = ""
    data.meals.forEach(element => {
        const di= document.createElement("div")
        di.classList.add("box1")
        di.innerHTML = `<img src="${element.strMealThumb}"  height="190px" width="100%">
        <p>${element.strMeal}</p>
        <p>${element.strArea} dish</p>
        <p>belongs to ${element.strCategory}</p>
        `
        
        const btn = document.createElement("button")
        btn.classList.add("btn")
        btn.innerHTML = "view recipe"
        di.appendChild(btn)
       



        

        gallary.appendChild(di)
       
        h2.innerHTML = ""
        btn.addEventListener("click",()=>{
            h3.innerHTML =`${element.strInstructions}
           `
           
            box.style.display = "block"
            gallary.style.display = "none"
            let a = document.createElement('button')
            a.classList.add("b")
            a.textContent = "back"
            h3.appendChild(a)
            a.addEventListener("click",(e)=>{
                box.style.display = 'none'
                gallary.style.display = `block`
             
                gallary.style.display = "flex"


              
          
                
                

          
             })

           
           
        

        })
   

        
     
       

   

      



    });
    
   

    
   

   } catch (error) {
    
   }
}

