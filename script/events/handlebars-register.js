Handlebars.registerHelper('formatTime', function (time) {
    const formattedTime = new Date(time).toLocaleTimeString('pl-PL', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,

    });
    return formattedTime;
});
Handlebars.registerHelper('isActive', function (activeClass, inactiveClass) {
    return this.isActive ? activeClass : inactiveClass;
});
