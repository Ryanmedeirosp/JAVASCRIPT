const getHours = () => {
    const clock = document.querySelector('#relogio')
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    const second = seconds < 10 ? `0${seconds}` : seconds
    clock.textContent = `${hour}:${minute}:${second}`
    
  }
  
  setInterval(getHours,1000)

const listaBanner = ["img1.png","img2.png","img3.png","img4.png","img5.png"]
const listaTexto = ["Um hospital é mais do que apenas um edifício de paredes brancas e corredores silenciosos. É um local onde vidas se entrelaçam em momentos de necessidade, esperança e cura. Dentro de suas paredes, encontramos uma sinfonia de histórias: os pacientes que lutam contra doenças, os médicos e enfermeiros dedicados que os tratam, as famílias que aguardam ansiosamente por notícias, e os voluntários que oferecem conforto e apoio.","Um médico atento cuida de seu paciente com dedicação e compaixão, ouvindo atentamente suas preocupações e avaliando cuidadosamente seu estado de saúde. Com habilidade técnica e empatia, ele administra tratamentos e medicamentos para aliviar o sofrimento e promover a recuperação. Por meio de gestos gentis e palavras reconfortantes, ele oferece apoio emocional, transmitindo esperança e confiança. O médico não apenas trata os sintomas, mas também enxerga a pessoa por trás da doença, buscando proporcionar conforto e bem-estar integral. Sua presença é uma fonte de segurança e orientação, guiando o paciente através dos desafios da jornada de saúde. Em cada interação, o médico demonstra o compromisso inabalável de cuidar do bem-estar e da qualidade de vida daqueles que confiam em sua expertise e cuidado.",
"As enfermeiras, com sua dedicação incansável, são os pilares do cuidado no hospital, garantindo o conforto e a segurança dos pacientes a cada turno. Com habilidades técnicas e compaixão, elas administram tratamentos, monitoram sinais vitais e oferecem apoio emocional aos que estão sob seus cuidados. Nos corredores movimentados, são a voz da experiência e o coração da equipe de saúde, trabalhando incansavelmente para promover a recuperação e o bem-estar dos pacientes. Seu trabalho vai além das tarefas clínicas, estendendo-se ao conforto e à tranquilidade que oferecem a cada contato. As enfermeiras personificam a essência do cuidado humanizado, proporcionando alívio e esperança em meio às adversidades da enfermidade.","Os médicos de hoje são agentes essenciais na promoção da saúde e no tratamento de doenças, desempenhando um papel fundamental em comunidades ao redor do mundo. Com uma formação extensa e contínua, esses profissionais estão capacitados para diagnosticar, tratar e prevenir uma ampla variedade de condições médicas, desde as mais simples até as mais complexas.","O hospital do futuro será altamente tecnológico, com inteligência artificial, telemedicina e Internet das Coisas revolucionando o atendimento. Além disso, promoverá uma abordagem centrada no paciente, com espaços mais confortáveis, sustentáveis e adaptáveis. A medicina preventiva e a colaboração interdisciplinar serão priorizadas, visando melhorar a qualidade dos cuidados e os resultados para os pacientes."]
const banner = document.querySelector("#imgEntrada")
const texto = document.querySelector(".ipsum")
var contador = 0

setInterval(() => {
  banner.src = listaBanner[contador]
  texto.textContent = listaTexto[contador]
  banner.style.opacity = 1
  contador++
  if(contador === 5){
    contador = 0
  }

  setTimeout(() => {
    banner.style.opacity = 0.6
  },1000);

}, 3000);

