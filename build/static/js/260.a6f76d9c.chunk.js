"use strict";(self.webpackChunkorebishopping=self.webpackChunkorebishopping||[]).push([[260],{1462:function(e,t,i){i(2791);var s=i(3329);t.Z=function(e){var t=e.heading;return(0,s.jsx)("div",{className:"text-3xl font-semibold pb-6",children:t})}},363:function(e,t,i){i.d(t,{Z:function(){return c}});i(2791);var s=i(6355),r=i(6856),n=(i(6643),i(3329)),l=function(e){var t=e.text;return(0,n.jsx)("div",{className:"bg-primeColor w-[92px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-black duration-300 cursor-pointer",children:t})},o=i(7689),a=i(9434),d=i(485),c=function(e){var t=(0,a.I0)(),i=function(e){return String(e).toLowerCase().split(" ").join("")}(e.productName),c=(0,o.s0)(),x=e;return(0,n.jsxs)("div",{className:"w-full relative group",children:[(0,n.jsxs)("div",{className:"max-w-80 max-h-80 relative overflow-y-hidden ",children:[(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:e.img,alt:e.productName})}),(0,n.jsx)("div",{className:"absolute top-6 left-8",children:e.badge&&(0,n.jsx)(l,{text:"New"})}),(0,n.jsx)("div",{className:"w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700",children:(0,n.jsxs)("ul",{className:"w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r",children:[(0,n.jsxs)("li",{onClick:function(){return t((0,d.Xq)({_id:e.id,name:e.productName,quantity:1,image:e.img,price:e.price}))},className:"text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full",children:["Savatga qo'shish",(0,n.jsx)("span",{children:(0,n.jsx)(s.FeP,{})})]}),(0,n.jsxs)("li",{onClick:function(){c("/product/".concat(i),{state:{item:x}})},className:"text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full",children:["Xammasini korish",(0,n.jsx)("span",{className:"text-lg",children:(0,n.jsx)(r.yvh,{})})]})]})})]}),(0,n.jsxs)("div",{className:"max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between font-titleFont",children:[(0,n.jsx)("h2",{className:"text-lg text-primeColor font-bold",children:e.productName}),(0,n.jsx)("p",{className:"text-[#767676] text-[14px]",children:e.price})]}),(0,n.jsx)("div",{children:(0,n.jsx)("p",{className:"text-[#767676] text-[14px]",children:e.color})})]})]})}},6227:function(e,t,i){var s=i(9439),r=i(2791),n=i(1462),l=i(363),o=i(3329);t.Z=function(){var e=(0,r.useState)(!1),t=(0,s.Z)(e,2),i=t[0],a=t[1],d=(0,r.useState)([]),c=(0,s.Z)(d,2),x=c[0],u=c[1];return(0,r.useEffect)((function(){a(!0),fetch("http://komiljonovdev.uz/Bobur/legendApi/api/getProduct").then((function(e){return e.json()})).then((function(e){u(e.products),a(!1)}))}),[]),(0,o.jsxs)("div",{className:"w-full pb-20",children:[(0,o.jsx)(n.Z,{heading:"Eng ko'p buyrutma qilingan tavarlar"}),(0,o.jsx)("div",{className:"w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10",children:i?(0,o.jsx)("div",{className:"container_loader",children:(0,o.jsx)("span",{class:"loader"})}):null===x||void 0===x?void 0:x.map((function(e){return(0,o.jsx)("div",{children:(0,o.jsx)(l.Z,{img:"http://komiljonovdev.uz/Bobur/legendApi/public/storage/images/"+e.image,productName:e.name,price:e.cost,des:e.description,id:e.id})},e.id)}))})]})}},260:function(e,t,i){i.r(t),i.d(t,{default:function(){return N}});var s=i(2791),r=i(1413),n=i(9439),l=i(1087),o=i(5717),a=i(8607),d=i(6643),c=i(3329),x=function(){var e=(0,s.useState)(0),t=(0,n.Z)(e,2),i=t[0],x=t[1],u={dots:!0,infinite:!0,autoplay:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,beforeChange:function(e,t){x(t)},appendDots:function(e){return(0,c.jsx)("div",{style:{position:"absolute",top:"50%",left:"7%",transform:"translateY(-50%)"},children:(0,c.jsxs)("ul",{style:{margin:"0px"},children:[" ",e," "]})})},customPaging:function(e){return(0,c.jsxs)("div",{style:e===i?{width:"30px",color:"#262626",borderRight:"3px #262626 solid",padding:"8px 0",cursor:"pointer"}:{width:"30px",color:"transparent",borderRight:"3px white solid",padding:"8px 0",cursor:"pointer"},children:["0",e+1]})},responsive:[{breakpoint:576,settings:{dots:!0,appendDots:function(e){return(0,c.jsx)("div",{style:{position:"absolute",top:"50%",left:"2%",transform:"translateY(-50%)"},children:(0,c.jsxs)("ul",{style:{margin:"0px"},children:[" ",e," "]})})},customPaging:function(e){return(0,c.jsxs)("div",{style:e===i?{width:"25px",color:"#262626",borderRight:"3px #262626 solid",cursor:"pointer",fontSize:"12px"}:{width:"25px",color:"transparent",borderRight:"3px white solid",cursor:"pointer",fontSize:"12px"},children:["0",e+1]})}}}]};return(0,c.jsx)("div",{className:"w-full bg-white",children:(0,c.jsxs)(o.Z,(0,r.Z)((0,r.Z)({},u),{},{children:[(0,c.jsx)(l.rU,{to:"/offer",children:(0,c.jsx)("div",{style:{width:"100%"},children:(0,c.jsx)(d.Z,{imgSrc:a.Is})})}),(0,c.jsx)(l.rU,{to:"/offer",children:(0,c.jsx)("div",{style:{width:"100%"},children:(0,c.jsx)(d.Z,{imgSrc:a.cw})})}),(0,c.jsx)(l.rU,{to:"/offer",children:(0,c.jsx)("div",{style:{width:"100%"},children:(0,c.jsx)(d.Z,{imgSrc:a.VV})})})]}))})},u=i(6856),h=i(5880),p=function(){return(0,c.jsx)("div",{className:"w-full bg-white border-b-[1px] py-4 border-b-gray-200 px-4",children:(0,c.jsxs)("div",{className:"max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center",children:[(0,c.jsxs)("div",{className:"flex items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300",children:[(0,c.jsx)("span",{className:"font-bold font-titleFont w-6 text-center",children:"2"}),(0,c.jsx)("p",{className:"text-lightText text-base",children:"Ikki yillik kafolat"})]}),(0,c.jsxs)("div",{className:"flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300",children:[(0,c.jsx)("span",{className:"text-xl text-center w-6 ml-1",children:(0,c.jsx)(u.ili,{})}),(0,c.jsx)("p",{className:"text-lightText text-base",children:"Tekin yetkazib berish"})]}),(0,c.jsxs)("div",{className:"flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300",children:[(0,c.jsx)("span",{className:"text-2xl text-center w-6",children:(0,c.jsx)(h.RjR,{})}),(0,c.jsx)("p",{className:"text-lightText text-base",children:"30 kun ichida qaytarish siyosati"})]})]})})},m=i(1462),f=i(363),g=function(){var e=(0,s.useState)([]),t=(0,n.Z)(e,2),i=t[0],r=t[1],l=(0,s.useState)(!1),o=(0,n.Z)(l,2),a=o[0],d=o[1];return(0,s.useEffect)((function(){d(!0),fetch("http://komiljonovdev.uz/Bobur/legendApi/api/getProduct").then((function(e){return e.json()})).then((function(e){r(e.products),d(!1)}))}),[]),(0,c.jsxs)("div",{className:"w-full pb-20",children:[(0,c.jsx)(m.Z,{heading:"Tovarlar"}),(0,c.jsx)("div",{className:"w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10",children:a?(0,c.jsx)("div",{className:"container_loader",children:(0,c.jsx)("span",{class:"loader"})}):null===i||void 0===i?void 0:i.map((function(e){return(0,c.jsx)("div",{children:(0,c.jsx)(f.Z,{img:"http://komiljonovdev.uz/Bobur/legendApi/public/storage/images/"+e.image,productName:e.name,price:e.cost,des:e.description})},e.id)}))})]})},j=function(){var e=(0,s.useState)([]),t=(0,n.Z)(e,2),i=t[0],r=t[1],l=(0,s.useState)(!1),o=(0,n.Z)(l,2),a=o[0],d=o[1];return(0,s.useEffect)((function(){d(!0),fetch("http://komiljonovdev.uz/Bobur/legendApi/api/getProduct").then((function(e){return e.json()})).then((function(e){r(e.products),d(!1)}))}),[]),(0,c.jsxs)("div",{className:"w-full pb-20",children:[(0,c.jsx)(m.Z,{heading:"Yangi Mahsulotlar"}),(0,c.jsx)("div",{className:"w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10",children:a?(0,c.jsx)("div",{className:"container_loader",children:(0,c.jsx)("span",{class:"loader"})}):null===i||void 0===i?void 0:i.map((function(e){return(0,c.jsx)("div",{children:(0,c.jsx)(f.Z,{img:"http://komiljonovdev.uz/Bobur/legendApi/public/storage/images/"+e.image,productName:e.name,price:e.cost,des:e.description,id:e.id})},e.id)}))})]})},v=i(6227),b=function(){return(0,c.jsx)("button",{className:"bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold",children:"Hozir xarid qiling"})},w=function(){return(0,c.jsx)(l.rU,{to:"/shop",children:(0,c.jsxs)("div",{className:"w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont",children:[(0,c.jsx)(d.Z,{className:"w-full h-full object-cover hidden md:inline-block",imgSrc:a.x9}),(0,c.jsxs)("div",{className:"w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center",children:[(0,c.jsx)("h1",{className:"text-3xl font-semibold text-primeColor",children:"Legend ishonchli tanlov"}),(0,c.jsx)("p",{className:"text-base font-normal text-primeColor max-w-[600px] mr-4",children:"Tez va oson chegirma va sotuvlar. Xamyonbop narhlarda. Biz Legendni tanlaymiz siz ham Legendni tanlang."}),(0,c.jsx)(b,{})]})]})})},N=function(){return(0,c.jsxs)("div",{className:"w-full mx-auto",children:[(0,c.jsx)(x,{}),(0,c.jsx)(p,{}),(0,c.jsxs)("div",{className:"max-w-container mx-auto px-4",children:[(0,c.jsx)(j,{}),(0,c.jsx)(g,{}),(0,c.jsx)(w,{}),(0,c.jsx)(v.Z,{})]})]})}}}]);
//# sourceMappingURL=260.a6f76d9c.chunk.js.map