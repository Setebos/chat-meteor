Notifications = new Meteor.Collection('notifications');

createMessageNotification = function(message, user) {
	// var post = Messages.findOne(message._id);
	Notifications.insert({
		userId: user,
		messageId: message._id,
		posterName: message.author,
		read: false
	});
};