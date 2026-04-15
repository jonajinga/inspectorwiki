/**
 * InspectorWiki — Article Download
 * Exports article content as plain text (.txt) or Markdown (.md).
 */
(function () {
  'use strict';

  var btn   = document.getElementById('download-btn');
  var panel = document.getElementById('download-panel');
  if (!btn || !panel) return;

  function slugify(str) {
    return (str || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  function downloadBlob(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 150);
  }

  function getArticleText() {
    var el = document.querySelector('.prose');
    return el ? el.innerText.trim() : '';
  }

  function getMeta() {
    return {
      title:  btn.dataset.title  || document.title,
      date:   btn.dataset.date   || '',
      url:    btn.dataset.url    || window.location.href,
      slug:   btn.dataset.slug   || slugify(btn.dataset.title || document.title)
    };
  }

  function downloadTxt() {
    var m = getMeta();
    var body = getArticleText();
    var lines = [m.title, '='.repeat(Math.min(m.title.length, 60)), ''];
    if (m.date) lines.push('Published: ' + m.date);
    if (m.url)  lines.push('Source:    ' + m.url);
    lines.push('\u2500'.repeat(60), '', body);
    downloadBlob(
      new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' }),
      m.slug + '.txt'
    );
  }

  function downloadMd() {
    var m = getMeta();
    var body = getArticleText();
    var fm = ['---', 'title: "' + m.title.replace(/"/g, '\\"') + '"'];
    if (m.date) fm.push('date: ' + m.date);
    if (m.url)  fm.push('source: ' + m.url);
    fm.push('---', '');
    downloadBlob(
      new Blob([fm.join('\n') + '# ' + m.title + '\n\n' + body], { type: 'text/markdown;charset=utf-8' }),
      m.slug + '.md'
    );
  }

  // Panel toggle
  btn.addEventListener('click', function () {
    var open = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!open));
    panel.hidden = open;
  });

  document.addEventListener('click', function (e) {
    if (!btn.contains(e.target) && !panel.contains(e.target)) {
      btn.setAttribute('aria-expanded', 'false');
      panel.hidden = true;
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) {
      panel.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });

  var dlTxt = document.getElementById('dl-txt');
  var dlMd  = document.getElementById('dl-md');
  if (dlTxt) dlTxt.addEventListener('click', downloadTxt);
  if (dlMd)  dlMd.addEventListener('click',  downloadMd);
})();
