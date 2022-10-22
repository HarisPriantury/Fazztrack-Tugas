// // Mengambil element yg mau dihide
// const titleDashboard = document.getElementById("title-dashboard");
// // const titleDashboard = document.getElementsByClassName("dashboard")[0];
// // const titleDashboard = document.getElementsByTagName("h1")[0];
// // const titleDashboard = document.querySelector("h1"); //by tag name
// // const titleDashboard = document.querySelector(".dashboard"); //by class name
// // const titleDashboard = document.querySelector("#title-dashboard"); //by id name

// const btnShow = document.getElementById("show");

// btnShow.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (titleDashboard.classList.contains("hidden")) {
//     titleDashboard.classList.remove("hidden");
//     btnShow.innerHTML = "Hide";
//   } else {
//     titleDashboard.classList.add("hidden");
//     btnShow.innerHTML = "Show";
//   }

//   console.log(titleDashboard);
// });

//mengambil elemet yang di sembunyikan
const createTugas = document.getElementById("createTugas");
function show(e) {
    if (createTugas.classList.contains("hidden")) {
        createTugas.classList.remove("hidden");
    }else{
        createTugas.classList.add("hidden")
    }
    
}
//mengambil element yang di hide

const popUp = document.getElementById("createPopup")
function showPopup (){
    if (popUp.className == "popup"){
        popUp.className = "newPopup"
    }else {
        popUp.className = "popup"
    }
}
// const popUp = document.getElementById("popup");
// function showPopUp (s){
//     if (popUp.attributes.contains("display")){
//         popUp.attributes.remove("display");
//     }else{
//         popUp.classList.add("display");
//     }
// }