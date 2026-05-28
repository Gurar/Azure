function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}ibg();;
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});;


let menu = document.querySelector(".burger");
console.log(menu);
if(menu) {
    menu.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.toggle('active');
        document.querySelector('.nav--collapse').classList.toggle('menu-open');
        window.addEventListener('click', (event) => {
            if(event.target.tagName.toLowerCase() === 'a') {
                menu.classList.remove('active');
                document.querySelector('.nav--collapse').classList.remove('menu-open');
        }
        });
    });
}



