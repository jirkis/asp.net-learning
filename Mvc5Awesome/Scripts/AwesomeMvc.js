var awe=function(){function di(n){return String(n).replace(/[&<"'\/]/g,function(n){return wt[n]})}function ei(n){n=g(n);for(key in wt)n=n.replace(wt[key],key);return n}function g(n){return n==null?t:n.toString()}function gi(n){return String(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function bt(n){var t=n[0],i=null;return window.getComputedStyle?i=window.getComputedStyle(t).direction:t.currentStyle&&(i=t.currentStyle.direction),i=="rtl"}function ot(n){return n.length?et(n):t}function kt(t,i){var r=0;return t.sort(),i.sort(),t.length==i.length&&(r=1,n.each(t,function(n,t){i[n]!=t&&(r=0)})),r}function si(n){return n&&n.length}function nt(t,i,u){if(t.data){var f=t.data.vals,e=[],o=[];function s(t){if(!b(o,t)){o.push(t);var i=n("#"+t).data("o");i&&i.data&&n.each(i.data.vals,function(n,t){b(f,t)&&e.push(t);s(t)})}}t.data.vals.length>1&&n.each(f,function(n,t){b(e,t)||s(t)});n.each(f,function(o,s){var h=n("#"+s).data("o");b(e,s)||(h&&h.pch?n("#"+s).bind("awepch",function(n,r){r&&(fr(f,r.p)?i(r):t.v.trigger("awepch",r))}):u||n("#"+s).bind(r,function(){i({p:[s]})}))})}}function hi(t,i,r){return t||(t="S"in i?function(n){return[n.V,n.T,n.S]}:function(t){var i=0;return n.each(r,function(n,r){t.K==di(r)&&(i=1)}),[t.K,t.C,i]}),t}function ci(t,i){t.d.empty();var f=p(t.v),r,u="<ul>";n.each(t.lrs,function(n,e){r=hi(r,e,f);var o=r(e);u+='<li><label class="awe-label"><input type="'+i+'" value="'+o[0]+'" name="'+t.nm+'" '+(o[2]?'checked="checked"':"")+" />"+o[1]+"<\/label><\/li>"});u+="<\/ul>";t.d.append(u)}function dt(n,t){n.pch=1;n.v.change(function(t,i){i=y(i,{p:[]});i.p.push(n.i);n.v.trigger("awepch",i)});n.l&&t();nt(n,function(n){t(n)})}function tt(t){var i=t.p,r=i.d;i.i&&n("#"+i.i).length&&n("#"+i.i).data("api").destroy();i.g&&(n(".awe-popup[aweg="+i.g+"]").each(function(){n(this).data("api")&&n(this).data("api").destroy()}),r.attr("aweg",i.g));r.addClass("awe-popup");i.i&&r.attr("id",i.i);awe.popup(t)}function s(n,t){return awe.readd(n,t)}function it(n){awe.ff(n)}function st(t){t.find(".awe-searchtxt").on("keydown",function(t){t.which==13&&(i(t),n(this).change().data("aweval",n(this).val()))})}function li(t,i){if(t.sc)t.fm.on("change",pt,function(){n(this).val()!=n(this).data("aweval")&&i()});else t.fm.on("click",".awe-searchbtn",i)}function ht(n,t){var i=function(){};return n.v.data("api",i),i.load=function(i){return i&&(i.params&&(n.params=i.params),i.oparams&&(n.oparams=i.oparams)),t()},i}function gt(n,t,i){ni(n,t);var r;return n.df&&(r=n.df(t),r!=-1&&i(r)),!n.df||r==-1?(tr(n.d),n.d.addClass("awe-load"),a(n,{url:n.url,data:t,success:i},function(){n.d.removeClass("awe-load");ir(n.d)})):void 0}function v(n,t,i){n.v.trigger("aweload",[t,i])}function ni(n,t){n.v.trigger("awebeginload",[t])}function y(n,t){return n?n:t}function nr(n,t){return n.substring(0,t.length)===t}function f(n,t){n.v.trigger(r,t);ai(n.v)}function ai(n){n.valid&&n.closest("form").length>0&&n.valid()}function p(t){var r,i=t.val();return t.hasClass("awe-array")?(i.length||(i="[]"),r=i[0]=="["?n.map(n.parseJSON(i),function(n){return g(n)}):[g(i)]):r=[g(i)],r}function ct(n,t){return at(p(n),t)}function lt(t){var r=[],i;for(i in t)n.isArray(t[i])?r=r.concat(at(t[i],i)):r.push({name:i,value:t[i]});return r}function at(t,i){var u=[],r;for(n.isArray(t)||(t=[t]),r=0;r<t.length;r++)u.push({name:i,value:t[r]});return u}function vi(n){return n.data&&(n.data={keys:n.data.split("|")[0].split(";"),vals:n.data.split("|")[1].split(";")}),n.pars&&(n.pars={keys:n.pars.split("|")[0].split(";"),vals:n.pars.split("|")[1].split(";")}),n}function e(t,i){var r=[];return t.v&&!i&&(r=r.concat(ct(t.v,"v"))),t.oparams&&(r=r.concat(lt(t.oparams)),t.oparams=0),t.params&&(r=r.concat(lt(t.params))),t.data&&n.each(t.data.keys,function(i,u){r=r.concat(ct(n("#"+t.data.vals[i]),u))}),t.pars&&n.each(t.pars.keys,function(n,i){r=r.concat(at(t.pars.vals[n],i))}),t.parf&&(r=r.concat(lt(t.parf()))),r}function tr(n){n.before(o)}function ir(n){var t=n.prev();t.hasClass("awe-ldgcnt")&&t.remove()}function i(n){n&&n.preventDefault?n.preventDefault():n.returnValue=!1}function w(t){t.v=n("#"+t.i);t.f=t.v.parent();t.rtl==null&&(t.rtl=bt(t.f));t.rtl&&t.f.addClass("awe-rtl");t.d=t.f.find(".awe-display");t.v.data("o",t)}function ti(n){return n.outerHeight(!0)-n.height()}function yi(n,t){n?t.append('<tr class="awe-loadcont"><td>'+o+"<\/td><\/tr>"):t.append('<li class="awe-loadcont">'+o+"<\/li>")}function vt(n,t,i,r,u){i||(i=1);var f=e(n,n);return f=f.concat(t),n.srl.empty(),yi(n.tl,n.srl),pi(n,f,i,0,0,r,u)}function pi(n,t,i,r,u,f,e){var o=[{name:"page",value:i}],l,h;return n.tl&&(l=!n.srl.closest("table").find("thead:first").html(),o=o.concat({name:"isTheadEmpty",value:l})),r&&(o=o.concat({name:"isMoreClick",value:r})),h=t.concat(o),f&&ni(n,h),c(n,n.searchUrl,h,function(u){var o=s(u,n);r||n.srl.empty();rr(n,o,t,i,f,e);e&&e();f&&v(n,u,o)},u)}function wi(i,r,u){var f,e;r&&(r.Thead&&u.closest("table").find("thead:first").html(r.Thead),f=u.find(".awe-li").map(function(){return n(this).data("val")}),r.Content?(e=n("<div/>").append(r.Content),e.find(".awe-li").each(function(){n.inArray(n(this).data("val"),f)>=0&&n(this).remove()}),u.append(e.children())):r.Items&&n.each(r.Items,function(r,e){var o=i.mode?t:'<button type="button" class="awe-movebtn awe-btn"><i class="awe-icon"><\/i><\/button>';n.inArray(e.K,f)<0&&u.append('<li class="awe-li" data-val="'+e.K+'">'+o+e.C+"<\/li>")}),i.dg&&u.find(".awe-li").draggable({cancel:"button",revert:"invalid",helper:"clone",cursor:"move"}))}function rr(t,i,r,u,f,e){var o,s,h;wi(t,i,t.srl);i.More&&(o=n('<div class="awe-morebtn">'+t.mt+"<\/div>").click(function(){u++;var i=n(this);i.after("<div class='awe-loading'><span><\/span><\/div>");i.hide();pi(t,r,u,1,function(){i.closest(".awe-li").remove()},f,e)}),t.tl?(s=t.srl.find(".awe-li:not(.awe-morecont):first > td").length,h=n('<tr class="awe-li awe-morecont"><td colspan="'+s+'"><\/td><\/tr>'),t.srl.append(h),t.srl.find("tr:last td").append(o)):(t.srl.append('<li class="awe-li awe-morecont"><\/li>'),t.srl.find("li:last").append(o)))}function h(n,t){return n.replace(/{(\d+)}/g,function(n,i){return typeof t[i]!="undefined"?t[i]:n})}function b(t,i){return n.inArray(i,t)+1}function ur(t,i){return n.grep(t,function(n){return b(i,n)})}function fr(n,t){return ur(n,t).length}function c(n,t,i,r,u){return a(n,{url:t,data:i,success:r},u)}function a(t,i,r){return i.type||(i.type="post"),i.traditional=!0,n.ajax(i).always(r).fail(function(n,i,r){awe.err(t,n,i,r)})}function ii(t){return!n(t.target).parents(".awe-nonselect").length&&!n(t.target).hasClass("awe-nonselect")}function er(t){var r=t.lrs.PageCount,i=t.lrs.Page,u,e,f;i>0&&(u=t.v,e=r<8?yt(1,r,i):i<5?yt(1,5,i)+" ... "+rt(r,i):i>r-5?rt(1,i)+" ... "+yt(r-5,r,i):rt(1,i)+" ... "+yt(i-2,i+2,i)+" ... "+rt(r,i),f=u.find(".awe-pager"),f.html(e),f.find("a").click(function(){t.pg=parseInt(n(this).data("p"));t.ldg||u.data("api").load()}))}function yt(n,i,r){for(var f=t,u=n;u<=i;u++)f+=rt(u,r);return f}function rt(n,i,r){return r||(r=n),h("<a data-p='{0}' class='awe-btn awe-pager-btn {1}'><span class='awe-btn-content'>{2}<\/span><\/a>",[n,i!=n?t:u,r])}function or(){window.getSelection?window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges():document.selection&&document.selection.empty()}function bi(){var i=document.createElement("p"),t,n,u,r;return i.style.width="100%",i.style.height="200px",t=document.createElement("div"),n=t.style,n.position="absolute",n.top="0px",n.left="0px",n.visibility="hidden",n.width="200px",n.height="150px",n.overflow="hidden",t.appendChild(i),document.body.appendChild(t),u=i.offsetWidth,n.overflow="scroll",r=i.offsetWidth,u==r&&(r=t.clientWidth),document.body.removeChild(t),u-r}var n=jQuery,l=n(document),k=n(window),oi;n(function(){n("body").append('<a href="http://aspnetawesome.com">built using Trial version of ASP.net MVC Awesome http://aspnetawesome.com<\/a>')});var o="<span class='awe-ldgcnt'><div class='awe-loading'><span><\/span><\/div><\/span>",d="option",r="change",u="awe-selected",ut="awe-changing",ri="."+u,pt=":input[name]",ui='<input type="text" name="search" class="awe-searchtxt" placeholder="search..."/><button type="button" class="awe-searchbtn awe-btn">{0}<\/button>',ki="<input type='hidden' name='{0}' value='{1}' />",t="",ft=Math.max,fi=Math.min,et=JSON.stringify,wt={"&":"&amp;","<":"&lt;",'"':"&quot;","'":"&#39;"};return oi=function(){var n={};return{setItem:function(t,i){n[t]=i},getItem:function(t){return n[t]},removeItem:function(t){delete n[t]}}}(),{err:function(){},errMsg:function(){return t},test:function(){},val:p,scrollw:bi,ppk:"awe4_",gmd:null,grid:function(r){function wt(t){return!n(t.target).closest(".awe-grid").is(f)}function lr(n,t){var i=parseInt(n.attr("colspan"),10);n.attr("colspan",i+t)}function ar(n){while(n--)yt.prepend('<col class="awe-idn"/>')}function gr(){return n(".awe-row"+ri,f).map(function(){return n(this).data("model")}).get()}function tr(n,t){var i=hi+(r.th+1)-(n-1)-ki;return t&&(i+=r.columns.length-1),i}function vr(n){var t=0;try{n==1?t=oi:n==2?t=sessionStorage:n==3&&(t=localStorage)}catch(i){}return t}function nu(){w={};tt&&tt.removeItem(r.pk);it&&it.removeItem(r.cpk)}function vt(){try{tt&&tt.setItem(r.pk,et([{pg:r.pg,So:r.So},w]));it&&it.setItem(r.cpk,et(r.columns))}catch(n){}}function tu(){var i,t,u,f;tt&&(i=tt.getItem(r.pk),i&&(t=n.parseJSON(i),t&&t.length==2&&(u=t[0],r.pg=u.pg,r.So=u.So,w=t[1])));it&&(f=it.getItem(r.cpk),f&&(r.columns=n.parseJSON(it.getItem(r.cpk))))}function ir(n){return r.columns[n.data("i")]}function yr(n){p.find(".awe-col").length||p.empty();p.append(h("<div class='awe-col {3}' data-i='{1}'><div class='awe-il awe-sortable'>{2}{0}<\/div>{4}<\/div>",[n.H,n.i,ur,vi[n.Sort],n.Gr?"<div class='awe-il awe-remb'><i class='awe-rem'><\/i><\/div>":t]))}function iu(){g.on("touchstart mousedown",".awe-groupable",function(t){function y(n){if(g||i(t),v>3||u){i(n);var r=u?n.originalEvent.touches[0]:n;c=fi(ft(r.pageX-k,h),w-f.width());o=fi(ft(r.pageY-d,e),b);a.css({left:c,top:o}).show()}else v++}var u=t.type!="mousedown";u||i(t);var s=u?t.originalEvent.touches[0]:t,f=n(t.target).closest(".awe-col"),h=p.offset().left,w=h+p.width(),e=p.offset().top,b=e+p.outerHeight(),k=s.pageX-f.offset().left,d=s.pageY-f.offset().top,c,o,a=f.clone().addClass("awe-drag").width(f.outerWidth()).hide().appendTo(n("body")),v=0,g=0;l.on(u?"touchmove":"mousemove",y).one(u?"touchend":"mouseup",function(){o<e+p.outerHeight()/2&&!r.ldg&&ru(f.data("i"));l.off("touchmove mousemove",y);a.remove()})})}function ru(t){var i=r.columns[t],u;i.Gd||(yr(i),u=0,n.each(r.columns,function(n,t){t.Gd&&t.Gk>u&&(u=t.Gk)}),i.Gd=1,i.Gk=u+1,ot(1),st())}function pr(i,u){if(i||(i=t),b(r.dates,u)&&i.substr(0,5)=="/Date"){var f=new Date(parseInt(i.substr(6)));i=n.datepicker.formatDate(r.F,f)}return i}function ci(t,i){var r=t,u=[],f;for(f in i)u.push(f);return n.each(u,function(n,t){var u=pr(i[t],t);r=r.split("."+t).join(u)}),r}function uu(n,t,i){if(!t&&!i)return n;var r=n.indexOf(">");return n.substr(0,r)+i+">"+t+n.substr(r+1)}function fu(n){for(var r=t,i=0;i<n-1;i++)r+="<td class='awe-idn'><\/td>";return r}function eu(i,u,f,e){var o=t,s=0;return n(r.columns).each(function(_,col){var val,cellbtn,attributes,colspan;if(ei(col))return 1;val=t;!u&&(col.F||col.T)?col.F?val=eval(col.F)(i,col.P):col.T&&(val=ci(col.T,i)):val=u&&col.Ft?ci(col.Ft,i):pr(i[col.P],col.P);cellbtn=t;attributes=t;s==0&&(e&&(cellbtn+="<i class='awe-ce-ico "+(r.cohc?t:"awe-ceb")+"'><\/i>"),colspan=tr(f),attributes+=" colspan='"+colspan+"' ");nr(val.toString(),"<td")?o+=uu(val,cellbtn,attributes):(e&&r.cohc&&!s&&(attributes+=" class='awe-ceb'"),val&&val!=t||(val="&nbsp;"),o+="<td"+attributes+">"+cellbtn+val+"<\/td>");s++}),o}function gt(i,u,f,e,o,s,c,l){var v=r.k&&i&&i[r.k]?"data-k='"+i[r.k]+"'":t,a=y(l,u);return r.st&&i&&(f+=" awe-selectable"),n(h("<tr {4} data-lvl='{0}' {5} class='{1}'>{2}{3}<\/tr>",[u,f,fu(a),c?c:eu(i,o,a,s),e?"style='display:none;'":t,v])).data("model",i)}function li(i,u,f,e,o,s){var l,v,b,g;e=e||0;var y=!1,h=[],c=i.Header;if(c){var p=c.Item,a=c.Key+u,k="",d=i.Nt==3;c.IgnorePersistence&&(w[a]=c.Collapsed?1:0);y=d||w[a]==null?c.Collapsed:w[a];l=y?" awe-collapsed ":t;l+="awe-ghead ";p&&(l+="awe-row "+(r.rcf?ci(r.rcf,p):t));c.Content&&(l+=r.cohc?" awe-ceb":t,k="<td colspan='"+tr(u,1)+"'><i class='awe-ce-ico"+(r.cohc?t:" awe-ceb")+"'><\/i>"+i.Header.Content+"<\/td>");v=gt(p,u,l,f,0,1,k);v.data("i",a);d&&v.data("l",1);h=h.concat(v)}return!f&&y&&(f=!0),i.Groups&&n.each(i.Groups,function(n,t){h=h.concat(li(t,u+1,f))}),i.Items&&(b=u,i.Nt!=2&&b++,n.each(i.Items,function(n,i){if(o)return o--,!0;var u=(n+e)%2==0?t:" awe-alt";return r.rcf&&(u+=" "+ci(r.rcf,i)),h=h.concat(gt(i,b,"awe-row"+u,f,0)),s&&s==n+1?!1:void 0})),i.Footer&&(g=hi+1,h=h.concat(gt(i.Footer,u,"awe-gfoot",f,1,0,0,g))),h}function ot(t){var u,e,f,i,c,l,o,a,s;for(p.empty(),t||(g.empty(),yt.empty()),u=[],n.each(r.columns,function(n,t){t.i=n;t.Gd&&(u.push(t),t.Sort||(t.Sort=1))}),e=0,f=0;f<r.columns.length;f++)(i=r.columns[f],i.i=f,ei(i)||t)||(c=i.W?"style='width:"+i.W+"px'":"",l="<col "+c+" data-i='"+f+"' />",yt.append(l),e+=i.W||i.Mw,r.sh)&&(o="",f||(o="colspan='"+(r.th+1)+"'"),a=h("<th {6}><div class='awe-col {3} {4} {5}' unselectable='on' data-i={0} >{1}{2}<\/div><\/th>",[f,i.H,i.S?ur:"",i.S?"awe-sortable":"",i.G?"awe-groupable":"",vi[i.Sort],o]),g.append(a));t||(s=u.length+r.th,ar(s),n.each(u,function(){g.prepend('<th class="awe-idn"><\/th>')}),e+=s*at,hr.css("min-width",e+"px"),fr.css("min-width",e+"px"));r.gl=u.length;u.sort(function(n,t){return n.Gk-t.Gk});n.each(u,function(n,t){yr(t)});u.length||p.html(r.gbt);t||iu();ti()}function ti(){var e;bt(f)?(f.addClass("awe-rtl"),pt=1):f.addClass("awe-ltr");var s=p.outerHeight(!0),h=f.find(".awe-footer").outerHeight(!0),u=s+h+pi.outerHeight(!0)+ht.outerHeight(!0)-1,t=n("<div><\/div>");t.css("overflow-y","scroll");t.css("position","relative");t.append("<p/>");f.append(t);e=t.find("p").position().left;t.remove();var c=e<3?"right":"left",o="padding-"+c,i=bi()+"px";ht.css("margin-bottom","-"+i);r.h&&(rt.css("overflow-y","scroll"),rt.height(ft(r.h-u,100)),ht.css(o,i),pi[0]&&pi.css(o,i));r.mh&&rt.css("min-height",r.mh-u);ct?ht.show():ht.hide()}function wr(){ct=r.lrs.Fr;var t=r.lrs.Data;ot();ot();ki=0;n.each(r.columns,function(n,t){ei(t)&&ki++});sr.empty();t.Groups&&(ct=0);ct&&sr.append(li(t,0,0,0,0,ct));dr.empty().append(li(t,0,0,0,ct,0))}function ui(n,t,i,r,u){for(;;){var f=n.data("lvl");if(!f)return;if(f=parseInt(f,10),f<t)break;if(f==t&&!n.hasClass("awe-gfoot"))break;(r==f&&!n.hasClass("awe-gfoot")||r>f)&&(r=!1);u?u.push(n):r||(i?n.hide():n.show());n.hasClass("awe-collapsed")&&!r?ui(n.next(),t,i,f,u):ui(n.next(),t,i,r,u);break}}function br(n,t){var r,i;return(t||(t=ut.children("[data-k='"+n+"']")),r=parseInt(t.data("lvl"),10),!t.length)?[]:(i=[t],ui(t.next(),r,0,0,i),i)}function ou(n,t){return kr(ut.children("[data-k='"+n+"']"),t)}function kr(t,i){var h=t.data("k"),a=t.hasClass("awe-alt")?1:0,u=r.lreq.slice(0),f,e,l;return u.push({name:"Key",value:h}),i&&(u=u.concat(lt(i))),f=n(o),t.find("td:not(.awe-idn):first").prepend(f),e=parseInt(t.data("lvl"),10),l=br(h,t),c(r,r.url,u,function(i){var u=s(i,r),h,o,c,f;u!=null&&(h=si(u.Data.Groups),(si(u.Data.Items)||h)&&(o=r.th,c=e-r.gl+(u.Th-1),r.th=ft(o,c),f=r.th-o,f&&(ar(f),lr(g.find("th:not(.awe-idn):first"),f),n.each(ut.children("tr"),function(t,i){lr(n(i).children(":not(.awe-idn):first"),f)})),t.before(li(u.Data,e-1,0,a))),n.each(l,function(n,t){t.remove()}))},function(){f.remove()})}function st(t){var p,u,b,k,i,h,l;for(r.ldg=1,u=[],b=[],n.each(r.columns,function(n,t){t.Gd?u.push(t):t.Sort!=0&&b.push(t)}),u.sort(function(n,t){return n.Gk-t.Gk}),b.sort(function(n,t){return n.So-t.So}),p=u.concat(b),k=["","asc","desc"],i=e(r),t&&(r.pg=t),i.push({name:"page",value:r.pg}),h=0;h<p.length;h++)i.push({name:"SortNames",value:p[h].P}),i.push({name:"SortDirections",value:k[p[h].Sort]});for(l=0;l<u.length;l++)i.push({name:"Groups",value:u[l].P}),i.push({name:"Headers",value:u[l].H});return r.sc&&i.push({name:"Cs",value:et(r.columns)}),f.find(".awe-relbox").append(o),ni(r,i),c(r,r.url,i,function(n){r.ldg=0;var t=s(n,r);t!=null&&(r.pg=t.Page,r.lrs=t,n.Cs&&(r.columns=JSON.parse(n.Cs)),r.th=t.Th,r.k=y(r.ck,t.Key),tt||(w={}),r.dates=t.Dates,hi=t.GroupCount,wr(),vt(),a.buildPager(r));ti();v(r,n,i);r.lreq=i;r.lres=n},function(){f.find(".awe-relbox .awe-ldgcnt").remove()})}function ei(n){return!r.sgc&&n.Gd||n.Hid}var vi=["","awe-asc","awe-desc"],ur="<i class='awe-sord'><\/i>",f=n("#"+r.i),di,hi,a,gi,cr,kt,dt,tt,it,ai,rr;r.v=f;f.data("o",r);var p=f.find(".awe-groupbar"),yt=f.find("colgroup"),rt=f.find(".awe-content"),ht=f.find(".awe-gfc"),yi=ht.children().first(),fr=f.find(".awe-tablw"),ct,ut=f.find(".awe-tbody"),sr=ut.first(),dr=rt.find(".awe-tbody"),pt,pi=f.find(".awe-header"),wi=f.find(".awe-hcon"),hr=f.find(".awe-colw"),g=f.find(".awe-hrow"),d,at=16,ki,w={};if(r.So=100,r.pg=1,di=r.pk,r.pk=awe.ppk+y(di,r.i)+r.prs,r.cpk=awe.ppk+"c_"+y(di,r.i)+r.cps,hi=0,a=function(){},f.data("api",a),a.update=ou,a.select=br,a.lay=ti,a.render=wr,a.persist=vt,a.clearpersist=nu,a.getSelection=gr,a.renderRow=function(n,t){var i=r.gl+1+r.th;return gt(n,y(t,i),"awe-row")},a.getRequest=function(){return r.lreq},a.getResult=function(){return r.lres},a.reset=function(){r.ldg||(w={},r=n.extend(!0,{},cr),f.data("o",r),ot(1),st(1))},a.load=function(t){return t&&(t.params&&(r.params=t.params),t.oparams&&(r.oparams=t.oparams),t.group&&n.each(r.columns,function(n,i){var r=b(t.group,i.P);r?(i.Gd=1,i.Gk=r):i.Gd=0}),t.sort&&n.each(r.columns,function(i,r){var f=0,u=0;n.each(t.sort,function(n,t){if(r.P==t.Prop)return u=t,f=n+1,!1});u?(r.Sort=u.Sort,r.So=f):r.Sort=0})),ot(1),st()},a.buildPager=er,gi=r.md||awe.gmd,gi&&$.each(gi,function(n,t){t(r)}),cr=n.extend(!0,{},r),kt=null,dt=r.st,dt)f.on("click",".awe-row",function(t){var r,e,h;if(!wt(t)&&ii(t)){var i=n(this),o=ut.children(),s=1;t.shiftKey&&kt!==null&&dt==2?(t.ctrlKey||o.removeClass(u),r=o.index(i),e=o.index(kt),r>e&&(r=-(e=(r+=e)-e)+r),o.slice(r,e+1).addClass(u)):t.ctrlKey&&dt==2||dt==3?(i.toggleClass(u),kt=i):(kt=i,h=!i.hasClass(u),o.removeClass(u),h?i.addClass(u):s=0);s&&or();f.trigger("aweselect")}});tt=vr(r.prs);it=vr(r.cps);k.resize(ti);f.find(".awe-reload").click(function(){a.reset()});f.on("click",".awe-remb",function(t){var u,i;wt(t)||r.ldg||(u=ir(n(this).closest(".awe-col")),u.Gd=0,i=0,n.each(r.columns,function(n,t){t.So<i&&(i=t.So)}),u.So=i-1,vt(),ot(1),st())});ut.on("click",".awe-ceb",function(t){if(!wt(t)){var i=n(this).closest(".awe-ghead"),r=parseInt(i.data("lvl"),10),u=i.next(),f=i.data("i");i.hasClass("awe-collapsed")?(i.data("l")&&(i.data("l",0),kr(i)),i.removeClass("awe-collapsed"),ui(u,r,!1),w[f]=0):(i.addClass("awe-collapsed"),ui(u,r,!0),w[f]=1);vt()}});f.on("click",".awe-sortable",function(t){var i,u,e;wt(t)||r.ldg||(ai=0,i=n(this),i.parent().hasClass("awe-col")&&(i=i.parent()),u=ir(i),e=u.Sort+1,e==3&&(e=u.Gd?1:0),u.Sort=e,f.find("[data-i="+i.data("i")+"]").removeClass("awe-asc awe-desc").addClass(vi[e]),u.Gd||(r.s&&n.each(r.columns,function(n,t){if(t.Gd||t.P==u.P)return 1;t.Sort=0;g.find("[data-i="+n+"]").removeClass("awe-asc awe-desc")}),e==1&&(ir(i).So=++r.So)),vt(),st())});rt.on("scroll",function(){var n=rt.scrollLeft();wi.scrollLeft(n);yi.scrollLeft(n)});yi.on("scroll",function(){var n=yi.scrollLeft();wi.scrollLeft(n);rt.scrollLeft(n)});r.nsts&&n.each(r.nsts,function(t,i){ut.on("click","."+i.C,function(e){var fnest,napi,cell,ls;if(!wt(e)){var hostRow=n(this).closest(".awe-row"),nestBtn=hostRow.find("."+i.C),nests=hostRow.nextUntil(":not(.awe-nest)",".n-"+i.C);if(hostRow.nextUntil(":not(.awe-nest)",":not(.n-"+i.C+")").map(function(t,i){n(i).data("api").close()}),nests.length)fnest=nests.first(),napi=fnest.data("api"),fnest.is(":visible")?i.T&&napi.close():napi.open();else{var lvl=hostRow.data("lvl"),nestRow=gt(0,lvl,"awe-nest n-"+i.C,0,0,0,"<td colspan='"+tr(lvl,1)+"' class='awe-nestcell'><\/td>"),nestapi=function(){};nestapi.open=function(){nestBtn.addClass("awe-on");nestRow.show()};nestapi.close=function(){nestBtn.removeClass("awe-on");i.L?nestRow.hide():nestRow.remove()};nestRow.data("api",nestapi);hostRow.after(nestRow);nestapi.open();cell=nestRow.find(".awe-nestcell");i.U?(ls=n(o),cell.append(ls),c(r,i.U,{key:hostRow.data("model")[r.k]},function(n){cell.html(n)},function(){ls.remove()})):i.F&&eval(i.F)(hostRow,nestRow,cell)}}})});ai=0;g.on("mousemove","th:not(.awe-idn)",function(t){var f=n(t.target).closest("th"),u=f.find(".awe-col").data("i"),s=f.offset().left,h=f.outerWidth(),e=s-5,o;if((ai++,!(ai<3))&&(t.pageX>h/2+s?(e+=h,u!=r.columns.length-1||pt||(e-=5),pt&&u--):pt||u--,u>-1&&r.columns[u].R)){if(!d){d=n('<div class="awe-resh"/>').appendTo("body");o=function(t){var i=n(t.target);i.is(d)||i.closest(".awe-header").length||rr||(l.off("mousemove",o),d.remove(),d=0)};l.on("mousemove",o);d.on("mousedown",function(t){var u,o,v,y;i(t);u=n(this).width(20).data("i");rr=1;var p=yt.find("[data-i="+u+"]"),w=g.find("[data-i="+u+"]").parent(),b=t.pageX,s=0,h=0,f=r.columns[u].W,e=at*(r.th+r.gl),c=w.outerWidth(),a=r.columns[u].Mw;n.each(r.columns,function(n,t){ei(t)||(e+=t.W||t.Mw,n==u||t.W||(h=1))});o=u?0:r.th*at;f?f+=o:(f=c,e+=f-(a+r.th*at));v=wi.width();y=function(t){var tt,w,i,g,nt,it,y;t.pageX<l.width()-10&&d.css({left:t.pageX-10,top:t.pageY-10});tt=t.pageX;w=tt-b;pt&&(w=w*-1);i=0;h?i=f+w:(g=v-(c+w),nt=e-f,g<nt&&(g=nt),it=nt/g||1,i=(c+w)*it);i<1&&(i=1);y=1;i<a&&(y=a/i,i=i*y);i-=o;p.css("width",i+"px");r.columns[u].W=i;var k=i,rt=at*(r.th+r.gl),ut=(e-(rt+(f-o)))*y+i+rt;if(!h&&(y>1||s)&&v>=ut+5)n.each(r.columns,function(n,t){if(n!=u&&r.columns[n].R&&!ei(t)&&t.W){s||(t.ciw=t.W);var i=t.ciw*y;yt.find("[data-i="+n+"]").css("width",i+"px");t.W=i;k+=i}}),k+=at*(r.th+r.gl),s=1,y<=1&&(s=0);else{if(y>1)return;k+=e-(f-o)}fr.css("min-width",k+"px");hr.css("min-width",k+"px");p.trigger("awecolresize")};l.on("mousemove",y);l.one("mouseup",function(){rr=0;l.off("mousemove",y);d.width(10);vt()})})}d.data("i",u).css({left:e,top:f.offset().top,height:f.outerHeight()})}});tu();ot();ti();r.l&&st();nt(r,function(){st(1)},!r.lpc)},form:function(t){function u(r){function f(){t.notok=1;t.ua?a(t,{url:y(t.u,u.attr("action")),data:u.serialize(),success:function(n){typeof n!="object"&&t.ff?u.html(n):(t.sf&&t.sf(n),u.trigger("aweformsuccess",n));t.notok=0}}):(u.data("aweex",1),t.u&&u.attr("action",t.u),u.submit())}var u=n(this);if(!u.data("aweex")&&(i(r),!t.bf||t.bf(u)!==!1)&&!t.notok){if(t.c)return t.p.d=n("<div>"+t.ms+"<\/div>"),t.p.btns=[{text:t.yes,click:function(){f();n(this).data("api").close()}},{text:t.no,click:function(){n(this).data("api").close()}}],tt(t),t.p.d.data("api").open(),n(".ui-dialog-buttonset button").blur(),!1;f()}}var r="."+t.cl;n(document).off("submit.awe",r).on("submit.awe",r,u)},autocomplete:function(t){t.v=t.d=n("#"+t.i);t.v.data("numeric")&&awe.numeric(t.d);var i=null;t.k&&(i=n("#"+t.k));t.d.autocomplete({minLength:t.ml,source:function(i,r){var u=e(t);a(t,{url:t.url,dataType:"json",data:u,success:function(t){r(n.map(t,function(n){return{label:n.C,value:n.C,id:n.K}}))}})}});t.d.bind("autocompleteselect",function(n,u){i&&i.val(u.item?u.item.id:null).trigger(r);t.d.trigger(r)});i&&t.d.keyup(function(n){n.which!="13"&&i.val(null).trigger(r)})},numeric:function(n){n.keydown(function(n){var t=n.which;t==46||t==8||t==9||t==27||t==13||t==65&&n.ctrlKey===!0||t>=35&&t<=39||((t<48||t>57)&&(t<96||t>105)?n.preventDefault():n.shiftKey===!0&&i(n))})},txt:function(t){t.d=t.v=n("#"+t.i);t.v.data("numeric")&&awe.numeric(t.d)},tmp:function(n){w(n);n.d.change(function(){var i=n.d.eq(0).val()+n.s+n.d.eq(1).val()+" "+(n.d.eq(2).val()||t);n.v.val(i)})},dtp:function(t){w(t);var r={dateFormat:t.format,changeMonth:t.cm,changeYear:t.cy,onClose:function(){ai(t.v)},onSelect:function(){t.v.change();t.f.find(".awe-dpbtn").focus()}};t.min&&(r.minDate=t.min);t.max&&(r.maxDate=t.max);t.dfd&&(r.defaultDate=t.dfd);t.rtl&&(r.isRTL=t.rtl);t.d.datepicker(r);t.f.find(".awe-dpbtn").click(function(r){i(r);t.v.datepicker("show").blur();n(this).focus()});t.f.find(".awe-clearbtn").click(function(n){i(n);t.d.val("").change()})},ajaxList:function(t){function i(n){return n||(n=1),vt(t,[],n,1)}t.v=n("#"+t.i);t.srl=t.tl?t.v.find(".awe-srl"):t.v;t.mode="s";ht(t,i);i();nt(t,function(){i(1)},!t.lpc)},rcbl:function(n){ci(n,"checkbox")},checkboxList:function(t){function u(){return n(t.d.find("input:checked")).map(function(){return n(this).val()}).get()}function o(n){function o(e){t.lrs=s(e,t);t.lrs&&i.render(t);var o=u(),h=p(t.v);t.v.val(ot(o));kt(o,h)?n&&t.v.trigger("awepch",n):f(t,n);v(t,e,r)}var r=e(t);return gt(t,r,o)}w(t);var i=ht(t,o);i.render=awe.rcbl;t.md&&t.md(t);dt(t,o);t.v.on(r,function(){t.v.data("api").render(t)});t.d.on(r,"input:checkbox",function(n){t.v.val(ot(u()));f(t);n.stopPropagation()})},rrl:function(n){ci(n,"radio")},radioList:function(n){function i(){var t="",i=n.d.find("input:checked");return i.length&&(t=i.val()),t}function u(r){function o(e){n.lrs=s(e,n);n.lrs&&t.render(n);var o=i();n.v.val()!=o?(n.v.val(o),f(n,r)):r&&n.v.trigger("awepch",r);v(n,e,u)}var u=e(n);return gt(n,u,o)}w(n);var t=ht(n,u);t.render=awe.rrl;n.md&&n.md(n);dt(n,u);n.v.on(r,function(){n.v.data("api").render(n)});n.d.on(r,"input:radio",function(t){n.v.val(i());f(n);t.stopPropagation()})},lookup:function(t){function d(){function e(){var n=g(i.find(ri).data("val"));n!=t.v.val()&&(t.v.val(n),f(t),t.ms=0);i.data("api").close()}var o=t.tl?"<table class='awe-ajaxlist awe-lookup-list awe-selectable'><thead><\/thead><tbody class='awe-srl'><\/tbody><\/table>":"<ul class='awe-ajaxlist awe-lookup-list awe-srl awe-selectable'><\/ul>",i=n("<div class='awe-lookup-popup'><div class='awe-search'><\/div><div class='awe-list awe-srlcont'>"+o+"<\/div><\/div>"),r;t.p.d=i;t.p.btns=[{text:t.ok,click:e},{text:t.cancel,click:function(){n(this).data("api").close()}}];tt(t);t.fm=0;t.soc=1;i.bind("aweclose",function(){t.ms&&i.find(".awe-li").removeClass(u);t.ms=0;t.f.find(".awe-openbtn").focus()});t.srl=i.find(".awe-srl");r=".awe-li:not(.awe-morecont)";t.srl.on("click",r,function(r){var f=n(this);ii(r)&&(f.toggleClass(u),i.find(".awe-li").not(f).removeClass(u),t.ms=1)}).on("dblclick",r,function(i){ii(i)&&(n(this).addClass(u),t.ms=0,e())});i.bind("aweresize",y)}function rt(n){if(t.d.html(k),t.v.val()){t.f.addClass("awe-hasval");p=1;t.d.prepend(o);var i=e(t);c(t,t.getUrl,i,function(r){var u,e,o;t.d.html(k);u="";e=s(r,t);e&&(o=$(h(b,[e.C])),t.d.html(o),u=ei(e.K),t.hi&&n!=1&&o.addClass(ut).removeClass(ut,1e3));t.v.val()!=u&&(t.v.val(u),f(t,1));v(t,r,i)},function(){p=0})}else t.f.removeClass("awe-hasval")}function l(){vt(t,t.fm.find(pt).serializeArray(),1,0)}function y(){var r;if(t.p.isOpen){var n=t.p.d,u=n.find(".awe-search:first").outerHeight(!0),f=ti(n.find(".awe-srlcont:first")),e=n.height(),i=e-(u+f+10);i<t.p.mlh&&(i=t.p.mlh);r=i+"px";n.find(".awe-list").css("height",r);n.trigger("awelstresize")}}var p,b,k,a;w(t);t.soc=1;t.mode="s";nt(t,function(){t.soc=!0});b='<div class="awe-caption">{0}<\/div>';k=h(b,["&nbsp;"]);rt(1);t.v.change(function(n,t){t||rt()});d();a=function(){};a.initPopup=d;a.search=l;t.v.data("api",a);t.f.find(".awe-clearbtn").click(function(n){i(n);t.v.val("");f(t);t.soc=!0});t.f.find(".awe-openbtn").click(function(n){if(i(n),!p){var u=t.p.d;if(t.p.isOpen){u.data("api").close();return}t.fm||(t.fm=u.find(".awe-search"),t.fm.on(r,"*",y).submit(function(n){i(n);n.stopPropagation();l()}));t.soc&&(t.fm.html()?l():(t.sf?c(t,t.sf,{},function(n){t.fm.html(n);l();y();st(u);it(t)}):(t.fm.html(h(ui,[t.st])),l(),st(u)),li.call(this,t,l)));t.soc=!1;u.data("api").open();y();it(t)}})},add:function(i){function o(n){function r(r){i.d.empty();i.lrs=s(r,i);i.lrs&&u(i);i.v.val()!=i.d.val()?(i.v.val(i.d.val()),f(i,n)):n&&i.v.trigger("awepch",n);v(i,r,t)}var t=e(i);return gt(i,t,r)}w(i);var h=ht(i,o),u=function(i){i.d.empty();var r,u=p(i.v);n.each(i.lrs,function(n,f){r=hi(r,f,u);var e=r(f),o=t;e[2]&&(o="selected = 'selected'");i.d.append("<option "+o+' value="'+e[0]+'">'+e[1]+"<\/option>")})};h.render=u;dt(i,o);i.v.on(r,function(){i.v.data("api").render(i)});i.d.keyup(function(){n(this).change()}).change(function(){i.v.val()!=i.d.val()&&(i.v.val(i.d.val()),f(i))})},readd:function(n,t){return typeof n!="object"?(awe.err(t,{responseText:n}),null):(typeof n=="object"||typeof n=="string")&&n!=null?n:null},ic:function(t){t.f=n("#"+t.i);t.f.data("o",t)},oc:function(t,i){var u=n("#"+t+"-aweic").data("o"),r;if(!u)throw t+" not initialized";return r=n.extend(!0,{},u),n.extend(!0,r,i),r.u?a(r,{data:e(r),url:r.u,cache:!1,success:function(n){r.sf&&r.sf(n)}}):void 0},ip:function(t){t.f=n("#"+t.i);t.rtl=bt(t.f);t.f.data("o",t)},open:function(t,i){var u=n("#"+t+"-awein").data("o"),r=n.extend(!0,{},u);if(n.extend(!0,r,i),r.type=="op")awe.op({},r);else if(r.type=="pf")awe.pf({},r);else throw t+" not initialized";},ff:function(n){n.p.d.find(":tabbable:first").focus()},pf:function(t,r){var u,h,f,s;i(t);u=n("<div/>");u.on("submit","form",function(t){if((i(t),!t.awesh)&&(t.awesh=1,!r.notok)){r.notok=1;var f=n(this),e=f.attr("method");a(r,{url:f.attr("action"),data:f.serialize(),success:function(n){typeof n=="object"?(r.sf&&r.sf(n,u),u.trigger("awepopupformsuccess",n),r.cs&&u.data("api").close(),r.rs&&location.reload(!0)):u.html(n)},type:e},function(){r.notok=0})}});for(h=n(o),u.html(h),a(r,{type:"get",data:e(vi(r)),url:r.u,cache:!1,success:function(n){u.html(n);it(r)}},function(){h.remove()}),f=[],s=0;s<r.b.length;s+=2)f.push({text:r.b[s],click:r.b[s+1]});r.udb&&(f=f.concat([{text:r.ot,click:function(){u.find("form:first").submit()}},{text:r.ct,click:function(){u.data("api").close()}}]));r.p.d=u;r.p.btns=f;tt(r);u.data("api").open()},op:function(t,r){var u,s,h,f;for(i(t),u=n("<div/>"),r.c&&u.html(r.c),s=n(o),r.u&&(u.append(s),a(r,{type:"get",data:e(vi(r)),url:r.u,cache:!1,success:function(n){u.html(n)}},function(){s.remove()})),h=[],f=0;f<r.b.length;f+=2)h.push({text:r.b[f],click:r.b[f+1]});r.p.d=u;r.p.btns=h;tt(r);u.data("api").open()},autoSize:1,popup:function(t){var i=t.p,u=i.d,s,f,o;i.mlh=0;var h=awe.autoSize,e=i.f,c=!0;i.r||(i.r=!1);e&&(i.r=!1,c=!1,i.m=!0);u.dialog({draggable:c,width:i.w,height:i.h,modal:i.m,resizable:i.r,buttons:i.btns,autoOpen:!1,title:i.t,resizeStop:function(){i.w=u.dialog(d,"width");i.h=u.dialog(d,"height");i.p=u.dialog(d,"position")},dragStop:function(){i.p=u.dialog(d,"position")}});u.on("dialogclose",function(){n(this).trigger("aweclose")}).on("dialogresize",function(){n(this).trigger("aweresize")});if(s="awe-uidialog",t.rtl&&(s+=" awe-rtl"),i.pc&&(s=s+" "+i.pc),u.dialog(d,{dialogClass:s}),f=function(){},e||h){f=function(n){if(u.is(":visible")&&(!n||n.target==window||n.target==document)){var t=k.height(),r=k.width(),o=i.w>r-10||e?r-10:i.w,s=i.h>t-5||e?t-20:i.h,f={height:s,width:o};!e&&i.p&&(f.position=i.p);u.dialog(d,f).trigger("aweresize")}};k.on("resize",f);f();u.on(r,f)}o=function(){};o.open=function(){u.dialog("open");i.isOpen=1;u.trigger("aweopen");f()};o.close=function(){u.dialog("close");i.isOpen=0;i.cl&&i.cl();i.dntr||((h||e)&&k.off("resize",f),u.find("*").remove(),u.remove())};o.destroy=function(){o.close();k.off("resize",f);u.remove()};u.data("api",o)},multilookup:function(u){function g(t){l.empty();n.each(t,function(n,t){l.append(h(ki,[b,gi(t)]))})}function rt(){var i=u.tl?"<table class='awe-ajaxlist awe-lookup-list'><thead><\/thead><tbody class='awe-srl'><\/tbody><\/table>":"<ul class='awe-ajaxlist awe-lookup-list awe-srl'><\/ul>",r=u.tl?"<table class='awe-ajaxlist awe-lookup-list'><thead><\/thead><tbody class='awe-sel'><\/tbody><\/table>":"<ul class='awe-ajaxlist awe-lookup-list awe-sel'><\/ul>",t=n("<div class='awe-multilookup-popup'><div class='awe-search'><\/div><div class='awe-list awe-srlcont'>"+i+"<\/div><div class='awe-list awe-selcont' >"+r+"<\/div><\/div>");u.p.d=t;u.p.btns=[{text:u.ok,click:function(){var i=p(u.v),t=ft();u.v.val(ot(t));g(t);kt(i,t)||f(u);u.ms=0;n(this).data("api").close()}},{text:u.cancel,click:function(){n(this).data("api").close()}}];tt(u);u.fm=0;u.soc=1;t.bind("aweclose",function(){u.ms&&(u.soc=!0);u.ms=0;u.f.find(".awe-openbtn").focus()});u.srl=t.find(".awe-srl");u.sel=t.find(".awe-sel");u.srl.on("click",".awe-movebtn",lt);u.sel.on("click",".awe-movebtn",yt);u.dg&&(t.find(".awe-srlcont").droppable({accept:"#"+u.p.i+" .awe-selcont .awe-li",activeClass:"awe-highlight",drop:function(n,t){t.draggable.prependTo(u.srl);u.ms=1}}),t.find(".awe-selcont").droppable({accept:"#"+u.p.i+" .awe-srlcont .awe-li",activeClass:"awe-highlight",drop:function(n,t){t.draggable.prependTo(u.sel);u.ms=1}}));t.bind("aweresize",y)}function ht(){var n,i;u.sel.html(t);yi(u.tl,u.sel);n=e(u,u);n=n.concat(ct(u.v,"selected"));u.tl&&(i=u.srl.closest("table").find("thead:first").html()?!1:!0,n=n.concat({name:"isTheadEmpty",value:i}));c(u,u.selectedUrl,n,function(n){u.sel.empty();var t=s(n,u);t&&(wi(u,t,u.sel),u.loaded=1)})}function a(){var n=u.fm.find(pt).serializeArray();u.loaded?vt(u,at(ft(),"selected").concat(n)):vt(u,ct(u.v,"selected").concat(n))}function lt(){var t=n(this);setTimeout(function(){t.closest(".awe-li").prependTo(u.sel);u.ms=1},1)}function yt(){var t=n(this);setTimeout(function(){t.closest(".awe-li").prependTo(u.srl);u.ms=1},1)}function y(){var n=u.p.d,t=n.height()-(n.find(".awe-search").outerHeight(!0)+ti(n.find(".awe-srlcont"))+ti(n.find(".awe-selcont"))+10);t<u.p.mlh&&(t=u.p.mlh);n.find(".awe-list").css("height",t*.5+"px");n.trigger("awelstresize")}function ft(){return u.sel.find(".awe-li").map(function(){return n(this).data("val")}).get()}function et(t){var y="<li>&nbsp;<\/li>",i=u.d.html(y),w=u.v.val(),d=p(u.v),r,h,a;w?(u.f.addClass("awe-hasval"),r=[],k=1,h=n(o),u.f.prepend(h),a=e(u),c(u,u.getMultipleUrl,a,function(e){var o=s(e,u);o&&(i.empty(),n.each(o,function(n,t){i.append("<li>"+t.C+"<\/li>");r.push(ei(t.K))}),u.hi&&!t&&i.find("li").addClass(ut).removeClass(ut,1e3),i.trigger("aweresize"));g(r);u.v.val(ot(r));v(u,e,a);kt(r,d)||f(u,1)},function(){h.remove();k=0})):(l.empty().append("<input type='checkbox' name='"+b+"' />"),i.html(y),u.f.removeClass("awe-hasval"))}var l,b,k,d;w(u);u.soc=1;l=u.v.next();b=u.nm;nt(u,function(){u.soc=!0});u.v.on(r,function(n,t){u.soc=1;t||et()});et(1);rt();d=function(){};d.initPopup=rt;u.v.data("api",d);u.f.find(".awe-clearbtn").click(function(n){i(n);l.empty();u.v.val(t);f(u);u.soc=!0});u.f.find(".awe-openbtn").click(function(n){if(i(n),!k){var t=u.p.d;if(u.p.isOpen){t.data("api").close();return}t.data("api").open();u.fm||(u.fm=t.find(".awe-search"),u.fm.on(r,"*",y).submit(function(n){i(n);n.stopPropagation();a()}));u.soc&&(u.loaded=0,u.fm.html()?a():(u.sf?c(u,u.sf,{},function(n){u.fm.html(n);a();y();st(t);it(u)}):(u.fm.html(h(ui,[u.st])),a(),st(t)),li.call(this,u,a)),ht());it(u);u.soc=!1;y()}})}}}()