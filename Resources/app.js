var profileWin = Ti.UI.createWindow({
	backgroundColor:'lightgray',
	title: 'Wilson, Joyanna'
});

var view1 = Ti.UI.createView({
	backgroundColor:'000000',
	layout:'vertical',
	top: 10,
	height:150,
	width:150,
	align:'center'
});

profileWin.add(view1);

var profilePic = Ti.UI.createImageView({
	width:'100%',
	height: Ti.UI.FILL,
	borderColor:'#000005',
	borderWidth:2,
	borderRadius:2,
	backgroundColor:'white'
});

profilePic.image = '\profilePic.jpg';

view1.add(profilePic);

var label1 = Ti.UI.createLabel({
	color:'#000000',
	text: 'Joyanna Wilson',
	font:{fontSize:25,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top: 155
});
profileWin.add(label1);

var label2 = Ti.UI.createLabel({
	color:'#000000',
	text: 'Bachelor of Science in \n Management and Human Resources \n With an Emphasis in Management \n College of Business and Economics \n University of Idaho \n Phone: (989)225-4555 \n boise_joy@msn.com \n wils1977@vandals.uidaho.edu',
	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	top: 200
});
profileWin.add(label2);

var aboutButton = Ti.UI.createButton({
	title: 'About Joyanna',
	backgroundColor: '#000000',
	font:{fontSize:15,fontFamily:'Helvetica Neue'},
	fontColor: '#FFFFFF',
	height: 50,
	width: 200,
	top: 350
});

profileWin.add(aboutButton);

aboutButton.addEventListener('click', function() {
	var aboutWin = Ti.UI.createWindow({
		title: 'About Joyanna',
		layout: 'vertical',
		height: '100%',
		width: '100%',
		backgroundColor: '#FFFFFF',
	});

    var back = Ti.UI.createButton({
        title : 'Back',
        backgroundColor: '#000000',
        fontColor: '#FFFFFF',
        height : 50,
        width : 100,
        top: 5,
        left: 5
    });
 
     back.addEventListener('click', function() {
        aboutWin.close();
    });
    
     
 aboutWin.add(back);
 
 var summaryLabel = Ti.UI.createLabel({
 	color:'#000000',
	text: 'Summary',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'Left',
	width:'auto',
	top: 20
 });
 
 aboutWin.add(summaryLabel);
 	
  var summaryInfo = Ti.UI.createLabel({
 	color:'#000000',
	text: ' Dedicated and responsible person with superb  organization, detail oriented, problem-solving, and communication skills. Along with a willingness and an ability to learn quickly in order to help accomplish objectives in any situation.',
	font:{fontSize:10,fontFamily:'Helvetica Neue', fontDecoration: 'Italics'},
	textAlign:'left',
	width:'auto',
	top: 20
 });
 
 aboutWin.add(summaryInfo);
 
  var skillsLabel = Ti.UI.createLabel({
 	color:'#000000',
	text: 'Skills',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'Left',
	width:'auto',
	top: 20
 });
 
 aboutWin.add(skillsLabel);
 	
  var skillsInfo = Ti.UI.createLabel({
 	color:'#000000',
	text: 'Computer Programs: Proficient with Microsoft Programs: Excel, PowerPoint, Project, and Word. As well as with Titanium Appcelerator.\n\n Computer Skills: Well versed in multiple operating system platforms (Microsoft Windows, IOS, and Google) as well as different software platforms (Adobe, Java, Flash). Ability to enter data, type, and network. \n\n Interpersonal Skills: Attentive Listening, Attention to Detail, Collaboration/Team oriented, Communication, Decision Making, Facilitating Group Discussions, Motivating Others, Multitasking, Problem Solving, Time Management. \n\n Professional Skills: Analyzing Business Cases, Creating Business Plans, Composing Executive Summaries, Customer Management/Satisfaction, Delivering Presentations, Leadership, Project Management, Strategic Planning, Understanding Financial Statements.', 
	font:{fontSize:10,fontFamily:'Helvetica Neue'},
	textAlign:'Left',
	width:'auto',
	top: 20
 });
 
 aboutWin.add(skillsInfo);
 
 aboutWin.open({
        modal : true
    });
});



profileWin.open();

