"use client"

import { useState } from "react";
// ── Palette ──────────────────────────────────────────────────────────────────
// Main:    #919682  (sage)
// Dark:    #3D3D35  (deep greige)
// Mid:     #C4BFB0  (warm greige)
// Light:   #EAE6DE  (linen)
// Cream:   #F5F2EC  (background)
// White:   #FDFCF9
// Accent:  #6B7057  (deep sage)
// ─────────────────────────────────────────────────────────────────────────────

const courses = [
  {
    id: 1,
    title: "The Clarity Framework",
    subtitle: "Finding your coaching north star",
    instructor: "Maren Ellis",
    category: "Mindset",
    level: "Beginner",
    duration: "6h 20m",
    students: 1240,
    rating: 4.9,
    price: 49,
    cardBg: "#E8EBE3",
    tag: "Most Popular",
    icon: "✦",
  },
  {
    id: 2,
    title: "Business Systems for Coaches",
    subtitle: "Scale without burning out",
    instructor: "Jordan Vale",
    category: "Business",
    level: "Intermediate",
    duration: "10h 05m",
    students: 874,
    rating: 4.8,
    price: 69,
    cardBg: "#EDE9E1",
    tag: "New",
    icon: "◈",
  },
  {
    id: 3,
    title: "High-Performance Habits",
    subtitle: "Rewire your daily operating system",
    instructor: "Simone Brandt",
    category: "Mindset",
    level: "Intermediate",
    duration: "8h 40m",
    students: 2103,
    rating: 5.0,
    price: 59,
    cardBg: "#E3E6DE",
    tag: "Staff Pick",
    icon: "◎",
  },
  {
    id: 4,
    title: "Client Acquisition Mastery",
    subtitle: "Build a pipeline that runs itself",
    instructor: "Taj Okafor",
    category: "Business",
    level: "Advanced",
    duration: "12h 15m",
    students: 659,
    rating: 4.7,
    price: 89,
    cardBg: "#EAE5DC",
    tag: null,
    icon: "▲",
  },
  {
    id: 5,
    title: "Somatic Leadership",
    subtitle: "Lead from the body, not just the mind",
    instructor: "Yuki Sato",
    category: "Wellness",
    level: "Beginner",
    duration: "5h 30m",
    students: 491,
    rating: 4.9,
    price: 39,
    cardBg: "#E6EAE3",
    tag: "Trending",
    icon: "◉",
  },
  {
    id: 6,
    title: "The Profitable Offer Suite",
    subtitle: "Design products clients can't resist",
    instructor: "Maren Ellis",
    category: "Business",
    level: "Advanced",
    duration: "9h 50m",
    students: 312,
    rating: 4.8,
    price: 79,
    cardBg: "#EDEAE3",
    tag: null,
    icon: "⬡",
  },
];

const categories = ["All", "Mindset", "Business", "Wellness"];

const LevelPip = ({ level }) => {
  const map = { Beginner: 1, Intermediate: 2, Advanced: 3 };
  const n = map[level] || 1;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
      {[1, 2, 3].map(i => (
        <div key={i} style={{
          width: "6px", height: "6px", borderRadius: "50%",
          background: i <= n ? "#919682" : "#D6D2C8",
          transition: "background 0.2s",
        }} />
      ))}
      <span style={{
        fontSize: "0.68rem", color: "#919682", marginLeft: "6px",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontStyle: "italic", letterSpacing: "0.04em",
      }}>{level}</span>
    </div>
  );
};

const CourseCard = ({ course, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#FDFCF9",
        border: `1.5px solid ${hovered ? "#919682" : "#E0DBD2"}`,
        borderRadius: "18px",
        overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 24px 48px -12px rgba(145,150,130,0.22)"
          : "0 2px 8px rgba(61,61,53,0.06)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        animationDelay: `${index * 0.07}s`,
      }}
    >
      {/* Top band */}
      <div style={{
        background: course.cardBg,
        padding: "28px 26px 22px",
        position: "relative",
        overflow: "hidden",
        minHeight: "140px",
      }}>
        {/* Organic blob decoration */}
        <div style={{
          position: "absolute", right: "-30px", bottom: "-30px",
          width: "120px", height: "120px",
          borderRadius: "60% 40% 55% 45%",
          background: "rgba(145,150,130,0.12)",
          transition: "transform 0.4s ease",
          transform: hovered ? "scale(1.25) rotate(10deg)" : "scale(1)",
        }} />

        {/* Tag */}
        {course.tag && (
          <div style={{
            display: "inline-block",
            background: "#919682", color: "#FDFCF9",
            fontSize: "0.6rem", fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            padding: "3px 10px", borderRadius: "999px",
            marginBottom: "16px",
            fontFamily: "'Jost', sans-serif",
          }}>
            {course.tag}
          </div>
        )}
        {!course.tag && <div style={{ marginBottom: "28px" }} />}

        <div style={{
          fontSize: "1.65rem", marginBottom: "10px",
          color: "#6B7057", lineHeight: 1,
        }}>{course.icon}</div>

        <div style={{
          fontSize: "1.05rem", fontWeight: 700,
          color: "#3D3D35", lineHeight: 1.3,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "1.2rem",
        }}>
          {course.title}
        </div>
        <div style={{
          fontSize: "0.78rem", color: "#919682", marginTop: "4px",
          fontFamily: "'Jost', sans-serif", fontStyle: "italic",
        }}>
          {course.subtitle}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "18px 26px", flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{
          fontSize: "0.75rem", color: "#A8A49A",
          fontFamily: "'Jost', sans-serif", letterSpacing: "0.03em",
        }}>
          with <span style={{ color: "#6B7057", fontWeight: 600 }}>{course.instructor}</span>
        </div>

        <LevelPip level={course.level} />

        <div style={{
          display: "flex", gap: "16px",
          fontSize: "0.72rem", color: "#B5B1A7",
          fontFamily: "'Jost', sans-serif",
        }}>
          <span>⏱ {course.duration}</span>
          <span>◈ {course.students.toLocaleString()} enrolled</span>
          <span>★ {course.rating}</span>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        padding: "14px 26px",
        borderTop: "1px solid #EAE6DE",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: hovered ? "#F5F2EC" : "transparent",
        transition: "background 0.2s",
      }}>
        <div>
          <span style={{
            fontSize: "1.4rem", fontWeight: 700,
            color: "#3D3D35",
            fontFamily: "'Cormorant Garamond', serif",
          }}>${course.price}</span>
          <span style={{
            fontSize: "0.7rem", color: "#C4BFB0",
            marginLeft: "4px", fontFamily: "'Jost', sans-serif",
          }}>USD</span>
        </div>
        <button style={{
          background: hovered ? "#6B7057" : "#919682",
          color: "#FDFCF9",
          border: "none", borderRadius: "10px",
          padding: "9px 20px", fontSize: "0.75rem",
          fontWeight: 600, cursor: "pointer",
          letterSpacing: "0.06em", textTransform: "uppercase",
          transition: "background 0.2s ease",
          fontFamily: "'Jost', sans-serif",
        }}>
          Enroll
        </button>
      </div>
    </div>
  );
};

export default function GrowEduCatalog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = courses.filter(c => {
    const matchCat = activeCategory === "All" || c.category === activeCategory;
    const matchSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#F5F2EC", fontFamily: "'Jost', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #F5F2EC; }
        input:focus { outline: none; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-anim {
          animation: fadeUp 0.5s ease both;
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        background: "#FDFCF9",
        borderBottom: "1px solid #E0DBD2",
        padding: "0 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "66px", position: "sticky", top: 0, zIndex: 100,
      }}>
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.55rem", fontWeight: 700, color: "#3D3D35",
            letterSpacing: "-0.01em",
          }}>GrowEdu</span>
          <span style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.75rem", fontWeight: 600, color: "#919682",
            letterSpacing: "0.16em", textTransform: "uppercase",
            alignSelf: "center",
          }}>Creative</span>
        </div>

        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {["Courses", "Coaches", "About"].map(item => (
            <span key={item} style={{
              fontSize: "0.85rem", color: "#919682", cursor: "pointer",
              fontWeight: 500, letterSpacing: "0.04em",
              transition: "color 0.15s",
            }}>{item}</span>
          ))}
          <button style={{
            background: "transparent",
            color: "#3D3D35", border: "1.5px solid #C4BFB0",
            borderRadius: "9px", padding: "7px 20px",
            fontSize: "0.82rem", fontWeight: 600, cursor: "pointer",
            fontFamily: "'Jost', sans-serif", letterSpacing: "0.05em",
            transition: "all 0.15s",
          }}>
            Sign In
          </button>
          <button style={{
            background: "#919682", color: "#FDFCF9",
            border: "none", borderRadius: "9px", padding: "7px 20px",
            fontSize: "0.82rem", fontWeight: 600, cursor: "pointer",
            fontFamily: "'Jost', sans-serif", letterSpacing: "0.05em",
          }}>
            Join Free
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div style={{
        background: "#3D3D35",
        padding: "90px 48px 80px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Texture rings */}
        {[280, 420, 560].map((size, i) => (
          <div key={i} style={{
            position: "absolute",
            width: `${size}px`, height: `${size}px`,
            borderRadius: "50%",
            border: "1px solid rgba(145,150,130,0.15)",
            top: `${-size / 2 + 40}px`, right: `${-size / 2 + 80}px`,
            pointerEvents: "none",
          }} />
        ))}
        {/* Sage glow */}
        <div style={{
          position: "absolute", right: "80px", top: "40px",
          width: "300px", height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(145,150,130,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "680px", position: "relative" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(145,150,130,0.15)",
            border: "1px solid rgba(145,150,130,0.3)",
            color: "#C4BFB0", fontSize: "0.7rem", fontWeight: 600,
            letterSpacing: "0.14em", textTransform: "uppercase",
            padding: "5px 14px", borderRadius: "999px", marginBottom: "28px",
          }}>
            <span style={{ color: "#919682" }}>✦</span>
            On-Demand Training for Coaches & Leaders
          </div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)",
            fontWeight: 700, color: "#EAE6DE",
            lineHeight: 1.08, marginBottom: "22px",
            letterSpacing: "-0.02em",
          }}>
            Grow your practice.<br />
            <em style={{ color: "#919682", fontStyle: "italic" }}>Elevate your impact.</em>
          </h1>

          <p style={{
            color: "#A8A49A", fontSize: "1rem", lineHeight: 1.75,
            marginBottom: "40px", maxWidth: "500px",
            fontWeight: 300,
          }}>
            Hyper-specific training built exclusively for business and mindset coaches
            who are ready to go deeper — not just wider.
          </p>

          {/* Search */}
          <div style={{
            display: "flex", gap: "10px", maxWidth: "480px",
          }}>
            <div style={{
              flex: 1, display: "flex", alignItems: "center",
              background: "rgba(255,255,255,0.06)",
              border: "1.5px solid rgba(145,150,130,0.3)",
              borderRadius: "12px", padding: "0 16px",
            }}>
              <span style={{ color: "#919682", marginRight: "10px", fontSize: "0.9rem" }}>⌕</span>
              <input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search courses, coaches..."
                style={{
                  flex: 1, background: "transparent",
                  border: "none", color: "#EAE6DE",
                  fontSize: "0.875rem", padding: "13px 0",
                  fontFamily: "'Jost', sans-serif",
                }}
              />
            </div>
            <button style={{
              background: "#919682", color: "#FDFCF9",
              border: "none", borderRadius: "12px",
              padding: "0 28px", fontSize: "0.85rem",
              fontWeight: 600, cursor: "pointer",
              letterSpacing: "0.06em", textTransform: "uppercase",
              fontFamily: "'Jost', sans-serif",
              whiteSpace: "nowrap",
            }}>
              Search
            </button>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", gap: "0",
          marginTop: "64px",
          paddingTop: "36px",
          borderTop: "1px solid rgba(145,150,130,0.2)",
          maxWidth: "480px",
        }}>
          {[["6", "Curated Courses"], ["5,679", "Active Coaches"], ["4.9", "Avg. Rating"]].map(([val, label], i) => (
            <div key={label} style={{
              flex: 1,
              paddingRight: "24px",
              borderRight: i < 2 ? "1px solid rgba(145,150,130,0.2)" : "none",
              paddingLeft: i > 0 ? "24px" : "0",
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2rem", fontWeight: 700, color: "#EAE6DE",
              }}>{val}</div>
              <div style={{
                color: "#6B7057", fontSize: "0.72rem",
                letterSpacing: "0.1em", textTransform: "uppercase",
                fontWeight: 600, marginTop: "2px",
              }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CATALOG ── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 48px 80px" }}>

        {/* Section header + filters */}
        <div style={{
          display: "flex", alignItems: "flex-end",
          justifyContent: "space-between", marginBottom: "40px",
          flexWrap: "wrap", gap: "20px",
        }}>
          <div>
            <p style={{
              fontSize: "0.7rem", letterSpacing: "0.16em",
              textTransform: "uppercase", color: "#919682",
              fontWeight: 600, marginBottom: "6px",
            }}>
              ✦ Course Library
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "2.1rem", fontWeight: 700,
              color: "#3D3D35", letterSpacing: "-0.01em",
            }}>
              What will you master?
            </h2>
          </div>

          {/* Category pills */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} style={{
                background: activeCategory === cat ? "#919682" : "transparent",
                color: activeCategory === cat ? "#FDFCF9" : "#919682",
                border: `1.5px solid ${activeCategory === cat ? "#919682" : "#C4BFB0"}`,
                borderRadius: "999px", padding: "7px 20px",
                fontSize: "0.78rem", fontWeight: 600, cursor: "pointer",
                transition: "all 0.18s ease",
                fontFamily: "'Jost', sans-serif", letterSpacing: "0.06em",
              }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        <p style={{
          fontSize: "0.75rem", color: "#C4BFB0", marginBottom: "28px",
          fontFamily: "'Jost', sans-serif", letterSpacing: "0.04em",
        }}>
          Showing {filtered.length} of {courses.length} courses
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(316px, 1fr))",
            gap: "24px",
          }}>
            {filtered.map((course, i) => (
              <div key={course.id} className="card-anim" style={{ animationDelay: `${i * 0.08}s` }}>
                <CourseCard course={course} index={i} />
              </div>
            ))}
          </div>
        ) : (
          <div style={{
            textAlign: "center", padding: "100px 20px",
            color: "#C4BFB0",
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "3rem", marginBottom: "12px", color: "#D6D2C8",
            }}>✦</div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.9rem", letterSpacing: "0.06em" }}>
              No courses found for "{searchQuery}"
            </p>
          </div>
        )}
      </div>

      {/* ── CTA BAND ── */}
      <div style={{
        background: "#919682",
        padding: "60px 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "24px",
      }}>
        <div>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "2rem", fontWeight: 700, color: "#FDFCF9",
            marginBottom: "8px", letterSpacing: "-0.01em",
          }}>
            Ready to grow?
          </h3>
          <p style={{ color: "#EAE6DE", fontSize: "0.9rem", fontWeight: 300, maxWidth: "400px" }}>
            Join thousands of coaches building sustainable, impactful practices.
          </p>
        </div>
        <button style={{
          background: "#3D3D35", color: "#EAE6DE",
          border: "none", borderRadius: "12px",
          padding: "16px 36px", fontSize: "0.875rem",
          fontWeight: 600, cursor: "pointer",
          letterSpacing: "0.08em", textTransform: "uppercase",
          fontFamily: "'Jost', sans-serif",
        }}>
          Start for Free →
        </button>
      </div>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#3D3D35",
        padding: "32px 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "12px",
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.2rem", fontWeight: 700, color: "#C4BFB0",
          }}>GrowEdu</span>
          <span style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "0.65rem", fontWeight: 600, color: "#6B7057",
            letterSpacing: "0.16em", textTransform: "uppercase",
          }}>Creative</span>
        </div>
        <p style={{
          color: "#6B7057", fontSize: "0.75rem",
          fontFamily: "'Jost', sans-serif", letterSpacing: "0.05em",
        }}>
          © 2026 GrowEdu Creative · Built with Next.js + Supabase
        </p>
      </footer>
    </div>
  );
}
