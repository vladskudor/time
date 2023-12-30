console.log('Time works');
let date = new Date();
setInterval(() => {
	document.querySelector('.block-hours').textContent = date.getHours() < 10 ? '0' + date.getHours() + ' : ' : date.getHours() + ' :';
	document.querySelector('.block-minutes').textContent = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() + ' : ';
	document.querySelector('.block-seconds').textContent = date.getSeconds() < 10 ? '0' + date.getSeconds() + ' .' : date.getSeconds();
} , 1000);
