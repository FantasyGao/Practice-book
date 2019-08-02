window.onload = ()=>{
  $.ajax({
    url: '/api',
    success: renderFunc
  })
  function renderFunc(data) {
    const renderContenht = document.getElementById('render-content');
    data.map(o => {
      const oLi = document.createElement('li');
      oLi.innerHTML = `${o.id}:${o.name}`;
      renderContenht.appendChild(oLi);;
    });
  }
}