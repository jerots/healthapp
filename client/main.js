import './main.html';

BlazeLayout.setRoot('body');

function setActive(active){
    $('.nav li').removeClass('active');
    active.addClass('active');
}


FlowRouter.route('/appointment/', {
    action: function () {
        BlazeLayout.render("mainLayout", {content: "appointment"});
        $('#navbar-collapse').collapse("hide");
        setActive($('#nav-appointment'));
    }
});

FlowRouter.route('/', {
    action: function () {
        BlazeLayout.render("mainLayout", {content: "appointment"});
        $('#navbar-collapse').collapse("hide");
        setActive($('#nav-appointment'));
    }
});

FlowRouter.route('/calendar/', {
    action: function () {
        BlazeLayout.render("mainLayout", {content: "calendar"});
        $('#navbar-collapse').collapse("hide");
        setActive($('#nav-calendar'));
    }
});

FlowRouter.route('/report/', {
    action: function () {
        BlazeLayout.render("mainLayout", {content: "report"});
        $('#navbar-collapse').collapse("hide");
        setActive($('#nav-report'));
    }
});

FlowRouter.route('/info/', {
    action: function () {
        BlazeLayout.render("mainLayout", {content: "info"});
        $('#navbar-collapse').collapse("hide");
        setActive($('#nav-info'));
    }
});