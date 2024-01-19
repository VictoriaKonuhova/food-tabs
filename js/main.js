window.addEventListener('DOMContentLoaded', () => {
  //tabs
  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const tabHeader = document.querySelector('.tabheader');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.style.display = 'none';
    });
    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }
  function showTabContent(i = 0) {
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active');
  }
  hideTabContent();
  showTabContent();

  tabHeader.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
  //timer
  const timeEnd = '2024-04-28';
  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor(t / (1000 * 60 * 60) % 24);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const seconds = Math.floor((t / 1000) % 60);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');
    const timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = t.days;
      hours.innerHTML = t.hours;
      minutes.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock('.timer', timeEnd);
  //modal
  const modalBtn = document.querySelectorAll('[data-modal]');
  const modalWindow = document.querySelector('.modal');
  const modalClose = document.querySelector('[data-close]');
  modalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      modalWindow.classList.add('show');
      modalWindow.classList.remove('hide');
      document.body.style.overflow = 'hidden';
    });
  });
  // modalClose.addEventListener('click', () => {
  //   modalWindow.classList.add('hide');
  //   modalWindow.classList.remove('show');
  //   document.body.style.overflow = '';
  // });
  // modalWindow.addEventListener('click', (e) => {
  //   if (e.target == modalWindow) {
  //     modalWindow.classList.add('hide');
  //     modalWindow.classList.remove('show');
  //     document.body.style.overflow = '';
  //   }
  // });
  // document.addEventListener('keydown', (e) => {
  //   if (e.code === 'Escape') {
  //     modalWindow.classList.add('hide');
  //     modalWindow.classList.remove('show');
  //     document.body.style.overflow = '';
  //   }
  // });
  function closeModal() {
    modalWindow.classList.add('hide');
    modalWindow.classList.remove('show');
    document.body.style.overflow = '';
  }
  modalClose.addEventListener('click', closeModal);
  modalWindow.addEventListener('click', (e) => {
    if (e.target == modalWindow) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      closeModal();
    }
  });
});