# jquery.photoSwipe
图片放大工具

#写在前面

项目中需要用到图片放大的功能，知道 [photoswipe](https://github.com/dimsemenov/PhotoSwipe) 很不错，但是每次使用的时候都要帮一堆相同的代码，
虽然工作量不大，可是这样的话总觉得不够优雅。所以我们就把他的功能简单的封装，让我们photoswipe
的使用者快速上手。

#功能说明

## 1.图片预览、放大、全屏

## 2.点击图片即预览，可前后翻看

#快速入手使用说明

## 1.引入如下6个文件 ：地址仅供参考

     <link rel="stylesheet" href="lib/photoSwipe/photoswipe.css">
     <link rel="stylesheet" href="lib/photoSwipe/default-skin/default-skin.css">
     <script src="//cdn.bootcss.com/jquery/1.12.3/jquery.js"></script>
     <script type="text/javascript" src="lib/photoSwipe/photoswipe.js"></script>
     <script type="text/javascript" src="lib/photoSwipe/photoswipe-ui-default.js"></script>
     <script type="text/javascript" src="../dist/jquery.photoSwipe.js"></script>

##  2.添加class

只需按照规定在img添加class  （如：class="enlarge-img"）

## 3.初始化

  $.photoSwipeInit();
  或者
  $.photoSwipeInit('enlarge-img');

# About
* [Github link](https://github.com/amazeyope)


