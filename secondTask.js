const ORIGINAL_ALERT = alert;
const ORIGINAL_CONFIRM = confirm;
const ORIGINAL_PROMPT = prompt;

let isTriggered = false;

alert = function () {
  if (!isTriggered) {
    isTriggered = true;
    ORIGINAL_CONFIRM.call(this, "Alert triggered Confirm!");
    isTriggered = false;
  }
};

confirm = function () {
  if (!isTriggered) {
    isTriggered = true;
    ORIGINAL_PROMPT.call(this, "Confirm triggered Prompt:");
    isTriggered = false;
  }
};

prompt = function () {
  if (!isTriggered) {
    isTriggered = true;
    ORIGINAL_ALERT.call(this, "Prompt triggered Alert!");
    isTriggered = false;
  }
};

alert();
confirm();
prompt();
