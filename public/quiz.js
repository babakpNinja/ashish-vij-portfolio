// "How well do you know Ashish?" — 10-question AI-powered quiz
// Built by Phantom 👻

const QUESTIONS = [
  {
    q: "What year did Ashish join Google?",
    options: ["2003", "2005", "2007", "2009"],
    answer: 1,
    fact: "He joined the Google Analytics launch team in 2005 — back when GA was a free tool nobody quite knew what to do with yet.",
    correctQuips: [
      "Correct. You either read his About page or you were standing in the Mountain View parking lot in 2005.",
      "Right. The year GA went free. The year nothing was the same for online measurement.",
      "Yes — 2005, the same year YouTube got its first upload."
    ],
    wrongQuips: [
      "Not quite. Off by a few — the answer is 2005, the year GA went free.",
      "Close but no. He joined in 2005, just as Google was acquiring Urchin to build GA.",
      "Try 2005. The Google Analytics track jacket from the thesis section is literally from that year."
    ]
  },
  {
    q: "Which product launch team did he join first at Google?",
    options: ["YouTube Ads", "Google Analytics", "Google Maps for Business", "AdSense"],
    answer: 1,
    fact: "Google Analytics — the original launch team that turned Urchin into the free measurement tool the whole web ended up using.",
    correctQuips: [
      "Yep — Google Analytics. The career thesis was set on day one.",
      "Right. He's been measuring things since before measuring things was a job title.",
      "Correct. The GA launch team is the seed of everything else on his resume."
    ],
    wrongQuips: [
      "Nope — Google Analytics. The product that defined the next twenty years of his career.",
      "Not quite. His launch team was the one that took Urchin and made it Google Analytics.",
      "Look at the track jacket photo. That's the team he joined first."
    ]
  },
  {
    q: "What's his current title at Seer Interactive?",
    options: ["Chief Revenue Officer", "VP, Business Strategy & Marketing", "Head of Growth", "Managing Director"],
    answer: 1,
    fact: "VP, Business Strategy & Marketing — and Head of New Business. Two titles, one mandate: turn measurement into revenue.",
    correctQuips: [
      "Correct. VP Biz Strategy & Marketing, with the new-business engine bolted on for good measure.",
      "Right. The 'measurement-first' GTM hat at Seer.",
      "Yes — and the 'Head of New Business' part is where the magic happens."
    ],
    wrongQuips: [
      "Almost — he's VP Business Strategy & Marketing at Seer (and Head of New Business on top).",
      "Not quite. His title is VP Biz Strategy & Marketing. New business reports to him.",
      "Close. The right answer is VP Business Strategy & Marketing."
    ]
  },
  {
    q: "Complete his thesis: \"AI in 2026 is ___ in 2005.\"",
    options: ["Analytics", "The iPhone", "Search", "The Cloud"],
    answer: 0,
    fact: "Analytics. Same adoption curve, same job — someone has to be the person in the room who makes it real.",
    correctQuips: [
      "Correct. Same adoption curve. Same person-in-the-room job. He's done this movie before.",
      "Right. AI in 2026 = Analytics in 2005. The whole pitch in seven words.",
      "Yes. He didn't predict the curve — he ran it."
    ],
    wrongQuips: [
      "Nope — Analytics. The whole thesis: same adoption curve, twenty years apart.",
      "Try Analytics. It's literally in the pull quote on his site.",
      "Not quite — the answer is Analytics. The 2005 framing is the whole point."
    ]
  },
  {
    q: "How many years did he spend at Google before leaving?",
    options: ["10", "12", "14", "18"],
    answer: 2,
    fact: "14 years — 2005 to 2019. (Not 15, not 20, not \"two decades.\" His Phantom-generated portfolio takes the date fields seriously.)",
    correctQuips: [
      "Correct. 14 years on the dot — RocketReach role-end of 2019, LinkedIn confirms.",
      "Right. 2005 to 2019. Phantom learned the hard way to use date fields, not prose bios.",
      "Yes — 14. Not 15, not 'a couple decades.' The receipts say 14."
    ],
    wrongQuips: [
      "Off — the answer is 14 years (2005–2019).",
      "Not quite. 14 years. This is the exact mistake Phantom made on day one before learning.",
      "Try 14. The structured records win every time."
    ]
  },
  {
    q: "Which iconic piece of swag is featured in his thesis photo?",
    options: ["Google T-shirt", "Google Analytics track jacket", "Stadia hoodie", "GA360 baseball cap"],
    answer: 1,
    fact: "The original Google Analytics track jacket — circa 2005. Still has it. Still wears it. Still puts it in the thesis.",
    correctQuips: [
      "Correct. The original 2005 GA track jacket. The piece of swag that ties the whole pitch together.",
      "Right. Still fits. Still has the patch. Still the most flexed item of merch in marketing.",
      "Yes — the GA track jacket. It is the thesis."
    ],
    wrongQuips: [
      "Not quite — the GA track jacket. It's the whole visual hook of his thesis.",
      "Try the Google Analytics track jacket. Scroll up the page and you can see it.",
      "Nope — the track jacket from 2005. Iconic for a reason."
    ]
  },
  {
    q: "Which AI tool does he reach for daily — calendar, sales-handoff briefs, the works?",
    options: ["ChatGPT", "Gemini", "Claude", "Perplexity"],
    answer: 2,
    fact: "Claude. Calendar on the run, kickoff briefs from call transcripts + email + Drive, role-based views for sales and CS.",
    correctQuips: [
      "Correct. Claude — for the calendar dance and the sales-to-CS handoff briefs.",
      "Right. He builds interactive kickoff briefs in Claude. (Phantom is biased but: good taste.)",
      "Yes — Claude. Daily driver, not novelty."
    ],
    wrongQuips: [
      "Not quite — it's Claude. The handoff-brief workflow is his calling card.",
      "Try Claude. He's been on it daily for the practical workflows, not the demos.",
      "Nope — Claude. Building from call transcripts + email + Drive, role-based views."
    ]
  },
  {
    q: "Which Google product was his other core launch team after GA?",
    options: ["Google Ads", "Google Analytics 360", "Looker", "BigQuery"],
    answer: 1,
    fact: "Google Analytics 360 — the enterprise tier. The launch that brought GA to the Fortune 500.",
    correctQuips: [
      "Correct. GA360 — the enterprise tier that brought GA to the F500.",
      "Right. Two GA launches on one resume. The receipts are loud.",
      "Yes — Google Analytics 360. The enterprise unlock."
    ],
    wrongQuips: [
      "Not quite — Google Analytics 360. He launched both flavors of GA.",
      "Try GA360 — the enterprise version of the platform he helped launch in 2005.",
      "Nope — the answer is Google Analytics 360."
    ]
  },
  {
    q: "Which marketing conference does he speak at?",
    options: ["SaaStr Annual", "Cannes Lions", "Marketing Analytics Summit", "Web Summit"],
    answer: 2,
    fact: "Marketing Analytics Summit — 2025 speaker. (Phantom pulled his headshot for this very site from the MAS speaker page.)",
    correctQuips: [
      "Correct. Marketing Analytics Summit — 2025 speaker.",
      "Right. The MAS speaker bio is in fact one of the sources Phantom cited for this site.",
      "Yes — MAS 2025. Look for him at the analytics-meets-AI track."
    ],
    wrongQuips: [
      "Try Marketing Analytics Summit — that's where his 2025 speaker headshot came from.",
      "Nope — Marketing Analytics Summit. Phantom literally lifted his MAS headshot for the hero photo.",
      "Not quite — the answer is Marketing Analytics Summit."
    ]
  },
  {
    q: "Which Google product did he work on as a Partner Manager in his later years?",
    options: ["Pixel", "Waymo", "Stadia", "Nest"],
    answer: 2,
    fact: "Stadia — the cloud gaming bet. He was Partner Manager. Yes, that Stadia. Yes, it counts.",
    correctQuips: [
      "Correct. Stadia. Yes, that one. Yes, it's on the resume. Yes, it counts.",
      "Right — Stadia. The cloud-gaming era. He saw the curve from a different angle there too.",
      "Yes — Partner Manager on Stadia. The era of big swings."
    ],
    wrongQuips: [
      "Try Stadia — yes, the cloud-gaming one. He was on the partner team.",
      "Not quite. Stadia. He was Partner Manager during the big-swings era.",
      "Nope — Stadia is the answer. Look at the deep cut on his Experience timeline."
    ]
  }
];

const SCORE_VERDICTS = {
  perfect: [
    "🏆  10 / 10. You are either Ashish, married to Ashish, or have read his About page eleven times. The Phantom dossier is closed — you've passed.",
    "🏆  Perfect score. You know the GA-track-jacket-to-Stadia-to-Claude arc cold. He should hire you, or marry you, or both.",
    "🏆  Flawless. You absorbed the entire RocketReach timeline AND the thesis quote. Top of class."
  ],
  expert: [
    "🥇 9 / 10. The 'I have actually worked with him' tier. You know the dates, you know the swag, you know the daily tools. Phantom respects it.",
    "🥇 9 / 10. Either you're a Seer colleague or you've been reading his Substack since the start. Either way: deserved.",
    "🥇 9 / 10. Expert tier. The one you missed was probably Stadia — nobody remembers Stadia. Except Ashish."
  ],
  strong: [
    "🥈 {score} / 10. Strong showing. You've got the broad strokes — Google, Analytics, Seer, AI thesis — but the deep cuts (Stadia, GA360, exact year math) caught you.",
    "🥈 {score} / 10. You'd ace the LinkedIn version of this quiz. The Phantom-deep-cuts version is harder.",
    "🥈 {score} / 10. Good. You're at the 'we've met at a conference' level, not yet at 'we're in the same Slack' level."
  ],
  casual: [
    "🥉 {score} / 10. You know him *vibes-first*. You'd recognize him at a party. You couldn't tell a recruiter when he started at Google.",
    "🥉 {score} / 10. Honest middle of the pack. The thesis you nailed, the dates you guessed.",
    "🥉 {score} / 10. The 'I follow him on LinkedIn but only skim the carousels' tier. No shame, but room to grow."
  ],
  curious: [
    "👀 {score} / 10. You're curious about Ashish. That's enough for now. Scroll the site, take it again — you'll do better.",
    "👀 {score} / 10. Phantom isn't judging. (Phantom is mildly judging.) Read the About section, come back.",
    "👀 {score} / 10. This is the 'we just met in this Slack' tier. Honest score. Phantom respects honesty."
  ]
};

const SHARE_LINES = {
  perfect: "🏆 I scored 10/10 on the \"How well do you know Ashish?\" quiz. Built by Phantom 👻 — try it:",
  expert: "🥇 9/10 on the Ashish quiz. Built by Phantom 👻 — see if you can beat me:",
  strong: "🥈 {score}/10 on the Ashish quiz. Built by Phantom 👻 —",
  casual: "🥉 {score}/10 on the Ashish quiz. Phantom 👻 built it. Probably you'll do better:",
  curious: "👀 {score}/10 on the Ashish quiz. Built by Phantom 👻. Your turn:"
};

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const rand = arr => arr[Math.floor(Math.random() * arr.length)];

let state = { idx: 0, score: 0, locked: false, answers: [] };

function openQuiz() {
  state = { idx: 0, score: 0, locked: false, answers: [] };
  const overlay = $("#quizOverlay");
  overlay.classList.add("is-open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  renderQuestion();
}

function closeQuiz() {
  const overlay = $("#quizOverlay");
  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderQuestion() {
  const q = QUESTIONS[state.idx];
  const total = QUESTIONS.length;
  const stage = $("#quizStage");
  stage.innerHTML = `
    <div class="quiz__progress">
      <div class="quiz__progress-bar" style="width:${(state.idx / total) * 100}%"></div>
      <div class="quiz__progress-label">Question ${state.idx + 1} of ${total}</div>
    </div>
    <div class="quiz__card" aria-live="polite">
      <h3 class="quiz__question">${q.q}</h3>
      <div class="quiz__options">
        ${q.options.map((opt, i) =>
          `<button class="quiz__option" data-i="${i}"><span class="quiz__option-letter">${"ABCD"[i]}</span><span>${opt}</span></button>`
        ).join("")}
      </div>
      <div class="quiz__reaction" id="quizReaction" hidden></div>
      <div class="quiz__nav">
        <button class="quiz__close" id="quizClose">Close quiz</button>
        <button class="quiz__next" id="quizNext" hidden>Next →</button>
      </div>
    </div>
  `;
  $$(".quiz__option", stage).forEach(btn => btn.addEventListener("click", onAnswer));
  $("#quizClose").addEventListener("click", closeQuiz);
}

function onAnswer(ev) {
  if (state.locked) return;
  state.locked = true;
  const chosen = parseInt(ev.currentTarget.dataset.i, 10);
  const q = QUESTIONS[state.idx];
  const correct = chosen === q.answer;
  if (correct) state.score++;
  state.answers.push({ q: q.q, chosen, correct });

  $$(".quiz__option").forEach(btn => {
    const i = parseInt(btn.dataset.i, 10);
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("is-correct");
    if (i === chosen && !correct) btn.classList.add("is-wrong");
  });

  const reaction = $("#quizReaction");
  reaction.hidden = false;
  reaction.innerHTML = `
    <div class="quiz__ai-row">
      <span class="quiz__ai-dot"></span>
      <span class="quiz__ai-label">Phantom is judging your answer…</span>
    </div>
  `;

  setTimeout(() => {
    const quip = rand(correct ? q.correctQuips : q.wrongQuips);
    reaction.innerHTML = `
      <div class="quiz__ai-row">
        <span class="quiz__ai-badge ${correct ? "ok" : "no"}">${correct ? "✓ correct" : "✗ wrong"}</span>
      </div>
      <p class="quiz__quip"></p>
      <p class="quiz__fact"><strong>The receipt:</strong> ${q.fact}</p>
    `;
    typewrite($(".quiz__quip", reaction), quip);
    const nextBtn = $("#quizNext");
    nextBtn.hidden = false;
    nextBtn.textContent = state.idx === QUESTIONS.length - 1 ? "See your verdict →" : "Next →";
    nextBtn.addEventListener("click", advance, { once: true });
  }, 900);
}

function typewrite(el, text, speed = 16) {
  el.textContent = "";
  let i = 0;
  const tick = () => {
    if (i <= text.length) {
      el.textContent = text.slice(0, i++);
      setTimeout(tick, speed);
    }
  };
  tick();
}

function advance() {
  state.idx++;
  state.locked = false;
  if (state.idx >= QUESTIONS.length) {
    renderVerdict();
  } else {
    renderQuestion();
  }
}

function bandFor(score) {
  if (score === 10) return "perfect";
  if (score === 9) return "expert";
  if (score >= 7) return "strong";
  if (score >= 4) return "casual";
  return "curious";
}

function renderVerdict() {
  const stage = $("#quizStage");
  stage.innerHTML = `
    <div class="quiz__verdict">
      <div class="quiz__ai-row">
        <span class="quiz__ai-dot"></span>
        <span class="quiz__ai-label">Phantom is synthesizing your verdict…</span>
      </div>
    </div>
  `;
  setTimeout(() => doVerdict(), 1600);
}

function doVerdict() {
  const score = state.score;
  const band = bandFor(score);
  const verdictText = rand(SCORE_VERDICTS[band]).replace("{score}", score);
  const shareText = SHARE_LINES[band].replace("{score}", score) + " " + window.location.origin;

  const stage = $("#quizStage");
  stage.innerHTML = `
    <div class="quiz__verdict">
      <div class="quiz__score-ring">
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="52" class="ring-bg" />
          <circle cx="60" cy="60" r="52" class="ring-fg"
            style="stroke-dashoffset: ${326 - 326 * (score / 10)}" />
        </svg>
        <div class="quiz__score-num">${score}<span>/10</span></div>
      </div>
      <p class="quiz__verdict-line"></p>
      <div class="quiz__breakdown">
        ${state.answers.map((a, i) =>
          `<span class="quiz__dot ${a.correct ? "ok" : "no"}" title="Q${i + 1}: ${a.correct ? "correct" : "wrong"}">${i + 1}</span>`
        ).join("")}
      </div>
      <div class="quiz__actions">
        <button class="btn btn--primary" id="quizRetry">Try again</button>
        <button class="btn btn--ghost" id="quizShare">Share my score</button>
        <button class="btn btn--ghost" id="quizDone">Back to site</button>
      </div>
      <p class="quiz__share-hint" id="quizShareHint" hidden>Copied to clipboard ✓</p>
    </div>
  `;
  typewrite($(".quiz__verdict-line"), verdictText, 12);
  $("#quizRetry").addEventListener("click", openQuiz);
  $("#quizDone").addEventListener("click", closeQuiz);
  $("#quizShare").addEventListener("click", () => {
    navigator.clipboard.writeText(shareText).then(() => {
      $("#quizShareHint").hidden = false;
      setTimeout(() => { $("#quizShareHint").hidden = true; }, 2200);
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  $("#quizStart")?.addEventListener("click", openQuiz);
  $("#quizStartHero")?.addEventListener("click", openQuiz);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeQuiz();
  });
});
