/**
* js 使用 canvas 将文字转换成图像数据 base64
* @param {String}    text              待填充的文本内容
* @param {Object}    options           绘制配置
*/
export default function getCanvasTextBase64(text, options = {}) {
  const settings = Object.assign({}, {
    // 文本字体大小
    fontsize: 12,
    // 文本字体颜色
    fontcolor: '#000',
    // 文本字体
    fontfamily: 'Arial',
    // 文本对其
    textalign: 'middle',
    // 填充背景
    bgcolor: false,
    // 透明度
    opacity: 0.5,
    // 背景大小
    size: 100,
    // 文字旋转角度
    rotate: 0,
  }, options);

  // 创建 canvas 标签
  const canvas = document.createElement('canvas');

  // 设置 canvas 宽度和高度
  canvas.width = settings.size;
  canvas.height = settings.size;

  const context = canvas.getContext('2d');

  // 设置透明度
  context.globalAlpha = settings.opacity;

  // 绘制矩形作为背景颜色
  if (settings.bgcolor) {
    context.fillStyle = settings.bgcolor;
    context.fillRect(0, 0, settings.size, settings.size);
  }

  // 移动 canvas 中心
  context.translate(settings.size / 2, settings.size / 2);
  context.rotate(settings.rotate * Math.PI / 180);

  context.fillStyle = settings.fontcolor;
  context.font = `${settings.fontsize}px ${settings.fontfamily}`;
  const text_width = context.measureText(text).width;
  context.fillText(text, - text_width / 2, 0);
  context.textBaseline = settings.textalign;

  //注意这里背景透明的话，需要使用png
  const dataUrl = canvas.toDataURL('image/png');

  return dataUrl;
}