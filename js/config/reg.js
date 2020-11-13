var reg = 
{
    "base": [
        {"name":"base16","regStr": "^([0-9A-Fa-f]{2})*([0-9A-Fa-f]{2})$"},
        {"name":"base32","regStr": "^([A-Z2-7]{8})*([A-Z2-7]{8}|[A-Z2-7]{2}={6}|[A-Z2-7]{3}={5}|[A-Z2-7]{4}={4}|[A-Z2-7]{5}={3}|[A-Z2-7]{6}={2}|[A-Z2-7]{7}={1})$"},
        {"name":"base36","regStr":  "^[0-9A-Z]*[0-9A-Z]$"},
        {"name":"base58","regStr": "^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]*[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]$"},
        {"name":"base62","regStr": "^[A-Za-z0-9]*[A-Za-z0-9]$"},
        {"name":"base64","regStr": "^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$"},
        {"name":"base85-standent","regStr": "^[!-u]*[!-u]$"},
        {"name":"base85-Z85","regStr": "^[^`\\\\,\"_';]*[^`\\\\,\"_';]$"},
        {"name":"base85-IPV6","regStr": "^[^\.\"',:\\[\\]]*[^\.\"',:\\[\\]]$"},
        {"name":"base91","regStr": "^[^-\\\\']*[^-\\\\']$"},
        {"name":"base92","regStr": "^[^~]*[^~]$"}
    ],
    "crypto":[
        {"name":"Brainfuck","regStr":"^[<>+-.,\\[\\]]*[<>+-.,\\[\\]]$"},
        {"name":"JsFuck","regStr":"^[()\\[\\]!+]*[()\\[\\]!+]$"},
        {"name":"JsOther","regStr":"^[!+()\\[\\]\\{\\}]*[!+()\\[\\]\\{\\}]$"},
        {"name":"UUencode","regStr":"^[!-_ ]*[!-_ ]$"},
        {"name":"TAPCode","regStr":"^([1-5]{2})*([1-5]{2})$"},
        {"name":"TAPCode2","regStr":"^(.{1,5} .{1,5}/)*(.{1,5} .{1,5})$"},

    ]
}