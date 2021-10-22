let cardId = document.querySelectorAll('.card-img');
console.log(cardId);

cardId.forEach(element => {
    element.addEventListener('click' , () => {
        let id = $(element).attr("dataId")
        console.log(id);
        window.location.href = id
    })
})