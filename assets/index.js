(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const l of i)
            if (l.type === "childList")
                for (const o of l.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const l = {};
        return i.integrity && (l.integrity = i.integrity), i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? l.credentials = "include" : i.crossOrigin === "anonymous" ? l.credentials = "omit" : l.credentials = "same-origin", l
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const l = n(i);
        fetch(i.href, l)
    }
})();
var Df = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function ra(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var ia = {
        exports: {}
    },
    Gi = {},
    la = {
        exports: {}
    },
    $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fr = Symbol.for("react.element"),
    Of = Symbol.for("react.portal"),
    Af = Symbol.for("react.fragment"),
    Bf = Symbol.for("react.strict_mode"),
    Ff = Symbol.for("react.profiler"),
    jf = Symbol.for("react.provider"),
    Uf = Symbol.for("react.context"),
    $f = Symbol.for("react.forward_ref"),
    Vf = Symbol.for("react.suspense"),
    Hf = Symbol.for("react.memo"),
    Qf = Symbol.for("react.lazy"),
    Wu = Symbol.iterator;

function Wf(e) {
    return e === null || typeof e != "object" ? null : (e = Wu && e[Wu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var oa = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    ua = Object.assign,
    sa = {};

function Gn(e, t, n) {
    this.props = e, this.context = t, this.refs = sa, this.updater = n || oa
}
Gn.prototype.isReactComponent = {};
Gn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Gn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function aa() {}
aa.prototype = Gn.prototype;

function Qo(e, t, n) {
    this.props = e, this.context = t, this.refs = sa, this.updater = n || oa
}
var Wo = Qo.prototype = new aa;
Wo.constructor = Qo;
ua(Wo, Gn.prototype);
Wo.isPureReactComponent = !0;
var Ku = Array.isArray,
    ca = Object.prototype.hasOwnProperty,
    Ko = {
        current: null
    },
    fa = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function da(e, t, n) {
    var r, i = {},
        l = null,
        o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (l = "" + t.key), t) ca.call(t, r) && !fa.hasOwnProperty(r) && (i[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) i.children = n;
    else if (1 < s) {
        for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
        i.children = u
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps, s) i[r] === void 0 && (i[r] = s[r]);
    return {
        $$typeof: Fr,
        type: e,
        key: l,
        ref: o,
        props: i,
        _owner: Ko.current
    }
}

function Kf(e, t) {
    return {
        $$typeof: Fr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Yo(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Fr
}

function Yf(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Yu = /\/+/g;

function ml(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Yf("" + e.key) : t.toString(36)
}

function ci(e, t, n, r, i) {
    var l = typeof e;
    (l === "undefined" || l === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (l) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Fr:
                case Of:
                    o = !0
            }
    }
    if (o) return o = e, i = i(o), e = r === "" ? "." + ml(o, 0) : r, Ku(i) ? (n = "", e != null && (n = e.replace(Yu, "$&/") + "/"), ci(i, t, n, "", function(a) {
        return a
    })) : i != null && (Yo(i) && (i = Kf(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Yu, "$&/") + "/") + e)), t.push(i)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", Ku(e))
        for (var s = 0; s < e.length; s++) {
            l = e[s];
            var u = r + ml(l, s);
            o += ci(l, t, n, u, i)
        } else if (u = Wf(e), typeof u == "function")
            for (e = u.call(e), s = 0; !(l = e.next()).done;) l = l.value, u = r + ml(l, s++), o += ci(l, t, n, u, i);
        else if (l === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function Wr(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return ci(e, r, "", "", function(l) {
        return t.call(n, l, i++)
    }), r
}

function Gf(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ze = {
        current: null
    },
    fi = {
        transition: null
    },
    Jf = {
        ReactCurrentDispatcher: ze,
        ReactCurrentBatchConfig: fi,
        ReactCurrentOwner: Ko
    };

function pa() {
    throw Error("act(...) is not supported in production builds of React.")
}
$.Children = {
    map: Wr,
    forEach: function(e, t, n) {
        Wr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Wr(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return Wr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Yo(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
$.Component = Gn;
$.Fragment = Af;
$.Profiler = Ff;
$.PureComponent = Qo;
$.StrictMode = Bf;
$.Suspense = Vf;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jf;
$.act = pa;
$.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = ua({}, e.props),
        i = e.key,
        l = e.ref,
        o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (l = t.ref, o = Ko.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
        for (u in t) ca.call(t, u) && !fa.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        s = Array(u);
        for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
        r.children = s
    }
    return {
        $$typeof: Fr,
        type: e.type,
        key: i,
        ref: l,
        props: r,
        _owner: o
    }
};
$.createContext = function(e) {
    return e = {
        $$typeof: Uf,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: jf,
        _context: e
    }, e.Consumer = e
};
$.createElement = da;
$.createFactory = function(e) {
    var t = da.bind(null, e);
    return t.type = e, t
};
$.createRef = function() {
    return {
        current: null
    }
};
$.forwardRef = function(e) {
    return {
        $$typeof: $f,
        render: e
    }
};
$.isValidElement = Yo;
$.lazy = function(e) {
    return {
        $$typeof: Qf,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Gf
    }
};
$.memo = function(e, t) {
    return {
        $$typeof: Hf,
        type: e,
        compare: t === void 0 ? null : t
    }
};
$.startTransition = function(e) {
    var t = fi.transition;
    fi.transition = {};
    try {
        e()
    } finally {
        fi.transition = t
    }
};
$.unstable_act = pa;
$.useCallback = function(e, t) {
    return ze.current.useCallback(e, t)
};
$.useContext = function(e) {
    return ze.current.useContext(e)
};
$.useDebugValue = function() {};
$.useDeferredValue = function(e) {
    return ze.current.useDeferredValue(e)
};
$.useEffect = function(e, t) {
    return ze.current.useEffect(e, t)
};
$.useId = function() {
    return ze.current.useId()
};
$.useImperativeHandle = function(e, t, n) {
    return ze.current.useImperativeHandle(e, t, n)
};
$.useInsertionEffect = function(e, t) {
    return ze.current.useInsertionEffect(e, t)
};
$.useLayoutEffect = function(e, t) {
    return ze.current.useLayoutEffect(e, t)
};
$.useMemo = function(e, t) {
    return ze.current.useMemo(e, t)
};
$.useReducer = function(e, t, n) {
    return ze.current.useReducer(e, t, n)
};
$.useRef = function(e) {
    return ze.current.useRef(e)
};
$.useState = function(e) {
    return ze.current.useState(e)
};
$.useSyncExternalStore = function(e, t, n) {
    return ze.current.useSyncExternalStore(e, t, n)
};
$.useTransition = function() {
    return ze.current.useTransition()
};
$.version = "18.3.1";
la.exports = $;
var Go = la.exports;
const pe = ra(Go);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xf = Go,
    Zf = Symbol.for("react.element"),
    qf = Symbol.for("react.fragment"),
    bf = Object.prototype.hasOwnProperty,
    ed = Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    td = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function ha(e, t, n) {
    var r, i = {},
        l = null,
        o = null;
    n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) bf.call(t, r) && !td.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Zf,
        type: e,
        key: l,
        ref: o,
        props: i,
        _owner: ed.current
    }
}
Gi.Fragment = qf;
Gi.jsx = ha;
Gi.jsxs = ha;
ia.exports = Gi;
var O = ia.exports,
    Kl = {},
    ma = {
        exports: {}
    },
    He = {},
    ga = {
        exports: {}
    },
    ya = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, T) {
        var B = P.length;
        P.push(T);
        e: for (; 0 < B;) {
            var j = B - 1 >>> 1,
                L = P[j];
            if (0 < i(L, T)) P[j] = T, P[B] = L, B = j;
            else break e
        }
    }

    function n(P) {
        return P.length === 0 ? null : P[0]
    }

    function r(P) {
        if (P.length === 0) return null;
        var T = P[0],
            B = P.pop();
        if (B !== T) {
            P[0] = B;
            e: for (var j = 0, L = P.length, H = L >>> 1; j < H;) {
                var te = 2 * (j + 1) - 1,
                    G = P[te],
                    Z = te + 1,
                    re = P[Z];
                if (0 > i(G, B)) Z < L && 0 > i(re, G) ? (P[j] = re, P[Z] = B, j = Z) : (P[j] = G, P[te] = B, j = te);
                else if (Z < L && 0 > i(re, B)) P[j] = re, P[Z] = B, j = Z;
                else break e
            }
        }
        return T
    }

    function i(P, T) {
        var B = P.sortIndex - T.sortIndex;
        return B !== 0 ? B : P.id - T.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var l = performance;
        e.unstable_now = function() {
            return l.now()
        }
    } else {
        var o = Date,
            s = o.now();
        e.unstable_now = function() {
            return o.now() - s
        }
    }
    var u = [],
        a = [],
        m = 1,
        y = null,
        g = 3,
        k = !1,
        S = !1,
        E = !1,
        A = typeof setTimeout == "function" ? setTimeout : null,
        p = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function f(P) {
        for (var T = n(a); T !== null;) {
            if (T.callback === null) r(a);
            else if (T.startTime <= P) r(a), T.sortIndex = T.expirationTime, t(u, T);
            else break;
            T = n(a)
        }
    }

    function v(P) {
        if (E = !1, f(P), !S)
            if (n(u) !== null) S = !0, Y(C);
            else {
                var T = n(a);
                T !== null && D(v, T.startTime - P)
            }
    }

    function C(P, T) {
        S = !1, E && (E = !1, p(d), d = -1), k = !0;
        var B = g;
        try {
            for (f(T), y = n(u); y !== null && (!(y.expirationTime > T) || P && !R());) {
                var j = y.callback;
                if (typeof j == "function") {
                    y.callback = null, g = y.priorityLevel;
                    var L = j(y.expirationTime <= T);
                    T = e.unstable_now(), typeof L == "function" ? y.callback = L : y === n(u) && r(u), f(T)
                } else r(u);
                y = n(u)
            }
            if (y !== null) var H = !0;
            else {
                var te = n(a);
                te !== null && D(v, te.startTime - T), H = !1
            }
            return H
        } finally {
            y = null, g = B, k = !1
        }
    }
    var x = !1,
        _ = null,
        d = -1,
        h = 5,
        w = -1;

    function R() {
        return !(e.unstable_now() - w < h)
    }

    function z() {
        if (_ !== null) {
            var P = e.unstable_now();
            w = P;
            var T = !0;
            try {
                T = _(!0, P)
            } finally {
                T ? M() : (x = !1, _ = null)
            }
        } else x = !1
    }
    var M;
    if (typeof c == "function") M = function() {
        c(z)
    };
    else if (typeof MessageChannel < "u") {
        var U = new MessageChannel,
            me = U.port2;
        U.port1.onmessage = z, M = function() {
            me.postMessage(null)
        }
    } else M = function() {
        A(z, 0)
    };

    function Y(P) {
        _ = P, x || (x = !0, M())
    }

    function D(P, T) {
        d = A(function() {
            P(e.unstable_now())
        }, T)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
        P.callback = null
    }, e.unstable_continueExecution = function() {
        S || k || (S = !0, Y(C))
    }, e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : h = 0 < P ? Math.floor(1e3 / P) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return g
    }, e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }, e.unstable_next = function(P) {
        switch (g) {
            case 1:
            case 2:
            case 3:
                var T = 3;
                break;
            default:
                T = g
        }
        var B = g;
        g = T;
        try {
            return P()
        } finally {
            g = B
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(P, T) {
        switch (P) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                P = 3
        }
        var B = g;
        g = P;
        try {
            return T()
        } finally {
            g = B
        }
    }, e.unstable_scheduleCallback = function(P, T, B) {
        var j = e.unstable_now();
        switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? j + B : j) : B = j, P) {
            case 1:
                var L = -1;
                break;
            case 2:
                L = 250;
                break;
            case 5:
                L = 1073741823;
                break;
            case 4:
                L = 1e4;
                break;
            default:
                L = 5e3
        }
        return L = B + L, P = {
            id: m++,
            callback: T,
            priorityLevel: P,
            startTime: B,
            expirationTime: L,
            sortIndex: -1
        }, B > j ? (P.sortIndex = B, t(a, P), n(u) === null && P === n(a) && (E ? (p(d), d = -1) : E = !0, D(v, B - j))) : (P.sortIndex = L, t(u, P), S || k || (S = !0, Y(C))), P
    }, e.unstable_shouldYield = R, e.unstable_wrapCallback = function(P) {
        var T = g;
        return function() {
            var B = g;
            g = T;
            try {
                return P.apply(this, arguments)
            } finally {
                g = B
            }
        }
    }
})(ya);
ga.exports = ya;
var nd = ga.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rd = Go,
    Ve = nd;

function N(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var va = new Set,
    kr = {};

function mn(e, t) {
    Bn(e, t), Bn(e + "Capture", t)
}

function Bn(e, t) {
    for (kr[e] = t, e = 0; e < t.length; e++) va.add(t[e])
}
var Ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Yl = Object.prototype.hasOwnProperty,
    id = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Gu = {},
    Ju = {};

function ld(e) {
    return Yl.call(Ju, e) ? !0 : Yl.call(Gu, e) ? !1 : id.test(e) ? Ju[e] = !0 : (Gu[e] = !0, !1)
}

function od(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function ud(e, t, n, r) {
    if (t === null || typeof t > "u" || od(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Me(e, t, n, r, i, l, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = o
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ce[e] = new Me(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    Ce[t] = new Me(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ce[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ce[e] = new Me(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ce[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ce[e] = new Me(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    Ce[e] = new Me(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ce[e] = new Me(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    Ce[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Jo = /[\-:]([a-z])/g;

function Xo(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Jo, Xo);
    Ce[t] = new Me(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Jo, Xo);
    Ce[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Jo, Xo);
    Ce[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ce[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
Ce.xlinkHref = new Me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ce[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Zo(e, t, n, r) {
    var i = Ce.hasOwnProperty(t) ? Ce[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ud(t, n, i, r) && (n = null), r || i === null ? ld(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Pt = rd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Kr = Symbol.for("react.element"),
    wn = Symbol.for("react.portal"),
    kn = Symbol.for("react.fragment"),
    qo = Symbol.for("react.strict_mode"),
    Gl = Symbol.for("react.profiler"),
    wa = Symbol.for("react.provider"),
    ka = Symbol.for("react.context"),
    bo = Symbol.for("react.forward_ref"),
    Jl = Symbol.for("react.suspense"),
    Xl = Symbol.for("react.suspense_list"),
    eu = Symbol.for("react.memo"),
    Mt = Symbol.for("react.lazy"),
    Sa = Symbol.for("react.offscreen"),
    Xu = Symbol.iterator;

function qn(e) {
    return e === null || typeof e != "object" ? null : (e = Xu && e[Xu] || e["@@iterator"], typeof e == "function" ? e : null)
}
var se = Object.assign,
    gl;

function or(e) {
    if (gl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        gl = t && t[1] || ""
    }
    return `
` + gl + e
}
var yl = !1;

function vl(e, t) {
    if (!e || yl) return "";
    yl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (a) {
                    var r = a
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (a) {
                    r = a
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (a) {
                r = a
            }
            e()
        }
    } catch (a) {
        if (a && r && typeof a.stack == "string") {
            for (var i = a.stack.split(`
`), l = r.stack.split(`
`), o = i.length - 1, s = l.length - 1; 1 <= o && 0 <= s && i[o] !== l[s];) s--;
            for (; 1 <= o && 0 <= s; o--, s--)
                if (i[o] !== l[s]) {
                    if (o !== 1 || s !== 1)
                        do
                            if (o--, s--, 0 > s || i[o] !== l[s]) {
                                var u = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            } while (1 <= o && 0 <= s);
                    break
                }
        }
    } finally {
        yl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? or(e) : ""
}

function sd(e) {
    switch (e.tag) {
        case 5:
            return or(e.type);
        case 16:
            return or("Lazy");
        case 13:
            return or("Suspense");
        case 19:
            return or("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = vl(e.type, !1), e;
        case 11:
            return e = vl(e.type.render, !1), e;
        case 1:
            return e = vl(e.type, !0), e;
        default:
            return ""
    }
}

function Zl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case kn:
            return "Fragment";
        case wn:
            return "Portal";
        case Gl:
            return "Profiler";
        case qo:
            return "StrictMode";
        case Jl:
            return "Suspense";
        case Xl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case ka:
            return (e.displayName || "Context") + ".Consumer";
        case wa:
            return (e._context.displayName || "Context") + ".Provider";
        case bo:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case eu:
            return t = e.displayName || null, t !== null ? t : Zl(e.type) || "Memo";
        case Mt:
            t = e._payload, e = e._init;
            try {
                return Zl(e(t))
            } catch {}
    }
    return null
}

function ad(e) {
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
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
            return Zl(t);
        case 8:
            return t === qo ? "StrictMode" : "Mode";
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
            if (typeof t == "string") return t
    }
    return null
}

function Gt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function Ea(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function cd(e) {
    var t = Ea(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            l = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o, l.call(this, o)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function Yr(e) {
    e._valueTracker || (e._valueTracker = cd(e))
}

function _a(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Ea(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Ei(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function ql(e, t) {
    var n = t.checked;
    return se({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Zu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Gt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function Ca(e, t) {
    t = t.checked, t != null && Zo(e, "checked", t, !1)
}

function bl(e, t) {
    Ca(e, t);
    var n = Gt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? eo(e, t.type, n) : t.hasOwnProperty("defaultValue") && eo(e, t.type, Gt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function qu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function eo(e, t, n) {
    (t !== "number" || Ei(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ur = Array.isArray;

function In(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Gt(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function to(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
    return se({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function bu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(N(92));
            if (ur(n)) {
                if (1 < n.length) throw Error(N(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Gt(n)
    }
}

function Na(e, t) {
    var n = Gt(t.value),
        r = Gt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function es(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function xa(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function no(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? xa(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Gr, Ta = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (Gr = Gr || document.createElement("div"), Gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Gr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Sr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var cr = {
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
        strokeWidth: !0
    },
    fd = ["Webkit", "ms", "Moz", "O"];
Object.keys(cr).forEach(function(e) {
    fd.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), cr[t] = cr[e]
    })
});

function Pa(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || cr.hasOwnProperty(e) && cr[e] ? ("" + t).trim() : t + "px"
}

function Ra(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = Pa(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var dd = se({
    menuitem: !0
}, {
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
    wbr: !0
});

function ro(e, t) {
    if (t) {
        if (dd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(N(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(N(62))
    }
}

function io(e, t) {
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
            return !0
    }
}
var lo = null;

function tu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var oo = null,
    zn = null,
    Mn = null;

function ts(e) {
    if (e = $r(e)) {
        if (typeof oo != "function") throw Error(N(280));
        var t = e.stateNode;
        t && (t = bi(t), oo(e.stateNode, e.type, t))
    }
}

function La(e) {
    zn ? Mn ? Mn.push(e) : Mn = [e] : zn = e
}

function Ia() {
    if (zn) {
        var e = zn,
            t = Mn;
        if (Mn = zn = null, ts(e), t)
            for (e = 0; e < t.length; e++) ts(t[e])
    }
}

function za(e, t) {
    return e(t)
}

function Ma() {}
var wl = !1;

function Da(e, t, n) {
    if (wl) return e(t, n);
    wl = !0;
    try {
        return za(e, t, n)
    } finally {
        wl = !1, (zn !== null || Mn !== null) && (Ma(), Ia())
    }
}

function Er(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = bi(n);
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
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(N(231, t, typeof n));
    return n
}
var uo = !1;
if (Ct) try {
    var bn = {};
    Object.defineProperty(bn, "passive", {
        get: function() {
            uo = !0
        }
    }), window.addEventListener("test", bn, bn), window.removeEventListener("test", bn, bn)
} catch {
    uo = !1
}

function pd(e, t, n, r, i, l, o, s, u) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, a)
    } catch (m) {
        this.onError(m)
    }
}
var fr = !1,
    _i = null,
    Ci = !1,
    so = null,
    hd = {
        onError: function(e) {
            fr = !0, _i = e
        }
    };

function md(e, t, n, r, i, l, o, s, u) {
    fr = !1, _i = null, pd.apply(hd, arguments)
}

function gd(e, t, n, r, i, l, o, s, u) {
    if (md.apply(this, arguments), fr) {
        if (fr) {
            var a = _i;
            fr = !1, _i = null
        } else throw Error(N(198));
        Ci || (Ci = !0, so = a)
    }
}

function gn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Oa(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function ns(e) {
    if (gn(e) !== e) throw Error(N(188))
}

function yd(e) {
    var t = e.alternate;
    if (!t) {
        if (t = gn(e), t === null) throw Error(N(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var l = i.alternate;
        if (l === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === l.child) {
            for (l = i.child; l;) {
                if (l === n) return ns(i), e;
                if (l === r) return ns(i), t;
                l = l.sibling
            }
            throw Error(N(188))
        }
        if (n.return !== r.return) n = i, r = l;
        else {
            for (var o = !1, s = i.child; s;) {
                if (s === n) {
                    o = !0, n = i, r = l;
                    break
                }
                if (s === r) {
                    o = !0, r = i, n = l;
                    break
                }
                s = s.sibling
            }
            if (!o) {
                for (s = l.child; s;) {
                    if (s === n) {
                        o = !0, n = l, r = i;
                        break
                    }
                    if (s === r) {
                        o = !0, r = l, n = i;
                        break
                    }
                    s = s.sibling
                }
                if (!o) throw Error(N(189))
            }
        }
        if (n.alternate !== r) throw Error(N(190))
    }
    if (n.tag !== 3) throw Error(N(188));
    return n.stateNode.current === n ? e : t
}

function Aa(e) {
    return e = yd(e), e !== null ? Ba(e) : null
}

function Ba(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Ba(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Fa = Ve.unstable_scheduleCallback,
    rs = Ve.unstable_cancelCallback,
    vd = Ve.unstable_shouldYield,
    wd = Ve.unstable_requestPaint,
    fe = Ve.unstable_now,
    kd = Ve.unstable_getCurrentPriorityLevel,
    nu = Ve.unstable_ImmediatePriority,
    ja = Ve.unstable_UserBlockingPriority,
    Ni = Ve.unstable_NormalPriority,
    Sd = Ve.unstable_LowPriority,
    Ua = Ve.unstable_IdlePriority,
    Ji = null,
    ht = null;

function Ed(e) {
    if (ht && typeof ht.onCommitFiberRoot == "function") try {
        ht.onCommitFiberRoot(Ji, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var ut = Math.clz32 ? Math.clz32 : Nd,
    _d = Math.log,
    Cd = Math.LN2;

function Nd(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (_d(e) / Cd | 0) | 0
}
var Jr = 64,
    Xr = 4194304;

function sr(e) {
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function xi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        l = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var s = o & ~i;
        s !== 0 ? r = sr(s) : (l &= o, l !== 0 && (r = sr(l)))
    } else o = n & ~i, o !== 0 ? r = sr(o) : l !== 0 && (r = sr(l));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, l = t & -t, i >= l || i === 16 && (l & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - ut(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function xd(e, t) {
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
            return -1
    }
}

function Td(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
        var o = 31 - ut(l),
            s = 1 << o,
            u = i[o];
        u === -1 ? (!(s & n) || s & r) && (i[o] = xd(s, t)) : u <= t && (e.expiredLanes |= s), l &= ~s
    }
}

function ao(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function $a() {
    var e = Jr;
    return Jr <<= 1, !(Jr & 4194240) && (Jr = 64), e
}

function kl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function jr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ut(t), e[t] = n
}

function Pd(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - ut(n),
            l = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~l
    }
}

function ru(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - ut(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var W = 0;

function Va(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ha, iu, Qa, Wa, Ka, co = !1,
    Zr = [],
    Ut = null,
    $t = null,
    Vt = null,
    _r = new Map,
    Cr = new Map,
    Ot = [],
    Rd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function is(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Ut = null;
            break;
        case "dragenter":
        case "dragleave":
            $t = null;
            break;
        case "mouseover":
        case "mouseout":
            Vt = null;
            break;
        case "pointerover":
        case "pointerout":
            _r.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Cr.delete(t.pointerId)
    }
}

function er(e, t, n, r, i, l) {
    return e === null || e.nativeEvent !== l ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i]
    }, t !== null && (t = $r(t), t !== null && iu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function Ld(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return Ut = er(Ut, e, t, n, r, i), !0;
        case "dragenter":
            return $t = er($t, e, t, n, r, i), !0;
        case "mouseover":
            return Vt = er(Vt, e, t, n, r, i), !0;
        case "pointerover":
            var l = i.pointerId;
            return _r.set(l, er(_r.get(l) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return l = i.pointerId, Cr.set(l, er(Cr.get(l) || null, e, t, n, r, i)), !0
    }
    return !1
}

function Ya(e) {
    var t = ln(e.target);
    if (t !== null) {
        var n = gn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Oa(n), t !== null) {
                    e.blockedOn = t, Ka(e.priority, function() {
                        Qa(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function di(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = fo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            lo = r, n.target.dispatchEvent(r), lo = null
        } else return t = $r(n), t !== null && iu(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function ls(e, t, n) {
    di(e) && n.delete(t)
}

function Id() {
    co = !1, Ut !== null && di(Ut) && (Ut = null), $t !== null && di($t) && ($t = null), Vt !== null && di(Vt) && (Vt = null), _r.forEach(ls), Cr.forEach(ls)
}

function tr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, co || (co = !0, Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, Id)))
}

function Nr(e) {
    function t(i) {
        return tr(i, e)
    }
    if (0 < Zr.length) {
        tr(Zr[0], e);
        for (var n = 1; n < Zr.length; n++) {
            var r = Zr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Ut !== null && tr(Ut, e), $t !== null && tr($t, e), Vt !== null && tr(Vt, e), _r.forEach(t), Cr.forEach(t), n = 0; n < Ot.length; n++) r = Ot[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Ot.length && (n = Ot[0], n.blockedOn === null);) Ya(n), n.blockedOn === null && Ot.shift()
}
var Dn = Pt.ReactCurrentBatchConfig,
    Ti = !0;

function zd(e, t, n, r) {
    var i = W,
        l = Dn.transition;
    Dn.transition = null;
    try {
        W = 1, lu(e, t, n, r)
    } finally {
        W = i, Dn.transition = l
    }
}

function Md(e, t, n, r) {
    var i = W,
        l = Dn.transition;
    Dn.transition = null;
    try {
        W = 4, lu(e, t, n, r)
    } finally {
        W = i, Dn.transition = l
    }
}

function lu(e, t, n, r) {
    if (Ti) {
        var i = fo(e, t, n, r);
        if (i === null) Ll(e, t, r, Pi, n), is(e, r);
        else if (Ld(i, e, t, n, r)) r.stopPropagation();
        else if (is(e, r), t & 4 && -1 < Rd.indexOf(e)) {
            for (; i !== null;) {
                var l = $r(i);
                if (l !== null && Ha(l), l = fo(e, t, n, r), l === null && Ll(e, t, r, Pi, n), l === i) break;
                i = l
            }
            i !== null && r.stopPropagation()
        } else Ll(e, t, r, null, n)
    }
}
var Pi = null;

function fo(e, t, n, r) {
    if (Pi = null, e = tu(r), e = ln(e), e !== null)
        if (t = gn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Oa(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Pi = e, null
}

function Ga(e) {
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
            switch (kd()) {
                case nu:
                    return 1;
                case ja:
                    return 4;
                case Ni:
                case Sd:
                    return 16;
                case Ua:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Bt = null,
    ou = null,
    pi = null;

function Ja() {
    if (pi) return pi;
    var e, t = ou,
        n = t.length,
        r, i = "value" in Bt ? Bt.value : Bt.textContent,
        l = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[l - r]; r++);
    return pi = i.slice(e, 1 < r ? 1 - r : void 0)
}

function hi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function qr() {
    return !0
}

function os() {
    return !1
}

function Qe(e) {
    function t(n, r, i, l, o) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = l, this.target = o, this.currentTarget = null;
        for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(l) : l[s]);
        return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? qr : os, this.isPropagationStopped = os, this
    }
    return se(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = qr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = qr)
        },
        persist: function() {},
        isPersistent: qr
    }), t
}
var Jn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    uu = Qe(Jn),
    Ur = se({}, Jn, {
        view: 0,
        detail: 0
    }),
    Dd = Qe(Ur),
    Sl, El, nr, Xi = se({}, Ur, {
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
        getModifierState: su,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== nr && (nr && e.type === "mousemove" ? (Sl = e.screenX - nr.screenX, El = e.screenY - nr.screenY) : El = Sl = 0, nr = e), Sl)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : El
        }
    }),
    us = Qe(Xi),
    Od = se({}, Xi, {
        dataTransfer: 0
    }),
    Ad = Qe(Od),
    Bd = se({}, Ur, {
        relatedTarget: 0
    }),
    _l = Qe(Bd),
    Fd = se({}, Jn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    jd = Qe(Fd),
    Ud = se({}, Jn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    $d = Qe(Ud),
    Vd = se({}, Jn, {
        data: 0
    }),
    ss = Qe(Vd),
    Hd = {
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
        MozPrintableKey: "Unidentified"
    },
    Qd = {
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
        224: "Meta"
    },
    Wd = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Kd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Wd[e]) ? !!t[e] : !1
}

function su() {
    return Kd
}
var Yd = se({}, Ur, {
        key: function(e) {
            if (e.key) {
                var t = Hd[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = hi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qd[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: su,
        charCode: function(e) {
            return e.type === "keypress" ? hi(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? hi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Gd = Qe(Yd),
    Jd = se({}, Xi, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    as = Qe(Jd),
    Xd = se({}, Ur, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: su
    }),
    Zd = Qe(Xd),
    qd = se({}, Jn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    bd = Qe(qd),
    ep = se({}, Xi, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    tp = Qe(ep),
    np = [9, 13, 27, 32],
    au = Ct && "CompositionEvent" in window,
    dr = null;
Ct && "documentMode" in document && (dr = document.documentMode);
var rp = Ct && "TextEvent" in window && !dr,
    Xa = Ct && (!au || dr && 8 < dr && 11 >= dr),
    cs = " ",
    fs = !1;

function Za(e, t) {
    switch (e) {
        case "keyup":
            return np.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function qa(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Sn = !1;

function ip(e, t) {
    switch (e) {
        case "compositionend":
            return qa(t);
        case "keypress":
            return t.which !== 32 ? null : (fs = !0, cs);
        case "textInput":
            return e = t.data, e === cs && fs ? null : e;
        default:
            return null
    }
}

function lp(e, t) {
    if (Sn) return e === "compositionend" || !au && Za(e, t) ? (e = Ja(), pi = ou = Bt = null, Sn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Xa && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var op = {
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
    week: !0
};

function ds(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!op[e.type] : t === "textarea"
}

function ba(e, t, n, r) {
    La(r), t = Ri(t, "onChange"), 0 < t.length && (n = new uu("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var pr = null,
    xr = null;

function up(e) {
    cc(e, 0)
}

function Zi(e) {
    var t = Cn(e);
    if (_a(t)) return e
}

function sp(e, t) {
    if (e === "change") return t
}
var ec = !1;
if (Ct) {
    var Cl;
    if (Ct) {
        var Nl = "oninput" in document;
        if (!Nl) {
            var ps = document.createElement("div");
            ps.setAttribute("oninput", "return;"), Nl = typeof ps.oninput == "function"
        }
        Cl = Nl
    } else Cl = !1;
    ec = Cl && (!document.documentMode || 9 < document.documentMode)
}

function hs() {
    pr && (pr.detachEvent("onpropertychange", tc), xr = pr = null)
}

function tc(e) {
    if (e.propertyName === "value" && Zi(xr)) {
        var t = [];
        ba(t, xr, e, tu(e)), Da(up, t)
    }
}

function ap(e, t, n) {
    e === "focusin" ? (hs(), pr = t, xr = n, pr.attachEvent("onpropertychange", tc)) : e === "focusout" && hs()
}

function cp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Zi(xr)
}

function fp(e, t) {
    if (e === "click") return Zi(t)
}

function dp(e, t) {
    if (e === "input" || e === "change") return Zi(t)
}

function pp(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var at = typeof Object.is == "function" ? Object.is : pp;

function Tr(e, t) {
    if (at(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Yl.call(t, i) || !at(e[i], t[i])) return !1
    }
    return !0
}

function ms(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function gs(e, t) {
    var n = ms(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = ms(n)
    }
}

function nc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? nc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function rc() {
    for (var e = window, t = Ei(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Ei(e.document)
    }
    return t
}

function cu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function hp(e) {
    var t = rc(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && nc(n.ownerDocument.documentElement, n)) {
        if (r !== null && cu(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    l = Math.min(r.start, i);
                r = r.end === void 0 ? l : Math.min(r.end, i), !e.extend && l > r && (i = r, r = l, l = i), i = gs(n, l);
                var o = gs(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var mp = Ct && "documentMode" in document && 11 >= document.documentMode,
    En = null,
    po = null,
    hr = null,
    ho = !1;

function ys(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ho || En == null || En !== Ei(r) || (r = En, "selectionStart" in r && cu(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), hr && Tr(hr, r) || (hr = r, r = Ri(po, "onSelect"), 0 < r.length && (t = new uu("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = En)))
}

function br(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var _n = {
        animationend: br("Animation", "AnimationEnd"),
        animationiteration: br("Animation", "AnimationIteration"),
        animationstart: br("Animation", "AnimationStart"),
        transitionend: br("Transition", "TransitionEnd")
    },
    xl = {},
    ic = {};
Ct && (ic = document.createElement("div").style, "AnimationEvent" in window || (delete _n.animationend.animation, delete _n.animationiteration.animation, delete _n.animationstart.animation), "TransitionEvent" in window || delete _n.transitionend.transition);

function qi(e) {
    if (xl[e]) return xl[e];
    if (!_n[e]) return e;
    var t = _n[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in ic) return xl[e] = t[n];
    return e
}
var lc = qi("animationend"),
    oc = qi("animationiteration"),
    uc = qi("animationstart"),
    sc = qi("transitionend"),
    ac = new Map,
    vs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Xt(e, t) {
    ac.set(e, t), mn(t, [e])
}
for (var Tl = 0; Tl < vs.length; Tl++) {
    var Pl = vs[Tl],
        gp = Pl.toLowerCase(),
        yp = Pl[0].toUpperCase() + Pl.slice(1);
    Xt(gp, "on" + yp)
}
Xt(lc, "onAnimationEnd");
Xt(oc, "onAnimationIteration");
Xt(uc, "onAnimationStart");
Xt("dblclick", "onDoubleClick");
Xt("focusin", "onFocus");
Xt("focusout", "onBlur");
Xt(sc, "onTransitionEnd");
Bn("onMouseEnter", ["mouseout", "mouseover"]);
Bn("onMouseLeave", ["mouseout", "mouseover"]);
Bn("onPointerEnter", ["pointerout", "pointerover"]);
Bn("onPointerLeave", ["pointerout", "pointerover"]);
mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ar = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    vp = new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));

function ws(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, gd(r, t, void 0, e), e.currentTarget = null
}

function cc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var l = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var s = r[o],
                        u = s.instance,
                        a = s.currentTarget;
                    if (s = s.listener, u !== l && i.isPropagationStopped()) break e;
                    ws(i, s, a), l = u
                } else
                    for (o = 0; o < r.length; o++) {
                        if (s = r[o], u = s.instance, a = s.currentTarget, s = s.listener, u !== l && i.isPropagationStopped()) break e;
                        ws(i, s, a), l = u
                    }
        }
    }
    if (Ci) throw e = so, Ci = !1, so = null, e
}

function b(e, t) {
    var n = t[wo];
    n === void 0 && (n = t[wo] = new Set);
    var r = e + "__bubble";
    n.has(r) || (fc(t, e, 2, !1), n.add(r))
}

function Rl(e, t, n) {
    var r = 0;
    t && (r |= 4), fc(n, e, r, t)
}
var ei = "_reactListening" + Math.random().toString(36).slice(2);

function Pr(e) {
    if (!e[ei]) {
        e[ei] = !0, va.forEach(function(n) {
            n !== "selectionchange" && (vp.has(n) || Rl(n, !1, e), Rl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ei] || (t[ei] = !0, Rl("selectionchange", !1, t))
    }
}

function fc(e, t, n, r) {
    switch (Ga(t)) {
        case 1:
            var i = zd;
            break;
        case 4:
            i = Md;
            break;
        default:
            i = lu
    }
    n = i.bind(null, t, n, e), i = void 0, !uo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function Ll(e, t, n, r, i) {
    var l = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var s = r.stateNode.containerInfo;
            if (s === i || s.nodeType === 8 && s.parentNode === i) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var u = o.tag;
                    if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo, u === i || u.nodeType === 8 && u.parentNode === i)) return;
                    o = o.return
                }
            for (; s !== null;) {
                if (o = ln(s), o === null) return;
                if (u = o.tag, u === 5 || u === 6) {
                    r = l = o;
                    continue e
                }
                s = s.parentNode
            }
        }
        r = r.return
    }
    Da(function() {
        var a = l,
            m = tu(n),
            y = [];
        e: {
            var g = ac.get(e);
            if (g !== void 0) {
                var k = uu,
                    S = e;
                switch (e) {
                    case "keypress":
                        if (hi(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        k = Gd;
                        break;
                    case "focusin":
                        S = "focus", k = _l;
                        break;
                    case "focusout":
                        S = "blur", k = _l;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        k = _l;
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
                        k = us;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        k = Ad;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        k = Zd;
                        break;
                    case lc:
                    case oc:
                    case uc:
                        k = jd;
                        break;
                    case sc:
                        k = bd;
                        break;
                    case "scroll":
                        k = Dd;
                        break;
                    case "wheel":
                        k = tp;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        k = $d;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        k = as
                }
                var E = (t & 4) !== 0,
                    A = !E && e === "scroll",
                    p = E ? g !== null ? g + "Capture" : null : g;
                E = [];
                for (var c = a, f; c !== null;) {
                    f = c;
                    var v = f.stateNode;
                    if (f.tag === 5 && v !== null && (f = v, p !== null && (v = Er(c, p), v != null && E.push(Rr(c, v, f)))), A) break;
                    c = c.return
                }
                0 < E.length && (g = new k(g, S, null, n, m), y.push({
                    event: g,
                    listeners: E
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (g = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", g && n !== lo && (S = n.relatedTarget || n.fromElement) && (ln(S) || S[Nt])) break e;
                if ((k || g) && (g = m.window === m ? m : (g = m.ownerDocument) ? g.defaultView || g.parentWindow : window, k ? (S = n.relatedTarget || n.toElement, k = a, S = S ? ln(S) : null, S !== null && (A = gn(S), S !== A || S.tag !== 5 && S.tag !== 6) && (S = null)) : (k = null, S = a), k !== S)) {
                    if (E = us, v = "onMouseLeave", p = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (E = as, v = "onPointerLeave", p = "onPointerEnter", c = "pointer"), A = k == null ? g : Cn(k), f = S == null ? g : Cn(S), g = new E(v, c + "leave", k, n, m), g.target = A, g.relatedTarget = f, v = null, ln(m) === a && (E = new E(p, c + "enter", S, n, m), E.target = f, E.relatedTarget = A, v = E), A = v, k && S) t: {
                        for (E = k, p = S, c = 0, f = E; f; f = vn(f)) c++;
                        for (f = 0, v = p; v; v = vn(v)) f++;
                        for (; 0 < c - f;) E = vn(E),
                        c--;
                        for (; 0 < f - c;) p = vn(p),
                        f--;
                        for (; c--;) {
                            if (E === p || p !== null && E === p.alternate) break t;
                            E = vn(E), p = vn(p)
                        }
                        E = null
                    }
                    else E = null;
                    k !== null && ks(y, g, k, E, !1), S !== null && A !== null && ks(y, A, S, E, !0)
                }
            }
            e: {
                if (g = a ? Cn(a) : window, k = g.nodeName && g.nodeName.toLowerCase(), k === "select" || k === "input" && g.type === "file") var C = sp;
                else if (ds(g))
                    if (ec) C = dp;
                    else {
                        C = cp;
                        var x = ap
                    }
                else(k = g.nodeName) && k.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (C = fp);
                if (C && (C = C(e, a))) {
                    ba(y, C, n, m);
                    break e
                }
                x && x(e, g, a),
                e === "focusout" && (x = g._wrapperState) && x.controlled && g.type === "number" && eo(g, "number", g.value)
            }
            switch (x = a ? Cn(a) : window, e) {
                case "focusin":
                    (ds(x) || x.contentEditable === "true") && (En = x, po = a, hr = null);
                    break;
                case "focusout":
                    hr = po = En = null;
                    break;
                case "mousedown":
                    ho = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    ho = !1, ys(y, n, m);
                    break;
                case "selectionchange":
                    if (mp) break;
                case "keydown":
                case "keyup":
                    ys(y, n, m)
            }
            var _;
            if (au) e: {
                switch (e) {
                    case "compositionstart":
                        var d = "onCompositionStart";
                        break e;
                    case "compositionend":
                        d = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        d = "onCompositionUpdate";
                        break e
                }
                d = void 0
            }
            else Sn ? Za(e, n) && (d = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (d = "onCompositionStart");d && (Xa && n.locale !== "ko" && (Sn || d !== "onCompositionStart" ? d === "onCompositionEnd" && Sn && (_ = Ja()) : (Bt = m, ou = "value" in Bt ? Bt.value : Bt.textContent, Sn = !0)), x = Ri(a, d), 0 < x.length && (d = new ss(d, e, null, n, m), y.push({
                event: d,
                listeners: x
            }), _ ? d.data = _ : (_ = qa(n), _ !== null && (d.data = _)))),
            (_ = rp ? ip(e, n) : lp(e, n)) && (a = Ri(a, "onBeforeInput"), 0 < a.length && (m = new ss("onBeforeInput", "beforeinput", null, n, m), y.push({
                event: m,
                listeners: a
            }), m.data = _))
        }
        cc(y, t)
    })
}

function Rr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Ri(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            l = i.stateNode;
        i.tag === 5 && l !== null && (i = l, l = Er(e, n), l != null && r.unshift(Rr(e, l, i)), l = Er(e, t), l != null && r.push(Rr(e, l, i))), e = e.return
    }
    return r
}

function vn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function ks(e, t, n, r, i) {
    for (var l = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
            u = s.alternate,
            a = s.stateNode;
        if (u !== null && u === r) break;
        s.tag === 5 && a !== null && (s = a, i ? (u = Er(n, l), u != null && o.unshift(Rr(n, u, s))) : i || (u = Er(n, l), u != null && o.push(Rr(n, u, s)))), n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var wp = /\r\n?/g,
    kp = /\u0000|\uFFFD/g;

function Ss(e) {
    return (typeof e == "string" ? e : "" + e).replace(wp, `
`).replace(kp, "")
}

function ti(e, t, n) {
    if (t = Ss(t), Ss(e) !== t && n) throw Error(N(425))
}

function Li() {}
var mo = null,
    go = null;

function yo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var vo = typeof setTimeout == "function" ? setTimeout : void 0,
    Sp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Es = typeof Promise == "function" ? Promise : void 0,
    Ep = typeof queueMicrotask == "function" ? queueMicrotask : typeof Es < "u" ? function(e) {
        return Es.resolve(null).then(e).catch(_p)
    } : vo;

function _p(e) {
    setTimeout(function() {
        throw e
    })
}

function Il(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), Nr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Nr(t)
}

function Ht(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function _s(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Xn = Math.random().toString(36).slice(2),
    pt = "__reactFiber$" + Xn,
    Lr = "__reactProps$" + Xn,
    Nt = "__reactContainer$" + Xn,
    wo = "__reactEvents$" + Xn,
    Cp = "__reactListeners$" + Xn,
    Np = "__reactHandles$" + Xn;

function ln(e) {
    var t = e[pt];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Nt] || n[pt]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = _s(e); e !== null;) {
                    if (n = e[pt]) return n;
                    e = _s(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function $r(e) {
    return e = e[pt] || e[Nt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Cn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(N(33))
}

function bi(e) {
    return e[Lr] || null
}
var ko = [],
    Nn = -1;

function Zt(e) {
    return {
        current: e
    }
}

function ee(e) {
    0 > Nn || (e.current = ko[Nn], ko[Nn] = null, Nn--)
}

function X(e, t) {
    Nn++, ko[Nn] = e.current, e.current = t
}
var Jt = {},
    Re = Zt(Jt),
    Ae = Zt(!1),
    cn = Jt;

function Fn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Jt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        l;
    for (l in n) i[l] = t[l];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function Be(e) {
    return e = e.childContextTypes, e != null
}

function Ii() {
    ee(Ae), ee(Re)
}

function Cs(e, t, n) {
    if (Re.current !== Jt) throw Error(N(168));
    X(Re, t), X(Ae, n)
}

function dc(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(N(108, ad(e) || "Unknown", i));
    return se({}, n, r)
}

function zi(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jt, cn = Re.current, X(Re, e), X(Ae, Ae.current), !0
}

function Ns(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(N(169));
    n ? (e = dc(e, t, cn), r.__reactInternalMemoizedMergedChildContext = e, ee(Ae), ee(Re), X(Re, e)) : ee(Ae), X(Ae, n)
}
var kt = null,
    el = !1,
    zl = !1;

function pc(e) {
    kt === null ? kt = [e] : kt.push(e)
}

function xp(e) {
    el = !0, pc(e)
}

function qt() {
    if (!zl && kt !== null) {
        zl = !0;
        var e = 0,
            t = W;
        try {
            var n = kt;
            for (W = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            kt = null, el = !1
        } catch (i) {
            throw kt !== null && (kt = kt.slice(e + 1)), Fa(nu, qt), i
        } finally {
            W = t, zl = !1
        }
    }
    return null
}
var xn = [],
    Tn = 0,
    Mi = null,
    Di = 0,
    Xe = [],
    Ze = 0,
    fn = null,
    St = 1,
    Et = "";

function nn(e, t) {
    xn[Tn++] = Di, xn[Tn++] = Mi, Mi = e, Di = t
}

function hc(e, t, n) {
    Xe[Ze++] = St, Xe[Ze++] = Et, Xe[Ze++] = fn, fn = e;
    var r = St;
    e = Et;
    var i = 32 - ut(r) - 1;
    r &= ~(1 << i), n += 1;
    var l = 32 - ut(t) + i;
    if (30 < l) {
        var o = i - i % 5;
        l = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, St = 1 << 32 - ut(t) + i | n << i | r, Et = l + e
    } else St = 1 << l | n << i | r, Et = e
}

function fu(e) {
    e.return !== null && (nn(e, 1), hc(e, 1, 0))
}

function du(e) {
    for (; e === Mi;) Mi = xn[--Tn], xn[Tn] = null, Di = xn[--Tn], xn[Tn] = null;
    for (; e === fn;) fn = Xe[--Ze], Xe[Ze] = null, Et = Xe[--Ze], Xe[Ze] = null, St = Xe[--Ze], Xe[Ze] = null
}
var $e = null,
    Ue = null,
    ne = !1,
    ot = null;

function mc(e, t) {
    var n = qe(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function xs(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, $e = e, Ue = Ht(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, $e = e, Ue = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = fn !== null ? {
                id: St,
                overflow: Et
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = qe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, $e = e, Ue = null, !0) : !1;
        default:
            return !1
    }
}

function So(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Eo(e) {
    if (ne) {
        var t = Ue;
        if (t) {
            var n = t;
            if (!xs(e, t)) {
                if (So(e)) throw Error(N(418));
                t = Ht(n.nextSibling);
                var r = $e;
                t && xs(e, t) ? mc(r, n) : (e.flags = e.flags & -4097 | 2, ne = !1, $e = e)
            }
        } else {
            if (So(e)) throw Error(N(418));
            e.flags = e.flags & -4097 | 2, ne = !1, $e = e
        }
    }
}

function Ts(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    $e = e
}

function ni(e) {
    if (e !== $e) return !1;
    if (!ne) return Ts(e), ne = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !yo(e.type, e.memoizedProps)), t && (t = Ue)) {
        if (So(e)) throw gc(), Error(N(418));
        for (; t;) mc(e, t), t = Ht(t.nextSibling)
    }
    if (Ts(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ue = Ht(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ue = null
        }
    } else Ue = $e ? Ht(e.stateNode.nextSibling) : null;
    return !0
}

function gc() {
    for (var e = Ue; e;) e = Ht(e.nextSibling)
}

function jn() {
    Ue = $e = null, ne = !1
}

function pu(e) {
    ot === null ? ot = [e] : ot.push(e)
}
var Tp = Pt.ReactCurrentBatchConfig;

function rr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(N(309));
                var r = n.stateNode
            }
            if (!r) throw Error(N(147, e));
            var i = r,
                l = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(o) {
                var s = i.refs;
                o === null ? delete s[l] : s[l] = o
            }, t._stringRef = l, t)
        }
        if (typeof e != "string") throw Error(N(284));
        if (!n._owner) throw Error(N(290, e))
    }
    return e
}

function ri(e, t) {
    throw e = Object.prototype.toString.call(t), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Ps(e) {
    var t = e._init;
    return t(e._payload)
}

function yc(e) {
    function t(p, c) {
        if (e) {
            var f = p.deletions;
            f === null ? (p.deletions = [c], p.flags |= 16) : f.push(c)
        }
    }

    function n(p, c) {
        if (!e) return null;
        for (; c !== null;) t(p, c), c = c.sibling;
        return null
    }

    function r(p, c) {
        for (p = new Map; c !== null;) c.key !== null ? p.set(c.key, c) : p.set(c.index, c), c = c.sibling;
        return p
    }

    function i(p, c) {
        return p = Yt(p, c), p.index = 0, p.sibling = null, p
    }

    function l(p, c, f) {
        return p.index = f, e ? (f = p.alternate, f !== null ? (f = f.index, f < c ? (p.flags |= 2, c) : f) : (p.flags |= 2, c)) : (p.flags |= 1048576, c)
    }

    function o(p) {
        return e && p.alternate === null && (p.flags |= 2), p
    }

    function s(p, c, f, v) {
        return c === null || c.tag !== 6 ? (c = jl(f, p.mode, v), c.return = p, c) : (c = i(c, f), c.return = p, c)
    }

    function u(p, c, f, v) {
        var C = f.type;
        return C === kn ? m(p, c, f.props.children, v, f.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Mt && Ps(C) === c.type) ? (v = i(c, f.props), v.ref = rr(p, c, f), v.return = p, v) : (v = Si(f.type, f.key, f.props, null, p.mode, v), v.ref = rr(p, c, f), v.return = p, v)
    }

    function a(p, c, f, v) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== f.containerInfo || c.stateNode.implementation !== f.implementation ? (c = Ul(f, p.mode, v), c.return = p, c) : (c = i(c, f.children || []), c.return = p, c)
    }

    function m(p, c, f, v, C) {
        return c === null || c.tag !== 7 ? (c = an(f, p.mode, v, C), c.return = p, c) : (c = i(c, f), c.return = p, c)
    }

    function y(p, c, f) {
        if (typeof c == "string" && c !== "" || typeof c == "number") return c = jl("" + c, p.mode, f), c.return = p, c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case Kr:
                    return f = Si(c.type, c.key, c.props, null, p.mode, f), f.ref = rr(p, null, c), f.return = p, f;
                case wn:
                    return c = Ul(c, p.mode, f), c.return = p, c;
                case Mt:
                    var v = c._init;
                    return y(p, v(c._payload), f)
            }
            if (ur(c) || qn(c)) return c = an(c, p.mode, f, null), c.return = p, c;
            ri(p, c)
        }
        return null
    }

    function g(p, c, f, v) {
        var C = c !== null ? c.key : null;
        if (typeof f == "string" && f !== "" || typeof f == "number") return C !== null ? null : s(p, c, "" + f, v);
        if (typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case Kr:
                    return f.key === C ? u(p, c, f, v) : null;
                case wn:
                    return f.key === C ? a(p, c, f, v) : null;
                case Mt:
                    return C = f._init, g(p, c, C(f._payload), v)
            }
            if (ur(f) || qn(f)) return C !== null ? null : m(p, c, f, v, null);
            ri(p, f)
        }
        return null
    }

    function k(p, c, f, v, C) {
        if (typeof v == "string" && v !== "" || typeof v == "number") return p = p.get(f) || null, s(c, p, "" + v, C);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case Kr:
                    return p = p.get(v.key === null ? f : v.key) || null, u(c, p, v, C);
                case wn:
                    return p = p.get(v.key === null ? f : v.key) || null, a(c, p, v, C);
                case Mt:
                    var x = v._init;
                    return k(p, c, f, x(v._payload), C)
            }
            if (ur(v) || qn(v)) return p = p.get(f) || null, m(c, p, v, C, null);
            ri(c, v)
        }
        return null
    }

    function S(p, c, f, v) {
        for (var C = null, x = null, _ = c, d = c = 0, h = null; _ !== null && d < f.length; d++) {
            _.index > d ? (h = _, _ = null) : h = _.sibling;
            var w = g(p, _, f[d], v);
            if (w === null) {
                _ === null && (_ = h);
                break
            }
            e && _ && w.alternate === null && t(p, _), c = l(w, c, d), x === null ? C = w : x.sibling = w, x = w, _ = h
        }
        if (d === f.length) return n(p, _), ne && nn(p, d), C;
        if (_ === null) {
            for (; d < f.length; d++) _ = y(p, f[d], v), _ !== null && (c = l(_, c, d), x === null ? C = _ : x.sibling = _, x = _);
            return ne && nn(p, d), C
        }
        for (_ = r(p, _); d < f.length; d++) h = k(_, p, d, f[d], v), h !== null && (e && h.alternate !== null && _.delete(h.key === null ? d : h.key), c = l(h, c, d), x === null ? C = h : x.sibling = h, x = h);
        return e && _.forEach(function(R) {
            return t(p, R)
        }), ne && nn(p, d), C
    }

    function E(p, c, f, v) {
        var C = qn(f);
        if (typeof C != "function") throw Error(N(150));
        if (f = C.call(f), f == null) throw Error(N(151));
        for (var x = C = null, _ = c, d = c = 0, h = null, w = f.next(); _ !== null && !w.done; d++, w = f.next()) {
            _.index > d ? (h = _, _ = null) : h = _.sibling;
            var R = g(p, _, w.value, v);
            if (R === null) {
                _ === null && (_ = h);
                break
            }
            e && _ && R.alternate === null && t(p, _), c = l(R, c, d), x === null ? C = R : x.sibling = R, x = R, _ = h
        }
        if (w.done) return n(p, _), ne && nn(p, d), C;
        if (_ === null) {
            for (; !w.done; d++, w = f.next()) w = y(p, w.value, v), w !== null && (c = l(w, c, d), x === null ? C = w : x.sibling = w, x = w);
            return ne && nn(p, d), C
        }
        for (_ = r(p, _); !w.done; d++, w = f.next()) w = k(_, p, d, w.value, v), w !== null && (e && w.alternate !== null && _.delete(w.key === null ? d : w.key), c = l(w, c, d), x === null ? C = w : x.sibling = w, x = w);
        return e && _.forEach(function(z) {
            return t(p, z)
        }), ne && nn(p, d), C
    }

    function A(p, c, f, v) {
        if (typeof f == "object" && f !== null && f.type === kn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
            switch (f.$$typeof) {
                case Kr:
                    e: {
                        for (var C = f.key, x = c; x !== null;) {
                            if (x.key === C) {
                                if (C = f.type, C === kn) {
                                    if (x.tag === 7) {
                                        n(p, x.sibling), c = i(x, f.props.children), c.return = p, p = c;
                                        break e
                                    }
                                } else if (x.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Mt && Ps(C) === x.type) {
                                    n(p, x.sibling), c = i(x, f.props), c.ref = rr(p, x, f), c.return = p, p = c;
                                    break e
                                }
                                n(p, x);
                                break
                            } else t(p, x);
                            x = x.sibling
                        }
                        f.type === kn ? (c = an(f.props.children, p.mode, v, f.key), c.return = p, p = c) : (v = Si(f.type, f.key, f.props, null, p.mode, v), v.ref = rr(p, c, f), v.return = p, p = v)
                    }
                    return o(p);
                case wn:
                    e: {
                        for (x = f.key; c !== null;) {
                            if (c.key === x)
                                if (c.tag === 4 && c.stateNode.containerInfo === f.containerInfo && c.stateNode.implementation === f.implementation) {
                                    n(p, c.sibling), c = i(c, f.children || []), c.return = p, p = c;
                                    break e
                                } else {
                                    n(p, c);
                                    break
                                }
                            else t(p, c);
                            c = c.sibling
                        }
                        c = Ul(f, p.mode, v),
                        c.return = p,
                        p = c
                    }
                    return o(p);
                case Mt:
                    return x = f._init, A(p, c, x(f._payload), v)
            }
            if (ur(f)) return S(p, c, f, v);
            if (qn(f)) return E(p, c, f, v);
            ri(p, f)
        }
        return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, c !== null && c.tag === 6 ? (n(p, c.sibling), c = i(c, f), c.return = p, p = c) : (n(p, c), c = jl(f, p.mode, v), c.return = p, p = c), o(p)) : n(p, c)
    }
    return A
}
var Un = yc(!0),
    vc = yc(!1),
    Oi = Zt(null),
    Ai = null,
    Pn = null,
    hu = null;

function mu() {
    hu = Pn = Ai = null
}

function gu(e) {
    var t = Oi.current;
    ee(Oi), e._currentValue = t
}

function _o(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function On(e, t) {
    Ai = e, hu = Pn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Oe = !0), e.firstContext = null)
}

function et(e) {
    var t = e._currentValue;
    if (hu !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Pn === null) {
            if (Ai === null) throw Error(N(308));
            Pn = e, Ai.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Pn = Pn.next = e;
    return t
}
var on = null;

function yu(e) {
    on === null ? on = [e] : on.push(e)
}

function wc(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, yu(t)) : (n.next = i.next, i.next = n), t.interleaved = n, xt(e, r)
}

function xt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Dt = !1;

function vu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function kc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function _t(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Qt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, V & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, xt(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, yu(r)) : (t.next = i.next, i.next = t), r.interleaved = t, xt(e, n)
}

function mi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ru(e, n)
    }
}

function Rs(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            l = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                l === null ? i = l = o : l = l.next = o, n = n.next
            } while (n !== null);
            l === null ? i = l = t : l = l.next = t
        } else i = l = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: l,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Bi(e, t, n, r) {
    var i = e.updateQueue;
    Dt = !1;
    var l = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
    if (s !== null) {
        i.shared.pending = null;
        var u = s,
            a = u.next;
        u.next = null, o === null ? l = a : o.next = a, o = u;
        var m = e.alternate;
        m !== null && (m = m.updateQueue, s = m.lastBaseUpdate, s !== o && (s === null ? m.firstBaseUpdate = a : s.next = a, m.lastBaseUpdate = u))
    }
    if (l !== null) {
        var y = i.baseState;
        o = 0, m = a = u = null, s = l;
        do {
            var g = s.lane,
                k = s.eventTime;
            if ((r & g) === g) {
                m !== null && (m = m.next = {
                    eventTime: k,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var S = e,
                        E = s;
                    switch (g = t, k = n, E.tag) {
                        case 1:
                            if (S = E.payload, typeof S == "function") {
                                y = S.call(k, y, g);
                                break e
                            }
                            y = S;
                            break e;
                        case 3:
                            S.flags = S.flags & -65537 | 128;
                        case 0:
                            if (S = E.payload, g = typeof S == "function" ? S.call(k, y, g) : S, g == null) break e;
                            y = se({}, y, g);
                            break e;
                        case 2:
                            Dt = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64, g = i.effects, g === null ? i.effects = [s] : g.push(s))
            } else k = {
                eventTime: k,
                lane: g,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null
            }, m === null ? (a = m = k, u = y) : m = m.next = k, o |= g;
            if (s = s.next, s === null) {
                if (s = i.shared.pending, s === null) break;
                g = s, s = g.next, g.next = null, i.lastBaseUpdate = g, i.shared.pending = null
            }
        } while (!0);
        if (m === null && (u = y), i.baseState = u, i.firstBaseUpdate = a, i.lastBaseUpdate = m, t = i.shared.interleaved, t !== null) {
            i = t;
            do o |= i.lane, i = i.next; while (i !== t)
        } else l === null && (i.shared.lanes = 0);
        pn |= o, e.lanes = o, e.memoizedState = y
    }
}

function Ls(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(N(191, i));
                i.call(r)
            }
        }
}
var Vr = {},
    mt = Zt(Vr),
    Ir = Zt(Vr),
    zr = Zt(Vr);

function un(e) {
    if (e === Vr) throw Error(N(174));
    return e
}

function wu(e, t) {
    switch (X(zr, t), X(Ir, e), X(mt, Vr), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : no(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = no(t, e)
    }
    ee(mt), X(mt, t)
}

function $n() {
    ee(mt), ee(Ir), ee(zr)
}

function Sc(e) {
    un(zr.current);
    var t = un(mt.current),
        n = no(t, e.type);
    t !== n && (X(Ir, e), X(mt, n))
}

function ku(e) {
    Ir.current === e && (ee(mt), ee(Ir))
}
var oe = Zt(0);

function Fi(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Ml = [];

function Su() {
    for (var e = 0; e < Ml.length; e++) Ml[e]._workInProgressVersionPrimary = null;
    Ml.length = 0
}
var gi = Pt.ReactCurrentDispatcher,
    Dl = Pt.ReactCurrentBatchConfig,
    dn = 0,
    ue = null,
    ye = null,
    ke = null,
    ji = !1,
    mr = !1,
    Mr = 0,
    Pp = 0;

function xe() {
    throw Error(N(321))
}

function Eu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!at(e[n], t[n])) return !1;
    return !0
}

function _u(e, t, n, r, i, l) {
    if (dn = l, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, gi.current = e === null || e.memoizedState === null ? zp : Mp, e = n(r, i), mr) {
        l = 0;
        do {
            if (mr = !1, Mr = 0, 25 <= l) throw Error(N(301));
            l += 1, ke = ye = null, t.updateQueue = null, gi.current = Dp, e = n(r, i)
        } while (mr)
    }
    if (gi.current = Ui, t = ye !== null && ye.next !== null, dn = 0, ke = ye = ue = null, ji = !1, t) throw Error(N(300));
    return e
}

function Cu() {
    var e = Mr !== 0;
    return Mr = 0, e
}

function dt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ke === null ? ue.memoizedState = ke = e : ke = ke.next = e, ke
}

function tt() {
    if (ye === null) {
        var e = ue.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ye.next;
    var t = ke === null ? ue.memoizedState : ke.next;
    if (t !== null) ke = t, ye = e;
    else {
        if (e === null) throw Error(N(310));
        ye = e, e = {
            memoizedState: ye.memoizedState,
            baseState: ye.baseState,
            baseQueue: ye.baseQueue,
            queue: ye.queue,
            next: null
        }, ke === null ? ue.memoizedState = ke = e : ke = ke.next = e
    }
    return ke
}

function Dr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Ol(e) {
    var t = tt(),
        n = t.queue;
    if (n === null) throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = ye,
        i = r.baseQueue,
        l = n.pending;
    if (l !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = l.next, l.next = o
        }
        r.baseQueue = i = l, n.pending = null
    }
    if (i !== null) {
        l = i.next, r = r.baseState;
        var s = o = null,
            u = null,
            a = l;
        do {
            var m = a.lane;
            if ((dn & m) === m) u !== null && (u = u.next = {
                lane: 0,
                action: a.action,
                hasEagerState: a.hasEagerState,
                eagerState: a.eagerState,
                next: null
            }), r = a.hasEagerState ? a.eagerState : e(r, a.action);
            else {
                var y = {
                    lane: m,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                };
                u === null ? (s = u = y, o = r) : u = u.next = y, ue.lanes |= m, pn |= m
            }
            a = a.next
        } while (a !== null && a !== l);
        u === null ? o = r : u.next = s, at(r, t.memoizedState) || (Oe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do l = i.lane, ue.lanes |= l, pn |= l, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Al(e) {
    var t = tt(),
        n = t.queue;
    if (n === null) throw Error(N(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        l = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do l = e(l, o.action), o = o.next; while (o !== i);
        at(l, t.memoizedState) || (Oe = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l
    }
    return [l, r]
}

function Ec() {}

function _c(e, t) {
    var n = ue,
        r = tt(),
        i = t(),
        l = !at(r.memoizedState, i);
    if (l && (r.memoizedState = i, Oe = !0), r = r.queue, Nu(xc.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || ke !== null && ke.memoizedState.tag & 1) {
        if (n.flags |= 2048, Or(9, Nc.bind(null, n, r, i, t), void 0, null), Se === null) throw Error(N(349));
        dn & 30 || Cc(n, t, i)
    }
    return i
}

function Cc(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = ue.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Nc(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Tc(t) && Pc(e)
}

function xc(e, t, n) {
    return n(function() {
        Tc(t) && Pc(e)
    })
}

function Tc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !at(e, n)
    } catch {
        return !0
    }
}

function Pc(e) {
    var t = xt(e, 1);
    t !== null && st(t, e, 1, -1)
}

function Is(e) {
    var t = dt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Dr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Ip.bind(null, ue, e), [t.memoizedState, e]
}

function Or(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = ue.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Rc() {
    return tt().memoizedState
}

function yi(e, t, n, r) {
    var i = dt();
    ue.flags |= e, i.memoizedState = Or(1 | t, n, void 0, r === void 0 ? null : r)
}

function tl(e, t, n, r) {
    var i = tt();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (ye !== null) {
        var o = ye.memoizedState;
        if (l = o.destroy, r !== null && Eu(r, o.deps)) {
            i.memoizedState = Or(t, n, l, r);
            return
        }
    }
    ue.flags |= e, i.memoizedState = Or(1 | t, n, l, r)
}

function zs(e, t) {
    return yi(8390656, 8, e, t)
}

function Nu(e, t) {
    return tl(2048, 8, e, t)
}

function Lc(e, t) {
    return tl(4, 2, e, t)
}

function Ic(e, t) {
    return tl(4, 4, e, t)
}

function zc(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function Mc(e, t, n) {
    return n = n != null ? n.concat([e]) : null, tl(4, 4, zc.bind(null, t, e), n)
}

function xu() {}

function Dc(e, t) {
    var n = tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Eu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Oc(e, t) {
    var n = tt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Eu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Ac(e, t, n) {
    return dn & 21 ? (at(n, t) || (n = $a(), ue.lanes |= n, pn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Oe = !0), e.memoizedState = n)
}

function Rp(e, t) {
    var n = W;
    W = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Dl.transition;
    Dl.transition = {};
    try {
        e(!1), t()
    } finally {
        W = n, Dl.transition = r
    }
}

function Bc() {
    return tt().memoizedState
}

function Lp(e, t, n) {
    var r = Kt(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Fc(e)) jc(t, n);
    else if (n = wc(e, t, n, r), n !== null) {
        var i = Ie();
        st(n, e, r, i), Uc(n, t, r)
    }
}

function Ip(e, t, n) {
    var r = Kt(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Fc(e)) jc(t, i);
    else {
        var l = e.alternate;
        if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
            var o = t.lastRenderedState,
                s = l(o, n);
            if (i.hasEagerState = !0, i.eagerState = s, at(s, o)) {
                var u = t.interleaved;
                u === null ? (i.next = i, yu(t)) : (i.next = u.next, u.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = wc(e, t, i, r), n !== null && (i = Ie(), st(n, e, r, i), Uc(n, t, r))
    }
}

function Fc(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue
}

function jc(e, t) {
    mr = ji = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Uc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ru(e, n)
    }
}
var Ui = {
        readContext: et,
        useCallback: xe,
        useContext: xe,
        useEffect: xe,
        useImperativeHandle: xe,
        useInsertionEffect: xe,
        useLayoutEffect: xe,
        useMemo: xe,
        useReducer: xe,
        useRef: xe,
        useState: xe,
        useDebugValue: xe,
        useDeferredValue: xe,
        useTransition: xe,
        useMutableSource: xe,
        useSyncExternalStore: xe,
        useId: xe,
        unstable_isNewReconciler: !1
    },
    zp = {
        readContext: et,
        useCallback: function(e, t) {
            return dt().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: et,
        useEffect: zs,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, yi(4194308, 4, zc.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return yi(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return yi(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = dt();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = dt();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Lp.bind(null, ue, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = dt();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Is,
        useDebugValue: xu,
        useDeferredValue: function(e) {
            return dt().memoizedState = e
        },
        useTransition: function() {
            var e = Is(!1),
                t = e[0];
            return e = Rp.bind(null, e[1]), dt().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ue,
                i = dt();
            if (ne) {
                if (n === void 0) throw Error(N(407));
                n = n()
            } else {
                if (n = t(), Se === null) throw Error(N(349));
                dn & 30 || Cc(r, t, n)
            }
            i.memoizedState = n;
            var l = {
                value: n,
                getSnapshot: t
            };
            return i.queue = l, zs(xc.bind(null, r, l, e), [e]), r.flags |= 2048, Or(9, Nc.bind(null, r, l, n, t), void 0, null), n
        },
        useId: function() {
            var e = dt(),
                t = Se.identifierPrefix;
            if (ne) {
                var n = Et,
                    r = St;
                n = (r & ~(1 << 32 - ut(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Mr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Pp++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    Mp = {
        readContext: et,
        useCallback: Dc,
        useContext: et,
        useEffect: Nu,
        useImperativeHandle: Mc,
        useInsertionEffect: Lc,
        useLayoutEffect: Ic,
        useMemo: Oc,
        useReducer: Ol,
        useRef: Rc,
        useState: function() {
            return Ol(Dr)
        },
        useDebugValue: xu,
        useDeferredValue: function(e) {
            var t = tt();
            return Ac(t, ye.memoizedState, e)
        },
        useTransition: function() {
            var e = Ol(Dr)[0],
                t = tt().memoizedState;
            return [e, t]
        },
        useMutableSource: Ec,
        useSyncExternalStore: _c,
        useId: Bc,
        unstable_isNewReconciler: !1
    },
    Dp = {
        readContext: et,
        useCallback: Dc,
        useContext: et,
        useEffect: Nu,
        useImperativeHandle: Mc,
        useInsertionEffect: Lc,
        useLayoutEffect: Ic,
        useMemo: Oc,
        useReducer: Al,
        useRef: Rc,
        useState: function() {
            return Al(Dr)
        },
        useDebugValue: xu,
        useDeferredValue: function(e) {
            var t = tt();
            return ye === null ? t.memoizedState = e : Ac(t, ye.memoizedState, e)
        },
        useTransition: function() {
            var e = Al(Dr)[0],
                t = tt().memoizedState;
            return [e, t]
        },
        useMutableSource: Ec,
        useSyncExternalStore: _c,
        useId: Bc,
        unstable_isNewReconciler: !1
    };

function it(e, t) {
    if (e && e.defaultProps) {
        t = se({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Co(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : se({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var nl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? gn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ie(),
            i = Kt(e),
            l = _t(r, i);
        l.payload = t, n != null && (l.callback = n), t = Qt(e, l, i), t !== null && (st(t, e, i, r), mi(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ie(),
            i = Kt(e),
            l = _t(r, i);
        l.tag = 1, l.payload = t, n != null && (l.callback = n), t = Qt(e, l, i), t !== null && (st(t, e, i, r), mi(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ie(),
            r = Kt(e),
            i = _t(n, r);
        i.tag = 2, t != null && (i.callback = t), t = Qt(e, i, r), t !== null && (st(t, e, r, n), mi(t, e, r))
    }
};

function Ms(e, t, n, r, i, l, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, o) : t.prototype && t.prototype.isPureReactComponent ? !Tr(n, r) || !Tr(i, l) : !0
}

function $c(e, t, n) {
    var r = !1,
        i = Jt,
        l = t.contextType;
    return typeof l == "object" && l !== null ? l = et(l) : (i = Be(t) ? cn : Re.current, r = t.contextTypes, l = (r = r != null) ? Fn(e, i) : Jt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = nl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = l), t
}

function Ds(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && nl.enqueueReplaceState(t, t.state, null)
}

function No(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = {}, vu(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? i.context = et(l) : (l = Be(t) ? cn : Re.current, i.context = Fn(e, l)), i.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (Co(e, t, l, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && nl.enqueueReplaceState(i, i.state, null), Bi(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function Vn(e, t) {
    try {
        var n = "",
            r = t;
        do n += sd(r), r = r.return; while (r);
        var i = n
    } catch (l) {
        i = `
Error generating stack: ` + l.message + `
` + l.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function Bl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function xo(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Op = typeof WeakMap == "function" ? WeakMap : Map;

function Vc(e, t, n) {
    n = _t(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Vi || (Vi = !0, Ao = r), xo(e, t)
    }, n
}

function Hc(e, t, n) {
    n = _t(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            xo(e, t)
        }
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
        xo(e, t), typeof r != "function" && (Wt === null ? Wt = new Set([this]) : Wt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function Os(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Op;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = Jp.bind(null, e, t, n), t.then(e, e))
}

function As(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Bs(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = _t(-1, 1), t.tag = 2, Qt(n, t, 1))), n.lanes |= 1), e)
}
var Ap = Pt.ReactCurrentOwner,
    Oe = !1;

function Le(e, t, n, r) {
    t.child = e === null ? vc(t, null, n, r) : Un(t, e.child, n, r)
}

function Fs(e, t, n, r, i) {
    n = n.render;
    var l = t.ref;
    return On(t, i), r = _u(e, t, n, r, l, i), n = Cu(), e !== null && !Oe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Tt(e, t, i)) : (ne && n && fu(t), t.flags |= 1, Le(e, t, r, i), t.child)
}

function js(e, t, n, r, i) {
    if (e === null) {
        var l = n.type;
        return typeof l == "function" && !Du(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Qc(e, t, l, r, i)) : (e = Si(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (l = e.child, !(e.lanes & i)) {
        var o = l.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Tr, n(o, r) && e.ref === t.ref) return Tt(e, t, i)
    }
    return t.flags |= 1, e = Yt(l, r), e.ref = t.ref, e.return = t, t.child = e
}

function Qc(e, t, n, r, i) {
    if (e !== null) {
        var l = e.memoizedProps;
        if (Tr(l, r) && e.ref === t.ref)
            if (Oe = !1, t.pendingProps = r = l, (e.lanes & i) !== 0) e.flags & 131072 && (Oe = !0);
            else return t.lanes = e.lanes, Tt(e, t, i)
    }
    return To(e, t, n, r, i)
}

function Wc(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, X(Ln, je), je |= n;
        else {
            if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, X(Ln, je), je |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = l !== null ? l.baseLanes : n, X(Ln, je), je |= r
        }
    else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, X(Ln, je), je |= r;
    return Le(e, t, i, n), t.child
}

function Kc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function To(e, t, n, r, i) {
    var l = Be(n) ? cn : Re.current;
    return l = Fn(t, l), On(t, i), n = _u(e, t, n, r, l, i), r = Cu(), e !== null && !Oe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, Tt(e, t, i)) : (ne && r && fu(t), t.flags |= 1, Le(e, t, n, i), t.child)
}

function Us(e, t, n, r, i) {
    if (Be(n)) {
        var l = !0;
        zi(t)
    } else l = !1;
    if (On(t, i), t.stateNode === null) vi(e, t), $c(t, n, r), No(t, n, r, i), r = !0;
    else if (e === null) {
        var o = t.stateNode,
            s = t.memoizedProps;
        o.props = s;
        var u = o.context,
            a = n.contextType;
        typeof a == "object" && a !== null ? a = et(a) : (a = Be(n) ? cn : Re.current, a = Fn(t, a));
        var m = n.getDerivedStateFromProps,
            y = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        y || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || u !== a) && Ds(t, o, r, a), Dt = !1;
        var g = t.memoizedState;
        o.state = g, Bi(t, r, o, i), u = t.memoizedState, s !== r || g !== u || Ae.current || Dt ? (typeof m == "function" && (Co(t, n, m, r), u = t.memoizedState), (s = Dt || Ms(t, n, s, r, g, u, a)) ? (y || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = a, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        o = t.stateNode, kc(e, t), s = t.memoizedProps, a = t.type === t.elementType ? s : it(t.type, s), o.props = a, y = t.pendingProps, g = o.context, u = n.contextType, typeof u == "object" && u !== null ? u = et(u) : (u = Be(n) ? cn : Re.current, u = Fn(t, u));
        var k = n.getDerivedStateFromProps;
        (m = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== y || g !== u) && Ds(t, o, r, u), Dt = !1, g = t.memoizedState, o.state = g, Bi(t, r, o, i);
        var S = t.memoizedState;
        s !== y || g !== S || Ae.current || Dt ? (typeof k == "function" && (Co(t, n, k, r), S = t.memoizedState), (a = Dt || Ms(t, n, a, r, g, S, u) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, S, u), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, S, u)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), o.props = r, o.state = S, o.context = u, r = a) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Po(e, t, n, r, l, i)
}

function Po(e, t, n, r, i, l) {
    Kc(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return i && Ns(t, n, !1), Tt(e, t, l);
    r = t.stateNode, Ap.current = t;
    var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Un(t, e.child, null, l), t.child = Un(t, null, s, l)) : Le(e, t, s, l), t.memoizedState = r.state, i && Ns(t, n, !0), t.child
}

function Yc(e) {
    var t = e.stateNode;
    t.pendingContext ? Cs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Cs(e, t.context, !1), wu(e, t.containerInfo)
}

function $s(e, t, n, r, i) {
    return jn(), pu(i), t.flags |= 256, Le(e, t, n, r), t.child
}
var Ro = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Lo(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Gc(e, t, n) {
    var r = t.pendingProps,
        i = oe.current,
        l = !1,
        o = (t.flags & 128) !== 0,
        s;
    if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), s ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), X(oe, i & 1), e === null) return Eo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, o = {
        mode: "hidden",
        children: o
    }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = o) : l = ll(o, r, 0, null), e = an(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Lo(n), t.memoizedState = Ro, e) : Tu(t, o));
    if (i = e.memoizedState, i !== null && (s = i.dehydrated, s !== null)) return Bp(e, t, o, r, s, i, n);
    if (l) {
        l = r.fallback, o = t.mode, i = e.child, s = i.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = Yt(i, u), r.subtreeFlags = i.subtreeFlags & 14680064), s !== null ? l = Yt(s, l) : (l = an(l, o, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, o = e.child.memoizedState, o = o === null ? Lo(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, l.memoizedState = o, l.childLanes = e.childLanes & ~n, t.memoizedState = Ro, r
    }
    return l = e.child, e = l.sibling, r = Yt(l, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Tu(e, t) {
    return t = ll({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function ii(e, t, n, r) {
    return r !== null && pu(r), Un(t, e.child, null, n), e = Tu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Bp(e, t, n, r, i, l, o) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Bl(Error(N(422))), ii(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, i = t.mode, r = ll({
        mode: "visible",
        children: r.children
    }, i, 0, null), l = an(l, i, o, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Un(t, e.child, null, o), t.child.memoizedState = Lo(o), t.memoizedState = Ro, l);
    if (!(t.mode & 1)) return ii(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var s = r.dgst;
        return r = s, l = Error(N(419)), r = Bl(l, r, void 0), ii(e, t, o, r)
    }
    if (s = (o & e.childLanes) !== 0, Oe || s) {
        if (r = Se, r !== null) {
            switch (o & -o) {
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
                    i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i, i !== 0 && i !== l.retryLane && (l.retryLane = i, xt(e, i), st(r, e, i, -1))
        }
        return Mu(), r = Bl(Error(N(421))), ii(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Xp.bind(null, e), i._reactRetry = t, null) : (e = l.treeContext, Ue = Ht(i.nextSibling), $e = t, ne = !0, ot = null, e !== null && (Xe[Ze++] = St, Xe[Ze++] = Et, Xe[Ze++] = fn, St = e.id, Et = e.overflow, fn = t), t = Tu(t, r.children), t.flags |= 4096, t)
}

function Vs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), _o(e.return, t, n)
}

function Fl(e, t, n, r, i) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = i)
}

function Jc(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        l = r.tail;
    if (Le(e, t, r.children, n), r = oe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Vs(e, n, t);
            else if (e.tag === 19) Vs(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (X(oe, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Fi(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Fl(t, !1, i, n, l);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && Fi(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            Fl(t, !0, n, null, l);
            break;
        case "together":
            Fl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function vi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Tt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), pn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(N(153));
    if (t.child !== null) {
        for (e = t.child, n = Yt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Yt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Fp(e, t, n) {
    switch (t.tag) {
        case 3:
            Yc(t), jn();
            break;
        case 5:
            Sc(t);
            break;
        case 1:
            Be(t.type) && zi(t);
            break;
        case 4:
            wu(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            X(Oi, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (X(oe, oe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Gc(e, t, n) : (X(oe, oe.current & 1), e = Tt(e, t, n), e !== null ? e.sibling : null);
            X(oe, oe.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Jc(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), X(oe, oe.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Wc(e, t, n)
    }
    return Tt(e, t, n)
}
var Xc, Io, Zc, qc;
Xc = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Io = function() {};
Zc = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, un(mt.current);
        var l = null;
        switch (n) {
            case "input":
                i = ql(e, i), r = ql(e, r), l = [];
                break;
            case "select":
                i = se({}, i, {
                    value: void 0
                }), r = se({}, r, {
                    value: void 0
                }), l = [];
                break;
            case "textarea":
                i = to(e, i), r = to(e, r), l = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Li)
        }
        ro(n, r);
        var o;
        n = null;
        for (a in i)
            if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
                if (a === "style") {
                    var s = i[a];
                    for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (kr.hasOwnProperty(a) ? l || (l = []) : (l = l || []).push(a, null));
        for (a in r) {
            var u = r[a];
            if (s = i != null ? i[a] : void 0, r.hasOwnProperty(a) && u !== s && (u != null || s != null))
                if (a === "style")
                    if (s) {
                        for (o in s) !s.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in u) u.hasOwnProperty(o) && s[o] !== u[o] && (n || (n = {}), n[o] = u[o])
                    } else n || (l || (l = []), l.push(a, n)), n = u;
            else a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (l = l || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (l = l || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (kr.hasOwnProperty(a) ? (u != null && a === "onScroll" && b("scroll", e), l || s === u || (l = [])) : (l = l || []).push(a, u))
        }
        n && (l = l || []).push("style", n);
        var a = l;
        (t.updateQueue = a) && (t.flags |= 4)
    }
};
qc = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function ir(e, t) {
    if (!ne) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function Te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function jp(e, t, n) {
    var r = t.pendingProps;
    switch (du(t), t.tag) {
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
            return Te(t), null;
        case 1:
            return Be(t.type) && Ii(), Te(t), null;
        case 3:
            return r = t.stateNode, $n(), ee(Ae), ee(Re), Su(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ni(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ot !== null && (jo(ot), ot = null))), Io(e, t), Te(t), null;
        case 5:
            ku(t);
            var i = un(zr.current);
            if (n = t.type, e !== null && t.stateNode != null) Zc(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(N(166));
                    return Te(t), null
                }
                if (e = un(mt.current), ni(t)) {
                    r = t.stateNode, n = t.type;
                    var l = t.memoizedProps;
                    switch (r[pt] = t, r[Lr] = l, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            b("cancel", r), b("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            b("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < ar.length; i++) b(ar[i], r);
                            break;
                        case "source":
                            b("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            b("error", r), b("load", r);
                            break;
                        case "details":
                            b("toggle", r);
                            break;
                        case "input":
                            Zu(r, l), b("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!l.multiple
                            }, b("invalid", r);
                            break;
                        case "textarea":
                            bu(r, l), b("invalid", r)
                    }
                    ro(n, l), i = null;
                    for (var o in l)
                        if (l.hasOwnProperty(o)) {
                            var s = l[o];
                            o === "children" ? typeof s == "string" ? r.textContent !== s && (l.suppressHydrationWarning !== !0 && ti(r.textContent, s, e), i = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (l.suppressHydrationWarning !== !0 && ti(r.textContent, s, e), i = ["children", "" + s]) : kr.hasOwnProperty(o) && s != null && o === "onScroll" && b("scroll", r)
                        } switch (n) {
                        case "input":
                            Yr(r), qu(r, l, !0);
                            break;
                        case "textarea":
                            Yr(r), es(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof l.onClick == "function" && (r.onclick = Li)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    o = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = xa(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                        is: r.is
                    }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[pt] = t, e[Lr] = r, Xc(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = io(n, r), n) {
                            case "dialog":
                                b("cancel", e), b("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                b("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < ar.length; i++) b(ar[i], e);
                                i = r;
                                break;
                            case "source":
                                b("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                b("error", e), b("load", e), i = r;
                                break;
                            case "details":
                                b("toggle", e), i = r;
                                break;
                            case "input":
                                Zu(e, r), i = ql(e, r), b("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = se({}, r, {
                                    value: void 0
                                }), b("invalid", e);
                                break;
                            case "textarea":
                                bu(e, r), i = to(e, r), b("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        ro(n, i),
                        s = i;
                        for (l in s)
                            if (s.hasOwnProperty(l)) {
                                var u = s[l];
                                l === "style" ? Ra(e, u) : l === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Ta(e, u)) : l === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Sr(e, u) : typeof u == "number" && Sr(e, "" + u) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (kr.hasOwnProperty(l) ? u != null && l === "onScroll" && b("scroll", e) : u != null && Zo(e, l, u, o))
                            } switch (n) {
                            case "input":
                                Yr(e), qu(e, r, !1);
                                break;
                            case "textarea":
                                Yr(e), es(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Gt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, l = r.value, l != null ? In(e, !!r.multiple, l, !1) : r.defaultValue != null && In(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = Li)
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
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return Te(t), null;
        case 6:
            if (e && t.stateNode != null) qc(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
                if (n = un(zr.current), un(mt.current), ni(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[pt] = t, (l = r.nodeValue !== n) && (e = $e, e !== null)) switch (e.tag) {
                        case 3:
                            ti(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && ti(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    l && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[pt] = t, t.stateNode = r
            }
            return Te(t), null;
        case 13:
            if (ee(oe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (ne && Ue !== null && t.mode & 1 && !(t.flags & 128)) gc(), jn(), t.flags |= 98560, l = !1;
                else if (l = ni(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!l) throw Error(N(318));
                        if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(N(317));
                        l[pt] = t
                    } else jn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    Te(t), l = !1
                } else ot !== null && (jo(ot), ot = null), l = !0;
                if (!l) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || oe.current & 1 ? ve === 0 && (ve = 3) : Mu())), t.updateQueue !== null && (t.flags |= 4), Te(t), null);
        case 4:
            return $n(), Io(e, t), e === null && Pr(t.stateNode.containerInfo), Te(t), null;
        case 10:
            return gu(t.type._context), Te(t), null;
        case 17:
            return Be(t.type) && Ii(), Te(t), null;
        case 19:
            if (ee(oe), l = t.memoizedState, l === null) return Te(t), null;
            if (r = (t.flags & 128) !== 0, o = l.rendering, o === null)
                if (r) ir(l, !1);
                else {
                    if (ve !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = Fi(e), o !== null) {
                                for (t.flags |= 128, ir(l, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) l = n, e = r, l.flags &= 14680066, o = l.alternate, o === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = o.childLanes, l.lanes = o.lanes, l.child = o.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = o.memoizedProps, l.memoizedState = o.memoizedState, l.updateQueue = o.updateQueue, l.type = o.type, e = o.dependencies, l.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return X(oe, oe.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    l.tail !== null && fe() > Hn && (t.flags |= 128, r = !0, ir(l, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Fi(o), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ir(l, !0), l.tail === null && l.tailMode === "hidden" && !o.alternate && !ne) return Te(t), null
                    } else 2 * fe() - l.renderingStartTime > Hn && n !== 1073741824 && (t.flags |= 128, r = !0, ir(l, !1), t.lanes = 4194304);
                l.isBackwards ? (o.sibling = t.child, t.child = o) : (n = l.last, n !== null ? n.sibling = o : t.child = o, l.last = o)
            }
            return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = fe(), t.sibling = null, n = oe.current, X(oe, r ? n & 1 | 2 : n & 1), t) : (Te(t), null);
        case 22:
        case 23:
            return zu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? je & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Te(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(N(156, t.tag))
}

function Up(e, t) {
    switch (du(t), t.tag) {
        case 1:
            return Be(t.type) && Ii(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return $n(), ee(Ae), ee(Re), Su(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return ku(t), null;
        case 13:
            if (ee(oe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(N(340));
                jn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return ee(oe), null;
        case 4:
            return $n(), null;
        case 10:
            return gu(t.type._context), null;
        case 22:
        case 23:
            return zu(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var li = !1,
    Pe = !1,
    $p = typeof WeakSet == "function" ? WeakSet : Set,
    I = null;

function Rn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            ae(e, t, r)
        } else n.current = null
}

function zo(e, t, n) {
    try {
        n()
    } catch (r) {
        ae(e, t, r)
    }
}
var Hs = !1;

function Vp(e, t) {
    if (mo = Ti, e = rc(), cu(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    l = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, l.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    s = -1,
                    u = -1,
                    a = 0,
                    m = 0,
                    y = e,
                    g = null;
                t: for (;;) {
                    for (var k; y !== n || i !== 0 && y.nodeType !== 3 || (s = o + i), y !== l || r !== 0 && y.nodeType !== 3 || (u = o + r), y.nodeType === 3 && (o += y.nodeValue.length), (k = y.firstChild) !== null;) g = y, y = k;
                    for (;;) {
                        if (y === e) break t;
                        if (g === n && ++a === i && (s = o), g === l && ++m === r && (u = o), (k = y.nextSibling) !== null) break;
                        y = g, g = y.parentNode
                    }
                    y = k
                }
                n = s === -1 || u === -1 ? null : {
                    start: s,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (go = {
            focusedElem: e,
            selectionRange: n
        }, Ti = !1, I = t; I !== null;)
        if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, I = e;
        else
            for (; I !== null;) {
                t = I;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var E = S.memoizedProps,
                                    A = S.memoizedState,
                                    p = t.stateNode,
                                    c = p.getSnapshotBeforeUpdate(t.elementType === t.type ? E : it(t.type, E), A);
                                p.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var f = t.stateNode.containerInfo;
                            f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(N(163))
                    }
                } catch (v) {
                    ae(t, t.return, v)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, I = e;
                    break
                }
                I = t.return
            }
    return S = Hs, Hs = !1, S
}

function gr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var l = i.destroy;
                i.destroy = void 0, l !== void 0 && zo(t, n, l)
            }
            i = i.next
        } while (i !== r)
    }
}

function rl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Mo(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function bc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, bc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[pt], delete t[Lr], delete t[wo], delete t[Cp], delete t[Np])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function ef(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Qs(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || ef(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Do(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Li));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Do(e, t, n), e = e.sibling; e !== null;) Do(e, t, n), e = e.sibling
}

function Oo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Oo(e, t, n), e = e.sibling; e !== null;) Oo(e, t, n), e = e.sibling
}
var Ee = null,
    lt = !1;

function zt(e, t, n) {
    for (n = n.child; n !== null;) tf(e, t, n), n = n.sibling
}

function tf(e, t, n) {
    if (ht && typeof ht.onCommitFiberUnmount == "function") try {
        ht.onCommitFiberUnmount(Ji, n)
    } catch {}
    switch (n.tag) {
        case 5:
            Pe || Rn(n, t);
        case 6:
            var r = Ee,
                i = lt;
            Ee = null, zt(e, t, n), Ee = r, lt = i, Ee !== null && (lt ? (e = Ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ee.removeChild(n.stateNode));
            break;
        case 18:
            Ee !== null && (lt ? (e = Ee, n = n.stateNode, e.nodeType === 8 ? Il(e.parentNode, n) : e.nodeType === 1 && Il(e, n), Nr(e)) : Il(Ee, n.stateNode));
            break;
        case 4:
            r = Ee, i = lt, Ee = n.stateNode.containerInfo, lt = !0, zt(e, t, n), Ee = r, lt = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Pe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var l = i,
                        o = l.destroy;
                    l = l.tag, o !== void 0 && (l & 2 || l & 4) && zo(n, t, o), i = i.next
                } while (i !== r)
            }
            zt(e, t, n);
            break;
        case 1:
            if (!Pe && (Rn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (s) {
                ae(n, t, s)
            }
            zt(e, t, n);
            break;
        case 21:
            zt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (Pe = (r = Pe) || n.memoizedState !== null, zt(e, t, n), Pe = r) : zt(e, t, n);
            break;
        default:
            zt(e, t, n)
    }
}

function Ws(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new $p), t.forEach(function(r) {
            var i = Zp.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function rt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var l = e,
                    o = t,
                    s = o;
                e: for (; s !== null;) {
                    switch (s.tag) {
                        case 5:
                            Ee = s.stateNode, lt = !1;
                            break e;
                        case 3:
                            Ee = s.stateNode.containerInfo, lt = !0;
                            break e;
                        case 4:
                            Ee = s.stateNode.containerInfo, lt = !0;
                            break e
                    }
                    s = s.return
                }
                if (Ee === null) throw Error(N(160));
                tf(l, o, i), Ee = null, lt = !1;
                var u = i.alternate;
                u !== null && (u.return = null), i.return = null
            } catch (a) {
                ae(i, t, a)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) nf(t, e), t = t.sibling
}

function nf(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (rt(t, e), ft(e), r & 4) {
                try {
                    gr(3, e, e.return), rl(3, e)
                } catch (E) {
                    ae(e, e.return, E)
                }
                try {
                    gr(5, e, e.return)
                } catch (E) {
                    ae(e, e.return, E)
                }
            }
            break;
        case 1:
            rt(t, e), ft(e), r & 512 && n !== null && Rn(n, n.return);
            break;
        case 5:
            if (rt(t, e), ft(e), r & 512 && n !== null && Rn(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    Sr(i, "")
                } catch (E) {
                    ae(e, e.return, E)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var l = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : l,
                    s = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    s === "input" && l.type === "radio" && l.name != null && Ca(i, l), io(s, o);
                    var a = io(s, l);
                    for (o = 0; o < u.length; o += 2) {
                        var m = u[o],
                            y = u[o + 1];
                        m === "style" ? Ra(i, y) : m === "dangerouslySetInnerHTML" ? Ta(i, y) : m === "children" ? Sr(i, y) : Zo(i, m, y, a)
                    }
                    switch (s) {
                        case "input":
                            bl(i, l);
                            break;
                        case "textarea":
                            Na(i, l);
                            break;
                        case "select":
                            var g = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!l.multiple;
                            var k = l.value;
                            k != null ? In(i, !!l.multiple, k, !1) : g !== !!l.multiple && (l.defaultValue != null ? In(i, !!l.multiple, l.defaultValue, !0) : In(i, !!l.multiple, l.multiple ? [] : "", !1))
                    }
                    i[Lr] = l
                } catch (E) {
                    ae(e, e.return, E)
                }
            }
            break;
        case 6:
            if (rt(t, e), ft(e), r & 4) {
                if (e.stateNode === null) throw Error(N(162));
                i = e.stateNode, l = e.memoizedProps;
                try {
                    i.nodeValue = l
                } catch (E) {
                    ae(e, e.return, E)
                }
            }
            break;
        case 3:
            if (rt(t, e), ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Nr(t.containerInfo)
            } catch (E) {
                ae(e, e.return, E)
            }
            break;
        case 4:
            rt(t, e), ft(e);
            break;
        case 13:
            rt(t, e), ft(e), i = e.child, i.flags & 8192 && (l = i.memoizedState !== null, i.stateNode.isHidden = l, !l || i.alternate !== null && i.alternate.memoizedState !== null || (Lu = fe())), r & 4 && Ws(e);
            break;
        case 22:
            if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (Pe = (a = Pe) || m, rt(t, e), Pe = a) : rt(t, e), ft(e), r & 8192) {
                if (a = e.memoizedState !== null, (e.stateNode.isHidden = a) && !m && e.mode & 1)
                    for (I = e, m = e.child; m !== null;) {
                        for (y = I = m; I !== null;) {
                            switch (g = I, k = g.child, g.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    gr(4, g, g.return);
                                    break;
                                case 1:
                                    Rn(g, g.return);
                                    var S = g.stateNode;
                                    if (typeof S.componentWillUnmount == "function") {
                                        r = g, n = g.return;
                                        try {
                                            t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount()
                                        } catch (E) {
                                            ae(r, n, E)
                                        }
                                    }
                                    break;
                                case 5:
                                    Rn(g, g.return);
                                    break;
                                case 22:
                                    if (g.memoizedState !== null) {
                                        Ys(y);
                                        continue
                                    }
                            }
                            k !== null ? (k.return = g, I = k) : Ys(y)
                        }
                        m = m.sibling
                    }
                e: for (m = null, y = e;;) {
                    if (y.tag === 5) {
                        if (m === null) {
                            m = y;
                            try {
                                i = y.stateNode, a ? (l = i.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (s = y.stateNode, u = y.memoizedProps.style, o = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = Pa("display", o))
                            } catch (E) {
                                ae(e, e.return, E)
                            }
                        }
                    } else if (y.tag === 6) {
                        if (m === null) try {
                            y.stateNode.nodeValue = a ? "" : y.memoizedProps
                        } catch (E) {
                            ae(e, e.return, E)
                        }
                    } else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
                        y.child.return = y, y = y.child;
                        continue
                    }
                    if (y === e) break e;
                    for (; y.sibling === null;) {
                        if (y.return === null || y.return === e) break e;
                        m === y && (m = null), y = y.return
                    }
                    m === y && (m = null), y.sibling.return = y.return, y = y.sibling
                }
            }
            break;
        case 19:
            rt(t, e), ft(e), r & 4 && Ws(e);
            break;
        case 21:
            break;
        default:
            rt(t, e), ft(e)
    }
}

function ft(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (ef(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(N(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (Sr(i, ""), r.flags &= -33);
                    var l = Qs(e);
                    Oo(e, l, i);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        s = Qs(e);
                    Do(e, s, o);
                    break;
                default:
                    throw Error(N(161))
            }
        }
        catch (u) {
            ae(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Hp(e, t, n) {
    I = e, rf(e)
}

function rf(e, t, n) {
    for (var r = (e.mode & 1) !== 0; I !== null;) {
        var i = I,
            l = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || li;
            if (!o) {
                var s = i.alternate,
                    u = s !== null && s.memoizedState !== null || Pe;
                s = li;
                var a = Pe;
                if (li = o, (Pe = u) && !a)
                    for (I = i; I !== null;) o = I, u = o.child, o.tag === 22 && o.memoizedState !== null ? Gs(i) : u !== null ? (u.return = o, I = u) : Gs(i);
                for (; l !== null;) I = l, rf(l), l = l.sibling;
                I = i, li = s, Pe = a
            }
            Ks(e)
        } else i.subtreeFlags & 8772 && l !== null ? (l.return = i, I = l) : Ks(e)
    }
}

function Ks(e) {
    for (; I !== null;) {
        var t = I;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Pe || rl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Pe)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : it(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var l = t.updateQueue;
                        l !== null && Ls(t, l, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Ls(t, o, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img":
                                    u.src && (n.src = u.src)
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
                            var a = t.alternate;
                            if (a !== null) {
                                var m = a.memoizedState;
                                if (m !== null) {
                                    var y = m.dehydrated;
                                    y !== null && Nr(y)
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
                        throw Error(N(163))
                }
                Pe || t.flags & 512 && Mo(t)
            } catch (g) {
                ae(t, t.return, g)
            }
        }
        if (t === e) {
            I = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, I = n;
            break
        }
        I = t.return
    }
}

function Ys(e) {
    for (; I !== null;) {
        var t = I;
        if (t === e) {
            I = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, I = n;
            break
        }
        I = t.return
    }
}

function Gs(e) {
    for (; I !== null;) {
        var t = I;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        rl(4, t)
                    } catch (u) {
                        ae(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            ae(t, i, u)
                        }
                    }
                    var l = t.return;
                    try {
                        Mo(t)
                    } catch (u) {
                        ae(t, l, u)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Mo(t)
                    } catch (u) {
                        ae(t, o, u)
                    }
            }
        } catch (u) {
            ae(t, t.return, u)
        }
        if (t === e) {
            I = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return, I = s;
            break
        }
        I = t.return
    }
}
var Qp = Math.ceil,
    $i = Pt.ReactCurrentDispatcher,
    Pu = Pt.ReactCurrentOwner,
    be = Pt.ReactCurrentBatchConfig,
    V = 0,
    Se = null,
    he = null,
    _e = 0,
    je = 0,
    Ln = Zt(0),
    ve = 0,
    Ar = null,
    pn = 0,
    il = 0,
    Ru = 0,
    yr = null,
    De = null,
    Lu = 0,
    Hn = 1 / 0,
    wt = null,
    Vi = !1,
    Ao = null,
    Wt = null,
    oi = !1,
    Ft = null,
    Hi = 0,
    vr = 0,
    Bo = null,
    wi = -1,
    ki = 0;

function Ie() {
    return V & 6 ? fe() : wi !== -1 ? wi : wi = fe()
}

function Kt(e) {
    return e.mode & 1 ? V & 2 && _e !== 0 ? _e & -_e : Tp.transition !== null ? (ki === 0 && (ki = $a()), ki) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ga(e.type)), e) : 1
}

function st(e, t, n, r) {
    if (50 < vr) throw vr = 0, Bo = null, Error(N(185));
    jr(e, n, r), (!(V & 2) || e !== Se) && (e === Se && (!(V & 2) && (il |= n), ve === 4 && At(e, _e)), Fe(e, r), n === 1 && V === 0 && !(t.mode & 1) && (Hn = fe() + 500, el && qt()))
}

function Fe(e, t) {
    var n = e.callbackNode;
    Td(e, t);
    var r = xi(e, e === Se ? _e : 0);
    if (r === 0) n !== null && rs(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && rs(n), t === 1) e.tag === 0 ? xp(Js.bind(null, e)) : pc(Js.bind(null, e)), Ep(function() {
            !(V & 6) && qt()
        }), n = null;
        else {
            switch (Va(r)) {
                case 1:
                    n = nu;
                    break;
                case 4:
                    n = ja;
                    break;
                case 16:
                    n = Ni;
                    break;
                case 536870912:
                    n = Ua;
                    break;
                default:
                    n = Ni
            }
            n = df(n, lf.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function lf(e, t) {
    if (wi = -1, ki = 0, V & 6) throw Error(N(327));
    var n = e.callbackNode;
    if (An() && e.callbackNode !== n) return null;
    var r = xi(e, e === Se ? _e : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Qi(e, r);
    else {
        t = r;
        var i = V;
        V |= 2;
        var l = uf();
        (Se !== e || _e !== t) && (wt = null, Hn = fe() + 500, sn(e, t));
        do try {
            Yp();
            break
        } catch (s) {
            of(e, s)
        }
        while (!0);
        mu(), $i.current = l, V = i, he !== null ? t = 0 : (Se = null, _e = 0, t = ve)
    }
    if (t !== 0) {
        if (t === 2 && (i = ao(e), i !== 0 && (r = i, t = Fo(e, i))), t === 1) throw n = Ar, sn(e, 0), At(e, r), Fe(e, fe()), n;
        if (t === 6) At(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !Wp(i) && (t = Qi(e, r), t === 2 && (l = ao(e), l !== 0 && (r = l, t = Fo(e, l))), t === 1)) throw n = Ar, sn(e, 0), At(e, r), Fe(e, fe()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(N(345));
                case 2:
                    rn(e, De, wt);
                    break;
                case 3:
                    if (At(e, r), (r & 130023424) === r && (t = Lu + 500 - fe(), 10 < t)) {
                        if (xi(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            Ie(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = vo(rn.bind(null, e, De, wt), t);
                        break
                    }
                    rn(e, De, wt);
                    break;
                case 4:
                    if (At(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var o = 31 - ut(r);
                        l = 1 << o, o = t[o], o > i && (i = o), r &= ~l
                    }
                    if (r = i, r = fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Qp(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = vo(rn.bind(null, e, De, wt), r);
                        break
                    }
                    rn(e, De, wt);
                    break;
                case 5:
                    rn(e, De, wt);
                    break;
                default:
                    throw Error(N(329))
            }
        }
    }
    return Fe(e, fe()), e.callbackNode === n ? lf.bind(null, e) : null
}

function Fo(e, t) {
    var n = yr;
    return e.current.memoizedState.isDehydrated && (sn(e, t).flags |= 256), e = Qi(e, t), e !== 2 && (t = De, De = n, t !== null && jo(t)), e
}

function jo(e) {
    De === null ? De = e : De.push.apply(De, e)
}

function Wp(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        l = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!at(l(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function At(e, t) {
    for (t &= ~Ru, t &= ~il, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - ut(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Js(e) {
    if (V & 6) throw Error(N(327));
    An();
    var t = xi(e, 0);
    if (!(t & 1)) return Fe(e, fe()), null;
    var n = Qi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ao(e);
        r !== 0 && (t = r, n = Fo(e, r))
    }
    if (n === 1) throw n = Ar, sn(e, 0), At(e, t), Fe(e, fe()), n;
    if (n === 6) throw Error(N(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, rn(e, De, wt), Fe(e, fe()), null
}

function Iu(e, t) {
    var n = V;
    V |= 1;
    try {
        return e(t)
    } finally {
        V = n, V === 0 && (Hn = fe() + 500, el && qt())
    }
}

function hn(e) {
    Ft !== null && Ft.tag === 0 && !(V & 6) && An();
    var t = V;
    V |= 1;
    var n = be.transition,
        r = W;
    try {
        if (be.transition = null, W = 1, e) return e()
    } finally {
        W = r, be.transition = n, V = t, !(V & 6) && qt()
    }
}

function zu() {
    je = Ln.current, ee(Ln)
}

function sn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Sp(n)), he !== null)
        for (n = he.return; n !== null;) {
            var r = n;
            switch (du(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Ii();
                    break;
                case 3:
                    $n(), ee(Ae), ee(Re), Su();
                    break;
                case 5:
                    ku(r);
                    break;
                case 4:
                    $n();
                    break;
                case 13:
                    ee(oe);
                    break;
                case 19:
                    ee(oe);
                    break;
                case 10:
                    gu(r.type._context);
                    break;
                case 22:
                case 23:
                    zu()
            }
            n = n.return
        }
    if (Se = e, he = e = Yt(e.current, null), _e = je = t, ve = 0, Ar = null, Ru = il = pn = 0, De = yr = null, on !== null) {
        for (t = 0; t < on.length; t++)
            if (n = on[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    l = n.pending;
                if (l !== null) {
                    var o = l.next;
                    l.next = i, r.next = o
                }
                n.pending = r
            } on = null
    }
    return e
}

function of(e, t) {
    do {
        var n = he;
        try {
            if (mu(), gi.current = Ui, ji) {
                for (var r = ue.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                ji = !1
            }
            if (dn = 0, ke = ye = ue = null, mr = !1, Mr = 0, Pu.current = null, n === null || n.return === null) {
                ve = 1, Ar = t, he = null;
                break
            }
            e: {
                var l = e,
                    o = n.return,
                    s = n,
                    u = t;
                if (t = _e, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var a = u,
                        m = s,
                        y = m.tag;
                    if (!(m.mode & 1) && (y === 0 || y === 11 || y === 15)) {
                        var g = m.alternate;
                        g ? (m.updateQueue = g.updateQueue, m.memoizedState = g.memoizedState, m.lanes = g.lanes) : (m.updateQueue = null, m.memoizedState = null)
                    }
                    var k = As(o);
                    if (k !== null) {
                        k.flags &= -257, Bs(k, o, s, l, t), k.mode & 1 && Os(l, a, t), t = k, u = a;
                        var S = t.updateQueue;
                        if (S === null) {
                            var E = new Set;
                            E.add(u), t.updateQueue = E
                        } else S.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Os(l, a, t), Mu();
                            break e
                        }
                        u = Error(N(426))
                    }
                } else if (ne && s.mode & 1) {
                    var A = As(o);
                    if (A !== null) {
                        !(A.flags & 65536) && (A.flags |= 256), Bs(A, o, s, l, t), pu(Vn(u, s));
                        break e
                    }
                }
                l = u = Vn(u, s),
                ve !== 4 && (ve = 2),
                yr === null ? yr = [l] : yr.push(l),
                l = o;do {
                    switch (l.tag) {
                        case 3:
                            l.flags |= 65536, t &= -t, l.lanes |= t;
                            var p = Vc(l, u, t);
                            Rs(l, p);
                            break e;
                        case 1:
                            s = u;
                            var c = l.type,
                                f = l.stateNode;
                            if (!(l.flags & 128) && (typeof c.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Wt === null || !Wt.has(f)))) {
                                l.flags |= 65536, t &= -t, l.lanes |= t;
                                var v = Hc(l, s, t);
                                Rs(l, v);
                                break e
                            }
                    }
                    l = l.return
                } while (l !== null)
            }
            af(n)
        } catch (C) {
            t = C, he === n && n !== null && (he = n = n.return);
            continue
        }
        break
    } while (!0)
}

function uf() {
    var e = $i.current;
    return $i.current = Ui, e === null ? Ui : e
}

function Mu() {
    (ve === 0 || ve === 3 || ve === 2) && (ve = 4), Se === null || !(pn & 268435455) && !(il & 268435455) || At(Se, _e)
}

function Qi(e, t) {
    var n = V;
    V |= 2;
    var r = uf();
    (Se !== e || _e !== t) && (wt = null, sn(e, t));
    do try {
        Kp();
        break
    } catch (i) {
        of(e, i)
    }
    while (!0);
    if (mu(), V = n, $i.current = r, he !== null) throw Error(N(261));
    return Se = null, _e = 0, ve
}

function Kp() {
    for (; he !== null;) sf(he)
}

function Yp() {
    for (; he !== null && !vd();) sf(he)
}

function sf(e) {
    var t = ff(e.alternate, e, je);
    e.memoizedProps = e.pendingProps, t === null ? af(e) : he = t, Pu.current = null
}

function af(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Up(n, t), n !== null) {
                n.flags &= 32767, he = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                ve = 6, he = null;
                return
            }
        } else if (n = jp(n, t, je), n !== null) {
            he = n;
            return
        }
        if (t = t.sibling, t !== null) {
            he = t;
            return
        }
        he = t = e
    } while (t !== null);
    ve === 0 && (ve = 5)
}

function rn(e, t, n) {
    var r = W,
        i = be.transition;
    try {
        be.transition = null, W = 1, Gp(e, t, n, r)
    } finally {
        be.transition = i, W = r
    }
    return null
}

function Gp(e, t, n, r) {
    do An(); while (Ft !== null);
    if (V & 6) throw Error(N(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(N(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (Pd(e, l), e === Se && (he = Se = null, _e = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || oi || (oi = !0, df(Ni, function() {
            return An(), null
        })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
        l = be.transition, be.transition = null;
        var o = W;
        W = 1;
        var s = V;
        V |= 4, Pu.current = null, Vp(e, n), nf(n, e), hp(go), Ti = !!mo, go = mo = null, e.current = n, Hp(n), wd(), V = s, W = o, be.transition = l
    } else e.current = n;
    if (oi && (oi = !1, Ft = e, Hi = i), l = e.pendingLanes, l === 0 && (Wt = null), Ed(n.stateNode), Fe(e, fe()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (Vi) throw Vi = !1, e = Ao, Ao = null, e;
    return Hi & 1 && e.tag !== 0 && An(), l = e.pendingLanes, l & 1 ? e === Bo ? vr++ : (vr = 0, Bo = e) : vr = 0, qt(), null
}

function An() {
    if (Ft !== null) {
        var e = Va(Hi),
            t = be.transition,
            n = W;
        try {
            if (be.transition = null, W = 16 > e ? 16 : e, Ft === null) var r = !1;
            else {
                if (e = Ft, Ft = null, Hi = 0, V & 6) throw Error(N(331));
                var i = V;
                for (V |= 4, I = e.current; I !== null;) {
                    var l = I,
                        o = l.child;
                    if (I.flags & 16) {
                        var s = l.deletions;
                        if (s !== null) {
                            for (var u = 0; u < s.length; u++) {
                                var a = s[u];
                                for (I = a; I !== null;) {
                                    var m = I;
                                    switch (m.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            gr(8, m, l)
                                    }
                                    var y = m.child;
                                    if (y !== null) y.return = m, I = y;
                                    else
                                        for (; I !== null;) {
                                            m = I;
                                            var g = m.sibling,
                                                k = m.return;
                                            if (bc(m), m === a) {
                                                I = null;
                                                break
                                            }
                                            if (g !== null) {
                                                g.return = k, I = g;
                                                break
                                            }
                                            I = k
                                        }
                                }
                            }
                            var S = l.alternate;
                            if (S !== null) {
                                var E = S.child;
                                if (E !== null) {
                                    S.child = null;
                                    do {
                                        var A = E.sibling;
                                        E.sibling = null, E = A
                                    } while (E !== null)
                                }
                            }
                            I = l
                        }
                    }
                    if (l.subtreeFlags & 2064 && o !== null) o.return = l, I = o;
                    else e: for (; I !== null;) {
                        if (l = I, l.flags & 2048) switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                                gr(9, l, l.return)
                        }
                        var p = l.sibling;
                        if (p !== null) {
                            p.return = l.return, I = p;
                            break e
                        }
                        I = l.return
                    }
                }
                var c = e.current;
                for (I = c; I !== null;) {
                    o = I;
                    var f = o.child;
                    if (o.subtreeFlags & 2064 && f !== null) f.return = o, I = f;
                    else e: for (o = c; I !== null;) {
                        if (s = I, s.flags & 2048) try {
                            switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    rl(9, s)
                            }
                        } catch (C) {
                            ae(s, s.return, C)
                        }
                        if (s === o) {
                            I = null;
                            break e
                        }
                        var v = s.sibling;
                        if (v !== null) {
                            v.return = s.return, I = v;
                            break e
                        }
                        I = s.return
                    }
                }
                if (V = i, qt(), ht && typeof ht.onPostCommitFiberRoot == "function") try {
                    ht.onPostCommitFiberRoot(Ji, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            W = n, be.transition = t
        }
    }
    return !1
}

function Xs(e, t, n) {
    t = Vn(n, t), t = Vc(e, t, 1), e = Qt(e, t, 1), t = Ie(), e !== null && (jr(e, 1, t), Fe(e, t))
}

function ae(e, t, n) {
    if (e.tag === 3) Xs(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Xs(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Wt === null || !Wt.has(r))) {
                    e = Vn(n, e), e = Hc(t, e, 1), t = Qt(t, e, 1), e = Ie(), t !== null && (jr(t, 1, e), Fe(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Jp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Ie(), e.pingedLanes |= e.suspendedLanes & n, Se === e && (_e & n) === n && (ve === 4 || ve === 3 && (_e & 130023424) === _e && 500 > fe() - Lu ? sn(e, 0) : Ru |= n), Fe(e, t)
}

function cf(e, t) {
    t === 0 && (e.mode & 1 ? (t = Xr, Xr <<= 1, !(Xr & 130023424) && (Xr = 4194304)) : t = 1);
    var n = Ie();
    e = xt(e, t), e !== null && (jr(e, t, n), Fe(e, n))
}

function Xp(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), cf(e, n)
}

function Zp(e, t) {
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
            throw Error(N(314))
    }
    r !== null && r.delete(t), cf(e, n)
}
var ff;
ff = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ae.current) Oe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Oe = !1, Fp(e, t, n);
            Oe = !!(e.flags & 131072)
        }
    else Oe = !1, ne && t.flags & 1048576 && hc(t, Di, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            vi(e, t), e = t.pendingProps;
            var i = Fn(t, Re.current);
            On(t, n), i = _u(null, t, r, e, i, n);
            var l = Cu();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Be(r) ? (l = !0, zi(t)) : l = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, vu(t), i.updater = nl, t.stateNode = i, i._reactInternals = t, No(t, r, e, n), t = Po(null, t, r, !0, l, n)) : (t.tag = 0, ne && l && fu(t), Le(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (vi(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = bp(r), e = it(r, e), i) {
                    case 0:
                        t = To(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Us(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Fs(null, t, r, e, n);
                        break e;
                    case 14:
                        t = js(null, t, r, it(r.type, e), n);
                        break e
                }
                throw Error(N(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : it(r, i), To(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : it(r, i), Us(e, t, r, i, n);
        case 3:
            e: {
                if (Yc(t), e === null) throw Error(N(387));r = t.pendingProps,
                l = t.memoizedState,
                i = l.element,
                kc(e, t),
                Bi(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element, l.isDehydrated)
                    if (l = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
                        i = Vn(Error(N(423)), t), t = $s(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = Vn(Error(N(424)), t), t = $s(e, t, r, n, i);
                    break e
                } else
                    for (Ue = Ht(t.stateNode.containerInfo.firstChild), $e = t, ne = !0, ot = null, n = vc(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (jn(), r === i) {
                        t = Tt(e, t, n);
                        break e
                    }
                    Le(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return Sc(t), e === null && Eo(t), r = t.type, i = t.pendingProps, l = e !== null ? e.memoizedProps : null, o = i.children, yo(r, i) ? o = null : l !== null && yo(r, l) && (t.flags |= 32), Kc(e, t), Le(e, t, o, n), t.child;
        case 6:
            return e === null && Eo(t), null;
        case 13:
            return Gc(e, t, n);
        case 4:
            return wu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Un(t, null, r, n) : Le(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : it(r, i), Fs(e, t, r, i, n);
        case 7:
            return Le(e, t, t.pendingProps, n), t.child;
        case 8:
            return Le(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Le(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, l = t.memoizedProps, o = i.value, X(Oi, r._currentValue), r._currentValue = o, l !== null)
                    if (at(l.value, o)) {
                        if (l.children === i.children && !Ae.current) {
                            t = Tt(e, t, n);
                            break e
                        }
                    } else
                        for (l = t.child, l !== null && (l.return = t); l !== null;) {
                            var s = l.dependencies;
                            if (s !== null) {
                                o = l.child;
                                for (var u = s.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (l.tag === 1) {
                                            u = _t(-1, n & -n), u.tag = 2;
                                            var a = l.updateQueue;
                                            if (a !== null) {
                                                a = a.shared;
                                                var m = a.pending;
                                                m === null ? u.next = u : (u.next = m.next, m.next = u), a.pending = u
                                            }
                                        }
                                        l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), _o(l.return, n, t), s.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (l.tag === 10) o = l.type === t.type ? null : l.child;
                            else if (l.tag === 18) {
                                if (o = l.return, o === null) throw Error(N(341));
                                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), _o(o, n, t), o = l.sibling
                            } else o = l.child;
                            if (o !== null) o.return = l;
                            else
                                for (o = l; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (l = o.sibling, l !== null) {
                                        l.return = o.return, o = l;
                                        break
                                    }
                                    o = o.return
                                }
                            l = o
                        }
                Le(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, On(t, n), i = et(i), r = r(i), t.flags |= 1, Le(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = it(r, t.pendingProps), i = it(r.type, i), js(e, t, r, i, n);
        case 15:
            return Qc(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : it(r, i), vi(e, t), t.tag = 1, Be(r) ? (e = !0, zi(t)) : e = !1, On(t, n), $c(t, r, i), No(t, r, i, n), Po(null, t, r, !0, e, n);
        case 19:
            return Jc(e, t, n);
        case 22:
            return Wc(e, t, n)
    }
    throw Error(N(156, t.tag))
};

function df(e, t) {
    return Fa(e, t)
}

function qp(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function qe(e, t, n, r) {
    return new qp(e, t, n, r)
}

function Du(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function bp(e) {
    if (typeof e == "function") return Du(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === bo) return 11;
        if (e === eu) return 14
    }
    return 2
}

function Yt(e, t) {
    var n = e.alternate;
    return n === null ? (n = qe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Si(e, t, n, r, i, l) {
    var o = 2;
    if (r = e, typeof e == "function") Du(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case kn:
            return an(n.children, i, l, t);
        case qo:
            o = 8, i |= 8;
            break;
        case Gl:
            return e = qe(12, n, t, i | 2), e.elementType = Gl, e.lanes = l, e;
        case Jl:
            return e = qe(13, n, t, i), e.elementType = Jl, e.lanes = l, e;
        case Xl:
            return e = qe(19, n, t, i), e.elementType = Xl, e.lanes = l, e;
        case Sa:
            return ll(n, i, l, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case wa:
                    o = 10;
                    break e;
                case ka:
                    o = 9;
                    break e;
                case bo:
                    o = 11;
                    break e;
                case eu:
                    o = 14;
                    break e;
                case Mt:
                    o = 16, r = null;
                    break e
            }
            throw Error(N(130, e == null ? e : typeof e, ""))
    }
    return t = qe(o, n, t, i), t.elementType = e, t.type = r, t.lanes = l, t
}

function an(e, t, n, r) {
    return e = qe(7, e, r, t), e.lanes = n, e
}

function ll(e, t, n, r) {
    return e = qe(22, e, r, t), e.elementType = Sa, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function jl(e, t, n) {
    return e = qe(6, e, null, t), e.lanes = n, e
}

function Ul(e, t, n) {
    return t = qe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function eh(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = kl(0), this.expirationTimes = kl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kl(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function Ou(e, t, n, r, i, l, o, s, u) {
    return e = new eh(e, t, n, s, u), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = qe(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, vu(l), e
}

function th(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: wn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function pf(e) {
    if (!e) return Jt;
    e = e._reactInternals;
    e: {
        if (gn(e) !== e || e.tag !== 1) throw Error(N(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Be(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(N(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Be(n)) return dc(e, n, t)
    }
    return t
}

function hf(e, t, n, r, i, l, o, s, u) {
    return e = Ou(n, r, !0, e, i, l, o, s, u), e.context = pf(null), n = e.current, r = Ie(), i = Kt(n), l = _t(r, i), l.callback = t ?? null, Qt(n, l, i), e.current.lanes = i, jr(e, i, r), Fe(e, r), e
}

function ol(e, t, n, r) {
    var i = t.current,
        l = Ie(),
        o = Kt(i);
    return n = pf(n), t.context === null ? t.context = n : t.pendingContext = n, t = _t(l, o), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qt(i, t, o), e !== null && (st(e, i, o, l), mi(e, i, o)), o
}

function Wi(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Zs(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Au(e, t) {
    Zs(e, t), (e = e.alternate) && Zs(e, t)
}

function nh() {
    return null
}
var mf = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Bu(e) {
    this._internalRoot = e
}
ul.prototype.render = Bu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(N(409));
    ol(e, t, null, null)
};
ul.prototype.unmount = Bu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        hn(function() {
            ol(null, e, null, null)
        }), t[Nt] = null
    }
};

function ul(e) {
    this._internalRoot = e
}
ul.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Wa();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Ot.length && t !== 0 && t < Ot[n].priority; n++);
        Ot.splice(n, 0, e), n === 0 && Ya(e)
    }
};

function Fu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function sl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function qs() {}

function rh(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var l = r;
            r = function() {
                var a = Wi(o);
                l.call(a)
            }
        }
        var o = hf(t, r, e, 0, null, !1, !1, "", qs);
        return e._reactRootContainer = o, e[Nt] = o.current, Pr(e.nodeType === 8 ? e.parentNode : e), hn(), o
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var a = Wi(u);
            s.call(a)
        }
    }
    var u = Ou(e, 0, !1, null, null, !1, !1, "", qs);
    return e._reactRootContainer = u, e[Nt] = u.current, Pr(e.nodeType === 8 ? e.parentNode : e), hn(function() {
        ol(t, u, n, r)
    }), u
}

function al(e, t, n, r, i) {
    var l = n._reactRootContainer;
    if (l) {
        var o = l;
        if (typeof i == "function") {
            var s = i;
            i = function() {
                var u = Wi(o);
                s.call(u)
            }
        }
        ol(t, o, e, i)
    } else o = rh(n, t, e, i, r);
    return Wi(o)
}
Ha = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = sr(t.pendingLanes);
                n !== 0 && (ru(t, n | 1), Fe(t, fe()), !(V & 6) && (Hn = fe() + 500, qt()))
            }
            break;
        case 13:
            hn(function() {
                var r = xt(e, 1);
                if (r !== null) {
                    var i = Ie();
                    st(r, e, 1, i)
                }
            }), Au(e, 1)
    }
};
iu = function(e) {
    if (e.tag === 13) {
        var t = xt(e, 134217728);
        if (t !== null) {
            var n = Ie();
            st(t, e, 134217728, n)
        }
        Au(e, 134217728)
    }
};
Qa = function(e) {
    if (e.tag === 13) {
        var t = Kt(e),
            n = xt(e, t);
        if (n !== null) {
            var r = Ie();
            st(n, e, t, r)
        }
        Au(e, t)
    }
};
Wa = function() {
    return W
};
Ka = function(e, t) {
    var n = W;
    try {
        return W = e, t()
    } finally {
        W = n
    }
};
oo = function(e, t, n) {
    switch (t) {
        case "input":
            if (bl(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = bi(r);
                        if (!i) throw Error(N(90));
                        _a(r), bl(r, i)
                    }
                }
            }
            break;
        case "textarea":
            Na(e, n);
            break;
        case "select":
            t = n.value, t != null && In(e, !!n.multiple, t, !1)
    }
};
za = Iu;
Ma = hn;
var ih = {
        usingClientEntryPoint: !1,
        Events: [$r, Cn, bi, La, Ia, Iu]
    },
    lr = {
        findFiberByHostInstance: ln,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    lh = {
        bundleType: lr.bundleType,
        version: lr.version,
        rendererPackageName: lr.rendererPackageName,
        rendererConfig: lr.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Pt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Aa(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: lr.findFiberByHostInstance || nh,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ui = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ui.isDisabled && ui.supportsFiber) try {
        Ji = ui.inject(lh), ht = ui
    } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ih;
He.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Fu(t)) throw Error(N(200));
    return th(e, t, null, n)
};
He.createRoot = function(e, t) {
    if (!Fu(e)) throw Error(N(299));
    var n = !1,
        r = "",
        i = mf;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Ou(e, 1, !1, null, null, n, !1, r, i), e[Nt] = t.current, Pr(e.nodeType === 8 ? e.parentNode : e), new Bu(t)
};
He.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e)));
    return e = Aa(t), e = e === null ? null : e.stateNode, e
};
He.flushSync = function(e) {
    return hn(e)
};
He.hydrate = function(e, t, n) {
    if (!sl(t)) throw Error(N(200));
    return al(null, e, t, !0, n)
};
He.hydrateRoot = function(e, t, n) {
    if (!Fu(e)) throw Error(N(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        l = "",
        o = mf;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = hf(t, null, e, 1, n ?? null, i, !1, l, o), e[Nt] = t.current, Pr(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new ul(t)
};
He.render = function(e, t, n) {
    if (!sl(t)) throw Error(N(200));
    return al(null, e, t, !1, n)
};
He.unmountComponentAtNode = function(e) {
    if (!sl(e)) throw Error(N(40));
    return e._reactRootContainer ? (hn(function() {
        al(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Nt] = null
        })
    }), !0) : !1
};
He.unstable_batchedUpdates = Iu;
He.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!sl(n)) throw Error(N(200));
    if (e == null || e._reactInternals === void 0) throw Error(N(38));
    return al(e, t, n, !1, r)
};
He.version = "18.3.1-next-f1338f8080-20240426";

function gf() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gf)
    } catch (e) {
        console.error(e)
    }
}
gf(), ma.exports = He;
var oh = ma.exports,
    bs = oh;
Kl.createRoot = bs.createRoot, Kl.hydrateRoot = bs.hydrateRoot;
var yf = {
    exports: {}
};
/* @license
Papa Parse
v5.4.1
https://github.com/mholt/PapaParse
License: MIT
*/
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    })(Df, function n() {
        var r = typeof self < "u" ? self : typeof window < "u" ? window : r !== void 0 ? r : {},
            i = !r.document && !!r.postMessage,
            l = r.IS_PAPA_WORKER || !1,
            o = {},
            s = 0,
            u = {
                parse: function(d, h) {
                    var w = (h = h || {}).dynamicTyping || !1;
                    if (_(w) && (h.dynamicTypingFunction = w, w = {}), h.dynamicTyping = w, h.transform = !!_(h.transform) && h.transform, h.worker && u.WORKERS_SUPPORTED) {
                        var R = function() {
                            if (!u.WORKERS_SUPPORTED) return !1;
                            var M = (me = r.URL || r.webkitURL || null, Y = n.toString(), u.BLOB_URL || (u.BLOB_URL = me.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", Y, ")();"], {
                                    type: "text/javascript"
                                })))),
                                U = new r.Worker(M),
                                me, Y;
                            return U.onmessage = c, U.id = s++, o[U.id] = U
                        }();
                        return R.userStep = h.step, R.userChunk = h.chunk, R.userComplete = h.complete, R.userError = h.error, h.step = _(h.step), h.chunk = _(h.chunk), h.complete = _(h.complete), h.error = _(h.error), delete h.worker, void R.postMessage({
                            input: d,
                            config: h,
                            workerId: R.id
                        })
                    }
                    var z = null;
                    return u.NODE_STREAM_INPUT, typeof d == "string" ? (d = function(M) {
                        return M.charCodeAt(0) === 65279 ? M.slice(1) : M
                    }(d), z = h.download ? new y(h) : new k(h)) : d.readable === !0 && _(d.read) && _(d.on) ? z = new S(h) : (r.File && d instanceof File || d instanceof Object) && (z = new g(h)), z.stream(d)
                },
                unparse: function(d, h) {
                    var w = !1,
                        R = !0,
                        z = ",",
                        M = `\r
`,
                        U = '"',
                        me = U + U,
                        Y = !1,
                        D = null,
                        P = !1;
                    (function() {
                        if (typeof h == "object") {
                            if (typeof h.delimiter != "string" || u.BAD_DELIMITERS.filter(function(L) {
                                    return h.delimiter.indexOf(L) !== -1
                                }).length || (z = h.delimiter), (typeof h.quotes == "boolean" || typeof h.quotes == "function" || Array.isArray(h.quotes)) && (w = h.quotes), typeof h.skipEmptyLines != "boolean" && typeof h.skipEmptyLines != "string" || (Y = h.skipEmptyLines), typeof h.newline == "string" && (M = h.newline), typeof h.quoteChar == "string" && (U = h.quoteChar), typeof h.header == "boolean" && (R = h.header), Array.isArray(h.columns)) {
                                if (h.columns.length === 0) throw new Error("Option columns is empty");
                                D = h.columns
                            }
                            h.escapeChar !== void 0 && (me = h.escapeChar + U), (typeof h.escapeFormulae == "boolean" || h.escapeFormulae instanceof RegExp) && (P = h.escapeFormulae instanceof RegExp ? h.escapeFormulae : /^[=+\-@\t\r].*$/)
                        }
                    })();
                    var T = new RegExp(A(U), "g");
                    if (typeof d == "string" && (d = JSON.parse(d)), Array.isArray(d)) {
                        if (!d.length || Array.isArray(d[0])) return B(null, d, Y);
                        if (typeof d[0] == "object") return B(D || Object.keys(d[0]), d, Y)
                    } else if (typeof d == "object") return typeof d.data == "string" && (d.data = JSON.parse(d.data)), Array.isArray(d.data) && (d.fields || (d.fields = d.meta && d.meta.fields || D), d.fields || (d.fields = Array.isArray(d.data[0]) ? d.fields : typeof d.data[0] == "object" ? Object.keys(d.data[0]) : []), Array.isArray(d.data[0]) || typeof d.data[0] == "object" || (d.data = [d.data])), B(d.fields || [], d.data || [], Y);
                    throw new Error("Unable to serialize unrecognized input");

                    function B(L, H, te) {
                        var G = "";
                        typeof L == "string" && (L = JSON.parse(L)), typeof H == "string" && (H = JSON.parse(H));
                        var Z = Array.isArray(L) && 0 < L.length,
                            re = !Array.isArray(H[0]);
                        if (Z && R) {
                            for (var we = 0; we < L.length; we++) 0 < we && (G += z), G += j(L[we], we);
                            0 < H.length && (G += M)
                        }
                        for (var F = 0; F < H.length; F++) {
                            var Q = Z ? L.length : H[F].length,
                                ie = !1,
                                ge = Z ? Object.keys(H[F]).length === 0 : H[F].length === 0;
                            if (te && !Z && (ie = te === "greedy" ? H[F].join("").trim() === "" : H[F].length === 1 && H[F][0].length === 0), te === "greedy" && Z) {
                                for (var J = [], Ne = 0; Ne < Q; Ne++) {
                                    var ce = re ? L[Ne] : Ne;
                                    J.push(H[F][ce])
                                }
                                ie = J.join("").trim() === ""
                            }
                            if (!ie) {
                                for (var q = 0; q < Q; q++) {
                                    0 < q && !ge && (G += z);
                                    var nt = Z && re ? L[q] : q;
                                    G += j(H[F][nt], q)
                                }
                                F < H.length - 1 && (!te || 0 < Q && !ge) && (G += M)
                            }
                        }
                        return G
                    }

                    function j(L, H) {
                        if (L == null) return "";
                        if (L.constructor === Date) return JSON.stringify(L).slice(1, 25);
                        var te = !1;
                        P && typeof L == "string" && P.test(L) && (L = "'" + L, te = !0);
                        var G = L.toString().replace(T, me);
                        return (te = te || w === !0 || typeof w == "function" && w(L, H) || Array.isArray(w) && w[H] || function(Z, re) {
                            for (var we = 0; we < re.length; we++)
                                if (-1 < Z.indexOf(re[we])) return !0;
                            return !1
                        }(G, u.BAD_DELIMITERS) || -1 < G.indexOf(z) || G.charAt(0) === " " || G.charAt(G.length - 1) === " ") ? U + G + U : G
                    }
                }
            };
        if (u.RECORD_SEP = "", u.UNIT_SEP = "", u.BYTE_ORDER_MARK = "\uFEFF", u.BAD_DELIMITERS = ["\r", `
`, '"', u.BYTE_ORDER_MARK], u.WORKERS_SUPPORTED = !i && !!r.Worker, u.NODE_STREAM_INPUT = 1, u.LocalChunkSize = 10485760, u.RemoteChunkSize = 5242880, u.DefaultDelimiter = ",", u.Parser = p, u.ParserHandle = E, u.NetworkStreamer = y, u.FileStreamer = g, u.StringStreamer = k, u.ReadableStreamStreamer = S, r.jQuery) {
            var a = r.jQuery;
            a.fn.parse = function(d) {
                var h = d.config || {},
                    w = [];
                return this.each(function(M) {
                    if (!(a(this).prop("tagName").toUpperCase() === "INPUT" && a(this).attr("type").toLowerCase() === "file" && r.FileReader) || !this.files || this.files.length === 0) return !0;
                    for (var U = 0; U < this.files.length; U++) w.push({
                        file: this.files[U],
                        inputElem: this,
                        instanceConfig: a.extend({}, h)
                    })
                }), R(), this;

                function R() {
                    if (w.length !== 0) {
                        var M, U, me, Y, D = w[0];
                        if (_(d.before)) {
                            var P = d.before(D.file, D.inputElem);
                            if (typeof P == "object") {
                                if (P.action === "abort") return M = "AbortError", U = D.file, me = D.inputElem, Y = P.reason, void(_(d.error) && d.error({
                                    name: M
                                }, U, me, Y));
                                if (P.action === "skip") return void z();
                                typeof P.config == "object" && (D.instanceConfig = a.extend(D.instanceConfig, P.config))
                            } else if (P === "skip") return void z()
                        }
                        var T = D.instanceConfig.complete;
                        D.instanceConfig.complete = function(B) {
                            _(T) && T(B, D.file, D.inputElem), z()
                        }, u.parse(D.file, D.instanceConfig)
                    } else _(d.complete) && d.complete()
                }

                function z() {
                    w.splice(0, 1), R()
                }
            }
        }

        function m(d) {
            this._handle = null, this._finished = !1, this._completed = !1, this._halted = !1, this._input = null, this._baseIndex = 0, this._partialLine = "", this._rowCount = 0, this._start = 0, this._nextChunk = null, this.isFirstChunk = !0, this._completeResults = {
                data: [],
                errors: [],
                meta: {}
            }, (function(h) {
                var w = C(h);
                w.chunkSize = parseInt(w.chunkSize), h.step || h.chunk || (w.chunkSize = null), this._handle = new E(w), (this._handle.streamer = this)._config = w
            }).call(this, d), this.parseChunk = function(h, w) {
                if (this.isFirstChunk && _(this._config.beforeFirstChunk)) {
                    var R = this._config.beforeFirstChunk(h);
                    R !== void 0 && (h = R)
                }
                this.isFirstChunk = !1, this._halted = !1;
                var z = this._partialLine + h;
                this._partialLine = "";
                var M = this._handle.parse(z, this._baseIndex, !this._finished);
                if (!this._handle.paused() && !this._handle.aborted()) {
                    var U = M.meta.cursor;
                    this._finished || (this._partialLine = z.substring(U - this._baseIndex), this._baseIndex = U), M && M.data && (this._rowCount += M.data.length);
                    var me = this._finished || this._config.preview && this._rowCount >= this._config.preview;
                    if (l) r.postMessage({
                        results: M,
                        workerId: u.WORKER_ID,
                        finished: me
                    });
                    else if (_(this._config.chunk) && !w) {
                        if (this._config.chunk(M, this._handle), this._handle.paused() || this._handle.aborted()) return void(this._halted = !0);
                        M = void 0, this._completeResults = void 0
                    }
                    return this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(M.data), this._completeResults.errors = this._completeResults.errors.concat(M.errors), this._completeResults.meta = M.meta), this._completed || !me || !_(this._config.complete) || M && M.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0), me || M && M.meta.paused || this._nextChunk(), M
                }
                this._halted = !0
            }, this._sendError = function(h) {
                _(this._config.error) ? this._config.error(h) : l && this._config.error && r.postMessage({
                    workerId: u.WORKER_ID,
                    error: h,
                    finished: !1
                })
            }
        }

        function y(d) {
            var h;
            (d = d || {}).chunkSize || (d.chunkSize = u.RemoteChunkSize), m.call(this, d), this._nextChunk = i ? function() {
                this._readChunk(), this._chunkLoaded()
            } : function() {
                this._readChunk()
            }, this.stream = function(w) {
                this._input = w, this._nextChunk()
            }, this._readChunk = function() {
                if (this._finished) this._chunkLoaded();
                else {
                    if (h = new XMLHttpRequest, this._config.withCredentials && (h.withCredentials = this._config.withCredentials), i || (h.onload = x(this._chunkLoaded, this), h.onerror = x(this._chunkError, this)), h.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
                        var w = this._config.downloadRequestHeaders;
                        for (var R in w) h.setRequestHeader(R, w[R])
                    }
                    if (this._config.chunkSize) {
                        var z = this._start + this._config.chunkSize - 1;
                        h.setRequestHeader("Range", "bytes=" + this._start + "-" + z)
                    }
                    try {
                        h.send(this._config.downloadRequestBody)
                    } catch (M) {
                        this._chunkError(M.message)
                    }
                    i && h.status === 0 && this._chunkError()
                }
            }, this._chunkLoaded = function() {
                h.readyState === 4 && (h.status < 200 || 400 <= h.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : h.responseText.length, this._finished = !this._config.chunkSize || this._start >= function(w) {
                    var R = w.getResponseHeader("Content-Range");
                    return R === null ? -1 : parseInt(R.substring(R.lastIndexOf("/") + 1))
                }(h), this.parseChunk(h.responseText)))
            }, this._chunkError = function(w) {
                var R = h.statusText || w;
                this._sendError(new Error(R))
            }
        }

        function g(d) {
            var h, w;
            (d = d || {}).chunkSize || (d.chunkSize = u.LocalChunkSize), m.call(this, d);
            var R = typeof FileReader < "u";
            this.stream = function(z) {
                this._input = z, w = z.slice || z.webkitSlice || z.mozSlice, R ? ((h = new FileReader).onload = x(this._chunkLoaded, this), h.onerror = x(this._chunkError, this)) : h = new FileReaderSync, this._nextChunk()
            }, this._nextChunk = function() {
                this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk()
            }, this._readChunk = function() {
                var z = this._input;
                if (this._config.chunkSize) {
                    var M = Math.min(this._start + this._config.chunkSize, this._input.size);
                    z = w.call(z, this._start, M)
                }
                var U = h.readAsText(z, this._config.encoding);
                R || this._chunkLoaded({
                    target: {
                        result: U
                    }
                })
            }, this._chunkLoaded = function(z) {
                this._start += this._config.chunkSize, this._finished = !this._config.chunkSize || this._start >= this._input.size, this.parseChunk(z.target.result)
            }, this._chunkError = function() {
                this._sendError(h.error)
            }
        }

        function k(d) {
            var h;
            m.call(this, d = d || {}), this.stream = function(w) {
                return h = w, this._nextChunk()
            }, this._nextChunk = function() {
                if (!this._finished) {
                    var w, R = this._config.chunkSize;
                    return R ? (w = h.substring(0, R), h = h.substring(R)) : (w = h, h = ""), this._finished = !h, this.parseChunk(w)
                }
            }
        }

        function S(d) {
            m.call(this, d = d || {});
            var h = [],
                w = !0,
                R = !1;
            this.pause = function() {
                m.prototype.pause.apply(this, arguments), this._input.pause()
            }, this.resume = function() {
                m.prototype.resume.apply(this, arguments), this._input.resume()
            }, this.stream = function(z) {
                this._input = z, this._input.on("data", this._streamData), this._input.on("end", this._streamEnd), this._input.on("error", this._streamError)
            }, this._checkIsFinished = function() {
                R && h.length === 1 && (this._finished = !0)
            }, this._nextChunk = function() {
                this._checkIsFinished(), h.length ? this.parseChunk(h.shift()) : w = !0
            }, this._streamData = x(function(z) {
                try {
                    h.push(typeof z == "string" ? z : z.toString(this._config.encoding)), w && (w = !1, this._checkIsFinished(), this.parseChunk(h.shift()))
                } catch (M) {
                    this._streamError(M)
                }
            }, this), this._streamError = x(function(z) {
                this._streamCleanUp(), this._sendError(z)
            }, this), this._streamEnd = x(function() {
                this._streamCleanUp(), R = !0, this._streamData("")
            }, this), this._streamCleanUp = x(function() {
                this._input.removeListener("data", this._streamData), this._input.removeListener("end", this._streamEnd), this._input.removeListener("error", this._streamError)
            }, this)
        }

        function E(d) {
            var h, w, R, z = Math.pow(2, 53),
                M = -z,
                U = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
                me = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
                Y = this,
                D = 0,
                P = 0,
                T = !1,
                B = !1,
                j = [],
                L = {
                    data: [],
                    errors: [],
                    meta: {}
                };
            if (_(d.step)) {
                var H = d.step;
                d.step = function(F) {
                    if (L = F, Z()) G();
                    else {
                        if (G(), L.data.length === 0) return;
                        D += F.data.length, d.preview && D > d.preview ? w.abort() : (L.data = L.data[0], H(L, Y))
                    }
                }
            }

            function te(F) {
                return d.skipEmptyLines === "greedy" ? F.join("").trim() === "" : F.length === 1 && F[0].length === 0
            }

            function G() {
                return L && R && (we("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + u.DefaultDelimiter + "'"), R = !1), d.skipEmptyLines && (L.data = L.data.filter(function(F) {
                        return !te(F)
                    })), Z() && function() {
                        if (!L) return;

                        function F(ie, ge) {
                            _(d.transformHeader) && (ie = d.transformHeader(ie, ge)), j.push(ie)
                        }
                        if (Array.isArray(L.data[0])) {
                            for (var Q = 0; Z() && Q < L.data.length; Q++) L.data[Q].forEach(F);
                            L.data.splice(0, 1)
                        } else L.data.forEach(F)
                    }(),
                    function() {
                        if (!L || !d.header && !d.dynamicTyping && !d.transform) return L;

                        function F(ie, ge) {
                            var J, Ne = d.header ? {} : [];
                            for (J = 0; J < ie.length; J++) {
                                var ce = J,
                                    q = ie[J];
                                d.header && (ce = J >= j.length ? "__parsed_extra" : j[J]), d.transform && (q = d.transform(q, ce)), q = re(ce, q), ce === "__parsed_extra" ? (Ne[ce] = Ne[ce] || [], Ne[ce].push(q)) : Ne[ce] = q
                            }
                            return d.header && (J > j.length ? we("FieldMismatch", "TooManyFields", "Too many fields: expected " + j.length + " fields but parsed " + J, P + ge) : J < j.length && we("FieldMismatch", "TooFewFields", "Too few fields: expected " + j.length + " fields but parsed " + J, P + ge)), Ne
                        }
                        var Q = 1;
                        return !L.data.length || Array.isArray(L.data[0]) ? (L.data = L.data.map(F), Q = L.data.length) : L.data = F(L.data, 0), d.header && L.meta && (L.meta.fields = j), P += Q, L
                    }()
            }

            function Z() {
                return d.header && j.length === 0
            }

            function re(F, Q) {
                return ie = F, d.dynamicTypingFunction && d.dynamicTyping[ie] === void 0 && (d.dynamicTyping[ie] = d.dynamicTypingFunction(ie)), (d.dynamicTyping[ie] || d.dynamicTyping) === !0 ? Q === "true" || Q === "TRUE" || Q !== "false" && Q !== "FALSE" && (function(ge) {
                    if (U.test(ge)) {
                        var J = parseFloat(ge);
                        if (M < J && J < z) return !0
                    }
                    return !1
                }(Q) ? parseFloat(Q) : me.test(Q) ? new Date(Q) : Q === "" ? null : Q) : Q;
                var ie
            }

            function we(F, Q, ie, ge) {
                var J = {
                    type: F,
                    code: Q,
                    message: ie
                };
                ge !== void 0 && (J.row = ge), L.errors.push(J)
            }
            this.parse = function(F, Q, ie) {
                var ge = d.quoteChar || '"';
                if (d.newline || (d.newline = function(ce, q) {
                        ce = ce.substring(0, 1048576);
                        var nt = new RegExp(A(q) + "([^]*?)" + A(q), "gm"),
                            Ke = (ce = ce.replace(nt, "")).split("\r"),
                            ct = ce.split(`
`),
                            yt = 1 < ct.length && ct[0].length < Ke[0].length;
                        if (Ke.length === 1 || yt) return `
`;
                        for (var Ye = 0, le = 0; le < Ke.length; le++) Ke[le][0] === `
` && Ye++;
                        return Ye >= Ke.length / 2 ? `\r
` : "\r"
                    }(F, ge)), R = !1, d.delimiter) _(d.delimiter) && (d.delimiter = d.delimiter(F), L.meta.delimiter = d.delimiter);
                else {
                    var J = function(ce, q, nt, Ke, ct) {
                        var yt, Ye, le, de;
                        ct = ct || [",", "	", "|", ";", u.RECORD_SEP, u.UNIT_SEP];
                        for (var en = 0; en < ct.length; en++) {
                            var K = ct[en],
                                yn = 0,
                                vt = 0,
                                tn = 0;
                            le = void 0;
                            for (var Rt = new p({
                                    comments: Ke,
                                    delimiter: K,
                                    newline: q,
                                    preview: 10
                                }).parse(ce), Lt = 0; Lt < Rt.data.length; Lt++)
                                if (nt && te(Rt.data[Lt])) tn++;
                                else {
                                    var It = Rt.data[Lt].length;
                                    vt += It, le !== void 0 ? 0 < It && (yn += Math.abs(It - le), le = It) : le = It
                                } 0 < Rt.data.length && (vt /= Rt.data.length - tn), (Ye === void 0 || yn <= Ye) && (de === void 0 || de < vt) && 1.99 < vt && (Ye = yn, yt = K, de = vt)
                        }
                        return {
                            successful: !!(d.delimiter = yt),
                            bestDelimiter: yt
                        }
                    }(F, d.newline, d.skipEmptyLines, d.comments, d.delimitersToGuess);
                    J.successful ? d.delimiter = J.bestDelimiter : (R = !0, d.delimiter = u.DefaultDelimiter), L.meta.delimiter = d.delimiter
                }
                var Ne = C(d);
                return d.preview && d.header && Ne.preview++, h = F, w = new p(Ne), L = w.parse(h, Q, ie), G(), T ? {
                    meta: {
                        paused: !0
                    }
                } : L || {
                    meta: {
                        paused: !1
                    }
                }
            }, this.paused = function() {
                return T
            }, this.pause = function() {
                T = !0, w.abort(), h = _(d.chunk) ? "" : h.substring(w.getCharIndex())
            }, this.resume = function() {
                Y.streamer._halted ? (T = !1, Y.streamer.parseChunk(h, !0)) : setTimeout(Y.resume, 3)
            }, this.aborted = function() {
                return B
            }, this.abort = function() {
                B = !0, w.abort(), L.meta.aborted = !0, _(d.complete) && d.complete(L), h = ""
            }
        }

        function A(d) {
            return d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }

        function p(d) {
            var h, w = (d = d || {}).delimiter,
                R = d.newline,
                z = d.comments,
                M = d.step,
                U = d.preview,
                me = d.fastMode,
                Y = h = d.quoteChar === void 0 || d.quoteChar === null ? '"' : d.quoteChar;
            if (d.escapeChar !== void 0 && (Y = d.escapeChar), (typeof w != "string" || -1 < u.BAD_DELIMITERS.indexOf(w)) && (w = ","), z === w) throw new Error("Comment character same as delimiter");
            z === !0 ? z = "#" : (typeof z != "string" || -1 < u.BAD_DELIMITERS.indexOf(z)) && (z = !1), R !== `
` && R !== "\r" && R !== `\r
` && (R = `
`);
            var D = 0,
                P = !1;
            this.parse = function(T, B, j) {
                if (typeof T != "string") throw new Error("Input must be a string");
                var L = T.length,
                    H = w.length,
                    te = R.length,
                    G = z.length,
                    Z = _(M),
                    re = [],
                    we = [],
                    F = [],
                    Q = D = 0;
                if (!T) return Ge();
                if (d.header && !B) {
                    var ie = T.split(R)[0].split(w),
                        ge = [],
                        J = {},
                        Ne = !1;
                    for (var ce in ie) {
                        var q = ie[ce];
                        _(d.transformHeader) && (q = d.transformHeader(q, ce));
                        var nt = q,
                            Ke = J[q] || 0;
                        for (0 < Ke && (Ne = !0, nt = q + "_" + Ke), J[q] = Ke + 1; ge.includes(nt);) nt = nt + "_" + Ke;
                        ge.push(nt)
                    }
                    if (Ne) {
                        var ct = T.split(R);
                        ct[0] = ge.join(w), T = ct.join(R)
                    }
                }
                if (me || me !== !1 && T.indexOf(h) === -1) {
                    for (var yt = T.split(R), Ye = 0; Ye < yt.length; Ye++) {
                        if (F = yt[Ye], D += F.length, Ye !== yt.length - 1) D += R.length;
                        else if (j) return Ge();
                        if (!z || F.substring(0, G) !== z) {
                            if (Z) {
                                if (re = [], tn(F.split(w)), Qr(), P) return Ge()
                            } else tn(F.split(w));
                            if (U && U <= Ye) return re = re.slice(0, U), Ge(!0)
                        }
                    }
                    return Ge()
                }
                for (var le = T.indexOf(w, D), de = T.indexOf(R, D), en = new RegExp(A(Y) + A(h), "g"), K = T.indexOf(h, D);;)
                    if (T[D] !== h)
                        if (z && F.length === 0 && T.substring(D, D + G) === z) {
                            if (de === -1) return Ge();
                            D = de + te, de = T.indexOf(R, D), le = T.indexOf(w, D)
                        } else if (le !== -1 && (le < de || de === -1)) F.push(T.substring(D, le)), D = le + H, le = T.indexOf(w, D);
                else {
                    if (de === -1) break;
                    if (F.push(T.substring(D, de)), It(de + te), Z && (Qr(), P)) return Ge();
                    if (U && re.length >= U) return Ge(!0)
                } else
                    for (K = D, D++;;) {
                        if ((K = T.indexOf(h, K + 1)) === -1) return j || we.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: re.length,
                            index: D
                        }), Lt();
                        if (K === L - 1) return Lt(T.substring(D, K).replace(en, h));
                        if (h !== Y || T[K + 1] !== Y) {
                            if (h === Y || K === 0 || T[K - 1] !== Y) {
                                le !== -1 && le < K + 1 && (le = T.indexOf(w, K + 1)), de !== -1 && de < K + 1 && (de = T.indexOf(R, K + 1));
                                var yn = Rt(de === -1 ? le : Math.min(le, de));
                                if (T.substr(K + 1 + yn, H) === w) {
                                    F.push(T.substring(D, K).replace(en, h)), T[D = K + 1 + yn + H] !== h && (K = T.indexOf(h, D)), le = T.indexOf(w, D), de = T.indexOf(R, D);
                                    break
                                }
                                var vt = Rt(de);
                                if (T.substring(K + 1 + vt, K + 1 + vt + te) === R) {
                                    if (F.push(T.substring(D, K).replace(en, h)), It(K + 1 + vt + te), le = T.indexOf(w, D), K = T.indexOf(h, D), Z && (Qr(), P)) return Ge();
                                    if (U && re.length >= U) return Ge(!0);
                                    break
                                }
                                we.push({
                                    type: "Quotes",
                                    code: "InvalidQuotes",
                                    message: "Trailing quote on quoted field is malformed",
                                    row: re.length,
                                    index: D
                                }), K++
                            }
                        } else K++
                    }
                return Lt();

                function tn(Je) {
                    re.push(Je), Q = D
                }

                function Rt(Je) {
                    var Qu = 0;
                    if (Je !== -1) {
                        var hl = T.substring(K + 1, Je);
                        hl && hl.trim() === "" && (Qu = hl.length)
                    }
                    return Qu
                }

                function Lt(Je) {
                    return j || (Je === void 0 && (Je = T.substring(D)), F.push(Je), D = L, tn(F), Z && Qr()), Ge()
                }

                function It(Je) {
                    D = Je, tn(F), F = [], de = T.indexOf(R, D)
                }

                function Ge(Je) {
                    return {
                        data: re,
                        errors: we,
                        meta: {
                            delimiter: w,
                            linebreak: R,
                            aborted: P,
                            truncated: !!Je,
                            cursor: Q + (B || 0)
                        }
                    }
                }

                function Qr() {
                    M(Ge()), re = [], we = []
                }
            }, this.abort = function() {
                P = !0
            }, this.getCharIndex = function() {
                return D
            }
        }

        function c(d) {
            var h = d.data,
                w = o[h.workerId],
                R = !1;
            if (h.error) w.userError(h.error, h.file);
            else if (h.results && h.results.data) {
                var z = {
                    abort: function() {
                        R = !0, f(h.workerId, {
                            data: [],
                            errors: [],
                            meta: {
                                aborted: !0
                            }
                        })
                    },
                    pause: v,
                    resume: v
                };
                if (_(w.userStep)) {
                    for (var M = 0; M < h.results.data.length && (w.userStep({
                            data: h.results.data[M],
                            errors: h.results.errors,
                            meta: h.results.meta
                        }, z), !R); M++);
                    delete h.results
                } else _(w.userChunk) && (w.userChunk(h.results, z, h.file), delete h.results)
            }
            h.finished && !R && f(h.workerId, h.results)
        }

        function f(d, h) {
            var w = o[d];
            _(w.userComplete) && w.userComplete(h), w.terminate(), delete o[d]
        }

        function v() {
            throw new Error("Not implemented.")
        }

        function C(d) {
            if (typeof d != "object" || d === null) return d;
            var h = Array.isArray(d) ? [] : {};
            for (var w in d) h[w] = C(d[w]);
            return h
        }

        function x(d, h) {
            return function() {
                d.apply(h, arguments)
            }
        }

        function _(d) {
            return typeof d == "function"
        }
        return l && (r.onmessage = function(d) {
            var h = d.data;
            if (u.WORKER_ID === void 0 && h && (u.WORKER_ID = h.workerId), typeof h.input == "string") r.postMessage({
                workerId: u.WORKER_ID,
                results: u.parse(h.input, h.config),
                finished: !0
            });
            else if (r.File && h.input instanceof File || h.input instanceof Object) {
                var w = u.parse(h.input, h.config);
                w && r.postMessage({
                    workerId: u.WORKER_ID,
                    results: w,
                    finished: !0
                })
            }
        }), (y.prototype = Object.create(m.prototype)).constructor = y, (g.prototype = Object.create(m.prototype)).constructor = g, (k.prototype = Object.create(k.prototype)).constructor = k, (S.prototype = Object.create(m.prototype)).constructor = S, u
    })
})(yf);
var uh = yf.exports;
const sh = ra(uh),
    ah = `1	dry flyer rule
2	come rebel wrist
3	lion duct cone`,
    ch = ({
        onUpdate: e,
        delimiter: t = "	",
        onError: n = () => {}
    }) => {
        const [r, i] = pe.useState(ah), l = pe.useRef(), o = async u => {
            sh.parse(u, {
                delimiter: t,
                skipEmptyLines: !0,
                comments: "#",
                error: a => n(a.message),
                complete: a => {
                    n(null), e(a.data)
                }
            })
        };
        pe.useEffect(() => {
            o(r)
        }, [r, t]), pe.useEffect(() => {
            l.current.focus()
        }, []);
        const s = u => u.target.select();
        return O.jsx("textarea", {
            ref: l,
            className: "textarea is-family-monospace",
            onChange: u => {
                i(u.target.value)
            },
            onFocus: s,
            value: r
        })
    };
var Zn = {},
    fh = function() {
        return typeof Promise == "function" && Promise.prototype && Promise.prototype.then
    },
    vf = {},
    We = {};
let ju;
const dh = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
We.getSymbolSize = function(t) {
    if (!t) throw new Error('"version" cannot be null or undefined');
    if (t < 1 || t > 40) throw new Error('"version" should be in range from 1 to 40');
    return t * 4 + 17
};
We.getSymbolTotalCodewords = function(t) {
    return dh[t]
};
We.getBCHDigit = function(e) {
    let t = 0;
    for (; e !== 0;) t++, e >>>= 1;
    return t
};
We.setToSJISFunction = function(t) {
    if (typeof t != "function") throw new Error('"toSJISFunc" is not a valid function.');
    ju = t
};
We.isKanjiModeEnabled = function() {
    return typeof ju < "u"
};
We.toSJIS = function(t) {
    return ju(t)
};
var cl = {};
(function(e) {
    e.L = {
        bit: 1
    }, e.M = {
        bit: 0
    }, e.Q = {
        bit: 3
    }, e.H = {
        bit: 2
    };

    function t(n) {
        if (typeof n != "string") throw new Error("Param is not a string");
        switch (n.toLowerCase()) {
            case "l":
            case "low":
                return e.L;
            case "m":
            case "medium":
                return e.M;
            case "q":
            case "quartile":
                return e.Q;
            case "h":
            case "high":
                return e.H;
            default:
                throw new Error("Unknown EC Level: " + n)
        }
    }
    e.isValid = function(r) {
        return r && typeof r.bit < "u" && r.bit >= 0 && r.bit < 4
    }, e.from = function(r, i) {
        if (e.isValid(r)) return r;
        try {
            return t(r)
        } catch {
            return i
        }
    }
})(cl);

function wf() {
    this.buffer = [], this.length = 0
}
wf.prototype = {
    get: function(e) {
        const t = Math.floor(e / 8);
        return (this.buffer[t] >>> 7 - e % 8 & 1) === 1
    },
    put: function(e, t) {
        for (let n = 0; n < t; n++) this.putBit((e >>> t - n - 1 & 1) === 1)
    },
    getLengthInBits: function() {
        return this.length
    },
    putBit: function(e) {
        const t = Math.floor(this.length / 8);
        this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
    }
};
var ph = wf;

function Hr(e) {
    if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e)
}
Hr.prototype.set = function(e, t, n, r) {
    const i = e * this.size + t;
    this.data[i] = n, r && (this.reservedBit[i] = !0)
};
Hr.prototype.get = function(e, t) {
    return this.data[e * this.size + t]
};
Hr.prototype.xor = function(e, t, n) {
    this.data[e * this.size + t] ^= n
};
Hr.prototype.isReserved = function(e, t) {
    return this.reservedBit[e * this.size + t]
};
var hh = Hr,
    kf = {};
(function(e) {
    const t = We.getSymbolSize;
    e.getRowColCoords = function(r) {
        if (r === 1) return [];
        const i = Math.floor(r / 7) + 2,
            l = t(r),
            o = l === 145 ? 26 : Math.ceil((l - 13) / (2 * i - 2)) * 2,
            s = [l - 7];
        for (let u = 1; u < i - 1; u++) s[u] = s[u - 1] - o;
        return s.push(6), s.reverse()
    }, e.getPositions = function(r) {
        const i = [],
            l = e.getRowColCoords(r),
            o = l.length;
        for (let s = 0; s < o; s++)
            for (let u = 0; u < o; u++) s === 0 && u === 0 || s === 0 && u === o - 1 || s === o - 1 && u === 0 || i.push([l[s], l[u]]);
        return i
    }
})(kf);
var Sf = {};
const mh = We.getSymbolSize,
    ea = 7;
Sf.getPositions = function(t) {
    const n = mh(t);
    return [
        [0, 0],
        [n - ea, 0],
        [0, n - ea]
    ]
};
var Ef = {};
(function(e) {
    e.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    const t = {
        N1: 3,
        N2: 3,
        N3: 40,
        N4: 10
    };
    e.isValid = function(i) {
        return i != null && i !== "" && !isNaN(i) && i >= 0 && i <= 7
    }, e.from = function(i) {
        return e.isValid(i) ? parseInt(i, 10) : void 0
    }, e.getPenaltyN1 = function(i) {
        const l = i.size;
        let o = 0,
            s = 0,
            u = 0,
            a = null,
            m = null;
        for (let y = 0; y < l; y++) {
            s = u = 0, a = m = null;
            for (let g = 0; g < l; g++) {
                let k = i.get(y, g);
                k === a ? s++ : (s >= 5 && (o += t.N1 + (s - 5)), a = k, s = 1), k = i.get(g, y), k === m ? u++ : (u >= 5 && (o += t.N1 + (u - 5)), m = k, u = 1)
            }
            s >= 5 && (o += t.N1 + (s - 5)), u >= 5 && (o += t.N1 + (u - 5))
        }
        return o
    }, e.getPenaltyN2 = function(i) {
        const l = i.size;
        let o = 0;
        for (let s = 0; s < l - 1; s++)
            for (let u = 0; u < l - 1; u++) {
                const a = i.get(s, u) + i.get(s, u + 1) + i.get(s + 1, u) + i.get(s + 1, u + 1);
                (a === 4 || a === 0) && o++
            }
        return o * t.N2
    }, e.getPenaltyN3 = function(i) {
        const l = i.size;
        let o = 0,
            s = 0,
            u = 0;
        for (let a = 0; a < l; a++) {
            s = u = 0;
            for (let m = 0; m < l; m++) s = s << 1 & 2047 | i.get(a, m), m >= 10 && (s === 1488 || s === 93) && o++, u = u << 1 & 2047 | i.get(m, a), m >= 10 && (u === 1488 || u === 93) && o++
        }
        return o * t.N3
    }, e.getPenaltyN4 = function(i) {
        let l = 0;
        const o = i.data.length;
        for (let u = 0; u < o; u++) l += i.data[u];
        return Math.abs(Math.ceil(l * 100 / o / 5) - 10) * t.N4
    };

    function n(r, i, l) {
        switch (r) {
            case e.Patterns.PATTERN000:
                return (i + l) % 2 === 0;
            case e.Patterns.PATTERN001:
                return i % 2 === 0;
            case e.Patterns.PATTERN010:
                return l % 3 === 0;
            case e.Patterns.PATTERN011:
                return (i + l) % 3 === 0;
            case e.Patterns.PATTERN100:
                return (Math.floor(i / 2) + Math.floor(l / 3)) % 2 === 0;
            case e.Patterns.PATTERN101:
                return i * l % 2 + i * l % 3 === 0;
            case e.Patterns.PATTERN110:
                return (i * l % 2 + i * l % 3) % 2 === 0;
            case e.Patterns.PATTERN111:
                return (i * l % 3 + (i + l) % 2) % 2 === 0;
            default:
                throw new Error("bad maskPattern:" + r)
        }
    }
    e.applyMask = function(i, l) {
        const o = l.size;
        for (let s = 0; s < o; s++)
            for (let u = 0; u < o; u++) l.isReserved(u, s) || l.xor(u, s, n(i, u, s))
    }, e.getBestMask = function(i, l) {
        const o = Object.keys(e.Patterns).length;
        let s = 0,
            u = 1 / 0;
        for (let a = 0; a < o; a++) {
            l(a), e.applyMask(a, i);
            const m = e.getPenaltyN1(i) + e.getPenaltyN2(i) + e.getPenaltyN3(i) + e.getPenaltyN4(i);
            e.applyMask(a, i), m < u && (u = m, s = a)
        }
        return s
    }
})(Ef);
var fl = {};
const jt = cl,
    si = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
    ai = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
fl.getBlocksCount = function(t, n) {
    switch (n) {
        case jt.L:
            return si[(t - 1) * 4 + 0];
        case jt.M:
            return si[(t - 1) * 4 + 1];
        case jt.Q:
            return si[(t - 1) * 4 + 2];
        case jt.H:
            return si[(t - 1) * 4 + 3];
        default:
            return
    }
};
fl.getTotalCodewordsCount = function(t, n) {
    switch (n) {
        case jt.L:
            return ai[(t - 1) * 4 + 0];
        case jt.M:
            return ai[(t - 1) * 4 + 1];
        case jt.Q:
            return ai[(t - 1) * 4 + 2];
        case jt.H:
            return ai[(t - 1) * 4 + 3];
        default:
            return
    }
};
var _f = {},
    dl = {};
const wr = new Uint8Array(512),
    Ki = new Uint8Array(256);
(function() {
    let t = 1;
    for (let n = 0; n < 255; n++) wr[n] = t, Ki[t] = n, t <<= 1, t & 256 && (t ^= 285);
    for (let n = 255; n < 512; n++) wr[n] = wr[n - 255]
})();
dl.log = function(t) {
    if (t < 1) throw new Error("log(" + t + ")");
    return Ki[t]
};
dl.exp = function(t) {
    return wr[t]
};
dl.mul = function(t, n) {
    return t === 0 || n === 0 ? 0 : wr[Ki[t] + Ki[n]]
};
(function(e) {
    const t = dl;
    e.mul = function(r, i) {
        const l = new Uint8Array(r.length + i.length - 1);
        for (let o = 0; o < r.length; o++)
            for (let s = 0; s < i.length; s++) l[o + s] ^= t.mul(r[o], i[s]);
        return l
    }, e.mod = function(r, i) {
        let l = new Uint8Array(r);
        for (; l.length - i.length >= 0;) {
            const o = l[0];
            for (let u = 0; u < i.length; u++) l[u] ^= t.mul(i[u], o);
            let s = 0;
            for (; s < l.length && l[s] === 0;) s++;
            l = l.slice(s)
        }
        return l
    }, e.generateECPolynomial = function(r) {
        let i = new Uint8Array([1]);
        for (let l = 0; l < r; l++) i = e.mul(i, new Uint8Array([1, t.exp(l)]));
        return i
    }
})(_f);
const Cf = _f;

function Uu(e) {
    this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
}
Uu.prototype.initialize = function(t) {
    this.degree = t, this.genPoly = Cf.generateECPolynomial(this.degree)
};
Uu.prototype.encode = function(t) {
    if (!this.genPoly) throw new Error("Encoder not initialized");
    const n = new Uint8Array(t.length + this.degree);
    n.set(t);
    const r = Cf.mod(n, this.genPoly),
        i = this.degree - r.length;
    if (i > 0) {
        const l = new Uint8Array(this.degree);
        return l.set(r, i), l
    }
    return r
};
var gh = Uu,
    Nf = {},
    bt = {},
    $u = {};
$u.isValid = function(t) {
    return !isNaN(t) && t >= 1 && t <= 40
};
var gt = {};
const xf = "[0-9]+",
    yh = "[A-Z $%*+\\-./:]+";
let Br = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Br = Br.replace(/u/g, "\\u");
const vh = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Br + `)(?:.|[\r
]))+`;
gt.KANJI = new RegExp(Br, "g");
gt.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
gt.BYTE = new RegExp(vh, "g");
gt.NUMERIC = new RegExp(xf, "g");
gt.ALPHANUMERIC = new RegExp(yh, "g");
const wh = new RegExp("^" + Br + "$"),
    kh = new RegExp("^" + xf + "$"),
    Sh = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
gt.testKanji = function(t) {
    return wh.test(t)
};
gt.testNumeric = function(t) {
    return kh.test(t)
};
gt.testAlphanumeric = function(t) {
    return Sh.test(t)
};
(function(e) {
    const t = $u,
        n = gt;
    e.NUMERIC = {
        id: "Numeric",
        bit: 1,
        ccBits: [10, 12, 14]
    }, e.ALPHANUMERIC = {
        id: "Alphanumeric",
        bit: 2,
        ccBits: [9, 11, 13]
    }, e.BYTE = {
        id: "Byte",
        bit: 4,
        ccBits: [8, 16, 16]
    }, e.KANJI = {
        id: "Kanji",
        bit: 8,
        ccBits: [8, 10, 12]
    }, e.MIXED = {
        bit: -1
    }, e.getCharCountIndicator = function(l, o) {
        if (!l.ccBits) throw new Error("Invalid mode: " + l);
        if (!t.isValid(o)) throw new Error("Invalid version: " + o);
        return o >= 1 && o < 10 ? l.ccBits[0] : o < 27 ? l.ccBits[1] : l.ccBits[2]
    }, e.getBestModeForData = function(l) {
        return n.testNumeric(l) ? e.NUMERIC : n.testAlphanumeric(l) ? e.ALPHANUMERIC : n.testKanji(l) ? e.KANJI : e.BYTE
    }, e.toString = function(l) {
        if (l && l.id) return l.id;
        throw new Error("Invalid mode")
    }, e.isValid = function(l) {
        return l && l.bit && l.ccBits
    };

    function r(i) {
        if (typeof i != "string") throw new Error("Param is not a string");
        switch (i.toLowerCase()) {
            case "numeric":
                return e.NUMERIC;
            case "alphanumeric":
                return e.ALPHANUMERIC;
            case "kanji":
                return e.KANJI;
            case "byte":
                return e.BYTE;
            default:
                throw new Error("Unknown mode: " + i)
        }
    }
    e.from = function(l, o) {
        if (e.isValid(l)) return l;
        try {
            return r(l)
        } catch {
            return o
        }
    }
})(bt);
(function(e) {
    const t = We,
        n = fl,
        r = cl,
        i = bt,
        l = $u,
        o = 7973,
        s = t.getBCHDigit(o);

    function u(g, k, S) {
        for (let E = 1; E <= 40; E++)
            if (k <= e.getCapacity(E, S, g)) return E
    }

    function a(g, k) {
        return i.getCharCountIndicator(g, k) + 4
    }

    function m(g, k) {
        let S = 0;
        return g.forEach(function(E) {
            const A = a(E.mode, k);
            S += A + E.getBitsLength()
        }), S
    }

    function y(g, k) {
        for (let S = 1; S <= 40; S++)
            if (m(g, S) <= e.getCapacity(S, k, i.MIXED)) return S
    }
    e.from = function(k, S) {
        return l.isValid(k) ? parseInt(k, 10) : S
    }, e.getCapacity = function(k, S, E) {
        if (!l.isValid(k)) throw new Error("Invalid QR Code version");
        typeof E > "u" && (E = i.BYTE);
        const A = t.getSymbolTotalCodewords(k),
            p = n.getTotalCodewordsCount(k, S),
            c = (A - p) * 8;
        if (E === i.MIXED) return c;
        const f = c - a(E, k);
        switch (E) {
            case i.NUMERIC:
                return Math.floor(f / 10 * 3);
            case i.ALPHANUMERIC:
                return Math.floor(f / 11 * 2);
            case i.KANJI:
                return Math.floor(f / 13);
            case i.BYTE:
            default:
                return Math.floor(f / 8)
        }
    }, e.getBestVersionForData = function(k, S) {
        let E;
        const A = r.from(S, r.M);
        if (Array.isArray(k)) {
            if (k.length > 1) return y(k, A);
            if (k.length === 0) return 1;
            E = k[0]
        } else E = k;
        return u(E.mode, E.getLength(), A)
    }, e.getEncodedBits = function(k) {
        if (!l.isValid(k) || k < 7) throw new Error("Invalid QR Code version");
        let S = k << 12;
        for (; t.getBCHDigit(S) - s >= 0;) S ^= o << t.getBCHDigit(S) - s;
        return k << 12 | S
    }
})(Nf);
var Tf = {};
const Uo = We,
    Pf = 1335,
    Eh = 21522,
    ta = Uo.getBCHDigit(Pf);
Tf.getEncodedBits = function(t, n) {
    const r = t.bit << 3 | n;
    let i = r << 10;
    for (; Uo.getBCHDigit(i) - ta >= 0;) i ^= Pf << Uo.getBCHDigit(i) - ta;
    return (r << 10 | i) ^ Eh
};
var Rf = {};
const _h = bt;

function Qn(e) {
    this.mode = _h.NUMERIC, this.data = e.toString()
}
Qn.getBitsLength = function(t) {
    return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
};
Qn.prototype.getLength = function() {
    return this.data.length
};
Qn.prototype.getBitsLength = function() {
    return Qn.getBitsLength(this.data.length)
};
Qn.prototype.write = function(t) {
    let n, r, i;
    for (n = 0; n + 3 <= this.data.length; n += 3) r = this.data.substr(n, 3), i = parseInt(r, 10), t.put(i, 10);
    const l = this.data.length - n;
    l > 0 && (r = this.data.substr(n), i = parseInt(r, 10), t.put(i, l * 3 + 1))
};
var Ch = Qn;
const Nh = bt,
    $l = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

function Wn(e) {
    this.mode = Nh.ALPHANUMERIC, this.data = e
}
Wn.getBitsLength = function(t) {
    return 11 * Math.floor(t / 2) + 6 * (t % 2)
};
Wn.prototype.getLength = function() {
    return this.data.length
};
Wn.prototype.getBitsLength = function() {
    return Wn.getBitsLength(this.data.length)
};
Wn.prototype.write = function(t) {
    let n;
    for (n = 0; n + 2 <= this.data.length; n += 2) {
        let r = $l.indexOf(this.data[n]) * 45;
        r += $l.indexOf(this.data[n + 1]), t.put(r, 11)
    }
    this.data.length % 2 && t.put($l.indexOf(this.data[n]), 6)
};
var xh = Wn;
const Th = bt;

function Kn(e) {
    this.mode = Th.BYTE, typeof e == "string" ? this.data = new TextEncoder().encode(e) : this.data = new Uint8Array(e)
}
Kn.getBitsLength = function(t) {
    return t * 8
};
Kn.prototype.getLength = function() {
    return this.data.length
};
Kn.prototype.getBitsLength = function() {
    return Kn.getBitsLength(this.data.length)
};
Kn.prototype.write = function(e) {
    for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
};
var Ph = Kn;
const Rh = bt,
    Lh = We;

function Yn(e) {
    this.mode = Rh.KANJI, this.data = e
}
Yn.getBitsLength = function(t) {
    return t * 13
};
Yn.prototype.getLength = function() {
    return this.data.length
};
Yn.prototype.getBitsLength = function() {
    return Yn.getBitsLength(this.data.length)
};
Yn.prototype.write = function(e) {
    let t;
    for (t = 0; t < this.data.length; t++) {
        let n = Lh.toSJIS(this.data[t]);
        if (n >= 33088 && n <= 40956) n -= 33088;
        else if (n >= 57408 && n <= 60351) n -= 49472;
        else throw new Error("Invalid SJIS character: " + this.data[t] + `
Make sure your charset is UTF-8`);
        n = (n >>> 8 & 255) * 192 + (n & 255), e.put(n, 13)
    }
};
var Ih = Yn,
    Lf = {
        exports: {}
    };
(function(e) {
    var t = {
        single_source_shortest_paths: function(n, r, i) {
            var l = {},
                o = {};
            o[r] = 0;
            var s = t.PriorityQueue.make();
            s.push(r, 0);
            for (var u, a, m, y, g, k, S, E, A; !s.empty();) {
                u = s.pop(), a = u.value, y = u.cost, g = n[a] || {};
                for (m in g) g.hasOwnProperty(m) && (k = g[m], S = y + k, E = o[m], A = typeof o[m] > "u", (A || E > S) && (o[m] = S, s.push(m, S), l[m] = a))
            }
            if (typeof i < "u" && typeof o[i] > "u") {
                var p = ["Could not find a path from ", r, " to ", i, "."].join("");
                throw new Error(p)
            }
            return l
        },
        extract_shortest_path_from_predecessor_list: function(n, r) {
            for (var i = [], l = r; l;) i.push(l), n[l], l = n[l];
            return i.reverse(), i
        },
        find_path: function(n, r, i) {
            var l = t.single_source_shortest_paths(n, r, i);
            return t.extract_shortest_path_from_predecessor_list(l, i)
        },
        PriorityQueue: {
            make: function(n) {
                var r = t.PriorityQueue,
                    i = {},
                    l;
                n = n || {};
                for (l in r) r.hasOwnProperty(l) && (i[l] = r[l]);
                return i.queue = [], i.sorter = n.sorter || r.default_sorter, i
            },
            default_sorter: function(n, r) {
                return n.cost - r.cost
            },
            push: function(n, r) {
                var i = {
                    value: n,
                    cost: r
                };
                this.queue.push(i), this.queue.sort(this.sorter)
            },
            pop: function() {
                return this.queue.shift()
            },
            empty: function() {
                return this.queue.length === 0
            }
        }
    };
    e.exports = t
})(Lf);
var zh = Lf.exports;
(function(e) {
    const t = bt,
        n = Ch,
        r = xh,
        i = Ph,
        l = Ih,
        o = gt,
        s = We,
        u = zh;

    function a(p) {
        return unescape(encodeURIComponent(p)).length
    }

    function m(p, c, f) {
        const v = [];
        let C;
        for (;
            (C = p.exec(f)) !== null;) v.push({
            data: C[0],
            index: C.index,
            mode: c,
            length: C[0].length
        });
        return v
    }

    function y(p) {
        const c = m(o.NUMERIC, t.NUMERIC, p),
            f = m(o.ALPHANUMERIC, t.ALPHANUMERIC, p);
        let v, C;
        return s.isKanjiModeEnabled() ? (v = m(o.BYTE, t.BYTE, p), C = m(o.KANJI, t.KANJI, p)) : (v = m(o.BYTE_KANJI, t.BYTE, p), C = []), c.concat(f, v, C).sort(function(_, d) {
            return _.index - d.index
        }).map(function(_) {
            return {
                data: _.data,
                mode: _.mode,
                length: _.length
            }
        })
    }

    function g(p, c) {
        switch (c) {
            case t.NUMERIC:
                return n.getBitsLength(p);
            case t.ALPHANUMERIC:
                return r.getBitsLength(p);
            case t.KANJI:
                return l.getBitsLength(p);
            case t.BYTE:
                return i.getBitsLength(p)
        }
    }

    function k(p) {
        return p.reduce(function(c, f) {
            const v = c.length - 1 >= 0 ? c[c.length - 1] : null;
            return v && v.mode === f.mode ? (c[c.length - 1].data += f.data, c) : (c.push(f), c)
        }, [])
    }

    function S(p) {
        const c = [];
        for (let f = 0; f < p.length; f++) {
            const v = p[f];
            switch (v.mode) {
                case t.NUMERIC:
                    c.push([v, {
                        data: v.data,
                        mode: t.ALPHANUMERIC,
                        length: v.length
                    }, {
                        data: v.data,
                        mode: t.BYTE,
                        length: v.length
                    }]);
                    break;
                case t.ALPHANUMERIC:
                    c.push([v, {
                        data: v.data,
                        mode: t.BYTE,
                        length: v.length
                    }]);
                    break;
                case t.KANJI:
                    c.push([v, {
                        data: v.data,
                        mode: t.BYTE,
                        length: a(v.data)
                    }]);
                    break;
                case t.BYTE:
                    c.push([{
                        data: v.data,
                        mode: t.BYTE,
                        length: a(v.data)
                    }])
            }
        }
        return c
    }

    function E(p, c) {
        const f = {},
            v = {
                start: {}
            };
        let C = ["start"];
        for (let x = 0; x < p.length; x++) {
            const _ = p[x],
                d = [];
            for (let h = 0; h < _.length; h++) {
                const w = _[h],
                    R = "" + x + h;
                d.push(R), f[R] = {
                    node: w,
                    lastCount: 0
                }, v[R] = {};
                for (let z = 0; z < C.length; z++) {
                    const M = C[z];
                    f[M] && f[M].node.mode === w.mode ? (v[M][R] = g(f[M].lastCount + w.length, w.mode) - g(f[M].lastCount, w.mode), f[M].lastCount += w.length) : (f[M] && (f[M].lastCount = w.length), v[M][R] = g(w.length, w.mode) + 4 + t.getCharCountIndicator(w.mode, c))
                }
            }
            C = d
        }
        for (let x = 0; x < C.length; x++) v[C[x]].end = 0;
        return {
            map: v,
            table: f
        }
    }

    function A(p, c) {
        let f;
        const v = t.getBestModeForData(p);
        if (f = t.from(c, v), f !== t.BYTE && f.bit < v.bit) throw new Error('"' + p + '" cannot be encoded with mode ' + t.toString(f) + `.
 Suggested mode is: ` + t.toString(v));
        switch (f === t.KANJI && !s.isKanjiModeEnabled() && (f = t.BYTE), f) {
            case t.NUMERIC:
                return new n(p);
            case t.ALPHANUMERIC:
                return new r(p);
            case t.KANJI:
                return new l(p);
            case t.BYTE:
                return new i(p)
        }
    }
    e.fromArray = function(c) {
        return c.reduce(function(f, v) {
            return typeof v == "string" ? f.push(A(v, null)) : v.data && f.push(A(v.data, v.mode)), f
        }, [])
    }, e.fromString = function(c, f) {
        const v = y(c, s.isKanjiModeEnabled()),
            C = S(v),
            x = E(C, f),
            _ = u.find_path(x.map, "start", "end"),
            d = [];
        for (let h = 1; h < _.length - 1; h++) d.push(x.table[_[h]].node);
        return e.fromArray(k(d))
    }, e.rawSplit = function(c) {
        return e.fromArray(y(c, s.isKanjiModeEnabled()))
    }
})(Rf);
const pl = We,
    Vl = cl,
    Mh = ph,
    Dh = hh,
    Oh = kf,
    Ah = Sf,
    $o = Ef,
    Vo = fl,
    Bh = gh,
    Yi = Nf,
    Fh = Tf,
    jh = bt,
    Hl = Rf;

function Uh(e, t) {
    const n = e.size,
        r = Ah.getPositions(t);
    for (let i = 0; i < r.length; i++) {
        const l = r[i][0],
            o = r[i][1];
        for (let s = -1; s <= 7; s++)
            if (!(l + s <= -1 || n <= l + s))
                for (let u = -1; u <= 7; u++) o + u <= -1 || n <= o + u || (s >= 0 && s <= 6 && (u === 0 || u === 6) || u >= 0 && u <= 6 && (s === 0 || s === 6) || s >= 2 && s <= 4 && u >= 2 && u <= 4 ? e.set(l + s, o + u, !0, !0) : e.set(l + s, o + u, !1, !0))
    }
}

function $h(e) {
    const t = e.size;
    for (let n = 8; n < t - 8; n++) {
        const r = n % 2 === 0;
        e.set(n, 6, r, !0), e.set(6, n, r, !0)
    }
}

function Vh(e, t) {
    const n = Oh.getPositions(t);
    for (let r = 0; r < n.length; r++) {
        const i = n[r][0],
            l = n[r][1];
        for (let o = -2; o <= 2; o++)
            for (let s = -2; s <= 2; s++) o === -2 || o === 2 || s === -2 || s === 2 || o === 0 && s === 0 ? e.set(i + o, l + s, !0, !0) : e.set(i + o, l + s, !1, !0)
    }
}

function Hh(e, t) {
    const n = e.size,
        r = Yi.getEncodedBits(t);
    let i, l, o;
    for (let s = 0; s < 18; s++) i = Math.floor(s / 3), l = s % 3 + n - 8 - 3, o = (r >> s & 1) === 1, e.set(i, l, o, !0), e.set(l, i, o, !0)
}

function Ql(e, t, n) {
    const r = e.size,
        i = Fh.getEncodedBits(t, n);
    let l, o;
    for (l = 0; l < 15; l++) o = (i >> l & 1) === 1, l < 6 ? e.set(l, 8, o, !0) : l < 8 ? e.set(l + 1, 8, o, !0) : e.set(r - 15 + l, 8, o, !0), l < 8 ? e.set(8, r - l - 1, o, !0) : l < 9 ? e.set(8, 15 - l - 1 + 1, o, !0) : e.set(8, 15 - l - 1, o, !0);
    e.set(r - 8, 8, 1, !0)
}

function Qh(e, t) {
    const n = e.size;
    let r = -1,
        i = n - 1,
        l = 7,
        o = 0;
    for (let s = n - 1; s > 0; s -= 2)
        for (s === 6 && s--;;) {
            for (let u = 0; u < 2; u++)
                if (!e.isReserved(i, s - u)) {
                    let a = !1;
                    o < t.length && (a = (t[o] >>> l & 1) === 1), e.set(i, s - u, a), l--, l === -1 && (o++, l = 7)
                } if (i += r, i < 0 || n <= i) {
                i -= r, r = -r;
                break
            }
        }
}

function Wh(e, t, n) {
    const r = new Mh;
    n.forEach(function(u) {
        r.put(u.mode.bit, 4), r.put(u.getLength(), jh.getCharCountIndicator(u.mode, e)), u.write(r)
    });
    const i = pl.getSymbolTotalCodewords(e),
        l = Vo.getTotalCodewordsCount(e, t),
        o = (i - l) * 8;
    for (r.getLengthInBits() + 4 <= o && r.put(0, 4); r.getLengthInBits() % 8 !== 0;) r.putBit(0);
    const s = (o - r.getLengthInBits()) / 8;
    for (let u = 0; u < s; u++) r.put(u % 2 ? 17 : 236, 8);
    return Kh(r, e, t)
}

function Kh(e, t, n) {
    const r = pl.getSymbolTotalCodewords(t),
        i = Vo.getTotalCodewordsCount(t, n),
        l = r - i,
        o = Vo.getBlocksCount(t, n),
        s = r % o,
        u = o - s,
        a = Math.floor(r / o),
        m = Math.floor(l / o),
        y = m + 1,
        g = a - m,
        k = new Bh(g);
    let S = 0;
    const E = new Array(o),
        A = new Array(o);
    let p = 0;
    const c = new Uint8Array(e.buffer);
    for (let _ = 0; _ < o; _++) {
        const d = _ < u ? m : y;
        E[_] = c.slice(S, S + d), A[_] = k.encode(E[_]), S += d, p = Math.max(p, d)
    }
    const f = new Uint8Array(r);
    let v = 0,
        C, x;
    for (C = 0; C < p; C++)
        for (x = 0; x < o; x++) C < E[x].length && (f[v++] = E[x][C]);
    for (C = 0; C < g; C++)
        for (x = 0; x < o; x++) f[v++] = A[x][C];
    return f
}

function Yh(e, t, n, r) {
    let i;
    if (Array.isArray(e)) i = Hl.fromArray(e);
    else if (typeof e == "string") {
        let a = t;
        if (!a) {
            const m = Hl.rawSplit(e);
            a = Yi.getBestVersionForData(m, n)
        }
        i = Hl.fromString(e, a || 40)
    } else throw new Error("Invalid data");
    const l = Yi.getBestVersionForData(i, n);
    if (!l) throw new Error("The amount of data is too big to be stored in a QR Code");
    if (!t) t = l;
    else if (t < l) throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + l + `.
`);
    const o = Wh(t, n, i),
        s = pl.getSymbolSize(t),
        u = new Dh(s);
    return Uh(u, t), $h(u), Vh(u, t), Ql(u, n, 0), t >= 7 && Hh(u, t), Qh(u, o), isNaN(r) && (r = $o.getBestMask(u, Ql.bind(null, u, n))), $o.applyMask(r, u), Ql(u, n, r), {
        modules: u,
        version: t,
        errorCorrectionLevel: n,
        maskPattern: r,
        segments: i
    }
}
vf.create = function(t, n) {
    if (typeof t > "u" || t === "") throw new Error("No input text");
    let r = Vl.M,
        i, l;
    return typeof n < "u" && (r = Vl.from(n.errorCorrectionLevel, Vl.M), i = Yi.from(n.version), l = $o.from(n.maskPattern), n.toSJISFunc && pl.setToSJISFunction(n.toSJISFunc)), Yh(t, i, r, l)
};
var If = {},
    Vu = {};
(function(e) {
    function t(n) {
        if (typeof n == "number" && (n = n.toString()), typeof n != "string") throw new Error("Color should be defined as hex string");
        let r = n.slice().replace("#", "").split("");
        if (r.length < 3 || r.length === 5 || r.length > 8) throw new Error("Invalid hex color: " + n);
        (r.length === 3 || r.length === 4) && (r = Array.prototype.concat.apply([], r.map(function(l) {
            return [l, l]
        }))), r.length === 6 && r.push("F", "F");
        const i = parseInt(r.join(""), 16);
        return {
            r: i >> 24 & 255,
            g: i >> 16 & 255,
            b: i >> 8 & 255,
            a: i & 255,
            hex: "#" + r.slice(0, 6).join("")
        }
    }
    e.getOptions = function(r) {
        r || (r = {}), r.color || (r.color = {});
        const i = typeof r.margin > "u" || r.margin === null || r.margin < 0 ? 4 : r.margin,
            l = r.width && r.width >= 21 ? r.width : void 0,
            o = r.scale || 4;
        return {
            width: l,
            scale: l ? 4 : o,
            margin: i,
            color: {
                dark: t(r.color.dark || "#000000ff"),
                light: t(r.color.light || "#ffffffff")
            },
            type: r.type,
            rendererOpts: r.rendererOpts || {}
        }
    }, e.getScale = function(r, i) {
        return i.width && i.width >= r + i.margin * 2 ? i.width / (r + i.margin * 2) : i.scale
    }, e.getImageWidth = function(r, i) {
        const l = e.getScale(r, i);
        return Math.floor((r + i.margin * 2) * l)
    }, e.qrToImageData = function(r, i, l) {
        const o = i.modules.size,
            s = i.modules.data,
            u = e.getScale(o, l),
            a = Math.floor((o + l.margin * 2) * u),
            m = l.margin * u,
            y = [l.color.light, l.color.dark];
        for (let g = 0; g < a; g++)
            for (let k = 0; k < a; k++) {
                let S = (g * a + k) * 4,
                    E = l.color.light;
                if (g >= m && k >= m && g < a - m && k < a - m) {
                    const A = Math.floor((g - m) / u),
                        p = Math.floor((k - m) / u);
                    E = y[s[A * o + p] ? 1 : 0]
                }
                r[S++] = E.r, r[S++] = E.g, r[S++] = E.b, r[S] = E.a
            }
    }
})(Vu);
(function(e) {
    const t = Vu;

    function n(i, l, o) {
        i.clearRect(0, 0, l.width, l.height), l.style || (l.style = {}), l.height = o, l.width = o, l.style.height = o + "px", l.style.width = o + "px"
    }

    function r() {
        try {
            return document.createElement("canvas")
        } catch {
            throw new Error("You need to specify a canvas element")
        }
    }
    e.render = function(l, o, s) {
        let u = s,
            a = o;
        typeof u > "u" && (!o || !o.getContext) && (u = o, o = void 0), o || (a = r()), u = t.getOptions(u);
        const m = t.getImageWidth(l.modules.size, u),
            y = a.getContext("2d"),
            g = y.createImageData(m, m);
        return t.qrToImageData(g.data, l, u), n(y, a, m), y.putImageData(g, 0, 0), a
    }, e.renderToDataURL = function(l, o, s) {
        let u = s;
        typeof u > "u" && (!o || !o.getContext) && (u = o, o = void 0), u || (u = {});
        const a = e.render(l, o, u),
            m = u.type || "image/png",
            y = u.rendererOpts || {};
        return a.toDataURL(m, y.quality)
    }
})(If);
var zf = {};
const Gh = Vu;

function na(e, t) {
    const n = e.a / 255,
        r = t + '="' + e.hex + '"';
    return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
}

function Wl(e, t, n) {
    let r = e + t;
    return typeof n < "u" && (r += " " + n), r
}

function Jh(e, t, n) {
    let r = "",
        i = 0,
        l = !1,
        o = 0;
    for (let s = 0; s < e.length; s++) {
        const u = Math.floor(s % t),
            a = Math.floor(s / t);
        !u && !l && (l = !0), e[s] ? (o++, s > 0 && u > 0 && e[s - 1] || (r += l ? Wl("M", u + n, .5 + a + n) : Wl("m", i, 0), i = 0, l = !1), u + 1 < t && e[s + 1] || (r += Wl("h", o), o = 0)) : i++
    }
    return r
}
zf.render = function(t, n, r) {
    const i = Gh.getOptions(n),
        l = t.modules.size,
        o = t.modules.data,
        s = l + i.margin * 2,
        u = i.color.light.a ? "<path " + na(i.color.light, "fill") + ' d="M0 0h' + s + "v" + s + 'H0z"/>' : "",
        a = "<path " + na(i.color.dark, "stroke") + ' d="' + Jh(o, l, i.margin) + '"/>',
        m = 'viewBox="0 0 ' + s + " " + s + '"',
        g = '<svg xmlns="http://www.w3.org/2000/svg" ' + (i.width ? 'width="' + i.width + '" height="' + i.width + '" ' : "") + m + ' shape-rendering="crispEdges">' + u + a + `</svg>
`;
    return typeof r == "function" && r(null, g), g
};
const Xh = fh,
    Ho = vf,
    Mf = If,
    Zh = zf;

function Hu(e, t, n, r, i) {
    const l = [].slice.call(arguments, 1),
        o = l.length,
        s = typeof l[o - 1] == "function";
    if (!s && !Xh()) throw new Error("Callback required as last argument");
    if (s) {
        if (o < 2) throw new Error("Too few arguments provided");
        o === 2 ? (i = n, n = t, t = r = void 0) : o === 3 && (t.getContext && typeof i > "u" ? (i = r, r = void 0) : (i = r, r = n, n = t, t = void 0))
    } else {
        if (o < 1) throw new Error("Too few arguments provided");
        return o === 1 ? (n = t, t = r = void 0) : o === 2 && !t.getContext && (r = n, n = t, t = void 0), new Promise(function(u, a) {
            try {
                const m = Ho.create(n, r);
                u(e(m, t, r))
            } catch (m) {
                a(m)
            }
        })
    }
    try {
        const u = Ho.create(n, r);
        i(null, e(u, t, r))
    } catch (u) {
        i(u)
    }
}
Zn.create = Ho.create;
Zn.toCanvas = Hu.bind(null, Mf.render);
Zn.toDataURL = Hu.bind(null, Mf.renderToDataURL);
Zn.toString = Hu.bind(null, function(e, t, n) {
    return Zh.render(e, n)
});
const qh = ({
        records: e,
        barcodeType: t = "qrcode",
        barcodeWidth: n = 100,
        barcodeMargin: r = 10,
        hasHeaderRow: i = !1,
        errorCorrectionLevel: l = "M"
    }) => {
        const [o, s] = pe.useState([]), u = pe.useCallback(async a => await Promise.all(a.map(y => Zn.toDataURL(y, {
            width: n * 4,
            margin: 0,
            errorCorrectionLevel: l
        }))), [n, l]);
        return pe.useEffect(() => {
            (async () => {
                const m = e.map(y => y[y.length - 1]);
                if (t === "qrcode") {
                    const y = await u(m);
                    s(y)
                }
            })()
        }, [e, n, r, t, u]), e.length === 0 ? null : O.jsxs("table", {
            className: "table-custom",
            children: [i && O.jsx("thead", {
                children: O.jsx("tr", {
                    children: e[0].map((a, m) => O.jsx("th", {
                        children: a
                    }, m))
                })
            }), O.jsx("tbody", {
                children: e.map((a, m) => i && m === 0 ? null : O.jsxs("tr", {
                    children: [a.map((y, g) => O.jsx("td", {
                        style: {
                            padding: r
                        },
                        className: "data is-family-monospace",
                        children: y
                    }, g)), O.jsx("td", {
                        className: "barcode",
                        style: {
                            padding: r
                        },
                        children: O.jsx("img", {
                            src: o[m],
                            width: n,
                            height: n
                        })
                    })]
                }, m))
            })]
        })
    },
    bh = ({
        records: e,
        barcodeType: t = "qrcode",
        barcodeWidth: n = 100,
        barcodeMargin: r = .75,
        hasHeaderRow: i = !1
    }) => {
        const [l, o] = pe.useState([]), s = async u => await Promise.all(u.map(m => Zn.toDataURL(m, {
            width: n,
            margin: 0
        })));
        return pe.useEffect(() => {
            (async () => {
                const a = e.map(m => m[m.length - 1]);
                if (t === "qrcode") {
                    const m = await s(a);
                    o(m)
                }
            })()
        }, [e, r, n]), O.jsx("div", {
            className: "output-inline",
            children: e.map((u, a) => i && a === 0 ? null : O.jsxs("div", {
                className: "cell",
                style: {
                    margin: r
                },
                children: [O.jsx("div", {
                    className: "barcode",
                    children: O.jsx("img", {
                        src: l[a]
                    })
                }), u.map((m, y) => O.jsx("div", {
                    className: "text is-family-monospace",
                    children: m
                }, y))]
            }, a))
        })
    },
    e0 = () => {
        const [e, t] = pe.useState([]), [n, r] = pe.useState(!1), [i, l] = pe.useState(""), [o, s] = pe.useState(null), [u, a] = pe.useState("table"), [m, y] = pe.useState("	"), [g, k] = pe.useState("qrcode"), [S, E] = pe.useState(100), [A, p] = pe.useState(15), c = f => {
            f.target.name === "delimiter" && y(f.target.value === "tab" ? "	" : ","), f.target.name === "outputType" && a(f.target.value), f.target.name === "barcodeType" && k(f.target.value)
        };
        return pe.useEffect(() => {
            i !== "" && (document.title = i), i === "" && (document.title = "TSV/CSV to Barcode Table Generator")
        }, [i]), O.jsxs("div", {
            className: "container",
            children: [O.jsxs("div", {
                className: "screen-only content",
                children: [O.jsx("h1", {
                    className: "title",
                    children: "TSV/CSV to Barcode Table Generator"
                }), O.jsxs("div", {
                    className: "columns is-desktop",
                    children: [O.jsxs("div", {
                        className: "column",
                        children: [O.jsx("h2", {
                            children: "Input"
                        }), O.jsx("p", {
                            children: 'Paste TSV or CSV contents to generate a table with a barcode added for the last column. Output is printer-friendly. Works with pasting in from a spreadsheet. Last column and barcode data will have whitespace padding trimmed. Lines starting with "#" are ignored.'
                        }), O.jsx(ch, {
                            onUpdate: t,
                            onError: s,
                            delimiter: m
                        }), o && O.jsx("div", {
                            className: "notification is-danger",
                            children: o
                        })]
                    }), O.jsxs("div", {
                        className: "column",
                        children: [O.jsx("h2", {
                            children: "Options"
                        }), O.jsxs("label", {
                            className: "checkbox",
                            children: [O.jsx("input", {
                                type: "checkbox",
                                checked: n,
                                onChange: f => r(f.target.checked)
                            }), " Contains header row"]
                        }), O.jsxs("div", {
                            className: "control",
                            children: ["Output type: ", O.jsxs("label", {
                                className: "radio",
                                children: [O.jsx("input", {
                                    type: "radio",
                                    name: "outputType",
                                    value: "table",
                                    checked: u === "table",
                                    onChange: c
                                }), " Table"]
                            }), O.jsxs("label", {
                                className: "radio",
                                children: [O.jsx("input", {
                                    type: "radio",
                                    name: "outputType",
                                    value: "inline",
                                    checked: u === "inline",
                                    onChange: c
                                }), " Grid"]
                            })]
                        }), O.jsxs("div", {
                            className: "control",
                            children: ["Delimiter: ", O.jsxs("label", {
                                className: "radio",
                                children: [O.jsx("input", {
                                    type: "radio",
                                    name: "delimiter",
                                    value: "tab",
                                    checked: m === "	",
                                    onChange: c
                                }), " Tab"]
                            }), O.jsxs("label", {
                                className: "radio",
                                children: [O.jsx("input", {
                                    type: "radio",
                                    name: "delimiter",
                                    value: "comma",
                                    checked: m === ",",
                                    onChange: c
                                }), " Comma"]
                            })]
                        }), O.jsxs("div", {
                            className: "columns",
                            children: [O.jsx("div", {
                                className: "column",
                                children: O.jsx("div", {
                                    className: "control",
                                    children: O.jsxs("div", {
                                        children: ["Barcode width (px):", O.jsx("input", {
                                            className: "input",
                                            type: "number",
                                            placeholder: "Barcode width (px)",
                                            value: S,
                                            onChange: f => E(parseInt(f.target.value), 10)
                                        })]
                                    })
                                })
                            }), O.jsx("div", {
                                className: "column",
                                children: O.jsx("div", {
                                    className: "control",
                                    children: O.jsxs("div", {
                                        children: ["Barcode margin (px):", O.jsx("input", {
                                            className: "input",
                                            type: "number",
                                            placeholder: "Barcode margin (px)",
                                            value: A,
                                            onChange: f => p(parseInt(f.target.value), 10)
                                        })]
                                    })
                                })
                            })]
                        }), O.jsxs("div", {
                            children: ["Title (optional):", O.jsx("input", {
                                className: "input",
                                type: "text",
                                placeholder: "Set output title (optional)...",
                                value: i,
                                onChange: f => l(f.target.value)
                            })]
                        })]
                    })]
                }), O.jsx("h2", {
                    children: "Output"
                })]
            }), i !== "" && O.jsx("h2", {
                className: "title",
                children: i
            }), u === "table" && O.jsx(qh, {
                records: e,
                hasHeaderRow: n,
                barcodeType: g,
                barcodeWidth: S,
                barcodeMargin: A
            }), u === "inline" && O.jsx(bh, {
                records: e,
                hasHeaderRow: n,
                barcodeType: g,
                barcodeWidth: S,
                barcodeMargin: A
            }), O.jsxs("footer", {
                className: "screen-only",
                children: ["© ", O.jsx("a", {
                    href: "https://gock.net/",
                    children: "Andy Gock"
                }), " | source @", O.jsx("a", {
                    href: "https://github.com/andygock/table-barcode-generator/",
                    children: "GitHub"
                })]
            })]
        })
    };
Kl.createRoot(document.getElementById("root")).render(O.jsx(pe.StrictMode, {
    children: O.jsx(e0, {})
}));
