let sideLeftAwal = document.getElementById('side-left');
let navRightAwal = document.getElementById('navbar-right');

function width(){
	let i = document.getElementById('toogle');
	if(window.innerWidth<576){
		i.style.display='block';
		sideLeftAwal.style.display='none';
		navRightAwal.style.display='none';
		i.addEventListener('click',function(){
			if(sideLeftAwal.style.display=='none' && navRightAwal.style.display=='none'){
				sideLeftAwal.style.display='block';
				navRightAwal.style.display='block';
			}
			else{
				sideLeftAwal.style.display='none';
				navRightAwal.style.display='none';
			}
			console.log('yes');
		});
	}
	else{
		i.style.display='none';
		sideLeftAwal.style.display='block';
		navRightAwal.style.display='block';
	}
}

width();

window.addEventListener("resize", function(event) {
  width();
});