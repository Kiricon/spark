!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.paragon={})}(this,function(t){const e=new Map;class s{constructor(t,e,s,i=m){this.strings=t,this.values=e,this.type=s,this.partCallback=i}getHTML(){const t=this.strings.length-1;let e="",s=!0;for(let i=0;i<t;i++){const t=this.strings[i];e+=t;const r=l(t);e+=(s=r>-1?r<t.length:s)?o:n}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}function i(t,s,i=function(t){let s=e.get(t.type);void 0===s&&(s=new Map,e.set(t.type,s));let i=s.get(t.strings);return void 0===i&&(i=new h(t,t.getTemplateElement()),s.set(t.strings,i)),i}){const n=i(t);let o=s.__templateInstance;if(void 0!==o&&o.template===n&&o._partCallback===t.partCallback)return void o.update(t.values);o=new g(n,t.partCallback,i),s.__templateInstance=o;const r=o._clone();o.update(t.values),x(s,s.firstChild),s.appendChild(r)}const n=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${n}--\x3e`,r=new RegExp(`${n}|${o}`),a=/[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;function l(t){const e=t.lastIndexOf(">");return t.indexOf("<",e+1)>-1?t.length:e}class c{constructor(t,e,s,i,n){this.type=t,this.index=e,this.name=s,this.rawName=i,this.strings=n}}class h{constructor(t,e){this.parts=[],this.element=e;const s=document.createTreeWalker(this.element.content,133,null,!1);let i=-1,o=0;const l=[];let h,u;for(;s.nextNode();){i++,h=u;const e=u=s.currentNode;if(1===e.nodeType){if(!e.hasAttributes())continue;const s=e.attributes;let l=0;for(let t=0;t<s.length;t++)s[t].value.indexOf(n)>=0&&l++;for(;l-- >0;){const n=a.exec(t.strings[o])[1],l=s.getNamedItem(n),h=l.value.split(r);this.parts.push(new c("attribute",i,l.name,n,h)),e.removeAttribute(l.name),o+=h.length-1}}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(n)<0)continue;const s=e.parentNode,a=t.split(r),l=a.length-1;o+=l,e.textContent=a[l];for(let t=0;t<l;t++)s.insertBefore(document.createTextNode(a[t]),e),this.parts.push(new c("node",i++))}else if(8===e.nodeType&&e.nodeValue===n){const t=e.parentNode,s=e.previousSibling;null===s||s!==h||s.nodeType!==Node.TEXT_NODE?t.insertBefore(document.createTextNode(""),e):i--,this.parts.push(new c("node",i++)),l.push(e),null===e.nextSibling?t.insertBefore(document.createTextNode(""),e):i--,u=h,o++}}for(const t of l)t.parentNode.removeChild(t)}}const u=(t,e)=>p(e)?(e=e(t),d):null===e?void 0:e,p=t=>"function"==typeof t&&!0===t.__litDirective,d={},f=t=>null===t||!("object"==typeof t||"function"==typeof t);class _{constructor(t,e,s){this.instance=t,this.startNode=e,this.endNode=s,this._previousValue=void 0}setValue(t){if((t=u(this,t))!==d)if(f(t)){if(t===this._previousValue)return;this._setText(t)}else t instanceof s?this._setTemplateResult(t):Array.isArray(t)||t[Symbol.iterator]?this._setIterable(t):t instanceof Node?this._setNode(t):void 0!==t.then?this._setPromise(t):this._setText(t)}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_setNode(t){this._previousValue!==t&&(this.clear(),this._insert(t),this._previousValue=t)}_setText(t){const e=this.startNode.nextSibling;t=void 0===t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._setNode(document.createTextNode(t)),this._previousValue=t}_setTemplateResult(t){const e=this.instance._getTemplate(t);let s;this._previousValue&&this._previousValue.template===e?s=this._previousValue:(s=new g(e,this.instance._partCallback,this.instance._getTemplate),this._setNode(s._clone()),this._previousValue=s),s.update(t.values)}_setIterable(t){Array.isArray(this._previousValue)||(this.clear(),this._previousValue=[]);const e=this._previousValue;let s=0;for(const i of t){let t=e[s];if(void 0===t){let i=this.startNode;if(s>0){i=e[s-1].endNode=document.createTextNode(""),this._insert(i)}t=new _(this.instance,i,this.endNode),e.push(t)}t.setValue(i),s++}if(0===s)this.clear(),this._previousValue=void 0;else if(s<e.length){const t=e[s-1];e.length=s,this.clear(t.endNode.previousSibling),t.endNode=this.endNode}}_setPromise(t){this._previousValue=t,t.then(e=>{this._previousValue===t&&this.setValue(e)})}clear(t=this.startNode){x(this.startNode.parentNode,t.nextSibling,this.endNode)}}const m=(t,e,s)=>{if("attribute"===e.type)return new class{constructor(t,e,s,i){this.instance=t,this.element=e,this.name=s,this.strings=i,this.size=i.length-1,this._previousValues=[]}_interpolate(t,e){const s=this.strings,i=s.length-1;let n="";for(let o=0;o<i;o++){n+=s[o];const i=u(this,t[e+o]);if(i&&i!==d&&(Array.isArray(i)||"string"!=typeof i&&i[Symbol.iterator]))for(const t of i)n+=t;else n+=i}return n+s[i]}_equalToPreviousValues(t,e){for(let s=e;s<e+this.size;s++)if(this._previousValues[s]!==t[s]||!f(t[s]))return!1;return!0}setValue(t,e){if(this._equalToPreviousValues(t,e))return;const s=this.strings;let i;2===s.length&&""===s[0]&&""===s[1]?(i=u(this,t[e]),Array.isArray(i)&&(i=i.join(""))):i=this._interpolate(t,e),i!==d&&this.element.setAttribute(this.name,i),this._previousValues=t}}(t,s,e.name,e.strings);if("node"===e.type)return new _(t,s,s.nextSibling);throw new Error(`Unknown part type ${e.type}`)};class g{constructor(t,e,s){this._parts=[],this.template=t,this._partCallback=e,this._getTemplate=s}update(t){let e=0;for(const s of this._parts)void 0===s.size?(s.setValue(t[e]),e++):(s.setValue(t,e),e+=s.size)}_clone(){const t=document.importNode(this.template.element.content,!0),e=this.template.parts;if(e.length>0){const s=document.createTreeWalker(t,133,null,!1);let i=-1;for(let t=0;t<e.length;t++){const n=e[t];for(;i<n.index;)i++,s.nextNode();this._parts.push(this._partCallback(this,n,s.currentNode))}}return t}}const x=(t,e,s=null)=>{let i=e;for(;i!==s;){const e=i.nextSibling;t.removeChild(i),i=e}};var v=function(t){this.state=t||{},this._subscriptions=[]};v.prototype.getState=function(){return this.state},v.prototype.subscribe=function(t){this._subscriptions.push(t)},v.prototype.setState=function(t){var e=this.state,s={};for(var i in this.state)s[i]=this.state[i];for(var n in t)s[n]=t[n];this.state=s,this._callSubcriptions(e)},v.prototype._callSubcriptions=function(t){for(var e=0;e<this._subscriptions.length;e++)this._subscriptions[e](this.state,t)};var y=function(t){return new v(t)},N=function(t){function e(){var e=this;t.call(this),this._state=y({}),this.state=this._state.getState(),this._state.subscribe(function(t){i(e.template(t),e.shadowRoot?e.shadowRoot:e)})}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.connectedCallback=function(){"function"==typeof this.connected&&this.connected()},e.prototype.setState=function(t){this._state.setState(t),this.state=this._state.getState()},e.prototype.query=function(t){return this.shadowRoot?this.shadowRoot.querySelector(t):this.querySelector(t)},e}(HTMLElement);t.html=((t,...e)=>new s(t,e,"html")),t.register=function(t,e){e=e||!1;var s=function(t){function s(){t.call(this),e?(this.attachShadow({mode:"open"}),i(this.template(this.state),this.shadowRoot)):i(this.template(this.state),this)}return t&&(s.__proto__=t),(s.prototype=Object.create(t&&t.prototype)).constructor=s,s}(t);customElements.define([].concat(t.name).map(function(t,e){return t<"a"?0!==e?"-"+t.toLowerCase():t.toLowerCase():t}).join(""),s)},t.Paragon=N,t.createStore=y});
//# sourceMappingURL=paragon.umd.js.map
