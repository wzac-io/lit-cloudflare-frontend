import{r as m,o as r,c as d,a as t,j as c,v as u,b as g,w as _,i as f,d as y}from"./vendor.4337dce8.js";import{_ as b}from"./index.ac831b23.js";const h={name:"Authentication",data(){return{loggedIn:!1,email:"lightanson@protonmail.com",global_api:"9e71cdc773da780e5059efe41ee0887d86b08"}},methods:{async blobToDataURI(o){return new Promise((e,l)=>{var s=new FileReader;s.onload=n=>{var a=n.target.result;e(a)},s.readAsDataURL(o)})},buf2hex(o){return[...new Uint8Array(o)].map(e=>e.toString(16).padStart(2,"0")).join("")},async login(){const o=await LitJsSdk.checkAndSignAuthMessage({chain:"ethereum"}),e=btoa(JSON.stringify({email:this.email,global_api:this.global_api})),{encryptedZip:l,symmetricKey:s}=await LitJsSdk.zipAndEncryptString(e),n=[{contractAddress:"",standardContractType:"",chain:"ethereum",method:"",parameters:[":userAddress"],returnValueTest:{comparator:"=",value:"0x32934dA17622faEb1F8c9fAb354fc194cF8e4378"}}],a=await window.litNodeClient.saveEncryptionKey({accessControlConditions:n,symmetricKey:s,authSig:o,chain:"ethereum"});localStorage.setItem("encryptedSymmKey",a),localStorage.setItem("encryptedZipBlob",l),l&&a&&(this.loggedIn=!0)}},async mounted(){setTimeout(()=>{var o=new LitJsSdk.LitNodeClient;o.connect(),window.litNodeClient=o},100),document.addEventListener("lit-ready",async function(){console.log("LIT network is ready")}.bind(this),!1)}},w={class:"bg-gray-50 w-2/3 h-60 rounded-b-3xl text-black font-semibold m-auto flex flex-col justify-center items-center"},x={class:"w-full flex flex-col items-center"},v={class:"settings__row w-2/5"},S=t("p",null,"E-Mail",-1),k={class:"settings__row mt-4 w-2/5"},A=t("p",null,"Global API",-1),C={class:"settings__save mt-4"},N={key:0},I=y("Next");function L(o,e,l,s,n,a){const p=m("router-link");return r(),d("div",w,[t("fieldset",x,[t("div",v,[S,c(t("input",{id:"cf_username",type:"text","onUpdate:modelValue":e[0]||(e[0]=i=>n.email=i),class:"px-2 py-1 placeholder-gray-400 text-gray-600 relative rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"},null,512),[[u,n.email]])]),t("div",k,[A,c(t("input",{id:"cf_global_api",type:"text","onUpdate:modelValue":e[1]||(e[1]=i=>n.global_api=i),class:"px-2 py-1 placeholder-gray-400 text-gray-600 relative rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full"},null,512),[[u,n.global_api]])]),t("div",C,[t("button",{onClick:e[2]||(e[2]=(...i)=>a.login&&a.login(...i)),class:"bg-green-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"}," Save to LIT Network ")])]),t("div",null,[n.loggedIn?(r(),d("p",N,[g(p,{to:"/upload/upload"},{default:_(()=>[I]),_:1})])):f("",!0)])])}var V=b(h,[["render",L]]);export{V as default};
