Router.configure({
	layoutTemplate: 'layout',
	// loadingTemplate: 'loading',
	waitOn: function() { 
		return [Meteor.subscribe('messages'), Meteor.subscribe('notifications'), Meteor.subscribe('alerts')]
	}
});

Router.map(function() {
	this.route('messagesPage', {
		path: '/'
	});
});