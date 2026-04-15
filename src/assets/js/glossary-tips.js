/**
 * InspectorWiki — Glossary Tooltips
 * Auto-detect glossary terms in prose content and show definitions via Tippy.js.
 */
(function () {
  'use strict';

  var body = document.querySelector('.prose');
  if (!body) return;

  var terms = window.__glossaryTerms;
  if (!terms || !terms.length) return;

  if (typeof tippy === 'undefined') return;

  var termMap = {};
  terms.forEach(function (t) {
    termMap[t.term.toLowerCase()] = t;
  });

  var sorted = terms.map(function (t) { return t.term; }).sort(function (a, b) { return b.length - a.length; });
  var pattern = new RegExp('\\b(' + sorted.map(function (t) {
    return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }).join('|') + ')\\b', 'gi');

  var walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT, {
    acceptNode: function (node) {
      var parent = node.parentNode;
      if (!parent) return NodeFilter.FILTER_REJECT;
      var tag = parent.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'CODE' || tag === 'PRE' ||
          tag === 'A' || tag === 'MARK' || parent.classList.contains('glossary-tip')) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  var nodesToProcess = [];
  var node;
  while ((node = walker.nextNode())) {
    if (pattern.test(node.nodeValue)) {
      nodesToProcess.push(node);
    }
    pattern.lastIndex = 0;
  }

  var seen = {};

  nodesToProcess.forEach(function (textNode) {
    var text = textNode.nodeValue;
    var frag = document.createDocumentFragment();
    var lastIndex = 0;

    pattern.lastIndex = 0;
    var match;
    while ((match = pattern.exec(text)) !== null) {
      var key = match[1].toLowerCase();
      if (seen[key]) continue;
      seen[key] = true;

      var info = termMap[key];
      if (!info) continue;

      if (match.index > lastIndex) {
        frag.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));
      }

      var span = document.createElement('span');
      span.className = 'glossary-tip';
      span.textContent = match[0];
      span.setAttribute('data-tippy-content', info.def);
      span.setAttribute('tabindex', '0');
      frag.appendChild(span);

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      frag.appendChild(document.createTextNode(text.slice(lastIndex)));
    }

    if (lastIndex > 0) {
      textNode.parentNode.replaceChild(frag, textNode);
    }
  });

  tippy('.glossary-tip', {
    theme: 'glossary',
    placement: 'top',
    arrow: true,
    delay: [200, 0],
    maxWidth: 320,
    interactive: false,
    appendTo: document.body
  });
})();
