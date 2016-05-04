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


Template.appointment.events = {
  'click input[type=submit]': function(e) {
    e.preventDefault();

    var selectedApptId = Session.get('selectedApptId');
    var newAppointment = AppointmentList.findOne(selectedPostId);

    
    var properties = {
        Date: $('#date').val(),
        AppointmentType: $('#apptType').val(),
        PartiesInvolved: $('#partiesInvolved').val(),
        Place: $('#place').val(),
    };
    AppointmentList.update(selectedApptId, {$set: properties});
    },
  'click .delete-link': function(e) {
    // do something when the users clicks .delete-link
  }
};

/*emplate.appointment.events={
  'click input[type=submit]': function (event){
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    var date = target.date.value;
    var apptType = target.apptType.value;
    var partiesInvolved = target.partiesInvolved.value;
    var place = target.place.value;
 
    // Insert a task into the collection
    AppointmentList.insert({
      Date: date, AppointmentType: apptType, PartiesInvolved: partiesInvolved, Place: place
    });
 
    // Clear form
    target.date.value = '';
    target.apptType.value = '';
    target.partiesInvolved.value = '';
    target.place.value = '';
  },
};*/

Template.Appointments.lists = function() {
    return AppointmentList.find();
    // return lists.find({}); // Works just the same
}