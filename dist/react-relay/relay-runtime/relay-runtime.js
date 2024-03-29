/**
 * Relay v5.0.0
 */
!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t(require("fbjs/lib/invariant"), require("@babel/runtime/helpers/interopRequireDefault"), require("@babel/runtime/helpers/objectSpread"), require("fbjs/lib/warning"), require("@babel/runtime/helpers/toConsumableArray"), require("@babel/runtime/helpers/defineProperty"), require("fbjs/lib/areEqual"), require("fbjs/lib/mapObject"), require("fbjs/lib/sprintf"), require("fbjs/lib/emptyFunction"), require("fbjs/lib/removeFromArray"), require("fbjs/lib/ErrorUtils"), require("fbjs/lib/resolveImmediate")) : "function" == typeof define && define.amd ? define(["fbjs/lib/invariant", "@babel/runtime/helpers/interopRequireDefault", "@babel/runtime/helpers/objectSpread", "fbjs/lib/warning", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/defineProperty", "fbjs/lib/areEqual", "fbjs/lib/mapObject", "fbjs/lib/sprintf", "fbjs/lib/emptyFunction", "fbjs/lib/removeFromArray", "fbjs/lib/ErrorUtils", "fbjs/lib/resolveImmediate"], t) : "object" == typeof exports ? exports.RelayRuntime = t(require("fbjs/lib/invariant"), require("@babel/runtime/helpers/interopRequireDefault"), require("@babel/runtime/helpers/objectSpread"), require("fbjs/lib/warning"), require("@babel/runtime/helpers/toConsumableArray"), require("@babel/runtime/helpers/defineProperty"), require("fbjs/lib/areEqual"), require("fbjs/lib/mapObject"), require("fbjs/lib/sprintf"), require("fbjs/lib/emptyFunction"), require("fbjs/lib/removeFromArray"), require("fbjs/lib/ErrorUtils"), require("fbjs/lib/resolveImmediate")) : e.RelayRuntime = t(e["fbjs/lib/invariant"], e["@babel/runtime/helpers/interopRequireDefault"], e["@babel/runtime/helpers/objectSpread"], e["fbjs/lib/warning"], e["@babel/runtime/helpers/toConsumableArray"], e["@babel/runtime/helpers/defineProperty"], e["fbjs/lib/areEqual"], e["fbjs/lib/mapObject"], e["fbjs/lib/sprintf"], e["fbjs/lib/emptyFunction"], e["fbjs/lib/removeFromArray"], e["fbjs/lib/ErrorUtils"], e["fbjs/lib/resolveImmediate"]);
}(window, function (e, t, r, n, i, o, a, s, u, l, c, d, f) {
  return function (e) {
    var t = {};

    function r(n) {
      if (t[n]) return t[n].exports;
      var i = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
    }

    return r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var i in e) r.d(n, i, function (t) {
        return e[t];
      }.bind(null, i));
      return n;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = 49);
  }([function (t, r) {
    t.exports = e;
  }, function (e, t, r) {
    "use strict";

    var n = r(2)(r(8)),
        i = r(5),
        o = r(23),
        a = r(0),
        s = r(9),
        u = i.VARIABLE,
        l = "__module_component_",
        c = "__module_operation_";

    function d(e, t) {
      var r = {};
      return e.forEach(function (e) {
        e.kind === u ? r[e.name] = function (e, t) {
          return t.hasOwnProperty(e) || a(!1, "getVariableValue(): Undefined variable `%s`.", e), s(t[e]);
        }(e.variableName, t) : r[e.name] = e.value;
      }), r;
    }

    function f(e, t) {
      if (!t) return e;
      var r = [];

      for (var n in t) if (t.hasOwnProperty(n)) {
        var i = t[n];
        null != i && r.push(n + ":" + JSON.stringify(i));
      }

      return 0 === r.length ? e : e + "(".concat(r.join(","), ")");
    }

    var p = {
      FRAGMENTS_KEY: "__fragments",
      FRAGMENT_OWNER_KEY: "__fragmentOwner",
      FRAGMENT_PROP_NAME_KEY: "__fragmentPropName",
      MODULE_COMPONENT_KEY: "__module_component",
      ID_KEY: "__id",
      REF_KEY: "__ref",
      REFS_KEY: "__refs",
      ROOT_ID: "client:root",
      ROOT_TYPE: "__Root",
      TYPENAME_KEY: "__typename",
      UNPUBLISH_RECORD_SENTINEL: Object.freeze({
        __UNPUBLISH_RECORD_SENTINEL: !0
      }),
      UNPUBLISH_FIELD_SENTINEL: Object.freeze({
        __UNPUBLISH_FIELD_SENTINEL: !0
      }),
      getArgumentValues: d,
      getHandleStorageKey: function (e, t) {
        var r = e.dynamicKey,
            i = e.handle,
            a = e.key,
            s = e.name,
            u = e.args,
            l = e.filters,
            c = o(i, a, s),
            p = null;
        return u && l && 0 !== u.length && 0 !== l.length && (p = u.filter(function (e) {
          return l.indexOf(e.name) > -1;
        })), r && (p = null != p ? [r].concat((0, n.default)(p)) : [r]), null === p ? c : f(c, d(p, t));
      },
      getStorageKey: function (e, t) {
        if (e.storageKey) return e.storageKey;
        var r = e.args,
            n = e.name;
        return r && 0 !== r.length ? f(n, d(r, t)) : n;
      },
      getStableStorageKey: function (e, t) {
        return f(e, s(t));
      },
      getModuleComponentKey: function (e) {
        return "".concat(l).concat(e);
      },
      getModuleOperationKey: function (e) {
        return "".concat(c).concat(e);
      }
    };
    e.exports = p;
  }, function (e, r) {
    e.exports = t;
  }, function (e, t) {
    e.exports = r;
  }, function (e, t) {
    e.exports = n;
  }, function (e, t, r) {
    "use strict";

    e.exports = {
      CONDITION: "Condition",
      CLIENT_EXTENSION: "ClientExtension",
      DEFER: "Defer",
      CONNECTION_FIELD: "ConnectionField",
      FRAGMENT: "Fragment",
      FRAGMENT_SPREAD: "FragmentSpread",
      INLINE_DATA_FRAGMENT_SPREAD: "InlineDataFragmentSpread",
      INLINE_DATA_FRAGMENT: "InlineDataFragment",
      INLINE_FRAGMENT: "InlineFragment",
      LINKED_FIELD: "LinkedField",
      LINKED_HANDLE: "LinkedHandle",
      LITERAL: "Literal",
      LOCAL_ARGUMENT: "LocalArgument",
      MODULE_IMPORT: "ModuleImport",
      OPERATION: "Operation",
      REQUEST: "Request",
      ROOT_ARGUMENT: "RootArgument",
      SCALAR_FIELD: "ScalarField",
      SCALAR_HANDLE: "ScalarHandle",
      SPLIT_OPERATION: "SplitOperation",
      STREAM: "Stream",
      VARIABLE: "Variable"
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(2)(r(3)),
        i = r(19),
        o = r(13),
        a = r(0),
        s = r(4),
        u = r(7).isClientID,
        l = r(1),
        c = l.ID_KEY,
        d = l.REF_KEY,
        f = l.REFS_KEY,
        p = l.TYPENAME_KEY,
        h = l.UNPUBLISH_FIELD_SENTINEL;

    function _(e) {
      return e[c];
    }

    function v(e) {
      return e[p];
    }

    e.exports = {
      clone: function (e) {
        return (0, n.default)({}, e);
      },
      copyFields: function (e, t) {
        for (var r in e) e.hasOwnProperty(r) && r !== c && r !== p && (t[r] = e[r]);
      },
      create: function (e, t) {
        var r = {};
        return r[c] = e, r[p] = t, r;
      },
      freeze: function (e) {
        o(e);
      },
      getDataID: _,
      getLinkedRecordID: function (e, t) {
        var r = e[t];
        return null == r ? r : ("object" == typeof r && r && "string" == typeof r[d] || a(!1, "RelayModernRecord.getLinkedRecordID(): Expected `%s.%s` to be a linked ID, was `%s`.", e[c], t, JSON.stringify(r)), r[d]);
      },
      getLinkedRecordIDs: function (e, t) {
        var r = e[t];
        return null == r ? r : ("object" == typeof r && Array.isArray(r[f]) || a(!1, "RelayModernRecord.getLinkedRecordIDs(): Expected `%s.%s` to contain an array of linked IDs, got `%s`.", e[c], t, JSON.stringify(r)), r[f]);
      },
      getType: v,
      getValue: function (e, t) {
        var r = e[t];
        return r && "object" == typeof r && (r.hasOwnProperty(d) || r.hasOwnProperty(f)) && a(!1, "RelayModernRecord.getValue(): Expected a scalar (non-link) value for `%s.%s` but found %s.", e[c], t, r.hasOwnProperty(d) ? "a linked record" : "plural linked records"), r;
      },
      merge: function (e, t) {
        var r,
            n,
            i = _(e),
            o = _(t);

        s(i === o, "RelayModernRecord: Invalid record merge, expected both versions of the record to have the same id, got `%s` and `%s`.", i, o);
        var a = null !== (r = v(e)) && void 0 !== r ? r : null,
            l = null !== (n = v(t)) && void 0 !== n ? n : null;
        return s(u(o) || a === l, "RelayModernRecord: Invalid record merge, expected both versions of record `%s` to have the same `%s` but got conflicting types `%s` and `%s`. The GraphQL server likely violated the globally unique id requirement by returning the same id for different objects.", i, p, a, l), Object.assign({}, e, t);
      },
      setValue: function (e, t, r) {
        var n = _(e);

        if (t === c) s(n === r, "RelayModernRecord: Invalid field update, expected both versions of the record to have the same id, got `%s` and `%s`.", n, r);else if (t === p) {
          var i,
              o,
              a = null !== (i = v(e)) && void 0 !== i ? i : null,
              l = null !== (o = r) && void 0 !== o ? o : null;
          s(u(_(e)) || a === l, "RelayModernRecord: Invalid field update, expected both versions of record `%s` to have the same `%s` but got conflicting types `%s` and `%s`. The GraphQL server likely violated the globally unique id requirement by returning the same id for different objects.", n, p, a, l);
        }
        e[t] = r;
      },
      setLinkedRecordID: function (e, t, r) {
        var n = {};
        n[d] = r, e[t] = n;
      },
      setLinkedRecordIDs: function (e, t, r) {
        var n = {};
        n[f] = r, e[t] = n;
      },
      update: function (e, t) {
        var r,
            o,
            a = _(e),
            l = _(t);

        s(a === l, "RelayModernRecord: Invalid record update, expected both versions of the record to have the same id, got `%s` and `%s`.", a, l);
        var c = null !== (r = v(e)) && void 0 !== r ? r : null,
            d = null !== (o = v(t)) && void 0 !== o ? o : null;
        s(u(l) || c === d, "RelayModernRecord: Invalid record update, expected both versions of record `%s` to have the same `%s` but got conflicting types `%s` and `%s`. The GraphQL server likely violated the globally unique id requirement by returning the same id for different objects.", a, p, c, d);

        for (var f = null, g = Object.keys(t), m = 0; m < g.length; m++) {
          var b = g[m];
          !f && i(e[b], t[b]) || (f = null !== f ? f : (0, n.default)({}, e), t[b] !== h ? f[b] = t[b] : delete f[b]);
        }

        return null !== f ? f : e;
      }
    };
  }, function (e, t, r) {
    "use strict";

    var n = "client:";
    e.exports = {
      generateClientID: function (e, t, r) {
        var i = e + ":" + t;
        return null != r && (i += ":" + r), 0 !== i.indexOf(n) && (i = n + i), i;
      },
      isClientID: function (e) {
        return 0 === e.indexOf(n);
      }
    };
  }, function (e, t) {
    e.exports = i;
  }, function (e, t, r) {
    "use strict";

    e.exports = function e(t) {
      if (!t || "object" != typeof t) return t;
      if (Array.isArray(t)) return t.map(e);

      for (var r = Object.keys(t).sort(), n = {}, i = 0; i < r.length; i++) n[r[i]] = e(t[r[i]]);

      return n;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(19),
        i = r(0),
        o = r(4),
        a = r(20).getFragmentVariables,
        s = r(1),
        u = s.FRAGMENT_OWNER_KEY,
        l = s.FRAGMENTS_KEY,
        c = s.ID_KEY;

    function d(e, t) {
      ("object" != typeof t || null === t || Array.isArray(t)) && i(!1, "RelayModernSelector: Expected value for fragment `%s` to be an object, got `%s`.", e.name, JSON.stringify(t));
      var r = t[c],
          n = t[l],
          s = t[u];

      if ("string" == typeof r && "object" == typeof n && null !== n && "object" == typeof n[e.name] && null !== n[e.name] && "object" == typeof s && null !== s) {
        var d = s,
            f = n[e.name];
        return b(e, r, a(e, d.variables, f), d);
      }

      var p = JSON.stringify(t);
      return p.length > 499 && (p = p.substr(0, 498) + "…"), o(!1, "RelayModernSelector: Expected object to contain data for fragment `%s`, got `%s`. Make sure that the parent operation/fragment included fragment `...%s` without `@relay(mask: false)`.", e.name, p, e.name), null;
    }

    function f(e, t) {
      var r = null;
      return t.forEach(function (t, n) {
        var i = null != t ? d(e, t) : null;
        null != i && (r = r || []).push(i);
      }), null == r ? null : {
        kind: "PluralReaderSelector",
        selectors: r
      };
    }

    function p(e, t) {
      return null == t ? t : e.metadata && !0 === e.metadata.plural ? (Array.isArray(t) || i(!1, "RelayModernSelector: Expected value for fragment `%s` to be an array, got `%s`. Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.", e.name, JSON.stringify(t), e.name), f(e, t)) : (Array.isArray(t) && i(!1, "RelayModernSelector: Expected value for fragment `%s` to be an object, got `%s`. Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.", e.name, JSON.stringify(t), e.name), d(e, t));
    }

    function h(e, t) {
      return null == t ? t : e.metadata && !0 === e.metadata.plural ? (Array.isArray(t) || i(!1, "RelayModernSelector: Expected value for fragment `%s` to be an array, got `%s`. Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.", e.name, JSON.stringify(t), e.name), function (e, t) {
        var r = null;
        return t.forEach(function (t) {
          var n = null != t ? _(e, t) : null;
          null != n && (r = r || []).push(n);
        }), r;
      }(e, t)) : (Array.isArray(t) && i(!1, "RelayModernFragmentSpecResolver: Expected value for fragment `%s` to be an object, got `%s`. Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.", e.name, JSON.stringify(t), e.name), _(e, t));
    }

    function _(e, t) {
      ("object" != typeof t || null === t || Array.isArray(t)) && i(!1, "RelayModernSelector: Expected value for fragment `%s` to be an object, got `%s`.", e.name, JSON.stringify(t));
      var r = t[c];
      return "string" == typeof r ? r : (o(!1, "RelayModernSelector: Expected object to contain data for fragment `%s`, got `%s`. Make sure that the parent operation/fragment included fragment `...%s` without `@relay(mask: false)`.", e.name, JSON.stringify(t), e.name), null);
    }

    function v(e, t) {
      var r;
      return null == t ? {} : !0 === (null === (r = e.metadata) || void 0 === r ? void 0 : r.plural) ? (Array.isArray(t) || i(!1, "RelayModernSelector: Expected value for fragment `%s` to be an array, got `%s`. Remove `@relay(plural: true)` from fragment `%s` to allow the prop to be an object.", e.name, JSON.stringify(t), e.name), m(e, t)) : (Array.isArray(t) && i(!1, "RelayModernFragmentSpecResolver: Expected value for fragment `%s` to be an object, got `%s`. Add `@relay(plural: true)` to fragment `%s` to allow the prop to be an array of items.", e.name, JSON.stringify(t), e.name), g(e, t) || {});
    }

    function g(e, t) {
      var r = d(e, t);
      return r ? r.variables : null;
    }

    function m(e, t) {
      var r = {};
      return t.forEach(function (t, n) {
        if (null != t) {
          var i = g(e, t);
          null != i && Object.assign(r, i);
        }
      }), r;
    }

    function b(e, t, r, n) {
      return {
        kind: "SingularReaderSelector",
        dataID: t,
        node: e,
        variables: r,
        owner: n
      };
    }

    e.exports = {
      areEqualSelectors: function (e, t) {
        return e.owner === t.owner && e.dataID === t.dataID && e.node === t.node && n(e.variables, t.variables);
      },
      createReaderSelector: b,
      createNormalizationSelector: function (e, t, r) {
        return {
          dataID: t,
          node: e,
          variables: r
        };
      },
      getDataIDsFromFragment: h,
      getDataIDsFromObject: function (e, t) {
        var r = {};

        for (var n in e) if (e.hasOwnProperty(n)) {
          var i = e[n],
              o = t[n];
          r[n] = h(i, o);
        }

        return r;
      },
      getSingularSelector: d,
      getPluralSelector: f,
      getSelector: p,
      getSelectorsFromObject: function (e, t) {
        var r = {};

        for (var n in e) if (e.hasOwnProperty(n)) {
          var i = e[n],
              o = t[n];
          r[n] = p(i, o);
        }

        return r;
      },
      getVariablesFromSingularFragment: g,
      getVariablesFromPluralFragment: m,
      getVariablesFromFragment: v,
      getVariablesFromObject: function (e, t) {
        var r = {};

        for (var n in e) if (e.hasOwnProperty(n)) {
          var i = v(e[n], t[n]);
          Object.assign(r, i);
        }

        return r;
      }
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(59),
        i = function (e, t) {},
        o = function () {
      function e(e) {
        if (!e || "function" != typeof e) throw new Error("Source must be a Function: " + String(e));
        this._source = e;
      }

      e.create = function (t) {
        return new e(t);
      }, e.onUnhandledError = function (e) {
        i = e;
      }, e.from = function (e) {
        return a(e) ? s(e) : n(e) ? u(e) : l(e);
      }, e.fromLegacy = function (t) {
        return e.create(function (e) {
          var r = t({
            onNext: e.next,
            onError: e.error,
            onCompleted: e.complete
          });
          return a(r) ? r.subscribe(e) : function () {
            return r.dispose();
          };
        });
      };
      var t = e.prototype;
      return t.catch = function (t) {
        var r = this;
        return e.create(function (e) {
          var n;
          return r.subscribe({
            start: function (e) {
              n = e;
            },
            next: e.next,
            complete: e.complete,
            error: function (r) {
              try {
                t(r).subscribe({
                  start: function (e) {
                    n = e;
                  },
                  next: e.next,
                  complete: e.complete,
                  error: e.error
                });
              } catch (t) {
                e.error(t, !0);
              }
            }
          }), function () {
            return n.unsubscribe();
          };
        });
      }, t.concat = function (t) {
        var r = this;
        return e.create(function (e) {
          var n;
          return r.subscribe({
            start: function (e) {
              n = e;
            },
            next: e.next,
            error: e.error,
            complete: function () {
              n = t.subscribe(e);
            }
          }), function () {
            n && n.unsubscribe();
          };
        });
      }, t.do = function (t) {
        var r = this;
        return e.create(function (e) {
          var n = function (r) {
            return function () {
              try {
                t[r] && t[r].apply(t, arguments);
              } catch (e) {
                i(e, !0);
              }

              e[r] && e[r].apply(e, arguments);
            };
          };

          return r.subscribe({
            start: n("start"),
            next: n("next"),
            error: n("error"),
            complete: n("complete"),
            unsubscribe: n("unsubscribe")
          });
        });
      }, t.finally = function (t) {
        var r = this;
        return e.create(function (e) {
          var n = r.subscribe(e);
          return function () {
            n.unsubscribe(), t();
          };
        });
      }, t.ifEmpty = function (t) {
        var r = this;
        return e.create(function (e) {
          var n = !1,
              i = r.subscribe({
            next: function (t) {
              n = !0, e.next(t);
            },
            error: e.error,
            complete: function () {
              n ? e.complete() : i = t.subscribe(e);
            }
          });
          return function () {
            i.unsubscribe();
          };
        });
      }, t.subscribe = function (e) {
        if (!e || "object" != typeof e) throw new Error("Observer must be an Object with callbacks: " + String(e));
        return function (e, t) {
          var r,
              n = !1,
              o = function (e) {
            return Object.defineProperty(e, "closed", {
              get: function () {
                return n;
              }
            });
          };

          function a() {
            if (r) {
              if (r.unsubscribe) r.unsubscribe();else try {
                r();
              } catch (e) {
                i(e, !0);
              }
              r = void 0;
            }
          }

          var s = o({
            unsubscribe: function () {
              if (!n) {
                n = !0;

                try {
                  t.unsubscribe && t.unsubscribe(s);
                } catch (e) {
                  i(e, !0);
                } finally {
                  a();
                }
              }
            }
          });

          try {
            t.start && t.start(s);
          } catch (e) {
            i(e, !0);
          }

          if (n) return s;
          var u = o({
            next: function (e) {
              if (!n && t.next) try {
                t.next(e);
              } catch (e) {
                i(e, !0);
              }
            },
            error: function (e, r) {
              if (n || !t.error) n = !0, i(e, r || !1), a();else {
                n = !0;

                try {
                  t.error(e);
                } catch (e) {
                  i(e, !0);
                } finally {
                  a();
                }
              }
            },
            complete: function () {
              if (!n) {
                n = !0;

                try {
                  t.complete && t.complete();
                } catch (e) {
                  i(e, !0);
                } finally {
                  a();
                }
              }
            }
          });

          try {
            r = e(u);
          } catch (e) {
            u.error(e, !0);
          }

          if (void 0 !== r && "function" != typeof r && (!r || "function" != typeof r.unsubscribe)) throw new Error("Returned cleanup function which cannot be called: " + String(r));
          n && a();
          return s;
        }(this._source, e);
      }, t.subscribeLegacy = function (e) {
        return {
          dispose: this.subscribe({
            next: e.onNext,
            error: e.onError,
            complete: e.onCompleted
          }).unsubscribe
        };
      }, t.map = function (t) {
        var r = this;
        return e.create(function (e) {
          var n = r.subscribe({
            complete: e.complete,
            error: e.error,
            next: function (r) {
              try {
                var n = t(r);
                e.next(n);
              } catch (t) {
                e.error(t, !0);
              }
            }
          });
          return function () {
            n.unsubscribe();
          };
        });
      }, t.mergeMap = function (t) {
        var r = this;
        return e.create(function (n) {
          var i = [];

          function o(e) {
            this._sub = e, i.push(e);
          }

          function a() {
            i.splice(i.indexOf(this._sub), 1), 0 === i.length && n.complete();
          }

          return r.subscribe({
            start: o,
            next: function (r) {
              try {
                n.closed || e.from(t(r)).subscribe({
                  start: o,
                  next: n.next,
                  error: n.error,
                  complete: a
                });
              } catch (e) {
                n.error(e, !0);
              }
            },
            error: n.error,
            complete: a
          }), function () {
            i.forEach(function (e) {
              return e.unsubscribe();
            }), i.length = 0;
          };
        });
      }, t.poll = function (t) {
        var r = this;
        if ("number" != typeof t || t <= 0) throw new Error("RelayObservable: Expected pollInterval to be positive, got: " + t);
        return e.create(function (e) {
          var n, i;
          return function o() {
            n = r.subscribe({
              next: e.next,
              error: e.error,
              complete: function () {
                i = setTimeout(o, t);
              }
            });
          }(), function () {
            clearTimeout(i), n.unsubscribe();
          };
        });
      }, t.toPromise = function () {
        var e = this;
        return new Promise(function (t, r) {
          var n;
          e.subscribe({
            start: function (e) {
              n = e;
            },
            next: function (e) {
              t(e), n.unsubscribe();
            },
            error: r,
            complete: t
          });
        });
      }, e;
    }();

    function a(e) {
      return "object" == typeof e && null !== e && "function" == typeof e.subscribe;
    }

    function s(e) {
      return e instanceof o ? e : o.create(function (t) {
        return e.subscribe(t);
      });
    }

    function u(e) {
      return o.create(function (t) {
        e.then(function (e) {
          t.next(e), t.complete();
        }, t.error);
      });
    }

    function l(e) {
      return o.create(function (t) {
        t.next(e), t.complete();
      });
    }

    o.onUnhandledError(function (e, t) {
      "function" == typeof fail ? fail(String(e)) : t ? setTimeout(function () {
        throw e;
      }) : "undefined" != typeof console && console.error("RelayObservable: Unhandled Error", e);
    }), e.exports = o;
  }, function (e, t, r) {
    "use strict";

    var n = r(13),
        i = r(63),
        o = r(20).getOperationVariables,
        a = r(10),
        s = a.createNormalizationSelector,
        u = a.createReaderSelector,
        l = r(1).ROOT_ID;

    function c(e, t) {
      var r = {
        identifier: i(e.params, t),
        node: e,
        variables: t
      };
      return n(t), Object.freeze(e), Object.freeze(r), r;
    }

    e.exports = {
      createOperationDescriptor: function (e, t) {
        var r = e.operation,
            n = o(r, t),
            i = l,
            a = c(e, n),
            d = {
          fragment: u(e.fragment, i, n, a),
          request: a,
          root: s(r, i, n)
        };
        return Object.freeze(d.fragment), Object.freeze(d.root), Object.freeze(d), d;
      },
      createRequestDescriptor: c
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = function e(t) {
      return Object.freeze(t), Object.getOwnPropertyNames(t).forEach(function (r) {
        var n = t[r];
        n && "object" == typeof n && !Object.isFrozen(n) && e(n);
      }), t;
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = {
      EXISTENT: "EXISTENT",
      NONEXISTENT: "NONEXISTENT",
      UNKNOWN: "UNKNOWN"
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(25),
        i = r(54),
        o = r(55),
        a = function () {
      function e(t) {
        return e.create(t);
      }

      return e.create = function (e) {
        return new (n.USE_RECORD_SOURCE_MAP_IMPL ? i : o)(e);
      }, e;
    }();

    e.exports = a;
  }, function (e, t, r) {
    "use strict";

    var n = r(5),
        i = r(0);

    function o(e) {
      var t = "function" == typeof e ? e : "function" == typeof e.modern ? e.modern : null;
      if (null === t) return e;
      var r = t();
      return r.default ? r.default : r;
    }

    function a(e) {
      var t = o(e);
      return "object" == typeof t && null !== t && t.kind === n.FRAGMENT;
    }

    function s(e) {
      var t = o(e);
      return "object" == typeof t && null !== t && t.kind === n.REQUEST;
    }

    function u(e) {
      var t = o(e);
      return "object" == typeof t && null !== t && t.kind === n.INLINE_DATA_FRAGMENT;
    }

    function l(e) {
      var t = o(e);
      return a(t) || i(!1, "RelayModernGraphQLTag: Expected a fragment, got `%s`.", JSON.stringify(t)), t;
    }

    e.exports = {
      getFragment: l,
      getPaginationFragment: function (e) {
        var t,
            r = l(e),
            n = null === (t = r.metadata) || void 0 === t ? void 0 : t.refetch,
            i = null == n ? void 0 : n.connection;
        return null === n || "object" != typeof n || null === i || "object" != typeof i ? null : r;
      },
      getRefetchableFragment: function (e) {
        var t,
            r = l(e),
            n = null === (t = r.metadata) || void 0 === t ? void 0 : t.refetch;
        return null === n || "object" != typeof n ? null : r;
      },
      getRequest: function (e) {
        var t = o(e);
        return s(t) || i(!1, "RelayModernGraphQLTag: Expected a request, got `%s`.", JSON.stringify(t)), t;
      },
      getInlineDataFragment: function (e) {
        var t = o(e);
        return u(t) || i(!1, "RelayModernGraphQLTag: Expected an inline data fragment, got `%s`.", JSON.stringify(t)), t;
      },
      graphql: function (e) {
        i(!1, "graphql: Unexpected invocation at runtime. Either the Babel transform was not set up, or it failed to identify this call site. Make sure it is being used verbatim as `graphql`.");
      },
      isFragment: a,
      isRequest: s,
      isInlineDataFragment: u
    };
  }, function (e, t) {
    e.exports = o;
  }, function (e, t, r) {
    "use strict";

    var n = r(21),
        i = r(4),
        o = Object.freeze({
      RANGE_ADD: "RANGE_ADD",
      RANGE_DELETE: "RANGE_DELETE",
      NODE_DELETE: "NODE_DELETE",
      FIELDS_CHANGE: "FIELDS_CHANGE",
      REQUIRED_CHILDREN: "REQUIRED_CHILDREN"
    }),
        a = Object.freeze({
      APPEND: "append",
      IGNORE: "ignore",
      PREPEND: "prepend",
      REFETCH: "refetch",
      REMOVE: "remove"
    });

    function s(e) {
      return e.fragment.selections && e.fragment.selections.length > 0 && "LinkedField" === e.fragment.selections[0].kind ? e.fragment.selections[0].name : null;
    }

    e.exports = {
      MutationTypes: o,
      RangeOperations: a,
      convert: function (e, t, r, o) {
        var a = r ? [r] : [],
            u = o ? [o] : [];
        return e.forEach(function (e) {
          switch (e.type) {
            case "NODE_DELETE":
              var r = function (e, t) {
                var r = e.deletedIDFieldName,
                    n = s(t);
                return n ? function (e, t) {
                  var i = e.getRootField(n);

                  if (i) {
                    var o = i.getValue(r),
                        a = Array.isArray(o) ? o : [o];
                    a.forEach(function (t) {
                      t && "string" == typeof t && e.delete(t);
                    });
                  }
                } : null;
              }(e, t);

              r && (a.push(r), u.push(r));
              break;

            case "RANGE_ADD":
              var o = function (e, t) {
                var r = e.parentID,
                    o = e.connectionInfo,
                    a = e.edgeName;
                if (!r) return i(!1, "RelayDeclarativeMutationConfig: For mutation config RANGE_ADD to work you must include a parentID"), null;
                var u = s(t);
                return o && u ? function (e, t) {
                  var s = e.get(r);

                  if (s) {
                    var l = e.getRootField(u);

                    if (l) {
                      var c = l.getLinkedRecord(a),
                          d = !0,
                          f = !1,
                          p = void 0;

                      try {
                        for (var h, _ = o[Symbol.iterator](); !(d = (h = _.next()).done); d = !0) {
                          var v = h.value;

                          if (c) {
                            var g = n.getConnection(s, v.key, v.filters);

                            if (g) {
                              var m = n.buildConnectionEdge(e, g, c);
                              if (m) switch (v.rangeBehavior) {
                                case "append":
                                  n.insertEdgeAfter(g, m);
                                  break;

                                case "ignore":
                                  break;

                                case "prepend":
                                  n.insertEdgeBefore(g, m);
                                  break;

                                default:
                                  i(!1, "RelayDeclarativeMutationConfig: RANGE_ADD range behavior `%s` will not work as expected in RelayModern, supported range behaviors are 'append', 'prepend', and 'ignore'.", v.rangeBehavior);
                              }
                            }
                          }
                        }
                      } catch (e) {
                        f = !0, p = e;
                      } finally {
                        try {
                          d || null == _.return || _.return();
                        } finally {
                          if (f) throw p;
                        }
                      }
                    }
                  }
                } : null;
              }(e, t);

              o && (a.push(o), u.push(o));
              break;

            case "RANGE_DELETE":
              var l = function (e, t) {
                var r = e.parentID,
                    o = e.connectionKeys,
                    a = e.pathToConnection,
                    u = e.deletedIDFieldName;
                if (!r) return i(!1, "RelayDeclarativeMutationConfig: For mutation config RANGE_DELETE to work you must include a parentID"), null;
                var l = s(t);
                return l ? function (e, t) {
                  if (t) {
                    var s = [],
                        c = t[l];

                    if (c && Array.isArray(u)) {
                      var d = !0,
                          f = !1,
                          p = void 0;

                      try {
                        for (var h, _ = u[Symbol.iterator](); !(d = (h = _.next()).done); d = !0) {
                          var v = h.value;
                          c && "object" == typeof c && (c = c[v]);
                        }
                      } catch (e) {
                        f = !0, p = e;
                      } finally {
                        try {
                          d || null == _.return || _.return();
                        } finally {
                          if (f) throw p;
                        }
                      }

                      Array.isArray(c) ? c.forEach(function (e) {
                        e && e.id && "object" == typeof e && "string" == typeof e.id && s.push(e.id);
                      }) : c && c.id && "string" == typeof c.id && s.push(c.id);
                    } else c && "string" == typeof u && "object" == typeof c && ("string" == typeof (c = c[u]) ? s.push(c) : Array.isArray(c) && c.forEach(function (e) {
                      "string" == typeof e && s.push(e);
                    }));

                    !function (e, t, r, o, a) {
                      i(t, "RelayDeclarativeMutationConfig: RANGE_DELETE must provide a connectionKeys");
                      var s = o.get(e);
                      if (s) if (r.length < 2) i(!1, "RelayDeclarativeMutationConfig: RANGE_DELETE pathToConnection must include at least parent and connection");else {
                        for (var u = s, l = 1; l < r.length - 1; l++) u && (u = u.getLinkedRecord(r[l]));

                        if (t && u) {
                          var c = !0,
                              d = !1,
                              f = void 0;

                          try {
                            for (var p, h = function () {
                              var e = p.value,
                                  t = n.getConnection(u, e.key, e.filters);
                              t && a.forEach(function (e) {
                                n.deleteNode(t, e);
                              });
                            }, _ = t[Symbol.iterator](); !(c = (p = _.next()).done); c = !0) h();
                          } catch (e) {
                            d = !0, f = e;
                          } finally {
                            try {
                              c || null == _.return || _.return();
                            } finally {
                              if (d) throw f;
                            }
                          }
                        } else i(!1, "RelayDeclarativeMutationConfig: RANGE_DELETE pathToConnection is incorrect. Unable to find connection with parentID: %s and path: %s", e, r.toString());
                      }
                    }(r, o, a, e, s);
                  }
                } : null;
              }(e, t);

              l && (a.push(l), u.push(l));
          }
        }), {
          optimisticUpdater: function (e, t) {
            a.forEach(function (r) {
              r(e, t);
            });
          },
          updater: function (e, t) {
            u.forEach(function (r) {
              r(e, t);
            });
          }
        };
      }
    };
  }, function (e, t) {
    e.exports = a;
  }, function (e, t, r) {
    "use strict";

    var n = r(2)(r(3)),
        i = r(0);
    e.exports = {
      getFragmentVariables: function (e, t, r) {
        var o;
        return e.argumentDefinitions.forEach(function (a) {
          if (!r.hasOwnProperty(a.name)) switch (o = o || (0, n.default)({}, r), a.kind) {
            case "LocalArgument":
              o[a.name] = a.defaultValue;
              break;

            case "RootArgument":
              if (!t.hasOwnProperty(a.name)) {
                o[a.name] = void 0;
                break;
              }

              o[a.name] = t[a.name];
              break;

            default:
              i(!1, "RelayConcreteVariables: Unexpected node kind `%s` in fragment `%s`.", a.kind, e.name);
          }
        }), o || r;
      },
      getOperationVariables: function (e, t) {
        var r = {};
        return e.argumentDefinitions.forEach(function (e) {
          var n = e.defaultValue;
          null != t[e.name] && (n = t[e.name]), r[e.name] = n;
        }), r;
      }
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(22),
        i = r(23),
        o = r(0),
        a = r(4),
        s = r(7).generateClientID,
        u = "connection",
        l = "__connection_next_edge_index";

    function c(e, t, r) {
      if (null == r) return r;
      var i = n.get().EDGES,
          a = t.getValue(l);
      "number" != typeof a && o(!1, "RelayConnectionHandler: Expected %s to be a number, got `%s`.", l, a);
      var u = s(t.getDataID(), i, a),
          c = e.create(u, r.getType());
      return c.copyFieldsFrom(r), t.setValue(a + 1, l), c;
    }

    function d(e, t, r) {
      for (var i = n.get().NODE, o = 0; o < e.length; o++) {
        var a = e[o];

        if (a) {
          var s = a.getLinkedRecord(i),
              u = s && s.getDataID();

          if (u) {
            if (r.has(u)) continue;
            r.add(u);
          }

          t.push(a);
        }
      }
    }

    e.exports = {
      buildConnectionEdge: c,
      createEdge: function (e, t, r, i) {
        var o = n.get().NODE,
            a = s(t.getDataID(), r.getDataID()),
            u = e.get(a);
        return u || (u = e.create(a, i)), u.setLinkedRecord(r, o), u;
      },
      deleteNode: function (e, t) {
        var r = n.get(),
            i = r.EDGES,
            o = r.NODE,
            a = e.getLinkedRecords(i);

        if (a) {
          for (var s, u = 0; u < a.length; u++) {
            var l = a[u],
                c = l && l.getLinkedRecord(o);
            null != c && c.getDataID() === t ? void 0 === s && (s = a.slice(0, u)) : void 0 !== s && s.push(l);
          }

          void 0 !== s && e.setLinkedRecords(s, i);
        }
      },
      getConnection: function (e, t, r) {
        var n = i(u, t, null);
        return e.getLinkedRecord(n, r);
      },
      insertEdgeAfter: function (e, t, r) {
        var i = n.get(),
            o = i.CURSOR,
            a = i.EDGES,
            s = e.getLinkedRecords(a);

        if (s) {
          var u;
          if (null == r) u = s.concat(t);else {
            u = [];

            for (var l = !1, c = 0; c < s.length; c++) {
              var d = s[c];
              u.push(d), null != d && r === d.getValue(o) && (u.push(t), l = !0);
            }

            l || u.push(t);
          }
          e.setLinkedRecords(u, a);
        } else e.setLinkedRecords([t], a);
      },
      insertEdgeBefore: function (e, t, r) {
        var i = n.get(),
            o = i.CURSOR,
            a = i.EDGES,
            s = e.getLinkedRecords(a);

        if (s) {
          var u;
          if (null == r) u = [t].concat(s);else {
            u = [];

            for (var l = !1, c = 0; c < s.length; c++) {
              var d = s[c];
              null != d && r === d.getValue(o) && (u.push(t), l = !0), u.push(d);
            }

            l || u.unshift(t);
          }
          e.setLinkedRecords(u, a);
        } else e.setLinkedRecords([t], a);
      },
      update: function (e, t) {
        var r,
            i = e.get(t.dataID);

        if (i) {
          var o = n.get(),
              u = o.EDGES,
              f = o.END_CURSOR,
              p = o.HAS_NEXT_PAGE,
              h = o.HAS_PREV_PAGE,
              _ = o.PAGE_INFO,
              v = o.PAGE_INFO_TYPE,
              g = o.START_CURSOR,
              m = i.getLinkedRecord(t.fieldKey),
              b = m && m.getLinkedRecord(_);

          if (m) {
            var y = s(i.getDataID(), t.handleKey),
                E = i.getLinkedRecord(t.handleKey),
                R = null !== (r = E) && void 0 !== r ? r : e.get(y),
                D = R && R.getLinkedRecord(_);

            if (R) {
              null == E && i.setLinkedRecord(R, t.handleKey);
              var S = R,
                  I = m.getLinkedRecords(u);
              I && (I = I.map(function (t) {
                return c(e, S, t);
              }));
              var k = S.getLinkedRecords(u),
                  O = S.getLinkedRecord(_);
              S.copyFieldsFrom(m), k && S.setLinkedRecords(k, u), O && S.setLinkedRecord(O, _);
              var N = [],
                  x = t.args;

              if (k && I) {
                if (null != x.after) {
                  if (!D || x.after !== D.getValue(f)) return void a(!1, "RelayConnectionHandler: Unexpected after cursor `%s`, edges must be fetched from the end of the list (`%s`).", x.after, D && D.getValue(f));
                  var L = new Set();
                  d(k, N, L), d(I, N, L);
                } else if (null != x.before) {
                  if (!D || x.before !== D.getValue(g)) return void a(!1, "RelayConnectionHandler: Unexpected before cursor `%s`, edges must be fetched from the beginning of the list (`%s`).", x.before, D && D.getValue(g));
                  var T = new Set();
                  d(I, N, T), d(k, N, T);
                } else N = I;
              } else N = I || k;

              if (null != N && N !== k && S.setLinkedRecords(N, u), D && b) if (null == x.after && null == x.before) D.copyFieldsFrom(b);else if (null != x.before || null == x.after && x.last) {
                D.setValue(!!b.getValue(h), h);
                var w = b.getValue(g);
                "string" == typeof w && D.setValue(w, g);
              } else if (null != x.after || null == x.before && x.first) {
                D.setValue(!!b.getValue(p), p);
                var P = b.getValue(f);
                "string" == typeof P && D.setValue(P, f);
              }
            } else {
              var F = e.create(y, m.getType());
              F.setValue(0, l), F.copyFieldsFrom(m);
              var A = m.getLinkedRecords(u);
              A && (A = A.map(function (t) {
                return c(e, F, t);
              }), F.setLinkedRecords(A, u)), i.setLinkedRecord(F, t.handleKey), (D = e.create(s(F.getDataID(), _), v)).setValue(!1, p), D.setValue(!1, h), D.setValue(null, f), D.setValue(null, g), b && D.copyFieldsFrom(b), F.setLinkedRecord(D, _);
            }
          } else i.setValue(null, t.handleKey);
        }
      }
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(2)(r(17)),
        i = {
      after: !0,
      before: !0,
      find: !0,
      first: !0,
      last: !0,
      surrounds: !0
    },
        o = {
      find: !0,
      first: !0,
      last: !0
    },
        a = {
      CLIENT_MUTATION_ID: "clientMutationId",
      CURSOR: "cursor",
      EDGES: "edges",
      END_CURSOR: "endCursor",
      HAS_NEXT_PAGE: "hasNextPage",
      HAS_PREV_PAGE: "hasPreviousPage",
      NODE: "node",
      PAGE_INFO_TYPE: "PageInfo",
      PAGE_INFO: "pageInfo",
      START_CURSOR: "startCursor"
    },
        s = {
      inject: function (e) {
        a = e;
      },
      get: function () {
        return a;
      },
      isConnectionCall: function (e) {
        return i.hasOwnProperty(e.name);
      },
      hasRangeCalls: function (e) {
        return e.some(function (e) {
          return o.hasOwnProperty(e.name);
        });
      },
      getDefaultPageInfo: function () {
        var e;
        return e = {}, (0, n.default)(e, a.END_CURSOR, null), (0, n.default)(e, a.HAS_NEXT_PAGE, !1), (0, n.default)(e, a.HAS_PREV_PAGE, !1), (0, n.default)(e, a.START_CURSOR, null), e;
      }
    };
    e.exports = s;
  }, function (e, t, r) {
    "use strict";

    var n = r(0),
        i = r(28).DEFAULT_HANDLE_KEY;

    e.exports = function (e, t, r) {
      return t && t !== i ? "__".concat(t, "_").concat(e) : (null == r && n(!1, "getRelayHandleKey: Expected either `fieldName` or `key` in `handle` to be provided"), "__".concat(r, "_").concat(e));
    };
  }, function (e, t, r) {
    "use strict";

    var n = (0, r(7).generateClientID)(r(1).ROOT_ID, "viewer");
    e.exports = {
      VIEWER_ID: n,
      VIEWER_TYPE: "Viewer"
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = {
      ENABLE_VARIABLE_CONNECTION_KEY: !1,
      ENABLE_CONNECTION_RESOLVERS: !1,
      USE_RECORD_SOURCE_MAP_IMPL: !1
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(56),
        i = r(57),
        o = {
      "*": []
    },
        a = {
      "*": []
    },
        s = {},
        u = {
      stop: n
    },
        l = {
      instrumentMethods: function (e, t) {
        for (var r in t) t.hasOwnProperty(r) && "function" == typeof e[r] && (e[r] = l.instrument(t[r], e[r]));
      },
      instrument: function (e, t) {
        o.hasOwnProperty(e) || (o[e] = []);

        var r = o["*"],
            n = o[e],
            a = [],
            u = [],
            l = function () {
          var i;
          if (0 === n.length && 0 === a.length && 0 === r.length) i = t.apply(this, arguments);else if (u.push([r.length, n.length, a.length, this, arguments, s]), function i() {
            var o = u[u.length - 1];
            o[0] ? (o[0]--, r[o[0]](e, i)) : o[1] ? (o[1]--, n[o[1]](e, i)) : o[2] ? (o[2]--, a[o[2]](e, i)) : o[5] = t.apply(o[3], o[4]);
          }(), (i = u.pop()[5]) === s) throw new Error("RelayProfiler: Handler did not invoke original function.");
          return i;
        };

        return l.attachHandler = function (e) {
          a.push(e);
        }, l.detachHandler = function (e) {
          i(a, e);
        }, l.displayName = "(instrumented " + e + ")", l;
      },
      attachAggregateHandler: function (e, t) {
        o.hasOwnProperty(e) || (o[e] = []), o[e].push(t);
      },
      detachAggregateHandler: function (e, t) {
        o.hasOwnProperty(e) && i(o[e], t);
      },
      profile: function (e, t) {
        var r = a["*"].length > 0,
            n = a.hasOwnProperty(e);

        if (n || r) {
          for (var i, o = n && r ? a[e].concat(a["*"]) : n ? a[e] : a["*"], s = o.length - 1; s >= 0; s--) {
            var l = (0, o[s])(e, t);
            (i = i || []).unshift(l);
          }

          return {
            stop: function (e) {
              i && i.forEach(function (t) {
                return t(e);
              });
            }
          };
        }

        return u;
      },
      attachProfileHandler: function (e, t) {
        a.hasOwnProperty(e) || (a[e] = []), a[e].push(t);
      },
      detachProfileHandler: function (e, t) {
        a.hasOwnProperty(e) && i(a[e], t);
      }
    };
    e.exports = l;
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e) {
      return Boolean(e && e["@@RelayModernEnvironment"]);
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = {
      DEFAULT_HANDLE_KEY: ""
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(21),
        i = r(0);

    e.exports = function (e) {
      switch (e) {
        case "connection":
          return n;
      }

      i(!1, "RelayDefaultHandlerProvider: No handler provided for `%s`.", e);
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(1).ROOT_TYPE,
        i = r(24).VIEWER_ID,
        o = {
      kind: "linked",
      handle: function (e, t, r) {
        if (null != t && t.__typename === n && "viewer" === e.name) return i;
      }
    };
    e.exports = [o];
  }, function (e, t, r) {
    "use strict";

    var n = r(2)(r(8)),
        i = r(50),
        o = {
      create: function (e, t) {
        for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];

        return a("mustfix", e, t, n);
      },
      createWarning: function (e, t) {
        for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];

        return a("warn", e, t, n);
      }
    };

    function a(e, t, r, o) {
      var a = new Error(i.apply(void 0, [r].concat((0, n.default)(o))));
      return a.name = t, a.type = e, a.framesToPop = 2, a;
    }

    e.exports = o;
  }, function (e, t, r) {
    "use strict";

    var n = r(5),
        i = r(33),
        o = r(34),
        a = r(1),
        s = r(39),
        u = r(0),
        l = r(14),
        c = l.EXISTENT,
        d = l.UNKNOWN,
        f = n.CONDITION,
        p = n.CLIENT_EXTENSION,
        h = n.DEFER,
        _ = n.CONNECTION_FIELD,
        v = n.FRAGMENT_SPREAD,
        g = n.INLINE_FRAGMENT,
        m = n.LINKED_FIELD,
        b = n.LINKED_HANDLE,
        y = n.MODULE_IMPORT,
        E = n.SCALAR_FIELD,
        R = n.SCALAR_HANDLE,
        D = n.STREAM,
        S = a.getModuleOperationKey,
        I = a.getStorageKey,
        k = a.getArgumentValues;

    var O = function () {
      function e(e, t, r, n, a, s) {
        var u;
        this._operationLoader = null !== (u = a) && void 0 !== u ? u : null, this._handlers = n, this._mutator = new i(e, t), this._recordWasMissing = !1, this._source = e, this._variables = r, this._recordSourceProxy = new o(this._mutator, s);
      }

      var t = e.prototype;
      return t.check = function (e, t) {
        return this._traverse(e, t), !this._recordWasMissing;
      }, t._getVariableValue = function (e) {
        return this._variables.hasOwnProperty(e) || u(!1, "RelayAsyncLoader(): Undefined variable `%s`.", e), this._variables[e];
      }, t._handleMissing = function () {
        this._recordWasMissing = !0;
      }, t._getDataForHandlers = function (e, t) {
        return {
          args: e.args ? k(e.args, this._variables) : {},
          record: this._source.get(t)
        };
      }, t._handleMissingScalarField = function (e, t) {
        var r = this._getDataForHandlers(e, t),
            n = r.args,
            i = r.record,
            o = !0,
            a = !1,
            s = void 0;

        try {
          for (var u, l = this._handlers[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) {
            var c = u.value;

            if ("scalar" === c.kind) {
              var d = c.handle(e, i, n, this._recordSourceProxy);
              if (void 0 !== d) return d;
            }
          }
        } catch (e) {
          a = !0, s = e;
        } finally {
          try {
            o || null == l.return || l.return();
          } finally {
            if (a) throw s;
          }
        }

        this._handleMissing();
      }, t._handleMissingLinkField = function (e, t) {
        var r = this._getDataForHandlers(e, t),
            n = r.args,
            i = r.record,
            o = !0,
            a = !1,
            s = void 0;

        try {
          for (var u, l = this._handlers[Symbol.iterator](); !(o = (u = l.next()).done); o = !0) {
            var d = u.value;

            if ("linked" === d.kind) {
              var f = d.handle(e, i, n, this._recordSourceProxy);
              if (null != f && this._mutator.getStatus(f) === c) return f;
            }
          }
        } catch (e) {
          a = !0, s = e;
        } finally {
          try {
            o || null == l.return || l.return();
          } finally {
            if (a) throw s;
          }
        }

        this._handleMissing();
      }, t._handleMissingPluralLinkField = function (e, t) {
        var r = this,
            n = this._getDataForHandlers(e, t),
            i = n.args,
            o = n.record,
            a = !0,
            s = !1,
            u = void 0;

        try {
          for (var l, d = this._handlers[Symbol.iterator](); !(a = (l = d.next()).done); a = !0) {
            var f = l.value;

            if ("pluralLinked" === f.kind) {
              var p = f.handle(e, o, i, this._recordSourceProxy);
              if (null != p) return p.filter(function (e) {
                return null != e && r._mutator.getStatus(e) === c;
              });
            }
          }
        } catch (e) {
          s = !0, u = e;
        } finally {
          try {
            a || null == d.return || d.return();
          } finally {
            if (s) throw u;
          }
        }

        this._handleMissing();
      }, t._traverse = function (e, t) {
        var r = this._mutator.getStatus(t);

        r === d && this._handleMissing(), r === c && this._traverseSelections(e.selections, t);
      }, t._traverseSelections = function (e, t) {
        var r = this;
        e.forEach(function (n) {
          switch (n.kind) {
            case E:
              r._checkScalar(n, t);

              break;

            case m:
              n.plural ? r._checkPluralLink(n, t) : r._checkLink(n, t);
              break;

            case f:
              r._getVariableValue(n.condition) === n.passingValue && r._traverseSelections(n.selections, t);
              break;

            case g:
              var i = r._mutator.getType(t);

              null != i && i === n.type && r._traverseSelections(n.selections, t);
              break;

            case b:
              var o = s(n, e, r._variables);
              o.plural ? r._checkPluralLink(o, t) : r._checkLink(o, t);
              break;

            case y:
              r._checkModuleImport(n, t);

              break;

            case h:
            case D:
              r._traverseSelections(n.selections, t);

              break;

            case R:
            case v:
              u(!1, "RelayAsyncLoader(): Unexpected ast kind `%s`.", n.kind);
              break;

            case p:
              var a = r._recordWasMissing;
              r._traverseSelections(n.selections, t), r._recordWasMissing = a;
              break;

            case _:
              u(!1, "DataChecker(): Connection fields are not supported yet.");
              break;

            default:
              u(!1, "RelayAsyncLoader(): Unexpected ast kind `%s`.", n.kind);
          }
        });
      }, t._checkModuleImport = function (e, t) {
        var r = this._operationLoader;
        null === r && u(!1, "DataChecker: Expected an operationLoader to be configured when using `@module`.");

        var n = S(e.documentName),
            i = this._mutator.getValue(t, n);

        if (null != i) {
          var o = r.get(i);
          null != o ? this._traverse(o, t) : this._handleMissing();
        } else void 0 === i && this._handleMissing();
      }, t._checkScalar = function (e, t) {
        var r = I(e, this._variables),
            n = this._mutator.getValue(t, r);

        void 0 === n && void 0 !== (n = this._handleMissingScalarField(e, t)) && this._mutator.setValue(t, r, n);
      }, t._checkLink = function (e, t) {
        var r = I(e, this._variables),
            n = this._mutator.getLinkedRecordID(t, r);

        void 0 === n && null != (n = this._handleMissingLinkField(e, t)) && this._mutator.setLinkedRecordID(t, r, n), null != n && this._traverse(e, n);
      }, t._checkPluralLink = function (e, t) {
        var r = this,
            n = I(e, this._variables),
            i = this._mutator.getLinkedRecordIDs(t, n);

        void 0 === i && null != (i = this._handleMissingPluralLinkField(e, t)) && this._mutator.setLinkedRecordIDs(t, n, i), i && i.forEach(function (t) {
          null != t && r._traverse(e, t);
        });
      }, e;
    }();

    e.exports = {
      check: function (e, t, r, n, i, o) {
        var a = r.dataID,
            s = r.node,
            u = r.variables;
        return new O(e, t, u, n, i, o).check(s, a);
      }
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(2)(r(3)),
        i = r(6),
        o = r(0),
        a = r(14).EXISTENT,
        s = r(1),
        u = s.UNPUBLISH_FIELD_SENTINEL,
        l = s.UNPUBLISH_RECORD_SENTINEL,
        c = function () {
      function e(e, t, r) {
        this.__sources = [t, e], this._backup = r, this._base = e, this._sink = t;
      }

      var t = e.prototype;
      return t.unstable_getRawRecordWithChanges = function (e) {
        var t = this._base.get(e),
            r = this._sink.get(e);

        if (void 0 === r) {
          if (null == t) return t;
          var n = i.clone(t);
          return i.freeze(n), n;
        }

        if (null === r) return null;

        if (r !== l) {
          if (null != t) {
            var o = i.update(t, r);
            return o !== t && i.freeze(o), o;
          }

          var a = i.clone(r);
          return i.freeze(a), a;
        }
      }, t._createBackupRecord = function (e) {
        var t = this._backup;

        if (t && !t.has(e)) {
          var r = this._base.get(e);

          null != r ? t.set(e, r) : null === r && t.delete(e);
        }
      }, t._setSentinelFieldsInBackupRecord = function (e, t) {
        var r = this._backup;

        if (r) {
          var i = r.get(e);

          if (i && i !== l) {
            var o = null;

            for (var a in t) t.hasOwnProperty(a) && (a in i || ((o = o || (0, n.default)({}, i))[a] = u));

            r.set(e, o || i);
          }
        }
      }, t._setSentinelFieldInBackupRecord = function (e, t) {
        var r = this._backup;

        if (r) {
          var o = r.get(e);

          if (o && o !== l && !(t in o)) {
            var a = (0, n.default)({}, o);
            i.setValue(a, t, u), r.set(e, a);
          }
        }
      }, t._getSinkRecord = function (e) {
        var t = this._sink.get(e);

        if (!t) {
          var r = this._base.get(e);

          r || o(!1, "RelayRecordSourceMutator: Cannot modify non-existent record `%s`.", e), t = i.create(e, i.getType(r)), this._sink.set(e, t);
        }

        return t;
      }, t.copyFields = function (e, t) {
        var r = this._sink.get(e),
            n = this._base.get(e);

        r || n || o(!1, "RelayRecordSourceMutator#copyFields(): Cannot copy fields from non-existent record `%s`.", e), this._createBackupRecord(t);

        var a = this._getSinkRecord(t);

        n && i.copyFields(n, a), r && i.copyFields(r, a), this._setSentinelFieldsInBackupRecord(t, a);
      }, t.copyFieldsFromRecord = function (e, t) {
        this._createBackupRecord(t);

        var r = this._getSinkRecord(t);

        i.copyFields(e, r), this._setSentinelFieldsInBackupRecord(t, r);
      }, t.create = function (e, t) {
        (this._base.getStatus(e) === a || this._sink.getStatus(e) === a) && o(!1, "RelayRecordSourceMutator#create(): Cannot create a record with id `%s`, this record already exists.", e), this._backup && this._backup.set(e, l);
        var r = i.create(e, t);

        this._sink.set(e, r);
      }, t.delete = function (e) {
        this._createBackupRecord(e), this._sink.delete(e);
      }, t.getStatus = function (e) {
        return this._sink.has(e) ? this._sink.getStatus(e) : this._base.getStatus(e);
      }, t.getType = function (e) {
        for (var t = 0; t < this.__sources.length; t++) {
          var r = this.__sources[t].get(e);

          if (r) return i.getType(r);
          if (null === r) return null;
        }
      }, t.getValue = function (e, t) {
        for (var r = 0; r < this.__sources.length; r++) {
          var n = this.__sources[r].get(e);

          if (n) {
            var o = i.getValue(n, t);
            if (void 0 !== o) return o;
          } else if (null === n) return null;
        }
      }, t.setValue = function (e, t, r) {
        this._createBackupRecord(e);

        var n = this._getSinkRecord(e);

        i.setValue(n, t, r), this._setSentinelFieldInBackupRecord(e, t);
      }, t.getLinkedRecordID = function (e, t) {
        for (var r = 0; r < this.__sources.length; r++) {
          var n = this.__sources[r].get(e);

          if (n) {
            var o = i.getLinkedRecordID(n, t);
            if (void 0 !== o) return o;
          } else if (null === n) return null;
        }
      }, t.setLinkedRecordID = function (e, t, r) {
        this._createBackupRecord(e);

        var n = this._getSinkRecord(e);

        i.setLinkedRecordID(n, t, r), this._setSentinelFieldInBackupRecord(e, t);
      }, t.getLinkedRecordIDs = function (e, t) {
        for (var r = 0; r < this.__sources.length; r++) {
          var n = this.__sources[r].get(e);

          if (n) {
            var o = i.getLinkedRecordIDs(n, t);
            if (void 0 !== o) return o;
          } else if (null === n) return null;
        }
      }, t.setLinkedRecordIDs = function (e, t, r) {
        this._createBackupRecord(e);

        var n = this._getSinkRecord(e);

        i.setLinkedRecordIDs(n, t, r), this._setSentinelFieldInBackupRecord(e, t);
      }, e;
    }();

    e.exports = c;
  }, function (e, t, r) {
    "use strict";

    var n = r(6),
        i = r(53),
        o = r(35),
        a = r(0),
        s = r(36),
        u = r(14),
        l = u.EXISTENT,
        c = u.NONEXISTENT,
        d = r(1),
        f = d.ROOT_ID,
        p = d.ROOT_TYPE,
        h = function () {
      function e(e, t, r) {
        this.__mutator = e, this._handlerProvider = r || null, this._proxies = {}, this._getDataID = t;
      }

      var t = e.prototype;
      return t.publishSource = function (e, t) {
        var r = this;
        e.getRecordIDs().forEach(function (t) {
          var i = e.getStatus(t);

          if (i === l) {
            var o = e.get(t);
            o && (r.__mutator.getStatus(t) !== l && r.create(t, n.getType(o)), r.__mutator.copyFieldsFromRecord(o, t));
          } else i === c && r.delete(t);
        }), t && t.length && t.forEach(function (e) {
          var t = r._handlerProvider && r._handlerProvider(e.handle);

          t || a(!1, "RelayModernEnvironment: Expected a handler to be provided for handle `%s`.", e.handle), t.update(r, e);
        });
      }, t.commitPayload = function (e, t) {
        if (!t) return new o(this, e.fragment);
        var r = s(e.root, t, null, {
          getDataID: this._getDataID,
          request: e.request
        }),
            n = r.source,
            i = r.fieldPayloads;
        return this.publishSource(n, i), new o(this, e.fragment);
      }, t.create = function (e, t) {
        this.__mutator.create(e, t), delete this._proxies[e];
        var r = this.get(e);
        return r || a(!1, "RelayRecordSourceProxy#create(): Expected the created record to exist."), r;
      }, t.delete = function (e) {
        e === f && a(!1, "RelayRecordSourceProxy#delete(): Cannot delete the root record."), delete this._proxies[e], this.__mutator.delete(e);
      }, t.get = function (e) {
        if (!this._proxies.hasOwnProperty(e)) {
          var t = this.__mutator.getStatus(e);

          this._proxies[e] = t === l ? new i(this, this.__mutator, e) : t === c ? null : void 0;
        }

        return this._proxies[e];
      }, t.getRoot = function () {
        var e = this.get(f);
        return e || (e = this.create(f, p)), e && e.getType() === p || a(!1, "RelayRecordSourceProxy#getRoot(): Expected the source to contain a root record."), e;
      }, e;
    }();

    e.exports = h;
  }, function (e, t, r) {
    "use strict";

    var n = r(0),
        i = r(1).getStorageKey,
        o = function () {
      function e(e, t) {
        this.__recordSource = e, this._readSelector = t;
      }

      var t = e.prototype;
      return t.create = function (e, t) {
        return this.__recordSource.create(e, t);
      }, t.delete = function (e) {
        this.__recordSource.delete(e);
      }, t.get = function (e) {
        return this.__recordSource.get(e);
      }, t.getRoot = function () {
        return this.__recordSource.getRoot();
      }, t._getRootField = function (e, t, r) {
        var i = e.node.selections.find(function (e) {
          return "LinkedField" === e.kind && e.name === t;
        });
        return i && "LinkedField" === i.kind || n(!1, "RelayRecordSourceSelectorProxy#getRootField(): Cannot find root field `%s`, no such field is defined on GraphQL document `%s`.", t, e.node.name), i.plural !== r && n(!1, "RelayRecordSourceSelectorProxy#getRootField(): Expected root field `%s` to be %s.", t, r ? "plural" : "singular"), i;
      }, t.getRootField = function (e) {
        var t = this._getRootField(this._readSelector, e, !1),
            r = i(t, this._readSelector.variables);

        return this.getRoot().getLinkedRecord(r);
      }, t.getPluralRootField = function (e) {
        var t = this._getRootField(this._readSelector, e, !0),
            r = i(t, this._readSelector.variables);

        return this.getRoot().getLinkedRecords(r);
      }, e;
    }();

    e.exports = o;
  }, function (e, t, r) {
    "use strict";

    var n = r(2)(r(3)),
        i = r(6),
        o = r(15),
        a = r(37),
        s = r(1),
        u = s.ROOT_ID,
        l = s.ROOT_TYPE;

    e.exports = function (e, t, r, s) {
      var c = o.create();
      c.set(u, i.create(u, l));
      var d = a.normalize(c, e, t, s);
      return (0, n.default)({}, d, {
        errors: r
      });
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(2)(r(8)),
        i = r(38),
        o = r(22),
        a = r(6),
        s = r(26),
        u = r(0),
        l = r(4),
        c = r(5),
        d = c.CONDITION,
        f = c.CLIENT_EXTENSION,
        p = c.DEFER,
        h = c.CONNECTION_FIELD,
        _ = c.INLINE_FRAGMENT,
        v = c.LINKED_FIELD,
        g = c.LINKED_HANDLE,
        m = c.MODULE_IMPORT,
        b = c.SCALAR_FIELD,
        y = c.SCALAR_HANDLE,
        E = c.STREAM,
        R = r(7),
        D = R.generateClientID,
        S = R.isClientID,
        I = r(10).createNormalizationSelector,
        k = r(1),
        O = k.getArgumentValues,
        N = k.getHandleStorageKey,
        x = k.getModuleComponentKey,
        L = k.getModuleOperationKey,
        T = k.getStorageKey,
        w = k.TYPENAME_KEY;

    function P(e, t, r, n) {
      var i = t.dataID,
          o = t.node,
          a = t.variables;
      return new F(e, a, n).normalizeResponse(o, i, r);
    }

    var F = function () {
      function e(e, t, r) {
        this._connectionEvents = [], this._getDataId = r.getDataID, this._handleFieldPayloads = [], this._incrementalPlaceholders = [], this._isClientExtension = !1, this._moduleImportPayloads = [], this._path = r.path ? (0, n.default)(r.path) : [], this._recordSource = e, this._request = r.request, this._variables = t;
      }

      var t = e.prototype;
      return t.normalizeResponse = function (e, t, r) {
        var n = this._recordSource.get(t);

        return n || u(!1, "RelayResponseNormalizer(): Expected root record `%s` to exist.", t), this._traverseSelections(e, n, r), {
          connectionEvents: this._connectionEvents,
          errors: null,
          fieldPayloads: this._handleFieldPayloads,
          incrementalPlaceholders: this._incrementalPlaceholders,
          moduleImportPayloads: this._moduleImportPayloads,
          source: this._recordSource
        };
      }, t._getVariableValue = function (e) {
        return this._variables.hasOwnProperty(e) || u(!1, "RelayResponseNormalizer(): Undefined variable `%s`.", e), this._variables[e];
      }, t._getRecordType = function (e) {
        var t = e[w];
        return null == t && u(!1, "RelayResponseNormalizer(): Expected a typename for record `%s`.", JSON.stringify(e, null, 2)), t;
      }, t._traverseSelections = function (e, t, r) {
        for (var n = 0; n < e.selections.length; n++) {
          var i = e.selections[n];

          switch (i.kind) {
            case b:
            case v:
              this._normalizeField(e, i, t, r);

              break;

            case d:
              this._getVariableValue(i.condition) === i.passingValue && this._traverseSelections(i, t, r);
              break;

            case _:
              a.getType(t) === i.type && this._traverseSelections(i, t, r);
              break;

            case g:
            case y:
              var o = i.args ? O(i.args, this._variables) : {},
                  s = T(i, this._variables),
                  l = N(i, this._variables);

              this._handleFieldPayloads.push({
                args: o,
                dataID: a.getDataID(t),
                fieldKey: s,
                handle: i.handle,
                handleKey: l
              });

              break;

            case m:
              this._normalizeModuleImport(e, i, t, r);

              break;

            case p:
              this._normalizeDefer(i, t, r);

              break;

            case E:
              this._normalizeStream(i, t, r);

              break;

            case f:
              var c = this._isClientExtension;
              this._isClientExtension = !0, this._traverseSelections(i, t, r), this._isClientExtension = c;
              break;

            case h:
              this._normalizeConnectionField(e, i, t, r);

              break;

            default:
              u(!1, "RelayResponseNormalizer(): Unexpected ast kind `%s`.", i.kind);
          }
        }
      }, t._normalizeDefer = function (e, t, r) {
        var i = null === e.if || this._getVariableValue(e.if);

        l("boolean" == typeof i, "RelayResponseNormalizer: Expected value for @defer `if` argument to be a boolean, got `%s`.", i), !1 === i ? this._traverseSelections(e, t, r) : this._incrementalPlaceholders.push({
          kind: "defer",
          data: r,
          label: e.label,
          path: (0, n.default)(this._path),
          selector: I(e, a.getDataID(t), this._variables),
          typeName: a.getType(t)
        });
      }, t._normalizeStream = function (e, t, r) {
        this._traverseSelections(e, t, r);

        var i = null === e.if || this._getVariableValue(e.if);

        l("boolean" == typeof i, "RelayResponseNormalizer: Expected value for @stream `if` argument to be a boolean, got `%s`.", i), !0 === i && this._incrementalPlaceholders.push({
          kind: "stream",
          label: e.label,
          path: (0, n.default)(this._path),
          parentID: a.getDataID(t),
          node: e,
          variables: this._variables
        });
      }, t._normalizeModuleImport = function (e, t, r, i) {
        var o, s;
        "object" == typeof i && i || u(!1, "RelayResponseNormalizer: Expected data for @module to be an object.");
        var l = a.getType(r),
            c = x(t.documentName),
            d = i[c];
        a.setValue(r, c, null !== (o = d) && void 0 !== o ? o : null);
        var f = L(t.documentName),
            p = i[f];
        a.setValue(r, f, null !== (s = p) && void 0 !== s ? s : null), null != p && this._moduleImportPayloads.push({
          data: i,
          dataID: a.getDataID(r),
          operationReference: p,
          path: (0, n.default)(this._path),
          typeName: l,
          variables: this._variables
        });
      }, t._normalizeConnectionField = function (e, t, r, n) {
        this._normalizeField(e, t, r, n);

        var s = a.getDataID(r),
            u = i.createConnectionID(s, t.label),
            l = null != t.args ? O(t.args, this._variables) : {},
            c = T(t, this._variables),
            d = o.get(),
            f = d.EDGES,
            p = d.END_CURSOR,
            h = d.HAS_NEXT_PAGE,
            _ = d.HAS_PREV_PAGE,
            v = d.PAGE_INFO,
            g = d.START_CURSOR,
            m = a.getLinkedRecordID(r, c),
            b = null != m ? this._recordSource.get(m) : null;

        if (null != b) {
          var y = a.getLinkedRecordIDs(b, f);

          if (null != y) {
            var E,
                R,
                D,
                S,
                I = a.getLinkedRecordID(b, v),
                k = null != I ? this._recordSource.get(I) : null;
            null != k && (E = a.getValue(k, p), R = a.getValue(k, h), D = a.getValue(k, _), S = a.getValue(k, g)), this._connectionEvents.push({
              kind: "fetch",
              connectionID: u,
              args: l,
              edgeIDs: y,
              pageInfo: {
                endCursor: "string" == typeof E ? E : null,
                startCursor: "string" == typeof S ? S : null,
                hasNextPage: "boolean" == typeof R ? R : null,
                hasPrevPage: "boolean" == typeof D ? D : null
              },
              request: this._request
            });
          }
        }
      }, t._normalizeField = function (e, t, r, n) {
        "object" == typeof n && n || u(!1, "writeField(): Expected data for field `%s` to be an object.", t.name);
        var i = t.alias || t.name,
            o = T(t, this._variables),
            s = n[i];
        if (null == s) return void 0 === s ? void l(!!(this._isClientExtension || e.kind === v && null == e.concreteType) || Object.prototype.hasOwnProperty.call(n, i), "RelayResponseNormalizer(): Payload did not contain a value for field `%s: %s`. Check that you are parsing with the same query that was used to fetch the payload.", i, o) : void a.setValue(r, o, null);
        t.kind === b ? a.setValue(r, o, s) : t.kind === v || t.kind === h ? (this._path.push(i), t.plural ? this._normalizePluralLink(t, r, o, s) : this._normalizeLink(t, r, o, s), this._path.pop()) : u(!1, "RelayResponseNormalizer(): Unexpected ast kind `%s` during normalization.", t.kind);
      }, t._normalizeLink = function (e, t, r, n) {
        var i;
        "object" == typeof n && n || u(!1, "RelayResponseNormalizer: Expected data for field `%s` to be an object.", r);
        var o = this._getDataId(n, null !== (i = e.concreteType) && void 0 !== i ? i : this._getRecordType(n)) || a.getLinkedRecordID(t, r) || D(a.getDataID(t), r);
        "string" != typeof o && u(!1, "RelayResponseNormalizer: Expected id on field `%s` to be a string.", r), a.setLinkedRecordID(t, r, o);

        var s = this._recordSource.get(o);

        if (s) this._validateRecordType(s, e, n);else {
          var l = e.concreteType || this._getRecordType(n);

          s = a.create(o, l), this._recordSource.set(o, s);
        }

        this._traverseSelections(e, s, n);
      }, t._normalizePluralLink = function (e, t, r, n) {
        var i = this;
        Array.isArray(n) || u(!1, "RelayResponseNormalizer: Expected data for field `%s` to be an array of objects.", r);
        var o = a.getLinkedRecordIDs(t, r),
            s = [];
        n.forEach(function (n, l) {
          var c;

          if (null != n) {
            i._path.push(String(l)), "object" != typeof n && u(!1, "RelayResponseNormalizer: Expected elements for field `%s` to be objects.", r);
            var d = i._getDataId(n, null !== (c = e.concreteType) && void 0 !== c ? c : i._getRecordType(n)) || o && o[l] || D(a.getDataID(t), r, l);
            "string" != typeof d && u(!1, "RelayResponseNormalizer: Expected id of elements of field `%s` to be strings.", r), s.push(d);

            var f = i._recordSource.get(d);

            if (f) i._validateRecordType(f, e, n);else {
              var p = e.concreteType || i._getRecordType(n);

              f = a.create(d, p), i._recordSource.set(d, f);
            }
            i._traverseSelections(e, f, n), i._path.pop();
          } else s.push(n);
        }), a.setLinkedRecordIDs(t, r, s);
      }, t._validateRecordType = function (e, t, r) {
        var n,
            i = null !== (n = t.concreteType) && void 0 !== n ? n : this._getRecordType(r);
        l(S(a.getDataID(e)) || a.getType(e) === i, "RelayResponseNormalizer: Invalid record `%s`. Expected %s to be be consistent, but the record was assigned conflicting types `%s` and `%s`. The GraphQL server likely violated the globally unique id requirement by returning the same id for different objects.", a.getDataID(e), w, a.getType(e), i);
      }, e;
    }();

    P = s.instrument("RelayResponseNormalizer.normalize", P), e.exports = {
      normalize: P
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = {
      createConnectionID: function (e, t) {
        return "connection:".concat(e, ":").concat(t);
      },
      createConnectionRecord: function (e) {
        return {
          __id: e,
          __typename: "__ConnectionRecord",
          events: []
        };
      },
      CONNECTION_KEY: "__connection",
      CONNECTION_TYPENAME: "__ConnectionRecord"
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(2)(r(3)),
        i = r(19),
        o = r(0),
        a = r(5).LINKED_FIELD,
        s = r(1).getHandleStorageKey;

    e.exports = function (e, t, r) {
      var u = t.find(function (t) {
        return t.kind === a && t.name === e.name && t.alias === e.alias && i(t.args, e.args);
      });
      u && u.kind === a || o(!1, "cloneRelayHandleSourceField: Expected a corresponding source field for handle `%s`.", e.handle);
      var l = s(e, r);
      return (0, n.default)({}, u, {
        args: null,
        name: l,
        storageKey: l
      });
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(0),
        i = function () {
      function e() {
        this._ownersToPendingOperations = new Map(), this._pendingOperationsToOwners = new Map(), this._ownersToPromise = new Map();
      }

      var t = e.prototype;
      return t.update = function (e, t) {
        if (0 !== t.size) {
          var r = new Set(),
              n = !0,
              i = !1,
              o = void 0;

          try {
            for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done); n = !0) {
              var u = a.value,
                  l = this._ownersToPendingOperations.get(u);

              null != l ? l.has(e) || (l.add(e), r.add(u)) : (this._ownersToPendingOperations.set(u, new Set([e])), r.add(u));
            }
          } catch (e) {
            i = !0, o = e;
          } finally {
            try {
              n || null == s.return || s.return();
            } finally {
              if (i) throw o;
            }
          }

          if (0 !== r.size) {
            var c = this._pendingOperationsToOwners.get(e) || new Set(),
                d = !0,
                f = !1,
                p = void 0;

            try {
              for (var h, _ = r[Symbol.iterator](); !(d = (h = _.next()).done); d = !0) {
                var v = h.value;
                this._resolveOwnerResolvers(v), c.add(v);
              }
            } catch (e) {
              f = !0, p = e;
            } finally {
              try {
                d || null == _.return || _.return();
              } finally {
                if (f) throw p;
              }
            }

            this._pendingOperationsToOwners.set(e, c);
          }
        }
      }, t.complete = function (e) {
        var t = this._pendingOperationsToOwners.get(e);

        if (null != t) {
          var r = new Set(),
              n = new Set(),
              i = !0,
              o = !1,
              a = void 0;

          try {
            for (var s, u = t[Symbol.iterator](); !(i = (s = u.next()).done); i = !0) {
              var l = s.value,
                  c = this._ownersToPendingOperations.get(l);

              c && (c.delete(e), c.size > 0 ? n.add(l) : r.add(l));
            }
          } catch (e) {
            o = !0, a = e;
          } finally {
            try {
              i || null == u.return || u.return();
            } finally {
              if (o) throw a;
            }
          }

          var d = !0,
              f = !1,
              p = void 0;

          try {
            for (var h, _ = r[Symbol.iterator](); !(d = (h = _.next()).done); d = !0) {
              var v = h.value;
              this._resolveOwnerResolvers(v), this._ownersToPendingOperations.delete(v);
            }
          } catch (e) {
            f = !0, p = e;
          } finally {
            try {
              d || null == _.return || _.return();
            } finally {
              if (f) throw p;
            }
          }

          var g = !0,
              m = !1,
              b = void 0;

          try {
            for (var y, E = n[Symbol.iterator](); !(g = (y = E.next()).done); g = !0) {
              var R = y.value;

              this._resolveOwnerResolvers(R);
            }
          } catch (e) {
            m = !0, b = e;
          } finally {
            try {
              g || null == E.return || E.return();
            } finally {
              if (m) throw b;
            }
          }

          this._pendingOperationsToOwners.delete(e);
        }
      }, t._resolveOwnerResolvers = function (e) {
        var t = this._ownersToPromise.get(e);

        null != t && t.resolve(), this._ownersToPromise.delete(e);
      }, t.getPromiseForPendingOperationsAffectingOwner = function (e) {
        if (!this._ownersToPendingOperations.has(e)) return null;

        var t,
            r = this._ownersToPromise.get(e);

        if (null != r) return r.promise;
        var i = new Promise(function (e) {
          t = e;
        });
        return null == t && n(!1, "RelayOperationTracker: Expected resolver to be defined. If youare seeing this, it is likely a bug in Relay."), this._ownersToPromise.set(e, {
          promise: i,
          resolve: t
        }), i;
      }, e;
    }();

    e.exports = i;
  }, function (e, t, r) {
    "use strict";

    var n = r(38),
        i = r(6),
        o = r(0),
        a = r(5),
        s = a.CONDITION,
        u = a.CLIENT_EXTENSION,
        l = a.CONNECTION_FIELD,
        c = a.FRAGMENT_SPREAD,
        d = a.INLINE_DATA_FRAGMENT_SPREAD,
        f = a.INLINE_FRAGMENT,
        p = a.LINKED_FIELD,
        h = a.MODULE_IMPORT,
        _ = a.SCALAR_FIELD,
        v = r(1),
        g = v.FRAGMENTS_KEY,
        m = v.FRAGMENT_OWNER_KEY,
        b = v.FRAGMENT_PROP_NAME_KEY,
        y = v.ID_KEY,
        E = v.MODULE_COMPONENT_KEY,
        R = v.getArgumentValues,
        D = v.getStorageKey,
        S = v.getModuleComponentKey;

    var I = function () {
      function e(e, t) {
        this._isMissingData = !1, this._owner = t.owner, this._recordSource = e, this._seenRecords = {}, this._selector = t, this._variables = t.variables;
      }

      var t = e.prototype;
      return t.read = function () {
        var e = this._selector,
            t = e.node,
            r = e.dataID;
        return {
          data: this._traverse(t, r, null),
          seenRecords: this._seenRecords,
          isMissingData: this._isMissingData,
          selector: this._selector
        };
      }, t._traverse = function (e, t, r) {
        var n = this._recordSource.get(t);

        if (this._seenRecords[t] = n, null == n) return void 0 === n && (this._isMissingData = !0), n;
        var i = r || {};
        return this._traverseSelections(e.selections, n, i), i;
      }, t._getVariableValue = function (e) {
        return this._variables.hasOwnProperty(e) || o(!1, "RelayReader(): Undefined variable `%s`.", e), this._variables[e];
      }, t._traverseSelections = function (e, t, r) {
        for (var n = 0; n < e.length; n++) {
          var a = e[n];

          switch (a.kind) {
            case _:
              this._readScalar(a, t, r);

              break;

            case p:
              a.plural ? this._readPluralLink(a, t, r) : this._readLink(a, t, r);
              break;

            case s:
              this._getVariableValue(a.condition) === a.passingValue && this._traverseSelections(a.selections, t, r);
              break;

            case f:
              var v = i.getType(t);
              null != v && v === a.type && this._traverseSelections(a.selections, t, r);
              break;

            case c:
              this._createFragmentPointer(a, t, r);

              break;

            case h:
              this._readModuleImport(a, t, r);

              break;

            case d:
              this._createInlineDataFragmentPointer(a, t, r);

              break;

            case u:
              var g = this._isMissingData;
              this._traverseSelections(a.selections, t, r), this._isMissingData = g;
              break;

            case l:
              this._readConnectionField(a, t, r);

              break;

            default:
              o(!1, "RelayReader(): Unexpected ast kind `%s`.", a.kind);
          }
        }
      }, t._readConnectionField = function (e, t, r) {
        var a,
            s,
            u = i.getDataID(t),
            l = n.createConnectionID(u, e.label),
            c = e.selections.find(function (e) {
          return "LinkedField" === e.kind && e.plural && "edges" === e.name;
        });
        c && "LinkedField" === c.kind || o(!1, "RelayReader: Expected connection field to have an `edges` selection.");
        var d = {
          variables: this._variables,
          edgeField: c,
          id: l,
          label: e.label,
          resolver: e.resolver
        },
            f = null !== (a = e.alias) && void 0 !== a ? a : e.name,
            p = r[f];
        null != p && "object" != typeof p && o(!1, "RelayReader(): Expected data for field `%s` on record `%s` to be an object, got `%s`.", f, u, p);
        var h = null !== (s = p) && void 0 !== s ? s : {};
        r[f] = h, h[n.CONNECTION_KEY] = d;
      }, t._readScalar = function (e, t, r) {
        var n,
            o = null !== (n = e.alias) && void 0 !== n ? n : e.name,
            a = D(e, this._variables),
            s = i.getValue(t, a);
        void 0 === s && (this._isMissingData = !0), r[o] = s;
      }, t._readLink = function (e, t, r) {
        var n,
            a = null !== (n = e.alias) && void 0 !== n ? n : e.name,
            s = D(e, this._variables),
            u = i.getLinkedRecordID(t, s);
        if (null == u) return r[a] = u, void (void 0 === u && (this._isMissingData = !0));
        var l = r[a];
        null != l && "object" != typeof l && o(!1, "RelayReader(): Expected data for field `%s` on record `%s` to be an object, got `%s`.", a, i.getDataID(t), l), r[a] = this._traverse(e, u, l);
      }, t._readPluralLink = function (e, t, r) {
        var n,
            a = this,
            s = null !== (n = e.alias) && void 0 !== n ? n : e.name,
            u = D(e, this._variables),
            l = i.getLinkedRecordIDs(t, u);
        if (null == l) return r[s] = l, void (void 0 === l && (this._isMissingData = !0));
        var c = r[s];
        null == c || Array.isArray(c) || o(!1, "RelayReader(): Expected data for field `%s` on record `%s` to be an array, got `%s`.", s, i.getDataID(t), c);
        var d = c || [];
        l.forEach(function (r, n) {
          if (null == r) return void 0 === r && (a._isMissingData = !0), void (d[n] = r);
          var u = d[n];
          null != u && "object" != typeof u && o(!1, "RelayReader(): Expected data for field `%s` on record `%s` to be an object, got `%s`.", s, i.getDataID(t), u), d[n] = a._traverse(e, r, u);
        }), r[s] = d;
      }, t._readModuleImport = function (e, t, r) {
        var n = S(e.documentName),
            o = i.getValue(t, n);
        null != o ? (this._createFragmentPointer({
          kind: "FragmentSpread",
          name: e.fragmentName,
          args: null
        }, t, r), r[b] = e.fragmentPropName, r[E] = o) : void 0 === o && (this._isMissingData = !0);
      }, t._createFragmentPointer = function (e, t, r) {
        var n = r[g];
        null == n && (n = r[g] = {}), ("object" != typeof n || null == n) && o(!1, "RelayReader: Expected fragment spread data to be an object, got `%s`.", n), null == r[y] && (r[y] = i.getDataID(t)), n[e.name] = e.args ? R(e.args, this._variables) : {}, r[m] = this._owner;
      }, t._createInlineDataFragmentPointer = function (e, t, r) {
        var n = r[g];
        null == n && (n = r[g] = {}), ("object" != typeof n || null == n) && o(!1, "RelayReader: Expected fragment spread data to be an object, got `%s`.", n), null == r[y] && (r[y] = i.getDataID(t));
        var a = {};
        this._traverseSelections(e.selections, t, a), n[e.name] = a;
      }, e;
    }();

    e.exports = {
      read: function (e, t) {
        return new I(e, t).read();
      }
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(24),
        i = n.VIEWER_ID,
        o = n.VIEWER_TYPE;

    e.exports = function (e, t) {
      return t === o && null == e.id ? i : e.id;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(0),
        i = r(44),
        o = r(1).FRAGMENT_OWNER_KEY;

    function a(e, t) {
      var r;
      return null == t ? null : ("object" != typeof t && n(!1, "RelayModernFragmentOwner: Expected value for fragment `%s` to be an object, got `%s`.", e.name, typeof t), null !== (r = t[o]) && void 0 !== r ? r : null);
    }

    function s(e, t) {
      return Array.isArray(t) ? function (e, t) {
        return t.map(function (t) {
          return a(e, t);
        });
      }(e, t) : a(e, t);
    }

    e.exports = {
      getFragmentOwner: s,
      getFragmentOwners: function (e, t) {
        return i(e, function (e, r) {
          return s(e, t[r]);
        });
      }
    };
  }, function (e, t) {
    e.exports = s;
  }, function (e, t, r) {
    "use strict";

    e.exports = function e(t, r) {
      if (t === r || "object" != typeof t || !t || "object" != typeof r || !r) return r;
      var n = !1,
          i = Array.isArray(t) ? t : null,
          o = Array.isArray(r) ? r : null;
      if (i && o) n = o.reduce(function (t, r, n) {
        var a = e(i[n], r);
        return a !== o[n] && (Object.isFrozen(o) || (o[n] = a)), t && a === i[n];
      }, !0) && i.length === o.length;else if (!i && !o) {
        var a = t,
            s = r,
            u = Object.keys(a),
            l = Object.keys(s);
        n = l.reduce(function (t, r) {
          var n = e(a[r], s[r]);
          return n !== s[r] && (Object.isFrozen(s) || (s[r] = n)), t && n === a[r];
        }, !0) && u.length === l.length;
      }
      return n ? t : r;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(11);
    e.exports = {
      convertFetch: function (e) {
        return function (t, r, i, o) {
          var a = e(t, r, i, o);
          return a instanceof Error ? n.create(function (e) {
            return e.error(a);
          }) : n.from(a);
        };
      },
      convertSubscribe: function (e) {
        return function (t, r, i) {
          return n.fromLegacy(function (n) {
            return e(t, r, i, n);
          });
        };
      }
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e, t) {
      return e === t && (null === e || "object" != typeof e);
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(9),
        i = r(43).getFragmentOwner,
        o = r(10),
        a = o.getDataIDsFromFragment,
        s = o.getVariablesFromFragment;

    e.exports = function (e, t) {
      var r,
          o,
          u,
          l = i(e, t),
          c = s(e, t),
          d = a(e, t),
          f = Array.isArray(l) ? l.map(function (e) {
        var t, r;
        return null !== (t = null !== (r = null == e ? void 0 : e.node.params.id) && void 0 !== r ? r : null == e ? void 0 : e.node.params.name) && void 0 !== t ? t : "";
      }) : null !== (r = null !== (o = null == l ? void 0 : l.node.params.id) && void 0 !== o ? o : null == l ? void 0 : l.node.params.name) && void 0 !== r ? r : "",
          p = Array.isArray(l) ? l.map(function (e) {
        var t;
        return null !== (t = null == e ? void 0 : e.variables) && void 0 !== t ? t : null;
      }) : null !== (u = null == l ? void 0 : l.variables) && void 0 !== u ? u : null;
      return "".concat(e.name, "-").concat(JSON.stringify(n({
        dataIDs: d,
        fragmentVariables: c,
        fragmentOwnerID: f,
        fragmentOwnerVariables: p
      })));
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(5),
        i = r(20),
        o = r(21),
        a = r(22),
        s = r(18),
        u = r(28),
        l = r(29),
        c = r(30),
        d = r(31),
        f = r(25),
        p = r(51),
        h = r(43),
        _ = r(16),
        v = r(12),
        g = r(10),
        m = r(64),
        b = r(68),
        y = r(69),
        E = r(11),
        R = r(40),
        D = r(26),
        S = r(70),
        I = r(15),
        k = r(1),
        O = r(24),
        N = r(71),
        x = r(72),
        L = r(73),
        T = r(75),
        w = r(77),
        P = r(78),
        F = r(13),
        A = r(79),
        C = r(80),
        M = r(48),
        j = r(82),
        U = r(23),
        V = r(27),
        q = r(47),
        K = r(45),
        G = r(83),
        z = r(9),
        Q = r(7).generateClientID;

    if ("function" != typeof Map || "function" != typeof Set || "function" != typeof Promise || "function" != typeof Object.assign) throw new Error("relay-runtime requires Map, Set, Promise, and Object.assign to exist. Use a polyfill to provide these for older browsers.");
    e.exports = {
      Environment: p,
      Network: b,
      Observable: E,
      QueryResponseCache: S,
      RecordSource: I,
      Store: m,
      areEqualSelectors: g.areEqualSelectors,
      createFragmentSpecResolver: T,
      createNormalizationSelector: g.createNormalizationSelector,
      createOperationDescriptor: v.createOperationDescriptor,
      createReaderSelector: g.createReaderSelector,
      createRequestDescriptor: v.createRequestDescriptor,
      getDataIDsFromFragment: g.getDataIDsFromFragment,
      getDataIDsFromObject: g.getDataIDsFromObject,
      getFragment: _.getFragment,
      getFragmentOwner: h.getFragmentOwner,
      getFragmentOwners: h.getFragmentOwners,
      getInlineDataFragment: _.getInlineDataFragment,
      getModuleComponentKey: k.getModuleComponentKey,
      getModuleOperationKey: k.getModuleOperationKey,
      getPaginationFragment: _.getPaginationFragment,
      getPluralSelector: g.getPluralSelector,
      getRefetchableFragment: _.getRefetchableFragment,
      getRequest: _.getRequest,
      getSelector: g.getSelector,
      getSelectorsFromObject: g.getSelectorsFromObject,
      getSingularSelector: g.getSingularSelector,
      getStorageKey: k.getStorageKey,
      getVariablesFromFragment: g.getVariablesFromFragment,
      getVariablesFromObject: g.getVariablesFromObject,
      getVariablesFromPluralFragment: g.getVariablesFromPluralFragment,
      getVariablesFromSingularFragment: g.getVariablesFromSingularFragment,
      graphql: _.graphql,
      MutationTypes: s.MutationTypes,
      RangeOperations: s.RangeOperations,
      DefaultHandlerProvider: l,
      DefaultMissingFieldHandlers: c,
      ConnectionHandler: o,
      VIEWER_ID: O.VIEWER_ID,
      VIEWER_TYPE: O.VIEWER_TYPE,
      applyOptimisticMutation: N,
      commitLocalUpdate: x,
      commitMutation: L,
      fetchQuery: A,
      isRelayModernEnvironment: V,
      requestSubscription: G,
      ConnectionInterface: a,
      RelayProfiler: D,
      RelayConcreteNode: n,
      RelayError: d,
      RelayFeatureFlags: f,
      RelayNetworkLoggerTransaction: y,
      DEFAULT_HANDLE_KEY: u.DEFAULT_HANDLE_KEY,
      FRAGMENTS_KEY: k.FRAGMENTS_KEY,
      FRAGMENT_OWNER_KEY: k.FRAGMENT_OWNER_KEY,
      ID_KEY: k.ID_KEY,
      REF_KEY: k.REF_KEY,
      REFS_KEY: k.REFS_KEY,
      ROOT_ID: k.ROOT_ID,
      ROOT_TYPE: k.ROOT_TYPE,
      TYPENAME_KEY: k.TYPENAME_KEY,
      createRelayNetworkLogger: P,
      deepFreeze: F,
      generateClientID: Q,
      getRelayHandleKey: U,
      isScalarAndEqual: q,
      recycleNodesInto: K,
      stableCopy: z,
      getFragmentIdentifier: M,
      getFragmentSpecIdentifier: j,
      __internal: {
        OperationTracker: R,
        createRelayContext: w,
        getModernOperationVariables: i.getOperationVariables,
        fetchQuery: C.fetchQuery,
        fetchQueryDeduped: C.fetchQueryDeduped,
        getPromiseForRequestInFlight: C.getPromiseForRequestInFlight,
        getObservableForRequestInFlight: C.getObservableForRequestInFlight,
        hasRequestInFlight: C.hasRequestInFlight
      }
    };
  }, function (e, t) {
    e.exports = u;
  }, function (e, t, r) {
    "use strict";

    (function (t) {
      var n = r(32),
          i = r(29),
          o = r(30),
          a = r(58),
          s = r(11),
          u = r(40),
          l = r(60),
          c = r(15),
          d = r(42),
          f = r(0),
          p = r(36),
          h = r(4),
          _ = function () {
        function e(e) {
          var n,
              a,
              s,
              c,
              p,
              h = this;
          this.configName = e.configName;

          var _ = e.handlerProvider ? e.handlerProvider : i,
              v = e.operationLoader;

          null != v && ("object" != typeof v || "function" != typeof v.get || "function" != typeof v.load) && f(!1, "RelayModernEnvironment: Expected `operationLoader` to be an object with get() and load() functions, got `%s`.", v), this._operationLoader = v, this._network = e.network, this._getDataID = null !== (n = e.UNSTABLE_DO_NOT_USE_getDataID) && void 0 !== n ? n : d, this._publishQueue = null !== (a = e.publishQueue) && void 0 !== a ? a : new l(e.store, _, this._getDataID), this._scheduler = null !== (s = e.scheduler) && void 0 !== s ? s : null, this._store = e.store, this.__setNet = function (e) {
            return h._network = e;
          };
          var g = r(62).inspect;

          this.DEBUG_inspect = function (e) {
            return g(h, e);
          };

          var m = void 0 !== t ? t : "undefined" != typeof window ? window : void 0,
              b = m && m.__RELAY_DEVTOOLS_HOOK__;
          b && b.registerEnvironment(this), this._missingFieldHandlers = null !== (c = e.missingFieldHandlers) && void 0 !== c ? c : o, this._operationTracker = null !== (p = e.operationTracker) && void 0 !== p ? p : new u();
        }

        var _ = e.prototype;
        return _.getStore = function () {
          return this._store;
        }, _.getNetwork = function () {
          return this._network;
        }, _.getOperationTracker = function () {
          return this._operationTracker;
        }, _.applyUpdate = function (e) {
          var t = this;
          return this._publishQueue.applyUpdate(e), this._publishQueue.run(), {
            dispose: function () {
              t._publishQueue.revertUpdate(e), t._publishQueue.run();
            }
          };
        }, _.revertUpdate = function (e) {
          this._publishQueue.revertUpdate(e), this._publishQueue.run();
        }, _.replaceUpdate = function (e, t) {
          this._publishQueue.revertUpdate(e), this._publishQueue.applyUpdate(t), this._publishQueue.run();
        }, _.applyMutation = function (e) {
          var t = this,
              r = s.create(function (r) {
            var n = s.create(function (e) {}),
                i = a.execute({
              operation: e.operation,
              operationLoader: t._operationLoader,
              optimisticConfig: e,
              publishQueue: t._publishQueue,
              scheduler: t._scheduler,
              sink: r,
              source: n,
              updater: null,
              operationTracker: t._operationTracker,
              getDataID: t._getDataID
            });
            return function () {
              return i.cancel();
            };
          }).subscribe({});
          return {
            dispose: function () {
              return r.unsubscribe();
            }
          };
        }, _.check = function (e) {
          return null == this._missingFieldHandlers ? this._store.check(e) : this._checkSelectorAndHandleMissingFields(e, this._missingFieldHandlers);
        }, _.commitPayload = function (e, t) {
          var r = p(e.root, t, null, {
            getDataID: this._getDataID,
            request: e.request
          });
          this._publishQueue.commitPayload(e, r), this._publishQueue.run();
        }, _.commitUpdate = function (e) {
          this._publishQueue.commitUpdate(e), this._publishQueue.run();
        }, _.lookup = function (e) {
          return this._store.lookup(e);
        }, _.subscribe = function (e, t) {
          return this._store.subscribe(e, t);
        }, _.retain = function (e) {
          return this._store.retain(e);
        }, _._checkSelectorAndHandleMissingFields = function (e, t) {
          var r = c.create(),
              i = n.check(this._store.getSource(), r, e, t, this._operationLoader, this._getDataID);
          return r.size() > 0 && (this._publishQueue.commitSource(r), this._publishQueue.run()), i;
        }, _.execute = function (e) {
          var t = this,
              r = e.operation,
              n = e.cacheConfig,
              i = e.updater;
          return s.create(function (e) {
            var o = t._network.execute(r.request.node.params, r.request.variables, n || {}),
                s = a.execute({
              operation: r,
              operationLoader: t._operationLoader,
              optimisticConfig: null,
              publishQueue: t._publishQueue,
              scheduler: t._scheduler,
              sink: e,
              source: o,
              updater: i,
              operationTracker: t._operationTracker,
              getDataID: t._getDataID
            });

            return function () {
              return s.cancel();
            };
          });
        }, _.executeMutation = function (e) {
          var t = this,
              r = e.operation,
              n = e.optimisticResponse,
              i = e.optimisticUpdater,
              o = e.updater,
              u = e.uploadables;
          return s.create(function (e) {
            var s;
            (n || i) && (s = {
              operation: r,
              response: n,
              updater: i
            });

            var l = t._network.execute(r.request.node.params, r.request.variables, {
              force: !0
            }, u),
                c = a.execute({
              operation: r,
              operationLoader: t._operationLoader,
              optimisticConfig: s,
              publishQueue: t._publishQueue,
              scheduler: t._scheduler,
              sink: e,
              source: l,
              updater: o,
              operationTracker: t._operationTracker,
              getDataID: t._getDataID
            });

            return function () {
              return c.cancel();
            };
          });
        }, _.executeWithSource = function (e) {
          var t = this,
              r = e.operation,
              n = e.source;
          return s.create(function (e) {
            var i = a.execute({
              operation: r,
              operationLoader: t._operationLoader,
              operationTracker: t._operationTracker,
              optimisticConfig: null,
              publishQueue: t._publishQueue,
              scheduler: t._scheduler,
              sink: e,
              source: n,
              getDataID: t._getDataID
            });
            return function () {
              return i.cancel();
            };
          });
        }, _.sendQuery = function (e) {
          var t = e.cacheConfig,
              r = e.onCompleted,
              n = e.onError,
              i = e.onNext,
              o = e.operation;
          return h(!1, "environment.sendQuery() is deprecated. Update to the latest version of react-relay, and use environment.execute()."), this.execute({
            operation: o,
            cacheConfig: t
          }).subscribeLegacy({
            onNext: i,
            onError: n,
            onCompleted: r
          });
        }, _.sendMutation = function (e) {
          var t = e.onCompleted,
              r = e.onError,
              n = e.operation,
              i = e.optimisticResponse,
              o = e.optimisticUpdater,
              a = e.updater,
              s = e.uploadables;
          return h(!1, "environment.sendMutation() is deprecated. Update to the latest version of react-relay, and use environment.executeMutation()."), this.executeMutation({
            operation: n,
            optimisticResponse: i,
            optimisticUpdater: o,
            updater: a,
            uploadables: s
          }).subscribeLegacy({
            onNext: function (e) {
              t && t(e.errors);
            },
            onError: r,
            onCompleted: t
          });
        }, _.toJSON = function () {
          var e;
          return "RelayModernEnvironment(".concat(null !== (e = this.configName) && void 0 !== e ? e : "", ")");
        }, e;
      }();

      _.prototype["@@RelayModernEnvironment"] = !0, e.exports = _;
    }).call(this, r(52));
  }, function (e, t) {
    var r;

    r = function () {
      return this;
    }();

    try {
      r = r || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (r = window);
    }

    e.exports = r;
  }, function (e, t, r) {
    "use strict";

    var n = r(0),
        i = r(7).generateClientID,
        o = r(1).getStableStorageKey,
        a = function () {
      function e(e, t, r) {
        this._dataID = r, this._mutator = t, this._source = e;
      }

      var t = e.prototype;
      return t.copyFieldsFrom = function (e) {
        this._mutator.copyFields(e.getDataID(), this._dataID);
      }, t.getDataID = function () {
        return this._dataID;
      }, t.getType = function () {
        var e = this._mutator.getType(this._dataID);

        return null == e && n(!1, "RelayRecordProxy: Cannot get the type of deleted record `%s`.", this._dataID), e;
      }, t.getValue = function (e, t) {
        var r = o(e, t);
        return this._mutator.getValue(this._dataID, r);
      }, t.setValue = function (e, t, r) {
        s(e) || n(!1, "RelayRecordProxy#setValue(): Expected a scalar or array of scalars, got `%s`.", JSON.stringify(e));
        var i = o(t, r);
        return this._mutator.setValue(this._dataID, i, e), this;
      }, t.getLinkedRecord = function (e, t) {
        var r = o(e, t),
            n = this._mutator.getLinkedRecordID(this._dataID, r);

        return null != n ? this._source.get(n) : n;
      }, t.setLinkedRecord = function (t, r, i) {
        t instanceof e || n(!1, "RelayRecordProxy#setLinkedRecord(): Expected a record, got `%s`.", t);
        var a = o(r, i),
            s = t.getDataID();
        return this._mutator.setLinkedRecordID(this._dataID, a, s), this;
      }, t.getOrCreateLinkedRecord = function (e, t, r) {
        var n = this.getLinkedRecord(e, r);

        if (!n) {
          var a,
              s = o(e, r),
              u = i(this.getDataID(), s);
          n = null !== (a = this._source.get(u)) && void 0 !== a ? a : this._source.create(u, t), this.setLinkedRecord(n, e, r);
        }

        return n;
      }, t.getLinkedRecords = function (e, t) {
        var r = this,
            n = o(e, t),
            i = this._mutator.getLinkedRecordIDs(this._dataID, n);

        return null == i ? i : i.map(function (e) {
          return null != e ? r._source.get(e) : e;
        });
      }, t.setLinkedRecords = function (e, t, r) {
        Array.isArray(e) || n(!1, "RelayRecordProxy#setLinkedRecords(): Expected records to be an array, got `%s`.", e);
        var i = o(t, r),
            a = e.map(function (e) {
          return e && e.getDataID();
        });
        return this._mutator.setLinkedRecordIDs(this._dataID, i, a), this;
      }, e;
    }();

    function s(e) {
      return null == e || "object" != typeof e || Array.isArray(e) && e.every(s);
    }

    e.exports = a;
  }, function (e, t, r) {
    "use strict";

    var n = r(14),
        i = n.EXISTENT,
        o = n.NONEXISTENT,
        a = n.UNKNOWN,
        s = function () {
      function e(e) {
        var t = this;
        this._records = new Map(), null != e && Object.keys(e).forEach(function (r) {
          t._records.set(r, e[r]);
        });
      }

      var t = e.prototype;
      return t.clear = function () {
        this._records = new Map();
      }, t.delete = function (e) {
        this._records.set(e, null);
      }, t.get = function (e) {
        return this._records.get(e);
      }, t.getRecordIDs = function () {
        return Array.from(this._records.keys());
      }, t.getStatus = function (e) {
        return this._records.has(e) ? null == this._records.get(e) ? o : i : a;
      }, t.has = function (e) {
        return this._records.has(e);
      }, t.load = function (e, t) {
        t(null, this.get(e));
      }, t.remove = function (e) {
        this._records.delete(e);
      }, t.set = function (e, t) {
        this._records.set(e, t);
      }, t.size = function () {
        return this._records.size;
      }, t.toJSON = function () {
        var e = {},
            t = !0,
            r = !1,
            n = void 0;

        try {
          for (var i, o = this._records[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
            var a = i.value,
                s = a[0],
                u = a[1];
            e[s] = u;
          }
        } catch (e) {
          r = !0, n = e;
        } finally {
          try {
            t || null == o.return || o.return();
          } finally {
            if (r) throw n;
          }
        }

        return e;
      }, e;
    }();

    e.exports = s;
  }, function (e, t, r) {
    "use strict";

    var n = r(14),
        i = n.EXISTENT,
        o = n.NONEXISTENT,
        a = n.UNKNOWN,
        s = function () {
      function e(e) {
        this._records = e || {};
      }

      var t = e.prototype;
      return t.clear = function () {
        this._records = {};
      }, t.delete = function (e) {
        this._records[e] = null;
      }, t.get = function (e) {
        return this._records[e];
      }, t.getRecordIDs = function () {
        return Object.keys(this._records);
      }, t.getStatus = function (e) {
        return this._records.hasOwnProperty(e) ? null == this._records[e] ? o : i : a;
      }, t.has = function (e) {
        return this._records.hasOwnProperty(e);
      }, t.load = function (e, t) {
        t(null, this.get(e));
      }, t.remove = function (e) {
        delete this._records[e];
      }, t.set = function (e, t) {
        this._records[e] = t;
      }, t.size = function () {
        return Object.keys(this._records).length;
      }, t.toJSON = function () {
        return this._records;
      }, e;
    }();

    e.exports = s;
  }, function (e, t) {
    e.exports = l;
  }, function (e, t) {
    e.exports = c;
  }, function (e, t, r) {
    "use strict";

    var n = r(2),
        i = n(r(3)),
        o = n(r(8)),
        a = r(31),
        s = r(6),
        u = r(11),
        l = r(15),
        c = r(37),
        d = r(0),
        f = r(9),
        p = r(4),
        h = r(7).generateClientID,
        _ = r(10).createNormalizationSelector,
        v = r(1),
        g = v.ROOT_TYPE,
        m = v.TYPENAME_KEY,
        b = v.getStorageKey;

    var y = function () {
      function e(e) {
        var t = this,
            r = e.operation,
            n = e.operationLoader,
            i = e.optimisticConfig,
            o = e.publishQueue,
            a = e.scheduler,
            s = e.sink,
            u = e.source,
            l = e.updater,
            c = e.operationTracker,
            d = e.getDataID;
        this._incrementalResults = new Map(), this._nextSubscriptionId = 0, this._operation = r, this._operationLoader = n, this._optimisticUpdates = null, this._publishQueue = o, this._scheduler = a, this._sink = s, this._source = new Map(), this._state = "started", this._updater = l, this._subscriptions = new Map(), this._operationTracker = c, this._getDataID = d;
        var f = this._nextSubscriptionId++;
        u.subscribe({
          complete: function () {
            return t._complete(f);
          },
          error: function (e) {
            return t._error(e);
          },
          next: function (e) {
            try {
              t._next(f, e);
            } catch (e) {
              s.error(e);
            }
          },
          start: function (e) {
            return t._start(f, e);
          }
        }), null != i && this._processOptimisticResponse(null != i.response ? {
          data: i.response
        } : null, i.updater);
      }

      var t = e.prototype;
      return t.cancel = function () {
        var e = this;

        if ("completed" !== this._state) {
          this._state = "completed", 0 !== this._subscriptions.size && (this._subscriptions.forEach(function (e) {
            return e.unsubscribe();
          }), this._subscriptions.clear());
          var t = this._optimisticUpdates;
          null !== t && (this._optimisticUpdates = null, t.forEach(function (t) {
            return e._publishQueue.revertUpdate(t);
          }), this._publishQueue.run()), this._incrementalResults.clear(), this._completeOperationTracker();
        }
      }, t._schedule = function (e) {
        var t = this,
            r = this._scheduler;

        if (null != r) {
          var n = this._nextSubscriptionId++;
          u.create(function (t) {
            var n = r.schedule(function () {
              try {
                e(), t.complete();
              } catch (e) {
                t.error(e);
              }
            });
            return function () {
              return r.cancel(n);
            };
          }).subscribe({
            complete: function () {
              return t._complete(n);
            },
            error: function (e) {
              return t._error(e);
            },
            start: function (e) {
              return t._start(n, e);
            }
          });
        } else e();
      }, t._complete = function (e) {
        this._subscriptions.delete(e), 0 === this._subscriptions.size && (this.cancel(), this._sink.complete());
      }, t._error = function (e) {
        this.cancel(), this._sink.error(e);
      }, t._start = function (e, t) {
        this._subscriptions.set(e, t);
      }, t._next = function (e, t) {
        var r = this;

        this._schedule(function () {
          r._handleNext(t);
        });
      }, t._handleNext = function (e) {
        var t, r;

        if ("completed" !== this._state) {
          if (null == e.data) {
            var n = e.errors,
                i = a.create("RelayNetwork", "No data returned for operation `%s`, got error(s):\n%s\n\nSee the error `source` property for more information.", this._operation.request.node.params.name, n ? n.map(function (e) {
              return e.message;
            }).join("\n") : "(No errors)");
            throw i.source = {
              errors: n,
              operation: this._operation.request.node,
              variables: this._operation.request.variables
            }, i;
          }

          var o = e,
              s = !0 === (null === (t = e.extensions) || void 0 === t ? void 0 : t.isOptimistic);
          s && "started" !== this._state && d(!1, "RelayModernQueryExecutor: optimistic payload received after server payload.");
          var u = !0 === (null === (r = e.extensions) || void 0 === r ? void 0 : r.is_final);
          if (this._state = u ? "loading_final" : "loading_incremental", s) this._processOptimisticResponse(o, null);else {
            var l = e.path,
                c = e.label;
            null != l || null != c ? "string" == typeof c && Array.isArray(l) ? this._processIncrementalResponse({
              path: l,
              label: c,
              response: o
            }) : d(!1, "RelayModernQueryExecutor: invalid incremental payload, expected `path` and `label` to either both be null/undefined, or `path` to be an `Array<string | number>` and `label` to be a `string`.") : this._processResponse(o);
          }

          this._sink.next(e);
        }
      }, t._processOptimisticResponse = function (e, t) {
        var r = this;

        if (null !== this._optimisticUpdates && d(!1, "environment.execute: only support one optimistic response per execute."), null != e || null != t) {
          var n = [];

          if (e) {
            var i = E(e, this._operation.root, g, {
              getDataID: this._getDataID,
              path: [],
              request: this._operation.request
            });

            if (R(i), n.push({
              operation: this._operation,
              payload: i,
              updater: t
            }), i.moduleImportPayloads && i.moduleImportPayloads.length) {
              var a = i.moduleImportPayloads,
                  s = this._operationLoader;

              for (s || d(!1, "RelayModernEnvironment: Expected an operationLoader to be configured when using `@match`."); a.length;) {
                var u = a.shift(),
                    c = s.get(u.operationReference);

                if (null != c) {
                  var f = _(c, u.dataID, u.variables),
                      p = E({
                    data: u.data
                  }, f, u.typeName, {
                    getDataID: this._getDataID,
                    path: u.path,
                    request: this._operation.request
                  });

                  R(p), n.push({
                    operation: this._operation,
                    payload: p,
                    updater: null
                  }), p.moduleImportPayloads && a.push.apply(a, (0, o.default)(p.moduleImportPayloads));
                }
              }
            }
          } else t && n.push({
            operation: this._operation,
            payload: {
              connectionEvents: null,
              errors: null,
              fieldPayloads: null,
              incrementalPlaceholders: null,
              moduleImportPayloads: null,
              source: new l()
            },
            updater: t
          });

          this._optimisticUpdates = n, n.forEach(function (e) {
            return r._publishQueue.applyUpdate(e);
          });

          var h = this._publishQueue.run();

          this._updateOperationTracker(h);
        }
      }, t._processResponse = function (e) {
        var t = this;
        null !== this._optimisticUpdates && (this._optimisticUpdates.forEach(function (e) {
          return t._publishQueue.revertUpdate(e);
        }), this._optimisticUpdates = null);
        var r = E(e, this._operation.root, g, {
          getDataID: this._getDataID,
          path: [],
          request: this._operation.request
        });
        this._incrementalResults.clear(), this._source.clear(), this._publishQueue.commitPayload(this._operation, r, this._updater);

        var n = this._publishQueue.run();

        this._updateOperationTracker(n), this._processPayloadFollowups(r);
      }, t._processPayloadFollowups = function (e) {
        var t = this;

        if ("completed" !== this._state) {
          var r = e.incrementalPlaceholders,
              n = e.moduleImportPayloads;

          if (n && 0 !== n.length) {
            var i = this._operationLoader;
            i || d(!1, "RelayModernEnvironment: Expected an operationLoader to be configured when using `@match`."), n.forEach(function (e) {
              t._processModuleImportPayload(e, i);
            });
          }

          r && 0 !== r.length && (r.forEach(function (r) {
            t._processIncrementalPlaceholder(e, r);
          }), "loading_final" === this._state && (p(!1, "RelayModernEnvironment: Operation `%s` contains @defer/@stream directives but was executed in non-streaming mode. See https://fburl.com/relay-incremental-delivery-non-streaming-warning.", this._operation.request.node.params.name), r.forEach(function (e) {
            "defer" === e.kind && t._processDeferResponse(e.label, e.path, e, {
              data: e.data
            });
          })));
        }
      }, t._processModuleImportPayload = function (e, t) {
        var r = this,
            n = t.get(e.operationReference);
        if (null != n) this._schedule(function () {
          r._handleModuleImportPayload(e, n);
        });else {
          var i = this._nextSubscriptionId++;
          u.from(new Promise(function (r, n) {
            t.load(e.operationReference).then(r, n);
          })).map(function (t) {
            null != t && r._schedule(function () {
              r._handleModuleImportPayload(e, t);
            });
          }).subscribe({
            complete: function () {
              return r._complete(i);
            },
            error: function (e) {
              return r._error(e);
            },
            start: function (e) {
              return r._start(i, e);
            }
          });
        }
      }, t._handleModuleImportPayload = function (e, t) {
        var r = _(t, e.dataID, e.variables),
            n = E({
          data: e.data
        }, r, e.typeName, {
          getDataID: this._getDataID,
          path: e.path,
          request: this._operation.request
        });

        this._publishQueue.commitPayload(this._operation, n);

        var i = this._publishQueue.run();

        this._updateOperationTracker(i), this._processPayloadFollowups(n);
      }, t._processIncrementalPlaceholder = function (e, t) {
        var r,
            n = this,
            i = t.label,
            o = t.path.map(String).join("."),
            a = this._incrementalResults.get(i);

        null == a && (a = new Map(), this._incrementalResults.set(i, a));
        var u,
            l = a.get(o),
            c = null != l && "response" === l.kind ? l.responses : null;
        a.set(o, {
          kind: "placeholder",
          placeholder: t
        }), u = "stream" === t.kind ? t.parentID : t.selector.dataID;

        var p,
            _,
            v = e.source.get(u),
            g = (null !== (r = e.fieldPayloads) && void 0 !== r ? r : []).filter(function (e) {
          var t = h(e.dataID, e.fieldKey);
          return e.dataID === u || t === u;
        });

        null == v && d(!1, "RelayModernEnvironment: Expected record `%s` to exist.", u);

        var m = this._source.get(u);

        if (null != m) {
          p = s.update(m.record, v);

          var b = new Map(),
              y = function (e) {
            var t,
                r,
                n = (t = e, null !== (r = JSON.stringify(f(t))) && void 0 !== r ? r : "");
            b.set(n, e);
          };

          m.fieldPayloads.forEach(y), g.forEach(y), _ = Array.from(b.values());
        } else p = v, _ = g;

        this._source.set(u, {
          record: p,
          fieldPayloads: _
        }), null != c && c.forEach(function (e) {
          n._schedule(function () {
            n._processIncrementalResponse(e);
          });
        });
      }, t._processIncrementalResponse = function (e) {
        var t = e.label,
            r = e.path,
            n = e.response,
            i = this._incrementalResults.get(t);

        if (null == i && (i = new Map(), this._incrementalResults.set(t, i)), -1 !== t.indexOf("$defer$")) {
          var o = r.map(String).join("."),
              a = i.get(o);
          if (null == a) return a = {
            kind: "response",
            responses: [e]
          }, void i.set(o, a);
          if ("response" === a.kind) return void a.responses.push(e);
          var s = a.placeholder;
          "defer" !== s.kind && d(!1, "RelayModernEnvironment: Expected data for path `%s` for label `%s` to be data for @defer, was `@%s`.", o, t, s.kind), this._processDeferResponse(t, r, s, n);
        } else {
          var u = r.slice(0, -2).map(String).join("."),
              l = i.get(u);
          if (null == l) return l = {
            kind: "response",
            responses: [e]
          }, void i.set(u, l);
          if ("response" === l.kind) return void l.responses.push(e);
          var c = l.placeholder;
          "stream" !== c.kind && d(!1, "RelayModernEnvironment: Expected data for path `%s` for label `%s` to be data for @stream, was `@%s`.", u, t, c.kind), this._processStreamResponse(t, r, c, n);
        }
      }, t._processDeferResponse = function (e, t, r, n) {
        var i = r.selector.dataID,
            o = E(n, r.selector, r.typeName, {
          getDataID: this._getDataID,
          path: r.path,
          request: this._operation.request
        });

        this._publishQueue.commitPayload(this._operation, o);

        var a = this._source.get(i);

        null == a && d(!1, "RelayModernEnvironment: Expected the parent record `%s` for @defer data to exist.", i);
        var s = a.fieldPayloads;

        if (0 !== s.length) {
          var u = {
            connectionEvents: null,
            errors: null,
            fieldPayloads: s,
            incrementalPlaceholders: null,
            moduleImportPayloads: null,
            source: l.create()
          };

          this._publishQueue.commitPayload(this._operation, u);
        }

        var c = this._publishQueue.run();

        this._updateOperationTracker(c), this._processPayloadFollowups(o);
      }, t._processStreamResponse = function (e, t, r, n) {
        var i,
            a,
            u,
            c = r.parentID,
            f = r.node,
            p = r.variables,
            v = n.data;
        "object" != typeof v && d(!1, "RelayModernEnvironment: Expected the GraphQL @stream payload `data` value to be an object.");
        var g = f.selections[0];
        (null == g || "LinkedField" !== g.kind || !0 !== g.plural) && d(!1, "RelayModernEnvironment: Expected @stream to be used on a plural field.");

        var y = null !== (i = g.alias) && void 0 !== i ? i : g.name,
            R = b(g, p),
            D = this._source.get(c);

        null == D && d(!1, "RelayModernEnvironment: Expected the parent record `%s` for @stream data to exist.", c);
        var S = D.record,
            I = D.fieldPayloads,
            k = s.getLinkedRecordIDs(S, R);
        null == k && d(!1, "RelayModernEnvironment: Expected record `%s` to have fetched field `%s` with @stream.", c, g.name);
        var O = t[t.length - 1],
            N = parseInt(O, 10);
        N === O && N >= 0 || d(!1, "RelayModernEnvironment: Expected path for @stream to end in a positive integer index, got `%s`", O);
        var x = null !== (a = g.concreteType) && void 0 !== a ? a : v[m];
        "string" != typeof x && d(!1, "RelayModernEnvironment: Expected @stream field `%s` to have a __typename.", g.name);
        var L = (null !== (u = this._getDataID(v, x)) && void 0 !== u ? u : k && k[N]) || h(c, R, N);
        "string" != typeof L && d(!1, "RelayModernEnvironment: Expected id of elements of field `%s` to be strings.", R);

        var T = _(g, L, p),
            w = s.clone(S),
            P = (0, o.default)(k);

        P[N] = L, s.setLinkedRecordIDs(w, R, P), this._source.set(c, {
          record: w,
          fieldPayloads: I
        });
        var F = E(n, T, x, {
          getDataID: this._getDataID,
          path: [].concat((0, o.default)(r.path), [y, String(N)]),
          request: this._operation.request
        });

        if (this._publishQueue.commitPayload(this._operation, F, function (e) {
          var t = e.get(c);

          if (null != t) {
            var r = t.getLinkedRecords(R);

            if (null != r && r.length === k.length && !r.some(function (e, t) {
              return k[t] !== (e && e.getDataID());
            })) {
              var n = (0, o.default)(r);
              n[N] = e.get(L), t.setLinkedRecords(n, R);
            }
          }
        }), 0 !== I.length) {
          var A = {
            connectionEvents: null,
            errors: null,
            fieldPayloads: I,
            incrementalPlaceholders: null,
            moduleImportPayloads: null,
            source: l.create()
          };

          this._publishQueue.commitPayload(this._operation, A);
        }

        var C = this._publishQueue.run();

        this._updateOperationTracker(C), this._processPayloadFollowups(F);
      }, t._updateOperationTracker = function (e) {
        null != this._operationTracker && null != e && e.length > 0 && this._operationTracker.update(this._operation.request, new Set(e));
      }, t._completeOperationTracker = function () {
        null != this._operationTracker && this._operationTracker.complete(this._operation.request);
      }, e;
    }();

    function E(e, t, r, n) {
      var o = e.data,
          a = e.errors,
          u = l.create(),
          d = s.create(t.dataID, r);
      u.set(t.dataID, d);
      var f = c.normalize(u, t, o, n);
      return (0, i.default)({}, f, {
        errors: a
      });
    }

    function R(e) {
      var t = e.incrementalPlaceholders;
      null != t && 0 !== t.length && d(!1, "RelayModernQueryExecutor: optimistic responses cannot be returned for operations that use incremental data delivery (@defer, @stream, and @stream_connection).");
    }

    e.exports = {
      execute: function (e) {
        return new y(e);
      }
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e) {
      return !!e && "function" == typeof e.then;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(61),
        i = r(41),
        o = r(15),
        a = r(33),
        s = r(34),
        u = r(35),
        l = r(0),
        c = function () {
      function e(e, t, r) {
        this._backup = o.create(), this._handlerProvider = t || null, this._pendingBackupRebase = !1, this._pendingUpdaters = new Set(), this._pendingData = new Set(), this._pendingOptimisticUpdates = new Set(), this._store = e, this._appliedOptimisticUpdates = new Set(), this._gcHold = null, this._getDataID = r;
      }

      var t = e.prototype;
      return t.applyUpdate = function (e) {
        (this._appliedOptimisticUpdates.has(e) || this._pendingOptimisticUpdates.has(e)) && l(!1, "RelayPublishQueue: Cannot apply the same update function more than once concurrently."), this._pendingOptimisticUpdates.add(e);
      }, t.revertUpdate = function (e) {
        this._pendingOptimisticUpdates.has(e) ? this._pendingOptimisticUpdates.delete(e) : this._appliedOptimisticUpdates.has(e) && (this._pendingBackupRebase = !0, this._appliedOptimisticUpdates.delete(e));
      }, t.revertAll = function () {
        this._pendingBackupRebase = !0, this._pendingOptimisticUpdates.clear(), this._appliedOptimisticUpdates.clear();
      }, t.commitPayload = function (e, t, r) {
        this._pendingBackupRebase = !0, this._pendingData.add({
          kind: "payload",
          operation: e,
          payload: t,
          updater: r
        });
      }, t.commitUpdate = function (e) {
        this._pendingBackupRebase = !0, this._pendingUpdaters.add(e);
      }, t.commitSource = function (e) {
        this._pendingBackupRebase = !0, this._pendingData.add({
          kind: "source",
          source: e
        });
      }, t.run = function () {
        return this._pendingBackupRebase && this._backup.size() && (this._store.publish(this._backup), this._backup = o.create()), this._commitData(), this._commitUpdaters(), this._applyUpdates(), this._pendingBackupRebase = !1, this._appliedOptimisticUpdates.size > 0 ? this._gcHold || (this._gcHold = this._store.holdGC()) : this._gcHold && (this._gcHold.dispose(), this._gcHold = null), this._store.notify();
      }, t._getSourceFromPayload = function (e) {
        var t = this,
            r = e.payload,
            n = e.operation,
            i = e.updater,
            o = r.source,
            c = r.fieldPayloads,
            f = new a(this._store.getSource(), o),
            p = new s(f, this._getDataID);

        if (c && c.length && c.forEach(function (e) {
          var r = t._handlerProvider && t._handlerProvider(e.handle);

          r || l(!1, "RelayModernEnvironment: Expected a handler to be provided for handle `%s`.", e.handle), r.update(p, e);
        }), i) {
          var h = n.fragment;
          null == h && l(!1, "RelayModernEnvironment: Expected a selector to be provided with updater function."), i(new u(p, h), d(o, h));
        }

        return o;
      }, t._commitData = function () {
        var e = this;
        this._pendingData.size && (this._pendingData.forEach(function (t) {
          if ("payload" === t.kind) {
            var r = e._getSourceFromPayload(t);

            e._store.publish(r), t.payload.connectionEvents && e._store.publishConnectionEvents_UNSTABLE(t.payload.connectionEvents);
          } else {
            var n = t.source;

            e._store.publish(n);
          }
        }), this._pendingData.clear());
      }, t._commitUpdaters = function () {
        var e = this;

        if (this._pendingUpdaters.size) {
          var t = o.create();
          this._pendingUpdaters.forEach(function (r) {
            var i = new a(e._store.getSource(), t),
                o = new s(i, e._getDataID);
            n.applyWithGuard(r, null, [o], null, "RelayPublishQueue:commitUpdaters");
          }), this._store.publish(t), this._pendingUpdaters.clear();
        }
      }, t._applyUpdates = function () {
        var e = this;

        if (this._pendingOptimisticUpdates.size || this._pendingBackupRebase && this._appliedOptimisticUpdates.size) {
          var t = o.create(),
              r = new a(this._store.getSource(), t, this._backup),
              i = new s(r, this._getDataID, this._handlerProvider);
          this._pendingBackupRebase && this._appliedOptimisticUpdates.size && this._appliedOptimisticUpdates.forEach(function (e) {
            if (e.storeUpdater) {
              var t = e.storeUpdater;
              n.applyWithGuard(t, null, [i], null, "RelayPublishQueue:applyUpdates");
            } else {
              var r,
                  o = e.operation,
                  a = e.payload,
                  s = e.updater,
                  l = a.source,
                  c = a.fieldPayloads,
                  f = new u(i, o.fragment);
              l && (i.publishSource(l, c), r = d(l, o.fragment)), s && n.applyWithGuard(s, null, [f, r], null, "RelayPublishQueue:applyUpdates");
            }
          }), this._pendingOptimisticUpdates.size && (this._pendingOptimisticUpdates.forEach(function (t) {
            if (t.storeUpdater) {
              var r = t.storeUpdater;
              n.applyWithGuard(r, null, [i], null, "RelayPublishQueue:applyUpdates");
            } else {
              var o,
                  a = t.operation,
                  s = t.payload,
                  l = t.updater,
                  c = s.source,
                  f = s.fieldPayloads,
                  p = new u(i, a.fragment);
              c && (i.publishSource(c, f), o = d(c, a.fragment)), l && n.applyWithGuard(l, null, [p, o], null, "RelayPublishQueue:applyUpdates");
            }

            e._appliedOptimisticUpdates.add(t);
          }), this._pendingOptimisticUpdates.clear()), this._store.publish(t);
        }
      }, e;
    }();

    function d(e, t) {
      var n = i.read(e, t).data,
          o = r(13);
      return n && o(n), n;
    }

    e.exports = c;
  }, function (e, t) {
    e.exports = d;
  }, function (e, t, r) {
    "use strict";

    var n = r(2),
        i = n(r(3)),
        o = n(r(8)),
        a = function () {},
        s = !1,
        u = function () {
      var e = {
        style: "list-style-type: none; padding: 0; margin: 0 0 0 12px; font-style: normal"
      },
          t = {
        style: "rgb(136, 19, 145)"
      },
          r = {
        style: "color: #777"
      },
          n = function (e) {
        return ["span", {
          style: "font-style: italic"
        }, e.__typename, ["span", r, ' {id: "', e.__id, '", …}']];
      },
          i = function (e) {
        return null != e && "string" == typeof e.__id;
      },
          a = function (e, t) {
        this.key = e, this.value = t;
      },
          s = function (t) {
        var r = Object.keys(t).map(function (e) {
          return ["li", {}, ["object", {
            object: new a(e, t[e])
          }]];
        });
        return ["ol", e].concat((0, o.default)(r));
      };

      return [{
        header: function (e) {
          return i(e) ? n(e) : null;
        },
        hasBody: function (e) {
          return !0;
        },
        body: function (e) {
          return s(e);
        }
      }, {
        header: function (e) {
          if (e instanceof a) {
            var o = i(e.value) ? n(e.value) : null == (s = e.value) ? ["span", r, "undefined"] : ["object", {
              object: s,
              config: u
            }];
            return ["span", t, e.key, ": ", o];
          }

          var s, u;
          return null;
        },
        hasBody: function (e) {
          return i(e.value);
        },
        body: function (e) {
          return s(e.value);
        }
      }];
    };

    a = function (e, t) {
      var r, n;
      return s || (s = !0, null == window.devtoolsFormatters && (window.devtoolsFormatters = []), Array.isArray(window.devtoolsFormatters) && (console.info('Make sure to select "Enable custom formatters" in the Chrome Developer Tools settings, tab "Preferences" under the "Console" section.'), (n = window.devtoolsFormatters).push.apply(n, (0, o.default)(u())))), function e(t, r) {
        var n = t.get(r);
        return null == n ? n : new Proxy((0, i.default)({}, n), {
          get: function (r, n) {
            var i = r[n];
            if (null == i) return i;

            if ("object" == typeof i) {
              if ("string" == typeof i.__ref) return e(t, i.__ref);
              if (Array.isArray(i.__refs)) return i.__refs.map(function (r) {
                return e(t, r);
              });
            }

            return i;
          }
        });
      }(e.getStore().getSource(), null !== (r = t) && void 0 !== r ? r : "client:root");
    }, e.exports = {
      inspect: a
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(0),
        i = r(9);

    e.exports = function (e, t) {
      var r = null != e.id ? e.id : e.text;
      return null == r && n(!1, "getRequestIdentifier: Expected request `%s` to have either a valid `id` or `text` property", e.name), r + JSON.stringify(i(t));
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(2)(r(3)),
        i = r(32),
        o = r(25),
        a = r(6),
        s = r(26),
        u = r(41),
        l = r(65),
        c = r(13),
        d = r(42),
        f = r(66),
        p = r(0),
        h = r(45),
        _ = r(67),
        v = r(10).createReaderSelector,
        g = r(1).UNPUBLISH_RECORD_SENTINEL,
        m = function () {
      function e(e) {
        for (var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, i = arguments.length > 3 ? arguments[3] : void 0, o = e.getRecordIDs(), s = 0; s < o.length; s++) {
          var u = e.get(o[s]);
          u && a.freeze(u);
        }

        this._connectionEvents = new Map(), this._connectionSubscriptions = new Set(), this._gcScheduler = r, this._hasScheduledGC = !1, this._index = 0, this._operationLoader = n, this._pendingConnectionEvents = new Map(), this._recordSource = e, this._roots = new Map(), this._subscriptions = new Set(), this._updatedConnectionIDs = {}, this._updatedRecordIDs = {}, this._gcHoldCounter = 0, this._shouldScheduleGC = !1, this._getDataID = null !== (t = i) && void 0 !== t ? t : d;
      }

      var t = e.prototype;
      return t.getSource = function () {
        return this._recordSource;
      }, t.check = function (e) {
        return i.check(this._recordSource, this._recordSource, e, [], this._operationLoader, this._getDataID);
      }, t.retain = function (e) {
        var t = this,
            r = this._index++;
        return this._roots.set(r, e), {
          dispose: function () {
            t._roots.delete(r), t._scheduleGC();
          }
        };
      }, t.lookup = function (e) {
        var t = u.read(this._recordSource, e);
        return c(t), t;
      }, t.notify = function () {
        var e = this,
            t = [];
        return this._subscriptions.forEach(function (r) {
          var n = e._updateSubscription(r);

          null != n && t.push(n);
        }), this._connectionSubscriptions.forEach(function (t) {
          e._updateConnection(t);
        }), this._pendingConnectionEvents.forEach(function (t, r) {
          var n = e._connectionEvents.get(r);

          null == n ? e._connectionEvents.set(r, t) : e._connectionEvents.set(r, n.concat(t));
        }), this._updatedConnectionIDs = {}, this._updatedRecordIDs = {}, t;
      }, t.publish = function (e) {
        !function (e, t, r) {
          for (var n = t.getRecordIDs(), i = 0; i < n.length; i++) {
            var o = n[i],
                s = t.get(o),
                u = e.get(o);
            if (s && a.freeze(s), s === g) e.remove(o), r[o] = !0;else if (s && u) {
              var l = a.update(u, s);
              l !== u && (a.freeze(l), r[o] = !0, e.set(o, l));
            } else null === s ? (e.delete(o), null !== u && (r[o] = !0)) : s && (e.set(o, s), r[o] = !0);
          }
        }(this._recordSource, e, this._updatedRecordIDs);
      }, t.publishConnectionEvents_UNSTABLE = function (e) {
        var t = this;
        0 !== e.length && (o.ENABLE_CONNECTION_RESOLVERS || p(!1, "RelayModernStore: Connection resolvers are not yet supported."), e.forEach(function (e) {
          var r = t._pendingConnectionEvents.get(e.connectionID);

          null == r && (r = [], t._pendingConnectionEvents.set(e.connectionID, r)), r.push(e);
        }));
      }, t.subscribe = function (e, t) {
        var r = this,
            n = {
          callback: t,
          snapshot: e
        };
        return this._subscriptions.add(n), {
          dispose: function () {
            r._subscriptions.delete(n);
          }
        };
      }, t.holdGC = function () {
        var e = this;
        this._gcHoldCounter++;
        return {
          dispose: function () {
            e._gcHoldCounter > 0 && (e._gcHoldCounter--, 0 === e._gcHoldCounter && e._shouldScheduleGC && (e._scheduleGC(), e._shouldScheduleGC = !1));
          }
        };
      }, t.lookupConnection_UNSTABLE = function (e) {
        var t,
            r = this;
        o.ENABLE_CONNECTION_RESOLVERS || p(!1, "RelayModernStore: Connection resolvers are not yet supported.");

        var n = e.edgeField,
            i = e.id,
            a = e.resolver,
            s = e.variables,
            l = a.initialize(),
            c = this._connectionEvents.get(i);

        if (null == c) return {
          id: i,
          reference: e,
          seenRecords: {},
          state: l
        };
        var d = {
          kind: "Fragment",
          name: n.name,
          type: null !== (t = n.concreteType) && void 0 !== t ? t : "__Any",
          metadata: null,
          argumentDefinitions: [],
          selections: n.selections
        },
            f = {},
            h = c.reduce(function (e, t) {
          if ("fetch" === t.kind) {
            var n = t.edgeIDs.map(function (e) {
              if (null == e) return e;
              var n = u.read(r._recordSource, v(d, e, s, t.request));
              return Object.assign(f, n.seenRecords), n.data;
            });
            return a.reduce(e, {
              kind: "fetch",
              args: t.args,
              edges: n,
              pageInfo: t.pageInfo
            });
          }

          if ("insert" === t.kind) {
            var i = u.read(r._recordSource, v(d, t.edgeID, s, t.request));
            return Object.assign(f, i.seenRecords), a.reduce(e, {
              kind: "insert",
              args: t.args,
              edge: i.data
            });
          }

          t.kind, p(!1, "RelayModernStore: Unexpected connection event kind `%s`.", t.kind);
        }, l);
        return {
          id: i,
          reference: e,
          seenRecords: f,
          state: h
        };
      }, t.subscribeConnection_UNSTABLE = function (e, t) {
        var r = this;
        o.ENABLE_CONNECTION_RESOLVERS || p(!1, "RelayModernStore: Connection resolvers are not yet supported.");
        var n = {
          callback: t,
          snapshot: e
        };
        return this._connectionSubscriptions.add(n), {
          dispose: function () {
            r._connectionSubscriptions.delete(n);
          }
        };
      }, t.toJSON = function () {
        return "RelayModernStore()";
      }, t.__getUpdatedRecordIDs = function () {
        return this._updatedRecordIDs;
      }, t._updateSubscription = function (e) {
        var t = e.callback,
            r = e.snapshot;

        if (f(r.seenRecords, this._updatedRecordIDs)) {
          var i = u.read(this._recordSource, r.selector),
              o = h(r.data, i.data);
          return i = (0, n.default)({}, i, {
            data: o
          }), c(i), e.snapshot = i, i.data !== r.data ? (t(i), r.selector.owner) : void 0;
        }
      }, t._updateConnection = function (e) {
        var t = e.snapshot,
            r = e.callback;

        if (this._pendingConnectionEvents.has(t.reference.id) || f(t.seenRecords, this._updatedRecordIDs)) {
          var n = this.lookupConnection_UNSTABLE(t.reference),
              i = h(t.state, n.state);
          c(n), e.snapshot = n, i !== t.state && r(i);
        }
      }, t._scheduleGC = function () {
        var e = this;
        this._gcHoldCounter > 0 ? this._shouldScheduleGC = !0 : this._hasScheduledGC || (this._hasScheduledGC = !0, this._gcScheduler(function () {
          e.__gc(), e._hasScheduledGC = !1;
        }));
      }, t.__gc = function () {
        var e = this,
            t = new Set();
        if (this._roots.forEach(function (r) {
          l.mark(e._recordSource, r, t, e._operationLoader);
        }), t.size) for (var r = this._recordSource.getRecordIDs(), n = 0; n < r.length; n++) {
          var i = r[n];
          t.has(i) || this._recordSource.remove(i);
        } else this._recordSource.clear();
      }, e;
    }();

    s.instrumentMethods(m.prototype, {
      lookup: "RelayModernStore.prototype.lookup",
      notify: "RelayModernStore.prototype.notify",
      publish: "RelayModernStore.prototype.publish",
      __gc: "RelayModernStore.prototype.__gc"
    }), e.exports = m;
  }, function (e, t, r) {
    "use strict";

    var n = r(5),
        i = r(6),
        o = r(1),
        a = r(39),
        s = r(0),
        u = n.CONDITION,
        l = n.CLIENT_EXTENSION,
        c = n.DEFER,
        d = n.CONNECTION_FIELD,
        f = n.FRAGMENT_SPREAD,
        p = n.INLINE_FRAGMENT,
        h = n.LINKED_FIELD,
        _ = n.MODULE_IMPORT,
        v = n.LINKED_HANDLE,
        g = n.SCALAR_FIELD,
        m = n.SCALAR_HANDLE,
        b = n.STREAM,
        y = o.getStorageKey,
        E = o.getModuleOperationKey;

    var R = function () {
      function e(e, t, r, n) {
        var i;
        this._operationLoader = null !== (i = n) && void 0 !== i ? i : null, this._references = r, this._recordSource = e, this._variables = t;
      }

      var t = e.prototype;
      return t.mark = function (e, t) {
        this._traverse(e, t);
      }, t._traverse = function (e, t) {
        this._references.add(t);

        var r = this._recordSource.get(t);

        null != r && this._traverseSelections(e.selections, r);
      }, t._getVariableValue = function (e) {
        return this._variables.hasOwnProperty(e) || s(!1, "RelayReferenceMarker(): Undefined variable `%s`.", e), this._variables[e];
      }, t._traverseSelections = function (e, t) {
        var r = this;
        e.forEach(function (n) {
          switch (n.kind) {
            case h:
              n.plural ? r._traversePluralLink(n, t) : r._traverseLink(n, t);
              break;

            case u:
              r._getVariableValue(n.condition) === n.passingValue && r._traverseSelections(n.selections, t);
              break;

            case p:
              var o = i.getType(t);
              null != o && o === n.type && r._traverseSelections(n.selections, t);
              break;

            case f:
              s(!1, "RelayReferenceMarker(): Unexpected fragment spread `...%s`, expected all fragments to be inlined.", n.name);

            case v:
              var y = a(n, e, r._variables);
              y.plural ? r._traversePluralLink(y, t) : r._traverseLink(y, t);
              break;

            case c:
            case b:
              r._traverseSelections(n.selections, t);

              break;

            case g:
            case m:
              break;

            case _:
              r._traverseModuleImport(n, t);

              break;

            case l:
              r._traverseSelections(n.selections, t);

              break;

            case d:
              s(!1, "RelayReferenceMarker(): Connection fields are not supported yet.");
              break;

            default:
              s(!1, "RelayReferenceMarker: Unknown AST node `%s`.", n);
          }
        });
      }, t._traverseModuleImport = function (e, t) {
        var r = this._operationLoader;
        null === r && s(!1, "RelayReferenceMarker: Expected an operationLoader to be configured when using `@module`.");
        var n = E(e.documentName),
            o = i.getValue(t, n);

        if (null != o) {
          var a = r.get(o);
          null != a && this._traverseSelections(a.selections, t);
        }
      }, t._traverseLink = function (e, t) {
        var r = y(e, this._variables),
            n = i.getLinkedRecordID(t, r);
        null != n && this._traverse(e, n);
      }, t._traversePluralLink = function (e, t) {
        var r = this,
            n = y(e, this._variables),
            o = i.getLinkedRecordIDs(t, n);
        null != o && o.forEach(function (t) {
          null != t && r._traverse(e, t);
        });
      }, e;
    }();

    e.exports = {
      mark: function (e, t, r, n) {
        var i = t.dataID,
            o = t.node,
            a = t.variables;
        new R(e, a, r, n).mark(o, i);
      }
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e, t) {
      for (var r = Object.keys(e), n = 0; n < r.length; n++) if (t.hasOwnProperty(r[n])) return !0;

      return !1;
    };
  }, function (e, t) {
    e.exports = f;
  }, function (e, t, r) {
    "use strict";

    var n = r(0),
        i = r(46),
        o = i.convertFetch,
        a = i.convertSubscribe;
    e.exports = {
      create: function (e, t) {
        var r = o(e),
            i = t ? a(t) : void 0;
        return {
          execute: function (e, t, o, a) {
            if ("subscription" === e.operationKind) return i || n(!1, "RelayNetwork: This network layer does not support Subscriptions. To use Subscriptions, provide a custom network layer."), a && n(!1, "RelayNetwork: Cannot provide uploadables while subscribing."), i(e, t, o);
            var s = o.poll;
            return null != s ? (a && n(!1, "RelayNetwork: Cannot provide uploadables while polling."), r(e, t, {
              force: !0
            }).poll(s)) : r(e, t, o, a);
          }
        };
      }
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(2),
        i = n(r(17)),
        o = n(r(8)),
        a = r(0),
        s = 1,
        u = function () {
      function e(e) {
        var t = e.request,
            r = e.variables,
            n = e.cacheConfig,
            o = e.uploadables;
        (0, i.default)(this, "_hasCommittedLogs", !1), (0, i.default)(this, "_logs", []), this._cacheConfig = n, this._id = s++, this._request = t, this._uploadables = o, this._variables = r, this._identifier = "[".concat(this._id, "] Relay Modern: ").concat(this._request.name);
      }

      var t = e.prototype;
      return t.addLog = function (e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];

        this._logs.push({
          label: e,
          values: r
        });
      }, t.clearLogs = function () {
        this._logs = [];
      }, t.timerStart = function () {
        console.time && console.time(this.getIdentifier());
      }, t.timerEnd = function () {
        console.timeEnd && console.timeEnd(this.getIdentifier());
      }, t.printLogs = function (e, t, r) {
        var n = this.getIdentifier();
        console.groupCollapsed && console.groupCollapsed("%c".concat(n), e ? "color:red" : ""), this.timerEnd(), this.getLogsToPrint(e, t, r).forEach(function (e) {
          var t,
              r = e.label,
              n = e.values;
          (t = console).log.apply(t, ["".concat(r, ":")].concat((0, o.default)(n)));
        }), console.groupEnd && console.groupEnd();
      }, t.commitLogs = function (e, t, r) {
        !1 !== this._hasCommittedLogs && a(!1, "The logs for transaction #".concat(this._id, " have already been committed.")), this.printLogs(e, t, r), this.markCommitted();
      }, t.markCommitted = function () {
        this._hasCommittedLogs = !0;
      }, t.flushLogs = function (e, t, r) {
        !1 !== this._hasCommittedLogs && a(!1, "The logs for transaction #".concat(this._id, " have already been committed.")), this.printLogs(e, t, r), this.clearLogs();
      }, t.getCacheConfig = function () {
        return this._cacheConfig;
      }, t.getIdentifier = function () {
        return this._identifier;
      }, t.getLogsToPrint = function (e, t, r) {
        return this._logs;
      }, t.getRequest = function () {
        return this._request;
      }, t.getUploadables = function () {
        return this._uploadables;
      }, t.getVariables = function () {
        return this._variables;
      }, e;
    }();

    e.exports = u;
  }, function (e, t, r) {
    "use strict";

    var n = r(2)(r(3)),
        i = r(0),
        o = r(9),
        a = function () {
      function e(e) {
        var t = e.size,
            r = e.ttl;
        t > 0 || i(!1, "RelayQueryResponseCache: Expected the max cache size to be > 0, got `%s`.", t), r > 0 || i(!1, "RelayQueryResponseCache: Expected the max ttl to be > 0, got `%s`.", r), this._responses = new Map(), this._size = t, this._ttl = r;
      }

      var t = e.prototype;
      return t.clear = function () {
        this._responses.clear();
      }, t.get = function (e, t) {
        var r = this,
            i = s(e, t);

        this._responses.forEach(function (e, t) {
          var n, i;
          n = e.fetchTime, i = r._ttl, n + i >= Date.now() || r._responses.delete(t);
        });

        var o = this._responses.get(i);

        return null != o ? (0, n.default)({}, o.payload, {
          extensions: (0, n.default)({}, o.payload.extensions, {
            cacheTimestamp: o.fetchTime
          })
        }) : null;
      }, t.set = function (e, t, r) {
        var n = Date.now(),
            i = s(e, t);

        if (this._responses.delete(i), this._responses.set(i, {
          fetchTime: n,
          payload: r
        }), this._responses.size > this._size) {
          var o = this._responses.keys().next();

          o.done || this._responses.delete(o.value);
        }
      }, e;
    }();

    function s(e, t) {
      return JSON.stringify(o({
        queryID: e,
        variables: t
      }));
    }

    e.exports = a;
  }, function (e, t, r) {
    "use strict";

    var n = r(18),
        i = r(0),
        o = r(27),
        a = r(16).getRequest,
        s = r(12).createOperationDescriptor;

    e.exports = function (e, t) {
      o(e) || i(!1, "commitMutation: expected `environment` to be an instance of `RelayModernEnvironment`.");
      var r = a(t.mutation);
      if ("mutation" !== r.params.operationKind) throw new Error("commitMutation: Expected mutation operation");
      var u = t.optimisticUpdater,
          l = t.configs,
          c = t.optimisticResponse,
          d = t.variables,
          f = s(r, d);
      return l && (u = n.convert(l, r, u).optimisticUpdater), e.applyMutation({
        operation: f,
        response: c,
        updater: u
      });
    };
  }, function (e, t, r) {
    "use strict";

    e.exports = function (e, t) {
      e.commitUpdate(t);
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(2)(r(8)),
        i = r(18),
        o = r(0),
        a = r(27),
        s = r(74),
        u = r(4),
        l = r(16).getRequest,
        c = r(12).createOperationDescriptor;

    e.exports = function (e, t) {
      a(e) || o(!1, "commitMutation: expected `environment` to be an instance of `RelayModernEnvironment`.");
      var r = l(t.mutation);
      if ("mutation" !== r.params.operationKind) throw new Error("commitMutation: Expected mutation operation");
      if ("Request" !== r.kind) throw new Error("commitMutation: Expected mutation to be of type request");
      var d = t.optimisticResponse,
          f = t.optimisticUpdater,
          p = t.updater,
          h = t.configs,
          _ = t.onError,
          v = t.variables,
          g = t.uploadables,
          m = c(r, v);

      if ("function" == typeof d && (d = d(), u(!1, "commitMutation: Expected `optimisticResponse` to be an object, received a function.")), d instanceof Object && s(d, r, t.variables), h) {
        var b = i.convert(h, r, f, p);
        f = b.optimisticUpdater, p = b.updater;
      }

      var y = [];
      return {
        dispose: e.executeMutation({
          operation: m,
          optimisticResponse: d,
          optimisticUpdater: f,
          updater: p,
          uploadables: g
        }).subscribe({
          next: function (e) {
            e.errors && y.push.apply(y, (0, n.default)(e.errors));
          },
          complete: function () {
            var r = t.onCompleted;
            r && r(e.lookup(m.fragment).data, 0 !== y.length ? y : null);
          },
          error: _
        }).unsubscribe
      };
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(2)(r(3)),
        i = r(4),
        o = function () {},
        a = function (e, t, r) {
      var n = t;
      e.split(".").forEach(function (e, t, i) {
        null == n[e] && (n[e] = {}), r && t === i.length - 1 && (n[e] = "<scalar>"), n = n[e];
      });
    };

    o = function (e, t, r) {
      var n = t.operation.name,
          o = {
        path: "ROOT",
        visitedPaths: new Set(),
        variables: r || {},
        missingDiff: {},
        extraDiff: {}
      };
      s(e, t.operation.selections, o), c(e, o), i(null == o.missingDiff.ROOT, "Expected `optimisticResponse` to match structure of server response for mutation `%s`, please define fields for all of\n%s", n, JSON.stringify(o.missingDiff.ROOT, null, 2)), i(null == o.extraDiff.ROOT, "Expected `optimisticResponse` to match structure of server response for mutation `%s`, please remove all fields of\n%s", n, JSON.stringify(o.extraDiff.ROOT, null, 2));
    };

    var s = function (e, t, r) {
      t.forEach(function (t) {
        return u(e, t, r);
      });
    },
        u = function e(t, r, n) {
      switch (r.kind) {
        case "Condition":
          return void (r.passingValue === n.variables[r.condition] && s(t, r.selections, n));

        case "ScalarField":
        case "LinkedField":
          return l(t, r, n);

        case "InlineFragment":
          var i = r.type;
          return void r.selections.forEach(function (r) {
            t.__typename === i && e(t, r, n);
          });

        case "ConnectionField":
        case "ClientExtension":
        case "ModuleImport":
        case "LinkedHandle":
        case "ScalarHandle":
        case "Defer":
        case "Stream":
        default:
          return;
      }
    },
        l = function (e, t, r) {
      var i = t.alias || t.name,
          o = "".concat(r.path, ".").concat(i);

      switch (r.visitedPaths.add(o), t.kind) {
        case "ScalarField":
          return void (void 0 === e[i] && a(o, r.missingDiff, !0));

        case "LinkedField":
          var u = t.selections;
          if (null === e[i]) return;
          return t.plural ? Array.isArray(e[i]) ? void e[i].forEach(function (e) {
            return s(e, u, (0, n.default)({}, r, {
              path: o
            }));
          }) : void a(o, r.missingDiff) : e[i] instanceof Object ? void s(e[i], u, (0, n.default)({}, r, {
            path: o
          })) : void a(o, r.missingDiff);
      }
    },
        c = function e(t, r) {
      Array.isArray(t) ? t.forEach(function (t) {
        return e(t, r);
      }) : Object.keys(t).forEach(function (i) {
        var o = t[i],
            s = "".concat(r.path, ".").concat(i);
        r.visitedPaths.has(s) ? o instanceof Object && e(o, (0, n.default)({}, r, {
          path: s
        })) : a(s, r.extraDiff);
      });
    };

    e.exports = o;
  }, function (e, t, r) {
    "use strict";

    var n = r(76),
        i = r(4);

    e.exports = function (e, t, r, o, a) {
      return Object.keys(r).forEach(function (e) {
        var r = o[e];
        i(void 0 !== r, "createFragmentSpecResolver: Expected prop `%s` to be supplied to `%s`, but got `undefined`. Pass an explicit `null` if this is intentional.", e, t);
      }), new n(e, r, o, a);
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(2),
        i = n(r(3)),
        o = n(r(17)),
        a = r(19),
        s = r(0),
        u = r(47),
        l = r(12).createRequestDescriptor,
        c = r(10),
        d = c.areEqualSelectors,
        f = c.createReaderSelector,
        p = c.getSelectorsFromObject,
        h = function () {
      function e(e, t, r, n) {
        var i = this;
        (0, o.default)(this, "_onChange", function () {
          i._stale = !0, "function" == typeof i._callback && i._callback();
        }), this._callback = n, this._context = e, this._data = {}, this._fragments = t, this._props = r, this._resolvers = {}, this._stale = !1, this.setProps(r);
      }

      var t = e.prototype;
      return t.dispose = function () {
        for (var e in this._resolvers) this._resolvers.hasOwnProperty(e) && g(this._resolvers[e]);
      }, t.resolve = function () {
        if (this._stale) {
          var e,
              t = this._data;

          for (var r in this._resolvers) if (this._resolvers.hasOwnProperty(r)) {
            var n = this._resolvers[r],
                o = t[r];

            if (n) {
              var a = n.resolve();
              (e || a !== o) && ((e = e || (0, i.default)({}, t))[r] = a);
            } else {
              var s = this._props[r],
                  l = void 0 !== s ? s : null;
              !e && u(l, o) || ((e = e || (0, i.default)({}, t))[r] = l);
            }
          }

          this._data = e || t, this._stale = !1;
        }

        return this._data;
      }, t.setCallback = function (e) {
        this._callback = e;
      }, t.setProps = function (e) {
        var t = p(this._fragments, e);

        for (var r in t) if (t.hasOwnProperty(r)) {
          var n = t[r],
              i = this._resolvers[r];
          null == n ? (null != i && i.dispose(), i = null) : "PluralReaderSelector" === n.kind ? null == i ? i = new v(this._context.environment, n, this._onChange) : (i instanceof v || s(!1, "RelayModernFragmentSpecResolver: Expected prop `%s` to always be an array.", r), i.setSelector(n)) : null == i ? i = new _(this._context.environment, n, this._onChange) : (i instanceof _ || s(!1, "RelayModernFragmentSpecResolver: Expected prop `%s` to always be an object.", r), i.setSelector(n)), this._resolvers[r] = i;
        }

        this._props = e, this._stale = !0;
      }, t.setVariables = function (e, t) {
        for (var r in this._resolvers) if (this._resolvers.hasOwnProperty(r)) {
          var n = this._resolvers[r];
          n && n.setVariables(e, t);
        }

        this._stale = !0;
      }, e;
    }(),
        _ = function () {
      function e(e, t, r) {
        var n = this;
        (0, o.default)(this, "_onChange", function (e) {
          n._data = e.data, n._callback();
        });
        var i = e.lookup(t);
        this._callback = r, this._data = i.data, this._environment = e, this._selector = t, this._subscription = e.subscribe(i, this._onChange);
      }

      var t = e.prototype;
      return t.dispose = function () {
        this._subscription && (this._subscription.dispose(), this._subscription = null);
      }, t.resolve = function () {
        return this._data;
      }, t.setSelector = function (e) {
        if (null == this._subscription || !d(e, this._selector)) {
          this.dispose();

          var t = this._environment.lookup(e);

          this._data = t.data, this._selector = e, this._subscription = this._environment.subscribe(t, this._onChange);
        }
      }, t.setVariables = function (e, t) {
        if (!a(e, this._selector.variables)) {
          var r = l(t, e),
              n = f(this._selector.node, this._selector.dataID, e, r);
          this.setSelector(n);
        }
      }, e;
    }(),
        v = function () {
      function e(e, t, r) {
        var n = this;
        (0, o.default)(this, "_onChange", function (e) {
          n._stale = !0, n._callback();
        }), this._callback = r, this._data = [], this._environment = e, this._resolvers = [], this._stale = !0, this.setSelector(t);
      }

      var t = e.prototype;
      return t.dispose = function () {
        this._resolvers.forEach(g);
      }, t.resolve = function () {
        if (this._stale) {
          for (var e, t = this._data, r = 0; r < this._resolvers.length; r++) {
            var n = t[r],
                i = this._resolvers[r].resolve();

            (e || i !== n) && (e = e || t.slice(0, r)).push(i);
          }

          e || this._resolvers.length === t.length || (e = t.slice(0, this._resolvers.length)), this._data = e || t, this._stale = !1;
        }

        return this._data;
      }, t.setSelector = function (e) {
        for (var t = e.selectors; this._resolvers.length > t.length;) {
          this._resolvers.pop().dispose();
        }

        for (var r = 0; r < t.length; r++) r < this._resolvers.length ? this._resolvers[r].setSelector(t[r]) : this._resolvers[r] = new _(this._environment, t[r], this._onChange);

        this._stale = !0;
      }, t.setVariables = function (e, t) {
        this._resolvers.forEach(function (r) {
          return r.setVariables(e, t);
        }), this._stale = !0;
      }, e;
    }();

    function g(e) {
      e && e.dispose();
    }

    e.exports = h;
  }, function (e, t, r) {
    "use strict";

    var n,
        i,
        o = r(0);

    e.exports = function (e) {
      return n || (n = e.createContext(null), i = e), e !== i && o(!1, "[createRelayContext]: You passing a different instance of React", e.version), n;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(46),
        i = n.convertFetch,
        o = n.convertSubscribe;

    function a(e, t, r) {
      return function (n, i, o, a) {
        var s;

        function u(e, t, a) {
          r && s.addLog("GraphiQL", r(n, i)), s.addLog("Cache Config", o), s.addLog("Variables", JSON.stringify(i, null, 2)), a && s.addLog("Status", a), e && s.addLog("Error", e), t && s.addLog("Response", t);
        }

        function l(e, t, r) {
          u(e, t, r), s.flushLogs(e, t, r);
        }

        function c(e, t, r) {
          u(e, t, r), s.commitLogs(e, t, r);
        }

        var d = e(n, i, o, a),
            f = "subscription" === n.operationKind;
        return d.do({
          start: function () {
            (s = new t({
              request: n,
              variables: i,
              cacheConfig: o,
              uploadables: a
            })).timerStart(), f && l(null, null, "subscription is sent.");
          },
          next: function (e) {
            l(null, e), s.timerStart();
          },
          error: function (e) {
            return c(e, null, null);
          },
          complete: function () {
            f ? c(null, null, "subscription was closed.") : s.markCommitted();
          },
          unsubscribe: function () {
            return c(null, null, f ? "subscription is unsubscribed." : "execution is unsubscribed.");
          }
        });
      };
    }

    e.exports = function (e) {
      return {
        wrapFetch: function (t, r) {
          return function (n, o, s, u) {
            return a(i(t), e, r)(n, o, s, u);
          };
        },
        wrapSubscribe: function (t, r) {
          return function (n, i, s) {
            return a(o(t), e, r)(n, i, s);
          };
        }
      };
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(12).createOperationDescriptor,
        i = r(16).getRequest;

    e.exports = function (e, t, r, o) {
      var a = i(t);
      if ("query" !== a.params.operationKind) throw new Error("fetchQuery: Expected query operation");
      var s = n(a, r);
      return e.execute({
        operation: s,
        cacheConfig: o
      }).map(function () {
        return e.lookup(s.fragment).data;
      }).toPromise();
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(11),
        i = r(81),
        o = r(0),
        a = new Map();

    function s(e, t, r) {
      return n.create(function (n) {
        var a = l(e),
            s = t.identifier,
            d = a.get(s);
        return d || r().finally(function () {
          return a.delete(s);
        }).subscribe({
          start: function (e) {
            d = {
              identifier: s,
              subject: new i(),
              subscription: e
            }, a.set(s, d);
          },
          next: function (e) {
            c(a, s).subject.next(e);
          },
          error: function (e) {
            c(a, s).subject.error(e);
          },
          complete: function () {
            c(a, s).subject.complete();
          }
        }), null == d && o(!1, "[fetchQueryInternal] fetchQueryDeduped: Expected `start` to be called synchronously"), u(a, d).subscribe(n);
      });
    }

    function u(e, t) {
      return n.create(function (r) {
        var n = t.subject.subscribe(r);
        return function () {
          n.unsubscribe();
          var r = e.get(t.identifier);

          if (r) {
            var i = r.subscription;
            null != i && 0 === r.subject.getObserverCount() && (i.unsubscribe(), e.delete(t.identifier));
          }
        };
      });
    }

    function l(e) {
      var t = a.get(e);
      if (null != t) return t;
      var r = new Map();
      return a.set(e, r), r;
    }

    function c(e, t) {
      var r = e.get(t);
      return null == r && o(!1, "[fetchQueryInternal] getCachedRequest: Expected request to be cached"), r;
    }

    e.exports = {
      fetchQuery: function (e, t, r) {
        return s(e, t.request, function () {
          return e.execute({
            operation: t,
            cacheConfig: null == r ? void 0 : r.networkCacheConfig
          });
        });
      },
      fetchQueryDeduped: s,
      getPromiseForRequestInFlight: function (e, t) {
        var r = l(e),
            n = r.get(t.identifier);
        return n ? new Promise(function (e, t) {
          var i = !1;
          u(r, n).subscribe({
            complete: e,
            error: t,
            next: function (t) {
              i && e(t);
            }
          }), i = !0;
        }) : null;
      },
      getObservableForRequestInFlight: function (e, t) {
        var r = l(e),
            n = r.get(t.identifier);
        return n ? u(r, n) : null;
      },
      hasRequestInFlight: function (e, t) {
        return l(e).has(t.identifier);
      }
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(2)(r(17)),
        i = r(11),
        o = r(0),
        a = function () {
      function e() {
        var e = this;
        (0, n.default)(this, "_complete", !1), (0, n.default)(this, "_events", []), (0, n.default)(this, "_sinks", new Set()), this._observable = i.create(function (t) {
          e._sinks.add(t);

          for (var r = e._events, n = 0; n < r.length && !t.closed; n++) {
            var i = r[n];

            switch (i.kind) {
              case "complete":
                t.complete();
                break;

              case "error":
                t.error(i.error);
                break;

              case "next":
                t.next(i.data);
                break;

              default:
                i.kind, o(!1, "RelayReplaySubject: Unknown event kind `%s`.", i.kind);
            }
          }

          return function () {
            e._sinks.delete(t);
          };
        });
      }

      var t = e.prototype;
      return t.complete = function () {
        !0 !== this._complete && (this._complete = !0, this._events.push({
          kind: "complete"
        }), this._sinks.forEach(function (e) {
          return e.complete();
        }));
      }, t.error = function (e) {
        !0 !== this._complete && (this._complete = !0, this._events.push({
          kind: "error",
          error: e
        }), this._sinks.forEach(function (t) {
          return t.error(e);
        }));
      }, t.next = function (e) {
        !0 !== this._complete && (this._events.push({
          kind: "next",
          data: e
        }), this._sinks.forEach(function (t) {
          return t.next(e);
        }));
      }, t.subscribe = function (e) {
        return this._observable.subscribe(e);
      }, t.getObserverCount = function () {
        return this._sinks.size;
      }, e;
    }();

    e.exports = a;
  }, function (e, t, r) {
    "use strict";

    var n = r(48),
        i = r(44),
        o = r(9);

    e.exports = function (e, t) {
      return JSON.stringify(o(i(e, function (e, r) {
        var i = t[r];
        return n(e, i);
      })));
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(18),
        i = r(4),
        o = r(16).getRequest,
        a = r(12).createOperationDescriptor;

    e.exports = function (e, t) {
      var r = o(t.subscription);
      if ("subscription" !== r.params.operationKind) throw new Error("requestSubscription: Must use Subscription operation");
      var s = t.configs,
          u = t.onCompleted,
          l = t.onError,
          c = t.onNext,
          d = t.variables,
          f = a(r, d);
      i(!(t.updater && s), "requestSubscription: Expected only one of `updater` and `configs` to be provided");
      var p = (s ? n.convert(s, r, null, t.updater) : t).updater;
      return e.execute({
        operation: f,
        updater: p,
        cacheConfig: {
          force: !0
        }
      }).map(function () {
        return e.lookup(f.fragment).data;
      }).subscribeLegacy({
        onNext: c,
        onError: l,
        onCompleted: u
      });
    };
  }]);
});