let count = 0;

myFnc();

function myFnc() {
  count++;
  document.write(`hello ${count}, <br/>`);
}

myFnc();

let theFnc = () => {
  count++;
  document.write(`bye ${count}`);
};
theFnc();
