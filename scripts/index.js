const type = [...document.querySelectorAll('.container .reservation .type input')]
const slotLetters = [...document.querySelectorAll('.container .reservation .slots .slotLetters input')]
const slotNumbers = [...document.querySelectorAll('.container .reservation .slots .slotNumbers input')]
const form = document.querySelector('.reservationForm')

type.map((btn) => {
    btn.addEventListener('click', (e) => {
        type.map((ele) => ele.classList.remove('active'))
        btn.classList.add('active')
    } )
})
slotLetters.map((btn) => {
    btn.addEventListener('click', (e) => {
        slotLetters.map((ele) => ele.classList.remove('active'))
        btn.classList.add('active')
    } )
})
slotNumbers.map((btn) => {
    btn.addEventListener('click', (e) => {
        slotNumbers.map((ele) => ele.classList.remove('active'))
        btn.classList.add('active')
    } )
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let queryString = '?=a7a'



    fetch('../index.html', {
        method:'POST',
        body: queryString,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
})

