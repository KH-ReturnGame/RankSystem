(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2957:(e,l,s)=>{Promise.resolve().then(s.bind(s,8609))},8609:(e,l,s)=>{"use strict";s.r(l),s.d(l,{default:()=>N});var t=s(5155),r=s(3628),a=s(5476);s(2252),s(6970);var c=s(2115);let n=e=>{let{rank:l,id:s,score:r,className:a}=e;return(0,t.jsx)("li",{className:"w-full flex justify-center text-xl font-bold text-gray-800 ".concat(a),children:(0,t.jsx)("div",{className:"w-5/6 h-20 rounded-2xl bg-white/20 shadow-2xl backdrop-blur-md",children:(0,t.jsxs)("ul",{className:"w-full h-full flex flex-row",children:[(0,t.jsx)("li",{className:"w-[10%]",children:(0,t.jsxs)("p",{className:"w-full h-full flex justify-center items-center text-2xl",children:["#",l]})}),(0,t.jsx)("li",{className:"w-[20%]",children:(0,t.jsx)("p",{className:"h-full flex justify-start items-center text-2xl whitespace-nowrap",children:s})}),(0,t.jsx)("li",{className:"w-[45%]",children:(0,t.jsx)("p",{className:"w-full h-full flex justify-center items-center text-2xl"})}),(0,t.jsx)("li",{className:"w-[25%]",children:(0,t.jsxs)("p",{className:"h-full flex justify-start items-center text-2xl",children:[r," 초"]})})]})})})},i=e=>{let{rank:l,id:s,score:r}=e;return(0,t.jsx)("li",{className:"w-full flex justify-center text-xl font-bold text-gray-800",children:(0,t.jsx)("div",{className:"w-5/6 h-20 rounded-2xl bg-white/20 backdrop-blur-md",children:(0,t.jsxs)("ul",{className:"w-full h-full flex flex-row",children:[(0,t.jsx)("li",{className:"w-[10%]",children:(0,t.jsxs)("p",{className:"w-full h-full flex justify-center items-center text-2xl",children:["#",l]})}),(0,t.jsx)("li",{className:"w-[20%]",children:(0,t.jsx)("p",{className:"h-full flex justify-start items-center text-2xl whitespace-nowrap",children:s})}),(0,t.jsx)("li",{className:"w-[45%]",children:(0,t.jsx)("p",{className:"w-full h-full flex justify-center items-center text-2xl"})}),(0,t.jsx)("li",{className:"w-[25%]",children:(0,t.jsxs)("p",{className:"h-full flex justify-start items-center text-2xl",children:[r," 점"]})})]})})})},x=e=>{let{rank:l,id:s,score:r}=e;return(0,t.jsx)("li",{className:"w-full flex justify-center text-xl font-bold text-gray-800",children:(0,t.jsx)("div",{className:"w-5/6 h-20 rounded-2xl bg-white/20 backdrop-blur-md",children:(0,t.jsxs)("ul",{className:"w-full h-full flex flex-row",children:[(0,t.jsx)("li",{className:"w-[10%]",children:(0,t.jsxs)("p",{className:"w-full h-full flex justify-center items-center text-2xl",children:["#",l]})}),(0,t.jsx)("li",{className:"w-[20%]",children:(0,t.jsx)("p",{className:"h-full flex justify-start items-center text-2xl whitespace-nowrap",children:s})}),(0,t.jsx)("li",{className:"w-[45%]",children:(0,t.jsx)("p",{className:"w-full h-full flex justify-center items-center text-2xl"})}),(0,t.jsx)("li",{className:"w-[25%]",children:(0,t.jsxs)("p",{className:"h-full flex justify-start items-center text-2xl",children:[r,"개 클리어"]})})]})})})},u=e=>{let{index:l,data:s}=e,r=(0,c.useRef)([]),[a,u]=(0,c.useState)({});(0,c.useEffect)(()=>{let e=r.current,t={};s[l].forEach((l,s)=>{let{name:r}=l;t[r]=e.findIndex(e=>e.name===r)+1||s+1}),u(t),r.current=[...s[l]]},[s,l]);let d=(e,s,r,a)=>{let c={transform:"translateY(".concat(120*a,"px)"),transition:"transform 0.3s ease-in-out"};switch(l){case 0:return(0,t.jsx)("div",{style:c,className:"w-full h-full",children:(0,t.jsx)(n,{rank:e,id:s,score:r})},s);case 1:return(0,t.jsx)("div",{style:c,className:"w-full h-full",children:(0,t.jsx)(i,{rank:e,id:s,score:r})},s);case 2:return(0,t.jsx)("div",{style:c,className:"w-full h-full",children:(0,t.jsx)(x,{rank:e,id:s,score:r})},s);default:return null}},f=0,o=0,h={};return(0,t.jsxs)(t.Fragment,{children:[[...s[l]].sort((e,l)=>parseFloat(l.score)-parseFloat(e.score)).map((e,l)=>{let{name:s,score:t}=e,r=-(o=a[s])+(f=l+1);return h[s]={curRank:f,prvRank:o,name:s,score:t,change:r},null}),[...s[l]].map(e=>{let{name:l,score:s}=e,{curRank:t,change:r}=h[l];return d(t,l,s,r)})]})};function d(e){let{title:l,bgColor:s,index:r,_data:a,c_index:n}=e,[i,x]=(0,c.useState)([[{name:"",score:""}],[{name:"",score:""}],[{name:"",score:""}]]);return(0,c.useEffect)(()=>{x(e=>{let l=[...e];return l[n]=a,l})},[a]),(0,t.jsx)("div",{className:"w-full h-full flex items-center justify-center",children:(0,t.jsxs)("div",{style:{width:"90%",height:"90%"},className:"relative rounded-3xl shadow-2xl flex items-col justify-center",children:[(0,t.jsx)("div",{className:"absolute inset-0 ".concat(s," rounded-3xl opacity-80")}),(0,t.jsxs)("ul",{className:"w-full h-full",children:[(0,t.jsx)("div",{children:(0,t.jsx)("p",{className:"text-7xl font-bold text-gray-800 relative z-10 mt-12 flex justify-center",children:l})}),(0,t.jsx)("ul",{className:"relative z-10 mt-12 flex flex-col gap-10 items-center overflow-y-auto max-h-[70%]",children:(0,t.jsx)(u,{index:r,data:i})})]})]})})}var f=s(9904),o=s(8698);let h=(0,f.Wp)({databaseURL:"https://returngame-d8a65-default-rtdb.firebaseio.com/"}),m=(0,o.C3)(h),j=e=>e?Object.keys(e).map(l=>({name:e[l].name,score:e[l].score.toString()})):(console.error("Invalid data provided"),[]);async function w(e){let l=(0,o.KR)(m,"/"),s=["Game1_Rank","Game2_Rank","Game3_Rank"][e];if(!s)return console.error("Invalid game index"),[];try{let e=await (0,o.Jt)(l);if(e.exists()){let l=e.val()[s];if(l)return j(l)}else console.log("No data available")}catch(e){console.error("Error fetching data:",e)}return[]}function N(){let[e,l]=(0,c.useState)([{name:"",score:""}]),[s,n]=(0,c.useState)(-1),[i,x]=(0,c.useState)(0),u=async e=>{if(x(e.realIndex),i!==s)try{let e=await w(i);l(e),n(i)}catch(e){console.error("Error fetching data:",e)}};return(0,t.jsx)("div",{className:"w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-700",children:(0,t.jsx)("div",{className:"w-full h-full",children:(0,t.jsx)(r.RC,{modules:[a.dK,a.Ij],spaceBetween:30,slidesPerView:1,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!1},onSlideChange:u,onSlideChangeTransitionEnd:u,className:"w-full h-full flex items-center justify-center",children:[{title:"채훈이 피하기",bgColor:"bg-white/20 backdrop-blur-md"},{title:"Game 2",bgColor:"bg-white/20 backdrop-blur-md"},{title:"Game 3",bgColor:"bg-white/20 backdrop-blur-md"}].map((l,s)=>(0,t.jsx)(r.qr,{children:(0,t.jsx)(d,{title:l.title,bgColor:l.bgColor,index:s,_data:e,c_index:i})},s))})})})}}},e=>{var l=l=>e(e.s=l);e.O(0,[411,507,552,441,517,358],()=>l(2957)),_N_E=e.O()}]);