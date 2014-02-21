Messages = new Meteor.Collection('messages');

Meteor.methods({
	post: function(postAttributes) {
		var user = Meteor.user();

		if(!user) {
			throw new Meteor.Error(401, "You need to login to post a message");
		}

		if(!postAttributes.content) {
			throw new Meteor.Error(422, 'Please fill in a message');
		} 

		var message = _.extend(_.pick(postAttributes, 'content'), {
			userId: user._id,
			author: user.username,
			posted: new Date().getTime(),
		});

		var messageId = Messages.insert(message);
		return messageId;
	}
})