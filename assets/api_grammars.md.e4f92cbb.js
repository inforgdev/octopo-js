import{_ as s,c as a,o as t,a as n}from"./app.49a6a09a.js";const A=JSON.parse('{"title":"Grammars","description":"","frontmatter":{},"headers":[{"level":2,"title":"Custom Grammar","slug":"custom-grammar"}],"relativePath":"api/grammars.md"}'),o={name:"api/grammars.md"},e=n(`<h1 id="grammars" tabindex="-1">Grammars <a class="header-anchor" href="#grammars" aria-hidden="true">#</a></h1><p>The grammar defines how the node will be stringified.</p><p>There are these languages available:</p><table><thead><tr><th>Variable</th><th>Description</th></tr></thead><tbody><tr><td><code>langs.scss</code></td><td>SCSS</td></tr><tr><td><code>langs.styl</code></td><td>Stylus</td></tr><tr><td><code>langs.less</code></td><td>LESS</td></tr><tr><td><code>langs.lessMin</code></td><td>LESS Minified</td></tr><tr><td><code>langs.scssMin</code></td><td>SCSS Minified</td></tr><tr><td><code>langs.stylMin</code></td><td>Stylus Minified</td></tr></tbody></table><p>These variables can be accessed by:</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">langs</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">octopo-js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="custom-grammar" tabindex="-1">Custom Grammar <a class="header-anchor" href="#custom-grammar" aria-hidden="true">#</a></h2><p>To create a custom grammar, just create a object and use these available keys:</p><table><thead><tr><th>Key</th><th>Description</th><th>Example (LESS)</th></tr></thead><tbody><tr><td>declaration</td><td></td><td></td></tr><tr><td><code>var</code></td><td>Variable declaration</td><td><code>&quot;@_NAME_: _EXPRESSION_&quot;</code></td></tr><tr><td><code>mixin</code></td><td>Mixin declaration</td><td><code>&quot;._NAME_(_PARAMS_) {\\n_BODY_}&quot;</code></td></tr><tr><td><code>dec</code></td><td>Property declaration</td><td><code>&quot;_PROP_: _VALUE_&quot;</code></td></tr><tr><td><code>param</code></td><td>Parameter declaration</td><td><code>&quot;@_NAME_&quot;</code></td></tr><tr><td><code>paramDefault</code></td><td>Mixin parameter declaration</td><td><code>&quot;@_NAME_: _DEFAULT_&quot;</code></td></tr><tr><td>expression</td><td></td><td></td></tr><tr><td><code>call</code></td><td>Mixin call</td><td><code>&quot;._NAME_(_ARGS_)&quot;</code></td></tr><tr><td><code>ref</code></td><td>Variable reference</td><td><code>&quot;@_NAME_&quot;</code></td></tr><tr><td><code>val</code></td><td>Value</td><td><code>&quot;_NAME_&quot;</code></td></tr><tr><td><code>arg</code></td><td>Argument</td><td><code>&quot;&quot;</code></td></tr><tr><td>artifacts</td><td></td><td></td></tr><tr><td><code>argSep</code></td><td>Argument separator</td><td><code>&quot;,&quot;</code></td></tr><tr><td><code>paramSep</code></td><td>Parameter separator</td><td><code>&quot;, &quot;</code></td></tr><tr><td>style</td><td></td><td></td></tr><tr><td><code>statementEnd</code></td><td>Statement end</td><td><code>&quot;;&quot;</code></td></tr><tr><td><code>needLastStatementEnd</code></td><td>Is last statement end needed?</td><td><code>true</code></td></tr><tr><td><code>indent</code></td><td>Identation</td><td><code>&quot; &quot;</code></td></tr><tr><td><code>needBrln</code></td><td>Is line breaker needed?</td><td><code>true</code></td></tr><tr><td><code>wordSep</code></td><td>Word separator</td><td><code>&quot;-&quot;</code></td></tr><tr><td><code>extname</code></td><td>File extname</td><td><code>&quot;.less&quot;</code></td></tr></tbody></table><p>Example:</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> customLang </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//declaration</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">var</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@_NAME_:_EXPRESSION_</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">mixin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">._NAME_(_PARAMS_){_BODY_}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">dec</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_PROP_:_VALUE_</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">param</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@_NAME_</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">paramDefault</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@_NAME_:_DEFAULT_</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//expression</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">call</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">._NAME_(_ARGS_)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ref</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@_NAME_</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">val</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">_NAME_</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">arg</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//artifacts</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">argSep</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">paramSep</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">//style</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">statementEnd</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">needLastStatementEnd</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">indent</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">needBrln</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">wordSep</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">extname</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.less</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,11),l=[e];function p(r,c,d,D,y,F){return t(),a("div",null,l)}var C=s(o,[["render",p]]);export{A as __pageData,C as default};