(this["webpackJsonpreact-three-cubes"]=this["webpackJsonpreact-three-cubes"]||[]).push([[0],{46:function(t,e,o){},47:function(t,e,o){},52:function(t,e,o){"use strict";o.r(e);var a=o(7),c=o.n(a),i=o(40),n=o.n(i),s=(o(46),o(12)),r=(o(47),o(17)),j=o(56),h=o(57),b=o(58),d=o(35),p=o(15);Object(j.a)();var u=function(t){var e=t.position,o=t.args,c=t.color,i=(t.speed,Object(a.useRef)(null));Object(r.d)((function(){return i.current.rotation.x=i.current.rotation.y+=.01}));var n=Object(a.useState)(!1),j=Object(s.a)(n,2),b=j[0],u=j[1],l=Object(d.useSpring)({scale:b?[1.4,1.4,1.4]:[1,1,1]});return Object(p.jsxs)(d.a.mesh,{onClick:function(){return u(!b)},scale:l.scale,castShadow:!0,position:e,ref:i,children:[Object(p.jsx)("boxBufferGeometry",{attach:"geometry",args:o}),Object(p.jsx)(h.a,{attach:"material",color:b?"red":c})]})};var l=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(r.a,{shadows:!0,camera:{position:[-5,2,10],fov:60},children:[Object(p.jsx)("ambientLight",{intensity:.3}),Object(p.jsx)("directionalLight",{castShadow:!0,position:[0,10,0],intensity:1.5,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),Object(p.jsx)("pointLight",{position:[-10,0,-20],intensity:.5}),Object(p.jsx)("pointLight",{position:[0,-10,0],intensity:1.5}),Object(p.jsxs)("group",{children:[Object(p.jsxs)("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-3,0],receiveShadow:!0,children:[Object(p.jsx)("planeBufferGeometry",{attach:"geometry",args:[100,100]}),Object(p.jsx)("shadowMaterial",{attach:"material",opacity:.3})]}),Object(p.jsx)(u,{position:[0,1,0],color:"lightblue",args:[3,2,1],speed:2}),Object(p.jsx)(u,{position:[-2,1,-5],color:"pink",speed:6}),Object(p.jsx)(u,{position:[5,1,-2],color:"pink",speed:6})]}),Object(p.jsx)(b.a,{})]})})},O=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,59)).then((function(e){var o=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,n=e.getTTFB;o(t),a(t),c(t),i(t),n(t)}))};n.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(l,{})}),document.getElementById("root")),O()}},[[52,1,2]]]);
//# sourceMappingURL=main.a751826c.chunk.js.map