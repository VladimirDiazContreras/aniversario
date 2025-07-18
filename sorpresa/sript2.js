const questions = [
  {
    question: "¿Dónde fue nuestro primer encuentro?",
    options: ["En clase de historia", "Jugando basket", "En una fiesta", "En un parque"],
    answer: "Jugando basket"
  },
  {
    question: "¿Cuál fue nuestra primera cita?",
    options: ["Cine", "Comer helado", "Salir por Scary", "Pasear por el centro"],
    answer: "Salir por Scary"
  },
  {
    question: "¿Qué dijiste el día que te pedí ser mi novia?",
    options: ["Sí, quiero, como no voy a querer eres el amor de mi vida", "Lo pensaré", "¡Obvio que sí!", "No estoy lista"],
    answer: "Sí, quiero, como no voy a querer eres el amor de mi vida"
  },
  {
    question: "¿Que mes te dije que nos hacimos novios?",
    options: ["diciembre", "septiembre", "junio", "agosto"],
    answer: "septiembre"
  },
  {
    question: "¿Dónde tomamos nuestra primera foto juntos?",
    options: ["En mi casa", "En clase", "En el parque", "La tomó Oviedo"],
    answer: "La tomó Oviedo"
  },
  {
    question: "¿Qué juego fue parte importante en nuestra relación?",
    options: ["Dominó", "Ajedrez", "UNO", "Póker"],
    answer: "Ajedrez"
  },
  {
    question: "¿Qué es lo mejor de tu vida?",
    options: ["vladimir", "tu novio", "obiamente mi novio el dueño de mi corazon, y mi dueño que me puede hacer lo que quiera", "yo"],
    answer: "obiamente mi novio el dueño de mi corazon, y mi dueño que me puede hacer lo que quiera"
  },
  {
    question: "¿Qué frase decías que te hacía sentir especial   (al reponder la pregunta anterior firmaste un contrato de obdiencia :) )?",
    options: ["Te extraño", "Eres mío", "Eres único", "Mi vida entera"],
    answer: "Eres mío"
  },
  {
    question: "¿Que es lo que mas me gusta de ti (la tres me encanta pero no es la repuesta) ?",
    options: ["ojos", "estatura", "tetas", "que me haces ser mejor persona"],
    answer: "que me haces ser mejor persona" 
  },
  {
    question: "¿me amas?",
    options: ["si", "si", "si como no hacerlo", "si "],
    answer: "si como no hacerlo"
  }
];

let current = 0;

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const quizCard = document.getElementById("quizCard");
const finalMessage = document.getElementById("finalMessage");

function showQuestion() {
  if (current >= questions.length) {
    quizCard.style.display = "none";
    finalMessage.style.display = "block";
    return;
  }

  const q = questions[current];
  questionText.textContent = q.question;
  optionsContainer.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      if (option === q.answer) {
        current++;
        showQuestion();
      } else {
        alert("¡Respuesta incorrecta! Intenta de nuevo 🥺");
      }
    };
    optionsContainer.appendChild(btn);
  });
}

showQuestion();
