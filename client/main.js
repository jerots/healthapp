import './main.html';

BlazeLayout.setRoot('body');

function collapseNavBar() {
    $('#navbar-collapse').collapse("hide");
}

FlowRouter.triggers.enter([collapseNavBar]);


FlowRouter.route('/appointment/', {
    name: 'appointment',
    action: function () {
        BlazeLayout.render("mainLayout", {content: "appointment"});
    }
});

FlowRouter.route('/', {
    name: 'appointment',
    action: function () {
        BlazeLayout.render("mainLayout", {content: "appointment"});
    }
});

FlowRouter.route('/calendar/', {
    name: 'calendar',
    action: function () {
        BlazeLayout.render("mainLayout", {content: "calendar"});
    }
});

FlowRouter.route('/report/', {
    name: 'report',
    action: function () {
        BlazeLayout.render("mainLayout", {content: "report"});
    }
});

FlowRouter.route('/info/', {
    name: 'info',
    action: function () {
        BlazeLayout.render("mainLayout", {content: "info"});
    }
});

Template.appointment.events({
    'submit form': function (event) {   // also tried just 'submit', both work for me!
        console.log('Submitting form!');
        event.preventDefault();
        event.stopPropagation();
        return false;
    }
});