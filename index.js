document.addEventListener('DOMContentLoaded', ()=>{
  try {
    const booksArr = document.querySelectorAll('.book')
    if (!booksArr.length) console.log('Книги по указанному селектору не найдены')
  
    booksArr.forEach (bookEl => {
      const titleEl = bookEl.querySelector('.title')
      const priceEl = bookEl.querySelector('.price')
      const ratingEl = bookEl.querySelector('.rating')
      const availabilityEl = bookEl.querySelector('.availability')
  
      console.log('Название книги:', titleEl?.textContent)
      console.log('Цена:', priceEl?.textContent)
      console.log('Рейтинг:', ratingEl?.textContent)
      console.log('Наличие на складе:', availabilityEl?.textContent)
      console.log('------------')
    })
  } catch(err){
    console.log('Что-то пошло не так:', err)
  }  
})