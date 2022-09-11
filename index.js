let count = 0
let disp = document.getElementById("count-el")
let stringprev=""
function increment(){
    count=count+1
    disp.innerText = count
}

function resetvb(){
    count=0
    disp.innerText=count
}

function savevb(){
    let current =new Date()
    let cDate =  current.getDate() + ' - ' + (current.getMonth() + 1) + ' - ' +current.getFullYear();
    let cTime = current.getHours() + ":" + current.getMinutes();
    let dateTime = cDate +"  "+ cTime;

    stringprev = dateTime + " = " + count;
    let l1 = document.createElement("label");
    l1.setAttribute('style','margin-top: 3%; font-size: 20px; font-weight: bold; align-content: center;');
    l1.textContent = stringprev;
    let b = document.createElement("br");
    document.body.append(l1);
    document.body.append(b);

    // document.getElementById("prev-el").textContent +=  stringprev ;
}