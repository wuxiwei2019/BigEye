# BigEye

#### 编码识别工具

> 开发时间：2020年10月
>

#### 功能介绍

操作界面

![image-20201118094410126](E:\Virtual Machines\网络安全\99-Tools\Python工具集\BigEye\images\image-20201118094410126.png)

​	输入的字符串，选择Reverse后，可以将输入的字符串倒序后进行识别。

编码正则配置文件路径：js/config/reg.js,可以根据需求进行修改和添加正则。

- base集编码识别

  ```javascript
  "base": [
          {"name":"base16","regStr": "^([0-9A-Fa-f]{2})*([0-9A-Fa-f]{2})$"},
          {"name":"base32","regStr": "^([A-Z2-7]{8})*([A-Z2-7]{8}|[A-Z2-7]{2}={6}|[A-Z2-7]{3}={5}|[A-Z2-7]{4}={4}|[A-Z2-7]{5}={3}|[A-Z2-7]{6}={2}|[A-Z2-7]{7}={1})$"},
          {"name":"base36","regStr":  "^[0-9A-Z]*[0-9A-Z]$"},
          {"name":"base58","regStr": "^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]*[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]$"},
          {"name":"base62","regStr": "^[A-Za-z0-9]*[A-Za-z0-9]$"},
          {"name":"base64","regStr": "^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{2,4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$"},
          {"name":"base85-standent","regStr": "^[!-u]*[!-u]$"},
          {"name":"base85-Z85","regStr": "^[^`\\\\,\"_';]*[^`\\\\,\"_';]$"},
          {"name":"base85-IPV6","regStr": "^[^\.\"',:\\[\\]]*[^\.\"',:\\[\\]]$"},
          {"name":"base91","regStr": "^[^-\\\\']*[^-\\\\']$"},
          {"name":"base92","regStr": "^[^~]*[^~]$"}
      ]
  ```

- 常用编码识别

  ```javascript
  "encode":[
          {"name":"Brainfuck","regStr":"^[<>+-.,\\[\\]]*[<>+-.,\\[\\]]$"},
          {"name":"JsFuck","regStr":"^[()\\[\\]!+]*[()\\[\\]!+]$"},
          {"name":"JsOther","regStr":"^[!+()\\[\\]\\{\\}]*[!+()\\[\\]\\{\\}]$"},
          {"name":"Bubble Babble","regStr":"^x[a-z]{4}(-[a-z]{5})*(-[a-z]{4}x)$"},
          {"name":"TAPCode","regStr":"^([1-5]{2})*([1-5]{2})$"},
          {"name":"TAPCode2","regStr":"^(.{1,5} .{1,5}/)*(.{1,5} .{1,5})$"},
          {"name":"Ook","regStr":"^[Ook?|Ook!|Ook\.|Ook? |Ook! |Ook\. |Ook\.\n]*[Ook?|Ook!|Ook\.]$"},
          {"name":"OokShort","regStr":"^[\.!? ]*[\.!? ]$"},
          {"name":"MorseCode","regStr":"^[-\./ ]*[-\./ ]$"},
          {"name":"UUencode","regStr":"^[!-_ ]*[!-_ ]$"},
          {"name":"XXencode","regStr":"^[A-Za-z0-9+-]*[A-Za-z0-9+-]$"},
          {"name":"Quoted-printable","regStr":"^(=[0-9A-Fa-f]{2})*(=[0-9A-Fa-f]{2})$"},
  
      ]
  ```

- 加密字符串识别

  ```javascript
  "crypto":[
          {"name":"Bacon","regStr":"^([aAbB |aAbB]{5,6})*([aAbB]{5}$)"},
          {"name":"D01248 云影密码","regStr":"^[01248]*[01248]$"},
          {"name":"Phone 手机键盘","regStr":"^([1-3][1-9][01][ ]|[1-3][1-9][ ])*([1-3][1-9][01][ ]*|[1-3][1-9][ ]*)$"},
          {"name":"Phone 手机键盘2","regStr":"^([2-9][1-4][ ]|[2-9][1-4])*([2-9][1-4][ ]*)$"},
          {"name":"Phone 手机键盘3","regStr":"^([2-9]{1,6}[ ])*([2-9]{1,6}[ ]*)$"},
          {"name":"Phone 手机键盘3","regStr":"^([2-9]{1,6}[ ])*([2-9]{1,6}[ ]*)$"},
          {"name":"AES/DES/3DES/Rabbit/RC4","regStr":"^U2FsdGVkX1"},
          {"name":"ADFGX 密码","regStr":"([ADFGX]{2})+"},
          {"name":"ADFGVX 密码","regStr":"([ADFGVX]{2})+"},
          {"name":"ROT47","regStr":"^[!-~]*[!-~]$"},
      ]
  ```