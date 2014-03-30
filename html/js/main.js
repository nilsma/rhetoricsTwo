/**
 * a function that shows the paragraph span elements of class 'hidden'
 * by changing the css display value to 'block', and also toggles the
 * show/hide details link in the article accordingly
 */
function showDetails() {
    var elements = getElements();
    for(var i = 0; i < elements.length; i++) {
        elements[i].style.display='block';
    }
    toggleLink();
}

/**
 * a function that hides the paragraph span elements of class 'hidden'
 * by changing the css display value to 'none', and also toggles the
 * show/hide details link in the article accordingly
 */
function hideDetails() {
    var elements = getElements();
    for(var i = 0; i < elements.length; i++) {
        elements[i].style.display='none';
    }
    toggleLink();
}

/**
 * a function that toggles the display of the show/hide details link
 * in the article according to the present state of that link:
 * the link that is currently displayed will be hidden, and vice versa
 */
function toggleLink() {
    var hideLink = document.getElementById('hideDetails');
    var showLink = document.getElementById('showDetails');
    var computedStyle = getComputedStyle(hideLink, null);
    if(computedStyle.display == 'block') {
        hideLink.style.display='none';
        showLink.style.display='block';
    } else {
        hideLink.style.display='block';
        showLink.style.display='none';
    }
}

/**
 * a function to get the paragraph span elements of class 'hidden'
 * @returns {NodeList} elements - an array of elements of class 'hidden'
 */
function getElements() {
    return document.getElementsByClassName('details');
}

function toggleMenu() {
    var nav = document.getElementById('nav_wrapper');
    var header = document.getElementById('header');
    var status = document.defaultView.getComputedStyle(nav, '').getPropertyValue('display');
    if(status == 'block') {
        nav.style.display='none';
        header.style.height='1em';
    } else {
        nav.style.display='block';
        header.style.height='5em';
    }
}

window.onload = function() {
    hideDetails();
}