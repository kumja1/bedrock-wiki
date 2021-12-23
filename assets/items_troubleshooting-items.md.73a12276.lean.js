import{_ as p,r,c as i,a as s,w as n,e as t,d as e,o as l}from"./404.md.0220fa55.js";const B='{"title":"Troubleshooting Items","description":"","frontmatter":{"title":"Troubleshooting Items","category":"General","nav_order":4,"tags":["help"]},"headers":[{"level":2,"title":"Start Here","slug":"start-here"},{"level":2,"title":"1.10 vs 1.16 Items?","slug":"_1-10-vs-1-16-items"},{"level":3,"title":"Continue","slug":"continue"},{"level":2,"title":"Stable Items","slug":"stable-items"},{"level":3,"title":"I cannot /give myself my custom item!","slug":"i-cannot-give-myself-my-custom-item"},{"level":3,"title":"My textures are missing!","slug":"my-textures-are-missing"},{"level":2,"title":"Experimental Items","slug":"experimental-items"},{"level":3,"title":"I cannot /give myself my custom item!","slug":"i-cannot-give-myself-my-custom-item-1"},{"level":3,"title":"My Textures Are Missing!","slug":"my-textures-are-missing-1"},{"level":3,"title":"My item is Huge","slug":"my-item-is-huge"},{"level":2,"title":"What now?","slug":"what-now"}],"relativePath":"items/troubleshooting-items.md","lastUpdated":1640222253178}',u={},c=t('',5),m=e("Continue"),d=t('',7),h=e("1.10 format (stable)"),b=e(),_=e("1.16.100 format (experimental)"),k=t('',15),f=e("RP/textures/item_texture.json"),g=t(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;resource_pack_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;texture_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atlas.items&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;texture_data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;gem&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/gem&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Next, navigate to your items RP file. Ensure that it is in the correct folder. Some examples of incorrect paths:</p><ul><li>\u26A0\uFE0F <code>item/gem.json</code></li></ul><p>An example file, to compare against:</p>__VP_STATIC_END__`,4),y=e("RP/items/gem.json"),q=t(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:gem&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Nature&quot;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;minecraft:icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gem&quot;</span><span class="token punctuation">,</span> <span class="token comment">//make sure this string matches the string you put in item_texture.json!</span>
			<span class="token property">&quot;minecraft:render_offsets&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tools&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>If you followed this properly, your item should now have a texture.</p><hr><p><a name="3.0"></a></p><h2 id="experimental-items" tabindex="-1">Experimental Items <a class="header-anchor" href="#experimental-items" aria-hidden="true">#</a></h2><p>This section contains troubleshooting information for experimental items. Remember, you are using the <code>1.16</code> format, so there shouldn&#39;t be an RP file for your item! If you have both an RP file and a BP file, you have become confused between format versions. <a href="#2.0">Please start again here.</a></p><p>Find the issue you have, then read the prompts.</p><ul><li><a href="#3.1">I cannot /give myself my custom item!</a></li><li><a href="#3.2">My textures are missing!</a></li><li><a href="#3.3">My item is huge!</a></li></ul><p><a name="3.1"></a></p><h3 id="i-cannot-give-myself-my-custom-item-1" tabindex="-1">I cannot /give myself my custom item! <a class="header-anchor" href="#i-cannot-give-myself-my-custom-item-1" aria-hidden="true">#</a></h3><ul><li>Confirm that your pack is actually applied to your world</li><li>Confirm that your item is in the folder <code>BP/items/</code></li><li>Confirm that your item is valid, according to <a href="https://jsonlint.com/" target="_blank" rel="noopener noreferrer">jsonlint</a>.</li><li>Confirm that your identifier is all lowercase, and looks similar to this: <code>wiki:my_item</code></li></ul><p><a name="3.2"></a></p><h3 id="my-textures-are-missing-1" tabindex="-1">My Textures Are Missing! <a class="header-anchor" href="#my-textures-are-missing-1" aria-hidden="true">#</a></h3><p>Navigate to your <code>item_texture.json</code> file. Ensure that it is properly named, and in the correct folder. Some examples of wrong names:</p><ul><li>\u26A0\uFE0F <code>texture/item_texture.json</code></li><li>\u26A0\uFE0F <code>textures/Item_texture.json</code></li><li>\u26A0\uFE0F <code>textures/item_textures.json</code></li></ul><p>Here is an example file to compare against:</p>__VP_STATIC_END__`,16),v=e("RP/textures/item_texture.json"),x=t(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;resource_pack_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;texture_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atlas.items&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;texture_data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;gem&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token string">&quot;textures/items/gem&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Next, navigate to your items BP file. Place the <code>minecraft:icon</code> component in your item file under the components section. Ensure that it is properly named.</p>__VP_STATIC_END__`,2),T=e("BP/items/your_item.json"),w=t(`__VP_STATIC_START__<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.100&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;minecraft:item&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;namespace:your_item&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;items&quot;</span>     <span class="token comment">// This line is required</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;components&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;minecraft:icon&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;texture&quot;</span><span class="token operator">:</span> <span class="token string">&quot;your_item_name&quot;</span> <span class="token comment">//make sure this string matches the string you put in item_texture.json</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;events&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>If you followed this properly, your item should now have a texture.</p><p><a name="3.3"></a></p><h3 id="my-item-is-huge" tabindex="-1">My item is Huge <a class="header-anchor" href="#my-item-is-huge" aria-hidden="true">#</a></h3><p>To turn it to back into a normal size item (<code>16x16</code>), use the following formula: <code>base value/(res/16)</code></p><p>The base values, <code>[0.075, 0.125, 0.075]</code>, seems to be the about the same scale value as normal items.</p><hr><h2 id="what-now" tabindex="-1">What now? <a class="header-anchor" href="#what-now" aria-hidden="true">#</a></h2><p>You&#39;ve reached the end of the guide. If you still have any problems, feel free to <a href="/discord.html">join the discord server</a> and ask your question there.</p>__VP_STATIC_END__`,9);function I(P,C,S,j,A,V){const o=r("BButton"),a=r("CodeHeader");return l(),i("div",null,[c,s(o,{color:"blue",link:"#_1-10-vs-1-16-items"},{default:n(()=>[m]),_:1}),d,s(o,{color:"blue",link:"#stable-items"},{default:n(()=>[h]),_:1}),b,s(o,{color:"blue",link:"#experimental-items"},{default:n(()=>[_]),_:1}),k,s(a,null,{default:n(()=>[f]),_:1}),g,s(a,null,{default:n(()=>[y]),_:1}),q,s(a,null,{default:n(()=>[v]),_:1}),x,s(a,null,{default:n(()=>[T]),_:1}),w])}var N=p(u,[["render",I]]);export{B as __pageData,N as default};