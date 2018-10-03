/**
 * 通过 canvas 将文字转换成图像数据 base64
 */
function getDataBase64ByCanvas(params = {}) {
  const settings = Object.assign({}, {
    // 文本内容
    text: 'canvas',
    // 文本对其
    textAlign: 'middle',
    // 文本旋转角度
    textRotate: -20,
    // 文本颜色
    fontColor: '#000',
    // 文本字体
    fontFamily: 'Arial',
    // 文本大小
    fontSize: 20,
    // 背景颜色
    backgroundColor: '#fff',
    // 背景图像
    backgroundImage: null,
    // 生成图像宽度
    maskWidth: 200,
    // 生成图像高度
    maskHeight: 100,
    // 生成图像透明度
    maskOpacity: 1,
  }, params);

  // 创建 canvas 标签
  const canvas = document.createElement('canvas');

  // 设置 canvas 宽度和高度
  canvas.width = settings.maskWidth;
  canvas.height = settings.maskHeight;

  // canvas 绘制对象
  const context = canvas.getContext('2d');

  // 设置透明度
  context.globalAlpha = settings.maskOpacity;

  // 绘制矩形作为背景颜色
  if (settings.backgroundImage) {
    context.drawImage(settings.backgroundImage, 0, 0, settings.maskWidth, settings.maskHeight);
  } else if (settings.backgroundColor) {
    context.fillStyle = settings.backgroundColor;
    context.fillRect(0, 0, settings.maskWidth, settings.maskHeight);
  }

  // 移动 canvas 中心
  context.translate(settings.maskWidth / 2, settings.maskHeight / 2);
  context.rotate(settings.textRotate * Math.PI / 180);

  // 绘制文本
  context.fillStyle = settings.fontColor;
  context.font = `${settings.fontSize}px ${settings.fontFamily}`;
  const textWidth = context.measureText(settings.text).width;
  context.fillText(settings.text, - textWidth / 2, 0);
  context.textBaseline = settings.textAlign;

  //注意这里背景透明的话，需要使用png
  const dataUrl = canvas.toDataURL('image/png');

  return dataUrl;
}

export default getDataBase64ByCanvas;
