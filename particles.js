// Interactive particle-text headline — inspired by suixu.ai's 燧序 effect.
// Each glyph is sampled into thousands of particles that spring to their
// home position, scatter under the cursor, and twinkle. Theme-aware:
// particles take the theme ink color over the theme paper, with a sprinkle
// of accent + warm specks for life.

(function () {
  const { useRef, useEffect } = React;

  function ParticleHeadline({ lines, theme, weight = 800, heartI = false }) {
    const wrapRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
      const wrap = wrapRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      let raf,particles = [],W = 0,H = 0,dpr = 1;
      let firstBuild = true;
      const mouse = { x: -9999, y: -9999, active: false };

      // Colors derived from the theme PROP (independent of attribute-application timing)
      const colInk = theme === 'specimen' ? '#f0f0eb' : theme === 'clinical' ? '#0a0a0a' : '#1a1410';
      const colAccent = theme === 'specimen' ? '#d4ff4f' : theme === 'clinical' ? '#2b5fff' : '#7a1e1e';
      const colWarm = theme === 'specimen' ? '#e8a04f' : theme === 'clinical' ? '#2b5fff' : '#c94545';

      function build() {
        dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = wrap.clientWidth;
        H = wrap.clientHeight;
        if (!W || !H) return;
        canvas.width = Math.round(W * dpr);
        canvas.height = Math.round(H * dpr);
        canvas.style.width = W + 'px';
        canvas.style.height = H + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        // --- sample the text on an offscreen canvas ---
        const off = document.createElement('canvas');
        off.width = W;off.height = H;
        const o = off.getContext('2d');
        o.fillStyle = '#fff';
        o.textAlign = 'center';
        o.textBaseline = 'middle';

        const fontStack = "'Inter', -apple-system, sans-serif";
        let fs = H * 0.94 / lines.length;
        o.font = `${weight} ${fs}px ${fontStack}`;
        const maxW = W * 0.94;
        let widest = Math.max(...lines.map((l) => o.measureText(l).width));
        if (widest > maxW) fs *= maxW / widest;

        let lh = fs * 1.0;
        const totalH = lh * lines.length;
        if (totalH > H * 0.96) fs *= H * 0.96 / totalH;

        o.font = `${weight} ${fs}px ${fontStack}`;
        lh = fs * 1.0;
        const startY = H / 2 - lh * (lines.length - 1) / 2;

        function drawLine(text, cy) {
          if (!heartI || text.indexOf('i') === -1) {
            o.font = `${weight} ${fs}px ${fontStack}`;
            o.textAlign = 'center';
            o.fillText(text, W / 2, cy);
            return;
          }
          // Render with dotless i's, then draw a heart where each tittle would sit.
          const base = text.replace(/i/g, 'ı');
          o.font = `${weight} ${fs}px ${fontStack}`;
          o.textAlign = 'center';
          o.fillText(base, W / 2, cy);

          const lineW = o.measureText(base).width;
          const leftX = W / 2 - lineW / 2;
          for (let k = 0; k < base.length; k++) {
            if (text[k] !== 'i') continue;
            const before = o.measureText(base.slice(0, k)).width;
            const chW = o.measureText(base[k]).width;
            const cx = leftX + before + chW / 2;
            o.font = `${weight} ${fs * 0.26}px ${fontStack}`;
            o.fillText('♥', cx, cy - fs * 0.33);
            o.font = `${weight} ${fs}px ${fontStack}`;
          }
        }

        lines.forEach((l, i) => drawLine(l, startY + i * lh));

        const data = o.getImageData(0, 0, W, H).data;
        const step = W < 560 ? 6 : W < 1000 ? 5 : 4;

        const targets = [];
        for (let y = 0; y < H; y += step) {
          for (let x = 0; x < W; x += step) {
            if (data[(y * W + x) * 4 + 3] > 130) targets.push(x, y);
          }
        }

        const next = [];
        const count = targets.length / 2;
        for (let i = 0; i < count; i++) {
          const hx = targets[i * 2],hy = targets[i * 2 + 1];
          const prev = particles[i];
          const rnd = Math.random();
          next.push({
            hx, hy,
            x: prev ? prev.x : hx + (Math.random() - 0.5) * 7,
            y: prev ? prev.y : hy + (Math.random() - 0.5) * 7,
            vx: 0, vy: 0,
            c: rnd < 0.07 ? colAccent : rnd < 0.11 ? colWarm : colInk,
            r: Math.random() < 0.16 ? 1.5 : 1.0,
            ph: Math.random() * Math.PI * 2
          });
        }
        particles = next;
        firstBuild = false;
      }

      function scatter() {
        for (const p of particles) {
          const a = Math.random() * Math.PI * 2;
          const m = 6 + Math.random() * 14;
          p.vx = Math.cos(a) * m;
          p.vy = Math.sin(a) * m;
        }
      }

      function stepPhysics() {
        const R = Math.max(80, Math.min(150, W * 0.09));
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.vx += (p.hx - p.x) * 0.045;
          p.vy += (p.hy - p.y) * 0.045;
          if (mouse.active) {
            const dx = p.x - mouse.x,dy = p.y - mouse.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < R * R) {
              const d = Math.sqrt(d2) || 1;
              const f = (1 - d / R) * 6;
              p.vx += dx / d * f;
              p.vy += dy / d * f;
            }
          }
          p.vx *= 0.84;p.vy *= 0.84;
          p.x += p.vx;p.y += p.vy;
        }
      }

      function drawFrame(t) {
        ctx.clearRect(0, 0, W, H);
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const tw = 0.65 + 0.35 * Math.sin(t * 0.003 + p.ph);
          ctx.globalAlpha = tw;
          ctx.fillStyle = p.c;
          const s = p.r * 2;
          ctx.fillRect(p.x - p.r, p.y - p.r, s, s);
        }
        ctx.globalAlpha = 1;
      }

      function tick(t) {
        stepPhysics();
        drawFrame(t);
        raf = requestAnimationFrame(tick);
      }

      function rebuild() {
        build();
        // settle most of the way so the headline is legible immediately
        for (let k = 0; k < 26; k++) stepPhysics();
        drawFrame(performance.now());
      }

      rebuild();
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(rebuild);
      raf = requestAnimationFrame(tick);

      const onMove = (e) => {
        const r = canvas.getBoundingClientRect();
        mouse.x = e.clientX - r.left;
        mouse.y = e.clientY - r.top;
        mouse.active = true;
      };
      const onLeave = () => {mouse.active = false;mouse.x = -9999;mouse.y = -9999;};
      canvas.addEventListener('pointermove', onMove);
      canvas.addEventListener('pointerleave', onLeave);

      const ro = new ResizeObserver(() => build());
      ro.observe(wrap);

      let wasOut = false;
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting && wasOut) {scatter();wasOut = false;}
          if (!en.isIntersecting) wasOut = true;
        });
      }, { threshold: 0.25 });
      io.observe(wrap);

      return () => {
        cancelAnimationFrame(raf);
        canvas.removeEventListener('pointermove', onMove);
        canvas.removeEventListener('pointerleave', onLeave);
        ro.disconnect();
        io.disconnect();
      };
    }, [theme, lines.join('|'), weight, heartI]);

    return React.createElement(
      "div",
      { ref: wrapRef, className: "particle-wrap" },
      React.createElement("canvas", {
        ref: canvasRef,
        "data-comment-anchor": "db9b7244d6-canvas-186-9"
      }),
      React.createElement(
        "span",
        { className: "particle-hint" },
        "move your cursor through the cells"
      )
    );

  }

  window.ParticleHeadline = ParticleHeadline;
})();
