import './main.html';

BlazeLayout.setRoot('body');

function collapseNavBar() {
    $('#navbar-collapse').collapse("hide");
}


//ROUTES
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


//Initialise db
Appointments = new Mongo.Collection('appointments');

//Hard coded data
// Appointments.insert({date: 'aaa', type: 'b', parties: 'c', place: 'd'});


// HELPERS
Template.appointment.helpers({
    appointments: function () {
        return Appointments.find();
    },
    showIndex: function(index){
      return index + 1;

    }
});


//EVENTS
Template.appointment.events({
    'submit #newAppointment': function (event) {

        event.preventDefault();

        var date = event.target.date.value;
        var time = event.target.time.value;
        var apptType = event.target.apptType.value;
        var partiesInvolved = event.target.partiesInvolved.value;
        var place = event.target.place.value;

        var result = {
            'date': date,
            'time' : time,
            'type': apptType,
            'parties': partiesInvolved,
            'place': place
        };

        console.log(result);
        var success = Appointments.insert(result);

        $('#myModal').modal('hide');
        //commented for development environment
        // if (success){
        //     event.target.date.value = "";
        //      event.target.time.value = '';
        //     event.target.apptType.value = "";
        //     event.target.partiesInvolved.value = "";
        //     event.target.place.value = "";
        // }


        return true;
    },
    //Template for remove button but it is not working
    'click .done': function () {
        Appointments.update(this._id, {$set: {checked: !this.checked}});
    },
    'click .delete': function () {
        Appointments.remove(this._id);
    }
});

//Template.dpReplacement.replaces("afBootstrapDatepicker");

