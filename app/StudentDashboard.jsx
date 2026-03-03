"use client";

import { useState } from "react";

// ── Palette (consistent with GrowEduCatalog) ─────────────────
// Main:    #919682  (sage)
// Dark:    #3D3D35  (deep greige)
// Mid:     #C4BFB0  (warm greige)
// Light:   #EAE6DE  (linen)
// Cream:   #F5F2EC  (background)
// White:   #FDFCF9
// Accent:  #6B7057  (deep sage)
// ─────────────────────────────────────────────────────────────

const student = {
  name: "Jordan Rivera",
  title: "Business & Mindset Coach",
  avatar: null,
  joinedDate: "January 2026",
  streak: 7,
  totalHours: 24,
  certificates: 1,
};

const enrolledCourses = [
  {
    id: 1,
    title: "The Clarity Framework",
    instructor: "Maren Ellis",
    category: "Mindset",
    totalLessons: 18,
    completedLessons: 14,
    lastLesson: "Identifying Your Core Values",
    nextLesson: "Building Your Vision Statement",
    cardBg: "#E8EBE3",
    icon: "✦",
    duration: "6h 20m",
  },
  {
    id: 2,
    title: "Business Systems for Coaches",
    instructor: "Jordan Vale",
    category: "Business",
    totalLessons: 24,
    completedLessons: 6,
    lastLesson: "Automating Client Onboarding",
    nextLesson: "Building Your CRM System",
    cardBg: "#EDE9E1",
    icon: "◈",
    duration: "10h 05m",
  },
  {
    id: 3,
    title: "High-Performance Habits",
    instructor: "Simone Brandt",
    category: "Mindset",
    totalLessons: 20,
    completedLessons: 20,
    lastLesson: "Sustaining Peak Performance",
    nextLesson: null,
    cardBg: "#E3E6DE",
    icon: "◎",
    duration: "8h 40m",
  },
];

const recentActivity = [
  { action: "Completed lesson", detail: "Identifying Your Core Values", course: "The Clarity Framework", time: "2 hours ago", icon: "✓" },
  { action: "Earned certificate", detail: "High-Performance Habits", course: "Certificate of Completion", time: "Yesterday", icon: "✦" },
  { action: "Started lesson", detail: "Automating Client Onboarding", course: "Business Systems for Coaches", time: "2 days ago", icon: "▶" },
  { action: "Enrolled in course", detail: "Business Systems for Coaches", course: "New enrollment", time: "5 days ago", icon: "◈" },
];

const upcomingLessons = [
  { course: "The Clarity Framework", lesson: "Building Your Vision Statement", duration: "22 min", icon: "✦", cardBg: "#E8EBE3" },
  { course: "Business Systems for Coaches", lesson: "Building Your CRM System", duration: "35 min", icon: "◈", cardBg: "#EDE9E1" },
];

// ── Sub-components ────────────────────────────────────────────

const ProgressRing = ({ pct, size = 56, stroke = 4 }) => {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  const isComplete = pct === 100;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#EAE6DE" strokeWidth={stroke} />
      <circle
        cx={size/2} cy={size/2} r={r} fill="none"
        stroke={isComplete ? "#6B7057" : "#919682"}
        strokeWidth={stroke}
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.6s ease" }}
      />
    </svg>
  );
};

const StatCard = ({ value, label, icon }) => (
  <div style={{
    background: "#FDFCF9",
    border: "1.5px solid #E0DBD2",
    borderRadius: "16px",
    padding: "24px 20px",
    flex: 1, minWidth: "120px",
    display: "flex", flexDirection: "column", gap: "8px",
  }}>
    <div style={{ fontSize: "1.4rem", color: "#919682" }}>{icon}</div>
    <div style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "2rem", fontWeight: 700, color: "#3D3D35",
      lineHeight: 1,
    }}>{value}</div>
    <div style={{
      fontSize: "0.7rem", color: "#A8A49A",
      fontFamily: "'Jost', sans-serif",
      letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600,
    }}>{label}</div>
  </div>
);

const CourseProgressCard = ({ course }) => {
  const [hovered, setHovered] = useState(false);
  const pct = Math.round((course.completedLessons / course.totalLessons) * 100);
  const isComplete = pct === 100;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#FDFCF9",
        border: `1.5px solid ${hovered ? "#919682" : "#E0DBD2"}`,
        borderRadius: "18px", overflow: "hidden",
        transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered ? "0 16px 32px -8px rgba(145,150,130,0.2)" : "0 2px 8px rgba(61,61,53,0.05)",
      }}
    >
      {/* Color band */}
      <div style={{
        background: course.cardBg,
        padding: "20px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div>
          <div style={{ fontSize: "1.4rem", color: "#6B7057", marginBottom: "6px" }}>{course.icon}</div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem", fontWeight: 700, color: "#3D3D35",
          }}>{course.title}</div>
          <div style={{
            fontSize: "0.72rem", color: "#919682",
            fontFamily: "'Jost', sans-serif", marginTop: "2px",
          }}>with {course.instructor}</div>
        </div>
        <div style={{ position: "relative", flexShrink: 0 }}>
          <ProgressRing pct={pct} size={56} stroke={4} />
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "0.65rem", fontWeight: 700,
            color: isComplete ? "#6B7057" : "#919682",
            fontFamily: "'Jost', sans-serif",
          }}>{pct}%</div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "16px 24px" }}>
        {/* Progress bar */}
        <div style={{
          background: "#EAE6DE", borderRadius: "999px",
          height: "5px", marginBottom: "14px", overflow: "hidden",
        }}>
          <div style={{
            width: `${pct}%`, height: "100%",
            background: isComplete ? "#6B7057" : "#919682",
            borderRadius: "999px",
            transition: "width 0.6s ease",
          }} />
        </div>

        <div style={{
          display: "flex", justifyContent: "space-between",
          fontSize: "0.72rem", color: "#B5B1A7",
          fontFamily: "'Jost', sans-serif", marginBottom: "16px",
        }}>
          <span>{course.completedLessons} of {course.totalLessons} lessons</span>
          <span>{course.duration}</span>
        </div>

        {isComplete ? (
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            background: "#E8EBE3", borderRadius: "10px",
            padding: "10px 14px",
          }}>
            <span style={{ color: "#6B7057", fontSize: "0.9rem" }}>✦</span>
            <span style={{
              fontSize: "0.75rem", color: "#6B7057", fontWeight: 600,
              fontFamily: "'Jost', sans-serif", letterSpacing: "0.04em",
            }}>Course Complete — View Certificate</span>
          </div>
        ) : (
          <div style={{
            background: "#F5F2EC", borderRadius: "10px",
            padding: "10px 14px",
          }}>
            <div style={{
              fontSize: "0.62rem", color: "#C4BFB0",
              fontFamily: "'Jost', sans-serif",
              letterSpacing: "0.1em", textTransform: "uppercase",
              marginBottom: "3px",
            }}>Up Next</div>
            <div style={{
              fontSize: "0.8rem", color: "#3D3D35", fontWeight: 500,
              fontFamily: "'Jost', sans-serif",
            }}>{course.nextLesson}</div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{
        padding: "12px 24px",
        borderTop: "1px solid #EAE6DE",
        display: "flex", justifyContent: "flex-end",
      }}>
        <button style={{
          background: isComplete ? "transparent" : (hovered ? "#6B7057" : "#919682"),
          color: isComplete ? "#919682" : "#FDFCF9",
          border: isComplete ? "1.5px solid #C4BFB0" : "none",
          borderRadius: "8px", padding: "7px 18px",
          fontSize: "0.72rem", fontWeight: 600, cursor: "pointer",
          letterSpacing: "0.06em", textTransform: "uppercase",
          transition: "all 0.2s", fontFamily: "'Jost', sans-serif",
        }}>
          {isComplete ? "Review Course" : "Continue →"}
        </button>
      </div>
    </div>
  );
};

// ── Main Dashboard ────────────────────────────────────────────
export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = ["overview", "my courses", "activity", "certificates"];
  const totalProgress = Math.round(
    enrolledCourses.reduce((sum, c) => sum + (c.completedLessons / c.totalLessons), 0)
    / enrolledCourses.length * 100
  );

  return (
    <div style={{ minHeight: "100vh", background: "#F5F2EC", fontFamily: "'Jost', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #F5F2EC; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.45s ease both; }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        background: "#FDFCF9",
        borderBottom: "1px solid #E0DBD2",
        padding: "0 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "66px", position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.55rem", fontWeight: 700, color: "#3D3D35",
          }}>GrowEdu</span>
          <span style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.75rem", fontWeight: 600, color: "#919682",
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
          {/* Avatar */}
          <div style={{
            width: "36px", height: "36px", borderRadius: "50%",
            background: "#919682",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#FDFCF9", fontSize: "0.85rem", fontWeight: 700,
            cursor: "pointer", fontFamily: "'Jost', sans-serif",
          }}>
            {student.name.split(" ").map(n => n[0]).join("")}
          </div>
        </div>
      </nav>

      {/* ── HEADER BAND ── */}
      <div style={{
        background: "#3D3D35",
        padding: "48px 48px 0",
        position: "relative", overflow: "hidden",
      }}>
        {/* Decorative rings */}
        {[200, 340].map((size, i) => (
          <div key={i} style={{
            position: "absolute",
            width: `${size}px`, height: `${size}px`,
            borderRadius: "50%",
            border: "1px solid rgba(145,150,130,0.12)",
            top: `${-size/2 + 30}px`, right: `${-size/2 + 60}px`,
          }} />
        ))}

        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Greeting */}
          <div className="fade-up" style={{ marginBottom: "32px" }}>
            <div style={{
              fontSize: "0.7rem", color: "#6B7057",
              letterSpacing: "0.14em", textTransform: "uppercase",
              fontWeight: 600, marginBottom: "8px",
            }}>
              ✦ Welcome back
            </div>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 700, color: "#EAE6DE",
              letterSpacing: "-0.02em", lineHeight: 1.1,
            }}>
              {student.name}
            </h1>
            <p style={{
              color: "#6B7057", fontSize: "0.85rem",
              marginTop: "4px", fontWeight: 300,
            }}>{student.title} · Member since {student.joinedDate}</p>
          </div>

          {/* Stats row */}
          <div className="fade-up" style={{
            display: "flex", gap: "16px", marginBottom: "32px",
            flexWrap: "wrap",
            animationDelay: "0.1s",
          }}>
            <StatCard value={enrolledCourses.length} label="Enrolled Courses" icon="◈" />
            <StatCard value={`${totalProgress}%`} label="Overall Progress" icon="◎" />
            <StatCard value={student.totalHours} label="Hours Learned" icon="⏱" />
            <StatCard value={`${student.streak}d`} label="Current Streak" icon="✦" />
            <StatCard value={student.certificates} label="Certificates" icon="▲" />
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: "0" }}>
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                background: "transparent",
                color: activeTab === tab ? "#EAE6DE" : "#6B7057",
                border: "none",
                borderBottom: `2px solid ${activeTab === tab ? "#919682" : "transparent"}`,
                padding: "12px 24px",
                fontSize: "0.8rem", fontWeight: 600, cursor: "pointer",
                letterSpacing: "0.08em", textTransform: "capitalize",
                transition: "all 0.15s", fontFamily: "'Jost', sans-serif",
              }}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 48px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>

            {/* Left col */}
            <div style={{ flex: "1 1 580px" }}>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.5rem", fontWeight: 700, color: "#3D3D35",
                marginBottom: "20px",
              }}>Continue Learning</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {enrolledCourses.filter(c => c.completedLessons < c.totalLessons).map((course, i) => (
                  <div key={course.id} className="fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                    <CourseProgressCard course={course} />
                  </div>
                ))}
              </div>

              {/* Completed */}
              {enrolledCourses.filter(c => c.completedLessons === c.totalLessons).length > 0 && (
                <>
                  <h2 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem", fontWeight: 700, color: "#3D3D35",
                    margin: "32px 0 20px",
                  }}>Completed</h2>
                  {enrolledCourses.filter(c => c.completedLessons === c.totalLessons).map(course => (
                    <CourseProgressCard key={course.id} course={course} />
                  ))}
                </>
              )}
            </div>

            {/* Right col */}
            <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: "24px" }}>

              {/* Up Next */}
              <div style={{
                background: "#FDFCF9",
                border: "1.5px solid #E0DBD2",
                borderRadius: "18px", overflow: "hidden",
              }}>
                <div style={{
                  padding: "18px 20px",
                  borderBottom: "1px solid #EAE6DE",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1rem", fontWeight: 700, color: "#3D3D35",
                  }}>Up Next</h3>
                  <span style={{ color: "#919682", fontSize: "0.9rem" }}>▶</span>
                </div>
                {upcomingLessons.map((item, i) => (
                  <div key={i} style={{
                    padding: "14px 20px",
                    borderBottom: i < upcomingLessons.length - 1 ? "1px solid #F5F2EC" : "none",
                    display: "flex", gap: "12px", alignItems: "flex-start",
                    cursor: "pointer",
                  }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "8px",
                      background: item.cardBg, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.9rem", color: "#6B7057",
                    }}>{item.icon}</div>
                    <div>
                      <div style={{
                        fontSize: "0.78rem", fontWeight: 600, color: "#3D3D35",
                        fontFamily: "'Jost', sans-serif", marginBottom: "2px",
                      }}>{item.lesson}</div>
                      <div style={{
                        fontSize: "0.68rem", color: "#B5B1A7",
                        fontFamily: "'Jost', sans-serif",
                      }}>{item.course} · {item.duration}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div style={{
                background: "#FDFCF9",
                border: "1.5px solid #E0DBD2",
                borderRadius: "18px", overflow: "hidden",
              }}>
                <div style={{
                  padding: "18px 20px",
                  borderBottom: "1px solid #EAE6DE",
                }}>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1rem", fontWeight: 700, color: "#3D3D35",
                  }}>Recent Activity</h3>
                </div>
                {recentActivity.map((item, i) => (
                  <div key={i} style={{
                    padding: "12px 20px",
                    borderBottom: i < recentActivity.length - 1 ? "1px solid #F5F2EC" : "none",
                    display: "flex", gap: "10px", alignItems: "flex-start",
                  }}>
                    <div style={{
                      width: "26px", height: "26px", borderRadius: "6px",
                      background: "#EAE6DE", flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.65rem", color: "#919682", fontWeight: 700,
                    }}>{item.icon}</div>
                    <div>
                      <div style={{
                        fontSize: "0.75rem", color: "#3D3D35", fontWeight: 500,
                        fontFamily: "'Jost', sans-serif",
                      }}>{item.detail}</div>
                      <div style={{
                        fontSize: "0.65rem", color: "#C4BFB0",
                        fontFamily: "'Jost', sans-serif", marginTop: "1px",
                      }}>{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Streak card */}
              <div style={{
                background: "#3D3D35",
                borderRadius: "18px", padding: "24px 20px",
                textAlign: "center",
              }}>
                <div style={{
                  fontSize: "2.5rem", marginBottom: "8px",
                }}>🌿</div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.8rem", fontWeight: 700, color: "#EAE6DE",
                  marginBottom: "4px",
                }}>{student.streak} Day Streak</div>
                <p style={{
                  color: "#6B7057", fontSize: "0.78rem",
                  fontFamily: "'Jost', sans-serif", fontWeight: 300,
                }}>
                  Keep going! You're building unstoppable momentum.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* MY COURSES TAB */}
        {activeTab === "my courses" && (
          <div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.6rem", fontWeight: 700, color: "#3D3D35",
              marginBottom: "24px",
            }}>My Courses</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
            }}>
              {enrolledCourses.map((course, i) => (
                <div key={course.id} className="fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                  <CourseProgressCard course={course} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ACTIVITY TAB */}
        {activeTab === "activity" && (
          <div style={{ maxWidth: "600px" }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.6rem", fontWeight: 700, color: "#3D3D35",
              marginBottom: "24px",
            }}>Activity Log</h2>
            <div style={{
              background: "#FDFCF9",
              border: "1.5px solid #E0DBD2",
              borderRadius: "18px", overflow: "hidden",
            }}>
              {recentActivity.map((item, i) => (
                <div key={i} className="fade-up" style={{
                  padding: "18px 24px",
                  borderBottom: i < recentActivity.length - 1 ? "1px solid #F5F2EC" : "none",
                  display: "flex", gap: "14px", alignItems: "center",
                  animationDelay: `${i * 0.07}s`,
                }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "10px",
                    background: "#EAE6DE", flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.8rem", color: "#919682", fontWeight: 700,
                  }}>{item.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: "0.82rem", color: "#3D3D35", fontWeight: 600,
                      fontFamily: "'Jost', sans-serif",
                    }}>{item.action}</div>
                    <div style={{
                      fontSize: "0.75rem", color: "#919682",
                      fontFamily: "'Jost', sans-serif", marginTop: "2px",
                    }}>{item.detail}</div>
                  </div>
                  <div style={{
                    fontSize: "0.68rem", color: "#C4BFB0",
                    fontFamily: "'Jost', sans-serif", whiteSpace: "nowrap",
                  }}>{item.time}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CERTIFICATES TAB */}
        {activeTab === "certificates" && (
          <div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.6rem", fontWeight: 700, color: "#3D3D35",
              marginBottom: "24px",
            }}>My Certificates</h2>
            <div style={{
              background: "#FDFCF9",
              border: "1.5px solid #E0DBD2",
              borderRadius: "18px", overflow: "hidden",
              maxWidth: "480px",
            }}>
              <div style={{
                background: "#E3E6DE",
                padding: "32px 32px 24px",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", right: "-20px", top: "-20px",
                  width: "100px", height: "100px",
                  borderRadius: "50%",
                  background: "rgba(145,150,130,0.15)",
                }} />
                <div style={{ fontSize: "2rem", marginBottom: "10px", color: "#6B7057" }}>◎</div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.25rem", fontWeight: 700, color: "#3D3D35",
                }}>High-Performance Habits</div>
                <div style={{
                  fontSize: "0.75rem", color: "#919682",
                  fontFamily: "'Jost', sans-serif", marginTop: "4px",
                }}>Certificate of Completion</div>
              </div>
              <div style={{ padding: "20px 32px" }}>
                <div style={{
                  fontSize: "0.72rem", color: "#B5B1A7",
                  fontFamily: "'Jost', sans-serif", marginBottom: "16px",
                }}>
                  Issued February 28, 2026 · Simone Brandt
                </div>
                <button style={{
                  background: "#919682", color: "#FDFCF9",
                  border: "none", borderRadius: "10px",
                  padding: "10px 24px", fontSize: "0.78rem",
                  fontWeight: 600, cursor: "pointer",
                  letterSpacing: "0.06em", textTransform: "uppercase",
                  fontFamily: "'Jost', sans-serif",
                }}>
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}