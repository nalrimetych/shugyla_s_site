const nav_link = document.querySelectorAll('.nav_link');

const second_block = document.querySelector('.second_block');
const third_block = document.querySelector('.third_block');
const fourth_block = document.querySelector('.fourth_block');
const final_block = document.querySelector('.final_block');

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return box.top + pageYOffset;
}

nav_link[0].addEventListener('click' , function() {
	scrollTo({
		top:0,
		behavior: 'smooth',
	});
});



nav_link[1].addEventListener('click' , function() {
	scrollTo({
		top:getCoords(second_block),
		behavior: 'smooth',
	});
});

nav_link[2].addEventListener('click' , function() {
	scrollTo({
		top:getCoords(third_block),
		behavior: 'smooth',
	});
});

nav_link[3].addEventListener('click' , function() {
	scrollTo({
		top:getCoords(fourth_block),
		behavior: 'smooth',
	});
});

nav_link[4].addEventListener('click' , function() {
	scrollTo({
		top:getCoords(final_block),
		behavior: 'smooth',
	});
});