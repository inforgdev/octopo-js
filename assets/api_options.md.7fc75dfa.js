import{_ as s,c as a,o as n,a as o}from"./app.39aef179.js";const C=JSON.parse('{"title":"Options","description":"","frontmatter":{},"headers":[{"level":2,"title":"in: object","slug":"in-object"},{"level":2,"title":"in.data: Array","slug":"in-data-array"},{"level":2,"title":"proc: object","slug":"proc-object"},{"level":2,"title":"proc.grammar","slug":"proc-grammar"},{"level":2,"title":"out: object","slug":"out-object"},{"level":2,"title":"out.file: object","slug":"out-file-object"},{"level":2,"title":"out.print: boolean","slug":"out-print-boolean"}],"relativePath":"api/options.md"}'),p={name:"api/options.md"},l=o(`<h1 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h1><p>The octopo function accepts the following set of options:</p><h2 id="in-object" tabindex="-1"><strong>in</strong>: object <a class="header-anchor" href="#in-object" aria-hidden="true">#</a></h2><p>The input object of the render.</p><h2 id="in-data-array" tabindex="-1"><strong>in.data</strong>: Array <a class="header-anchor" href="#in-data-array" aria-hidden="true">#</a></h2><p>This is the AST that is going to be rendered.</p><p>Example:</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;">// using factory</span></span>
<span class="line"><span style="color:#FFCB6B;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [ </span><span style="color:#82AAFF;">_var</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_val</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#00f</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)) ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// background</span></span>
<span class="line"><span style="color:#FFCB6B;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">v</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">blue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">expression</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">val</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">expression</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#00f</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><p>For more details, check out <a href="/octopo-js/api/data.html">data</a>.</p><h2 id="proc-object" tabindex="-1"><strong>proc</strong>: object <a class="header-anchor" href="#proc-object" aria-hidden="true">#</a></h2><p>The processing options to render.</p><h2 id="proc-grammar" tabindex="-1"><strong>proc.grammar</strong> <a class="header-anchor" href="#proc-grammar" aria-hidden="true">#</a></h2><p>This is the grammar rules that goings be used to render.</p><h2 id="out-object" tabindex="-1"><strong>out</strong>: object <a class="header-anchor" href="#out-object" aria-hidden="true">#</a></h2><p>This defines where the output will be rendered.</p><h2 id="out-file-object" tabindex="-1"><strong>out.file</strong>: object <a class="header-anchor" href="#out-file-object" aria-hidden="true">#</a></h2><p>This defines the output as a file.</p><p>Example:</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">dirname</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./src/example/simple/dest</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">example</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>Default value:</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">file</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">dirname</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./dist/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">concrete</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">extname</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">proc</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">grammar</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">extname</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="out-print-boolean" tabindex="-1"><strong>out.print</strong>: boolean <a class="header-anchor" href="#out-print-boolean" aria-hidden="true">#</a></h2><p>This defines the output as a log in console.</p><p>Example:</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">print</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span></code></pre></div><p>Default value: <code>false</code></p>`,26),e=[l];function t(r,c,F,D,i,y){return n(),a("div",null,e)}var h=s(p,[["render",t]]);export{C as __pageData,h as default};
