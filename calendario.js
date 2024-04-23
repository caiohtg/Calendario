let data = new Date()
let hora = data.getHours()
let minuto = data.getMinutes()
let dia = data.getDate()
let mes = data.getMonth()
let ano = data.getFullYear()

Clicar = () => {
    let user = document.getElementById('userName').value
    let loading = document.getElementById('paragrafoQueVaiMudar')
    loading.innerHTML = '...'
    setInterval(()=> {
        let txt = document.getElementById('paragrafoQueVaiMudar')
        txt.innerText = `Olá ${user}! Seja bem-vindo(a), gostaria de saber as horas?`

        const cmdSim = document.getElementById('cmdSim')
        const cmdNao = document.getElementById('cmdNao')

        cmdSim.style.display = 'inline-block'
        cmdNao.style.display = 'inline-block'

        ClicarSim = () => {
            setInterval(() => {
                let mostrarHoras = document.getElementById('horas')
                mostrarHoras.style.display = 'block'
                mostrarHoras.innerText = `Hoje é\n${dia}/0${mes}/${ano}\n${hora}:${minuto}`
            }, 1000)
            let butaoNao = document.getElementById('cmdNao')
            let butaoSim = document.getElementById('cmdSim')
            let txt = document.getElementById('paragrafoQueVaiMudar')
            txt.remove()
            butaoNao.remove()
            butaoSim.remove()
    }
        ClicarNao = () => {
            setInterval(() => {
                mostrarHoras = document.getElementById('horas')
                mostrarHoras.style.display = 'block'
                mostrarHoras.innerText = `Ok, ${user}, ficarei a disposição :)`
            }, 1000)
            let butaoNao = document.getElementById('cmdNao')
            let butaoSim = document.getElementById('cmdSim')
            let txt = document.getElementById('paragrafoQueVaiMudar')
            txt.remove()
            butaoNao.remove()
            butaoSim.remove() 
        }
    }, 1200)
    let input = document.getElementById('userName')
    let button = document.getElementById('cmdSingUp')
    input.remove()
    button.remove()
}