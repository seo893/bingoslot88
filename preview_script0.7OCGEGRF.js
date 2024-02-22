import { a as d, b as v } from "./chunk-BLR24YGX.js";
import {
  A as F,
  C as E,
  D as I,
  H as b,
  c as r,
  e as _,
  q as m,
  r as g,
  t as R,
  v as h,
  x as y,
} from "./chunk-TPVL6KUZ.js";
import { c as t } from "./chunk-ELYU6EKT.js";
t.__bingo_importFromPackage = (e, o) => () =>
  r(h, {
    error: 'Package component not supported: "' + o + '" in "' + e + '"',
  });
t.process = {
  ...t.process,
  env: { ...(t.process ? t.process.env : void 0), NODE_ENV: "production" },
};
y();
(async () => {
  let e = {
      augiA20Il: {
        elements: {},
        page: m(() =>
          import("./wLpDQX6v44zY4WE88ESrkiFQbmA7TukXIxDqcoXJRPU.YAPRAQRM.js")
        ),
        path: "/",
      },
    },
    o = {},
    l = [{ code: "id", id: "default", name: "Indonesian", slug: "" }],
    P = m(() => import("./__bingo-not-found-page.33CSDZRB.js")),
    s = document.getElementById("main"),
    n,
    c,
    i,
    f = !1;
  if ("bingoHydrateV2" in s.dataset) {
    let a = JSON.parse(s.dataset.bingoHydrateV2);
    (n = a.routeId), (c = a.localeId), (i = a.pathVariables), (f = !0);
  } else {
    let a = R(e, decodeURIComponent(location.pathname), !0, l);
    (n = a.routeId), (c = a.localeId), (i = a.pathVariables);
  }
  let p = await e[n].page.preload();
  e[n].page = p;
  let O = r(b, {
      RootComponent: p,
      isWebsite: !0,
      routeId: n,
      pathVariables: i,
      routes: e,
      collectionUtils: o,
      notFoundPage: P,
      isReducedMotion: void 0,
      localeId: c,
      locales: l,
    }),
    k = r(F, { children: O, value: { imgSizesWorkaroundEnabled: !1 } }),
    u = r(g, { children: k, value: { routes: {} } });
  f
    ? _(() => {
        v(s, u);
      })
    : d(s).render(u);
})().catch((e) => {
  throw (
    (t.__send_bingo_event &&
      t.__send_bingo_event("published_site_load_error", {
        message: String(e),
        stack:
          e instanceof Error && typeof e.stack == "string" ? e.stack : null,
      }),
    e)
  );
});
(async () => {
  let { default: e } = await import("./__"),
    o = E(I);
  _(() => {
    d(document.getElementById("__")).render(
      r(
        o,
        {
          className: "__",
          __bingo__threshold: 0.5,
          __bingo__animateOnce: !0,
          __bingo__opacity: 0,
          __bingo__targetOpacity: 1,
          __bingo__rotate: 0,
          __bingo__x: 0,
          __bingo__y: 10,
          __bingo__scale: 1,
          __bingo__transition: {
            type: "spring",
            ease: [0.44, 0, 0.56, 1],
            duration: 0.3,
            delay: 1,
            stiffness: 350,
            damping: 40,
            mass: 1.5,
          },
          __bingo__rotateX: 0,
          __bingo__rotateY: 0,
          __bingo__perspective: 1200,
        },
        r(e)
      )
    );
  });
});
//# sourceMappingURL=preview_script0.7OCGEGRF.js.map
