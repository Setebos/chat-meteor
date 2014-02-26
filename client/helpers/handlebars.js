Handlebars.registerHelper("prettifyDate", function(time) {
    return moment(new Date(time)).format('HH:mm:ss');
});

	