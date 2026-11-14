/* 匿名使用统计：配装器和资料库两页共用。
 *
 * 记什么：这次打开是哪一页、从哪个网站点进来（只要域名）、链接里带的来源标记（?from=…）、手机还是电脑（按屏幕宽度分两类）、
 * 是不是这个浏览器今天 / 第一次来、这一页在这个浏览器里是第几次打开、来过几天、离第一次来几天（这几个数存在浏览器自己的 localStorage 里）、
 * 在页面上实际看了多久（页面在前台的时间）、用了哪些功能（点了哪些按钮、看了哪套阵容）。
 * 不记：IP、浏览器型号、任何能认出人的编号。这次打开用一个随机编号把几条记录串起来，只在内存里，关掉页面就没了。
 * 只在两个正式站点上记。数据发到 cloud/functions/hit，存在腾讯云的数据库里，只有后台能读。
 * 什么时候报：打开 10 秒后一次，之后每次切走 / 关掉页面时一次。
 */
(function(){
  "use strict";
  const URL_ = "https://old-wildebeest-d6g1fnfvj68d6a0ae.service.tcloudbase.com/hit";
  const h = location.hostname;
  // 只在两个正式站点上记；本机、自测、别人拷走的副本都不记（自测时页面先设 window.__statTest 才会记）
  const SITES = ["dazauzai.github.io", "old-wildebeest-d6g1fnfvj68d6a0ae-1529310758.tcloudbaseapp.com"];
  if(SITES.indexOf(h) < 0 && !window.__statTest){ window.SWEEP_STAT = function(){}; return; }
  const DEST = window.__statTest ? "https://ak-sweep.test/hit" : URL_;   // 自测时发到一个不存在的地址，不碰线上数据

  const page = /db\.html$/.test(location.pathname) ? "db" : "index";
  const sid = Math.random().toString(36).slice(2, 12) + Date.now().toString(36);
  const t0 = Date.now();
  const day = new Date(t0 - new Date(t0).getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  // 回头客：这个浏览器自己记着「这一页打开过几次、来过几天、第一次来是哪天」，只把这几个数报上去，不报任何编号
  let firstToday = 0, firstEver = 0, opens = 0, days = 0, age = 0;
  try{
    const last = localStorage.getItem("sweep.seen");
    if(!last) firstEver = 1;
    if(last !== day){ firstToday = 1; localStorage.setItem("sweep.seen", day); }
    const since0 = localStorage.getItem("sweep.since") || last || day;
    localStorage.setItem("sweep.since", since0);
    age = Math.max(0, Math.round((Date.parse(day) - Date.parse(since0)) / 86400000)) || 0;
    days = (parseInt(localStorage.getItem("sweep.days"), 10) || (last ? 1 : 0)) + firstToday;
    localStorage.setItem("sweep.days", String(days));
    opens = (parseInt(localStorage.getItem("sweep.opens." + page), 10) || 0) + 1;
    localStorage.setItem("sweep.opens." + page, String(opens));
  }catch(e){}
  let ref = "";
  try{ ref = document.referrer ? new URL(document.referrer).hostname : ""; }catch(e){}
  if(ref === h) ref = "";                       // 站内跳转（配装器 ↔ 资料库）不算来源
  let src = "";
  try{ const q = new URLSearchParams(location.search); src = (q.get("from") || q.get("f") || "").replace(/[^\w.-]/g, "").slice(0, 20); }catch(e){}
  const mobile = Math.min(screen.width, screen.height) < 600 ? 1 : 0;

  // 在前台的时间：页面可见时才计时
  let active = 0, since = document.visibilityState === "visible" ? Date.now() : 0;
  const activeSec = () => Math.round((active + (since ? Date.now() - since : 0)) / 1000);

  let queue = [];
  const counters = {};
  const MAXQ = 60;
  function ev(name, arg){
    if(queue.length >= MAXQ) return;
    queue.push([String(name).slice(0, 24), arg == null ? "" : String(arg).slice(0, 40), Math.round((Date.now() - t0) / 1000)]);
  }
  function count(name){ counters[name] = (counters[name] || 0) + 1; }

  function send(){
    const body = JSON.stringify({s: sid, p: page, f: firstToday, n: firstEver, o: opens, d: days, a: age, r: ref, src: src, m: mobile,
      el: Math.round((Date.now() - t0) / 1000), t: activeSec(), e: queue, c: counters});
    queue = [];
    try{
      if(navigator.sendBeacon && navigator.sendBeacon(DEST, new Blob([body], {type: "text/plain"}))) return;
      fetch(DEST, {method: "POST", mode: "no-cors", keepalive: true, body: body}).catch(function(){});
    }catch(e){}
  }

  document.addEventListener("visibilitychange", function(){
    if(document.visibilityState === "visible"){ if(!since) since = Date.now(); }
    else { if(since){ active += Date.now() - since; since = 0; } send(); }
  });
  window.addEventListener("pagehide", send);
  // 不再定时补报（2026-11-14 起）：云端按次计费，一直开着的页面每 2 分钟报一次太费；时长等切走 / 关掉时一起报

  // 点了什么：按页面上按钮自带的标记认
  const CLICKS = [
    ["[data-fbopen]", "fb_open"], ["[data-fbkind]", "fb_kind", "fbkind"], ["#buildBtn", "builds"], ["#banBtn", "ban_open"], ["#extBtn", "ext_open"], ["#dbLink", "to_db"], ["#bossLink", "to_db", "todb"], ["#jobLink", "to_db", "todb"], ["a.back", "to_index"],
    ["[data-shot]", "shot_pick"], ["[data-banreset]", "ban_reset"], ["[data-banfixed]", "ban_fixed"],
    ["[data-btab]", "builds_tab", "btab"], ["[data-bvtab]", "build_tab", "bvtab"], ["[data-bvstage]", "build_stage"],
    ["[data-buildopen]", "build_view", "buildopen"], ["[data-minenew]", "mine_new"], ["[data-minesavefrm]", "mine_save"],
    ["[data-mineload]", "mine_load"], ["[data-mineshare]", "mine_share"], ["[data-extaddto]", "ext_add"], ["[data-extadd]", "ext_add"],
    ["[data-tab]", "db_tab", "tab"], ["[data-spt]", "db_spawn", "spt"],
    ["[data-g]", "filter", "g"], ["[data-ui]", "fold", "ui"], ["[data-showout]", "show_out"], ["#saveBtn", "mine_new"], ["#clearBtn", "clear"],
  ];
  // 次数多的只计数（「看特质」要排在头像前面：那个小按钮在头像里）
  const COUNTED = [["[data-info]", "info"], ["#poolList [data-op]", "op_add"], ["#teamGrid [data-op]", "op_remove"]];
  document.addEventListener("click", function(e){
    const t = e.target;
    if(!t || !t.closest) return;
    const a = t.closest("a[href]");
    const bv = a && /bilibili\.com\/video\/(BV\w+)/.exec(a.href);
    if(bv){ ev("src_click", bv[1]); return; }
    if(a && /^https?:/.test(a.href) && a.hostname !== h){ ev("out_link", a.hostname); return; }
    for(let i = 0; i < COUNTED.length; i++){ if(t.closest(COUNTED[i][0])){ count(COUNTED[i][1]); return; } }
    for(let i = 0; i < CLICKS.length; i++){
      const el = t.closest(CLICKS[i][0]);
      if(el){
        ev(CLICKS[i][1], CLICKS[i][2] ? el.dataset[CLICKS[i][2]] : "");
        if(el.matches("#dbLink, #bossLink, #jobLink, a.back")) send();   // 马上要换页了，先报
        return;
      }
    }
  }, true);
  document.addEventListener("paste", function(){ ev("paste"); }, true);
  document.addEventListener("input", function(e){ if(e.target && e.target.id === "q") count("search"); }, true);

  // 页面里的关键结果（截图认出了几个禁用、把哪套阵容放进了阵容区）由页面代码主动报
  window.SWEEP_STAT = ev;
  // 资料库打开时落在哪个页签（配装器顶上的「领袖」「转职合成」直接打开对应页签）
  if(page === "db") ev("db_land", location.hash.slice(1).replace(/[^\w-]/g, "").slice(0, 20) || "modes");
  // 打开 10 秒后先报一次（只看一眼就关掉的，关掉时也会报）
  setTimeout(send, 10000);
})();
