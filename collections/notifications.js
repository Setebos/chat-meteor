Notifications = new Meteor.Collection('notifications');

Notifications.allow({
	update: function(userId, doc) {
		return !! userId;
	}
});

createMessageNotification = function(message, messageId, user, personal) {
	Notifications.insert({
		userId: user,
		messageId: messageId,
		message: message.content,
		posted: message.posted,
		posterName: message.author,
		read: false,
		personal: personal
	});
};