// let input = document.querySelector("input")

// input.addEventListener("input" , function(dts){
// if(dts.data !== null){
//     console.log(dts.data)

// }
// })


// let device = document.querySelector("#device")
// let slc = document.querySelector("select")

// slc.addEventListener("change" , function(dts){

//     device.textContent = `${dts.target.value} Device Selected `
//     console.log(dts)
// })
    

let text = document.querySelector("h1")


window.addEventListener("keydown" , function(dets){
    // console.log(dets)
    if(dets.key === " "){
        text.textContent = `SPC`
    }
    else{
        text.textContent = `You press ${dets.key}`
        console.log(dets)
    }
})





// let btn = document.querySelector(".file")
// let input = document.querySelector("input")

// btn.addEventListener("click", function(){

//     input.click()

// })
    

// input.addEventListener("change" , function(dets){

//     const files = dets.target.files[0]
//     if(files){
//         btn.textContent = files.name
//         console.dir(dets)
//     }

// })



// let abcd = document.querySelector("#abcd")

// abcd.addEventListener("mousemove" , function(){
//     abcd.style.backgroundColor = "yellow"
// })



// abcd.addEventListener("mouseout" , function(){
//     abcd.style.backgroundColor = "red"
// })