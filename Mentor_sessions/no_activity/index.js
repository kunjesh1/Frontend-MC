(() => {
  let warningTimeout = 5000;
  let sessionTimeout = 3000;

  function showWarning() {
    if (warningTimeout) {
      const modal = document.getElementById("warning-modal");
      modal.style.display = "block";

      setTimeout(logoutSession, sessionTimeout);
    }
  }

  function logoutSession() {
    alert("Session has expired. Logging out.");
  }

  const EVENTS = ["mousemove", "keyup", "keydown"];

  EVENTS.forEach((event) => {
    document.addEventListener(event, () => {
      clearTimeout(warningTimeout);
      clearTimeout(sessionTimeout);
      warningTimeout = setTimeout(showWarning, warningTimeout);
    });
  });
})();
