/**
 * Relay v5.0.0
 */
module.exports = function (e) {
  var n = {};

  function t(r) {
    if (n[r]) return n[r].exports;
    var a = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(a.exports, a, a.exports, t), a.l = !0, a.exports;
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
    }), 2 & n && "string" != typeof e) for (var a in e) t.d(r, a, function (n) {
      return e[n];
    }.bind(null, a));
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
  }, t.p = "", t(t.s = 64);
}([function (e, n) {
  e.exports = require("@babel/runtime/helpers/interopRequireDefault");
}, function (e, n) {
  e.exports = require("graphql");
}, function (e, n) {
  e.exports = require("@babel/runtime/helpers/objectSpread");
}, function (e, n, t) {
  "use strict";

  var r = t(1).GraphQLError;

  function a(e, n, t) {
    var a,
        o = e;

    if (null != n) {
      var l = i(n);
      o = 0 === l.length ? e : [e].concat(l).join("\n\n") + "\n";
    }

    var s = new r("Internal Error: ".concat(o), null !== (a = t) && void 0 !== a ? a : []);
    return new Error(s.message);
  }

  function i(e) {
    var n = [],
        t = !0,
        r = !1,
        i = void 0;

    try {
      for (var l, u = e[Symbol.iterator](); !(t = (l = u.next()).done); t = !0) {
        for (var c = l.value, f = c; "Derived" === f.kind;) f = f.source;

        switch (f.kind) {
          case "Source":
            var d = f === c ? "Source: " : "Source (derived): ";
            n.push(d + o(f.source, s(f.source, f.start)));
            break;

          case "Generated":
            n.push("Source: (generated)");
            break;

          case "Unknown":
            n.push("Source: (unknown)");
            break;

          default:
            throw a("RelayCompilerError: cannot print location '".concat(String(f), "'."));
        }
      }
    } catch (e) {
      r = !0, i = e;
    } finally {
      try {
        t || null == u.return || u.return();
      } finally {
        if (r) throw i;
      }
    }

    return n;
  }

  function o(e, n) {
    var t = e.locationOffset.column - 1,
        r = l(t) + e.body,
        a = n.line - 1,
        i = e.locationOffset.line - 1,
        o = n.line + i,
        s = 1 === n.line ? t : 0,
        u = n.column + s,
        c = r.split(/\r\n|[\n\r]/g);
    return "".concat(e.name, " (").concat(o, ":").concat(u, ")\n") + function (e) {
      var n = e.filter(function (e) {
        e[0];
        var n = e[1];
        return void 0 !== n;
      }),
          t = 0,
          r = !0,
          a = !1,
          i = void 0;

      try {
        for (var o, s = n[Symbol.iterator](); !(r = (o = s.next()).done); r = !0) {
          var u = o.value,
              c = u[0];
          t = Math.max(t, c.length);
        }
      } catch (e) {
        a = !0, i = e;
      } finally {
        try {
          r || null == s.return || s.return();
        } finally {
          if (a) throw i;
        }
      }

      return n.map(function (e) {
        var n,
            r = e[0],
            a = e[1];
        return l(t - (n = r).length) + n + a;
      }).join("\n");
    }([["".concat(o - 1, ": "), c[a - 1]], ["".concat(o, ": "), c[a]], ["", l(u - 1) + "^"], ["".concat(o + 1, ": "), c[a + 1]]]);
  }

  function l(e) {
    return Array(e + 1).join(" ");
  }

  function s(e, n) {
    for (var t, r = /\r\n|[\n\r]/g, a = 1, i = n + 1; (t = r.exec(e.body)) && t.index < n;) a += 1, i = n + 1 - (t.index + t[0].length);

    return {
      line: a,
      column: i
    };
  }

  e.exports = {
    createCombinedError: function (e, n) {
      var t = null != n ? "".concat(n, ": ") : "";
      return new Error("".concat(t, "Encountered ").concat(e.length, " error(s):\n") + e.map(function (e) {
        return String(e).split("\n").map(function (e, n) {
          return 0 === n ? "- ".concat(e) : "  ".concat(e);
        }).join("\n");
      }).join("\n"));
    },
    createCompilerError: a,
    createNonRecoverableUserError: function (e, n, t) {
      var a,
          o = e;

      if (null != n) {
        var l = i(n);
        o = 0 === l.length ? e : [e].concat(l).join("\n\n") + "\n";
      }

      var s = new r(o, null !== (a = t) && void 0 !== a ? a : []);
      return new Error(s.message);
    },
    createUserError: function (e, n, t) {
      var a,
          o = e;

      if (null != n) {
        var l = i(n);
        o = 0 === l.length ? e : [e].concat(l).join("\n\n") + "\n";
      }

      return new r(o, null !== (a = t) && void 0 !== a ? a : []);
    },
    eachWithErrors: function (e, n) {
      var t = [],
          a = !0,
          i = !1,
          o = void 0;

      try {
        for (var l, s = e[Symbol.iterator](); !(a = (l = s.next()).done); a = !0) {
          var u = l.value;

          try {
            n(u);
          } catch (e) {
            if (!(e instanceof r)) throw e;
            t.push(e);
          }
        }
      } catch (e) {
        i = !0, o = e;
      } finally {
        try {
          a || null == s.return || s.return();
        } finally {
          if (i) throw o;
        }
      }

      return 0 !== t.length ? t : null;
    }
  };
}, function (e, n) {
  e.exports = require("fbjs/lib/invariant");
}, function (e, n, t) {
  "use strict";

  var r = t(0)(t(2)),
      a = t(4),
      i = t(3),
      o = i.createCombinedError,
      l = i.eachWithErrors;

  var s = function () {
    function e(e, n) {
      this._context = e, this._states = [], this._visitor = n;
    }

    var n = e.prototype;
    return n.getContext = function () {
      return this._context;
    }, n.visit = function (e, n) {
      this._states.push(n);

      var t = this._visit(e);

      return this._states.pop(), t;
    }, n.traverse = function (e, n) {
      this._states.push(n);

      var t = this._traverse(e);

      return this._states.pop(), t;
    }, n._visit = function (e) {
      var n = this._visitor[e.kind];

      if (n) {
        var t = this._getState();

        return n.call(this, e, t);
      }

      return this._traverse(e);
    }, n._traverse = function (e) {
      var n;

      switch (e.kind) {
        case "Argument":
          n = this._traverseChildren(e, null, ["value"]);
          break;

        case "Literal":
        case "LocalArgumentDefinition":
        case "RootArgumentDefinition":
        case "Variable":
          n = e;
          break;

        case "Defer":
          n = this._traverseChildren(e, ["selections"], ["if"]);
          break;

        case "Stream":
          n = this._traverseChildren(e, ["selections"], ["if", "initialCount"]);
          break;

        case "ClientExtension":
          n = this._traverseChildren(e, ["selections"]);
          break;

        case "Directive":
          n = this._traverseChildren(e, ["args"]);
          break;

        case "ModuleImport":
          (n = this._traverseChildren(e, ["selections"])).selections.length || (n = null);
          break;

        case "FragmentSpread":
        case "ScalarField":
          n = this._traverseChildren(e, ["args", "directives"]);
          break;

        case "InlineDataFragmentSpread":
          n = this._traverseChildren(e, ["selections"]);
          break;

        case "LinkedField":
        case "ConnectionField":
          (n = this._traverseChildren(e, ["args", "directives", "selections"])).selections.length || (n = null);
          break;

        case "ListValue":
          n = this._traverseChildren(e, ["items"]);
          break;

        case "ObjectFieldValue":
          n = this._traverseChildren(e, null, ["value"]);
          break;

        case "ObjectValue":
          n = this._traverseChildren(e, ["fields"]);
          break;

        case "Condition":
          (n = this._traverseChildren(e, ["directives", "selections"], ["condition"])).selections.length || (n = null);
          break;

        case "InlineFragment":
          (n = this._traverseChildren(e, ["directives", "selections"])).selections.length || (n = null);
          break;

        case "Fragment":
        case "Root":
          n = this._traverseChildren(e, ["argumentDefinitions", "directives", "selections"]);
          break;

        case "Request":
          n = this._traverseChildren(e, null, ["fragment", "root"]);
          break;

        case "SplitOperation":
          n = this._traverseChildren(e, ["selections"]);
          break;

        default:
          a(!1, "GraphQLIRTransformer: Unknown kind `%s`.", e.kind);
      }

      return n;
    }, n._traverseChildren = function (e, n, t) {
      var i,
          o = this;
      return n && n.forEach(function (n) {
        var t = e[n];

        if (t) {
          Array.isArray(t) || a(!1, "GraphQLIRTransformer: Expected data for `%s` to be an array, got `%s`.", n, t);

          var l = o._map(t);

          (i || l !== t) && ((i = i || (0, r.default)({}, e))[n] = l);
        }
      }), t && t.forEach(function (n) {
        var t = e[n];

        if (t) {
          var a = o._visit(t);

          (i || a !== t) && ((i = i || (0, r.default)({}, e))[n] = a);
        }
      }), i || e;
    }, n._map = function (e) {
      var n,
          t = this;
      return e.forEach(function (r, a) {
        var i = t._visit(r);

        (n || i !== r) && (n = n || e.slice(0, a), i && n.push(i));
      }), n || e;
    }, n._getState = function () {
      return this._states.length || a(!1, "GraphQLIRTransformer: Expected a current state to be set but found none. This is usually the result of mismatched number of pushState()/popState() calls."), this._states[this._states.length - 1];
    }, e;
  }();

  e.exports = {
    transform: function (e, n, t) {
      var r = new s(e, n);
      return e.withMutations(function (n) {
        var a = n,
            i = l(e.documents(), function (e) {
          var n;
          if (void 0 === t) n = r.visit(e, void 0);else {
            var i = t(e);
            null != i && (n = r.visit(e, i));
          }
          n ? n !== e && (a = a.replace(n)) : a = a.remove(e.name);
        });
        if (null != i && 0 !== i.length) throw o(i);
        return a;
      });
    }
  };
}, function (e, n) {
  e.exports = require("@babel/runtime/helpers/toConsumableArray");
}, function (e, n, t) {
  "use strict";

  var r = t(4),
      a = t(31),
      i = t(1),
      o = i.GraphQLInterfaceType,
      l = i.GraphQLList,
      s = i.GraphQLObjectType,
      u = (i.GraphQLSchema, i.GraphQLUnionType),
      c = i.SchemaMetaFieldDef,
      f = i.TypeMetaFieldDef,
      d = i.TypeNameMetaFieldDef,
      m = i.assertAbstractType,
      p = i.getNamedType,
      h = i.getNullableType,
      v = "id",
      g = "ID";

  function y(e) {
    return e instanceof s || e instanceof o;
  }

  function b(e) {
    var n = k(e);
    return n instanceof o || n instanceof u;
  }

  function k(e) {
    return a(p(e));
  }

  function w(e, n) {
    return function (e) {
      if (e instanceof s) return e.getInterfaces();
      return [];
    }(e).some(function (e) {
      return e.toString() === n;
    });
  }

  function S(e, n, t) {
    var r = n.serverSchema,
        a = k(e.type),
        i = r.getType(a.name),
        o = r.getType(k(t).name);
    return null != i && null != o && null != (y(t) && _(t).getFields()[e.name]) || e.name === c.name || e.name === f.name || e.name === d.name || e.directives.some(function (e) {
      return "fixme_fat_interface" === e.name;
    });
  }

  function _(e) {
    return e instanceof s || e instanceof o || r(!1, "GraphQLSchemaUtils: Expected type `%s` to be an object or interface type.", e), e;
  }

  e.exports = {
    assertTypeWithFields: _,
    canHaveSelections: y,
    generateIDField: function (e) {
      return {
        kind: "ScalarField",
        alias: v,
        args: [],
        directives: [],
        handles: null,
        loc: {
          kind: "Generated"
        },
        metadata: null,
        name: v,
        type: e
      };
    },
    getNullableType: h,
    getRawType: k,
    getSingularType: function (e) {
      for (var n = e; n instanceof l;) n = n.ofType;

      return n;
    },
    hasID: function (e, n) {
      var t = k(n);
      t instanceof s || t instanceof o || r(!1, "GraphQLSchemaUtils.hasID(): Expected a concrete type or interface, got type `%s`.", n);
      var a = e.getType(g),
          i = t.getFields()[v];
      return i && k(i.type) === a;
    },
    implementsInterface: w,
    isAbstractType: b,
    isClientDefinedField: function (e, n, t) {
      return !S(e, n, t);
    },
    isExecutableDefinitionAST: function (e) {
      return "FragmentDefinition" === e.kind || "OperationDefinition" === e.kind;
    },
    isSchemaDefinitionAST: function (e) {
      return "SchemaDefinition" === e.kind || "ScalarTypeDefinition" === e.kind || "ObjectTypeDefinition" === e.kind || "InterfaceTypeDefinition" === e.kind || "UnionTypeDefinition" === e.kind || "EnumTypeDefinition" === e.kind || "InputObjectTypeDefinition" === e.kind || "DirectiveDefinition" === e.kind || "ScalarTypeExtension" === e.kind || "ObjectTypeExtension" === e.kind || "InterfaceTypeExtension" === e.kind || "UnionTypeExtension" === e.kind || "EnumTypeExtension" === e.kind || "InputObjectTypeExtension" === e.kind;
    },
    isServerDefinedField: S,
    isUnionType: function (e) {
      return e instanceof u;
    },
    mayImplement: function (e, n, t) {
      var r = k(n);
      return r.toString() === t || w(r, t) || b(r) && function (e, n, t) {
        return b(n) && function (e, n) {
          return e.getPossibleTypes(m(n));
        }(e, n).some(function (e) {
          return w(e, t);
        });
      }(e, r, t);
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(10),
      a = t(4),
      i = !1,
      o = [{
    ph: "M",
    pid: 0,
    tid: 0,
    name: "process_name",
    args: {
      name: "relay-compiler"
    }
  }, {
    ph: "M",
    pid: 0,
    tid: 0,
    name: "thread_name",
    args: {
      name: "relay-compiler"
    }
  }],
      l = [];

  function s(e, n) {
    if (!i) return e;

    var t = n || e.displayName || e.name,
        r = function () {
      var n = m(t);

      try {
        return e.apply(this, arguments);
      } finally {
        v(n);
      }
    };

    return r.displayName = t, r;
  }

  function u(e, n) {
    if (!i) return e;

    var t = n || e.displayName || e.name,
        a = function () {
      var n = r(function* () {
        var n = m(t);

        try {
          return yield e.apply(this, arguments);
        } finally {
          v(n);
        }
      });
      return function () {
        return n.apply(this, arguments);
      };
    }();

    return a.displayName = t, a;
  }

  function c(e, n) {
    if (!i) return e;

    var t = n || e.displayName || e.name,
        a = function () {
      var n = r(function* () {
        var n = h(t);

        try {
          return yield e.apply(this, arguments);
        } finally {
          v(n);
        }
      });
      return function () {
        return n.apply(this, arguments);
      };
    }();

    return a.displayName = t, a;
  }

  var f = process.hrtime();

  function d() {
    var e = process.hrtime(f);
    return 0 | 1e6 * e[0] + Math.round(e[1] / 1e3);
  }

  function m(e) {
    var n = {
      ph: "B",
      name: e,
      pid: 0,
      tid: 0,
      ts: d()
    };
    return o.push(n), l.push(n), o.length - 1;
  }

  var p = 0;

  function h(e) {
    return o.push({
      ph: "b",
      name: e,
      cat: "wait",
      id: p++,
      pid: 0,
      tid: 0,
      ts: d()
    }), o.length - 1;
  }

  function v(e) {
    var n = o[e];
    "b" !== n.ph ? ("B" !== n.ph && a(!1, "Begin trace phase"), l.pop() !== n && a(!1, "GraphQLCompilerProfiler: The profile trace %s ended before nested traces. If it is async, try using Profile.waitFor or Profile.profileWait.", n.name), n !== o[o.length - 1] ? o.push({
      ph: "E",
      name: n.name,
      pid: n.pid,
      tid: n.tid,
      ts: d()
    }) : o[e] = {
      ph: "X",
      name: n.name,
      pid: n.pid,
      tid: n.tid,
      ts: n.ts,
      dur: d() - n.ts
    }) : o.push({
      ph: "e",
      cat: n.cat,
      name: n.name,
      id: n.id,
      pid: n.pid,
      tid: n.tid,
      ts: d()
    });
  }

  e.exports = {
    enable: function () {
      i = !0;
    },
    getTraces: function () {
      return o;
    },
    run: function (e, n) {
      return s(n, e)();
    },
    asyncContext: function (e, n) {
      return u(n, e)();
    },
    waitFor: function (e, n) {
      return c(n, e)();
    },
    instrument: s,
    instrumentAsyncContext: u,
    instrumentWait: c,
    start: m,
    startWait: h,
    end: v
  };
}, function (e, n) {
  e.exports = require("path");
}, function (e, n) {
  e.exports = require("@babel/runtime/helpers/asyncToGenerator");
}, function (e, n) {
  e.exports = require("relay-runtime");
}, function (e, n) {
  e.exports = require("crypto");
}, function (e, n) {
  e.exports = require("fs");
}, function (e, n, t) {
  "use strict";

  e.exports = function (e) {
    var n = {};
    return e.forEach(function (e) {
      "Literal" === e.value.kind && (n[e.name] = e.value.value);
    }), n;
  };
}, function (e, n) {
  e.exports = require("immutable");
}, function (e, n, t) {
  "use strict";

  var r = t(1).visit,
      a = {
    Argument: ["value"],
    ClientExtension: ["selections"],
    Condition: ["condition", "selections"],
    Defer: ["selections", "if"],
    ConnectionField: ["args", "directives", "selections"],
    Directive: ["args"],
    Fragment: ["argumentDefinitions", "directives", "selections"],
    FragmentSpread: ["args", "directives"],
    InlineDataFragmentSpread: ["selections"],
    InlineFragment: ["directives", "selections"],
    LinkedField: ["args", "directives", "selections"],
    Literal: [],
    LocalArgumentDefinition: [],
    ModuleImport: ["selections"],
    Request: ["fragment", "root"],
    Root: ["argumentDefinitions", "directives", "selections"],
    RootArgumentDefinition: [],
    ScalarField: ["args", "directives"],
    SplitOperation: ["selections"],
    Stream: ["selections", "if", "initialCount"],
    Variable: []
  };
  e.exports = {
    visit: function (e, n) {
      return r(e, n, a);
    }
  };
}, function (e, n, t) {
  "use strict";

  e.exports = {
    moduleDependency: function (e) {
      return "@@MODULE_START@@".concat(e, "@@MODULE_END@@");
    },
    postProcess: function (e, n) {
      return e.replace(/"@@MODULE_START@@(.*?)@@MODULE_END@@"/g, function (e, t) {
        return n(t);
      });
    },
    transform: function e(n, t) {
      if (null == n) return n;
      if (Array.isArray(n)) return n.map(function (n) {
        return e(n, t);
      });

      if ("object" == typeof n) {
        var r = {};
        return Object.keys(n).forEach(function (a) {
          r[a] = e(n[a], t);
        }), r;
      }

      if ("string" == typeof n) {
        var a = /^@@MODULE_START@@(.*?)@@MODULE_END@@$/.exec(n);

        if (null != a) {
          var i = a[1];
          if (t.hasOwnProperty(i)) return t[i];
          throw new Error("Could not find a value for CodeMarker value '".concat(i, "', ") + "make sure to supply one in the module mapping.");
        }

        if (n.indexOf("@@MODULE_START") >= 0) throw new Error("Found unprocessed CodeMarker value '".concat(n, "'."));
        return n;
      }

      return n;
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(10),
      a = t(34),
      i = t(65),
      o = 5;

  function l(e) {
    return new Promise(function (n) {
      return setTimeout(n, e);
    });
  }

  var s = function () {
    function e() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      this._client = new i.Client(), this._attemptLimit = Math.max(Math.min(o, e), 0);
    }

    e.isAvailable = function () {
      return new Promise(function (e) {
        var n = a.spawn("watchman", ["version"]);
        n.on("error", function () {
          e(!1);
        }), n.on("close", function (n) {
          e(0 === n);
        });
      });
    };

    var n = e.prototype;
    return n._command = function () {
      for (var e = this, n = arguments.length, t = new Array(n), r = 0; r < n; r++) t[r] = arguments[r];

      return new Promise(function (n, r) {
        e._client.command(t, function (e, t) {
          e ? r(e) : n(t);
        });
      });
    }, n.command = function () {
      var e = r(function* () {
        for (var e = 0, n = arguments.length, t = new Array(n), r = 0; r < n; r++) t[r] = arguments[r];

        for (;;) try {
          return e++, yield this._command.apply(this, t);
        } catch (n) {
          if (e > this._attemptLimit) throw n;
          yield l(500 * Math.pow(2, e)), this._client.end(), this._client = new i.Client();
        }
      });
      return function () {
        return e.apply(this, arguments);
      };
    }(), n.hasCapability = function () {
      var e = r(function* (e) {
        return (yield this.command("list-capabilities")).capabilities.includes(e);
      });
      return function (n) {
        return e.apply(this, arguments);
      };
    }(), n.watchProject = function () {
      var e = r(function* (e) {
        var n = yield this.command("watch-project", e);
        return "warning" in n && console.error("Warning:", n.warning), {
          root: n.watch,
          relativePath: n.relative_path
        };
      });
      return function (n) {
        return e.apply(this, arguments);
      };
    }(), n.on = function (e, n) {
      this._client.on(e, n);
    }, n.end = function () {
      this._client.end();
    }, e;
  }();

  e.exports = s;
}, function (e, n, t) {
  "use strict";

  var r = t(8),
      a = t(4),
      i = t(3).createUserError,
      o = t(15).OrderedMap,
      l = function () {
    function e(e, n) {
      this._isMutable = !1, this._documents = new o(), this._withTransform = new WeakMap(), this.serverSchema = e, this.clientSchema = n || e;
    }

    var n = e.prototype;
    return n.documents = function () {
      return this._documents.toArray();
    }, n.forEachDocument = function (e) {
      this._documents.forEach(e);
    }, n.replace = function (e) {
      return this._update(this._documents.update(e.name, function (n) {
        return n || a(!1, "GraphQLCompilerContext: Expected to replace existing node %s, butone was not found in the context.", e.name), e;
      }));
    }, n.add = function (e) {
      return this._update(this._documents.update(e.name, function (n) {
        return n && a(!1, "GraphQLCompilerContext: Duplicate document named `%s`. GraphQL fragments and roots must have unique names.", e.name), e;
      }));
    }, n.addAll = function (e) {
      return this.withMutations(function (n) {
        return e.reduce(function (e, n) {
          return e.add(n);
        }, n);
      });
    }, n.applyTransforms = function (e, n) {
      var t = this;
      return r.run("applyTransforms", function () {
        return e.reduce(function (e, t) {
          return e.applyTransform(t, n);
        }, t);
      });
    }, n.applyTransform = function (e, n) {
      var t = this._withTransform.get(e);

      if (!t) {
        var a = process.hrtime();
        t = r.instrument(e)(this);
        var i = process.hrtime(a),
            o = Math.round((1e9 * i[0] + i[1]) / 1e6);
        n && n.reportTime(e.name, o), this._withTransform.set(e, t);
      }

      return t;
    }, n.applyValidations = function (e, n) {
      var t = this;
      r.run("applyValidaitons", function () {
        var a = !0,
            i = !1,
            o = void 0;

        try {
          for (var l, s = e[Symbol.iterator](); !(a = (l = s.next()).done); a = !0) {
            var u = l.value,
                c = process.hrtime();
            r.instrument(u)(t);
            var f = process.hrtime(c),
                d = Math.round((1e9 * f[0] + f[1]) / 1e6);
            n && n.reportTime(u.name, d);
          }
        } catch (e) {
          i = !0, o = e;
        } finally {
          try {
            a || null == s.return || s.return();
          } finally {
            if (i) throw o;
          }
        }
      });
    }, n.get = function (e) {
      return this._documents.get(e);
    }, n.getFragment = function (e, n) {
      var t = this._documents.get(e);

      if (null == t) throw i("Cannot find fragment '".concat(e, "'."), null != n ? [n] : null);
      if ("Fragment" !== t.kind) throw i("Cannot find fragment '".concat(e, "', a document with this name exists ") + "but is not a fragment.", [t.loc, n].filter(Boolean));
      return t;
    }, n.getRoot = function (e) {
      var n = this._documents.get(e);

      if (null == n) throw i("Cannot find root '".concat(e, "'."));
      if ("Root" !== n.kind) throw i("Cannot find root '".concat(e, "', a document with this name exists but ") + "is not a root.", [n.loc]);
      return n;
    }, n.remove = function (e) {
      return this._update(this._documents.delete(e));
    }, n.withMutations = function (e) {
      var n = this._update(this._documents.asMutable());

      n._isMutable = !0;
      var t = e(n);
      return t._isMutable = !1, t._documents = t._documents.asImmutable(), this._documents === t._documents ? this : t;
    }, n._update = function (n) {
      var t = this._isMutable ? this : new e(this.serverSchema, this.clientSchema);
      return t._documents = n, t;
    }, e;
  }();

  e.exports = l;
}, function (e, n, t) {
  "use strict";

  var r = t(8),
      a = t(15).Map,
      i = function () {
    function e(e) {
      this._documents = new Map(), this._baseDir = e.baseDir, this._parse = r.instrument(e.parse, "ASTCache.parseFn");
    }

    var n = e.prototype;
    return n.documents = function () {
      return a(this._documents);
    }, n.parseFiles = function (e) {
      var n = this,
          t = a();
      return e.forEach(function (e) {
        if (e.exists) {
          var r = function () {
            try {
              return n._parse(n._baseDir, e);
            } catch (n) {
              throw new Error("Parse error: ".concat(n, ' in "').concat(e.relPath, '"'));
            }
          }();

          r ? (t = t.set(e.relPath, r), n._documents.set(e.relPath, r)) : n._documents.delete(e.relPath);
        } else n._documents.delete(e.relPath);
      }), t;
    }, e;
  }();

  e.exports = i;
}, function (e, n, t) {
  "use strict";

  var r = t(8),
      a = t(22),
      i = t(1),
      o = i.FragmentsOnCompositeTypesRule,
      l = i.KnownArgumentNamesRule,
      s = i.KnownTypeNamesRule,
      u = i.LoneAnonymousOperationRule,
      c = i.NoUnusedVariablesRule,
      f = i.PossibleFragmentSpreadsRule,
      d = i.UniqueArgumentNamesRule,
      m = i.UniqueFragmentNamesRule,
      p = i.UniqueInputFieldNamesRule,
      h = i.UniqueOperationNamesRule,
      v = i.UniqueVariableNamesRule,
      g = i.ValuesOfCorrectTypeRule,
      y = i.VariablesAreInputTypesRule,
      b = i.formatError,
      k = i.validate;
  e.exports = {
    GLOBAL_RULES: [l, c, d, m, p, h, v],
    LOCAL_RULES: [o, s, u, f, g, y, function (e) {
      return {
        Field: function (e) {
          if (e.alias && "id" === e.alias.value && "id" !== e.name.value) throw new Error("RelayValidator: Relay does not allow aliasing fields to `id`. This name is reserved for the globally unique `id` field on `Node`.");
        }
      };
    }],
    validate: r.instrument(function (e, n, t) {
      var r = k(n, e, t);

      if (r && r.length > 0) {
        var i = r.map(b),
            o = r.map(function (e) {
          return e.toString();
        }),
            l = new Error(a.format("You supplied a GraphQL document with validation errors:\n%s", o.join("\n")));
        throw l.validationErrors = i, l;
      }
    }, "RelayValidator.validate")
  };
}, function (e, n) {
  e.exports = require("util");
}, function (e, n, t) {
  "use strict";

  var r = t(0),
      a = t(10),
      i = r(t(6)),
      o = t(8),
      l = t(12),
      s = t(4),
      u = t(9),
      c = function () {
    function e(e, n) {
      var r,
          a,
          i = this;

      if (this._filesystem = null !== (r = n.filesystem) && void 0 !== r ? r : t(13), this.onlyValidate = n.onlyValidate, this._shards = null !== (a = n.shards) && void 0 !== a ? a : 1, this._filesystem.existsSync(e) && (this._filesystem.statSync(e).isDirectory() || s(!1, "Expected `%s` to be a directory.", e)), !this.onlyValidate) {
        for (var o = [], l = e; !this._filesystem.existsSync(l);) o.unshift(l), l = u.dirname(l);

        if (o.forEach(function (e) {
          return i._filesystem.mkdirSync(e);
        }), this._shards > 1) for (var c = 0; c < this._shards; c++) {
          var f = u.join(e, this._getShardName(c));
          this._filesystem.existsSync(f) ? this._filesystem.statSync(e).isDirectory() || s(!1, "Expected `%s` to be a directory.", e) : this._filesystem.mkdirSync(f);
        }
      }

      this._files = new Set(), this.changes = {
        deleted: [],
        updated: [],
        created: [],
        unchanged: []
      }, this._dir = e;
    }

    e.combineChanges = function (e) {
      var n = {
        deleted: [],
        updated: [],
        created: [],
        unchanged: []
      };
      return e.forEach(function (e) {
        var t, r, a, o;
        (t = n.deleted).push.apply(t, (0, i.default)(e.changes.deleted)), (r = n.updated).push.apply(r, (0, i.default)(e.changes.updated)), (a = n.created).push.apply(a, (0, i.default)(e.changes.created)), (o = n.unchanged).push.apply(o, (0, i.default)(e.changes.unchanged));
      }), n;
    }, e.hasChanges = function (e) {
      return e.created.length > 0 || e.updated.length > 0 || e.deleted.length > 0;
    }, e.printChanges = function (e, n) {
      o.run("CodegenDirectory.printChanges", function () {
        var t = [];

        function r(e, n) {
          n.length > 0 && (t.push(e + ":"), n.forEach(function (e) {
            t.push(" - " + e);
          }));
        }

        n.onlyValidate ? (r("Missing", e.created), r("Out of date", e.updated), r("Extra", e.deleted)) : (r("Created", e.created), r("Updated", e.updated), r("Deleted", e.deleted), t.push("Unchanged: ".concat(e.unchanged.length, " files"))), console.log(t.join("\n"));
      });
    }, e.getAddedRemovedFiles = function (e) {
      var n = [],
          t = [];
      return e.forEach(function (e) {
        e.changes.created.forEach(function (t) {
          n.push(e.getPath(t));
        }), e.changes.deleted.forEach(function (n) {
          t.push(e.getPath(n));
        });
      }), {
        added: n,
        removed: t
      };
    }, e.sourceControlAddRemove = function () {
      var n = a(function* (n, t) {
        var r = e.getAddedRemovedFiles(t),
            a = r.added,
            i = r.removed;
        n.addRemove(a, i);
      });
      return function (e, t) {
        return n.apply(this, arguments);
      };
    }();
    var n = e.prototype;
    return n.printChanges = function () {
      e.printChanges(this.changes, {
        onlyValidate: this.onlyValidate
      });
    }, n.read = function (e) {
      var n = u.join(this._dir, e);
      return this._filesystem.existsSync(n) ? this._filesystem.readFileSync(n, "utf8") : null;
    }, n.markUnchanged = function (e) {
      this._addGenerated(e), this.changes.unchanged.push(e);
    }, n.markUpdated = function (e) {
      this._addGenerated(e), this.changes.updated.push(e);
    }, n.writeFile = function (e, n) {
      var t = this,
          r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      o.run("CodegenDirectory.writeFile", function () {
        t._addGenerated(e);

        var a = t.getPath(e);
        t._filesystem.existsSync(a) ? t._filesystem.readFileSync(a, "utf8") !== n || r ? (t._writeFile(a, n), t.changes.updated.push(e)) : t.changes.unchanged.push(e) : (t._writeFile(a, n), t.changes.created.push(e));
      });
    }, n._writeFile = function (e, n) {
      this.onlyValidate || this._filesystem.writeFileSync(e, n, "utf8");
    }, n.deleteExtraFiles = function () {
      var e = this;
      o.run("CodegenDirectory.deleteExtraFiles", function () {
        e._shards > 1 ? e._filesystem.readdirSync(e._dir).forEach(function (n) {
          if (!n.startsWith(".")) {
            var t = u.join(e._dir, n);
            e._filesystem.statSync(t).isDirectory() ? e._filesystem.readdirSync(t).forEach(function (n) {
              if (!e._files.has(n)) {
                if (!e.onlyValidate) try {
                  e._filesystem.unlinkSync(u.join(t, n));
                } catch (t) {
                  throw new Error("CodegenDirectory: Failed to delete `" + n + "` in `" + e._dir + "`.");
                }
                e.changes.deleted.push(n);
              }
            }) : e._filesystem.unlinkSync(t);
          }
        }) : e._filesystem.readdirSync(e._dir).forEach(function (n) {
          if (!n.startsWith(".") && !e._files.has(n)) {
            if (!e.onlyValidate) try {
              e._filesystem.unlinkSync(u.join(e._dir, n));
            } catch (t) {
              throw new Error("CodegenDirectory: Failed to delete `" + n + "` in `" + e._dir + "`.");
            }
            e.changes.deleted.push(n);
          }
        });
      });
    }, n.getPath = function (e) {
      if (this._shards > 1) {
        var n = l.createHash("md5");
        n.update(e, "utf8");

        var t = n.digest().readUInt32BE(0) % this._shards;

        return u.join(this._dir, this._getShardName(t), e);
      }

      return u.join(this._dir, e);
    }, n._getShardName = function (e) {
      var n = Math.ceil(Math.log2(256) / 4);
      return e.toString(16).padStart(n, "0");
    }, n._addGenerated = function (e) {
      this._files.has(e) && s(!1, "CodegenDirectory: Tried to generate `%s` twice in `%s`.", e, this._dir), this._files.add(e);
    }, e;
  }();

  e.exports = c;
}, function (e, n, t) {
  "use strict";

  var r = t(4),
      a = t(38).DEFAULT_HANDLE_KEY,
      i = t(1),
      o = i.GraphQLEnumType,
      l = i.GraphQLID,
      s = i.GraphQLInt,
      u = i.GraphQLInputObjectType,
      c = i.GraphQLList,
      f = i.GraphQLNonNull,
      d = i.GraphQLScalarType,
      m = "  ";

  function p(e, n, t) {
    var a = e.selections;
    if (null == a) return "";
    var i = a.map(function (e) {
      return function e(n, t, a) {
        var i;
        var o;
        var l = null !== (i = null == a ? void 0 : a.parentDirectives) && void 0 !== i ? i : "";
        var s = !0 === (null == a ? void 0 : a.isClientExtension);
        if ("LinkedField" === n.kind) o = h(n, {
          parentDirectives: l,
          isClientExtension: s
        }), o += p(n, t + m, {
          isClientExtension: s
        });else if ("ConnectionField" === n.kind) o = h(n, {
          parentDirectives: l,
          isClientExtension: s
        }), o += p(n, t + m, {
          isClientExtension: s
        });else if ("ModuleImport" === n.kind) o = n.selections.map(function (n) {
          return e(n, t, {
            parentDirectives: l,
            isClientExtension: s
          });
        }).join("\n" + t + m);else if ("ScalarField" === n.kind) o = h(n, {
          parentDirectives: l,
          isClientExtension: s
        });else if ("InlineFragment" === n.kind) o = "", s && (o += "# "), o += "... on " + n.typeCondition.toString(), o += l, o += v(n.directives), o += p(n, t + m, {
          isClientExtension: s
        });else if ("FragmentSpread" === n.kind) o = "", s && (o += "# "), o += "..." + n.name, o += l, o += function (e) {
          var n = g(e);
          if (!n.length) return "";
          return " @arguments".concat(n);
        }(n.args), o += v(n.directives);else if ("InlineDataFragmentSpread" === n.kind) o = "# ".concat(n.name, " @inline") + "\n".concat(t).concat(m, "...") + l + p(n, t + m);else if ("Condition" === n.kind) {
          var u = y(n.condition);
          null == u && r(!1, "GraphQLIRPrinter: Expected a variable for condition, got a literal `null`.");
          var c = n.passingValue ? " @include" : " @skip";
          c += "(if: " + u + ")", c += l;
          var f = n.selections.map(function (n) {
            return e(n, t, {
              parentDirectives: c,
              isClientExtension: s
            });
          });
          o = f.join("\n" + m);
        } else if ("Stream" === n.kind) {
          var d,
              b,
              k = ' @stream(label: "'.concat(n.label, '"');
          if (null !== n.if) k += ", if: ".concat(null !== (d = y(n.if)) && void 0 !== d ? d : "");
          if (null !== n.initialCount) k += ", initial_count: ".concat(null !== (b = y(n.initialCount)) && void 0 !== b ? b : "");
          k += ")", k += l;
          var w = n.selections.map(function (n) {
            return e(n, t, {
              parentDirectives: k,
              isClientExtension: s
            });
          });
          o = w.join("\n" + m);
        } else if ("Defer" === n.kind) {
          var S,
              _ = ' @defer(label: "'.concat(n.label, '"');

          if (null !== n.if) _ += ", if: ".concat(null !== (S = y(n.if)) && void 0 !== S ? S : "");

          if (_ += ")", _ += l, n.selections.every(function (e) {
            return "InlineFragment" === e.kind || "FragmentSpread" === e.kind;
          })) {
            var E = n.selections.map(function (n) {
              return e(n, t, {
                parentDirectives: _,
                isClientExtension: s
              });
            });
            o = E.join("\n" + m);
          } else o = null != n.metadata && null != n.metadata.fragmentTypeCondition ? "... on ".concat(String(n.metadata.fragmentTypeCondition)) + _ : "..." + _, o += p(n, t + m, {
            isClientExtension: s
          });
        } else "ClientExtension" === n.kind ? (!1 !== s && r(!1, "GraphQLIRPrinter: Did not expect to encounter a ClientExtension node as a descendant of another ClientExtension node."), o = "# Client-only selections:\n" + t + m + n.selections.map(function (n) {
          return e(n, t, {
            parentDirectives: l,
            isClientExtension: !0
          });
        }).join("\n" + t + m)) : r(!1, "GraphQLIRPrinter: Unknown selection kind `%s`.", n.kind);
        return o;
      }(e, n, t);
    });
    return i.length ? " {\n".concat(n + m).concat(i.join("\n" + n + m), "\n").concat(n).concat(!0 === (null == t ? void 0 : t.isClientExtension) ? "# " : "", "}") : "";
  }

  function h(e, n) {
    var t,
        r = null !== (t = null == n ? void 0 : n.parentDirectives) && void 0 !== t ? t : "";
    return (!0 === (null == n ? void 0 : n.isClientExtension) ? "# " : "") + (e.alias === e.name ? e.name : e.alias + ": " + e.name) + g(e.args) + r + v(e.directives) + function (e) {
      if (!e.handles) return "";
      var n = e.handles.map(function (e) {
        var n = e.key === a ? "" : ', key: "'.concat(e.key, '"'),
            t = null == e.filters ? "" : ", filters: ".concat(JSON.stringify(Array.from(e.filters).sort()));
        return '@__clientField(handle: "'.concat(e.name, '"').concat(n).concat(t, ")");
      });
      return n.length ? " " + n.join(" ") : "";
    }(e);
  }

  function v(e) {
    var n = e.map(function (e) {
      return "@" + e.name + g(e.args);
    });
    return n.length ? " " + n.join(" ") : "";
  }

  function g(e) {
    var n = [];
    return e.forEach(function (e) {
      var t = y(e.value, e.type);
      null != t && n.push(e.name + ": " + t);
    }), n.length ? "(" + n.join(", ") + ")" : "";
  }

  function y(e, n) {
    if (n instanceof f && (n = n.ofType), "Variable" === e.kind) return "$" + e.variableName;

    if ("ObjectValue" === e.kind) {
      n instanceof u || r(!1, "GraphQLIRPrinter: Need an InputObject type to print objects.");
      var t = n.getFields();
      return "{" + e.fields.map(function (e) {
        var n = y(e.value, t[e.name].type);
        return null == n ? null : e.name + ": " + n;
      }).filter(Boolean).join(", ") + "}";
    }

    if ("ListValue" === e.kind) {
      n instanceof c || r(!1, "GraphQLIRPrinter: Need a type in order to print arrays.");
      var a = n.ofType;
      return "[".concat(e.items.map(function (e) {
        return y(e, a);
      }).join(", "), "]");
    }

    return null != e.value ? b(e.value, n) : null;
  }

  function b(e, n) {
    if (null == e) return JSON.stringify(e);

    if (n instanceof f && (n = n.ofType), n instanceof o) {
      var t = n.serialize(e);
      return null == t && "string" == typeof e && (t = e), "string" != typeof t && r(!1, "GraphQLIRPrinter: Expected value of type %s to be a valid enum value, got `%s`.", n.name, JSON.stringify(e)), t;
    }

    if (n === l || n === s) return JSON.stringify(e);

    if (n instanceof d) {
      var a = n.serialize(e);
      return JSON.stringify(a);
    }

    if (Array.isArray(e)) {
      n instanceof c || r(!1, "GraphQLIRPrinter: Need a type in order to print arrays.");
      var i = n.ofType;
      return "[" + e.map(function (e) {
        return b(e, i);
      }).join(", ") + "]";
    }

    if (n instanceof c && null != e) return b(e, n.ofType);

    if ("object" == typeof e && null != e) {
      var m = [];
      n instanceof u || r(!1, "GraphQLIRPrinter: Need an InputObject type to print objects.");
      var p = n.getFields();

      for (var h in e) e.hasOwnProperty(h) && m.push(h + ": " + b(e[h], p[h].type));

      return "{" + m.join(", ") + "}";
    }

    return JSON.stringify(e);
  }

  e.exports = {
    print: function (e) {
      switch (e.kind) {
        case "Fragment":
          return "fragment ".concat(e.name, " on ").concat(String(e.type)) + (e.argumentDefinitions.forEach(function (e) {
            if ("LocalArgumentDefinition" === e.kind) {
              n = n || [];
              var t = "".concat(e.name, ': {type: "').concat(e.type.toString(), '"');
              null != e.defaultValue && (t += ", defaultValue: ".concat(b(e.defaultValue, e.type))), t += "}", n.push(t);
            }
          }), n && n.length ? " @argumentDefinitions(\n".concat(m).concat(n.join("\n" + m), "\n)") : "") + v(e.directives) + p(e, "") + "\n";

        case "Root":
          return "".concat(e.operation, " ").concat(e.name) + function (e) {
            var n = e.map(function (e) {
              var n = "$".concat(e.name, ": ").concat(e.type.toString());
              return null != e.defaultValue && (n += " = " + b(e.defaultValue, e.type)), n;
            });
            return n.length ? "(\n".concat(m).concat(n.join("\n" + m), "\n)") : "";
          }(e.argumentDefinitions) + v(e.directives) + p(e, "") + "\n";

        case "SplitOperation":
          return "SplitOperation ".concat(e.name, " on ").concat(String(e.type)) + p(e, "") + "\n";

        default:
          r(!1, "GraphQLIRPrinter: Unsupported IR node `%s`.", e.kind);
      }

      var n;
    },
    printField: h,
    printArguments: g,
    printDirectives: v
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0),
      a = r(t(2)),
      i = r(t(6)),
      o = t(8),
      l = t(41),
      s = t(38).DEFAULT_HANDLE_KEY,
      u = t(7),
      c = u.getNullableType,
      f = u.isExecutableDefinitionAST,
      d = t(3),
      m = d.createCombinedError,
      p = d.createCompilerError,
      h = d.createUserError,
      v = d.eachWithErrors,
      g = t(42).getFieldDefinitionLegacy,
      y = t(1),
      b = y.assertCompositeType,
      k = y.assertInputType,
      w = y.assertOutputType,
      S = y.extendSchema,
      _ = y.getNamedType,
      E = y.GraphQLEnumType,
      T = y.GraphQLID,
      F = y.GraphQLInputObjectType,
      x = y.GraphQLList,
      C = y.GraphQLNonNull,
      D = y.GraphQLScalarType,
      A = y.isLeafType,
      R = y.isType,
      N = y.typeFromAST,
      L = y.isTypeSubTypeOf,
      I = y.parse,
      O = y.parseType,
      V = y.print,
      M = y.Source,
      G = new Set(["argumentDefinitions", "uncheckedArguments_DEPRECATED", "arguments"]);

  function P(e, n) {
    var t = N(e, n);
    if (!R(t)) throw h("Unknown type: '".concat(V(n), "'."), null, [n]);
    return t;
  }

  var j = function () {
    function e(e, n) {
      var t = this;
      this._definitions = new Map(), this._getFieldDefinition = g, this._schema = e;
      var r = new Set();
      if (n.forEach(function (e) {
        if (f(e)) {
          var n = K(e);
          if (t._definitions.has(n)) return void r.add(n);

          t._definitions.set(n, e);
        }
      }), r.size) throw new Error("RelayParser: Encountered duplicate definitions for one or more documents: each document must have a unique name. Duplicated documents:\n" + Array.from(r, function (e) {
        return "- ".concat(e);
      }).join("\n"));
    }

    var n = e.prototype;
    return n.transform = function () {
      var e,
          n = this,
          t = [],
          r = new Map();
      if (null == (e = v(this._definitions, function (e) {
        var t = e[0],
            a = e[1],
            i = n._buildArgumentDefinitions(a);

        r.set(t, {
          definition: a,
          variableDefinitions: i
        });
      })) && (e = v(r.values(), function (e) {
        var a = e.definition,
            i = e.variableDefinitions,
            o = function (e, n, t, r, a) {
          return new q(e, n, t, r, a).transform();
        }(n._schema, n._getFieldDefinition, r, a, i);

        t.push(o);
      })), null != e && 0 !== e.length) throw m(e, "RelayParser");
      return t;
    }, n._buildArgumentDefinitions = function (e) {
      switch (e.kind) {
        case "OperationDefinition":
          return this._buildOperationArgumentDefinitions(e);

        case "FragmentDefinition":
          return this._buildFragmentArgumentDefinitions(e);

        default:
          throw p("Unexpected ast kind '".concat(e.kind, "'."), [e]);
      }
    }, n._buildFragmentArgumentDefinitions = function (e) {
      var n = this,
          t = (e.directives || []).filter(function (e) {
        return "argumentDefinitions" === K(e);
      });
      if (!t.length) return new Map();
      if (1 !== t.length) throw h("Directive @".concat("argumentDefinitions", " may be defined at most once per ") + "fragment.", null, t);
      var r = t[0],
          a = r.arguments;
      if (null == r || !Array.isArray(a)) return new Map();
      if (!a.length) throw h("Directive @".concat("argumentDefinitions", " requires arguments: remove the ") + "directive to skip defining local variables for this fragment.", null, [r]);
      var i = new Map();
      return a.forEach(function (e) {
        var t,
            r,
            a,
            o = K(e),
            l = i.get(o);
        if (null != l) throw h("Duplicate definition for variable '$".concat(o, "'."), null, [l.ast, e]);
        if ("ObjectValue" !== e.value.kind) throw h("Expected definition for variable '$".concat(o, "' to be an object ") + "with the shape: '{type: string, defaultValue?: mixed}.", null, [e.value]);
        if (e.value.fields.forEach(function (n) {
          var t = K(n);
          if ("type" === t) a = U(n.value, n);else {
            if ("defaultValue" !== t) throw h("Expected definition for variable '$".concat(o, "' to be an object ") + "with the shape: '{type: string, defaultValue?: mixed}.", null, [e.value]);
            r = n.value;
          }
        }), "string" != typeof a) throw h("Expected definition for variable '$".concat(o, "' to be an object ") + "with the shape: '{type: string, defaultValue?: mixed}.", null, [e.value]);
        var s = O(a),
            u = k(P(n._schema, s)),
            c = null != r ? Q(r, u, function (e) {
          throw h("Expected 'defaultValue' to be a literal, got a variable.", null, [e]);
        }, {
          nonStrictEnums: !0
        }) : null;
        if (null != c && "Literal" !== c.kind) throw h("Expected 'defaultValue' to be a literal, got a variable.", [c.loc]);
        i.set(o, {
          ast: e,
          defaultValue: null !== (t = null == c ? void 0 : c.value) && void 0 !== t ? t : null,
          defined: !0,
          name: o,
          type: u
        });
      }), i;
    }, n._buildOperationArgumentDefinitions = function (e) {
      var n = this,
          t = new Map();
      return (e.variableDefinitions || []).forEach(function (e) {
        var r = K(e.variable),
            a = k(P(n._schema, e.type)),
            i = e.defaultValue ? U(e.defaultValue, e) : null,
            o = t.get(r);
        if (null != o) throw h("Duplicate definition for variable '$".concat(r, "'."), null, [o.ast, e]);
        t.set(r, {
          ast: e,
          defaultValue: i,
          defined: !0,
          name: r,
          type: a
        });
      }), t;
    }, e;
  }();

  var q = function () {
    function e(e, n, t, r, a) {
      this._definition = r, this._entries = t, this._getFieldDefinition = n, this._schema = e, this._variableDefinitions = a, this._unknownVariables = new Map();
    }

    var n = e.prototype;
    return n.transform = function () {
      var e = this._definition;

      switch (e.kind) {
        case "OperationDefinition":
          return this._transformOperation(e);

        case "FragmentDefinition":
          return this._transformFragment(e);

        default:
          throw p("Unsupported definition type ".concat(e.kind), [e]);
      }
    }, n._recordAndVerifyVariableReference = function (e, n, t) {
      if (null != t) {
        var r = this._variableDefinitions.get(n);

        if (null != r) {
          var a = r.type;
          if (null != r.defaultValue && (a = new C(c(a))), !L(this._schema, a, t)) throw h("Variable '$".concat(n, "' was defined as type '").concat(String(r.type), "' but used in a location expecting the type '").concat(String(t), "'"), null, [r.ast, e]);
        } else {
          var i = this._unknownVariables.get(n);

          if (i && i.type) {
            var o = i.type,
                l = i.ast;
            if (!L(this._schema, t, o) && !L(this._schema, o, t)) throw h("Variable '$".concat(n, "' was used in locations expecting the conflicting types '").concat(String(o), "' and '").concat(String(t), "'."), null, [l, e]);
            L(this._schema, t, o) && this._unknownVariables.set(n, {
              ast: e,
              type: t
            });
          } else this._unknownVariables.set(n, {
            ast: e,
            type: t
          });
        }
      } else this._variableDefinitions.has(n) || this._unknownVariables.has(n) || this._unknownVariables.set(n, {
        ast: e,
        type: null
      });
    }, n._getDirectiveLocations = function () {
      if (!this._directiveLocations) {
        var e = this._schema.getDirectives();

        this._directiveLocations = new Map();
        var n = !0,
            t = !1,
            r = void 0;

        try {
          for (var a, i = e[Symbol.iterator](); !(n = (a = i.next()).done); n = !0) {
            var o = a.value;

            this._directiveLocations.set(o.name, o.locations);
          }
        } catch (e) {
          t = !0, r = e;
        } finally {
          try {
            n || null == i.return || i.return();
          } finally {
            if (t) throw r;
          }
        }
      }

      return this._directiveLocations;
    }, n._validateDirectivesLocation = function (e, n) {
      if (e && e.length) {
        var t = this._getDirectiveLocations(),
            r = e.filter(function (e) {
          var r = K(e);
          if (G.has(r)) return !1;
          var a = t.get(r);
          if (null == a) throw h("Unknown directive '".concat(r, "'."), null, [e]);
          return !a.some(function (e) {
            return e === n;
          });
        });

        if (r.length) {
          var a = r.map(function (e) {
            return "@" + K(e);
          }).join(", ");
          throw h("Invalid directives ".concat(a, " found on ").concat(n, "."), null, r);
        }
      }
    }, n._transformFragment = function (e) {
      var n = this._transformDirectives((e.directives || []).filter(function (e) {
        return "argumentDefinitions" !== K(e);
      }), "FRAGMENT_DEFINITION"),
          t = b(P(this._schema, e.typeCondition)),
          r = this._transformSelections(e.selectionSet, t),
          a = (0, i.default)(W(this._variableDefinitions)),
          o = !0,
          l = !1,
          s = void 0;

      try {
        for (var u, c = this._unknownVariables[Symbol.iterator](); !(o = (u = c.next()).done); o = !0) {
          var f = u.value,
              d = f[0],
              m = f[1];
          a.push({
            kind: "RootArgumentDefinition",
            loc: H(m.ast.loc),
            metadata: null,
            name: d,
            type: m.type
          });
        }
      } catch (e) {
        l = !0, s = e;
      } finally {
        try {
          o || null == c.return || c.return();
        } finally {
          if (l) throw s;
        }
      }

      return {
        kind: "Fragment",
        directives: n,
        loc: H(e.loc),
        metadata: null,
        name: K(e),
        selections: r,
        type: t,
        argumentDefinitions: a
      };
    }, n._getLocationFromOperation = function (e) {
      switch (e.operation) {
        case "query":
          return "QUERY";

        case "mutation":
          return "MUTATION";

        case "subscription":
          return "SUBSCRIPTION";

        default:
          throw e.operation, p("Unknown operation type '".concat(e.operation, "'."), null, [e]);
      }
    }, n._transformOperation = function (e) {
      var n,
          t,
          r = K(e),
          a = this._transformDirectives(e.directives || [], this._getLocationFromOperation(e));

      switch (e.operation) {
        case "query":
          t = "query", n = b(this._schema.getQueryType());
          break;

        case "mutation":
          t = "mutation", n = b(this._schema.getMutationType());
          break;

        case "subscription":
          t = "subscription", n = b(this._schema.getSubscriptionType());
          break;

        default:
          throw e.operation, p("Unknown operation type '".concat(e.operation, "'."), null, [e]);
      }

      if (!e.selectionSet) throw h("Expected operation to have selections.", null, [e]);

      var i = this._transformSelections(e.selectionSet, n),
          o = W(this._variableDefinitions);

      if (0 !== this._unknownVariables.size) throw h("Query '".concat(r, "' references undefined variables."), null, Array.from(this._unknownVariables.values(), function (e) {
        return e.ast;
      }));
      return {
        kind: "Root",
        operation: t,
        loc: H(e.loc),
        metadata: null,
        name: r,
        argumentDefinitions: o,
        directives: a,
        selections: i,
        type: n
      };
    }, n._transformSelections = function (e, n) {
      var t = this;
      return e.selections.map(function (e) {
        var r;
        if ("Field" === e.kind) r = t._transformField(e, n);else if ("FragmentSpread" === e.kind) r = t._transformFragmentSpread(e, n);else {
          if ("InlineFragment" !== e.kind) throw e.kind, p("Unknown ast kind '".concat(e.kind, "'."), [e]);
          r = t._transformInlineFragment(e, n);
        }

        var i = t._splitConditions(r.directives),
            o = i[0],
            l = i[1],
            s = function (e, n) {
          var t = n;
          return e.forEach(function (e) {
            t = [(0, a.default)({}, e, {
              selections: t
            })];
          }), t;
        }(o, [(0, a.default)({}, r, {
          directives: l
        })]);

        if (1 !== s.length) throw p("Expected exactly one condition node.", null, e.directives);
        return s[0];
      });
    }, n._transformInlineFragment = function (e, n) {
      var t = b(e.typeCondition ? P(this._schema, e.typeCondition) : n),
          r = this._transformDirectives(e.directives || [], "INLINE_FRAGMENT"),
          a = this._transformSelections(e.selectionSet, t);

      return {
        kind: "InlineFragment",
        directives: r,
        loc: H(e.loc),
        metadata: null,
        selections: a,
        typeCondition: t
      };
    }, n._transformFragmentSpread = function (e, n) {
      var t = this,
          r = K(e),
          a = l(e.directives || [], function (e) {
        var n = K(e);
        return "arguments" === n || "uncheckedArguments_DEPRECATED" === n;
      }),
          i = a[0],
          o = a[1];
      if (i.length > 1) throw h("Directive @".concat("arguments", " may be used at most once per a fragment spread."), null, i);

      var s = this._entries.get(r);

      if (null == s) throw h("Unknown fragment '".concat(r, "'."), null, [e.name]);
      var u,
          c = s.variableDefinitions,
          f = i[0];

      if (null != f) {
        var d = "uncheckedArguments_DEPRECATED" === K(f),
            m = !1;
        if (u = (f.arguments || []).map(function (e) {
          var n,
              a = K(e),
              i = e.value,
              o = c.get(a),
              l = null !== (n = null == o ? void 0 : o.type) && void 0 !== n ? n : null;

          if ("Variable" === i.kind) {
            if (null == o && !d) throw h("Variable @".concat("arguments", " values are only supported when the ") + "argument is defined with @".concat("argumentDefinitions", ". Check ") + "the definition of fragment '".concat(r, "'."), null, [e.value, s.definition]);
            return m = m || null == o, {
              kind: "Argument",
              loc: H(e.loc),
              metadata: null,
              name: a,
              value: t._transformVariable(i, null),
              type: null
            };
          }

          if (null == l) throw h("Literal @".concat("arguments", " values are only supported when the ") + "argument is defined with @".concat("argumentDefinitions", ". Check ") + "the definition of fragment '".concat(r, "'."), null, [e.value, s.definition]);

          var u = t._transformValue(i, l);

          return {
            kind: "Argument",
            loc: H(e.loc),
            metadata: null,
            name: a,
            value: u,
            type: l
          };
        }), d && !m) throw h("Invalid use of @".concat("uncheckedArguments_DEPRECATED", ": all arguments ") + "are defined, use @".concat("arguments", " instead."), null, [f]);
      }

      var p = this._transformDirectives(o, "FRAGMENT_SPREAD");

      return {
        kind: "FragmentSpread",
        args: u || [],
        metadata: null,
        loc: H(e.loc),
        name: r,
        directives: p
      };
    }, n._transformField = function (e, n) {
      var t,
          r,
          a = K(e),
          i = this._getFieldDefinition(this._schema, n, a, e);

      if (null == i) throw h("Unknown field '".concat(a, "' on type '").concat(String(n), "'."), null, [e]);

      var o = null !== (t = null === (r = e.alias) || void 0 === r ? void 0 : r.value) && void 0 !== t ? t : a,
          s = this._transformArguments(e.arguments || [], i.args),
          u = l(e.directives || [], function (e) {
        return "__clientField" !== K(e);
      }),
          c = u[0],
          f = u[1],
          d = this._transformDirectives(c, "FIELD"),
          m = w(i.type),
          p = this._transformHandle(a, s, f);

      if (A(_(m))) {
        if (e.selectionSet && e.selectionSet.selections && e.selectionSet.selections.length) throw h("Expected no selections for scalar field '".concat(a, "'."), null, [e]);
        return {
          kind: "ScalarField",
          alias: o,
          args: s,
          directives: d,
          handles: p,
          loc: H(e.loc),
          metadata: null,
          name: a,
          type: B(m)
        };
      }

      var v = e.selectionSet ? this._transformSelections(e.selectionSet, m) : null;
      if (null == v || 0 === v.length) throw h("Expected at least one selection for non-scalar field '".concat(a, "' on type '").concat(String(m), "'."), null, [e]);
      return {
        kind: "LinkedField",
        alias: o,
        args: s,
        directives: d,
        handles: p,
        loc: H(e.loc),
        metadata: null,
        name: a,
        selections: v,
        type: m
      };
    }, n._transformHandle = function (e, n, t) {
      var r;
      return t.forEach(function (t) {
        var a = (t.arguments || []).find(function (e) {
          return "handle" === K(e);
        });

        if (a) {
          var i,
              o = s,
              l = null,
              u = U(a.value, a);
          if ("string" != typeof u) throw h("Expected a string literal argument for the @".concat("__clientField", " directive."), null, [a.value]);
          i = u;
          var c = (t.arguments || []).find(function (e) {
            return "key" === K(e);
          });

          if (c) {
            var f = U(c.value, c);
            if ("string" != typeof f) throw h("Expected a string literal argument for the @".concat("__clientField", " directive."), null, [c.value]);
            o = f;
          }

          var d = (t.arguments || []).find(function (e) {
            return "filters" === K(e);
          });

          if (d) {
            var m = U(d.value, d);
            if (!Array.isArray(m) || !m.every(function (e) {
              return "string" == typeof e && n.some(function (n) {
                return n.name === e;
              });
            })) throw h("Expected an array of argument names on field '".concat(e, "'."), null, [d.value]);
            l = m;
          }

          var p = (t.arguments || []).find(function (e) {
            return "dynamicKey_UNSTABLE" === K(e);
          });
          if (null != p) throw h("Dynamic keys are only supported with @connection.", null, [p.value]);
          (r = r || []).push({
            name: i,
            key: o,
            filters: l,
            dynamicKey: null
          });
        }
      }), r;
    }, n._transformDirectives = function (e, n) {
      var t = this;
      return this._validateDirectivesLocation(e, n), e.map(function (e) {
        var n = K(e),
            r = t._schema.getDirective(n);

        if (null == r) throw h("Unknown directive '".concat(n, "'."), null, [e]);

        var a = t._transformArguments(e.arguments || [], r.args);

        return {
          kind: "Directive",
          loc: H(e.loc),
          metadata: null,
          name: n,
          args: a
        };
      });
    }, n._transformArguments = function (e, n) {
      var t = this;
      return e.map(function (e) {
        var r = K(e),
            a = n.find(function (e) {
          return e.name === r;
        });
        if (null == a) throw h("Unknown argument '".concat(r, "'."), null, [e]);

        var i = t._transformValue(e.value, a.type);

        return {
          kind: "Argument",
          loc: H(e.loc),
          metadata: null,
          name: r,
          value: i,
          type: a.type
        };
      });
    }, n._splitConditions = function (e) {
      var n = l(e, function (e) {
        return "include" === e.name || "skip" === e.name;
      }),
          t = n[0],
          r = n[1];
      return [t.map(function (e) {
        var n = "include" === e.name,
            t = e.args[0];
        if (null == t || "if" !== t.name) throw h("Expected an 'if' argument to @".concat(e.name, "."), [e.loc]);
        if ("Variable" !== t.value.kind && "Literal" !== t.value.kind) throw h("Expected the 'if' argument to @".concat(e.name, " to be a variable or literal."), [e.loc]);
        return {
          kind: "Condition",
          condition: t.value,
          loc: e.loc,
          metadata: null,
          passingValue: n,
          selections: []
        };
      }).sort(function (e, n) {
        return "Variable" === e.condition.kind && "Variable" === n.condition.kind ? e.condition.variableName < n.condition.variableName ? -1 : e.condition.variableName > n.condition.variableName ? 1 : 0 : "Variable" === e.condition.kind ? 1 : "Variable" === n.condition.kind ? -1 : 0;
      }), r];
    }, n._transformVariable = function (e, n) {
      var t = K(e);
      return this._recordAndVerifyVariableReference(e, t, n), {
        kind: "Variable",
        loc: H(e.loc),
        metadata: null,
        variableName: t,
        type: n
      };
    }, n._transformValue = function (e, n) {
      var t = this;
      return Q(e, n, function (e, n) {
        return t._transformVariable(e, n);
      });
    }, e;
  }();

  function Q(e, n, t) {
    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
      nonStrictEnums: !1
    };
    if ("Variable" === e.kind) return t(e, n);

    if ("NullValue" === e.kind) {
      if (n instanceof C) throw h("Expected a value matching type '".concat(String(n), "'."), null, [e]);
      return {
        kind: "Literal",
        loc: H(e.loc),
        metadata: null,
        value: null
      };
    }

    return function (e, n, t, r) {
      var a = c(n);

      if (a instanceof x) {
        if ("ListValue" !== e.kind) return Q(e, a.ofType, t, r);
        var i = k(a.ofType),
            o = [],
            l = [],
            s = !0;
        return e.values.forEach(function (e) {
          var n = Q(e, i, t, r);
          "Literal" === n.kind && o.push(n.value), l.push(n), s = s && "Literal" === n.kind;
        }), s ? {
          kind: "Literal",
          loc: H(e.loc),
          metadata: null,
          value: o
        } : {
          kind: "ListValue",
          loc: H(e.loc),
          metadata: null,
          items: l
        };
      }

      if (a instanceof F) {
        var u = a;
        if ("ObjectValue" !== e.kind) throw h("Expected a value matching type '".concat(String(n), "'."), null, [e]);
        var f = {},
            d = [],
            m = !0;
        return e.fields.forEach(function (e) {
          var a = K(e),
              i = u.getFields()[a];
          if (null == i) throw h("Uknown field '".concat(a, "' on type '").concat(String(n), "'."), null, [e]);
          var o = k(i.type),
              l = Q(e.value, o, t, r);
          "Literal" === l.kind && (f[e.name.value] = l.value), d.push({
            kind: "ObjectFieldValue",
            loc: H(e.loc),
            metadata: null,
            name: a,
            value: l
          }), m = m && "Literal" === l.kind;
        }), m ? {
          kind: "Literal",
          loc: H(e.loc),
          metadata: null,
          value: f
        } : {
          kind: "ObjectValue",
          loc: H(e.loc),
          metadata: null,
          fields: d
        };
      }

      if (a === T) {
        if ("IntValue" === e.kind) return {
          kind: "Literal",
          loc: H(e.loc),
          metadata: null,
          value: parseInt(e.value, 10)
        };
        if ("StringValue" === e.kind) return {
          kind: "Literal",
          loc: H(e.loc),
          metadata: null,
          value: e.value
        };
        throw h("Invalid value, expected a value matching type '".concat(String(n), "'."), null, [e]);
      }

      if (a instanceof E) {
        var v = a.parseLiteral(e);

        if (null == v) {
          if (r.nonStrictEnums && ("StringValue" === e.kind || "EnumValue" === e.kind)) {
            var g,
                y = null !== (g = a.parseValue(e.value.toUpperCase())) && void 0 !== g ? g : a.parseValue(e.value.toLowerCase());
            if (null != y) return {
              kind: "Literal",
              loc: H(e.loc),
              metadata: null,
              value: e.value
            };
          }

          throw h("Expected a value matching type '".concat(String(n), "'."), null, [e]);
        }

        return {
          kind: "Literal",
          loc: H(e.loc),
          metadata: null,
          value: v
        };
      }

      if (a instanceof D) {
        var b = a.parseLiteral(e);
        if (null == b) throw h("Expected a value matching type '".concat(String(n), "'."), null, [e]);
        return {
          kind: "Literal",
          loc: H(e.loc),
          metadata: null,
          value: b
        };
      }

      throw p("Unsupported type '".concat(String(n), "' for input value, expected a GraphQLList, ") + "GraphQLInputObjectType, GraphQLEnumType, or GraphQLScalarType.", null, [e]);
    }(e, n, t, r);
  }

  function U(e, n) {
    switch (e.kind) {
      case "IntValue":
        return parseInt(e.value, 10);

      case "FloatValue":
        return parseFloat(e.value);

      case "StringValue":
      case "BooleanValue":
      case "EnumValue":
        return e.value;

      case "ListValue":
        return e.values.map(function (e) {
          return U(e, n);
        });

      case "NullValue":
        return null;

      case "ObjectValue":
        var t = {};
        return e.fields.forEach(function (e) {
          var r = K(e),
              a = U(e.value, n);
          t[r] = a;
        }), t;

      case "Variable":
        throw h("Unexpected variable where a literal (static) value is required.", null, [e, n]);

      default:
        throw e.kind, p("Unknown ast kind '".concat(e.kind, "'."), [e]);
    }
  }

  function W(e) {
    return Array.from(e.values(), function (e) {
      var n = e.ast,
          t = e.name,
          r = e.type,
          a = e.defaultValue;
      return {
        kind: "LocalArgumentDefinition",
        loc: H(n.loc),
        metadata: null,
        name: t,
        type: r,
        defaultValue: a
      };
    });
  }

  function H(e) {
    return null == e ? {
      kind: "Unknown"
    } : {
      kind: "Source",
      start: e.start,
      end: e.end,
      source: e.source
    };
  }

  function B(e) {
    if (!function (e) {
      var n = _(e);

      return n instanceof D || n instanceof E;
    }(e)) throw h("Expected a scalar field type, got type '".concat(String(e), "'."));
    return e;
  }

  function K(e) {
    var n,
        t = null === (n = e.name) || void 0 === n ? void 0 : n.value;
    if ("string" != typeof t) throw p("Expected ast node to have a 'name'.", null, [e]);
    return t;
  }

  e.exports = {
    parse: function (e, n, t) {
      var r = I(new M(n, t));
      return e = S(e, r, {
        assumeValid: !0
      }), new j(e, r.definitions).transform();
    },
    transform: function (e, n) {
      return o.run("RelayParser.transform", function () {
        return new j(e, n).transform();
      });
    }
  };
}, function (e, n) {
  e.exports = require("nullthrows");
}, function (e, n, t) {
  "use strict";

  var r = t(0),
      a = r(t(2)),
      i = r(t(6)),
      o = t(47),
      l = t(48),
      s = t(16),
      u = t(8),
      c = t(50),
      f = t(51),
      d = t(52),
      m = t(55),
      p = t(7).isAbstractType,
      h = t(56),
      v = h.anyTypeAlias,
      g = h.declareExportOpaqueType,
      y = h.exactObjectTypeAnnotation,
      b = h.exportType,
      k = h.exportTypes,
      w = h.importTypes,
      S = h.intersectionTypeAnnotation,
      _ = h.lineComments,
      E = h.readOnlyArrayOfType,
      T = h.readOnlyObjectTypeProperty,
      F = h.unionTypeAnnotation,
      x = t(74),
      C = x.transformInputType,
      D = x.transformScalarType,
      A = t(11),
      R = A.getModuleComponentKey,
      N = A.getModuleOperationKey,
      L = t(75).default,
      I = t(29),
      O = t(1),
      V = (O.GraphQLInputObjectType, O.GraphQLNonNull),
      M = O.GraphQLString,
      G = t(4),
      P = t(26);

  function j(e, n, t, r) {
    var a = e.key,
        i = e.schemaName,
        o = e.value,
        l = e.conditional,
        s = e.nodeType,
        u = e.nodeSelections;
    s && (o = D(s, n, W([Array.from(P(u).values())], n, t))), "__typename" === i && r && (o = I.stringLiteralTypeAnnotation(r));
    var c = T(a, o);
    return l && (c.optional = !0), c;
  }

  var q = function (e) {
    return "__typename" === e.schemaName;
  },
      Q = function (e) {
    return e.some(q);
  },
      U = function (e) {
    return e.every(q);
  };

  function W(e, n, t, r) {
    var o = new Map(),
        l = {};
    ee(e).forEach(function (e) {
      var n = e.concreteType;

      if (n) {
        var t;
        l[n] = null !== (t = l[n]) && void 0 !== t ? t : [], l[n].push(e);
      } else {
        var r = o.get(e.key);
        o.set(e.key, r ? H(e, r) : e);
      }
    });
    var s = [];
    if (Object.keys(l).length > 0 && U(Array.from(o.values())) && (Q(Array.from(o.values())) || Object.keys(l).every(function (e) {
      return Q(l[e]);
    }))) !function () {
      var e = new Set(),
          r = function (r) {
        s.push(ne([].concat((0, i.default)(Array.from(o.values())), (0, i.default)(l[r]))).map(function (a) {
          return "__typename" === a.schemaName && e.add(a.key), j(a, n, t, r);
        }));
      };

      for (var a in l) r(a);

      s.push(Array.from(e).map(function (e) {
        var n = T(e, I.stringLiteralTypeAnnotation("%other"));
        return n.leadingComments = _("This will never be '%other', but we need some", "value in case none of the concrete values match."), n;
      }));
    }();else {
      var u = Z(Array.from(o.values()));

      for (var c in l) u = B(u, Z(l[c].map(function (e) {
        return (0, a.default)({}, e, {
          conditional: !0
        });
      })));

      var f = ne(Array.from(u.values())).map(function (e) {
        return q(e) && e.concreteType ? j((0, a.default)({}, e, {
          conditional: !1
        }), n, t, e.concreteType) : j(e, n, t);
      });
      s.push(f);
    }
    return F(s.map(function (e) {
      return r && e.push(T("$refType", I.genericTypeAnnotation(I.identifier(r)))), t ? I.objectTypeAnnotation(e) : y(e);
    }));
  }

  function H(e, n) {
    var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
    return e ? (0, a.default)({}, e, {
      nodeSelections: e.nodeSelections ? B(e.nodeSelections, P(n.nodeSelections), t) : null,
      conditional: e.conditional && n.conditional
    }) : t ? (0, a.default)({}, n, {
      conditional: !0
    }) : n;
  }

  function B(e, n) {
    var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
        r = new Map(),
        a = !0,
        i = !1,
        o = void 0;

    try {
      for (var l, s = e.entries()[Symbol.iterator](); !(a = (l = s.next()).done); a = !0) {
        var u = l.value,
            c = u[0],
            f = u[1];
        r.set(c, f);
      }
    } catch (e) {
      i = !0, o = e;
    } finally {
      try {
        a || null == s.return || s.return();
      } finally {
        if (i) throw o;
      }
    }

    var d = !0,
        m = !1,
        p = void 0;

    try {
      for (var h, v = n.entries()[Symbol.iterator](); !(d = (h = v.next()).done); d = !0) {
        var g = h.value;
        c = g[0], f = g[1];
        r.set(c, H(e.get(c), f, t));
      }
    } catch (e) {
      m = !0, p = e;
    } finally {
      try {
        d || null == v.return || v.return();
      } finally {
        if (m) throw p;
      }
    }

    return r;
  }

  function K(e, n) {
    return ee(e.selections).map(function (e) {
      return (0, a.default)({}, e, {
        conditional: !0
      });
    });
  }

  function z(e, n) {
    return [{
      key: e.alias,
      schemaName: e.name,
      value: D(e.type, n)
    }];
  }

  function $(e) {
    return [{
      key: e.alias,
      schemaName: e.name,
      nodeType: e.type,
      nodeSelections: Z(ee(e.selections), !0)
    }];
  }

  function J(e) {
    return [{
      key: e.alias,
      schemaName: e.name,
      nodeType: e.type,
      nodeSelections: Z(ee(e.selections), !0)
    }];
  }

  function X(e, n, t) {
    var r = e.key,
        a = e.schemaName,
        i = e.value,
        o = e.conditional,
        l = e.nodeType,
        s = e.nodeSelections;
    l && (i = D(l, n, Y([Array.from(P(s).values())], n, p(l) ? null : l.name))), "__typename" === a && t && (i = I.stringLiteralTypeAnnotation(t));
    var u = T(r, i);
    return o && (u.optional = !0), u;
  }

  function Y(e, n, t) {
    var r = [],
        i = {};
    ee(e).forEach(function (e) {
      var n,
          t = e.concreteType;
      t ? (i[t] = null !== (n = i[t]) && void 0 !== n ? n : [], i[t].push(e)) : r.push(e);
    });
    var o = [];

    if (Object.keys(i).length) {
      var l = Z(r),
          s = function (e) {
        o.push(Array.from(B(l, Z(i[e]), !1).values()).map(function (t) {
          return q(t) ? X((0, a.default)({}, t, {
            conditional: !1
          }), n, e) : X(t, n, e);
        }));
      };

      for (var u in i) s(u);
    }

    return r.length && o.push(r.map(function (e) {
      return q(e) ? X((0, a.default)({}, e, {
        conditional: !1
      }), n, t) : X(e, n, null);
    })), F(o.map(function (e) {
      return y(e);
    }));
  }

  function Z(e, n) {
    var t = new Map();
    return e.forEach(function (e) {
      var r = n && e.concreteType ? "".concat(e.key, "::").concat(e.concreteType) : e.key,
          a = t.get(r);
      t.set(r, a ? H(a, e) : e);
    }), t;
  }

  function ee(e) {
    var n = [];
    return e.forEach(function (e) {
      n.push.apply(n, (0, i.default)(e));
    }), n;
  }

  function ne(e) {
    var n = [],
        t = [];

    if (e.forEach(function (e) {
      e.ref ? t.push(e.ref) : n.push(e);
    }), t.length > 0) {
      var r = S(t.map(function (e) {
        return I.genericTypeAnnotation(I.identifier(ae(e)));
      }));
      n.push({
        key: "$fragmentRefs",
        conditional: !1,
        value: r
      });
    }

    return n;
  }

  function te(e) {
    var n = [];

    if (e.usedFragments.size > 0) {
      var t = Array.from(e.usedFragments).sort(),
          r = !0,
          a = !1,
          i = void 0;

      try {
        for (var o, l = t[Symbol.iterator](); !(r = (o = l.next()).done); r = !0) {
          var s = o.value,
              u = ae(s);
          e.generatedFragments.has(s) || (e.useHaste && e.existingFragmentNames.has(s) ? n.push(w([u], s + ".graphql")) : e.useSingleArtifactDirectory && e.existingFragmentNames.has(s) ? n.push(w([u], "./" + s + ".graphql")) : n.push(v(u)));
        }
      } catch (e) {
        a = !0, i = e;
      } finally {
        try {
          r || null == l.return || l.return();
        } finally {
          if (a) throw i;
        }
      }
    }

    return n;
  }

  function re(e) {
    var n = e.enumsHasteModule,
        t = e.usedEnums,
        r = e.noFutureProofEnums,
        a = Object.keys(t).sort();
    return 0 === a.length ? [] : "string" == typeof n ? [w(a, n)] : "function" == typeof n ? a.map(function (e) {
      return w([e], n(e));
    }) : a.map(function (e) {
      var n = t[e].getValues().map(function (e) {
        return e.value;
      });
      return n.sort(), r || n.push("%future added value"), b(e, I.unionTypeAnnotation(n.map(function (e) {
        return I.stringLiteralTypeAnnotation(e);
      })));
    });
  }

  function ae(e) {
    return "".concat(e, "$ref");
  }

  function ie(e) {
    return "".concat(e, "$fragmentType");
  }

  var oe = [m.transform, c.transform, o.transform, f.transform, l.transformWithOptions({}), d.transform],
      le = "raw_response_type";
  e.exports = {
    generate: u.instrument(function (e, n) {
      var t = s.visit(e, function (e) {
        var n = {
          customScalars: e.customScalars,
          enumsHasteModule: e.enumsHasteModule,
          existingFragmentNames: e.existingFragmentNames,
          generatedFragments: new Set(),
          generatedInputObjectTypes: {},
          optionalInputFields: e.optionalInputFields,
          usedEnums: {},
          usedFragments: new Set(),
          useHaste: e.useHaste,
          useSingleArtifactDirectory: e.useSingleArtifactDirectory,
          noFutureProofEnums: e.noFutureProofEnums
        };
        return {
          leave: {
            Root: function (t) {
              var r,
                  o = function (e, n) {
                return b("".concat(e.name, "Variables"), y(e.argumentDefinitions.map(function (e) {
                  var t = I.objectTypeProperty(I.identifier(e.name), C(e.type, n));
                  return e.type instanceof V || (t.optional = !0), t;
                })));
              }(t, n),
                  l = function (e) {
                return Object.keys(e.generatedInputObjectTypes).map(function (n) {
                  var t = e.generatedInputObjectTypes[n];
                  return "string" == typeof t && G(!1, "RelayCompilerFlowGenerator: Expected input object type to have been defined before calling `generateInputObjectTypes`"), b(n, t);
                });
              }(n),
                  u = b("".concat(t.name, "Response"), W(t.selections, n, !1)),
                  c = [I.objectTypeProperty(I.identifier("variables"), I.genericTypeAnnotation(I.identifier("".concat(t.name, "Variables")))), I.objectTypeProperty(I.identifier("response"), I.genericTypeAnnotation(I.identifier("".concat(t.name, "Response"))))],
                  f = e.normalizationIR;

              f && t.directives.some(function (e) {
                return e.name === le;
              }) && (r = s.visit(f, function (e) {
                return {
                  enter: {
                    ClientExtension: function (e) {
                      return null;
                    }
                  },
                  leave: {
                    Root: function (n) {
                      return b("".concat(n.name, "RawResponse"), Y(n.selections, e, null));
                    },
                    InlineFragment: function (e) {
                      var n = e.typeCondition;
                      return ee(e.selections).map(function (e) {
                        return p(n) ? e : (0, a.default)({}, e, {
                          concreteType: n.toString()
                        });
                      });
                    },
                    Condition: K,
                    ScalarField: function (n) {
                      return z(n, e);
                    },
                    ConnectionField: $,
                    LinkedField: J,
                    Defer: function (e) {
                      return ee(e.selections);
                    },
                    Stream: function (e) {
                      return ee(e.selections);
                    },
                    ModuleImport: function (e) {
                      return [{
                        key: N(e.name),
                        value: I.mixedTypeAnnotation()
                      }, {
                        key: R(e.name),
                        value: I.mixedTypeAnnotation()
                      }];
                    },
                    FragmentSpread: function (e) {
                      G(!1, "A fragment spread is found when traversing the AST, make sure you are passing the codegen IR");
                    }
                  }
                };
              }(n)));

              var d,
                  m,
                  h,
                  v = function (e, n) {
                if (!(null == n ? void 0 : n.isRefetchableQuery) || !e.useHaste && !e.useSingleArtifactDirectory) return null;
                var t = null == n ? void 0 : n.derivedFrom;
                return null != t && "string" == typeof t ? t : null;
              }(n, t.metadata),
                  k = [].concat((0, i.default)(v ? (m = ae(d = v), h = ie(d), [w(["FragmentReference"], "relay-runtime"), g(m, "FragmentReference"), g(h, m)]) : te(n)), (0, i.default)(re(n)), (0, i.default)(l), [o, u]);

              return r && (c.push(I.objectTypeProperty(I.identifier("rawResponse"), I.genericTypeAnnotation(I.identifier("".concat(t.name, "RawResponse"))))), k.push(r)), k.push(b(t.name, y(c))), I.program(k);
            },
            Fragment: function (e) {
              var t = ee(e.selections),
                  r = t.filter(function (e) {
                return e.concreteType;
              }).length;
              t = t.map(function (n) {
                return r <= 1 && q(n) && !p(e.type) ? [(0, a.default)({}, n, {
                  concreteType: e.type.toString()
                })] : [n];
              }), n.generatedFragments.add(e.name);

              var o,
                  l = function (e, n) {
                var t = ae(e),
                    r = ie(e);
                return n ? [w([t, r], n), k([t, r])] : [g(t, "FragmentReference"), g(r, t)];
              }(e.name, function (e, n) {
                var t, r;

                if (e.useHaste || e.useSingleArtifactDirectory) {
                  var a = null === (t = n.find(function (e) {
                    return "refetchable" === e.name;
                  })) || void 0 === t ? void 0 : t.args;

                  if (a) {
                    var i = a.find(function (e) {
                      return "Argument" === e.kind && "queryName" === e.name;
                    });
                    return i && i.value && "Literal" === i.value.kind && "string" == typeof i.value.value && (r = i.value.value, e.useHaste || (r = "./" + r), r += ".graphql"), r;
                  }
                }
              }(n, e.directives)),
                  s = (o = e.name, "".concat(o, "$key")),
                  u = T("$data", I.genericTypeAnnotation(I.identifier("".concat(e.name, "$data"))));

              u.optional = !0;

              var c = T("$fragmentRefs", I.genericTypeAnnotation(I.identifier(ae(e.name)))),
                  f = I.objectTypeAnnotation([u, c]),
                  d = function (e) {
                return "".concat(e, "$data");
              }(e.name),
                  m = I.genericTypeAnnotation(I.identifier(e.name)),
                  h = null != e.metadata && !1 === e.metadata.mask,
                  v = W(t, n, h, h ? void 0 : ae(e.name)),
                  y = function (e) {
                return Boolean(e.metadata && e.metadata.plural);
              }(e) ? E(v) : v;

              return I.program([].concat((0, i.default)(te(n)), (0, i.default)(re(n)), [w(["FragmentReference"], "relay-runtime")], (0, i.default)(l), [b(e.name, y), b(d, m), b(s, f)]));
            },
            InlineFragment: function (e) {
              var n = e.typeCondition;
              return ee(e.selections).map(function (e) {
                return p(n) ? (0, a.default)({}, e, {
                  conditional: !0
                }) : (0, a.default)({}, e, {
                  concreteType: n.toString()
                });
              });
            },
            Condition: K,
            ScalarField: function (e) {
              return z(e, n);
            },
            ConnectionField: $,
            LinkedField: J,
            ModuleImport: function (e) {
              return [{
                key: "__fragmentPropName",
                conditional: !0,
                value: D(M, n)
              }, {
                key: "__module_component",
                conditional: !0,
                value: D(M, n)
              }, {
                key: "__fragments_" + e.name,
                ref: e.name
              }];
            },
            FragmentSpread: function (e) {
              return n.usedFragments.add(e.name), [{
                key: "__fragments_" + e.name,
                ref: e.name
              }];
            }
          }
        };
      }(n));
      return L(t).code;
    }, "RelayFlowGenerator.generate"),
    transforms: oe,
    SCHEMA_EXTENSION: "directive @".concat(le, " on QUERY | MUTATION | SUBSCRIPTION")
  };
}, function (e, n, t) {
  "use strict";

  e.exports = function (e) {
    return "".concat(e, "$normalization");
  };
}, function (e, n) {
  e.exports = require("@babel/types");
}, function (e, n, t) {
  "use strict";

  var r = t(8),
      a = t(21),
      i = t(7),
      o = i.isExecutableDefinitionAST,
      l = i.isSchemaDefinitionAST,
      s = t(1),
      u = s.extendSchema,
      c = s.parse,
      f = s.print,
      d = s.visit;

  function m(e, n, t, r) {
    var i = [];
    n.forEach(function (e) {
      o(e) && i.push(e);
    });
    var l = {
      kind: "Document",
      definitions: i
    };
    return a.validate(l, e, t), r(e, i);
  }

  function p(e) {
    var n = [];
    return e.forEach(function (e) {
      e.definitions.forEach(function (e) {
        return n.push(e);
      });
    }), n;
  }

  var h = new Map();

  function v(e, n, t) {
    var r = h.get(e);
    r || (r = {}, h.set(e, r));
    var a = r[n];
    return a || (a = t(), r[n] = a), a;
  }

  e.exports = {
    convertASTDocuments: function (e, n, t, a) {
      return r.run("ASTConvert.convertASTDocuments", function () {
        var r = p(n),
            i = [];
        return n.forEach(function (e) {
          e.definitions.forEach(function (e) {
            o(e) && i.push(e);
          });
        }), m(e, r, t, a);
      });
    },
    convertASTDocumentsWithBase: function (e, n, t, a, i) {
      return r.run("ASTConvert.convertASTDocumentsWithBase", function () {
        var r = p(n),
            l = p(t),
            s = new Map(),
            u = new Map();
        r.forEach(function (e) {
          if (o(e)) {
            var n = e.name && e.name.value;

            if (n) {
              if (u.has(n)) throw new Error("Duplicate definition of '".concat(n, "'."));
              u.set(n, e);
            }
          }
        });
        var c = [];

        for (l.forEach(function (e) {
          o(e) && c.push(e);
        }); c.length > 0;) {
          var f = c.pop(),
              h = f.name && f.name.value;
          if (h) if (s.has(h)) {
            if (s.get(h) !== f) throw new Error("Duplicate definition of '".concat(h, "'."));
          } else s.set(h, f), d(f, {
            FragmentSpread: function (e) {
              var n = u.get(e.name.value);
              n && c.push(n);
            }
          });
        }

        var v = [];
        return s.forEach(function (e) {
          return v.push(e);
        }), m(e, v, a, i);
      });
    },
    extendASTSchema: function (e, n) {
      return r.run("ASTConvert.extendASTSchema", function () {
        var t = [];
        if (n.forEach(function (e) {
          e.definitions.forEach(function (e) {
            l(e) && t.push(e);
          });
        }), 0 === t.length) return e;
        var r = t.map(f).join("\n");
        return v(e, r, function () {
          return u(e, {
            kind: "Document",
            definitions: t
          }, {
            assumeValid: !0
          });
        });
      });
    },
    transformASTSchema: function (e, n) {
      return r.run("ASTConvert.transformASTSchema", function () {
        if (0 === n.length) return e;
        var t = n.join("\n");
        return v(e, t, function () {
          return u(e, c(t));
        });
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  e.exports = function (e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Got unexpected null or undefined";
    if (null != e) return e;
    var t = new Error(n);
    throw t.framesToPop = 1, t;
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0),
      a = t(10),
      i = r(t(6)),
      o = t(23),
      l = t(33),
      s = t(18),
      u = t(8),
      c = t(4),
      f = t(9),
      d = t(15).Map,
      m = function () {
    function e(e) {
      var n = this;

      for (var t in this.parsers = {}, this.parserConfigs = e.parserConfigs, this.writerConfigs = e.writerConfigs, this.onlyValidate = e.onlyValidate, this.onComplete = e.onComplete, this._reporter = e.reporter, this._sourceControl = e.sourceControl, this.parserWriters = {}, e.parserConfigs) this.parserWriters[t] = new Set();

      var r = function (t) {
        var r = e.writerConfigs[t];
        r.baseParsers && r.baseParsers.forEach(function (e) {
          return n.parserWriters[e].add(t);
        }), n.parserWriters[r.parser].add(t);
      };

      for (var a in e.writerConfigs) r(a);
    }

    var n = e.prototype;
    return n.compileAll = function () {
      var e = a(function* () {
        for (var e in this.parsers = {}, this.parserConfigs) try {
          yield this.parseEverything(e);
        } catch (e) {
          return this._reporter.reportError("CodegenRunner.compileAll", e), "ERROR";
        }

        var n = !1;

        for (var t in this.writerConfigs) {
          var r = yield this.write(t);
          if ("ERROR" === r) return "ERROR";
          "HAS_CHANGES" === r && (n = !0);
        }

        return n ? "HAS_CHANGES" : "NO_CHANGES";
      });
      return function () {
        return e.apply(this, arguments);
      };
    }(), n.compile = function () {
      var e = a(function* (e) {
        var n = this,
            t = this.writerConfigs[e],
            r = [t.parser];
        return t.baseParsers && t.baseParsers.forEach(function (e) {
          return r.push(e);
        }), yield u.asyncContext("CodegenRunner:parseEverything", function () {
          return Promise.all(r.map(function (e) {
            return n.parseEverything(e);
          }));
        }), yield this.write(e);
      });
      return function (n) {
        return e.apply(this, arguments);
      };
    }(), n.getDirtyWriters = function (e) {
      var n = this;
      return u.asyncContext("CodegenRunner:getDirtyWriters", a(function* () {
        var t = new Set();

        for (var r in n.writerConfigs) {
          var i = n.writerConfigs[r],
              o = !0,
              l = !1,
              c = void 0;

          try {
            for (var d, m = e[Symbol.iterator](); !(o = (d = m.next()).done); o = !0) {
              var p = d.value;
              i.isGeneratedFile(p) && t.add(r);
            }
          } catch (e) {
            l = !0, c = e;
          } finally {
            try {
              o || null == m.return || m.return();
            } finally {
              if (l) throw c;
            }
          }
        }

        return yield Promise.all(Object.keys(n.parserConfigs).map(function (r) {
          return u.waitFor("Watchman:query", a(function* () {
            var a = new s(),
                i = n.parserConfigs[r],
                o = yield a.watchProject(i.baseDir),
                l = e.map(function (e) {
              return f.relative(i.baseDir, e);
            }),
                u = {
              expression: ["allof", i.watchmanExpression, ["name", l, "wholename"]],
              fields: ["exists"],
              relative_root: o.relativePath
            },
                c = yield a.command("query", o.root, u);
            a.end(), c.files.length > 0 && n.parserWriters[r].forEach(function (e) {
              return t.add(e);
            });
          }));
        })), t;
      }));
    }, n.parseEverything = function () {
      var e = a(function* (e) {
        if (!this.parsers[e]) {
          var n = this.parserConfigs[e];
          this.parsers[e] = n.getParser(n.baseDir);
          var t,
              r = n.getFileFilter ? n.getFileFilter(n.baseDir) : p;
          if (n.filepaths && n.watchmanExpression) throw new Error("Provide either `watchmanExpression` or `filepaths` but not both.");
          if (n.watchmanExpression) t = yield l.queryFiles(n.baseDir, n.watchmanExpression, r);else {
            if (!n.filepaths) throw new Error("Either `watchmanExpression` or `filepaths` is required to query files");
            t = yield l.queryFilepaths(n.baseDir, n.filepaths, r);
          }
          this.parseFileChanges(e, t);
        }
      });
      return function (n) {
        return e.apply(this, arguments);
      };
    }(), n.parseFileChanges = function (e, n) {
      var t = this;
      return u.run("CodegenRunner.parseFileChanges", function () {
        t.parsers[e].parseFiles(n);
      });
    }, n.write = function (e) {
      var n = this;
      return u.asyncContext("CodegenRunner.write", a(function* () {
        try {
          n._reporter.reportMessage("\nWriting ".concat(e));

          var t = n.writerConfigs[e],
              r = t.writeFiles,
              a = t.parser,
              s = t.baseParsers,
              m = t.isGeneratedFile,
              p = d();
          s && s.forEach(function (e) {
            n.parsers[e] || c(!1, "Trying to access an uncompiled base parser config: %s", e), p = p.merge(n.parsers[e].documents());
          });
          var h = n.parserConfigs[a],
              v = h.baseDir,
              g = h.generatedDirectoriesWatchmanExpression,
              y = [];
          if (g) y = (yield l.queryDirectories(v, g)).map(function (e) {
            return f.join(v, e);
          });

          var b = n.parsers[a].documents(),
              k = u.run("getSchema", function () {
            return n.parserConfigs[a].getSchema();
          }),
              w = yield r({
            onlyValidate: n.onlyValidate,
            schema: k,
            documents: b,
            baseDocuments: p,
            generatedDirectories: y,
            sourceControl: n._sourceControl,
            reporter: n._reporter
          }),
              S = !0,
              _ = !1,
              E = void 0;

          try {
            for (var T, F = w.values()[Symbol.iterator](); !(S = (T = F.next()).done); S = !0) {
              var x = T.value,
                  C = [].concat((0, i.default)(x.changes.created), (0, i.default)(x.changes.updated), (0, i.default)(x.changes.deleted), (0, i.default)(x.changes.unchanged)),
                  D = !0,
                  A = !1,
                  R = void 0;

              try {
                for (var N, L = C[Symbol.iterator](); !(D = (N = L.next()).done); D = !0) {
                  var I = N.value,
                      O = x.getPath(I);
                  m(O) || c(!1, "CodegenRunner: %s returned false for isGeneratedFile, but was in generated directory", O);
                }
              } catch (e) {
                A = !0, R = e;
              } finally {
                try {
                  D || null == L.return || L.return();
                } finally {
                  if (A) throw R;
                }
              }
            }
          } catch (e) {
            _ = !0, E = e;
          } finally {
            try {
              S || null == F.return || F.return();
            } finally {
              if (_) throw E;
            }
          }

          var V = n.onComplete;
          null != V && V(Array.from(w.values()));
          var M = o.combineChanges(Array.from(w.values()));
          return o.printChanges(M, {
            onlyValidate: n.onlyValidate
          }), o.hasChanges(M) ? "HAS_CHANGES" : "NO_CHANGES";
        } catch (e) {
          return n._reporter.reportError("CodegenRunner.write", e), "ERROR";
        }
      }));
    }, n.watchAll = function () {
      var e = a(function* () {
        for (var e in yield this.compileAll(), this.parserConfigs) yield this.watch(e);
      });
      return function () {
        return e.apply(this, arguments);
      };
    }(), n.watch = function () {
      var e = a(function* (e) {
        var n = this,
            t = this.parserConfigs[e];
        if (!t.watchmanExpression) throw new Error("`watchmanExpression` is required to watch files");
        var r = !0;
        yield l.watchCompile(t.baseDir, t.watchmanExpression, t.getFileFilter ? t.getFileFilter(t.baseDir) : p, function () {
          var t = a(function* (t) {
            if (n.parsers[e] || c(!1, "Trying to watch an uncompiled parser config: %s", e), r) r = !1;else {
              var a = [];
              n.parserWriters[e].forEach(function (e) {
                return a.push(e);
              });

              try {
                n.parsers[e] ? n.parseFileChanges(e, t) : yield n.parseEverything(e), yield Promise.all(a.map(function (e) {
                  return n.write(e);
                }));
              } catch (e) {
                n._reporter.reportError("CodegenRunner.watch", e);
              }

              n._reporter.reportMessage("Watching for changes to ".concat(e, "..."));
            }
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        }()), this._reporter.reportMessage("Watching for changes to ".concat(e, "..."));
      });
      return function (n) {
        return e.apply(this, arguments);
      };
    }(), e;
  }();

  function p(e) {
    return !0;
  }

  e.exports = m;
}, function (e, n, t) {
  "use strict";

  var r = t(10),
      a = t(18),
      i = t(8),
      o = t(12),
      l = t(13),
      s = t(9),
      u = "graphql-codegen",
      c = 3;

  function f() {
    return (f = r(function* (e, n, t) {
      return yield i.waitFor("Watchman:query", r(function* () {
        var r = new a(c),
            i = yield Promise.all([r.watchProject(e), m(r)]),
            o = i[0],
            l = i[1],
            s = yield r.command("query", o.root, {
          expression: n,
          fields: l,
          relative_root: o.relativePath
        });
        return r.end(), S(new Set(), e, t, s.files);
      }));
    })).apply(this, arguments);
  }

  function d() {
    return (d = r(function* (e, n) {
      return yield i.waitFor("Watchman:query", r(function* () {
        var t = new a(),
            r = yield t.watchProject(e),
            i = yield t.command("query", r.root, {
          expression: n,
          fields: ["name"],
          relative_root: r.relativePath
        });
        return t.end(), i.files;
      }));
    })).apply(this, arguments);
  }

  function m(e) {
    return p.apply(this, arguments);
  }

  function p() {
    return (p = r(function* (e) {
      var n = ["name", "exists"];
      return (yield e.hasCapability("field-content.sha1hex")) && n.push("content.sha1hex"), n;
    })).apply(this, arguments);
  }

  function h() {
    return (h = r(function* (e, n, t) {
      var r = n.map(function (e) {
        return {
          name: e,
          exists: !0,
          "content.sha1hex": null
        };
      });
      return S(new Set(), e, t, r);
    })).apply(this, arguments);
  }

  function v(e, n, t) {
    return g.apply(this, arguments);
  }

  function g() {
    return (g = r(function* (e, n, t) {
      return yield i.waitFor("Watchman:subscribe", r(function* () {
        var r = new a(),
            i = yield r.watchProject(e);
        yield function (e, n, t, r, a) {
          return y.apply(this, arguments);
        }(r, i.root, i.relativePath, n, t);
      }));
    })).apply(this, arguments);
  }

  function y() {
    return (y = r(function* (e, n, t, r, a) {
      e.on("subscription", function (e) {
        e.subscription === u && a(e);
      });
      var i = yield m(e);
      yield e.command("subscribe", n, u, {
        expression: r,
        fields: i,
        relative_root: t
      });
    })).apply(this, arguments);
  }

  function b(e, n, t, r) {
    return k.apply(this, arguments);
  }

  function k() {
    return (k = r(function* (e, n, t, r) {
      var a = new Set();
      yield v(e, n, function (n) {
        n.files && (a = S(a, e, t, n.files), r(a));
      });
    })).apply(this, arguments);
  }

  function w() {
    return (w = r(function* (e, n, t, a) {
      var i = !1,
          o = !1,
          l = null;
      b(e, n, t, function () {
        var e = r(function* (e) {
          if (o = !0, l = e, !i) {
            for (i = !0; o;) o = !1, yield a(l);

            i = !1;
          }
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      }());
    })).apply(this, arguments);
  }

  function S(e, n, t, r) {
    var a = new Map();
    return e.forEach(function (e) {
      e.exists && a.set(e.relPath, e);
    }), r.forEach(function (e) {
      var r,
          i,
          u = e.name,
          c = e.exists,
          f = e["content.sha1hex"],
          d = !c;

      if (!d) {
        var m = {
          exists: !0,
          relPath: u,
          hash: f || (r = s.join(n, u), i = l.readFileSync(r), o.createHash("sha1").update(i).digest("hex"))
        };
        t(m) ? a.set(u, m) : d = !0;
      }

      d && a.set(u, {
        exists: !1,
        relPath: u
      });
    }), new Set(a.values());
  }

  e.exports = {
    queryDirectories: function (e, n) {
      return d.apply(this, arguments);
    },
    queryFiles: function (e, n, t) {
      return f.apply(this, arguments);
    },
    queryFilepaths: function (e, n, t) {
      return h.apply(this, arguments);
    },
    watch: v,
    watchFiles: b,
    watchCompile: function (e, n, t, r) {
      return w.apply(this, arguments);
    }
  };
}, function (e, n) {
  e.exports = require("child_process");
}, function (e, n, t) {
  "use strict";

  var r = t(20),
      a = t(13),
      i = t(9),
      o = t(1),
      l = o.parse,
      s = o.Source;

  function u(e, n) {
    var t = a.readFileSync(i.join(e, n.relPath), "utf8");
    return l(new s(t, n.relPath), {
      experimentalFragmentVariables: !0
    });
  }

  e.exports = {
    parseFile: u,
    getParser: function (e) {
      return new r({
        baseDir: e,
        parse: u
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(8),
      a = t(66),
      i = t(22),
      o = {
    allowImportExportEverywhere: !0,
    allowReturnOutsideFunction: !0,
    allowSuperOutsideMethod: !0,
    sourceType: "module",
    plugins: ["asyncGenerators", "classProperties", ["decorators", {
      decoratorsBeforeExport: !0
    }], "doExpressions", "dynamicImport", "exportExtensions", "flow", "functionBind", "functionSent", "jsx", "nullishCoalescingOperator", "objectRestSpread", "optionalChaining", "optionalCatchBinding"],
    strictMode: !1
  };
  var l = Object.create(null, {
    createFragmentContainer: {
      value: !0
    },
    createPaginationContainer: {
      value: !0
    },
    createRefetchContainer: {
      value: !0
    }
  }),
      s = {
    comments: !0,
    end: !0,
    leadingComments: !0,
    loc: !0,
    name: !0,
    start: !0,
    trailingComments: !0,
    type: !0
  };

  function u(e) {
    return "Identifier" === e.type && "graphql" === e.name;
  }

  function c(e) {
    return "Identifier" === e.type && ("graphql" === e.name || "graphql_DEPRECATED" === e.name);
  }

  function f(e) {
    var n = e.quasis;
    return n && 1 === n.length || h(!1, "FindGraphQLTags: Substitutions are not allowed in graphql tags."), n[0];
  }

  function d(e) {
    return f(e).value.raw;
  }

  function m(e) {
    var n = f(e).loc.start;
    return {
      line: n.line,
      column: n.column + 1
    };
  }

  function p(e, n) {
    if (null == n) return "(source unavailable)";
    var t = e.split("\n").slice(n.start.line - 1, n.end.line);
    return t[0] = t[0].slice(n.start.column), t[t.length - 1] = t[t.length - 1].slice(0, n.end.column), t.join("\n");
  }

  function h(e, n) {
    if (!e) {
      for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), a = 2; a < t; a++) r[a - 2] = arguments[a];

      throw new Error(i.format.apply(i, [n].concat(r)));
    }
  }

  function v(e, n) {
    var t = n[e.type];
    null == t ? g(e, n) : t(e);
  }

  function g(e, n) {
    for (var t in e) if (!s[t]) {
      var r = e[t];
      r && "object" == typeof r && "string" == typeof r.type ? v(r, n) : Array.isArray(r) && r.forEach(function (e) {
        e && "object" == typeof e && "string" == typeof e.type && v(e, n);
      });
    }
  }

  e.exports = {
    find: r.instrument(function (e) {
      var n = [],
          t = a.parse(e, o),
          r = {
        CallExpression: function (t) {
          var a = t.callee;

          if ("Identifier" === a.type && l[a.name] || "MemberExpression" === a.kind && "Identifier" === a.object.type && "Relay" === a.object.value && "Identifier" === a.property.type && l[a.property.name]) {
            var i = t.arguments[1];
            "ObjectExpression" === i.type ? i.properties.forEach(function (r) {
              ("ObjectProperty" !== r.type || "Identifier" !== r.key.type || "TaggedTemplateExpression" !== r.value.type) && h(!1, "FindGraphQLTags: `%s` expects fragment definitions to be `key: graphql`.", t.callee.name), c(r.value.tag) || h(!1, "FindGraphQLTags: `%s` expects fragment definitions to be tagged with `graphql`, got `%s`.", t.callee.name, p(e, r.value.tag.loc)), u(r.value.tag) && n.push({
                keyName: r.key.name,
                template: d(r.value.quasi),
                sourceLocationOffset: m(r.value.quasi)
              });
            }) : (i && "TaggedTemplateExpression" === i.type || h(!1, "FindGraphQLTags: `%s` expects a second argument of fragment definitions.", t.callee.name), c(i.tag) || h(!1, "FindGraphQLTags: `%s` expects fragment definitions to be tagged with `graphql`, got `%s`.", t.callee.name, p(e, i.tag.loc)), n.push({
              keyName: null,
              template: d(i.quasi),
              sourceLocationOffset: m(i.quasi)
            }));

            for (var o = 2; o < t.arguments.length; o++) v(t.arguments[o], r);
          } else g(t, r);
        },
        TaggedTemplateExpression: function (e) {
          u(e.tag) && n.push({
            keyName: null,
            template: e.quasi.quasis[0].value.raw,
            sourceLocationOffset: m(e.quasi)
          });
        }
      };
      return v(t, r), n;
    }, "FindGraphQLTags.find")
  };
}, function (e, n, t) {
  "use strict";

  var r = t(67);

  var a = function () {
    function e(e) {
      this._verbose = e.verbose, this._quiet = e.quiet;
    }

    var n = e.prototype;
    return n.reportMessage = function (e) {
      this._quiet || process.stdout.write(e + "\n");
    }, n.reportTime = function (e, n) {
      if (this._verbose && !this.quiet) {
        var t = 0 === n ? r.gray(" <1ms") : n < 1e3 ? r.blue((a = n + "ms", new Array(5 - a.length + 1).join(" ") + a)) : r.red(Math.floor(n / 10) / 100 + "s");
        process.stdout.write("  " + t + " " + r.gray(e) + " [" + r.blue(Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + "Mb") + "]\n");
      }

      var a;
    }, n.reportError = function (e, n) {
      if (!this._quiet && (process.stdout.write(r.red("ERROR:\n" + n.message + "\n")), this._verbose)) {
        var t = n.stack.match(/^ {4}at .*$/gm);
        t && process.stdout.write(r.gray("From: " + e + "\n" + t.join("\n") + "\n"));
      }
    }, e;
  }();

  e.exports = a;
}, function (e, n, t) {
  "use strict";

  e.exports = {
    DEFAULT_HANDLE_KEY: ""
  };
}, function (e, n, t) {
  "use strict";

  var r = t(69),
      a = t(70),
      i = t(3).createCompilerError;
  e.exports = {
    generate: function (e) {
      var n;

      switch (e.kind) {
        case "Fragment":
          return !0 === (null === (n = e.metadata) || void 0 === n ? void 0 : n.inlineData) ? {
            kind: "InlineDataFragment",
            name: e.name
          } : a.generate(e);

        case "Request":
          return {
            kind: "Request",
            fragment: a.generate(e.fragment),
            operation: r.generate(e.root),
            params: {
              operationKind: e.root.operation,
              name: e.name,
              id: e.id,
              text: e.text,
              metadata: e.metadata
            }
          };

        case "SplitOperation":
          return r.generate(e);
      }

      throw i("RelayCodeGenerator: Unknown AST kind '".concat(e.kind, "'."), [e.loc]);
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0),
      a = t(10),
      i = r(t(6)),
      o = t(30),
      l = t(23),
      s = t(19),
      u = t(8),
      c = t(25),
      f = t(21),
      d = t(7),
      m = t(43),
      p = t(12),
      h = t(1),
      v = t(4),
      g = t(26),
      y = t(9),
      b = t(45),
      k = t(46).getReaderSourceDefinitionName,
      w = (t(15).Map, d.isExecutableDefinitionAST);
  e.exports = {
    writeAll: function (e) {
      var n = e.config,
          t = e.onlyValidate,
          r = e.baseDocuments,
          d = e.documents,
          S = e.schema,
          _ = e.reporter,
          E = e.sourceControl;
      return u.asyncContext("RelayFileWriter.writeAll", a(function* () {
        var e = function (e) {
          e.baseDir;
          var n = e.baseDocuments,
              t = e.baseSchema,
              r = e.compilerTransforms,
              a = e.documents,
              l = e.extraValidationRules,
              u = e.reporter,
              d = e.schemaExtensions,
              p = e.typeGenerator,
              h = o.transformASTSchema(t, d),
              v = o.extendASTSchema(h, [].concat((0, i.default)(n), (0, i.default)(a))),
              g = [].concat((0, i.default)(f.LOCAL_RULES), (0, i.default)(f.GLOBAL_RULES));
          l && (g = [].concat((0, i.default)(g), (0, i.default)(l.LOCAL_RULES || []), (0, i.default)(l.GLOBAL_RULES || [])));
          var y = o.convertASTDocumentsWithBase(v, n, a, g, c.transform),
              b = new s(t, v).addAll(y),
              k = b.applyTransforms(p.transforms, u),
              w = b.applyTransforms([].concat((0, i.default)(r.commonTransforms), (0, i.default)(r.queryTransforms)), u);
          return {
            artifacts: m(b, r, u),
            definitions: y,
            transformedQueryContext: w,
            transformedTypeContext: k
          };
        }({
          baseDir: n.baseDir,
          baseDocuments: r.valueSeq().toArray(),
          baseSchema: S,
          compilerTransforms: n.compilerTransforms,
          documents: d.valueSeq().toArray(),
          extraValidationRules: n.validationRules,
          reporter: _,
          schemaExtensions: n.schemaExtensions,
          typeGenerator: n.typeGenerator
        }),
            T = e.artifacts,
            F = e.definitions,
            x = e.transformedTypeContext,
            C = e.transformedQueryContext,
            D = new Set();

        r.forEach(function (e) {
          e.definitions.forEach(function (e) {
            w(e) && e.name && D.add(e.name.value);
          });
        });

        var A = T.filter(function (e) {
          e[0];
          var n = e[1],
              t = k(n);
          return !D.has(t);
        }),
            R = new Map(A.map(function (e) {
          e[0];
          var n = e[1];
          return ["Request" === n.kind ? n.params.name : n.name, n];
        })),
            N = new Set(F.map(function (e) {
          return e.name;
        })),
            L = new Map(),
            I = function (e) {
          var n = g(R.get(e)),
              t = k(n),
              r = L.get(t);
          return r || v(!1, "RelayFileWriter: Could not determine source for definition: `%s`.", e), r;
        };

        d.forEach(function (e, t) {
          e.definitions.forEach(function (e) {
            e.name && L.set(e.name.value, {
              dir: y.join(n.baseDir, y.dirname(t)),
              ast: e
            });
          });
        }), D.forEach(function (e) {
          N.delete(e);
        });

        var O,
            V = new Map(),
            M = function (e) {
          var n = new l(e, {
            onlyValidate: t
          });
          return V.set(e, n), n;
        },
            G = !0,
            P = !1,
            j = void 0;

        try {
          for (var q, Q = (n.generatedDirectories || [])[Symbol.iterator](); !(G = (q = Q.next()).done); G = !0) {
            var U = q.value;
            M(U);
          }
        } catch (e) {
          P = !0, j = e;
        } finally {
          try {
            G || null == Q.return || Q.return();
          } finally {
            if (P) throw j;
          }
        }

        n.outputDir && (O = M(n.outputDir));

        var W,
            H = function (e) {
          if (O) return O;
          var n = y.join(I(e).dir, "__generated__"),
              t = V.get(n);
          return t || (t = M(n)), t;
        },
            B = u.instrument(n.formatModule, "RelayFileWriter:formatModule"),
            K = n.persistQuery ? u.instrumentWait(n.persistQuery, "RelayFileWriter:persistQuery") : null;

        try {
          yield Promise.all(A.map((W = a(function* (e) {
            var t,
                r = e[0],
                a = e[1],
                i = "Request" === a.kind ? a.params.name : a.name;

            if (!D.has(i)) {
              var o = x.get(i),
                  l = o ? n.typeGenerator.generate(o, {
                customScalars: n.customScalars,
                enumsHasteModule: n.enumsHasteModule,
                existingFragmentNames: N,
                optionalInputFields: n.optionalInputFieldsForFlow,
                useHaste: n.useHaste,
                useSingleArtifactDirectory: !!n.outputDir,
                noFutureProofEnums: n.noFutureProofEnums
              }) : "",
                  s = u.run("hashGraphQL", function () {
                return e = h.print(I(i).ast), p.createHash("md5").update(e, "utf8").digest("hex");
                var e;
              });
              yield b(H(i), r, a, B, l, K, n.platform, s, n.extension, n.printModuleDependency, null !== (t = n.repersist) && void 0 !== t && t);
            }
          }), function (e) {
            return W.apply(this, arguments);
          })));
          var z = n.generateExtraFiles;
          z && u.run("RelayFileWriter:generateExtraFiles", function () {
            var e = n.outputDir;
            z(function (n) {
              var t = n || e;
              t || v(!1, "RelayFileWriter: cannot generate extra files without specifying an outputDir in the config or passing it in.");
              var r = V.get(t);
              return r || (r = M(t)), r;
            }, C, H);
          }), V.forEach(function (e) {
            e.deleteExtraFiles();
          }), E && !t && (yield l.sourceControlAddRemove(E, Array.from(V.values())));
        } catch (e) {
          var $;

          try {
            $ = JSON.parse(e.message);
          } catch (e) {}

          if ($ && "GraphQL2Exception" === $.name && $.message) throw new Error("GraphQL error writing modules:\n" + $.message);
          throw new Error("Error writing modules:\n" + String(e.stack || e));
        }

        return V;
      }));
    }
  };
}, function (e, n, t) {
  "use strict";

  e.exports = function (e, n) {
    for (var t = [], r = [], a = 0; a < e.length; a++) {
      var i = e[a];
      n(i) ? t.push(i) : r.push(i);
    }

    return [t, r];
  };
}, function (e, n, t) {
  "use strict";

  var r = t(7).getRawType,
      a = t(3).createCompilerError,
      i = t(1),
      o = i.assertAbstractType,
      l = i.GraphQLInterfaceType,
      s = i.GraphQLObjectType,
      u = i.GraphQLUnionType,
      c = i.isAbstractType,
      f = i.SchemaMetaFieldDef,
      d = i.TypeMetaFieldDef,
      m = i.TypeNameMetaFieldDef;

  function p(e, n, t) {
    var a,
        i = r(n),
        o = i === e.getQueryType(),
        c = i instanceof s || i instanceof l || i instanceof u;
    return o && t === f.name ? a = f : o && t === d.name ? a = d : c && t === m.name ? a = m : (i instanceof l || i instanceof s) && (a = i.getFields()[t]), a;
  }

  function h(e) {
    var n = e.name ? e.name.value : null;
    if ("string" != typeof n) throw a("Expected ast node to have a 'name'.", null, [e]);
    return n;
  }

  e.exports = {
    getFieldDefinitionLegacy: function (e, n, t, a) {
      var i = p(e, n, t);
      return i || (i = function (e, n, t, r) {
        if (c(n) && r && r.directives && r.directives.some(function (e) {
          return "fixme_fat_interface" === h(e);
        })) {
          for (var a, i = e.getPossibleTypes(o(n)), l = function (e) {
            var n = i[e].getFields()[t];

            if (n && (a = n, r && r.arguments)) {
              var o = r.arguments.every(function (e) {
                return n.args.find(function (n) {
                  return n.name === h(e);
                });
              });
              if (o) return "break";
            }
          }, s = 0; s < i.length; s++) {
            var u = l(s);
            if ("break" === u) break;
          }

          return a;
        }
      }(e, r(n), t, a)), i || null;
    },
    getFieldDefinitionStrict: p
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0)(t(6)),
      a = t(24),
      i = t(8),
      o = t(39),
      l = t(44);

  function s(e, n) {
    var t = e.getRoot(n);
    return l(t, e).documents().map(a.print).join("\n");
  }

  e.exports = function (e, n, t, a) {
    return i.run("GraphQLCompiler.compile", function () {
      var i = e.applyTransforms([].concat((0, r.default)(n.commonTransforms), (0, r.default)(n.fragmentTransforms)), t),
          l = e.applyTransforms([].concat((0, r.default)(n.commonTransforms), (0, r.default)(n.queryTransforms), (0, r.default)(n.printTransforms)), t);
      a && l.applyValidations(a.printValidations, t);
      var u = e.applyTransforms([].concat((0, r.default)(n.commonTransforms), (0, r.default)(n.queryTransforms), (0, r.default)(n.codegenTransforms)), t);
      a && u.applyValidations(a.codegenValidations, t);
      var c = [],
          f = !0,
          d = !1,
          m = void 0;

      try {
        for (var p, h = u.documents()[Symbol.iterator](); !(f = (p = h.next()).done); f = !0) {
          var v = p.value;

          if ("Root" === v.kind) {
            var g = i.getRoot(v.name),
                y = {
              kind: "Request",
              fragment: {
                kind: "Fragment",
                argumentDefinitions: g.argumentDefinitions,
                directives: g.directives,
                loc: {
                  kind: "Derived",
                  source: v.loc
                },
                metadata: null,
                name: g.name,
                selections: g.selections,
                type: g.type
              },
              id: null,
              loc: v.loc,
              metadata: v.metadata || {},
              name: g.name,
              root: v,
              text: s(l, g.name)
            };
            c.push([y, o.generate(y)]);
          } else c.push([v, o.generate(v)]);
        }
      } catch (e) {
        d = !0, m = e;
      } finally {
        try {
          f || null == h.return || h.return();
        } finally {
          if (d) throw m;
        }
      }

      var b = !0,
          k = !1,
          w = void 0;

      try {
        for (var S, _ = i.documents()[Symbol.iterator](); !(b = (S = _.next()).done); b = !0) {
          var E = S.value;
          "Fragment" === E.kind && c.push([E, o.generate(E)]);
        }
      } catch (e) {
        k = !0, w = e;
      } finally {
        try {
          b || null == _.return || _.return();
        } finally {
          if (k) throw w;
        }
      }

      return c;
    });
  };
}, function (e, n, t) {
  "use strict";

  var r = t(19),
      a = t(16).visit;

  e.exports = function (e, n) {
    for (var t = [e], i = new r(n.serverSchema, n.clientSchema).add(e), o = {
      FragmentSpread: function (e) {
        !function (e) {
          var r = e.name;

          if (!i.get(r)) {
            var a = n.getFragment(r);
            i = i.add(a), t.push(a);
          }
        }(e);
      }
    }; t.length;) a(t.pop(), o);

    return i;
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0),
      a = t(10),
      i = r(t(2)),
      o = t(17),
      l = t(8),
      s = t(12),
      u = t(71),
      c = t(4),
      f = t(11).RelayConcreteNode;

  function d(e) {
    return "require('".concat(e, "')");
  }

  function m() {
    return (m = a(function* (e, n, t, r, a, m, p, h, v) {
      var g,
          y = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : d,
          b = arguments.length > 10 ? arguments[10] : void 0,
          k = t,
          w = m,
          S = ("Request" === k.kind ? k.params.name : k.name) + ".graphql",
          _ = (null != p && p.length > 0 ? S + "." + p : S) + "." + v,
          E = function (e) {
        switch (e.kind) {
          case f.FRAGMENT:
            return "ReaderFragment";

          case f.REQUEST:
            return "ConcreteRequest";

          case f.SPLIT_OPERATION:
            return "NormalizationSplitOperation";

          case f.INLINE_DATA_FRAGMENT:
            return "ReaderInlineDataFragment";

          default:
            c(!1, "Unexpected GeneratedNode kind: `%s`.", e.kind);
        }
      }(k);

      k.kind === f.REQUEST && (g = k.params.text);
      var T = null;

      if (k.kind === f.REQUEST) {
        var F = l.run("RelayFileWriter:compareHash", function () {
          var n = e.read(_),
              t = s.createHash("md5");
          return t.update("cache-breaker-9"), t.update(JSON.stringify(k)), t.update(h), a && t.update(a), w && t.update("persisted"), T = t.digest("hex"), function (e) {
            if (null == e || 0 === e.length) return null;
            if (/<<<<<|>>>>>/.test(e)) return null;
            var n = e.match(/@relayHash (\w{32})\b/m);
            return n && n[1];
          }(n);
        });
        if (!b && T === F) return e.markUnchanged(_), null;
        if (e.onlyValidate) return e.markUpdated(_), null;
        if (w) switch (k.kind) {
          case f.REQUEST:
            var x = k.params.text;
            null == x && c(!1, "writeRelayGeneratedFile: Expected `text` in order to persist query"), k = (0, i.default)({}, k, {
              params: {
                operationKind: k.params.operationKind,
                name: k.params.name,
                id: yield w(x),
                text: null,
                metadata: k.params.metadata
              }
            });
            break;

          case f.FRAGMENT:
            break;

          default:
            k.kind;
        }
      }

      var C = r({
        moduleName: S,
        documentType: E,
        definition: n,
        kind: k.kind,
        docText: g,
        typeText: a,
        hash: T ? "@relayHash ".concat(T) : null,
        concreteText: o.postProcess(u(k), y),
        sourceHash: h,
        node: k
      });
      return e.writeFile(_, C, b), k;
    })).apply(this, arguments);
  }

  e.exports = function (e, n, t, r, a, i, o, l, s) {
    return m.apply(this, arguments);
  };
}, function (e, n, t) {
  "use strict";

  e.exports = {
    getReaderSourceDefinitionName: function (e) {
      var n,
          t,
          r = "Request" === e.kind ? [e.params.name, null === (n = e.params.metadata) || void 0 === n ? void 0 : n.derivedFrom] : "SplitOperation" === e.kind ? [e.name, null === (t = e.metadata) || void 0 === t ? void 0 : t.derivedFrom] : [e.name, null],
          a = r[1];
      return "string" == typeof a ? a : r[0];
    },
    getSourceDefinitionName: function (e) {
      var n,
          t = "Request" === e.kind || "Root" === e.kind || "SplitOperation" === e.kind ? null === (n = e.metadata) || void 0 === n ? void 0 : n.derivedFrom : null;
      return "string" == typeof t ? t : e.name;
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(5),
      a = t(14),
      i = t(7).getNullableType,
      o = t(3).createUserError,
      l = t(1).GraphQLList;

  function s(e, n) {
    var t,
        r = this.traverse(e, n),
        s = r.directives.find(function (e) {
      return "connection_resolver" === e.name;
    });
    if (null == s) return r;
    if (i(r.type) instanceof l) throw o("@connection_resolver fields must return a single value, not a list, found '" + "".concat(String(r.type), "'"), [r.loc]);
    var u = a(s.args).resolver;

    if ("string" != typeof u) {
      var c,
          f = r.args.find(function (e) {
        return "resolver" === e.name;
      });
      throw o("Expected @connection_resolver field to specify a 'resolver' as a literal string. The resolver should be the name of a JS module to use at runtime to derive the field's value.", [null !== (c = null == f ? void 0 : f.loc) && void 0 !== c ? c : s.loc]);
    }

    var d = null !== (t = function (e, n) {
      var t = e.args.find(function (e) {
        var t = e.name;
        return t === n;
      });
      if (null == t) return null;
      var r = "Literal" === t.value.kind ? t.value.value : null;
      if (null == r || "string" != typeof r) throw o("Expected the '".concat(n, "' value to @").concat(e.name, " to be a string literal if provided."), [t.value.loc]);
      return r;
    }(s, "label")) && void 0 !== t ? t : r.alias,
        m = function (e, n, t) {
      return "".concat(e, "$").concat(n, "$").concat(t);
    }(n.documentName, "connection", d),
        p = n.labels.get(m);

    if (null != p) {
      var h,
          v = s.args.find(function (e) {
        return "label" === e.name;
      }),
          g = p.args.find(function (e) {
        return "label" === e.name;
      }),
          y = null !== (h = null == g ? void 0 : g.loc) && void 0 !== h ? h : p.loc;
      throw v ? o("Invalid use of @connection_resolver, the provided label is not unique. Specify a unique 'label' as a literal string.", [null == v ? void 0 : v.loc, y]) : o("Invalid use of @connection_resolver, could not generate a default label that is unique. Specify a unique 'label' as a literal string.", [s.loc, y]);
    }

    return n.labels.set(m, s), {
      alias: r.alias,
      args: r.args,
      directives: r.directives.filter(function (e) {
        return e !== s;
      }),
      kind: "ConnectionField",
      label: m,
      loc: r.loc,
      metadata: r.metadata,
      name: r.name,
      resolver: u,
      selections: r.selections,
      type: r.type
    };
  }

  function u(e) {
    var n = e.directives.find(function (e) {
      return "connection_resolver" === e.name;
    });
    if (null != n) throw o("The @connection_resolver direction is not supported on scalar fields, only fields returning an object/interface/union", [n.loc]);
    return e;
  }

  e.exports = {
    SCHEMA_EXTENSION: "\n  directive @connection_resolver(resolver: String!, label: String) on FIELD\n",
    transform: function (e) {
      return r.transform(e, {
        LinkedField: s,
        ScalarField: u
      }, function (e) {
        return {
          documentName: e.name,
          labels: new Map()
        };
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0)(t(2)),
      a = t(5),
      i = t(7),
      o = t(72),
      l = t(49),
      s = t(3),
      u = s.createCompilerError,
      c = s.createUserError,
      f = i.getRawType,
      d = i.isAbstractType;

  function m(e, n) {
    var t,
        i = {
      flattenAbstractTypes: !(!n || !n.flattenAbstractTypes),
      parentType: null
    },
        o = (t = new Map(), function (e, n) {
      var a = t.get(e);
      null == a && (a = new Map(), t.set(e, a));
      var i = n.parentType,
          o = a.get(i);
      if (null != o) return o;
      var l = "LinkedField" === e.kind || "Fragment" === e.kind || "Root" === e.kind || "SplitOperation" === e.kind ? e.type : "InlineFragment" === e.kind ? e.typeCondition : i;
      if (null == l) throw u("FlattenTransform: Expected a parent type.", [e.loc]);
      var s = new Map(),
          c = p(s, e, n, l),
          f = c ? (0, r.default)({}, e, {
        selections: Array.from(s.values())
      }) : e;
      n.parentType = l;
      var d = this.traverse(f, n);
      return n.parentType = i, a.set(i, d), d;
    });
    return a.transform(e, {
      Condition: o,
      Defer: o,
      Fragment: o,
      InlineFragment: o,
      InlineDataFragmentSpread: o,
      LinkedField: o,
      Root: o,
      SplitOperation: o
    }, function () {
      return i;
    });
  }

  function p(e, n, t, a) {
    var i = !1;
    return n.selections.forEach(function (n) {
      if ("InlineFragment" === n.kind && function (e, n, t) {
        return e.typeCondition.name === f(t).name || n.flattenAbstractTypes && d(e.typeCondition);
      }(n, t, a)) return i = !0, void p(e, n, t, a);
      var o = l(n),
          s = e.get(o);

      if (s) {
        if (i = !0, "InlineFragment" === s.kind) {
          if ("InlineFragment" !== n.kind) throw u("FlattenTransform: Expected an InlineFragment, got a '".concat(n.kind, "'"), [n.loc]);
          e.set(o, (0, r.default)({}, s, {
            selections: h(s, n, t, n.typeCondition)
          }));
        } else if ("Condition" === s.kind) {
          if ("Condition" !== n.kind) throw u("FlattenTransform: Expected a Condition, got a '".concat(n.kind, "'"), [n.loc]);
          e.set(o, (0, r.default)({}, s, {
            selections: h(s, n, t, a)
          }));
        } else if ("ClientExtension" === s.kind) {
          if ("ClientExtension" !== n.kind) throw u("FlattenTransform: Expected a ClientExtension, got a '".concat(n.kind, "'"), [n.loc]);
          e.set(o, (0, r.default)({}, s, {
            selections: h(s, n, t, a)
          }));
        } else if ("FragmentSpread" === s.kind) ;else if ("ModuleImport" === s.kind) {
          if ("ModuleImport" !== n.kind) throw u("FlattenTransform: Expected a ModuleImport, got a '".concat(n.kind, "'"), [n.loc]);
          if (n.name !== s.name || n.module !== s.module || n.documentName !== s.documentName) throw c("Found conflicting @module selections: use a unique alias on the parent fields.", [n.loc, s.loc]);
          e.set(o, (0, r.default)({}, s, {
            selections: h(s, n, t, a)
          }));
        } else if ("Defer" === s.kind) {
          if ("Defer" !== n.kind) throw u("FlattenTransform: Expected a Defer, got a '".concat(n.kind, "'"), [n.loc]);
          e.set(o, (0, r.default)({
            kind: "Defer"
          }, s, {
            selections: h(s, n, t, a)
          }));
        } else if ("Stream" === s.kind) {
          if ("Stream" !== n.kind) throw u("FlattenTransform: Expected a Stream, got a '".concat(n.kind, "'"), [n.loc]);
          e.set(o, (0, r.default)({
            kind: "Stream"
          }, s, {
            selections: h(s, n, t, a)
          }));
        } else if ("LinkedField" === s.kind) {
          if ("LinkedField" !== n.kind) throw u("FlattenTransform: Expected a LinkedField, got a '".concat(n.kind, "'"), [n.loc]);
          v(n, s), e.set(o, (0, r.default)({
            kind: "LinkedField"
          }, s, {
            handles: g(s, n),
            selections: h(s, n, t, n.type)
          }));
        } else if ("ScalarField" === s.kind) {
          if ("ScalarField" !== n.kind) throw u("FlattenTransform: Expected a ScalarField, got a '".concat(n.kind, "'"), [n.loc]);
          v(n, s), e.set(o, (0, r.default)({
            kind: "ScalarField"
          }, s, {
            handles: g(n, s)
          }));
        } else {
          if ("InlineDataFragmentSpread" === s.kind) throw u("FlattenTransform: did not expect an InlineDataFragmentSpread node. Only expecting InlineDataFragmentSpread in reader ASTs and this transform to run only on normalization ASTs.", [n.loc]);
          if ("ConnectionField" !== s.kind) throw s.kind, u("FlattenTransform: Unknown kind '".concat(s.kind, "'"));
          if ("ConnectionField" !== n.kind) throw u("FlattenTransform: Expected a ConnectionField, got a '".concat(n.kind, "'"), [n.loc]);
          v(n, s), e.set(o, (0, r.default)({
            kind: "ConnectionField"
          }, s, {
            selections: h(s, n, t, n.type)
          }));
        }
      } else e.set(o, n);
    }), i;
  }

  function h(e, n, t, r) {
    var a = new Map();
    return p(a, e, t, r), p(a, n, t, r), Array.from(a.values());
  }

  function v(e, n) {
    if (r = n, (t = e).kind !== r.kind || t.name !== r.name || t.alias !== r.alias || (a = t.args, i = r.args, a.length !== i.length || !a.every(function (e, n) {
      var t = i[n];
      return e.name === t.name && e.value.kind === t.value.kind && e.value.variableName === t.value.variableName && o(e.value.value, t.value.value);
    }))) throw c("Expected all fields on the same parent with the name or alias " + "'".concat(e.alias, "' to have the same name and arguments."), [e.loc, n.loc]);
    var t, r, a, i;
  }

  function g(e, n) {
    if (!e.handles) return n.handles;
    if (!n.handles) return e.handles;
    var t = new Map();
    return e.handles.concat(n.handles).forEach(function (e) {
      return t.set(e.name + e.key, e);
    }), Array.from(t.values());
  }

  e.exports = {
    transformWithOptions: function (e) {
      return function (n) {
        return m(n, e);
      };
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(4),
      a = t(24),
      i = a.printArguments,
      o = a.printDirectives;

  e.exports = function (e) {
    return "LinkedField" === e.kind || "ScalarField" === e.kind ? "Field: " + e.directives.length === 0 ? e.alias || e.name : (e.alias || e.name) + o(e.directives) : "ConnectionField" === e.kind ? "ConnectionField:" + e.label : "FragmentSpread" === e.kind ? "FragmentSpread:" + e.args.length === 0 ? e.name : e.name + i(e.args) : "ModuleImport" === e.kind ? "ModuleImport:" : "Defer" === e.kind ? "Defer:" + e.label : "Stream" === e.kind ? "Stream:" + e.label : "InlineFragment" === e.kind ? "InlineFragment:" + e.typeCondition.name : "ClientExtension" === e.kind ? "ClientExtension:" : "InlineDataFragmentSpread" === e.kind ? "InlineDataFragment:" + e.name : "Condition" === e.kind ? "Condition:" + ("Variable" === e.condition.kind ? "$" + e.condition.variableName : String(e.condition.value)) + String(e.passingValue) : void r(!1, "getIdentifierForSelection: Unexpected kind `%s`.", e.kind);
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0)(t(2)),
      a = t(5),
      i = t(4),
      o = t(73),
      l = t(3).createUserError;

  function s(e, n) {
    var t = this.traverse(e, n);
    if (0 === n.reachableArguments.length) return t;
    var a = this.getContext().serverSchema,
        i = o(a, e, n.reachableArguments, "@relay(unmask: true)");
    return (0, r.default)({}, t, {
      argumentDefinitions: i
    });
  }

  function u(e, n) {
    if (t = e, !Boolean(t.metadata && !1 === t.metadata.mask)) return e;
    var t;
    0 !== e.args.length && i(!1, "RelayMaskTransform: Cannot unmask fragment spread `%s` with arguments. Use the `ApplyFragmentArgumentTransform` before flattening", e.name);
    var r = this.getContext().getFragment(e.name),
        a = {
      kind: "InlineFragment",
      directives: e.directives,
      loc: {
        kind: "Derived",
        source: e.loc
      },
      metadata: e.metadata,
      selections: r.selections,
      typeCondition: r.type
    };
    if (r.directives.length > 0) throw new l("Cannot use @relay(mask: false) on fragment spreads for fragments with directives.", [e.loc, r.directives[0].loc]);
    var o = r.argumentDefinitions.find(function (e) {
      return "LocalArgumentDefinition" === e.kind;
    });
    if (null != o) throw l("RelayMaskTransform: Cannot use @relay(mask: false) on fragment spread because the fragment definition uses @argumentDefinitions.", [e.loc, o.loc]);
    var s = !0,
        u = !1,
        c = void 0;

    try {
      for (var f, d = r.argumentDefinitions[Symbol.iterator](); !(s = (f = d.next()).done); s = !0) {
        var m = f.value;
        n.reachableArguments.push(m);
      }
    } catch (e) {
      u = !0, c = e;
    } finally {
      try {
        s || null == d.return || d.return();
      } finally {
        if (u) throw c;
      }
    }

    return this.traverse(a, n);
  }

  e.exports = {
    transform: function (e) {
      return a.transform(e, {
        FragmentSpread: u,
        Fragment: s
      }, function () {
        return {
          reachableArguments: []
        };
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0),
      a = r(t(2)),
      i = r(t(6)),
      o = t(5),
      l = t(14),
      s = t(28),
      u = t(7).getRawType,
      c = t(3).createUserError,
      f = t(1),
      d = f.assertObjectType,
      m = f.isObjectType,
      p = f.GraphQLObjectType,
      h = f.GraphQLScalarType,
      v = f.GraphQLInterfaceType,
      g = f.GraphQLUnionType,
      y = f.GraphQLList,
      b = f.GraphQLString,
      k = f.getNullableType,
      w = t(11),
      S = w.getModuleComponentKey,
      _ = w.getModuleOperationKey,
      E = "supported",
      T = "JSDependency",
      F = "module",
      x = "id",
      C = "js";

  function D(e, n) {
    return this.traverse(e, (0, a.default)({}, n, {
      parentType: e.typeCondition
    }));
  }

  function A(e) {
    if (e.name === C) {
      var n = this.getContext().serverSchema.getType(T);
      if (null != n && n instanceof h && u(e.type).name === n.name) throw new c("Direct use of the '".concat(C, "' field is not allowed, use ") + "@match/@module instead.", [e.loc]);
    }

    return e;
  }

  function R(e, n) {
    n.path.push(e.alias);
    var t = this.traverse(e, (0, a.default)({}, n, {
      parentType: e.type
    }));
    n.path.pop();
    var r = t.directives.find(function (e) {
      return "match" === e.name;
    });
    if (null == r) return t;
    var o = n.parentType,
        l = u(o);
    if (!(l instanceof v || l instanceof p)) throw c("@match used on incompatible field '".concat(t.name, "'.") + "@match may only be used with fields whose parent type is an " + "interface or object, got invalid type '".concat(String(o), "'."), [e.loc]);
    var s = this.getContext(),
        f = l.getFields()[t.name].args.find(function (e) {
      return e.name === E;
    }),
        d = null != f ? k(f.type) : null,
        m = null != d && d instanceof y ? d.ofType : null;
    if (null == f || null == d || null == m || k(m) !== b) throw c("@match used on incompatible field '".concat(t.name, "'. ") + "@match may only be used with fields that accept a 'supported: [String!]!' argument.", [e.loc]);
    var h = u(t.type);
    if (!(h instanceof g || h instanceof v)) throw c("@match used on incompatible field '".concat(t.name, "'.") + "@match may only be used with fields that return a union or interface.", [e.loc]);
    var w = new Map(),
        S = [];
    if (t.selections.forEach(function (e) {
      if ("ScalarField" !== e.kind || "__typename" !== e.name) {
        var n = "InlineFragment" === e.kind ? e.selections[0] : null;
        if ("InlineFragment" !== e.kind || null == n || "ModuleImport" !== n.kind) throw c("Invalid @match selection: all selections should be fragment spreads with @module.", [e.loc]);
        var r = e.typeCondition,
            a = w.get(r);
        if (a) throw c("Invalid @match selection: each concrete variant/implementor of " + "'".concat(String(h), "' may be matched against at-most once, ") + "but '".concat(String(r), "' was matched against multiple times."), [e.loc, a.loc]);
        w.set(r, e);
        var i = h instanceof g ? h.getTypes() : s.serverSchema.getPossibleTypes(h);

        if (!i.some(function (e) {
          return e.name === r.name;
        })) {
          var o = "but no concrete types are defined.";
          throw 0 !== i.length && (o = "expected one of ".concat(i.slice(0, 3).map(function (e) {
            return "'".concat(String(e), "'");
          }).join(", "), ", etc.")), c("Invalid @match selection: selections must match against concrete variants/implementors of type " + "'".concat(String(t.type), "'. Got '").concat(String(r), "', ") + o, [e.loc, s.getFragment(n.name).loc]);
        }

        S.push(e);
      } else S.push(e);
    }), 0 === w.size) throw c("Invalid @match selection: expected at least one @module selection. Remove @match or add a '...Fragment @module()' selection.", [r.loc]);

    var _ = t.args.find(function (e) {
      return e.name === E;
    });

    if (null != _) throw c("Invalid @match selection: the '".concat(E, "' argument ") + "is automatically added and cannot be supplied explicitly.", [_.loc]);
    return {
      kind: "LinkedField",
      alias: t.alias,
      args: [].concat((0, i.default)(t.args), [{
        kind: "Argument",
        name: E,
        type: f.type,
        value: {
          kind: "Literal",
          loc: e.loc,
          metadata: {},
          value: Array.from(w.keys()).map(function (e) {
            return e.name;
          })
        },
        loc: e.loc,
        metadata: {}
      }]),
      directives: [],
      handles: null,
      loc: e.loc,
      metadata: null,
      name: t.name,
      type: t.type,
      selections: S
    };
  }

  function N(e, n) {
    var t,
        r,
        o,
        u,
        f,
        p,
        v,
        g = n.documentName,
        y = n.path,
        w = this.traverse(e),
        E = w.directives.find(function (e) {
      return "module" === e.name;
    });
    if (null == E) return w;
    if (0 !== e.args.length) throw c("@module does not support @arguments.", [null === (v = e.args[0]) || void 0 === v ? void 0 : v.loc].filter(Boolean));
    var D = this.getContext(),
        A = D.serverSchema.getType(T);
    if (null == A || !(A instanceof h)) throw c("Using @module requires the schema to define a scalar " + "'".concat(T, "' type."));
    var R = D.getFragment(e.name, e.loc);
    if (!m(R.type)) throw c("@module used on invalid fragment spread '...".concat(e.name, "'. @module ") + "may only be used with fragments on a concrete (object) type, " + "but the fragment has abstract type '".concat(String(R.type), "'."), [e.loc, R.loc]);
    var N = d(R.type).getFields()[C],
        L = N ? N.args.find(function (e) {
      return e.name === F;
    }) : null,
        I = N ? N.args.find(function (e) {
      return e.name === x;
    }) : null;
    if (null == N || null == L || k(L.type) !== b || null != I && k(I.type) !== b || N.type.name !== A.name) throw c("@module used on invalid fragment spread '...".concat(e.name, "'. @module ") + "requires the fragment type '".concat(String(R.type), "' to have a ") + "'".concat(C, "(").concat(F, ": String! ") + "[".concat(x, ": String]): ").concat(T, "' field (your ") + "schema may choose to omit the 'id'  argument but if present it must accept a 'String').", [E.loc]);
    if (1 !== e.directives.length) throw c("@module used on invalid fragment spread '...".concat(e.name, "'. @module ") + "may not have additional directives.", [e.loc]);
    var O,
        V = l(E.args).name;
    if ("string" != typeof V) throw c("Expected the 'name' argument of @module to be a literal string", [(null !== (O = E.args.find(function (e) {
      return "name" === e.name;
    })) && void 0 !== O ? O : e).loc]);
    var M = [g].concat((0, i.default)(y)).join("."),
        G = s(e.name) + ".graphql",
        P = {
      alias: S(g),
      args: [{
        kind: "Argument",
        name: F,
        type: L.type,
        value: {
          kind: "Literal",
          loc: null !== (t = null === (r = E.args[0]) || void 0 === r ? void 0 : r.loc) && void 0 !== t ? t : E.loc,
          metadata: {},
          value: V
        },
        loc: E.loc,
        metadata: {}
      }, null != I ? {
        kind: "Argument",
        name: x,
        type: I.type,
        value: {
          kind: "Literal",
          loc: null !== (o = null === (u = E.args[0]) || void 0 === u ? void 0 : u.loc) && void 0 !== o ? o : E.loc,
          metadata: {},
          value: M
        },
        loc: E.loc,
        metadata: {}
      } : null].filter(Boolean),
      directives: [],
      handles: null,
      kind: "ScalarField",
      loc: E.loc,
      metadata: {
        skipNormalizationNode: !0
      },
      name: C,
      type: A
    },
        j = {
      alias: _(g),
      args: [{
        kind: "Argument",
        name: F,
        type: L.type,
        value: {
          kind: "Literal",
          loc: E.loc,
          metadata: {},
          value: G
        },
        loc: E.loc,
        metadata: {}
      }, null != I ? {
        kind: "Argument",
        name: x,
        type: I.type,
        value: {
          kind: "Literal",
          loc: null !== (f = null === (p = E.args[0]) || void 0 === p ? void 0 : p.loc) && void 0 !== f ? f : E.loc,
          metadata: {},
          value: M
        },
        loc: E.loc,
        metadata: {}
      } : null].filter(Boolean),
      directives: [],
      handles: null,
      kind: "ScalarField",
      loc: E.loc,
      metadata: {
        skipNormalizationNode: !0
      },
      name: C,
      type: A
    };
    return {
      kind: "InlineFragment",
      directives: [],
      loc: E.loc,
      metadata: null,
      selections: [{
        kind: "ModuleImport",
        loc: E.loc,
        documentName: g,
        id: M,
        module: V,
        name: e.name,
        selections: [(0, a.default)({}, e, {
          directives: e.directives.filter(function (e) {
            return e !== E;
          })
        }), j, P]
      }],
      typeCondition: R.type
    };
  }

  e.exports = {
    SCHEMA_EXTENSION: "\n  directive @match on FIELD\n\n  directive @module(\n    name: String!\n  ) on FRAGMENT_SPREAD\n",
    transform: function (e) {
      return o.transform(e, {
        FragmentSpread: N,
        LinkedField: R,
        InlineFragment: D,
        ScalarField: A
      }, function (e) {
        return {
          documentName: e.name,
          parentType: e.type,
          path: []
        };
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0),
      a = r(t(2)),
      i = r(t(6)),
      o = t(16),
      l = t(7),
      s = t(14),
      u = t(53),
      c = t(54),
      f = t(26),
      d = t(3),
      m = d.createCombinedError,
      p = d.createCompilerError,
      h = d.createUserError,
      v = d.eachWithErrors,
      g = t(1),
      y = g.assertAbstractType,
      b = g.assertCompositeType,
      k = g.getNullableType,
      w = g.GraphQLID,
      S = g.GraphQLInterfaceType,
      _ = g.GraphQLList,
      E = g.GraphQLNonNull,
      T = g.GraphQLObjectType,
      F = (g.GraphQLSchema, l.isAbstractType),
      x = l.implementsInterface,
      C = l.generateIDField,
      D = "Viewer",
      A = "viewer",
      R = "Node",
      N = "node";

  function L(e, n) {
    var t = y(b(e));
    return n.getPossibleTypes(t);
  }

  function I(e) {
    return e.map(function (e) {
      return "LocalArgumentDefinition" === e.kind ? e : {
        kind: "LocalArgumentDefinition",
        name: e.name,
        type: e.type,
        defaultValue: null,
        loc: e.loc,
        metadata: null
      };
    });
  }

  function O(e) {
    var n = [],
        t = !0,
        r = !1,
        a = void 0;

    try {
      for (var i, o = e.argumentDefinitions[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
        var l = i.value;
        "LocalArgumentDefinition" === l.kind && n.push({
          kind: "Argument",
          loc: {
            kind: "Derived",
            source: l.loc
          },
          metadata: null,
          name: l.name,
          type: l.type,
          value: {
            kind: "Variable",
            loc: {
              kind: "Derived",
              source: l.loc
            },
            metadata: null,
            variableName: l.name,
            type: l.type
          }
        });
      }
    } catch (e) {
      r = !0, a = e;
    } finally {
      try {
        t || null == o.return || o.return();
      } finally {
        if (r) throw a;
      }
    }

    return {
      args: n,
      directives: [],
      kind: "FragmentSpread",
      loc: {
        kind: "Derived",
        source: e.loc
      },
      metadata: null,
      name: e.name
    };
  }

  function V(e) {
    return e.selections.find(function (e) {
      return "ScalarField" === e.kind && "id" === e.name && "id" === e.alias && c(k(e.type), w);
    }) ? e : (0, a.default)({}, e, {
      selections: [].concat((0, i.default)(e.selections), [C(w)])
    });
  }

  function M(e, n) {
    var t;
    return null !== (t = e.args.find(function (e) {
      return e.name === n;
    })) && void 0 !== t ? t : null;
  }

  e.exports = {
    SCHEMA_EXTENSION: "\n  directive @refetchable(\n    queryName: String!\n  ) on FRAGMENT_DEFINITION\n",
    transform: function (e) {
      var n = e.serverSchema,
          t = n.getQueryType();
      if (null == t) throw h("Expected the schema to define a query type.");

      var r = function (e) {
        var n = new Map(),
            t = v(e.documents(), function (e) {
          if ("Fragment" === e.kind) {
            var t = function (e) {
              var n = e.directives.find(function (e) {
                return "refetchable" === e.name;
              });
              if (null == n) return null;
              var t = s(n.args).queryName;

              if ("string" != typeof t) {
                var r,
                    a = n.args.find(function (e) {
                  return "queryName" === e.name;
                });
                throw p("Expected the 'name' argument of @refetchable to be a string, got '".concat(String(t), "'."), [null !== (r = null == a ? void 0 : a.loc) && void 0 !== r ? r : n.loc]);
              }

              return t;
            }(e);

            if (null !== t) {
              var r = n.get(t);
              if (null != r) throw h("Duplicate definition for @refetchable operation '".concat(t, "' from fragments '").concat(e.name, "' and '").concat(r.name, "'"), [e.loc, r.loc]);
              n.set(t, e);
            }
          }
        });
        if (null != t && 0 !== t.length) throw m(t, "RelayRefetchableFragmentTransform");
        var r = u(e);
        return new Map(Array.from(n.entries(), function (e) {
          var n = e[0],
              t = e[1];
          return [n, r.getFragment(t.name)];
        }));
      }(e),
          l = e,
          d = v(r, function (e) {
        var r,
            s = e[0],
            u = e[1];
        if (c(u.type, t)) r = function (e, n, t) {
          var r = f(e.getQueryType());
          return {
            path: [],
            node: {
              argumentDefinitions: I(n.argumentDefinitions),
              directives: [],
              kind: "Root",
              loc: {
                kind: "Derived",
                source: n.loc
              },
              metadata: null,
              name: t,
              operation: "query",
              selections: [O(n)],
              type: r
            },
            transformedFragment: n
          };
        }(n, u, s);else if (String(u.type) === D) r = function (e, n, t) {
          var r = f(e.getQueryType()),
              a = e.getType(D),
              i = r.getFields()[A];
          if (!(a instanceof T && null != i && i.type instanceof T && c(i.type, a) && 0 === i.args.length && c(n.type, a))) throw h("Invalid use of @refetchable on fragment '".concat(n.name, "', check that your schema defines a 'Viewer' object type and has a 'viewer: Viewer' field on the query type."), [n.loc]);
          return {
            path: [A],
            node: {
              argumentDefinitions: I(n.argumentDefinitions),
              directives: [],
              kind: "Root",
              loc: {
                kind: "Derived",
                source: n.loc
              },
              metadata: null,
              name: t,
              operation: "query",
              selections: [{
                alias: A,
                args: [],
                directives: [],
                handles: null,
                kind: "LinkedField",
                loc: {
                  kind: "Derived",
                  source: n.loc
                },
                metadata: null,
                name: A,
                selections: [O(n)],
                type: a
              }],
              type: r
            },
            transformedFragment: n
          };
        }(n, u, s);else {
          if (!(String(u.type) === R || u.type instanceof T && u.type.getInterfaces().some(function (e) {
            return String(e) === R;
          }) || F(u.type) && L(u.type, n).every(function (e) {
            return x(e, R);
          }))) throw h("Invalid use of @refetchable on fragment '".concat(u.name, "', only fragments on the Query type, Viewer type, Node type, or types implementing Node are supported."), [u.loc]);

          r = function (e, n, t) {
            var r = f(e.getQueryType()),
                a = e.getType(R),
                o = r.getFields()[N];
            if (!(a instanceof S && null != o && o.type instanceof S && c(o.type, a) && 1 === o.args.length && "id" === o.args[0].name && c(k(o.args[0].type), w) && (n.type instanceof T && n.type.getInterfaces().some(function (e) {
              return c(e, a);
            }) || F(n.type) && L(n.type, e).every(function (e) {
              return e.getInterfaces().some(function (e) {
                return c(e, a);
              });
            })))) throw h("Invalid use of @refetchable on fragment '".concat(n.name, "', check that your schema defines a 'Node { id: ID }' interface and has a 'node(id: ID): Node' field on the query type (the id argument may also be non-null)."), [n.loc]);
            var l = I(n.argumentDefinitions),
                s = l.find(function (e) {
              return "id" === e.name;
            });
            if (null != s) throw h("Invalid use of @refetchable on fragment '".concat(n.name, "', this fragment already has an '$id' variable in scope."), [s.loc]);
            var u = new E(w),
                d = [].concat((0, i.default)(l), [{
              defaultValue: null,
              kind: "LocalArgumentDefinition",
              loc: {
                kind: "Derived",
                source: n.loc
              },
              metadata: null,
              name: "id",
              type: u
            }]);
            return {
              path: [N],
              node: {
                argumentDefinitions: d,
                directives: [],
                kind: "Root",
                loc: {
                  kind: "Derived",
                  source: n.loc
                },
                metadata: null,
                name: t,
                operation: "query",
                selections: [{
                  alias: N,
                  args: [{
                    kind: "Argument",
                    loc: {
                      kind: "Derived",
                      source: n.loc
                    },
                    metadata: null,
                    name: "id",
                    type: u,
                    value: {
                      kind: "Variable",
                      loc: {
                        kind: "Derived",
                        source: n.loc
                      },
                      metadata: null,
                      variableName: "id",
                      type: u
                    }
                  }],
                  directives: [],
                  handles: null,
                  kind: "LinkedField",
                  loc: {
                    kind: "Derived",
                    source: n.loc
                  },
                  metadata: null,
                  name: N,
                  selections: [O(n)],
                  type: a
                }],
                type: r
              },
              transformedFragment: V(n)
            };
          }(n, u, s);
        }

        if (null != r) {
          var d,
              m = r,
              p = m.path,
              v = m.node,
              g = m.transformedFragment,
              y = function (e) {
            var n = [],
                t = null,
                r = null;

            if (o.visit(e, {
              LinkedField: {
                enter: function (a) {
                  if (n.push(a), a.handles && a.handles.some(function (e) {
                    return "connection" === e.name;
                  }) || a.directives.some(function (e) {
                    return "connection" === e.name || "stream_connection" === e.name;
                  })) {
                    if (null != t) throw h("Invalid use of @refetchable with @connection in fragment '".concat(e.name, "', at most once @connection can appear in a refetchable fragment."), [a.loc]);
                    var i = n.find(function (e) {
                      return k(e.type) instanceof _;
                    });
                    if (i) throw h("Invalid use of @refetchable with @connection in fragment '".concat(e.name, "', refetchable connections cannot appear inside plural fields."), [a.loc, i.loc]);
                    t = a, r = n.map(function (e) {
                      return e.alias;
                    });
                  }
                },
                leave: function () {
                  n.pop();
                }
              }
            }), null != t && null != r) {
              var a = null,
                  i = M(t, "before"),
                  l = M(t, "last");

              if (i || l) {
                if (!i || !l || "Variable" !== i.value.kind || "Variable" !== l.value.kind) throw h("Invalid use of @refetchable with @connection in fragment '".concat(e.name, "', refetchable connections must use variables for the before and last arguments."), [t.loc, i && "Variable" !== i.value.kind ? i.value.loc : null, l && "Variable" !== l.value.kind ? l.value.loc : null].filter(Boolean));
                a = {
                  count: l.value.variableName,
                  cursor: i.value.variableName
                };
              }

              var s = null,
                  u = M(t, "after"),
                  c = M(t, "first");

              if (u || c) {
                if (!u || !c || "Variable" !== u.value.kind || "Variable" !== c.value.kind) throw h("Invalid use of @refetchable with @connection in fragment '".concat(e.name, "', refetchable connections must use variables for the after and first arguments."), [t.loc, u && "Variable" !== u.value.kind ? u.value.loc : null, c && "Variable" !== c.value.kind ? c.value.loc : null].filter(Boolean));
                s = {
                  count: c.value.variableName,
                  cursor: u.value.variableName
                };
              }

              return {
                forward: s,
                backward: a,
                path: r
              };
            }
          }(g);

          l = (l = l.replace((0, a.default)({}, g, {
            metadata: (0, a.default)({}, g.metadata || {}, {
              refetch: {
                connection: null !== (d = y) && void 0 !== d ? d : null,
                operation: s,
                fragmentPathInResult: p
              }
            })
          }))).add((0, a.default)({}, v, {
            metadata: (0, a.default)({}, v.metadata || {}, {
              derivedFrom: g.name,
              isRefetchableQuery: !0
            })
          }));
        }
      });

      if (null != d && d.length) throw m(d, "RelayRefetchableFragmentTransform");
      return l;
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0)(t(2)),
      a = t(19),
      i = t(16),
      o = t(3).createCompilerError,
      l = t(1),
      s = l.GraphQLNonNull,
      u = l.GraphQLBoolean,
      c = l.GraphQLString;

  function f(e, n, t) {
    var r = t.name,
        a = n.get(r);
    if (null != a) return a;
    var i = new Map();
    return t.argumentDefinitions.forEach(function (e) {
      "LocalArgumentDefinition" === e.kind && i.set(e.name, e);
    }), n.set(r, i), d(e, n, i, t), n.set(r, i), i;
  }

  function d(e, n, t, r) {
    i.visit(r, {
      FragmentSpread: function (r) {
        var a = e.getFragment(r.name, r.loc),
            i = f(e, n, a);
        r.args.forEach(function (e) {
          var n = i.get(e.name);
          null == n || "Variable" !== e.value.kind || t.has(e.value.variableName) || t.set(e.value.variableName, {
            kind: "RootArgumentDefinition",
            loc: {
              kind: "Derived",
              source: e.loc
            },
            metadata: null,
            name: e.value.variableName,
            type: n.type
          });
        });
        var o = !0,
            l = !1,
            s = void 0;

        try {
          for (var u, c = i.values()[Symbol.iterator](); !(o = (u = c.next()).done); o = !0) {
            var d = u.value;
            "RootArgumentDefinition" !== d.kind || t.has(d.name) || t.set(d.name, d);
          }
        } catch (e) {
          l = !0, s = e;
        } finally {
          try {
            o || null == c.return || c.return();
          } finally {
            if (l) throw s;
          }
        }

        return !1;
      },
      Argument: function (e) {
        var n;
        if ("Variable" !== e.value.kind) return !1;
        var r = e.value,
            a = null !== (n = r.type) && void 0 !== n ? n : e.type;
        return null != a ? (t.has(r.variableName) || t.set(r.variableName, {
          kind: "RootArgumentDefinition",
          loc: {
            kind: "Derived",
            source: e.loc
          },
          metadata: null,
          name: r.variableName,
          type: a
        }), !1) : void 0;
      },
      Condition: function (e) {
        var n,
            r = e.condition;

        if ("Variable" === r.kind) {
          var a = null !== (n = r.type) && void 0 !== n ? n : new s(u);
          t.has(r.variableName) || t.set(r.variableName, {
            kind: "RootArgumentDefinition",
            loc: {
              kind: "Derived",
              source: r.loc
            },
            metadata: null,
            name: r.variableName,
            type: a
          });
        }
      },
      Defer: function (e) {
        var n,
            r = e.if;

        if (null != r && "Variable" === r.kind) {
          var a = null !== (n = r.type) && void 0 !== n ? n : new s(u);
          t.has(r.variableName) || t.set(r.variableName, {
            kind: "RootArgumentDefinition",
            loc: {
              kind: "Derived",
              source: r.loc
            },
            metadata: null,
            name: r.variableName,
            type: a
          });
        }
      },
      Stream: function (e) {
        var n,
            r = e.if;

        if (null != r && "Variable" === r.kind) {
          var a = null !== (n = r.type) && void 0 !== n ? n : new s(u);
          t.has(r.variableName) || t.set(r.variableName, {
            kind: "RootArgumentDefinition",
            loc: {
              kind: "Derived",
              source: r.loc
            },
            metadata: null,
            name: r.variableName,
            type: a
          });
        }
      },
      LinkedField: function (e) {
        e.handles && e.handles.forEach(function (e) {
          var n,
              r = e.dynamicKey;

          if (null != r) {
            var a = null !== (n = r.type) && void 0 !== n ? n : c;
            t.has(r.variableName) || t.set(r.variableName, {
              kind: "RootArgumentDefinition",
              loc: {
                kind: "Derived",
                source: r.loc
              },
              metadata: null,
              name: r.variableName,
              type: a
            });
          }
        });
      }
    });
  }

  e.exports = function (e) {
    var n = new Map();
    return new a(e.serverSchema, e.clientSchema).addAll(Array.from(e.documents(), function (t) {
      switch (t.kind) {
        case "Fragment":
          var a = f(e, n, t);
          return (0, r.default)({}, t, {
            argumentDefinitions: Array.from(a.values())
          });

        case "Root":
          return function (e, n, t) {
            var a = new Map(),
                i = new Map(),
                l = !0,
                s = !1,
                u = void 0;

            try {
              for (var c, f = t.argumentDefinitions.entries()[Symbol.iterator](); !(l = (c = f.next()).done); l = !0) {
                var m = c.value,
                    p = m[0],
                    h = m[1];
                "LocalArgumentDefinition" === h.kind && i.set(p, h);
              }
            } catch (e) {
              s = !0, u = e;
            } finally {
              try {
                l || null == f.return || f.return();
              } finally {
                if (s) throw u;
              }
            }

            return d(e, n, a, t), (0, r.default)({}, t, {
              argumentDefinitions: Array.from(a.values(), function (e) {
                var n, t;
                if ("RootArgumentDefinition" !== e.kind) throw o("inferRootArgumentDefinitions: Expected inferred variable '$".concat(e.name, "' to be a root variables."), [e.loc]);
                var r = i.get(e.name);
                return {
                  defaultValue: null !== (n = null == r ? void 0 : r.defaultValue) && void 0 !== n ? n : null,
                  kind: "LocalArgumentDefinition",
                  loc: e.loc,
                  metadata: null,
                  name: e.name,
                  type: null !== (t = null == r ? void 0 : r.type) && void 0 !== t ? t : e.type
                };
              })
            });
          }(e, n, t);

        case "SplitOperation":
          return t;

        default:
          throw o("inferRootArgumentDefinitions: Unsupported kind '".concat(t.kind, "'."));
      }
    }));
  };
}, function (e, n, t) {
  "use strict";

  var r = t(7).getRawType,
      a = t(1),
      i = a.GraphQLNonNull,
      o = a.GraphQLList;

  e.exports = function e(n, t) {
    if (n === t) return !0;
    if (n instanceof i && t instanceof i) return e(n.ofType, t.ofType);
    if (n instanceof o && t instanceof o) return e(n.ofType, t.ofType);

    if (n.constructor.name === t.constructor.name) {
      var a = r(n),
          l = r(t);
      return a.name === l.name;
    }

    return !1;
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0)(t(2)),
      a = t(5),
      i = t(14),
      o = t(4),
      l = "relay";

  function s(e) {
    return function (n) {
      var t = n.directives.find(function (e) {
        return e.name === l;
      });
      if (!t) return this.traverse(n);
      var a = i(t.args),
          o = e(a);
      return this.traverse((0, r.default)({}, n, {
        directives: n.directives.filter(function (e) {
          return e !== t;
        }),
        metadata: (0, r.default)({}, n.metadata || {}, o)
      }));
    };
  }

  function u(e) {
    var n = e.mask,
        t = e.plural;
    return void 0 !== t && "boolean" != typeof t && o(!1, 'RelayRelayDirectiveTransform: Expected the "plural" argument to @relay to be a boolean literal if specified.'), void 0 !== n && "boolean" != typeof n && o(!1, 'RelayRelayDirectiveTransform: Expected the "mask" argument to @relay to be a boolean literal if specified.'), {
      mask: n,
      plural: t
    };
  }

  function c(e) {
    var n = e.mask;
    return void 0 !== n && "boolean" != typeof n && o(!1, 'RelayRelayDirectiveTransform: Expected the "mask" argument to @relay to be a boolean literal if specified.'), {
      mask: n
    };
  }

  e.exports = {
    RELAY: l,
    SCHEMA_EXTENSION: "\ndirective @relay(\n  # Marks a connection field as containing nodes without 'id' fields.\n  # This is used to silence the warning when diffing connections.\n  isConnectionWithoutNodeID: Boolean,\n\n  # Marks a fragment as intended for pattern matching (as opposed to fetching).\n  # Used in Classic only.\n  pattern: Boolean,\n\n  # Marks a fragment as being backed by a GraphQLList.\n  plural: Boolean,\n\n  # Marks a fragment spread which should be unmasked if provided false\n  mask: Boolean = true,\n\n  # Selectively pass variables down into a fragment. Only used in Classic.\n  variables: [String!],\n) on FRAGMENT_DEFINITION | FRAGMENT_SPREAD | INLINE_FRAGMENT | FIELD\n",
    transform: function (e) {
      return a.transform(e, {
        Fragment: s(u),
        FragmentSpread: s(c)
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(4),
      a = t(29);
  e.exports = {
    anyTypeAlias: function (e) {
      return a.typeAlias(a.identifier(e), null, a.anyTypeAnnotation());
    },
    declareExportOpaqueType: function (e, n) {
      return a.declareExportDeclaration(a.declareOpaqueType(a.identifier(e), null, a.genericTypeAnnotation(a.identifier(n))));
    },
    exactObjectTypeAnnotation: function (e) {
      var n = a.objectTypeAnnotation(e);
      return n.exact = !0, n;
    },
    exportType: function (e, n) {
      return a.exportNamedDeclaration(a.typeAlias(a.identifier(e), null, n), [], null);
    },
    exportTypes: function (e) {
      var n = a.exportNamedDeclaration(null, e.map(function (e) {
        return a.exportSpecifier(a.identifier(e), a.identifier(e));
      }), null);
      return n.exportKind = "type", n;
    },
    importTypes: function (e, n) {
      var t = a.importDeclaration(e.map(function (e) {
        return a.importSpecifier(a.identifier(e), a.identifier(e));
      }), a.stringLiteral(n));
      return t.importKind = "type", t;
    },
    intersectionTypeAnnotation: function (e) {
      return e.length > 0 || r(!1, "RelayFlowBabelFactories: cannot create an intersection of 0 types"), 1 === e.length ? e[0] : a.intersectionTypeAnnotation(e);
    },
    lineComments: function () {
      for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];

      return n.map(function (e) {
        return {
          type: "CommentLine",
          value: " " + e
        };
      });
    },
    readOnlyArrayOfType: function (e) {
      return a.genericTypeAnnotation(a.identifier("$ReadOnlyArray"), a.typeParameterInstantiation([e]));
    },
    readOnlyObjectTypeProperty: function (e, n) {
      var t = a.objectTypeProperty(a.identifier(e), n);
      return t.variance = a.variance("plus"), t;
    },
    stringLiteralTypeAnnotation: function (e) {
      return a.stringLiteralTypeAnnotation(e);
    },
    unionTypeAnnotation: function (e) {
      return e.length > 0 || r(!1, "RelayFlowBabelFactories: cannot create a union of 0 types"), 1 === e.length ? e[0] : a.unionTypeAnnotation(e);
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(76),
      a = t(47),
      i = t(77),
      o = t(48),
      l = t(78),
      s = t(79),
      u = t(80),
      c = t(81),
      f = t(84),
      d = t(86),
      m = t(87),
      p = t(27),
      h = t(88),
      v = t(89),
      g = t(50),
      y = t(51),
      b = t(52),
      k = t(55),
      w = t(90),
      S = t(91),
      _ = t(92),
      E = t(93),
      T = t(94),
      F = t(95),
      x = [f.SCHEMA_EXTENSION, y.SCHEMA_EXTENSION, a.SCHEMA_EXTENSION, k.SCHEMA_EXTENSION, b.SCHEMA_EXTENSION, _.SCHEMA_EXTENSION, l.SCHEMA_EXTENSION, p.SCHEMA_EXTENSION],
      C = [f.transform, k.transform, g.transform, y.transform, a.transform, b.transform],
      D = [r.transform, m.transform, l.transform, o.transformWithOptions({
    flattenAbstractTypes: !0
  }), T.transform],
      A = [c.transform, h.transform, d.transform, _.transform],
      R = [F.transform, S.transform, s.transform, r.transform, o.transformWithOptions({
    flattenAbstractTypes: !0
  }), T.transform, v.transform, i.transform, u.transformWithOptions({
    removeUnusedVariables: !1
  })],
      N = [r.transform, E.transform, F.transform, o.transformWithOptions({}), v.transform, w.transform, i.transform, u.transformWithOptions({
    removeUnusedVariables: !0
  })];

  e.exports = {
    commonTransforms: C,
    codegenTransforms: R,
    fragmentTransforms: D,
    printTransforms: N,
    queryTransforms: A,
    schemaExtensions: x
  };
}, function (e, n, t) {
  "use strict";

  var r = t(4);

  e.exports = function e(n) {
    switch (n.kind) {
      case "Variable":
        return {
          variable: n.variableName
        };

      case "Literal":
        return {
          value: n.value
        };

      case "ListValue":
        return {
          list: n.items.map(function (n) {
            return e(n);
          })
        };

      case "ObjectValue":
        return {
          object: n.fields.map(function (n) {
            return {
              name: n.name,
              value: e(n.value)
            };
          })
        };

      default:
        r(!1, "getIdentifierForArgumentValue(): Unsupported AST kind `%s`.", n.kind);
    }
  };
}, function (e, n, t) {
  "use strict";

  e.exports = {
    hasUnaliasedSelection: function (e, n) {
      return e.selections.some(function (e) {
        return "ScalarField" === e.kind && e.alias === n && e.name === n;
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(4),
      a = t(3),
      i = a.createCombinedError,
      o = a.eachWithErrors;

  var l = function () {
    function e(e, n) {
      this._context = e, this._states = [], this._visitor = n;
    }

    var n = e.prototype;
    return n.getContext = function () {
      return this._context;
    }, n.visit = function (e, n) {
      this._states.push(n), this._visit(e), this._states.pop();
    }, n.traverse = function (e, n) {
      this._states.push(n), this._traverse(e), this._states.pop();
    }, n._visit = function (e) {
      var n = this._visitor[e.kind];

      if (n) {
        var t = this._getState();

        n.call(this, e, t);
      } else this._traverse(e);
    }, n._traverse = function (e) {
      switch (e.kind) {
        case "Argument":
          this._traverseChildren(e, null, ["value"]);

          break;

        case "Literal":
        case "LocalArgumentDefinition":
        case "RootArgumentDefinition":
        case "Variable":
          break;

        case "Defer":
          this._traverseChildren(e, ["selections"], ["if"]);

          break;

        case "Stream":
          this._traverseChildren(e, ["selections"], ["if", "initialCount"]);

          break;

        case "ClientExtension":
          this._traverseChildren(e, ["selections"]);

          break;

        case "Directive":
          this._traverseChildren(e, ["args"]);

          break;

        case "ModuleImport":
          this._traverseChildren(e, ["selections"]);

          break;

        case "FragmentSpread":
        case "ScalarField":
          this._traverseChildren(e, ["args", "directives"]);

          break;

        case "InlineDataFragmentSpread":
          this._traverseChildren(e, ["selections"]);

          break;

        case "LinkedField":
        case "ConnectionField":
          this._traverseChildren(e, ["args", "directives", "selections"]);

          break;

        case "ListValue":
          this._traverseChildren(e, ["items"]);

          break;

        case "ObjectFieldValue":
          this._traverseChildren(e, null, ["value"]);

          break;

        case "ObjectValue":
          this._traverseChildren(e, ["fields"]);

          break;

        case "Condition":
          this._traverseChildren(e, ["directives", "selections"], ["condition"]);

          break;

        case "InlineFragment":
          this._traverseChildren(e, ["directives", "selections"]);

          break;

        case "Fragment":
        case "Root":
          this._traverseChildren(e, ["argumentDefinitions", "directives", "selections"]);

          break;

        case "Request":
          this._traverseChildren(e, null, ["fragment", "root"]);

          break;

        case "SplitOperation":
          this._traverseChildren(e, ["selections"]);

          break;

        default:
          r(!1, "GraphQLIRValidator: Unknown kind `%s`.", e.kind);
      }
    }, n._traverseChildren = function (e, n, t) {
      var a = this;
      n && n.forEach(function (n) {
        var t = e[n];
        t && (Array.isArray(t) || r(!1, "GraphQLIRValidator: Expected data for `%s` to be an array, got `%s`.", n, t), t.forEach(function (e) {
          return a._visit(e);
        }));
      }), t && t.forEach(function (n) {
        var t = e[n];
        t && a._visit(t);
      });
    }, n._getState = function () {
      return this._states.length || r(!1, "GraphQLIRValidator: Expected a current state to be set but found none. This is usually the result of mismatched number of pushState()/popState() calls."), this._states[this._states.length - 1];
    }, e;
  }();

  e.exports = {
    validate: function (e, n, t) {
      var r = new l(e, n),
          a = o(e.documents(), function (e) {
        if (void 0 === t) r.visit(e, void 0);else {
          var n = t(e);
          null != n && r.visit(e, n);
        }
      });
      if (null != a && 0 !== a.length) throw i(a);
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0)(t(6)),
      a = t(20),
      i = t(1),
      o = t(8),
      l = t(13),
      s = t(4),
      u = t(9),
      c = t(99).memoizedFind,
      f = o.instrument(i.parse, "GraphQL.parse");

  e.exports = function (e) {
    var n = c.bind(null, e);

    function t(e, n) {
      var t = o(e, n);
      if (t) return t.document;
    }

    function o(e, t) {
      var a = u.join(e, t.relPath),
          o = "";

      try {
        o = l.readFileSync(a, "utf8");
      } catch (e) {
        s(!1, "RelaySourceModuleParser: Files should be filtered before passed to the parser, got unfiltered file `%s`.", t.relPath);
      }

      var c = [],
          d = [];
      return n(o, e, t).forEach(function (e) {
        var n = new i.Source(e, t.relPath),
            a = f(n);
        a.definitions.length || s(!1, "RelaySourceModuleParser: Expected GraphQL text to contain at least one definition (fragment, mutation, query, subscription), got `%s`.", e), d.push(n.body), c.push.apply(c, (0, r.default)(a.definitions));
      }), {
        document: {
          kind: "Document",
          definitions: c
        },
        sources: d
      };
    }

    return {
      getParser: function (e) {
        return new a({
          baseDir: e,
          parse: t
        });
      },
      getFileFilter: function (e) {
        return function (n) {
          var t = u.join(e, n.relPath),
              r = "";

          try {
            r = l.readFileSync(t, "utf8");
          } catch (e) {
            return console.warn('RelaySourceModuleParser: Unable to read the file "'.concat(t, '". Looks like it was removed.')), !1;
          }

          return r.indexOf("graphql") >= 0;
        };
      },
      parseFile: t,
      parseFileWithSources: o
    };
  };
}, function (e, n) {
  e.exports = require("@babel/runtime/helpers/defineProperty");
}, function (e, n, t) {
  "use strict";

  e.exports = function (e) {
    e.moduleName;
    var n = e.documentType,
        t = e.docText,
        r = e.concreteText,
        a = e.typeText,
        i = e.hash,
        o = e.sourceHash,
        l = n ? "import type { ".concat(n, " } from 'relay-runtime';") : "",
        s = t ? "\n/*\n" + t.trim() + "\n*/\n" : "",
        u = i ? "\n * ".concat(i) : "";
    return "/**\n * ".concat("@", "flow", u, "\n */\n\n/* eslint-disable */\n\n'use strict';\n\n/*::\n").concat(l, "\n").concat(a || "", "\n*/\n\n").concat(s, "\nconst node/*: ").concat(n || "empty", "*/ = ").concat(r, ";\n// prettier-ignore\n(node/*: any*/).hash = '").concat(o, "';\nmodule.exports = node;\n");
  };
}, function (e, n, t) {
  "use strict";

  var r = t(20),
      a = t(30),
      i = t(17),
      o = t(23),
      l = t(32),
      s = t(33),
      u = t(35),
      c = t(36),
      f = t(19),
      d = t(8),
      m = t(37),
      p = t(24),
      h = t(5),
      v = t(16),
      g = t(68),
      y = t(7),
      b = t(18),
      k = t(39),
      w = t(40),
      S = t(27),
      _ = t(57),
      E = t(96),
      T = t(25),
      F = t(61),
      x = t(21),
      C = t(103),
      D = t(43),
      A = t(44),
      R = t(63),
      N = t(58),
      L = t(14),
      I = t(28),
      O = t(54),
      V = t(31),
      M = t(45),
      G = t(104).main,
      P = t(107).SourceControlMercurial,
      j = t(46),
      q = j.getReaderSourceDefinitionName,
      Q = j.getSourceDefinitionName,
      U = F(c.find);

  e.exports = {
    relayCompiler: G,
    ASTConvert: a,
    CodegenDirectory: o,
    CodegenRunner: l,
    CodegenWatcher: s,
    CodeMarker: i,
    CompilerContext: f,
    ConsoleReporter: m,
    DotGraphQLParser: u,
    ASTCache: r,
    IRTransformer: h,
    IRVisitor: v,
    Printer: p,
    Profiler: d,
    Rollout: C,
    SchemaUtils: y,
    SourceControlMercurial: P,
    WatchmanClient: b,
    filterContextForNode: A,
    getIdentifierForArgumentValue: N,
    getNormalizationOperationName: I,
    getLiteralArgumentValues: L,
    isEquivalentType: O,
    nullthrows: V,
    Parser: T,
    Validator: x,
    CodeGenerator: k,
    FlowGenerator: S,
    GraphQLCompilerContext: f,
    FileWriter: w,
    IRTransforms: _,
    IRValidations: E,
    JSModuleParser: U,
    MultiReporter: g,
    Runner: l,
    compileRelayArtifacts: D,
    formatGeneratedModule: R,
    convertASTDocuments: a.convertASTDocuments,
    transformASTSchema: a.transformASTSchema,
    getReaderSourceDefinitionName: q,
    getSourceDefinitionName: Q,
    writeRelayGeneratedFile: M
  };
}, function (e, n) {
  e.exports = require("fb-watchman");
}, function (e, n) {
  e.exports = require("@babel/parser");
}, function (e, n) {
  e.exports = require("chalk");
}, function (e, n, t) {
  "use strict";

  var r = function () {
    function e() {
      for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];

      this._reporters = n;
    }

    var n = e.prototype;
    return n.reportMessage = function (e) {
      this._reporters.forEach(function (n) {
        n.reportMessage(e);
      });
    }, n.reportTime = function (e, n) {
      this._reporters.forEach(function (t) {
        t.reportTime(e, n);
      });
    }, n.reportError = function (e, n) {
      this._reporters.forEach(function (t) {
        t.reportError(e, n);
      });
    }, e;
  }();

  e.exports = r;
}, function (e, n, t) {
  "use strict";

  var r = t(0),
      a = r(t(2)),
      i = r(t(6)),
      o = t(17),
      l = t(7),
      s = t(3),
      u = s.createCompilerError,
      c = s.createUserError,
      f = t(1).GraphQLList,
      d = t(11),
      m = d.getStorageKey,
      p = d.stableCopy,
      h = l.getRawType,
      v = l.isAbstractType,
      g = l.getNullableType;

  function y(e) {
    var n = [];
    return e.forEach(function (e) {
      switch (e.kind) {
        case "Condition":
          n.push(function (e, n) {
            if ("Variable" !== e.condition.kind) throw u("NormalizationCodeGenerator: Expected 'Condition' with static value to be pruned or inlined", [e.condition.loc]);
            return {
              kind: "Condition",
              passingValue: e.passingValue,
              condition: e.condition.variableName,
              selections: y(e.selections)
            };
          }(e));
          break;

        case "ClientExtension":
          n.push({
            kind: "ClientExtension",
            selections: y(e.selections)
          });
          break;

        case "ScalarField":
          n.push.apply(n, (0, i.default)(function (e) {
            var n;
            if (null === (n = e.metadata) || void 0 === n ? void 0 : n.skipNormalizationNode) return [];
            var t = e.handles && e.handles.map(function (n) {
              if (null != n.dynamicKey) throw c("Dynamic key values are not supported on scalar fields.", [n.dynamicKey.loc]);
              return {
                kind: "ScalarHandle",
                alias: e.alias === e.name ? null : e.alias,
                name: e.name,
                args: k(e.args),
                handle: n.name,
                key: n.key,
                filters: n.filters
              };
            }) || [],
                r = {
              kind: "ScalarField",
              alias: e.alias === e.name ? null : e.alias,
              name: e.name,
              args: k(e.args),
              storageKey: null
            },
                i = S(r, e.metadata);
            i && (r = (0, a.default)({}, r, {
              storageKey: i
            }));
            return [r].concat(t);
          }(e)));
          break;

        case "ModuleImport":
          n.push(function (e, n) {
            var t = e.name,
                r = t.match(/^([a-zA-Z][a-zA-Z0-9]*)(?:_([a-zA-Z][_a-zA-Z0-9]*))?$/);
            if (!r) throw u("NormalizationCodeGenerator: @module fragments should be named " + "'FragmentName_propName', got '".concat(t, "'."), [e.loc]);
            var a = r[2];
            if ("string" != typeof a) throw u("NormalizationCodeGenerator: @module fragments should be named " + "'FragmentName_propName', got '".concat(t, "'."), [e.loc]);
            return {
              kind: "ModuleImport",
              documentName: e.documentName,
              fragmentName: t,
              fragmentPropName: a
            };
          }(e));
          break;

        case "InlineFragment":
          n.push(function (e) {
            return {
              kind: "InlineFragment",
              type: e.typeCondition.toString(),
              selections: y(e.selections)
            };
          }(e));
          break;

        case "LinkedField":
          n.push.apply(n, (0, i.default)(function (e) {
            var n = e.handles && e.handles.map(function (n) {
              var t = {
                kind: "LinkedHandle",
                alias: e.alias === e.name ? null : e.alias,
                name: e.name,
                args: k(e.args),
                handle: n.name,
                key: n.key,
                filters: n.filters
              };

              if (null != n.dynamicKey) {
                t = (0, a.default)({}, t, {
                  dynamicKey: {
                    kind: "Variable",
                    name: "__dynamicKey",
                    variableName: n.dynamicKey.variableName
                  }
                });
              }

              return t;
            }) || [],
                t = h(e.type),
                r = {
              kind: "LinkedField",
              alias: e.alias === e.name ? null : e.alias,
              name: e.name,
              storageKey: null,
              args: k(e.args),
              concreteType: v(t) ? null : t.toString(),
              plural: b(e.type),
              selections: y(e.selections)
            },
                i = S(r, e.metadata);
            i && (r = (0, a.default)({}, r, {
              storageKey: i
            }));
            return [r].concat(n);
          }(e)));
          break;

        case "ConnectionField":
          n.push(function (e) {
            var n = h(e.type);
            if (b(e.type)) throw c("Connection fields cannot return a plural (list) value.", [e.loc]);
            var t = {
              kind: "ConnectionField",
              alias: e.alias === e.name ? null : e.alias,
              label: e.label,
              name: e.name,
              resolver: o.moduleDependency(e.resolver),
              storageKey: null,
              args: k(e.args),
              concreteType: v(n) ? null : n.toString(),
              selections: y(e.selections)
            },
                r = S(t, e.metadata);
            r && (t = (0, a.default)({}, t, {
              storageKey: r
            }));
            return t;
          }(e));
          break;

        case "Defer":
          n.push(function (e, n) {
            var t, r;
            if (null != e.if && "Variable" !== e.if.kind && ("Literal" !== e.if.kind || !0 !== e.if.value)) throw u("NormalizationCodeGenerator: Expected @defer `if` condition to be a variable, unspecified, or the literal `true`.", [null !== (t = null === (r = e.if) || void 0 === r ? void 0 : r.loc) && void 0 !== t ? t : e.loc]);
            return {
              if: null != e.if && "Variable" === e.if.kind ? e.if.variableName : null,
              kind: "Defer",
              label: e.label,
              metadata: e.metadata,
              selections: y(e.selections)
            };
          }(e));
          break;

        case "Stream":
          n.push(function (e, n) {
            var t, r;
            if (null != e.if && "Variable" !== e.if.kind && ("Literal" !== e.if.kind || !0 !== e.if.value)) throw u("NormalizationCodeGenerator: Expected @stream `if` condition to be a variable, unspecified, or the literal `true`.", [null !== (t = null === (r = e.if) || void 0 === r ? void 0 : r.loc) && void 0 !== t ? t : e.loc]);
            return {
              if: null != e.if && "Variable" === e.if.kind ? e.if.variableName : null,
              kind: "Stream",
              label: e.label,
              metadata: e.metadata,
              selections: y(e.selections)
            };
          }(e));
          break;

        case "InlineDataFragmentSpread":
        case "FragmentSpread":
          throw new u("NormalizationCodeGenerator: Unexpected IR node ".concat(e.kind, "."), [e.loc]);

        default:
          throw new Error();
      }
    }), n;
  }

  function b(e) {
    return g(e) instanceof f;
  }

  function k(e) {
    var n = [];
    return e.forEach(function (e) {
      var t = function (e) {
        var n = e.value;

        switch (n.kind) {
          case "Variable":
            return {
              kind: "Variable",
              name: e.name,
              variableName: n.variableName
            };

          case "Literal":
            return null === n.value ? null : {
              kind: "Literal",
              name: e.name,
              value: p(n.value)
            };

          default:
            throw c("NormalizationCodeGenerator: Complex argument values (Lists or InputObjects with nested variables) are not supported.", [e.value.loc]);
        }
      }(e);

      null !== t && n.push(t);
    }), 0 === n.length ? null : n.sort(w);
  }

  function w(e, n) {
    return e.name < n.name ? -1 : e.name > n.name ? 1 : 0;
  }

  function S(e, n) {
    var t = null == n ? void 0 : n.storageKey;
    return "string" == typeof t ? t : !e.args || 0 === e.args.length || e.args.some(function (e) {
      return "Literal" !== e.kind;
    }) ? null : m(e, {});
  }

  e.exports = {
    generate: function (e) {
      switch (e.kind) {
        case "Root":
          return function (e) {
            return {
              kind: "Operation",
              name: e.name,
              argumentDefinitions: (n = e.argumentDefinitions, n.map(function (e) {
                return {
                  kind: "LocalArgument",
                  name: e.name,
                  type: e.type.toString(),
                  defaultValue: e.defaultValue
                };
              })),
              selections: y(e.selections)
            };
            var n;
          }(e);

        case "SplitOperation":
          return function (e, n) {
            return {
              kind: "SplitOperation",
              name: e.name,
              metadata: e.metadata,
              selections: y(e.selections)
            };
          }(e);

        default:
          throw u("NormalizationCodeGenerator: Unsupported AST kind '".concat(e.kind, "'."), [e.loc]);
      }
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0)(t(2)),
      a = t(17),
      i = t(7),
      o = t(3),
      l = o.createCompilerError,
      s = o.createUserError,
      u = t(1).GraphQLList,
      c = t(11),
      f = c.getStorageKey,
      d = c.stableCopy,
      m = i.getRawType,
      p = i.isAbstractType,
      h = i.getNullableType;

  function v(e) {
    return e.map(function (e) {
      switch (e.kind) {
        case "ClientExtension":
          return {
            kind: "ClientExtension",
            selections: v(e.selections)
          };

        case "FragmentSpread":
          return function (e) {
            return {
              kind: "FragmentSpread",
              name: e.name,
              args: y(e.args)
            };
          }(e);

        case "Condition":
          return function (e) {
            if ("Variable" !== e.condition.kind) throw l("ReaderCodeGenerator: Expected 'Condition' with static value to be pruned or inlined", [e.condition.loc]);
            return {
              kind: "Condition",
              passingValue: e.passingValue,
              condition: e.condition.variableName,
              selections: v(e.selections)
            };
          }(e);

        case "ScalarField":
          return function (e) {
            var n = {
              kind: "ScalarField",
              alias: e.alias === e.name ? null : e.alias,
              name: e.name,
              args: y(e.args),
              storageKey: null
            },
                t = k(n, e.metadata);
            t && (n = (0, r.default)({}, n, {
              storageKey: t
            }));
            return n;
          }(e);

        case "ModuleImport":
          return function (e) {
            var n = e.name,
                t = n.match(/^([a-zA-Z][a-zA-Z0-9]*)(?:_([a-zA-Z][_a-zA-Z0-9]*))?$/);
            if (!t) throw l("ReaderCodeGenerator: @match fragments should be named " + "'FragmentName_propName', got '".concat(n, "'."), [e.loc]);
            var r = t[2];
            if ("string" != typeof r) throw l("ReaderCodeGenerator: @module fragments should be named " + "'FragmentName_propName', got '".concat(n, "'."), [e.loc]);
            return {
              kind: "ModuleImport",
              documentName: e.documentName,
              fragmentName: n,
              fragmentPropName: r
            };
          }(e);

        case "InlineDataFragmentSpread":
          return function (e) {
            return {
              kind: "InlineDataFragmentSpread",
              name: e.name,
              selections: v(e.selections)
            };
          }(e);

        case "InlineFragment":
          return function (e) {
            return {
              kind: "InlineFragment",
              type: e.typeCondition.toString(),
              selections: v(e.selections)
            };
          }(e);

        case "LinkedField":
          return function (e) {
            var n = m(e.type),
                t = {
              kind: "LinkedField",
              alias: e.alias === e.name ? null : e.alias,
              name: e.name,
              storageKey: null,
              args: y(e.args),
              concreteType: p(n) ? null : n.toString(),
              plural: g(e.type),
              selections: v(e.selections)
            },
                a = k(t, e.metadata);
            a && (t = (0, r.default)({}, t, {
              storageKey: a
            }));
            return t;
          }(e);

        case "ConnectionField":
          return function (e) {
            var n = m(e.type);
            if (g(e.type)) throw s("Connection fields cannot return a plural (list) value.", [e.loc]);
            var t = {
              kind: "ConnectionField",
              alias: e.alias === e.name ? null : e.alias,
              label: e.label,
              name: e.name,
              resolver: a.moduleDependency(e.resolver),
              storageKey: null,
              args: y(e.args),
              concreteType: p(n) ? null : n.toString(),
              selections: v(e.selections)
            },
                i = k(t, e.metadata);
            i && (t = (0, r.default)({}, t, {
              storageKey: i
            }));
            return t;
          }(e);

        case "Defer":
        case "Stream":
          throw l("Unexpected ".concat(e.kind, " IR node in ReaderCodeGenerator."), [e.loc]);

        default:
          throw new Error();
      }
    }).filter(Boolean);
  }

  function g(e) {
    return h(e) instanceof u;
  }

  function y(e) {
    var n = [];
    return e.forEach(function (e) {
      var t = function (e) {
        var n = e.value;

        switch (n.kind) {
          case "Variable":
            return {
              kind: "Variable",
              name: e.name,
              variableName: n.variableName
            };

          case "Literal":
            return null === n.value ? null : {
              kind: "Literal",
              name: e.name,
              value: d(n.value)
            };

          default:
            throw s("ReaderCodeGenerator: Complex argument values (Lists or InputObjects with nested variables) are not supported.", [e.value.loc]);
        }
      }(e);

      null !== t && n.push(t);
    }), 0 === n.length ? null : n.sort(b);
  }

  function b(e, n) {
    return e.name < n.name ? -1 : e.name > n.name ? 1 : 0;
  }

  function k(e, n) {
    var t = null == n ? void 0 : n.storageKey;
    return "string" == typeof t ? t : !e.args || 0 === e.args.length || e.args.some(function (e) {
      return "Literal" !== e.kind;
    }) ? null : f(e, {});
  }

  e.exports = {
    generate: function (e) {
      if (null == e) return e;
      var n,
          t = null;

      if (null != e.metadata) {
        var r,
            i,
            o,
            l,
            s = e.metadata,
            u = s.mask,
            c = s.plural,
            f = s.connection,
            d = s.refetch;
        Array.isArray(f) && ((t = null !== (r = t) && void 0 !== r ? r : {}).connection = f), "boolean" == typeof u && ((t = null !== (i = t) && void 0 !== i ? i : {}).mask = u), "boolean" == typeof c && ((t = null !== (o = t) && void 0 !== o ? o : {}).plural = c), "object" == typeof d && ((t = null !== (l = t) && void 0 !== l ? l : {}).refetch = {
          connection: d.connection,
          operation: a.moduleDependency(d.operation + ".graphql"),
          fragmentPathInResult: d.fragmentPathInResult
        });
      }

      return {
        kind: "Fragment",
        name: e.name,
        type: e.type.toString(),
        metadata: t,
        argumentDefinitions: (n = e.argumentDefinitions, n.map(function (e) {
          switch (e.kind) {
            case "LocalArgumentDefinition":
              return {
                kind: "LocalArgument",
                name: e.name,
                type: e.type.toString(),
                defaultValue: e.defaultValue
              };

            case "RootArgumentDefinition":
              return {
                kind: "RootArgument",
                name: e.name,
                type: e.type ? e.type.toString() : null
              };

            default:
              throw new Error();
          }
        })),
        selections: v(e.selections)
      };
    }
  };
}, function (e, n, t) {
  "use strict";

  e.exports = function (e) {
    e = JSON.parse(JSON.stringify(e));
    var n = new Map(),
        t = new WeakMap(),
        r = [];
    !function e(r) {
      if (null == r || "object" != typeof r) return JSON.stringify(r);
      var a;

      if (Array.isArray(r)) {
        a = "[";

        for (var i = 0; i < r.length; i++) a += e(r[i]) + ",";
      } else for (var o in a = "{", r) r.hasOwnProperty(o) && void 0 !== r[o] && (a += o + ":" + e(r[o]) + ",");

      var l = n.get(a);
      return l || (l = {
        value: r,
        hash: a,
        isDuplicate: !1
      }, n.set(a, l)), t.set(r, l), a;
    }(e), function e(n) {
      if (null != n && "object" == typeof n) {
        var r = t.get(n);
        if (r && r.value !== n && r.hash.length > 2) r.isDuplicate = !0;else if (Array.isArray(n)) for (var a = 0; a < n.length; a++) e(n[a]);else for (var i in n) n.hasOwnProperty(i) && void 0 !== n[i] && e(n[i]);
      }
    }(e);

    var a = function e(n, a, i) {
      if (null == i || "object" != typeof i) return JSON.stringify(i);

      if ("" !== a) {
        var o = t.get(i);

        if (o && o.isDuplicate) {
          if (!o.varName) {
            var l = e(!0, "", i);
            o.varName = "v" + r.length, r.push(o.varName + " = " + l);
          }

          return "(" + o.varName + "/*: any*/)";
        }
      }

      var s,
          u = !0,
          c = a + "  ";

      if (Array.isArray(i)) {
        if (n && 0 === i.length) return "([]/*: any*/)";
        s = "[";

        for (var f = 0; f < i.length; f++) s += (u ? "\n" : ",\n") + c + e(n, c, i[f]), u = !1;

        s += u ? "]" : "\n".concat(a, "]");
      } else {
        for (var d in s = "{", i) i.hasOwnProperty(d) && void 0 !== i[d] && (s += (u ? "\n" : ",\n") + c + JSON.stringify(d) + ": " + e(n, c, i[d]), u = !1);

        s += u ? "}" : "\n".concat(a, "}");
      }

      return s;
    }(!1, "", e);

    return 0 === r.length ? a : "(function(){\nvar ".concat(r.join(",\n"), ";\nreturn ").concat(a, ";\n})()");
  };
}, function (e, n, t) {
  "use strict";

  var r = [],
      a = [];

  e.exports =
  /**
   * Checks if two values are equal. Values may be primitives, arrays, or objects.
   * Returns true if both arguments have the same keys and values.
   *
   * @see http://underscorejs.org
   * @copyright 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
   * @license MIT
   */
  function (e, n) {
    var t = r.length ? r.pop() : [],
        i = a.length ? a.pop() : [],
        o = function e(n, t, r, a) {
      if (n === t) return 0 !== n || 1 / n == 1 / t;
      if (null == n || null == t) return !1;
      if ("object" != typeof n || "object" != typeof t) return !1;
      var i = Object.prototype.toString,
          o = i.call(n);
      if (o !== i.call(t)) return !1;

      switch (o) {
        case "[object String]":
          return n === String(t);

        case "[object Number]":
          return !isNaN(n) && !isNaN(t) && n === Number(t);

        case "[object Date]":
        case "[object Boolean]":
          return +n == +t;

        case "[object RegExp]":
          return n.source === t.source && n.global === t.global && n.multiline === t.multiline && n.ignoreCase === t.ignoreCase;
      }

      for (var l = r.length; l--;) if (r[l] === n) return a[l] === t;

      r.push(n), a.push(t);
      var s = 0;

      if ("[object Array]" === o) {
        if ((s = n.length) !== t.length) return !1;

        for (; s--;) if (!e(n[s], t[s], r, a)) return !1;
      } else {
        if (n.constructor !== t.constructor) return !1;
        if (n.hasOwnProperty("valueOf") && t.hasOwnProperty("valueOf")) return n.valueOf() === t.valueOf();
        var u = Object.keys(n);
        if (u.length !== Object.keys(t).length) return !1;

        for (var c = 0; c < u.length; c++) if (!("_owner" === u[c] || t.hasOwnProperty(u[c]) && e(n[u[c]], t[u[c]], r, a))) return !1;
      }

      return r.pop(), a.pop(), !0;
    }(e, n, t, i);

    return t.length = 0, i.length = 0, r.push(t), a.push(i), o;
  };
}, function (e, n, t) {
  "use strict";

  var r = t(3).createUserError,
      a = t(1).isTypeSubTypeOf;

  e.exports = function (e, n, t, i) {
    var o = new Map();
    return n.argumentDefinitions.forEach(function (e) {
      o.set(e.name, e);
    }), t.forEach(function (n) {
      var t = o.get(n.name),
          l = null == t ? n : function (e, n, t, i) {
        if (n.kind !== t.kind) throw r("Cannot combine global and local variables when applying " + "".concat(i, "."), [n.loc, t.loc]);
        if ("LocalArgumentDefinition" === n.kind && "LocalArgumentDefinition" === t.kind && n.defaultValue !== t.defaultValue) throw r("Cannot combine local variables with different defaultValues when " + "applying ".concat(i, "."), [n.loc, t.loc]);
        if (a(e, t.type, n.type)) return t;
        if (a(e, n.type, t.type)) return n;
        throw r("Cannot combine variables with incompatible types " + "".concat(String(n.type), " and ").concat(String(t.type), " ") + "when applying ".concat(i, "."), [n.loc, t.loc]);
      }(e, t, n, i);
      o.set(l.name, l);
    }), Array.from(o.values());
  };
}, function (e, n, t) {
  "use strict";

  var r = t(29),
      a = t(56),
      i = a.exactObjectTypeAnnotation,
      o = a.readOnlyArrayOfType,
      l = t(1),
      s = l.GraphQLEnumType,
      u = l.GraphQLInputObjectType,
      c = l.GraphQLInterfaceType,
      f = l.GraphQLList,
      d = l.GraphQLNonNull,
      m = l.GraphQLObjectType,
      p = l.GraphQLScalarType,
      h = l.GraphQLUnionType;

  function v(e, n, t) {
    return e instanceof d ? g(e.ofType, n, t) : r.nullableTypeAnnotation(g(e, n, t));
  }

  function g(e, n, t) {
    if (e instanceof f) return o(v(e.ofType, n, t));
    if (e instanceof m || e instanceof h || e instanceof c) return t;
    if (e instanceof p) return y(e, n);
    if (e instanceof s) return b(e, n);
    throw new Error("Could not convert from GraphQL type ".concat(e.toString()));
  }

  function y(e, n) {
    var t = n.customScalars[e.name];

    switch (t || e.name) {
      case "ID":
      case "String":
        return r.stringTypeAnnotation();

      case "Float":
      case "Int":
        return r.numberTypeAnnotation();

      case "Boolean":
        return r.booleanTypeAnnotation();

      default:
        return null == t ? r.anyTypeAnnotation() : r.genericTypeAnnotation(r.identifier(t));
    }
  }

  function b(e, n) {
    return n.usedEnums[e.name] = e, r.genericTypeAnnotation(r.identifier(e.name));
  }

  function k(e, n) {
    return e instanceof d ? w(e.ofType, n) : r.nullableTypeAnnotation(w(e, n));
  }

  function w(e, n) {
    if (e instanceof f) return o(k(e.ofType, n));
    if (e instanceof p) return y(e, n);
    if (e instanceof s) return b(e, n);

    if (e instanceof u) {
      var t = function (e) {
        return e.name;
      }(e);

      if (n.generatedInputObjectTypes[t]) return r.genericTypeAnnotation(r.identifier(t));
      n.generatedInputObjectTypes[t] = "pending";
      var a = e.getFields(),
          l = Object.keys(a).map(function (e) {
        return a[e];
      }).map(function (e) {
        var t = r.objectTypeProperty(r.identifier(e.name), k(e.type, n));
        return !(n.optionalInputFields.indexOf(e.name) >= 0) && e.type instanceof d || (t.optional = !0), t;
      });
      return n.generatedInputObjectTypes[t] = i(l), r.genericTypeAnnotation(r.identifier(t));
    }

    throw new Error("Could not convert from GraphQL type ".concat(e.toString()));
  }

  e.exports = {
    transformInputType: k,
    transformScalarType: v
  };
}, function (e, n) {
  e.exports = require("@babel/generator");
}, function (e, n, t) {
  "use strict";

  var r = t(0)(t(2)),
      a = t(5),
      i = t(7),
      o = i.getRawType,
      l = i.isClientDefinedField,
      s = t(3),
      u = s.createCompilerError,
      c = s.createUserError,
      f = new Map();

  function d(e) {
    var n,
        t,
        a = this.getContext(),
        i = a.serverSchema,
        s = a.clientSchema;

    switch (e.kind) {
      case "Root":
        switch (e.operation) {
          case "query":
            t = i.getQueryType();
            break;

          case "mutation":
            t = i.getMutationType();
            break;

          case "subscription":
            t = i.getSubscriptionType();
            break;

          default:
            e.operation;
        }

        break;

      case "SplitOperation":
        t = i.getType(e.type.name);
        break;

      case "Fragment":
        t = null !== (n = i.getType(e.type.name)) && void 0 !== n ? n : s.getType(e.type.name);
    }

    if (null == t) throw c("ClientExtensionTransform: Expected the type of `".concat(e.name, "` to have been defined in the schema. Make sure both server and ") + "client schema are up to date.", [e.loc]);
    return function e(n, t, a) {
      var i = f.get(n);
      null == i && (i = new Map(), f.set(n, i));
      var s = i.get(a);
      if (null != s) return s;
      var c = t.serverSchema,
          d = t.clientSchema;
      var m = [];
      var p = [];
      n.selections.forEach(function (n) {
        switch (n.kind) {
          case "ClientExtension":
            p.push(n);
            break;

          case "Condition":
          case "Defer":
          case "InlineDataFragmentSpread":
          case "ModuleImport":
          case "Stream":
            var r = e(n, t, a);
            p.push(r);
            break;

          case "ConnectionField":
          case "ScalarField":
          case "LinkedField":
            var i = l(n, t, a);

            if (i) {
              m.push(n);
              break;
            }

            if ("ScalarField" === n.kind) p.push(n);else {
              var s,
                  f = o(n.type),
                  h = null !== (s = c.getType(f.name)) && void 0 !== s ? s : d.getType(f.name);
              if (null == h) throw u("ClientExtensionTransform: Expected to be able to determine " + "type of field `".concat(n.name, "`."), [n.loc]);
              var v = e(n, t, h);
              p.push(v);
            }
            break;

          case "InlineFragment":
            var g = n.typeCondition.name,
                y = c.getType(g),
                b = d.getType(g),
                k = null == y && null != b;
            if (k) m.push(n);else {
              var w,
                  S = null !== (w = y) && void 0 !== w ? w : b;
              if (null == S) throw u("ClientExtensionTransform: Expected to be able to determine " + "type of inline fragment on `".concat(g, "`."), [n.loc]);

              var _ = e(n, t, S);

              p.push(_);
            }
            break;

          case "FragmentSpread":
            if (!t.get(n.name)) {
              m.push(n);
              break;
            }

            var E = t.getFragment(n.name, n.loc),
                T = E.type.name,
                F = c.getType(T),
                x = d.getType(T),
                C = null == F && null != x;
            C ? m.push(n) : p.push(n);
            break;

          default:
            throw u("ClientExtensionTransform: Unexpected selection of kind `".concat(n.kind, "`."), [n.loc]);
        }
      });
      s = 0 === m.length ? (0, r.default)({}, n, {
        selections: [].concat(p)
      }) : (0, r.default)({}, n, {
        selections: [].concat(p, [{
          kind: "ClientExtension",
          loc: n.loc,
          metadata: null,
          selections: [].concat(m)
        }])
      });
      i.set(a, s);
      return s;
    }(e, a, t);
  }

  e.exports = {
    transform: function (e) {
      return f = new Map(), a.transform(e, {
        Fragment: d,
        Root: d,
        SplitOperation: d
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(5);
  e.exports = {
    transform: function (e) {
      var n = new Set(e.serverSchema.getDirectives().map(function (e) {
        return e.name;
      }));
      return r.transform(e, {
        Directive: function (e) {
          return n.has(e.name) ? e : null;
        }
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0)(t(2)),
      a = t(5),
      i = t(3).createUserError;

  function o(e) {
    var n = this.traverse(e),
        t = n.directives.find(function (e) {
      return "inline" === e.name;
    });
    return null == t ? n : (0, r.default)({}, n, {
      directives: n.directives.filter(function (e) {
        return e !== t;
      }),
      metadata: (0, r.default)({}, n.metadata || {}, {
        inlineData: !0
      })
    });
  }

  function l(e) {
    var n = this.traverse(e),
        t = this.getContext().get(n.name);
    if (!t || "Fragment" !== t.kind || !t.directives.some(function (e) {
      return "inline" === e.name;
    })) return n;
    if (t.argumentDefinitions.length > 0 || n.args.length > 0) throw i("Variables are not yet supported inside @inline fragments.", [t.argumentDefinitions[0].loc]);
    if (n.directives.length > 0) throw i("Directives on fragment spreads for @inline fragments are not yet supported", [n.loc]);
    var r = this.visit(t);
    return {
      kind: "InlineDataFragmentSpread",
      loc: n.loc,
      metadata: n.metadata,
      name: n.name,
      selections: [{
        directives: [],
        kind: "InlineFragment",
        loc: {
          kind: "Derived",
          source: n.loc
        },
        metadata: null,
        selections: r.selections,
        typeCondition: r.type
      }]
    };
  }

  e.exports = {
    SCHEMA_EXTENSION: "\ndirective @inline on FRAGMENT_DEFINITION\n",
    transform: function (e) {
      return a.transform(e, {
        FragmentSpread: l,
        Fragment: o
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(5),
      a = t(4);

  function i(e) {
    return null;
  }

  e.exports = {
    transform: function (e) {
      var n,
          t = (n = new Map(), function (e) {
        var t = n.get(e);
        if (null != t) return t;
        0 !== e.args.length && a(!1, "InlineFragmentsTransform: Cannot flatten fragment spread `%s` with arguments. Use the `ApplyFragmentArgumentTransform` before flattening", e.name);
        var r = this.getContext().getFragment(e.name, e.loc),
            i = {
          kind: "InlineFragment",
          directives: e.directives,
          loc: {
            kind: "Derived",
            source: e.loc
          },
          metadata: e.metadata,
          selections: r.selections,
          typeCondition: r.type
        };
        return t = this.traverse(i), n.set(e, t), t;
      });
      return r.transform(e, {
        Fragment: i,
        FragmentSpread: t
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0)(t(2)),
      a = t(53),
      i = t(3),
      o = i.createCombinedError,
      l = i.createUserError,
      s = i.eachWithErrors;

  function u(e) {
    var n = new Map(),
        t = !0,
        r = !1,
        a = void 0;

    try {
      for (var i, o = e[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
        var l = i.value;
        n.set(l.name, l);
      }
    } catch (e) {
      r = !0, a = e;
    } finally {
      try {
        t || null == o.return || o.return();
      } finally {
        if (r) throw a;
      }
    }

    return n;
  }

  e.exports = {
    transformWithOptions: function (e) {
      return function (n) {
        return function (e, n) {
          var t = n.removeUnusedVariables,
              i = a(e),
              c = e,
              f = s(e.documents(), function (e) {
            if ("Root" === e.kind) {
              var n = i.getRoot(e.name),
                  a = u(e.argumentDefinitions),
                  o = u(n.argumentDefinitions),
                  s = [],
                  f = !0,
                  d = !1,
                  m = void 0;

              try {
                for (var p, h = o.values()[Symbol.iterator](); !(f = (p = h.next()).done); f = !0) {
                  var v = p.value;
                  a.has(v.name) || s.push(v);
                }
              } catch (e) {
                d = !0, m = e;
              } finally {
                try {
                  f || null == h.return || h.return();
                } finally {
                  if (d) throw m;
                }
              }

              if (0 !== s.length) throw l("Operation '".concat(e.name, "' references undefined variable(s):\n").concat(s.map(function (e) {
                return "- $".concat(e.name, ": ").concat(String(e.type));
              }).join("\n"), "."), s.map(function (e) {
                return e.loc;
              }));

              if (t) {
                var g = e.argumentDefinitions.filter(function (e) {
                  return o.has(e.name);
                });
                c = c.replace((0, r.default)({}, e, {
                  argumentDefinitions: g
                }));
              }
            }
          });
          if (null != f && 0 !== f.length) throw o(f);
          return c;
        }(n, e);
      };
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0),
      a = r(t(2)),
      i = r(t(6)),
      o = t(5),
      l = t(82),
      s = t(58),
      u = t(83),
      c = t(3),
      f = c.createCompilerError,
      d = c.createNonRecoverableUserError,
      m = l.getFragmentScope,
      p = l.getRootScope;

  function h(e, n, t, r, i) {
    var o = g(e, n, t, r.selections, i);
    if (!o) return null;

    if (r.hasOwnProperty("directives")) {
      var l = y(t, r.directives, i);
      return (0, a.default)({}, r, {
        directives: l,
        selections: o
      });
    }

    return (0, a.default)({}, r, {
      selections: o
    });
  }

  function v(e, n, t, r, o) {
    var l = y(t, r.directives, o),
        c = function (e, n, t, r, o, l) {
      var c = e.getFragment(r.name, r.loc),
          f = function (e, n, t) {
        if (!e.length) return null;
        var r = (0, i.default)(e).sort(function (e, n) {
          return e.name < n.name ? -1 : e.name > n.name ? 1 : 0;
        }),
            a = JSON.stringify(r.map(function (e) {
          var r, a;

          if ("Variable" === e.value.kind) {
            if (null == (r = n[e.value.variableName])) throw d("Variable '$".concat(e.value.variableName, "' is not in scope."), [null === (a = t[0]) || void 0 === a ? void 0 : a.loc, e.value.loc].filter(Boolean));
          } else r = e.value;

          return {
            name: e.name,
            value: s(r)
          };
        }));
        return u(a);
      }(o, t, l),
          p = f ? "".concat(c.name, "_").concat(f) : c.name,
          h = n.get(p);

      if (h) {
        if ("resolved" === h.kind) return h.value;
        throw d("Found a circular reference from fragment '".concat(c.name, "'."), l.map(function (e) {
          return e.loc;
        }));
      }

      var v = m(c.argumentDefinitions, o, t, r);
      n.set(p, {
        kind: "pending"
      });
      var y = null,
          b = g(e, n, v, c.selections, l);
      b && (y = (0, a.default)({}, c, {
        selections: b,
        name: p,
        argumentDefinitions: []
      }));
      return n.set(p, {
        kind: "resolved",
        value: y
      }), y;
    }(e, n, t, r, r.args, [].concat((0, i.default)(o), [r]));

    return c ? (0, a.default)({}, r, {
      kind: "FragmentSpread",
      args: [],
      directives: l,
      name: c.name
    }) : null;
  }

  function g(e, n, t, r, o) {
    var l = null;
    return r.forEach(function (r) {
      var s;
      if ("ClientExtension" === r.kind || "InlineDataFragmentSpread" === r.kind || "InlineFragment" === r.kind || "ModuleImport" === r.kind) s = h(e, n, t, r, o);else if ("FragmentSpread" === r.kind) s = v(e, n, t, r, o);else if ("Condition" === r.kind) {
        var u,
            c = function (e, n, t, r, i) {
          var o = k(t, r.condition, i);
          if ("Literal" !== o.kind && "Variable" !== o.kind) throw d("A non-scalar value was applied to an @include or @skip directive, the `if` argument value must be a variable or a literal Boolean.", [o.loc]);
          if ("Literal" === o.kind && o.value !== r.passingValue) return null;
          var l = g(e, n, t, r.selections, i);
          return l ? "Literal" === o.kind && o.value === r.passingValue ? l : [(0, a.default)({}, r, {
            condition: o,
            selections: l
          })] : null;
        }(e, n, t, r, o);

        if (c) (u = l = l || []).push.apply(u, (0, i.default)(c));
      } else {
        if ("LinkedField" !== r.kind && "ScalarField" !== r.kind && "ConnectionField" !== r.kind) throw "Defer" === r.kind || "Stream" === r.kind ? f("RelayApplyFragmentArgumentTransform: Expected to be applied before processing @defer/@stream.", [r.loc]) : f("RelayApplyFragmentArgumentTransform: Unsupported kind '".concat(r.kind, "'."), [r.loc]);

        s = function (e, n, t, r, i) {
          var o = b(t, r.args, i),
              l = y(t, r.directives, i);

          if ("LinkedField" === r.kind || "ConnectionField" === r.kind) {
            var s = g(e, n, t, r.selections, i);
            return s ? (0, a.default)({}, r, {
              args: o,
              directives: l,
              selections: s
            }) : null;
          }

          return (0, a.default)({}, r, {
            args: o,
            directives: l
          });
        }(e, n, t, r, o);
      }
      s && (l = l || []).push(s);
    }), l;
  }

  function y(e, n, t) {
    return n.map(function (n) {
      var r = b(e, n.args, t);
      return (0, a.default)({}, n, {
        args: r
      });
    });
  }

  function b(e, n, t) {
    return n.map(function (n) {
      var r = k(e, n.value, t);
      return r === n.value ? n : (0, a.default)({}, n, {
        value: r
      });
    });
  }

  function k(e, n, t) {
    if ("Variable" === n.kind) {
      var r,
          i = e[n.variableName];
      if (null == i) throw d("Variable '$".concat(n.variableName, "' is not in scope."), [null === (r = t[0]) || void 0 === r ? void 0 : r.loc, n.loc].filter(Boolean));
      return i;
    }

    return "ListValue" === n.kind ? (0, a.default)({}, n, {
      items: n.items.map(function (n) {
        return k(e, n, t);
      })
    }) : "ObjectValue" === n.kind ? (0, a.default)({}, n, {
      fields: n.fields.map(function (n) {
        return (0, a.default)({}, n, {
          value: k(e, n.value, t)
        });
      })
    }) : n;
  }

  e.exports = {
    transform: function (e) {
      var n = new Map(),
          t = o.transform(e, {
        Root: function (t) {
          var r = p(t.argumentDefinitions);
          return h(e, n, r, t, [t]);
        },
        Fragment: function () {
          return null;
        }
      }),
          r = !0,
          a = !1,
          i = void 0;

      try {
        for (var l, s = n.values()[Symbol.iterator](); !(r = (l = s.next()).done); r = !0) {
          var u = l.value;
          "resolved" === u.kind && u.value && (t = t.add(u.value));
        }
      } catch (e) {
        a = !0, i = e;
      } finally {
        try {
          r || null == s.return || s.return();
        } finally {
          if (a) throw i;
        }
      }

      return t;
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(3),
      a = r.createCombinedError,
      i = r.createUserError,
      o = r.eachWithErrors,
      l = t(1).GraphQLNonNull;
  e.exports = {
    getFragmentScope: function (e, n, t, r) {
      var s = new Map();
      n.forEach(function (e) {
        "Literal" === e.value.kind ? s.set(e.name, e.value) : "Variable" === e.value.kind && s.set(e.name, t[e.value.variableName]);
      });
      var u = {},
          c = o(e, function (e) {
        if ("RootArgumentDefinition" === e.kind) {
          if (s.has(e.name)) {
            var t,
                a = n.find(function (n) {
              return n.name === e.name;
            });
            throw i("Unexpected argument '".concat(e.name, "' supplied to fragment '").concat(r.name, "'. @arguments may only be provided for variables defined in the fragment's @argumentDefinitions."), [null !== (t = null == a ? void 0 : a.loc) && void 0 !== t ? t : r.loc]);
          }

          u[e.name] = {
            kind: "Variable",
            loc: e.loc,
            metadata: null,
            variableName: e.name,
            type: e.type
          };
        } else {
          var o = s.get(e.name);

          if (null == o || "Literal" === o.kind && null == o.value) {
            if (null == e.defaultValue && e.type instanceof l) {
              var c,
                  f = n.find(function (n) {
                return n.name === e.name;
              });
              throw i("No value found for required argument '".concat(e.name, ": ").concat(String(e.type), "' on fragment '").concat(r.name, "'."), [null !== (c = null == f ? void 0 : f.loc) && void 0 !== c ? c : r.loc]);
            }

            u[e.name] = {
              kind: "Literal",
              value: e.defaultValue
            };
          } else u[e.name] = o;
        }
      });
      if (null != c && c.length) throw a(c);
      return u;
    },
    getRootScope: function (e) {
      var n = {};
      return e.forEach(function (e) {
        n[e.name] = {
          kind: "Variable",
          loc: e.loc,
          metadata: null,
          variableName: e.name,
          type: e.type
        };
      }), n;
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  e.exports = function (e) {
    for (var n, t = e.length, a = 3 & t, i = t ^ a, o = 0, l = 0; l !== i;) {
      var s = e.charCodeAt(l + 3);
      n = e.charCodeAt(l) ^ e.charCodeAt(l + 1) << 8 ^ e.charCodeAt(l + 2) << 16 ^ (255 & s) << 24 ^ (65280 & s) >> 8, l += 4, o = 5 * (o = (o ^= n = 13715 * (n = (n = 11601 * n + 3432906752 * (65535 & n) >>> 0) << 15 | n >>> 17) + 461832192 * (65535 & n) >>> 0) << 13 | o >>> 19) + 3864292196 >>> 0;
    }

    switch (n = 0, a) {
      case 3:
        n ^= e.charCodeAt(i + 2) << 16;

      case 2:
        n ^= e.charCodeAt(i + 1) << 8;

      case 1:
        o ^= n = 13715 * (n = (n = 11601 * (n ^= e.charCodeAt(i)) + 3432906752 * (65535 & n) >>> 0) << 15 | n >>> 17) + 461832192 * (65535 & n) >>> 0;
    }

    if (o ^= t, o = 51819 * (o ^= o >>> 16) + 2246770688 * (65535 & o) >>> 0, o = 44597 * (o ^= o >>> 13) + 3266445312 * (65535 & o) >>> 0, o ^= o >>> 16, !(o >>>= 0)) return "0";

    for (var u = ""; o;) {
      var c = o % 62;
      u = r[c] + u, o = (o - c) / 62;
    }

    return u;
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0),
      a = r(t(2)),
      i = r(t(6)),
      o = t(5),
      l = t(25),
      s = t(7),
      u = t(14),
      c = t(3),
      f = c.createCompilerError,
      d = c.createUserError,
      m = t(85),
      p = m.AFTER,
      h = m.BEFORE,
      v = m.FIRST,
      g = m.KEY,
      y = m.LAST,
      b = t(1),
      k = b.GraphQLInterfaceType,
      w = b.GraphQLList,
      S = b.GraphQLObjectType,
      _ = b.GraphQLScalarType,
      E = b.GraphQLString,
      T = b.GraphQLUnionType,
      F = b.parse,
      x = t(11),
      C = x.ConnectionInterface,
      D = x.RelayFeatureFlags,
      A = "connection",
      R = "stream_connection",
      N = "handler";

  function L(e, n) {
    var t = this.traverse(e, n),
        r = n.connectionMetadata;
    return r.length ? (0, a.default)({}, t, {
      metadata: (0, a.default)({}, t.metadata, {
        connection: r
      })
    }) : t;
  }

  function I(e, n) {
    var t,
        r = s.getNullableType(e.type),
        o = r instanceof w,
        c = n.path.concat(o ? null : e.alias || e.name),
        m = this.traverse(e, (0, a.default)({}, n, {
      path: c
    })),
        b = e.directives.find(function (e) {
      return e.name === A || e.name === R;
    });
    if (!b) return m;
    if (!(r instanceof S || r instanceof k)) throw new d("@".concat(b.name, " used on invalid field '").concat(e.name, "'. ") + "Expected the return type to be a non-plural interface or object, " + "got '".concat(String(e.type), "'."), [m.loc]);
    !function (e) {
      var n = C.get().EDGES;
      if (!O(e, v) && !O(e, y)) throw d("Expected field '".concat(e.name, "' to have a '").concat(v, "' or '").concat(y, "' ") + "argument.", [e.loc]);
      if (!e.selections.some(function (e) {
        return "LinkedField" === e.kind && e.name === n;
      })) throw d("Expected field '".concat(e.name, "' to have an '").concat(n, "' selection."), [e.loc]);
    }(m), function (e, n, t) {
      var r = t.name,
          a = C.get(),
          i = a.CURSOR,
          o = a.EDGES,
          l = a.END_CURSOR,
          u = a.HAS_NEXT_PAGE,
          c = a.HAS_PREV_PAGE,
          f = a.NODE,
          m = a.PAGE_INFO,
          p = a.START_CURSOR,
          h = String(n),
          v = n.getFields(),
          g = v[o];
      if (null == g) throw d("@".concat(r, " used on invalid field '").concat(e.name, "'. Expected the ") + "field type '".concat(h, "' to have an '").concat(o, "' field"), [e.loc]);
      var y = s.getNullableType(g.type);
      if (!(y instanceof w)) throw d("@".concat(r, " used on invalid field '").concat(e.name, "'. Expected the ") + "field type '".concat(h, "' to have an '").concat(o, "' field that returns ") + "a list of objects.", [e.loc]);
      var b = s.getNullableType(y.ofType);
      if (!(b instanceof S || b instanceof k)) throw d("@".concat(r, " used on invalid field '").concat(e.name, "'. Expected the ") + "field type '".concat(h, "' to have an '").concat(o, "' field that returns ") + "a list of objects.", [e.loc]);
      var E = b.getFields()[f];
      if (null == E) throw d("@".concat(r, " used on invalid field '").concat(e.name, "'. Expected the ") + "field type '".concat(h, "' to have an '").concat(o, " { ").concat(f, " }' field ") + "that returns an object, interface, or union.", [e.loc]);
      var F = s.getNullableType(E.type);
      if (!(F instanceof k || F instanceof T || F instanceof S)) throw d("@".concat(r, " used on invalid field '").concat(e.name, "'. Expected the ") + "field type '".concat(h, "' to have an '").concat(o, " { ").concat(f, " }' field ") + "that returns an object, interface, or union.", [e.loc]);
      var x = b.getFields()[i];
      if (null == x || !(s.getNullableType(x.type) instanceof _)) throw d("@".concat(r, " used on invalid field '").concat(e.name, "'. Expected the ") + "field type '".concat(h, "' to have an '").concat(o, " { ").concat(i, " }' field ") + "that returns a scalar value.", [e.loc]);
      var D = v[m];
      if (null == D) throw d("@".concat(r, " used on invalid field '").concat(e.name, "'. Expected the ") + "field type '".concat(h, "' to have a '").concat(m, "' field that returns ") + "an object.", [e.loc]);
      var A = s.getNullableType(D.type);
      if (!(A instanceof S)) throw d("@".concat(r, " used on invalid field '").concat(e.name, "'. Expected the ") + "field type '".concat(h, "' to have a '").concat(m, "' field that ") + "returns an object.", [e.loc]);
      [l, u, c, p].forEach(function (n) {
        var t = A.getFields()[n];
        if (null == t || !(s.getNullableType(t.type) instanceof _)) throw d("@".concat(r, " used on invalid field '").concat(e.name, "'. Expected ") + "the field type '".concat(h, "' to have a '").concat(m, " { ").concat(n, " }' ") + "field returns a scalar.", [e.loc]);
      });
    }(m, r, b);

    var x = function (e, n) {
      var t = u(n.args),
          r = t.handler,
          a = t.key,
          i = t.label,
          o = t.filters;

      if (null != r && "string" != typeof r) {
        var l,
            s,
            c = n.args.find(function (e) {
          return "key" === e.name;
        });
        throw d("Expected the ".concat(N, " argument to @").concat(n.name, " to ") + "be a string literal for field ".concat(e.name, "."), [null !== (l = null == c ? void 0 : null === (s = c.value) || void 0 === s ? void 0 : s.loc) && void 0 !== l ? l : n.loc]);
      }

      if ("string" != typeof a) {
        var f,
            m,
            p = n.args.find(function (e) {
          return "key" === e.name;
        });
        throw d("Expected the ".concat(g, " argument to @").concat(n.name, " to be a ") + "string literal for field ".concat(e.name, "."), [null !== (f = null == p ? void 0 : null === (m = p.value) || void 0 === m ? void 0 : m.loc) && void 0 !== f ? f : n.loc]);
      }

      var h = e.alias || e.name;

      if (!a.endsWith("_" + h)) {
        var v,
            y,
            b = n.args.find(function (e) {
          return "key" === e.name;
        });
        throw d("Expected the ".concat(g, " argument to @").concat(n.name, " to be of ") + "form <SomeName>_".concat(h, ", got '").concat(a, "'. ") + "For a detailed explanation, check out https://relay.dev/docs/en/pagination-container#connection", [null !== (v = null == b ? void 0 : null === (y = b.value) || void 0 === y ? void 0 : y.loc) && void 0 !== v ? v : n.loc]);
      }

      if (null != o && (!Array.isArray(o) || o.some(function (e) {
        return "string" != typeof e;
      }))) {
        var k,
            w,
            S = n.args.find(function (e) {
          return "filters" === e.name;
        });
        throw d("Expected the 'filters' argument to @".concat(n.name, " to be ") + "a string literal.", [null !== (k = null == S ? void 0 : null === (w = S.value) || void 0 === w ? void 0 : w.loc) && void 0 !== k ? k : n.loc]);
      }

      var _ = o;

      if (null == _) {
        var E = e.args.filter(function (e) {
          return !C.isConnectionCall({
            name: e.name,
            value: null
          });
        }).map(function (e) {
          return e.name;
        });
        _ = 0 !== E.length ? E : null;
      }

      var T = null;

      if (n.name === R) {
        var F,
            x = n.args.find(function (e) {
          return "initial_count" === e.name;
        }),
            A = n.args.find(function (e) {
          return "if" === e.name;
        });

        if (null != i && "string" != typeof i) {
          var L,
              I,
              O = n.args.find(function (e) {
            return "label" === e.name;
          });
          throw d("Expected the 'label' argument to @".concat(n.name, " to be a string literal for field ").concat(e.name, "."), [null !== (L = null == O ? void 0 : null === (I = O.value) || void 0 === I ? void 0 : I.loc) && void 0 !== L ? L : n.loc]);
        }

        T = {
          if: A,
          initialCount: x,
          label: null !== (F = i) && void 0 !== F ? F : a
        };
      }

      var V = n.args.find(function (e) {
        return "dynamicKey_UNSTABLE" === e.name;
      }),
          M = null;

      if (null != V) {
        if (!D.ENABLE_VARIABLE_CONNECTION_KEY || "Variable" !== V.value.kind) throw d("Unsupported 'dynamicKey_UNSTABLE' argument to @".concat(n.name, ". This argument is only valid when the feature flag is enabled and ") + "the variable must be a variable", [n.loc]);
        M = V.value;
      }

      return {
        handler: r,
        key: a,
        dynamicKey: M,
        filters: _,
        stream: T
      };
    }(m, b),
        L = function (e, n, t) {
      var r = n.includes(null),
          a = O(e, v),
          i = O(e, y),
          o = null,
          l = null,
          s = null;
      a && !i ? (o = "forward", l = a, s = O(e, p)) : i && !a ? (o = "backward", l = i, s = O(e, h)) : i && a && (o = "bidirectional");
      var u = l && "Variable" === l.value.kind ? l.value.variableName : null,
          c = s && "Variable" === s.value.kind ? s.value.variableName : null;
      if (null != t.stream) return {
        count: u,
        cursor: c,
        direction: o,
        path: r ? null : n,
        stream: !0
      };
      return {
        count: u,
        cursor: c,
        direction: o,
        path: r ? null : n
      };
    }(m, c, x);

    n.connectionMetadata.push(L);
    var I = {
      name: null !== (t = x.handler) && void 0 !== t ? t : A,
      key: x.key,
      dynamicKey: x.dynamicKey,
      filters: x.filters
    },
        V = L.direction;

    if (null != V) {
      var M = function (e, n, t, r, o, u) {
        var c,
            m,
            p,
            h,
            v = {
          kind: "Derived",
          source: n.loc
        },
            g = {
          kind: "Derived",
          source: u
        },
            y = C.get(),
            b = y.CURSOR,
            k = y.EDGES,
            w = y.END_CURSOR,
            S = y.HAS_NEXT_PAGE,
            _ = y.HAS_PREV_PAGE,
            T = y.NODE,
            x = y.PAGE_INFO,
            D = y.START_CURSOR;
        n.selections.forEach(function (e) {
          if ("LinkedField" === e.kind) {
            if (e.name === k) {
              if (null != c) throw f("RelayConnectionTransform: Unexpected duplicate field '".concat(k, "'."), [c.loc, e.loc]);
              return void (c = e);
            }

            if (e.name === x) {
              if (null != m) throw f("RelayConnectionTransform: Unexpected duplicate field '".concat(x, "'."), [m.loc, e.loc]);
              return void (m = e);
            }
          }
        });
        var A = o.stream;
        null != A && (p = {
          args: [A.if, A.initialCount, {
            kind: "Argument",
            loc: g,
            metadata: null,
            name: "label",
            type: E,
            value: {
              kind: "Literal",
              loc: g,
              metadata: null,
              value: A.label
            }
          }].filter(Boolean),
          kind: "Directive",
          loc: g,
          metadata: null,
          name: "stream"
        }, h = {
          args: [A.if, {
            kind: "Argument",
            loc: g,
            metadata: null,
            name: "label",
            type: E,
            value: {
              kind: "Literal",
              loc: g,
              metadata: null,
              value: A.label + "$" + x
            }
          }].filter(Boolean),
          kind: "Directive",
          loc: g,
          metadata: null,
          name: "defer"
        });

        if (c && c.alias !== c.name) {
          if (A) throw d("@stream_connection does not support aliasing the '".concat(k, "' field."), [c.loc]);
          c = null;
        }

        if (m && m.alias !== m.name) {
          if (A) throw d("@stream_connection does not support aliasing the '".concat(x, "' field."), [m.loc]);
          m = null;
        }

        var R = c,
            N = m,
            L = t.getFields()[k].type,
            I = t.getFields()[x].type;
        null == R && (R = {
          alias: k,
          args: [],
          directives: [],
          handles: null,
          kind: "LinkedField",
          loc: v,
          metadata: null,
          name: k,
          selections: [],
          type: L
        });
        null == N && (N = {
          alias: x,
          args: [],
          directives: [],
          handles: null,
          kind: "LinkedField",
          loc: v,
          metadata: null,
          name: x,
          selections: [],
          type: I
        });
        var O,
            V = s.getRawType(I);
        O = "forward" === r ? "fragment PageInfo on ".concat(String(V), " {\n      ").concat(w, "\n      ").concat(S, "\n    }") : "backward" === r ? "fragment PageInfo on ".concat(String(V), "  {\n      ").concat(_, "\n      ").concat(D, "\n    }") : "fragment PageInfo on ".concat(String(V), "  {\n      ").concat(w, "\n      ").concat(S, "\n      ").concat(_, "\n      ").concat(D, "\n    }");
        var M = F(O),
            G = l.transform(e.clientSchema, [M.definitions[0]])[0];
        if ("LinkedField" !== N.kind) throw f("RelayConnectionTransform: Expected generated pageInfo selection to be a LinkedField", [n.loc]);
        N = (0, a.default)({}, N, {
          selections: [].concat((0, i.default)(N.selections), [{
            directives: [],
            kind: "InlineFragment",
            loc: v,
            metadata: null,
            typeCondition: G.type,
            selections: G.selections
          }])
        }), null != h && (N = {
          directives: [h],
          kind: "InlineFragment",
          loc: v,
          metadata: null,
          typeCondition: t,
          selections: [N]
        });
        var P = "\n    fragment Edges on ".concat(String(s.getRawType(L)), " {\n      ").concat(b, "\n      ").concat(T, ' {\n        __typename # rely on GenerateRequisiteFieldTransform to add "id"\n      }\n    }\n  '),
            j = F(P),
            q = l.transform(e.clientSchema, [j.definitions[0]])[0];
        R = (0, a.default)({}, R, {
          directives: null != p ? [].concat((0, i.default)(R.directives), [p]) : R.directives,
          selections: [].concat((0, i.default)(R.selections), [{
            directives: [],
            kind: "InlineFragment",
            loc: v,
            metadata: null,
            typeCondition: q.type,
            selections: q.selections
          }])
        });
        var Q = n.selections.map(function (e) {
          return null != R && null != c && e === c ? R : null != N && null != m && e === m ? N : e;
        });
        null == c && null != R && Q.push(R);
        null == m && null != N && Q.push(N);
        return Q;
      }(this.getContext(), m, r, V, x, b.loc);

      m = (0, a.default)({}, m, {
        selections: M
      });
    }

    return (0, a.default)({}, m, {
      directives: m.directives.filter(function (e) {
        return e !== b;
      }),
      handles: m.handles ? [].concat((0, i.default)(m.handles), [I]) : [I]
    });
  }

  function O(e, n) {
    return e.args && e.args.find(function (e) {
      return e.name === n;
    });
  }

  e.exports = {
    CONNECTION: A,
    SCHEMA_EXTENSION: "\n  directive @connection(\n    key: String!\n    filters: [String]\n    handler: String\n    dynamicKey_UNSTABLE: String\n  ) on FIELD\n\n  directive @stream_connection(\n    key: String!\n    filters: [String]\n    handler: String\n    label: String!\n    initial_count: Int!\n    if: Boolean = true\n    dynamicKey_UNSTABLE: String\n  ) on FIELD\n",
    transform: function (e) {
      return o.transform(e, {
        Fragment: L,
        LinkedField: I,
        Root: L
      }, function (e) {
        return {
          path: [],
          connectionMetadata: []
        };
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  e.exports = {
    AFTER: "after",
    BEFORE: "before",
    FIRST: "first",
    KEY: "key",
    LAST: "last"
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0)(t(2)),
      a = t(5),
      i = t(7).getNullableType,
      o = t(3).createUserError,
      l = t(1).GraphQLList;

  function s(e, n) {
    var t,
        a,
        s = this.traverse(e, n),
        u = s.directives.find(function (e) {
      return "stream" === e.name;
    });
    if (null == u) return s;
    if (!(i(e.type) instanceof l)) throw o("Invalid use of @stream on non-plural field '".concat(e.name, "'"), [u.loc]);
    s = (0, r.default)({}, s, {
      directives: s.directives.filter(function (e) {
        return "stream" !== e.name;
      })
    });
    var c = u.args.find(function (e) {
      return "if" === e.name;
    });
    if (p(c)) return s;
    var f = u.args.find(function (e) {
      return "initial_count" === e.name;
    });
    if (null == f) throw o("Invalid use of @stream, the 'initial_count' argument is required.", [u.loc]);
    var h = null !== (t = d(u, "label")) && void 0 !== t ? t : e.alias,
        v = m(n.documentName, "stream", h);
    return n.recordLabel(v, u), {
      if: null !== (a = null == c ? void 0 : c.value) && void 0 !== a ? a : null,
      initialCount: f.value,
      kind: "Stream",
      label: v,
      loc: {
        kind: "Derived",
        source: u.loc
      },
      metadata: null,
      selections: [s]
    };
  }

  function u(e, n) {
    var t = e.directives.find(function (e) {
      return "stream" === e.name;
    });
    if (null != t) throw o("Invalid use of @stream on scalar field '".concat(e.name, "'"), [t.loc]);
    return this.traverse(e, n);
  }

  function c(e, n) {
    var t,
        a,
        i = this.traverse(e, n),
        o = i.directives.find(function (e) {
      return "defer" === e.name;
    });
    if (null == o) return i;
    i = (0, r.default)({}, i, {
      directives: i.directives.filter(function (e) {
        return "defer" !== e.name;
      })
    });
    var l = o.args.find(function (e) {
      return "if" === e.name;
    });
    if (p(l)) return i;
    var s = null !== (t = d(o, "label")) && void 0 !== t ? t : e.typeCondition.name,
        u = m(n.documentName, "defer", s);
    return n.recordLabel(u, o), {
      if: null !== (a = null == l ? void 0 : l.value) && void 0 !== a ? a : null,
      kind: "Defer",
      label: u,
      loc: {
        kind: "Derived",
        source: o.loc
      },
      metadata: {
        fragmentTypeCondition: i.typeCondition
      },
      selections: [i]
    };
  }

  function f(e, n) {
    var t,
        a,
        i = this.traverse(e, n),
        o = i.directives.find(function (e) {
      return "defer" === e.name;
    });
    if (null == o) return i;
    i = (0, r.default)({}, i, {
      directives: i.directives.filter(function (e) {
        return "defer" !== e.name;
      })
    });
    var l = o.args.find(function (e) {
      return "if" === e.name;
    });
    if (p(l)) return i;
    var s = null !== (t = d(o, "label")) && void 0 !== t ? t : e.name,
        u = m(n.documentName, "defer", s);
    return n.recordLabel(u, o), {
      if: null !== (a = null == l ? void 0 : l.value) && void 0 !== a ? a : null,
      kind: "Defer",
      label: u,
      loc: {
        kind: "Derived",
        source: o.loc
      },
      metadata: null,
      selections: [i]
    };
  }

  function d(e, n) {
    var t = e.args.find(function (e) {
      return e.name === n;
    });
    if (null == t) return null;
    var r = "Literal" === t.value.kind ? t.value.value : null;
    if (null == r || "string" != typeof r) throw o("Expected the '".concat(n, "' value to @").concat(e.name, " to be a string literal if provided."), [t.value.loc]);
    return r;
  }

  function m(e, n, t) {
    return "".concat(e, "$").concat(n, "$").concat(t);
  }

  function p(e) {
    return null != e && "Literal" === e.value.kind && !1 === e.value.value;
  }

  e.exports = {
    transform: function (e) {
      return a.transform(e, {
        FragmentSpread: f,
        InlineFragment: c,
        LinkedField: s,
        ScalarField: u
      }, function (e) {
        var n = new Map();
        return {
          documentName: e.name,
          recordLabel: function (e, t) {
            var r = n.get(e);

            if (r) {
              var a,
                  i = t.args.find(function (e) {
                return "label" === e.name;
              }),
                  l = r.args.find(function (e) {
                return "label" === e.name;
              }),
                  s = null !== (a = null == l ? void 0 : l.loc) && void 0 !== a ? a : r.loc;
              throw i ? o("Invalid use of @".concat(t.name, ", the provided label is ") + "not unique. Specify a unique 'label' as a literal string.", [null == i ? void 0 : i.loc, s]) : o("Invalid use of @".concat(t.name, ", could not generate a ") + "default label that is unique. Specify a unique 'label' as a literal string.", [t.loc, s]);
            }

            n.set(e, t);
          }
        };
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0)(t(2)),
      a = t(5),
      i = t(4),
      o = t(1).GraphQLString,
      l = t(11).getRelayHandleKey;

  function s(e) {
    "LinkedField" === e.kind && (e = this.traverse(e));
    var n = e.handles;
    if (!n || !n.length) return e;
    1 !== n.length && i(!1, 'RelayFieldHandleTransform: Expected fields to have at most one "handle" property, got `%s`.', n.join(", "));
    var t = e.alias,
        a = n[0],
        s = l(a.name, a.key, e.name),
        u = a.filters,
        c = u ? e.args.filter(function (e) {
      return -1 !== u.indexOf(e.name);
    }) : [];
    return null != a.dynamicKey && c.push({
      kind: "Argument",
      loc: a.dynamicKey.loc,
      metadata: null,
      name: "__dynamicKey",
      type: o,
      value: a.dynamicKey
    }), (0, r.default)({}, e, {
      args: c,
      alias: t,
      name: s,
      handles: null
    });
  }

  e.exports = {
    transform: function (e) {
      return a.transform(e, {
        LinkedField: s,
        ScalarField: s
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0),
      a = r(t(2)),
      i = r(t(6)),
      o = t(5),
      l = t(7),
      s = t(59).hasUnaliasedSelection,
      u = t(1),
      c = u.assertAbstractType,
      f = u.assertCompositeType,
      d = u.assertLeafType,
      m = l.canHaveSelections,
      p = l.getRawType,
      h = l.generateIDField,
      v = l.hasID,
      g = l.implementsInterface,
      y = l.isAbstractType,
      b = l.mayImplement,
      k = "id",
      w = "ID",
      S = "Node";

  function _(e, n) {
    var t = this.traverse(e, n);
    if (s(e, k)) return t;
    var r = this.getContext().serverSchema,
        o = f(p(e.type));
    if (m(o) && v(r, o)) return (0, a.default)({}, t, {
      selections: [].concat((0, i.default)(t.selections), [n.idField])
    });

    if (y(o)) {
      var l = (0, i.default)(t.selections);

      if (b(r, o, S)) {
        var u = f(r.getType(S));
        l.push(E(u, n.idField));
      }

      var d = c(o);
      return r.getPossibleTypes(d).forEach(function (e) {
        !g(e, S) && v(r, e) && l.push(E(e, n.idField));
      }), (0, a.default)({}, t, {
        selections: l
      });
    }

    return t;
  }

  function E(e, n) {
    return {
      kind: "InlineFragment",
      directives: [],
      loc: {
        kind: "Generated"
      },
      metadata: null,
      typeCondition: e,
      selections: [n]
    };
  }

  e.exports = {
    transform: function (e) {
      var n = d(e.serverSchema.getType(w)),
          t = {
        idField: h(n)
      };
      return o.transform(e, {
        LinkedField: _
      }, function () {
        return t;
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0),
      a = r(t(2)),
      i = r(t(6)),
      o = t(5),
      l = t(7),
      s = t(59).hasUnaliasedSelection,
      u = t(1).assertLeafType,
      c = l.isAbstractType,
      f = "__typename",
      d = "String",
      m = new Map();

  function p(e, n) {
    var t = m.get(e);
    return null != t ? t : (t = this.traverse(e, n), c(t.type) && !s(t, f) && (t = (0, a.default)({}, t, {
      selections: [n.typenameField].concat((0, i.default)(t.selections))
    })), m.set(e, t), t);
  }

  e.exports = {
    transform: function (e) {
      m = new Map();
      var n = u(e.serverSchema.getType(d)),
          t = {
        typenameField: {
          kind: "ScalarField",
          alias: f,
          args: [],
          directives: [],
          handles: null,
          loc: {
            kind: "Generated"
          },
          metadata: null,
          name: f,
          type: n
        }
      };
      return o.transform(e, {
        LinkedField: p
      }, function () {
        return t;
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0)(t(2)),
      a = t(5);

  function i(e) {
    var n = this.traverse(e);
    return n.handles ? (0, r.default)({}, n, {
      handles: null
    }) : n;
  }

  e.exports = {
    transform: function (e) {
      return a.transform(e, {
        LinkedField: i,
        ScalarField: i
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(5),
      a = t(28);

  function i(e, n) {
    return this.traverse(e, {
      parentType: e.type,
      splitOperations: n.splitOperations
    });
  }

  function o(e, n) {
    return this.traverse(e, {
      parentType: e.typeCondition,
      splitOperations: n.splitOperations
    });
  }

  function l(e, n) {
    var t = a(e.name);
    if (n.splitOperations.has(t)) return e;
    var r = this.traverse(e, n),
        i = {
      kind: "SplitOperation",
      name: t,
      selections: r.selections,
      loc: {
        kind: "Derived",
        source: e.loc
      },
      metadata: {
        derivedFrom: r.name
      },
      type: n.parentType
    };
    return n.splitOperations.set(t, i), r;
  }

  e.exports = {
    transform: function (e) {
      var n = new Map();
      return r.transform(e, {
        LinkedField: i,
        InlineFragment: o,
        ModuleImport: l
      }, function (e) {
        return {
          parentType: e.type,
          splitOperations: n
        };
      }).addAll(Array.from(n.values()));
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0),
      a = r(t(2)),
      i = r(t(6)),
      o = t(5),
      l = t(1),
      s = l.getNullableType,
      u = l.isEnumType,
      c = l.isNullableType,
      f = l.isListType;

  function d(e) {
    var n = s(e),
        t = c(e),
        r = f(n),
        a = f(n) ? s(n.ofType) : n;
    return {
      type: f(a) ? String(a) : null != a ? a.name : "String",
      enumValues: u(a) ? a.getValues().map(function (e) {
        return e.value;
      }) : null,
      plural: r,
      nullable: t
    };
  }

  function m(e) {
    var n = e.directives.find(function (e) {
      return "relay_test_operation" === e.name;
    });
    if (null == n) return e;

    for (var t = this.getContext(), r = [{
      selections: e.selections,
      path: []
    }], o = {}, l = function () {
      var e = r.pop(),
          n = e.selections,
          a = e.path;
      n.forEach(function (e) {
        switch (e.kind) {
          case "FragmentSpread":
            var n = t.get(e.name);
            null != n && r.unshift({
              selections: n.selections,
              path: a
            });
            break;

          case "ScalarField":
            var l = [].concat((0, i.default)(a), [e.alias]);
            o[l.join(".")] = d(e.type);
            break;

          case "ConnectionField":
          case "LinkedField":
            var s = [].concat((0, i.default)(a), [e.alias]);
            o[s.join(".")] = d(e.type), r.unshift({
              selections: e.selections,
              path: s
            });
            break;

          case "Condition":
          case "ClientExtension":
          case "Defer":
          case "InlineDataFragmentSpread":
          case "InlineFragment":
          case "ModuleImport":
          case "Stream":
            r.unshift({
              selections: e.selections,
              path: a
            });
        }
      });
    }; r.length > 0;) l();

    return (0, a.default)({}, e, {
      directives: e.directives.filter(function (e) {
        return e !== n;
      }),
      metadata: (0, a.default)({}, e.metadata || {}, {
        relayTestingSelectionTypeInfo: o
      })
    });
  }

  e.exports = {
    SCHEMA_EXTENSION: "directive @relay_test_operation on QUERY | MUTATION | SUBSCRIPTION",
    transform: function (e) {
      return o.transform(e, {
        Fragment: function (e) {
          return e;
        },
        Root: m,
        SplitOperation: function (e) {
          return e;
        }
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(5);

  function a(e) {
    return this.getContext().serverSchema.getType(e.type.name) ? this.traverse(e) : null;
  }

  function i(e, n) {
    return null;
  }

  e.exports = {
    transform: function (e) {
      return r.transform(e, {
        Fragment: a,
        ClientExtension: i
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0),
      a = r(t(2)),
      i = r(t(6)),
      o = t(5),
      l = t(15).Map,
      s = t(41),
      u = t(49),
      c = t(4);
  var f = new Map();

  function d(e) {
    return f = new Map(), function e(n, t) {
      var r = 0 === t.size;
      var o;
      if (r && null != (o = f.get(n))) return o;
      var d = [];
      (function (e) {
        var n = s(e, function (e) {
          return "ScalarField" === e.kind || "LinkedField" === e.kind;
        }),
            t = n[0],
            r = n[1];
        return [].concat((0, i.default)(t), (0, i.default)(r));
      })(n.selections).forEach(function (n) {
        var r = u(n);

        switch (n.kind) {
          case "ScalarField":
          case "FragmentSpread":
            t.has(r) || (d.push(n), t = t.set(r, null));
            break;

          case "Defer":
          case "Stream":
          case "ModuleImport":
          case "ClientExtension":
          case "InlineDataFragmentSpread":
          case "ConnectionField":
          case "LinkedField":
            var a = e(n, t.get(r) || new l());
            a.node && (d.push(a.node), t = t.set(r, a.selectionMap));
            break;

          case "InlineFragment":
          case "Condition":
            var i = e(n, t.get(r) || t);
            i.node && (d.push(i.node), t = t.set(r, i.selectionMap));
            break;

          default:
            c(!1, "SkipRedundantNodesTransform: Unexpected node kind `%s`.", n.kind);
        }
      });
      var m = d.length ? (0, a.default)({}, n, {
        selections: d
      }) : null;
      o = {
        selectionMap: t,
        node: m
      };
      r && f.set(n, o);
      return o;
    }(e, new l()).node;
  }

  e.exports = {
    transform: function (e) {
      return o.transform(e, {
        Root: d,
        Fragment: d
      });
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0),
      a = r(t(2)),
      i = r(t(6)),
      o = t(5),
      l = t(4),
      s = "fail",
      u = "pass",
      c = "variable";
  e.exports = {
    transform: function (e) {
      var n = new Map(),
          t = o.transform(e, {
        Root: function (t) {
          return function e(n, t, r) {
            for (var o, f, d = (0, i.default)(r.selections); d.length;) {
              var m = d.shift(),
                  p = void 0;

              switch (m.kind) {
                case "Condition":
                  var h = "Variable" === (f = m).condition.kind ? c : f.condition.value === f.passingValue ? u : s;
                  h === u ? d.unshift.apply(d, (0, i.default)(m.selections)) : h === c && (p = e(n, t, m));
                  break;

                case "FragmentSpread":
                  if (!t.has(m.name)) {
                    var v = n.getFragment(m.name),
                        g = e(n, t, v);
                    t.set(m.name, g);
                  }

                  t.get(m.name) && (p = m);
                  break;

                case "ClientExtension":
                case "ModuleImport":
                case "LinkedField":
                case "ConnectionField":
                case "InlineFragment":
                case "Defer":
                case "Stream":
                  p = e(n, t, m);
                  break;

                case "ScalarField":
                  p = m;
                  break;

                case "InlineDataFragmentSpread":
                  l(!1, "SkipUnreachableNodeTransform: Did not expect an InlineDataFragmentSpread here. Only expecting InlineDataFragmentSpread in reader ASTs and this transform to run only on normalization ASTs.");

                default:
                  m.kind, l(!1, "SkipUnreachableNodeTransform: Unexpected selection kind `%s`.", m.kind);
              }

              p && (o = o || []).push(p);
            }

            return o ? (0, a.default)({}, r, {
              selections: o
            }) : null;
          }(e, n, t);
        },
        Fragment: function (e) {
          return null;
        }
      });
      return Array.from(n.values()).reduce(function (e, n) {
        return n ? e.add(n) : e;
      }, t);
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(97),
      a = t(98);
  e.exports = {
    codegenValidations: [a],
    printValidations: [r]
  };
}, function (e, n, t) {
  "use strict";

  var r = t(60),
      a = t(3).createUserError,
      i = t(42).getFieldDefinitionStrict,
      o = t(1).isRequiredArgument;

  function l(e, n) {
    n.parentType;
    var t = n.rootNode,
        r = this.getContext().serverSchema.getDirective(e.name);
    null != r && c(e, r.args, t);
  }

  function s(e, n) {
    var t = n.rootNode;
    this.traverse(e, {
      rootNode: t,
      parentType: e.typeCondition
    });
  }

  function u(e, n) {
    var t = n.parentType,
        r = n.rootNode,
        o = this.getContext(),
        l = i(o.serverSchema, t, e.name);

    if (null == l) {
      if (!e.directives.some(function (e) {
        return "fixme_fat_interface" === e.name;
      })) throw a("Unknown field '".concat(e.name, "' on type '").concat(String(t), "'."), [e.loc]);
    } else c(e, l.args, r);

    this.traverse(e, {
      rootNode: r,
      parentType: e.type
    });
  }

  function c(e, n, t) {
    var r = !0,
        i = !1,
        l = void 0;

    try {
      for (var s, u = function () {
        var n = s.value;
        if (o(n) && !e.args.some(function (e) {
          return e.name === n.name;
        })) throw a("Required argument '".concat(n.name, ": ").concat(String(n.type), "' is missing ") + "on '".concat(e.name, "' in '").concat(t.name, "'."), [e.loc, t.loc]);
      }, c = n[Symbol.iterator](); !(r = (s = c.next()).done); r = !0) u();
    } catch (e) {
      i = !0, l = e;
    } finally {
      try {
        r || null == c.return || c.return();
      } finally {
        if (i) throw l;
      }
    }
  }

  e.exports = function (e) {
    r.validate(e, {
      Directive: l,
      InlineFragment: s,
      ConnectionField: u,
      LinkedField: u,
      ScalarField: u
    }, function (e) {
      return {
        rootNode: e,
        parentType: e.type
      };
    });
  };
}, function (e, n, t) {
  "use strict";

  var r = t(60),
      a = t(3).createUserError,
      i = {
    Defer: "defer",
    Stream: "stream"
  };

  function o(e, n) {
    var t = !0,
        r = !1,
        a = void 0;

    try {
      for (var i, o = e.selections[Symbol.iterator](); !(t = (i = o.next()).done); t = !0) {
        var l = i.value;
        this.visit(l, {
          rootClientSelection: l
        });
      }
    } catch (e) {
      r = !0, a = e;
    } finally {
      try {
        t || null == o.return || o.return();
      } finally {
        if (r) throw a;
      }
    }
  }

  function l(e, n) {
    if (n.rootClientSelection && s("@".concat(i[e.kind]), e.loc, n.rootClientSelection.loc), e.selections.every(function (e) {
      return "ClientExtension" === e.kind;
    })) {
      var t,
          r = e.selections[0];
      s("@".concat(i[e.kind]), e.loc, r && "ClientExtension" === r.kind ? null === (t = r.selections[0]) || void 0 === t ? void 0 : t.loc : null);
    }

    this.traverse(e, n);
  }

  function s(e, n, t) {
    throw a("Unexpected directive: ".concat(e, ". ") + "This directive can only be used on fields/fragments that are fetched from the server schema, but it is used inside a client-only selection.", null == t || n === t ? [n] : [n, t]);
  }

  e.exports = function (e) {
    r.validate(e, {
      ClientExtension: o,
      Defer: l,
      Stream: l
    }, function () {
      return {
        rootClientSelection: null
      };
    });
  };
}, function (e, n, t) {
  "use strict";

  var r = t(100),
      a = t(102),
      i = t(1),
      o = t(9),
      l = t(22),
      s = new r("RelayFindGraphQLTags", "v1");

  function u(e, n, t) {
    var r = e(n, t),
        o = a(t);
    return r.forEach(function (e) {
      return function (e, n, t) {
        var r = e.template,
            a = e.keyName,
            o = e.sourceLocationOffset;
        i.parse(new i.Source(r, t, o)).definitions.forEach(function (e) {
          if ("OperationDefinition" === e.kind) {
            null == e.name && c(!1, "RelayFindGraphQLTags: In module `%s`, an operation requires a name.", n, e.kind);
            var t = e.name.value,
                r = t.match(/^(.*)(Mutation|Query|Subscription)$/);
            r && t.startsWith(n) || c(!1, 'RelayFindGraphQLTags: Operation names in graphql tags must be prefixed with the module name and end in "Mutation", "Query", or "Subscription". Got `%s` in module `%s`.', t, n);
          } else if ("FragmentDefinition" === e.kind) {
            var i = e.name.value;
            null != a ? i !== n + "_" + a && c(!1, "RelayFindGraphQLTags: Container fragment names must be `<ModuleName>_<propName>`. Got `%s`, expected `%s`.", i, n + "_" + a) : i.startsWith(n) || c(!1, "RelayFindGraphQLTags: Fragment names in graphql tags must be prefixed with the module name. Got `%s` in module `%s`.", i, n);
          }
        });
      }(e, o, t);
    }), r.map(function (e) {
      return e.template;
    });
  }

  function c(e, n) {
    if (!e) {
      for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), a = 2; a < t; a++) r[a - 2] = arguments[a];

      throw new Error(l.format.apply(l, [n].concat(r)));
    }
  }

  e.exports = {
    find: u,
    memoizedFind: function (e, n, t, r) {
      return r.exists || c(!1, "RelayFindGraphQLTags: Called with non-existent file `%s`", r.relPath), s.getOrCompute(r.hash, u.bind(null, e, n, o.join(t, r.relPath)));
    }
  };
}, function (e, n, t) {
  "use strict";

  var r = t(0)(t(62)),
      a = t(8),
      i = t(12),
      o = t(13),
      l = t(101),
      s = t(9),
      u = function () {
    function e(e, n) {
      (0, r.default)(this, "_dir", null), this._name = e, this._cacheBreaker = n;
    }

    var n = e.prototype;
    return n._getFile = function (e) {
      if (null == this._dir) {
        var n = l.userInfo().username,
            t = i.createHash("md5").update(this._cacheBreaker).update(n).digest("hex"),
            r = s.join(l.tmpdir(), "".concat(this._name, "-").concat(t));
        if (!o.existsSync(r)) try {
          o.mkdirSync(r);
        } catch (e) {
          if ("EEXIST" !== e.code) throw e;
        }
        this._dir = r;
      }

      return s.join(this._dir, e);
    }, n.getOrCompute = function (e, n) {
      var t = this;
      return a.run("RelayCompilerCache.getOrCompute", function () {
        var r = t._getFile(e);

        if (o.existsSync(r)) try {
          return JSON.parse(o.readFileSync(r, "utf8"));
        } catch (e) {}
        var a = n();

        try {
          o.writeFileSync(r, JSON.stringify(a), "utf8");
        } catch (e) {}

        return a;
      });
    }, e;
  }();

  e.exports = u;
}, function (e, n) {
  e.exports = require("os");
}, function (e, n, t) {
  "use strict";

  var r = t(9);

  e.exports = function (e) {
    var n = r.basename(e, r.extname(e)),
        t = "index" === (n = n.replace(/(?:\.\w+)+/, "")) ? r.basename(r.dirname(e)) : n;
    return t = (t = t.replace(/(?:\.\w+)+/, "")).replace(/[^a-zA-Z0-9]+(\w?)/g, function (e, n) {
      return n.toUpperCase();
    });
  };
}, function (e, n, t) {
  "use strict";

  var r = null;
  e.exports = {
    set: function (e) {
      r = e;
    },
    check: function (e, n) {
      if (null == r) return !0;
      var t = r.get(e);
      return null == t || t.has(n);
    }
  };
}, function (module, exports, __webpack_require__) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(0),
      _asyncToGenerator = __webpack_require__(10),
      _defineProperty2 = _interopRequireDefault(__webpack_require__(62)),
      _objectSpread2 = _interopRequireDefault(__webpack_require__(2)),
      _toConsumableArray2 = _interopRequireDefault(__webpack_require__(6)),
      CodegenRunner = __webpack_require__(32),
      ConsoleReporter = __webpack_require__(37),
      DotGraphQLParser = __webpack_require__(35),
      RelayFileWriter = __webpack_require__(40),
      RelayIRTransforms = __webpack_require__(57),
      RelayLanguagePluginJavaScript = __webpack_require__(105),
      RelaySourceModuleParser = __webpack_require__(61),
      WatchmanClient = __webpack_require__(18),
      crypto = __webpack_require__(12),
      fs = __webpack_require__(13),
      invariant = __webpack_require__(4),
      path = __webpack_require__(9),
      _require = __webpack_require__(1),
      buildASTSchema = _require.buildASTSchema,
      buildClientSchema = _require.buildClientSchema,
      parse = _require.parse,
      printSchema = _require.printSchema,
      commonTransforms = RelayIRTransforms.commonTransforms,
      codegenTransforms = RelayIRTransforms.codegenTransforms,
      fragmentTransforms = RelayIRTransforms.fragmentTransforms,
      printTransforms = RelayIRTransforms.printTransforms,
      queryTransforms = RelayIRTransforms.queryTransforms,
      schemaExtensions = RelayIRTransforms.schemaExtensions;

  function buildWatchExpression(e) {
    return ["allof", ["type", "f"], ["anyof"].concat((0, _toConsumableArray2.default)(e.extensions.map(function (e) {
      return ["suffix", e];
    }))), ["anyof"].concat((0, _toConsumableArray2.default)(e.include.map(function (e) {
      return ["match", e, "wholename"];
    })))].concat((0, _toConsumableArray2.default)(e.exclude.map(function (e) {
      return ["not", ["match", e, "wholename"]];
    })));
  }

  function getFilepathsFromGlob(e, n) {
    var t = n.extensions,
        r = n.include,
        a = n.exclude,
        i = r.map(function (e) {
      return "".concat(e, "/*.+(").concat(t.join("|"), ")");
    });
    return __webpack_require__(106).sync(i, {
      cwd: e,
      ignore: a
    });
  }

  function getLanguagePlugin(language) {
    if ("javascript" === language) return RelayLanguagePluginJavaScript();
    var languagePlugin;

    if ("string" == typeof language) {
      var pluginPath = path.resolve(process.cwd(), language),
          requirePath = fs.existsSync(pluginPath) ? pluginPath : "relay-compiler-language-".concat(language);

      try {
        languagePlugin = eval("require")(requirePath), languagePlugin.default && (languagePlugin = languagePlugin.default);
      } catch (n) {
        var e = new Error("Unable to load language plugin ".concat(requirePath, ": ").concat(n.message));
        throw e.stack = n.stack, e;
      }
    } else languagePlugin = language;

    if (languagePlugin.default && (languagePlugin = languagePlugin.default), "function" == typeof languagePlugin) return languagePlugin();
    throw new Error("Expected plugin to be a initializer function.");
  }

  function getPersistQueryFunction(config) {
    var configValue = config.persistFunction;
    if (null == configValue) return null;

    if ("string" != typeof configValue) {
      if ("function" == typeof configValue) return configValue;
      throw new Error("Expected persistFunction to be a path string or a function.");
    }

    try {
      var persistFunction = eval("require")(path.resolve(process.cwd(), configValue));
      return persistFunction.default ? persistFunction.default : persistFunction;
    } catch (n) {
      var e = new Error("Unable to load persistFunction ".concat(configValue, ": ").concat(n.message));
      throw e.stack = n.stack, e;
    }
  }

  function main(e) {
    return _main.apply(this, arguments);
  }

  function _main() {
    return (_main = _asyncToGenerator(function* (e) {
      if (e.verbose && e.quiet) throw new Error("I can't be quiet and verbose at the same time");
      e = getPathBasedConfig(e), e = yield getWatchConfig(e);
      var n = module.exports.getCodegenRunner(e),
          t = e.watch ? yield n.watchAll() : yield n.compileAll();
      "ERROR" === t && process.exit(100), e.validate && "NO_CHANGES" !== t && process.exit(101);
    })).apply(this, arguments);
  }

  function getPathBasedConfig(e) {
    var n = path.resolve(process.cwd(), e.schema);
    if (!fs.existsSync(n)) throw new Error("--schema path does not exist: ".concat(n));
    var t = path.resolve(process.cwd(), e.src);
    if (!fs.existsSync(t)) throw new Error("--src path does not exist: ".concat(t));
    var r = e.persistOutput;

    if ("string" == typeof r) {
      r = path.resolve(process.cwd(), r);
      var a = path.dirname(r);
      if (!fs.existsSync(a)) throw new Error("--persistOutput path does not exist: ".concat(r));
    }

    return (0, _objectSpread2.default)({}, e, {
      schema: n,
      src: t,
      persistOutput: r
    });
  }

  function getWatchConfig(e) {
    return _getWatchConfig.apply(this, arguments);
  }

  function _getWatchConfig() {
    return (_getWatchConfig = _asyncToGenerator(function* (e) {
      var n = e.watchman && (yield WatchmanClient.isAvailable());

      if (e.watch) {
        if (!n) throw new Error("Watchman is required to watch for changes.");
        if (!module.exports.hasWatchmanRootFile(e.src)) throw new Error('\n--watch requires that the src directory have a valid watchman "root" file.\n\nRoot files can include:\n- A .git/ Git folder\n- A .hg/ Mercurial folder\n- A .watchmanconfig file\n\nEnsure that one such file exists in '.concat(e.src, " or its parents.\n      ").trim());
      } else n && !e.validate && console.log("HINT: pass --watch to keep watching for changes.");

      return (0, _objectSpread2.default)({}, e, {
        watchman: n
      });
    })).apply(this, arguments);
  }

  function getCodegenRunner(e) {
    var n,
        t = new ConsoleReporter({
      verbose: e.verbose,
      quiet: e.quiet
    }),
        r = getSchema(e.schema),
        a = getLanguagePlugin(e.language),
        i = getPersistQueryFunction(e),
        o = e.extensions || a.inputExtensions,
        l = a.outputExtension,
        s = o.join("/"),
        u = l,
        c = RelaySourceModuleParser(a.findGraphQLTags),
        f = e.artifactDirectory,
        d = null != f ? path.resolve(process.cwd(), f) : null,
        m = d || "__generated__",
        p = {
      extensions: o,
      include: e.include,
      exclude: ["**/*.graphql.*"].concat((0, _toConsumableArray2.default)(e.exclude))
    },
        h = {
      extensions: ["graphql"],
      include: e.include,
      exclude: [path.relative(e.src, e.schema)].concat(e.exclude)
    },
        v = (n = {}, (0, _defineProperty2.default)(n, s, {
      baseDir: e.src,
      getFileFilter: c.getFileFilter,
      getParser: c.getParser,
      getSchema: function () {
        return r;
      },
      watchmanExpression: e.watchman ? buildWatchExpression(p) : null,
      filepaths: e.watchman ? null : getFilepathsFromGlob(e.src, p)
    }), (0, _defineProperty2.default)(n, "graphql", {
      baseDir: e.src,
      getParser: DotGraphQLParser.getParser,
      getSchema: function () {
        return r;
      },
      watchmanExpression: e.watchman ? buildWatchExpression(h) : null,
      filepaths: e.watchman ? null : getFilepathsFromGlob(e.src, h)
    }), n),
        g = (0, _defineProperty2.default)({}, u, {
      writeFiles: getRelayFileWriter(e.src, a, e.noFutureProofEnums, d, e.persistOutput, e.customScalars, i),
      isGeneratedFile: function (e) {
        return e.endsWith(".graphql." + l) && e.includes(m);
      },
      parser: s,
      baseParsers: ["graphql"]
    });
    return new CodegenRunner({
      reporter: t,
      parserConfigs: v,
      writerConfigs: g,
      onlyValidate: e.validate,
      sourceControl: null
    });
  }

  function defaultPersistFunction(e) {
    var n = crypto.createHash("md5");
    n.update(e);
    var t = n.digest("hex");
    return Promise.resolve(t);
  }

  function getRelayFileWriter(e, n, t, r, a, i, o) {
    return function () {
      var l = _asyncToGenerator(function* (l) {
        var s,
            u,
            c = l.onlyValidate,
            f = l.schema,
            d = l.documents,
            m = l.baseDocuments,
            p = l.sourceControl,
            h = l.reporter;

        if (null != o || null != a) {
          u = new Map();
          var v = o || defaultPersistFunction;

          s = function () {
            var e = _asyncToGenerator(function* (e) {
              var n = yield v(e);
              return "string" != typeof n && invariant(!1, "Expected persist function to return a string, got `%s`.", n), u.set(n, e), n;
            });

            return function (n) {
              return e.apply(this, arguments);
            };
          }();
        }

        var g = yield RelayFileWriter.writeAll({
          config: {
            baseDir: e,
            compilerTransforms: {
              commonTransforms: commonTransforms,
              codegenTransforms: codegenTransforms,
              fragmentTransforms: fragmentTransforms,
              printTransforms: printTransforms,
              queryTransforms: queryTransforms
            },
            customScalars: i || {},
            formatModule: n.formatModule,
            optionalInputFieldsForFlow: [],
            schemaExtensions: schemaExtensions,
            useHaste: !1,
            noFutureProofEnums: t,
            extension: n.outputExtension,
            typeGenerator: n.typeGenerator,
            outputDir: r,
            persistQuery: s
          },
          onlyValidate: c,
          schema: f,
          baseDocuments: m,
          documents: d,
          reporter: h,
          sourceControl: p
        });

        if (null != u && null != a) {
          var y = {},
              b = !0,
              k = !1,
              w = void 0;

          try {
            for (var S, _ = u.entries()[Symbol.iterator](); !(b = (S = _.next()).done); b = !0) {
              var E = S.value,
                  T = E[0],
                  F = E[1];
              y[T] = F;
            }
          } catch (e) {
            k = !0, w = e;
          } finally {
            try {
              b || null == _.return || _.return();
            } finally {
              if (k) throw w;
            }
          }

          var x = JSON.stringify(y, null, 2);
          fs.writeFileSync(a, x, "utf8");
        }

        return g;
      });

      return function (e) {
        return l.apply(this, arguments);
      };
    }();
  }

  function getSchema(e) {
    try {
      var n = fs.readFileSync(e, "utf8");
      return ".json" === path.extname(e) && (n = printSchema(buildClientSchema(JSON.parse(n).data))), n = "\n  directive @include(if: Boolean) on FRAGMENT_SPREAD | FIELD | INLINE_FRAGMENT\n  directive @skip(if: Boolean) on FRAGMENT_SPREAD | FIELD | INLINE_FRAGMENT\n\n  ".concat(n, "\n  "), buildASTSchema(parse(n), {
        assumeValid: !0
      });
    } catch (e) {
      throw new Error("\nError loading schema. Expected the schema to be a .graphql or a .json\nfile, describing your GraphQL server's API. Error detail:\n\n".concat(e.stack, "\n    ").trim());
    }
  }

  var WATCHMAN_ROOT_FILES = [".git", ".hg", ".watchmanconfig"];

  function hasWatchmanRootFile(e) {
    for (; path.dirname(e) !== e;) {
      if (WATCHMAN_ROOT_FILES.some(function (n) {
        return fs.existsSync(path.join(e, n));
      })) return !0;
      e = path.dirname(e);
    }

    return !1;
  }

  module.exports = {
    getCodegenRunner: getCodegenRunner,
    getLanguagePlugin: getLanguagePlugin,
    getWatchConfig: getWatchConfig,
    hasWatchmanRootFile: hasWatchmanRootFile,
    main: main
  };
}, function (e, n, t) {
  "use strict";

  var r = t(27),
      a = t(63),
      i = t(36).find;

  e.exports = function () {
    return {
      inputExtensions: ["js", "jsx"],
      outputExtension: "js",
      typeGenerator: r,
      formatModule: a,
      findGraphQLTags: i
    };
  };
}, function (e, n) {
  e.exports = require("fast-glob");
}, function (e, n, t) {
  "use strict";

  var r = t(0),
      a = t(10),
      i = r(t(6)),
      o = t(34);

  function l(e, n) {
    return new Promise(function (t, r) {
      o.execFile(e, n, function (e) {
        e ? r(e) : t();
      });
    });
  }

  var s = {
    addRemove: function () {
      var e = a(function* (e, n) {
        e.length > 0 && (yield l("hg", ["add"].concat((0, i.default)(e)))), n.length > 0 && (yield l("hg", ["forget"].concat((0, i.default)(n))));
      });
      return function (n, t) {
        return e.apply(this, arguments);
      };
    }()
  };
  e.exports = {
    SourceControlMercurial: s
  };
}]);