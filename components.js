(function(){
// Hero visualization — an interactive "workflow" diagram of iPSC → CRISPR → readout
// Shared by all three directions, restyled by theme.

const {
  useState,
  useEffect,
  useRef
} = React;
function WorkflowDiagram({
  theme,
  onNodeClick
}) {
  const [active, setActive] = useState(2); // which node highlighted
  const steps = [{
    k: "PATIENT",
    t: "Patient cell",
    sub: "Skin or blood sample",
    glyph: "◐",
    link: null
  }, {
    k: "IPSC",
    t: "iPSC",
    sub: "Reprogrammed",
    glyph: "○",
    link: "reprogramming"
  }, {
    k: "CARDIO",
    t: "Cardiovascular cells & organoid",
    sub: "Differentiated",
    glyph: "♡",
    link: "disease"
  }, {
    k: "CRISPR",
    t: "CRISPR screen",
    sub: "100k+ sgRNAs",
    glyph: "✕",
    link: "crispr"
  }, {
    k: "PERTURB",
    t: "Perturb-seq",
    sub: "Single-cell readout",
    glyph: "⋮⋮",
    link: "perturbseq"
  }, {
    k: "TARGET",
    t: "Drug target",
    sub: "Validated hit",
    glyph: "◆",
    link: "population"
  }];

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % steps.length), 2200);
    return () => clearInterval(id);
  }, []);
  const accent = theme === 'specimen' ? '#d4ff4f' : theme === 'clinical' ? '#2b5fff' : '#7a1e1e';
  const line = theme === 'specimen' ? 'rgba(212,255,79,0.25)' : theme === 'clinical' ? 'rgba(43,95,255,0.22)' : 'rgba(122,30,30,0.20)';
  const textMuted = theme === 'specimen' ? 'rgba(240,240,235,0.55)' : 'rgba(0,0,0,0.5)';
  const textPrimary = theme === 'specimen' ? '#f0f0eb' : '#111';
  return /*#__PURE__*/React.createElement("div", {
    className: "workflow",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1200 220",
    style: {
      width: '100%',
      height: 'auto',
      display: 'block',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "80",
    y1: "110",
    x2: "1120",
    y2: "110",
    stroke: line,
    strokeWidth: "1.5",
    strokeDasharray: "3 4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "80",
    y1: "110",
    x2: 80 + active / (steps.length - 1) * 1040,
    y2: "110",
    stroke: accent,
    strokeWidth: "2",
    style: {
      transition: 'x2 0.8s cubic-bezier(.6,.2,.2,1)'
    }
  }), steps.map((s, i) => {
    const x = 80 + i / (steps.length - 1) * 1040;
    const isActive = i === active;
    const isPast = i < active;
    return /*#__PURE__*/React.createElement("g", {
      key: s.k,
      onClick: () => {
        setActive(i);
        if (s.link && onNodeClick) onNodeClick(s.link);
      },
      style: {
        cursor: s.link ? 'pointer' : 'default'
      }
    }, /*#__PURE__*/React.createElement("title", null, s.link ? `Go to research → ${s.t}` : s.t), /*#__PURE__*/React.createElement("circle", {
      cx: x,
      cy: "110",
      r: isActive ? 26 : 18,
      fill: isActive ? accent : isPast ? accent : theme === 'specimen' ? '#0f0f0e' : '#fff',
      stroke: isPast || isActive ? accent : line,
      strokeWidth: "1.5",
      style: {
        transition: 'all 0.5s cubic-bezier(.6,.2,.2,1)'
      }
    }), /*#__PURE__*/React.createElement("text", {
      x: x,
      y: 115,
      fill: isActive ? theme === 'specimen' ? '#0f0f0e' : '#fff' : isPast ? theme === 'specimen' ? '#0f0f0e' : '#fff' : textMuted,
      fontSize: "14",
      textAnchor: "middle",
      fontFamily: theme === 'specimen' ? 'JetBrains Mono, monospace' : 'inherit'
    }, s.glyph), /*#__PURE__*/React.createElement("text", {
      x: x,
      y: "62",
      fill: isActive ? textPrimary : textMuted,
      fontSize: "9",
      fontFamily: "JetBrains Mono, monospace",
      textAnchor: "middle",
      letterSpacing: "0.1em",
      style: {
        transition: 'all .4s'
      }
    }, "0", i + 1, s.link ? ' →' : ''), /*#__PURE__*/React.createElement("text", {
      x: x,
      y: "158",
      fill: textPrimary,
      fontSize: "14",
      textAnchor: "middle",
      fontWeight: isActive ? 600 : 400,
      fontFamily: theme === 'editorial' ? 'Instrument Serif, serif' : 'inherit'
    }, s.t), /*#__PURE__*/React.createElement("text", {
      x: x,
      y: "178",
      fill: textMuted,
      fontSize: "11",
      textAnchor: "middle"
    }, s.sub));
  })));
}

// News ticker - horizontal scrolling marquee
function NewsTicker({
  theme,
  news
}) {
  const items = [...news, ...news]; // duplicate for seamless loop
  return /*#__PURE__*/React.createElement("div", {
    className: "news-ticker",
    style: {
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      borderTop: '1px solid var(--rule)',
      borderBottom: '1px solid var(--rule)',
      padding: '14px 0',
      background: 'var(--paper-deep)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ticker-track",
    style: {
      display: 'flex',
      gap: 48,
      whiteSpace: 'nowrap',
      animation: 'tickerScroll 60s linear infinite'
    }
  }, items.map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 11,
      opacity: 0.55,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, n.date), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.4
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 11,
      opacity: 0.55,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, n.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.4
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, n.title)))), /*#__PURE__*/React.createElement("style", null, `@keyframes tickerScroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`));
}

// Publication list filtered/displayed
function PublicationList({
  pubs,
  compact = false
}) {
  const years = [...new Set(pubs.map(p => p.year))].sort((a, b) => b - a);
  return /*#__PURE__*/React.createElement("div", {
    className: "pub-list"
  }, years.map(y => {
    const yearPubs = pubs.filter(p => p.year === y);
    return /*#__PURE__*/React.createElement("div", {
      key: y,
      className: "pub-year-group"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pub-year-header"
    }, /*#__PURE__*/React.createElement("span", {
      className: "pub-year"
    }, y), /*#__PURE__*/React.createElement("span", {
      className: "pub-year-count"
    }, yearPubs.length, " ", yearPubs.length === 1 ? 'paper' : 'papers'), /*#__PURE__*/React.createElement("span", {
      className: "pub-year-rule"
    })), yearPubs.map((p, i) => /*#__PURE__*/React.createElement("article", {
      key: i,
      className: `pub-item ${p.featured ? 'featured' : ''}`
    }, p.featured && /*#__PURE__*/React.createElement("span", {
      className: "pub-badge"
    }, "Featured"), /*#__PURE__*/React.createElement("h4", {
      className: "pub-title"
    }, p.title), /*#__PURE__*/React.createElement("p", {
      className: "pub-authors",
      dangerouslySetInnerHTML: {
        __html: p.authors.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
      }
    }), /*#__PURE__*/React.createElement("p", {
      className: "pub-venue"
    }, /*#__PURE__*/React.createElement("em", null, p.venue), " \xB7 ", p.details), p.tags && /*#__PURE__*/React.createElement("div", {
      className: "pub-tags"
    }, p.tags.map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      className: "pub-tag"
    }, t))))));
  }));
}
Object.assign(window, {
  WorkflowDiagram,
  NewsTicker,
  PublicationList
});
})();
