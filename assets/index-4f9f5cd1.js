import{j as e,a,F,T as J}from"./react-tilt-e877ec6c.js";import{r as h,R as U}from"./react-79ce87cc.js";import{a as Q}from"./react-dom-a8c5dd9d.js";import{P as C}from"./prop-types-2b174748.js";import{m as o,A as Y}from"./framer-motion-64bbf43a.js";import{M as K,T as X,F as Z,a as ee,P as te,b as ne,B as O}from"./react-icons-5eec15b2.js";import{r as ae}from"./react-responsive-96a1293a.js";import{S as se}from"./react-slick-92b6e567.js";/* empty css                       */import{u as ie,H as oe,C as ce,P as re,a as le,b as _e,c as me}from"./@react-three-d25d0e72.js";import{i as de}from"./maath-59d1875d.js";import"./@chevrotain-042e6b4d.js";import"./scheduler-765c72db.js";import"./lodash.debounce-722a99f9.js";import"./classnames-63c61219.js";import"./resize-observer-polyfill-ad7c6df4.js";import"./json2mq-d3ccca5e.js";import"./string-convert-c60507dd.js";import"./enquire.js-33edb58f.js";import"./@babel-98964cd2.js";import"./three-c749621b.js";import"./react-use-measure-3f58b07b.js";import"./debounce-c0f6f7f0.js";import"./its-fine-2815f9e7.js";import"./react-reconciler-60f183cf.js";import"./zustand-5f144fc5.js";import"./react-merge-refs-239dbb3c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function c(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=c(n);fetch(n.href,i)}})();const V=h.createContext(),B=({children:t})=>{const[s,c]=h.useState("dark"),l=()=>{c(n=>n==="dark"?"light":"dark")};return e(V.Provider,{value:{theme:s,toggleTheme:l},children:e("div",{className:`App ${s}`,children:t})})},D=()=>h.useContext(V);B.propTypes={children:C.node.isRequired};const S=t=>({hidden:{y:-50,opacity:0},show:{y:0,opacity:1,transition:{type:"spring",duration:1.25,delay:t}}}),u=(t,s,c,l)=>{let n,i;return t==="left"?n=100:t==="right"?n=-100:n=0,t==="up"?i=100:t==="down"?i=-100:i=0,{hidden:{x:n,y:i,opacity:0},show:{x:0,y:0,opacity:1,transition:{type:s,delay:c,duration:l,ease:"easeOut"}},exit:{x:0,y:10,opacity:0}}},he=(t,s)=>({hidden:{scale:0,opacity:0},show:{scale:1,opacity:1,transition:{type:"tween",delay:t,duration:s,ease:"easeOut"}}}),A=(t,s,c,l)=>{let n,i;return t==="left"?n="-100%":t==="right"?n="100%":n=0,t==="up"?i="100%":t==="down"?i="-100%":i=0,{hidden:{x:n,y:i},show:{x:0,y:0,transition:{type:s,delay:c,duration:l,ease:"easeOut"}}}},M=(t,s)=>({hidden:{},show:{transition:{staggerChildren:t,delayChildren:s||0}}}),ue="/assets/light-bef9af7e.png",pe="/assets/dark-3fe9091c.png",ge="/assets/homeIconDark-3f35d179.png",ve="/assets/LookingForOpportunities-2ba217af.gif",be="/assets/github-c9477c30.png",fe="/assets/github (1)-a11c3607.png",ye="/assets/linkedin-c485396a.png",we="/assets/linkedin (1)-e61db1d1.png",ke="/assets/instagram-090853cb.png",Ne="/assets/instagram (1)-88a6c759.png",j="/assets/img1-4ce2d631.svg",P="/assets/carousel1-c4b172a2.svg",L="/assets/carousel2-da81798a.svg",T="/assets/carousel3-bfa07281.svg",$e="/assets/responsive-35cb8557.gif",xe="/assets/react-23c4d31a.gif",Se=[{id:1,name:"LinkedIn",url:"https://www.linkedin.com/in/tewaryantara/",icon:ye,icon1:we},{id:2,name:"Instagram",url:"https://www.instagram.com/crankycatlady21/",icon:ke,icon1:Ne},{id:3,name:"Github",url:"https://github.com/StringAna",icon:be,icon1:fe}],Ce=[{stack:["languages","all"],name:"HTML 5",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"},{stack:["languages","all"],name:"CSS 3",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"},{stack:["languages","all"],name:"JavaScript",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"},{stack:["frameworks","all"],name:"React JS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{stack:["frameworks","all"],name:"Redux Toolkit",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"},{stack:["frameworks","all"],name:"Bootstrap",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"},{stack:["frameworks","all"],name:"Tailwind CSS",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"},{stack:["tools","all"],name:"PostgreSQL",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"},{stack:["tools","all"],name:"Git",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"},{stack:["tools","all"],name:"GitHub",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},{stack:["tools","all"],name:"Webpack",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg"},{stack:["tools","all"],name:"Figma",icon:"https://www.vectorlogo.zone/logos/figma/figma-icon.svg"},{stack:["tools","all"],name:"Postman",icon:"https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"},{stack:["languages","all"],name:"Python",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},{stack:["languages","all"],name:"C++",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg"},{stack:["tools","all"],name:"VSCode",icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"},{stack:["tools","all"],name:"Office 365",icon:"https://img.icons8.com/?size=100&id=37619&format=png&color=000000"},{stack:["tools","all"],name:"UIPath",icon:"https://logowik.com/content/uploads/images/ui-path7967.jpg"},{stack:["frameworks","all"],name:"Streamlit",icon:"https://streamlit.io/images/brand/streamlit-logo-secondary-colormark-lighttext.svg"}],qe=[{id:1,name:"Better Cover Letter Generator",desc:"Using Streamlit and Snowflake API, I created a cover letter generator that uses a user's resume to generate a cover letter for a job application. ",tech:["React","JavaScript","Streamlit","Snowflake"],img:j,carousel:[P,L,T],source_link:"https://github.com",live_link:"https://github.com"},{id:2,name:"Better Cover Letter Generator",desc:"Using Streamlit and Snowflake API, I created a cover letter generator that uses a user's resume to generate a cover letter for a job application. ",tech:["React","JavaScript","Streamlit","Snowflake"],img:j,carousel:[P,L,T],source_link:"https://github.com",live_link:"https://github.com"},{id:3,name:"Better Cover Letter Generator",desc:"Using Streamlit and Snowflake API, I created a cover letter generator that uses a user's resume to generate a cover letter for a job application. ",tech:["React","JavaScript","Streamlit","Snowflake"],img:j,carousel:[P,L,T],source_link:"https://github.com",live_link:"https://github.com"},{id:4,name:"Better Cover Letter Generator",desc:"Using Streamlit and Snowflake API, I created a cover letter generator that uses a user's resume to generate a cover letter for a job application. ",tech:["React","JavaScript","Streamlit","Snowflake"],img:j,carousel:[P,L,T],source_link:"https://github.com",live_link:"https://github.com"}],z=[{id:1,name:"Supervisor 1",image:"",text:"She is good",country:"Any",linkedIn:"https://www.linkedin.com/in/tewaryantara/"}],Ie=[{id:1,icon:$e,title:"Responsive",text:"bleh responsive"},{id:2,icon:xe,title:"Front-end ",text:"bleh Front-end "},{id:3,icon:ve,title:"Back-end ",text:"just bleh"}],E=[{id:1,name:"About",url:"/#about"},{id:2,name:"Service",url:"/#service"},{id:3,name:"Work",url:"/#work"},{id:4,name:"Testimonial",url:"/#testimonial"},{id:5,name:"Contact",url:"/#contact"}],je="_navbar_container_7stiq_1",Pe="_progress_bar_7stiq_11",Le="_navbar_7stiq_1",Te="_fixed_7stiq_61",Ae="_logo_btn_7stiq_69",Re="_logo_7stiq_69",ze="_navlink_7stiq_89",Fe="_active_7stiq_107",Me="_font_7stiq_117",Oe="_resume_container_7stiq_133",Ee="_resume_7stiq_133",Ve="_resume_hover_7stiq_155",Be="_theme_btn_7stiq_219",De="_theme_img_7stiq_227",He="_mobilemenu_7stiq_239",Ge="_mobile_font_7stiq_275",We="_mobile_resume_container_7stiq_287",Je="_mobile_active_7stiq_299",Ue="_hamburger_7stiq_321",Qe="_line_7stiq_337",Ye="_open_7stiq_393",m={navbar_container:je,progress_bar:Pe,navbar:Le,fixed:Te,logo_btn:Ae,logo:Re,navlink:ze,active:Fe,font:Me,resume_container:Oe,resume:Ee,resume_hover:Ve,theme_btn:Be,theme_img:De,mobilemenu:He,mobile_font:Ge,mobile_resume_container:We,mobile_active:Je,hamburger:Ue,line:Qe,open:Ye},Ke=()=>{const{theme:t,toggleTheme:s}=D(),[c,l]=h.useState(""),[n,i]=h.useState(!1),[r,k]=h.useState(!1),N=()=>{k(!r)};return h.useEffect(()=>{const p=()=>{window.pageYOffset>780?i(!0):i(!1)};return window.addEventListener("scroll",p),()=>{window.removeEventListener("scroll",p)}},[]),e("div",{className:m.navbar_container,children:a("nav",{className:`${m.navbar} ${n?"fixed":""}`,children:[e(o.button,{type:"button",onClick:()=>{window.scrollTo(0,0)},whileHover:{scale:1.12,backgroundColor:"var(--dark-blue)",transition:{type:"spring",damping:20,stiffness:300}},className:m.logo_btn,children:e("img",{src:ge,alt:"Home Icon Dark",className:m.homeIconDark,loading:"lazy"})}),a("ul",{className:m.navlink,children:[E.map(p=>e("li",{className:c===p.name?`${m.active}`:null,children:e("a",{href:p.url,className:m.font,onClick:()=>l(p.name),children:p.name})},p.id)),e("li",{})]}),a("div",{className:m.hamburger,onClick:N,onKeyDown:p=>{p.key==="Enter"&&N()},role:"button",tabIndex:0,children:[e("span",{className:`${m.line} ${r?m.open:""}`}),e("span",{className:`${m.line} ${r?m.open:""}`}),e("span",{className:`${m.line} ${r?m.open:""}`})]}),a("ul",{variants:M(),initial:"hidden",whileInView:"show",viewport:{once:!0,amount:.25},className:`${m.mobilemenu} ${r?"h-screen opacity-100":"h-0"}`,children:[e("li",{children:e("button",{type:"button",className:`${m.theme_btn} mt-[130px]`,onClick:s,children:t==="light"?e("img",{src:ue,className:m.theme_img,alt:"light theme",loading:"lazy"}):e("img",{src:pe,className:m.theme_img,alt:"dark theme",loading:"lazy"})})}),E.map((p,I)=>e("li",{className:c===p.name?m.active:null,children:e(o.a,{href:p.url,className:m.mobile_font,variants:u("right","",I*.2,1),initial:"hidden",whileInView:"show",onClick:()=>{l(p.name),N()},children:p.name})},p.id))]})]})})},Xe="_container_v2b3v_1",Ze="_intro_v2b3v_27",et="_name_v2b3v_49",tt="_desc_v2b3v_61",nt="_btn_container_v2b3v_79",at="_btn_hover_v2b3v_101",st="_btn_v2b3v_79",it="_arrow_v2b3v_129",$={container:Xe,intro:Ze,name:et,desc:tt,btn_container:nt,btn_hover:at,btn:st,arrow:it},ot=()=>e(o.section,{variants:M(),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},children:a("div",{className:$.container,children:[a("p",{className:$.intro,children:["Hi, I'm"," ",e(o.span,{variants:u("","",.1,1),className:$.name,children:"Antara Tewary"})]}),e(o.p,{variants:u("","",.5,1),className:$.desc,children:"Data Scientist | Machine Learning Engineer | Full Stack Developer"}),a(o.button,{variants:u("","",.6,1),className:$.btn_container,onClick:()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})},children:[e("span",{className:$.btn_hover,children:"All my work"}),e("span",{className:$.btn,children:"All my work"}),e(K,{className:$.arrow})]})]})}),q=(t,s,c)=>function(){const n=ae.useMediaQuery({minWidth:768});return a(o.section,{variants:M(),initial:"hidden",whileInView:"show",viewport:{once:!n,amount:.25},className:`max-w-[90%] mx-auto ${c}`,children:[e("span",{id:s,children:" "}),e(t,{})]})},ct="_title_105mh_1",rt="_para_105mh_45",lt="_text_105mh_57",_t="_link_105mh_73",mt="_img_container_105mh_117",dt="_img_105mh_117",ht="_pulse_105mh_1",w={title:ct,para:rt,text:lt,link:_t,img_container:mt,img:dt,pulse:ht},ut=()=>a(F,{children:[e(o.h1,{variants:S(),className:w.title,children:"About Me"}),a("div",{className:w.para,children:[a(o.p,{variants:u("","",.5,1),className:w.text,children:["My name is"," ",e("a",{href:"https://www.linkedin.com/in/tewaryantara/",target:"_blank",className:w.link,rel:"noreferrer",children:"Antara Tewary"})," ","and I am just here."]}),e(o.p,{variants:u("","",.75,1),className:w.text,children:"I have been trying to learn about new technologies."}),a(o.p,{variants:u("","",1,1),className:w.text,children:["my whatever it is that I am doing. My attempts are listed as"," ",a("a",{href:"https://github.com/StringAna",target:"_blank",className:w.link,rel:"noreferrer",children:[" ","generic contributions on GitHub"]})," ","Hoping that there's light at the end of the tunnel"]}),a(o.p,{variants:u("","",1.25,1),className:w.text,children:["Reach out for rant, for really good food, and a lot of wisdom."," ",e("a",{href:"https://github.com/StringAna",target:"_blank",className:w.link,rel:"noreferrer",children:"Access my resume"})," ","to know more about how I can bring value to you."]})]})]}),pt=q(ut,"about",""),gt="_title_1pjy7_1",vt="_subtitle_1pjy7_47",bt="_card_container_1pjy7_61",ft="_tilt_1pjy7_83",yt="_card_shadow_1pjy7_91",wt="_card_overlay_1pjy7_99",kt="_card_1pjy7_61",Nt="_img_container_1pjy7_161",$t="_img_1pjy7_161",xt="_name_1pjy7_189",St="_text_1pjy7_203",Ct="_container_1pjy7_417",y={title:gt,subtitle:vt,card_container:bt,tilt:ft,card_shadow:yt,card_overlay:wt,card:kt,img_container:Nt,img:$t,name:xt,text:St,container:Ct},qt=()=>a("div",{className:y.container,children:[e(o.h1,{variants:S(),className:y.title,children:"Deliverables"}),e(o.p,{variants:u("","",.15,1),className:y.subtitle,children:"What I can do for you -"}),e("div",{className:y.card_container,children:Ie.map((t,s)=>e(J,{className:y.tilt,children:a(o.div,{variants:u("right","tween",s*.8,.5),className:y.card_shadow,children:[e("div",{className:y.card_overlay,children:e("p",{className:y.text,children:t.text})}),a("div",{className:y.card,children:[e("div",{className:y.img_container,children:e("img",{className:`${y.img}`,src:t.icon,alt:t.title,loading:"lazy"})}),e("p",{className:y.name,children:t.title})]})]})},t.id))})]}),It=q(qt,"service","my-0"),jt="_title_1ynvg_1",Pt="_btn_container_1ynvg_19",Lt="_btn_active_1ynvg_51",Tt="_tech_container_1ynvg_63",At="_tech_1ynvg_63",Rt="_tech_img_1ynvg_99",x={title:jt,btn_container:Pt,btn_active:Lt,tech_container:Tt,tech:At,tech_img:Rt},zt=()=>{const[t,s]=h.useState("all"),c=n=>{s(n)},l=["all","languages","frameworks","tools"];return a(F,{children:[e(o.p,{variants:u("","",.5,1),className:x.title,children:"Stuff I have worked with:"}),e(o.div,{variants:S(),className:x.btn_container,children:l.map(n=>e("button",{type:"button",className:n===t?x.btn_active:x.btn,onClick:()=>c(n),children:n},n.name))}),e("div",{className:x.tech_container,children:Ce.filter(n=>n.stack.includes(t)).map((n,i)=>e(o.abbr,{initial:"hidden",whileInView:"show",variants:u("up","",i*.15,.5),title:n.name,className:x.tech,children:e("img",{className:x.tech_img,src:n.icon,alt:n.name,loading:"lazy"})},n.name))})]})},Ft=q(zt,"",""),Mt="_title_g2l1c_1",Ot="_project_container_g2l1c_45",Et="_card_g2l1c_59",Vt="_img_g2l1c_71",Bt="_card_overlay_g2l1c_91",Dt="_card_text_g2l1c_125",Ht="_text_g2l1c_147",Gt="_name_g2l1c_191",Wt="_tech_g2l1c_205",Jt="_tech_list_g2l1c_215",Ut="_btn_container_g2l1c_307",Qt="_btn_hover_g2l1c_333",Yt="_btn_g2l1c_307",f={title:Mt,project_container:Ot,card:Et,img:Vt,card_overlay:Bt,card_text:Dt,text:Ht,"slide-down":"_slide-down_g2l1c_1",name:Gt,tech:Wt,tech_list:Jt,btn_container:Ut,btn_hover:Qt,btn:Yt,"slide-up":"_slide-up_g2l1c_1"},Kt="_overlay_cp5r1_1",Xt="_container_cp5r1_23",Zt="_close_btn_cp5r1_37",en="_img_cp5r1_71",tn="_content_cp5r1_83",nn="_name_cp5r1_95",an="_tech_cp5r1_105",sn="_tech_list_cp5r1_115",on="_description_cp5r1_207",cn="_link_cp5r1_217",rn="_btn_container_cp5r1_229",ln="_btn_hover_cp5r1_253",_n="_btn_cp5r1_229",g={overlay:Kt,container:Xt,close_btn:Zt,img:en,content:tn,name:nn,tech:an,tech_list:sn,description:on,link:cn,btn_container:rn,btn_hover:ln,btn:_n};const H=({carousel:t})=>e(se,{...{dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1},children:t.map(c=>e("div",{className:"carousel-img",children:e("img",{src:c,alt:"project sample img",loading:"lazy"})},c))});H.propTypes={carousel:C.arrayOf(C.string).isRequired};const G=({handleClose:t,project:s})=>e(o.div,{className:g.overlay,initial:"hidden",animate:"show",exit:{opacity:0,scale:0,transition:{type:"tween",duration:.5}},variants:he(0,.5),children:a("div",{className:g.container,children:[e(X,{className:g.close_btn,onClick:t}),e(H,{carousel:s.carousel}),a("div",{className:g.content,children:[e("h2",{className:g.name,children:s.name}),e("p",{className:g.tech,children:s.tech.map(c=>e("span",{className:g.tech_list,children:`#${c}`},c))}),e("p",{className:g.description,children:s.desc}),a("div",{className:g.link,children:[a("a",{href:s.source_link,target:"_blank",className:`${g.source_link} ${g.btn_container}`,rel:"noreferrer",children:[e("span",{className:g.btn_hover,children:"View Source"}),e("span",{className:g.btn,children:"View Source"})]}),s.id!==2&&s.id!==5?a("a",{href:s.live_link,target:"_blank",className:`${g.live_link} ${g.btn_container}`,rel:"noreferrer",children:[e("span",{className:g.btn_hover,children:"View Live"}),e("span",{className:g.btn,children:"View Live"})]}):null]})]})]})});G.propTypes={handleClose:C.func.isRequired,project:C.objectOf(C.string).isRequired};const mn=()=>{const[t,s]=h.useState(!1),[c,l]=h.useState(null),n=r=>{l(r),s(!0)},i=()=>{l(null),s(!1)};return a("div",{className:"relative",children:[e(o.h1,{variants:S(),className:f.title,children:"My Recent Works"}),e("div",{className:f.project_container,children:qe.map((r,k)=>a(o.div,{variants:u("up","",k*.4,.5),index:k,className:f.card,children:[e("img",{className:f.img,src:r.img,alt:"project sample",loading:"lazy"}),e("div",{className:f.card_overlay,children:a("div",{className:f.card_text,children:[a("div",{className:f.text,children:[e("h2",{className:f.name,children:r.name}),e("p",{className:f.tech,children:r.tech.map(N=>e("span",{className:f.tech_list,children:`#${N}`},N))})]}),a("button",{type:"button",className:f.btn_container,onClick:()=>n(r),children:[e("span",{className:f.btn_hover,children:"Learn more"}),e("span",{className:f.btn,children:"Learn more"})]})]})})]},r.id))}),e(Y,{children:t&&e(G,{handleClose:i,project:c})})]})},dn=q(mn,"work","my-8"),hn="_title_ahuty_1",un="_subtitle_ahuty_47",pn="_carousel_container_ahuty_61",gn="_btn_container_ahuty_69",vn="_button_ahuty_81",bn="_prev_ahuty_93",fn="_next_ahuty_119",yn="_card_container_ahuty_145",wn="_card_ahuty_145",kn="_header_ahuty_177",Nn="_img_ahuty_191",$n="_openquote_ahuty_207",xn="_para_ahuty_219",Sn="_label_ahuty_233",Cn="_name_ahuty_247",qn="_country_ahuty_259",In="_icon_ahuty_271",d={title:hn,subtitle:un,carousel_container:pn,btn_container:gn,button:vn,prev:bn,next:fn,card_container:yn,card:wn,header:kn,img:Nn,openquote:$n,para:xn,label:Sn,name:Cn,country:qn,icon:In},jn=()=>{const[t,s]=h.useState(1),[c,l]=h.useState(1),[n,i]=h.useState(!1),r=t*c,k=r-c,N=z.slice(k,r),p=()=>{s(n?_=>_===2?_-1:1:_=>_===1?z.length:_-1)},I=()=>{s(n?_=>_===1?_+1:2:_=>_===z.length?1:_+1)};return h.useEffect(()=>{const _=window.matchMedia("(min-width: 1200px)"),R=W=>{W.matches?(l(3),i(!0)):(l(1),i(!1))};return R(_),_.addEventListener("change",R),()=>{_.removeEventListener("change",R)}},[]),a("div",{className:d.container,children:[e(o.h1,{variants:S(),className:d.title,children:"Testimonials"}),e(o.p,{variants:u("","",.15,1),className:d.subtitle,children:"Recommendations and Testimonials from people I have worked with -"}),a("div",{className:d.carousel_container,children:[e(o.div,{variants:u("","",.5,1),className:d.card_container,children:N.map(_=>a(o.div,{initial:"hidden",animate:"show",variants:u("","",.15,1),className:d.card,children:[a("div",{className:d.header,children:[e(o.div,{variants:S(),children:e(Z,{className:d.openquote})}),e("img",{className:d.img,src:_.image,alt:"profile"})]}),e(o.p,{variants:u("","",.15,1),className:d.para,children:_.text}),a("div",{className:`${d.label} ${d.firstlabel}`,children:[a(o.p,{variants:A("left","",.3,.75),className:d.name,children:[_.name," ",a("span",{className:d.country,children:["(",_.country,")"]})]}),e(o.abbr,{variants:A("right","",.3,.75),title:"LinkedIn Profile",children:e("a",{href:_.linkedIn,target:"_blank",className:d.icon,rel:"noreferrer","aria-label":"LinkedIn Profile",children:e(ee,{})})})]})]},_.id))}),a("div",{className:d.btn_container,children:[e("button",{className:n&&t===1?"hidden":`${d.button} ${d.prev}`,type:"button",onClick:p,children:e(te,{})}),e("button",{className:n&&t===2?"hidden":`${d.button} ${d.next}`,type:"button",onClick:I,children:e(ne,{})})]})]})]})},Pn=q(jn,"testimonial","my-0"),Ln="/assets/ContactMe-0bd824b8.gif",Tn="_title_192qd_1",An="_subtitle_192qd_45",Rn="_container_192qd_59",zn="_form_container_192qd_79",Fn="_form_192qd_79",Mn="_form_title_192qd_115",On="_input_192qd_129",En="_textarea_192qd_163",Vn="_btn_container_192qd_171",Bn="_btn_hover_192qd_199",Dn="_btn_192qd_171",Hn="_error_192qd_265",Gn="_img_container_192qd_273",Wn="_img_192qd_273",b={title:Tn,subtitle:An,container:Rn,form_container:zn,form:Fn,form_title:Mn,input:On,textarea:En,btn_container:Vn,btn_hover:Bn,btn:Dn,error:Hn,img_container:Gn,img:Wn},Jn=()=>{const[t,s]=h.useState({name:"",email:"",message:""}),c=n=>{const{target:i}=n,{name:r,value:k}=i;s({...t,[r]:k})},l=n=>{n.preventDefault();const i=n.target;i.checkValidity()&&(i.submit(),s({name:"",email:"",message:""}))};return a(F,{children:[e(o.h1,{variants:S(),className:b.title,children:"Get in Touch!"}),e(o.p,{variants:u("","",.15,1),className:b.subtitle,children:"What really gets me going is good food, but you aren't here for a dinner party. I do love a good chat though, so feel free to reach out to me for any queries or just to say hi!"}),a("div",{className:b.container,children:[e(o.form,{variants:A("left","",0,1),onSubmit:l,action:"https://formspree.io/f/xrgnnjvj",method:"post",className:b.form_container,children:a("div",{className:b.form,children:[e("h4",{className:b.form_title,children:"Contact Me"}),e("input",{type:"text",placeholder:"Name",required:!0,maxLength:"30",name:"name",value:t.name,onChange:c,className:b.input}),e("input",{type:"email",placeholder:"Email",required:!0,name:"email",value:t.email,onChange:c,className:b.input}),e("textarea",{cols:"30",rows:"10",placeholder:"Your message",required:!0,maxLength:"500",name:"message",value:t.message,onChange:c,className:`${b.input} ${b.textarea}`}),a("button",{type:"submit",className:b.btn_container,children:[e("span",{className:b.btn_hover,children:"Get in touch"}),e("span",{className:b.btn,children:"Get in touch"})]})]})}),e(o.div,{variants:A("right","",0,1),className:b.img_container,children:e("img",{src:Ln,alt:"contact",className:b.img,loading:"lazy"})})]})]})},Un=q(Jn,"contact","my-0"),Qn="_footer_1kmus_1",Yn="_up_icon_container_1kmus_21",Kn="_floating_1kmus_1",Xn="_title_1kmus_51",Zn="_text_1kmus_61",ea="_icon_container_1kmus_105",ta="_overlay_1kmus_119",na="_up_overlay_1kmus_129",aa="_icon_1kmus_105",sa="_icon_hover_1kmus_159",ia="_up_icon_1kmus_21",oa="_up_icon_hover_1kmus_175",ca="_p_1kmus_243",ra="_a_1kmus_257",la="_span_1kmus_345",v={footer:Qn,up_icon_container:Yn,floating:Kn,title:Xn,text:Zn,icon_container:ea,overlay:ta,up_overlay:na,icon:aa,icon_hover:sa,up_icon:ia,up_icon_hover:oa,p:ca,a:ra,span:la},_a=()=>a(o.section,{id:v.footer,initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.25},children:[e(o.div,{variants:u("","",1,1),className:v.up_icon_container,children:e("abbr",{title:"back to home page",children:a("button",{type:"button",className:`${v.overlay} ${v.up_overlay}`,onClick:()=>{window.scrollTo(0,0)},children:[e(O,{className:`${v.icon_hover} ${v.up_icon_hover}`}),e(O,{className:`${v.icon} ${v.up_icon}`})]})})}),e("p",{className:v.title,children:e("span",{className:v.text,children:"My Social Networks"})}),e("div",{className:v.icon_container,children:Se.map(t=>a("a",{href:t.url,target:"_blank",className:v.overlay,rel:"noreferrer",children:[e("img",{className:v.icon_hover,src:t.icon,alt:t.name,loading:"lazy"}),e("img",{className:v.icon,src:t.icon1,alt:t.name,loading:"lazy"})]},t.id))}),e("abbr",{title:"Source Code",className:v.p,children:a("a",{href:"https://github.com",target:"_blank",className:v.a,rel:"noreferrer",children:["Brought into being by"," ",e("span",{className:v.span,children:"©"})," ","Antara Tewary"]})})]}),ma=()=>{const{progress:t}=ie();return a(oe,{as:"div",center:!0,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[e("span",{className:"canvas-loader"}),a("p",{style:{fontSize:14,color:"#F1F1F1",fontWeight:800,marginTop:40},children:[t.toFixed(2),"%"]})]})},da=t=>{const s=h.useRef(),[c]=h.useState(()=>de(new Float32Array(5200),{radius:1.2})),{theme:l}=D(),n=l==="dark"?"#ffffff":"#000000";return le((i,r)=>{s.current.rotation.x-=r/10,s.current.rotation.y-=r/15}),e("group",{rotation:[0,0,Math.PI/4],children:e(_e,{ref:s,positions:c,stride:3,frustumCulled:!0,...t,children:e(me,{transparent:!0,color:n,size:.002,sizeAttenuation:!0,depthWrite:!1})})})},ha=()=>{const[t,s]=h.useState(1);return h.useEffect(()=>{const c=()=>{s(window.innerWidth/window.innerHeight)};return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]),e("div",{className:"absolute left-0 top-0 z-[-1]",children:a(ce,{camera:{position:[0,0,1]},gl:{antialias:!0,alpha:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"},style:{width:"100vw",height:"100vh"},pixelratio:window.devicePixelRatio,aspectratio:t,className:"star-canvas",children:[e(h.Suspense,{fallback:e(ma,{}),children:e(da,{})}),e(re,{all:!0})]})})};function ua(){return a(B,{children:[a("div",{className:"relative w-screen h-screen z-10",children:[e(ot,{}),e(ha,{})]}),a("div",{className:"relative z-0 body",children:[e(Ke,{}),e(pt,{}),e(Ft,{}),e(It,{}),e(dn,{}),e("div",{className:"relative mt-24 pb-28",children:e(Pn,{})}),e("div",{className:"contact mb-80",children:e(Un,{})})]}),e(_a,{})]})}Q.createRoot(document.getElementById("root")).render(e(U.StrictMode,{children:e(ua,{})}));