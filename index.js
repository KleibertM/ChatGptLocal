const $ = el => document.querySelector(el)

// pongo delante de la variable un símbolo de $
// para indicar que es un elemento del DOM
const $form = $('form')
const $input = $('input')
const $template = $('#message-template')
const $messages = $('ul')
const $container = $('main')
const $button = $('button')

$form.addEventListener('submit', (e) => {
    e.preventDefault()
    const messageText = $input.value.trim()

    if (messageText !== '') {
        $input.value = ''
    }

    addMessage(messageText, 'user')
})

function addMessage(text, sender) {
    // clonar el template
    const clonedTemplate = $template.content.cloneNode(true)
    const $newMessage = clonedTemplate.querySelector('.message')

    const $who = $newMessage.querySelector('span')
    const $text = $newMessage.querySelector('p')

    $text.textContent = text
    $who.textContent = sender === 'bot' ? 'GPT' : 'Tú'
    $newMessage.classList.add(sender)

    $messages.appendChild($newMessage)

    $container.scrollTop = $container.scrollHeight

    return $text
  }