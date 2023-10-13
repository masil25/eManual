"use strict";var me=Object.defineProperty;var _e=(e,t,n)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var x=(e,t,n)=>(_e(e,typeof t!="symbol"?t+"":t,n),n);const N=require("obsidian");function F(){}function pe(e,t){for(const n in t)e[n]=t[n];return e}function re(e){return e()}function $(){return Object.create(null)}function A(e){e.forEach(re)}function we(e){return typeof e=="function"}function se(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ve(e){return Object.keys(e).length===0}function y(e,t){e.appendChild(t)}function O(e,t,n){e.insertBefore(t,n||null)}function L(e){e.parentNode.removeChild(e)}function C(e){return document.createElement(e)}function U(e){return document.createTextNode(e)}function V(){return U(" ")}function ee(){return U("")}function M(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function G(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Te(e){return Array.from(e.childNodes)}function R(e,t){e.value=t==null?"":t}function j(e,t,n,i){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function te(e,t,n){e.classList[n?"add":"remove"](t)}let Q;function P(e){Q=e}const I=[],Y=[],H=[],z=[],ye=Promise.resolve();let J=!1;function Ee(){J||(J=!0,ye.then(ae))}function K(e){H.push(e)}function ke(e){z.push(e)}const W=new Set;let q=0;function ae(){const e=Q;do{for(;q<I.length;){const t=I[q];q++,P(t),Ce(t.$$)}for(P(null),I.length=0,q=0;Y.length;)Y.pop()();for(let t=0;t<H.length;t+=1){const n=H[t];W.has(n)||(W.add(n),n())}H.length=0}while(I.length);for(;z.length;)z.pop()();J=!1,W.clear(),P(e)}function Ce(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(K)}}const B=new Set;let Ge;function X(e,t){e&&e.i&&(B.delete(e),e.i(t))}function Ne(e,t,n,i){if(e&&e.o){if(B.has(e))return;B.add(e),Ge.c.push(()=>{B.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ue(e,t){e.d(1),t.delete(e.key)}function ce(e,t,n,i,o,r,u,c,l,s,f,b){let d=e.length,p=r.length,m=d;const E={};for(;m--;)E[e[m].key]=m;const w=[],_=new Map,v=new Map;for(m=p;m--;){const g=b(o,r,m),a=n(g);let h=u.get(a);h?i&&h.p(g,t):(h=s(a,g),h.c()),_.set(a,w[m]=h),a in E&&v.set(a,Math.abs(m-E[a]))}const T=new Set,S=new Set;function D(g){X(g,1),g.m(c,f),u.set(g.key,g),f=g.first,p--}for(;d&&p;){const g=w[p-1],a=e[d-1],h=g.key,k=a.key;g===a?(f=g.first,d--,p--):_.has(k)?!u.has(h)||T.has(h)?D(g):S.has(k)?d--:v.get(h)>v.get(k)?(S.add(h),D(g)):(T.add(k),d--):(l(a,u),d--)}for(;d--;){const g=e[d];_.has(g.key)||l(g,u)}for(;p;)D(w[p-1]);return w}function Se(e,t){const n={},i={},o={$$scope:1};let r=e.length;for(;r--;){const u=e[r],c=t[r];if(c){for(const l in u)l in c||(i[l]=1);for(const l in c)o[l]||(n[l]=c[l],o[l]=1);e[r]=c}else for(const l in u)o[l]=1}for(const u in i)u in n||(n[u]=void 0);return n}function De(e){return typeof e=="object"&&e!==null?e:{}}function Me(e,t,n){const i=e.$$.props[t];i!==void 0&&(e.$$.bound[i]=n,n(e.$$.ctx[i]))}function Ae(e){e&&e.c()}function fe(e,t,n,i){const{fragment:o,on_mount:r,on_destroy:u,after_update:c}=e.$$;o&&o.m(t,n),i||K(()=>{const l=r.map(re).filter(we);u?u.push(...l):A(l),e.$$.on_mount=[]}),c.forEach(K)}function he(e,t){const n=e.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Le(e,t){e.$$.dirty[0]===-1&&(I.push(e),Ee(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function de(e,t,n,i,o,r,u,c=[-1]){const l=Q;P(e);const s=e.$$={fragment:null,ctx:null,props:r,update:F,not_equal:o,bound:$(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:$(),dirty:c,skip_bound:!1,root:t.target||l.$$.root};u&&u(s.root);let f=!1;if(s.ctx=n?n(e,t.props||{},(b,d,...p)=>{const m=p.length?p[0]:d;return s.ctx&&o(s.ctx[b],s.ctx[b]=m)&&(!s.skip_bound&&s.bound[b]&&s.bound[b](m),f&&Le(e,b)),d}):[],s.update(),f=!0,A(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){const b=Te(t.target);s.fragment&&s.fragment.l(b),b.forEach(L)}else s.fragment&&s.fragment.c();t.intro&&X(e.$$.fragment),fe(e,t.target,t.anchor,t.customElement),ae()}P(l)}class ge{$destroy(){he(this,1),this.$destroy=F}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(t){this.$$set&&!ve(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ne(e,t,n){const i=e.slice();return i[20]=t[n],i[22]=n,i}function ie(e,t,n){const i=e.slice();return i[20]=t[n],i[24]=n,i}function le(e,t){let n,i,o;function r(){return t[12](t[22],t[24])}function u(){return t[13](t[22],t[24])}return{key:e,first:null,c(){n=C("div"),G(n,"class","table-generator-cell svelte-h3ffb8"),te(n,"active",t[0][t[22]][t[24]]),this.first=n},m(c,l){O(c,n,l),i||(o=[M(n,"mouseenter",r),M(n,"click",u)],i=!0)},p(c,l){t=c,l&9&&te(n,"active",t[0][t[22]][t[24]])},d(c){c&&L(n),i=!1,A(o)}}}function oe(e,t){let n,i=[],o=new Map,r,u={length:t[3][1]};const c=l=>l[24];for(let l=0;l<u.length;l+=1){let s=ie(t,u,l),f=c(s);o.set(f,i[l]=le(f,s))}return{key:e,first:null,c(){n=ee();for(let l=0;l<i.length;l+=1)i[l].c();r=ee(),this.first=n},m(l,s){O(l,n,s);for(let f=0;f<i.length;f+=1)i[f].m(l,s);O(l,r,s)},p(l,s){t=l,s&89&&(u={length:t[3][1]},i=ce(i,s,c,1,t,u,o,r.parentNode,ue,le,r,ie))},d(l){l&&L(n);for(let s=0;s<i.length;s+=1)i[s].d(l);l&&L(r)}}}function xe(e){let t,n=[],i=new Map,o,r,u={length:e[3][0]};const c=l=>l[22];for(let l=0;l<u.length;l+=1){let s=ne(e,u,l),f=c(s);i.set(f,n[l]=oe(f,s))}return{c(){t=C("div");for(let l=0;l<n.length;l+=1)n[l].c();G(t,"class","table-container svelte-h3ffb8"),j(t,"grid-template-rows",e[1],!1),j(t,"grid-template-columns",e[2],!1)},m(l,s){O(l,t,s);for(let f=0;f<n.length;f+=1)n[f].m(t,null);o||(r=[M(t,"mouseleave",e[14]),M(t,"blur",e[15])],o=!0)},p(l,[s]){s&89&&(u={length:l[3][0]},n=ce(n,s,c,1,l,u,i,t,ue,oe,null,ne)),s&2&&j(t,"grid-template-rows",l[1],!1),s&4&&j(t,"grid-template-columns",l[2],!1)},i:F,o:F,d(l){l&&L(t);for(let s=0;s<n.length;s+=1)n[s].d();o=!1,A(r)}}}function Ie(e,t,n){let i,o,r,{plugin:u}=t,{rowNum:c=8}=t,{colNum:l=8}=t,{hoverTableEnd:s}=t,{insertTable:f}=t,b=[c,l],d=[],p=[];function m(a,h){d=[0,0],p=[a,h],n(7,s=[a+1,h+1]),v(p)}function E(){d=p=[-1,-1],setTimeout(()=>{n(7,s=[0,0]),v(p)},1e3)}function w(a,h){h!==0&&(f([a+1,h+1]),u.hideTable())}function _([a,h],[k,Z]){return(a-d[0])*(a-k)<=0&&(h-d[1])*(h-Z)<=0}function v(a){n(0,r=r.map((h,k)=>h.map((Z,be)=>_([k,be],a))))}const T=(a,h)=>m(a,h),S=(a,h)=>w(a,h),D=()=>E(),g=()=>E();return e.$$set=a=>{"plugin"in a&&n(8,u=a.plugin),"rowNum"in a&&n(9,c=a.rowNum),"colNum"in a&&n(10,l=a.colNum),"hoverTableEnd"in a&&n(7,s=a.hoverTableEnd),"insertTable"in a&&n(11,f=a.insertTable)},n(2,i=`repeat(${b[1]}, 1fr)`),n(1,o=`repeat(${b[0]}, 1fr)`),n(0,r=Array(b[0]).fill(0).map(a=>Array(b[1]).fill(!1))),[r,o,i,b,m,E,w,s,u,c,l,f,T,S,D,g]}class Pe extends ge{constructor(t){super(),de(this,t,Ie,xe,se,{plugin:8,rowNum:9,colNum:10,hoverTableEnd:7,insertTable:11})}}const Oe=e=>{let t="",n="",i="";if(e.length===0)return t;for(let o=0;o<Number(e[1]);o++)n+="|:-----";for(let o=0;o<Number(e[1]);o++)i+="|      ";if(!e[0])return t=i+`|
`+n+`|
`,t;for(let o=0;o<Number(e[0])+1;o++)o||(t=t+i+`|
`),o===1&&(t=t+n+`|
`),o>1&&(t=t+i+`|
`);return t};function Ve(e){let t,n,i,o,r,u,c,l,s,f,b,d,p,m,E,w,_,v,T;const S=[e[4],{insertTable:e[5]},{plugin:e[0]}];function D(a){e[7](a)}let g={};for(let a=0;a<S.length;a+=1)g=pe(g,S[a]);return e[1]!==void 0&&(g.hoverTableEnd=e[1]),o=new Pe({props:g}),Y.push(()=>Me(o,"hoverTableEnd",D)),{c(){t=C("div"),n=C("div"),n.textContent="Table Generator",i=V(),Ae(o.$$.fragment),u=V(),c=C("div"),l=C("div"),s=U(`ROW:
            `),f=C("input"),b=V(),d=C("div"),p=U(`COL:
            `),m=C("input"),E=V(),w=C("button"),w.textContent="Insert",G(n,"class","H1 svelte-10axb49"),G(f,"class","row-input svelte-10axb49"),G(l,"class","input-table-generator-row svelte-10axb49"),G(m,"class","col-input svelte-10axb49"),G(d,"class","input-table-generator-col svelte-10axb49"),G(c,"class","input-table-generator svelte-10axb49"),G(w,"class","svelte-10axb49"),G(t,"class","table-generator svelte-10axb49")},m(a,h){O(a,t,h),y(t,n),y(t,i),fe(o,t,null),y(t,u),y(t,c),y(c,l),y(l,s),y(l,f),R(f,e[2]),y(c,b),y(c,d),y(d,p),y(d,m),R(m,e[3]),y(t,E),y(t,w),_=!0,v||(T=[M(f,"input",e[8]),M(m,"input",e[9]),M(w,"click",e[10])],v=!0)},p(a,[h]){const k=h&49?Se(S,[h&16&&De(a[4]),h&32&&{insertTable:a[5]},h&1&&{plugin:a[0]}]):{};!r&&h&2&&(r=!0,k.hoverTableEnd=a[1],ke(()=>r=!1)),o.$set(k),h&4&&f.value!==a[2]&&R(f,a[2]),h&8&&m.value!==a[3]&&R(m,a[3])},i(a){_||(X(o.$$.fragment,a),_=!0)},o(a){Ne(o.$$.fragment,a),_=!1},d(a){a&&L(t),he(o),v=!1,A(T)}}}function Re(e,t,n){var i,o;let{editor:r}=t,{plugin:u}=t,c,l,s,f={rowNum:(i=u==null?void 0:u.settings.rowCount)!==null&&i!==void 0?i:8,colNum:(o=u==null?void 0:u.settings.columnCount)!==null&&o!==void 0?o:8};function b(_){if(_.length===0){n(2,l=0),n(3,s=0);return}c[0]===0&&c[1]===0||(n(2,l=c[0]),n(3,s=c[1]))}function d(_){if(_.length===0||_[1]<2)return;const v=Oe(_),T=r.getCursor("from");r.getLine(T.line).length>0?r.replaceRange(v,{line:T.line+1,ch:0},{line:T.line+1,ch:v.length}):r.replaceRange(v,{line:T.line,ch:0},{line:T.line,ch:0})}function p(_){c=_,n(1,c)}function m(){l=this.value,n(2,l)}function E(){s=this.value,n(3,s)}const w=()=>{/^\d+$/.test(l.toString())&&/^\d+$/.test(s.toString())?(console.log(l,s),d([l,s]),u.hideTable()):new N.Notice("Please enter a valid number")};return e.$$set=_=>{"editor"in _&&n(6,r=_.editor),"plugin"in _&&n(0,u=_.plugin)},e.$$.update=()=>{e.$$.dirty&2&&c&&b(c)},[u,c,l,s,f,d,r,p,m,E,w]}class je extends ge{constructor(t){super(),de(this,t,Re,Ve,se,{editor:6,plugin:0})}}const qe={rowCount:8,columnCount:8};class He extends N.Plugin{constructor(){super(...arguments);x(this,"tableGeneratorEl",null);x(this,"tableGeneratorComponent");x(this,"settings")}async onload(){this.registerEvent(this.app.workspace.on("editor-menu",(n,i,o)=>this.handleCreateTableGeneratorInMenu(n,i,o))),await this.registerSettings(),this.registerDomEvent(window,"click",n=>this.handleHideTableGeneratorMenu(n)),N.requireApiVersion("0.15.0")&&this.registerTableGeneratorMenu(),this.addCommand({id:"create-table-genertator",name:"Create Table Generator",editorCallback:(n,i)=>{var o;(o=N.requireApiVersion("0.15.0")?activeDocument:document)!=null&&o.body.contains(this.tableGeneratorEl)||(this.createTableGeneratorMenu(n,this),this.showTableGeneratorView(n,this.tableGeneratorEl))}})}hideTable(){var n;(n=this.tableGeneratorEl)==null||n.detach()}handleHideTableGeneratorMenu(n){var o,r;const i=n.target;!this.tableGeneratorEl||!i||i.classList.contains("table-generator-menu")||((o=i.parentElement)==null?void 0:o.classList.contains("table-generator-menu"))||i.tagName=="BUTTON"||(r=this.tableGeneratorEl)!=null&&r.contains(i)||!document.body.contains(this.tableGeneratorEl)||this.tableGeneratorEl.detach()}handleCreateTableGeneratorInMenu(n,i,o){n.addItem(r=>{r.dom.addClass("table-generator-menu"),r.setTitle("Table Generator").setIcon("table").onClick(async()=>{this.createTableGeneratorMenu(i,this),this.showTableGeneratorView(i,this.tableGeneratorEl)})})}createTableGeneratorMenu(n,i){var o;this.tableGeneratorEl&&!activeDocument.body.contains(this.tableGeneratorEl)&&this.tableGeneratorEl.detach(),this.tableGeneratorEl=(o=N.requireApiVersion("0.15.0")?activeDocument:document)==null?void 0:o.body.createEl("div",{cls:"table-generator-view"}),this.tableGeneratorEl.hide(),this.tableGeneratorComponent=new je({target:this.tableGeneratorEl,props:{editor:n,plugin:i}})}showTableGeneratorView(n,i){var c,l,s,f;if(!i)return;const o=n.getCursor("from");let r;if(n.cursorCoords)r=n.cursorCoords(!0,"window");else if(n.coordsAtPos){const b=n.posToOffset(o);r=(s=(l=(c=n.cm).coordsAtPos)==null?void 0:l.call(c,b))!=null?s:n.coordsAtPos(b)}else return;const u=((f=N.requireApiVersion("0.15.0")?activeDocument:document)==null?void 0:f.body.getBoundingClientRect().height)-r.top-r.height;i.style.transform="translate("+r.left+"px, -"+u+"px)",i.style.display="unset"}async registerSettings(){await this.loadSettings(),this.addSettingTab(new Be(this.app,this)),this.registerInterval(window.setTimeout(()=>{this.saveSettings()},100))}registerTableGeneratorMenu(){this.app.workspace.on("window-open",n=>{this.registerDomEvent(n.doc,"click",i=>{var r,u;const o=i.target;!this.tableGeneratorEl||!o||o.classList.contains("table-generator-menu")||((r=o.parentElement)==null?void 0:r.classList.contains("table-generator-menu"))||o.tagName=="BUTTON"||(u=this.tableGeneratorEl)!=null&&u.contains(o)||!activeDocument.body.contains(this.tableGeneratorEl)||this.tableGeneratorEl.detach()})})}onunload(){this.tableGeneratorEl&&(this.tableGeneratorComponent.$destroy(),this.tableGeneratorEl.detach())}async loadSettings(){this.settings=Object.assign({},qe,await this.loadData())}async saveSettings(){await this.saveData(this.settings)}}class Be extends N.PluginSettingTab{constructor(n,i){super(n,i);x(this,"plugin");this.plugin=i}display(){const{containerEl:n}=this;n.empty(),n.createEl("h2",{text:"Table Generator"});let i;new N.Setting(n).setName("Row Count").setDesc("The number of rows in the table").addSlider(r=>r.setLimits(2,12,1).setValue(this.plugin.settings.rowCount).onChange(async u=>{i.innerText=` ${u.toString()}`,this.plugin.settings.rowCount=u})).settingEl.createDiv("",r=>{i=r,r.className="table-generator-setting-text",r.innerText=` ${this.plugin.settings.rowCount.toString()}`});let o;new N.Setting(n).setName("Columns Count").setDesc("The number of columns in the table").addSlider(r=>r.setLimits(2,12,1).setValue(this.plugin.settings.columnCount).onChange(async u=>{o.innerText=` ${u.toString()}`,this.plugin.settings.columnCount=u})).settingEl.createDiv("",r=>{o=r,r.className="table-generator-setting-text",r.innerText=` ${this.plugin.settings.columnCount.toString()}`}),this.containerEl.createEl("h2",{text:"Say Thank You"}),new N.Setting(n).setName("Donate").setDesc("If you like this plugin, consider donating to support continued development:").addButton(r=>{r.buttonEl.outerHTML='<a href="https://www.buymeacoffee.com/boninall"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=boninall&button_colour=6495ED&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00"></a>'})}}module.exports=He;
