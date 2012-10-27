jQuery Ripple JS
======================
波紋のようなエフェクトを発生させるjQueryプラグイン  
円形にするためにCSS3を使っています。

デモ
------
<a href="http://dev.creatorish.com/demo/jquery.ripple/" target="_blank">http://dev.creatorish.com/demo/jquery.ripple/</a>

使い方
------
jQueryとjQuery Rippleを読み込んで以下のように記述します。

    new Ripple(options);

### オプション ###

+    target: document.body : エフェクト要素を配置する親要素
+    x: 0 : 波紋のx位置
+    y: 0 : 波紋のy位置
+    size: 120 : 波紋のサイズ
+    count: 1 : 発生させる波紋数
+    zIndex: 9999 : 波紋のzIndex
+    border: "solid" : 波紋のボーダータイプ(solid,dottedなど)
+    delay: 250 : 波紋数が2以上のときのディレイ
+    delayIncrease: 0 : 波紋数が3以上でのディレイ加算値
+    radius: "auto" : 角丸の値
+    width: 3 : 波紋のボーダーサイズ
+    color: "#ccc" : 波紋の色
+    duration: 800 : 波紋エフェクト時間
+    easing: "linear" : 波紋のイージング。jQuery Easingプラグインが使えます
+    background: "transparent" : 波紋の背景色。url()も使えます。
+    shadow: 0 : ドロップシャドウの値

記述例
------

    //マウスでクリックしたところに波紋を表示
    $(document.body).bind("click",function(e) {
        new Ripple({
            x: e.pageX,
            y: e.pageY,
            count: 2,
            width: 2,
            zIndex: 30,
            color: "#049CDB"
        });
    });
    
デモにあるようにイージングをいじったり、エフェクトの発生イベントを変えたりするとちょっと面白いエフェクトになります。

ライセンス
--------
[MIT]: http://www.opensource.org/licenses/mit-license.php
Copyright &copy; 2012 creatorish.com
Distributed under the [MIT License][mit].

作者
--------
creatorish yuu  
Weblog: <http://creatorish.com>  
Facebook: <http://facebook.com/creatorish>  
Twitter: <http://twitter.jp/creatorish>