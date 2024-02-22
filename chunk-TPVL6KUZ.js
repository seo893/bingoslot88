import { a as Pc, b as et, c as F } from "./chunk-ELYU6EKT.js";
var je = {};
Pc(je, {
  Children: () => so,
  Component: () => ke,
  Fragment: () => Ka,
  Profiler: () => xw,
  PureComponent: () => Sw,
  StrictMode: () => ww,
  Suspense: () => kw,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => Cw,
  cloneElement: () => wr,
  createContext: () => he,
  createElement: () => re,
  createFactory: () => Ew,
  createRef: () => wp,
  default: () => m,
  forwardRef: () => Be,
  isValidElement: () => oi,
  lazy: () => Tw,
  memo: () => Rw,
  startTransition: () => ai,
  unstable_act: () => Iw,
  useCallback: () => se,
  useContext: () => M,
  useDebugValue: () => Pw,
  useDeferredValue: () => _w,
  useEffect: () => X,
  useId: () => kr,
  useImperativeHandle: () => Fw,
  useInsertionEffect: () => Vn,
  useLayoutEffect: () => Cr,
  useMemo: () => le,
  useReducer: () => Lw,
  useRef: () => B,
  useState: () => yt,
  useSyncExternalStore: () => Mw,
  useTransition: () => Ow,
  version: () => Aw,
});
var m = {},
  ao = Symbol.for("react.element"),
  ow = Symbol.for("react.portal"),
  aw = Symbol.for("react.fragment"),
  sw = Symbol.for("react.strict_mode"),
  lw = Symbol.for("react.profiler"),
  cw = Symbol.for("react.provider"),
  uw = Symbol.for("react.context"),
  fw = Symbol.for("react.forward_ref"),
  dw = Symbol.for("react.suspense"),
  hw = Symbol.for("react.memo"),
  pw = Symbol.for("react.lazy"),
  dp = Symbol.iterator;
function mw(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (dp && e[dp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var mp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  vp = Object.assign,
  gp = {};
function ii(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gp),
    (this.updater = n || mp);
}
ii.prototype.isReactComponent = {};
ii.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ii.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function yp() {}
yp.prototype = ii.prototype;
function Lc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = gp),
    (this.updater = n || mp);
}
var Mc = (Lc.prototype = new yp());
Mc.constructor = Lc;
vp(Mc, ii.prototype);
Mc.isPureReactComponent = !0;
var hp = Array.isArray,
  bp = Object.prototype.hasOwnProperty,
  Oc = { current: null },
  xp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sp(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      bp.call(t, r) && !xp.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var l = Array(s), c = 0; c < s; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: ao,
    type: e,
    key: o,
    ref: a,
    props: i,
    _owner: Oc.current,
  };
}
function vw(e, t) {
  return {
    $$typeof: ao,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ac(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ao;
}
function gw(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var pp = /\/+/g;
function _c(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? gw("" + e.key)
    : t.toString(36);
}
function Ga(e, t, n, r, i) {
  var o = typeof e;
  (o !== "undefined" && o !== "boolean") || (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (o) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ao:
          case ow:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === "" ? "." + _c(a, 0) : r),
      hp(i)
        ? ((n = ""),
          e != null && (n = e.replace(pp, "$&/") + "/"),
          Ga(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (Ac(i) &&
            (i = vw(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(pp, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), hp(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var l = r + _c(o, s);
      a += Ga(o, t, n, l, i);
    }
  else if (((l = mw(e)), typeof l == "function"))
    for (e = l.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + _c(o, s++)), (a += Ga(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Xa(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ga(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function yw(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status !== 0 && e._status !== -1) ||
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status !== 0 && e._status !== -1) ||
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var tt = { current: null },
  Ya = { transition: null },
  bw = {
    ReactCurrentDispatcher: tt,
    ReactCurrentBatchConfig: Ya,
    ReactCurrentOwner: Oc,
  };
m.Children = {
  map: Xa,
  forEach: function (e, t, n) {
    Xa(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Xa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Xa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ac(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
m.Component = ii;
m.Fragment = aw;
m.Profiler = lw;
m.PureComponent = Lc;
m.StrictMode = sw;
m.Suspense = dw;
m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bw;
m.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = vp({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = Oc.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (l in t)
      bp.call(t, l) &&
        !xp.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    s = Array(l);
    for (var c = 0; c < l; c++) s[c] = arguments[c + 2];
    r.children = s;
  }
  return { $$typeof: ao, type: e.type, key: i, ref: o, props: r, _owner: a };
};
m.createContext = function (e) {
  return (
    (e = {
      $$typeof: uw,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: cw, _context: e }),
    (e.Consumer = e)
  );
};
m.createElement = Sp;
m.createFactory = function (e) {
  var t = Sp.bind(null, e);
  return (t.type = e), t;
};
m.createRef = function () {
  return { current: null };
};
m.forwardRef = function (e) {
  return { $$typeof: fw, render: e };
};
m.isValidElement = Ac;
m.lazy = function (e) {
  return { $$typeof: pw, _payload: { _status: -1, _result: e }, _init: yw };
};
m.memo = function (e, t) {
  return { $$typeof: hw, type: e, compare: t === void 0 ? null : t };
};
m.startTransition = function (e) {
  var t = Ya.transition;
  Ya.transition = {};
  try {
    e();
  } finally {
    Ya.transition = t;
  }
};
m.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
m.useCallback = function (e, t) {
  return tt.current.useCallback(e, t);
};
m.useContext = function (e) {
  return tt.current.useContext(e);
};
m.useDebugValue = function () {};
m.useDeferredValue = function (e) {
  return tt.current.useDeferredValue(e);
};
m.useEffect = function (e, t) {
  return tt.current.useEffect(e, t);
};
m.useId = function () {
  return tt.current.useId();
};
m.useImperativeHandle = function (e, t, n) {
  return tt.current.useImperativeHandle(e, t, n);
};
m.useInsertionEffect = function (e, t) {
  return tt.current.useInsertionEffect(e, t);
};
m.useLayoutEffect = function (e, t) {
  return tt.current.useLayoutEffect(e, t);
};
m.useMemo = function (e, t) {
  return tt.current.useMemo(e, t);
};
m.useReducer = function (e, t, n) {
  return tt.current.useReducer(e, t, n);
};
m.useRef = function (e) {
  return tt.current.useRef(e);
};
m.useState = function (e) {
  return tt.current.useState(e);
};
m.useSyncExternalStore = function (e, t, n) {
  return tt.current.useSyncExternalStore(e, t, n);
};
m.useTransition = function () {
  return tt.current.useTransition();
};
m.version = "18.2.0";
var so = m.Children,
  ke = m.Component,
  Ka = m.Fragment,
  xw = m.Profiler,
  Sw = m.PureComponent,
  ww = m.StrictMode,
  kw = m.Suspense,
  Cw = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  wr = m.cloneElement,
  he = m.createContext,
  re = m.createElement,
  Ew = m.createFactory,
  wp = m.createRef,
  Be = m.forwardRef,
  oi = m.isValidElement,
  Tw = m.lazy,
  Rw = m.memo,
  ai = m.startTransition,
  Iw = m.unstable_act,
  se = m.useCallback,
  M = m.useContext,
  Pw = m.useDebugValue,
  _w = m.useDeferredValue,
  X = m.useEffect,
  kr = m.useId,
  Fw = m.useImperativeHandle,
  Vn = m.useInsertionEffect,
  Cr = m.useLayoutEffect,
  le = m.useMemo,
  Lw = m.useReducer,
  B = m.useRef,
  yt = m.useState,
  Mw = m.useSyncExternalStore,
  Ow = m.useTransition,
  Aw = m.version;
var Vw = Object.create,
  fu = Object.defineProperty,
  Dw = Object.getOwnPropertyDescriptor,
  Dm = Object.getOwnPropertyNames,
  Bw = Object.getPrototypeOf,
  zw = Object.prototype.hasOwnProperty,
  Hw = (e, t, n) =>
    t in e
      ? fu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  tn = (e, t) =>
    function () {
      return t || (0, e[Dm(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  Nw = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of Dm(t))
        !zw.call(e, i) &&
          i !== n &&
          fu(e, i, {
            get: () => t[i],
            enumerable: !(r = Dw(t, i)) || r.enumerable,
          });
    return e;
  },
  $t = (e, t, n) => (
    (n = e != null ? Vw(Bw(e)) : {}),
    Nw(
      t || !e || !e.__esModule
        ? fu(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  I = (e, t, n) => (Hw(e, typeof t != "symbol" ? t + "" : t, n), n),
  Bm = (e, t, n) => {
    if (!t.has(e)) throw TypeError("Cannot " + n);
  },
  ct = (e, t, n) => (
    Bm(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  ko = (e, t, n) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  du = (e, t, n, r) => (
    Bm(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  $w = tn({
    "../../../node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(n) {
        var r = {};
        return function (i) {
          return r[i] === void 0 && (r[i] = n(i)), r[i];
        };
      }
      e.default = t;
    },
  }),
  Ww = tn({
    "../../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(
      e
    ) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(o) {
        return o && typeof o == "object" && "default" in o ? o.default : o;
      }
      var n = t($w()),
        r =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        i = n(function (o) {
          return (
            r.test(o) ||
            (o.charCodeAt(0) === 111 &&
              o.charCodeAt(1) === 110 &&
              o.charCodeAt(2) < 91)
          );
        });
      e.default = i;
    },
  }),
  Hn = he({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Co = he({}),
  hi = he(null),
  Eo = typeof document < "u",
  Wn = Eo ? Cr : X,
  hu = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  Uw = "bingoAppearId",
  hs = "data-" + hu(Uw),
  ps = { skipAnimations: !1, useManualTiming: !1 },
  xo = he({}),
  ms = he({}),
  zm = he({ strict: !1 }),
  kp = class {
    constructor() {
      (this.order = []), (this.scheduled = new Set());
    }
    add(e) {
      if (!this.scheduled.has(e))
        return this.scheduled.add(e), this.order.push(e), !0;
    }
    remove(e) {
      let t = this.order.indexOf(e);
      t !== -1 && (this.order.splice(t, 1), this.scheduled.delete(e));
    }
    clear() {
      (this.order.length = 0), this.scheduled.clear();
    }
  };
function jw(e) {
  let t = new kp(),
    n = new kp(),
    r = 0,
    i = !1,
    o = !1,
    a = new WeakSet(),
    s = {
      schedule: (l, c = !1, u = !1) => {
        let f = u && i,
          d = f ? t : n;
        return c && a.add(l), d.add(l) && f && i && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), a.delete(l);
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let c = 0; c < r; c++) {
            let u = t.order[c];
            a.has(u) && (s.schedule(u), e()), u(l);
          }
        (i = !1), o && ((o = !1), s.process(l));
      },
    };
  return s;
}
var fo = ["prepare", "read", "update", "preRender", "render", "postRender"],
  Xw = 40;
function Hm(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = fo.reduce((f, d) => ((f[d] = jw(() => (n = !0))), f), {}),
    a = (f) => {
      o[f].process(i);
    },
    s = () => {
      let f = ps.useManualTiming ? i.timestamp : performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, Xw), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        fo.forEach(a),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(s));
    },
    l = () => {
      (n = !0), (r = !0), i.isProcessing || e(s);
    };
  return {
    schedule: fo.reduce((f, d) => {
      let p = o[d];
      return (f[d] = (y, b = !1, S = !1) => (n || l(), p.schedule(y, b, S))), f;
    }, {}),
    cancel: (f) => fo.forEach((d) => o[d].cancel(f)),
    state: i,
    steps: o,
  };
}
var { schedule: pu, cancel: RD } = Hm(queueMicrotask, !1);
function Gw(e, t, n, r) {
  let { visualElement: i } = M(Co),
    o = M(zm),
    a = M(hi),
    s = M(Hn).reducedMotion,
    l = B();
  (r = r || o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: s,
      }));
  let c = l.current;
  Vn(() => {
    c && c.update(n, a);
  });
  let u = B(!!(n[hs] && !F.HandoffComplete));
  return (
    Wn(() => {
      c &&
        (pu.postRender(c.render),
        u.current && c.animationState && c.animationState.animateChanges());
    }),
    X(() => {
      c &&
        (c.updateFeatures(),
        !u.current && c.animationState && c.animationState.animateChanges(),
        u.current && ((u.current = !1), (F.HandoffComplete = !0)));
    }),
    c
  );
}
function si(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Yw(e, t, n) {
  return se(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : si(n) && (n.current = r));
    },
    [t]
  );
}
function So(e) {
  return typeof e == "string" || Array.isArray(e);
}
function vs(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
var mu = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  vu = ["initial", ...mu];
function gs(e) {
  return vs(e.animate) || vu.some((t) => So(e[t]));
}
function Nm(e) {
  return !!(gs(e) || e.variants);
}
function Kw(e, t) {
  if (gs(e)) {
    let { initial: n, animate: r } = e;
    return {
      initial: n === !1 || So(n) ? n : void 0,
      animate: So(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function qw(e) {
  let { initial: t, animate: n } = Kw(e, M(Co));
  return le(() => ({ initial: t, animate: n }), [Cp(t), Cp(n)]);
}
function Cp(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
var Ep = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  wo = {};
for (let e in Ep) wo[e] = { isEnabled: (t) => Ep[e].some((n) => !!t[n]) };
function Zw(e) {
  for (let t in e) wo[t] = { ...wo[t], ...e[t] };
}
var gu = Symbol.for("motionComponentSymbol");
function $m({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && Zw(e);
  function o(s, l) {
    let c,
      u = { ...M(Hn), ...s, layoutId: Qw(s) },
      { isStatic: f } = u,
      d = qw(s),
      p = r(s, f);
    if (!f && Eo) {
      d.visualElement = Gw(i, p, u, t);
      let y = M(ms),
        b = M(zm).strict;
      d.visualElement && (c = d.visualElement.loadFeatures(u, b, e, y));
    }
    return re(
      Co.Provider,
      { value: d },
      c && d.visualElement
        ? re(c, { visualElement: d.visualElement, ...u })
        : null,
      n(i, s, Yw(p, d.visualElement, l), p, f, d.visualElement)
    );
  }
  let a = Be(o);
  return (a[gu] = i), a;
}
function Qw({ layoutId: e }) {
  let t = M(xo).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
var os = {};
function yu(e) {
  Object.assign(os, e);
}
var pe = (e) => !!(e && e.getVelocity),
  To = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Mr = new Set(To),
  Jw = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  ek = To.length;
function Wm(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let a = 0; a < ek; a++) {
    let s = To[a];
    if (e[s] !== void 0) {
      let l = Jw[s] || s;
      o += `${l}(${e[s]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
var bn = (e, t, n) => Math.min(Math.max(n, e), t),
  po = (e) => Math.round(e * 1e5) / 1e5,
  ys = /(-)?([\d]*\.?[\d])+/g,
  Um =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  tk =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Ro(e) {
  return typeof e == "string";
}
var Io = (e) => ({
    test: (t) => Ro(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Dn = Io("deg"),
  Qt = Io("%"),
  W = Io("px"),
  nk = Io("vh"),
  rk = Io("vw"),
  Tp = {
    ...Qt,
    parse: (e) => Qt.parse(e) / 100,
    transform: (e) => Qt.transform(e * 100),
  },
  ik = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
  ]);
function fi(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    ik.has(e)
  );
}
var jm = (e) => !fi(e);
function Xm(e) {
  e && (jm = (t) => (t.startsWith("on") ? !fi(t) : e(t)));
}
try {
  Xm(Ww().default);
} catch {}
function Gm(e, t, n) {
  let r = {};
  for (let i in e)
    (i === "values" && typeof e.values == "object") ||
      ((jm(i) ||
        (n === !0 && fi(i)) ||
        (!t && !fi(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
var as = (e) => Array.isArray(e),
  ok = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  ak = (e) => (as(e) ? e[e.length - 1] || 0 : e);
function Ge(e) {
  let t = pe(e) ? e.get() : e;
  return ok(t) ? t.toValue() : t;
}
function bu(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function Sn(e) {
  let t = B(null);
  return t.current === null && (t.current = e()), t.current;
}
function sk(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  let a = { latestValues: lk(r, i, o, e), renderState: t() };
  return n && (a.mount = (s) => n(r, s, a)), a;
}
var bs = (e) => (t, n) => {
  let r = M(Co),
    i = M(hi),
    o = () => sk(e, t, r, i);
  return n ? o() : Sn(o);
};
function lk(e, t, n, r) {
  let i = {},
    o = r(e, {});
  for (let d in o) i[d] = Ge(o[d]);
  let { initial: a, animate: s } = e,
    l = gs(e),
    c = Nm(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || a === !1;
  let f = u ? s : a;
  return (
    f &&
      typeof f != "boolean" &&
      !vs(f) &&
      (Array.isArray(f) ? f : [f]).forEach((p) => {
        let y = bu(e, p);
        if (!y) return;
        let { transitionEnd: b, transition: S, ...h } = y;
        for (let v in h) {
          let g = h[v];
          if (Array.isArray(g)) {
            let x = u ? g.length - 1 : 0;
            g = g[x];
          }
          g !== null && (i[v] = g);
        }
        for (let v in b) i[v] = b[v];
      }),
    i
  );
}
var xe = (e) => e,
  {
    schedule: q,
    cancel: nt,
    state: be,
    steps: es,
  } = Hm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : xe, !0),
  Ym = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function xs(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
var Km = (e) => (t) => Ym(t) && e(t, xs(t));
function vn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Jt(e, t, n, r) {
  return vn(e, t, Km(n), r);
}
var ck = (e, t) => (n) => t(e(n)),
  gn = (...e) => e.reduce(ck);
function qm(e) {
  let t = null;
  return () => {
    let n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
var Rp = qm("dragHorizontal"),
  Ip = qm("dragVertical");
function Zm(e) {
  let t = !1;
  if (e === "y") t = Ip();
  else if (e === "x") t = Rp();
  else {
    let n = Rp(),
      r = Ip();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function xu() {
  let e = Zm(!0);
  return e ? (e(), !1) : !0;
}
var Po = xe,
  Ye = xe,
  Qm = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  uk = 1e-7,
  fk = 12;
function dk(e, t, n, r, i) {
  let o,
    a,
    s = 0;
  do (a = t + (n - t) / 2), (o = Qm(a, r, i) - e), o > 0 ? (n = a) : (t = a);
  while (Math.abs(o) > uk && ++s < fk);
  return a;
}
function pi(e, t, n, r) {
  if (e === t && n === r) return xe;
  let i = (o) => dk(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Qm(i(o), t, r));
}
var Jm = pi(0.42, 0, 1, 1),
  ev = pi(0, 0, 0.58, 1),
  Su = pi(0.42, 0, 0.58, 1),
  wu = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  ku = (e) => (t) => 1 - e(1 - t),
  Ss = (e) => 1 - Math.sin(Math.acos(e)),
  Cu = ku(Ss),
  tv = wu(Ss),
  Eu = pi(0.33, 1.53, 0.69, 0.99),
  ws = ku(Eu),
  nv = wu(ws),
  rv = (e) =>
    (e *= 2) < 1 ? 0.5 * ws(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Or = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  mo = { ...Or, transform: (e) => bn(0, 1, e) },
  qa = { ...Or, default: 1 },
  Tu = (e, t) => (n) =>
    !!(
      (Ro(n) && tk.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  iv = (e, t, n) => (r) => {
    if (!Ro(r)) return r;
    let [i, o, a, s] = r.match(ys);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(a),
      alpha: s !== void 0 ? parseFloat(s) : 1,
    };
  },
  hk = (e) => bn(0, 255, e),
  Vc = { ...Or, transform: (e) => Math.round(hk(e)) },
  Pr = {
    test: Tu("rgb", "red"),
    parse: iv("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Vc.transform(e) +
      ", " +
      Vc.transform(t) +
      ", " +
      Vc.transform(n) +
      ", " +
      po(mo.transform(r)) +
      ")",
  };
function pk(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var Yc = { test: Tu("#"), parse: pk, transform: Pr.transform },
  li = {
    test: Tu("hsl", "hue"),
    parse: iv("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Qt.transform(po(t)) +
      ", " +
      Qt.transform(po(n)) +
      ", " +
      po(mo.transform(r)) +
      ")",
  },
  Xe = {
    test: (e) => Pr.test(e) || Yc.test(e) || li.test(e),
    parse: (e) =>
      Pr.test(e) ? Pr.parse(e) : li.test(e) ? li.parse(e) : Yc.parse(e),
    transform: (e) =>
      Ro(e) ? e : e.hasOwnProperty("red") ? Pr.transform(e) : li.transform(e),
  },
  oe = (e, t, n) => -n * e + n * t + e,
  ov = (e) => (t) => typeof t == "string" && t.startsWith(e),
  av = ov("--"),
  Kc = ov("var(--"),
  mk =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;
function vk(e) {
  var t, n;
  return (
    isNaN(e) &&
    Ro(e) &&
    (((t = e.match(ys)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Um)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
var sv = { regex: mk, countKey: "Vars", token: "${v}", parse: xe },
  lv = { regex: Um, countKey: "Colors", token: "${c}", parse: Xe.parse },
  cv = { regex: ys, countKey: "Numbers", token: "${n}", parse: Or.parse };
function Dc(e, { regex: t, countKey: n, token: r, parse: i }) {
  let o = e.tokenised.match(t);
  o &&
    ((e["num" + n] = o.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...o.map(i)));
}
function ss(e) {
  let t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && Dc(n, sv), Dc(n, lv), Dc(n, cv), n;
}
function uv(e) {
  return ss(e).values;
}
function fv(e) {
  let { values: t, numColors: n, numVars: r, tokenised: i } = ss(e),
    o = t.length;
  return (a) => {
    let s = i;
    for (let l = 0; l < o; l++)
      l < r
        ? (s = s.replace(sv.token, a[l]))
        : l < r + n
        ? (s = s.replace(lv.token, Xe.transform(a[l])))
        : (s = s.replace(cv.token, po(a[l])));
    return s;
  };
}
var gk = (e) => (typeof e == "number" ? 0 : e);
function yk(e) {
  let t = uv(e);
  return fv(e)(t.map(gk));
}
var xn = { test: vk, parse: uv, createTransformer: fv, getAnimatableNone: yk },
  Nn = (e, t, n) => {
    let r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
function Bc(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function bk({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    a = 0;
  if (!t) i = o = a = n;
  else {
    let s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - s;
    (i = Bc(l, s, e + 1 / 3)), (o = Bc(l, s, e)), (a = Bc(l, s, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(a * 255),
    alpha: r,
  };
}
var zc = (e, t, n) => {
    let r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  xk = [Yc, Pr, li],
  Sk = (e) => xk.find((t) => t.test(e));
function Pp(e) {
  let t = Sk(e);
  Ye(
    !!t,
    `'${e}' is not an animatable color. Use the equivalent color code instead.`
  );
  let n = t.parse(e);
  return t === li && (n = bk(n)), n;
}
var dv = (e, t) => {
    let n = Pp(e),
      r = Pp(t),
      i = { ...n };
    return (o) => (
      (i.red = zc(n.red, r.red, o)),
      (i.green = zc(n.green, r.green, o)),
      (i.blue = zc(n.blue, r.blue, o)),
      (i.alpha = oe(n.alpha, r.alpha, o)),
      Pr.transform(i)
    );
  },
  hv = (e, t) => (n) => `${n > 0 ? t : e}`;
function pv(e, t) {
  return typeof e == "number"
    ? (n) => oe(e, t, n)
    : Xe.test(e)
    ? dv(e, t)
    : e.startsWith("var(")
    ? hv(e, t)
    : vv(e, t);
}
var mv = (e, t) => {
    let n = [...e],
      r = n.length,
      i = e.map((o, a) => pv(o, t[a]));
    return (o) => {
      for (let a = 0; a < r; a++) n[a] = i[a](o);
      return n;
    };
  },
  wk = (e, t) => {
    let n = { ...e, ...t },
      r = {};
    for (let i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = pv(e[i], t[i]));
    return (i) => {
      for (let o in r) n[o] = r[o](i);
      return n;
    };
  },
  vv = (e, t) => {
    let n = xn.createTransformer(t),
      r = ss(e),
      i = ss(t);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? gn(mv(r.values, i.values), n)
      : (Po(
          !0,
          `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
        ),
        hv(e, t));
  },
  _p = (e, t) => (n) => oe(e, t, n);
function kk(e) {
  return typeof e == "number"
    ? _p
    : typeof e == "string"
    ? Xe.test(e)
      ? dv
      : vv
    : Array.isArray(e)
    ? mv
    : typeof e == "object"
    ? wk
    : _p;
}
function Ck(e, t, n) {
  let r = [],
    i = n || kk(e[0]),
    o = e.length - 1;
  for (let a = 0; a < o; a++) {
    let s = i(e[a], e[a + 1]);
    if (t) {
      let l = Array.isArray(t) ? t[a] || xe : t;
      s = gn(l, s);
    }
    r.push(s);
  }
  return r;
}
function Ar(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let o = e.length;
  if (
    (Ye(o === t.length, "Both input and output ranges must be the same length"),
    o === 1)
  )
    return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let a = Ck(t, r, i),
    s = a.length,
    l = (c) => {
      let u = 0;
      if (s > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++);
      let f = Nn(e[u], e[u + 1], c);
      return a[u](f);
    };
  return n ? (c) => l(bn(e[0], e[o - 1], c)) : l;
}
var yn = (e) => e * 1e3,
  en = (e) => e / 1e3;
function Ru(e, t) {
  return t ? e * (1e3 / t) : 0;
}
var Ek = 5;
function gv(e, t, n) {
  let r = Math.max(t - Ek, 0);
  return Ru(n - e(r), t - r);
}
var Hc = 0.001,
  Tk = 0.01,
  Fp = 10,
  Rk = 0.05,
  Ik = 1;
function Pk({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  Po(e <= yn(Fp), "Spring duration must be 10 seconds or less");
  let a = 1 - t;
  (a = bn(Rk, Ik, a)),
    (e = bn(Tk, Fp, en(e))),
    a < 1
      ? ((i = (c) => {
          let u = c * a,
            f = u * e,
            d = u - n,
            p = qc(c, a),
            y = Math.exp(-f);
          return Hc - (d / p) * y;
        }),
        (o = (c) => {
          let f = c * a * e,
            d = f * n + n,
            p = Math.pow(a, 2) * Math.pow(c, 2) * e,
            y = Math.exp(-f),
            b = qc(Math.pow(c, 2), a);
          return ((-i(c) + Hc > 0 ? -1 : 1) * ((d - p) * y)) / b;
        }))
      : ((i = (c) => {
          let u = Math.exp(-c * e),
            f = (c - n) * e + 1;
          return -Hc + u * f;
        }),
        (o = (c) => {
          let u = Math.exp(-c * e),
            f = (n - c) * (e * e);
          return u * f;
        }));
  let s = 5 / e,
    l = Fk(i, o, s);
  if (((e = yn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    let c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: a * 2 * Math.sqrt(r * c), duration: e };
  }
}
var _k = 12;
function Fk(e, t, n) {
  let r = n;
  for (let i = 1; i < _k; i++) r = r - e(r) / t(r);
  return r;
}
function qc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var Lk = ["duration", "bounce"],
  Mk = ["stiffness", "damping", "mass"];
function Lp(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Ok(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Lp(e, Mk) && Lp(e, Lk)) {
    let n = Pk(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function _o({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  let i = e[0],
    o = e[e.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: s,
      damping: l,
      mass: c,
      duration: u,
      velocity: f,
      isResolvedFromDuration: d,
    } = Ok({ ...r, velocity: -en(r.velocity || 0) }),
    p = f || 0,
    y = l / (2 * Math.sqrt(s * c)),
    b = o - i,
    S = en(Math.sqrt(s / c)),
    h = Math.abs(b) < 5;
  n || (n = h ? 0.01 : 2), t || (t = h ? 0.005 : 0.5);
  let v;
  if (y < 1) {
    let g = qc(S, y);
    v = (x) => {
      let k = Math.exp(-y * S * x);
      return (
        o - k * (((p + y * S * b) / g) * Math.sin(g * x) + b * Math.cos(g * x))
      );
    };
  } else if (y === 1) v = (g) => o - Math.exp(-S * g) * (b + (p + S * b) * g);
  else {
    let g = S * Math.sqrt(y * y - 1);
    v = (x) => {
      let k = Math.exp(-y * S * x),
        w = Math.min(g * x, 300);
      return (
        o - (k * ((p + y * S * b) * Math.sinh(w) + g * b * Math.cosh(w))) / g
      );
    };
  }
  return {
    calculatedDuration: (d && u) || null,
    next: (g) => {
      let x = v(g);
      if (d) a.done = g >= u;
      else {
        let k = p;
        g !== 0 && (y < 1 ? (k = gv(v, g, x)) : (k = 0));
        let w = Math.abs(k) <= n,
          E = Math.abs(o - x) <= t;
        a.done = w && E;
      }
      return (a.value = a.done ? o : x), a;
    },
  };
}
var yv = (e) => Array.isArray(e) && typeof e[0] != "number",
  Mp = {
    linear: xe,
    easeIn: Jm,
    easeInOut: Su,
    easeOut: ev,
    circIn: Ss,
    circInOut: tv,
    circOut: Cu,
    backIn: ws,
    backInOut: nv,
    backOut: Eu,
    anticipate: rv,
  },
  Op = (e) => {
    if (Array.isArray(e)) {
      Ye(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values."
      );
      let [t, n, r, i] = e;
      return pi(t, n, r, i);
    } else if (typeof e == "string")
      return Ye(Mp[e] !== void 0, `Invalid easing type '${e}'`), Mp[e];
    return e;
  };
function bv(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = Nn(0, t, r);
    e.push(oe(n, 1, i));
  }
}
function Iu(e) {
  let t = [0];
  return bv(t, e.length - 1), t;
}
function Ak(e, t) {
  return e.map((n) => n * t);
}
function Vk(e, t) {
  return e.map(() => t || Su).splice(0, e.length - 1);
}
function ls({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  let i = yv(r) ? r.map(Op) : Op(r),
    o = { done: !1, value: t[0] },
    a = Ak(n && n.length === t.length ? n : Iu(t), e),
    s = Ar(a, t, { ease: Array.isArray(i) ? i : Vk(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = s(l)), (o.done = l >= e), o),
  };
}
function Ap({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: a,
  min: s,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  let f = e[0],
    d = { done: !1, value: f },
    p = (C) => (s !== void 0 && C < s) || (l !== void 0 && C > l),
    y = (C) =>
      s === void 0
        ? l
        : l === void 0 || Math.abs(s - C) < Math.abs(l - C)
        ? s
        : l,
    b = n * t,
    S = f + b,
    h = a === void 0 ? S : a(S);
  h !== S && (b = h - f);
  let v = (C) => -b * Math.exp(-C / r),
    g = (C) => h + v(C),
    x = (C) => {
      let T = v(C),
        R = g(C);
      (d.done = Math.abs(T) <= c), (d.value = d.done ? h : R);
    },
    k,
    w,
    E = (C) => {
      p(d.value) &&
        ((k = C),
        (w = _o({
          keyframes: [d.value, y(d.value)],
          velocity: gv(g, C, d.value),
          damping: i,
          stiffness: o,
          restDelta: c,
          restSpeed: u,
        })));
    };
  return (
    E(0),
    {
      calculatedDuration: null,
      next: (C) => {
        let T = !1;
        return (
          !w && k === void 0 && ((T = !0), x(C), E(C)),
          k !== void 0 && C > k ? w.next(C - k) : (!T && x(C), d)
        );
      },
    }
  );
}
var ts;
function Dk() {
  ts = void 0;
}
var _r = {
    now: () => (
      ts === void 0 &&
        _r.set(
          be.isProcessing || ps.useManualTiming
            ? be.timestamp
            : performance.now()
        ),
      ts
    ),
    set: (e) => {
      (ts = e), queueMicrotask(Dk);
    },
  },
  Bk = (e) => {
    let t = ({ timestamp: n }) => e(n);
    return {
      start: () => q.update(t, !0),
      stop: () => nt(t),
      now: () => (be.isProcessing ? be.timestamp : _r.now()),
    };
  },
  Zc = 2e4;
function Qc(e) {
  let t = 0,
    n = 50,
    r = e.next(t);
  for (; !r.done && t < Zc; ) (t += n), (r = e.next(t));
  return t >= Zc ? 1 / 0 : t;
}
var zk = { decay: Ap, inertia: Ap, tween: ls, keyframes: ls, spring: _o };
function Lr({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = Bk,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: a = 0,
  repeatType: s = "loop",
  onPlay: l,
  onStop: c,
  onComplete: u,
  onUpdate: f,
  ...d
}) {
  let p = 1,
    y = !1,
    b,
    S,
    h = () => {
      S = new Promise((N) => {
        b = N;
      });
    };
  h();
  let v,
    g = zk[i] || ls,
    x;
  g !== ls &&
    typeof r[0] != "number" &&
    ((x = Ar([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  let k = g({ ...d, keyframes: r }),
    w;
  s === "mirror" &&
    (w = g({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let E = "idle",
    C = null,
    T = null,
    R = null;
  k.calculatedDuration === null && o && (k.calculatedDuration = Qc(k));
  let { calculatedDuration: D } = k,
    L = 1 / 0,
    z = 1 / 0;
  D !== null && ((L = D + a), (z = L * (o + 1) - a));
  let O = 0,
    V = (N) => {
      if (T === null) return;
      p > 0 && (T = Math.min(T, N)),
        p < 0 && (T = Math.min(N - z / p, T)),
        C !== null ? (O = C) : (O = Math.round(N - T) * p);
      let Q = O - t * (p >= 0 ? 1 : -1),
        ne = p >= 0 ? Q < 0 : Q > z;
      (O = Math.max(Q, 0)), E === "finished" && C === null && (O = z);
      let Z = O,
        We = k;
      if (o) {
        let J = Math.min(O, z) / L,
          Nt = Math.floor(J),
          _e = J % 1;
        !_e && J >= 1 && (_e = 1),
          _e === 1 && Nt--,
          (Nt = Math.min(Nt, o + 1)),
          !!(Nt % 2) &&
            (s === "reverse"
              ? ((_e = 1 - _e), a && (_e -= a / L))
              : s === "mirror" && (We = w)),
          (Z = bn(0, 1, _e) * L);
      }
      let gt = ne ? { done: !1, value: r[0] } : We.next(Z);
      x && (gt.value = x(gt.value));
      let { done: De } = gt;
      !ne && D !== null && (De = p >= 0 ? O >= z : O <= 0);
      let Ue = C === null && (E === "finished" || (E === "running" && De));
      return f && f(gt.value), Ue && Y(), gt;
    },
    H = () => {
      v && v.stop(), (v = void 0);
    },
    P = () => {
      (E = "idle"), H(), b(), h(), (T = R = null);
    },
    Y = () => {
      (E = "finished"), u && u(), H(), b();
    },
    G = () => {
      if (y) return;
      v || (v = n(V));
      let N = v.now();
      l && l(),
        C !== null ? (T = N - C) : (!T || E === "finished") && (T = N),
        E === "finished" && h(),
        (R = T),
        (C = null),
        (E = "running"),
        v.start();
    };
  e && G();
  let K = {
    then(N, Q) {
      return S.then(N, Q);
    },
    get time() {
      return en(O);
    },
    set time(N) {
      (N = yn(N)),
        (O = N),
        C !== null || !v || p === 0 ? (C = N) : (T = v.now() - N / p);
    },
    get duration() {
      let N = k.calculatedDuration === null ? Qc(k) : k.calculatedDuration;
      return en(N);
    },
    get speed() {
      return p;
    },
    set speed(N) {
      N === p || !v || ((p = N), (K.time = en(O)));
    },
    get state() {
      return E;
    },
    play: G,
    pause: () => {
      (E = "paused"), (C = O);
    },
    stop: () => {
      (y = !0), E !== "idle" && ((E = "idle"), c && c(), P());
    },
    cancel: () => {
      R !== null && V(R), P();
    },
    complete: () => {
      E = "finished";
    },
    sample: (N) => ((T = 0), V(N)),
  };
  return K;
}
function Pu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ks(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function Hk([...e], t, n) {
  let r = t < 0 ? e.length + t : t;
  if (r >= 0 && r < e.length) {
    let i = n < 0 ? e.length + n : n,
      [o] = e.splice(t, 1);
    e.splice(i, 0, o);
  }
  return e;
}
var _u = class {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return Pu(this.subscriptions, e), () => ks(this.subscriptions, e);
    }
    notify(e, t, n) {
      let r = this.subscriptions.length;
      if (r)
        if (r === 1) this.subscriptions[0](e, t, n);
        else
          for (let i = 0; i < r; i++) {
            let o = this.subscriptions[i];
            o && o(e, t, n);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  },
  Vp = 30,
  Nk = (e) => !isNaN(parseFloat(e)),
  vo = { current: void 0 },
  Cs = class {
    constructor(e, t = {}) {
      (this.version = "11.0.3"),
        (this.canTrackVelocity = !1),
        (this.events = {}),
        (this.updateAndNotify = (n, r = !0) => {
          let i = _r.now();
          this.updatedAt !== i && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(n),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            r &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current);
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.canTrackVelocity = Nk(this.current)),
        (this.owner = t.owner);
    }
    setCurrent(e) {
      (this.current = e), (this.updatedAt = _r.now());
    }
    setPrevFrameValue(e = this.current) {
      (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(e) {
      return this.on("change", e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new _u());
      let n = this.events[e].add(t);
      return e === "change"
        ? () => {
            n(),
              q.read(() => {
                this.events.change.getSize() || this.stop();
              });
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      (this.passiveEffect = e), (this.stopPassiveEffect = t);
    }
    set(e, t = !0) {
      !t || !this.passiveEffect
        ? this.updateAndNotify(e, t)
        : this.passiveEffect(e, this.updateAndNotify);
    }
    setWithVelocity(e, t, n) {
      this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n);
    }
    jump(e) {
      this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return vo.current && vo.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = _r.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > Vp
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, Vp);
      return Ru(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          (this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation();
        })
      );
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
  };
function Ce(e, t) {
  return new Cs(e, t);
}
var xv = (e) => /^\-?\d*\.?\d+$/.test(e),
  Sv = (e) => /^0[^.\s]+$/.test(e),
  $k = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Wk(e) {
  let [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  let [r] = n.match(ys) || [];
  if (!r) return e;
  let i = n.replace(r, ""),
    o = $k.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
var Uk = /([a-z-]*)\(.*?\)/g,
  Jc = {
    ...xn,
    getAnimatableNone: (e) => {
      let t = e.match(Uk);
      return t ? t.map(Wk).join(" ") : e;
    },
  },
  Dp = { ...Or, transform: Math.round },
  wv = {
    borderWidth: W,
    borderTopWidth: W,
    borderRightWidth: W,
    borderBottomWidth: W,
    borderLeftWidth: W,
    borderRadius: W,
    radius: W,
    borderTopLeftRadius: W,
    borderTopRightRadius: W,
    borderBottomRightRadius: W,
    borderBottomLeftRadius: W,
    width: W,
    maxWidth: W,
    height: W,
    maxHeight: W,
    size: W,
    top: W,
    right: W,
    bottom: W,
    left: W,
    padding: W,
    paddingTop: W,
    paddingRight: W,
    paddingBottom: W,
    paddingLeft: W,
    margin: W,
    marginTop: W,
    marginRight: W,
    marginBottom: W,
    marginLeft: W,
    rotate: Dn,
    rotateX: Dn,
    rotateY: Dn,
    rotateZ: Dn,
    scale: qa,
    scaleX: qa,
    scaleY: qa,
    scaleZ: qa,
    skew: Dn,
    skewX: Dn,
    skewY: Dn,
    distance: W,
    translateX: W,
    translateY: W,
    translateZ: W,
    x: W,
    y: W,
    z: W,
    perspective: W,
    transformPerspective: W,
    opacity: mo,
    originX: Tp,
    originY: Tp,
    originZ: W,
    zIndex: Dp,
    fillOpacity: mo,
    strokeOpacity: mo,
    numOctaves: Dp,
  },
  jk = {
    ...wv,
    color: Xe,
    backgroundColor: Xe,
    outlineColor: Xe,
    fill: Xe,
    stroke: Xe,
    borderColor: Xe,
    borderTopColor: Xe,
    borderRightColor: Xe,
    borderBottomColor: Xe,
    borderLeftColor: Xe,
    filter: Jc,
    WebkitFilter: Jc,
  },
  Fu = (e) => jk[e];
function kv(e, t) {
  let n = Fu(e);
  return (
    n !== Jc && (n = xn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
var Cv = (e) => (t) => t.test(e),
  Xk = { test: (e) => e === "auto", parse: (e) => e },
  Ev = [Or, W, Qt, Dn, rk, nk, Xk],
  lo = (e) => Ev.find(Cv(e)),
  Gk = [...Ev, Xe, xn],
  Yk = (e) => Gk.find(Cv(e));
function Kk(e) {
  let t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function qk(e) {
  let t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Es(e, t, n) {
  let r = e.getProps();
  return bu(r, t, n !== void 0 ? n : r.custom, Kk(e), qk(e));
}
function Zk(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ce(n));
}
function Lu(e, t) {
  let n = Es(e, t),
    {
      transitionEnd: r = {},
      transition: i = {},
      ...o
    } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (let a in o) {
    let s = ak(o[a]);
    Zk(e, a, s);
  }
}
function eu(e, t) {
  [...t].reverse().forEach((r) => {
    let i = e.getVariant(r);
    i && Lu(e, i),
      e.variantChildren &&
        e.variantChildren.forEach((o) => {
          eu(o, t);
        });
  });
}
function Qk(e, t) {
  if (Array.isArray(t)) return eu(e, t);
  if (typeof t == "string") return eu(e, [t]);
  Lu(e, t);
}
function Tv(e, t, n) {
  var r, i;
  let o = Object.keys(t).filter((s) => !e.hasValue(s)),
    a = o.length;
  if (a)
    for (let s = 0; s < a; s++) {
      let l = o[s],
        c = t[l],
        u = null;
      Array.isArray(c) && (u = c[0]),
        u === null &&
          (u =
            (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && i !== void 0
              ? i
              : t[l]),
        u != null &&
          (typeof u == "string" && (xv(u) || Sv(u))
            ? (u = parseFloat(u))
            : !Yk(u) && xn.test(c) && (u = kv(l, c)),
          e.addValue(l, Ce(u, { owner: e })),
          n[l] === void 0 && (n[l] = u),
          u !== null && e.setBaseTarget(l, u));
    }
}
function Jk(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function eC(e, t, n) {
  let r = {};
  for (let i in e) {
    let o = Jk(i, t);
    if (o !== void 0) r[i] = o;
    else {
      let a = n.getValue(i);
      a && (r[i] = a.get());
    }
  }
  return r;
}
var cs = { current: !1 },
  Rv = (e) => Array.isArray(e) && typeof e[0] == "number";
function Iv(e) {
  return !!(
    !e ||
    (typeof e == "string" && Pv[e]) ||
    Rv(e) ||
    (Array.isArray(e) && e.every(Iv))
  );
}
var ho = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Pv = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ho([0, 0.65, 0.55, 1]),
    circOut: ho([0.55, 0, 1, 0.45]),
    backIn: ho([0.31, 0.01, 0.66, -0.59]),
    backOut: ho([0.33, 1.53, 0.69, 0.99]),
  };
function _v(e) {
  if (e) return Rv(e) ? ho(e) : Array.isArray(e) ? e.map(_v) : Pv[e];
}
function tC(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: a = "loop",
    ease: s,
    times: l,
  } = {}
) {
  let c = { [t]: n };
  l && (c.offset = l);
  let u = _v(s);
  return (
    Array.isArray(u) && (c.easing = u),
    e.animate(c, {
      delay: r,
      duration: i,
      easing: Array.isArray(u) ? "linear" : u,
      fill: "both",
      iterations: o + 1,
      direction: a === "reverse" ? "alternate" : "normal",
    })
  );
}
function nC(e, { repeat: t, repeatType: n = "loop" }) {
  let r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
function Fv(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var rC = Fv(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  iC = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Za = 10,
  oC = 2e4,
  aC = (e, t) => t.type === "spring" || e === "backgroundColor" || !Iv(t.ease);
function sC(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      rC() &&
      iC.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let a = !1,
    s,
    l,
    c = !1,
    u = () => {
      l = new Promise((g) => {
        s = g;
      });
    };
  u();
  let { keyframes: f, duration: d = 300, ease: p, times: y } = i;
  if (aC(t, i)) {
    let g = Lr({ ...i, repeat: 0, delay: 0 }),
      x = { done: !1, value: f[0] },
      k = [],
      w = 0;
    for (; !x.done && w < oC; ) (x = g.sample(w)), k.push(x.value), (w += Za);
    (y = void 0), (f = k), (d = w - Za), (p = "linear");
  }
  let b = tC(e.owner.current, t, f, { ...i, duration: d, ease: p, times: y }),
    S = () => {
      (c = !1), b.cancel();
    },
    h = () => {
      (c = !0), q.update(S), s(), u();
    };
  return (
    (b.onfinish = () => {
      c || (e.set(nC(f, i)), r && r(), h());
    }),
    {
      then(g, x) {
        return l.then(g, x);
      },
      attachTimeline(g) {
        return (b.timeline = g), (b.onfinish = null), xe;
      },
      get time() {
        return en(b.currentTime || 0);
      },
      set time(g) {
        b.currentTime = yn(g);
      },
      get speed() {
        return b.playbackRate;
      },
      set speed(g) {
        b.playbackRate = g;
      },
      get duration() {
        return en(d);
      },
      play: () => {
        a || (b.play(), nt(S));
      },
      pause: () => b.pause(),
      stop: () => {
        if (((a = !0), b.playState === "idle")) return;
        let { currentTime: g } = b;
        if (g) {
          let x = Lr({ ...i, autoplay: !1 });
          e.setWithVelocity(x.sample(g - Za).value, x.sample(g).value, Za);
        }
        h();
      },
      complete: () => {
        c || b.finish();
      },
      cancel: h,
    }
  );
}
function lC({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  let i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: xe,
      pause: xe,
      stop: xe,
      then: (o) => (o(), Promise.resolve()),
      cancel: xe,
      complete: xe,
    }
  );
  return t
    ? Lr({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
var cC = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  uC = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  fC = { type: "keyframes", duration: 0.8 },
  dC = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  hC = (e, { keyframes: t }) =>
    t.length > 2
      ? fC
      : Mr.has(e)
      ? e.startsWith("scale")
        ? uC(t[1])
        : cC
      : dC,
  tu = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (xn.test(t) || t === "0") &&
            !t.startsWith("url("))
        );
function pC(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || Sv(e);
}
function mC(e, t, n, r) {
  let i = tu(t, n),
    o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  let a = r.from !== void 0 ? r.from : e.get(),
    s,
    l = [];
  for (let c = 0; c < o.length; c++)
    o[c] === null && (o[c] = c === 0 ? a : o[c - 1]),
      pC(o[c]) && l.push(c),
      typeof o[c] == "string" && o[c] !== "none" && o[c] !== "0" && (s = o[c]);
  if (i && l.length && s)
    for (let c = 0; c < l.length; c++) {
      let u = l[c];
      o[u] = kv(t, s);
    }
  return o;
}
function vC({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: a,
  repeatDelay: s,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
function Mu(e, t) {
  return e[t] || e.default || e;
}
var Ou =
  (e, t, n, r = {}) =>
  (i) => {
    let o = Mu(r, e) || {},
      a = o.delay || r.delay || 0,
      { elapsed: s = 0 } = r;
    s = s - yn(a);
    let l = mC(t, e, n, o),
      c = l[0],
      u = l[l.length - 1],
      f = tu(e, c),
      d = tu(e, u);
    Po(
      f === d,
      `You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`
    );
    let p = {
      keyframes: l,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...o,
      delay: -s,
      onUpdate: (y) => {
        t.set(y), o.onUpdate && o.onUpdate(y);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      },
    };
    if (
      (vC(o) || (p = { ...p, ...hC(e, p) }),
      p.duration && (p.duration = yn(p.duration)),
      p.repeatDelay && (p.repeatDelay = yn(p.repeatDelay)),
      !f || !d || cs.current || o.type === !1 || ps.skipAnimations)
    )
      return lC(cs.current ? { ...p, delay: 0 } : p);
    if (
      !r.isHandoff &&
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      let y = sC(t, e, p);
      if (y) return y;
    }
    return Lr(p);
  };
function us(e) {
  return !!(pe(e) && e.add);
}
function gC({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function yC(e, t) {
  let n = e.get();
  if (Array.isArray(t)) {
    for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
  } else return n !== t;
}
function Au(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
      transition: o = e.getDefaultTransition(),
      transitionEnd: a,
      ...s
    } = e.makeTargetAnimatable(t),
    l = e.getValue("willChange");
  r && (o = r);
  let c = [],
    u = i && e.animationState && e.animationState.getState()[i];
  for (let f in s) {
    let d = e.getValue(f),
      p = s[f];
    if (!d || p === void 0 || (u && gC(u, f))) continue;
    let y = { delay: n, elapsed: 0, ...Mu(o || {}, f) };
    if (F.HandoffAppearAnimations) {
      let h = e.getProps()[hs];
      if (h) {
        let v = F.HandoffAppearAnimations(h, f, d, q);
        v !== null && ((y.elapsed = v), (y.isHandoff = !0));
      }
    }
    let b = !y.isHandoff && !yC(d, p);
    if (
      (y.type === "spring" && (d.getVelocity() || y.velocity) && (b = !1),
      d.animation && (b = !1),
      b)
    )
      continue;
    d.start(Ou(f, d, p, e.shouldReduceMotion && Mr.has(f) ? { type: !1 } : y));
    let S = d.animation;
    us(l) && (l.add(f), S.then(() => l.remove(f))), c.push(S);
  }
  return (
    a &&
      Promise.all(c).then(() => {
        a && Lu(e, a);
      }),
    c
  );
}
function nu(e, t, n = {}) {
  let r = Es(e, t, n.custom),
    { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  let o = r ? () => Promise.all(Au(e, r, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            let {
              delayChildren: c = 0,
              staggerChildren: u,
              staggerDirection: f,
            } = i;
            return bC(e, t, c + l, u, f, n);
          }
        : () => Promise.resolve(),
    { when: s } = i;
  if (s) {
    let [l, c] = s === "beforeChildren" ? [o, a] : [a, o];
    return l().then(() => c());
  } else return Promise.all([o(), a(n.delay)]);
}
function bC(e, t, n = 0, r = 0, i = 1, o) {
  let a = [],
    s = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (c = 0) => c * r : (c = 0) => s - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(xC)
      .forEach((c, u) => {
        c.notify("AnimationStart", t),
          a.push(
            nu(c, t, { ...o, delay: n + l(u) }).then(() =>
              c.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(a)
  );
}
function xC(e, t) {
  return e.sortNodePosition(t);
}
function Vu(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((o) => nu(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = nu(e, t, n);
  else {
    let i = typeof t == "function" ? Es(e, t, n.custom) : t;
    r = Promise.all(Au(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
function Lv(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
var SC = [...mu].reverse(),
  wC = mu.length;
function kC(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Vu(e, n, r)));
}
function CC(e) {
  let t = kC(e),
    n = TC(),
    r = !0,
    i = (l, c) => {
      let u = Es(e, c);
      if (u) {
        let { transition: f, transitionEnd: d, ...p } = u;
        l = { ...l, ...p, ...d };
      }
      return l;
    };
  function o(l) {
    t = l(e);
  }
  function a(l, c) {
    let u = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      p = new Set(),
      y = {},
      b = 1 / 0;
    for (let h = 0; h < wC; h++) {
      let v = SC[h],
        g = n[v],
        x = u[v] !== void 0 ? u[v] : f[v],
        k = So(x),
        w = v === c ? g.isActive : null;
      w === !1 && (b = h);
      let E = x === f[v] && x !== u[v] && k;
      if (
        (E && r && e.manuallyAnimateOnMount && (E = !1),
        (g.protectedKeys = { ...y }),
        (!g.isActive && w === null) ||
          (!x && !g.prevProp) ||
          vs(x) ||
          typeof x == "boolean")
      )
        continue;
      let T =
          EC(g.prevProp, x) ||
          (v === c && g.isActive && !E && k) ||
          (h > b && k),
        R = !1,
        D = Array.isArray(x) ? x : [x],
        L = D.reduce(i, {});
      w === !1 && (L = {});
      let { prevResolvedValues: z = {} } = g,
        O = { ...z, ...L },
        V = (H) => {
          (T = !0),
            p.has(H) && ((R = !0), p.delete(H)),
            (g.needsAnimating[H] = !0);
        };
      for (let H in O) {
        let P = L[H],
          Y = z[H];
        if (y.hasOwnProperty(H)) continue;
        let G = !1;
        as(P) && as(Y) ? (G = !Lv(P, Y)) : (G = P !== Y),
          G
            ? P !== void 0
              ? V(H)
              : p.add(H)
            : P !== void 0 && p.has(H)
            ? V(H)
            : (g.protectedKeys[H] = !0);
      }
      (g.prevProp = x),
        (g.prevResolvedValues = L),
        g.isActive && (y = { ...y, ...L }),
        r && e.blockInitialAnimation && (T = !1),
        T &&
          (!E || R) &&
          d.push(
            ...D.map((H) => ({ animation: H, options: { type: v, ...l } }))
          );
    }
    if (p.size) {
      let h = {};
      p.forEach((v) => {
        let g = e.getBaseTarget(v);
        g !== void 0 && (h[v] = g);
      }),
        d.push({ animation: h });
    }
    let S = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (S = !1),
      (r = !1),
      S ? t(d) : Promise.resolve()
    );
  }
  function s(l, c, u) {
    var f;
    if (n[l].isActive === c) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((p) => {
        var y;
        return (y = p.animationState) === null || y === void 0
          ? void 0
          : y.setActive(l, c);
      }),
      (n[l].isActive = c);
    let d = a(u, l);
    for (let p in n) n[p].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function EC(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Lv(t, e) : !1;
}
function Er(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function TC() {
  return {
    animate: Er(!0),
    whileInView: Er(),
    whileHover: Er(),
    whileTap: Er(),
    whileDrag: Er(),
    whileFocus: Er(),
    exit: Er(),
  };
}
var Un = class {
    constructor(e) {
      (this.isMounted = !1), (this.node = e);
    }
    update() {}
  },
  RC = class extends Un {
    constructor(e) {
      super(e), e.animationState || (e.animationState = CC(e));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      this.unmount(), vs(e) && (this.unmount = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {}
  },
  IC = 0,
  PC = class extends Un {
    constructor() {
      super(...arguments), (this.id = IC++);
    }
    update() {
      if (!this.node.presenceContext) return;
      let {
          isPresent: e,
          onExitComplete: t,
          custom: n,
        } = this.node.presenceContext,
        { isPresent: r } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || e === r) return;
      let i = this.node.animationState.setActive("exit", !e, {
        custom: n ?? this.node.getProps().custom,
      });
      t && !e && i.then(() => t(this.id));
    }
    mount() {
      let { register: e } = this.node.presenceContext || {};
      e && (this.unmount = e(this.id));
    }
    unmount() {}
  },
  Du = { animation: { Feature: RC }, exit: { Feature: PC } },
  ru = (e, t) => Math.abs(e - t);
function Mv(e, t) {
  let n = ru(e.x, t.x),
    r = ru(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
function lt(e) {
  return e.max - e.min;
}
function iu(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Bp(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = oe(t.min, t.max, e.origin)),
    (e.scale = lt(n) / lt(t)),
    (iu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = oe(n.min, n.max, e.origin) - e.originPoint),
    (iu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function go(e, t, n, r) {
  Bp(e.x, t.x, n.x, r ? r.originX : void 0),
    Bp(e.y, t.y, n.y, r ? r.originY : void 0);
}
function zp(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + lt(t));
}
function _C(e, t, n) {
  zp(e.x, t.x, n.x), zp(e.y, t.y, n.y);
}
function Hp(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + lt(t));
}
function yo(e, t, n) {
  Hp(e.x, t.x, n.x), Hp(e.y, t.y, n.y);
}
var Np = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ci = () => ({ x: Np(), y: Np() }),
  $p = () => ({ min: 0, max: 0 }),
  ye = () => ({ x: $p(), y: $p() });
function Bu() {
  let e = M(hi);
  if (e === null) return [!0, null];
  let { isPresent: t, onExitComplete: n, register: r } = e,
    i = kr();
  return X(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
var FC = (e, t) => e.depth - t.depth,
  Ov = class {
    constructor() {
      (this.children = []), (this.isDirty = !1);
    }
    add(e) {
      Pu(this.children, e), (this.isDirty = !0);
    }
    remove(e) {
      ks(this.children, e), (this.isDirty = !0);
    }
    forEach(e) {
      this.isDirty && this.children.sort(FC),
        (this.isDirty = !1),
        this.children.forEach(e);
    }
  };
function Av(e, t) {
  let n = _r.now(),
    r = ({ timestamp: i }) => {
      let o = i - n;
      o >= t && (nt(r), e(o - t));
    };
  return q.read(r, !0), () => nt(r);
}
var $n = new WeakMap(),
  fs = { current: null },
  zu = { current: !1 };
function Vv() {
  if (((zu.current = !0), !!Eo))
    if (F.matchMedia) {
      let e = F.matchMedia("(prefers-reduced-motion)"),
        t = () => (fs.current = e.matches);
      e.addListener(t), t();
    } else fs.current = !1;
}
function LC(e, t, n) {
  let { willChange: r } = t;
  for (let i in t) {
    let o = t[i],
      a = n[i];
    if (pe(o)) e.addValue(i, o), us(r) && r.add(i);
    else if (pe(a)) e.addValue(i, Ce(o, { owner: e })), us(r) && r.remove(i);
    else if (a !== o)
      if (e.hasValue(i)) {
        let s = e.getValue(i);
        !s.hasAnimated && s.set(o);
      } else {
        let s = e.getStaticValue(i);
        e.addValue(i, Ce(s !== void 0 ? s : o, { owner: e }));
      }
  }
  for (let i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
var Dv = Object.keys(wo),
  MC = Dv.length,
  Wp = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  OC = vu.length,
  Bv = class {
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        visualState: i,
      },
      o = {}
    ) {
      (this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
        }),
        (this.scheduleRender = () => q.render(this.render, !1, !0));
      let { latestValues: a, renderState: s } = i;
      (this.latestValues = a),
        (this.baseTarget = { ...a }),
        (this.initialValues = t.initial ? { ...a } : {}),
        (this.renderState = s),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.options = o),
        (this.isControllingVariants = gs(t)),
        (this.isVariantNode = Nm(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current));
      let { willChange: l, ...c } = this.scrapeMotionValuesFromProps(t, {});
      for (let u in c) {
        let f = c[u];
        a[u] !== void 0 && pe(f) && (f.set(a[u], !1), us(l) && l.add(u));
      }
    }
    scrapeMotionValuesFromProps(e, t) {
      return {};
    }
    mount(e) {
      (this.current = e),
        $n.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((t, n) => this.bindToMotionValue(n, t)),
        zu.current || Vv(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === "never"
            ? !1
            : this.reducedMotionConfig === "always"
            ? !0
            : fs.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext);
    }
    unmount() {
      $n.delete(this.current),
        this.projection && this.projection.unmount(),
        nt(this.notifyUpdate),
        nt(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) this.features[e].unmount();
      this.current = null;
    }
    bindToMotionValue(e, t) {
      let n = Mr.has(e),
        r = t.on("change", (o) => {
          (this.latestValues[e] = o),
            this.props.onUpdate && q.update(this.notifyUpdate, !1, !0),
            n && this.projection && (this.projection.isTransformDirty = !0);
        }),
        i = t.on("renderRequest", this.scheduleRender);
      this.valueSubscriptions.set(e, () => {
        r(), i();
      });
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    loadFeatures({ children: e, ...t }, n, r, i) {
      let o, a;
      for (let s = 0; s < MC; s++) {
        let l = Dv[s],
          {
            isEnabled: c,
            Feature: u,
            ProjectionNode: f,
            MeasureLayout: d,
          } = wo[l];
        f && (o = f),
          c(t) &&
            (!this.features[l] && u && (this.features[l] = new u(this)),
            d && (a = d));
      }
      if (
        (this.type === "html" || this.type === "svg") &&
        !this.projection &&
        o
      ) {
        this.projection = new o(
          this.latestValues,
          this.parent && this.parent.projection
        );
        let {
          layoutId: s,
          layout: l,
          drag: c,
          dragConstraints: u,
          layoutScroll: f,
          layoutRoot: d,
        } = t;
        this.projection.setOptions({
          layoutId: s,
          layout: l,
          alwaysMeasureLayout: !!c || (u && si(u)),
          visualElement: this,
          scheduleRender: () => this.scheduleRender(),
          animationType: typeof l == "string" ? l : "both",
          initialPromotionConfig: i,
          layoutScroll: f,
          layoutRoot: d,
        });
      }
      return a;
    }
    updateFeatures() {
      for (let e in this.features) {
        let t = this.features[e];
        t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.options, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : ye();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    makeTargetAnimatable(e, t = !0) {
      return this.makeTargetAnimatableFromInstance(e, t);
    }
    update(e, t) {
      (e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t);
      for (let n = 0; n < Wp.length; n++) {
        let r = Wp[n];
        this.propEventSubscriptions[r] &&
          (this.propEventSubscriptions[r](),
          delete this.propEventSubscriptions[r]);
        let i = e["on" + r];
        i && (this.propEventSubscriptions[r] = this.on(r, i));
      }
      (this.prevMotionValues = LC(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps),
        this.prevMotionValues
      )),
        this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
    }
    getVariantContext(e = !1) {
      if (e) return this.parent ? this.parent.getVariantContext() : void 0;
      if (!this.isControllingVariants) {
        let n = this.parent ? this.parent.getVariantContext() || {} : {};
        return (
          this.props.initial !== void 0 && (n.initial = this.props.initial), n
        );
      }
      let t = {};
      for (let n = 0; n < OC; n++) {
        let r = vu[n],
          i = this.props[r];
        (So(i) || i === !1) && (t[r] = i);
      }
      return t;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      t !== this.values.get(e) &&
        (this.removeValue(e), this.bindToMotionValue(e, t)),
        this.values.set(e, t),
        (this.latestValues[e] = t.get());
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState);
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = Ce(t, { owner: this })), this.addValue(e, n)),
        n
      );
    }
    readValue(e) {
      var t;
      return this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (t = this.getBaseTargetFromProps(this.props, e)) !== null &&
          t !== void 0
        ? t
        : this.readValueFromInstance(this.current, e, this.options);
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      var t;
      let { initial: n } = this.props,
        r =
          typeof n == "string" || typeof n == "object"
            ? (t = bu(this.props, n)) === null || t === void 0
              ? void 0
              : t[e]
            : void 0;
      if (n && r !== void 0) return r;
      let i = this.getBaseTargetFromProps(this.props, e);
      return i !== void 0 && !pe(i)
        ? i
        : this.initialValues[e] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[e];
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new _u()), this.events[e].add(t)
      );
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
  };
function zv(e) {
  function t(r, i = {}) {
    return $m(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  let n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
var AC = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Hu(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(AC.indexOf(e) > -1 || /[A-Z]/.test(e));
}
function Hv(e, { layout: t, layoutId: n }) {
  return (
    Mr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!os[e] || e === "opacity"))
  );
}
var VC = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function Nu(e, t, n, r) {
  let { style: i, vars: o, transform: a, transformOrigin: s } = e,
    l = !1,
    c = !1,
    u = !0;
  for (let f in t) {
    let d = t[f];
    if (av(f)) {
      o[f] = d;
      continue;
    }
    let p = wv[f],
      y = VC(d, p);
    if (Mr.has(f)) {
      if (((l = !0), (a[f] = y), !u)) continue;
      d !== (p.default || 0) && (u = !1);
    } else f.startsWith("origin") ? ((c = !0), (s[f] = y)) : (i[f] = y);
  }
  if (
    (t.transform ||
      (l || r
        ? (i.transform = Wm(e.transform, n, u, r))
        : i.transform && (i.transform = "none")),
    c)
  ) {
    let { originX: f = "50%", originY: d = "50%", originZ: p = 0 } = s;
    i.transformOrigin = `${f} ${d} ${p}`;
  }
}
var $u = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Nv(e, t, n) {
  for (let r in t) !pe(t[r]) && !Hv(r, n) && (e[r] = t[r]);
}
function DC({ transformTemplate: e }, t, n) {
  return le(() => {
    let r = $u();
    return (
      Nu(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function BC(e, t, n) {
  let r = e.style || {},
    i = {};
  return Nv(i, r, e), Object.assign(i, DC(e, t, n)), i;
}
function zC(e, t, n) {
  let r = {},
    i = BC(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
function Up(e, t, n) {
  return typeof e == "string" ? e : W.transform(t + n * e);
}
function HC(e, t, n) {
  let r = Up(t, e.x, e.width),
    i = Up(n, e.y, e.height);
  return `${r} ${i}`;
}
var NC = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  $C = { offset: "strokeDashoffset", array: "strokeDasharray" };
function WC(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let o = i ? NC : $C;
  e[o.offset] = W.transform(-r);
  let a = W.transform(t),
    s = W.transform(n);
  e[o.array] = `${a} ${s}`;
}
function Wu(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: a,
    pathSpacing: s = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  f,
  d
) {
  if ((Nu(e, c, u, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  let { attrs: p, style: y, dimensions: b } = e;
  p.transform && (b && (y.transform = p.transform), delete p.transform),
    b &&
      (i !== void 0 || o !== void 0 || y.transform) &&
      (y.transformOrigin = HC(
        b,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (p.x = t),
    n !== void 0 && (p.y = n),
    r !== void 0 && (p.scale = r),
    a !== void 0 && WC(p, a, s, l, !1);
}
var $v = () => ({ ...$u(), attrs: {} }),
  Uu = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function UC(e, t, n, r) {
  let i = le(() => {
    let o = $v();
    return (
      Wu(o, t, { enableHardwareAcceleration: !1 }, Uu(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    let o = {};
    Nv(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function jC(e = !1) {
  return (n, r, i, { latestValues: o }, a) => {
    let l = (Hu(n) ? UC : zC)(r, o, a, n),
      u = { ...Gm(r, typeof n == "string", e), ...l, ref: i },
      { children: f } = r,
      d = le(() => (pe(f) ? f.get() : f), [f]);
    return re(n, { ...u, children: d });
  };
}
function Wv(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (let o in n) e.style.setProperty(o, n[o]);
}
var Uv = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function jv(e, t, n, r) {
  Wv(e, t, void 0, r);
  for (let i in t.attrs) e.setAttribute(Uv.has(i) ? i : hu(i), t.attrs[i]);
}
function ju(e, t) {
  let { style: n } = e,
    r = {};
  for (let i in n)
    (pe(n[i]) || (t.style && pe(t.style[i])) || Hv(i, e)) && (r[i] = n[i]);
  return r;
}
function Xv(e, t) {
  let n = ju(e, t);
  for (let r in e)
    if (pe(e[r]) || pe(t[r])) {
      let i =
        To.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
var XC = {
    useVisualState: bs({
      scrapeMotionValuesFromProps: Xv,
      createRenderState: $v,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        q.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          q.render(() => {
            Wu(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Uu(t.tagName),
              e.transformTemplate
            ),
              jv(t, n);
          });
      },
    }),
  },
  GC = {
    useVisualState: bs({
      scrapeMotionValuesFromProps: ju,
      createRenderState: $u,
    }),
  };
function Gv(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Hu(e) ? XC : GC),
    preloadedFeatures: n,
    useRender: jC(t),
    createVisualElement: r,
    Component: e,
  };
}
function jp(e, t) {
  let n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, a) => {
      if (o.pointerType === "touch" || xu()) return;
      let s = e.getProps();
      e.animationState &&
        s.whileHover &&
        e.animationState.setActive("whileHover", t),
        s[r] && q.update(() => s[r](o, a));
    };
  return Jt(e.current, n, i, { passive: !e.getProps()[r] });
}
var YC = class extends Un {
    mount() {
      this.unmount = gn(jp(this.node, !0), jp(this.node, !1));
    }
    unmount() {}
  },
  KC = class extends Un {
    constructor() {
      super(...arguments), (this.isActive = !1);
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(":focus-visible");
      } catch {
        e = !0;
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = gn(
        vn(this.node.current, "focus", () => this.onFocus()),
        vn(this.node.current, "blur", () => this.onBlur())
      );
    }
    unmount() {}
  },
  Yv = (e, t) => (t ? (e === t ? !0 : Yv(e, t.parentElement)) : !1);
function Nc(e, t) {
  if (!t) return;
  let n = new PointerEvent("pointer" + e);
  t(n, xs(n));
}
var qC = class extends Un {
    constructor() {
      super(...arguments),
        (this.removeStartListeners = xe),
        (this.removeEndListeners = xe),
        (this.removeAccessibleListeners = xe),
        (this.startPointerPress = (e, t) => {
          if (this.isPressing) return;
          this.removeEndListeners();
          let n = this.node.getProps(),
            i = Jt(
              F,
              "pointerup",
              (a, s) => {
                if (!this.checkPressEnd()) return;
                let {
                  onTap: l,
                  onTapCancel: c,
                  globalTapTarget: u,
                } = this.node.getProps();
                q.update(() => {
                  !u && !Yv(this.node.current, a.target)
                    ? c && c(a, s)
                    : l && l(a, s);
                });
              },
              { passive: !(n.onTap || n.onPointerUp) }
            ),
            o = Jt(F, "pointercancel", (a, s) => this.cancelPress(a, s), {
              passive: !(n.onTapCancel || n.onPointerCancel),
            });
          (this.removeEndListeners = gn(i, o)), this.startPress(e, t);
        }),
        (this.startAccessiblePress = () => {
          let e = (i) => {
              if (i.key !== "Enter" || this.isPressing) return;
              let o = (a) => {
                a.key !== "Enter" ||
                  !this.checkPressEnd() ||
                  Nc("up", (s, l) => {
                    let { onTap: c } = this.node.getProps();
                    c && q.update(() => c(s, l));
                  });
              };
              this.removeEndListeners(),
                (this.removeEndListeners = vn(this.node.current, "keyup", o)),
                Nc("down", (a, s) => {
                  this.startPress(a, s);
                });
            },
            t = vn(this.node.current, "keydown", e),
            n = () => {
              this.isPressing && Nc("cancel", (i, o) => this.cancelPress(i, o));
            },
            r = vn(this.node.current, "blur", n);
          this.removeAccessibleListeners = gn(t, r);
        });
    }
    startPress(e, t) {
      this.isPressing = !0;
      let { onTapStart: n, whileTap: r } = this.node.getProps();
      r &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !0),
        n && q.update(() => n(e, t));
    }
    checkPressEnd() {
      return (
        this.removeEndListeners(),
        (this.isPressing = !1),
        this.node.getProps().whileTap &&
          this.node.animationState &&
          this.node.animationState.setActive("whileTap", !1),
        !xu()
      );
    }
    cancelPress(e, t) {
      if (!this.checkPressEnd()) return;
      let { onTapCancel: n } = this.node.getProps();
      n && q.update(() => n(e, t));
    }
    mount() {
      let e = this.node.getProps(),
        t = Jt(
          e.globalTapTarget ? F : this.node.current,
          "pointerdown",
          this.startPointerPress,
          { passive: !(e.onTapStart || e.onPointerStart) }
        ),
        n = vn(this.node.current, "focus", this.startAccessiblePress);
      this.removeStartListeners = gn(t, n);
    }
    unmount() {
      this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners();
    }
  },
  ou = new WeakMap(),
  $c = new WeakMap(),
  ZC = (e) => {
    let t = ou.get(e.target);
    t && t(e);
  },
  QC = (e) => {
    e.forEach(ZC);
  };
function JC({ root: e, ...t }) {
  let n = e || document;
  $c.has(n) || $c.set(n, {});
  let r = $c.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(QC, { root: e, ...t })), r[i];
}
function eE(e, t, n) {
  let r = JC(t);
  return (
    ou.set(e, n),
    r.observe(e),
    () => {
      ou.delete(e), r.unobserve(e);
    }
  );
}
var tE = { some: 0, all: 1 },
  nE = class extends Un {
    constructor() {
      super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
      this.unmount();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = "some", once: i } = e,
        o = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == "number" ? r : tE[r],
        },
        a = (s) => {
          let { isIntersecting: l } = s;
          if (
            this.isInView === l ||
            ((this.isInView = l), i && !l && this.hasEnteredView)
          )
            return;
          l && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive("whileInView", l);
          let { onViewportEnter: c, onViewportLeave: u } = this.node.getProps(),
            f = l ? c : u;
          f && f(s);
        };
      return eE(this.node.current, o, a);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      let { props: e, prevProps: t } = this.node;
      ["amount", "margin", "root"].some(rE(e, t)) && this.startObserver();
    }
    unmount() {}
  };
function rE({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var Kv = {
    inView: { Feature: nE },
    tap: { Feature: qC },
    focus: { Feature: KC },
    hover: { Feature: YC },
  },
  qv = class {
    constructor(
      e,
      t,
      { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {}
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = F),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          let u = Uc(this.lastMoveEventInfo, this.history),
            f = this.startEvent !== null,
            d = Mv(u.offset, { x: 0, y: 0 }) >= 3;
          if (!f && !d) return;
          let { point: p } = u,
            { timestamp: y } = be;
          this.history.push({ ...p, timestamp: y });
          let { onStart: b, onMove: S } = this.handlers;
          f ||
            (b && b(this.lastMoveEvent, u),
            (this.startEvent = this.lastMoveEvent)),
            S && S(this.lastMoveEvent, u);
        }),
        (this.handlePointerMove = (u, f) => {
          (this.lastMoveEvent = u),
            (this.lastMoveEventInfo = Wc(f, this.transformPagePoint)),
            q.update(this.updatePoint, !0);
        }),
        (this.handlePointerUp = (u, f) => {
          this.end();
          let { onEnd: d, onSessionEnd: p, resumeAnimation: y } = this.handlers;
          if (
            (this.dragSnapToOrigin && y && y(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          let b = Uc(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Wc(f, this.transformPagePoint),
            this.history
          );
          this.startEvent && d && d(u, b), p && p(u, b);
        }),
        !Ym(e))
      )
        return;
      (this.dragSnapToOrigin = i),
        (this.handlers = t),
        (this.transformPagePoint = n),
        (this.contextWindow = r || F);
      let o = xs(e),
        a = Wc(o, this.transformPagePoint),
        { point: s } = a,
        { timestamp: l } = be;
      this.history = [{ ...s, timestamp: l }];
      let { onSessionStart: c } = t;
      c && c(e, Uc(a, this.history)),
        (this.removeListeners = gn(
          Jt(this.contextWindow, "pointermove", this.handlePointerMove),
          Jt(this.contextWindow, "pointerup", this.handlePointerUp),
          Jt(this.contextWindow, "pointercancel", this.handlePointerUp)
        ));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      this.removeListeners && this.removeListeners(), nt(this.updatePoint);
    }
  };
function Wc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Xp(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Uc({ point: e }, t) {
  return {
    point: e,
    delta: Xp(e, Zv(t)),
    offset: Xp(e, iE(t)),
    velocity: oE(t, 0.1),
  };
}
function iE(e) {
  return e[0];
}
function Zv(e) {
  return e[e.length - 1];
}
function oE(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = Zv(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > yn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  let o = en(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  let a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function aE(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? oe(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? oe(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Gp(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function sE(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Gp(e.x, n, i), y: Gp(e.y, t, r) };
}
function Yp(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function lE(e, t) {
  return { x: Yp(e.x, t.x), y: Yp(e.y, t.y) };
}
function cE(e, t) {
  let n = 0.5,
    r = lt(e),
    i = lt(t);
  return (
    i > r
      ? (n = Nn(t.min, t.max - r, e.min))
      : r > i && (n = Nn(e.min, e.max - i, t.min)),
    bn(0, 1, n)
  );
}
function uE(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var au = 0.35;
function fE(e = au) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = au),
    { x: Kp(e, "left", "right"), y: Kp(e, "top", "bottom") }
  );
}
function Kp(e, t, n) {
  return { min: qp(e, t), max: qp(e, n) };
}
function qp(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
function Lt(e) {
  return [e("x"), e("y")];
}
function Qv({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function dE({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function hE(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function jc(e) {
  return e === void 0 || e === 1;
}
function su({ scale: e, scaleX: t, scaleY: n }) {
  return !jc(e) || !jc(t) || !jc(n);
}
function Tr(e) {
  return su(e) || Jv(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Jv(e) {
  return Zp(e.x) || Zp(e.y);
}
function Zp(e) {
  return e && e !== "0%";
}
function ds(e, t, n) {
  let r = e - n,
    i = t * r;
  return n + i;
}
function Qp(e, t, n, r, i) {
  return i !== void 0 && (e = ds(e, i, r)), ds(e, n, r) + t;
}
function lu(e, t = 0, n = 1, r, i) {
  (e.min = Qp(e.min, t, n, r, i)), (e.max = Qp(e.max, t, n, r, i));
}
function eg(e, { x: t, y: n }) {
  lu(e.x, t.translate, t.scale, t.originPoint),
    lu(e.y, n.translate, n.scale, n.originPoint);
}
function pE(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, a;
  for (let s = 0; s < i; s++) {
    (o = n[s]), (a = o.projectionDelta);
    let l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        ui(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), eg(e, a)),
      r && Tr(o.latestValues) && ui(e, o.latestValues));
  }
  (t.x = Jp(t.x)), (t.y = Jp(t.y));
}
function Jp(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function zn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function em(e, t, [n, r, i]) {
  let o = t[i] !== void 0 ? t[i] : 0.5,
    a = oe(e.min, e.max, o);
  lu(e, t[n], t[r], a, t.scale);
}
var mE = ["x", "scaleX", "originX"],
  vE = ["y", "scaleY", "originY"];
function ui(e, t) {
  em(e.x, t, mE), em(e.y, t, vE);
}
function tg(e, t) {
  return Qv(hE(e.getBoundingClientRect(), t));
}
function gE(e, t, n) {
  let r = tg(e, n),
    { scroll: i } = t;
  return i && (zn(r.x, i.offset.x), zn(r.y, i.offset.y)), r;
}
var ng = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  yE = new WeakMap(),
  bE = class {
    constructor(e) {
      (this.openGlobalLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = ye()),
        (this.visualElement = e);
    }
    start(e, { snapToCursor: t = !1 } = {}) {
      let { presenceContext: n } = this.visualElement;
      if (n && n.isPresent === !1) return;
      let r = (c) => {
          let { dragSnapToOrigin: u } = this.getProps();
          u ? this.pauseAnimation() : this.stopAnimation(),
            t && this.snapToCursor(xs(c, "page").point);
        },
        i = (c, u) => {
          let { drag: f, dragPropagation: d, onDragStart: p } = this.getProps();
          if (
            f &&
            !d &&
            (this.openGlobalLock && this.openGlobalLock(),
            (this.openGlobalLock = Zm(f)),
            !this.openGlobalLock)
          )
            return;
          (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            Lt((b) => {
              let S = this.getAxisMotionValue(b).get() || 0;
              if (Qt.test(S)) {
                let { projection: h } = this.visualElement;
                if (h && h.layout) {
                  let v = h.layout.layoutBox[b];
                  v && (S = lt(v) * (parseFloat(S) / 100));
                }
              }
              this.originPoint[b] = S;
            }),
            p && q.update(() => p(c, u), !1, !0);
          let { animationState: y } = this.visualElement;
          y && y.setActive("whileDrag", !0);
        },
        o = (c, u) => {
          let {
            dragPropagation: f,
            dragDirectionLock: d,
            onDirectionLock: p,
            onDrag: y,
          } = this.getProps();
          if (!f && !this.openGlobalLock) return;
          let { offset: b } = u;
          if (d && this.currentDirection === null) {
            (this.currentDirection = xE(b)),
              this.currentDirection !== null && p && p(this.currentDirection);
            return;
          }
          this.updateAxis("x", u.point, b),
            this.updateAxis("y", u.point, b),
            this.visualElement.render(),
            y && y(c, u);
        },
        a = (c, u) => this.stop(c, u),
        s = () =>
          Lt((c) => {
            var u;
            return (
              this.getAnimationState(c) === "paused" &&
              ((u = this.getAxisMotionValue(c).animation) === null ||
              u === void 0
                ? void 0
                : u.play())
            );
          }),
        { dragSnapToOrigin: l } = this.getProps();
      this.panSession = new qv(
        e,
        {
          onSessionStart: r,
          onStart: i,
          onMove: o,
          onSessionEnd: a,
          resumeAnimation: s,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: l,
          contextWindow: ng(this.visualElement),
        }
      );
    }
    stop(e, t) {
      let n = this.isDragging;
      if ((this.cancel(), !n)) return;
      let { velocity: r } = t;
      this.startAnimation(r);
      let { onDragEnd: i } = this.getProps();
      i && q.update(() => i(e, t));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0);
      let { dragPropagation: n } = this.getProps();
      !n &&
        this.openGlobalLock &&
        (this.openGlobalLock(), (this.openGlobalLock = null)),
        t && t.setActive("whileDrag", !1);
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !Qa(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        o = this.originPoint[e] + n[e];
      this.constraints &&
        this.constraints[e] &&
        (o = aE(o, this.constraints[e], this.elastic[e])),
        i.set(o);
    }
    resolveConstraints() {
      var e;
      let { dragConstraints: t, dragElastic: n } = this.getProps(),
        r =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : (e = this.visualElement.projection) === null || e === void 0
            ? void 0
            : e.layout,
        i = this.constraints;
      t && si(t)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : t && r
        ? (this.constraints = sE(r.layoutBox, t))
        : (this.constraints = !1),
        (this.elastic = fE(n)),
        i !== this.constraints &&
          r &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          Lt((o) => {
            this.getAxisMotionValue(o) &&
              (this.constraints[o] = uE(r.layoutBox[o], this.constraints[o]));
          });
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !si(e)) return !1;
      let n = e.current;
      Ye(
        n !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
      );
      let { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      let i = gE(n, r.root, this.visualElement.getTransformPagePoint()),
        o = lE(r.layout.layoutBox, i);
      if (t) {
        let a = t(dE(o));
        (this.hasMutatedConstraints = !!a), a && (o = Qv(a));
      }
      return o;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: o,
          onDragTransitionEnd: a,
        } = this.getProps(),
        s = this.constraints || {},
        l = Lt((c) => {
          if (!Qa(c, t, this.currentDirection)) return;
          let u = (s && s[c]) || {};
          o && (u = { min: 0, max: 0 });
          let f = r ? 200 : 1e6,
            d = r ? 40 : 1e7,
            p = {
              type: "inertia",
              velocity: n ? e[c] : 0,
              bounceStiffness: f,
              bounceDamping: d,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...u,
            };
          return this.startAxisValueAnimation(c, p);
        });
      return Promise.all(l).then(a);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return n.start(Ou(e, n, 0, t));
    }
    stopAnimation() {
      Lt((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      Lt((e) => {
        var t;
        return (t = this.getAxisMotionValue(e).animation) === null ||
          t === void 0
          ? void 0
          : t.pause();
      });
    }
    getAnimationState(e) {
      var t;
      return (t = this.getAxisMotionValue(e).animation) === null || t === void 0
        ? void 0
        : t.state;
    }
    getAxisMotionValue(e) {
      let t = "_drag" + e.toUpperCase(),
        n = this.visualElement.getProps(),
        r = n[t];
      return (
        r ||
        this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      Lt((t) => {
        let { drag: n } = this.getProps();
        if (!Qa(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: o, max: a } = r.layout.layoutBox[t];
          i.set(e[t] - oe(o, a, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!si(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      Lt((o) => {
        let a = this.getAxisMotionValue(o);
        if (a) {
          let s = a.get();
          r[o] = cE({ min: s, max: s }, this.constraints[o]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        Lt((o) => {
          if (!Qa(o, e, null)) return;
          let a = this.getAxisMotionValue(o),
            { min: s, max: l } = this.constraints[o];
          a.set(oe(s, l, r[o]));
        });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      yE.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = Jt(e, "pointerdown", (s) => {
          let { drag: l, dragListener: c = !0 } = this.getProps();
          l && c && this.start(s);
        }),
        n = () => {
          let { dragConstraints: s } = this.getProps();
          si(s) && (this.constraints = this.resolveRefConstraints());
        },
        { projection: r } = this.visualElement,
        i = r.addEventListener("measure", n);
      r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
        n();
      let o = vn(F, "resize", () => this.scalePositionWithinConstraints()),
        a = r.addEventListener(
          "didUpdate",
          ({ delta: s, hasLayoutChanged: l }) => {
            this.isDragging &&
              l &&
              (Lt((c) => {
                let u = this.getAxisMotionValue(c);
                u &&
                  ((this.originPoint[c] += s[c].translate),
                  u.set(u.get() + s[c].translate));
              }),
              this.visualElement.render());
          }
        );
      return () => {
        o(), t(), i(), a && a();
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: o = au,
          dragMomentum: a = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: o,
        dragMomentum: a,
      };
    }
  };
function Qa(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function xE(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
var SE = class extends Un {
    constructor(e) {
      super(e),
        (this.removeGroupControls = xe),
        (this.removeListeners = xe),
        (this.controls = new bE(e));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || xe);
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  },
  tm = (e) => (t, n) => {
    e && q.update(() => e(t, n));
  },
  wE = class extends Un {
    constructor() {
      super(...arguments), (this.removePointerDownListener = xe);
    }
    onPointerDown(e) {
      this.session = new qv(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: ng(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: tm(e),
        onStart: tm(t),
        onMove: n,
        onEnd: (i, o) => {
          delete this.session, r && q.update(() => r(i, o));
        },
      };
    }
    mount() {
      this.removePointerDownListener = Jt(
        this.node.current,
        "pointerdown",
        (e) => this.onPointerDown(e)
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  },
  ns = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function nm(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var co = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (W.test(e)) e = parseFloat(e);
        else return e;
      let n = nm(e, t.target.x),
        r = nm(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  kE = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = xn.parse(e);
      if (i.length > 5) return r;
      let o = xn.createTransformer(e),
        a = typeof i[0] != "number" ? 1 : 0,
        s = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + a] /= s), (i[1 + a] /= l);
      let c = oe(s, l, 0.5);
      return (
        typeof i[2 + a] == "number" && (i[2 + a] /= c),
        typeof i[3 + a] == "number" && (i[3 + a] /= c),
        o(i)
      );
    },
  },
  CE = class extends m.Component {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      yu(EE),
        i &&
          (t.group && t.group.add(i),
          n && n.register && r && n.register(i),
          i.root.didUpdate(),
          i.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (ns.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        o = n.projection;
      return (
        o &&
          ((o.isPresent = i),
          r || e.layoutDependency !== t || t === void 0
            ? o.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? o.promote()
              : o.relegate() ||
                q.postRender(() => {
                  let a = o.getStack();
                  (!a || !a.members.length) && this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      let { projection: e } = this.props.visualElement;
      e &&
        (e.root.didUpdate(),
        pu.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function rg(e) {
  let [t, n] = Bu(),
    r = M(xo);
  return m.createElement(CE, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: M(ms),
    isPresent: t,
    safeToRemove: n,
  });
}
var EE = {
    borderRadius: {
      ...co,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: co,
    borderTopRightRadius: co,
    borderBottomLeftRadius: co,
    borderBottomRightRadius: co,
    boxShadow: kE,
  },
  ig = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  TE = ig.length,
  rm = (e) => (typeof e == "string" ? parseFloat(e) : e),
  im = (e) => typeof e == "number" || W.test(e);
function RE(e, t, n, r, i, o) {
  i
    ? ((e.opacity = oe(0, n.opacity !== void 0 ? n.opacity : 1, IE(r))),
      (e.opacityExit = oe(t.opacity !== void 0 ? t.opacity : 1, 0, PE(r))))
    : o &&
      (e.opacity = oe(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let a = 0; a < TE; a++) {
    let s = `border${ig[a]}Radius`,
      l = om(t, s),
      c = om(n, s);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || im(l) === im(c)
        ? ((e[s] = Math.max(oe(rm(l), rm(c), r), 0)),
          (Qt.test(c) || Qt.test(l)) && (e[s] += "%"))
        : (e[s] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = oe(t.rotate || 0, n.rotate || 0, r));
}
function om(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
var IE = og(0, 0.5, Cu),
  PE = og(0.5, 0.95, xe);
function og(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Nn(e, t, r)));
}
function am(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Ft(e, t) {
  am(e.x, t.x), am(e.y, t.y);
}
function sm(e, t, n, r, i) {
  return (
    (e -= t), (e = ds(e, 1 / n, r)), i !== void 0 && (e = ds(e, 1 / i, r)), e
  );
}
function _E(e, t = 0, n = 1, r = 0.5, i, o = e, a = e) {
  if (
    (Qt.test(t) &&
      ((t = parseFloat(t)), (t = oe(a.min, a.max, t / 100) - a.min)),
    typeof t != "number")
  )
    return;
  let s = oe(o.min, o.max, r);
  e === o && (s -= t),
    (e.min = sm(e.min, t, n, s, i)),
    (e.max = sm(e.max, t, n, s, i));
}
function lm(e, t, [n, r, i], o, a) {
  _E(e, t[n], t[r], t[i], t.scale, o, a);
}
var FE = ["x", "scaleX", "originX"],
  LE = ["y", "scaleY", "originY"];
function cm(e, t, n, r) {
  lm(e.x, t, FE, n ? n.x : void 0, r ? r.x : void 0),
    lm(e.y, t, LE, n ? n.y : void 0, r ? r.y : void 0);
}
function um(e) {
  return e.translate === 0 && e.scale === 1;
}
function ag(e) {
  return um(e.x) && um(e.y);
}
function ME(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function sg(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function fm(e) {
  return lt(e.x) / lt(e.y);
}
var OE = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    Pu(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (ks(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      let t = this.members[this.members.length - 1];
      t && this.promote(t);
    }
  }
  relegate(e) {
    let t = this.members.findIndex((r) => e === r);
    if (t === 0) return !1;
    let n;
    for (let r = t; r >= 0; r--) {
      let i = this.members[r];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(e, t) {
    let n = this.lead;
    if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
      n.instance && n.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = n),
        t && (e.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((e.snapshot = n.snapshot),
          (e.snapshot.latestValues = n.animationValues || n.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      let { crossfade: r } = e.options;
      r === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      let { options: t, resumingFrom: n } = e;
      t.onExitComplete && t.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function dm(e, t, n) {
  let r = "",
    i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let { rotate: l, rotateX: c, rotateY: u } = n;
    l && (r += `rotate(${l}deg) `),
      c && (r += `rotateX(${c}deg) `),
      u && (r += `rotateY(${u}deg) `);
  }
  let a = e.x.scale * t.x,
    s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (r += `scale(${a}, ${s})`), r || "none";
}
function AE(e) {
  F.MotionDebug && F.MotionDebug.record(e);
}
function lg(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Xu(e, t, n) {
  let r = pe(e) ? e : Ce(e);
  return r.start(Ou("", r, t, n)), r.animation;
}
var hm = ["", "X", "Y", "Z"],
  VE = { visibility: "hidden" },
  pm = 1e3,
  DE = 0,
  Rr = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  };
function cg({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(a = {}, s = t?.()) {
      (this.id = DE++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (Rr.totalNodes =
              Rr.resolvedTargetDeltas =
              Rr.recalculatedProjection =
                0),
            this.nodes.forEach(HE),
            this.nodes.forEach(jE),
            this.nodes.forEach(XE),
            this.nodes.forEach(NE),
            AE(Rr);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = a),
        (this.root = s ? s.root || s : this),
        (this.path = s ? [...s.path, s] : []),
        (this.parent = s),
        (this.depth = s ? s.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Ov());
    }
    addEventListener(a, s) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new _u()),
        this.eventHandlers.get(a).add(s)
      );
    }
    notifyListeners(a, ...s) {
      let l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = lg(a)), (this.instance = a);
      let { layoutId: l, layout: c, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        s && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f,
          d = () => (this.root.updateBlockedByResize = !1);
        e(a, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = Av(d, 250)),
            ns.hasAnimatedSinceResize &&
              ((ns.hasAnimatedSinceResize = !1), this.nodes.forEach(vm));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: p,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              let b = this.options.transition || u.getDefaultTransition() || ZE,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: h } =
                  u.getProps(),
                v = !this.targetLayout || !sg(this.targetLayout, y) || p,
                g = !d && p;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (d && (v || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, g);
                let x = { ...Mu(b, "layout"), onPlay: S, onComplete: h };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x);
              } else
                d || vm(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      let a = this.getStack();
      a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        nt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(GE),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        let f = this.path[u];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      let { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l) return;
      let c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(mm);
        return;
      }
      this.isUpdating || this.nodes.forEach(WE),
        (this.isUpdating = !1),
        this.nodes.forEach(UE),
        this.nodes.forEach(BE),
        this.nodes.forEach(zE),
        this.clearAllSnapshots();
      let s = _r.now();
      (be.delta = bn(0, 1e3 / 60, s - be.timestamp)),
        (be.timestamp = s),
        (be.isProcessing = !0),
        es.update.process(be),
        es.preRender.process(be),
        es.render.process(be),
        (be.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), pu.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach($E), this.sharedNodes.forEach(YE);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        q.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      q.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      let a = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ye()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      let { visualElement: s } = this.options;
      s &&
        s.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          a ? a.layoutBox : void 0
        );
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === a &&
        (s = !1),
        s &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: a,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      let a = this.isLayoutDirty || this.shouldResetTransform,
        s = this.projectionDelta && !ag(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      a &&
        (s || Tr(this.latestValues) || u) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(a = !0) {
      let s = this.measurePageBox(),
        l = this.removeElementScroll(s);
      return (
        a && (l = this.removeTransform(l)),
        QE(l),
        {
          animationId: this.root.animationId,
          measuredBox: s,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: a } = this.options;
      if (!a) return ye();
      let s = a.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (zn(s.x, l.offset.x), zn(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      let s = ye();
      Ft(s, a);
      for (let l = 0; l < this.path.length; l++) {
        let c = this.path[l],
          { scroll: u, options: f } = c;
        if (c !== this.root && u && f.layoutScroll) {
          if (u.isRoot) {
            Ft(s, a);
            let { scroll: d } = this.root;
            d && (zn(s.x, -d.offset.x), zn(s.y, -d.offset.y));
          }
          zn(s.x, u.offset.x), zn(s.y, u.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      let l = ye();
      Ft(l, a);
      for (let c = 0; c < this.path.length; c++) {
        let u = this.path[c];
        !s &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          ui(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          Tr(u.latestValues) && ui(l, u.latestValues);
      }
      return Tr(this.latestValues) && ui(l, this.latestValues), l;
    }
    removeTransform(a) {
      let s = ye();
      Ft(s, a);
      for (let l = 0; l < this.path.length; l++) {
        let c = this.path[l];
        if (!c.instance || !Tr(c.latestValues)) continue;
        su(c.latestValues) && c.updateSnapshot();
        let u = ye(),
          f = c.measurePageBox();
        Ft(u, f),
          cm(s, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Tr(this.latestValues) && cm(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      (this.targetDelta = a),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== be.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      let l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      let c = !!this.resumingFrom || this !== l;
      if (
        !(
          a ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      let { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = be.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          let p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1
            ? ((this.relativeParent = p),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ye()),
              (this.relativeTargetOrigin = ye()),
              yo(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                p.layout.layoutBox
              ),
              Ft(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ye()), (this.targetWithTransforms = ye())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                _C(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Ft(this.target, this.layout.layoutBox),
                eg(this.target, this.targetDelta))
              : Ft(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            let p = this.getClosestProjectingParent();
            p &&
            !!p.resumingFrom == !!this.resumingFrom &&
            !p.options.layoutScroll &&
            p.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ye()),
                (this.relativeTargetOrigin = ye()),
                yo(this.relativeTargetOrigin, this.target, p.target),
                Ft(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Rr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          su(this.parent.latestValues) ||
          Jv(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var a;
      let s = this.getLead(),
        l = !!this.resumingFrom || this !== s,
        c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === be.timestamp && (c = !1),
        c)
      )
        return;
      let { layout: u, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || f))
      )
        return;
      Ft(this.layoutCorrected, this.layout.layoutBox);
      let d = this.treeScale.x,
        p = this.treeScale.y;
      pE(this.layoutCorrected, this.treeScale, this.path, l),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((s.target = s.layout.layoutBox), (s.targetWithTransforms = ye()));
      let { target: y } = s;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = ci()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = ci()),
        (this.projectionDeltaWithTransform = ci()));
      let b = this.projectionTransform;
      go(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = dm(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== b ||
          this.treeScale.x !== d ||
          this.treeScale.y !== p) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        Rr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), a)) {
        let s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      let l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        f = ci();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !s);
      let d = ye(),
        p = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        b = p !== y,
        S = this.getStack(),
        h = !S || S.members.length <= 1,
        v = !!(b && !h && this.options.crossfade === !0 && !this.path.some(qE));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (x) => {
        let k = x / 1e3;
        gm(f.x, a.x, k),
          gm(f.y, a.y, k),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (yo(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            KE(this.relativeTarget, this.relativeTargetOrigin, d, k),
            g && ME(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = ye()),
            Ft(g, this.relativeTarget)),
          b &&
            ((this.animationValues = u), RE(u, c, this.latestValues, k, v, h)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (nt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = q.update(() => {
          (ns.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Xu(0, pm, {
              ...a,
              onUpdate: (s) => {
                this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
              },
              onComplete: () => {
                a.onComplete && a.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let a = this.getStack();
      a && a.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(pm),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      let a = this.getLead(),
        { targetWithTransforms: s, target: l, layout: c, latestValues: u } = a;
      if (!(!s || !l || !c)) {
        if (
          this !== a &&
          this.layout &&
          c &&
          ug(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || ye();
          let f = lt(this.layout.layoutBox.x);
          (l.x.min = a.target.x.min), (l.x.max = l.x.min + f);
          let d = lt(this.layout.layoutBox.y);
          (l.y.min = a.target.y.min), (l.y.max = l.y.min + d);
        }
        Ft(s, l),
          ui(s, u),
          go(this.projectionDeltaWithTransform, this.layoutCorrected, s, u);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new OE()),
        this.sharedNodes.get(a).add(s);
      let c = s.options.initialPromotionConfig;
      s.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(s)
            : void 0,
      });
    }
    isLead() {
      let a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      let { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var a;
      let { layoutId: s } = this.options;
      return s
        ? (a = this.getStack()) === null || a === void 0
          ? void 0
          : a.prevLead
        : void 0;
    }
    getStack() {
      let { layoutId: a } = this.options;
      if (a) return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      let c = this.getStack();
      c && c.promote(this, l),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        s && this.setOptions({ transition: s });
    }
    relegate() {
      let a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      let { visualElement: a } = this.options;
      if (!a) return;
      let s = !1,
        { latestValues: l } = a;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s))
        return;
      let c = {};
      for (let u = 0; u < hm.length; u++) {
        let f = "rotate" + hm[u];
        l[f] && ((c[f] = l[f]), a.setStaticValue(f, 0));
      }
      a.render();
      for (let u in c) a.setStaticValue(u, c[u]);
      a.scheduleRender();
    }
    getProjectionStyles(a) {
      var s, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return VE;
      let c = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = Ge(a?.pointerEvents) || ""),
          (c.transform = u ? u(this.latestValues, "") : "none"),
          c
        );
      let f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        let b = {};
        return (
          this.options.layoutId &&
            ((b.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (b.pointerEvents = Ge(a?.pointerEvents) || "")),
          this.hasProjected &&
            !Tr(this.latestValues) &&
            ((b.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          b
        );
      }
      let d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = dm(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        u && (c.transform = u(d, c.transform));
      let { x: p, y } = this.projectionDelta;
      (c.transformOrigin = `${p.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (l =
                    (s = d.opacity) !== null && s !== void 0
                      ? s
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (c.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (let b in os) {
        if (d[b] === void 0) continue;
        let { correct: S, applyTo: h } = os[b],
          v = c.transform === "none" ? d[b] : S(d[b], f);
        if (h) {
          let g = h.length;
          for (let x = 0; x < g; x++) c[h[x]] = v;
        } else c[b] = v;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents = f === this ? Ge(a?.pointerEvents) || "" : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0
          ? void 0
          : s.stop();
      }),
        this.root.nodes.forEach(mm),
        this.root.sharedNodes.clear();
    }
  };
}
function BE(e) {
  e.updateLayout();
}
function zE(e) {
  var t;
  let n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    let { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      a = n.source !== e.layout.source;
    o === "size"
      ? Lt((f) => {
          let d = a ? n.measuredBox[f] : n.layoutBox[f],
            p = lt(d);
          (d.min = r[f].min), (d.max = d.min + p);
        })
      : ug(o, n.layoutBox, r) &&
        Lt((f) => {
          let d = a ? n.measuredBox[f] : n.layoutBox[f],
            p = lt(r[f]);
          (d.max = d.min + p),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + p));
        });
    let s = ci();
    go(s, r, n.layoutBox);
    let l = ci();
    a ? go(l, e.applyTransform(i, !0), n.measuredBox) : go(l, r, n.layoutBox);
    let c = !ag(s),
      u = !1;
    if (!e.resumeFrom) {
      let f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        let { snapshot: d, layout: p } = f;
        if (d && p) {
          let y = ye();
          yo(y, n.layoutBox, d.layoutBox);
          let b = ye();
          yo(b, r, p.layoutBox),
            sg(y, b) || (u = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = b),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u,
    });
  } else if (e.isLead()) {
    let { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function HE(e) {
  Rr.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function NE(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function $E(e) {
  e.clearSnapshot();
}
function mm(e) {
  e.clearMeasurements();
}
function WE(e) {
  e.isLayoutDirty = !1;
}
function UE(e) {
  let { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function vm(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function jE(e) {
  e.resolveTargetDelta();
}
function XE(e) {
  e.calcProjection();
}
function GE(e) {
  e.resetRotation();
}
function YE(e) {
  e.removeLeadSnapshot();
}
function gm(e, t, n) {
  (e.translate = oe(t.translate, 0, n)),
    (e.scale = oe(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function ym(e, t, n, r) {
  (e.min = oe(t.min, n.min, r)), (e.max = oe(t.max, n.max, r));
}
function KE(e, t, n, r) {
  ym(e.x, t.x, n.x, r), ym(e.y, t.y, n.y, r);
}
function qE(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var ZE = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  bm = (e) => typeof et < "u" && et.userAgent.toLowerCase().includes(e),
  xm = bm("applewebkit/") && !bm("chrome/") ? Math.round : xe;
function Sm(e) {
  (e.min = xm(e.min)), (e.max = xm(e.max));
}
function QE(e) {
  Sm(e.x), Sm(e.y);
}
function ug(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !iu(fm(t), fm(n), 0.2))
  );
}
var JE = cg({
    attachResizeListener: (e, t) => vn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Fr = { current: void 0 },
  fg = cg({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Fr.current) {
        let e = new JE({});
        e.mount(F), e.setOptions({ layoutScroll: !0 }), (Fr.current = e);
      }
      return Fr.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => F.getComputedStyle(e).position === "fixed",
  }),
  dg = {
    pan: { Feature: wE },
    drag: { Feature: SE, ProjectionNode: fg, MeasureLayout: rg },
  },
  eT = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function tT(e) {
  let t = eT.exec(e);
  if (!t) return [,];
  let [, n, r] = t;
  return [n, r];
}
var nT = 4;
function cu(e, t, n = 1) {
  Ye(
    n <= nT,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
  );
  let [r, i] = tT(e);
  if (!r) return;
  let o = F.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    let a = o.trim();
    return xv(a) ? parseFloat(a) : a;
  } else return Kc(i) ? cu(i, t, n + 1) : i;
}
function rT(e, { ...t }, n) {
  let r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      let o = i.get();
      if (!Kc(o)) return;
      let a = cu(o, r);
      a && i.set(a);
    });
  for (let i in t) {
    let o = t[i];
    if (!Kc(o)) continue;
    let a = cu(o, r);
    a && ((t[i] = a), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
var iT = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  hg = (e) => iT.has(e),
  oT = (e) => Object.keys(e).some(hg),
  Ja = (e) => e === Or || e === W,
  wm = (e, t) => parseFloat(e.split(", ")[t]),
  km =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      let i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return wm(i[1], t);
      {
        let o = r.match(/^matrix\((.+)\)$/);
        return o ? wm(o[1], e) : 0;
      }
    },
  aT = new Set(["x", "y", "z"]),
  sT = To.filter((e) => !aT.has(e));
function lT(e) {
  let t = [];
  return (
    sT.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
var di = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: km(4, 13),
  y: km(5, 14),
};
di.translateX = di.x;
di.translateY = di.y;
var cT = (e, t, n) => {
    let r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: a } = o,
      s = {};
    a === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((c) => {
        s[c] = di[c](r, o);
      }),
      t.render();
    let l = t.measureViewportBox();
    return (
      n.forEach((c) => {
        let u = t.getValue(c);
        u && u.jump(s[c]), (e[c] = di[c](l, o));
      }),
      e
    );
  },
  uT = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    let i = Object.keys(t).filter(hg),
      o = [],
      a = !1,
      s = [];
    if (
      (i.forEach((l) => {
        let c = e.getValue(l);
        if (!e.hasValue(l)) return;
        let u = n[l],
          f = lo(u),
          d = t[l],
          p;
        if (as(d)) {
          let y = d.length,
            b = d[0] === null ? 1 : 0;
          (u = d[b]), (f = lo(u));
          for (let S = b; S < y && d[S] !== null; S++)
            p
              ? Ye(lo(d[S]) === p, "All keyframes must be of the same type")
              : ((p = lo(d[S])),
                Ye(
                  p === f || (Ja(f) && Ja(p)),
                  "Keyframes must be of the same dimension as the current value"
                ));
        } else p = lo(d);
        if (f !== p)
          if (Ja(f) && Ja(p)) {
            let y = c.get();
            typeof y == "string" && c.set(parseFloat(y)),
              typeof d == "string"
                ? (t[l] = parseFloat(d))
                : Array.isArray(d) && p === W && (t[l] = d.map(parseFloat));
          } else
            f?.transform && p?.transform && (u === 0 || d === 0)
              ? u === 0
                ? c.set(p.transform(u))
                : (t[l] = f.transform(d))
              : (a || ((o = lT(e)), (a = !0)),
                s.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                c.jump(d));
      }),
      s.length)
    ) {
      let l = s.indexOf("height") >= 0 ? F.pageYOffset : null,
        c = cT(t, e, s);
      return (
        o.length &&
          o.forEach(([u, f]) => {
            e.getValue(u).set(f);
          }),
        e.render(),
        Eo && l !== null && F.scrollTo({ top: l }),
        { target: c, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function fT(e, t, n, r) {
  return oT(t) ? uT(e, t, n, r) : { target: t, transitionEnd: r };
}
var dT = (e, t, n, r) => {
    let i = rT(e, t, r);
    return (t = i.target), (r = i.transitionEnd), fT(e, t, n, r);
  },
  pg = class extends Bv {
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      return e.style ? e.style[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      delete t[e], delete n[e];
    }
    makeTargetAnimatableFromInstance(
      { transition: e, transitionEnd: t, ...n },
      r
    ) {
      let i = eC(n, e || {}, this);
      if (r) {
        Tv(this, n, i);
        let o = dT(this, n, i, t);
        (t = o.transitionEnd), (n = o.target);
      }
      return { transition: e, transitionEnd: t, ...n };
    }
  };
function hT(e) {
  return F.getComputedStyle(e);
}
var mg = class extends pg {
    constructor() {
      super(...arguments), (this.type = "html");
    }
    readValueFromInstance(e, t) {
      if (Mr.has(t)) {
        let n = Fu(t);
        return (n && n.default) || 0;
      } else {
        let n = hT(e),
          r = (av(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == "string" ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return tg(e, t);
    }
    build(e, t, n, r) {
      Nu(e, t, n, r.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t) {
      return ju(e, t);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      pe(e) &&
        (this.childSubscription = e.on("change", (t) => {
          this.current && (this.current.textContent = `${t}`);
        }));
    }
    renderInstance(e, t, n, r) {
      Wv(e, t, n, r);
    }
  },
  vg = class extends pg {
    constructor() {
      super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (Mr.has(t)) {
        let n = Fu(t);
        return (n && n.default) || 0;
      }
      return (t = Uv.has(t) ? t : hu(t)), e.getAttribute(t);
    }
    measureInstanceViewportBox() {
      return ye();
    }
    scrapeMotionValuesFromProps(e, t) {
      return Xv(e, t);
    }
    build(e, t, n, r) {
      Wu(e, t, n, this.isSVGTag, r.transformTemplate);
    }
    renderInstance(e, t, n, r) {
      jv(e, t, n, r);
    }
    mount(e) {
      (this.isSVGTag = Uu(e.tagName)), super.mount(e);
    }
  },
  gg = (e, t) =>
    Hu(e)
      ? new vg(t, { enableHardwareAcceleration: !1 })
      : new mg(t, { enableHardwareAcceleration: !0 }),
  yg = { layout: { ProjectionNode: fg, MeasureLayout: rg } },
  pT = { ...Du, ...Kv, ...dg, ...yg },
  bt = zv((e, t) => Gv(e, t, pT, gg));
var mT = zv(Gv);
function bg() {
  let e = B(!1);
  return (
    Wn(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function Ts() {
  let e = bg(),
    [t, n] = yt(0),
    r = se(() => {
      e.current && n(t + 1);
    }, [t]);
  return [se(() => q.postRender(r), [r]), t];
}
function xg(e) {
  return X(() => () => e(), []);
}
var vT = class extends ke {
  getSnapshotBeforeUpdate(e) {
    let t = this.props.childRef.current;
    if (t && e.isPresent && !this.props.isPresent) {
      let n = this.props.sizeRef.current;
      (n.height = t.offsetHeight || 0),
        (n.width = t.offsetWidth || 0),
        (n.top = t.offsetTop),
        (n.left = t.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function gT({ children: e, isPresent: t }) {
  let n = kr(),
    r = B(null),
    i = B({ width: 0, height: 0, top: 0, left: 0 });
  return (
    Vn(() => {
      let { width: o, height: a, top: s, left: l } = i.current;
      if (t || !r.current || !o || !a) return;
      r.current.dataset.motionPopId = n;
      let c = document.createElement("style");
      return (
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    re(vT, { isPresent: t, childRef: r, sizeRef: i }, wr(e, { ref: r }))
  );
}
var Xc = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: a,
}) => {
  let s = Sn(yT),
    l = kr(),
    c = le(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (u) => {
          s.set(u, !0);
          for (let f of s.values()) if (!f) return;
          r && r();
        },
        register: (u) => (s.set(u, !1), () => s.delete(u)),
      }),
      o ? void 0 : [n]
    );
  return (
    le(() => {
      s.forEach((u, f) => s.set(f, !1));
    }, [n]),
    X(() => {
      !n && !s.size && r && r();
    }, [n]),
    a === "popLayout" && (e = re(gT, { isPresent: n }, e)),
    re(hi.Provider, { value: c }, e)
  );
};
function yT() {
  return new Map();
}
var Ir = (e) => e.key || "";
function bT(e, t) {
  e.forEach((n) => {
    let r = Ir(n);
    t.set(r, n);
  });
}
function xT(e) {
  let t = [];
  return (
    so.forEach(e, (n) => {
      oi(n) && t.push(n);
    }),
    t
  );
}
var Gu = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: i,
  presenceAffectsLayout: o = !0,
  mode: a = "sync",
}) => {
  Ye(!i, "Replace exitBeforeEnter with mode='wait'");
  let s = M(xo).forceRender || Ts()[0],
    l = bg(),
    c = xT(e),
    u = c,
    f = B(new Map()).current,
    d = B(u),
    p = B(new Map()).current,
    y = B(!0);
  if (
    (Wn(() => {
      (y.current = !1), bT(c, p), (d.current = u);
    }),
    xg(() => {
      (y.current = !0), p.clear(), f.clear();
    }),
    y.current)
  )
    return re(
      Ka,
      null,
      u.map((v) =>
        re(
          Xc,
          {
            key: Ir(v),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: a,
          },
          v
        )
      )
    );
  u = [...u];
  let b = d.current.map(Ir),
    S = c.map(Ir),
    h = b.length;
  for (let v = 0; v < h; v++) {
    let g = b[v];
    S.indexOf(g) === -1 && !f.has(g) && f.set(g, void 0);
  }
  return (
    a === "wait" && f.size && (u = []),
    f.forEach((v, g) => {
      if (S.indexOf(g) !== -1) return;
      let x = p.get(g);
      if (!x) return;
      let k = b.indexOf(g),
        w = v;
      if (!w) {
        let E = () => {
          f.delete(g);
          let C = Array.from(p.keys()).filter((T) => !S.includes(T));
          if (
            (C.forEach((T) => p.delete(T)),
            (d.current = c.filter((T) => {
              let R = Ir(T);
              return R === g || C.includes(R);
            })),
            !f.size)
          ) {
            if (l.current === !1) return;
            s(), r && r();
          }
        };
        (w = re(
          Xc,
          {
            key: Ir(x),
            isPresent: !1,
            onExitComplete: E,
            custom: t,
            presenceAffectsLayout: o,
            mode: a,
          },
          x
        )),
          f.set(g, w);
      }
      u.splice(k, 0, w);
    }),
    (u = u.map((v) => {
      let g = v.key;
      return f.has(g)
        ? v
        : re(
            Xc,
            { key: Ir(v), isPresent: !0, presenceAffectsLayout: o, mode: a },
            v
          );
    })),
    re(Ka, null, f.size ? u : u.map((v) => wr(v)))
  );
};
function Sg({ children: e, isValidProp: t, ...n }) {
  t && Xm(t), (n = { ...M(Hn), ...n }), (n.isStatic = Sn(() => n.isStatic));
  let r = le(
    () => n,
    [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]
  );
  return re(Hn.Provider, { value: r }, e);
}
var wg = he(null),
  ST = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function Cm() {
  let e = new Set(),
    t = new WeakMap(),
    n = () => e.forEach(ST);
  return {
    add: (r) => {
      e.add(r), t.set(r, r.addEventListener("willUpdate", n));
    },
    remove: (r) => {
      e.delete(r);
      let i = t.get(r);
      i && (i(), t.delete(r)), n();
    },
    dirty: n,
  };
}
var kg = (e) => e === !0,
  wT = (e) => kg(e === !0) || e === "id",
  Cg = ({ children: e, id: t, inherit: n = !0 }) => {
    let r = M(xo),
      i = M(wg),
      [o, a] = Ts(),
      s = B(null),
      l = r.id || i;
    s.current === null &&
      (wT(n) && l && (t = t ? l + "-" + t : l),
      (s.current = { id: t, group: (kg(n) && r.group) || Cm() }));
    let c = le(() => ({ ...s.current, forceRender: o }), [a]);
    return re(xo.Provider, { value: c }, e);
  };
function nn(e) {
  let t = Sn(() => Ce(e)),
    { isStatic: n } = M(Hn);
  if (n) {
    let [, r] = yt(e);
    X(() => t.on("change", r), []);
  }
  return t;
}
var kT = (e) => e && typeof e == "object" && e.mix,
  CT = (e) => (kT(e) ? e.mix : void 0);
function Fo(...e) {
  let t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    o = e[2 + n],
    a = e[3 + n],
    s = Ar(i, o, { mixer: CT(o[0]), ...a });
  return t ? s(r) : s;
}
function Eg(e, t) {
  let n = nn(t()),
    r = () => n.set(t());
  return (
    r(),
    Wn(() => {
      let i = () => q.update(r, !1, !0),
        o = e.map((a) => a.on("change", i));
      return () => {
        o.forEach((a) => a()), nt(r);
      };
    }),
    n
  );
}
function ET(e) {
  (vo.current = []), e();
  let t = Eg(vo.current, e);
  return (vo.current = void 0), t;
}
function xt(e, t, n, r) {
  if (typeof e == "function") return ET(e);
  let i = typeof t == "function" ? t : Fo(t, n, r);
  return Array.isArray(e) ? Em(e, i) : Em([e], ([o]) => i(o));
}
function Em(e, t) {
  let n = Sn(() => []);
  return Eg(e, () => {
    n.length = 0;
    let r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
var Tg = he(null);
function TT(e, t, n, r) {
  if (!r) return e;
  let i = e.findIndex((u) => u.value === t);
  if (i === -1) return e;
  let o = r > 0 ? 1 : -1,
    a = e[i + o];
  if (!a) return e;
  let s = e[i],
    l = a.layout,
    c = oe(l.min, l.max, 0.5);
  return (o === 1 && s.layout.max + n > c) || (o === -1 && s.layout.min + n < c)
    ? Hk(e, i, i + o)
    : e;
}
function RT(
  { children: e, as: t = "ul", axis: n = "y", onReorder: r, values: i, ...o },
  a
) {
  let s = Sn(() => bt(t)),
    l = [],
    c = B(!1);
  Ye(!!i, "Reorder.Group must be provided a values prop");
  let u = {
    axis: n,
    registerItem: (f, d) => {
      let p = l.findIndex((y) => f === y.value);
      p !== -1 ? (l[p].layout = d[n]) : l.push({ value: f, layout: d[n] }),
        l.sort(PT);
    },
    updateOrder: (f, d, p) => {
      if (c.current) return;
      let y = TT(l, f, d, p);
      l !== y &&
        ((c.current = !0), r(y.map(IT).filter((b) => i.indexOf(b) !== -1)));
    },
  };
  return (
    X(() => {
      c.current = !1;
    }),
    re(s, { ...o, ref: a, ignoreStrict: !0 }, re(Tg.Provider, { value: u }, e))
  );
}
var ZD = Be(RT);
function IT(e) {
  return e.value;
}
function PT(e, t) {
  return e.layout.min - t.layout.min;
}
function Tm(e, t = 0) {
  return pe(e) ? e : nn(t);
}
function _T(
  {
    children: e,
    style: t = {},
    value: n,
    as: r = "li",
    onDrag: i,
    layout: o = !0,
    ...a
  },
  s
) {
  let l = Sn(() => bt(r)),
    c = M(Tg),
    u = { x: Tm(t.x), y: Tm(t.y) },
    f = xt([u.x, u.y], ([b, S]) => (b || S ? 1 : "unset"));
  Ye(!!c, "Reorder.Item must be a child of Reorder.Group");
  let { axis: d, registerItem: p, updateOrder: y } = c;
  return re(
    l,
    {
      drag: d,
      ...a,
      dragSnapToOrigin: !0,
      style: { ...t, x: u.x, y: u.y, zIndex: f },
      layout: o,
      onDrag: (b, S) => {
        let { velocity: h } = S;
        h[d] && y(n, u[d].get(), h[d]), i && i(b, S);
      },
      onLayoutMeasure: (b) => p(n, b),
      ref: s,
      ignoreStrict: !0,
    },
    e
  );
}
var JD = Be(_T);
var Rg = { renderer: gg, ...Du, ...Kv },
  FT = { ...Rg, ...dg, ...yg };
function Yu(e, t = {}) {
  let { isStatic: n } = M(Hn),
    r = B(null),
    i = nn(pe(e) ? e.get() : e),
    o = () => {
      r.current && r.current.stop();
    };
  return (
    Vn(
      () =>
        i.attach((a, s) => {
          if (n) return s(a);
          let l = r.current;
          return (
            l && l.time === 0 && l.sample(be.delta),
            o(),
            (r.current = Lr({
              keyframes: [i.get(), a],
              velocity: i.getVelocity(),
              type: "spring",
              restDelta: 0.001,
              restSpeed: 0.01,
              ...t,
              onUpdate: s,
            })),
            i.get()
          );
        }, o),
      [JSON.stringify(t)]
    ),
    Wn(() => {
      if (pe(e)) return e.on("change", (a) => i.set(parseFloat(a)));
    }, [i]),
    i
  );
}
function Ku(e, t, n) {
  var r;
  if (typeof e == "string") {
    let i = document;
    t &&
      (Ye(!!t.current, "Scope provided, but no element detected."),
      (i = t.current)),
      n
        ? (((r = n[e]) !== null && r !== void 0) ||
            (n[e] = i.querySelectorAll(e)),
          (e = n[e]))
        : (e = i.querySelectorAll(e));
  } else e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
var rs = new WeakMap(),
  Bn;
function LT(e, t) {
  if (t) {
    let { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function MT({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = rs.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return LT(e, n);
        },
      });
    });
}
function OT(e) {
  e.forEach(MT);
}
function AT() {
  typeof ResizeObserver > "u" || (Bn = new ResizeObserver(OT));
}
function VT(e, t) {
  Bn || AT();
  let n = Ku(e);
  return (
    n.forEach((r) => {
      let i = rs.get(r);
      i || ((i = new Set()), rs.set(r, i)), i.add(t), Bn?.observe(r);
    }),
    () => {
      n.forEach((r) => {
        let i = rs.get(r);
        i?.delete(t), i?.size || Bn?.unobserve(r);
      });
    }
  );
}
var is = new Set(),
  bo;
function DT() {
  (bo = () => {
    let e = { width: F.innerWidth, height: F.innerHeight },
      t = { target: F, size: e, contentSize: e };
    is.forEach((n) => n(t));
  }),
    F.addEventListener("resize", bo);
}
function BT(e) {
  return (
    is.add(e),
    bo || DT(),
    () => {
      is.delete(e), !is.size && bo && (bo = void 0);
    }
  );
}
function zT(e, t) {
  return typeof e == "function" ? BT(e) : VT(e, t);
}
var HT = 50,
  Rm = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  NT = () => ({ time: 0, x: Rm(), y: Rm() }),
  $T = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function Im(e, t, n, r) {
  let i = n[t],
    { length: o, position: a } = $T[t],
    s = i.current,
    l = n.time;
  (i.current = e["scroll" + a]),
    (i.scrollLength = e["scroll" + o] - e["client" + o]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = Nn(0, i.scrollLength, i.current));
  let c = r - l;
  i.velocity = c > HT ? 0 : Ru(i.current - s, c);
}
function WT(e, t, n) {
  Im(e, "x", t, n), Im(e, "y", t, n), (t.time = n);
}
function UT(e, t) {
  let n = { x: 0, y: 0 },
    r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      let i = r.getBoundingClientRect();
      r = r.parentElement;
      let o = r.getBoundingClientRect();
      (n.x += i.left - o.left), (n.y += i.top - o.top);
    } else if (r instanceof SVGGraphicsElement) {
      let { x: i, y: o } = r.getBBox();
      (n.x += i), (n.y += o);
      let a = null,
        s = r.parentNode;
      for (; !a; ) s.tagName === "svg" && (a = s), (s = r.parentNode);
      r = a;
    } else break;
  return n;
}
var jT = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  uu = { start: 0, center: 0.5, end: 1 };
function Pm(e, t, n = 0) {
  let r = 0;
  if ((uu[e] !== void 0 && (e = uu[e]), typeof e == "string")) {
    let i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
      ? (e = i / 100)
      : e.endsWith("vw")
      ? (r = (i / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (r = (i / 100) * document.documentElement.clientHeight)
      : (e = i);
  }
  return typeof e == "number" && (r = t * e), n + r;
}
var XT = [0, 0];
function GT(e, t, n, r) {
  let i = Array.isArray(e) ? e : XT,
    o = 0,
    a = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, uu[e] ? e : "0"])),
    (o = Pm(i[0], n, r)),
    (a = Pm(i[1], t)),
    o - a
  );
}
var YT = { x: 0, y: 0 };
function KT(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function qT(e, t, n) {
  let { offset: r = jT.All } = n,
    { target: i = e, axis: o = "y" } = n,
    a = o === "y" ? "height" : "width",
    s = i !== e ? UT(i, e) : YT,
    l = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : KT(i),
    c = { width: e.clientWidth, height: e.clientHeight };
  t[o].offset.length = 0;
  let u = !t[o].interpolate,
    f = r.length;
  for (let d = 0; d < f; d++) {
    let p = GT(r[d], c[a], l[a], s[o]);
    !u && p !== t[o].interpolatorOffsets[d] && (u = !0), (t[o].offset[d] = p);
  }
  u &&
    ((t[o].interpolate = Ar(t[o].offset, Iu(r))),
    (t[o].interpolatorOffsets = [...t[o].offset])),
    (t[o].progress = t[o].interpolate(t[o].current));
}
function ZT(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function QT(e, t, n, r = {}) {
  return {
    measure: () => ZT(e, r.target, n),
    update: (i) => {
      WT(e, n, i), (r.offset || r.target) && qT(e, n, r);
    },
    notify: () => t(n),
  };
}
var uo = new WeakMap(),
  _m = new WeakMap(),
  Gc = new WeakMap(),
  Fm = (e) => (e === document.documentElement ? F : e);
function mi(e, { container: t = document.documentElement, ...n } = {}) {
  let r = Gc.get(t);
  r || ((r = new Set()), Gc.set(t, r));
  let i = NT(),
    o = QT(t, e, i, n);
  if ((r.add(o), !uo.has(t))) {
    let s = () => {
        for (let d of r) d.measure();
      },
      l = () => {
        for (let d of r) d.update(be.timestamp);
      },
      c = () => {
        for (let d of r) d.notify();
      },
      u = () => {
        q.read(s, !1, !0), q.read(l, !1, !0), q.update(c, !1, !0);
      };
    uo.set(t, u);
    let f = Fm(t);
    F.addEventListener("resize", u, { passive: !0 }),
      t !== document.documentElement && _m.set(t, zT(t, u)),
      f.addEventListener("scroll", u, { passive: !0 });
  }
  let a = uo.get(t);
  return (
    q.read(a, !1, !0),
    () => {
      var s;
      nt(a);
      let l = Gc.get(t);
      if (!l || (l.delete(o), l.size)) return;
      let c = uo.get(t);
      uo.delete(t),
        c &&
          (Fm(t).removeEventListener("scroll", c),
          (s = _m.get(t)) === null || s === void 0 || s(),
          F.removeEventListener("resize", c));
    }
  );
}
function Lm(e, t) {
  Po(
    !!(!t || t.current),
    `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
  );
}
var JT = () => ({
  scrollX: Ce(0),
  scrollY: Ce(0),
  scrollXProgress: Ce(0),
  scrollYProgress: Ce(0),
});
function Ig({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  let i = Sn(JT);
  return (
    (n ? Wn : X)(
      () => (
        Lm("target", t),
        Lm("container", e),
        mi(
          ({ x: a, y: s }) => {
            i.scrollX.set(a.current),
              i.scrollXProgress.set(a.progress),
              i.scrollY.set(s.current),
              i.scrollYProgress.set(s.progress);
          },
          {
            ...r,
            container: e?.current || void 0,
            target: t?.current || void 0,
          }
        )
      ),
      [e, t, JSON.stringify(r.offset)]
    ),
    i
  );
}
function Pg() {
  !zu.current && Vv();
  let [e] = yt(fs.current);
  return e;
}
function Vr() {
  let e = Pg(),
    { reducedMotion: t } = M(Hn);
  return t === "never" ? !1 : t === "always" ? !0 : e;
}
function eR(e) {
  e.values.forEach((t) => t.stop());
}
function _g() {
  let e = !1,
    t = new Set(),
    n = {
      subscribe(r) {
        return t.add(r), () => void t.delete(r);
      },
      start(r, i) {
        Ye(
          e,
          "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
        );
        let o = [];
        return (
          t.forEach((a) => {
            o.push(Vu(a, r, { transitionOverride: i }));
          }),
          Promise.all(o)
        );
      },
      set(r) {
        return (
          Ye(
            e,
            "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
          ),
          t.forEach((i) => {
            Qk(i, r);
          })
        );
      },
      stop() {
        t.forEach((r) => {
          eR(r);
        });
      },
      mount() {
        return (
          (e = !0),
          () => {
            (e = !1), n.stop();
          }
        );
      },
    };
  return n;
}
var Fg = (e, t, n) => {
  let r = t - e;
  return ((((n - e) % r) + r) % r) + e;
};
function tR(e, t) {
  let n,
    r = () => {
      let { currentTime: i } = t,
        a = (i === null ? 0 : i.value) / 100;
      n !== a && e(a), (n = a);
    };
  return q.update(r, !0), () => nt(r);
}
var nR = Fv(() => F.ScrollTimeline !== void 0),
  Lg = class {
    constructor(e) {
      this.animations = e.filter(Boolean);
    }
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t);
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++)
        this.animations[n][e] = t;
    }
    attachTimeline(e) {
      let t = this.animations.map((n) => {
        if (nR() && n.attachTimeline) n.attachTimeline(e);
        else
          return (
            n.pause(),
            tR((r) => {
              n.time = n.duration * r;
            }, e)
          );
      });
      return () => {
        t.forEach((n, r) => {
          n && n(), this.animations[r].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(e) {
      this.setAll("time", e);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(e) {
      this.setAll("speed", e);
    }
    get duration() {
      let e = 0;
      for (let t = 0; t < this.animations.length; t++)
        e = Math.max(e, this.animations[t].duration);
      return e;
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    stop() {
      this.runAll("stop");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  };
function rR(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function iR(e) {
  let t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = lg(e)
      ? new vg(t, { enableHardwareAcceleration: !1 })
      : new mg(t, { enableHardwareAcceleration: !0 });
  n.mount(e), $n.set(e, n);
}
function oR(e, t = 100) {
  let n = _o({ keyframes: [0, t], ...e }),
    r = Math.min(Qc(n), Zc);
  return {
    type: "keyframes",
    ease: (i) => n.next(r * i).value / t,
    duration: en(r),
  };
}
function Mm(e, t, n, r) {
  var i;
  return typeof t == "number"
    ? t
    : t.startsWith("-") || t.startsWith("+")
    ? Math.max(0, e + parseFloat(t))
    : t === "<"
    ? n
    : (i = r.get(t)) !== null && i !== void 0
    ? i
    : e;
}
function aR(e, t) {
  return yv(e) ? e[Fg(0, e.length, t)] : e;
}
function sR(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    i.at > t && i.at < n && (ks(e, i), r--);
  }
}
function lR(e, t, n, r, i, o) {
  sR(e, i, o);
  for (let a = 0; a < t.length; a++)
    e.push({ value: t[a], at: oe(i, o, r[a]), easing: aR(n, a) });
}
function cR(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
      ? -1
      : 0
    : e.at - t.at;
}
var uR = "easeInOut";
function fR(e, { defaultTransition: t = {}, ...n } = {}, r) {
  let i = t.duration || 0.3,
    o = new Map(),
    a = new Map(),
    s = {},
    l = new Map(),
    c = 0,
    u = 0,
    f = 0;
  for (let d = 0; d < e.length; d++) {
    let p = e[d];
    if (typeof p == "string") {
      l.set(p, u);
      continue;
    } else if (!Array.isArray(p)) {
      l.set(p.name, Mm(u, p.at, c, l));
      continue;
    }
    let [y, b, S = {}] = p;
    S.at !== void 0 && (u = Mm(u, S.at, c, l));
    let h = 0,
      v = (g, x, k, w = 0, E = 0) => {
        let C = dR(g),
          { delay: T = 0, times: R = Iu(C), type: D = "keyframes", ...L } = x,
          { ease: z = t.ease || "easeOut", duration: O } = x,
          V = typeof T == "function" ? T(w, E) : T,
          H = C.length;
        if (H <= 2 && D === "spring") {
          let K = 100;
          if (H === 2 && mR(C)) {
            let ne = C[1] - C[0];
            K = Math.abs(ne);
          }
          let N = { ...L };
          O !== void 0 && (N.duration = yn(O));
          let Q = oR(N, K);
          (z = Q.ease), (O = Q.duration);
        }
        O ?? (O = i);
        let P = u + V,
          Y = P + O;
        R.length === 1 && R[0] === 0 && (R[1] = 1);
        let G = R.length - C.length;
        G > 0 && bv(R, G),
          C.length === 1 && C.unshift(null),
          lR(k, C, z, R, P, Y),
          (h = Math.max(V + O, h)),
          (f = Math.max(Y, f));
      };
    if (pe(y)) {
      let g = Om(y, a);
      v(b, S, Am("default", g));
    } else {
      let g = Ku(y, r, s),
        x = g.length;
      for (let k = 0; k < x; k++) {
        (b = b), (S = S);
        let w = g[k],
          E = Om(w, a);
        for (let C in b) v(b[C], hR(S, C), Am(C, E), k, x);
      }
    }
    (c = u), (u += h);
  }
  return (
    a.forEach((d, p) => {
      for (let y in d) {
        let b = d[y];
        b.sort(cR);
        let S = [],
          h = [],
          v = [];
        for (let x = 0; x < b.length; x++) {
          let { at: k, value: w, easing: E } = b[x];
          S.push(w), h.push(Nn(0, f, k)), v.push(E || "easeOut");
        }
        h[0] !== 0 && (h.unshift(0), S.unshift(S[0]), v.unshift(uR)),
          h[h.length - 1] !== 1 && (h.push(1), S.push(null)),
          o.has(p) || o.set(p, { keyframes: {}, transition: {} });
        let g = o.get(p);
        (g.keyframes[y] = S),
          (g.transition[y] = { ...t, duration: f, ease: v, times: h, ...n });
      }
    }),
    o
  );
}
function Om(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function Am(e, t) {
  return t[e] || (t[e] = []), t[e];
}
function dR(e) {
  return Array.isArray(e) ? e : [e];
}
function hR(e, t) {
  return e[t] ? { ...e, ...e[t] } : { ...e };
}
var pR = (e) => typeof e == "number",
  mR = (e) => e.every(pR);
function Mg(e, t, n, r) {
  let i = Ku(e, r),
    o = i.length;
  Ye(!!o, "No valid element provided.");
  let a = [];
  for (let s = 0; s < o; s++) {
    let l = i[s];
    $n.has(l) || iR(l);
    let c = $n.get(l),
      u = { ...n };
    typeof u.delay == "function" && (u.delay = u.delay(s, o)),
      a.push(...Au(c, { ...t, transition: u }, {}));
  }
  return new Lg(a);
}
var vR = (e) => Array.isArray(e) && Array.isArray(e[0]);
function gR(e, t, n) {
  let r = [];
  return (
    fR(e, t, n).forEach(({ keyframes: o, transition: a }, s) => {
      let l;
      pe(s) ? (l = Xu(s, o.default, a.default)) : (l = Mg(s, o, a)), r.push(l);
    }),
    new Lg(r)
  );
}
var Og = (e) => {
    function t(n, r, i) {
      let o;
      return (
        vR(n)
          ? (o = gR(n, r, e))
          : rR(r)
          ? (o = Mg(n, r, i, e))
          : (o = Xu(n, r, i)),
        e && e.animations.push(o),
        o
      );
    }
    return t;
  },
  vi = Og();
function Ag() {
  let e = Sn(_g);
  return Wn(e.mount, []), e;
}
var Vg = Ag;
function qu(e) {
  return e !== null && typeof e == "object" && gu in e;
}
function Dg(e) {
  if (qu(e)) return e[gu];
}
function Zu() {
  return yR;
}
function yR(e) {
  Fr.current &&
    ((Fr.current.isUpdating = !1), Fr.current.blockUpdate(), e && e());
}
function Bg() {
  let [e, t] = Ts(),
    n = Zu(),
    r = B();
  return (
    X(() => {
      q.postRender(() =>
        q.postRender(() => {
          t === r.current && (cs.current = !1);
        })
      );
    }, [t]),
    (i) => {
      n(() => {
        (cs.current = !0), e(), i(), (r.current = t + 1);
      });
    }
  );
}
function zg() {
  return se(() => {
    let t = Fr.current;
    t && t.resetTree();
  }, []);
}
var Vm = () => ({});
var f3 = bs({ scrapeMotionValuesFromProps: Vm, createRenderState: Vm });
var bR = fo.reduce((e, t) => ((e[t] = (n) => nt(n)), e), {});
var e_ = {};
Pc(e_, {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => $P,
  createPortal: () => WP,
  createRoot: () => UP,
  default: () => nx,
  findDOMNode: () => jP,
  flushSync: () => XP,
  hydrate: () => GP,
  hydrateRoot: () => YP,
  render: () => KP,
  unmountComponentAtNode: () => qP,
  unstable_batchedUpdates: () => ZP,
  unstable_renderSubtreeIntoContainer: () => QP,
  version: () => JP,
});
var Ls = {};
Pc(Ls, {
  default: () => U,
  unstable_IdlePriority: () => wR,
  unstable_ImmediatePriority: () => kR,
  unstable_LowPriority: () => CR,
  unstable_NormalPriority: () => ER,
  unstable_Profiling: () => TR,
  unstable_UserBlockingPriority: () => RR,
  unstable_cancelCallback: () => IR,
  unstable_continueExecution: () => PR,
  unstable_forceFrameRate: () => _R,
  unstable_getCurrentPriorityLevel: () => FR,
  unstable_getFirstCallbackNode: () => LR,
  unstable_next: () => MR,
  unstable_now: () => SR,
  unstable_pauseExecution: () => OR,
  unstable_requestPaint: () => AR,
  unstable_runWithPriority: () => VR,
  unstable_scheduleCallback: () => DR,
  unstable_shouldYield: () => BR,
  unstable_wrapCallback: () => zR,
});
var U = {};
function tf(e, t) {
  var n = e.length;
  e.push(t);
  e: for (; 0 < n; ) {
    var r = (n - 1) >>> 1,
      i = e[r];
    if (!(0 < Rs(i, t))) break e;
    (e[r] = t), (e[n] = i), (n = r);
  }
}
function Wt(e) {
  return e.length === 0 ? null : e[0];
}
function Ps(e) {
  if (e.length === 0) return null;
  var t = e[0],
    n = e.pop();
  if (n !== t) {
    e[0] = n;
    e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
      var a = 2 * (r + 1) - 1,
        s = e[a],
        l = a + 1,
        c = e[l];
      if (0 > Rs(s, n))
        l < i && 0 > Rs(c, s)
          ? ((e[r] = c), (e[l] = n), (r = l))
          : ((e[r] = s), (e[a] = n), (r = a));
      else {
        if (!(l < i && 0 > Rs(c, n))) break e;
        (e[r] = c), (e[l] = n), (r = l);
      }
    }
  }
  return t;
}
function Rs(e, t) {
  var n = e.sortIndex - t.sortIndex;
  return n !== 0 ? n : e.id - t.id;
}
typeof performance == "object" && typeof performance.now == "function"
  ? ((Hg = performance),
    (U.unstable_now = function () {
      return Hg.now();
    }))
  : ((Qu = Date),
    (Ng = Qu.now()),
    (U.unstable_now = function () {
      return Qu.now() - Ng;
    }));
var Hg,
  Qu,
  Ng,
  rn = [],
  jn = [],
  xR = 1,
  Mt = null,
  Ke = 3,
  _s = !1,
  Dr = !1,
  Mo = !1,
  Ug = typeof setTimeout == "function" ? setTimeout : null,
  jg = typeof clearTimeout == "function" ? clearTimeout : null,
  $g = typeof setImmediate < "u" ? setImmediate : null;
typeof et < "u" &&
  et.scheduling !== void 0 &&
  et.scheduling.isInputPending !== void 0 &&
  et.scheduling.isInputPending.bind(et.scheduling);
function nf(e) {
  for (var t = Wt(jn); t !== null; ) {
    if (t.callback === null) Ps(jn);
    else {
      if (!(t.startTime <= e)) break;
      Ps(jn), (t.sortIndex = t.expirationTime), tf(rn, t);
    }
    t = Wt(jn);
  }
}
function rf(e) {
  if (((Mo = !1), nf(e), !Dr))
    if (Wt(rn) !== null) (Dr = !0), af(of);
    else {
      var t = Wt(jn);
      t !== null && sf(rf, t.startTime - e);
    }
}
function of(e, t) {
  (Dr = !1), Mo && ((Mo = !1), jg(Oo), (Oo = -1)), (_s = !0);
  var n = Ke;
  try {
    for (
      nf(t), Mt = Wt(rn);
      Mt !== null && (!(Mt.expirationTime > t) || (e && !Yg()));

    ) {
      var r = Mt.callback;
      if (typeof r == "function") {
        (Mt.callback = null), (Ke = Mt.priorityLevel);
        var i = r(Mt.expirationTime <= t);
        (t = U.unstable_now()),
          typeof i == "function" ? (Mt.callback = i) : Mt === Wt(rn) && Ps(rn),
          nf(t);
      } else Ps(rn);
      Mt = Wt(rn);
    }
    if (Mt !== null) var o = !0;
    else {
      var a = Wt(jn);
      a !== null && sf(rf, a.startTime - t), (o = !1);
    }
    return o;
  } finally {
    (Mt = null), (Ke = n), (_s = !1);
  }
}
var Fs = !1,
  Is = null,
  Oo = -1,
  Xg = 5,
  Gg = -1;
function Yg() {
  return !(U.unstable_now() - Gg < Xg);
}
function Ju() {
  if (Is !== null) {
    var e = U.unstable_now();
    Gg = e;
    var t = !0;
    try {
      t = Is(!0, e);
    } finally {
      t ? Lo() : ((Fs = !1), (Is = null));
    }
  } else Fs = !1;
}
var Lo;
typeof $g == "function"
  ? (Lo = function () {
      $g(Ju);
    })
  : typeof MessageChannel < "u"
  ? ((ef = new MessageChannel()),
    (Wg = ef.port2),
    (ef.port1.onmessage = Ju),
    (Lo = function () {
      Wg.postMessage(null);
    }))
  : (Lo = function () {
      Ug(Ju, 0);
    });
var ef, Wg;
function af(e) {
  (Is = e), Fs || ((Fs = !0), Lo());
}
function sf(e, t) {
  Oo = Ug(function () {
    e(U.unstable_now());
  }, t);
}
U.unstable_IdlePriority = 5;
U.unstable_ImmediatePriority = 1;
U.unstable_LowPriority = 4;
U.unstable_NormalPriority = 3;
U.unstable_Profiling = null;
U.unstable_UserBlockingPriority = 2;
U.unstable_cancelCallback = function (e) {
  e.callback = null;
};
U.unstable_continueExecution = function () {
  Dr || _s || ((Dr = !0), af(of));
};
U.unstable_forceFrameRate = function (e) {
  0 > e || 125 < e
    ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      )
    : (Xg = 0 < e ? Math.floor(1e3 / e) : 5);
};
U.unstable_getCurrentPriorityLevel = function () {
  return Ke;
};
U.unstable_getFirstCallbackNode = function () {
  return Wt(rn);
};
U.unstable_next = function (e) {
  switch (Ke) {
    case 1:
    case 2:
    case 3:
      var t = 3;
      break;
    default:
      t = Ke;
  }
  var n = Ke;
  Ke = t;
  try {
    return e();
  } finally {
    Ke = n;
  }
};
U.unstable_pauseExecution = function () {};
U.unstable_requestPaint = function () {};
U.unstable_runWithPriority = function (e, t) {
  switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      e = 3;
  }
  var n = Ke;
  Ke = e;
  try {
    return t();
  } finally {
    Ke = n;
  }
};
U.unstable_scheduleCallback = function (e, t, n) {
  var r = U.unstable_now();
  switch (
    (typeof n == "object" && n !== null
      ? ((n = n.delay), (n = typeof n == "number" && 0 < n ? r + n : r))
      : (n = r),
    e)
  ) {
    case 1:
      var i = -1;
      break;
    case 2:
      i = 250;
      break;
    case 5:
      i = 1073741823;
      break;
    case 4:
      i = 1e4;
      break;
    default:
      i = 5e3;
  }
  return (
    (i = n + i),
    (e = {
      id: xR++,
      callback: t,
      priorityLevel: e,
      startTime: n,
      expirationTime: i,
      sortIndex: -1,
    }),
    n > r
      ? ((e.sortIndex = n),
        tf(jn, e),
        Wt(rn) === null &&
          e === Wt(jn) &&
          (Mo ? (jg(Oo), (Oo = -1)) : (Mo = !0), sf(rf, n - r)))
      : ((e.sortIndex = i), tf(rn, e), Dr || _s || ((Dr = !0), af(of))),
    e
  );
};
U.unstable_shouldYield = Yg;
U.unstable_wrapCallback = function (e) {
  var t = Ke;
  return function () {
    var n = Ke;
    Ke = t;
    try {
      return e.apply(this, arguments);
    } finally {
      Ke = n;
    }
  };
};
var SR = U.unstable_now,
  wR = U.unstable_IdlePriority,
  kR = U.unstable_ImmediatePriority,
  CR = U.unstable_LowPriority,
  ER = U.unstable_NormalPriority,
  TR = U.unstable_Profiling,
  RR = U.unstable_UserBlockingPriority,
  IR = U.unstable_cancelCallback,
  PR = U.unstable_continueExecution,
  _R = U.unstable_forceFrameRate,
  FR = U.unstable_getCurrentPriorityLevel,
  LR = U.unstable_getFirstCallbackNode,
  MR = U.unstable_next,
  OR = U.unstable_pauseExecution,
  AR = U.unstable_requestPaint,
  VR = U.unstable_runWithPriority,
  DR = U.unstable_scheduleCallback,
  BR = U.unstable_shouldYield,
  zR = U.unstable_wrapCallback;
var HR = "default" in je ? m : je,
  NR = "default" in Ls ? U : Ls,
  Et = {},
  t0 = HR,
  Ct = NR;
function _(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var n0 = new Set(),
  na = {};
function qr(e, t) {
  Di(e, t), Di(e + "Capture", t);
}
function Di(e, t) {
  for (na[e] = t, e = 0; e < t.length; e++) n0.add(t[e]);
}
var Rn = !(
    typeof F > "u" ||
    typeof F.document > "u" ||
    typeof F.document.createElement > "u"
  ),
  _f = Object.prototype.hasOwnProperty,
  $R =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Kg = {},
  qg = {};
function WR(e) {
  return _f.call(qg, e)
    ? !0
    : _f.call(Kg, e)
    ? !1
    : $R.test(e)
    ? (qg[e] = !0)
    : ((Kg[e] = !0), !1);
}
function UR(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function jR(e, t, n, r) {
  if (t === null || typeof t > "u" || UR(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ot(e, t, n, r, i, o, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a);
}
var Ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new ot(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ne[t] = new ot(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ne[e] = new ot(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ne[e] = new ot(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ne[e] = new ot(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ne[e] = new ot(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ne[e] = new ot(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ne[e] = new ot(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ne[e] = new ot(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Sd = /[\-:]([a-z])/g;
function wd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sd, wd);
    Ne[t] = new ot(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Sd, wd);
    Ne[t] = new ot(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Sd, wd);
  Ne[t] = new ot(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ne[e] = new ot(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ne.xlinkHref = new ot(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ne[e] = new ot(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function kd(e, t, n, r) {
  var i = Ne.hasOwnProperty(t) ? Ne[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (jR(t, n, i, r) && (n = null),
    r || i === null
      ? WR(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? i.type !== 3 && "" : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Fn = t0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ms = Symbol.for("react.element"),
  bi = Symbol.for("react.portal"),
  xi = Symbol.for("react.fragment"),
  Cd = Symbol.for("react.strict_mode"),
  Ff = Symbol.for("react.profiler"),
  r0 = Symbol.for("react.provider"),
  i0 = Symbol.for("react.context"),
  Ed = Symbol.for("react.forward_ref"),
  Lf = Symbol.for("react.suspense"),
  Mf = Symbol.for("react.suspense_list"),
  Td = Symbol.for("react.memo"),
  Gn = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var o0 = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var Zg = Symbol.iterator;
function Ao(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Zg && e[Zg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var lf,
  ge = Object.assign;
function Wo(e) {
  if (lf === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      lf = (t && t[1]) || "";
    }
  return (
    `
` +
    lf +
    e
  );
}
var cf = !1;
function uf(e, t) {
  if (!e || cf) return "";
  cf = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          o = r.stack.split(`
`),
          a = i.length - 1,
          s = o.length - 1;
        1 <= a && 0 <= s && i[a] !== o[s];

      )
        s--;
      for (; 1 <= a && 0 <= s; a--, s--)
        if (i[a] !== o[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || i[a] !== o[s])) {
                var l =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= s);
          break;
        }
    }
  } finally {
    (cf = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Wo(e) : "";
}
function XR(e) {
  switch (e.tag) {
    case 5:
      return Wo(e.type);
    case 16:
      return Wo("Lazy");
    case 13:
      return Wo("Suspense");
    case 19:
      return Wo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = uf(e.type, !1)), e;
    case 11:
      return (e = uf(e.type.render, !1)), e;
    case 1:
      return (e = uf(e.type, !0)), e;
    default:
      return "";
  }
}
function Of(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case xi:
      return "Fragment";
    case bi:
      return "Portal";
    case Ff:
      return "Profiler";
    case Cd:
      return "StrictMode";
    case Lf:
      return "Suspense";
    case Mf:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case i0:
        return (e.displayName || "Context") + ".Consumer";
      case r0:
        return (e._context.displayName || "Context") + ".Provider";
      case Ed:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Td:
        return (
          (t = e.displayName || null), t !== null ? t : Of(e.type) || "Memo"
        );
      case Gn:
        (t = e._payload), (e = e._init);
        try {
          return Of(e(t));
        } catch {}
    }
  return null;
}
function GR(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Of(t);
    case 8:
      return t === Cd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function sr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function a0(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function YR(e) {
  var t = a0(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (r = "" + a), o.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Os(e) {
  e._valueTracker || (e._valueTracker = YR(e));
}
function s0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = a0(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n && (t.setValue(e), !0)
  );
}
function ll(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Af(e, t) {
  var n = t.checked;
  return ge({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Qg(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = sr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function l0(e, t) {
  (t = t.checked), t != null && kd(e, "checked", t, !1);
}
function Vf(e, t) {
  l0(e, t);
  var n = sr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Df(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Df(e, t.type, sr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Jg(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Df(e, t, n) {
  (t === "number" && ll(e.ownerDocument) === e) ||
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Uo = Array.isArray;
function Fi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + sr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Bf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return ge({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ey(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (Uo(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: sr(n) };
}
function c0(e, t) {
  var n = sr(t.value),
    r = sr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ty(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function u0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function zf(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? u0(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var As,
  f0 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        As = As || document.createElement("div"),
          As.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = As.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ra(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Go = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  KR = ["Webkit", "ms", "Moz", "O"];
Object.keys(Go).forEach(function (e) {
  KR.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Go[t] = Go[e]);
  });
});
function d0(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Go.hasOwnProperty(e) && Go[e])
    ? ("" + t).trim()
    : t + "px";
}
function h0(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = d0(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var qR = ge(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Hf(e, t) {
  if (t) {
    if (qR[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(_(62));
  }
}
function Nf(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var $f = null;
function Rd(e) {
  return (
    (e = e.target || e.srcElement || F),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Wf = null,
  Li = null,
  Mi = null;
function ny(e) {
  if ((e = Sa(e))) {
    if (typeof Wf != "function") throw Error(_(280));
    var t = e.stateNode;
    t && ((t = Vl(t)), Wf(e.stateNode, e.type, t));
  }
}
function p0(e) {
  Li ? (Mi ? Mi.push(e) : (Mi = [e])) : (Li = e);
}
function m0() {
  if (Li) {
    var e = Li,
      t = Mi;
    if (((Mi = Li = null), ny(e), t)) for (e = 0; e < t.length; e++) ny(t[e]);
  }
}
function v0(e, t) {
  return e(t);
}
function g0() {}
var ff = !1;
function y0(e, t, n) {
  if (ff) return e(t, n);
  ff = !0;
  try {
    return v0(e, t, n);
  } finally {
    (ff = !1), (Li !== null || Mi !== null) && (g0(), m0());
  }
}
function ia(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Vl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(_(231, t, typeof n));
  return n;
}
var Uf = !1;
if (Rn)
  try {
    (gi = {}),
      Object.defineProperty(gi, "passive", {
        get: function () {
          Uf = !0;
        },
      }),
      F.addEventListener("test", gi, gi),
      F.removeEventListener("test", gi, gi);
  } catch {
    Uf = !1;
  }
var gi;
function ZR(e, t, n, r, i, o, a, s, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var Yo = !1,
  cl = null,
  ul = !1,
  jf = null,
  QR = {
    onError: function (e) {
      (Yo = !0), (cl = e);
    },
  };
function JR(e, t, n, r, i, o, a, s, l) {
  (Yo = !1), (cl = null), ZR.apply(QR, arguments);
}
function eI(e, t, n, r, i, o, a, s, l) {
  if ((JR.apply(this, arguments), Yo)) {
    if (!Yo) throw Error(_(198));
    var c = cl;
    (Yo = !1), (cl = null), ul || ((ul = !0), (jf = c));
  }
}
function Zr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), 4098 & t.flags && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function b0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ry(e) {
  if (Zr(e) !== e) throw Error(_(188));
}
function tI(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Zr(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return ry(i), e;
        if (o === r) return ry(i), t;
        o = o.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var a = !1, s = i.child; s; ) {
        if (s === n) {
          (a = !0), (n = i), (r = o);
          break;
        }
        if (s === r) {
          (a = !0), (r = i), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!a) {
        for (s = o.child; s; ) {
          if (s === n) {
            (a = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (a = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!a) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function x0(e) {
  return (e = tI(e)), e !== null ? S0(e) : null;
}
function S0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = S0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var w0 = Ct.unstable_scheduleCallback,
  iy = Ct.unstable_cancelCallback,
  nI = Ct.unstable_shouldYield,
  rI = Ct.unstable_requestPaint,
  Ee = Ct.unstable_now,
  iI = Ct.unstable_getCurrentPriorityLevel,
  Id = Ct.unstable_ImmediatePriority,
  k0 = Ct.unstable_UserBlockingPriority,
  fl = Ct.unstable_NormalPriority,
  oI = Ct.unstable_LowPriority,
  C0 = Ct.unstable_IdlePriority,
  Ll = null,
  ln = null;
function aI(e) {
  if (ln && typeof ln.onCommitFiberRoot == "function")
    try {
      ln.onCommitFiberRoot(Ll, e, void 0, (128 & e.current.flags) === 128);
    } catch {}
}
var Yt = Math.clz32 ? Math.clz32 : cI,
  sI = Math.log,
  lI = Math.LN2;
function cI(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((sI(e) / lI) | 0)) | 0;
}
var Vs = 64,
  Ds = 4194304;
function jo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return 4194240 & e;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return 130023424 & e;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function dl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = 268435455 & n;
  if (a !== 0) {
    var s = a & ~i;
    s !== 0 ? (r = jo(s)) : ((o &= a), o !== 0 && (r = jo(o)));
  } else (a = n & ~i), a !== 0 ? (r = jo(a)) : o !== 0 && (r = jo(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (4194240 & o) !== 0))
  )
    return t;
  if ((4 & r && (r |= 16 & n), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Yt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function uI(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function fI(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - Yt(o),
      s = 1 << a,
      l = i[a];
    l === -1
      ? (s & n && !(s & r)) || (i[a] = uI(s, t))
      : l <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Xf(e) {
  return (
    (e = -1073741825 & e.pendingLanes),
    e !== 0 ? e : 1073741824 & e ? 1073741824 : 0
  );
}
function E0() {
  var e = Vs;
  return (Vs <<= 1), !(4194240 & Vs) && (Vs = 64), e;
}
function df(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ba(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Yt(t)),
    (e[t] = n);
}
function dI(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Yt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Pd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Yt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ie = 0;
function T0(e) {
  return (e &= -e), 1 < e ? (4 < e ? (268435455 & e ? 16 : 536870912) : 4) : 1;
}
var R0,
  _d,
  I0,
  P0,
  _0,
  Gf = !1,
  Bs = [],
  Jn = null,
  er = null,
  tr = null,
  oa = new Map(),
  aa = new Map(),
  Kn = [],
  hI =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function oy(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Jn = null;
      break;
    case "dragenter":
    case "dragleave":
      er = null;
      break;
    case "mouseover":
    case "mouseout":
      tr = null;
      break;
    case "pointerover":
    case "pointerout":
      oa.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      aa.delete(t.pointerId);
  }
}
function Vo(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Sa(t)), t !== null && _d(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function pI(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Jn = Vo(Jn, e, t, n, r, i)), !0;
    case "dragenter":
      return (er = Vo(er, e, t, n, r, i)), !0;
    case "mouseover":
      return (tr = Vo(tr, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return oa.set(o, Vo(oa.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), aa.set(o, Vo(aa.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function F0(e) {
  var t = Hr(e.target);
  if (t !== null) {
    var n = Zr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = b0(n)), t !== null)) {
          (e.blockedOn = t),
            _0(e.priority, function () {
              I0(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Qs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Yf(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null)
      return (t = Sa(n)), t !== null && _d(t), (e.blockedOn = n), !1;
    n = e.nativeEvent;
    var r = new n.constructor(n.type, n);
    ($f = r), n.target.dispatchEvent(r), ($f = null), t.shift();
  }
  return !0;
}
function ay(e, t, n) {
  Qs(e) && n.delete(t);
}
function mI() {
  (Gf = !1),
    Jn !== null && Qs(Jn) && (Jn = null),
    er !== null && Qs(er) && (er = null),
    tr !== null && Qs(tr) && (tr = null),
    oa.forEach(ay),
    aa.forEach(ay);
}
function Do(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Gf ||
      ((Gf = !0),
      Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority, mI)));
}
function sa(e) {
  function t(i) {
    return Do(i, e);
  }
  if (0 < Bs.length) {
    Do(Bs[0], e);
    for (var n = 1; n < Bs.length; n++) {
      var r = Bs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Jn !== null && Do(Jn, e),
      er !== null && Do(er, e),
      tr !== null && Do(tr, e),
      oa.forEach(t),
      aa.forEach(t),
      n = 0;
    n < Kn.length;
    n++
  )
    (r = Kn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Kn.length && ((n = Kn[0]), n.blockedOn === null); )
    F0(n), n.blockedOn === null && Kn.shift();
}
var Oi = Fn.ReactCurrentBatchConfig,
  hl = !0;
function vI(e, t, n, r) {
  var i = ie,
    o = Oi.transition;
  Oi.transition = null;
  try {
    (ie = 1), Fd(e, t, n, r);
  } finally {
    (ie = i), (Oi.transition = o);
  }
}
function gI(e, t, n, r) {
  var i = ie,
    o = Oi.transition;
  Oi.transition = null;
  try {
    (ie = 4), Fd(e, t, n, r);
  } finally {
    (ie = i), (Oi.transition = o);
  }
}
function Fd(e, t, n, r) {
  if (hl) {
    var i = Yf(e, t, n, r);
    if (i === null) bf(e, t, r, pl, n), oy(e, r);
    else if (pI(i, e, t, n, r)) r.stopPropagation();
    else if ((oy(e, r), 4 & t && -1 < hI.indexOf(e))) {
      for (; i !== null; ) {
        var o = Sa(i);
        if (
          (o !== null && R0(o),
          (o = Yf(e, t, n, r)),
          o === null && bf(e, t, r, pl, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else bf(e, t, r, null, n);
  }
}
var pl = null;
function Yf(e, t, n, r) {
  if (((pl = null), (e = Rd(r)), (e = Hr(e)), e !== null))
    if (((t = Zr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = b0(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (pl = e), null;
}
function L0(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (iI()) {
        case Id:
          return 1;
        case k0:
          return 4;
        case fl:
        case oI:
          return 16;
        case C0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Zn = null,
  Ld = null,
  Js = null;
function M0() {
  if (Js) return Js;
  var e,
    t,
    n = Ld,
    r = n.length,
    i = "value" in Zn ? Zn.value : Zn.textContent,
    o = i.length;
  for (e = 0; e < r && n[e] === i[e]; e++);
  var a = r - e;
  for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
  return (Js = i.slice(e, 1 < t ? 1 - t : void 0));
}
function el(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function zs() {
  return !0;
}
function sy() {
  return !1;
}
function Tt(e) {
  function t(n, r, i, o, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? zs
        : sy),
      (this.isPropagationStopped = sy),
      this
    );
  }
  return (
    ge(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = zs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = zs));
      },
      persist: function () {},
      isPersistent: zs,
    }),
    t
  );
}
var hf,
  pf,
  Bo,
  Ui = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Md = Tt(Ui),
  xa = ge({}, Ui, { view: 0, detail: 0 }),
  yI = Tt(xa),
  Ml = ge({}, xa, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Od,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Bo &&
            (Bo && e.type === "mousemove"
              ? ((hf = e.screenX - Bo.screenX), (pf = e.screenY - Bo.screenY))
              : (pf = hf = 0),
            (Bo = e)),
          hf);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : pf;
    },
  }),
  ly = Tt(Ml),
  bI = ge({}, Ml, { dataTransfer: 0 }),
  xI = Tt(bI),
  SI = ge({}, xa, { relatedTarget: 0 }),
  mf = Tt(SI),
  wI = ge({}, Ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kI = Tt(wI),
  CI = ge({}, Ui, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : F.clipboardData;
    },
  }),
  EI = Tt(CI),
  TI = ge({}, Ui, { data: 0 }),
  cy = Tt(TI),
  RI = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  II = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  PI = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function _I(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = PI[e]) && !!t[e];
}
function Od() {
  return _I;
}
var FI = ge({}, xa, {
    key: function (e) {
      if (e.key) {
        var t = RI[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = el(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? II[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Od,
    charCode: function (e) {
      return e.type === "keypress" ? el(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? el(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  LI = Tt(FI),
  MI = ge({}, Ml, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  uy = Tt(MI),
  OI = ge({}, xa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Od,
  }),
  AI = Tt(OI),
  VI = ge({}, Ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  DI = Tt(VI),
  BI = ge({}, Ml, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  zI = Tt(BI),
  HI = [9, 13, 27, 32],
  Ad = Rn && "CompositionEvent" in F,
  Ko = null;
Rn && "documentMode" in document && (Ko = document.documentMode);
var NI = Rn && "TextEvent" in F && !Ko,
  O0 = Rn && (!Ad || (Ko && 8 < Ko && 11 >= Ko)),
  fy = String.fromCharCode(32),
  dy = !1;
function A0(e, t) {
  switch (e) {
    case "keyup":
      return HI.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function V0(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Si = !1;
function $I(e, t) {
  switch (e) {
    case "compositionend":
      return V0(t);
    case "keypress":
      return t.which !== 32 ? null : ((dy = !0), fy);
    case "textInput":
      return (e = t.data), e === fy && dy ? null : e;
    default:
      return null;
  }
}
function WI(e, t) {
  if (Si)
    return e === "compositionend" || (!Ad && A0(e, t))
      ? ((e = M0()), (Js = Ld = Zn = null), (Si = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return O0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var UI = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function hy(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!UI[e.type] : t === "textarea";
}
function D0(e, t, n, r) {
  p0(r),
    (t = ml(t, "onChange")),
    0 < t.length &&
      ((n = new Md("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var qo = null,
  la = null;
function jI(e) {
  Y0(e, 0);
}
function Ol(e) {
  var t = Ci(e);
  if (s0(t)) return e;
}
function XI(e, t) {
  if (e === "change") return t;
}
var B0 = !1;
Rn &&
  (Rn
    ? ((Ns = "oninput" in document),
      Ns ||
        ((vf = document.createElement("div")),
        vf.setAttribute("oninput", "return;"),
        (Ns = typeof vf.oninput == "function")),
      (Hs = Ns))
    : (Hs = !1),
  (B0 = Hs && (!document.documentMode || 9 < document.documentMode)));
var Hs, Ns, vf;
function py() {
  qo && (qo.detachEvent("onpropertychange", z0), (la = qo = null));
}
function z0(e) {
  if (e.propertyName === "value" && Ol(la)) {
    var t = [];
    D0(t, la, e, Rd(e)), y0(jI, t);
  }
}
function GI(e, t, n) {
  e === "focusin"
    ? (py(), (qo = t), (la = n), qo.attachEvent("onpropertychange", z0))
    : e === "focusout" && py();
}
function YI(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ol(la);
}
function KI(e, t) {
  if (e === "click") return Ol(t);
}
function qI(e, t) {
  if (e === "input" || e === "change") return Ol(t);
}
function ZI(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var qt = typeof Object.is == "function" ? Object.is : ZI;
function ca(e, t) {
  if (qt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!_f.call(t, i) || !qt(e[i], t[i])) return !1;
  }
  return !0;
}
function my(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function vy(e, t) {
  var n = my(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = my(n);
  }
}
function H0(e, t) {
  return (
    !(!e || !t) &&
    (e === t ||
      ((!e || e.nodeType !== 3) &&
        (t && t.nodeType === 3
          ? H0(e, t.parentNode)
          : "contains" in e
          ? e.contains(t)
          : !!e.compareDocumentPosition &&
            !!(16 & e.compareDocumentPosition(t)))))
  );
}
function N0() {
  for (var e = F, t = ll(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (!n) break;
    (e = t.contentWindow), (t = ll(e.document));
  }
  return t;
}
function Vd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function QI(e) {
  var t = N0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    H0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Vd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || F),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = vy(n, o));
        var a = vy(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var JI = Rn && "documentMode" in document && 11 >= document.documentMode,
  wi = null,
  Kf = null,
  Zo = null,
  qf = !1;
function gy(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  qf ||
    wi == null ||
    wi !== ll(r) ||
    ((r = wi),
    "selectionStart" in r && Vd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          F
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Zo && ca(Zo, r)) ||
      ((Zo = r),
      (r = ml(Kf, "onSelect")),
      0 < r.length &&
        ((t = new Md("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = wi))));
}
function $s(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ki = {
    animationend: $s("Animation", "AnimationEnd"),
    animationiteration: $s("Animation", "AnimationIteration"),
    animationstart: $s("Animation", "AnimationStart"),
    transitionend: $s("Transition", "TransitionEnd"),
  },
  gf = {},
  $0 = {};
Rn &&
  (($0 = document.createElement("div").style),
  "AnimationEvent" in F ||
    (delete ki.animationend.animation,
    delete ki.animationiteration.animation,
    delete ki.animationstart.animation),
  "TransitionEvent" in F || delete ki.transitionend.transition);
function Al(e) {
  if (gf[e]) return gf[e];
  if (!ki[e]) return e;
  var t,
    n = ki[e];
  for (t in n) if (n.hasOwnProperty(t) && t in $0) return (gf[e] = n[t]);
  return e;
}
var W0 = Al("animationend"),
  U0 = Al("animationiteration"),
  j0 = Al("animationstart"),
  X0 = Al("transitionend"),
  G0 = new Map(),
  yy =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function cr(e, t) {
  G0.set(e, t), qr(t, [e]);
}
for (Ws = 0; Ws < yy.length; Ws++)
  (Us = yy[Ws]),
    (by = Us.toLowerCase()),
    (xy = Us[0].toUpperCase() + Us.slice(1)),
    cr(by, "on" + xy);
var Us, by, xy, Ws;
cr(W0, "onAnimationEnd");
cr(U0, "onAnimationIteration");
cr(j0, "onAnimationStart");
cr("dblclick", "onDoubleClick");
cr("focusin", "onFocus");
cr("focusout", "onBlur");
cr(X0, "onTransitionEnd");
Di("onMouseEnter", ["mouseout", "mouseover"]);
Di("onMouseLeave", ["mouseout", "mouseover"]);
Di("onPointerEnter", ["pointerout", "pointerover"]);
Di("onPointerLeave", ["pointerout", "pointerover"]);
qr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
qr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
qr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
qr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
qr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Xo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  eP = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xo));
function Sy(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), eI(r, t, void 0, e), (e.currentTarget = null);
}
function Y0(e, t) {
  t = (4 & t) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            c = s.currentTarget;
          if (((s = s.listener), l !== o && i.isPropagationStopped())) break e;
          Sy(i, s, c), (o = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (l = s.instance),
            (c = s.currentTarget),
            (s = s.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          Sy(i, s, c), (o = l);
        }
    }
  }
  if (ul) throw ((e = jf), (ul = !1), (jf = null), e);
}
function ce(e, t) {
  var n = t[td];
  n === void 0 && (n = t[td] = new Set());
  var r = e + "__bubble";
  n.has(r) || (K0(t, e, 2, !1), n.add(r));
}
function yf(e, t, n) {
  var r = 0;
  t && (r |= 4), K0(n, e, r, t);
}
var js = "_reactListening" + Math.random().toString(36).slice(2);
function ua(e) {
  if (!e[js]) {
    (e[js] = !0),
      n0.forEach(function (n) {
        n !== "selectionchange" && (eP.has(n) || yf(n, !1, e), yf(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[js] || ((t[js] = !0), yf("selectionchange", !1, t));
  }
}
function K0(e, t, n, r) {
  switch (L0(t)) {
    case 1:
      var i = vI;
      break;
    case 4:
      i = gI;
      break;
    default:
      i = Fd;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Uf ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function bf(e, t, n, r, i) {
  var o = r;
  if (!(1 & t) && !(2 & t) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; s !== null; ) {
          if (((a = Hr(s)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = o = a;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  y0(function () {
    var c = o,
      u = Rd(n),
      f = [];
    e: {
      var d = G0.get(e);
      if (d !== void 0) {
        var p = Md,
          y = e;
        switch (e) {
          case "keypress":
            if (el(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = LI;
            break;
          case "focusin":
            (y = "focus"), (p = mf);
            break;
          case "focusout":
            (y = "blur"), (p = mf);
            break;
          case "beforeblur":
          case "afterblur":
            p = mf;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = ly;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = xI;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = AI;
            break;
          case W0:
          case U0:
          case j0:
            p = kI;
            break;
          case X0:
            p = DI;
            break;
          case "scroll":
            p = yI;
            break;
          case "wheel":
            p = zI;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = EI;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = uy;
        }
        var b = (4 & t) !== 0,
          S = !b && e === "scroll",
          h = b ? (d !== null ? d + "Capture" : null) : d;
        b = [];
        for (var v, g = c; g !== null; ) {
          v = g;
          var x = v.stateNode;
          if (
            (v.tag === 5 &&
              x !== null &&
              ((v = x),
              h !== null && ((x = ia(g, h)), x != null && b.push(fa(g, x, v)))),
            S)
          )
            break;
          g = g.return;
        }
        0 < b.length &&
          ((d = new p(d, y, null, n, u)), f.push({ event: d, listeners: b }));
      }
    }
    if (!(7 & t)) {
      if (
        ((d = e === "mouseover" || e === "pointerover"),
        (p = e === "mouseout" || e === "pointerout"),
        (!d ||
          n === $f ||
          !(y = n.relatedTarget || n.fromElement) ||
          (!Hr(y) && !y[In])) &&
          (p || d) &&
          ((d =
            u.window === u
              ? u
              : (d = u.ownerDocument)
              ? d.defaultView || d.parentWindow
              : F),
          p
            ? ((y = n.relatedTarget || n.toElement),
              (p = c),
              (y = y ? Hr(y) : null),
              y !== null &&
                ((S = Zr(y)), y !== S || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((p = null), (y = c)),
          p !== y))
      ) {
        if (
          ((b = ly),
          (x = "onMouseLeave"),
          (h = "onMouseEnter"),
          (g = "mouse"),
          (e !== "pointerout" && e !== "pointerover") ||
            ((b = uy),
            (x = "onPointerLeave"),
            (h = "onPointerEnter"),
            (g = "pointer")),
          (S = p == null ? d : Ci(p)),
          (v = y == null ? d : Ci(y)),
          (d = new b(x, g + "leave", p, n, u)),
          (d.target = S),
          (d.relatedTarget = v),
          (x = null),
          Hr(u) === c &&
            ((b = new b(h, g + "enter", y, n, u)),
            (b.target = v),
            (b.relatedTarget = S),
            (x = b)),
          (S = x),
          p && y)
        )
          e: {
            for (b = p, h = y, g = 0, v = b; v; v = yi(v)) g++;
            for (v = 0, x = h; x; x = yi(x)) v++;
            for (; 0 < g - v; ) (b = yi(b)), g--;
            for (; 0 < v - g; ) (h = yi(h)), v--;
            for (; g--; ) {
              if (b === h || (h !== null && b === h.alternate)) break e;
              (b = yi(b)), (h = yi(h));
            }
            b = null;
          }
        else b = null;
        p !== null && wy(f, d, p, b, !1),
          y !== null && S !== null && wy(f, S, y, b, !0);
      }
      if (
        ((d = c ? Ci(c) : F),
        (p = d.nodeName && d.nodeName.toLowerCase()),
        p === "select" || (p === "input" && d.type === "file"))
      )
        var k = XI;
      else if (hy(d))
        if (B0) k = qI;
        else {
          k = YI;
          var w = GI;
        }
      else
        (p = d.nodeName) &&
          p.toLowerCase() === "input" &&
          (d.type === "checkbox" || d.type === "radio") &&
          (k = KI);
      switch (
        (k && (k = k(e, c))
          ? D0(f, k, n, u)
          : (w && w(e, d, c),
            e === "focusout" &&
              (w = d._wrapperState) &&
              w.controlled &&
              d.type === "number" &&
              Df(d, "number", d.value)),
        (w = c ? Ci(c) : F),
        e)
      ) {
        case "focusin":
          (hy(w) || w.contentEditable === "true") &&
            ((wi = w), (Kf = c), (Zo = null));
          break;
        case "focusout":
          Zo = Kf = wi = null;
          break;
        case "mousedown":
          qf = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (qf = !1), gy(f, n, u);
          break;
        case "selectionchange":
          if (JI) break;
        case "keydown":
        case "keyup":
          gy(f, n, u);
      }
      var E;
      if (Ad)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        Si
          ? A0(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (O0 &&
          n.locale !== "ko" &&
          (Si || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Si && (E = M0())
            : ((Zn = u),
              (Ld = "value" in Zn ? Zn.value : Zn.textContent),
              (Si = !0))),
        (w = ml(c, C)),
        0 < w.length &&
          ((C = new cy(C, e, null, n, u)),
          f.push({ event: C, listeners: w }),
          E ? (C.data = E) : ((E = V0(n)), E !== null && (C.data = E)))),
        (E = NI ? $I(e, n) : WI(e, n)) &&
          ((c = ml(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new cy("onBeforeInput", "beforeinput", null, n, u)),
            f.push({ event: u, listeners: c }),
            (u.data = E)));
    }
    Y0(f, t);
  });
}
function fa(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ml(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = ia(e, n)),
      o != null && r.unshift(fa(e, o, i)),
      (o = ia(e, t)),
      o != null && r.push(fa(e, o, i))),
      (e = e.return);
  }
  return r;
}
function yi(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wy(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      c = s.stateNode;
    if (l !== null && l === r) break;
    s.tag === 5 &&
      c !== null &&
      ((s = c),
      i
        ? ((l = ia(n, o)), l != null && a.unshift(fa(n, l, s)))
        : i || ((l = ia(n, o)), l != null && a.push(fa(n, l, s)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var tP = /\r\n?/g,
  nP = /\u0000|\uFFFD/g;
function ky(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      tP,
      `
`
    )
    .replace(nP, "");
}
function Xs(e, t, n) {
  if (((t = ky(t)), ky(e) !== t && n)) throw Error(_(425));
}
function vl() {}
var Zf = null,
  Qf = null;
function Jf(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ed = typeof setTimeout == "function" ? setTimeout : void 0,
  rP = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Cy = typeof Promise == "function" ? Promise : void 0,
  iP =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Cy < "u"
      ? function (e) {
          return Cy.resolve(null).then(e).catch(oP);
        }
      : ed;
function oP(e) {
  setTimeout(function () {
    throw e;
  });
}
function xf(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), sa(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  sa(t);
}
function nr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ey(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ji = Math.random().toString(36).slice(2),
  sn = "__reactFiber$" + ji,
  da = "__reactProps$" + ji,
  In = "__reactContainer$" + ji,
  td = "__reactEvents$" + ji,
  aP = "__reactListeners$" + ji,
  sP = "__reactHandles$" + ji;
function Hr(e) {
  var t = e[sn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[In] || n[sn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ey(e); e !== null; ) {
          if ((n = e[sn])) return n;
          e = Ey(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Sa(e) {
  return (
    (e = e[sn] || e[In]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ci(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function Vl(e) {
  return e[da] || null;
}
var nd = [],
  Ei = -1;
function ur(e) {
  return { current: e };
}
function ue(e) {
  0 > Ei || ((e.current = nd[Ei]), (nd[Ei] = null), Ei--);
}
function ae(e, t) {
  Ei++, (nd[Ei] = e.current), (e.current = t);
}
var lr = {},
  Je = ur(lr),
  dt = ur(!1),
  jr = lr;
function Bi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return lr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i,
    o = {};
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function ht(e) {
  return (e = e.childContextTypes), e != null;
}
function gl() {
  ue(dt), ue(Je);
}
function Ty(e, t, n) {
  if (Je.current !== lr) throw Error(_(168));
  ae(Je, t), ae(dt, n);
}
function q0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(_(108, GR(e) || "Unknown", i));
  return ge({}, n, r);
}
function yl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || lr),
    (jr = Je.current),
    ae(Je, e),
    ae(dt, dt.current),
    !0
  );
}
function Ry(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = q0(e, t, jr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ue(dt),
      ue(Je),
      ae(Je, e))
    : ue(dt),
    ae(dt, n);
}
var kn = null,
  Dl = !1,
  Sf = !1;
function Z0(e) {
  kn === null ? (kn = [e]) : kn.push(e);
}
function lP(e) {
  (Dl = !0), Z0(e);
}
function fr() {
  if (!Sf && kn !== null) {
    Sf = !0;
    var e = 0,
      t = ie;
    try {
      var n = kn;
      for (ie = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (kn = null), (Dl = !1);
    } catch (i) {
      throw (kn !== null && (kn = kn.slice(e + 1)), w0(Id, fr), i);
    } finally {
      (ie = t), (Sf = !1);
    }
  }
  return null;
}
var Ti = [],
  Ri = 0,
  bl = null,
  xl = 0,
  Ot = [],
  At = 0,
  Xr = null,
  Cn = 1,
  En = "";
function Br(e, t) {
  (Ti[Ri++] = xl), (Ti[Ri++] = bl), (bl = e), (xl = t);
}
function Q0(e, t, n) {
  (Ot[At++] = Cn), (Ot[At++] = En), (Ot[At++] = Xr), (Xr = e);
  var r = Cn;
  e = En;
  var i = 32 - Yt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Yt(t) + i;
  if (30 < o) {
    var a = i - (i % 5);
    (o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (Cn = (1 << (32 - Yt(t) + i)) | (n << i) | r),
      (En = o + e);
  } else (Cn = (1 << o) | (n << i) | r), (En = e);
}
function Dd(e) {
  e.return !== null && (Br(e, 1), Q0(e, 1, 0));
}
function Bd(e) {
  for (; e === bl; )
    (bl = Ti[--Ri]), (Ti[Ri] = null), (xl = Ti[--Ri]), (Ti[Ri] = null);
  for (; e === Xr; )
    (Xr = Ot[--At]),
      (Ot[At] = null),
      (En = Ot[--At]),
      (Ot[At] = null),
      (Cn = Ot[--At]),
      (Ot[At] = null);
}
var kt = null,
  wt = null,
  de = !1,
  Gt = null;
function J0(e, t) {
  var n = Vt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Iy(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null && ((e.stateNode = t), (kt = e), (wt = nr(t.firstChild)), !0)
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null && ((e.stateNode = t), (kt = e), (wt = null), !0)
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null &&
          ((n = Xr !== null ? { id: Cn, overflow: En } : null),
          (e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824,
          }),
          (n = Vt(18, null, null, 0)),
          (n.stateNode = t),
          (n.return = e),
          (e.child = n),
          (kt = e),
          (wt = null),
          !0)
      );
    default:
      return !1;
  }
}
function rd(e) {
  return (1 & e.mode) !== 0 && (128 & e.flags) === 0;
}
function id(e) {
  if (de) {
    var t = wt;
    if (t) {
      var n = t;
      if (!Iy(e, t)) {
        if (rd(e)) throw (_(418));
        t = nr(n.nextSibling);
        var r = kt;
        t && Iy(e, t)
          ? J0(r, n)
          : ((e.flags = (-4097 & e.flags) | 2), (de = !1), (kt = e));
      }
    } else {
      if (rd(e)) throw Error(_(418));
      (e.flags = (-4097 & e.flags) | 2), (de = !1), (kt = e);
    }
  }
}
function Py(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  kt = e;
}
function Gs(e) {
  if (e !== kt) return !1;
  if (!de) return Py(e), (de = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Jf(e.type, e.memoizedProps))),
    t && (t = wt))
  ) {
    if (rd(e)) throw (eb(), Error(_(418)));
    for (; t; ) J0(e, t), (t = nr(t.nextSibling));
  }
  if ((Py(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              wt = nr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      wt = null;
    }
  } else wt = kt ? nr(e.stateNode.nextSibling) : null;
  return !0;
}
function eb() {
  for (var e = wt; e; ) e = nr(e.nextSibling);
}
function zi() {
  (wt = kt = null), (de = !1);
}
function zd(e) {
  Gt === null ? (Gt = [e]) : Gt.push(e);
}
var cP = Fn.ReactCurrentBatchConfig;
function jt(e, t) {
  if (e && e.defaultProps) {
    (t = ge({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Sl = ur(null),
  wl = null,
  Ii = null,
  Hd = null;
function Nd() {
  Hd = Ii = wl = null;
}
function $d(e) {
  var t = Sl.current;
  ue(Sl), (e._currentValue = t);
}
function od(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Ai(e, t) {
  (wl = e),
    (Hd = Ii = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ft = !0), (e.firstContext = null));
}
function Bt(e) {
  var t = e._currentValue;
  if (Hd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ii === null)) {
      if (wl === null) throw Error(_(308));
      (Ii = e), (wl.dependencies = { lanes: 0, firstContext: e });
    } else Ii = Ii.next = e;
  return t;
}
var Nr = null;
function Wd(e) {
  Nr === null ? (Nr = [e]) : Nr.push(e);
}
function tb(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Wd(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Pn(e, r)
  );
}
function Pn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Yn = !1;
function Ud(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function nb(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Tn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function rr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), 2 & ee)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Pn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Wd(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Pn(e, n)
  );
}
function tl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (4194240 & n) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pd(e, n);
  }
}
function _y(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r === null || ((r = r.updateQueue), n !== r))
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  else {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = a) : (o = o.next = a), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
  }
}
function kl(e, t, n, r) {
  var i = e.updateQueue;
  Yn = !1;
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var l = s,
      c = l.next;
    (l.next = null), a === null ? (o = c) : (a.next = c), (a = l);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (s = u.lastBaseUpdate),
      s !== a &&
        (s === null ? (u.firstBaseUpdate = c) : (s.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (a = 0), (u = c = l = null), (s = o);
    do {
      var d = s.lane,
        p = s.eventTime;
      if ((r & d) === d) {
        u !== null &&
          (u = u.next =
            {
              eventTime: p,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            b = s;
          switch (((d = t), (p = n), b.tag)) {
            case 1:
              if (((y = b.payload), typeof y == "function")) {
                f = y.call(p, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (-65537 & y.flags) | 128;
            case 0:
              if (
                ((y = b.payload),
                (d = typeof y == "function" ? y.call(p, f, d) : y),
                d == null)
              )
                break e;
              f = ge({}, f, d);
              break e;
            case 2:
              Yn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [s]) : d.push(s));
      } else
        (p = {
          eventTime: p,
          lane: d,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          u === null ? ((c = u = p), (l = f)) : (u = u.next = p),
          (a |= d);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (d = s),
          (s = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (u === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = u),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Yr |= a), (e.lanes = a), (e.memoizedState = f);
  }
}
function Fy(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(_(191, i));
        i.call(r);
      }
    }
}
var rb = new t0.Component().refs;
function ad(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ge({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bl = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && Zr(e) === e;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = it(),
      i = or(e),
      o = Tn(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = rr(e, o, i)),
      t !== null && (Kt(t, e, i, r), tl(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = it(),
      i = or(e),
      o = Tn(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = rr(e, o, i)),
      t !== null && (Kt(t, e, i, r), tl(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = it(),
      r = or(e),
      i = Tn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = rr(e, i, r)),
      t !== null && (Kt(t, e, r, n), tl(t, e, r));
  },
};
function Ly(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, a)
      : !t.prototype ||
        !t.prototype.isPureReactComponent ||
        !ca(n, r) ||
        !ca(i, o)
  );
}
function ib(e, t, n) {
  var r = !1,
    i = lr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Bt(o))
      : ((i = ht(t) ? jr : Je.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Bi(e, i) : lr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Bl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function My(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Bl.enqueueReplaceState(t, t.state, null);
}
function sd(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = rb), Ud(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Bt(o))
    : ((o = ht(t) ? jr : Je.current), (i.context = Bi(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ad(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Bl.enqueueReplaceState(i, i.state, null),
      kl(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function zo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var s = i.refs;
            s === rb && (s = i.refs = {}),
              a === null ? delete s[o] : (s[o] = a);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function Ys(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Oy(e) {
  var t = e._init;
  return t(e._payload);
}
function ob(e) {
  function t(h, v) {
    if (e) {
      var g = h.deletions;
      g === null ? ((h.deletions = [v]), (h.flags |= 16)) : g.push(v);
    }
  }
  function n(h, v) {
    if (!e) return null;
    for (; v !== null; ) t(h, v), (v = v.sibling);
    return null;
  }
  function r(h, v) {
    for (h = new Map(); v !== null; )
      v.key !== null ? h.set(v.key, v) : h.set(v.index, v), (v = v.sibling);
    return h;
  }
  function i(h, v) {
    return (h = ar(h, v)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, v, g) {
    return (
      (h.index = g),
      e
        ? ((g = h.alternate),
          g !== null
            ? ((g = g.index), g < v ? ((h.flags |= 2), v) : g)
            : ((h.flags |= 2), v))
        : ((h.flags |= 1048576), v)
    );
  }
  function a(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, v, g, x) {
    return v === null || v.tag !== 6
      ? ((v = If(g, h.mode, x)), (v.return = h), v)
      : ((v = i(v, g)), (v.return = h), v);
  }
  function l(h, v, g, x) {
    var k = g.type;
    return k === xi
      ? u(h, v, g.props.children, x, g.key)
      : v !== null &&
        (v.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Gn &&
            Oy(k) === v.type))
      ? ((x = i(v, g.props)), (x.ref = zo(h, v, g)), (x.return = h), x)
      : ((x = sl(g.type, g.key, g.props, null, h.mode, x)),
        (x.ref = zo(h, v, g)),
        (x.return = h),
        x);
  }
  function c(h, v, g, x) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== g.containerInfo ||
      v.stateNode.implementation !== g.implementation
      ? ((v = Pf(g, h.mode, x)), (v.return = h), v)
      : ((v = i(v, g.children || [])), (v.return = h), v);
  }
  function u(h, v, g, x, k) {
    return v === null || v.tag !== 7
      ? ((v = Ur(g, h.mode, x, k)), (v.return = h), v)
      : ((v = i(v, g)), (v.return = h), v);
  }
  function f(h, v, g) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = If("" + v, h.mode, g)), (v.return = h), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ms:
          return (
            (g = sl(v.type, v.key, v.props, null, h.mode, g)),
            (g.ref = zo(h, null, v)),
            (g.return = h),
            g
          );
        case bi:
          return (v = Pf(v, h.mode, g)), (v.return = h), v;
        case Gn:
          var x = v._init;
          return f(h, x(v._payload), g);
      }
      if (Uo(v) || Ao(v))
        return (v = Ur(v, h.mode, g, null)), (v.return = h), v;
      Ys(h, v);
    }
    return null;
  }
  function d(h, v, g, x) {
    var k = v !== null ? v.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return k !== null ? null : s(h, v, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ms:
          return g.key === k ? l(h, v, g, x) : null;
        case bi:
          return g.key === k ? c(h, v, g, x) : null;
        case Gn:
          return (k = g._init), d(h, v, k(g._payload), x);
      }
      if (Uo(g) || Ao(g)) return k !== null ? null : u(h, v, g, x, null);
      Ys(h, g);
    }
    return null;
  }
  function p(h, v, g, x, k) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (h = h.get(g) || null), s(v, h, "" + x, k);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ms:
          return (h = h.get(x.key === null ? g : x.key) || null), l(v, h, x, k);
        case bi:
          return (h = h.get(x.key === null ? g : x.key) || null), c(v, h, x, k);
        case Gn:
          var w = x._init;
          return p(h, v, g, w(x._payload), k);
      }
      if (Uo(x) || Ao(x)) return (h = h.get(g) || null), u(v, h, x, k, null);
      Ys(v, x);
    }
    return null;
  }
  function y(h, v, g, x) {
    for (
      var k = null, w = null, E = v, C = (v = 0), T = null;
      E !== null && C < g.length;
      C++
    ) {
      E.index > C ? ((T = E), (E = null)) : (T = E.sibling);
      var R = d(h, E, g[C], x);
      if (R === null) {
        E === null && (E = T);
        break;
      }
      e && E && R.alternate === null && t(h, E),
        (v = o(R, v, C)),
        w === null ? (k = R) : (w.sibling = R),
        (w = R),
        (E = T);
    }
    if (C === g.length) return n(h, E), de && Br(h, C), k;
    if (E === null) {
      for (; C < g.length; C++)
        (E = f(h, g[C], x)),
          E !== null &&
            ((v = o(E, v, C)), w === null ? (k = E) : (w.sibling = E), (w = E));
      return de && Br(h, C), k;
    }
    for (E = r(h, E); C < g.length; C++)
      (T = p(E, h, C, g[C], x)),
        T !== null &&
          (e && T.alternate !== null && E.delete(T.key === null ? C : T.key),
          (v = o(T, v, C)),
          w === null ? (k = T) : (w.sibling = T),
          (w = T));
    return (
      e &&
        E.forEach(function (D) {
          return t(h, D);
        }),
      de && Br(h, C),
      k
    );
  }
  function b(h, v, g, x) {
    var k = Ao(g);
    if (typeof k != "function") throw Error(_(150));
    if (((g = k.call(g)), g == null)) throw Error(_(151));
    for (
      var w = (k = null), E = v, C = (v = 0), T = null, R = g.next();
      E !== null && !R.done;
      C++, R = g.next()
    ) {
      E.index > C ? ((T = E), (E = null)) : (T = E.sibling);
      var D = d(h, E, R.value, x);
      if (D === null) {
        E === null && (E = T);
        break;
      }
      e && E && D.alternate === null && t(h, E),
        (v = o(D, v, C)),
        w === null ? (k = D) : (w.sibling = D),
        (w = D),
        (E = T);
    }
    if (R.done) return n(h, E), de && Br(h, C), k;
    if (E === null) {
      for (; !R.done; C++, R = g.next())
        (R = f(h, R.value, x)),
          R !== null &&
            ((v = o(R, v, C)), w === null ? (k = R) : (w.sibling = R), (w = R));
      return de && Br(h, C), k;
    }
    for (E = r(h, E); !R.done; C++, R = g.next())
      (R = p(E, h, C, R.value, x)),
        R !== null &&
          (e && R.alternate !== null && E.delete(R.key === null ? C : R.key),
          (v = o(R, v, C)),
          w === null ? (k = R) : (w.sibling = R),
          (w = R));
    return (
      e &&
        E.forEach(function (L) {
          return t(h, L);
        }),
      de && Br(h, C),
      k
    );
  }
  function S(h, v, g, x) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === xi &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Ms:
          e: {
            for (var k = g.key, w = v; w !== null; ) {
              if (w.key === k) {
                if (((k = g.type), k === xi)) {
                  if (w.tag === 7) {
                    n(h, w.sibling),
                      (v = i(w, g.props.children)),
                      (v.return = h),
                      (h = v);
                    break e;
                  }
                } else if (
                  w.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Gn &&
                    Oy(k) === w.type)
                ) {
                  n(h, w.sibling),
                    (v = i(w, g.props)),
                    (v.ref = zo(h, w, g)),
                    (v.return = h),
                    (h = v);
                  break e;
                }
                n(h, w);
                break;
              }
              t(h, w), (w = w.sibling);
            }
            g.type === xi
              ? ((v = Ur(g.props.children, h.mode, x, g.key)),
                (v.return = h),
                (h = v))
              : ((x = sl(g.type, g.key, g.props, null, h.mode, x)),
                (x.ref = zo(h, v, g)),
                (x.return = h),
                (h = x));
          }
          return a(h);
        case bi:
          e: {
            for (w = g.key; v !== null; ) {
              if (v.key === w) {
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === g.containerInfo &&
                  v.stateNode.implementation === g.implementation
                ) {
                  n(h, v.sibling),
                    (v = i(v, g.children || [])),
                    (v.return = h),
                    (h = v);
                  break e;
                }
                n(h, v);
                break;
              }
              t(h, v), (v = v.sibling);
            }
            (v = Pf(g, h.mode, x)), (v.return = h), (h = v);
          }
          return a(h);
        case Gn:
          return (w = g._init), S(h, v, w(g._payload), x);
      }
      if (Uo(g)) return y(h, v, g, x);
      if (Ao(g)) return b(h, v, g, x);
      Ys(h, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        v !== null && v.tag === 6
          ? (n(h, v.sibling), (v = i(v, g)), (v.return = h), (h = v))
          : (n(h, v), (v = If(g, h.mode, x)), (v.return = h), (h = v)),
        a(h))
      : n(h, v);
  }
  return S;
}
var Hi = ob(!0),
  ab = ob(!1),
  wa = {},
  cn = ur(wa),
  ha = ur(wa),
  pa = ur(wa);
function $r(e) {
  if (e === wa) throw Error(_(174));
  return e;
}
function jd(e, t) {
  switch ((ae(pa, t), ae(ha, e), ae(cn, wa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : zf(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = zf(t, e));
  }
  ue(cn), ae(cn, t);
}
function Ni() {
  ue(cn), ue(ha), ue(pa);
}
function sb(e) {
  $r(pa.current);
  var t = $r(cn.current),
    n = zf(t, e.type);
  t !== n && (ae(ha, e), ae(cn, n));
}
function Xd(e) {
  ha.current === e && (ue(cn), ue(ha));
}
var me = ur(0);
function Cl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (128 & t.flags) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var wf = [];
function Gd() {
  for (var e = 0; e < wf.length; e++)
    wf[e]._workInProgressVersionPrimary = null;
  wf.length = 0;
}
var nl = Fn.ReactCurrentDispatcher,
  kf = Fn.ReactCurrentBatchConfig,
  Gr = 0,
  ve = null,
  Fe = null,
  Me = null,
  El = !1,
  Qo = !1,
  ma = 0,
  uP = 0;
function qe() {
  throw Error(_(321));
}
function Yd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!qt(e[n], t[n])) return !1;
  return !0;
}
function Kd(e, t, n, r, i, o) {
  if (
    ((Gr = o),
    (ve = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (nl.current = e === null || e.memoizedState === null ? pP : mP),
    (e = n(r, i)),
    Qo)
  ) {
    o = 0;
    do {
      if (((Qo = !1), (ma = 0), 25 <= o)) throw Error(_(301));
      (o += 1),
        (Me = Fe = null),
        (t.updateQueue = null),
        (nl.current = vP),
        (e = n(r, i));
    } while (Qo);
  }
  if (
    ((nl.current = Tl),
    (t = Fe !== null && Fe.next !== null),
    (Gr = 0),
    (Me = Fe = ve = null),
    (El = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function qd() {
  var e = ma !== 0;
  return (ma = 0), e;
}
function an() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Me === null ? (ve.memoizedState = Me = e) : (Me = Me.next = e), Me;
}
function zt() {
  if (Fe === null) {
    var e = ve.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Fe.next;
  var t = Me === null ? ve.memoizedState : Me.next;
  if (t !== null) (Me = t), (Fe = e);
  else {
    if (e === null) throw Error(_(310));
    (Fe = e),
      (e = {
        memoizedState: Fe.memoizedState,
        baseState: Fe.baseState,
        baseQueue: Fe.baseQueue,
        queue: Fe.queue,
        next: null,
      }),
      Me === null ? (ve.memoizedState = Me = e) : (Me = Me.next = e);
  }
  return Me;
}
function va(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Cf(e) {
  var t = zt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = Fe,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = o.next), (o.next = a);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (a = null),
      l = null,
      c = o;
    do {
      var u = c.lane;
      if ((Gr & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((s = l = f), (a = r)) : (l = l.next = f),
          (ve.lanes |= u),
          (Yr |= u);
      }
      c = c.next;
    } while (c !== null && c !== o);
    l === null ? (a = r) : (l.next = s),
      qt(r, t.memoizedState) || (ft = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ve.lanes |= o), (Yr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ef(e) {
  var t = zt(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (o = e(o, a.action)), (a = a.next);
    while (a !== i);
    qt(o, t.memoizedState) || (ft = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function lb() {}
function cb(e, t) {
  var n = ve,
    r = zt(),
    i = t(),
    o = !qt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (ft = !0)),
    (r = r.queue),
    Zd(db.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Me !== null && 1 & Me.memoizedState.tag))
  ) {
    if (
      ((n.flags |= 2048),
      ga(9, fb.bind(null, n, r, i, t), void 0, null),
      Oe === null)
    )
      throw Error(_(349));
    30 & Gr || ub(n, t, i);
  }
  return i;
}
function ub(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ve.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function fb(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), hb(t) && pb(e);
}
function db(e, t, n) {
  return n(function () {
    hb(t) && pb(e);
  });
}
function hb(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qt(e, n);
  } catch {
    return !0;
  }
}
function pb(e) {
  var t = Pn(e, 1);
  t !== null && Kt(t, e, 1, -1);
}
function Ay(e) {
  var t = an();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: va,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = hP.bind(null, ve, e)),
    [t.memoizedState, e]
  );
}
function ga(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ve.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function mb() {
  return zt().memoizedState;
}
function rl(e, t, n, r) {
  var i = an();
  (ve.flags |= e),
    (i.memoizedState = ga(1 | t, n, void 0, r === void 0 ? null : r));
}
function zl(e, t, n, r) {
  var i = zt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Fe !== null) {
    var a = Fe.memoizedState;
    if (((o = a.destroy), r !== null && Yd(r, a.deps))) {
      i.memoizedState = ga(t, n, o, r);
      return;
    }
  }
  (ve.flags |= e), (i.memoizedState = ga(1 | t, n, o, r));
}
function Vy(e, t) {
  return rl(8390656, 8, e, t);
}
function Zd(e, t) {
  return zl(2048, 8, e, t);
}
function vb(e, t) {
  return zl(4, 2, e, t);
}
function gb(e, t) {
  return zl(4, 4, e, t);
}
function yb(e, t) {
  return typeof t == "function"
    ? ((e = e()),
      t(e),
      function () {
        t(null);
      })
    : t != null
    ? ((e = e()),
      (t.current = e),
      function () {
        t.current = null;
      })
    : void 0;
}
function bb(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), zl(4, 4, yb.bind(null, t, e), n)
  );
}
function Qd() {}
function xb(e, t) {
  var n = zt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Sb(e, t) {
  var n = zt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function wb(e, t, n) {
  return 21 & Gr
    ? (qt(n, t) || ((n = E0()), (ve.lanes |= n), (Yr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ft = !0)), (e.memoizedState = n));
}
function fP(e, t) {
  var n = ie;
  (ie = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = kf.transition;
  kf.transition = {};
  try {
    e(!1), t();
  } finally {
    (ie = n), (kf.transition = r);
  }
}
function kb() {
  return zt().memoizedState;
}
function dP(e, t, n) {
  var r = or(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Cb(e))
  )
    Eb(t, n);
  else if (((n = tb(e, t, n, r)), n !== null)) {
    var i = it();
    Kt(n, e, r, i), Tb(n, t, r);
  }
}
function hP(e, t, n) {
  var r = or(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Cb(e)) Eb(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = o(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), qt(s, a))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Wd(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {}
    (n = tb(e, t, i, r)),
      n !== null && ((i = it()), Kt(n, e, r, i), Tb(n, t, r));
  }
}
function Cb(e) {
  var t = e.alternate;
  return e === ve || (t !== null && t === ve);
}
function Eb(e, t) {
  Qo = El = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Tb(e, t, n) {
  if (4194240 & n) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pd(e, n);
  }
}
var Tl = {
    readContext: Bt,
    useCallback: qe,
    useContext: qe,
    useEffect: qe,
    useImperativeHandle: qe,
    useInsertionEffect: qe,
    useLayoutEffect: qe,
    useMemo: qe,
    useReducer: qe,
    useRef: qe,
    useState: qe,
    useDebugValue: qe,
    useDeferredValue: qe,
    useTransition: qe,
    useMutableSource: qe,
    useSyncExternalStore: qe,
    useId: qe,
    unstable_isNewReconciler: !1,
  },
  pP = {
    readContext: Bt,
    useCallback: function (e, t) {
      return (an().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Bt,
    useEffect: Vy,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        rl(4194308, 4, yb.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return rl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return rl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = an();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = an();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = dP.bind(null, ve, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = an();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ay,
    useDebugValue: Qd,
    useDeferredValue: function (e) {
      return (an().memoizedState = e);
    },
    useTransition: function () {
      var e = Ay(!1),
        t = e[0];
      return (e = fP.bind(null, e[1])), (an().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ve,
        i = an();
      if (de) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), Oe === null)) throw Error(_(349));
        30 & Gr || ub(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Vy(db.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ga(9, fb.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = an(),
        t = Oe.identifierPrefix;
      if (de) {
        var n = En,
          r = Cn;
        (n = (r & ~(1 << (32 - Yt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ma++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = uP++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  mP = {
    readContext: Bt,
    useCallback: xb,
    useContext: Bt,
    useEffect: Zd,
    useImperativeHandle: bb,
    useInsertionEffect: vb,
    useLayoutEffect: gb,
    useMemo: Sb,
    useReducer: Cf,
    useRef: mb,
    useState: function () {
      return Cf(va);
    },
    useDebugValue: Qd,
    useDeferredValue: function (e) {
      var t = zt();
      return wb(t, Fe.memoizedState, e);
    },
    useTransition: function () {
      var e = Cf(va)[0],
        t = zt().memoizedState;
      return [e, t];
    },
    useMutableSource: lb,
    useSyncExternalStore: cb,
    useId: kb,
    unstable_isNewReconciler: !1,
  },
  vP = {
    readContext: Bt,
    useCallback: xb,
    useContext: Bt,
    useEffect: Zd,
    useImperativeHandle: bb,
    useInsertionEffect: vb,
    useLayoutEffect: gb,
    useMemo: Sb,
    useReducer: Ef,
    useRef: mb,
    useState: function () {
      return Ef(va);
    },
    useDebugValue: Qd,
    useDeferredValue: function (e) {
      var t = zt();
      return Fe === null ? (t.memoizedState = e) : wb(t, Fe.memoizedState, e);
    },
    useTransition: function () {
      var e = Ef(va)[0],
        t = zt().memoizedState;
      return [e, t];
    },
    useMutableSource: lb,
    useSyncExternalStore: cb,
    useId: kb,
    unstable_isNewReconciler: !1,
  };
function $i(e, t) {
  try {
    var n = "",
      r = t;
    do (n += XR(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Tf(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ld(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var gP = typeof WeakMap == "function" ? WeakMap : Map;
function Rb(e, t, n) {
  (n = Tn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Il || ((Il = !0), (gd = r)), ld(e, t);
    }),
    n
  );
}
function Ib(e, t, n) {
  (n = Tn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        ld(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        ld(e, t),
          typeof r != "function" &&
            (ir === null ? (ir = new Set([this])) : ir.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function Dy(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gP();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = FP.bind(null, e, t, n)), t.then(e, e));
}
function By(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t === null || t.dehydrated !== null)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function zy(e, t, n, r, i) {
  return 1 & e.mode
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Tn(-1, 1)), (t.tag = 2), rr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var yP = Fn.ReactCurrentOwner,
  ft = !1;
function rt(e, t, n, r) {
  t.child = e === null ? ab(t, null, n, r) : Hi(t, e.child, n, r);
}
function Hy(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Ai(t, i),
    (r = Kd(e, t, n, r, o, i)),
    (n = qd()),
    e !== null && !ft
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        _n(e, t, i))
      : (de && n && Dd(t), (t.flags |= 1), rt(e, t, r, i), t.child)
  );
}
function Ny(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !ah(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Pb(e, t, o, r, i))
      : ((e = sl(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ca), n(a, r) && e.ref === t.ref)
    )
      return _n(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = ar(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Pb(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ca(o, r) && e.ref === t.ref) {
      if (((ft = !1), (t.pendingProps = r = o), (e.lanes & i) === 0))
        return (t.lanes = e.lanes), _n(e, t, i);
      131072 & e.flags && (ft = !0);
    }
  }
  return cd(e, t, n, r, i);
}
function _b(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(1 & t.mode))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ae(_i, St),
        (St |= n);
    else {
      if (!(1073741824 & n))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ae(_i, St),
          (St |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ae(_i, St),
        (St |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ae(_i, St),
      (St |= r);
  return rt(e, t, i, n), t.child;
}
function Fb(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function cd(e, t, n, r, i) {
  var o = ht(n) ? jr : Je.current;
  return (
    (o = Bi(t, o)),
    Ai(t, i),
    (n = Kd(e, t, n, r, o, i)),
    (r = qd()),
    e !== null && !ft
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        _n(e, t, i))
      : (de && r && Dd(t), (t.flags |= 1), rt(e, t, n, i), t.child)
  );
}
function $y(e, t, n, r, i) {
  if (ht(n)) {
    var o = !0;
    yl(t);
  } else o = !1;
  if ((Ai(t, i), t.stateNode === null))
    il(e, t), ib(t, n, r), sd(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps;
    a.props = s;
    var l = a.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Bt(c))
      : ((c = ht(n) ? jr : Je.current), (c = Bi(t, c)));
    var u = n.getDerivedStateFromProps,
      f =
        typeof u == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== r || l !== c) && My(t, a, r, c)),
      (Yn = !1);
    var d = t.memoizedState;
    (a.state = d),
      kl(t, r, a, i),
      (l = t.memoizedState),
      s !== r || d !== l || dt.current || Yn
        ? (typeof u == "function" && (ad(t, n, u, r), (l = t.memoizedState)),
          (s = Yn || Ly(t, n, s, r, d, l, c))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = c),
          (r = s))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      nb(e, t),
      (s = t.memoizedProps),
      (c = t.type === t.elementType ? s : jt(t.type, s)),
      (a.props = c),
      (f = t.pendingProps),
      (d = a.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Bt(l))
        : ((l = ht(n) ? jr : Je.current), (l = Bi(t, l)));
    var p = n.getDerivedStateFromProps;
    (u =
      typeof p == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((s !== f || d !== l) && My(t, a, r, l)),
      (Yn = !1),
      (d = t.memoizedState),
      (a.state = d),
      kl(t, r, a, i);
    var y = t.memoizedState;
    s !== f || d !== y || dt.current || Yn
      ? (typeof p == "function" && (ad(t, n, p, r), (y = t.memoizedState)),
        (c = Yn || Ly(t, n, c, r, d, y, l) || !1)
          ? (u ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, y, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, y, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (a.props = r),
        (a.state = y),
        (a.context = l),
        (r = c))
      : (typeof a.componentDidUpdate != "function" ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ud(e, t, n, r, o, i);
}
function ud(e, t, n, r, i, o) {
  Fb(e, t);
  var a = (128 & t.flags) !== 0;
  if (!r && !a) return i && Ry(t, n, !1), _n(e, t, o);
  (r = t.stateNode), (yP.current = t);
  var s =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Hi(t, e.child, null, o)), (t.child = Hi(t, null, s, o)))
      : rt(e, t, s, o),
    (t.memoizedState = r.state),
    i && Ry(t, n, !0),
    t.child
  );
}
function Lb(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ty(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ty(e, t.context, !1),
    jd(e, t.containerInfo);
}
function Wy(e, t, n, r, i) {
  return zi(), zd(i), (t.flags |= 256), rt(e, t, n, r), t.child;
}
var fd = { dehydrated: null, treeContext: null, retryLane: 0 };
function dd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Mb(e, t, n) {
  var r,
    i = t.pendingProps,
    o = me.current,
    a = !1,
    s = (128 & t.flags) !== 0;
  if (
    ((r = s) || (r = (e === null || e.memoizedState !== null) && (2 & o) !== 0),
    r
      ? ((a = !0), (t.flags &= -129))
      : (e !== null && e.memoizedState === null) || (o |= 1),
    ae(me, 1 & o),
    e === null)
  )
    return (
      id(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (1 & t.mode
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = i.children),
          (e = i.fallback),
          a
            ? ((i = t.mode),
              (a = t.child),
              (s = { mode: "hidden", children: s }),
              !(1 & i) && a !== null
                ? ((a.childLanes = 0), (a.pendingProps = s))
                : (a = $l(s, i, 0, null)),
              (e = Ur(e, i, n, null)),
              (a.return = t),
              (e.return = t),
              (a.sibling = e),
              (t.child = a),
              (t.child.memoizedState = dd(n)),
              (t.memoizedState = fd),
              e)
            : Jd(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((r = o.dehydrated), r !== null)))
    return bP(e, t, s, i, r, o, n);
  if (a) {
    (a = i.fallback), (s = t.mode), (o = e.child), (r = o.sibling);
    var l = { mode: "hidden", children: i.children };
    return (
      !(1 & s) && t.child !== o
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = l),
          (t.deletions = null))
        : ((i = ar(o, l)), (i.subtreeFlags = 14680064 & o.subtreeFlags)),
      r !== null ? (a = ar(r, a)) : ((a = Ur(a, s, n, null)), (a.flags |= 2)),
      (a.return = t),
      (i.return = t),
      (i.sibling = a),
      (t.child = i),
      (i = a),
      (a = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? dd(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (a.memoizedState = s),
      (a.childLanes = e.childLanes & ~n),
      (t.memoizedState = fd),
      i
    );
  }
  return (
    (a = e.child),
    (e = a.sibling),
    (i = ar(a, { mode: "visible", children: i.children })),
    !(1 & t.mode) && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  );
}
function Jd(e, t) {
  return (
    (t = $l({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ks(e, t, n, r) {
  return (
    r !== null && zd(r),
    Hi(t, e.child, null, n),
    (e = Jd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function bP(e, t, n, r, i, o, a) {
  if (n)
    return 256 & t.flags
      ? ((t.flags &= -257), (r = Tf(Error(_(422)))), Ks(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = $l({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Ur(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        1 & t.mode && Hi(t, e.child, null, a),
        (t.child.memoizedState = dd(a)),
        (t.memoizedState = fd),
        o);
  if (!(1 & t.mode)) return Ks(e, t, a, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(_(419))), (r = Tf(o, r, void 0)), Ks(e, t, a, r);
  }
  if (((s = (a & e.childLanes) !== 0), ft || s)) {
    if (((r = Oe), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Pn(e, i), Kt(r, e, i, -1));
    }
    return oh(), (r = Tf(Error(_(421)))), Ks(e, t, a, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = LP.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (wt = nr(i.nextSibling)),
      (kt = t),
      (de = !0),
      (Gt = null),
      e !== null &&
        ((Ot[At++] = Cn),
        (Ot[At++] = En),
        (Ot[At++] = Xr),
        (Cn = e.id),
        (En = e.overflow),
        (Xr = t)),
      (t = Jd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Uy(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), od(e.return, t, n);
}
function Rf(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Ob(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((rt(e, t, r.children, n), (r = me.current), 2 & r))
    (r = (1 & r) | 2), (t.flags |= 128);
  else {
    if (e !== null && 128 & e.flags)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Uy(e, n, t);
        else if (e.tag === 19) Uy(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ae(me, r), !(1 & t.mode))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Cl(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Rf(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Cl(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Rf(t, !0, n, null, o);
        break;
      case "together":
        Rf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function il(e, t) {
  !(1 & t.mode) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function _n(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Yr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ar(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ar(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function xP(e, t, n) {
  switch (t.tag) {
    case 3:
      Lb(t), zi();
      break;
    case 5:
      sb(t);
      break;
    case 1:
      ht(t.type) && yl(t);
      break;
    case 4:
      jd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ae(Sl, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ae(me, 1 & me.current), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Mb(e, t, n)
          : (ae(me, 1 & me.current),
            (e = _n(e, t, n)),
            e !== null ? e.sibling : null);
      ae(me, 1 & me.current);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), 128 & e.flags)) {
        if (r) return Ob(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ae(me, me.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), _b(e, t, n);
  }
  return _n(e, t, n);
}
var Ab, hd, Vb, Db;
Ab = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
hd = function () {};
Vb = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), $r(cn.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Af(e, i)), (r = Af(e, r)), (o = []);
        break;
      case "select":
        (i = ge({}, i, { value: void 0 })),
          (r = ge({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Bf(e, i)), (r = Bf(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = vl);
    }
    Hf(n, r);
    var a;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var s = i[c];
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (na.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((s = i?.[c]),
        r.hasOwnProperty(c) && l !== s && (l != null || s != null))
      )
        if (c === "style")
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (o || (o = []), o.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (o = o || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (na.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && ce("scroll", e),
                  o || s === l || (o = []))
                : (o = o || []).push(c, l));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Db = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ho(e, t) {
  if (!de)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ze(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= 14680064 & i.subtreeFlags),
        (r |= 14680064 & i.flags),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function SP(e, t, n) {
  var r = t.pendingProps;
  switch ((Bd(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ze(t), null;
    case 1:
      return ht(t.type) && gl(), Ze(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ni(),
        ue(dt),
        ue(Je),
        Gd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e !== null && e.child !== null) ||
          (Gs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
              ((t.flags |= 1024), Gt !== null && (xd(Gt), (Gt = null)))),
        hd(e, t),
        Ze(t),
        null
      );
    case 5:
      Xd(t);
      var i = $r(pa.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Vb(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return Ze(t), null;
        }
        if (((e = $r(cn.current)), Gs(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[sn] = t), (r[da] = o), (e = (1 & t.mode) !== 0), n)) {
            case "dialog":
              ce("cancel", r), ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Xo.length; i++) ce(Xo[i], r);
              break;
            case "source":
              ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ce("error", r), ce("load", r);
              break;
            case "details":
              ce("toggle", r);
              break;
            case "input":
              Qg(r, o), ce("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ce("invalid", r);
              break;
            case "textarea":
              ey(r, o), ce("invalid", r);
          }
          Hf(n, o), (i = null);
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var s = o[a];
              a === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Xs(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Xs(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : na.hasOwnProperty(a) &&
                  s != null &&
                  a === "onScroll" &&
                  ce("scroll", r);
            }
          switch (n) {
            case "input":
              Os(r), Jg(r, o, !0);
              break;
            case "textarea":
              Os(r), ty(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = vl);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = u0(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[sn] = t),
            (e[da] = r),
            Ab(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Nf(n, r)), n)) {
              case "dialog":
                ce("cancel", e), ce("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Xo.length; i++) ce(Xo[i], e);
                i = r;
                break;
              case "source":
                ce("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ce("error", e), ce("load", e), (i = r);
                break;
              case "details":
                ce("toggle", e), (i = r);
                break;
              case "input":
                Qg(e, r), (i = Af(e, r)), ce("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ge({}, r, { value: void 0 })),
                  ce("invalid", e);
                break;
              case "textarea":
                ey(e, r), (i = Bf(e, r)), ce("invalid", e);
                break;
              default:
                i = r;
            }
            Hf(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var l = s[o];
                o === "style"
                  ? h0(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && f0(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && ra(e, l)
                    : typeof l == "number" && ra(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (na.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && ce("scroll", e)
                      : l != null && kd(e, o, l, a));
              }
            switch (n) {
              case "input":
                Os(e), Jg(e, r, !1);
                break;
              case "textarea":
                Os(e), ty(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + sr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Fi(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Fi(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = vl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ze(t), null;
    case 6:
      if (e && t.stateNode != null) Db(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(_(166));
        if (((n = $r(pa.current)), $r(cn.current), Gs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[sn] = t),
            (o = r.nodeValue !== n) && ((e = kt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Xs(r.nodeValue, n, (1 & e.mode) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Xs(r.nodeValue, n, (1 & e.mode) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[sn] = t),
            (t.stateNode = r);
      }
      return Ze(t), null;
    case 13:
      if (
        (ue(me),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (de && wt !== null && 1 & t.mode && !(128 & t.flags))
          eb(), zi(), (t.flags |= 98560), (o = !1);
        else if (((o = Gs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(_(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(_(317));
            o[sn] = t;
          } else
            zi(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
          Ze(t), (o = !1);
        } else Gt !== null && (xd(Gt), (Gt = null)), (o = !0);
        if (!o) return 65536 & t.flags ? t : null;
      }
      return 128 & t.flags
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            1 & t.mode &&
              (e === null || 1 & me.current ? Le === 0 && (Le = 3) : oh())),
          t.updateQueue !== null && (t.flags |= 4),
          Ze(t),
          null);
    case 4:
      return (
        Ni(), hd(e, t), e === null && ua(t.stateNode.containerInfo), Ze(t), null
      );
    case 10:
      return $d(t.type._context), Ze(t), null;
    case 17:
      return ht(t.type) && gl(), Ze(t), null;
    case 19:
      if ((ue(me), (o = t.memoizedState), o === null)) return Ze(t), null;
      if (((r = (128 & t.flags) !== 0), (a = o.rendering), a === null))
        if (r) Ho(o, !1);
        else {
          if (Le !== 0 || (e !== null && 128 & e.flags))
            for (e = t.child; e !== null; ) {
              if (((a = Cl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Ho(o, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ae(me, (1 & me.current) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ee() > Wi &&
            ((t.flags |= 128), (r = !0), Ho(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Cl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ho(o, !0),
              o.tail === null && o.tailMode === "hidden" && !a.alternate && !de)
            )
              return Ze(t), null;
          } else
            2 * Ee() - o.renderingStartTime > Wi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ho(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = o.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (o.last = a));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ee()),
          (t.sibling = null),
          (n = me.current),
          ae(me, r ? (1 & n) | 2 : 1 & n),
          t)
        : (Ze(t), null);
    case 22:
    case 23:
      return (
        ih(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && 1 & t.mode
          ? 1073741824 & St && (Ze(t), 6 & t.subtreeFlags && (t.flags |= 8192))
          : Ze(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
function wP(e, t) {
  switch ((Bd(t), t.tag)) {
    case 1:
      return (
        ht(t.type) && gl(),
        (e = t.flags),
        65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 3:
      return (
        Ni(),
        ue(dt),
        ue(Je),
        Gd(),
        (e = t.flags),
        65536 & e && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 5:
      return Xd(t), null;
    case 13:
      if (
        (ue(me), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(_(340));
        zi();
      }
      return (
        (e = t.flags), 65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 19:
      return ue(me), null;
    case 4:
      return Ni(), null;
    case 10:
      return $d(t.type._context), null;
    case 22:
    case 23:
      return ih(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var qs = !1,
  Qe = !1,
  kP = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function Pi(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Se(e, t, r);
      }
    else n.current = null;
}
function Bb(e, t, n) {
  try {
    n();
  } catch (r) {
    Se(e, t, r);
  }
}
var jy = !1;
function CP(e, t) {
  if (((Zf = hl), (e = N0()), Vd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || F;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            s = -1,
            l = -1,
            c = 0,
            u = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var p;
              f !== n || (i !== 0 && f.nodeType !== 3) || (s = a + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = a + r),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (p = f.firstChild) !== null;

            )
              (d = f), (f = p);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++c === i && (s = a),
                d === o && ++u === r && (l = a),
                (p = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = p;
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Qf = { focusedElem: e, selectionRange: n }, hl = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (1028 & t.subtreeFlags) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var y = t.alternate;
          if (1024 & t.flags)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var b = y.memoizedProps,
                    S = y.memoizedState,
                    h = t.stateNode,
                    v = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? b : jt(t.type, b),
                      S
                    );
                  h.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (x) {
          Se(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (y = jy), (jy = !1), y;
}
function Jo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Bb(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Hl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function pd(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function zb(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), zb(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[sn], delete t[da], delete t[td], delete t[aP], delete t[sP])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Hb(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Xy(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hb(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (2 & e.flags || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(2 & e.flags)) return e.stateNode;
  }
}
function md(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = vl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (md(e, t, n), e = e.sibling; e !== null; ) md(e, t, n), (e = e.sibling);
}
function vd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (vd(e, t, n), e = e.sibling; e !== null; ) vd(e, t, n), (e = e.sibling);
}
var ze = null,
  Xt = !1;
function Xn(e, t, n) {
  for (n = n.child; n !== null; ) Nb(e, t, n), (n = n.sibling);
}
function Nb(e, t, n) {
  if (ln && typeof ln.onCommitFiberUnmount == "function")
    try {
      ln.onCommitFiberUnmount(Ll, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Qe || Pi(n, t);
    case 6:
      var r = ze,
        i = Xt;
      (ze = null),
        Xn(e, t, n),
        (ze = r),
        (Xt = i),
        ze !== null &&
          (Xt
            ? ((e = ze),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ze.removeChild(n.stateNode));
      break;
    case 18:
      ze !== null &&
        (Xt
          ? ((e = ze),
            (n = n.stateNode),
            e.nodeType === 8
              ? xf(e.parentNode, n)
              : e.nodeType === 1 && xf(e, n),
            sa(e))
          : xf(ze, n.stateNode));
      break;
    case 4:
      (r = ze),
        (i = Xt),
        (ze = n.stateNode.containerInfo),
        (Xt = !0),
        Xn(e, t, n),
        (ze = r),
        (Xt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Qe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            a = o.destroy;
          (o = o.tag),
            a !== void 0 && (2 & o || 4 & o) && Bb(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      Xn(e, t, n);
      break;
    case 1:
      if (
        !Qe &&
        (Pi(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Se(n, t, s);
        }
      Xn(e, t, n);
      break;
    case 21:
      Xn(e, t, n);
      break;
    case 22:
      1 & n.mode
        ? ((Qe = (r = Qe) || n.memoizedState !== null), Xn(e, t, n), (Qe = r))
        : Xn(e, t, n);
      break;
    default:
      Xn(e, t, n);
  }
}
function Gy(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new kP()),
      t.forEach(function (r) {
        var i = MP.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ut(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          a = t,
          s = a;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (ze = s.stateNode), (Xt = !1);
              break e;
            case 3:
              (ze = s.stateNode.containerInfo), (Xt = !0);
              break e;
            case 4:
              (ze = s.stateNode.containerInfo), (Xt = !0);
              break e;
          }
          s = s.return;
        }
        if (ze === null) throw Error(_(160));
        Nb(o, a, i), (ze = null), (Xt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (c) {
        Se(i, t, c);
      }
    }
  if (12854 & t.subtreeFlags)
    for (t = t.child; t !== null; ) $b(t, e), (t = t.sibling);
}
function $b(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ut(t, e), on(e), 4 & r)) {
        try {
          Jo(3, e, e.return), Hl(3, e);
        } catch (b) {
          Se(e, e.return, b);
        }
        try {
          Jo(5, e, e.return);
        } catch (b) {
          Se(e, e.return, b);
        }
      }
      break;
    case 1:
      Ut(t, e), on(e), 512 & r && n !== null && Pi(n, n.return);
      break;
    case 5:
      if (
        (Ut(t, e),
        on(e),
        512 & r && n !== null && Pi(n, n.return),
        32 & e.flags)
      ) {
        var i = e.stateNode;
        try {
          ra(i, "");
        } catch (b) {
          Se(e, e.return, b);
        }
      }
      if (4 & r && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          s = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && l0(i, o),
              Nf(s, a);
            var c = Nf(s, o);
            for (a = 0; a < l.length; a += 2) {
              var u = l[a],
                f = l[a + 1];
              u === "style"
                ? h0(i, f)
                : u === "dangerouslySetInnerHTML"
                ? f0(i, f)
                : u === "children"
                ? ra(i, f)
                : kd(i, u, f, c);
            }
            switch (s) {
              case "input":
                Vf(i, o);
                break;
              case "textarea":
                c0(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var p = o.value;
                p != null
                  ? Fi(i, !!o.multiple, p, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Fi(i, !!o.multiple, o.defaultValue, !0)
                      : Fi(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[da] = o;
          } catch (b) {
            Se(e, e.return, b);
          }
      }
      break;
    case 6:
      if ((Ut(t, e), on(e), 4 & r)) {
        if (e.stateNode === null) throw Error(_(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (b) {
          Se(e, e.return, b);
        }
      }
      break;
    case 3:
      if (
        (Ut(t, e), on(e), 4 & r && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          sa(t.containerInfo);
        } catch (b) {
          Se(e, e.return, b);
        }
      break;
    case 4:
      Ut(t, e), on(e);
      break;
    case 13:
      Ut(t, e),
        on(e),
        (i = e.child),
        8192 & i.flags &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (nh = Ee())),
        4 & r && Gy(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        1 & e.mode ? ((Qe = (c = Qe) || u), Ut(t, e), (Qe = c)) : Ut(t, e),
        on(e),
        8192 & r)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && 1 & e.mode)
        )
          for (A = e, u = e.child; u !== null; ) {
            for (f = A = u; A !== null; ) {
              switch (((d = A), (p = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jo(4, d, d.return);
                  break;
                case 1:
                  Pi(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (b) {
                      Se(r, n, b);
                    }
                  }
                  break;
                case 5:
                  Pi(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Ky(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = d), (A = p)) : Ky(f);
            }
            u = u.sibling;
          }
        e: for (u = null, f = e; ; ) {
          if (f.tag === 5) {
            if (u === null) {
              u = f;
              try {
                (i = f.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = f.stateNode),
                      (l = f.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (s.style.display = d0("display", a)));
              } catch (b) {
                Se(e, e.return, b);
              }
            }
          } else if (f.tag === 6) {
            if (u === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (b) {
                Se(e, e.return, b);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            u === f && (u = null), (f = f.return);
          }
          u === f && (u = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ut(t, e), on(e), 4 & r && Gy(e);
      break;
    case 21:
      break;
    default:
      Ut(t, e), on(e);
  }
}
function on(e) {
  var t = e.flags;
  if (2 & t) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hb(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          32 & r.flags && (ra(i, ""), (r.flags &= -33));
          var o = Xy(e);
          vd(e, o, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = Xy(e);
          md(e, s, a);
          break;
        default:
          throw Error(_(161));
      }
    } catch (l) {
      Se(e, e.return, l);
    }
    e.flags &= -3;
  }
  4096 & t && (e.flags &= -4097);
}
function EP(e, t, n) {
  (A = e), Wb(e, t, n);
}
function Wb(e, t, n) {
  for (var r = (1 & e.mode) !== 0; A !== null; ) {
    var i = A,
      o = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || qs;
      if (!a) {
        var s = i.alternate,
          l = (s !== null && s.memoizedState !== null) || Qe;
        s = qs;
        var c = Qe;
        if (((qs = a), (Qe = l) && !c))
          for (A = i; A !== null; )
            (a = A),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? qy(i)
                : l !== null
                ? ((l.return = a), (A = l))
                : qy(i);
        for (; o !== null; ) (A = o), Wb(o, t, n), (o = o.sibling);
        (A = i), (qs = s), (Qe = c);
      }
      Yy(e, t, n);
    } else
      8772 & i.subtreeFlags && o !== null
        ? ((o.return = i), (A = o))
        : Yy(e, t, n);
  }
}
function Yy(e) {
  for (; A !== null; ) {
    var t = A;
    if (8772 & t.flags) {
      var n = t.alternate;
      try {
        if (8772 & t.flags)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Qe || Hl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (4 & t.flags && !Qe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : jt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Fy(t, o, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Fy(t, a, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && 4 & t.flags) {
                n = s;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var f = u.dehydrated;
                    f !== null && sa(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(_(163));
          }
        Qe || (512 & t.flags && pd(t));
      } catch (d) {
        Se(t, t.return, d);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function Ky(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function qy(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Hl(4, t);
          } catch (l) {
            Se(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Se(t, i, l);
            }
          }
          var o = t.return;
          try {
            pd(t);
          } catch (l) {
            Se(t, o, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            pd(t);
          } catch (l) {
            Se(t, a, l);
          }
      }
    } catch (l) {
      Se(t, t.return, l);
    }
    if (t === e) {
      A = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (A = s);
      break;
    }
    A = t.return;
  }
}
var TP = Math.ceil,
  Rl = Fn.ReactCurrentDispatcher,
  eh = Fn.ReactCurrentOwner,
  Dt = Fn.ReactCurrentBatchConfig,
  ee = 0,
  Oe = null,
  Re = null,
  He = 0,
  St = 0,
  _i = ur(0),
  Le = 0,
  ya = null,
  Yr = 0,
  Nl = 0,
  th = 0,
  ea = null,
  ut = null,
  nh = 0,
  Wi = 1 / 0,
  wn = null,
  Il = !1,
  gd = null,
  ir = null,
  Zs = !1,
  Qn = null,
  Pl = 0,
  ta = 0,
  yd = null,
  ol = -1,
  al = 0;
function it() {
  return 6 & ee ? Ee() : ol !== -1 ? ol : (ol = Ee());
}
function or(e) {
  return 1 & e.mode
    ? 2 & ee && He !== 0
      ? He & -He
      : cP.transition !== null
      ? (al === 0 && (al = E0()), al)
      : ((e = ie),
        e !== 0 || ((e = F.event), (e = e === void 0 ? 16 : L0(e.type))),
        e)
    : 1;
}
function Kt(e, t, n, r) {
  if (50 < ta) throw ((ta = 0), (yd = null), Error(_(185)));
  ba(e, n, r),
    (2 & ee && e === Oe) ||
      (e === Oe && (!(2 & ee) && (Nl |= n), Le === 4 && qn(e, He)),
      pt(e, r),
      n === 1 && ee === 0 && !(1 & t.mode) && ((Wi = Ee() + 500), Dl && fr()));
}
function pt(e, t) {
  var n = e.callbackNode;
  fI(e, t);
  var r = dl(e, e === Oe ? He : 0);
  if (r === 0)
    n !== null && iy(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && iy(n), t === 1))
      e.tag === 0 ? lP(Zy.bind(null, e)) : Z0(Zy.bind(null, e)),
        iP(function () {
          !(6 & ee) && fr();
        }),
        (n = null);
    else {
      switch (T0(r)) {
        case 1:
          n = Id;
          break;
        case 4:
          n = k0;
          break;
        case 16:
          n = fl;
          break;
        case 536870912:
          n = C0;
          break;
        default:
          n = fl;
      }
      n = Zb(n, Ub.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ub(e, t) {
  if (((ol = -1), (al = 0), 6 & ee)) throw Error(_(327));
  var n = e.callbackNode;
  if (Vi() && e.callbackNode !== n) return null;
  var r = dl(e, e === Oe ? He : 0);
  if (r === 0) return null;
  if (30 & r || r & e.expiredLanes || t) t = _l(e, r);
  else {
    t = r;
    var i = ee;
    ee |= 2;
    var o = Xb();
    (Oe === e && He === t) || ((wn = null), (Wi = Ee() + 500), Wr(e, t));
    do
      try {
        PP();
        break;
      } catch (s) {
        jb(e, s);
      }
    while (1);
    Nd(),
      (Rl.current = o),
      (ee = i),
      Re !== null ? (t = 0) : ((Oe = null), (He = 0), (t = Le));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Xf(e)), i !== 0 && ((r = i), (t = bd(e, i)))), t === 1)
    )
      throw ((n = ya), Wr(e, 0), qn(e, r), pt(e, Ee()), n);
    if (t === 6) qn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(30 & r) &&
          !RP(i) &&
          ((t = _l(e, r)),
          t === 2 && ((o = Xf(e)), o !== 0 && ((r = o), (t = bd(e, o)))),
          t === 1))
      )
        throw ((n = ya), Wr(e, 0), qn(e, r), pt(e, Ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          zr(e, ut, wn);
          break;
        case 3:
          if (
            (qn(e, r), (130023424 & r) === r && ((t = nh + 500 - Ee()), 10 < t))
          ) {
            if (dl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              it(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ed(zr.bind(null, e, ut, wn), t);
            break;
          }
          zr(e, ut, wn);
          break;
        case 4:
          if ((qn(e, r), (4194240 & r) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - Yt(r);
            (o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * TP(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ed(zr.bind(null, e, ut, wn), r);
            break;
          }
          zr(e, ut, wn);
          break;
        case 5:
          zr(e, ut, wn);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return pt(e, Ee()), e.callbackNode === n ? Ub.bind(null, e) : null;
}
function bd(e, t) {
  var n = ea;
  return (
    e.current.memoizedState.isDehydrated && (Wr(e, t).flags |= 256),
    (e = _l(e, t)),
    e !== 2 && ((t = ut), (ut = n), t !== null && xd(t)),
    e
  );
}
function xd(e) {
  ut === null ? (ut = e) : ut.push.apply(ut, e);
}
function RP(e) {
  for (var t = e; ; ) {
    if (16384 & t.flags) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!qt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), 16384 & t.subtreeFlags && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function qn(e, t) {
  for (
    t &= ~th,
      t &= ~Nl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Yt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Zy(e) {
  if (6 & ee) throw Error(_(327));
  Vi();
  var t = dl(e, 0);
  if (!(1 & t)) return pt(e, Ee()), null;
  var n = _l(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Xf(e);
    r !== 0 && ((t = r), (n = bd(e, r)));
  }
  if (n === 1) throw ((n = ya), Wr(e, 0), qn(e, t), pt(e, Ee()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zr(e, ut, wn),
    pt(e, Ee()),
    null
  );
}
function rh(e, t) {
  var n = ee;
  ee |= 1;
  try {
    return e(t);
  } finally {
    (ee = n), ee === 0 && ((Wi = Ee() + 500), Dl && fr());
  }
}
function Kr(e) {
  Qn !== null && Qn.tag === 0 && !(6 & ee) && Vi();
  var t = ee;
  ee |= 1;
  var n = Dt.transition,
    r = ie;
  try {
    if (((Dt.transition = null), (ie = 1), e)) return e();
  } finally {
    (ie = r), (Dt.transition = n), (ee = t), !(6 & ee) && fr();
  }
}
function ih() {
  (St = _i.current), ue(_i);
}
function Wr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), rP(n)), Re !== null))
    for (n = Re.return; n !== null; ) {
      var r = n;
      switch ((Bd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && gl();
          break;
        case 3:
          Ni(), ue(dt), ue(Je), Gd();
          break;
        case 5:
          Xd(r);
          break;
        case 4:
          Ni();
          break;
        case 13:
          ue(me);
          break;
        case 19:
          ue(me);
          break;
        case 10:
          $d(r.type._context);
          break;
        case 22:
        case 23:
          ih();
      }
      n = n.return;
    }
  if (
    ((Oe = e),
    (Re = e = ar(e.current, null)),
    (He = St = t),
    (Le = 0),
    (ya = null),
    (th = Nl = Yr = 0),
    (ut = ea = null),
    Nr !== null)
  ) {
    for (t = 0; t < Nr.length; t++)
      if (((n = Nr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var a = o.next;
          (o.next = i), (r.next = a);
        }
        n.pending = r;
      }
    Nr = null;
  }
  return e;
}
function jb(e, t) {
  do {
    var n = Re;
    try {
      if ((Nd(), (nl.current = Tl), El)) {
        for (var r = ve.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        El = !1;
      }
      if (
        ((Gr = 0),
        (Me = Fe = ve = null),
        (Qo = !1),
        (ma = 0),
        (eh.current = null),
        n === null || n.return === null)
      ) {
        (Le = 1), (ya = t), (Re = null);
        break;
      }
      e: {
        var o = e,
          a = n.return,
          s = n,
          l = t;
        if (
          ((t = He),
          (s.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = s,
            f = u.tag;
          if (!(1 & u.mode) && (f === 0 || f === 11 || f === 15)) {
            var d = u.alternate;
            d
              ? ((u.updateQueue = d.updateQueue),
                (u.memoizedState = d.memoizedState),
                (u.lanes = d.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var p = By(a);
          if (p !== null) {
            (p.flags &= -257),
              zy(p, a, s, o, t),
              1 & p.mode && Dy(o, c, t),
              (t = p),
              (l = c);
            var y = t.updateQueue;
            if (y === null) {
              var b = new Set();
              b.add(l), (t.updateQueue = b);
            } else y.add(l);
            break e;
          }
          if (!(1 & t)) {
            Dy(o, c, t), oh();
            break e;
          }
          l = Error(_(426));
        } else if (de && 1 & s.mode) {
          var S = By(a);
          if (S !== null) {
            !(65536 & S.flags) && (S.flags |= 256),
              zy(S, a, s, o, t),
              zd($i(l, s));
            break e;
          }
        }
        (o = l = $i(l, s)),
          Le !== 4 && (Le = 2),
          ea === null ? (ea = [o]) : ea.push(o),
          (o = a);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = Rb(o, l, t);
              _y(o, h);
              break e;
            case 1:
              s = l;
              var v = o.type,
                g = o.stateNode;
              if (
                !(128 & o.flags) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (ir === null || !ir.has(g))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = Ib(o, s, t);
                _y(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Yb(n);
    } catch (k) {
      (t = k), Re === n && n !== null && (Re = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Xb() {
  var e = Rl.current;
  return (Rl.current = Tl), e === null ? Tl : e;
}
function oh() {
  (Le !== 0 && Le !== 3 && Le !== 2) || (Le = 4),
    Oe === null || (!(268435455 & Yr) && !(268435455 & Nl)) || qn(Oe, He);
}
function _l(e, t) {
  var n = ee;
  ee |= 2;
  var r = Xb();
  (Oe === e && He === t) || ((wn = null), Wr(e, t));
  do
    try {
      IP();
      break;
    } catch (i) {
      jb(e, i);
    }
  while (1);
  if ((Nd(), (ee = n), (Rl.current = r), Re !== null)) throw Error(_(261));
  return (Oe = null), (He = 0), Le;
}
function IP() {
  for (; Re !== null; ) Gb(Re);
}
function PP() {
  for (; Re !== null && !nI(); ) Gb(Re);
}
function Gb(e) {
  var t = qb(e.alternate, e, St);
  (e.memoizedProps = e.pendingProps),
    t === null ? Yb(e) : (Re = t),
    (eh.current = null);
}
function Yb(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), 32768 & t.flags)) {
      if (((n = wP(n, t)), n !== null)) {
        (n.flags &= 32767), (Re = n);
        return;
      }
      if (e === null) {
        (Le = 6), (Re = null);
        return;
      }
      (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
    } else if (((n = SP(n, t, St)), n !== null)) {
      Re = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Re = t;
      return;
    }
    Re = t = e;
  } while (t !== null);
  Le === 0 && (Le = 5);
}
function zr(e, t, n) {
  var r = ie,
    i = Dt.transition;
  try {
    (Dt.transition = null), (ie = 1), _P(e, t, n, r);
  } finally {
    (Dt.transition = i), (ie = r);
  }
  return null;
}
function _P(e, t, n, r) {
  do Vi();
  while (Qn !== null);
  if (6 & ee) throw Error(_(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (dI(e, o),
    e === Oe && ((Re = Oe = null), (He = 0)),
    (!(2064 & n.subtreeFlags) && !(2064 & n.flags)) ||
      Zs ||
      ((Zs = !0),
      Zb(fl, function () {
        return Vi(), null;
      })),
    (o = (15990 & n.flags) !== 0),
    15990 & n.subtreeFlags || o)
  ) {
    (o = Dt.transition), (Dt.transition = null);
    var a = ie;
    ie = 1;
    var s = ee;
    (ee |= 4),
      (eh.current = null),
      CP(e, n),
      $b(n, e),
      QI(Qf),
      (hl = !!Zf),
      (Qf = Zf = null),
      (e.current = n),
      EP(n, e, i),
      rI(),
      (ee = s),
      (ie = a),
      (Dt.transition = o);
  } else e.current = n;
  if (
    (Zs && ((Zs = !1), (Qn = e), (Pl = i)),
    (o = e.pendingLanes),
    o === 0 && (ir = null),
    aI(n.stateNode, r),
    pt(e, Ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), (i.value, { componentStack: i.stack, digest: i.digest });
  if (Il) throw ((Il = !1), (e = gd), (gd = null), e);
  return (
    1 & Pl && e.tag !== 0 && Vi(),
    (o = e.pendingLanes),
    1 & o ? (e === yd ? ta++ : ((ta = 0), (yd = e))) : (ta = 0),
    fr(),
    null
  );
}
function Vi() {
  if (Qn !== null) {
    var e = T0(Pl),
      t = Dt.transition,
      n = ie;
    try {
      if (((Dt.transition = null), (ie = 16 > e ? 16 : e), Qn === null))
        var r = !1;
      else {
        if (((e = Qn), (Qn = null), (Pl = 0), 6 & ee)) throw Error(_(331));
        var i = ee;
        for (ee |= 4, A = e.current; A !== null; ) {
          var o = A,
            a = o.child;
          if (16 & A.flags) {
            var s = o.deletions;
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var c = s[l];
                for (A = c; A !== null; ) {
                  var u = A;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Jo(8, u, o);
                  }
                  var f = u.child;
                  if (f !== null) (f.return = u), (A = f);
                  else
                    for (; A !== null; ) {
                      u = A;
                      var d = u.sibling,
                        p = u.return;
                      if ((zb(u), u === c)) {
                        A = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = p), (A = d);
                        break;
                      }
                      A = p;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var b = y.child;
                if (b !== null) {
                  y.child = null;
                  do {
                    var S = b.sibling;
                    (b.sibling = null), (b = S);
                  } while (b !== null);
                }
              }
              A = o;
            }
          }
          if (2064 & o.subtreeFlags && a !== null) (a.return = o), (A = a);
          else
            e: for (; A !== null; ) {
              if (((o = A), 2048 & o.flags))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Jo(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (A = h);
                break e;
              }
              A = o.return;
            }
        }
        var v = e.current;
        for (A = v; A !== null; ) {
          a = A;
          var g = a.child;
          if (2064 & a.subtreeFlags && g !== null) (g.return = a), (A = g);
          else
            e: for (a = v; A !== null; ) {
              if (((s = A), 2048 & s.flags))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hl(9, s);
                  }
                } catch (k) {
                  Se(s, s.return, k);
                }
              if (s === a) {
                A = null;
                break e;
              }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), (A = x);
                break e;
              }
              A = s.return;
            }
        }
        if (
          ((ee = i), fr(), ln && typeof ln.onPostCommitFiberRoot == "function")
        )
          try {
            ln.onPostCommitFiberRoot(Ll, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ie = n), (Dt.transition = t);
    }
  }
  return !1;
}
function Qy(e, t, n) {
  (t = $i(n, t)),
    (t = Rb(e, t, 1)),
    (e = rr(e, t, 1)),
    (t = it()),
    e !== null && (ba(e, 1, t), pt(e, t));
}
function Se(e, t, n) {
  if (e.tag === 3) Qy(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Qy(t, e, n);
        break;
      }
      if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ir === null || !ir.has(r)))
        ) {
          (e = $i(n, e)),
            (e = Ib(t, e, 1)),
            (t = rr(t, e, 1)),
            (e = it()),
            t !== null && (ba(t, 1, e), pt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function FP(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = it()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Oe === e &&
      (He & n) === n &&
      (Le === 4 || (Le === 3 && (130023424 & He) === He && 500 > Ee() - nh)
        ? Wr(e, 0)
        : (th |= n)),
    pt(e, t);
}
function Kb(e, t) {
  t === 0 &&
    (1 & e.mode
      ? ((t = Ds), (Ds <<= 1), !(130023424 & Ds) && (Ds = 4194304))
      : (t = 1));
  var n = it();
  (e = Pn(e, t)), e !== null && (ba(e, t, n), pt(e, n));
}
function LP(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Kb(e, n);
}
function MP(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), Kb(e, n);
}
var qb;
qb = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || dt.current) ft = !0;
    else {
      if (!(e.lanes & n) && !(128 & t.flags)) return (ft = !1), xP(e, t, n);
      ft = (131072 & e.flags) !== 0;
    }
  else (ft = !1), de && 1048576 & t.flags && Q0(t, xl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      il(e, t), (e = t.pendingProps);
      var i = Bi(t, Je.current);
      Ai(t, n), (i = Kd(null, t, r, e, i, n));
      var o = qd();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ht(r) ? ((o = !0), yl(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ud(t),
            (i.updater = Bl),
            (t.stateNode = i),
            (i._reactInternals = t),
            sd(t, r, e, n),
            (t = ud(null, t, r, !0, o, n)))
          : ((t.tag = 0), de && o && Dd(t), rt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (il(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = AP(r)),
          (e = jt(r, e)),
          i)
        ) {
          case 0:
            t = cd(null, t, r, e, n);
            break e;
          case 1:
            t = $y(null, t, r, e, n);
            break e;
          case 11:
            t = Hy(null, t, r, e, n);
            break e;
          case 14:
            t = Ny(null, t, r, jt(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : jt(r, i)),
        cd(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : jt(r, i)),
        $y(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Lb(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          nb(e, t),
          kl(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), o.isDehydrated)) {
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            256 & t.flags)
          ) {
            (i = $i(Error(_(423)), t)), (t = Wy(e, t, r, n, i));
            break e;
          }
          if (r !== i) {
            (i = $i(Error(_(424)), t)), (t = Wy(e, t, r, n, i));
            break e;
          }
          for (
            wt = nr(t.stateNode.containerInfo.firstChild),
              kt = t,
              de = !0,
              Gt = null,
              n = ab(t, null, r, n),
              t.child = n;
            n;

          )
            (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
        } else {
          if ((zi(), r === i)) {
            t = _n(e, t, n);
            break e;
          }
          rt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        sb(t),
        e === null && id(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        Jf(r, i) ? (a = null) : o !== null && Jf(r, o) && (t.flags |= 32),
        Fb(e, t),
        rt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && id(t), null;
    case 13:
      return Mb(e, t, n);
    case 4:
      return (
        jd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Hi(t, null, r, n)) : rt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : jt(r, i)),
        Hy(e, t, r, i, n)
      );
    case 7:
      return rt(e, t, t.pendingProps, n), t.child;
    case 8:
      return rt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return rt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          ae(Sl, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (qt(o.value, a)) {
            if (o.children === i.children && !dt.current) {
              t = _n(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                a = o.child;
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = Tn(-1, n & -n)), (l.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      od(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(_(341));
                (a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  od(a, n, t),
                  (a = o.sibling);
              } else a = o.child;
              if (a !== null) a.return = o;
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((o = a.sibling), o !== null)) {
                    (o.return = a.return), (a = o);
                    break;
                  }
                  a = a.return;
                }
              o = a;
            }
        rt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Ai(t, n),
        (i = Bt(i)),
        (r = r(i)),
        (t.flags |= 1),
        rt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = jt(r, t.pendingProps)),
        (i = jt(r.type, i)),
        Ny(e, t, r, i, n)
      );
    case 15:
      return Pb(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : jt(r, i)),
        il(e, t),
        (t.tag = 1),
        ht(r) ? ((e = !0), yl(t)) : (e = !1),
        Ai(t, n),
        ib(t, r, i),
        sd(t, r, i, n),
        ud(null, t, r, !0, e, n)
      );
    case 19:
      return Ob(e, t, n);
    case 22:
      return _b(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function Zb(e, t) {
  return w0(e, t);
}
function OP(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Vt(e, t, n, r) {
  return new OP(e, t, n, r);
}
function ah(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function AP(e) {
  if (typeof e == "function") return ah(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ed)) return 11;
    if (e === Td) return 14;
  }
  return 2;
}
function ar(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Vt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = 14680064 & e.flags),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function sl(e, t, n, r, i, o) {
  var a = 2;
  if (((r = e), typeof e == "function")) ah(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case xi:
        return Ur(n.children, i, o, t);
      case Cd:
        (a = 8), (i |= 8);
        break;
      case Ff:
        return (
          (e = Vt(12, n, t, 2 | i)), (e.elementType = Ff), (e.lanes = o), e
        );
      case Lf:
        return (e = Vt(13, n, t, i)), (e.elementType = Lf), (e.lanes = o), e;
      case Mf:
        return (e = Vt(19, n, t, i)), (e.elementType = Mf), (e.lanes = o), e;
      case o0:
        return $l(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case r0:
              a = 10;
              break e;
            case i0:
              a = 9;
              break e;
            case Ed:
              a = 11;
              break e;
            case Td:
              a = 14;
              break e;
            case Gn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Vt(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Ur(e, t, n, r) {
  return (e = Vt(7, e, r, t)), (e.lanes = n), e;
}
function $l(e, t, n, r) {
  return (
    (e = Vt(22, e, r, t)),
    (e.elementType = o0),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function If(e, t, n) {
  return (e = Vt(6, e, null, t)), (e.lanes = n), e;
}
function Pf(e, t, n) {
  return (
    (t = Vt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function VP(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = df(0)),
    (this.expirationTimes = df(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = df(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function sh(e, t, n, r, i, o, a, s, l) {
  return (
    (e = new VP(e, t, n, s, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Vt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ud(o),
    e
  );
}
function DP(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: bi,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Qb(e) {
  if (!e) return lr;
  e = e._reactInternals;
  e: {
    if (Zr(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ht(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ht(n)) return q0(e, n, t);
  }
  return t;
}
function Jb(e, t, n, r, i, o, a, s, l) {
  return (
    (e = sh(n, r, !0, e, i, o, a, s, l)),
    (e.context = Qb(null)),
    (n = e.current),
    (r = it()),
    (i = or(n)),
    (o = Tn(r, i)),
    (o.callback = t ?? null),
    rr(n, o, i),
    (e.current.lanes = i),
    ba(e, i, r),
    pt(e, r),
    e
  );
}
function Wl(e, t, n, r) {
  var i = t.current,
    o = it(),
    a = or(i);
  return (
    (n = Qb(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Tn(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = rr(i, t, a)),
    e !== null && (Kt(e, i, a, o), tl(e, i, a)),
    a
  );
}
function Fl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Jy(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function lh(e, t) {
  Jy(e, t), (e = e.alternate) && Jy(e, t);
}
function BP() {
  return null;
}
var ex =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ch(e) {
  this._internalRoot = e;
}
Ul.prototype.render = ch.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Wl(e, t, null, null);
};
Ul.prototype.unmount = ch.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Kr(function () {
      Wl(null, e, null, null);
    }),
      (t[In] = null);
  }
};
function Ul(e) {
  this._internalRoot = e;
}
Ul.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = P0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Kn.length && t !== 0 && t < Kn[n].priority; n++);
    Kn.splice(n, 0, e), n === 0 && F0(e);
  }
};
function uh(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function jl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function e0() {}
function zP(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = Fl(a);
        o.call(c);
      };
    }
    var a = Jb(t, r, e, 0, null, !1, !1, "", e0);
    return (
      (e._reactRootContainer = a),
      (e[In] = a.current),
      ua(e.nodeType === 8 ? e.parentNode : e),
      Kr(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var c = Fl(l);
      s.call(c);
    };
  }
  var l = sh(e, 0, !1, null, null, !1, !1, "", e0);
  return (
    (e._reactRootContainer = l),
    (e[In] = l.current),
    ua(e.nodeType === 8 ? e.parentNode : e),
    Kr(function () {
      Wl(t, l, n, r);
    }),
    l
  );
}
function Xl(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var a = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var l = Fl(a);
        s.call(l);
      };
    }
    Wl(t, a, e, i);
  } else a = zP(n, t, e, i, r);
  return Fl(a);
}
R0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = jo(t.pendingLanes);
        n !== 0 &&
          (Pd(t, 1 | n), pt(t, Ee()), !(6 & ee) && ((Wi = Ee() + 500), fr()));
      }
      break;
    case 13:
      Kr(function () {
        var r = Pn(e, 1);
        if (r !== null) {
          var i = it();
          Kt(r, e, 1, i);
        }
      }),
        lh(e, 1);
  }
};
_d = function (e) {
  if (e.tag === 13) {
    var t = Pn(e, 134217728);
    if (t !== null) {
      var n = it();
      Kt(t, e, 134217728, n);
    }
    lh(e, 134217728);
  }
};
I0 = function (e) {
  if (e.tag === 13) {
    var t = or(e),
      n = Pn(e, t);
    if (n !== null) {
      var r = it();
      Kt(n, e, t, r);
    }
    lh(e, t);
  }
};
P0 = function () {
  return ie;
};
_0 = function (e, t) {
  var n = ie;
  try {
    return (ie = e), t();
  } finally {
    ie = n;
  }
};
Wf = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Vf(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Vl(r);
            if (!i) throw Error(_(90));
            s0(r), Vf(r, i);
          }
        }
      }
      break;
    case "textarea":
      c0(e, n);
      break;
    case "select":
      (t = n.value), t != null && Fi(e, !!n.multiple, t, !1);
  }
};
v0 = rh;
g0 = Kr;
var HP = { usingClientEntryPoint: !1, Events: [Sa, Ci, Vl, p0, m0, rh] },
  No = {
    findFiberByHostInstance: Hr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  NP = {
    bundleType: No.bundleType,
    version: No.version,
    rendererPackageName: No.rendererPackageName,
    rendererConfig: No.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Fn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = x0(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: No.findFiberByHostInstance || BP,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
  (($o = __REACT_DEVTOOLS_GLOBAL_HOOK__), !$o.isDisabled && $o.supportsFiber)
)
  try {
    (Ll = $o.inject(NP)), (ln = $o);
  } catch {}
var $o;
Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = HP;
Et.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!uh(t)) throw Error(_(200));
  return DP(e, t, null, n);
};
Et.createRoot = function (e, t) {
  if (!uh(e)) throw Error(_(299));
  var n = !1,
    r = "",
    i = ex;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = sh(e, 1, !1, null, null, n, !1, r, i)),
    (e[In] = t.current),
    ua(e.nodeType === 8 ? e.parentNode : e),
    new ch(t)
  );
};
Et.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(_(188))
      : ((e = Object.keys(e).join(",")), Error(_(268, e)));
  return (e = x0(t)), (e = e === null ? null : e.stateNode), e;
};
Et.flushSync = function (e) {
  return Kr(e);
};
Et.hydrate = function (e, t, n) {
  if (!jl(t)) throw Error(_(200));
  return Xl(null, e, t, !0, n);
};
Et.hydrateRoot = function (e, t, n) {
  if (!uh(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    a = ex;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Jb(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[In] = t.current),
    ua(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ul(t);
};
Et.render = function (e, t, n) {
  if (!jl(t)) throw Error(_(200));
  return Xl(null, e, t, !1, n);
};
Et.unmountComponentAtNode = function (e) {
  if (!jl(e)) throw Error(_(40));
  return (
    !!e._reactRootContainer &&
    (Kr(function () {
      Xl(null, null, e, !1, function () {
        (e._reactRootContainer = null), (e[In] = null);
      });
    }),
    !0)
  );
};
Et.unstable_batchedUpdates = rh;
Et.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!jl(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Xl(e, t, n, !1, r);
};
Et.version = "18.2.0-next-9e3b772b8-20220608";
function tx() {
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function"
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tx);
    } catch (e) {
      console.error(e);
    }
}
tx();
var Rt = Et,
  nx = Rt,
  $P = Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  WP = Rt.createPortal,
  UP = Rt.createRoot,
  jP = Rt.findDOMNode,
  XP = Rt.flushSync,
  GP = Rt.hydrate,
  YP = Rt.hydrateRoot,
  KP = Rt.render,
  qP = Rt.unmountComponentAtNode,
  ZP = Rt.unstable_batchedUpdates,
  QP = Rt.unstable_renderSubtreeIntoContainer,
  JP = Rt.version;
var t_ = tn({
    "../../../node_modules/hsluv/hsluv.js"(e, t) {
      var n = n || {};
      (n.Geometry = function () {}),
        (n.Geometry.intersectLineLine = function (i, o) {
          var a = (i.intercept - o.intercept) / (o.slope - i.slope),
            s = i.slope * a + i.intercept;
          return { x: a, y: s };
        }),
        (n.Geometry.distanceFromOrigin = function (i) {
          return Math.sqrt(Math.pow(i.x, 2) + Math.pow(i.y, 2));
        }),
        (n.Geometry.distanceLineFromOrigin = function (i) {
          return Math.abs(i.intercept) / Math.sqrt(Math.pow(i.slope, 2) + 1);
        }),
        (n.Geometry.perpendicularThroughPoint = function (i, o) {
          var a = -1 / i.slope,
            s = o.y - a * o.x;
          return { slope: a, intercept: s };
        }),
        (n.Geometry.angleFromOrigin = function (i) {
          return Math.atan2(i.y, i.x);
        }),
        (n.Geometry.normalizeAngle = function (i) {
          var o = 2 * Math.PI;
          return ((i % o) + o) % o;
        }),
        (n.Geometry.lengthOfRayUntilIntersect = function (i, o) {
          return o.intercept / (Math.sin(i) - o.slope * Math.cos(i));
        }),
        (n.Hsluv = function () {}),
        (n.Hsluv.getBounds = function (i) {
          for (
            var o = [],
              a = Math.pow(i + 16, 3) / 1560896,
              s = a > n.Hsluv.epsilon ? a : i / n.Hsluv.kappa,
              l = 0;
            l < 3;

          )
            for (
              var c = l++,
                u = n.Hsluv.m[c][0],
                f = n.Hsluv.m[c][1],
                d = n.Hsluv.m[c][2],
                p = 0;
              p < 2;

            ) {
              var y = p++,
                b = (284517 * u - 94839 * d) * s,
                S =
                  (838422 * d + 769860 * f + 731718 * u) * i * s -
                  769860 * y * i,
                h = (632260 * d - 126452 * f) * s + 126452 * y;
              o.push({ slope: b / h, intercept: S / h });
            }
          return o;
        }),
        (n.Hsluv.maxSafeChromaForL = function (i) {
          for (var o = n.Hsluv.getBounds(i), a = 1 / 0, s = 0; s < o.length; ) {
            var l = o[s];
            ++s;
            var c = n.Geometry.distanceLineFromOrigin(l);
            a = Math.min(a, c);
          }
          return a;
        }),
        (n.Hsluv.maxChromaForLH = function (i, o) {
          for (
            var a = (o / 360) * Math.PI * 2,
              s = n.Hsluv.getBounds(i),
              l = 1 / 0,
              c = 0;
            c < s.length;

          ) {
            var u = s[c];
            ++c;
            var f = n.Geometry.lengthOfRayUntilIntersect(a, u);
            f >= 0 && (l = Math.min(l, f));
          }
          return l;
        }),
        (n.Hsluv.dotProduct = function (i, o) {
          for (var a = 0, s = 0, l = i.length; s < l; ) {
            var c = s++;
            a += i[c] * o[c];
          }
          return a;
        }),
        (n.Hsluv.fromLinear = function (i) {
          return i <= 0.0031308
            ? 12.92 * i
            : 1.055 * Math.pow(i, 0.4166666666666667) - 0.055;
        }),
        (n.Hsluv.toLinear = function (i) {
          return i > 0.04045 ? Math.pow((i + 0.055) / 1.055, 2.4) : i / 12.92;
        }),
        (n.Hsluv.xyzToRgb = function (i) {
          return [
            n.Hsluv.fromLinear(n.Hsluv.dotProduct(n.Hsluv.m[0], i)),
            n.Hsluv.fromLinear(n.Hsluv.dotProduct(n.Hsluv.m[1], i)),
            n.Hsluv.fromLinear(n.Hsluv.dotProduct(n.Hsluv.m[2], i)),
          ];
        }),
        (n.Hsluv.rgbToXyz = function (i) {
          var o = [
            n.Hsluv.toLinear(i[0]),
            n.Hsluv.toLinear(i[1]),
            n.Hsluv.toLinear(i[2]),
          ];
          return [
            n.Hsluv.dotProduct(n.Hsluv.minv[0], o),
            n.Hsluv.dotProduct(n.Hsluv.minv[1], o),
            n.Hsluv.dotProduct(n.Hsluv.minv[2], o),
          ];
        }),
        (n.Hsluv.yToL = function (i) {
          return i <= n.Hsluv.epsilon
            ? (i / n.Hsluv.refY) * n.Hsluv.kappa
            : 116 * Math.pow(i / n.Hsluv.refY, 0.3333333333333333) - 16;
        }),
        (n.Hsluv.lToY = function (i) {
          return i <= 8
            ? (n.Hsluv.refY * i) / n.Hsluv.kappa
            : n.Hsluv.refY * Math.pow((i + 16) / 116, 3);
        }),
        (n.Hsluv.xyzToLuv = function (i) {
          var o = i[0],
            a = i[1],
            s = i[2],
            l = o + 15 * a + 3 * s,
            c = 4 * o,
            u = 9 * a;
          l != 0 ? ((c /= l), (u /= l)) : ((c = NaN), (u = NaN));
          var f = n.Hsluv.yToL(a);
          if (f == 0) return [0, 0, 0];
          var d = 13 * f * (c - n.Hsluv.refU),
            p = 13 * f * (u - n.Hsluv.refV);
          return [f, d, p];
        }),
        (n.Hsluv.luvToXyz = function (i) {
          var o = i[0],
            a = i[1],
            s = i[2];
          if (o == 0) return [0, 0, 0];
          var l = a / (13 * o) + n.Hsluv.refU,
            c = s / (13 * o) + n.Hsluv.refV,
            u = n.Hsluv.lToY(o),
            f = 0 - (9 * u * l) / ((l - 4) * c - l * c),
            d = (9 * u - 15 * c * u - c * f) / (3 * c);
          return [f, u, d];
        }),
        (n.Hsluv.luvToLch = function (i) {
          var o = i[0],
            a = i[1],
            s = i[2],
            l = Math.sqrt(a * a + s * s),
            c;
          if (l < 1e-8) c = 0;
          else {
            var u = Math.atan2(s, a);
            (c = (u * 180) / Math.PI), c < 0 && (c = 360 + c);
          }
          return [o, l, c];
        }),
        (n.Hsluv.lchToLuv = function (i) {
          var o = i[0],
            a = i[1],
            s = i[2],
            l = (s / 360) * 2 * Math.PI,
            c = Math.cos(l) * a,
            u = Math.sin(l) * a;
          return [o, c, u];
        }),
        (n.Hsluv.hsluvToLch = function (i) {
          var o = i[0],
            a = i[1],
            s = i[2];
          if (s > 99.9999999) return [100, 0, o];
          if (s < 1e-8) return [0, 0, o];
          var l = n.Hsluv.maxChromaForLH(s, o),
            c = (l / 100) * a;
          return [s, c, o];
        }),
        (n.Hsluv.lchToHsluv = function (i) {
          var o = i[0],
            a = i[1],
            s = i[2];
          if (o > 99.9999999) return [s, 0, 100];
          if (o < 1e-8) return [s, 0, 0];
          var l = n.Hsluv.maxChromaForLH(o, s),
            c = (a / l) * 100;
          return [s, c, o];
        }),
        (n.Hsluv.hpluvToLch = function (i) {
          var o = i[0],
            a = i[1],
            s = i[2];
          if (s > 99.9999999) return [100, 0, o];
          if (s < 1e-8) return [0, 0, o];
          var l = n.Hsluv.maxSafeChromaForL(s),
            c = (l / 100) * a;
          return [s, c, o];
        }),
        (n.Hsluv.lchToHpluv = function (i) {
          var o = i[0],
            a = i[1],
            s = i[2];
          if (o > 99.9999999) return [s, 0, 100];
          if (o < 1e-8) return [s, 0, 0];
          var l = n.Hsluv.maxSafeChromaForL(o),
            c = (a / l) * 100;
          return [s, c, o];
        }),
        (n.Hsluv.rgbToHex = function (i) {
          for (var o = "#", a = 0; a < 3; ) {
            var s = a++,
              l = i[s],
              c = Math.round(l * 255),
              u = c % 16,
              f = ((c - u) / 16) | 0;
            o += n.Hsluv.hexChars.charAt(f) + n.Hsluv.hexChars.charAt(u);
          }
          return o;
        }),
        (n.Hsluv.hexToRgb = function (i) {
          i = i.toLowerCase();
          for (var o = [], a = 0; a < 3; ) {
            var s = a++,
              l = n.Hsluv.hexChars.indexOf(i.charAt(s * 2 + 1)),
              c = n.Hsluv.hexChars.indexOf(i.charAt(s * 2 + 2)),
              u = l * 16 + c;
            o.push(u / 255);
          }
          return o;
        }),
        (n.Hsluv.lchToRgb = function (i) {
          return n.Hsluv.xyzToRgb(n.Hsluv.luvToXyz(n.Hsluv.lchToLuv(i)));
        }),
        (n.Hsluv.rgbToLch = function (i) {
          return n.Hsluv.luvToLch(n.Hsluv.xyzToLuv(n.Hsluv.rgbToXyz(i)));
        }),
        (n.Hsluv.hsluvToRgb = function (i) {
          return n.Hsluv.lchToRgb(n.Hsluv.hsluvToLch(i));
        }),
        (n.Hsluv.rgbToHsluv = function (i) {
          return n.Hsluv.lchToHsluv(n.Hsluv.rgbToLch(i));
        }),
        (n.Hsluv.hpluvToRgb = function (i) {
          return n.Hsluv.lchToRgb(n.Hsluv.hpluvToLch(i));
        }),
        (n.Hsluv.rgbToHpluv = function (i) {
          return n.Hsluv.lchToHpluv(n.Hsluv.rgbToLch(i));
        }),
        (n.Hsluv.hsluvToHex = function (i) {
          return n.Hsluv.rgbToHex(n.Hsluv.hsluvToRgb(i));
        }),
        (n.Hsluv.hpluvToHex = function (i) {
          return n.Hsluv.rgbToHex(n.Hsluv.hpluvToRgb(i));
        }),
        (n.Hsluv.hexToHsluv = function (i) {
          return n.Hsluv.rgbToHsluv(n.Hsluv.hexToRgb(i));
        }),
        (n.Hsluv.hexToHpluv = function (i) {
          return n.Hsluv.rgbToHpluv(n.Hsluv.hexToRgb(i));
        }),
        (n.Hsluv.m = [
          [3.240969941904521, -1.537383177570093, -0.498610760293],
          [-0.96924363628087, 1.87596750150772, 0.041555057407175],
          [0.055630079696993, -0.20397695888897, 1.056971514242878],
        ]),
        (n.Hsluv.minv = [
          [0.41239079926595, 0.35758433938387, 0.18048078840183],
          [0.21263900587151, 0.71516867876775, 0.072192315360733],
          [0.019330818715591, 0.11919477979462, 0.95053215224966],
        ]),
        (n.Hsluv.refY = 1),
        (n.Hsluv.refU = 0.19783000664283),
        (n.Hsluv.refV = 0.46831999493879),
        (n.Hsluv.kappa = 903.2962962),
        (n.Hsluv.epsilon = 0.0088564516),
        (n.Hsluv.hexChars = "0123456789abcdef");
      var r = {
        hsluvToRgb: n.Hsluv.hsluvToRgb,
        rgbToHsluv: n.Hsluv.rgbToHsluv,
        hpluvToRgb: n.Hsluv.hpluvToRgb,
        rgbToHpluv: n.Hsluv.rgbToHpluv,
        hsluvToHex: n.Hsluv.hsluvToHex,
        hexToHsluv: n.Hsluv.hexToHsluv,
        hpluvToHex: n.Hsluv.hpluvToHex,
        hexToHpluv: n.Hsluv.hexToHpluv,
        lchToHpluv: n.Hsluv.lchToHpluv,
        hpluvToLch: n.Hsluv.hpluvToLch,
        lchToHsluv: n.Hsluv.lchToHsluv,
        hsluvToLch: n.Hsluv.hsluvToLch,
        lchToLuv: n.Hsluv.lchToLuv,
        luvToLch: n.Hsluv.luvToLch,
        xyzToLuv: n.Hsluv.xyzToLuv,
        luvToXyz: n.Hsluv.luvToXyz,
        xyzToRgb: n.Hsluv.xyzToRgb,
        rgbToXyz: n.Hsluv.rgbToXyz,
        lchToRgb: n.Hsluv.lchToRgb,
        rgbToLch: n.Hsluv.rgbToLch,
      };
      t.exports = r;
    },
  }),
  n_ = tn({
    "../../../node_modules/eventemitter3/index.js"(e, t) {
      "use strict";
      var n = Object.prototype.hasOwnProperty,
        r = "~";
      function i() {}
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
      function o(c, u, f) {
        (this.fn = c), (this.context = u), (this.once = f || !1);
      }
      function a(c, u, f, d, p) {
        if (typeof f != "function")
          throw new TypeError("The listener must be a function");
        var y = new o(f, d || c, p),
          b = r ? r + u : u;
        return (
          c._events[b]
            ? c._events[b].fn
              ? (c._events[b] = [c._events[b], y])
              : c._events[b].push(y)
            : ((c._events[b] = y), c._eventsCount++),
          c
        );
      }
      function s(c, u) {
        --c._eventsCount === 0 ? (c._events = new i()) : delete c._events[u];
      }
      function l() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      (l.prototype.eventNames = function () {
        var u = [],
          f,
          d;
        if (this._eventsCount === 0) return u;
        for (d in (f = this._events))
          n.call(f, d) && u.push(r ? d.slice(1) : d);
        return Object.getOwnPropertySymbols
          ? u.concat(Object.getOwnPropertySymbols(f))
          : u;
      }),
        (l.prototype.listeners = function (u) {
          var f = r ? r + u : u,
            d = this._events[f];
          if (!d) return [];
          if (d.fn) return [d.fn];
          for (var p = 0, y = d.length, b = new Array(y); p < y; p++)
            b[p] = d[p].fn;
          return b;
        }),
        (l.prototype.listenerCount = function (u) {
          var f = r ? r + u : u,
            d = this._events[f];
          return d ? (d.fn ? 1 : d.length) : 0;
        }),
        (l.prototype.emit = function (u, f, d, p, y, b) {
          var S = r ? r + u : u;
          if (!this._events[S]) return !1;
          var h = this._events[S],
            v = arguments.length,
            g,
            x;
          if (h.fn) {
            switch ((h.once && this.removeListener(u, h.fn, void 0, !0), v)) {
              case 1:
                return h.fn.call(h.context), !0;
              case 2:
                return h.fn.call(h.context, f), !0;
              case 3:
                return h.fn.call(h.context, f, d), !0;
              case 4:
                return h.fn.call(h.context, f, d, p), !0;
              case 5:
                return h.fn.call(h.context, f, d, p, y), !0;
              case 6:
                return h.fn.call(h.context, f, d, p, y, b), !0;
            }
            for (x = 1, g = new Array(v - 1); x < v; x++)
              g[x - 1] = arguments[x];
            h.fn.apply(h.context, g);
          } else {
            var k = h.length,
              w;
            for (x = 0; x < k; x++)
              switch (
                (h[x].once && this.removeListener(u, h[x].fn, void 0, !0), v)
              ) {
                case 1:
                  h[x].fn.call(h[x].context);
                  break;
                case 2:
                  h[x].fn.call(h[x].context, f);
                  break;
                case 3:
                  h[x].fn.call(h[x].context, f, d);
                  break;
                case 4:
                  h[x].fn.call(h[x].context, f, d, p);
                  break;
                default:
                  if (!g)
                    for (w = 1, g = new Array(v - 1); w < v; w++)
                      g[w - 1] = arguments[w];
                  h[x].fn.apply(h[x].context, g);
              }
          }
          return !0;
        }),
        (l.prototype.on = function (u, f, d) {
          return a(this, u, f, d, !1);
        }),
        (l.prototype.once = function (u, f, d) {
          return a(this, u, f, d, !0);
        }),
        (l.prototype.removeListener = function (u, f, d, p) {
          var y = r ? r + u : u;
          if (!this._events[y]) return this;
          if (!f) return s(this, y), this;
          var b = this._events[y];
          if (b.fn)
            b.fn === f &&
              (!p || b.once) &&
              (!d || b.context === d) &&
              s(this, y);
          else {
            for (var S = 0, h = [], v = b.length; S < v; S++)
              (b[S].fn !== f ||
                (p && !b[S].once) ||
                (d && b[S].context !== d)) &&
                h.push(b[S]);
            h.length
              ? (this._events[y] = h.length === 1 ? h[0] : h)
              : s(this, y);
          }
          return this;
        }),
        (l.prototype.removeAllListeners = function (u) {
          var f;
          return (
            u
              ? ((f = r ? r + u : u), this._events[f] && s(this, f))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (l.prototype.off = l.prototype.removeListener),
        (l.prototype.addListener = l.prototype.on),
        (l.prefixed = r),
        (l.EventEmitter = l),
        typeof t < "u" && (t.exports = l);
    },
  }),
  Hh = tn({
    "../../../node_modules/process/browser.js"(e, t) {
      var n = (t.exports = {}),
        r,
        i;
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      (function () {
        try {
          typeof setTimeout == "function" ? (r = setTimeout) : (r = o);
        } catch {
          r = o;
        }
        try {
          typeof clearTimeout == "function" ? (i = clearTimeout) : (i = a);
        } catch {
          i = a;
        }
      })();
      function s(h) {
        if (r === setTimeout) return setTimeout(h, 0);
        if ((r === o || !r) && setTimeout)
          return (r = setTimeout), setTimeout(h, 0);
        try {
          return r(h, 0);
        } catch {
          try {
            return r.call(null, h, 0);
          } catch {
            return r.call(this, h, 0);
          }
        }
      }
      function l(h) {
        if (i === clearTimeout) return clearTimeout(h);
        if ((i === a || !i) && clearTimeout)
          return (i = clearTimeout), clearTimeout(h);
        try {
          return i(h);
        } catch {
          try {
            return i.call(null, h);
          } catch {
            return i.call(this, h);
          }
        }
      }
      var c = [],
        u = !1,
        f,
        d = -1;
      function p() {
        !u ||
          !f ||
          ((u = !1), f.length ? (c = f.concat(c)) : (d = -1), c.length && y());
      }
      function y() {
        if (!u) {
          var h = s(p);
          u = !0;
          for (var v = c.length; v; ) {
            for (f = c, c = []; ++d < v; ) f && f[d].run();
            (d = -1), (v = c.length);
          }
          (f = null), (u = !1), l(h);
        }
      }
      n.nextTick = function (h) {
        var v = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var g = 1; g < arguments.length; g++) v[g - 1] = arguments[g];
        c.push(new b(h, v)), c.length === 1 && !u && s(y);
      };
      function b(h, v) {
        (this.fun = h), (this.array = v);
      }
      (b.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
        (n.title = "browser"),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ""),
        (n.versions = {});
      function S() {}
      (n.on = S),
        (n.addListener = S),
        (n.once = S),
        (n.off = S),
        (n.removeListener = S),
        (n.removeAllListeners = S),
        (n.emit = S),
        (n.prependListener = S),
        (n.prependOnceListener = S),
        (n.listeners = function (h) {
          return [];
        }),
        (n.binding = function (h) {
          throw new Error("process.binding is not supported");
        }),
        (n.cwd = function () {
          return "/";
        }),
        (n.chdir = function (h) {
          throw new Error("process.chdir is not supported");
        }),
        (n.umask = function () {
          return 0;
        });
    },
  }),
  r_ = tn({
    "../../../node_modules/react-is/cjs/react-is.production.min.js"(e) {
      "use strict";
      var t = typeof Symbol == "function" && Symbol.for,
        n = t ? Symbol.for("react.element") : 60103,
        r = t ? Symbol.for("react.portal") : 60106,
        i = t ? Symbol.for("react.fragment") : 60107,
        o = t ? Symbol.for("react.strict_mode") : 60108,
        a = t ? Symbol.for("react.profiler") : 60114,
        s = t ? Symbol.for("react.provider") : 60109,
        l = t ? Symbol.for("react.context") : 60110,
        c = t ? Symbol.for("react.async_mode") : 60111,
        u = t ? Symbol.for("react.concurrent_mode") : 60111,
        f = t ? Symbol.for("react.forward_ref") : 60112,
        d = t ? Symbol.for("react.suspense") : 60113,
        p = t ? Symbol.for("react.suspense_list") : 60120,
        y = t ? Symbol.for("react.memo") : 60115,
        b = t ? Symbol.for("react.lazy") : 60116,
        S = t ? Symbol.for("react.block") : 60121,
        h = t ? Symbol.for("react.fundamental") : 60117,
        v = t ? Symbol.for("react.responder") : 60118,
        g = t ? Symbol.for("react.scope") : 60119;
      function x(w) {
        if (typeof w == "object" && w !== null) {
          var E = w.$$typeof;
          switch (E) {
            case n:
              switch (((w = w.type), w)) {
                case c:
                case u:
                case i:
                case a:
                case o:
                case d:
                  return w;
                default:
                  switch (((w = w && w.$$typeof), w)) {
                    case l:
                    case f:
                    case b:
                    case y:
                    case s:
                      return w;
                    default:
                      return E;
                  }
              }
            case r:
              return E;
          }
        }
      }
      function k(w) {
        return x(w) === u;
      }
      (e.AsyncMode = c),
        (e.ConcurrentMode = u),
        (e.ContextConsumer = l),
        (e.ContextProvider = s),
        (e.Element = n),
        (e.ForwardRef = f),
        (e.Fragment = i),
        (e.Lazy = b),
        (e.Memo = y),
        (e.Portal = r),
        (e.Profiler = a),
        (e.StrictMode = o),
        (e.Suspense = d),
        (e.isAsyncMode = function (w) {
          return k(w) || x(w) === c;
        }),
        (e.isConcurrentMode = k),
        (e.isContextConsumer = function (w) {
          return x(w) === l;
        }),
        (e.isContextProvider = function (w) {
          return x(w) === s;
        }),
        (e.isElement = function (w) {
          return typeof w == "object" && w !== null && w.$$typeof === n;
        }),
        (e.isForwardRef = function (w) {
          return x(w) === f;
        }),
        (e.isFragment = function (w) {
          return x(w) === i;
        }),
        (e.isLazy = function (w) {
          return x(w) === b;
        }),
        (e.isMemo = function (w) {
          return x(w) === y;
        }),
        (e.isPortal = function (w) {
          return x(w) === r;
        }),
        (e.isProfiler = function (w) {
          return x(w) === a;
        }),
        (e.isStrictMode = function (w) {
          return x(w) === o;
        }),
        (e.isSuspense = function (w) {
          return x(w) === d;
        }),
        (e.isValidElementType = function (w) {
          return (
            typeof w == "string" ||
            typeof w == "function" ||
            w === i ||
            w === u ||
            w === a ||
            w === o ||
            w === d ||
            w === p ||
            (typeof w == "object" &&
              w !== null &&
              (w.$$typeof === b ||
                w.$$typeof === y ||
                w.$$typeof === s ||
                w.$$typeof === l ||
                w.$$typeof === f ||
                w.$$typeof === h ||
                w.$$typeof === v ||
                w.$$typeof === g ||
                w.$$typeof === S))
          );
        }),
        (e.typeOf = x);
    },
  }),
  i_ = tn({
    "../../../node_modules/react-is/index.js"(e, t) {
      "use strict";
      t.exports = r_();
    },
  }),
  xc = tn({
    "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(
      e,
      t
    ) {
      "use strict";
      var n = i_(),
        r = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        o = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      (s[n.ForwardRef] = o), (s[n.Memo] = a);
      function l(S) {
        return n.isMemo(S) ? a : s[S.$$typeof] || r;
      }
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        y = Object.prototype;
      function b(S, h, v) {
        if (typeof h != "string") {
          if (y) {
            var g = p(h);
            g && g !== y && b(S, g, v);
          }
          var x = u(h);
          f && (x = x.concat(f(h)));
          for (var k = l(S), w = l(h), E = 0; E < x.length; ++E) {
            var C = x[E];
            if (!i[C] && !(v && v[C]) && !(w && w[C]) && !(k && k[C])) {
              var T = d(h, C);
              try {
                c(S, C, T);
              } catch {}
            }
          }
        }
        return S;
      }
      t.exports = b;
    },
  }),
  o_ = tn({
    "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(
      e,
      t
    ) {
      (function () {
        function n(h, v) {
          document.addEventListener
            ? h.addEventListener("scroll", v, !1)
            : h.attachEvent("scroll", v);
        }
        function r(h) {
          document.body
            ? h()
            : document.addEventListener
            ? document.addEventListener("DOMContentLoaded", function v() {
                document.removeEventListener("DOMContentLoaded", v), h();
              })
            : document.attachEvent("onreadystatechange", function v() {
                (document.readyState == "interactive" ||
                  document.readyState == "complete") &&
                  (document.detachEvent("onreadystatechange", v), h());
              });
        }
        function i(h) {
          (this.a = document.createElement("div")),
            this.a.setAttribute("aria-hidden", "true"),
            this.a.appendChild(document.createTextNode(h)),
            (this.b = document.createElement("span")),
            (this.c = document.createElement("span")),
            (this.h = document.createElement("span")),
            (this.f = document.createElement("span")),
            (this.g = -1),
            (this.b.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.c.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.f.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.h.style.cssText =
              "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
            this.b.appendChild(this.h),
            this.c.appendChild(this.f),
            this.a.appendChild(this.b),
            this.a.appendChild(this.c);
        }
        function o(h, v) {
          h.a.style.cssText =
            "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
            v +
            ";";
        }
        function a(h) {
          var v = h.a.offsetWidth,
            g = v + 100;
          return (
            (h.f.style.width = g + "px"),
            (h.c.scrollLeft = g),
            (h.b.scrollLeft = h.b.scrollWidth + 100),
            h.g !== v ? ((h.g = v), !0) : !1
          );
        }
        function s(h, v) {
          function g() {
            var k = x;
            a(k) && k.a.parentNode && v(k.g);
          }
          var x = h;
          n(h.b, g), n(h.c, g), a(h);
        }
        function l(h, v) {
          var g = v || {};
          (this.family = h),
            (this.style = g.style || "normal"),
            (this.weight = g.weight || "normal"),
            (this.stretch = g.stretch || "normal");
        }
        var c = null,
          u = null,
          f = null,
          d = null;
        function p() {
          if (u === null)
            if (y() && /Apple/.test(F.navigator.vendor)) {
              var h = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                F.navigator.userAgent
              );
              u = !!h && 603 > parseInt(h[1], 10);
            } else u = !1;
          return u;
        }
        function y() {
          return d === null && (d = !!document.fonts), d;
        }
        function b() {
          if (f === null) {
            var h = document.createElement("div");
            try {
              h.style.font = "condensed 100px sans-serif";
            } catch {}
            f = h.style.font !== "";
          }
          return f;
        }
        function S(h, v) {
          return [h.style, h.weight, b() ? h.stretch : "", "100px", v].join(
            " "
          );
        }
        (l.prototype.load = function (h, v) {
          var g = this,
            x = h || "BESbswy",
            k = 0,
            w = v || 3e3,
            E = new Date().getTime();
          return new Promise(function (C, T) {
            if (y() && !p()) {
              var R = new Promise(function (L, z) {
                  function O() {
                    new Date().getTime() - E >= w
                      ? z(Error("" + w + "ms timeout exceeded"))
                      : document.fonts
                          .load(S(g, '"' + g.family + '"'), x)
                          .then(function (V) {
                            1 <= V.length ? L() : setTimeout(O, 25);
                          }, z);
                  }
                  O();
                }),
                D = new Promise(function (L, z) {
                  k = setTimeout(function () {
                    z(Error("" + w + "ms timeout exceeded"));
                  }, w);
                });
              Promise.race([D, R]).then(function () {
                clearTimeout(k), C(g);
              }, T);
            } else
              r(function () {
                function L() {
                  var Z;
                  (Z =
                    (P != -1 && Y != -1) ||
                    (P != -1 && G != -1) ||
                    (Y != -1 && G != -1)) &&
                    ((Z = P != Y && P != G && Y != G) ||
                      (c === null &&
                        ((Z = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                          F.navigator.userAgent
                        )),
                        (c =
                          !!Z &&
                          (536 > parseInt(Z[1], 10) ||
                            (parseInt(Z[1], 10) === 536 &&
                              11 >= parseInt(Z[2], 10))))),
                      (Z =
                        c &&
                        ((P == K && Y == K && G == K) ||
                          (P == N && Y == N && G == N) ||
                          (P == Q && Y == Q && G == Q)))),
                    (Z = !Z)),
                    Z &&
                      (ne.parentNode && ne.parentNode.removeChild(ne),
                      clearTimeout(k),
                      C(g));
                }
                function z() {
                  if (new Date().getTime() - E >= w)
                    ne.parentNode && ne.parentNode.removeChild(ne),
                      T(Error("" + w + "ms timeout exceeded"));
                  else {
                    var Z = document.hidden;
                    (Z === !0 || Z === void 0) &&
                      ((P = O.a.offsetWidth),
                      (Y = V.a.offsetWidth),
                      (G = H.a.offsetWidth),
                      L()),
                      (k = setTimeout(z, 50));
                  }
                }
                var O = new i(x),
                  V = new i(x),
                  H = new i(x),
                  P = -1,
                  Y = -1,
                  G = -1,
                  K = -1,
                  N = -1,
                  Q = -1,
                  ne = document.createElement("div");
                (ne.dir = "ltr"),
                  o(O, S(g, "sans-serif")),
                  o(V, S(g, "serif")),
                  o(H, S(g, "monospace")),
                  ne.appendChild(O.a),
                  ne.appendChild(V.a),
                  ne.appendChild(H.a),
                  document.body.appendChild(ne),
                  (K = O.a.offsetWidth),
                  (N = V.a.offsetWidth),
                  (Q = H.a.offsetWidth),
                  z(),
                  s(O, function (Z) {
                    (P = Z), L();
                  }),
                  o(O, S(g, '"' + g.family + '",sans-serif')),
                  s(V, function (Z) {
                    (Y = Z), L();
                  }),
                  o(V, S(g, '"' + g.family + '",serif')),
                  s(H, function (Z) {
                    (G = Z), L();
                  }),
                  o(H, S(g, '"' + g.family + '",monospace'));
              });
          });
        }),
          typeof t == "object"
            ? (t.exports = l)
            : ((F.FontFaceObserver = l),
              (F.FontFaceObserver.prototype.load = l.prototype.load));
      })();
    },
  });
function _h(e, t = {}) {
  return m.isValidElement(e)
    ? m.cloneElement(e, { style: t })
    : m.createElement(e, { style: t });
}
var a_ = class extends Error {},
  s_ = class extends ke {
    constructor(e) {
      super(e),
        (this.state = { error: void 0, forceUpdateKey: e.forceUpdateKey });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      if (e.forceUpdateKey !== t.forceUpdateKey) {
        let n = { forceUpdateKey: e.forceUpdateKey };
        return t.error && (n.error = void 0), n;
      }
      return null;
    }
    render() {
      if (this.state.error === void 0) return this.props.children;
      if (!(this.state.error instanceof a_)) throw this.state.error;
      let { notFoundPage: e, defaultPageStyle: t } = this.props;
      if (!e) throw this.state.error;
      return _h(e, t);
    }
  };
function C1(e) {
  return m.useCallback((t) => e[t], [e]);
}
var Nh = m.createContext({});
function l_({ api: e, children: t }) {
  return m.createElement(Nh.Provider, { value: e }, t);
}
function Sc() {
  return m.useContext(Nh);
}
function c_({ routes: e, children: t }) {
  let n = C1(e);
  return m.createElement(Nh.Provider, { value: { getRoute: n } }, t);
}
var u_ = ":([a-zA-Z][a-zA-Z0-9_]*)",
  to = new RegExp(u_, "g");
function E1(e, t) {
  return e.replace(to, (n, r) => {
    let i = t[r];
    return typeof i != "string" || i.length === 0 ? n : encodeURIComponent(i);
  });
}
function T1(e, t) {
  if (!e.startsWith("/") || !t.startsWith("/"))
    throw new Error("from/to paths are expected to be absolute");
  let [n] = rx(e),
    [r, i] = rx(t),
    o = f_(n, r);
  return (
    o === "" && (o = "."),
    !o.startsWith(".") && !o.startsWith("/") && (o = "./" + o),
    o + "/" + i
  );
}
function rx(e) {
  let t = e.lastIndexOf("/");
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
var fh = 46,
  Ki = 47,
  yr = (e, t) => e.charCodeAt(t),
  ix = (e, t) => e.lastIndexOf(t),
  Zi = (e, t, n) => e.slice(t, n);
function f_(e, t) {
  if (e === t || ((e = "/" + ax(e)), (t = "/" + ax(t)), e === t)) return "";
  let n = 1,
    r = e.length,
    i = r - n,
    o = 1,
    a = t.length - o,
    s = i < a ? i : a,
    l = -1,
    c = 0;
  for (; c < s; c++) {
    let f = yr(e, n + c);
    if (f !== yr(t, o + c)) break;
    f === Ki && (l = c);
  }
  if (c === s)
    if (a > s) {
      if (yr(t, o + c) === Ki) return Zi(t, o + c + 1);
      if (c === 0) return Zi(t, o + c);
    } else i > s && (yr(e, n + c) === Ki ? (l = c) : c === 0 && (l = 0));
  let u = "";
  for (c = n + l + 1; c <= r; ++c)
    (c === r || yr(e, c) === Ki) && (u += u.length === 0 ? ".." : "/..");
  return `${u}${Zi(t, o + l)}`;
}
var d_ = !1,
  Gl = "/",
  ox = (e) => e === Ki;
function ax(e) {
  let t = "",
    n = 0,
    r = -1,
    i = 0,
    o = 0;
  for (let a = 0; a <= e.length; ++a) {
    if (a < e.length) o = yr(e, a);
    else {
      if (ox(o)) break;
      o = Ki;
    }
    if (ox(o)) {
      if (!(r === a - 1 || i === 1))
        if (i === 2) {
          if (
            t.length < 2 ||
            n !== 2 ||
            yr(t, t.length - 1) !== fh ||
            yr(t, t.length - 2) !== fh
          ) {
            if (t.length > 2) {
              let s = ix(t, Gl);
              s === -1
                ? ((t = ""), (n = 0))
                : ((t = Zi(t, 0, s)), (n = t.length - 1 - ix(t, Gl))),
                (r = a),
                (i = 0);
              continue;
            } else if (t.length !== 0) {
              (t = ""), (n = 0), (r = a), (i = 0);
              continue;
            }
          }
          d_ && ((t += t.length > 0 ? `${Gl}..` : ".."), (n = 2));
        } else
          t.length > 0
            ? (t += `${Gl}${Zi(e, r + 1, a)}`)
            : (t = Zi(e, r + 1, a)),
            (n = a - r - 1);
      (r = a), (i = 0);
    } else o === fh && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function fc(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Ia(e) {
  return typeof e == "string";
}
var h_ = "preload";
function R1(e) {
  return typeof e == "object" && e !== null && !m.isValidElement(e) && h_ in e;
}
function S4(e) {
  let t = m.lazy(e),
    n,
    r,
    i = m.forwardRef(function (a, s) {
      return m.createElement(r ?? t, Object.assign(s ? { ref: s } : {}, a));
    });
  return (
    (i.preload = () => (n || (n = e().then((o) => ((r = o.default), r))), n)), i
  );
}
function $h(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function p_(e) {
  return /bot|Mediapartners-Google|Google-PageRenderer|yandex|ia_archiver/i.test(
    e
  );
}
async function m_(e, t, n, r, i, o, a) {
  var s, l, c;
  let u = e,
    f = !1,
    d = { ...o },
    p = Array.from(u.matchAll(to)),
    y = await Promise.all(
      p.map(async (v) => {
        var g;
        let x = v?.[0],
          k = v?.[1];
        if (!x || !k)
          throw new Error(
            "Failed to replace path variables: unexpected regex match group"
          );
        let w = o[k];
        if (!w || !Ia(w))
          throw new Error(`No slug found for path variable ${k}`);
        let E = await ((g = a?.[i]) === null || g === void 0
          ? void 0
          : g.call(a));
        if (!E || !t) return w;
        let C = await E.getRecordIdBySlug(w, t);
        if (!C) return w;
        let T = await E.getSlugByRecordId(C, n);
        if (!T) {
          f = !0;
          let R = await E.getSlugByRecordId(C, r);
          return R && (d[k] = R), R ?? w;
        }
        return (d[k] = T), T;
      })
    ),
    b = 0,
    S = "",
    h = !1;
  for (let v = 0; v < p.length; v++) {
    let g = p[v],
      x = y[v];
    !g ||
      !x ||
      ((S += u.substring(b, g.index)),
      (b =
        ((s = g.index) !== null && s !== void 0 ? s : 0) +
        ((c = (l = g[0]) === null || l === void 0 ? void 0 : l.length) !==
          null && c !== void 0
          ? c
          : 0)),
      (S += y[v]),
      (h = !0));
  }
  return h && (u = S), { path: u, pathVariables: d, isMissingInLocale: f };
}
async function v_({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: o,
}) {
  let { path: a } = r,
    s = { path: a, pathVariables: i, isMissingInLocale: !1 };
  if (!a) return s;
  if (i && r.collectionId)
    try {
      s = await m_(a, e, t, n, r.collectionId, i, o);
    } catch {}
  return t.slug && (s.path = "/" + t.slug + s.path), s;
}
var g_ = { global: void 0, routes: {} },
  I1 = m.createContext(g_);
function C4({ children: e, value: t }) {
  return m.createElement(I1.Provider, { value: t }, e);
}
function y_() {
  return m.useContext(I1);
}
function b_(e, t, { global: n, routes: r }) {
  var i;
  return ((i = r[e]) === null || i === void 0 ? void 0 : i[t]) || n;
}
var dh = 10,
  x_ = 1e4;
function S_(e) {
  let t = dh,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < x_; ) (n = e.next(t)), r.push(n.value), (t += dh);
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(",")})`, duration: t - dh }
  );
}
var On = (e) => `--view-transition-${e}`;
function Fh(e) {
  return [parseFloat(e), e.endsWith("px") ? "px" : "%"];
}
function P1(e) {
  let { innerWidth: t, innerHeight: n } = F,
    [r, i] = Fh(e.x),
    [o, a] = Fh(e.y);
  return {
    x: i === "px" ? r : t * (r / 100),
    y: a === "px" ? o : n * (o / 100),
  };
}
var w_ = {
    makeKeyframe: (e, t, n) => {
      let r = 0;
      return (
        ((n === "exit" &&
          e.angularDirection === "clockwise" &&
          t === "start") ||
          (n === "exit" &&
            e.angularDirection === "counter-clockwise" &&
            t === "end") ||
          (n === "enter" &&
            e.angularDirection === "counter-clockwise" &&
            t === "start") ||
          (n === "enter" &&
            e.angularDirection === "clockwise" &&
            t === "end")) &&
          (r = (e.sweepAngle / 360) * 100),
        `${On("conic-offset")}: ${r}%;`
      );
    },
    makeStyles: (e, t) => {
      let n = `var(${On("conic-offset")})`,
        r =
          (t === "exit" && e.angularDirection === "clockwise") ||
          (t === "enter" && e.angularDirection === "counter-clockwise"),
        i = r ? "transparent" : "black",
        o = r ? "black" : "transparent",
        a = "conic-gradient(from ";
      return (
        (a += `${e.angle}deg at ${e.x} ${e.y}, `),
        (a += `${i} 0%, ${i} ${n}, `),
        (a += `${o} ${n}, ${o} 100%)`),
        `mask-image: ${a}; -webkit-mask-image: ${a};`
      );
    },
    makePropertyRules: () => `
        @property ${On("conic-offset")} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
  },
  k_ = {
    makeKeyframe: (e, t) => {
      let { x: n, y: r } = P1(e);
      return t === "start"
        ? `clip-path: circle(0 at ${n}px ${r}px);`
        : `clip-path: circle(${Math.hypot(
            Math.max(n, F.innerWidth - n),
            Math.max(r, F.innerHeight - r)
          )}px at ${n}px ${r}px);`;
    },
  },
  C_ = {
    makeKeyframe: (e, t) => {
      let { x: n, y: r } = P1(e),
        i = F.innerHeight - r,
        o = F.innerWidth - n;
      return t === "start"
        ? `clip-path: inset(${r}px ${o}px ${i}px ${n}px round ${e.round}px);`
        : "clip-path: inset(0 round 0);";
    },
  },
  E_ = {
    makeKeyframe: (e, t, n) => {
      let [, r] = Fh(e.width),
        i = `0${r}`;
      return (
        ((t === "start" && n === "exit") || (t === "end" && n === "enter")) &&
          (i = e.width),
        `${On("blinds-width")}: ${i};`
      );
    },
    makeStyles: (e, t) => {
      let n = `var(${On("blinds-width")})`,
        r = t === "exit" ? "transparent" : "black",
        i = t === "exit" ? "black" : "transparent",
        o = "repeating-linear-gradient(";
      return (
        (o += e.angle + 90 + "deg, "),
        (o += `${r} 0px, ${r} ${n}, `),
        (o += `${i} ${n}, ${i} ${e.width})`),
        `mask-image: ${o}; -webkit-mask-image: ${o};`
      );
    },
    makePropertyRules: () => `
            @property ${On("blinds-width")} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
  },
  T_ = {
    makeKeyframe: (e, t, n) => {
      let r =
        (t === "start" && n === "exit") || (t === "end" && n === "enter")
          ? 1
          : 0;
      return `${On("wipe-offset")}: ${r};`;
    },
    makeStyles: (e, t) => {
      let n = `var(${On("wipe-offset")})`,
        r = t === "exit" ? "transparent" : "black",
        i = t === "exit" ? "black" : "transparent",
        o = "linear-gradient(";
      return (
        (o += e.angle + 90 + "deg, "),
        (o += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
        (o += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
        `mask-image: ${o}; -webkit-mask-image: ${o};`
      );
    },
    makePropertyRules: () => `
            @property ${On("wipe-offset")} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
  },
  R_ = { circle: k_, conic: w_, inset: C_, blinds: E_, wipe: T_ },
  I_ = {
    opacity: 1,
    x: "0px",
    y: "0px",
    scale: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
  };
function sx(e, t, n, r) {
  var i;
  let o = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (
    e.mask &&
      (o +=
        ((i = r?.makeKeyframe) === null || i === void 0
          ? void 0
          : i.call(r, e.mask, t, n)) || ""),
    o
  );
}
function P_(e) {
  return e ? R_[e] : void 0;
}
function lx(e, { transition: t, ...n }) {
  var r;
  let i = "view-transition-" + e,
    o = { duration: "0s", easing: "linear" };
  if (t.type === "tween")
    (o.duration = t.duration + "s"),
      (o.easing = `cubic-bezier(${t.ease.join(",")})`);
  else if (t.type === "spring") {
    let { easing: c, duration: u } = S_(
      _o({
        keyframes: [0, 1],
        stiffness: t.stiffness,
        damping: t.damping,
        mass: t.mass,
        restDelta: 0.001,
        restSpeed: 1e-4,
      })
    );
    (o.duration = u + "ms"), (o.easing = c);
  }
  let a = P_((r = n?.mask) === null || r === void 0 ? void 0 : r.type),
    s = sx(n, "start", e, a),
    l = sx({ ...I_, mask: n.mask }, "end", e, a);
  return (
    e === "exit" && ([s, l] = [l, s]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ""}

        @keyframes ${i} {
            0% {
                ${s}
            }

            100% {
                ${l}
            }
        }

        ::view-transition-${e === "enter" ? "new" : "old"}(root) {
            animation-name: ${i};
            animation-duration: ${o.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${o.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ""}
        }
    `
  );
}
var _1 = "view-transition-styles",
  __ = {
    x: "0px",
    y: "0px",
    scale: 1,
    opacity: 1,
    rotate3d: !1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
    transition: {
      type: "tween",
      delay: 0,
      duration: 0.2,
      ease: [0.27, 0, 0.51, 1],
      stiffness: 400,
      damping: 30,
      mass: 1,
    },
  };
function F_({ exit: e = __, enter: t }) {
  let n = document.createElement("style");
  n.id = _1;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  (e.mask ||
    t.mask ||
    e.opacity ||
    t.opacity ||
    e.transition.delay ||
    t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += lx("exit", e)),
    (r += lx("enter", t)),
    (n.textContent = r),
    document.head.appendChild(n);
}
function L_() {
  q.render(() => {
    let e = document.getElementById(_1);
    e && document.head.removeChild(e);
  });
}
function M_() {
  return !!document.startViewTransition;
}
function O_(e, t) {
  if (!M_()) return void e();
  F_(t);
  let n = document.startViewTransition(e);
  return (
    Promise.all([n.ready, n.finished])
      .then(L_)
      .catch(() => {}),
    n
  );
}
function F1() {
  let e = y_(),
    t = B(void 0);
  return (
    X(() => {
      t.current && (t.current(), (t.current = void 0));
    }),
    se(
      (n, r, i) => {
        let o = b_(n, r, e);
        if (o) {
          let a = new Promise((l) => {
            t.current = l;
          });
          return O_(async () => {
            i(), await a;
          }, o);
        } else return i();
      },
      [e]
    )
  );
}
function cx(
  e,
  t,
  { currentRoutePath: n, hash: r, pathVariables: i, localeId: o } = {}
) {
  let { path: a } = t;
  if (a)
    try {
      let s = Wh(t, { currentRoutePath: n, hash: r, pathVariables: i });
      L1({ routeId: e, hash: r, pathVariables: i, localeId: o }, s);
    } catch {}
}
function A_(e, t) {
  F.history.replaceState(e, "", t);
}
function L1(e, t) {
  F.history.pushState(e, "", t);
}
function V_({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: r,
}) {
  m.useEffect(() => {
    e || A_({ routeId: t, pathVariables: n, localeId: r });
  }, []);
}
function D_(e, t) {
  let n = F1(),
    r = m.useRef(void 0),
    i = m.useCallback(
      ({ state: a }) => {
        var s, l, c;
        if (!fc(a)) return;
        let { routeId: u, hash: f, pathVariables: d, localeId: p } = a;
        if (!Ia(u)) return;
        let y = () => {
            t(
              u,
              Ia(p) ? p : void 0,
              Ia(f) ? f : void 0,
              fc(d) ? d : void 0,
              !1,
              !0
            );
          },
          b = n(e.current, u, y);
        b
          ? b.updateCallbackDone
              .then(
                (s = r.current) === null || s === void 0 ? void 0 : s.resolve
              )
              .catch(
                (l = r.current) === null || l === void 0 ? void 0 : l.reject
              )
          : (c = r.current) === null || c === void 0 || c.resolve();
      },
      [e, t, n]
    ),
    o = se((a) => {
      a.navigationType === "traverse" &&
        a.intercept({
          async handler() {
            await new Promise((s, l) => {
              r.current = { resolve: s, reject: l };
            });
          },
          scroll: "after-transition",
        });
    }, []);
  m.useEffect(() => {
    var a;
    return (
      F.addEventListener("popstate", i),
      (a = F.navigation) === null ||
        a === void 0 ||
        a.addEventListener("navigate", o),
      () => {
        var s;
        F.removeEventListener("popstate", i),
          (s = F.navigation) === null ||
            s === void 0 ||
            s.removeEventListener("navigate", o);
      }
    );
  }, [i, o]);
}
function B_(e, t, n) {
  let r = $h(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(to, (o, a) => {
    var s;
    return String((s = i[a]) !== null && s !== void 0 ? s : o);
  });
}
function Wh(
  e,
  {
    currentRoutePath: t,
    hash: n,
    pathVariables: r,
    hashVariables: i,
    relative: o = !0,
  }
) {
  var a;
  let s = t ?? "/",
    c = (a = e?.path) !== null && a !== void 0 ? a : "/";
  r &&
    (c = c.replace(to, (f, d) => {
      var p;
      return String((p = r[d]) !== null && p !== void 0 ? p : f);
    })),
    o && (c = T1(s, c));
  let u = B_(n, e, i);
  return u ? `${c}#${u}` : c;
}
async function z_(e, t, n) {
  if (!e.path || !t) return !1;
  let i = `${n.slug ? `/${n.slug}` : ""}${E1(e.path, t)}`;
  return (await fetch(i, { method: "HEAD", redirect: "manual" })).type ===
    "opaqueredirect"
    ? ((F.location.href = F.location.origin + i), !0)
    : !1;
}
async function H_(e) {
  let t = await v_(e);
  if (t) {
    try {
      localStorage.setItem("preferredLocale", e.nextLocale.code);
    } catch {}
    try {
      if (typeof t.path != "string")
        throw new Error("Expected result.path to be a string");
      if (
        t.isMissingInLocale &&
        (await z_(e.route, t.pathVariables, e.nextLocale))
      )
        return;
      L1(
        {
          routeId: e.routeId,
          pathVariables: t.pathVariables,
          localeId: e.nextLocale.id,
        },
        t.path
      );
    } catch {}
    return t;
  }
}
function N_(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((i) => n[i] === r[i]);
}
var ux = "default";
function $_() {
  let [e, t] = m.useState(0);
  return [e, m.useCallback(() => t((n) => n + 1), [])];
}
var W_ = async () => {},
  U_ = { activeLocale: null, locales: [], setLocale: W_ },
  M1 = m.createContext(U_);
function j_() {
  return m.useContext(M1);
}
function fx(e, t, n) {
  let r = e && document.getElementById(e);
  if (r) {
    Y_(r, t);
    return;
  }
  n || F.scrollTo(0, 0);
}
function X_(e) {
  let t = m.useRef([]);
  return (
    m.useLayoutEffect(() => {
      var n;
      !((n = t.current) === null || n === void 0) &&
        n.length &&
        (t.current.forEach((r) => r()), (t.current = []));
    }, [e]),
    m.useCallback((n) => {
      t.current.push(n);
    }, [])
  );
}
function G_({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: i,
  collectionUtils: o,
  routes: a,
  initialLocaleId: s,
  locales: l = [],
}) {
  V_({ disabled: t, routeId: r, initialPathVariables: n, initialLocaleId: s });
  let c = F1(),
    u = m.useRef(r),
    f = m.useRef(n),
    d = m.useRef(s),
    p = d.current,
    y = m.useMemo(() => {
      var z;
      return (z = l.find(({ id: O }) => (p ? O === p : O === ux))) !== null &&
        z !== void 0
        ? z
        : null;
    }, [p, l]),
    [b, S] = $_(),
    h = m.useMemo(
      () => ({
        activeLocale: y,
        locales: l,
        setLocale: async (z) => {
          let O;
          Ia(z) ? (O = z) : fc(z) && (O = z.id);
          let V = l.find(({ id: G }) => G === ux),
            H = l.find(({ id: G }) => G === O);
          if (!H) return;
          let P = u.current,
            Y = a[P];
          if (Y)
            try {
              let G = await H_({
                currentLocale: y,
                nextLocale: H,
                route: Y,
                routeId: P,
                defaultLocale: V,
                pathVariables: f.current,
                collectionUtils: o,
              });
              if (!G) return;
              (f.current = G.pathVariables),
                (d.current = H.id),
                c(u.current, P, () => ai(S));
            } catch {}
        },
      }),
      [y, o, S, l, a, c]
    ),
    v = X_(b),
    g = m.useCallback(
      (z, O, V, H, P = !1, Y = !1) => {
        (u.current = z),
          (f.current = H),
          (d.current = O),
          v(() => {
            fx(V, P, Y);
          }),
          S();
      },
      [S, v]
    );
  D_(u, g);
  let x = m.useCallback(
      (z, O, V, H) => {
        var P, Y;
        let G = a[z];
        if (V) {
          let Q = new Set(),
            ne = (P = G?.path) !== null && P !== void 0 ? P : "/";
          for (let Z of ne.matchAll(to)) {
            let We = Z[1];
            if (We === void 0)
              throw new Error(
                "A matching path variable should not be undefined"
              );
            Q.add(We);
          }
          V = Object.fromEntries(Object.entries(V).filter(([Z]) => Q.has(Z)));
        }
        let K = $h(G, O);
        if (
          N_(
            { routeId: u.current, pathVariables: f.current },
            { routeId: z, pathVariables: V }
          )
        ) {
          if (
            ((Y = F.history.state) === null || Y === void 0
              ? void 0
              : Y.hash) !== O &&
            !t
          ) {
            let Q = a[z];
            Q &&
              cx(z, Q, {
                currentRoutePath: Q.path,
                pathVariables: V,
                hash: O,
                localeId: d.current,
              });
          }
          fx(K, H, !1);
          return;
        }
        if (!G) return;
        if (!t) {
          let Q = a[u.current];
          cx(z, G, {
            currentRoutePath: Q?.path,
            hash: O,
            pathVariables: V,
            localeId: d.current,
          });
        }
        let N = () => g(z, d.current, K, V, H, !1);
        c(u.current, z, () => ai(N));
      },
      [a, t, g, c]
    ),
    k = C1(a),
    w = u.current,
    E = f.current,
    C = m.useMemo(
      () => ({
        navigate: x,
        getRoute: k,
        currentRouteId: w,
        currentPathVariables: E,
        routes: a,
        collectionUtils: o,
      }),
      [x, k, w, E, a, o]
    ),
    T = a[u.current];
  if (!T) throw new Error(`Router cannot find route for ${u.current}`);
  let R = !y || !T.includedLocales || T.includedLocales.includes(y.id),
    D = T.path && E ? E1(T.path, E) : T.path,
    L = String(p) + D;
  return m.createElement(
    l_,
    { api: C },
    m.createElement(
      M1.Provider,
      { value: h },
      m.createElement(
        m.Suspense,
        { fallback: null },
        m.createElement(
          s_,
          { notFoundPage: i, defaultPageStyle: e, forceUpdateKey: b },
          m.createElement(
            m.Fragment,
            { key: L },
            R ? _h(T.page, e) : i && _h(i, e)
          )
        )
      )
    )
  );
}
function Y_(e, t) {
  let n = t
    ? { behavior: "smooth", block: "start", inline: "nearest" }
    : void 0;
  e.scrollIntoView(n);
}
var Yl, hh, dx;
function K_(e) {
  if (dx !== e) {
    Yl = {};
    for (let [t, { path: n }] of Object.entries(e))
      n && (Yl[n] = { path: n, depth: Z_(n), routeId: t });
    (hh = Object.values(Yl)),
      hh.sort(({ depth: t }, { depth: n }) => n - t),
      (dx = e);
  }
  return [Yl, hh];
}
function q_(e, t, n = !0, r = []) {
  let [i, o] = K_(e),
    a,
    s,
    l = t;
  if (r.length > 0) {
    let d = l.split("/").find(Boolean);
    if (
      (d &&
        ((a = r.find(({ slug: p }) => p === d)),
        a && ((s = a.id), (l = l.substring(a.slug.length + 1)))),
      !s)
    ) {
      let p = r.find(({ slug: y }) => y === "");
      p && (s = p.id);
    }
  }
  let c = i[l];
  if (c) {
    let d = hx(l, c.path);
    if (d.isMatch)
      return {
        routeId: c.routeId,
        localeId: s,
        pathVariables: d.pathVariables,
      };
  }
  for (let { path: d, routeId: p } of o) {
    let y = hx(l, d);
    if (y.isMatch)
      return { routeId: p, localeId: s, pathVariables: y.pathVariables };
  }
  if (!n) throw new Error("No exact match found for path");
  let u = i["/"];
  if (u) return { routeId: u.routeId, localeId: s };
  let f = Object.keys(e)[0];
  if (!f) throw new Error("Router should not have undefined routes");
  return { routeId: f, localeId: s };
}
function Z_(e) {
  let t = e.replace(/(?:^\/|\/$)/g, "");
  return t === "" ? 0 : t.split("/").length;
}
function hx(e, t) {
  let n = [],
    i = Q_(t).replace(to, (c, u) => (n.push(u), "([^/]+)")),
    o = new RegExp(i + "$"),
    a = e.match(o);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let s = {},
    l = a.slice(1);
  for (let c = 0; c < n.length; ++c) {
    let u = n[c];
    if (u === void 0) continue;
    let f = l[c],
      d = s[u];
    if (d) {
      if (d !== f) return { isMatch: !1 };
      continue;
    }
    if (f === void 0)
      throw new Error("Path variable values cannot be undefined");
    s[u] = f;
  }
  return { isMatch: !0, pathVariables: s };
}
function Q_(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var J_ = "page";
function px(e) {
  return fc(e) && J_ in e && e.page !== void 0;
}
var eF = m.createContext(void 0);
function Uh() {
  var e;
  let t = Sc(),
    n = M(eF),
    r = n ?? t.currentRouteId;
  if (!r) return;
  let i = (e = t.getRoute) === null || e === void 0 ? void 0 : e.call(t, r);
  if (i)
    return { ...i, id: r, pathVariables: n ? void 0 : t.currentPathVariables };
}
var O1 = typeof F < "u" && !p_(et.userAgent);
function tF(e, t = !0) {
  let { getRoute: n } = Sc();
  m.useEffect(() => {
    if (!(!n || !t || !O1))
      for (let r of e) {
        let i = n(r);
        i?.page && jh(i.page);
      }
  }, [e, n, t]);
}
function jh(e) {
  O1 && R1(e) && e.preload();
}
var mx = new Set();
function Ma(e, ...t) {
  mx.has(e) || (mx.add(e), console.warn(e, ...t));
}
function nF(e, t, n) {
  let r = n ? `, use ${n} instead` : "",
    i = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;
  Ma(i);
}
var A1 = class {
    constructor() {
      I(this, "observers", new Set()), I(this, "transactions", {});
    }
    add(e) {
      this.observers.add(e);
      let t = !1;
      return () => {
        t || ((t = !0), this.remove(e));
      };
    }
    remove(e) {
      this.observers.delete(e);
    }
    notify(e, t) {
      if (t) {
        let n = this.transactions[t] || e;
        (n.value = e.value), (this.transactions[t] = n);
      } else this.callObservers(e);
    }
    finishTransaction(e) {
      let t = this.transactions[e];
      return delete this.transactions[e], this.callObservers(t, e);
    }
    callObservers(e, t) {
      let n = [];
      return (
        new Set(this.observers).forEach((r) => {
          typeof r == "function" ? r(e, t) : (r.update(e, t), n.push(r.finish));
        }),
        n
      );
    }
  },
  Ie = (() => {
    function e(t) {
      return (
        nF(
          "Animatable()",
          "2.0.0",
          "the new animation API (https://www.bingo.com/api/animation/)"
        ),
        Zt(t) ? t : new iF(t)
      );
    }
    return (
      (e.transaction = (t) => {
        let n = Math.random(),
          r = new Set();
        t((a, s) => {
          a.set(s, n), r.add(a);
        }, n);
        let o = [];
        r.forEach((a) => {
          o.push(...a.finishTransaction(n));
        }),
          o.forEach((a) => {
            a(n);
          });
      }),
      (e.getNumber = (t, n = 0) => e.get(t, n)),
      (e.get = (t, n) => (t == null ? n : Zt(t) ? t.get() : t)),
      (e.objectToValues = (t) => {
        if (!t) return t;
        let n = {};
        for (let r in t) {
          let i = t[r];
          Zt(i) ? (n[r] = i.get()) : (n[r] = i);
        }
        return n;
      }),
      e
    );
  })(),
  vx = "onUpdate",
  gx = "finishTransaction";
function Zt(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    vx in e &&
    e[vx] instanceof Function &&
    gx in e &&
    e[gx] instanceof Function
  );
}
function rF(e, t) {
  return {
    interpolate(n, r) {
      let i = n.get(),
        o = r.get(),
        a = Ie(i);
      return (s) => {
        let l = t.interpolate(i, o)(s);
        return a.set(l), a;
      };
    },
    difference(n, r) {
      let i = n.get();
      return t.difference(i, r.get());
    },
  };
}
var iF = class {
  constructor(e) {
    (this.value = e), I(this, "observers", new A1());
  }
  static interpolationFor(e, t) {
    if (Zt(e)) return rF(e, t);
  }
  get() {
    return this.value;
  }
  set(e, t) {
    let n = this.value;
    Zt(e) && (e = e.get()), (this.value = e);
    let r = { value: e, oldValue: n };
    this.observers.notify(r, t);
  }
  finishTransaction(e) {
    return this.observers.finishTransaction(e);
  }
  onUpdate(e) {
    return this.observers.add(e);
  }
};
function Kl(e, t) {
  let n = Math.round(Math.abs(t)),
    r = Math.pow(10, n);
  return Math.round(e * r) / r;
}
function yx(e, t) {
  return t === 0
    ? Math.round(e)
    : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function mt(e, t) {
  return { x: e, y: t };
}
((e) => {
  (e.add = (...r) =>
    r.reduce((i, o) => ({ x: i.x + o.x, y: i.y + o.y }), { x: 0, y: 0 })),
    (e.subtract = (r, i) => ({ x: r.x - i.x, y: r.y - i.y })),
    (e.multiply = (r, i) => ({ x: r.x * i, y: r.y * i })),
    (e.divide = (r, i) => ({ x: r.x / i, y: r.y / i })),
    (e.absolute = (r) => ({ x: Math.abs(r.x), y: Math.abs(r.y) })),
    (e.reverse = (r) => ({ x: r.x * -1, y: r.y * -1 })),
    (e.pixelAligned = (r, i = { x: 0, y: 0 }) => ({
      x: yx(r.x, i.x),
      y: yx(r.y, i.y),
    })),
    (e.distance = (r, i) => {
      let o = Math.abs(r.x - i.x),
        a = Math.abs(r.y - i.y);
      return Math.sqrt(o * o + a * a);
    }),
    (e.angle = (r, i) =>
      (Math.atan2(i.y - r.y, i.x - r.x) * 180) / Math.PI - 90),
    (e.isEqual = (r, i) => r.x === i.x && r.y === i.y),
    (e.rotationNormalizer = () => {
      let r;
      return (i) => {
        typeof r != "number" && (r = i);
        let o = r - i,
          a = Math.abs(o) + 180,
          s = Math.floor(a / 360);
        return o < 180 && (i -= s * 360), o > 180 && (i += s * 360), (r = i), i;
      };
    });
  function t(r, i) {
    return { x: (r.x + i.x) / 2, y: (r.y + i.y) / 2 };
  }
  e.center = t;
  function n(r, i) {
    var o, a, s, l, c, u, f, d;
    let p = r.x,
      y = r.y,
      b = !1;
    for (let S = 0, h = i.length - 1; S < i.length; h = S++) {
      let v = (a = (o = i[S]) == null ? void 0 : o.x) != null ? a : 0,
        g = (l = (s = i[S]) == null ? void 0 : s.y) != null ? l : 0,
        x = (u = (c = i[h]) == null ? void 0 : c.x) != null ? u : 0,
        k = (d = (f = i[h]) == null ? void 0 : f.y) != null ? d : 0;
      g > y != k > y && p < ((x - v) * (y - g)) / (k - g) + v && (b = !b);
    }
    return b;
  }
  e.insidePoints = n;
})(mt || (mt = {}));
var L4 = Number.MIN_VALUE;
var M4 = { tension: 500, friction: 10, tolerance: 1 / 1e4, velocity: 0 };
var oF = $t(t_(), 1),
  Lh = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32",
  };
function dr(e, t, n, r = !1) {
  let [i, o] = t,
    [a, s] = n,
    l = o - i;
  if (l === 0) return (s + a) / 2;
  let c = s - a;
  if (c === 0) return a;
  let u = a + ((e - i) / l) * c;
  if (r === !0)
    if (a < s) {
      if (u < a) return a;
      if (u > s) return s;
    } else {
      if (u > a) return a;
      if (u < s) return s;
    }
  return u;
}
function Qi(e) {
  return !isNaN(e) && isFinite(e);
}
function hr(e) {
  let t = Mh(e);
  return t !== void 0 ? (e.includes("%") ? t / 100 : t) : 0;
}
function Mh(e) {
  let t = e.match(/\d?\.?\d+/);
  return t ? Number(t[0]) : void 0;
}
var { hsluvToRgb: aF, rgbToHsluv: sF } = oF.default;
function lF(e, t, n) {
  let [r, i, o] = sF([e / 255, t / 255, n / 255]);
  return { h: r, s: i, l: o };
}
function cF(e, t, n, r = 1) {
  let i = aF([e, t, n]);
  return { r: i[0] * 255, g: i[1] * 255, b: i[2] * 255, a: r };
}
function ql(e, t, n, r) {
  let i = Math.round(e),
    o = Math.round(t * 100),
    a = Math.round(n * 100);
  return r === void 0 || r === 1
    ? "hsv(" + i + ", " + o + "%, " + a + "%)"
    : "hsva(" + i + ", " + o + "%, " + a + "%, " + r + ")";
}
function uF(e, t, n) {
  return {
    r: Qi(e) ? at(e, 255) * 255 : 0,
    g: Qi(t) ? at(t, 255) * 255 : 0,
    b: Qi(n) ? at(n, 255) * 255 : 0,
  };
}
function bx(e, t, n, r) {
  let i = [
    mh(Math.round(e).toString(16)),
    mh(Math.round(t).toString(16)),
    mh(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join("");
}
function Xh(e, t, n) {
  let r,
    i,
    o = at(e, 255),
    a = at(t, 255),
    s = at(n, 255),
    l = Math.max(o, a, s),
    c = Math.min(o, a, s),
    u = (i = r = (l + c) / 2);
  if (l === c) u = i = 0;
  else {
    let f = l - c;
    switch (((i = r > 0.5 ? f / (2 - l - c) : f / (l + c)), l)) {
      case o:
        u = (a - s) / f + (a < s ? 6 : 0);
        break;
      case a:
        u = (s - o) / f + 2;
        break;
      case s:
        u = (o - a) / f + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function ph(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function fF(e, t, n) {
  let r, i, o;
  if (
    ((e = at(e, 360)), (t = at(t * 100, 100)), (n = at(n * 100, 100)), t === 0)
  )
    r = i = o = n;
  else {
    let a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - a;
    (r = ph(s, a, e + 1 / 3)), (i = ph(s, a, e)), (o = ph(s, a, e - 1 / 3));
  }
  return { r: r * 255, g: i * 255, b: o * 255 };
}
function xx(e, t, n) {
  (e = at(e, 255)), (t = at(t, 255)), (n = at(n, 255));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    o = r - i,
    a,
    s = r === 0 ? 0 : o / r,
    l = r;
  if (r === i) a = 0;
  else {
    switch (r) {
      case e:
        a = (t - n) / o + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / o + 2;
        break;
      case n:
        a = (e - t) / o + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s, v: l };
}
function dF(e, t, n) {
  (e = at(e, 360) * 6), (t = at(t * 100, 100)), (n = at(n * 100, 100));
  let r = Math.floor(e),
    i = e - r,
    o = n * (1 - t),
    a = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    l = r % 6,
    c = [n, a, o, o, s, n][l],
    u = [s, n, n, a, o, o][l],
    f = [o, o, s, n, n, a][l];
  return { r: c * 255, g: u * 255, b: f * 255 };
}
function at(e, t) {
  let n, r;
  if (
    (typeof t == "string" ? (n = parseFloat(t)) : (n = t), typeof e == "string")
  ) {
    hF(e) && (e = "100%");
    let i = pF(e);
    (r = Math.min(n, Math.max(0, parseFloat(e)))),
      i && (r = Math.floor(r * n) / 100);
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function hF(e) {
  return typeof e == "string" && e.includes(".") && parseFloat(e) === 1;
}
function pF(e) {
  return typeof e == "string" && e.includes("%");
}
function mh(e) {
  return e.length === 1 ? "0" + e : "" + e;
}
var un = (function () {
  let e = "[-\\+]?\\d+%?",
    n = "(?:" + "[-\\+]?\\d*\\.\\d+%?" + ")|(?:" + e + ")",
    r = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?",
    i =
      "[\\s|\\(]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")\\s*\\)?";
  return {
    rgb: new RegExp("rgb" + r),
    rgba: new RegExp("rgba" + i),
    hsl: new RegExp("hsl" + r),
    hsla: new RegExp("hsla" + i),
    hsv: new RegExp("hsv" + r),
    hsva: new RegExp("hsva" + i),
    hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  };
})();
function Gh(e) {
  var t,
    n,
    r,
    i,
    o,
    a,
    s,
    l,
    c,
    u,
    f,
    d,
    p,
    y,
    b,
    S,
    h,
    v,
    g,
    x,
    k,
    w,
    E,
    C,
    T,
    R,
    D,
    L;
  if (e.includes("gradient(") || e.includes("var(")) return !1;
  let z = /^[\s,#]+/,
    O = /\s+$/,
    V = e.replace(z, "").replace(O, "").toLowerCase(),
    H = Lh[V];
  if ((H && (V = H), V === "transparent"))
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let P;
  return (P = un.rgb.exec(V))
    ? {
        r: parseInt((t = P[1]) != null ? t : ""),
        g: parseInt((n = P[2]) != null ? n : ""),
        b: parseInt((r = P[3]) != null ? r : ""),
        a: 1,
        format: "rgb",
      }
    : (P = un.rgba.exec(V))
    ? {
        r: parseInt((i = P[1]) != null ? i : ""),
        g: parseInt((o = P[2]) != null ? o : ""),
        b: parseInt((a = P[3]) != null ? a : ""),
        a: parseFloat((s = P[4]) != null ? s : ""),
        format: "rgb",
      }
    : (P = un.hsl.exec(V))
    ? {
        h: parseInt((l = P[1]) != null ? l : ""),
        s: hr((c = P[2]) != null ? c : ""),
        l: hr((u = P[3]) != null ? u : ""),
        a: 1,
        format: "hsl",
      }
    : (P = un.hsla.exec(V))
    ? {
        h: parseInt((f = P[1]) != null ? f : ""),
        s: hr((d = P[2]) != null ? d : ""),
        l: hr((p = P[3]) != null ? p : ""),
        a: parseFloat((y = P[4]) != null ? y : ""),
        format: "hsl",
      }
    : (P = un.hsv.exec(V))
    ? {
        h: parseInt((b = P[1]) != null ? b : ""),
        s: hr((S = P[2]) != null ? S : ""),
        v: hr((h = P[3]) != null ? h : ""),
        a: 1,
        format: "hsv",
      }
    : (P = un.hsva.exec(V))
    ? {
        h: parseInt((v = P[1]) != null ? v : ""),
        s: hr((g = P[2]) != null ? g : ""),
        v: hr((x = P[3]) != null ? x : ""),
        a: parseFloat((k = P[4]) != null ? k : ""),
        format: "hsv",
      }
    : (P = un.hex8.exec(V))
    ? {
        r: It((w = P[1]) != null ? w : ""),
        g: It((E = P[2]) != null ? E : ""),
        b: It((C = P[3]) != null ? C : ""),
        a: Sx((T = P[4]) != null ? T : ""),
        format: H ? "name" : "hex",
      }
    : (P = un.hex6.exec(V))
    ? {
        r: It((R = P[1]) != null ? R : ""),
        g: It((D = P[2]) != null ? D : ""),
        b: It((L = P[3]) != null ? L : ""),
        a: 1,
        format: H ? "name" : "hex",
      }
    : (P = un.hex4.exec(V))
    ? {
        r: It(`${P[1]}${P[1]}`),
        g: It(`${P[2]}${P[2]}`),
        b: It(`${P[3]}${P[3]}`),
        a: Sx(P[4] + "" + P[4]),
        format: H ? "name" : "hex",
      }
    : (P = un.hex3.exec(V))
    ? {
        r: It(`${P[1]}${P[1]}`),
        g: It(`${P[2]}${P[2]}`),
        b: It(`${P[3]}${P[3]}`),
        a: 1,
        format: H ? "name" : "hex",
      }
    : !1;
}
function It(e) {
  return parseInt(e, 16);
}
function Sx(e) {
  return It(e) / 255;
}
var wx = new Map(),
  $ = (() => {
    function e(o, a, s, l) {
      if (typeof o == "string") {
        let u = wx.get(o);
        return (
          u ||
          ((u = t(o)),
          u === void 0 ? { ...e("black"), isValid: !1 } : (wx.set(o, u), u))
        );
      }
      let c = t(o, a, s, l);
      return c !== void 0 ? c : { ...e("black"), isValid: !1 };
    }
    function t(o, a, s, l) {
      if (o === "") return;
      let c = mF(o, a, s, l);
      if (c) {
        let u = {
          r: c.r,
          g: c.g,
          b: c.b,
          a: c.a,
          h: c.h,
          s: c.s,
          l: c.l,
          initialValue: typeof o == "string" && c.format !== "hsv" ? o : void 0,
          roundA: Math.round(100 * c.a) / 100,
          format: c.format,
          mix: e.mix,
          toValue: () => e.toRgbString(u),
        };
        return u;
      } else return;
    }
    let n = {
      isRGB(o) {
        return o === "rgb" || o === "rgba";
      },
      isHSL(o) {
        return o === "hsl" || o === "hsla";
      },
    };
    (e.inspect = (o, a) =>
      o.format === "hsl"
        ? `<${o.constructor.name} h:${o.h} s:${o.s} l:${o.l} a:${o.a}>`
        : o.format === "hex" || o.format === "name"
        ? `<${o.constructor.name} "${a}">`
        : `<${o.constructor.name} r:${o.r} g:${o.g} b:${o.b} a:${o.a}>`),
      (e.isColor = (o) =>
        typeof o == "string" ? e.isColorString(o) : e.isColorObject(o)),
      (e.isColorString = (o) => (typeof o == "string" ? Gh(o) !== !1 : !1)),
      (e.isColorObject = (o) =>
        o &&
        typeof o != "string" &&
        typeof o.r == "number" &&
        typeof o.g == "number" &&
        typeof o.b == "number" &&
        typeof o.h == "number" &&
        typeof o.s == "number" &&
        typeof o.l == "number" &&
        typeof o.a == "number" &&
        typeof o.roundA == "number" &&
        typeof o.format == "string"),
      (e.toString = (o) => e.toRgbString(o)),
      (e.toHex = (o, a = !1) => bx(o.r, o.g, o.b, a)),
      (e.toHexString = (o, a = !1) => `#${e.toHex(o, a)}`),
      (e.toRgbString = (o) =>
        o.a === 1
          ? "rgb(" +
            Math.round(o.r) +
            ", " +
            Math.round(o.g) +
            ", " +
            Math.round(o.b) +
            ")"
          : "rgba(" +
            Math.round(o.r) +
            ", " +
            Math.round(o.g) +
            ", " +
            Math.round(o.b) +
            ", " +
            o.roundA +
            ")"),
      (e.toHusl = (o) => ({ ...lF(o.r, o.g, o.b), a: o.roundA })),
      (e.toHslString = (o) => {
        let a = e.toHsl(o),
          s = Math.round(a.h),
          l = Math.round(a.s * 100),
          c = Math.round(a.l * 100);
        return o.a === 1
          ? "hsl(" + s + ", " + l + "%, " + c + "%)"
          : "hsla(" + s + ", " + l + "%, " + c + "%, " + o.roundA + ")";
      }),
      (e.toHsv = (o) => {
        let a = xx(o.r, o.g, o.b);
        return { h: a.h * 360, s: a.s, v: a.v, a: o.a };
      }),
      (e.toHsvString = (o) => {
        let a = xx(o.r, o.g, o.b),
          s = Math.round(a.h * 360),
          l = Math.round(a.s * 100),
          c = Math.round(a.v * 100);
        return o.a === 1
          ? "hsv(" + s + ", " + l + "%, " + c + "%)"
          : "hsva(" + s + ", " + l + "%, " + c + "%, " + o.roundA + ")";
      }),
      (e.toName = (o) => {
        if (o.a === 0) return "transparent";
        if (o.a < 1) return !1;
        let a = bx(o.r, o.g, o.b, !0);
        for (let s of Object.keys(Lh)) if (Lh[s] === a) return s;
        return !1;
      }),
      (e.toHsl = (o) => ({ h: Math.round(o.h), s: o.s, l: o.l, a: o.a })),
      (e.toRgb = (o) => ({
        r: Math.round(o.r),
        g: Math.round(o.g),
        b: Math.round(o.b),
        a: o.a,
      })),
      (e.brighten = (o, a = 10) => {
        let s = e.toRgb(o);
        return (
          (s.r = Math.max(
            0,
            Math.min(255, s.r - Math.round(255 * -(a / 100)))
          )),
          (s.g = Math.max(
            0,
            Math.min(255, s.g - Math.round(255 * -(a / 100)))
          )),
          (s.b = Math.max(
            0,
            Math.min(255, s.b - Math.round(255 * -(a / 100)))
          )),
          e(s)
        );
      }),
      (e.lighten = (o, a = 10) => {
        let s = e.toHsl(o);
        return (s.l += a / 100), (s.l = Math.min(1, Math.max(0, s.l))), e(s);
      }),
      (e.darken = (o, a = 10) => {
        let s = e.toHsl(o);
        return (s.l -= a / 100), (s.l = Math.min(1, Math.max(0, s.l))), e(s);
      }),
      (e.saturate = (o, a = 10) => {
        let s = e.toHsl(o);
        return (s.s += a / 100), (s.s = Math.min(1, Math.max(0, s.s))), e(s);
      }),
      (e.desaturate = (o, a = 10) => {
        let s = e.toHsl(o);
        return (s.s -= a / 100), (s.s = Math.min(1, Math.max(0, s.s))), e(s);
      }),
      (e.grayscale = (o) => e.desaturate(o, 100)),
      (e.hueRotate = (o, a) => {
        let s = e.toHsl(o);
        return (s.h += a), (s.h = s.h > 360 ? s.h - 360 : s.h), e(s);
      }),
      (e.alpha = (o, a = 1) => e({ r: o.r, g: o.g, b: o.b, a })),
      (e.transparent = (o) => e.alpha(o, 0)),
      (e.multiplyAlpha = (o, a = 1) =>
        e({ r: o.r, g: o.g, b: o.b, a: o.a * a })),
      (e.interpolate = (o, a, s = "rgb") => {
        if (!e.isColorObject(o) || !e.isColorObject(a))
          throw new TypeError(
            "Both arguments for Color.interpolate must be Color objects"
          );
        return (l) => e.mixAsColor(o, a, l, !1, s);
      }),
      (e.mix = (o, a, { model: s = "rgb" } = {}) => {
        let l = typeof o == "string" ? e(o) : o,
          c = e.interpolate(l, a, s);
        return (u) => e.toRgbString(c(u));
      }),
      (e.mixAsColor = (o, a, s = 0.5, l = !1, c = "rgb") => {
        let u = null;
        if (n.isRGB(c))
          u = e({
            r: dr(s, [0, 1], [o.r, a.r], l),
            g: dr(s, [0, 1], [o.g, a.g], l),
            b: dr(s, [0, 1], [o.b, a.b], l),
            a: dr(s, [0, 1], [o.a, a.a], l),
          });
        else {
          let f, d;
          n.isHSL(c)
            ? ((f = e.toHsl(o)), (d = e.toHsl(a)))
            : ((f = e.toHusl(o)), (d = e.toHusl(a))),
            f.s === 0 ? (f.h = d.h) : d.s === 0 && (d.h = f.h);
          let p = f.h,
            y = d.h,
            b = y - p;
          b > 180 ? (b = y - 360 - p) : b < -180 && (b = y + 360 - p);
          let S = {
            h: dr(s, [0, 1], [p, p + b], l),
            s: dr(s, [0, 1], [f.s, d.s], l),
            l: dr(s, [0, 1], [f.l, d.l], l),
            a: dr(s, [0, 1], [o.a, a.a], l),
          };
          n.isHSL(c) ? (u = e(S)) : (u = e(cF(S.h, S.s, S.l, S.a)));
        }
        return u;
      }),
      (e.random = (o = 1) => {
        function a() {
          return Math.floor(Math.random() * 255);
        }
        return e("rgba(" + a() + ", " + a() + ", " + a() + ", " + o + ")");
      }),
      (e.grey = (o = 0.5, a = 1) => (
        (o = Math.floor(o * 255)),
        e("rgba(" + o + ", " + o + ", " + o + ", " + a + ")")
      )),
      (e.gray = e.grey),
      (e.rgbToHsl = (o, a, s) => Xh(o, a, s)),
      (e.isValidColorProperty = (o, a) =>
        !!(
          (o.toLowerCase().slice(-5) === "color" ||
            o === "fill" ||
            o === "stroke") &&
          typeof a == "string" &&
          e.isColorString(a)
        )),
      (e.difference = (o, a) => {
        let s = (o.r + a.r) / 2,
          l = o.r - a.r,
          c = o.g - a.g,
          u = o.b - a.b,
          f = Math.pow(l, 2),
          d = Math.pow(c, 2),
          p = Math.pow(u, 2);
        return Math.sqrt(2 * f + 4 * d + 3 * p + (s * (f - p)) / 256);
      }),
      (e.equal = (o, a, s = 0.1) =>
        !(
          Math.abs(o.r - a.r) >= s ||
          Math.abs(o.g - a.g) >= s ||
          Math.abs(o.b - a.b) >= s ||
          Math.abs(o.a - a.a) * 256 >= s
        ));
    let r = Ar([0, 255], [0, 1]);
    function i(o) {
      o = r(o);
      let a = Math.abs(o);
      return a < 0.04045
        ? o / 12.92
        : (Math.sign(o) || 1) * Math.pow((a + 0.055) / 1.055, 2.4);
    }
    return (
      (e.luminance = (o) => {
        let { r: a, g: s, b: l } = e.toRgb(o);
        return 0.2126 * i(a) + 0.7152 * i(s) + 0.0722 * i(l);
      }),
      (e.contrast = (o, a) => {
        let s = e.luminance(o),
          l = e.luminance(a);
        return (Math.max(s, l) + 0.05) / (Math.min(s, l) + 0.05);
      }),
      e
    );
  })();
function mF(e, t, n, r = 1) {
  let i;
  return (
    typeof e == "number" &&
    !Number.isNaN(e) &&
    typeof t == "number" &&
    !Number.isNaN(t) &&
    typeof n == "number" &&
    !Number.isNaN(n)
      ? (i = Oh({ r: e, g: t, b: n, a: r }))
      : typeof e == "string"
      ? (i = vF(e))
      : typeof e == "object" &&
        (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b")
          ? (i = Oh(e))
          : (i = V1(e))),
    i
  );
}
function vF(e) {
  let t = Gh(e);
  if (t) return t.format === "hsl" ? V1(t) : t.format === "hsv" ? gF(t) : Oh(t);
}
function gF(e) {
  let t = dF(e.h, e.s, e.v);
  return {
    ...Xh(t.r, t.g, t.b),
    ...t,
    format: "rgb",
    a: e.a !== void 0 ? D1(e.a) : 1,
  };
}
function Oh(e) {
  let t = uF(e.r, e.g, e.b);
  return {
    ...Xh(t.r, t.g, t.b),
    ...t,
    format: "rgb",
    a: e.a !== void 0 ? D1(e.a) : 1,
  };
}
function V1(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    o = { h: 0, s: 0, l: 0 };
  return (
    (t = Qi(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Qi(e.s) ? e.s : 1),
    typeof e.s == "string" && (n = Mh(e.s)),
    (r = Qi(e.l) ? e.l : 0.5),
    typeof e.l == "string" && (r = Mh(e.l)),
    (i = fF(t, n, r)),
    (o = { h: t, s: n, l: r }),
    { ...i, ...o, a: e.a === void 0 ? 1 : e.a, format: "hsl" }
  );
}
function D1(e) {
  return (
    (e = parseFloat(e)), e < 0 && (e = 0), (isNaN(e) || e > 1) && (e = 1), e
  );
}
var kx = (e) => e instanceof Cs,
  O4 = { delta: 1 / 60, maxValues: 1e4 };
var yF = {
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => !1,
    ResizeObserver: void 0,
    onpointerdown: !1,
    onpointermove: !1,
    onpointerup: !1,
    ontouchstart: !1,
    ontouchmove: !1,
    ontouchend: !1,
    onmousedown: !1,
    onmousemove: !1,
    onmouseup: !1,
    devicePixelRatio: 1,
    scrollX: 0,
    scrollY: 0,
    location: { href: "" },
    setTimeout: () => 0,
    clearTimeout: () => {},
    setInterval: () => 0,
    clearInterval: () => {},
    requestAnimationFrame: () => 0,
    cancelAnimationFrame: () => {},
    getSelection: () => null,
    matchMedia: (e) => ({
      matches: !1,
      media: e,
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => !1,
    }),
    innerHeight: 0,
    innerWidth: 0,
    SVGSVGElement: {},
  },
  Pt = typeof F > "u" ? yF : F,
  bF = (e) => {
    setTimeout(e, 1 / 60);
  },
  xF = Pt.requestAnimationFrame || bF,
  Cx = (e) => xF(e),
  SF = $t(n_(), 1),
  { EventEmitter: wF } = SF.default,
  kF = class {
    constructor() {
      I(this, "_emitter", new wF());
    }
    eventNames() {
      return this._emitter.eventNames();
    }
    eventListeners() {
      let e = {};
      for (let t of this._emitter.eventNames())
        e[t] = this._emitter.listeners(t);
      return e;
    }
    on(e, t) {
      this.addEventListener(e, t, !1, !1, this);
    }
    off(e, t) {
      this.removeEventListeners(e, t);
    }
    once(e, t) {
      this.addEventListener(e, t, !0, !1, this);
    }
    unique(e, t) {
      this.addEventListener(e, t, !1, !0, this);
    }
    addEventListener(e, t, n, r, i) {
      if (r) {
        for (let o of this._emitter.eventNames())
          if (t === this._emitter.listeners(o)) return;
      }
      n === !0
        ? this._emitter.once(e, t, i)
        : this._emitter.addListener(e, t, i);
    }
    removeEventListeners(e, t) {
      e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
    }
    removeAllEventListeners() {
      this._emitter.removeAllListeners();
    }
    countEventListeners(e, t) {
      if (e) return this._emitter.listeners(e).length;
      {
        let n = 0;
        for (let r of this._emitter.eventNames())
          n += this._emitter.listeners(r).length;
        return n;
      }
    }
    emit(e, ...t) {
      this._emitter.emit(e, ...t);
    }
  },
  ka = 1 / 60,
  CF = class extends kF {
    constructor(e = !1) {
      super(),
        I(this, "_started", !1),
        I(this, "_frame", 0),
        I(this, "_frameTasks", []),
        I(this, "tick", () => {
          this._started &&
            (Cx(this.tick),
            this.emit("update", this._frame, ka),
            this.emit("render", this._frame, ka),
            this._processFrameTasks(),
            this._frame++);
        }),
        e && this.start();
    }
    addFrameTask(e) {
      this._frameTasks.push(e);
    }
    _processFrameTasks() {
      var e;
      let t = this._frameTasks,
        n = t.length;
      if (n !== 0) {
        for (let r = 0; r < n; r++) (e = t[r]) == null || e.call(t);
        t.length = 0;
      }
    }
    static set TimeStep(e) {
      ka = e;
    }
    static get TimeStep() {
      return ka;
    }
    start() {
      return this._started
        ? this
        : ((this._frame = 0), (this._started = !0), Cx(this.tick), this);
    }
    stop() {
      return (this._started = !1), this;
    }
    get frame() {
      return this._frame;
    }
    get time() {
      return this._frame * ka;
    }
  },
  B1 = new CF(),
  we = ((e) => (
    (e.canvas = "CANVAS"),
    (e.export = "EXPORT"),
    (e.thumbnail = "THUMBNAIL"),
    (e.preview = "PREVIEW"),
    e
  ))(we || {}),
  dc = { target: "PREVIEW", zoom: 1 };
((e) => {
  function t() {
    return dc.target;
  }
  e.current = t;
  function n() {
    let r = dc.target;
    return r === "CANVAS" || r === "EXPORT";
  }
  e.hasRestrictions = n;
})(we || (we = {}));
var Zl = (e) => ({
  correct: (t, { delta: n, treeScale: r }) => {
    if ((typeof t == "string" && (t = parseFloat(t)), t === 0)) return "0px";
    let i = t;
    return (
      n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
      i + "px"
    );
  },
});
yu({
  borderTopWidth: Zl("y"),
  borderLeftWidth: Zl("x"),
  borderRightWidth: Zl("x"),
  borderBottomWidth: Zl("y"),
});
function $e(e, ...t) {
  var n, r;
  if (e) return;
  let i = Error("Assertion Error" + (t.length > 0 ? ": " + t.join(" ") : ""));
  if (i.stack)
    try {
      let o = i.stack.split(`
`);
      (n = o[1]) != null && n.includes("assert")
        ? (o.splice(1, 1),
          (i.stack = o.join(`
`)))
        : (r = o[0]) != null &&
          r.includes("assert") &&
          (o.splice(0, 1),
          (i.stack = o.join(`
`)));
    } catch {}
  throw i;
}
function br(e, t) {
  throw (
    t ||
    new Error(
      e ? `Unexpected value: ${e}` : "Application entered invalid state"
    )
  );
}
var eo = m.createContext({
  getLayoutId: (e) => null,
  persistLayoutIdCache: () => {},
  top: !1,
  enabled: !0,
});
function EF({ children: e }) {
  if (M(eo).top) return m.createElement(m.Fragment, null, e);
  let n = B({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = B({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
    }),
    i = B(new Set()).current,
    o = se(({ id: l, name: c, duplicatedFrom: u }) => {
      var f;
      if (!l) return null;
      let d = c ? "byName" : "byId",
        p = n.current[d][l];
      if (p) return p;
      let y = c || l;
      if (
        !u &&
        !i.has(y) &&
        (!n.current.byLayoutId[y] || n.current.byLayoutId[y] === y)
      )
        return (
          n.current.count[d][y] === void 0 &&
            ((n.current.count[d][y] = 0),
            (n.current.byLayoutId[y] = y),
            (r.current[d][l] = y)),
          i.add(y),
          y
        );
      let b;
      if (u?.length)
        for (let E = u.length - 1; E >= 0; E--) {
          let C = u[E];
          $e(!!C, "duplicatedId must be defined");
          let T = n.current[d][C],
            R = n.current.byLastId[C];
          if (R && !b) {
            let z = n.current.byLayoutId[R],
              O = !z || z === c;
            R && !i.has(R) && (!c || O) && (b = [R, C]);
          }
          let D = T ? n.current.byLayoutId[T] : void 0,
            L = !D || D === c;
          if (T && !i.has(T) && (!c || L))
            return (
              (r.current[d][l] = T), (r.current.byLastId[C] = T), i.add(T), T
            );
        }
      let S = n.current.byLastId[l];
      if (S && !i.has(S)) return i.add(S), (r.current.byId[l] = S), S;
      if (b) {
        let [E, C] = b;
        return (r.current[d][l] = E), (r.current.byLastId[C] = E), i.add(E), E;
      }
      let h = n.current.byPossibleId[l];
      if (h && !i.has(h)) return i.add(h), (r.current.byId[l] = h), h;
      let v = u?.[0],
        g = c || v || l,
        x = ((f = n.current.count[d][g]) != null ? f : -1) + 1,
        { layoutId: k, value: w } = TF(g, x, i);
      if (
        ((n.current.count[d][g] = w), (r.current[d][l] = k), u?.length && !c)
      ) {
        let E = u[u.length - 1];
        if ((E && (r.current.byLastId[E] = k), u.length > 1))
          for (let C = 0; C < u.length - 1; C++) {
            let T = u[C];
            T !== void 0 &&
              (r.current.byPossibleId[T] || (r.current.byPossibleId[T] = k));
          }
      }
      return (r.current.byLayoutId[k] = y), i.add(k), k;
    }, []),
    a = se(() => {
      (n.current = {
        byId: { ...n.current.byId, ...r.current.byId },
        byLastId: { ...n.current.byLastId, ...r.current.byLastId },
        byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
        byName: { ...n.current.byName, ...r.current.byName },
        byLastName: { ...n.current.byLastName, ...r.current.byLastName },
        byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
        count: { ...n.current.count, byName: {} },
      }),
        (r.current = {
          byId: {},
          byName: {},
          byLastId: {},
          byPossibleId: {},
          byLastName: {},
          byLayoutId: {},
        }),
        i.clear();
    }, []),
    s = B({
      getLayoutId: o,
      persistLayoutIdCache: a,
      top: !0,
      enabled: !0,
    }).current;
  return m.createElement(eo.Provider, { value: s }, e);
}
function TF(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) r++, (i = `${e}-${r}`);
  return { layoutId: i, value: r };
}
function RF({ enabled: e = !0, ...t }) {
  let n = M(eo),
    r = le(() => ({ ...n, enabled: e }), [e]);
  return m.createElement(eo.Provider, { ...t, value: r });
}
function pn(e) {
  let t = B(null);
  return t.current === null && (t.current = e()), t.current;
}
var IF = {
    background: void 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: "1.4em",
    textOverflow: "ellipsis",
    overflow: "hidden",
    minHeight: 0,
    width: "100%",
    height: "100%",
  },
  PF = {
    ...IF,
    border: "1px solid rgba(149, 149, 149, 0.15)",
    borderRadius: 6,
    fontSize: "12px",
    backgroundColor: "rgba(149, 149, 149, 0.1)",
    color: "#a5a5a5",
  },
  z1 = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    flexShrink: 0,
    padding: "0 10px",
  },
  _F = { ...z1, fontWeight: 500 },
  FF = {
    ...z1,
    whiteSpace: "pre",
    maxHeight:
      "calc(50% - calc(20px * var(--bingoInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))",
    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
  };
function H4(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${LF(n)}` : "Error",
    i = t instanceof Error ? t.message : "" + t;
  return m.createElement(
    "div",
    { style: PF },
    m.createElement("div", { className: "text", style: _F }, r),
    i && m.createElement("div", { className: "text", style: FF }, i)
  );
}
function LF(e) {
  return e.startsWith("./") ? e.replace("./", "") : e;
}
var N4 = 992 - 5;
function j(e) {
  return typeof e == "number" && isFinite(e);
}
function MF(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Pa(e) {
  return typeof e != "string" && typeof e != "number";
}
function _a(e) {
  return e !== null && typeof e < "u" && typeof e != "boolean" && !MF(e);
}
var hc;
((e) => {
  function t(i, o) {
    return i === o
      ? !0
      : !i || !o
      ? !1
      : i.x === o.x &&
        i.y === o.y &&
        i.width === o.width &&
        i.height === o.height;
  }
  (e.equals = t),
    (e.atOrigin = (i) => ({ ...i, x: 0, y: 0 })),
    (e.fromTwoPoints = (i, o) => ({
      x: Math.min(i.x, o.x),
      y: Math.min(i.y, o.y),
      width: Math.abs(i.x - o.x),
      height: Math.abs(i.y - o.y),
    })),
    (e.fromRect = (i) => ({
      x: i.left,
      y: i.top,
      width: i.right - i.left,
      height: i.bottom - i.top,
    })),
    (e.multiply = (i, o) => ({
      x: i.x * o,
      y: i.y * o,
      width: i.width * o,
      height: i.height * o,
    })),
    (e.divide = (i, o) => (0, e.multiply)(i, 1 / o)),
    (e.offset = (i, o) => {
      let a = typeof o.x == "number" ? o.x : 0,
        s = typeof o.y == "number" ? o.y : 0;
      return { ...i, x: i.x + a, y: i.y + s };
    });
  function n(i, o) {
    if (o === 0) return i;
    let a = 2 * o;
    return { x: i.x - o, y: i.y - o, width: i.width + a, height: i.height + a };
  }
  (e.inflate = n),
    (e.pixelAligned = (i) => {
      let o = Math.round(i.x),
        a = Math.round(i.y),
        s = Math.round(i.x + i.width),
        l = Math.round(i.y + i.height),
        c = Math.max(s - o, 0),
        u = Math.max(l - a, 0);
      return { x: o, y: a, width: c, height: u };
    }),
    (e.halfPixelAligned = (i) => {
      let o = Math.round(i.x * 2) / 2,
        a = Math.round(i.y * 2) / 2,
        s = Math.round((i.x + i.width) * 2) / 2,
        l = Math.round((i.y + i.height) * 2) / 2,
        c = Math.max(s - o, 1),
        u = Math.max(l - a, 1);
      return { x: o, y: a, width: c, height: u };
    }),
    (e.round = (i, o = 0) => {
      let a = Kl(i.x, o),
        s = Kl(i.y, o),
        l = Kl(i.width, o),
        c = Kl(i.height, o);
      return { x: a, y: s, width: l, height: c };
    }),
    (e.roundToOutside = (i) => {
      let o = Math.floor(i.x),
        a = Math.floor(i.y),
        s = Math.ceil(i.x + i.width),
        l = Math.ceil(i.y + i.height),
        c = Math.max(s - o, 0),
        u = Math.max(l - a, 0);
      return { x: o, y: a, width: c, height: u };
    }),
    (e.minX = (i) => i.x),
    (e.maxX = (i) => i.x + i.width),
    (e.minY = (i) => i.y),
    (e.maxY = (i) => i.y + i.height),
    (e.positions = (i) => ({
      minX: i.x,
      midX: i.x + i.width / 2,
      maxX: (0, e.maxX)(i),
      minY: i.y,
      midY: i.y + i.height / 2,
      maxY: (0, e.maxY)(i),
    })),
    (e.center = (i) => ({ x: i.x + i.width / 2, y: i.y + i.height / 2 })),
    (e.fromPoints = (i) => {
      let o = i.map((f) => f.x),
        a = i.map((f) => f.y),
        s = Math.min(...o),
        l = Math.min(...a),
        c = Math.max(...o) - s,
        u = Math.max(...a) - l;
      return { x: s, y: l, width: c, height: u };
    }),
    (e.merge = (...i) => {
      let o = { x: Math.min(...i.map(e.minX)), y: Math.min(...i.map(e.minY)) },
        a = { x: Math.max(...i.map(e.maxX)), y: Math.max(...i.map(e.maxY)) };
      return (0, e.fromTwoPoints)(o, a);
    }),
    (e.intersection = (i, o) => {
      let a = Math.max(i.x, o.x),
        s = Math.min(i.x + i.width, o.x + o.width),
        l = Math.max(i.y, o.y),
        c = Math.min(i.y + i.height, o.y + o.height);
      return { x: a, y: l, width: s - a, height: c - l };
    }),
    (e.points = (i) => [
      { x: (0, e.minX)(i), y: (0, e.minY)(i) },
      { x: (0, e.minX)(i), y: (0, e.maxY)(i) },
      { x: (0, e.maxX)(i), y: (0, e.minY)(i) },
      { x: (0, e.maxX)(i), y: (0, e.maxY)(i) },
    ]),
    (e.transform = (i, o) => {
      let { x: a, y: s } = o.transformPoint({ x: i.x, y: i.y }),
        { x: l, y: c } = o.transformPoint({ x: i.x + i.width, y: i.y }),
        { x: u, y: f } = o.transformPoint({
          x: i.x + i.width,
          y: i.y + i.height,
        }),
        { x: d, y: p } = o.transformPoint({ x: i.x, y: i.y + i.height }),
        y = Math.min(a, l, u, d),
        b = Math.max(a, l, u, d) - y,
        S = Math.min(s, c, f, p),
        h = Math.max(s, c, f, p) - S;
      return { x: y, y: S, width: b, height: h };
    }),
    (e.containsPoint = (i, o) =>
      !(
        o.x < (0, e.minX)(i) ||
        o.x > (0, e.maxX)(i) ||
        o.y < (0, e.minY)(i) ||
        o.y > (0, e.maxY)(i) ||
        isNaN(i.x) ||
        isNaN(i.y)
      )),
    (e.containsRect = (i, o) => {
      for (let a of (0, e.points)(o))
        if (!(0, e.containsPoint)(i, a)) return !1;
      return !0;
    }),
    (e.toCSS = (i) => ({
      display: "block",
      transform: `translate(${i.x}px, ${i.y}px)`,
      width: `${i.width}px`,
      height: `${i.height}px`,
    })),
    (e.inset = (i, o) => ({
      x: i.x + o,
      y: i.y + o,
      width: Math.max(0, i.width - 2 * o),
      height: Math.max(0, i.height - 2 * o),
    })),
    (e.intersects = (i, o) =>
      !(
        o.x >= (0, e.maxX)(i) ||
        (0, e.maxX)(o) <= i.x ||
        o.y >= (0, e.maxY)(i) ||
        (0, e.maxY)(o) <= i.y
      )),
    (e.overlapHorizontally = (i, o) => {
      let a = e.maxX(i),
        s = e.maxX(o);
      return a > o.x && s > i.x;
    }),
    (e.overlapVertically = (i, o) => {
      let a = e.maxY(i),
        s = e.maxY(o);
      return a > o.y && s > i.y;
    }),
    (e.doesNotIntersect = (i, o) =>
      o.find((a) => e.intersects(a, i)) === void 0),
    (e.isEqual = (i, o) => e.equals(i, o)),
    (e.cornerPoints = (i) => {
      let o = i.x,
        a = i.x + i.width,
        s = i.y,
        l = i.y + i.height;
      return [
        { x: o, y: s },
        { x: a, y: s },
        { x: a, y: l },
        { x: o, y: l },
      ];
    }),
    (e.midPoints = (i) => {
      let o = i.x,
        a = i.x + i.width / 2,
        s = i.x + i.width,
        l = i.y,
        c = i.y + i.height / 2,
        u = i.y + i.height;
      return [
        { x: a, y: l },
        { x: s, y: c },
        { x: a, y: u },
        { x: o, y: c },
      ];
    }),
    (e.pointDistance = (i, o) => {
      let a = 0,
        s = 0;
      return (
        o.x < i.x ? (a = i.x - o.x) : o.x > e.maxX(i) && (a = o.x - e.maxX(i)),
        o.y < i.y ? (s = i.y - o.y) : o.y > e.maxY(i) && (s = o.y - e.maxY(i)),
        mt.distance({ x: a, y: s }, { x: 0, y: 0 })
      );
    });
  let r = { x: 0, y: 0, width: 0, height: 0 };
  (e.fromAny = (i, o = r) => ({
    x: i.x || o.x,
    y: i.y || o.y,
    width: i.width || o.width,
    height: i.height || o.height,
  })),
    (e.delta = (i, o) => {
      let a = { x: (0, e.minX)(i), y: (0, e.minY)(i) },
        s = { x: (0, e.minX)(o), y: (0, e.minY)(o) };
      return { x: a.x - s.x, y: a.y - s.y };
    }),
    (e.withMinSize = (i, o) => {
      let { width: a, height: s } = o,
        l = i.width - a,
        c = i.height - s;
      return {
        width: Math.max(i.width, a),
        height: Math.max(i.height, s),
        x: i.width < a ? i.x + l / 2 : i.x,
        y: i.height < s ? i.y + c / 2 : i.y,
      };
    }),
    (e.rebaseRectOnto = (i, o, a, s) => {
      let l = { ...i };
      switch (a) {
        case "bottom":
        case "top":
          switch (s) {
            case "start":
              l.x = o.x;
              break;
            case "center":
              l.x = o.x + o.width / 2 - i.width / 2;
              break;
            case "end":
              l.x = o.x + o.width - i.width;
              break;
            default:
              br(s);
          }
          break;
        case "left":
          l.x = o.x - i.width;
          break;
        case "right":
          l.x = o.x + o.width;
          break;
        default:
          br(a);
      }
      switch (a) {
        case "left":
        case "right":
          switch (s) {
            case "start":
              l.y = o.y;
              break;
            case "center":
              l.y = o.y + o.height / 2 - i.height / 2;
              break;
            case "end":
              l.y = o.y + o.height - i.height;
              break;
            default:
              br(s);
          }
          break;
        case "top":
          l.y = o.y - i.height;
          break;
        case "bottom":
          l.y = o.y + o.height;
          break;
        default:
          br(a);
      }
      return l;
    });
})(hc || (hc = {}));
var pc;
((e) => {
  e.quickfix = (t) => (
    (t.widthType === 2 || t.heightType === 2) && (t.aspectRatio = null),
    j(t.aspectRatio) &&
      (t.left && t.right && (t.widthType = 0),
      t.top && t.bottom && (t.heightType = 0),
      t.left && t.right && t.top && t.bottom && (t.bottom = !1),
      t.widthType !== 0 && t.heightType !== 0 && (t.heightType = 0)),
    t.left &&
      t.right &&
      ((t.fixedSize || t.widthType === 2 || j(t.maxWidth)) && (t.right = !1),
      (t.widthType = 0)),
    t.top &&
      t.bottom &&
      ((t.fixedSize || t.heightType === 2 || j(t.maxHeight)) && (t.bottom = !1),
      (t.heightType = 0)),
    t
  );
})(pc || (pc = {}));
function mc(e) {
  if (typeof e == "string") {
    let t = e.trim();
    if (t === "auto") return 2;
    if (t.endsWith("fr")) return 3;
    if (t.endsWith("%")) return 1;
    if (t.endsWith("vw") || t.endsWith("vh")) return 4;
  }
  return 0;
}
var Ah;
((e) => {
  (e.fromProperties = (t) => {
    let {
        left: n,
        right: r,
        top: i,
        bottom: o,
        width: a,
        height: s,
        centerX: l,
        centerY: c,
        aspectRatio: u,
        autoSize: f,
      } = t,
      d = pc.quickfix({
        left: j(n) || Zt(n),
        right: j(r) || Zt(r),
        top: j(i) || Zt(i),
        bottom: j(o) || Zt(o),
        widthType: mc(a),
        heightType: mc(s),
        aspectRatio: u || null,
        fixedSize: f === !0,
      }),
      p = null,
      y = null,
      b = 0,
      S = 0;
    if (d.widthType !== 0 && typeof a == "string") {
      let g = parseFloat(a);
      a.endsWith("fr")
        ? ((b = 3), (p = g))
        : a === "auto"
        ? (b = 2)
        : ((b = 1), (p = g / 100));
    } else a !== void 0 && typeof a != "string" && (p = Ie.getNumber(a));
    if (d.heightType !== 0 && typeof s == "string") {
      let g = parseFloat(s);
      s.endsWith("fr")
        ? ((S = 3), (y = g))
        : s === "auto"
        ? (S = 2)
        : ((S = 1), (y = parseFloat(s) / 100));
    } else s !== void 0 && typeof s != "string" && (y = Ie.getNumber(s));
    let h = 0.5,
      v = 0.5;
    return (
      l && (h = parseFloat(l) / 100),
      c && (v = parseFloat(c) / 100),
      {
        left: d.left ? Ie.getNumber(n) : null,
        right: d.right ? Ie.getNumber(r) : null,
        top: d.top ? Ie.getNumber(i) : null,
        bottom: d.bottom ? Ie.getNumber(o) : null,
        widthType: b,
        heightType: S,
        width: p,
        height: y,
        aspectRatio: d.aspectRatio || null,
        centerAnchorX: h,
        centerAnchorY: v,
      }
    );
  }),
    (e.toSize = (t, n, r, i) => {
      let o = null,
        a = null,
        s = n?.sizing ? Ie.getNumber(n?.sizing.width) : null,
        l = n?.sizing ? Ie.getNumber(n?.sizing.height) : null,
        c = Ex(t.left, t.right);
      if (s && j(c)) o = s - c;
      else if (r && t.widthType === 2) o = r.width;
      else if (j(t.width))
        switch (t.widthType) {
          case 0:
            o = t.width;
            break;
          case 3:
            o = i
              ? (i.freeSpaceInParent.width / i.freeSpaceUnitDivisor.width) *
                t.width
              : null;
            break;
          case 1:
          case 4:
            s && (o = s * t.width);
            break;
          case 2:
            break;
          default:
            br(t.widthType);
        }
      let u = Ex(t.top, t.bottom);
      if (l && j(u)) a = l - u;
      else if (r && t.heightType === 2) a = r.height;
      else if (j(t.height))
        switch (t.heightType) {
          case 0:
            a = t.height;
            break;
          case 3:
            a = i
              ? (i.freeSpaceInParent.height / i.freeSpaceUnitDivisor.height) *
                t.height
              : null;
            break;
          case 1:
          case 4:
            l && (a = l * t.height);
            break;
          case 2:
            break;
          default:
            br(t.heightType);
        }
      return BF(o, a, t, { height: l ?? 0, width: s ?? 0 }, n?.viewport);
    }),
    (e.toRect = (t, n = null, r = null, i = !1, o = null) => {
      var a;
      let s = t.left || 0,
        l = t.top || 0,
        { width: c, height: u } = e.toSize(t, n, r, o),
        f = (a = n?.positioning) != null ? a : null,
        d = f ? Ie.getNumber(f.width) : null,
        p = f ? Ie.getNumber(f.height) : null;
      t.left !== null
        ? (s = t.left)
        : d && t.right !== null
        ? (s = d - t.right - c)
        : d && (s = t.centerAnchorX * d - c / 2),
        t.top !== null
          ? (l = t.top)
          : p && t.bottom !== null
          ? (l = p - t.bottom - u)
          : p && (l = t.centerAnchorY * p - u / 2);
      let y = { x: s, y: l, width: c, height: u };
      return i ? hc.pixelAligned(y) : y;
    });
})(Ah || (Ah = {}));
var OF = 200,
  AF = 200;
function vc(e, t, n, r) {
  if (typeof t == "string") {
    if (t.endsWith("%") && n)
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * n.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith("vh") && r)
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * r.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    return parseFloat(t);
  }
  return t;
}
function VF(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(vc("minHeight", t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(vc("maxHeight", t.maxHeight, n, r), e)),
    e
  );
}
function DF(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(vc("minWidth", t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(vc("maxWidth", t.maxWidth, n, r), e)),
    e
  );
}
function BF(e, t, n, r, i) {
  let o = DF(j(e) ? e : OF, n, r, i),
    a = VF(j(t) ? t : AF, n, r, i);
  return (
    j(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (j(n.left) && j(n.right)
        ? (a = o / n.aspectRatio)
        : j(n.top) && j(n.bottom)
        ? (o = a * n.aspectRatio)
        : n.widthType !== 0
        ? (a = o / n.aspectRatio)
        : (o = a * n.aspectRatio)),
    { width: o, height: a }
  );
}
function Ex(e, t) {
  return !j(e) || !j(t) ? null : e + t;
}
function zF(e) {
  return (
    typeof e.right == "string" ||
    typeof e.bottom == "string" ||
    (typeof e.left == "string" && (!e.center || e.center === "y")) ||
    (typeof e.top == "string" && (!e.center || e.center === "x"))
  );
}
function Ha(e) {
  return !e._constraints || zF(e) ? !1 : e._constraints.enabled;
}
function HF(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    j(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    j(n) && j(r) ? { width: n, height: r } : null
  );
}
function NF(e) {
  let t = HF(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return j(n) && j(r) ? { x: n, y: r, ...t } : null;
}
function Oa(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Ha(e) || r) return NF(e);
  let i = $F(e),
    o = WF(t),
    a = o ? { sizing: o, positioning: o, viewport: null } : null;
  return Ah.toRect(i, a, null, n, null);
}
function $F(e) {
  let {
      left: t,
      right: n,
      top: r,
      bottom: i,
      center: o,
      _constraints: a,
      size: s,
    } = e,
    { width: l, height: c } = e;
  l === void 0 && (l = s), c === void 0 && (c = s);
  let { aspectRatio: u, autoSize: f } = a,
    d = pc.quickfix({
      left: j(t),
      right: j(n),
      top: j(r),
      bottom: j(i),
      widthType: mc(l),
      heightType: mc(c),
      aspectRatio: u || null,
      fixedSize: f === !0,
    }),
    p = null,
    y = null,
    b = 0,
    S = 0;
  if (d.widthType !== 0 && typeof l == "string") {
    let g = parseFloat(l);
    l.endsWith("fr")
      ? ((b = 3), (p = g))
      : l === "auto"
      ? (b = 2)
      : ((b = 1), (p = g / 100));
  } else l !== void 0 && typeof l != "string" && (p = l);
  if (d.heightType !== 0 && typeof c == "string") {
    let g = parseFloat(c);
    c.endsWith("fr")
      ? ((S = 3), (y = g))
      : c === "auto"
      ? (S = 2)
      : ((S = 1), (y = parseFloat(c) / 100));
  } else c !== void 0 && typeof c != "string" && (y = c);
  let h = 0.5,
    v = 0.5;
  return (
    (o === !0 || o === "x") &&
      ((d.left = !1), typeof t == "string" && (h = parseFloat(t) / 100)),
    (o === !0 || o === "y") &&
      ((d.top = !1), typeof r == "string" && (v = parseFloat(r) / 100)),
    {
      left: d.left ? t : null,
      right: d.right ? n : null,
      top: d.top ? r : null,
      bottom: d.bottom ? i : null,
      widthType: b,
      heightType: S,
      width: p,
      height: y,
      aspectRatio: d.aspectRatio || null,
      centerAnchorX: h,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
var Yh = m.createContext({ parentSize: 0 });
function WF(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Na() {
  return m.useContext(Yh).parentSize;
}
function H1(e) {
  return typeof e == "object";
}
var UF = (e) => {
  let t = Na(),
    { parentSize: n, children: r } = e,
    i = m.useMemo(() => ({ parentSize: n }), [jF(n), XF(n)]);
  return t === 1
    ? r
      ? m.createElement(m.Fragment, null, r)
      : null
    : m.createElement(Yh.Provider, { value: i }, r);
};
function jF(e) {
  return H1(e) ? e.width : e;
}
function XF(e) {
  return H1(e) ? e.height : e;
}
var U4 = Yh.Consumer;
function GF(e, t) {
  return m.createElement(UF, { parentSize: t }, e);
}
function YF(e) {
  let t = Na();
  return Oa(e, t, !0);
}
var KF = ((e) => (
    (e.Boolean = "boolean"),
    (e.Number = "number"),
    (e.String = "string"),
    (e.RichText = "richtext"),
    (e.FusedNumber = "fusednumber"),
    (e.Enum = "enum"),
    (e.SegmentedEnum = "segmentedenum"),
    (e.Color = "color"),
    (e.Image = "image"),
    (e.ResponsiveImage = "responsiveimage"),
    (e.File = "file"),
    (e.ComponentInstance = "componentinstance"),
    (e.Array = "array"),
    (e.EventHandler = "eventhandler"),
    (e.Transition = "transition"),
    (e.Link = "link"),
    (e.Date = "date"),
    (e.Object = "object"),
    (e.Font = "font"),
    (e.PageScope = "pagescope"),
    (e.ScrollSectionRef = "scrollsectionref"),
    (e.CustomCursor = "customcursor"),
    e
  ))(KF || {}),
  vh;
function qF() {
  if (vh !== void 0) return vh;
  let e = document.createElement("div");
  Object.assign(e.style, {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    rowGap: "1px",
  }),
    e.appendChild(document.createElement("div")),
    e.appendChild(document.createElement("div")),
    document.body.appendChild(e);
  let t = e.scrollHeight === 1;
  return e.parentNode && e.parentNode.removeChild(e), (vh = t), t;
}
var ti = "flexbox-gap-not-supported",
  Tx = !1;
function j4() {
  Tx || ((Tx = !0), !qF() && document.body.classList.add(ti));
}
var ZF = `
[data-bingo-component-type="DeprecatedRichText"] p,
[data-bingo-component-type="DeprecatedRichText"] div,
[data-bingo-component-type="DeprecatedRichText"] h1,
[data-bingo-component-type="DeprecatedRichText"] h2,
[data-bingo-component-type="DeprecatedRichText"] h3,
[data-bingo-component-type="DeprecatedRichText"] h4,
[data-bingo-component-type="DeprecatedRichText"] h5,
[data-bingo-component-type="DeprecatedRichText"] h6,
[data-bingo-component-type="DeprecatedRichText"] li,
[data-bingo-component-type="DeprecatedRichText"] ol,
[data-bingo-component-type="DeprecatedRichText"] ul,
[data-bingo-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--bingo-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--bingo-font-style, normal);
    font-weight: var(--bingo-font-weight, 400);
    color: var(--bingo-text-color, #000);
    font-size: var(--bingo-font-size, 16px);
    letter-spacing: var(--bingo-letter-spacing, 0);
    text-transform: var(--bingo-text-transform, none);
    text-decoration: var(--bingo-text-decoration, none);
    line-height: var(--bingo-line-height, 1.2em);
    text-align: var(--bingo-text-alignment, start);
}
`,
  QF = `
[data-bingo-component-type="DeprecatedRichText"] p:not(:first-child),
[data-bingo-component-type="DeprecatedRichText"] div:not(:first-child),
[data-bingo-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-bingo-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-bingo-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-bingo-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-bingo-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-bingo-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-bingo-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-bingo-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-bingo-component-type="DeprecatedRichText"] .bingo-image:not(:first-child) {
    margin-top: var(--bingo-paragraph-spacing, 0);
}
`,
  JF = `
[data-bingo-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
  e2 = `
[data-bingo-component-type="DeprecatedRichText"] a,
[data-bingo-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--bingo-link-font-family, var(--bingo-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--bingo-link-font-style, var(--bingo-font-style, normal));
    font-weight: var(--bingo-link-font-weight, var(--bingo-font-weight, 400));
    color: var(--bingo-link-text-color, var(--bingo-text-color, #000));
    font-size: var(--bingo-link-font-size, var(--bingo-font-size, 16px));
    text-transform: var(--bingo-link-text-transform, var(--bingo-text-transform, none));
    text-decoration: var(--bingo-link-text-decoration, var(--bingo-text-decoration, none));
}
`,
  t2 = `
[data-bingo-component-type="DeprecatedRichText"] a:hover,
[data-bingo-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--bingo-link-hover-font-family, var(--bingo-link-font-family, var(--bingo-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--bingo-link-hover-font-style, var(--bingo-link-font-style, var(--bingo-font-style, normal)));
    font-weight: var(--bingo-link-hover-font-weight, var(--bingo-link-font-weight, var(--bingo-font-weight, 400)));
    color: var(--bingo-link-hover-text-color, var(--bingo-link-text-color, var(--bingo-text-color, #000)));
    font-size: var(--bingo-link-hover-font-size, var(--bingo-link-font-size, var(--bingo-font-size, 16px)));
    text-transform: var(--bingo-link-hover-text-transform, var(--bingo-link-text-transform, var(--bingo-text-transform, none)));
    text-decoration: var(--bingo-link-hover-text-decoration, var(--bingo-link-text-decoration, var(--bingo-text-decoration, none)));
}
`,
  n2 = `
a[data-bingo-page-link-current],
a[data-bingo-page-link-current] span:not([data-text-fill]) {
    font-family: var(--bingo-link-current-font-family, var(--bingo-link-font-family, var(--bingo-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--bingo-link-current-font-style, var(--bingo-link-font-style, var(--bingo-font-style, normal)));
    font-weight: var(--bingo-link-current-font-weight, var(--bingo-link-font-weight, var(--bingo-font-weight, 400)));
    color: var(--bingo-link-current-text-color, var(--bingo-link-text-color, var(--bingo-text-color, #000)));
    font-size: var(--bingo-link-current-font-size, var(--bingo-link-font-size, var(--bingo-font-size, 16px)));
    text-transform: var(--bingo-link-current-text-transform, var(--bingo-link-text-transform, var(--bingo-text-transform, none)));
    text-decoration: var(--bingo-link-current-text-decoration, var(--bingo-link-text-decoration, var(--bingo-text-decoration, none)));
}
`,
  r2 = `
a[data-bingo-page-link-current]:hover,
a[data-bingo-page-link-current]:hover span:not([data-text-fill]) {
    font-family: var(--bingo-link-hover-font-family, var(--bingo-link-current-font-family, var(--bingo-link-font-family, var(--bingo-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--bingo-link-hover-font-style, var(--bingo-link-current-font-style, var(--bingo-link-font-style, var(--bingo-font-style, normal))));
    font-weight: var(--bingo-link-hover-font-weight, var(--bingo-link-current-font-weight, var(--bingo-link-font-weight, var(--bingo-font-weight, 400))));
    color: var(--bingo-link-hover-text-color, var(--bingo-link-current-text-color, var(--bingo-link-text-color, var(--bingo-text-color, #000))));
    font-size: var(--bingo-link-hover-font-size, var(--bingo-link-current-font-size, var(--bingo-link-font-size, var(--bingo-font-size, 16px))));
    text-transform: var(--bingo-link-hover-text-transform, var(--bingo-link-current-text-transform, var(--bingo-link-text-transform, var(--bingo-text-transform, none))));
    text-decoration: var(--bingo-link-hover-text-decoration, var(--bingo-link-current-text-decoration, var(--bingo-link-text-decoration, var(--bingo-text-decoration, none))));
}
`,
  i2 = `
[data-bingo-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
  o2 = `
[data-bingo-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
  a2 = `
[data-bingo-component-type="DeprecatedRichText"] .bingo-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
  s2 = `
[data-bingo-component-type="DeprecatedRichText"] p,
[data-bingo-component-type="DeprecatedRichText"] div,
[data-bingo-component-type="DeprecatedRichText"] h1,
[data-bingo-component-type="DeprecatedRichText"] h2,
[data-bingo-component-type="DeprecatedRichText"] h3,
[data-bingo-component-type="DeprecatedRichText"] h4,
[data-bingo-component-type="DeprecatedRichText"] h5,
[data-bingo-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
  l2 = `
[data-bingo-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --bingo-font-family: Inter, Inter Placeholder, sans-serif;
    --bingo-font-style: normal;
    --bingo-font-weight: 500;
    --bingo-text-color: #000;
    --bingo-font-size: 16px;
    --bingo-letter-spacing: 0;
    --bingo-text-transform: none;
    --bingo-text-decoration: none;
    --bingo-line-height: 1.2em;
    --bingo-text-alignment: start;
}
`,
  c2 = `
[data-bingo-component-type="DeprecatedRichText"] ul,
[data-bingo-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
  u2 = `
[data-bingo-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
  f2 = `
[data-bingo-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
  d2 = `
[data-bingo-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "\u2022";
}
`,
  h2 = [
    '[data-bingo-component-type="DeprecatedRichText"] { cursor: inherit; }',
    l2,
    s2,
    ZF,
    QF,
    JF,
    e2,
    t2,
    n2,
    r2,
    i2,
    o2,
    a2,
    c2,
    u2,
    f2,
    d2,
  ],
  p2 = [
    `
        p.bingo-text,
        div.bingo-text,
        h1.bingo-text,
        h2.bingo-text,
        h3.bingo-text,
        h4.bingo-text,
        h5.bingo-text,
        h6.bingo-text,
        ol.bingo-text,
        ul.bingo-text {
            margin: 0;
            padding: 0;
        }
    `,
    `
        p.bingo-text,
        div.bingo-text,
        h1.bingo-text,
        h2.bingo-text,
        h3.bingo-text,
        h4.bingo-text,
        h5.bingo-text,
        h6.bingo-text,
        li.bingo-text,
        ol.bingo-text,
        ul.bingo-text,
        span.bingo-text:not([data-text-fill]) {
            font-family: var(--bingo-font-family, Inter, Inter Placeholder, sans-serif);
            font-style: var(--bingo-font-style, normal);
            font-weight: var(--bingo-font-weight, 400);
            color: var(--bingo-text-color, #000);
            font-size: calc(var(--bingo-font-size, 16px) * var(--bingo-font-size-scale, 1));
            letter-spacing: var(--bingo-letter-spacing, 0);
            text-transform: var(--bingo-text-transform, none);
            text-decoration: var(--bingo-text-decoration, none);
            line-height: var(--bingo-line-height, 1.2em);
            text-align: var(--bingo-text-alignment, start);
        }
    `,
    `
        .bingo-fit-text .bingo-text {
            white-space: nowrap;
        }
    `,
    `
        strong.bingo-text {
            font-family: var(--bingo-font-family-bold);
            font-style: var(--bingo-font-style-bold);
            font-weight: var(--bingo-font-weight-bold, bolder);
        }
    `,
    `
        em.bingo-text {
            font-family: var(--bingo-font-family-italic);
            font-style: var(--bingo-font-style-italic, italic);
            font-weight: var(--bingo-font-weight-italic);
        }
    `,
    `
        em.bingo-text > strong.bingo-text {
            font-family: var(--bingo-font-family-bold-italic);
            font-style: var(--bingo-font-style-bold-italic, italic);
            font-weight: var(--bingo-font-weight-bold-italic, bolder);
        }
    `,
    `
        p.bingo-text:not(:first-child),
        div.bingo-text:not(:first-child),
        h1.bingo-text:not(:first-child),
        h2.bingo-text:not(:first-child),
        h3.bingo-text:not(:first-child),
        h4.bingo-text:not(:first-child),
        h5.bingo-text:not(:first-child),
        h6.bingo-text:not(:first-child),
        ol.bingo-text:not(:first-child),
        ul.bingo-text:not(:first-child),
        .bingo-image.bingo-text:not(:first-child) {
            margin-top: var(--bingo-paragraph-spacing, 0);
        }
    `,
    `
        li.bingo-text > ul.bingo-text:nth-child(2),
        li.bingo-text > ol.bingo-text:nth-child(2) {
            margin-top: 0;
        }
    `,
    `
        .bingo-text[data-text-fill] {
            display: inline-block;
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--bingo-line-height, 1.3em)) / 2));
            margin: min(0em, calc(calc(1.3em - var(--bingo-line-height, 1.3em)) / -2));
        }
    `,
    `
        code.bingo-text,
        code.bingo-text span.bingo-text:not([data-text-fill]) {
            font-family: var(--bingo-code-font-family, var(--bingo-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--bingo-code-font-style, var(--bingo-font-style, normal));
            font-weight: var(--bingo-code-font-weight, var(--bingo-font-weight, 400));
            color: var(--bingo-code-text-color, var(--bingo-text-color, #000));
            font-size: calc(var(--bingo-font-size, 16px) * var(--bingo-font-size-scale, 1));
            letter-spacing: var(--bingo-letter-spacing, 0);
            line-height: var(--bingo-line-height, 1.2em);
        }
    `,
    `
        a.bingo-text,
        a.bingo-text span.bingo-text:not([data-text-fill]) {
            font-family: var(--bingo-link-font-family, var(--bingo-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--bingo-link-font-style, var(--bingo-font-style, normal));
            font-weight: var(--bingo-link-font-weight, var(--bingo-font-weight, 400));
            color: var(--bingo-link-text-color, var(--bingo-text-color, #000));
            font-size: calc(var(--bingo-link-font-size, var(--bingo-font-size, 16px)) * var(--bingo-font-size-scale, 1));
            text-transform: var(--bingo-link-text-transform, var(--bingo-text-transform, none));
            text-decoration: var(--bingo-link-text-decoration, var(--bingo-text-decoration, none));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--bingo-custom-cursors, pointer);
        }
    `,
    `
        code.bingo-text a.bingo-text,
        code.bingo-text a.bingo-text span.bingo-text:not([data-text-fill]) {
            font-family: var(--bingo-code-font-family, var(--bingo-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--bingo-code-font-style, var(--bingo-font-style, normal));
            font-weight: var(--bingo-code-font-weight, var(--bingo-font-weight, 400));
            color: var(--bingo-link-text-color, var(--bingo-code-text-color, var(--bingo-text-color, #000)));
            font-size: calc(var(--bingo-link-font-size, var(--bingo-font-size, 16px)) * var(--bingo-font-size-scale, 1));
        }
    `,
    `
        a.bingo-text:hover,
        a.bingo-text:hover span.bingo-text:not([data-text-fill]) {
            font-family: var(--bingo-link-hover-font-family, var(--bingo-link-font-family, var(--bingo-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--bingo-link-hover-font-style, var(--bingo-link-font-style, var(--bingo-font-style, normal)));
            font-weight: var(--bingo-link-hover-font-weight, var(--bingo-link-font-weight, var(--bingo-font-weight, 400)));
            color: var(--bingo-link-hover-text-color, var(--bingo-link-text-color, var(--bingo-text-color, #000)));
            font-size: calc(var(--bingo-link-hover-font-size, var(--bingo-link-font-size, var(--bingo-font-size, 16px))) * var(--bingo-font-size-scale, 1));
            text-transform: var(--bingo-link-hover-text-transform, var(--bingo-link-text-transform, var(--bingo-text-transform, none)));
            text-decoration: var(--bingo-link-hover-text-decoration, var(--bingo-link-text-decoration, var(--bingo-text-decoration, none)));
        }
    `,
    `
        code.bingo-text a.bingo-text:hover,
        code.bingo-text a.bingo-text:hover span.bingo-text:not([data-text-fill]) {
            font-family: var(--bingo-code-font-family, var(--bingo-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--bingo-code-font-style, var(--bingo-font-style, normal));
            font-weight: var(--bingo-code-font-weight, var(--bingo-font-weight, 400));
            color: var(--bingo-link-hover-text-color, var(--bingo-link-text-color, var(--bingo-code-text-color, var(--bingo-text-color, #000))));
            font-size: calc(var(--bingo-link-hover-font-size, var(--bingo-link-font-size, var(--bingo-font-size, 16px))) * var(--bingo-font-size-scale, 1));
        }
    `,
    `
        a.bingo-text[data-bingo-page-link-current],
        a.bingo-text[data-bingo-page-link-current] span.bingo-text:not([data-text-fill]) {
            font-family: var(--bingo-link-current-font-family, var(--bingo-link-font-family, var(--bingo-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--bingo-link-current-font-style, var(--bingo-link-font-style, var(--bingo-font-style, normal)));
            font-weight: var(--bingo-link-current-font-weight, var(--bingo-link-font-weight, var(--bingo-font-weight, 400)));
            color: var(--bingo-link-current-text-color, var(--bingo-link-text-color, var(--bingo-text-color, #000)));
            font-size: calc(var(--bingo-link-current-font-size, var(--bingo-link-font-size, var(--bingo-font-size, 16px))) * var(--bingo-font-size-scale, 1));
            text-transform: var(--bingo-link-current-text-transform, var(--bingo-link-text-transform, var(--bingo-text-transform, none)));
            text-decoration: var(--bingo-link-current-text-decoration, var(--bingo-link-text-decoration, var(--bingo-text-decoration, none)));
        }
    `,
    `
        code.bingo-text a.bingo-text[data-bingo-page-link-current],
        code.bingo-text a.bingo-text[data-bingo-page-link-current] span.bingo-text:not([data-text-fill]) {
            font-family: var(--bingo-code-font-family, var(--bingo-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--bingo-code-font-style, var(--bingo-font-style, normal));
            font-weight: var(--bingo-code-font-weight, var(--bingo-font-weight, 400));
            color: var(--bingo-link-current-text-color, var(--bingo-link-text-color, var(--bingo-code-text-color, var(--bingo-text-color, #000))));
            font-size: calc(var(--bingo-link-current-font-size, var(--bingo-link-font-size, var(--bingo-font-size, 16px))) * var(--bingo-font-size-scale, 1));
        }
    `,
    `
        a.bingo-text[data-bingo-page-link-current]:hover,
        a.bingo-text[data-bingo-page-link-current]:hover span.bingo-text:not([data-text-fill]) {
            font-family: var(--bingo-link-hover-font-family, var(--bingo-link-current-font-family, var(--bingo-link-font-family, var(--bingo-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--bingo-link-hover-font-style, var(--bingo-link-current-font-style, var(--bingo-link-font-style, var(--bingo-font-style, normal))));
            font-weight: var(--bingo-link-hover-font-weight, var(--bingo-link-current-font-weight, var(--bingo-link-font-weight, var(--bingo-font-weight, 400))));
            color: var(--bingo-link-hover-text-color, var(--bingo-link-current-text-color, var(--bingo-link-text-color, var(--bingo-text-color, #000))));
            font-size: calc(var(--bingo-link-hover-font-size, var(--bingo-link-current-font-size, var(--bingo-link-font-size, var(--bingo-font-size, 16px)))) * var(--bingo-font-size-scale, 1));
            text-transform: var(--bingo-link-hover-text-transform, var(--bingo-link-current-text-transform, var(--bingo-link-text-transform, var(--bingo-text-transform, none))));
            text-decoration: var(--bingo-link-hover-text-decoration, var(--bingo-link-current-text-decoration, var(--bingo-link-text-decoration, var(--bingo-text-decoration, none))));
        }
    `,
    `
        code.bingo-text a.bingo-text[data-bingo-page-link-current]:hover,
        code.bingo-text a.bingo-text[data-bingo-page-link-current]:hover span.bingo-text:not([data-text-fill]) {
            font-family: var(--bingo-code-font-family, var(--bingo-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--bingo-code-font-style, var(--bingo-font-style, normal));
            font-weight: var(--bingo-code-font-weight, var(--bingo-font-weight, 400));
            color: var(--bingo-link-hover-text-color, var(--bingo-link-current-text-color, var(--bingo-link-text-color, var(--bingo-code-text-color, var(--bingo-text-color, #000)))));
            font-size: calc(var(--bingo-link-hover-font-size, var(--bingo-link-current-font-size, var(--bingo-link-font-size, var(--bingo-font-size, 16px)))) * var(--bingo-font-size-scale, 1));
        }
    `,
    `
        .bingo-image.bingo-text {
            display: block;
            max-width: 100%;
            height: auto;
        }
    `,
    `
        .text-styles-preset-reset.bingo-text {
            --bingo-font-family: Inter, Inter Placeholder, sans-serif;
            --bingo-font-style: normal;
            --bingo-font-weight: 500;
            --bingo-text-color: #000;
            --bingo-font-size: 16px;
            --bingo-letter-spacing: 0;
            --bingo-text-transform: none;
            --bingo-text-decoration: none;
            --bingo-line-height: 1.2em;
            --bingo-text-alignment: start;
        }
    `,
    `
        ol.bingo-text {
            --list-style-type: decimal;
        }
    `,
    `
        ul.bingo-text,
        ol.bingo-text {
            display: table;
            width: 100%;
        }
    `,
    `
        li.bingo-text {
            display: table-row;
            counter-increment: list-item;
            list-style: none;
        }
    `,
    `
        ol.bingo-text > li.bingo-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: counter(list-item, var(--list-style-type)) ".";
            white-space: nowrap;
        }
    `,
    `
        ul.bingo-text > li.bingo-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: "\u2022";
        }
    `,
    `
        .bingo-text-module[style*="aspect-ratio"] > :first-child {
            width: 100%;
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .bingo-text-module[style*="aspect-ratio"] {
                position: relative;
            }
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .bingo-text-module[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .bingo-text-module[style*="aspect-ratio"] > :first-child {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        }
    `,
  ],
  m2 = new Set(),
  gh;
function N1(e, t, n = m2) {
  if (!(!e || n.has(e) || typeof document > "u")) {
    if ((n.add(e), !t)) {
      if (!gh) {
        let r = document.createElement("style");
        if (
          (r.setAttribute("type", "text/css"),
          r.setAttribute("data-bingo-css", "true"),
          !document.head)
        ) {
          console.warn(
            "not injecting CSS: the document is missing a <head> element"
          );
          return;
        }
        if ((document.head.appendChild(r), r.sheet)) gh = r.sheet;
        else {
          console.warn(
            "not injecting CSS: injected <style> element does not have a sheet",
            r
          );
          return;
        }
      }
      t = gh;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
var v2 = ["[data-bingo-component-type] { position: absolute; }"],
  g2 = `
[data-bingo-component-type="Text"] > * {
    text-align: var(--bingo-text-alignment, start);
}`,
  y2 = `
[data-bingo-component-type="Text"] span span,
[data-bingo-component-type="Text"] p span,
[data-bingo-component-type="Text"] h1 span,
[data-bingo-component-type="Text"] h2 span,
[data-bingo-component-type="Text"] h3 span,
[data-bingo-component-type="Text"] h4 span,
[data-bingo-component-type="Text"] h5 span,
[data-bingo-component-type="Text"] h6 span {
    display: block;
}`,
  b2 = `
[data-bingo-component-type="Text"] span span span,
[data-bingo-component-type="Text"] p span span,
[data-bingo-component-type="Text"] h1 span span,
[data-bingo-component-type="Text"] h2 span span,
[data-bingo-component-type="Text"] h3 span span,
[data-bingo-component-type="Text"] h4 span span,
[data-bingo-component-type="Text"] h5 span span,
[data-bingo-component-type="Text"] h6 span span {
    display: unset;
}`,
  x2 = `
[data-bingo-component-type="Text"] div div span,
[data-bingo-component-type="Text"] a div span,
[data-bingo-component-type="Text"] span span span,
[data-bingo-component-type="Text"] p span span,
[data-bingo-component-type="Text"] h1 span span,
[data-bingo-component-type="Text"] h2 span span,
[data-bingo-component-type="Text"] h3 span span,
[data-bingo-component-type="Text"] h4 span span,
[data-bingo-component-type="Text"] h5 span span,
[data-bingo-component-type="Text"] h6 span span,
[data-bingo-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--bingo-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    text-decoration: var(--text-decoration);
    line-height: var(--line-height);
}`,
  S2 = `
[data-bingo-component-type="Text"] div div span,
[data-bingo-component-type="Text"] a div span,
[data-bingo-component-type="Text"] span span span,
[data-bingo-component-type="Text"] p span span,
[data-bingo-component-type="Text"] h1 span span,
[data-bingo-component-type="Text"] h2 span span,
[data-bingo-component-type="Text"] h3 span span,
[data-bingo-component-type="Text"] h4 span span,
[data-bingo-component-type="Text"] h5 span span,
[data-bingo-component-type="Text"] h6 span span,
[data-bingo-component-type="Text"] a {
    --font-family: var(--bingo-font-family);
    --font-style: var(--bingo-font-style);
    --font-weight: var(--bingo-font-weight);
    --text-color: var(--bingo-text-color);
    --letter-spacing: var(--bingo-letter-spacing);
    --font-size: var(--bingo-font-size);
    --text-transform: var(--bingo-text-transform);
    --text-decoration: var(--bingo-text-decoration);
    --line-height: var(--bingo-line-height);
}`,
  w2 = `
[data-bingo-component-type="Text"] a,
[data-bingo-component-type="Text"] a div span,
[data-bingo-component-type="Text"] a span span span,
[data-bingo-component-type="Text"] a p span span,
[data-bingo-component-type="Text"] a h1 span span,
[data-bingo-component-type="Text"] a h2 span span,
[data-bingo-component-type="Text"] a h3 span span,
[data-bingo-component-type="Text"] a h4 span span,
[data-bingo-component-type="Text"] a h5 span span,
[data-bingo-component-type="Text"] a h6 span span {
    --font-family: var(--bingo-link-font-family, var(--bingo-font-family));
    --font-style: var(--bingo-link-font-style, var(--bingo-font-style));
    --font-weight: var(--bingo-link-font-weight, var(--bingo-font-weight));
    --text-color: var(--bingo-link-text-color, var(--bingo-text-color));
    --font-size: var(--bingo-link-font-size, var(--bingo-font-size));
    --text-transform: var(--bingo-link-text-transform, var(--bingo-text-transform));
    --text-decoration: var(--bingo-link-text-decoration, var(--bingo-text-decoration));
}`,
  k2 = `
[data-bingo-component-type="Text"] a:hover,
[data-bingo-component-type="Text"] a div span:hover,
[data-bingo-component-type="Text"] a span span span:hover,
[data-bingo-component-type="Text"] a p span span:hover,
[data-bingo-component-type="Text"] a h1 span span:hover,
[data-bingo-component-type="Text"] a h2 span span:hover,
[data-bingo-component-type="Text"] a h3 span span:hover,
[data-bingo-component-type="Text"] a h4 span span:hover,
[data-bingo-component-type="Text"] a h5 span span:hover,
[data-bingo-component-type="Text"] a h6 span span:hover {
    --font-family: var(--bingo-link-hover-font-family, var(--bingo-link-font-family, var(--bingo-font-family)));
    --font-style: var(--bingo-link-hover-font-style, var(--bingo-link-font-style, var(--bingo-font-style)));
    --font-weight: var(--bingo-link-hover-font-weight, var(--bingo-link-font-weight, var(--bingo-font-weight)));
    --text-color: var(--bingo-link-hover-text-color, var(--bingo-link-text-color, var(--bingo-text-color)));
    --font-size: var(--bingo-link-hover-font-size, var(--bingo-link-font-size, var(--bingo-font-size)));
    --text-transform: var(--bingo-link-hover-text-transform, var(--bingo-link-text-transform, var(--bingo-text-transform)));
    --text-decoration: var(--bingo-link-hover-text-decoration, var(--bingo-link-text-decoration, var(--bingo-text-decoration)));
}`,
  C2 = `
[data-bingo-component-type="Text"].isCurrent a,
[data-bingo-component-type="Text"].isCurrent a div span,
[data-bingo-component-type="Text"].isCurrent a span span span,
[data-bingo-component-type="Text"].isCurrent a p span span,
[data-bingo-component-type="Text"].isCurrent a h1 span span,
[data-bingo-component-type="Text"].isCurrent a h2 span span,
[data-bingo-component-type="Text"].isCurrent a h3 span span,
[data-bingo-component-type="Text"].isCurrent a h4 span span,
[data-bingo-component-type="Text"].isCurrent a h5 span span,
[data-bingo-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--bingo-link-current-font-family, var(--bingo-link-font-family, var(--bingo-font-family)));
    --font-style: var(--bingo-link-current-font-style, var(--bingo-link-font-style, var(--bingo-font-style)));
    --font-weight: var(--bingo-link-current-font-weight, var(--bingo-link-font-weight, var(--bingo-font-weight)));
    --text-color: var(--bingo-link-current-text-color, var(--bingo-link-text-color, var(--bingo-text-color)));
    --font-size: var(--bingo-link-current-font-size, var(--bingo-link-font-size, var(--bingo-font-size)));
    --text-transform: var(--bingo-link-current-text-transform, var(--bingo-link-text-transform, var(--bingo-text-transform)));
    --text-decoration: var(--bingo-link-current-text-decoration, var(--bingo-link-text-decoration, var(--bingo-text-decoration)));
}`,
  E2 = [
    '[data-bingo-component-type="Text"] { cursor: inherit; }',
    "[data-bingo-component-text-autosized] * { white-space: pre; }",
    g2,
    y2,
    b2,
    x2,
    S2,
    w2,
    k2,
    C2,
  ],
  T2 = `
:not([data-bingo-generated]) > [data-bingo-stack-content-wrapper] > *,
:not([data-bingo-generated]) > [data-bingo-stack-content-wrapper] > [data-bingo-component-type],
:not([data-bingo-generated]) > [data-bingo-stack-content-wrapper] > [data-bingo-legacy-stack-gap-enabled] > *,
:not([data-bingo-generated]) > [data-bingo-stack-content-wrapper] > [data-bingo-legacy-stack-gap-enabled] > [data-bingo-component-type] {
    position: relative;
}`,
  R2 = [
    `[data-bingo-stack-content-wrapper][data-bingo-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
    `.${ti} [data-bingo-stack-content-wrapper][data-bingo-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`,
  ],
  I2 = `
.${ti} [data-bingo-legacy-stack-gap-enabled="true"] > *, [data-bingo-legacy-stack-gap-enabled="true"][data-bingo-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`,
  P2 = `
.${ti}
[data-bingo-stack-direction-reverse="false"]
[data-bingo-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-bingo-stack-direction-reverse="false"]
[data-bingo-legacy-stack-gap-enabled="true"][data-bingo-stack-flexbox-gap="false"]
> *:first-child,
.${ti}
[data-bingo-stack-direction-reverse="true"]
[data-bingo-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-bingo-stack-direction-reverse="true"]
[data-bingo-legacy-stack-gap-enabled="true"][data-bingo-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`,
  _2 = `
.${ti}
[data-bingo-stack-direction-reverse="false"]
[data-bingo-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-bingo-stack-direction-reverse="false"]
[data-bingo-legacy-stack-gap-enabled="true"][data-bingo-stack-flexbox-gap="false"]
> *:last-child,
.${ti}
[data-bingo-stack-direction-reverse="true"]
[data-bingo-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-bingo-stack-direction-reverse="true"]
[data-bingo-legacy-stack-gap-enabled="true"][data-bingo-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`,
  F2 = [T2, I2, ...R2, P2, _2],
  L2 = [
    `
NavigationContainer
[data-bingo-component-type="NavigationContainer"] > *,
[data-bingo-component-type="NavigationContainer"] > [data-bingo-component-type] {
    position: relative;
}`,
  ],
  M2 = [
    '[data-bingo-component-type="Scroll"]::-webkit-scrollbar { display: none; }',
    '[data-bingo-component-type="ScrollContentWrapper"] > * { position: relative; }',
  ],
  O2 = [
    '[data-bingo-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }',
    '[data-bingo-component-type="NativeScroll"] > * { position: relative; }',
    '[data-bingo-component-type="NativeScroll"].direction-both { overflow-x: scroll; overflow-y: scroll; }',
    '[data-bingo-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: scroll; }',
    '[data-bingo-component-type="NativeScroll"].direction-horizontal { overflow-x: scroll; overflow-y: hidden; }',
    '[data-bingo-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }',
    '[data-bingo-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }',
    '[data-bingo-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }',
  ],
  A2 = [
    '[data-bingo-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }',
  ],
  V2 = [
    '[data-bingo-component-type="PageContentWrapper"] > *, [data-bingo-component-type="PageContentWrapper"] > [data-bingo-component-type] { position: relative; }',
  ],
  D2 = [
    '[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }',
  ],
  B2 = [
    '[data-bingo-cursor="pointer"] { cursor: pointer; }',
    '[data-bingo-cursor="grab"] { cursor: grab; }',
    '[data-bingo-cursor="grab"]:active { cursor: grabbing; }',
  ],
  z2 = [
    '[data-bingo-component-type="Frame"] *, [data-bingo-component-type="Stack"] * { pointer-events: auto; }',
    "[data-bingo-generated] * { pointer-events: unset }",
  ],
  H2 = [
    `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
  ],
  N2 = [
    '[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
    '[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
  ],
  $2 = (e) => (e ? z2 : []),
  W2 = [".svgContainer svg { display: block; }"],
  $1 = (e) => [
    ...v2,
    ...E2,
    ...p2,
    ...h2,
    ...F2,
    ...L2,
    ...M2,
    ...O2,
    ...V2,
    ...A2,
    ...D2,
    ...B2,
    ...$2(e),
    ...W2,
    ...H2,
    ...N2,
  ],
  U2 = $1(!1),
  j2 = $1(!0),
  Rx = !1;
function $a() {
  if (Rx) return;
  Rx = !0;
  let e = we.current() === "PREVIEW" ? j2 : U2;
  for (let t of e) N1(t, void 0, void 0);
}
function W1(e) {
  return typeof e == "function";
}
function X2(e) {
  return typeof e == "boolean";
}
function Pe(e) {
  return typeof e == "string";
}
function An(e) {
  return typeof e == "number" && Number.isFinite(e);
}
function Kh(e) {
  return Array.isArray(e);
}
function vt(e) {
  return e !== null && typeof e == "object" && !Kh(e);
}
function Aa(e) {
  return typeof e > "u";
}
function G2(e) {
  return vt(e) || W1(e);
}
var Ix = "optional";
function Y2(e) {
  return !!e && Ix in e && e[Ix] === !0;
}
function K2(e) {
  try {
    switch (e.type) {
      case "string":
      case "color":
      case "date":
      case "link":
        return Pe(e.defaultValue) ? e.defaultValue : void 0;
      case "boolean":
        return X2(e.defaultValue) ? e.defaultValue : void 0;
      case "enum":
        return Aa(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
          ? e.defaultValue
          : void 0;
      case "fusednumber":
      case "number":
        return An(e.defaultValue) ? e.defaultValue : void 0;
      case "transition":
        return vt(e.defaultValue) ? e.defaultValue : void 0;
      case "font":
        return vt(e.defaultValue) ? e.defaultValue : void 0;
      case "object": {
        let t = vt(e.defaultValue) ? e.defaultValue : {};
        return vt(e.controls) && U1(t, e.controls), t;
      }
      case "array":
        return Kh(e.defaultValue) ? e.defaultValue : void 0;
      case "file":
      case "image":
      case "richtext":
      case "pagescope":
      case "eventhandler":
      case "segmentedenum":
      case "responsiveimage":
      case "componentinstance":
      case "scrollsectionref":
      case "customcursor":
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function U1(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!Aa(i) || Y2(r)) continue;
    let o = K2(r);
    Aa(o) || (e[n] = o);
  }
}
function q2(e) {
  if (vt(e.defaultProps)) return e.defaultProps;
  let t = {};
  return (e.defaultProps = t), t;
}
function Z2(e, t) {
  if (!G2(e)) return;
  let n = q2(e);
  U1(n, t);
}
function X4(e, t) {
  Object.assign(e, { propertyControls: t }), Z2(e, t);
}
var fn = {
    iPhonePro: {
      screenRadius: 0,
      clayBezelLeft: 21,
      clayBezelRight: 21,
      clayBezelTop: 21,
      clayBezelBottom: 21,
      clayBezelRadius: 38 + 21,
    },
    iPhone8: {
      screenRadius: 0,
      clayBezelLeft: 24,
      clayBezelRight: 24,
      clayBezelTop: 96,
      clayBezelBottom: 96,
      clayBezelRadius: 38 * 1.5,
    },
    iPadPro: {
      screenRadius: 25,
      clayBezelLeft: 38,
      clayBezelRight: 38,
      clayBezelTop: 38,
      clayBezelBottom: 38,
      clayBezelRadius: 25 + 38,
    },
    desktop: {
      clayBezelLeft: 20,
      clayBezelRight: 20,
      clayBezelTop: 20,
      clayBezelBottom: 20,
      clayBezelRadius: 20,
    },
  },
  Q2 = [
    {
      id: "iphone-12",
      title: "iPhone 12",
      screenRadius: 0,
      clayBezelLeft: 22,
      clayBezelRight: 22,
      clayBezelTop: 22,
      clayBezelBottom: 22,
      clayBezelRadius: 66,
      screenWidth: 390,
      screenHeight: 844,
      externalClay: {
        width: 500,
        height: 974,
        screenOffsetTop: 65,
        screenOffsetLeft: 55,
      },
      screenMask:
        '<g style="transform: scale(0.5);"><path d="M171.2 0c2.3 0 4 .5 5.4 1.3 1.6 1 2.8 2.2 3.7 3.8.8 1.6 1.2 2.3 1.2 4.9 0 12 2.2 19 6.2 26.5s9.8 13.3 17.3 17.4c7.5 4 15.8 6.1 30.6 6.1h311.5c14.3 0 22.5-2.2 29.9-6.1 7.5-4 13.3-10 17.3-17.4 4-7.5 6.2-14.5 6.2-26.5 0-2.6.4-3.2 1.1-4.9.8-1.6 2-2.9 3.4-3.8 1.4-.8 3.2-1.3 5.4-1.3h54.2c40.1 0 54.7 4.2 69.4 12a81.8 81.8 0 0134 34c7.8 14.7 12 29.3 12 69.4v1457.2c0 40.1-4.2 54.7-12 69.4a81.8 81.8 0 01-34 34c-14.7 7.8-29.3 12-69.4 12H115.4c-40.1 0-54.7-4.2-69.4-12a81.8 81.8 0 01-34-34c-7.8-14.7-12-29.3-12-69.4V115.4C0 75.3 4.2 60.7 12 46a81.8 81.8 0 0134-34C60.7 4.2 75.3 0 115.4 0h55.4z" fill="#000" fill-rule="evenodd"/></g>',
      realisticImage: {
        width: 490,
        height: 944,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [
          { id: "black", title: "Black", colorValue: "#2E2C36" },
          { id: "white", title: "White", colorValue: "#F7F3F0" },
          { id: "blue", title: "Blue", colorValue: "#14496D" },
          { id: "green", title: "Green", colorValue: "#DAF0D9" },
          { id: "red", title: "Red", colorValue: "#DB4141" },
        ],
        handOffset: { left: 29, right: 29, bottom: 29 },
      },
    },
    {
      id: "iphone-12-mini",
      title: "iPhone 12 Mini",
      screenRadius: 0,
      clayBezelLeft: 22,
      clayBezelRight: 22,
      clayBezelTop: 22,
      clayBezelBottom: 22,
      clayBezelRadius: 66,
      screenWidth: 360,
      screenHeight: 780,
      externalClay: {
        width: 450,
        height: 890,
        screenOffsetTop: 55,
        screenOffsetLeft: 45,
      },
      screenMask:
        '<g style="transform: scale(0.5);"><path d="M142 18c0 19 14 47 43 48h349c31 0 44-29 44-48 0-12 4-18 14-18h18c38 0 52 4 66 11 14 8 25 19 33 33v1c7 14 11 28 11 65v1340c0 38-4 52-11 66-8 14-19 25-33 33h-1c-14 7-28 11-65 11H110c-38 0-52-4-66-11-14-8-25-19-33-33v-1c-7-13-11-27-11-64V110c0-38 4-52 11-66 8-14 19-25 33-33h1C58 4 72 0 109 0h16c11 0 17 6 17 18z" fill="#000" fill-rule="evenodd"/></g>',
      realisticImage: {
        width: 460,
        height: 880,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [
          { id: "black", title: "Black", colorValue: "#2E2C36" },
          { id: "white", title: "White", colorValue: "#F7F3F0" },
          { id: "blue", title: "Blue", colorValue: "#14496D" },
          { id: "green", title: "Green", colorValue: "#DAF0D9" },
          { id: "red", title: "Red", colorValue: "#DB4141" },
        ],
        handOffset: { left: 31.5, right: 30.5, bottom: 30 },
      },
    },
    {
      id: "iphone-12-pro",
      title: "iPhone 12 Pro",
      screenRadius: 0,
      clayBezelLeft: 22,
      clayBezelRight: 22,
      clayBezelTop: 22,
      clayBezelBottom: 22,
      clayBezelRadius: 66,
      screenWidth: 390,
      screenHeight: 844,
      externalClay: {
        width: 494,
        height: 968,
        screenOffsetTop: 62,
        screenOffsetLeft: 52,
      },
      screenMask:
        '<g style="transform: scale(0.5);"><path d="M171.2 0c2.3 0 4 .5 5.4 1.3 1.6 1 2.8 2.2 3.7 3.8.8 1.6 1.2 2.3 1.2 4.9 0 12 2.2 19 6.2 26.5s9.8 13.3 17.3 17.4c7.5 4 15.8 6.1 30.6 6.1h311.5c14.3 0 22.5-2.2 29.9-6.1 7.5-4 13.3-10 17.3-17.4 4-7.5 6.2-14.5 6.2-26.5 0-2.6.4-3.2 1.1-4.9.8-1.6 2-2.9 3.4-3.8 1.4-.8 3.2-1.3 5.4-1.3h54.2c40.1 0 54.7 4.2 69.4 12a81.8 81.8 0 0134 34c7.8 14.7 12 29.3 12 69.4v1457.2c0 40.1-4.2 54.7-12 69.4a81.8 81.8 0 01-34 34c-14.7 7.8-29.3 12-69.4 12H115.4c-40.1 0-54.7-4.2-69.4-12a81.8 81.8 0 01-34-34c-7.8-14.7-12-29.3-12-69.4V115.4C0 75.3 4.2 60.7 12 46a81.8 81.8 0 0134-34C60.7 4.2 75.3 0 115.4 0h55.4z" fill="#000" fill-rule="evenodd"/></g>',
      realisticImage: {
        width: 490,
        height: 944,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [
          { id: "graphite", title: "Graphite", colorValue: "#585753" },
          { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
          { id: "pacific-blue", title: "Pacific Blue", colorValue: "#415D6C" },
          { id: "gold", title: "Gold", colorValue: "#FCECD5" },
        ],
        handOffset: { left: 29, right: 29, bottom: 29 },
      },
    },
    {
      id: "iphone-12-pro-max",
      title: "iPhone 12 Pro Max",
      screenRadius: 50,
      clayBezelLeft: 22,
      clayBezelRight: 22,
      clayBezelTop: 22,
      clayBezelBottom: 22,
      clayBezelRadius: 66,
      screenWidth: 428,
      screenHeight: 926,
      externalClay: {
        width: 532,
        height: 1050,
        screenOffsetTop: 62,
        screenOffsetLeft: 52,
      },
      screenMask:
        '<path d="M102 0c6 0 7 3 7 9 0 10 7 23 24 23h164c13 0 22-12 22-23 0-6 1-9 7-9h34c24 0 32 2 41 7s15 11 20 20 7 17 7 41v790c0 24-2 32-7 41s-11 15-20 20-17 7-41 7H68c-24 0-32-2-41-7s-15-11-20-20-7-17-7-41V68c0-24 2-32 7-41S18 12 27 7s17-7 41-7h34z" fill="#000" fill-rule="evenodd"/>',
      realisticImage: {
        width: 528,
        height: 1026,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [
          { id: "graphite", title: "Graphite", colorValue: "#585753" },
          { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
          { id: "pacific-blue", title: "Pacific Blue", colorValue: "#415D6C" },
          { id: "gold", title: "Gold", colorValue: "#FCECD5" },
        ],
        handOffset: { left: 28.5, right: 28, bottom: 29 },
      },
    },
    {
      id: "iphone-11",
      title: "iPhone 11",
      screenRadius: 0,
      clayBezelLeft: 35.5,
      clayBezelRight: 35.5,
      clayBezelTop: 35.5,
      clayBezelBottom: 35.5,
      clayBezelRadius: 77,
      screenWidth: 414,
      screenHeight: 896,
      externalClay: {
        width: 524,
        height: 1026,
        screenOffsetTop: 65,
        screenOffsetLeft: 55,
      },
      screenMask:
        '<path d="M85.5 0C89.1 0 92 3 92 6.5c.3 6 1.5 10 3.4 13.5 2.2 4.1 5.5 7.4 9.6 9.6 4.2 2.2 8.9 3.4 17 3.4h170c8.1 0 12.8-1.2 17-3.4 4.1-2.2 7.4-5.5 9.6-9.6A31 31 0 00322 6.5c0-3.6 3-6.5 6.5-6.5h32.3c18.5 0 25.2 2 32 5.5 6.7 3.7 12 9 15.7 15.7 3.6 6.8 5.5 13.5 5.5 32v789.6c0 18.5-2 25.2-5.5 32-3.7 6.7-9 12-15.7 15.7-6.8 3.6-13.5 5.5-32 5.5H53.2c-18.5 0-25.2-2-32-5.5-6.7-3.7-12-9-15.7-15.7C2 868 0 861.3 0 842.8V53.2c0-18.5 2-25.2 5.5-32 3.7-6.7 9-12 15.7-15.7C28 2 34.7 0 53.2 0h32.3z" fill="#000" fill-rule="nonzero"/>',
      realisticImage: {
        width: 514,
        height: 996,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [
          { id: "black", title: "Black", colorValue: "#202120" },
          { id: "white", title: "White", colorValue: "#F9F6EF" },
          { id: "purple", title: "Purple", colorValue: "#D1CDDB" },
          { id: "green", title: "Green", colorValue: "#ADE0CD" },
          { id: "red", title: "Red", colorValue: "#B90D2E" },
          { id: "yellow", title: "Yellow", colorValue: "#FFE680" },
        ],
        handOffset: { left: 14.5, right: 14.5, bottom: 14.5 },
      },
    },
    {
      id: "iphone-11-pro",
      title: "iPhone 11 Pro",
      ...fn.iPhonePro,
      screenWidth: 375,
      screenHeight: 812,
      externalClay: {
        width: 485,
        height: 942,
        screenOffsetTop: 65,
        screenOffsetLeft: 55,
      },
      screenMask:
        '<path d="M292 8.668V9c0 9.266-7.07 21-23.332 21h-162C90.402 30 83.332 18.266 83.332 9v-.332c0-4.285 0-8.668-7.664-8.668H43.332C16.312 0 0 16.313 0 43.332v725.336C0 795.688 16.313 812 43.332 812h288.336c27.02 0 43.332-16.313 43.332-43.332V43.332C375 16.312 358.687 0 331.668 0h-32C292 0 292 4.383 292 8.668zm0 0"/>',
      realisticImage: {
        width: 475,
        height: 912,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#52514F" },
          { id: "silver", title: "Silver", colorValue: "#EBEBE3" },
          { id: "gold", title: "Gold", colorValue: "#FBD7BD" },
          {
            id: "midnight-green",
            title: "Midnight Green",
            colorValue: "#4F5850",
          },
        ],
        handOffset: { left: 24.5, right: 24.5, bottom: 23.5 },
      },
    },
    {
      id: "iphone-11-pro-max",
      title: "iPhone 11 Pro Max",
      ...fn.iPhonePro,
      screenWidth: 414,
      screenHeight: 896,
      externalClay: {
        width: 524,
        height: 1026,
        screenOffsetTop: 65,
        screenOffsetLeft: 55,
      },
      screenMask:
        '<path d="M96 0c3.313 0 5.91 2.688 6 6 .18 6.645 1.191 10.148 2.938 13.41 1.917 3.586 4.73 6.402 8.316 8.317 3.586 1.918 7.441 2.941 15.445 2.941h156.602c8.004 0 11.86-1.023 15.445-2.941 3.586-1.915 6.399-4.73 8.317-8.317 1.746-3.265 2.746-6.758 2.937-13.41.094-3.313 2.688-6 6-6h46.004c17.387 0 23.687 1.809 30.043 5.21 6.355 3.4 11.344 8.388 14.742 14.743C412.191 26.31 414 32.61 414 49.996v796.008c0 17.387-1.809 23.687-5.21 30.043-3.4 6.355-8.388 11.344-14.743 14.742-6.356 3.402-12.656 5.211-30.043 5.211H49.996c-17.387 0-23.687-1.809-30.043-5.21-6.355-3.4-11.344-8.388-14.742-14.743C1.809 869.69 0 863.39 0 846.004V49.996C0 32.61 1.809 26.31 5.21 19.953c3.4-6.355 8.388-11.344 14.743-14.742C26.31 1.809 32.61 0 49.996 0zm0 0"/>',
      realisticImage: {
        width: 514,
        height: 996,
        screenOffsetLeft: 50,
        screenOffsetTop: 50,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#52514F" },
          { id: "silver", title: "Silver", colorValue: "#EBEBE3" },
          { id: "gold", title: "Gold", colorValue: "#FBD7BD" },
          {
            id: "midnight-green",
            title: "Midnight Green",
            colorValue: "#4F5850",
          },
        ],
        handOffset: { left: 23.5, right: 24.5, bottom: 24 },
      },
    },
    {
      id: "iphone-8",
      title: "iPhone 8",
      ...fn.iPhone8,
      screenWidth: 375,
      screenHeight: 667,
      externalClay: {
        width: 491,
        height: 971,
        screenOffsetLeft: 58,
        screenOffsetTop: 152,
      },
      realisticImage: {
        width: 475,
        height: 927,
        screenOffsetLeft: 50,
        screenOffsetTop: 130,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#28282A" },
          { id: "silver", title: "Silver", colorValue: "#DFE1E2" },
          { id: "gold", title: "Gold", colorValue: "#F6E6DB" },
        ],
        handOffset: { left: 22, right: 22, bottom: 18.5 },
      },
    },
    {
      id: "iphone-8-plus",
      title: "iPhone 8 Plus",
      ...fn.iPhone8,
      screenWidth: 414,
      screenHeight: 736,
      externalClay: {
        width: 530,
        height: 1064,
        screenOffsetLeft: 58,
        screenOffsetTop: 164,
      },
      realisticImage: {
        width: 514,
        height: 996,
        screenOffsetLeft: 50,
        screenOffsetTop: 130,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#28282A" },
          { id: "silver", title: "Silver", colorValue: "#DFE1E2" },
          { id: "gold", title: "Gold", colorValue: "#F6E6DB" },
        ],
        handOffset: { left: 21, right: 20.5, bottom: 19 },
      },
    },
    {
      id: "iphone-se",
      title: "iPhone SE",
      screenWidth: 320,
      screenHeight: 568,
      screenRadius: 0,
      clayBezelLeft: 20,
      clayBezelRight: 20,
      clayBezelTop: 112,
      clayBezelBottom: 112,
      clayBezelRadius: 38 * 1.5,
      externalClay: {
        width: 436,
        height: 872,
        screenOffsetLeft: 58,
        screenOffsetTop: 152,
      },
      realisticImage: {
        width: 420,
        height: 828,
        screenOffsetLeft: 50,
        screenOffsetTop: 130,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#C3C4C8" },
          { id: "silver", title: "Silver", colorValue: "#E1E2E4" },
          { id: "gold", title: "Gold", colorValue: "#EFD8BD" },
          { id: "rose-gold", title: "Rose Gold", colorValue: "#F7CFCA" },
        ],
        handOffset: { left: 22, right: 22, bottom: 26.5 },
      },
    },
    {
      id: "samsung-galaxy-s7",
      title: "Samsung Galaxy S7",
      screenRadius: 0,
      clayBezelLeft: 22,
      clayBezelRight: 22,
      clayBezelTop: 22,
      clayBezelBottom: 22,
      clayBezelRadius: 66,
      screenWidth: 360,
      screenHeight: 640,
      externalClay: {
        width: 454,
        height: 880,
        screenOffsetTop: 120,
        screenOffsetLeft: 47,
      },
      realisticImage: {
        width: 440,
        height: 860,
        screenOffsetLeft: 40,
        screenOffsetTop: 110,
        availableColors: [
          { id: "black", title: "Black", colorValue: "#2E2C36" },
          { id: "white", title: "White", colorValue: "#F7F3F0" },
          { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
          { id: "gold", title: "Gold", colorValue: "#FCECD5" },
        ],
        handOffset: { left: 26, right: 25.5, bottom: 32 },
      },
    },
    {
      id: "samsung-note-10",
      title: "Samsung Note 10",
      screenWidth: 360,
      screenHeight: 760,
      screenRadius: 10,
      clayBezelLeft: 7,
      clayBezelRight: 7,
      clayBezelTop: 15,
      clayBezelBottom: 15,
      clayBezelRadius: 15,
    },
    {
      id: "pixel-5",
      title: "Google Pixel 5",
      screenRadius: 31,
      clayBezelLeft: 22,
      clayBezelRight: 22,
      clayBezelTop: 22,
      clayBezelBottom: 22,
      clayBezelRadius: 66,
      screenWidth: 360,
      screenHeight: 780,
      externalClay: {
        width: 460,
        height: 900,
        screenOffsetTop: 60,
        screenOffsetLeft: 50,
      },
      realisticImage: {
        width: 920 / 2,
        height: 1760 / 2,
        screenOffsetLeft: 100 / 2,
        screenOffsetTop: 100 / 2,
        availableColors: [
          { id: "just-black", title: "Just Black", colorValue: "#2E2C36" },
          { id: "sorta-sage", title: "Sorta Sage", colorValue: "#B7C9C0" },
        ],
        handOffset: { left: 31.5, right: 31, bottom: 31 },
      },
    },
    {
      id: "pixel-4",
      title: "Google Pixel 4",
      screenWidth: 360,
      screenHeight: 760,
      screenRadius: 34,
      clayBezelLeft: 10,
      clayBezelRight: 10,
      clayBezelTop: 50,
      clayBezelBottom: 25,
      clayBezelRadius: 50,
      externalClay: {
        width: 460,
        height: 938,
        screenOffsetLeft: 50,
        screenOffsetTop: 89,
      },
      realisticImage: {
        width: 460,
        height: 920,
        screenOffsetLeft: 50,
        screenOffsetTop: 80,
        availableColors: [
          {
            id: "clearly-white",
            title: "Clearly White",
            colorValue: "#EAEDF2",
          },
          { id: "just-black", title: "Just Black", colorValue: "#1A1A1A" },
          { id: "oh-so-orange", title: "Oh So Orange", colorValue: "#FF7A68" },
        ],
        handOffset: { left: 35.5, right: 35.5, bottom: 57 },
      },
    },
    {
      id: "macbook-air",
      title: "MacBook Air",
      screenWidth: 1440,
      screenHeight: 900,
      disableRotation: !0,
      externalClay: {
        width: 1890,
        height: 1125,
        screenOffsetLeft: 225,
        screenOffsetTop: 98,
      },
      realisticImage: {
        width: 3848 / 2,
        height: 2240 / 2,
        screenOffsetLeft: 484 / 2,
        screenOffsetTop: 196 / 2,
        availableColors: [
          { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
          { id: "space-grey", title: "Space Grey", colorValue: "#B1B5B7" },
          { id: "gold", title: "Gold", colorValue: "#FCECD5" },
        ],
      },
    },
    {
      id: "macbook-pro-13",
      title: 'MacBook Pro 13"',
      screenWidth: 1440,
      screenHeight: 900,
      disableRotation: !0,
      externalClay: {
        width: 1914,
        height: 1169,
        screenOffsetLeft: 236,
        screenOffsetTop: 109,
      },
      realisticImage: {
        width: 3916 / 2,
        height: 2330 / 2,
        screenOffsetLeft: 518 / 2,
        screenOffsetTop: 218 / 2,
        availableColors: [
          { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
          { id: "space-grey", title: "Space Grey", colorValue: "#B1B5B7" },
        ],
      },
    },
    {
      id: "macbook-pro-16",
      title: 'MacBook Pro 16"',
      screenWidth: 1536,
      screenHeight: 960,
      disableRotation: !0,
      externalClay: {
        width: 1984,
        height: 1179,
        screenOffsetLeft: 225,
        screenOffsetTop: 78,
      },
      realisticImage: {
        width: 4032 / 2,
        height: 2348 / 2,
        screenOffsetLeft: 480 / 2,
        screenOffsetTop: 148 / 2,
        availableColors: [
          { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
          { id: "space-grey", title: "Space Grey", colorValue: "#B1B5B7" },
        ],
      },
    },
    {
      id: "imac-21-5",
      title: 'iMac 21.5"',
      screenWidth: 2048,
      screenHeight: 1152,
      disableRotation: !0,
      externalClay: {
        width: 2288,
        height: 1892,
        screenOffsetLeft: 120,
        screenOffsetTop: 120,
      },
      realisticImage: {
        width: 4562 / 2,
        height: 3796 / 2,
        screenOffsetLeft: 232 / 2,
        screenOffsetTop: 244 / 2,
      },
    },
    {
      id: "imac-27",
      title: 'iMac 27"',
      screenWidth: 2560,
      screenHeight: 1440,
      disableRotation: !0,
      externalClay: {
        width: 2848,
        height: 2351,
        screenOffsetLeft: 144,
        screenOffsetTop: 151,
      },
      realisticImage: {
        width: 5676 / 2,
        height: 4720 / 2,
        screenOffsetLeft: 278 / 2,
        screenOffsetTop: 292 / 2,
        availableColors: [
          { id: "silver", title: "Silver", colorValue: "#E5E6E1" },
          { id: "pro", title: "Pro", colorValue: "#5F5E63" },
        ],
      },
    },
    {
      id: "pro-display-xdr",
      title: "Pro Display XDR",
      screenWidth: 3008,
      screenHeight: 1692,
      disableRotation: !0,
      externalClay: {
        width: 3148,
        height: 2325,
        screenOffsetLeft: 70,
        screenOffsetTop: 60,
      },
      realisticImage: {
        width: 6276 / 2,
        height: 4695 / 2,
        screenOffsetLeft: 130 / 2,
        screenOffsetTop: 130 / 2,
      },
    },
    {
      id: "dell-xps",
      title: "Dell XPS",
      screenWidth: 1920,
      screenHeight: 1080,
      disableRotation: !0,
      externalClay: {
        width: 2624,
        height: 1381,
        screenOffsetLeft: 352,
        screenOffsetTop: 57,
      },
      realisticImage: {
        width: 5412 / 2,
        height: 2746 / 2,
        screenOffsetLeft: 786 / 2,
        screenOffsetTop: 108 / 2,
      },
    },
    {
      id: "surface-book",
      title: "Microsoft Surface Book",
      screenWidth: 1500,
      screenHeight: 1e3,
      disableRotation: !0,
      externalClay: {
        width: 2089,
        height: 1234,
        screenOffsetLeft: 296,
        screenOffsetTop: 93,
      },
      realisticImage: {
        width: 4200 / 2,
        height: 2508 / 2,
        screenOffsetLeft: 600 / 2,
        screenOffsetTop: 210 / 2,
      },
    },
    {
      id: "ipad",
      title: "iPad",
      screenRadius: 0,
      screenWidth: 810,
      screenHeight: 1080,
      clayBezelLeft: 30,
      clayBezelRight: 30,
      clayBezelTop: 95,
      clayBezelBottom: 95,
      clayBezelRadius: 0,
      externalClay: {
        width: 966,
        height: 1378,
        screenOffsetLeft: 78,
        screenOffsetTop: 149,
      },
      realisticImage: {
        width: 1920 / 2,
        height: 2720 / 2,
        screenOffsetLeft: 75,
        screenOffsetTop: 140,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#C3C4C8" },
          { id: "silver", title: "Silver", colorValue: "#E1E2E4" },
          { id: "gold", title: "Gold", colorValue: "#EFD8BD" },
        ],
      },
    },
    {
      id: "ipad-mini",
      title: "iPad Mini",
      screenRadius: 0,
      clayBezelLeft: 49,
      clayBezelRight: 49,
      clayBezelTop: 49,
      clayBezelBottom: 49,
      clayBezelRadius: 49,
      screenWidth: 768,
      screenHeight: 1024,
      externalClay: {
        width: 924,
        height: 1384,
        screenOffsetLeft: 78,
        screenOffsetTop: 180,
      },
      realisticImage: {
        width: 1856 / 2,
        height: 2728 / 2,
        screenOffsetLeft: 160 / 2,
        screenOffsetTop: 340 / 2,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#C3C4C8" },
          { id: "silver", title: "Silver", colorValue: "#E1E2E4" },
          { id: "gold", title: "Gold", colorValue: "#EFD8BD" },
        ],
      },
    },
    {
      id: "ipad-air",
      title: "iPad Air",
      screenRadius: 18,
      clayBezelLeft: 49,
      clayBezelRight: 49,
      clayBezelTop: 49,
      clayBezelBottom: 49,
      clayBezelRadius: 49,
      screenWidth: 820,
      screenHeight: 1180,
      externalClay: {
        width: 994,
        height: 1374,
        screenOffsetLeft: 87,
        screenOffsetTop: 97,
      },
      realisticImage: {
        width: 1960 / 2,
        height: 2680 / 2,
        screenOffsetLeft: 160 / 2,
        screenOffsetTop: 160 / 2,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#C3C4C8" },
          { id: "silver", title: "Silver", colorValue: "#E1E2E4" },
          { id: "rose-gold", title: "Rose Gold", colorValue: "#ECCBC4" },
          { id: "blue", title: "Blue", colorValue: "#CBDAE6" },
          { id: "green", title: "Green", colorValue: "#DAF0D9" },
        ],
      },
    },
    {
      id: "ipad-pro-11",
      title: "iPad Pro 11\u2033",
      screenRadius: 17,
      clayBezelLeft: 49,
      clayBezelRight: 49,
      clayBezelTop: 49,
      clayBezelBottom: 49,
      clayBezelRadius: 49,
      screenWidth: 834,
      screenHeight: 1194,
      externalClay: {
        width: 990,
        height: 1370,
        screenOffsetLeft: 78,
        screenOffsetTop: 88,
      },
      realisticImage: {
        width: 1968 / 2,
        height: 2688 / 2,
        screenOffsetLeft: 75,
        screenOffsetTop: 75,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#C3C4C8" },
          { id: "silver", title: "Silver", colorValue: "#E1E2E4" },
        ],
      },
    },
    {
      id: "ipad-pro-12-9",
      title: "iPad Pro 12.9\u2033",
      ...fn.iPadPro,
      screenRadius: 17,
      screenWidth: 1024,
      screenHeight: 1366,
      externalClay: {
        width: 1180,
        height: 1542,
        screenOffsetLeft: 78,
        screenOffsetTop: 88,
      },
      realisticImage: {
        width: 2348 / 2,
        height: 3032 / 2,
        screenOffsetLeft: 75,
        screenOffsetTop: 75,
        availableColors: [
          { id: "space-grey", title: "Space Grey", colorValue: "#C3C4C8" },
          { id: "silver", title: "Silver", colorValue: "#E1E2E4" },
        ],
      },
    },
    {
      id: "surface-3",
      title: "Microsoft Surface 3",
      screenRadius: 0,
      clayBezelLeft: 49,
      clayBezelRight: 49,
      clayBezelTop: 49,
      clayBezelBottom: 49,
      clayBezelRadius: 49,
      screenWidth: 960,
      screenHeight: 640,
      externalClay: {
        width: 1184,
        height: 864,
        screenOffsetLeft: 112,
        screenOffsetTop: 112,
      },
      realisticImage: {
        width: 2280 / 2,
        height: 1580 / 2,
        screenOffsetLeft: 180 / 2,
        screenOffsetTop: 150 / 2,
      },
    },
    {
      id: "surface-pro-4",
      title: "Microsoft Surface Pro 4",
      screenRadius: 0,
      clayBezelLeft: 49,
      clayBezelRight: 49,
      clayBezelTop: 49,
      clayBezelBottom: 49,
      clayBezelRadius: 49,
      screenWidth: 1368,
      screenHeight: 912,
      externalClay: {
        width: 1592,
        height: 1136,
        screenOffsetLeft: 112,
        screenOffsetTop: 112,
      },
      realisticImage: {
        width: 3176 / 2,
        height: 2224 / 2,
        screenOffsetLeft: 220 / 2,
        screenOffsetTop: 200 / 2,
      },
    },
    {
      id: "apple-watch-44",
      title: "Apple Watch 44mm",
      screenRadius: 33,
      screenWidth: 184,
      screenHeight: 224,
      disableRotation: !0,
      externalClay: {
        width: 298,
        height: 502,
        screenOffsetLeft: 57,
        screenOffsetTop: 129,
      },
      realisticImage: {
        width: 548 / 2,
        height: 908 / 2,
        screenOffsetLeft: 90 / 2,
        screenOffsetTop: 230 / 2,
        availableColors: [
          { id: "black", title: "Black", colorValue: "#2E2C36" },
          { id: "white", title: "White", colorValue: "#F7F3F0" },
          { id: "yellow", title: "Yellow", colorValue: "#FDDC6C" },
          { id: "orange", title: "Orange", colorValue: "#F35C56" },
        ],
      },
    },
    {
      id: "apple-watch-40",
      title: "Apple Watch 40mm",
      screenRadius: 27,
      screenWidth: 162,
      screenHeight: 197,
      disableRotation: !0,
      externalClay: {
        width: 280,
        height: 463,
        screenOffsetLeft: 59,
        screenOffsetTop: 124,
      },
      realisticImage: {
        width: 504 / 2,
        height: 854 / 2,
        screenOffsetLeft: 90 / 2,
        screenOffsetTop: 230 / 2,
        availableColors: [
          { id: "black", title: "Black", colorValue: "#2E2C36" },
          { id: "white", title: "White", colorValue: "#F7F3F0" },
          { id: "yellow", title: "Yellow", colorValue: "#FDDC6C" },
          { id: "orange", title: "Orange", colorValue: "#F35C56" },
        ],
      },
    },
    {
      id: "tv-full-hd",
      title: "Full HD",
      screenRadius: 0,
      screenWidth: 1920,
      screenHeight: 1080,
      externalClay: {
        width: 1968,
        height: 1168,
        screenOffsetLeft: 24,
        screenOffsetTop: 12,
      },
      realisticImage: {
        width: 4040 / 2,
        height: 2360 / 2,
        screenOffsetLeft: 100 / 2,
        screenOffsetTop: 100 / 2,
      },
    },
    {
      id: "tv-4k",
      title: "4K",
      screenRadius: 0,
      screenWidth: 3840,
      screenHeight: 2160,
      externalClay: {
        width: 3908,
        height: 2308,
        screenOffsetLeft: 34,
        screenOffsetTop: 24,
      },
      realisticImage: {
        width: 7960 / 2,
        height: 4600 / 2,
        screenOffsetLeft: 140 / 2,
        screenOffsetTop: 140 / 2,
      },
    },
    {
      id: "720p",
      title: "720p",
      ...fn.desktop,
      screenWidth: 720,
      screenHeight: 1280,
    },
    {
      id: "900p",
      title: "900p",
      ...fn.desktop,
      screenWidth: 900,
      screenHeight: 1440,
    },
    {
      id: "1080p",
      title: "1080p",
      ...fn.desktop,
      screenWidth: 1080,
      screenHeight: 1920,
    },
    {
      id: "1440p",
      title: "1440p",
      ...fn.desktop,
      screenWidth: 1440,
      screenHeight: 2560,
    },
    {
      id: "4k",
      title: "4K",
      ...fn.desktop,
      screenWidth: 2160,
      screenHeight: 3840,
    },
  ];
var G4 = Q2.reduce((e, t) => ((e[t.id] = t), e), {});
var Te = (e) => e;
function J2(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
var eL =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  tL = J2(
    (e) =>
      eL.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
  ),
  j1 = m.createContext(void 0),
  J4 = j1.Provider,
  nL = () => {
    let e = m.useContext(j1);
    return e ?? {};
  },
  rL = $t(Hh(), 1),
  Ht = typeof et < "u" ? et : void 0,
  ri = () => typeof document == "object";
var iL = () => {
    let e = -1,
      n = Ht && /Version\/([\d.]+)/.exec(Ht.userAgent);
    return n && n[1] && (e = parseFloat(n[1])), e;
  },
  oL = () =>
    Ht && /Chrome/.test(Ht.userAgent) && /Google Inc/.test(Ht.vendor) && !sL(),
  X1 = () =>
    Ht && /Safari/.test(Ht.userAgent) && /Apple Computer/.test(Ht.vendor);
var aL = () => Ht && /bingoX/.test(Ht.userAgent),
  sL = () => Ht && /Edg\//.test(Ht.userAgent);
var G1 = () => rL.default.env.NODE_ENV === "test";
var Px = (e) => () => {
    Ma(e);
  },
  lL = {
    useImageSource(e) {
      var t;
      return (t = e.src) != null ? t : "";
    },
    useImageElement(e, t, n) {
      let r = new Image();
      return (
        (r.src = _t.useImageSource(e, t, n)),
        e.srcSet && (r.srcset = e.srcSet),
        r
      );
    },
    canRenderOptimizedCanvasImage() {
      return !1;
    },
  },
  cL = !1,
  uL = {
    get(e, t, n) {
      return Reflect.has(e, t)
        ? Reflect.get(e, t, n)
        : Px(
            cL
              ? `${String(t)} is not available in this version of bingo.`
              : `${String(
                  t
                )} is only available inside of bingo. https://www.bingo.com/`
          );
    },
  },
  _t = new Proxy(lL, uL);
function fL(e, t, n = 1) {
  var r, i, o, a;
  let { width: s, height: l } = t,
    c = (i = (r = e.pixelWidth) != null ? r : e.intrinsicWidth) != null ? i : 0,
    u =
      (a = (o = e.pixelHeight) != null ? o : e.intrinsicHeight) != null ? a : 0;
  if (s < 1 || l < 1 || c < 1 || u < 1) return;
  (s *= n), (l *= n);
  let f = s / l,
    d = c / u;
  switch (e.fit) {
    case "fill":
      return d > f ? u / l : c / s;
    case "fit":
    case "stretch":
      return Math.max(c / s, u / l);
  }
}
function _x(e, t) {
  return t && Math.max(1, e) > t ? "pixelated" : "auto";
}
var Fx = {
    position: "absolute",
    borderRadius: "inherit",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  dL = {
    backgroundSize: "16px 16px",
    backgroundImage:
      "repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.8) 0, rgba(180, 180, 180, 0.8) 1px, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.2) 50%)",
    border: "1px solid #c4c4c4",
  };
function hL(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function Y1(e, t) {
  let n = e ?? "center",
    r = t ?? "center";
  return n === "center" && r === "center" ? "center" : n + " " + r;
}
function pL(e, t) {
  if (!t) return "auto";
  let n = we.current() === "CANVAS" ? Pt.devicePixelRatio : 1,
    r = fL(e, t, n);
  return we.current() === "CANVAS" ? _x(1, r) : _x(dc.zoom, r);
}
function qh(e, t) {
  return {
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "inherit",
    objectPosition: Y1(e.positionX, e.positionY),
    objectFit: hL(e.fit),
    imageRendering: pL(e, t),
  };
}
function mL({ image: e, containerSize: t, nodeId: n, alt: r }) {
  let i = _t.useImageSource(e, t, n),
    o = qh(e, t),
    [a, s] = m.useState(),
    l = m.useRef(null),
    c = nL();
  return (
    m.useEffect(() => {
      if (!c.imgSizesWorkaroundEnabled) return;
      let u = l.current;
      if (!u || G1() || !e.sizes || !u.closest("[data-bingo-name]")) return;
      let d = u.clientWidth,
        p = Number(e.sizes.replace("px", ""));
      (!isNaN(p) && d < p) || s(d + "px");
    }, [e.sizes]),
    m.createElement("img", {
      ref: l,
      src: i,
      alt: r ?? e.alt,
      srcSet: e.srcSet,
      sizes: a ?? e.sizes,
      style: o,
      loading: e.loading,
    })
  );
}
function vL({ image: e, containerSize: t, nodeId: n }) {
  let r = m.useRef(null),
    i = _t.useImageElement(e, t, n),
    o = qh(e, t);
  return (
    m.useLayoutEffect(() => {
      let a = r.current;
      if (a !== null)
        return (
          a.appendChild(i),
          () => {
            a.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, o),
    m.createElement("div", {
      ref: r,
      style: { display: "contents", borderRadius: "inherit" },
    })
  );
}
function gL({ nodeId: e, image: t, containerSize: n }) {
  let r = m.useRef(null),
    i = _t.useImageSource(t, n, e);
  return (
    m.useLayoutEffect(() => {
      let o = r.current;
      if (o === null) return;
      let a = qh(t, n);
      _t.renderOptimizedCanvasImage(o, i, a, e);
    }, [e, t, i, n]),
    m.createElement("div", {
      ref: r,
      style: { display: "contents", borderRadius: "inherit" },
    })
  );
}
function K1({ layoutId: e, image: t, ...n }) {
  e && (e = e + "-background");
  let r = { ...Fx, ...dL },
    i = null;
  if (Pe(t.src))
    if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
      let o = An(t.backgroundSize) ? t.backgroundSize : 1,
        a = {
          width: Math.round(o * t.pixelWidth),
          height: Math.round(o * t.pixelHeight),
        },
        s = _t.useImageSource(t, a);
      (r.backgroundImage = `url(${s})`),
        (r.backgroundRepeat = "repeat"),
        (r.backgroundPosition = Y1(t.positionX, t.positionY)),
        t.pixelWidth &&
          (r.backgroundSize = `${(o * (t.pixelWidth / 2)).toFixed(2)}px auto`),
        (r.border = 0),
        (i = null);
    } else
      we.current() !== "CANVAS"
        ? (i = m.createElement(mL, { image: t, ...n }))
        : _t.canRenderOptimizedCanvasImage(_t.useImageSource(t))
        ? (i = m.createElement(gL, { image: t, ...n }))
        : (i = m.createElement(vL, { image: t, ...n }));
  return m.createElement(
    bt.div,
    {
      layoutId: e,
      style: i ? Fx : r,
      "data-bingo-background-image-wrapper": !0,
    },
    i
  );
}
var yL = "src",
  Mn;
((e) => {
  e.isImageObject = function (t) {
    return !t || typeof t == "string" ? !1 : yL in t;
  };
})(Mn || (Mn = {}));
function bL(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    o = n ?? i,
    a = r && o ? r[o] : void 0;
  return a && typeof a == "string" && (e = { ...e, src: a }), e;
}
function xL(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Mn.isImageObject(t)) return;
  let r = null;
  if (
    (Pe(n) ? (r = { alt: "", src: n }) : (r = Ie.get(t, null)),
    !!Mn.isImageObject(r))
  )
    return bL(r, e);
}
function SL(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: o } = e;
  if (!r) return;
  let a, s, l, c;
  if (
    (typeof r == "number"
      ? (a = s = l = c = r)
      : ((a = r.top || 0),
        (s = r.bottom || 0),
        (l = r.left || 0),
        (c = r.right || 0)),
    !(a === 0 && s === 0 && l === 0 && c === 0))
  ) {
    if (n && a === s && a === l && a === c) {
      t.border = `${a}px ${i} ${o}`;
      return;
    }
    (t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${a}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${l}px`),
      (t.borderRightWidth = `${c}px`);
  }
}
function wL(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: "inherit",
    pointerEvents: "none",
  };
  return e.border
    ? ((n.border = e.border), m.createElement(bt.div, { style: n }))
    : (SL(e, n, !1),
      m.createElement(bt.div, {
        "data-frame-border": !0,
        style: n,
        layoutId: t,
      }));
}
function wc(e) {
  return e && e !== "search" && e !== "slot" && e !== "template"
    ? bt[e]
    : bt.div;
}
var kL = oL();
function q1(e) {
  let t = {};
  return (
    !kL ||
      we.current() !== "CANVAS" ||
      ((e === !0 || e === "x") && (t["data-bingo-layout-hint-center-x"] = !0),
      (e === !0 || e === "y") && (t["data-bingo-layout-hint-center-y"] = !0)),
    t
  );
}
function Zh(e) {
  return e.replace(/^id_/, "").replace(/\\/g, "");
}
function CL(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides,
    r = e._overrideForwardingDescription;
  if (r) {
    n = void 0;
    for (let i in r) {
      let o = r[i];
      e[o] !== void 0 &&
        (n || ((n = {}), (e = { ...e })), (n[i] = e[o]), delete e[o]);
    }
  }
  return n
    ? ((t = m.Children.map(t, (i) =>
        m.isValidElement(i) ? m.cloneElement(i, { _forwardedOverrides: n }) : i
      )),
      { props: e, children: t })
    : { props: e, children: t };
}
function kc(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === "x"
      ? `translateX(-50%) ${n}`
      : e === "y"
      ? `translateY(-50%) ${n}`
      : n || "none";
}
function Wa(e, { specificLayoutId: t, postfix: n } = {}) {
  let {
      name: r,
      layoutIdKey: i,
      duplicatedFrom: o,
      __fromCodeComponentNode: a = !1,
      drag: s,
    } = e,
    { getLayoutId: l, enabled: c } = M(eo);
  return le(() => {
    if (!c) return e.layoutId;
    let u = t || e.layoutId;
    if (!u && (s || !i || a)) return;
    let f = u || l({ id: i, name: r, duplicatedFrom: o });
    if (f) return n ? `${f}-${n}` : f;
  }, [c]);
}
var Z1 = typeof document < "u" ? Cr : X,
  no = m.createContext(!1),
  Jr = [],
  EL = function () {
    return Jr.some(function (e) {
      return e.activeTargets.length > 0;
    });
  },
  TL = function () {
    return Jr.some(function (e) {
      return e.skippedTargets.length > 0;
    });
  },
  Lx = "ResizeObserver loop completed with undelivered notifications.",
  RL = function () {
    var e;
    typeof ErrorEvent == "function"
      ? (e = new ErrorEvent("error", { message: Lx }))
      : ((e = document.createEvent("Event")),
        e.initEvent("error", !1, !1),
        (e.message = Lx)),
      F.dispatchEvent(e);
  },
  Va;
(function (e) {
  (e.BORDER_BOX = "border-box"),
    (e.CONTENT_BOX = "content-box"),
    (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
})(Va || (Va = {}));
var ei = function (e) {
    return Object.freeze(e);
  },
  IL = (function () {
    function e(t, n) {
      (this.inlineSize = t), (this.blockSize = n), ei(this);
    }
    return e;
  })(),
  Q1 = (function () {
    function e(t, n, r, i) {
      return (
        (this.x = t),
        (this.y = n),
        (this.width = r),
        (this.height = i),
        (this.top = this.y),
        (this.left = this.x),
        (this.bottom = this.top + this.height),
        (this.right = this.left + this.width),
        ei(this)
      );
    }
    return (
      (e.prototype.toJSON = function () {
        var t = this,
          n = t.x,
          r = t.y,
          i = t.top,
          o = t.right,
          a = t.bottom,
          s = t.left,
          l = t.width,
          c = t.height;
        return {
          x: n,
          y: r,
          top: i,
          right: o,
          bottom: a,
          left: s,
          width: l,
          height: c,
        };
      }),
      (e.fromRect = function (t) {
        return new e(t.x, t.y, t.width, t.height);
      }),
      e
    );
  })(),
  Qh = function (e) {
    return e instanceof SVGElement && "getBBox" in e;
  },
  J1 = function (e) {
    if (Qh(e)) {
      var t = e.getBBox(),
        n = t.width,
        r = t.height;
      return !n && !r;
    }
    var i = e,
      o = i.offsetWidth,
      a = i.offsetHeight;
    return !(o || a || e.getClientRects().length);
  },
  Mx = function (e) {
    var t, n;
    if (e instanceof Element) return !0;
    var r =
      (n = (t = e) === null || t === void 0 ? void 0 : t.ownerDocument) ===
        null || n === void 0
        ? void 0
        : n.defaultView;
    return !!(r && e instanceof r.Element);
  },
  PL = function (e) {
    switch (e.tagName) {
      case "INPUT":
        if (e.type !== "image") break;
      case "VIDEO":
      case "AUDIO":
      case "EMBED":
      case "OBJECT":
      case "CANVAS":
      case "IFRAME":
      case "IMG":
        return !0;
    }
    return !1;
  },
  Fa = typeof F < "u" ? F : {},
  Ql = new WeakMap(),
  Ox = /auto|scroll/,
  _L = /^tb|vertical/,
  FL = /msie|trident/i.test(Fa.navigator && Fa.navigator.userAgent),
  dn = function (e) {
    return parseFloat(e || "0");
  },
  Ji = function (e, t, n) {
    return (
      e === void 0 && (e = 0),
      t === void 0 && (t = 0),
      n === void 0 && (n = !1),
      new IL((n ? t : e) || 0, (n ? e : t) || 0)
    );
  },
  Ax = ei({
    devicePixelContentBoxSize: Ji(),
    borderBoxSize: Ji(),
    contentBoxSize: Ji(),
    contentRect: new Q1(0, 0, 0, 0),
  }),
  eS = function (e, t) {
    if ((t === void 0 && (t = !1), Ql.has(e) && !t)) return Ql.get(e);
    if (J1(e)) return Ql.set(e, Ax), Ax;
    var n = getComputedStyle(e),
      r = Qh(e) && e.ownerSVGElement && e.getBBox(),
      i = !FL && n.boxSizing === "border-box",
      o = _L.test(n.writingMode || ""),
      a = !r && Ox.test(n.overflowY || ""),
      s = !r && Ox.test(n.overflowX || ""),
      l = r ? 0 : dn(n.paddingTop),
      c = r ? 0 : dn(n.paddingRight),
      u = r ? 0 : dn(n.paddingBottom),
      f = r ? 0 : dn(n.paddingLeft),
      d = r ? 0 : dn(n.borderTopWidth),
      p = r ? 0 : dn(n.borderRightWidth),
      y = r ? 0 : dn(n.borderBottomWidth),
      b = r ? 0 : dn(n.borderLeftWidth),
      S = f + c,
      h = l + u,
      v = b + p,
      g = d + y,
      x = s ? e.offsetHeight - g - e.clientHeight : 0,
      k = a ? e.offsetWidth - v - e.clientWidth : 0,
      w = i ? S + v : 0,
      E = i ? h + g : 0,
      C = r ? r.width : dn(n.width) - w - k,
      T = r ? r.height : dn(n.height) - E - x,
      R = C + S + k + v,
      D = T + h + x + g,
      L = ei({
        devicePixelContentBoxSize: Ji(
          Math.round(C * devicePixelRatio),
          Math.round(T * devicePixelRatio),
          o
        ),
        borderBoxSize: Ji(R, D, o),
        contentBoxSize: Ji(C, T, o),
        contentRect: new Q1(f, l, C, T),
      });
    return Ql.set(e, L), L;
  },
  tS = function (e, t, n) {
    var r = eS(e, n),
      i = r.borderBoxSize,
      o = r.contentBoxSize,
      a = r.devicePixelContentBoxSize;
    switch (t) {
      case Va.DEVICE_PIXEL_CONTENT_BOX:
        return a;
      case Va.BORDER_BOX:
        return i;
      default:
        return o;
    }
  },
  LL = (function () {
    function e(t) {
      var n = eS(t);
      (this.target = t),
        (this.contentRect = n.contentRect),
        (this.borderBoxSize = ei([n.borderBoxSize])),
        (this.contentBoxSize = ei([n.contentBoxSize])),
        (this.devicePixelContentBoxSize = ei([n.devicePixelContentBoxSize]));
    }
    return e;
  })(),
  nS = function (e) {
    if (J1(e)) return 1 / 0;
    for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
    return t;
  },
  ML = function () {
    var e = 1 / 0,
      t = [];
    Jr.forEach(function (a) {
      if (a.activeTargets.length !== 0) {
        var s = [];
        a.activeTargets.forEach(function (c) {
          var u = new LL(c.target),
            f = nS(c.target);
          s.push(u),
            (c.lastReportedSize = tS(c.target, c.observedBox)),
            f < e && (e = f);
        }),
          t.push(function () {
            a.callback.call(a.observer, s, a.observer);
          }),
          a.activeTargets.splice(0, a.activeTargets.length);
      }
    });
    for (var n = 0, r = t; n < r.length; n++) {
      var i = r[n];
      i();
    }
    return e;
  },
  Vx = function (e) {
    Jr.forEach(function (n) {
      n.activeTargets.splice(0, n.activeTargets.length),
        n.skippedTargets.splice(0, n.skippedTargets.length),
        n.observationTargets.forEach(function (i) {
          i.isActive() &&
            (nS(i.target) > e
              ? n.activeTargets.push(i)
              : n.skippedTargets.push(i));
        });
    });
  },
  OL = function () {
    var e = 0;
    for (Vx(e); EL(); ) (e = ML()), Vx(e);
    return TL() && RL(), e > 0;
  },
  yh,
  rS = [],
  AL = function () {
    return rS.splice(0).forEach(function (e) {
      return e();
    });
  },
  VL = function (e) {
    if (!yh) {
      var t = 0,
        n = document.createTextNode(""),
        r = { characterData: !0 };
      new MutationObserver(function () {
        return AL();
      }).observe(n, r),
        (yh = function () {
          n.textContent = "" + (t ? t-- : t++);
        });
    }
    rS.push(e), yh();
  },
  DL = function (e) {
    VL(function () {
      requestAnimationFrame(e);
    });
  },
  oc = 0,
  BL = function () {
    return !!oc;
  },
  zL = 250,
  HL = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
  Dx = [
    "resize",
    "load",
    "transitionend",
    "animationend",
    "animationstart",
    "animationiteration",
    "keyup",
    "keydown",
    "mouseup",
    "mousedown",
    "mouseover",
    "mouseout",
    "blur",
    "focus",
  ],
  Bx = function (e) {
    return e === void 0 && (e = 0), Date.now() + e;
  },
  bh = !1,
  NL = (function () {
    function e() {
      var t = this;
      (this.stopped = !0),
        (this.listener = function () {
          return t.schedule();
        });
    }
    return (
      (e.prototype.run = function (t) {
        var n = this;
        if ((t === void 0 && (t = zL), !bh)) {
          bh = !0;
          var r = Bx(t);
          DL(function () {
            var i = !1;
            try {
              i = OL();
            } finally {
              if (((bh = !1), (t = r - Bx()), !BL())) return;
              i ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
            }
          });
        }
      }),
      (e.prototype.schedule = function () {
        this.stop(), this.run();
      }),
      (e.prototype.observe = function () {
        var t = this,
          n = function () {
            return t.observer && t.observer.observe(document.body, HL);
          };
        document.body ? n() : Fa.addEventListener("DOMContentLoaded", n);
      }),
      (e.prototype.start = function () {
        var t = this;
        this.stopped &&
          ((this.stopped = !1),
          (this.observer = new MutationObserver(this.listener)),
          this.observe(),
          Dx.forEach(function (n) {
            return Fa.addEventListener(n, t.listener, !0);
          }));
      }),
      (e.prototype.stop = function () {
        var t = this;
        this.stopped ||
          (this.observer && this.observer.disconnect(),
          Dx.forEach(function (n) {
            return Fa.removeEventListener(n, t.listener, !0);
          }),
          (this.stopped = !0));
      }),
      e
    );
  })(),
  Vh = new NL(),
  zx = function (e) {
    !oc && e > 0 && Vh.start(), (oc += e), !oc && Vh.stop();
  },
  $L = function (e) {
    return !Qh(e) && !PL(e) && getComputedStyle(e).display === "inline";
  },
  WL = (function () {
    function e(t, n) {
      (this.target = t),
        (this.observedBox = n || Va.CONTENT_BOX),
        (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
    }
    return (
      (e.prototype.isActive = function () {
        var t = tS(this.target, this.observedBox, !0);
        return (
          $L(this.target) && (this.lastReportedSize = t),
          this.lastReportedSize.inlineSize !== t.inlineSize ||
            this.lastReportedSize.blockSize !== t.blockSize
        );
      }),
      e
    );
  })(),
  UL = (function () {
    function e(t, n) {
      (this.activeTargets = []),
        (this.skippedTargets = []),
        (this.observationTargets = []),
        (this.observer = t),
        (this.callback = n);
    }
    return e;
  })(),
  Jl = new WeakMap(),
  Hx = function (e, t) {
    for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
    return -1;
  },
  ec = (function () {
    function e() {}
    return (
      (e.connect = function (t, n) {
        var r = new UL(t, n);
        Jl.set(t, r);
      }),
      (e.observe = function (t, n, r) {
        var i = Jl.get(t),
          o = i.observationTargets.length === 0;
        Hx(i.observationTargets, n) < 0 &&
          (o && Jr.push(i),
          i.observationTargets.push(new WL(n, r && r.box)),
          zx(1),
          Vh.schedule());
      }),
      (e.unobserve = function (t, n) {
        var r = Jl.get(t),
          i = Hx(r.observationTargets, n),
          o = r.observationTargets.length === 1;
        i >= 0 &&
          (o && Jr.splice(Jr.indexOf(r), 1),
          r.observationTargets.splice(i, 1),
          zx(-1));
      }),
      (e.disconnect = function (t) {
        var n = this,
          r = Jl.get(t);
        r.observationTargets.slice().forEach(function (i) {
          return n.unobserve(t, i.target);
        }),
          r.activeTargets.splice(0, r.activeTargets.length);
      }),
      e
    );
  })(),
  jL = (function () {
    function e(t) {
      if (arguments.length === 0)
        throw new TypeError(
          "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
        );
      if (typeof t != "function")
        throw new TypeError(
          "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
        );
      ec.connect(this, t);
    }
    return (
      (e.prototype.observe = function (t, n) {
        if (arguments.length === 0)
          throw new TypeError(
            "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
          );
        if (!Mx(t))
          throw new TypeError(
            "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
          );
        ec.observe(this, t, n);
      }),
      (e.prototype.unobserve = function (t) {
        if (arguments.length === 0)
          throw new TypeError(
            "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
          );
        if (!Mx(t))
          throw new TypeError(
            "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
          );
        ec.unobserve(this, t);
      }),
      (e.prototype.disconnect = function () {
        ec.disconnect(this);
      }),
      (e.toString = function () {
        return "function ResizeObserver () { [polyfill code] }";
      }),
      e
    );
  })();
function Cc() {
  let [e, t] = m.useState(0);
  return m.useCallback(() => t((n) => n + 1), []);
}
var Ea,
  Ta,
  XL = class {
    constructor() {
      ko(this, Ea, void 0), ko(this, Ta, new WeakMap());
      var e;
      let t = (e = Pt.ResizeObserver) != null ? e : jL;
      du(this, Ea, new t(this.updateResizedElements.bind(this)));
    }
    updateResizedElements(e) {
      for (let t of e) {
        let n = ct(this, Ta).get(t.target);
        n && n(t.contentRect);
      }
    }
    observeElementWithCallback(e, t) {
      ct(this, Ea).observe(e), ct(this, Ta).set(e, t);
    }
    unobserve(e) {
      ct(this, Ea).unobserve(e), ct(this, Ta).delete(e);
    }
  };
Ea = new WeakMap();
Ta = new WeakMap();
var tc = ri() ? new XL() : void 0;
function GL(e) {
  let t = Cc();
  X(() => {
    let n = e?.current;
    if (n)
      return (
        tc?.observeElementWithCallback(e.current, t),
        () => {
          tc?.unobserve(n);
        }
      );
  }, [e, t]);
}
var YL = "data-bingo-size-compatibility-wrapper";
function KL(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(YL)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(iS)
    .map(oS);
}
function iS(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function oS(e) {
  if (
    !(e instanceof HTMLElement) ||
    e.children.length === 0 ||
    e.style.display !== "contents"
  )
    return e;
  let t = [...e.children].find(iS);
  return t ? oS(t) : e;
}
function Ec(e, t, n = () => [], r = {}) {
  let { id: i, visible: o, _needsMeasure: a } = e,
    { skipHook: s = !1 } = r,
    l = !!M(no),
    c = we.current() === "CANVAS";
  Z1(() => {
    !c ||
      l ||
      s ||
      (t.current &&
        i &&
        o &&
        a &&
        _t.queueMeasureRequest(Zh(i), t.current, n(t.current)));
  });
}
function qL(e) {
  let t = e.closest("[data-bingo-component-container]");
  t && _t.queueMeasureRequest(Zh(t.id), t, KL(t));
}
var ni = Object.keys;
function Da(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Nx(e) {
  return Da(e, "equals") ? typeof e.equals == "function" : !1;
}
function Jh(e, t) {
  return e === t ? !0 : e !== e && t !== t;
}
function ZL(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!Jh(e[r], t[r])) return !1;
  return !0;
}
function QL(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!Tc(e[r], t[r], !0)) return !1;
  return !0;
}
function JL(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Jh(r, t.get(n))) return !1;
  return !0;
}
function eM(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Tc(r, t.get(n), !0)) return !1;
  return !0;
}
function tM(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function nM(e, t) {
  let n = ni(e);
  if (n.length !== ni(t).length) return !1;
  for (let r of n) {
    if (!Da(t, r)) return !1;
    if (!(r === "_owner" && Da(e, "$$typeof") && e.$$typeof) && !Jh(e[r], t[r]))
      return !1;
  }
  return !0;
}
function rM(e, t) {
  let n = ni(e);
  if (n.length !== ni(t).length) return !1;
  for (let r of n) {
    if (!Da(t, r)) return !1;
    if (
      !(r === "_owner" && Da(e, "$$typeof") && e.$$typeof) &&
      !Tc(e[r], t[r], !0)
    )
      return !1;
  }
  return !0;
}
function Tc(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== "object") return !1;
  let o = Array.isArray(e),
    a = Array.isArray(t);
  if (o && a) return n ? QL(e, t) : ZL(e, t);
  if (o !== a) return !1;
  let s = e instanceof Map,
    l = t instanceof Map;
  if (s && l) return n ? eM(e, t) : JL(e, t);
  if (s !== l) return !1;
  let c = e instanceof Set,
    u = t instanceof Set;
  if (c && u) return tM(e, t);
  if (c !== u) return !1;
  let f = e instanceof Date,
    d = t instanceof Date;
  if (f && d) return e.getTime() === t.getTime();
  if (f !== d) return !1;
  let p = e instanceof RegExp,
    y = t instanceof RegExp;
  return p && y
    ? e.toString() === t.toString()
    : p !== y
    ? !1
    : Nx(e) && Nx(t)
    ? e.equals(t)
    : n
    ? rM(e, t)
    : nM(e, t);
}
function aS(e, t, n = !0) {
  try {
    return Tc(e, t, n);
  } catch (r) {
    if (r instanceof Error && r.message.match(/stack|recursion/i))
      return (
        console.warn(
          "Warning: isEqual does not handle circular references.",
          r.name,
          r.message
        ),
        !1
      );
    throw r;
  }
}
var sS = "0.000001px",
  xh = ` translateZ(${sS})`,
  lS = aL() || X1() || G1();
function iM(e) {
  e.willChange = "transform";
  let t = we.current() === "CANVAS";
  lS && t && (e.translateZ = sS);
}
function ep(e) {
  (e.willChange = "transform"), oM(e, !0);
}
function oM(e, t) {
  let n = we.current() === "CANVAS";
  if (!lS || !n) return;
  let r = e.transform || "";
  t
    ? r.includes(xh) || (e.transform = r + xh)
    : (e.transform = r.replace(xh, ""));
}
function cS(e, t, n, r = !0) {
  if (!e) return;
  let i = Te(e.style),
    o = n || i[t],
    a = () => {
      i[t] = o;
    };
  (i[t] = null), r ? Promise.resolve().then(a) : setTimeout(a, 0);
}
var La = class extends ke {
  constructor() {
    super(...arguments),
      I(this, "layerElement", null),
      I(this, "setLayerElement", (e) => {
        this.layerElement = e;
      });
  }
  static applyWillChange(e, t, n) {
    e.willChangeTransform && (n ? iM(t) : ep(t));
  }
  shouldComponentUpdate(e, t) {
    return e._needsMeasure || this.state !== t || !aS(this.props, e);
  }
  componentDidUpdate(e) {
    Te(this.props).clip &&
      Te(this.props).radius === 0 &&
      Te(e).radius !== 0 &&
      cS(this.layerElement, "overflow", "hidden", !1);
  }
};
I(La, "defaultProps", {});
function aM(e, t) {
  if (e.size < t) return;
  let r = Math.round(Math.random());
  for (let i of e.keys()) (++r & 1) !== 1 && e.delete(i);
}
function sM(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  aM(t, e);
  let o = r(n);
  return t.set(n, o), o;
}
var uS = (e) => {
    let t = 0,
      n,
      r;
    if (e.length === 0) return t;
    for (n = 0; n < e.length; n++)
      (r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0);
    return t;
  },
  tp = {
    hueRotate: (e, t) => $.toHslString($.hueRotate($(e), t)),
    setAlpha: (e, t) => $.toRgbString($.alpha($(e), t)),
    getAlpha: (e) => {
      let t = Gh(e);
      return t ? t.a : 1;
    },
    multiplyAlpha: (e, t) => $.toRgbString($.multiplyAlpha($(e), t)),
    toHex: (e) => $.toHexString($(e)).toUpperCase(),
    toRgb: (e) => $.toRgb($(e)),
    toRgbString: (e) => $.toRgbString($(e)),
    toHSV: (e) => $.toHsv($(e)),
    toHSL: (e) => $.toHsl($(e)),
    toHslString: (e) => $.toHslString($(e)),
    toHsvString: (e) => $.toHsvString($(e)),
    hsvToHSLString: (e) => $.toHslString($(ql(e.h, e.s, e.v, e.a))),
    hsvToHex: (e) => $.toHexString($(ql(e.h, e.s, e.v, e.a))).toUpperCase(),
    hsvToRgbString: (e) => $.toRgbString($(ql(e.h, e.s, e.v, e.a))),
    hsvToString: (e) => ql(e.h, e.s, e.v),
    rgbaToString: (e) => $.toRgbString($(e)),
    rgbToHexString: (e) => $.toHexString($(e)),
    hslToString: (e) => $.toHslString($(e)),
    hslToRgbString: (e) => $.toRgbString($(e)),
    toColorPickerSquare: (e) => $.toRgbString($({ h: e, s: 1, l: 0.5, a: 1 })),
    isValid: (e) => $(e).isValid !== !1,
    equals: (e, t) => (
      typeof e == "string" && (e = $(e)),
      typeof t == "string" && (t = $(t)),
      $.equal(e, t)
    ),
    toHexOrRgbaString: (e) => {
      let t = $(e);
      return t.a !== 1 ? $.toRgbString(t) : $.toHexString(t);
    },
  },
  lM = /var\(.+\)/,
  cM = new Map();
function uM(e, t) {
  let n = [e, t];
  return lM.test(e) ? e : sM(1e3, cM, n, () => tp.multiplyAlpha(e, t));
}
function Ua(e, t = 1) {
  let n;
  return (
    "stops" in e
      ? (n = e.stops)
      : (n = [
          { value: e.start, position: 0 },
          { value: e.end, position: 1 },
        ]),
    t === 1 ? n : n.map((r) => ({ ...r, value: uM(r.value, t) }))
  );
}
function fS(e, t) {
  let n = 0;
  return (
    Ua(e, t).forEach((r) => {
      n ^= uS(r.value) ^ r.position;
    }),
    n
  );
}
var fM = ["stops"];
function dS(e) {
  return e && fM.every((t) => t in e);
}
var dM = ["start", "end"];
function hS(e) {
  return e && dM.every((t) => t in e);
}
var hM = ["angle", "alpha"],
  Ba = {
    isLinearGradient: (e) => e && hM.every((t) => t in e) && (hS(e) || dS(e)),
    hash: (e) => e.angle ^ fS(e, e.alpha),
    toCSS: (e, t) => {
      let n = Ua(e, e.alpha),
        r = t !== void 0 ? t : e.angle,
        i = n.map((o) => `${o.value} ${o.position * 100}%`);
      return `linear-gradient(${r}deg, ${i.join(", ")})`;
    },
  },
  pM = [
    "widthFactor",
    "heightFactor",
    "centerAnchorX",
    "centerAnchorY",
    "alpha",
  ],
  za = {
    isRadialGradient: (e) => e && pM.every((t) => t in e) && (hS(e) || dS(e)),
    hash: (e) =>
      e.centerAnchorX ^
      e.centerAnchorY ^
      e.widthFactor ^
      e.heightFactor ^
      fS(e, e.alpha),
    toCSS: (e) => {
      let {
          alpha: t,
          widthFactor: n,
          heightFactor: r,
          centerAnchorX: i,
          centerAnchorY: o,
        } = e,
        s = Ua(e, t).map((l) => `${l.value} ${l.position * 100}%`);
      return `radial-gradient(${n * 100}% ${r * 100}% at ${i * 100}% ${
        o * 100
      }%, ${s.join(", ")})`;
    },
  };
function mM({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == "string" || kx(t)
      ? (n.backgroundColor = t)
      : $.isColorObject(e) &&
        (n.backgroundColor = e.initialValue || $.toRgbString(e))
    : e &&
      ((e = Ie.get(e, null)),
      typeof e == "string" || kx(e)
        ? (n.background = e)
        : Ba.isLinearGradient(e)
        ? (n.background = Ba.toCSS(e))
        : za.isRadialGradient(e)
        ? (n.background = za.toCSS(e))
        : $.isColorObject(e) &&
          (n.backgroundColor = e.initialValue || $.toRgbString(e)));
}
function te(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function vM(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function gM(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function yM(e) {
  if (!e) return {};
  let t = {};
  return (
    e.preserve3d === !0
      ? (t.transformStyle = "preserve-3d")
      : e.preserve3d === !1 && (t.transformStyle = "flat"),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = "visible")
      : e.backfaceVisible === !1 && (t.backfaceVisibility = "hidden"),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 &&
      (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = "50%"), (t.top = "50%"))
        : e.center === "x"
        ? (t.left = "50%")
        : e.center === "y" && (t.top = "50%")),
    te(e, "size", t),
    te(e, "width", t),
    te(e, "height", t),
    te(e, "minWidth", t),
    te(e, "minHeight", t),
    te(e, "top", t),
    te(e, "right", t),
    te(e, "bottom", t),
    te(e, "left", t),
    te(e, "position", t),
    te(e, "overflow", t),
    te(e, "opacity", t),
    (!e._border || !e._border.borderWidth) && te(e, "border", t),
    te(e, "borderRadius", t),
    te(e, "radius", t, "borderRadius"),
    te(e, "color", t),
    te(e, "shadow", t, "boxShadow"),
    te(e, "x", t),
    te(e, "y", t),
    te(e, "z", t),
    te(e, "rotate", t),
    te(e, "rotateX", t),
    te(e, "rotateY", t),
    te(e, "rotateZ", t),
    te(e, "scale", t),
    te(e, "scaleX", t),
    te(e, "scaleY", t),
    te(e, "skew", t),
    te(e, "skewX", t),
    te(e, "skewY", t),
    te(e, "originX", t),
    te(e, "originY", t),
    te(e, "originZ", t),
    mM(e, t),
    t
  );
}
function bM(e) {
  for (let t in e)
    if (
      t === "drag" ||
      t.startsWith("while") ||
      (typeof Te(e)[t] == "function" &&
        t.startsWith("on") &&
        !t.includes("Animation"))
    )
      return !0;
  return !1;
}
var $x = [
    "onClick",
    "onDoubleClick",
    "onMouse",
    "onMouseDown",
    "onMouseUp",
    "onTapDown",
    "onTap",
    "onTapUp",
    "onPointer",
    "onPointerDown",
    "onPointerUp",
    "onTouch",
    "onTouchDown",
    "onTouchUp",
  ],
  xM = new Set([...$x, ...$x.map((e) => `${e}Capture`)]);
function SM(e) {
  if (e.drag) return "grab";
  for (let t in e) if (xM.has(t)) return "pointer";
}
var Sh = "overflow";
function wM(e) {
  return Wx(e) ? !0 : e.style ? !!Wx(e.style) : !1;
}
function Wx(e) {
  return Sh in e && (e[Sh] === "scroll" || e[Sh] === "auto");
}
function pS(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: o,
      height: a,
      center: s,
      _constraints: l,
      size: c,
      widthType: u,
      heightType: f,
      positionFixed: d,
      positionAbsolute: p,
    } = e,
    y = Ge(e.minWidth),
    b = Ge(e.minHeight),
    S = Ge(e.maxWidth),
    h = Ge(e.maxHeight);
  return {
    top: Ge(n),
    left: Ge(t),
    bottom: Ge(r),
    right: Ge(i),
    width: Ge(o),
    height: Ge(a),
    size: Ge(c),
    center: s,
    _constraints: l,
    widthType: u,
    heightType: f,
    positionFixed: d,
    positionAbsolute: p,
    minWidth: y,
    minHeight: b,
    maxWidth: S,
    maxHeight: h,
  };
}
var Ux = { x: 0, y: 0, width: 200, height: 200 };
function kM(e) {
  var t, n, r;
  $a();
  let i = !!M(no),
    { style: o, _initialStyle: a, __fromCanvasComponent: s, size: l } = e,
    c = pS(e),
    u = YF(c),
    f = {
      display: "block",
      flex: (t = o?.flex) != null ? t : "0 0 auto",
      userSelect: we.current() !== "PREVIEW" ? "none" : void 0,
    };
  e.__fromCanvasComponent ||
    (f.backgroundColor =
      e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
  let d = !bM(e) && !e.__fromCanvasComponent && !wM(e),
    p = e.style ? !("pointerEvents" in e.style) : !0;
  d && p && (f.pointerEvents = "none");
  let b = m.Children.count(e.children) > 0 &&
      m.Children.toArray(e.children).every(
        (x) => typeof x == "string" || typeof x == "number"
      ) && {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      },
    S = yM(e);
  l === void 0 &&
    !s &&
    (vM(S) || (f.width = Ux.width), gM(S) || (f.height = Ux.height)),
    c.minWidth !== void 0 && (f.minWidth = c.minWidth),
    c.minHeight !== void 0 && (f.minHeight = c.minHeight);
  let h = {};
  Ha(c) &&
    u &&
    !mS(e) &&
    (h = {
      left: u.x,
      top: u.y,
      width: u.width,
      height: u.height,
      right: void 0,
      bottom: void 0,
    }),
    Object.assign(f, b, a, S, h, o),
    Object.assign(f, {
      overflowX: (n = f.overflowX) != null ? n : f.overflow,
      overflowY: (r = f.overflowY) != null ? r : f.overflow,
      overflow: void 0,
    }),
    La.applyWillChange(e, f, !0);
  let v = f;
  f.transform || (v = { x: 0, y: 0, ...f });
  let g = we.current() === "CANVAS";
  return (
    e.positionSticky
      ? (!g || i) &&
        ((v.position = "sticky"),
        (v.willChange = "transform"),
        (v.zIndex = 1),
        (v.top = e.positionStickyTop),
        (v.right = e.positionStickyRight),
        (v.bottom = e.positionStickyBottom),
        (v.left = e.positionStickyLeft))
      : g &&
        (e.positionFixed || e.positionAbsolute) &&
        (v.position = "absolute"),
    "rotate" in v && v.rotate === void 0 && delete v.rotate,
    [v, u]
  );
}
var CM = new Set([
  "width",
  "height",
  "opacity",
  "overflow",
  "radius",
  "background",
  "color",
  "x",
  "y",
  "z",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scaleX",
  "scaleY",
  "skew",
  "skewX",
  "skewY",
  "originX",
  "originY",
  "originZ",
]);
function EM(e) {
  let t = {};
  for (let n in e)
    (fi(n) || tL(n)) && !CM.has(n)
      ? (t[n] = Te(e)[n])
      : (n === "positionTransition" || n === "layoutTransition") &&
        ((t.layout = !0),
        typeof Te(e)[n] != "boolean" &&
          !e.transition &&
          (t.transition = Te(e)[n]));
  return t;
}
function TM(e) {
  return "data-bingo-name" in e;
}
var RM = Be(function (t, n) {
    var r;
    let { name: i, center: o, border: a, _border: s, __portal: l } = t,
      { props: c, children: u } = CL(t),
      f = EM(c),
      d = Wa(t),
      p = SM(t),
      y = B(null),
      b = n ?? y,
      S = {
        "data-bingo-component-type": "Frame",
        "data-bingo-cursor": p,
        "data-bingo-highlight": p === "pointer" ? !0 : void 0,
        "data-layoutid": d,
        "data-bingo-offset-parent-id": Te(t)["data-bingo-offset-parent-id"],
      };
    !TM(t) && i && (Te(S)["data-bingo-name"] = i);
    let [h, v] = kM(c),
      g = pS(c),
      x = mS(g);
    o && !(v && !x && Ha(g))
      ? (f.transformTemplate || (f.transformTemplate = kc(o)),
        Object.assign(S, q1(o)))
      : f.transformTemplate || (f.transformTemplate = void 0),
      Ec(t, b);
    let k = xL(t),
      w = !!M(no),
      E = IM(c, g, v, w),
      C = GF(
        m.createElement(
          m.Fragment,
          null,
          k
            ? m.createElement(K1, {
                alt: (r = t.alt) != null ? r : "",
                image: k,
                containerSize: v ?? void 0,
                nodeId: t.id && Zh(t.id),
                layoutId: d,
              })
            : null,
          u,
          m.createElement(wL, { ...s, border: a, layoutId: d })
        ),
        E
      ),
      T = wc(t.as),
      { size: R, radius: D, shadow: L } = h;
    return (
      R !== void 0 &&
        (delete h.size,
        h.height === void 0 && (h.height = R),
        h.width === void 0 && (h.width = R)),
      D !== void 0 && (delete h.radius, (h.borderRadius = D)),
      L !== void 0 && (delete h.shadow, (h.boxShadow = L)),
      m.createElement(T, { ...S, ...f, layoutId: d, style: h, ref: b }, C, l)
    );
  }),
  ac = Be(function (t, n) {
    let { visible: r = !0 } = t;
    return r ? m.createElement(RM, { ...t, ref: n }) : null;
  });
function IM(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: o = 0, heightType: a = 0, width: s, height: l } = t;
  return n && !i
    ? n
    : o === 0 && a === 0 && typeof s == "number" && typeof l == "number"
    ? { width: s, height: l }
    : i || e.positionFixed || e.positionAbsolute
    ? 2
    : 0;
}
function mS({ width: e, height: t }) {
  return (
    e === "auto" || e === "min-content" || t === "auto" || t === "min-content"
  );
}
var np = "__LAYOUT_TREE_ROOT",
  vS = m.createContext({
    schedulePromoteTree: () => {},
    scheduleProjectionDidUpdate: () => {},
    initLead: () => {},
  }),
  PM = class extends ke {
    constructor() {
      super(...arguments),
        I(this, "shouldAnimate", !1),
        I(this, "transition"),
        I(this, "lead"),
        I(this, "follow"),
        I(this, "scheduledPromotion", !1),
        I(this, "scheduledDidUpdate", !1),
        I(this, "scheduleProjectionDidUpdate", () => {
          this.scheduledDidUpdate = !0;
        }),
        I(this, "schedulePromoteTree", (e, t, n) => {
          (this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0);
        }),
        I(this, "initLead", (e, t) => {
          (this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0);
        }),
        I(this, "sharedLayoutContext", {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        });
    }
    getSnapshotBeforeUpdate() {
      var e;
      if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
      let t =
        !!((e = this.lead) != null && e.layoutMaybeMutated) &&
        !this.shouldAnimate;
      return (
        this.lead.projectionNodes.forEach((n) => {
          var r;
          n?.promote({
            needsReset: t,
            transition: this.shouldAnimate ? this.transition : void 0,
            preserveFollowOpacity:
              n.options.layoutId === np &&
              !((r = this.follow) != null && r.isExiting),
          });
        }),
        this.shouldAnimate
          ? (this.follow.layoutMaybeMutated = !0)
          : this.scheduleProjectionDidUpdate(),
        (this.lead.layoutMaybeMutated = !1),
        (this.transition = void 0),
        (this.scheduledPromotion = !1),
        null
      );
    }
    componentDidUpdate() {
      var e, t;
      if (!this.lead) return null;
      this.scheduledDidUpdate &&
        ((t = (e = this.lead.rootProjectionNode) == null ? void 0 : e.root) ==
          null || t.didUpdate(),
        (this.scheduledDidUpdate = !1));
    }
    render() {
      return m.createElement(
        vS.Provider,
        { value: this.sharedLayoutContext },
        this.props.children
      );
    }
  },
  _M = { width: "100%", height: "100%", backgroundColor: "none" };
function FM(e) {
  return m.createElement(bt.div, { layoutId: np, style: _M }, e.children);
}
var pr,
  Ra,
  LM = class {
    constructor(e) {
      ko(this, pr, void 0),
        ko(this, Ra, new WeakMap()),
        document &&
          du(
            this,
            pr,
            new IntersectionObserver(this.resizeObserverCallback.bind(this), e)
          );
    }
    resizeObserverCallback(e, t) {
      for (let n of e) {
        let r = ct(this, Ra).get(n.target);
        r && r([n], t);
      }
    }
    observeElementWithCallback(e, t) {
      ct(this, pr) && (ct(this, pr).observe(e), ct(this, Ra).set(e, t));
    }
    unobserve(e) {
      ct(this, pr) && (ct(this, pr).unobserve(e), ct(this, Ra).delete(e));
    }
    get root() {
      var e;
      return (e = ct(this, pr)) == null ? void 0 : e.root;
    }
  };
pr = new WeakMap();
Ra = new WeakMap();
var MM = m.createContext(new Map());
function OM(e, t, n) {
  if (typeof IntersectionObserver > "u") return;
  let r = pn(() => `${n.rootMargin}`),
    i = m.useContext(MM),
    { enabled: o } = n;
  m.useEffect(() => {
    var a;
    let s = e.current;
    if (!o || !s) return;
    let l = i.get(r);
    if (!l || l.root !== ((a = n.root) == null ? void 0 : a.current)) {
      let { root: c, ...u } = n;
      (l = new LM({ ...u, root: c?.current })), i.set(r, l);
    }
    return l.observeElementWithCallback(s, t), () => l?.unobserve(s);
  }, [o]);
}
var AM = new Array(100).fill(void 0).map((e, t) => t * 0.01),
  VM = m.createContext(null);
function DM(e, t, n) {
  let r = m.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    {
      enabled: i,
      animateOnce: o,
      threshold: a,
      rootMargin: s = "0px 0px 0px 0px",
    } = n,
    l = m.useCallback(
      ([c]) => {
        var u;
        if (!c) return;
        let { isInView: f, hasAnimatedOnce: d } = r.current,
          p = zM(c, (u = a?.y) != null ? u : 0);
        if (p && !f) {
          if (o && d) return;
          (r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0);
          return;
        }
        if (!p && f) {
          if (((r.current.isInView = !1), o)) return;
          t(!1);
          return;
        }
      },
      [o, a?.y, t]
    );
  OM(e, l, { threshold: AM, rootMargin: s, enabled: i ?? !0 });
}
function BM(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, Pt.innerHeight);
}
function zM(
  { boundingClientRect: e, intersectionRect: t, isIntersecting: n },
  r
) {
  return e.height === 0 ? n : n && BM(t, e) >= r;
}
var yB = $t(xc(), 1);
var xB = $t(xc(), 1);
var wB = m.createContext({ dragging: !1 });
var HM = { onMouseEnter: "mouseenter", onMouseLeave: "mouseleave" },
  kB = Object.keys(HM);
var jx = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  Ln = Symbol("private"),
  wh = (() => {
    function e(t = {}, n = !1, r = !0) {
      let i = {
          [Ln]: {
            makeAnimatables: n,
            observeAnimatables: r,
            observers: new A1(),
            reset() {
              for (let a in o)
                if (jx(o, a)) {
                  let s = jx(t, a) ? Te(t)[a] : void 0;
                  s !== void 0 ? (o[a] = s) : delete o[a];
                }
            },
            transactions: new Set(),
          },
        },
        o = new Proxy(i, $M);
      return Object.assign(o, t), o;
    }
    return (
      (e.resetObject = (t) => t[Ln].reset()),
      (e.addObserver = (t, n) => t[Ln].observers.add(n)),
      e
    );
  })(),
  NM = class {
    constructor() {
      I(this, "set", (e, t, n, r) => {
        if (t === Ln) return !1;
        let i = e[Ln],
          o,
          a;
        if (
          (Zt(n) ? ((o = n), (a = o.get())) : (a = n),
          i.makeAnimatables &&
            typeof n != "function" &&
            typeof n != "object" &&
            !o &&
            (o = Ie(n)),
          i.observeAnimatables && o)
        ) {
          let u = i.transactions;
          o.onUpdate({
            update: (f, d) => {
              d && u.add(d), i.observers.notify({ value: r }, d);
            },
            finish: (f) => {
              u.delete(f) && i.observers.finishTransaction(f);
            },
          });
        }
        let s = !1,
          l = !0,
          c = Te(e)[t];
        if (c !== void 0) {
          Zt(c)
            ? ((l = c.get() !== a), c.set(a))
            : ((l = c !== a), (Te(e)[t] = a));
          let u = a !== null && typeof a == "object";
          (Array.isArray(a) || u) && (l = !0), (s = !0);
        } else o && (n = o), (s = Reflect.set(e, t, n));
        return l && i.observers.notify({ value: r }), s;
      }),
        I(this, "get", (e, t, n) => {
          if (t === Ln) return Te(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == "function" ? r.bind(n) : r;
        });
    }
    deleteProperty(e, t) {
      let n = Reflect.deleteProperty(e, t);
      return e[Ln].observers.notify({ value: e }), n;
    }
    ownKeys(e) {
      let t = Reflect.ownKeys(e),
        n = t.indexOf(Ln);
      return n !== -1 && t.splice(n, 1), t;
    }
    getOwnPropertyDescriptor(e, t) {
      if (t !== Ln) return Reflect.getOwnPropertyDescriptor(e, t);
    }
  },
  $M = new NM();
var WM = "opacity";
function UM(e) {
  return WM in e;
}
function jM(e, t) {
  if (!UM(e)) return;
  let n = Ie.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function XM(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map(
      (r) => `drop-shadow(${r.x}px ${r.y}px ${r.blur}px ${r.color})`
    );
    t.push(...n);
  }
  return t;
}
function gS(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows
    .map((r) => `${r.x}px ${r.y}px ${r.blur}px ${r.color}`)
    .join(", ");
  n && (t.textShadow = n);
}
function GM(e, t) {
  let n = [];
  j(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    j(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    j(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    j(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    j(e.invert) && n.push(`invert(${e.invert / 100})`),
    j(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    j(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    j(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...XM(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(" "));
}
function YM(e, t) {
  j(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function rp(e, t) {
  YM(e, t), GM(e, t);
}
var { getNumber: TB } = Ie;
var KM = class extends ke {
    constructor() {
      super(...arguments),
        I(this, "layoutMaybeMutated"),
        I(this, "projectionNodes", new Map()),
        I(this, "rootProjectionNode"),
        I(this, "isExiting"),
        I(
          this,
          "shouldPreserveFollowOpacity",
          (e) => e.options.layoutId === np && !this.props.isExiting
        ),
        I(this, "switchLayoutGroupContext", {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        });
    }
    componentDidMount() {
      this.props.isLead &&
        this.props.sharedLayoutContext.initLead(
          this,
          !!this.props.animatesLayout
        );
    }
    shouldComponentUpdate(e) {
      let {
        isLead: t,
        isExiting: n,
        isOverlayed: r,
        animatesLayout: i,
        transition: o,
        sharedLayoutContext: a,
      } = e;
      if (((this.isExiting = n), t === void 0)) return !0;
      let s = !this.props.isLead && !!t,
        l = this.props.isExiting && !n,
        c = s || l,
        u = !!this.props.isLead && !t,
        f = this.props.isOverlayed !== r;
      return (
        (c || u) && this.projectionNodes.forEach((d) => d?.willUpdate()),
        c
          ? a.schedulePromoteTree(this, o, !!i)
          : f && a.scheduleProjectionDidUpdate(),
        !!c && !!i
      );
    }
    addChild(e) {
      let t = e.options.layoutId;
      t && (this.projectionNodes.set(t, e), this.setRootChild(e));
    }
    setRootChild(e) {
      if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
      this.rootProjectionNode =
        this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
    }
    removeChild(e) {
      let t = e.options.layoutId;
      t && this.projectionNodes.delete(t);
    }
    render() {
      return m.createElement(
        ms.Provider,
        { value: this.switchLayoutGroupContext },
        this.props.children
      );
    }
  },
  qM = (e) => {
    let t = m.useContext(vS);
    return m.createElement(KM, { ...e, sharedLayoutContext: t });
  },
  ZM = m.createContext(!0);
function QM() {
  return new Map();
}
function JM() {
  return pn(QM);
}
var yS = he({ register: () => {}, deregister: () => {} }),
  eO = ({ isCurrent: e, isOverlayed: t, children: n }) => {
    let r = JM(),
      i = se(
        (s) => {
          if (r.has(s)) {
            console.warn("NavigationTargetWrapper: already registered");
            return;
          }
          r.set(s, void 0);
        },
        [r]
      ),
      o = se(
        (s) => {
          let l = r.get(s);
          l?.(), r.delete(s);
        },
        [r]
      ),
      a = B({ register: i, deregister: o }).current;
    return (
      X(
        () => (
          r.forEach((s, l) => {
            let c = l(e, t);
            r.set(l, W1(c) ? c : void 0);
          }),
          () => {
            r.forEach((s, l) => {
              s && (s(), r.set(l, void 0));
            });
          }
        ),
        [e, t, r]
      ),
      m.createElement(yS.Provider, { value: a }, n)
    );
  };
function tO(e, t = []) {
  let { register: n, deregister: r } = M(yS);
  X(() => {
    if (e) return n(e), () => r(e);
  }, [n, r, ...t]);
}
var kh = m.memo(function ({
  isLayeredContainer: t,
  isCurrent: n,
  isPrevious: r,
  isOverlayed: i = !1,
  visible: o,
  transitionProps: a,
  children: s,
  backdropColor: l,
  onTapBackdrop: c,
  backfaceVisible: u,
  exitBackfaceVisible: f,
  animation: d,
  exitAnimation: p,
  instant: y,
  initialProps: b,
  exitProps: S,
  position: h = { top: 0, right: 0, bottom: 0, left: 0 },
  withMagicMotion: v,
  index: g,
  areMagicMotionLayersPresent: x,
  id: k,
  isInitial: w,
}) {
  let E = Vg(),
    C = M(hi),
    { persistLayoutIdCache: T } = M(eo),
    R = B({
      wasCurrent: void 0,
      wasPrevious: !1,
      wasBeingRemoved: !1,
      wasReset: !0,
      origins: Xx({}, b, a),
    }),
    D = B(null),
    L = C !== null && !C.isPresent;
  n && R.current.wasCurrent === void 0 && T(),
    X(() => {
      if (t || !E) return;
      if (L) {
        R.current = { ...R.current, wasBeingRemoved: L };
        return;
      }
      let { wasPrevious: ne, wasCurrent: Z } = R.current,
        We = (n && !Z) || (!L && R.current.wasBeingRemoved && n),
        gt = r && !ne,
        De = Xx(R.current.origins, b, a),
        Ue = R.current.wasReset;
      We || gt
        ? (E.stop(), E.start({ zIndex: g, ...De, ...a }), (Ue = !1))
        : Ue === !1 &&
          (E.stop(), E.set({ zIndex: g, ...Qr, opacity: 0 }), (Ue = !0)),
        (R.current = {
          wasCurrent: !!n,
          wasPrevious: !!r,
          wasBeingRemoved: !1,
          wasReset: Ue,
          origins: De,
        });
    }, [n, r, L]);
  let z = y ? { type: !1 } : "velocity" in d ? { ...d, velocity: 0 } : d,
    O = y ? { type: !1 } : p || d,
    V = { ...h };
  (V.left === void 0 || V.right === void 0) && (V.width = "auto"),
    (V.top === void 0 || V.bottom === void 0) && (V.height = "auto");
  let P = (Gx(a) || Gx(b)) && (t || n || r) ? 1200 : void 0,
    Y = { ...Qr, ...R.current.origins },
    G = t
      ? {
          initial: { ...Y, ...b },
          animate: { ...Y, ...a, transition: z },
          exit: { ...Y, ...S, transition: d },
        }
      : { animate: E, exit: { ...Y, ...S, transition: O } },
    K = !(L || x === !1),
    N = !!n && K,
    Q = n && w;
  return m.createElement(
    ac,
    {
      "data-bingo-component-type": "NavigationContainerWrapper",
      width: "100%",
      height: "100%",
      style: {
        position: "absolute",
        transformStyle: "flat",
        backgroundColor: "transparent",
        overflow: "hidden",
        zIndex: t || L || (n && v) ? g : void 0,
        pointerEvents: void 0,
        visibility: o ? "visible" : "hidden",
        perspective: P,
      },
    },
    t &&
      m.createElement(ac, {
        width: "100%",
        height: "100%",
        "data-bingo-component-type": "NavigationContainerBackdrop",
        transition: d,
        initial: { opacity: y && o ? 1 : 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        backgroundColor: l || "transparent",
        onTap: L ? void 0 : c,
      }),
    m.createElement(
      ac,
      {
        ...V,
        ...G,
        transition: {
          default: z,
          originX: { type: !1 },
          originY: { type: !1 },
          originZ: { type: !1 },
        },
        backgroundColor: "transparent",
        backfaceVisible: L ? f : u,
        "data-bingo-component-type": "NavigationContainer",
        "data-bingo-is-current-navigation-target": !!n,
        style: { pointerEvents: void 0, opacity: Q || t || (n && v) ? 1 : 0 },
        "data-is-present": K ? void 0 : !1,
        ref: D,
      },
      m.createElement(
        VM.Provider,
        { value: D },
        m.createElement(
          ZM.Provider,
          { value: N },
          m.createElement(
            eO,
            { isCurrent: N, isOverlayed: i },
            m.createElement(
              qM,
              {
                isLead: n,
                animatesLayout: !!v,
                transition: z,
                isExiting: !K,
                isOverlayed: i,
                id: k,
              },
              s
            )
          )
        )
      )
    )
  );
},
nO);
function nO(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function Xx(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (j(t.originX) && (r.originX = t.originX),
      j(t.originY) && (r.originY = t.originY),
      j(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (j(n.originX) && (r.originX = n.originX),
      j(n.originY) && (r.originY = n.originY),
      j(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function Gx(e) {
  var t, n, r;
  if (!e || !("rotateX" in e || "rotateY" in e || "z" in e)) return !1;
  let o = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    a =
      ((t = e?.transition) == null ? void 0 : t.rotateX.from) !== 0 ||
      ((n = e?.transition) == null ? void 0 : n.rotateY.from) !== 0 ||
      ((r = e?.transition) == null ? void 0 : r.z.from) !== 0;
  return o || a;
}
var Qr = {
    x: 0,
    y: 0,
    z: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    skew: 0,
    skewX: 0,
    skewY: 0,
    originX: 0.5,
    originY: 0.5,
    originZ: 0,
    opacity: 1,
  },
  rO = class {
    constructor() {
      I(this, "warning", () => {
        Ma(
          "The Navigator API is only available inside of bingo: https://www.bingo.com/"
        );
      }),
        I(this, "goBack", () => this.warning()),
        I(this, "instant", () => this.warning()),
        I(this, "fade", () => this.warning()),
        I(this, "push", () => this.warning()),
        I(this, "modal", () => this.warning()),
        I(this, "overlay", () => this.warning()),
        I(this, "flip", () => this.warning()),
        I(this, "customTransition", () => this.warning()),
        I(this, "magicMotion", () => this.warning());
    }
  },
  iO = new rO(),
  bS = he(iO),
  Ve = {
    Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
    PushLeft: { exit: { x: "-30%" }, enter: { x: "100%" } },
    PushRight: { exit: { x: "30%" }, enter: { x: "-100%" } },
    PushUp: { exit: { y: "-30%" }, enter: { y: "100%" } },
    PushDown: { exit: { y: "30%" }, enter: { y: "-100%" } },
    Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
    Modal: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { center: !0 },
      enter: { opacity: 0, scale: 1.2 },
    },
    OverlayLeft: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { right: 0, top: 0, bottom: 0 },
      enter: { x: "100%" },
    },
    OverlayRight: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { left: 0, top: 0, bottom: 0 },
      enter: { x: "-100%" },
    },
    OverlayUp: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { bottom: 0, left: 0, right: 0 },
      enter: { y: "100%" },
    },
    OverlayDown: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { top: 0, left: 0, right: 0 },
      enter: { y: "-100%" },
    },
    FlipLeft: {
      backfaceVisible: !1,
      exit: { rotateY: -180 },
      enter: { rotateY: 180 },
    },
    FlipRight: {
      backfaceVisible: !1,
      exit: { rotateY: 180 },
      enter: { rotateY: -180 },
    },
    FlipUp: {
      backfaceVisible: !1,
      exit: { rotateX: 180 },
      enter: { rotateX: -180 },
    },
    FlipDown: {
      backfaceVisible: !1,
      exit: { rotateX: -180 },
      enter: { rotateX: 180 },
    },
    MagicMotion: { withMagicMotion: !0 },
  };
function oO(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "right") {
    case "right":
      return Ve.PushLeft;
    case "left":
      return Ve.PushRight;
    case "bottom":
      return Ve.PushUp;
    case "top":
      return Ve.PushDown;
  }
}
function aO(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return Ve.OverlayLeft;
    case "left":
      return Ve.OverlayRight;
    case "bottom":
      return Ve.OverlayUp;
    case "top":
      return Ve.OverlayDown;
  }
}
function sO(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return Ve.FlipLeft;
    case "left":
      return Ve.FlipRight;
    case "bottom":
      return Ve.FlipUp;
    case "top":
      return Ve.FlipDown;
  }
}
var lO = () => ({
  current: -1,
  previous: -1,
  currentOverlay: -1,
  previousOverlay: -1,
  visualIndex: 0,
  overlayItemId: 0,
  historyItemId: 0,
  history: [],
  overlayStack: [],
  containers: {},
  containerIndex: {},
  containerVisualIndex: {},
  containerIsRemoved: {},
  transitionForContainer: {},
  previousTransition: null,
});
function Yx(e, t) {
  switch (t.type) {
    case "addOverlay":
      return uO(e, t.transition, t.component);
    case "removeOverlay":
      return fO(e);
    case "add":
      return xS(e, t.key, t.transition, t.component);
    case "remove":
      return SS(e);
    case "update":
      return cO(e, t.key, t.component);
    case "back":
      return dO(e);
    case "forward":
      return hO(e);
    default:
      return;
  }
}
function cO(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function uO(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    o = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: o,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, o.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function fO(e) {
  return {
    ...e,
    overlayStack: [],
    currentOverlay: -1,
    previousOverlay: e.currentOverlay,
  };
}
function xS(e, t, n, r) {
  e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0));
  let i = e.history[e.history.length - 1],
    o = i && i.key === t;
  if (((e.overlayStack = []), o && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (o) return;
  let a = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    l = i?.key && n.withMagicMotion ? gO(t, a, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: l ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let c = e.current + 1,
    u = e.current;
  for (let y in e.containerIndex)
    e.containerIndex[y] === c && (e.containerIndex[y] = vO(y, e.history));
  e.containerIndex[t] = c;
  let { containerVisualIndex: f, containerIsRemoved: d } = pO(e, t, l),
    p = wS(c, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: c,
    previous: u,
    containerVisualIndex: f,
    containerIsRemoved: d,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function dO(e) {
  let t = { ...e.containers },
    n = SS(e);
  if (n) return (n.containers = t), n;
}
function hO(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    o = [...e.history],
    a = xS(e, n, r, i);
  if (a) return (a.history = o), a;
}
function SS(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  $e(r, "The navigation history must have at least one component"),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((d) => d.key !== n.key) && delete e.containers[n.key];
  let o = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: s,
      containerVisualIndex: l,
      previousTransition: c,
      visualIndex: u,
    } = mO(e, r, n),
    f = wS(o, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: o,
    previous: a,
    containerIsRemoved: s,
    containerVisualIndex: l,
    previousTransition: c,
    visualIndex: u,
    transitionForContainer: f,
  };
}
function pO(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n)
    (r.containerVisualIndex[t] = e.history.length - 1),
      (r.containerIsRemoved[t] = !1);
  else {
    let i = e.containerVisualIndex[t];
    for (let [o, a] of Object.entries(e.containerVisualIndex))
      i !== void 0 && a > i && (r.containerIsRemoved[o] = !0);
  }
  return r;
}
function mO(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    o = e.previousTransition === null ? null : { ...e.previousTransition },
    a = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: o,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    l = e.containerVisualIndex[n.key],
    c =
      (s !== void 0 && l !== void 0 && s <= l) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    c
      ? ((a.containerIsRemoved[n.key] = !0),
        (a.containerVisualIndex[t.key] =
          u !== void 0 ? u : e.history.length - 1))
      : ((a.visualIndex = e.visualIndex + 1),
        (a.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion &&
      (a.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    a
  );
}
function vO(e, t) {
  var n;
  for (let r = t.length; r > t.length; r--)
    if (((n = t[r]) == null ? void 0 : n.key) === e) return r;
  return -1;
}
function wS(e, t, n, r, i) {
  let o = { ...i };
  for (let [a, s] of Object.entries(r)) {
    let l = yO(s, { current: e, previous: t, history: n });
    l && (o[a] = l);
  }
  return o;
}
function gO(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
    ? !1
    : r.slice(t, r.length).findIndex((a) => a.key === e) > -1
    ? !0
    : !(r.slice(0, t - 1).findIndex((a) => a.key === e) > -1);
}
function yO(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let o = i[e];
      return nc("enter", o?.transition.enter, o?.transition.animation);
    }
    if (e === r && n > r) {
      let o = i[e + 1];
      return nc("exit", o?.transition.exit, o?.transition.animation);
    }
    if (e === n && n < r) {
      let o = i[e + 1];
      return nc("enter", o?.transition.exit, o?.transition.animation);
    }
    if (e === r && n < r) {
      let o = i[e];
      return nc("exit", o?.transition.enter, o?.transition.animation);
    }
  }
}
var bO = ni(Qr);
function nc(e, t, n) {
  let r = {},
    i = {};
  return (
    bO.forEach((o) => {
      (r[o] = Qr[o]), (i[o] = { ...n, from: Qr[o] });
    }),
    t &&
      Object.keys(t).forEach((o) => {
        if (t[o] === void 0) return;
        let a = t[o],
          s = typeof t[o] == "string" ? `${Te(Qr)[o]}%` : Te(Qr)[o];
        (Te(r)[o] = e === "enter" ? s : a),
          (i[o] = { ...n, from: e === "enter" ? a : s, velocity: 0 });
      }),
    { ...r, transition: { ...i } }
  );
}
var FB = bS.Consumer,
  kS = m.createContext(void 0),
  LB = kS.Provider,
  CS = m.createContext(void 0),
  ip = class extends ke {
    constructor(e) {
      var t;
      super(e),
        I(this, "lastEventTimeStamp", null),
        I(this, "state", lO()),
        I(this, "navigationAction", (s) => {
          if (!this.props.enabled && this.state.history.length > 0) return;
          let l = Yx(this.state, s);
          if (!l) return;
          let { skipLayoutAnimation: c } = this.props,
            u = l.history[l.current],
            f =
              (s.type === "add" && s.transition.withMagicMotion) ||
              (s.type === "forward" && u?.transition.withMagicMotion) ||
              (s.type === "remove" && !!l.previousTransition),
            d = () => {
              var p;
              this.setState(l),
                u?.key && ((p = this.context) == null || p.call(this, u.key));
            };
          c && !f ? c(d) : d();
        }),
        I(this, "goBack", () => {
          var s;
          if (!this.isSameEventTransition())
            return (
              (this.lastEventTimeStamp =
                ((s = globalThis.event) == null ? void 0 : s.timeStamp) ||
                null),
              this.state.currentOverlay !== -1
                ? this.navigationAction({ type: "removeOverlay" })
                : this.navigationAction({ type: "remove" })
            );
        });
      let n = this.props.children;
      if (!n || !_a(n) || !Pa(n)) return;
      let r = { ...Ve.Instant },
        o = {
          type: "add",
          key:
            ((t = n.key) == null ? void 0 : t.toString()) ||
            `stack-${this.state.historyItemId + 1}`,
          transition: r,
          component: n,
        },
        a = Yx(this.state, o);
      a && (this.state = a);
    }
    componentDidMount() {
      var e;
      $a();
      let t = this.state.history[this.state.current];
      t && ((e = this.context) == null || e.call(this, t.key));
    }
    UNSAFE_componentWillReceiveProps(e) {
      var t;
      let n = e.children;
      if (!_a(n) || !Pa(n)) return;
      let r = (t = n.key) == null ? void 0 : t.toString();
      r &&
        (this.state.history.length === 0
          ? this.transition(n, Ve.Instant)
          : this.navigationAction({ type: "update", key: r, component: n }));
    }
    componentWillUnmount() {
      var e, t;
      (t = (e = this.props).resetProjection) == null || t.call(e);
    }
    getStackState(e) {
      let {
        current: t,
        previous: n,
        currentOverlay: r,
        previousOverlay: i,
      } = this.state;
      return e.overCurrentContext
        ? { current: r, previous: i, history: this.state.overlayStack }
        : { current: t, previous: n, history: this.state.history };
    }
    isSameEventTransition() {
      return globalThis.event
        ? this.lastEventTimeStamp === globalThis.event.timeStamp
        : !1;
    }
    transition(e, t, n) {
      var r, i;
      if (
        this.isSameEventTransition() ||
        ((this.lastEventTimeStamp =
          ((r = globalThis.event) == null ? void 0 : r.timeStamp) || null),
        !e || !_a(e) || !Pa(e))
      )
        return;
      let o = { ...t, ...n };
      if (!!o.overCurrentContext)
        return this.navigationAction({
          type: "addOverlay",
          transition: o,
          component: e,
        });
      let s =
        ((i = e.key) == null ? void 0 : i.toString()) ||
        `stack-${this.state.historyItemId + 1}`;
      this.navigationAction({
        type: "add",
        key: s,
        transition: o,
        component: e,
      });
    }
    instant(e) {
      this.transition(e, Ve.Instant, void 0);
    }
    fade(e, t) {
      this.transition(e, Ve.Fade, t);
    }
    push(e, t) {
      this.transition(e, oO(t), t);
    }
    modal(e, t) {
      this.transition(e, Ve.Modal, t);
    }
    overlay(e, t) {
      this.transition(e, aO(t), t);
    }
    flip(e, t) {
      this.transition(e, sO(t), t);
    }
    magicMotion(e, t) {
      this.transition(e, Ve.MagicMotion, t);
    }
    customTransition(e, t) {
      this.transition(e, t);
    }
    render() {
      var e, t, n, r, i;
      let o = this.getStackState({ overCurrentContext: !1 }),
        a = this.getStackState({ overCurrentContext: !0 }),
        s = xO(a),
        l = a.current > -1,
        c = this.state.history.length === 1,
        u = [];
      for (let [d, p] of Object.entries(this.state.containers)) {
        let y = this.state.containerIndex[d];
        $e(y !== void 0, "Container's index must be registered");
        let b = this.state.containerVisualIndex[d];
        $e(b !== void 0, "Container's visual index must be registered");
        let S = this.state.containerIsRemoved[d],
          h = this.state.history[y],
          v = this.state.transitionForContainer[d],
          g = y === this.state.current,
          x = y === this.state.previous,
          k = g ? !1 : S,
          w =
            ((e = h?.transition) == null ? void 0 : e.withMagicMotion) ||
            (g && !!this.state.previousTransition);
        u.push(
          m.createElement(
            kh,
            {
              key: d,
              id: d,
              index: b,
              isInitial: c,
              isCurrent: g,
              isPrevious: x,
              isOverlayed: l,
              visible: g || x,
              position: (t = h?.transition) == null ? void 0 : t.position,
              instant: qx(y, o),
              transitionProps: v,
              animation: Kx(y, o),
              backfaceVisible: RO(y, o),
              exitAnimation: (n = h?.transition) == null ? void 0 : n.animation,
              exitBackfaceVisible:
                (r = h?.transition) == null ? void 0 : r.backfaceVisible,
              exitProps: (i = h?.transition) == null ? void 0 : i.enter,
              withMagicMotion: w,
              areMagicMotionLayersPresent: k ? !1 : void 0,
            },
            m.createElement(
              FM,
              null,
              Zx({ component: p, transition: h?.transition })
            )
          )
        );
      }
      let f = this.state.overlayStack.map((d, p) =>
        m.createElement(
          kh,
          {
            isLayeredContainer: !0,
            key: d.key,
            isCurrent: p === this.state.currentOverlay,
            position: d.transition.position,
            initialProps: TO(p, a),
            transitionProps: IO(p, a),
            instant: qx(p, a, !0),
            animation: Kx(p, a),
            exitProps: d.transition.enter,
            visible: PO(p, a),
            backdropColor: CO(d.transition),
            backfaceVisible: EO(p, a),
            onTapBackdrop: _O(d.transition, this.goBack),
            index: this.state.current + 1 + p,
          },
          Zx({ component: d.component, transition: d.transition })
        )
      );
      return m.createElement(
        ac,
        {
          "data-bingo-component-type": "NavigationRoot",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "relative",
          style: {
            overflow: "hidden",
            backgroundColor: "unset",
            pointerEvents: void 0,
            ...this.props.style,
          },
        },
        m.createElement(
          bS.Provider,
          { value: this },
          m.createElement(
            CS.Provider,
            { value: c },
            m.createElement(
              kh,
              {
                isLayeredContainer: !0,
                position: void 0,
                initialProps: {},
                instant: !1,
                transitionProps: SO(s),
                animation: wO(s),
                backfaceVisible: kO(s),
                visible: !0,
                backdropColor: void 0,
                onTapBackdrop: void 0,
                index: 0,
              },
              m.createElement(
                EF,
                null,
                m.createElement(
                  PM,
                  null,
                  m.createElement(Gu, { presenceAffectsLayout: !1 }, u)
                )
              )
            ),
            m.createElement(Gu, null, f)
          )
        )
      );
    }
  };
I(ip, "defaultProps", { enabled: !0 });
I(ip, "contextType", kS);
var ES = { stiffness: 500, damping: 50, restDelta: 1, type: "spring" };
function xO(e) {
  let t, n;
  return (
    e.current !== -1 ? (t = e.history[e.current]) : (n = e.history[e.previous]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function SO({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function wO({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
    ? t.transition.animation
    : ES;
}
function kO({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function CO(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return "rgba(4,4,15,.4)";
}
function EO(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let i = r[e];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  } else if (e < n) {
    let i = r[e + 1];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  } else {
    let i = r[e];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  }
}
function TO(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function RO(e, t) {
  var n, r, i, o;
  let { current: a, previous: s, history: l } = t;
  return (e === s && a > s) || (e === a && a < s)
    ? (r = (n = l[e + 1]) == null ? void 0 : n.transition) == null
      ? void 0
      : r.backfaceVisible
    : (o = (i = l[e]) == null ? void 0 : i.transition) == null
    ? void 0
    : o.backfaceVisible;
}
function IO(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let i = r[e + 1];
      if (i && i.transition) return i.transition.exit;
    } else {
      let i = r[e];
      if (i && i.transition) return i.transition.enter;
    }
}
function Kx(e, t) {
  let { current: n, previous: r, history: i } = t,
    o = r > n ? r : n;
  if (e < o) {
    let a = i[e + 1];
    if (a && a.transition.animation) return a.transition.animation;
  } else if (e !== o) {
    let a = i[e];
    if (a && a.transition.animation) return a.transition.animation;
  } else {
    let a = i[e];
    if (a?.transition.animation) return a.transition.animation;
  }
  return ES;
}
function qx(e, t, n) {
  let { current: r, previous: i, history: o } = t;
  return !!((n && o.length > 1) || (e !== i && e !== r) || r === i);
}
function PO(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function Zx(e) {
  return m.Children.map(e.component, (n) => {
    var r, i;
    if (!_a(n) || !Pa(n) || !n.props) return n;
    let o = { style: (r = n.props.style) != null ? r : {} },
      a = (i = e?.transition) == null ? void 0 : i.position,
      s = !a || (a.left !== void 0 && a.right !== void 0),
      l = !a || (a.top !== void 0 && a.bottom !== void 0),
      c = "style" in n.props ? vt(n.props.style) : !0;
    return (
      s &&
        ("width" in n.props && (o.width = "100%"),
        c && (o.style.width = "100%")),
      l &&
        ("height" in n.props && (o.height = "100%"),
        c && (o.style.height = "100%")),
      m.cloneElement(n, o)
    );
  });
}
function _O(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function FO(e) {
  let t = zg(),
    n = Zu();
  return m.createElement(
    ip,
    { ...e, resetProjection: t, skipLayoutAnimation: n },
    e.children
  );
}
var MB = $t(xc(), 1);
var AB = $t(Hh(), 1);
var NB = !!(X1() && iL() < 15.4);
function op(...e) {
  return e.filter(Boolean).join(" ");
}
var LO = {};
Object.freeze(LO);
var ZB = (4 / 60) * 1e3;
var MO = (() => {
    function e(t = {}) {
      let n = wh(t, !1, !1);
      return e.addData(n), n;
    }
    return (
      (e._stores = []),
      (e.addData = (t) => {
        e._stores.push(t);
      }),
      (e.reset = () => {
        e._stores.forEach((t) => wh.resetObject(t));
      }),
      (e.addObserver = (t, n) => wh.addObserver(t, n)),
      e
    );
  })(),
  Ch = MO;
var OO = { update: 0 },
  AO = m.createContext({ update: NaN });
var VO = class extends ke {
    constructor() {
      super(...arguments),
        I(this, "observers", []),
        I(this, "state", OO),
        I(this, "taskAdded", !1),
        I(this, "frameTask", () => {
          this.setState({ update: this.state.update + 1 }),
            (this.taskAdded = !1);
        }),
        I(this, "observer", () => {
          this.taskAdded ||
            ((this.taskAdded = !0), B1.addFrameTask(this.frameTask));
        });
    }
    componentWillUnmount() {
      this.observers.map((e) => e()), Ch.reset();
    }
    render() {
      let { children: e } = this.props;
      return (
        this.observers.map((t) => t()),
        (this.observers = []),
        Ch._stores.forEach((t) => {
          let n = Ch.addObserver(t, this.observer);
          this.observers.push(n);
        }),
        m.createElement(AO.Provider, { value: { ...this.state } }, e)
      );
    }
  },
  t5 = $t(xc(), 1);
var TS = "__bingo__",
  DO = TS.length;
function BO(e) {
  if (e.startsWith(TS)) return e.substr(DO);
}
var hn = [
    "opacity",
    "x",
    "y",
    "scale",
    "rotate",
    "rotateX",
    "rotateY",
    "transformPerspective",
  ],
  gc = (e) => {
    var t, n, r, i, o, a, s, l;
    return {
      x: Ce((t = e?.x) != null ? t : 0),
      y: Ce((n = e?.y) != null ? n : 0),
      opacity: Ce((r = e?.opacity) != null ? r : 1),
      scale: Ce((i = e?.scale) != null ? i : 1),
      rotate: Ce((o = e?.rotate) != null ? o : 0),
      rotateX: Ce((a = e?.rotateX) != null ? a : 0),
      rotateY: Ce((s = e?.rotateY) != null ? s : 0),
      transformPerspective: Ce((l = e?.transformPerspective) != null ? l : 0),
    };
  },
  Ae = {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    transformPerspective: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
  };
function RS(e, t) {
  let n = pn(() => ({ values: gc(t ? e : void 0) }));
  return (
    m.useEffect(() => {
      if (!t)
        for (let r of hn) {
          let i = Ae[r];
          Aa(i) || n.values[r].set(i);
        }
    }, [n, t]),
    n
  );
}
var zO = new Set([
    "loopEffectEnabled",
    "loopTransition",
    "loop",
    "loopRepeatType",
    "loopRepeatDelay",
  ]),
  HO = () => {
    let e = B();
    return (
      X(
        () => () => {
          clearTimeout(e.current);
        },
        []
      ),
      async (t) =>
        new Promise((n) => {
          e.current = setTimeout(() => {
            n(!0);
          }, t * 1e3);
        })
    );
  };
function NO({
  loopEffectEnabled: e,
  loopRepeatDelay: t,
  loopTransition: n,
  loopRepeatType: r,
  loop: i,
}) {
  let o = Vr(),
    a = pn(() => ({ values: gc() })),
    s = m.useRef(!1),
    l = HO(),
    c = async () => {
      if (!i) return;
      let d = n || void 0,
        p = s.current && r === "mirror",
        y = p ? Ae : i,
        b = p ? i : Ae;
      return (
        (s.current = !s.current),
        Promise.all(
          hn.map((S) => {
            var h;
            if (!(o && S !== "opacity"))
              return (
                a.values[S].set((h = b[S]) != null ? h : Ae[S]),
                new Promise((v) => {
                  var g;
                  let x = { ...d, onComplete: () => v() };
                  vi(a.values[S], (g = y[S]) != null ? g : b[S], x);
                })
              );
          })
        )
      );
    },
    u = async () => {
      e && (await c(), await l(t ?? 0), await u());
    },
    f = se(() => {
      hn.forEach((d) => {
        a.values[d].stop();
      }),
        hn.forEach((d) => {
          a.values[d].set(Ae[d]);
        }),
        (s.current = !1);
    }, [a]);
  return m.useEffect(() => (e && i ? u() : f(), () => f()), [e]), a;
}
function $O(e, t, n, r, i) {
  let o = n / 100 - 1,
    a = i ? (t - r) * o : 0,
    s = -e * o;
  return a + s;
}
var WO = new Set([
  "speed",
  "adjustPosition",
  "offset",
  "parallaxTransformEnabled",
]);
function UO(e, t, n) {
  let {
      speed: r = 100,
      offset: i = 0,
      adjustPosition: o = !1,
      parallaxTransformEnabled: a,
    } = e,
    s = m.useRef(null),
    l = Vr(),
    c = m.useCallback(
      (y) => (s.current === null || r === 100 ? 0 : $O(y, s.current, r, i, o)),
      [s, r, i, o]
    );
  m.useLayoutEffect(() => {
    q.read(() => {
      var y, b, S;
      s.current =
        (S =
          (b = (y = t.current) == null ? void 0 : y.getBoundingClientRect()) ==
          null
            ? void 0
            : b.top) != null
          ? S
          : 0;
    }),
      q.update(() => {
        f.set(c(u.get())), o && d.set(n ?? "initial");
      });
  }, [t, s, o]);
  let { scrollY: u } = Ig(),
    f = xt(u, c),
    d = nn(o && s.current === null ? "hidden" : n),
    p = nn(0);
  return {
    values: { y: l || !a ? p : f },
    style: a ? { visibility: d } : void 0,
  };
}
function jO(e) {
  if (!(Pe(e) || !vt(e))) return e?.transition;
}
async function Qx(e, t, n, r, i) {
  let o = jO(e);
  return Promise.all(
    hn.map(
      (a) =>
        new Promise((s) => {
          var l;
          if (n && a !== "opacity") return s();
          let c = t.values[a];
          c.stop();
          let u = vt(e) && (l = e?.[a]) != null ? l : Ae[a];
          if ((pe(u) && (u = u.get()), !An(u))) return s();
          let f = $n.get(r.current);
          f && f.setBaseTarget(a, u);
          let d =
              Pe(i) && !c?.hasAnimated && Pt.HandoffAppearAnimations
                ? { elapsed: Pt.HandoffAppearAnimations(i, a, c, q) }
                : void 0,
            p = { ...o, velocity: 0, elapsed: 0, ...d, onComplete: () => s() };
          vi(c, u, p);
        })
    )
  );
}
var XO = new Set(["presenceInitial", "presenceAnimate", "presenceExit"]);
function GO(
  {
    initial: e,
    animate: t,
    exit: n,
    presenceInitial: r,
    presenceAnimate: i,
    presenceExit: o,
  },
  a,
  s,
  l
) {
  let c = r ?? e,
    u = i ?? t,
    f = o ?? n,
    d = pn(() => {
      var S;
      if (!vt(c)) return { values: gc() };
      let h = {};
      for (let v in c) {
        let g = vt(c) ? ((S = Te(c)) == null ? void 0 : S[v]) : void 0;
        pe(g) && (g = g.get()), An(g) && (h[v] = g);
      }
      return { values: gc(h) };
    }),
    [p, y] = Bu(),
    b = Vr();
  return (
    Cr(() => {
      if (!s) {
        y?.();
        return;
      }
      p
        ? c && u && Qx(u, d, b, a, l)
        : f
        ? Qx(f, d, b, a).then(() => y())
        : y();
    }, [p]),
    d
  );
}
function YO(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; )
    (n += r.offsetTop), (r = r.offsetParent);
  return n;
}
var KO = 1;
function IS(e, t = 0, n) {
  var r, i, o;
  let a = [],
    s = [];
  for (let l = e.length; l >= 0; l--) {
    let { ref: c, offset: u } = (r = e[l]) != null ? r : {};
    if (!c || !c.current) continue;
    let d = YO(c.current, document.documentElement) - KO - (u ?? 0) - t,
      p =
        (o = (i = c.current) == null ? void 0 : i.clientHeight) != null ? o : 0,
      y = a[a.length - 1],
      b = Math.max(d + p, 0);
    a.push(d),
      s.unshift(
        Math.max(d, 0),
        y === void 0 ? b : Math.min(b, Math.max(y - 1, 0))
      ),
      n?.(l);
  }
  return s;
}
function qO(e, t = 0) {
  return e < t ? "up" : "down";
}
var ZO = 4;
function QO(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: o = !0, enabled: a = !0 } = n;
  m.useEffect(() => {
    if (!r || !a) return;
    let s,
      l = 0,
      c,
      u;
    return mi(({ y: f }) => {
      if ((!o && u === i) || f.current > f.scrollLength || f.current < 0)
        return;
      let d = qO(f.current, s);
      s = f.current;
      let p = d !== c;
      if (((c = d), p)) l = f.current;
      else {
        if (Math.abs(f.current - l) < ZO) return;
        let b = d === r ? i : void 0;
        b !== u && t(b), (u = b);
      }
    });
  }, [r, o, i, a, t]);
}
var JO = new Set([
    "threshold",
    "animateOnce",
    "opacity",
    "targetOpacity",
    "x",
    "y",
    "scale",
    "transition",
    "rotate",
    "rotateX",
    "rotateY",
    "perspective",
    "enter",
    "exit",
    "animate",
    "styleAppearEffectEnabled",
    "targets",
    "scrollDirection",
  ]),
  eA = ["animate", "animate"],
  Jx = { inputRange: [], outputRange: [] };
function tA(e, t, n) {
  let r = IS(e, t),
    i = [...eA],
    o = r[0];
  if (!An(o)) return Jx;
  if ((o > 1 && (r.unshift(0, o - 1), i.unshift("initial", "initial")), n)) {
    let a = r.length - 1,
      s = r[a];
    if (!An(s)) return Jx;
    r.push(s + 1), i.push("exit");
  }
  return { inputRange: r, outputRange: i };
}
function Eh(e) {
  var t, n, r, i, o, a, s, l, c;
  return {
    x: (t = e?.x) != null ? t : Ae.x,
    y: (n = e?.y) != null ? n : Ae.y,
    scale: (r = e?.scale) != null ? r : Ae.scale,
    opacity: (i = e?.opacity) != null ? i : Ae.opacity,
    transformPerspective:
      (o = e?.transformPerspective) != null ? o : Ae.transformPerspective,
    rotate: (a = e?.rotate) != null ? a : Ae.rotate,
    rotateX: (s = e?.rotateX) != null ? s : Ae.rotateX,
    rotateY: (l = e?.rotateY) != null ? l : Ae.rotateY,
    transition: (c = e?.transition) != null ? c : void 0,
  };
}
function nA({
  opacity: e,
  targetOpacity: t,
  perspective: n,
  enter: r,
  exit: i,
  animate: o,
  ...a
}) {
  return m.useMemo(() => {
    var s;
    return {
      initial:
        r ??
        Eh({
          ...a,
          opacity: (s = e ?? t) != null ? s : 1,
          transformPerspective: n,
        }),
      animate: o ?? Eh({ opacity: t }),
      exit: i ?? Eh(),
    };
  }, [o, a, r, i, e, t, n]);
}
function rA(e, t) {
  let n = Vr(),
    r = nA(e),
    i = e.styleAppearEffectEnabled,
    o = RS(i ? r.initial : r.animate, i),
    a = m.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = m.useRef(),
    l = m.useCallback(async ({ transition: d, ...p }, y) => {
      var b;
      let S = (b = d ?? r.animate.transition) != null ? b : e.transition;
      await s.current,
        (s.current = Promise.all(
          hn.map((h) => {
            var v, g;
            y && o.values[h].set((v = r.initial[h]) != null ? v : Ae[h]);
            let x = (g = p[h]) != null ? g : Ae[h],
              k = $n.get(t.current);
            return (
              k && typeof x != "object" && k.setBaseTarget(h, x),
              new Promise((w) => {
                if (n && h !== "opacity") w();
                else {
                  let E = {
                    restDelta: h === "scale" ? 0.001 : void 0,
                    ...S,
                    onComplete: () => w(),
                  };
                  vi(o.values[h], x, E);
                }
              })
            );
          })
        ));
    }, []),
    c = e.animateOnce && a.current.lastAppearState === !0,
    u = !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !c;
  DM(
    t,
    (d) => {
      let { isPlaying: p, lastAppearState: y } = a.current;
      if (p) {
        a.current.scheduledAppearState = d;
        return;
      }
      (a.current.scheduledAppearState = void 0),
        (a.current.lastAppearState = d),
        y !== d && l(d ? r.animate : r.exit, d);
    },
    { enabled: u, animateOnce: !!e.animateOnce, threshold: { y: e.threshold } }
  );
  let f = e.targets && i && !e.scrollDirection;
  return (
    m.useEffect(() => {
      if (!f) return;
      let d = { initial: !0 },
        p = "initial";
      return mi(({ y }) => {
        var b;
        let { targets: S } = e;
        if (!S || !S[0] || (S[0].ref && !S[0].ref.current)) return;
        let { inputRange: h, outputRange: v } = tA(
          S,
          ((b = e.threshold) != null ? b : 0) * y.containerLength,
          !!e.exit
        );
        if (h.length === 0 || h.length !== v.length) return;
        let g = Fo(y.current, h, v);
        if ((e.animateOnce && d[g]) || ((d[g] = !0), p === g)) return;
        p = g;
        let x = Te(r)[g];
        x && l(x);
      });
    }, [f]),
    QO(e.scrollDirection, (d) => l(d ?? r.animate), {
      enabled: i,
      repeat: !e.animateOnce,
    }),
    o
  );
}
var iA = new Set([
    "transformViewportThreshold",
    "styleTransformEffectEnabled",
    "transformTargets",
    "spring",
    "transformTrigger",
  ]),
  oA = (e, t) => {
    var n, r;
    let i = (n = e?.[0]) == null ? void 0 : n.target;
    return t ? { opacity: (r = i?.opacity) != null ? r : 1 } : i;
  },
  PS = () => ({
    opacity: [],
    x: [],
    y: [],
    scale: [],
    rotate: [],
    rotateX: [],
    rotateY: [],
    transformPerspective: [],
  });
function aA(e, t) {
  let n = m.useRef({});
  m.useEffect(() => {
    if (t !== void 0)
      for (let r of ni(e)) {
        let i = e[r];
        i.attach((o, a) => {
          let s = n.current[r];
          if (
            (s && s.stop(),
            (n.current[r] = Lr({
              keyframes: [i.get(), o],
              velocity: i.getVelocity(),
              ...t,
              restDelta: 0.001,
              onUpdate: a,
            })),
            !be.isProcessing)
          ) {
            let l = performance.now() - be.timestamp;
            l < 40 && (n.current[r].time = l / 1e3);
          }
          return i.get();
        });
      }
  }, [JSON.stringify(t)]);
}
function sA(e, t) {
  let n = PS();
  return {
    inputRange: IS(e, t, (i) => {
      var o, a, s, l, c;
      let u = (o = e[i - 1]) == null ? void 0 : o.target,
        f = (a = e[i]) == null ? void 0 : a.target;
      for (let d of hn)
        (c = n[d]) == null ||
          c.unshift((s = u?.[d]) != null ? s : 0, (l = f?.[d]) != null ? l : 0);
    }),
    effectKeyOutputRange: n,
  };
}
function lA(e) {
  var t;
  let n = PS();
  for (let { target: r } of e)
    for (let i of hn) (t = n[i]) == null || t.push(r[i]);
  return n;
}
var e1 = [0, 1];
function cA(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  o
) {
  let a = Vr(),
    s = RS(oA(n, a), t);
  return (
    m.useLayoutEffect(() => {
      var l;
      if (!(!t || !n))
        if (e !== "onScrollTarget") {
          let c = lA(n);
          return mi(
            ({ y: u }) => {
              for (let f of hn)
                (a && f !== "opacity") ||
                  (e1.length === c[f].length &&
                    s.values[f].set(Fo(u.progress, e1, c[f])));
            },
            e === "onInView"
              ? {
                  target: (l = o.current) != null ? l : void 0,
                  offset: ["start end", "end end"],
                }
              : void 0
          );
        } else
          return mi(({ y: c }) => {
            if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
            let { inputRange: u, effectKeyOutputRange: f } = sA(
              n,
              i * c.containerLength
            );
            if (u.length !== 0)
              for (let d of hn)
                (a && d !== "opacity") ||
                  (u.length === f[d].length &&
                    s.values[d].set(Fo(c.current, u, f[d])));
          });
    }, [a, e, o, i, t, s, n]),
    aA(s.values, r),
    s
  );
}
var _S = {
    parallax: WO,
    styleAppear: JO,
    styleTransform: iA,
    loop: zO,
    presence: XO,
  },
  uA = ni(_S);
function t1(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function fA(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
  };
  for (let n in e) {
    let r = BO(n);
    if (r)
      for (let i of uA) {
        let o = _S[i];
        if (o?.has(r)) {
          t[i][r] = Te(e)[n];
          break;
        }
      }
    else t.forwardedProps[n] = Te(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = t1(
      "parallaxTransformEnabled",
      "speed",
      t.parallax
    )),
    (t.styleAppear.styleAppearEffectEnabled = t1(
      "styleAppearEffectEnabled",
      "animateOnce",
      t.styleAppear
    )),
    t
  );
}
var Xi = (e) => e.reduce((t, n) => (t += n), 0),
  n1 = (e) => e.reduce((t, n) => (t = t * n), 1),
  dA = "current";
function hA(e) {
  return vt(e) && dA in e;
}
function pA(e, t) {
  if (!e || !vt(e)) return t;
  for (let n in e) {
    let r = e[n];
    !pe(r) || !mA(n) || (An(r.get()) && t[n].push(r));
  }
}
function Ca(e) {
  return Pe(e) || Array.isArray(e);
}
function mA(e) {
  return e in Ae;
}
var vA = (e) =>
  m.forwardRef((t, n) => {
    if (t.__withFX)
      return m.createElement(e, {
        ...t,
        animate: void 0,
        initial: void 0,
        exit: void 0,
        ref: n,
      });
    if (we.current() === "CANVAS") {
      let N = Ca(t.animate) ? t.animate : void 0,
        Q = Ca(t.initial) ? t.initial : void 0;
      return m.createElement(e, {
        ...t,
        animate: N,
        initial: Q,
        exit: void 0,
        ref: n,
      });
    }
    let r = m.useRef(null),
      i = n ?? r,
      {
        parallax: o = {},
        styleAppear: a = {},
        styleTransform: s = {},
        presence: l = {},
        loop: c = {},
        forwardedProps: u,
      } = fA(t),
      {
        __targetOpacity: f,
        __perspectiveFX: d,
        __smartComponentFX: p = !1,
      } = t,
      y = nn(f ?? 1),
      { values: b } = GO(l, i, p, t[hs]),
      { values: S, style: h } = UO(o, i),
      { values: v } = cA(s, i),
      { values: g } = rA(a, i),
      { values: x } = NO(c),
      k = m.useMemo(
        () => ({
          scale: [g.scale, x.scale, b.scale, v.scale],
          opacity: [g.opacity, x.opacity, b.opacity, y, v.opacity],
          x: [g.x, x.x, b.x, v.x],
          y: [g.y, x.y, S.y, b.y, v.y],
          rotate: [g.rotate, x.rotate, b.rotate, v.rotate],
          rotateX: [g.rotateX, x.rotateX, b.rotateX, v.rotateX],
          rotateY: [g.rotateY, x.rotateY, b.rotateY, v.rotateY],
          transformPerspective: [
            v.transformPerspective,
            g.transformPerspective,
          ],
        }),
        [y, v, S, g, x, b]
      );
    pA(t.style, k);
    let w = xt(k.scale, n1),
      E = xt(k.opacity, n1),
      C = xt(k.x, Xi),
      T = xt(k.y, Xi),
      R = xt(k.rotate, Xi),
      D = xt(k.rotateX, Xi),
      L = xt(k.rotateY, Xi),
      z = xt(k.transformPerspective, Xi),
      { drag: O, dragConstraints: V } = u;
    GL(O && hA(V) ? V : void 0);
    let H = {
      opacity: E,
      scale: w,
      x: C,
      y: T,
      rotate: R,
      rotateX: D,
      rotateY: L,
    };
    Aa(d) && (H.transformPerspective = z);
    let P = Ca(t.animate) ? t.animate : void 0,
      Y = Ca(t.initial) ? t.initial : void 0,
      G = Ca(t.exit) ? t.exit : void 0,
      K = p && !l.presenceInitial ? { initial: Y, animate: P, exit: G } : {};
    return m.createElement(e, {
      ...u,
      ...K,
      __withFX: !0,
      style: { ...t.style, ...h, ...H },
      values: b,
      ref: i,
    });
  });
var f5 = vA;
var gA = (e) =>
    m.forwardRef((t, n) => {
      let r = Wa(t);
      return m.createElement(e, {
        layoutId: r,
        ...t,
        layoutIdKey: void 0,
        duplicatedFrom: void 0,
        ref: n,
      });
    }),
  yA = m.forwardRef(({ children: e, layoutId: t, ...n }, r) => {
    let i = pn(() => (t ? `${t}-container` : void 0));
    return m.createElement(
      bt.div,
      { layoutId: i, ...n, ref: r },
      m.createElement(
        no.Provider,
        { value: !0 },
        m.createElement(
          RF,
          { enabled: !1 },
          m.createElement(
            Cg,
            { id: t ?? "", inherit: "id" },
            m.Children.map(e, (o) =>
              m.isValidElement(o) ? m.cloneElement(o, { layoutId: t }) : o
            )
          )
        )
      )
    );
  }),
  m5 = gA(yA),
  bA = m.createContext(void 0);
if (ri())
  for (let e of document.querySelectorAll("style[data-bingo-css-ssr]"))
    document.head.appendChild(e);
var xA = (() => {
    var e;
    if (!ri()) return new Set();
    let t =
      (e = document.querySelector("style[data-bingo-css-ssr-minified]")) ==
      null
        ? void 0
        : e.getAttribute("data-bingo-components");
    return t ? new Set(t.split(" ")) : new Set();
  })(),
  FS = { "data-bingo-css-ssr": !0 },
  SA = (e, t, n) =>
    m.forwardRef((r, i) => {
      var o;
      let { sheet: a, cache: s } = (o = m.useContext(bA)) != null ? o : {};
      if (!ri()) {
        let l = Array.isArray(t)
          ? t.join(`
`)
          : t;
        return m.createElement(
          m.Fragment,
          null,
          m.createElement("style", {
            ...FS,
            "data-bingo-component": n,
            dangerouslySetInnerHTML: { __html: l },
          }),
          m.createElement(e, { ...r, ref: i })
        );
      }
      return (
        m.useInsertionEffect(() => {
          if (n && xA.has(n)) return;
          (Array.isArray(t)
            ? t
            : t.split(`
`)
          ).forEach((c) => c && N1(c, a, s));
        }, []),
        m.createElement(e, { ...r, ref: i })
      );
    }),
  LS = m.createContext({
    onRegisterCursors: () => () => {},
    registerCursors: () => {},
  }),
  yc = "bingo-cursor-none",
  Dh = "bingo-pointer-events-none",
  wA = m.memo(function ({ children: t }) {
    let n = pn(() => {
        let i = new Set(),
          o = {};
        return {
          onRegisterCursors: (a) => (a(o), i.add(a), () => i.delete(a)),
          registerCursors: (a) => {
            Object.assign(o, a);
            for (let s of i) s(o);
          },
        };
      }),
      r = Vr();
    return m.createElement(
      LS.Provider,
      { value: n },
      t,
      !r && m.createElement(RA, null)
    );
  }),
  kA = SA(wA, [
    `.${yc}, .${yc} * { cursor: none !important; }`,
    `.${Dh}, .${Dh} * { pointer-events: none !important; }`,
  ]),
  CA = {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 12 + 1,
    pointerEvents: "none",
  };
function EA(e) {
  return !(!e || e.placement || e.alignment);
}
function rc(e) {
  switch (e) {
    case "start":
      return "0%";
    case "center":
      return "-50%";
    case "end":
      return "-100%";
    default:
      br(e);
  }
}
function TA(e, t = "center") {
  switch (e) {
    case "top":
      return `${rc(t)}, -100%`;
    case "right":
      return `0%, ${rc(t)}`;
    case "bottom":
      return `${rc(t)}, 0%`;
    case "left":
      return `-100%, ${rc(t)}`;
    default:
      return "-50%, -50%";
  }
}
var r1 = "data-bingo-portal-id";
function i1(e, t) {
  var n;
  let r = document.elementFromPoint(e, t);
  for (; r; ) {
    if (r === document.body) return;
    let i = r.getAttribute("data-bingo-cursor");
    if (i) return i;
    if (r.hasAttribute(r1)) {
      let o = r.getAttribute(r1);
      (r = r.parentElement),
        o && (r = (n = document.getElementById(o)) != null ? n : r);
    } else r = r.parentElement;
  }
}
var RA = m.memo(function () {
  var t;
  let { onRegisterCursors: n } = M(LS),
    r = nn(0),
    i = nn(0),
    o = nn(0),
    a = m.useRef(null),
    s = m.useRef({ cursors: {}, cursorHash: void 0 }),
    l = Cc();
  m.useEffect(() => {
    let w = 0,
      E = 0;
    function C() {
      r.set(w), i.set(E), vi(o, 1, { type: "tween", duration: 0.2 });
    }
    function T(L) {
      L.pointerType !== "touch" &&
        ((w = L.clientX), (E = L.clientY), q.update(C));
    }
    let R = () => {
      let L = i1(w, E);
      L !== s.current.cursorHash &&
        ((s.current.cursorHash = L), q.update(() => l()));
    };
    q.read(R, !0);
    function D(L) {
      if (L.target === a.current || !a.current) return;
      let z = new PointerEvent(L.type, {
        bubbles: !0,
        cancelable: L.cancelable,
        pointerType: L.pointerType,
        pointerId: L.pointerId,
        composed: L.composed,
        isPrimary: L.isPrimary,
        buttons: L.buttons,
        button: L.button,
      });
      q.update(() => {
        var O;
        (O = a.current) == null || O.dispatchEvent(z);
      });
    }
    return (
      Pt.addEventListener("pointermove", T),
      document.addEventListener("pointerdown", D),
      document.addEventListener("pointerup", D),
      () => {
        Pt.removeEventListener("pointermove", T),
          document.removeEventListener("pointerdown", D),
          document.removeEventListener("pointerup", D),
          nt(R);
      }
    );
  }, [o, r, i, l]),
    m.useEffect(() => {
      function w() {
        vi(o, 0, { type: "tween", duration: 0.2 });
      }
      return (
        document.addEventListener("mouseleave", w),
        Pt.addEventListener("blur", w),
        () => {
          document.removeEventListener("mouseleave", w),
            Pt.removeEventListener("blur", w);
        }
      );
    }, [o]),
    m.useLayoutEffect(() => {
      function w(C) {
        Object.assign(s.current.cursors, C),
          (s.current.cursorHash = i1(r.get(), i.get())),
          l();
      }
      let E = n(w);
      return () => {
        E(), document.body.classList.toggle(yc, !1);
      };
    }, [r, i, n, l]);
  let { cursors: c, cursorHash: u } = s.current,
    f = u ? c[u] : null,
    d = EA(f);
  m.useLayoutEffect(() => {
    document.body.classList.toggle(yc, d);
  }, [d]);
  let p = f?.component,
    y = (t = f?.transition) != null ? t : { duration: 0 },
    b = Yu(r, y),
    S = Yu(i, y),
    h = xt(() => {
      var w, E;
      return (
        b.get() + ((E = (w = f?.offset) == null ? void 0 : w.x) != null ? E : 0)
      );
    }),
    v = xt(() => {
      var w, E;
      return (
        S.get() + ((E = (w = f?.offset) == null ? void 0 : w.y) != null ? E : 0)
      );
    }),
    g = f?.alignment,
    x = f?.placement,
    k = m.useCallback((w, E) => `translate(${TA(x, g)}) ${E}`, [g, x]);
  return !f || !p
    ? null
    : m.createElement(p, {
        transformTemplate: k,
        style: { ...CA, x: h, y: v, opacity: o },
        globalTapTarget: !0,
        variant: f?.variant,
        ref: a,
        className: Dh,
      });
});
var IA = m.createContext(void 0),
  MS = class {
    constructor(e) {
      (this.resolver = e), I(this, "status");
    }
    static is(e) {
      return e instanceof MS;
    }
    preload() {
      if (this.status) {
        let t = this.status;
        return t.type !== "pending" ? void 0 : t.promise;
      }
      let e = this.resolver().then(
        (t) => {
          this.status = { type: "fulfilled", value: t };
        },
        (t) => {
          this.status = { type: "rejected", error: t };
        }
      );
      return (this.status = { type: "pending", promise: e }), e;
    }
    read() {
      let e = this.status;
      if (!e) throw new Error("Need to call preload() before read()");
      switch (e.type) {
        case "pending":
          throw new Error("Need to wait for preload() to resolve");
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.error;
        default:
          br(e);
      }
    }
  };
function ap(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
    ? e === t
      ? null
      : ap(e.parentElement, t)
    : null;
}
var o1 = "element",
  PA = "collection",
  _A = "collectionItemId",
  FA = "pathVariables",
  OS = "bingo/page-link,";
function AS(e) {
  return Pe(e) && e.startsWith(`data:${OS}`);
}
function sp(e) {
  if (AS(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(OS.length),
        r = t.searchParams,
        i = r.has(o1) ? r.get(o1) : void 0,
        o,
        a = r.get(PA),
        s = r.get(_A),
        l = r.get(FA);
      if (a && s && l) {
        let c = Object.fromEntries(new URLSearchParams(l).entries());
        o = { collection: a, collectionItemId: s, pathVariables: c };
      }
      return {
        target: n === "none" ? null : n,
        element: i === "none" ? void 0 : i,
        collectionItem: o,
      };
    } catch {
      return;
    }
}
function LA(e, t, n) {
  var r, i, o;
  let a = t.getAttribute("data-bingo-page-link-target"),
    s,
    l;
  if (a) {
    s =
      (r = t.getAttribute("data-bingo-page-link-element")) != null
        ? r
        : void 0;
    let u = t.getAttribute("data-bingo-page-link-path-variables");
    u && (l = Object.fromEntries(new URLSearchParams(u).entries()));
  } else {
    let u = t.getAttribute("href");
    if (!u) return !1;
    let f = sp(u);
    if (!f || !f.target) return !1;
    (a = f.target),
      (s = (i = f.element) != null ? i : void 0),
      (l = (o = f.collectionItem) == null ? void 0 : o.pathVariables);
  }
  let c = s ? t.dataset.bingoSmoothScroll !== void 0 : void 0;
  return e(a, s, Object.assign({}, n, l), c), !0;
}
var Th = {},
  ic = new WeakMap();
function MA(e, t, n) {
  var r, i, o, a;
  let s =
    (i = (r = ic?.get(n ?? Th)) == null ? void 0 : r.get(e.collectionId)) ==
    null
      ? void 0
      : i.get(e.collectionItemId);
  if (s) return s;
  let l = (o = ic.get(n ?? Th)) != null ? o : new Map();
  ic.set(n ?? Th, l);
  let c = (a = l.get(e.collectionId)) != null ? a : new Map();
  l.set(e.collectionId, c);
  let u = new MS(async () => {
    try {
      let f = t[e.collectionId];
      if (!f)
        throw new Error(
          `Key not found in collection utils for collection id: "${e.collectionId}`
        );
      let d = await f();
      if (!d) throw new Error("Collection does not contain utility functions");
      return await d.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    } catch (f) {
      console.warn(
        `Failed to resolve slug: ${
          f instanceof Error ? f.message : "Unknown error"
        }`
      );
      return;
    }
  });
  return c.set(e.collectionItemId, u), u;
}
var OA = "webPageId";
function AA(e) {
  return !!(e && typeof e == "object" && OA in e);
}
function VA(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function VS(e) {
  if (!AS(e)) return e;
  let t = sp(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: VA(i) };
}
var DS = /:([a-zA-Z][a-zA-Z0-9_]*)/g,
  DA = m.createContext(void 0);
function BS() {
  var e;
  let t = m.useContext(DA),
    n = (e = Uh()) == null ? void 0 : e.pathVariables;
  return t || n;
}
function zS(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let o = Object.assign({}, i, r);
    for (let [, a] of e.path.matchAll(DS))
      if (!a || e.pathVariables[a] !== o[a]) return !1;
  }
  return !0;
}
function HS(e) {
  return e === void 0
    ? !1
    : !!(e.startsWith("#") || e.startsWith("/") || e.startsWith("."));
}
function BA(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function lp(e, t) {
  return e !== void 0 ? (e ? "_blank" : void 0) : t ? void 0 : "_blank";
}
function a1(e, t = void 0) {
  let n = HS(e),
    r = lp(t, n);
  return {
    href: BA(e, n) ? e : `https://${e}`,
    target: r,
    rel: n ? void 0 : "noopener",
  };
}
function NS(e, t, n, r, i) {
  return async (o) => {
    var a, s;
    if (o.metaKey) return;
    let l = ap(o.target);
    if (!l || l.getAttribute("target") === "_blank") return;
    o.preventDefault();
    let c = (a = e.getRoute) == null ? void 0 : a.call(e, t);
    c && R1(c?.page) && (await c.page.preload()),
      (s = e.navigate) == null || s.call(e, t, n, r, i);
  };
}
function zA(e, t, n, r, i, o) {
  let a = HS(e);
  if (!n.routes || !n.getRoute || !r || !a) return a1(e, t);
  try {
    let [s, l] = e.split("#", 2);
    $e(s !== void 0, "A href must have a defined pathname.");
    let { routeId: c, pathVariables: u } = q_(n.routes, s),
      f = n.getRoute(c);
    if (f) {
      jh(f.page);
      let d = Object.assign({}, i, u),
        p = Wh(f, {
          currentRoutePath: r.path,
          hash: l || void 0,
          pathVariables: d,
        }),
        y = lp(t, !0);
      return { href: p, target: y, onClick: NS(n, c, l || void 0, d, o) };
    }
  } catch {}
  return a1(e, t);
}
function HA(e, t, n, r) {
  let i = [];
  function o(s) {
    if (!s || !n) return;
    let l = {};
    for (let c in s) {
      let u = s[c];
      $e(u, "unresolvedSlug should be defined");
      let f = MA(u, n, r),
        d = f.preload();
      if (d) i.push(d);
      else {
        let p = f.read();
        p && (l[c] = p);
      }
    }
    return l;
  }
  let a = { path: o(e), hash: o(t) };
  if (i.length) throw Promise.allSettled(i);
  return a;
}
var k5 = m.forwardRef(
  ({ children: e, href: t, openInNewTab: n, smoothScroll: r, ...i }, o) => {
    let a = Sc(),
      s = Uh(),
      l = BS(),
      { activeLocale: c } = j_(),
      u = m.useMemo(() => {
        var d;
        if (!t) return {};
        let p = AA(t) ? t : VS(t);
        if (!p) return {};
        if (Pe(p)) return zA(p, n, a, s, l, r);
        let {
            webPageId: y,
            hash: b,
            pathVariables: S,
            hashVariables: h,
            unresolvedHashSlugs: v,
            unresolvedPathSlugs: g,
          } = p,
          x = (d = a.getRoute) == null ? void 0 : d.call(a, y),
          k = HA(g, v, a.collectionUtils, c);
        x && jh(x.page);
        let w = Object.assign({}, l, S, k?.path),
          E = Object.assign({}, l, h, k?.hash),
          C = lp(n, !0),
          T = Wh(x, {
            currentRoutePath: s?.path,
            hash: b,
            pathVariables: w,
            hashVariables: E,
          }),
          R = T.split("#", 2)[1];
        return {
          href: T,
          target: C,
          onClick: NS(a, y, R, w, r),
          "data-bingo-page-link-current": (s && zS(s, p, l)) || void 0,
        };
      }, [t, a, c, l, n, s, r]);
    if (!e) return null;
    let f = m.Children.only(e);
    return m.isValidElement(f)
      ? m.cloneElement(f, { ...i, ...u, ref: o ?? i.ref })
      : null;
  }
);
function E5({
  RootComponent: e,
  isWebsite: t,
  routeId: n,
  pathVariables: r,
  routes: i,
  collectionUtils: o,
  notFoundPage: a,
  isReducedMotion: s = !1,
  includeDataObserver: l = !1,
  localeId: c,
  locales: u,
}) {
  if (
    (m.useEffect(() => {
      t || B1.start();
    }, []),
    t)
  )
    return m.createElement(
      Sg,
      { reducedMotion: s ? "user" : "never" },
      m.createElement(
        kA,
        null,
        m.createElement(G_, {
          initialRoute: n,
          initialPathVariables: r,
          initialLocaleId: c,
          routes: i,
          collectionUtils: o,
          notFoundPage: a,
          locales: u,
          defaultPageStyle: { minHeight: "100vh", width: "auto" },
        })
      )
    );
  {
    let f = l ? VO : m.Fragment;
    return m.createElement(
      f,
      null,
      m.createElement(
        c_,
        { routes: i },
        m.createElement(
          FO,
          null,
          m.isValidElement(e) ? e : m.createElement(e, { key: n })
        )
      )
    );
  }
}
var $S = m.createContext(void 0),
  s1 = "ssr-variant";
function NA(e, t, n) {
  var r;
  return "ref" in e
    ? { ...t, ref: (r = e.ref) != null ? r : n }
    : { ...t, ref: n };
}
function Bh(e, t, n) {
  return m.createElement(
    m.Fragment,
    null,
    m.Children.map(e, (r) =>
      !r || !_a(r) || !Pa(r) ? null : m.cloneElement(r, NA(r, t, n))
    )
  );
}
function $A(e, t, n, r, i, o, a, s) {
  let l = m.Children.toArray(t),
    c = l[0];
  if (l.length !== 1 || !m.isValidElement(c))
    return (
      console.warn(s + ": expected exactly one React element for a child", t),
      Bh(t, n, r)
    );
  let u = [],
    f = [];
  for (let [b] of Object.entries(i)) {
    if (b === o) continue;
    let S = e[b];
    if (!S || !jA(c.props, S)) {
      f.push(b);
      continue;
    }
    let h = l1([b], a);
    h.length && u.push({ variants: h, propOverrides: S });
  }
  if (u.length === 0) return m.cloneElement(c, { ...n, ref: r });
  let d = [o, ...f],
    p = l1(d, a);
  p.length && u.unshift({ variants: p });
  let y = `.${s1} { display: contents }`;
  return m.createElement(
    m.Fragment,
    null,
    !a && m.createElement("style", { ...FS }, y),
    u.map(({ variants: b, propOverrides: S }) => {
      let h = b.join("+"),
        v = m.createElement(
          $S.Provider,
          { key: h, value: new Set(b) },
          m.cloneElement(c, { ...n, ...S, ref: r })
        ),
        g = WA(b, a, i);
      return (
        g.length
          ? ($e(
              u.length > 1,
              "Must branch out when there are hiddenClassNames"
            ),
            (v = m.createElement(
              "div",
              { key: h, className: `${s1} ${g.join(" ")}` },
              v
            )))
          : $e(
              u.length === 1,
              "Cannot branch out when hiddenClassNames is empty"
            ),
        v
      );
    })
  );
}
function WA(e, t, n) {
  let r = [];
  for (let [i, o] of Object.entries(n)) {
    let a = t && !t.has(i);
    if (e.includes(i) || a) continue;
    let s = o.split("-")[2];
    r.push(`hidden-${s}`);
  }
  return r;
}
function l1(e, t) {
  return t ? e.filter((n) => t.has(n)) : e;
}
function UA(e) {
  switch (e) {
    case "transformTemplate":
      return !1;
    default:
      return !1;
  }
}
function jA(e, t) {
  for (let n of Object.keys(t)) if (!UA(n) && !aS(e[n], t[n], !0)) return !0;
  return !1;
}
function XA(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
var R5 = m.forwardRef(function (
  { breakpoint: t, overrides: n, children: r, ...i },
  o
) {
  if (ri()) return Bh(r, XA(t, i, n), o);
  let a = m.useContext(IA);
  if (!a)
    return (
      console.warn("PropertyOverrides is missing GeneratedComponentContext"),
      Bh(r, i, o)
    );
  let { primaryVariantId: s, variantClassNames: l } = a,
    c = m.useContext($S);
  return $A(n, r, i, o, l, s, c, "PropertyOverrides");
});
var GA = class {
    constructor() {
      I(this, "entries", new Map());
    }
    set(e, t, n, r) {
      let i = this.entries.get(e);
      switch (t) {
        case "transformTemplate": {
          $e(
            typeof n == "string",
            `transformTemplate must be a string, received: ${n}`
          ),
            i
              ? (i.transformTemplate = n)
              : this.entries.set(e, { transformTemplate: n });
          break;
        }
        case "initial":
        case "animate": {
          $e(
            typeof n == "object",
            `${t} must be a valid object, received: ${n}`
          ),
            i
              ? ((i[t] = n), i.variantHash || (i.variantHash = r))
              : this.entries.set(e, { [t]: n, variantHash: r });
          break;
        }
        default:
          break;
      }
    }
    clear() {
      this.entries.clear();
    }
    toObject() {
      return Object.fromEntries(this.entries);
    }
  },
  I5 = new GA();
var P5 = "__Appear_Animation_Transform__";
var _5 = "data-bingo-appear-id",
  F5 = "data-bingo-appear-animation";
function Rh(e, t) {
  e.forEach((n) => clearTimeout(n)),
    e.clear(),
    t.forEach((n) => n && n("Callback cancelled by variant change")),
    t.clear();
}
function c1() {
  return new Set();
}
function M5(e) {
  let t = pn(c1),
    n = pn(c1);
  return (
    tO(() => () => Rh(n, t)),
    m.useEffect(() => () => Rh(n, t), [t, n]),
    m.useEffect(() => {
      Rh(n, t);
    }, [e, t, n]),
    m.useRef({
      activeVariantCallback:
        (r) =>
        (...i) =>
          new Promise((o, a) => (t.add(a), r(...i).then(o))).catch(() => {}),
      delay: async (r, i) => {
        await new Promise((o) => n.add(globalThis.setTimeout(() => o(!0), i))),
          r();
      },
    }).current
  );
}
function YA(e, t, n) {
  return m.useCallback(
    (r) => {
      var i, o, a;
      return n
        ? e
          ? t
            ? Object.assign(
                {},
                (i = n[e]) == null ? void 0 : i[r],
                (o = n[t]) == null ? void 0 : o[r]
              )
            : ((a = n[e]) == null ? void 0 : a[r]) || {}
          : {}
        : {};
    },
    [e, t, n]
  );
}
function KA(e) {
  for (let [t, n] of Object.entries(e)) if (Pt.matchMedia(n).matches) return t;
}
function V5(e, t, n = !0) {
  var r;
  let i = M(CS),
    o = B(ri() && (r = KA(t)) != null ? r : e),
    a = B(n && i ? e : o.current),
    s = Cc(),
    l = Bg(),
    c = se(
      (u) => {
        (u !== o.current || u !== a.current) &&
          l(() => {
            (o.current = a.current = u),
              ai(() => {
                s();
              });
          });
      },
      [l, s]
    );
  return (
    Z1(() => {
      !n || i !== !0 || c(o.current);
    }, []),
    X(() => {
      let u = [];
      for (let [f, d] of Object.entries(t)) {
        let p = Pt.matchMedia(d),
          y = (b) => {
            b.matches && c(f);
          };
        qA(p, y), u.push([p, y]);
      }
      return () => u.forEach(([f, d]) => ZA(f, d));
    }, [t, c]),
    [o.current, a.current]
  );
}
function qA(e, t) {
  e.addEventListener ? e.addEventListener("change", t) : e.addListener(t);
}
function ZA(e, t) {
  e.removeEventListener
    ? e.removeEventListener("change", t)
    : e.removeListener(t);
}
function WS() {
  return we.current() === "CANVAS";
}
function QA(e, t) {
  return `${e}-${t}`;
}
function JA(e, t) {
  let r = e.indexOf(t) + 1;
  r >= e.length && (r = 0);
  let i = e[r];
  return $e(i !== void 0, "nextVariant should be defined"), i;
}
function eV(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function u1(e, t, n) {
  let { hover: r, pressed: i } = e || {};
  if (i && n) return "pressed";
  if (r && t) return "hover";
}
function tV(e, t) {
  let n = t[e];
  return n || `bingo-v-${e}`;
}
function f1(e, t, n) {
  return e && n.has(e) ? e : t;
}
var nV = Symbol("cycle");
function X5({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: o = {},
  variantClassNames: a = {},
}) {
  let s = Cc(),
    l = pn(() => new Set(i)),
    c = m.useRef({
      isHovered: !1,
      isPressed: !1,
      baseVariant: f1(e, t, l),
      lastVariant: e,
      gestureVariant: void 0,
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    u = m.useCallback(
      (x) => {
        let {
            isHovered: k,
            isPressed: w,
            enabledGestures: E,
            defaultVariant: C,
          } = c.current,
          T = f1(x, C, l),
          R = u1(E?.[T], k, w),
          D = R ? QA(T, R) : void 0;
        return [T, D];
      },
      [l]
    ),
    f = m.useCallback(
      ({ isHovered: x, isPressed: k }) => {
        x !== void 0 && (c.current.isHovered = x),
          k !== void 0 && (c.current.isPressed = k);
        let {
            baseVariant: w,
            gestureVariant: E,
            defaultVariant: C,
          } = c.current,
          [T, R] = u(w);
        (T !== w || R !== E) &&
          ((c.current.baseVariant = T || C),
          (c.current.gestureVariant = R),
          s());
      },
      [u, s]
    ),
    d = m.useCallback(
      (x) => {
        let {
            defaultVariant: k,
            cycleOrder: w,
            baseVariant: E,
            gestureVariant: C,
          } = c.current,
          T = x === nV ? JA(w || [], E || k) : x,
          [R, D] = u(T);
        (R !== E || D !== C) &&
          ((c.current.baseVariant = R || k),
          (c.current.gestureVariant = D),
          s());
      },
      [u, s]
    );
  if (e !== c.current.lastVariant) {
    let [x, k] = u(e);
    (c.current.lastVariant = x),
      (x !== c.current.baseVariant || k !== c.current.gestureVariant) &&
        ((c.current.baseVariant = x), (c.current.gestureVariant = k));
  }
  let {
      baseVariant: p,
      gestureVariant: y,
      defaultVariant: b,
      enabledGestures: S,
      isHovered: h,
      isPressed: v,
    } = c.current,
    g = YA(c.current.baseVariant, c.current.gestureVariant, o);
  return m.useMemo(() => {
    let x = [];
    return (
      p !== b && x.push(p),
      y && x.push(y),
      {
        variants: x,
        baseVariant: p,
        gestureVariant: y,
        transition: eV(c.current.transitions, p),
        setVariant: d,
        setGestureState: f,
        addVariantProps: g,
        classNames: op(tV(p, a), u1(S?.[p], h, v)),
      }
    );
  }, [p, y, h, v, g, d, b, S, f, a]);
}
var rV = m.createContext(void 0),
  iV = () => m.useContext(rV),
  mr = (() => {
    function e(t, n) {
      return { a: t, b: n };
    }
    return (
      (e.intersection = (t, n) => {
        let r = t.a.x,
          i = t.a.y,
          o = t.b.x,
          a = t.b.y,
          s = n.a.x,
          l = n.a.y,
          c = n.b.x,
          u = n.b.y,
          f = (r - o) * (l - u) - (i - a) * (s - c);
        if (f === 0) return null;
        let d = ((s - c) * (r * a - i * o) - (r - o) * (s * u - l * c)) / f,
          p = ((l - u) * (r * a - i * o) - (i - a) * (s * u - l * c)) / f;
        return { x: d, y: p };
      }),
      (e.intersectionAngle = (t, n) => {
        let r = t.b.x - t.a.x,
          i = t.b.y - t.a.y,
          o = n.b.x - n.a.x,
          a = n.b.y - n.a.y;
        return Math.atan2(r * a - i * o, r * o + i * a) * (180 / Math.PI);
      }),
      (e.isOrthogonal = (t) => t.a.x === t.b.x || t.a.y === t.b.y),
      (e.perpendicular = (t, n) => {
        let r = t.a.x - t.b.x,
          i = t.a.y - t.b.y,
          o = mt(n.x - i, n.y + r);
        return e(o, n);
      }),
      (e.projectPoint = (t, n) => {
        let r = e.perpendicular(t, n);
        return e.intersection(t, r);
      }),
      (e.pointAtPercentDistance = (t, n) => {
        let r = e.distance(t),
          i = (n * r) / r;
        return {
          x: i * t.b.x + (1 - i) * t.a.x,
          y: i * t.b.y + (1 - i) * t.a.y,
        };
      }),
      (e.distance = (t) => mt.distance(t.a, t.b)),
      e
    );
  })();
function oV(e) {
  var t, n;
  let r = (e * Math.PI) / 180,
    i = { x: -Math.sin(r) * 100, y: Math.cos(r) * 100 },
    o = mt(i.x, i.y),
    a = mr(mt(0.5, 0.5), o),
    s = hc.points({ x: 0, y: 0, width: 1, height: 1 }),
    l = s
      .map((b) => ({ point: b, distance: mt.distance(o, b) }))
      .sort((b, S) => b.distance - S.distance),
    c = (t = l[0]) == null ? void 0 : t.point,
    u = (n = l[1]) == null ? void 0 : n.point;
  $e(c && u, "linearGradientLine: Must have 2 closest points.");
  let [f, d] = s.filter((b) => !mt.isEqual(b, c) && !mt.isEqual(b, u));
  $e(f && d, "linearGradientLine: Must have 2 opposing points.");
  let p = mr.intersection(a, mr(c, u)),
    y = mr.intersection(a, mr(f, d));
  return (
    $e(p && y, "linearGradientLine: Must have a start and end point."), mr(p, y)
  );
}
function aV(e, t) {
  var n, r, i, o;
  let a = oV(e.angle),
    s = Ua(e),
    l = (r = (n = s[0]) == null ? void 0 : n.position) != null ? r : 0,
    c =
      (o = (i = s[s.length - 1]) == null ? void 0 : i.position) != null ? o : 1,
    u = mr.pointAtPercentDistance(a, l),
    f = mr.pointAtPercentDistance(a, c),
    d = Ar([l, c], [0, 1]);
  return {
    id: `id${t}g${Ba.hash(e)}`,
    x1: u.x,
    y1: u.y,
    x2: f.x,
    y2: f.y,
    stops: s.map((p) => ({
      color: p.value,
      alpha: tp.getAlpha(p.value) * e.alpha,
      position: d(p.position),
    })),
  };
}
function sV(e, t) {
  return {
    id: `id${t}g${za.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Ua(e).map((n) => ({
      color: n.value,
      alpha: tp.getAlpha(n.value) * e.alpha,
      position: n.position,
    })),
  };
}
function US(e) {
  if (!Pe(e) || e.charAt(e.length - 1) !== "%") return !1;
  let n = e.slice(0, -1),
    r = parseFloat(n);
  return An(r);
}
function jS(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return An(n) ? n : 50;
}
function d1(e) {
  return US(e) ? jS(e) / 100 : e === "left" ? 0 : e === "right" ? 1 : 0.5;
}
function h1(e) {
  return US(e) ? jS(e) / 100 : e === "top" ? 0 : e === "bottom" ? 1 : 0.5;
}
function lV(e, t, n, r) {
  var i, o, a, s;
  if (
    ((e = Ie.get(e, "#09F")),
    !Mn.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)
  )
    return;
  let l = e.pixelWidth,
    c = e.pixelHeight,
    u,
    { fit: f } = e,
    d = 1,
    p = 1,
    y = 0,
    b = 0;
  if (f === "fill" || f === "fit" || f === "tile" || !f) {
    let h = 1,
      v = 1,
      g = l / c,
      x = t.height * g,
      k = t.width / g,
      w = x / t.width,
      E = k / t.height;
    if (f === "tile") {
      (i = e.backgroundSize) != null || (e.backgroundSize = 1),
        (d = Math.round(e.backgroundSize * (l / 2))),
        (p = Math.round(e.backgroundSize * (c / 2)));
      let C = (o = t.x) != null ? o : 0,
        T = (a = t.y) != null ? a : 0,
        R = 0,
        D = 0;
      r && ((R = C), (D = T)),
        (y = (t.width - d) * d1(e.positionX) + R),
        (b = (t.height - p) * h1(e.positionY) + D),
        (u = `translate(${y + C}, ${b + T})`);
    } else
      (f === "fill" || !f ? E > w : E < w)
        ? ((v = E), (b = (1 - E) * h1(e.positionY)))
        : ((h = w), (y = (1 - w) * d1(e.positionX))),
        (u = `translate(${y}, ${b}) scale(${h}, ${v})`);
  }
  return {
    id: `id${n}g-fillImage`,
    path: (s = e.src) != null ? s : "",
    transform: u,
    width: d,
    height: p,
    offsetX: y,
    offsetY: b,
  };
}
var cV = "bingo/asset-reference,";
function uV(e) {
  return e.startsWith(`data:${cV}`);
}
function fV(e, t) {
  var n;
  if (/^\w+:/.test(e) && !uV(e)) return e;
  typeof t != "number"
    ? (t = void 0)
    : t <= 512
    ? (t = 512)
    : t <= 1024
    ? (t = 1024)
    : t <= 2048
    ? (t = 2048)
    : (t = 4096);
  let r = we.current() === "EXPORT";
  return (n = _t.assetResolver(e, { pixelSize: t, isExport: r })) != null
    ? n
    : "";
}
var dV = ({
    id: e,
    path: t,
    transform: n,
    repeat: r,
    width: i,
    height: o,
    offsetX: a,
    offsetY: s,
  }) => {
    let l = fV(t);
    return m.createElement(
      "pattern",
      {
        id: e,
        width: r ? i : "100%",
        height: r ? o : "100%",
        patternContentUnits: r ? void 0 : "objectBoundingBox",
        patternUnits: r ? "userSpaceOnUse" : void 0,
        x: r ? a : void 0,
        y: r ? s : void 0,
      },
      m.createElement("image", {
        key: l,
        width: r ? i : 1,
        height: r ? o : 1,
        href: l,
        preserveAspectRatio: "none",
        transform: r ? void 0 : n,
        x: r ? 0 : void 0,
        y: r ? 0 : void 0,
      })
    );
  },
  p1 = ri(),
  hV = class {
    constructor(e, t, n, r, i = 0) {
      (this.id = e),
        (this.svg = t),
        (this.innerHTML = n),
        (this.viewBox = r),
        (this.count = i);
    }
  },
  pV = class {
    constructor() {
      I(this, "entries", new Map());
    }
    debugGetEntries() {
      return this.entries;
    }
    subscribe(e, t, n) {
      if (!e || e === "") return "";
      let r = this.entries.get(e);
      if (!r) {
        n || (n = "svg" + String(uS(e)) + "_" + String(e.length));
        let i = e,
          o,
          a = mV(e);
        a && (t && vV(a, n), (a.id = n), (o = xV(a)), (i = a.outerHTML)),
          (r = this.createDOMElementFor(i, n, o)),
          this.entries.set(e, r);
      }
      return (r.count += 1), r.innerHTML;
    }
    getViewBox(e) {
      if (!e || e === "") return;
      let t = this.entries.get(e);
      return t?.viewBox;
    }
    unsubscribe(e) {
      if (!e || e === "") return;
      let t = this.entries.get(e);
      t &&
        ((t.count -= 1),
        !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
    }
    maybeRemoveEntry(e) {
      let t = this.entries.get(e);
      t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
    }
    removeDOMElement(e) {
      let t = "container_" + e.id;
      if (p1) {
        let n = document?.querySelector("#" + t);
        n?.remove();
      }
    }
    createDOMElementFor(e, t, n) {
      let r = "container_" + t;
      if (p1) {
        let s = document.querySelector("#svg-templates");
        if (
          (s ||
            ((s = document.createElement("div")),
            (s.id = "svg-templates"),
            (s.style.position = "absolute"),
            (s.style.top = "0"),
            (s.style.left = "0"),
            (s.style.width = "0"),
            (s.style.height = "0"),
            (s.style.overflow = "hidden"),
            document.body.appendChild(s)),
          !document.querySelector("#" + r))
        ) {
          let l = document.createElement("div");
          (l.id = r),
            (l.innerHTML = e),
            l.firstElementChild && (l.firstElementChild.id = t),
            s.appendChild(l);
        }
      }
      let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
        a = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 100%; height: 100%"${
          i ? ` viewBox="${i}"` : ""
        }><use href="#${t}"></use></svg>`;
      return new hV(t, e, a, i);
    }
    clear() {
      this.entries.clear();
    }
    generateTemplates() {
      let e = [],
        t =
          "position: absolute; overflow: hidden; top: 0; left: 0; width: 0; height: 0";
      e.push(`<div id="svg-templates" style="${t}">`);
      for (let n of this.entries.values()) {
        let r = "container_" + n.id;
        e.push(`  <div id="${r}">`), e.push(`    ${n.svg}`), e.push("  </div>");
      }
      return (
        e.push("</div>"),
        e.join(`
`)
      );
    }
  },
  Gi = new pV();
function mV(e) {
  if (typeof DOMParser > "u") {
    console.warn("unable to find DOMParser");
    return;
  }
  try {
    let r = new DOMParser()
      .parseFromString(e, "text/html")
      .getElementsByTagName("svg")[0];
    if (!r) throw Error("no svg element found");
    return r;
  } catch {
    return;
  }
}
function vV(e, t) {
  let n = gV(t);
  XS(e, n);
}
function gV(e) {
  return e.replace(/[^a-z0-9\-_:.]|^[^a-z]+/gi, "");
}
function XS(e, t) {
  yV(e, t),
    Array.from(e.children).forEach((r) => {
      XS(r, t);
    });
}
function yV(e, t) {
  e.getAttributeNames().forEach((r) => {
    let i = e.getAttribute(r);
    if (!i) return;
    if (
      (r === "id" && e.setAttribute(r, `${t}_${i}`),
      r === "href" || r === "xlink:href")
    ) {
      let [a, s] = i.split("#");
      if (a) return;
      e.setAttribute(r, `#${t}_${s}`);
      return;
    }
    let o = "url(#";
    if (i.includes(o)) {
      let a = i.replace(o, `${o}${t}_`);
      e.setAttribute(r, a);
    }
  });
}
var bV = {
  cm: 96 / 2.54,
  mm: 96 / 2.54 / 10,
  Q: 96 / 2.54 / 40,
  in: 96,
  pc: 96 / 6,
  pt: 96 / 72,
  px: 1,
  em: 16,
  ex: 8,
  ch: 8,
  rem: 16,
};
function m1(e) {
  var t;
  if (!e) return;
  let n = /(-?[0-9.]+)([a-z%]*)/.exec(e);
  if (
    !(n?.[1] === void 0 || n?.[2] === void 0) &&
    !((t = n[2]) != null && t.startsWith("%"))
  )
    return Math.round(parseFloat(n[1]) * (bV[n[2]] || 1));
}
function xV(e) {
  let t = m1(e.getAttribute("width")),
    n = m1(e.getAttribute("height"));
  if (!(typeof t != "number" || typeof n != "number") && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function tz(e) {
  let t = Na(),
    n = Wa(e),
    r = m.useRef(null),
    i = iV();
  return (
    Ec(e, r),
    m.createElement(EV, {
      ...e,
      innerRef: r,
      parentSize: t,
      layoutId: n,
      providedWindow: i,
    })
  );
}
var SV = 5e4;
function wV(e) {
  return e.indexOf("image") >= 0;
}
function kV(e) {
  return e.indexOf("var(--") >= 0;
}
function CV(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function v1(e, t) {
  var n, r, i;
  let o = e.current;
  if (!o) return;
  let a = (n = t.providedWindow) != null ? n : Pt,
    s = o.firstElementChild;
  if (!s || !(s instanceof a.SVGSVGElement)) return;
  if (!s.getAttribute("viewBox")) {
    let y = Gi.getViewBox(t.svg);
    y && s.setAttribute("viewBox", y);
  }
  let { withExternalLayout: l, parentSize: c } = t;
  if (!l && Ha(t) && c !== 1 && c !== 2) return;
  let { intrinsicWidth: f, intrinsicHeight: d, _constraints: p } = t;
  ((r = s.viewBox.baseVal) == null ? void 0 : r.width) === 0 &&
    ((i = s.viewBox.baseVal) == null ? void 0 : i.height) === 0 &&
    j(f) &&
    j(d) &&
    s.setAttribute("viewBox", `0 0 ${f} ${d}`),
    p && p.aspectRatio
      ? s.setAttribute("preserveAspectRatio", "")
      : s.setAttribute("preserveAspectRatio", "none"),
    s.setAttribute("width", "100%"),
    s.setAttribute("height", "100%");
}
var EV = (() => {
    var e;
    return (
      (e = class extends La {
        constructor() {
          super(...arguments),
            I(this, "container", m.createRef()),
            I(this, "svgElement", null),
            I(this, "setSVGElement", (t) => {
              (this.svgElement = t), this.setLayerElement(t);
            }),
            I(this, "previouslyRenderedSVG", ""),
            I(this, "unmountedSVG", "");
        }
        static frame(t) {
          return Oa(t, t.parentSize || 0);
        }
        get frame() {
          return Oa(this.props, this.props.parentSize || 0);
        }
        componentDidMount() {
          if (this.unmountedSVG) {
            let { svgContentId: t } = this.props,
              n = t ? "svg" + t : null;
            Gi.subscribe(this.unmountedSVG, !t, n),
              (this.previouslyRenderedSVG = this.unmountedSVG);
          }
          this.props.svgContentId || v1(this.container, this.props);
        }
        componentWillUnmount() {
          Gi.unsubscribe(this.previouslyRenderedSVG),
            (this.unmountedSVG = this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = "");
        }
        componentDidUpdate(t) {
          if ((super.componentDidUpdate(t), this.props.svgContentId)) return;
          let { fill: n } = this.props;
          Mn.isImageObject(n) &&
            Mn.isImageObject(t.fill) &&
            n.src !== t.fill.src &&
            cS(this.svgElement, "fill", null, !1),
            v1(this.container, this.props);
        }
        collectLayout(t, n) {
          if (this.props.withExternalLayout) {
            (n.width = "100%"),
              (n.height = "100%"),
              (n.aspectRatio = "inherit");
            return;
          }
          let r = this.frame,
            {
              rotation: i,
              intrinsicWidth: o,
              intrinsicHeight: a,
              width: s,
              height: l,
            } = this.props,
            c = Ie.getNumber(i);
          if (
            ((t.opacity = j(this.props.opacity) ? this.props.opacity : 1),
            we.hasRestrictions() && r)
          ) {
            Object.assign(t, {
              transform: `translate(${r.x}px, ${r.y}px) rotate(${c.toFixed(
                4
              )}deg)`,
              width: `${r.width}px`,
              height: `${r.height}px`,
            }),
              Ha(this.props) && (t.position = "absolute");
            let u = r.width / (o || 1),
              f = r.height / (a || 1);
            n.transformOrigin = "top left";
            let { zoom: d, target: p } = dc;
            if (p === "EXPORT") {
              let y = d > 1 ? d : 1;
              (n.transform = `scale(${u * y}, ${f * y})`), (n.zoom = 1 / y);
            } else n.transform = `scale(${u}, ${f})`;
            o && a && ((n.width = o), (n.height = a));
          } else {
            let { left: u, right: f, top: d, bottom: p } = this.props;
            Object.assign(t, {
              left: u,
              right: f,
              top: d,
              bottom: p,
              width: s,
              height: l,
              rotate: c,
            }),
              Object.assign(n, {
                left: 0,
                top: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
              });
          }
        }
        render() {
          var t;
          let {
            id: n,
            visible: r,
            style: i,
            fill: o,
            svg: a,
            intrinsicHeight: s,
            intrinsicWidth: l,
            title: c,
            description: u,
            layoutId: f,
            className: d,
            variants: p,
            withExternalLayout: y,
            innerRef: b,
            svgContentId: S,
            height: h,
            opacity: v,
            width: g,
            ...x
          } = this.props;
          if (!y && (!r || !n)) return null;
          let k = (t = n ?? f) != null ? t : "svg";
          $a();
          let w = this.frame,
            E = w || { width: l || 100, height: s || 100 },
            C = { ...i, imageRendering: "pixelated", flexShrink: 0 },
            T = {};
          this.collectLayout(C, T),
            jM(this.props, C),
            rp(this.props, C),
            La.applyWillChange(this.props, C, !1);
          let R = null;
          if (typeof o == "string" || $.isColorObject(o)) {
            let K = $.isColorObject(o) ? o.initialValue || $.toRgbString(o) : o;
            (C.fill = K), (C.color = K);
          } else if (Ba.isLinearGradient(o)) {
            let K = o,
              N = `${encodeURI(n || "")}g${Ba.hash(K)}`;
            C.fill = `url(#${N})`;
            let { stops: Q, x1: ne, x2: Z, y1: We, y2: gt } = aV(K, k);
            R = m.createElement(
              "svg",
              {
                ref: this.setSVGElement,
                xmlns: "http://www.w3.org/2000/svg",
                width: "100%",
                height: "100%",
                style: { position: "absolute" },
              },
              m.createElement(
                "linearGradient",
                { id: N, x1: ne, x2: Z, y1: We, y2: gt },
                Q.map((De, Ue) =>
                  m.createElement("stop", {
                    key: Ue,
                    offset: De.position,
                    stopColor: De.color,
                    stopOpacity: De.alpha,
                  })
                )
              )
            );
          } else if (za.isRadialGradient(o)) {
            let K = o,
              N = `${encodeURI(n || "")}g${za.hash(K)}`;
            C.fill = `url(#${N})`;
            let Q = sV(K, k);
            R = m.createElement(
              "svg",
              {
                ref: this.setSVGElement,
                xmlns: "http://www.w3.org/2000/svg",
                width: "100%",
                height: "100%",
                style: { position: "absolute" },
              },
              m.createElement(
                "radialGradient",
                {
                  id: N,
                  cy: K.centerAnchorY,
                  cx: K.centerAnchorX,
                  r: K.widthFactor,
                },
                Q.stops.map((ne, Z) =>
                  m.createElement("stop", {
                    key: Z,
                    offset: ne.position,
                    stopColor: ne.color,
                    stopOpacity: ne.alpha,
                  })
                )
              )
            );
          } else if (Mn.isImageObject(o)) {
            let K = lV(o, E, k);
            K &&
              ((C.fill = `url(#${K.id})`),
              (R = m.createElement(
                "svg",
                {
                  ref: this.setSVGElement,
                  xmlns: "http://www.w3.org/2000/svg",
                  xmlnsXlink: "http://www.w3.org/1999/xlink",
                  width: "100%",
                  height: "100%",
                  style: { position: "absolute" },
                },
                m.createElement("defs", null, m.createElement(dV, { ...K }))
              )));
          }
          let D = { "data-bingo-component-type": "SVG" },
            L = !w;
          L && Object.assign(D, q1(this.props.center));
          let z =
              !R &&
              !C.fill &&
              !C.background &&
              !C.backgroundImage &&
              a.length < SV &&
              !wV(a) &&
              !kV(a),
            O = null;
          if (z)
            (C.backgroundSize = "100% 100%"),
              (C.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(
                a
              )}')`),
              Gi.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = "");
          else {
            let K = S ? "svg" + S : null,
              N = Gi.subscribe(a, !S, K);
            Gi.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = a),
              CV(C) && (C.overflow = "hidden"),
              (O = m.createElement(
                m.Fragment,
                null,
                R,
                m.createElement("div", {
                  key: Mn.isImageObject(o) ? o.src : "",
                  className: "svgContainer",
                  style: T,
                  ref: this.container,
                  dangerouslySetInnerHTML: { __html: N },
                })
              ));
          }
          let V = wc(this.props.as),
            { href: H, target: P, rel: Y, onClick: G } = this.props;
          return m.createElement(
            V,
            {
              ...D,
              ...x,
              layoutId: f,
              transformTemplate: L ? kc(this.props.center) : void 0,
              id: n,
              ref: b,
              style: C,
              className: d,
              variants: p,
              tabIndex: this.props.tabIndex,
              role: c || u ? "img" : void 0,
              "aria-label": c,
              "aria-description": u,
              href: H,
              target: P,
              rel: Y,
              onClick: G,
            },
            O
          );
        }
      }),
      I(e, "supportsConstraints", !0),
      I(e, "defaultSVGProps", {
        left: void 0,
        right: void 0,
        top: void 0,
        bottom: void 0,
        style: void 0,
        _constraints: { enabled: !0, aspectRatio: null },
        parentSize: 0,
        rotation: 0,
        visible: !0,
        svg: "",
        shadows: [],
      }),
      I(e, "defaultProps", { ...La.defaultProps, ...e.defaultSVGProps }),
      e
    );
  })(),
  TV = /[&<>'"]/g,
  RV = (e) =>
    e.replace(
      TV,
      (t) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        }[t] || t)
    ),
  IV =
    /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi;
function PV(e, t, n, r) {
  return e.replace(IV, (i, o, a, s, l, c, u) => {
    var f, d, p;
    if (a.toLowerCase() !== "a") return i;
    let y = l || c,
      b = sp(y.replace(/&amp;/g, "&"));
    if (!b || !b.target) return i;
    let S = t(b.target);
    if (!px(S) || !px(n)) return i;
    let h = S.path,
      v = n.path;
    if (!h || !v) return i;
    let g = ` data-bingo-page-link-target="${b.target}"`,
      x = $h(S, (f = b.element) != null ? f : void 0);
    x && (g += ` data-bingo-page-link-element="${b.element}"`);
    let k = VS(y);
    if (!k || Pe(k)) return i;
    zS(n, k, r) && (g += " data-bingo-page-link-current");
    let w = h,
      E = Object.assign(
        {},
        r,
        (d = b.collectionItem) == null ? void 0 : d.pathVariables
      );
    if (
      (Object.keys(E).length > 0 && (w = w.replace(DS, (C, T) => "" + E[T])),
      (p = b.collectionItem) != null && p.pathVariables)
    ) {
      let C = new URLSearchParams(b.collectionItem.pathVariables);
      g += ` data-bingo-page-link-path-variables="${C}"`;
    }
    return (w = T1(v, w)), o + s + `"${RV(w + (x ? `#${x}` : ""))}"` + g + u;
  });
}
var _V = $t(Hh(), 1);
var qi = "CUSTOM;";
function FV(e, t) {
  if (!t) return e.substring(0, e.lastIndexOf("."));
  let n =
      t.font.preferredFamily === ""
        ? t.font.fontFamily
        : t.font.preferredFamily,
    r =
      t.font.preferredSubFamily === ""
        ? t.font.fontSubFamily
        : t.font.preferredSubFamily;
  return `${n} ${r}`;
}
var LV = class {
  constructor() {
    I(this, "name", "custom"),
      I(this, "fontFamilies", []),
      I(this, "byFamilyName", new Map()),
      I(this, "assetsByFamily", new Map());
  }
  importFonts(e) {
    (this.fontFamilies.length = 0),
      this.byFamilyName.clear(),
      this.assetsByFamily.clear();
    let t = [];
    return (
      e.forEach((n) => {
        var r;
        if (!this.isValidCustomFontAsset(n)) return;
        let i = FV(n.name, n.properties),
          o = this.createFontFamily(i),
          a = {
            family: o,
            selector: `${qi}${i}`,
            variant: this.inferVariantName(i),
            postscriptName:
              (r = n.properties) == null ? void 0 : r.font.postscriptName,
            file: n.url,
          };
        o.fonts.push(a),
          (o.owner = n.ownerType === "team" ? "team" : "project"),
          this.assetsByFamily.set(i, n),
          t.push(...o.fonts);
      }),
      t
    );
  }
  isValidCustomFontAsset(e) {
    var t;
    return !e.mimeType.startsWith("font/") ||
      ((t = e.properties) == null ? void 0 : t.kind) !== "font" ||
      !e.properties.font
      ? !1
      : "fontFamily" in e.properties.font;
  }
  inferVariantName(e) {
    let t = [
        "thin",
        "ultra light",
        "extra light",
        "light",
        "normal",
        "medium",
        "semi bold",
        "bold",
        "extra bold",
        "black",
      ],
      n = [...t.map((a) => `${a} italic`), ...t],
      r = e.toLowerCase(),
      i = [...r.split(" "), ...r.split("-"), ...r.split("_")],
      o = n.find((a) => i.includes(a) || i.includes(a.replace(/\s+/g, "")));
    return o ? o.replace(/(^\w|\s\w)/g, (a) => a.toUpperCase()) : "Regular";
  }
  createFontFamily(e) {
    let t = this.byFamilyName.get(e);
    if (t) return t;
    let n = { source: this.name, name: e, fonts: [] };
    return this.addFontFamily(n), n;
  }
  addFontFamily(e) {
    this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
  }
  parseSelector(e) {
    if (!e.startsWith(qi)) return null;
    let t = e.split(qi);
    return t[1] === void 0 ? null : { source: "custom", name: t[1] };
  }
  getFontBySelector(e, t = !0) {
    let n = this.parseSelector(e);
    if (!n || (!t && !this.byFamilyName.get(n.name))) return;
    let r = this.getFontFamilyByName(n.name).fonts;
    return (
      r.find((o) => {
        var a;
        return (a = o.file) == null ? void 0 : a.endsWith(".woff2");
      }) || r[0]
    );
  }
  getFontFamilyByName(e) {
    let t = this.byFamilyName.get(e);
    if (t) return t;
    let n = { source: "custom", name: e, fonts: [] };
    return (
      n.fonts.push({
        selector: `${qi}${e}`,
        variant: this.inferVariantName(e),
        family: n,
      }),
      n
    );
  }
};
function GS(e, t, n) {
  var r, i, o, a, s, l, c, u, f, d, p;
  if (t.length === 0) return {};
  let y = n(e);
  if (!y) return {};
  let { weight: b, style: S } = y,
    h = new Map(),
    v = new Map();
  t.forEach((w) => {
    let E = Pe(w) ? w : w.name.toLocaleLowerCase(),
      C = n(E);
    C &&
      (h.set(`${C.weight}-${C.style}`, E),
      !(C.weight <= b) && (v.has(C.style) || v.set(C.style, E)));
  });
  let g = v.get(S),
    x = (r = v.get("italic")) != null ? r : v.get("oblique");
  y.weight <= 300
    ? ((g = (i = h.get(`400-${S}`)) != null ? i : g),
      (x =
        (a = (o = h.get("400-italic")) != null ? o : h.get("400-oblique")) !=
        null
          ? a
          : x))
    : y.weight <= 500
    ? ((g = (s = h.get(`700-${S}`)) != null ? s : g),
      (x =
        (c = (l = h.get("700-italic")) != null ? l : h.get("700-oblique")) !=
        null
          ? c
          : x))
    : ((g = (u = h.get(`900-${S}`)) != null ? u : g),
      (x =
        (d = (f = h.get("900-italic")) != null ? f : h.get("900-oblique")) !=
        null
          ? d
          : x));
  let k = (p = h.get(`${b}-italic`)) != null ? p : h.get(`${b}-oblique`);
  return { variantBold: g, variantItalic: k, variantBoldItalic: x };
}
var MV = ["display", "sans", "serif", "slab", "handwritten", "script"];
function OV(e) {
  return e
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter(AV);
}
function AV(e) {
  return MV.includes(e);
}
var sc = "FS;",
  YS = {
    thin: 100,
    hairline: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    ultra: 800,
    black: 900,
    heavy: 900,
  },
  KS = Object.keys(YS),
  VV = new RegExp(`^(${[...KS, "italic"].join("|")})`),
  vr = class {
    constructor() {
      I(this, "name", "fontshare"),
        I(this, "fontFamilies", []),
        I(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      var t;
      return (t = this.byFamilyName.get(e)) != null ? t : null;
    }
    static parseVariant(e) {
      let t = e.split(" "),
        n = KS.find((a) => t.includes(a)),
        r = e.includes("italic") ? "italic" : "normal";
      return {
        weight: (n && YS[n]) || 400,
        style: r === "italic" ? r : "normal",
      };
    }
    parseSelector(e) {
      if (!e.startsWith(sc)) return null;
      let t = e.split("-");
      if (t.length !== 2) return null;
      let [n, r] = t;
      return !n || !r
        ? null
        : { name: n.replace(sc, ""), variant: r, source: this.name };
    }
    static createSelector(e, t) {
      return `${sc}${e}-${t}`;
    }
    addFontFamily(e) {
      this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      for (let n of e) {
        let r = n.font_styles.filter((i) => {
          let o = i.name.toLowerCase();
          return !(!VV.exec(o) || o.endsWith("wide"));
        });
        for (let i of r) {
          let { name: o } = n,
            a = i.name.toLowerCase(),
            s = this.getFontFamilyByName(o);
          s ||
            ((s = { name: o, fonts: [], source: this.name }),
            this.addFontFamily(s));
          let l = vr.createSelector(o, a),
            c = vr.parseVariant(a) || { weight: void 0, style: void 0 },
            { weight: u, style: f } = c,
            {
              variantBold: d,
              variantBoldItalic: p,
              variantItalic: y,
            } = GS(a, r, vr.parseVariant),
            b = {
              family: s,
              variant: a,
              selector: l,
              selectorBold: d ? vr.createSelector(o, d) : void 0,
              selectorBoldItalic: p ? vr.createSelector(o, p) : void 0,
              selectorItalic: y ? vr.createSelector(o, y) : void 0,
              weight: u,
              style: f,
              file: i.file,
              category: DV(n.category),
            };
          s.fonts.push(b), t.push(b);
        }
      }
      return t;
    }
  };
function DV(e) {
  let t = {
      serif: "serif",
      sans: "sans-serif",
      slab: "slab",
      display: "display",
      handwritten: "handwriting",
      script: "handwriting",
    },
    n = OV(e)[0];
  return n && t[n];
}
var lc = "GF;",
  gr = class {
    constructor() {
      I(this, "name", "google"),
        I(this, "fontFamilies", []),
        I(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      var t;
      return (t = this.byFamilyName.get(e)) != null ? t : null;
    }
    static parseVariant(e) {
      if (e === "regular") return { style: "normal", weight: 400 };
      let t = /([0-9]*)(normal|italic)?/.exec(e);
      if (!t) return null;
      let n = parseInt(t[1] || "400"),
        r = t[2] === "italic" ? "italic" : "normal";
      return { weight: n, style: r };
    }
    parseSelector(e) {
      if (!e.startsWith(lc)) return null;
      let t = e.split("-");
      if (t.length !== 2) return null;
      let [n, r] = t;
      return !n || !r
        ? null
        : { name: n.replace(lc, ""), variant: r, source: this.name };
    }
    static createSelector(e, t) {
      return `${lc}${e}-${t}`;
    }
    addFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t;
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      return (
        e.forEach((n) => {
          n.variants.forEach((r) => {
            var i, o;
            let a = n.family,
              s = this.getFontFamilyByName(a);
            s || (s = this.addFontFamily(a));
            let l = (i = gr.parseVariant(r)) != null ? i : {},
              { weight: c, style: u } = l,
              f = gr.createSelector(a, r),
              {
                variantBold: d,
                variantItalic: p,
                variantBoldItalic: y,
              } = GS(r, n.variants, gr.parseVariant),
              b = {
                family: s,
                variant: r,
                selector: f,
                selectorBold: d ? gr.createSelector(a, d) : void 0,
                selectorBoldItalic: y ? gr.createSelector(a, y) : void 0,
                selectorItalic: p ? gr.createSelector(a, p) : void 0,
                weight: c,
                style: u,
                category: BV(n.category),
                file:
                  (o = n.files[r]) == null
                    ? void 0
                    : o.replace("http://", "https://"),
              };
            s.fonts.push(b), t.push(b);
          });
        }),
        t
      );
    }
  };
function BV(e) {
  let t = {
    serif: "serif",
    "sans-serif": "sans-serif",
    display: "display",
    handwriting: "handwriting",
    monospace: "monospace",
  };
  if (e) return t[e];
}
var zV = $t(o_(), 1),
  g1 = 5e3,
  HV = 3,
  qS = class extends Error {
    constructor(e) {
      super(e), (this.name = "FontLoadingError");
    }
  },
  Ih = new Map(),
  Ph = new Map(),
  NV = (e, t) => ZS(e, t);
async function ZS(e, t, n = 0) {
  let { family: r, url: i, stretch: o, unicodeRange: a } = e,
    s = e.weight || 500,
    l = e.style || "normal",
    c = `${r}-${l}-${s}-${i}`;
  if (!Ih.has(c) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: Pe(s) ? s : s?.toString(),
        style: l,
        stretch: o,
        unicodeRange: a,
      }),
      f = u
        .load()
        .then(() => (t.fonts.add(u), QS(r, l, s)))
        .catch((d) => {
          if (d.name !== "NetworkError") throw d;
          if (n < HV) return ZS(e, t, n + 1);
          throw new qS(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify(
              {
                family: r,
                style: l,
                weight: s,
                url: i,
                stretch: o,
                unicodeRange: a,
              }
            )}`
          );
        });
    Ih.set(c, f);
  }
  await Ih.get(c);
}
async function QS(e, t, n) {
  let r = `${e}-${t}-${n}`;
  if (!Ph.has(r)) {
    let o = new zV.default(e, { style: t, weight: n }).load(null, g1);
    Ph.set(r, o);
  }
  try {
    await Ph.get(r);
  } catch {
    throw new qS(
      `Failed to check if font is ready (${g1}ms timeout exceeded): ${JSON.stringify(
        { family: e, style: t, weight: n }
      )}`
    );
  }
}
var $V = {
    Arial: {
      Regular: { selector: "Arial", weight: void 0 },
      Black: { selector: "Arial-Black", weight: void 0 },
      Narrow: { selector: "Arial Narrow", weight: void 0 },
      "Rounded Bold": { selector: "Arial Rounded MT Bold", weight: void 0 },
    },
    Avenir: {
      Book: { selector: "Avenir", weight: void 0 },
      Light: { selector: "Avenir-Light", weight: void 0 },
      Medium: { selector: "Avenir-Medium", weight: void 0 },
      Heavy: { selector: "Avenir-Heavy", weight: void 0 },
      Black: { selector: "Avenir-Black", weight: void 0 },
    },
    "Avenir Next": {
      Regular: { selector: "Avenir Next", weight: void 0 },
      "Ultra Light": { selector: "AvenirNext-UltraLight", weight: void 0 },
      Medium: { selector: "AvenirNext-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNext-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNext-Heavy", weight: void 0 },
    },
    "Avenir Next Condensed": {
      Regular: { selector: "Avenir Next Condensed", weight: void 0 },
      "Ultra Light": {
        selector: "AvenirNextCondensed-UltraLight",
        weight: void 0,
      },
      Medium: { selector: "AvenirNextCondensed-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNextCondensed-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNextCondensed-Heavy", weight: void 0 },
    },
    Baskerville: {
      Regular: { selector: "Baskerville", weight: void 0 },
      "Semi Bold": { selector: "Baskerville-SemiBold", weight: void 0 },
    },
    "Bodoni 72": {
      Book: { selector: "Bodoni 72", weight: void 0 },
      Oldstyle: { selector: "Bodoni 72 Oldstyle", weight: void 0 },
      Smallcaps: { selector: "Bodoni 72 Smallcaps", weight: void 0 },
    },
    Courier: { Regular: { selector: "Courier", weight: void 0 } },
    "Courier New": { Regular: { selector: "Courier New", weight: void 0 } },
    Futura: {
      Medium: { selector: "Futura", weight: void 0 },
      Condensed: { selector: "Futura-CondensedMedium", weight: void 0 },
      "Condensed ExtraBold": {
        selector: "Futura-CondensedExtraBold",
        weight: void 0,
      },
    },
    Georgia: { Regular: { selector: "Georgia", weight: void 0 } },
    "Gill Sans": {
      Regular: { selector: "Gill Sans", weight: void 0 },
      Light: { selector: "GillSans-Light", weight: void 0 },
      SemiBold: { selector: "GillSans-SemiBold", weight: void 0 },
      UltraBold: { selector: "GillSans-UltraBold", weight: void 0 },
    },
    Helvetica: {
      Regular: { selector: "Helvetica", weight: void 0 },
      Light: { selector: "Helvetica-Light", weight: void 0 },
      Bold: { selector: "Helvetica-Bold", weight: void 0 },
      Oblique: { selector: "Helvetica-Oblique", weight: void 0 },
      "Light Oblique": { selector: "Helvetica-LightOblique", weight: void 0 },
      "Bold Oblique": { selector: "Helvetica-BoldOblique", weight: void 0 },
    },
    "Helvetica Neue": {
      Regular: { selector: "Helvetica Neue", weight: void 0 },
      UltraLight: { selector: "HelveticaNeue-UltraLight", weight: void 0 },
      Thin: { selector: "HelveticaNeue-Thin", weight: void 0 },
      Light: { selector: "HelveticaNeue-Light", weight: void 0 },
      Medium: { selector: "HelveticaNeue-Medium", weight: void 0 },
      Bold: { selector: "HelveticaNeue-Bold", weight: void 0 },
      Italic: { selector: "HelveticaNeue-Italic", weight: void 0 },
      "UltraLight Italic": {
        selector: "HelveticaNeue-UltraLightItalic",
        weight: void 0,
      },
      "Thin Italic": { selector: "HelveticaNeue-ThinItalic", weight: void 0 },
      "Light Italic": { selector: "HelveticaNeue-LightItalic", weight: void 0 },
      "Medium Italic": {
        selector: "HelveticaNeue-MediumItalic",
        weight: void 0,
      },
      "Bold Italic": { selector: "HelveticaNeue-BoldItalic", weight: void 0 },
      "Condensed Bold": {
        selector: "HelveticaNeue-CondensedBold",
        weight: void 0,
      },
      "Condensed Black": {
        selector: "HelveticaNeue-CondensedBlack",
        weight: void 0,
      },
    },
    "Hoefler Text": { Regular: { selector: "Hoefler Text", weight: void 0 } },
    Impact: { Regular: { selector: "Impact", weight: void 0 } },
    "Lucida Grande": { Regular: { selector: "Lucida Grande", weight: void 0 } },
    Menlo: { Regular: { selector: "Menlo", weight: void 0 } },
    Monaco: { Regular: { selector: "Monaco", weight: void 0 } },
    Optima: {
      Regular: { selector: "Optima", weight: void 0 },
      ExtraBlack: { selector: "Optima-ExtraBlack", weight: void 0 },
    },
    Palatino: { Regular: { selector: "Palatino", weight: void 0 } },
    "SF Pro Display": {
      Regular: { selector: "__SF-UI-Display-Regular__", weight: 400 },
      Ultralight: { selector: "__SF-UI-Display-Ultralight__", weight: 100 },
      Thin: { selector: "__SF-UI-Display-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Display-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Display-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Black__", weight: 900 },
      Italic: { selector: "__SF-UI-Display-Italic__", weight: 400 },
      "Ultralight Italic": {
        selector: "__SF-UI-Display-Ultralight-Italic__",
        weight: 100,
      },
      "Thin Italic": { selector: "__SF-UI-Display-Thin-Italic__", weight: 200 },
      "Light Italic": {
        selector: "__SF-UI-Display-Light-Italic__",
        weight: 300,
      },
      "Medium Italic": {
        selector: "__SF-UI-Display-Medium-Italic__",
        weight: 500,
      },
      "Semibold Italic": {
        selector: "__SF-UI-Display-Semibold-Italic__",
        weight: 600,
      },
      "Bold Italic": { selector: "__SF-UI-Display-Bold-Italic__", weight: 700 },
      "Heavy Italic": {
        selector: "__SF-UI-Display-Heavy-Italic__",
        weight: 800,
      },
      "Black Italic": {
        selector: "__SF-UI-Display-Black-Italic__",
        weight: 900,
      },
    },
    "SF Pro Display Condensed": {
      Regular: { selector: "__SF-UI-Display-Condensed-Regular__", weight: 400 },
      Ultralight: {
        selector: "__SF-UI-Display-Condensed-Ultralight__",
        weight: 100,
      },
      Thin: { selector: "__SF-UI-Display-Condensed-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Condensed-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Condensed-Medium__", weight: 500 },
      Semibold: {
        selector: "__SF-UI-Display-Condensed-Semibold__",
        weight: 600,
      },
      Bold: { selector: "__SF-UI-Display-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Condensed-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Condensed-Black__", weight: 900 },
    },
    "SF Pro Text": {
      Regular: { selector: "__SF-UI-Text-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Heavy__", weight: 800 },
      Italic: { selector: "__SF-UI-Text-Italic__", weight: 400 },
      "Light Italic": { selector: "__SF-UI-Text-Light-Italic__", weight: 200 },
      "Medium Italic": {
        selector: "__SF-UI-Text-Medium-Italic__",
        weight: 500,
      },
      "Semibold Italic": {
        selector: "__SF-UI-Text-Semibold-Italic__",
        weight: 600,
      },
      "Bold Italic": { selector: "__SF-UI-Text-Bold-Italic__", weight: 700 },
      "Heavy Italic": { selector: "__SF-UI-Text-Heavy-Italic__", weight: 800 },
    },
    "SF Pro Text Condensed": {
      Regular: { selector: "__SF-UI-Text-Condensed-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Condensed-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Condensed-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Condensed-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Condensed-Heavy__", weight: 800 },
    },
    Tahoma: { Regular: { selector: "Tahoma", weight: void 0 } },
    Times: { Regular: { selector: "Times", weight: void 0 } },
    "Times New Roman": {
      Regular: { selector: "Times New Roman", weight: void 0 },
    },
    Trebuchet: { Regular: { selector: "Trebuchet MS", weight: void 0 } },
    Verdana: { Regular: { selector: "Verdana", weight: void 0 } },
  },
  WV = {
    "__SF-Compact-Display-Regular__":
      "SFCompactDisplay-Regular|.SFCompactDisplay-Regular",
    "__SF-Compact-Display-Ultralight__":
      "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight",
    "__SF-Compact-Display-Thin__":
      "SFCompactDisplay-Thin|.SFCompactDisplay-Thin",
    "__SF-Compact-Display-Light__":
      "SFCompactDisplay-Light|.SFCompactDisplay-Light",
    "__SF-Compact-Display-Medium__":
      "SFCompactDisplay-Medium|.SFCompactDisplay-Medium",
    "__SF-Compact-Display-Semibold__":
      "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold",
    "__SF-Compact-Display-Heavy__":
      "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy",
    "__SF-Compact-Display-Black__":
      "SFCompactDisplay-Black|.SFCompactDisplay-Black",
    "__SF-Compact-Display-Bold__":
      "SFCompactDisplay-Bold|.SFCompactDisplay-Bold",
    "__SF-UI-Text-Regular__":
      ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText",
    "__SF-UI-Text-Light__":
      ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light",
    "__SF-UI-Text-Medium__":
      ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium",
    "__SF-UI-Text-Semibold__":
      ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold",
    "__SF-UI-Text-Bold__":
      ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold",
    "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy",
    "__SF-UI-Text-Italic__":
      ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic",
    "__SF-UI-Text-Light-Italic__":
      ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic",
    "__SF-UI-Text-Medium-Italic__":
      ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic",
    "__SF-UI-Text-Semibold-Italic__":
      ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic",
    "__SF-UI-Text-Bold-Italic__":
      ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic",
    "__SF-UI-Text-Heavy-Italic__":
      ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic",
    "__SF-Compact-Text-Regular__":
      "SFCompactText-Regular|.SFCompactText-Regular",
    "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light",
    "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium",
    "__SF-Compact-Text-Semibold__":
      "SFCompactText-Semibold|.SFCompactText-Semibold",
    "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold",
    "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy",
    "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic",
    "__SF-Compact-Text-Light-Italic__":
      "SFCompactText-LightItalic|.SFCompactText-LightItalic",
    "__SF-Compact-Text-Medium-Italic__":
      "SFCompactText-MediumItalic|.SFCompactText-MediumItalic",
    "__SF-Compact-Text-Semibold-Italic__":
      "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic",
    "__SF-Compact-Text-Bold-Italic__":
      "SFCompactText-BoldItalic|.SFCompactText-BoldItalic",
    "__SF-Compact-Text-Heavy-Italic__":
      "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic",
    "__SF-UI-Display-Condensed-Regular__":
      ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular",
    "__SF-UI-Display-Condensed-Ultralight__":
      ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight",
    "__SF-UI-Display-Condensed-Thin__":
      ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin",
    "__SF-UI-Display-Condensed-Light__":
      ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light",
    "__SF-UI-Display-Condensed-Medium__":
      ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium",
    "__SF-UI-Display-Condensed-Semibold__":
      ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold",
    "__SF-UI-Display-Condensed-Bold__":
      ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold",
    "__SF-UI-Display-Condensed-Heavy__":
      ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy",
    "__SF-UI-Display-Condensed-Black__":
      ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black",
    "__SF-UI-Display-Regular__":
      ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay",
    "__SF-UI-Display-Ultralight__":
      ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight",
    "__SF-UI-Display-Thin__":
      ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin",
    "__SF-UI-Display-Light__":
      ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light",
    "__SF-UI-Display-Medium__":
      ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium",
    "__SF-UI-Display-Semibold__":
      ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold",
    "__SF-UI-Display-Bold__":
      ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold",
    "__SF-UI-Display-Heavy__":
      ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy",
    "__SF-UI-Display-Black__":
      ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black",
    "__SF-UI-Display-Italic__":
      ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic",
    "__SF-UI-Display-Ultralight-Italic__":
      ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic",
    "__SF-UI-Display-Thin-Italic__":
      ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic",
    "__SF-UI-Display-Light-Italic__":
      ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic",
    "__SF-UI-Display-Medium-Italic__":
      ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic",
    "__SF-UI-Display-Semibold-Italic__":
      ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic",
    "__SF-UI-Display-Bold-Italic__":
      ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic",
    "__SF-UI-Display-Heavy-Italic__":
      ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic",
    "__SF-UI-Display-Black-Italic__":
      ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic",
    "__SF-UI-Text-Condensed-Regular__":
      ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular",
    "__SF-UI-Text-Condensed-Light__":
      ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light",
    "__SF-UI-Text-Condensed-Medium__":
      ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium",
    "__SF-UI-Text-Condensed-Semibold__":
      ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold",
    "__SF-UI-Text-Condensed-Bold__":
      ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold",
    "__SF-UI-Text-Condensed-Heavy__":
      ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy",
    "__SF-Compact-Rounded-Regular__":
      "SFCompactRounded-Regular|.SFCompactRounded-Regular",
    "__SF-Compact-Rounded-Ultralight__":
      "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight",
    "__SF-Compact-Rounded-Thin__":
      "SFCompactRounded-Thin|.SFCompactRounded-Thin",
    "__SF-Compact-Rounded-Light__":
      "SFCompactRounded-Light|.SFCompactRounded-Light",
    "__SF-Compact-Rounded-Medium__":
      "SFCompactRounded-Medium|.SFCompactRounded-Medium",
    "__SF-Compact-Rounded-Semibold__":
      "SFCompactRounded-Semibold|.SFCompactRounded-Semibold",
    "__SF-Compact-Rounded-Bold__":
      "SFCompactRounded-Bold|.SFCompactRounded-Bold",
    "__SF-Compact-Rounded-Heavy__":
      "SFCompactRounded-Heavy|.SFCompactRounded-Heavy",
    "__SF-Compact-Rounded-Black__":
      "SFCompactRounded-Black|.SFCompactRounded-Black",
  },
  y1 = $V,
  UV = "System Default",
  jV = class {
    constructor() {
      I(this, "name", "local"),
        I(this, "fontFamilies", []),
        I(this, "byFamilyName", new Map()),
        I(this, "fontAliasBySelector", new Map()),
        I(this, "fontAliases", new Map()),
        I(this, "interFontSelectors", new Set());
    }
    getFontFamilyByName(e) {
      var t;
      return (t = this.byFamilyName.get(e)) != null ? t : null;
    }
    createFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.addFontFamily(t), t;
    }
    addFontFamily(e) {
      this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
    }
    importFonts() {
      let e = [];
      for (let i of Object.keys(y1)) {
        let o = y1[i];
        if (!o) continue;
        let a = this.createFontFamily(i);
        for (let s of Object.keys(o)) {
          let l = o[s];
          if (!l) continue;
          let { selector: c, weight: u } = l,
            f = { variant: s, selector: c, weight: u, family: a };
          a.fonts.push(f);
        }
        e.push(...a.fonts);
      }
      for (let [i, o] of Object.entries(WV)) this.addFontAlias(i, o);
      let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
      this.addFontFamily(t);
      for (let [i, o] of n) this.addFontAlias(i, o);
      e.push(...t.fonts);
      let r = this.importInterFontFamily();
      return e.push(...r.fonts), e;
    }
    importInterFontFamily() {
      let e = [
          {
            variant: "Regular",
            selector: "Inter",
            weight: 400,
            selectorBold: "Inter-Bold",
            selectorBoldItalic: "Inter-BoldItalic",
            selectorItalic: "Inter-Italic",
          },
          {
            variant: "Thin",
            selector: "Inter-Thin",
            weight: 100,
            selectorBold: "Inter",
            selectorBoldItalic: "Inter-Italic",
            selectorItalic: "Inter-ThinItalic",
          },
          {
            variant: "Extra Light",
            selector: "Inter-ExtraLight",
            weight: 200,
            selectorBold: "Inter",
            selectorBoldItalic: "Inter-Italic",
            selectorItalic: "Inter-ExtraLightItalic",
          },
          {
            variant: "Light",
            selector: "Inter-Light",
            weight: 300,
            selectorBold: "Inter",
            selectorBoldItalic: "Inter-Italic",
            selectorItalic: "Inter-LightItalic",
          },
          {
            variant: "Medium",
            selector: "Inter-Medium",
            weight: 500,
            selectorBold: "Inter-Bold",
            selectorBoldItalic: "Inter-BoldItalic",
            selectorItalic: "Inter-MediumItalic",
          },
          {
            variant: "Semibold",
            selector: "Inter-SemiBold",
            weight: 600,
            selectorBold: "Inter-Black",
            selectorBoldItalic: "Inter-BlackItalic",
            selectorItalic: "Inter-SemiBoldItalic",
          },
          {
            variant: "Bold",
            selector: "Inter-Bold",
            weight: 700,
            selectorBold: "Inter-Black",
            selectorBoldItalic: "Inter-BlackItalic",
            selectorItalic: "Inter-BoldItalic",
          },
          {
            variant: "Extra Bold",
            selector: "Inter-ExtraBold",
            weight: 800,
            selectorBold: "Inter-Black",
            selectorBoldItalic: "Inter-BlackItalic",
            selectorItalic: "Inter-ExtraBoldItalic",
          },
          {
            variant: "Black",
            selector: "Inter-Black",
            weight: 900,
            selectorBold: void 0,
            selectorBoldItalic: "Inter-BlackItalic",
            selectorItalic: void 0,
          },
          {
            variant: "Thin Italic",
            selector: "Inter-ThinItalic",
            weight: 100,
            selectorBold: "Inter-Italic",
            selectorBoldItalic: "Inter-Italic",
            selectorItalic: "Inter-ThinItalic",
          },
          {
            variant: "Extra Light Italic",
            selector: "Inter-ExtraLightItalic",
            weight: 200,
            selectorBold: "Inter-Italic",
            selectorBoldItalic: "Inter-Italic",
            selectorItalic: "Inter-ExtraLightItalic",
          },
          {
            variant: "Light Italic",
            selector: "Inter-LightItalic",
            weight: 300,
            selectorBold: "Inter-Italic",
            selectorBoldItalic: "Inter-Italic",
            selectorItalic: "Inter-LightItalic",
          },
          {
            variant: "Italic",
            selector: "Inter-Italic",
            weight: 400,
            selectorBold: "Inter-BoldItalic",
            selectorBoldItalic: "Inter-BoldItalic",
            selectorItalic: "Inter-Italic",
          },
          {
            variant: "Medium Italic",
            selector: "Inter-MediumItalic",
            weight: 500,
            selectorBold: "Inter-BoldItalic",
            selectorBoldItalic: "Inter-BoldItalic",
            selectorItalic: "Inter-MediumItalic",
          },
          {
            variant: "Semibold Italic",
            selector: "Inter-SemiBoldItalic",
            weight: 600,
            selectorBold: "Inter-BoldItalic",
            selectorBoldItalic: "Inter-BoldItalic",
            selectorItalic: "Inter-SemiBoldItalic",
          },
          {
            variant: "Bold Italic",
            selector: "Inter-BoldItalic",
            weight: 700,
            selectorBold: "Inter-BlackItalic",
            selectorBoldItalic: "Inter-BlackItalic",
            selectorItalic: "Inter-BoldItalic",
          },
          {
            variant: "Extra Bold Italic",
            selector: "Inter-ExtraBoldItalic",
            weight: 800,
            selectorBold: "Inter-BlackItalic",
            selectorBoldItalic: "Inter-BlackItalic",
            selectorItalic: "Inter-ExtraBoldItalic",
          },
          {
            variant: "Black Italic",
            selector: "Inter-BlackItalic",
            weight: 900,
            selectorBold: void 0,
            selectorBoldItalic: void 0,
            selectorItalic: "Inter-BlackItalic",
          },
        ],
        t = this.createFontFamily("Inter");
      for (let n of e) {
        let {
            variant: r,
            selector: i,
            weight: o,
            selectorBold: a,
            selectorBoldItalic: s,
            selectorItalic: l,
          } = n,
          c = {
            variant: r,
            selector: i,
            selectorBold: a,
            selectorBoldItalic: s,
            selectorItalic: l,
            weight: o,
            family: t,
            style: /italic/i.test(i) ? "italic" : "normal",
          };
        t.fonts.push(c);
      }
      return t.fonts.forEach((n) => this.interFontSelectors.add(n.selector)), t;
    }
    addFontAlias(e, t) {
      this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e);
    }
    getSystemFontFamily() {
      let e =
          "system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif",
        t = { name: UV, fonts: [], source: this.name },
        n = new Map(),
        r = [400, 100, 200, 300, 500, 600, 700, 800, 900],
        i = ["normal", "italic"];
      for (let o of i)
        for (let a of r) {
          let s = XV(a, o),
            l = `__SystemDefault-${a}-${o}__`,
            c = { variant: s, selector: l, style: o, weight: a, family: t };
          t.fonts.push(c), n.set(l, e);
        }
      return { fontFamily: t, aliases: n };
    }
    getFontAliasBySelector(e) {
      return this.fontAliasBySelector.get(e) || null;
    }
    getFontSelectorByAlias(e) {
      return this.fontAliases.get(e) || null;
    }
    isFontFamilyAlias(e) {
      return !!(e && e.match(/^__.*__$/));
    }
  },
  b1 = {
    100: "Thin",
    200: "Extra Light",
    300: "Light",
    400: "Normal",
    500: "Medium",
    600: "Semi Bold",
    700: "Bold",
    800: "Extra Bold",
    900: "Black",
  };
function XV(e, t) {
  let n = t === "normal" ? "Regular" : "Italic";
  return e === 400 ? n : t !== "normal" ? `${b1[e]} ${n}` : `${b1[e]}`;
}
var GV = class {
    constructor() {
      I(this, "enabled", !1),
        I(this, "bySelector", new Map()),
        I(this, "getGoogleFontsListPromise"),
        I(this, "getFontshareFontsListPromise"),
        I(this, "loadedSelectors", new Set()),
        I(this, "googleFamilyNames", new Set()),
        I(this, "defaultFont"),
        I(this, "local"),
        I(this, "google"),
        I(this, "fontshare"),
        I(this, "custom"),
        (this.local = new jV()),
        (this.google = new gr()),
        (this.fontshare = new vr()),
        (this.custom = new LV()),
        (this.bySelector = new Map()),
        this.importLocalFonts();
      let e = this.getFontBySelector("Inter");
      $e(e, "Can\u2019t find Inter font"), (this.defaultFont = e);
    }
    addFont(e) {
      this.bySelector.set(e.selector, e);
    }
    getAvailableFonts() {
      return Array.from(this.bySelector.values());
    }
    importLocalFonts() {
      this.local.importFonts().forEach((e) => {
        this.addFont(e),
          this.local.interFontSelectors.has(e.selector) || this.loadFont(e);
      });
    }
    async importGoogleFonts() {
      if (!this.getGoogleFontsListPromise) {
        this.getGoogleFontsListPromise = _t.fetchGoogleFontsList();
        let e = await this.getGoogleFontsListPromise;
        this.google.importFonts(e).forEach((t) => {
          this.googleFamilyNames.add(t.family.name.toLowerCase()),
            this.addFont(t);
        });
      }
      return this.getGoogleFontsListPromise;
    }
    async importFontshareFonts() {
      if (!this.getFontshareFontsListPromise) {
        this.getFontshareFontsListPromise = _t.fetchFontshareFontsList();
        let e = await this.getFontshareFontsListPromise;
        this.fontshare.importFonts(e).forEach((t) => {
          this.googleFamilyNames.has(t.family.name.toLowerCase()) ||
            this.addFont(t);
        });
      }
      return this.getFontshareFontsListPromise;
    }
    importCustomFonts(e) {
      this.bySelector.forEach((t, n) => {
        n.startsWith(qi) && this.bySelector.delete(n);
      }),
        this.custom.importFonts(e).forEach((t) => this.addFont(t));
    }
    getFontFamily(e) {
      return this[e.source].getFontFamilyByName(e.name);
    }
    getFontBySelector(e, t = !0) {
      return e.startsWith(qi)
        ? this.custom.getFontBySelector(e, t)
        : this.bySelector.get(e);
    }
    getDraftPropertiesBySelector(e) {
      let t = this.getFontBySelector(e);
      if (t)
        return {
          style: t.style,
          weight: t.weight,
          variant: t.variant,
          family: t.family.name,
          source: t.family.source,
          category: t.category,
        };
      let n = this.google.parseSelector(e);
      if (n) {
        let i = gr.parseVariant(n.variant);
        if (i)
          return {
            style: i.style,
            weight: i.weight,
            variant: n.variant,
            family: n.name,
            source: "google",
            category: void 0,
          };
      }
      let r = this.fontshare.parseSelector(e);
      if (r) {
        let i = vr.parseVariant(r.variant);
        if (i)
          return {
            style: i.style,
            weight: i.weight,
            variant: r.variant,
            family: r.name,
            source: "fontshare",
            category: void 0,
          };
      }
      return null;
    }
    isSelectorLoaded(e) {
      return this.loadedSelectors.has(e);
    }
    async loadFont(e) {
      return this.isSelectorLoaded(e.selector)
        ? 0
        : e.family.source === "local"
        ? (this.local.interFontSelectors.has(e.selector) &&
            _V.default.env.NODE_ENV !== "test" &&
            (await QS(e.family.name, e.style, e.weight)),
          this.loadedSelectors.add(e.selector),
          1)
        : e.file
        ? (await NV(
            {
              family: e.family.name,
              url: e.file,
              weight: e.weight,
              style: e.style,
            },
            document
          ),
          this.loadedSelectors.add(e.selector),
          1)
        : Promise.reject(`Unable to load font: ${e.selector}`);
    }
    async loadFontsFromSelectors(e) {
      if (!this.enabled) return [];
      let t = e.some((i) => i.startsWith(lc)),
        n = e.some((i) => i.startsWith(sc));
      if (t || n) {
        try {
          await this.importGoogleFonts();
        } catch (i) {
          Ma("Failed to load Google fonts:", i);
        }
        try {
          await this.importFontshareFonts();
        } catch (i) {
          Ma("Failed to load Fontshare fonts:", i);
        }
      }
      let r = e.map((i) => this.bySelector.get(i)).filter((i) => !!i);
      return Promise.allSettled(r.map((i) => this.loadFont(i)));
    }
    async loadFonts(e) {
      return {
        newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
          (r) => r.status === "fulfilled" && r.value === 1
        ).length,
      };
    }
    async loadMissingFonts(e, t) {
      let n = e.filter((i) => !cc.isSelectorLoaded(i));
      if (n.length === 0) return;
      await cc.loadWebFontsFromSelectors(n),
        n.every((i) => cc.isSelectorLoaded(i)) && t && t();
    }
    async loadWebFontsFromSelectors(e) {
      return this.loadFontsFromSelectors(e);
    }
  },
  cc = new GV();
Promise.allSettled =
  Promise.allSettled ||
  ((e) =>
    Promise.all(
      e.map((t) =>
        t
          .then((n) => ({ status: "fulfilled", value: n }))
          .catch((n) => ({ status: "rejected", reason: n }))
      )
    ));
function YV(e, t) {
  return e.length === t.length && e.every((n, r) => n === t[r]);
}
var KV = "(?:<a[^>]*>)?",
  qV = "(?:</a>)?",
  ZV = "<[^>]+>",
  QV = "</[^>]+>",
  JV = "<(?:div|span)[^>]*>",
  eD = "</(?:div|span)>",
  tD = "<[^>]+>",
  nD = "</[^>]+>",
  iz = new RegExp(
    `^(${KV}${ZV}${JV}${tD}).*?(${nD}).*?(${eD}${QV}${qV})$`,
    "s"
  );
var bc = class {
  constructor(e) {
    I(this, "__class", "PathSegment"),
      I(this, "x", 0),
      I(this, "y", 0),
      I(this, "handleMirroring", "straight"),
      I(this, "handleOutX", 0),
      I(this, "handleOutY", 0),
      I(this, "handleInX", 0),
      I(this, "handleInY", 0),
      I(this, "radius", 0),
      e && Object.assign(this, e);
  }
  merge(e) {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this, e);
  }
};
I(bc, "displayName", "WithClassDiscriminatorMixin(PathSegment)");
bc.prototype.__class = "PathSegment";
((e) => {
  (e.point = (t) => ({ x: t.x, y: t.y })),
    (e.handleOut = (t) => ({ x: t.handleOutX, y: t.handleOutY })),
    (e.handleIn = (t) => ({ x: t.handleInX, y: t.handleInY })),
    (e.calculatedHandleOut = (t) => {
      switch (t.handleMirroring) {
        case "symmetric":
        case "disconnected":
        case "asymmetric":
          return mt.add((0, e.point)(t), (0, e.handleOut)(t));
        default:
          return { x: t.x, y: t.y };
      }
    }),
    (e.calculatedHandleIn = (t) => {
      switch (t.handleMirroring) {
        case "symmetric":
          return mt.subtract((0, e.point)(t), (0, e.handleOut)(t));
        case "disconnected":
        case "asymmetric":
          return mt.add((0, e.point)(t), (0, e.handleIn)(t));
        default:
          return (0, e.point)(t);
      }
    }),
    (e.curveDefault = (t, n) => {
      if (t.length > 2) {
        let r, i;
        n === 0 ? (r = t[t.length - 1]) : (r = t[n - 1]),
          n === t.length - 1 ? (i = t[0]) : (i = t[n + 1]),
          $e(r, "pointBefore should be defined"),
          $e(i, "pointAfter should be defined");
        let o = mt.subtract((0, e.point)(i), (0, e.point)(r));
        return { x: o.x / 4, y: o.y / 4 };
      }
      return { x: 10, y: 10 };
    });
})(bc || (bc = {}));
var Yi = class {
    constructor() {
      I(this, "canvas", { children: [] }),
        I(this, "listeners", []),
        I(this, "ids", []);
    }
    static shared(e) {
      if (e) {
        let t = new Yi();
        return t.setCanvas(e), t;
      }
      return Yi.__shared || (Yi.__shared = new Yi()), Yi.__shared;
    }
    updateNode(e) {
      let t = e.props.id,
        n = this.canvas.children;
      n || (this.canvas.children = n = []);
      let r = !1;
      for (let i = 0; i < n.length; i++) {
        let o = n[i];
        if (o?.props.id === t) {
          (r = !0), (n[i] = e);
          break;
        }
      }
      r || n.push(e), this.setCanvas(this.canvas);
    }
    setCanvas(e) {
      e.children &&
        ((this.canvas = e),
        this.listeners.forEach((t, n) => {
          let r = this.ids[n];
          if (!r) return;
          let i = zh(e, r);
          t.setState({ data: i });
        }));
    }
    registerListener(e, t) {
      return this.listeners.push(e), this.ids.push(t), zh(this.canvas, t);
    }
    removeListener(e) {
      let t = this.listeners.indexOf(e);
      t !== -1 && (this.listeners.splice(t, 1), this.ids.splice(t, 1));
    }
  },
  rD = Yi;
I(rD, "__shared", null);
function x1(e, t) {
  let { name: n, props: r } = t;
  return (r && r.id === e) || n === e;
}
function zh(e, t) {
  if (!e) return null;
  if (x1(t, e)) return e;
  let { children: n } = e;
  if (!n || !Kh(n)) return null;
  for (let r of n) if (x1(t, r)) return r;
  for (let r of n) {
    let i = zh(r, t);
    if (i) return i;
  }
  return null;
}
var iD = m.createContext(null),
  cz = iD.Provider;
var dz = m.forwardRef(function (t, n) {
  let { background: r, children: i, alt: o, ...a } = t,
    s = { ...a.style };
  r && delete s.background;
  let l = wc(t.as);
  return m.createElement(
    l,
    { ...a, style: s, ref: n },
    r && m.createElement(K1, { image: r, alt: o }),
    i
  );
});
var oD = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  },
  JS = /[&<>"']/g,
  aD = RegExp(JS.source);
function S1(e) {
  return e && aD.test(e)
    ? e.replace(JS, (t) => {
        var n;
        return (n = oD[t]) != null ? n : "";
      })
    : e || "";
}
var w1 = "{{ text-placeholder }}",
  sD = "rich-text-wrapper",
  lD = Be(function (t, n) {
    var r, i;
    let {
        id: o,
        name: a,
        html: s,
        htmlFromDesign: l,
        text: c,
        textFromDesign: u,
        fonts: f = [],
        width: d,
        height: p,
        left: y,
        right: b,
        top: S,
        bottom: h,
        center: v,
        className: g,
        stylesPresetsClassName: x,
        visible: k = !0,
        opacity: w,
        rotation: E = 0,
        verticalAlignment: C = "top",
        isEditable: T = !1,
        willChangeTransform: R,
        environment: D = we.current,
        withExternalLayout: L = !1,
        positionSticky: z,
        positionStickyTop: O,
        positionStickyRight: V,
        positionStickyBottom: H,
        positionStickyLeft: P,
        __htmlStructure: Y,
        __fromCanvasComponent: G = !1,
        _forwardedOverrideId: K,
        _forwardedOverrides: N,
        _usesDOMRect: Q,
        children: ne,
        ...Z
      } = t,
      We = Na(),
      gt = Wa(t),
      De = B(null),
      Ue = n ?? De,
      { navigate: J, getRoute: Nt } = Sc(),
      _e = Uh();
    tF((r = t.preload) != null ? r : []), Ec(t, Ue);
    let ro = M(no),
      io = WS(),
      xr = c,
      oo = K ?? o;
    if (oo && N) {
      let st = N[oo];
      typeof st == "string" && (xr = st);
    }
    let mn = "";
    if (xr) {
      let st = S1(xr);
      mn = Y ? Y.replace(w1, st) : `<p>${st}</p>`;
    } else if (s) mn = s;
    else if (u) {
      let st = S1(u);
      mn = Y ? Y.replace(w1, st) : `<p>${st}</p>`;
    } else l && (mn = l);
    let ja = BS(),
      nw = le(
        () => (io || !Nt || !_e ? mn : PV(mn, Nt, _e, ja)),
        [io, mn, Nt, _e, ja]
      );
    if (
      (X(() => {
        let st = Ue.current;
        if (st === null) return;
        function fp(Rc) {
          let Ic = ap(Rc.target, Ue.current);
          if (Rc.metaKey || !J || !Ic || Ic.getAttribute("target") === "_blank")
            return;
          LA(J, Ic, ja) && Rc.preventDefault();
        }
        return (
          st.addEventListener("click", fp),
          () => {
            st.removeEventListener("click", fp);
          }
        );
      }, [J, ja]),
      tw(f, G, Ue),
      !k)
    )
      return null;
    $a();
    let rw = T && D() === "CANVAS",
      fe = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: ew(C),
        opacity: rw ? 0 : w,
        flexShrink: 0,
      },
      cp = we.hasRestrictions(),
      Sr = Oa(t, We || 0, !1),
      up = Q && (d === "auto" || p === "auto"),
      iw =
        !!t.transformTemplate || !Sr || !cp || G || up
          ? (i = t.transformTemplate) != null
            ? i
            : kc(v)
          : void 0;
    if (!L) {
      if (Sr && cp && !up) {
        let st = Ie.getNumber(E).toFixed(4);
        (fe.transform = `translate(${Sr.x}px, ${Sr.y}px) rotate(${st}deg)`),
          (fe.width = Sr.width),
          (fe.minWidth = Sr.width),
          (fe.height = Sr.height);
      } else
        (fe.left = y),
          (fe.right = b),
          (fe.top = S),
          (fe.bottom = h),
          (fe.width = d),
          (fe.height = p),
          (fe.rotate = E);
      z
        ? (!io || ro) &&
          ((fe.position = "sticky"),
          (fe.willChange = "transform"),
          (fe.zIndex = 1),
          (fe.top = O),
          (fe.right = V),
          (fe.bottom = H),
          (fe.left = P))
        : io &&
          (t.positionFixed || t.positionAbsolute) &&
          (fe.position = "absolute");
    }
    return (
      rp(t, fe),
      gS(t, fe),
      R && ep(fe),
      Object.assign(fe, t.style),
      re(bt.div, {
        id: o,
        ref: Ue,
        ...Z,
        style: fe,
        layoutId: gt,
        "data-bingo-name": a,
        "data-bingo-component-type": "DeprecatedRichText",
        "data-center": v,
        className: op(g, x, sD),
        transformTemplate: iw,
        dangerouslySetInnerHTML: { __html: nw },
      })
    );
  });
function ew(e) {
  switch (e) {
    case "top":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
      return "flex-end";
  }
}
function tw(e, t, n) {
  let r = B([]);
  YV(r.current, e) ||
    ((r.current = e),
    cc.loadFonts(e).then(({ newlyLoadedFontCount: i }) => {
      !t || !n.current || we.current() !== "CANVAS" || (i > 0 && qL(n.current));
    }));
}
var k1 = Be(({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) =>
    m.createElement(
      bt.svg,
      { ref: i, ...r, viewBox: t },
      m.createElement(
        bt.foreignObject,
        {
          width: "100%",
          height: "100%",
          className: "bingo-fit-text",
          transform: `scale(${e})`,
          style: { overflow: "visible", transformOrigin: "center center" },
        },
        n
      )
    )
  ),
  cD = Be((e, t) => {
    var n;
    let {
        __fromCanvasComponent: r = !1,
        _forwardedOverrideId: i,
        _forwardedOverrides: o,
        _usesDOMRect: a,
        as: s,
        bottom: l,
        center: c,
        children: u,
        environment: f = we.current,
        fonts: d = [],
        height: p,
        isEditable: y = !1,
        left: b,
        name: S,
        opacity: h,
        positionSticky: v,
        positionStickyBottom: g,
        positionStickyLeft: x,
        positionStickyRight: k,
        positionStickyTop: w,
        right: E,
        rotation: C = 0,
        style: T,
        _initialStyle: R,
        stylesPresetsClassNames: D,
        text: L,
        top: z,
        verticalAlignment: O = "top",
        visible: V = !0,
        width: H,
        willChangeTransform: P,
        withExternalLayout: Y = !1,
        viewBox: G,
        viewBoxScale: K = 1,
        ...N
      } = e,
      Q = Na(),
      ne = WS(),
      Z = M(no),
      We = Wa(e),
      gt = B(null),
      De = t ?? gt;
    if ((Ec(e, De), tw(d, r, De), !V)) return null;
    $a();
    let Ue = y && f() === "CANVAS",
      J = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: ew(O),
        opacity: Ue ? 0 : h,
        flexShrink: 0,
      },
      Nt = we.hasRestrictions(),
      _e = Oa(e, Q || 0, !1),
      ro = a && (H === "auto" || p === "auto"),
      xr =
        !!e.transformTemplate || !_e || !Nt || r || ro
          ? (n = e.transformTemplate) != null
            ? n
            : kc(c)
          : void 0;
    if (!Y) {
      if (_e && Nt && !ro) {
        let mn = Ie.getNumber(C).toFixed(4);
        (J.transform = `translate(${_e.x}px, ${_e.y}px) rotate(${mn}deg)`),
          (J.width = _e.width),
          (J.minWidth = _e.width),
          (J.height = _e.height);
      } else
        (J.left = b),
          (J.right = E),
          (J.top = z),
          (J.bottom = l),
          (J.width = H),
          (J.height = p),
          (J.rotate = C);
      v
        ? (!ne || Z) &&
          ((J.position = "sticky"),
          (J.willChange = "transform"),
          (J.zIndex = 1),
          (J.top = w),
          (J.right = k),
          (J.bottom = g),
          (J.left = x))
        : ne &&
          (e.positionFixed || e.positionAbsolute) &&
          (J.position = "absolute");
    }
    rp(e, J),
      gS(e, J),
      P && ep(J),
      Object.assign(J, R, T),
      We && (N.layout = "preserve-aspect");
    let oo = wc(e.as);
    return Pe(e.viewBox)
      ? e.as !== void 0
        ? m.createElement(
            oo,
            {
              ...N,
              ref: De,
              style: J,
              layoutId: We,
              transformTemplate: xr,
              "data-bingo-name": S,
              "data-bingo-component-type": "RichTextContainer",
            },
            m.createElement(
              k1,
              {
                viewBox: G,
                viewBoxScale: K,
                style: { width: "100%", height: "100%" },
              },
              u && uc(u, D, L)
            )
          )
        : m.createElement(
            k1,
            {
              ...N,
              ref: De,
              style: J,
              layoutId: We,
              viewBox: G,
              viewBoxScale: K,
              transformTemplate: xr,
              "data-bingo-name": S,
              "data-bingo-component-type": "RichTextContainer",
            },
            u && uc(u, D, L)
          )
      : m.createElement(
          oo,
          {
            ...N,
            ref: De,
            style: J,
            layoutId: We,
            transformTemplate: xr,
            "data-bingo-name": S,
            "data-bingo-component-type": "RichTextContainer",
          },
          u && uc(u, D, L)
        );
  });
function uc(e, t, n) {
  let r = so.toArray(e.props.children);
  Pe(n) && (r = r.slice(0, 1)),
    (r = r.map((a) => (oi(a) ? uc(a, t, n) : Pe(n) ? n : a)));
  let { ["data-preset-tag"]: i, ...o } = e.props;
  if (Pe(e.type) || qu(e.type)) {
    let a = i || Dg(e.type) || e.type,
      s = Pe(a) ? t?.[a] : void 0;
    o.className = op("bingo-text", o.className, s);
  }
  return wr(e, o, ...r);
}
var mz = Be(({ children: e, html: t, htmlFromDesign: n, ...r }, i) => {
  let o = t || e || n;
  if (Pe(o)) {
    !r.stylesPresetsClassName &&
      vt(r.stylesPresetsClassNames) &&
      (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(
        " "
      ));
    let a = { [Pe(t) ? "html" : "htmlFromDesign"]: o };
    return m.createElement(lD, { ...r, ...a, ref: i });
  }
  if (!r.stylesPresetsClassNames && Pe(r.stylesPresetsClassName)) {
    let [a, s, l, c, u] = r.stylesPresetsClassName.split(" ");
    a === void 0 || s === void 0 || l === void 0 || c === void 0 || u === void 0
      ? console.warn(
          `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
        )
      : (r.stylesPresetsClassNames = { h1: a, h2: s, h3: l, p: c, a: u });
  }
  return m.createElement(cD, { ...r, ref: i }, oi(o) ? o : void 0);
});
function vz(e, t, n) {
  let r = uD(t);
  !n?.supportsExplicitInterCodegen &&
    !r.some((i) => i.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r });
}
function gz(e) {
  let t = e.fonts;
  return t ?? [];
}
function uD(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e) dD(r) ? n.push(r) : t.fonts.push(hD(r));
  return t.fonts.length > 0 && n.push(t), n;
}
var fD = "explicitInter";
function dD(e) {
  return fD in e;
}
function hD(e) {
  let t;
  return (
    e.url.startsWith("https://fonts.gstatic.com/s/")
      ? (t = "google")
      : e.url.startsWith(
          "https://bingousercontent.com/third-party-assets/fontshare/"
        )
      ? (t = "fontshare")
      : (t = "custom"),
    { ...e, source: t }
  );
}
var pD = {
    name: "bingo",
    version: "2.4.1",
    main: "build/index.js",
    type: "module",
    exports: {
      ".": "./build/index.js",
      "./package.json": "./package.json",
      "./*": "./build/*",
    },
    files: [
      "build",
      "CHANGELOG.md",
      "README.md",
      "LICENSE.md",
      "postinstall.cjs",
    ],
    types: "./build/index.d.ts",
    author: "bingo",
    license: "MIT",
    scripts: {
      prepublishOnly: "make build",
      coverage: "yarn :jest --coverage",
      lint: "yarn :eslint ./src --ext .ts,.tsx --format codeframe --quiet",
      "lint:fix": "yarn lint --fix",
      test: "yarn :jest",
      watch: "yarn :jest --watch",
      postinstall: "node postinstall.cjs",
    },
    dependencies: {
      "@bingojs/router": "workspace:*",
      "@juggle/resize-observer": "^3.3.1",
      eventemitter3: "^3.1.0",
      fontfaceobserver: "^2.1.0",
      "hoist-non-react-statics": "^3.3.2",
      hsluv: "^0.0.3",
    },
    devDependencies: {
      "@testing-library/dom": "^8.19.1",
      "@testing-library/jest-dom": "^5.16.5",
      "@testing-library/react": "^13.4.0",
      "@testing-library/user-event": "^14.4.3",
      "@types/google.fonts": "1.0.3",
      "@types/hsluv": "https://github.com/bingo/typed_hsluv#bump",
      "@types/node": "^18.17.15",
      "@types/react": "^18.0.26",
      "@types/react-dom": "^18.0.10",
      "@types/yargs": "^17.0.19",
      "@typescript-eslint/eslint-plugin": "^6.16.0",
      "@typescript-eslint/parser": "^6.16.0",
      chalk: "^4.1.2",
      eslint: "^8.56.0",
      immutable: "^3.8.2",
      "jest-diff": "^29.3.1",
      "jest-junit": "^15.0.0",
      react: "^18.2.0",
      "react-dom": "^18.2.0",
      rollup: "^3.17.2",
      "rollup-plugin-dts": "^5.1.0",
      semver: "^7.5.2",
      typescript: "^5.3.3",
      yargs: "^17.6.2",
    },
    peerDependencies: {
      "bingo-motion": "^10.13.1",
      react: "^18.2.0",
      "react-dom": "^18.2.0",
    },
    tsdoc: { tsdocFlavor: "AEDoc" },
    bingo: {
      components: [
        {
          name: "Scroll",
          children: !0,
          properties: [
            {
              key: "direction",
              title: "Direction",
              kind: "enum",
              options: ["horizontal", "vertical", "both"],
            },
          ],
        },
        { name: "Page" },
      ],
    },
  },
  { version: bz } = pD;
Cs.prototype.addChild = function ({ transformer: e = (t) => t }) {
  let t = Ce(e(this.get()));
  return this.onChange((n) => t.set(e(n))), t;
};
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ /*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ export {
  m as a,
  Ka as b,
  re as c,
  Be as d,
  ai as e,
  M as f,
  kr as g,
  Cr as h,
  le as i,
  B as j,
  je as k,
  Hn as l,
  bt as m,
  Cg as n,
  nx as o,
  e_ as p,
  S4 as q,
  C4 as r,
  j_ as s,
  q_ as t,
  pn as u,
  H4 as v,
  KF as w,
  j4 as x,
  j2 as y,
  X4 as z,
  J4 as A,
  op as B,
  f5 as C,
  m5 as D,
  SA as E,
  IA as F,
  k5 as G,
  E5 as H,
  R5 as I,
  I5 as J,
  P5 as K,
  _5 as L,
  F5 as M,
  M5 as N,
  V5 as O,
  WS as P,
  X5 as Q,
  Gi as R,
  tz as S,
  dz as T,
  mz as U,
  vz as V,
  gz as W,
};
//# sourceMappingURL=chunk-TPVL6KUZ.js.map
