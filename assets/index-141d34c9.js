import{aS as e,_ as a,b as n,r as t,a as l,o as s,c as o,d as c,e as i,f as r,a5 as u,x as d,z as v,g as m,h as f,j as y,i as b,k as h,y as p,aV as g,E as k,G as w,s as x,p as C,m as _,F as T,v as z,A as M,B as E,ag as I,D as S,I as Y,K as j}from"./index-b79ac086.js";import{_ as L,a as O,b as A}from"./568-ca54000b.js";const B=a=>e("sharebot/assistantdetail",a),R=e=>(M("data-v-be04fc15"),e=e(),E(),e),V={class:"chat flex flex-col"},H=R((()=>r("span",{style:{"margin-top":"-2px"},class:"ml-15"},"|",-1))),K=["innerHTML"],P={key:0,class:"chat-main-item-source mt-10 pt-10"},q={class:"chat-footer"},G={class:"finger flex x-between y-center"},J={key:0,class:"flex no-shrink mr-15"},N={class:"flex-center"},D={key:0,class:"chat-dialog flex flex-col"},F={class:"content"},U=g('<div class="top flex-center" data-v-be04fc15><div class="size-12 flex-col y-center" data-v-be04fc15><img class="w-55 h-55 mb-5" src="'+O+'" alt="" data-v-be04fc15></div><div class="gif ml-20" data-v-be04fc15><img src="'+A+'" alt="" data-v-be04fc15></div></div>',1),W={class:"main flex-col x-between"},$={class:"size-15 mb-15 txt-bold"},Q=R((()=>r("p",{class:"size-12"},[d("松开发送"),r("span",{class:"ml-20"},"上滑取消")],-1))),X=a({__name:"index",setup(e){let a=document.querySelector("#app");const g=n();!async function(){const{data:e}=await B({id:g.params.id});A.name=e.name,A.buttonColor=e.buttonColor,A.iconColor=e.iconColor||"#3da0ff",A.showLink=e.showLink||0,A.list=e.relateFileObjectList,R.value[0].content=e.welcome||"欢迎咨询，请输入您想查找的问题！"}();const M=()=>{window.open("/")},E=t(null);function O(){I((()=>{const e=document.querySelector(".chat-main .el-scrollbar__wrap");e.scrollTop=e.scrollHeight}))}const A=l({loading:!1,name:"",buttonColor:"",iconColor:"#3da0ff",showLink:"",list:[],source:[]}),R=t([{content:"欢迎咨询，请输入您想查找的问题！",role:0}]),X=t(!1);const Z=async()=>{if(!ee.value)return k.warning("请输入内容！");if(X.value)return k.warning("等待上一条消息完成！");X.value=!0,R.value.push({content:ee.value,role:1}),R.value.push({content:"加载中...",role:0});let e=ee.value;ee.value="",async function(e,a){const n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Authorization:S()||"Basic dnNvYzp2c29jMjAyMg"},body:a});if(!n.ok)return X.value=!1,void(R.value[R.value.length-1].content="发送失败，请重试！");const t=n.body.getReader();for(;;){const{value:e,done:a}=await t.read();if(a){X.value=!1;break}const n=new TextDecoder("utf-8").decode(e);let l=/^event:(.+)\nid:(.+)\ndata:(.+)/gm.exec(n);if(!l)return X.value=!1;const[,s,o,c]=l;if("add"===s){const e=JSON.parse(c).content;R.value[R.value.length-1].content=e||"非常抱歉，但我仍然不清楚你希望从我的回答中获得什么信息。如果你有任何问题或者需要具体的帮助，请详细描述你的问题，我将尽力提供所需的帮助和解答。",O()}else"error"===s&&(X.value=!1,R.value[R.value.length-1].content="发送失败，请重试！")}}(`${w}/sharebot/smartSse`,JSON.stringify({assistantId:g.params.id,question:e})),O()};s((()=>{}));const ee=t(""),ae=t(!1),ne=new Voice({appId:"2dd9b1e7",apiSecret:"YzJhMmY0MmI5OGRjMzU2MGRmYWE2YTY4",apiKey:"db063fdf35b4173adcf1bd5f34c6ec80",onWillStatusChange:function(e,a){},onTextChange:function(e){ee.value=e}}),te=t(0),le=t(null),se=t(!1),oe=t(!0);function ce(){var e=navigator.userAgent||navigator.vendor||window.opera;return!/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)}oe.value=ce(),window.addEventListener("resize",(()=>{oe.value=ce()}));const ie=e=>{clearTimeout(le.value),se.value&&(te.value-e.changedTouches[0].clientY>20?se.value=!1:(se.value=!1,Z()),ne.stop(),ae.value=!1,setTimeout((()=>{document.documentElement.style="",document.body.style="",a.style=""}),500))},re=e=>{te.value-e.touches[0].clientY>20&&clearTimeout(le.value)},ue=()=>{ve.value=!ve.value,ee.value=""},de=e=>{ae.value||(te.value=e.touches[0].clientY,document.documentElement.style="\n\n-moz-user-select: none;\n/*火狐*/\n-webkit-user-select: none;\n/*webkit浏览器*/\n-ms-user-select: none;\n/*IE10*/\n-khtml-user-select: none;\n/*早期浏览器*/\nuser-select: none;\n",document.body.style="\n\n-moz-user-select: none;\n/*火狐*/\n-webkit-user-select: none;\n/*webkit浏览器*/\n-ms-user-select: none;\n/*IE10*/\n-khtml-user-select: none;\n/*早期浏览器*/\nuser-select: none;\n",a.style="\n\n-moz-user-select: none;\n/*火狐*/\n-webkit-user-select: none;\n/*webkit浏览器*/\n-ms-user-select: none;\n/*IE10*/\n-khtml-user-select: none;\n/*早期浏览器*/\nuser-select: none;\n",le.value=setTimeout((()=>{se.value=!0,me()}),1e3))},ve=t(!0),me=()=>{ae.value||(ae.value=!0,ne.start())};return(e,a)=>{const n=o("router-link"),t=x,l=C,s=o("paperclip"),g=Y,k=_;return c(),i("main",null,[r("div",V,[r("div",{class:"chat-header flex y-center",style:u({background:A.iconColor})},[r("p",{onClick:M,class:"finger mr-15 flex y-center"},[d(" HOME"),H]),d(" "+v(A.name),1)],4),m(t,{"max-height":"100%",class:"chat-main",ref_key:"chatContainer",ref:E,always:""},{default:f((()=>[R.value.length?(c(!0),i(T,{key:0},z(R.value,((e,a)=>{var l;return c(),i("div",{class:j(["flex chat-main-list",e.role?"x-end":"flex-col y-start"]),key:a},[r("div",{class:"chat-main-item p-15",style:u({background:e.role?"#edf4ff":"#f2f3f5"})},[r("div",{class:"chat-main-item-msg",innerHTML:e.content,style:{}},null,8,K),(null==(l=null==e?void 0:e.source)?void 0:l.length)?(c(),i("div",P,[m(t,{"max-height":"150px",always:""},{default:f((()=>[(c(!0),i(T,null,z(e.source,((e,a)=>(c(),b(n,{to:`/detail/${e.doc_id}`,style:{"text-decoration-line":"underline",color:"rgba(96, 98, 102, 1)"},target:"_blank",class:"mt-5 flex y-center finger",key:e.doc_id},{default:f((()=>[d(v(a+1)+"."+v(e.doc_title),1)])),_:2},1032,["to"])))),128))])),_:2},1024)])):y("",!0)],4)],2)})),128)):y("",!0)])),_:1},512),r("div",q,[r("div",G,[oe.value?y("",!0):(c(),i("div",J,[ve.value?(c(),i("img",{key:0,class:"w-22 h-22",src:L,alt:"",onClick:ue})):(c(),i("div",{key:1,onClick:a[0]||(a[0]=e=>ve.value=!ve.value)},"键盘"))])),ve.value?(c(),b(l,{key:1,class:"infoInput mr-15",type:"textarea",placeholder:"请输入内容",onKeydown:h(p(Z,["prevent"]),["enter"]),resize:"none",disabled:X.value,autosize:{minRows:1,maxRows:4},modelValue:ee.value,"onUpdate:modelValue":a[1]||(a[1]=e=>ee.value=e)},null,8,["onKeydown","disabled","modelValue"])):(c(),i("div",{key:2,class:"voiceButton mr-15",onTouchmove:re,onTouchend:ie,onTouchstart:de}," 按住说话 ",32)),r("div",N,[m(k,{type:"primary",style:u({background:A.buttonColor,borderColor:A.buttonColor})},{default:f((()=>[m(g,{size:"18",class:""},{default:f((()=>[m(s)])),_:1})])),_:1},8,["style"]),m(k,{type:"primary",class:"w-80",style:u({background:A.buttonColor,borderColor:A.buttonColor}),loading:X.value,onClick:Z},{default:f((()=>[d("发送")])),_:1},8,["style","loading"])])])]),se.value?(c(),i("div",D,[r("div",F,[U,r("div",W,[r("p",$,v(ee.value||"我在听，请说话"),1),Q])])])):y("",!0)])])}}},[["__scopeId","data-v-be04fc15"]]);export{X as default};
