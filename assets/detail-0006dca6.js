import{_ as a,r as e,b as s,d as l,e as t,g as i,l as n,h as r,aT as d,s as c,bg as o}from"./index-b79ac086.js";import{v as p}from"./el-loading-22d2d61d.js";const u={class:"flex flex-col full-height"},f={class:"detail"},v=["innerHTML"],h={key:1,class:"full-width h-600 y-center size-20 flex-center"},m=a({__name:"detail",setup(a){const m=e(!1),w=s(),x=e("详情");return(async a=>{m.value=!0;const e=new FormData;e.append("file",""),e.append("fileId",w.params.id);const{data:s}=await d.viewFile(e).catch((a=>{m.value=!1}));x.value=s,m.value=!1})(),(a,e)=>{const s=c,d=p;return l(),t("div",u,[i(o),n((l(),t("div",f,[i(s,{ref:"scrollbar",class:"p-30","max-height":"880px",always:""},{default:r((()=>[x.value?(l(),t("div",{key:0,style:{"white-space":"pre-wrap"},innerHTML:x.value},null,8,v)):(l(),t("div",h,"暂无数据"))])),_:1},512)])),[[d,m.value]])])}}},[["__scopeId","data-v-a1ffb6b8"]]);export{m as default};
