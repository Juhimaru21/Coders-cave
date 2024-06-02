function showSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='flex';
  }
  
  function hideSidebar(){
    const hidebar=document.querySelector('.sidebar')
    hidebar.style.display='none';
  }
  const myButton = document.querySelector('.btn');
  function openNewPage(){
    window.open('college.html');
  }

  function openNewPage1(){
    window.open('food.html');
  }
  function openNewPage2(){
    window.open('travel.html');
  }
const backArrow = document.querySelector('.back-arrow');

backArrow.addEventListener('click', () => {
  // Add your logic here to go back to the previous page or section
  window.history.back();
});