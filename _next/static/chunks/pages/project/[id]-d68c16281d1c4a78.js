(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{1244:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/project/[id]",function(){return l(3506)}])},3506:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return j}});var t=l(5893),s=l(6446),o=l.n(s),r=l(6091),a=l.n(r),i=l(3100),c=l(2944),d=l(634),u=l(204),p=l(8911),m=l(6877),_=l(4416),x=l(1708),g=l(1163),h=l(7294),f=l(5252),w=l(9583),b={wrapper:"styles-module_wrapper__1I_qj",content:"styles-module_content__2jwZj",slide:"styles-module_slide__1zrfk",image:"styles-module_image__2hdkJ",close:"styles-module_close__2I1sI",navigation:"styles-module_navigation__1pqAE",prev:"styles-module_prev__KqFRp",next:"styles-module_next__1uQwZ"};!function(e,n){void 0===n&&(n={});var l=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===l&&t.firstChild?t.insertBefore(s,t.firstChild):t.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}(".styles-module_wrapper__1I_qj {\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  padding: 0px 60px 0px 60px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  box-sizing: border-box;\n}\n\n.styles-module_content__2jwZj {\n  margin: auto;\n  padding: 0;\n  width: 90%;\n  height: 100%;\n  max-height: 100%;\n  text-align: center;\n}\n\n.styles-module_slide__1zrfk {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.styles-module_image__2hdkJ {\n  max-height: 100%;\n  max-width: 100%;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n\n.styles-module_close__2I1sI {\n  color: white;\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  font-size: 40px;\n  font-weight: bold;\n  opacity: 0.2;\n  cursor: pointer;\n}\n\n.styles-module_close__2I1sI:hover {\n  opacity: 1;\n}\n\n.styles-module_navigation__1pqAE {\n  height: 80%;\n  color: white;\n  cursor: pointer;\n  position: absolute;\n  font-size: 60px;\n  line-height: 60px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  opacity: 0.2;\n  padding: 0 15px;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n\n.styles-module_navigation__1pqAE:hover {\n  opacity: 1;\n}\n\n@media (hover: none) {\n  .styles-module_navigation__1pqAE:hover {\n    opacity: 0.2;\n  }\n}\n\n.styles-module_prev__KqFRp {\n  left: 0;\n}\n\n.styles-module_next__1uQwZ {\n  right: 0;\n}\n\n@media (max-width: 900px) {\n  .styles-module_wrapper__1I_qj {\n    padding: 0;\n  }\n}\n");let y=e=>{var n;let[l,t]=(0,h.useState)(null!==(n=e.currentIndex)&&void 0!==n?n:0),s=(0,h.useCallback)(n=>{let s=(l+n)%e.src.length;s<0&&(s=e.src.length-1),t(s)},[l]),o=(0,h.useCallback)(n=>{var l;if(!n.target||!e.closeOnClickOutside)return;let t="ReactSimpleImageViewer"===n.target.id,s=n.target.classList.contains("react-simple-image-viewer__slide");(t||s)&&(n.stopPropagation(),null===(l=e.onClose)||void 0===l||l.call(e))},[e.onClose]),r=(0,h.useCallback)(n=>{var l;"Escape"===n.key&&(null===(l=e.onClose)||void 0===l||l.call(e)),["ArrowLeft","h"].includes(n.key)&&s(-1),["ArrowRight","l"].includes(n.key)&&s(1)},[e.onClose,s]),a=(0,h.useCallback)(e=>{e.wheelDeltaY>0?s(-1):s(1)},[s]);return(0,h.useEffect)(()=>(document.addEventListener("keydown",r),e.disableScroll||document.addEventListener("wheel",a),()=>{document.removeEventListener("keydown",r),e.disableScroll||document.removeEventListener("wheel",a)}),[r,a]),h.createElement("div",{id:"ReactSimpleImageViewer",className:`${b.wrapper} react-simple-image-viewer__modal`,onKeyDown:r,onClick:o,style:e.backgroundStyle},h.createElement("span",{className:`${b.close} react-simple-image-viewer__close`,onClick:()=>{var n;return null===(n=e.onClose)||void 0===n?void 0:n.call(e)}},e.closeComponent||"\xd7"),e.src.length>1&&h.createElement("span",{className:`${b.navigation} ${b.prev} react-simple-image-viewer__previous`,onClick:()=>s(-1)},e.leftArrowComponent||"❮"),e.src.length>1&&h.createElement("span",{className:`${b.navigation} ${b.next} react-simple-image-viewer__next`,onClick:()=>s(1)},e.rightArrowComponent||"❯"),h.createElement("div",{className:`${b.content} react-simple-image-viewer__modal-content`,onClick:o},h.createElement("div",{className:`${b.slide} react-simple-image-viewer__slide`},h.createElement("img",{className:b.image,src:e.src[l],alt:""}))))},v=()=>{var e,n,l;let[s,r]=(0,h.useState)({id:0,projectName:"",projectDescription:"",imageUrl:"",technologies:[],gallery:[]}),[b,v]=(0,h.useState)(!1),[j,k]=(0,h.useState)(0),C=(0,g.useRouter)();(0,h.useEffect)(()=>{C.isReady&&N()},[C]);let N=async()=>{let{id:e}=C.query,n=await fetch("/api/project/".concat(e)),l=await n.json();r(l)},E=(e,n)=>{document.body.style.overflowY="hidden",v(!0),k(n)},S=()=>{document.body.style.overflowY="auto",v(!1)},z=()=>{C.replace({pathname:"/",query:{des:"Showcase"}},"/")};return(0,t.jsxs)(i.xu,{minH:"100vh",w:"full",bg:"primary.900",children:[(0,t.jsx)(c.d,{above:"md",children:(0,t.jsx)(i.Cd,{size:"60px",bg:"forest.900",color:"label.50",_hover:{cursor:"pointer"},position:"fixed",top:"calc(64px + 64px)",left:"128px",onClick:z,children:(0,t.jsx)(w.x_l,{})})}),(0,t.jsxs)(d.g,{children:[(0,t.jsx)(f.U,{isStatic:!0,isOutOfMainPage:!0}),(0,t.jsxs)(u.k,{alignItems:"center",flexWrap:"wrap",w:{base:"full",md:"container.md"},py:"100px",px:{base:5,md:0},justifyContent:"center",children:[(0,t.jsxs)(p.x,{w:"full",fontSize:"5xl",className:o().className,color:"label.50",textAlign:"center",children:[s.projectName,(0,t.jsx)(i.xu,{as:"span",pl:10,children:(null!==(n=s.external)&&void 0!==n?n:[]).map((e,n)=>(0,t.jsx)("a",{href:e.link,children:e.isGithub?(0,t.jsx)(m.J,{as:w.hJX,boxSize:35,color:"label.200",transition:"color 0.5s ease",_hover:{color:"label.50"}},n):(0,t.jsx)(m.J,{as:w.CkN,size:35,color:"label.200",transition:"color 0.5s ease",_hover:{color:"label.50"}},n)},n))})]}),(0,t.jsx)(i.xu,{mt:"60px",boxShadow:"0 25px 50px -12px #e4e4e41c, 25px 0px 50px -12px #e4e4e41c,-25px 0px 50px -12px #e4e4e41c,0px -25px 50px -12px #e4e4e41c",borderRadius:"md",children:(0,t.jsx)(_.E,{alt:s.imageUrl,borderRadius:"md",src:s.imageUrl})}),(0,t.jsx)(i.xu,{children:(0,t.jsx)(p.x,{pt:"60px",w:{base:"full",md:"container.sm"},fontSize:"lg",className:a().className,color:"label.300",textAlign:"center",__css:{"text-wrap":"balance"},children:s.projectDescription})}),(0,t.jsx)(p.x,{pt:"120px",w:{base:"full",md:"container.sm"},fontSize:"3xl",className:o().className,color:"label.50",textAlign:"center",__css:{"text-wrap":"balance"},children:"Technologies used"}),(0,t.jsx)(u.k,{flexWrap:"wrap",gap:2.5,pt:"15px",justifyContent:"center",children:s.technologies.map((e,n)=>(0,t.jsx)(i.xu,{bg:"forest.700",borderRadius:"full",px:3,py:.5,children:(0,t.jsx)(p.x,{color:"label.200",className:a().className,fontSize:"md",children:e})},n))}),(null===(e=s.gallery)||void 0===e?void 0:e.length)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.x,{pt:"120px",w:"container.sm",fontSize:"3xl",className:o().className,color:"label.50",textAlign:"center",__css:{"text-wrap":"balance"},children:"Gallery"}),(0,t.jsx)(x.r,{px:{base:0,md:10},templateColumns:{base:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},gap:6,w:"full",pt:"15px",children:(null!==(l=s.gallery)&&void 0!==l?l:[]).map((e,n)=>(0,t.jsx)(i.xu,{onClick:e=>E(e,n),_hover:{cursor:"pointer"},children:(0,t.jsx)(_.E,{alt:s.imageUrl,borderRadius:"md",h:"full",w:"full",objectFit:"cover",src:e})},n))})]})]})]}),b&&(0,t.jsx)(y,{src:s.gallery.map(e=>e),currentIndex:j,disableScroll:!0,closeOnClickOutside:!0,onClose:S,backgroundStyle:{backgroundColor:"#00000080"}})]})};var j=v},6446:function(e){e.exports={style:{fontFamily:"'__oswald_835e77', '__oswald_Fallback_835e77'"},className:"__className_835e77"}},6091:function(e){e.exports={style:{fontFamily:"'__roboto_649db6', '__roboto_Fallback_649db6'"},className:"__className_649db6"}},4416:function(e,n,l){"use strict";l.d(n,{E:function(){return d}});var t=l(5059),s=l(5893),o=(0,t.G)(function(e,n){let{htmlWidth:l,htmlHeight:t,alt:o,...r}=e;return(0,s.jsx)("img",{width:l,height:t,ref:n,alt:o,...r})});o.displayName="NativeImage";var r=l(6245),a=l(7294),i=(e,n)=>"loaded"!==e&&"beforeLoadOrError"===n||"failed"===e&&"onError"===n,c=l(2504),d=(0,t.G)(function(e,n){let{fallbackSrc:l,fallback:t,src:d,srcSet:u,align:p,fit:m,loading:_,ignoreFallback:x,crossOrigin:g,fallbackStrategy:h="beforeLoadOrError",referrerPolicy:f,...w}=e,b=null!=_||x||!(void 0!==l||void 0!==t),y=function(e){let{loading:n,src:l,srcSet:t,onLoad:s,onError:o,crossOrigin:i,sizes:c,ignoreFallback:d}=e,[u,p]=(0,a.useState)("pending");(0,a.useEffect)(()=>{p(l?"loading":"pending")},[l]);let m=(0,a.useRef)(),_=(0,a.useCallback)(()=>{if(!l)return;x();let e=new Image;e.src=l,i&&(e.crossOrigin=i),t&&(e.srcset=t),c&&(e.sizes=c),n&&(e.loading=n),e.onload=e=>{x(),p("loaded"),null==s||s(e)},e.onerror=e=>{x(),p("failed"),null==o||o(e)},m.current=e},[l,i,t,c,s,o,n]),x=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,r.G)(()=>{if(!d)return"loading"===u&&_(),()=>{x()}},[u,_,d]),d?"loaded":u}({...e,crossOrigin:g,ignoreFallback:b}),v=i(y,h),j={ref:n,objectFit:m,objectPosition:p,...b?w:function(e,n=[]){let l=Object.assign({},e);for(let e of n)e in l&&delete l[e];return l}(w,["onError","onLoad"])};return v?t||(0,s.jsx)(c.m.img,{as:o,className:"chakra-image__placeholder",src:l,...j}):(0,s.jsx)(c.m.img,{as:o,src:d,srcSet:u,crossOrigin:g,loading:_,referrerPolicy:f,className:"chakra-image",...j})});d.displayName="Image"},1708:function(e,n,l){"use strict";l.d(n,{r:function(){return r}});var t=l(5059),s=l(2504),o=l(5893),r=(0,t.G)(function(e,n){let{templateAreas:l,gap:t,rowGap:r,columnGap:a,column:i,row:c,autoFlow:d,autoRows:u,templateRows:p,autoColumns:m,templateColumns:_,...x}=e;return(0,o.jsx)(s.m.div,{ref:n,__css:{display:"grid",gridTemplateAreas:l,gridGap:t,gridRowGap:r,gridColumnGap:a,gridAutoColumns:m,gridColumn:i,gridRow:c,gridAutoFlow:d,gridAutoRows:u,gridTemplateRows:p,gridTemplateColumns:_},...x})});r.displayName="Grid"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1244)}),_N_E=e.O()}]);