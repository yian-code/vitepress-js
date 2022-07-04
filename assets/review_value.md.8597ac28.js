import{_ as s,c as a,o as n,a as l}from"./app.d4969a7f.js";const i=JSON.parse('{"title":"\u6570\u503C\u548C\u8FD0\u7B97\u7B26","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6570\u503C\u5206\u9694\u7B26","slug":"\u6570\u503C\u5206\u9694\u7B26"},{"level":2,"title":"BigInt\u6570\u636E\u7C7B\u578B","slug":"bigint\u6570\u636E\u7C7B\u578B"},{"level":2,"title":"\u6307\u6570\u8FD0\u7B97\u7B26","slug":"\u6307\u6570\u8FD0\u7B97\u7B26"},{"level":2,"title":"\u903B\u8F91\u8D4B\u503C\u8FD0\u7B97\u7B26","slug":"\u903B\u8F91\u8D4B\u503C\u8FD0\u7B97\u7B26"},{"level":2,"title":"\u6253\u5370\u7EC4","slug":"\u6253\u5370\u7EC4"}],"relativePath":"review/value.md"}'),p={name:"review/value.md"},o=l(`<h1 id="\u6570\u503C\u548C\u8FD0\u7B97\u7B26" tabindex="-1">\u6570\u503C\u548C\u8FD0\u7B97\u7B26 <a class="header-anchor" href="#\u6570\u503C\u548C\u8FD0\u7B97\u7B26" aria-hidden="true">#</a></h1><h2 id="\u6570\u503C\u5206\u9694\u7B26" tabindex="-1">\u6570\u503C\u5206\u9694\u7B26 <a class="header-anchor" href="#\u6570\u503C\u5206\u9694\u7B26" aria-hidden="true">#</a></h2><p>\u5141\u8BB8 JavaScript \u7684\u6570\u503C\u4F7F\u7528\u4E0B\u5212\u7EBF\uFF08<code>_</code>\uFF09\u4F5C\u4E3A\u5206\u9694\u7B26\u3002</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> number </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000_000_000_000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">123_00</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12_300</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">12345_00</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123_4500</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"><span style="color:#F78C6C;">12345_00</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1_234_500</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// true</span></span>
<span class="line"></span></code></pre></div><h2 id="bigint\u6570\u636E\u7C7B\u578B" tabindex="-1">BigInt\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#bigint\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h2><p><code>BigInt</code> \u53EA\u7528\u6765\u8868\u793A\u6574\u6570\uFF0C\u6CA1\u6709\u4F4D\u6570\u7684\u9650\u5236\uFF0C\u4EFB\u4F55\u4F4D\u6570\u7684\u6574\u6570\u90FD\u53EF\u4EE5\u7CBE\u786E\u8868\u793A\u3002\u4E3A\u4E86\u4E0E <code>Number</code> \u7C7B\u578B\u533A\u522B\uFF0C<code>BigInt</code> \u7C7B\u578B\u7684\u6570\u636E\u5FC5\u987B\u6DFB\u52A0\u540E\u7F00 <code>n</code></p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2123131313</span><span style="color:#C792EA;">n</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2343545456</span><span style="color:#C792EA;">n</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( a </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> b )</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 4975654741072463728n</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2123131313</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2343545456</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( a </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> b )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 4975654741072464000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">42</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">42</span><span style="color:#C792EA;">n</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//false</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">BigInt\u4E0D\u80FD\u4F7F\u7528\u8D1F\u53F7\uFF08\u4E0Easm.js\u51B2\u7A81\uFF09</p></div><h2 id="\u6307\u6570\u8FD0\u7B97\u7B26" tabindex="-1">\u6307\u6570\u8FD0\u7B97\u7B26 <a class="header-anchor" href="#\u6307\u6570\u8FD0\u7B97\u7B26" aria-hidden="true">#</a></h2><p>ES6\u65B0\u589E</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">**</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2.2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">**=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// a = a * a;</span></span>
<span class="line"><span style="color:#A6ACCD;">a </span><span style="color:#89DDFF;">**=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// a = a * a * a * a</span></span>
<span class="line"></span></code></pre></div><h2 id="\u903B\u8F91\u8D4B\u503C\u8FD0\u7B97\u7B26" tabindex="-1">\u903B\u8F91\u8D4B\u503C\u8FD0\u7B97\u7B26 <a class="header-anchor" href="#\u903B\u8F91\u8D4B\u503C\u8FD0\u7B97\u7B26" aria-hidden="true">#</a></h2><p>\u903B\u8F91\u8FD0\u7B97\u7B26\u4E0E\u8D4B\u503C\u8FD0\u7B97\u7B26\u7684\u7ED3\u5408</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// \u6216\u8D4B\u503C\u8FD0\u7B97\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">||=</span><span style="color:#A6ACCD;"> y</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u7B49\u540C\u4E8E</span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> (x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> y)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u4E0E\u8D4B\u503C\u8FD0\u7B97\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">&amp;&amp;=</span><span style="color:#A6ACCD;"> y</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u7B49\u540C\u4E8E</span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> (x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> y)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Null \u8D4B\u503C\u8FD0\u7B97\u7B26</span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">??=</span><span style="color:#A6ACCD;"> y</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u7B49\u540C\u4E8E</span></span>
<span class="line"><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">??</span><span style="color:#A6ACCD;"> (x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> y)</span></span>
<span class="line"></span></code></pre></div><h2 id="\u6253\u5370\u7EC4" tabindex="-1">\u6253\u5370\u7EC4 <a class="header-anchor" href="#\u6253\u5370\u7EC4" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">group</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">--------------beforeCreate-------------</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">el: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$el)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">data: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$data)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">msg: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">msg)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">groupEnd</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,16),e=[o];function c(t,r,y,C,D,A){return n(),a("div",null,e)}var d=s(p,[["render",c]]);export{i as __pageData,d as default};
