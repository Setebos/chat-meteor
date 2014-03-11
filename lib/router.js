Router.configure({
	layoutTemplate: 'layout',
	// loadingTemplate: 'loading',
	waitOn: function() { 
		return [Meteor.subscribe('messages'), Meteor.subscribe('notifications'), Meteor.subscribe('alerts'), Meteor.subscribe('bans')]
	}
});

Router.map(function() {
	this.route('messagesPage', {
		path: '/'
	});
});

Router.before(function() { clearErrors() });
Router.before(function() { clearBans() });