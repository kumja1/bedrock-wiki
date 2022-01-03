import{_ as p,r as o,c as r,a as s,b as e,d as t,e as a,o as l}from"./404.md.07608c93.js";const C='{"title":"Entity Properties","description":"","frontmatter":{"title":"Entity Properties","category":"General","tags":["experimental"]},"headers":[{"level":2,"title":"Entity Properties Definition","slug":"entity-properties-definition"},{"level":3,"title":"Defining Properties on Entities","slug":"defining-properties-on-entities"},{"level":3,"title":"Entity Properties Object Fields","slug":"entity-properties-object-fields"},{"level":3,"title":"Manipulating and Accessing Entity Properties","slug":"manipulating-and-accessing-entity-properties"},{"level":2,"title":"Entity Aliases","slug":"entity-aliases"},{"level":2,"title":"Entity Permutations","slug":"entity-permutations"}],"relativePath":"entities/entity-properties.md","lastUpdated":1641229279838}',c={},u=e("p",null,'Documentation on the new Entity Properties, also known as Actor Properties, introduced in the 1.16.230.52 Minecraft: Bedrock Edition beta version. Entity Properties were implemented to save data or store values on entities efficiently without needing the use of components or attributes (For example, "minecraft:variant") in server-side of the entity (Behavior Pack), similar to Block Properties.',-1),i=e("h2",{id:"entity-properties-definition",tabindex:"-1"},[t("Entity Properties Definition "),e("a",{class:"header-anchor",href:"#entity-properties-definition","aria-hidden":"true"},"#")],-1),b=e("h3",{id:"defining-properties-on-entities",tabindex:"-1"},[t("Defining Properties on Entities "),e("a",{class:"header-anchor",href:"#defining-properties-on-entities","aria-hidden":"true"},"#")],-1),k=e("p",null,"Entity Properties Definition:",-1),m=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;minecraft:entity&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span><span class="token string">&quot;entity:properties_example&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;property:number_range_example&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;values&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                        <span class="token property">&quot;min&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;max&quot;</span><span class="token operator">:</span><span class="token number">100</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;property:number_enum_example&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;values&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token number">1</span><span class="token punctuation">,</span>
                        <span class="token number">2</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;property:string_enum_example&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;values&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token string">&quot;first&quot;</span><span class="token punctuation">,</span>
                        <span class="token string">&quot;second&quot;</span><span class="token punctuation">,</span>
                        <span class="token string">&quot;third&quot;</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;property:boolean_enum_example&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                    <span class="token property">&quot;values&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                        <span class="token boolean">true</span><span class="token punctuation">,</span>
                        <span class="token boolean">false</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h3 id="entity-properties-object-fields" tabindex="-1">Entity Properties Object Fields <a class="header-anchor" href="#entity-properties-object-fields" aria-hidden="true">#</a></h3><h4 id="values" tabindex="-1"><code>values</code> <a class="header-anchor" href="#values" aria-hidden="true">#</a></h4><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><code>values</code> property is required, and omitting this field may cause errors and failure to register the property.</p></div><p><code>values</code> field can be evaluated as an array of enum values, or a range of minimum and maximum values (Note that integer, float, and boolean enum values currently supports only two values):</p>`,5),d=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;property:range_example&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><strong>OR</strong></p>`,2),y=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;property:enum_example&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;values&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token number">2</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="default" tabindex="-1"><code>default</code> <a class="header-anchor" href="#default" aria-hidden="true">#</a></h4><p>You can set the default value of the entity property (by default, the first value of the enum array index) through the <code>default</code> field inside the defined property object:</p>`,3),_=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;property:default_value_example&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;values&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token boolean">false</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>As you can observe, the default property is set to <code>false</code> instead of <code>true</code> when the entity is spawned in the world.</p><h4 id="client-sync" tabindex="-1"><code>client_sync</code> <a class="header-anchor" href="#client-sync" aria-hidden="true">#</a></h4><p>To sync through the Resource Pack (client-side), <code>client_sync</code> field can be used to allow the Client Entity access the Entity Properties. By default, the value is set to <code>false</code>.</p>`,4),q=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;property:client_sync_example&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;client_sync&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="manipulating-and-accessing-entity-properties" tabindex="-1">Manipulating and Accessing Entity Properties <a class="header-anchor" href="#manipulating-and-accessing-entity-properties" aria-hidden="true">#</a></h3><p>You can access entity properties through MoLang Entity Queries: - <code>query.actor_property</code> - <code>query.has_actor_property</code></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>These MoLang Entity Queries are a part of Experimental features</p></div><p>With entity events, you may set the entity property to a value with the <code>set_actor_property</code> event response:</p>`,5),h=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;events&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;event:set_entity_property&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;set_actor_property&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;property:number_enum_example&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;property:string_enum_example&quot;</span><span class="token operator">:</span><span class="token string">&quot;&#39;second&#39;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;property:boolean_enum_example&quot;</span><span class="token operator">:</span><span class="token string">&quot;!query.actor_property(&#39;property:boolean_enum_example&#39;)&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="entity-aliases" tabindex="-1">Entity Aliases <a class="header-anchor" href="#entity-aliases" aria-hidden="true">#</a></h2><p>You can define aliases for your entity to summon the entity with set entity property values through the <code>summon</code> command. Entity can have various aliases with custom entity identifier to use:</p>`,3),f=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.16.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;minecraft:entity&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;entity:properties_example&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_spawnable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_summonable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token property">&quot;is_experimental&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
			<span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;property:property_index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;client_sync&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
					<span class="token property">&quot;values&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
						<span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
						<span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
					<span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;aliases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;entity:default_alias&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;entity:first_alias&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;property:property_index&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;entity:second_alias&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;property:property_index&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>Now, the entity has multiple aliases, and you can use the defined alias identifier through the <code>summon</code> command to spawn the entity with the properties set: <code>/summon entity:first_alias</code> will spawn the entity with the entity property <code>property:property_index</code> set to 1.</p><h2 id="entity-permutations" tabindex="-1">Entity Permutations <a class="header-anchor" href="#entity-permutations" aria-hidden="true">#</a></h2><p>Entity Permutations are implemented to apply a set of components every tick if the condition is met. <code>permutations</code> array is inserted in the <code>minecraft:entity</code> object, the same level as the <code>components</code> object:</p>`,4),v=a(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;permutations&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span><span class="token string">&quot;query.actor_property(&#39;property:string_enum_example&#39;) == &#39;first&#39;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;components&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;minecraft:scale&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token number">1.0</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span><span class="token string">&quot;query.actor_property(&#39;property:string_enum_example&#39;) == &#39;second&#39;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;components&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;minecraft:scale&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token number">2.0</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span><span class="token string">&quot;query.actor_property(&#39;property:string_enum_example&#39;) == &#39;third&#39;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;components&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;minecraft:scale&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token number">3.0</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>As we observed, if the entity property &quot;<code>property:string_enum_example</code>&quot; value is &quot;<code>first</code>&quot;, then the &quot;<code>minecraft:scale</code>&quot; entity component with a scale of 1 is applied to the entity. Otherwise, if the entity property &quot;<code>property:string_enum_example</code>&quot; value is &quot;<code>second</code>&quot;, the entity&#39;s scale is twice as it was. Then, it is similar to how it goes for the <code>third</code> value, with three times from the original scale.</p>`,2);function g(T,x,P,w,E,A){const n=o("CodeHeader");return l(),r("div",null,[u,i,b,k,s(n),m,s(n),d,s(n),y,s(n),_,s(n),q,s(n),h,s(n),f,s(n),v])}var V=p(c,[["render",g]]);export{C as __pageData,V as default};