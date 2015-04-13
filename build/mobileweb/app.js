var profileWin = Ti.UI.createWindow({
	backgroundColor:'lightgray'
});

var view1 = Ti.UI.createView({
	backgroundColor:'blue',
	layout:'horizontal',
	height:100,
	width:'90%',
	left: 10
});

profileWin.add(view1);

var profilePic = Ti.UI.createImageView({
	width: 7,
	height: Ti.UI.FILL,
	borderColor:'#000005',
	borderWidth:2,
	borderRadius:2,
	backgroundColor:'white'
});

profilePic.image = '\profilePic.jpg';

view1.add(profilePic);

view1.add(Ti.UI.createView({
	width:15,
	height:Ti.UI.FILL,
	backgroundColor:'green',
}));

var nestedViewContainer = Ti.UI.createView({
	layout: 'vertical',
	height: Ti.UI.FILL,
	width: Ti.UI.FILL,
	backgroundColor: 'yellow',
});

var label1 = Ti.UI.createLabel({
	text: 'Name: Joyanna Wilson',
	width: Ti.UI.SIZE,
	height: '50%',
	backgroundColor:'cyan',
});

var label2 = Ti.UI.createLabel({
	text: 'About/Info',
	height: Ti.UI.SIZE,
	width: Ti.UI.FILL,
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	backgroundColor:'red'
});

var label3 = Ti.UI.createLabel({
	text:'For more information about Joyanna, click the "About" button',
	width:Ti.UI.SIZE,
	height:Ti.UI.SIZE,
	backgroundColor: 'purple'
});

nestedViewContainer.add(label1);
nestedViewContainer.add(label2);
nestedViewContainer.add(label3);

//var btn = Ti.UI.createButton({
    //title: 'About',
    //height: 50,
    //width: 100,
    //bottom: 10 ,
    //left : 20
//});

//nestedViewContainer.add(btn);

//btn.addEventListener('click', function() {
    //var infoWin = Titanium.UI.createWindow({
        //layout : 'vertical',
        //height : Titanium.UI.SIZE,
        //width : Titanium.UI.SIZE
    //});
 
//var name = Ti.UI.createLabel({
    //text : 'BLAH BLAH BLAH!',
    //color : '#000',
    //font : {fontSize:15},
    //height :Titanium.UI.SIZE,
    //width : Titanium.UI.SIZE,
    //top : 10,
    //left : 10,
    //textAlign : 'center'
//});
 
//infoWin.add(name);

view1.add(nestedViewContainer);

profileWin.open();

