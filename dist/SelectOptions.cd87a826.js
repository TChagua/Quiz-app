(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{99:function(e,n,r){"use strict";r.r(n);var t=r(0),o=r.n(t),a=r(96),l=r(12),u=[{value:"easy",label:"easy"},{value:"medium",label:"medium"},{value:"hard",label:"hard"}],i=[{value:"general-knowledge",label:"General Knowledge"},{value:"animals",label:"Animals"},{value:"entertainment-books",label:"Books"},{value:"celebrities",label:"Celebrities"},{value:"science-computers",label:"Computers"},{value:"geography",label:"Geography"},{value:"history",label:"History"},{value:"mythology",label:"Mythology"},{value:"politics",label:"Politics"},{value:"science-nature",label:"Science & Nature"},{value:"sports",label:"Sports"}];function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.forEach(function(n){f(e,n,r[n])})}return e}function f(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(['\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 20px auto 200px;\n  font-family: "Nunito", sans-serif;\n']);return s=function(){return e},e}var b=l.b.article(s()),d={option:function(e,n){var r=n.isFocused;return c({},e,{backgroundColor:r?"aliceblue":"#40a4f4",color:r?"#03d1ab":"#fff",fontSize:"1rem",fontWeight:"400",cursor:"pointer"})},control:function(e){return c({},e,{backgroundColor:"#40a4f4",borderRadius:"1rem"})},container:function(e){return c({},e,{borderRadius:"1rem",backgroundColor:"#40a4f4",width:"300px",margin:"10px",boxShadow:"0 5px 15px rgba(0, 0, 0, 0.2)"})},placeholder:function(e){return c({},e,{backgroundColor:"#40a4f4",color:"#fff",fontSize:"1.1rem",fontWeight:"700"})},singleValue:function(e){return c({},e,{color:"#fff",fontSize:"1.1rem",fontWeight:"700"})},dropdownIndicator:function(e){return c({},e,{color:"#fff"})},indicatorSeparator:function(e){return c({},e,{color:"#fff"})},menu:function(e){return c({},e,{borderRadius:"1rem"})},menuList:function(e){return c({},e,{padding:0,margin:0,borderRadius:"1rem"})}};n.default=function(e){return o.a.createElement(b,null,o.a.createElement(a.a,{maxMenuHeight:"auto",styles:d,placeholder:"General Knowledge",value:e.category.label,options:i,onChange:function(n){return e.onSetCategory(n.value)}}),o.a.createElement(a.a,{styles:d,placeholder:"easy",value:e.difficulty.label,options:u,onChange:function(n){return e.onSetDifficulty(n.value)}}))}}}]);