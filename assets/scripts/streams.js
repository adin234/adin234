var params = getSearchParameters();
var sanitizeTwitch = function(e) {
		e = grep(e.split('/'), function(e) {return e;});;
		return e[e.length - 1];
};
var user;
ajax.get(server+'user/'+params.user, {}, function(e) {
	user = e;
	var twitch = sanitizeTwitch(e.custom_fields.twitchStreams);
	document.getElementById('twitchChat').src = 'http://twitch.tv/'+twitch+'/chat?popout=';
	document.getElementsByName('flashvars')[0].value = 'hostname=www.twitch.tv&channel='+twitch+'&auto_play=true&start_volume=25';
	document.getElementById('twitchStream').data = 'http://www.twitch.tv/widgets/live_embed_player.swf?channel='+twitch;
	document.getElementById('mon').getElementsByClassName('sched-detail')[0].innerHTML = e.custom_fields.mondaySchedule;
	document.getElementById('tue').getElementsByClassName('sched-detail')[0].innerHTML = e.custom_fields.tuesdaySchedule;
	document.getElementById('wed').getElementsByClassName('sched-detail')[0].innerHTML = e.custom_fields.wednesdaySchedule;
	document.getElementById('thu').getElementsByClassName('sched-detail')[0].innerHTML = e.custom_fields.thursdaySchedule;
	document.getElementById('fri').getElementsByClassName('sched-detail')[0].innerHTML = e.custom_fields.fridaySchedule;
	document.getElementById('sat').getElementsByClassName('sched-detail')[0].innerHTML = e.custom_fields.saturdaySchedule;
	document.getElementById('sun').getElementsByClassName('sched-detail')[0].innerHTML = e.custom_fields.sundaySchedule;
	document.getElementById('ads-container').innerHTML = e.custom_fields.advertisement;
	document.getElementById('youtubelink').href = 'http://www.youtube.com/channel/'+e.custom_fields.youtube_id;
	loadJs('//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', function() {
		(adsbygoogle = window.adsbygoogle || []).push({});
	});
}, null, 'json');