console.log('HELLO');

const test = () => {
	console.log('this is a test');
};
 

const open_share = document.querySelector('.open-share');
const button = document.querySelector('.arrow');
const arrow = document.querySelector('#arrow');

button.addEventListener('click', event => {
	console.log("id");
	if(open_share.classList.contains('active')){
		open_share.classList.remove('active')
		console.log('has')
	}else{
		open_share.classList.add('active')
	}
	
	
 
});
arrow.addEventListener('click', event => {
	console.log("id");
	open_share.classList.remove('active')
	
 
});
