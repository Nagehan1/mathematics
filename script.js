var pictures;

// Describe this function...
function Setvalue() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
}

// Describe this function...
function display_carosel_image() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
}


pictures = ['https://i.ibb.co/wJsg1Dg/signal-2021-07-05-111250-005.jpg', 'https://i.ibb.co/XDHRSsv/signal-2021-07-05-111250-006.jpg', 'https://i.ibb.co/R4yB94f/signal-2021-07-05-111250-010.jpg', 'https://i.ibb.co/kGh8WYk/berk-251.jpg', 'https://i.ibb.co/TPqQzWJ/signal-2021-07-05-111250-009.jpg', 'https://i.ibb.co/ysMrD8F/signal-2021-07-05-111250-007.jpg'];
let element_image = document.getElementById('image');
element_image.setAttribute("src", pictures[0]);


document.getElementById('next').addEventListener('click', (event) => {
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", pictures.shift());
  if (!pictures.length) {
    Setvalue();
  }

});

document.getElementById('prev').addEventListener('click', (event) => {
  let element_image3 = document.getElementById('image');
  element_image3.setAttribute("src", pictures.shift());
  if (!pictures.length) {
    Setvalue();
  }

});
function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('text').value);

  element_list.appendChild(new_li);

});
