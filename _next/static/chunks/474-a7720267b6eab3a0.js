(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[474],{9008:function(e,n,t){e.exports=t(2636)},9222:function(e,n,t){"use strict";t.d(n,{z:function(){return h}});var r=t(7294),[a,i]=(0,t(5227).k)({strict:!1,name:"ButtonGroupContext"}),l=t(6384),o=t(5432),s=t(5893);function u(e){let{children:n,className:t,...a}=e,i=(0,r.isValidElement)(n)?(0,r.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,u=(0,o.cx)("chakra-button__icon",t);return(0,s.jsx)(l.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:u,children:i})}u.displayName="ButtonIcon";var c=t(295);function d(e){let{label:n,placement:t,spacing:a="0.5rem",children:i=(0,s.jsx)(c.$,{color:"currentColor",width:"1em",height:"1em"}),className:u,__css:d,...f}=e,m=(0,o.cx)("chakra-button__spinner",u),p="start"===t?"marginEnd":"marginStart",v=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:n?"relative":"absolute",[p]:n?a:0,fontSize:"1em",lineHeight:"normal",...d}),[d,n,p,a]);return(0,s.jsx)(l.m.div,{className:m,...f,__css:v,children:i})}d.displayName="ButtonSpinner";var f=t(1103),m=t(5059),p=t(1628),v=t(3179),h=(0,m.G)((e,n)=>{let t=i(),a=(0,p.mq)("Button",{...t,...e}),{isDisabled:u=null==t?void 0:t.isDisabled,isLoading:c,isActive:m,children:h,leftIcon:y,rightIcon:b,loadingText:k,iconSpacing:g="0.5rem",type:C,spinner:j,spinnerPlacement:_="start",className:w,as:B,...N}=(0,v.Lr)(e),S=(0,r.useMemo)(()=>{let e={...null==a?void 0:a._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!t&&{_focus:e}}},[a,t]),{ref:E,type:P}=function(e){let[n,t]=(0,r.useState)(!e),a=(0,r.useCallback)(e=>{e&&t("BUTTON"===e.tagName)},[]);return{ref:a,type:n?"button":void 0}}(B),I={rightIcon:b,leftIcon:y,iconSpacing:g,children:h};return(0,s.jsxs)(l.m.button,{ref:(0,f.qq)(n,E),as:B,type:null!=C?C:P,"data-active":(0,o.PB)(m),"data-loading":(0,o.PB)(c),__css:S,className:(0,o.cx)("chakra-button",w),...N,disabled:u||c,children:[c&&"start"===_&&(0,s.jsx)(d,{className:"chakra-button__spinner--start",label:k,placement:"start",spacing:g,children:j}),c?k||(0,s.jsx)(l.m.span,{opacity:0,children:(0,s.jsx)(x,{...I})}):(0,s.jsx)(x,{...I}),c&&"end"===_&&(0,s.jsx)(d,{className:"chakra-button__spinner--end",label:k,placement:"end",spacing:g,children:j})]})});function x(e){let{leftIcon:n,rightIcon:t,children:r,iconSpacing:a}=e;return(0,s.jsxs)(s.Fragment,{children:[n&&(0,s.jsx)(u,{marginEnd:a,children:n}),r,t&&(0,s.jsx)(u,{marginStart:a,children:t})]})}h.displayName="Button"},4049:function(e,n,t){"use strict";t.d(n,{X:function(){return R}});var[r,a]=(0,t(5227).k)({name:"CheckboxGroupContext",strict:!1}),i=t(6384),l=t(5893);function o(e){return(0,l.jsx)(i.m.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...e,children:(0,l.jsx)("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function s(e){return(0,l.jsx)(i.m.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...e,children:(0,l.jsx)("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function u(e){let{isIndeterminate:n,isChecked:t,...r}=e;return t||n?(0,l.jsx)(i.m.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:(0,l.jsx)(n?s:o,{...r})}):null}var c=t(2016),d=t(6245),f=t(2366),m=t(5155),p=t(1103),v=t(5432),h={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},x=!1,y=null,b=!1,k=!1,g=new Set;function C(e,n){g.forEach(t=>t(e,n))}var j="undefined"!=typeof window&&null!=window.navigator&&/^Mac/.test(window.navigator.platform);function _(e){b=!0,e.metaKey||!j&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||(y="keyboard",C("keyboard",e))}function w(e){if(y="pointer","mousedown"===e.type||"pointerdown"===e.type){b=!0;let n=e.composedPath?e.composedPath()[0]:e.target,t=!1;try{t=n.matches(":focus-visible")}catch{}t||C("pointer",e)}}function B(e){(0===e.mozInputSource&&e.isTrusted||0===e.detail&&!e.pointerType)&&(b=!0,y="virtual")}function N(e){e.target!==window&&e.target!==document&&(b||k||(y="virtual",C("virtual",e)),b=!1,k=!1)}function S(){b=!1,k=!0}function E(){return"pointer"!==y}var P=t(7294);function I(e){e.preventDefault(),e.stopPropagation()}var L=t(917),F=t(5059),q=t(1628),D=t(3179),M={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},G={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},T=(0,L.F4)({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),O=(0,L.F4)({from:{opacity:0},to:{opacity:1}}),K=(0,L.F4)({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),R=(0,F.G)(function(e,n){let t=a(),r={...t,...e},o=(0,q.jC)("Checkbox",r),s=(0,D.Lr)(e),{spacing:y="0.5rem",className:k,children:C,iconColor:j,iconSize:L,icon:F=(0,l.jsx)(u,{}),isChecked:R,isDisabled:$=null==t?void 0:t.isDisabled,onChange:z,inputProps:H,...A}=s,W=R;(null==t?void 0:t.value)&&s.value&&(W=t.value.includes(s.value));let U=z;(null==t?void 0:t.onChange)&&s.value&&(U=(0,v.PP)(t.onChange,z));let{state:X,getInputProps:Q,getCheckboxProps:Y,getLabelProps:V,getRootProps:J}=function(e={}){let n=(0,c.K)(e),{isDisabled:t,isReadOnly:r,isRequired:a,isInvalid:i,id:l,onBlur:o,onFocus:s,"aria-describedby":u}=n,{defaultChecked:y,isChecked:k,isFocusable:C,onChange:j,isIndeterminate:L,name:F,value:q,tabIndex:D,"aria-label":M,"aria-labelledby":G,"aria-invalid":T,...O}=e,K=function(e,n=[]){let t=Object.assign({},e);for(let e of n)e in t&&delete t[e];return t}(O,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),R=(0,m.W)(j),$=(0,m.W)(o),z=(0,m.W)(s),[H,A]=(0,P.useState)(!1),[W,U]=(0,P.useState)(!1),[X,Q]=(0,P.useState)(!1),[Y,V]=(0,P.useState)(!1);(0,P.useEffect)(()=>(function(e){!function(){if("undefined"==typeof window||x)return;let{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...n){b=!0,e.apply(this,n)},document.addEventListener("keydown",_,!0),document.addEventListener("keyup",_,!0),document.addEventListener("click",B,!0),window.addEventListener("focus",N,!0),window.addEventListener("blur",S,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",w,!0),document.addEventListener("pointermove",w,!0),document.addEventListener("pointerup",w,!0)):(document.addEventListener("mousedown",w,!0),document.addEventListener("mousemove",w,!0),document.addEventListener("mouseup",w,!0)),x=!0}(),e(E());let n=()=>e(E());return g.add(n),()=>{g.delete(n)}})(A),[]);let J=(0,P.useRef)(null),[Z,ee]=(0,P.useState)(!0),[en,et]=(0,P.useState)(!!y),er=void 0!==k,ea=er?k:en,ei=(0,P.useCallback)(e=>{if(r||t){e.preventDefault();return}er||(ea?et(e.target.checked):et(!!L||e.target.checked)),null==R||R(e)},[r,t,ea,er,L,R]);(0,d.G)(()=>{J.current&&(J.current.indeterminate=Boolean(L))},[L]),(0,f.r)(()=>{t&&U(!1)},[t,U]),(0,d.G)(()=>{let e=J.current;(null==e?void 0:e.form)&&(e.form.onreset=()=>{et(!!y)})},[]);let el=t&&!C,eo=(0,P.useCallback)(e=>{" "===e.key&&V(!0)},[V]),es=(0,P.useCallback)(e=>{" "===e.key&&V(!1)},[V]);(0,d.G)(()=>{if(!J.current)return;let e=J.current.checked!==ea;e&&et(J.current.checked)},[J.current]);let eu=(0,P.useCallback)((e={},n=null)=>{let a=e=>{W&&e.preventDefault(),V(!0)};return{...e,ref:n,"data-active":(0,v.PB)(Y),"data-hover":(0,v.PB)(X),"data-checked":(0,v.PB)(ea),"data-focus":(0,v.PB)(W),"data-focus-visible":(0,v.PB)(W&&H),"data-indeterminate":(0,v.PB)(L),"data-disabled":(0,v.PB)(t),"data-invalid":(0,v.PB)(i),"data-readonly":(0,v.PB)(r),"aria-hidden":!0,onMouseDown:(0,v.v0)(e.onMouseDown,a),onMouseUp:(0,v.v0)(e.onMouseUp,()=>V(!1)),onMouseEnter:(0,v.v0)(e.onMouseEnter,()=>Q(!0)),onMouseLeave:(0,v.v0)(e.onMouseLeave,()=>Q(!1))}},[Y,ea,t,W,H,X,L,i,r]),ec=(0,P.useCallback)((e={},n=null)=>({...K,...e,ref:(0,p.lq)(n,e=>{e&&ee("LABEL"===e.tagName)}),onClick:(0,v.v0)(e.onClick,()=>{var e;Z||(null==(e=J.current)||e.click(),requestAnimationFrame(()=>{var e;null==(e=J.current)||e.focus()}))}),"data-disabled":(0,v.PB)(t),"data-checked":(0,v.PB)(ea),"data-invalid":(0,v.PB)(i)}),[K,t,ea,i,Z]),ed=(0,P.useCallback)((e={},n=null)=>({...e,ref:(0,p.lq)(J,n),type:"checkbox",name:F,value:q,id:l,tabIndex:D,onChange:(0,v.v0)(e.onChange,ei),onBlur:(0,v.v0)(e.onBlur,$,()=>U(!1)),onFocus:(0,v.v0)(e.onFocus,z,()=>U(!0)),onKeyDown:(0,v.v0)(e.onKeyDown,eo),onKeyUp:(0,v.v0)(e.onKeyUp,es),required:a,checked:ea,disabled:el,readOnly:r,"aria-label":M,"aria-labelledby":G,"aria-invalid":T?Boolean(T):i,"aria-describedby":u,"aria-disabled":t,style:h}),[F,q,l,ei,$,z,eo,es,a,ea,el,r,M,G,T,i,u,t,D]),ef=(0,P.useCallback)((e={},n=null)=>({...e,ref:n,onMouseDown:(0,v.v0)(e.onMouseDown,I),onTouchStart:(0,v.v0)(e.onTouchStart,I),"data-disabled":(0,v.PB)(t),"data-checked":(0,v.PB)(ea),"data-invalid":(0,v.PB)(i)}),[ea,t,i]);return{state:{isInvalid:i,isFocused:W,isChecked:ea,isActive:Y,isHovered:X,isIndeterminate:L,isDisabled:t,isReadOnly:r,isRequired:a},getRootProps:ec,getCheckboxProps:eu,getInputProps:ed,getLabelProps:ef,htmlProps:K}}({...A,isDisabled:$,isChecked:W,onChange:U}),Z=(0,P.useMemo)(()=>({animation:X.isIndeterminate?`${O} 20ms linear, ${K} 200ms linear`:`${T} 200ms linear`,fontSize:L,color:j,...o.icon}),[j,L,,X.isIndeterminate,o.icon]),ee=(0,P.cloneElement)(F,{__css:Z,isIndeterminate:X.isIndeterminate,isChecked:X.isChecked});return(0,l.jsxs)(i.m.label,{__css:{...G,...o.container},className:(0,v.cx)("chakra-checkbox",k),...J(),children:[(0,l.jsx)("input",{className:"chakra-checkbox__input",...Q(H,n)}),(0,l.jsx)(i.m.span,{__css:{...M,...o.control},className:"chakra-checkbox__control",...Y(),children:ee}),C&&(0,l.jsx)(i.m.span,{className:"chakra-checkbox__label",...V(),__css:{marginStart:y,...o.label},children:C})]})});R.displayName="Checkbox"},2016:function(e,n,t){"use strict";t.d(n,{Y:function(){return h},K:function(){return x}});var r=t(5227),a=t(1103),i=t(5059),l=t(1628),o=t(3179),s=t(6384),u=t(5432),c=t(7294),d=t(5893),[f,m]=(0,r.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[p,v]=(0,r.k)({strict:!1,name:"FormControlContext"});function h(e){let{isDisabled:n,isInvalid:t,isReadOnly:r,isRequired:a,...i}=x(e);return{...i,disabled:n,readOnly:r,required:a,"aria-invalid":(0,u.Qm)(t),"aria-required":(0,u.Qm)(a),"aria-readonly":(0,u.Qm)(r)}}function x(e){var n,t,r;let a=v(),{id:i,disabled:l,readOnly:o,required:s,isRequired:c,isInvalid:d,isReadOnly:f,isDisabled:m,onFocus:p,onBlur:h,...x}=e,y=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==a?void 0:a.hasFeedbackText)&&(null==a?void 0:a.isInvalid)&&y.push(a.feedbackId),(null==a?void 0:a.hasHelpText)&&y.push(a.helpTextId),{...x,"aria-describedby":y.join(" ")||void 0,id:null!=i?i:null==a?void 0:a.id,isDisabled:null!=(n=null!=l?l:m)?n:null==a?void 0:a.isDisabled,isReadOnly:null!=(t=null!=o?o:f)?t:null==a?void 0:a.isReadOnly,isRequired:null!=(r=null!=s?s:c)?r:null==a?void 0:a.isRequired,isInvalid:null!=d?d:null==a?void 0:a.isInvalid,onFocus:(0,u.v0)(null==a?void 0:a.onFocus,p),onBlur:(0,u.v0)(null==a?void 0:a.onBlur,h)}}(0,i.G)(function(e,n){let t=(0,l.jC)("Form",e),r=(0,o.Lr)(e),{getRootProps:i,htmlProps:m,...v}=function(e){let{id:n,isRequired:t,isInvalid:r,isDisabled:i,isReadOnly:l,...o}=e,s=(0,c.useId)(),d=n||`field-${s}`,f=`${d}-label`,m=`${d}-feedback`,p=`${d}-helptext`,[v,h]=(0,c.useState)(!1),[x,y]=(0,c.useState)(!1),[b,k]=(0,c.useState)(!1),g=(0,c.useCallback)((e={},n=null)=>({id:p,...e,ref:(0,a.lq)(n,e=>{e&&y(!0)})}),[p]),C=(0,c.useCallback)((e={},n=null)=>{var t,a;return{...e,ref:n,"data-focus":(0,u.PB)(b),"data-disabled":(0,u.PB)(i),"data-invalid":(0,u.PB)(r),"data-readonly":(0,u.PB)(l),id:null!=(t=e.id)?t:f,htmlFor:null!=(a=e.htmlFor)?a:d}},[d,i,b,r,l,f]),j=(0,c.useCallback)((e={},n=null)=>({id:m,...e,ref:(0,a.lq)(n,e=>{e&&h(!0)}),"aria-live":"polite"}),[m]),_=(0,c.useCallback)((e={},n=null)=>({...e,...o,ref:n,role:"group"}),[o]),w=(0,c.useCallback)((e={},n=null)=>({...e,ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!t,isInvalid:!!r,isReadOnly:!!l,isDisabled:!!i,isFocused:!!b,onFocus:()=>k(!0),onBlur:()=>k(!1),hasFeedbackText:v,setHasFeedbackText:h,hasHelpText:x,setHasHelpText:y,id:d,labelId:f,feedbackId:m,helpTextId:p,htmlProps:o,getHelpTextProps:g,getErrorMessageProps:j,getRootProps:_,getLabelProps:C,getRequiredIndicatorProps:w}}(r),h=(0,u.cx)("chakra-form-control",e.className);return(0,d.jsx)(p,{value:v,children:(0,d.jsx)(f,{value:t,children:(0,d.jsx)(s.m.div,{...i({},n),className:h,__css:t.container})})})}).displayName="FormControl",(0,i.G)(function(e,n){let t=v(),r=m(),a=(0,u.cx)("chakra-form__helper-text",e.className);return(0,d.jsx)(s.m.div,{...null==t?void 0:t.getHelpTextProps(e,n),__css:r.helperText,className:a})}).displayName="FormHelperText"},6367:function(e,n,t){"use strict";t.d(n,{E:function(){return c}});var r=t(5059),a=t(5893),i=(0,r.G)(function(e,n){let{htmlWidth:t,htmlHeight:r,alt:i,...l}=e;return(0,a.jsx)("img",{width:t,height:r,ref:n,alt:i,...l})});i.displayName="NativeImage";var l=t(6245),o=t(7294),s=(e,n)=>"loaded"!==e&&"beforeLoadOrError"===n||"failed"===e&&"onError"===n,u=t(6384),c=(0,r.G)(function(e,n){let{fallbackSrc:t,fallback:r,src:c,srcSet:d,align:f,fit:m,loading:p,ignoreFallback:v,crossOrigin:h,fallbackStrategy:x="beforeLoadOrError",referrerPolicy:y,...b}=e,k=null!=p||v||!(void 0!==t||void 0!==r),g=function(e){let{loading:n,src:t,srcSet:r,onLoad:a,onError:i,crossOrigin:s,sizes:u,ignoreFallback:c}=e,[d,f]=(0,o.useState)("pending");(0,o.useEffect)(()=>{f(t?"loading":"pending")},[t]);let m=(0,o.useRef)(),p=(0,o.useCallback)(()=>{if(!t)return;v();let e=new Image;e.src=t,s&&(e.crossOrigin=s),r&&(e.srcset=r),u&&(e.sizes=u),n&&(e.loading=n),e.onload=e=>{v(),f("loaded"),null==a||a(e)},e.onerror=e=>{v(),f("failed"),null==i||i(e)},m.current=e},[t,s,r,u,a,i,n]),v=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,l.G)(()=>{if(!c)return"loading"===d&&p(),()=>{v()}},[d,p,c]),c?"loaded":d}({...e,ignoreFallback:k}),C=s(g,x),j={ref:n,objectFit:m,objectPosition:f,...k?b:function(e,n=[]){let t=Object.assign({},e);for(let e of n)e in t&&delete t[e];return t}(b,["onError","onLoad"])};return C?r||(0,a.jsx)(u.m.img,{as:i,className:"chakra-image__placeholder",src:t,...j}):(0,a.jsx)(u.m.img,{as:i,src:c,srcSet:d,crossOrigin:h,loading:p,referrerPolicy:y,className:"chakra-image",...j})});c.displayName="Image"},8129:function(e,n,t){"use strict";t.d(n,{I:function(){return c}});var r=t(2016),a=t(5059),i=t(1628),l=t(3179),o=t(6384),s=t(5432),u=t(5893),c=(0,a.G)(function(e,n){let{htmlSize:t,...a}=e,c=(0,i.jC)("Input",a),d=(0,l.Lr)(a),f=(0,r.Y)(d),m=(0,s.cx)("chakra-input",e.className);return(0,u.jsx)(o.m.input,{size:t,...f,__css:c.field,ref:n,className:m})});c.displayName="Input",c.id="Input"},7754:function(e,n,t){"use strict";t.d(n,{M:function(){return l}});var r=t(6384),a=t(5059),i=t(5893),l=(0,r.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});l.displayName="Center";var o={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,a.G)(function(e,n){let{axis:t="both",...a}=e;return(0,i.jsx)(r.m.div,{ref:n,__css:o[t],...a,position:"absolute"})})},4418:function(e,n,t){"use strict";t.d(n,{X:function(){return u}});var r=t(5059),a=t(1628),i=t(3179),l=t(6384),o=t(5432),s=t(5893),u=(0,r.G)(function(e,n){let t=(0,a.mq)("Heading",e),{className:r,...u}=(0,i.Lr)(e);return(0,s.jsx)(l.m.h2,{ref:n,className:(0,o.cx)("chakra-heading",e.className),...u,__css:t})});u.displayName="Heading"},204:function(e,n,t){"use strict";t.d(n,{k:function(){return l}});var r=t(5059),a=t(6384),i=t(5893),l=(0,r.G)(function(e,n){let{direction:t,align:r,justify:l,wrap:o,basis:s,grow:u,shrink:c,...d}=e;return(0,i.jsx)(a.m.div,{ref:n,__css:{display:"flex",flexDirection:t,alignItems:r,justifyContent:l,flexWrap:o,flexBasis:s,flexGrow:u,flexShrink:c},...d})});l.displayName="Flex"},1669:function(e,n,t){"use strict";t.d(n,{g:function(){return l}});var r=t(8420),a=t(5059),i=t(5893),l=(0,a.G)((e,n)=>(0,i.jsx)(r.K,{align:"center",...e,direction:"column",ref:n}));l.displayName="VStack"},8911:function(e,n,t){"use strict";t.d(n,{x:function(){return c}});var r=t(5059),a=t(1628),i=t(3179),l=t(6384),o=t(5432),s=t(888),u=t(5893),c=(0,r.G)(function(e,n){let t=(0,a.mq)("Text",e),{className:r,align:c,decoration:d,casing:f,...m}=(0,i.Lr)(e),p=(0,s.oA)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,u.jsx)(l.m.p,{ref:n,className:(0,o.cx)("chakra-text",e.className),...p,...m,__css:t})});c.displayName="Text"},1103:function(e,n,t){"use strict";t.d(n,{lq:function(){return a},qq:function(){return i}});var r=t(7294);function a(...e){return n=>{e.forEach(e=>{!function(e,n){if(null!=e){if("function"==typeof e){e(n);return}try{e.current=n}catch(t){throw Error(`Cannot assign value '${n}' to ref '${e}'`)}}}(e,n)})}}function i(...e){return(0,r.useMemo)(()=>a(...e),e)}}}]);