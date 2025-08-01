const slideshowImage = document.querySelector('.discImage');

const slideshowImagesArray = [
    '../simulation/disc/1-1.png',
    '../simulation/disc/2-1.png',
    '../simulation/disc/3-1.png',
    '../simulation/disc/4-1.png',
    '../simulation/disc/5-1.png',
    '../simulation/disc/6-1.png',
    '../simulation/disc/7-1.png',
    '../simulation/disc/8-1.png',
    '../simulation/disc/9-1.png',
    '../simulation/disc/10-1.png',
    '../simulation/disc/11-1.png',
    '../simulation/disc/12-1.png',
    '../simulation/disc/13-1.png',
    '../simulation/disc/14-1.png',
    '../simulation/disc/15-1.png',
    '../simulation/disc/16-1.png',
        '../simulation/disc/1-1.png',
    '../simulation/disc/2-1.png',
    '../simulation/disc/3-1.png',
    '../simulation/disc/4-1.png',
    '../simulation/disc/5-1.png',
    '../simulation/disc/6-1.png',
    '../simulation/disc/7-1.png',
];
slideshowImage.style.width="150px";
slideshowImage.style.height="130px";
slideshowImage.setAttribute('x', '1610');
slideshowImage.setAttribute('y', '1002');
let slideshowCurrentIndex = 0;
let slideshowIntervalId;

function updateSlideshowImage() {
    slideshowCurrentIndex = (slideshowCurrentIndex + 1) % slideshowImagesArray.length;
    slideshowImage.setAttribute('href', slideshowImagesArray[slideshowCurrentIndex]); // <-- key change
}

function startImageSlideshow() {
    clearInterval(slideshowIntervalId);  // prevent overlapping
    slideshowIntervalId = setInterval(updateSlideshowImage, 2);

    setTimeout(() => {
        clearInterval(slideshowIntervalId);
    }, 5000);
}





//Your JavaScript goes in here

function openNav() {
    document.getElementById("mySidepanel").style.width = "500px";
    document.getElementById("mySidepanel").style.height = "100%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

// Button 1 move
const moveButton = document.getElementById('moveButton');
    const objectToMove = document.getElementById('objectToMove');
    const targetObject = document.getElementById('targetObject');

    function moveObject() {
        // Get the position of the target object
        const targetRect = targetObject.getBoundingClientRect();
        // const targetX = targetRect.left;
        // const targetY = targetRect.top;

        // Move the object to the target position
        objectToMove.style.transition = 'transform 2s ease'; // Add a smooth transition effect
        objectToMove.style.transform = `translate(-439px, -272px)`;
    }

    moveButton.addEventListener('click', moveObject);

    // Button 2 move
    // const moveButton2 = document.getElementById('moveButton2');
    // const objectToMove2 = document.getElementById('objectToMove2');
    // const targetObject2 = document.getElementById('targetObject2');

    // function moveObject2() {
    //     // Get the position of the target object
    //     const targetRect = targetObject.getBoundingClientRect();
    //     // const targetX = targetRect.left;
    //     // const targetY = targetRect.top;

    //     // Move the object to the target position
    //     objectToMove2.style.transition = 'transform 2s ease'; // Add a smooth transition effect
    //     objectToMove2.style.transform = `translate(-265px, -340px)`;
    // }

    // moveButton2.addEventListener('click', moveObject2);

    // Button 3 move
    const moveButton3 = document.getElementById('moveButton3');
    const objectToMove3 = document.getElementById('objectToMove3');
    const targetObject3 = document.getElementById('targetObject3');

    function moveObject3() {
        // Get the position of the target object
        const targetRect = targetObject.getBoundingClientRect();
        // const targetX = targetRect.left;
        // const targetY = targetRect.top;

        // Move the object to the target position
        objectToMove3.style.transition = 'transform 2s ease'; // Add a smooth transition effect
        objectToMove3.style.transform = `translate(1605px, 430px)`;
    }

    moveButton3.addEventListener('click', moveObject3);

    // Button 4 ball opicity
const moveButton4 = document.getElementById('moveButton4');
function moveObject4() {
    objectToMove3.style.opacity=0;
}
moveButton4.addEventListener('click', moveObject4);


// Button 5 move
const moveButton5 = document.getElementById('moveButton5');
    const objectToMove5 = document.getElementById('objectToMove5');
    const targetObject5 = document.getElementById('targetObject5');

    function moveObject5() {
        // Get the position of the target object
        const targetRect = targetObject.getBoundingClientRect();
        // const targetX = targetRect.left;
        // const targetY = targetRect.top;

        // Move the object to the target position
        objectToMove5.style.transition = 'transform 2s ease'; // Add a smooth transition effect
        objectToMove5.style.transform = `translate(-405px, -17px)`;
}

    moveButton5.addEventListener('click', moveObject5);

    // Button 6 move
const moveButton6 = document.getElementById('moveButton6');
const objectToMove6 = document.getElementById('objectToMove6');
const targetObject6 = document.getElementById('targetObject6');

function moveObject6() {
    // Get the position of the target object
    const targetRect = targetObject.getBoundingClientRect();
    // const targetX = targetRect.left;
    // const targetY = targetRect.top;

    // Move the object to the target position
    objectToMove6.style.transition = 'transform 2s ease'; // Add a smooth transition effect
    objectToMove6.style.transform = `translate(-90px, -705px)`;
}

moveButton6.addEventListener('click', moveObject6);



// button one by one open


document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button');
    
    function revealNextButton(currentButtonIndex) {
        if (currentButtonIndex < buttons.length - 1) {
            buttons[currentButtonIndex].disabled = true;
            buttons[currentButtonIndex + 1].classList.remove('hidden');
        }
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            revealNextButton(i);
      });
  }
});


// const pngElement = document.querySelector('.png-element');
// const popup = document.getElementById('popup');
// const popupText = document.getElementById('popup-text');

// pngElement.addEventListener('mouseover', () => {
//     const name = pngElement.getAttribute('alt');
//     popupText.textContent = name;
//     popup.style.display = 'block';
// });

// pngElement.addEventListener('mouseout', () => {
//     // popup.style.display = 'none';
// });


// popup all Element

const svgContainer = document.getElementById("svgContainer");
const elementName = document.getElementById("elementName");

svgContainer.addEventListener("mouseover", (e) => {
    if (e.target.dataset.name) {
        elementName.innerText = e.target.dataset.name;
        elementName.style.left = e.clientX + "-5px";
        elementName.style.top = e.clientY + "-4px";
        elementName.style.display = "block";
    }
});

svgContainer.addEventListener("mouseout", () => {
    elementName.style.display = "none";
});

// rotation base

// 25 RPM

var flag_material1=false;
var flag_material2=false;


 // JavaScript code for the rotation animation
 const svgImages = document.querySelectorAll('.svg-image');
 const moveButton7 = document.getElementById('moveButton7');
 let currentIndex = 0;
 let intervalId;


  // Function to display the next SVG image
  function showNextImage() {
    svgImages[currentIndex].style.display = 'none'; // Hide the current image
    currentIndex = (currentIndex + 1) % svgImages.length; // Move to the next image
    svgImages[currentIndex].style.display = 'block'; // Display the next image
}

// Function to start the animation
function startAnimation() {
    intervalId = setInterval(showNextImage, 0.1); // Change the interval as needed (in milliseconds)
}

// Function to stop the animation after 5 seconds
function stopAnimation() {
    clearInterval(intervalId);
}

// Add a click event listener to start the animation
moveButton7.addEventListener('click', () => {
    flag_material1=true
    startAnimation();
    setTimeout(stopAnimation, 5000); // Stop after 5 seconds (5000 milliseconds)
});
moveButton7.addEventListener('click', startImageSlideshow);


// moveButton7.addEventListener('click', () => {
//     startAnimation();
//     setTimeout(stopAnimation, 5000); // Stop after 5 seconds (5000 milliseconds)
// });

// 50 RPM

// JavaScript code for the rotation animation
// const svgImages = document.querySelectorAll('.svg-image');
const moveButton9 = document.getElementById('moveButton9');
// let currentIndex = 0;
// let intervalId;


 // Function to display the next SVG image
 function showNextImage() {
   svgImages[currentIndex].style.display = 'none'; // Hide the current image
   currentIndex = (currentIndex + 1) % svgImages.length; // Move to the next image
   svgImages[currentIndex].style.display = 'block'; // Display the next image
}

// Function to start the animation
function startAnimation() {
   intervalId = setInterval(showNextImage, 0.001); // Change the interval as needed (in milliseconds)
}

// Function to stop the animation after 5 seconds
function stopAnimation() {
   clearInterval(intervalId);
}

// Add a click event listener to start the animation
moveButton9.addEventListener('click', () => {
    flag_material2=true;
   startAnimation();
   setTimeout(stopAnimation, 5000); // Stop after 5 seconds (5000 milliseconds)
});
moveButton9.addEventListener('click', startImageSlideshow);



// JavaScript logic
// const material1Button = document.getElementById('moveButton7');
// const material2Button = document.getElementById('moveButton9');
const moveButton8 = document.getElementById('moveButton8');
const resultContainer = document.getElementById('resultContainer');
const material1Photo = document.getElementById('material1Photo');
const material2Photo = document.getElementById('material2Photo');

// Function to show the result photo based on the choice of material
function showResult() {
    if (flag_material1) {

        resultContainer.style.display = 'block';
        material1Photo.style.display = 'block';
        material2Photo.style.display = 'none';
    }
    if (flag_material2) {
            resultContainer.style.display = 'block';
            material1Photo.style.display = 'none';
            material2Photo.style.display = 'block';
    }
    // if(!flag_material1 && !flag_material2){
    //     alert('Please select a material first.');

    // }
}
console.log(moveButton8.addEventListener('click', showResult)
)
// Add click event listener to the Show Result button
moveButton8.addEventListener('click', showResult);



// material button disable

moveButton7.addEventListener('click', () => {
    moveButton9.disabled = true;
    moveButton7.disabled = false;
});

moveButton9.addEventListener('click', () => {
    moveButton7.disabled = true;
    moveButton9.disabled = false;
});




// Help! video

// document.getElementById("playButton").addEventListener("click", function () {
//     var videoPlayer = document.querySelector(".video-player");
//     videoPlayer.style.display = "block";
// });

// document.getElementById("closeButton").addEventListener("click", function () {
//     var videoPlayer = document.querySelector(".video-player");
//     videoPlayer.style.display = "none";
    
//     // Pause the video when closing
//     var video = document.getElementById("video");
//     video.pause();
// });


// button open in 5 sec

document.getElementById("moveButton7").addEventListener("click", function() {
    // Hide the initial button
    // this.style.display = "none";
    
    // Use setTimeout to show the hidden button after 5 seconds
    setTimeout(function() {
      document.getElementById("moveButton8").style.display = "block";
      document.getElementById("out").style.display = "block";
    }, 5000); // 5000 milliseconds = 5 seconds
  });

  document.getElementById("moveButton9").addEventListener("click", function() {
    // Hide the initial button
    // this.style.display = "none";
    
    // Use setTimeout to show the hidden button after 5 seconds
    setTimeout(function() {
      document.getElementById("moveButton8").style.display = "block";
      document.getElementById("out").style.display = "block";
    }, 5000); // 5000 milliseconds = 5 seconds
  });

// button open in 1 sec

  document.getElementById("moveButton3").addEventListener("click", function() {
    // Hide the initial button
    // this.style.display = "none";
    
    // Use setTimeout to show the hidden button after 5 seconds
    setTimeout(function() {
      document.getElementById("moveButton4").style.display = "block";
    }, 1000); // 5000 milliseconds = 5 seconds
  });


  // button one click two button open

const buttonContainer = document.getElementById('buttonContainer');

moveButton6.addEventListener('click', function () {
    buttonContainer.classList.remove('hidden');
});








// document.getElementById("moveButton8").addEventListener("click", function () {
//   document.getElementById("resultBox").classList.remove("hidden");
// });


// document.getElementById("moveButton8").addEventListener("click", function () {
//   document.getElementById("resultBox").classList.remove("hidden");
// });




















// // MATERIAL 1
// const images1 = document.querySelectorAll(".material1Photo");
// let currentIndex1 = 0;

// function showImage1(index) {
//   images1.forEach((img, i) => {
//     img.style.display = (i === index) ? "block" : "none";
//   });
// }

// document.getElementById("moveButton8").addEventListener("click", () => {
//   document.getElementById("resultContainer1").style.display = "block";
//   currentIndex1 = 0;
//   showImage1(currentIndex1);
// });

// document.getElementById("nextBtn1").addEventListener("click", () => {
//   currentIndex1 = (currentIndex1 + 1) % images1.length;
//   showImage1(currentIndex1);
// });

// document.getElementById("prevBtn1").addEventListener("click", () => {
//   currentIndex1 = (currentIndex1 - 1 + images1.length) % images1.length;
//   showImage1(currentIndex1);
// });


// // MATERIAL 2
// const images2 = document.querySelectorAll(".material2Photo");
// let currentIndex2 = 0;

// function showImage2(index) {
//   images2.forEach((img, i) => {
//     img.style.display = (i === index) ? "block" : "none";
//   });
// }

// // Example trigger to show Material 2 result:
// document.getElementById("showMaterial2Btn").addEventListener("click", () => {
//   document.getElementById("resultContainer2").style.display = "block";
//   currentIndex2 = 0;
//   showImage2(currentIndex2);
// });

// document.getElementById("nextBtn2").addEventListener("click", () => {
//   currentIndex2 = (currentIndex2 + 1) % images2.length;
//   showImage2(currentIndex2);
// });

// document.getElementById("prevBtn2").addEventListener("click", () => {
//   currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
//   showImage2(currentIndex2);
// });





// let selectedRPM = null;
// let currentindex = 0;
// let currentImages = [];

// function selectRPM(rpm) {
//   selectedRPM = rpm;
//   document.getElementById("moveButton8").classList.remove("hidden");
// }

// function showResult() {
//   if (!selectedRPM) return;

//   // Get all images for selected RPM
//   currentImages = document.querySelectorAll(`.materialPhoto.rpm${selectedRPM}`);
  
//   // Hide all images
//   document.querySelectorAll('.materialPhoto').forEach(img => img.style.display = "none");

//   // Show container and first image
//   document.getElementById("resultContainer").style.display = "block";
//   currentindex = 0;
//   showImage(currentindex);
// }

// function showImage(index) {
//   currentImages.forEach((img, i) => {
//     img.style.display = (i === index) ? "block" : "none";
//   });
// }

// document.getElementById("nextBtn").addEventListener("click", () => {
//   currentindex = (currentindex + 1) % currentImages.length;
//   showImage(currentindex);
// });

// document.getElementById("prevBtn").addEventListener("click", () => {
//   currentindex = (currentindex - 1 + currentImages.length) % currentImages.length;
//   showImage(currentindex);
// });





let selectedRPM = null;
let currentindex = 0;
let currentImages = [];

function selectRPM(rpm) {
  selectedRPM = rpm;
  document.getElementById("moveButton8").classList.remove("hidden");
}

function showResult() {
  if (!selectedRPM) return;

  // Hide all images
  document.querySelectorAll('.materialPhoto').forEach(img => img.style.display = "none");

  // Filter relevant images
  currentImages = document.querySelectorAll(`.materialPhoto.rpm${selectedRPM}`);

  // Show result box
  document.getElementById("resultContainer").style.display = "block";
  currentindex = 0;
  showImage(currentindex);
}

function showImage(index) {
  currentImages.forEach((img, i) => {
    img.style.display = (i === index) ? "block" : "none";
  });

  const currentImg = currentImages[index];
  document.getElementById("imageLabel").innerHTML = `<b>${currentImg.dataset.label}</b>`;
  document.getElementById("imageDescription").innerText = currentImg.dataset.desc;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentindex = (currentindex + 1) % currentImages.length;
  showImage(currentindex);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentindex = (currentindex - 1 + currentImages.length) % currentImages.length;
  showImage(currentindex);
});