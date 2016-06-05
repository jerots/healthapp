import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Appointments = new Mongo.Collection('appointments');
  // Appointments.insert({date: 'a', type: 'b', parties: 'c', place: 'd'});
});
