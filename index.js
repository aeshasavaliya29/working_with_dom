// -----------------------------------------------------------------------------------
// box 1
// hight - width change box

// Select the magical box element
const magicalBox = document.getElementById('magical-box');

// Event listener for mouseenter (hover)
magicalBox.addEventListener('mouseenter', function () {
          magicalBox.style.width = '300px';
          magicalBox.style.height = '300px';
});

// Event listener for mouseleave (hover off)
magicalBox.addEventListener('mouseleave', function () {
          magicalBox.style.width = '200px';
          magicalBox.style.height = '200px';
});


// -----------------------------------------------------------------------------------
// box2
// change the color box

// Select the box element
const box1 = document.getElementById('box1');
const hoverColors = ['red', 'green', 'pink', 'orange'];
const initialColor = 'blue';

// Add event listener for mouseenter (hover)
box1.addEventListener('mouseenter', function () {
          const randomIndex = Math.floor(Math.random() * hoverColors.length);
          const selectedColor = hoverColors[randomIndex];

          box1.style.backgroundColor = selectedColor;
});

// Add event listener for mouseleave (hover off)
box1.addEventListener('mouseleave', function () {
          box1.style.backgroundColor = initialColor;
});


// // -----------------------------------------------------------------------------------
// // box 3
// // change the color img


const box = document.getElementById('my-box');
const content = box.querySelector('.content');

box.addEventListener('mouseenter', function () {
          content.style.display = 'block';
});

box.addEventListener('mouseleave', function () {
          content.style.display = 'none';
});

