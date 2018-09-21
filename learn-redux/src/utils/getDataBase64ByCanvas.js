/**
 * 通过 canvas 将文字转换成图像数据 base64
 */
export default function getDataBase64ByCanvas(params = {}) {
  const {
    text = 'canvas',
    font = {},
    mask = {},
  } = params;

  // 文本配置
  const fontSetting = Object.assign({}, {
    size: 20,
    color: '#000',
    family: 'Arial',
    align: 'middle',
    rotate: -10,
  }, font);

  // 图片配置
  const maskSetting = Object.assign({}, {
    color: '#fff',
    width: 200,
    height: 100,
    opacity: 1,
    type: 'png',
  }, mask);

  // 创建 canvas 标签
  const canvas = document.createElement('canvas');

  // 设置 canvas 宽度和高度
  canvas.width = maskSetting.width;
  canvas.height = maskSetting.height;

  // canvas 绘制对象
  const context = canvas.getContext('2d');

  // 设置透明度
  context.globalAlpha = maskSetting.opacity;

  // 绘制矩形作为背景颜色
  if (maskSetting.color) {
    context.fillStyle = maskSetting.color;
    context.fillRect(0, 0, maskSetting.width, maskSetting.height);
  }

  // 移动 canvas 中心
  context.translate(maskSetting.width / 2, maskSetting.height / 2);
  context.rotate(fontSetting.rotate * Math.PI / 180);

  // 绘制文本
  context.fillStyle = fontSetting.color;
  context.font = `${fontSetting.size}px ${fontSetting.family}`;
  const textWidth = context.measureText(text).width;
  context.fillText(text, - textWidth / 2, 0);
  context.textBaseline = fontSetting.align;

  //注意这里背景透明的话，需要使用png
  const dataUrl = canvas.toDataURL(`image/${maskSetting.type}`);

  return dataUrl;
}
