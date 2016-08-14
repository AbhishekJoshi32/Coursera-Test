(function(window){
	var speakWord = "Hi";
	var helloSpeaker={}
	helloSpeaker.speak=function (name) {
	  console.log(speakWord + " " + name);
	}
	window.helloSpeaker=helloSpeaker;
})(window)