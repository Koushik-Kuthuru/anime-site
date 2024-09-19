$(document).ready(function() {
    // Toggle the notification badge when there are new notifications
    $('.notification').click(function() {
      $(this).find('.notification-badge').toggle();
    });
  });