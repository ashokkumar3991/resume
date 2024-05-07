console.log(window.innerHeight);
function scrollToPosition(position){
    window.scrollTo({
        top:position,
        behavior: "smooth"
    })
}
function scrollToDiv(divId){
    var element = document.getElementById(divId);
    if(element){
        element.scrollIntoView({behavior: "smooth"})
    }
}
function scrollToDivVerySmoothly(divId) {
    var element = document.getElementById(divId);
    if (element) {
        var targetY = element.getBoundingClientRect().top + window.scrollY;
        var startY = window.scrollY;
        var distance = targetY - startY;
        var startTime = performance.now();
        var duration = 1000; // Duration of scrolling animation in milliseconds
        
        // Scroll function
        function scrollStep(timestamp) {
            var currentTime = timestamp || performance.now();
            var elapsedTime = currentTime - startTime;
            var scrollProgress = Math.min(elapsedTime / duration, 1); // Ensure progress doesn't exceed 1
            var scrollTop = startY + distance * easeInOutQuint(scrollProgress); // Apply easing function
            
            window.scrollTo(0, scrollTop);
            
            if (elapsedTime < duration) {
                window.requestAnimationFrame(scrollStep);
            }
        }
        
        // Easing function (very smooth start and end, faster middle)
        function easeInOutQuint(t) {
            return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t;
        }
        
        window.requestAnimationFrame(scrollStep);
    }
}
function changeToBlue(){
    navContainer.classList.remove('bgblue');
    // navContainer.classList.remove('bggreen');
    navContainer.classList.add('bgblue');
}
function changeToGreen(){
    navContainer.classList.remove('bgblue');
    // navContainer.classList.remove('bggreen');
    navContainer.classList.add('bggreen');
}
function changeOnScroll(){
    console.log(window.scrollY)
    if (window.scrollY < window.innerHeight){
        changeToGreen();
    }else if(window.scrollY >= window.innerHeight){
        changeToBlue();
    }
    
    // else if(window.scrollY >= window.innerHeight * 3){
    //     changeToGreen();
    // }else if(window.scrollY >= window.innerHeight *2){
    //     changeToBlue();
    // }else if(window.scrollY >= window.innerHeight){
    //     changeToGreen();
    // }
}

// Example usage: Scroll very smoothly to a div with the ID "myDiv"

const aboutButton = document.getElementById("aboutButton");
const portfolioButton = document.getElementById("portfolioButton");
const contactButton = document.getElementById("contactButton");
const downButton = document.getElementById("downButton");
const navContainer = document.getElementById("navContainer");


aboutButton.addEventListener("click", function() {
    console.log("About button clicked");
    // changeToBlue();
    scrollToDivVerySmoothly('aboutDiv');

});

portfolioButton.addEventListener("click", function() {
    console.log("Portfolio button clicked");
    // changeToBlue();
    scrollToDivVerySmoothly('portfolioDiv');
});

contactButton.addEventListener("click", function() {
    console.log("Contact button clicked");
    // changeToBlue();
    scrollToDivVerySmoothly('contactDiv');
});

downButton.addEventListener("click", function() {
    console.log("Down button clicked");
    // changeToBlue();
    scrollToDivVerySmoothly('aboutDiv');
});

window.scrollTo(0, 600);