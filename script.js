const rock = document.getElementById("R");
const paper = document.getElementById("P");
const sci = document.getElementById("S");

const active = document.getElementById("card1");

const User_point = document.getElementById("upoint");
const Com_point = document.getElementById("cpoint");
const tot = document.getElementById("tot");
const Draw = document.getElementById("draw");

const turn = document.getElementById("text");

const userp = document.getElementById("userp");
const comp = document.getElementById("comp");
const total = document.getElementById("Total");

const isInteger = (value) => !isNaN(+value) && value % 1 === 0;



  let totMatch = prompt("how many match you want");

  let totpoint = totMatch;
if(!isInteger(totpoint) || totpoint === NaN || totpoint === null)
{
    alert("Please enter only number")
    window.location.reload();
}

  let userPoint = 0;
  let comPoint = 0;
  let dPoint = 0;

  const alpa = "rps";
  let rCh;

  const time = () => 
  {
    tot.innerHTML = `Total = ${totpoint} `;
  
    rCh = alpa[Math.floor(Math.random() * alpa.length)];
  
    if (totpoint === 0) {
      if (userPoint > comPoint) turn.innerHTML = `✨you win the match 🙌 `;
      else if (userPoint === comPoint) turn.innerHTML = `Draw`;
      else turn.innerHTML = `😥 You lose the match 😭`;
  
      active.classList.add("active");
      document.getElementById("card1").style.display = "flex";
  
      comp.innerHTML = `Computer points = ${comPoint}`;
      userp.innerHTML = `Your points = ${userPoint}`;
  
      total.innerHTML = `Total = ${totMatch} `;
  
  
    }
  
  // releoad.addEventListener("click", () => { window.Location.reload() }

  // )

  totpoint = totpoint - 1;
  //  console.log(rCh);
  //  console.log(totpoint);
};
time();
// setInterval(
//     () => {
//         window.Location.reload(true);
//      },1000
// )

// console.log(rCh);

const whoWin = (ele) => {
  // console.log(ele);

  if (
    (ele === "p" && rCh === "r") ||
    (ele === "r" && rCh === "s") ||
    (ele === "s" && rCh === "p")
  ) {
    // console.log("user win1");
    userPoint++;

    User_point.innerHTML = `U = ${userPoint}`;
  } else if (ele === rCh) {
    // console.log("draw");
    dPoint++;
    Draw.innerHTML = `Draw = ${dPoint}`;
    totpoint++;
  } else {
    // console.log("computer win2");
    comPoint++;
    Com_point.innerHTML = `C = ${comPoint}`;
  }
  time();
};

const icon = document.getElementById("icon");

icon.addEventListener("click", () => {
  active.classList.remove("active");
  document.getElementById("card1").style.display = "none";
  window.location.reload();

});



// rock.addEventListener("click",whoWin('r'));
// paper.addEventListener("click",whoWin('p'));
// sci.addEventListener("click",whoWin('s'));
