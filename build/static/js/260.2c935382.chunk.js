"use strict";(self.webpackChunkorebishopping=self.webpackChunkorebishopping||[]).push([[260],{1462:function(e,i,s){s(2791);var t=s(3329);i.Z=function(e){var i=e.heading;return(0,t.jsx)("div",{className:"text-3xl font-semibold pb-6",children:i})}},6227:function(e,i,s){var t=s(9439),n=s(2791),r=s(7904),l=s(3329);i.Z=function(){var e=(0,n.useState)(!1),i=(0,t.Z)(e,2),s=i[0],o=i[1],a=(0,n.useState)([]),d=(0,t.Z)(a,2),c=d[0],u=d[1];return(0,n.useEffect)((function(){o(!0),fetch("http://komiljonovdev.uz/Bobur/legend-api/api/getProduct").then((function(e){return e.json()})).then((function(e){u(e.products),o(!1)}))}),[]),(0,l.jsx)("div",{className:"w-full pb-20",children:(0,l.jsx)("div",{className:"w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10",children:s?(0,l.jsx)("div",{className:"container_loader",children:(0,l.jsx)("span",{className:"loader"})}):null===c||void 0===c?void 0:c.map((function(e){return(0,l.jsx)("div",{children:(0,l.jsx)(r.Z,{img:"http://komiljonovdev.uz/Bobur/legend-api/public/storage/images/"+e.image,productName:e.name,price:e.cost,des:e.description,id:e.id})},e.id)}))})})}},260:function(e,i,s){s.r(i),s.d(i,{default:function(){return N}});var t=s(2791),n=s(1413),r=s(9439),l=s(1087),o=s(5717),a=s(8607),d=s(6643),c=s(3329),u=function(){var e=(0,t.useState)(0),i=(0,r.Z)(e,2),s=i[0],u=i[1],x={dots:!0,infinite:!0,autoplay:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,beforeChange:function(e,i){u(i)},appendDots:function(e){return(0,c.jsx)("div",{style:{position:"absolute",top:"50%",left:"7%",transform:"translateY(-50%)"},children:(0,c.jsxs)("ul",{style:{margin:"0px"},children:[" ",e," "]})})},customPaging:function(e){return(0,c.jsxs)("div",{style:e===s?{width:"30px",color:"#262626",borderRight:"3px #262626 solid",padding:"8px 0",cursor:"pointer"}:{width:"30px",color:"transparent",borderRight:"3px white solid",padding:"8px 0",cursor:"pointer"},children:["0",e+1]})},responsive:[{breakpoint:576,settings:{dots:!0,appendDots:function(e){return(0,c.jsx)("div",{style:{position:"absolute",top:"50%",left:"2%",transform:"translateY(-50%)"},children:(0,c.jsxs)("ul",{style:{margin:"0px"},children:[" ",e," "]})})},customPaging:function(e){return(0,c.jsxs)("div",{style:e===s?{width:"25px",color:"#262626",borderRight:"3px #262626 solid",cursor:"pointer",fontSize:"12px"}:{width:"25px",color:"transparent",borderRight:"3px white solid",cursor:"pointer",fontSize:"12px"},children:["0",e+1]})}}}]};return(0,c.jsx)("div",{className:"w-full bg-white",children:(0,c.jsxs)(o.Z,(0,n.Z)((0,n.Z)({},x),{},{children:[(0,c.jsx)(l.rU,{to:"/offer",children:(0,c.jsx)("div",{style:{width:"100%"},children:(0,c.jsx)(d.Z,{imgSrc:a.Is})})}),(0,c.jsx)(l.rU,{to:"/offer",children:(0,c.jsx)("div",{style:{width:"100%"},children:(0,c.jsx)(d.Z,{imgSrc:a.cw})})}),(0,c.jsx)(l.rU,{to:"/offer",children:(0,c.jsx)("div",{style:{width:"100%"},children:(0,c.jsx)(d.Z,{imgSrc:a.VV})})})]}))})},x=s(6856),h=s(5880),p=function(){return(0,c.jsx)("div",{className:"w-full bg-white border-b-[1px] py-4 border-b-gray-200 px-4",children:(0,c.jsxs)("div",{className:"max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center",children:[(0,c.jsxs)("div",{className:"flex items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300",children:[(0,c.jsx)("span",{className:"font-bold font-titleFont w-6 text-center",children:"2"}),(0,c.jsx)("p",{className:"text-lightText text-base",children:"Ikki yillik kafolat"})]}),(0,c.jsxs)("div",{className:"flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300",children:[(0,c.jsx)("span",{className:"text-xl text-center w-6 ml-1",children:(0,c.jsx)(x.ili,{})}),(0,c.jsx)("p",{className:"text-lightText text-base",children:"Tekin yetkazib berish"})]}),(0,c.jsxs)("div",{className:"flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300",children:[(0,c.jsx)("span",{className:"text-2xl text-center w-6",children:(0,c.jsx)(h.RjR,{})}),(0,c.jsx)("p",{className:"text-lightText text-base",children:"30 kun ichida qaytarish siyosati"})]})]})})},m=s(1462),f=s(7904),g=function(){var e=(0,t.useState)([]),i=(0,r.Z)(e,2),s=i[0],n=i[1],l=(0,t.useState)(!1),o=(0,r.Z)(l,2),a=o[0],d=o[1];return(0,t.useEffect)((function(){d(!0),fetch("http://komiljonovdev.uz/Bobur/legend-api/api/getProduct").then((function(e){return e.json()})).then((function(e){n(e.products),d(!1)}))}),[]),(0,c.jsxs)("div",{className:"w-full pb-20",children:[(0,c.jsx)(m.Z,{heading:"Legenddan siz uchun"}),(0,c.jsx)("div",{className:"w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10",children:a?(0,c.jsx)("div",{className:"container_loader",children:(0,c.jsx)("span",{className:"loader"})}):null===s||void 0===s?void 0:s.map((function(e){return(0,c.jsx)("div",{children:(0,c.jsx)(f.Z,{img:"http://komiljonovdev.uz/Bobur/legend-api/public/storage/images/"+e.image,productName:e.name,price:e.cost,des:e.description})},e.id)}))})]})},j=function(){var e=(0,t.useState)([]),i=(0,r.Z)(e,2),s=i[0],n=i[1],l=(0,t.useState)(!1),o=(0,r.Z)(l,2),a=o[0],d=o[1];return(0,t.useEffect)((function(){d(!0),fetch("http://komiljonovdev.uz/Bobur/legend-api/api/getProduct").then((function(e){return e.json()})).then((function(e){n(e.products),d(!1)}))}),[]),(0,c.jsxs)("div",{className:"w-full pb-20",children:[(0,c.jsx)(m.Z,{heading:"Yangi Mahsulotlar"}),(0,c.jsx)("div",{className:"w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10",children:a?(0,c.jsx)("div",{className:"container_loader",children:(0,c.jsx)("span",{className:"loader"})}):null===s||void 0===s?void 0:s.map((function(e){return(0,c.jsx)("div",{children:(0,c.jsx)(f.Z,{img:"http://komiljonovdev.uz/Bobur/legend-api/public/storage/images/"+e.image,productName:e.name,price:e.cost,des:e.description,id:e.id})},e.id)}))})]})},v=s(6227),b=function(){return(0,c.jsx)("button",{className:"bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold",children:"Hozir xarid qiling"})},w=function(){return(0,c.jsx)(l.rU,{to:"/shop",children:(0,c.jsxs)("div",{className:"w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont",children:[(0,c.jsx)(d.Z,{className:"w-full h-full object-cover hidden md:inline-block",imgSrc:a.x9}),(0,c.jsxs)("div",{className:"w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center",children:[(0,c.jsx)("h1",{className:"text-3xl font-semibold text-primeColor",children:"Legend ishonchli tanlov"}),(0,c.jsx)("p",{className:"text-base font-normal text-primeColor max-w-[600px] mr-4",children:"Tez va oson chegirma va sotuvlar. Xamyonbop narhlarda. Biz Legendni tanlaymiz siz ham Legendni tanlang."}),(0,c.jsx)(b,{})]})]})})},N=function(){return(0,c.jsxs)("div",{className:"w-full mx-auto",children:[(0,c.jsx)(u,{}),(0,c.jsx)(p,{}),(0,c.jsxs)("div",{className:"max-w-container mx-auto px-4",children:[(0,c.jsx)(j,{}),(0,c.jsx)(g,{}),(0,c.jsx)(w,{}),(0,c.jsx)(v.Z,{})]})]})}}}]);
//# sourceMappingURL=260.2c935382.chunk.js.map