
//SECCIÓN 8
//Ejercicio 1
let elementos = document.querySelectorAll("#mi-lista li")
elementos.forEach((elemento)=>{
  elemento.addEventListener("click",() =>{
    console.log("Se clickeo sobre: " + elemento.textContent);
  })
})