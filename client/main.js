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

AppointmentList = new Mongo.Collection('appointment');

Template.appointment.helpers({
  newAppointment: function() {
    return AppointmentList.findOne(Session.get('selectedApptId'));
  }
});

Template.appointment.events ({
    'submit .newAppointment': function(event){
        var date = event.target.date.value;
        var apptType = event.target.apptType.value;
        var partiesInvolved = event.target.partiesInvolved.value;
        var place = event.target.place.value;

        AppointmentList.insert({
            Date: date, 
            AppointmentType: apptType,
            PartiesInvolved: partiesInvolved,
            Place: place,
        });
        event.target.date.value="";
        event.target.apptType.value="";
        event.target.partiesInvolved.value="";
        event.target.place.value="";

        return false;
    }
});

//Template.dpReplacement.replaces("afBootstrapDatepicker");

//Template for remove button but it is not working
/*Template.Appointments.events({
    'click .delete' function() {
        AppointmentList.remove(this._id);
    }
});*/

Template.Appointments.lists = function() {
    return AppointmentList.find();
    // return lists.find({}); // Works just the same
}