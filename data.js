// Shared data for the lab site
window.LAB_DATA = {
  lab: {
    name: "Liu Lab",
    longName: "iPSC-Perturbation Lab",
    institution: "Medical College of Wisconsin",
    department: "Department of Physiology · Cardiovascular Center · Cancer Center",
    location: "MEB 4720, Milwaukee, WI",
    email: "chunliu[at]mcw.edu",
    pi: "Chun Liu, Ph.D.",
    piTitle: "Assistant Professor",
    mission: "We explore and study biological systems using stem cell research and high-throughput CRISPR screens to better understand the mechanisms of heart disease and develop new treatments for the improvement of human well-being.",
    thesis: "iPSCs × CRISPR — at scale.",
    pillars: [
      { k: "iPSC", v: "Patient-derived pluripotent stem cells" },
      { k: "CRISPR", v: "Genome-scale loss & gain-of-function screens" },
      { k: "Perturb-seq", v: "Single-cell readout of every perturbation" },
      { k: "Organoid", v: "3D cardiac tissue models" }
    ]
  },

  news: [
    { date: "Current", tag: "Recognition", title: "Fellowship Congratulations", body: "Congrats to Payton on receiving the MCW Physiology T32 fellowship, and to Wenjing and Coneria on receiving MCW Cancer Center post-/pre-doctoral fellowships." },
    { date: "Nov 2025", tag: "Publication", title: "Research highlight by Wenjing and Payton", body: "Our latest work featured in Protein & Cell.", href: "https://academic.oup.com/proteincell/advance-article/doi/10.1093/procel/pwaf081/8263980" },
    { date: "Sep 2025", tag: "Funding", title: "NHLBI R01 awarded", body: "Five-year support to scale genome-wide CRISPR screens in cardiomyocytes.", href: "https://reporter.nih.gov/search/QrCWqrE94U274ecdoqY_tw/project-details/11204057" },
    { date: "Jul 2024", tag: "Recognition", title: "AHA BCVS finalist — Outstanding Early Career Faculty", body: "Featured on the Circulation Research podcast.", href: "https://www.ahajournals.org/do/10.1161/podcast.20240715.944080" },
    { date: "2024", tag: "Funding", title: "MCW Cancer Center Award", body: "$50K seed for cardio-oncology research." },
    { date: "2023–26", tag: "Funding", title: "AHA Second Century Early Faculty Award", body: "Cardio-oncology CRISPR screens." },
    { date: "Ongoing", tag: "Recruiting", title: "Postdocs & PhD students wanted", body: "We're hiring motivated scientists across all levels.", href: "contact.html" },
    { date: "Aug 2023", tag: "Milestone", title: "Lab opens at MCW", body: "First day in MEB 4720." }
  ],

  research: [
    {
      id: "reprogramming",
      num: "01",
      title: "Reprogramming and Differentiation",
      img: "assets/research-reprogramming.png",
      blurb: "We reprogram patient somatic cells into induced pluripotent stem cells, then differentiate them into cardiac and vascular cell types to study cardiovascular biology in a dish.",
      stat: { k: "Cell types", v: "—" }
    },
    {
      id: "disease",
      num: "02",
      title: "Disease Modeling",
      img: "assets/research-disease.png",
      blurb: "Reprogram cells to repair damaged heart tissue or even prevent cardiovascular diseases before they strike. Using iPSCs, we create patient-specific models to delve deep into the mysteries of the heart.",
      stat: { k: "Disease contexts", v: "—" }
    },
    {
      id: "crispr",
      num: "03",
      title: "CRISPRi/a Screening",
      img: "assets/research-crispr.png",
      blurb: "With the high-throughput of CRISPR interference and activation screening, we identify novel drug targets faster than ever before.",
      stat: { k: "sgRNA library", v: "—" }
    },
    {
      id: "perturbseq",
      num: "04",
      title: "Perturb-seq in Organoid",
      img: "assets/research-perturbseq.png",
      blurb: "Combining pooled perturbation with single-cell RNA-seq inside 3D cardiac organoids to read out the consequences of gene perturbations at scale.",
      stat: { k: "Single-cell", v: "—" }
    },
    {
      id: "population",
      num: "05",
      title: "Population-in-a-Dish",
      img: "assets/research-population.png",
      blurb: "Studying drug response and disease across genetically diverse iPSC lines on a single platform to understand how genetics shapes outcomes.",
      stat: { k: "iPSC lines", v: "—" }
    }
  ],

  people: [
    { name: "Chun Liu", role: "Assistant Professor", sub: "Medical College of Wisconsin", img: "assets/people/chun-liu.png", href: "https://scholar.google.com/citations?user=9uDSsx8AAAAJ&hl=en", bio: "Principal Investigator of the iPSC-Perturbation Lab at the Medical College of Wisconsin." },
    { name: "Bradley Miller", role: "Lab Supervisor", sub: "", img: "assets/people/brad-miller.png", href: "https://www.linkedin.com/in/bradley-miller-696b5379" },
    { name: "Wenjing Dong", role: "Postdoc Fellow", sub: "", img: "assets/people/wenjing-dong.jpg", href: "https://www.mcw.edu/departments/physiology/people/wenjing-dong-phd" },
    { name: "Payton Klosa", role: "MSTP Student", sub: "", img: "assets/people/payton-klosa.jpg", href: "https://www.mcw.edu/education/medical-scientist-training-program/people/payton-klosa" },
    { name: "Coneria Nansubuga", role: "PhD Student", sub: "", img: "assets/people/coneria-nansubuga.jpg", href: "https://www.mcw.edu/education/graduate-school/people/coneria-nansubuga" },
    { name: "Shelby Hader", role: "PhD Student", sub: "", img: "assets/people/shelby-hader.jpg", href: "https://www.mcw.edu/education/graduate-school/people/shelby-hader" },
    { name: "Yifan Sun", role: "Graduate Student", sub: "", img: "assets/people/yifan-sun.png", href: "https://www.mcw.edu/education/graduate-school/people/yifan-sun" }
  ],

  alumni: [
    { name: "Jake Minx", role: "Research Technologist at MCW" }
  ],

  // "Lab fun" gallery slots. Drop real photos into the tiles on the live page
  // when running in a design runtime that supports image-slot persistence.
  labFun: [
    { id: "fun-1", caption: "Lab outing" },
    { id: "fun-2", caption: "Celebrating a new paper" },
    { id: "fun-3", caption: "Bench life" },
    { id: "fun-4", caption: "Conference travel" },
    { id: "fun-5", caption: "Birthdays & milestones" },
    { id: "fun-6", caption: "Team dinner" }
  ],

  resources: [
    { title: "Lab protocols", desc: "Internal step-by-step protocols for iPSC culture, differentiation & CRISPR screens.", href: "https://benchling.com/liuclab/f_/jMXbE5wr-protocol/", tag: "Protocols" },
    { title: "Freezer & storage inventory", desc: "Cell line, plasmid, and reagent locations across freezers and tanks.", href: "lab_storage_map_9.html", tag: "Inventory" },
    { title: "Hood booking", desc: "Reserve the confocal, sorter, and shared instruments.", href: "https://teamup.com/ksuag93tnskptp3oc2", tag: "Calendar" },
    { title: "Ordering & reagents", desc: "Order forms, vendor list, and budget codes.", href: "https://labspend.com/offers/overview", tag: "Ordering" },
    { title: "Data & compute", desc: "Chun Liu Lab Computation Service Portal (LCSP) -- PASTA", href: "#", tag: "Data" },
    { title: "Lab onboarding", desc: "Safety, expectations, and getting-started guide for new members.", href: "https://benchling.com/s/etr-edSyWkhltTazfsOzEYYe?m=slm-HVMfQtnWogqz0Pv5z7XI", tag: "Handbook" }
  ],

  publications: [
    {
      year: 2026,
      title: "Nuclear Lamins in Cardiac Development and Disease",
      authors: "S Li, R Li, **C Liu**, D Xu, L Han",
      venue: "Cells",
      details: "15(9):844",
      tags: ["review", "cardiac disease"]
    },
    {
      year: 2025,
      title: "A comprehensive multi-organ proteomic atlas of human aging across 50 years",
      authors: "W Dong, P Klosa, A Beyer, X Lin, **C Liu**",
      venue: "Protein & Cell",
      details: "pwaf081",
      tags: ["aging", "proteomics"],
      featured: true
    },
    {
      year: 2025,
      title: "ARID5A orchestrates cardiac aging and inflammation through MAVS mRNA stabilization",
      authors: "Y Fan, Y Zheng, Y Zhang, G Xu, **C Liu**, J Hu, Q Ji, S Zhang, S Fang, J Lei, ...",
      venue: "Nature Cardiovascular Research",
      details: "1–22",
      tags: ["cardiac aging", "inflammation"]
    },
    {
      year: 2024,
      title: "CRISPRi/a screens in human iPSC-cardiomyocytes identify glycolytic activation as a druggable target for doxorubicin-induced cardiotoxicity",
      authors: "**Liu C** *, Shen M, Liu YX, Nishiga M, Thomas D, Rhee J, Sayed N, Qi S, Wu JC",
      venue: "Cell Stem Cell",
      details: "Volume 31, Issue 12, 1760–1776.e9",
      tags: ["CRISPR", "iPSC", "cardio-oncology"],
      featured: true
    },
    {
      year: 2023,
      title: "Death-seq identifies regulators of cell death and senolytic therapies",
      authors: "Colville A, Liu JY, … **Liu C**, … Bassik MC, Rando TA",
      venue: "Cell Metabolism",
      details: "10.1016/j.cmet.2023.08.008"
    },
    {
      year: 2023,
      title: "Statins improve endothelial function via suppression of epigenetic-driven EndMT",
      authors: "**Liu C** *, Shen M, Tan WLW, … Sayed N*, Wu JC*",
      venue: "Nature Cardiovascular Research",
      details: "2(5):467–485",
      tags: ["endothelial", "iPSC"],
      featured: true
    },
    {
      year: 2023,
      title: "Stepwise Generation of Human iPSC-Derived Cardiac Pericytes to Model Coronary Microvascular Dysfunction",
      authors: "Shen M, **Liu C**, Zhao SR, Manhas A, Sundaram L, Ameen M, Wu JC*",
      venue: "Circulation",
      details: "147(6):515–518"
    },
    {
      year: 2022,
      title: "The use of new CRISPR tools in cardiovascular research and medicine",
      authors: "Nishiga M, **Liu C**, Qi LS, Wu JC",
      venue: "Nature Reviews Cardiology",
      details: "505–521",
      tags: ["review", "CRISPR"]
    },
    {
      year: 2022,
      title: "Cannabinoid receptor 1 antagonist genistein attenuates marijuana-induced vascular inflammation",
      authors: "Wei TT, Chandy M, … **Liu C**, … Kobilka BK, Wu JC",
      venue: "Cell",
      details: "185(10):1676–1693.e23"
    },
    {
      year: 2022,
      title: "Cardiotoxicity drug screening based on whole-panel intracellular recording",
      authors: "Yang Y, Liu A, Tsai CT, **Liu C**, Wu JC, Cui B",
      venue: "Biosensors and Bioelectronics",
      details: "216:114617"
    },
    {
      year: 2022,
      title: "Acoustic Fabrication of Living Cardiomyocyte-based Hybrid Biorobots",
      authors: "Wang J, Soto F, … **Liu C**, … Wu JC, Demirci U",
      venue: "ACS Nano",
      details: "16(7):10219–10230"
    },
    {
      year: 2021,
      title: "Generation of Human iPSCs by Protein Reprogramming and Stimulation of TLR3 Signaling",
      authors: "**Liu C**, Ameen M, Himmati S, Thomas D, Sayed N*",
      venue: "Methods in Molecular Biology",
      details: "2239:153–162"
    },
    {
      year: 2021,
      title: "Editorial: Cardiomyocyte Maturation — Novel Insights for Regenerative Medicine",
      authors: "Zhang M, Qian L, **Liu C**, Huang GN, Tao G",
      venue: "Frontiers in Cell and Developmental Biology",
      details: "9:730622"
    },
    {
      year: 2020,
      title: "Single-Cell RNA Sequencing Unveils Unique Transcriptomic Signatures of Organ-Specific Endothelial Cells",
      authors: "Paik DT, Tian L, Williams IM, Rhee S, Zhang H, **Liu C**, … Wu JC",
      venue: "Circulation",
      details: "142(19):1848–1862"
    },
    {
      year: 2020,
      title: "Clinical trial in a dish using iPSCs shows lovastatin improves endothelial dysfunction and cellular cross-talk in LMNA cardiomyopathy",
      authors: "Sayed N, **Liu C**, Ameen M, … Rabinovitch M, Wu JC*",
      venue: "Science Translational Medicine",
      details: "12(554):eaax9276",
      featured: true
    },
    {
      year: 2020,
      title: "HIF1α Regulates Early Metabolic Changes due to Activation of Innate Immunity in Nuclear Reprogramming",
      authors: "**Liu C**, Ruan H, … Sayed N*",
      venue: "Stem Cell Reports",
      details: "14(2):192–200"
    },
    {
      year: 2019,
      title: "A Human iPSC Double-Reporter System Enables Purification of Cardiac Lineage Subpopulations",
      authors: "Zhang JZ, Termglinchan V, … **Liu C**, … Blau HM, Wu JC",
      venue: "Cell Stem Cell",
      details: "24(5):802–811.e5"
    },
    {
      year: 2018,
      title: "Modeling human diseases with induced pluripotent stem cells: from 2D to 3D and beyond",
      authors: "**Liu C**, Oikonomopoulos A, Sayed N, Wu JC*",
      venue: "Development",
      details: "145(5):dev156166"
    },
    {
      year: 2016,
      title: "Translation of Human-Induced Pluripotent Stem Cells: From Clinical Trial in a Dish to Precision Medicine",
      authors: "Sayed N, **Liu C**, Wu JC",
      venue: "J Am Coll Cardiol",
      details: "67(18):2161–2176"
    },
    {
      year: 2013,
      title: "Pluripotent stem cells induced from mouse somatic cells by small-molecule compounds",
      authors: "Hou P, Li Y, Zhang X, **Liu C**, … Deng H*",
      venue: "Science",
      details: "341(6146):651–654",
      featured: true
    }
  ]
};
