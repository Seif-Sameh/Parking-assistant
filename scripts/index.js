const type = [...document.querySelectorAll('.container .reservation .type input')]
const slotLetters = [...document.querySelectorAll('.container .reservation .slots .slotLetters input')]
const slotNumbers = [...document.querySelectorAll('.container .reservation .slots .slotNumbers input')]
const form = document.querySelector('.reservationForm')

const startTime = document.getElementById('startTime')
const endTime = document.getElementById('endTime')


type.map((btn) => {
    btn.addEventListener('click', (e) => {
        type.map((ele) => ele.classList.remove('active'))
        btn.classList.add('active')
        document.getElementById('type').value = btn.value;
        if(btn.value == 'VIP'){
            document.querySelector('.slots').style.display = 'block'
        }
        else{
            document.querySelector('.slots').style.display = 'none'
        }
    } )
})
slotLetters.map((btn) => {
    btn.addEventListener('click', (e) => {
        slotLetters.map((ele) => ele.classList.remove('active'))
        btn.classList.add('active')
        document.getElementById('slotLetterValue').value = btn.value;
    } )
})
slotNumbers.map((btn) => {
    btn.addEventListener('click', (e) => {
        slotNumbers.map((ele) => ele.classList.remove('active'))
        btn.classList.add('active')
        document.getElementById('slotNumberValue').value = btn.value;

    } )
})

form.addEventListener('submit', (e) => {
    if(document.getElementById('type').value == 'VIP' && (!document.getElementById('slotLetterValue').value || !document.getElementById('slotNumberValue').value)){
        e.preventDefault()
        document.querySelector(".emptySlot").style.display = 'block'
    }
})
