(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{98:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(12),i=t(21),l=t(94),s=t.n(l);function c(){return(c=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function d(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  width: 100%;\n  min-width: 316px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto 60px;\n  padding: 0 20px;\n  background: ",'\n  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);\n  border-top: 6px solid #40a4f4;\n  border-radius: 0.5em;\n\n  h3,\n  ol {\n    width: 100%;\n  }\n\n  ol {\n    list-style: upper-alpha inside;\n    padding: 0;\n  }\n\n  h3 {\n    padding: 20px 10px;\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n    text-align: center;\n    font-size: 1.2rem;\n    font-family: "Nunito", sans-serif;\n    font-weight: 700;\n    word-wrap: break-word;\n  }\n\n  li {\n    padding: 20px 40px;\n    cursor: pointer;\n    font-family: "Nunito", sans-serif;\n    font-weight: 400;\n    box-shadow: 0 1px 0px 0 rgba(0, 0, 0, 0.05);\n  }\n\n  li:hover {\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n  }\n\n  .red {\n    color: #ee3e37;\n    position: relative;\n\n    &:after {\n      content:"❌";\n      color: #ee3e37;\n      position: absolute;\n      top: 35%;\n      right:20px;\n    }\n  }\n\n  .green {\n    color: #03d1ab;\n    position: relative;\n\n     &:after {\n      content: "✔️";\n      color: #03d1ab;\n      position: absolute;\n      top: 35%;\n      right:20px;\n     }\n  }\n  .disabled {\n    pointer-events: none;\n  }\n']);return d=function(){return n},n}var p=o.b.section(d(),function(n){return n.dragging?"aliceblue":"#fff"});e.default=function(n){var e=n.item,t=n.index,r=n.count,o=n.onSetCount;return a.a.createElement(i.b,{draggableId:"draggable-".concat(t),index:t},function(n,t){return a.a.createElement("div",{style:{margin:"auto",width:"30%"}},a.a.createElement(p,c({ref:n.innerRef},n.draggableProps,n.dragHandleProps,{dragging:t.isDragging}),a.a.createElement("h3",null,s.a.decode(e.text)),a.a.createElement("ol",null,e.answers.map(function(n){return a.a.createElement("li",{key:n.text+e.text,onClick:function(e){return function(n,e){e.correct?(n.target.className="green")&&(n.target.parentElement.className="disabled"):(n.target.className="red")&&(n.target.parentElement.className="disabled"),n.target.classList.contains("green")&&o(r+1)}(e,n)}},s.a.decode(n.text))}))))})}}}]);