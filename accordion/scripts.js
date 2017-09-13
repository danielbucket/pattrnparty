$('.accordion-btn').on('click', button => {
  const clickedID = button.target.id.split('-')[1]

  $('.tab-container').each((i, curVal) => {
    let id = curVal.id.split('-')[2]

    if (clickedID === id) {
      $(`#tab-container-${id}`).toggleClass('display')
      $(`#btn-${id}`).toggleClass('active')
      $(`.p-${id}`).addClass(`border-${id}`)
      
    }

    if (clickedID !== id) {
      $(`#tab-container-${id}`).addClass('display')
      $(`#btn-${id}`).removeClass('active')
      $(`.p-${id}`).removeClass(`border-${id}`)
    }
  })
})
