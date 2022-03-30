

// window.addEventListener('click', function (e) {
//     if (document.querySelector('.apple-logo').contains(e.target) || document.querySelector('.top-context').contains(e.target)) {


//         if (document.querySelector('.top-context').style.display === "none") {
//             document.querySelector('.top-context').style.display = "flex";
//         } else {
//             document.querySelector('.top-context').style.display = "none";
//         }
//     } else {
//         document.querySelector('.top-context').style.display = "none";
//     };
// });

// if (document.addEventListener) {
//     document.addEventListener('contextmenu', function (e) {
//         alert("You've tried to open context menu"); //here you draw your own menu
//         e.preventDefault();
//     }, false);
// } else {
//     document.attachEvent('oncontextmenu', function () {
//         alert("You've tried to open context menu");
//         window.event.returnValue = false;
//     });
// }

document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
    document.querySelector(
        ".context-list").style.display = "none"
}

function rightClick(e) {
    e.preventDefault();

    if (document.querySelector(
        ".context-list").style.display == "flex")
        hideMenu();
    else {
        var menu = document.querySelector(
            ".context-list")

        menu.style.display = 'flex';
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
    }

    
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.querySelector('.time').innerHTML = h + ":" + m;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function getDate() {
    const d = new Date();
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[d.getDay()];
    let name = month[d.getMonth()];

    document.querySelector('.date').innerHTML = day + ' ' + name + ' ' + d.getDate();
    setTimeout(getDate, 1000);
}

dragElement(document.querySelector('.window'));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "title")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "title").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



getDate()
startTime()