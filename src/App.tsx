import { useState } from 'react'
import LiquidEther from './components/LiquidEther.tsx';
import './App.css'
import NavBar from './components/NavBar.tsx';
import TextType from './components/TextType.tsx';

// ── Project card data – swap in your own ──────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: 'Doc Chat RAG',
    tag: 'AI Based Web App',
    description: 'An AI based RAG app. Just upload a document and start chatting. Reduces LLM hallucinations by 100%.',
    image: '',
    link: '#',
    accent: '#5227FF',
  },
  {
    id: 2,
    title: 'Mind Space',
    tag: 'MOBILE & AI',
    description: 'An AI based mental health app which stores your entries in a vector database and keeps track and provides feedback to improve your mental and physical well being.',
    image: '',
    link: '#',
    accent: '#FF9FFC',
  },
  {
    id: 3,
    title: 'Termi-chat',
    tag: 'CLI based socket chat',
    description: 'A CLI based socket.io app which you can use to chat with your friends in private rooms and/or meet random people in the world.',
    image: '',
    link: '#',
    accent: '#B19EEF',
  },
  // {
  //   id: 4,
  //   title: 'Project Delta',
  //   tag: 'Mobile',
  //   description: 'A short one-liner about what this project does and the problem it solves.',
  //   image: '',
  //   link: '#',
  //   accent: '#5227FF',
  // },
];

const SKILLS = [
  'React', 'TypeScript', 'Node.js', 'Python',
  'LangChain', 'PostgreSQL', 'Docker', 'Flutter', 'Qdrant', 'MongoDB'
];

// ── Tiny reusable pill ────────────────────────────────────────────
function Pill({ label }: { label: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '4px 14px',
        borderRadius: 999,
        border: '1px solid rgba(178,158,239,0.35)',
        fontSize: 13,
        color: '#B19EEF',
        background: 'rgba(82,39,255,0.08)',
        letterSpacing: '0.04em',
        fontFamily: 'inherit',
      }}
    >
      {label}
    </span>
  );
}

// ── Project card ─────────────────────────────────────────────────
function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        borderRadius: 20,
        overflow: 'hidden',
        border: `1px solid ${hovered ? project.accent + '66' : 'rgba(178,158,239,0.12)'}`,
        background: 'rgba(6,1,17,0.6)',
        backdropFilter: 'blur(16px)',
        transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 20px 60px ${project.accent}22, 0 0 0 1px ${project.accent}33`
          : '0 4px 20px rgba(0,0,0,0.4)',
        cursor: 'pointer',
      }}
    >
      {/* Image / placeholder */}
      <div
        style={{
          width: '100%',
          aspectRatio: '16/9',
          background: project.image
            ? `url(${project.image}) center/cover no-repeat`
            : `linear-gradient(135deg, ${project.accent}22 0%, rgba(6,1,17,0.8) 100%)`,
          borderBottom: '1px solid rgba(178,158,239,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative grid overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(178,158,239,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(178,158,239,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />
        {!project.image && (
          <span style={{ fontSize: 36, opacity: 0.18, zIndex: 1 }}>◈</span>
        )}

        {/* Tag badge */}
        <span
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            padding: '3px 12px',
            borderRadius: 999,
            background: project.accent + '22',
            border: `1px solid ${project.accent}55`,
            color: project.accent,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            zIndex: 2,
          }}
        >
          {project.tag}
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '22px 24px 24px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: 18,
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-0.01em',
            }}
          >
            {project.title}
          </h3>
          {/* Arrow */}
          <span
            style={{
              color: project.accent,
              fontSize: 18,
              transition: 'transform 0.25s',
              transform: hovered ? 'translate(3px,-3px)' : 'translate(0,0)',
              display: 'inline-block',
            }}
          >
            ↗
          </span>
        </div>
        <p
          style={{
            margin: 0,
            color: 'rgba(178,158,239,0.7)',
            fontSize: 14,
            lineHeight: 1.6,
          }}
        >
          {project.description}
        </p>
      </div>
    </a>
  );
}

// ── Section heading ───────────────────────────────────────────────
function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div style={{ marginBottom: 56, textAlign: 'center' }}>
      <p
        style={{
          margin: '0 0 10px',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#5227FF',
        }}
      >
        {label}
      </p>
      <h2
        style={{
          margin: 0,
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 800,
          color: '#fff',
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

// ── Thin divider ──────────────────────────────────────────────────
function Divider() {
  return (
    <div
      style={{
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(82,39,255,0.4) 40%, rgba(255,159,252,0.3) 60%, transparent)',
        maxWidth: 800,
        margin: '0 auto',
      }}
    />
  );
}

// ── Main App ──────────────────────────────────────────────────────
function App() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire up to your backend / EmailJS / Formspree here
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: 12,
    border: '1px solid rgba(178,158,239,0.18)',
    background: 'rgba(82,39,255,0.06)',
    color: '#fff',
    fontSize: 15,
    outline: 'none',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  };

  return (
    <>
      {/* ── Fixed liquid background ── */}
      <div className="fixed inset-0 -z-10 bg-[#060111]">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.9}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={1000}
          autoRampDuration={0.6}
        />
      </div>

      <NavBar />

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 800, marginTop: '-80px' }}>
          <TextType
            typingSpeed={25}
            pauseDuration={1500}
            showCursor
            cursorCharacter="█"
            text={[
              'I am Sudhanshu.',
              'Developer. Writer. Creator.',
              "Let's build some amazing experiences!",
            ]}
            deletingSpeed={20}
            variableSpeed={{ min: 60, max: 120 }}
            cursorBlinkDuration={0.5}
            textColors={['#ffffff']}
            cursorClassName="text-white"
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
          />

          {/* Scroll cue */}
          <div
            style={{
              marginTop: 64,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              opacity: 0.5,
              animation: 'bob 2s ease-in-out infinite',
            }}
          >
            <span style={{ fontSize: 12, letterSpacing: '0.15em', color: '#B19EEF' }}>
              SCROLL
            </span>
            <span style={{ fontSize: 20, color: '#B19EEF' }}>↓</span>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bob {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(8px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════════
          PROJECTS
      ══════════════════════════════════════════════════════════ */}
      <Divider />
      <section
        id="projects"
        style={{ padding: 'clamp(80px, 12vw, 140px) clamp(20px, 6vw, 80px)' }}
      >
        <SectionHeading label="Selected work" title="Projects" />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
            gap: 24,
            maxWidth: 1200,
            margin: '0 auto',
          }}
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* View all link */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 28px',
              borderRadius: 999,
              border: '1px solid rgba(82,39,255,0.5)',
              color: '#B19EEF',
              fontSize: 14,
              textDecoration: 'none',
              letterSpacing: '0.04em',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(82,39,255,0.15)';
              (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = '#B19EEF';
            }}
          >
            View all projects ↗
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════════════════ */}
      <Divider />
      <section
        id="about"
        style={{ padding: 'clamp(80px, 12vw, 140px) clamp(20px, 6vw, 80px)' }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 64,
            alignItems: 'center',
          }}
        >
          {/* Text side */}
          <div>
            <p
              style={{
                margin: '0 0 10px',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#5227FF',
              }}
            >
              About me
            </p>
            <h2
              style={{
                margin: '0 0 24px',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}
            >
              Builder at heart,
              <br />
              <span style={{ color: '#B19EEF' }}>storyteller by craft.</span>
            </h2>
            <p
              style={{
                margin: '0 0 20px',
                color: 'rgba(178,158,239,0.75)',
                fontSize: 16,
                lineHeight: 1.8,
              }}
            >
              Hi, I'm Sudhanshu, a developer and writer who loves turning ideas into
              reality. I believe everything in this world tells a story and every idea should
              see it's light of day. Hence, everything i do turns into either stories or digital experiences.
            </p>
            <p
              style={{
                margin: '0 0 36px',
                color: 'rgba(178,158,239,0.6)',
                fontSize: 16,
                lineHeight: 1.8,
              }}
            >
              When I'm not coding I'm probably writing, exploring new forms of art, or
              trying to make something out of nothing. Even though ofcourse, law of conservation is a thing...
            </p>

            {/* Skills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {SKILLS.map((s) => (
                <Pill key={s} label={s} />
              ))}
            </div>
          </div>

          {/* Photo / decorative side */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: 280,
                height: 280,
              }}
            >
              {/* Rotating ring */}
              <div
                style={{
                  position: 'absolute',
                  inset: -18,
                  borderRadius: '50%',
                  border: '1px dashed rgba(82,39,255,0.35)',
                  animation: 'spin 18s linear infinite',
                }}
              />
              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

              {/* Photo placeholder — swap src with your photo */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(82,39,255,0.3) 0%, rgba(255,159,252,0.15) 100%)',
                  border: '1px solid rgba(178,158,239,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 80,
                  overflow: 'hidden',
                }}
              >
                {/* Replace with: <img src="/your-photo.jpg" style={{width:'100%',height:'100%',objectFit:'cover'}} /> */}
                <span style={{ opacity: 0.3 }}>◈</span>
              </div>

              {/* Floating accent dots */}
              {[
                { top: 8, right: -12, color: '#5227FF' },
                { bottom: 30, left: -20, color: '#FF9FFC' },
                { top: '50%', right: -28, color: '#B19EEF' },
              ].map((dot, i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: dot.color,
                    opacity: 0.7,
                    ...dot,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WRITING / BLOG LINKS  (optional section)
      ══════════════════════════════════════════════════════════ */}
      <Divider />
      <section
        id="writing"
        style={{ padding: 'clamp(80px, 12vw, 140px) clamp(20px, 6vw, 80px)' }}
      >
        <SectionHeading label="Words" title="Writing" />

        <div
          style={{
            maxWidth: 740,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {[
            { title: 'Your article title here', date: 'Jan 2025', tag: 'Essay' },
            { title: 'Another piece you wrote', date: 'Nov 2024', tag: 'Tutorial' },
            { title: 'Thoughts on design systems', date: 'Sep 2024', tag: 'Opinion' },
          ].map((post, i) => (
            <a
              key={i}
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 24px',
                borderRadius: 14,
                border: '1px solid transparent',
                textDecoration: 'none',
                transition: 'background 0.2s, border-color 0.2s',
                gap: 16,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(82,39,255,0.07)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(82,39,255,0.25)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'transparent';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 0 }}>
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#5227FF',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    color: '#fff',
                    fontSize: 16,
                    fontWeight: 500,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {post.title}
                </span>
                <Pill label={post.tag} />
              </div>
              <span style={{ color: 'rgba(178,158,239,0.5)', fontSize: 13, flexShrink: 0 }}>
                {post.date} ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════════════════ */}
      <Divider />
      <section
        id="contact"
        style={{ padding: 'clamp(80px, 12vw, 140px) clamp(20px, 6vw, 80px)' }}
      >
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <SectionHeading label="Say hello" title="Get in touch" />
          <p
            style={{
              color: 'rgba(178,158,239,0.65)',
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 48,
            }}
          >
            Whether you have a project in mind, want to collaborate, or just want to
            say hi — my inbox is always open.
          </p>

          {sent ? (
            <div
              style={{
                padding: '32px',
                borderRadius: 20,
                border: '1px solid rgba(82,39,255,0.3)',
                background: 'rgba(82,39,255,0.08)',
                color: '#B19EEF',
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              ✓ Message sent — I'll get back to you soon!
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <input
                  required
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = 'rgba(82,39,255,0.6)')}
                  onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = 'rgba(178,158,239,0.18)')}
                />
                <input
                  required
                  type="email"
                  placeholder="Your email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  style={inputStyle}
                  onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = 'rgba(82,39,255,0.6)')}
                  onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = 'rgba(178,158,239,0.18)')}
                />
              </div>
              <textarea
                required
                rows={5}
                placeholder="Your message…"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = 'rgba(82,39,255,0.6)')}
                onBlur={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = 'rgba(178,158,239,0.18)')}
              />
              <button
                type="submit"
                style={{
                  padding: '15px 36px',
                  borderRadius: 12,
                  border: 'none',
                  background: 'linear-gradient(135deg, #5227FF 0%, #8B5FFF 100%)',
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s, transform 0.15s',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = '0.88';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.opacity = '1';
                  (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                }}
              >
                Send message →
              </button>
            </form>
          )}

          {/* Social links */}
          <div style={{ marginTop: 52, display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
            {[
              { label: 'GitHub', href: '#' },
              { label: 'LinkedIn', href: '#' },
              { label: 'Twitter / X', href: '#' },
              { label: 'Resume', href: '#' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(178,158,239,0.6)',
                  fontSize: 14,
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#fff')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(178,158,239,0.6)')}
              >
                {label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════ */}
      <footer
        style={{
          textAlign: 'center',
          padding: '32px 24px 40px',
          color: 'rgba(178,158,239,0.3)',
          fontSize: 13,
          letterSpacing: '0.04em',
          borderTop: '1px solid rgba(178,158,239,0.06)',
        }}
      >
        © {new Date().getFullYear()} Sudhanshu — crafted with curiosity
      </footer>
    </>
  );
}

export default App;