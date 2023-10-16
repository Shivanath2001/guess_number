const userinput = document.querySelector("#userinput");
const submit = document.querySelector("button");
const info = document.querySelector("p");
const store = document.querySelector("#store");
const attempt=document.querySelector("span")
const clear=document.querySelector("#clear")
const main=document.querySelector(".main")
console.log(store);
const sysNO = Math.floor(Math.random() * 101);
console.log(sysNO);
const ary = [];
let a = 0;
submit.addEventListener("click", () => {
  if (userinput.value === "") {
    console.log("..");

  } else {
    ary.push(+userinput.value);

    if (userinput.value == sysNO) {
      info.innerHTML = "Your number is equal";
      const finish=document.createElement("button")
      finish.classList.add("finish")
      finish.innerHTML='Play again'
      main.append(finish)
      const f=document.querySelector(".finish")
      console.log(f);
      finish.addEventListener("click",(e)=>{
        console.log("finish");
        a=0
          store.value=""
          attempt.innerHTML=0
          ary.length=0
          finish.remove(".finish")
          info.innerHTML=""
      })
      
    } else if (userinput.value > sysNO) {
      info.innerHTML = "Your number is too large";
      console.log("<..>");
    } else {
      info.innerHTML = "Your number is too small";
      console.log(userinput.innerHTML);
    }
    store.value = ary;
    a++;
    attempt.innerHTML=a
console.log(ary.length);

  }
  userinput.value = "";
});
clear.addEventListener("click",()=>{
    // console.log("sdddddddddddddddd");
    a=0
    store.value=""
    attempt.innerHTML=0
    ary.length=0
    console.log(ary);
    console.log(main.innerHTML);
   

})


