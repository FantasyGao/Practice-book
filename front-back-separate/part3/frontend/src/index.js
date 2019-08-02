function component() {
  const element = document.createElement('div');
  element.innerHTML = "Hello 全栈者";
  document.body.appendChild(element);
}

function asyncComponent() {
  $.ajax({
    url: '/api',
    success: renderFunc
  })
  function renderFunc(data) {
    const oUl = document.createElement('ul');
    data.map(o => {
      const oLi = document.createElement('li');
      oLi.innerHTML = `${o.id}:${o.name}`;
      oUl.appendChild(oLi);;
    });
    document.body.appendChild(oUl);
  }
}
window.onload = () => {
  component();
  asyncComponent()
};