import{_ as e,c as a,o as r,a as t}from"./app.49a6a09a.js";const f=JSON.parse('{"title":"Processors","description":"","frontmatter":{},"headers":[{"level":2,"title":"stringifyProc(data, meta)","slug":"stringifyproc-data-meta"}],"relativePath":"api/processors.md"}'),s={name:"api/processors.md"},o=t('<h1 id="processors" tabindex="-1">Processors <a class="header-anchor" href="#processors" aria-hidden="true">#</a></h1><h2 id="stringifyproc-data-meta" tabindex="-1">stringifyProc(data, meta) <a class="header-anchor" href="#stringifyproc-data-meta" aria-hidden="true">#</a></h2><p>This function is responsible to generate a string of the AST representation.</p><p>Parameters:</p><ul><li><strong>data</strong>: this is essentially an array of objects. These objects, which are called nodes, are a representation of CSS preprocessor language nodes, it can be a mixin call, a variable declaration, etc. If you wanna generate it easily you can use the <a href="/octopo-js/api/factory.html">factory functions</a>.</li><li><strong>meta.grammar</strong>: this is the grammar rules object that will be used for rendering. For more details, check out <a href="/octopo-js/api/grammars.html">Grammars</a>.</li></ul><p>Returns: the string generated from the data and grammar.</p>',6),i=[o];function n(c,d,l,p,h,m){return r(),a("div",null,i)}var g=e(s,[["render",n]]);export{f as __pageData,g as default};
