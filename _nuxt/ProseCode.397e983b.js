import{d as y,r as l,a0 as w,a1 as k,x,b as s,c as p,e as m,g as C,w as S,Y as _,K as f,T as $,n as v,a2 as b,p as I,j as P,l as h,t as z,f as N,$ as T}from"./entry.d1e76f89.js";const V=e=>(I("data-v-4a003820"),e=e(),P(),e),A=V(()=>m("span",{class:"sr-only"},"Copy to clipboard",-1)),M={class:"icon-wrapper"},R=y({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const n=e,a=l(),{copy:t}=w();k(a,()=>{o.value==="copied"&&(o.value="init")});const{prose:c}=x(),o=l("init"),g=B=>{t(n.content).then(()=>{o.value="copied"}).catch(r=>{console.warn("Couldn't copy to clipboard!",r)})};return(B,r)=>{const u=b;return s(),p("button",{ref_key:"copyButtonRef",ref:a,class:v([(e.show||o.value==="copied")&&"show"]),onClick:g},[A,m("span",M,[C($,{name:"fade"},{default:S(()=>{var d,i;return[o.value==="copied"?(s(),_(u,{key:0,name:(d=f(c).copyButton)==null?void 0:d.iconCopied,size:"18",class:"copied"},null,8,["name"])):(s(),_(u,{key:1,name:(i=f(c).copyButton)==null?void 0:i.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const j=h(R,[["__scopeId","data-v-4a003820"]]),D={key:0,class:"filename"},E=y({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const n=l(!1);return(a,t)=>{const c=j;return s(),p("div",{class:v([[`highlight-${e.language}`],"prose-code"]),onMouseenter:t[0]||(t[0]=o=>n.value=!0),onMouseleave:t[1]||(t[1]=o=>n.value=!1)},[e.filename?(s(),p("span",D,z(e.filename),1)):N("",!0),T(a.$slots,"default",{},void 0,!0),C(c,{show:n.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const O=h(E,[["__scopeId","data-v-c164ce0a"]]);export{O as default};
