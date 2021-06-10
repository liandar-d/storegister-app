// var toggleMenu; 

// document.getElementById("first-section").onmouseover = function() {mouseOver()};
// document.getElementById("first-section").onmouseout = function() {mouseOut()};

// function mouseOver() {
//   document.getElementsByClassName("box-outer").removeClass('adjust');
// }

// function mouseOut() {
//   document.getElementsByClassName("box-outer").addClass('adjust');
// }

function ExpandMenu() {
    var toggle = document.querySelector('.toggle');
    var outerBox = document.querySelector('.box-outer');
    var col = document.querySelector('.adjust-toggle');
    const linkName = document.querySelectorAll('.nav-link');
    const navItem = document.querySelectorAll('.nav-item');
    const dropHover = document.querySelectorAll('.drop-hover');
    var RowAdjust = document.querySelector('.row-adjust');
    var dropDown = document.querySelector('.sideMenuDropdown');
    toggle.classList.toggle('adjust');
    outerBox.classList.toggle('adjust');
    dropDown.classList.toggle('adjust');
    RowAdjust.classList.toggle('adjust');
    col.classList.toggle('adjust');
    linkName.forEach(function(el) {
        el.classList.toggle('adjust');
    });
    navItem.forEach(function(lo) {
        lo.classList.toggle('adjust');
    });
    dropHover.forEach(function(lo) {
        lo.classList.toggle('adjust');
    });
}

// Toggle switch
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000);
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.classList.remove('transition');
        window.setTimeout(() => {
            document.documentElement.classList.add('transition');
        }, 1000);
    }    
}




toggleSwitch.addEventListener('change', switchTheme, false);

//toast
// document.getElementById("liveToastBtn").onclick=function() {
//     var MyAlert = document.getElementById("liveToast");
//     var bsAlert = new bootstrap.Toast(MyAlert);
//     bsAlert.show();
// }


  