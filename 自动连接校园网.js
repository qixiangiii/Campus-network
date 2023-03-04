// ==UserScript==
// @name         南宁理工学院校园网自动登录脚本
// @namespace    https://github.com/qixiangiii/Campus-network
// @version      0.1
// @description  南宁理工学院校园网自动登录脚本 有问题请联系qq:1462709953    Microsoft、Chrome浏览器能自动登录  部分浏览器需要刷新即可自动登录如：QQ浏览器  
// @author       QiXiang
// @match        http://10.251.251.250/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// ==/UserScript==

// *************   在引号中输入你的信息   *************
var username = "******"//这里填学号
var password = "******"//这里填密码
var port = 1;//这里填运营商 默认联通 校园网：-1   中国联通：1    中国电信：3

(function() {
    window.addEventListener('load', function() {
    $("input[name='DDDDD']").val(username);
    $("input[name='upass']").val(password);
    window.document.querySelector("[name='ISP_select']").value=port;
    $("input[name='0MKKey']").click();
    }, false);
})();
