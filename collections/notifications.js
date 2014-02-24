Notifications = new Meteor.Collection('notifications');

createMessageNotification = function(message) {
	var post = Messages.findOne(message.postId);
	Notifications.insert({
		userId: post.userId,
		messageId: post._id,
		posterName: post.author,
		read: false
	});
};