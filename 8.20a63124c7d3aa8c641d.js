(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{F4UR:function(o,n,r){"use strict";r.r(n),r.d(n,"LoginModule",(function(){return v}));var t=r("3Pt+"),e=r("fXoL"),i=r("tyNb"),a=r("ocnv"),c=r("B+r4"),m=r("PTRe"),b=r("TaO5"),s=r("OzZK"),l=r("RwU8"),u=r("C2AL");let p=(()=>{class o{constructor(o,n,r){this.fb=o,this.route=n,this.router=r}submitForm(){for(const o in this.validateForm.controls)this.validateForm.controls[o].markAsDirty(),this.validateForm.controls[o].updateValueAndValidity()}ngOnInit(){this.validateForm=this.fb.group({userName:[null,[t.p.required]],password:[null,[t.p.required]],remember:[!0]})}login(o){"admin"==this.validateForm.value.userName&&"admin"==this.validateForm.value.password?(alert("Success!"),this.router.navigate(["/caculator"],{relativeTo:this.route})):alert("Fail!")}}return o.\u0275fac=function(n){return new(n||o)(e.Ob(t.d),e.Ob(i.a),e.Ob(i.d))},o.\u0275cmp=e.Ib({type:o,selectors:[["app-welcome"],["nz-demo-form-normal-login"]],decls:26,vars:4,consts:[[1,"row"],[1,"col-sm-4"],["nz-form","",1,"login-form",3,"formGroup","ngSubmit"],["nzErrorTip","Please input your username!"],["nzPrefixIcon","user"],["type","text","nz-input","","formControlName","userName","placeholder","Username"],["nzErrorTip","Please input your Password!"],["nzPrefixIcon","lock"],["type","password","nz-input","","formControlName","password","placeholder","Password"],["nz-row","",1,"login-form-margin"],["nz-col","",3,"nzSpan"],["nz-checkbox","","formControlName","remember"],[1,"login-form-forgot"],["nz-button","",1,"login-form-button","login-form-margin",3,"nzType","click"],["href","/register   "]],template:function(o,n){1&o&&(e.Ub(0,"div",0),e.Pb(1,"div",1),e.Ub(2,"div",1),e.Ub(3,"form",2),e.cc("ngSubmit",(function(){return n.submitForm()})),e.Ub(4,"nz-form-item"),e.Ub(5,"nz-form-control",3),e.Ub(6,"nz-input-group",4),e.Pb(7,"input",5),e.Tb(),e.Tb(),e.Tb(),e.Ub(8,"nz-form-item"),e.Ub(9,"nz-form-control",6),e.Ub(10,"nz-input-group",7),e.Pb(11,"input",8),e.Tb(),e.Tb(),e.Tb(),e.Ub(12,"div",9),e.Ub(13,"div",10),e.Ub(14,"label",11),e.Ub(15,"span"),e.Hc(16,"Remember me"),e.Tb(),e.Tb(),e.Tb(),e.Ub(17,"div",10),e.Ub(18,"a",12),e.Hc(19,"Forgot password"),e.Tb(),e.Tb(),e.Tb(),e.Ub(20,"button",13),e.cc("click",(function(o){return n.login(o)})),e.Hc(21,"Log in"),e.Tb(),e.Hc(22," Or "),e.Ub(23,"a",14),e.Hc(24," register now! "),e.Tb(),e.Tb(),e.Tb(),e.Pb(25,"div",1),e.Tb()),2&o&&(e.Ab(3),e.nc("formGroup",n.validateForm),e.Ab(10),e.nc("nzSpan",12),e.Ab(4),e.nc("nzSpan",12),e.Ab(3),e.nc("nzType","primary"))},directives:[t.q,t.l,a.b,t.g,c.c,a.c,c.a,a.a,m.c,m.b,t.c,t.k,t.f,b.a,s.a,l.a,u.a],styles:[".login-form[_ngcontent-%COMP%]{max-width:300px}.login-form-margin[_ngcontent-%COMP%]{margin-bottom:16px}.login-form-forgot[_ngcontent-%COMP%]{float:right}.login-form-button[_ngcontent-%COMP%]{width:100%}"]}),o})();var d=r("Etcd"),f=r("ofXK"),g=r("0nng"),z=r("FwiY");const T=[{path:"",component:p}];let v=(()=>{class o{}return o.\u0275mod=e.Mb({type:o}),o.\u0275inj=e.Lb({factory:function(n){return new(n||o)},imports:[[i.g.forChild(T),d.c,f.c,a.e,g.a,t.o,z.c],i.g]}),o})()}}]);