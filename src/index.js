setInterval(() => {
  const date = new Date();
  const hour = date.getHours();
  const isDay = hour >= 6 && hour < 18;

  document.querySelector('body').style.backgroundImage = `url(assets/${isDay ? 'day' : 'night'}.jpg)`

  const title = document.querySelector('h1');
  const subtitle = document.querySelector('p');

  title.innerText = isDay ? 'Bom dia' : 'Boa noite';
  subtitle.innerText = moment().format('hh:mm:ss');
}, 1000);
