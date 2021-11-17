import{s as B,L as A,S as I,C as b,P as M,W as j,T as q,a as L,M as S,b as x,c as i,D as E,V as F,B as h,d as v,R as H,e as D,f as W}from"./vendor.de9446d3.js";const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}};V();var z="/assets/starrybird.262cb16b.jpg",R="/assets/robin.c8c52d95.png",G="/assets/xk.d3ca42dd.png",N="/assets/qemu.e03472a8.png",U="/assets/qeats.ced2d1ec.PNG",C="/assets/qeatsrecipes.b623a7c1.png",T="/assets/campus_map.ed4678ad.jpg",O="/assets/paths.dd555444.png";function X(){document.getElementById("starrybird-photo").setAttribute("src",z)}function Y(){document.getElementById("starrybird-photo").setAttribute("src",R)}function K(){document.getElementById("xk-photo").setAttribute("src",G)}function Z(){document.getElementById("xk-photo").setAttribute("src",N)}function _(){document.getElementById("qeats-photo").setAttribute("src",C)}function J(){document.getElementById("qeats-photo").setAttribute("src",U)}function Q(){document.getElementById("campusmap-photo").setAttribute("src",O)}function $(){document.getElementById("campusmap-photo").setAttribute("src",T)}B.polyfill();window.addEventListener("load",function(){document.querySelector(".js-scroll-to-intro").addEventListener("click",function(e){e.preventDefault(),document.querySelector(".intro-container").scrollIntoView({behavior:"smooth"})}),document.querySelector(".js-scroll-to-purple").addEventListener("click",function(e){e.preventDefault(),document.querySelector(".purple").scrollIntoView({behavior:"smooth"})}),document.querySelector(".js-scroll-to-dp").addEventListener("click",function(e){e.preventDefault(),document.querySelector(".dp").scrollIntoView({behavior:"smooth"})}),document.querySelector(".js-scroll-to-lp").addEventListener("click",function(e){e.preventDefault(),document.querySelector(".lp").scrollIntoView({behavior:"smooth"})}),document.querySelector(".js-scroll-to-orange").addEventListener("click",function(e){e.preventDefault(),document.querySelector(".orange").scrollIntoView({behavior:"smooth"})}),document.querySelector("#starrybird-card").addEventListener("mouseover",X),document.querySelector("#starrybird-card").addEventListener("mouseout",Y),document.querySelector("#xk-card").addEventListener("mouseover",K),document.querySelector("#xk-card").addEventListener("mouseout",Z),document.querySelector("#qeats-card").addEventListener("mouseover",_),document.querySelector("#qeats-card").addEventListener("mouseout",J),document.querySelector("#campusmap-card").addEventListener("mouseover",Q),document.querySelector("#campusmap-card").addEventListener("mouseout",$)});var P="/assets/star-removed.6edb582f.png",c,l,m,p=[],w=new A({color:16777215});function ee(){c=new I,c.background=new b(131595),l=new M(65,window.innerWidth/window.innerHeight,1,1e3),m=new j({canvas:document.querySelector("#intro")}),m.setPixelRatio(window.devicePixelRatio),m.setSize(window.innerWidth,window.innerHeight),l.position.setZ(40),l.position.setX(0),m.render(c,l)}function te(){var e=new q().load(P);p=[];for(let t=0;t<250;t++){let o=new L(1,1),n=new S({map:e,transparent:!0}),r=new x(o,n);const[a,d,g]=Array(3).fill().map(()=>i.randFloatSpread(100));r.position.set(a,d,g),r.material.side=E,p.push(r)}for(let t=0;t<p.length;t++)c.add(p[t])}function f(e){var t=new q().load(P);let o=new L(1,1),n=new S({map:t,transparent:!0}),r=new x(o,n);r.position.copy(e),r.material.side=E,p.push(r),c.add(r)}function s(e,t,o,n,r,a){return new F((e+r)*n,(t+a)*n,o)}function oe(){const e=[];var t=5,o=-7,n=3;e.push(s(-3,2.5,i.randFloat(-10,0),t,o,n)),e.push(s(-1.5,2,i.randFloat(-10,0),t,o,n)),e.push(s(0,0,i.randFloat(-10,0),t,o,n)),e.push(s(1.25,-1,3,t,o,n)),e.push(s(4,-1.75,i.randFloat(-10,0),t,o,n)),e.push(s(3,-3,i.randFloat(-10,0),t,o,n)),e.push(s(1,-2.25,i.randFloat(-10,0),t,o,n)),e.push(s(1.25,-1,3,t,o,n));for(let d=0;d<e.length;d++)f(e[d]);const r=new h().setFromPoints(e),a=new v(r,w);c.add(a)}function ne(){const e=[];var t=5,o=5,n=-1;e.push(s(-1,1.2,i.randFloat(-10,0),t,o,n)),e.push(s(-.5,1.5,i.randFloat(-10,0),t,o,n)),e.push(s(0,2.5,-3,t,o,n)),e.push(s(1,1.5,i.randFloat(-10,0),t,o,n)),e.push(s(.5,0,-3,t,o,n)),e.push(s(0,2.5,-3,t,o,n)),e.push(s(.5,0,-3,t,o,n)),e.push(s(-.5,-.5,i.randFloat(-10,0),t,o,n)),e.push(s(-.75,-1,i.randFloat(-10,0),t,o,n));for(let d=0;d<e.length;d++)f(e[d]);const r=new h().setFromPoints(e),a=new v(r,w);c.add(a)}function re(){const e=[];var t=5,o=0,n=1;e.push(s(-3,3.5,i.randFloat(-10,0),t,o,n)),e.push(s(0,2,i.randFloat(-10,0),t,o,n)),e.push(s(1.5,1.25,i.randFloat(-10,0),t,o,n)),e.push(s(2,.25,i.randFloat(-10,0),t,o,n));for(let d=0;d<e.length;d++)f(e[d]);const r=new h().setFromPoints(e),a=new v(r,w);c.add(a)}function se(){var e=[],t=5,o=0,n=-2;e.push(s(-2,0,-5,t,o,n)),e.push(s(-1,.75,i.randFloat(-10,0),t,o,n)),e.push(s(1,.8,-5,t,o,n)),e.push(s(1.25,.5,i.randFloat(-10,0),t,o,n)),e.push(s(1.25,-.25,i.randFloat(-10,0),t,o,n)),e.push(s(-1,.1,i.randFloat(-10,0),t,o,n)),e.push(s(-2,0,-5,t,o,n));for(let u=0;u<e.length;u++)f(e[u]);const r=new h().setFromPoints(e),a=new v(r,w);e=[],e.push(s(1,.8,-5,t,o,n)),e.push(s(1.1,1.2,i.randFloat(-10,0),t,o,n)),e.push(s(1.6,1.6,i.randFloat(-10,0),t,o,n)),e.push(s(1.8,1.3,i.randFloat(-10,0),t,o,n));for(let u=0;u<e.length;u++)f(e[u]);const d=new h().setFromPoints(e),g=new v(d,w);c.add(a,g)}var y=25;function k(){for(let e=0;e<p.length;e++){let t=p[e];t.rotation.x+=.01,t.rotation.y+=.01,y>100?y=25:y++,t.material.color=new b("hsl(170, 70%, "+y+"%)")}requestAnimationFrame(k),m.render(c,l)}ee();te();oe();ne();re();se();k();function ae(e){var t=new H,o=new D,n=new W,r=new F,a=new F;o.x=e.clientX/window.innerWidth*2-1,o.y=-(e.clientY/window.innerHeight)*2+1,!(o.x>.9)&&(r.copy(l.position).normalize(),n.setFromNormalAndCoplanarPoint(r,c.position),t.setFromCamera(o,l),t.ray.intersectPlane(n,a),f(a))}document.addEventListener("mousedown",ae,!1);function ie(e){l.position.x=-6*(e.clientX/window.innerWidth-.6),l.position.y=6*(e.clientY/window.innerHeight-.6),l.lookAt(c.position)}window.addEventListener("mousemove",ie,!1);function de(){l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",de,!1);