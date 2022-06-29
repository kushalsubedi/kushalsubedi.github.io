let themeDots = document.getElementsByClassName("theme-dots");

for (var i=0;i<themeDots.length;i++){
    themeDots[i].addEventListener('click',function(){
        let mode = this.dataset.mode
        console.log('clicked',mode);
        setTheme(mode);
    })
}
function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = '../css/style.css'
	}

	if(mode == 'dark'){
		document.getElementById('theme-style').href = '../css/dark.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = '../css/purple.css'
	}

	
}