const questions = [

  {
    category: "01 / APROPIACIÓN",

    text:
      "Un compañero presenta como propia una idea que desarrollaste tú. Nadie parece darse cuenta. ¿Qué haces?",

    answers: [

      {
        text:
          "Lo corrijo en ese momento. Si la idea es mía, debe quedar claro.",

        score: [2, 0, 0, 1]
      },

      {
        text:
          "No digo nada. Hablo con él después y quiero saber por qué lo hizo.",

        score: [0, 1, 2, 0]
      },

      {
        text:
          "Espero. Antes quiero comprobar quién se ha dado cuenta sin que yo intervenga.",

        score: [0, 0, 1, 2]
      },

      {
        text:
          "Dejo que continúe y observo qué consigue hacer con la idea. Siempre puedo intervenir después.",

        score: [1, 2, 0, 0]
      }

    ]
  },


  {
    category: "02 / LA INVITACIÓN",

    text:
      "Te ofrecen participar en un programa reservado a diez alumnos. No sabes cómo te han seleccionado y debes responder antes de medianoche. ¿Qué haces?",

    answers: [

      {
        text:
          "Acepto. Ya averiguaré después por qué me eligieron.",

        score: [2, 1, 0, 0]
      },

      {
        text:
          "Intento conseguir más información antes de decidir.",

        score: [0, 1, 1, 1]
      },

      {
        text:
          "Pregunto quiénes son los otros nueve.",

        score: [1, 0, 2, 0]
      },

      {
        text:
          "No acepto hasta saber qué esperan de mí.",

        score: [0, 0, 1, 2]
      }

    ]
  },


  {
    category: "03 / EL GRUPO",

    text:
      "Tu grupo lleva una hora intentando resolver un problema. Estás convencido de que tu solución es la mejor, pero nadie te apoya. ¿Qué haces?",

    answers: [

      {
        text:
          "La defiendo hasta que alguien demuestre que está equivocada.",

        score: [2, 0, 0, 1]
      },

      {
        text:
          "Pido a alguien que explique exactamente por qué cree que no funciona.",

        score: [0, 2, 1, 0]
      },

      {
        text:
          "Propongo probar mi solución y la alternativa del grupo.",

        score: [1, 2, 0, 0]
      },

      {
        text:
          "Dejo de defenderla y escucho. Si todos ven algo distinto, puede que sepan algo que yo no.",

        score: [0, 1, 2, 0]
      }

    ]
  },


  {
    category: "04 / LA FIESTA",

    text:
      "Llegas a una fiesta en la que apenas conoces a nadie. Hay alumnos, antiguos alumnos y personas que podrían ser importantes para tu futuro. Veinte minutos después estás...",

    answers: [

      {
        text:
          "Hablando con la persona que más difícil parecía conocer.",

        score: [1, 0, 2, 0]
      },

      {
        text:
          "Con las dos personas que conocías al llegar. No necesitas convertir cada fiesta en una oportunidad.",

        score: [0, 0, 1, 2]
      },

      {
        text:
          "Moviéndote entre distintos grupos. Quieres entender quién conoce a quién.",

        score: [0, 1, 2, 0]
      },

      {
        text:
          "Observando desde algún lugar tranquilo antes de decidir con quién quieres hablar.",

        score: [0, 1, 0, 2]
      }

    ]
  },


  {
    category: "05 / LA PUERTA",

    text:
      "Tu tarjeta abre hoy una puerta de Pierreval que ayer permanecía bloqueada. ¿Qué haces primero?",

    answers: [

      {
        text:
          "Entro.",

        score: [2, 0, 0, 1]
      },

      {
        text:
          "Antes de entrar, intento averiguar qué ha cambiado desde ayer.",

        score: [0, 2, 0, 1]
      },

      {
        text:
          "Pregunto a alguien que ya tuviera acceso qué hay dentro.",

        score: [0, 0, 2, 1]
      },

      {
        text:
          "Entro y no se lo cuento todavía a nadie.",

        score: [1, 0, 0, 2]
      }

    ]
  },


  {
    category: "06 / EL SECRETO",

    text:
      "Una persona en la que confías te pide que guardes un secreto. Después descubres que ese secreto afecta directamente a otra persona cercana a ti. ¿Qué haces?",

    answers: [

      {
        text:
          "Mantengo mi promesa. La información no me pertenece.",

        score: [0, 0, 1, 2]
      },

      {
        text:
          "Se lo cuento a la persona afectada. Tiene derecho a saberlo.",

        score: [0, 0, 2, 1]
      },

      {
        text:
          "Antes de decidir, intento entender qué consecuencias tendría cada opción.",

        score: [0, 2, 1, 0]
      },

      {
        text:
          "Primero averiguo por qué me eligieron precisamente a mí para guardar el secreto.",

        score: [1, 0, 1, 1]
      }

    ]
  },


  {
    category: "07 / LA OPORTUNIDAD",

    text:
      "Puedes elegir entre dos programas. En uno, casi con seguridad serás de los mejores. En el otro, estarás rodeado de personas mejores que tú. ¿Cuál eliges?",

    answers: [

      {
        text:
          "El segundo. Quiero saber hasta dónde puedo llegar.",

        score: [2, 1, 0, 0]
      },

      {
        text:
          "El primero. También hay que saber reconocer dónde tienes ventaja.",

        score: [2, 0, 0, 1]
      },

      {
        text:
          "El segundo, pero antes quiero saber quiénes son esas personas.",

        score: [1, 0, 2, 0]
      },

      {
        text:
          "No puedo decidir con esa información. Quiero saber qué aprenderé en cada uno.",

        score: [0, 2, 0, 1]
      }

    ]
  },


  {
    category: "08 / LA CAÍDA",

    text:
      "El Board baja tu puntuación después de una decisión que volverías a tomar. ¿Qué haces?",

    answers: [

      {
        text:
          "Intento descubrir exactamente qué variable ha penalizado el sistema.",

        score: [1, 2, 0, 0]
      },

      {
        text:
          "Modifico mi comportamiento. No tiene sentido competir ignorando las reglas.",

        score: [1, 2, 0, 0]
      },

      {
        text:
          "No cambio nada. Una puntuación no decide si hice lo correcto.",

        score: [0, 0, 1, 2]
      },

      {
        text:
          "Busco a alguien que haya tomado una decisión parecida y haya subido.",

        score: [1, 0, 2, 0]
      }

    ]
  },


  {
    category: "09 / UNA SOLA INFORMACIÓN",

    text:
      "Puedes conocer un único dato que Pierreval mantiene oculto sobre cualquier alumno. ¿Cuál eliges?",

    answers: [

      {
        text:
          "Su puntuación real, incluida la parte que no aparece en el Board.",

        score: [2, 0, 0, 1]
      },

      {
        text:
          "Qué quiere y todavía no ha conseguido.",

        score: [0, 0, 2, 1]
      },

      {
        text:
          "Qué haría si supiera que nadie va a descubrirlo.",

        score: [0, 1, 2, 0]
      },

      {
        text:
          "Qué dato utiliza Pierreval para predecir su futuro.",

        score: [0, 1, 0, 2]
      }

    ]
  },


  {
    category: "10 / EL ÚLTIMO DÍA",

    text:
      "Es tu último día en Pierreval. Puedes marcharte con una sola cosa. ¿Qué eliges?",

    answers: [

      {
        text:
          "Haber llegado al número uno.",

        score: [3, 0, 0, 0]
      },

      {
        text:
          "Una relación que sabes que conservarás toda la vida.",

        score: [0, 0, 3, 0]
      },

      {
        text:
          "Saber algo sobre ti que no sabías cuando llegaste.",

        score: [0, 3, 0, 0]
      },

      {
        text:
          "La certeza de que ninguna institución decidió por ti quién ibas a ser.",

        score: [0, 0, 0, 3]
      }

    ]
  }

];


/* PERFILES CANÓNICOS */

const characterProfiles = {

  "SLOANE HOLT":
    [96, 84, 73, 88],

  "NORA VALE":
    [62, 77, 82, 96],

  "ISABELLE KALT-TANNENBERG":
    [79, 81, 95, 72],

  "TRISTAN":
    [86, 74, 88, 67],

  "ADRIAN CROSS":
    [71, 97, 93, 91]

};


/* DESCRIPCIONES DE PERFIL */

const profileDescriptions = {

  "THE STRATEGIST":
    "Lees los sistemas antes de decidir cómo moverte dentro de ellos. No necesitas conocer todas las reglas. Necesitas saber cuáles importan.",

  "THE CONNECTOR":
    "Entiendes que las relaciones también son información. Lees a las personas con rapidez y sabes que una conexión puede cambiar una decisión.",

  "THE COMPETITOR":
    "Quieres avanzar y aceptas la presión que eso implica, pero necesitas sentir que la decisión sigue siendo tuya.",

  "THE OBSERVER":
    "Ves patrones que otros pasan por alto. Prefieres entender una habitación antes de decidir cuánto de ti quieres mostrar.",

  "THE OUTLIER":
    "Puedes cambiar de estrategia sin entregar al sistema el derecho a definirte. Pierreval sabe medir muchas cosas. Contigo tendrá más dificultades."

};


/* ESTADO */

let currentQuestion = 0;

let rawScores =
  [0, 0, 0, 0];

let answerHistory = [];

let candidateName =
  "CANDIDATE";


/* ELEMENTOS */

const overlay =
  document.getElementById(
    "testOverlay"
  );

const introView =
  document.getElementById(
    "testIntro"
  );

const questionView =
  document.getElementById(
    "questionView"
  );

const analysisView =
  document.getElementById(
    "analysisView"
  );

const resultView =
  document.getElementById(
    "resultView"
  );


/* ABRIR TEST */

document
  .querySelectorAll(
    ".js-start-test"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      openTest
    );

  });


function openTest() {

  resetTest();

  overlay.classList.add(
    "open"
  );

  overlay.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "test-open"
  );

  setTimeout(() => {

    document
      .getElementById(
        "candidateName"
      )
      .focus();

  }, 100);

}


/* CERRAR */

document
  .getElementById(
    "closeTest"
  )
  .addEventListener(
    "click",
    closeTest
  );


function closeTest() {

  overlay.classList.remove(
    "open"
  );

  overlay.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.classList.remove(
    "test-open"
  );

}


/* ESC */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      overlay.classList.contains(
        "open"
      )
    ) {

      closeTest();

    }

  }
);


/* RESET */

function resetTest() {

  currentQuestion = 0;

  rawScores =
    [0, 0, 0, 0];

  answerHistory = [];

  candidateName =
    "CANDIDATE";

  document
    .getElementById(
      "candidateName"
    )
    .value = "";

  document
    .getElementById(
      "nameError"
    )
    .classList.remove(
      "visible"
    );

  introView.classList.remove(
    "hidden"
  );

  questionView.classList.add(
    "hidden"
  );

  analysisView.classList.add(
    "hidden"
  );

  resultView.classList.add(
    "hidden"
  );

}


/* INICIAR */

document
  .getElementById(
    "beginTest"
  )
  .addEventListener(
    "click",
    beginTest
  );


document
  .getElementById(
    "candidateName"
  )
  .addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Enter"
      ) {

        beginTest();

      }

    }
  );


function beginTest() {

  const input =
    document
      .getElementById(
        "candidateName"
      );

  const value =
    input
      .value
      .trim();

  if (!value) {

    document
      .getElementById(
        "nameError"
      )
      .classList.add(
        "visible"
      );

    return;

  }

  candidateName =
    value.toUpperCase();

  document
    .getElementById(
      "nameError"
    )
    .classList.remove(
      "visible"
    );

  introView.classList.add(
    "hidden"
  );

  questionView.classList.remove(
    "hidden"
  );

  renderQuestion();

}


/* PREGUNTA */

function renderQuestion() {

  const question =
    questions[
      currentQuestion
    ];

  const number =
    currentQuestion + 1;

  document
    .getElementById(
      "questionNumber"
    )
    .textContent =
      `ASSESSMENT ${String(number).padStart(2, "0")}/10`;

  document
    .getElementById(
      "progressValue"
    )
    .textContent =
      `${number * 10}%`;

  document
    .getElementById(
      "progressBar"
    )
    .style
    .width =
      `${number * 10}%`;

  document
    .getElementById(
      "questionCategory"
    )
    .textContent =
      question.category;

  document
    .getElementById(
      "questionText"
    )
    .textContent =
      question.text;


  const answerList =
    document
      .getElementById(
        "answerList"
      );

  answerList.innerHTML = "";


  question.answers.forEach(
    (answer, index) => {

      const button =
        document.createElement(
          "button"
        );

      button.type =
        "button";

      button.className =
        "answer-option";

      const letter =
        String.fromCharCode(
          65 + index
        );

      button.innerHTML = `
        <span class="answer-letter">
          ${letter}
        </span>

        <span>
          ${answer.text}
        </span>
      `;

      button.addEventListener(
        "click",
        () => selectAnswer(
          index
        )
      );

      answerList.appendChild(
        button
      );

    }
  );

}


/* RESPUESTA */

function selectAnswer(
  answerIndex
) {

  const answer =
    questions[
      currentQuestion
    ]
    .answers[
      answerIndex
    ];

  answerHistory.push(
    answerIndex
  );

  answer.score.forEach(
    (value, index) => {

      rawScores[index] +=
        value;

    }
  );

  currentQuestion += 1;


  if (
    currentQuestion <
    questions.length
  ) {

    renderQuestion();

  } else {

    startAnalysis();

  }

}


/* ANÁLISIS */

function startAnalysis() {

  questionView.classList.add(
    "hidden"
  );

  analysisView.classList.remove(
    "hidden"
  );


  const lines = [

    "ANALYSING ACADEMIC PROFILE",

    "ANALYSING RELATIONAL INDICATORS",

    "CALCULATING ADAPTABILITY",

    "MAPPING SOCIAL DEPENDENCIES",

    "CALCULATING INITIAL RANK"

  ];


  const list =
    document.getElementById(
      "analysisList"
    );

  list.innerHTML = "";


  lines.forEach(
    (text, index) => {

      const item =
        document.createElement(
          "div"
        );

      item.className =
        "analysis-item";

      item.innerHTML = `
        <span>${text}</span>
        <span>...</span>
      `;

      list.appendChild(
        item
      );


      setTimeout(() => {

        item.classList.add(
          "visible"
        );

      }, index * 500);


      setTimeout(() => {

        item.classList.add(
          "complete"
        );

        item.lastElementChild
          .textContent = "✓";

      }, index * 500 + 350);

    }
  );


  setTimeout(
    showResult,
    lines.length * 500 + 900
  );

}


/* NORMALIZACIÓN */

function normalizeScores() {

  /*
    Máximos teóricos de cada
    variable según las diez
    preguntas.
  */

  const maximums =
    [16, 15, 17, 18];

  return rawScores.map(
    (value, index) => {

      return Math.min(
        100,
        Math.round(
          value /
          maximums[index] *
          100
        )
      );

    }
  );

}


/* PERFIL */

function calculateProfile(
  scores
) {

  const ranked =
    scores
      .map(
        (value, index) => ({
          value,
          index
        })
      )
      .sort(
        (a, b) =>
          b.value - a.value
      );


  const first =
    ranked[0].index;

  const second =
    ranked[1].index;


  const pair =
    [first, second]
      .sort()
      .join("-");


  const profiles = {

    "0-1":
      "THE STRATEGIST",

    "0-2":
      "THE CONNECTOR",

    "0-3":
      "THE COMPETITOR",

    "1-2":
      "THE CONNECTOR",

    "1-3":
      "THE OUTLIER",

    "2-3":
      "THE OBSERVER"

  };


  return (
    profiles[pair] ||
    "THE STRATEGIST"
  );

}


/* SCORE PIERREVAL */

function calculatePierrevalScore(
  scores
) {

  const weighted =
      scores[0] * .40
    + scores[1] * .25
    + scores[2] * .20
    + scores[3] * .15;


  /*
    Se comprime el rango para
    producir scores plausibles
    dentro del universo Pierreval.
  */

  const score =
    61 + weighted * .36;


  return Math.max(
    61,
    Math.min(
      96.8,
      score
    )
  );

}


/* RANK */

function calculateRank(
  score
) {

  let rank;
  let status;


  if (score >= 94) {

    rank =
      Math.max(
        1,
        10 -
        Math.floor(
          (score - 94) * 3
        )
      );

    status =
      "THE TEN";

  }

  else if (score >= 87) {

    rank =
      11 +
      Math.floor(
        (94 - score) * 1.4
      );

    status =
      "HIGH POTENTIAL";

  }

  else if (score >= 79) {

    rank =
      21 +
      Math.floor(
        (87 - score) * 1.8
      );

    status =
      "PRIORITY";

  }

  else if (score >= 71) {

    rank =
      36 +
      Math.floor(
        (79 - score) * 1.8
      );

    status =
      "ADMITTED";

  }

  else if (score >= 64) {

    rank =
      51 +
      Math.floor(
        (71 - score) * 2
      );

    status =
      "PROVISIONAL";

  }

  else {

    rank =
      66 +
      Math.floor(
        (64 - score) * 2
      );

    status =
      "WAITLIST";

  }


  return {
    rank,
    status
  };

}


/* COMPATIBILIDAD */

function calculateCompatibility(
  user,
  character
) {

  /*
    60 % similitud
    40 % complementariedad
  */


  const averageDifference =
    user.reduce(
      (total, value, index) => {

        return (
          total +
          Math.abs(
            value -
            character[index]
          )
        );

      },
      0
    ) / 4;


  const similarity =
    100 -
    averageDifference;


  /*
    Complementariedades:
    Ambition ↔ Social Intelligence
    Independence ↔ Adaptability
    Social Intelligence ↔ Independence
  */

  const complementarity = (

      (user[0] + character[2]) / 2

    + (user[3] + character[1]) / 2

    + (user[2] + character[3]) / 2

  ) / 3;


  const result =
      similarity * .60
    + complementarity * .40;


  return Math.max(
    70,
    Math.min(
      98.8,
      result
    )
  );

}


/* MEJOR MATCH */

function calculateBestMatch(
  scores
) {

  const results =
    Object
      .entries(
        characterProfiles
      )
      .map(
        ([name, profile]) => {

          return {

            name,

            compatibility:
              calculateCompatibility(
                scores,
                profile
              )

          };

        }
      )
      .sort(
        (a, b) =>
          b.compatibility -
          a.compatibility
      );


  /*
    Easter egg.
    Una combinación muy concreta
    produce el 97,4 % canónico.
  */

  const answerSignature =
    answerHistory.join("");


  if (
    answerSignature ===
    "3012032031"
  ) {

    results[0].compatibility =
      97.4;

  }


  return results[0];

}


/* INDICADOR RELACIONAL */

function shouldShowRelationalIndicator(
  scores,
  match
) {

  const sloane =
    characterProfiles[
      "SLOANE HOLT"
    ];

  const nora =
    characterProfiles[
      "NORA VALE"
    ];


  const distanceToSloane =
    scores.reduce(
      (total, value, index) => {

        return (
          total +
          Math.abs(
            value -
            sloane[index]
          )
        );

      },
      0
    );


  const distanceToNora =
    scores.reduce(
      (total, value, index) => {

        return (
          total +
          Math.abs(
            value -
            nora[index]
          )
        );

      },
      0
    );


  return (
    distanceToSloane < 32 ||
    distanceToNora < 32 ||
    Math.abs(
      match.compatibility -
      97.4
    ) < .05
  );

}


/* MOSTRAR RESULTADO */

function showResult() {

  analysisView.classList.add(
    "hidden"
  );

  resultView.classList.remove(
    "hidden"
  );


  const scores =
    normalizeScores();


  const profile =
    calculateProfile(
      scores
    );


  const pierrevalScore =
    calculatePierrevalScore(
      scores
    );


  const ranking =
    calculateRank(
      pierrevalScore
    );


  const match =
    calculateBestMatch(
      scores
    );


  document
    .getElementById(
      "resultStatus"
    )
    .textContent =
      ranking.status;


  document
    .getElementById(
      "resultCandidate"
    )
    .textContent =
      candidateName;


  document
    .getElementById(
      "resultScore"
    )
    .textContent =
      pierrevalScore
        .toFixed(1);


  document
    .getElementById(
      "resultRank"
    )
    .textContent =
      `#${ranking.rank}`;


  document
    .getElementById(
      "resultProfile"
    )
    .textContent =
      profile;


  document
    .getElementById(
      "resultProfileText"
    )
    .textContent =
      profileDescriptions[
        profile
      ];


  document
    .getElementById(
      "resultCompatibility"
    )
    .textContent =
      `${match.compatibility.toFixed(1)}%`;


  document
    .getElementById(
      "resultMatch"
    )
    .textContent =
      match.name;


  const matchType =
    document.getElementById(
      "resultMatchType"
    );


  if (
    match.name ===
    "ADRIAN CROSS"
  ) {

    matchType.textContent =
      "BEHAVIOURAL MATCH";

  } else {

    matchType.textContent =
      "STUDENT MATCH";

  }


  renderTraits(
    scores
  );


  const relational =
    document.getElementById(
      "relationalIndicator"
    );


  if (
    shouldShowRelationalIndicator(
      scores,
      match
    )
  ) {

    relational.classList.remove(
      "hidden"
    );

  } else {

    relational.classList.add(
      "hidden"
    );

  }

}


/* VARIABLES */

function renderTraits(
  scores
) {

  const labels = [

    "AMBITION",

    "ADAPTABILITY",

    "SOCIAL INTELLIGENCE",

    "INDEPENDENCE"

  ];


  const grid =
    document.getElementById(
      "traitGrid"
    );


  grid.innerHTML = "";


  labels.forEach(
    (label, index) => {

      const item =
        document.createElement(
          "div"
        );

      item.className =
        "trait-item";


      item.innerHTML = `

        <span>
          ${label}
        </span>

        <strong>
          ${scores[index]}
        </strong>

      `;


      grid.appendChild(
        item
      );

    }
  );

}


/* REPETIR */

document
  .getElementById(
    "restartTest"
  )
  .addEventListener(
    "click",
    () => {

      resetTest();

      document
        .getElementById(
          "candidateName"
        )
        .focus();

    }
  );


/* COPIAR RESULTADO */

document
  .getElementById(
    "copyResult"
  )
  .addEventListener(
    "click",
    async () => {

      const text = [

        "PIERREVAL ADMISSION",

        "",

        candidateName,

        `SCORE ${
          document
            .getElementById(
              "resultScore"
            )
            .textContent
        }`,

        `INITIAL RANK ${
          document
            .getElementById(
              "resultRank"
            )
            .textContent
        }`,

        document
          .getElementById(
            "resultProfile"
          )
          .textContent,

        "",

        `COMPATIBILITY ${
          document
            .getElementById(
              "resultMatch"
            )
            .textContent
        } · ${
          document
            .getElementById(
              "resultCompatibility"
            )
            .textContent
        }`,

        "",

        "#Pierreval"

      ].join("\n");


      try {

        await navigator
          .clipboard
          .writeText(
            text
          );


        const button =
          document
            .getElementById(
              "copyResult"
            );


        const original =
          button.textContent;


        button.textContent =
          "RESULTADO COPIADO";


        setTimeout(
          () => {

            button.textContent =
              original;

          },
          1600
        );

      }

      catch (error) {

        /*
          Fallback para navegadores
          que bloquean clipboard.
        */

        const textarea =
          document.createElement(
            "textarea"
          );

        textarea.value =
          text;

        document.body.appendChild(
          textarea
        );

        textarea.select();

        document.execCommand(
          "copy"
        );

        textarea.remove();

      }

    }
  );
