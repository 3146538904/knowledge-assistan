import{_ as e,a,b as l,r as n,a3 as t,aT as s,w as o,o as i,c,aU as r,d as u,e as d,f as v,g as m,l as f,i as p,h as y,x as h,a5 as b,z as g,F as x,v as k,K as w,j as _,k as C,y as z,aV as T,E as I,G as M,ag as j,p as Y,m as E,s as S,I as V,aW as A,q as L,A as O,B,D as $,Y as H}from"./index-63ac60c9.js";import{v as R}from"./el-loading-2f9cb83f.js";import{_ as q,a as J,b as K}from"./568-ca54000b.js";import{_ as N,a as P}from"./add-f32f7d71.js";const U=e=>(O("data-v-e5629de6"),e=e(),B(),e),D={class:"mb-20"},F={class:"flex-1 flex"},G={class:"chat flex flex-col"},W=["innerHTML"],Q={key:0,class:"chat-main-item-source mt-10 pt-10"},X={class:"chat-footer"},Z={class:"finger flex x-between y-center"},ee={key:0,class:"flex no-shrink mr-15"},ae={class:"flex-center"},le={key:0,class:"chat-dialog flex flex-col"},ne={class:"content"},te=T('<div class="top flex-center" data-v-e5629de6><div class="size-12 flex-col y-center" data-v-e5629de6><img class="w-55 h-55 mb-5" src="'+J+'" alt="" data-v-e5629de6></div><div class="gif ml-20" data-v-e5629de6><img src="'+K+'" alt="" data-v-e5629de6></div></div>',1),se={class:"main flex-col x-between"},oe={class:"size-15 mb-15 txt-bold"},ie=U((()=>v("p",{class:"size-12"},[h("松开发送"),v("span",{class:"ml-20"},"上滑取消")],-1))),ce={class:"right flex-1 ml-25 flex flex-col"},re={class:"table mt-40 flex flex-col flex-1"},ue={class:"flex x-between"},de=U((()=>v("div",{class:"flex y-center"},[v("img",{class:"mr-5",src:N}),h(" 已关联知识 ")],-1))),ve=e({__name:"info",setup(e,{expose:T}){let O=document.querySelector("#app");const B=a({loading:!1,name:"",buttonColor:"",iconColor:"#3da0ff",showLink:"",list:[],source:[]});async function H(e){window.open(`/detail/${e.id}`)}const J=[{prop:"name",label:"名称",type:"icon"},{type:"operation",label:"操作"}],K=l(),N=n([{content:"欢迎咨询，请输入您想查找的问题！",role:0}]),P=n(!1),U=t((()=>location.origin+"/chatbot/"+K.params.id)),ve=`<script type='module' id="knowledge-sdk" src="${location.origin}/chatbot.js?id=${K.params.id}">\n<\/script>`;const me=async()=>{if(!be.value)return I.warning("请输入内容！");if(P.value)return I.warning("等待上一条消息完成！");P.value=!0,N.value.push({content:be.value,role:1}),N.value.push({content:"加载中...",role:0});let e=be.value;be.value="",async function(e,a){const l=JSON.parse(a),n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Authorization:$()||"Basic dnNvYzp2c29jMjAyMg"},body:a});if(!n.ok)return P.value=!1,void(N.value[N.value.length-1].content="发送失败，请重试！");const t=n.body.getReader();for(;l.assistantId===K.params.id;){const{value:e,done:a}=await t.read();if(a){P.value=!1;break}const l=new TextDecoder("utf-8").decode(e);let n=/^event:(.+)\nid:(.+)\ndata:(.+)/gm.exec(l);if(!n)return P.value=!1;const[,s,o,i]=n;if("add"===s){const e=JSON.parse(i).content;N.value[N.value.length-1].content=e||"非常抱歉，但我仍然不清楚你希望从我的回答中获得什么信息。如果你有任何问题或者需要具体的帮助，请详细描述你的问题，我将尽力提供所需的帮助和解答。",ye()}else"error"===s&&(P.value=!1,N.value[N.value.length-1].content="发送失败，请重试！")}}(`${M}/assistant/smartSse`,JSON.stringify({assistantId:K.params.id,question:e})),ye()};async function fe(){const{data:e}=await s.getAssistantDetail({id:K.params.id});B.name=e.name,B.buttonColor=e.buttonColor,B.iconColor=e.iconColor||"#3da0ff",B.showLink=e.showLink||0,B.list=e.relateFileObjectList,N.value[0].content=e.welcome||"欢迎咨询，请输入您想查找的问题！"}fe(),T({chatInfo:n({})}),o((()=>K.params.id),(e=>{null==he||he.close(),he=null,P.value=!1,fe(),N.value=[{content:"欢迎咨询，请输入您想查找的问题！",role:0}]}));const pe=n(null);function ye(){j((()=>{const e=document.querySelector(".chat-main .el-scrollbar__wrap");e.scrollTop=e.scrollHeight}))}let he=null;i((()=>{null==he||he.close(),he=null}));const be=n(""),ge=n(!1),xe=new Voice({appId:"2dd9b1e7",apiSecret:"YzJhMmY0MmI5OGRjMzU2MGRmYWE2YTY4",apiKey:"db063fdf35b4173adcf1bd5f34c6ec80",onWillStatusChange:function(e,a){},onTextChange:function(e){be.value=e}}),ke=n(0),we=n(null),_e=n(!1),Ce=n(!0);function ze(){var e=navigator.userAgent||navigator.vendor||window.opera;return!/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)}Ce.value=ze(),window.addEventListener("resize",(()=>{Ce.value=ze()}));const Te=e=>{clearTimeout(we.value),_e.value&&(ke.value-e.changedTouches[0].clientY>20?_e.value=!1:(_e.value=!1,me()),xe.stop(),ge.value=!1,setTimeout((()=>{document.documentElement.style="",document.body.style="",O.style=""}),500))},Ie=e=>{ke.value-e.touches[0].clientY>20&&clearTimeout(we.value)},Me=()=>{Ye.value=!Ye.value,be.value=""},je=e=>{ge.value||(ke.value=e.touches[0].clientY,document.documentElement.style="\n\n-moz-user-select: none;\n/*火狐*/\n-webkit-user-select: none;\n/*webkit浏览器*/\n-ms-user-select: none;\n/*IE10*/\n-khtml-user-select: none;\n/*早期浏览器*/\nuser-select: none;\n",document.body.style="\n\n-moz-user-select: none;\n/*火狐*/\n-webkit-user-select: none;\n/*webkit浏览器*/\n-ms-user-select: none;\n/*IE10*/\n-khtml-user-select: none;\n/*早期浏览器*/\nuser-select: none;\n",O.style="\n\n-moz-user-select: none;\n/*火狐*/\n-webkit-user-select: none;\n/*webkit浏览器*/\n-ms-user-select: none;\n/*IE10*/\n-khtml-user-select: none;\n/*早期浏览器*/\nuser-select: none;\n",we.value=setTimeout((()=>{_e.value=!0,Ee()}),1e3))},Ye=n(!0),Ee=()=>{ge.value||(ge.value=!0,xe.start())};return(e,a)=>{const l=Y,n=E,t=c("router-link"),o=S,i=c("paperclip"),T=V,I=A,M=L,j=r("copy"),O=R;return u(),d(x,null,[v("div",D,[m(l,{placeholder:"请输入内容",disabled:!0,clearable:"",class:"w-388 mr-15",modelValue:U.value,"onUpdate:modelValue":a[0]||(a[0]=e=>U.value=e)},null,8,["modelValue"]),f((u(),p(n,{plain:"",type:"primary"},{default:y((()=>[h("分享")])),_:1})),[[j,U.value]]),f((u(),p(n,{type:"primary",size:"large",plain:""},{default:y((()=>[h("集成")])),_:1})),[[j,ve]])]),v("main",F,[v("div",G,[v("div",{class:"chat-header flex y-center",style:b({background:B.iconColor})},g(B.name),5),m(o,{"max-height":"100%",class:"chat-main",ref_key:"chatContainer",ref:pe,always:""},{default:y((()=>[N.value.length?(u(!0),d(x,{key:0},k(N.value,((e,a)=>{var l;return u(),d("div",{class:w(["flex chat-main-list",e.role?"x-end":"flex-col y-start"]),key:a},[v("div",{class:"chat-main-item p-15",style:b({background:e.role?"#edf4ff":"#f2f3f5"})},[v("div",{class:"chat-main-item-msg",innerHTML:e.content,style:{}},null,8,W),(null==(l=null==e?void 0:e.source)?void 0:l.length)?(u(),d("div",Q,[m(o,{"max-height":"150px",always:""},{default:y((()=>[(u(!0),d(x,null,k(e.source,((e,a)=>(u(),p(t,{to:`/detail/${e.doc_id}`,style:{"text-decoration-line":"underline",color:"rgba(96, 98, 102, 1)"},target:"_blank",class:"mt-5 flex y-center finger",key:e.doc_id},{default:y((()=>[h(g(a+1)+"."+g(e.doc_title),1)])),_:2},1032,["to"])))),128))])),_:2},1024)])):_("",!0)],4)],2)})),128)):_("",!0)])),_:1},512),v("div",X,[v("div",Z,[Ce.value?_("",!0):(u(),d("div",ee,[Ye.value?(u(),d("img",{key:0,class:"w-22 h-22",src:q,alt:"",onClick:Me})):(u(),d("div",{key:1,onClick:a[1]||(a[1]=e=>Ye.value=!Ye.value)},"键盘"))])),Ye.value?(u(),p(l,{key:1,class:"infoInput mr-15",type:"textarea",placeholder:"请输入内容",onKeydown:C(z(me,["prevent"]),["enter"]),resize:"none",disabled:P.value,autosize:{minRows:1,maxRows:4},modelValue:be.value,"onUpdate:modelValue":a[2]||(a[2]=e=>be.value=e)},null,8,["onKeydown","disabled","modelValue"])):(u(),d("div",{key:2,class:"voiceButton mr-15",onTouchmove:Ie,onTouchend:Te,onTouchstart:je}," 按住说话 ",32)),v("div",ae,[m(n,{type:"primary",style:b({background:B.buttonColor,borderColor:B.buttonColor})},{default:y((()=>[m(T,{size:"18",class:""},{default:y((()=>[m(i)])),_:1})])),_:1},8,["style"]),m(n,{type:"primary",class:"w-80",style:b({background:B.buttonColor,borderColor:B.buttonColor}),loading:P.value,onClick:me},{default:y((()=>[h("发送")])),_:1},8,["style","loading"])])])]),_e.value?(u(),d("div",le,[v("div",ne,[te,v("div",se,[v("p",oe,g(be.value||"我在听，请说话"),1),ie])])])):_("",!0)]),v("div",ce,[v("div",re,[v("div",ue,[de,m(n,{class:"w-150",type:"primary",onClick:a[3]||(a[3]=a=>e.$router.push("/personal")),size:"large",plain:""},{default:y((()=>[m(T,{class:"mr-8"},{default:y((()=>[m(i)])),_:1}),h(" 去知识库关联 ")])),_:1})]),f((u(),p(M,{onHandleClick:H,tableMaxHeight:"100%","table-mode":J,"record-data":B.list},{operation:y((({row:e,index:a})=>[m(I,{underline:!1,type:"primary",onClick:z((a=>(async e=>{await s.removeAssistantFile({fileId:e.id,assistantId:K.params.id}),fe()})(e)),["stop"])},{default:y((()=>[h(" 移除 ")])),_:2},1032,["onClick"])])),_:1},8,["record-data"])),[[O,B.loading]])])])])],64)}}},[["__scopeId","data-v-e5629de6"]]),me={class:"flex flex-col full-height"},fe={class:"mb-20"},pe={__name:"index",setup(e){const a=n(!1),s=n(null),i=n(null),c=t((()=>a.value?P:ve)),r=l();function f(){i.value=s.value.chatInfo,a.value=!a.value}return o((()=>r.params.id),(e=>{a.value=!1})),(e,l)=>{const n=E;return u(),d("div",me,[v("header",fe,[m(n,{onClick:f,class:"h-40 w-125",type:"primary"},{default:y((()=>[h(g(a.value?"返回":"编辑"),1)])),_:1})]),(u(),p(H(c.value),{ref_key:"viewComponent",ref:s,onBack:l[0]||(l[0]=e=>a.value=!1),params:i.value},null,40,["params"]))])}}};export{pe as default};
