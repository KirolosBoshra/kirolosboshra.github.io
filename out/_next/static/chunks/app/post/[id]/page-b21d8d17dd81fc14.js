(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[246],{2229:function(e,r,t){Promise.resolve().then(t.t.bind(t,6339,23)),Promise.resolve().then(t.t.bind(t,1102,23)),Promise.resolve().then(t.bind(t,1782)),Promise.resolve().then(t.bind(t,9488)),Promise.resolve().then(t.t.bind(t,2325,23)),Promise.resolve().then(t.bind(t,695))},1782:function(e,r,t){"use strict";t.d(r,{Footer:function(){return o}});var s=t(5559),i=t(626),a=t(402),n=t(6763),l=t(2142);let c="kirolosboshra69@gmail.com";function o(){let[e,r]=(0,n.useState)(!1),[t,o]=(0,n.useState)(!1),d=async()=>{r(!e);try{t||(await navigator.clipboard.writeText(c),o(!0))}catch(e){console.error("Failed to copy: ",e)}};return(0,s.jsxs)("div",{className:"flex flex-row px-4 w-full h-32 bottom-0   items-center border border-black dark:border-t-zinc-500 ",children:[(0,s.jsx)("span",{className:"text-lg",children:"Contact Me:"}),(0,s.jsxs)("div",{className:"flex items-center gap-5 px-4 py-3 font-medium border-r border-zinc-400",children:[(0,s.jsx)("a",{href:"https://github.com/kingkiro99",children:(0,s.jsx)(i.hJX,{size:28})}),(0,s.jsxs)("div",{className:"flex space-x-2 group cursor-pointer",onClick:d,children:[(0,s.jsx)(a.g5G,{size:28}),(0,s.jsx)("div",{className:(0,l.Z)("overflow-hidden max-w-0 transition-all duration-300 ease-in-out",{"max-w-xs ml-2":e}),children:(0,s.jsxs)("p",{className:"group relative w-max",children:[(0,s.jsx)("span",{children:c}),(0,s.jsx)("span",{className:"absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-zinc-400 group-hover:w-3/6"}),(0,s.jsx)("span",{className:"absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-zinc-400 group-hover:w-3/6"})]})})]}),(0,s.jsx)("a",{href:"https://github.com/kingkiro99",children:(0,s.jsx)(i.ltd,{size:28})})]})]})}},9488:function(e,r,t){"use strict";t.d(r,{ChapterSelector:function(){return c}});var s=t(5559),i=t(626),a=t(402),n=t(6763);let l=e=>{let{radius:r,progress:t}=e,i=Number((2*Math.PI*r).toFixed(1)),a=i-i*t/100;return(0,s.jsx)("div",{className:"relative ".concat("w-10"," ").concat("h-10"),children:(0,s.jsxs)("svg",{className:"w-full h-full",viewBox:"0 0 100 100",children:[(0,s.jsx)("circle",{className:"text-gray-400 dark:text-zinc-900 stroke-current",strokeWidth:"10",cx:"50",cy:"50",r:r,fill:"transparent"}),(0,s.jsx)("circle",{className:"text-black dark:text-zinc-200 progress-ring__circle stroke-current",strokeWidth:"10",strokeLinecap:"round",cx:"50",cy:"50",r:r,fill:"transparent",strokeDasharray:i,strokeDashoffset:"".concat(a,"px")})]})})};function c(){let[e,r]=(0,n.useState)(0),[t,c]=(0,n.useState)(!1),[d,h]=(0,n.useState)([]);return(0,n.useEffect)(()=>{h(Array.from(document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")));let e=()=>{r(function(){let e=window.scrollY,r=window.innerHeight,t=document.documentElement.scrollHeight;return t<=r?100:Math.min(Math.max(e/(t-r)*100,0),100)}())};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,s.jsxs)("div",{className:"sticky flex w-60 max-sm:w-3/5  h-16 space-x-2 rounded-full bg-gray-100 dark:bg-black    bg-opacity-80 backdrop-blur-sm border dark:border-zinc-400 justify-between items-center p-4",children:[(0,s.jsxs)("div",{className:"flex h-10 items-center pr-2 border-r border-zinc-400",children:[(0,s.jsx)("span",{className:"cursor-pointer",children:(0,s.jsx)(a.xXU,{size:24,onClick:()=>{c(!t)}})}),t&&(0,s.jsx)("div",{className:"absolute top-14 w-58 bg-zinc-100 dark:bg-black border border-zinc-400    shadow-lg rounded-lg p-2",children:(0,s.jsx)("ul",{className:"space-y-2",children:d.map((e,r)=>(0,s.jsx)("li",{className:"cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-800 p-2 rounded",onClick:()=>{o(e.id),c(!1)},children:e.textContent},r))})})]}),(0,s.jsxs)("div",{className:"flex space-x-2 shrink justify-center items-center",children:[(0,s.jsxs)("span",{className:"max-sm:text-sm",children:[e.toFixed(),"%"]}),(0,s.jsx)("div",{className:"border-r border-zinc-400 px-4",children:(0,s.jsx)(l,{radius:40,progress:e})}),(0,s.jsx)("div",{className:"flex justify-center items-center dark:text-zinc-300    rounded-full h-8 px-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-950",children:(0,s.jsx)(i.ZTc,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}})})]})]})}let o=e=>{let r=document.getElementById(e);r&&r.scrollIntoView({behavior:"smooth",block:"start"})}},695:function(e,r,t){"use strict";t.d(r,{ThemeSwitcher:function(){return d}});var s=t(5559),i=t(5746),a=t(402),n=t(6763),l=t(3637),c=t(2142),o=t(5687);function d(){let[e,r]=(0,n.useState)(!1),{setTheme:t,resolvedTheme:d}=(0,l.F)(),h=e=>{t(e.target.value)};return((0,n.useEffect)(()=>r(!0),[]),e)?e?(0,s.jsxs)("div",{className:"flex items-center bg-zinc-200 text-black dark:text-white dark:bg-zinc-950   rounded-full border dark:border-zinc-700 w-16 h-8 max-sm:w-16",children:[(0,s.jsxs)("span",{className:(0,c.Z)("p-2 px-2 rounded-tr rounded-r rounded-full",{"dark:bg-zinc-200 dark:text-black":"dark"===d}),children:[(0,s.jsx)("input",{type:"radio",id:"dark",name:"dark",value:"dark",checked:"dark"===d,onChange:h,className:"hidden"}),(0,s.jsx)("label",{htmlFor:"dark",className:"cursor-pointer",children:(0,s.jsx)(i.pwr,{})})]}),(0,s.jsxs)("span",{className:(0,c.Z)("p-2 px-2 rounded-tl rounded-l rounded-full",{"bg-black text-white dark:bg-zinc-200 dark:text-black":"light"===d}),children:[(0,s.jsx)("input",{type:"radio",id:"light",name:"light",value:"light",checked:"light"===d,onChange:h,className:"hidden"}),(0,s.jsx)("label",{htmlFor:"light",className:"cursor-pointer",children:(0,s.jsx)(a.hjx,{})})]})]}):void 0:(0,s.jsx)(o.default,{src:"data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg==",width:36,height:36,sizes:"36x36",alt:"Loading Light/Dark Toggle",priority:!1,title:"Loading Light/Dark Toggle"})}},6339:function(){},2325:function(){}},function(e){e.O(0,[56,431,758,156,29,192,221,744],function(){return e(e.s=2229)}),_N_E=e.O()}]);