"use client";

import { useState } from "react";

// ── Coach Data ────────────────────────────────────────────────
const coach = {
  name: "Maren Ellis",
  title: "Master Certified Coach & NLP Practitioner",
  joinedDate: "March 2024",
  avatar: "ME",
};

const stats = [
  { value: "3", label: "Total Courses", icon: "◈" },
  { value: "4,820", label: "Total Students", icon: "👤" },
  { value: "$18,640", label: "Total Revenue", icon: "✦" },
  { value: "4.9", label: "Avg. Rating", icon: "★" },
];

const courses = [
  {
    id: 1,
    title: "The Clarity Framework",
    subtitle: "Finding your coaching north star",
    status: "published",
    category: "Mindset",
    level: "Beginner",
    price: 49,
    students: 1240,
    revenue: 60760,
    rating: 4.9,
    reviewCount: 186,
    completionRate: 74,
    lessons: 18,
    duration: "6h 20m",
    lastUpdated: "Feb 2026",
    cardBg: "#E8EBE3",
    icon: "✦",
    tag: "Most Popular",
  },
  {
    id: 2,
    title: "High-Performance Habits",
    subtitle: "Rewire your daily operating system",
    status: "published",
    category: "Mindset",
    level: "Intermediate",
    price: 59,
    students: 2103,
    revenue: 124077,
    rating: 5.0,
    reviewCount: 312,
    completionRate: 81,
    lessons: 20,
    duration: "8h 40m",
    lastUpdated: "Jan 2026",
    cardBg: "#E3E6DE",
    icon: "◎",
    tag: "Staff Pick",
  },
  {
    id: 3,
    title: "The Embodied Coach",
    subtitle: "Lead from presence, not performance",
    status: "draft",
    category: "Wellness",
    level: "Advanced",
    price: 79,
    students: 0,
    revenue: 0,
    rating: null,
    reviewCount: 0,
    completionRate: 0,
    lessons: 12,
    duration: "5h 10m",
    lastUpdated: "Today",
    cardBg: "#EDE9E1",
    icon: "◉",
    tag: null,
  },
];

const recentStudents = [
  { name: "Priya Nair", course: "The Clarity Framework", enrolled: "2 hours ago", progress: 88, avatar: "PN" },
  { name: "Tobias Renn", course: "High-Performance Habits", enrolled: "Yesterday", progress: 45, avatar: "TR" },
  { name: "Camille Osei", course: "The Clarity Framework", enrolled: "2 days ago", progress: 100, avatar: "CO" },
  { name: "Yuki Sato", course: "High-Performance Habits", enrolled: "3 days ago", progress: 22, avatar: "YS" },
  { name: "Jordan Vale", course: "The Clarity Framework", enrolled: "5 days ago", progress: 60, avatar: "JV" },
];

// ── Sub-components ────────────────────────────────────────────

const StatCard = ({ value, label, icon }) => (
  <div style={{
    background: "#FDFCF9", border: "1.5px solid #E0DBD2",
    borderRadius: "16px", padding: "24px 20px",
    flex: 1, minWidth: "140px",
  }}>
    <div style={{ fontSize: "1.3rem", color: "#919682", marginBottom: "8px" }}>{icon}</div>
    <div style={{
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "2rem", fontWeight: 700, color: "#3D3D35", lineHeight: 1,
      marginBottom: "6px",
    }}>{value}</div>
    <div style={{
      fontSize: "0.68rem", color: "#A8A49A",
      fontFamily: "'Jost', sans-serif",
      letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600,
    }}>{label}</div>
  </div>
);

const StatusBadge = ({ status }) => (
  <span style={{
    fontSize: "0.62rem", fontWeight: 700,
    letterSpacing: "0.1em", textTransform: "uppercase",
    padding: "3px 10px", borderRadius: "999px",
    fontFamily: "'Jost', sans-serif",
    background: status === "published" ? "#E8EBE3" : "#F0EDE6",
    color: status === "published" ? "#6B7057" : "#A8906A",
    border: `1px solid ${status === "published" ? "#919682" : "#C4A882"}`,
  }}>
  {status === "published" ? "✓ Published" : "○ Draft"}
  </span>
);

const MiniProgress = ({ pct }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <div style={{
      flex: 1, background: "#EAE6DE", borderRadius: "999px",
      height: "4px", overflow: "hidden",
    }}>
      <div style={{
        width: `${pct}%`, height: "100%",
        background: pct === 100 ? "#6B7057" : "#919682",
        borderRadius: "999px",
      }} />
    </div>
    <span style={{
      fontSize: "0.68rem", color: "#A8A49A",
      fontFamily: "'Jost', sans-serif", whiteSpace: "nowrap",
    }}>{pct}%</span>
  </div>
);

const CourseRow = ({ course, onEdit, onPublish }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{
      background: "#FDFCF9", border: "1.5px solid #E0DBD2",
      borderRadius: "16px", overflow: "hidden",
      transition: "border-color 0.2s",
    }}>
      {/* Top color band */}
      <div style={{
        background: course.cardBg, padding: "18px 22px",
        display: "flex", alignItems: "center", gap: "16px",
      }}>
        <div style={{ fontSize: "1.4rem", color: "#6B7057" }}>{course.icon}</div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.1rem", fontWeight: 700, color: "#3D3D35",
          }}>{course.title}</div>
          <div style={{
            fontSize: "0.72rem", color: "#919682",
            fontFamily: "'Jost', sans-serif", fontStyle: "italic",
          }}>{course.subtitle}</div>
        </div>
        <StatusBadge status={course.status} />
      </div>

      {/* Stats row */}
      <div style={{
        padding: "16px 22px",
        display: "flex", gap: "0", flexWrap: "wrap",
        borderBottom: "1px solid #EAE6DE",
      }}>
        {[
          [course.students.toLocaleString(), "Students"],
          [`$${(course.revenue / 1000).toFixed(1)}k`, "Revenue"],
          [course.rating ? `${course.rating} ★` : "—", "Rating"],
          [`${course.completionRate}%`, "Completion"],
          [course.lessons, "Lessons"],
        ].map(([val, label], i) => (
          <div key={label} style={{
            flex: 1, minWidth: "80px",
            padding: "0 16px",
            borderRight: i < 4 ? "1px solid #EAE6DE" : "none",
            borderLeft: i === 0 ? "none" : undefined,
            paddingLeft: i === 0 ? 0 : "16px",
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.2rem", fontWeight: 700, color: "#3D3D35",
            }}>{val}</div>
            <div style={{
              fontSize: "0.62rem", color: "#A8A49A",
              fontFamily: "'Jost', sans-serif",
              letterSpacing: "0.08em", textTransform: "uppercase",
            }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Footer actions */}
      <div style={{
        padding: "12px 22px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div style={{
          fontSize: "0.68rem", color: "#C4BFB0",
          fontFamily: "'Jost', sans-serif",
        }}>
          Updated {course.lastUpdated} · {course.duration} · {course.level}
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          {course.status === "draft" && (
            <button onClick={() => onPublish(course.id)} style={{
              background: "#919682", color: "#FDFCF9",
              border: "none", borderRadius: "8px",
              padding: "7px 16px", fontSize: "0.72rem",
              fontWeight: 700, cursor: "pointer",
              letterSpacing: "0.06em", textTransform: "uppercase",
              fontFamily: "'Jost', sans-serif",
            }}>Publish</button>
          )}
          <button onClick={() => onEdit(course.id)} style={{
            background: "transparent", color: "#919682",
            border: "1.5px solid #C4BFB0", borderRadius: "8px",
            padding: "7px 16px", fontSize: "0.72rem",
            fontWeight: 600, cursor: "pointer",
            fontFamily: "'Jost', sans-serif",
          }}>Edit Course</button>
          <button style={{
            background: "transparent", color: "#919682",
            border: "1.5px solid #C4BFB0", borderRadius: "8px",
            padding: "7px 16px", fontSize: "0.72rem",
            fontWeight: 600, cursor: "pointer",
            fontFamily: "'Jost', sans-serif",
          }}>View</button>
        </div>
      </div>
    </div>
  );
};

// ── Course Creator Modal ──────────────────────────────────────
const CourseCreatorModal = ({ onClose, onSave }) => {
  const [form, setForm] = useState({
    title: "", subtitle: "", category: "Mindset",
    level: "Beginner", price: "", description: "",
  });

  const update = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const inputStyle = {
    width: "100%", background: "#F5F2EC",
    border: "1.5px solid #E0DBD2", borderRadius: "10px",
    padding: "11px 14px", fontSize: "0.85rem",
    color: "#3D3D35", fontFamily: "'Jost', sans-serif",
    outline: "none",
  };

  const labelStyle = {
    fontSize: "0.7rem", fontWeight: 700,
    color: "#A8A49A", letterSpacing: "0.1em",
    textTransform: "uppercase", fontFamily: "'Jost', sans-serif",
    display: "block", marginBottom: "6px",
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 200,
      background: "rgba(61,61,53,0.6)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "24px",
    }}>
      <div style={{
        background: "#FDFCF9", borderRadius: "20px",
        width: "100%", maxWidth: "560px",
        maxHeight: "90vh", overflowY: "auto",
        boxShadow: "0 32px 64px -16px rgba(61,61,53,0.3)",
      }}>
        {/* Modal header */}
        <div style={{
          background: "#3D3D35", padding: "24px 28px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderRadius: "18px 18px 0 0",
        }}>
          <div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.4rem", fontWeight: 700, color: "#EAE6DE",
            }}>Create New Course</div>
            <div style={{
              fontSize: "0.72rem", color: "#6B7057",
              fontFamily: "'Jost', sans-serif", marginTop: "2px",
            }}>Start with the basics — you can add lessons later</div>
          </div>
          <button onClick={onClose} style={{
            background: "rgba(145,150,130,0.2)", border: "none",
            color: "#C4BFB0", borderRadius: "8px",
            width: "32px", height: "32px", cursor: "pointer",
            fontSize: "1rem",
          }}>✕</button>
        </div>

        {/* Form */}
        <div style={{ padding: "28px" }}>
          <div style={{ marginBottom: "18px" }}>
            <label style={labelStyle}>Course Title *</label>
            <input
              value={form.title}
              onChange={e => update("title", e.target.value)}
              placeholder="e.g. The Embodied Leader"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "18px" }}>
            <label style={labelStyle}>Subtitle</label>
            <input
              value={form.subtitle}
              onChange={e => update("subtitle", e.target.value)}
              placeholder="A short, compelling description"
              style={inputStyle}
            />
          </div>

          <div style={{ display: "flex", gap: "14px", marginBottom: "18px" }}>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Category</label>
              <select
                value={form.category}
                onChange={e => update("category", e.target.value)}
                style={{ ...inputStyle, cursor: "pointer" }}
              >
                {["Mindset", "Business", "Wellness"].map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Level</label>
              <select
                value={form.level}
                onChange={e => update("level", e.target.value)}
                style={{ ...inputStyle, cursor: "pointer" }}
              >
                {["Beginner", "Intermediate", "Advanced"].map(l => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label style={labelStyle}>Price (USD)</label>
              <input
                value={form.price}
                onChange={e => update("price", e.target.value)}
                placeholder="49"
                type="number"
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label style={labelStyle}>Course Description</label>
            <textarea
              value={form.description}
              onChange={e => update("description", e.target.value)}
              placeholder="What will students experience and learn in this course?"
              rows={4}
              style={{
                ...inputStyle, resize: "vertical",
                lineHeight: 1.6,
              }}
            />
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={onClose} style={{
              flex: 1, background: "transparent", color: "#919682",
              border: "1.5px solid #C4BFB0", borderRadius: "10px",
              padding: "12px", fontSize: "0.82rem", fontWeight: 600,
              cursor: "pointer", fontFamily: "'Jost', sans-serif",
            }}>Cancel</button>
            <button
              onClick={() => { onSave(form); onClose(); }}
              disabled={!form.title}
              style={{
                flex: 2,
                background: form.title ? "#919682" : "#C4BFB0",
                color: "#FDFCF9", border: "none", borderRadius: "10px",
                padding: "12px", fontSize: "0.82rem", fontWeight: 700,
                cursor: form.title ? "pointer" : "not-allowed",
                letterSpacing: "0.06em", textTransform: "uppercase",
                fontFamily: "'Jost', sans-serif",
              }}
            >
              Save as Draft →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Main Coach Dashboard ──────────────────────────────────────
export default function CoachDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [courseList, setCourseList] = useState(courses);
  const [showCreator, setShowCreator] = useState(false);
  const [notification, setNotification] = useState(null);

  const tabs = ["overview", "my courses", "students"];

  const notify = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handlePublish = (id) => {
    setCourseList(prev => prev.map(c =>
      c.id === id ? { ...c, status: "published" } : c
    ));
    notify("Course published successfully! ✦");
  };

  const handleEdit = (id) => {
    notify("Course editor coming in Phase 3b! ✦");
  };

  const handleSaveCourse = (form) => {
    const newCourse = {
      id: courseList.length + 1,
      title: form.title,
      subtitle: form.subtitle || "No subtitle yet",
      status: "draft",
      category: form.category,
      level: form.level,
      price: parseFloat(form.price) || 0,
      students: 0, revenue: 0, rating: null,
      reviewCount: 0, completionRate: 0,
      lessons: 0, duration: "0h 0m",
      lastUpdated: "Just now",
      cardBg: "#EAE6DE", icon: "◈", tag: null,
    };
    setCourseList(prev => [...prev, newCourse]);
    notify(`"${form.title}" saved as draft! ✦`);
  };

  const publishedCourses = courseList.filter(c => c.status === "published");
  const draftCourses = courseList.filter(c => c.status === "draft");
  const totalStudents = courseList.reduce((sum, c) => sum + c.students, 0);
  const totalRevenue = courseList.reduce((sum, c) => sum + c.revenue, 0);

  return (
    <div style={{ minHeight: "100vh", background: "#F5F2EC", fontFamily: "'Jost', sans-serif" }}>

      {/* Notification toast */}
      {notification && (
        <div style={{
          position: "fixed", top: "80px", right: "24px", zIndex: 300,
          background: "#3D3D35", color: "#EAE6DE",
          padding: "12px 20px", borderRadius: "10px",
          fontSize: "0.82rem", fontFamily: "'Jost', sans-serif",
          boxShadow: "0 8px 24px rgba(61,61,53,0.2)",
          animation: "fadeUp 0.3s ease",
        }}>{notification}</div>
      )}

      {/* Course creator modal */}
      {showCreator && (
        <CourseCreatorModal
          onClose={() => setShowCreator(false)}
          onSave={handleSaveCourse}
        />
      )}

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
          {["Browse Courses", "Student View"].map(item => (
            <span key={item} style={{
              fontSize: "0.85rem", color: "#919682",
              cursor: "pointer", fontWeight: 500,
            }}>{item}</span>
          ))}
          <button
            onClick={() => setShowCreator(true)}
            style={{
              background: "#919682", color: "#FDFCF9",
              border: "none", borderRadius: "9px", padding: "8px 18px",
              fontSize: "0.82rem", fontWeight: 600, cursor: "pointer",
              fontFamily: "'Jost', sans-serif", letterSpacing: "0.05em",
            }}>+ New Course</button>
          <div style={{
            width: "36px", height: "36px", borderRadius: "50%",
            background: "#919682", display: "flex", alignItems: "center",
            justifyContent: "center", color: "#FDFCF9",
            fontSize: "0.85rem", fontWeight: 700, cursor: "pointer",
          }}>{coach.avatar}</div>
        </div>
      </nav>

      {/* ── HEADER BAND ── */}
      <div style={{
        background: "#3D3D35", padding: "48px 48px 0",
        position: "relative", overflow: "hidden",
      }}>
        {[200, 340].map((size, i) => (
          <div key={i} style={{
            position: "absolute", width: `${size}px`, height: `${size}px`,
            borderRadius: "50%", border: "1px solid rgba(145,150,130,0.12)",
            top: `${-size/2 + 30}px`, right: `${-size/2 + 60}px`,
          }} />
        ))}
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Greeting */}
          <div style={{ marginBottom: "32px" }}>
            <div style={{
              fontSize: "0.7rem", color: "#6B7057",
              letterSpacing: "0.14em", textTransform: "uppercase",
              fontWeight: 600, marginBottom: "8px",
            }}>✦ Coach Portal</div>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 700, color: "#EAE6DE",
              letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "4px",
            }}>{coach.name}</h1>
            <p style={{
              color: "#6B7057", fontSize: "0.85rem", fontWeight: 300,
            }}>{coach.title} · Coach since {coach.joinedDate}</p>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex", gap: "16px", marginBottom: "32px", flexWrap: "wrap",
          }}>
            <StatCard value={publishedCourses.length} label="Published Courses" icon="◈" />
            <StatCard value={draftCourses.length} label="Drafts" icon="○" />
            <StatCard value={totalStudents.toLocaleString()} label="Total Students" icon="👤" />
            <StatCard value={`$${(totalRevenue/1000).toFixed(1)}k`} label="Total Revenue" icon="✦" />
            <StatCard value="4.9" label="Avg. Rating" icon="★" />
          </div>

          {/* Tabs */}
          <div style={{ display: "flex", gap: "0" }}>
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{
                background: "transparent",
                color: activeTab === tab ? "#EAE6DE" : "#6B7057",
                border: "none",
                borderBottom: `2px solid ${activeTab === tab ? "#919682" : "transparent"}`,
                padding: "12px 24px", fontSize: "0.8rem", fontWeight: 600,
                cursor: "pointer", letterSpacing: "0.08em",
                textTransform: "capitalize", transition: "all 0.15s",
                fontFamily: "'Jost', sans-serif",
              }}>{tab}</button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 48px 80px" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>

            {/* Left — courses */}
            <div style={{ flex: "1 1 580px" }}>
              <div style={{
                display: "flex", alignItems: "center",
                justifyContent: "space-between", marginBottom: "20px",
              }}>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem", fontWeight: 700, color: "#3D3D35",
                }}>Your Courses</h2>
                <button onClick={() => setShowCreator(true)} style={{
                  background: "transparent", color: "#919682",
                  border: "1.5px solid #C4BFB0", borderRadius: "8px",
                  padding: "7px 16px", fontSize: "0.75rem", fontWeight: 600,
                  cursor: "pointer", fontFamily: "'Jost', sans-serif",
                }}>+ New Course</button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {courseList.map(course => (
                  <CourseRow
                    key={course.id} course={course}
                    onEdit={handleEdit} onPublish={handlePublish}
                  />
                ))}
              </div>
            </div>

            {/* Right — students + activity */}
            <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: "24px" }}>

              {/* Recent enrollments */}
              <div style={{
                background: "#FDFCF9", border: "1.5px solid #E0DBD2",
                borderRadius: "18px", overflow: "hidden",
              }}>
                <div style={{
                  padding: "18px 20px", borderBottom: "1px solid #EAE6DE",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1rem", fontWeight: 700, color: "#3D3D35",
                  }}>Recent Students</h3>
                  <span style={{ fontSize: "0.68rem", color: "#919682", fontFamily: "'Jost', sans-serif" }}>
                    {totalStudents.toLocaleString()} total
                  </span>
                </div>
                {recentStudents.map((student, i) => (
                  <div key={i} style={{
                    padding: "12px 20px",
                    borderBottom: i < recentStudents.length - 1 ? "1px solid #F5F2EC" : "none",
                    display: "flex", gap: "10px", alignItems: "center",
                  }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "50%",
                      background: "#EAE6DE", flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.65rem", fontWeight: 700, color: "#919682",
                      fontFamily: "'Jost', sans-serif",
                    }}>{student.avatar}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: "0.78rem", fontWeight: 600, color: "#3D3D35",
                        fontFamily: "'Jost', sans-serif",
                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                      }}>{student.name}</div>
                      <div style={{
                        fontSize: "0.65rem", color: "#B5B1A7",
                        fontFamily: "'Jost', sans-serif", marginBottom: "4px",
                      }}>{student.course}</div>
                      <MiniProgress pct={student.progress} />
                    </div>
                    <div style={{
                      fontSize: "0.62rem", color: "#C4BFB0",
                      fontFamily: "'Jost', sans-serif", whiteSpace: "nowrap",
                    }}>{student.enrolled}</div>
                  </div>
                ))}
              </div>

              {/* Quick actions */}
              <div style={{
                background: "#FDFCF9", border: "1.5px solid #E0DBD2",
                borderRadius: "18px", padding: "20px",
              }}>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1rem", fontWeight: 700, color: "#3D3D35",
                  marginBottom: "14px",
                }}>Quick Actions</h3>
                {[
                  { label: "Create New Course", icon: "◈", action: () => setShowCreator(true) },
                  { label: "View Student Progress", icon: "◎", action: () => setActiveTab("students") },
                  { label: "Manage Courses", icon: "✦", action: () => setActiveTab("my courses") },
                ].map((item, i) => (
                  <button key={i} onClick={item.action} style={{
                    width: "100%", background: "#F5F2EC",
                    border: "1.5px solid #EAE6DE", borderRadius: "10px",
                    padding: "12px 14px", marginBottom: "8px",
                    display: "flex", alignItems: "center", gap: "10px",
                    cursor: "pointer", transition: "border-color 0.15s",
                    textAlign: "left",
                  }}>
                    <span style={{ color: "#919682", fontSize: "0.85rem" }}>{item.icon}</span>
                    <span style={{
                      fontSize: "0.8rem", color: "#3D3D35", fontWeight: 500,
                      fontFamily: "'Jost', sans-serif",
                    }}>{item.label}</span>
                    <span style={{ marginLeft: "auto", color: "#C4BFB0", fontSize: "0.8rem" }}>→</span>
                  </button>
                ))}
              </div>

              {/* Draft alert */}
              {draftCourses.length > 0 && (
                <div style={{
                  background: "#3D3D35", borderRadius: "18px",
                  padding: "22px 20px", textAlign: "center",
                }}>
                  <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>○</div>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.2rem", fontWeight: 700, color: "#EAE6DE",
                    marginBottom: "6px",
                  }}>
                    {draftCourses.length} Draft{draftCourses.length > 1 ? "s" : ""} Waiting
                  </div>
                  <p style={{
                    color: "#6B7057", fontSize: "0.75rem",
                    fontFamily: "'Jost', sans-serif", fontWeight: 300,
                    marginBottom: "14px",
                  }}>
                    {draftCourses[0].title} is ready to publish.
                  </p>
                  <button
                    onClick={() => handlePublish(draftCourses[0].id)}
                    style={{
                      background: "#919682", color: "#FDFCF9",
                      border: "none", borderRadius: "8px",
                      padding: "9px 20px", fontSize: "0.75rem",
                      fontWeight: 700, cursor: "pointer",
                      fontFamily: "'Jost', sans-serif",
                      letterSpacing: "0.06em", textTransform: "uppercase",
                    }}>Publish Now</button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* MY COURSES TAB */}
        {activeTab === "my courses" && (
          <div>
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between", marginBottom: "24px",
              flexWrap: "wrap", gap: "12px",
            }}>
              <div>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.6rem", fontWeight: 700, color: "#3D3D35",
                  marginBottom: "4px",
                }}>My Courses</h2>
                <p style={{
                  fontSize: "0.75rem", color: "#A8A49A",
                  fontFamily: "'Jost', sans-serif",
                }}>
                  {publishedCourses.length} published · {draftCourses.length} draft
                </p>
              </div>
              <button onClick={() => setShowCreator(true)} style={{
                background: "#919682", color: "#FDFCF9",
                border: "none", borderRadius: "10px", padding: "10px 22px",
                fontSize: "0.82rem", fontWeight: 700, cursor: "pointer",
                fontFamily: "'Jost', sans-serif", letterSpacing: "0.05em",
              }}>+ Create New Course</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {courseList.map(course => (
                <CourseRow
                  key={course.id} course={course}
                  onEdit={handleEdit} onPublish={handlePublish}
                />
              ))}
            </div>
          </div>
        )}

        {/* STUDENTS TAB */}
        {activeTab === "students" && (
          <div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.6rem", fontWeight: 700, color: "#3D3D35",
              marginBottom: "24px",
            }}>Student Overview</h2>
            <div style={{
              background: "#FDFCF9", border: "1.5px solid #E0DBD2",
              borderRadius: "18px", overflow: "hidden",
            }}>
              {/* Table header */}
              <div style={{
                padding: "14px 24px", background: "#F5F2EC",
                borderBottom: "1px solid #EAE6DE",
                display: "grid",
                gridTemplateColumns: "1fr 1.5fr 100px 120px",
                gap: "16px",
              }}>
                {["Student", "Course", "Progress", "Enrolled"].map(h => (
                  <div key={h} style={{
                    fontSize: "0.65rem", fontWeight: 700,
                    color: "#A8A49A", letterSpacing: "0.1em",
                    textTransform: "uppercase", fontFamily: "'Jost', sans-serif",
                  }}>{h}</div>
                ))}
              </div>
              {recentStudents.map((student, i) => (
                <div key={i} style={{
                  padding: "16px 24px",
                  borderBottom: i < recentStudents.length - 1 ? "1px solid #F5F2EC" : "none",
                  display: "grid",
                  gridTemplateColumns: "1fr 1.5fr 100px 120px",
                  gap: "16px", alignItems: "center",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      width: "32px", height: "32px", borderRadius: "50%",
                      background: "#EAE6DE", flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.65rem", fontWeight: 700, color: "#919682",
                    }}>{student.avatar}</div>
                    <span style={{
                      fontSize: "0.82rem", fontWeight: 600, color: "#3D3D35",
                      fontFamily: "'Jost', sans-serif",
                    }}>{student.name}</span>
                  </div>
                  <span style={{
                    fontSize: "0.78rem", color: "#6B7057",
                    fontFamily: "'Jost', sans-serif",
                  }}>{student.course}</span>
                  <MiniProgress pct={student.progress} />
                  <span style={{
                    fontSize: "0.72rem", color: "#B5B1A7",
                    fontFamily: "'Jost', sans-serif",
                  }}>{student.enrolled}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}