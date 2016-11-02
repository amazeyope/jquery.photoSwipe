/**
 * Created by yope on 2016/11/1.
 * version:1.0.0
 *
 * 图片放大初始化插件工具
 * 快速入手使用说明
 *
 * 1.引入如下五个文件 ：地址仅供参考
 *  <link rel="stylesheet" href="../lib/photoSwipe/photoswipe.css">
 *  <link rel="stylesheet" href="../lib/photoSwipe/default-skin/default-skin.css">
 *
 *  <script type="text/javascript" src="../lib/jquery/dist/jquery.min.js"></script>
 *  <script type="text/javascript" src="../lib/photoSwipe/photoswipe.js"></script>
 *  <script type="text/javascript" src="../lib/photoSwipe/photoswipe-ui-default.js"></script>
 *  <script type="text/javascript" src="../sslib/component/jquery.photoSwipe.js"></script>
 *
 * 2.添加class
 *
 * 只需按照规定在img添加class  （如：class="enlarge-img"）
 *
 * 3.初始化
 * $.photoSwipeInit(); 或者 $.photoSwipeInit('enlarge-img');
 *
 */

/**
 * @param needEnlargeClassName 可选参数 需要放大的img添加的class 的名称
 */
jQuery.photoSwipeInit = function (needEnlargeClassName) {
    if (!needEnlargeClassName) {
        needEnlargeClassName = 'enlarge-img';
    }
    var openPhotoSwipe = function (items, index) {
        var pswpElement = document.querySelectorAll('.pswp')[0];
        // build items array
        // define options (if needed)
        var options = {
            // history & focus options are disabled on CodePen
            index: Number(index),
            history: false,
            focus: false,
            showAnimationDuration: 0,
            hideAnimationDuration: 0
        };
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var items = [];
    $('body').on('click', '.' + needEnlargeClassName, function () {
        if (items && items.length > 0) {
            var index = $(this).attr("enlarge-img-index");
            openPhotoSwipe(items, index);
        } else {
            var index = 0;
            var $th = $(this);
            $('.' + needEnlargeClassName).each(function (i, v) {
                var $thisImg = $(this);
                $thisImg.attr("enlarge-img-index", i);
                items.push({
                    src: $thisImg.attr("src"),
                    w: $thisImg[0].naturalWidth,
                    h: $thisImg[0].naturalHeight
                });
                if ($th.attr('src') == $thisImg.attr("src")) {
                    index = i;
                }
            });
            openPhotoSwipe(items, index);
        }
        $('.pswp__button--fs').trigger("click");
    });
    var $pswpHtml = '<div class="pswp photo-swipe-html" tabindex="-1" role="dialog" aria-hidden="true">'
        + '  <div class="pswp__bg"></div>'
        + '  <div class="pswp__scroll-wrap">'
        + '  <div class="pswp__container">'
        + '  <div class="pswp__item"></div>'
        + '  <div class="pswp__item"></div>'
        + '  <div class="pswp__item"></div>'
        + '  </div>'
        + '  <div class="pswp__ui pswp__ui--hidden">'
        + '  <div class="pswp__top-bar">'
        + '  <div class="pswp__counter"></div>'
        + '  <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>'
        + '  <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>'
        + '  <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>'
        + '  <div class="pswp__preloader">'
        + '  <div class="pswp__preloader__icn">'
        + '  <div class="pswp__preloader__cut">'
        + '  <div class="pswp__preloader__donut"></div>'
        + '  </div>'
        + '  </div>'
        + '  </div>'
        + '  </div>'
        + '  <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">'
        + '  <div class="pswp__share-tooltip"></div>'
        + '  </div>'
        + '  <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">'
        + '  </button>'
        + '  <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">'
        + '  </button>'
        + '  <div class="pswp__caption">'
        + '  <div class="pswp__caption__center"></div>'
        + '  </div>'
        + '  </div>'
        + '  </div>'
        + ' </div>';
    if ($('.photo-swipe-html').length == 0) {
        $('body').append($pswpHtml);
    }
};