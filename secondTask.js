const A = (msg) => window.alert(msg);
const C = (msg) => window.confirm(msg);
const P = (msg) => window.prompt(msg);

A("Welcome to the App!"),
  C("Do you want to proceed?")
    ? P("Please enter your name:") && A("Thank you!")
    : A("You are leaving the app.");
