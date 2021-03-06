(function() {
this.metal = this.metal || {};
this.metalNamed = this.metalNamed || {};
var babelHelpers = {};
babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

babelHelpers.classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

babelHelpers.createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

babelHelpers.defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

babelHelpers.get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

babelHelpers.inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

babelHelpers.possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

babelHelpers.slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

babelHelpers.toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

babelHelpers;
'use strict';

(function () {
  (function (u, f) {
    'object' == (typeof exports === 'undefined' ? 'undefined' : babelHelpers.typeof(exports)) && 'object' == (typeof module === 'undefined' ? 'undefined' : babelHelpers.typeof(module)) ? module.exports = f() : 'function' == typeof define && define.amd ? define([], f) : 'object' == (typeof exports === 'undefined' ? 'undefined' : babelHelpers.typeof(exports)) ? exports.io = f() : u.io = f();
  })(this, function () {
    return function (t) {
      function u(g) {
        if (f[g]) return f[g].exports;var _ = f[g] = { exports: {}, id: g, loaded: !1 };return t[g].call(_.exports, _, _.exports, u), _.loaded = !0, _.exports;
      }var f = {};return u.m = t, u.c = f, u.p = '', u(0);
    }([function (t, u, f) {
      'use strict';
      function g(T, R) {
        'object' === ('undefined' == typeof T ? 'undefined' : k(T)) && (R = T, T = void 0), R = R || {};var P = C(T),
            D = P.source,
            O = P.id,
            B = P.path,
            N = S[O] && B in S[O].nsps,
            I = R.forceNew || R['force new connection'] || !1 === R.multiplex || N,
            L;return I ? (w('ignoring socket cache for %s', D), L = A(D, R)) : (!S[O] && (w('new io instance for %s', D), S[O] = A(D, R)), L = S[O]), P.query && !R.query ? R.query = P.query : R && 'object' === k(R.query) && (R.query = _(R.query)), L.socket(P.path, R);
      }function _(T) {
        var R = [];for (var P in T) {
          T.hasOwnProperty(P) && R.push(encodeURIComponent(P) + '=' + encodeURIComponent(T[P]));
        }return R.join('&');
      }var k = 'function' == typeof Symbol && 'symbol' == babelHelpers.typeof(Symbol.iterator) ? function (T) {
        return typeof T === 'undefined' ? 'undefined' : babelHelpers.typeof(T);
      } : function (T) {
        return T && 'function' == typeof Symbol && T.constructor === Symbol && T !== Symbol.prototype ? 'symbol' : typeof T === 'undefined' ? 'undefined' : babelHelpers.typeof(T);
      },
          C = f(1),
          E = f(7),
          A = f(17),
          w = f(3)('socket.io-client');t.exports = u = g;var S = u.managers = {};u.protocol = E.protocol, u.connect = g, u.Manager = f(17), u.Socket = f(45);
    }, function (t, u, f) {
      (function (g) {
        'use strict';
        var _ = f(2),
            k = f(3)('socket.io-client:url');t.exports = function (E, A) {
          var w = E;A = A || g.location, null == E && (E = A.protocol + '//' + A.host), 'string' == typeof E && ('/' === E.charAt(0) && ('/' === E.charAt(1) ? E = A.protocol + E : E = A.host + E), !/^(https?|wss?):\/\//.test(E) && (k('protocol-less url %s', E), E = 'undefined' == typeof A ? 'https://' + E : A.protocol + '//' + E), k('parse %s', E), w = _(E)), w.port || (/^(http|ws)$/.test(w.protocol) ? w.port = '80' : /^(http|ws)s$/.test(w.protocol) && (w.port = '443')), w.path = w.path || '/';var S = -1 !== w.host.indexOf(':'),
              T = S ? '[' + w.host + ']' : w.host;return w.id = w.protocol + '://' + T + ':' + w.port, w.href = w.protocol + '://' + T + (A && A.port === w.port ? '' : ':' + w.port), w;
        };
      }).call(u, function () {
        return this;
      }());
    }, function (t, u) {
      var f = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
          g = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];t.exports = function (k) {
        var C = k,
            E = k.indexOf('['),
            A = k.indexOf(']');-1 != E && -1 != A && (k = k.substring(0, E) + k.substring(E, A).replace(/:/g, ';') + k.substring(A, k.length));for (var w = f.exec(k || ''), S = {}, T = 14; T--;) {
          S[g[T]] = w[T] || '';
        }return -1 != E && -1 != A && (S.source = C, S.host = S.host.substring(1, S.host.length - 1).replace(/;/g, ':'), S.authority = S.authority.replace('[', '').replace(']', '').replace(/;/g, ':'), S.ipv6uri = !0), S;
      };
    }, function (t, u, f) {
      (function (g) {
        function _() {
          try {
            return u.storage.debug;
          } catch (k) {}if ('undefined' != typeof g && 'env' in g) return g.env.DEBUG;
        }u = t.exports = f(5), u.log = function () {
          return 'object' == (typeof console === 'undefined' ? 'undefined' : babelHelpers.typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
        }, u.formatArgs = function () {
          var C = arguments,
              E = this.useColors;if (C[0] = (E ? '%c' : '') + this.namespace + (E ? ' %c' : ' ') + C[0] + (E ? '%c ' : ' ') + '+' + u.humanize(this.diff), !E) return C;var A = 'color: ' + this.color;C = [C[0], A, 'color: inherit'].concat(Array.prototype.slice.call(C, 1));var w = 0,
              S = 0;return C[0].replace(/%[a-z%]/g, function (T) {
            '%%' === T || (w++, '%c' === T && (S = w));
          }), C.splice(S, 0, A), C;
        }, u.save = function (C) {
          try {
            null == C ? u.storage.removeItem('debug') : u.storage.debug = C;
          } catch (E) {}
        }, u.load = _, u.useColors = function () {
          return 'undefined' != typeof document && 'WebkitAppearance' in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10);
        }, u.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : function () {
          try {
            return window.localStorage;
          } catch (C) {}
        }(), u.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'], u.formatters.j = function (k) {
          try {
            return JSON.stringify(k);
          } catch (C) {
            return '[UnexpectedJSONParseError]: ' + C.message;
          }
        }, u.enable(_());
      }).call(u, f(4));
    }, function (t, u) {
      function f() {
        throw new Error('setTimeout has not been defined');
      }function g() {
        throw new Error('clearTimeout has not been defined');
      }function _(N) {
        if (T === setTimeout) return setTimeout(N, 0);if ((T === f || !T) && setTimeout) return T = setTimeout, setTimeout(N, 0);try {
          return T(N, 0);
        } catch (I) {
          try {
            return T.call(null, N, 0);
          } catch (L) {
            return T.call(this, N, 0);
          }
        }
      }function k(N) {
        if (R === clearTimeout) return clearTimeout(N);if ((R === g || !R) && clearTimeout) return R = clearTimeout, clearTimeout(N);try {
          return R(N);
        } catch (I) {
          try {
            return R.call(null, N);
          } catch (L) {
            return R.call(this, N);
          }
        }
      }function C() {
        D && O && (D = !1, O.length ? P = O.concat(P) : B = -1, P.length && E());
      }function E() {
        if (!D) {
          var N = _(C);D = !0;for (var I = P.length; I;) {
            for (O = P, P = []; ++B < I;) {
              O && O[B].run();
            }B = -1, I = P.length;
          }O = null, D = !1, k(N);
        }
      }function A(N, I) {
        this.fun = N, this.array = I;
      }function w() {}var S = t.exports = {},
          T,
          R;(function () {
        try {
          T = 'function' == typeof setTimeout ? setTimeout : f;
        } catch (N) {
          T = f;
        }try {
          R = 'function' == typeof clearTimeout ? clearTimeout : g;
        } catch (N) {
          R = g;
        }
      })();var P = [],
          D = !1,
          O,
          B = -1;S.nextTick = function (N) {
        var I = Array(arguments.length - 1);if (1 < arguments.length) for (var L = 1; L < arguments.length; L++) {
          I[L - 1] = arguments[L];
        }P.push(new A(N, I)), 1 !== P.length || D || _(E);
      }, A.prototype.run = function () {
        this.fun.apply(null, this.array);
      }, S.title = 'browser', S.browser = !0, S.env = {}, S.argv = [], S.version = '', S.versions = {}, S.on = w, S.addListener = w, S.once = w, S.off = w, S.removeListener = w, S.removeAllListeners = w, S.emit = w, S.binding = function (N) {
        throw new Error('process.binding is not supported');
      }, S.cwd = function () {
        return '/';
      }, S.chdir = function (N) {
        throw new Error('process.chdir is not supported');
      }, S.umask = function () {
        return 0;
      };
    }, function (t, u, f) {
      function g() {
        return u.colors[k++ % u.colors.length];
      }function _(E) {
        function A() {}function w() {
          var T = w,
              R = +new Date(),
              P = R - (C || R);T.diff = P, T.prev = C, T.curr = R, C = R, null == T.useColors && (T.useColors = u.useColors()), null == T.color && T.useColors && (T.color = g());var D = Array(arguments.length);for (var O = 0; O < D.length; O++) {
            D[O] = arguments[O];
          }D[0] = u.coerce(D[0]), 'string' != typeof D[0] && (D = ['%o'].concat(D));var B = 0;D[0] = D[0].replace(/%([a-z%])/g, function (I, L) {
            if ('%%' === I) return I;B++;var U = u.formatters[L];if ('function' == typeof U) {
              var q = D[B];I = U.call(T, q), D.splice(B, 1), B--;
            }return I;
          }), D = u.formatArgs.apply(T, D);var N = w.log || u.log || console.log.bind(console);N.apply(T, D);
        }A.enabled = !1, w.enabled = !0;var S = u.enabled(E) ? w : A;return S.namespace = E, S;
      }u = t.exports = _.debug = _, u.coerce = function (A) {
        return A instanceof Error ? A.stack || A.message : A;
      }, u.disable = function () {
        u.enable('');
      }, u.enable = function (A) {
        u.save(A);var w = (A || '').split(/[\s,]+/),
            S = w.length;for (var T = 0; T < S; T++) {
          w[T] && (A = w[T].replace(/[\\^$+?.()|[\]{}]/g, '\\$&').replace(/\*/g, '.*?'), '-' === A[0] ? u.skips.push(new RegExp('^' + A.substr(1) + '$')) : u.names.push(new RegExp('^' + A + '$')));
        }
      }, u.enabled = function (A) {
        var w, S;for (w = 0, S = u.skips.length; w < S; w++) {
          if (u.skips[w].test(A)) return !1;
        }for (w = 0, S = u.names.length; w < S; w++) {
          if (u.names[w].test(A)) return !0;
        }return !1;
      }, u.humanize = f(6), u.names = [], u.skips = [], u.formatters = {};var k = 0,
          C;
    }, function (t, u) {
      function f(S) {
        if (S = S + '', !(10000 < S.length)) {
          var T = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(S);if (T) {
            var R = parseFloat(T[1]),
                P = (T[2] || 'ms').toLowerCase();return 'years' === P || 'year' === P || 'yrs' === P || 'yr' === P || 'y' === P ? R * (365.25 * w) : 'days' === P || 'day' === P || 'd' === P ? R * w : 'hours' === P || 'hour' === P || 'hrs' === P || 'hr' === P || 'h' === P ? R * A : 'minutes' === P || 'minute' === P || 'mins' === P || 'min' === P || 'm' === P ? R * E : 'seconds' === P || 'second' === P || 'secs' === P || 'sec' === P || 's' === P ? R * C : 'milliseconds' === P || 'millisecond' === P || 'msecs' === P || 'msec' === P || 'ms' === P ? R : void 0;
          }
        }
      }function g(S) {
        return S >= w ? Math.round(S / w) + 'd' : S >= A ? Math.round(S / A) + 'h' : S >= E ? Math.round(S / E) + 'm' : S >= C ? Math.round(S / C) + 's' : S + 'ms';
      }function _(S) {
        return k(S, w, 'day') || k(S, A, 'hour') || k(S, E, 'minute') || k(S, C, 'second') || S + ' ms';
      }function k(S, T, R) {
        return S < T ? void 0 : S < 1.5 * T ? Math.floor(S / T) + ' ' + R : Math.ceil(S / T) + ' ' + R + 's';
      }var C = 1000,
          E = 60 * C,
          A = 60 * E,
          w = 24 * A;t.exports = function (S, T) {
        T = T || {};var R = typeof S === 'undefined' ? 'undefined' : babelHelpers.typeof(S);if ('string' == R && 0 < S.length) return f(S);if ('number' == R && !1 === isNaN(S)) return T.long ? _(S) : g(S);throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(S));
      };
    }, function (t, u, f) {
      function g() {}function _(B) {
        var N = '',
            I = !1;return N += B.type, (u.BINARY_EVENT == B.type || u.BINARY_ACK == B.type) && (N += B.attachments, N += '-'), B.nsp && '/' != B.nsp && (I = !0, N += B.nsp), null != B.id && (I && (N += ',', I = !1), N += B.id), null != B.data && (I && (N += ','), N += R.stringify(B.data)), T('encoded %j as %s', B, N), N;
      }function k(B, N) {
        D.removeBlobs(B, function (L) {
          var U = D.deconstructPacket(L),
              q = _(U.packet),
              M = U.buffers;M.unshift(q), N(M);
        });
      }function C() {
        this.reconstructor = null;
      }function E(B) {
        var N = {},
            I = 0;if (N.type = +B.charAt(0), null == u.types[N.type]) return S();if (u.BINARY_EVENT == N.type || u.BINARY_ACK == N.type) {
          for (var L = ''; '-' != B.charAt(++I) && (L += B.charAt(I), I != B.length);) {}if (L != +L || '-' != B.charAt(I)) throw new Error('Illegal attachments');N.attachments = +L;
        }if ('/' == B.charAt(I + 1)) for (N.nsp = ''; ++I;) {
          var U = B.charAt(I);if (',' == U) break;if (N.nsp += U, I == B.length) break;
        } else N.nsp = '/';var q = B.charAt(I + 1);if ('' !== q && +q == q) {
          for (N.id = ''; ++I;) {
            var U = B.charAt(I);if (null == U || +U != U) {
              --I;break;
            }if (N.id += B.charAt(I), I == B.length) break;
          }N.id = +N.id;
        }return B.charAt(++I) && (N = A(N, B.substr(I))), T('decoded %s as %j', B, N), N;
      }function A(B, N) {
        try {
          B.data = R.parse(N);
        } catch (I) {
          return S();
        }return B;
      }function w(B) {
        this.reconPack = B, this.buffers = [];
      }function S(B) {
        return { type: u.ERROR, data: 'parser error' };
      }var T = f(8)('socket.io-parser'),
          R = f(11),
          P = f(13),
          D = f(14),
          O = f(16);u.protocol = 4, u.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'ACK', 'ERROR', 'BINARY_EVENT', 'BINARY_ACK'], u.CONNECT = 0, u.DISCONNECT = 1, u.EVENT = 2, u.ACK = 3, u.ERROR = 4, u.BINARY_EVENT = 5, u.BINARY_ACK = 6, u.Encoder = g, u.Decoder = C, g.prototype.encode = function (B, N) {
        if (T('encoding packet %j', B), u.BINARY_EVENT == B.type || u.BINARY_ACK == B.type) k(B, N);else {
          var I = _(B);N([I]);
        }
      }, P(C.prototype), C.prototype.add = function (B) {
        var N;if ('string' == typeof B) N = E(B), u.BINARY_EVENT == N.type || u.BINARY_ACK == N.type ? (this.reconstructor = new w(N), 0 === this.reconstructor.reconPack.attachments && this.emit('decoded', N)) : this.emit('decoded', N);else if (!(O(B) || B.base64)) throw new Error('Unknown type: ' + B);else if (!this.reconstructor) throw new Error('got binary data when not reconstructing a packet');else N = this.reconstructor.takeBinaryData(B), N && (this.reconstructor = null, this.emit('decoded', N));
      };;C.prototype.destroy = function () {
        this.reconstructor && this.reconstructor.finishedReconstruction();
      }, w.prototype.takeBinaryData = function (B) {
        if (this.buffers.push(B), this.buffers.length == this.reconPack.attachments) {
          var N = D.reconstructPacket(this.reconPack, this.buffers);return this.finishedReconstruction(), N;
        }return null;
      }, w.prototype.finishedReconstruction = function () {
        this.reconPack = null, this.buffers = [];
      };
    }, function (t, u, f) {
      function g() {
        var _;try {
          _ = u.storage.debug;
        } catch (k) {}return _;
      }u = t.exports = f(9), u.log = function () {
        return 'object' == (typeof console === 'undefined' ? 'undefined' : babelHelpers.typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }, u.formatArgs = function () {
        var k = arguments,
            C = this.useColors;if (k[0] = (C ? '%c' : '') + this.namespace + (C ? ' %c' : ' ') + k[0] + (C ? '%c ' : ' ') + '+' + u.humanize(this.diff), !C) return k;var E = 'color: ' + this.color;k = [k[0], E, 'color: inherit'].concat(Array.prototype.slice.call(k, 1));var A = 0,
            w = 0;return k[0].replace(/%[a-z%]/g, function (S) {
          '%%' === S || (A++, '%c' === S && (w = A));
        }), k.splice(w, 0, E), k;
      }, u.save = function (k) {
        try {
          null == k ? u.storage.removeItem('debug') : u.storage.debug = k;
        } catch (C) {}
      }, u.load = g, u.useColors = function () {
        return 'WebkitAppearance' in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10);
      }, u.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : function () {
        try {
          return window.localStorage;
        } catch (k) {}
      }(), u.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'], u.formatters.j = function (_) {
        return JSON.stringify(_);
      }, u.enable(g());
    }, function (t, u, f) {
      function g() {
        return u.colors[_++ % u.colors.length];
      }u = t.exports = function (E) {
        function A() {}function w() {
          var T = w,
              R = +new Date(),
              P = R - (k || R);T.diff = P, T.prev = k, T.curr = R, k = R, null == T.useColors && (T.useColors = u.useColors()), null == T.color && T.useColors && (T.color = g());var D = Array.prototype.slice.call(arguments);D[0] = u.coerce(D[0]), 'string' != typeof D[0] && (D = ['%o'].concat(D));var O = 0;D[0] = D[0].replace(/%([a-z%])/g, function (N, I) {
            if ('%%' === N) return N;O++;var L = u.formatters[I];if ('function' == typeof L) {
              var U = D[O];N = L.call(T, U), D.splice(O, 1), O--;
            }return N;
          }), 'function' == typeof u.formatArgs && (D = u.formatArgs.apply(T, D));var B = w.log || u.log || console.log.bind(console);B.apply(T, D);
        }A.enabled = !1, w.enabled = !0;var S = u.enabled(E) ? w : A;return S.namespace = E, S;
      }, u.coerce = function (E) {
        return E instanceof Error ? E.stack || E.message : E;
      }, u.disable = function () {
        u.enable('');
      }, u.enable = function (E) {
        u.save(E);var A = (E || '').split(/[\s,]+/),
            w = A.length;for (var S = 0; S < w; S++) {
          A[S] && (E = A[S].replace(/\*/g, '.*?'), '-' === E[0] ? u.skips.push(new RegExp('^' + E.substr(1) + '$')) : u.names.push(new RegExp('^' + E + '$')));
        }
      }, u.enabled = function (E) {
        var A, w;for (A = 0, w = u.skips.length; A < w; A++) {
          if (u.skips[A].test(E)) return !1;
        }for (A = 0, w = u.names.length; A < w; A++) {
          if (u.names[A].test(E)) return !0;
        }return !1;
      }, u.humanize = f(10), u.names = [], u.skips = [], u.formatters = {};var _ = 0,
          k;
    }, function (t, u) {
      function f(S) {
        if (S = '' + S, !(10000 < S.length)) {
          var T = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(S);if (T) {
            var R = parseFloat(T[1]),
                P = (T[2] || 'ms').toLowerCase();switch (P) {case 'years':case 'year':case 'yrs':case 'yr':case 'y':
                return R * (365.25 * w);case 'days':case 'day':case 'd':
                return R * w;case 'hours':case 'hour':case 'hrs':case 'hr':case 'h':
                return R * A;case 'minutes':case 'minute':case 'mins':case 'min':case 'm':
                return R * E;case 'seconds':case 'second':case 'secs':case 'sec':case 's':
                return R * C;case 'milliseconds':case 'millisecond':case 'msecs':case 'msec':case 'ms':
                return R;}
          }
        }
      }function g(S) {
        return S >= w ? Math.round(S / w) + 'd' : S >= A ? Math.round(S / A) + 'h' : S >= E ? Math.round(S / E) + 'm' : S >= C ? Math.round(S / C) + 's' : S + 'ms';
      }function _(S) {
        return k(S, w, 'day') || k(S, A, 'hour') || k(S, E, 'minute') || k(S, C, 'second') || S + ' ms';
      }function k(S, T, R) {
        if (!(S < T)) return S < 1.5 * T ? Math.floor(S / T) + ' ' + R : Math.ceil(S / T) + ' ' + R + 's';
      }var C = 1000,
          E = 60 * C,
          A = 60 * E,
          w = 24 * A;t.exports = function (S, T) {
        return T = T || {}, 'string' == typeof S ? f(S) : T.long ? _(S) : g(S);
      };
    }, function (t, u, f) {
      (function (g, _) {
        var k = !1;;(function () {
          function C(B, N) {
            function I(_e) {
              if (I[_e] !== X) return I[_e];var ke;if ('bug-string-char-index' == _e) ke = 'a' != 'a'[0];else if ('json' == _e) ke = I('json-stringify') && I('json-parse');else {
                var Ee = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}',
                    Ce;if ('json-stringify' == _e) {
                  var Ae = N.stringify,
                      we = 'function' == typeof Ae && G;if (we) {
                    (Ce = function Ce() {
                      return 1;
                    }).toJSON = Ce;try {
                      we = '0' === Ae(0) && '0' === Ae(new L()) && '""' == Ae(new U()) && Ae(W) === X && Ae(X) === X && Ae() === X && '1' === Ae(Ce) && '[1]' == Ae([Ce]) && '[null]' == Ae([X]) && 'null' == Ae(null) && '[null,null,null]' == Ae([X, W, null]) && Ae({ a: [Ce, !0, !1, null, '\0\b\n\f\r\t'] }) == Ee && '1' === Ae(null, Ce) && '[\n 1,\n 2\n]' == Ae([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == Ae(new M(-8.64e15)) && '"+275760-09-13T00:00:00.000Z"' == Ae(new M(8.64e15)) && '"-000001-01-01T00:00:00.000Z"' == Ae(new M(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == Ae(new M(-1));
                    } catch (ve) {
                      we = !1;
                    }
                  }ke = we;
                }if ('json-parse' == _e) {
                  var Se = N.parse;if ('function' == typeof Se) try {
                    if (0 === Se('0') && !Se(!1)) {
                      Ce = Se(Ee);var xe = 5 == Ce.a.length && 1 === Ce.a[0];if (xe) {
                        try {
                          xe = !Se('"\t"');
                        } catch (ve) {}if (xe) try {
                          xe = 1 !== Se('01');
                        } catch (ve) {}if (xe) try {
                          xe = 1 !== Se('1.');
                        } catch (ve) {}
                      }
                    }
                  } catch (ve) {
                    xe = !1;
                  }ke = xe;
                }
              }return I[_e] = !!ke;
            }B || (B = S.Object()), N || (N = S.Object());var L = B.Number || S.Number,
                U = B.String || S.String,
                q = B.Object || S.Object,
                M = B.Date || S.Date,
                F = B.SyntaxError || S.SyntaxError,
                H = B.TypeError || S.TypeError,
                z = B.Math || S.Math,
                J = B.JSON || S.JSON;'object' == (typeof J === 'undefined' ? 'undefined' : babelHelpers.typeof(J)) && J && (N.stringify = J.stringify, N.parse = J.parse);var V = q.prototype,
                W = V.toString,
                G = new M(-3509827334573292),
                _Y,
                _Q,
                X;try {
              G = -109252 == G.getUTCFullYear() && 0 === G.getUTCMonth() && 1 === G.getUTCDate() && 10 == G.getUTCHours() && 37 == G.getUTCMinutes() && 6 == G.getUTCSeconds() && 708 == G.getUTCMilliseconds();
            } catch (_e) {}if (!I('json')) {
              var K = '[object Function]',
                  $ = '[object Number]',
                  Z = '[object String]',
                  ee = '[object Array]',
                  te = I('bug-string-char-index');if (!G) var oe = z.floor,
                  ne = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                  ae = function ae(_e, ke) {
                return ne[ke] + 365 * (_e - 1970) + oe((_e - 1969 + (ke = +(1 < ke))) / 4) - oe((_e - 1901 + ke) / 100) + oe((_e - 1601 + ke) / 400);
              };if ((_Y = V.hasOwnProperty) || (_Y = function Y(_e) {
                var ke = {},
                    Ce;return (ke.__proto__ = null, ke.__proto__ = { toString: 1 }, ke).toString == W ? (Ce = ke.constructor, _Y = function Y(Ee) {
                  var Ae = (this.constructor || Ce).prototype;return Ee in this && !(Ee in Ae && this[Ee] === Ae[Ee]);
                }) : _Y = function Y(Ee) {
                  var Ae = this.__proto__,
                      we = Ee in (this.__proto__ = null, this);return this.__proto__ = Ae, we;
                }, ke = null, _Y.call(this, _e);
              }), _Q = function Q(_e, ke) {
                var Ce = 0,
                    Ee,
                    Ae,
                    we;for (we in (Ee = function Ee() {
                  this.valueOf = 0;
                }).prototype.valueOf = 0, Ae = new Ee(), Ae) {
                  _Y.call(Ae, we) && Ce++;
                }return Ee = Ae = null, Ce ? 2 == Ce ? _Q = function Q(Se, xe) {
                  var ve = {},
                      Te = W.call(Se) == K,
                      Re;for (Re in Se) {
                    !(Te && 'prototype' == Re) && !_Y.call(ve, Re) && (ve[Re] = 1) && _Y.call(Se, Re) && xe(Re);
                  }
                } : _Q = function Q(Se, xe) {
                  var ve = W.call(Se) == K,
                      Te,
                      Re;for (Te in Se) {
                    ve && 'prototype' == Te || !_Y.call(Se, Te) || (Re = 'constructor' === Te) || xe(Te);
                  }(Re || _Y.call(Se, Te = 'constructor')) && xe(Te);
                } : (Ae = ['valueOf', 'toString', 'toLocaleString', 'propertyIsEnumerable', 'isPrototypeOf', 'hasOwnProperty', 'constructor'], _Q = function Q(Se, xe) {
                  var ve = W.call(Se) == K,
                      Pe = !ve && 'function' != typeof Se.constructor && A[babelHelpers.typeof(Se.hasOwnProperty)] && Se.hasOwnProperty || _Y,
                      Te,
                      Re;for (Te in Se) {
                    !(ve && 'prototype' == Te) && Pe.call(Se, Te) && xe(Te);
                  }for (Re = Ae.length; Te = Ae[--Re]; Pe.call(Se, Te) && xe(Te)) {}
                }), _Q(_e, ke);
              }, !I('json-stringify')) {
                var se = { '8': '\\b', '9': '\\t', '10': '\\n', '12': '\\f', '13': '\\r', '34': '\\"', '92': '\\\\' },
                    ie = function ie(_e, ke) {
                  return ('000000' + (ke || 0)).slice(-_e);
                },
                    le = function le(_e) {
                  for (var ke = '"', Ce = 0, Ee = _e.length, Ae = !te || 10 < Ee, we = Ae && (te ? _e.split('') : _e); Ce < Ee; Ce++) {
                    var Se = _e.charCodeAt(Ce);switch (Se) {case 8:case 9:case 10:case 12:case 13:case 34:case 92:
                        ke += se[Se];break;default:
                        if (32 > Se) {
                          ke += '\\u00' + ie(2, Se.toString(16));break;
                        }ke += Ae ? we[Ce] : _e.charAt(Ce);}
                  }return ke + '"';
                },
                    de = function de(_e, ke, Ce, Ee, Ae, we, Se) {
                  var xe, ve, Te, Re, Pe, De, Oe, Be, Ne, Ie, Le, Ue, je, qe, Me, Fe;try {
                    xe = ke[_e];
                  } catch (He) {}if ('object' == (typeof xe === 'undefined' ? 'undefined' : babelHelpers.typeof(xe)) && xe) if (ve = W.call(xe), '[object Date]' != ve || _Y.call(xe, 'toJSON')) 'function' == typeof xe.toJSON && (ve != $ && ve != Z && ve != ee || _Y.call(xe, 'toJSON')) && (xe = xe.toJSON(_e));else if (xe > -1 / 0 && xe < 1 / 0) {
                    if (ae) {
                      for (Pe = oe(xe / 864e5), Te = oe(Pe / 365.2425) + 1970 - 1; ae(Te + 1, 0) <= Pe; Te++) {}for (Re = oe((Pe - ae(Te, 0)) / 30.42); ae(Te, Re + 1) <= Pe; Re++) {}Pe = 1 + Pe - ae(Te, Re), De = (xe % 864e5 + 864e5) % 864e5, Oe = oe(De / 36e5) % 24, Be = oe(De / 6e4) % 60, Ne = oe(De / 1e3) % 60, Ie = De % 1e3;
                    } else Te = xe.getUTCFullYear(), Re = xe.getUTCMonth(), Pe = xe.getUTCDate(), Oe = xe.getUTCHours(), Be = xe.getUTCMinutes(), Ne = xe.getUTCSeconds(), Ie = xe.getUTCMilliseconds();xe = (0 >= Te || 1e4 <= Te ? (0 > Te ? '-' : '+') + ie(6, 0 > Te ? -Te : Te) : ie(4, Te)) + '-' + ie(2, Re + 1) + '-' + ie(2, Pe) + 'T' + ie(2, Oe) + ':' + ie(2, Be) + ':' + ie(2, Ne) + '.' + ie(3, Ie) + 'Z';
                  } else xe = null;if (Ce && (xe = Ce.call(ke, _e, xe)), null === xe) return 'null';if (ve = W.call(xe), '[object Boolean]' == ve) return '' + xe;if (ve == $) return xe > -1 / 0 && xe < 1 / 0 ? '' + xe : 'null';if (ve == Z) return le('' + xe);if ('object' == (typeof xe === 'undefined' ? 'undefined' : babelHelpers.typeof(xe))) {
                    for (qe = Se.length; qe--;) {
                      if (Se[qe] === xe) throw H();
                    }if (Se.push(xe), Le = [], Me = we, we += Ae, ve == ee) {
                      for (je = 0, qe = xe.length; je < qe; je++) {
                        Ue = de(je, xe, Ce, Ee, Ae, we, Se), Le.push(Ue == X ? 'null' : Ue);
                      }Fe = Le.length ? Ae ? '[\n' + we + Le.join(',\n' + we) + '\n' + Me + ']' : '[' + Le.join(',') + ']' : '[]';
                    } else _Q(Ee || xe, function (He) {
                      var ze = de(He, xe, Ce, Ee, Ae, we, Se);ze !== X && Le.push(le(He) + ':' + (Ae ? ' ' : '') + ze);
                    }), Fe = Le.length ? Ae ? '{\n' + we + Le.join(',\n' + we) + '\n' + Me + '}' : '{' + Le.join(',') + '}' : '{}';return Se.pop(), Fe;
                  }
                };N.stringify = function (_e, ke, Ce) {
                  var Ee, Ae, we, Se;if (A[typeof ke === 'undefined' ? 'undefined' : babelHelpers.typeof(ke)] && ke) if ((Se = W.call(ke)) == K) Ae = ke;else if (Se == ee) {
                    we = {};for (var xe = 0, ve = ke.length, Te; xe < ve; Te = ke[xe++], (Se = W.call(Te), Se == Z || Se == $) && (we[Te] = 1)) {}
                  }if (Ce) if ((Se = W.call(Ce)) != $) Se == Z && (Ee = 10 >= Ce.length ? Ce : Ce.slice(0, 10));else if (0 < (Ce -= Ce % 1)) for (Ee = '', 10 < Ce && (Ce = 10); Ee.length < Ce; Ee += ' ') {}return de('', (Te = {}, Te[''] = _e, Te), Ae, we, Ee, '', []);
                };
              }if (!I('json-parse')) {
                var ce = U.fromCharCode,
                    pe = { '34': '"', '47': '/', '92': '\\', '98': '\b', '102': '\f', '110': '\n', '114': '\r', '116': '\t' },
                    fe = function fe() {
                  throw ue = he = null, F();
                },
                    ye = function ye() {
                  for (var _e = he, ke = _e.length, Ce, Ee, Ae, we, Se; ue < ke;) {
                    switch (Se = _e.charCodeAt(ue), Se) {case 9:case 10:case 13:case 32:
                        ue++;break;case 123:case 125:case 91:case 93:case 58:case 44:
                        return Ce = te ? _e.charAt(ue) : _e[ue], ue++, Ce;case 34:
                        for (Ce = '@', ue++; ue < ke;) {
                          if (Se = _e.charCodeAt(ue), 32 > Se) fe();else if (92 == Se) switch (Se = _e.charCodeAt(++ue), Se) {case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:
                              Ce += pe[Se], ue++;break;case 117:
                              for (Ee = ++ue, Ae = ue + 4; ue < Ae; ue++) {
                                Se = _e.charCodeAt(ue), 48 <= Se && 57 >= Se || 97 <= Se && 102 >= Se || 65 <= Se && 70 >= Se || fe();
                              }Ce += ce('0x' + _e.slice(Ee, ue));break;default:
                              fe();} else {
                            if (34 == Se) break;for (Se = _e.charCodeAt(ue), Ee = ue; 32 <= Se && 92 != Se && 34 != Se;) {
                              Se = _e.charCodeAt(++ue);
                            }Ce += _e.slice(Ee, ue);
                          }
                        }if (34 == _e.charCodeAt(ue)) return ue++, Ce;fe();default:
                        if (Ee = ue, 45 == Se && (we = !0, Se = _e.charCodeAt(++ue)), 48 <= Se && 57 >= Se) {
                          for (48 == Se && (Se = _e.charCodeAt(ue + 1), 48 <= Se && 57 >= Se) && fe(), we = !1; ue < ke && (Se = _e.charCodeAt(ue), 48 <= Se && 57 >= Se); ue++) {}if (46 == _e.charCodeAt(ue)) {
                            for (Ae = ++ue; Ae < ke && (Se = _e.charCodeAt(Ae), 48 <= Se && 57 >= Se); Ae++) {}Ae == ue && fe(), ue = Ae;
                          }if (Se = _e.charCodeAt(ue), 101 == Se || 69 == Se) {
                            for (Se = _e.charCodeAt(++ue), (43 == Se || 45 == Se) && ue++, Ae = ue; Ae < ke && (Se = _e.charCodeAt(Ae), 48 <= Se && 57 >= Se); Ae++) {}Ae == ue && fe(), ue = Ae;
                          }return +_e.slice(Ee, ue);
                        }if (we && fe(), 'true' == _e.slice(ue, ue + 4)) return ue += 4, !0;if ('false' == _e.slice(ue, ue + 5)) return ue += 5, !1;if ('null' == _e.slice(ue, ue + 4)) return ue += 4, null;fe();}
                  }return '$';
                },
                    ge = function ge(_e) {
                  var ke, Ce;if ('$' == _e && fe(), 'string' == typeof _e) {
                    if ('@' == (te ? _e.charAt(0) : _e[0])) return _e.slice(1);if ('[' == _e) {
                      for (ke = [];; Ce || (Ce = !0)) {
                        if (_e = ye(), ']' == _e) break;Ce && (',' == _e ? (_e = ye(), ']' == _e && fe()) : fe()), ',' == _e && fe(), ke.push(ge(_e));
                      }return ke;
                    }if ('{' == _e) {
                      for (ke = {};; Ce || (Ce = !0)) {
                        if (_e = ye(), '}' == _e) break;Ce && (',' == _e ? (_e = ye(), '}' == _e && fe()) : fe()), (',' == _e || 'string' != typeof _e || '@' != (te ? _e.charAt(0) : _e[0]) || ':' != ye()) && fe(), ke[_e.slice(1)] = ge(ye());
                      }return ke;
                    }fe();
                  }return _e;
                },
                    me = function me(_e, ke, Ce) {
                  var Ee = be(_e, ke, Ce);Ee === X ? delete _e[ke] : _e[ke] = Ee;
                },
                    be = function be(_e, ke, Ce) {
                  var Ee = _e[ke],
                      Ae;if ('object' == (typeof Ee === 'undefined' ? 'undefined' : babelHelpers.typeof(Ee)) && Ee) if (W.call(Ee) == ee) for (Ae = Ee.length; Ae--;) {
                    me(Ee, Ae, Ce);
                  } else _Q(Ee, function (we) {
                    me(Ee, we, Ce);
                  });return Ce.call(_e, ke, Ee);
                },
                    ue,
                    he;N.parse = function (_e, ke) {
                  var Ce, Ee;return ue = 0, he = '' + _e, Ce = ge(ye()), '$' != ye() && fe(), ue = he = null, ke && W.call(ke) == K ? be((Ee = {}, Ee[''] = Ce, Ee), '', ke) : Ce;
                };
              }
            }return N.runInContext = C, N;
          }var E = 'function' == typeof k,
              A = { 'function': !0, object: !0 },
              w = A[typeof u === 'undefined' ? 'undefined' : babelHelpers.typeof(u)] && u && !u.nodeType && u,
              S = A[typeof window === 'undefined' ? 'undefined' : babelHelpers.typeof(window)] && window || this,
              T = w && A[typeof g === 'undefined' ? 'undefined' : babelHelpers.typeof(g)] && g && !g.nodeType && 'object' == (typeof _ === 'undefined' ? 'undefined' : babelHelpers.typeof(_)) && _;if (T && (T.global === T || T.window === T || T.self === T) && (S = T), w && !E) C(S, w);else {
            var R = S.JSON,
                P = S.JSON3,
                D = !1,
                O = C(S, S.JSON3 = { noConflict: function noConflict() {
                return D || (D = !0, S.JSON = R, S.JSON3 = P, R = P = null), O;
              } });S.JSON = { parse: O.parse, stringify: O.stringify };
          }
        }).call(this);
      }).call(u, f(12)(t), function () {
        return this;
      }());
    }, function (t, u) {
      t.exports = function (f) {
        return f.webpackPolyfill || (f.deprecate = function () {}, f.paths = [], f.children = [], f.webpackPolyfill = 1), f;
      };
    }, function (t, u) {
      function f(_) {
        if (_) return g(_);
      }function g(_) {
        for (var k in f.prototype) {
          _[k] = f.prototype[k];
        }return _;
      }t.exports = f;;f.prototype.on = f.prototype.addEventListener = function (_, k) {
        return this._callbacks = this._callbacks || {}, (this._callbacks[_] = this._callbacks[_] || []).push(k), this;
      }, f.prototype.once = function (_, k) {
        function C() {
          E.off(_, C), k.apply(this, arguments);
        }var E = this;return this._callbacks = this._callbacks || {}, C.fn = k, this.on(_, C), this;
      }, f.prototype.off = f.prototype.removeListener = f.prototype.removeAllListeners = f.prototype.removeEventListener = function (_, k) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;var C = this._callbacks[_];if (!C) return this;if (1 == arguments.length) return delete this._callbacks[_], this;var E;for (var A = 0; A < C.length; A++) {
          if (E = C[A], E === k || E.fn === k) {
            C.splice(A, 1);break;
          }
        }return this;
      }, f.prototype.emit = function (_) {
        this._callbacks = this._callbacks || {};var k = [].slice.call(arguments, 1),
            C = this._callbacks[_];if (C) {
          C = C.slice(0);for (var E = 0, A = C.length; E < A; ++E) {
            C[E].apply(this, k);
          }
        }return this;
      }, f.prototype.listeners = function (_) {
        return this._callbacks = this._callbacks || {}, this._callbacks[_] || [];
      }, f.prototype.hasListeners = function (_) {
        return !!this.listeners(_).length;
      };
    }, function (t, u, f) {
      (function (g) {
        var _ = f(15),
            k = f(16);u.deconstructPacket = function (C) {
          function E(T) {
            if (!T) return T;if (k(T)) {
              var R = { _placeholder: !0, num: A.length };return A.push(T), R;
            }if (_(T)) {
              var P = Array(T.length);for (var D = 0; D < T.length; D++) {
                P[D] = E(T[D]);
              }return P;
            }if ('object' == (typeof T === 'undefined' ? 'undefined' : babelHelpers.typeof(T)) && !(T instanceof Date)) {
              var P = {};for (var O in T) {
                P[O] = E(T[O]);
              }return P;
            }return T;
          }var A = [],
              w = C.data,
              S = C;return S.data = E(w), S.attachments = A.length, { packet: S, buffers: A };
        }, u.reconstructPacket = function (C, E) {
          function A(w) {
            if (w && w._placeholder) {
              var S = E[w.num];return S;
            }if (_(w)) {
              for (var T = 0; T < w.length; T++) {
                w[T] = A(w[T]);
              }return w;
            }if (w && 'object' == (typeof w === 'undefined' ? 'undefined' : babelHelpers.typeof(w))) {
              for (var R in w) {
                w[R] = A(w[R]);
              }return w;
            }return w;
          }return C.data = A(C.data), C.attachments = void 0, C;
        }, u.removeBlobs = function (C, E) {
          function A(T, R, P) {
            if (!T) return T;if (g.Blob && T instanceof Blob || g.File && T instanceof File) {
              w++;var D = new FileReader();D.onload = function () {
                P ? P[R] = this.result : S = this.result, --w || E(S);
              }, D.readAsArrayBuffer(T);
            } else if (_(T)) for (var O = 0; O < T.length; O++) {
              A(T[O], O, T);
            } else if (T && 'object' == (typeof T === 'undefined' ? 'undefined' : babelHelpers.typeof(T)) && !k(T)) for (var B in T) {
              A(T[B], B, T);
            }
          }var w = 0,
              S = C;A(S), w || E(S);
        };
      }).call(u, function () {
        return this;
      }());
    }, function (t, u) {
      t.exports = Array.isArray || function (f) {
        return '[object Array]' == Object.prototype.toString.call(f);
      };
    }, function (t, u) {
      (function (f) {
        t.exports = function (_) {
          return f.Buffer && f.Buffer.isBuffer(_) || f.ArrayBuffer && _ instanceof ArrayBuffer;
        };
      }).call(u, function () {
        return this;
      }());
    }, function (t, u, f) {
      'use strict';
      function g(O, B) {
        return this instanceof g ? void (O && 'object' === ('undefined' == typeof O ? 'undefined' : _(O)) && (B = O, O = void 0), B = B || {}, B.path = B.path || '/socket.io', this.nsps = {}, this.subs = [], this.opts = B, this.reconnection(!1 !== B.reconnection), this.reconnectionAttempts(B.reconnectionAttempts || 1 / 0), this.reconnectionDelay(B.reconnectionDelay || 1000), this.reconnectionDelayMax(B.reconnectionDelayMax || 5000), this.randomizationFactor(B.randomizationFactor || 0.5), this.backoff = new P({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == B.timeout ? 20000 : B.timeout), this.readyState = 'closed', this.uri = O, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [], this.encoder = new A.Encoder(), this.decoder = new A.Decoder(), this.autoConnect = !1 !== B.autoConnect, this.autoConnect && this.open()) : new g(O, B);
      }var _ = 'function' == typeof Symbol && 'symbol' == babelHelpers.typeof(Symbol.iterator) ? function (O) {
        return typeof O === 'undefined' ? 'undefined' : babelHelpers.typeof(O);
      } : function (O) {
        return O && 'function' == typeof Symbol && O.constructor === Symbol && O !== Symbol.prototype ? 'symbol' : typeof O === 'undefined' ? 'undefined' : babelHelpers.typeof(O);
      },
          k = f(18),
          C = f(45),
          E = f(36),
          A = f(7),
          w = f(47),
          S = f(48),
          T = f(3)('socket.io-client:manager'),
          R = f(43),
          P = f(51),
          D = Object.prototype.hasOwnProperty;t.exports = g, g.prototype.emitAll = function () {
        for (var O in this.emit.apply(this, arguments), this.nsps) {
          D.call(this.nsps, O) && this.nsps[O].emit.apply(this.nsps[O], arguments);
        }
      }, g.prototype.updateSocketIds = function () {
        for (var O in this.nsps) {
          D.call(this.nsps, O) && (this.nsps[O].id = this.engine.id);
        }
      }, E(g.prototype), g.prototype.reconnection = function (O) {
        return arguments.length ? (this._reconnection = !!O, this) : this._reconnection;
      }, g.prototype.reconnectionAttempts = function (O) {
        return arguments.length ? (this._reconnectionAttempts = O, this) : this._reconnectionAttempts;
      }, g.prototype.reconnectionDelay = function (O) {
        return arguments.length ? (this._reconnectionDelay = O, this.backoff && this.backoff.setMin(O), this) : this._reconnectionDelay;
      }, g.prototype.randomizationFactor = function (O) {
        return arguments.length ? (this._randomizationFactor = O, this.backoff && this.backoff.setJitter(O), this) : this._randomizationFactor;
      }, g.prototype.reconnectionDelayMax = function (O) {
        return arguments.length ? (this._reconnectionDelayMax = O, this.backoff && this.backoff.setMax(O), this) : this._reconnectionDelayMax;
      }, g.prototype.timeout = function (O) {
        return arguments.length ? (this._timeout = O, this) : this._timeout;
      }, g.prototype.maybeReconnectOnOpen = function () {
        !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
      }, g.prototype.open = g.prototype.connect = function (O, B) {
        if (T('readyState %s', this.readyState), ~this.readyState.indexOf('open')) return this;T('opening %s', this.uri), this.engine = k(this.uri, this.opts);var N = this.engine,
            I = this;this.readyState = 'opening', this.skipReconnect = !1;var L = w(N, 'open', function () {
          I.onopen(), O && O();
        }),
            U = w(N, 'error', function (F) {
          if (T('connect_error'), I.cleanup(), I.readyState = 'closed', I.emitAll('connect_error', F), O) {
            var H = new Error('Connection error');H.data = F, O(H);
          } else I.maybeReconnectOnOpen();
        });if (!1 !== this._timeout) {
          var q = this._timeout;T('connect attempt will timeout after %d', q);var M = setTimeout(function () {
            T('connect attempt timed out after %d', q), L.destroy(), N.close(), N.emit('error', 'timeout'), I.emitAll('connect_timeout', q);
          }, q);this.subs.push({ destroy: function destroy() {
              clearTimeout(M);
            } });
        }return this.subs.push(L), this.subs.push(U), this;
      }, g.prototype.onopen = function () {
        T('open'), this.cleanup(), this.readyState = 'open', this.emit('open');var O = this.engine;this.subs.push(w(O, 'data', S(this, 'ondata'))), this.subs.push(w(O, 'ping', S(this, 'onping'))), this.subs.push(w(O, 'pong', S(this, 'onpong'))), this.subs.push(w(O, 'error', S(this, 'onerror'))), this.subs.push(w(O, 'close', S(this, 'onclose'))), this.subs.push(w(this.decoder, 'decoded', S(this, 'ondecoded')));
      }, g.prototype.onping = function () {
        this.lastPing = new Date(), this.emitAll('ping');
      }, g.prototype.onpong = function () {
        this.emitAll('pong', new Date() - this.lastPing);
      }, g.prototype.ondata = function (O) {
        this.decoder.add(O);
      }, g.prototype.ondecoded = function (O) {
        this.emit('packet', O);
      }, g.prototype.onerror = function (O) {
        T('error', O), this.emitAll('error', O);
      }, g.prototype.socket = function (O, B) {
        function N() {
          ~R(L.connecting, I) || L.connecting.push(I);
        }var I = this.nsps[O];if (!I) {
          I = new C(this, O, B), this.nsps[O] = I;var L = this;I.on('connecting', N), I.on('connect', function () {
            I.id = L.engine.id;
          }), this.autoConnect && N();
        }return I;
      }, g.prototype.destroy = function (O) {
        var B = R(this.connecting, O);~B && this.connecting.splice(B, 1), this.connecting.length || this.close();
      }, g.prototype.packet = function (O) {
        T('writing packet %j', O);var B = this;O.query && 0 === O.type && (O.nsp += '?' + O.query), B.encoding ? B.packetBuffer.push(O) : (B.encoding = !0, this.encoder.encode(O, function (N) {
          for (var I = 0; I < N.length; I++) {
            B.engine.write(N[I], O.options);
          }B.encoding = !1, B.processPacketQueue();
        }));
      }, g.prototype.processPacketQueue = function () {
        if (0 < this.packetBuffer.length && !this.encoding) {
          var O = this.packetBuffer.shift();this.packet(O);
        }
      }, g.prototype.cleanup = function () {
        T('cleanup');var O = this.subs.length;for (var B = 0; B < O; B++) {
          var N = this.subs.shift();N.destroy();
        }this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();
      }, g.prototype.close = g.prototype.disconnect = function () {
        T('disconnect'), this.skipReconnect = !0, this.reconnecting = !1, 'opening' === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = 'closed', this.engine && this.engine.close();
      }, g.prototype.onclose = function (O) {
        T('onclose'), this.cleanup(), this.backoff.reset(), this.readyState = 'closed', this.emit('close', O), this._reconnection && !this.skipReconnect && this.reconnect();
      }, g.prototype.reconnect = function () {
        if (this.reconnecting || this.skipReconnect) return this;var O = this;if (this.backoff.attempts >= this._reconnectionAttempts) T('reconnect failed'), this.backoff.reset(), this.emitAll('reconnect_failed'), this.reconnecting = !1;else {
          var B = this.backoff.duration();T('will wait %dms before reconnect attempt', B), this.reconnecting = !0;var N = setTimeout(function () {
            O.skipReconnect || (T('attempting reconnect'), O.emitAll('reconnect_attempt', O.backoff.attempts), O.emitAll('reconnecting', O.backoff.attempts), !O.skipReconnect && O.open(function (L) {
              L ? (T('reconnect attempt error'), O.reconnecting = !1, O.reconnect(), O.emitAll('reconnect_error', L.data)) : (T('reconnect success'), O.onreconnect());
            }));
          }, B);this.subs.push({ destroy: function destroy() {
              clearTimeout(N);
            } });
        }
      }, g.prototype.onreconnect = function () {
        var O = this.backoff.attempts;this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll('reconnect', O);
      };
    }, function (t, u, f) {
      t.exports = f(19);
    }, function (t, u, f) {
      t.exports = f(20), t.exports.parser = f(27);
    }, function (t, u, f) {
      (function (g) {
        function _(D, O) {
          if (!(this instanceof _)) return new _(D, O);O = O || {}, D && 'object' == (typeof D === 'undefined' ? 'undefined' : babelHelpers.typeof(D)) && (O = D, D = null), D ? (D = T(D), O.hostname = D.host, O.secure = 'https' === D.protocol || 'wss' === D.protocol, O.port = D.port, D.query && (O.query = D.query)) : O.host && (O.hostname = T(O.host).host), this.secure = null == O.secure ? g.location && 'https:' === location.protocol : O.secure, O.hostname && !O.port && (O.port = this.secure ? '443' : '80'), this.agent = O.agent || !1, this.hostname = O.hostname || (g.location ? location.hostname : 'localhost'), this.port = O.port || (g.location && location.port ? location.port : this.secure ? 443 : 80), this.query = O.query || {}, 'string' == typeof this.query && (this.query = P.decode(this.query)), this.upgrade = !1 !== O.upgrade, this.path = (O.path || '/engine.io').replace(/\/$/, '') + '/', this.forceJSONP = !!O.forceJSONP, this.jsonp = !1 !== O.jsonp, this.forceBase64 = !!O.forceBase64, this.enablesXDR = !!O.enablesXDR, this.timestampParam = O.timestampParam || 't', this.timestampRequests = O.timestampRequests, this.transports = O.transports || ['polling', 'websocket'], this.readyState = '', this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = O.policyPort || 843, this.rememberUpgrade = O.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = O.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== O.perMessageDeflate && (O.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = O.pfx || null, this.key = O.key || null, this.passphrase = O.passphrase || null, this.cert = O.cert || null, this.ca = O.ca || null, this.ciphers = O.ciphers || null, this.rejectUnauthorized = O.rejectUnauthorized === void 0 ? null : O.rejectUnauthorized, this.forceNode = !!O.forceNode;var B = 'object' == (typeof g === 'undefined' ? 'undefined' : babelHelpers.typeof(g)) && g;B.global === B && (O.extraHeaders && 0 < Object.keys(O.extraHeaders).length && (this.extraHeaders = O.extraHeaders), O.localAddress && (this.localAddress = O.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open();
        }function k(D) {
          var O = {};for (var B in D) {
            D.hasOwnProperty(B) && (O[B] = D[B]);
          }return O;
        }var C = f(21),
            E = f(36),
            A = f(3)('engine.io-client:socket'),
            w = f(43),
            S = f(27),
            T = f(2),
            R = f(44),
            P = f(37);t.exports = _, _.priorWebsocketSuccess = !1, E(_.prototype), _.protocol = S.protocol, _.Socket = _, _.Transport = f(26), _.transports = f(21), _.parser = f(27), _.prototype.createTransport = function (D) {
          A('creating transport "%s"', D);var O = k(this.query);O.EIO = S.protocol, O.transport = D, this.id && (O.sid = this.id);var B = new C[D]({ agent: this.agent, hostname: this.hostname, port: this.port, secure: this.secure, path: this.path, query: O, forceJSONP: this.forceJSONP, jsonp: this.jsonp, forceBase64: this.forceBase64, enablesXDR: this.enablesXDR, timestampRequests: this.timestampRequests, timestampParam: this.timestampParam, policyPort: this.policyPort, socket: this, pfx: this.pfx, key: this.key, passphrase: this.passphrase, cert: this.cert, ca: this.ca, ciphers: this.ciphers, rejectUnauthorized: this.rejectUnauthorized, perMessageDeflate: this.perMessageDeflate, extraHeaders: this.extraHeaders, forceNode: this.forceNode, localAddress: this.localAddress });return B;
        }, _.prototype.open = function () {
          var D;if (this.rememberUpgrade && _.priorWebsocketSuccess && -1 !== this.transports.indexOf('websocket')) D = 'websocket';else {
            if (0 === this.transports.length) {
              var O = this;return void setTimeout(function () {
                O.emit('error', 'No transports available');
              }, 0);
            }D = this.transports[0];
          }this.readyState = 'opening';try {
            D = this.createTransport(D);
          } catch (B) {
            return this.transports.shift(), void this.open();
          }D.open(), this.setTransport(D);
        }, _.prototype.setTransport = function (D) {
          A('setting transport %s', D.name);var O = this;this.transport && (A('clearing existing transport %s', this.transport.name), this.transport.removeAllListeners()), this.transport = D, D.on('drain', function () {
            O.onDrain();
          }).on('packet', function (B) {
            O.onPacket(B);
          }).on('error', function (B) {
            O.onError(B);
          }).on('close', function () {
            O.onClose('transport close');
          });
        }, _.prototype.probe = function (D) {
          function O() {
            if (H.onlyBinaryUpgrades) {
              var z = !this.supportsBinary && H.transport.supportsBinary;F = F || z;
            }F || (A('probe transport "%s" opened', D), M.send([{ type: 'ping', data: 'probe' }]), M.once('packet', function (W) {
              if (!F) if ('pong' === W.type && 'probe' === W.data) {
                if (A('probe transport "%s" pong', D), H.upgrading = !0, H.emit('upgrading', M), !M) return;_.priorWebsocketSuccess = 'websocket' === M.name, A('pausing current transport "%s"', H.transport.name), H.transport.pause(function () {
                  F || 'closed' === H.readyState || (A('changing transport and sending upgrade packet'), q(), H.setTransport(M), M.send([{ type: 'upgrade' }]), H.emit('upgrade', M), M = null, H.upgrading = !1, H.flush());
                });
              } else {
                A('probe transport "%s" failed', D);var Y = new Error('probe error');Y.transport = M.name, H.emit('upgradeError', Y);
              }
            }));
          }function B() {
            F || (F = !0, q(), M.close(), M = null);
          }function N(z) {
            var J = new Error('probe error: ' + z);J.transport = M.name, B(), A('probe transport "%s" failed because of error: %s', D, z), H.emit('upgradeError', J);
          }function I() {
            N('transport closed');
          }function L() {
            N('socket closed');
          }function U(z) {
            M && z.name !== M.name && (A('"%s" works - aborting "%s"', z.name, M.name), B());
          }function q() {
            M.removeListener('open', O), M.removeListener('error', N), M.removeListener('close', I), H.removeListener('close', L), H.removeListener('upgrading', U);
          }A('probing transport "%s"', D);var M = this.createTransport(D, { probe: 1 }),
              F = !1,
              H = this;_.priorWebsocketSuccess = !1, M.once('open', O), M.once('error', N), M.once('close', I), this.once('close', L), this.once('upgrading', U), M.open();
        }, _.prototype.onOpen = function () {
          if (A('socket open'), this.readyState = 'open', _.priorWebsocketSuccess = 'websocket' === this.transport.name, this.emit('open'), this.flush(), 'open' === this.readyState && this.upgrade && this.transport.pause) {
            A('starting upgrade probes');for (var D = 0, O = this.upgrades.length; D < O; D++) {
              this.probe(this.upgrades[D]);
            }
          }
        }, _.prototype.onPacket = function (D) {
          if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) switch (A('socket receive: type "%s", data "%s"', D.type, D.data), this.emit('packet', D), this.emit('heartbeat'), D.type) {case 'open':
              this.onHandshake(R(D.data));break;case 'pong':
              this.setPing(), this.emit('pong');break;case 'error':
              var O = new Error('server error');O.code = D.data, this.onError(O);break;case 'message':
              this.emit('data', D.data), this.emit('message', D.data);} else A('packet received with socket readyState "%s"', this.readyState);
        }, _.prototype.onHandshake = function (D) {
          this.emit('handshake', D), this.id = D.sid, this.transport.query.sid = D.sid, this.upgrades = this.filterUpgrades(D.upgrades), this.pingInterval = D.pingInterval, this.pingTimeout = D.pingTimeout, this.onOpen(), 'closed' === this.readyState || (this.setPing(), this.removeListener('heartbeat', this.onHeartbeat), this.on('heartbeat', this.onHeartbeat));
        }, _.prototype.onHeartbeat = function (D) {
          clearTimeout(this.pingTimeoutTimer);var O = this;O.pingTimeoutTimer = setTimeout(function () {
            'closed' === O.readyState || O.onClose('ping timeout');
          }, D || O.pingInterval + O.pingTimeout);
        }, _.prototype.setPing = function () {
          var D = this;clearTimeout(D.pingIntervalTimer), D.pingIntervalTimer = setTimeout(function () {
            A('writing ping packet - expecting pong within %sms', D.pingTimeout), D.ping(), D.onHeartbeat(D.pingTimeout);
          }, D.pingInterval);
        }, _.prototype.ping = function () {
          var D = this;this.sendPacket('ping', function () {
            D.emit('ping');
          });
        }, _.prototype.onDrain = function () {
          this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit('drain') : this.flush();
        }, _.prototype.flush = function () {
          'closed' !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (A('flushing %d packets in socket', this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit('flush'));
        }, _.prototype.write = _.prototype.send = function (D, O, B) {
          return this.sendPacket('message', D, O, B), this;
        }, _.prototype.sendPacket = function (D, O, B, N) {
          if ('function' == typeof O && (N = O, O = void 0), 'function' == typeof B && (N = B, B = null), 'closing' !== this.readyState && 'closed' !== this.readyState) {
            B = B || {}, B.compress = !1 !== B.compress;var I = { type: D, data: O, options: B };this.emit('packetCreate', I), this.writeBuffer.push(I), N && this.once('flush', N), this.flush();
          }
        }, _.prototype.close = function () {
          function D() {
            N.onClose('forced close'), A('socket closing - telling transport to close'), N.transport.close();
          }function O() {
            N.removeListener('upgrade', O), N.removeListener('upgradeError', O), D();
          }function B() {
            N.once('upgrade', O), N.once('upgradeError', O);
          }if ('opening' === this.readyState || 'open' === this.readyState) {
            this.readyState = 'closing';var N = this;this.writeBuffer.length ? this.once('drain', function () {
              this.upgrading ? B() : D();
            }) : this.upgrading ? B() : D();
          }return this;
        }, _.prototype.onError = function (D) {
          A('socket error %j', D), _.priorWebsocketSuccess = !1, this.emit('error', D), this.onClose('transport error', D);
        }, _.prototype.onClose = function (D, O) {
          if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
            A('socket close with reason: "%s"', D);var B = this;clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners('close'), this.transport.close(), this.transport.removeAllListeners(), this.readyState = 'closed', this.id = null, this.emit('close', D, O), B.writeBuffer = [], B.prevBufferLen = 0;
          }
        }, _.prototype.filterUpgrades = function (D) {
          var O = [];for (var B = 0, N = D.length; B < N; B++) {
            ~w(this.transports, D[B]) && O.push(D[B]);
          }return O;
        };
      }).call(u, function () {
        return this;
      }());
    }, function (t, u, f) {
      (function (g) {
        var _ = f(22),
            k = f(24),
            C = f(40),
            E = f(41);u.polling = function (w) {
          var T = !1,
              R = !1,
              P = !1 !== w.jsonp,
              S;if (g.location) {
            var D = 'https:' === location.protocol,
                O = location.port;O || (O = D ? 443 : 80), T = w.hostname !== location.hostname || O !== w.port, R = w.secure !== D;
          }if (w.xdomain = T, w.xscheme = R, S = new _(w), 'open' in S && !w.forceJSONP) return new k(w);if (!P) throw new Error('JSONP disabled');return new C(w);
        }, u.websocket = E;
      }).call(u, function () {
        return this;
      }());
    }, function (t, u, f) {
      (function (g) {
        var _ = f(23);t.exports = function (k) {
          var C = k.xdomain,
              E = k.xscheme,
              A = k.enablesXDR;try {
            if ('undefined' != typeof XMLHttpRequest && (!C || _)) return new XMLHttpRequest();
          } catch (w) {}try {
            if ('undefined' != typeof XDomainRequest && !E && A) return new XDomainRequest();
          } catch (w) {}if (!C) try {
            return new g[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
          } catch (w) {}
        };
      }).call(u, function () {
        return this;
      }());
    }, function (t, u) {
      try {
        t.exports = 'undefined' != typeof XMLHttpRequest && 'withCredentials' in new XMLHttpRequest();
      } catch (f) {
        t.exports = !1;
      }
    }, function (t, u, f) {
      (function (g) {
        function _() {}function k(P) {
          if (w.call(this, P), this.requestTimeout = P.requestTimeout, g.location) {
            var D = 'https:' === location.protocol,
                O = location.port;O || (O = D ? 443 : 80), this.xd = P.hostname !== g.location.hostname || O !== P.port, this.xs = P.secure !== D;
          } else this.extraHeaders = P.extraHeaders;
        }function C(P) {
          this.method = P.method || 'GET', this.uri = P.uri, this.xd = !!P.xd, this.xs = !!P.xs, this.async = !1 !== P.async, this.data = void 0 === P.data ? null : P.data, this.agent = P.agent, this.isBinary = P.isBinary, this.supportsBinary = P.supportsBinary, this.enablesXDR = P.enablesXDR, this.requestTimeout = P.requestTimeout, this.pfx = P.pfx, this.key = P.key, this.passphrase = P.passphrase, this.cert = P.cert, this.ca = P.ca, this.ciphers = P.ciphers, this.rejectUnauthorized = P.rejectUnauthorized, this.extraHeaders = P.extraHeaders, this.create();
        }function E() {
          for (var P in C.requests) {
            C.requests.hasOwnProperty(P) && C.requests[P].abort();
          }
        }var A = f(22),
            w = f(25),
            S = f(36),
            T = f(38),
            R = f(3)('engine.io-client:polling-xhr');t.exports = k, t.exports.Request = C, T(k, w), k.prototype.supportsBinary = !0, k.prototype.request = function (P) {
          return P = P || {}, P.uri = this.uri(), P.xd = this.xd, P.xs = this.xs, P.agent = this.agent || !1, P.supportsBinary = this.supportsBinary, P.enablesXDR = this.enablesXDR, P.pfx = this.pfx, P.key = this.key, P.passphrase = this.passphrase, P.cert = this.cert, P.ca = this.ca, P.ciphers = this.ciphers, P.rejectUnauthorized = this.rejectUnauthorized, P.requestTimeout = this.requestTimeout, P.extraHeaders = this.extraHeaders, new C(P);
        }, k.prototype.doWrite = function (P, D) {
          var O = 'string' != typeof P && P !== void 0,
              B = this.request({ method: 'POST', data: P, isBinary: O }),
              N = this;B.on('success', D), B.on('error', function (I) {
            N.onError('xhr post error', I);
          }), this.sendXhr = B;
        }, k.prototype.doPoll = function () {
          R('xhr poll');var P = this.request(),
              D = this;P.on('data', function (O) {
            D.onData(O);
          }), P.on('error', function (O) {
            D.onError('xhr poll error', O);
          }), this.pollXhr = P;
        }, S(C.prototype), C.prototype.create = function () {
          var P = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };P.pfx = this.pfx, P.key = this.key, P.passphrase = this.passphrase, P.cert = this.cert, P.ca = this.ca, P.ciphers = this.ciphers, P.rejectUnauthorized = this.rejectUnauthorized;var D = this.xhr = new A(P),
              O = this;try {
            R('xhr open %s: %s', this.method, this.uri), D.open(this.method, this.uri, this.async);try {
              if (this.extraHeaders) for (var B in D.setDisableHeaderCheck(!0), this.extraHeaders) {
                this.extraHeaders.hasOwnProperty(B) && D.setRequestHeader(B, this.extraHeaders[B]);
              }
            } catch (N) {}if (this.supportsBinary && (D.responseType = 'arraybuffer'), 'POST' === this.method) try {
              this.isBinary ? D.setRequestHeader('Content-type', 'application/octet-stream') : D.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
            } catch (N) {}try {
              D.setRequestHeader('Accept', '*/*');
            } catch (N) {}'withCredentials' in D && (D.withCredentials = !0), this.requestTimeout && (D.timeout = this.requestTimeout), this.hasXDR() ? (D.onload = function () {
              O.onLoad();
            }, D.onerror = function () {
              O.onError(D.responseText);
            }) : D.onreadystatechange = function () {
              4 === D.readyState && (200 === D.status || 1223 === D.status ? O.onLoad() : setTimeout(function () {
                O.onError(D.status);
              }, 0));
            }, R('xhr data %s', this.data), D.send(this.data);
          } catch (N) {
            return void setTimeout(function () {
              O.onError(N);
            }, 0);
          }g.document && (this.index = C.requestsCount++, C.requests[this.index] = this);
        }, C.prototype.onSuccess = function () {
          this.emit('success'), this.cleanup();
        }, C.prototype.onData = function (P) {
          this.emit('data', P), this.onSuccess();
        }, C.prototype.onError = function (P) {
          this.emit('error', P), this.cleanup(!0);
        }, C.prototype.cleanup = function (P) {
          if ('undefined' != typeof this.xhr && null !== this.xhr) {
            if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = _ : this.xhr.onreadystatechange = _, P) try {
              this.xhr.abort();
            } catch (D) {}g.document && delete C.requests[this.index], this.xhr = null;
          }
        }, C.prototype.onLoad = function () {
          var P;try {
            var D;try {
              D = this.xhr.getResponseHeader('Content-Type').split(';')[0];
            } catch (L) {}if ('application/octet-stream' === D) P = this.xhr.response || this.xhr.responseText;else if (!this.supportsBinary) P = this.xhr.responseText;else try {
              P = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
            } catch (L) {
              var O = new Uint8Array(this.xhr.response),
                  B = [];for (var N = 0, I = O.length; N < I; N++) {
                B.push(O[N]);
              }P = String.fromCharCode.apply(null, B);
            }
          } catch (L) {
            this.onError(L);
          }null != P && this.onData(P);
        }, C.prototype.hasXDR = function () {
          return 'undefined' != typeof g.XDomainRequest && !this.xs && this.enablesXDR;
        }, C.prototype.abort = function () {
          this.cleanup();
        }, C.requestsCount = 0, C.requests = {}, g.document && (g.attachEvent ? g.attachEvent('onunload', E) : g.addEventListener && g.addEventListener('beforeunload', E, !1));
      }).call(u, function () {
        return this;
      }());
    }, function (t, u, f) {
      function g(T) {
        var R = T && T.forceBase64;(!S || R) && (this.supportsBinary = !1), _.call(this, T);
      }var _ = f(26),
          k = f(37),
          C = f(27),
          E = f(38),
          A = f(39),
          w = f(3)('engine.io-client:polling');t.exports = g;var S = function () {
        var T = f(22),
            R = new T({ xdomain: !1 });return null != R.responseType;
      }();E(g, _), g.prototype.name = 'polling', g.prototype.doOpen = function () {
        this.poll();
      }, g.prototype.pause = function (T) {
        function R() {
          w('paused'), P.readyState = 'paused', T();
        }var P = this;if (this.readyState = 'pausing', this.polling || !this.writable) {
          var D = 0;this.polling && (w('we are currently polling - waiting to pause'), D++, this.once('pollComplete', function () {
            w('pre-pause polling complete'), --D || R();
          })), this.writable || (w('we are currently writing - waiting to pause'), D++, this.once('drain', function () {
            w('pre-pause writing complete'), --D || R();
          }));
        } else R();
      }, g.prototype.poll = function () {
        w('polling'), this.polling = !0, this.doPoll(), this.emit('poll');
      }, g.prototype.onData = function (T) {
        var R = this;w('polling got data %s', T), C.decodePayload(T, this.socket.binaryType, function (P, D, O) {
          return 'opening' === R.readyState && R.onOpen(), 'close' === P.type ? (R.onClose(), !1) : void R.onPacket(P);
        }), 'closed' !== this.readyState && (this.polling = !1, this.emit('pollComplete'), 'open' === this.readyState ? this.poll() : w('ignoring poll - transport state "%s"', this.readyState));
      }, g.prototype.doClose = function () {
        function T() {
          w('writing close packet'), R.write([{ type: 'close' }]);
        }var R = this;'open' === this.readyState ? (w('transport open - closing'), T()) : (w('transport not open - deferring close'), this.once('open', T));
      }, g.prototype.write = function (T) {
        var R = this;this.writable = !1;var P = function P() {
          R.writable = !0, R.emit('drain');
        };C.encodePayload(T, this.supportsBinary, function (D) {
          R.doWrite(D, P);
        });
      }, g.prototype.uri = function () {
        var T = this.query || {},
            R = this.secure ? 'https' : 'http',
            P = '';!1 !== this.timestampRequests && (T[this.timestampParam] = A()), this.supportsBinary || T.sid || (T.b64 = 1), T = k.encode(T), this.port && ('https' == R && 443 !== +this.port || 'http' == R && 80 !== +this.port) && (P = ':' + this.port), T.length && (T = '?' + T);var D = -1 !== this.hostname.indexOf(':');return R + '://' + (D ? '[' + this.hostname + ']' : this.hostname) + P + this.path + T;
      };
    }, function (t, u, f) {
      function g(C) {
        this.path = C.path, this.hostname = C.hostname, this.port = C.port, this.secure = C.secure, this.query = C.query, this.timestampParam = C.timestampParam, this.timestampRequests = C.timestampRequests, this.readyState = '', this.agent = C.agent || !1, this.socket = C.socket, this.enablesXDR = C.enablesXDR, this.pfx = C.pfx, this.key = C.key, this.passphrase = C.passphrase, this.cert = C.cert, this.ca = C.ca, this.ciphers = C.ciphers, this.rejectUnauthorized = C.rejectUnauthorized, this.forceNode = C.forceNode, this.extraHeaders = C.extraHeaders, this.localAddress = C.localAddress;
      }var _ = f(27),
          k = f(36);t.exports = g, k(g.prototype), g.prototype.onError = function (C, E) {
        var A = new Error(C);return A.type = 'TransportError', A.description = E, this.emit('error', A), this;
      }, g.prototype.open = function () {
        return ('closed' === this.readyState || '' === this.readyState) && (this.readyState = 'opening', this.doOpen()), this;
      }, g.prototype.close = function () {
        return ('opening' === this.readyState || 'open' === this.readyState) && (this.doClose(), this.onClose()), this;
      }, g.prototype.send = function (C) {
        if ('open' === this.readyState) this.write(C);else throw new Error('Transport not open');
      }, g.prototype.onOpen = function () {
        this.readyState = 'open', this.writable = !0, this.emit('open');
      }, g.prototype.onData = function (C) {
        var E = _.decodePacket(C, this.socket.binaryType);this.onPacket(E);
      }, g.prototype.onPacket = function (C) {
        this.emit('packet', C);
      }, g.prototype.onClose = function () {
        this.readyState = 'closed', this.emit('close');
      };
    }, function (t, u, f) {
      (function (g) {
        function _(F, H) {
          var z = 'b' + u.packets[F.type] + F.data.data;return H(z);
        }function k(F, H, z) {
          if (!H) return u.encodeBase64Packet(F, z);var J = F.data,
              V = new Uint8Array(J),
              W = new Uint8Array(1 + J.byteLength);W[0] = L[F.type];for (var Y = 0; Y < V.length; Y++) {
            W[Y + 1] = V[Y];
          }return z(W.buffer);
        }function C(F, H, z) {
          if (!H) return u.encodeBase64Packet(F, z);var J = new FileReader();return J.onload = function () {
            F.data = J.result, u.encodePacket(F, H, !0, z);
          }, J.readAsArrayBuffer(F.data);
        }function E(F, H, z) {
          if (!H) return u.encodeBase64Packet(F, z);if (I) return C(F, H, z);var J = new Uint8Array(1);J[0] = L[F.type];var V = new M([J.buffer, F.data]);return z(V);
        }function A(F) {
          try {
            F = D.decode(F);
          } catch (H) {
            return !1;
          }return F;
        }function w(F, H, z) {
          var J = Array(F.length),
              V = P(F.length, z),
              W = function W(Q, X, G) {
            H(X, function (K, $) {
              J[Q] = $, G(K, J);
            });
          };for (var Y = 0; Y < F.length; Y++) {
            W(Y, F[Y], V);
          }
        }var S = f(28),
            T = f(29),
            R = f(31),
            P = f(32),
            D = f(33),
            O;g && g.ArrayBuffer && (O = f(34));var B = 'undefined' != typeof navigator && /Android/i.test(navigator.userAgent),
            N = 'undefined' != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
            I = B || N;u.protocol = 3;var L = u.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 },
            U = S(L),
            q = { type: 'error', data: 'parser error' },
            M = f(35);u.encodePacket = function (F, H, z, J) {
          'function' == typeof H && (J = H, H = !1), 'function' == typeof z && (J = z, z = null);var V = void 0 === F.data ? void 0 : F.data.buffer || F.data;if (g.ArrayBuffer && V instanceof ArrayBuffer) return k(F, H, J);if (M && V instanceof g.Blob) return E(F, H, J);if (V && V.base64) return _(F, J);var W = L[F.type];return void 0 !== F.data && (W += z ? D.encode(F.data + '') : F.data + ''), J('' + W);
        }, u.encodeBase64Packet = function (F, H) {
          var z = 'b' + u.packets[F.type];if (M && F.data instanceof g.Blob) {
            var J = new FileReader();return J.onload = function () {
              var X = J.result.split(',')[1];H(z + X);
            }, J.readAsDataURL(F.data);
          }var V;try {
            V = String.fromCharCode.apply(null, new Uint8Array(F.data));
          } catch (X) {
            var W = new Uint8Array(F.data),
                Y = Array(W.length);for (var Q = 0; Q < W.length; Q++) {
              Y[Q] = W[Q];
            }V = String.fromCharCode.apply(null, Y);
          }return z += g.btoa(V), H(z);
        }, u.decodePacket = function (F, H, z) {
          if (void 0 === F) return q;if ('string' == typeof F) {
            if ('b' == F.charAt(0)) return u.decodeBase64Packet(F.substr(1), H);if (z && (F = A(F), !1 === F)) return q;var J = F.charAt(0);return +J == J && U[J] ? 1 < F.length ? { type: U[J], data: F.substring(1) } : { type: U[J] } : q;
          }var V = new Uint8Array(F),
              J = V[0],
              W = R(F, 1);return M && 'blob' === H && (W = new M([W])), { type: U[J], data: W };
        }, u.decodeBase64Packet = function (F, H) {
          var z = U[F.charAt(0)];if (!O) return { type: z, data: { base64: !0, data: F.substr(1) } };var J = O.decode(F.substr(1));return 'blob' === H && M && (J = new M([J])), { type: z, data: J };
        }, u.encodePayload = function (F, H, z) {
          function J(W) {
            return W.length + ':' + W;
          }'function' == typeof H && (z = H, H = null);var V = T(F);return H && V ? M && !I ? u.encodePayloadAsBlob(F, z) : u.encodePayloadAsArrayBuffer(F, z) : F.length ? void w(F, function (Y, Q) {
            u.encodePacket(Y, !!V && H, !0, function (X) {
              Q(null, J(X));
            });
          }, function (W, Y) {
            return z(Y.join(''));
          }) : z('0:');
        }, u.decodePayload = function (F, H, z) {
          if ('string' != typeof F) return u.decodePayloadAsBinary(F, H, z);'function' == typeof H && (z = H, H = null);var J;if ('' == F) return z(q, 0, 1);var V = '',
              W,
              Y;for (var Q = 0, X = F.length; Q < X; Q++) {
            var G = F.charAt(Q);if (':' != G) V += G;else {
              if ('' == V || V != (W = +V)) return z(q, 0, 1);if (Y = F.substr(Q + 1, W), V != Y.length) return z(q, 0, 1);if (Y.length) {
                if (J = u.decodePacket(Y, H, !0), q.type == J.type && q.data == J.data) return z(q, 0, 1);var K = z(J, Q + W, X);if (!1 === K) return;
              }Q += W, V = '';
            }
          }if ('' != V) return z(q, 0, 1);
        }, u.encodePayloadAsArrayBuffer = function (F, H) {
          return F.length ? void w(F, function (J, V) {
            u.encodePacket(J, !0, !0, function (W) {
              return V(null, W);
            });
          }, function (z, J) {
            var V = J.reduce(function (Q, X) {
              var G;return G = 'string' == typeof X ? X.length : X.byteLength, Q + G.toString().length + G + 2;
            }, 0),
                W = new Uint8Array(V),
                Y = 0;return J.forEach(function (Q) {
              var X = 'string' == typeof Q,
                  G = Q;if (X) {
                var K = new Uint8Array(Q.length);for (var $ = 0; $ < Q.length; $++) {
                  K[$] = Q.charCodeAt($);
                }G = K.buffer;
              }W[Y++] = X ? 0 : 1;var Z = G.byteLength.toString();for (var $ = 0; $ < Z.length; $++) {
                W[Y++] = parseInt(Z[$]);
              }W[Y++] = 255;var K = new Uint8Array(G);for (var $ = 0; $ < K.length; $++) {
                W[Y++] = K[$];
              }
            }), H(W.buffer);
          }) : H(new ArrayBuffer(0));
        }, u.encodePayloadAsBlob = function (F, H) {
          w(F, function (J, V) {
            u.encodePacket(J, !0, !0, function (W) {
              var Y = new Uint8Array(1);if (Y[0] = 1, 'string' == typeof W) {
                var Q = new Uint8Array(W.length);for (var X = 0; X < W.length; X++) {
                  Q[X] = W.charCodeAt(X);
                }W = Q.buffer, Y[0] = 0;
              }var G = W instanceof ArrayBuffer ? W.byteLength : W.size,
                  K = G.toString(),
                  $ = new Uint8Array(K.length + 1);for (var X = 0; X < K.length; X++) {
                $[X] = parseInt(K[X]);
              }if ($[K.length] = 255, M) {
                var Z = new M([Y.buffer, $.buffer, W]);V(null, Z);
              }
            });
          }, function (z, J) {
            return H(new M(J));
          });
        }, u.decodePayloadAsBinary = function (F, H, z) {
          'function' == typeof H && (z = H, H = null);for (var J = F, V = [], W = !1; 0 < J.byteLength;) {
            var Y = new Uint8Array(J),
                Q = 0 === Y[0],
                X = '';for (var G = 1;; G++) {
              if (255 == Y[G]) break;if (310 < X.length) {
                W = !0;break;
              }X += Y[G];
            }if (W) return z(q, 0, 1);J = R(J, 2 + X.length), X = parseInt(X);var K = R(J, 0, X);if (Q) try {
              K = String.fromCharCode.apply(null, new Uint8Array(K));
            } catch (ee) {
              var $ = new Uint8Array(K);K = '';for (var G = 0; G < $.length; G++) {
                K += String.fromCharCode($[G]);
              }
            }V.push(K), J = R(J, X);
          }var Z = V.length;V.forEach(function (ee, te) {
            z(u.decodePacket(ee, H, !0), te, Z);
          });
        };
      }).call(u, function () {
        return this;
      }());
    }, function (t, u) {
      t.exports = Object.keys || function (g) {
        var _ = [],
            k = Object.prototype.hasOwnProperty;for (var C in g) {
          k.call(g, C) && _.push(C);
        }return _;
      };
    }, function (t, u, f) {
      (function (g) {
        var _ = f(30);t.exports = function (C) {
          function E(A) {
            if (!A) return !1;if (g.Buffer && g.Buffer.isBuffer(A) || g.ArrayBuffer && A instanceof ArrayBuffer || g.Blob && A instanceof Blob || g.File && A instanceof File) return !0;if (_(A)) {
              for (var w = 0; w < A.length; w++) {
                if (E(A[w])) return !0;
              }
            } else if (A && 'object' == (typeof A === 'undefined' ? 'undefined' : babelHelpers.typeof(A))) for (var S in A.toJSON && (A = A.toJSON()), A) {
              if (Object.prototype.hasOwnProperty.call(A, S) && E(A[S])) return !0;
            }return !1;
          }return E(C);
        };
      }).call(u, function () {
        return this;
      }());
    }, function (t, u) {
      t.exports = Array.isArray || function (f) {
        return '[object Array]' == Object.prototype.toString.call(f);
      };
    }, function (t, u) {
      t.exports = function (f, g, _) {
        var k = f.byteLength;if (g = g || 0, _ = _ || k, f.slice) return f.slice(g, _);if (0 > g && (g += k), 0 > _ && (_ += k), _ > k && (_ = k), g >= k || g >= _ || 0 === k) return new ArrayBuffer(0);var C = new Uint8Array(f),
            E = new Uint8Array(_ - g);for (var A = g, w = 0; A < _; A++, w++) {
          E[w] = C[A];
        }return E.buffer;
      };
    }, function (t, u) {
      function f() {}t.exports = function (_, k, C) {
        function E(w, S) {
          if (0 >= E.count) throw new Error('after called too many times');--E.count, w ? (A = !0, k(w), k = C) : 0 === E.count && !A && k(null, S);
        }var A = !1;return C = C || f, E.count = _, 0 === _ ? k() : E;
      };
    }, function (t, u, f) {
      var g;(function (_, k) {
        ;(function (C) {
          function E(F) {
            for (var H = [], z = 0, J = F.length, V, W; z < J;) {
              V = F.charCodeAt(z++), 55296 <= V && 56319 >= V && z < J ? (W = F.charCodeAt(z++), 56320 == (64512 & W) ? H.push(((1023 & V) << 10) + (1023 & W) + 65536) : (H.push(V), z--)) : H.push(V);
            }return H;
          }function A(F) {
            for (var H = F.length, z = -1, V = '', J; ++z < H;) {
              J = F[z], 65535 < J && (J -= 65536, V += B(55296 | 1023 & J >>> 10), J = 56320 | 1023 & J), V += B(J);
            }return V;
          }function w(F, H) {
            return B(128 | 63 & F >> H);
          }function S(F) {
            if (0 == (4294967168 & F)) return B(F);var H = '';return 0 == (4294965248 & F) ? H = B(192 | 31 & F >> 6) : 0 == (4294901760 & F) ? (H = B(224 | 15 & F >> 12), H += w(F, 6)) : 0 == (4292870144 & F) && (H = B(240 | 7 & F >> 18), H += w(F, 12), H += w(F, 6)), H += B(128 | 63 & F), H;
          }function T() {
            if (L >= I) throw Error('Invalid byte index');var F = 255 & N[L];if (L++, 128 == (192 & F)) return 63 & F;throw Error('Invalid continuation byte');
          }function R() {
            var F, H, z, J, V;if (L > I) throw Error('Invalid byte index');if (L == I) return !1;if (F = 255 & N[L], L++, 0 == (128 & F)) return F;if (192 == (224 & F)) {
              var H = T();if (V = (31 & F) << 6 | H, 128 <= V) return V;throw Error('Invalid continuation byte');
            }if (224 == (240 & F)) {
              if (H = T(), z = T(), V = (15 & F) << 12 | H << 6 | z, 2048 <= V) return V;throw Error('Invalid continuation byte');
            }if (240 == (248 & F) && (H = T(), z = T(), J = T(), V = (15 & F) << 18 | H << 12 | z << 6 | J, 65536 <= V && 1114111 >= V)) return V;throw Error('Invalid WTF-8 detected');
          }var P = 'object' == (typeof u === 'undefined' ? 'undefined' : babelHelpers.typeof(u)) && u,
              D = 'object' == (typeof _ === 'undefined' ? 'undefined' : babelHelpers.typeof(_)) && _ && _.exports == P && _,
              O = 'object' == (typeof k === 'undefined' ? 'undefined' : babelHelpers.typeof(k)) && k;(O.global === O || O.window === O) && (C = O);var B = String.fromCharCode,
              N,
              I,
              L,
              U = { version: '1.0.0', encode: function encode(H) {
              for (var z = E(H), J = z.length, V = -1, Y = '', W; ++V < J;) {
                W = z[V], Y += S(W);
              }return Y;
            }, decode: function decode(H) {
              N = E(H), I = N.length, L = 0;for (var z = [], J; !1 !== (J = R());) {
                z.push(J);
              }return A(z);
            } };g = function () {
            return U;
          }.call(u, f, u, _), !(g !== void 0 && (_.exports = g));var q, M;
        })(this);
      }).call(u, f(12)(t), function () {
        return this;
      }());
    }, function (t, u) {
      (function () {
        'use strict';
        var f = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            g = new Uint8Array(256);for (var _ = 0; _ < f.length; _++) {
          g[f.charCodeAt(_)] = _;
        }u.encode = function (k) {
          var C = new Uint8Array(k),
              A = C.length,
              w = '',
              E;for (E = 0; E < A; E += 3) {
            w += f[C[E] >> 2], w += f[(3 & C[E]) << 4 | C[E + 1] >> 4], w += f[(15 & C[E + 1]) << 2 | C[E + 2] >> 6], w += f[63 & C[E + 2]];
          }return 2 == A % 3 ? w = w.substring(0, w.length - 1) + '=' : 1 == A % 3 && (w = w.substring(0, w.length - 2) + '=='), w;
        }, u.decode = function (k) {
          var C = 0.75 * k.length,
              E = k.length,
              w = 0,
              A,
              S,
              T,
              R,
              P;'=' === k[k.length - 1] && (C--, '=' === k[k.length - 2] && C--);var D = new ArrayBuffer(C),
              O = new Uint8Array(D);for (A = 0; A < E; A += 4) {
            S = g[k.charCodeAt(A)], T = g[k.charCodeAt(A + 1)], R = g[k.charCodeAt(A + 2)], P = g[k.charCodeAt(A + 3)], O[w++] = S << 2 | T >> 4, O[w++] = (15 & T) << 4 | R >> 2, O[w++] = (3 & R) << 6 | 63 & P;
          }return D;
        };
      })();
    }, function (t, u) {
      (function (f) {
        function g(S) {
          for (var T = 0; T < S.length; T++) {
            var R = S[T];if (R.buffer instanceof ArrayBuffer) {
              var P = R.buffer;if (R.byteLength !== P.byteLength) {
                var D = new Uint8Array(R.byteLength);D.set(new Uint8Array(P, R.byteOffset, R.byteLength)), P = D.buffer;
              }S[T] = P;
            }
          }
        }function _(S, T) {
          T = T || {};var R = new C();g(S);for (var P = 0; P < S.length; P++) {
            R.append(S[P]);
          }return T.type ? R.getBlob(T.type) : R.getBlob();
        }function k(S, T) {
          return g(S), new Blob(S, T || {});
        }var C = f.BlobBuilder || f.WebKitBlobBuilder || f.MSBlobBuilder || f.MozBlobBuilder,
            E = function () {
          try {
            var S = new Blob(['hi']);return 2 === S.size;
          } catch (T) {
            return !1;
          }
        }(),
            A = E && function () {
          try {
            var S = new Blob([new Uint8Array([1, 2])]);return 2 === S.size;
          } catch (T) {
            return !1;
          }
        }(),
            w = C && C.prototype.append && C.prototype.getBlob;;;t.exports = function () {
          if (E) return A ? f.Blob : k;return w ? _ : void 0;
        }();
      }).call(u, function () {
        return this;
      }());
    }, function (t, u, f) {
      function g(k) {
        if (k) return _(k);
      }function _(k) {
        for (var C in g.prototype) {
          k[C] = g.prototype[C];
        }return k;
      }t.exports = g;;g.prototype.on = g.prototype.addEventListener = function (k, C) {
        return this._callbacks = this._callbacks || {}, (this._callbacks['$' + k] = this._callbacks['$' + k] || []).push(C), this;
      }, g.prototype.once = function (k, C) {
        function E() {
          this.off(k, E), C.apply(this, arguments);
        }return E.fn = C, this.on(k, E), this;
      }, g.prototype.off = g.prototype.removeListener = g.prototype.removeAllListeners = g.prototype.removeEventListener = function (k, C) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;var E = this._callbacks['$' + k];if (!E) return this;if (1 == arguments.length) return delete this._callbacks['$' + k], this;var A;for (var w = 0; w < E.length; w++) {
          if (A = E[w], A === C || A.fn === C) {
            E.splice(w, 1);break;
          }
        }return this;
      }, g.prototype.emit = function (k) {
        this._callbacks = this._callbacks || {};var C = [].slice.call(arguments, 1),
            E = this._callbacks['$' + k];if (E) {
          E = E.slice(0);for (var A = 0, w = E.length; A < w; ++A) {
            E[A].apply(this, C);
          }
        }return this;
      }, g.prototype.listeners = function (k) {
        return this._callbacks = this._callbacks || {}, this._callbacks['$' + k] || [];
      }, g.prototype.hasListeners = function (k) {
        return !!this.listeners(k).length;
      };
    }, function (t, u) {
      u.encode = function (f) {
        var g = '';for (var _ in f) {
          f.hasOwnProperty(_) && (g.length && (g += '&'), g += encodeURIComponent(_) + '=' + encodeURIComponent(f[_]));
        }return g;
      }, u.decode = function (f) {
        var g = {},
            _ = f.split('&');for (var k = 0, C = _.length; k < C; k++) {
          var E = _[k].split('=');g[decodeURIComponent(E[0])] = decodeURIComponent(E[1]);
        }return g;
      };
    }, function (t, u) {
      t.exports = function (f, g) {
        var _ = function _() {};_.prototype = g.prototype, f.prototype = new _(), f.prototype.constructor = f;
      };
    }, function (t, u) {
      'use strict';
      function f(S) {
        var T = '';do {
          T = _[S % k] + T, S = Math.floor(S / k);
        } while (0 < S);return T;
      }function g() {
        var S = f(+new Date());return S === w ? S + '.' + f(E++) : (E = 0, w = S);
      }for (var _ = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''), k = 64, C = {}, E = 0, A = 0, w; A < k; A++) {
        C[_[A]] = A;
      }g.encode = f, g.decode = function (T) {
        var R = 0;for (A = 0; A < T.length; A++) {
          R = R * k + C[T.charAt(A)];
        }return R;
      }, t.exports = g;
    }, function (t, u, f) {
      (function (g) {
        function _() {}function k(T) {
          C.call(this, T), this.query = this.query || {}, S || (!g.___eio && (g.___eio = []), S = g.___eio), this.index = S.length;var R = this;S.push(function (P) {
            R.onData(P);
          }), this.query.j = this.index, g.document && g.addEventListener && g.addEventListener('beforeunload', function () {
            R.script && (R.script.onerror = _);
          }, !1);
        }var C = f(25),
            E = f(38);t.exports = k;var A = /\n/g,
            w = /\\n/g,
            S;E(k, C), k.prototype.supportsBinary = !1, k.prototype.doClose = function () {
          this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), C.prototype.doClose.call(this);
        }, k.prototype.doPoll = function () {
          var T = this,
              R = document.createElement('script');this.script && (this.script.parentNode.removeChild(this.script), this.script = null), R.async = !0, R.src = this.uri(), R.onerror = function (O) {
            T.onError('jsonp poll error', O);
          };var P = document.getElementsByTagName('script')[0];P ? P.parentNode.insertBefore(R, P) : (document.head || document.body).appendChild(R), this.script = R;var D = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);D && setTimeout(function () {
            var O = document.createElement('iframe');document.body.appendChild(O), document.body.removeChild(O);
          }, 100);
        }, k.prototype.doWrite = function (T, R) {
          function P() {
            D(), R();
          }function D() {
            if (O.iframe) try {
              O.form.removeChild(O.iframe);
            } catch (q) {
              O.onError('jsonp polling iframe removal error', q);
            }try {
              var U = '<iframe src="javascript:0" name="' + O.iframeId + '">';L = document.createElement(U);
            } catch (q) {
              L = document.createElement('iframe'), L.name = O.iframeId, L.src = 'javascript:0';
            }L.id = O.iframeId, O.form.appendChild(L), O.iframe = L;
          }var O = this;if (!this.form) {
            var B = document.createElement('form'),
                N = document.createElement('textarea'),
                I = this.iframeId = 'eio_iframe_' + this.index,
                L;B.className = 'socketio', B.style.position = 'absolute', B.style.top = '-1000px', B.style.left = '-1000px', B.target = I, B.method = 'POST', B.setAttribute('accept-charset', 'utf-8'), N.name = 'd', B.appendChild(N), document.body.appendChild(B), this.form = B, this.area = N;
          }this.form.action = this.uri(), D(), T = T.replace(w, '\\\n'), this.area.value = T.replace(A, '\\n');try {
            this.form.submit();
          } catch (U) {}this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
            'complete' === O.iframe.readyState && P();
          } : this.iframe.onload = P;
        };
      }).call(u, function () {
        return this;
      }());
    }, function (t, u, f) {
      (function (g) {
        function _(D) {
          var O = D && D.forceBase64;O && (this.supportsBinary = !1), this.perMessageDeflate = D.perMessageDeflate, this.usingBrowserWebSocket = T && !D.forceNode, this.usingBrowserWebSocket || (P = R), k.call(this, D);
        }var k = f(26),
            C = f(27),
            E = f(37),
            A = f(38),
            w = f(39),
            S = f(3)('engine.io-client:websocket'),
            T = g.WebSocket || g.MozWebSocket,
            R;if ('undefined' == typeof window) try {
          R = f(42);
        } catch (D) {}var P = T;P || 'undefined' != typeof window || (P = R), t.exports = _, A(_, k), _.prototype.name = 'websocket', _.prototype.supportsBinary = !0, _.prototype.doOpen = function () {
          if (this.check()) {
            var D = this.uri(),
                O = { agent: this.agent, perMessageDeflate: this.perMessageDeflate };O.pfx = this.pfx, O.key = this.key, O.passphrase = this.passphrase, O.cert = this.cert, O.ca = this.ca, O.ciphers = this.ciphers, O.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (O.headers = this.extraHeaders), this.localAddress && (O.localAddress = this.localAddress);try {
              this.ws = this.usingBrowserWebSocket ? new P(D) : new P(D, void 0, O);
            } catch (B) {
              return this.emit('error', B);
            }void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = 'nodebuffer') : this.ws.binaryType = 'arraybuffer', this.addEventListeners();
          }
        }, _.prototype.addEventListeners = function () {
          var D = this;this.ws.onopen = function () {
            D.onOpen();
          }, this.ws.onclose = function () {
            D.onClose();
          }, this.ws.onmessage = function (O) {
            D.onData(O.data);
          }, this.ws.onerror = function (O) {
            D.onError('websocket error', O);
          };
        }, _.prototype.write = function (D) {
          function O() {
            B.emit('flush'), setTimeout(function () {
              B.writable = !0, B.emit('drain');
            }, 0);
          }var B = this;this.writable = !1;var N = D.length;for (var I = 0, L = N; I < L; I++) {
            (function (U) {
              C.encodePacket(U, B.supportsBinary, function (q) {
                if (!B.usingBrowserWebSocket) {
                  var M = {};if (U.options && (M.compress = U.options.compress), B.perMessageDeflate) {
                    var F = 'string' == typeof q ? g.Buffer.byteLength(q) : q.length;F < B.perMessageDeflate.threshold && (M.compress = !1);
                  }
                }try {
                  B.usingBrowserWebSocket ? B.ws.send(q) : B.ws.send(q, M);
                } catch (H) {
                  S('websocket closed before onclose event');
                }--N || O();
              });
            })(D[I]);
          }
        }, _.prototype.onClose = function () {
          k.prototype.onClose.call(this);
        }, _.prototype.doClose = function () {
          'undefined' != typeof this.ws && this.ws.close();
        }, _.prototype.uri = function () {
          var D = this.query || {},
              O = this.secure ? 'wss' : 'ws',
              B = '';this.port && ('wss' == O && 443 !== +this.port || 'ws' == O && 80 !== +this.port) && (B = ':' + this.port), this.timestampRequests && (D[this.timestampParam] = w()), this.supportsBinary || (D.b64 = 1), D = E.encode(D), D.length && (D = '?' + D);var N = -1 !== this.hostname.indexOf(':');return O + '://' + (N ? '[' + this.hostname + ']' : this.hostname) + B + this.path + D;
        }, _.prototype.check = function () {
          return !!P && !('__initialize' in P && this.name === _.prototype.name);
        };
      }).call(u, function () {
        return this;
      }());
    }, function (t, u) {}, function (t, u) {
      var f = [].indexOf;t.exports = function (g, _) {
        if (f) return g.indexOf(_);for (var k = 0; k < g.length; ++k) {
          if (g[k] === _) return k;
        }return -1;
      };
    }, function (t, u) {
      (function (f) {
        var g = /^[\],:{}\s]*$/,
            _ = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            k = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            C = /(?:^|:|,)(?:\s*\[)+/g,
            E = /^\s+/,
            A = /\s+$/;t.exports = function (S) {
          return 'string' == typeof S && S ? (S = S.replace(E, '').replace(A, ''), f.JSON && JSON.parse ? JSON.parse(S) : g.test(S.replace(_, '@').replace(k, ']').replace(C, '')) ? new Function('return ' + S)() : void 0) : null;
        };
      }).call(u, function () {
        return this;
      }());
    }, function (t, u, f) {
      'use strict';
      function g(P, D, O) {
        this.io = P, this.nsp = D, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, O && O.query && (this.query = O.query), this.io.autoConnect && this.open();
      }var _ = f(7),
          k = f(36),
          C = f(46),
          E = f(47),
          A = f(48),
          w = f(3)('socket.io-client:socket'),
          S = f(49);t.exports = u = g;var T = { connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1 },
          R = k.prototype.emit;k(g.prototype), g.prototype.subEvents = function () {
        if (!this.subs) {
          var P = this.io;this.subs = [E(P, 'open', A(this, 'onopen')), E(P, 'packet', A(this, 'onpacket')), E(P, 'close', A(this, 'onclose'))];
        }
      }, g.prototype.open = g.prototype.connect = function () {
        return this.connected ? this : (this.subEvents(), this.io.open(), 'open' === this.io.readyState && this.onopen(), this.emit('connecting'), this);
      }, g.prototype.send = function () {
        var P = C(arguments);return P.unshift('message'), this.emit.apply(this, P), this;
      }, g.prototype.emit = function (P) {
        if (T.hasOwnProperty(P)) return R.apply(this, arguments), this;var D = C(arguments),
            O = _.EVENT;S(D) && (O = _.BINARY_EVENT);var B = { type: O, data: D };return B.options = {}, B.options.compress = !this.flags || !1 !== this.flags.compress, 'function' == typeof D[D.length - 1] && (w('emitting packet with ack id %d', this.ids), this.acks[this.ids] = D.pop(), B.id = this.ids++), this.connected ? this.packet(B) : this.sendBuffer.push(B), delete this.flags, this;
      }, g.prototype.packet = function (P) {
        P.nsp = this.nsp, this.io.packet(P);
      }, g.prototype.onopen = function () {
        w('transport is open - connecting'), '/' !== this.nsp && (this.query ? this.packet({ type: _.CONNECT, query: this.query }) : this.packet({ type: _.CONNECT }));
      }, g.prototype.onclose = function (P) {
        w('close (%s)', P), this.connected = !1, this.disconnected = !0, delete this.id, this.emit('disconnect', P);
      }, g.prototype.onpacket = function (P) {
        if (P.nsp === this.nsp) switch (P.type) {case _.CONNECT:
            this.onconnect();break;case _.EVENT:
            this.onevent(P);break;case _.BINARY_EVENT:
            this.onevent(P);break;case _.ACK:
            this.onack(P);break;case _.BINARY_ACK:
            this.onack(P);break;case _.DISCONNECT:
            this.ondisconnect();break;case _.ERROR:
            this.emit('error', P.data);}
      }, g.prototype.onevent = function (P) {
        var D = P.data || [];w('emitting event %j', D), null != P.id && (w('attaching ack callback to event'), D.push(this.ack(P.id))), this.connected ? R.apply(this, D) : this.receiveBuffer.push(D);
      }, g.prototype.ack = function (P) {
        var D = this,
            O = !1;return function () {
          if (!O) {
            O = !0;var B = C(arguments);w('sending ack %j', B);var N = S(B) ? _.BINARY_ACK : _.ACK;D.packet({ type: N, id: P, data: B });
          }
        };
      }, g.prototype.onack = function (P) {
        var D = this.acks[P.id];'function' == typeof D ? (w('calling ack %s with %j', P.id, P.data), D.apply(this, P.data), delete this.acks[P.id]) : w('bad ack %s', P.id);
      }, g.prototype.onconnect = function () {
        this.connected = !0, this.disconnected = !1, this.emit('connect'), this.emitBuffered();
      }, g.prototype.emitBuffered = function () {
        var P;for (P = 0; P < this.receiveBuffer.length; P++) {
          R.apply(this, this.receiveBuffer[P]);
        }for (this.receiveBuffer = [], P = 0; P < this.sendBuffer.length; P++) {
          this.packet(this.sendBuffer[P]);
        }this.sendBuffer = [];
      }, g.prototype.ondisconnect = function () {
        w('server disconnect (%s)', this.nsp), this.destroy(), this.onclose('io server disconnect');
      }, g.prototype.destroy = function () {
        if (this.subs) {
          for (var P = 0; P < this.subs.length; P++) {
            this.subs[P].destroy();
          }this.subs = null;
        }this.io.destroy(this);
      }, g.prototype.close = g.prototype.disconnect = function () {
        return this.connected && (w('performing disconnect (%s)', this.nsp), this.packet({ type: _.DISCONNECT })), this.destroy(), this.connected && this.onclose('io client disconnect'), this;
      }, g.prototype.compress = function (P) {
        return this.flags = this.flags || {}, this.flags.compress = P, this;
      };
    }, function (t, u) {
      t.exports = function (g, _) {
        var k = [];_ = _ || 0;for (var C = _ || 0; C < g.length; C++) {
          k[C - _] = g[C];
        }return k;
      };
    }, function (t, u) {
      'use strict';
      t.exports = function (g, _, k) {
        return g.on(_, k), { destroy: function destroy() {
            g.removeListener(_, k);
          } };
      };
    }, function (t, u) {
      var f = [].slice;t.exports = function (g, _) {
        if ('string' == typeof _ && (_ = g[_]), 'function' != typeof _) throw new Error('bind() requires a function');var k = f.call(arguments, 2);return function () {
          return _.apply(g, k.concat(f.call(arguments)));
        };
      };
    }, function (t, u, f) {
      (function (g) {
        var _ = f(50);t.exports = function (C) {
          function E(A) {
            if (!A) return !1;if (g.Buffer && g.Buffer.isBuffer && g.Buffer.isBuffer(A) || g.ArrayBuffer && A instanceof ArrayBuffer || g.Blob && A instanceof Blob || g.File && A instanceof File) return !0;if (_(A)) {
              for (var w = 0; w < A.length; w++) {
                if (E(A[w])) return !0;
              }
            } else if (A && 'object' == (typeof A === 'undefined' ? 'undefined' : babelHelpers.typeof(A))) for (var S in A.toJSON && 'function' == typeof A.toJSON && (A = A.toJSON()), A) {
              if (Object.prototype.hasOwnProperty.call(A, S) && E(A[S])) return !0;
            }return !1;
          }return E(C);
        };
      }).call(u, function () {
        return this;
      }());
    }, function (t, u) {
      t.exports = Array.isArray || function (f) {
        return '[object Array]' == Object.prototype.toString.call(f);
      };
    }, function (t, u) {
      function f(g) {
        g = g || {}, this.ms = g.min || 100, this.max = g.max || 10000, this.factor = g.factor || 2, this.jitter = 0 < g.jitter && 1 >= g.jitter ? g.jitter : 0, this.attempts = 0;
      }t.exports = f, f.prototype.duration = function () {
        var g = this.ms * Math.pow(this.factor, this.attempts++);if (this.jitter) {
          var _ = Math.random(),
              k = Math.floor(_ * this.jitter * g);g = 0 == (1 & Math.floor(10 * _)) ? g - k : g + k;
        }return 0 | Math.min(g, this.max);
      }, f.prototype.reset = function () {
        this.attempts = 0;
      }, f.prototype.setMin = function (g) {
        this.ms = g;
      }, f.prototype.setMax = function (g) {
        this.max = g;
      }, f.prototype.setJitter = function (g) {
        this.jitter = g;
      };
    }]);
  });;var globals = {};'undefined' != typeof window && (globals.window = window), 'undefined' != typeof document && (globals.document = document);var compatibilityModeData_ = void 0,
      uniqueIdCounter_ = 1;var UID_PROPERTY = 'core_' + (1e9 * Math.random() >>> 0);function abstractMethod() {
    throw Error('Unimplemented abstract method');
  }function collectSuperClassesProperty(t, u) {
    for (var f = [t[u]]; t.__proto__ && !t.__proto__.isPrototypeOf(Function);) {
      t = t.__proto__, f.push(t[u]);
    }return f;
  }function disableCompatibilityMode() {
    compatibilityModeData_ = void 0;
  }function enableCompatibilityMode() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    compatibilityModeData_ = t;
  }function getCompatibilityModeData() {
    return void 0 === compatibilityModeData_ && 'undefined' != typeof window && window.__METAL_COMPATIBILITY__ && enableCompatibilityMode(window.__METAL_COMPATIBILITY__), compatibilityModeData_;
  }function getFunctionName(t) {
    if (!t.name) {
      var u = t.toString();t.name = u.substring(9, u.indexOf('('));
    }return t.name;
  }function getUid(t, u) {
    if (t) {
      var f = t[UID_PROPERTY];return u && !t.hasOwnProperty(UID_PROPERTY) && (f = null), f || (t[UID_PROPERTY] = uniqueIdCounter_++);
    }return uniqueIdCounter_++;
  }function identityFunction(t) {
    return t;
  }function isBoolean(t) {
    return 'boolean' == typeof t;
  }function isDef(t) {
    return t !== void 0;
  }function isDefAndNotNull(t) {
    return isDef(t) && !isNull(t);
  }function isDocument(t) {
    return t && 'object' == (typeof t === 'undefined' ? 'undefined' : babelHelpers.typeof(t)) && 9 === t.nodeType;
  }function isElement(t) {
    return t && 'object' == (typeof t === 'undefined' ? 'undefined' : babelHelpers.typeof(t)) && 1 === t.nodeType;
  }function isFunction(t) {
    return 'function' == typeof t;
  }function isNull(t) {
    return null === t;
  }function isNumber(t) {
    return 'number' == typeof t;
  }function isWindow(t) {
    return null !== t && t === t.window;
  }function isObject(t) {
    var u = typeof t === 'undefined' ? 'undefined' : babelHelpers.typeof(t);return 'object' == u && null !== t || 'function' == u;
  }function isPromise(t) {
    return t && 'object' == (typeof t === 'undefined' ? 'undefined' : babelHelpers.typeof(t)) && 'function' == typeof t.then;
  }function isString(t) {
    return 'string' == typeof t || t instanceof String;
  }function mergeSuperClassesProperty(t, u, f) {
    var g = u + '_MERGED';if (t.hasOwnProperty(g)) return !1;var _ = collectSuperClassesProperty(t, u);return f && (_ = f(_)), t[g] = _, !0;
  }function nullFunction() {}var core$2 = Object.freeze({ UID_PROPERTY: UID_PROPERTY, abstractMethod: abstractMethod, collectSuperClassesProperty: collectSuperClassesProperty, disableCompatibilityMode: disableCompatibilityMode, enableCompatibilityMode: enableCompatibilityMode, getCompatibilityModeData: getCompatibilityModeData, getFunctionName: getFunctionName, getUid: getUid, identityFunction: identityFunction, isBoolean: isBoolean, isDef: isDef, isDefAndNotNull: isDefAndNotNull, isDocument: isDocument, isElement: isElement, isFunction: isFunction, isNull: isNull, isNumber: isNumber, isWindow: isWindow, isObject: isObject, isPromise: isPromise, isString: isString, mergeSuperClassesProperty: mergeSuperClassesProperty, nullFunction: nullFunction });
  var array = function () {
    function array() {
      babelHelpers.classCallCheck(this, array);
    }

    babelHelpers.createClass(array, null, [{
      key: 'equal',
      value: function equal(t, u) {
        if (t.length !== u.length) return !1;for (var f = 0; f < t.length; f++) {
          if (t[f] !== u[f]) return !1;
        }return !0;
      }
    }, {
      key: 'firstDefinedValue',
      value: function firstDefinedValue(t) {
        for (var u = 0; u < t.length; u++) {
          if (t[u] !== void 0) return t[u];
        }
      }
    }, {
      key: 'flatten',
      value: function flatten(t, u) {
        var f = u || [];for (var g = 0; g < t.length; g++) {
          Array.isArray(t[g]) ? array.flatten(t[g], f) : f.push(t[g]);
        }return f;
      }
    }, {
      key: 'remove',
      value: function remove(t, u) {
        var f = t.indexOf(u),
            g;return (g = 0 <= f) && array.removeAt(t, f), g;
      }
    }, {
      key: 'removeAt',
      value: function removeAt(t, u) {
        return 1 === Array.prototype.splice.call(t, u, 1).length;
      }
    }, {
      key: 'slice',
      value: function slice(t, u, f) {
        var g = [],
            _ = isDef(f) ? f : t.length;for (var k = u; k < _; k++) {
          g.push(t[k]);
        }return g;
      }
    }]);
    return array;
  }();

  var async = {};async.throwException = function (t) {
    async.nextTick(function () {
      throw t;
    });
  }, async.run = function (t, u) {
    async.run.workQueueScheduled_ || (async.nextTick(async.run.processWorkQueue), async.run.workQueueScheduled_ = !0), async.run.workQueue_.push(new async.run.WorkItem_(t, u));
  }, async.run.workQueueScheduled_ = !1, async.run.workQueue_ = [], async.run.processWorkQueue = function () {
    for (; async.run.workQueue_.length;) {
      var t = async.run.workQueue_;async.run.workQueue_ = [];for (var u = 0; u < t.length; u++) {
        var f = t[u];try {
          f.fn.call(f.scope);
        } catch (g) {
          async.throwException(g);
        }
      }
    }async.run.workQueueScheduled_ = !1;
  }, async.run.WorkItem_ = function (t, u) {
    this.fn = t, this.scope = u;
  }, async.nextTick = function (t, u) {
    var f = t;return u && (f = t.bind(u)), f = async.nextTick.wrapCallback_(f), 'function' == typeof setImmediate ? void setImmediate(f) : void (!async.nextTick.setImmediate_ && (async.nextTick.setImmediate_ = async.nextTick.getSetImmediateEmulator_()), async.nextTick.setImmediate_(f));
  }, async.nextTick.setImmediate_ = null, async.nextTick.getSetImmediateEmulator_ = function () {
    var t;if ('function' == typeof MessageChannel && (t = MessageChannel), 'undefined' == typeof t && 'undefined' != typeof window && window.postMessage && window.addEventListener && (t = function t() {
      var _ = document.createElement('iframe');_.style.display = 'none', _.src = '', document.documentElement.appendChild(_);var k = _.contentWindow,
          C = k.document;C.open(), C.write(''), C.close();var E = 'callImmediate' + Math.random(),
          A = k.location.protocol + '//' + k.location.host,
          w = function (S) {
        S.origin !== A && S.data !== E || this.port1.onmessage();
      }.bind(this);k.addEventListener('message', w, !1), this.port1 = {}, this.port2 = { postMessage: function postMessage() {
          k.postMessage(E, A);
        } };
    }), 'undefined' != typeof t) {
      var u = new t(),
          f = {},
          g = f;return u.port1.onmessage = function () {
        f = f.next;var _ = f.cb;f.cb = null, _();
      }, function (_) {
        g.next = { cb: _ }, g = g.next, u.port2.postMessage(0);
      };
    }return 'undefined' != typeof document && 'onreadystatechange' in document.createElement('script') ? function (_) {
      var k = document.createElement('script');k.onreadystatechange = function () {
        k.onreadystatechange = null, k.parentNode.removeChild(k), k = null, _(), _ = null;
      }, document.documentElement.appendChild(k);
    } : function (_) {
      setTimeout(_, 0);
    };
  }, async.nextTick.wrapCallback_ = function (t) {
    return t;
  };
  var Disposable = function () {
    function Disposable() {
      babelHelpers.classCallCheck(this, Disposable);
      this.disposed_ = !1;
    }

    babelHelpers.createClass(Disposable, [{
      key: 'dispose',
      value: function dispose() {
        this.disposed_ || (this.disposeInternal(), this.disposed_ = !0);
      }
    }, {
      key: 'disposeInternal',
      value: function disposeInternal() {}
    }, {
      key: 'isDisposed',
      value: function isDisposed() {
        return this.disposed_;
      }
    }]);
    return Disposable;
  }();

  var string = function () {
    function string() {
      babelHelpers.classCallCheck(this, string);
    }

    babelHelpers.createClass(string, null, [{
      key: 'caseInsensitiveCompare',
      value: function caseInsensitiveCompare(t, u) {
        var f = (t + '').toLowerCase(),
            g = (u + '').toLowerCase();if (f < g) return -1;return f === g ? 0 : 1;
      }
    }, {
      key: 'collapseBreakingSpaces',
      value: function collapseBreakingSpaces(t) {
        return t.replace(/[\t\r\n ]+/g, ' ').replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, '');
      }
    }, {
      key: 'escapeRegex',
      value: function escapeRegex(t) {
        return (t + '').replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08');
      }
    }, {
      key: 'getRandomString',
      value: function getRandomString() {
        var t = 2147483648;return Math.floor(Math.random() * t).toString(36) + Math.abs(Math.floor(Math.random() * t) ^ Date.now()).toString(36);
      }
    }, {
      key: 'hashCode',
      value: function hashCode(t) {
        var u = 0;for (var f = 0, g = t.length; f < g; f++) {
          u = 31 * u + t.charCodeAt(f), u %= 4294967296;
        }return u;
      }
    }, {
      key: 'replaceInterval',
      value: function replaceInterval(t, u, f, g) {
        return t.substring(0, u) + g + t.substring(f);
      }
    }]);
    return string;
  }();

  var Embodied = function () {
    function Embodied() {
      babelHelpers.classCallCheck(this, Embodied);
      this.body_ = {};
    }

    babelHelpers.createClass(Embodied, [{
      key: 'body',
      value: function body() {
        return this.body_;
      }
    }, {
      key: 'toString',
      value: function toString() {
        return JSON.stringify(this.body());
      }
    }], [{
      key: 'toBody',
      value: function toBody(t) {
        return t instanceof Embodied ? t.body() : t;
      }
    }]);
    return Embodied;
  }();

  var FilterBody = function () {
    function FilterBody(t, u, f) {
      babelHelpers.classCallCheck(this, FilterBody);
      var g = { operator: isDef(f) ? u : '=' },
          _ = isDef(f) ? f : u;isDefAndNotNull(_) && (_ instanceof Embodied && (_ = _.body()), g.value = _), isDefAndNotNull(t) ? this.createBody_(t, g) : this.createBody_('and', []);
    }

    babelHelpers.createClass(FilterBody, [{
      key: 'add',
      value: function add(t, u) {
        u ? this.addArrayOperator_(t, u) : this.createBody_(t, this.body_);
      }
    }, {
      key: 'addArrayOperator_',
      value: function addArrayOperator_(t, u) {
        this.body_[t] instanceof Array || this.createBody_(t, [this.body_]), this.body_[t].push(u.body());
      }
    }, {
      key: 'addMany',
      value: function addMany(t) {
        for (var _len = arguments.length, u = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          u[_key - 1] = arguments[_key];
        }

        for (var f = 0; f < u.length; f++) {
          this.add(t, u[f]);
        }
      }
    }, {
      key: 'createBody_',
      value: function createBody_(t, u) {
        this.body_ = {}, this.body_[t] = u;
      }
    }, {
      key: 'getObject',
      value: function getObject() {
        return this.body_;
      }
    }]);
    return FilterBody;
  }();

  var Geo = function () {
    function Geo() {
      babelHelpers.classCallCheck(this, Geo);
    }

    babelHelpers.createClass(Geo, null, [{
      key: 'boundingBox',
      value: function boundingBox(t, u) {
        return new Geo.BoundingBox(t, u);
      }
    }, {
      key: 'circle',
      value: function circle(t, u) {
        return new Geo.Circle(t, u);
      }
    }, {
      key: 'line',
      value: function line() {
        for (var _len2 = arguments.length, t = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          t[_key2] = arguments[_key2];
        }

        return new (Function.prototype.bind.apply(Geo.Line, [null].concat(t)))();
      }
    }, {
      key: 'point',
      value: function point(t, u) {
        return new Geo.Point(t, u);
      }
    }, {
      key: 'polygon',
      value: function polygon() {
        for (var _len3 = arguments.length, t = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          t[_key3] = arguments[_key3];
        }

        return new (Function.prototype.bind.apply(Geo.Polygon, [null].concat(t)))();
      }
    }]);
    return Geo;
  }();

  var Point = function (_Embodied) {
    babelHelpers.inherits(Point, _Embodied);

    function Point(t, u) {
      var _this;

      babelHelpers.classCallCheck(this, Point);
      (_this = babelHelpers.possibleConstructorReturn(this, (Point.__proto__ || Object.getPrototypeOf(Point)).call(this)), _this), _this.body_ = [t, u];return _this;
    }

    return Point;
  }(Embodied);

  Geo.Point = Point;
  var Line = function (_Embodied2) {
    babelHelpers.inherits(Line, _Embodied2);

    function Line() {
      var _this2;

      babelHelpers.classCallCheck(this, Line);

      for (var _len4 = arguments.length, t = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        t[_key4] = arguments[_key4];
      }

      (_this2 = babelHelpers.possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this)), _this2), _this2.body_ = { type: 'linestring', coordinates: t.map(function (u) {
          return Embodied.toBody(u);
        }) };return _this2;
    }

    return Line;
  }(Embodied);

  Geo.Line = Line;
  var BoundingBox = function (_Embodied3) {
    babelHelpers.inherits(BoundingBox, _Embodied3);

    function BoundingBox(t, u) {
      var _this3;

      babelHelpers.classCallCheck(this, BoundingBox);
      (_this3 = babelHelpers.possibleConstructorReturn(this, (BoundingBox.__proto__ || Object.getPrototypeOf(BoundingBox)).call(this)), _this3), _this3.body_ = { type: 'envelope', coordinates: [Embodied.toBody(t), Embodied.toBody(u)] };return _this3;
    }

    babelHelpers.createClass(BoundingBox, [{
      key: 'getPoints',
      value: function getPoints() {
        return this.body_.coordinates;
      }
    }]);
    return BoundingBox;
  }(Embodied);

  Geo.BoundingBox = BoundingBox;
  var Circle = function (_Embodied4) {
    babelHelpers.inherits(Circle, _Embodied4);

    function Circle(t, u) {
      var _this4;

      babelHelpers.classCallCheck(this, Circle);
      (_this4 = babelHelpers.possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this)), _this4), _this4.body_ = { type: 'circle', coordinates: Embodied.toBody(t), radius: u };return _this4;
    }

    babelHelpers.createClass(Circle, [{
      key: 'getCenter',
      value: function getCenter() {
        return this.body_.coordinates;
      }
    }, {
      key: 'getRadius',
      value: function getRadius() {
        return this.body_.radius;
      }
    }]);
    return Circle;
  }(Embodied);

  Geo.Circle = Circle;
  var Polygon = function (_Embodied5) {
    babelHelpers.inherits(Polygon, _Embodied5);

    function Polygon() {
      var _this6;

      var _this5;

      babelHelpers.classCallCheck(this, Polygon);
      (_this5 = babelHelpers.possibleConstructorReturn(this, (Polygon.__proto__ || Object.getPrototypeOf(Polygon)).call(this)), _this5), _this5.body_ = { type: 'polygon', coordinates: [] }, (_this6 = _this5).addCoordinates_.apply(_this6, arguments);return _this5;
    }

    babelHelpers.createClass(Polygon, [{
      key: 'addCoordinates_',
      value: function addCoordinates_() {
        for (var _len5 = arguments.length, t = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          t[_key5] = arguments[_key5];
        }

        this.body_.coordinates.push(t.map(function (u) {
          return Embodied.toBody(u);
        }));
      }
    }, {
      key: 'hole',
      value: function hole() {
        return this.addCoordinates_.apply(this, arguments), this;
      }
    }]);
    return Polygon;
  }(Embodied);

  Geo.Polygon = Polygon;
  var Range = function (_Embodied6) {
    babelHelpers.inherits(Range, _Embodied6);

    function Range(t, u) {
      var _this7;

      babelHelpers.classCallCheck(this, Range);
      (_this7 = babelHelpers.possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).call(this)), _this7), isDefAndNotNull(t) && (_this7.body_.from = t), isDefAndNotNull(u) && (_this7.body_.to = u);return _this7;
    }

    babelHelpers.createClass(Range, null, [{
      key: 'from',
      value: function from(t) {
        return new Range(t);
      }
    }, {
      key: 'range',
      value: function range(t, u) {
        return new Range(t, u);
      }
    }, {
      key: 'to',
      value: function to(t) {
        return new Range(null, t);
      }
    }]);
    return Range;
  }(Embodied);

  var Filter = function (_Embodied7) {
    babelHelpers.inherits(Filter, _Embodied7);

    function Filter(t, u, f) {
      var _this8;

      babelHelpers.classCallCheck(this, Filter);
      (_this8 = babelHelpers.possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this)), _this8), _this8.body_ = new FilterBody(t, u, f);return _this8;
    }

    babelHelpers.createClass(Filter, [{
      key: 'add',
      value: function add(t, u, f, g) {
        var _ = u ? Filter.toFilter(u, f, g) : null;return this.body_.add(t, _), this;
      }
    }, {
      key: 'addMany',
      value: function addMany(t) {
        var _body_;

        for (var _len6 = arguments.length, u = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          u[_key6 - 1] = arguments[_key6];
        }

        return (_body_ = this.body_).addMany.apply(_body_, [t].concat(u)), this;
      }
    }, {
      key: 'and',
      value: function and(t, u, f) {
        return this.add('and', t, u, f);
      }
    }, {
      key: 'body',
      value: function body() {
        return this.body_.getObject();
      }
    }, {
      key: 'or',
      value: function or(t, u, f) {
        return this.add('or', t, u, f);
      }
    }], [{
      key: 'any',
      value: function any(t) {
        var u = Array.prototype.slice.call(arguments, 1);return 1 === u.length && u[0] instanceof Array && (u = u[0]), new Filter(t, 'any', u);
      }
    }, {
      key: 'boundingBox',
      value: function boundingBox(t, u, f) {
        return u instanceof Geo.BoundingBox ? Filter.polygon.apply(Filter, [t].concat(babelHelpers.toConsumableArray(u.getPoints()))) : Filter.polygon(t, u, f);
      }
    }, {
      key: 'distance',
      value: function distance(t, u, f) {
        var g = u,
            _ = f;return u instanceof Geo.Circle ? (g = u.getCenter(), _ = Range.to(u.getRadius())) : !(f instanceof Range) && (_ = Range.to(f)), Filter.distanceInternal_(t, g, _);
      }
    }, {
      key: 'distanceInternal_',
      value: function distanceInternal_(t, u, f) {
        var g = { location: Embodied.toBody(u) };return f = f.body(), f.from && (g.min = f.from), f.to && (g.max = f.to), Filter.field(t, 'gd', g);
      }
    }, {
      key: 'equal',
      value: function equal(t, u) {
        return new Filter(t, '=', u);
      }
    }, {
      key: 'exists',
      value: function exists(t) {
        return Filter.field(t, 'exists', null);
      }
    }, {
      key: 'fuzzy',
      value: function fuzzy(t, u, f) {
        return Filter.fuzzyInternal_('fuzzy', t, u, f);
      }
    }, {
      key: 'fuzzyInternal_',
      value: function fuzzyInternal_(t, u, f, g) {
        var _ = isString(f),
            k = { query: _ ? f : u },
            C = _ ? g : f;C && (k.fuzziness = C);var E = _ ? u : Filter.ALL;return Filter.field(E, t, k);
      }
    }, {
      key: 'gt',
      value: function gt(t, u) {
        return new Filter(t, '>', u);
      }
    }, {
      key: 'gte',
      value: function gte(t, u) {
        return new Filter(t, '>=', u);
      }
    }, {
      key: 'match',
      value: function match(t, u) {
        var f = isString(u) ? t : Filter.ALL,
            g = isString(u) ? u : t;return Filter.field(f, 'match', g);
      }
    }, {
      key: 'missing',
      value: function missing(t) {
        return Filter.field(t, 'missing', null);
      }
    }, {
      key: 'phrase',
      value: function phrase(t, u) {
        var f = isString(u) ? t : Filter.ALL,
            g = isString(u) ? u : t;return Filter.field(f, 'phrase', g);
      }
    }, {
      key: 'polygon',
      value: function polygon(t) {
        for (var _len7 = arguments.length, u = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
          u[_key7 - 1] = arguments[_key7];
        }

        return u = u.map(function (f) {
          return Embodied.toBody(f);
        }), Filter.field(t, 'gp', u);
      }
    }, {
      key: 'prefix',
      value: function prefix(t, u) {
        var f = u ? t : Filter.ALL,
            g = u ? u : t;return Filter.field(f, 'prefix', g);
      }
    }, {
      key: 'range',
      value: function range(t, u, f) {
        var g = u;return g instanceof Range || (g = Range.range(u, f)), Filter.field(t, 'range', g);
      }
    }, {
      key: 'regex',
      value: function regex(t, u) {
        return new Filter(t, '~', u);
      }
    }, {
      key: 'shape',
      value: function shape(t) {
        for (var _len8 = arguments.length, u = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
          u[_key8 - 1] = arguments[_key8];
        }

        u = u.map(function (g) {
          return Embodied.toBody(g);
        });var f = { type: 'geometrycollection', geometries: u };return Filter.field(t, 'gs', f);
      }
    }, {
      key: 'similar',
      value: function similar(t, u) {
        var f = isString(u) ? t : Filter.ALL,
            g = { query: isString(u) ? u : t };return Filter.field(f, 'similar', g);
      }
    }, {
      key: 'lt',
      value: function lt(t, u) {
        return new Filter(t, '<', u);
      }
    }, {
      key: 'lte',
      value: function lte(t, u) {
        return new Filter(t, '<=', u);
      }
    }, {
      key: 'none',
      value: function none(t) {
        var u = Array.prototype.slice.call(arguments, 1);return 1 === u.length && u[0] instanceof Array && (u = u[0]), new Filter(t, 'none', u);
      }
    }, {
      key: 'notEqual',
      value: function notEqual(t, u) {
        return new Filter(t, '!=', u);
      }
    }, {
      key: 'not',
      value: function not(t, u, f) {
        return Filter.toFilter(t, u, f).add('not');
      }
    }, {
      key: 'field',
      value: function field(t, u, f) {
        return new Filter(t, u, f);
      }
    }, {
      key: 'toFilter',
      value: function toFilter(t, u, f) {
        var g = t;return g instanceof Filter || (g = Filter.field(t, u, f)), g;
      }
    }]);
    return Filter;
  }(Embodied);

  Filter.ALL = '*';function parseFromAnchor(t) {
    var u = document.createElement('a');return u.href = t, { hash: u.hash, hostname: u.hostname, password: u.password, pathname: '/' === u.pathname[0] ? u.pathname : '/' + u.pathname, port: u.port, protocol: u.protocol, search: u.search, username: u.username };
  }function parse(t) {
    return isFunction(URL) && URL.length ? new URL(t) : parseFromAnchor(t);
  }var create = Object.create;
  var MultiMap = function (_Disposable) {
    babelHelpers.inherits(MultiMap, _Disposable);

    function MultiMap() {
      var _this9;

      babelHelpers.classCallCheck(this, MultiMap);
      (_this9 = babelHelpers.possibleConstructorReturn(this, (MultiMap.__proto__ || Object.getPrototypeOf(MultiMap)).call(this)), _this9), _this9.keys = create(null), _this9.values = create(null);return _this9;
    }

    babelHelpers.createClass(MultiMap, [{
      key: 'add',
      value: function add(t, u) {
        return this.keys[t.toLowerCase()] = t, this.values[t.toLowerCase()] = this.values[t.toLowerCase()] || [], this.values[t.toLowerCase()].push(u), this;
      }
    }, {
      key: 'clear',
      value: function clear() {
        return this.keys = create(null), this.values = create(null), this;
      }
    }, {
      key: 'contains',
      value: function contains(t) {
        return t.toLowerCase() in this.values;
      }
    }, {
      key: 'disposeInternal',
      value: function disposeInternal() {
        this.values = null;
      }
    }, {
      key: 'get',
      value: function get(t) {
        var u = this.values[t.toLowerCase()];if (u) return u[0];
      }
    }, {
      key: 'getAll',
      value: function getAll(t) {
        return this.values[t.toLowerCase()];
      }
    }, {
      key: 'isEmpty',
      value: function isEmpty() {
        return 0 === this.size();
      }
    }, {
      key: 'names',
      value: function names() {
        var _this10 = this;

        return Object.keys(this.values).map(function (t) {
          return _this10.keys[t];
        });
      }
    }, {
      key: 'remove',
      value: function remove(t) {
        return delete this.keys[t.toLowerCase()], delete this.values[t.toLowerCase()], this;
      }
    }, {
      key: 'set',
      value: function set(t, u) {
        return this.keys[t.toLowerCase()] = t, this.values[t.toLowerCase()] = [u], this;
      }
    }, {
      key: 'size',
      value: function size() {
        return this.names().length;
      }
    }, {
      key: 'toString',
      value: function toString() {
        return JSON.stringify(this.values);
      }
    }], [{
      key: 'fromObject',
      value: function fromObject(t) {
        var u = new MultiMap(),
            f = Object.keys(t);for (var g = 0; g < f.length; g++) {
          u.set(f[g], t[f[g]]);
        }return u;
      }
    }]);
    return MultiMap;
  }(Disposable);

  var assertChildHasNoParent = function assertChildHasNoParent(t) {
    if (t.getParent()) throw new Error('Cannot add child with parent.');
  };var parseFn_ = parse;
  var Uri = function () {
    function Uri() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      babelHelpers.classCallCheck(this, Uri);
      this.url = Uri.parse(this.maybeAddProtocolAndHostname_(t));
    }

    babelHelpers.createClass(Uri, [{
      key: 'addParametersFromMultiMap',
      value: function addParametersFromMultiMap(t) {
        var _this11 = this;

        return t.names().forEach(function (u) {
          t.getAll(u).forEach(function (f) {
            _this11.addParameterValue(u, f);
          });
        }), this;
      }
    }, {
      key: 'addParameterValue',
      value: function addParameterValue(t, u) {
        return this.ensureQueryInitialized_(), isDef(u) && (u = u + ''), this.query.add(t, u), this;
      }
    }, {
      key: 'addParameterValues',
      value: function addParameterValues(t, u) {
        var _this12 = this;

        return u.forEach(function (f) {
          return _this12.addParameterValue(t, f);
        }), this;
      }
    }, {
      key: 'ensureQueryInitialized_',
      value: function ensureQueryInitialized_() {
        var _this13 = this;

        if (!this.query) {
          this.query = new MultiMap();var t = this.url.search;t && t.substring(1).split('&').forEach(function (u) {
            var _u$split = u.split('='),
                _u$split2 = babelHelpers.slicedToArray(_u$split, 2),
                f = _u$split2[0],
                g = _u$split2[1];

            isDef(g) && (g = Uri.urlDecode(g)), _this13.addParameterValue(f, g);
          });
        }
      }
    }, {
      key: 'getHash',
      value: function getHash() {
        return this.url.hash || '';
      }
    }, {
      key: 'getHost',
      value: function getHost() {
        var t = this.getHostname();if (t) {
          var u = this.getPort();u && '80' !== u && (t += ':' + u);
        }return t;
      }
    }, {
      key: 'getHostname',
      value: function getHostname() {
        var t = this.url.hostname;return t === Uri.HOSTNAME_PLACEHOLDER ? '' : t;
      }
    }, {
      key: 'getOrigin',
      value: function getOrigin() {
        var t = this.getHost();return t ? this.getProtocol() + '//' + t : '';
      }
    }, {
      key: 'getParameterValue',
      value: function getParameterValue(t) {
        return this.ensureQueryInitialized_(), this.query.get(t);
      }
    }, {
      key: 'getParameterValues',
      value: function getParameterValues(t) {
        return this.ensureQueryInitialized_(), this.query.getAll(t);
      }
    }, {
      key: 'getParameterNames',
      value: function getParameterNames() {
        return this.ensureQueryInitialized_(), this.query.names();
      }
    }, {
      key: 'getPathname',
      value: function getPathname() {
        return this.url.pathname;
      }
    }, {
      key: 'getPort',
      value: function getPort() {
        return this.url.port;
      }
    }, {
      key: 'getProtocol',
      value: function getProtocol() {
        return this.url.protocol;
      }
    }, {
      key: 'getSearch',
      value: function getSearch() {
        var _this14 = this;

        var t = '',
            u = '';return this.getParameterNames().forEach(function (f) {
          _this14.getParameterValues(f).forEach(function (g) {
            u += f, isDef(g) && (u += '=' + encodeURIComponent(g)), u += '&';
          });
        }), u = u.slice(0, -1), u && (t += '?' + u), t;
      }
    }, {
      key: 'hasParameter',
      value: function hasParameter(t) {
        return this.ensureQueryInitialized_(), this.query.contains(t);
      }
    }, {
      key: 'makeUnique',
      value: function makeUnique() {
        return this.setParameterValue(Uri.RANDOM_PARAM, string.getRandomString()), this;
      }
    }, {
      key: 'maybeAddProtocolAndHostname_',
      value: function maybeAddProtocolAndHostname_(t) {
        var u = t;if (-1 === t.indexOf('://') && 0 !== t.indexOf('javascript:')) switch (u = Uri.DEFAULT_PROTOCOL, ('/' !== t[0] || '/' !== t[1]) && (u += '//'), t.charAt(0)) {case '.':case '?':case '#':
            u += Uri.HOSTNAME_PLACEHOLDER, u += '/', u += t;break;case '':case '/':
            '/' !== t[1] && (u += Uri.HOSTNAME_PLACEHOLDER), u += t;break;default:
            u += t;}return u;
      }
    }, {
      key: 'removeParameter',
      value: function removeParameter(t) {
        return this.ensureQueryInitialized_(), this.query.remove(t), this;
      }
    }, {
      key: 'removeUnique',
      value: function removeUnique() {
        return this.removeParameter(Uri.RANDOM_PARAM), this;
      }
    }, {
      key: 'setHash',
      value: function setHash(t) {
        return this.url.hash = t, this;
      }
    }, {
      key: 'setHostname',
      value: function setHostname(t) {
        return this.url.hostname = t, this;
      }
    }, {
      key: 'setParameterValue',
      value: function setParameterValue(t, u) {
        return this.removeParameter(t), this.addParameterValue(t, u), this;
      }
    }, {
      key: 'setParameterValues',
      value: function setParameterValues(t, u) {
        var _this15 = this;

        return this.removeParameter(t), u.forEach(function (f) {
          return _this15.addParameterValue(t, f);
        }), this;
      }
    }, {
      key: 'setPathname',
      value: function setPathname(t) {
        return this.url.pathname = t, this;
      }
    }, {
      key: 'setPort',
      value: function setPort(t) {
        return this.url.port = t, this;
      }
    }, {
      key: 'setProtocol',
      value: function setProtocol(t) {
        return this.url.protocol = t, ':' !== this.url.protocol[this.url.protocol.length - 1] && (this.url.protocol += ':'), this;
      }
    }, {
      key: 'toString',
      value: function toString() {
        var t = '',
            u = this.getHost();return u && (t += this.getProtocol() + '//'), t += u + this.getPathname() + this.getSearch() + this.getHash(), t;
      }
    }], [{
      key: 'getParseFn',
      value: function getParseFn() {
        return parseFn_;
      }
    }, {
      key: 'normalizeObject',
      value: function normalizeObject(t) {
        var u = t.pathname ? t.pathname.length : 0;return 1 < u && '/' === t.pathname[u - 1] && (t.pathname = t.pathname.substr(0, u - 1)), t;
      }
    }, {
      key: 'parse',
      value: function parse(t) {
        return Uri.normalizeObject(parseFn_(t));
      }
    }, {
      key: 'setParseFn',
      value: function setParseFn(t) {
        parseFn_ = t;
      }
    }, {
      key: 'joinPaths',
      value: function joinPaths(t) {
        for (var _len9 = arguments.length, u = Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
          u[_key9 - 1] = arguments[_key9];
        }

        return '/' === t.charAt(t.length - 1) && (t = t.substring(0, t.length - 1)), u = u.map(function (f) {
          return '/' === f.charAt(0) ? f.substring(1) : f;
        }), [t].concat(u).join('/').replace(/\/$/, '');
      }
    }, {
      key: 'urlDecode',
      value: function urlDecode(t) {
        return decodeURIComponent(t.replace(/\+/g, ' '));
      }
    }]);
    return Uri;
  }();

  Uri.DEFAULT_PROTOCOL = 'http:', Uri.HOSTNAME_PLACEHOLDER = 'hostname' + Date.now(), Uri.RANDOM_PARAM = 'zx';function assertBrowserEnvironment() {
    if (!globals.window) throw new Error('Sign-in type not supported in this environment');
  }function assertDefAndNotNull(t, u) {
    if (!isDefAndNotNull(t)) throw new Error(u);
  }function assertFunction(t, u) {
    if (!isFunction(t)) throw new Error(u);
  }function assertObject(t, u) {
    if (!isObject(t)) throw new Error(u);
  }function assertResponseSucceeded(t) {
    if (!t.succeeded()) throw t.body();return t;
  }function assertUserSignedIn(t) {
    if (!isDefAndNotNull(t)) throw new Error('You must be signed-in to perform this operation');
  }function assertUriWithNoPath(t, u) {
    var f = new Uri(t);if (1 < f.getPathname().length) throw new Error(u);
  }
  var Auth = function () {
    function Auth(t) {
      var u = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      babelHelpers.classCallCheck(this, Auth);
      this.token = isString(u) ? null : t, this.email = isString(u) ? t : null, this.password = u, this.createdAt = null, this.id = null, this.name = null, this.photoUrl = null, this.wedeployClient = null;
    }

    babelHelpers.createClass(Auth, [{
      key: 'getCreatedAt',
      value: function getCreatedAt() {
        return this.createdAt;
      }
    }, {
      key: 'getEmail',
      value: function getEmail() {
        return this.email;
      }
    }, {
      key: 'getId',
      value: function getId() {
        return this.id;
      }
    }, {
      key: 'getName',
      value: function getName() {
        return this.name;
      }
    }, {
      key: 'getPassword',
      value: function getPassword() {
        return this.password;
      }
    }, {
      key: 'getPhotoUrl',
      value: function getPhotoUrl() {
        return this.photoUrl;
      }
    }, {
      key: 'getToken',
      value: function getToken() {
        return this.token;
      }
    }, {
      key: 'hasCreatedAt',
      value: function hasCreatedAt() {
        return isDefAndNotNull(this.createdAt);
      }
    }, {
      key: 'hasEmail',
      value: function hasEmail() {
        return isDefAndNotNull(this.email);
      }
    }, {
      key: 'hasId',
      value: function hasId() {
        return isDefAndNotNull(this.id);
      }
    }, {
      key: 'hasName',
      value: function hasName() {
        return isDefAndNotNull(this.name);
      }
    }, {
      key: 'hasPassword',
      value: function hasPassword() {
        return isDefAndNotNull(this.password);
      }
    }, {
      key: 'hasPhotoUrl',
      value: function hasPhotoUrl() {
        return isDefAndNotNull(this.photoUrl);
      }
    }, {
      key: 'hasToken',
      value: function hasToken() {
        return isDefAndNotNull(this.token);
      }
    }, {
      key: 'setCreatedAt',
      value: function setCreatedAt(t) {
        this.createdAt = t;
      }
    }, {
      key: 'setEmail',
      value: function setEmail(t) {
        this.email = t;
      }
    }, {
      key: 'setId',
      value: function setId(t) {
        this.id = t;
      }
    }, {
      key: 'setName',
      value: function setName(t) {
        this.name = t;
      }
    }, {
      key: 'setPassword',
      value: function setPassword(t) {
        this.password = t;
      }
    }, {
      key: 'setPhotoUrl',
      value: function setPhotoUrl(t) {
        this.photoUrl = t;
      }
    }, {
      key: 'setToken',
      value: function setToken(t) {
        this.token = t;
      }
    }, {
      key: 'setWedeployClient',
      value: function setWedeployClient(t) {
        this.wedeployClient = t;
      }
    }, {
      key: 'updateUser',
      value: function updateUser(t) {
        return assertObject(t, 'User data must be specified as object'), this.wedeployClient.url(this.wedeployClient.authUrl_).path('/users', this.getId().toString()).auth(this).patch(t).then(function (u) {
          return assertResponseSucceeded(u);
        });
      }
    }, {
      key: 'deleteUser',
      value: function deleteUser() {
        return assertDefAndNotNull(this.getId(), 'Cannot delete user without id'), this.wedeployClient.url(this.wedeployClient.authUrl_).path('/users', this.getId().toString()).auth(this).delete().then(function (t) {
          return assertResponseSucceeded(t);
        });
      }
    }], [{
      key: 'create',
      value: function create(t, u) {
        return new Auth(t, u);
      }
    }]);
    return Auth;
  }();

  var ApiHelper = function () {
    function ApiHelper(t) {
      babelHelpers.classCallCheck(this, ApiHelper);
      assertDefAndNotNull(t, 'WeDeploy client reference must be specified'), this.wedeployClient = t;
    }

    babelHelpers.createClass(ApiHelper, [{
      key: 'auth',
      value: function auth(t, u) {
        return this.helperAuthScope = t, this.helperAuthScope instanceof Auth || (this.helperAuthScope = Auth.create(t, u)), this;
      }
    }]);
    return ApiHelper;
  }();

  var AuthProvider = function () {
    function AuthProvider() {
      babelHelpers.classCallCheck(this, AuthProvider);
      this.provider = null, this.providerScope = null, this.redirectUri = null, this.scope = null;
    }

    babelHelpers.createClass(AuthProvider, [{
      key: 'hasProvider',
      value: function hasProvider() {
        return isDefAndNotNull(this.provider);
      }
    }, {
      key: 'hasProviderScope',
      value: function hasProviderScope() {
        return isDefAndNotNull(this.providerScope);
      }
    }, {
      key: 'hasRedirectUri',
      value: function hasRedirectUri() {
        return isDefAndNotNull(this.redirectUri);
      }
    }, {
      key: 'hasScope',
      value: function hasScope() {
        return isDefAndNotNull(this.scope);
      }
    }, {
      key: 'makeAuthorizationUrl',
      value: function makeAuthorizationUrl(t) {
        var u = new Uri(t);return u.setPathname('/oauth/authorize'), this.hasProvider() && u.setParameterValue('provider', this.getProvider()), this.hasProviderScope() && u.setParameterValue('provider_scope', this.getProviderScope()), this.hasRedirectUri() && u.setParameterValue('redirect_uri', this.getRedirectUri()), this.hasScope() && u.setParameterValue('scope', this.getScope()), u.toString();
      }
    }, {
      key: 'getProvider',
      value: function getProvider() {
        return this.provider;
      }
    }, {
      key: 'getProviderScope',
      value: function getProviderScope() {
        return this.providerScope;
      }
    }, {
      key: 'getRedirectUri',
      value: function getRedirectUri() {
        return this.redirectUri;
      }
    }, {
      key: 'getScope',
      value: function getScope() {
        return this.scope;
      }
    }, {
      key: 'setProviderScope',
      value: function setProviderScope(t) {
        assertStringIfDefAndNotNull(t, 'Provider scope must be a string'), this.providerScope = t;
      }
    }, {
      key: 'setRedirectUri',
      value: function setRedirectUri(t) {
        assertStringIfDefAndNotNull(t, 'Redirect uri must be a string'), this.redirectUri = t;
      }
    }, {
      key: 'setScope',
      value: function setScope(t) {
        assertStringIfDefAndNotNull(t, 'Scope must be a string'), this.scope = t;
      }
    }]);
    return AuthProvider;
  }();

  function assertStringIfDefAndNotNull(t, u) {
    if (isDefAndNotNull(t) && !isString(t)) throw new Error(u);
  }
  var FacebookAuthProvider = function (_AuthProvider) {
    babelHelpers.inherits(FacebookAuthProvider, _AuthProvider);

    function FacebookAuthProvider() {
      var _this16;

      babelHelpers.classCallCheck(this, FacebookAuthProvider);
      (_this16 = babelHelpers.possibleConstructorReturn(this, (FacebookAuthProvider.__proto__ || Object.getPrototypeOf(FacebookAuthProvider)).call(this)), _this16), _this16.provider = FacebookAuthProvider.PROVIDER;return _this16;
    }

    return FacebookAuthProvider;
  }(AuthProvider);

  FacebookAuthProvider.PROVIDER = 'facebook';
  var GithubAuthProvider = function (_AuthProvider2) {
    babelHelpers.inherits(GithubAuthProvider, _AuthProvider2);

    function GithubAuthProvider() {
      var _this17;

      babelHelpers.classCallCheck(this, GithubAuthProvider);
      (_this17 = babelHelpers.possibleConstructorReturn(this, (GithubAuthProvider.__proto__ || Object.getPrototypeOf(GithubAuthProvider)).call(this)), _this17), _this17.provider = GithubAuthProvider.PROVIDER;return _this17;
    }

    return GithubAuthProvider;
  }(AuthProvider);

  GithubAuthProvider.PROVIDER = 'github';
  var GoogleAuthProvider = function (_AuthProvider3) {
    babelHelpers.inherits(GoogleAuthProvider, _AuthProvider3);

    function GoogleAuthProvider() {
      var _this18;

      babelHelpers.classCallCheck(this, GoogleAuthProvider);
      (_this18 = babelHelpers.possibleConstructorReturn(this, (GoogleAuthProvider.__proto__ || Object.getPrototypeOf(GoogleAuthProvider)).call(this)), _this18), _this18.provider = GoogleAuthProvider.PROVIDER;return _this18;
    }

    return GoogleAuthProvider;
  }(AuthProvider);

  GoogleAuthProvider.PROVIDER = 'google';
  var StorageMechanism = function () {
    function StorageMechanism() {
      babelHelpers.classCallCheck(this, StorageMechanism);
    }

    babelHelpers.createClass(StorageMechanism, [{
      key: 'clear',
      value: function clear() {
        throw Error('Unimplemented abstract method');
      }
    }, {
      key: 'set',
      value: function set(t, u) {
        throw Error('Unimplemented abstract method');
      }
    }, {
      key: 'get',
      value: function get(t) {
        throw Error('Unimplemented abstract method');
      }
    }, {
      key: 'keys',
      value: function keys() {
        throw Error('Unimplemented abstract method');
      }
    }, {
      key: 'remove',
      value: function remove(t) {
        throw Error('Unimplemented abstract method');
      }
    }, {
      key: 'size',
      value: function size() {
        throw Error('Unimplemented abstract method');
      }
    }], [{
      key: 'isSupported',
      value: function isSupported() {
        return !0;
      }
    }]);
    return StorageMechanism;
  }();

  var Storage = function () {
    function Storage(t) {
      babelHelpers.classCallCheck(this, Storage);
      assertMechanismDefAndNotNull(t), assertMechanismIntanceOf(t), this.mechanism = t;
    }

    babelHelpers.createClass(Storage, [{
      key: 'clear',
      value: function clear() {
        this.mechanism.clear();
      }
    }, {
      key: 'set',
      value: function set(t, u) {
        return core$2.isDef(u) ? void this.mechanism.set(t, JSON.stringify(u)) : void this.mechanism.remove(t);
      }
    }, {
      key: 'get',
      value: function get(t) {
        var u;try {
          u = this.mechanism.get(t);
        } catch (f) {
          return void 0;
        }if (core$2.isNull(u)) return void 0;try {
          return JSON.parse(u);
        } catch (f) {
          throw Storage.ErrorCode.INVALID_VALUE;
        }
      }
    }, {
      key: 'keys',
      value: function keys() {
        return this.mechanism.keys();
      }
    }, {
      key: 'remove',
      value: function remove(t) {
        this.mechanism.remove(t);
      }
    }, {
      key: 'size',
      value: function size() {
        return this.mechanism.size();
      }
    }, {
      key: 'values',
      value: function values() {
        var _this19 = this;

        return this.keys().map(function (t) {
          return _this19.get(t);
        });
      }
    }]);
    return Storage;
  }();

  Storage.ErrorCode = { INVALID_VALUE: 'Storage: Invalid value was encountered' };function assertMechanismDefAndNotNull(t) {
    if (!core$2.isDefAndNotNull(t)) throw Error('Storage mechanism is required');
  }function assertMechanismIntanceOf(t) {
    if (!(t instanceof StorageMechanism)) throw Error('Storage mechanism must me an implementation of StorageMechanism');
  }
  var LocalStorageMechanism = function (_StorageMechanism) {
    babelHelpers.inherits(LocalStorageMechanism, _StorageMechanism);

    function LocalStorageMechanism() {
      babelHelpers.classCallCheck(this, LocalStorageMechanism);
      return babelHelpers.possibleConstructorReturn(this, (LocalStorageMechanism.__proto__ || Object.getPrototypeOf(LocalStorageMechanism)).apply(this, arguments));
    }

    babelHelpers.createClass(LocalStorageMechanism, [{
      key: 'storage',
      value: function storage() {
        return LocalStorageMechanism.globals.localStorage;
      }
    }, {
      key: 'clear',
      value: function clear() {
        this.storage().clear();
      }
    }, {
      key: 'keys',
      value: function keys() {
        return Object.keys(this.storage());
      }
    }, {
      key: 'get',
      value: function get(t) {
        return this.storage().getItem(t);
      }
    }, {
      key: 'remove',
      value: function remove(t) {
        this.storage().removeItem(t);
      }
    }, {
      key: 'set',
      value: function set(t, u) {
        this.storage().setItem(t, u);
      }
    }, {
      key: 'size',
      value: function size() {
        return this.storage().length;
      }
    }], [{
      key: 'isSupported',
      value: function isSupported() {
        return 'undefined' != typeof window;
      }
    }]);
    return LocalStorageMechanism;
  }(StorageMechanism);

  LocalStorageMechanism.isSupported() && (LocalStorageMechanism.globals = { localStorage: window.localStorage });
  var AuthApiHelper = function (_ApiHelper) {
    babelHelpers.inherits(AuthApiHelper, _ApiHelper);

    function AuthApiHelper(t) {
      var _this21;

      babelHelpers.classCallCheck(this, AuthApiHelper);
      (_this21 = babelHelpers.possibleConstructorReturn(this, (AuthApiHelper.__proto__ || Object.getPrototypeOf(AuthApiHelper)).call(this, t)), _this21), _this21.currentUser = null, _this21.onSignInCallback = null, _this21.onSignOutCallback = null, LocalStorageMechanism.isSupported() && (_this21.storage = new Storage(new LocalStorageMechanism())), _this21.processSignIn_(), _this21.provider = { Facebook: FacebookAuthProvider, Google: GoogleAuthProvider, Github: GithubAuthProvider };return _this21;
    }

    babelHelpers.createClass(AuthApiHelper, [{
      key: 'createUser',
      value: function createUser(t) {
        var _this22 = this;

        return assertObject(t, 'User data must be specified as object'), this.wedeployClient.url(this.wedeployClient.authUrl_).path('/users').post(t).then(function (u) {
          return assertResponseSucceeded(u);
        }).then(function (u) {
          return _this22.makeUserAuthFromData(u.body());
        });
      }
    }, {
      key: 'getHrefWithoutFragment_',
      value: function getHrefWithoutFragment_() {
        var t = globals.window.location;return t.protocol + '//' + t.host + t.pathname + (t.search ? t.search : '');
      }
    }, {
      key: 'getRedirectAccessToken_',
      value: function getRedirectAccessToken_() {
        if (globals.window) {
          var t = globals.window.location.hash;if (0 === t.indexOf('#access_token=')) return t.substring(14);
        }return null;
      }
    }, {
      key: 'getUser',
      value: function getUser(t) {
        var _this23 = this;

        return assertDefAndNotNull(t, 'User userId must be specified'), assertUserSignedIn(this.currentUser), this.wedeployClient.url(this.wedeployClient.authUrl_).path('/users', t).auth(this.resolveAuthScope().token).get().then(function (u) {
          return assertResponseSucceeded(u);
        }).then(function (u) {
          return _this23.makeUserAuthFromData(u.body());
        });
      }
    }, {
      key: 'loadCurrentUser',
      value: function loadCurrentUser(t) {
        var _this24 = this;

        return assertDefAndNotNull(t, 'User token must be specified'), this.wedeployClient.url(this.wedeployClient.authUrl_).path('/user').auth(t).get().then(function (u) {
          var f = u.body();return f.token = t, _this24.currentUser = _this24.makeUserAuthFromData(f), _this24.storage && _this24.storage.set('currentUser', f), _this24.currentUser;
        });
      }
    }, {
      key: 'makeUserAuthFromData',
      value: function makeUserAuthFromData(t) {
        var u = new Auth();return u.setWedeployClient(this.wedeployClient), u.setCreatedAt(t.createdAt), u.setEmail(t.email), u.setId(t.id), u.setName(t.name), u.setPhotoUrl(t.photoUrl), u.setToken(t.token), u;
      }
    }, {
      key: 'maybeCallOnSignInCallback_',
      value: function maybeCallOnSignInCallback_() {
        this.onSignInCallback && this.onSignInCallback.call(this, this.currentUser);
      }
    }, {
      key: 'maybeCallOnSignOutCallback_',
      value: function maybeCallOnSignOutCallback_() {
        this.onSignOutCallback && this.onSignOutCallback.call(this, this.currentUser);
      }
    }, {
      key: 'onSignIn',
      value: function onSignIn(t) {
        assertFunction(t, 'Sign-in callback must be a function'), this.onSignInCallback = t;
      }
    }, {
      key: 'onSignOut',
      value: function onSignOut(t) {
        assertFunction(t, 'Sign-out callback must be a function'), this.onSignOutCallback = t;
      }
    }, {
      key: 'processSignIn_',
      value: function processSignIn_() {
        var _this25 = this;

        var t = this.getRedirectAccessToken_();if (t) return this.removeUrlFragmentCompletely_(), void this.loadCurrentUser(t).then(function () {
          return _this25.maybeCallOnSignInCallback_();
        });var u = this.storage && this.storage.get('currentUser');u && (this.currentUser = this.makeUserAuthFromData(u));
      }
    }, {
      key: 'removeUrlFragmentCompletely_',
      value: function removeUrlFragmentCompletely_() {
        globals.window.history.pushState({}, document.title, window.location.pathname + window.location.search);
      }
    }, {
      key: 'resolveAuthScope',
      value: function resolveAuthScope() {
        return this.helperAuthScope ? this.helperAuthScope : this.currentUser;
      }
    }, {
      key: 'sendPasswordResetEmail',
      value: function sendPasswordResetEmail(t) {
        return assertDefAndNotNull(t, 'Send password reset email must be specified'), this.wedeployClient.url(this.wedeployClient.authUrl_).path('/user/recover').param('email', t).post().then(function (u) {
          return assertResponseSucceeded(u);
        });
      }
    }, {
      key: 'signInWithEmailAndPassword',
      value: function signInWithEmailAndPassword(t, u) {
        var _this26 = this;

        return assertDefAndNotNull(t, 'Sign-in email must be specified'), assertDefAndNotNull(u, 'Sign-in password must be specified'), this.wedeployClient.url(this.wedeployClient.authUrl_).path('/oauth/token').param('grant_type', 'password').param('username', t).param('password', u).get().then(function (f) {
          return assertResponseSucceeded(f);
        }).then(function (f) {
          return _this26.loadCurrentUser(f.body().access_token);
        }).then(function (f) {
          return _this26.maybeCallOnSignInCallback_(), f;
        });
      }
    }, {
      key: 'signInWithRedirect',
      value: function signInWithRedirect(t) {
        assertBrowserEnvironment(), assertDefAndNotNull(t, 'Sign-in provider must be defined'), assertSupportedProvider(t), t.hasRedirectUri() || t.setRedirectUri(this.getHrefWithoutFragment_()), globals.window.location.href = t.makeAuthorizationUrl(this.wedeployClient.authUrl_);
      }
    }, {
      key: 'signOut',
      value: function signOut() {
        var _this27 = this;

        return assertUserSignedIn(this.currentUser), this.wedeployClient.url(this.wedeployClient.authUrl_).path('/oauth/revoke').param('token', this.currentUser.token).get().then(function (t) {
          return assertResponseSucceeded(t);
        }).then(function (t) {
          return _this27.maybeCallOnSignOutCallback_(), _this27.unloadCurrentUser_(), t;
        });
      }
    }, {
      key: 'unloadCurrentUser_',
      value: function unloadCurrentUser_() {
        this.currentUser = null, this.storage && this.storage.remove('currentUser');
      }
    }]);
    return AuthApiHelper;
  }(ApiHelper);

  function assertSupportedProvider(t) {
    switch (t.constructor.PROVIDER) {case FacebookAuthProvider.PROVIDER:case GithubAuthProvider.PROVIDER:case GoogleAuthProvider.PROVIDER:
        break;default:
        throw new Error('Sign-in provider not supported');}
  }
  var Aggregation = function () {
    function Aggregation(t, u, f) {
      babelHelpers.classCallCheck(this, Aggregation);
      this.field_ = t, this.operator_ = u, this.value_ = f;
    }

    babelHelpers.createClass(Aggregation, [{
      key: 'getField',
      value: function getField() {
        return this.field_;
      }
    }, {
      key: 'getOperator',
      value: function getOperator() {
        return this.operator_;
      }
    }, {
      key: 'getValue',
      value: function getValue() {
        return this.value_;
      }
    }], [{
      key: 'avg',
      value: function avg(t) {
        return Aggregation.field(t, 'avg');
      }
    }, {
      key: 'count',
      value: function count(t) {
        return Aggregation.field(t, 'count');
      }
    }, {
      key: 'distance',
      value: function distance(t, u) {
        for (var _len10 = arguments.length, f = Array(_len10 > 2 ? _len10 - 2 : 0), _key10 = 2; _key10 < _len10; _key10++) {
          f[_key10 - 2] = arguments[_key10];
        }

        return new (Function.prototype.bind.apply(Aggregation.DistanceAggregation, [null].concat([t, u], f)))();
      }
    }, {
      key: 'extendedStats',
      value: function extendedStats(t) {
        return Aggregation.field(t, 'extendedStats');
      }
    }, {
      key: 'histogram',
      value: function histogram(t, u) {
        return new Aggregation(t, 'histogram', u);
      }
    }, {
      key: 'max',
      value: function max(t) {
        return Aggregation.field(t, 'max');
      }
    }, {
      key: 'min',
      value: function min(t) {
        return Aggregation.field(t, 'min');
      }
    }, {
      key: 'missing',
      value: function missing(t) {
        return Aggregation.field(t, 'missing');
      }
    }, {
      key: 'field',
      value: function field(t, u) {
        return new Aggregation(t, u);
      }
    }, {
      key: 'range',
      value: function range(t) {
        for (var _len11 = arguments.length, u = Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
          u[_key11 - 1] = arguments[_key11];
        }

        return new (Function.prototype.bind.apply(Aggregation.RangeAggregation, [null].concat([t], u)))();
      }
    }, {
      key: 'stats',
      value: function stats(t) {
        return Aggregation.field(t, 'stats');
      }
    }, {
      key: 'sum',
      value: function sum(t) {
        return Aggregation.field(t, 'sum');
      }
    }, {
      key: 'terms',
      value: function terms(t) {
        return Aggregation.field(t, 'terms');
      }
    }]);
    return Aggregation;
  }();

  var DistanceAggregation = function (_Aggregation) {
    babelHelpers.inherits(DistanceAggregation, _Aggregation);

    function DistanceAggregation(t, u) {
      var _this28;

      babelHelpers.classCallCheck(this, DistanceAggregation);

      for (var _len12 = arguments.length, f = Array(_len12 > 2 ? _len12 - 2 : 0), _key12 = 2; _key12 < _len12; _key12++) {
        f[_key12 - 2] = arguments[_key12];
      }

      (_this28 = babelHelpers.possibleConstructorReturn(this, (DistanceAggregation.__proto__ || Object.getPrototypeOf(DistanceAggregation)).call(this, t, 'geoDistance', {})), _this28), _this28.value_.location = Embodied.toBody(u), _this28.value_.ranges = f.map(function (g) {
        return g.body();
      });return _this28;
    }

    babelHelpers.createClass(DistanceAggregation, [{
      key: 'range',
      value: function range(t, u) {
        var f = t;return f instanceof Range || (f = Range.range(t, u)), this.value_.ranges.push(f.body()), this;
      }
    }, {
      key: 'unit',
      value: function unit(t) {
        return this.value_.unit = t, this;
      }
    }]);
    return DistanceAggregation;
  }(Aggregation);

  Aggregation.DistanceAggregation = DistanceAggregation;
  var RangeAggregation = function (_Aggregation2) {
    babelHelpers.inherits(RangeAggregation, _Aggregation2);

    function RangeAggregation(t) {
      var _this29;

      babelHelpers.classCallCheck(this, RangeAggregation);

      for (var _len13 = arguments.length, u = Array(_len13 > 1 ? _len13 - 1 : 0), _key13 = 1; _key13 < _len13; _key13++) {
        u[_key13 - 1] = arguments[_key13];
      }

      (_this29 = babelHelpers.possibleConstructorReturn(this, (RangeAggregation.__proto__ || Object.getPrototypeOf(RangeAggregation)).call(this, t, 'range')), _this29), _this29.value_ = u.map(function (f) {
        return f.body();
      });return _this29;
    }

    babelHelpers.createClass(RangeAggregation, [{
      key: 'range',
      value: function range(t, u) {
        var f = t;return f instanceof Range || (f = Range.range(t, u)), this.value_.push(f.body()), this;
      }
    }]);
    return RangeAggregation;
  }(Aggregation);

  Aggregation.RangeAggregation = RangeAggregation;
  var Query = function (_Embodied8) {
    babelHelpers.inherits(Query, _Embodied8);

    function Query() {
      babelHelpers.classCallCheck(this, Query);
      return babelHelpers.possibleConstructorReturn(this, (Query.__proto__ || Object.getPrototypeOf(Query)).apply(this, arguments));
    }

    babelHelpers.createClass(Query, [{
      key: 'aggregate',
      value: function aggregate(t, u, f) {
        var g = u;g instanceof Aggregation || (g = Aggregation.field(u, f));var _ = g.getField(),
            k = {};return k[_] = { name: t, operator: g.getOperator() }, isDefAndNotNull(g.getValue()) && (k[_].value = g.getValue()), this.body_.aggregation || (this.body_.aggregation = []), this.body_.aggregation.push(k), this;
      }
    }, {
      key: 'count',
      value: function count() {
        return this.type('count');
      }
    }, {
      key: 'fetch',
      value: function fetch() {
        return this.type('fetch');
      }
    }, {
      key: 'filter',
      value: function filter(t, u, f) {
        var g = Filter.toFilter(t, u, f);return this.body_.filter || (this.body_.filter = []), this.body_.filter.push(g.body()), this;
      }
    }, {
      key: 'offset',
      value: function offset(t) {
        return this.body_.offset = t, this;
      }
    }, {
      key: 'highlight',
      value: function highlight(t) {
        return this.body_.highlight || (this.body_.highlight = []), this.body_.highlight.push(t), this;
      }
    }, {
      key: 'limit',
      value: function limit(t) {
        return this.body_.limit = t, this;
      }
    }, {
      key: 'search',
      value: function search(t, u, f) {
        var g = t;return f ? g = Filter.field(t, u, f) : u ? g = Filter.match(t, u) : !(g instanceof Filter) && (g = Filter.match(t)), this.body_.search || (this.body_.search = []), isDefAndNotNull(t) ? this.body_.search.push(g.body()) : this.body_.search.push({}), this;
      }
    }, {
      key: 'sort',
      value: function sort(t, u) {
        this.body_.sort || (this.body_.sort = []);var f = {};return f[t] = u || 'asc', this.body_.sort.push(f), this;
      }
    }, {
      key: 'type',
      value: function type(t) {
        return this.body_.type = t, this;
      }
    }], [{
      key: 'aggregate',
      value: function aggregate(t, u, f) {
        return new Query().aggregate(t, u, f);
      }
    }, {
      key: 'count',
      value: function count() {
        return new Query().type('count');
      }
    }, {
      key: 'fetch',
      value: function fetch() {
        return new Query().type('fetch');
      }
    }, {
      key: 'filter',
      value: function filter(t, u, f) {
        return new Query().filter(t, u, f);
      }
    }, {
      key: 'offset',
      value: function offset(t) {
        return new Query().offset(t);
      }
    }, {
      key: 'highlight',
      value: function highlight(t) {
        return new Query().highlight(t);
      }
    }, {
      key: 'limit',
      value: function limit(t) {
        return new Query().limit(t);
      }
    }, {
      key: 'search',
      value: function search(t, u, f) {
        return new Query().search(t, u, f);
      }
    }, {
      key: 'sort',
      value: function sort(t, u) {
        return new Query().sort(t, u);
      }
    }, {
      key: 'type',
      value: function type(t) {
        return new Query().type(t);
      }
    }]);
    return Query;
  }(Embodied);

  var DataApiHelper = function (_ApiHelper2) {
    babelHelpers.inherits(DataApiHelper, _ApiHelper2);

    function DataApiHelper(t) {
      var _this31;

      babelHelpers.classCallCheck(this, DataApiHelper);
      (_this31 = babelHelpers.possibleConstructorReturn(this, (DataApiHelper.__proto__ || Object.getPrototypeOf(DataApiHelper)).call(this, t)), _this31), _this31.isSearch_ = !1;return _this31;
    }

    babelHelpers.createClass(DataApiHelper, [{
      key: 'assertIsSearchWithFilter_',
      value: function assertIsSearchWithFilter_() {
        if (this.isSearch_ && !isDef(this.filter_)) throw Error('It\'s required to have a condition before using an or \'search()\' for the first time.');
      }
    }, {
      key: 'where',
      value: function where(t, u, f) {
        return this.getOrCreateFilter_().and(t, u, f), this;
      }
    }, {
      key: 'or',
      value: function or(t, u, f) {
        if (0 === this.getOrCreateFilter_().body().and.length) throw Error('It\'s required to have a condition before using an \'or()\' for the first time.');return this.getOrCreateFilter_().or(t, u, f), this;
      }
    }, {
      key: 'none',
      value: function none(t) {
        for (var _len14 = arguments.length, u = Array(_len14 > 1 ? _len14 - 1 : 0), _key14 = 1; _key14 < _len14; _key14++) {
          u[_key14 - 1] = arguments[_key14];
        }

        return this.where(Filter.none(t, u));
      }
    }, {
      key: 'match',
      value: function match(t, u) {
        return this.where(Filter.match(t, u));
      }
    }, {
      key: 'similar',
      value: function similar(t, u) {
        return this.where(Filter.similar(t, u));
      }
    }, {
      key: 'lt',
      value: function lt(t, u) {
        return this.where(Filter.lt(t, u));
      }
    }, {
      key: 'lte',
      value: function lte(t, u) {
        return this.where(Filter.lte(t, u));
      }
    }, {
      key: 'any',
      value: function any(t) {
        for (var _len15 = arguments.length, u = Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
          u[_key15 - 1] = arguments[_key15];
        }

        return this.where(Filter.any(t, u));
      }
    }, {
      key: 'boundingBox',
      value: function boundingBox(t, u, f) {
        return this.where(Filter.boundingBox(t, u, f));
      }
    }, {
      key: 'distance',
      value: function distance(t, u, f) {
        return this.where(Filter.distance(t, u, f));
      }
    }, {
      key: 'range',
      value: function range(t, u, f) {
        return this.where(Filter.range(t, u, f));
      }
    }, {
      key: 'limit',
      value: function limit(t) {
        return this.getOrCreateQuery_().limit(t), this;
      }
    }, {
      key: 'offset',
      value: function offset(t) {
        return this.getOrCreateQuery_().offset(t), this;
      }
    }, {
      key: 'highlight',
      value: function highlight(t) {
        return this.getOrCreateQuery_().highlight(t), this;
      }
    }, {
      key: 'aggregate',
      value: function aggregate(t, u, f) {
        return this.getOrCreateQuery_().aggregate(t, u, f), this;
      }
    }, {
      key: 'count',
      value: function count() {
        return this.getOrCreateQuery_().type('count'), this;
      }
    }, {
      key: 'orderBy',
      value: function orderBy(t, u) {
        return this.getOrCreateQuery_().sort(t, u), this;
      }
    }, {
      key: 'create',
      value: function create(t, u) {
        return assertDefAndNotNull(t, 'Collection key must be specified.'), assertObject(u, 'Data can\'t be empty.'), this.wedeployClient.url(this.wedeployClient.dataUrl_).auth(this.helperAuthScope).path(t).post(u).then(function (f) {
          return assertResponseSucceeded(f);
        }).then(function (f) {
          return f.body();
        });
      }
    }, {
      key: 'update',
      value: function update(t, u) {
        return assertDefAndNotNull(t, 'Document key must be specified.'), assertObject(u, 'Data must be specified.'), this.wedeployClient.url(this.wedeployClient.dataUrl_).auth(this.helperAuthScope).path(t).put(u).then(function (f) {
          return assertResponseSucceeded(f);
        }).then(function (f) {
          return f.body();
        });
      }
    }, {
      key: 'delete',
      value: function _delete(t) {
        return assertDefAndNotNull(t, 'Document/Field/Collection key must be specified'), this.wedeployClient.url(this.wedeployClient.dataUrl_).auth(this.helperAuthScope).path(t).delete().then(function (u) {
          return assertResponseSucceeded(u);
        }).then(function () {
          return void 0;
        });
      }
    }, {
      key: 'get',
      value: function get(t) {
        return assertDefAndNotNull(t, 'Document/Field/Collection key must be specified'), this.wedeployClient.url(this.wedeployClient.dataUrl_).auth(this.helperAuthScope).path(t).get(this.processAndResetQueryState()).then(function (u) {
          return assertResponseSucceeded(u);
        }).then(function (u) {
          return u.body();
        });
      }
    }, {
      key: 'search',
      value: function search(t) {
        return assertDefAndNotNull(t, 'Document/Field/Collection key must be specified'), this.isSearch_ = !0, this.wedeployClient.url(this.wedeployClient.dataUrl_).auth(this.helperAuthScope).path(t).get(this.processAndResetQueryState()).then(function (u) {
          return assertResponseSucceeded(u);
        }).then(function (u) {
          return u.body();
        });
      }
    }, {
      key: 'watch',
      value: function watch(t, u) {
        return assertDefAndNotNull(t, 'Collection key must be specified'), this.wedeployClient.url(this.wedeployClient.dataUrl_).auth(this.helperAuthScope).path(t).watch(this.processAndResetQueryState(), u);
      }
    }, {
      key: 'getOrCreateFilter_',
      value: function getOrCreateFilter_() {
        return this.filter_ || (this.filter_ = new Filter()), this.filter_;
      }
    }, {
      key: 'getOrCreateQuery_',
      value: function getOrCreateQuery_() {
        return this.query_ || (this.query_ = new Query()), this.query_;
      }
    }, {
      key: 'processAndResetQueryState',
      value: function processAndResetQueryState() {
        this.assertIsSearchWithFilter_(), isDefAndNotNull(this.filter_) && (this.isSearch_ ? this.getOrCreateQuery_().search(this.getOrCreateFilter_()) : this.getOrCreateQuery_().filter(this.getOrCreateFilter_()));var t = this.query_;return this.query_ = null, this.filter_ = null, this.isSearch_ = !1, t;
      }
    }]);
    return DataApiHelper;
  }(ApiHelper);

  var Base64 = function () {
    function Base64() {
      babelHelpers.classCallCheck(this, Base64);
    }

    babelHelpers.createClass(Base64, null, [{
      key: 'encodeString',
      value: function encodeString(t) {
        return 'function' == typeof btoa ? btoa(t) : new Buffer(t.toString(), 'binary');
      }
    }]);
    return Base64;
  }();

  var Thenable = function Thenable() {};Thenable.prototype.then = function () {}, Thenable.IMPLEMENTED_BY_PROP = '$goog_Thenable', Thenable.addImplementation = function (t) {
    t.prototype.then = t.prototype.then, t.prototype.$goog_Thenable = !0;
  }, Thenable.isImplementedBy = function (t) {
    if (!t) return !1;try {
      return !!t.$goog_Thenable;
    } catch (u) {
      return !1;
    }
  };var partial = function partial(t) {
    var u = Array.prototype.slice.call(arguments, 1);return function () {
      var f = u.slice();return f.push.apply(f, arguments), t.apply(this, f);
    };
  },
      CancellablePromise = function CancellablePromise(t, u) {
    this.state_ = CancellablePromise.State_.PENDING, this.result_ = void 0, this.parent_ = null, this.callbackEntries_ = null, this.executing_ = !1, 0 < CancellablePromise.UNHANDLED_REJECTION_DELAY ? this.unhandledRejectionId_ = 0 : 0 === CancellablePromise.UNHANDLED_REJECTION_DELAY && (this.hadUnhandledRejection_ = !1);try {
      var f = this;t.call(u, function (g) {
        f.resolve_(CancellablePromise.State_.FULFILLED, g);
      }, function (g) {
        f.resolve_(CancellablePromise.State_.REJECTED, g);
      });
    } catch (g) {
      this.resolve_(CancellablePromise.State_.REJECTED, g);
    }
  };CancellablePromise.UNHANDLED_REJECTION_DELAY = 0, CancellablePromise.State_ = { PENDING: 0, BLOCKED: 1, FULFILLED: 2, REJECTED: 3 }, CancellablePromise.CallbackEntry_ = null, CancellablePromise.resolve = function (t) {
    return new CancellablePromise(function (u) {
      u(t);
    });
  }, CancellablePromise.reject = function (t) {
    return new CancellablePromise(function (u, f) {
      f(t);
    });
  }, CancellablePromise.race = function (t) {
    return new CancellablePromise(function (u, f) {
      t.length || u(void 0);for (var g = 0, _; _ = t[g]; g++) {
        _.then(u, f);
      }
    });
  }, CancellablePromise.all = function (t) {
    return new CancellablePromise(function (u, f) {
      var g = t.length,
          _ = [];if (!g) return void u(_);var k = function k(w, S) {
        g--, _[w] = S, 0 === g && u(_);
      },
          C = function C(w) {
        f(w);
      };for (var E = 0, A; A = t[E]; E++) {
        A.then(partial(k, E), C);
      }
    });
  }, CancellablePromise.firstFulfilled = function (t) {
    return new CancellablePromise(function (u, f) {
      var g = t.length,
          _ = [];if (!g) return void u(void 0);var k = function k(w) {
        u(w);
      },
          C = function C(w, S) {
        g--, _[w] = S, 0 === g && f(_);
      };for (var E = 0, A; A = t[E]; E++) {
        A.then(k, partial(C, E));
      }
    });
  }, CancellablePromise.prototype.then = function (t, u, f) {
    return this.addChildPromise_(isFunction(t) ? t : null, isFunction(u) ? u : null, f);
  }, Thenable.addImplementation(CancellablePromise), CancellablePromise.prototype.thenAlways = function (t, u) {
    var f = function f() {
      try {
        t.call(u);
      } catch (g) {
        CancellablePromise.handleRejection_.call(null, g);
      }
    };return this.addCallbackEntry_({ child: null, onRejected: f, onFulfilled: f }), this;
  }, CancellablePromise.prototype.thenCatch = function (t, u) {
    return this.addChildPromise_(null, t, u);
  }, CancellablePromise.prototype.catch = CancellablePromise.prototype.thenCatch, CancellablePromise.prototype.cancel = function (t) {
    this.state_ === CancellablePromise.State_.PENDING && async.run(function () {
      var u = new CancellablePromise.CancellationError(t);u.IS_CANCELLATION_ERROR = !0, this.cancelInternal_(u);
    }, this);
  }, CancellablePromise.prototype.cancelInternal_ = function (t) {
    this.state_ === CancellablePromise.State_.PENDING && (this.parent_ ? this.parent_.cancelChild_(this, t) : this.resolve_(CancellablePromise.State_.REJECTED, t));
  }, CancellablePromise.prototype.cancelChild_ = function (t, u) {
    if (this.callbackEntries_) {
      var f = 0,
          g = -1;for (var _ = 0, k; k = this.callbackEntries_[_]; _++) {
        var C = k.child;if (C && (f++, C === t && (g = _), 0 <= g && 1 < f)) break;
      }if (0 <= g) if (this.state_ === CancellablePromise.State_.PENDING && 1 == f) this.cancelInternal_(u);else {
        var E = this.callbackEntries_.splice(g, 1)[0];this.executeCallback_(E, CancellablePromise.State_.REJECTED, u);
      }
    }
  }, CancellablePromise.prototype.addCallbackEntry_ = function (t) {
    this.callbackEntries_ && this.callbackEntries_.length || this.state_ !== CancellablePromise.State_.FULFILLED && this.state_ !== CancellablePromise.State_.REJECTED || this.scheduleCallbacks_(), this.callbackEntries_ || (this.callbackEntries_ = []), this.callbackEntries_.push(t);
  }, CancellablePromise.prototype.addChildPromise_ = function (t, u, f) {
    var g = { child: null, onFulfilled: null, onRejected: null };return g.child = new CancellablePromise(function (_, k) {
      g.onFulfilled = t ? function (C) {
        try {
          var E = t.call(f, C);_(E);
        } catch (A) {
          k(A);
        }
      } : _, g.onRejected = u ? function (C) {
        try {
          var E = u.call(f, C);!isDef(E) && C.IS_CANCELLATION_ERROR ? k(C) : _(E);
        } catch (A) {
          k(A);
        }
      } : k;
    }), g.child.parent_ = this, this.addCallbackEntry_(g), g.child;
  }, CancellablePromise.prototype.unblockAndFulfill_ = function (t) {
    if (this.state_ !== CancellablePromise.State_.BLOCKED) throw new Error('CancellablePromise is not blocked.');this.state_ = CancellablePromise.State_.PENDING, this.resolve_(CancellablePromise.State_.FULFILLED, t);
  }, CancellablePromise.prototype.unblockAndReject_ = function (t) {
    if (this.state_ !== CancellablePromise.State_.BLOCKED) throw new Error('CancellablePromise is not blocked.');this.state_ = CancellablePromise.State_.PENDING, this.resolve_(CancellablePromise.State_.REJECTED, t);
  }, CancellablePromise.prototype.resolve_ = function (t, u) {
    if (this.state_ === CancellablePromise.State_.PENDING) {
      if (this === u) t = CancellablePromise.State_.REJECTED, u = new TypeError('CancellablePromise cannot resolve to itself');else {
        if (Thenable.isImplementedBy(u)) return u = u, this.state_ = CancellablePromise.State_.BLOCKED, void u.then(this.unblockAndFulfill_, this.unblockAndReject_, this);if (isObject(u)) try {
          var f = u.then;if (isFunction(f)) return void this.tryThen_(u, f);
        } catch (g) {
          t = CancellablePromise.State_.REJECTED, u = g;
        }
      }this.result_ = u, this.state_ = t, this.scheduleCallbacks_(), t !== CancellablePromise.State_.REJECTED || u.IS_CANCELLATION_ERROR || CancellablePromise.addUnhandledRejection_(this, u);
    }
  }, CancellablePromise.prototype.tryThen_ = function (t, u) {
    this.state_ = CancellablePromise.State_.BLOCKED;var f = this,
        g = !1,
        _ = function _(C) {
      g || (g = !0, f.unblockAndFulfill_(C));
    },
        k = function k(C) {
      g || (g = !0, f.unblockAndReject_(C));
    };try {
      u.call(t, _, k);
    } catch (C) {
      k(C);
    }
  }, CancellablePromise.prototype.scheduleCallbacks_ = function () {
    this.executing_ || (this.executing_ = !0, async.run(this.executeCallbacks_, this));
  }, CancellablePromise.prototype.executeCallbacks_ = function () {
    for (; this.callbackEntries_ && this.callbackEntries_.length;) {
      var t = this.callbackEntries_;this.callbackEntries_ = [];for (var u = 0; u < t.length; u++) {
        this.executeCallback_(t[u], this.state_, this.result_);
      }
    }this.executing_ = !1;
  }, CancellablePromise.prototype.executeCallback_ = function (t, u, f) {
    u === CancellablePromise.State_.FULFILLED ? t.onFulfilled(f) : (this.removeUnhandledRejection_(), t.onRejected(f));
  }, CancellablePromise.prototype.removeUnhandledRejection_ = function () {
    var t;if (0 < CancellablePromise.UNHANDLED_REJECTION_DELAY) for (t = this; t && t.unhandledRejectionId_; t = t.parent_) {
      clearTimeout(t.unhandledRejectionId_), t.unhandledRejectionId_ = 0;
    } else if (0 === CancellablePromise.UNHANDLED_REJECTION_DELAY) for (t = this; t && t.hadUnhandledRejection_; t = t.parent_) {
      t.hadUnhandledRejection_ = !1;
    }
  }, CancellablePromise.addUnhandledRejection_ = function (t, u) {
    0 < CancellablePromise.UNHANDLED_REJECTION_DELAY ? t.unhandledRejectionId_ = setTimeout(function () {
      CancellablePromise.handleRejection_.call(null, u);
    }, CancellablePromise.UNHANDLED_REJECTION_DELAY) : 0 === CancellablePromise.UNHANDLED_REJECTION_DELAY && (t.hadUnhandledRejection_ = !0, async.run(function () {
      t.hadUnhandledRejection_ && CancellablePromise.handleRejection_.call(null, u);
    }));
  }, CancellablePromise.handleRejection_ = async.throwException, CancellablePromise.setUnhandledRejectionHandler = function (t) {
    CancellablePromise.handleRejection_ = t;
  }, CancellablePromise.CancellationError = function (_Error) {
    babelHelpers.inherits(_class, _Error);

    function _class(t) {
      var _this32;

      babelHelpers.classCallCheck(this, _class);
      (_this32 = babelHelpers.possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, t)), _this32), t && (_this32.message = t);return _this32;
    }

    return _class;
  }(Error), CancellablePromise.CancellationError.prototype.name = 'cancel';
  var Ajax = function () {
    function Ajax() {
      babelHelpers.classCallCheck(this, Ajax);
    }

    babelHelpers.createClass(Ajax, null, [{
      key: 'parseResponseHeaders',
      value: function parseResponseHeaders(t) {
        var u = [];if (!t) return u;var f = t.split('\r\n');for (var g = 0; g < f.length; g++) {
          var _ = f[g].indexOf(': ');if (0 < _) {
            var k = f[g].substring(0, _),
                C = f[g].substring(_ + 2);u.push({ name: k, value: C });
          }
        }return u;
      }
    }, {
      key: 'request',
      value: function request(t, u, f, g, _, k, C, E) {
        t = t || '', u = u || 'GET';var A = new XMLHttpRequest(),
            w = new CancellablePromise(function (T, R) {
          A.onload = function () {
            return A.aborted ? void A.onerror() : void T(A);
          }, A.onerror = function () {
            var P = new Error('Request error');P.request = A, R(P);
          };
        }).thenCatch(function (T) {
          throw A.abort(), T;
        }).thenAlways(function () {
          clearTimeout(S);
        });if (_ && (t = new Uri(t).addParametersFromMultiMap(_).toString()), A.open(u, t, !C), E && (A.withCredentials = !0), g && g.names().forEach(function (T) {
          A.setRequestHeader(T, g.getAll(T).join(', '));
        }), A.send(isDef(f) ? f : null), isDefAndNotNull(k)) var S = setTimeout(function () {
          w.cancel('Request timeout');
        }, k);return w;
      }
    }]);
    return Ajax;
  }();

  var Transport = function () {
    function Transport() {
      babelHelpers.classCallCheck(this, Transport);
    }

    babelHelpers.createClass(Transport, [{
      key: 'send',
      value: function send() {}
    }]);
    return Transport;
  }();

  var ClientMessage = function () {
    function ClientMessage() {
      babelHelpers.classCallCheck(this, ClientMessage);
      this.headers_ = new MultiMap();
    }

    babelHelpers.createClass(ClientMessage, [{
      key: 'body',
      value: function body(t) {
        return isDef(t) ? (this.body_ = t, this) : this.body_;
      }
    }, {
      key: 'header',
      value: function header(t, u) {
        if (2 !== arguments.length) throw new Error('Invalid arguments');return this.headers_.set(t, u), this;
      }
    }, {
      key: 'headers',
      value: function headers(t) {
        return isDef(t) ? (t instanceof MultiMap ? this.headers_ = t : this.headers_.values = t, t) : this.headers_;
      }
    }, {
      key: 'removeBody',
      value: function removeBody() {
        this.body_ = void 0;
      }
    }]);
    return ClientMessage;
  }();

  var ClientResponse = function (_ClientMessage) {
    babelHelpers.inherits(ClientResponse, _ClientMessage);

    function ClientResponse(t) {
      var _this33;

      babelHelpers.classCallCheck(this, ClientResponse);
      if ((_this33 = babelHelpers.possibleConstructorReturn(this, (ClientResponse.__proto__ || Object.getPrototypeOf(ClientResponse)).call(this)), _this33), !t) throw new Error('Can\'t create response without request');_this33.clientRequest_ = t;return babelHelpers.possibleConstructorReturn(_this33);
    }

    babelHelpers.createClass(ClientResponse, [{
      key: 'request',
      value: function request() {
        return this.clientRequest_;
      }
    }, {
      key: 'statusCode',
      value: function statusCode(t) {
        return isDef(t) ? (this.statusCode_ = t, this) : this.statusCode_;
      }
    }, {
      key: 'statusText',
      value: function statusText(t) {
        return isDef(t) ? (this.statusText_ = t, this) : this.statusText_;
      }
    }, {
      key: 'succeeded',
      value: function succeeded() {
        return 200 <= this.statusCode() && 399 >= this.statusCode();
      }
    }]);
    return ClientResponse;
  }(ClientMessage);

  var AjaxTransport = function (_Transport) {
    babelHelpers.inherits(AjaxTransport, _Transport);

    function AjaxTransport() {
      babelHelpers.classCallCheck(this, AjaxTransport);
      return babelHelpers.possibleConstructorReturn(this, (AjaxTransport.__proto__ || Object.getPrototypeOf(AjaxTransport)).apply(this, arguments));
    }

    babelHelpers.createClass(AjaxTransport, [{
      key: 'send',
      value: function send(t) {
        var u = Ajax.request(t.url(), t.method(), t.body(), t.headers(), t.params(), null, !1, t.withCredentials());return u.then(function (f) {
          var g = new ClientResponse(t);return g.body(f.responseText), g.statusCode(f.status), g.statusText(f.statusText), Ajax.parseResponseHeaders(f.getAllResponseHeaders()).forEach(function (_) {
            g.header(_.name, _.value);
          }), g;
        });
      }
    }]);
    return AjaxTransport;
  }(Transport);

  var TransportFactory = function () {
    function TransportFactory() {
      babelHelpers.classCallCheck(this, TransportFactory);
      this.transports = {}, this.transports[TransportFactory.DEFAULT_TRANSPORT_NAME] = TransportFactory[TransportFactory.DEFAULT_TRANSPORT_NAME];
    }

    babelHelpers.createClass(TransportFactory, [{
      key: 'get',
      value: function get(t) {
        var u = this.transports[t];if (!u) throw new Error('Invalid transport name: ' + t);try {
          return new u();
        } catch (f) {
          throw new Error('Can\'t create transport', f);
        }
      }
    }, {
      key: 'getDefault',
      value: function getDefault() {
        return this.get(TransportFactory.DEFAULT_TRANSPORT_NAME);
      }
    }], [{
      key: 'instance',
      value: function instance() {
        return TransportFactory.instance_ || (TransportFactory.instance_ = new TransportFactory()), TransportFactory.instance_;
      }
    }]);
    return TransportFactory;
  }();

  TransportFactory.DEFAULT_TRANSPORT_NAME = 'default', TransportFactory[TransportFactory.DEFAULT_TRANSPORT_NAME] = AjaxTransport;
  var ClientRequest = function (_ClientMessage2) {
    babelHelpers.inherits(ClientRequest, _ClientMessage2);

    function ClientRequest() {
      var _this35;

      babelHelpers.classCallCheck(this, ClientRequest);
      (_this35 = babelHelpers.possibleConstructorReturn(this, (ClientRequest.__proto__ || Object.getPrototypeOf(ClientRequest)).call(this)), _this35), _this35.params_ = new MultiMap(), _this35.withCredentials_ = !0;return _this35;
    }

    babelHelpers.createClass(ClientRequest, [{
      key: 'withCredentials',
      value: function withCredentials(t) {
        return isDef(t) ? (this.withCredentials_ = !!t, this) : this.withCredentials_;
      }
    }, {
      key: 'method',
      value: function method(t) {
        return isDef(t) ? (this.method_ = t, this) : this.method_ || ClientRequest.DEFAULT_METHOD;
      }
    }, {
      key: 'param',
      value: function param(t, u) {
        if (2 !== arguments.length) throw new Error('Invalid arguments');return this.params_.set(t, u), this;
      }
    }, {
      key: 'params',
      value: function params(t) {
        return isDef(t) ? (t instanceof MultiMap ? this.params_ = t : this.params_.values = t, t) : this.params_;
      }
    }, {
      key: 'url',
      value: function url(t) {
        return isDef(t) ? (this.url_ = t, this) : this.url_;
      }
    }]);
    return ClientRequest;
  }(ClientMessage);

  ClientRequest.DEFAULT_METHOD = 'GET';var io;'undefined' != typeof globals.window && (io = globals.window.io);
  var WeDeploy$1 = function () {
    function WeDeploy$1(t) {
      for (var _len16 = arguments.length, u = Array(_len16 > 1 ? _len16 - 1 : 0), _key16 = 1; _key16 < _len16; _key16++) {
        u[_key16 - 1] = arguments[_key16];
      }

      babelHelpers.classCallCheck(this, WeDeploy$1);
      if (0 === arguments.length) throw new Error('Invalid arguments, try `new WeDeploy(baseUrl, url)`');this.auth_ = null, this.data_ = null, this.body_ = null, this.url_ = Uri.joinPaths.apply(Uri, [t || ''].concat(u)), this.headers_ = new MultiMap(), this.params_ = new MultiMap(), this.withCredentials_ = !0, this.header('Content-Type', 'application/json'), this.header('X-Requested-With', 'XMLHttpRequest');
    }

    babelHelpers.createClass(WeDeploy$1, [{
      key: 'auth',
      value: function auth(t, u) {
        return this.auth_ = t, this.auth_ instanceof Auth || (this.auth_ = Auth.create(t, u)), this;
      }
    }, {
      key: 'body',
      value: function body(t) {
        return this.body_ = t, this;
      }
    }, {
      key: 'convertBodyToParams_',
      value: function convertBodyToParams_(t, u) {
        isString(u) ? u = { body: u } : u instanceof Embodied && (u = u.body()), Object.keys(u || {}).forEach(function (f) {
          return t.param(f, u[f]);
        });
      }
    }, {
      key: 'createClientRequest_',
      value: function createClientRequest_(t, u) {
        var f = new ClientRequest();return f.body(u || this.body_), !isDefAndNotNull(f.body()) && this.formData_ && f.body(this.formData_), f.method(t), f.headers(this.headers()), f.params(this.params()), f.url(this.url()), f.withCredentials(this.withCredentials_), this.encode(f), f;
      }
    }, {
      key: 'decode',
      value: function decode(t) {
        if (WeDeploy$1.isContentTypeJson(t)) try {
          t.body(JSON.parse(t.body()));
        } catch (u) {}return t;
      }
    }, {
      key: 'delete',
      value: function _delete(t) {
        return this.sendAsync('DELETE', t);
      }
    }, {
      key: 'encode',
      value: function encode(t) {
        var u = t.body();return isElement(u) && (u = new FormData(u), t.body(u)), u = this.maybeWrapWithQuery_(u), 'GET' === t.method() && (this.convertBodyToParams_(t, u), t.removeBody(), u = null), 'undefined' != typeof FormData && u instanceof FormData ? t.headers().remove('content-type') : u instanceof Embodied ? t.body(u.toString()) : WeDeploy$1.isContentTypeJson(t) && t.body(JSON.stringify(t.body())), this.encodeParams_(t), this.resolveAuthentication_(t), t;
      }
    }, {
      key: 'encodeParams_',
      value: function encodeParams_(t) {
        var u = t.params();u.names().forEach(function (f) {
          var g = u.getAll(f);g.forEach(function (_, k) {
            _ instanceof Embodied ? _ = _.toString() : (isObject(_) || _ instanceof Array) && (_ = JSON.stringify(_)), g[k] = _;
          });
        });
      }
    }, {
      key: 'form',
      value: function form(t, u) {
        if ('undefined' == typeof FormData) throw new Error('form() is only available when FormData API is available.');return this.formData_ || (this.formData_ = new FormData()), this.formData_.append(t, u), this;
      }
    }, {
      key: 'get',
      value: function get(t) {
        return this.sendAsync('GET', t);
      }
    }, {
      key: 'header',
      value: function header(t, u) {
        if (2 !== arguments.length) throw new Error('Invalid arguments');return this.headers_.set(t, u), this;
      }
    }, {
      key: 'headers',
      value: function headers() {
        return this.headers_;
      }
    }, {
      key: 'maybeWrapWithQuery_',
      value: function maybeWrapWithQuery_(t) {
        return t instanceof Filter && (t = Query.filter(t)), t;
      }
    }, {
      key: 'param',
      value: function param(t, u) {
        if (2 !== arguments.length) throw new Error('Invalid arguments');return this.params_.set(t, u), this;
      }
    }, {
      key: 'params',
      value: function params() {
        return this.params_;
      }
    }, {
      key: 'patch',
      value: function patch(t) {
        return this.sendAsync('PATCH', t);
      }
    }, {
      key: 'path',
      value: function path() {
        for (var _len17 = arguments.length, t = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
          t[_key17] = arguments[_key17];
        }

        var u = new (Function.prototype.bind.apply(WeDeploy$1, [null].concat([this.url()], t)))();return isDefAndNotNull(this.auth_) && u.auth(this.auth_), u.use(this.customTransport_);
      }
    }, {
      key: 'post',
      value: function post(t) {
        return this.sendAsync('POST', t);
      }
    }, {
      key: 'put',
      value: function put(t) {
        return this.sendAsync('PUT', t);
      }
    }, {
      key: 'resolveAuthentication_',
      value: function resolveAuthentication_(t) {
        if (this.auth_) if (this.auth_.hasToken()) t.header('Authorization', 'Bearer ' + this.auth_.token);else if (this.auth_.hasEmail() && this.auth_.hasPassword()) {
          var u = this.auth_.email + ':' + this.auth_.password;t.header('Authorization', 'Basic ' + Base64.encodeString(u));
        }
      }
    }, {
      key: 'sendAsync',
      value: function sendAsync(t, u) {
        var f = this.customTransport_ || TransportFactory.instance().getDefault(),
            g = this.createClientRequest_(t, u);return f.send(g).then(this.decode);
      }
    }, {
      key: 'url',
      value: function url() {
        return this.url_;
      }
    }, {
      key: 'use',
      value: function use(t) {
        return this.customTransport_ = t, this;
      }
    }, {
      key: 'watch',
      value: function watch(t, u) {
        if ('undefined' == typeof io) throw new Error('Socket.io client not loaded');var f = this.createClientRequest_('GET', t),
            g = new Uri(f.url());return g.addParametersFromMultiMap(f.params()), u = u || { forceNew: !0 }, u.query = 'url=' + encodeURIComponent(g.getPathname() + g.getSearch()), u.path = u.path || g.getPathname(), io(g.getHost(), u);
      }
    }, {
      key: 'withCredentials',
      value: function withCredentials(t) {
        return this.withCredentials_ = !!t, this;
      }
    }], [{
      key: 'data',
      value: function data(t) {
        return assertUriWithNoPath(t, 'The data url should not have a path'), isString(t) && (WeDeploy$1.dataUrl_ = t), WeDeploy$1.data_ || (WeDeploy$1.data_ = new DataApiHelper(WeDeploy$1)), WeDeploy$1.data_.auth(WeDeploy$1.auth().currentUser), WeDeploy$1.data_;
      }
    }, {
      key: 'auth',
      value: function auth(t) {
        return isString(t) && (WeDeploy$1.authUrl_ = t), WeDeploy$1.auth_ || (WeDeploy$1.auth_ = new AuthApiHelper(WeDeploy$1)), WeDeploy$1.auth_;
      }
    }, {
      key: 'isContentTypeJson',
      value: function isContentTypeJson(t) {
        var u = t.headers().get('content-type') || '';return 0 === u.indexOf('application/json');
      }
    }, {
      key: 'socket',
      value: function socket(t) {
        io = t;
      }
    }, {
      key: 'url',
      value: function url(t) {
        return new WeDeploy$1(t).use(this.customTransport_);
      }
    }]);
    return WeDeploy$1;
  }();

  WeDeploy$1.auth_ = null, WeDeploy$1.data_ = null, WeDeploy$1.authUrl_ = '', WeDeploy$1.dataUrl_ = '', globals.window.Filter = Filter, globals.window.Geo = Geo, globals.window.Query = Query, globals.window.Range = Range, globals.window.WeDeploy = WeDeploy$1;this['metalNamed']['api-min'] = this['metalNamed']['api-min'] || {};
  this['metalNamed']['api-min']['Filter'] = Filter;
  this['metalNamed']['api-min']['Geo'] = Geo;
  this['metalNamed']['api-min']['Query'] = Query;
  this['metalNamed']['api-min']['Range'] = Range;
  this['metalNamed']['api-min']['WeDeploy'] = WeDeploy$1;
  this['metal']['api-min'] = WeDeploy$1;
}).call(this);
'use strict';

(function () {
  /* jshint ignore:start */

  /**
   * @license
   * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS-IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  (function (global, factory) {
    factory(global.IncrementalDOM = global.IncrementalDOM || {});
  })(window, function (exports) {
    'use strict';

    /**
     * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS-IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * A cached reference to the hasOwnProperty function.
     */

    var hasOwnProperty = Object.prototype.hasOwnProperty;

    /**
     * A constructor function that will create blank objects.
     * @constructor
     */
    function Blank() {}

    Blank.prototype = Object.create(null);

    /**
     * Used to prevent property collisions between our "map" and its prototype.
     * @param {!Object<string, *>} map The map to check.
     * @param {string} property The property to check.
     * @return {boolean} Whether map has property.
     */
    var has = function has(map, property) {
      return hasOwnProperty.call(map, property);
    };

    /**
     * Creates an map object without a prototype.
     * @return {!Object}
     */
    var createMap = function createMap() {
      return new Blank();
    };

    /**
     * The property name where we store Incremental DOM data.
     */
    var DATA_PROP = '__incrementalDOMData';

    /**
     * Keeps track of information needed to perform diffs for a given DOM node.
     * @param {!string} nodeName
     * @param {?string=} key
     * @constructor
     */
    function NodeData(nodeName, key) {
      /**
       * The attributes and their values.
       * @const {!Object<string, *>}
       */
      this.attrs = createMap();

      /**
       * An array of attribute name/value pairs, used for quickly diffing the
       * incomming attributes to see if the DOM node's attributes need to be
       * updated.
       * @const {Array<*>}
       */
      this.attrsArr = [];

      /**
       * The incoming attributes for this Node, before they are updated.
       * @const {!Object<string, *>}
       */
      this.newAttrs = createMap();

      /**
       * Whether or not the statics have been applied for the node yet.
       * {boolean}
       */
      this.staticsApplied = false;

      /**
       * The key used to identify this node, used to preserve DOM nodes when they
       * move within their parent.
       * @const
       */
      this.key = key;

      /**
       * Keeps track of children within this node by their key.
       * {!Object<string, !Element>}
       */
      this.keyMap = createMap();

      /**
       * Whether or not the keyMap is currently valid.
       * @type {boolean}
       */
      this.keyMapValid = true;

      /**
       * Whether or the associated node is, or contains, a focused Element.
       * @type {boolean}
       */
      this.focused = false;

      /**
       * The node name for this node.
       * @const {string}
       */
      this.nodeName = nodeName;

      /**
       * @type {?string}
       */
      this.text = null;
    }

    /**
     * Initializes a NodeData object for a Node.
     *
     * @param {Node} node The node to initialize data for.
     * @param {string} nodeName The node name of node.
     * @param {?string=} key The key that identifies the node.
     * @return {!NodeData} The newly initialized data object
     */
    var initData = function initData(node, nodeName, key) {
      var data = new NodeData(nodeName, key);
      node[DATA_PROP] = data;
      return data;
    };

    /**
     * Retrieves the NodeData object for a Node, creating it if necessary.
     *
     * @param {?Node} node The Node to retrieve the data for.
     * @return {!NodeData} The NodeData for this Node.
     */
    var getData = function getData(node) {
      importNode(node);
      return node[DATA_PROP];
    };

    /**
     * Imports node and its subtree, initializing caches.
     *
     * @param {?Node} node The Node to import.
     */
    var importNode = function importNode(node) {
      if (node[DATA_PROP]) {
        return;
      }

      var isElement = node instanceof Element;
      var nodeName = isElement ? node.localName : node.nodeName;
      var key = isElement ? node.getAttribute('key') : null;
      var data = initData(node, nodeName, key);

      if (key) {
        getData(node.parentNode).keyMap[key] = node;
      }

      if (isElement) {
        var attributes = node.attributes;
        var attrs = data.attrs;
        var newAttrs = data.newAttrs;
        var attrsArr = data.attrsArr;

        for (var i = 0; i < attributes.length; i += 1) {
          var attr = attributes[i];
          var name = attr.name;
          var value = attr.value;

          attrs[name] = value;
          newAttrs[name] = undefined;
          attrsArr.push(name);
          attrsArr.push(value);
        }
      }

      for (var child = node.firstChild; child; child = child.nextSibling) {
        importNode(child);
      }
    };

    /**
     * Gets the namespace to create an element (of a given tag) in.
     * @param {string} tag The tag to get the namespace for.
     * @param {?Node} parent
     * @return {?string} The namespace to create the tag in.
     */
    var getNamespaceForTag = function getNamespaceForTag(tag, parent) {
      if (tag === 'svg') {
        return 'http://www.w3.org/2000/svg';
      }

      if (getData(parent).nodeName === 'foreignObject') {
        return null;
      }

      return parent.namespaceURI;
    };

    /**
     * Creates an Element.
     * @param {Document} doc The document with which to create the Element.
     * @param {?Node} parent
     * @param {string} tag The tag for the Element.
     * @param {?string=} key A key to identify the Element.
     * @return {!Element}
     */
    var createElement = function createElement(doc, parent, tag, key) {
      var namespace = getNamespaceForTag(tag, parent);
      var el = undefined;

      if (namespace) {
        el = doc.createElementNS(namespace, tag);
      } else {
        el = doc.createElement(tag);
      }

      initData(el, tag, key);

      return el;
    };

    /**
     * Creates a Text Node.
     * @param {Document} doc The document with which to create the Element.
     * @return {!Text}
     */
    var createText = function createText(doc) {
      var node = doc.createTextNode('');
      initData(node, '#text', null);
      return node;
    };

    /**
     * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS-IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** @const */
    var notifications = {
      /**
       * Called after patch has compleated with any Nodes that have been created
       * and added to the DOM.
       * @type {?function(Array<!Node>)}
       */
      nodesCreated: null,

      /**
       * Called after patch has compleated with any Nodes that have been removed
       * from the DOM.
       * Note it's an applications responsibility to handle any childNodes.
       * @type {?function(Array<!Node>)}
       */
      nodesDeleted: null
    };

    /**
     * Keeps track of the state of a patch.
     * @constructor
     */
    function Context() {
      /**
       * @type {(Array<!Node>|undefined)}
       */
      this.created = notifications.nodesCreated && [];

      /**
       * @type {(Array<!Node>|undefined)}
       */
      this.deleted = notifications.nodesDeleted && [];
    }

    /**
     * @param {!Node} node
     */
    Context.prototype.markCreated = function (node) {
      if (this.created) {
        this.created.push(node);
      }
    };

    /**
     * @param {!Node} node
     */
    Context.prototype.markDeleted = function (node) {
      if (this.deleted) {
        this.deleted.push(node);
      }
    };

    /**
     * Notifies about nodes that were created during the patch opearation.
     */
    Context.prototype.notifyChanges = function () {
      if (this.created && this.created.length > 0) {
        notifications.nodesCreated(this.created);
      }

      if (this.deleted && this.deleted.length > 0) {
        notifications.nodesDeleted(this.deleted);
      }
    };

    /**
     * Copyright 2016 The Incremental DOM Authors. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS-IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @param {!Node} node
     * @return {boolean} True if the node the root of a document, false otherwise.
     */
    var isDocumentRoot = function isDocumentRoot(node) {
      // For ShadowRoots, check if they are a DocumentFragment instead of if they
      // are a ShadowRoot so that this can work in 'use strict' if ShadowRoots are
      // not supported.
      return node instanceof Document || node instanceof DocumentFragment;
    };

    /**
     * @param {!Node} node The node to start at, inclusive.
     * @param {?Node} root The root ancestor to get until, exclusive.
     * @return {!Array<!Node>} The ancestry of DOM nodes.
     */
    var getAncestry = function getAncestry(node, root) {
      var ancestry = [];
      var cur = node;

      while (cur !== root) {
        ancestry.push(cur);
        cur = cur.parentNode;
      }

      return ancestry;
    };

    /**
     * @param {!Node} node
     * @return {!Node} The root node of the DOM tree that contains node.
     */
    var getRoot = function getRoot(node) {
      var cur = node;
      var prev = cur;

      while (cur) {
        prev = cur;
        cur = cur.parentNode;
      }

      return prev;
    };

    /**
     * @param {!Node} node The node to get the activeElement for.
     * @return {?Element} The activeElement in the Document or ShadowRoot
     *     corresponding to node, if present.
     */
    var getActiveElement = function getActiveElement(node) {
      var root = getRoot(node);
      return isDocumentRoot(root) ? root.activeElement : null;
    };

    /**
     * Gets the path of nodes that contain the focused node in the same document as
     * a reference node, up until the root.
     * @param {!Node} node The reference node to get the activeElement for.
     * @param {?Node} root The root to get the focused path until.
     * @return {!Array<Node>}
     */
    var getFocusedPath = function getFocusedPath(node, root) {
      var activeElement = getActiveElement(node);

      if (!activeElement || !node.contains(activeElement)) {
        return [];
      }

      return getAncestry(activeElement, root);
    };

    /**
     * Like insertBefore, but instead instead of moving the desired node, instead
     * moves all the other nodes after.
     * @param {?Node} parentNode
     * @param {!Node} node
     * @param {?Node} referenceNode
     */
    var moveBefore = function moveBefore(parentNode, node, referenceNode) {
      var insertReferenceNode = node.nextSibling;
      var cur = referenceNode;

      while (cur !== node) {
        var next = cur.nextSibling;
        parentNode.insertBefore(cur, insertReferenceNode);
        cur = next;
      }
    };

    /** @type {?Context} */
    var context = null;

    /** @type {?Node} */
    var currentNode = null;

    /** @type {?Node} */
    var currentParent = null;

    /** @type {?Document} */
    var doc = null;

    /**
     * @param {!Array<Node>} focusPath The nodes to mark.
     * @param {boolean} focused Whether or not they are focused.
     */
    var markFocused = function markFocused(focusPath, focused) {
      for (var i = 0; i < focusPath.length; i += 1) {
        getData(focusPath[i]).focused = focused;
      }
    };

    /**
     * Returns a patcher function that sets up and restores a patch context,
     * running the run function with the provided data.
     * @param {function((!Element|!DocumentFragment),!function(T),T=): ?Node} run
     * @return {function((!Element|!DocumentFragment),!function(T),T=): ?Node}
     * @template T
     */
    var patchFactory = function patchFactory(run) {
      /**
       * TODO(moz): These annotations won't be necessary once we switch to Closure
       * Compiler's new type inference. Remove these once the switch is done.
       *
       * @param {(!Element|!DocumentFragment)} node
       * @param {!function(T)} fn
       * @param {T=} data
       * @return {?Node} node
       * @template T
       */
      var f = function f(node, fn, data) {
        var prevContext = context;
        var prevDoc = doc;
        var prevCurrentNode = currentNode;
        var prevCurrentParent = currentParent;
        var previousInAttributes = false;
        var previousInSkip = false;

        context = new Context();
        doc = node.ownerDocument;
        currentParent = node.parentNode;

        if ('production' !== 'production') {}

        var focusPath = getFocusedPath(node, currentParent);
        markFocused(focusPath, true);
        var retVal = run(node, fn, data);
        markFocused(focusPath, false);

        if ('production' !== 'production') {}

        context.notifyChanges();

        context = prevContext;
        doc = prevDoc;
        currentNode = prevCurrentNode;
        currentParent = prevCurrentParent;

        return retVal;
      };
      return f;
    };

    /**
     * Patches the document starting at node with the provided function. This
     * function may be called during an existing patch operation.
     * @param {!Element|!DocumentFragment} node The Element or Document
     *     to patch.
     * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
     *     calls that describe the DOM.
     * @param {T=} data An argument passed to fn to represent DOM state.
     * @return {!Node} The patched node.
     * @template T
     */
    var patchInner = patchFactory(function (node, fn, data) {
      currentNode = node;

      enterNode();
      fn(data);
      exitNode();

      if ('production' !== 'production') {}

      return node;
    });

    /**
     * Patches an Element with the the provided function. Exactly one top level
     * element call should be made corresponding to `node`.
     * @param {!Element} node The Element where the patch should start.
     * @param {!function(T)} fn A function containing elementOpen/elementClose/etc.
     *     calls that describe the DOM. This should have at most one top level
     *     element call.
     * @param {T=} data An argument passed to fn to represent DOM state.
     * @return {?Node} The node if it was updated, its replacedment or null if it
     *     was removed.
     * @template T
     */
    var patchOuter = patchFactory(function (node, fn, data) {
      var startNode = /** @type {!Element} */{ nextSibling: node };
      var expectedNextNode = null;
      var expectedPrevNode = null;

      if ('production' !== 'production') {}

      currentNode = startNode;
      fn(data);

      if ('production' !== 'production') {}

      if (node !== currentNode && node.parentNode) {
        removeChild(currentParent, node, getData(currentParent).keyMap);
      }

      return startNode === currentNode ? null : currentNode;
    });

    /**
     * Checks whether or not the current node matches the specified nodeName and
     * key.
     *
     * @param {!Node} matchNode A node to match the data to.
     * @param {?string} nodeName The nodeName for this node.
     * @param {?string=} key An optional key that identifies a node.
     * @return {boolean} True if the node matches, false otherwise.
     */
    var matches = function matches(matchNode, nodeName, key) {
      var data = getData(matchNode);

      // Key check is done using double equals as we want to treat a null key the
      // same as undefined. This should be okay as the only values allowed are
      // strings, null and undefined so the == semantics are not too weird.
      return nodeName === data.nodeName && key == data.key;
    };

    /**
     * Aligns the virtual Element definition with the actual DOM, moving the
     * corresponding DOM node to the correct location or creating it if necessary.
     * @param {string} nodeName For an Element, this should be a valid tag string.
     *     For a Text, this should be #text.
     * @param {?string=} key The key used to identify this element.
     */
    var alignWithDOM = function alignWithDOM(nodeName, key) {
      if (currentNode && matches(currentNode, nodeName, key)) {
        return;
      }

      var parentData = getData(currentParent);
      var currentNodeData = currentNode && getData(currentNode);
      var keyMap = parentData.keyMap;
      var node = undefined;

      // Check to see if the node has moved within the parent.
      if (key) {
        var keyNode = keyMap[key];
        if (keyNode) {
          if (matches(keyNode, nodeName, key)) {
            node = keyNode;
          } else if (keyNode === currentNode) {
            context.markDeleted(keyNode);
          } else {
            removeChild(currentParent, keyNode, keyMap);
          }
        }
      }

      // Create the node if it doesn't exist.
      if (!node) {
        if (nodeName === '#text') {
          node = createText(doc);
        } else {
          node = createElement(doc, currentParent, nodeName, key);
        }

        if (key) {
          keyMap[key] = node;
        }

        context.markCreated(node);
      }

      // Re-order the node into the right position, preserving focus if either
      // node or currentNode are focused by making sure that they are not detached
      // from the DOM.
      if (getData(node).focused) {
        // Move everything else before the node.
        moveBefore(currentParent, node, currentNode);
      } else if (currentNodeData && currentNodeData.key && !currentNodeData.focused) {
        // Remove the currentNode, which can always be added back since we hold a
        // reference through the keyMap. This prevents a large number of moves when
        // a keyed item is removed or moved backwards in the DOM.
        currentParent.replaceChild(node, currentNode);
        parentData.keyMapValid = false;
      } else {
        currentParent.insertBefore(node, currentNode);
      }

      currentNode = node;
    };

    /**
     * @param {?Node} node
     * @param {?Node} child
     * @param {?Object<string, !Element>} keyMap
     */
    var removeChild = function removeChild(node, child, keyMap) {
      if (child.parentNode === node) {
        node.removeChild(child);
      }
      context.markDeleted( /** @type {!Node}*/child);

      var key = getData(child).key;
      if (key) {
        delete keyMap[key];
      }
    };

    /**
     * Clears out any unvisited Nodes, as the corresponding virtual element
     * functions were never called for them.
     */
    var clearUnvisitedDOM = function clearUnvisitedDOM() {
      var node = currentParent;
      var data = getData(node);
      var keyMap = data.keyMap;
      var keyMapValid = data.keyMapValid;
      var child = node.lastChild;
      var key = undefined;

      if (child === currentNode && keyMapValid) {
        return;
      }

      while (child !== currentNode) {
        removeChild(node, child, keyMap);
        child = node.lastChild;
      }

      // Clean the keyMap, removing any unusued keys.
      if (!keyMapValid) {
        for (key in keyMap) {
          child = keyMap[key];
          if (child.parentNode !== node) {
            context.markDeleted(child);
            delete keyMap[key];
          }
        }

        data.keyMapValid = true;
      }
    };

    /**
     * Changes to the first child of the current node.
     */
    var enterNode = function enterNode() {
      currentParent = currentNode;
      currentNode = null;
    };

    /**
     * @return {?Node} The next Node to be patched.
     */
    var getNextNode = function getNextNode() {
      if (currentNode) {
        return currentNode.nextSibling;
      } else {
        return currentParent.firstChild;
      }
    };

    /**
     * Changes to the next sibling of the current node.
     */
    var nextNode = function nextNode() {
      currentNode = getNextNode();
    };

    /**
     * Changes to the parent of the current node, removing any unvisited children.
     */
    var exitNode = function exitNode() {
      clearUnvisitedDOM();

      currentNode = currentParent;
      currentParent = currentParent.parentNode;
    };

    /**
     * Makes sure that the current node is an Element with a matching tagName and
     * key.
     *
     * @param {string} tag The element's tag.
     * @param {?string=} key The key used to identify this element. This can be an
     *     empty string, but performance may be better if a unique value is used
     *     when iterating over an array of items.
     * @return {!Element} The corresponding Element.
     */
    var coreElementOpen = function coreElementOpen(tag, key) {
      nextNode();
      alignWithDOM(tag, key);
      enterNode();
      return (/** @type {!Element} */currentParent
      );
    };

    /**
     * Closes the currently open Element, removing any unvisited children if
     * necessary.
     *
     * @return {!Element} The corresponding Element.
     */
    var coreElementClose = function coreElementClose() {
      if ('production' !== 'production') {}

      exitNode();
      return (/** @type {!Element} */currentNode
      );
    };

    /**
     * Makes sure the current node is a Text node and creates a Text node if it is
     * not.
     *
     * @return {!Text} The corresponding Text Node.
     */
    var coreText = function coreText() {
      nextNode();
      alignWithDOM('#text', null);
      return (/** @type {!Text} */currentNode
      );
    };

    /**
     * Gets the current Element being patched.
     * @return {!Element}
     */
    var currentElement = function currentElement() {
      if ('production' !== 'production') {}
      return (/** @type {!Element} */currentParent
      );
    };

    /**
     * @return {Node} The Node that will be evaluated for the next instruction.
     */
    var currentPointer = function currentPointer() {
      if ('production' !== 'production') {}
      return getNextNode();
    };

    /**
     * Skips the children in a subtree, allowing an Element to be closed without
     * clearing out the children.
     */
    var skip = function skip() {
      if ('production' !== 'production') {}
      currentNode = currentParent.lastChild;
    };

    /**
     * Skips the next Node to be patched, moving the pointer forward to the next
     * sibling of the current pointer.
     */
    var skipNode = nextNode;

    /**
     * Copyright 2015 The Incremental DOM Authors. All Rights Reserved.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *      http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS-IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /** @const */
    var symbols = {
      default: '__default'
    };

    /**
     * @param {string} name
     * @return {string|undefined} The namespace to use for the attribute.
     */
    var getNamespace = function getNamespace(name) {
      if (name.lastIndexOf('xml:', 0) === 0) {
        return 'http://www.w3.org/XML/1998/namespace';
      }

      if (name.lastIndexOf('xlink:', 0) === 0) {
        return 'http://www.w3.org/1999/xlink';
      }
    };

    /**
     * Applies an attribute or property to a given Element. If the value is null
     * or undefined, it is removed from the Element. Otherwise, the value is set
     * as an attribute.
     * @param {!Element} el
     * @param {string} name The attribute's name.
     * @param {?(boolean|number|string)=} value The attribute's value.
     */
    var applyAttr = function applyAttr(el, name, value) {
      if (value == null) {
        el.removeAttribute(name);
      } else {
        var attrNS = getNamespace(name);
        if (attrNS) {
          el.setAttributeNS(attrNS, name, value);
        } else {
          el.setAttribute(name, value);
        }
      }
    };

    /**
     * Applies a property to a given Element.
     * @param {!Element} el
     * @param {string} name The property's name.
     * @param {*} value The property's value.
     */
    var applyProp = function applyProp(el, name, value) {
      el[name] = value;
    };

    /**
     * Applies a value to a style declaration. Supports CSS custom properties by
     * setting properties containing a dash using CSSStyleDeclaration.setProperty.
     * @param {CSSStyleDeclaration} style
     * @param {!string} prop
     * @param {*} value
     */
    var setStyleValue = function setStyleValue(style, prop, value) {
      if (prop.indexOf('-') >= 0) {
        style.setProperty(prop, /** @type {string} */value);
      } else {
        style[prop] = value;
      }
    };

    /**
     * Applies a style to an Element. No vendor prefix expansion is done for
     * property names/values.
     * @param {!Element} el
     * @param {string} name The attribute's name.
     * @param {*} style The style to set. Either a string of css or an object
     *     containing property-value pairs.
     */
    var applyStyle = function applyStyle(el, name, style) {
      if (typeof style === 'string') {
        el.style.cssText = style;
      } else {
        el.style.cssText = '';
        var elStyle = el.style;
        var obj = /** @type {!Object<string,string>} */style;

        for (var prop in obj) {
          if (has(obj, prop)) {
            setStyleValue(elStyle, prop, obj[prop]);
          }
        }
      }
    };

    /**
     * Updates a single attribute on an Element.
     * @param {!Element} el
     * @param {string} name The attribute's name.
     * @param {*} value The attribute's value. If the value is an object or
     *     function it is set on the Element, otherwise, it is set as an HTML
     *     attribute.
     */
    var applyAttributeTyped = function applyAttributeTyped(el, name, value) {
      var type = typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value);

      if (type === 'object' || type === 'function') {
        applyProp(el, name, value);
      } else {
        applyAttr(el, name, /** @type {?(boolean|number|string)} */value);
      }
    };

    /**
     * Calls the appropriate attribute mutator for this attribute.
     * @param {!Element} el
     * @param {string} name The attribute's name.
     * @param {*} value The attribute's value.
     */
    var updateAttribute = function updateAttribute(el, name, value) {
      var data = getData(el);
      var attrs = data.attrs;

      if (attrs[name] === value) {
        return;
      }

      var mutator = attributes[name] || attributes[symbols.default];
      mutator(el, name, value);

      attrs[name] = value;
    };

    /**
     * A publicly mutable object to provide custom mutators for attributes.
     * @const {!Object<string, function(!Element, string, *)>}
     */
    var attributes = createMap();

    // Special generic mutator that's called for any attribute that does not
    // have a specific mutator.
    attributes[symbols.default] = applyAttributeTyped;

    attributes['style'] = applyStyle;

    /**
     * The offset in the virtual element declaration where the attributes are
     * specified.
     * @const
     */
    var ATTRIBUTES_OFFSET = 3;

    /**
     * Builds an array of arguments for use with elementOpenStart, attr and
     * elementOpenEnd.
     * @const {Array<*>}
     */
    var argsBuilder = [];

    /**
     * @param {string} tag The element's tag.
     * @param {?string=} key The key used to identify this element. This can be an
     *     empty string, but performance may be better if a unique value is used
     *     when iterating over an array of items.
     * @param {?Array<*>=} statics An array of attribute name/value pairs of the
     *     static attributes for the Element. These will only be set once when the
     *     Element is created.
     * @param {...*} var_args, Attribute name/value pairs of the dynamic attributes
     *     for the Element.
     * @return {!Element} The corresponding Element.
     */
    var elementOpen = function elementOpen(tag, key, statics, var_args) {
      if ('production' !== 'production') {}

      var node = coreElementOpen(tag, key);
      var data = getData(node);

      if (!data.staticsApplied) {
        if (statics) {
          for (var _i = 0; _i < statics.length; _i += 2) {
            var name = /** @type {string} */statics[_i];
            var value = statics[_i + 1];
            updateAttribute(node, name, value);
          }
        }
        // Down the road, we may want to keep track of the statics array to use it
        // as an additional signal about whether a node matches or not. For now,
        // just use a marker so that we do not reapply statics.
        data.staticsApplied = true;
      }

      /*
       * Checks to see if one or more attributes have changed for a given Element.
       * When no attributes have changed, this is much faster than checking each
       * individual argument. When attributes have changed, the overhead of this is
       * minimal.
       */
      var attrsArr = data.attrsArr;
      var newAttrs = data.newAttrs;
      var isNew = !attrsArr.length;
      var i = ATTRIBUTES_OFFSET;
      var j = 0;

      for (; i < arguments.length; i += 2, j += 2) {
        var _attr = arguments[i];
        if (isNew) {
          attrsArr[j] = _attr;
          newAttrs[_attr] = undefined;
        } else if (attrsArr[j] !== _attr) {
          break;
        }

        var value = arguments[i + 1];
        if (isNew || attrsArr[j + 1] !== value) {
          attrsArr[j + 1] = value;
          updateAttribute(node, _attr, value);
        }
      }

      if (i < arguments.length || j < attrsArr.length) {
        for (; i < arguments.length; i += 1, j += 1) {
          attrsArr[j] = arguments[i];
        }

        if (j < attrsArr.length) {
          attrsArr.length = j;
        }

        /*
         * Actually perform the attribute update.
         */
        for (i = 0; i < attrsArr.length; i += 2) {
          var name = /** @type {string} */attrsArr[i];
          var value = attrsArr[i + 1];
          newAttrs[name] = value;
        }

        for (var _attr2 in newAttrs) {
          updateAttribute(node, _attr2, newAttrs[_attr2]);
          newAttrs[_attr2] = undefined;
        }
      }

      return node;
    };

    /**
     * Declares a virtual Element at the current location in the document. This
     * corresponds to an opening tag and a elementClose tag is required. This is
     * like elementOpen, but the attributes are defined using the attr function
     * rather than being passed as arguments. Must be folllowed by 0 or more calls
     * to attr, then a call to elementOpenEnd.
     * @param {string} tag The element's tag.
     * @param {?string=} key The key used to identify this element. This can be an
     *     empty string, but performance may be better if a unique value is used
     *     when iterating over an array of items.
     * @param {?Array<*>=} statics An array of attribute name/value pairs of the
     *     static attributes for the Element. These will only be set once when the
     *     Element is created.
     */
    var elementOpenStart = function elementOpenStart(tag, key, statics) {
      if ('production' !== 'production') {}

      argsBuilder[0] = tag;
      argsBuilder[1] = key;
      argsBuilder[2] = statics;
    };

    /***
     * Defines a virtual attribute at this point of the DOM. This is only valid
     * when called between elementOpenStart and elementOpenEnd.
     *
     * @param {string} name
     * @param {*} value
     */
    var attr = function attr(name, value) {
      if ('production' !== 'production') {}

      argsBuilder.push(name);
      argsBuilder.push(value);
    };

    /**
     * Closes an open tag started with elementOpenStart.
     * @return {!Element} The corresponding Element.
     */
    var elementOpenEnd = function elementOpenEnd() {
      if ('production' !== 'production') {}

      var node = elementOpen.apply(null, argsBuilder);
      argsBuilder.length = 0;
      return node;
    };

    /**
     * Closes an open virtual Element.
     *
     * @param {string} tag The element's tag.
     * @return {!Element} The corresponding Element.
     */
    var elementClose = function elementClose(tag) {
      if ('production' !== 'production') {}

      var node = coreElementClose();

      if ('production' !== 'production') {}

      return node;
    };

    /**
     * Declares a virtual Element at the current location in the document that has
     * no children.
     * @param {string} tag The element's tag.
     * @param {?string=} key The key used to identify this element. This can be an
     *     empty string, but performance may be better if a unique value is used
     *     when iterating over an array of items.
     * @param {?Array<*>=} statics An array of attribute name/value pairs of the
     *     static attributes for the Element. These will only be set once when the
     *     Element is created.
     * @param {...*} var_args Attribute name/value pairs of the dynamic attributes
     *     for the Element.
     * @return {!Element} The corresponding Element.
     */
    var elementVoid = function elementVoid(tag, key, statics, var_args) {
      elementOpen.apply(null, arguments);
      return elementClose(tag);
    };

    /**
     * Declares a virtual Text at this point in the document.
     *
     * @param {string|number|boolean} value The value of the Text.
     * @param {...(function((string|number|boolean)):string)} var_args
     *     Functions to format the value which are called only when the value has
     *     changed.
     * @return {!Text} The corresponding text node.
     */
    var text = function text(value, var_args) {
      if ('production' !== 'production') {}

      var node = coreText();
      var data = getData(node);

      if (data.text !== value) {
        data.text = /** @type {string} */value;

        var formatted = value;
        for (var i = 1; i < arguments.length; i += 1) {
          /*
           * Call the formatter function directly to prevent leaking arguments.
           * https://github.com/google/incremental-dom/pull/204#issuecomment-178223574
           */
          var fn = arguments[i];
          formatted = fn(formatted);
        }

        node.data = formatted;
      }

      return node;
    };

    exports.patch = patchInner;
    exports.patchInner = patchInner;
    exports.patchOuter = patchOuter;
    exports.currentElement = currentElement;
    exports.currentPointer = currentPointer;
    exports.skip = skip;
    exports.skipNode = skipNode;
    exports.elementVoid = elementVoid;
    exports.elementOpenStart = elementOpenStart;
    exports.elementOpenEnd = elementOpenEnd;
    exports.elementOpen = elementOpen;
    exports.elementClose = elementClose;
    exports.text = text;
    exports.attr = attr;
    exports.symbols = symbols;
    exports.attributes = attributes;
    exports.applyAttr = applyAttr;
    exports.applyProp = applyProp;
    exports.notifications = notifications;
    exports.importNode = importNode;
  });

  /* jshint ignore:end */
}).call(this);
'use strict';

(function () {
  var RENDERER_DATA = '__METAL_IC_RENDERER_DATA__';

  /**
   * Removes the incremental dom renderer data object for this component.
   * @param {!Component} component
   */
  function clearData(component) {
    component[RENDERER_DATA] = null;
  }

  this['metalNamed']['data'] = this['metalNamed']['data'] || {};
  this['metalNamed']['data']['clearData'] = clearData; /**
                                                        * Gets the incremental dom renderer data object for this component, creating
                                                        * it if it doesn't exist yet.
                                                        * @param {!Component} component
                                                        * @return {!Object}
                                                        */

  function getData(component) {
    if (!component[RENDERER_DATA]) {
      component[RENDERER_DATA] = {};
    }
    return component[RENDERER_DATA];
  }
  this['metalNamed']['data']['getData'] = getData;
}).call(this);
'use strict';

(function () {
  var getData = this['metalNamed']['data']['getData'];

  /**
   * Clears the changes tracked so far.
   * @param {!Object} data
   */

  function clearChanges(data) {
    data.changes = null;
  }

  this['metalNamed']['changes'] = this['metalNamed']['changes'] || {};
  this['metalNamed']['changes']['clearChanges'] = clearChanges; /**
                                                                 * Handles the `stateKeyChanged` event from a component. Stores change data.
                                                                 * @param {!Object} data
                                                                 * @param {!Object} eventData
                                                                 * @private
                                                                 */

  function handleStateKeyChanged_(data, eventData) {
    data.changes = data.changes || {};
    var type = eventData.type || 'props';
    data.changes[type] = data.changes[type] || {};
    data.changes[type][eventData.key] = eventData;
  }

  /**
   * Returns an object with changes in the given component since the last time,
   * or null if there weren't any.
   * @param {!Component} component
   * @return {Object}
   */
  function getChanges(component) {
    return getData(component).changes;
  }

  this['metalNamed']['changes']['getChanges'] = getChanges; /**
                                                             * Starts tracking changes for the given component
                                                             * @param {!Component} component
                                                             */

  function trackChanges(component) {
    var data = getData(component);
    component.on('stateKeyChanged', handleStateKeyChanged_.bind(null, data));
  }
  this['metalNamed']['changes']['trackChanges'] = trackChanges;
}).call(this);
'use strict';

/**
 * Builds the component config object from its incremental dom call's
 * arguments.
 * @param {!Array} args
 * @return {!Object}
 */

(function () {
	function buildConfigFromCall(args) {
		var config = {};
		if (args[1]) {
			config.key = args[1];
		}
		var attrsArr = (args[2] || []).concat(args.slice(3));
		for (var i = 0; i < attrsArr.length; i += 2) {
			config[attrsArr[i]] = attrsArr[i + 1];
		}
		return config;
	}

	this['metalNamed']['callArgs'] = this['metalNamed']['callArgs'] || {};
	this['metalNamed']['callArgs']['buildConfigFromCall'] = buildConfigFromCall; /**
                                                                               * Builds an incremental dom call array from the given tag and config object.
                                                                               * @param {string} tag
                                                                               * @param {!Object} config
                                                                               * @return {!Array}
                                                                               */

	function buildCallFromConfig(tag, config) {
		var call = [tag, config.key, []];
		var keys = Object.keys(config);
		for (var i = 0; i < keys.length; i++) {
			if (keys[i] !== 'children') {
				call.push(keys[i], config[keys[i]]);
			}
		}
		return call;
	}
	this['metalNamed']['callArgs']['buildCallFromConfig'] = buildCallFromConfig;
}).call(this);
'use strict';

/**
 * A collection of core utility functions.
 * @const
 */

(function () {
  var compatibilityModeData_ = void 0;

  /**
   * Counter for unique id.
   * @type {Number}
   * @private
   */
  var uniqueIdCounter_ = 1;

  /**
   * Unique id property prefix.
   * @type {String}
   * @protected
   */
  var UID_PROPERTY = 'core_' + (Math.random() * 1e9 >>> 0);

  this['metalNamed']['coreNamed'] = this['metalNamed']['coreNamed'] || {};
  this['metalNamed']['coreNamed']['UID_PROPERTY'] = UID_PROPERTY; /**
                                                                   * When defining a class Foo with an abstract method bar(), you can do:
                                                                   * Foo.prototype.bar = abstractMethod
                                                                   *
                                                                   * Now if a subclass of Foo fails to override bar(), an error will be thrown
                                                                   * when bar() is invoked.
                                                                   *
                                                                   * @type {!Function}
                                                                   * @throws {Error} when invoked to indicate the method should be overridden.
                                                                   */

  function abstractMethod() {
    throw Error('Unimplemented abstract method');
  }

  this['metalNamed']['coreNamed']['abstractMethod'] = abstractMethod; /**
                                                                       * Disables Metal.js's compatibility mode.
                                                                       */

  function disableCompatibilityMode() {
    compatibilityModeData_ = undefined;
  }

  this['metalNamed']['coreNamed']['disableCompatibilityMode'] = disableCompatibilityMode; /**
                                                                                           * Enables Metal.js's compatibility mode with the following features from rc
                                                                                           * and 1.x versions:
                                                                                           *     - Using "key" to reference component instances. In the current version
                                                                                           *       this should be done via "ref" instead. This allows old code still
                                                                                           *       using "key" to keep working like before. NOTE: this may cause
                                                                                           *       problems, since "key" is meant to be used differently. Only use this
                                                                                           *       if it's not possible to upgrade the code to use "ref" instead.
                                                                                           * @param {Object=} opt_data Optional object with data to specify more
                                                                                           *     details, such as:
                                                                                           *         - renderers {Array} the template renderers that should be in
                                                                                           *           compatibility mode, either their constructors or strings
                                                                                           *           representing them (e.g. 'soy' or 'jsx'). By default, all the ones
                                                                                           *           that extend from IncrementalDomRenderer.
                                                                                           * @type {Object}
                                                                                           */

  function enableCompatibilityMode() {
    var opt_data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    compatibilityModeData_ = opt_data;
  }

  this['metalNamed']['coreNamed']['enableCompatibilityMode'] = enableCompatibilityMode; /**
                                                                                         * Returns the data used for compatibility mode, or nothing if it hasn't been
                                                                                         * enabled.
                                                                                         * @return {Object}
                                                                                         */

  function getCompatibilityModeData() {
    // Compatibility mode can be set via the __METAL_COMPATIBILITY__ global var.
    if (compatibilityModeData_ === undefined) {
      if (typeof window !== 'undefined' && window.__METAL_COMPATIBILITY__) {
        enableCompatibilityMode(window.__METAL_COMPATIBILITY__);
      }
    }
    return compatibilityModeData_;
  }

  this['metalNamed']['coreNamed']['getCompatibilityModeData'] = getCompatibilityModeData; /**
                                                                                           * Returns the first argument if it's truthy, or the second otherwise.
                                                                                           * @param {*} a
                                                                                           * @param {*} b
                                                                                           * @return {*}
                                                                                           * @protected
                                                                                           */

  function getFirstTruthy_(a, b) {
    return a || b;
  }

  /**
   * Gets the name of the given function. If the current browser doesn't
   * support the `name` property, this will calculate it from the function's
   * content string.
   * @param {!function()} fn
   * @return {string}
   */
  function getFunctionName(fn) {
    if (!fn.name) {
      var str = fn.toString();
      fn.name = str.substring(9, str.indexOf('('));
    }
    return fn.name;
  }

  this['metalNamed']['coreNamed']['getFunctionName'] = getFunctionName; /**
                                                                         * Gets the value of a static property in the given class. The value will be
                                                                         * inherited from ancestors as expected, unless a custom merge function is given,
                                                                         * which can change how the super classes' value for that property will be merged
                                                                         * together.
                                                                         * The final merged value will be stored in another property, so that it won't
                                                                         * be recalculated even if this function is called multiple times.
                                                                         * @param {!function()} ctor Class constructor.
                                                                         * @param {string} propertyName Property name to be merged.
                                                                         * @param {function(*, *):*=} opt_mergeFn Function that receives the merged
                                                                         *     value of the property so far and the next value to be merged to it.
                                                                         *     Should return these two merged together. If not passed the final property
                                                                         *     will be the first truthy value among ancestors.
                                                                         */

  function getStaticProperty(ctor, propertyName, opt_mergeFn) {
    var mergedName = propertyName + '_MERGED';
    if (!ctor.hasOwnProperty(mergedName)) {
      var merged = ctor.hasOwnProperty(propertyName) ? ctor[propertyName] : null;
      if (ctor.__proto__ && !ctor.__proto__.isPrototypeOf(Function)) {
        var mergeFn = opt_mergeFn || getFirstTruthy_;
        merged = mergeFn(merged, getStaticProperty(ctor.__proto__, propertyName, mergeFn));
      }
      ctor[mergedName] = merged;
    }
    return ctor[mergedName];
  }

  this['metalNamed']['coreNamed']['getStaticProperty'] = getStaticProperty; /**
                                                                             * Gets an unique id. If `opt_object` argument is passed, the object is
                                                                             * mutated with an unique id. Consecutive calls with the same object
                                                                             * reference won't mutate the object again, instead the current object uid
                                                                             * returns. See {@link UID_PROPERTY}.
                                                                             * @param {Object=} opt_object Optional object to be mutated with the uid. If
                                                                             *     not specified this method only returns the uid.
                                                                             * @param {boolean=} opt_noInheritance Optional flag indicating if this
                                                                             *     object's uid property can be inherited from parents or not.
                                                                             * @throws {Error} when invoked to indicate the method should be overridden.
                                                                             */

  function getUid(opt_object, opt_noInheritance) {
    if (opt_object) {
      var id = opt_object[UID_PROPERTY];
      if (opt_noInheritance && !opt_object.hasOwnProperty(UID_PROPERTY)) {
        id = null;
      }
      return id || (opt_object[UID_PROPERTY] = uniqueIdCounter_++);
    }
    return uniqueIdCounter_++;
  }

  this['metalNamed']['coreNamed']['getUid'] = getUid; /**
                                                       * The identity function. Returns its first argument.
                                                       * @param {*=} opt_returnValue The single value that will be returned.
                                                       * @return {?} The first argument.
                                                       */

  function identityFunction(opt_returnValue) {
    return opt_returnValue;
  }

  this['metalNamed']['coreNamed']['identityFunction'] = identityFunction; /**
                                                                           * Returns true if the specified value is a boolean.
                                                                           * @param {?} val Variable to test.
                                                                           * @return {boolean} Whether variable is boolean.
                                                                           */

  function isBoolean(val) {
    return typeof val === 'boolean';
  }

  this['metalNamed']['coreNamed']['isBoolean'] = isBoolean; /**
                                                             * Returns true if the specified value is not undefined.
                                                             * @param {?} val Variable to test.
                                                             * @return {boolean} Whether variable is defined.
                                                             */

  function isDef(val) {
    return val !== undefined;
  }

  this['metalNamed']['coreNamed']['isDef'] = isDef; /**
                                                     * Returns true if value is not undefined or null.
                                                     * @param {*} val
                                                     * @return {boolean}
                                                     */

  function isDefAndNotNull(val) {
    return isDef(val) && !isNull(val);
  }

  this['metalNamed']['coreNamed']['isDefAndNotNull'] = isDefAndNotNull; /**
                                                                         * Returns true if value is a document.
                                                                         * @param {*} val
                                                                         * @return {boolean}
                                                                         */

  function isDocument(val) {
    return val && (typeof val === 'undefined' ? 'undefined' : babelHelpers.typeof(val)) === 'object' && val.nodeType === 9;
  }

  this['metalNamed']['coreNamed']['isDocument'] = isDocument; /**
                                                               * Returns true if value is a dom element.
                                                               * @param {*} val
                                                               * @return {boolean}
                                                               */

  function isElement(val) {
    return val && (typeof val === 'undefined' ? 'undefined' : babelHelpers.typeof(val)) === 'object' && val.nodeType === 1;
  }

  this['metalNamed']['coreNamed']['isElement'] = isElement; /**
                                                             * Returns true if the specified value is a function.
                                                             * @param {?} val Variable to test.
                                                             * @return {boolean} Whether variable is a function.
                                                             */

  function isFunction(val) {
    return typeof val === 'function';
  }

  this['metalNamed']['coreNamed']['isFunction'] = isFunction; /**
                                                               * Returns true if value is null.
                                                               * @param {*} val
                                                               * @return {boolean}
                                                               */

  function isNull(val) {
    return val === null;
  }

  this['metalNamed']['coreNamed']['isNull'] = isNull; /**
                                                       * Returns true if the specified value is a number.
                                                       * @param {?} val Variable to test.
                                                       * @return {boolean} Whether variable is a number.
                                                       */

  function isNumber(val) {
    return typeof val === 'number';
  }

  this['metalNamed']['coreNamed']['isNumber'] = isNumber; /**
                                                           * Returns true if value is a window.
                                                           * @param {*} val
                                                           * @return {boolean}
                                                           */

  function isWindow(val) {
    return val !== null && val === val.window;
  }

  this['metalNamed']['coreNamed']['isWindow'] = isWindow; /**
                                                           * Returns true if the specified value is an object. This includes arrays
                                                           * and functions.
                                                           * @param {?} val Variable to test.
                                                           * @return {boolean} Whether variable is an object.
                                                           */

  function isObject(val) {
    var type = typeof val === 'undefined' ? 'undefined' : babelHelpers.typeof(val);
    return type === 'object' && val !== null || type === 'function';
  }

  this['metalNamed']['coreNamed']['isObject'] = isObject; /**
                                                           * Returns true if value is a Promise.
                                                           * @param {*} val
                                                           * @return {boolean}
                                                           */

  function isPromise(val) {
    return val && (typeof val === 'undefined' ? 'undefined' : babelHelpers.typeof(val)) === 'object' && typeof val.then === 'function';
  }

  this['metalNamed']['coreNamed']['isPromise'] = isPromise; /**
                                                             * Returns true if value is a string.
                                                             * @param {*} val
                                                             * @return {boolean}
                                                             */

  function isString(val) {
    return typeof val === 'string' || val instanceof String;
  }

  this['metalNamed']['coreNamed']['isString'] = isString; /**
                                                           * Null function used for default values of callbacks, etc.
                                                           * @return {void} Nothing.
                                                           */

  function nullFunction() {}
  this['metalNamed']['coreNamed']['nullFunction'] = nullFunction;
}).call(this);
'use strict';

// This file exists just for backwards compatibility, making sure that old
// default imports for this file still work. It's best to use the named exports
// for each function instead though, since that allows bundlers like Rollup to
// reduce the bundle size by removing unused code.

(function () {
  var core = this['metalNamed']['coreNamed'];
  this['metal']['core'] = core;
  this['metalNamed']['core'] = this['metalNamed']['core'] || {};
  this['metalNamed']['core']['core'] = core;
  Object.keys(this['metalNamed']['coreNamed']).forEach(function (key) {
    this['metalNamed']['core'][key] = this['metalNamed']['coreNamed'][key];
  });
}).call(this);
'use strict';

(function () {
	var isDef = this['metalNamed']['core']['isDef'];

	var array = function () {
		function array() {
			babelHelpers.classCallCheck(this, array);
		}

		babelHelpers.createClass(array, null, [{
			key: 'equal',

			/**
    * Checks if the given arrays have the same content.
    * @param {!Array<*>} arr1
    * @param {!Array<*>} arr2
    * @return {boolean}
    */
			value: function equal(arr1, arr2) {
				if (arr1.length !== arr2.length) {
					return false;
				}
				for (var i = 0; i < arr1.length; i++) {
					if (arr1[i] !== arr2[i]) {
						return false;
					}
				}
				return true;
			}

			/**
    * Returns the first value in the given array that isn't undefined.
    * @param {!Array} arr
    * @return {*}
    */

		}, {
			key: 'firstDefinedValue',
			value: function firstDefinedValue(arr) {
				for (var i = 0; i < arr.length; i++) {
					if (arr[i] !== undefined) {
						return arr[i];
					}
				}
			}

			/**
    * Transforms the input nested array to become flat.
    * @param {Array.<*|Array.<*>>} arr Nested array to flatten.
    * @param {Array.<*>} opt_output Optional output array.
    * @return {Array.<*>} Flat array.
    */

		}, {
			key: 'flatten',
			value: function flatten(arr, opt_output) {
				var output = opt_output || [];
				for (var i = 0; i < arr.length; i++) {
					if (Array.isArray(arr[i])) {
						array.flatten(arr[i], output);
					} else {
						output.push(arr[i]);
					}
				}
				return output;
			}

			/**
    * Removes the first occurrence of a particular value from an array.
    * @param {Array.<T>} arr Array from which to remove value.
    * @param {T} obj Object to remove.
    * @return {boolean} True if an element was removed.
    * @template T
    */

		}, {
			key: 'remove',
			value: function remove(arr, obj) {
				var i = arr.indexOf(obj);
				var rv;
				if (rv = i >= 0) {
					array.removeAt(arr, i);
				}
				return rv;
			}

			/**
    * Removes from an array the element at index i
    * @param {Array} arr Array or array like object from which to remove value.
    * @param {number} i The index to remove.
    * @return {boolean} True if an element was removed.
    */

		}, {
			key: 'removeAt',
			value: function removeAt(arr, i) {
				return Array.prototype.splice.call(arr, i, 1).length === 1;
			}

			/**
    * Slices the given array, just like Array.prototype.slice, but this
    * is faster and working on all array-like objects (like arguments).
    * @param {!Object} arr Array-like object to slice.
    * @param {number} start The index that should start the slice.
    * @param {number=} opt_end The index where the slice should end, not
    *   included in the final array. If not given, all elements after the
    *   start index will be included.
    * @return {!Array}
    */

		}, {
			key: 'slice',
			value: function slice(arr, start, opt_end) {
				var sliced = [];
				var end = isDef(opt_end) ? opt_end : arr.length;
				for (var i = start; i < end; i++) {
					sliced.push(arr[i]);
				}
				return sliced;
			}
		}]);
		return array;
	}();

	this['metal']['array'] = array;
}).call(this);
/*!
 * Polyfill from Google's Closure Library.
 * Copyright 2013 The Closure Library Authors. All Rights Reserved.
 */

'use strict';

(function () {
	var async = {};

	/**
  * Throw an item without interrupting the current execution context.  For
  * example, if processing a group of items in a loop, sometimes it is useful
  * to report an error while still allowing the rest of the batch to be
  * processed.
  * @param {*} exception
  */
	async.throwException = function (exception) {
		// Each throw needs to be in its own context.
		async.nextTick(function () {
			throw exception;
		});
	};

	/**
  * Fires the provided callback just before the current callstack unwinds, or as
  * soon as possible after the current JS execution context.
  * @param {function(this:THIS)} callback
  * @param {THIS=} opt_context Object to use as the "this value" when calling
  *     the provided function.
  * @template THIS
  */
	async.run = function (callback, opt_context) {
		if (!async.run.workQueueScheduled_) {
			// Nothing is currently scheduled, schedule it now.
			async.nextTick(async.run.processWorkQueue);
			async.run.workQueueScheduled_ = true;
		}

		async.run.workQueue_.push(new async.run.WorkItem_(callback, opt_context));
	};

	/** @private {boolean} */
	async.run.workQueueScheduled_ = false;

	/** @private {!Array.<!async.run.WorkItem_>} */
	async.run.workQueue_ = [];

	/**
  * Run any pending async.run work items. This function is not intended
  * for general use, but for use by entry point handlers to run items ahead of
  * async.nextTick.
  */
	async.run.processWorkQueue = function () {
		// NOTE: additional work queue items may be pushed while processing.
		while (async.run.workQueue_.length) {
			// Don't let the work queue grow indefinitely.
			var workItems = async.run.workQueue_;
			async.run.workQueue_ = [];
			for (var i = 0; i < workItems.length; i++) {
				var workItem = workItems[i];
				try {
					workItem.fn.call(workItem.scope);
				} catch (e) {
					async.throwException(e);
				}
			}
		}

		// There are no more work items, reset the work queue.
		async.run.workQueueScheduled_ = false;
	};

	/**
  * @constructor
  * @final
  * @struct
  * @private
  *
  * @param {function()} fn
  * @param {Object|null|undefined} scope
  */
	async.run.WorkItem_ = function (fn, scope) {
		/** @const */
		this.fn = fn;
		/** @const */
		this.scope = scope;
	};

	/**
  * Fires the provided callbacks as soon as possible after the current JS
  * execution context. setTimeout(…, 0) always takes at least 5ms for legacy
  * reasons.
  * @param {function(this:SCOPE)} callback Callback function to fire as soon as
  *     possible.
  * @param {SCOPE=} opt_context Object in whose scope to call the listener.
  * @template SCOPE
  */
	async.nextTick = function (callback, opt_context) {
		var cb = callback;
		if (opt_context) {
			cb = callback.bind(opt_context);
		}
		cb = async.nextTick.wrapCallback_(cb);
		// Introduced and currently only supported by IE10.
		// Verify if variable is defined on the current runtime (i.e., node, browser).
		// Can't use typeof enclosed in a function (such as core.isFunction) or an
		// exception will be thrown when the function is called on an environment
		// where the variable is undefined.
		if (typeof setImmediate === 'function') {
			setImmediate(cb);
			return;
		}
		// Look for and cache the custom fallback version of setImmediate.
		if (!async.nextTick.setImmediate_) {
			async.nextTick.setImmediate_ = async.nextTick.getSetImmediateEmulator_();
		}
		async.nextTick.setImmediate_(cb);
	};

	/**
  * Cache for the setImmediate implementation.
  * @type {function(function())}
  * @private
  */
	async.nextTick.setImmediate_ = null;

	/**
  * Determines the best possible implementation to run a function as soon as
  * the JS event loop is idle.
  * @return {function(function())} The "setImmediate" implementation.
  * @private
  */
	async.nextTick.getSetImmediateEmulator_ = function () {
		// Create a private message channel and use it to postMessage empty messages
		// to ourselves.
		var Channel;

		// Verify if variable is defined on the current runtime (i.e., node, browser).
		// Can't use typeof enclosed in a function (such as core.isFunction) or an
		// exception will be thrown when the function is called on an environment
		// where the variable is undefined.
		if (typeof MessageChannel === 'function') {
			Channel = MessageChannel;
		}

		// If MessageChannel is not available and we are in a browser, implement
		// an iframe based polyfill in browsers that have postMessage and
		// document.addEventListener. The latter excludes IE8 because it has a
		// synchronous postMessage implementation.
		if (typeof Channel === 'undefined' && typeof window !== 'undefined' && window.postMessage && window.addEventListener) {
			/** @constructor */
			Channel = function Channel() {
				// Make an empty, invisible iframe.
				var iframe = document.createElement('iframe');
				iframe.style.display = 'none';
				iframe.src = '';
				document.documentElement.appendChild(iframe);
				var win = iframe.contentWindow;
				var doc = win.document;
				doc.open();
				doc.write('');
				doc.close();
				var message = 'callImmediate' + Math.random();
				var origin = win.location.protocol + '//' + win.location.host;
				var onmessage = function (e) {
					// Validate origin and message to make sure that this message was
					// intended for us.
					if (e.origin !== origin && e.data !== message) {
						return;
					}
					this.port1.onmessage();
				}.bind(this);
				win.addEventListener('message', onmessage, false);
				this.port1 = {};
				this.port2 = {
					postMessage: function postMessage() {
						win.postMessage(message, origin);
					}
				};
			};
		}
		if (typeof Channel !== 'undefined') {
			var channel = new Channel();
			// Use a fifo linked list to call callbacks in the right order.
			var head = {};
			var tail = head;
			channel.port1.onmessage = function () {
				head = head.next;
				var cb = head.cb;
				head.cb = null;
				cb();
			};
			return function (cb) {
				tail.next = {
					cb: cb
				};
				tail = tail.next;
				channel.port2.postMessage(0);
			};
		}
		// Implementation for IE6-8: Script elements fire an asynchronous
		// onreadystatechange event when inserted into the DOM.
		if (typeof document !== 'undefined' && 'onreadystatechange' in document.createElement('script')) {
			return function (cb) {
				var script = document.createElement('script');
				script.onreadystatechange = function () {
					// Clean up and call the callback.
					script.onreadystatechange = null;
					script.parentNode.removeChild(script);
					script = null;
					cb();
					cb = null;
				};
				document.documentElement.appendChild(script);
			};
		}
		// Fall back to setTimeout with 0. In browsers this creates a delay of 5ms
		// or more.
		return function (cb) {
			setTimeout(cb, 0);
		};
	};

	/**
  * Helper function that is overrided to protect callbacks with entry point
  * monitor if the application monitors entry points.
  * @param {function()} callback Callback function to fire as soon as possible.
  * @return {function()} The wrapped callback.
  * @private
  */
	async.nextTick.wrapCallback_ = function (opt_returnValue) {
		return opt_returnValue;
	};

	this['metal']['async'] = async;
}).call(this);
'use strict';

/**
 * Disposable utility. When inherited provides the `dispose` function to its
 * subclass, which is responsible for disposing of any object references
 * when an instance won't be used anymore. Subclasses should override
 * `disposeInternal` to implement any specific disposing logic.
 * @constructor
 */

(function () {
	var Disposable = function () {
		function Disposable() {
			babelHelpers.classCallCheck(this, Disposable);

			/**
    * Flag indicating if this instance has already been disposed.
    * @type {boolean}
    * @protected
    */
			this.disposed_ = false;
		}

		/**
   * Disposes of this instance's object references. Calls `disposeInternal`.
   */


		babelHelpers.createClass(Disposable, [{
			key: 'dispose',
			value: function dispose() {
				if (!this.disposed_) {
					this.disposeInternal();
					this.disposed_ = true;
				}
			}

			/**
    * Subclasses should override this method to implement any specific
    * disposing logic (like clearing references and calling `dispose` on other
    * disposables).
    */

		}, {
			key: 'disposeInternal',
			value: function disposeInternal() {}

			/**
    * Checks if this instance has already been disposed.
    * @return {boolean}
    */

		}, {
			key: 'isDisposed',
			value: function isDisposed() {
				return this.disposed_;
			}
		}]);
		return Disposable;
	}();

	this['metal']['Disposable'] = Disposable;
}).call(this);
'use strict';

(function () {
	var object = function () {
		function object() {
			babelHelpers.classCallCheck(this, object);
		}

		babelHelpers.createClass(object, null, [{
			key: 'mixin',

			/**
    * Copies all the members of a source object to a target object.
    * @param {Object} target Target object.
    * @param {...Object} var_args The objects from which values will be copied.
    * @return {Object} Returns the target object reference.
    */
			value: function mixin(target) {
				var key, source;
				for (var i = 1; i < arguments.length; i++) {
					source = arguments[i];
					for (key in source) {
						target[key] = source[key];
					}
				}
				return target;
			}

			/**
    * Returns an object based on its fully qualified external name.
    * @param {string} name The fully qualified name.
    * @param {object=} opt_obj The object within which to look; default is
    *     <code>window</code>.
    * @return {?} The value (object or primitive) or, if not found, undefined.
    */

		}, {
			key: 'getObjectByName',
			value: function getObjectByName(name, opt_obj) {
				var scope = opt_obj || window;
				var parts = name.split('.');
				return parts.reduce(function (part, key) {
					return part[key];
				}, scope);
			}

			/**
    * Returns a new object with the same keys as the given one, but with
    * their values set to the return values of the specified function.
    * @param {!Object} obj
    * @param {!function(string, *)} fn
    * @return {!Object}
    */

		}, {
			key: 'map',
			value: function map(obj, fn) {
				var mappedObj = {};
				var keys = Object.keys(obj);
				for (var i = 0; i < keys.length; i++) {
					mappedObj[keys[i]] = fn(keys[i], obj[keys[i]]);
				}
				return mappedObj;
			}

			/**
    * Checks if the two given objects are equal. This is done via a shallow
    * check, including only the keys directly contained by the 2 objects.
    * @return {boolean}
    */

		}, {
			key: 'shallowEqual',
			value: function shallowEqual(obj1, obj2) {
				if (obj1 === obj2) {
					return true;
				}

				var keys1 = Object.keys(obj1);
				var keys2 = Object.keys(obj2);
				if (keys1.length !== keys2.length) {
					return false;
				}

				for (var i = 0; i < keys1.length; i++) {
					if (obj1[keys1[i]] !== obj2[keys1[i]]) {
						return false;
					}
				}
				return true;
			}
		}]);
		return object;
	}();

	this['metal']['object'] = object;
}).call(this);
'use strict';

(function () {
	var string = function () {
		function string() {
			babelHelpers.classCallCheck(this, string);
		}

		babelHelpers.createClass(string, null, [{
			key: 'caseInsensitiveCompare',

			/**
    * Compares the given strings without taking the case into account.
    * @param {string|number} str1
    * @param {string|number} str2
    * @return {number} Either -1, 0 or 1, according to if the first string is
    *     "smaller", equal or "bigger" than the second given string.
    */
			value: function caseInsensitiveCompare(str1, str2) {
				var test1 = String(str1).toLowerCase();
				var test2 = String(str2).toLowerCase();

				if (test1 < test2) {
					return -1;
				} else if (test1 === test2) {
					return 0;
				} else {
					return 1;
				}
			}

			/**
    * Removes the breaking spaces from the left and right of the string and
    * collapses the sequences of breaking spaces in the middle into single spaces.
    * The original and the result strings render the same way in HTML.
    * @param {string} str A string in which to collapse spaces.
    * @return {string} Copy of the string with normalized breaking spaces.
    */

		}, {
			key: 'collapseBreakingSpaces',
			value: function collapseBreakingSpaces(str) {
				return str.replace(/[\t\r\n ]+/g, ' ').replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, '');
			}

			/**
   * Escapes characters in the string that are not safe to use in a RegExp.
   * @param {*} str The string to escape. If not a string, it will be casted
   *     to one.
   * @return {string} A RegExp safe, escaped copy of {@code s}.
   */

		}, {
			key: 'escapeRegex',
			value: function escapeRegex(str) {
				return String(str).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08');
			}

			/**
   * Returns a string with at least 64-bits of randomness.
   * @return {string} A random string, e.g. sn1s7vb4gcic.
   */

		}, {
			key: 'getRandomString',
			value: function getRandomString() {
				var x = 2147483648;
				return Math.floor(Math.random() * x).toString(36) + Math.abs(Math.floor(Math.random() * x) ^ Date.now()).toString(36);
			}

			/**
    * Calculates the hashcode for a string. The hashcode value is computed by
    * the sum algorithm: s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]. A nice
    * property of using 31 prime is that the multiplication can be replaced by
    * a shift and a subtraction for better performance: 31*i == (i<<5)-i.
    * Modern VMs do this sort of optimization automatically.
    * @param {String} val Target string.
    * @return {Number} Returns the string hashcode.
    */

		}, {
			key: 'hashCode',
			value: function hashCode(val) {
				var hash = 0;
				for (var i = 0, len = val.length; i < len; i++) {
					hash = 31 * hash + val.charCodeAt(i);
					hash %= 0x100000000;
				}
				return hash;
			}

			/**
    * Replaces interval into the string with specified value, e.g.
    * `replaceInterval("abcde", 1, 4, "")` returns "ae".
    * @param {string} str The input string.
    * @param {Number} start Start interval position to be replaced.
    * @param {Number} end End interval position to be replaced.
    * @param {string} value The value that replaces the specified interval.
    * @return {string}
    */

		}, {
			key: 'replaceInterval',
			value: function replaceInterval(str, start, end, value) {
				return str.substring(0, start) + value + str.substring(end);
			}
		}]);
		return string;
	}();

	this['metal']['string'] = string;
}).call(this);
'use strict';

(function () {
  var core = this['metal']['core'];
  var array = this['metal']['array'];
  var async = this['metal']['async'];
  var Disposable = this['metal']['Disposable'];
  var object = this['metal']['object'];
  var string = this['metal']['string'];
  this['metalNamed']['metal'] = this['metalNamed']['metal'] || {};
  Object.keys(this['metalNamed']['core']).forEach(function (key) {
    this['metalNamed']['metal'][key] = this['metalNamed']['core'][key];
  });
  this['metalNamed']['metal']['array'] = array;
  this['metalNamed']['metal']['async'] = async;
  this['metalNamed']['metal']['Disposable'] = Disposable;
  this['metalNamed']['metal']['object'] = object;
  this['metalNamed']['metal']['string'] = string;
  this['metal']['metal'] = core;
}).call(this);
'use strict';

(function () {

	/**
  * Gets the original incremental dom functions.
  * @return {!Object}
  */
	function getOriginalFns() {
		return originalFns;
	}

	this['metalNamed']['intercept'] = this['metalNamed']['intercept'] || {};
	this['metalNamed']['intercept']['getOriginalFns'] = getOriginalFns; /**
                                                                      * Gets the original incremental dom function with the given name.
                                                                      * @param {string} name
                                                                      * @return {!Object}
                                                                      */

	function getOriginalFn(name) {
		return originalFns[name];
	}

	this['metalNamed']['intercept']['getOriginalFn'] = getOriginalFn; /**
                                                                    * Starts intercepting calls to incremental dom, replacing them with the given
                                                                    * functions. Note that `elementVoid`, `elementOpenStart`, `elementOpenEnd`
                                                                    * and `attr` are the only ones that can't be intercepted, since they'll
                                                                    * automatically be converted into equivalent calls to `elementOpen` and
                                                                    * `elementClose`.
                                                                    * @param {!Object} fns Functions to be called instead of the original ones
                                                                    *     from incremental DOM. Should be given as a map from the function name
                                                                    *     to the function that should intercept it. All interceptors will receive
                                                                    *     the original function as the first argument, the actual arguments from
                                                                    *     from the original call following it.
                                                                    */

	function startInterception(fns) {
		fns.attr = fnAttr;
		fns.elementOpenEnd = fnOpenEnd;
		fns.elementOpenStart = fnOpenStart;
		fns.elementVoid = fnVoid;
		fnStack.push(fns);
	}

	this['metalNamed']['intercept']['startInterception'] = startInterception; /**
                                                                            * Restores the original `elementOpen` function from incremental dom to the
                                                                            * implementation it used before the last call to `startInterception`.
                                                                            */

	function stopInterception() {
		fnStack.pop();
	}

	this['metalNamed']['intercept']['stopInterception'] = stopInterception;
	var originalFns = {
		attr: IncrementalDOM.attr,
		attributes: IncrementalDOM.attributes[IncrementalDOM.symbols.default],
		elementClose: IncrementalDOM.elementClose,
		elementOpen: IncrementalDOM.elementOpen,
		elementOpenEnd: IncrementalDOM.elementOpenEnd,
		elementOpenStart: IncrementalDOM.elementOpenStart,
		elementVoid: IncrementalDOM.elementVoid,
		text: IncrementalDOM.text
	};

	var fnStack = [];

	var collectedArgs = [];

	function fnAttr(name, value) {
		collectedArgs.push(name, value);
	}

	function fnOpenStart(tag, key, statics) {
		collectedArgs = [tag, key, statics];
	}

	function fnOpenEnd() {
		var _IncrementalDOM;

		return (_IncrementalDOM = IncrementalDOM).elementOpen.apply(_IncrementalDOM, babelHelpers.toConsumableArray(collectedArgs));
	}

	function fnVoid() {
		IncrementalDOM.elementOpen.apply(null, arguments);
		return IncrementalDOM.elementClose.apply(null, arguments);
	}

	function getStack() {
		return fnStack.length > 0 ? fnStack[fnStack.length - 1] : null;
	}

	function buildHandleCall(name) {
		var data = { name: name };
		var fn = handleCall.bind(data);
		return fn;
	}

	function handleCall() {
		var name = this.name; // jshint ignore:line
		var stack = getStack();
		var fn = stack && stack[name] || originalFns[name];
		return fn.apply(null, arguments);
	}

	IncrementalDOM.attr = buildHandleCall('attr');
	IncrementalDOM.elementClose = buildHandleCall('elementClose');
	IncrementalDOM.elementOpen = buildHandleCall('elementOpen');
	IncrementalDOM.elementOpenEnd = buildHandleCall('elementOpenEnd');
	IncrementalDOM.elementOpenStart = buildHandleCall('elementOpenStart');
	IncrementalDOM.elementVoid = buildHandleCall('elementVoid');
	IncrementalDOM.text = buildHandleCall('text');

	IncrementalDOM.attributes[IncrementalDOM.symbols.default] = buildHandleCall('attributes');
}).call(this);
'use strict';

(function () {
	var buildCallFromConfig = this['metalNamed']['callArgs']['buildCallFromConfig'];
	var buildConfigFromCall = this['metalNamed']['callArgs']['buildConfigFromCall'];
	var isDef = this['metalNamed']['metal']['isDef'];
	var startInterception = this['metalNamed']['intercept']['startInterception'];
	var stopInterception = this['metalNamed']['intercept']['stopInterception'];

	/**
  * Property identifying a specific object as a Metal.js child node, and
  * pointing to the component instance that created it.
  * @type {string}
  */

	var CHILD_OWNER = '__metalChildOwner';

	this['metalNamed']['children'] = this['metalNamed']['children'] || {};
	this['metalNamed']['children']['CHILD_OWNER'] = CHILD_OWNER; /**
                                                               * Captures all child elements from incremental dom calls.
                                                               * @param {!Component} component The component that is capturing children.
                                                               * @param {!function()} callback Function to be called when children have all
                                                               *     been captured.
                                                               * @param {Object} data Data to pass to the callback function when calling it.
                                                               */

	function captureChildren(component, callback, data) {
		owner_ = component;
		callback_ = callback;
		callbackData_ = data;
		tree_ = {
			props: {
				children: []
			}
		};
		tree_.config = tree_.props;
		currentParent_ = tree_;
		isCapturing_ = true;
		startInterception({
			elementClose: handleInterceptedCloseCall_,
			elementOpen: handleInterceptedOpenCall_,
			text: handleInterceptedTextCall_
		});
	}

	this['metalNamed']['children']['captureChildren'] = captureChildren; /**
                                                                       * Checks if the given tag was built from a component's children.
                                                                       * @param {*} tag
                                                                       * @return {boolean}
                                                                       */

	function isChildTag(tag) {
		return isDef(tag.tag);
	}

	this['metalNamed']['children']['isChildTag'] = isChildTag; /**
                                                             * Gets the node's original owner.
                                                             * @param {!Object} node
                                                             * @return {Component}
                                                             */

	function getOwner(node) {
		return node[CHILD_OWNER];
	}

	this['metalNamed']['children']['getOwner'] = getOwner; /**
                                                         * Renders a children tree through incremental dom.
                                                         * @param {!{args: Array, children: !Array, isText: ?boolean}}
                                                         * @param {function()=} opt_skipNode Optional function that is called for
                                                         *     each node to be rendered. If it returns true, the node will be skipped.
                                                         * @protected
                                                         */

	function renderChildTree(tree, opt_skipNode) {
		if (isCapturing_) {
			// If capturing, just add the node directly to the captured tree.
			addChildToTree(tree);
			return;
		}

		if (opt_skipNode && opt_skipNode.call(null, tree)) {
			return;
		}

		if (isDef(tree.text)) {
			var args = tree.args ? tree.args : [];
			args[0] = tree.text;
			IncrementalDOM.text.apply(null, args);
		} else {
			var _args = buildCallFromConfig(tree.tag, tree.props);
			_args[0] = {
				tag: _args[0],
				owner: getOwner(tree)
			};
			IncrementalDOM.elementOpen.apply(null, _args);
			if (tree.props.children) {
				for (var i = 0; i < tree.props.children.length; i++) {
					renderChildTree(tree.props.children[i], opt_skipNode);
				}
			}
			IncrementalDOM.elementClose(tree.tag);
		}
	}

	this['metalNamed']['children']['renderChildTree'] = renderChildTree;
	var callbackData_;
	var callback_;
	var currentParent_;
	var isCapturing_ = false;
	var owner_;
	var tree_;

	/**
  * Adds a child element to the tree.
  * @param {!Array} args The arguments passed to the incremental dom call.
  * @param {boolean=} opt_isText Optional flag indicating if the child is a
  *     text element.
  * @protected
  */
	function addChildCallToTree_(args, opt_isText) {
		var child = babelHelpers.defineProperty({
			parent: currentParent_
		}, CHILD_OWNER, owner_);

		if (opt_isText) {
			child.text = args[0];
			if (args.length > 1) {
				child.args = args;
			}
		} else {
			child.tag = args[0];
			child.props = buildConfigFromCall(args);
			child.props.children = [];
			child.config = child.props;
		}

		addChildToTree(child);
		return child;
	}

	function addChildToTree(child) {
		currentParent_.props.children.push(child);
	}

	/**
  * Handles an intercepted call to the `elementClose` function from incremental
  * dom.
  * @protected
  */
	function handleInterceptedCloseCall_() {
		if (currentParent_ === tree_) {
			stopInterception();
			isCapturing_ = false;
			var node = callback_.call(owner_, tree_, callbackData_);
			callback_ = null;
			callbackData_ = null;
			currentParent_ = null;
			owner_ = null;
			tree_ = null;
			return node;
		} else {
			currentParent_ = currentParent_.parent;
			return true;
		}
	}

	/**
  * Handles an intercepted call to the `elementOpen` function from incremental
  * dom.
  * @param {!function()} originalFn The original function before interception.
  * @protected
  */
	function handleInterceptedOpenCall_() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		currentParent_ = addChildCallToTree_(args);
	}

	/**
  * Handles an intercepted call to the `text` function from incremental dom.
  * @param {!function()} originalFn The original function before interception.
  * @protected
  */
	function handleInterceptedTextCall_() {
		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		addChildCallToTree_(args, true);
	}
}).call(this);
'use strict';

(function () {
	var METAL_DATA = '__metal_data__';

	var domData = function () {
		function domData() {
			babelHelpers.classCallCheck(this, domData);
		}

		babelHelpers.createClass(domData, null, [{
			key: 'get',

			/**
    * Gets Metal.js's data for the given element.
    * @param {!Element} element
    * @param {string=} opt_name Optional property from the data to be returned.
    * @param {*} opt_initialVal Optinal value to the set the requested property
    *     to if it doesn't exist yet in the data.
    * @return {!Object}
    */
			value: function get(element, opt_name, opt_initialVal) {
				if (!element[METAL_DATA]) {
					element[METAL_DATA] = {};
				}
				if (!opt_name) {
					return element[METAL_DATA];
				}
				if (!element[METAL_DATA][opt_name] && opt_initialVal) {
					element[METAL_DATA][opt_name] = opt_initialVal;
				}
				return element[METAL_DATA][opt_name];
			}

			/**
    * Checks if the given element has data stored in it.
    * @param {!Element} element
    * @return {boolean}
    */

		}, {
			key: 'has',
			value: function has(element) {
				return !!element[METAL_DATA];
			}
		}]);
		return domData;
	}();

	this['metal']['domData'] = domData;
}).call(this);
'use strict';

(function () {
	var Disposable = this['metalNamed']['metal']['Disposable'];

	/**
  * EventHandle utility. Holds information about an event subscription, and
  * allows removing them easily.
  * EventHandle is a Disposable, but it's important to note that the
  * EventEmitter that created it is not the one responsible for disposing it.
  * That responsibility is for the code that holds a reference to it.
  * @param {!EventEmitter} emitter Emitter the event was subscribed to.
  * @param {string} event The name of the event that was subscribed to.
  * @param {!Function} listener The listener subscribed to the event.
  * @constructor
  * @extends {Disposable}
  */

	var EventHandle = function (_Disposable) {
		babelHelpers.inherits(EventHandle, _Disposable);

		function EventHandle(emitter, event, listener) {
			babelHelpers.classCallCheck(this, EventHandle);

			/**
    * The EventEmitter instance that the event was subscribed to.
    * @type {EventEmitter}
    * @protected
    */
			var _this = babelHelpers.possibleConstructorReturn(this, (EventHandle.__proto__ || Object.getPrototypeOf(EventHandle)).call(this));

			_this.emitter_ = emitter;

			/**
    * The name of the event that was subscribed to.
    * @type {string}
    * @protected
    */
			_this.event_ = event;

			/**
    * The listener subscribed to the event.
    * @type {Function}
    * @protected
    */
			_this.listener_ = listener;
			return _this;
		}

		/**
   * Disposes of this instance's object references.
   * @override
   */


		babelHelpers.createClass(EventHandle, [{
			key: 'disposeInternal',
			value: function disposeInternal() {
				this.removeListener();
				this.emitter_ = null;
				this.listener_ = null;
			}

			/**
    * Removes the listener subscription from the emitter.
    */

		}, {
			key: 'removeListener',
			value: function removeListener() {
				if (!this.emitter_.isDisposed()) {
					this.emitter_.removeListener(this.event_, this.listener_);
				}
			}
		}]);
		return EventHandle;
	}(Disposable);

	this['metal']['EventHandle'] = EventHandle;
}).call(this);
'use strict';

(function () {
	var array = this['metalNamed']['metal']['array'];
	var Disposable = this['metalNamed']['metal']['Disposable'];
	var isFunction = this['metalNamed']['metal']['isFunction'];
	var isString = this['metalNamed']['metal']['isString'];
	var EventHandle = this['metal']['EventHandle'];


	var singleArray_ = [0];

	/**
  * EventEmitter utility.
  * @constructor
  * @extends {Disposable}
  */

	var EventEmitter = function (_Disposable) {
		babelHelpers.inherits(EventEmitter, _Disposable);

		function EventEmitter() {
			babelHelpers.classCallCheck(this, EventEmitter);

			/**
    * Holds event listeners scoped by event type.
    * @type {Object<string, !Array<!function()>>}
    * @protected
    */
			var _this = babelHelpers.possibleConstructorReturn(this, (EventEmitter.__proto__ || Object.getPrototypeOf(EventEmitter)).call(this));

			_this.events_ = null;

			/**
    * Handlers that are triggered when an event is listened to.
    * @type {Array}
    */
			_this.listenerHandlers_ = null;

			/**
    * Configuration option which determines if an event facade should be sent
    * as a param of listeners when emitting events. If set to true, the facade
    * will be passed as the first argument of the listener.
    * @type {boolean}
    * @protected
    */
			_this.shouldUseFacade_ = false;
			return _this;
		}

		/**
   * Adds a handler to given holder variable. If the holder doesn't have a
   * value yet, it will receive the handler directly. If the holder is an array,
   * the value will just be added to it. Otherwise, the holder will be set to a
   * new array containing its previous value plus the new handler.
   * @param {*} holder
   * @param {!function()|Object} handler
   * @return {*} The holder's new value.
   * @protected
   */


		babelHelpers.createClass(EventEmitter, [{
			key: 'addHandler_',
			value: function addHandler_(holder, handler) {
				if (!holder) {
					holder = handler;
				} else {
					if (!Array.isArray(holder)) {
						holder = [holder];
					}
					holder.push(handler);
				}
				return holder;
			}

			/**
    * Adds a listener to the end of the listeners array for the specified events.
    * @param {!(Array|string)} event
    * @param {!Function} listener
    * @param {boolean} opt_default Flag indicating if this listener is a default
    *   action for this event. Default actions are run last, and only if no previous
    *   listener call `preventDefault()` on the received event facade.
    * @return {!EventHandle} Can be used to remove the listener.
    */

		}, {
			key: 'addListener',
			value: function addListener(event, listener, opt_default) {
				this.validateListener_(listener);

				var events = this.toEventsArray_(event);
				for (var i = 0; i < events.length; i++) {
					this.addSingleListener_(events[i], listener, opt_default);
				}

				return new EventHandle(this, event, listener);
			}

			/**
    * Adds a listener to the end of the listeners array for a single event.
    * @param {string} event
    * @param {!Function} listener
    * @param {boolean} opt_default Flag indicating if this listener is a default
    *   action for this event. Default actions are run last, and only if no previous
    *   listener call `preventDefault()` on the received event facade.
    * @return {!EventHandle} Can be used to remove the listener.
    * @param {Function=} opt_origin The original function that was added as a
    *   listener, if there is any.
    * @protected
    */

		}, {
			key: 'addSingleListener_',
			value: function addSingleListener_(event, listener, opt_default, opt_origin) {
				this.runListenerHandlers_(event);
				if (opt_default || opt_origin) {
					listener = {
						default: opt_default,
						fn: listener,
						origin: opt_origin
					};
				}
				this.events_ = this.events_ || {};
				this.events_[event] = this.addHandler_(this.events_[event], listener);
			}

			/**
    * Builds facade for the given event.
    * @param {string} event
    * @return {Object}
    * @protected
    */

		}, {
			key: 'buildFacade_',
			value: function buildFacade_(event) {
				var _this2 = this;

				if (this.getShouldUseFacade()) {
					var _ret = function () {
						var facade = {
							preventDefault: function preventDefault() {
								facade.preventedDefault = true;
							},
							target: _this2,
							type: event
						};
						return {
							v: facade
						};
					}();

					if ((typeof _ret === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret)) === "object") return _ret.v;
				}
			}

			/**
    * Disposes of this instance's object references.
    * @override
    */

		}, {
			key: 'disposeInternal',
			value: function disposeInternal() {
				this.events_ = null;
			}

			/**
    * Execute each of the listeners in order with the supplied arguments.
    * @param {string} event
    * @param {*} opt_args [arg1], [arg2], [...]
    * @return {boolean} Returns true if event had listeners, false otherwise.
    */

		}, {
			key: 'emit',
			value: function emit(event) {
				var listeners = toArray(this.getRawListeners_(event)).concat();
				if (listeners.length === 0) {
					return false;
				}

				var args = array.slice(arguments, 1);
				this.runListeners_(listeners, args, this.buildFacade_(event));
				return true;
			}

			/**
    * Gets the listener objects for the given event, if there are any.
    * @param {string} event
    * @return {Array}
    * @protected
    */

		}, {
			key: 'getRawListeners_',
			value: function getRawListeners_(event) {
				return this.events_ && this.events_[event];
			}

			/**
    * Gets the configuration option which determines if an event facade should
    * be sent as a param of listeners when emitting events. If set to true, the
    * facade will be passed as the first argument of the listener.
    * @return {boolean}
    */

		}, {
			key: 'getShouldUseFacade',
			value: function getShouldUseFacade() {
				return this.shouldUseFacade_;
			}

			/**
    * Returns an array of listeners for the specified event.
    * @param {string} event
    * @return {Array} Array of listeners.
    */

		}, {
			key: 'listeners',
			value: function listeners(event) {
				return toArray(this.getRawListeners_(event)).map(function (listener) {
					return listener.fn ? listener.fn : listener;
				});
			}

			/**
    * Adds a listener that will be invoked a fixed number of times for the
    * events. After each event is triggered the specified amount of times, the
    * listener is removed for it.
    * @param {!(Array|string)} event
    * @param {number} amount The amount of times this event should be listened
    * to.
    * @param {!Function} listener
    * @return {!EventHandle} Can be used to remove the listener.
    */

		}, {
			key: 'many',
			value: function many(event, amount, listener) {
				var events = this.toEventsArray_(event);
				for (var i = 0; i < events.length; i++) {
					this.many_(events[i], amount, listener);
				}

				return new EventHandle(this, event, listener);
			}

			/**
    * Adds a listener that will be invoked a fixed number of times for a single
    * event. After the event is triggered the specified amount of times, the
    * listener is removed.
    * @param {string} event
    * @param {number} amount The amount of times this event should be listened
    * to.
    * @param {!Function} listener
    * @protected
    */

		}, {
			key: 'many_',
			value: function many_(event, amount, listener) {
				var self = this;

				if (amount <= 0) {
					return;
				}

				function handlerInternal() {
					if (--amount === 0) {
						self.removeListener(event, handlerInternal);
					}
					listener.apply(self, arguments);
				}

				self.addSingleListener_(event, handlerInternal, false, listener);
			}

			/**
    * Checks if a listener object matches the given listener function. To match,
    * it needs to either point to that listener or have it as its origin.
    * @param {!Object} listenerObj
    * @param {!Function} listener
    * @return {boolean}
    * @protected
    */

		}, {
			key: 'matchesListener_',
			value: function matchesListener_(listenerObj, listener) {
				var fn = listenerObj.fn || listenerObj;
				return fn === listener || listenerObj.origin && listenerObj.origin === listener;
			}

			/**
    * Removes a listener for the specified events.
    * Caution: changes array indices in the listener array behind the listener.
    * @param {!(Array|string)} events
    * @param {!Function} listener
    * @return {!Object} Returns emitter, so calls can be chained.
    */

		}, {
			key: 'off',
			value: function off(event, listener) {
				this.validateListener_(listener);
				if (!this.events_) {
					return this;
				}

				var events = this.toEventsArray_(event);
				for (var i = 0; i < events.length; i++) {
					this.events_[events[i]] = this.removeMatchingListenerObjs_(toArray(this.events_[events[i]]), listener);
				}

				return this;
			}

			/**
    * Adds a listener to the end of the listeners array for the specified events.
    * @param {!(Array|string)} events
    * @param {!Function} listener
    * @return {!EventHandle} Can be used to remove the listener.
    */

		}, {
			key: 'on',
			value: function on() {
				return this.addListener.apply(this, arguments);
			}

			/**
    * Adds handler that gets triggered when an event is listened to on this
    * instance.
    * @param {!function()}
    */

		}, {
			key: 'onListener',
			value: function onListener(handler) {
				this.listenerHandlers_ = this.addHandler_(this.listenerHandlers_, handler);
			}

			/**
    * Adds a one time listener for the events. This listener is invoked only the
    * next time each event is fired, after which it is removed.
    * @param {!(Array|string)} events
    * @param {!Function} listener
    * @return {!EventHandle} Can be used to remove the listener.
    */

		}, {
			key: 'once',
			value: function once(events, listener) {
				return this.many(events, 1, listener);
			}

			/**
    * Removes all listeners, or those of the specified events. It's not a good
    * idea to remove listeners that were added elsewhere in the code,
    * especially when it's on an emitter that you didn't create.
    * @param {(Array|string)=} opt_events
    * @return {!Object} Returns emitter, so calls can be chained.
    */

		}, {
			key: 'removeAllListeners',
			value: function removeAllListeners(opt_events) {
				if (this.events_) {
					if (opt_events) {
						var events = this.toEventsArray_(opt_events);
						for (var i = 0; i < events.length; i++) {
							this.events_[events[i]] = null;
						}
					} else {
						this.events_ = null;
					}
				}
				return this;
			}

			/**
    * Removes all listener objects from the given array that match the given
    * listener function.
    * @param {Array.<Object>} listenerObjs
    * @param {!Function} listener
    * @return {Array.<Object>|Object} The new listeners array for this event.
    * @protected
    */

		}, {
			key: 'removeMatchingListenerObjs_',
			value: function removeMatchingListenerObjs_(listenerObjs, listener) {
				var finalListeners = [];
				for (var i = 0; i < listenerObjs.length; i++) {
					if (!this.matchesListener_(listenerObjs[i], listener)) {
						finalListeners.push(listenerObjs[i]);
					}
				}
				return finalListeners.length > 0 ? finalListeners : null;
			}

			/**
    * Removes a listener for the specified events.
    * Caution: changes array indices in the listener array behind the listener.
    * @param {!(Array|string)} events
    * @param {!Function} listener
    * @return {!Object} Returns emitter, so calls can be chained.
    */

		}, {
			key: 'removeListener',
			value: function removeListener() {
				return this.off.apply(this, arguments);
			}

			/**
    * Runs the handlers when an event is listened to.
    * @param {string} event
    * @protected
    */

		}, {
			key: 'runListenerHandlers_',
			value: function runListenerHandlers_(event) {
				var handlers = this.listenerHandlers_;
				if (handlers) {
					handlers = toArray(handlers);
					for (var i = 0; i < handlers.length; i++) {
						handlers[i](event);
					}
				}
			}

			/**
    * Runs the given listeners.
    * @param {!Array} listeners
    * @param {!Array} args
    * @param (Object) facade
    * @protected
    */

		}, {
			key: 'runListeners_',
			value: function runListeners_(listeners, args, facade) {
				if (facade) {
					args.push(facade);
				}

				var defaultListeners = [];
				for (var i = 0; i < listeners.length; i++) {
					var listener = listeners[i].fn || listeners[i];
					if (listeners[i].default) {
						defaultListeners.push(listener);
					} else {
						listener.apply(this, args);
					}
				}
				if (!facade || !facade.preventedDefault) {
					for (var j = 0; j < defaultListeners.length; j++) {
						defaultListeners[j].apply(this, args);
					}
				}
			}

			/**
    * Sets the configuration option which determines if an event facade should
    * be sent as a param of listeners when emitting events. If set to true, the
    * facade will be passed as the first argument of the listener.
    * @param {boolean} shouldUseFacade
    * @return {!Object} Returns emitter, so calls can be chained.
    */

		}, {
			key: 'setShouldUseFacade',
			value: function setShouldUseFacade(shouldUseFacade) {
				this.shouldUseFacade_ = shouldUseFacade;
				return this;
			}

			/**
    * Converts the parameter to an array if only one event is given. Reuses the
    * same array each time this conversion is done, to avoid using more memory
    * than necessary.
    * @param  {!(Array|string)} events
    * @return {!Array}
    * @protected
    */

		}, {
			key: 'toEventsArray_',
			value: function toEventsArray_(events) {
				if (isString(events)) {
					singleArray_[0] = events;
					events = singleArray_;
				}
				return events;
			}

			/**
    * Checks if the given listener is valid, throwing an exception when it's not.
    * @param  {*} listener
    * @protected
    */

		}, {
			key: 'validateListener_',
			value: function validateListener_(listener) {
				if (!isFunction(listener)) {
					throw new TypeError('Listener must be a function');
				}
			}
		}]);
		return EventEmitter;
	}(Disposable);

	function toArray(val) {
		val = val || [];
		return Array.isArray(val) ? val : [val];
	}

	this['metal']['EventEmitter'] = EventEmitter;
}).call(this);
'use strict';

(function () {
	var Disposable = this['metalNamed']['metal']['Disposable'];

	/**
  * EventEmitterProxy utility. It's responsible for linking two EventEmitter
  * instances together, emitting events from the first emitter through the
  * second one. That means that listening to a supported event on the target
  * emitter will mean listening to it on the origin emitter as well.
  * @param {EventEmitter} originEmitter Events originated on this emitter
  *   will be fired for the target emitter's listeners as well.
  * @param {EventEmitter} targetEmitter Event listeners attached to this emitter
  *   will also be triggered when the event is fired by the origin emitter.
  * @param {Object} opt_blacklist Optional blacklist of events that should not be
  *   proxied.
  * @constructor
  * @extends {Disposable}
  */

	var EventEmitterProxy = function (_Disposable) {
		babelHelpers.inherits(EventEmitterProxy, _Disposable);

		function EventEmitterProxy(originEmitter, targetEmitter, opt_blacklist, opt_whitelist) {
			babelHelpers.classCallCheck(this, EventEmitterProxy);

			/**
    * Map of events that should not be proxied.
    * @type {Object}
    * @protected
    */
			var _this = babelHelpers.possibleConstructorReturn(this, (EventEmitterProxy.__proto__ || Object.getPrototypeOf(EventEmitterProxy)).call(this));

			_this.blacklist_ = opt_blacklist;

			/**
    * The origin emitter. This emitter's events will be proxied through the
    * target emitter.
    * @type {EventEmitter}
    * @protected
    */
			_this.originEmitter_ = originEmitter;

			/**
    * A list of events that are pending to be listened by an actual origin
    * emitter. Events are stored here when the origin doesn't exist, so they
    * can be set on a new origin when one is set.
    * @type {Array}
    * @protected
    */
			_this.pendingEvents_ = null;

			/**
    * Holds a map of events from the origin emitter that are already being proxied.
    * @type {Object<string, !EventHandle>}
    * @protected
    */
			_this.proxiedEvents_ = null;

			/**
    * The target emitter. This emitter will emit all events that come from
    * the origin emitter.
    * @type {EventEmitter}
    * @protected
    */
			_this.targetEmitter_ = targetEmitter;

			/**
    * Map of events that should be proxied. If whitelist is set blacklist is ignored.
    * @type {Object}
    * @protected
    */
			_this.whitelist_ = opt_whitelist;

			_this.startProxy_();
			return _this;
		}

		/**
   * Adds the given listener for the given event.
   * @param {string} event
   * @param {!function()} listener
   * @return {!EventHandle} The listened event's handle.
   * @protected
   */


		babelHelpers.createClass(EventEmitterProxy, [{
			key: 'addListener_',
			value: function addListener_(event, listener) {
				return this.originEmitter_.on(event, listener);
			}

			/**
    * @inheritDoc
    */

		}, {
			key: 'disposeInternal',
			value: function disposeInternal() {
				this.removeListeners_();
				this.proxiedEvents_ = null;
				this.originEmitter_ = null;
				this.targetEmitter_ = null;
			}

			/**
    * Emits the specified event type on the target emitter.
    * @protected
    */

		}, {
			key: 'emitOnTarget_',
			value: function emitOnTarget_() {
				this.targetEmitter_.emit.apply(this.targetEmitter_, arguments);
			}

			/**
    * Proxies the given event from the origin to the target emitter.
    * @param {string} event
    */

		}, {
			key: 'proxyEvent',
			value: function proxyEvent(event) {
				if (this.shouldProxyEvent_(event)) {
					this.tryToAddListener_(event);
				}
			}

			/**
    * Removes the proxy listener for all events.
    * @protected
    */

		}, {
			key: 'removeListeners_',
			value: function removeListeners_() {
				if (this.proxiedEvents_) {
					var events = Object.keys(this.proxiedEvents_);
					for (var i = 0; i < events.length; i++) {
						this.proxiedEvents_[events[i]].removeListener();
					}
					this.proxiedEvents_ = null;
				}
				this.pendingEvents_ = null;
			}

			/**
    * Changes the origin emitter. This automatically detaches any events that
    * were already being proxied from the previous emitter, and starts proxying
    * them on the new emitter instead.
    * @param {!EventEmitter} originEmitter
    */

		}, {
			key: 'setOriginEmitter',
			value: function setOriginEmitter(originEmitter) {
				var _this2 = this;

				var events = this.originEmitter_ && this.proxiedEvents_ ? Object.keys(this.proxiedEvents_) : this.pendingEvents_;
				this.originEmitter_ = originEmitter;
				if (events) {
					this.removeListeners_();
					events.forEach(function (event) {
						return _this2.proxyEvent(event);
					});
				}
			}

			/**
    * Checks if the given event should be proxied.
    * @param {string} event
    * @return {boolean}
    * @protected
    */

		}, {
			key: 'shouldProxyEvent_',
			value: function shouldProxyEvent_(event) {
				if (this.whitelist_ && !this.whitelist_[event]) {
					return false;
				}
				if (this.blacklist_ && this.blacklist_[event]) {
					return false;
				}
				return !this.proxiedEvents_ || !this.proxiedEvents_[event];
			}

			/**
    * Starts proxying all events from the origin to the target emitter.
    * @protected
    */

		}, {
			key: 'startProxy_',
			value: function startProxy_() {
				this.targetEmitter_.onListener(this.proxyEvent.bind(this));
			}

			/**
    * Adds a listener to the origin emitter, if it exists. Otherwise, stores
    * the pending listener so it can be used on a future origin emitter.
    * @param {string} event
    * @protected
    */

		}, {
			key: 'tryToAddListener_',
			value: function tryToAddListener_(event) {
				if (this.originEmitter_) {
					this.proxiedEvents_ = this.proxiedEvents_ || {};
					this.proxiedEvents_[event] = this.addListener_(event, this.emitOnTarget_.bind(this, event));
				} else {
					this.pendingEvents_ = this.pendingEvents_ || [];
					this.pendingEvents_.push(event);
				}
			}
		}]);
		return EventEmitterProxy;
	}(Disposable);

	this['metal']['EventEmitterProxy'] = EventEmitterProxy;
}).call(this);
'use strict';

(function () {
	var Disposable = this['metalNamed']['metal']['Disposable'];

	/**
  * EventHandler utility. It's useful for easily removing a group of
  * listeners from different EventEmitter instances.
  * @constructor
  * @extends {Disposable}
  */

	var EventHandler = function (_Disposable) {
		babelHelpers.inherits(EventHandler, _Disposable);

		function EventHandler() {
			babelHelpers.classCallCheck(this, EventHandler);

			/**
    * An array that holds the added event handles, so the listeners can be
    * removed later.
    * @type {Array.<EventHandle>}
    * @protected
    */
			var _this = babelHelpers.possibleConstructorReturn(this, (EventHandler.__proto__ || Object.getPrototypeOf(EventHandler)).call(this));

			_this.eventHandles_ = [];
			return _this;
		}

		/**
   * Adds event handles to be removed later through the `removeAllListeners`
   * method.
   * @param {...(!EventHandle)} var_args
   */


		babelHelpers.createClass(EventHandler, [{
			key: 'add',
			value: function add() {
				for (var i = 0; i < arguments.length; i++) {
					this.eventHandles_.push(arguments[i]);
				}
			}

			/**
    * Disposes of this instance's object references.
    * @override
    */

		}, {
			key: 'disposeInternal',
			value: function disposeInternal() {
				this.eventHandles_ = null;
			}

			/**
    * Removes all listeners that have been added through the `add` method.
    */

		}, {
			key: 'removeAllListeners',
			value: function removeAllListeners() {
				for (var i = 0; i < this.eventHandles_.length; i++) {
					this.eventHandles_[i].removeListener();
				}

				this.eventHandles_ = [];
			}
		}]);
		return EventHandler;
	}(Disposable);

	this['metal']['EventHandler'] = EventHandler;
}).call(this);
'use strict';

(function () {
  var EventEmitter = this['metal']['EventEmitter'];
  var EventEmitterProxy = this['metal']['EventEmitterProxy'];
  var EventHandle = this['metal']['EventHandle'];
  var EventHandler = this['metal']['EventHandler'];
  this['metal']['events'] = EventEmitter;
  this['metalNamed']['events'] = this['metalNamed']['events'] || {};
  this['metalNamed']['events']['EventEmitter'] = EventEmitter;
  this['metalNamed']['events']['EventEmitterProxy'] = EventEmitterProxy;
  this['metalNamed']['events']['EventHandle'] = EventHandle;
  this['metalNamed']['events']['EventHandler'] = EventHandler;
}).call(this);
'use strict';

(function () {
	var array = this['metalNamed']['metal']['array'];
	var isString = this['metalNamed']['metal']['isString'];
	var domData = this['metal']['domData'];
	var EventHandle = this['metalNamed']['events']['EventHandle'];

	/**
  * This is a special EventHandle, that is responsible for dom delegated events
  * (only the ones that receive a target element, not a selector string).
  * @extends {EventHandle}
  */

	var DomDelegatedEventHandle = function (_EventHandle) {
		babelHelpers.inherits(DomDelegatedEventHandle, _EventHandle);

		/**
   * The constructor for `DomDelegatedEventHandle`.
   * @param {!Event} emitter Element the event was subscribed to.
   * @param {string} event The name of the event that was subscribed to.
   * @param {!Function} listener The listener subscribed to the event.
   * @param {string=} opt_selector An optional selector used when delegating
   *     the event.
   * @constructor
   */
		function DomDelegatedEventHandle(emitter, event, listener, opt_selector) {
			babelHelpers.classCallCheck(this, DomDelegatedEventHandle);

			var _this = babelHelpers.possibleConstructorReturn(this, (DomDelegatedEventHandle.__proto__ || Object.getPrototypeOf(DomDelegatedEventHandle)).call(this, emitter, event, listener));

			_this.selector_ = opt_selector;
			return _this;
		}

		/**
   * @inheritDoc
   */


		babelHelpers.createClass(DomDelegatedEventHandle, [{
			key: 'removeListener',
			value: function removeListener() {
				var delegating = domData.get(this.emitter_, 'delegating', {});
				var listeners = domData.get(this.emitter_, 'listeners', {});
				var selector = this.selector_;
				var arr = isString(selector) ? delegating[this.event_].selectors : listeners;
				var key = isString(selector) ? selector : this.event_;

				array.remove(arr[key] || [], this.listener_);
				if (arr[key] && arr[key].length === 0) {
					delete arr[key];
				}
			}
		}]);
		return DomDelegatedEventHandle;
	}(EventHandle);

	this['metal']['DomDelegatedEventHandle'] = DomDelegatedEventHandle;
}).call(this);
'use strict';

(function () {
	var EventHandle = this['metalNamed']['events']['EventHandle'];

	/**
  * This is a special EventHandle, that is responsible for dom events, instead
  * of EventEmitter events.
  * @extends {EventHandle}
  */

	var DomEventHandle = function (_EventHandle) {
		babelHelpers.inherits(DomEventHandle, _EventHandle);

		/**
   * The constructor for `DomEventHandle`.
   * @param {!EventEmitter} emitter Emitter the event was subscribed to.
   * @param {string} event The name of the event that was subscribed to.
   * @param {!Function} listener The listener subscribed to the event.
   * @param {boolean} opt_capture Flag indicating if listener should be triggered
   *   during capture phase, instead of during the bubbling phase. Defaults to false.
   * @constructor
   */
		function DomEventHandle(emitter, event, listener, opt_capture) {
			babelHelpers.classCallCheck(this, DomEventHandle);

			var _this = babelHelpers.possibleConstructorReturn(this, (DomEventHandle.__proto__ || Object.getPrototypeOf(DomEventHandle)).call(this, emitter, event, listener));

			_this.capture_ = opt_capture;
			return _this;
		}

		/**
   * @inheritDoc
   */


		babelHelpers.createClass(DomEventHandle, [{
			key: 'removeListener',
			value: function removeListener() {
				this.emitter_.removeEventListener(this.event_, this.listener_, this.capture_);
			}
		}]);
		return DomEventHandle;
	}(EventHandle);

	this['metal']['DomEventHandle'] = DomEventHandle;
}).call(this);
'use strict';

(function () {
	var isDef = this['metalNamed']['metal']['isDef'];
	var isDocument = this['metalNamed']['metal']['isDocument'];
	var isElement = this['metalNamed']['metal']['isElement'];
	var isObject = this['metalNamed']['metal']['isObject'];
	var isString = this['metalNamed']['metal']['isString'];
	var object = this['metalNamed']['metal']['object'];
	var domData = this['metal']['domData'];
	var DomDelegatedEventHandle = this['metal']['DomDelegatedEventHandle'];
	var DomEventHandle = this['metal']['DomEventHandle'];


	var elementsByTag_ = {};
	var supportCache_ = {};
	var customEvents = {};

	this['metalNamed']['domNamed'] = this['metalNamed']['domNamed'] || {};
	this['metalNamed']['domNamed']['customEvents'] = customEvents;
	var LAST_CONTAINER = '__metal_last_container__';
	var USE_CAPTURE = {
		blur: true,
		error: true,
		focus: true,
		invalid: true,
		load: true,
		scroll: true
	};

	/**
  * Adds the requested CSS classes to an element.
  * @param {!Element|!Nodelist} elements The element or elements to add CSS classes to.
  * @param {string} classes CSS classes to add.
  */
	function addClasses(elements, classes) {
		if (!isObject(elements) || !isString(classes)) {
			return;
		}

		if (!elements.length) {
			elements = [elements];
		}

		for (var i = 0; i < elements.length; i++) {
			if ('classList' in elements[i]) {
				addClassesWithNative_(elements[i], classes);
			} else {
				addClassesWithoutNative_(elements[i], classes);
			}
		}
	}

	this['metalNamed']['domNamed']['addClasses'] = addClasses; /**
                                                             * Adds the requested CSS classes to an element using classList.
                                                             * @param {!Element} element The element to add CSS classes to.
                                                             * @param {string} classes CSS classes to add.
                                                             * @private
                                                             */

	function addClassesWithNative_(element, classes) {
		classes.split(' ').forEach(function (className) {
			if (className) {
				element.classList.add(className);
			}
		});
	}

	/**
  * Adds the requested CSS classes to an element without using classList.
  * @param {!Element} element The element to add CSS classes to.
  * @param {string} classes CSS classes to add.
  * @private
  */
	function addClassesWithoutNative_(element, classes) {
		var elementClassName = ' ' + element.className + ' ';
		var classesToAppend = '';

		classes = classes.split(' ');

		for (var i = 0; i < classes.length; i++) {
			var className = classes[i];

			if (elementClassName.indexOf(' ' + className + ' ') === -1) {
				classesToAppend += ' ' + className;
			}
		}

		if (classesToAppend) {
			element.className = element.className + classesToAppend;
		}
	}

	/**
  * Adds an event listener to the given element, to be triggered via delegate.
  * @param {!Element} element
  * @param {string} eventName
  * @param {!function()} listener
  * @private
  */
	function addElementListener_(element, eventName, listener) {
		addToArr_(domData.get(element, 'listeners', {}), eventName, listener);
	}

	/**
  * Adds an event listener to the given element, to be triggered via delegate
  * selectors.
  * @param {!Element} element
  * @param {string} eventName
  * @param {string} selector
  * @param {!function()} listener
  * @private
  */
	function addSelectorListener_(element, eventName, selector, listener) {
		var delegatingData = domData.get(element, 'delegating', {});
		addToArr_(delegatingData[eventName].selectors, selector, listener);
	}

	/**
  * Adds a value to an array inside an object, creating it first if it doesn't
  * yet exist.
  * @param {!Array} arr
  * @param {string} key
  * @param {*} value
  * @private
  */
	function addToArr_(arr, key, value) {
		if (!arr[key]) {
			arr[key] = [];
		}
		arr[key].push(value);
	}

	/**
  * Attaches a delegate listener, unless there's already one attached.
  * @param {!Element} element
  * @param {string} eventName
  * @private
  */
	function attachDelegateEvent_(element, eventName) {
		var delegatingData = domData.get(element, 'delegating', {});
		if (!delegatingData[eventName]) {
			delegatingData[eventName] = {
				handle: on(element, eventName, handleDelegateEvent_, !!USE_CAPTURE[eventName]),
				selectors: {}
			};
		}
	}

	/**
  * Gets the closest element up the tree from the given element (including
  * itself) that matches the specified selector, or null if none match.
  * @param {Element} element
  * @param {string} selector
  * @return {Element}
  */
	function closest(element, selector) {
		while (element && !match(element, selector)) {
			element = element.parentNode;
		}
		return element;
	}

	this['metalNamed']['domNamed']['closest'] = closest; /**
                                                       * Appends a child node with text or other nodes to a parent node. If
                                                       * child is a HTML string it will be automatically converted to a document
                                                       * fragment before appending it to the parent.
                                                       * @param {!Element} parent The node to append nodes to.
                                                       * @param {!(Element|NodeList|string)} child The thing to append to the parent.
                                                       * @return {!Element} The appended child.
                                                       */

	function append(parent, child) {
		if (isString(child)) {
			child = buildFragment(child);
		}
		if (child instanceof NodeList) {
			var childArr = Array.prototype.slice.call(child);
			for (var i = 0; i < childArr.length; i++) {
				parent.appendChild(childArr[i]);
			}
		} else {
			parent.appendChild(child);
		}
		return child;
	}

	this['metalNamed']['domNamed']['append'] = append; /**
                                                     * Helper for converting a HTML string into a document fragment.
                                                     * @param {string} htmlString The HTML string to convert.
                                                     * @return {!Element} The resulting document fragment.
                                                     */

	function buildFragment(htmlString) {
		var tempDiv = document.createElement('div');
		tempDiv.innerHTML = '<br>' + htmlString;
		tempDiv.removeChild(tempDiv.firstChild);

		var fragment = document.createDocumentFragment();
		while (tempDiv.firstChild) {
			fragment.appendChild(tempDiv.firstChild);
		}
		return fragment;
	}

	this['metalNamed']['domNamed']['buildFragment'] = buildFragment; /**
                                                                   * Checks if the first element contains the second one.
                                                                   * @param {!Element} element1
                                                                   * @param {!Element} element2
                                                                   * @return {boolean}
                                                                   */

	function contains(element1, element2) {
		if (isDocument(element1)) {
			// document.contains is not defined on IE9, so call it on documentElement instead.
			return element1.documentElement.contains(element2);
		} else {
			return element1.contains(element2);
		}
	}

	this['metalNamed']['domNamed']['contains'] = contains; /**
                                                         * Listens to the specified event on the given DOM element, but only calls the
                                                         * given callback listener when it's triggered by elements that match the
                                                         * given selector or target element.
                                                         * @param {!Element} element The DOM element the event should be listened on.
                                                         * @param {string} eventName The name of the event to listen to.
                                                         * @param {!Element|string} selectorOrTarget Either an element or css selector
                                                         *     that should match the event for the listener to be triggered.
                                                         * @param {!function(!Object)} callback Function to be called when the event
                                                         *     is triggered. It will receive the normalized event object.
                                                         * @param {boolean=} opt_default Optional flag indicating if this is a default
                                                         *     listener. That means that it would only be executed after all non
                                                         *     default listeners, and only if the event isn't prevented via
                                                         *     `preventDefault`.
                                                         * @return {!EventHandle} Can be used to remove the listener.
                                                         */

	function delegate(element, eventName, selectorOrTarget, callback, opt_default) {
		var customConfig = customEvents[eventName];
		if (customConfig && customConfig.delegate) {
			eventName = customConfig.originalEvent;
			callback = customConfig.handler.bind(customConfig, callback);
		}

		if (opt_default) {
			// Wrap callback so we don't set property directly on it.
			callback = callback.bind();
			callback.defaultListener_ = true;
		}

		attachDelegateEvent_(element, eventName);
		if (isString(selectorOrTarget)) {
			addSelectorListener_(element, eventName, selectorOrTarget, callback);
		} else {
			addElementListener_(selectorOrTarget, eventName, callback);
		}

		return new DomDelegatedEventHandle(isString(selectorOrTarget) ? element : selectorOrTarget, eventName, callback, isString(selectorOrTarget) ? selectorOrTarget : null);
	}

	this['metalNamed']['domNamed']['delegate'] = delegate; /**
                                                         * Verifies if the element is able to trigger the Click event,
                                                         * simulating browsers behaviour, avoiding event listeners to be called by triggerEvent method.
                                                         * @param {Element} node Element to be checked.
                                                         * @param {string} eventName The event name.
                                                         * @private
                                                         */

	function isAbleToInteractWith_(node, eventName, opt_eventObj) {
		if (opt_eventObj && eventName === 'click' && opt_eventObj.button === 2) {
			// Firefox triggers "click" events on the document for right clicks. This
			// causes our delegate logic to trigger it for regular elements too, which
			// shouldn't happen. Ignoring them here.
			return false;
		}

		var matchesSelector = ['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'FIELDSET'];
		if (eventName === 'click' && matchesSelector.indexOf(node.tagName) > -1) {
			return !(node.disabled || parent(node, 'fieldset[disabled]'));
		}
		return true;
	}

	/**
  * Inserts node in document as last element.
  * @param {Element} node Element to remove children from.
  */
	function enterDocument(node) {
		node && append(document.body, node);
	}

	this['metalNamed']['domNamed']['enterDocument'] = enterDocument; /**
                                                                   * Removes node from document.
                                                                   * @param {Element} node Element to remove children from.
                                                                   */

	function exitDocument(node) {
		if (node && node.parentNode) {
			node.parentNode.removeChild(node);
		}
	}

	this['metalNamed']['domNamed']['exitDocument'] = exitDocument; /**
                                                                 * This is called when an event is triggered by a delegate listener. All
                                                                 * matching listeners of this event type from `target` to `currentTarget` will
                                                                 * be triggered.
                                                                 * @param {!Event} event The event payload.
                                                                 * @return {boolean} False if at least one of the triggered callbacks returns
                                                                 *     false, or true otherwise.
                                                                 * @private
                                                                 */

	function handleDelegateEvent_(event) {
		normalizeDelegateEvent_(event);
		var ret = true;
		var container = event.currentTarget;
		var defFns = [];

		ret &= triggerDelegatedListeners_(container, event, defFns);
		ret &= triggerDefaultDelegatedListeners_(defFns, event);

		event.delegateTarget = null;
		event[LAST_CONTAINER] = container;
		return ret;
	}

	/**
  * Checks if the given element has the requested css class.
  * @param {!Element} element
  * @param {string} className
  * @return {boolean}
  */
	function hasClass(element, className) {
		if ('classList' in element) {
			return hasClassWithNative_(element, className);
		} else {
			return hasClassWithoutNative_(element, className);
		}
	}

	this['metalNamed']['domNamed']['hasClass'] = hasClass; /**
                                                         * Checks if the given element has the requested css class using classList.
                                                         * @param {!Element} element
                                                         * @param {string} className
                                                         * @return {boolean}
                                                         * @private
                                                         */

	function hasClassWithNative_(element, className) {
		return element.classList.contains(className);
	}

	/**
  * Checks if the given element has the requested css class without using classList.
  * @param {!Element} element
  * @param {string} className
  * @return {boolean}
  * @private
  */
	function hasClassWithoutNative_(element, className) {
		return (' ' + element.className + ' ').indexOf(' ' + className + ' ') >= 0;
	}

	/**
  * Checks if the given element is empty or not.
  * @param {!Element} element
  * @return {boolean}
  */
	function isEmpty(element) {
		return element.childNodes.length === 0;
	}

	this['metalNamed']['domNamed']['isEmpty'] = isEmpty; /**
                                                       * Check if an element matches a given selector.
                                                       * @param {Element} element
                                                       * @param {string} selector
                                                       * @return {boolean}
                                                       */

	function match(element, selector) {
		if (!element || element.nodeType !== 1) {
			return false;
		}

		var p = Element.prototype;
		var m = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector;
		if (m) {
			return m.call(element, selector);
		}

		return matchFallback_(element, selector);
	}

	this['metalNamed']['domNamed']['match'] = match; /**
                                                   * Check if an element matches a given selector, using an internal implementation
                                                   * instead of calling existing javascript functions.
                                                   * @param {Element} element
                                                   * @param {string} selector
                                                   * @return {boolean}
                                                   * @private
                                                   */

	function matchFallback_(element, selector) {
		var nodes = document.querySelectorAll(selector, element.parentNode);
		for (var i = 0; i < nodes.length; ++i) {
			if (nodes[i] === element) {
				return true;
			}
		}
		return false;
	}

	/**
  * Returns the next sibling of the given element that matches the specified
  * selector, or null if there is none.
  * @param {!Element} element
  * @param {?string} selector
  */
	function next(element, selector) {
		do {
			element = element.nextSibling;
			if (element && match(element, selector)) {
				return element;
			}
		} while (element);
		return null;
	}

	this['metalNamed']['domNamed']['next'] = next; /**
                                                 * Normalizes the event payload for delegate listeners.
                                                 * @param {!Event} event
                                                 * @private
                                                 */

	function normalizeDelegateEvent_(event) {
		event.stopPropagation = stopPropagation_;
		event.stopImmediatePropagation = stopImmediatePropagation_;
	}

	/**
  * Listens to the specified event on the given DOM element. This function normalizes
  * DOM event payloads and functions so they'll work the same way on all supported
  * browsers.
  * @param {!Element|string} element The DOM element to listen to the event on, or
  *   a selector that should be delegated on the entire document.
  * @param {string} eventName The name of the event to listen to.
  * @param {!function(!Object)} callback Function to be called when the event is
  *   triggered. It will receive the normalized event object.
  * @param {boolean} opt_capture Flag indicating if listener should be triggered
  *   during capture phase, instead of during the bubbling phase. Defaults to false.
  * @return {!DomEventHandle} Can be used to remove the listener.
  */
	function on(element, eventName, callback, opt_capture) {
		if (isString(element)) {
			return delegate(document, eventName, element, callback);
		}
		var customConfig = customEvents[eventName];
		if (customConfig && customConfig.event) {
			eventName = customConfig.originalEvent;
			callback = customConfig.handler.bind(customConfig, callback);
		}
		element.addEventListener(eventName, callback, opt_capture);
		return new DomEventHandle(element, eventName, callback, opt_capture);
	}

	this['metalNamed']['domNamed']['on'] = on; /**
                                             * Listens to the specified event on the given DOM element once. This
                                             * function normalizes DOM event payloads and functions so they'll work the
                                             * same way on all supported browsers.
                                             * @param {!Element} element The DOM element to listen to the event on.
                                             * @param {string} eventName The name of the event to listen to.
                                             * @param {!function(!Object)} callback Function to be called when the event
                                             *   is triggered. It will receive the normalized event object.
                                             * @return {!DomEventHandle} Can be used to remove the listener.
                                             */

	function once(element, eventName, callback) {
		var domEventHandle = on(element, eventName, function () {
			domEventHandle.removeListener();
			return callback.apply(this, arguments);
		});
		return domEventHandle;
	}

	this['metalNamed']['domNamed']['once'] = once; /**
                                                 * Gets the first parent from the given element that matches the specified
                                                 * selector, or null if none match.
                                                 * @param {!Element} element
                                                 * @param {string} selector
                                                 * @return {Element}
                                                 */

	function parent(element, selector) {
		return closest(element.parentNode, selector);
	}

	this['metalNamed']['domNamed']['parent'] = parent; /**
                                                     * Registers a custom event.
                                                     * @param {string} eventName The name of the custom event.
                                                     * @param {!Object} customConfig An object with information about how the event
                                                     *   should be handled.
                                                     */

	function registerCustomEvent(eventName, customConfig) {
		customEvents[eventName] = customConfig;
	}

	this['metalNamed']['domNamed']['registerCustomEvent'] = registerCustomEvent; /**
                                                                               * Removes all the child nodes on a DOM node.
                                                                               * @param {Element} node Element to remove children from.
                                                                               */

	function removeChildren(node) {
		var child;
		while (child = node.firstChild) {
			node.removeChild(child);
		}
	}

	this['metalNamed']['domNamed']['removeChildren'] = removeChildren; /**
                                                                     * Removes the requested CSS classes from an element.
                                                                     * @param {!Element|!NodeList} elements The element or elements to remove CSS classes from.
                                                                     * @param {string} classes CSS classes to remove.
                                                                     */

	function removeClasses(elements, classes) {
		if (!isObject(elements) || !isString(classes)) {
			return;
		}

		if (!elements.length) {
			elements = [elements];
		}

		for (var i = 0; i < elements.length; i++) {
			if ('classList' in elements[i]) {
				removeClassesWithNative_(elements[i], classes);
			} else {
				removeClassesWithoutNative_(elements[i], classes);
			}
		}
	}

	this['metalNamed']['domNamed']['removeClasses'] = removeClasses; /**
                                                                   * Removes the requested CSS classes from an element using classList.
                                                                   * @param {!Element} element The element to remove CSS classes from.
                                                                   * @param {string} classes CSS classes to remove.
                                                                   * @private
                                                                   */

	function removeClassesWithNative_(element, classes) {
		classes.split(' ').forEach(function (className) {
			if (className) {
				element.classList.remove(className);
			}
		});
	}

	/**
  * Removes the requested CSS classes from an element without using classList.
  * @param {!Element} element The element to remove CSS classes from.
  * @param {string} classes CSS classes to remove.
  * @private
  */
	function removeClassesWithoutNative_(element, classes) {
		var elementClassName = ' ' + element.className + ' ';

		classes = classes.split(' ');

		for (var i = 0; i < classes.length; i++) {
			elementClassName = elementClassName.replace(' ' + classes[i] + ' ', ' ');
		}

		element.className = elementClassName.trim();
	}

	/**
  * Replaces the first element with the second.
  * @param {Element} element1
  * @param {Element} element2
  */
	function replace(element1, element2) {
		if (element1 && element2 && element1 !== element2 && element1.parentNode) {
			element1.parentNode.insertBefore(element2, element1);
			element1.parentNode.removeChild(element1);
		}
	}

	this['metalNamed']['domNamed']['replace'] = replace; /**
                                                       * The function that replaces `stopImmediatePropagation_` for events.
                                                       * @private
                                                       */

	function stopImmediatePropagation_() {
		var event = this; // jshint ignore:line
		event.stopped = true;
		event.stoppedImmediate = true;
		Event.prototype.stopImmediatePropagation.call(event);
	}

	/**
  * The function that replaces `stopPropagation` for events.
  * @private
  */
	function stopPropagation_() {
		var event = this; // jshint ignore:line
		event.stopped = true;
		Event.prototype.stopPropagation.call(event);
	}

	/**
  * Checks if the given element supports the given event type.
  * @param {!Element|string} element The DOM element or element tag name to check.
  * @param {string} eventName The name of the event to check.
  * @return {boolean}
  */
	function supportsEvent(element, eventName) {
		if (customEvents[eventName]) {
			return true;
		}

		if (isString(element)) {
			if (!elementsByTag_[element]) {
				elementsByTag_[element] = document.createElement(element);
			}
			element = elementsByTag_[element];
		}

		var tag = element.tagName;
		if (!supportCache_[tag] || !supportCache_[tag].hasOwnProperty(eventName)) {
			supportCache_[tag] = supportCache_[tag] || {};
			supportCache_[tag][eventName] = 'on' + eventName in element;
		}
		return supportCache_[tag][eventName];
	}

	this['metalNamed']['domNamed']['supportsEvent'] = supportsEvent; /**
                                                                   * This triggers all default matched delegated listeners of a given event type.
                                                                   * @param {!Array} defaultFns Array to collect default listeners in, instead
                                                                   * @param {!Event} event
                                                                   * @return {boolean} False if at least one of the triggered callbacks returns
                                                                   *     false, or true otherwise.
                                                                   * @private
                                                                   */

	function triggerDefaultDelegatedListeners_(defFns, event) {
		var ret = true;

		for (var i = 0; i < defFns.length && !event.defaultPrevented; i++) {
			event.delegateTarget = defFns[i].element;
			ret &= defFns[i].fn(event);
		}

		return ret;
	}

	/**
  * This triggers all matched delegated listeners of a given event type when its
  * delegated target is able to interact.
  * @param {!Element} container
  * @param {!Event} event
  * @param {!Array} defaultFns Array to collect default listeners in, instead
  *     of running them.
  * @return {boolean} False if at least one of the triggered callbacks returns
  *     false, or true otherwise.
  * @private
  */
	function triggerDelegatedListeners_(container, event, defaultFns) {
		var ret = true;
		var currElement = event.target;
		var limit = container.parentNode;

		while (currElement && currElement !== limit && !event.stopped) {
			if (isAbleToInteractWith_(currElement, event.type, event)) {
				event.delegateTarget = currElement;
				ret &= triggerElementListeners_(currElement, event, defaultFns);
				ret &= triggerSelectorListeners_(container, currElement, event, defaultFns);
			}
			currElement = currElement.parentNode;
		}

		return ret;
	}

	/**
  * Converts the given argument to a DOM element. Strings are assumed to
  * be selectors, and so a matched element will be returned. If the arg
  * is already a DOM element it will be the return value.
  * @param {string|Element|Document} selectorOrElement
  * @return {Element} The converted element, or null if none was found.
  */
	function toElement(selectorOrElement) {
		if (isElement(selectorOrElement) || isDocument(selectorOrElement)) {
			return selectorOrElement;
		} else if (isString(selectorOrElement)) {
			if (selectorOrElement[0] === '#' && selectorOrElement.indexOf(' ') === -1) {
				return document.getElementById(selectorOrElement.substr(1));
			} else {
				return document.querySelector(selectorOrElement);
			}
		} else {
			return null;
		}
	}

	this['metalNamed']['domNamed']['toElement'] = toElement; /**
                                                           * Adds or removes one or more classes from an element. If any of the classes
                                                           * is present, it will be removed from the element, or added otherwise.
                                                           * @param {!Element} element The element which classes will be toggled.
                                                           * @param {string} classes The classes which have to added or removed from the element.
                                                           */

	function toggleClasses(element, classes) {
		if (!isObject(element) || !isString(classes)) {
			return;
		}

		if ('classList' in element) {
			toggleClassesWithNative_(element, classes);
		} else {
			toggleClassesWithoutNative_(element, classes);
		}
	}

	this['metalNamed']['domNamed']['toggleClasses'] = toggleClasses; /**
                                                                   * Adds or removes one or more classes from an element using classList.
                                                                   * If any of the classes is present, it will be removed from the element,
                                                                   * or added otherwise.
                                                                   * @param {!Element} element The element which classes will be toggled.
                                                                   * @param {string} classes The classes which have to added or removed from the element.
                                                                   * @private
                                                                   */

	function toggleClassesWithNative_(element, classes) {
		classes.split(' ').forEach(function (className) {
			element.classList.toggle(className);
		});
	}

	/**
  * Adds or removes one or more classes from an element without using classList.
  * If any of the classes is present, it will be removed from the element,
  * or added otherwise.
  * @param {!Element} element The element which classes will be toggled.
  * @param {string} classes The classes which have to added or removed from the element.
  * @private
  */
	function toggleClassesWithoutNative_(element, classes) {
		var elementClassName = ' ' + element.className + ' ';

		classes = classes.split(' ');

		for (var i = 0; i < classes.length; i++) {
			var className = ' ' + classes[i] + ' ';
			var classIndex = elementClassName.indexOf(className);

			if (classIndex === -1) {
				elementClassName = elementClassName + classes[i] + ' ';
			} else {
				elementClassName = elementClassName.substring(0, classIndex) + ' ' + elementClassName.substring(classIndex + className.length);
			}
		}

		element.className = elementClassName.trim();
	}

	/**
  * Triggers all listeners for the given event type that are stored in the
  * specified element.
  * @param {!Element} element
  * @param {!Event} event
  * @param {!Array} defaultFns Array to collect default listeners in, instead
  *     of running them.
  * @return {boolean} False if at least one of the triggered callbacks returns
  *     false, or true otherwise.
  * @private
  */
	function triggerElementListeners_(element, event, defaultFns) {
		var lastContainer = event[LAST_CONTAINER];
		if (!isDef(lastContainer) || !contains(lastContainer, element)) {
			var listeners = domData.get(element, 'listeners', {})[event.type];
			return triggerListeners_(listeners, event, element, defaultFns);
		}
		return true;
	}

	/**
  * Triggers the specified event on the given element.
  * NOTE: This should mostly be used for testing, not on real code.
  * @param {!Element} element The node that should trigger the event.
  * @param {string} eventName The name of the event to be triggred.
  * @param {Object=} opt_eventObj An object with data that should be on the
  *   triggered event's payload.
  */
	function triggerEvent(element, eventName, opt_eventObj) {
		if (isAbleToInteractWith_(element, eventName, opt_eventObj)) {
			var eventObj = document.createEvent('HTMLEvents');
			eventObj.initEvent(eventName, true, true);
			object.mixin(eventObj, opt_eventObj);
			element.dispatchEvent(eventObj);
		}
	}

	this['metalNamed']['domNamed']['triggerEvent'] = triggerEvent; /**
                                                                 * Triggers the given listeners array.
                                                                 * @param {Array<!function()>} listeners
                                                                 * @param {!Event} event
                                                                 * @param {!Element} element
                                                                 * @param {!Array} defaultFns Array to collect default listeners in, instead
                                                                 *     of running them.
                                                                 * @return {boolean} False if at least one of the triggered callbacks returns
                                                                 *     false, or true otherwise.
                                                                 * @private
                                                                 */

	function triggerListeners_(listeners, event, element, defaultFns) {
		var ret = true;
		listeners = listeners || [];
		for (var i = 0; i < listeners.length && !event.stoppedImmediate; i++) {
			if (listeners[i].defaultListener_) {
				defaultFns.push({
					element: element,
					fn: listeners[i]
				});
			} else {
				ret &= listeners[i](event);
			}
		}
		return ret;
	}

	/**
  * Triggers all selector listeners for the given event.
  * @param {!Element} container
  * @param {!Element} element
  * @param {!Event} event
  * @param {!Array} defaultFns Array to collect default listeners in, instead
  *     of running them.
  * @return {boolean} False if at least one of the triggered callbacks returns
  *     false, or true otherwise.
  * @private
  */
	function triggerSelectorListeners_(container, element, event, defaultFns) {
		var ret = true;
		var data = domData.get(container, 'delegating', {});
		var map = data[event.type].selectors;
		var selectors = Object.keys(map);
		for (var i = 0; i < selectors.length && !event.stoppedImmediate; i++) {
			if (match(element, selectors[i])) {
				var listeners = map[selectors[i]];
				ret &= triggerListeners_(listeners, event, element, defaultFns);
			}
		}
		return ret;
	}
}).call(this);
'use strict';

// This file exists just for backwards compatibility, making sure that old
// default imports for this file still work. It's best to use the named exports
// for each function instead though, since that allows bundlers like Rollup to
// reduce the bundle size by removing unused code.

(function () {
  var dom = this['metalNamed']['domNamed'];
  this['metal']['dom'] = dom;
  this['metalNamed']['dom'] = this['metalNamed']['dom'] || {};
  this['metalNamed']['dom']['dom'] = dom;
  Object.keys(this['metalNamed']['domNamed']).forEach(function (key) {
    this['metalNamed']['dom'][key] = this['metalNamed']['domNamed'][key];
  });
}).call(this);
'use strict';

(function () {
	var delegate = this['metalNamed']['dom']['delegate'];
	var on = this['metalNamed']['dom']['on'];
	var supportsEvent = this['metalNamed']['dom']['supportsEvent'];
	var EventEmitterProxy = this['metalNamed']['events']['EventEmitterProxy'];

	/**
  * DomEventEmitterProxy utility. It extends `EventEmitterProxy` to also accept
  * dom elements as origin emitters.
  * @extends {EventEmitterProxy}
  */

	var DomEventEmitterProxy = function (_EventEmitterProxy) {
		babelHelpers.inherits(DomEventEmitterProxy, _EventEmitterProxy);

		function DomEventEmitterProxy() {
			babelHelpers.classCallCheck(this, DomEventEmitterProxy);
			return babelHelpers.possibleConstructorReturn(this, (DomEventEmitterProxy.__proto__ || Object.getPrototypeOf(DomEventEmitterProxy)).apply(this, arguments));
		}

		babelHelpers.createClass(DomEventEmitterProxy, [{
			key: 'addListener_',

			/**
    * Adds the given listener for the given event.
    * @param {string} event
    * @param {!function()} listener
    * @return {!EventHandle} The listened event's handle.
    * @protected
    * @override
    */
			value: function addListener_(event, listener) {
				if (this.originEmitter_.addEventListener) {
					if (this.isDelegateEvent_(event)) {
						var index = event.indexOf(':', 9);
						var eventName = event.substring(9, index);
						var selector = event.substring(index + 1);
						return delegate(this.originEmitter_, eventName, selector, listener);
					} else {
						return on(this.originEmitter_, event, listener);
					}
				} else {
					return babelHelpers.get(DomEventEmitterProxy.prototype.__proto__ || Object.getPrototypeOf(DomEventEmitterProxy.prototype), 'addListener_', this).call(this, event, listener);
				}
			}

			/**
    * Checks if the given event is of the delegate type.
    * @param {string} event
    * @return {boolean}
    * @protected
    */

		}, {
			key: 'isDelegateEvent_',
			value: function isDelegateEvent_(event) {
				return event.substr(0, 9) === 'delegate:';
			}

			/**
    * Checks if the given event is supported by the origin element.
    * @param {string} event
    * @protected
    */

		}, {
			key: 'isSupportedDomEvent_',
			value: function isSupportedDomEvent_(event) {
				if (!this.originEmitter_ || !this.originEmitter_.addEventListener) {
					return true;
				}
				return this.isDelegateEvent_(event) && event.indexOf(':', 9) !== -1 || supportsEvent(this.originEmitter_, event);
			}

			/**
    * Checks if the given event should be proxied.
    * @param {string} event
    * @return {boolean}
    * @protected
    * @override
    */

		}, {
			key: 'shouldProxyEvent_',
			value: function shouldProxyEvent_(event) {
				return babelHelpers.get(DomEventEmitterProxy.prototype.__proto__ || Object.getPrototypeOf(DomEventEmitterProxy.prototype), 'shouldProxyEvent_', this).call(this, event) && this.isSupportedDomEvent_(event);
			}
		}]);
		return DomEventEmitterProxy;
	}(EventEmitterProxy);

	this['metal']['DomEventEmitterProxy'] = DomEventEmitterProxy;
}).call(this);
'use strict';

(function () {
	var append = this['metalNamed']['dom']['append'];
	var string = this['metalNamed']['metal']['string'];

	/**
  * Class with static methods responsible for doing browser feature checks.
  */

	var features = function () {
		function features() {
			babelHelpers.classCallCheck(this, features);
		}

		babelHelpers.createClass(features, null, [{
			key: 'checkAnimationEventName',

			/**
    * Some browsers still supports prefixed animation events. This method can
    * be used to retrieve the current browser event name for both, animation
    * and transition.
    * @return {object}
    */
			value: function checkAnimationEventName() {
				if (features.animationEventName_ === undefined) {
					features.animationEventName_ = {
						animation: features.checkAnimationEventName_('animation'),
						transition: features.checkAnimationEventName_('transition')
					};
				}
				return features.animationEventName_;
			}

			/**
    * @protected
    * @param {string} type Type to test: animation, transition.
    * @return {string} Browser event name.
    */

		}, {
			key: 'checkAnimationEventName_',
			value: function checkAnimationEventName_(type) {
				var prefixes = ['Webkit', 'MS', 'O', ''];
				var typeTitleCase = string.replaceInterval(type, 0, 1, type.substring(0, 1).toUpperCase());
				var suffixes = [typeTitleCase + 'End', typeTitleCase + 'End', typeTitleCase + 'End', type + 'end'];
				for (var i = 0; i < prefixes.length; i++) {
					if (features.animationElement_.style[prefixes[i] + typeTitleCase] !== undefined) {
						return prefixes[i].toLowerCase() + suffixes[i];
					}
				}
				return type + 'end';
			}

			/**
    * Some browsers (like IE9) change the order of element attributes, when html
    * is rendered. This method can be used to check if this behavior happens on
    * the current browser.
    * @return {boolean}
    */

		}, {
			key: 'checkAttrOrderChange',
			value: function checkAttrOrderChange() {
				if (features.attrOrderChange_ === undefined) {
					var originalContent = '<div data-component="" data-ref=""></div>';
					var element = document.createElement('div');
					append(element, originalContent);
					features.attrOrderChange_ = originalContent !== element.innerHTML;
				}
				return features.attrOrderChange_;
			}
		}]);
		return features;
	}();

	features.animationElement_ = document.createElement('div');
	features.animationEventName_ = undefined;
	features.attrOrderChange_ = undefined;

	this['metal']['features'] = features;
}).call(this);
'use strict';

(function () {
	var async = this['metalNamed']['metal']['async'];
	var exitDocument = this['metalNamed']['dom']['exitDocument'];
	var once = this['metalNamed']['dom']['once'];

	/**
  * Utility functions for running javascript code in the global scope.
  */

	var globalEval = function () {
		function globalEval() {
			babelHelpers.classCallCheck(this, globalEval);
		}

		babelHelpers.createClass(globalEval, null, [{
			key: 'run',

			/**
    * Evaluates the given string in the global scope.
    * @param {string} text
    * @param {function()=} opt_appendFn Optional function to append the node
    *   into document.
    * @return {Element} script
    */
			value: function run(text, opt_appendFn) {
				var script = document.createElement('script');
				script.text = text;
				if (opt_appendFn) {
					opt_appendFn(script);
				} else {
					document.head.appendChild(script);
				}
				exitDocument(script);
				return script;
			}

			/**
    * Evaluates the given javascript file in the global scope.
    * @param {string} src The file's path.
    * @param {function()=} opt_callback Optional function to be called
    *   when the script has been run.
    * @param {function()=} opt_appendFn Optional function to append the node
    *   into document.
    * @return {Element} script
    */

		}, {
			key: 'runFile',
			value: function runFile(src, opt_callback, opt_appendFn) {
				var script = document.createElement('script');
				script.src = src;

				var callback = function callback() {
					exitDocument(script);
					opt_callback && opt_callback();
				};
				once(script, 'load', callback);
				once(script, 'error', callback);

				if (opt_appendFn) {
					opt_appendFn(script);
				} else {
					document.head.appendChild(script);
				}

				return script;
			}

			/**
    * Evaluates the code referenced by the given script element.
    * @param {!Element} script
    * @param {function()=} opt_callback Optional function to be called
    *   when the script has been run.
    * @param {function()=} opt_appendFn Optional function to append the node
    *   into document.
    * @return {Element} script
    */

		}, {
			key: 'runScript',
			value: function runScript(script, opt_callback, opt_appendFn) {
				var callback = function callback() {
					opt_callback && opt_callback();
				};
				if (script.type && script.type !== 'text/javascript') {
					async.nextTick(callback);
					return;
				}
				exitDocument(script);
				if (script.src) {
					return globalEval.runFile(script.src, opt_callback, opt_appendFn);
				} else {
					async.nextTick(callback);
					return globalEval.run(script.text, opt_appendFn);
				}
			}

			/**
    * Evaluates any script tags present in the given element.
    * @param {!Element} element
    * @param {function()=} opt_callback Optional function to be called
    *   when the script has been run.
    * @param {function()=} opt_appendFn Optional function to append the node
    *   into document.
    */

		}, {
			key: 'runScriptsInElement',
			value: function runScriptsInElement(element, opt_callback, opt_appendFn) {
				var scripts = element.querySelectorAll('script');
				if (scripts.length) {
					globalEval.runScriptsInOrder(scripts, 0, opt_callback, opt_appendFn);
				} else if (opt_callback) {
					async.nextTick(opt_callback);
				}
			}

			/**
    * Runs the given scripts elements in the order that they appear.
    * @param {!NodeList} scripts
    * @param {number} index
    * @param {function()=} opt_callback Optional function to be called
    *   when the script has been run.
    * @param {function()=} opt_appendFn Optional function to append the node
    *   into document.
    */

		}, {
			key: 'runScriptsInOrder',
			value: function runScriptsInOrder(scripts, index, opt_callback, opt_appendFn) {
				globalEval.runScript(scripts.item(index), function () {
					if (index < scripts.length - 1) {
						globalEval.runScriptsInOrder(scripts, index + 1, opt_callback, opt_appendFn);
					} else if (opt_callback) {
						async.nextTick(opt_callback);
					}
				}, opt_appendFn);
			}
		}]);
		return globalEval;
	}();

	this['metal']['globalEval'] = globalEval;
}).call(this);
'use strict';

(function () {
	var async = this['metalNamed']['metal']['async'];
	var once = this['metalNamed']['dom']['once'];

	/**
  * Utility functions for running styles.
  */

	var globalEvalStyles = function () {
		function globalEvalStyles() {
			babelHelpers.classCallCheck(this, globalEvalStyles);
		}

		babelHelpers.createClass(globalEvalStyles, null, [{
			key: 'run',

			/**
    * Evaluates the given style.
    * @param {string} text
    * @param {function()=} opt_appendFn Optional function to append the node
    *   into document.
    * @return {Element} style
    */
			value: function run(text, opt_appendFn) {
				var style = document.createElement('style');
				style.innerHTML = text;
				if (opt_appendFn) {
					opt_appendFn(style);
				} else {
					document.head.appendChild(style);
				}
				return style;
			}

			/**
    * Evaluates the given style file.
    * @param {string} href The file's path.
    * @param {function()=} opt_callback Optional function to be called
    *   when the styles has been run.
    * @param {function()=} opt_appendFn Optional function to append the node
    *   into document.
    * @return {Element} style
    */

		}, {
			key: 'runFile',
			value: function runFile(href, opt_callback, opt_appendFn) {
				var link = document.createElement('link');
				link.rel = 'stylesheet';
				link.href = href;
				globalEvalStyles.runStyle(link, opt_callback, opt_appendFn);
				return link;
			}

			/**
    * Evaluates the code referenced by the given style/link element.
    * @param {!Element} style
    * @param {function()=} opt_callback Optional function to be called
    *   when the script has been run.
    * @param {function()=} opt_appendFn Optional function to append the node
    *   into document.
    *  @return {Element} style
    */

		}, {
			key: 'runStyle',
			value: function runStyle(style, opt_callback, opt_appendFn) {
				var callback = function callback() {
					opt_callback && opt_callback();
				};
				if (style.rel && style.rel !== 'stylesheet') {
					async.nextTick(callback);
					return;
				}

				if (style.tagName === 'STYLE') {
					async.nextTick(callback);
				} else {
					once(style, 'load', callback);
					once(style, 'error', callback);
				}

				if (opt_appendFn) {
					opt_appendFn(style);
				} else {
					document.head.appendChild(style);
				}

				return style;
			}

			/**
    * Evaluates any style present in the given element.
    * @param {!Element} element
    * @param {function()=} opt_callback Optional function to be called when the
    *   style has been run.
    * @param {function()=} opt_appendFn Optional function to append the node
    *   into document.
    */

		}, {
			key: 'runStylesInElement',
			value: function runStylesInElement(element, opt_callback, opt_appendFn) {
				var styles = element.querySelectorAll('style,link');
				if (styles.length === 0 && opt_callback) {
					async.nextTick(opt_callback);
					return;
				}

				var loadCount = 0;
				var callback = function callback() {
					if (opt_callback && ++loadCount === styles.length) {
						async.nextTick(opt_callback);
					}
				};
				for (var i = 0; i < styles.length; i++) {
					globalEvalStyles.runStyle(styles[i], callback, opt_appendFn);
				}
			}
		}]);
		return globalEvalStyles;
	}();

	this['metal']['globalEvalStyles'] = globalEvalStyles;
}).call(this);
'use strict';

(function () {
	var registerCustomEvent = this['metalNamed']['dom']['registerCustomEvent'];
	var features = this['metal']['features'];


	var mouseEventMap = {
		mouseenter: 'mouseover',
		mouseleave: 'mouseout',
		pointerenter: 'pointerover',
		pointerleave: 'pointerout'
	};
	Object.keys(mouseEventMap).forEach(function (eventName) {
		registerCustomEvent(eventName, {
			delegate: true,
			handler: function handler(callback, event) {
				var related = event.relatedTarget;
				var target = event.delegateTarget;
				if (!related || related !== target && !target.contains(related)) {
					event.customType = eventName;
					return callback(event);
				}
			},
			originalEvent: mouseEventMap[eventName]
		});
	});

	var animationEventMap = {
		animation: 'animationend',
		transition: 'transitionend'
	};
	Object.keys(animationEventMap).forEach(function (eventType) {
		var eventName = animationEventMap[eventType];
		registerCustomEvent(eventName, {
			event: true,
			delegate: true,
			handler: function handler(callback, event) {
				event.customType = eventName;
				return callback(event);
			},
			originalEvent: features.checkAnimationEventName()[eventType]
		});
	});
}).call(this);
'use strict';

(function () {
  var dom = this['metal']['dom'];
  var domData = this['metal']['domData'];
  var DomEventEmitterProxy = this['metal']['DomEventEmitterProxy'];
  var DomEventHandle = this['metal']['DomEventHandle'];
  var features = this['metal']['features'];
  var globalEval = this['metal']['globalEval'];
  var globalEvalStyles = this['metal']['globalEvalStyles'];
  this['metalNamed']['dom'] = this['metalNamed']['dom'] || {};
  Object.keys(this['metalNamed']['dom']).forEach(function (key) {
    this['metalNamed']['dom'][key] = this['metalNamed']['dom'][key];
  });
  this['metalNamed']['dom']['domData'] = domData;
  this['metalNamed']['dom']['DomEventEmitterProxy'] = DomEventEmitterProxy;
  this['metalNamed']['dom']['DomEventHandle'] = DomEventHandle;
  this['metalNamed']['dom']['features'] = features;
  this['metalNamed']['dom']['globalEval'] = globalEval;
  this['metalNamed']['dom']['globalEvalStyles'] = globalEvalStyles;
  this['metal']['dom'] = dom;
}).call(this);
'use strict';

(function () {
	var getFunctionName = this['metalNamed']['metal']['getFunctionName'];
	var isFunction = this['metalNamed']['metal']['isFunction'];
	var isObject = this['metalNamed']['metal']['isObject'];
	var isString = this['metalNamed']['metal']['isString'];

	/**
  * Adds the listeners specified in the given object.
  * @param {!Component} component
  * @param {Object} events
  * @return {!Array<!EventHandle>} Handles from all subscribed events.
  */

	function addListenersFromObj(component, events) {
		var eventNames = Object.keys(events || {});
		var handles = [];
		for (var i = 0; i < eventNames.length; i++) {
			var info = extractListenerInfo_(component, events[eventNames[i]]);
			if (info.fn) {
				var handle = void 0;
				if (info.selector) {
					handle = component.delegate(eventNames[i], info.selector, info.fn);
				} else {
					handle = component.on(eventNames[i], info.fn);
				}
				handles.push(handle);
			}
		}
		return handles;
	}

	this['metalNamed']['events'] = this['metalNamed']['events'] || {};
	this['metalNamed']['events']['addListenersFromObj'] = addListenersFromObj; /**
                                                                             * Extracts listener info from the given value.
                                                                             * @param {!Component} component
                                                                             * @param {!Component} component
                                                                             * @param {function()|string|{selector:string,fn:function()|string}} value
                                                                             * @return {!{selector:string,fn:function()}}
                                                                             * @protected
                                                                             */

	function extractListenerInfo_(component, value) {
		var info = {
			fn: value
		};
		if (isObject(value) && !isFunction(value)) {
			info.selector = value.selector;
			info.fn = value.fn;
		}
		if (isString(info.fn)) {
			info.fn = getComponentFn(component, info.fn);
		}
		return info;
	}

	/**
  * Gets the listener function from its name. Throws an error if none exist.
  * @param {!Component} component
  * @param {string} fnName
  * @return {function()}
  */
	function getComponentFn(component, fnName) {
		if (isFunction(component[fnName])) {
			return component[fnName].bind(component);
		} else {
			console.error('No function named "' + fnName + '" was found in the ' + 'component "' + getFunctionName(component.constructor) + '". Make ' + 'sure that you specify valid function names when adding inline listeners.');
		}
	}
	this['metalNamed']['events']['getComponentFn'] = getComponentFn;
}).call(this);
'use strict';

(function () {
	var isFunction = this['metalNamed']['metal']['isFunction'];


	var SYNC_FNS_KEY = '__METAL_SYNC_FNS__';

	/**
  * Gets the `sync` methods for this component's state. Caches the results in
  * the component's constructor whenever possible, so that this doesn't need to
  * be calculated again. It's not possible to cache the results when at least
  * one sync method is defined in the instance itself instead of in its
  * prototype, as it may be bound to the instance (not reusable by others).
  * @param {!Component} component
  * @return {!Object}
  * @private
  */
	function getSyncFns_(component) {
		var ctor = component.constructor;
		if (ctor.hasOwnProperty(SYNC_FNS_KEY)) {
			return ctor[SYNC_FNS_KEY];
		}

		var fns = {};
		var keys = component.getDataManager().getSyncKeys(component);
		var canCache = true;
		for (var i = 0; i < keys.length; i++) {
			var name = 'sync' + keys[i].charAt(0).toUpperCase() + keys[i].slice(1);
			var fn = component[name];
			if (fn) {
				fns[keys[i]] = fn;
				canCache = canCache && component.constructor.prototype[name];
			}
		}

		if (canCache) {
			ctor[SYNC_FNS_KEY] = fns;
		}
		return fns;
	}

	/**
  * Calls "sync" functions for the given component's state.
  * @param {!Component} component
  * @param {Object=} opt_changes When given, only the properties inside it will
  *     be synced. Otherwise all state properties will be synced.
  */
	function syncState(component, opt_changes) {
		var syncFns = getSyncFns_(component);
		var keys = Object.keys(opt_changes || syncFns);
		for (var i = 0; i < keys.length; i++) {
			var fn = syncFns[keys[i]];
			if (isFunction(fn)) {
				var change = opt_changes && opt_changes[keys[i]];
				var manager = component.getDataManager();
				fn.call(component, change ? change.newVal : manager.get(component, keys[i]), change ? change.prevVal : undefined);
			}
		}
	}
	this['metalNamed']['sync'] = this['metalNamed']['sync'] || {};
	this['metalNamed']['sync']['syncState'] = syncState;
}).call(this);
'use strict';

(function () {
	var getFunctionName = this['metalNamed']['metal']['getFunctionName'];
	var isDefAndNotNull = this['metalNamed']['metal']['isDefAndNotNull'];


	var ERROR_ARRAY_OF_TYPE = 'Expected an array of single type.';
	var ERROR_OBJECT_OF_TYPE = 'Expected object of one type.';
	var ERROR_ONE_OF = 'Expected one of given values.';
	var ERROR_ONE_OF_TYPE = 'Expected one of given types.';
	var ERROR_SHAPE_OF = 'Expected object with a specific shape.';

	/**
  * Provides access to various type validators that will return an
  * instance of Error when validation fails. Note that all type validators
  * will also accept null or undefined values. To not accept these you should
  * instead make your state property required.
  */
	var validators = {
		any: function any() {
			return function () {
				return true;
			};
		},
		array: buildTypeValidator('array'),
		bool: buildTypeValidator('boolean'),
		func: buildTypeValidator('function'),
		number: buildTypeValidator('number'),
		object: buildTypeValidator('object'),
		string: buildTypeValidator('string'),

		/**
   * Creates a validator that checks that the value it receives is an array
   * of items, and that all of the items pass the given validator.
   * @param {!function()} validator Validator to check each item against.
   * @return {!function()}
   */
		arrayOf: function arrayOf(validator) {
			return maybe(function (value, name, context) {
				var result = validators.array(value, name, context);
				if (isInvalid(result)) {
					return result;
				}
				return validateArrayItems(validator, value, name, context);
			});
		},

		/**
   * Creates a validator that checks if a value is an instance of a given class.
   * @param {!function()} expectedClass Class to check value against.
   * @return {!function()}
   */
		instanceOf: function instanceOf(expectedClass) {
			return maybe(function (value, name, context) {
				if (value instanceof expectedClass) {
					return true;
				}
				var msg = 'Expected instance of ' + expectedClass;
				return composeError(msg, name, context);
			});
		},

		/**
   * Creates a validator that checks that the value it receives is an object,
   * and that all values within that object pass the given validator.
   * @param {!function()} validator Validator to check each object value against.
   * @return {!function()}
   */
		objectOf: function objectOf(validator) {
			return maybe(function (value, name, context) {
				for (var key in value) {
					if (isInvalid(validator(value[key]))) {
						return composeError(ERROR_OBJECT_OF_TYPE, name, context);
					}
				}
				return true;
			});
		},

		/**
   * Creates a validator that checks if the received value matches one of the
   * given values.
   * @param {!Array} arrayOfValues Array of values to check equality against.
   * @return {!function()}
   */
		oneOf: function oneOf(arrayOfValues) {
			return maybe(function (value, name, context) {
				var result = validators.array(arrayOfValues, name, context);
				if (isInvalid(result)) {
					return result;
				}
				return arrayOfValues.indexOf(value) === -1 ? composeError(ERROR_ONE_OF, name, context) : true;
			});
		},

		/**
   * Creates a validator that checks if the received value matches one of the
   * given types.
   * @param {!Array} arrayOfTypeValidators Array of validators to check value
   *     against.
   * @return {!function()}
   */
		oneOfType: function oneOfType(arrayOfTypeValidators) {
			return maybe(function (value, name, context) {
				var result = validators.array(arrayOfTypeValidators, name, context);
				if (isInvalid(result)) {
					return result;
				}

				for (var i = 0; i < arrayOfTypeValidators.length; i++) {
					if (!isInvalid(arrayOfTypeValidators[i](value, name, context))) {
						return true;
					}
				}
				return composeError(ERROR_ONE_OF_TYPE, name, context);
			});
		},

		/**
   * Creates a validator that checks if the received value is an object, and
   * that its contents match the given shape.
   * @param {!Object} shape An object containing validators for each key.
   * @return {!function()}
   */
		shapeOf: function shapeOf(shape) {
			return maybe(function (value, name, context) {
				var result = validators.object(shape, name, context);
				if (isInvalid(result)) {
					return result;
				}

				for (var key in shape) {
					var validator = shape[key];
					var required = false;
					if (validator.config) {
						required = validator.config.required;
						validator = validator.config.validator;
					}
					if (required && !isDefAndNotNull(value[key]) || isInvalid(validator(value[key]))) {
						return composeError(ERROR_SHAPE_OF, name, context);
					}
				}
				return true;
			});
		}
	};

	/**
  * Creates a validator that checks against a specific primitive type.
  * @param {string} expectedType Type to check against.
  * @return {!function()} Function that runs the validator if called with
  *     arguments, or just returns it otherwise. This means that when using a
  *     type validator in `State` it may be just passed directly (like
  *     `validators.bool`), or called with no args (like `validators.bool()`).
  *     That's done to allow all validators to be used consistently, since some
  *     (like `arrayOf`) always require that you call the function before
  *     receiving the actual validator. Type validators don't need the call, but
  *     work if it's made anyway.
  */
	function buildTypeValidator(expectedType) {
		var validatorFn = maybe(validateType.bind(null, expectedType));
		return function () {
			if (arguments.length === 0) {
				return validatorFn;
			} else {
				return validatorFn.apply(undefined, arguments);
			}
		};
	}

	/**
  * Composes a warning a warning message.
  * @param {string} error Error message to display to console.
  * @param {?string} name Name of state property that is giving the error.
  * @param {Object} context The property's owner.
  * @return {!Error}
  */
	function composeError(error, name, context) {
		var compName = context ? getFunctionName(context.constructor) : null;
		var renderer = context && context.getRenderer && context.getRenderer();
		var parent = renderer && renderer.getParent && renderer.getParent();
		var parentName = parent ? getFunctionName(parent.constructor) : null;
		var location = parentName ? 'Check render method of \'' + parentName + '\'.' : '';
		return new Error('Warning: Invalid state passed to \'' + name + '\'. ' + (error + ' Passed to \'' + compName + '\'. ' + location));
	}

	/**
  * Returns the type of the given value.
  * @param {*} value Any value.
  * @return {string} Type of value.
  */
	function getType(value) {
		return Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value);
	}

	/**
  * Checks if the given validator result says that the value is invalid.
  * @param {boolean|!Error} result
  * @return {boolean}
  */
	function isInvalid(result) {
		return result instanceof Error;
	}

	/**
  * Wraps the given validator so that it also accepts null/undefined values.
  *   a validator that checks a value against a single type, null, or
  * undefined.
  * @param {!function()} typeValidator Validator to wrap.
  * @return {!function()} Wrapped validator.
  */
	function maybe(typeValidator) {
		return function (value, name, context) {
			return isDefAndNotNull(value) ? typeValidator(value, name, context) : true;
		};
	}

	/**
  * Checks if all the items of the given array pass the given validator.
  * @param {!function()} validator
  * @param {*} value The array to validate items for.
  * @param {string} name The name of the array property being checked.
  * @param {!Object} context Owner of the array property being checked.
  * @return {!Error|boolean} `true` if the type matches, or an error otherwise.
  */
	function validateArrayItems(validator, value, name, context) {
		for (var i = 0; i < value.length; i++) {
			if (isInvalid(validator(value[i], name, context))) {
				return composeError(ERROR_ARRAY_OF_TYPE, name, context);
			}
		}
		return true;
	}

	/**
  * Checks if the given value matches the expected type.
  * @param {string} expectedType String representing the expected type.
  * @param {*} value The value to match the type of.
  * @param {string} name The name of the property being checked.
  * @param {!Object} context Owner of the property being checked.
  * @return {!Error|boolean} `true` if the type matches, or an error otherwise.
  */
	function validateType(expectedType, value, name, context) {
		var type = getType(value);
		if (type !== expectedType) {
			var msg = 'Expected type \'' + expectedType + '\', but received type \'' + type + '\'.';
			return composeError(msg, name, context);
		}
		return true;
	}

	this['metal']['validators'] = validators;
}).call(this);
'use strict';

(function () {
	var object = this['metalNamed']['metal']['object'];
	var validators = this['metal']['validators'];

	/**
  * Sugar api that can be used as an alternative for manually building `State`
  * configuration in the expected format. For example, instead of having
  * something like this:
  *
  * ```js
  * MyClass.STATE = {
  *   foo: {
  *     required: true,
  *     validator: validators.number,
  *     value: 13
  *   }
  * };
  * ```
  *
  * You could instead do:
  *
  * ```js
  * MyClass.STATE = {
  *   foo: Config.required().number().value(13)
  * };
  * ```
  */

	var Config = {
		/**
   * Adds the `required` flag to the `State` configuration.
   * @param {boolean} required Flag to set "required" to. True by default.
   * @return {!Object} `State` configuration object.
   */
		required: function required() {
			var _required = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			return mergeConfig(this, { required: _required });
		},


		/**
   * Adds a setter to the `State` configuration.
   * @param {!function()} setter
   * @return {!Object} `State` configuration object.
   */
		setter: function setter(_setter) {
			return mergeConfig(this, { setter: _setter });
		},


		/**
   * Adds a validator to the `State` configuration.
   * @param {!function()} validator
   * @return {!Object} `State` configuration object.
   */
		validator: function validator(_validator) {
			return mergeConfig(this, { validator: _validator });
		},


		/**
   * Adds a default value to the `State` configuration.
   * @param {*} value
   * @return {!Object} `State` configuration object.
   */
		value: function value(_value) {
			return mergeConfig(this, { value: _value });
		}
	};

	/**
  * Merges the given config object into the one that has been built so far.
  * @param {!Object} context The object calling this function.
  * @param {!Object} config The object to merge to the built config.
  * @return {!Object} The final object containing the built config.
  */
	function mergeConfig(context, config) {
		var obj = context;
		if (obj === Config) {
			obj = Object.create(Config);
			obj.config = {};
		}
		object.mixin(obj.config, config);
		return obj;
	}

	// Add all validators to `Config`.
	var fnNames = Object.keys(validators);
	fnNames.forEach(function (name) {
		return Config[name] = function () {
			return this.validator(validators[name]);
		};
	});

	this['metal']['Config'] = Config;
}).call(this);
'use strict';

(function () {
	var async = this['metalNamed']['metal']['async'];
	var getStaticProperty = this['metalNamed']['metal']['getStaticProperty'];
	var isDefAndNotNull = this['metalNamed']['metal']['isDefAndNotNull'];
	var isFunction = this['metalNamed']['metal']['isFunction'];
	var isObject = this['metalNamed']['metal']['isObject'];
	var isString = this['metalNamed']['metal']['isString'];
	var object = this['metalNamed']['metal']['object'];
	var EventEmitter = this['metalNamed']['events']['EventEmitter'];

	/**
  * State adds support for having object properties that can be watched for
  * changes, as well as configured with validators, setters and other options.
  * See the `configState` method for a complete list of available configuration
  * options for each state key.
  * @extends {EventEmitter}
  */

	var State = function (_EventEmitter) {
		babelHelpers.inherits(State, _EventEmitter);

		/**
   * Constructor function for `State`.
   * @param {Object=} opt_config Optional config object with initial values to
   *     set state properties to.
   * @param {Object=} opt_obj Optional object that should hold the state
   *     properties. If none is given, they will be added directly to `this`
   *     instead.
   * @param {Object=} opt_context Optional context to call functions (like
   *     validators and setters) on. Defaults to `this`.
   */
		function State(opt_config, opt_obj, opt_context) {
			babelHelpers.classCallCheck(this, State);

			/**
    * Context to call functions (like validators and setters) on.
    * @type {!Object}
    * @protected
    */
			var _this = babelHelpers.possibleConstructorReturn(this, (State.__proto__ || Object.getPrototypeOf(State)).call(this));

			_this.context_ = opt_context || _this;

			/**
    * Map of keys that can not be used as state keys.
    * @type {Object<string, boolean>}
    * @protected
    */
			_this.keysBlacklist_ = null;

			/**
    * Object that should hold the state properties.
    * @type {!Object}
    * @protected
    */
			_this.obj_ = opt_obj || _this;

			_this.eventData_ = null;

			/**
    * Object with information about the batch event that is currently
    * scheduled, or null if none is.
    * @type {Object}
    * @protected
    */
			_this.scheduledBatchData_ = null;

			/**
    * Object that contains information about all this instance's state keys.
    * @type {!Object<string, !Object>}
    * @protected
    */
			_this.stateInfo_ = {};

			_this.stateConfigs_ = {};

			_this.initialValues_ = object.mixin({}, opt_config);

			_this.setShouldUseFacade(true);
			_this.configStateFromStaticHint_();

			Object.defineProperty(_this.obj_, State.STATE_REF_KEY, {
				configurable: true,
				enumerable: false,
				value: _this
			});
			return _this;
		}

		/**
   * Logs an error if the given property is required but wasn't given.
   * @param {string} name
   * @protected
   */


		babelHelpers.createClass(State, [{
			key: 'assertGivenIfRequired_',
			value: function assertGivenIfRequired_(name) {
				var config = this.stateConfigs_[name];
				if (config.required) {
					var info = this.getStateInfo(name);
					var value = info.state === State.KeyStates.INITIALIZED ? this.get(name) : this.initialValues_[name];
					if (!isDefAndNotNull(value)) {
						console.error('The property called "' + name + '" is required but didn\'t ' + 'receive a value.');
					}
				}
			}

			/**
    * Checks that the given name is a valid state key name. If it's not, an error
    * will be thrown.
    * @param {string} name The name to be validated.
    * @throws {Error}
    * @protected
    */

		}, {
			key: 'assertValidStateKeyName_',
			value: function assertValidStateKeyName_(name) {
				if (this.keysBlacklist_ && this.keysBlacklist_[name]) {
					throw new Error('It\'s not allowed to create a state key with the name "' + name + '".');
				}
			}

			/**
    * Builds the property definition object for the specified state key.
    * @param {string} name The name of the key.
    * @return {!Object}
    * @protected
    */

		}, {
			key: 'buildKeyPropertyDef_',
			value: function buildKeyPropertyDef_(name) {
				return {
					configurable: true,
					enumerable: true,
					get: function get() {
						return this[State.STATE_REF_KEY].getStateKeyValue_(name);
					},
					set: function set(val) {
						this[State.STATE_REF_KEY].setStateKeyValue_(name, val);
					}
				};
			}

			/**
    * Calls the requested function, running the appropriate code for when it's
    * passed as an actual function object or just the function's name.
    * @param {!Function|string} fn Function, or name of the function to run.
    * @param {!Array} An optional array of parameters to be passed to the
    *   function that will be called.
    * @return {*} The return value of the called function.
    * @protected
    */

		}, {
			key: 'callFunction_',
			value: function callFunction_(fn, args) {
				if (isString(fn)) {
					return this.context_[fn].apply(this.context_, args);
				} else if (isFunction(fn)) {
					return fn.apply(this.context_, args);
				}
			}

			/**
    * Calls the state key's setter, if there is one.
    * @param {string} name The name of the key.
    * @param {*} value The value to be set.
    * @param {*} currentValue The current value.
    * @return {*} The final value to be set.
    * @protected
    */

		}, {
			key: 'callSetter_',
			value: function callSetter_(name, value, currentValue) {
				var config = this.stateConfigs_[name];
				if (config.setter) {
					value = this.callFunction_(config.setter, [value, currentValue]);
				}
				return value;
			}

			/**
    * Calls the state key's validator, if there is one. Emits console
    * warning if validator returns a string.
    * @param {string} name The name of the key.
    * @param {*} value The value to be validated.
    * @return {boolean} Flag indicating if value is valid or not.
    * @protected
    */

		}, {
			key: 'callValidator_',
			value: function callValidator_(name, value) {
				var config = this.stateConfigs_[name];
				if (config.validator) {
					var validatorReturn = this.callFunction_(config.validator, [value, name, this.context_]);

					if (validatorReturn instanceof Error) {
						console.error('Warning: ' + validatorReturn);
					}
					return validatorReturn;
				}
				return true;
			}

			/**
    * Checks if the it's allowed to write on the requested state key.
    * @param {string} name The name of the key.
    * @return {boolean}
    */

		}, {
			key: 'canSetState',
			value: function canSetState(name) {
				var info = this.getStateInfo(name);
				return !this.stateConfigs_[name].writeOnce || !info.written;
			}

			/**
    * Adds the given key(s) to the state, together with its(their) configs.
    * Config objects support the given settings:
    *     required - When set to `true`, causes errors to be printed (via
    *     `console.error`) if no value is given for the property.
    *
    *     setter - Function for normalizing state key values. It receives the new
    *     value that was set, and returns the value that should be stored.
    *
    *     validator - Function that validates state key values. When it returns
    *     false, the new value is ignored. When it returns an instance of Error,
    *     it will emit the error to the console.
    *
    *     value - The default value for the state key. Note that setting this to
    *     an object will cause all class instances to use the same reference to
    *     the object. To have each instance use a different reference for objects,
    *     use the `valueFn` option instead.
    *
    *     valueFn - A function that returns the default value for a state key.
    *
    *     writeOnce - Ignores writes to the state key after it's been first
    *     written to. That is, allows writes only when setting the value for the
    *     first time.
    * @param {!Object.<string, !Object>|string} configs An object that maps
    *     configuration options for keys to be added to the state.
    * @param {boolean|Object|*=} opt_context The context where the added state
    *     keys will be defined (defaults to `this`), or false if they shouldn't
    *     be defined at all.
    */

		}, {
			key: 'configState',
			value: function configState(configs, opt_context) {
				var names = Object.keys(configs);
				if (names.length === 0) {
					return;
				}

				if (opt_context !== false) {
					var props = {};
					for (var i = 0; i < names.length; i++) {
						var name = names[i];
						this.assertValidStateKeyName_(name);
						props[name] = this.buildKeyPropertyDef_(name);
					}
					Object.defineProperties(opt_context || this.obj_, props);
				}

				this.stateConfigs_ = configs;
				for (var _i = 0; _i < names.length; _i++) {
					var _name = names[_i];
					configs[_name] = configs[_name].config ? configs[_name].config : configs[_name];
					this.assertGivenIfRequired_(names[_i]);
					this.validateInitialValue_(names[_i]);
				}
			}

			/**
    * Adds state keys from super classes static hint `MyClass.STATE = {};`.
    * @param {Object.<string, !Object>=} opt_config An object that maps all the
    *     configurations for state keys.
    * @protected
    */

		}, {
			key: 'configStateFromStaticHint_',
			value: function configStateFromStaticHint_() {
				var ctor = this.constructor;
				if (ctor !== State) {
					var defineContext;
					if (this.obj_ === this) {
						defineContext = ctor.hasConfiguredState_ ? false : ctor.prototype;
						ctor.hasConfiguredState_ = true;
					}
					this.configState(State.getStateStatic(ctor), defineContext);
				}
			}

			/**
    * @inheritDoc
    */

		}, {
			key: 'disposeInternal',
			value: function disposeInternal() {
				babelHelpers.get(State.prototype.__proto__ || Object.getPrototypeOf(State.prototype), 'disposeInternal', this).call(this);
				this.initialValues_ = null;
				this.stateInfo_ = null;
				this.stateConfigs_ = null;
				this.scheduledBatchData_ = null;
			}

			/**
    * Emits the state change batch event.
    * @protected
    */

		}, {
			key: 'emitBatchEvent_',
			value: function emitBatchEvent_() {
				if (!this.isDisposed()) {
					var data = this.scheduledBatchData_;
					this.scheduledBatchData_ = null;
					this.context_.emit('stateChanged', data);
				}
			}

			/**
    * Returns the value of the requested state key.
    * Note: this can and should be accomplished by accessing the value as a
    * regular property. This should only be used in cases where a function is
    * actually needed.
    * @param {string} name
    * @return {*}
    */

		}, {
			key: 'get',
			value: function get(name) {
				return this.obj_[name];
			}

			/**
    * Returns an object that maps state keys to their values.
    * @param {Array<string>=} opt_names A list of names of the keys that should
    *   be returned. If none is given, the whole state will be returned.
    * @return {Object.<string, *>}
    */

		}, {
			key: 'getState',
			value: function getState(opt_names) {
				var state = {};
				var names = opt_names || this.getStateKeys();

				for (var i = 0; i < names.length; i++) {
					state[names[i]] = this.get(names[i]);
				}

				return state;
			}

			/**
    * Gets information about the specified state property.
    * @param {string} name
    * @return {!Object}
    */

		}, {
			key: 'getStateInfo',
			value: function getStateInfo(name) {
				if (!this.stateInfo_[name]) {
					this.stateInfo_[name] = {};
				}
				return this.stateInfo_[name];
			}

			/**
    * Gets the config object for the requested state key.
    * @param {string} name The key's name.
    * @return {Object}
    * @protected
    */

		}, {
			key: 'getStateKeyConfig',
			value: function getStateKeyConfig(name) {
				return this.stateConfigs_ ? this.stateConfigs_[name] : null;
			}

			/**
    * Returns an array with all state keys.
    * @return {!Array.<string>}
    */

		}, {
			key: 'getStateKeys',
			value: function getStateKeys() {
				return this.stateConfigs_ ? Object.keys(this.stateConfigs_) : [];
			}

			/**
    * Gets the value of the specified state key. This is passed as that key's
    * getter to the `Object.defineProperty` call inside the `addKeyToState` method.
    * @param {string} name The name of the key.
    * @return {*}
    * @protected
    */

		}, {
			key: 'getStateKeyValue_',
			value: function getStateKeyValue_(name) {
				if (!this.warnIfDisposed_(name)) {
					this.initStateKey_(name);
					return this.getStateInfo(name).value;
				}
			}

			/**
    * Merges the STATE static variable for the given constructor function.
    * @param  {!Function} ctor Constructor function.
    * @return {boolean} Returns true if merge happens, false otherwise.
    * @static
    */

		}, {
			key: 'hasBeenSet',


			/**
    * Checks if the value of the state key with the given name has already been
    * set. Note that this doesn't run the key's getter.
    * @param {string} name The name of the key.
    * @return {boolean}
    */
			value: function hasBeenSet(name) {
				var info = this.getStateInfo(name);
				return info.state === State.KeyStates.INITIALIZED || this.hasInitialValue_(name);
			}

			/**
    * Checks if an initial value was given to the specified state property.
    * @param {string} name The name of the key.
    * @return {boolean}
    * @protected
    */

		}, {
			key: 'hasInitialValue_',
			value: function hasInitialValue_(name) {
				return this.initialValues_.hasOwnProperty(name);
			}

			/**
    * Checks if the given key is present in this instance's state.
    * @param {string} key
    * @return {boolean}
    */

		}, {
			key: 'hasStateKey',
			value: function hasStateKey(key) {
				if (!this.warnIfDisposed_(key)) {
					return !!this.stateConfigs_[key];
				}
			}

			/**
    * Informs of changes to a state key's value through an event. Won't trigger
    * the event if the value hasn't changed or if it's being initialized.
    * @param {string} name The name of the key.
    * @param {*} prevVal The previous value of the key.
    * @protected
    */

		}, {
			key: 'informChange_',
			value: function informChange_(name, prevVal) {
				if (this.shouldInformChange_(name, prevVal)) {
					var data = object.mixin({
						key: name,
						newVal: this.get(name),
						prevVal: prevVal
					}, this.eventData_);
					this.context_.emit(name + 'Changed', data);
					this.context_.emit('stateKeyChanged', data);
					this.scheduleBatchEvent_(data);
				}
			}

			/**
    * Initializes the specified state key, giving it a first value.
    * @param {string} name The name of the key.
    * @protected
    */

		}, {
			key: 'initStateKey_',
			value: function initStateKey_(name) {
				var info = this.getStateInfo(name);
				if (info.state !== State.KeyStates.UNINITIALIZED) {
					return;
				}

				info.state = State.KeyStates.INITIALIZING;
				this.setInitialValue_(name);
				if (!info.written) {
					this.setDefaultValue(name);
				}
				info.state = State.KeyStates.INITIALIZED;
			}

			/**
    * Merges two values for the STATE property into a single object.
    * @param {Object} mergedVal
    * @param {Object} currVal
    * @return {!Object} The merged value.
    * @static
    */

		}, {
			key: 'removeStateKey',


			/**
    * Removes the requested state key.
    * @param {string} name The name of the key.
    */
			value: function removeStateKey(name) {
				this.stateInfo_[name] = null;
				this.stateConfigs_[name] = null;
				delete this.obj_[name];
			}

			/**
    * Schedules a state change batch event to be emitted asynchronously.
    * @param {!Object} changeData Information about a state key's update.
    * @protected
    */

		}, {
			key: 'scheduleBatchEvent_',
			value: function scheduleBatchEvent_(changeData) {
				if (!this.scheduledBatchData_) {
					async.nextTick(this.emitBatchEvent_, this);
					this.scheduledBatchData_ = object.mixin({
						changes: {}
					}, this.eventData_);
				}

				var name = changeData.key;
				var changes = this.scheduledBatchData_.changes;
				if (changes[name]) {
					changes[name].newVal = changeData.newVal;
				} else {
					changes[name] = changeData;
				}
			}

			/**
    * Sets the value of the requested state key.
    * Note: this can and should be accomplished by setting the state key as a
    * regular property. This should only be used in cases where a function is
    * actually needed.
    * @param {string} name
    * @param {*} value
    * @return {*}
    */

		}, {
			key: 'set',
			value: function set(name, value) {
				if (this.hasStateKey(name)) {
					this.obj_[name] = value;
				}
			}

			/**
    * Sets the default value of the requested state key.
    * @param {string} name The name of the key.
    * @return {*}
    */

		}, {
			key: 'setDefaultValue',
			value: function setDefaultValue(name) {
				var config = this.stateConfigs_[name];

				if (config.value !== undefined) {
					this.set(name, config.value);
				} else {
					this.set(name, this.callFunction_(config.valueFn));
				}
			}

			/**
    * Sets data to be sent with all events emitted from this instance.
    * @param {Object}
    */

		}, {
			key: 'setEventData',
			value: function setEventData(data) {
				this.eventData_ = data;
			}

			/**
    * Sets the initial value of the requested state key.
    * @param {string} name The name of the key.
    * @return {*}
    * @protected
    */

		}, {
			key: 'setInitialValue_',
			value: function setInitialValue_(name) {
				if (this.hasInitialValue_(name)) {
					this.set(name, this.initialValues_[name]);
					this.initialValues_[name] = undefined;
				}
			}

			/**
    * Sets a map of keys that are not valid state keys.
    * @param {!Object<string, boolean>}
    */

		}, {
			key: 'setKeysBlacklist',
			value: function setKeysBlacklist(blacklist) {
				this.keysBlacklist_ = blacklist;
			}

			/**
    * Sets the value of all the specified state keys.
    * @param {!Object.<string,*>} values A map of state keys to the values they
    *   should be set to.
    * @param {function()=} opt_callback An optional function that will be run
    *   after the next batched update is triggered.
    */

		}, {
			key: 'setState',
			value: function setState(values, opt_callback) {
				var _this2 = this;

				Object.keys(values).forEach(function (name) {
					return _this2.set(name, values[name]);
				});
				if (opt_callback && this.scheduledBatchData_) {
					this.context_.once('stateChanged', opt_callback);
				}
			}

			/**
    * Sets the value of the specified state key. This is passed as that key's
    * setter to the `Object.defineProperty` call inside the `addKeyToState`
    * method.
    * @param {string} name The name of the key.
    * @param {*} value The new value of the key.
    * @protected
    */

		}, {
			key: 'setStateKeyValue_',
			value: function setStateKeyValue_(name, value) {
				if (this.warnIfDisposed_(name) || !this.canSetState(name) || !this.validateKeyValue_(name, value)) {
					return;
				}

				var prevVal = this.get(name);
				var info = this.getStateInfo(name);
				info.value = this.callSetter_(name, value, prevVal);
				this.assertGivenIfRequired_(name);
				info.written = true;
				this.informChange_(name, prevVal);
			}

			/**
    * Checks if we should inform about a state update. Updates are ignored during
    * state initialization. Otherwise, updates to primitive values are only
    * informed when the new value is different from the previous one. Updates to
    * objects (which includes functions and arrays) are always informed outside
    * initialization though, since we can't be sure if all of the internal data
    * has stayed the same.
    * @param {string} name The name of the key.
    * @param {*} prevVal The previous value of the key.
    * @return {boolean}
    * @protected
    */

		}, {
			key: 'shouldInformChange_',
			value: function shouldInformChange_(name, prevVal) {
				var info = this.getStateInfo(name);
				return info.state === State.KeyStates.INITIALIZED && (isObject(prevVal) || prevVal !== this.get(name));
			}

			/**
    * Validates the initial value for the state property with the given name.
    * @param {string} name
    * @protected
    */

		}, {
			key: 'validateInitialValue_',
			value: function validateInitialValue_(name) {
				if (this.hasInitialValue_(name) && !this.callValidator_(name, this.initialValues_[name])) {
					delete this.initialValues_[name];
				}
			}

			/**
    * Validates the state key's value, which includes calling the validator
    * defined in the key's configuration object, if there is one.
    * @param {string} name The name of the key.
    * @param {*} value The value to be validated.
    * @return {boolean} Flag indicating if value is valid or not.
    * @protected
    */

		}, {
			key: 'validateKeyValue_',
			value: function validateKeyValue_(name, value) {
				var info = this.getStateInfo(name);
				return info.state === State.KeyStates.INITIALIZING || this.callValidator_(name, value);
			}

			/**
    * Warns if this instance has already been disposed.
    * @param {string} name Name of the property to be accessed if not disposed.
    * @return {boolean} True if disposed, or false otherwise.
    * @protected
    */

		}, {
			key: 'warnIfDisposed_',
			value: function warnIfDisposed_(name) {
				var disposed = this.isDisposed();
				if (disposed) {
					console.warn('Error. Trying to access property "' + name + '" on disposed instance');
				}
				return disposed;
			}
		}], [{
			key: 'getStateStatic',
			value: function getStateStatic(ctor) {
				return getStaticProperty(ctor, 'STATE', State.mergeState);
			}
		}, {
			key: 'mergeState',
			value: function mergeState(mergedVal, currVal) {
				return object.mixin({}, currVal, mergedVal);
			}
		}]);
		return State;
	}(EventEmitter);

	State.STATE_REF_KEY = '__METAL_STATE_REF_KEY__';

	/**
  * Constants that represent the states that a state key can be in.
  * @type {!Object}
  */
	State.KeyStates = {
		UNINITIALIZED: undefined,
		INITIALIZING: 1,
		INITIALIZED: 2
	};

	this['metal']['State'] = State;
}).call(this);
'use strict';

(function () {
  var validators = this['metal']['validators'];
  var Config = this['metal']['Config'];
  var State = this['metal']['State'];
  this['metal']['state'] = State;
  this['metalNamed']['state'] = this['metalNamed']['state'] || {};
  this['metalNamed']['state']['validators'] = validators;
  this['metalNamed']['state']['Config'] = Config;
  this['metalNamed']['state']['State'] = State;
}).call(this);
'use strict';

(function () {
	var object = this['metalNamed']['metal']['object'];
	var State = this['metal']['state'];


	var BLACKLIST = {
		components: true,
		context: true,
		element: true,
		refs: true,
		state: true,
		stateKey: true,
		wasRendered: true
	};
	var DATA_MANAGER_DATA = '__DATA_MANAGER_DATA__';

	var ComponentDataManager = function () {
		function ComponentDataManager() {
			babelHelpers.classCallCheck(this, ComponentDataManager);
		}

		babelHelpers.createClass(ComponentDataManager, [{
			key: 'createState_',

			/**
    * Creates the `State` instance that will handle the main component data.
    * @param {!Component} component
    * @param {!Object} data
    * @protected
    */
			value: function createState_(component, data) {
				var state = new State(component.getInitialConfig(), component, component);
				state.setKeysBlacklist(BLACKLIST);
				state.configState(object.mixin({}, data, State.getStateStatic(component.constructor)));
				this.getManagerData(component).state_ = state;
			}

			/**
    * Disposes of any data being used by the manager in this component.
    * @param {!Component} component
    */

		}, {
			key: 'dispose',
			value: function dispose(component) {
				var data = this.getManagerData(component);
				if (data.state_) {
					data.state_.dispose();
				}
				component[DATA_MANAGER_DATA] = null;
			}

			/**
    * Gets the data with the given name.
    * @param {!Component} component
    * @param {string} name
    * @return {*}
    */

		}, {
			key: 'get',
			value: function get(component, name) {
				return this.getManagerData(component).state_.get(name);
			}

			/**
    * Gets the manager data for the given component.
    * @param {!Component} component
    * @return {Object}
    */

		}, {
			key: 'getManagerData',
			value: function getManagerData(component) {
				return component[DATA_MANAGER_DATA];
			}

			/**
    * Gets the keys for state data that can be synced via `sync` functions.
    * @param {!Component} component
    * @return {!Array<string>}
    */

		}, {
			key: 'getSyncKeys',
			value: function getSyncKeys(component) {
				return this.getManagerData(component).state_.getStateKeys();
			}

			/**
    * Gets the keys for state data.
    * @param {!Component} component
    * @return {!Array<string>}
    */

		}, {
			key: 'getStateKeys',
			value: function getStateKeys(component) {
				return this.getManagerData(component).state_.getStateKeys();
			}

			/**
    * Gets the whole state data.
    * @param {!Component} component
    * @return {!Object}
    */

		}, {
			key: 'getState',
			value: function getState(component) {
				return this.getManagerData(component).state_.getState();
			}

			/**
    * Gets the `State` instance being used.
    * @param {!Component} component
    * @return {!Object}
    */

		}, {
			key: 'getStateInstance',
			value: function getStateInstance(component) {
				return this.getManagerData(component).state_;
			}

			/**
    * Updates all non internal data with the given values (or to the default
    * value if none is given).
    * @param {!Component} component
    * @param {!Object} data
    * @param {State=} opt_state
    */

		}, {
			key: 'replaceNonInternal',
			value: function replaceNonInternal(component, data, opt_state) {
				var state = opt_state || this.getManagerData(component).state_;
				var keys = state.getStateKeys();
				for (var i = 0; i < keys.length; i++) {
					var key = keys[i];
					if (!state.getStateKeyConfig(key).internal) {
						if (data.hasOwnProperty(key)) {
							state.set(key, data[key]);
						} else {
							state.setDefaultValue(key);
						}
					}
				}
			}

			/**
    * Sets the value of all the specified state keys.
    * @param {!Component} component
    * @param {!Object.<string,*>} values A map of state keys to the values they
    *   should be set to.
    * @param {function()=} opt_callback An optional function that will be run
    *   after the next batched update is triggered.
    */

		}, {
			key: 'setState',
			value: function setState(component, state, opt_callback) {
				this.getManagerData(component).state_.setState(state, opt_callback);
			}

			/**
    * Sets up the specified component's data.
    * @param {!Component} component
    * @param {!Object} data
    */

		}, {
			key: 'setUp',
			value: function setUp(component, data) {
				component[DATA_MANAGER_DATA] = {};
				this.createState_(component, data);
			}
		}]);
		return ComponentDataManager;
	}();

	this['metal']['ComponentDataManager'] = new ComponentDataManager();
}).call(this);
'use strict';

/**
 * Base class that component renderers should extend from. It defines the
 * required methods all renderers should have.
 */

(function () {
	var ComponentRenderer = function () {
		function ComponentRenderer() {
			babelHelpers.classCallCheck(this, ComponentRenderer);
		}

		babelHelpers.createClass(ComponentRenderer, [{
			key: 'dispose',


			/**
    * Disposes of any data specific to the given component.
    * @param {!Component} component
    */
			value: function dispose() {}

			/**
    * Returns extra configuration for data that should be added to the manager.
    * Sub classes can override to return `State` config for properties that
    * should be added to the component.
    * @param {!Component} component
    * @return {Object}
    */

		}, {
			key: 'getExtraDataConfig',
			value: function getExtraDataConfig() {}

			/**
    * Renders the whole content (including its main element) and informs the
    * component about it. Should be overridden by sub classes.
    * @param {!Component} component
    */

		}, {
			key: 'render',
			value: function render(component) {
				if (!component.element) {
					component.element = document.createElement('div');
				}
				component.informRendered();
			}

			/**
    * Sets up this component to be used by this renderer. Sub classes should
    * override as needed for more behavior.
    * @param {!Component} component
    */

		}, {
			key: 'setUp',
			value: function setUp() {}

			/**
    * Updates the component's element html. This is automatically called when
    * the value of at least one of the component's state keys has changed.
    * Should be implemented by sub classes. Sub classes have to remember to call
    * "informRendered" on the component when any update rendering is done.
    * @param {!Component} component
    * @param {Object.<string, Object>} changes Object containing the names
    *     of all changed state keys, each mapped to an object with its new
    *     (newVal) and previous (prevVal) values.
    */

		}, {
			key: 'update',
			value: function update() {}
		}]);
		return ComponentRenderer;
	}();

	this['metal']['ComponentRenderer'] = new ComponentRenderer();
}).call(this);
'use strict';

(function () {
	var addListenersFromObj = this['metalNamed']['events']['addListenersFromObj'];
	var getStaticProperty = this['metalNamed']['metal']['getStaticProperty'];
	var isBoolean = this['metalNamed']['metal']['isBoolean'];
	var isDefAndNotNull = this['metalNamed']['metal']['isDefAndNotNull'];
	var isElement = this['metalNamed']['metal']['isElement'];
	var isObject = this['metalNamed']['metal']['isObject'];
	var isString = this['metalNamed']['metal']['isString'];
	var object = this['metalNamed']['metal']['object'];
	var syncState = this['metalNamed']['sync']['syncState'];
	var DomEventEmitterProxy = this['metalNamed']['dom']['DomEventEmitterProxy'];
	var toElement = this['metalNamed']['dom']['toElement'];
	var ComponentDataManager = this['metal']['ComponentDataManager'];
	var ComponentRenderer = this['metal']['ComponentRenderer'];
	var EventEmitter = this['metalNamed']['events']['EventEmitter'];
	var EventHandler = this['metalNamed']['events']['EventHandler'];

	/**
  * Component collects common behaviors to be followed by UI components, such
  * as Lifecycle, CSS classes management, events encapsulation and support for
  * different types of rendering.
  * Rendering logic can be done by either:
  *     - Listening to the `render` event inside the `created` lifecycle function
  *       and adding the rendering logic to the listener.
  *     - Using an existing implementation of `ComponentRenderer` like `Soy`,
  *       and following its patterns.
  *     - Building your own implementation of a `ComponentRenderer`.
  * Specifying the renderer that will be used can be done by setting the RENDERER
  * static variable to the renderer's constructor function.
  *
  * Example:
  *
  * <code>
  * class CustomComponent extends Component {
  *   created() {
  *   }
  *
  *   rendered() {
  *   }
  *
  *   attached() {
  *   }
  *
  *   detached() {
  *   }
  *
  *   disposed() {
  *   }
  * }
  *
  * CustomComponent.RENDERER = MyRenderer;
  *
  * CustomComponent.STATE = {
  *   title: { value: 'Title' },
  *   fontSize: { value: '10px' }
  * };
  * </code>
  *
  * @extends {State}
  */

	var Component = function (_EventEmitter) {
		babelHelpers.inherits(Component, _EventEmitter);

		/**
   * Constructor function for `Component`.
   * @param {Object=} opt_config An object with the initial values for this
   *     component's state.
   * @param {boolean|string|Element=} opt_parentElement The element where the
   *     component should be rendered. Can be given as a selector or an element.
   *     If `false` is passed, the component won't be rendered automatically
   *     after created.
   * @constructor
   */
		function Component(opt_config, opt_parentElement) {
			babelHelpers.classCallCheck(this, Component);

			/**
    * Instance of `DomEventEmitterProxy` which proxies events from the component's
    * element to the component itself.
    * @type {!DomEventEmitterProxy}
    * @protected
    */
			var _this = babelHelpers.possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this));

			_this.elementEventProxy_ = new DomEventEmitterProxy(null, _this, proxyBlackList_);

			/**
    * The `EventHandler` instance for events attached from the `events` state key.
    * @type {EventHandler}
    * @protected
    */
			_this.eventsStateKeyHandler_ = null;

			/**
    * Whether the element is in document.
    * @type {boolean}
    */
			_this.inDocument = false;

			/**
    * The initial config option passed to this constructor.
    * @type {!Object}
    * @protected
    */
			_this.initialConfig_ = opt_config || {};

			/**
    * Whether the element was rendered.
    * @type {boolean}
    */
			_this.wasRendered = false;

			/**
    * The component's element will be appended to the element this variable is
    * set to, unless the user specifies another parent when calling `render` or
    * `attach`.
    * @type {!Element}
    */
			_this.DEFAULT_ELEMENT_PARENT = document.body;

			_this.setShouldUseFacade(true);
			_this.element = _this.initialConfig_.element;

			_this.setUpRenderer_();
			_this.setUpDataManager_();
			_this.setUpSyncUpdates_();

			_this.on('stateChanged', _this.handleComponentStateChanged_);
			_this.on('eventsChanged', _this.onEventsChanged_);
			_this.addListenersFromObj_(_this.dataManager_.get(_this, 'events'));

			_this.created();
			_this.componentCreated_ = true;
			if (opt_parentElement !== false) {
				_this.renderComponent(opt_parentElement);
			}
			return _this;
		}

		/**
   * Getter logic for the element property.
   * @return {Element}
   */


		babelHelpers.createClass(Component, [{
			key: 'addListenersFromObj_',


			/**
    * Adds the listeners specified in the given object.
    * @param {!Object} obj
    * @protected
    */
			value: function addListenersFromObj_(obj) {
				var _eventsStateKeyHandle;

				if (!this.eventsStateKeyHandler_) {
					this.eventsStateKeyHandler_ = new EventHandler();
				}
				var handles = addListenersFromObj(this, obj);
				(_eventsStateKeyHandle = this.eventsStateKeyHandler_).add.apply(_eventsStateKeyHandle, babelHelpers.toConsumableArray(handles));
			}

			/**
    * Invokes the attached Lifecycle. When attached, the component element is
    * appended to the DOM and any other action to be performed must be
    * implemented in this method, such as, binding DOM events. A component can
    * be re-attached multiple times.
    * @param {(string|Element)=} opt_parentElement Optional parent element
    *     to render the component.
    * @param {(string|Element)=} opt_siblingElement Optional sibling element
    *     to render the component before it. Relevant when the component needs
    *     to be rendered before an existing element in the DOM.
    * @protected
    * @chainable
    */

		}, {
			key: 'attach',
			value: function attach(opt_parentElement, opt_siblingElement) {
				if (!this.inDocument) {
					this.attachElement(opt_parentElement, opt_siblingElement);
					this.inDocument = true;
					this.attachData_ = {
						parent: opt_parentElement,
						sibling: opt_siblingElement
					};
					this.emit('attached', this.attachData_);
					this.attached();
				}
				return this;
			}

			/**
    * Lifecycle. When attached, the component element is appended to the DOM
    * and any other action to be performed must be implemented in this method,
    * such as, binding DOM events. A component can be re-attached multiple
    * times, therefore the undo behavior for any action performed in this phase
    * must be implemented on the detach phase.
    */

		}, {
			key: 'attached',
			value: function attached() {}

			/**
    * Attaches the component element into the DOM.
    * @param {(string|Element)=} opt_parentElement Optional parent element
    *     to render the component.
    * @param {(string|Element)=} opt_siblingElement Optional sibling element
    *     to render the component before it. Relevant when the component needs
    *     to be rendered before an existing element in the DOM, e.g.
    *     `component.attach(null, existingElement)`.
    */

		}, {
			key: 'attachElement',
			value: function attachElement(opt_parentElement, opt_siblingElement) {
				var element = this.element;
				if (element && (opt_siblingElement || !element.parentNode)) {
					var parent = toElement(opt_parentElement) || this.DEFAULT_ELEMENT_PARENT;
					parent.insertBefore(element, toElement(opt_siblingElement));
				}
			}

			/**
    * Lifecycle. This is called when the component has just been created, before
    * it's rendered.
    */

		}, {
			key: 'created',
			value: function created() {}

			/**
    * Listens to a delegate event on the component's element.
    * @param {string} eventName The name of the event to listen to.
    * @param {string} selector The selector that matches the child elements that
    *   the event should be triggered for.
    * @param {!function(!Object)} callback Function to be called when the event is
    *   triggered. It will receive the normalized event object.
    * @return {!EventHandle} Can be used to remove the listener.
    */

		}, {
			key: 'delegate',
			value: function delegate(eventName, selector, callback) {
				return this.on('delegate:' + eventName + ':' + selector, callback);
			}

			/**
    * Invokes the detached Lifecycle. When detached, the component element is
    * removed from the DOM and any other action to be performed must be
    * implemented in this method, such as, unbinding DOM events. A component
    * can be detached multiple times.
    * @chainable
    */

		}, {
			key: 'detach',
			value: function detach() {
				if (this.inDocument) {
					if (this.element && this.element.parentNode) {
						this.element.parentNode.removeChild(this.element);
					}
					this.inDocument = false;
					this.detached();
				}
				this.emit('detached');
				return this;
			}

			/**
    * Lifecycle. When detached, the component element is removed from the DOM
    * and any other action to be performed must be implemented in this method,
    * such as, unbinding DOM events. A component can be detached multiple
    * times, therefore the undo behavior for any action performed in this phase
    * must be implemented on the attach phase.
    */

		}, {
			key: 'detached',
			value: function detached() {}

			/**
    * Lifecycle. Called when the component is disposed. Should be overridden by
    * sub classes to dispose of any internal data or events.
    */

		}, {
			key: 'disposed',
			value: function disposed() {}

			/**
    * @inheritDoc
    */

		}, {
			key: 'disposeInternal',
			value: function disposeInternal() {
				this.detach();
				this.disposed();

				this.elementEventProxy_.dispose();
				this.elementEventProxy_ = null;

				this.dataManager_.dispose(this);
				this.dataManager_ = null;

				this.renderer_.dispose(this);
				this.renderer_ = null;

				babelHelpers.get(Component.prototype.__proto__ || Object.getPrototypeOf(Component.prototype), 'disposeInternal', this).call(this);
			}

			/**
    * Gets data about where this component was attached at.
    * @return {!Object}
    */

		}, {
			key: 'getAttachData',
			value: function getAttachData() {
				return this.attachData_;
			}

			/**
    * Gets the `ComponentDataManager` being used.
    * @return {!ComponentDataManager}
    */

		}, {
			key: 'getDataManager',
			value: function getDataManager() {
				return this.dataManager_;
			}

			/**
    * Gets the configuration object that was passed to this component's constructor.
    * @return {!Object}
    */

		}, {
			key: 'getInitialConfig',
			value: function getInitialConfig() {
				return this.initialConfig_;
			}

			/**
    * Gets state data for this component.
    * @return {!Object}
    */

		}, {
			key: 'getState',
			value: function getState() {
				return this.dataManager_.getState(this);
			}

			/**
    * Gets the keys for the state data.
    * @return {!Array<string>}
    */

		}, {
			key: 'getStateKeys',
			value: function getStateKeys() {
				return this.dataManager_.getStateKeys(this);
			}

			/**
    * Gets the `ComponentRenderer` instance being used.
    * @return {!ComponentRenderer}
    */

		}, {
			key: 'getRenderer',
			value: function getRenderer() {
				return this.renderer_;
			}

			/**
    * Handles a change in the component's element.
    * @param {Element} prevVal
    * @param {Element} newVal
    * @protected
    */

		}, {
			key: 'handleComponentElementChanged_',
			value: function handleComponentElementChanged_(prevVal, newVal) {
				this.elementEventProxy_.setOriginEmitter(newVal);
				if (this.componentCreated_) {
					this.emit('elementChanged', {
						prevVal: prevVal,
						newVal: newVal
					});
					if (newVal && this.wasRendered) {
						this.syncVisible(this.dataManager_.get(this, 'visible'));
					}
				}
			}

			/**
    * Handles state batch changes. Calls any existing `sync` functions that
    * match the changed state keys.
    * @param {Event} event
    * @protected
    */

		}, {
			key: 'handleComponentStateChanged_',
			value: function handleComponentStateChanged_(event) {
				if (!this.hasSyncUpdates()) {
					this.updateRenderer_(event);
				}
				syncState(this, event.changes);
				this.emit('stateSynced', event);
			}

			/**
    * Handles a `stateKeyChanged` event. This is only called for components that
    * have requested updates to happen synchronously.
    * @param {!{key: string, newVal: *, prevVal: *}} data
    * @protected
    */

		}, {
			key: 'handleComponentStateKeyChanged_',
			value: function handleComponentStateKeyChanged_(data) {
				this.updateRenderer_({
					changes: babelHelpers.defineProperty({}, data.key, data)
				});
			}

			/**
    * Checks if this component has sync updates enabled.
    * @return {boolean}
    */

		}, {
			key: 'hasSyncUpdates',
			value: function hasSyncUpdates() {
				return this.syncUpdates_;
			}

			/**
    * Informs that the component that the rendered has finished rendering it. The
    * renderer is the one responsible for calling this when appropriate. This
    * will emit events and run the appropriate lifecycle for the first render.
    */

		}, {
			key: 'informRendered',
			value: function informRendered() {
				var firstRender = !this.hasRendererRendered_;
				this.hasRendererRendered_ = true;
				this.rendered(firstRender);
				this.emit('rendered', firstRender);
			}

			/**
    * Checks if the given function is a component constructor.
    * @param {!function()} fn Any function
    * @return {boolean}
    */

		}, {
			key: 'mergeElementClasses_',


			/**
    * Merges two values for the ELEMENT_CLASSES property into a single one.
    * @param {string} class1
    * @param {string} class2
    * @return {string} The merged value.
    * @protected
    */
			value: function mergeElementClasses_(class1, class2) {
				return class1 ? class1 + ' ' + (class2 || '') : class2;
			}

			/**
    * Fired when the `events` state value is changed.
    * @param {!Object} event
    * @protected
    */

		}, {
			key: 'onEventsChanged_',
			value: function onEventsChanged_(event) {
				this.eventsStateKeyHandler_.removeAllListeners();
				this.addListenersFromObj_(event.newVal);
			}

			/**
    * Creates and renders a component for the given constructor function. This
    * will always make sure that the constructor runs without rendering the
    * component, having the `render` step happen only after it has finished.
    * @param {!function()} Ctor The component's constructor function.
    * @param {Object|Element=} opt_configOrElement Optional config data or parent
    *     for the component.
    * @param {Element=} opt_element Optional parent for the component.
    * @return {!Component} The rendered component's instance.
    */

		}, {
			key: 'renderComponent',


			/**
    * Renders the component into the DOM via its `ComponentRenderer`. Stores the
    * given parent element to be used when the renderer is done (`informRendered`).
    * @param {(string|Element|boolean)=} opt_parentElement Optional parent element
    *     to render the component. If set to `false`, the element won't be
    *     attached to any element after rendering. In this case, `attach` should
    *     be called manually later to actually attach it to the dom.
    */
			value: function renderComponent(opt_parentElement) {
				if (!this.hasRendererRendered_) {
					this.getRenderer().render(this);
				}
				this.emit('render');
				syncState(this);
				this.attach(opt_parentElement);
				this.wasRendered = true;
			}

			/**
    * Setter logic for the element property.
    * @param {?string|Element} val
    */

		}, {
			key: 'setState',


			/**
    * Sets the value of all the specified state keys.
    * @param {!Object.<string,*>} values A map of state keys to the values they
    *   should be set to.
    * @param {function()=} opt_callback An optional function that will be run
    *   after the next batched update is triggered.
    */
			value: function setState(state, opt_callback) {
				this.dataManager_.setState(this, state, opt_callback);
			}

			/**
    * Setter for the `elementClasses` data property. Appends given value with
    * the one specified in `ELEMENT_CLASSES`.
    * @param {string} val
    * @return {string}
    * @protected
    */

		}, {
			key: 'setterElementClassesFn_',
			value: function setterElementClassesFn_(val) {
				var elementClasses = getStaticProperty(this.constructor, 'ELEMENT_CLASSES', this.mergeElementClasses_);
				if (elementClasses) {
					val += ' ' + elementClasses;
				}
				return val.trim();
			}

			/**
    * Sets up the component's data manager.
    * @protected
    */

		}, {
			key: 'setUpDataManager_',
			value: function setUpDataManager_() {
				this.dataManager_ = getStaticProperty(this.constructor, 'DATA_MANAGER');
				this.dataManager_.setUp(this, object.mixin({}, this.renderer_.getExtraDataConfig(this), Component.DATA));
			}

			/**
    * Sets up the component's renderer.
    * @protected
    */

		}, {
			key: 'setUpRenderer_',
			value: function setUpRenderer_() {
				this.renderer_ = getStaticProperty(this.constructor, 'RENDERER');
				this.renderer_.setUp(this);
			}

			/**
    * Sets up the component to use sync updates when `SYNC_UPDATES` is `true`.
    * @protected
    */

		}, {
			key: 'setUpSyncUpdates_',
			value: function setUpSyncUpdates_() {
				this.syncUpdates_ = getStaticProperty(this.constructor, 'SYNC_UPDATES');
				if (this.hasSyncUpdates()) {
					this.on('stateKeyChanged', this.handleComponentStateKeyChanged_.bind(this));
				}
			}

			/**
    * Skips renderer updates until `stopSkipUpdates` is called.
    */

		}, {
			key: 'startSkipUpdates',
			value: function startSkipUpdates() {
				this.skipUpdates_ = true;
			}

			/**
    * Stops skipping renderer updates.
    */

		}, {
			key: 'stopSkipUpdates',
			value: function stopSkipUpdates() {
				this.skipUpdates_ = false;
			}

			/**
    * State synchronization logic for `visible` state key.
    * Updates the element's display value according to its visibility.
    * @param {boolean} newVal
    */

		}, {
			key: 'syncVisible',
			value: function syncVisible(newVal) {
				if (this.element) {
					this.element.style.display = newVal ? '' : 'none';
				}
			}

			/**
    * Lifecycle. Called whenever the component has just been rendered.
    * @param {boolean} firstRender Flag indicating if this was the component's
    *     first render.
    */

		}, {
			key: 'rendered',
			value: function rendered() {}

			/**
    * Calls "update" on the renderer, passing it the changed data.
    * @param {!{changes: !Object}} data
    * @protected
    */

		}, {
			key: 'updateRenderer_',
			value: function updateRenderer_(data) {
				if (!this.skipUpdates_ && this.hasRendererRendered_) {
					this.getRenderer().update(this, data);
				}
			}

			/**
    * Validator logic for the `events` state key.
    * @param {Object} val
    * @return {boolean}
    * @protected
    */

		}, {
			key: 'validatorEventsFn_',
			value: function validatorEventsFn_(val) {
				return !isDefAndNotNull(val) || isObject(val);
			}
		}, {
			key: 'element',
			get: function get() {
				return this.elementValue_;
			},
			set: function set(val) {
				if (!isElement(val) && !isString(val) && isDefAndNotNull(val)) {
					return;
				}

				if (val) {
					val = toElement(val) || this.elementValue_;
				}

				if (this.elementValue_ !== val) {
					var prev = this.elementValue_;
					this.elementValue_ = val;
					this.handleComponentElementChanged_(prev, val);
				}
			}
		}], [{
			key: 'isComponentCtor',
			value: function isComponentCtor(fn) {
				return fn.prototype && fn.prototype[Component.COMPONENT_FLAG];
			}
		}, {
			key: 'render',
			value: function render(Ctor, opt_configOrElement, opt_element) {
				var config = opt_configOrElement;
				var element = opt_element;
				if (isElement(opt_configOrElement)) {
					config = null;
					element = opt_configOrElement;
				}
				var instance = new Ctor(config, false);
				instance.renderComponent(element);
				return instance;
			}
		}]);
		return Component;
	}(EventEmitter);

	/**
  * Component data definition.
  * @type {Object}
  * @static
  */


	Component.DATA = {
		/**
   * Objects describing children elements that were passed to be rendered inside
   * this component.
   * @type {!Array<!Object>}
   */
		children: {
			validator: Array.isArray,
			value: []
		},

		/**
   * CSS classes to be applied to the element.
   * @type {string}
   */
		elementClasses: {
			setter: 'setterElementClassesFn_',
			validator: isString,
			value: ''
		},

		/**
   * Listeners that should be attached to this component. Should be provided as
   * an object, where the keys are event names and the values are the listener
   * functions (or function names).
   * @type {Object<string, (function()|string|{selector: string, fn: function()|string})>}
   */
		events: {
			validator: 'validatorEventsFn_',
			value: null
		},

		/**
   * Indicates if the component is visible or not.
   * @type {boolean}
   */
		visible: {
			validator: isBoolean,
			value: true
		}
	};

	/**
  * Name of the flag used to identify component constructors via their prototype.
  * @type {string}
  */
	Component.COMPONENT_FLAG = '__metal_component__';

	/**
  * The `ComponentDataManager` class that should be used. This class will be
  * responsible for handling the component's data. Each component may have its
  * own implementation.
  * @type {!ComponentDataManager}
  */
	Component.DATA_MANAGER = ComponentDataManager;

	/**
  * CSS classes to be applied to the element.
  * @type {string}
  */
	Component.ELEMENT_CLASSES = '';

	/**
  * The `ComponentRenderer` that should be used. Components need to set this
  * to a subclass of `ComponentRenderer` that has the rendering logic, like
  * `SoyRenderer`.
  * @type {!ComponentRenderer}
  */
	Component.RENDERER = ComponentRenderer;

	/**
  * Flag indicating if component updates will happen synchronously. Updates are
  * done asynchronously by default, which allows changes to be batched and
  * applied together.
  * @type {boolean}
  */
	Component.SYNC_UPDATES = false;

	/**
  * Sets a prototype flag to easily determine if a given constructor is for
  * a component or not.
  */
	Component.prototype[Component.COMPONENT_FLAG] = true;

	var proxyBlackList_ = {
		eventsChanged: true,
		stateChanged: true,
		stateKeyChanged: true
	};

	this['metal']['Component'] = Component;
}).call(this);
'use strict';

(function () {
	var getFunctionName = this['metalNamed']['metal']['getFunctionName'];

	/**
  * The component registry is used to register components, so they can
  * be accessible by name.
  * @type {Object}
  */

	var ComponentRegistry = function () {
		function ComponentRegistry() {
			babelHelpers.classCallCheck(this, ComponentRegistry);
		}

		babelHelpers.createClass(ComponentRegistry, null, [{
			key: 'getConstructor',

			/**
    * Gets the constructor function for the given component name, or
    * undefined if it hasn't been registered yet.
    * @param {string} name The component's name.
    * @return {?function()}
    * @static
    */
			value: function getConstructor(name) {
				var constructorFn = ComponentRegistry.components_[name];
				if (!constructorFn) {
					console.error('There\'s no constructor registered for the component ' + 'named ' + name + '. Components need to be registered via ' + 'ComponentRegistry.register.');
				}
				return constructorFn;
			}

			/**
    * Registers a component, so it can be found by its name.
    * @param {!Function} constructorFn The component's constructor function.
    * @param {string=} opt_name Name of the registered component. If none is given
    *   the name defined by the NAME static variable will be used instead. If that
    *   isn't set as well, the name of the constructor function will be used.
    * @static
    */

		}, {
			key: 'register',
			value: function register(constructorFn, opt_name) {
				var name = opt_name;
				if (!name) {
					if (constructorFn.hasOwnProperty('NAME')) {
						name = constructorFn.NAME;
					} else {
						name = getFunctionName(constructorFn);
					}
				}
				constructorFn.NAME = name;
				ComponentRegistry.components_[name] = constructorFn;
			}
		}]);
		return ComponentRegistry;
	}();

	/**
  * Holds all registered components, indexed by their names.
  * @type {!Object<string, function()>}
  * @protected
  * @static
  */


	ComponentRegistry.components_ = {};

	this['metal']['ComponentRegistry'] = ComponentRegistry;
}).call(this);
'use strict';

(function () {
  var Component = this['metal']['Component'];
  var ComponentDataManager = this['metal']['ComponentDataManager'];
  var ComponentRegistry = this['metal']['ComponentRegistry'];
  var ComponentRenderer = this['metal']['ComponentRenderer'];
  this['metal']['component'] = Component;
  this['metalNamed']['component'] = this['metalNamed']['component'] || {};
  this['metalNamed']['component']['Component'] = Component;
  this['metalNamed']['component']['ComponentDataManager'] = ComponentDataManager;
  this['metalNamed']['component']['ComponentRegistry'] = ComponentRegistry;
  this['metalNamed']['component']['ComponentRenderer'] = ComponentRenderer;
  Object.keys(this['metalNamed']['events']).forEach(function (key) {
    this['metalNamed']['component'][key] = this['metalNamed']['events'][key];
  });
}).call(this);
'use strict';

(function () {
  var delegate = this['metalNamed']['dom']['delegate'];
  var getComponentFn = this['metalNamed']['component']['getComponentFn'];
  var getOriginalFn = this['metalNamed']['intercept']['getOriginalFn'];
  var isBoolean = this['metalNamed']['metal']['isBoolean'];
  var isDefAndNotNull = this['metalNamed']['metal']['isDefAndNotNull'];
  var isString = this['metalNamed']['metal']['isString'];


  var HANDLE_SUFFIX = '__handle__';
  var LISTENER_REGEX = /^(?:on([A-Z].+))|(?:data-on(.+))$/;

  /**
   * Applies an attribute to a specified element owned by the given component.
   * @param {!Component} component
   * @param {!Element} element
   * @param {string} name
   * @param {*} value
   */
  function applyAttribute(component, element, name, value) {
    var eventName = getEventFromListenerAttr_(name);
    if (eventName) {
      attachEvent_(component, element, name, eventName, value);
      return;
    }

    value = fixCheckedAttr_(name, value);
    setValueAttrAsProperty_(element, name, value);

    if (isBoolean(value)) {
      setBooleanAttr_(element, name, value);
    } else {
      getOriginalFn('attributes')(element, name, value);
    }
  }

  this['metalNamed']['attributes'] = this['metalNamed']['attributes'] || {};
  this['metalNamed']['attributes']['applyAttribute'] = applyAttribute; /**
                                                                        * Uses the given attribute information to attach an event to the component,
                                                                        * but only if it hasn't been attached before.
                                                                        * @param {!Component} component
                                                                        * @param {!Element} element
                                                                        * @param {string} name
                                                                        * @param {*} value
                                                                        */

  function attachFromAttrFirstTime(component, element, name, value) {
    var eventName = getEventFromListenerAttr_(name);
    if (eventName && !element[eventName + HANDLE_SUFFIX]) {
      attachEvent_(component, element, name, eventName, value);
    }
  }

  this['metalNamed']['attributes']['attachFromAttrFirstTime'] = attachFromAttrFirstTime; /**
                                                                                          * Listens to the specified event, attached via incremental dom calls.
                                                                                          * @param {!Component} component
                                                                                          * @param {!Element} element
                                                                                          * @param {string} attr
                                                                                          * @param {string} eventName
                                                                                          * @param {function()|string} fn
                                                                                          * @private
                                                                                          */

  function attachEvent_(component, element, attr, eventName, fn) {
    var handleKey = eventName + HANDLE_SUFFIX;
    if (element[handleKey]) {
      element[handleKey].removeListener();
      element[handleKey] = null;
    }

    element[attr] = fn;
    if (fn) {
      if (isString(fn)) {
        if (attr[0] === 'd') {
          // Allow data-on[eventkey] listeners to stay in the dom, as they
          // won't cause conflicts.
          element.setAttribute(attr, fn);
        }
        fn = getComponentFn(component, fn);
      }
      element[handleKey] = delegate(document, eventName, element, fn);
    } else {
      element.removeAttribute(attr);
    }
  }

  /**
   * Changes the value of the `checked` attribute to be a boolean.
   * NOTE: This is a temporary fix to account for incremental dom setting
   * "checked" as an attribute only, which can cause bugs since that won't
   * necessarily check/uncheck the element it's set on. See
   * https://github.com/google/incremental-dom/issues/198 for more details.
   * @param {string} name
   * @param {*} value
   * @return {*}
   * @private
   */
  function fixCheckedAttr_(name, value) {
    if (name === 'checked') {
      value = isDefAndNotNull(value) && value !== false;
    }
    return value;
  }

  /**
   * Returns the event name if the given attribute is a listener (matching the
   * `LISTENER_REGEX` regex), or null if it isn't.
   * @param {string} attr
   * @return {?string}
   * @private
   */
  function getEventFromListenerAttr_(attr) {
    var matches = LISTENER_REGEX.exec(attr);
    var eventName = matches ? matches[1] ? matches[1] : matches[2] : null;
    return eventName ? eventName.toLowerCase() : null;
  }

  /**
   * Sets boolean attributes manually. This is done because incremental dom sets
   * boolean values as string data attributes by default, which is counter
   * intuitive. This changes the behavior to use the actual boolean value.
   * @param {!Element} element
   * @param {string} name
   * @param {*} value
   * @private
   */
  function setBooleanAttr_(element, name, value) {
    element[name] = value;
    if (value) {
      element.setAttribute(name, '');
    } else {
      element.removeAttribute(name);
    }
  }

  /**
   * Sets the value of the `value` attribute directly in the element.
   * NOTE: This is a temporary fix to account for incremental dom setting "value"
   * as an attribute only, which can cause bugs since that won't necessarily
   * update the input's content it's set on. See
   * https://github.com/google/incremental-dom/issues/239 for more details. We
   * only do this if the new value is different though, as otherwise the browser
   * will automatically move the typing cursor to the end of the field.
   * @param {!Element} element
   * @param {string} name
   * @param {*} value
   * @private
   */
  function setValueAttrAsProperty_(element, name, value) {
    if (name === 'value' && element.value !== value) {
      element[name] = value;
    }
  }
}).call(this);
'use strict';

(function () {
	var getData = this['metalNamed']['data']['getData'];


	var comps_ = [];
	var disposing_ = false;

	/**
  * Disposes all sub components that were not rerendered since the last
  * time this function was scheduled.
  */
	function disposeUnused() {
		if (disposing_) {
			return;
		}
		disposing_ = true;

		for (var i = 0; i < comps_.length; i++) {
			var comp = comps_[i];
			if (!comp.isDisposed() && !getData(comp).parent) {
				// Don't let disposing cause the element to be removed, since it may
				// be currently being reused by another component.
				comp.element = null;
				comp.dispose();
			}
		}
		comps_ = [];
		disposing_ = false;
	}

	this['metalNamed']['unused'] = this['metalNamed']['unused'] || {};
	this['metalNamed']['unused']['disposeUnused'] = disposeUnused; /**
                                                                 * Schedules the given components to be checked and disposed if not used
                                                                 * anymore when `disposeUnused` is called.
                                                                 * @param {!Array<!Component>} comps
                                                                 */

	function schedule(comps) {
		for (var i = 0; i < comps.length; i++) {
			if (!comps[i].isDisposed()) {
				getData(comps[i]).parent = null;
				comps_.push(comps[i]);
			}
		}
	}
	this['metalNamed']['unused']['schedule'] = schedule;
}).call(this);
'use strict';

(function () {
	var applyAttribute = this['metalNamed']['attributes']['applyAttribute'];
	var attachFromAttrFirstTime = this['metalNamed']['attributes']['attachFromAttrFirstTime'];
	var buildConfigFromCall = this['metalNamed']['callArgs']['buildConfigFromCall'];
	var buildCallFromConfig = this['metalNamed']['callArgs']['buildCallFromConfig'];
	var captureChildren = this['metalNamed']['children']['captureChildren'];
	var getOwner = this['metalNamed']['children']['getOwner'];
	var isChildTag = this['metalNamed']['children']['isChildTag'];
	var renderChildTree = this['metalNamed']['children']['renderChildTree'];
	var clearChanges = this['metalNamed']['changes']['clearChanges'];
	var domData = this['metalNamed']['dom']['domData'];
	var getData = this['metalNamed']['data']['getData'];
	var getCompatibilityModeData = this['metalNamed']['metal']['getCompatibilityModeData'];
	var getUid = this['metalNamed']['metal']['getUid'];
	var isDef = this['metalNamed']['metal']['isDef'];
	var isDefAndNotNull = this['metalNamed']['metal']['isDefAndNotNull'];
	var isFunction = this['metalNamed']['metal']['isFunction'];
	var isString = this['metalNamed']['metal']['isString'];
	var object = this['metalNamed']['metal']['object'];
	var disposeUnused = this['metalNamed']['unused']['disposeUnused'];
	var schedule = this['metalNamed']['unused']['schedule'];
	var getOriginalFn = this['metalNamed']['intercept']['getOriginalFn'];
	var startInterception = this['metalNamed']['intercept']['startInterception'];
	var stopInterception = this['metalNamed']['intercept']['stopInterception'];
	var Component = this['metalNamed']['component']['Component'];
	var ComponentRegistry = this['metalNamed']['component']['ComponentRegistry'];


	var renderingComponents_ = [];
	var emptyChildren_ = [];

	/**
  * Adds the given css classes to the specified arguments for an incremental
  * dom call, merging with the existing value if there is one.
  * @param {string} elementClasses
  * @param {!Array} args
  * @private
  */
	function addElementClasses_(elementClasses, args) {
		var config = buildConfigFromCall(args);
		if (config.class) {
			config.class += ' ' + elementClasses;
			config.class = removeDuplicateClasses_(config.class);
		} else {
			config.class = elementClasses;
		}
		return buildCallFromConfig(args[0], config);
	}

	/**
  * Attaches inline listeners found on the first component render, since those
  * may come from existing elements on the page that already have
  * data-on[eventname] attributes set to its final value. This won't trigger
  * `handleInterceptedAttributesCall_`, so we need manual work to guarantee
  * that projects using progressive enhancement like this will still work.
  * @param {!Component} component
  * @param {!Element} node
  * @param {!Array} args
  * @private
  */
	function attachDecoratedListeners_(component, node, args) {
		if (!component.wasRendered) {
			var attrs = (args[2] || []).concat(args.slice(3));
			for (var i = 0; i < attrs.length; i += 2) {
				attachFromAttrFirstTime(component, node, attrs[i], attrs[i + 1]);
			}
		}
	}

	/**
  * Builds the "children" array to be passed to the current component.
  * @param {!Array<!Object>} children
  * @return {!Array<!Object>}
  * @private
  */
	function buildChildren_(children) {
		return children.length === 0 ? emptyChildren_ : children;
	}

	/**
  * Finishes the render operation, doing some cleaups.
  * @param {!Component} component
  * @private
  */
	function cleanUpRender_(component) {
		stopInterception();
		if (!getData(component).rootElementReached) {
			component.element = null;
		}
		component.informRendered();
		finishedRenderingComponent_();
	}

	/**
  * Removes the most recent component from the queue of rendering components.
  * @private
  */
	function finishedRenderingComponent_() {
		renderingComponents_.pop();
		if (renderingComponents_.length === 0) {
			disposeUnused();
		}
	}

	/**
  * Generates a key for the next element to be rendered.
  * @param {!Component} component
  * @param {?string} key The key originally passed to the element.
  * @return {?string}
  * @private
  */
	function generateKey_(component, key) {
		var data = getData(component);
		if (!data.rootElementReached && data.config.key) {
			key = data.config.key;
		}
		return component.getRenderer().generateKey(component, key);
	}

	/**
  * Gets the child components stored in the given object.
  * @param {!Object} data
  * @return {!Array<!Component>}
  * @private
  */
	function getChildComponents_(data) {
		data.childComponents = data.childComponents || [];
		return data.childComponents;
	}

	/**
  * Gets the component being currently rendered.
  * @return {Component}
  */
	function getComponentBeingRendered() {
		return renderingComponents_[renderingComponents_.length - 1];
	}

	this['metalNamed']['render'] = this['metalNamed']['render'] || {};
	this['metalNamed']['render']['getComponentBeingRendered'] = getComponentBeingRendered; /**
                                                                                         * Gets the data object that should be currently used. This object will either
                                                                                         * come from the current element being rendered by incremental dom or from
                                                                                         * the component instance being rendered (only when the current element is the
                                                                                         * component's direct parent).
                                                                                         * @return {!Object}
                                                                                         * @private
                                                                                         */

	function getCurrentData() {
		var element = IncrementalDOM.currentElement();
		var comp = getComponentBeingRendered();
		var obj = getData(comp);
		if (obj.rootElementReached && element !== comp.element.parentNode) {
			obj = domData.get(element);
		}
		obj.icComponentsData = obj.icComponentsData || {};
		return obj.icComponentsData;
	}

	/**
  * Returns the "ref" to be used for a component. Uses "key" as "ref" when
  * compatibility mode is on for the current renderer.
  * @param {!Component} owner
  * @param {!Object} config
  * @return {?string}
  * @private
  */
	function getRef_(owner, config) {
		var compatData = getCompatibilityModeData();
		if (compatData) {
			var ownerRenderer = owner.getRenderer();
			var renderers = compatData.renderers;
			var useKey = !renderers || renderers.indexOf(ownerRenderer) !== -1 || renderers.indexOf(ownerRenderer.RENDERER_NAME) !== -1;
			if (useKey && config.key && !config.ref) {
				return config.key;
			}
		}
		return config.ref;
	}

	/**
  * Gets the sub component referenced by the given tag and config data,
  * creating it if it doesn't yet exist.
  * @param {string|!Function} tagOrCtor The tag name.
  * @param {!Object} config The config object for the sub component.
  * @param {!Component} owner
  * @return {!Component} The sub component.
  * @protected
  */
	function getSubComponent_(tagOrCtor, config, owner) {
		var Ctor = tagOrCtor;
		if (isString(Ctor)) {
			Ctor = ComponentRegistry.getConstructor(tagOrCtor);
		}

		var ref = getRef_(owner, config);
		var comp = void 0;
		if (isDef(ref)) {
			comp = match_(owner.components[ref], Ctor, config, owner);
			owner.components[ref] = comp;
			owner.refs[ref] = comp;
		} else {
			var data = getCurrentData();
			var key = config.key;
			if (!isDef(key)) {
				var type = getUid(Ctor, true);
				data.currCount = data.currCount || {};
				data.currCount[type] = data.currCount[type] || 0;
				key = '__METAL_IC__' + type + '_' + data.currCount[type]++;
			}
			comp = match_(data.prevComps ? data.prevComps[key] : null, Ctor, config, owner);
			data.currComps = data.currComps || {};
			data.currComps[key] = comp;
		}

		return comp;
	}

	/**
  * Handles the event of children having finished being captured.
  * @param {!Object} tree The captured children in tree format.
  * @private
  */
	function handleChildrenCaptured_(tree, _ref) {
		var props = _ref.props,
		    tag = _ref.tag;

		props.children = buildChildren_(tree.props.children);
		return renderFromTag_(tag, props);
	}

	/**
  * Handles a child being rendered via `IncrementalDomChildren.render`. Skips
  * component nodes so that they can be rendered the correct way without
  * having to recapture both them and their children via incremental dom.
  * @param {!Object} node
  * @return {boolean}
  * @private
  */
	function handleChildRender_(node) {
		if (node.tag && isComponentTag_(node.tag)) {
			node.props.children = buildChildren_(node.props.children);
			renderFromTag_(node.tag, node.props, getOwner(node));
			return true;
		}
	}

	/**
  * Handles an intercepted call to the attributes default handler from
  * incremental dom.
  * @param {!Element} element
  * @param {string} name
  * @param {*} value
  * @private
  */
	function handleInterceptedAttributesCall_(element, name, value) {
		applyAttribute(getComponentBeingRendered(), element, name, value);
	}

	/**
  * Handles an intercepted call to the `elementOpen` function from incremental
  * dom.
  * @param {string} tag
  * @private
  */
	function handleInterceptedOpenCall_(tag) {
		if (isComponentTag_(tag)) {
			return handleSubComponentCall_.apply(null, arguments);
		} else {
			return handleRegularCall_.apply(null, arguments);
		}
	}

	/**
  * Handles an intercepted call to the `elementOpen` function from incremental
  * dom, done for a regular element. Among other things, adds any inline
  * listeners found on the first render and makes sure that component root
  * elements are always reused.
  * @param {!Component} owner
  * @param {!Array} args
  * @return {!Element} The rendered element.
  * @private
  */
	function handleRegularCall_() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var comp = getComponentBeingRendered();
		var owner = comp;
		if (isChildTag(args[0])) {
			owner = args[0].owner;
			args[0] = args[0].tag;
		}

		args[1] = generateKey_(comp, args[1]);

		if (!getData(comp).rootElementReached) {
			var elementClasses = comp.getDataManager().get(comp, 'elementClasses');
			if (elementClasses) {
				args = addElementClasses_(elementClasses, args);
			}
		}

		var node = getOriginalFn('elementOpen').apply(null, args);
		resetNodeData_(node);
		attachDecoratedListeners_(comp, node, args);
		updateElementIfNotReached_(comp, node);

		var ref = node.getAttribute('ref');
		if (isDefAndNotNull(ref)) {
			owner.refs[ref] = node;
		}
		owner.getRenderer().handleNodeRendered(node);

		return node;
	}

	/**
  * Handles an intercepted call to the `elementOpen` function from incremental
  * dom, done for a sub component element. Creates and updates the appropriate
  * sub component.
  * @private
  */
	function handleSubComponentCall_() {
		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		captureChildren(getComponentBeingRendered(), handleChildrenCaptured_, {
			props: buildConfigFromCall(args),
			tag: args[0]
		});
	}

	/**
  * Checks if the given tag represents a metal component.
  * @param {string} tag
  * @return {boolean}
  * @private
  */
	function isComponentTag_(tag) {
		return isFunction(tag) || isString(tag) && tag[0] === tag[0].toUpperCase();
	}

	this['metalNamed']['render']['isComponentTag_'] = isComponentTag_; /**
                                                                     * Checks if the given component can be a match for a constructor.
                                                                     * @param {!Component} comp
                                                                     * @param {!function()} Ctor
                                                                     * @param {!Component} owner
                                                                     * @return {boolean}
                                                                     * @private
                                                                     */

	function isMatch_(comp, Ctor, owner) {
		if (!comp || comp.constructor !== Ctor || comp.isDisposed()) {
			return false;
		}
		return getData(comp).owner === owner;
	}

	/**
  * Returns the given component if it matches the specified constructor
  * function. Otherwise, returns a new instance of the given constructor. On
  * both cases the component's state and config will be updated.
  * @param {Component} comp
  * @param {!function()} Ctor
  * @param {!Object} config
  * @param {!Component} owner
  * @return {!Component}
  * @private
  */
	function match_(comp, Ctor, config, owner) {
		var shouldUpdate = true;
		if (!isMatch_(comp, Ctor, owner)) {
			comp = new Ctor(config, false);
			shouldUpdate = false;
		}
		if (shouldUpdate) {
			comp.startSkipUpdates();
			comp.getDataManager().replaceNonInternal(comp, config);
			comp.stopSkipUpdates();
		}
		getData(comp).config = config;
		return comp;
	}

	/**
  * Prepares the render operation, resetting the component's data and starting
  * the incremental dom interception.
  * @param {!Component} component
  * @private
  */
	function prepareRender_(component) {
		renderingComponents_.push(component);

		var data = getData(component);
		resetComponentsData_(data.icComponentsData);
		clearChanges(data);
		data.rootElementReached = false;
		component.refs = {};

		if (data.childComponents) {
			schedule(data.childComponents);
			data.childComponents = null;
		}

		startInterception({
			attributes: handleInterceptedAttributesCall_,
			elementOpen: handleInterceptedOpenCall_
		});
	}

	/**
  * Removes duplicate css classes from the given string.
  * @param {string} classString
  * @return {string}
  * @private
  */
	function removeDuplicateClasses_(classString) {
		var classes = [];
		var all = classString.split(/\s+/);
		var used = {};
		for (var i = 0; i < all.length; i++) {
			if (!used[all[i]]) {
				used[all[i]] = true;
				classes.push(all[i]);
			}
		}
		return classes.join(' ');
	}

	/**
  * Renders the component with incremental dom function calls. This assumes that
  * an incremental dom `patch` is already running, and that this function has
  * been called inside it.
  * @param {!Component} component
  */
	function render(component) {
		prepareRender_(component);
		component.getRenderer().renderIncDom(component);
		cleanUpRender_(component);
	}

	this['metalNamed']['render']['render'] = render; /**
                                                   * Renders the given child node.
                                                   * @param {!Object} child
                                                   */

	function renderChild(child) {
		renderChildTree(child, handleChildRender_);
	}

	this['metalNamed']['render']['renderChild'] = renderChild; /**
                                                             * Renders the contents for the given tag.
                                                             * @param {!function()|string} tag
                                                             * @param {!Object} config
                                                             * @param {Component=} opt_owner
                                                             * @private
                                                             */

	function renderFromTag_(tag, config, opt_owner) {
		if (isString(tag) || tag.prototype.getRenderer) {
			var comp = renderSubComponent_(tag, config, opt_owner);
			updateElementIfNotReached_(getComponentBeingRendered(), comp.element);
			return comp.element;
		} else {
			return tag(config);
		}
	}

	/**
  * Creates and renders the given function, which can either be a simple
  * incremental dom function or a component constructor.
  * @param {!IncrementalDomRenderer} renderer
  * @param {!function()} fnOrCtor Either a simple incremental dom function or a
  *     component constructor.
  * @param {Object|Element=} opt_dataOrElement Optional config data for the
  *     function or parent for the rendered content.
  * @param {Element=} opt_parent Optional parent for the rendered content.
  * @return {!Component} The rendered component's instance.
  */
	function renderFunction(renderer, fnOrCtor, opt_dataOrElement, opt_parent) {
		if (!Component.isComponentCtor(fnOrCtor)) {
			var fn = fnOrCtor;

			var TempComponent = function (_Component) {
				babelHelpers.inherits(TempComponent, _Component);

				function TempComponent() {
					babelHelpers.classCallCheck(this, TempComponent);
					return babelHelpers.possibleConstructorReturn(this, (TempComponent.__proto__ || Object.getPrototypeOf(TempComponent)).apply(this, arguments));
				}

				babelHelpers.createClass(TempComponent, [{
					key: 'created',
					value: function created() {
						var parent = getComponentBeingRendered();
						if (parent) {
							updateContext_(this, parent);
						}
					}
				}, {
					key: 'render',
					value: function render() {
						fn(this.getInitialConfig());
					}
				}]);
				return TempComponent;
			}(Component);

			TempComponent.RENDERER = renderer;
			fnOrCtor = TempComponent;
		}
		return Component.render(fnOrCtor, opt_dataOrElement, opt_parent);
	}

	this['metalNamed']['render']['renderFunction'] = renderFunction; /**
                                                                   * This updates the sub component that is represented by the given data.
                                                                   * The sub component is created, added to its parent and rendered. If it
                                                                   * had already been rendered before though, it will only have its state
                                                                   * updated instead.
                                                                   * @param {string|!function()} tagOrCtor The tag name or constructor function.
                                                                   * @param {!Object} config The config object for the sub component.
                                                                   * @param {ComponentRenderer=} opt_owner
                                                                   * @return {!Component} The updated sub component.
                                                                   * @private
                                                                   */

	function renderSubComponent_(tagOrCtor, config, opt_owner) {
		var parent = getComponentBeingRendered();
		var owner = opt_owner || parent;
		var comp = getSubComponent_(tagOrCtor, config, owner);
		updateContext_(comp, parent);

		var data = getData(comp);
		data.parent = parent;
		data.owner = owner;

		var parentData = getData(parent);
		getChildComponents_(parentData).push(comp);
		if (!config.key && !parentData.rootElementReached) {
			config.key = parentData.config.key;
		}

		comp.getRenderer().renderInsidePatch(comp);
		if (!comp.wasRendered) {
			comp.renderComponent();
		}
		return comp;
	}

	/**
  * Resets the given incremental dom data object, preparing it for the next pass.
  * @param {Object} data
  * @private
  */
	function resetComponentsData_(data) {
		if (data) {
			data.prevComps = data.currComps;
			data.currComps = null;
			data.currCount = null;
		}
	}
	/**
  * Resets all data stored in the given node.
  * @param {!Element} node
  * @private
  */
	function resetNodeData_(node) {
		if (domData.has(node)) {
			resetComponentsData_(domData.get(node).icComponentsData);
		}
	}

	/**
  * Updates the given component's context according to the data from the
  * component that is currently being rendered.
  * @param {!Component} comp
  * @protected
  */
	function updateContext_(comp, parent) {
		var context = comp.context;
		var childContext = parent.getChildContext ? parent.getChildContext() : null;
		object.mixin(context, parent.context, childContext);
		comp.context = context;
	}

	/**
  * Updates this renderer's component's element with the given values, unless
  * it has already been reached by an earlier call.
  * @param {!Component} component
  * @param {!Element} node
  * @private
  */
	function updateElementIfNotReached_(component, node) {
		var data = getData(component);
		if (!data.rootElementReached) {
			data.rootElementReached = true;
			if (component.element !== node) {
				component.element = node;
			}
		}
	}
}).call(this);
'use strict';

(function () {
	var append = this['metalNamed']['dom']['append'];
	var exitDocument = this['metalNamed']['dom']['exitDocument'];
	var getData = this['metalNamed']['data']['getData'];
	var render = this['metalNamed']['render']['render'];


	var patchingComponents_ = [];

	/**
  * Guarantees that the component's element has a parent. That's necessary
  * when calling incremental dom's `patchOuter` for now, as otherwise it will
  * throw an error if the element needs to be replaced.
  * @return {Element} The parent, in case it was added.
  * @private
  */
	function buildParentIfNecessary_(element) {
		if (!element || !element.parentNode) {
			var parent = document.createElement('div');
			if (element) {
				append(parent, element);
			}
			return parent;
		}
	}

	/**
  * Calls incremental dom's patch function.
  * @param {!Component} component The component to patch.
  * @param {!Element} element The element the component should be patched on.
  * @param {boolean=} opt_outer Flag indicating if `patchOuter` should be used
  *     instead of `patch`.
  * @private
  */
	function callPatch_(component, element, opt_outer) {
		patchingComponents_.push(component);

		var data = getData(component);
		if (!data.render) {
			// Store reference to avoid binds on every patch.
			data.render = render.bind(null, component);
		}

		var patchFn = opt_outer ? IncrementalDOM.patchOuter : IncrementalDOM.patch;
		patchFn(element, data.render);

		patchingComponents_.pop();
	}

	/**
  * Gets the component that triggered the current patch operation.
  * @return {Component}
  */
	function getPatchingComponent() {
		return patchingComponents_[patchingComponents_.length - 1];
	}

	this['metalNamed']['patch'] = this['metalNamed']['patch'] || {};
	this['metalNamed']['patch']['getPatchingComponent'] = getPatchingComponent; /**
                                                                              * Patches the component with incremental dom function calls.
                                                                              * @param {!Component} component
                                                                              */

	function patch(component) {
		if (!tryPatchEmptyWithParent_(component)) {
			if (!tryPatchWithNoParent_(component)) {
				var element = component.element;
				callPatch_(component, element, true);
			}
		}
	}

	this['metalNamed']['patch']['patch'] = patch; /**
                                                * Checks if the component has no content but was rendered from another
                                                * component. If so, we'll need to patch this parent to make sure that any new
                                                * content will be added in the right position.
                                                * @param {!Component} component
                                                * @return {?boolean} True if the patch happened. Nothing otherwise.
                                                * @private
                                                */

	function tryPatchEmptyWithParent_(component) {
		var data = getData(component);
		if (!component.element && data.parent) {
			data.parent.getRenderer().patch(data.parent);
			return true;
		}
	}

	/**
  * Checks if the component's element exists and has a parent. If that's not the
  * case, a temporary parent will be created and passed to the `patch` function,
  * since incremental dom requires it. Once the patch is done the temporary
  * parent is removed and the component's content is reattached to the correct
  * final position.
  * @param {!Component} component
  * @return {?boolean} True if the patch happened. Nothing otherwise.
  * @private
  */
	function tryPatchWithNoParent_(component) {
		var tempParent = buildParentIfNecessary_(component.element);
		if (tempParent) {
			callPatch_(component, tempParent);
			exitDocument(component.element);
			if (component.element && component.inDocument) {
				var attach = component.getAttachData();
				component.attachElement(attach.parent, attach.sibling);
			}
			return true;
		}
	}
}).call(this);
'use strict';

(function () {
	var getChanges = this['metalNamed']['changes']['getChanges'];
	var trackChanges = this['metalNamed']['changes']['trackChanges'];
	var clearData = this['metalNamed']['data']['clearData'];
	var _getData = this['metalNamed']['data']['getData'];
	var getOwner = this['metalNamed']['children']['getOwner'];
	var _getPatchingComponent = this['metalNamed']['patch']['getPatchingComponent'];
	var _patch = this['metalNamed']['patch']['patch'];
	var render = this['metalNamed']['render']['render'];
	var _renderChild = this['metalNamed']['render']['renderChild'];
	var renderFunction = this['metalNamed']['render']['renderFunction'];
	var Component = this['metalNamed']['component']['Component'];
	var ComponentRenderer = this['metalNamed']['component']['ComponentRenderer'];

	var IncrementalDomRenderer = function (_ComponentRenderer$co) {
		babelHelpers.inherits(IncrementalDomRenderer, _ComponentRenderer$co);

		function IncrementalDomRenderer() {
			babelHelpers.classCallCheck(this, IncrementalDomRenderer);
			return babelHelpers.possibleConstructorReturn(this, (IncrementalDomRenderer.__proto__ || Object.getPrototypeOf(IncrementalDomRenderer)).apply(this, arguments));
		}

		babelHelpers.createClass(IncrementalDomRenderer, [{
			key: 'buildShouldUpdateArgs',

			/**
    * Returns an array with the args that should be passed to the component's
    * `shouldUpdate` method. This can be overridden by sub classes to change
    * what the method should receive.
    * @param {Object} changes
    * @return {!Array}
    */
			value: function buildShouldUpdateArgs(changes) {
				return [changes.props];
			}

			/**
    * @inheritDoc
    */

		}, {
			key: 'dispose',
			value: function dispose(component) {
				var data = _getData(component);
				var ref = data.config.ref;
				var owner = data.owner;
				if (owner && owner.components && owner.components[ref] === component) {
					delete owner.components[ref];
				}

				if (data.childComponents) {
					for (var i = 0; i < data.childComponents.length; i++) {
						var child = data.childComponents[i];
						if (!child.isDisposed()) {
							child.element = null;
							child.dispose();
						}
					}
				}

				clearData(component);
			}

			/**
    * Generates a key for the element currently being rendered in the given
    * component. By default, just returns the original key. Sub classes can
    * override this to change the behavior.
    * @param {!Component} component
    * @param {string} key
    * @return {?string}
    */

		}, {
			key: 'generateKey',
			value: function generateKey(component, key) {
				return key;
			}

			/**
    * Get the component's config data.
    * @param {!Component} component
    * @return {!Object}
    */

		}, {
			key: 'getConfig',
			value: function getConfig(component) {
				return _getData(component).config;
			}

			/**
    * Get the component's incremental dom renderer data.
    * @param {!Component} component
    * @return {!Object}
    */

		}, {
			key: 'getData',
			value: function getData(component) {
				return _getData(component);
			}

			/**
    * Gets the component that triggered the current patch operation.
    * @return {Component}
    */

		}, {
			key: 'getPatchingComponent',
			value: function getPatchingComponent() {
				return _getPatchingComponent();
			}

			/**
    * Handles a node having just been rendered. Sub classes should override this
    * for custom behavior.
    */

		}, {
			key: 'handleNodeRendered',
			value: function handleNodeRendered() {}

			/**
    * Checks if the given object is an incremental dom node.
    * @param {!Object} node
    * @return {boolean}
    */

		}, {
			key: 'isIncDomNode',
			value: function isIncDomNode(node) {
				return !!getOwner(node);
			}

			/**
    * Calls incremental dom's patch function to render the component.
    * @param {!Component} component
    */

		}, {
			key: 'patch',
			value: function patch(component) {
				_patch(component);
			}

			/**
    * Renders the renderer's component for the first time, patching its element
    * through incremental dom function calls. If the first arg is a function
    * instead of a component instance, creates and renders this function, which
    * can either be a simple incremental dom function or a component constructor.
    * @param {!Component} component
    * @param {!Component|function()} component Can be a component instance, a
    *     simple incremental dom function or a component constructor.
    * @param {Object|Element=} opt_dataOrElement Optional config data for the
    *     function, or parent for the rendered content.
    * @param {Element=} opt_parent Optional parent for the rendered content.
    * @return {!Component} The rendered component's instance.
    */

		}, {
			key: 'render',
			value: function render(component, opt_dataOrElement, opt_parent) {
				if (component instanceof Component) {
					this.patch(component);
				} else {
					return renderFunction(this, component, opt_dataOrElement, opt_parent);
				}
			}

			/**
    * Renders the given child node via its owner renderer.
    * @param {!Object} child
    */

		}, {
			key: 'renderChild',
			value: function renderChild(child) {
				_renderChild(child);
			}

			/**
    * Calls functions from `IncrementalDOM` to build the component element's
    * content. Can be overriden by subclasses (for integration with template
    * engines for example).
    * @param {!Component} component
    */

		}, {
			key: 'renderIncDom',
			value: function renderIncDom(component) {
				if (component.render) {
					component.render();
				} else {
					IncrementalDOM.elementVoid('div');
				}
			}

			/**
    * Runs the incremental dom functions for rendering this component, without
    * calling `patch`. This function needs to be called inside a `patch`.
    * @param {!Component} component
    */

		}, {
			key: 'renderInsidePatch',
			value: function renderInsidePatch(component) {
				var shouldRender = !component.wasRendered || this.shouldUpdate(component, getChanges(component)) || IncrementalDOM.currentPointer() !== component.element;
				if (shouldRender) {
					render(component);
				} else if (component.element) {
					this.skipRender();
				}
			}

			/**
    * Sets up this component to be used by this renderer.
    * @param {!Component} component
    */

		}, {
			key: 'setUp',
			value: function setUp(component) {
				component.context = {};
				component.components = {};
				component.refs = {};

				var data = _getData(component);
				data.config = component.getInitialConfig();
				trackChanges(component);
			}

			/**
    * Checks if the component should be updated with the current state changes.
    * @param {!Component} component
    * @param {Object} changes
    * @return {boolean}
    */

		}, {
			key: 'shouldUpdate',
			value: function shouldUpdate(component, changes) {
				if (!changes) {
					return false;
				}
				if (component.shouldUpdate) {
					return component.shouldUpdate.apply(component, babelHelpers.toConsumableArray(this.buildShouldUpdateArgs(changes)));
				}
				return true;
			}

			/**
    * Skips the next disposal of children components, by clearing the array as
    * if there were no children rendered the last time. This can be useful for
    * allowing components to be reused by other parent components in separate
    * render update cycles.
    * @param {!Component} component
    */

		}, {
			key: 'skipNextChildrenDisposal',
			value: function skipNextChildrenDisposal(component) {
				_getData(component).childComponents = null;
			}

			/**
    * Skips rendering the current node.
    */

		}, {
			key: 'skipRender',
			value: function skipRender() {
				IncrementalDOM.skipNode();
			}

			/**
    * Updates the renderer's component when state changes, patching its element
    * through incremental dom function calls.
    * @param {!Component} component
    */

		}, {
			key: 'update',
			value: function update(component) {
				if (this.shouldUpdate(component, getChanges(component))) {
					this.patch(component);
				}
			}
		}]);
		return IncrementalDomRenderer;
	}(ComponentRenderer.constructor);

	var renderer = new IncrementalDomRenderer();

	// Name of this renderer. Renderers should provide this as a way to identify
	// them via a simple string (when calling enableCompatibilityMode to add
	// support to old features for specific renderers for example).
	renderer.RENDERER_NAME = 'incremental-dom';

	this['metal']['IncrementalDomRenderer'] = renderer;
}).call(this);
'use strict';

(function () {

  (function () {
    this.CLOSURE_NO_DEPS = true;
    this.goog = this.goog || {};

    // Copyright 2006 The Closure Library Authors. All Rights Reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    //      http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS-IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.

    /**
     * @fileoverview Bootstrap for the Google JS Library (Closure).
     *
     * In uncompiled mode base.js will write out Closure's deps file, unless the
     * global <code>CLOSURE_NO_DEPS</code> is set to true.  This allows projects to
     * include their own deps file(s) from different locations.
     *
     * @author arv@google.com (Erik Arvidsson)
     *
     * @provideGoog
     */

    /**
     * @define {boolean} Overridden to true by the compiler when
     *     --process_closure_primitives is specified.
     */
    var COMPILED = false;

    /**
     * Base namespace for the Closure library.  Checks to see goog is already
     * defined in the current scope before assigning to prevent clobbering if
     * base.js is loaded more than once.
     *
     * @const
     */
    var goog = this.goog || {};

    /**
     * Reference to the global context.  In most cases this will be 'window'.
     */
    goog.global = this;

    /**
     * A hook for overriding the define values in uncompiled mode.
     *
     * In uncompiled mode, {@code CLOSURE_UNCOMPILED_DEFINES} may be defined before
     * loading base.js.  If a key is defined in {@code CLOSURE_UNCOMPILED_DEFINES},
     * {@code goog.define} will use the value instead of the default value.  This
     * allows flags to be overwritten without compilation (this is normally
     * accomplished with the compiler's "define" flag).
     *
     * Example:
     * <pre>
     *   var CLOSURE_UNCOMPILED_DEFINES = {'goog.DEBUG': false};
     * </pre>
     *
     * @type {Object<string, (string|number|boolean)>|undefined}
     */
    goog.global.CLOSURE_UNCOMPILED_DEFINES;

    /**
     * A hook for overriding the define values in uncompiled or compiled mode,
     * like CLOSURE_UNCOMPILED_DEFINES but effective in compiled code.  In
     * uncompiled code CLOSURE_UNCOMPILED_DEFINES takes precedence.
     *
     * Also unlike CLOSURE_UNCOMPILED_DEFINES the values must be number, boolean or
     * string literals or the compiler will emit an error.
     *
     * While any @define value may be set, only those set with goog.define will be
     * effective for uncompiled code.
     *
     * Example:
     * <pre>
     *   var CLOSURE_DEFINES = {'goog.DEBUG': false} ;
     * </pre>
     *
     * @type {Object<string, (string|number|boolean)>|undefined}
     */
    goog.global.CLOSURE_DEFINES;

    /**
     * Returns true if the specified value is not undefined.
     * WARNING: Do not use this to test if an object has a property. Use the in
     * operator instead.
     *
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is defined.
     */
    goog.isDef = function (val) {
      // void 0 always evaluates to undefined and hence we do not need to depend on
      // the definition of the global variable named 'undefined'.
      return val !== void 0;
    };

    /**
     * Builds an object structure for the provided namespace path, ensuring that
     * names that already exist are not overwritten. For example:
     * "a.b.c" -> a = {};a.b={};a.b.c={};
     * Used by goog.provide and goog.exportSymbol.
     * @param {string} name name of the object that this file defines.
     * @param {*=} opt_object the object to expose at the end of the path.
     * @param {Object=} opt_objectToExportTo The object to add the path to; default
     *     is |goog.global|.
     * @private
     */
    goog.exportPath_ = function (name, opt_object, opt_objectToExportTo) {
      var parts = name.split('.');
      var cur = opt_objectToExportTo || goog.global;

      // Internet Explorer exhibits strange behavior when throwing errors from
      // methods externed in this manner.  See the testExportSymbolExceptions in
      // base_test.html for an example.
      if (!(parts[0] in cur) && cur.execScript) {
        cur.execScript('var ' + parts[0]);
      }

      // Certain browsers cannot parse code in the form for((a in b); c;);
      // This pattern is produced by the JSCompiler when it collapses the
      // statement above into the conditional loop below. To prevent this from
      // happening, use a for-loop and reserve the init logic as below.

      // Parentheses added to eliminate strict JS warning in Firefox.
      for (var part; parts.length && (part = parts.shift());) {
        if (!parts.length && goog.isDef(opt_object)) {
          // last part and we have an object; use it
          cur[part] = opt_object;
        } else if (cur[part]) {
          cur = cur[part];
        } else {
          cur = cur[part] = {};
        }
      }
    };

    /**
     * Defines a named value. In uncompiled mode, the value is retrieved from
     * CLOSURE_DEFINES or CLOSURE_UNCOMPILED_DEFINES if the object is defined and
     * has the property specified, and otherwise used the defined defaultValue.
     * When compiled the default can be overridden using the compiler
     * options or the value set in the CLOSURE_DEFINES object.
     *
     * @param {string} name The distinguished name to provide.
     * @param {string|number|boolean} defaultValue
     */
    goog.define = function (name, defaultValue) {
      var value = defaultValue;
      if (!COMPILED) {
        if (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, name)) {
          value = goog.global.CLOSURE_UNCOMPILED_DEFINES[name];
        } else if (goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, name)) {
          value = goog.global.CLOSURE_DEFINES[name];
        }
      }
      goog.exportPath_(name, value);
    };

    /**
     * @define {boolean} DEBUG is provided as a convenience so that debugging code
     * that should not be included in a production js_binary can be easily stripped
     * by specifying --define goog.DEBUG=false to the JSCompiler. For example, most
     * toString() methods should be declared inside an "if (goog.DEBUG)" conditional
     * because they are generally used for debugging purposes and it is difficult
     * for the JSCompiler to statically determine whether they are used.
     */
    goog.define('goog.DEBUG', true);

    /**
     * @define {string} LOCALE defines the locale being used for compilation. It is
     * used to select locale specific data to be compiled in js binary. BUILD rule
     * can specify this value by "--define goog.LOCALE=<locale_name>" as JSCompiler
     * option.
     *
     * Take into account that the locale code format is important. You should use
     * the canonical Unicode format with hyphen as a delimiter. Language must be
     * lowercase, Language Script - Capitalized, Region - UPPERCASE.
     * There are few examples: pt-BR, en, en-US, sr-Latin-BO, zh-Hans-CN.
     *
     * See more info about locale codes here:
     * http://www.unicode.org/reports/tr35/#Unicode_Language_and_Locale_Identifiers
     *
     * For language codes you should use values defined by ISO 693-1. See it here
     * http://www.w3.org/WAI/ER/IG/ert/iso639.htm. There is only one exception from
     * this rule: the Hebrew language. For legacy reasons the old code (iw) should
     * be used instead of the new code (he), see http://wiki/Main/IIISynonyms.
     */
    goog.define('goog.LOCALE', 'en'); // default to en


    /**
     * @define {boolean} Whether this code is running on trusted sites.
     *
     * On untrusted sites, several native functions can be defined or overridden by
     * external libraries like Prototype, Datejs, and JQuery and setting this flag
     * to false forces closure to use its own implementations when possible.
     *
     * If your JavaScript can be loaded by a third party site and you are wary about
     * relying on non-standard implementations, specify
     * "--define goog.TRUSTED_SITE=false" to the JSCompiler.
     */
    goog.define('goog.TRUSTED_SITE', true);

    /**
     * @define {boolean} Whether a project is expected to be running in strict mode.
     *
     * This define can be used to trigger alternate implementations compatible with
     * running in EcmaScript Strict mode or warn about unavailable functionality.
     * @see https://goo.gl/g5EoHI
     *
     */
    goog.define('goog.STRICT_MODE_COMPATIBLE', false);

    /**
     * @define {boolean} Whether code that calls {@link goog.setTestOnly} should
     *     be disallowed in the compilation unit.
     */
    goog.define('goog.DISALLOW_TEST_ONLY_CODE', COMPILED && !goog.DEBUG);

    /**
     * @define {boolean} Whether to use a Chrome app CSP-compliant method for
     *     loading scripts via goog.require. @see appendScriptSrcNode_.
     */
    goog.define('goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING', false);

    /**
     * Defines a namespace in Closure.
     *
     * A namespace may only be defined once in a codebase. It may be defined using
     * goog.provide() or goog.module().
     *
     * The presence of one or more goog.provide() calls in a file indicates
     * that the file defines the given objects/namespaces.
     * Provided symbols must not be null or undefined.
     *
     * In addition, goog.provide() creates the object stubs for a namespace
     * (for example, goog.provide("goog.foo.bar") will create the object
     * goog.foo.bar if it does not already exist).
     *
     * Build tools also scan for provide/require/module statements
     * to discern dependencies, build dependency files (see deps.js), etc.
     *
     * @see goog.require
     * @see goog.module
     * @param {string} name Namespace provided by this file in the form
     *     "goog.package.part".
     */
    goog.provide = function (name) {
      if (!COMPILED) {
        // Ensure that the same namespace isn't provided twice.
        // A goog.module/goog.provide maps a goog.require to a specific file
        if (goog.isProvided_(name)) {
          throw Error('Namespace "' + name + '" already declared.');
        }
      }

      goog.constructNamespace_(name);
    };

    /**
     * @param {string} name Namespace provided by this file in the form
     *     "goog.package.part".
     * @param {Object=} opt_obj The object to embed in the namespace.
     * @private
     */
    goog.constructNamespace_ = function (name, opt_obj) {
      if (!COMPILED) {
        delete goog.implicitNamespaces_[name];

        var namespace = name;
        while (namespace = namespace.substring(0, namespace.lastIndexOf('.'))) {
          if (goog.getObjectByName(namespace)) {
            break;
          }
          goog.implicitNamespaces_[namespace] = true;
        }
      }

      goog.exportPath_(name, opt_obj);
    };

    /**
     * Module identifier validation regexp.
     * Note: This is a conservative check, it is very possible to be more lenient,
     *   the primary exclusion here is "/" and "\" and a leading ".", these
     *   restrictions are intended to leave the door open for using goog.require
     *   with relative file paths rather than module identifiers.
     * @private
     */
    goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;

    /**
     * Defines a module in Closure.
     *
     * Marks that this file must be loaded as a module and claims the namespace.
     *
     * A namespace may only be defined once in a codebase. It may be defined using
     * goog.provide() or goog.module().
     *
     * goog.module() has three requirements:
     * - goog.module may not be used in the same file as goog.provide.
     * - goog.module must be the first statement in the file.
     * - only one goog.module is allowed per file.
     *
     * When a goog.module annotated file is loaded, it is enclosed in
     * a strict function closure. This means that:
     * - any variables declared in a goog.module file are private to the file
     * (not global), though the compiler is expected to inline the module.
     * - The code must obey all the rules of "strict" JavaScript.
     * - the file will be marked as "use strict"
     *
     * NOTE: unlike goog.provide, goog.module does not declare any symbols by
     * itself. If declared symbols are desired, use
     * goog.module.declareLegacyNamespace().
     *
     *
     * See the public goog.module proposal: http://goo.gl/Va1hin
     *
     * @param {string} name Namespace provided by this file in the form
     *     "goog.package.part", is expected but not required.
     */
    goog.module = function (name) {
      if (!goog.isString(name) || !name || name.search(goog.VALID_MODULE_RE_) == -1) {
        throw Error('Invalid module identifier');
      }
      if (!goog.isInModuleLoader_()) {
        throw Error('Module ' + name + ' has been loaded incorrectly.');
      }
      if (goog.moduleLoaderState_.moduleName) {
        throw Error('goog.module may only be called once per module.');
      }

      // Store the module name for the loader.
      goog.moduleLoaderState_.moduleName = name;
      if (!COMPILED) {
        // Ensure that the same namespace isn't provided twice.
        // A goog.module/goog.provide maps a goog.require to a specific file
        if (goog.isProvided_(name)) {
          throw Error('Namespace "' + name + '" already declared.');
        }
        delete goog.implicitNamespaces_[name];
      }
    };

    /**
     * @param {string} name The module identifier.
     * @return {?} The module exports for an already loaded module or null.
     *
     * Note: This is not an alternative to goog.require, it does not
     * indicate a hard dependency, instead it is used to indicate
     * an optional dependency or to access the exports of a module
     * that has already been loaded.
     * @suppress {missingProvide}
     */
    goog.module.get = function (name) {
      return goog.module.getInternal_(name);
    };

    /**
     * @param {string} name The module identifier.
     * @return {?} The module exports for an already loaded module or null.
     * @private
     */
    goog.module.getInternal_ = function (name) {
      if (!COMPILED) {
        if (goog.isProvided_(name)) {
          // goog.require only return a value with-in goog.module files.
          return name in goog.loadedModules_ ? goog.loadedModules_[name] : goog.getObjectByName(name);
        } else {
          return null;
        }
      }
    };

    /**
     * @private {?{moduleName: (string|undefined), declareLegacyNamespace:boolean}}
     */
    goog.moduleLoaderState_ = null;

    /**
     * @private
     * @return {boolean} Whether a goog.module is currently being initialized.
     */
    goog.isInModuleLoader_ = function () {
      return goog.moduleLoaderState_ != null;
    };

    /**
     * Provide the module's exports as a globally accessible object under the
     * module's declared name.  This is intended to ease migration to goog.module
     * for files that have existing usages.
     * @suppress {missingProvide}
     */
    goog.module.declareLegacyNamespace = function () {
      if (!COMPILED && !goog.isInModuleLoader_()) {
        throw new Error('goog.module.declareLegacyNamespace must be called from ' + 'within a goog.module');
      }
      if (!COMPILED && !goog.moduleLoaderState_.moduleName) {
        throw Error('goog.module must be called prior to ' + 'goog.module.declareLegacyNamespace.');
      }
      goog.moduleLoaderState_.declareLegacyNamespace = true;
    };

    /**
     * Marks that the current file should only be used for testing, and never for
     * live code in production.
     *
     * In the case of unit tests, the message may optionally be an exact namespace
     * for the test (e.g. 'goog.stringTest'). The linter will then ignore the extra
     * provide (if not explicitly defined in the code).
     *
     * @param {string=} opt_message Optional message to add to the error that's
     *     raised when used in production code.
     */
    goog.setTestOnly = function (opt_message) {
      if (goog.DISALLOW_TEST_ONLY_CODE) {
        opt_message = opt_message || '';
        throw Error('Importing test-only code into non-debug environment' + (opt_message ? ': ' + opt_message : '.'));
      }
    };

    if (!COMPILED) {
      /**
       * Check if the given name has been goog.provided. This will return false for
       * names that are available only as implicit namespaces.
       * @param {string} name name of the object to look for.
       * @return {boolean} Whether the name has been provided.
       * @private
       */
      goog.isProvided_ = function (name) {
        return name in goog.loadedModules_ || !goog.implicitNamespaces_[name] && goog.isDefAndNotNull(goog.getObjectByName(name));
      };

      /**
       * Namespaces implicitly defined by goog.provide. For example,
       * goog.provide('goog.events.Event') implicitly declares that 'goog' and
       * 'goog.events' must be namespaces.
       *
       * @type {!Object<string, (boolean|undefined)>}
       * @private
       */
      goog.implicitNamespaces_ = { 'goog.module': true };

      // NOTE: We add goog.module as an implicit namespace as goog.module is defined
      // here and because the existing module package has not been moved yet out of
      // the goog.module namespace. This satisifies both the debug loader and
      // ahead-of-time dependency management.
    }

    /**
     * Returns an object based on its fully qualified external name.  The object
     * is not found if null or undefined.  If you are using a compilation pass that
     * renames property names beware that using this function will not find renamed
     * properties.
     *
     * @param {string} name The fully qualified name.
     * @param {Object=} opt_obj The object within which to look; default is
     *     |goog.global|.
     * @return {?} The value (object or primitive) or, if not found, null.
     */
    goog.getObjectByName = function (name, opt_obj) {
      var parts = name.split('.');
      var cur = opt_obj || goog.global;
      for (var part; part = parts.shift();) {
        if (goog.isDefAndNotNull(cur[part])) {
          cur = cur[part];
        } else {
          return null;
        }
      }
      return cur;
    };

    /**
     * Globalizes a whole namespace, such as goog or goog.lang.
     *
     * @param {!Object} obj The namespace to globalize.
     * @param {Object=} opt_global The object to add the properties to.
     * @deprecated Properties may be explicitly exported to the global scope, but
     *     this should no longer be done in bulk.
     */
    goog.globalize = function (obj, opt_global) {
      var global = opt_global || goog.global;
      for (var x in obj) {
        global[x] = obj[x];
      }
    };

    /**
     * Adds a dependency from a file to the files it requires.
     * @param {string} relPath The path to the js file.
     * @param {!Array<string>} provides An array of strings with
     *     the names of the objects this file provides.
     * @param {!Array<string>} requires An array of strings with
     *     the names of the objects this file requires.
     * @param {boolean|!Object<string>=} opt_loadFlags Parameters indicating
     *     how the file must be loaded.  The boolean 'true' is equivalent
     *     to {'module': 'goog'} for backwards-compatibility.  Valid properties
     *     and values include {'module': 'goog'} and {'lang': 'es6'}.
     */
    goog.addDependency = function (relPath, provides, requires, opt_loadFlags) {
      if (goog.DEPENDENCIES_ENABLED) {
        var provide, require;
        var path = relPath.replace(/\\/g, '/');
        var deps = goog.dependencies_;
        if (!opt_loadFlags || typeof opt_loadFlags === 'boolean') {
          opt_loadFlags = opt_loadFlags ? { 'module': 'goog' } : {};
        }
        for (var i = 0; provide = provides[i]; i++) {
          deps.nameToPath[provide] = path;
          deps.pathIsModule[path] = opt_loadFlags['module'] == 'goog';
        }
        for (var j = 0; require = requires[j]; j++) {
          if (!(path in deps.requires)) {
            deps.requires[path] = {};
          }
          deps.requires[path][require] = true;
        }
      }
    };

    // NOTE(nnaze): The debug DOM loader was included in base.js as an original way
    // to do "debug-mode" development.  The dependency system can sometimes be
    // confusing, as can the debug DOM loader's asynchronous nature.
    //
    // With the DOM loader, a call to goog.require() is not blocking -- the script
    // will not load until some point after the current script.  If a namespace is
    // needed at runtime, it needs to be defined in a previous script, or loaded via
    // require() with its registered dependencies.
    //
    // User-defined namespaces may need their own deps file. For a reference on
    // creating a deps file, see:
    // Externally: https://developers.google.com/closure/library/docs/depswriter
    //
    // Because of legacy clients, the DOM loader can't be easily removed from
    // base.js.  Work is being done to make it disableable or replaceable for
    // different environments (DOM-less JavaScript interpreters like Rhino or V8,
    // for example). See bootstrap/ for more information.


    /**
     * @define {boolean} Whether to enable the debug loader.
     *
     * If enabled, a call to goog.require() will attempt to load the namespace by
     * appending a script tag to the DOM (if the namespace has been registered).
     *
     * If disabled, goog.require() will simply assert that the namespace has been
     * provided (and depend on the fact that some outside tool correctly ordered
     * the script).
     */
    goog.define('goog.ENABLE_DEBUG_LOADER', true);

    /**
     * @param {string} msg
     * @private
     */
    goog.logToConsole_ = function (msg) {
      if (goog.global.console) {
        goog.global.console['error'](msg);
      }
    };

    /**
     * Implements a system for the dynamic resolution of dependencies that works in
     * parallel with the BUILD system. Note that all calls to goog.require will be
     * stripped by the JSCompiler when the --process_closure_primitives option is
     * used.
     * @see goog.provide
     * @param {string} name Namespace to include (as was given in goog.provide()) in
     *     the form "goog.package.part".
     * @return {?} If called within a goog.module file, the associated namespace or
     *     module otherwise null.
     */
    goog.require = function (name) {
      // If the object already exists we do not need do do anything.
      if (!COMPILED) {
        if (goog.ENABLE_DEBUG_LOADER && goog.IS_OLD_IE_) {
          goog.maybeProcessDeferredDep_(name);
        }

        if (goog.isProvided_(name)) {
          if (goog.isInModuleLoader_()) {
            return goog.module.getInternal_(name);
          } else {
            return null;
          }
        }

        if (goog.ENABLE_DEBUG_LOADER) {
          var path = goog.getPathFromDeps_(name);
          if (path) {
            goog.writeScripts_(path);
            return null;
          }
        }

        var errorMessage = 'goog.require could not find: ' + name;
        goog.logToConsole_(errorMessage);

        throw Error(errorMessage);
      }
    };

    /**
     * Path for included scripts.
     * @type {string}
     */
    goog.basePath = '';

    /**
     * A hook for overriding the base path.
     * @type {string|undefined}
     */
    goog.global.CLOSURE_BASE_PATH;

    /**
     * Whether to write out Closure's deps file. By default, the deps are written.
     * @type {boolean|undefined}
     */
    goog.global.CLOSURE_NO_DEPS;

    /**
     * A function to import a single script. This is meant to be overridden when
     * Closure is being run in non-HTML contexts, such as web workers. It's defined
     * in the global scope so that it can be set before base.js is loaded, which
     * allows deps.js to be imported properly.
     *
     * The function is passed the script source, which is a relative URI. It should
     * return true if the script was imported, false otherwise.
     * @type {(function(string): boolean)|undefined}
     */
    goog.global.CLOSURE_IMPORT_SCRIPT;

    /**
     * Null function used for default values of callbacks, etc.
     * @return {void} Nothing.
     */
    goog.nullFunction = function () {};

    /**
     * When defining a class Foo with an abstract method bar(), you can do:
     * Foo.prototype.bar = goog.abstractMethod
     *
     * Now if a subclass of Foo fails to override bar(), an error will be thrown
     * when bar() is invoked.
     *
     * Note: This does not take the name of the function to override as an argument
     * because that would make it more difficult to obfuscate our JavaScript code.
     *
     * @type {!Function}
     * @throws {Error} when invoked to indicate the method should be overridden.
     */
    goog.abstractMethod = function () {
      throw Error('unimplemented abstract method');
    };

    /**
     * Adds a {@code getInstance} static method that always returns the same
     * instance object.
     * @param {!Function} ctor The constructor for the class to add the static
     *     method to.
     */
    goog.addSingletonGetter = function (ctor) {
      ctor.getInstance = function () {
        if (ctor.instance_) {
          return ctor.instance_;
        }
        if (goog.DEBUG) {
          // NOTE: JSCompiler can't optimize away Array#push.
          goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = ctor;
        }
        return ctor.instance_ = new ctor();
      };
    };

    /**
     * All singleton classes that have been instantiated, for testing. Don't read
     * it directly, use the {@code goog.testing.singleton} module. The compiler
     * removes this variable if unused.
     * @type {!Array<!Function>}
     * @private
     */
    goog.instantiatedSingletons_ = [];

    /**
     * @define {boolean} Whether to load goog.modules using {@code eval} when using
     * the debug loader.  This provides a better debugging experience as the
     * source is unmodified and can be edited using Chrome Workspaces or similar.
     * However in some environments the use of {@code eval} is banned
     * so we provide an alternative.
     */
    goog.define('goog.LOAD_MODULE_USING_EVAL', true);

    /**
     * @define {boolean} Whether the exports of goog.modules should be sealed when
     * possible.
     */
    goog.define('goog.SEAL_MODULE_EXPORTS', goog.DEBUG);

    /**
     * The registry of initialized modules:
     * the module identifier to module exports map.
     * @private @const {!Object<string, ?>}
     */
    goog.loadedModules_ = {};

    /**
     * True if goog.dependencies_ is available.
     * @const {boolean}
     */
    goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;

    if (goog.DEPENDENCIES_ENABLED) {
      /**
       * This object is used to keep track of dependencies and other data that is
       * used for loading scripts.
       * @private
       * @type {{
       *   pathIsModule: !Object<string, boolean>,
       *   nameToPath: !Object<string, string>,
       *   requires: !Object<string, !Object<string, boolean>>,
       *   visited: !Object<string, boolean>,
       *   written: !Object<string, boolean>,
       *   deferred: !Object<string, string>
       * }}
       */
      goog.dependencies_ = {
        pathIsModule: {}, // 1 to 1

        nameToPath: {}, // 1 to 1

        requires: {}, // 1 to many

        // Used when resolving dependencies to prevent us from visiting file twice.
        visited: {},

        written: {}, // Used to keep track of script files we have written.

        deferred: {} // Used to track deferred module evaluations in old IEs
      };

      /**
       * Tries to detect whether is in the context of an HTML document.
       * @return {boolean} True if it looks like HTML document.
       * @private
       */
      goog.inHtmlDocument_ = function () {
        /** @type {Document} */
        var doc = goog.global.document;
        return doc != null && 'write' in doc; // XULDocument misses write.
      };

      /**
       * Tries to detect the base path of base.js script that bootstraps Closure.
       * @private
       */
      goog.findBasePath_ = function () {
        if (goog.isDef(goog.global.CLOSURE_BASE_PATH)) {
          goog.basePath = goog.global.CLOSURE_BASE_PATH;
          return;
        } else if (!goog.inHtmlDocument_()) {
          return;
        }
        /** @type {Document} */
        var doc = goog.global.document;
        var scripts = doc.getElementsByTagName('SCRIPT');
        // Search backwards since the current script is in almost all cases the one
        // that has base.js.
        for (var i = scripts.length - 1; i >= 0; --i) {
          var script = /** @type {!HTMLScriptElement} */scripts[i];
          var src = script.src;
          var qmark = src.lastIndexOf('?');
          var l = qmark == -1 ? src.length : qmark;
          if (src.substr(l - 7, 7) == 'base.js') {
            goog.basePath = src.substr(0, l - 7);
            return;
          }
        }
      };

      /**
       * Imports a script if, and only if, that script hasn't already been imported.
       * (Must be called at execution time)
       * @param {string} src Script source.
       * @param {string=} opt_sourceText The optionally source text to evaluate
       * @private
       */
      goog.importScript_ = function (src, opt_sourceText) {
        var importScript = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
        if (importScript(src, opt_sourceText)) {
          goog.dependencies_.written[src] = true;
        }
      };

      /** @const @private {boolean} */
      goog.IS_OLD_IE_ = !!(!goog.global.atob && goog.global.document && goog.global.document.all);

      /**
       * Given a URL initiate retrieval and execution of the module.
       * @param {string} src Script source URL.
       * @private
       */
      goog.importModule_ = function (src) {
        // In an attempt to keep browsers from timing out loading scripts using
        // synchronous XHRs, put each load in its own script block.
        var bootstrap = 'goog.retrieveAndExecModule_("' + src + '");';

        if (goog.importScript_('', bootstrap)) {
          goog.dependencies_.written[src] = true;
        }
      };

      /** @private {!Array<string>} */
      goog.queuedModules_ = [];

      /**
       * Return an appropriate module text. Suitable to insert into
       * a script tag (that is unescaped).
       * @param {string} srcUrl
       * @param {string} scriptText
       * @return {string}
       * @private
       */
      goog.wrapModule_ = function (srcUrl, scriptText) {
        if (!goog.LOAD_MODULE_USING_EVAL || !goog.isDef(goog.global.JSON)) {
          return '' + 'goog.loadModule(function(exports) {' + '"use strict";' + scriptText + '\n' + // terminate any trailing single line comment.
          ';return exports' + '});' + '\n//# sourceURL=' + srcUrl + '\n';
        } else {
          return '' + 'goog.loadModule(' + goog.global.JSON.stringify(scriptText + '\n//# sourceURL=' + srcUrl + '\n') + ');';
        }
      };

      // On IE9 and earlier, it is necessary to handle
      // deferred module loads. In later browsers, the
      // code to be evaluated is simply inserted as a script
      // block in the correct order. To eval deferred
      // code at the right time, we piggy back on goog.require to call
      // goog.maybeProcessDeferredDep_.
      //
      // The goog.requires are used both to bootstrap
      // the loading process (when no deps are available) and
      // declare that they should be available.
      //
      // Here we eval the sources, if all the deps are available
      // either already eval'd or goog.require'd.  This will
      // be the case when all the dependencies have already
      // been loaded, and the dependent module is loaded.
      //
      // But this alone isn't sufficient because it is also
      // necessary to handle the case where there is no root
      // that is not deferred.  For that there we register for an event
      // and trigger goog.loadQueuedModules_ handle any remaining deferred
      // evaluations.

      /**
       * Handle any remaining deferred goog.module evals.
       * @private
       */
      goog.loadQueuedModules_ = function () {
        var count = goog.queuedModules_.length;
        if (count > 0) {
          var queue = goog.queuedModules_;
          goog.queuedModules_ = [];
          for (var i = 0; i < count; i++) {
            var path = queue[i];
            goog.maybeProcessDeferredPath_(path);
          }
        }
      };

      /**
       * Eval the named module if its dependencies are
       * available.
       * @param {string} name The module to load.
       * @private
       */
      goog.maybeProcessDeferredDep_ = function (name) {
        if (goog.isDeferredModule_(name) && goog.allDepsAreAvailable_(name)) {
          var path = goog.getPathFromDeps_(name);
          goog.maybeProcessDeferredPath_(goog.basePath + path);
        }
      };

      /**
       * @param {string} name The module to check.
       * @return {boolean} Whether the name represents a
       *     module whose evaluation has been deferred.
       * @private
       */
      goog.isDeferredModule_ = function (name) {
        var path = goog.getPathFromDeps_(name);
        if (path && goog.dependencies_.pathIsModule[path]) {
          var abspath = goog.basePath + path;
          return abspath in goog.dependencies_.deferred;
        }
        return false;
      };

      /**
       * @param {string} name The module to check.
       * @return {boolean} Whether the name represents a
       *     module whose declared dependencies have all been loaded
       *     (eval'd or a deferred module load)
       * @private
       */
      goog.allDepsAreAvailable_ = function (name) {
        var path = goog.getPathFromDeps_(name);
        if (path && path in goog.dependencies_.requires) {
          for (var requireName in goog.dependencies_.requires[path]) {
            if (!goog.isProvided_(requireName) && !goog.isDeferredModule_(requireName)) {
              return false;
            }
          }
        }
        return true;
      };

      /**
       * @param {string} abspath
       * @private
       */
      goog.maybeProcessDeferredPath_ = function (abspath) {
        if (abspath in goog.dependencies_.deferred) {
          var src = goog.dependencies_.deferred[abspath];
          delete goog.dependencies_.deferred[abspath];
          goog.globalEval(src);
        }
      };

      /**
       * Load a goog.module from the provided URL.  This is not a general purpose
       * code loader and does not support late loading code, that is it should only
       * be used during page load. This method exists to support unit tests and
       * "debug" loaders that would otherwise have inserted script tags. Under the
       * hood this needs to use a synchronous XHR and is not recommeneded for
       * production code.
       *
       * The module's goog.requires must have already been satisified; an exception
       * will be thrown if this is not the case. This assumption is that no
       * "deps.js" file exists, so there is no way to discover and locate the
       * module-to-be-loaded's dependencies and no attempt is made to do so.
       *
       * There should only be one attempt to load a module.  If
       * "goog.loadModuleFromUrl" is called for an already loaded module, an
       * exception will be throw.
       *
       * @param {string} url The URL from which to attempt to load the goog.module.
       */
      goog.loadModuleFromUrl = function (url) {
        // Because this executes synchronously, we don't need to do any additional
        // bookkeeping. When "goog.loadModule" the namespace will be marked as
        // having been provided which is sufficient.
        goog.retrieveAndExecModule_(url);
      };

      /**
       * @param {function(?):?|string} moduleDef The module definition.
       */
      goog.loadModule = function (moduleDef) {
        // NOTE: we allow function definitions to be either in the from
        // of a string to eval (which keeps the original source intact) or
        // in a eval forbidden environment (CSP) we allow a function definition
        // which in its body must call {@code goog.module}, and return the exports
        // of the module.
        var previousState = goog.moduleLoaderState_;
        try {
          goog.moduleLoaderState_ = {
            moduleName: undefined,
            declareLegacyNamespace: false
          };
          var exports;
          if (goog.isFunction(moduleDef)) {
            exports = moduleDef.call(goog.global, {});
          } else if (goog.isString(moduleDef)) {
            exports = goog.loadModuleFromSource_.call(goog.global, moduleDef);
          } else {
            throw Error('Invalid module definition');
          }

          var moduleName = goog.moduleLoaderState_.moduleName;
          if (!goog.isString(moduleName) || !moduleName) {
            throw Error('Invalid module name \"' + moduleName + '\"');
          }

          // Don't seal legacy namespaces as they may be uses as a parent of
          // another namespace
          if (goog.moduleLoaderState_.declareLegacyNamespace) {
            goog.constructNamespace_(moduleName, exports);
          } else if (goog.SEAL_MODULE_EXPORTS && Object.seal) {
            Object.seal(exports);
          }

          goog.loadedModules_[moduleName] = exports;
        } finally {
          goog.moduleLoaderState_ = previousState;
        }
      };

      /**
       * @private @const {function(string):?}
       *
       * The new type inference warns because this function has no formal
       * parameters, but its jsdoc says that it takes one argument.
       * (The argument is used via arguments[0], but NTI does not detect this.)
       * @suppress {newCheckTypes}
       */
      goog.loadModuleFromSource_ = function () {
        // NOTE: we avoid declaring parameters or local variables here to avoid
        // masking globals or leaking values into the module definition.
        'use strict';

        var exports = {};
        eval(arguments[0]);
        return exports;
      };

      /**
       * Writes a new script pointing to {@code src} directly into the DOM.
       *
       * NOTE: This method is not CSP-compliant. @see goog.appendScriptSrcNode_ for
       * the fallback mechanism.
       *
       * @param {string} src The script URL.
       * @private
       */
      goog.writeScriptSrcNode_ = function (src) {
        goog.global.document.write('<script type="text/javascript" src="' + src + '"></' + 'script>');
      };

      /**
       * Appends a new script node to the DOM using a CSP-compliant mechanism. This
       * method exists as a fallback for document.write (which is not allowed in a
       * strict CSP context, e.g., Chrome apps).
       *
       * NOTE: This method is not analogous to using document.write to insert a
       * <script> tag; specifically, the user agent will execute a script added by
       * document.write immediately after the current script block finishes
       * executing, whereas the DOM-appended script node will not be executed until
       * the entire document is parsed and executed. That is to say, this script is
       * added to the end of the script execution queue.
       *
       * The page must not attempt to call goog.required entities until after the
       * document has loaded, e.g., in or after the window.onload callback.
       *
       * @param {string} src The script URL.
       * @private
       */
      goog.appendScriptSrcNode_ = function (src) {
        /** @type {Document} */
        var doc = goog.global.document;
        var scriptEl =
        /** @type {HTMLScriptElement} */doc.createElement('script');
        scriptEl.type = 'text/javascript';
        scriptEl.src = src;
        scriptEl.defer = false;
        scriptEl.async = false;
        doc.head.appendChild(scriptEl);
      };

      /**
       * The default implementation of the import function. Writes a script tag to
       * import the script.
       *
       * @param {string} src The script url.
       * @param {string=} opt_sourceText The optionally source text to evaluate
       * @return {boolean} True if the script was imported, false otherwise.
       * @private
       */
      goog.writeScriptTag_ = function (src, opt_sourceText) {
        if (goog.inHtmlDocument_()) {
          /** @type {!HTMLDocument} */
          var doc = goog.global.document;

          // If the user tries to require a new symbol after document load,
          // something has gone terribly wrong. Doing a document.write would
          // wipe out the page. This does not apply to the CSP-compliant method
          // of writing script tags.
          if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && doc.readyState == 'complete') {
            // Certain test frameworks load base.js multiple times, which tries
            // to write deps.js each time. If that happens, just fail silently.
            // These frameworks wipe the page between each load of base.js, so this
            // is OK.
            var isDeps = /\bdeps.js$/.test(src);
            if (isDeps) {
              return false;
            } else {
              throw Error('Cannot write "' + src + '" after document load');
            }
          }

          var isOldIE = goog.IS_OLD_IE_;

          if (opt_sourceText === undefined) {
            if (!isOldIE) {
              if (goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
                goog.appendScriptSrcNode_(src);
              } else {
                goog.writeScriptSrcNode_(src);
              }
            } else {
              var state = " onreadystatechange='goog.onScriptLoad_(this, " + ++goog.lastNonModuleScriptIndex_ + ")' ";
              doc.write('<script type="text/javascript" src="' + src + '"' + state + '></' + 'script>');
            }
          } else {
            doc.write('<script type="text/javascript">' + opt_sourceText + '</' + 'script>');
          }
          return true;
        } else {
          return false;
        }
      };

      /** @private {number} */
      goog.lastNonModuleScriptIndex_ = 0;

      /**
       * A readystatechange handler for legacy IE
       * @param {!HTMLScriptElement} script
       * @param {number} scriptIndex
       * @return {boolean}
       * @private
       */
      goog.onScriptLoad_ = function (script, scriptIndex) {
        // for now load the modules when we reach the last script,
        // later allow more inter-mingling.
        if (script.readyState == 'complete' && goog.lastNonModuleScriptIndex_ == scriptIndex) {
          goog.loadQueuedModules_();
        }
        return true;
      };

      /**
       * Resolves dependencies based on the dependencies added using addDependency
       * and calls importScript_ in the correct order.
       * @param {string} pathToLoad The path from which to start discovering
       *     dependencies.
       * @private
       */
      goog.writeScripts_ = function (pathToLoad) {
        /** @type {!Array<string>} The scripts we need to write this time. */
        var scripts = [];
        var seenScript = {};
        var deps = goog.dependencies_;

        /** @param {string} path */
        function visitNode(path) {
          if (path in deps.written) {
            return;
          }

          // We have already visited this one. We can get here if we have cyclic
          // dependencies.
          if (path in deps.visited) {
            return;
          }

          deps.visited[path] = true;

          if (path in deps.requires) {
            for (var requireName in deps.requires[path]) {
              // If the required name is defined, we assume that it was already
              // bootstrapped by other means.
              if (!goog.isProvided_(requireName)) {
                if (requireName in deps.nameToPath) {
                  visitNode(deps.nameToPath[requireName]);
                } else {
                  throw Error('Undefined nameToPath for ' + requireName);
                }
              }
            }
          }

          if (!(path in seenScript)) {
            seenScript[path] = true;
            scripts.push(path);
          }
        }

        visitNode(pathToLoad);

        // record that we are going to load all these scripts.
        for (var i = 0; i < scripts.length; i++) {
          var path = scripts[i];
          goog.dependencies_.written[path] = true;
        }

        // If a module is loaded synchronously then we need to
        // clear the current inModuleLoader value, and restore it when we are
        // done loading the current "requires".
        var moduleState = goog.moduleLoaderState_;
        goog.moduleLoaderState_ = null;

        for (var i = 0; i < scripts.length; i++) {
          var path = scripts[i];
          if (path) {
            if (!deps.pathIsModule[path]) {
              goog.importScript_(goog.basePath + path);
            } else {
              goog.importModule_(goog.basePath + path);
            }
          } else {
            goog.moduleLoaderState_ = moduleState;
            throw Error('Undefined script input');
          }
        }

        // restore the current "module loading state"
        goog.moduleLoaderState_ = moduleState;
      };

      /**
       * Looks at the dependency rules and tries to determine the script file that
       * fulfills a particular rule.
       * @param {string} rule In the form goog.namespace.Class or project.script.
       * @return {?string} Url corresponding to the rule, or null.
       * @private
       */
      goog.getPathFromDeps_ = function (rule) {
        if (rule in goog.dependencies_.nameToPath) {
          return goog.dependencies_.nameToPath[rule];
        } else {
          return null;
        }
      };

      goog.findBasePath_();

      // Allow projects to manage the deps files themselves.
      if (!goog.global.CLOSURE_NO_DEPS) {
        goog.importScript_(goog.basePath + 'deps.js');
      }
    }

    /**
     * Normalize a file path by removing redundant ".." and extraneous "." file
     * path components.
     * @param {string} path
     * @return {string}
     * @private
     */
    goog.normalizePath_ = function (path) {
      var components = path.split('/');
      var i = 0;
      while (i < components.length) {
        if (components[i] == '.') {
          components.splice(i, 1);
        } else if (i && components[i] == '..' && components[i - 1] && components[i - 1] != '..') {
          components.splice(--i, 2);
        } else {
          i++;
        }
      }
      return components.join('/');
    };

    /**
     * Loads file by synchronous XHR. Should not be used in production environments.
     * @param {string} src Source URL.
     * @return {string} File contents.
     * @private
     */
    goog.loadFileSync_ = function (src) {
      if (goog.global.CLOSURE_LOAD_FILE_SYNC) {
        return goog.global.CLOSURE_LOAD_FILE_SYNC(src);
      } else {
        /** @type {XMLHttpRequest} */
        var xhr = new goog.global['XMLHttpRequest']();
        xhr.open('get', src, false);
        xhr.send();
        return xhr.responseText;
      }
    };

    /**
     * Retrieve and execute a module.
     * @param {string} src Script source URL.
     * @private
     */
    goog.retrieveAndExecModule_ = function (src) {
      if (!COMPILED) {
        // The full but non-canonicalized URL for later use.
        var originalPath = src;
        // Canonicalize the path, removing any /./ or /../ since Chrome's debugging
        // console doesn't auto-canonicalize XHR loads as it does <script> srcs.
        src = goog.normalizePath_(src);

        var importScript = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;

        var scriptText = goog.loadFileSync_(src);

        if (scriptText != null) {
          var execModuleScript = goog.wrapModule_(src, scriptText);
          var isOldIE = goog.IS_OLD_IE_;
          if (isOldIE) {
            goog.dependencies_.deferred[originalPath] = execModuleScript;
            goog.queuedModules_.push(originalPath);
          } else {
            importScript(src, execModuleScript);
          }
        } else {
          throw new Error('load of ' + src + 'failed');
        }
      }
    };

    //==============================================================================
    // Language Enhancements
    //==============================================================================


    /**
     * This is a "fixed" version of the typeof operator.  It differs from the typeof
     * operator in such a way that null returns 'null' and arrays return 'array'.
     * @param {?} value The value to get the type of.
     * @return {string} The name of the type.
     */
    goog.typeOf = function (value) {
      var s = typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value);
      if (s == 'object') {
        if (value) {
          // Check these first, so we can avoid calling Object.prototype.toString if
          // possible.
          //
          // IE improperly marshals typeof across execution contexts, but a
          // cross-context object will still return false for "instanceof Object".
          if (value instanceof Array) {
            return 'array';
          } else if (value instanceof Object) {
            return s;
          }

          // HACK: In order to use an Object prototype method on the arbitrary
          //   value, the compiler requires the value be cast to type Object,
          //   even though the ECMA spec explicitly allows it.
          var className = Object.prototype.toString.call(
          /** @type {!Object} */value);
          // In Firefox 3.6, attempting to access iframe window objects' length
          // property throws an NS_ERROR_FAILURE, so we need to special-case it
          // here.
          if (className == '[object Window]') {
            return 'object';
          }

          // We cannot always use constructor == Array or instanceof Array because
          // different frames have different Array objects. In IE6, if the iframe
          // where the array was created is destroyed, the array loses its
          // prototype. Then dereferencing val.splice here throws an exception, so
          // we can't use goog.isFunction. Calling typeof directly returns 'unknown'
          // so that will work. In this case, this function will return false and
          // most array functions will still work because the array is still
          // array-like (supports length and []) even though it has lost its
          // prototype.
          // Mark Miller noticed that Object.prototype.toString
          // allows access to the unforgeable [[Class]] property.
          //  15.2.4.2 Object.prototype.toString ( )
          //  When the toString method is called, the following steps are taken:
          //      1. Get the [[Class]] property of this object.
          //      2. Compute a string value by concatenating the three strings
          //         "[object ", Result(1), and "]".
          //      3. Return Result(2).
          // and this behavior survives the destruction of the execution context.
          if (className == '[object Array]' ||
          // In IE all non value types are wrapped as objects across window
          // boundaries (not iframe though) so we have to do object detection
          // for this edge case.
          typeof value.length == 'number' && typeof value.splice != 'undefined' && typeof value.propertyIsEnumerable != 'undefined' && !value.propertyIsEnumerable('splice')) {
            return 'array';
          }
          // HACK: There is still an array case that fails.
          //     function ArrayImpostor() {}
          //     ArrayImpostor.prototype = [];
          //     var impostor = new ArrayImpostor;
          // this can be fixed by getting rid of the fast path
          // (value instanceof Array) and solely relying on
          // (value && Object.prototype.toString.vall(value) === '[object Array]')
          // but that would require many more function calls and is not warranted
          // unless closure code is receiving objects from untrusted sources.

          // IE in cross-window calls does not correctly marshal the function type
          // (it appears just as an object) so we cannot use just typeof val ==
          // 'function'. However, if the object has a call property, it is a
          // function.
          if (className == '[object Function]' || typeof value.call != 'undefined' && typeof value.propertyIsEnumerable != 'undefined' && !value.propertyIsEnumerable('call')) {
            return 'function';
          }
        } else {
          return 'null';
        }
      } else if (s == 'function' && typeof value.call == 'undefined') {
        // In Safari typeof nodeList returns 'function', and on Firefox typeof
        // behaves similarly for HTML{Applet,Embed,Object}, Elements and RegExps. We
        // would like to return object for those and we can detect an invalid
        // function by making sure that the function object has a call method.
        return 'object';
      }
      return s;
    };

    /**
     * Returns true if the specified value is null.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is null.
     */
    goog.isNull = function (val) {
      return val === null;
    };

    /**
     * Returns true if the specified value is defined and not null.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is defined and not null.
     */
    goog.isDefAndNotNull = function (val) {
      // Note that undefined == null.
      return val != null;
    };

    /**
     * Returns true if the specified value is an array.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is an array.
     */
    goog.isArray = function (val) {
      return goog.typeOf(val) == 'array';
    };

    /**
     * Returns true if the object looks like an array. To qualify as array like
     * the value needs to be either a NodeList or an object with a Number length
     * property. As a special case, a function value is not array like, because its
     * length property is fixed to correspond to the number of expected arguments.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is an array.
     */
    goog.isArrayLike = function (val) {
      var type = goog.typeOf(val);
      // We do not use goog.isObject here in order to exclude function values.
      return type == 'array' || type == 'object' && typeof val.length == 'number';
    };

    /**
     * Returns true if the object looks like a Date. To qualify as Date-like the
     * value needs to be an object and have a getFullYear() function.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is a like a Date.
     */
    goog.isDateLike = function (val) {
      return goog.isObject(val) && typeof val.getFullYear == 'function';
    };

    /**
     * Returns true if the specified value is a string.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is a string.
     */
    goog.isString = function (val) {
      return typeof val == 'string';
    };

    /**
     * Returns true if the specified value is a boolean.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is boolean.
     */
    goog.isBoolean = function (val) {
      return typeof val == 'boolean';
    };

    /**
     * Returns true if the specified value is a number.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is a number.
     */
    goog.isNumber = function (val) {
      return typeof val == 'number';
    };

    /**
     * Returns true if the specified value is a function.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is a function.
     */
    goog.isFunction = function (val) {
      return goog.typeOf(val) == 'function';
    };

    /**
     * Returns true if the specified value is an object.  This includes arrays and
     * functions.
     * @param {?} val Variable to test.
     * @return {boolean} Whether variable is an object.
     */
    goog.isObject = function (val) {
      var type = typeof val === 'undefined' ? 'undefined' : babelHelpers.typeof(val);
      return type == 'object' && val != null || type == 'function';
      // return Object(val) === val also works, but is slower, especially if val is
      // not an object.
    };

    /**
     * Gets a unique ID for an object. This mutates the object so that further calls
     * with the same object as a parameter returns the same value. The unique ID is
     * guaranteed to be unique across the current session amongst objects that are
     * passed into {@code getUid}. There is no guarantee that the ID is unique or
     * consistent across sessions. It is unsafe to generate unique ID for function
     * prototypes.
     *
     * @param {Object} obj The object to get the unique ID for.
     * @return {number} The unique ID for the object.
     */
    goog.getUid = function (obj) {
      // TODO(arv): Make the type stricter, do not accept null.

      // In Opera window.hasOwnProperty exists but always returns false so we avoid
      // using it. As a consequence the unique ID generated for BaseClass.prototype
      // and SubClass.prototype will be the same.
      return obj[goog.UID_PROPERTY_] || (obj[goog.UID_PROPERTY_] = ++goog.uidCounter_);
    };

    /**
     * Whether the given object is already assigned a unique ID.
     *
     * This does not modify the object.
     *
     * @param {!Object} obj The object to check.
     * @return {boolean} Whether there is an assigned unique id for the object.
     */
    goog.hasUid = function (obj) {
      return !!obj[goog.UID_PROPERTY_];
    };

    /**
     * Removes the unique ID from an object. This is useful if the object was
     * previously mutated using {@code goog.getUid} in which case the mutation is
     * undone.
     * @param {Object} obj The object to remove the unique ID field from.
     */
    goog.removeUid = function (obj) {
      // TODO(arv): Make the type stricter, do not accept null.

      // In IE, DOM nodes are not instances of Object and throw an exception if we
      // try to delete.  Instead we try to use removeAttribute.
      if (obj !== null && 'removeAttribute' in obj) {
        obj.removeAttribute(goog.UID_PROPERTY_);
      }
      /** @preserveTry */
      try {
        delete obj[goog.UID_PROPERTY_];
      } catch (ex) {}
    };

    /**
     * Name for unique ID property. Initialized in a way to help avoid collisions
     * with other closure JavaScript on the same page.
     * @type {string}
     * @private
     */
    goog.UID_PROPERTY_ = 'closure_uid_' + (Math.random() * 1e9 >>> 0);

    /**
     * Counter for UID.
     * @type {number}
     * @private
     */
    goog.uidCounter_ = 0;

    /**
     * Adds a hash code field to an object. The hash code is unique for the
     * given object.
     * @param {Object} obj The object to get the hash code for.
     * @return {number} The hash code for the object.
     * @deprecated Use goog.getUid instead.
     */
    goog.getHashCode = goog.getUid;

    /**
     * Removes the hash code field from an object.
     * @param {Object} obj The object to remove the field from.
     * @deprecated Use goog.removeUid instead.
     */
    goog.removeHashCode = goog.removeUid;

    /**
     * Clones a value. The input may be an Object, Array, or basic type. Objects and
     * arrays will be cloned recursively.
     *
     * WARNINGS:
     * <code>goog.cloneObject</code> does not detect reference loops. Objects that
     * refer to themselves will cause infinite recursion.
     *
     * <code>goog.cloneObject</code> is unaware of unique identifiers, and copies
     * UIDs created by <code>getUid</code> into cloned results.
     *
     * @param {*} obj The value to clone.
     * @return {*} A clone of the input value.
     * @deprecated goog.cloneObject is unsafe. Prefer the goog.object methods.
     */
    goog.cloneObject = function (obj) {
      var type = goog.typeOf(obj);
      if (type == 'object' || type == 'array') {
        if (obj.clone) {
          return obj.clone();
        }
        var clone = type == 'array' ? [] : {};
        for (var key in obj) {
          clone[key] = goog.cloneObject(obj[key]);
        }
        return clone;
      }

      return obj;
    };

    /**
     * A native implementation of goog.bind.
     * @param {Function} fn A function to partially apply.
     * @param {Object|undefined} selfObj Specifies the object which this should
     *     point to when the function is run.
     * @param {...*} var_args Additional arguments that are partially applied to the
     *     function.
     * @return {!Function} A partially-applied form of the function bind() was
     *     invoked as a method of.
     * @private
     * @suppress {deprecated} The compiler thinks that Function.prototype.bind is
     *     deprecated because some people have declared a pure-JS version.
     *     Only the pure-JS version is truly deprecated.
     */
    goog.bindNative_ = function (fn, selfObj, var_args) {
      return (/** @type {!Function} */fn.call.apply(fn.bind, arguments)
      );
    };

    /**
     * A pure-JS implementation of goog.bind.
     * @param {Function} fn A function to partially apply.
     * @param {Object|undefined} selfObj Specifies the object which this should
     *     point to when the function is run.
     * @param {...*} var_args Additional arguments that are partially applied to the
     *     function.
     * @return {!Function} A partially-applied form of the function bind() was
     *     invoked as a method of.
     * @private
     */
    goog.bindJs_ = function (fn, selfObj, var_args) {
      if (!fn) {
        throw new Error();
      }

      if (arguments.length > 2) {
        var boundArgs = Array.prototype.slice.call(arguments, 2);
        return function () {
          // Prepend the bound arguments to the current arguments.
          var newArgs = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(newArgs, boundArgs);
          return fn.apply(selfObj, newArgs);
        };
      } else {
        return function () {
          return fn.apply(selfObj, arguments);
        };
      }
    };

    /**
     * Partially applies this function to a particular 'this object' and zero or
     * more arguments. The result is a new function with some arguments of the first
     * function pre-filled and the value of this 'pre-specified'.
     *
     * Remaining arguments specified at call-time are appended to the pre-specified
     * ones.
     *
     * Also see: {@link #partial}.
     *
     * Usage:
     * <pre>var barMethBound = goog.bind(myFunction, myObj, 'arg1', 'arg2');
     * barMethBound('arg3', 'arg4');</pre>
     *
     * @param {?function(this:T, ...)} fn A function to partially apply.
     * @param {T} selfObj Specifies the object which this should point to when the
     *     function is run.
     * @param {...*} var_args Additional arguments that are partially applied to the
     *     function.
     * @return {!Function} A partially-applied form of the function goog.bind() was
     *     invoked as a method of.
     * @template T
     * @suppress {deprecated} See above.
     */
    goog.bind = function (fn, selfObj, var_args) {
      // TODO(nicksantos): narrow the type signature.
      if (Function.prototype.bind &&
      // NOTE(nicksantos): Somebody pulled base.js into the default Chrome
      // extension environment. This means that for Chrome extensions, they get
      // the implementation of Function.prototype.bind that calls goog.bind
      // instead of the native one. Even worse, we don't want to introduce a
      // circular dependency between goog.bind and Function.prototype.bind, so
      // we have to hack this to make sure it works correctly.
      Function.prototype.bind.toString().indexOf('native code') != -1) {
        goog.bind = goog.bindNative_;
      } else {
        goog.bind = goog.bindJs_;
      }
      return goog.bind.apply(null, arguments);
    };

    /**
     * Like goog.bind(), except that a 'this object' is not required. Useful when
     * the target function is already bound.
     *
     * Usage:
     * var g = goog.partial(f, arg1, arg2);
     * g(arg3, arg4);
     *
     * @param {Function} fn A function to partially apply.
     * @param {...*} var_args Additional arguments that are partially applied to fn.
     * @return {!Function} A partially-applied form of the function goog.partial()
     *     was invoked as a method of.
     */
    goog.partial = function (fn, var_args) {
      var args = Array.prototype.slice.call(arguments, 1);
      return function () {
        // Clone the array (with slice()) and append additional arguments
        // to the existing arguments.
        var newArgs = args.slice();
        newArgs.push.apply(newArgs, arguments);
        return fn.apply(this, newArgs);
      };
    };

    /**
     * Copies all the members of a source object to a target object. This method
     * does not work on all browsers for all objects that contain keys such as
     * toString or hasOwnProperty. Use goog.object.extend for this purpose.
     * @param {Object} target Target.
     * @param {Object} source Source.
     */
    goog.mixin = function (target, source) {
      for (var x in source) {
        target[x] = source[x];
      }

      // For IE7 or lower, the for-in-loop does not contain any properties that are
      // not enumerable on the prototype object (for example, isPrototypeOf from
      // Object.prototype) but also it will not include 'replace' on objects that
      // extend String and change 'replace' (not that it is common for anyone to
      // extend anything except Object).
    };

    /**
     * @return {number} An integer value representing the number of milliseconds
     *     between midnight, January 1, 1970 and the current time.
     */
    goog.now = goog.TRUSTED_SITE && Date.now || function () {
      // Unary plus operator converts its operand to a number which in
      // the case of
      // a date is done by calling getTime().
      return +new Date();
    };

    /**
     * Evals JavaScript in the global scope.  In IE this uses execScript, other
     * browsers use goog.global.eval. If goog.global.eval does not evaluate in the
     * global scope (for example, in Safari), appends a script tag instead.
     * Throws an exception if neither execScript or eval is defined.
     * @param {string} script JavaScript string.
     */
    goog.globalEval = function (script) {
      if (goog.global.execScript) {
        goog.global.execScript(script, 'JavaScript');
      } else if (goog.global.eval) {
        // Test to see if eval works
        if (goog.evalWorksForGlobals_ == null) {
          goog.global.eval('var _evalTest_ = 1;');
          if (typeof goog.global['_evalTest_'] != 'undefined') {
            try {
              delete goog.global['_evalTest_'];
            } catch (ignore) {
              // Microsoft edge fails the deletion above in strict mode.
            }
            goog.evalWorksForGlobals_ = true;
          } else {
            goog.evalWorksForGlobals_ = false;
          }
        }

        if (goog.evalWorksForGlobals_) {
          goog.global.eval(script);
        } else {
          /** @type {Document} */
          var doc = goog.global.document;
          var scriptElt =
          /** @type {!HTMLScriptElement} */doc.createElement('SCRIPT');
          scriptElt.type = 'text/javascript';
          scriptElt.defer = false;
          // Note(user): can't use .innerHTML since "t('<test>')" will fail and
          // .text doesn't work in Safari 2.  Therefore we append a text node.
          scriptElt.appendChild(doc.createTextNode(script));
          doc.body.appendChild(scriptElt);
          doc.body.removeChild(scriptElt);
        }
      } else {
        throw Error('goog.globalEval not available');
      }
    };

    /**
     * Indicates whether or not we can call 'eval' directly to eval code in the
     * global scope. Set to a Boolean by the first call to goog.globalEval (which
     * empirically tests whether eval works for globals). @see goog.globalEval
     * @type {?boolean}
     * @private
     */
    goog.evalWorksForGlobals_ = null;

    /**
     * Optional map of CSS class names to obfuscated names used with
     * goog.getCssName().
     * @private {!Object<string, string>|undefined}
     * @see goog.setCssNameMapping
     */
    goog.cssNameMapping_;

    /**
     * Optional obfuscation style for CSS class names. Should be set to either
     * 'BY_WHOLE' or 'BY_PART' if defined.
     * @type {string|undefined}
     * @private
     * @see goog.setCssNameMapping
     */
    goog.cssNameMappingStyle_;

    /**
     * Handles strings that are intended to be used as CSS class names.
     *
     * This function works in tandem with @see goog.setCssNameMapping.
     *
     * Without any mapping set, the arguments are simple joined with a hyphen and
     * passed through unaltered.
     *
     * When there is a mapping, there are two possible styles in which these
     * mappings are used. In the BY_PART style, each part (i.e. in between hyphens)
     * of the passed in css name is rewritten according to the map. In the BY_WHOLE
     * style, the full css name is looked up in the map directly. If a rewrite is
     * not specified by the map, the compiler will output a warning.
     *
     * When the mapping is passed to the compiler, it will replace calls to
     * goog.getCssName with the strings from the mapping, e.g.
     *     var x = goog.getCssName('foo');
     *     var y = goog.getCssName(this.baseClass, 'active');
     *  becomes:
     *     var x = 'foo';
     *     var y = this.baseClass + '-active';
     *
     * If one argument is passed it will be processed, if two are passed only the
     * modifier will be processed, as it is assumed the first argument was generated
     * as a result of calling goog.getCssName.
     *
     * @param {string} className The class name.
     * @param {string=} opt_modifier A modifier to be appended to the class name.
     * @return {string} The class name or the concatenation of the class name and
     *     the modifier.
     */
    goog.getCssName = function (className, opt_modifier) {
      var getMapping = function getMapping(cssName) {
        return goog.cssNameMapping_[cssName] || cssName;
      };

      var renameByParts = function renameByParts(cssName) {
        // Remap all the parts individually.
        var parts = cssName.split('-');
        var mapped = [];
        for (var i = 0; i < parts.length; i++) {
          mapped.push(getMapping(parts[i]));
        }
        return mapped.join('-');
      };

      var rename;
      if (goog.cssNameMapping_) {
        rename = goog.cssNameMappingStyle_ == 'BY_WHOLE' ? getMapping : renameByParts;
      } else {
        rename = function rename(a) {
          return a;
        };
      }

      if (opt_modifier) {
        return className + '-' + rename(opt_modifier);
      } else {
        return rename(className);
      }
    };

    /**
     * Sets the map to check when returning a value from goog.getCssName(). Example:
     * <pre>
     * goog.setCssNameMapping({
     *   "goog": "a",
     *   "disabled": "b",
     * });
     *
     * var x = goog.getCssName('goog');
     * // The following evaluates to: "a a-b".
     * goog.getCssName('goog') + ' ' + goog.getCssName(x, 'disabled')
     * </pre>
     * When declared as a map of string literals to string literals, the JSCompiler
     * will replace all calls to goog.getCssName() using the supplied map if the
     * --process_closure_primitives flag is set.
     *
     * @param {!Object} mapping A map of strings to strings where keys are possible
     *     arguments to goog.getCssName() and values are the corresponding values
     *     that should be returned.
     * @param {string=} opt_style The style of css name mapping. There are two valid
     *     options: 'BY_PART', and 'BY_WHOLE'.
     * @see goog.getCssName for a description.
     */
    goog.setCssNameMapping = function (mapping, opt_style) {
      goog.cssNameMapping_ = mapping;
      goog.cssNameMappingStyle_ = opt_style;
    };

    /**
     * To use CSS renaming in compiled mode, one of the input files should have a
     * call to goog.setCssNameMapping() with an object literal that the JSCompiler
     * can extract and use to replace all calls to goog.getCssName(). In uncompiled
     * mode, JavaScript code should be loaded before this base.js file that declares
     * a global variable, CLOSURE_CSS_NAME_MAPPING, which is used below. This is
     * to ensure that the mapping is loaded before any calls to goog.getCssName()
     * are made in uncompiled mode.
     *
     * A hook for overriding the CSS name mapping.
     * @type {!Object<string, string>|undefined}
     */
    goog.global.CLOSURE_CSS_NAME_MAPPING;

    if (!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING) {
      // This does not call goog.setCssNameMapping() because the JSCompiler
      // requires that goog.setCssNameMapping() be called with an object literal.
      goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING;
    }

    /**
     * Gets a localized message.
     *
     * This function is a compiler primitive. If you give the compiler a localized
     * message bundle, it will replace the string at compile-time with a localized
     * version, and expand goog.getMsg call to a concatenated string.
     *
     * Messages must be initialized in the form:
     * <code>
     * var MSG_NAME = goog.getMsg('Hello {$placeholder}', {'placeholder': 'world'});
     * </code>
     *
     * @param {string} str Translatable string, places holders in the form {$foo}.
     * @param {Object<string, string>=} opt_values Maps place holder name to value.
     * @return {string} message with placeholders filled.
     */
    goog.getMsg = function (str, opt_values) {
      if (opt_values) {
        str = str.replace(/\{\$([^}]+)}/g, function (match, key) {
          return opt_values != null && key in opt_values ? opt_values[key] : match;
        });
      }
      return str;
    };

    /**
     * Gets a localized message. If the message does not have a translation, gives a
     * fallback message.
     *
     * This is useful when introducing a new message that has not yet been
     * translated into all languages.
     *
     * This function is a compiler primitive. Must be used in the form:
     * <code>var x = goog.getMsgWithFallback(MSG_A, MSG_B);</code>
     * where MSG_A and MSG_B were initialized with goog.getMsg.
     *
     * @param {string} a The preferred message.
     * @param {string} b The fallback message.
     * @return {string} The best translated message.
     */
    goog.getMsgWithFallback = function (a, b) {
      return a;
    };

    /**
     * Exposes an unobfuscated global namespace path for the given object.
     * Note that fields of the exported object *will* be obfuscated, unless they are
     * exported in turn via this function or goog.exportProperty.
     *
     * Also handy for making public items that are defined in anonymous closures.
     *
     * ex. goog.exportSymbol('public.path.Foo', Foo);
     *
     * ex. goog.exportSymbol('public.path.Foo.staticFunction', Foo.staticFunction);
     *     public.path.Foo.staticFunction();
     *
     * ex. goog.exportSymbol('public.path.Foo.prototype.myMethod',
     *                       Foo.prototype.myMethod);
     *     new public.path.Foo().myMethod();
     *
     * @param {string} publicPath Unobfuscated name to export.
     * @param {*} object Object the name should point to.
     * @param {Object=} opt_objectToExportTo The object to add the path to; default
     *     is goog.global.
     */
    goog.exportSymbol = function (publicPath, object, opt_objectToExportTo) {
      goog.exportPath_(publicPath, object, opt_objectToExportTo);
    };

    /**
     * Exports a property unobfuscated into the object's namespace.
     * ex. goog.exportProperty(Foo, 'staticFunction', Foo.staticFunction);
     * ex. goog.exportProperty(Foo.prototype, 'myMethod', Foo.prototype.myMethod);
     * @param {Object} object Object whose static property is being exported.
     * @param {string} publicName Unobfuscated name to export.
     * @param {*} symbol Object the name should point to.
     */
    goog.exportProperty = function (object, publicName, symbol) {
      object[publicName] = symbol;
    };

    /**
     * Inherit the prototype methods from one constructor into another.
     *
     * Usage:
     * <pre>
     * function ParentClass(a, b) { }
     * ParentClass.prototype.foo = function(a) { };
     *
     * function ChildClass(a, b, c) {
     *   ChildClass.base(this, 'constructor', a, b);
     * }
     * goog.inherits(ChildClass, ParentClass);
     *
     * var child = new ChildClass('a', 'b', 'see');
     * child.foo(); // This works.
     * </pre>
     *
     * @param {!Function} childCtor Child class.
     * @param {!Function} parentCtor Parent class.
     */
    goog.inherits = function (childCtor, parentCtor) {
      /** @constructor */
      function tempCtor() {}
      tempCtor.prototype = parentCtor.prototype;
      childCtor.superClass_ = parentCtor.prototype;
      childCtor.prototype = new tempCtor();
      /** @override */
      childCtor.prototype.constructor = childCtor;

      /**
       * Calls superclass constructor/method.
       *
       * This function is only available if you use goog.inherits to
       * express inheritance relationships between classes.
       *
       * NOTE: This is a replacement for goog.base and for superClass_
       * property defined in childCtor.
       *
       * @param {!Object} me Should always be "this".
       * @param {string} methodName The method name to call. Calling
       *     superclass constructor can be done with the special string
       *     'constructor'.
       * @param {...*} var_args The arguments to pass to superclass
       *     method/constructor.
       * @return {*} The return value of the superclass method/constructor.
       */
      childCtor.base = function (me, methodName, var_args) {
        // Copying using loop to avoid deop due to passing arguments object to
        // function. This is faster in many JS engines as of late 2014.
        var args = new Array(arguments.length - 2);
        for (var i = 2; i < arguments.length; i++) {
          args[i - 2] = arguments[i];
        }
        return parentCtor.prototype[methodName].apply(me, args);
      };
    };

    /**
     * Call up to the superclass.
     *
     * If this is called from a constructor, then this calls the superclass
     * constructor with arguments 1-N.
     *
     * If this is called from a prototype method, then you must pass the name of the
     * method as the second argument to this function. If you do not, you will get a
     * runtime error. This calls the superclass' method with arguments 2-N.
     *
     * This function only works if you use goog.inherits to express inheritance
     * relationships between your classes.
     *
     * This function is a compiler primitive. At compile-time, the compiler will do
     * macro expansion to remove a lot of the extra overhead that this function
     * introduces. The compiler will also enforce a lot of the assumptions that this
     * function makes, and treat it as a compiler error if you break them.
     *
     * @param {!Object} me Should always be "this".
     * @param {*=} opt_methodName The method name if calling a super method.
     * @param {...*} var_args The rest of the arguments.
     * @return {*} The return value of the superclass method.
     * @suppress {es5Strict} This method can not be used in strict mode, but
     *     all Closure Library consumers must depend on this file.
     */
    goog.base = function (me, opt_methodName, var_args) {
      var caller = arguments.callee.caller;

      if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !caller) {
        throw Error('arguments.caller not defined.  goog.base() cannot be used ' + 'with strict mode code. See ' + 'http://www.ecma-international.org/ecma-262/5.1/#sec-C');
      }

      if (caller.superClass_) {
        // Copying using loop to avoid deop due to passing arguments object to
        // function. This is faster in many JS engines as of late 2014.
        var ctorArgs = new Array(arguments.length - 1);
        for (var i = 1; i < arguments.length; i++) {
          ctorArgs[i - 1] = arguments[i];
        }
        // This is a constructor. Call the superclass constructor.
        return caller.superClass_.constructor.apply(me, ctorArgs);
      }

      // Copying using loop to avoid deop due to passing arguments object to
      // function. This is faster in many JS engines as of late 2014.
      var args = new Array(arguments.length - 2);
      for (var i = 2; i < arguments.length; i++) {
        args[i - 2] = arguments[i];
      }
      var foundCaller = false;
      for (var ctor = me.constructor; ctor; ctor = ctor.superClass_ && ctor.superClass_.constructor) {
        if (ctor.prototype[opt_methodName] === caller) {
          foundCaller = true;
        } else if (foundCaller) {
          return ctor.prototype[opt_methodName].apply(me, args);
        }
      }

      // If we did not find the caller in the prototype chain, then one of two
      // things happened:
      // 1) The caller is an instance method.
      // 2) This method was not called by the right caller.
      if (me[opt_methodName] === caller) {
        return me.constructor.prototype[opt_methodName].apply(me, args);
      } else {
        throw Error('goog.base called from a method of one name ' + 'to a method of a different name');
      }
    };

    /**
     * Allow for aliasing within scope functions.  This function exists for
     * uncompiled code - in compiled code the calls will be inlined and the aliases
     * applied.  In uncompiled code the function is simply run since the aliases as
     * written are valid JavaScript.
     *
     *
     * @param {function()} fn Function to call.  This function can contain aliases
     *     to namespaces (e.g. "var dom = goog.dom") or classes
     *     (e.g. "var Timer = goog.Timer").
     */
    goog.scope = function (fn) {
      fn.call(goog.global);
    };

    /*
     * To support uncompiled, strict mode bundles that use eval to divide source
     * like so:
     *    eval('someSource;//# sourceUrl sourcefile.js');
     * We need to export the globally defined symbols "goog" and "COMPILED".
     * Exporting "goog" breaks the compiler optimizations, so we required that
     * be defined externally.
     * NOTE: We don't use goog.exportSymbol here because we don't want to trigger
     * extern generation when that compiler option is enabled.
     */
    if (!COMPILED) {
      goog.global['COMPILED'] = COMPILED;
    }

    goog.provide('goog.string');

    /**
     * Does simple python-style string substitution.
     * subs("foo%s hot%s", "bar", "dog") becomes "foobar hotdog".
     * @param {string} str The string containing the pattern.
     * @param {...*} var_args The items to substitute into the pattern.
     * @return {string} A copy of {@code str} in which each occurrence of
     *     {@code %s} has been replaced an argument from {@code var_args}.
     */
    goog.string.subs = function (str, var_args) {
      var splitParts = str.split('%s');
      var returnString = '';

      var subsArguments = Array.prototype.slice.call(arguments, 1);
      while (subsArguments.length &&
      // Replace up to the last split part. We are inserting in the
      // positions between split parts.
      splitParts.length > 1) {
        returnString += splitParts.shift() + subsArguments.shift();
      }

      return returnString + splitParts.join('%s'); // Join unused '%s'
    };

    /**
     * Regular expression that matches an ampersand, for use in escaping.
     * @const {!RegExp}
     * @private
     */
    goog.string.AMP_RE_ = /&/g;

    /**
     * Regular expression that matches a less than sign, for use in escaping.
     * @const {!RegExp}
     * @private
     */
    goog.string.LT_RE_ = /</g;

    /**
     * Regular expression that matches a greater than sign, for use in escaping.
     * @const {!RegExp}
     * @private
     */
    goog.string.GT_RE_ = />/g;

    /**
     * Regular expression that matches a double quote, for use in escaping.
     * @const {!RegExp}
     * @private
     */
    goog.string.QUOT_RE_ = /"/g;

    /**
     * Regular expression that matches a single quote, for use in escaping.
     * @const {!RegExp}
     * @private
     */
    goog.string.SINGLE_QUOTE_RE_ = /'/g;

    /**
     * Regular expression that matches null character, for use in escaping.
     * @const {!RegExp}
     * @private
     */
    goog.string.NULL_RE_ = /\x00/g;

    /**
     * Regular expression that matches a lowercase letter "e", for use in escaping.
     * @const {!RegExp}
     * @private
     */
    goog.string.E_RE_ = /e/g;

    /**
     * Regular expression that matches any character that needs to be escaped.
     * @const {!RegExp}
     * @private
     */
    goog.string.ALL_RE_ = goog.string.DETECT_DOUBLE_ESCAPING ? /[\x00&<>"'e]/ : /[\x00&<>"']/;

    /**
     * Unescapes an HTML string.
     *
     * @param {string} str The string to unescape.
     * @return {string} An unescaped copy of {@code str}.
     */
    goog.string.unescapeEntities = function (str) {
      if (goog.string.contains(str, '&')) {
        // We are careful not to use a DOM if we do not have one or we explicitly
        // requested non-DOM html unescaping.
        if (!goog.string.FORCE_NON_DOM_HTML_UNESCAPING && 'document' in goog.global) {
          return goog.string.unescapeEntitiesUsingDom_(str);
        } else {
          // Fall back on pure XML entities
          return goog.string.unescapePureXmlEntities_(str);
        }
      }
      return str;
    };

    /**
     * Unescapes an HTML string using a DOM to resolve non-XML, non-numeric
     * entities. This function is XSS-safe and whitespace-preserving.
     * @private
     * @param {string} str The string to unescape.
     * @param {Document=} opt_document An optional document to use for creating
     *     elements. If this is not specified then the default window.document
     *     will be used.
     * @return {string} The unescaped {@code str} string.
     */
    goog.string.unescapeEntitiesUsingDom_ = function (str, opt_document) {
      /** @type {!Object<string, string>} */
      var seen = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"' };
      var div;
      if (opt_document) {
        div = opt_document.createElement('div');
      } else {
        div = goog.global.document.createElement('div');
      }
      // Match as many valid entity characters as possible. If the actual entity
      // happens to be shorter, it will still work as innerHTML will return the
      // trailing characters unchanged. Since the entity characters do not include
      // open angle bracket, there is no chance of XSS from the innerHTML use.
      // Since no whitespace is passed to innerHTML, whitespace is preserved.
      return str.replace(goog.string.HTML_ENTITY_PATTERN_, function (s, entity) {
        // Check for cached entity.
        var value = seen[s];
        if (value) {
          return value;
        }
        // Check for numeric entity.
        if (entity.charAt(0) == '#') {
          // Prefix with 0 so that hex entities (e.g. &#x10) parse as hex numbers.
          var n = Number('0' + entity.substr(1));
          if (!isNaN(n)) {
            value = String.fromCharCode(n);
          }
        }
        // Fall back to innerHTML otherwise.
        if (!value) {
          // Append a non-entity character to avoid a bug in Webkit that parses
          // an invalid entity at the end of innerHTML text as the empty string.
          div.innerHTML = s + ' ';
          // Then remove the trailing character from the result.
          value = div.firstChild.nodeValue.slice(0, -1);
        }
        // Cache and return.
        return seen[s] = value;
      });
    };

    /**
     * Unescapes XML entities.
     * @private
     * @param {string} str The string to unescape.
     * @return {string} An unescaped copy of {@code str}.
     */
    goog.string.unescapePureXmlEntities_ = function (str) {
      return str.replace(/&([^;]+);/g, function (s, entity) {
        switch (entity) {
          case 'amp':
            return '&';
          case 'lt':
            return '<';
          case 'gt':
            return '>';
          case 'quot':
            return '"';
          default:
            if (entity.charAt(0) == '#') {
              // Prefix with 0 so that hex entities (e.g. &#x10) parse as hex.
              var n = Number('0' + entity.substr(1));
              if (!isNaN(n)) {
                return String.fromCharCode(n);
              }
            }
            // For invalid entities we just return the entity
            return s;
        }
      });
    };

    /**
     * Regular expression that matches an HTML entity.
     * See also HTML5: Tokenization / Tokenizing character references.
     * @private
     * @type {!RegExp}
     */
    goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;

    /**
     * Determines whether a string contains a substring.
     * @param {string} str The string to search.
     * @param {string} subString The substring to search for.
     * @return {boolean} Whether {@code str} contains {@code subString}.
     */
    goog.string.contains = function (str, subString) {
      return str.indexOf(subString) != -1;
    };

    /**
     * Escapes double quote '"' and single quote '\'' characters in addition to
     * '&', '<', and '>' so that a string can be included in an HTML tag attribute
     * value within double or single quotes.
     *
     * It should be noted that > doesn't need to be escaped for the HTML or XML to
     * be valid, but it has been decided to escape it for consistency with other
     * implementations.
     *
     * With goog.string.DETECT_DOUBLE_ESCAPING, this function escapes also the
     * lowercase letter "e".
     *
     * NOTE(user):
     * HtmlEscape is often called during the generation of large blocks of HTML.
     * Using statics for the regular expressions and strings is an optimization
     * that can more than half the amount of time IE spends in this function for
     * large apps, since strings and regexes both contribute to GC allocations.
     *
     * Testing for the presence of a character before escaping increases the number
     * of function calls, but actually provides a speed increase for the average
     * case -- since the average case often doesn't require the escaping of all 4
     * characters and indexOf() is much cheaper than replace().
     * The worst case does suffer slightly from the additional calls, therefore the
     * opt_isLikelyToContainHtmlChars option has been included for situations
     * where all 4 HTML entities are very likely to be present and need escaping.
     *
     * Some benchmarks (times tended to fluctuate +-0.05ms):
     *                                     FireFox                     IE6
     * (no chars / average (mix of cases) / all 4 chars)
     * no checks                     0.13 / 0.22 / 0.22         0.23 / 0.53 / 0.80
     * indexOf                       0.08 / 0.17 / 0.26         0.22 / 0.54 / 0.84
     * indexOf + re test             0.07 / 0.17 / 0.28         0.19 / 0.50 / 0.85
     *
     * An additional advantage of checking if replace actually needs to be called
     * is a reduction in the number of object allocations, so as the size of the
     * application grows the difference between the various methods would increase.
     *
     * @param {string} str string to be escaped.
     * @param {boolean=} opt_isLikelyToContainHtmlChars Don't perform a check to see
     *     if the character needs replacing - use this option if you expect each of
     *     the characters to appear often. Leave false if you expect few html
     *     characters to occur in your strings, such as if you are escaping HTML.
     * @return {string} An escaped copy of {@code str}.
     */
    goog.string.htmlEscape = function (str, opt_isLikelyToContainHtmlChars) {

      if (opt_isLikelyToContainHtmlChars) {
        str = str.replace(goog.string.AMP_RE_, '&amp;').replace(goog.string.LT_RE_, '&lt;').replace(goog.string.GT_RE_, '&gt;').replace(goog.string.QUOT_RE_, '&quot;').replace(goog.string.SINGLE_QUOTE_RE_, '&#39;').replace(goog.string.NULL_RE_, '&#0;');
        if (goog.string.DETECT_DOUBLE_ESCAPING) {
          str = str.replace(goog.string.E_RE_, '&#101;');
        }
        return str;
      } else {
        // quick test helps in the case when there are no chars to replace, in
        // worst case this makes barely a difference to the time taken
        if (!goog.string.ALL_RE_.test(str)) return str;

        // str.indexOf is faster than regex.test in this case
        if (str.indexOf('&') != -1) {
          str = str.replace(goog.string.AMP_RE_, '&amp;');
        }
        if (str.indexOf('<') != -1) {
          str = str.replace(goog.string.LT_RE_, '&lt;');
        }
        if (str.indexOf('>') != -1) {
          str = str.replace(goog.string.GT_RE_, '&gt;');
        }
        if (str.indexOf('"') != -1) {
          str = str.replace(goog.string.QUOT_RE_, '&quot;');
        }
        if (str.indexOf('\'') != -1) {
          str = str.replace(goog.string.SINGLE_QUOTE_RE_, '&#39;');
        }
        if (str.indexOf('\x00') != -1) {
          str = str.replace(goog.string.NULL_RE_, '&#0;');
        }
        if (goog.string.DETECT_DOUBLE_ESCAPING && str.indexOf('e') != -1) {
          str = str.replace(goog.string.E_RE_, '&#101;');
        }
        return str;
      }
    };

    goog.debug = {};

    /**
     * Returns the type of a value. If a constructor is passed, and a suitable
     * string cannot be found, 'unknown type name' will be returned.
     *
     * <p>Forked rather than moved from {@link goog.asserts.getType_}
     * to avoid adding a dependency to goog.asserts.
     * @param {*} value A constructor, object, or primitive.
     * @return {string} The best display name for the value, or 'unknown type name'.
     */
    goog.debug.runtimeType = function (value) {
      if (value instanceof Function) {
        return value.displayName || value.name || 'unknown type name';
      } else if (value instanceof Object) {
        return value.constructor.displayName || value.constructor.name || Object.prototype.toString.call(value);
      } else {
        return value === null ? 'null' : typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value);
      }
    };

    // Copyright 2009 The Closure Library Authors. All Rights Reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    //      http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS-IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.

    /**
     * @fileoverview Provides a base class for custom Error objects such that the
     * stack is correctly maintained.
     *
     * You should never need to throw goog.debug.Error(msg) directly, Error(msg) is
     * sufficient.
     *
     */

    /**
     * Base class for custom error objects.
     * @param {*=} opt_msg The message associated with the error.
     * @constructor
     * @extends {Error}
     */
    goog.debug.Error = function (opt_msg) {

      // Attempt to ensure there is a stack trace.
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, goog.debug.Error);
      } else {
        var stack = new Error().stack;
        if (stack) {
          this.stack = stack;
        }
      }

      if (opt_msg) {
        this.message = String(opt_msg);
      }

      /**
       * Whether to report this error to the server. Setting this to false will
       * cause the error reporter to not report the error back to the server,
       * which can be useful if the client knows that the error has already been
       * logged on the server.
       * @type {boolean}
       */
      this.reportErrorToServer = true;
    };
    goog.inherits(goog.debug.Error, Error);

    /** @override */
    goog.debug.Error.prototype.name = 'CustomError';

    /**
     * @fileoverview Definition of goog.dom.NodeType.
     */

    goog.dom = {};

    /**
     * Constants for the nodeType attribute in the Node interface.
     *
     * These constants match those specified in the Node interface. These are
     * usually present on the Node object in recent browsers, but not in older
     * browsers (specifically, early IEs) and thus are given here.
     *
     * In some browsers (early IEs), these are not defined on the Node object,
     * so they are provided here.
     *
     * See http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247
     * @enum {number}
     */
    goog.dom.NodeType = {
      ELEMENT: 1,
      ATTRIBUTE: 2,
      TEXT: 3,
      CDATA_SECTION: 4,
      ENTITY_REFERENCE: 5,
      ENTITY: 6,
      PROCESSING_INSTRUCTION: 7,
      COMMENT: 8,
      DOCUMENT: 9,
      DOCUMENT_TYPE: 10,
      DOCUMENT_FRAGMENT: 11,
      NOTATION: 12
    };

    // Copyright 2007 The Closure Library Authors. All Rights Reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    //      http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS-IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.

    /**
     * @fileoverview Utility functions for supporting Bidi issues.
     */

    /**
     * Namespace for bidi supporting functions.
     */
    goog.provide('goog.i18n.bidi');
    goog.provide('goog.i18n.bidi.Dir');
    goog.provide('goog.i18n.bidi.DirectionalString');
    goog.provide('goog.i18n.bidi.Format');

    /**
     * @define {boolean} FORCE_RTL forces the {@link goog.i18n.bidi.IS_RTL} constant
     * to say that the current locale is a RTL locale.  This should only be used
     * if you want to override the default behavior for deciding whether the
     * current locale is RTL or not.
     *
     * {@see goog.i18n.bidi.IS_RTL}
     */
    goog.define('goog.i18n.bidi.FORCE_RTL', false);

    /**
     * Constant that defines whether or not the current locale is a RTL locale.
     * If {@link goog.i18n.bidi.FORCE_RTL} is not true, this constant will default
     * to check that {@link goog.LOCALE} is one of a few major RTL locales.
     *
     * <p>This is designed to be a maximally efficient compile-time constant. For
     * example, for the default goog.LOCALE, compiling
     * "if (goog.i18n.bidi.IS_RTL) alert('rtl') else {}" should produce no code. It
     * is this design consideration that limits the implementation to only
     * supporting a few major RTL locales, as opposed to the broader repertoire of
     * something like goog.i18n.bidi.isRtlLanguage.
     *
     * <p>Since this constant refers to the directionality of the locale, it is up
     * to the caller to determine if this constant should also be used for the
     * direction of the UI.
     *
     * {@see goog.LOCALE}
     *
     * @type {boolean}
     *
     * TODO(user): write a test that checks that this is a compile-time constant.
     */
    goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || (goog.LOCALE.substring(0, 2).toLowerCase() == 'ar' || goog.LOCALE.substring(0, 2).toLowerCase() == 'fa' || goog.LOCALE.substring(0, 2).toLowerCase() == 'he' || goog.LOCALE.substring(0, 2).toLowerCase() == 'iw' || goog.LOCALE.substring(0, 2).toLowerCase() == 'ps' || goog.LOCALE.substring(0, 2).toLowerCase() == 'sd' || goog.LOCALE.substring(0, 2).toLowerCase() == 'ug' || goog.LOCALE.substring(0, 2).toLowerCase() == 'ur' || goog.LOCALE.substring(0, 2).toLowerCase() == 'yi') && (goog.LOCALE.length == 2 || goog.LOCALE.substring(2, 3) == '-' || goog.LOCALE.substring(2, 3) == '_') || goog.LOCALE.length >= 3 && goog.LOCALE.substring(0, 3).toLowerCase() == 'ckb' && (goog.LOCALE.length == 3 || goog.LOCALE.substring(3, 4) == '-' || goog.LOCALE.substring(3, 4) == '_');

    /**
     * Unicode formatting characters and directionality string constants.
     * @enum {string}
     */
    goog.i18n.bidi.Format = {
      /** Unicode "Left-To-Right Embedding" (LRE) character. */
      LRE: '\u202A',
      /** Unicode "Right-To-Left Embedding" (RLE) character. */
      RLE: '\u202B',
      /** Unicode "Pop Directional Formatting" (PDF) character. */
      PDF: '\u202C',
      /** Unicode "Left-To-Right Mark" (LRM) character. */
      LRM: '\u200E',
      /** Unicode "Right-To-Left Mark" (RLM) character. */
      RLM: '\u200F'
    };

    /**
     * Directionality enum.
     * @enum {number}
     */
    goog.i18n.bidi.Dir = {
      /**
       * Left-to-right.
       */
      LTR: 1,

      /**
       * Right-to-left.
       */
      RTL: -1,

      /**
       * Neither left-to-right nor right-to-left.
       */
      NEUTRAL: 0
    };

    /**
     * 'right' string constant.
     * @type {string}
     */
    goog.i18n.bidi.RIGHT = 'right';

    /**
     * 'left' string constant.
     * @type {string}
     */
    goog.i18n.bidi.LEFT = 'left';

    /**
     * 'left' if locale is RTL, 'right' if not.
     * @type {string}
     */
    goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT;

    /**
     * 'right' if locale is RTL, 'left' if not.
     * @type {string}
     */
    goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;

    /**
     * Convert a directionality given in various formats to a goog.i18n.bidi.Dir
     * constant. Useful for interaction with different standards of directionality
     * representation.
     *
     * @param {goog.i18n.bidi.Dir|number|boolean|null} givenDir Directionality given
     *     in one of the following formats:
     *     1. A goog.i18n.bidi.Dir constant.
     *     2. A number (positive = LTR, negative = RTL, 0 = neutral).
     *     3. A boolean (true = RTL, false = LTR).
     *     4. A null for unknown directionality.
     * @param {boolean=} opt_noNeutral Whether a givenDir of zero or
     *     goog.i18n.bidi.Dir.NEUTRAL should be treated as null, i.e. unknown, in
     *     order to preserve legacy behavior.
     * @return {?goog.i18n.bidi.Dir} A goog.i18n.bidi.Dir constant matching the
     *     given directionality. If given null, returns null (i.e. unknown).
     */
    goog.i18n.bidi.toDir = function (givenDir, opt_noNeutral) {
      if (typeof givenDir == 'number') {
        // This includes the non-null goog.i18n.bidi.Dir case.
        return givenDir > 0 ? goog.i18n.bidi.Dir.LTR : givenDir < 0 ? goog.i18n.bidi.Dir.RTL : opt_noNeutral ? null : goog.i18n.bidi.Dir.NEUTRAL;
      } else if (givenDir == null) {
        return null;
      } else {
        // Must be typeof givenDir == 'boolean'.
        return givenDir ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
      }
    };

    /**
     * A practical pattern to identify strong LTR characters. This pattern is not
     * theoretically correct according to the Unicode standard. It is simplified for
     * performance and small code size.
     * @type {string}
     * @private
     */
    goog.i18n.bidi.ltrChars_ = 'A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF' + '\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF';

    /**
     * A practical pattern to identify strong RTL character. This pattern is not
     * theoretically correct according to the Unicode standard. It is simplified
     * for performance and small code size.
     * @type {string}
     * @private
     */
    goog.i18n.bidi.rtlChars_ = '\u0591-\u06EF\u06FA-\u07FF\u200F\uFB1D-\uFDFF\uFE70-\uFEFC';

    /**
     * Simplified regular expression for an HTML tag (opening or closing) or an HTML
     * escape. We might want to skip over such expressions when estimating the text
     * directionality.
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;

    /**
     * Returns the input text with spaces instead of HTML tags or HTML escapes, if
     * opt_isStripNeeded is true. Else returns the input as is.
     * Useful for text directionality estimation.
     * Note: the function should not be used in other contexts; it is not 100%
     * correct, but rather a good-enough implementation for directionality
     * estimation purposes.
     * @param {string} str The given string.
     * @param {boolean=} opt_isStripNeeded Whether to perform the stripping.
     *     Default: false (to retain consistency with calling functions).
     * @return {string} The given string cleaned of HTML tags / escapes.
     * @private
     */
    goog.i18n.bidi.stripHtmlIfNeeded_ = function (str, opt_isStripNeeded) {
      return opt_isStripNeeded ? str.replace(goog.i18n.bidi.htmlSkipReg_, '') : str;
    };

    /**
     * Regular expression to check for RTL characters.
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.rtlCharReg_ = new RegExp('[' + goog.i18n.bidi.rtlChars_ + ']');

    /**
     * Regular expression to check for LTR characters.
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.ltrCharReg_ = new RegExp('[' + goog.i18n.bidi.ltrChars_ + ']');

    /**
     * Test whether the given string has any RTL characters in it.
     * @param {string} str The given string that need to be tested.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether the string contains RTL characters.
     */
    goog.i18n.bidi.hasAnyRtl = function (str, opt_isHtml) {
      return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
    };

    /**
     * Test whether the given string has any RTL characters in it.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the string contains RTL characters.
     * @deprecated Use hasAnyRtl.
     */
    goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;

    /**
     * Test whether the given string has any LTR characters in it.
     * @param {string} str The given string that need to be tested.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether the string contains LTR characters.
     */
    goog.i18n.bidi.hasAnyLtr = function (str, opt_isHtml) {
      return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
    };

    /**
     * Regular expression pattern to check if the first character in the string
     * is LTR.
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.ltrRe_ = new RegExp('^[' + goog.i18n.bidi.ltrChars_ + ']');

    /**
     * Regular expression pattern to check if the first character in the string
     * is RTL.
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.rtlRe_ = new RegExp('^[' + goog.i18n.bidi.rtlChars_ + ']');

    /**
     * Check if the first character in the string is RTL or not.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the first character in str is an RTL char.
     */
    goog.i18n.bidi.isRtlChar = function (str) {
      return goog.i18n.bidi.rtlRe_.test(str);
    };

    /**
     * Check if the first character in the string is LTR or not.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the first character in str is an LTR char.
     */
    goog.i18n.bidi.isLtrChar = function (str) {
      return goog.i18n.bidi.ltrRe_.test(str);
    };

    /**
     * Check if the first character in the string is neutral or not.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the first character in str is a neutral char.
     */
    goog.i18n.bidi.isNeutralChar = function (str) {
      return !goog.i18n.bidi.isLtrChar(str) && !goog.i18n.bidi.isRtlChar(str);
    };

    /**
     * Regular expressions to check if a piece of text is of LTR directionality
     * on first character with strong directionality.
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.ltrDirCheckRe_ = new RegExp('^[^' + goog.i18n.bidi.rtlChars_ + ']*[' + goog.i18n.bidi.ltrChars_ + ']');

    /**
     * Regular expressions to check if a piece of text is of RTL directionality
     * on first character with strong directionality.
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.rtlDirCheckRe_ = new RegExp('^[^' + goog.i18n.bidi.ltrChars_ + ']*[' + goog.i18n.bidi.rtlChars_ + ']');

    /**
     * Check whether the first strongly directional character (if any) is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL directionality is detected using the first
     *     strongly-directional character method.
     */
    goog.i18n.bidi.startsWithRtl = function (str, opt_isHtml) {
      return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
    };

    /**
     * Check whether the first strongly directional character (if any) is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL directionality is detected using the first
     *     strongly-directional character method.
     * @deprecated Use startsWithRtl.
     */
    goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;

    /**
     * Check whether the first strongly directional character (if any) is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR directionality is detected using the first
     *     strongly-directional character method.
     */
    goog.i18n.bidi.startsWithLtr = function (str, opt_isHtml) {
      return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
    };

    /**
     * Check whether the first strongly directional character (if any) is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR directionality is detected using the first
     *     strongly-directional character method.
     * @deprecated Use startsWithLtr.
     */
    goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;

    /**
     * Regular expression to check if a string looks like something that must
     * always be LTR even in RTL text, e.g. a URL. When estimating the
     * directionality of text containing these, we treat these as weakly LTR,
     * like numbers.
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;

    /**
     * Check whether the input string either contains no strongly directional
     * characters or looks like a url.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether neutral directionality is detected.
     */
    goog.i18n.bidi.isNeutralText = function (str, opt_isHtml) {
      str = goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml);
      return goog.i18n.bidi.isRequiredLtrRe_.test(str) || !goog.i18n.bidi.hasAnyLtr(str) && !goog.i18n.bidi.hasAnyRtl(str);
    };

    /**
     * Regular expressions to check if the last strongly-directional character in a
     * piece of text is LTR.
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp('[' + goog.i18n.bidi.ltrChars_ + '][^' + goog.i18n.bidi.rtlChars_ + ']*$');

    /**
     * Regular expressions to check if the last strongly-directional character in a
     * piece of text is RTL.
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp('[' + goog.i18n.bidi.rtlChars_ + '][^' + goog.i18n.bidi.ltrChars_ + ']*$');

    /**
     * Check if the exit directionality a piece of text is LTR, i.e. if the last
     * strongly-directional character in the string is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR exit directionality was detected.
     */
    goog.i18n.bidi.endsWithLtr = function (str, opt_isHtml) {
      return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
    };

    /**
     * Check if the exit directionality a piece of text is LTR, i.e. if the last
     * strongly-directional character in the string is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR exit directionality was detected.
     * @deprecated Use endsWithLtr.
     */
    goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;

    /**
     * Check if the exit directionality a piece of text is RTL, i.e. if the last
     * strongly-directional character in the string is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL exit directionality was detected.
     */
    goog.i18n.bidi.endsWithRtl = function (str, opt_isHtml) {
      return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml));
    };

    /**
     * Check if the exit directionality a piece of text is RTL, i.e. if the last
     * strongly-directional character in the string is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL exit directionality was detected.
     * @deprecated Use endsWithRtl.
     */
    goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;

    /**
     * A regular expression for matching right-to-left language codes.
     * See {@link #isRtlLanguage} for the design.
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.rtlLocalesRe_ = new RegExp('^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|' + '.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))' + '(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)', 'i');

    /**
     * Check if a BCP 47 / III language code indicates an RTL language, i.e. either:
     * - a language code explicitly specifying one of the right-to-left scripts,
     *   e.g. "az-Arab", or<p>
     * - a language code specifying one of the languages normally written in a
     *   right-to-left script, e.g. "fa" (Farsi), except ones explicitly specifying
     *   Latin or Cyrillic script (which are the usual LTR alternatives).<p>
     * The list of right-to-left scripts appears in the 100-199 range in
     * http://www.unicode.org/iso15924/iso15924-num.html, of which Arabic and
     * Hebrew are by far the most widely used. We also recognize Thaana, N'Ko, and
     * Tifinagh, which also have significant modern usage. The rest (Syriac,
     * Samaritan, Mandaic, etc.) seem to have extremely limited or no modern usage
     * and are not recognized to save on code size.
     * The languages usually written in a right-to-left script are taken as those
     * with Suppress-Script: Hebr|Arab|Thaa|Nkoo|Tfng  in
     * http://www.iana.org/assignments/language-subtag-registry,
     * as well as Central (or Sorani) Kurdish (ckb), Sindhi (sd) and Uyghur (ug).
     * Other subtags of the language code, e.g. regions like EG (Egypt), are
     * ignored.
     * @param {string} lang BCP 47 (a.k.a III) language code.
     * @return {boolean} Whether the language code is an RTL language.
     */
    goog.i18n.bidi.isRtlLanguage = function (lang) {
      return goog.i18n.bidi.rtlLocalesRe_.test(lang);
    };

    /**
     * Regular expression for bracket guard replacement in text.
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;

    /**
     * Apply bracket guard using LRM and RLM. This is to address the problem of
     * messy bracket display frequently happens in RTL layout.
     * This function works for plain text, not for HTML. In HTML, the opening
     * bracket might be in a different context than the closing bracket (such as
     * an attribute value).
     * @param {string} s The string that need to be processed.
     * @param {boolean=} opt_isRtlContext specifies default direction (usually
     *     direction of the UI).
     * @return {string} The processed string, with all bracket guarded.
     */
    goog.i18n.bidi.guardBracketInText = function (s, opt_isRtlContext) {
      var useRtl = opt_isRtlContext === undefined ? goog.i18n.bidi.hasAnyRtl(s) : opt_isRtlContext;
      var mark = useRtl ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM;
      return s.replace(goog.i18n.bidi.bracketGuardTextRe_, mark + '$&' + mark);
    };

    /**
     * Enforce the html snippet in RTL directionality regardless overall context.
     * If the html piece was enclosed by tag, dir will be applied to existing
     * tag, otherwise a span tag will be added as wrapper. For this reason, if
     * html snippet start with with tag, this tag must enclose the whole piece. If
     * the tag already has a dir specified, this new one will override existing
     * one in behavior (tested on FF and IE).
     * @param {string} html The string that need to be processed.
     * @return {string} The processed string, with directionality enforced to RTL.
     */
    goog.i18n.bidi.enforceRtlInHtml = function (html) {
      if (html.charAt(0) == '<') {
        return html.replace(/<\w+/, '$& dir=rtl');
      }
      // '\n' is important for FF so that it won't incorrectly merge span groups
      return '\n<span dir=rtl>' + html + '</span>';
    };

    /**
     * Enforce RTL on both end of the given text piece using unicode BiDi formatting
     * characters RLE and PDF.
     * @param {string} text The piece of text that need to be wrapped.
     * @return {string} The wrapped string after process.
     */
    goog.i18n.bidi.enforceRtlInText = function (text) {
      return goog.i18n.bidi.Format.RLE + text + goog.i18n.bidi.Format.PDF;
    };

    /**
     * Enforce the html snippet in RTL directionality regardless overall context.
     * If the html piece was enclosed by tag, dir will be applied to existing
     * tag, otherwise a span tag will be added as wrapper. For this reason, if
     * html snippet start with with tag, this tag must enclose the whole piece. If
     * the tag already has a dir specified, this new one will override existing
     * one in behavior (tested on FF and IE).
     * @param {string} html The string that need to be processed.
     * @return {string} The processed string, with directionality enforced to RTL.
     */
    goog.i18n.bidi.enforceLtrInHtml = function (html) {
      if (html.charAt(0) == '<') {
        return html.replace(/<\w+/, '$& dir=ltr');
      }
      // '\n' is important for FF so that it won't incorrectly merge span groups
      return '\n<span dir=ltr>' + html + '</span>';
    };

    /**
     * Enforce LTR on both end of the given text piece using unicode BiDi formatting
     * characters LRE and PDF.
     * @param {string} text The piece of text that need to be wrapped.
     * @return {string} The wrapped string after process.
     */
    goog.i18n.bidi.enforceLtrInText = function (text) {
      return goog.i18n.bidi.Format.LRE + text + goog.i18n.bidi.Format.PDF;
    };

    /**
     * Regular expression to find dimensions such as "padding: .3 0.4ex 5px 6;"
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;

    /**
     * Regular expression for left.
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.leftRe_ = /left/gi;

    /**
     * Regular expression for right.
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.rightRe_ = /right/gi;

    /**
     * Placeholder regular expression for swapping.
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.tempRe_ = /%%%%/g;

    /**
     * Swap location parameters and 'left'/'right' in CSS specification. The
     * processed string will be suited for RTL layout. Though this function can
     * cover most cases, there are always exceptions. It is suggested to put
     * those exceptions in separate group of CSS string.
     * @param {string} cssStr CSS spefication string.
     * @return {string} Processed CSS specification string.
     */
    goog.i18n.bidi.mirrorCSS = function (cssStr) {
      return cssStr.
      // reverse dimensions
      replace(goog.i18n.bidi.dimensionsRe_, ':$1 $4 $3 $2').replace(goog.i18n.bidi.leftRe_, '%%%%'). // swap left and right
      replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
    };

    /**
     * Regular expression for hebrew double quote substitution, finding quote
     * directly after hebrew characters.
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;

    /**
     * Regular expression for hebrew single quote substitution, finding quote
     * directly after hebrew characters.
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;

    /**
     * Replace the double and single quote directly after a Hebrew character with
     * GERESH and GERSHAYIM. In such case, most likely that's user intention.
     * @param {string} str String that need to be processed.
     * @return {string} Processed string with double/single quote replaced.
     */
    goog.i18n.bidi.normalizeHebrewQuote = function (str) {
      return str.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, '$1\u05F4').replace(goog.i18n.bidi.singleQuoteSubstituteRe_, '$1\u05F3');
    };

    /**
     * Regular expression to split a string into "words" for directionality
     * estimation based on relative word counts.
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.wordSeparatorRe_ = /\s+/;

    /**
     * Regular expression to check if a string contains any numerals. Used to
     * differentiate between completely neutral strings and those containing
     * numbers, which are weakly LTR.
     *
     * Native Arabic digits (\u0660 - \u0669) are not included because although they
     * do flow left-to-right inside a number, this is the case even if the  overall
     * directionality is RTL, and a mathematical expression using these digits is
     * supposed to flow right-to-left overall, including unary plus and minus
     * appearing to the right of a number, and this does depend on the overall
     * directionality being RTL. The digits used in Farsi (\u06F0 - \u06F9), on the
     * other hand, are included, since Farsi math (including unary plus and minus)
     * does flow left-to-right.
     *
     * @type {RegExp}
     * @private
     */
    goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;

    /**
     * This constant controls threshold of RTL directionality.
     * @type {number}
     * @private
     */
    goog.i18n.bidi.rtlDetectionThreshold_ = 0.40;

    /**
     * Estimates the directionality of a string based on relative word counts.
     * If the number of RTL words is above a certain percentage of the total number
     * of strongly directional words, returns RTL.
     * Otherwise, if any words are strongly or weakly LTR, returns LTR.
     * Otherwise, returns UNKNOWN, which is used to mean "neutral".
     * Numbers are counted as weakly LTR.
     * @param {string} str The string to be checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {goog.i18n.bidi.Dir} Estimated overall directionality of {@code str}.
     */
    goog.i18n.bidi.estimateDirection = function (str, opt_isHtml) {
      var rtlCount = 0;
      var totalCount = 0;
      var hasWeaklyLtr = false;
      var tokens = goog.i18n.bidi.stripHtmlIfNeeded_(str, opt_isHtml).split(goog.i18n.bidi.wordSeparatorRe_);
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (goog.i18n.bidi.startsWithRtl(token)) {
          rtlCount++;
          totalCount++;
        } else if (goog.i18n.bidi.isRequiredLtrRe_.test(token)) {
          hasWeaklyLtr = true;
        } else if (goog.i18n.bidi.hasAnyLtr(token)) {
          totalCount++;
        } else if (goog.i18n.bidi.hasNumeralsRe_.test(token)) {
          hasWeaklyLtr = true;
        }
      }

      return totalCount == 0 ? hasWeaklyLtr ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : rtlCount / totalCount > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
    };

    /**
     * Check the directionality of a piece of text, return true if the piece of
     * text should be laid out in RTL direction.
     * @param {string} str The piece of text that need to be detected.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether this piece of text should be laid out in RTL.
     */
    goog.i18n.bidi.detectRtlDirectionality = function (str, opt_isHtml) {
      return goog.i18n.bidi.estimateDirection(str, opt_isHtml) == goog.i18n.bidi.Dir.RTL;
    };

    /**
     * Sets text input element's directionality and text alignment based on a
     * given directionality. Does nothing if the given directionality is unknown or
     * neutral.
     * @param {Element} element Input field element to set directionality to.
     * @param {goog.i18n.bidi.Dir|number|boolean|null} dir Desired directionality,
     *     given in one of the following formats:
     *     1. A goog.i18n.bidi.Dir constant.
     *     2. A number (positive = LRT, negative = RTL, 0 = neutral).
     *     3. A boolean (true = RTL, false = LTR).
     *     4. A null for unknown directionality.
     */
    goog.i18n.bidi.setElementDirAndAlign = function (element, dir) {
      if (element) {
        dir = goog.i18n.bidi.toDir(dir);
        if (dir) {
          element.style.textAlign = dir == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
          element.dir = dir == goog.i18n.bidi.Dir.RTL ? 'rtl' : 'ltr';
        }
      }
    };

    /**
     * Sets element dir based on estimated directionality of the given text.
     * @param {!Element} element
     * @param {string} text
     */
    goog.i18n.bidi.setElementDirByTextDirectionality = function (element, text) {
      switch (goog.i18n.bidi.estimateDirection(text)) {
        case goog.i18n.bidi.Dir.LTR:
          element.dir = 'ltr';
          break;
        case goog.i18n.bidi.Dir.RTL:
          element.dir = 'rtl';
          break;
        default:
          // Default for no direction, inherit from document.
          element.removeAttribute('dir');
      }
    };

    /**
     * Strings that have an (optional) known direction.
     *
     * Implementations of this interface are string-like objects that carry an
     * attached direction, if known.
     * @interface
     */
    goog.i18n.bidi.DirectionalString = function () {};

    /**
     * Interface marker of the DirectionalString interface.
     *
     * This property can be used to determine at runtime whether or not an object
     * implements this interface.  All implementations of this interface set this
     * property to {@code true}.
     * @type {boolean}
     */
    goog.i18n.bidi.DirectionalString.prototype.implementsGoogI18nBidiDirectionalString;

    /**
     * Retrieves this object's known direction (if any).
     * @return {?goog.i18n.bidi.Dir} The known direction. Null if unknown.
     */
    goog.i18n.bidi.DirectionalString.prototype.getDirection;

    /* jshint ignore:start */

    // Copyright 2008 The Closure Library Authors. All Rights Reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    //      http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS-IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.

    /**
     * @fileoverview Utilities to check the preconditions, postconditions and
     * invariants runtime.
     *
     * Methods in this package should be given special treatment by the compiler
     * for type-inference. For example, <code>goog.asserts.assert(foo)</code>
     * will restrict <code>foo</code> to a truthy value.
     *
     * The compiler has an option to disable asserts. So code like:
     * <code>
     * var x = goog.asserts.assert(foo()); goog.asserts.assert(bar());
     * </code>
     * will be transformed into:
     * <code>
     * var x = foo();
     * </code>
     * The compiler will leave in foo() (because its return value is used),
     * but it will remove bar() because it assumes it does not have side-effects.
     *
     * @author agrieve@google.com (Andrew Grieve)
     */

    goog.provide('goog.asserts');

    /**
     * @define {boolean} Whether to strip out asserts or to leave them in.
     */
    goog.define('goog.asserts.ENABLE_ASSERTS', goog.DEBUG);

    /**
     * Error object for failed assertions.
     * @param {string} messagePattern The pattern that was used to form message.
     * @param {!Array<*>} messageArgs The items to substitute into the pattern.
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    goog.asserts.AssertionError = function (messagePattern, messageArgs) {
      messageArgs.unshift(messagePattern);
      goog.debug.Error.call(this, goog.string.subs.apply(null, messageArgs));
      // Remove the messagePattern afterwards to avoid permanently modifying the
      // passed in array.
      messageArgs.shift();

      /**
       * The message pattern used to format the error message. Error handlers can
       * use this to uniquely identify the assertion.
       * @type {string}
       */
      this.messagePattern = messagePattern;
    };
    goog.inherits(goog.asserts.AssertionError, goog.debug.Error);

    /** @override */
    goog.asserts.AssertionError.prototype.name = 'AssertionError';

    /**
     * The default error handler.
     * @param {!goog.asserts.AssertionError} e The exception to be handled.
     */
    goog.asserts.DEFAULT_ERROR_HANDLER = function (e) {
      throw e;
    };

    /**
     * The handler responsible for throwing or logging assertion errors.
     * @private {function(!goog.asserts.AssertionError)}
     */
    goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;

    /**
     * Throws an exception with the given message and "Assertion failed" prefixed
     * onto it.
     * @param {string} defaultMessage The message to use if givenMessage is empty.
     * @param {Array<*>} defaultArgs The substitution arguments for defaultMessage.
     * @param {string|undefined} givenMessage Message supplied by the caller.
     * @param {Array<*>} givenArgs The substitution arguments for givenMessage.
     * @throws {goog.asserts.AssertionError} When the value is not a number.
     * @private
     */
    goog.asserts.doAssertFailure_ = function (defaultMessage, defaultArgs, givenMessage, givenArgs) {
      var message = 'Assertion failed';
      if (givenMessage) {
        message += ': ' + givenMessage;
        var args = givenArgs;
      } else if (defaultMessage) {
        message += ': ' + defaultMessage;
        args = defaultArgs;
      }
      // The '' + works around an Opera 10 bug in the unit tests. Without it,
      // a stack trace is added to var message above. With this, a stack trace is
      // not added until this line (it causes the extra garbage to be added after
      // the assertion message instead of in the middle of it).
      var e = new goog.asserts.AssertionError('' + message, args || []);
      goog.asserts.errorHandler_(e);
    };

    /**
     * Sets a custom error handler that can be used to customize the behavior of
     * assertion failures, for example by turning all assertion failures into log
     * messages.
     * @param {function(!goog.asserts.AssertionError)} errorHandler
     */
    goog.asserts.setErrorHandler = function (errorHandler) {
      if (goog.asserts.ENABLE_ASSERTS) {
        goog.asserts.errorHandler_ = errorHandler;
      }
    };

    /**
     * Checks if the condition evaluates to true if goog.asserts.ENABLE_ASSERTS is
     * true.
     * @template T
     * @param {T} condition The condition to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {T} The value of the condition.
     * @throws {goog.asserts.AssertionError} When the condition evaluates to false.
     */
    goog.asserts.assert = function (condition, opt_message, var_args) {
      if (goog.asserts.ENABLE_ASSERTS && !condition) {
        goog.asserts.doAssertFailure_('', null, opt_message, Array.prototype.slice.call(arguments, 2));
      }
      return condition;
    };

    /**
     * Fails if goog.asserts.ENABLE_ASSERTS is true. This function is useful in case
     * when we want to add a check in the unreachable area like switch-case
     * statement:
     *
     * <pre>
     *  switch(type) {
     *    case FOO: doSomething(); break;
     *    case BAR: doSomethingElse(); break;
     *    default: goog.assert.fail('Unrecognized type: ' + type);
     *      // We have only 2 types - "default:" section is unreachable code.
     *  }
     * </pre>
     *
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @throws {goog.asserts.AssertionError} Failure.
     */
    goog.asserts.fail = function (opt_message, var_args) {
      if (goog.asserts.ENABLE_ASSERTS) {
        goog.asserts.errorHandler_(new goog.asserts.AssertionError('Failure' + (opt_message ? ': ' + opt_message : ''), Array.prototype.slice.call(arguments, 1)));
      }
    };

    /**
     * Checks if the value is a number if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {number} The value, guaranteed to be a number when asserts enabled.
     * @throws {goog.asserts.AssertionError} When the value is not a number.
     */
    goog.asserts.assertNumber = function (value, opt_message, var_args) {
      if (goog.asserts.ENABLE_ASSERTS && !goog.isNumber(value)) {
        goog.asserts.doAssertFailure_('Expected number but got %s: %s.', [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
      }
      return (/** @type {number} */value
      );
    };

    /**
     * Checks if the value is a string if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {string} The value, guaranteed to be a string when asserts enabled.
     * @throws {goog.asserts.AssertionError} When the value is not a string.
     */
    goog.asserts.assertString = function (value, opt_message, var_args) {
      if (goog.asserts.ENABLE_ASSERTS && !goog.isString(value)) {
        goog.asserts.doAssertFailure_('Expected string but got %s: %s.', [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
      }
      return (/** @type {string} */value
      );
    };

    /**
     * Checks if the value is a function if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {!Function} The value, guaranteed to be a function when asserts
     *     enabled.
     * @throws {goog.asserts.AssertionError} When the value is not a function.
     */
    goog.asserts.assertFunction = function (value, opt_message, var_args) {
      if (goog.asserts.ENABLE_ASSERTS && !goog.isFunction(value)) {
        goog.asserts.doAssertFailure_('Expected function but got %s: %s.', [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
      }
      return (/** @type {!Function} */value
      );
    };

    /**
     * Checks if the value is an Object if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {!Object} The value, guaranteed to be a non-null object.
     * @throws {goog.asserts.AssertionError} When the value is not an object.
     */
    goog.asserts.assertObject = function (value, opt_message, var_args) {
      if (goog.asserts.ENABLE_ASSERTS && !goog.isObject(value)) {
        goog.asserts.doAssertFailure_('Expected object but got %s: %s.', [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
      }
      return (/** @type {!Object} */value
      );
    };

    /**
     * Checks if the value is an Array if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {!Array<?>} The value, guaranteed to be a non-null array.
     * @throws {goog.asserts.AssertionError} When the value is not an array.
     */
    goog.asserts.assertArray = function (value, opt_message, var_args) {
      if (goog.asserts.ENABLE_ASSERTS && !goog.isArray(value)) {
        goog.asserts.doAssertFailure_('Expected array but got %s: %s.', [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
      }
      return (/** @type {!Array<?>} */value
      );
    };

    /**
     * Checks if the value is a boolean if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {boolean} The value, guaranteed to be a boolean when asserts are
     *     enabled.
     * @throws {goog.asserts.AssertionError} When the value is not a boolean.
     */
    goog.asserts.assertBoolean = function (value, opt_message, var_args) {
      if (goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(value)) {
        goog.asserts.doAssertFailure_('Expected boolean but got %s: %s.', [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
      }
      return (/** @type {boolean} */value
      );
    };

    /**
     * Checks if the value is a DOM Element if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {!Element} The value, likely to be a DOM Element when asserts are
     *     enabled.
     * @throws {goog.asserts.AssertionError} When the value is not an Element.
     */
    goog.asserts.assertElement = function (value, opt_message, var_args) {
      if (goog.asserts.ENABLE_ASSERTS && (!goog.isObject(value) || value.nodeType != goog.dom.NodeType.ELEMENT)) {
        goog.asserts.doAssertFailure_('Expected Element but got %s: %s.', [goog.typeOf(value), value], opt_message, Array.prototype.slice.call(arguments, 2));
      }
      return (/** @type {!Element} */value
      );
    };

    /**
     * Checks if the value is an instance of the user-defined type if
     * goog.asserts.ENABLE_ASSERTS is true.
     *
     * The compiler may tighten the type returned by this function.
     *
     * @param {?} value The value to check.
     * @param {function(new: T, ...)} type A user-defined constructor.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @throws {goog.asserts.AssertionError} When the value is not an instance of
     *     type.
     * @return {T}
     * @template T
     */
    goog.asserts.assertInstanceof = function (value, type, opt_message, var_args) {
      if (goog.asserts.ENABLE_ASSERTS && !(value instanceof type)) {
        goog.asserts.doAssertFailure_('Expected instanceof %s but got %s.', [goog.asserts.getType_(type), goog.asserts.getType_(value)], opt_message, Array.prototype.slice.call(arguments, 3));
      }
      return value;
    };

    /**
     * Checks that no enumerable keys are present in Object.prototype. Such keys
     * would break most code that use {@code for (var ... in ...)} loops.
     */
    goog.asserts.assertObjectPrototypeIsIntact = function () {
      for (var key in Object.prototype) {
        goog.asserts.fail(key + ' should not be enumerable in Object.prototype.');
      }
    };

    /**
     * Returns the type of a value. If a constructor is passed, and a suitable
     * string cannot be found, 'unknown type name' will be returned.
     * @param {*} value A constructor, object, or primitive.
     * @return {string} The best display name for the value, or 'unknown type name'.
     * @private
     */
    goog.asserts.getType_ = function (value) {
      if (value instanceof Function) {
        return value.displayName || value.name || 'unknown type name';
      } else if (value instanceof Object) {
        return value.constructor.displayName || value.constructor.name || Object.prototype.toString.call(value);
      } else {
        return value === null ? 'null' : typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value);
      }
    };

    /**
     * @fileoverview Utility for fast string concatenation.
     */

    /**
     * Utility class to facilitate string concatenation.
     *
     * @param {*=} opt_a1 Optional first initial item to append.
     * @param {...*} var_args Other initial items to
     *     append, e.g., new goog.string.StringBuffer('foo', 'bar').
     * @constructor
     */
    goog.string.StringBuffer = function (opt_a1, var_args) {
      if (opt_a1 != null) {
        this.append.apply(this, arguments);
      }
    };

    /**
     * Internal buffer for the string to be concatenated.
     * @type {string}
     * @private
     */
    goog.string.StringBuffer.prototype.buffer_ = '';

    /**
     * Sets the contents of the string buffer object, replacing what's currently
     * there.
     *
     * @param {*} s String to set.
     */
    goog.string.StringBuffer.prototype.set = function (s) {
      this.buffer_ = '' + s;
    };

    /**
     * Appends one or more items to the buffer.
     *
     * Calling this with null, undefined, or empty arguments is an error.
     *
     * @param {*} a1 Required first string.
     * @param {*=} opt_a2 Optional second string.
     * @param {...?} var_args Other items to append,
     *     e.g., sb.append('foo', 'bar', 'baz').
     * @return {!goog.string.StringBuffer} This same StringBuffer object.
     * @suppress {duplicate}
     */
    goog.string.StringBuffer.prototype.append = function (a1, opt_a2, var_args) {
      // Use a1 directly to avoid arguments instantiation for single-arg case.
      this.buffer_ += String(a1);
      if (opt_a2 != null) {
        // second argument is undefined (null == undefined)
        for (var i = 1; i < arguments.length; i++) {
          this.buffer_ += arguments[i];
        }
      }
      return this;
    };

    /**
     * Clears the internal buffer.
     */
    goog.string.StringBuffer.prototype.clear = function () {
      this.buffer_ = '';
    };

    /**
     * @return {number} the length of the current contents of the buffer.
     */
    goog.string.StringBuffer.prototype.getLength = function () {
      return this.buffer_.length;
    };

    /**
     * @return {string} The concatenated string.
     * @override
     */
    goog.string.StringBuffer.prototype.toString = function () {
      return this.buffer_;
    };

    // Copyright 2012 The Closure Library Authors. All Rights Reserved.
    //
    // Licensed under the Apache License, Version 2.0 (the "License");
    // you may not use this file except in compliance with the License.
    // You may obtain a copy of the License at
    //
    //      http://www.apache.org/licenses/LICENSE-2.0
    //
    // Unless required by applicable law or agreed to in writing, software
    // distributed under the License is distributed on an "AS-IS" BASIS,
    // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    // See the License for the specific language governing permissions and
    // limitations under the License.

    /**
     * @fileoverview Soy data primitives.
     *
     * The goal is to encompass data types used by Soy, especially to mark content
     * as known to be "safe".
     *
     * @author gboyer@google.com (Garrett Boyer)
     */

    goog.soy = {};
    goog.soy.data = {};

    /**
     * A type of textual content.
     *
     * This is an enum of type Object so that these values are unforgeable.
     *
     * @enum {!Object}
     */
    goog.soy.data.SanitizedContentKind = {

      /**
       * A snippet of HTML that does not start or end inside a tag, comment, entity,
       * or DOCTYPE; and that does not contain any executable code
       * (JS, {@code <object>}s, etc.) from a different trust domain.
       */
      HTML: goog.DEBUG ? { sanitizedContentKindHtml: true } : {},

      /**
       * Executable Javascript code or expression, safe for insertion in a
       * script-tag or event handler context, known to be free of any
       * attacker-controlled scripts. This can either be side-effect-free
       * Javascript (such as JSON) or Javascript that's entirely under Google's
       * control.
       */
      JS: goog.DEBUG ? { sanitizedContentJsChars: true } : {},

      /** A properly encoded portion of a URI. */
      URI: goog.DEBUG ? { sanitizedContentUri: true } : {},

      /** A resource URI not under attacker control. */
      TRUSTED_RESOURCE_URI: goog.DEBUG ? { sanitizedContentTrustedResourceUri: true } : {},

      /**
       * Repeated attribute names and values. For example,
       * {@code dir="ltr" foo="bar" onclick="trustedFunction()" checked}.
       */
      ATTRIBUTES: goog.DEBUG ? { sanitizedContentHtmlAttribute: true } : {},

      // TODO: Consider separating rules, declarations, and values into
      // separate types, but for simplicity, we'll treat explicitly blessed
      // SanitizedContent as allowed in all of these contexts.
      /**
       * A CSS3 declaration, property, value or group of semicolon separated
       * declarations.
       */
      CSS: goog.DEBUG ? { sanitizedContentCss: true } : {},

      /**
       * Unsanitized plain-text content.
       *
       * This is effectively the "null" entry of this enum, and is sometimes used
       * to explicitly mark content that should never be used unescaped. Since any
       * string is safe to use as text, being of ContentKind.TEXT makes no
       * guarantees about its safety in any other context such as HTML.
       */
      TEXT: goog.DEBUG ? { sanitizedContentKindText: true } : {}
    };

    /**
     * A string-like object that carries a content-type and a content direction.
     *
     * IMPORTANT! Do not create these directly, nor instantiate the subclasses.
     * Instead, use a trusted, centrally reviewed library as endorsed by your team
     * to generate these objects. Otherwise, you risk accidentally creating
     * SanitizedContent that is attacker-controlled and gets evaluated unescaped in
     * templates.
     *
     * @constructor
     */
    goog.soy.data.SanitizedContent = function () {
      throw Error('Do not instantiate directly');
    };

    /**
     * The context in which this content is safe from XSS attacks.
     * @type {goog.soy.data.SanitizedContentKind}
     */
    goog.soy.data.SanitizedContent.prototype.contentKind;

    /**
     * The content's direction; null if unknown and thus to be estimated when
     * necessary.
     * @type {?goog.i18n.bidi.Dir}
     */
    goog.soy.data.SanitizedContent.prototype.contentDir = null;

    /**
     * The already-safe content.
     * @protected {string}
     */
    goog.soy.data.SanitizedContent.prototype.content;

    /**
     * Gets the already-safe content.
     * @return {string}
     */
    goog.soy.data.SanitizedContent.prototype.getContent = function () {
      return this.content;
    };

    /** @override */
    goog.soy.data.SanitizedContent.prototype.toString = function () {
      return this.content;
    };

    /**
     * An intermediary base class to allow the type system to sepcify text templates
     * without referencing the soydata package.
     * @extends {goog.soy.data.SanitizedContent}
     * @constructor
     */
    goog.soy.data.UnsanitizedText = function () {
      // TODO(gboyer): Delete this class after moving soydata to Closure.
      goog.soy.data.UnsanitizedText.base(this, 'constructor');
    };
    goog.inherits(goog.soy.data.UnsanitizedText, goog.soy.data.SanitizedContent);

    /*
     * Copyright 2008 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */

    /**
     * @fileoverview
     * Utility functions and classes for Soy.
     *
     * <p>
     * The top portion of this file contains utilities for Soy users:<ul>
     *   <li> soy.StringBuilder: Compatible with the 'stringbuilder' code style.
     * </ul>
     *
     * <p>
     * The bottom portion of this file contains utilities that should only be called
     * by Soy-generated JS code. Please do not use these functions directly from
     * your hand-writen code. Their names all start with '$$'.
     *
     */

    // -----------------------------------------------------------------------------
    // StringBuilder (compatible with the 'stringbuilder' code style).

    (function () {
      var soy = {};
      soy.asserts = {};
      soy.esc = {};
      var soydata = {};

      /**
       * Utility class to facilitate much faster string concatenation in IE,
       * using Array.join() rather than the '+' operator. For other browsers
       * we simply use the '+' operator.
       *
       * @param {Object} var_args Initial items to append,
       *     e.g., new soy.StringBuilder('foo', 'bar').
       * @constructor
       */
      soy.StringBuilder = goog.string.StringBuffer;

      // -----------------------------------------------------------------------------
      // soydata: Defines typed strings, e.g. an HTML string {@code "a<b>c"} is
      // semantically distinct from the plain text string {@code "a<b>c"} and smart
      // templates can take that distinction into account.

      /**
       * A type of textual content.
       *
       * This is an enum of type Object so that these values are unforgeable.
       *
       * @enum {!Object}
       */
      soydata.SanitizedContentKind = goog.soy.data.SanitizedContentKind;

      /**
       * Checks whether a given value is of a given content kind.
       *
       * @param {*} value The value to be examined.
       * @param {soydata.SanitizedContentKind} contentKind The desired content
       *     kind.
       * @return {boolean} Whether the given value is of the given kind.
       * @private
       */
      soydata.isContentKind = function (value, contentKind) {
        // TODO(user): This function should really include the assert on
        // value.constructor that is currently sprinkled at most of the call sites.
        // Unfortunately, that would require a (debug-mode-only) switch statement.
        // TODO(user): Perhaps we should get rid of the contentKind property
        // altogether and only at the constructor.
        return value != null && value.contentKind === contentKind;
      };

      /**
       * Content of type {@link soydata.SanitizedContentKind.URI}.
       *
       * The content is a URI chunk that the caller knows is safe to emit in a
       * template. The content direction is LTR.
       *
       * @constructor
       * @extends {goog.soy.data.SanitizedContent}
       */
      soydata.SanitizedUri = function () {
        goog.soy.data.SanitizedContent.call(this); // Throws an exception.
      };
      goog.inherits(soydata.SanitizedUri, goog.soy.data.SanitizedContent);

      /** @override */
      soydata.SanitizedUri.prototype.contentKind = soydata.SanitizedContentKind.URI;

      /** @override */
      soydata.SanitizedUri.prototype.contentDir = goog.i18n.bidi.Dir.LTR;

      /**
       * Unsanitized plain text string.
       *
       * While all strings are effectively safe to use as a plain text, there are no
       * guarantees about safety in any other context such as HTML. This is
       * sometimes used to mark that should never be used unescaped.
       *
       * @param {*} content Plain text with no guarantees.
       * @param {?goog.i18n.bidi.Dir=} opt_contentDir The content direction; null if
       *     unknown and thus to be estimated when necessary. Default: null.
       * @constructor
       * @extends {goog.soy.data.UnsanitizedText}
       */
      soydata.UnsanitizedText = function (content, opt_contentDir) {
        /** @override */
        this.content = String(content);
        this.contentDir = opt_contentDir != null ? opt_contentDir : null;
      };
      goog.inherits(soydata.UnsanitizedText, goog.soy.data.UnsanitizedText);

      /** @override */
      soydata.UnsanitizedText.prototype.contentKind = soydata.SanitizedContentKind.TEXT;

      /**
       * Empty string, used as a type in Soy templates.
       * @enum {string}
       * @private
       */
      soydata.$$EMPTY_STRING_ = {
        VALUE: ''
      };

      /**
       * Creates a factory for SanitizedContent types.
       *
       * This is a hack so that the soydata.VERY_UNSAFE.ordainSanitized* can
       * instantiate Sanitized* classes, without making the Sanitized* constructors
       * publicly usable. Requiring all construction to use the VERY_UNSAFE names
       * helps callers and their reviewers easily tell that creating SanitizedContent
       * is not always safe and calls for careful review.
       *
       * @param {function(new: T)} ctor A constructor.
       * @return {!function(*, ?goog.i18n.bidi.Dir=): T} A factory that takes
       *     content and an optional content direction and returns a new instance. If
       *     the content direction is undefined, ctor.prototype.contentDir is used.
       * @template T
       * @private
       */
      soydata.$$makeSanitizedContentFactory_ = function (ctor) {
        /**
         * @param {string} content
         * @constructor
         * @extends {goog.soy.data.SanitizedContent}
         */
        function InstantiableCtor(content) {
          /** @override */
          this.content = content;
        }
        InstantiableCtor.prototype = ctor.prototype;
        /**
         * Creates a ctor-type SanitizedContent instance.
         *
         * @param {*} content The content to put in the instance.
         * @param {?goog.i18n.bidi.Dir=} opt_contentDir The content direction. If
         *     undefined, ctor.prototype.contentDir is used.
         * @return {!goog.soy.data.SanitizedContent} The new instance. It is actually
         *     of type T above (ctor's type, a descendant of SanitizedContent), but
         *     there is no way to express that here.
         */
        function sanitizedContentFactory(content, opt_contentDir) {
          var result = new InstantiableCtor(String(content));
          if (opt_contentDir !== undefined) {
            result.contentDir = opt_contentDir;
          }
          return result;
        }
        return sanitizedContentFactory;
      };

      /**
       * Creates a factory for SanitizedContent types that should always have their
       * default directionality.
       *
       * This is a hack so that the soydata.VERY_UNSAFE.ordainSanitized* can
       * instantiate Sanitized* classes, without making the Sanitized* constructors
       * publicly usable. Requiring all construction to use the VERY_UNSAFE names
       * helps callers and their reviewers easily tell that creating SanitizedContent
       * is not always safe and calls for careful review.
       *
       * @param {function(new: T, string)} ctor A constructor.
       * @return {!function(*): T} A factory that takes content and returns a new
       *     instance (with default directionality, i.e. ctor.prototype.contentDir).
       * @template T
       * @private
       */
      soydata.$$makeSanitizedContentFactoryWithDefaultDirOnly_ = function (ctor) {
        /**
         * @param {string} content
         * @constructor
         * @extends {goog.soy.data.SanitizedContent}
         */
        function InstantiableCtor(content) {
          /** @override */
          this.content = content;
        }
        InstantiableCtor.prototype = ctor.prototype;
        /**
         * Creates a ctor-type SanitizedContent instance.
         *
         * @param {*} content The content to put in the instance.
         * @return {!goog.soy.data.SanitizedContent} The new instance. It is actually
         *     of type T above (ctor's type, a descendant of SanitizedContent), but
         *     there is no way to express that here.
         */
        function sanitizedContentFactory(content) {
          var result = new InstantiableCtor(String(content));
          return result;
        }
        return sanitizedContentFactory;
      };

      // -----------------------------------------------------------------------------
      // Sanitized content ordainers. Please use these with extreme caution (with the
      // exception of markUnsanitizedText). A good recommendation is to limit usage
      // of these to just a handful of files in your source tree where usages can be
      // carefully audited.


      /**
       * Protects a string from being used in an noAutoescaped context.
       *
       * This is useful for content where there is significant risk of accidental
       * unescaped usage in a Soy template. A great case is for user-controlled
       * data that has historically been a source of vulernabilities.
       *
       * @param {*} content Text to protect.
       * @param {?goog.i18n.bidi.Dir=} opt_contentDir The content direction; null if
       *     unknown and thus to be estimated when necessary. Default: null.
       * @return {!soydata.UnsanitizedText} A wrapper that is rejected by the
       *     Soy noAutoescape print directive.
       */
      soydata.markUnsanitizedText = function (content, opt_contentDir) {
        return new soydata.UnsanitizedText(content, opt_contentDir);
      };

      soydata.VERY_UNSAFE = {};

      /**
      * Takes a leap of faith that the provided content is "safe" to use as a URI
      * in a Soy template.
      *
      * This creates a Soy SanitizedContent object which indicates to Soy there is
      * no need to escape it when printed as a URI (e.g. in an href or src
      * attribute), such as if it's already been encoded or  if it's a Javascript:
      * URI.
      *
      * @param {*} content A chunk of URI that the caller knows is safe to
      *     emit in a template.
      * @return {!soydata.SanitizedUri} Sanitized content wrapper that indicates to
      *     Soy not to escape or filter when printed in URI context.
      */
      soydata.VERY_UNSAFE.ordainSanitizedUri = soydata.$$makeSanitizedContentFactoryWithDefaultDirOnly_(soydata.SanitizedUri);

      // -----------------------------------------------------------------------------
      // Below are private utilities to be used by Soy-generated code only.

      /**
       * Builds an augmented map. The returned map will contain mappings from both
       * the base map and the additional map. If the same key appears in both, then
       * the value from the additional map will be visible, while the value from the
       * base map will be hidden. The base map will be used, but not modified.
       *
       * @param {!Object} baseMap The original map to augment.
       * @param {!Object} additionalMap A map containing the additional mappings.
       * @return {!Object} An augmented map containing both the original and
       *     additional mappings.
       */
      soy.$$augmentMap = function (baseMap, additionalMap) {
        return soy.$$assignDefaults(soy.$$assignDefaults({}, additionalMap), baseMap);
      };

      /**
       * Copies extra properties into an object if they do not already exist. The
       * destination object is mutated in the process.
       *
       * @param {!Object} obj The destination object to update.
       * @param {!Object} defaults An object with default properties to apply.
       * @return {!Object} The destination object for convenience.
       */
      soy.$$assignDefaults = function (obj, defaults) {
        for (var key in defaults) {
          if (!(key in obj)) {
            obj[key] = defaults[key];
          }
        }

        return obj;
      };

      /**
       * Checks that the given map key is a string.
       * @param {*} key Key to check.
       * @return {string} The given key.
       */
      soy.$$checkMapKey = function (key) {
        // TODO: Support map literal with nonstring key.
        if (typeof key != 'string') {
          throw Error('Map literal\'s key expression must evaluate to string' + ' (encountered type "' + (typeof key === 'undefined' ? 'undefined' : babelHelpers.typeof(key)) + '").');
        }
        return key;
      };

      /**
       * Gets the keys in a map as an array. There are no guarantees on the order.
       * @param {Object} map The map to get the keys of.
       * @return {!Array<string>} The array of keys in the given map.
       */
      soy.$$getMapKeys = function (map) {
        var mapKeys = [];
        for (var key in map) {
          mapKeys.push(key);
        }
        return mapKeys;
      };

      /**
       * Returns the argument if it is not null.
       *
       * @param {T} val The value to check
       * @return {T} val if is isn't null
       * @template T
       */
      soy.$$checkNotNull = function (val) {
        if (val == null) {
          throw Error('unexpected null value');
        }
        return val;
      };

      /**
       * Gets a consistent unique id for the given delegate template name. Two calls
       * to this function will return the same id if and only if the input names are
       * the same.
       *
       * <p> Important: This function must always be called with a string constant.
       *
       * <p> If Closure Compiler is not being used, then this is just this identity
       * function. If Closure Compiler is being used, then each call to this function
       * will be replaced with a short string constant, which will be consistent per
       * input name.
       *
       * @param {string} delTemplateName The delegate template name for which to get a
       *     consistent unique id.
       * @return {string} A unique id that is consistent per input name.
       *
       * @consistentIdGenerator
       */
      soy.$$getDelTemplateId = function (delTemplateName) {
        return delTemplateName;
      };

      /**
       * Map from registered delegate template key to the priority of the
       * implementation.
       * @type {Object}
       * @private
       */
      soy.$$DELEGATE_REGISTRY_PRIORITIES_ = {};

      /**
       * Map from registered delegate template key to the implementation function.
       * @type {Object}
       * @private
       */
      soy.$$DELEGATE_REGISTRY_FUNCTIONS_ = {};

      /**
       * Registers a delegate implementation. If the same delegate template key (id
       * and variant) has been registered previously, then priority values are
       * compared and only the higher priority implementation is stored (if
       * priorities are equal, an error is thrown).
       *
       * @param {string} delTemplateId The delegate template id.
       * @param {string} delTemplateVariant The delegate template variant (can be
       *     empty string).
       * @param {number} delPriority The implementation's priority value.
       * @param {Function} delFn The implementation function.
       */
      soy.$$registerDelegateFn = function (delTemplateId, delTemplateVariant, delPriority, delFn) {

        var mapKey = 'key_' + delTemplateId + ':' + delTemplateVariant;
        var currPriority = soy.$$DELEGATE_REGISTRY_PRIORITIES_[mapKey];
        if (currPriority === undefined || delPriority > currPriority) {
          // Registering new or higher-priority function: replace registry entry.
          soy.$$DELEGATE_REGISTRY_PRIORITIES_[mapKey] = delPriority;
          soy.$$DELEGATE_REGISTRY_FUNCTIONS_[mapKey] = delFn;
        } else if (delPriority == currPriority) {
          // Registering same-priority function: error.
          throw Error('Encountered two active delegates with the same priority ("' + delTemplateId + ':' + delTemplateVariant + '").');
        } else {
          // Registering lower-priority function: do nothing.
        }
      };

      /**
       * Retrieves the (highest-priority) implementation that has been registered for
       * a given delegate template key (id and variant). If no implementation has
       * been registered for the key, then the fallback is the same id with empty
       * variant. If the fallback is also not registered, and allowsEmptyDefault is
       * true, then returns an implementation that is equivalent to an empty template
       * (i.e. rendered output would be empty string).
       *
       * @param {string} delTemplateId The delegate template id.
       * @param {string} delTemplateVariant The delegate template variant (can be
       *     empty string).
       * @param {boolean} allowsEmptyDefault Whether to default to the empty template
       *     function if there's no active implementation.
       * @return {Function} The retrieved implementation function.
       */
      soy.$$getDelegateFn = function (delTemplateId, delTemplateVariant, allowsEmptyDefault) {

        var delFn = soy.$$DELEGATE_REGISTRY_FUNCTIONS_['key_' + delTemplateId + ':' + delTemplateVariant];
        if (!delFn && delTemplateVariant != '') {
          // Fallback to empty variant.
          delFn = soy.$$DELEGATE_REGISTRY_FUNCTIONS_['key_' + delTemplateId + ':'];
        }

        if (delFn) {
          return delFn;
        } else if (allowsEmptyDefault) {
          return soy.$$EMPTY_TEMPLATE_FN_;
        } else {
          throw Error('Found no active impl for delegate call to "' + delTemplateId + ':' + delTemplateVariant + '" (and not allowemptydefault="true").');
        }
      };

      /**
       * Private helper soy.$$getDelegateFn(). This is the empty template function
       * that is returned whenever there's no delegate implementation found.
       *
       * @param {Object<string, *>=} opt_data
       * @param {soy.StringBuilder=} opt_sb
       * @param {Object<string, *>=} opt_ijData
       * @return {string}
       * @private
       */
      soy.$$EMPTY_TEMPLATE_FN_ = function (opt_data, opt_sb, opt_ijData) {
        return '';
      };

      // -----------------------------------------------------------------------------
      // Basic directives/functions.


      /**
       * Truncates a string to a given max length (if it's currently longer),
       * optionally adding ellipsis at the end.
       *
       * @param {*} str The string to truncate. Can be other types, but the value will
       *     be coerced to a string.
       * @param {number} maxLen The maximum length of the string after truncation
       *     (including ellipsis, if applicable).
       * @param {boolean} doAddEllipsis Whether to add ellipsis if the string needs
       *     truncation.
       * @return {string} The string after truncation.
       */
      soy.$$truncate = function (str, maxLen, doAddEllipsis) {

        str = String(str);
        if (str.length <= maxLen) {
          return str; // no need to truncate
        }

        // If doAddEllipsis, either reduce maxLen to compensate, or else if maxLen is
        // too small, just turn off doAddEllipsis.
        if (doAddEllipsis) {
          if (maxLen > 3) {
            maxLen -= 3;
          } else {
            doAddEllipsis = false;
          }
        }

        // Make sure truncating at maxLen doesn't cut up a unicode surrogate pair.
        if (soy.$$isHighSurrogate_(str.charAt(maxLen - 1)) && soy.$$isLowSurrogate_(str.charAt(maxLen))) {
          maxLen -= 1;
        }

        // Truncate.
        str = str.substring(0, maxLen);

        // Add ellipsis.
        if (doAddEllipsis) {
          str += '...';
        }

        return str;
      };

      /**
       * Private helper for $$truncate() to check whether a char is a high surrogate.
       * @param {string} ch The char to check.
       * @return {boolean} Whether the given char is a unicode high surrogate.
       * @private
       */
      soy.$$isHighSurrogate_ = function (ch) {
        return 0xD800 <= ch && ch <= 0xDBFF;
      };

      /**
       * Private helper for $$truncate() to check whether a char is a low surrogate.
       * @param {string} ch The char to check.
       * @return {boolean} Whether the given char is a unicode low surrogate.
       * @private
       */
      soy.$$isLowSurrogate_ = function (ch) {
        return 0xDC00 <= ch && ch <= 0xDFFF;
      };

      // -----------------------------------------------------------------------------
      // Assertion methods used by runtime.

      /**
       * Checks if the type assertion is true if goog.asserts.ENABLE_ASSERTS is
       * true. Report errors on runtime types if goog.DEBUG is true.
       * @template T
       * @param {T} typeCheck An condition for type checks.
       * @param {string} paramName The Soy name of the parameter.
       * @param {?Object} param The resolved JS object for the parameter.
       * @param {!string} jsDocTypeStr JSDoc type str to cast the value to if the
       *     type test succeeds
       * @param {...*} var_args The items to substitute into the failure message.
       * @return {T} The value of the condition.
       * @throws {goog.asserts.AssertionError} When the condition evaluates to false.
       */
      soy.asserts.assertType = function (typeCheck, paramName, param, jsDocTypeStr, var_args) {
        var msg = 'expected param ' + paramName + ' of type ' + jsDocTypeStr + (goog.DEBUG ? ', but got ' + goog.debug.runtimeType(param) : '') + '.';
        return goog.asserts.assert(typeCheck, msg, var_args);
      };

      // -----------------------------------------------------------------------------
      // Generated code.


      // START GENERATED CODE FOR ESCAPERS.

      /**
       * @type {function (*) : string}
       */
      soy.esc.$$escapeHtmlHelper = function (v) {
        return goog.string.htmlEscape(String(v));
      };

      /**
       * Allows only data-protocol image URI's.
       *
       * @param {*} value The value to process. May not be a string, but the value
       *     will be coerced to a string.
       * @return {!soydata.SanitizedUri} An escaped version of value.
       */
      soy.$$filterImageDataUri = function (value) {
        // NOTE: Even if it's a SanitizedUri, we will still filter it.
        return soydata.VERY_UNSAFE.ordainSanitizedUri(soy.esc.$$filterImageDataUriHelper(value));
      };

      /**
       * A pattern that vets values produced by the named directives.
       * @private {!RegExp}
       */
      soy.esc.$$FILTER_FOR_FILTER_IMAGE_DATA_URI_ = /^data:image\/(?:bmp|gif|jpe?g|png|tiff|webp);base64,[a-z0-9+\/]+=*$/i;

      /**
       * A helper for the Soy directive |filterImageDataUri
       * @param {*} value Can be of any type but will be coerced to a string.
       * @return {string} The escaped text.
       */
      soy.esc.$$filterImageDataUriHelper = function (value) {
        var str = String(value);
        if (!soy.esc.$$FILTER_FOR_FILTER_IMAGE_DATA_URI_.test(str)) {
          goog.asserts.fail('Bad value `%s` for |filterImageDataUri', [str]);
          return 'data:image/gif;base64,zSoyz';
        }
        return str;
      };

      // END GENERATED CODE

      goog.loadModule(function () {
        goog.module('soy');
        return soy;
      });

      goog.loadModule(function () {
        goog.module('soydata');
        return soydata;
      });

      goog.loadModule(function () {
        goog.module('soy.asserts');
        return soy;
      });
    })();

    /* jshint ignore:end */

    goog.loadModule(function () {
      goog.module('incrementaldom');
      return IncrementalDOM;
    });
  }).call(window);
}).call(this);
"use strict";

(function () {
	/* jshint ignore:start */

	/*
  * HTML5 Parser By Sam Blowes
  *
  * Designed for HTML5 documents
  *
  * Original code by John Resig (ejohn.org)
  * http://ejohn.org/blog/pure-javascript-html-parser/
  * Original code by Erik Arvidsson, Mozilla Public License
  * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
  *
  * ----------------------------------------------------------------------------
  * License
  * ----------------------------------------------------------------------------
  *
  * This code is triple licensed using Apache Software License 2.0,
  * Mozilla Public License or GNU Public License
  *
  * ////////////////////////////////////////////////////////////////////////////
  *
  * Licensed under the Apache License, Version 2.0 (the "License"); you may not
  * use this file except in compliance with the License.  You may obtain a copy
  * of the License at http://www.apache.org/licenses/LICENSE-2.0
  *
  * ////////////////////////////////////////////////////////////////////////////
  *
  * The contents of this file are subject to the Mozilla Public License
  * Version 1.1 (the "License"); you may not use this file except in
  * compliance with the License. You may obtain a copy of the License at
  * http://www.mozilla.org/MPL/
  *
  * Software distributed under the License is distributed on an "AS IS"
  * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
  * License for the specific language governing rights and limitations
  * under the License.
  *
  * The Original Code is Simple HTML Parser.
  *
  * The Initial Developer of the Original Code is Erik Arvidsson.
  * Portions created by Erik Arvidssson are Copyright (C) 2004. All Rights
  * Reserved.
  *
  * ////////////////////////////////////////////////////////////////////////////
  *
  * This program is free software; you can redistribute it and/or
  * modify it under the terms of the GNU General Public License
  * as published by the Free Software Foundation; either version 2
  * of the License, or (at your option) any later version.
  *
  * This program is distributed in the hope that it will be useful,
  * but WITHOUT ANY WARRANTY; without even the implied warranty of
  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  * GNU General Public License for more details.
  *
  * You should have received a copy of the GNU General Public License
  * along with this program; if not, write to the Free Software
  * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
  * @license
  */

	/*
  *
  * ----------------------------------------------------------------------------
  * Usage
  * ----------------------------------------------------------------------------
  *
  * // Use like so:
  * HTMLParser(htmlString, {
  *     start: function(tag, attrs, unary) {},
  *     end: function(tag) {},
  *     chars: function(text) {},
  *     comment: function(text) {}
  * });
  *
  * // or to get an XML string:
  * HTMLtoXML(htmlString);
  *
  * // or to get an XML DOM Document
  * HTMLtoDOM(htmlString);
  *
  * // or to inject into an existing document/DOM node
  * HTMLtoDOM(htmlString, document);
  * HTMLtoDOM(htmlString, document.body);
  *
  */

	(function () {
		// Regular Expressions for parsing tags and attributes
		var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
		    endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
		    attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

		// Empty Elements - HTML 5
		var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr");

		// Block Elements - HTML 5
		var block = makeMap("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video");

		// Inline Elements - HTML 5
		var inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");

		// Elements that you can, intentionally, leave open
		// (and which close themselves)
		var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

		// Attributes that have their values filled in disabled="disabled"
		var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

		// Special Elements (can contain anything)
		var special = makeMap("script,style");

		var HTMLParser = window.HTMLParser = function (html, handler) {
			var index,
			    chars,
			    match,
			    stack = [],
			    last = html;
			stack.last = function () {
				return this[this.length - 1];
			};

			while (html) {
				chars = true;

				// Make sure we're not in a script or style element
				if (!stack.last() || !special[stack.last()]) {

					// Comment
					if (html.indexOf("<!--") == 0) {
						index = html.indexOf("-->");

						if (index >= 0) {
							if (handler.comment) handler.comment(html.substring(4, index));
							html = html.substring(index + 3);
							chars = false;
						}

						// end tag
					} else if (html.indexOf("</") == 0) {
						match = html.match(endTag);

						if (match) {
							html = html.substring(match[0].length);
							match[0].replace(endTag, parseEndTag);
							chars = false;
						}

						// start tag
					} else if (html.indexOf("<") == 0) {
						match = html.match(startTag);

						if (match) {
							html = html.substring(match[0].length);
							match[0].replace(startTag, parseStartTag);
							chars = false;
						}
					}

					if (chars) {
						index = html.indexOf("<");

						var text = index < 0 ? html : html.substring(0, index);
						html = index < 0 ? "" : html.substring(index);

						if (handler.chars) handler.chars(text);
					}
				} else {
					html = html.replace(new RegExp("([\\s\\S]*?)<\/" + stack.last() + "[^>]*>"), function (all, text) {
						text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2");
						if (handler.chars) handler.chars(text);

						return "";
					});

					parseEndTag("", stack.last());
				}

				if (html == last) throw "Parse Error: " + html;
				last = html;
			}

			// Clean up any remaining tags
			parseEndTag();

			function parseStartTag(tag, tagName, rest, unary) {
				tagName = tagName.toLowerCase();

				if (block[tagName]) {
					// Close last tag if it's inline, except if it's a "span" (since people
					// usually add anything they want to spans, and browsers allow it).
					// Note: this exception for "span" was added manually (i.e. it's not
					// present in the original code).
					while (stack.last() && inline[stack.last()] && stack.last() !== 'span') {
						parseEndTag("", stack.last());
					}
				}

				if (closeSelf[tagName] && stack.last() == tagName) {
					parseEndTag("", tagName);
				}

				unary = empty[tagName] || !!unary;

				if (!unary) stack.push(tagName);

				if (handler.start) {
					var attrs = [];

					rest.replace(attr, function (match, name) {
						var value = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : fillAttrs[name] ? name : "";

						attrs.push({
							name: name,
							value: value,
							escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') //"
						});
					});

					if (handler.start) handler.start(tagName, attrs, unary);
				}
			}

			function parseEndTag(tag, tagName) {
				// If no tag name is provided, clean shop
				if (!tagName) var pos = 0;

				// Find the closest opened tag of the same type
				else for (var pos = stack.length - 1; pos >= 0; pos--) {
						if (stack[pos] == tagName) break;
					}if (pos >= 0) {
					// Close all the open elements, up the stack
					for (var i = stack.length - 1; i >= pos; i--) {
						if (handler.end) handler.end(stack[i]);
					} // Remove the open elements from the stack
					stack.length = pos;
				}
			}
		};

		function makeMap(str) {
			var obj = {},
			    items = str.split(",");
			for (var i = 0; i < items.length; i++) {
				obj[items[i]] = true;
			}return obj;
		}
	}).call(this);

	/* jshint ignore:end */
}).call(this);
'use strict';

// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Unescapes an HTML string using a DOM to resolve non-XML, non-numeric
 * entities. This function is XSS-safe and whitespace-preserving.
 * @private
 * @param {string} str The string to unescape.
 * @return {string} The unescaped {@code str} string.
 */

(function () {
  function unescape(str) {
    /** @type {!Object<string, string>} */
    var seen = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"' };
    var div = document.createElement('div');

    // Match as many valid entity characters as possible. If the actual entity
    // happens to be shorter, it will still work as innerHTML will return the
    // trailing characters unchanged. Since the entity characters do not include
    // open angle bracket, there is no chance of XSS from the innerHTML use.
    // Since no whitespace is passed to innerHTML, whitespace is preserved.
    return str.replace(HTML_ENTITY_PATTERN_, function (s, entity) {
      // Check for cached entity.
      var value = seen[s];
      if (value) {
        return value;
      }
      // Check for numeric entity.
      if (entity.charAt(0) === '#') {
        // Prefix with 0 so that hex entities (e.g. &#x10) parse as hex numbers.
        var n = Number('0' + entity.substr(1));
        if (!isNaN(n)) {
          value = String.fromCharCode(n);
        }
      }
      // Fall back to innerHTML otherwise.
      if (!value) {
        // Append a non-entity character to avoid a bug in Webkit that parses
        // an invalid entity at the end of innerHTML text as the empty string.
        div.innerHTML = s + ' ';
        // Then remove the trailing character from the result.
        value = div.firstChild.nodeValue.slice(0, -1);
      }
      // Cache and return.
      seen[s] = value;
      return value;
    });
  }

  this['metal']['unescape'] = unescape;

  /**
   * Regular expression that matches an HTML entity.
   * @type {!RegExp}
   */

  var HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
}).call(this);
'use strict';

(function () {
	var unescape = this['metal']['unescape'];


	var parser_;

	var HTML2IncDom = function () {
		function HTML2IncDom() {
			babelHelpers.classCallCheck(this, HTML2IncDom);
		}

		babelHelpers.createClass(HTML2IncDom, null, [{
			key: 'buildFn',

			/**
    * Should convert the given html string to a function with calls to
    * incremental dom methods.
    * @param {string} html
    * @return {!function()} Function with incremental dom calls for building
    *     the given html string.
    */
			value: function buildFn(html) {
				return function () {
					return HTML2IncDom.run(html);
				};
			}

			/**
    * Gets the html parser being currently used.
    * @return {!function()}
    */

		}, {
			key: 'getParser',
			value: function getParser() {
				return parser_ || window.HTMLParser;
			}

			/**
    * Should convert the given html string to calls to incremental dom methods.
    * @param {string} html
    */

		}, {
			key: 'run',
			value: function run(html) {
				HTML2IncDom.getParser()(html, {
					start: function start(tag, attrs, unary) {
						var fn = unary ? IncrementalDOM.elementVoid : IncrementalDOM.elementOpen;
						var args = [tag, null, []];
						for (var i = 0; i < attrs.length; i++) {
							args.push(attrs[i].name, attrs[i].value);
						}
						fn.apply(null, args);
					},

					end: function end(tag) {
						IncrementalDOM.elementClose(tag);
					},

					chars: function chars(text) {
						IncrementalDOM.text(text, unescape);
					}
				});
			}

			/**
    * Changes the function that will be used to parse html strings. By default
    * this will use the `HTMLParser` function from
    * https://github.com/blowsie/Pure-JavaScript-HTML5-Parser. This will accept
    * any function that follows that same api, basically accepting the html
    * string and an object with `start`, `end` and `chars` functions to be called
    * during the parsing.
    * @param {!function(string, !Object} newParser
    */

		}, {
			key: 'setParser',
			value: function setParser(newParser) {
				parser_ = newParser;
			}
		}]);
		return HTML2IncDom;
	}();

	this['metal']['HTML2IncDom'] = HTML2IncDom;
}).call(this);
'use strict';

(function () {
  var HTML2IncDom = this['metal']['HTML2IncDom'];
  this['metal']['withParser'] = HTML2IncDom;
}).call(this);
'use strict';

(function () {
	var SoyAop = {
		/**
   * The functions that should be called instead of a template call. The last
   * function in the array is the one that is intercepting at the moment. If the
   * array is empty, the original function will be called instead.
   * @type {!Array<function()>}
   * @protected
   */
		interceptFns_: [],

		/**
   * Gets the original function of the given template function. If no original exists,
   * returns the given function itself.
   * @param {!function()} fn
   * @return {!function()}
   */
		getOriginalFn: function getOriginalFn(fn) {
			return fn.originalFn ? fn.originalFn : fn;
		},

		/**
   * Handles a template call, calling the current interception function if one
   * is set, or otherwise just calling the original function instead.
   * @param {!function()} originalFn The original template function that was
   *     intercepted.
   * @param {Object} opt_data Template data object.
   * @param {*} opt_ignored
   * @param {Object} opt_ijData Template injected data object.
   * @return {*} The return value of the function that is called to handle this
   *     interception.
   */
		handleTemplateCall_: function handleTemplateCall_(originalFn, opt_data, opt_ignored, opt_ijData) {
			var interceptFn = SoyAop.interceptFns_[SoyAop.interceptFns_.length - 1];
			if (interceptFn) {
				return interceptFn.call(null, originalFn, opt_data, opt_ignored, opt_ijData);
			} else {
				return originalFn.call(null, opt_data, opt_ignored, opt_ijData);
			}
		},

		/**
   * Registers a template function that should be intercepted.
   * @param {!Object} templates The original templates object containing the
   *     function to be intercepted.
   * @param {string} name The name of the template function to intercept.
   */
		registerForInterception: function registerForInterception(templates, name) {
			var originalFn = templates[name];
			if (!originalFn.originalFn) {
				templates[name] = SoyAop.handleTemplateCall_.bind(null, originalFn);
				templates[name].originalFn = originalFn;
			}
		},

		/**
   * Starts intercepting all template calls, replacing them with a call to the
   * given function instead.
   * @param {!function()} fn
   */
		startInterception: function startInterception(fn) {
			SoyAop.interceptFns_.push(fn);
		},

		/**
   * Stops intercepting template calls.
   */
		stopAllInterceptions: function stopAllInterceptions() {
			SoyAop.interceptFns_ = [];
		},

		/**
   * Stops intercepting template calls with the last registered function.
   */
		stopInterception: function stopInterception() {
			SoyAop.interceptFns_.pop();
		}
	};

	this['metal']['SoyAop'] = SoyAop;
}).call(this);
'use strict';

(function () {
	var isFunction = this['metalNamed']['metal']['isFunction'];
	var isObject = this['metalNamed']['metal']['isObject'];
	var isString = this['metalNamed']['metal']['isString'];
	var object = this['metalNamed']['metal']['object'];
	var ComponentRegistry = this['metalNamed']['component']['ComponentRegistry'];
	var HTML2IncDom = this['metal']['withParser'];
	var IncrementalDomRenderer = this['metal']['IncrementalDomRenderer'];
	var SoyAop = this['metal']['SoyAop'];

	// The injected data that will be passed to soy templates.

	var ijData = {};

	var Soy = function (_IncrementalDomRender) {
		babelHelpers.inherits(Soy, _IncrementalDomRender);

		function Soy() {
			babelHelpers.classCallCheck(this, Soy);
			return babelHelpers.possibleConstructorReturn(this, (Soy.__proto__ || Object.getPrototypeOf(Soy)).apply(this, arguments));
		}

		babelHelpers.createClass(Soy, [{
			key: 'getExtraDataConfig',

			/**
    * Adds the template params to the component's state, if they don't exist yet.
    * @param {!Component} component
    * @return {Object}
    */
			value: function getExtraDataConfig(component) {
				var elementTemplate = component.constructor.TEMPLATE;
				if (!isFunction(elementTemplate)) {
					return;
				}

				elementTemplate = SoyAop.getOriginalFn(elementTemplate);
				this.soyParamTypes_ = elementTemplate.types || {};

				var keys = elementTemplate.params || [];
				var configs = {};
				for (var i = 0; i < keys.length; i++) {
					if (!component[keys[i]]) {
						configs[keys[i]] = {};
					}
				}
				return configs;
			}

			/**
    * Copies the component's state to an object so it can be passed as it's
    * template call's data. The copying needs to be done because, if the component
    * itself is passed directly, some problems occur when soy tries to merge it
    * with other data, due to property getters and setters. This is safer.
    * @param {!Component} component
    * @param {!Array<string>} params The params used by this template.
    * @return {!Object}
    * @protected
    */

		}, {
			key: 'buildTemplateData_',
			value: function buildTemplateData_(component, params) {
				var _this2 = this;

				var data = object.mixin({}, this.getConfig(component));
				component.getStateKeys().forEach(function (key) {
					var value = component[key];
					if (_this2.isHtmlParam_(component, key)) {
						value = soyRenderer.toIncDom(value);
					}
					data[key] = value;
				});
				for (var i = 0; i < params.length; i++) {
					if (!data[params[i]] && isFunction(component[params[i]])) {
						data[params[i]] = component[params[i]].bind(component);
					}
				}
				return data;
			}

			/**
    * Returns the requested template function. This function will be wrapped in
    * another though, just to defer the requirement of the template's module
    * being ready until the function is actually called.
    * @param {string} namespace The soy template's namespace.
    * @param {string} templateName The name of the template function.
    * @return {!function()}
    */

		}, {
			key: 'getTemplate',
			value: function getTemplate(namespace, templateName) {
				return function (opt_data, opt_ignored, opt_ijData) {
					if (!goog.loadedModules_[namespace]) {
						throw new Error('No template with namespace "' + namespace + '" has been loaded yet.');
					}
					return goog.loadedModules_[namespace][templateName](opt_data, opt_ignored, opt_ijData);
				};
			}

			/**
    * Handles an intercepted soy template call. If the call is for a component's
    * main template, then it will be replaced with a call that incremental dom
    * can use for both handling an instance of that component and rendering it.
    * @param {!function()} originalFn The original template function that was
    *     intercepted.
    * @param {Object} data The data the template was called with.
    * @protected
    */

		}, {
			key: 'handleInterceptedCall_',
			value: function handleInterceptedCall_(originalFn) {
				var opt_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

				var args = [originalFn.componentCtor, null, []];
				for (var key in opt_data) {
					args.push(key, opt_data[key]);
				}
				IncrementalDOM.elementVoid.apply(null, args);
			}

			/**
    * Checks if the given param type is html.
    * @param {!Component} component
    * @param {string} name
    * @protected
    */

		}, {
			key: 'isHtmlParam_',
			value: function isHtmlParam_(component, name) {
				var state = component.getDataManager().getStateInstance(component);
				if (state.getStateKeyConfig(name).isHtml) {
					return true;
				}

				var elementTemplate = SoyAop.getOriginalFn(component.constructor.TEMPLATE);
				var type = (elementTemplate.types || {})[name] || '';
				return type.split('|').indexOf('html') !== -1;
			}

			/**
    * Registers the given templates to be used by `Soy` for the specified
    * component constructor.
    * @param {!Function} componentCtor The constructor of the component that
    *     should use the given templates.
    * @param {!Object} templates Object containing soy template functions.
    * @param {string=} mainTemplate The name of the main template that should be
    *     used to render the component. Defaults to "render".
    */

		}, {
			key: 'register',
			value: function register(componentCtor, templates) {
				var mainTemplate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'render';

				componentCtor.RENDERER = soyRenderer;
				componentCtor.TEMPLATE = SoyAop.getOriginalFn(templates[mainTemplate]);
				componentCtor.TEMPLATE.componentCtor = componentCtor;
				SoyAop.registerForInterception(templates, mainTemplate);
				ComponentRegistry.register(componentCtor);
			}

			/**
    * Overrides the default method from `IncrementalDomRenderer` so the component's
    * soy template can be used for rendering.
    * @param {!Component} component
    * @param {!Object} data Data passed to the component when rendering it.
    * @override
    */

		}, {
			key: 'renderIncDom',
			value: function renderIncDom(component) {
				var elementTemplate = component.constructor.TEMPLATE;
				if (isFunction(elementTemplate) && !component.render) {
					elementTemplate = SoyAop.getOriginalFn(elementTemplate);
					SoyAop.startInterception(this.handleInterceptedCall_);
					var data = this.buildTemplateData_(component, elementTemplate.params || []);
					elementTemplate(data, null, ijData);
					SoyAop.stopInterception();
				} else {
					babelHelpers.get(Soy.prototype.__proto__ || Object.getPrototypeOf(Soy.prototype), 'renderIncDom', this).call(this, component);
				}
			}

			/**
    * Sets the injected data object that should be passed to templates.
    * @param {Object} data
    */

		}, {
			key: 'setInjectedData',
			value: function setInjectedData(data) {
				ijData = data || {};
			}

			/**
    * Overrides the original `IncrementalDomRenderer` method so that only
    * state keys used by the main template can cause updates.
    * @param {!Component} component
    * @param {Object} changes
    * @return {boolean}
    */

		}, {
			key: 'shouldUpdate',
			value: function shouldUpdate(component, changes) {
				var should = babelHelpers.get(Soy.prototype.__proto__ || Object.getPrototypeOf(Soy.prototype), 'shouldUpdate', this).call(this, component, changes);
				if (!should || component.shouldUpdate) {
					return should;
				}

				var fn = component.constructor.TEMPLATE;
				var params = fn ? SoyAop.getOriginalFn(fn).params : [];
				for (var i = 0; i < params.length; i++) {
					if (changes.props[params[i]]) {
						return true;
					}
				}
				return false;
			}

			/**
    * Converts the given incremental dom function into an html string.
    * @param {!function()} incDomFn
    * @return {string}
    */

		}, {
			key: 'toHtmlString',
			value: function toHtmlString(incDomFn) {
				var element = document.createElement('div');
				IncrementalDOM.patch(element, incDomFn);
				return element.innerHTML;
			}

			/**
    * Converts the given html string into an incremental dom function.
    * @param {string|{contentKind: string, content: string}} value
    * @return {!function()}
    */

		}, {
			key: 'toIncDom',
			value: function toIncDom(value) {
				if (isObject(value) && isString(value.content) && value.contentKind === 'HTML') {
					value = value.content;
				}
				if (isString(value)) {
					value = HTML2IncDom.buildFn(value);
				}
				return value;
			}
		}]);
		return Soy;
	}(IncrementalDomRenderer.constructor);

	var soyRenderer = new Soy();
	Soy.RENDERER_NAME = 'soy';

	this['metal']['Soy'] = soyRenderer;
	this['metalNamed']['Soy'] = this['metalNamed']['Soy'] || {};
	this['metalNamed']['Soy']['Soy'] = soyRenderer;
	this['metalNamed']['Soy']['SoyAop'] = SoyAop;
}).call(this);
'use strict';

(function () {
  /* jshint ignore:start */
  var Component = this['metal']['component'];
  var Soy = this['metal']['Soy'];

  var templates;
  goog.loadModule(function (exports) {

    // This file was automatically generated from LiferayLogin.soy.
    // Please don't edit this file by hand.

    /**
     * @fileoverview Templates in namespace LiferayLogin.
     * @public
     */

    goog.module('LiferayLogin.incrementaldom');

    /** @suppress {extraRequire} */
    var soy = goog.require('soy');
    /** @suppress {extraRequire} */
    var soydata = goog.require('soydata');
    /** @suppress {extraRequire} */
    goog.require('goog.i18n.bidi');
    /** @suppress {extraRequire} */
    goog.require('goog.asserts');
    /** @suppress {extraRequire} */
    goog.require('goog.string');
    var IncrementalDom = goog.require('incrementaldom');
    var ie_open = IncrementalDom.elementOpen;
    var ie_close = IncrementalDom.elementClose;
    var ie_void = IncrementalDom.elementVoid;
    var ie_open_start = IncrementalDom.elementOpenStart;
    var ie_open_end = IncrementalDom.elementOpenEnd;
    var itext = IncrementalDom.text;
    var iattr = IncrementalDom.attr;

    /**
     * @param {Object<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object<string, *>=} opt_ijData
     * @return {void}
     * @suppress {checkTypes}
     */
    function $render(opt_data, opt_ignored, opt_ijData) {
      ie_open('div', null, null, 'class', 'loginmodal-container');
      ie_open('h1');
      itext('Login to Your Account');
      ie_close('h1');
      ie_open('ion-item', null, null, 'ngDefaultControl', '');
      ie_open('ion-label', null, null, 'ngDefaultControl', '');
      itext('Todo');
      ie_close('ion-label');
      ie_void('ion-input', null, null, 'type', 'text', 'name', 'title', 'ngDefaultControl', '');
      ie_close('ion-item');
      ie_open('ion-item');
      ie_open('ion-label');
      itext('Start Time');
      ie_close('ion-label');
      ie_void('ion-datetime', null, null, 'ngDefaultControl', '', 'displayFormat', 'h:mm A', 'pickerFormat', 'h mm A');
      ie_close('ion-item');
      ie_open('br');
      ie_close('br');
      ie_open('input', null, null, 'type', 'text', 'name', 'user', 'placeholder', 'Username');
      ie_close('input');
      ie_open('input', null, null, 'type', 'password', 'name', 'pass', 'placeholder', 'Password');
      ie_close('input');
      ie_open('input', null, null, 'type', 'submit', 'name', 'login', 'class', 'login loginmodal-submit', 'value', 'Login', 'onClick', 'login');
      ie_close('input');
      ie_open('div', null, null, 'class', 'login-help');
      ie_open('a', null, null, 'href', '#');
      itext('Register');
      ie_close('a');
      itext(' - ');
      ie_open('a', null, null, 'href', '#');
      itext('Forgot Password');
      ie_close('a');
      ie_close('div');
      ie_close('div');
    }
    exports.render = $render;
    if (goog.DEBUG) {
      $render.soyTemplateName = 'LiferayLogin.render';
    }

    exports.render.params = [];
    exports.render.types = {};
    templates = exports;
    return exports;
  });

  var LiferayLogin = function (_Component) {
    babelHelpers.inherits(LiferayLogin, _Component);

    function LiferayLogin() {
      babelHelpers.classCallCheck(this, LiferayLogin);
      return babelHelpers.possibleConstructorReturn(this, (LiferayLogin.__proto__ || Object.getPrototypeOf(LiferayLogin)).apply(this, arguments));
    }

    return LiferayLogin;
  }(Component);

  Soy.register(LiferayLogin, templates);
  this['metalNamed']['LiferayLogin'] = this['metalNamed']['LiferayLogin'] || {};
  this['metalNamed']['LiferayLogin']['LiferayLogin'] = LiferayLogin;
  this['metalNamed']['LiferayLogin']['templates'] = templates;
  this['metal']['LiferayLogin'] = templates;
  /* jshint ignore:end */
}).call(this);
'use strict';
// import templates from './Login.soy.js';

(function () {
	var Component = this['metal']['component'];
	// import Soy from 'metal-soy';

	var Login = function (_Component) {
		babelHelpers.inherits(Login, _Component);

		function Login() {
			babelHelpers.classCallCheck(this, Login);
			return babelHelpers.possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
		}

		babelHelpers.createClass(Login, [{
			key: 'attached',
			value: function attached() {
				this.userEl = this.element.querySelector('input[type="text"][name="user"]');
				this.passEl = this.element.querySelector('input[type="password"][name="pass"]');
			}
		}, {
			key: 'login',
			value: function login() {
				var _this2 = this;

				// event.stopPropagation();

				this.logic(this.userEl.value, this.passEl.value).then(function (x) {
					return _this2.emit('loginSuccess', x);
				}).catch(function (err) {
					return _this2.emit('loginFailed', err);
				});
			}
		}, {
			key: 'logic',
			value: function logic(userName, password) {}
		}]);
		return Login;
	}(Component);

	Login.STATE = {};

	// Soy.register(Login, templates);

	this['metal']['Login'] = Login;
}).call(this);
'use strict';

(function () {
	var WeDeploy = this['metal']['api-min'];
	var Soy = this['metalNamed']['Soy']['Soy'];
	var templates = this['metal']['LiferayLogin'];
	var Login = this['metal']['Login'];

	// FIXME hardcoded

	var companyId = 20116;
	var BASE_URL = 'http://localhost:8080/';
	var API_JSON = 'api/jsonws/';

	var LiferayLogin = function (_Login) {
		babelHelpers.inherits(LiferayLogin, _Login);

		function LiferayLogin() {
			babelHelpers.classCallCheck(this, LiferayLogin);
			return babelHelpers.possibleConstructorReturn(this, (LiferayLogin.__proto__ || Object.getPrototypeOf(LiferayLogin)).apply(this, arguments));
		}

		babelHelpers.createClass(LiferayLogin, [{
			key: 'logic',
			value: function logic(userName, password) {
				// super.logic(userName, password);
				return WeDeploy.url(BASE_URL + API_JSON + 'user/get-user-by-email-address').auth(userName, password).header('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8').form('companyId', companyId).form('emailAddress', userName).post().then(function (x) {
					if (x.body().exception) {
						throw new Error();
					}
					return x.body();
				});
			}
		}]);
		return LiferayLogin;
	}(Login);

	LiferayLogin.STATE = {};

	Soy.register(LiferayLogin, templates);

	this['metal']['LiferayLogin'] = LiferayLogin;
	this['metalNamed']['LiferayLogin'] = this['metalNamed']['LiferayLogin'] || {};
	this['metalNamed']['LiferayLogin']['LiferayLogin'] = LiferayLogin;
	this['metalNamed']['LiferayLogin']['Login'] = Login;
}).call(this);
'use strict';

/**
 * Parses the given uri string into an object.
 * @param {*=} opt_uri Optional string URI to parse
 */

(function () {
	function parseFromAnchor(opt_uri) {
		var link = document.createElement('a');
		link.href = opt_uri;
		return {
			hash: link.hash,
			hostname: link.hostname,
			password: link.password,
			pathname: link.pathname[0] === '/' ? link.pathname : '/' + link.pathname,
			port: link.port,
			protocol: link.protocol,
			search: link.search,
			username: link.username
		};
	}

	this['metal']['parseFromAnchor'] = parseFromAnchor;
}).call(this);
'use strict';

(function () {
	var isFunction = this['metalNamed']['metal']['isFunction'];
	var parseFromAnchor = this['metal']['parseFromAnchor'];

	/**
  * Parses the given uri string into an object. The URL function will be used
  * when present, otherwise we'll fall back to the anchor node element.
  * @param {*=} opt_uri Optional string URI to parse
  */

	function parse(opt_uri) {
		if (isFunction(URL) && URL.length) {
			return new URL(opt_uri);
		} else {
			return parseFromAnchor(opt_uri);
		}
	}

	this['metal']['parse'] = parse;
}).call(this);
'use strict';

(function () {
	var Disposable = this['metalNamed']['metal']['Disposable'];

	/**
  * A cached reference to the create function.
  */

	var create = Object.create;

	/**
  * Case insensitive string Multimap implementation. Allows multiple values for
  * the same key name.
  * @extends {Disposable}
  */

	var MultiMap = function (_Disposable) {
		babelHelpers.inherits(MultiMap, _Disposable);

		function MultiMap() {
			babelHelpers.classCallCheck(this, MultiMap);

			var _this = babelHelpers.possibleConstructorReturn(this, (MultiMap.__proto__ || Object.getPrototypeOf(MultiMap)).call(this));

			_this.keys = create(null);
			_this.values = create(null);
			return _this;
		}

		/**
   * Adds value to a key name.
   * @param {string} name
   * @param {*} value
   * @chainable
   */


		babelHelpers.createClass(MultiMap, [{
			key: 'add',
			value: function add(name, value) {
				this.keys[name.toLowerCase()] = name;
				this.values[name.toLowerCase()] = this.values[name.toLowerCase()] || [];
				this.values[name.toLowerCase()].push(value);
				return this;
			}

			/**
    * Clears map names and values.
    * @chainable
    */

		}, {
			key: 'clear',
			value: function clear() {
				this.keys = create(null);
				this.values = create(null);
				return this;
			}

			/**
    * Checks if map contains a value to the key name.
    * @param {string} name
    * @return {boolean}
    * @chainable
    */

		}, {
			key: 'contains',
			value: function contains(name) {
				return name.toLowerCase() in this.values;
			}

			/**
    * @inheritDoc
    */

		}, {
			key: 'disposeInternal',
			value: function disposeInternal() {
				this.values = null;
			}

			/**
    * Creates a `MultiMap` instance from the given object.
    * @param {!Object} obj
    * @return {!MultiMap}
    */

		}, {
			key: 'get',


			/**
    * Gets the first added value from a key name.
    * @param {string} name
    * @return {*}
    * @chainable
    */
			value: function get(name) {
				var values = this.values[name.toLowerCase()];
				if (values) {
					return values[0];
				}
			}

			/**
    * Gets all values from a key name.
    * @param {string} name
    * @return {Array.<*>}
    */

		}, {
			key: 'getAll',
			value: function getAll(name) {
				return this.values[name.toLowerCase()];
			}

			/**
    * Returns true if the map is empty, false otherwise.
    * @return {boolean}
    */

		}, {
			key: 'isEmpty',
			value: function isEmpty() {
				return this.size() === 0;
			}

			/**
    * Gets array of key names.
    * @return {Array.<string>}
    */

		}, {
			key: 'names',
			value: function names() {
				var _this2 = this;

				return Object.keys(this.values).map(function (key) {
					return _this2.keys[key];
				});
			}

			/**
    * Removes all values from a key name.
    * @param {string} name
    * @chainable
    */

		}, {
			key: 'remove',
			value: function remove(name) {
				delete this.keys[name.toLowerCase()];
				delete this.values[name.toLowerCase()];
				return this;
			}

			/**
    * Sets the value of a key name. Relevant to replace the current values with
    * a new one.
    * @param {string} name
    * @param {*} value
    * @chainable
    */

		}, {
			key: 'set',
			value: function set(name, value) {
				this.keys[name.toLowerCase()] = name;
				this.values[name.toLowerCase()] = [value];
				return this;
			}

			/**
    * Gets the size of the map key names.
    * @return {number}
    */

		}, {
			key: 'size',
			value: function size() {
				return this.names().length;
			}

			/**
    * Returns the parsed values as a string.
    * @return {string}
    */

		}, {
			key: 'toString',
			value: function toString() {
				return JSON.stringify(this.values);
			}
		}], [{
			key: 'fromObject',
			value: function fromObject(obj) {
				var map = new MultiMap();
				var keys = Object.keys(obj);
				for (var i = 0; i < keys.length; i++) {
					map.set(keys[i], obj[keys[i]]);
				}
				return map;
			}
		}]);
		return MultiMap;
	}(Disposable);

	this['metal']['MultiMap'] = MultiMap;
}).call(this);
'use strict';

(function () {
	var array = this['metalNamed']['metal']['array'];

	/**
  * Generic tree node data structure with arbitrary number of child nodes.
  * @param {V} value Value.
  * @constructor
  */

	var TreeNode = function () {
		function TreeNode(value) {
			babelHelpers.classCallCheck(this, TreeNode);

			/**
    * The value.
    * @private {V}
    */
			this.value_ = value;

			/**
    * Reference to the parent node or null if it has no parent.
    * @private {TreeNode}
    */
			this.parent_ = null;

			/**
    * Child nodes or null in case of leaf node.
    * @private {Array<!TreeNode>}
    */
			this.children_ = null;
		}

		/**
   * Appends a child node to this node.
   * @param {!TreeNode} child Orphan child node.
   */


		babelHelpers.createClass(TreeNode, [{
			key: 'addChild',
			value: function addChild(child) {
				assertChildHasNoParent(child);
				child.setParent(this);
				this.children_ = this.children_ || [];
				this.children_.push(child);
			}

			/**
    * Tells whether this node is the ancestor of the given node.
    * @param {!TreeNode} node A node.
    * @return {boolean} Whether this node is the ancestor of {@code node}.
    */

		}, {
			key: 'contains',
			value: function contains(node) {
				var current = node.getParent();
				while (current) {
					if (current === this) {
						return true;
					}
					current = current.getParent();
				}
				return false;
			}

			/**
    * @return {!Array<TreeNode>} All ancestor nodes in bottom-up order.
    */

		}, {
			key: 'getAncestors',
			value: function getAncestors() {
				var ancestors = [];
				var node = this.getParent();
				while (node) {
					ancestors.push(node);
					node = node.getParent();
				}
				return ancestors;
			}

			/**
    * Gets the child node of this node at the given index.
    * @param {number} index Child index.
    * @return {?TreeNode} The node at the given index
    * or null if not found.
    */

		}, {
			key: 'getChildAt',
			value: function getChildAt(index) {
				return this.getChildren()[index] || null;
			}

			/**
    * @return {?Array<!TreeNode>} Child nodes or null in case of leaf node.
    */

		}, {
			key: 'getChildren',
			value: function getChildren() {
				return this.children_ || TreeNode.EMPTY_ARRAY;
			}

			/**
    * @return {number} The number of children.
    */

		}, {
			key: 'getChildCount',
			value: function getChildCount() {
				return this.getChildren().length;
			}

			/**
    * @return {number} The number of ancestors of the node.
    */

		}, {
			key: 'getDepth',
			value: function getDepth() {
				var depth = 0;
				var node = this;
				while (node.getParent()) {
					depth++;
					node = node.getParent();
				}
				return depth;
			}

			/**
    * @return {?TreeNode} Parent node or null if it has no parent.
    */

		}, {
			key: 'getParent',
			value: function getParent() {
				return this.parent_;
			}

			/**
    * @return {!TreeNode} The root of the tree structure, i.e. the farthest
    * ancestor of the node or the node itself if it has no parents.
    */

		}, {
			key: 'getRoot',
			value: function getRoot() {
				var root = this;
				while (root.getParent()) {
					root = root.getParent();
				}
				return root;
			}

			/**
    * Gets the value.
    * @return {V} The value.
    */

		}, {
			key: 'getValue',
			value: function getValue() {
				return this.value_;
			}

			/**
    * @return {boolean} Whether the node is a leaf node.
    */

		}, {
			key: 'isLeaf',
			value: function isLeaf() {
				return !this.getChildCount();
			}

			/**
    * Removes the given child node of this node.
    * @param {TreeNode} child The node to remove.
    * @return {TreeNode} The removed node if any, null otherwise.
    */

		}, {
			key: 'removeChild',
			value: function removeChild(child) {
				if (array.remove(this.getChildren(), child)) {
					return child;
				}
				return null;
			}

			/**
    * Sets the parent node of this node. The callers must ensure that the
    * parent node and only that has this node among its children.
    * @param {TreeNode} parent The parent to set. If null, the node will be
    * detached from the tree.
    * @protected
    */

		}, {
			key: 'setParent',
			value: function setParent(parent) {
				this.parent_ = parent;
			}

			/**
    * Traverses the subtree. The first callback starts with this node,
    * and visits the descendant nodes depth-first, in preorder.
    * The second callback, starts with deepest child then visits
    * the ancestor nodes depth-first, in postorder. E.g.
    *
    *  	 A
    *    / \
    *   B   C
    *  /   / \
    * D   E   F
    *
    * preorder -> ['A', 'B', 'D', 'C', 'E', 'F']
    * postorder -> ['D', 'B', 'E', 'F', 'C', 'A']
    *
    * @param {function=} opt_preorderFn The callback to execute when visiting a node.
    * @param {function=} opt_postorderFn The callback to execute before leaving a node.
    */

		}, {
			key: 'traverse',
			value: function traverse(opt_preorderFn, opt_postorderFn) {
				if (opt_preorderFn) {
					opt_preorderFn(this);
				}
				this.getChildren().forEach(function (child) {
					return child.traverse(opt_preorderFn, opt_postorderFn);
				});
				if (opt_postorderFn) {
					opt_postorderFn(this);
				}
			}
		}]);
		return TreeNode;
	}();

	/**
  * Constant for empty array to avoid unnecessary allocations.
  * @private
  */


	TreeNode.EMPTY_ARRAY = [];

	/**
  * Asserts that child has no parent.
  * @param {TreeNode} child A child.
  * @private
  */
	var assertChildHasNoParent = function assertChildHasNoParent(child) {
		if (child.getParent()) {
			throw new Error('Cannot add child with parent.');
		}
	};

	this['metal']['TreeNode'] = TreeNode;
}).call(this);
'use strict';

(function () {
  var MultiMap = this['metal']['MultiMap'];
  var TreeNode = this['metal']['TreeNode'];
  this['metalNamed']['structs'] = this['metalNamed']['structs'] || {};
  this['metalNamed']['structs']['MultiMap'] = MultiMap;
  this['metalNamed']['structs']['TreeNode'] = TreeNode;
}).call(this);
'use strict';

(function () {
	var isDef = this['metalNamed']['metal']['isDef'];
	var string = this['metalNamed']['metal']['string'];
	var parse = this['metal']['parse'];
	var MultiMap = this['metalNamed']['structs']['MultiMap'];


	var parseFn_ = parse;

	var Uri = function () {

		/**
   * This class contains setters and getters for the parts of the URI.
   * The following figure displays an example URIs and their component parts.
   *
   *                                  path
   *	                             ┌───┴────┐
   *	  abc://example.com:123/path/data?key=value#fragid1
   *	  └┬┘   └────┬────┘ └┬┘           └───┬───┘ └──┬──┘
   * protocol  hostname  port            search    hash
   *          └──────┬───────┘
   *                host
   *
   * @param {*=} opt_uri Optional string URI to parse
   * @constructor
   */
		function Uri() {
			var opt_uri = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			babelHelpers.classCallCheck(this, Uri);

			this.url = Uri.parse(this.maybeAddProtocolAndHostname_(opt_uri));
		}

		/**
   * Adds parameters to uri from a <code>MultiMap</code> as source.
   * @param {MultiMap} multimap The <code>MultiMap</code> containing the
   *   parameters.
   * @protected
   * @chainable
   */


		babelHelpers.createClass(Uri, [{
			key: 'addParametersFromMultiMap',
			value: function addParametersFromMultiMap(multimap) {
				var _this = this;

				multimap.names().forEach(function (name) {
					multimap.getAll(name).forEach(function (value) {
						_this.addParameterValue(name, value);
					});
				});
				return this;
			}

			/**
    * Adds the value of the named query parameters.
    * @param {string} key The parameter to set.
    * @param {*} value The new value. Will be explicitly casted to String.
    * @chainable
    */

		}, {
			key: 'addParameterValue',
			value: function addParameterValue(name, value) {
				this.ensureQueryInitialized_();
				if (isDef(value)) {
					value = String(value);
				}
				this.query.add(name, value);
				return this;
			}

			/**
    * Adds the values of the named query parameter.
    * @param {string} key The parameter to set.
    * @param {*} value The new value.
    * @chainable
    */

		}, {
			key: 'addParameterValues',
			value: function addParameterValues(name, values) {
				var _this2 = this;

				values.forEach(function (value) {
					return _this2.addParameterValue(name, value);
				});
				return this;
			}

			/**
    * Ensures query internal map is initialized and synced with initial value
    * extracted from URI search part.
    * @protected
    */

		}, {
			key: 'ensureQueryInitialized_',
			value: function ensureQueryInitialized_() {
				var _this3 = this;

				if (this.query) {
					return;
				}
				this.query = new MultiMap();
				var search = this.url.search;
				if (search) {
					search.substring(1).split('&').forEach(function (param) {
						var _param$split = param.split('='),
						    _param$split2 = babelHelpers.slicedToArray(_param$split, 2),
						    key = _param$split2[0],
						    value = _param$split2[1];

						if (isDef(value)) {
							value = Uri.urlDecode(value);
						}
						_this3.addParameterValue(key, value);
					});
				}
			}

			/**
    * Gets the hash part of uri.
    * @return {string}
    */

		}, {
			key: 'getHash',
			value: function getHash() {
				return this.url.hash || '';
			}

			/**
    * Gets the host part of uri. E.g. <code>[hostname]:[port]</code>.
    * @return {string}
    */

		}, {
			key: 'getHost',
			value: function getHost() {
				var host = this.getHostname();
				if (host) {
					var port = this.getPort();
					if (port && port !== '80') {
						host += ':' + port;
					}
				}
				return host;
			}

			/**
    * Gets the hostname part of uri without protocol and port.
    * @return {string}
    */

		}, {
			key: 'getHostname',
			value: function getHostname() {
				var hostname = this.url.hostname;
				if (hostname === Uri.HOSTNAME_PLACEHOLDER) {
					return '';
				}
				return hostname;
			}

			/**
    * Gets the origin part of uri. E.g. <code>http://[hostname]:[port]</code>.
    * @return {string}
    */

		}, {
			key: 'getOrigin',
			value: function getOrigin() {
				var host = this.getHost();
				if (host) {
					return this.getProtocol() + '//' + host;
				}
				return '';
			}

			/**
    * Returns the first value for a given parameter or undefined if the given
    * parameter name does not appear in the query string.
    * @param {string} paramName Unescaped parameter name.
    * @return {string|undefined} The first value for a given parameter or
    *   undefined if the given parameter name does not appear in the query
    *   string.
    */

		}, {
			key: 'getParameterValue',
			value: function getParameterValue(name) {
				this.ensureQueryInitialized_();
				return this.query.get(name);
			}

			/**
    * Returns the value<b>s</b> for a given parameter as a list of decoded
    * query parameter values.
    * @param {string} name The parameter to get values for.
    * @return {!Array<?>} The values for a given parameter as a list of decoded
    *   query parameter values.
    */

		}, {
			key: 'getParameterValues',
			value: function getParameterValues(name) {
				this.ensureQueryInitialized_();
				return this.query.getAll(name);
			}

			/**
    * Returns the name<b>s</b> of the parameters.
    * @return {!Array<string>} The names for the parameters as a list of
    *   strings.
    */

		}, {
			key: 'getParameterNames',
			value: function getParameterNames() {
				this.ensureQueryInitialized_();
				return this.query.names();
			}

			/**
    * Gets the function currently being used to parse URIs.
    * @return {!function()}
    */

		}, {
			key: 'getPathname',


			/**
    * Gets the pathname part of uri.
    * @return {string}
    */
			value: function getPathname() {
				return this.url.pathname;
			}

			/**
    * Gets the port number part of uri as string.
    * @return {string}
    */

		}, {
			key: 'getPort',
			value: function getPort() {
				return this.url.port;
			}

			/**
    * Gets the protocol part of uri. E.g. <code>http:</code>.
    * @return {string}
    */

		}, {
			key: 'getProtocol',
			value: function getProtocol() {
				return this.url.protocol;
			}

			/**
    * Gets the search part of uri. Search value is retrieved from query
    * parameters.
    * @return {string}
    */

		}, {
			key: 'getSearch',
			value: function getSearch() {
				var _this4 = this;

				var search = '';
				var querystring = '';
				this.getParameterNames().forEach(function (name) {
					_this4.getParameterValues(name).forEach(function (value) {
						querystring += name;
						if (isDef(value)) {
							querystring += '=' + encodeURIComponent(value);
						}
						querystring += '&';
					});
				});
				querystring = querystring.slice(0, -1);
				if (querystring) {
					search += '?' + querystring;
				}
				return search;
			}

			/**
    * Checks if uri contains the parameter.
    * @param {string} name
    * @return {boolean}
    */

		}, {
			key: 'hasParameter',
			value: function hasParameter(name) {
				this.ensureQueryInitialized_();
				return this.query.contains(name);
			}

			/**
    * Makes this URL unique by adding a random param to it. Useful for avoiding
    * cache.
    */

		}, {
			key: 'makeUnique',
			value: function makeUnique() {
				this.setParameterValue(Uri.RANDOM_PARAM, string.getRandomString());
				return this;
			}

			/**
    * Maybe adds protocol and a hostname placeholder on a parial URI if needed.
    * Relevent for compatibility with <code>URL</code> native object.
    * @param {string=} opt_uri
    * @return {string} URI with protocol and hostname placeholder.
    */

		}, {
			key: 'maybeAddProtocolAndHostname_',
			value: function maybeAddProtocolAndHostname_(opt_uri) {
				var url = opt_uri;
				if (opt_uri.indexOf('://') === -1 && opt_uri.indexOf('javascript:') !== 0) {
					// jshint ignore:line

					url = Uri.DEFAULT_PROTOCOL;
					if (opt_uri[0] !== '/' || opt_uri[1] !== '/') {
						url += '//';
					}

					switch (opt_uri.charAt(0)) {
						case '.':
						case '?':
						case '#':
							url += Uri.HOSTNAME_PLACEHOLDER;
							url += '/';
							url += opt_uri;
							break;
						case '':
						case '/':
							if (opt_uri[1] !== '/') {
								url += Uri.HOSTNAME_PLACEHOLDER;
							}
							url += opt_uri;
							break;
						default:
							url += opt_uri;
					}
				}
				return url;
			}

			/**
    * Normalizes the parsed object to be in the expected standard.
    * @param {!Object}
    */

		}, {
			key: 'removeParameter',


			/**
    * Removes the named query parameter.
    * @param {string} name The parameter to remove.
    * @chainable
    */
			value: function removeParameter(name) {
				this.ensureQueryInitialized_();
				this.query.remove(name);
				return this;
			}

			/**
    * Removes uniqueness parameter of the uri.
    * @chainable
    */

		}, {
			key: 'removeUnique',
			value: function removeUnique() {
				this.removeParameter(Uri.RANDOM_PARAM);
				return this;
			}

			/**
    * Sets the hash.
    * @param {string} hash
    * @chainable
    */

		}, {
			key: 'setHash',
			value: function setHash(hash) {
				this.url.hash = hash;
				return this;
			}

			/**
    * Sets the hostname.
    * @param {string} hostname
    * @chainable
    */

		}, {
			key: 'setHostname',
			value: function setHostname(hostname) {
				this.url.hostname = hostname;
				return this;
			}

			/**
    * Sets the value of the named query parameters, clearing previous values
    * for that key.
    * @param {string} key The parameter to set.
    * @param {*} value The new value.
    * @chainable
    */

		}, {
			key: 'setParameterValue',
			value: function setParameterValue(name, value) {
				this.removeParameter(name);
				this.addParameterValue(name, value);
				return this;
			}

			/**
    * Sets the values of the named query parameters, clearing previous values
    * for that key.
    * @param {string} key The parameter to set.
    * @param {*} value The new value.
    * @chainable
    */

		}, {
			key: 'setParameterValues',
			value: function setParameterValues(name, values) {
				var _this5 = this;

				this.removeParameter(name);
				values.forEach(function (value) {
					return _this5.addParameterValue(name, value);
				});
				return this;
			}

			/**
    * Sets the pathname.
    * @param {string} pathname
    * @chainable
    */

		}, {
			key: 'setPathname',
			value: function setPathname(pathname) {
				this.url.pathname = pathname;
				return this;
			}

			/**
    * Sets the port number.
    * @param {*} port Port number.
    * @chainable
    */

		}, {
			key: 'setPort',
			value: function setPort(port) {
				this.url.port = port;
				return this;
			}

			/**
    * Sets the function that will be used for parsing the original string uri
    * into an object.
    * @param {!function()} parseFn
    */

		}, {
			key: 'setProtocol',


			/**
    * Sets the protocol. If missing <code>http:</code> is used as default.
    * @param {string} protocol
    * @chainable
    */
			value: function setProtocol(protocol) {
				this.url.protocol = protocol;
				if (this.url.protocol[this.url.protocol.length - 1] !== ':') {
					this.url.protocol += ':';
				}
				return this;
			}

			/**
    * @return {string} The string form of the url.
    * @override
    */

		}, {
			key: 'toString',
			value: function toString() {
				var href = '';
				var host = this.getHost();
				if (host) {
					href += this.getProtocol() + '//';
				}
				href += host + this.getPathname() + this.getSearch() + this.getHash();
				return href;
			}

			/**
    * Joins the given paths.
    * @param {string} basePath
    * @param {...string} ...paths Any number of paths to be joined with the base url.
    * @static
    */

		}], [{
			key: 'getParseFn',
			value: function getParseFn() {
				return parseFn_;
			}
		}, {
			key: 'normalizeObject',
			value: function normalizeObject(parsed) {
				var length = parsed.pathname ? parsed.pathname.length : 0;
				if (length > 1 && parsed.pathname[length - 1] === '/') {
					parsed.pathname = parsed.pathname.substr(0, length - 1);
				}
				return parsed;
			}

			/**
    * Parses the given uri string into an object.
    * @param {*=} opt_uri Optional string URI to parse
    */

		}, {
			key: 'parse',
			value: function parse(opt_uri) {
				return Uri.normalizeObject(parseFn_(opt_uri));
			}
		}, {
			key: 'setParseFn',
			value: function setParseFn(parseFn) {
				parseFn_ = parseFn;
			}
		}, {
			key: 'joinPaths',
			value: function joinPaths(basePath) {
				for (var _len = arguments.length, paths = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					paths[_key - 1] = arguments[_key];
				}

				if (basePath.charAt(basePath.length - 1) === '/') {
					basePath = basePath.substring(0, basePath.length - 1);
				}
				paths = paths.map(function (path) {
					return path.charAt(0) === '/' ? path.substring(1) : path;
				});
				return [basePath].concat(paths).join('/').replace(/\/$/, '');
			}

			/**
    * URL-decodes the string. We need to specially handle '+'s because
    * the javascript library doesn't convert them to spaces.
    * @param {string} str The string to url decode.
    * @return {string} The decoded {@code str}.
    */

		}, {
			key: 'urlDecode',
			value: function urlDecode(str) {
				return decodeURIComponent(str.replace(/\+/g, ' '));
			}
		}]);
		return Uri;
	}();

	/**
  * Default protocol value.
  * @type {string}
  * @default http:
  * @static
  */


	Uri.DEFAULT_PROTOCOL = 'http:';

	/**
  * Hostname placeholder. Relevant to internal usage only.
  * @type {string}
  * @static
  */
	Uri.HOSTNAME_PLACEHOLDER = 'hostname' + Date.now();

	/**
  * Name used by the param generated by `makeUnique`.
  * @type {string}
  * @static
  */
	Uri.RANDOM_PARAM = 'zx';

	this['metal']['Uri'] = Uri;
}).call(this);
/*!
 * Promises polyfill from Google's Closure Library.
 *
 *      Copyright 2013 The Closure Library Authors. All Rights Reserved.
 *
 * NOTE(eduardo): Promise support is not ready on all supported browsers,
 * therefore metal-promise is temporarily using Google's promises as polyfill.
 * It supports cancellable promises and has clean and fast implementation.
 */

'use strict';

(function () {
  var isDef = this['metalNamed']['metal']['isDef'];
  var isFunction = this['metalNamed']['metal']['isFunction'];
  var isObject = this['metalNamed']['metal']['isObject'];
  var async = this['metalNamed']['metal']['async'];

  /**
   * Provides a more strict interface for Thenables in terms of
   * http://promisesaplus.com for interop with {@see CancellablePromise}.
   *
   * @interface
   * @extends {IThenable.<TYPE>}
   * @template TYPE
   */

  var Thenable = function Thenable() {};

  /**
   * Adds callbacks that will operate on the result of the Thenable, returning a
   * new child Promise.
   *
   * If the Thenable is fulfilled, the {@code onFulfilled} callback will be
   * invoked with the fulfillment value as argument, and the child Promise will
   * be fulfilled with the return value of the callback. If the callback throws
   * an exception, the child Promise will be rejected with the thrown value
   * instead.
   *
   * If the Thenable is rejected, the {@code onRejected} callback will be invoked
   * with the rejection reason as argument, and the child Promise will be rejected
   * with the return value of the callback or thrown value.
   *
   * @param {?(function(this:THIS, TYPE):
   *             (RESULT|IThenable.<RESULT>|Thenable))=} opt_onFulfilled A
   *     function that will be invoked with the fulfillment value if the Promise
   *     is fullfilled.
   * @param {?(function(*): *)=} opt_onRejected A function that will be invoked
   *     with the rejection reason if the Promise is rejected.
   * @param {THIS=} opt_context An optional context object that will be the
   *     execution context for the callbacks. By default, functions are executed
   *     with the default this.
   * @return {!CancellablePromise.<RESULT>} A new Promise that will receive the
   *     result of the fulfillment or rejection callback.
   * @template RESULT,THIS
   */
  Thenable.prototype.then = function () {};

  /**
   * An expando property to indicate that an object implements
   * {@code Thenable}.
   *
   * {@see addImplementation}.
   *
   * @const
   */
  Thenable.IMPLEMENTED_BY_PROP = '$goog_Thenable';

  /**
   * Marks a given class (constructor) as an implementation of Thenable, so
   * that we can query that fact at runtime. The class must have already
   * implemented the interface.
   * Exports a 'then' method on the constructor prototype, so that the objects
   * also implement the extern {@see Thenable} interface for interop with
   * other Promise implementations.
   * @param {function(new:Thenable,...[?])} ctor The class constructor. The
   *     corresponding class must have already implemented the interface.
   */
  Thenable.addImplementation = function (ctor) {
    ctor.prototype.then = ctor.prototype.then;
    ctor.prototype.$goog_Thenable = true;
  };

  /**
   * @param {*} object
   * @return {boolean} Whether a given instance implements {@code Thenable}.
   *     The class/superclass of the instance must call {@code addImplementation}.
   */
  Thenable.isImplementedBy = function (object) {
    if (!object) {
      return false;
    }
    try {
      return !!object.$goog_Thenable;
    } catch (e) {
      // Property access seems to be forbidden.
      return false;
    }
  };

  /**
   * Like bind(), except that a 'this object' is not required. Useful when the
   * target function is already bound.
   *
   * Usage:
   * var g = partial(f, arg1, arg2);
   * g(arg3, arg4);
   *
   * @param {Function} fn A function to partially apply.
   * @param {...*} var_args Additional arguments that are partially applied to fn.
   * @return {!Function} A partially-applied form of the function bind() was
   *     invoked as a method of.
   */
  var partial = function partial(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
      // Clone the array (with slice()) and append additional arguments
      // to the existing arguments.
      var newArgs = args.slice();
      newArgs.push.apply(newArgs, arguments);
      return fn.apply(this, newArgs);
    };
  };

  /**
   * Promises provide a result that may be resolved asynchronously. A Promise may
   * be resolved by being fulfilled or rejected with a value, which will be known
   * as the fulfillment value or the rejection reason. Whether fulfilled or
   * rejected, the Promise result is immutable once it is set.
   *
   * Promises may represent results of any type, including undefined. Rejection
   * reasons are typically Errors, but may also be of any type. Closure Promises
   * allow for optional type annotations that enforce that fulfillment values are
   * of the appropriate types at compile time.
   *
   * The result of a Promise is accessible by calling {@code then} and registering
   * {@code onFulfilled} and {@code onRejected} callbacks. Once the Promise
   * resolves, the relevant callbacks are invoked with the fulfillment value or
   * rejection reason as argument. Callbacks are always invoked in the order they
   * were registered, even when additional {@code then} calls are made from inside
   * another callback. A callback is always run asynchronously sometime after the
   * scope containing the registering {@code then} invocation has returned.
   *
   * If a Promise is resolved with another Promise, the first Promise will block
   * until the second is resolved, and then assumes the same result as the second
   * Promise. This allows Promises to depend on the results of other Promises,
   * linking together multiple asynchronous operations.
   *
   * This implementation is compatible with the Promises/A+ specification and
   * passes that specification's conformance test suite. A Closure Promise may be
   * resolved with a Promise instance (or sufficiently compatible Promise-like
   * object) created by other Promise implementations. From the specification,
   * Promise-like objects are known as "Thenables".
   *
   * @see http://promisesaplus.com/
   *
   * @param {function(
   *             this:RESOLVER_CONTEXT,
   *             function((TYPE|IThenable.<TYPE>|Thenable)),
   *             function(*)): void} resolver
   *     Initialization function that is invoked immediately with {@code resolve}
   *     and {@code reject} functions as arguments. The Promise is resolved or
   *     rejected with the first argument passed to either function.
   * @param {RESOLVER_CONTEXT=} opt_context An optional context for executing the
   *     resolver function. If unspecified, the resolver function will be executed
   *     in the default scope.
   * @constructor
   * @struct
   * @final
   * @implements {Thenable.<TYPE>}
   * @template TYPE,RESOLVER_CONTEXT
   */
  var CancellablePromise = function CancellablePromise(resolver, opt_context) {
    /**
     * The internal state of this Promise. Either PENDING, FULFILLED, REJECTED, or
     * BLOCKED.
     * @private {CancellablePromise.State_}
     */
    this.state_ = CancellablePromise.State_.PENDING;

    /**
     * The resolved result of the Promise. Immutable once set with either a
     * fulfillment value or rejection reason.
     * @private {*}
     */
    this.result_ = undefined;

    /**
     * For Promises created by calling {@code then()}, the originating parent.
     * @private {CancellablePromise}
     */
    this.parent_ = null;

    /**
     * The list of {@code onFulfilled} and {@code onRejected} callbacks added to
     * this Promise by calls to {@code then()}.
     * @private {Array.<CancellablePromise.CallbackEntry_>}
     */
    this.callbackEntries_ = null;

    /**
     * Whether the Promise is in the queue of Promises to execute.
     * @private {boolean}
     */
    this.executing_ = false;

    if (CancellablePromise.UNHANDLED_REJECTION_DELAY > 0) {
      /**
       * A timeout ID used when the {@code UNHANDLED_REJECTION_DELAY} is greater
       * than 0 milliseconds. The ID is set when the Promise is rejected, and
       * cleared only if an {@code onRejected} callback is invoked for the
       * Promise (or one of its descendants) before the delay is exceeded.
       *
       * If the rejection is not handled before the timeout completes, the
       * rejection reason is passed to the unhandled rejection handler.
       * @private {number}
       */
      this.unhandledRejectionId_ = 0;
    } else if (CancellablePromise.UNHANDLED_REJECTION_DELAY === 0) {
      /**
       * When the {@code UNHANDLED_REJECTION_DELAY} is set to 0 milliseconds, a
       * boolean that is set if the Promise is rejected, and reset to false if an
       * {@code onRejected} callback is invoked for the Promise (or one of its
       * descendants). If the rejection is not handled before the next timestep,
       * the rejection reason is passed to the unhandled rejection handler.
       * @private {boolean}
       */
      this.hadUnhandledRejection_ = false;
    }

    try {
      var self = this;
      resolver.call(opt_context, function (value) {
        self.resolve_(CancellablePromise.State_.FULFILLED, value);
      }, function (reason) {
        self.resolve_(CancellablePromise.State_.REJECTED, reason);
      });
    } catch (e) {
      this.resolve_(CancellablePromise.State_.REJECTED, e);
    }
  };

  /**
   * The delay in milliseconds before a rejected Promise's reason is passed to
   * the rejection handler. By default, the rejection handler rethrows the
   * rejection reason so that it appears in the developer console or
   * {@code window.onerror} handler.
   * Rejections are rethrown as quickly as possible by default. A negative value
   * disables rejection handling entirely.
   * @type {number}
   */
  CancellablePromise.UNHANDLED_REJECTION_DELAY = 0;

  /**
   * The possible internal states for a Promise. These states are not directly
   * observable to external callers.
   * @enum {number}
   * @private
   */
  CancellablePromise.State_ = {
    /** The Promise is waiting for resolution. */
    PENDING: 0,

    /** The Promise is blocked waiting for the result of another Thenable. */
    BLOCKED: 1,

    /** The Promise has been resolved with a fulfillment value. */
    FULFILLED: 2,

    /** The Promise has been resolved with a rejection reason. */
    REJECTED: 3
  };

  /**
   * Typedef for entries in the callback chain. Each call to {@code then},
   * {@code thenCatch}, or {@code thenAlways} creates an entry containing the
   * functions that may be invoked once the Promise is resolved.
   *
   * @typedef {{
   *   child: CancellablePromise,
   *   onFulfilled: function(*),
   *   onRejected: function(*)
   * }}
   * @private
   */
  CancellablePromise.CallbackEntry_ = null;

  /**
   * @param {(TYPE|Thenable.<TYPE>|Thenable)=} opt_value
   * @return {!CancellablePromise.<TYPE>} A new Promise that is immediately resolved
   *     with the given value.
   * @template TYPE
   */
  CancellablePromise.resolve = function (opt_value) {
    return new CancellablePromise(function (resolve) {
      resolve(opt_value);
    });
  };

  /**
   * @param {*=} opt_reason
   * @return {!CancellablePromise} A new Promise that is immediately rejected with the
   *     given reason.
   */
  CancellablePromise.reject = function (opt_reason) {
    return new CancellablePromise(function (resolve, reject) {
      reject(opt_reason);
    });
  };

  /**
   * @param {!Array.<!(Thenable.<TYPE>|Thenable)>} promises
   * @return {!CancellablePromise.<TYPE>} A Promise that receives the result of the
   *     first Promise (or Promise-like) input to complete.
   * @template TYPE
   */
  CancellablePromise.race = function (promises) {
    return new CancellablePromise(function (resolve, reject) {
      if (!promises.length) {
        resolve(undefined);
      }
      for (var i = 0, promise; promise = promises[i]; i++) {
        promise.then(resolve, reject);
      }
    });
  };

  /**
   * @param {!Array.<!(Thenable.<TYPE>|Thenable)>} promises
   * @return {!CancellablePromise.<!Array.<TYPE>>} A Promise that receives a list of
   *     every fulfilled value once every input Promise (or Promise-like) is
   *     successfully fulfilled, or is rejected by the first rejection result.
   * @template TYPE
   */
  CancellablePromise.all = function (promises) {
    return new CancellablePromise(function (resolve, reject) {
      var toFulfill = promises.length;
      var values = [];

      if (!toFulfill) {
        resolve(values);
        return;
      }

      var onFulfill = function onFulfill(index, value) {
        toFulfill--;
        values[index] = value;
        if (toFulfill === 0) {
          resolve(values);
        }
      };

      var onReject = function onReject(reason) {
        reject(reason);
      };

      for (var i = 0, promise; promise = promises[i]; i++) {
        promise.then(partial(onFulfill, i), onReject);
      }
    });
  };

  /**
   * @param {!Array.<!(Thenable.<TYPE>|Thenable)>} promises
   * @return {!CancellablePromise.<TYPE>} A Promise that receives the value of
   *     the first input to be fulfilled, or is rejected with a list of every
   *     rejection reason if all inputs are rejected.
   * @template TYPE
   */
  CancellablePromise.firstFulfilled = function (promises) {
    return new CancellablePromise(function (resolve, reject) {
      var toReject = promises.length;
      var reasons = [];

      if (!toReject) {
        resolve(undefined);
        return;
      }

      var onFulfill = function onFulfill(value) {
        resolve(value);
      };

      var onReject = function onReject(index, reason) {
        toReject--;
        reasons[index] = reason;
        if (toReject === 0) {
          reject(reasons);
        }
      };

      for (var i = 0, promise; promise = promises[i]; i++) {
        promise.then(onFulfill, partial(onReject, i));
      }
    });
  };

  /**
   * Adds callbacks that will operate on the result of the Promise, returning a
   * new child Promise.
   *
   * If the Promise is fulfilled, the {@code onFulfilled} callback will be invoked
   * with the fulfillment value as argument, and the child Promise will be
   * fulfilled with the return value of the callback. If the callback throws an
   * exception, the child Promise will be rejected with the thrown value instead.
   *
   * If the Promise is rejected, the {@code onRejected} callback will be invoked
   * with the rejection reason as argument, and the child Promise will be rejected
   * with the return value (or thrown value) of the callback.
   *
   * @override
   */
  CancellablePromise.prototype.then = function (opt_onFulfilled, opt_onRejected, opt_context) {
    return this.addChildPromise_(isFunction(opt_onFulfilled) ? opt_onFulfilled : null, isFunction(opt_onRejected) ? opt_onRejected : null, opt_context);
  };
  Thenable.addImplementation(CancellablePromise);

  /**
   * Adds a callback that will be invoked whether the Promise is fulfilled or
   * rejected. The callback receives no argument, and no new child Promise is
   * created. This is useful for ensuring that cleanup takes place after certain
   * asynchronous operations. Callbacks added with {@code thenAlways} will be
   * executed in the same order with other calls to {@code then},
   * {@code thenAlways}, or {@code thenCatch}.
   *
   * Since it does not produce a new child Promise, cancellation propagation is
   * not prevented by adding callbacks with {@code thenAlways}. A Promise that has
   * a cleanup handler added with {@code thenAlways} will be canceled if all of
   * its children created by {@code then} (or {@code thenCatch}) are canceled.
   *
   * @param {function(this:THIS): void} onResolved A function that will be invoked
   *     when the Promise is resolved.
   * @param {THIS=} opt_context An optional context object that will be the
   *     execution context for the callbacks. By default, functions are executed
   *     in the global scope.
   * @return {!CancellablePromise.<TYPE>} This Promise, for chaining additional calls.
   * @template THIS
   */
  CancellablePromise.prototype.thenAlways = function (onResolved, opt_context) {
    var callback = function callback() {
      try {
        // Ensure that no arguments are passed to onResolved.
        onResolved.call(opt_context);
      } catch (err) {
        CancellablePromise.handleRejection_.call(null, err);
      }
    };

    this.addCallbackEntry_({
      child: null,
      onRejected: callback,
      onFulfilled: callback
    });
    return this;
  };

  /**
   * Adds a callback that will be invoked only if the Promise is rejected. This
   * is equivalent to {@code then(null, onRejected)}.
   *
   * @param {!function(this:THIS, *): *} onRejected A function that will be
   *     invoked with the rejection reason if the Promise is rejected.
   * @param {THIS=} opt_context An optional context object that will be the
   *     execution context for the callbacks. By default, functions are executed
   *     in the global scope.
   * @return {!CancellablePromise} A new Promise that will receive the result of the
   *     callback.
   * @template THIS
   */
  CancellablePromise.prototype.thenCatch = function (onRejected, opt_context) {
    return this.addChildPromise_(null, onRejected, opt_context);
  };

  /**
   * Alias of {@link CancellablePromise.prototype.thenCatch}
   */
  CancellablePromise.prototype.catch = CancellablePromise.prototype.thenCatch;

  /**
   * Cancels the Promise if it is still pending by rejecting it with a cancel
   * Error. No action is performed if the Promise is already resolved.
   *
   * All child Promises of the canceled Promise will be rejected with the same
   * cancel error, as with normal Promise rejection. If the Promise to be canceled
   * is the only child of a pending Promise, the parent Promise will also be
   * canceled. Cancellation may propagate upward through multiple generations.
   *
   * @param {string=} opt_message An optional debugging message for describing the
   *     cancellation reason.
   */
  CancellablePromise.prototype.cancel = function (opt_message) {
    if (this.state_ === CancellablePromise.State_.PENDING) {
      async.run(function () {
        var err = new CancellablePromise.CancellationError(opt_message);
        err.IS_CANCELLATION_ERROR = true;
        this.cancelInternal_(err);
      }, this);
    }
  };

  /**
   * Cancels this Promise with the given error.
   *
   * @param {!Error} err The cancellation error.
   * @private
   */
  CancellablePromise.prototype.cancelInternal_ = function (err) {
    if (this.state_ === CancellablePromise.State_.PENDING) {
      if (this.parent_) {
        // Cancel the Promise and remove it from the parent's child list.
        this.parent_.cancelChild_(this, err);
      } else {
        this.resolve_(CancellablePromise.State_.REJECTED, err);
      }
    }
  };

  /**
   * Cancels a child Promise from the list of callback entries. If the Promise has
   * not already been resolved, reject it with a cancel error. If there are no
   * other children in the list of callback entries, propagate the cancellation
   * by canceling this Promise as well.
   *
   * @param {!CancellablePromise} childPromise The Promise to cancel.
   * @param {!Error} err The cancel error to use for rejecting the Promise.
   * @private
   */
  CancellablePromise.prototype.cancelChild_ = function (childPromise, err) {
    if (!this.callbackEntries_) {
      return;
    }
    var childCount = 0;
    var childIndex = -1;

    // Find the callback entry for the childPromise, and count whether there are
    // additional child Promises.
    for (var i = 0, entry; entry = this.callbackEntries_[i]; i++) {
      var child = entry.child;
      if (child) {
        childCount++;
        if (child === childPromise) {
          childIndex = i;
        }
        if (childIndex >= 0 && childCount > 1) {
          break;
        }
      }
    }

    // If the child Promise was the only child, cancel this Promise as well.
    // Otherwise, reject only the child Promise with the cancel error.
    if (childIndex >= 0) {
      if (this.state_ === CancellablePromise.State_.PENDING && childCount === 1) {
        this.cancelInternal_(err);
      } else {
        var callbackEntry = this.callbackEntries_.splice(childIndex, 1)[0];
        this.executeCallback_(callbackEntry, CancellablePromise.State_.REJECTED, err);
      }
    }
  };

  /**
   * Adds a callback entry to the current Promise, and schedules callback
   * execution if the Promise has already been resolved.
   *
   * @param {CancellablePromise.CallbackEntry_} callbackEntry Record containing
   *     {@code onFulfilled} and {@code onRejected} callbacks to execute after
   *     the Promise is resolved.
   * @private
   */
  CancellablePromise.prototype.addCallbackEntry_ = function (callbackEntry) {
    if ((!this.callbackEntries_ || !this.callbackEntries_.length) && (this.state_ === CancellablePromise.State_.FULFILLED || this.state_ === CancellablePromise.State_.REJECTED)) {
      this.scheduleCallbacks_();
    }
    if (!this.callbackEntries_) {
      this.callbackEntries_ = [];
    }
    this.callbackEntries_.push(callbackEntry);
  };

  /**
   * Creates a child Promise and adds it to the callback entry list. The result of
   * the child Promise is determined by the state of the parent Promise and the
   * result of the {@code onFulfilled} or {@code onRejected} callbacks as
   * specified in the Promise resolution procedure.
   *
   * @see http://promisesaplus.com/#the__method
   *
   * @param {?function(this:THIS, TYPE):
   *          (RESULT|CancellablePromise.<RESULT>|Thenable)} onFulfilled A callback that
   *     will be invoked if the Promise is fullfilled, or null.
   * @param {?function(this:THIS, *): *} onRejected A callback that will be
   *     invoked if the Promise is rejected, or null.
   * @param {THIS=} opt_context An optional execution context for the callbacks.
   *     in the default calling context.
   * @return {!CancellablePromise} The child Promise.
   * @template RESULT,THIS
   * @private
   */
  CancellablePromise.prototype.addChildPromise_ = function (onFulfilled, onRejected, opt_context) {

    var callbackEntry = {
      child: null,
      onFulfilled: null,
      onRejected: null
    };

    callbackEntry.child = new CancellablePromise(function (resolve, reject) {
      // Invoke onFulfilled, or resolve with the parent's value if absent.
      callbackEntry.onFulfilled = onFulfilled ? function (value) {
        try {
          var result = onFulfilled.call(opt_context, value);
          resolve(result);
        } catch (err) {
          reject(err);
        }
      } : resolve;

      // Invoke onRejected, or reject with the parent's reason if absent.
      callbackEntry.onRejected = onRejected ? function (reason) {
        try {
          var result = onRejected.call(opt_context, reason);
          if (!isDef(result) && reason.IS_CANCELLATION_ERROR) {
            // Propagate cancellation to children if no other result is returned.
            reject(reason);
          } else {
            resolve(result);
          }
        } catch (err) {
          reject(err);
        }
      } : reject;
    });

    callbackEntry.child.parent_ = this;
    this.addCallbackEntry_(
    /** @type {CancellablePromise.CallbackEntry_} */callbackEntry);
    return callbackEntry.child;
  };

  /**
   * Unblocks the Promise and fulfills it with the given value.
   *
   * @param {TYPE} value
   * @private
   */
  CancellablePromise.prototype.unblockAndFulfill_ = function (value) {
    if (this.state_ !== CancellablePromise.State_.BLOCKED) {
      throw new Error('CancellablePromise is not blocked.');
    }
    this.state_ = CancellablePromise.State_.PENDING;
    this.resolve_(CancellablePromise.State_.FULFILLED, value);
  };

  /**
   * Unblocks the Promise and rejects it with the given rejection reason.
   *
   * @param {*} reason
   * @private
   */
  CancellablePromise.prototype.unblockAndReject_ = function (reason) {
    if (this.state_ !== CancellablePromise.State_.BLOCKED) {
      throw new Error('CancellablePromise is not blocked.');
    }
    this.state_ = CancellablePromise.State_.PENDING;
    this.resolve_(CancellablePromise.State_.REJECTED, reason);
  };

  /**
   * Attempts to resolve a Promise with a given resolution state and value. This
   * is a no-op if the given Promise has already been resolved.
   *
   * If the given result is a Thenable (such as another Promise), the Promise will
   * be resolved with the same state and result as the Thenable once it is itself
   * resolved.
   *
   * If the given result is not a Thenable, the Promise will be fulfilled or
   * rejected with that result based on the given state.
   *
   * @see http://promisesaplus.com/#the_promise_resolution_procedure
   *
   * @param {CancellablePromise.State_} state
   * @param {*} x The result to apply to the Promise.
   * @private
   */
  CancellablePromise.prototype.resolve_ = function (state, x) {
    if (this.state_ !== CancellablePromise.State_.PENDING) {
      return;
    }

    if (this === x) {
      state = CancellablePromise.State_.REJECTED;
      x = new TypeError('CancellablePromise cannot resolve to itself');
    } else if (Thenable.isImplementedBy(x)) {
      x = /** @type {!Thenable} */x;
      this.state_ = CancellablePromise.State_.BLOCKED;
      x.then(this.unblockAndFulfill_, this.unblockAndReject_, this);
      return;
    } else if (isObject(x)) {
      try {
        var then = x.then;
        if (isFunction(then)) {
          this.tryThen_(x, then);
          return;
        }
      } catch (e) {
        state = CancellablePromise.State_.REJECTED;
        x = e;
      }
    }

    this.result_ = x;
    this.state_ = state;
    this.scheduleCallbacks_();

    if (state === CancellablePromise.State_.REJECTED && !x.IS_CANCELLATION_ERROR) {
      CancellablePromise.addUnhandledRejection_(this, x);
    }
  };

  /**
   * Attempts to call the {@code then} method on an object in the hopes that it is
   * a Promise-compatible instance. This allows interoperation between different
   * Promise implementations, however a non-compliant object may cause a Promise
   * to hang indefinitely. If the {@code then} method throws an exception, the
   * dependent Promise will be rejected with the thrown value.
   *
   * @see http://promisesaplus.com/#point-70
   *
   * @param {Thenable} thenable An object with a {@code then} method that may be
   *     compatible with the Promise/A+ specification.
   * @param {!Function} then The {@code then} method of the Thenable object.
   * @private
   */
  CancellablePromise.prototype.tryThen_ = function (thenable, then) {
    this.state_ = CancellablePromise.State_.BLOCKED;
    var promise = this;
    var called = false;

    var resolve = function resolve(value) {
      if (!called) {
        called = true;
        promise.unblockAndFulfill_(value);
      }
    };

    var reject = function reject(reason) {
      if (!called) {
        called = true;
        promise.unblockAndReject_(reason);
      }
    };

    try {
      then.call(thenable, resolve, reject);
    } catch (e) {
      reject(e);
    }
  };

  /**
   * Executes the pending callbacks of a resolved Promise after a timeout.
   *
   * Section 2.2.4 of the Promises/A+ specification requires that Promise
   * callbacks must only be invoked from a call stack that only contains Promise
   * implementation code, which we accomplish by invoking callback execution after
   * a timeout. If {@code startExecution_} is called multiple times for the same
   * Promise, the callback chain will be evaluated only once. Additional callbacks
   * may be added during the evaluation phase, and will be executed in the same
   * event loop.
   *
   * All Promises added to the waiting list during the same browser event loop
   * will be executed in one batch to avoid using a separate timeout per Promise.
   *
   * @private
   */
  CancellablePromise.prototype.scheduleCallbacks_ = function () {
    if (!this.executing_) {
      this.executing_ = true;
      async.run(this.executeCallbacks_, this);
    }
  };

  /**
   * Executes all pending callbacks for this Promise.
   *
   * @private
   */
  CancellablePromise.prototype.executeCallbacks_ = function () {
    while (this.callbackEntries_ && this.callbackEntries_.length) {
      var entries = this.callbackEntries_;
      this.callbackEntries_ = [];

      for (var i = 0; i < entries.length; i++) {
        this.executeCallback_(entries[i], this.state_, this.result_);
      }
    }
    this.executing_ = false;
  };

  /**
   * Executes a pending callback for this Promise. Invokes an {@code onFulfilled}
   * or {@code onRejected} callback based on the resolved state of the Promise.
   *
   * @param {!CancellablePromise.CallbackEntry_} callbackEntry An entry containing the
   *     onFulfilled and/or onRejected callbacks for this step.
   * @param {CancellablePromise.State_} state The resolution status of the Promise,
   *     either FULFILLED or REJECTED.
   * @param {*} result The resolved result of the Promise.
   * @private
   */
  CancellablePromise.prototype.executeCallback_ = function (callbackEntry, state, result) {
    if (state === CancellablePromise.State_.FULFILLED) {
      callbackEntry.onFulfilled(result);
    } else {
      this.removeUnhandledRejection_();
      callbackEntry.onRejected(result);
    }
  };

  /**
   * Marks this rejected Promise as having being handled. Also marks any parent
   * Promises in the rejected state as handled. The rejection handler will no
   * longer be invoked for this Promise (if it has not been called already).
   *
   * @private
   */
  CancellablePromise.prototype.removeUnhandledRejection_ = function () {
    var p;
    if (CancellablePromise.UNHANDLED_REJECTION_DELAY > 0) {
      for (p = this; p && p.unhandledRejectionId_; p = p.parent_) {
        clearTimeout(p.unhandledRejectionId_);
        p.unhandledRejectionId_ = 0;
      }
    } else if (CancellablePromise.UNHANDLED_REJECTION_DELAY === 0) {
      for (p = this; p && p.hadUnhandledRejection_; p = p.parent_) {
        p.hadUnhandledRejection_ = false;
      }
    }
  };

  /**
   * Marks this rejected Promise as unhandled. If no {@code onRejected} callback
   * is called for this Promise before the {@code UNHANDLED_REJECTION_DELAY}
   * expires, the reason will be passed to the unhandled rejection handler. The
   * handler typically rethrows the rejection reason so that it becomes visible in
   * the developer console.
   *
   * @param {!CancellablePromise} promise The rejected Promise.
   * @param {*} reason The Promise rejection reason.
   * @private
   */
  CancellablePromise.addUnhandledRejection_ = function (promise, reason) {
    if (CancellablePromise.UNHANDLED_REJECTION_DELAY > 0) {
      promise.unhandledRejectionId_ = setTimeout(function () {
        CancellablePromise.handleRejection_.call(null, reason);
      }, CancellablePromise.UNHANDLED_REJECTION_DELAY);
    } else if (CancellablePromise.UNHANDLED_REJECTION_DELAY === 0) {
      promise.hadUnhandledRejection_ = true;
      async.run(function () {
        if (promise.hadUnhandledRejection_) {
          CancellablePromise.handleRejection_.call(null, reason);
        }
      });
    }
  };

  /**
   * A method that is invoked with the rejection reasons for Promises that are
   * rejected but have no {@code onRejected} callbacks registered yet.
   * @type {function(*)}
   * @private
   */
  CancellablePromise.handleRejection_ = async.throwException;

  /**
   * Sets a handler that will be called with reasons from unhandled rejected
   * Promises. If the rejected Promise (or one of its descendants) has an
   * {@code onRejected} callback registered, the rejection will be considered
   * handled, and the rejection handler will not be called.
   *
   * By default, unhandled rejections are rethrown so that the error may be
   * captured by the developer console or a {@code window.onerror} handler.
   *
   * @param {function(*)} handler A function that will be called with reasons from
   *     rejected Promises. Defaults to {@code async.throwException}.
   */
  CancellablePromise.setUnhandledRejectionHandler = function (handler) {
    CancellablePromise.handleRejection_ = handler;
  };

  /**
   * Error used as a rejection reason for canceled Promises.
   *
   * @param {string=} opt_message
   * @constructor
   * @extends {Error}
   * @final
   */
  CancellablePromise.CancellationError = function (_Error) {
    babelHelpers.inherits(_class, _Error);

    function _class(opt_message) {
      babelHelpers.classCallCheck(this, _class);

      var _this = babelHelpers.possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, opt_message));

      if (opt_message) {
        _this.message = opt_message;
      }
      return _this;
    }

    return _class;
  }(Error);

  /** @override */
  CancellablePromise.CancellationError.prototype.name = 'cancel';

  this['metalNamed']['Promise'] = this['metalNamed']['Promise'] || {};
  this['metalNamed']['Promise']['CancellablePromise'] = CancellablePromise;
  this['metal']['Promise'] = CancellablePromise;
}).call(this);
'use strict';

(function () {
	var isDef = this['metalNamed']['metal']['isDef'];
	var isDefAndNotNull = this['metalNamed']['metal']['isDefAndNotNull'];
	var Uri = this['metal']['Uri'];
	var Promise = this['metalNamed']['Promise']['CancellablePromise'];

	var Ajax = function () {
		function Ajax() {
			babelHelpers.classCallCheck(this, Ajax);
		}

		babelHelpers.createClass(Ajax, null, [{
			key: 'parseResponseHeaders',


			/**
    * XmlHttpRequest's getAllResponseHeaders() method returns a string of
    * response headers according to the format described on the spec:
    * {@link http://www.w3.org/TR/XMLHttpRequest/#the-getallresponseheaders-method}.
    * This method parses that string into a user-friendly name/value pair
    * object.
    * @param {string} allHeaders All headers as string.
    * @return {!Array.<Object<string, string>>}
    */
			value: function parseResponseHeaders(allHeaders) {
				var headers = [];
				if (!allHeaders) {
					return headers;
				}
				var pairs = allHeaders.split('\r\n');
				for (var i = 0; i < pairs.length; i++) {
					var index = pairs[i].indexOf(': ');
					if (index > 0) {
						var name = pairs[i].substring(0, index);
						var value = pairs[i].substring(index + 2);
						headers.push({
							name: name,
							value: value
						});
					}
				}
				return headers;
			}

			/**
    * Requests the url using XMLHttpRequest.
    * @param {!string} url
    * @param {!string} method
    * @param {?string} body
    * @param {MultiMap=} opt_headers
    * @param {MultiMap=} opt_params
    * @param {number=} opt_timeout
    * @param {boolean=} opt_sync
    * @param {boolean=} opt_withCredentials
    * @return {Promise} Deferred ajax request.
    * @protected
    */

		}, {
			key: 'request',
			value: function request(url, method, body, opt_headers, opt_params, opt_timeout, opt_sync, opt_withCredentials) {
				url = url || '';
				method = method || 'GET';

				var request = new XMLHttpRequest();

				var promise = new Promise(function (resolve, reject) {
					request.onload = function () {
						if (request.aborted) {
							request.onerror();
							return;
						}
						resolve(request);
					};
					request.onerror = function () {
						var error = new Error('Request error');
						error.request = request;
						reject(error);
					};
				}).thenCatch(function (reason) {
					request.abort();
					throw reason;
				}).thenAlways(function () {
					clearTimeout(timeout);
				});

				if (opt_params) {
					url = new Uri(url).addParametersFromMultiMap(opt_params).toString();
				}

				request.open(method, url, !opt_sync);

				if (opt_withCredentials) {
					request.withCredentials = true;
				}

				if (opt_headers) {
					opt_headers.names().forEach(function (name) {
						request.setRequestHeader(name, opt_headers.getAll(name).join(', '));
					});
				}

				request.send(isDef(body) ? body : null);

				if (isDefAndNotNull(opt_timeout)) {
					var timeout = setTimeout(function () {
						promise.cancel('Request timeout');
					}, opt_timeout);
				}

				return promise;
			}
		}]);
		return Ajax;
	}();

	this['metal']['Ajax'] = Ajax;
}).call(this);
'use strict';

(function () {
	var Disposable = this['metalNamed']['metal']['Disposable'];

	/**
  * A cached reference to the create function.
  */

	var create = Object.create;

	/**
  * Case insensitive string Multimap implementation. Allows multiple values for
  * the same key name.
  * @extends {Disposable}
  */

	var MultiMap = function (_Disposable) {
		babelHelpers.inherits(MultiMap, _Disposable);

		function MultiMap() {
			babelHelpers.classCallCheck(this, MultiMap);

			var _this = babelHelpers.possibleConstructorReturn(this, (MultiMap.__proto__ || Object.getPrototypeOf(MultiMap)).call(this));

			_this.keys = create(null);
			_this.values = create(null);
			return _this;
		}

		/**
   * Adds value to a key name.
   * @param {string} name
   * @param {*} value
   * @chainable
   */


		babelHelpers.createClass(MultiMap, [{
			key: 'add',
			value: function add(name, value) {
				this.keys[name.toLowerCase()] = name;
				this.values[name.toLowerCase()] = this.values[name.toLowerCase()] || [];
				this.values[name.toLowerCase()].push(value);
				return this;
			}

			/**
    * Clears map names and values.
    * @chainable
    */

		}, {
			key: 'clear',
			value: function clear() {
				this.keys = create(null);
				this.values = create(null);
				return this;
			}

			/**
    * Checks if map contains a value to the key name.
    * @param {string} name
    * @return {boolean}
    * @chainable
    */

		}, {
			key: 'contains',
			value: function contains(name) {
				return name.toLowerCase() in this.values;
			}

			/**
    * @inheritDoc
    */

		}, {
			key: 'disposeInternal',
			value: function disposeInternal() {
				this.values = null;
			}

			/**
    * Gets the first added value from a key name.
    * @param {string} name
    * @return {*}
    * @chainable
    */

		}, {
			key: 'get',
			value: function get(name) {
				var values = this.values[name.toLowerCase()];
				if (values) {
					return values[0];
				}
			}

			/**
    * Gets all values from a key name.
    * @param {string} name
    * @return {Array.<*>}
    */

		}, {
			key: 'getAll',
			value: function getAll(name) {
				return this.values[name.toLowerCase()];
			}

			/**
    * Returns true if the map is empty, false otherwise.
    * @return {boolean}
    */

		}, {
			key: 'isEmpty',
			value: function isEmpty() {
				return this.size() === 0;
			}

			/**
    * Gets array of key names.
    * @return {Array.<string>}
    */

		}, {
			key: 'names',
			value: function names() {
				var _this2 = this;

				return Object.keys(this.values).map(function (key) {
					return _this2.keys[key];
				});
			}

			/**
    * Removes all values from a key name.
    * @param {string} name
    * @chainable
    */

		}, {
			key: 'remove',
			value: function remove(name) {
				delete this.keys[name.toLowerCase()];
				delete this.values[name.toLowerCase()];
				return this;
			}

			/**
    * Sets the value of a key name. Relevant to replace the current values with
    * a new one.
    * @param {string} name
    * @param {*} value
    * @chainable
    */

		}, {
			key: 'set',
			value: function set(name, value) {
				this.keys[name.toLowerCase()] = name;
				this.values[name.toLowerCase()] = [value];
				return this;
			}

			/**
    * Gets the size of the map key names.
    * @return {number}
    */

		}, {
			key: 'size',
			value: function size() {
				return this.names().length;
			}

			/**
    * Returns the parsed values as a string.
    * @return {string}
    */

		}, {
			key: 'toString',
			value: function toString() {
				return JSON.stringify(this.values);
			}
		}]);
		return MultiMap;
	}(Disposable);

	this['metal']['MultiMap'] = MultiMap;
}).call(this);
'use strict';

(function () {
	var Ajax = this['metal']['Ajax'];
	var MultiMap = this['metal']['MultiMap'];

	/**
  * basicLogin makes a GET request to a given "login" URL,
  * with a basic authorization header given a username and
  * a password
  *
  * @return {Promise} a promise
  */

	function basicLogin() {
		var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		var username = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
		var password = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

		return new Promise(function (resolve, reject) {
			if (!url || !username || !password) {
				reject(new Error('a url, username and password are required'));
			}

			var optHeaders = new MultiMap();
			optHeaders.add('Authorization', 'Basic ' + btoa(username + ':' + password));

			return Ajax.request(url, 'GET', null, optHeaders).then(function (val) {
				resolve(val);
			}, function (err) {
				reject(err);
			});
		});
	}

	this['metalNamed']['Services'] = this['metalNamed']['Services'] || {};
	this['metalNamed']['Services']['basicLogin'] = basicLogin;
}).call(this);
'use strict';

// import WeDeploy from 'wedeploy';
// import aBaseLogin from './aBaseLogin';
//
// export default class WeDeployLogin extends aBaseLogin {
//
// 	login(userName, password) {
// 		return WeDeploy
// 			.auth('http://auth.boilerplate-auth.wedeploy.io')
// 			.signInWithEmailAndPassword(userName, password);
// 	}
// }

(function () {}).call(this);
}).call(this);
//# sourceMappingURL=LiferayLogin.js.map
