(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{kqSD:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiFilterModule",(function(){return M}));var a=n("2kYt"),l=n("sEIs"),i=n("T8fS"),r=n("SVIu"),o=n("l4xa"),m=n("Qq0t"),c=n("EM62"),d=n("OZlg"),p=n("e0eB"),s=n("iyc4"),u=n("DzXc");function f(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"tr"),c["\u0275\u0275elementStart"](1,"td",4),c["\u0275\u0275text"](2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"td",5),c["\u0275\u0275text"](4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](e.name),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](e.price)}}let _=(()=>{class e{constructor(){this.items=[{name:"Sword",price:1e3},{name:"Axe",price:100},{name:"Spear",price:500}],this.matcher=(e,t)=>e.price>t}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-filter-example1"]],decls:9,vars:5,consts:[[1,"tui-table","table"],[1,"tui-table__th","cell_name"],[1,"tui-table__th","cell_sum"],[4,"ngFor","ngForOf"],[1,"tui-table__td","cell_name"],[1,"tui-table__td","cell_sum"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"table",0),c["\u0275\u0275elementStart"](1,"thead"),c["\u0275\u0275elementStart"](2,"tr"),c["\u0275\u0275elementStart"](3,"th",1),c["\u0275\u0275text"](4,"Name"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"th",2),c["\u0275\u0275text"](6,"Sum, $"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](7,f,5,2,"tr",3),c["\u0275\u0275pipe"](8,"tuiFilter"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](7),c["\u0275\u0275property"]("ngForOf",c["\u0275\u0275pipeBind3"](8,1,t.items,t.matcher,300)))},directives:[a.s],pipes:[u.a],encapsulation:2,changeDetection:0}),e})();var h=n("u8jZ");const b=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`];var E,S,T;function g(e,t){if(1&e&&(c["\u0275\u0275i18nStart"](0,E),c["\u0275\u0275elementStart"](1,"tui-doc-example",3),c["\u0275\u0275i18nAttributes"](2,b),c["\u0275\u0275element"](3,"tui-filter-example1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275i18nEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("content",e.example1)}}function x(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",4),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275elementStart"](2,"p"),c["\u0275\u0275i18nStart"](3,S),c["\u0275\u0275element"](4,"code"),c["\u0275\u0275i18nEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](5,"tui-doc-code",5),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"li"),c["\u0275\u0275elementStart"](7,"p"),c["\u0275\u0275i18n"](8,T),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](9,"tui-doc-code",6),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](5),c["\u0275\u0275property"]("code",e.exampleImportModule),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}E=$localize`:␟94367b4a97b8f508723bb7e666f107af5f89034d␟1365788925292352994: Pipe for filtering an array ${"\ufffd#1\ufffd"}:START_TAG_TUI_DOC_EXAMPLE:${"\ufffd#3\ufffd"}:START_TAG_TUI_FILTER_EXAMPLE1:${"\ufffd/#3\ufffd"}:CLOSE_TAG_TUI_FILTER_EXAMPLE1:${"\ufffd/#1\ufffd"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`,S=$localize`:␟65c395d64edd4d33377f2d79f0ad80c133161295␟9195543244788770916: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiFilterPipeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,T=$localize`:␟d904032ec7cbd3e61941f6929b1c472bea849960␟734140032111794013: Use pipe in template with function and its arguments: `;let y=(()=>{class e{constructor(){this.exampleImportModule="import {TuiFilterPipeModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiFilterPipeModule\n    ],\n...\n",this.exampleInsertTemplate='<div *ngFor="let item of items | tuiFilter: matcher: someArg">\n    {{item}}\n</div>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\nexport interface Item {\n    readonly name: string;\n    readonly price: number;\n}\n\n@Component({\n    selector: 'tui-filter-example1',\n    templateUrl: './template.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterExample1 {\n    readonly items: ReadonlyArray<Item> = [\n        {\n            name: 'Sword',\n            price: 1000,\n        },\n        {\n            name: 'Axe',\n            price: 100,\n        },\n        {\n            name: 'Spear',\n            price: 500,\n        },\n    ];\n\n    readonly matcher = (item: Item, search: number) => item.price > search;\n}\n",HTML:'<table class="tui-table table">\n    <thead>\n        <tr>\n            <th class="tui-table__th cell_name">Name</th>\n            <th class="tui-table__th cell_sum">Sum, $</th>\n        </tr>\n        <tr *ngFor="let item of items | tuiFilter: matcher: 300">\n            <td class="tui-table__td cell_name">{{item.name}}</td>\n            <td class="tui-table__td cell_sum">{{item.price}}</td>\n        </tr>\n    </thead>\n</table>\n'}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-filter"]],decls:3,vars:0,consts:[["header","Filter","package","CDK","type","pipes"],["pageTab",""],["pageTab","Setup"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275template"](1,g,4,1,"ng-template",1),c["\u0275\u0275template"](2,x,10,2,"ng-template",2),c["\u0275\u0275elementEnd"]())},directives:[d.a,p.a,s.a,_,h.a],styles:[".cell[_ngcontent-%COMP%]{font-size:1rem;padding:1rem}.row[_ngcontent-%COMP%]:nth-child(odd){background:var(--tui-secondary)}.table[_ngcontent-%COMP%]{width:31.25rem;border:1px solid var(--tui-base-03)}"],changeDetection:0}),e})(),M=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.TuiFilterPipeModule,i.TuiMoneyModule,a.c,r.h,m.TuiTableModeModule,l.f.forChild(Object(r.o)(y))]]}),e})()}}]);