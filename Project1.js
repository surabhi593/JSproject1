<!DOCTYPE html>
<html>
<body>
<script type="text/javascript">
function changeImage1(){
	
	document.getElementById('myImage').src='flower.png';
	
}

function changeImage2(){
	document.getElementById('myImage').src='flower1.png'
	
}
</script>

<h2>What Can JavaScript Do?</h2>

<p>JavaScript can change HTML attribute values.</p>

<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

<button onclick=changeImage1()>Turn on the light</button>

<img id="myImage" src="flower.png" style="width:100px">

<button onclick=changeImage2()>Turn off the light</button>

</body>
</html>
