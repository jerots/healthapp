//Initialise db
Appointments = new Mongo.Collection('appointments');


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



/**
 * Created by sgpad017 on 25/6/16.
 */
