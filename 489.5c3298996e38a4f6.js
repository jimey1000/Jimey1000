"use strict";(self.webpackChunkteachersPension=self.webpackChunkteachersPension||[]).push([[489],{9489:(U,p,l)=>{l.r(p),l.d(p,{LayoutModule:()=>y});var u=l(6814),a=l(2384),e=l(5879);let g=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-not-found"]],decls:2,vars:0,template:function(n,o){1&n&&(e.TgZ(0,"p"),e._uU(1,"not-found works!"),e.qZA())}}),t})();var c=l(1674),r=l(3550),m=l(3999);let f=(()=>{class t{constructor(n){this.gs=n,this.menuCollapsed=!1,this.toggleEvent=new e.vpe,this.menuCollapsed=this.menuCollapsed,this.getGlobals()}getGlobals(){this.gs.getGlobals().subscribe(n=>{this.gs.globals=n,this.avatar=this.gs.globals?.userInfo?.name?this.getInitials(this.gs.globals?.userInfo?.name):"N/A"})}getInitials(n){var o=n.split(" "),i=o[0].substring(0,1).toUpperCase();return o.length>1&&(i+=o[o.length-1].substring(0,1).toUpperCase()),i}emitToggle(){this.toggleEvent.emit(!0)}logout(){localStorage.removeItem("tpd"),this.gs.globals.loggedIn=!1,this.gs.globals.userInfo="",this.gs.setGlobals(this.gs.globals)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.U))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-header"]],inputs:{menuCollapsed:"menuCollapsed"},outputs:{toggleEvent:"toggleEvent"},decls:27,vars:16,consts:[[1,"container-fluid"],[1,"row"],[1,"col-3","align-self-center"],[1,"aside-toggle","header-toggle",3,"click"],[1,"fa-solid","fa-bars"],[1,"col-9","text-end"],["ngbDropdown","",1,"d-inline-block"],["type","button","ngbDropdownToggle","",1,"btn","avatar"],["ngbDropdownMenu","",1,"w-auto","p-0","rounded-0"],[1,"bg-secondary","bg-pattern","text-center","p-3","text-white"],[1,"p-1","w-100","d-block"],[1,"fw-bolder","mb-2","d-block","py-3","rounded"],[1,"fs-14","d-block"],["ngbDropdownItem","",1,"btn-sm","py-3","fs-12","d-flex","justify-content-between","align-items-center",3,"click"],[1,"fw-bold","text-uppercase"],[1,"fa-solid","fa-arrow-right-from-bracket"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),e.NdJ("click",function(){return o.emitToggle()}),e._UZ(4,"i",4),e.qZA()(),e.TgZ(5,"div",5)(6,"div",6)(7,"button",7),e._uU(8),e.ALo(9,"uppercase"),e.qZA(),e.TgZ(10,"div",8)(11,"div",9)(12,"div",10)(13,"span",11),e._uU(14),e.ALo(15,"translate"),e.ALo(16,"titlecase"),e.qZA(),e.TgZ(17,"span",12),e._uU(18),e.ALo(19,"titlecase"),e.qZA(),e.TgZ(20,"span",12),e._uU(21),e.qZA()()(),e.TgZ(22,"button",13),e.NdJ("click",function(){return o.logout()}),e.TgZ(23,"span",14),e._uU(24),e.ALo(25,"translate"),e.qZA(),e._UZ(26,"i",15),e.qZA()()()()()()),2&n&&(e.xp6(8),e.hij(" ",e.lcZ(9,6,o.avatar)," "),e.xp6(6),e.AsE("",e.lcZ(15,8,"Labels.Welcome"),", ",e.lcZ(16,10,o.gs.globals.userInfo.username||"N/A"),""),e.xp6(4),e.Oqu(e.lcZ(19,12,o.gs.globals.userInfo.email||"N/A")),e.xp6(3),e.Oqu(o.gs.globals.userInfo.mobile||"N/A"),e.xp6(3),e.Oqu(e.lcZ(25,14,"Labels.Signout")))},dependencies:[r.jt,r.iD,r.Vi,r.TH,u.gd,u.rS,m.X$]}),t})();function h(t,s){1&t&&e._UZ(0,"i",26)}function Z(t,s){1&t&&e._UZ(0,"i",27)}const b=function(){return{exact:!0}};let v=(()=>{class t{constructor(){this.menuCollapsed=!1,this.toggleEvent=new e.vpe,this.menuCollapsed=this.menuCollapsed}checkScreenWidth(){window.innerWidth<=768&&this.emitToggle()}emitToggle(){this.toggleEvent.emit(!0)}mouseOverOut(){this.toggleEvent.emit(!0)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-aside"]],inputs:{menuCollapsed:"menuCollapsed"},outputs:{toggleEvent:"toggleEvent"},decls:51,vars:25,consts:[[1,"position-relative","text-center"],["src","assets/images/logo.png",1,"img-fluid","py-4","px-5","logo"],[1,"aside-toggle",3,"click"],["class","fa-solid fa-angles-left",4,"ngIf"],["class","fa-solid fa-angles-right",4,"ngIf"],[1,"navbar-nav","justify-content-end"],["routerLinkActive","active",1,"nav-item",3,"routerLinkActiveOptions"],["routerLink","/",1,"nav-link",3,"click"],[1,"menu-icon"],[1,"fa-solid","fa-chart-line"],[1,"menu-text"],["routerLinkActive","active",1,"nav-item"],["routerLink","/users",1,"nav-link",3,"click"],[1,"fa-solid","fa-users-gear"],["ngbDropdown","",1,"d-block"],["aria-current","page","ngbDropdownToggle","",1,"nav-link"],[1,"fa-solid","fa-people-line"],["ngbDropdownMenu","",1,"dropdown-menu"],["ngbDropdownItem","","routerLink","/roles",3,"click"],[1,"fa-solid","fa-list-ul"],["ngbDropdownItem","","routerLink","/roles/permissions",3,"click"],[1,"fa-solid","fa-person-circle-plus"],["routerLink","/reports",1,"nav-link",3,"click"],[1,"fa-regular","fa-paste"],["routerLink","/members",1,"nav-link",3,"click"],[1,"fa-solid","fa-users"],[1,"fa-solid","fa-angles-left"],[1,"fa-solid","fa-angles-right"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"button",2),e.NdJ("click",function(){return o.emitToggle()}),e.YNc(3,h,1,0,"i",3),e.YNc(4,Z,1,0,"i",4),e.qZA()(),e.TgZ(5,"ul",5)(6,"li",6)(7,"a",7),e.NdJ("click",function(){return o.checkScreenWidth()}),e.TgZ(8,"span",8),e._UZ(9,"i",9),e.qZA(),e.TgZ(10,"span",10),e._uU(11),e.ALo(12,"translate"),e.qZA()()(),e.TgZ(13,"li",11)(14,"a",12),e.NdJ("click",function(){return o.checkScreenWidth()}),e.TgZ(15,"span",8),e._UZ(16,"i",13),e.qZA(),e.TgZ(17,"span",10),e._uU(18),e.ALo(19,"translate"),e.qZA()()(),e.TgZ(20,"li",11)(21,"div",14)(22,"a",15)(23,"span",8),e._UZ(24,"i",16),e.qZA(),e.TgZ(25,"span",10),e._uU(26),e.ALo(27,"translate"),e.qZA()(),e.TgZ(28,"div",17)(29,"a",18),e.NdJ("click",function(){return o.checkScreenWidth()}),e._UZ(30,"i",19),e._uU(31),e.ALo(32,"translate"),e.qZA(),e.TgZ(33,"a",20),e.NdJ("click",function(){return o.checkScreenWidth()}),e._UZ(34,"i",21),e._uU(35),e.ALo(36,"translate"),e.qZA()()()(),e.TgZ(37,"li",11)(38,"a",22),e.NdJ("click",function(){return o.checkScreenWidth()}),e.TgZ(39,"span",8),e._UZ(40,"i",23),e.qZA(),e.TgZ(41,"span",10),e._uU(42),e.ALo(43,"translate"),e.qZA()()(),e.TgZ(44,"li",11)(45,"a",24),e.NdJ("click",function(){return o.checkScreenWidth()}),e.TgZ(46,"span",8),e._UZ(47,"i",25),e.qZA(),e.TgZ(48,"span",10),e._uU(49),e.ALo(50,"translate"),e.qZA()()()()),2&n&&(e.xp6(3),e.Q6J("ngIf",o.menuCollapsed),e.xp6(1),e.Q6J("ngIf",!o.menuCollapsed),e.xp6(2),e.Q6J("routerLinkActiveOptions",e.DdM(24,b)),e.xp6(5),e.Oqu(e.lcZ(12,10,"AsideMenu.Dashboard")),e.xp6(7),e.Oqu(e.lcZ(19,12,"AsideMenu.Users")),e.xp6(8),e.Oqu(e.lcZ(27,14,"AsideMenu.RolesPermissions")),e.xp6(5),e.hij(" ",e.lcZ(32,16,"AsideMenu.Roles"),""),e.xp6(4),e.hij(" ",e.lcZ(36,18,"AsideMenu.Permissions"),""),e.xp6(7),e.Oqu(e.lcZ(43,20,"AsideMenu.Reports")),e.xp6(7),e.Oqu(e.lcZ(50,22,"AsideMenu.Members")))},dependencies:[u.O5,r.jt,r.iD,r.Vi,r.TH,a.rH,a.Od,m.X$]}),t})();function A(t,s){if(1&t&&(e.TgZ(0,"li",6)(1,"a",7),e._uU(2),e.ALo(3,"titlecase"),e.qZA()()),2&t){const n=s.$implicit,o=s.last;e.xp6(1),e.ekj("disabled",o),e.Q6J("routerLink",n.url),e.xp6(1),e.Oqu(e.lcZ(3,4,null==n?null:n.name))}}let C=(()=>{class t{constructor(n,o,i){this.router=n,this.route=o,this.gs=i,this.getBreadcrumb()}getBreadcrumb(){this.gs.getBreadcrumb().subscribe(n=>{this.breadcrumb=n})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(a.F0),e.Y36(a.gz),e.Y36(c.U))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-breadcrumb"]],decls:6,vars:1,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12"],["aria-label","breadcrumb"],[1,"breadcrumb"],["class","breadcrumb-item",4,"ngFor","ngForOf"],[1,"breadcrumb-item"],[3,"routerLink"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"nav",3)(4,"ol",4),e.YNc(5,A,4,6,"li",5),e.qZA()()()()()),2&n&&(e.xp6(5),e.Q6J("ngForOf",o.breadcrumb))},dependencies:[u.sg,a.rH,u.rS]}),t})();const T=[{path:"",component:(()=>{class t{constructor(n,o){this.gs=n,this.router=o,this.menuCollapsed=!1,this.getGlobals()}getGlobals(){this.gs.getGlobals().subscribe(n=>{this.gs.globals=n,this.gs.globals.loggedIn||this.router.navigate(["/auth"])})}toggleMenu(n){this.menuCollapsed=!this.menuCollapsed}ngAfterViewInit(){document.querySelector(".page-loader")?.classList.add("d-none")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(c.U),e.Y36(a.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-layout"]],decls:9,vars:4,consts:[[1,"layout"],[1,"aside"],[3,"menuCollapsed","toggleEvent"],[1,"aside-backdrop",3,"click"],[1,"content"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"app-aside",2),e.NdJ("toggleEvent",function(d){return o.toggleMenu(d)}),e.qZA(),e.TgZ(3,"div",3),e.NdJ("click",function(d){return o.toggleMenu(d)}),e.qZA()(),e.TgZ(4,"div",4)(5,"app-header",2),e.NdJ("toggleEvent",function(d){return o.toggleMenu(d)}),e.qZA(),e._UZ(6,"app-breadcrumb"),e.TgZ(7,"main"),e._UZ(8,"router-outlet"),e.qZA()()()),2&n&&(e.xp6(1),e.ekj("collapsed-aside",o.menuCollapsed),e.xp6(1),e.Q6J("menuCollapsed",o.menuCollapsed),e.xp6(3),e.Q6J("menuCollapsed",o.menuCollapsed))},dependencies:[a.lC,f,v,C]}),t})(),children:[{path:"",loadChildren:()=>l.e(581).then(l.bind(l,2581)).then(t=>t.DashboardModule)},{path:"reports",loadChildren:()=>l.e(648).then(l.bind(l,648)).then(t=>t.ReportsModule)},{path:"users",loadChildren:()=>Promise.all([l.e(145),l.e(249)]).then(l.bind(l,6249)).then(t=>t.UsersModule)},{path:"roles",loadChildren:()=>Promise.all([l.e(145),l.e(402)]).then(l.bind(l,5402)).then(t=>t.RolesModule)},{path:"members",loadChildren:()=>l.e(87).then(l.bind(l,5087)).then(t=>t.MembersModule)},{path:"**",component:g}]},{path:"not-found",component:g}];let k=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(T),a.Bz]}),t})();var L=l(6208);let y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,k,L.m]}),t})()}}]);