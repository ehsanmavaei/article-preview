console.log('HELLO');

const test = () => {
	console.log('this is a test');
};
 

const open_share = document.querySelector('.open-share');
const button = document.querySelector('.arrow');
const arrow = document.querySelector('#arrow');

button.addEventListener('click', event => {
	console.log("id");
	open_share.classList.add('active')
	
 
});
arrow.addEventListener('click', event => {
	console.log("id");
	open_share.classList.remove('active')
	
 
});