import{S as O,T as N,M as U,a as A,A as I,P as D,b as _,W as z,F as H,V as g,C as B,d as G,s as Y,c as j,e as X,f as q,g as C,h as d,i as M,j as f,k as V,l as v,m as Z,n as K,o as J}from"./vendor.1bac2186.js";const Q=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}};Q();const u=new O,ee=new N(8,6,16,100),te=new U({color:16737095}),x=new A(ee,te);x.rotation.x=3.1415/2;u.add(x);const ne=new I(16777215,.5);u.add(ne);const b=new D(14737632);b.position.set(0,10,40);u.add(b);const k=54,oe=Math.PI/180,ie=15,se=new B,r=new _(k,window.innerWidth/window.innerHeight,.1,1e3),m=new z({canvas:document.querySelector("#bg")});m.setPixelRatio(window.devicePixelRatio);m.setSize(window.innerWidth,window.innerHeight);r.position.set(0,50,50);const F=new H(r,m.domElement);F.dragToLook=!0;window.addEventListener("resize",re);function re(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)}function ae(o,i){const e=ie/i/2/Math.tan(k/2*oe),t=(o.x-.5)*100,n=-(o.y-.5)*100;return new g(t,n,e)}function ce(o,i){const s=Math.min(.05,se.getDelta())*100;F.update(s);const e=ae(o,i);r.translateX(e.x),r.translateY(e.y),r.translateZ(e.z),m.render(u,r),r.translateX(-e.x),r.translateY(-e.y),r.translateZ(-e.z)}le([{client:"Chrome"}]);function le(o){const s=new G().parse(navigator.userAgent);if(s.client===null||s.os===null){alert("Could not detect browser and/or os, continue at your own risk.");return}let e=!1;for(const t of o)if(!(t.client!==void 0&&!new RegExp(`^${t.client}$`).test(s.client.name))&&!(t.os!==void 0&&!new RegExp(`^${t.os}$`).test(s.os.name))){e=!0;break}e||alert(`This demo, running on ${s.client.name}/${s.os.name}, is not well supported at this time, continue at your own risk.`)}const h={silhouette:[10,338,297,332,284,251,389,356,454,323,361,288,397,365,379,378,400,377,152,148,176,149,150,136,172,58,132,93,234,127,162,21,54,103,67,109],lipsUpperOuter:[61,185,40,39,37,0,267,269,270,409,291],lipsLowerOuter:[146,91,181,84,17,314,405,321,375,291],lipsUpperInner:[78,191,80,81,82,13,312,311,310,415,308],lipsLowerInner:[78,95,88,178,87,14,317,402,318,324,308],rightEyeUpper0:[246,161,160,159,158,157,173],rightEyeLower0:[33,7,163,144,145,153,154,155,133],rightEyeUpper1:[247,30,29,27,28,56,190],rightEyeLower1:[130,25,110,24,23,22,26,112,243],rightEyeUpper2:[113,225,224,223,222,221,189],rightEyeLower2:[226,31,228,229,230,231,232,233,244],rightEyeLower3:[143,111,117,118,119,120,121,128,245],rightEyebrowUpper:[156,70,63,105,66,107,55,193],rightEyebrowLower:[35,124,46,53,52,65],rightEyeIris:[473,474,475,476,477],leftEyeUpper0:[466,388,387,386,385,384,398],leftEyeLower0:[263,249,390,373,374,380,381,382,362],leftEyeUpper1:[467,260,259,257,258,286,414],leftEyeLower1:[359,255,339,254,253,252,256,341,463],leftEyeUpper2:[342,445,444,443,442,441,413],leftEyeLower2:[446,261,448,449,450,451,452,453,464],leftEyeLower3:[372,340,346,347,348,349,350,357,465],leftEyebrowUpper:[383,300,293,334,296,336,285,417],leftEyebrowLower:[265,353,276,283,282,295],leftEyeIris:[468,469,470,471,472],midwayBetweenEyes:[168],noseTip:[1],noseBottom:[2],noseRightCorner:[98],noseLeftCorner:[327],rightCheek:[205],leftCheek:[425]},de={locateFile:o=>`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${o}`},y=1280,T=720,E=document.getElementsByClassName("input_video")[0],p=document.getElementsByClassName("output_canvas")[0],fe=document.getElementsByClassName("control-panel")[0],a=p.getContext("2d"),P={selfieMode:!0,enableFaceGeometry:!1,maxNumFaces:1,refineLandmarks:!1,minDetectionConfidence:.5,minTrackingConfidence:.5,intensity:1,color:16777215},$=document.querySelector(".loading");$.ontransitionend=()=>{$.style.display="none"};let R=1;function me(o){document.body.classList.add("loaded"),a.save(),a.clearRect(0,0,p.width,p.height),a.drawImage(o.image,0,0,p.width,p.height);const i=h.rightEyeUpper0.concat(h.rightEyeLower0),s=h.leftEyeUpper0.concat(h.leftEyeLower0);if(o.multiFaceLandmarks.length>0){const e=o.multiFaceLandmarks[0];R===0&&console.log(v),M(a,i.map(c=>e[c]),{color:"red",radius:5}),M(a,s.map(c=>e[c]),{color:"green",radius:5}),R+=.1,f(a,e,V,{color:"#C0C0C070",lineWidth:1}),f(a,e,v,{color:"#E0E0E0"}),f(a,e,Z,{color:"#E0E0E0"}),P.refineLandmarks&&(f(a,e,K,{color:"#FF3030"}),f(a,e,J,{color:"#30FF30"}));const t=e[226],n=e[446],l=Math.abs(t.x-n.x)*y,S=Math.abs(t.y-n.y)*T,W=Math.hypot(l,S);let w=new g(0,0,0);for(const c of e)w.add(new g(c.x,c.y,c.z));w.divideScalar(e.length),ce(w,W/y)}a.restore()}const L=new Y(de);L.onResults(me);const pe=new j(E,{onFrame:async()=>{await L.send({image:E}).catch(o=>alert(o))},width:y,height:T});pe.start();new X(fe,P).add([new q({title:"MediaPipe Face Mesh"}),new C({title:"Selfie Mode",field:"selfieMode"}),new d({title:"Max Number of Faces",field:"maxNumFaces",range:[1,4],step:1}),new C({title:"Refine Landmarks",field:"refineLandmarks"}),new d({title:"Min Detection Confidence",field:"minDetectionConfidence",range:[0,1],step:.01}),new d({title:"Min Tracking Confidence",field:"minTrackingConfidence",range:[0,1],step:.01}),new d({title:"light intensity",field:"intensity",range:[-1,6],step:.01}),new d({title:"light color",field:"color",range:[0,16777215],step:1})]).on(o=>{const i=o;E.classList.toggle("selfie",i.selfieMode),L.setOptions(i)});
