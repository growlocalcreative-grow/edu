"use client";

import { useState } from "react";

// ── Course Data ───────────────────────────────────────────────
const course = {
  id: 1,
  title: "The Clarity Framework",
  subtitle: "Finding your coaching north star",
  description: "A deeply practical, soul-level course for coaches who are ready to stop spinning and start leading with absolute clarity. Over 6 transformative hours, you'll dismantle the noise, reconnect with your core purpose, and build a vision so compelling your clients can feel it.",
  instructor: {
    name: "Maren Ellis",
    title: "Master Certified Coach & NLP Practitioner",
    bio: "Maren has spent 12 years helping high-performing coaches and executives cut through complexity to find their truest direction. Her proprietary Clarity Framework has been adopted by over 4,000 coaches globally.",
    courses: 3,
    students: 4820,
    rating: 4.9,
  },
  category: "Mindset",
  level: "Beginner",
  duration: "6h 20m",
  totalLessons: 18,
  students: 1240,
  rating: 4.9,
  reviewCount: 186,
  price: 49,
  cardBg: "#E8EBE3",
  icon: "✦",
  tag: "Most Popular",
  lastUpdated: "February 2026",
  includes: ["6h 20m on-demand content", "18 focused lessons", "Downloadable workbooks", "Certificate of completion", "Lifetime access"],
};

const learningOutcomes = [
  "Identify and articulate your unique coaching philosophy",
  "Build a personal vision statement that drives every decision",
  "Eliminate the self-doubt that clouds your coaching presence",
  "Design a values-based framework for client transformation",
  "Create clarity rituals that sustain peak performance",
  "Communicate your niche with magnetic precision",
];

const modules = [
  {
    id: 1,
    title: "Foundation — Understanding Clarity",
    lessons: 3,
    duration: "58 min",
    items: [
      { title: "What Clarity Actually Means for Coaches", duration: "18 min", free: true, type: "video" },
      { title: "The Fog Model — Why Most Coaches Stay Stuck", duration: "22 min", free: false, type: "video" },
      { title: "Your Clarity Baseline Assessment", duration: "18 min", free: false, type: "quiz" },
    ],
  },
  {
    id: 2,
    title: "Core Values — The Root System",
    lessons: 4,
    duration: "1h 12m",
    items: [
      { title: "Excavating Your Non-Negotiables", duration: "20 min", free: false, type: "video" },
      { title: "Values vs. Rules — A Critical Distinction", duration: "17 min", free: false, type: "video" },
      { title: "The Values Alignment Exercise", duration: "19 min", free: false, type: "text" },
      { title: "Module 2 Integration Quiz", duration: "16 min", free: false, type: "quiz" },
    ],
  },
  {
    id: 3,
    title: "Vision Architecture",
    lessons: 4,
    duration: "1h 24m",
    items: [
      { title: "What a Compelling Vision Actually Does", duration: "21 min", free: false, type: "video" },
      { title: "The 3-Horizon Vision Method", duration: "24 min", free: false, type: "video" },
      { title: "Writing Your Vision Statement", duration: "22 min", free: false, type: "text" },
      { title: "Vision Stress-Test Workshop", duration: "17 min", free: false, type: "video" },
    ],
  },
  {
    id: 4,
    title: "The Clarity Practice",
    lessons: 4,
    duration: "1h 18m",
    items: [
      { title: "Daily Clarity Rituals That Actually Work", duration: "19 min", free: false, type: "video" },
      { title: "Protecting Your Vision from Noise", duration: "22 min", free: false, type: "video" },
      { title: "Building Your Clarity Dashboard", duration: "20 min", free: false, type: "text" },
      { title: "30-Day Clarity Challenge", duration: "17 min", free: false, type: "video" },
    ],
  },
  {
    id: 5,
    title: "Communicating With Clarity",
    lessons: 3,
    duration: "48 min",
    items: [
      { title: "Your Niche as a Natural Extension of You", duration: "18 min", free: false, type: "video" },
      { title: "The Magnetic Positioning Formula", duration: "16 min", free: false, type: "video" },
      { title: "Final Integration & Next Steps", duration: "14 min", free: false, type: "video" },
    ],
  },
];

const reviews = [
  {
    id: 1,
    name: "Priya Nair",
    title: "Executive Coach",
    rating: 5,
    date: "February 2026",
    body: "This course completely rewired how I show up for my clients. The Vision Architecture module alone was worth 10x the price. Maren has a rare ability to make the abstract feel deeply practical.",
  },
  {
    id: 2,
    name: "Tobias Renn",
    title: "Business & Life Coach",
    rating: 5,
    date: "January 2026",
    body: "I've taken a lot of coaching courses. This is the first one that made me stop and actually do the work instead of just consuming content. The Clarity Baseline Assessment hit different.",
  },
  {
    id: 3,
    name: "Camille Osei",
    title: "Mindset Coach",
    rating: 4,
    date: "January 2026",
    body: "Beautifully structured and genuinely transformative. I'd love to see a follow-up course that goes deeper on the communication piece — but what's here is exceptional.",
  },
];

// ── Sub-components ────────────────────────────────────────────

const StarRow = ({ rating, size = "0.85rem" }) => (
  <span style={{ color: "#C4940A", fontSize: size, letterSpacing: "1px" }}>
    {"★".repeat(Math.floor(rating))}
    <span style={{ color: "#E0DBD2" }}>{"★".repeat(5 - Math.floor(rating))}</span>
  </span>
);

const LessonTypeIcon = ({ type }) => {
  const map = { video: "▶", text: "≡", quiz: "◎", audio: "♪" };
  return <span style={{ fontSize: "0.7rem", color: "#919682" }}>{map[type] || "▶"}</span>;
};

const ModuleAccordion = ({ module, index }) => {
  const [open, setOpen] = useState(index === 0);

  return (
    <div style={{
      border: "1.5px solid #E0DBD2",
      borderRadius: "14px", overflow: "hidden",
      transition: "border-color 0.2s",
      borderColor: open ? "#919682" : "#E0DBD2",
    }}>
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", background: open ? "#F5F2EC" : "#FDFCF9",
          border: "none", padding: "18px 22px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          cursor: "pointer", transition: "background 0.2s", textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div style={{
            width: "28px", height: "28px", borderRadius: "8px",
            background: open ? "#919682" : "#EAE6DE",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "0.7rem", fontWeight: 700,
            color: open ? "#FDFCF9" : "#919682",
            fontFamily: "'Jost', sans-serif",
            transition: "all 0.2s", flexShrink: 0,
          }}>{index + 1}</div>
          <div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1rem", fontWeight: 700, color: "#3D3D35",
            }}>{module.title}</div>
            <div style={{
              fontSize: "0.68rem", color: "#A8A49A",
              fontFamily: "'Jost', sans-serif", marginTop: "2px",
            }}>
              {module.lessons} lessons · {module.duration}
            </div>
          </div>
        </div>
        <span style={{
          color: "#919682", fontSize: "1rem",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.25s ease", flexShrink: 0,
        }}>⌄</span>
      </button>

      {/* Lesson list */}
      {open && (
        <div style={{ borderTop: "1px solid #EAE6DE" }}>
          {module.items.map((item, i) => (
            <div key={i} style={{
              padding: "13px 22px",
              borderBottom: i < module.items.length - 1 ? "1px solid #F5F2EC" : "none",
              display: "flex", alignItems: "center", gap: "12px",
              background: "#FDFCF9",
            }}>
              <LessonTypeIcon type={item.type} />
              <span style={{
                flex: 1, fontSize: "0.82rem", color: "#3D3D35",
                fontFamily: "'Jost', sans-serif",
              }}>{item.title}</span>
              {item.free && (
                <span style={{
                  fontSize: "0.6rem", color: "#6B7057",
                  background: "#E8EBE3", padding: "2px 8px",
                  borderRadius: "999px", fontWeight: 700,
                  fontFamily: "'Jost', sans-serif",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                }}>Free Preview</span>
              )}
              <span style={{
                fontSize: "0.7rem", color: "#B5B1A7",
                fontFamily: "'Jost', sans-serif", whiteSpace: "nowrap",
              }}>{item.duration}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ReviewCard = ({ review }) => (
  <div style={{
    background: "#FDFCF9",
    border: "1.5px solid #E0DBD2",
    borderRadius: "16px", padding: "22px 24px",
  }}>
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{
          width: "38px", height: "38px", borderRadius: "50%",
          background: "#EAE6DE",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "0.8rem", fontWeight: 700, color: "#919682",
          fontFamily: "'Jost', sans-serif", flexShrink: 0,
        }}>
          {review.name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <div style={{
            fontSize: "0.85rem", fontWeight: 700, color: "#3D3D35",
            fontFamily: "'Jost', sans-serif",
          }}>{review.name}</div>
          <div style={{
            fontSize: "0.68rem", color: "#A8A49A",
            fontFamily: "'Jost', sans-serif",
          }}>{review.title}</div>
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <StarRow rating={review.rating} />
        <div style={{
          fontSize: "0.65rem", color: "#C4BFB0",
          fontFamily: "'Jost', sans-serif", marginTop: "2px",
        }}>{review.date}</div>
      </div>
    </div>
    <p style={{
      fontSize: "0.82rem", color: "#6B7057", lineHeight: 1.7,
      fontFamily: "'Jost', sans-serif", fontStyle: "italic",
    }}>"{review.body}"</p>
  </div>
);

// ── Main Component ────────────────────────────────────────────
export default function CourseDetail() {
  const [enrolled, setEnrolled] = useState(false);
  const [expandAll, setExpandAll] = useState(false);

  const totalLessons = modules.reduce((sum, m) => sum + m.items.length, 0);

  return (
    <div style={{ minHeight: "100vh", background: "#F5F2EC", fontFamily: "'Jost', sans-serif" }}>

      {/* ── NAV ── */}
      <nav style={{
        background: "#FDFCF9", borderBottom: "1px solid #E0DBD2",
        padding: "0 48px", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: "66px",
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.55rem", fontWeight: 700, color: "#3D3D35",
          }}>GrowEdu</span>
          <span style={{
            fontFamily: "'Jost', sans-serif", fontSize: "0.75rem",
            fontWeight: 600, color: "#919682",
            letterSpacing: "0.16em", textTransform: "uppercase",
          }}>Creative</span>
        </div>
        <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          {["Browse Courses", "My Learning"].map(item => (
            <span key={item} style={{
              fontSize: "0.85rem", color: "#919682",
              cursor: "pointer", fontWeight: 500,
            }}>{item}</span>
          ))}
          <div style={{
            width: "36px", height: "36px", borderRadius: "50%",
            background: "#919682", display: "flex", alignItems: "center",
            justifyContent: "center", color: "#FDFCF9",
            fontSize: "0.85rem", fontWeight: 700, cursor: "pointer",
          }}>JR</div>
        </div>
      </nav>

      {/* ── HERO BAND ── */}
      <div style={{
        background: "#3D3D35", padding: "56px 48px 48px",
        position: "relative", overflow: "hidden",
      }}>
        {[240, 380].map((size, i) => (
          <div key={i} style={{
            position: "absolute", width: `${size}px`, height: `${size}px`,
            borderRadius: "50%", border: "1px solid rgba(145,150,130,0.1)",
            top: `${-size/2 + 40}px`, right: `${-size/2 + 80}px`,
            pointerEvents: "none",
          }} />
        ))}

        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div style={{
            fontSize: "0.7rem", color: "#6B7057", marginBottom: "20px",
            fontFamily: "'Jost', sans-serif", letterSpacing: "0.06em",
          }}>
            Courses <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#919682" }}>{course.category}</span>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "#C4BFB0" }}>{course.title}</span>
          </div>

          <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              {/* Tag */}
              {course.tag && (
                <div style={{
                  display: "inline-block", background: "#919682", color: "#FDFCF9",
                  fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.12em",
                  textTransform: "uppercase", padding: "3px 10px",
                  borderRadius: "999px", marginBottom: "16px",
                  fontFamily: "'Jost', sans-serif",
                }}>{course.tag}</div>
              )}

              <h1 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 4vw, 3.2rem)",
                fontWeight: 700, color: "#EAE6DE",
                lineHeight: 1.1, marginBottom: "12px",
                letterSpacing: "-0.02em",
              }}>{course.title}</h1>

              <p style={{
                color: "#919682", fontSize: "1.05rem",
                fontStyle: "italic", marginBottom: "20px",
                fontFamily: "'Cormorant Garamond', serif",
              }}>{course.subtitle}</p>

              <p style={{
                color: "#A8A49A", fontSize: "0.9rem", lineHeight: 1.75,
                maxWidth: "580px", fontWeight: 300, marginBottom: "28px",
              }}>{course.description}</p>

              {/* Meta row */}
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <StarRow rating={course.rating} size="1rem" />
                  <span style={{
                    fontSize: "0.78rem", color: "#C4BFB0",
                    fontFamily: "'Jost', sans-serif",
                  }}>
                    {course.rating} ({course.reviewCount} reviews)
                  </span>
                </div>
                <span style={{ color: "#6B7057", fontSize: "0.78rem" }}>
                  👤 {course.students.toLocaleString()} students
                </span>
                <span style={{ color: "#6B7057", fontSize: "0.78rem" }}>
                  ⏱ {course.duration}
                </span>
                <span style={{ color: "#6B7057", fontSize: "0.78rem" }}>
                  ◈ {totalLessons} lessons
                </span>
              </div>

              {/* Instructor */}
              <div style={{
                display: "flex", alignItems: "center", gap: "10px",
                marginTop: "24px",
              }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  background: "#919682", display: "flex", alignItems: "center",
                  justifyContent: "center", color: "#FDFCF9",
                  fontSize: "0.85rem", fontWeight: 700, flexShrink: 0,
                }}>ME</div>
                <div>
                  <div style={{
                    fontSize: "0.75rem", color: "#6B7057",
                    fontFamily: "'Jost', sans-serif",
                  }}>Created by</div>
                  <div style={{
                    fontSize: "0.9rem", color: "#EAE6DE", fontWeight: 600,
                    fontFamily: "'Jost', sans-serif",
                  }}>{course.instructor.name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        padding: "48px 48px 80px",
        display: "flex", gap: "40px", alignItems: "flex-start",
      }}>

        {/* ── LEFT: Main Content ── */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* What You'll Learn */}
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.8rem", fontWeight: 700, color: "#3D3D35",
              marginBottom: "20px", letterSpacing: "-0.01em",
            }}>What you'll learn</h2>
            <div style={{
              background: "#FDFCF9",
              border: "1.5px solid #E0DBD2",
              borderRadius: "16px", padding: "28px 32px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "14px",
            }}>
              {learningOutcomes.map((outcome, i) => (
                <div key={i} style={{
                  display: "flex", gap: "10px", alignItems: "flex-start",
                }}>
                  <span style={{
                    color: "#919682", fontSize: "0.75rem",
                    marginTop: "3px", flexShrink: 0,
                  }}>✦</span>
                  <span style={{
                    fontSize: "0.82rem", color: "#3D3D35", lineHeight: 1.6,
                    fontFamily: "'Jost', sans-serif",
                  }}>{outcome}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Curriculum */}
          <section style={{ marginBottom: "48px" }}>
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between", marginBottom: "20px",
              flexWrap: "wrap", gap: "12px",
            }}>
              <div>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.8rem", fontWeight: 700, color: "#3D3D35",
                  letterSpacing: "-0.01em", marginBottom: "4px",
                }}>Course Curriculum</h2>
                <p style={{
                  fontSize: "0.75rem", color: "#A8A49A",
                  fontFamily: "'Jost', sans-serif",
                }}>
                  {modules.length} modules · {totalLessons} lessons · {course.duration} total
                </p>
              </div>
              <button
                onClick={() => setExpandAll(!expandAll)}
                style={{
                  background: "transparent", color: "#919682",
                  border: "1.5px solid #C4BFB0", borderRadius: "8px",
                  padding: "7px 16px", fontSize: "0.75rem",
                  fontWeight: 600, cursor: "pointer",
                  fontFamily: "'Jost', sans-serif", letterSpacing: "0.06em",
                }}
              >
                {expandAll ? "Collapse All" : "Expand All"}
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {modules.map((module, i) => (
                <ModuleAccordion key={module.id} module={module} index={i} />
              ))}
            </div>
          </section>

          {/* Instructor */}
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.8rem", fontWeight: 700, color: "#3D3D35",
              marginBottom: "20px", letterSpacing: "-0.01em",
            }}>Your Instructor</h2>
            <div style={{
              background: "#FDFCF9", border: "1.5px solid #E0DBD2",
              borderRadius: "16px", padding: "28px 32px",
              display: "flex", gap: "24px", alignItems: "flex-start",
              flexWrap: "wrap",
            }}>
              <div style={{
                width: "72px", height: "72px", borderRadius: "50%",
                background: "#919682", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.6rem", fontWeight: 700, color: "#FDFCF9",
              }}>ME</div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.3rem", fontWeight: 700, color: "#3D3D35",
                  marginBottom: "2px",
                }}>{course.instructor.name}</div>
                <div style={{
                  fontSize: "0.78rem", color: "#919682",
                  fontFamily: "'Jost', sans-serif",
                  fontStyle: "italic", marginBottom: "14px",
                }}>{course.instructor.title}</div>
                <div style={{
                  display: "flex", gap: "20px", marginBottom: "16px",
                  flexWrap: "wrap",
                }}>
                  {[
                    [`★ ${course.instructor.rating}`, "Rating"],
                    [course.instructor.students.toLocaleString(), "Students"],
                    [course.instructor.courses, "Courses"],
                  ].map(([val, label]) => (
                    <div key={label}>
                      <div style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.2rem", fontWeight: 700, color: "#3D3D35",
                      }}>{val}</div>
                      <div style={{
                        fontSize: "0.65rem", color: "#A8A49A",
                        fontFamily: "'Jost', sans-serif",
                        letterSpacing: "0.08em", textTransform: "uppercase",
                      }}>{label}</div>
                    </div>
                  ))}
                </div>
                <p style={{
                  fontSize: "0.82rem", color: "#6B7057", lineHeight: 1.75,
                  fontFamily: "'Jost', sans-serif", fontWeight: 300,
                }}>{course.instructor.bio}</p>
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section>
            <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "20px" }}>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.8rem", fontWeight: 700, color: "#3D3D35",
                letterSpacing: "-0.01em",
              }}>Student Reviews</h2>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <StarRow rating={course.rating} size="1.1rem" />
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.2rem", fontWeight: 700, color: "#3D3D35",
                }}>{course.rating}</span>
                <span style={{
                  fontSize: "0.75rem", color: "#A8A49A",
                  fontFamily: "'Jost', sans-serif",
                }}>({course.reviewCount} reviews)</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {reviews.map(review => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </section>
        </div>

        {/* ── RIGHT: Sticky Sidebar ── */}
        <div style={{
          width: "320px", flexShrink: 0,
          position: "sticky", top: "86px",
        }}>
          <div style={{
            background: "#FDFCF9",
            border: "1.5px solid #E0DBD2",
            borderRadius: "20px", overflow: "hidden",
            boxShadow: "0 8px 32px -8px rgba(61,61,53,0.12)",
          }}>
            {/* Course thumbnail area */}
            <div style={{
              background: course.cardBg,
              padding: "32px 28px 24px",
              position: "relative", overflow: "hidden",
              textAlign: "center",
            }}>
              <div style={{
                position: "absolute", right: "-20px", bottom: "-20px",
                width: "100px", height: "100px",
                borderRadius: "60% 40% 55% 45%",
                background: "rgba(145,150,130,0.15)",
              }} />
              <div style={{
                fontSize: "3rem", marginBottom: "8px", color: "#6B7057",
              }}>{course.icon}</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem", fontWeight: 700, color: "#3D3D35",
              }}>{course.title}</div>
            </div>

            {/* Pricing & CTA */}
            <div style={{ padding: "24px 28px" }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2.4rem", fontWeight: 700, color: "#3D3D35",
                marginBottom: "16px",
              }}>
                ${course.price}
                <span style={{
                  fontSize: "0.8rem", color: "#C4BFB0",
                  fontFamily: "'Jost', sans-serif", marginLeft: "6px",
                }}>USD</span>
              </div>

              <button
                onClick={() => setEnrolled(!enrolled)}
                style={{
                  width: "100%",
                  background: enrolled ? "#6B7057" : "#919682",
                  color: "#FDFCF9", border: "none",
                  borderRadius: "12px", padding: "14px",
                  fontSize: "0.85rem", fontWeight: 700, cursor: "pointer",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  fontFamily: "'Jost', sans-serif",
                  transition: "background 0.2s",
                  marginBottom: "12px",
                }}
              >
                {enrolled ? "✓ Enrolled!" : "Enroll Now"}
              </button>

              <button style={{
                width: "100%", background: "transparent",
                color: "#919682", border: "1.5px solid #C4BFB0",
                borderRadius: "12px", padding: "12px",
                fontSize: "0.82rem", fontWeight: 600, cursor: "pointer",
                letterSpacing: "0.06em", fontFamily: "'Jost', sans-serif",
                marginBottom: "20px",
              }}>
                Try Free Preview
              </button>

              {/* Includes */}
              <div style={{
                borderTop: "1px solid #EAE6DE", paddingTop: "18px",
              }}>
                <div style={{
                  fontSize: "0.7rem", color: "#A8A49A",
                  fontFamily: "'Jost', sans-serif",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  fontWeight: 600, marginBottom: "12px",
                }}>This course includes</div>
                {course.includes.map((item, i) => (
                  <div key={i} style={{
                    display: "flex", gap: "8px", alignItems: "center",
                    marginBottom: "8px",
                  }}>
                    <span style={{ color: "#919682", fontSize: "0.65rem" }}>✦</span>
                    <span style={{
                      fontSize: "0.78rem", color: "#6B7057",
                      fontFamily: "'Jost', sans-serif",
                    }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Guarantee */}
              <div style={{
                marginTop: "18px", paddingTop: "18px",
                borderTop: "1px solid #EAE6DE",
                textAlign: "center",
              }}>
                <div style={{
                  fontSize: "0.7rem", color: "#C4BFB0",
                  fontFamily: "'Jost', sans-serif", lineHeight: 1.6,
                }}>
                  30-day satisfaction guarantee.<br />
                  Full refund, no questions asked.
                </div>
              </div>
            </div>
          </div>

          {/* Last updated */}
          <div style={{
            textAlign: "center", marginTop: "12px",
            fontSize: "0.68rem", color: "#C4BFB0",
            fontFamily: "'Jost', sans-serif",
          }}>
            Last updated {course.lastUpdated}
          </div>
        </div>
      </div>
    </div>
  );
}