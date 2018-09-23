const keys = Array.from(document.getElementsByClassName('key')); //NodeList turn to Array
			// console.log(keys);
const audio = Array.from(document.querySelectorAll('audio'));
			// console.log(audio);

			function removeTransition(e) {
				// console.log(e);
				if(e.propertyName !== 'transform') {
					// console.log(this);
					this.classList.remove('playing');
				}
			}

			addEventListener('keypress', function(e){
				e.preventDefault;
				// console.log("keycode: " + e.keyCode);
						
				for(var i = 0; i<keys.length; i=i+1){

					if(e.keyCode == keys[i].getAttribute('data-key')) {
					 	
						// console.log(keys[i]);
						// console.log("pressed" + ' ' + e.keyCode);

						for(var j = 0; j < audio.length; j++){
							if(e.keyCode == audio[j].getAttribute('data-key')) {
								// console.log(audio[j]);
								// console.log("pressed" + ' ' + e.keyCode);
								if(!audio) return; // stop the function from running all together
								audio[j].currentTime = 0; // rewind to the start
								audio[j].play();
							}
						}

						


						keys[i].classList.add('playing');

						keys[i].addEventListener('transitionend', removeTransition);
					}
				}
			}, false);