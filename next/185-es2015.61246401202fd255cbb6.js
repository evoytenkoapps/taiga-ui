(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{kT51:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return gt}));var r=n("jgtz"),o=n("r8pW");const i=/^\s*>\s$/gm;var s=r.Node.create({name:"blockquote",defaultOptions:{HTMLAttributes:{}},content:"block*",group:"block",defining:!0,parseHTML:()=>[{tag:"blockquote"}],renderHTML({HTMLAttributes:t}){return["blockquote",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands:()=>({setBlockquote:()=>({commands:t})=>t.wrapIn("blockquote"),toggleBlockquote:()=>({commands:t})=>t.toggleWrap("blockquote"),unsetBlockquote:()=>({commands:t})=>t.lift("blockquote")}),addKeyboardShortcuts(){return{"Mod-Shift-b":()=>this.editor.commands.toggleBlockquote()}},addInputRules(){return[Object(o.e)(i,this.type)]}});const a=/(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/gm,l=/(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))/gm,u=/(?:^|\s)((?:__)((?:[^__]+))(?:__))$/gm,d=/(?:^|\s)((?:__)((?:[^__]+))(?:__))/gm;var p=r.Mark.create({name:"bold",defaultOptions:{HTMLAttributes:{}},parseHTML:()=>[{tag:"strong"},{tag:"b",getAttrs:t=>"normal"!==t.style.fontWeight&&null},{style:"font-weight",getAttrs:t=>/^(bold(er)?|[5-9]\d{2,})$/.test(t)&&null}],renderHTML({HTMLAttributes:t}){return["strong",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands:()=>({setBold:()=>({commands:t})=>t.setMark("bold"),toggleBold:()=>({commands:t})=>t.toggleMark("bold"),unsetBold:()=>({commands:t})=>t.unsetMark("bold")}),addKeyboardShortcuts(){return{"Mod-b":()=>this.editor.commands.toggleBold()}},addInputRules(){return[Object(r.markInputRule)(a,this.type),Object(r.markInputRule)(u,this.type)]},addPasteRules(){return[Object(r.markPasteRule)(l,this.type),Object(r.markPasteRule)(d,this.type)]}});const c=/^\s*([-+*])\s$/;var h=r.Node.create({name:"bulletList",defaultOptions:{HTMLAttributes:{}},group:"block list",content:"listItem+",parseHTML:()=>[{tag:"ul"}],renderHTML({HTMLAttributes:t}){return["ul",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands:()=>({toggleBulletList:()=>({commands:t})=>t.toggleList("bulletList","listItem")}),addKeyboardShortcuts(){return{"Mod-Shift-8":()=>this.editor.commands.toggleBulletList()}},addInputRules(){return[Object(o.e)(c,this.type)]}});const m=/(?:^|\s)((?:`)((?:[^`]+))(?:`))$/gm,f=/(?:^|\s)((?:`)((?:[^`]+))(?:`))/gm,g=r.Mark.create({name:"code",defaultOptions:{HTMLAttributes:{}},excludes:"_",parseHTML:()=>[{tag:"code"}],renderHTML({HTMLAttributes:t}){return["code",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands:()=>({setCode:()=>({commands:t})=>t.setMark("code"),toggleCode:()=>({commands:t})=>t.toggleMark("code"),unsetCode:()=>({commands:t})=>t.unsetMark("code")}),addKeyboardShortcuts(){return{"Mod-e":()=>this.editor.commands.toggleCode()}},addInputRules(){return[Object(r.markInputRule)(m,this.type)]},addPasteRules(){return[Object(r.markPasteRule)(f,this.type)]}}),v=/^```(?<language>[a-z]*)? $/,b=/^~~~(?<language>[a-z]*)? $/,y=r.Node.create({name:"codeBlock",defaultOptions:{languageClassPrefix:"language-",HTMLAttributes:{}},content:"text*",marks:"",group:"block",code:!0,defining:!0,addAttributes(){return{language:{default:null,parseHTML:t=>{var e;const{languageClassPrefix:n}=this.options;return[...(null===(e=t.firstElementChild)||void 0===e?void 0:e.classList)||[]].filter(t=>t.startsWith(n)).map(t=>t.replace(n,""))[0]||null},renderHTML:t=>t.language?{class:this.options.languageClassPrefix+t.language}:null}}},parseHTML:()=>[{tag:"pre",preserveWhitespace:"full"}],renderHTML({HTMLAttributes:t}){return["pre",this.options.HTMLAttributes,["code",t,0]]},addCommands:()=>({setCodeBlock:t=>({commands:e})=>e.setNode("codeBlock",t),toggleCodeBlock:t=>({commands:e})=>e.toggleNode("codeBlock","paragraph",t)}),addKeyboardShortcuts(){return{"Mod-Alt-c":()=>this.editor.commands.toggleCodeBlock(),Backspace:()=>{const{empty:t,$anchor:e}=this.editor.state.selection;return!(!t||e.parent.type.name!==this.name)&&!(1!==e.pos&&e.parent.textContent.length)&&this.editor.commands.clearNodes()}}},addInputRules(){return[Object(o.c)(v,this.type,({groups:t})=>t),Object(o.c)(b,this.type,({groups:t})=>t)]}});var M=r.Node.create({name:"doc",topNode:!0,content:"block+"}),T=n("ehfC"),w=n("UdmJ"),k=function(t,e){var n=this;this.editorView=t,this.width=e.width||1,this.color=e.color||"black",this.class=e.class,this.cursorPos=null,this.element=null,this.timeout=null,this.handlers=["dragover","dragend","drop","dragleave"].map((function(e){var r=function(t){return n[e](t)};return t.dom.addEventListener(e,r),{name:e,handler:r}}))};k.prototype.destroy=function(){var t=this;this.handlers.forEach((function(e){return t.editorView.dom.removeEventListener(e.name,e.handler)}))},k.prototype.update=function(t,e){null!=this.cursorPos&&e.doc!=t.state.doc&&(this.cursorPos>t.state.doc.content.size?this.setCursor(null):this.updateOverlay())},k.prototype.setCursor=function(t){t!=this.cursorPos&&(this.cursorPos=t,null==t?(this.element.parentNode.removeChild(this.element),this.element=null):this.updateOverlay())},k.prototype.updateOverlay=function(){var t,e=this.editorView.state.doc.resolve(this.cursorPos);if(!e.parent.inlineContent){var n=e.nodeBefore,r=e.nodeAfter;if(n||r){var o=this.editorView.nodeDOM(this.cursorPos-(n?n.nodeSize:0)).getBoundingClientRect(),i=n?o.bottom:o.top;n&&r&&(i=(i+this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top)/2),t={left:o.left,right:o.right,top:i-this.width/2,bottom:i+this.width/2}}}if(!t){var s=this.editorView.coordsAtPos(this.cursorPos);t={left:s.left-this.width/2,right:s.left+this.width/2,top:s.top,bottom:s.bottom}}var a,l,u=this.editorView.dom.offsetParent;if(this.element||(this.element=u.appendChild(document.createElement("div")),this.class&&(this.element.className=this.class),this.element.style.cssText="position: absolute; z-index: 50; pointer-events: none; background-color: "+this.color),!u||u==document.body&&"static"==getComputedStyle(u).position)a=-pageXOffset,l=-pageYOffset;else{var d=u.getBoundingClientRect();a=d.left-u.scrollLeft,l=d.top-u.scrollTop}this.element.style.left=t.left-a+"px",this.element.style.top=t.top-l+"px",this.element.style.width=t.right-t.left+"px",this.element.style.height=t.bottom-t.top+"px"},k.prototype.scheduleRemoval=function(t){var e=this;clearTimeout(this.timeout),this.timeout=setTimeout((function(){return e.setCursor(null)}),t)},k.prototype.dragover=function(t){if(this.editorView.editable){var e=this.editorView.posAtCoords({left:t.clientX,top:t.clientY});if(e){var n=e.pos;if(this.editorView.dragging&&this.editorView.dragging.slice&&null==(n=Object(w.g)(this.editorView.state.doc,n,this.editorView.dragging.slice)))return this.setCursor(null);this.setCursor(n),this.scheduleRemoval(5e3)}}},k.prototype.dragend=function(){this.scheduleRemoval(20)},k.prototype.drop=function(){this.scheduleRemoval(20)},k.prototype.dragleave=function(t){t.target!=this.editorView.dom&&this.editorView.dom.contains(t.relatedTarget)||this.setCursor(null)};const L=r.Extension.create({name:"dropCursor",defaultOptions:{color:"currentColor",width:1,class:null},addProseMirrorPlugins(){return[(t=this.options,void 0===t&&(t={}),new T.d({view:function(e){return new k(e,t)}}))];var t}});var A=n("ALnk"),C=n("lELC"),H=n("I9T1"),O=function(t){function e(e){t.call(this,e,e)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.map=function(n,r){var o=n.resolve(r.map(this.head));return e.valid(o)?new e(o):t.near(o)},e.prototype.content=function(){return H.j.empty},e.prototype.eq=function(t){return t instanceof e&&t.head==this.head},e.prototype.toJSON=function(){return{type:"gapcursor",pos:this.head}},e.fromJSON=function(t,n){if("number"!=typeof n.pos)throw new RangeError("Invalid input for GapCursor.fromJSON");return new e(t.resolve(n.pos))},e.prototype.getBookmark=function(){return new I(this.anchor)},e.valid=function(t){var e=t.parent;if(e.isTextblock||!function(t){for(var e=t.depth;e>=0;e--){var n=t.index(e);if(0!=n)for(var r=t.node(e).child(n-1);;r=r.lastChild){if(0==r.childCount&&!r.inlineContent||r.isAtom||r.type.spec.isolating)return!0;if(r.inlineContent)return!1}}return!0}(t)||!function(t){for(var e=t.depth;e>=0;e--){var n=t.indexAfter(e),r=t.node(e);if(n!=r.childCount)for(var o=r.child(n);;o=o.firstChild){if(0==o.childCount&&!o.inlineContent||o.isAtom||o.type.spec.isolating)return!0;if(o.inlineContent)return!1}}return!0}(t))return!1;var n=e.type.spec.allowGapCursor;if(null!=n)return n;var r=e.contentMatchAt(t.index()).defaultType;return r&&r.isTextblock},e.findFrom=function(t,n,r){t:for(;;){if(!r&&e.valid(t))return t;for(var o=t.pos,i=null,s=t.depth;;s--){var a=t.node(s);if(n>0?t.indexAfter(s)<a.childCount:t.index(s)>0){i=a.child(n>0?t.indexAfter(s):t.index(s)-1);break}if(0==s)return null;var l=t.doc.resolve(o+=n);if(e.valid(l))return l}for(;;){var u=n>0?i.firstChild:i.lastChild;if(!u){if(i.isAtom&&!i.isText&&!T.c.isSelectable(i)){t=t.doc.resolve(o+i.nodeSize*n),r=!1;continue t}break}i=u;var d=t.doc.resolve(o+=n);if(e.valid(d))return d}return null}},e}(T.f);O.prototype.visible=!1,T.f.jsonID("gapcursor",O);var I=function(t){this.pos=t};I.prototype.map=function(t){return new I(t.map(this.pos))},I.prototype.resolve=function(t){var e=t.resolve(this.pos);return O.valid(e)?new O(e):T.f.near(e)};var R=Object(A.a)({ArrowLeft:x("horiz",-1),ArrowRight:x("horiz",1),ArrowUp:x("vert",-1),ArrowDown:x("vert",1)});function x(t,e){var n="vert"==t?e>0?"down":"up":e>0?"right":"left";return function(t,r,o){var i=t.selection,s=e>0?i.$to:i.$from,a=i.empty;if(i instanceof T.h){if(!o.endOfTextblock(n)||0==s.depth)return!1;a=!1,s=t.doc.resolve(e>0?s.after():s.before())}var l=O.findFrom(s,e,a);return!!l&&(r&&r(t.tr.setSelection(new O(l))),!0)}}function S(t,e,n){if(!t.editable)return!1;var r=t.state.doc.resolve(e);if(!O.valid(r))return!1;var o=t.posAtCoords({left:n.clientX,top:n.clientY}).inside;return!(o>-1&&T.c.isSelectable(t.state.doc.nodeAt(o))||(t.dispatch(t.state.tr.setSelection(new O(r))),0))}function j(t){if(!(t.selection instanceof O))return null;var e=document.createElement("div");return e.className="ProseMirror-gapcursor",C.b.create(t.doc,[C.a.widget(t.selection.head,e,{key:"gapcursor"})])}var E=r.Extension.create({name:"gapCursor",addProseMirrorPlugins:()=>[new T.d({props:{decorations:j,createSelectionBetween:function(t,e,n){if(e.pos==n.pos&&O.valid(n))return new O(n)},handleClick:S,handleKeyDown:R}})],extendNodeSchema(t){var e;const n={name:t.name,options:t.options};return{allowGapCursor:null!==(e=Object(r.callOrReturn)(Object(r.getExtensionField)(t,"allowGapCursor",n)))&&void 0!==e?e:null}}});const P=r.Node.create({name:"hardBreak",defaultOptions:{HTMLAttributes:{}},inline:!0,group:"inline",selectable:!1,parseHTML:()=>[{tag:"br"}],renderHTML({HTMLAttributes:t}){return["br",Object(r.mergeAttributes)(this.options.HTMLAttributes,t)]},renderText:()=>"\n",addCommands(){return{setHardBreak:()=>({commands:t})=>t.first([()=>t.exitCode(),()=>t.insertContent({type:this.name})])}},addKeyboardShortcuts(){return{"Mod-Enter":()=>this.editor.commands.setHardBreak(),"Shift-Enter":()=>this.editor.commands.setHardBreak()}}});var _=r.Node.create({name:"heading",defaultOptions:{levels:[1,2,3,4,5,6],HTMLAttributes:{}},content:"inline*",group:"block",defining:!0,addAttributes:()=>({level:{default:1,rendered:!1}}),parseHTML(){return this.options.levels.map(t=>({tag:"h"+t,attrs:{level:t}}))},renderHTML({node:t,HTMLAttributes:e}){return["h"+(this.options.levels.includes(t.attrs.level)?t.attrs.level:this.options.levels[0]),Object(r.mergeAttributes)(this.options.HTMLAttributes,e),0]},addCommands(){return{setHeading:t=>({commands:e})=>!!this.options.levels.includes(t.level)&&e.setNode("heading",t),toggleHeading:t=>({commands:e})=>!!this.options.levels.includes(t.level)&&e.toggleNode("heading","paragraph",t)}},addKeyboardShortcuts(){return this.options.levels.reduce((t,e)=>({...t,["Mod-Alt-"+e]:()=>this.editor.commands.toggleHeading({level:e})}),{})},addInputRules(){return this.options.levels.map(t=>Object(o.c)(new RegExp(`^(#{1,${t}})\\s$`),this.type,{level:t}))}}),B=function(){};B.prototype.append=function(t){return t.length?(t=B.from(t),!this.length&&t||t.length<200&&this.leafAppend(t)||this.length<200&&t.leafPrepend(this)||this.appendInner(t)):this},B.prototype.prepend=function(t){return t.length?B.from(t).append(this):this},B.prototype.appendInner=function(t){return new $(this,t)},B.prototype.slice=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=this.length),t>=e?B.empty:this.sliceInner(Math.max(0,t),Math.min(this.length,e))},B.prototype.get=function(t){if(!(t<0||t>=this.length))return this.getInner(t)},B.prototype.forEach=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=this.length),e<=n?this.forEachInner(t,e,n,0):this.forEachInvertedInner(t,e,n,0)},B.prototype.map=function(t,e,n){void 0===e&&(e=0),void 0===n&&(n=this.length);var r=[];return this.forEach((function(e,n){return r.push(t(e,n))}),e,n),r},B.from=function(t){return t instanceof B?t:t&&t.length?new N(t):B.empty};var N=function(t){function e(e){t.call(this),this.values=e}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={length:{configurable:!0},depth:{configurable:!0}};return e.prototype.flatten=function(){return this.values},e.prototype.sliceInner=function(t,n){return 0==t&&n==this.length?this:new e(this.values.slice(t,n))},e.prototype.getInner=function(t){return this.values[t]},e.prototype.forEachInner=function(t,e,n,r){for(var o=e;o<n;o++)if(!1===t(this.values[o],r+o))return!1},e.prototype.forEachInvertedInner=function(t,e,n,r){for(var o=e-1;o>=n;o--)if(!1===t(this.values[o],r+o))return!1},e.prototype.leafAppend=function(t){if(this.length+t.length<=200)return new e(this.values.concat(t.flatten()))},e.prototype.leafPrepend=function(t){if(this.length+t.length<=200)return new e(t.flatten().concat(this.values))},n.length.get=function(){return this.values.length},n.depth.get=function(){return 0},Object.defineProperties(e.prototype,n),e}(B);B.empty=new N([]);var $=function(t){function e(e,n){t.call(this),this.left=e,this.right=n,this.length=e.length+n.length,this.depth=Math.max(e.depth,n.depth)+1}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.flatten=function(){return this.left.flatten().concat(this.right.flatten())},e.prototype.getInner=function(t){return t<this.left.length?this.left.get(t):this.right.get(t-this.left.length)},e.prototype.forEachInner=function(t,e,n,r){var o=this.left.length;return!(e<o&&!1===this.left.forEachInner(t,e,Math.min(n,o),r))&&!(n>o&&!1===this.right.forEachInner(t,Math.max(e-o,0),Math.min(this.length,n)-o,r+o))&&void 0},e.prototype.forEachInvertedInner=function(t,e,n,r){var o=this.left.length;return!(e>o&&!1===this.right.forEachInvertedInner(t,e-o,Math.max(n,o)-o,r+o))&&!(n<o&&!1===this.left.forEachInvertedInner(t,Math.min(e,o),n,r))&&void 0},e.prototype.sliceInner=function(t,e){if(0==t&&e==this.length)return this;var n=this.left.length;return e<=n?this.left.slice(t,e):t>=n?this.right.slice(t-n,e-n):this.left.slice(t,n).append(this.right.slice(0,e-n))},e.prototype.leafAppend=function(t){var n=this.right.leafAppend(t);if(n)return new e(this.left,n)},e.prototype.leafPrepend=function(t){var n=this.left.leafPrepend(t);if(n)return new e(n,this.right)},e.prototype.appendInner=function(t){return this.left.depth>=Math.max(this.right.depth,t.depth)+1?new e(this.left,new e(this.right,t)):new e(this,t)},e}(B),V=B,z=function(t,e){this.items=t,this.eventCount=e};z.prototype.popEvent=function(t,e){var n=this;if(0==this.eventCount)return null;for(var r,o,i=this.items.length;;i--)if(this.items.get(i-1).selection){--i;break}e&&(r=this.remapping(i,this.items.length),o=r.maps.length);var s,a,l=t.tr,u=[],d=[];return this.items.forEach((function(t,e){if(!t.step)return r||(r=n.remapping(i,e+1),o=r.maps.length),o--,void d.push(t);if(r){d.push(new K(t.map));var p,c=t.step.map(r.slice(o));c&&l.maybeStep(c).doc&&u.push(new K(p=l.mapping.maps[l.mapping.maps.length-1],null,null,u.length+d.length)),o--,p&&r.appendMap(p,o)}else l.maybeStep(t.step);return t.selection?(s=r?t.selection.map(r.slice(o)):t.selection,a=new z(n.items.slice(0,i).append(d.reverse().concat(u)),n.eventCount-1),!1):void 0}),this.items.length,0),{remaining:a,transform:l,selection:s}},z.prototype.addTransform=function(t,e,n,r){for(var o=[],i=this.eventCount,s=this.items,a=!r&&s.length?s.get(s.length-1):null,l=0;l<t.steps.length;l++){var u,d=t.steps[l].invert(t.docs[l]),p=new K(t.mapping.maps[l],d,e);(u=a&&a.merge(p))&&(p=u,l?o.pop():s=s.slice(0,s.length-1)),o.push(p),e&&(i++,e=null),r||(a=p)}var c,h,m,f=i-n.depth;return f>D&&(h=f,(c=s).forEach((function(t,e){if(t.selection&&0==h--)return m=e,!1})),s=c.slice(m),i-=f),new z(s.append(o),i)},z.prototype.remapping=function(t,e){var n=new w.a;return this.items.forEach((function(e,r){n.appendMap(e.map,null!=e.mirrorOffset&&r-e.mirrorOffset>=t?n.maps.length-e.mirrorOffset:null)}),t,e),n},z.prototype.addMaps=function(t){return 0==this.eventCount?this:new z(this.items.append(t.map((function(t){return new K(t)}))),this.eventCount)},z.prototype.rebased=function(t,e){if(!this.eventCount)return this;var n=[],r=Math.max(0,this.items.length-e),o=t.mapping,i=t.steps.length,s=this.eventCount;this.items.forEach((function(t){t.selection&&s--}),r);var a=e;this.items.forEach((function(e){var r=o.getMirror(--a);if(null!=r){i=Math.min(i,r);var l=o.maps[r];if(e.step){var u=t.steps[r].invert(t.docs[r]),d=e.selection&&e.selection.map(o.slice(a+1,r));d&&s++,n.push(new K(l,u,d))}else n.push(new K(l))}}),r);for(var l=[],u=e;u<i;u++)l.push(new K(o.maps[u]));var d=this.items.slice(0,r).append(l).append(n),p=new z(d,s);return p.emptyItemCount()>500&&(p=p.compress(this.items.length-n.length)),p},z.prototype.emptyItemCount=function(){var t=0;return this.items.forEach((function(e){e.step||t++})),t},z.prototype.compress=function(t){void 0===t&&(t=this.items.length);var e=this.remapping(0,t),n=e.maps.length,r=[],o=0;return this.items.forEach((function(i,s){if(s>=t)r.push(i),i.selection&&o++;else if(i.step){var a=i.step.map(e.slice(n)),l=a&&a.getMap();if(n--,l&&e.appendMap(l,n),a){var u=i.selection&&i.selection.map(e.slice(n));u&&o++;var d,p=new K(l.invert(),a,u),c=r.length-1;(d=r.length&&r[c].merge(p))?r[c]=d:r.push(p)}}else i.map&&n--}),this.items.length,0),new z(V.from(r.reverse()),o)},z.empty=new z(V.empty,0);var K=function(t,e,n,r){this.map=t,this.step=e,this.selection=n,this.mirrorOffset=r};K.prototype.merge=function(t){if(this.step&&t.step&&!t.selection){var e=t.step.merge(this.step);if(e)return new K(e.getMap().invert(),e,this.selection)}};var q=function(t,e,n,r){this.done=t,this.undone=e,this.prevRanges=n,this.prevTime=r},D=20;function G(t){var e=[];return t.forEach((function(t,n,r,o){return e.push(r,o)})),e}function J(t,e){if(!t)return null;for(var n=[],r=0;r<t.length;r+=2){var o=e.map(t[r],1),i=e.map(t[r+1],-1);o<=i&&n.push(o,i)}return n}function W(t,e,n,r){var o=X(e),i=Y.get(e).spec.config,s=(r?t.undone:t.done).popEvent(e,o);if(s){var a=s.selection.resolve(s.transform.doc),l=(r?t.done:t.undone).addTransform(s.transform,e.selection.getBookmark(),i,o),u=new q(r?l:s.remaining,r?s.remaining:l,null,0);n(s.transform.setSelection(a).setMeta(Y,{redo:r,historyState:u}).scrollIntoView())}}var F=!1,U=null;function X(t){var e=t.plugins;if(U!=e){F=!1,U=e;for(var n=0;n<e.length;n++)if(e[n].spec.historyPreserveItems){F=!0;break}}return F}var Y=new T.e("history"),Q=new T.e("closeHistory");function Z(t,e){var n=Y.getState(t);return!(!n||0==n.done.eventCount||(e&&W(n,t,e,!1),0))}function tt(t,e){var n=Y.getState(t);return!(!n||0==n.undone.eventCount||(e&&W(n,t,e,!0),0))}const et=r.Extension.create({name:"history",defaultOptions:{depth:100,newGroupDelay:500},addCommands:()=>({undo:()=>({state:t,dispatch:e})=>Z(t,e),redo:()=>({state:t,dispatch:e})=>tt(t,e)}),addProseMirrorPlugins(){return[(t=this.options,new T.d({key:Y,state:{init:function(){return new q(z.empty,z.empty,null,0)},apply:function(e,n,r){return function(t,e,n,r){var o,i=n.getMeta(Y);if(i)return i.historyState;n.getMeta(Q)&&(t=new q(t.done,t.undone,null,0));var s=n.getMeta("appendedTransaction");if(0==n.steps.length)return t;if(s&&s.getMeta(Y))return s.getMeta(Y).redo?new q(t.done.addTransform(n,null,r,X(e)),t.undone,G(n.mapping.maps[n.steps.length-1]),t.prevTime):new q(t.done,t.undone.addTransform(n,null,r,X(e)),null,t.prevTime);if(!1===n.getMeta("addToHistory")||s&&!1===s.getMeta("addToHistory"))return(o=n.getMeta("rebased"))?new q(t.done.rebased(n,o),t.undone.rebased(n,o),J(t.prevRanges,n.mapping),t.prevTime):new q(t.done.addMaps(n.mapping.maps),t.undone.addMaps(n.mapping.maps),J(t.prevRanges,n.mapping),t.prevTime);var a=0==t.prevTime||!s&&(t.prevTime<(n.time||0)-r.newGroupDelay||!function(t,e){if(!e)return!1;if(!t.docChanged)return!0;var n=!1;return t.mapping.maps[0].forEach((function(t,r){for(var o=0;o<e.length;o+=2)t<=e[o+1]&&r>=e[o]&&(n=!0)})),n}(n,t.prevRanges)),l=s?J(t.prevRanges,n.mapping):G(n.mapping.maps[n.steps.length-1]);return new q(t.done.addTransform(n,a?e.selection.getBookmark():null,r,X(e)),z.empty,l,n.time)}(n,r,e,t)}},config:t={depth:t&&t.depth||100,newGroupDelay:t&&t.newGroupDelay||500},props:{handleDOMEvents:{beforeinput:function(t,e){var n="historyUndo"==e.inputType?Z(t.state,t.dispatch):"historyRedo"==e.inputType&&tt(t.state,t.dispatch);return n&&e.preventDefault(),n}}}}))];var t},addKeyboardShortcuts(){return{"Mod-z":()=>this.editor.commands.undo(),"Mod-y":()=>this.editor.commands.redo(),"Shift-Mod-z":()=>this.editor.commands.redo(),"Mod-\u044f":()=>this.editor.commands.undo(),"Shift-Mod-\u044f":()=>this.editor.commands.redo()}}}),nt=r.Node.create({name:"horizontalRule",defaultOptions:{HTMLAttributes:{}},group:"block",parseHTML:()=>[{tag:"hr"}],renderHTML({HTMLAttributes:t}){return["hr",Object(r.mergeAttributes)(this.options.HTMLAttributes,t)]},addCommands(){return{setHorizontalRule:()=>({chain:t})=>t().command(({tr:t,dispatch:e})=>{const{selection:n}=t,{empty:r,$anchor:o}=n;if(!r||!o.parent.isTextblock||o.parent.type.spec.code||o.parent.textContent||!e)return!0;const i=o.before();return t.deleteRange(i,i+1),!0}).insertContent({type:this.name}).command(({tr:t,dispatch:e})=>{var n;if(e){const{parent:e,pos:r}=t.selection.$from,o=r+1;if(!t.doc.nodeAt(o)){const r=null===(n=e.type.contentMatch.defaultType)||void 0===n?void 0:n.create();r&&(t.insert(o,r),t.setSelection(T.h.create(t.doc,o)))}t.scrollIntoView()}return!0}).run()}},addInputRules(){return[Object(r.nodeInputRule)(/^(?:---|\u2014-|___\s|\*\*\*\s)$/,this.type)]}}),rt=/(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/gm,ot=/(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/gm,it=/(?:^|\s)((?:_)((?:[^_]+))(?:_))$/gm,st=/(?:^|\s)((?:_)((?:[^_]+))(?:_))/gm;var at=r.Mark.create({name:"italic",defaultOptions:{HTMLAttributes:{}},parseHTML:()=>[{tag:"em"},{tag:"i",getAttrs:t=>"normal"!==t.style.fontStyle&&null},{style:"font-style=italic"}],renderHTML({HTMLAttributes:t}){return["em",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands:()=>({setItalic:()=>({commands:t})=>t.setMark("italic"),toggleItalic:()=>({commands:t})=>t.toggleMark("italic"),unsetItalic:()=>({commands:t})=>t.unsetMark("italic")}),addKeyboardShortcuts(){return{"Mod-i":()=>this.editor.commands.toggleItalic()}},addInputRules(){return[Object(r.markInputRule)(rt,this.type),Object(r.markInputRule)(it,this.type)]},addPasteRules(){return[Object(r.markPasteRule)(ot,this.type),Object(r.markPasteRule)(st,this.type)]}}),lt=r.Node.create({name:"listItem",defaultOptions:{HTMLAttributes:{}},content:"paragraph block*",defining:!0,parseHTML:()=>[{tag:"li"}],renderHTML({HTMLAttributes:t}){return["li",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addKeyboardShortcuts(){return{Enter:()=>this.editor.commands.splitListItem("listItem"),Tab:()=>this.editor.commands.sinkListItem("listItem"),"Shift-Tab":()=>this.editor.commands.liftListItem("listItem")}}});const ut=/^(\d+)\.\s$/,dt=r.Node.create({name:"orderedList",defaultOptions:{HTMLAttributes:{}},group:"block list",content:"listItem+",addAttributes:()=>({start:{default:1,parseHTML:t=>t.hasAttribute("start")?parseInt(t.getAttribute("start")||"",10):1}}),parseHTML:()=>[{tag:"ol"}],renderHTML({HTMLAttributes:t}){const{start:e,...n}=t;return 1===e?["ol",Object(r.mergeAttributes)(this.options.HTMLAttributes,n),0]:["ol",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands:()=>({toggleOrderedList:()=>({commands:t})=>t.toggleList("orderedList","listItem")}),addKeyboardShortcuts(){return{"Mod-Shift-7":()=>this.editor.commands.toggleOrderedList()}},addInputRules(){return[Object(o.e)(ut,this.type,t=>({start:+t[1]}),(t,e)=>e.childCount+e.attrs.start===+t[1])]}}),pt=r.Node.create({name:"paragraph",priority:1e3,defaultOptions:{HTMLAttributes:{}},group:"block",content:"inline*",parseHTML:()=>[{tag:"p"}],renderHTML({HTMLAttributes:t}){return["p",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands:()=>({setParagraph:()=>({commands:t})=>t.setNode("paragraph")}),addKeyboardShortcuts(){return{"Mod-Alt-0":()=>this.editor.commands.setParagraph()}}}),ct=/(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/gm,ht=/(?:^|\s)((?:~~)((?:[^~]+))(?:~~))/gm;var mt=r.Mark.create({name:"strike",defaultOptions:{HTMLAttributes:{}},parseHTML:()=>[{tag:"s"},{tag:"del"},{tag:"strike"},{style:"text-decoration",consuming:!1,getAttrs:t=>!!t.includes("line-through")&&{}}],renderHTML({HTMLAttributes:t}){return["s",Object(r.mergeAttributes)(this.options.HTMLAttributes,t),0]},addCommands:()=>({setStrike:()=>({commands:t})=>t.setMark("strike"),toggleStrike:()=>({commands:t})=>t.toggleMark("strike"),unsetStrike:()=>({commands:t})=>t.unsetMark("strike")}),addKeyboardShortcuts(){return{"Mod-Shift-x":()=>this.editor.commands.toggleStrike()}},addInputRules(){return[Object(r.markInputRule)(ct,this.type)]},addPasteRules(){return[Object(r.markPasteRule)(ht,this.type)]}}),ft=r.Node.create({name:"text",group:"inline"});const gt=r.Extension.create({name:"starterKit",addExtensions(){var t,e,n,r,o,i,a,l,u,d,c,m,f,v,b,T,w,k;const A=[];return!1!==this.options.blockquote&&A.push(s.configure(null===(t=this.options)||void 0===t?void 0:t.blockquote)),!1!==this.options.bold&&A.push(p.configure(null===(e=this.options)||void 0===e?void 0:e.bold)),!1!==this.options.bulletList&&A.push(h.configure(null===(n=this.options)||void 0===n?void 0:n.bulletList)),!1!==this.options.code&&A.push(g.configure(null===(r=this.options)||void 0===r?void 0:r.code)),!1!==this.options.codeBlock&&A.push(y.configure(null===(o=this.options)||void 0===o?void 0:o.codeBlock)),!1!==this.options.document&&A.push(M.configure(null===(i=this.options)||void 0===i?void 0:i.document)),!1!==this.options.dropcursor&&A.push(L.configure(null===(a=this.options)||void 0===a?void 0:a.dropcursor)),!1!==this.options.gapcursor&&A.push(E.configure(null===(l=this.options)||void 0===l?void 0:l.gapcursor)),!1!==this.options.hardBreak&&A.push(P.configure(null===(u=this.options)||void 0===u?void 0:u.hardBreak)),!1!==this.options.heading&&A.push(_.configure(null===(d=this.options)||void 0===d?void 0:d.heading)),!1!==this.options.history&&A.push(et.configure(null===(c=this.options)||void 0===c?void 0:c.history)),!1!==this.options.horizontalRule&&A.push(nt.configure(null===(m=this.options)||void 0===m?void 0:m.horizontalRule)),!1!==this.options.italic&&A.push(at.configure(null===(f=this.options)||void 0===f?void 0:f.italic)),!1!==this.options.listItem&&A.push(lt.configure(null===(v=this.options)||void 0===v?void 0:v.listItem)),!1!==this.options.orderedList&&A.push(dt.configure(null===(b=this.options)||void 0===b?void 0:b.orderedList)),!1!==this.options.paragraph&&A.push(pt.configure(null===(T=this.options)||void 0===T?void 0:T.paragraph)),!1!==this.options.strike&&A.push(mt.configure(null===(w=this.options)||void 0===w?void 0:w.strike)),!1!==this.options.text&&A.push(ft.configure(null===(k=this.options)||void 0===k?void 0:k.text)),A}})}}]);