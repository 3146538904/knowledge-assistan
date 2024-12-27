import{_ as e,u as a,r as l,a as t,o as s,b as n,w as i,c as r,d as o,e as c,f as d,g as u,h as v,F as p,i as f,j as m,k as h,l as y,E as g,m as w,n as k,p as x,q as b,s as _,t as C,v as z,x as I,y as T,z as F,A as V,B as L,C as M,D as H,G as A,H as S,I as j,J as D,K as U,L as P}from"./index-63ac60c9.js";import{v as B}from"./el-loading-2f9cb83f.js";import{a as O,E as N,b as E,F as J,_ as K,c as R,d as q}from"./api-481ed534.js";const G=e=>(V("data-v-3647460d"),e=e(),L(),e),Y={class:"knowledge flex flex-col"},$={class:"top flex justify-end y-center mb-35"},Q={class:"left"},W={class:"right flex"},X=G((()=>d("div",{class:"finger flex y-center"},[d("img",{class:"w-14 mr-10",src:K,alt:"",srcset:""}),I(" 新建文档 ")],-1))),Z=G((()=>d("img",{class:"w-14 mr-10",src:M,alt:"",srcset:""},null,-1))),ee=["onClick"],ae=["onClick"],le=["onClick"],te={key:1,class:"detail p-50"},se=["innerHTML"],ne={key:2,class:"searchList flex"},ie={class:"left"},re={class:"w-500 ellipsis txt-bold size-20 mb-10"},oe=["onClick"],ce=["innerHTML"],de={key:0,class:"mt-10"},ue=["innerHTML"],ve={key:1,class:"full-width h-500 flex-center size-20"},pe={key:0,class:"right"},fe=G((()=>d("div",{class:"txt-bold size-20 flex y-center"},[d("img",{class:"w-23 mr-10",src:R,alt:"",srcset:""}),I(" AI搜索 ")],-1))),me={class:"content p-y-20"},he={class:"mb-20"},ye=G((()=>d("h5",{class:"txt-bold p-x-25 size-16 mb-10"},"标题",-1))),ge=["innerHTML"],we={key:1,class:"full-width"},ke=G((()=>d("h5",{class:"txt-bold p-x-25 size-16 m-y-10"},"来源",-1))),xe=["onClick"],be={key:1,class:"full-width"},_e={class:"dialog-footer"},Ce=e({__name:"personal",setup(e){const V=a(),L=l([{name:"个人知识库",path:0}]),M=l("table"),K=t({file:"",folderId:0});t({pageNo:1,pageSize:10});const R=l(0),G=l("详情");async function Ce(e){if(e.contentType)return ze(e.id);L.value.push({name:e.name,path:e.id}),K.folderId=e.id,Fe()}const ze=async e=>{L.value.push({name:"详情",path:e}),M.value="detail",null==Ue||Ue.close(),$e.value=!0;const a=new FormData;a.append("file",""),a.append("fileId",e),a.append("searchContent",He.value);const{data:l}=await O.viewFile(a).catch((e=>{$e.value=!1}));G.value=l,$e.value=!1},Ie=t({loading:!1,list:[]}),Te=[{prop:"name",label:"名称",type:"icon",showOverflowTooltip:!0,width:"500"},{prop:"createUser",label:"所有者"},{prop:"createTime",label:"创建日期"},{label:"操作",type:"operation",align:"center"}],Fe=async()=>{Ie.loading=!0;const e=new FormData;e.append("file",K.file),e.append("folderId",K.folderId);const a=await O.getFiles(e).catch((e=>{Ie.loading=!1}));Ie.loading=!1,Ie.list=a.data.folders.concat(a.data.files)};function Ve(e){Ie.size=e,Fe()}function Le(e){Ie.start=e,Fe()}Fe();const Me=l(""),He=l(""),Ae=l(""),Se=l([]),je=l(""),De=l(!1);let Ue=null;s((()=>{null==Ue||Ue.close(),Ue=null,V.commit("setSearchVal","")}));const Pe=l(""),Be=async(e="search",a=!0)=>{if(!He.value)return g.warning("请输入搜索的内容！");if(-1===L.value.findIndex((e=>"搜索列表"===e.name))&&L.value.push({name:"搜索列表",path:"search"}),M.value=e,!a)return;$e.value=!0,Pe.value=e;const l=new FormData;Me.value=He.value,l.append("file",""),l.append("searchContent",He.value),l.append("folderId",K.folderId),"search"!==e&&(Ae.value="",Ne(l));const{data:t}=await O.searchFiles(l).catch((e=>{$e.value=!1}));R.value=t.total,Se.value=t.searchResults,$e.value=!1};n();const Oe=l([]);const Ne=async e=>{De.value=!0,async function(e,a){const l=await fetch(e,{method:"POST",headers:{Authorization:H()||"Basic dnNvYzp2c29jMjAyMg"},body:a});if(!l.ok)return sendMsgLoad.value=!1,void(chatList.value[chatList.value.length-1].content="发送失败，请重试！");const t=l.body.getReader();for(;;){const{value:e,done:a}=await t.read();if(a){De.value=!1;break}const l=new TextDecoder("utf-8").decode(e);let s=/^event:(.+)\nid:(.+)\ndata:(.+)/gm.exec(l);if(!s)return De.value=!1;const[,n,i,r]=s;if("add"===n){const e=JSON.parse(r).content;Ae.value=e}else"error"===n&&(De.value=!1)}}(`${A}/file/person/smartFileSse`,e)},Ee=l(!1),Je=l("file"),Ke=l(0),Re=(e,a,l)=>{if(!a)return Ee.value=!0,Je.value=l,void("file"!==l&&(Ke.value=e.id,Ge()));const t=new FormData;t.append("name",e.name),t.append("fileId",e.id),S.confirm("您确定要删除改文件吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{await O.removeFile(t),g({type:"success",message:"删除成功！"}),Fe()}))},qe=l([]),Ge=async()=>{const e=await O.getAssistants({});qe.value=e.data},Ye=()=>{je.value="",Ee.value=!1},$e=l(!1),Qe=async()=>{if("file"===Je.value){if(!je.value)return g.warning("请输入文件夹名字");$e.value=!0,await(async()=>{const e=new FormData;e.append("name",je.value),e.append("parentId",K.folderId),await O.addFolder(e).catch((e=>{$e.value=!1,Ye()}))})(),Fe()}else{if(!je.value)return g.warning("请选择知识助理");$e.value=!0,await(async()=>{let e={assistantId:je.value,fileId:Ke.value};await O.relateToAssistant(e).catch((e=>{$e.value=!1,Ye()}))})()}$e.value=!1,Ye()};return i((()=>V.state.searchOperation),((e,a)=>{He.value=V.state.searchVal,Be("search")}),{}),(e,a)=>{const l=q,t=N,s=w,n=r("plus"),i=j,g=k,V=r("search"),H=x,A=r("MoreFilled"),S=b,O=_,R=C,Ne=P,Ke=D,Ge=E,We=B;return o(),c("div",Y,[d("div",$,[d("div",Q,[u(t,{separator:">"},{default:v((()=>[(o(!0),c(p,null,z(L.value,((e,a)=>(o(),f(l,{key:e.path,onClick:l=>((e,a)=>{a!==L.value.length-1&&(L.value=L.value.slice(0,a+1),null==Ue||Ue.close(),"搜索列表"!==e.name?(M.value="table",He.value="",K.folderId=e.path,Fe()):Be(Pe.value,!1))})(e,a)},{default:v((()=>[d("span",{class:U([a!==L.value.length-1?"finger":"txt-bold"])},F(e.name),3)])),_:2},1032,["onClick"])))),128))])),_:1})]),d("div",W,["detail"===M.value?(o(),c(p,{key:0},[u(s,{type:"primary",class:"w-80",size:"large"},{default:v((()=>[I("编辑")])),_:1}),u(s,{type:"primary",class:"w-80",size:"large",plain:""},{default:v((()=>[I("保存")])),_:1})],64)):(o(),c(p,{key:1},["table"===M.value?(o(),f(g,{key:0,placement:"bottom-start","show-arrow":!1,trigger:"hover"},{reference:v((()=>[u(s,{class:"w-150",size:"large",plain:""},{default:v((()=>[u(i,{class:"mr-8"},{default:v((()=>[u(n)])),_:1}),I(" 新建文档 ")])),_:1})])),default:v((()=>[u(J,{uploadParams:{folderId:K.folderId},onFileUploadFinish:Fe,fileSize:!1,"file-type":!1,uploadPath:"/file/person/upload",isShowTip:!1},{button:v((()=>[X])),_:1},8,["uploadParams"]),d("div",{onClick:a[0]||(a[0]=e=>Re("",0,"file")),class:"finger flex y-center mt-10"},[Z,I(" 新建文件夹 ")])])),_:1})):m("",!0),u(H,{placeholder:"请输入内容",onKeyup:a[1]||(a[1]=h((e=>Be("search")),["enter"])),clearable:"",size:"large",class:"m-x-10 w-180",modelValue:He.value,"onUpdate:modelValue":a[2]||(a[2]=e=>He.value=e)},{prefix:v((()=>[u(i,{class:"el-input__icon"},{default:v((()=>[u(V)])),_:1})])),_:1},8,["modelValue"]),u(s,{type:"primary",size:"large",onClick:a[3]||(a[3]=e=>Be("search"))},{default:v((()=>[I("搜索")])),_:1}),u(s,{type:"primary",loading:De.value,size:"large",onClick:a[4]||(a[4]=e=>Be("searchAi")),plain:""},{default:v((()=>[I("AI搜索")])),_:1},8,["loading"])],64))])]),"table"===M.value?y((o(),f(S,{key:0,tableMaxHeight:"800px",pageShow:!1,onHandleClick:Ce,"table-mode":Te,"record-data":Ie.list,"operation-width":"135px","record-total":Ie.total,"record-size":Ie.size,"record-start":Ie.start,onPageChange:Le,onSizeChange:Ve},{operation:v((({row:e,index:l})=>[u(g,{placement:"bottom-start",class:"w-100","show-arrow":!1,trigger:"hover"},{reference:v((()=>[u(i,{class:"finger",onClick:a[5]||(a[5]=T((()=>{}),["stop"]))},{default:v((()=>[u(A)])),_:1})])),default:v((()=>[e.contentType?(o(),c("div",{key:0,onClick:a=>Re(e,0,l),class:"finger flex y-center mb-10"}," 添加到知识助理 ",8,ee)):m("",!0),d("div",{onClick:a=>Re(e,0,"file"),class:"finger flex y-center mb-10"}," 重命名 ",8,ae),d("div",{onClick:a=>Re(e,1),class:"finger flex y-center"}," 删除 ",8,le)])),_:2},1024)])),_:1},8,["record-data","record-total","record-size","record-start"])),[[We,Ie.loading]]):"detail"===M.value?y((o(),c("div",te,[u(O,{ref:"scrollbar",height:"700px",always:""},{default:v((()=>[d("p",{style:{"white-space":"pre-wrap"},innerHTML:G.value},null,8,se)])),_:1},512)])),[[We,$e.value]]):(o(),c("div",ne,[y((o(),c("div",ie,[u(R,{class:"item",effect:"dark",content:Me.value,placement:"bottom-end"},{default:v((()=>[d("div",re," 所有与"+F(Me.value)+"相关的结果 ",1)])),_:1},8,["content"]),u(O,{class:"list",ref:"scrollbar",height:"700px",always:""},{default:v((()=>[Se.value.length?(o(!0),c(p,{key:0},z(Se.value,(e=>{var a;return o(),c("div",{class:"row finger",onClick:a=>ze(e._id),key:e._id},[d("div",{class:"tit",innerHTML:e.title},null,8,ce),(null==(a=e.content)?void 0:a.length)?(o(),c("div",de,[(o(!0),c(p,null,z(e.content.slice(0,2),(e=>(o(),c("div",{key:e},[d("p",{innerHTML:e},null,8,ue)])))),128))])):m("",!0)],8,oe)})),128)):(o(),c("div",ve," 暂无数据 "))])),_:1},512)])),[[We,$e.value]]),"searchAi"===M.value?(o(),c("div",pe,[fe,d("div",me,[d("div",he,[ye,u(O,{class:"p-x-25","max-height":"450px",always:""},{default:v((()=>[Ae.value?(o(),c("div",{key:0,style:{"white-space":"pre-wrap"},innerHTML:Ae.value},null,8,ge)):(o(),c("div",we,"正在思考中..."))])),_:1})]),d("div",null,[ke,u(O,{class:"p-x-25","max-height":"150px",always:""},{default:v((()=>{var e;return[(null==(e=Oe.value)?void 0:e.length)?(o(!0),c(p,{key:0},z(Oe.value,((e,a)=>(o(),c("div",{onClick:a=>ze(e.doc_id),style:{"text-decoration-line":"underline",color:"rgba(96, 98, 102, 1)"},class:"mb-10 flex y-center finger",key:e.doc_id},F(a+1)+"."+F(e.doc_title),9,xe)))),128)):(o(),c("div",be,"暂无数据"))]})),_:1})])])])):m("",!0)])),u(Ge,{modelValue:Ee.value,"onUpdate:modelValue":a[8]||(a[8]=e=>Ee.value=e),title:""+("file"===Je.value?"名称":"加入知识助理"),width:"400px"},{footer:v((()=>[d("span",_e,[u(s,{onClick:Ye},{default:v((()=>[I("取消")])),_:1}),u(s,{loading:$e.value,type:"primary",onClick:Qe},{default:v((()=>[I(" 提交 ")])),_:1},8,["loading"])])])),default:v((()=>["file"===Je.value?(o(),f(H,{key:0,size:"large",placeholder:"请输入文件夹名字",modelValue:je.value,"onUpdate:modelValue":a[6]||(a[6]=e=>je.value=e)},null,8,["modelValue"])):(o(),f(Ke,{key:1,size:"large",placeholder:"请选择知识助理",modelValue:je.value,"onUpdate:modelValue":a[7]||(a[7]=e=>je.value=e)},{default:v((()=>[(o(!0),c(p,null,z(qe.value,(e=>(o(),f(Ne,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]))])),_:1},8,["modelValue","title"])])}}},[["__scopeId","data-v-3647460d"]]);export{Ce as default};
