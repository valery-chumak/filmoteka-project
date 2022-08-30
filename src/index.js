import { renderMoviesList, scrollToTop } from './js/container';
import MovieAPiServer from './RequestApi/requestAPI';
import './js/notify-params/notify-styles';
import { refs } from './js/refs';



const movieAPiServer = new MovieAPiServer();
movieAPiServer.getGenresList();

refs.pagginationList.addEventListener('click', onClickPagginationList);

fetchData();

function onClickPagginationList(event) {
  const currentPage = event.target.dataset.page;
  if (!currentPage) {
    return;
  }
  movieAPiServer.pageCounter = Number(currentPage);

  fetchData();
  scrollToTop();
}

function fetchData() {
  movieAPiServer.fetchTopMovies().then(data => {
    // console.log('page=', apiService.page, '  maxPages=', apiService.maxPages);
    refs.galleryList.innerHTML = '';
    refs.pagginationList.innerHTML = '';
    renderMoviesList(data, movieAPiServer.page, movieAPiServer.maxPages);
  });
  // .catch(error => {
  //   return error;
  // });
}

const red = () => document.querySelector('.js-auth').setAttribute('href', '/js/AutoForm/form.html');

const funcAutoLoginControl = () => {
    const controlLogin = document.querySelector('[data-auth]').dataset = window.localStorage.getItem('auth');
    if (controlLogin != 'true') {
        console.log('test');
        return document.querySelector('.js-auth').addEventListener('click',  red); 
    }
    return;
    
};
funcAutoLoginControl();



