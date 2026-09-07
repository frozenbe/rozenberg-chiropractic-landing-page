(() => {
  "use strict";

  // Clinic-local boundaries for September 7, 2026 (America/Detroit, EDT).
  // No location, storage, or analytics access is needed to show holiday hours.
  const holidayStart = Date.parse("2026-09-07T00:00:00-04:00");
  const holidayEnd = Date.parse("2026-09-08T00:00:00-04:00");

  function updateNotice() {
    const now = Date.now();
    const show = now >= holidayStart && now < holidayEnd;
    document.querySelectorAll("[data-hours-notice]").forEach((notice) => {
      notice.hidden = !show;
    });
  }

  updateNotice();
  // Also expire the notice if a visitor leaves the tab open overnight.
  window.setInterval(updateNotice, 60000);
  document.addEventListener("visibilitychange", updateNotice);
})();
