(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{OXgS:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class a{}var i=u("pMnS"),e=u("a18t"),c=u("fECr"),b=u("iInd"),r=u("SVse"),o=u("1haT"),s=u("fp1T"),h=u("AGyb");class m{constructor(l,n){this._route=l,this._mainService=n}ngOnInit(){this.getCityName(),this.getCityData()}getCityName(){this.cityName=this._route.snapshot.params.city}getCityData(){this._mainService.getCityData().subscribe(l=>{this.cityData=l[this.cityName],this.cityData=Object.keys(this.cityData.districtData).map(l=>Object.assign({city:l},this.cityData.districtData[l])),this.cityData=this.cityData.sort((l,n)=>n.confirmed-l.confirmed),this.total={confirmed:this.cityData.map(l=>Number(l.confirmed)).reduce((l,n)=>l+n),active:this.cityData.map(l=>Number(l.active)).reduce((l,n)=>l+n),deaths:this.cityData.map(l=>Number(l.deaths)).reduce((l,n)=>l+n),recovered:this.cityData.map(l=>Number(l.recovered)).reduce((l,n)=>l+n)}})}}var d=t.lb({encapsulation:0,styles:[[""]],data:{}});function p(l){return t.Ab(0,[(l()(),t.nb(0,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),t.nb(1,0,null,null,1,"th",[["style","font-weight: 400;"]],null,null,null,null,null)),(l()(),t.zb(2,null,["",""])),(l()(),t.nb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.zb(4,null,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.city),l(n,4,0,n.context.$implicit.confirmed)})}function y(l){return t.Ab(0,[(l()(),t.nb(0,0,null,null,1,"app-header",[],null,null,null,e.b,e.a)),t.mb(1,114688,null,0,c.a,[],null,null),(l()(),t.nb(2,0,null,null,26,"div",[["class","wrapper container"]],null,null,null,null,null)),(l()(),t.nb(3,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==t.vb(l,4).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&a),a},null,null)),t.mb(4,671744,null,0,b.m,[b.k,b.a,r.g],{routerLink:[0,"routerLink"]},null),t.wb(5,1),(l()(),t.zb(-1,null,[" Go Back"])),(l()(),t.nb(7,0,null,null,21,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.nb(8,0,null,null,0,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),t.nb(9,0,null,null,18,"div",[["class","col-lg-6"]],null,null,null,null,null)),(l()(),t.nb(10,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),t.zb(11,null,[""," Report"])),(l()(),t.nb(12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.nb(13,0,null,null,14,"table",[["class","table table-hover"]],null,null,null,null,null)),(l()(),t.nb(14,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),t.nb(15,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),t.nb(16,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.zb(-1,null,["CITY / DISTRICT"])),(l()(),t.nb(18,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.zb(-1,null,["TOTAL"])),(l()(),t.nb(20,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.cb(16777216,null,null,1,null,p)),t.mb(22,278528,null,0,r.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.nb(23,0,null,null,4,"tfoot",[],null,null,null,null,null)),(l()(),t.nb(24,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.zb(-1,null,["TOTAL"])),(l()(),t.nb(26,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.zb(27,null,["",""])),(l()(),t.nb(28,0,null,null,0,"div",[["class","col-lg-3"]],null,null,null,null,null)),(l()(),t.nb(29,0,null,null,1,"app-footer",[],null,null,null,o.b,o.a)),t.mb(30,114688,null,0,s.a,[],null,null)],function(l,n){var u=n.component;l(n,1,0);var t=l(n,5,0,"/");l(n,4,0,t),l(n,22,0,u.cityData),l(n,30,0)},function(l,n){var u=n.component;l(n,3,0,t.vb(n,4).target,t.vb(n,4).href),l(n,11,0,u.cityName),l(n,27,0,null==u.total?null:u.total.confirmed)})}function f(l){return t.Ab(0,[(l()(),t.nb(0,0,null,null,1,"app-detail",[],null,null,null,y,d)),t.mb(1,114688,null,0,m,[b.a,h.a],null,null)],function(l,n){l(n,1,0)},null)}var v=t.jb("app-detail",m,f,{},{},[]),g=u("s7LF");class D{}var k=u("PCNd");u.d(n,"DetailModuleNgFactory",function(){return N});var N=t.kb(a,[],function(l){return t.tb([t.ub(512,t.j,t.X,[[8,[i.a,v]],[3,t.j],t.v]),t.ub(4608,r.k,r.j,[t.s,[2,r.q]]),t.ub(4608,g.c,g.c,[]),t.ub(1073742336,r.b,r.b,[]),t.ub(1073742336,b.n,b.n,[[2,b.s],[2,b.k]]),t.ub(1073742336,D,D,[]),t.ub(1073742336,g.b,g.b,[]),t.ub(1073742336,g.a,g.a,[]),t.ub(1073742336,k.a,k.a,[]),t.ub(1073742336,a,a,[]),t.ub(1024,b.i,function(){return[[{path:"",component:m}]]},[])])})}}]);