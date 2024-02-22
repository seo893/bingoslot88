import { a as A } from "./chunk-Q4E2L4XC.js";
import "./chunk-42U43NKG.js";
import { a as r, b as l } from "./chunk-3U5XBXLR.js";
import {
  B as b,
  D as X,
  E as L,
  F as Z,
  G as c,
  I as U,
  N as Q,
  O as $,
  P as J,
  Q as rr,
  T as N,
  U as s,
  V as D,
  W as er,
  b as f,
  d as H,
  f as T,
  g as R,
  h as V,
  i as S,
  j,
  l as _,
  m as a,
  n as C,
  s as I,
  u as W,
  w as B,
  z as K,
} from "./chunk-TPVL6KUZ.js";
import "./chunk-ELYU6EKT.js";
var ur = ["fKlhboykf", "ROxnzmhws", "M64Po5Eq5"],
  yr = "bingo-qs3dH",
  vr = {
    fKlhboykf: "bingo-v-126tqjx",
    M64Po5Eq5: "bingo-v-1qzh459",
    ROxnzmhws: "bingo-v-1v8oj8p",
  };
function E(n, ...t) {
  let m = {};
  return t?.forEach((o) => o && Object.assign(m, n[o])), m;
}
var br = {
    default: { damping: 40, delay: 0, mass: 1, stiffness: 400, type: "spring" },
  },
  wr = ({ value: n, children: t }) => {
    let m = T(_),
      o = n ?? m.transition,
      i = S(() => ({ ...m, transition: o }), [JSON.stringify(o)]);
    return r(_.Provider, { value: i, children: t });
  },
  qr = { "Phone Open": "M64Po5Eq5", Desktop: "fKlhboykf", Phone: "ROxnzmhws" },
  kr = ({ height: n, id: t, width: m, ...o }) => {
    var i, d;
    return {
      ...o,
      variant:
        (d = (i = qr[o.variant]) !== null && i !== void 0 ? i : o.variant) !==
          null && d !== void 0
          ? d
          : "fKlhboykf",
    };
  },
  zr = (n, t) => t.join("-") + n.layoutDependency,
  Hr = H(function (n, t) {
    let { activeLocale: m, setLocale: o } = I(),
      { style: i, className: d, layoutId: h, variant: u, ...P } = kr(n),
      {
        baseVariant: p,
        classNames: Y,
        gestureVariant: q,
        setGestureState: x,
        setVariant: k,
        transition: M,
        variants: y,
      } = rr({
        cycleOrder: ur,
        defaultVariant: "fKlhboykf",
        transitions: br,
        variant: u,
        variantClassNames: vr,
      }),
      e = zr(n, y),
      { activeVariantCallback: g, delay: z } = Q(p),
      tr = g(async (...pr) => {
        k("M64Po5Eq5");
      }),
      or = g(async (...pr) => {
        k("ROxnzmhws");
      }),
      nr = J(),
      ir = W(() => u),
      fr = j(null),
      sr = () => !!["ROxnzmhws", "M64Po5Eq5"].includes(p),
      v = () => !["ROxnzmhws", "M64Po5Eq5"].includes(p),
      mr = () => p === "M64Po5Eq5",
      dr = R(),
      lr = [];
    return r(C, {
      id: h ?? dr,
      children: r(wr, {
        value: M,
        children: l(a.nav, {
          ...P,
          animate: y,
          className: b(yr, ...lr, "bingo-126tqjx", d, Y),
          "data-bingo-name": "Desktop",
          initial: nr ? u : ir,
          layoutDependency: e,
          layoutId: "fKlhboykf",
          onHoverEnd: () => x({ isHovered: !1 }),
          onHoverStart: () => x({ isHovered: !0 }),
          onTap: () => x({ isPressed: !1 }),
          onTapCancel: () => x({ isPressed: !1 }),
          onTapStart: () => x({ isPressed: !0 }),
          ref: t ?? fr,
          style: { ...i },
          ...E(
            {
              M64Po5Eq5: { "data-bingo-name": "Phone Open" },
              ROxnzmhws: { "data-bingo-name": "Phone" },
            },
            p,
            q
          ),
          children: [
            l(a.div, {
              className: "bingo-j0zzfs",
              "data-bingo-name": "Top",
              layoutDependency: e,
              layoutId: "wJpD8twmo",
              ...E(
                {
                  M64Po5Eq5: { "data-highlight": !0, onTap: or },
                  ROxnzmhws: { "data-highlight": !0, onTap: tr },
                },
                p,
                q
              ),
              children: [
                r(N, {
                  background: {
                    alt: "logo",
                    fit: "fill",
                    intrinsicHeight: 68,
                    intrinsicWidth: 300,
                    pixelHeight: 68,
                    pixelWidth: 300,
                    src: "https://cdn.shopify.com/s/files/1/0863/4138/6521/files/logo_430x.webp",
                  },
                  className: "bingo-ps7906",
                  layoutDependency: e,
                  layoutId: "qEx98WYEo",
                }),
                sr() &&
                  l(a.div, {
                    className: "bingo-92ufo5",
                    "data-bingo-name": "Icon",
                    layoutDependency: e,
                    layoutId: "vUn5C69s4",
                    children: [
                      r(a.div, {
                        className: "bingo-h1whjw",
                        "data-bingo-name": "Bottom",
                        layoutDependency: e,
                        layoutId: "v5G2G8HVX",
                        style: {
                          backgroundColor: "rgb(153, 153, 153)",
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                          rotate: 0,
                        },
                        variants: {
                          M64Po5Eq5: {
                            backgroundColor: "rgb(255, 255, 255)",
                            rotate: -45,
                          },
                          ROxnzmhws: { backgroundColor: "rgb(255, 255, 255)" },
                        },
                      }),
                      r(a.div, {
                        className: "bingo-1pdqxp5",
                        "data-bingo-name": "Top",
                        layoutDependency: e,
                        layoutId: "qNcbp7OQV",
                        style: {
                          backgroundColor: "rgb(153, 153, 153)",
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                          rotate: 0,
                        },
                        variants: {
                          M64Po5Eq5: {
                            backgroundColor: "rgb(255, 255, 255)",
                            rotate: 45,
                          },
                          ROxnzmhws: { backgroundColor: "rgb(255, 255, 255)" },
                        },
                      }),
                    ],
                  }),
              ],
            }),
            l(a.div, {
              className: "bingo-16kxk8e",
              "data-bingo-name": "Links",
              layoutDependency: e,
              layoutId: "uJid3EuQc",
              style: {
                "--border-bottom-width": "0px",
                "--border-color": "rgba(0, 0, 0, 0)",
                "--border-left-width": "0px",
                "--border-right-width": "0px",
                "--border-style": "solid",
                "--border-top-width": "0px",
                opacity: 1,
              },
              variants: {
                M64Po5Eq5: {
                  "--border-bottom-width": "1px",
                  "--border-color": "rgb(0, 255, 255)",
                  "--border-left-width": "0px",
                  "--border-right-width": "0px",
                  "--border-style": "solid",
                  "--border-top-width": "1px",
                  background:
                    "linear-gradient(180deg, rgb(242, 0, 255) 0%, rgb(82, 0, 87) 100%)",
                },
                ROxnzmhws: { opacity: 0 },
              },
              ...E({ M64Po5Eq5: { "data-border": !0 } }, p, q),
              children: [
                v() &&
                  r(s, {
                    __fromCanvasComponent: !0,
                    children: r(f, {
                      children: r(a.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--bingo-font-family": '"ADLaM Display", sans-serif',
                          "--bingo-font-size": "15px",
                          "--bingo-letter-spacing": "-0.01em",
                          "--bingo-line-height": "2em",
                          "--bingo-text-alignment": "center",
                          "--bingo-text-color":
                            "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        },
                        children: "SLOT",
                      }),
                    }),
                    className: "bingo-10dflkw",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: e,
                    layoutId: "IfZGnz9tl",
                    style: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--bingo-paragraph-spacing": "0px",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                v() &&
                  r(s, {
                    __fromCanvasComponent: !0,
                    children: r(f, {
                      children: r(a.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--bingo-font-family": '"ADLaM Display", sans-serif',
                          "--bingo-font-size": "15px",
                          "--bingo-letter-spacing": "-0.2px",
                          "--bingo-line-height": "2em",
                          "--bingo-text-alignment": "center",
                          "--bingo-text-color":
                            "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        },
                        children: "LIVE CASINO",
                      }),
                    }),
                    className: "bingo-1r2sbo5",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: e,
                    layoutId: "rj9vD2lRz",
                    style: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--bingo-paragraph-spacing": "0px",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                v() &&
                  r(s, {
                    __fromCanvasComponent: !0,
                    children: r(f, {
                      children: r(a.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--bingo-font-family": '"ADLaM Display", sans-serif',
                          "--bingo-font-size": "15px",
                          "--bingo-letter-spacing": "-0.2px",
                          "--bingo-line-height": "2em",
                          "--bingo-text-alignment": "center",
                          "--bingo-text-color":
                            "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        },
                        children: "POKER",
                      }),
                    }),
                    className: "bingo-2tidwc",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: e,
                    layoutId: "xXX7mRtLL",
                    style: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--bingo-paragraph-spacing": "0px",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                v() &&
                  r(s, {
                    __fromCanvasComponent: !0,
                    children: r(f, {
                      children: r(a.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--bingo-font-family": '"ADLaM Display", sans-serif',
                          "--bingo-font-size": "15px",
                          "--bingo-letter-spacing": "-0.2px",
                          "--bingo-line-height": "2em",
                          "--bingo-text-alignment": "center",
                          "--bingo-text-color":
                            "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        },
                        children: "SPORTBOOK",
                      }),
                    }),
                    className: "bingo-vcz79i",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: e,
                    layoutId: "Hn49wjSv_",
                    style: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--bingo-paragraph-spacing": "0px",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                v() &&
                  r(s, {
                    __fromCanvasComponent: !0,
                    children: r(f, {
                      children: r(a.p, {
                        style: {
                          "--font-selector": "R0Y7QURMYU0gRGlzcGxheS1yZWd1bGFy",
                          "--bingo-font-family": '"ADLaM Display", sans-serif',
                          "--bingo-font-size": "15px",
                          "--bingo-letter-spacing": "-0.2px",
                          "--bingo-line-height": "2em",
                          "--bingo-text-alignment": "center",
                          "--bingo-text-color":
                            "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                        },
                        children: "ARCADE",
                      }),
                    }),
                    className: "bingo-cg1k4g",
                    fonts: ["GF;ADLaM Display-regular"],
                    layoutDependency: e,
                    layoutId: "AIK9rjyE5",
                    style: {
                      "--extracted-r6o4lv": "rgb(255, 255, 255)",
                      "--bingo-paragraph-spacing": "0px",
                    },
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                mr() &&
                  l(a.div, {
                    className: "bingo-aww8ps",
                    layoutDependency: e,
                    layoutId: "EINlMQVCG",
                    children: [
                      r(c, {
                        href: "https://rebrand.ly/bingoslt88",
                        children: r(a.a, {
                          className: "bingo-fzb3ce bingo-174twn1",
                          "data-bingo-name": "Button",
                          layoutDependency: e,
                          layoutId: "h5Iaozo93",
                          style: {
                            background:
                              "linear-gradient(180deg, rgb(41, 237, 255) 0%, rgb(0, 117, 128) 100%)",
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                          },
                          children: r(s, {
                            __fromCanvasComponent: !0,
                            children: r(f, {
                              children: r(a.p, {
                                style: {
                                  "--font-selector": "R0Y7SW50ZXItNzAw",
                                  "--bingo-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--bingo-font-size": "14px",
                                  "--bingo-font-weight": "700",
                                  "--bingo-text-alignment": "center",
                                  "--bingo-text-color":
                                    "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                },
                                children: "MASUK",
                              }),
                            }),
                            className: "bingo-19edxud",
                            fonts: ["GF;Inter-700"],
                            layoutDependency: e,
                            layoutId: "i9LFNDJfI",
                            style: {
                              "--extracted-r6o4lv": "rgb(255, 255, 255)",
                              "--bingo-link-text-color": "rgb(0, 153, 255)",
                              "--bingo-link-text-decoration": "underline",
                              "--bingo-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                      r(c, {
                        href: "https://rebrand.ly/bingoslt88",
                        children: r(a.a, {
                          className: "bingo-1hgmic3 bingo-174twn1",
                          "data-bingo-name": "Button",
                          layoutDependency: e,
                          layoutId: "stKVxGSy2",
                          style: {
                            background:
                              "linear-gradient(180deg, rgb(207, 80, 250) 0%, rgb(119, 4, 157) 100%)",
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                          },
                          children: r(s, {
                            __fromCanvasComponent: !0,
                            children: r(f, {
                              children: r(a.p, {
                                style: {
                                  "--font-selector": "R0Y7SW50ZXItNzAw",
                                  "--bingo-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--bingo-font-size": "14px",
                                  "--bingo-font-weight": "700",
                                  "--bingo-text-alignment": "center",
                                  "--bingo-text-color":
                                    "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                },
                                children: "LOGIN",
                              }),
                            }),
                            className: "bingo-1hl4cao",
                            fonts: ["GF;Inter-700"],
                            layoutDependency: e,
                            layoutId: "XqTE5BVjz",
                            style: {
                              "--extracted-r6o4lv": "rgb(255, 255, 255)",
                              "--bingo-link-text-color": "rgb(0, 153, 255)",
                              "--bingo-link-text-decoration": "underline",
                              "--bingo-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                      r(c, {
                        href: "https://rebrand.ly/rtp-bingoslt88",
                        children: r(a.a, {
                          className: "bingo-xrrsng bingo-174twn1",
                          "data-bingo-name": "Button",
                          layoutDependency: e,
                          layoutId: "ky8aPWO9d",
                          style: {
                            background:
                              "linear-gradient(180deg, rgb(99, 153, 235) 0%, rgb(19, 70, 147) 100%)",
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                          },
                          children: r(s, {
                            __fromCanvasComponent: !0,
                            children: r(f, {
                              children: r(a.p, {
                                style: {
                                  "--font-selector": "R0Y7SW50ZXItNzAw",
                                  "--bingo-font-family":
                                    '"Inter", "Inter Placeholder", sans-serif',
                                  "--bingo-font-size": "14px",
                                  "--bingo-font-weight": "700",
                                  "--bingo-text-alignment": "center",
                                  "--bingo-text-color":
                                    "var(--extracted-r6o4lv, rgb(255, 255, 255))",
                                },
                                children: "RTP",
                              }),
                            }),
                            className: "bingo-1xo2xuf",
                            fonts: ["GF;Inter-700"],
                            layoutDependency: e,
                            layoutId: "HRm1hD6W8",
                            style: {
                              "--extracted-r6o4lv": "rgb(255, 255, 255)",
                              "--bingo-link-text-color": "rgb(0, 153, 255)",
                              "--bingo-link-text-decoration": "underline",
                              "--bingo-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        }),
                      }),
                    ],
                  }),
              ],
            }),
            r(a.div, {
              className: "bingo-fl5xqy",
              "data-bingo-name": "Bottom Line",
              layoutDependency: e,
              layoutId: "ZuTX0CWcK",
              style: { backgroundColor: "rgba(255, 255, 255, 0.08)" },
            }),
          ],
        }),
      }),
    });
  }),
  Rr = [
    '.bingo-qs3dH[data-border="true"]::after, .bingo-qs3dH [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --bingo-aspect-ratio-supported: auto; } }",
    ".bingo-qs3dH.bingo-174twn1, .bingo-qs3dH .bingo-174twn1 { display: block; }",
    ".bingo-qs3dH.bingo-126tqjx { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 41px; height: 64px; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1200px; }",
    ".bingo-qs3dH .bingo-j0zzfs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 10px 0px 10px 10px; position: relative; width: min-content; }",
    ".bingo-qs3dH .bingo-ps7906 { flex: none; height: 42px; overflow: visible; position: relative; width: 207px; }",
    ".bingo-qs3dH .bingo-92ufo5 { flex: none; height: 40px; overflow: hidden; position: relative; width: 40px; }",
    ".bingo-qs3dH .bingo-h1whjw { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(62.50000000000002% - 2px / 2); width: 20px; will-change: var(--bingo-will-change-override, transform); }",
    ".bingo-qs3dH .bingo-1pdqxp5 { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(37.50000000000002% - 2px / 2); width: 20px; will-change: var(--bingo-will-change-override, transform); }",
    ".bingo-qs3dH .bingo-16kxk8e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 145px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",
    ".bingo-qs3dH .bingo-10dflkw, .bingo-qs3dH .bingo-1r2sbo5, .bingo-qs3dH .bingo-2tidwc, .bingo-qs3dH .bingo-vcz79i, .bingo-qs3dH .bingo-cg1k4g { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".bingo-qs3dH .bingo-aww8ps { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".bingo-qs3dH .bingo-fzb3ce, .bingo-qs3dH .bingo-1hgmic3, .bingo-qs3dH .bingo-xrrsng { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: visible; padding: 15px 15px 15px 15px; position: relative; text-decoration: none; width: 100%; }",
    ".bingo-qs3dH .bingo-19edxud, .bingo-qs3dH .bingo-1hl4cao, .bingo-qs3dH .bingo-1xo2xuf { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".bingo-qs3dH .bingo-fl5xqy { bottom: 0px; flex: none; height: 1px; left: 0px; overflow: visible; position: absolute; right: 0px; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .bingo-qs3dH.bingo-126tqjx, .bingo-qs3dH .bingo-j0zzfs, .bingo-qs3dH .bingo-16kxk8e, .bingo-qs3dH .bingo-aww8ps, .bingo-qs3dH .bingo-fzb3ce, .bingo-qs3dH .bingo-1hgmic3, .bingo-qs3dH .bingo-xrrsng { gap: 0px; } .bingo-qs3dH.bingo-126tqjx > * { margin: 0px; margin-left: calc(41px / 2); margin-right: calc(41px / 2); } .bingo-qs3dH.bingo-126tqjx > :first-child, .bingo-qs3dH .bingo-j0zzfs > :first-child, .bingo-qs3dH .bingo-16kxk8e > :first-child, .bingo-qs3dH .bingo-fzb3ce > :first-child, .bingo-qs3dH .bingo-1hgmic3 > :first-child, .bingo-qs3dH .bingo-xrrsng > :first-child { margin-left: 0px; } .bingo-qs3dH.bingo-126tqjx > :last-child, .bingo-qs3dH .bingo-j0zzfs > :last-child, .bingo-qs3dH .bingo-16kxk8e > :last-child, .bingo-qs3dH .bingo-fzb3ce > :last-child, .bingo-qs3dH .bingo-1hgmic3 > :last-child, .bingo-qs3dH .bingo-xrrsng > :last-child { margin-right: 0px; } .bingo-qs3dH .bingo-j0zzfs > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .bingo-qs3dH .bingo-16kxk8e > * { margin: 0px; margin-left: calc(145px / 2); margin-right: calc(145px / 2); } .bingo-qs3dH .bingo-aww8ps > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .bingo-qs3dH .bingo-aww8ps > :first-child { margin-top: 0px; } .bingo-qs3dH .bingo-aww8ps > :last-child { margin-bottom: 0px; } .bingo-qs3dH .bingo-fzb3ce > *, .bingo-qs3dH .bingo-1hgmic3 > *, .bingo-qs3dH .bingo-xrrsng > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    ".bingo-qs3dH.bingo-v-1v8oj8p.bingo-126tqjx { flex-direction: column; gap: 0px; width: 390px; }",
    ".bingo-qs3dH.bingo-v-1v8oj8p .bingo-j0zzfs, .bingo-qs3dH.bingo-v-1qzh459 .bingo-j0zzfs { cursor: pointer; gap: unset; justify-content: space-between; overflow: hidden; padding: 10px 10px 10px 10px; width: 100%; }",
    ".bingo-qs3dH.bingo-v-1v8oj8p .bingo-92ufo5, .bingo-qs3dH.bingo-v-1qzh459 .bingo-92ufo5 { height: 44px; width: 44px; }",
    ".bingo-qs3dH.bingo-v-1v8oj8p .bingo-16kxk8e { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 0px; min-height: 380px; padding: 20px 20px 120px 20px; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .bingo-qs3dH.bingo-v-1v8oj8p.bingo-126tqjx, .bingo-qs3dH.bingo-v-1v8oj8p .bingo-j0zzfs, .bingo-qs3dH.bingo-v-1v8oj8p .bingo-16kxk8e { gap: 0px; } .bingo-qs3dH.bingo-v-1v8oj8p.bingo-126tqjx > *, .bingo-qs3dH.bingo-v-1v8oj8p .bingo-16kxk8e > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .bingo-qs3dH.bingo-v-1v8oj8p.bingo-126tqjx > :first-child, .bingo-qs3dH.bingo-v-1v8oj8p .bingo-16kxk8e > :first-child { margin-top: 0px; } .bingo-qs3dH.bingo-v-1v8oj8p.bingo-126tqjx > :last-child, .bingo-qs3dH.bingo-v-1v8oj8p .bingo-16kxk8e > :last-child { margin-bottom: 0px; } .bingo-qs3dH.bingo-v-1v8oj8p .bingo-j0zzfs > *, .bingo-qs3dH.bingo-v-1v8oj8p .bingo-j0zzfs > :first-child, .bingo-qs3dH.bingo-v-1v8oj8p .bingo-j0zzfs > :last-child { margin: 0px; } }",
    ".bingo-qs3dH.bingo-v-1qzh459.bingo-126tqjx { flex-direction: column; gap: 0px; height: auto; max-height: calc(var(--bingo-viewport-height, 100vh) * 1); overflow: auto; overscroll-behavior: contain; width: 390px; }",
    ".bingo-qs3dH.bingo-v-1qzh459 .bingo-h1whjw, .bingo-qs3dH.bingo-v-1qzh459 .bingo-1pdqxp5 { top: calc(50.00000000000002% - 2px / 2); }",
    ".bingo-qs3dH.bingo-v-1qzh459 .bingo-16kxk8e { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 0px; padding: 10px 10px 20px 10px; width: 100%; }",
    ".bingo-qs3dH.bingo-v-1qzh459 .bingo-aww8ps { flex: none; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .bingo-qs3dH.bingo-v-1qzh459.bingo-126tqjx, .bingo-qs3dH.bingo-v-1qzh459 .bingo-j0zzfs, .bingo-qs3dH.bingo-v-1qzh459 .bingo-16kxk8e { gap: 0px; } .bingo-qs3dH.bingo-v-1qzh459.bingo-126tqjx > *, .bingo-qs3dH.bingo-v-1qzh459 .bingo-16kxk8e > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .bingo-qs3dH.bingo-v-1qzh459.bingo-126tqjx > :first-child, .bingo-qs3dH.bingo-v-1qzh459 .bingo-16kxk8e > :first-child { margin-top: 0px; } .bingo-qs3dH.bingo-v-1qzh459.bingo-126tqjx > :last-child, .bingo-qs3dH.bingo-v-1qzh459 .bingo-16kxk8e > :last-child { margin-bottom: 0px; } .bingo-qs3dH.bingo-v-1qzh459 .bingo-j0zzfs > *, .bingo-qs3dH.bingo-v-1qzh459 .bingo-j0zzfs > :first-child, .bingo-qs3dH.bingo-v-1qzh459 .bingo-j0zzfs > :last-child { margin: 0px; } }",
  ],
  w = L(Hr, Rr, "bingo-qs3dH"),
  G = w;
w.displayName = "Navigation Copy";
w.defaultProps = { height: 64, width: 1200 };
K(w, {
  variant: {
    options: ["fKlhboykf", "ROxnzmhws", "M64Po5Eq5"],
    optionTitles: ["Desktop", "Phone", "Phone Open"],
    title: "Variant",
    type: B.Enum,
  },
});
D(w, [
  {
    family: "ADLaM Display",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/adlamdisplay/v1/KFOhCnGXkPOLlhx6jD8_b1ZECsTYkYBPY3o.woff2",
    weight: "400",
  },
  {
    family: "Inter",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZ1rib2Bg-4.woff2",
    weight: "700",
  },
]);
var jr = er(G);
var Cr = {
  sk6sEaAH4: "(max-width: 809px)",
  WQLkyLRf1: "(min-width: 1200px)",
  zXfFwGe7i: "(min-width: 810px) and (max-width: 1199px)",
};
var ar = "bingo-yo11d",
  Ir = {
    sk6sEaAH4: "bingo-v-186l0uv",
    WQLkyLRf1: "bingo-v-72rtr7",
    zXfFwGe7i: "bingo-v-6pw7xa",
  },
  Lr = { default: { duration: 0 } },
  O = A(),
  Nr = { Desktop: "WQLkyLRf1", Phone: "sk6sEaAH4", Tablet: "zXfFwGe7i" },
  Dr = ({ height: n, id: t, width: m, ...o }) => {
    var i, d;
    return {
      ...o,
      variant:
        (d = (i = Nr[o.variant]) !== null && i !== void 0 ? i : o.variant) !==
          null && d !== void 0
          ? d
          : "WQLkyLRf1",
    };
  },
  Fr = H(function (n, t) {
    let { activeLocale: m, setLocale: o } = I(),
      { style: i, className: d, layoutId: h, variant: u, ...P } = Dr(n);
    V(() => {
      let e = A(void 0, m);
      if (((document.title = e.title || ""), e.viewport)) {
        var g;
        (g = document.querySelector('meta[name="viewport"]')) === null ||
          g === void 0 ||
          g.setAttribute("content", e.viewport);
      }
      if (e.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((z) => z.startsWith("bingo-body-"))
            .map((z) => document.body.classList.remove(z)),
          document.body.classList.add(`${e.bodyClassName}-bingo-yo11d`),
          () => {
            document.body.classList.remove(`${e.bodyClassName}-bingo-yo11d`);
          }
        );
    }, [void 0, m]);
    let [p, Y] = $(u, Cr, !1),
      q = void 0,
      x = Lr.default,
      k = j(null),
      M = R(),
      y = [];
    return r(Z.Provider, {
      value: { primaryVariantId: "WQLkyLRf1", variantClassNames: Ir },
      children: l(C, {
        id: h ?? M,
        children: [
          l(a.div, {
            ...P,
            className: b(ar, ...y, "bingo-72rtr7", d),
            ref: t ?? k,
            style: { ...i },
            children: [
              r("div", { className: "bingo-15tyl8m" }),
              r("div", { className: "bingo-vplwq" }),
              r(X, {
                className: "bingo-1k7nhte-container",
                layoutScroll: !0,
                children: r(U, {
                  breakpoint: p,
                  overrides: {
                    sk6sEaAH4: { variant: "ROxnzmhws" },
                    zXfFwGe7i: { variant: "ROxnzmhws" },
                  },
                  children: r(G, {
                    height: "100%",
                    id: "LHASRaYmy",
                    layoutId: "LHASRaYmy",
                    style: { width: "100%" },
                    variant: "fKlhboykf",
                    width: "100%",
                  }),
                }),
              }),
              r(N, {
                background: {
                  alt: "banner",
                  fit: "stretch",
                  intrinsicHeight: 1860,
                  intrinsicWidth: 2038,
                  pixelHeight: 1860,
                  pixelWidth: 2038,
                  positionX: "center",
                  positionY: "center",
                  sizes: "100vw",
                  src: "https://cdn.shopify.com/s/files/1/0863/4138/6521/files/BINGOSLOT88.webp",
                  srcSet:
                    "https://cdn.shopify.com/s/files/1/0863/4138/6521/files/BINGOSLOT88.webp?scale-down-to=512 512w, https://cdn.shopify.com/s/files/1/0863/4138/6521/files/BINGOSLOT88.webp?scale-down-to=1024 1024w, https://cdn.shopify.com/s/files/1/0863/4138/6521/files/BINGOSLOT88.webp 2038w",
                },
                className: "bingo-st9jsm",
              }),
              r("div", {
                className: "bingo-vno6g3",
                children: l("div", {
                  className: "bingo-7j9oeh",
                  children: [
                    r(c, {
                      href: "https://rebrand.ly/bingoslt88",
                      children: r("a", {
                        className: "bingo-mtk1fv bingo-lux5qc",
                        "data-bingo-name": "Button",
                        name: "Button",
                        children: r(s, {
                          __fromCanvasComponent: !0,
                          children: r(f, {
                            children: r("p", {
                              style: {
                                "--font-selector": "R0Y7SW50ZXItNzAw",
                                "--bingo-font-family":
                                  '"Inter", "Inter Placeholder", sans-serif',
                                "--bingo-font-size": "14px",
                                "--bingo-font-weight": "700",
                                "--bingo-text-alignment": "center",
                                "--bingo-text-color": "rgb(255, 255, 255)",
                              },
                              children: "MASUK",
                            }),
                          }),
                          className: "bingo-syjynr",
                          fonts: ["GF;Inter-700"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    r(c, {
                      href: "https://rebrand.ly/bingoslt88",
                      children: r("a", {
                        className: "bingo-1sf6zyl bingo-lux5qc",
                        "data-bingo-name": "Button",
                        name: "Button",
                        children: r(s, {
                          __fromCanvasComponent: !0,
                          children: r(f, {
                            children: r("p", {
                              style: {
                                "--font-selector": "R0Y7SW50ZXItNzAw",
                                "--bingo-font-family":
                                  '"Inter", "Inter Placeholder", sans-serif',
                                "--bingo-font-size": "14px",
                                "--bingo-font-weight": "700",
                                "--bingo-text-alignment": "center",
                                "--bingo-text-color": "rgb(255, 255, 255)",
                              },
                              children: "DAFTAR",
                            }),
                          }),
                          className: "bingo-qpmukq",
                          fonts: ["GF;Inter-700"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    r(c, {
                      href: "https://rebrand.ly/rtp-bingoslt88",
                      children: r("a", {
                        className: "bingo-1slrbf5 bingo-lux5qc",
                        "data-bingo-name": "Button",
                        name: "Button",
                        children: r(s, {
                          __fromCanvasComponent: !0,
                          children: r(f, {
                            children: r("p", {
                              style: {
                                "--font-selector": "R0Y7SW50ZXItNzAw",
                                "--bingo-font-family":
                                  '"Inter", "Inter Placeholder", sans-serif',
                                "--bingo-font-size": "14px",
                                "--bingo-font-weight": "700",
                                "--bingo-text-alignment": "center",
                                "--bingo-text-color": "rgb(255, 255, 255)",
                              },
                              children: "RTP",
                            }),
                          }),
                          className: "bingo-iips1c",
                          fonts: ["GF;Inter-700"],
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          r("div", { className: b(ar, ...y), id: "overlay" }),
        ],
      }),
    });
  }),
  Pr = [
    '.bingo-yo11d[data-border="true"]::after, .bingo-yo11d [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
    "@supports (aspect-ratio: 1) { body { --bingo-aspect-ratio-supported: auto; } }",
    `.${O.bodyClassName}-bingo-yo11d { background: rgb(0, 0, 0); }`,
    ".bingo-yo11d.bingo-lux5qc, .bingo-yo11d .bingo-lux5qc { display: block; }",
    ".bingo-yo11d.bingo-72rtr7 { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1200px; }",
    ".bingo-yo11d .bingo-15tyl8m { flex: none; height: 64px; overflow: hidden; position: relative; width: 100%; }",
    ".bingo-yo11d .bingo-vplwq { background: linear-gradient(180deg, #f200ff 0%, rgb(82, 0, 87) 100%); flex: none; height: 67px; left: 0px; overflow: hidden; position: fixed; right: 0px; top: 0px; z-index: 1; }",
    ".bingo-yo11d .bingo-1k7nhte-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 1200px; z-index: 2; }",
    ".bingo-yo11d .bingo-st9jsm { flex: none; height: 626px; overflow: hidden; position: relative; width: 1200px; }",
    ".bingo-yo11d .bingo-vno6g3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: hidden; padding: 10px 0px 10px 0px; position: relative; width: 1200px; }",
    ".bingo-yo11d .bingo-7j9oeh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".bingo-yo11d .bingo-mtk1fv { align-content: center; align-items: center; background: linear-gradient(180deg, #29edff 0%, rgb(0, 117, 128) 100%); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 60px; justify-content: center; overflow: visible; padding: 15px 15px 15px 15px; position: relative; text-decoration: none; width: 1px; }",
    ".bingo-yo11d .bingo-syjynr, .bingo-yo11d .bingo-qpmukq, .bingo-yo11d .bingo-iips1c { --bingo-link-text-color: #0099ff; --bingo-link-text-decoration: underline; --bingo-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".bingo-yo11d .bingo-1sf6zyl { align-content: center; align-items: center; background: linear-gradient(180deg, #cf50fa 0%, rgb(65, 0, 87) 100%); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 60px; justify-content: center; overflow: visible; padding: 15px 15px 15px 15px; position: relative; text-decoration: none; width: 1px; }",
    ".bingo-yo11d .bingo-1slrbf5 { align-content: center; align-items: center; background: linear-gradient(180deg, #6399eb 0%, rgb(0, 35, 87) 100%); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 60px; justify-content: center; overflow: visible; padding: 15px 15px 15px 15px; position: relative; text-decoration: none; width: 1px; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .bingo-yo11d.bingo-72rtr7, .bingo-yo11d .bingo-vno6g3, .bingo-yo11d .bingo-7j9oeh, .bingo-yo11d .bingo-mtk1fv, .bingo-yo11d .bingo-1sf6zyl, .bingo-yo11d .bingo-1slrbf5 { gap: 0px; } .bingo-yo11d.bingo-72rtr7 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .bingo-yo11d.bingo-72rtr7 > :first-child, .bingo-yo11d .bingo-vno6g3 > :first-child { margin-top: 0px; } .bingo-yo11d.bingo-72rtr7 > :last-child, .bingo-yo11d .bingo-vno6g3 > :last-child { margin-bottom: 0px; } .bingo-yo11d .bingo-vno6g3 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .bingo-yo11d .bingo-7j9oeh > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .bingo-yo11d .bingo-7j9oeh > :first-child, .bingo-yo11d .bingo-mtk1fv > :first-child, .bingo-yo11d .bingo-1sf6zyl > :first-child, .bingo-yo11d .bingo-1slrbf5 > :first-child { margin-left: 0px; } .bingo-yo11d .bingo-7j9oeh > :last-child, .bingo-yo11d .bingo-mtk1fv > :last-child, .bingo-yo11d .bingo-1sf6zyl > :last-child, .bingo-yo11d .bingo-1slrbf5 > :last-child { margin-right: 0px; } .bingo-yo11d .bingo-mtk1fv > *, .bingo-yo11d .bingo-1sf6zyl > *, .bingo-yo11d .bingo-1slrbf5 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }",
    "@media (min-width: 1200px) { .bingo-yo11d .hidden-72rtr7 { display: none !important; } }",
    `@media (min-width: 810px) and (max-width: 1199px) { .bingo-yo11d .hidden-6pw7xa { display: none !important; } .${O.bodyClassName}-bingo-yo11d { background: rgb(0, 0, 0); } .bingo-yo11d.bingo-72rtr7 { width: 810px; } .bingo-yo11d .bingo-vplwq { right: unset; width: 100%; } .bingo-yo11d .bingo-1k7nhte-container, .bingo-yo11d .bingo-vno6g3 { width: 100%; } .bingo-yo11d .bingo-st9jsm { height: 494px; width: 100%; }}`,
    `@media (max-width: 809px) { .bingo-yo11d .hidden-186l0uv { display: none !important; } .${O.bodyClassName}-bingo-yo11d { background: rgb(0, 0, 0); } .bingo-yo11d.bingo-72rtr7 { width: 390px; } .bingo-yo11d .bingo-vplwq { right: unset; width: 100%; } .bingo-yo11d .bingo-1k7nhte-container, .bingo-yo11d .bingo-vno6g3 { width: 100%; } .bingo-yo11d .bingo-st9jsm { height: 304px; width: 100%; } .bingo-yo11d .bingo-7j9oeh { flex-direction: column; gap: 8px; height: auto; } .bingo-yo11d .bingo-mtk1fv, .bingo-yo11d .bingo-1sf6zyl, .bingo-yo11d .bingo-1slrbf5 { flex: none; width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .bingo-yo11d .bingo-7j9oeh { gap: 0px; } .bingo-yo11d .bingo-7j9oeh > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .bingo-yo11d .bingo-7j9oeh > :first-child { margin-top: 0px; } .bingo-yo11d .bingo-7j9oeh > :last-child { margin-bottom: 0px; } }}`,
  ],
  F = L(Fr, Pr, "bingo-yo11d"),
  Wr = F;
F.displayName = "Home";
F.defaultProps = { height: 770, width: 1200 };
D(F, [
  {
    family: "Inter",
    source: "google",
    style: "normal",
    url: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZ1rib2Bg-4.woff2",
    weight: "700",
  },
  ...jr,
]);
var Br = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FrameraugiA20Il",
      slots: [],
      annotations: {
        framerResponsiveScreen: "",
        framerImmutableVariables: "true",
        framerContractVersion: "1",
        framerDisplayContentsDiv: "false",
        framerIntrinsicHeight: "770",
        framerIntrinsicWidth: "1200",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"zXfFwGe7i":{"layout":["fixed","auto"]},"sk6sEaAH4":{"layout":["fixed","auto"]}}}',
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Br as __FramerMetadata__, Wr as default };
//# sourceMappingURL=wLpDQX6v44zY4WE88ESrkiFQbmA7TukXIxDqcoXJRPU.YAPRAQRM.js.map
