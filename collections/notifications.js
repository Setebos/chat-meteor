Notifications = new Meteor.Collection('notifications');

Notifications.allow({
	update: function(userId, doc) {
		return !! userId;
	}
});

createMessageNotification = function(message, messageId, user) {
	Notifications.insert({
		userId: user,
		messageId: messageId,
		message: message.content,
		posterName: message.author,
		read: false
	});
};