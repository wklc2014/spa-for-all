// 异步加载图片
export default function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        var img = new Image();
        img.onload = function() {
            resolve(img);
        };
        img.onerror = function() {
            reject(new Error('Could not load img at ' + url));
        };
        img.src = url;
    });
}