(function(){
"use strict";
var MAP=[["教養","kyouyou"],["初級","shokyuu"],["中級","chuukyuu"],["実践","jissen"],["具体例","gutaireihen"],["健康食品","kenko-gmp"],["ISO9001","iso9001"],["ISO22716","iso22716"],["ISO14001","iso14001"],["ISO13485","iso13485"],["ISO16949","iso16949"],["ISO22000","iso22000"],["HACCP","haccp"],["GVP","gvp"],["薬機法","yakkihou"],["医療機器GMP","qms"],["GQP","gqp"],["QC検定3級","qc3"],["QC検定2級","qc2"],["マニュアル作成","manual"],["中小企業向け部門立ち上げ","smb-dept"],["食品業界","industry-food"],["化粧品業界","industry-cosmetics"],["医療機器業界","industry-medical"],["自動車業界","industry-auto"],["QC七つ道具","theme-qc7"],["統計","theme-stats"],["検査・計測","theme-inspection"],["品質マネジメントシステム","theme-qms"],["FMEA・源流管理","theme-fmea"],["変更管理・4M","theme-4m"],["クレーム対応","theme-claim"],["サプライヤ品質","theme-supplier"],["品質コスト","theme-kpi"],["リスクマネジメント","theme-risk"],["標準化","theme-standard"],["トヨタ生産方式","theme-tps"],["DX・データ活用","theme-dx"],["品質人材育成","theme-standard"],["問題解決基礎","theme-fmea"],["現場力向上","shokyuu"],["製造業基礎","kyouyou"],["品質管理基礎","kyouyou"],["30日入門","pack-30days"],["90日基礎","pack-90days"],["1年完全","pack-1year"],["FMEA集中","short-fmea"],["4M変化点","short-4m"],["クレーム対応速習","short-claim"],["品質コスト1日完結","short-kpi"],["監査対応速習","short-audit"]];
function inject(){
  if(document.getElementById("qzWrap"))return;
  var w=document.createElement("div");
  w.id="qzWrap";
  w.style.cssText="max-width:1200px;margin:30px auto 0;padding:0 16px";
  document.body.appendChild(w);
  var t=(document.title||"")+" "+((document.querySelector("h1,h2,.title,.playlist-title")||{}).textContent||"");
  t=t.replace(/\s+/g,"");
  var slug="kyouyou";
  for(var i=0;i<MAP.length;i++){if(t.indexOf(MAP[i][0])>=0){slug=MAP[i][1];break;}}
  var ifr=document.createElement("iframe");
  ifr.src="https://trial.sangyo-tech.jp/quiz-embed/wrapper.html?course="+slug+"&v="+Date.now();
  ifr.style.cssText="width:100%;border:0;display:block;min-height:700px;background:#0a0e1a";
  ifr.scrolling="no";
  w.appendChild(ifr);
}
window.addEventListener("message",function(e){if(e.data&&e.data.qh){var ifr=document.querySelector("#qzWrap iframe");if(ifr)ifr.style.height=(e.data.qh+20)+"px";}});
if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",inject);}else{inject();}
setTimeout(inject,1500);
})();