(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var n,i=o(7),s=o.n(i),c=o(6),r=o(8),a=o(1),d=(o(13),o(14),o(4)),l=o.n(d),u=o(0);!function(t){t.SORT_ALPHABETICALLY="Sort alphabetically",t.SORT_BY_LENGTH="Sort by length",t.DEFAULT=""}(n||(n={}));var b=[{id:1,good:"Dumplings"},{id:2,good:"Carrot"},{id:3,good:"Eggs"},{id:4,good:"Ice cream"},{id:5,good:"Apple"},{id:6,good:"Bread"},{id:7,good:"Fish"},{id:8,good:"Honey"},{id:9,good:"Jam"},{id:10,good:"Garlic"}];var g=function(){var t=Object(a.useState)(n.DEFAULT),e=Object(c.a)(t,2),o=e[0],i=e[1],s=Object(a.useState)(!1),d=Object(c.a)(s,2),g=d[0],h=d[1],j=function(t,e){var o=e.sortFild,i=e.reverseFild,s=Object(r.a)(t);return o&&s.sort((function(t,e){var i=t.good,s=e.good;switch(o){case n.SORT_ALPHABETICALLY:return i.localeCompare(s);case n.SORT_BY_LENGTH:return i.length-s.length;default:return 0}})),i&&s.reverse(),s}(b,{sortFild:o,reverseFild:g});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":o!==n.SORT_ALPHABETICALLY}),onClick:function(){return i(n.SORT_ALPHABETICALLY)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:l()("button","is-success",{"is-light":o!==n.SORT_BY_LENGTH}),onClick:function(){return i(n.SORT_BY_LENGTH)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button","is-warning",{"is-light":!g}),onClick:function(){return h(!g)},children:"Reverse"}),(o||g)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){i(n.DEFAULT),h(!1)},children:"Reset"})]}),Object(u.jsx)("ul",{children:Object(u.jsx)("ul",{children:j.map((function(t){var e=t.good,o=t.id;return Object(u.jsx)("li",{"data-cy":"Good",children:e},o)}))})})]})};s.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.fba933f6.chunk.js.map