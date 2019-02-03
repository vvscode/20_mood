var $ = document.querySelector.bind(document);

var container = $(".quote");
var quotes = JSON.parse($("#quotes_json").innerHTML);
var template = $("#quotes_tpl").innerHTML;

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
    (_, propName) => data[propName] || ""
  );
}

var quote = shuffleList(quotes)[0];
content = processTemplate(template, quote);
container.innerHTML = content;
