const form = document.getElementById('form')
const campos = document.querySelectorAll('.requerid')
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const cpf = document.getElementById('cpf')
const cpfRegex = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/
const button = document.querySelector('#button')

function setError(index) {
    campos[index].classList.add('error')
    campos[index].classList.remove('success')
}

function removeError(index) {
    campos[index].classList.add('success')
    campos[index].classList.remove('error')
}

function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0)
    } else {
        removeError(0)
    }
}

function emailValidate() {
    if (emailRegex.test(campos[1].value)) {
        removeError(1)
    } else {
        setError(1)
    }
}

function formatedCpf() {
    if (cpf.value.length === 3 || cpf.value.length === 7) {
        cpf.value += '.'
    } else if (cpf.value.length == 11) {
        cpf.value += '-'
    }
    return
}

function validarCpf() {
    if (cpfRegex.test(cpf.value)) {
        removeError(2)
    } else {
        setError(2)
    }
}

function newUser() {
    event.preventDefault()

    const success = document.querySelectorAll('.success')

    if (success.length !== 3) {
        return
    }

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const cpf = document.getElementById('cpf').value

    const prams = new URLSearchParams({
        nome: name,
        email,
        cpf
    })

    const url =
        'https://userhashcodeserver.uk.r.appspot.com/hashCodeServer?' + prams

    fetch(url, { method: 'post' })
        .then(response => response.json())
        .then(data => {
            console.log('data: ', data)
            
        })
        .catch(erro => {
            console.log('error', erro);
        })
  
}
