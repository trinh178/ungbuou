"use strict";(self.webpackChunkreactjs_structure_v3=self.webpackChunkreactjs_structure_v3||[]).push([[969],{7969:function(e,n,r){r.r(n),r.d(n,{default:function(){return N}});var o=r(9439),t=r(2791),a=r(403),i=r(3044),s=r(4554),c=r(6151),l=r(4454),u=r(4708),d=r(5523),m=r(1889),p=r(3433),h=r(4942),x=r(3366),v=r(7462),Z=r(8182),f=r(4419),b=r(4036),g=r(6934),y=r(1402),j=r(3031),w=r(2071),k=r(890),S=r(5878),C=r(1217);function D(e){return(0,C.Z)("MuiLink",e)}var P=(0,S.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),V=r(8529),F=r(2065),M={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},W=function(e){var n=e.theme,r=e.ownerState,o=function(e){return M[e]||e}(r.color),t=(0,V.DW)(n,"palette.".concat(o),!1)||r.color,a=(0,V.DW)(n,"palette.".concat(o,"Channel"));return"vars"in n&&a?"rgba(".concat(a," / 0.4)"):(0,F.Fq)(t,.4)},z=r(184),A=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],L=(0,g.ZP)(k.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["underline".concat((0,b.Z)(r.underline))],"button"===r.component&&n.button]}})((function(e){var n=e.theme,r=e.ownerState;return(0,v.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,v.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:W({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&(0,h.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(P.focusVisible),{outline:"auto"}))})),R=t.forwardRef((function(e,n){var r=(0,y.Z)({props:e,name:"MuiLink"}),a=r.className,i=r.color,s=void 0===i?"primary":i,c=r.component,l=void 0===c?"a":c,u=r.onBlur,d=r.onFocus,m=r.TypographyClasses,h=r.underline,g=void 0===h?"always":h,k=r.variant,S=void 0===k?"inherit":k,C=r.sx,P=(0,x.Z)(r,A),V=(0,j.Z)(),F=V.isFocusVisibleRef,W=V.onBlur,R=V.onFocus,H=V.ref,q=t.useState(!1),B=(0,o.Z)(q,2),N=B[0],T=B[1],_=(0,w.Z)(n,H),I=(0,v.Z)({},r,{color:s,component:l,focusVisible:N,underline:g,variant:S}),O=function(e){var n=e.classes,r=e.component,o=e.focusVisible,t=e.underline,a={root:["root","underline".concat((0,b.Z)(t)),"button"===r&&"button",o&&"focusVisible"]};return(0,f.Z)(a,D,n)}(I);return(0,z.jsx)(L,(0,v.Z)({color:s,className:(0,Z.Z)(O.root,a),classes:m,component:l,onBlur:function(e){W(e),!1===F.current&&T(!1),u&&u(e)},onFocus:function(e){R(e),!0===F.current&&T(!0),d&&d(e)},ref:_,ownerState:I,variant:S,sx:[].concat((0,p.Z)(Object.keys(M).includes(s)?[]:[{color:s}]),(0,p.Z)(Array.isArray(C)?C:[C]))},P))})),H=r(703),q=r(7391),B=r(1403);function N(){var e=B.Z.useLoginMutation(),n=(0,o.Z)(e,1)[0];return(0,z.jsxs)(m.ZP,{container:!0,component:"main",sx:{height:"100vh"},children:[(0,z.jsx)(u.ZP,{}),(0,z.jsx)(m.ZP,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:function(e){return"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900]},backgroundSize:"cover",backgroundPosition:"center"}}),(0,z.jsx)(m.ZP,{item:!0,xs:12,sm:8,md:5,component:H.Z,elevation:6,square:!0,children:(0,z.jsxs)(s.Z,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,z.jsx)(i.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,z.jsx)(a.Z,{})}),(0,z.jsx)(k.Z,{component:"h1",variant:"h5",children:"Sign in"}),(0,z.jsxs)(s.Z,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var r=new FormData(e.currentTarget);n({data:{username:r.get("email"),password:r.get("password")},options:{showLoading:!0,notifySuccess:"\u0110\u0103ng nh\u1eadp th\xe0nh c\xf4ng"}})},sx:{mt:1},children:[(0,z.jsx)(q.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),(0,z.jsx)(q.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),(0,z.jsx)(d.Z,{control:(0,z.jsx)(l.Z,{value:"remember",color:"primary"}),label:"Remember me"}),(0,z.jsx)(c.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),(0,z.jsxs)(m.ZP,{container:!0,children:[(0,z.jsx)(m.ZP,{item:!0,xs:!0,children:(0,z.jsx)(R,{href:"#",variant:"body2",children:"Forgot password?"})}),(0,z.jsx)(m.ZP,{item:!0,children:(0,z.jsx)(R,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]}),(0,z.jsxs)(k.Z,{variant:"body2",color:"text.secondary",align:"center",sx:{mt:5},children:["Copyright \xa9 ",(0,z.jsx)(R,{color:"inherit",href:"https://mui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})]})]})})]})}},403:function(e,n,r){var o=r(4836);n.Z=void 0;var t=o(r(5649)),a=r(184),i=(0,t.default)((0,a.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");n.Z=i}}]);
//# sourceMappingURL=969.31fce26e.chunk.js.map