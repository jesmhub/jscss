webpackJsonp([2],{"51WS":function(t,e){},mZlW:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("Xxa5"),i=s.n(r),a=s("exGp"),n=s.n(a),o=s("Dd8w"),l=s.n(o),c=s("0xDb"),u=s("NYxO"),f={components:{baseImage:s("J9nj").a},data:function(){return{artistList:[],activeNav:0,ad:[]}},computed:l()({},Object(u.d)(["isShowAd"])),mounted:function(){this.initData(),this.$refs.artistList.addEventListener("scroll",this._onScrollArtist)},created:function(){this._onScrollArtist=Object(c.d)(this.onScrollArtist,200)},beforeDestroy:function(){this.$refs.artistList.removeEventListener("scroll",this._onScrollArtist)},methods:{goArtistDetails:function(t){this.$router.push({name:"artist-details",query:{artistId:t.id}})},navJump:function(t){var e=document.querySelectorAll(".artist-letter");if(e[t]){var s=e[t];document.querySelector(".artist-list").scrollTo(0,s.offsetTop-s.offsetHeight)}},onScrollArtist:function(){for(var t=document.querySelector(".artist-list").scrollTop,e=document.querySelector(".artist-letter").offsetHeight,s=document.querySelectorAll(".artist-list>li"),r=0;r<s.length;r++){var i=s[r];if(t<=i.offsetHeight+i.offsetTop-e-5){this.activeNav=r;break}}},initData:function(){var t=this;return n()(i.a.mark(function e(){var s,r,a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request({url:"/api/videoartist"});case 2:s=e.sent,r=s.rescont,a=r.hotArtist,(n=r.allArtist).unshift({letter:"人氣女優",list:a}),t.artistList=n,t.ad=s.rescont.adList;case 7:case"end":return e.stop()}},e,t)}))()}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"artist"},[s("ul",{ref:"artistList",staticClass:"artist-list"},t._l(t.artistList,function(e,r){return s("li",{key:e.letter},[s("p",{staticClass:"artist-letter"},[t._v(t._s(e.letter))]),t._v(" "),s("ul",{staticClass:"artist-list-box"},t._l(e.list,function(e){return s("li",{key:e.id,on:{click:function(s){return t.goArtistDetails(e)}}},[s("base-image",{staticClass:"artist-list-box-img",attrs:{url:e.imagebase64.url,type:e.imagebase64.type,encrypt:"",round:""}}),t._v(" "),s("p",[t._v(t._s(e.artist))])],1)}),0),t._v(" "),0===r&&t.ad.length>0?s("a",{directives:[{name:"show",rawName:"v-show",value:t.isShowAd,expression:"isShowAd"}],attrs:{href:t.ad[0].url,target:"_blank"}},[s("base-image",{staticStyle:{width:"100%","margin-bottom":"15px"},attrs:{url:t.ad[0].imgbase64.url,type:t.ad[0].imgbase64.type,height:"25vw",encrypt:""}})],1):t._e()])}),0),t._v(" "),s("ul",{staticClass:"artist-nav"},t._l(t.artistList,function(e,r){return s("li",{key:e.letter,class:{active:t.activeNav===r},on:{click:function(e){return t.navJump(r)}}},[s("span",[t._v(t._s(e.letter.substr(0,1)))])])}),0)])},staticRenderFns:[]};var v=s("VU/8")(f,d,!1,function(t){s("51WS")},"data-v-37722578",null);e.default=v.exports}});
//# sourceMappingURL=2.45051cabcc56d987a656.js.map