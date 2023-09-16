(() => {
  const warningTimeout = 5000;
  const sessionTimeout = 3000;

  let warningTimeoutId;
  let sessionTimeoutId;

  function showWarning() {
    if (warningTimeout) {
      const modal = document.getElementById("warning-modal");
      modal.style.display = "block";

      sessionTimeoutId = setTimeout(logoutSession, sessionTimeout);
    }
  }

  function resetTimer() {}

  function logoutSession() {
    alert("Session has expired. Logging out.");
  }

  const EVENTS = ["mousemove", "keyup", "keydown"];

  EVENTS.forEach((event) => {
    document.addEventListener(event, () => {
      clearTimeout(warningTimeoutId);
      clearTimeout(sessionTimeoutId);
      warningTimeoutId = setTimeout(showWarning, warningTimeout);
    });
  });
})();


// Debounce 