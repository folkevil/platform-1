window.cashmusic=function(){var h;if(null!=window.cashmusic)h=window.cashmusic;else{h={embeds:{whitelist:"",all:[]},embedded:!1,eventlist:{},geo:null,get:{},lightbox:!1,loaded:!1,name:"",options:"",path:"",scripts:[],sessionid:null,soundplayer:!1,storage:{},templates:{},_init:function(){var a=window.cashmusic;a.get.qs=window.location.search.substring(1);a.get.params=!1;if(a.get.qs){a.get.params={};for(var b,c=a.get.qs.split("&"),d=0;d<c.length;d++)b=c[d].split("="),a.get.params[b[0]]=decodeURIComponent(b[1])}a.get.params.debug&&
(a.debug.show=!0);self!==top?a._initEmbed():a.name="main window";a.session.start();b=document.querySelectorAll("a.cashmusic.gallery,div.cashmusic.gallery");(-1!==a.options.indexOf("lightboxvideo")||0<b.length)&&a.loadScript(a.path+"/lightbox/lightbox.js");0<document.querySelectorAll("a.cashmusic.soundplayer,div.cashmusic.soundplayer").length&&a.loadScript(a.path+"/soundplayer/soundplayer.js");a.events.add(window,"message",function(b){-1!==a.embeds.whitelist.indexOf(b.origin)&&a._handleMessage(b)});
a.embeds.whitelist+=window.location.href.split("/").slice(0,3).join("/");a.get.params.location&&(a.embeds.whitelist+=a.get.params.location.split("/").slice(0,3).join("/"));if(a.embedded)a.loaded=Date.now(),a._drawQueuedEmbeds(),a.debug.store("session id set: "+a.sessionid),a.debug.show&&a.debug.out("finished initializing",a),a.events.fire(a,"ready",a.loaded);else{a.get.qs&&(-1!==a.get.qs.indexOf("element_id")||-1!==a.get.qs.indexOf("handlequery"))&&window.history&&history.pushState&&history.pushState(null,
null,window.location.href.split("?")[0]);a.overlay.create();var e=0,d=setInterval(function(){50>e&&(!a.geo||!a.sessionid&&-1===a.options.indexOf("standalone"))?e++:(a.sessionid?a.debug.store("session id set: "+a.sessionid):a.debug.store("no session. standalone mode."),a.debug.store("geo acquired: "+a.geo),a.debug.store("total delay: "+100*e+"ms"),a.loaded=Date.now(),clearInterval(d),a._drawQueuedEmbeds(),a.debug.show&&a.debug.out("finished initializing",a),a.events.fire(a,"ready",a.loaded))},100)}},
_drawQueuedEmbeds:function(){var a=window.cashmusic;"object"==typeof a.storage.elementQueue&&a.storage.elementQueue.forEach(function(b){a.embed(b[0],b[1],b[2],b[3],b[4],b[5])})},_initEmbed:function(){var a=window.cashmusic;a.embedded=!0;var b=document.querySelector("div.cashmusic.element");b&&(a.storage.embedheight=a.measure.scrollheight(),a.events.fire(a,"resize",a.storage.embedheight),b=b.className.split(" "),a.events.fire(a,"identify",[b[2],b[3].substr(3)]),a.name="element #"+b[3].substr(3)+" / "+
b[2],window.setInterval(function(){var b=a.measure.scrollheight();b!=a.storage.embedheight&&(a.storage.embedheight=b,a.events.fire(a,"resize",b))},250),(b=a.getQueryVariable("cssoverride"))&&a.styles.injectCSS(b,!0));for(var b=document.getElementsByTagName("form"),c=0;c<b.length;c++){var d=document.createElement("input");d.setAttribute("type","hidden");d.setAttribute("name","embedded_element");d.setAttribute("value","1");b[c].appendChild(d)}},_handleMessage:function(a){for(var b=window.cashmusic,
c=JSON.parse(a.data),d=c.data,e,g=0;g<b.embeds.all.length;g++)if(b.embeds.all[g].el.contentWindow===a.source){e=b.embeds.all[g];break}var f=!1;if(d.target)for(g=0;g<b.embeds.all.length;g++)if(b.embeds.all[g].id==d.target){f=b.embeds.all[g].el.contentWindow;break}switch(c.type){case "resize":e.el.height=d;e.el.style.height=d+"px";break;case "identify":e.id==d[1]&&(e.type=d[0]);break;case "checkoutdata":b.events.fire(b,"checkoutdata",d);break;case "overlayreveal":b.overlay.reveal(d.innerContent,d.wrapClass);
b.events.fire(b,"overlayopened","");break;case "overlayhide":b.overlay.hide();b.events.fire(b,"overlayhidden","");break;case "addoverlaytrigger":b.overlay.addOverlayTrigger(d.content,d.classname,d.ref);break;case "injectcss":b.styles.injectCSS(d.css,d.important);break;case "addclass":b.styles.addClass(d.el,d.classname);break;case "removeclass":b.styles.removeClass(d.el,d.classname);break;case "swapclasses":b.styles.swapClasses(d.el,d.oldclass,d.newclass);break;case "begincheckout":var k=f;k||(k=a.source);
b.checkout?b.checkout.begin(d,k):b.loadScript(b.path+"/checkout/checkout.js",function(){b.checkout.begin(d,k)});f=!1}f&&b.events.fire(b,c.type,d,f)},contentLoaded:function(a){var b=!1,c=!0,d=window.document,e=d.documentElement,g=function(c){if("readystatechange"!=c.type||"complete"==d.readyState)h.events.remove("load"==c.type?window:d,c.type,g),!b&&(b=!0)&&a.call(window,c.type||c)},f=function(){try{e.doScroll("left")}catch(k){setTimeout(f,50);return}g("poll")};if("complete"==d.readyState)a.call(window,
"lazy");else{if(d.createEventObject&&e.doScroll){try{c=!window.frameElement}catch(k){}c&&f()}this.events.add(d,"DOMContentLoaded",g);this.events.add(d,"readystatechange",g);this.events.add(d,"load",g)}},embed:function(a,b,c,d,e,g){var f=window.cashmusic;"string"!==typeof a||"h"!=a.substr(0,1)&&"/"!=a.substr(0,1)||(a=[b,b=a][0]);var k=document.querySelectorAll("script"),h=k[k.length-1];if(f.loaded){"object"===typeof a&&(c=a.lightboxed?a.lightboxed:!1,d=a.lightboxtxt?a.lightboxtxt:!1,e=a.targetnode?
a.targetnode:!1,g=a.cssoverride?a.cssoverride:!1,b=a.endpoint?a.endpoint:!1,a=a.elementid?a.elementid:!1);h="string"===typeof e?document.querySelector(e):e;b||(b=f.path);var l=f.buildEmbedIframe(b,a,g,c?"lightbox=1":!1);if(h)if(c){var m=document.createElement("span");m.className="cashmusic embed link";d||(d="open element");f.overlay.create(function(){var a=document.createElement("a");a.href="";a.target="_blank";a.innerHTML=d;m.appendChild(a);h.parentNode.insertBefore(m,h);(function(){f.events.add(a,
"click",function(a){f.overlay.reveal(l);a.preventDefault();return!1})})()})}else h.parentNode.insertBefore(l,h)}else"object"!==typeof f.storage.elementQueue&&(f.storage.elementQueue=[]),"object"===typeof a?a.targetnode||(a.targetnode=h,arguments[0]=a):arguments[4]=h,f.storage.elementQueue.push(arguments)},buildEmbedIframe:function(a,b,c,d){var e=window.cashmusic;a=a.replace(/\/$/,"")+"/request/embed/"+b+"?location="+encodeURIComponent(window.location.href);e.geo&&(a+="&geo="+encodeURIComponent(e.geo));
c&&(a+="&cssoverride="+encodeURIComponent(c));d&&(a+="&"+d);e.get.params&&-1===(""+d).indexOf("lightbox=1")&&(e.get.params.element_id==b||e.get.params.handlequery)&&(a+="&"+e.get.qs);e.sessionid&&(a+="&session_id="+e.sessionid);e.debug.show&&(a+="&debug=1");c=document.createElement("iframe");c.src=a;c.id="cm-"+(new Date).getTime();c.className="cashmusic embed";c.style.width="100%";c.style.height="0";c.style.border="0";c.style.overflow="hidden";c.scrolling="no";d=a.split("/").slice(0,3).join("/");
-1===e.embeds.whitelist.indexOf(d)&&(e.embeds.whitelist+=d);e.embeds.all.push({el:c,id:b,type:""});e.debug.store("building iframe for element #"+b);return c},getTemplate:function(a,b){var c=window.cashmusic,d=c.templates;void 0!==d[a]?b(d[a]):(this.ajax.jsonp(c.path+"/templates/"+a+".js","callback",function(c){d[a]=c.template;b(c.template)},"cashmusic"+a+"Callback"),document.querySelectorAll('link[href="'+c.path+"/templates/"+a+'.css"]').length||c.styles.injectCSS(c.path+"/templates/"+a+".css"))},
addEventListener:function(a,b){var c=window.cashmusic;c.eventlist.hasOwnProperty(a)||(c.eventlist[a]=[]);c.eventlist[a].push(b)},removeEventListener:function(a,b){var c=window.cashmusic;if(c.eventlist.hasOwnProperty(a)){var d=c.eventlist[a].indexOf(b);-1!=d&&c.eventlist[a].splice(d,1)}},dispatchEvent:function(a){var b=window.cashmusic;if(b.eventlist.hasOwnProperty(a.type)){var c;for(c=0;c<b.eventlist[a.type].length;c++)if(b.eventlist[a.type][c])b.eventlist[a.type][c](a)}},loadScript:function(a,b){var c=
window.cashmusic;if(-1<c.scripts.indexOf(a))"function"===typeof b&&b();else{c.scripts.push(a);var d=document.getElementsByTagName("head")[0]||document.documentElement,e=document.createElement("script");e.src=a;var g=!1;e.onload=e.onreadystatechange=function(){g||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(g=!0,"function"===typeof b&&b(),e.onload=e.onreadystatechange=null,d&&e.parentNode&&d.removeChild(e))};d.insertBefore(e,d.firstChild)}c.debug.show&&(c.loaded?c.debug.out("loaded script: "+
a):c.debug.store("loaded script: "+a))},getQueryVariable:function(a){for(var b=window.location.search.substring(1).split("&"),c=0;c<b.length;c++){var d=b[c].split("=");if(d[0]==a)return decodeURIComponent(d[1])}return!1},debug:{show:!1,store:function(a,b){var c=window.cashmusic;c.storage.debug||(c.storage.debug=[]);c.storage.debug.push({msg:a,o:b})},out:function(a,b){var c=window.cashmusic;c.storage.debug?(console.groupCollapsed("%c\u24c3 "+c.name+": "+a,"color: #FF00FF;"),b&&console.log("   attachment: %o",
b),c.storage.debug.forEach(function(a){a.o?console.log("   "+a.msg+" %o",a.o):console.log("   "+a.msg)}),console.groupEnd(),delete c.storage.debug):b?console.log("%c\u24c3 "+c.name+": "+a+" %o","color: #FF00FF;",b):console.log("%c\u24c3 "+c.name+": "+a,"color: #FF00FF;")}},ajax:{getXHR:function(){try{return new XMLHttpRequest}catch(a){try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(b){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(c){return!1}}}},send:function(a,b,c,d){var e=window.cashmusic,
g="POST";b?e.sessionid&&(b+="&session_id="+e.sessionid):(g="GET",b=null,e.sessionid&&(a=-1===a.indexOf("?")?a+("?session_id="+e.sessionid):a+("&session_id="+e.sessionid)));var f=this.getXHR();f&&(f.open(g,a,!0),f.setRequestHeader("X-Requested-With","XMLHttpRequest"),"POST"==g&&f.setRequestHeader("Content-type","application/x-www-form-urlencoded"),"function"==typeof c&&(f.onreadystatechange=function(){4===f.readyState&&(200===f.status?c(f.responseText):"function"===typeof d&&d(f.responseText))}),f.send(b))},
jsonp:function(a,b,c,d){a=a||"";b=b||"";c=c||function(){};d=d||!1;"function"==typeof b&&(c=b,b="callback");if(d){var e=d,g=function(){};"function"==typeof window[e]&&(g=window[e])}else e="jsonp"+Math.round(1000001*Math.random());window[e]=function(a){c(a);d?g(a):delete window[e]};a=-1===a.indexOf("?")?a+"?":a+"&";var f=document.createElement("script");f.setAttribute("src",a+b+"="+e);document.getElementsByTagName("head")[0].appendChild(f)},encodeForm:function(a){if("object"!==typeof a)return!1;var b=
"";a=a.elements||a;for(var c=0;c<a.length;c++)"checkbox"===a[c].type||"radio"===a[c].type?a[c].checked&&(b+=(b.length?"&":"")+a[c].name+"="+a[c].value):b+=(b.length?"&":"")+a[c].name+"="+a[c].value;return encodeURI(b)},getHeaderForURL:function(a,b,c){var d=this.getXHR();d.open("HEAD",a);d.onreadystatechange=function(){this.readyState==this.DONE&&c(this.getResponseHeader(b))};d.send()}},events:{add:function(a,b,c){a.attachEvent?(a["e"+b+c]=c,a[b+c]=function(){a["e"+b+c](window.event)},a.attachEvent("on"+
b,a[b+c])):a.addEventListener(b,c,!1)},remove:function(a,b,c){a.detachEvent?(a.detachEvent("on"+b,a[b+c]),a[b+c]=null):a.removeEventListener(b,c,!1)},fire:function(a,b,c,d){var e=window.cashmusic;d&&d.postMessage(JSON.stringify({type:b,data:c}),"*");document.dispatchEvent?(d=document.createEvent("CustomEvent"),d.initCustomEvent(b,!1,!1,c),a.dispatchEvent(d)):(d=document.createEventObject(),d.detail=c,a.fireEvent("on"+b,d));e.embedded&&e.events.relay(b,c);e.debug.show&&(e.loaded?e.debug.out("firing "+
b+" event.",c):e.debug.store("firing "+b+" event.",c))},relay:function(a,b){window.parent.postMessage(JSON.stringify({type:a,data:b}),"*")}},session:{start:function(){var a=window.cashmusic;a.sessionid||-1!==a.options.indexOf("standalone")||(a.get.params.session_id?a.sessionid=a.get.params.session_id:a.session.getid(window.location.href.split("/").slice(0,3).join("/")))},setid:function(a){var b=window.cashmusic;a=JSON.parse(a);b.sessionid=a.id;if(!b.embedded)try{var c=localStorage.getItem("sessions"),
c=c?JSON.parse(c):{};c[window.location.href.split("/").slice(0,3).join("/")]={id:a.id,expiration:a.expiration};localStorage.setItem("sessions",JSON.stringify(c))}catch(d){}},getid:function(a){var b=window.cashmusic;!b.sessionid&&b.get.params.session_id&&(b.sessionid=b.get.params.session_id);if(!b.sessionid&&!b.embedded){var c=!1;try{c=localStorage.getItem("sessions")}catch(d){c=!1}c&&(c=JSON.parse(c),c[a]&&(c[a].expiration>Math.floor((new Date).getTime()/1E3)?b.sessionid=c[a].id:(delete c[a],localStorage.setItem("sessions",
JSON.stringify(c)))))}null!==b.sessionid||b.embedded||-1!==b.options.indexOf("standalone")||(b.sessionid=!1,a=b.path.replace("public","api")+"/verbose/system/startjssession",a+="?ts="+(new Date).getTime(),b.ajax.send(a,!1,function(a){a&&(a=JSON.parse(a),b.session.setid(a.payload),b.events.fire(b,"sessionstarted",a.payload))},function(a){b.options+=" standalone"}));return b.sessionid}},measure:{viewport:function(){return{x:window.innerWidth||document.body.offsetWidth||0,y:window.innerHeight||document.body.offsetHeight||
0}},scrollheight:function(){var a=document.body,b=document.documentElement;return Math.max(a.scrollHeight,b.scrollHeight,a.offsetHeight,b.offsetHeight,a.clientHeight,b.clientHeight)}},overlay:{content:!1,close:!1,callbacks:[],create:function(a){var b=window.cashmusic,c=b.overlay;b.styles.injectCSS(b.path+"/templates/overlay.css");c.content=document.createElement("div");c.content.className="cm-overlay";c.close=document.createElement("div");c.close.className="cm-close";b.events.add(window,"keyup",function(a){27==
a.keyCode&&c.content.parentNode==document.body&&c.hide()});b.events.add(c.close,"click",function(a){c.content.parentNode==document.body&&c.hide()});"function"===typeof a&&a()},hide:function(){var a=window.cashmusic,b=a.overlay,c=document.body;if(a.embedded)a.events.fire(a,"overlayhide");else{b.content.style.opacity=0;for(a.events.fire(a,"overlayclosed","");b.content.firstChild;)b.content.removeChild(b.content.firstChild);c.removeChild(b.close);c.removeChild(b.content);b=document.querySelectorAll(".cm-overlaytrigger");
if(0<b.length)for(var c=0,d=b.length;c<d;c++)b[c].style.visibility="visible";a.styles.removeClass(document.documentElement,"cm-noscroll")}},reveal:function(a,b){var c=window.cashmusic,d=c.overlay,e=document.body;if(c.embedded)c.events.fire(c,"overlayreveal",{innerContent:a,wrapClass:b});else{1==d.content.style.opacity&&(d.content.innerHTML="");var g=document.createElement("div");g.className="cm-position";var f=document.createElement("div");f.className=b?b:"cm-element";if("string"===typeof a)f.innerHTML=
a;else if(a.endpoint&&a.element){var h="";c.sessionid&&(h="&session_id="+c.sessionid);h=c.buildEmbedIframe(a.endpoint,a.element,!1,"lightbox=1&state="+a.state+h);f.appendChild(h)}else f.appendChild(a);g.appendChild(f);d.content.appendChild(g);c.styles.hasClass(document.documentElement,"cm-noscroll")||c.styles.addClass(document.documentElement,"cm-noscroll");1!=d.content.style.opacity&&(d.content.style.opacity=0,e.appendChild(d.content),e.appendChild(d.close),window.getComputedStyle(d.content).opacity,
d.content.style.opacity=1)}},addOverlayTrigger:function(a,b,c){var d=window.cashmusic,e=document.body;if(d.embedded)d.events.fire(d,"addoverlaytrigger",{content:a,classname:b,ref:c});else{var g=document.createElement("div");g.className=b.toString()+" cm-overlaytrigger";d.events.add(g,"click",function(b){d.overlay.reveal(a);this.style.visibility="hidden";b.preventDefault();return!1});e.appendChild(g);d.storage[c]=g;d.events.fire(d,"triggeradded",c)}}},styles:{resolveElement:function(a){return"string"===
typeof a?"storage:"==a.substr(0,8)?window.cashmusic.storage[a.substr(8)]:document.querySelector(a):a},addClass:function(a,b,c){var d=window.cashmusic;if(c&&d.embedded)d.events.fire(d,"addclass",{el:a,classname:b});else if(a=d.styles.resolveElement(a))a.className=a.className+" "+b},hasClass:function(a,b){return-1<(" "+a.className+" ").indexOf(" "+b+" ")},injectCSS:function(a,b,c){void 0===c&&(c=!1);var d=window.cashmusic;c&&d.embedded?d.events.fire(d,"injectcss",{css:a,important:b}):(c=document.getElementsByTagName("head")[0]||
document.documentElement,"http"==a.substr(0,4)?(d=document.createElement("link"),d.rel="stylesheet",d.href=a):(d=document.createElement("style"),d.innerHTML=a),d.type="text/css",b?c.appendChild(d):c.insertBefore(d,c.firstChild))},removeClass:function(a,b,c){var d=window.cashmusic;if(c&&d.embedded)d.events.fire(d,"removeclass",{el:a,classname:b});else if(a=d.styles.resolveElement(a))a.className=(" "+a.className+" ").replace(" "+b+" "," ").replace(/^\s+/,"").replace(/\s+$/,"")},swapClasses:function(a,
b,c,d){var e=window.cashmusic;if(d&&e.embedded)e.events.fire(e,"swapclasses",{el:a,oldclass:b,newclass:c});else if(a=e.styles.resolveElement(a))a.className=(" "+a.className+" ").replace(" "+b+" "," "+c+" ").replace(/^\s+/,"").replace(/\s+$/,"")}}};var l=document.querySelector('script[src$="cashmusic.js"]');l&&(h.path=l.src.substr(0,l.src.length-13));h.options=String(l.getAttribute("data-options"));self===top&&h.ajax.getHeaderForURL("https://javascript-cashmusic.netdna-ssl.com/cashmusic.js","GeoIp-Data",
function(a){h.geo=a});var n=function(){var a=document.querySelectorAll('script[src$="cashmusic.js"]');"object"==typeof a&&Array.prototype.slice.call(a).forEach(function(a){var b=a.getAttribute("data-element");b&&h.embed({elementid:b,targetnode:a})})};h.contentLoaded(function(){-1!==h.options.indexOf("lazy")?setTimeout(function(){h._init(h);n()},1E3):(h._init(h),n())})}return h}();