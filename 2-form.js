import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const o=document.querySelector(".feedback-form");let a={email:"",message:""};const{email:r,message:l}=o.elements,n=()=>{try{if(localStorage.length===0)return;const e=JSON.parse(localStorage.getItem("feedback-form-state"));a=e;for(const t in e)o.elements[t].value=e[t]}catch(e){console.log(e)}};n();const c=e=>{const{target:t}=e,s=t.value,m=t.name;a[m]=s,localStorage.setItem("feedback-form-state",JSON.stringify(a))},f=e=>{e.preventDefault();const{currentTarget:t}=e;if(console.log({email:r.value,message:l.value}),r.value===""||l.value==="")return alert("Fill please all fields");t.reset(),localStorage.removeItem("feedback-form-state"),a={}};o.addEventListener("input",c);o.addEventListener("submit",f);
//# sourceMappingURL=2-form.js.map