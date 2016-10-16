function getRandomColor() {
			var letters = '0123456789ABCDEF'.split('');
			var color = '#';
			for(var i = 0; i<6; i++) {
				color += letters[Math.floor(Math.random() * letters.length)];
			}
			return color;
		}

		//alert(getRandomColor());
		var begin, clicked, diff;

		function makeBox() {
			
			
			var time=Math.random() * 5000;

			setTimeout(function() {
				if(Math.random()>0.5) {
					document.getElementById("box").style.borderRadius ="50px";
				} else {
					document.getElementById("box").style.borderRadius ="0px";
				}

				var top=Math.random()*500;
				var left=Math.random()*500;
				document.getElementById("box").style.top= top+"px";
				document.getElementById("box").style.left= left+"px";

				document.getElementById("box").style.backgroundColor=getRandomColor();
				document.getElementById("box").style.display="block";
				begin = Date.now();
			}, time);

		}

		document.getElementById("box").onclick= function() {
			this.style.display = "none";
			clicked = Date.now();
			
			diff = clicked - begin;
			diff/=1000;

			document.getElementById("reaction").innerHTML =  diff;
			makeBox();
		}

		makeBox();
