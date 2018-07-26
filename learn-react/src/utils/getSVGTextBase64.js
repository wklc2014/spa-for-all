export default function getSVGTextBase64(text, svgStyle) {
  var svgNS = 'http://www.w3.org/2000/svg';

  function createTag(tag, objAttr) {
    var oTag = document.createElementNS(svgNS, tag);
    for (var attr in objAttr) {
      oTag.setAttribute(attr, objAttr[attr]);
    }
    return oTag;
  }

  function encode(input) {
    function utf8_encode(string) {
      string = string.replace(/\r\n/g, "\n");
      var utftext = "";

      for (var n = 0; n < string.length; n++) {

        var c = string.charCodeAt(n);

        if (c < 128) {
          utftext += String.fromCharCode(c);
        } else if ((c > 127) && (c < 2048)) {
          utftext += String.fromCharCode((c >> 6) | 192);
          utftext += String.fromCharCode((c & 63) | 128);
        } else {
          utftext += String.fromCharCode((c >> 12) | 224);
          utftext += String.fromCharCode(((c >> 6) & 63) | 128);
          utftext += String.fromCharCode((c & 63) | 128);
        }

      }

      return utftext;
    }
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    input = utf8_encode(input);


    while (i < input.length) {

      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }

      output = output +
        _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
        _keyStr.charAt(enc3) + _keyStr.charAt(enc4);

    }

    return output;
  }
  svgStyle = Object.assign({
    'width': '50px',
    'height': '50px',
    'text-anchor': 'left',
    'font-size': '12px',
    // 'transform': 'translate(0 50) rotate(-15)',
    'x': '0',
    'y': '1em',
  }, svgStyle);
  var oSvg = createTag('svg', { 'xmlns': svgNS, 'width': svgStyle.width, 'height': svgStyle.height, });
  var oText = createTag('text', svgStyle);
  oText.innerHTML = text;
  oSvg.appendChild(oText);
  var svgStr = new XMLSerializer().serializeToString(oSvg);
  var bgUrl = 'data:image/svg+xml;base64,' + encode(svgStr);
  return bgUrl;
}
