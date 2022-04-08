function updateTime(element){
	let time = new Date();
	element.innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
	setTimeout
	(
		updateTime.bind(this, element),
		1000
	);
};