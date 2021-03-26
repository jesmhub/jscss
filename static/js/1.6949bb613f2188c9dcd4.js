webpackJsonp([1], {
    "6fak": function (t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASBAMAAACQmVJ4AAAAHlBMVEUAAAD60A36zw3yzA3/zQ700wvzzgz7zw35zw76zw4Ib/4mAAAACXRSTlMAz9QUEhcVyd/WfsD8AAAAL0lEQVQI12OAgHIDEFkpDCKTJoI4bJq4OQ1AkhVMBk10ADFFsDAZJEXAJgOZUAAAcQcLTwXUGM4AAAAASUVORK5CYII="
    },
    BPCO: function (t, s) {},
    JiVG: function (t, s, e) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var i = e("Xxa5"),
        a = e.n(i),
        l = e("exGp"),
        n = e.n(l),
        r = e("0xDb"),
        c = {
            components: {
                baseImage: e("J9nj").a
            },
            data: function () {
                return {
                    videoList: "",
                    allNum: 0,
                    gdIsShow: !0,
                    navShow: !1,
                    navTitle: "",
                    details: {
                        artist: "-",
                        birthday: "1990-08-14 00:00:00",
                        country: "-",
                        cup: "-",
                        desc: "-",
                        height: 163,
                        id: 1,
                        imagebase64: {},
                        image: "",
                        measurement: ""
                    },
                    page: 1,
                    loading: !1,
                    total: 0
                }
            },
            mounted: function () {
                var t = this;
                return n()(a.a.mark(function s() {
                        return a.a.wrap(function (s) {
                            for (; ; )
                                switch (s.prev = s.next) {
                                case 0:
                                    return window.addEventListener("scroll", t._handleScroll),
                                    s.next = 3,
                                    t.getVideoList();
                                case 3:
                                case "end":
                                    return s.stop()
                                }
                        }, s, t)
                    }))()
            },
            created: function () {
                this._handleScroll = Object(r.a)(this.handleScroll, 500)
            },
            beforeDestroy: function () {
                window.removeEventListener("scroll", this._handleScroll)
            },
            methods: {
                onScrollGirlsDetails: function () {
                    console.log(this.$refs.girlsDetails.scrollTop, this.$refs.girlsDetails.scrollHeight)
                },
                handleScroll: function () {
                    var t = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                    s = document.documentElement.scrollHeight,
                    e = document.documentElement.offsetHeight,
                    i = t - this.i;
                    this.i = t,
                    console.log("scrollTop", t, s, e),
                    t + e > s - .2 * e && this.getVideoList(),
                    i < 0 ? t <= 44 && (this.navShow = !1, this.navTitle = "") : t >= 44 && (this.navShow = !0, this.navTitle = this.details.artist)
                },
                getVideoList: function () {
                    var t = this;
                    return n()(a.a.mark(function s() {
                            var e;
                            return a.a.wrap(function (s) {
                                for (; ; )
                                    switch (s.prev = s.next) {
                                    case 0:
                                        if (!t.loading) {
                                            s.next = 2;
                                            break
                                        }
                                        return s.abrupt("return");
                                    case 2:
                                        if (!(0 !== t.total && t.total <= t.videoList.length)) {
                                            s.next = 4;
                                            break
                                        }
                                        return s.abrupt("return");
                                    case 4:
                                        return t.loading = !0,
                                        s.next = 7,
                                        t.request({
                                            url: "/api/artistDetail?artistId=" + t.$route.query.artistId + "&page=" + t.page
                                        });
                                    case 7:
                                        (e = s.sent).rescont && (t.videoList = 1 === t.page ? e.rescont.videoList.data : t.videoList.concat(e.rescont.videoList.data), t.total = e.rescont.videoList.total, t.details = e.rescont, t.page = t.page + 1),
                                        t.loading = !1;
                                    case 10:
                                    case "end":
                                        return s.stop()
                                    }
                            }, s, t)
                        }))()
                },
                itemChange: function (t) {
                    try {
                        this.$router.push({
                            path: "/playVideo",
                            query: {
                                id: t.id
                            }
                        })
                    } catch (t) {}
                },
                gdfun: function () {
                    this.gdIsShow ? this.gdIsShow = !1 : this.gdIsShow = !0
                },
                backFun: function () {
                    this.$router.back()
                }
            }
        },
        o = {
            render: function () {
                var t = this,
                s = t.$createElement,
                i = t._self._c || s;
                return i("div", {
                    ref: "girlsDetails",
                    staticClass: "girlsDetails-content"
                }, [i("div", {
                            staticClass: "girlsDetails-back-box",
                            class: {
                                backActive: t.navShow
                            }
                        }, [i("div", {
                                    staticClass: "girlsDetails-back",
                                    on: {
                                        click: t.backFun
                                    }
                                }, [i("img", {
                                            attrs: {
                                                src: e("Vyz7")
                                            }
                                        })]), t._v("\n    " + t._s(t.navTitle) + "\n  ")]), t._v(" "), i("img", {
                            staticClass: "girlsDetails-head-img",
                            attrs: {
                                src: e("e9tV")
                            }
                        }), t._v(" "), i("div", {
                            staticClass: "girlsDetails-cell"
                        }, [i("div", {
                                    staticClass: "girlsDetails-head-content"
                                }, [i("div", {
                                            staticClass: "girlsDetails-head-box"
                                        }, [i("div", {
                                                    staticClass: "girlsDetails-head-container"
                                                }, [i("base-image", {
                                                            staticClass: "girlsDetails-head",
                                                            attrs: {
                                                                url: t.details.imagebase64.url,
                                                                type: t.details.imagebase64.type,
                                                                encrypt: "",
                                                                round: ""
                                                            }
                                                        })], 1), t._v(" "), i("p", {
                                                    staticClass: "girlsDetails-head-name"
                                                }, [t._v(t._s(t.total) + "部影片")])]), t._v(" "), i("div", {
                                            staticClass: "girlsDetails-cell"
                                        }, [i("span", {
                                                    staticClass: "girlsDetails-name"
                                                }, [t._v(t._s(t.details.artist))]), t._v(" "), i("span", {
                                                    staticClass: "girlsDetails-sr-font"
                                                }, [t._v(t._s(t.details.birthday))])])])]), t._v(" "), i("div", {
                            staticClass: "girlsDetails-cntent-box"
                        }, [i("div", {
                                    staticClass: "girlsDetails-cell"
                                }, [i("span", {
                                            staticClass: "girlsDetails-sr-font"
                                        }, [t._v("身高：" + t._s(t.details.height) + "cm")]), t._v(" "), i("span", {
                                            staticClass: "girlsDetails-sr-font"
                                        }, [t._v("三圍：" + t._s(t.details.measurement) + "cm")]), t._v(" "), i("span", {
                                            staticClass: "girlsDetails-sr-font"
                                        }, [t._v(t._s(t.details.cup) + "杯")])]), t._v(" "), i("div", {
                                    staticClass: "girlsDetails-xx-content"
                                }, [i("div", {
                                            staticClass: "title"
                                        }, [t._v("簡介")]), t._v(" "), i("p", {
                                            class: {
                                                avtive: t.gdIsShow
                                            }
                                        }, [t._v(t._s(t.details.desc))]), t._v(" "), i("div", {
                                            staticClass: "girlsDetails-xx-content-item",
                                            on: {
                                                click: function (s) {
                                                    return t.gdfun()
                                                }
                                            }
                                        }, [t._v("\n        更多\n        "), i("img", {
                                                    attrs: {
                                                        src: e("6fak"),
                                                        alt: ""
                                                    }
                                                })])])]), t._v(" "), i("div", {
                            staticClass: "girlsDetails-view-box"
                        }, [i("div", {
                                    staticClass: "girlsDetails-title"
                                }, [t._v("相關影集")]), t._v(" "), i("ul", {
                                    staticClass: "girlsDetails-view"
                                }, t._l(t.videoList, function (s, e) {
                                        return i("li", {
                                            key: e,
                                            staticClass: "girlsDetails-view-cell",
                                            on: {
                                                click: function (e) {
                                                    return t.itemChange(s)
                                                }
                                            }
                                        }, [i("base-image", {
                                                    staticClass: "girlsDetails-view-img",
                                                    attrs: {
                                                        url: s.coverbase64.url,
                                                        type: s.coverbase64.type,
                                                        encrypt: ""
                                                    }
                                                }), t._v(" "), i("p", {
                                                    staticClass: "girlsDetails-video-title"
                                                }, [t._v(t._s(s.title))])], 1)
                                    }), 0), t._v(" "), t.loading ? i("van-loading", {
                                    attrs: {
                                        size: "24px"
                                    }
                                }, [t._v("加载中...")]) : t._e()], 1)])
            },
            staticRenderFns: []
        };
        var d = e("VU/8")(c, o, !1, function (t) {
            e("BPCO")
        }, "data-v-1ff811e8", null);
        s.default = d.exports
    },
    Vyz7: function (t, s) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABICAMAAACz1EcFAAAAhFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8g2+bRAAAAK3RSTlMABAER+5bPoAqqDvfGvq09CMul5tbAubSbkY2GemxmWlQV0YuAdnJiXxcqAG1rOQAAAQJJREFUSMet1tmuglAMhWHUA6iIeJzned7v/34aY1xc/TQpvf5CYG/arshQrVZkqSIJISmq3T4L78qKSvcXPpVXuN3Xhczowgjd/edCTO4mN6YT2ga5h80dD+A2conV0ftd5f7JXYxuLdfr1uDOchNyq5Jr21xO7iQ3BddcltwA3EJuRi4uuYbN9cnNba6RynXqcEO5IbmOXFqH68vNm+ByuRhce4RO1ZNbkBvILclFT/UbKH4iv6P/q/kc+Wacd82S/0eWKUjsBX8Xcl/zpPDPHp5mPB/9E5dnOG8F/55hybvQv115X3MCcGYKTimce7q+JMXZjGXmyI+QSB0Zl1Mz1wt3e3hzOS9bfQAAAABJRU5ErkJggg=="
    },
    e9tV: function (t, s, e) {
        t.exports = "https://cdn.jsdelivr.net/gh/jesmhub/jscss/" + "static/img/nyhead.afa3da3.png"
    }
});
//# sourceMappingURL=1.6949bb613f2188c9dcd4.js.map
