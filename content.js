/*
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Donald Trump|Donald J. Trump/gi, 'Donny Pigfarts');
            var replacedText = text.replace(/President Donald Trump|President Donald J. Trump|President Trump/gi, 'Lord Pigfarts');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
*/

function replaceTextOnPage(from, to){
  getAllTextNodes().forEach(function(node){
    node.nodeValue = node.nodeValue.replace(new RegExp(quote(from), 'g'), to);
  });

  function getAllTextNodes(){
    var result = [];

    (function scanSubTree(node){
      if(node.childNodes.length) 
        for(var i = 0; i < node.childNodes.length; i++) 
          scanSubTree(node.childNodes[i]);
      else if(node.nodeType == Node.TEXT_NODE) 
        result.push(node);
    })(document);

    return result;
  }

  function quote(str){
    return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
  }
}

  replaceTextOnPage('Donald John Trump', 'Donny "Little Piggy" Pigfarts');
  replaceTextOnPage('Donald J. Trump', 'Donny Pigfarts');
  replaceTextOnPage('Donald Trump', 'Donny Pigfarts');
  replaceTextOnPage('DonaldTrump', 'DonnyPigfarts');
  replaceTextOnPage('President Trump', 'Lord Pigfarts');
  replaceTextOnPage('Trump', 'Piggy');
