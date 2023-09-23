var $jscomp = $jscomp || {}; $jscomp.scope = {}; $jscomp.ASSUME_ES5 = !1; $jscomp.ASSUME_NO_NATIVE_MAP = !1; $jscomp.ASSUME_NO_NATIVE_SET = !1; $jscomp.SIMPLE_FROUND_POLYFILL = !1; $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (b, e, f) { b != Array.prototype && b != Object.prototype && (b[e] = f.value) }; $jscomp.getGlobal = function (b) { return "undefined" != typeof window && window === b ? b : "undefined" != typeof global && null != global ? global : b }; $jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function (b, e, f, l) { if (e) { f = $jscomp.global; b = b.split("."); for (l = 0; l < b.length - 1; l++) { var h = b[l]; h in f || (f[h] = {}); f = f[h] } b = b[b.length - 1]; l = f[b]; e = e(l); e != l && null != e && $jscomp.defineProperty(f, b, { configurable: !0, writable: !0, value: e }) } };
$jscomp.polyfill("Array.from", function (b) { return b ? b : function (b, f, l) { f = null != f ? f : function (b) { return b }; var h = [], e = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator]; if ("function" == typeof e) { b = e.call(b); for (var n = 0; !(e = b.next()).done;)h.push(f.call(l, e.value, n++)) } else for (e = b.length, n = 0; n < e; n++)h.push(f.call(l, b[n], n)); return h } }, "es6", "es3");
$jscomp.findInternal = function (b, e, f) { b instanceof String && (b = String(b)); for (var l = b.length, h = 0; h < l; h++) { var u = b[h]; if (e.call(f, u, h, b)) return { i: h, v: u } } return { i: -1, v: void 0 } }; $jscomp.polyfill("Array.prototype.find", function (b) { return b ? b : function (b, f) { return $jscomp.findInternal(this, b, f).v } }, "es6", "es3");
(function () {
    function b(a) { "loading" != document.readyState ? a() : document.addEventListener("DOMContentLoaded", a) } function e(a) { a.target.h.closest(".mbr-slider").classList.contains("in") && a.target.playVideo() } function f(a) { if (a) return a != document && a.matches(".mbr-gallery") ? !0 : !1 } function l(a, g) { var c = Array.from(a.querySelectorAll(g)); a.matches && a.matches(g) && c.splice(0, 0, a); return c } function h(a) {
        a = a ? a.target : document.body; w || "undefined" === typeof Masonry || (w = !0, l(a, ".mbr-gallery").forEach(function (a) {
            var c =
                a.querySelector(".mbr-gallery-row"); if (c) imagesLoaded(c).on("progress", function (a, g) { var d = new Masonry(c, { itemSelector: ".mbr-gallery-item:not(.mbr-gallery-item__hided)", percentPosition: !0, horizontalOrder: !0 }); d.reloadItems(); c.addEventListener("filter", function () { d.reloadItems(); d.layout(); window.dispatchEvent(new CustomEvent("update.parallax")) }.bind(this, c)); imagesLoaded(c).on("progress", function () { d.layout() }) })
        }), document.querySelectorAll(".row.mbr-masonry").forEach(function (a) {
            if (a.querySelectorAll("img").length) imagesLoaded(a).on("progress",
                function (c, g) { var d = new Masonry(a, {}); d.reloadItems(); imagesLoaded(a).on("progress", function () { d.layout() }) }); else { var c = new Masonry(a, {}); c.reloadItems(); c.layout() }
        }), setTimeout(function () { w = !1 }, 1500))
    } function u(a, g, c, d, b) { var m = a.querySelector("img"); m.complete && 50 < m.naturalWidth && 50 < m.naturalHeight ? n(m, a, g, c, d, b) : m.addEventListener("load", function () { n(m, a, g, c, d, b) }, { once: !0 }) } function n(a, g, c, d, b, m) {
        var t = a.naturalWidth, f = a.naturalHeight; d = d / c > t / f ? (c - 2 * m) * t / f : d - 2 * m; d = d >= t ? t : d; c = (c - d * f / t) / 2; a.style.width =
            parseInt(d) + "px"; a.style.height = d * f / t + "px"; g.style.top = c + b + "px"; "flex" == getComputedStyle(g.parentElement, null).display && (g.parentElement.style.display = "block")
    } function C(a, g, c, d, b, m) {
        a.querySelector(".modal-dialog").querySelectorAll(".carousel-item").forEach(function (a) {
            if (!m && !a.classList.contains("carousel-item-next") && !a.classList.contains("carousel-item-prev") || m && !a.classList.contains("active")) a.classList.contains("video-container") ? (a.style.top = d + "px", a.style.height = c - 2 * d - 2 * b + "px") : u(a, c,
                g, d, b)
        })
    } function x() { var a = window.innerWidth - 0, g = window.innerHeight - 0; if (r) { var c = !1; if (r.querySelector(".modal-dialog").querySelector(".carousel-item.carousel-item-next")) var b = r.querySelector(".modal-dialog").querySelector(".carousel-item.carousel-item-next"); else b = r.querySelector(".modal-dialog").querySelector(".carousel-item.active"), c = !0; b.classList.contains("video-container") ? (b.style.top = "0px", b.style.height = g - 0 - 20 + "px") : u(b, g, a, 0, 10); clearTimeout(y); y = setTimeout(C, 200, r, a, g, 0, 10, c) } } var w =
        !1, k, p = "function" == typeof jQuery; p && (k = jQuery); var q; p ? q = k("html").hasClass("is-builder") : q = document.querySelector("html").classList.contains("is-builder"); if (!q) {
            var z = document.createElement("script"); z.src = "https://www.youtube.com/iframe_api"; var A = document.getElementsByTagName("script")[0]; A.parentNode.insertBefore(z, A); var v = []; document.querySelectorAll(".carousel-item.video-container > img").forEach(function (a) { return a.style.display = "none" }); window.onYouTubeIframeAPIReady = function () {
                var a = a ||
                    {}; a.YTAPIReady || (a.YTAPIReady = !0, document.dispatchEvent(new CustomEvent("YTAPIReady"))); document.querySelectorAll(".video-slide").forEach(function (a, c) {
                        var b = document.createElement("div"); b.setAttribute("id", "mbr-video-" + c); b.setAttribute("data-video-num", c); b.classList.add("mbr-background-video"); var g = document.createElement("div"); b.classList.add("item-overlay"); document.querySelectorAll(".video-container")[c].appendChild(b).appendChild(g); a.setAttribute("data-video-num", c); -1 !== a.getAttribute("data-video-url").indexOf("vimeo.com") ?
                            (b = { id: a.getAttribute("data-video-url"), width: "100%", height: "100%", loop: !0 }, c = new Vimeo.Player("mbr-video-" + c, b), c.playVideo = Vimeo.play) : (b = YT.Player, a = a.getAttribute("data-video-url"), a = "false" === a ? !1 : (a = /(?:\?v=|\/embed\/|\.be\/)([-a-z0-9_]+)/i.exec(a) || /^([-a-z0-9_]+)$/i.exec(a)) ? a[1] : !1, c = new b("mbr-video-" + c, { height: "100%", width: "100%", videoId: a, events: { onReady: e }, playerVars: { rel: 0 } })); v.push(c)
                    })
            }
        } if (p) k(document).on("add.cards", function (a) {
            var b = k(a.target); f(a.target) && (b.on("click", ".mbr-gallery-filter li",
                function (a) {
                    a.preventDefault(); var c = k(this).closest("li"); c.parent().find("li").removeClass("active"); c.addClass("active"); a = c.closest("section").find(".mbr-gallery-row"); var g = k(this)[0].textContent.trim(); b.find(".mbr-gallery-item").each(function (a, b) {
                        a = k(this); b = a.attr("data-tags").split(",").map(function (a) { return a.trim() }); -1 !== k.inArray(g, b) || c.hasClass("mbr-gallery-filter-all") ? (a.removeClass("mbr-gallery-item__hided"), a.css("left", "0")) : (a.addClass("mbr-gallery-item__hided"), a.css("left",
                            "300px"))
                    }); a.closest(".mbr-gallery-row")[0].dispatchEvent(new CustomEvent("filter"))
                }), (a = a.target.querySelector(".modal")) && a.addEventListener("show.bs.modal", function (a) { return a.preventDefault() }))
        }); if (q) k(document).on("changeButtonColor.cards", function (a) {
            var b = k(a.target); if (0 < b.find(".mbr-gallery-filter").length && k(a.target).find(".mbr-gallery-filter").hasClass("gallery-filter-active")) {
                var c = (b.find(".mbr-gallery-filter .mbr-gallery-filter-all").find("a").attr("class") || "").replace(/(^|\s)active(\s|$)/,
                    " ").trim(); b.find(".mbr-gallery-filter ul li:not(.mbr-gallery-filter-all) a").attr("class", c)
            } h(a)
        }); if (p) k(document).on("add.cards changeParameter.cards", function (a) {
            var b = k(a.target), c = []; if (f(a.target)) {
                b.find(".mbr-gallery-item").each(function (a) { (k(this).attr("data-tags") || "").trim().split(",").map(function (a) { a = a.trim(); -1 === k.inArray(a, c) && c.push(a) }) }); if (0 < b.find(".mbr-gallery-filter").length && k(a.target).find(".mbr-gallery-filter").hasClass("gallery-filter-active")) {
                    var d = ""; b.find(".mbr-gallery-filter ul li:not(.mbr-gallery-filter-all)").remove();
                    var e = b.find(".mbr-gallery-filter .mbr-gallery-filter-all").clone(); e.find("a").removeClass("active"); c.map(function (a) { e.find("a").length ? e.find("a").text(a) : e.text(a); d += "<li>" + e.html() + "</li>" }); e.remove(); b.find(".mbr-gallery-filter ul").append(d)
                } h(a)
            }
        }); if (p) k(document).on("change.cards", function (a) { h(a) }); if (p) k(document).on("lazyload", function (a) { h(a); k(window).scrollEnd(function () { h(a) }, 250) }); q || b(h); q || document.addEventListener("change.cards", function (a) { h(a) }); q || document.addEventListener("add.cards",
            function (a) { h(a) }); q || document.addEventListener("changeParameter.cards", function (a) { h(a) }); document.querySelectorAll(".mbr-gallery-item").forEach(function (a) { return a.addEventListener("click", function (a) { return a.stopPropagation() }) }); var B, y, r, D = function (a) {
                var b = a.querySelector(".mbr-gallery-filter-all"), c = []; if (a && f(a)) if (a.querySelectorAll(".mbr-gallery-item").forEach(function (a) { (a.getAttribute("data-tags") || "").trim().split(",").map(function (a) { a = a.trim(); -1 == c.indexOf(a) && c.push(a) }) }), 0 < a.querySelectorAll(".mbr-gallery-filter").length &&
                    a.querySelector(".mbr-gallery-filter").classList.contains("gallery-filter-active")) {
                        var d = []; a.querySelectorAll(".mbr-gallery-filter > ul > li").forEach(function (a, b) { 0 != b && a.removeChild(a.firstChild) }); c.map(function (a) { var b = document.createElement("li"), c = document.createElement("a"); c.classList.add("btn"); c.classList.add("btn-md"); c.classList.add("btn-primary-outline"); c.classList.add("display-7"); c.innerText = a; b.appendChild(c); d.push(b) }); var e = a.querySelector(".mbr-gallery-filter > ul"); e.appendChild(b);
                    d.forEach(function (a) { return e.appendChild(a) }); a.querySelectorAll(".mbr-gallery-filter > ul > li").forEach(function (b) {
                        b.addEventListener("click", function (c) {
                            c.preventDefault(); var g = b.closest("li"); g.parentElement.querySelectorAll("li").forEach(function (a) { return a.classList.remove("active") }); g.classList.add("active"); c = g.closest("section").querySelector(".mbr-gallery-row"); var d = g.querySelector("a").innerHTML.trim(); a.querySelectorAll(".mbr-gallery-item").forEach(function (a) {
                                -1 != a.getAttribute("data-tags").split(",").map(function (a) { return a.trim() }).indexOf(d) ||
                                g.classList.contains("mbr-gallery-filter-all") ? (a.style.left = "0", a.classList.remove("mbr-gallery-item__hided")) : (a.classList.add("mbr-gallery-item__hided"), a.style.left = "300px")
                            }); c.closest(".mbr-gallery-row").dispatchEvent(new CustomEvent("filter"))
                        })
                    })
                } else a.querySelector(".mbr-gallery-item__hided").classList.remove("mbr-gallery-item__hided"), a.querySelector(".mbr-gallery-row").dispatchEvent(new CustomEvent("filter"))
            }; p = document.querySelectorAll(".mbr-gallery"); p.length && p.forEach(function (a) {
                a.querySelector(".mbr-gallery-filter") &&
                D(a); a.addEventListener("show.bs.modal", function (a) { clearTimeout(B); B = setTimeout(function () { var b = a.relatedTarget.parentElement.getAttribute("data-video-num"); (b = a.target.querySelector(".carousel-item").querySelector('.mbr-background-video[data-video-num="' + b + '"]')) && b.closest(".carousel-item").classList.contains("active") && (b = v[+b.getAttribute("data-video-num")], b.playVideo ? b.playVideo() : b.play()) }, 500); r = a.target; x() }); a.addEventListener("slide.bs.carousel", function (a) {
                    if (a = a.target.querySelector(".carousel-item.active > .mbr-background-video")) a =
                        v[+a.getAttribute("data-video-num")], a.pauseVideo ? a.pauseVideo() : a.pause()
                }); a.addEventListener("hide.bs.modal", function (a) { v.map(function (a) { a.pauseVideo ? a.pauseVideo() : a.pause() }); r = null })
            }); window.addEventListener("resize", x); window.addEventListener("load", x)
})();
