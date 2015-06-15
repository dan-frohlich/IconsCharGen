// Because of security restrictions, getImageFromUrl will
// not load images from other domains.  Chrome has added
// security restrictions that prevent it from loading images
// when running local files.  Run with: chromium --allow-file-access-from-files --allow-file-access
// to temporarily get around this issue.
function getImageFromUrl(url, callback) {
	var img = new Image();

	img.onError = function() {
		alert('Cannot load image: "'+url+'"');
	};
	img.onload = function() {
		callback(img);
	};
	img.src = url;
}