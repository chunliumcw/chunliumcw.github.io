(function(){
// All page sections. Driven by theme + which "page" tab is active.
const {
  useState: useStateS,
  useEffect: useEffectS
} = React;
function Nav({
  page,
  setPage,
  theme,
  setTheme
}) {
  const items = [{
    k: 'home',
    label: 'Home'
  }, {
    k: 'research',
    label: 'Research'
  }, {
    k: 'team',
    label: 'Team'
  }, {
    k: 'publications',
    label: 'Publications'
  }, {
    k: 'contact',
    label: 'Get involved'
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: "sticky-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-brand",
    href: "#",
    onClick: e => {
      e.preventDefault();
      setPage('home');
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-mark"
  }, "\u25D0"), /*#__PURE__*/React.createElement("span", {
    className: "brand-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "brand-name"
  }, "Liu Lab"), /*#__PURE__*/React.createElement("span", {
    className: "brand-sub"
  }, "MCW \xB7 iPSC-Perturbation"))), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.k,
    href: "#",
    className: page === it.k ? 'active' : '',
    onClick: e => {
      e.preventDefault();
      setPage(it.k);
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }
  }, it.label)))));
}
function Footer() {
  const d = LAB_DATA.lab;
  return /*#__PURE__*/React.createElement("footer", {
    className: "site-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "footer-brand"
  }, "Liu Lab"), /*#__PURE__*/React.createElement("p", {
    className: "footer-sub"
  }, d.longName), /*#__PURE__*/React.createElement("p", {
    className: "footer-sub"
  }, d.institution)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "footer-label"
  }, "Find us"), /*#__PURE__*/React.createElement("p", null, d.location), /*#__PURE__*/React.createElement("p", null, d.email)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "footer-label"
  }, "Links"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "https://scholar.google.com/citations?user=9uDSsx8AAAAJ"
  }, "Google Scholar")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.mcw.edu"
  }, "MCW"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "footer-label"
  }, "Join"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "contact.html"
  }, "Postdoc positions")), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("a", {
    href: "contact.html"
  }, "PhD applications")))), /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 Liu Lab @ Medical College of Wisconsin, 2023\u20132026"), /*#__PURE__*/React.createElement("span", {
    className: "footer-meta"
  }, "Built on science, stem cells & CRISPR")));
}

// HOME
function HomePage({
  theme,
  heroVariant,
  goResearch
}) {
  const d = LAB_DATA;
  return /*#__PURE__*/React.createElement(React.Fragment, null, heroVariant === 'particle' && /*#__PURE__*/React.createElement("section", {
    className: "hero hero-particle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eye-dot"
  }), /*#__PURE__*/React.createElement("span", null, "iPSC-Perturbation Lab"), /*#__PURE__*/React.createElement("span", {
    className: "eye-sep"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Medical College of Wisconsin")), /*#__PURE__*/React.createElement(ParticleHeadline, {
    theme: theme,
    lines: ["Every heart", "in a dish♥"]
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta-row"
  }, /*#__PURE__*/React.createElement("a", {
    href: "research.html",
    className: "btn btn-primary"
  }, "Explore research"), /*#__PURE__*/React.createElement("a", {
    href: "team.html",
    className: "btn btn-ghost"
  }, "Meet the team")), /*#__PURE__*/React.createElement("div", {
    className: "hero-diagram"
  }, /*#__PURE__*/React.createElement(WorkflowDiagram, {
    theme: theme,
    onNodeClick: goResearch
  }))), heroVariant === 'thesis' && /*#__PURE__*/React.createElement("section", {
    className: "hero hero-thesis"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eye-dot"
  }), /*#__PURE__*/React.createElement("span", null, "iPSC-Perturbation Lab"), /*#__PURE__*/React.createElement("span", {
    className: "eye-sep"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Medical College of Wisconsin")), /*#__PURE__*/React.createElement("h1", {
    className: "hero-headline"
  }, "Every heart ", /*#__PURE__*/React.createElement("em", null, "in a dish."), /*#__PURE__*/React.createElement("br", null), "Every gene ", /*#__PURE__*/React.createElement("em", null, "at once.")), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta-row"
  }, /*#__PURE__*/React.createElement("a", {
    href: "research.html",
    className: "btn btn-primary"
  }, "Explore research"), /*#__PURE__*/React.createElement("a", {
    href: "team.html",
    className: "btn btn-ghost"
  }, "Meet the team")), /*#__PURE__*/React.createElement("div", {
    className: "hero-diagram"
  }, /*#__PURE__*/React.createElement(WorkflowDiagram, {
    theme: theme,
    onNodeClick: goResearch
  }))), heroVariant === 'feature' && /*#__PURE__*/React.createElement("section", {
    className: "hero hero-feature"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-feature-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-feature-copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eye-dot"
  }), /*#__PURE__*/React.createElement("span", null, "Featured \xB7 Nov 2025")), /*#__PURE__*/React.createElement("h1", {
    className: "hero-headline",
    style: {
      fontSize: 'clamp(40px, 5.5vw, 84px)'
    }
  }, "CRISPRi/a screens find glycolytic activation as a druggable target in doxorubicin cardiotoxicity."), /*#__PURE__*/React.createElement("p", {
    className: "hero-lede"
  }, "A genome-scale screen in iPSC-cardiomyocytes uncovers a metabolic handle on chemotherapy-induced heart damage \u2014 published in ", /*#__PURE__*/React.createElement("em", null, "Cell Stem Cell"), "."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta-row"
  }, /*#__PURE__*/React.createElement("a", {
    href: "publications.html",
    className: "btn btn-primary"
  }, "Read paper"), /*#__PURE__*/React.createElement("a", {
    href: "publications.html",
    className: "btn btn-ghost"
  }, "All publications"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-feature-image"
  }, /*#__PURE__*/React.createElement("div", {
    className: "image-frame"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/science-3.png",
    alt: "iPSC-cardiomyocyte imaging"
  }), /*#__PURE__*/React.createElement("div", {
    className: "image-caption"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cap-label"
  }, "FIG 01"), /*#__PURE__*/React.createElement("span", null, "iPSC-CM \xB7 DAPI / \u03B1-actinin / troponin-T"))))), /*#__PURE__*/React.createElement("div", {
    className: "hero-diagram"
  }, /*#__PURE__*/React.createElement(WorkflowDiagram, {
    theme: theme,
    onNodeClick: goResearch
  }))), heroVariant === 'news' && /*#__PURE__*/React.createElement("section", {
    className: "hero hero-news"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-news-top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eye-dot"
  }), /*#__PURE__*/React.createElement("span", null, "Lab bulletin \xB7 ", new Date().toLocaleString('en-US', {
    month: 'long',
    year: 'numeric'
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero-title-row"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-black.png",
    alt: "Liu Lab logo",
    className: "hero-logo"
  }), /*#__PURE__*/React.createElement("h1", {
    className: "hero-headline"
  }, "Liu Lab")), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, "iPSC-Perturbation Lab \xB7 Medical College of Wisconsin")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stats"
  }, d.lab.pillars.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.k,
    className: "stat-cell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat-k"
  }, p.k), /*#__PURE__*/React.createElement("div", {
    className: "stat-v"
  }, p.v))))), /*#__PURE__*/React.createElement("div", {
    className: "hero-diagram"
  }, /*#__PURE__*/React.createElement(WorkflowDiagram, {
    theme: theme,
    onNodeClick: goResearch
  }))), /*#__PURE__*/React.createElement(NewsTicker, {
    theme: theme,
    news: d.news
  }), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, "\xA7 01"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Recent highlights")), /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    className: "section-link"
  }, "All news \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "news-grid"
  }, d.news.slice(0, 6).map((n, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    className: `news-card ${i === 0 ? 'news-card-lg' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "news-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "news-date"
  }, n.date), /*#__PURE__*/React.createElement("span", {
    className: "news-tag"
  }, n.tag)), /*#__PURE__*/React.createElement("h3", {
    className: "news-title"
  }, n.title), /*#__PURE__*/React.createElement("p", {
    className: "news-body"
  }, n.body), n.href && /*#__PURE__*/React.createElement("a", {
    className: "news-link",
    href: n.href
  }, "Read more \u2192"))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, "\xA7 02"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Lab at a glance"))), /*#__PURE__*/React.createElement("div", {
    className: "glance-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glance-big"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glance-num"
  }, "7"), /*#__PURE__*/React.createElement("div", {
    className: "glance-label"
  }, "Lab members, across PI, postdoc, PhD, MSTP")), /*#__PURE__*/React.createElement("div", {
    className: "glance-big"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glance-num"
  }, "20+"), /*#__PURE__*/React.createElement("div", {
    className: "glance-label"
  }, "Peer-reviewed publications including ", /*#__PURE__*/React.createElement("em", null, "Cell"), ", ", /*#__PURE__*/React.createElement("em", null, "Cell Stem Cell"), ", ", /*#__PURE__*/React.createElement("em", null, "Circulation"), ", ", /*#__PURE__*/React.createElement("em", null, "Science"))), /*#__PURE__*/React.createElement("div", {
    className: "glance-big"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glance-num"
  }, "$2M+"), /*#__PURE__*/React.createElement("div", {
    className: "glance-label"
  }, "Active funding from NIH / NHLBI R01, AHA, MCW Cancer Center")), /*#__PURE__*/React.createElement("div", {
    className: "glance-big accent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "glance-num"
  }, "\u25D0"), /*#__PURE__*/React.createElement("div", {
    className: "glance-label"
  }, /*#__PURE__*/React.createElement("strong", null, "Joining us?"), " We're recruiting postdocs and PhD students. ", /*#__PURE__*/React.createElement("a", {
    href: "contact.html"
  }, "Get in touch \u2192"))))));
}

// RESEARCH
function ResearchPage({
  theme,
  initialProject
}) {
  const r = LAB_DATA.research;
  const startIdx = Math.max(0, r.findIndex(x => x.id === initialProject));
  const [open, setOpen] = useStateS(initialProject ? startIdx : 0);
  useEffectS(() => {
    if (initialProject) {
      const i = r.findIndex(x => x.id === initialProject);
      if (i >= 0) {
        setOpen(i);
        setTimeout(() => {
          const el = document.querySelector(`[data-research-row="${initialProject}"]`);
          if (el) {
            const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
              top,
              behavior: 'smooth'
            });
          }
        }, 150);
      }
    }
  }, [initialProject]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("span", {
    className: "page-kicker"
  }, "Research"), /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, "iPSC \xD7 CRISPR ", /*#__PURE__*/React.createElement("em", null, "\u2014 at scale")), /*#__PURE__*/React.createElement("p", {
    className: "page-lede"
  }, "We use induced pluripotent stem cells and high-throughput CRISPR screens to decode the molecular origins of cardiovascular disease \u2014 and to find drug targets faster than traditional approaches.")), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "research-list"
  }, r.map((item, i) => /*#__PURE__*/React.createElement("article", {
    key: item.id,
    "data-research-row": item.id,
    className: `research-row ${open === i ? 'open' : ''}`,
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("div", {
    className: "research-row-bar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "research-row-num"
  }, item.num), /*#__PURE__*/React.createElement("h3", {
    className: "research-row-title"
  }, item.title), /*#__PURE__*/React.createElement("span", {
    className: "research-row-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "stat-small-k"
  }, item.stat.k), /*#__PURE__*/React.createElement("span", {
    className: "stat-small-v"
  }, item.stat.v)), /*#__PURE__*/React.createElement("span", {
    className: "research-row-toggle"
  }, open === i ? '−' : '+')), open === i && /*#__PURE__*/React.createElement("div", {
    className: "research-row-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "research-row-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: item.img,
    alt: item.title
  })), /*#__PURE__*/React.createElement("div", {
    className: "research-row-copy"
  }, /*#__PURE__*/React.createElement("p", null, item.blurb), /*#__PURE__*/React.createElement("a", {
    href: "publications.html",
    className: "btn btn-ghost"
  }, "Related publications \u2192"))))))));
}

// TEAM
function TeamPage({
  theme
}) {
  const people = LAB_DATA.people;
  const [hover, setHover] = useStateS(0);
  const [resourcesUnlocked, setResourcesUnlocked] = useStateS(() => {
    try {
      return sessionStorage.getItem('liu.resourcesUnlocked') === '1';
    } catch (e) {
      return false;
    }
  });
  const [pw, setPw] = useStateS('');
  const [pwError, setPwError] = useStateS(false);
  const [resourceTab, setResourceTab] = useStateS('links');
  const rest = people;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("span", {
    className: "page-kicker"
  }, "Team"), /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, "The people ", /*#__PURE__*/React.createElement("em", null, "behind the science.")), /*#__PURE__*/React.createElement("p", {
    className: "page-lede"
  }, "Seven scientists, one lab, a shared belief that stem cells and CRISPR can recreate every heart disease in a dish.")), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, "\xA7"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Lab members")), /*#__PURE__*/React.createElement("span", {
    className: "section-meta"
  }, rest.length, " scientists")), /*#__PURE__*/React.createElement("div", {
    className: "people-grid"
  }, rest.map((p, i) => /*#__PURE__*/React.createElement("article", {
    key: p.name,
    className: "person",
    onMouseEnter: () => setHover(i)
  }, /*#__PURE__*/React.createElement("div", {
    className: "person-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: p.name
  })), /*#__PURE__*/React.createElement("div", {
    className: "person-meta"
  }, /*#__PURE__*/React.createElement("h4", null, p.href ? /*#__PURE__*/React.createElement("a", {
    href: p.href,
    target: "_blank",
    rel: "noopener"
  }, p.name) : p.name), /*#__PURE__*/React.createElement("p", {
    className: "person-role"
  }, p.role), /*#__PURE__*/React.createElement("p", {
    className: "person-sub"
  }, p.sub)))))), /*#__PURE__*/React.createElement("section", {
    className: "section section-alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, "\xA7"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Alumni"))), /*#__PURE__*/React.createElement("div", {
    className: "alumni-list"
  }, LAB_DATA.alumni.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.name,
    className: "alumni-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "alumni-name"
  }, a.name), /*#__PURE__*/React.createElement("span", {
    className: "alumni-dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "alumni-role"
  }, a.role))))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, "\xA7"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Lab fun")), /*#__PURE__*/React.createElement("span", {
    className: "section-meta"
  }, "Cell culturer's life")), /*#__PURE__*/React.createElement("p", {
    className: "page-lede",
    style: {
      marginBottom: 40,
      fontSize: 17
    }
  }, "Science is a team sport. A few moments from life in the lab \u2014 outings, milestones, and the occasional cake."), /*#__PURE__*/React.createElement("div", {
    className: "fun-grid"
  }, LAB_DATA.labFun.map(f => /*#__PURE__*/React.createElement("figure", {
    key: f.id,
    className: "fun-tile"
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: f.id,
    shape: "rounded",
    radius: "4",
    placeholder: "Drop a photo"
  }), /*#__PURE__*/React.createElement("figcaption", null, f.caption))))), /*#__PURE__*/React.createElement("section", {
    className: "section section-alt"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "section-num"
  }, "\xA7"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Lab resources")), /*#__PURE__*/React.createElement("span", {
    className: "section-meta"
  }, resourcesUnlocked ? 'Internal \xB7 unlocked' : 'Internal \xB7 members only')), resourcesUnlocked ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "resource-tabs",
    role: "tablist",
    "aria-label": "Lab resources"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "tab",
    "aria-selected": resourceTab === 'links',
    className: `resource-tab ${resourceTab === 'links' ? 'active' : ''}`,
    onClick: () => setResourceTab('links')
  }, "Resource links"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "tab",
    "aria-selected": resourceTab === 'storage',
    className: `resource-tab ${resourceTab === 'storage' ? 'active' : ''}`,
    onClick: () => setResourceTab('storage')
  }, "Freezer & storage inventory")), resourceTab === 'links' ? /*#__PURE__*/React.createElement("div", {
    className: "resource-list",
    role: "tabpanel"
  }, LAB_DATA.resources.filter(r => r.title !== 'Freezer & storage inventory').map(r => /*#__PURE__*/React.createElement("a", {
    key: r.title,
    className: "resource-row",
    href: r.href,
    target: r.href === '#' ? undefined : '_blank',
    rel: r.href === '#' ? undefined : 'noopener'
  }, /*#__PURE__*/React.createElement("span", {
    className: "resource-main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "resource-title"
  }, r.title), /*#__PURE__*/React.createElement("span", {
    className: "resource-desc"
  }, r.desc)), /*#__PURE__*/React.createElement("span", {
    className: "resource-tag"
  }, r.tag), /*#__PURE__*/React.createElement("span", {
    className: "resource-arrow"
  }, "\u2197")))) : /*#__PURE__*/React.createElement("div", {
    className: "storage-map-panel",
    role: "tabpanel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "storage-map-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "storage-map-kicker"
  }, "Inventory"), /*#__PURE__*/React.createElement("h3", null, "Freezer & storage inventory")), /*#__PURE__*/React.createElement("a", {
    href: "lab_storage_map_9.html",
    target: "_blank",
    rel: "noopener",
    className: "storage-map-link"
  }, "Open full map \u2197")), /*#__PURE__*/React.createElement("iframe", {
    className: "storage-map-frame",
    title: "Lab Storage Map",
    src: "lab_storage_map_9.html"
  }))) : /*#__PURE__*/React.createElement("form", {
    className: "lock-card",
    onSubmit: e => {
      e.preventDefault();
      if (pw === 'Pipette4food') {
        setResourcesUnlocked(true);
        setPwError(false);
        try {
          sessionStorage.setItem('liu.resourcesUnlocked', '1');
        } catch (err) {}
      } else {
        setPwError(true);
      }
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "lock-icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "28",
    height: "28",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "10",
    width: "16",
    height: "11",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 10V7a4 4 0 0 1 8 0v3"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "lock-copy"
  }, /*#__PURE__*/React.createElement("h3", null, "This section is for lab members"), /*#__PURE__*/React.createElement("p", null, "Protocols, storage, ordering and internal docs. Enter the lab password to continue.")), /*#__PURE__*/React.createElement("div", {
    className: "lock-row"
  }, /*#__PURE__*/React.createElement("input", {
    type: "password",
    className: `lock-input ${pwError ? 'error' : ''}`,
    placeholder: "Lab password",
    value: pw,
    autoComplete: "off",
    onChange: e => {
      setPw(e.target.value);
      setPwError(false);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Unlock \u2192")), pwError && /*#__PURE__*/React.createElement("p", {
    className: "lock-error"
  }, "Incorrect password \u2014 try again."))));
}

// PUBLICATIONS
function PublicationsPage({
  theme
}) {
  const pubs = LAB_DATA.publications;
  const [filter, setFilter] = useStateS('all');
  const filtered = filter === 'all' ? pubs : filter === 'featured' ? pubs.filter(p => p.featured) : pubs.filter(p => p.year >= 2022);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "page-hero"
  }, /*#__PURE__*/React.createElement("span", {
    className: "page-kicker"
  }, "Publications"), /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, "Publications"), /*#__PURE__*/React.createElement("div", {
    className: "pub-controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pub-filter-group"
  }, /*#__PURE__*/React.createElement("button", {
    className: `pub-filter ${filter === 'all' ? 'active' : ''}`,
    onClick: () => setFilter('all')
  }, "All (", pubs.length, ")"), /*#__PURE__*/React.createElement("button", {
    className: `pub-filter ${filter === 'featured' ? 'active' : ''}`,
    onClick: () => setFilter('featured')
  }, "Featured (", pubs.filter(p => p.featured).length, ")"), /*#__PURE__*/React.createElement("button", {
    className: `pub-filter ${filter === 'recent' ? 'active' : ''}`,
    onClick: () => setFilter('recent')
  }, "Since 2022 (", pubs.filter(p => p.year >= 2022).length, ")")), /*#__PURE__*/React.createElement("a", {
    href: "https://scholar.google.com/citations?user=9uDSsx8AAAAJ",
    className: "btn btn-ghost"
  }, "Google Scholar \u2197"))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement(PublicationList, {
    pubs: filtered
  })));
}

// CONTACT
function ContactPage({
  theme
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "page-hero page-hero--with-aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-hero-main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "page-kicker"
  }, "Get involved"), /*#__PURE__*/React.createElement("h1", {
    className: "page-title"
  }, "Come work ", /*#__PURE__*/React.createElement("em", null, "with us.")), /*#__PURE__*/React.createElement("p", {
    className: "page-lede"
  }, "We're always looking for curious, driven scientists \u2014 postdocs, PhD students, and rotating students \u2014 who want to build the next generation of stem-cell and CRISPR tools.")), /*#__PURE__*/React.createElement("div", {
    className: "page-hero-aside"
  }, /*#__PURE__*/React.createElement("img", {
    className: "page-hero-logo",
    src: "assets/logo-black.png",
    alt: "Liu Lab logo"
  }), /*#__PURE__*/React.createElement("span", {
    className: "aside-wordmark"
  }, "Liu Lab"))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "col-kicker"
  }, "Postdocs & visiting scholars"), /*#__PURE__*/React.createElement("h3", null, "Help us scale the screens."), /*#__PURE__*/React.createElement("p", null, "If you're excited about iPSCs, CRISPR screens, and cardiovascular disease, email Chun directly with a CV and a paragraph on why."), /*#__PURE__*/React.createElement("a", {
    href: "mailto:chunliu@mcw.edu",
    className: "btn btn-primary"
  }, "Email Dr. Liu \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "contact-col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "col-kicker"
  }, "PhD students"), /*#__PURE__*/React.createElement("h3", null, "Rotate with us."), /*#__PURE__*/React.createElement("p", null, "Apply through the MCW ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.mcw.edu/education/graduate-school/graduate-school-programs/Biomedical-sciences-phd"
  }, "Physiology PhD program"), ", and email Chun before applying to talk through fit and projects."), /*#__PURE__*/React.createElement("a", {
    href: "https://www.mcw.edu/education/graduate-school/graduate-school-programs/Biomedical-sciences-phd",
    className: "btn btn-ghost"
  }, "Program info \u2192")))), /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact-info-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-label"
  }, "Lab space"), /*#__PURE__*/React.createElement("p", {
    className: "big-line"
  }, "MEB 4720"), /*#__PURE__*/React.createElement("p", null, "Medical Education Building", /*#__PURE__*/React.createElement("br", null), "8701 Watertown Plank Rd", /*#__PURE__*/React.createElement("br", null), "Milwaukee, WI 53226")), /*#__PURE__*/React.createElement("div", {
    className: "contact-info-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-label"
  }, "Contact"), /*#__PURE__*/React.createElement("p", {
    className: "big-line"
  }, "chunliu[at]mcw.edu"), /*#__PURE__*/React.createElement("p", null, "Chun Liu, Ph.D.", /*#__PURE__*/React.createElement("br", null), "Assistant Professor", /*#__PURE__*/React.createElement("br", null), "Department of Physiology")), /*#__PURE__*/React.createElement("div", {
    className: "contact-info-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-label"
  }, "Map"), /*#__PURE__*/React.createElement("div", {
    className: "map-placeholder"
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Medical College of Wisconsin",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6182.015979954695!2d-88.0251715666811!3d43.044174975580454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880504e0534cddc7%3A0xfc67e65f0bd4ae55!2sMedical%20College%20of%20Wisconsin!5e0!3m2!1sen!2sus!4v1697753890219!5m2!1sen!2sus",
    style: {
      width: '100%',
      height: '220px',
      border: 0,
      display: 'block'
    },
    loading: "lazy",
    referrerPolicy: "no-referrer-when-downgrade",
    allowFullScreen: true
  }), /*#__PURE__*/React.createElement("a", {
    className: "map-link",
    href: "https://www.google.com/maps/place/Medical+College+of+Wisconsin/@43.0441,-88.0251,17z",
    target: "_blank",
    rel: "noopener"
  }, "Open in Google Maps \u2197"))))));
}
Object.assign(window, {
  Nav,
  Footer,
  HomePage,
  ResearchPage,
  TeamPage,
  PublicationsPage,
  ContactPage
});
})();
