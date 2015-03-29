//Room name
var botRoom = process.argv[2];

//Token of user
var botToken = process.argv[3];

var Gitter = require('node-gitter');

var gitter = new Gitter(botToken);



gitter.currentUser()
.then(function(user) {
  console.log('You are logged in as:', user.username);
});

gitter.rooms.join(botRoom)
.then(function(room) {
	console.log('Joined room: ', room.name);
  
	var events = room.listen();

	events.on('message', function(message) {
		var botMsg = message.text;
		console.log('New message:', botMsg);
	
		botMsg=botMsg.replace(/\s/g,'');
		if(botMsg.indexOf('calc')==0){
			botMsg = botMsg.substr(4);
			botMsg = botMsg.split(/[^0-9\)\(\-\+\/\*\s]/);
			botMsg = botMsg[0];
			var mathMistake;
			try{
				var mathResult = eval(botMsg);
			}
			catch(e){
				mathMistake = e.message;
			}
			if(!isNaN(parseFloat(mathResult)) && isFinite(mathResult) && !mathMistake){
				console.log(botMsg + '=' +  mathResult);
				room.send(botMsg + '=' +  mathResult);
			}
			else{
				console.log('Math expression "'+botMsg+'" is incorrect! Mistake:' + mathMistake);
				//room.send('Math expression "'+botMsg+'" is incorrect! Mistake:' + mathMistake);
			}
		}
	});
})
.fail(function(err) {
	console.log('Not possible to join the room: ', err);
})
