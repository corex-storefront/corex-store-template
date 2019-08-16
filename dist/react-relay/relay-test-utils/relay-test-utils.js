/**
 * Relay v5.0.0
 */
module.exports = function (e) {
  var n = {};

  function t(r) {
    if (n[r]) return n[r].exports;
    var o = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
  }

  return t.m = e, t.c = n, t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: r
    });
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, t.t = function (e, n) {
    if (1 & n && (e = t(e)), 8 & n) return e;
    if (4 & n && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (t.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) t.d(r, o, function (n) {
      return e[n];
    }.bind(null, o));
    return r;
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return t.d(n, "a", n), n;
  }, t.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, t.p = "", t(t.s = 4);
}([function (e, n) {
  e.exports = require("fbjs/lib/invariant");
}, function (e, n) {
  e.exports = require("@babel/runtime/helpers/interopRequireDefault");
}, function (e, n) {
  e.exports = require("@babel/runtime/helpers/objectSpread");
}, function (e, n) {
  e.exports = require("relay-runtime");
}, function (e, n, t) {
  "use strict";

  var r = t(5),
      o = t(8),
      a = t(10);
  e.exports = {
    MockEnvironment: o,
    MockPayloadGenerator: r,
    createMockEnvironment: o.createMockEnvironment,
    unwrapContainer: a
  };
}, function (e, n, t) {
  "use strict";

  var r = t(1),
      o = r(t(6)),
      a = r(t(2)),
      l = r(t(7)),
      i = t(0),
      u = t(3),
      c = u.TYPENAME_KEY,
      s = u.RelayConcreteNode,
      f = u.getModuleComponentKey,
      p = u.getModuleOperationKey,
      d = s.CONDITION,
      v = s.CONNECTION_FIELD,
      m = s.CLIENT_EXTENSION,
      y = s.INLINE_FRAGMENT,
      b = s.LINKED_FIELD,
      k = s.MODULE_IMPORT,
      h = s.SCALAR_FIELD,
      g = s.LINKED_HANDLE,
      _ = s.SCALAR_HANDLE,
      E = s.DEFER,
      M = s.STREAM;
  var C = {
    ID: function (e, n) {
      return "<".concat(null != e.parentType && e.parentType !== A ? e.parentType + "-" : "", "mock-id-").concat(n(), ">");
    },
    Boolean: function () {
      return !1;
    },
    Int: function () {
      return 42;
    },
    Float: function () {
      return 4.2;
    }
  },
      A = "__MockObject";

  function S(e) {
    var n,
        t = (n = 0, function () {
      return ++n;
    });
    return function () {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];

      return function (e, n, t, r) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            a = arguments.length > 5 ? arguments[5] : void 0,
            l = function (o) {
          var a,
              l,
              i,
              u,
              c = null != t && null != n ? n[t] : null;
          return null != c && (a = c(r, e)), void 0 === a && (a = null !== (l = o) && void 0 !== l ? l : "ID" === t ? C.ID(r, e) : '<mock-value-for-field-"'.concat(null !== (i = null !== (u = r.alias) && void 0 !== u ? u : r.name) && void 0 !== i ? i : "undefined", '">')), a;
        };

        return !0 === o ? O(Array.isArray(a) ? a : Array(1).fill(), l) : l(a);
      }.apply(void 0, [t, e].concat(r));
    };
  }

  function O(e, n) {
    return e.map(function (e) {
      return n(e);
    });
  }

  var j = function () {
    function e(e) {
      var n, t;
      this._variables = e.variables, this._mockResolvers = (0, a.default)({}, C, null !== (n = e.mockResolvers) && void 0 !== n ? n : {}), this._selectionMetadata = null !== (t = e.selectionMetadata) && void 0 !== t ? t : {}, this._resolveValue = S(this._mockResolvers);
    }

    var n = e.prototype;
    return n.generate = function (e, n) {
      var t = this._getDefaultValuesForObject(n, null, null, [], {});

      return this._traverse({
        selections: e,
        typeName: n,
        isAbstractType: !1,
        name: null,
        alias: null,
        args: null
      }, [], null, t);
    }, n._traverse = function (e, n, t, r) {
      var o = e.selections,
          a = e.typeName,
          l = e.isAbstractType;
      return this._traverseSelections(o, a, l, n, t, r);
    }, n._traverseSelections = function (e, n, t, r, l, u) {
      var s,
          C = this,
          S = null !== (s = l) && void 0 !== s ? s : {};
      return e.forEach(function (e) {
        switch (e.kind) {
          case h:
            S = C._mockScalar(e, n, r, S, u);
            break;

          case v:
          case b:
            S = C._mockLink(e, r, S, u);
            break;

          case d:
            C._getVariableValue(e.condition) === e.passingValue && (S = C._traverseSelections(e.selections, n, t, r, S, u));
            break;

          case m:
          case E:
          case M:
            S = C._traverseSelections(e.selections, n, t, r, S, u);
            break;

          case y:
            var l;
            if (null != S && (null == S[c] || S[c] === A)) S[c] = null !== (l = null == u ? void 0 : u[c]) && void 0 !== l ? l : e.type;

            if (!0 === t && null != S && S[c] === n && (S[c] = e.type), null != S && S[c] === e.type) {
              var s = C._getDefaultValuesForObject(e.type, r[r.length - 1], null, r),
                  O = n !== e.type ? C._getDefaultValuesForObject(n, r[r.length - 1], null, r) : s,
                  j = s;

              if (void 0 === j && (j = O), void 0 === j && (j = u), null === j) {
                S = null;
                break;
              }

              null != (S = C._traverseSelections(e.selections, e.type, t, r, S, j))[c] && (S[c] = e.type), null != S.id && null != s && null != s.id && (S.id = s.id);
            }

            break;

          case k:
            if (null != u) {
              var x;
              if (u.__typename !== n) break;
              var R = u.__module_operation;
              "object" == typeof R && null !== R && "SplitOperation" === R.kind && Array.isArray(R.selections) && "string" == typeof R.name || i(!1, 'RelayMockPayloadGenerator(): Unexpected default value for a field `__module_operation` in the mock resolver for @module dependency. Provided value is "%s" and we\'re expecting an object of a type `NormalizationSplitOperation`. Please adjust mock resolver for the type "%s". Typically it should require a file "%s$normalization.graphql".', JSON.stringify(R), n, e.fragmentName);
              var N = R,
                  q = e.documentName;
              null == S && (S = {}), S = (0, a.default)({}, S, (x = {}, (0, o.default)(x, c, n), (0, o.default)(x, p(q), R.name), (0, o.default)(x, f(q), u.__module_component), x), C._traverseSelections(N.selections, n, !1, r, null, null));
            }

            break;

          case _:
          case g:
            break;

          default:
            i(!1, "RelayMockPayloadGenerator(): Unexpected AST kind `%s`.", e.kind);
        }
      }), S;
    }, n._getCorrectDefaultEnum = function (e, n, t, r) {
      if (void 0 === n) return n;
      var o = Array.isArray(n) ? n.map(function (e) {
        return String(e).toUpperCase();
      }) : [String(n).toUpperCase()],
          a = e.map(function (e) {
        return e.toUpperCase();
      });
      o.filter(function (e) {
        return a.includes(e);
      }).length !== o.length && i(!1, 'RelayMockPayloadGenerator: Invalid value "%s" provided for enum field "%s" via MockResolver.Expected one of the following values: %s.', n, "".concat(t.join("."), ".").concat(r), e.map(function (e) {
        return '"'.concat(e, '"');
      }).join(", "));
      var l = o.map(function (n) {
        var t = a.indexOf(String(n).toUpperCase());
        return e[t];
      });
      return Array.isArray(n) ? l : l[0];
    }, n._mockScalar = function (e, n, t, r, o) {
      var a,
          i,
          u,
          s,
          f = null !== (a = r) && void 0 !== a ? a : {},
          p = null !== (i = e.alias) && void 0 !== i ? i : e.name;
      if (f.hasOwnProperty(p) && e.name !== c) return f;
      e.name === c && (u = null !== (s = n) && void 0 !== s ? s : A);

      var d = [].concat((0, l.default)(t), [p]),
          v = this._getScalarFieldTypeDetails(e, n, d),
          m = v.type,
          y = v.plural,
          b = v.enumValues;

      if (null != o && o.hasOwnProperty(p) && (u = o[p], null != b && (u = this._getCorrectDefaultEnum(b, u, t, p)), void 0 !== u && y && !Array.isArray(u) && (u = [u])), void 0 === u) {
        var k = null != b ? b[0] : void 0;
        u = this._resolveValue(m, {
          parentType: n,
          name: e.name,
          alias: e.alias,
          path: d,
          args: this._getFieldArgs(e)
        }, y, k);
      }

      return f[p] = u, f;
    }, n._mockLink = function (e, n, t, r) {
      var o,
          a,
          i,
          u,
          s,
          f = this,
          p = null !== (o = e.alias) && void 0 !== o ? o : e.name,
          d = null !== (a = t) && void 0 !== a ? a : {},
          v = this._getFieldArgs(e),
          m = [].concat((0, l.default)(n), [p]),
          y = null !== (i = this._selectionMetadata[m.join(".")]) && void 0 !== i ? i : {
        type: A
      };

      if (null != r && "object" == typeof r[p] && (s = r[p]), null === s) return d[p] = null, d;

      var b = null !== (u = e.concreteType) && void 0 !== u ? u : null != s && "string" == typeof s[c] ? s[c] : y.type,
          k = null === e.concreteType && b === y.type,
          h = function (t) {
        var r,
            o,
            a = null !== (r = f._getDefaultValuesForObject(null !== (o = e.concreteType) && void 0 !== o ? o : y.type, e.name, e.alias, m, v)) && void 0 !== r ? r : t;
        return null === a ? null : f._traverse({
          selections: e.selections,
          typeName: b,
          isAbstractType: k,
          name: e.name,
          alias: e.alias,
          args: v
        }, [].concat((0, l.default)(n), [p]), "object" == typeof d[p] ? d[p] : null, a);
      };

      return d[p] = "LinkedField" === e.kind && e.plural ? O(Array.isArray(s) ? s : Array(1).fill(), h) : h(s), d;
    }, n._getVariableValue = function (e) {
      return this._variables.hasOwnProperty(e) || i(!1, "RelayMockPayloadGenerator(): Undefined variable `%s`.", e), this._variables[e];
    }, n._getDefaultValuesForObject = function (e, n, t, r, o) {
      var a;
      if (null != e && null != this._mockResolvers[e] && (a = this._resolveValue(e, {
        parentType: null,
        name: n,
        alias: t,
        args: o,
        path: r
      }, !1)), "object" == typeof a) return a;
    }, n._getFieldArgs = function (e) {
      var n = this,
          t = {};
      return null != e.args && e.args.forEach(function (e) {
        t[e.name] = "Literal" === e.kind ? e.value : n._getVariableValue(e.variableName);
      }), t;
    }, n._getScalarFieldTypeDetails = function (e, n, t) {
      var r;
      return null !== (r = this._selectionMetadata[t.join(".")]) && void 0 !== r ? r : {
        type: "id" === e.name ? "ID" : "String",
        plural: !1,
        enumValues: null,
        nullable: !1
      };
    }, e;
  }();

  e.exports = {
    generate: function (e, n) {
      var t;
      return {
        data: function (e, n, t, r) {
          var o,
              a = new j({
            variables: n,
            mockResolvers: t,
            selectionMetadata: r
          });
          return o = e.name.endsWith("Mutation") ? "Mutation" : e.name.endsWith("Subscription") ? "Subscription" : "Query", a.generate(e.selections, o);
        }(e.request.node.operation, e.request.variables, null !== (t = n) && void 0 !== t ? t : null, function (e) {
          var n,
              t = null === (n = e.request.node.params.metadata) || void 0 === n ? void 0 : n.relayTestingSelectionTypeInfo;

          if (null != t && !Array.isArray(t) && "object" == typeof t) {
            var r = {};
            return Object.keys(t).forEach(function (e) {
              var n = t[e];
              null == n || Array.isArray(n) || "object" != typeof n || "string" != typeof n.type || "boolean" != typeof n.plural || "boolean" != typeof n.nullable || null !== n.enumValues && !Array.isArray(n.enumValues) || (r[e] = {
                type: n.type,
                plural: n.plural,
                nullable: n.nullable,
                enumValues: Array.isArray(n.enumValues) ? n.enumValues.map(String) : null
              });
            }), r;
          }

          return null;
        }(e))
      };
    }
  };
}, function (e, n) {
  e.exports = require("@babel/runtime/helpers/defineProperty");
}, function (e, n) {
  e.exports = require("@babel/runtime/helpers/toConsumableArray");
}, function (e, n, t) {
  "use strict";

  var r = t(1)(t(2)),
      o = t(9),
      a = t(0),
      l = t(3),
      i = l.RecordSource,
      u = l.Store,
      c = l.QueryResponseCache,
      s = l.Observable,
      f = l.Environment,
      p = l.Network,
      d = 10,
      v = 3e5;

  function m(e, n) {
    e[n] = jest.fn(e[n].bind(e));
  }

  function y(e, n) {
    var t = e[n].bind(e);
    e[n] = jest.fn(function () {
      for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];

      var l = t.apply(void 0, o),
          i = jest.fn(function () {
        return l.dispose();
      });
      return e[n].mock.dispose = i, {
        dispose: i
      };
    });
    var r = e[n].mockClear.bind(e[n]);

    e[n].mockClear = function () {
      r(), e[n].mock.dispose = null;
    };
  }

  function b(e, n) {
    var t = e[n].bind(e);
    e[n] = jest.fn(function () {
      for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a];

      return t.apply(void 0, o).do({
        start: function (t) {
          e[n].mock.subscriptions.push(t);
        }
      });
    }), e[n].mock.subscriptions = [];
    var r = e[n].mockClear.bind(e[n]);

    e[n].mockClear = function () {
      r(), e[n].mock.subscriptions = [];
    };
  }

  e.exports = {
    createMockEnvironment: function (e) {
      var n,
          t,
          l,
          k = new i(),
          h = new u(k),
          g = new c({
        size: d,
        ttl: v
      }),
          _ = [],
          E = [],
          M = [],
          C = function (e, n, t) {
        var r,
            a = e.id,
            l = e.text,
            i = null !== (r = a) && void 0 !== r ? r : l,
            u = null;
        if (null != (null == t ? void 0 : t.force) && !1 !== (null == t ? void 0 : t.force) || null == i || (u = g.get(i, n)), null !== u) return s.from(u);
        var c = E.find(function (t) {
          return t.request.node.params === e && t.request.variables === n;
        });

        if (null != c && M.length > 0) {
          var f = M[0],
              p = f(c);
          if (null != p) return M = M.filter(function (e) {
            return e !== f;
          }), E = E.filter(function (e) {
            return e !== c;
          }), p instanceof Error ? s.create(function (e) {
            e.error(p);
          }) : s.from(p);
        }

        return s.create(function (r) {
          var a = {
            request: e,
            variables: n,
            cacheConfig: t,
            sink: r
          };
          return _ = _.concat([a]), function () {
            _ = _.filter(function (e) {
              return !o(e, a);
            }), E = E.filter(function (e) {
              return e !== c;
            });
          };
        });
      };

      function A(e) {
        if ("Request" === e.kind) return e;
        var n = e;
        return E.includes(n) || a(!1, 'RelayModernMockEnvironment: Operation "%s" was not found in the list of pending operations', n.request.node.operation.name), n.request.node;
      }

      function S(e) {
        var n, t;
        n = "Request" === e.kind ? e : (t = e).request.node;

        var r = _.filter(function (e) {
          return !!o(e.request, n.params) && (!t || o(t.request.variables, e.variables));
        });

        return r.length || a(!1, "MockEnvironment: Cannot respond to request, it has not been requested yet."), r.forEach(function (e) {
          e.sink || a(!1, "MockEnvironment: Cannot respond to `%s`, it has not been requested yet.", n.params.name);
        }), r;
      }

      function O(e) {
        return "object" == typeof e && null !== e && e.hasOwnProperty("data") || a(!1, "MockEnvironment(): Expected payload to be an object with a `data` key."), e;
      }

      var j = function (e, n) {
        var t = "string" == typeof n ? new Error(n) : n;
        S(e).forEach(function (e) {
          var n = e.sink;
          null === n && a(!1, "Sink should be defined."), n.error(t);
        });
      },
          x = function (e, n) {
        S(e).forEach(function (e) {
          var t = e.sink;
          null === t && a(!1, "Sink should be defined."), t.next(O(n)), t.complete();
        });
      },
          R = function () {
        var e = E[E.length - 1];
        return null == e && a(!1, "RelayModernMockEnvironment: There are no pending operations in the list"), e;
      },
          N = new f((0, r.default)({
        configName: "RelayModernMockEnvironment",
        network: p.create(C, C),
        store: h
      }, e)),
          q = function (e, n) {
        return function () {
          for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];

          var a = r[0].operation;
          return E = E.concat([a]), n.apply(e, r);
        };
      };

      N.execute = q(N, N.execute), N.executeMutation = q(N, N.executeMutation), "test" === (null === (n = global) || void 0 === n ? void 0 : null === (t = n.process) || void 0 === t ? void 0 : null === (l = t.env) || void 0 === l ? void 0 : l.NODE_ENV) && (y(N, "applyUpdate"), m(N, "commitPayload"), m(N, "getStore"), m(N, "lookup"), m(N, "check"), y(N, "subscribe"), y(N, "retain"), b(N, "execute"), b(N, "executeMutation"), m(h, "getSource"), m(h, "lookup"), m(h, "notify"), m(h, "publish"), y(h, "retain"), y(h, "subscribe"));
      var T = {
        cachePayload: function (e, n, t) {
          var r,
              o = A(e).params,
              l = o.id,
              i = o.text,
              u = null !== (r = l) && void 0 !== r ? r : i;
          null == u && a(!1, "CacheID should not be null"), g.set(u, n, t);
        },
        clearCache: function () {
          g.clear();
        },
        isLoading: function (e, n) {
          var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return _.some(function (r) {
            return o(r.request, A(e).params) && o(r.variables, n) && o(r.cacheConfig, t);
          });
        },
        reject: j,
        resolve: x,
        nextValue: function (e, n) {
          S(e).forEach(function (e) {
            var t = e.sink;
            null === t && a(!1, "Sink should be defined."), t.next(O(n));
          });
        },
        complete: function (e) {
          S(e).forEach(function (e) {
            var n = e.sink;
            null === n && a(!1, "Sink should be defined."), n.complete();
          });
        },
        getMostRecentOperation: R,
        resolveMostRecentOperation: function (e) {
          var n = R(),
              t = "function" == typeof e ? e(n) : e;
          return x(n, t);
        },
        rejectMostRecentOperation: function (e) {
          var n = R(),
              t = "function" == typeof e ? e(n) : e;
          return j(n, t);
        },
        findOperation: function (e) {
          var n = E.find(e);
          return null == n && a(!1, "RelayModernMockEnvironment: Operation was not found in the list of pending operations"), n;
        },
        getAllOperations: function () {
          return E;
        },
        queueOperationResolver: function (e) {
          M = M.concat([e]);
        }
      };
      return N.mock = T, N.mockClear = function () {
        N.applyUpdate.mockClear(), N.commitPayload.mockClear(), N.getStore.mockClear(), N.lookup.mockClear(), N.check.mockClear(), N.subscribe.mockClear(), N.retain.mockClear(), N.execute.mockClear(), N.executeMutation.mockClear(), h.getSource.mockClear(), h.lookup.mockClear(), h.notify.mockClear(), h.publish.mockClear(), h.retain.mockClear(), h.subscribe.mockClear(), g.clear(), E = [], _ = [];
      }, N;
    }
  };
}, function (e, n) {
  e.exports = require("fbjs/lib/areEqual");
}, function (e, n, t) {
  "use strict";

  var r = t(0);

  e.exports = function (e) {
    var n = e.__ComponentClass;
    return null == n && r(!1, "Could not find component for %s, is it a Relay container?", e.displayName || e.name), n;
  };
}]);