(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94],{3190:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/barter",function(){return t(5950)}])},5950:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return g}});var n=t(5893),l=t(8527),a=t(8133),o=t(4651),s=t(6723),i=t(4612),c=t(9008),u=t(7294),d=function(e){var r=e.title,t=e.value,a=e.callback;return(0,n.jsxs)(l.kC,{alignItems:"center",justifyContent:"center",flexWrap:"wrap",w:"full",children:[(0,n.jsx)(l.xu,{children:(0,n.jsx)(l.xv,{color:"gray.500",fontWeight:"semibold",pr:"5",children:r})}),(0,n.jsx)(l.xu,{flex:"1",children:(0,n.jsx)(i.II,{value:t,onChange:a})})]})};function h(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function x(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return h(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=function(){var e=["book","candle-t4","chest","dagger","dragon-head","egg","green","helmet","key","lava","purple","shell","spear","tong"],r=(0,u.useState)(14.61),t=r[0],h=r[1],g=(0,u.useState)(100),f=g[0],m=g[1],p=(0,u.useState)(70),j=p[0],v=p[1],b=(0,u.useState)(0),k=b[0],y=b[1],S=(0,u.useState)(0),w=S[0],C=S[1],W=(0,u.useState)(20),I=W[0],N=W[1],_=(0,u.useState)(Array(14).fill(0)),A=_[0],E=_[1],M=(0,u.useState)(Array(14).fill(!1)),z=M[0],O=M[1],X=(0,u.useState)(0),T=X[0],J=X[1];(0,u.useEffect)((function(){var e,r,t,n,l,a,o;h(null!==(e=Number(localStorage.getItem("parley")))&&void 0!==e?e:14.61),m(null!==(r=Number(localStorage.getItem("hakt")))&&void 0!==r?r:100),v(null!==(t=Number(localStorage.getItem("margot")))&&void 0!==t?t:70),y(null!==(n=Number(localStorage.getItem("hakoven_trade")))&&void 0!==n?n:0),C(null!==(l=Number(localStorage.getItem("margo_trade")))&&void 0!==l?l:0),N(null!==(a=Number(localStorage.getItem("t4stockt")))&&void 0!==a?a:0),E(JSON.parse(null!==(o=localStorage.getItem("stock"))&&void 0!==o?o:JSON.stringify(Array(14).fill(0))))}),[]);var R=function(e,r,t){var n=e.target.value;if(!isNaN(n))switch("stock"!=r&&localStorage.setItem(r,n),r){case"parley":h(n);break;case"hakt":m(n);break;case"margot":v(n);break;case"hakoven_trade":y(n);break;case"margo_trade":C(n);break;case"t4stockt":N(n);break;case"stock":var l=x(A);l[t]=n,localStorage.setItem(r,JSON.stringify(l)),E(l)}};return(0,u.useEffect)((function(){for(var e=0,r=0,n=0;n<z.length;n++)z[n]&&(e++,A[n]-4<I&&r++);J(1e6-(k>=f?43780-43780*t/100+2*(29430-29430*t/100)+(36420-36420*t/100):0)-(1250*j/100<=w?3*(46544-46544*t/100)+4*(58180-58180*t/100):0)-e*(14286-14286*t/100)*4-r*(14286-14286*t/100)*6)}),[z,k,w,A,f,j,t]),(0,n.jsxs)("div",{children:[(0,n.jsx)(c.default,{children:(0,n.jsx)("title",{children:"Wai Choon | Barter"})}),(0,n.jsx)("main",{children:(0,n.jsxs)(l.W2,{height:"100vh",maxW:"container.lg",children:[(0,n.jsx)(l.xu,{bgGradient:"linear(to-r, blue.200, teal.500)",p:"4",children:(0,n.jsx)(l.M5,{children:(0,n.jsx)(l.X6,{color:"whiteAlpha.900",size:"md",fontWeight:"semibold",children:"BDO Barter t4 stock & parley management"})})}),(0,n.jsxs)(l.kC,{children:[(0,n.jsxs)(l.gC,{flex:"8",p:"5",alignItems:"flex-start",spacing:"5",bg:"white",children:[(0,n.jsx)(d,{title:"Parley discount (%):",callback:function(e){return R(e,"parley")},value:t}),(0,n.jsxs)(l.kC,{flexWrap:"wrap",w:"full",children:[(0,n.jsx)(l.xu,{flex:"1",pr:"4",children:(0,n.jsx)(d,{title:"Hakoven threshold (last trade):",callback:function(e){return R(e,"hakt")},value:f})}),(0,n.jsx)(l.xu,{flex:"1",children:(0,n.jsx)(d,{title:"Margo run threshold (%):",callback:function(e){return R(e,"margot")},value:j})})]}),(0,n.jsxs)(l.kC,{flexWrap:"wrap",w:"full",children:[(0,n.jsx)(l.xu,{flex:"1",pr:"4",children:(0,n.jsx)(d,{title:"Hakoven (last trade):",callback:function(e){return R(e,"hakoven_trade")},value:k})}),(0,n.jsx)(l.xu,{flex:"1",children:(0,n.jsx)(d,{title:"Margo:",callback:function(e){return R(e,"margo_trade")},value:w})})]}),(0,n.jsx)(d,{title:"T4 Restock threshold:",callback:function(e){return R(e,"t4stockt")},value:I}),(0,n.jsx)(l.X6,{color:"gray.700",size:"md",fontWeight:"semibold",children:"Check items for t5s:"}),(0,n.jsx)(l.kC,{flexWrap:"wrap",children:e.map((function(e,r){return(0,n.jsxs)(l.xu,{border:"1px",borderColor:"gray.200",p:"4",m:"2",children:[(0,n.jsx)(a.XZ,{value:z[r],position:"absolute",ml:"-6",bg:"white",onChange:function(e){return function(e,r){var t=x(z);t[r]=!t[r],O(t)}(0,r)}}),(0,n.jsx)(o.Ee,{alt:e,boxSize:"40px",src:"bdo/"+e+".png"})]},r)}))}),(0,n.jsx)(l.X6,{color:"gray.700",size:"md",fontWeight:"semibold",children:"Result:"}),(0,n.jsxs)(l.xv,{color:"gray.500",fontWeight:"semibold",children:["Hakoven run: ",(0,n.jsx)(l.xv,{as:"span",color:k>=f?"green.400":"red.400",pl:"2.5",children:k>=f?"Yes":"No"})]}),(0,n.jsxs)(l.xv,{color:"gray.500",fontWeight:"semibold",children:["Margo run: ",(0,n.jsx)(l.xv,{as:"span",color:1250*j/100<=w?"green.400":"red.400",pl:"2.5",children:1250*j/100<=w?"Yes":"No"})]}),(0,n.jsx)(l.X6,{color:"gray.700",size:"sm",fontWeight:"semibold",children:"Result after t5 trade:"}),(0,n.jsx)(l.kC,{flexWrap:"wrap",children:e.map((function(e,r){return(0,n.jsx)(l.xu,{border:"1px",borderColor:"gray.200",p:"4",m:"2",children:(0,n.jsxs)(l.Ug,{children:[(0,n.jsx)(o.Ee,{alt:e,boxSize:"40px",src:"bdo/"+e+".png"}),(0,n.jsx)(l.xv,{color:z[r]?A[r]-4<I?"red.400":"green.400":A[r]<I?"red.400":"green.400",children:z[r]?A[r]-4:A[r]})]})},r)}))}),(0,n.jsxs)(l.xv,{color:"gray.500",fontWeight:"semibold",children:["Left over parley after above trade: ",(0,n.jsx)(l.xv,{as:"span",color:"red.400",pl:"2.5",children:Math.trunc(T)})]}),(0,n.jsxs)(l.xv,{color:"gray.500",fontWeight:"semibold",children:["Remaining trade count: ",(0,n.jsx)(l.xv,{as:"span",color:"red.400",pl:"2.5",children:Math.trunc(T/Math.trunc(14286-14286*t/100))})]}),T<0&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.xv,{color:"gray.500",fontWeight:"semibold",children:["After using voucher: ",(0,n.jsx)(l.xv,{as:"span",color:"red.400",pl:"2.5",children:Math.trunc(T+25e4)})]}),(0,n.jsxs)(l.xv,{color:"gray.500",fontWeight:"semibold",children:["After using voucher count: ",(0,n.jsx)(l.xv,{as:"span",color:"red.400",pl:"2.5",children:Math.trunc((T+25e4)/Math.trunc(14286-14286*t/100))})]})]}),(0,n.jsx)(s.zx,{onClick:function(e){for(var r=x(A),t=0;t<A.length;t++)z[t]&&(r[t]=r[t]-4,A[t]-4<I&&(r[t]=r[t]+12));localStorage.setItem("stock",JSON.stringify(r)),y(0),C(0),E(r),O(Array(14).fill(!1))},colorScheme:"teal",variant:"outline",children:"Set to stock"})]}),(0,n.jsx)(l.xu,{flex:"2",p:"5",children:(0,n.jsxs)(l.gC,{spacing:"2",children:[(0,n.jsx)(l.X6,{color:"gray.700",size:"md",fontWeight:"semibold",children:"T4 Stocks"}),e.map((function(e,r){return(0,n.jsxs)(l.Ug,{children:[(0,n.jsx)(i.II,{value:A[r],onChange:function(e){return R(e,"stock",r)}}),(0,n.jsx)(o.Ee,{alt:e,boxSize:"40px",src:"bdo/"+e+".png"})]},r)}))]})})]})]})})]})}}},function(e){e.O(0,[483,738,774,888,179],(function(){return r=3190,e(e.s=r);var r}));var r=e.O();_N_E=r}]);