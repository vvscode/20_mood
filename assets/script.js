var $ = document.querySelector.bind(document);

var container = $(".js-quote");
var quotes = JSON.parse($(".js-quotes_json").innerHTML);
var template = $(".js-quotes_tpl").innerHTML;

// https://css-tricks.com/snippets/javascript/htmlentities-for-javascript/
function htmlEntities(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function shuffleList(list) {
  return list.sort(function() {
    var random = Math.random();
    if (random < 0.35) {
      return -1;
    }
    if (random > 0.65) {
      return 1;
    }
    return 0;
  });
}

function processTemplate(temlate, data) {
  data = data || {};
  return template.replace(
    /\$\{(.+?)\}/g,
    (_, propName) => htmlEntities(data[propName] || "")
  );
}

var quote = shuffleList(quotes)[0];
content = processTemplate(template, quote);
container.innerHTML = content;
