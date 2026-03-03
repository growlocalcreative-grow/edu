"use client";

import { useState } from "react";

// ── Course & Lesson Data ──────────────────────────────────────
const courseTitle = "The Clarity Framework";
const courseIcon = "✦";

const modules = [
  {
    id: 1,
    title: "Foundation — Understanding Clarity",
    lessons: [
      {
        id: 1, type: "text", title: "What Clarity Actually Means for Coaches",
        duration: "18 min", free: true, completed: true,
        content: `
# What Clarity Actually Means for Coaches

Clarity is not a destination. It is not something you *arrive at* once and keep forever. Clarity is a **practice** — a daily, deliberate act of returning to what matters most.

Most coaches come into this work with a deep desire to help others. But somewhere between the passion and the business, the vision gets blurry. Clients don't show up. Messaging feels flat. You find yourself saying yes to work that drains you, and wondering why you started in the first place.

That fog has a name. And it has a cure.

## The Fog Model

The Fog Model describes the three primary clarity blockers that keep coaches stuck:

**1. Identity Fog** — You know what you do, but not deeply *who you are* as a coach. Your methods are borrowed. Your voice is still forming.

**2. Direction Fog** — You have goals, but they shift constantly. You pivot strategies before giving any one approach time to work.

**3. Communication Fog** — You struggle to explain what you do in a way that lands. Potential clients nod politely and never follow up.

Each of these fogs feeds the others. Identity fog creates direction fog. Direction fog creates communication fog. And communication fog confirms the identity fog — *maybe I'm not cut out for this.*

## The Antidote

Clarity comes from excavation, not addition. You don't need more frameworks, more certifications, or more content. You need to go *deeper* into what's already true about you.

Over the next six hours, that's exactly what we're going to do.

> *"Clarity is not about knowing everything. It's about knowing the one thing that makes everything else make sense."*
> — Maren Ellis

## Your First Practice

Before moving on to the next lesson, take 10 minutes to journal on this question:

**What drew you to coaching — not the idea of it, but the specific moment you knew this was your path?**

Don't edit. Don't perform. Just write.
        `,
      },
      {
        id: 2, type: "text", title: "The Fog Model — Why Most Coaches Stay Stuck",
        duration: "22 min", free: false, completed: true,
        content: `
# The Fog Model — Why Most Coaches Stay Stuck

In the previous lesson, we introduced the three primary clarity blockers. Now let's go deeper into each one — and more importantly, what breaks through them.

## Identity Fog in Depth

Identity fog is the most foundational of the three. It shows up as:

- Constantly comparing yourself to other coaches
- Feeling like a fraud, even after client wins
- Changing your niche every few months
- Avoiding putting yourself out there because "I'm still figuring it out"

The root of identity fog is almost always an **unexamined belief** about who gets to be a coach. Often it sounds like: *"I haven't been through enough"* or *"There are people more qualified than me."*

## Breaking Through Identity Fog

The breakthrough isn't confidence. Confidence is a byproduct. The breakthrough is **specificity**.

When you get radically specific about your story — the exact texture of the struggle you've moved through, the precise transformation you've experienced — something shifts. You stop trying to appeal to everyone and start resonating deeply with someone.

That specificity IS your qualification.

## This Week's Practice

Write a "Before & After" story in two paragraphs:
- **Before**: Who you were before your own transformation
- **After**: Who you are now, and what became possible

This will become the foundation of your coaching identity statement in Module 3.
        `,
      },
      {
        id: 3, type: "quiz", title: "Your Clarity Baseline Assessment",
        duration: "18 min", free: false, completed: false,
        questions: [
          {
            id: "q1",
            question: "Which of the following best describes 'Identity Fog' as presented in this module?",
            options: [
              "A lack of marketing skills",
              "Uncertainty about who you are as a coach, leading to borrowed methods and an unformed voice",
              "Having too many clients to manage",
              "Difficulty with time management",
            ],
            correct: 1,
            explanation: "Identity fog is about not knowing deeply who you are as a coach — your methods feel borrowed and your voice is still forming. It's the most foundational of the three clarity blockers.",
          },
          {
            id: "q2",
            question: "According to the Fog Model, what is the correct order in which the fogs feed each other?",
            options: [
              "Communication Fog → Direction Fog → Identity Fog",
              "Direction Fog → Identity Fog → Communication Fog",
              "Identity Fog → Direction Fog → Communication Fog",
              "All three are independent of each other",
            ],
            correct: 2,
            explanation: "Identity fog creates direction fog, which creates communication fog — which then confirms the identity fog, creating a self-reinforcing cycle.",
          },
          {
            id: "q3",
            question: "What does Maren Ellis identify as the true antidote to clarity fog?",
            options: [
              "More certifications and training",
              "Better social media strategy",
              "Excavation — going deeper into what's already true about you",
              "Adding new frameworks to your coaching toolkit",
            ],
            correct: 2,
            explanation: "Clarity comes from excavation, not addition. You don't need more — you need to go deeper into what's already true about you.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Core Values — The Root System",
    lessons: [
      {
        id: 4, type: "text", title: "Excavating Your Non-Negotiables",
        duration: "20 min", free: false, completed: false,
        content: `
# Excavating Your Non-Negotiables

Your values are not aspirational. They are not who you want to be — they are who you already are at your core. The work of this module is not to *choose* your values. It's to *uncover* them.

## The Excavation Process

Most values exercises ask you to pick from a list. That approach produces aspirational values — words that sound good but don't actually drive behavior.

Real values show up in three places:

**1. What makes you angry** — Anger is a values violation detector. When something makes you genuinely angry, it's because a core value has been transgressed.

**2. What makes you proud** — Not surface pride, but deep satisfaction. The moments where you think *"That. That is exactly what I'm here to do."*

**3. What you protect at all costs** — Even when it costs you money, comfort, or relationships. These are your non-negotiables.

## Your Practice

Take 20 minutes and write freely on each of these three prompts. Don't filter. Don't be polite. The rawness is the data.
        `,
      },
      {
        id: 5, type: "text", title: "Values vs. Rules — A Critical Distinction",
        duration: "17 min", free: false, completed: false,
        content: `
# Values vs. Rules — A Critical Distinction

One of the most common mistakes coaches make is confusing values with rules. This distinction is subtle but transformative.

## Values Are Internal. Rules Are External.

A **value** emerges from the inside. It's intrinsic. It doesn't require justification. "I value deep, honest connection" is a value — it describes something true about your inner world.

A **rule** is a behavior you've adopted — often from family, culture, religion, or past experience. "I should always be available for my clients" is a rule. It might be rooted in a value (service, care), but it's also costing you.

## Why This Matters for Coaches

When you mistake rules for values, you build a coaching practice that looks good on the outside but feels hollow on the inside. You follow the rules, but you're not actually living your values.

The result? Burnout. Resentment. The creeping feeling that something is off — even when everything looks fine.

The fix is to trace every rule back to the value underneath it, then ask: *"Is there a way to honor this value without this particular rule?"*
        `,
      },
    ],
  },
];

// Flatten all lessons for navigation
const allLessons = modules.flatMap(m =>
  m.lessons.map(l => ({ ...l, moduleTitle: m.title, moduleId: m.id }))
);

// ── Quiz Component ────────────────────────────────────────────
const QuizComponent = ({ questions, onComplete }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted
    ? questions.filter(q => answers[q.id] === q.correct).length
    : 0;
  const pct = submitted ? Math.round((score / questions.length) * 100) : 0;
  const passed = pct >= 70;

  return (
    <div>
      <div style={{
        display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px",
      }}>
        <div style={{
          width: "44px", height: "44px", borderRadius: "12px",
          background: "#EAE6DE", display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: "1.1rem", color: "#919682",
        }}>◎</div>
        <div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.8rem", fontWeight: 700, color: "#3D3D35",
          }}>Module Quiz</h1>
          <p style={{
            fontSize: "0.78rem", color: "#A8A49A",
            fontFamily: "'Jost', sans-serif",
          }}>{questions.length} questions · Pass score: 70%</p>
        </div>
      </div>

      {submitted ? (
        // Results
        <div>
          <div style={{
            background: passed ? "#E8EBE3" : "#F5EDE8",
            border: `1.5px solid ${passed ? "#919682" : "#C4806A"}`,
            borderRadius: "16px", padding: "28px 32px",
            textAlign: "center", marginBottom: "32px",
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "3rem", fontWeight: 700,
              color: passed ? "#6B7057" : "#A0523A",
              marginBottom: "8px",
            }}>{pct}%</div>
            <div style={{
              fontSize: "1rem", fontWeight: 700,
              color: passed ? "#6B7057" : "#A0523A",
              fontFamily: "'Jost', sans-serif",
              letterSpacing: "0.06em", textTransform: "uppercase",
            }}>
              {passed ? "✦ Passed!" : "Not quite — try again"}
            </div>
            <p style={{
              fontSize: "0.8rem", color: "#919682", marginTop: "8px",
              fontFamily: "'Jost', sans-serif",
            }}>
              {score} of {questions.length} correct
            </p>
          </div>

          {questions.map((q, i) => {
            const isCorrect = answers[q.id] === q.correct;
            return (
              <div key={q.id} style={{
                background: "#FDFCF9", border: "1.5px solid #E0DBD2",
                borderRadius: "14px", padding: "20px 24px", marginBottom: "14px",
              }}>
                <div style={{
                  display: "flex", gap: "10px", marginBottom: "14px",
                }}>
                  <span style={{
                    fontSize: "0.75rem", fontWeight: 700,
                    color: isCorrect ? "#6B7057" : "#A0523A",
                  }}>{isCorrect ? "✓" : "✗"}</span>
                  <div style={{
                    fontSize: "0.88rem", fontWeight: 600, color: "#3D3D35",
                    fontFamily: "'Jost', sans-serif", lineHeight: 1.5,
                  }}>{q.question}</div>
                </div>
                {q.options.map((opt, oi) => (
                  <div key={oi} style={{
                    padding: "10px 14px", borderRadius: "8px", marginBottom: "6px",
                    fontSize: "0.8rem", fontFamily: "'Jost', sans-serif",
                    background: oi === q.correct ? "#E8EBE3"
                      : oi === answers[q.id] && !isCorrect ? "#F5EDE8" : "#F5F2EC",
                    color: oi === q.correct ? "#6B7057"
                      : oi === answers[q.id] && !isCorrect ? "#A0523A" : "#A8A49A",
                    fontWeight: oi === q.correct ? 600 : 400,
                  }}>{opt}</div>
                ))}
                <div style={{
                  marginTop: "10px", padding: "10px 14px",
                  background: "#F5F2EC", borderRadius: "8px",
                  fontSize: "0.75rem", color: "#6B7057",
                  fontFamily: "'Jost', sans-serif", lineHeight: 1.6,
                  fontStyle: "italic",
                }}>💡 {q.explanation}</div>
              </div>
            );
          })}

          <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
            {!passed && (
              <button onClick={() => { setAnswers({}); setSubmitted(false); }} style={{
                background: "transparent", color: "#919682",
                border: "1.5px solid #C4BFB0", borderRadius: "10px",
                padding: "12px 24px", fontSize: "0.78rem", fontWeight: 600,
                cursor: "pointer", fontFamily: "'Jost', sans-serif",
                letterSpacing: "0.06em",
              }}>Retry Quiz</button>
            )}
            {passed && (
              <button onClick={onComplete} style={{
                background: "#919682", color: "#FDFCF9",
                border: "none", borderRadius: "10px",
                padding: "12px 28px", fontSize: "0.78rem", fontWeight: 600,
                cursor: "pointer", fontFamily: "'Jost', sans-serif",
                letterSpacing: "0.06em", textTransform: "uppercase",
              }}>Continue →</button>
            )}
          </div>
        </div>
      ) : (
        // Questions
        <div>
          {questions.map((q, i) => (
            <div key={q.id} style={{
              background: "#FDFCF9", border: "1.5px solid #E0DBD2",
              borderRadius: "14px", padding: "22px 24px", marginBottom: "16px",
            }}>
              <div style={{
                fontSize: "0.7rem", color: "#919682", fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                fontFamily: "'Jost', sans-serif", marginBottom: "8px",
              }}>Question {i + 1}</div>
              <div style={{
                fontSize: "0.92rem", fontWeight: 600, color: "#3D3D35",
                fontFamily: "'Jost', sans-serif", lineHeight: 1.55,
                marginBottom: "16px",
              }}>{q.question}</div>
              {q.options.map((opt, oi) => (
                <button key={oi} onClick={() => setAnswers(a => ({ ...a, [q.id]: oi }))} style={{
                  width: "100%", textAlign: "left",
                  padding: "11px 16px", borderRadius: "10px", marginBottom: "8px",
                  border: `1.5px solid ${answers[q.id] === oi ? "#919682" : "#E0DBD2"}`,
                  background: answers[q.id] === oi ? "#F5F2EC" : "#FDFCF9",
                  color: answers[q.id] === oi ? "#3D3D35" : "#6B7057",
                  fontSize: "0.82rem", fontFamily: "'Jost', sans-serif",
                  cursor: "pointer", transition: "all 0.15s",
                  display: "flex", alignItems: "center", gap: "10px",
                }}>
                  <span style={{
                    width: "20px", height: "20px", borderRadius: "50%", flexShrink: 0,
                    border: `1.5px solid ${answers[q.id] === oi ? "#919682" : "#C4BFB0"}`,
                    background: answers[q.id] === oi ? "#919682" : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.55rem", color: "#FDFCF9",
                  }}>{answers[q.id] === oi ? "●" : ""}</span>
                  {opt}
                </button>
              ))}
            </div>
          ))}

          <button
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(answers).length < questions.length}
            style={{
              background: Object.keys(answers).length < questions.length ? "#C4BFB0" : "#919682",
              color: "#FDFCF9", border: "none", borderRadius: "10px",
              padding: "13px 32px", fontSize: "0.82rem", fontWeight: 700,
              cursor: Object.keys(answers).length < questions.length ? "not-allowed" : "pointer",
              letterSpacing: "0.08em", textTransform: "uppercase",
              fontFamily: "'Jost', sans-serif", transition: "background 0.2s",
            }}
          >
            Submit Answers
          </button>
          {Object.keys(answers).length < questions.length && (
            <p style={{
              fontSize: "0.72rem", color: "#C4BFB0", marginTop: "8px",
              fontFamily: "'Jost', sans-serif",
            }}>Answer all {questions.length} questions to submit</p>
          )}
        </div>
      )}
    </div>
  );
};

// ── Markdown-style text renderer ─────────────────────────────
const LessonText = ({ content }) => {
  const lines = content.trim().split("\n");
  return (
    <div style={{ maxWidth: "680px" }}>
      {lines.map((line, i) => {
        if (line.startsWith("# ")) return (
          <h1 key={i} style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "2rem", fontWeight: 700, color: "#3D3D35",
            lineHeight: 1.2, marginBottom: "20px", letterSpacing: "-0.02em",
          }}>{line.slice(2)}</h1>
        );
        if (line.startsWith("## ")) return (
          <h2 key={i} style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.35rem", fontWeight: 700, color: "#3D3D35",
            marginTop: "32px", marginBottom: "12px",
          }}>{line.slice(3)}</h2>
        );
        if (line.startsWith("> ")) return (
          <blockquote key={i} style={{
            borderLeft: "3px solid #919682",
            paddingLeft: "20px", margin: "24px 0",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem", fontStyle: "italic", color: "#6B7057",
            lineHeight: 1.7,
          }}>{line.slice(2)}</blockquote>
        );
        if (line.startsWith("**") && line.endsWith("**")) return (
          <p key={i} style={{
            fontSize: "0.9rem", fontWeight: 700, color: "#3D3D35",
            fontFamily: "'Jost', sans-serif", margin: "12px 0 4px",
          }}>{line.slice(2, -2)}</p>
        );
        if (line.startsWith("- ")) return (
          <div key={i} style={{
            display: "flex", gap: "10px", margin: "6px 0",
          }}>
            <span style={{ color: "#919682", flexShrink: 0 }}>✦</span>
            <span style={{
              fontSize: "0.88rem", color: "#3D3D35", lineHeight: 1.7,
              fontFamily: "'Jost', sans-serif",
            }}>{line.slice(2)}</span>
          </div>
        );
        if (line.trim() === "") return <div key={i} style={{ height: "12px" }} />;
        // Inline bold
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return (
          <p key={i} style={{
            fontSize: "0.92rem", color: "#4A4A42", lineHeight: 1.85,
            fontFamily: "'Jost', sans-serif", fontWeight: 300,
            margin: "6px 0",
          }}>
            {parts.map((part, pi) =>
              pi % 2 === 1
                ? <strong key={pi} style={{ color: "#3D3D35", fontWeight: 700 }}>{part}</strong>
                : part
            )}
          </p>
        );
      })}
    </div>
  );
};

// ── Main Lesson Viewer ────────────────────────────────────────
export default function LessonViewer() {
  const [currentLessonId, setCurrentLessonId] = useState(1);
  const [completedLessons, setCompletedLessons] = useState(new Set([1, 2]));
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
  const currentLesson = allLessons[currentIndex];
  const prevLesson = allLessons[currentIndex - 1];
  const nextLesson = allLessons[currentIndex + 1];

  const markComplete = (id) => {
    setCompletedLessons(prev => new Set([...prev, id]));
  };

  const totalLessons = allLessons.length;
  const completedCount = completedLessons.size;
  const progressPct = Math.round((completedCount / totalLessons) * 100);

  return (
    <div style={{
      minHeight: "100vh", background: "#F5F2EC",
      fontFamily: "'Jost', sans-serif",
      display: "flex", flexDirection: "column",
    }}>

      {/* ── TOP NAV ── */}
      <nav style={{
        background: "#3D3D35", height: "60px",
        display: "flex", alignItems: "center",
        padding: "0 24px", gap: "16px",
        position: "sticky", top: 0, zIndex: 100,
        borderBottom: "1px solid rgba(145,150,130,0.2)",
      }}>
        {/* Hamburger */}
        <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{
          background: "transparent", border: "none",
          color: "#919682", cursor: "pointer", fontSize: "1rem",
          padding: "4px 8px", borderRadius: "6px",
        }}>☰</button>

        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "5px" }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.2rem", fontWeight: 700, color: "#EAE6DE",
          }}>GrowEdu</span>
          <span style={{
            fontSize: "0.6rem", fontWeight: 600, color: "#6B7057",
            letterSpacing: "0.16em", textTransform: "uppercase",
          }}>Creative</span>
        </div>

        <span style={{ color: "rgba(145,150,130,0.4)", fontSize: "0.8rem" }}>›</span>

        <span style={{
          fontSize: "0.82rem", color: "#C4BFB0", fontWeight: 500,
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          maxWidth: "300px",
        }}>{courseTitle}</span>

        {/* Progress bar */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            flex: 1, background: "rgba(145,150,130,0.2)",
            borderRadius: "999px", height: "4px", maxWidth: "200px",
          }}>
            <div style={{
              width: `${progressPct}%`, height: "100%",
              background: "#919682", borderRadius: "999px",
              transition: "width 0.4s ease",
            }} />
          </div>
          <span style={{
            fontSize: "0.7rem", color: "#6B7057",
            fontFamily: "'Jost', sans-serif", whiteSpace: "nowrap",
          }}>{completedCount}/{totalLessons} lessons</span>
        </div>

        {/* Avatar */}
        <div style={{
          width: "32px", height: "32px", borderRadius: "50%",
          background: "#919682", display: "flex", alignItems: "center",
          justifyContent: "center", color: "#FDFCF9",
          fontSize: "0.75rem", fontWeight: 700, flexShrink: 0,
        }}>JR</div>
      </nav>

      {/* ── BODY ── */}
      <div style={{ display: "flex", flex: 1 }}>

        {/* ── SIDEBAR ── */}
        {sidebarOpen && (
          <div style={{
            width: "300px", flexShrink: 0,
            background: "#FDFCF9",
            borderRight: "1px solid #E0DBD2",
            overflowY: "auto",
            position: "sticky", top: "60px",
            height: "calc(100vh - 60px)",
          }}>
            {/* Sidebar header */}
            <div style={{
              padding: "20px 20px 16px",
              borderBottom: "1px solid #EAE6DE",
            }}>
              <div style={{ fontSize: "1.1rem", marginBottom: "6px", color: "#6B7057" }}>
                {courseIcon}
              </div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1rem", fontWeight: 700, color: "#3D3D35",
                lineHeight: 1.3, marginBottom: "10px",
              }}>{courseTitle}</div>
              {/* Mini progress */}
              <div style={{
                background: "#EAE6DE", borderRadius: "999px",
                height: "4px", overflow: "hidden",
              }}>
                <div style={{
                  width: `${progressPct}%`, height: "100%",
                  background: "#919682", borderRadius: "999px",
                  transition: "width 0.4s ease",
                }} />
              </div>
              <div style={{
                fontSize: "0.65rem", color: "#A8A49A",
                fontFamily: "'Jost', sans-serif", marginTop: "5px",
              }}>{progressPct}% complete</div>
            </div>

            {/* Module list */}
            {modules.map((mod, mi) => (
              <div key={mod.id}>
                <div style={{
                  padding: "12px 20px 8px",
                  fontSize: "0.65rem", fontWeight: 700,
                  color: "#A8A49A", letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: "'Jost', sans-serif",
                  background: "#F5F2EC",
                  borderBottom: "1px solid #EAE6DE",
                }}>
                  Module {mi + 1} · {mod.title}
                </div>
                {mod.lessons.map((lesson, li) => {
                  const isActive = lesson.id === currentLessonId;
                  const isDone = completedLessons.has(lesson.id);
                  const typeIcon = lesson.type === "quiz" ? "◎" : lesson.type === "text" ? "≡" : "▶";
                  return (
                    <button key={lesson.id} onClick={() => setCurrentLessonId(lesson.id)} style={{
                      width: "100%", textAlign: "left",
                      padding: "12px 20px",
                      background: isActive ? "#EAE6DE" : "transparent",
                      border: "none",
                      borderLeft: `3px solid ${isActive ? "#919682" : "transparent"}`,
                      borderBottom: "1px solid #F5F2EC",
                      cursor: "pointer", transition: "all 0.15s",
                      display: "flex", gap: "10px", alignItems: "flex-start",
                    }}>
                      <div style={{
                        width: "20px", height: "20px", borderRadius: "50%",
                        background: isDone ? "#919682" : "#EAE6DE",
                        border: `1.5px solid ${isDone ? "#919682" : "#C4BFB0"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "0.55rem", color: isDone ? "#FDFCF9" : "#C4BFB0",
                        flexShrink: 0, marginTop: "1px",
                      }}>{isDone ? "✓" : typeIcon}</div>
                      <div>
                        <div style={{
                          fontSize: "0.78rem", color: isActive ? "#3D3D35" : "#6B7057",
                          fontWeight: isActive ? 600 : 400,
                          fontFamily: "'Jost', sans-serif", lineHeight: 1.4,
                          marginBottom: "2px",
                        }}>{lesson.title}</div>
                        <div style={{
                          fontSize: "0.65rem", color: "#B5B1A7",
                          fontFamily: "'Jost', sans-serif",
                        }}>{lesson.duration}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        )}

        {/* ── MAIN CONTENT ── */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 48px 80px" }}>

            {/* Lesson meta */}
            <div style={{
              display: "flex", alignItems: "center", gap: "10px",
              marginBottom: "32px",
            }}>
              <span style={{
                fontSize: "0.65rem", color: "#A8A49A",
                fontFamily: "'Jost', sans-serif", letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}>{currentLesson.moduleTitle}</span>
              <span style={{ color: "#C4BFB0" }}>›</span>
              <span style={{
                fontSize: "0.65rem", color: "#919682",
                fontFamily: "'Jost', sans-serif", fontWeight: 600,
                letterSpacing: "0.08em", textTransform: "uppercase",
              }}>
                {currentLesson.type === "quiz" ? "Quiz" : currentLesson.type === "text" ? "Reading" : "Video"}
              </span>
              <span style={{ color: "#C4BFB0" }}>·</span>
              <span style={{
                fontSize: "0.65rem", color: "#C4BFB0",
                fontFamily: "'Jost', sans-serif",
              }}>{currentLesson.duration}</span>
            </div>

            {/* Lesson content */}
            {currentLesson.type === "text" && (
              <LessonText content={currentLesson.content} />
            )}
            {currentLesson.type === "quiz" && (
              <QuizComponent
                questions={currentLesson.questions}
                onComplete={() => {
                  markComplete(currentLesson.id);
                  if (nextLesson) setCurrentLessonId(nextLesson.id);
                }}
              />
            )}

            {/* Mark complete + navigation */}
            {currentLesson.type === "text" && (
              <div style={{
                marginTop: "48px", paddingTop: "32px",
                borderTop: "1px solid #EAE6DE",
                display: "flex", alignItems: "center",
                justifyContent: "space-between", flexWrap: "wrap", gap: "16px",
              }}>
                {/* Mark complete */}
                <button
                  onClick={() => markComplete(currentLesson.id)}
                  style={{
                    background: completedLessons.has(currentLesson.id) ? "#E8EBE3" : "#919682",
                    color: completedLessons.has(currentLesson.id) ? "#6B7057" : "#FDFCF9",
                    border: completedLessons.has(currentLesson.id) ? "1.5px solid #919682" : "none",
                    borderRadius: "10px", padding: "11px 24px",
                    fontSize: "0.78rem", fontWeight: 700, cursor: "pointer",
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    fontFamily: "'Jost', sans-serif", transition: "all 0.2s",
                  }}
                >
                  {completedLessons.has(currentLesson.id) ? "✓ Completed" : "Mark Complete"}
                </button>

                {/* Prev / Next */}
                <div style={{ display: "flex", gap: "10px" }}>
                  {prevLesson && (
                    <button onClick={() => setCurrentLessonId(prevLesson.id)} style={{
                      background: "transparent", color: "#919682",
                      border: "1.5px solid #C4BFB0", borderRadius: "10px",
                      padding: "11px 20px", fontSize: "0.78rem", fontWeight: 600,
                      cursor: "pointer", fontFamily: "'Jost', sans-serif",
                    }}>← Previous</button>
                  )}
                  {nextLesson && (
                    <button onClick={() => {
                      markComplete(currentLesson.id);
                      setCurrentLessonId(nextLesson.id);
                    }} style={{
                      background: "#919682", color: "#FDFCF9",
                      border: "none", borderRadius: "10px",
                      padding: "11px 24px", fontSize: "0.78rem", fontWeight: 700,
                      cursor: "pointer", letterSpacing: "0.06em",
                      textTransform: "uppercase", fontFamily: "'Jost', sans-serif",
                    }}>Next Lesson →</button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}