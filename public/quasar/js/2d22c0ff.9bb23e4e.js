(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22c0ff"],{f241:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"lHr lpR lFr"}},[e("q-header",{staticClass:"bg-primary text-white",attrs:{elevated:"","height-hint":"98"}},[e("q-toolbar",[e("q-btn",{attrs:{dense:"",round:"",icon:"menu",behavior:"mobile"},on:{click:function(a){t.rightDrawer=!t.rightDrawer}}}),e("q-btn",{staticClass:"q-ma-md",attrs:{to:"/"}},[e("q-toolbar-title",[e("q-icon",{attrs:{name:"home"}}),t._v("\n          "+t._s(t.appName)+"\n        ")],1)],1),e("locale-dropdown"),e("q-btn",{attrs:{dense:"",round:"",icon:"menu"},on:{click:function(a){t.leftDrawerOpen=!t.leftDrawerOpen}}})],1)],1),e("q-drawer",{attrs:{side:"right",behavior:"mobile",bordered:"","content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(a){t.leftDrawerOpen=a},expression:"leftDrawerOpen"}}),e("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-2"},model:{value:t.rightDrawer,callback:function(a){t.rightDrawer=a},expression:"rightDrawer"}},[e("q-img",{staticClass:"absolute-top",staticStyle:{height:"150px"},attrs:{src:"https://cdn.quasar.dev/img/material.png"}},[e("div",{staticClass:"absolute-bottom bg-transparent text-center"},[t.user?[e("q-avatar",{staticClass:"q-mb-sm",attrs:{size:"70px"}},[e("img",{attrs:{src:t.user.new.avatar}})]),e("div",{staticClass:"text-weight-bold"},[t._v(t._s(t.user.name))]),e("div",[t._v(t._s(t.user.email))])]:t._e()],2)]),e("q-scroll-area",{staticStyle:{height:"calc(100% - 150px)","margin-top":"150px","border-right":"1px solid #ddd"}},[e("q-list",[e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://quasar.dev"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"school"}})],1),e("q-item-section",[e("q-item-label",[t._v("Docs")]),e("q-item-label",{attrs:{caption:""}},[t._v("quasar.dev")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://github.quasar.dev"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"code"}})],1),e("q-item-section",[e("q-item-label",[t._v("Github")]),e("q-item-label",{attrs:{caption:""}},[t._v("github.com/quasarframework")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://chat.quasar.dev"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"chat"}})],1),e("q-item-section",[e("q-item-label",[t._v("Discord Chat Channel")]),e("q-item-label",{attrs:{caption:""}},[t._v("chat.quasar.dev")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://forum.quasar.dev"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"record_voice_over"}})],1),e("q-item-section",[e("q-item-label",[t._v("Forum")]),e("q-item-label",{attrs:{caption:""}},[t._v("forum.quasar.dev")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://twitter.quasar.dev"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"rss_feed"}})],1),e("q-item-section",[e("q-item-label",[t._v("Twitter")]),e("q-item-label",{attrs:{caption:""}},[t._v("@quasarframework")])],1)],1),e("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://facebook.quasar.dev"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"public"}})],1),e("q-item-section",[e("q-item-label",[t._v("Facebook")]),e("q-item-label",{attrs:{caption:""}},[t._v("@QuasarFramework")])],1)],1),e("q-item",{attrs:{clickable:"",to:"/block_chain"}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:"money"}})],1),e("q-item-section",[e("q-item-label",[t._v("BlockChain")]),e("q-item-label",{attrs:{caption:""}},[t._v("@QuasarFramework")])],1)],1)],1),t.user?e("div",{staticClass:"q-pa-md"},[e("q-btn",{attrs:{icon:"lock_open",label:t.$t("logout")},on:{click:function(a){return a.preventDefault(),t.logout(a)}}})],1):e("div",{staticClass:"q-pa-md"},[e("q-btn",{attrs:{icon:"vpn_key",label:t.$t("login"),to:{name:"public.login"}}}),e("q-btn",{attrs:{icon:"add_to_queue",label:t.$t("register"),to:{name:"public.register"}}})],1)],1)],1),e("q-page-container",[e("router-view")],1),e("q-footer",{attrs:{elevated:""}},[e("q-toolbar",[e("q-toolbar-title",[e("q-avatar",[e("img",{attrs:{src:"https://cdn.quasar.dev/logo/svg/quasar-logo.svg"}})]),t._v("\n        MoDemb.com Quasar v"+t._s(t.$q.version)+"\n      ")],1)],1)],1),e("q-ajax-bar")],1)},o=[],s=e("967e"),i=e.n(s),n=(e("96cf"),e("fa84")),c=e.n(n),l=e("b06b"),m=e("7ea5"),u=e("2f62"),b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"q-pa-md"},[e("q-btn-dropdown",{attrs:{color:"primary",label:t.locales[t.locale]}},[e("q-list",t._l(t.locales,(function(a,r){return e("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:r,attrs:{clickable:""},on:{click:function(a){return a.preventDefault(),t.setLocale(r)}}},[e("q-item-section",[e("q-item-label",[t._v(t._s(a))])],1)],1)})),1)],1)],1)},p=[],q={computed:Object(u["b"])({locale:"config/localeGetter",locales:"config/localesGetter"}),methods:{setLocale:function(t){this.$i18n.locale!==t&&this.$store.dispatch("config/configAction",t)}}},v=q,d=e("2877"),h=e("f20b"),g=e("1c1c"),f=e("66e5"),_=e("4074"),w=e("0170"),k=e("7f67"),Q=Object(d["a"])(v,b,p,!1,null,null,null),D=Q.exports;Q.options.components=Object.assign({QBtnDropdown:h["a"],QList:g["a"],QItem:f["a"],QItemSection:_["a"],QItemLabel:w["a"]},Q.options.components),Q.options.directives=Object.assign({ClosePopup:k["a"]},Q.options.directives);var x={openURL:l["a"],data:function(){return{leftDrawerOpen:!1,rightDrawer:!1}},components:{QAjaxBar:m["a"],LocaleDropdown:D},computed:Object(u["b"])({user:"users/authGetter",appName:"config/appNameGetter"}),methods:{logout:function(){var t=c()(i.a.mark((function t(){var a=this;return i.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$store.dispatch("users/logoutAction",this.user).then((function(){a.$router.push({name:"public.login"})}));case 1:case"end":return t.stop()}}),t,this)})));function a(){return t.apply(this,arguments)}return a}()}},C=x,O=e("4d5a"),y=e("e359"),j=e("65c6"),$=e("9c40"),L=e("6ac5"),I=e("0016"),A=e("9404"),F=e("068f"),B=e("cb32"),G=e("4983"),S=e("09e3"),N=e("7ff0"),T=Object(d["a"])(C,r,o,!1,null,"59664487",null);a["default"]=T.exports;T.options.components=Object.assign({QLayout:O["a"],QHeader:y["a"],QToolbar:j["a"],QBtn:$["a"],QToolbarTitle:L["a"],QIcon:I["a"],QDrawer:A["a"],QImg:F["a"],QAvatar:B["a"],QScrollArea:G["a"],QList:g["a"],QItem:f["a"],QItemSection:_["a"],QItemLabel:w["a"],QPageContainer:S["a"],QFooter:N["a"],QAjaxBar:m["a"]},T.options.components)}}]);