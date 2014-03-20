Titanium.UI.setBackgroundColor('#000');

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var margin = 10;
var canvasSize = pWidth-margin*4;
var size = canvasSize/3;


var mainWin = Ti.UI.createWindow({
	backgroundColor: "#d3d3d3"
});

var imageWin = Ti.UI.createWindow({
	backgroundColor: "#d3d3d3",
	layout: "horizontal"
});

var detailWin = Ti.UI.createWindow({
	backgroundColor: "#d3d3d3"
});

var border = Ti.UI.createView({
	backgroundColor: "#cecece",
	height: 1,
	width: pWidth,
	top: 20
});

var viewContainer = Ti.UI.createScrollView({
	width: pWidth,
	contentWidth: pWidth,
	height: pHeight-border.height-border.top,
	showVerticalScrollIndicator: true,
	backgroundColor: "#fef",
	layout: "horizontal"
});

var button = Ti.UI.createView({
	height: 70,
	width: pWidth - 50,
	backgroundColor: "#fff"
});

var detailView = Ti.UI.createView({
	height: pHeight-border.height-border.top,
	width: pWidth,
	backgroundColor: "#fef"
});

var startText = Ti.UI.createLabel({
	text: "Click here to begin",
	font: {fontSize: 25, fontStyle: "Helvetica"}
});

var loadFile = require("images");

button.add(startText);
imageWin.add(border,viewContainer);
mainWin.add(button);
mainWin.open();
