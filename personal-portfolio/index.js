function showSidebar(){
  const sidebar=document.querySelector('.sidebar')
  sidebar.style.display='flex';
}

function hideSidebar(){
  const hidebar=document.querySelector('.sidebar')
  hidebar.style.display='none';
}

const submitButton = document.querySelector('#submit-button')
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  // handle form submission
});