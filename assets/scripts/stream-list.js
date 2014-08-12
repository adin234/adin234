ajax.get(server+'streamers', {}, function(e) {
	console.log(e.streamers.length);
	if(e.streamers.length) {
		return e.streamers.forEach(function(item , i) {
			var data = {};
			data.twitch = item.twitch.channel.name;
			data.username = item.username;
			data.userid = item.user_id;
			data.game = item.twitch.game;
			data.preview = item.twitch.preview.medium;
			console.log(template(document.getElementById('streamTpl').innerHTML, data), data);
			document.getElementById('streamsList').innerHTML += template(document.getElementById('streamTpl').innerHTML, data);
		});
	}

	document.getElementById('streamsList').innerHTML = 'No available streamer';
}, null, 'json');