var imageFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imageFolder.getDirectoryListing();

var openWindow = function(){
	imageWin.open({transition: Ti.UI.iPhone.AnimationStyle.CURL_UP});
};



button.addEventListener("click", openWindow);

var getDetail = function(dataSource){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#f5f5f5"
	});
			
	var detailView = Ti.UI.createView({
		height: 65,
		backgroundColor:"#fff",
		top:0
	});
	
	var detailBorder = Ti.UI.createView({
		backgroundColor: "#dbdbdb",
		height: 1,
		top: viewContainer.height + viewContainer.top
	});
	
	var detailTitle = Ti.UI.createLabel({
		text: dataSource.title,
		font: {fontSize: 20, fontWeight: "bold"},
		top: 30,
		width: "100%",
		textAlign: "center"
	});
	
	var detailPic = Ti.UI.createImageView({
		image: dataSource.image
	});

	
	var closeButton = Ti.UI.createLabel({
		text: "Close Window",
		backgroundColor: "#333",
		color: "fff",
		height: 50,
		width: "100%",
		bottom: 0,
		textAlign: "center"
	});
	
	var closeWindow = function(){
		detailWindow.close({transition: Ti.UI.iPhone.AnimationStyle.CURL_UP});
	};
	
	closeButton.addEventListener("click", closeWindow);
	
	detailView.add(detailTitle);
	detailWindow.add(detailView, detailBorder, detailPic, closeButton);
	
	detailWindow.open({transition: Ti.UI.iPhone.AnimationStyle.CURL_UP});


};

for(var i=0; i<imageFiles.length; i++){
	var view = Ti.UI.createView({
		backgroundColor: "#000",
		top: margin,
		left: margin,
		width: size,
		height: size
	});
	var newImage = Ti.UI.createImageView({
		title: imageFiles[i],
		image: "images/" + imageFiles[i],
		top: 0,
		width: view.width*2
		
	});
	view.add(newImage);
	viewContainer.add(view);
};

viewContainer.addEventListener("click", function(event){
	console.log(event.source.title);
	getDetail(event.source);
});

