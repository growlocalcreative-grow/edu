"use client";

import { useState, useRef, useEffect } from "react";

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

Each of these fogs feeds the others. Identity fog creates direction fog. Direction fog creates communication fog. And communication fog confirms the identity fog.

## The Antidote

Clarity comes from excavation, not addition. You don't need more frameworks, more certifications, or more content. You need to go *deeper* into what's already true about you.

## Your First Practice

Before moving on to the next lesson, take 10 minutes to journal on this question:

**What drew you to coaching — not the idea of it, but the specific moment you knew this was your path?**
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
- Avoiding putting yourself out there

The root of identity fog is almost always an **unexamined belief** about who gets to be a coach.

## Breaking Through Identity Fog

The breakthrough isn't confidence. Confidence is a byproduct. The breakthrough is **specificity**.

When you get radically specific about your story — the exact texture of the struggle you've moved through — something shifts. You stop trying to appeal to everyone and start resonating deeply with someone.

That specificity IS your qualification.

## This Week's Practice

Write a "Before & After" story in two paragraphs:
- **Before**: Who you were before your own transformation
- **After**: Who you are now, and what became possible
        `,
      },
      {
        id: 3, type: "quiz", title: "Your Clarity Baseline Assessment",
        duration: "18 min", free: false, completed: false,
        questions: [
          {
            id: "q1",
            question: "Which best describes 'Identity Fog'?",
            options: [
              "A lack of marketing skills",
              "Uncertainty about who you are as a coach, leading to borrowed methods",
              "Having too many clients to manage",
              "Difficulty with time management",
            ],
            correct: 1,
            explanation: "Identity fog is about not knowing deeply who you are as a coach — your methods feel borrowed and your voice is still forming.",
          },
          {
            id: "q2",
            question: "What is the correct order in which the fogs feed each other?",
            options: [
              "Communication Fog → Direction Fog → Identity Fog",
              "Direction Fog → Identity Fog → Communication Fog",
              "Identity Fog → Direction Fog → Communication Fog",
              "All three are independent",
            ],
            correct: 2,
            explanation: "Identity fog creates direction fog, which creates communication fog — a self-reinforcing cycle.",
          },
          {
            id: "q3",
            question: "What does Maren Ellis identify as the true antidote to clarity fog?",
            options: [
              "More certifications and training",
              "Better social media strategy",
              "Excavation — going deeper into what's already true about you",
              "Adding new frameworks to your toolkit",
            ],
            correct: 2,
            explanation: "Clarity comes from excavation, not addition.",
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

Real values show up in three places:

**1. What makes you angry** — Anger is a values violation detector.

**2. What makes you proud** — The moments where you think: *"That is exactly what I'm here to do."*

**3. What you protect at all costs** — Even when it costs you money, comfort, or relationships.

## Your Practice

Take 20 minutes and write freely on each of these three prompts. Don't filter. Don't be polite. The rawness is the data.
        `,
      },
    ],
  },
];

const allLessons = modules.flatMap(m =>
  m.lessons.map(l => ({ ...l, moduleTitle: m.title, moduleId: m.id }))
);

// ── Quick Prompt Suggestions ──────────────────────────────────
const quickPrompts = [
  { label: "Summarize this lesson", icon: "≡" },
  { label: "Give me a reflection prompt", icon: "◎" },
  { label: "Quiz me on this content", icon: "✦" },
  { label: "What should I do next?", icon: "→" },
  { label: "Give me a coaching prompt", icon: "◈" },
];

// ── AI Tutor Panel ────────────────────────────────────────────
const AITutorPanel = ({ lesson, courseTitle, onClose }) => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: `Hello! I'm your AI study companion for *${courseTitle}*. I'm here to help you go deeper — not just tell you what to think, but ask the questions that help you discover your own answers.\n\nWhat's on your mind about what you just read?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const systemPrompt = `You are a Socratic AI study companion for GrowEdu Creative, an LMS built for business and mindset coaches.

Your personality: Curious, warm, and Socratic. You rarely give direct answers — instead you ask thoughtful questions that help the student discover their own insights. You are encouraging but never sycophantic. You are concise — responses are 2-4 short paragraphs maximum.

Current course: ${courseTitle}
Current lesson: ${lesson.title}
Current module: ${lesson.moduleTitle}

Lesson content summary:
${lesson.content ? lesson.content.slice(0, 1200) : "This is a quiz lesson."}

Your capabilities:
- Answer questions about the lesson content using a Socratic approach
- Offer personalized coaching prompts tailored to the student's situation
- Summarize the lesson when asked (this is the ONE time you give a direct, clear answer)
- Generate reflection journal prompts that go deep
- Quiz the student on lesson concepts with thoughtful questions
- Suggest next steps based on what the student has shared

Always bring responses back to the student's own experience. Use phrases like "What does that bring up for you?", "Where do you notice that in your own practice?", "What would it mean if that were true for you?"

Format your responses cleanly. Use line breaks between paragraphs. Keep it conversational, not academic.`;

  const sendMessage = async (text) => {
    if (!text.trim() || loading) return;

    const userMsg = { role: "user", content: text };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: systemPrompt,
          messages: updatedMessages.map(m => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      const reply = data.content?.[0]?.text || "I'm having trouble responding right now. Please try again.";

      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Something went wrong connecting to the AI. Please check your connection and try again.",
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickPrompt = (prompt) => {
    sendMessage(prompt.label);
  };

  return (
    <div style={{
      width: "360px", flexShrink: 0,
      background: "#FDFCF9",
      borderLeft: "1px solid #E0DBD2",
      display: "flex", flexDirection: "column",
      height: "calc(100vh - 60px)",
      position: "sticky", top: "60px",
    }}>
      {/* Panel header */}
      <div style={{
        background: "#3D3D35",
        padding: "18px 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexShrink: 0,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "32px", height: "32px", borderRadius: "10px",
            background: "rgba(145,150,130,0.25)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1rem", color: "#919682",
          }}>✦</div>
          <div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1rem", fontWeight: 700, color: "#EAE6DE",
            }}>AI Study Companion</div>
            <div style={{
              fontSize: "0.62rem", color: "#6B7057",
              fontFamily: "'Jost', sans-serif", letterSpacing: "0.06em",
            }}>Powered by Claude</div>
          </div>
        </div>
        <button onClick={onClose} style={{
          background: "rgba(145,150,130,0.2)", border: "none",
          color: "#C4BFB0", borderRadius: "6px",
          width: "28px", height: "28px", cursor: "pointer",
          fontSize: "0.85rem", display: "flex",
          alignItems: "center", justifyContent: "center",
        }}>✕</button>
      </div>

      {/* Current lesson context */}
      <div style={{
        padding: "12px 16px",
        background: "#F5F2EC",
        borderBottom: "1px solid #EAE6DE",
        flexShrink: 0,
      }}>
        <div style={{
          fontSize: "0.62rem", color: "#A8A49A",
          fontFamily: "'Jost', sans-serif",
          letterSpacing: "0.08em", textTransform: "uppercase",
          marginBottom: "3px",
        }}>Currently studying</div>
        <div style={{
          fontSize: "0.78rem", color: "#6B7057", fontWeight: 600,
          fontFamily: "'Jost', sans-serif",
        }}>{lesson.title}</div>
      </div>

      {/* Messages */}
      <div style={{
        flex: 1, overflowY: "auto",
        padding: "16px",
        display: "flex", flexDirection: "column", gap: "12px",
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            display: "flex",
            justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
          }}>
            {msg.role === "assistant" && (
              <div style={{
                width: "24px", height: "24px", borderRadius: "6px",
                background: "#EAE6DE", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.6rem", color: "#919682", marginRight: "8px",
                alignSelf: "flex-start", marginTop: "2px",
              }}>✦</div>
            )}
            <div style={{
              maxWidth: "85%",
              background: msg.role === "user" ? "#919682" : "#F5F2EC",
              color: msg.role === "user" ? "#FDFCF9" : "#3D3D35",
              borderRadius: msg.role === "user"
                ? "14px 14px 4px 14px"
                : "14px 14px 14px 4px",
              padding: "10px 14px",
              fontSize: "0.8rem", lineHeight: 1.65,
              fontFamily: "'Jost', sans-serif", fontWeight: 300,
              border: msg.role === "assistant" ? "1px solid #EAE6DE" : "none",
            }}>
              {msg.content.split("\n").map((line, li) => (
                line ? <p key={li} style={{ margin: "0 0 6px" }}>{line}</p>
                  : <div key={li} style={{ height: "4px" }} />
              ))}
            </div>
          </div>
        ))}

        {/* Loading indicator */}
        {loading && (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{
              width: "24px", height: "24px", borderRadius: "6px",
              background: "#EAE6DE", flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.6rem", color: "#919682",
            }}>✦</div>
            <div style={{
              background: "#F5F2EC", border: "1px solid #EAE6DE",
              borderRadius: "14px 14px 14px 4px",
              padding: "10px 16px", display: "flex", gap: "4px",
            }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: "#919682",
                  animation: "pulse 1.2s ease infinite",
                  animationDelay: `${i * 0.2}s`,
                }} />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick prompts */}
      <div style={{
        padding: "10px 16px",
        borderTop: "1px solid #EAE6DE",
        flexShrink: 0,
      }}>
        <div style={{
          fontSize: "0.6rem", color: "#C4BFB0",
          fontFamily: "'Jost', sans-serif",
          letterSpacing: "0.1em", textTransform: "uppercase",
          marginBottom: "8px",
        }}>Quick prompts</div>
        <div style={{
          display: "flex", gap: "6px", flexWrap: "wrap",
        }}>
          {quickPrompts.map((prompt, i) => (
            <button key={i} onClick={() => handleQuickPrompt(prompt)}
              disabled={loading}
              style={{
                background: "transparent",
                border: "1px solid #E0DBD2",
                borderRadius: "999px", padding: "4px 10px",
                fontSize: "0.68rem", color: "#919682",
                cursor: loading ? "not-allowed" : "pointer",
                fontFamily: "'Jost', sans-serif",
                transition: "all 0.15s",
                opacity: loading ? 0.5 : 1,
                display: "flex", alignItems: "center", gap: "4px",
              }}>
              <span>{prompt.icon}</span>
              <span>{prompt.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div style={{
        padding: "12px 16px",
        borderTop: "1px solid #EAE6DE",
        flexShrink: 0,
        display: "flex", gap: "8px", alignItems: "flex-end",
      }}>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage(input);
            }
          }}
          placeholder="Ask anything about this lesson..."
          rows={2}
          style={{
            flex: 1, background: "#F5F2EC",
            border: "1.5px solid #E0DBD2", borderRadius: "10px",
            padding: "9px 12px", fontSize: "0.8rem",
            color: "#3D3D35", fontFamily: "'Jost', sans-serif",
            resize: "none", outline: "none", lineHeight: 1.5,
          }}
        />
        <button
          onClick={() => sendMessage(input)}
          disabled={!input.trim() || loading}
          style={{
            background: input.trim() && !loading ? "#919682" : "#C4BFB0",
            color: "#FDFCF9", border: "none", borderRadius: "10px",
            width: "38px", height: "38px", cursor: input.trim() && !loading ? "pointer" : "not-allowed",
            fontSize: "0.9rem", flexShrink: 0,
            transition: "background 0.2s",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>→</button>
      </div>
    </div>
  );
};

// ── Text Renderer ─────────────────────────────────────────────
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
            borderLeft: "3px solid #919682", paddingLeft: "20px",
            margin: "24px 0",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem", fontStyle: "italic", color: "#6B7057",
            lineHeight: 1.7,
          }}>{line.slice(2)}</blockquote>
        );
        if (line.startsWith("- ")) return (
          <div key={i} style={{ display: "flex", gap: "10px", margin: "6px 0" }}>
            <span style={{ color: "#919682", flexShrink: 0 }}>✦</span>
            <span style={{
              fontSize: "0.88rem", color: "#3D3D35", lineHeight: 1.7,
              fontFamily: "'Jost', sans-serif",
            }}>{line.slice(2)}</span>
          </div>
        );
        if (line.trim() === "") return <div key={i} style={{ height: "12px" }} />;
        const parts = line.split(/\*\*(.*?)\*\*/g);
        return (
          <p key={i} style={{
            fontSize: "0.92rem", color: "#4A4A42", lineHeight: 1.85,
            fontFamily: "'Jost', sans-serif", fontWeight: 300, margin: "6px 0",
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

// ── Quiz Component ────────────────────────────────────────────
const QuizComponent = ({ questions, onComplete }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = submitted ? questions.filter(q => answers[q.id] === q.correct).length : 0;
  const pct = submitted ? Math.round((score / questions.length) * 100) : 0;
  const passed = pct >= 70;

  return (
    <div>
      <h1 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.8rem", fontWeight: 700, color: "#3D3D35", marginBottom: "24px",
      }}>Module Quiz</h1>

      {submitted ? (
        <div>
          <div style={{
            background: passed ? "#E8EBE3" : "#F5EDE8",
            border: `1.5px solid ${passed ? "#919682" : "#C4806A"}`,
            borderRadius: "16px", padding: "24px", textAlign: "center", marginBottom: "24px",
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "3rem", fontWeight: 700,
              color: passed ? "#6B7057" : "#A0523A",
            }}>{pct}%</div>
            <div style={{
              fontSize: "0.85rem", fontWeight: 700,
              color: passed ? "#6B7057" : "#A0523A",
              fontFamily: "'Jost', sans-serif",
            }}>{passed ? "✦ Passed!" : "Not quite — try again"}</div>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            {!passed && (
              <button onClick={() => { setAnswers({}); setSubmitted(false); }} style={{
                background: "transparent", color: "#919682",
                border: "1.5px solid #C4BFB0", borderRadius: "10px",
                padding: "11px 20px", fontSize: "0.78rem", fontWeight: 600,
                cursor: "pointer", fontFamily: "'Jost', sans-serif",
              }}>Retry</button>
            )}
            {passed && (
              <button onClick={onComplete} style={{
                background: "#919682", color: "#FDFCF9", border: "none",
                borderRadius: "10px", padding: "11px 24px",
                fontSize: "0.78rem", fontWeight: 700, cursor: "pointer",
                fontFamily: "'Jost', sans-serif",
              }}>Continue →</button>
            )}
          </div>
        </div>
      ) : (
        <div>
          {questions.map((q, i) => (
            <div key={q.id} style={{
              background: "#FDFCF9", border: "1.5px solid #E0DBD2",
              borderRadius: "14px", padding: "20px 22px", marginBottom: "14px",
            }}>
              <div style={{
                fontSize: "0.92rem", fontWeight: 600, color: "#3D3D35",
                fontFamily: "'Jost', sans-serif", lineHeight: 1.55, marginBottom: "14px",
              }}>Q{i + 1}: {q.question}</div>
              {q.options.map((opt, oi) => (
                <button key={oi} onClick={() => setAnswers(a => ({ ...a, [q.id]: oi }))} style={{
                  width: "100%", textAlign: "left",
                  padding: "10px 14px", borderRadius: "10px", marginBottom: "6px",
                  border: `1.5px solid ${answers[q.id] === oi ? "#919682" : "#E0DBD2"}`,
                  background: answers[q.id] === oi ? "#F5F2EC" : "#FDFCF9",
                  color: "#3D3D35", fontSize: "0.82rem",
                  fontFamily: "'Jost', sans-serif", cursor: "pointer",
                }}>{opt}</button>
              ))}
            </div>
          ))}
          <button
            onClick={() => setSubmitted(true)}
            disabled={Object.keys(answers).length < questions.length}
            style={{
              background: Object.keys(answers).length < questions.length ? "#C4BFB0" : "#919682",
              color: "#FDFCF9", border: "none", borderRadius: "10px",
              padding: "12px 28px", fontSize: "0.82rem", fontWeight: 700,
              cursor: Object.keys(answers).length < questions.length ? "not-allowed" : "pointer",
              fontFamily: "'Jost', sans-serif",
            }}>Submit Answers</button>
        </div>
      )}
    </div>
  );
};

// ── Main Lesson Viewer with AI Tutor ─────────────────────────
export default function LessonViewer() {
  const [currentLessonId, setCurrentLessonId] = useState(1);
  const [completedLessons, setCompletedLessons] = useState(new Set([1, 2]));
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [tutorOpen, setTutorOpen] = useState(false);

  const currentIndex = allLessons.findIndex(l => l.id === currentLessonId);
  const currentLesson = allLessons[currentIndex];
  const prevLesson = allLessons[currentIndex - 1];
  const nextLesson = allLessons[currentIndex + 1];

  const markComplete = (id) => setCompletedLessons(prev => new Set([...prev, id]));

  const totalLessons = allLessons.length;
  const completedCount = completedLessons.size;
  const progressPct = Math.round((completedCount / totalLessons) * 100);

  return (
    <div style={{
      minHeight: "100vh", background: "#F5F2EC",
      fontFamily: "'Jost', sans-serif",
      display: "flex", flexDirection: "column",
    }}>
      <style>{`
        @keyframes pulse {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── TOP NAV ── */}
      <nav style={{
        background: "#3D3D35", height: "60px",
        display: "flex", alignItems: "center",
        padding: "0 24px", gap: "16px",
        position: "sticky", top: 0, zIndex: 100,
        borderBottom: "1px solid rgba(145,150,130,0.2)",
      }}>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{
          background: "transparent", border: "none",
          color: "#919682", cursor: "pointer", fontSize: "1rem", padding: "4px 8px",
        }}>☰</button>

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

        <span style={{ color: "rgba(145,150,130,0.4)" }}>›</span>
        <span style={{
          fontSize: "0.82rem", color: "#C4BFB0", fontWeight: 500,
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          maxWidth: "260px",
        }}>{courseTitle}</span>

        {/* Progress */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            flex: 1, background: "rgba(145,150,130,0.2)",
            borderRadius: "999px", height: "4px", maxWidth: "180px",
          }}>
            <div style={{
              width: `${progressPct}%`, height: "100%",
              background: "#919682", borderRadius: "999px",
              transition: "width 0.4s ease",
            }} />
          </div>
          <span style={{
            fontSize: "0.7rem", color: "#6B7057", whiteSpace: "nowrap",
          }}>{completedCount}/{totalLessons}</span>
        </div>

        {/* AI Tutor toggle button */}
        <button
          onClick={() => setTutorOpen(!tutorOpen)}
          style={{
            background: tutorOpen ? "#919682" : "rgba(145,150,130,0.2)",
            border: `1px solid ${tutorOpen ? "#919682" : "rgba(145,150,130,0.3)"}`,
            color: tutorOpen ? "#FDFCF9" : "#919682",
            borderRadius: "8px", padding: "6px 14px",
            fontSize: "0.75rem", fontWeight: 600, cursor: "pointer",
            fontFamily: "'Jost', sans-serif", letterSpacing: "0.06em",
            display: "flex", alignItems: "center", gap: "6px",
            transition: "all 0.2s",
          }}
        >
          <span>✦</span>
          <span>AI Tutor</span>
        </button>

        <div style={{
          width: "32px", height: "32px", borderRadius: "50%",
          background: "#919682", display: "flex", alignItems: "center",
          justifyContent: "center", color: "#FDFCF9",
          fontSize: "0.75rem", fontWeight: 700, flexShrink: 0,
        }}>JR</div>
      </nav>

      {/* ── BODY ── */}
      <div style={{ display: "flex", flex: 1 }}>

        {/* Curriculum Sidebar */}
        {sidebarOpen && (
          <div style={{
            width: "280px", flexShrink: 0,
            background: "#FDFCF9", borderRight: "1px solid #E0DBD2",
            overflowY: "auto", position: "sticky", top: "60px",
            height: "calc(100vh - 60px)",
          }}>
            <div style={{ padding: "18px 18px 14px", borderBottom: "1px solid #EAE6DE" }}>
              <div style={{ fontSize: "1rem", marginBottom: "5px", color: "#6B7057" }}>{courseIcon}</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.95rem", fontWeight: 700, color: "#3D3D35",
                marginBottom: "10px",
              }}>{courseTitle}</div>
              <div style={{ background: "#EAE6DE", borderRadius: "999px", height: "4px", overflow: "hidden" }}>
                <div style={{
                  width: `${progressPct}%`, height: "100%",
                  background: "#919682", borderRadius: "999px",
                }} />
              </div>
              <div style={{
                fontSize: "0.62rem", color: "#A8A49A",
                fontFamily: "'Jost', sans-serif", marginTop: "4px",
              }}>{progressPct}% complete</div>
            </div>

            {modules.map((mod, mi) => (
              <div key={mod.id}>
                <div style={{
                  padding: "10px 18px 7px",
                  fontSize: "0.62rem", fontWeight: 700, color: "#A8A49A",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  fontFamily: "'Jost', sans-serif",
                  background: "#F5F2EC", borderBottom: "1px solid #EAE6DE",
                }}>Module {mi + 1} · {mod.title}</div>
                {mod.lessons.map(lesson => {
                  const isActive = lesson.id === currentLessonId;
                  const isDone = completedLessons.has(lesson.id);
                  const typeIcon = lesson.type === "quiz" ? "◎" : "≡";
                  return (
                    <button key={lesson.id} onClick={() => setCurrentLessonId(lesson.id)} style={{
                      width: "100%", textAlign: "left",
                      padding: "11px 18px",
                      background: isActive ? "#EAE6DE" : "transparent",
                      border: "none",
                      borderLeft: `3px solid ${isActive ? "#919682" : "transparent"}`,
                      borderBottom: "1px solid #F5F2EC",
                      cursor: "pointer", transition: "all 0.15s",
                      display: "flex", gap: "9px", alignItems: "flex-start",
                    }}>
                      <div style={{
                        width: "18px", height: "18px", borderRadius: "50%",
                        background: isDone ? "#919682" : "#EAE6DE",
                        border: `1.5px solid ${isDone ? "#919682" : "#C4BFB0"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "0.5rem", color: isDone ? "#FDFCF9" : "#C4BFB0",
                        flexShrink: 0, marginTop: "2px",
                      }}>{isDone ? "✓" : typeIcon}</div>
                      <div>
                        <div style={{
                          fontSize: "0.76rem", color: isActive ? "#3D3D35" : "#6B7057",
                          fontWeight: isActive ? 600 : 400,
                          fontFamily: "'Jost', sans-serif", lineHeight: 1.4, marginBottom: "1px",
                        }}>{lesson.title}</div>
                        <div style={{
                          fontSize: "0.62rem", color: "#B5B1A7",
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

        {/* Main lesson content */}
        <div style={{ flex: 1, overflowY: "auto", minWidth: 0 }}>
          <div style={{ maxWidth: "760px", margin: "0 auto", padding: "44px 40px 80px" }}>
            {/* Breadcrumb */}
            <div style={{
              display: "flex", alignItems: "center", gap: "8px",
              marginBottom: "28px", flexWrap: "wrap",
            }}>
              <span style={{
                fontSize: "0.62rem", color: "#A8A49A",
                fontFamily: "'Jost', sans-serif", letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}>{currentLesson.moduleTitle}</span>
              <span style={{ color: "#C4BFB0" }}>›</span>
              <span style={{
                fontSize: "0.62rem", color: "#919682",
                fontFamily: "'Jost', sans-serif", fontWeight: 600,
                letterSpacing: "0.08em", textTransform: "uppercase",
              }}>
                {currentLesson.type === "quiz" ? "Quiz" : "Reading"} · {currentLesson.duration}
              </span>
            </div>

            {/* Lesson content */}
            {currentLesson.type === "text" && <LessonText content={currentLesson.content} />}
            {currentLesson.type === "quiz" && (
              <QuizComponent
                questions={currentLesson.questions}
                onComplete={() => {
                  markComplete(currentLesson.id);
                  if (nextLesson) setCurrentLessonId(nextLesson.id);
                }}
              />
            )}

            {/* Navigation */}
            {currentLesson.type === "text" && (
              <div style={{
                marginTop: "48px", paddingTop: "28px",
                borderTop: "1px solid #EAE6DE",
                display: "flex", alignItems: "center",
                justifyContent: "space-between", flexWrap: "wrap", gap: "14px",
              }}>
                <button
                  onClick={() => markComplete(currentLesson.id)}
                  style={{
                    background: completedLessons.has(currentLesson.id) ? "#E8EBE3" : "#919682",
                    color: completedLessons.has(currentLesson.id) ? "#6B7057" : "#FDFCF9",
                    border: completedLessons.has(currentLesson.id) ? "1.5px solid #919682" : "none",
                    borderRadius: "10px", padding: "10px 22px",
                    fontSize: "0.78rem", fontWeight: 700, cursor: "pointer",
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    fontFamily: "'Jost', sans-serif", transition: "all 0.2s",
                  }}
                >{completedLessons.has(currentLesson.id) ? "✓ Completed" : "Mark Complete"}</button>

                <div style={{ display: "flex", gap: "10px" }}>
                  {prevLesson && (
                    <button onClick={() => setCurrentLessonId(prevLesson.id)} style={{
                      background: "transparent", color: "#919682",
                      border: "1.5px solid #C4BFB0", borderRadius: "10px",
                      padding: "10px 18px", fontSize: "0.78rem", fontWeight: 600,
                      cursor: "pointer", fontFamily: "'Jost', sans-serif",
                    }}>← Previous</button>
                  )}
                  {nextLesson && (
                    <button onClick={() => {
                      markComplete(currentLesson.id);
                      setCurrentLessonId(nextLesson.id);
                    }} style={{
                      background: "#919682", color: "#FDFCF9", border: "none",
                      borderRadius: "10px", padding: "10px 22px",
                      fontSize: "0.78rem", fontWeight: 700, cursor: "pointer",
                      letterSpacing: "0.06em", textTransform: "uppercase",
                      fontFamily: "'Jost', sans-serif",
                    }}>Next Lesson →</button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* AI Tutor Panel */}
        {tutorOpen && (
          <AITutorPanel
            lesson={currentLesson}
            courseTitle={courseTitle}
            onClose={() => setTutorOpen(false)}
          />
        )}
      </div>
    </div>
  );
}