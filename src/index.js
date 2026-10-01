const form = document.getElementById("form");
const btn = document.getElementById("send-button");
const statusEl = document.getElementById("form-status");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.disabled = true;
  btn.textContent = "Sending...";
  statusEl.className = "";
  statusEl.textContent = "";

  emailjs
    .sendForm("service_fwq85cr", "template_4a1t1qd", this)
    .then(
      () => {
        statusEl.className = "ok";
        statusEl.textContent = "Thanks! Your message was sent.";
        form.reset();
      },
      () => {
        statusEl.className = "err";
        statusEl.textContent =
          "Something went wrong. Please email me directly instead.";
      }
    )
    .finally(() => {
      btn.disabled = false;
      btn.textContent = "Send message";
    });
});
