if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let r={};const t=s=>l(s,a),u={module:{uri:a},exports:r,require:t};e[a]=Promise.all(n.map((s=>u[s]||t(s)))).then((s=>(i(...s),r)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.b807bcdf.js",revision:null},{url:"assets/404.md.b807bcdf.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.3f7fceb5.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.3f7fceb5.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.ec7e44ba.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.ec7e44ba.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.497f8159.js",revision:null},{url:"assets/animation-controllers_death-commands.md.497f8159.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.4a3d1a4f.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.4a3d1a4f.lean.js",revision:null},{url:"assets/animation-controllers_index.md.aa795b18.js",revision:null},{url:"assets/animation-controllers_index.md.aa795b18.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.81a78a00.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.81a78a00.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.d95a9d45.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.d95a9d45.lean.js",revision:null},{url:"assets/app.6cd5aea5.js",revision:null},{url:"assets/blocks_applying-effects.md.533e1d21.js",revision:null},{url:"assets/blocks_applying-effects.md.533e1d21.lean.js",revision:null},{url:"assets/blocks_avoiding-properties-limit.md.b5d955c9.js",revision:null},{url:"assets/blocks_avoiding-properties-limit.md.b5d955c9.lean.js",revision:null},{url:"assets/blocks_block-materials.md.92db9def.js",revision:null},{url:"assets/blocks_block-materials.md.92db9def.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.0ede7ce9.js",revision:null},{url:"assets/blocks_block-shapes.md.0ede7ce9.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.cb461eb3.js",revision:null},{url:"assets/blocks_block-sounds.md.cb461eb3.lean.js",revision:null},{url:"assets/blocks_block-tags.md.4cd1c9c4.js",revision:null},{url:"assets/blocks_block-tags.md.4cd1c9c4.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.c5c29287.js",revision:null},{url:"assets/blocks_block-texture-variation.md.c5c29287.lean.js",revision:null},{url:"assets/blocks_blocks-experimental.md.9599ec2c.js",revision:null},{url:"assets/blocks_blocks-experimental.md.9599ec2c.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.fe670391.js",revision:null},{url:"assets/blocks_blocks-intro.md.fe670391.lean.js",revision:null},{url:"assets/blocks_blocks-stable.md.24938164.js",revision:null},{url:"assets/blocks_blocks-stable.md.24938164.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.c9292de3.js",revision:null},{url:"assets/blocks_custom-crops.md.c9292de3.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.edd70dce.js",revision:null},{url:"assets/blocks_custom-fluids.md.edd70dce.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.402445c7.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.402445c7.lean.js",revision:null},{url:"assets/blocks_custom-slabs.md.4db9df1c.js",revision:null},{url:"assets/blocks_custom-slabs.md.4db9df1c.lean.js",revision:null},{url:"assets/blocks_custom-trapdoor.md.203e15aa.js",revision:null},{url:"assets/blocks_custom-trapdoor.md.203e15aa.lean.js",revision:null},{url:"assets/blocks_custom-trees.md.98235940.js",revision:null},{url:"assets/blocks_custom-trees.md.98235940.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.cbc268b2.js",revision:null},{url:"assets/blocks_fake-blocks.md.cbc268b2.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.35543c60.js",revision:null},{url:"assets/blocks_flipbook-textures.md.35543c60.lean.js",revision:null},{url:"assets/blocks_index.md.5bca3864.js",revision:null},{url:"assets/blocks_index.md.5bca3864.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.5dd4d542.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.5dd4d542.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.2068979e.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.2068979e.lean.js",revision:null},{url:"assets/blocks_precise-interaction.md.1e6af0a4.js",revision:null},{url:"assets/blocks_precise-interaction.md.1e6af0a4.lean.js",revision:null},{url:"assets/blocks_precise-rotation.md.4ea54a84.js",revision:null},{url:"assets/blocks_precise-rotation.md.4ea54a84.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.4faad356.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.4faad356.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.b6602688.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.b6602688.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.3567d99b.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.69ef9674.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.b8d914e5.js",revision:null},{url:"assets/commands_block-states.md.b8d914e5.lean.js",revision:null},{url:"assets/commands_damage.md.149cc927.js",revision:null},{url:"assets/commands_damage.md.149cc927.lean.js",revision:null},{url:"assets/commands_entity-counter.md.04e433a5.js",revision:null},{url:"assets/commands_entity-counter.md.04e433a5.lean.js",revision:null},{url:"assets/commands_index.md.89391bcc.js",revision:null},{url:"assets/commands_index.md.89391bcc.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.04410d3c.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.04410d3c.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.71106908.js",revision:null},{url:"assets/commands_mcfunctions.md.71106908.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.57c717b2.js",revision:null},{url:"assets/commands_nbt-commands.md.57c717b2.lean.js",revision:null},{url:"assets/commands_new-execute.md.a50410c0.js",revision:null},{url:"assets/commands_new-execute.md.a50410c0.lean.js",revision:null},{url:"assets/commands_on-first-join.md.95d2ed59.js",revision:null},{url:"assets/commands_on-first-join.md.95d2ed59.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.2621c51f.js",revision:null},{url:"assets/commands_on-first-world-load.md.2621c51f.lean.js",revision:null},{url:"assets/commands_on-player-death.md.80c9578b.js",revision:null},{url:"assets/commands_on-player-death.md.80c9578b.lean.js",revision:null},{url:"assets/commands_on-player-join.md.91acfbf2.js",revision:null},{url:"assets/commands_on-player-join.md.91acfbf2.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.a4068067.js",revision:null},{url:"assets/commands_on-player-leave.md.a4068067.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.cc777ffe.js",revision:null},{url:"assets/commands_on-player-respawn.md.cc777ffe.lean.js",revision:null},{url:"assets/commands_playsound.md.bf2d4424.js",revision:null},{url:"assets/commands_playsound.md.bf2d4424.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.42582057.js",revision:null},{url:"assets/commands_relative-coordinates.md.42582057.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.827496a4.js",revision:null},{url:"assets/commands_scoreboard-operations.md.827496a4.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.27602e6f.js",revision:null},{url:"assets/commands_scoreboard-timers.md.27602e6f.lean.js",revision:null},{url:"assets/commands_selectors.md.9219b0c9.js",revision:null},{url:"assets/commands_selectors.md.9219b0c9.lean.js",revision:null},{url:"assets/commands_tellraw.md.09629518.js",revision:null},{url:"assets/commands_tellraw.md.09629518.lean.js",revision:null},{url:"assets/concepts_contents.md.992a3478.js",revision:null},{url:"assets/concepts_contents.md.992a3478.lean.js",revision:null},{url:"assets/concepts_emojis.md.68f5d416.js",revision:null},{url:"assets/concepts_emojis.md.68f5d416.lean.js",revision:null},{url:"assets/concepts_index.md.235973e8.js",revision:null},{url:"assets/concepts_index.md.235973e8.lean.js",revision:null},{url:"assets/concepts_molang.md.30b1b405.js",revision:null},{url:"assets/concepts_molang.md.30b1b405.lean.js",revision:null},{url:"assets/concepts_namespaces.md.2676311e.js",revision:null},{url:"assets/concepts_namespaces.md.2676311e.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.04fe1fd3.js",revision:null},{url:"assets/concepts_overwriting-assets.md.04fe1fd3.lean.js",revision:null},{url:"assets/concepts_shaders.md.a57a112d.js",revision:null},{url:"assets/concepts_shaders.md.a57a112d.lean.js",revision:null},{url:"assets/concepts_sounds.md.978225ce.js",revision:null},{url:"assets/concepts_sounds.md.978225ce.lean.js",revision:null},{url:"assets/concepts_subpacks.md.b43f9d64.js",revision:null},{url:"assets/concepts_subpacks.md.b43f9d64.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.20189e82.js",revision:null},{url:"assets/concepts_text-and-translations.md.20189e82.lean.js",revision:null},{url:"assets/concepts_textures-list.md.5a880570.js",revision:null},{url:"assets/concepts_textures-list.md.5a880570.lean.js",revision:null},{url:"assets/contribute-how-to.md.eaf15b8f.js",revision:null},{url:"assets/contribute-how-to.md.eaf15b8f.lean.js",revision:null},{url:"assets/contribute-style.md.11a27ad0.js",revision:null},{url:"assets/contribute-style.md.11a27ad0.lean.js",revision:null},{url:"assets/contribute.md.5a3be66d.js",revision:null},{url:"assets/contribute.md.5a3be66d.lean.js",revision:null},{url:"assets/discord.md.6fe1351c.js",revision:null},{url:"assets/discord.md.6fe1351c.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.027824cb.js",revision:null},{url:"assets/documentation_advanced-molang.md.027824cb.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.1fc2c16a.js",revision:null},{url:"assets/documentation_creative-categories.md.1fc2c16a.lean.js",revision:null},{url:"assets/documentation_file-types.md.7395bc3b.js",revision:null},{url:"assets/documentation_file-types.md.7395bc3b.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.0580c7fe.js",revision:null},{url:"assets/documentation_fog-ids.md.0580c7fe.lean.js",revision:null},{url:"assets/documentation_index.md.fb537c64.js",revision:null},{url:"assets/documentation_index.md.fb537c64.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.5207423b.js",revision:null},{url:"assets/documentation_material-config-description.md.5207423b.lean.js",revision:null},{url:"assets/documentation_materials.md.6d60816b.js",revision:null},{url:"assets/documentation_materials.md.6d60816b.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.c8d7bf44.js",revision:null},{url:"assets/documentation_pack-structure.md.c8d7bf44.lean.js",revision:null},{url:"assets/documentation_projectiles.md.730c35b7.js",revision:null},{url:"assets/documentation_projectiles.md.730c35b7.lean.js",revision:null},{url:"assets/documentation_queries.md.a259021c.js",revision:null},{url:"assets/documentation_queries.md.a259021c.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.31a1c398.js",revision:null},{url:"assets/documentation_shared-constructs.md.31a1c398.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.534ded51.js",revision:null},{url:"assets/documentation_sound-definitions.md.534ded51.lean.js",revision:null},{url:"assets/entities_boat-entities.md.596c2a41.js",revision:null},{url:"assets/entities_boat-entities.md.596c2a41.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.dabe4b85.js",revision:null},{url:"assets/entities_detecting-other-entities.md.dabe4b85.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.b52fd8c5.js",revision:null},{url:"assets/entities_disabling-team-damage.md.b52fd8c5.lean.js",revision:null},{url:"assets/entities_dummy-components.md.d43bf24e.js",revision:null},{url:"assets/entities_dummy-components.md.d43bf24e.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.2d6c7c76.js",revision:null},{url:"assets/entities_dummy-entities.md.2d6c7c76.lean.js",revision:null},{url:"assets/entities_entity-attack.md.0f0da00d.js",revision:null},{url:"assets/entities_entity-attack.md.0f0da00d.lean.js",revision:null},{url:"assets/entities_entity-events.md.fc139ed1.js",revision:null},{url:"assets/entities_entity-events.md.fc139ed1.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.1ccf40e4.js",revision:null},{url:"assets/entities_entity-holds-item.md.1ccf40e4.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.1265eedd.js",revision:null},{url:"assets/entities_entity-intro-bp.md.1265eedd.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.87e590a2.js",revision:null},{url:"assets/entities_entity-intro-rp.md.87e590a2.lean.js",revision:null},{url:"assets/entities_entity-movement.md.4ea0fe7d.js",revision:null},{url:"assets/entities_entity-movement.md.4ea0fe7d.lean.js",revision:null},{url:"assets/entities_entity-properties.md.36972a05.js",revision:null},{url:"assets/entities_entity-properties.md.36972a05.lean.js",revision:null},{url:"assets/entities_flying-entities.md.bf593ac4.js",revision:null},{url:"assets/entities_flying-entities.md.bf593ac4.lean.js",revision:null},{url:"assets/entities_index.md.b981846c.js",revision:null},{url:"assets/entities_index.md.b981846c.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.7e30085f.js",revision:null},{url:"assets/entities_introduction-to-aec.md.7e30085f.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.3e901a7c.js",revision:null},{url:"assets/entities_invulnerable-entities.md.3e901a7c.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.c6ca3ee4.js",revision:null},{url:"assets/entities_look-at-entity.md.c6ca3ee4.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.097dc8fe.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.097dc8fe.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.3d6617d7.js",revision:null},{url:"assets/entities_npc-dialogs.md.3d6617d7.lean.js",revision:null},{url:"assets/entities_render-controllers.md.aea71113.js",revision:null},{url:"assets/entities_render-controllers.md.aea71113.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.3dd065f0.js",revision:null},{url:"assets/entities_runtime-identifier.md.3dd065f0.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.db9508ca.js",revision:null},{url:"assets/entities_sleeping-entities.md.db9508ca.lean.js",revision:null},{url:"assets/entities_solid-entities.md.f68b5600.js",revision:null},{url:"assets/entities_solid-entities.md.f68b5600.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.b35ee433.js",revision:null},{url:"assets/entities_spawn-rules.md.b35ee433.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.32c19568.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.32c19568.lean.js",revision:null},{url:"assets/entities_timers.md.974de366.js",revision:null},{url:"assets/entities_timers.md.974de366.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.0a9b707c.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.0a9b707c.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.96bef3fc.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.96bef3fc.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.ca87f0ef.js",revision:null},{url:"assets/entities_village-mechanic.md.ca87f0ef.lean.js",revision:null},{url:"assets/entities_vuc-full.md.bf249f42.lean.js",revision:null},{url:"assets/entities_vusr-full.md.c270048c.js",revision:null},{url:"assets/entities_vusr-full.md.c270048c.lean.js",revision:null},{url:"assets/graph-test.md.b7ff2ece.js",revision:null},{url:"assets/graph-test.md.b7ff2ece.lean.js",revision:null},{url:"assets/guide_addons.md.27d34ce3.js",revision:null},{url:"assets/guide_addons.md.27d34ce3.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.3da92b52.js",revision:null},{url:"assets/guide_advancedmanifest.md.3da92b52.lean.js",revision:null},{url:"assets/guide_blockbench.md.467c14a1.js",revision:null},{url:"assets/guide_blockbench.md.467c14a1.lean.js",revision:null},{url:"assets/guide_custom-entity.md.af6fde9b.js",revision:null},{url:"assets/guide_custom-entity.md.af6fde9b.lean.js",revision:null},{url:"assets/guide_custom-item.md.734c5825.js",revision:null},{url:"assets/guide_custom-item.md.734c5825.lean.js",revision:null},{url:"assets/guide_download-packs.md.a8df62b1.js",revision:null},{url:"assets/guide_download-packs.md.a8df62b1.lean.js",revision:null},{url:"assets/guide_format-version.md.5b4560d7.js",revision:null},{url:"assets/guide_format-version.md.5b4560d7.lean.js",revision:null},{url:"assets/guide_index.md.e379a625.js",revision:null},{url:"assets/guide_index.md.e379a625.lean.js",revision:null},{url:"assets/guide_introduction.md.ba2fd94f.js",revision:null},{url:"assets/guide_introduction.md.ba2fd94f.lean.js",revision:null},{url:"assets/guide_loot-table.md.6d1a3863.js",revision:null},{url:"assets/guide_loot-table.md.6d1a3863.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.b0a65acd.js",revision:null},{url:"assets/guide_project-setup-android.md.b0a65acd.lean.js",revision:null},{url:"assets/guide_project-setup.md.b1a45562.js",revision:null},{url:"assets/guide_project-setup.md.b1a45562.lean.js",revision:null},{url:"assets/guide_software-preparation.md.cf343bc4.js",revision:null},{url:"assets/guide_software-preparation.md.cf343bc4.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.98226e58.js",revision:null},{url:"assets/guide_troubleshooting.md.98226e58.lean.js",revision:null},{url:"assets/guide_understanding-json.md.f4945844.js",revision:null},{url:"assets/guide_understanding-json.md.f4945844.lean.js",revision:null},{url:"assets/hacktoberfest.md.3627b1fa.js",revision:null},{url:"assets/hacktoberfest.md.3627b1fa.lean.js",revision:null},{url:"assets/index.md.8dc09be3.js",revision:null},{url:"assets/index.md.8dc09be3.lean.js",revision:null},{url:"assets/items_attachables.md.aeb51fa9.js",revision:null},{url:"assets/items_attachables.md.aeb51fa9.lean.js",revision:null},{url:"assets/items_custom-armor.md.100114c5.js",revision:null},{url:"assets/items_custom-armor.md.100114c5.lean.js",revision:null},{url:"assets/items_custom-weapon.md.077dd8f0.js",revision:null},{url:"assets/items_custom-weapon.md.077dd8f0.lean.js",revision:null},{url:"assets/items_enchantments.md.44b20c68.js",revision:null},{url:"assets/items_enchantments.md.44b20c68.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.f50f8a9e.js",revision:null},{url:"assets/items_equipped-item-commands.md.f50f8a9e.lean.js",revision:null},{url:"assets/items_index.md.88abe1a1.js",revision:null},{url:"assets/items_index.md.88abe1a1.lean.js",revision:null},{url:"assets/items_item-identifiers.md.98509405.js",revision:null},{url:"assets/items_item-identifiers.md.98509405.lean.js",revision:null},{url:"assets/items_items-16.md.647bfd30.js",revision:null},{url:"assets/items_items-16.md.647bfd30.lean.js",revision:null},{url:"assets/items_items-intro.md.597cf6ca.js",revision:null},{url:"assets/items_items-intro.md.597cf6ca.lean.js",revision:null},{url:"assets/items_spawning-items.md.40c8f841.js",revision:null},{url:"assets/items_spawning-items.md.40c8f841.lean.js",revision:null},{url:"assets/items_spear.md.a5f7b6cf.js",revision:null},{url:"assets/items_spear.md.a5f7b6cf.lean.js",revision:null},{url:"assets/items_throwable.md.f42240c6.js",revision:null},{url:"assets/items_throwable.md.f42240c6.lean.js",revision:null},{url:"assets/items_tool-durability.md.092a6166.js",revision:null},{url:"assets/items_tool-durability.md.092a6166.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.44f777b1.js",revision:null},{url:"assets/items_troubleshooting-items.md.44f777b1.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.1622efc6.js",revision:null},{url:"assets/items_vanilla-usage-items.md.1622efc6.lean.js",revision:null},{url:"assets/items_vui-full.md.8f29ae52.js",revision:null},{url:"assets/items_vui-full.md.8f29ae52.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.35e56598.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.35e56598.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.653e813c.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.653e813c.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.b42d33a1.js",revision:null},{url:"assets/json-ui_best-practices.md.b42d33a1.lean.js",revision:null},{url:"assets/json-ui_index.md.387746e7.js",revision:null},{url:"assets/json-ui_index.md.387746e7.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.8460f82c.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.8460f82c.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.3ed8e91a.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.3ed8e91a.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.5729421e.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.5729421e.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.e85ac664.js",revision:null},{url:"assets/json-ui_string-to-number.md.e85ac664.lean.js",revision:null},{url:"assets/loot_index.md.513d4faa.js",revision:null},{url:"assets/loot_index.md.513d4faa.lean.js",revision:null},{url:"assets/loot_item-functions.md.b231a421.js",revision:null},{url:"assets/loot_item-functions.md.b231a421.lean.js",revision:null},{url:"assets/loot_loot-tables.md.920e2393.js",revision:null},{url:"assets/loot_loot-tables.md.920e2393.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.1e303997.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.1e303997.lean.js",revision:null},{url:"assets/loot_recipes.md.45cf703d.js",revision:null},{url:"assets/loot_recipes.md.45cf703d.lean.js",revision:null},{url:"assets/loot_trade-tables.md.7c5bfd3d.js",revision:null},{url:"assets/loot_trade-tables.md.7c5bfd3d.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.c20bb527.js",revision:null},{url:"assets/loot_trading-behavior.md.c20bb527.lean.js",revision:null},{url:"assets/meta_addon-performance.md.aa575b08.js",revision:null},{url:"assets/meta_addon-performance.md.aa575b08.lean.js",revision:null},{url:"assets/meta_index.md.3dc8e6ee.js",revision:null},{url:"assets/meta_index.md.3dc8e6ee.lean.js",revision:null},{url:"assets/meta_jq.md.dd680858.js",revision:null},{url:"assets/meta_jq.md.dd680858.lean.js",revision:null},{url:"assets/meta_style-guide.md.92961c9f.js",revision:null},{url:"assets/meta_style-guide.md.92961c9f.lean.js",revision:null},{url:"assets/meta_useful-links.md.11b397b8.js",revision:null},{url:"assets/meta_useful-links.md.11b397b8.lean.js",revision:null},{url:"assets/meta_using-schemas.md.ba0814eb.js",revision:null},{url:"assets/meta_using-schemas.md.ba0814eb.lean.js",revision:null},{url:"assets/meta_version-control.md.2c29af01.js",revision:null},{url:"assets/meta_version-control.md.2c29af01.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.5b3d7657.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.5b3d7657.lean.js",revision:null},{url:"assets/nbt_index.md.c4d6dcda.js",revision:null},{url:"assets/nbt_index.md.c4d6dcda.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.85b17b0b.js",revision:null},{url:"assets/nbt_mcstructure.md.85b17b0b.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.29f7ab8e.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.29f7ab8e.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.58152362.js",revision:null},{url:"assets/nbt_step-by-step-example.md.58152362.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.cce4f242.js",revision:null},{url:"assets/nbt_structure-limits.md.cce4f242.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.ded661ec.js",revision:null},{url:"assets/particles_disabling-particles.md.ded661ec.lean.js",revision:null},{url:"assets/particles_index.md.f977e651.js",revision:null},{url:"assets/particles_index.md.f977e651.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.47f27e77.js",revision:null},{url:"assets/particles_particles-and-sounds.md.47f27e77.lean.js",revision:null},{url:"assets/particles_particles.md.47284bfd.js",revision:null},{url:"assets/particles_particles.md.47284bfd.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.7f33a01d.js",revision:null},{url:"assets/particles_vanilla-particles.md.7f33a01d.lean.js",revision:null},{url:"assets/privacy.md.57616f3f.js",revision:null},{url:"assets/privacy.md.57616f3f.lean.js",revision:null},{url:"assets/scripting_api-environment.md.15f4a4ea.js",revision:null},{url:"assets/scripting_api-environment.md.15f4a4ea.lean.js",revision:null},{url:"assets/scripting_custom-command.md.3839ddb6.js",revision:null},{url:"assets/scripting_custom-command.md.3839ddb6.lean.js",revision:null},{url:"assets/scripting_game-tests.md.7276233e.js",revision:null},{url:"assets/scripting_game-tests.md.7276233e.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.a1b2236e.js",revision:null},{url:"assets/scripting_gametest-form.md.a1b2236e.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.93b54068.js",revision:null},{url:"assets/scripting_gametest-qna.md.93b54068.lean.js",revision:null},{url:"assets/scripting_index.md.6ea5d91b.js",revision:null},{url:"assets/scripting_index.md.6ea5d91b.lean.js",revision:null},{url:"assets/scripting_placement-prevention.md.c7935b50.js",revision:null},{url:"assets/scripting_placement-prevention.md.c7935b50.lean.js",revision:null},{url:"assets/scripting_resources.md.8ae510ef.js",revision:null},{url:"assets/scripting_resources.md.8ae510ef.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.e52d39a5.js",revision:null},{url:"assets/scripting_saving-loading.md.e52d39a5.lean.js",revision:null},{url:"assets/scripting_script-modules.md.a2f068c3.js",revision:null},{url:"assets/scripting_script-modules.md.a2f068c3.lean.js",revision:null},{url:"assets/scripting_script-net.md.4c0d1b32.js",revision:null},{url:"assets/scripting_script-net.md.4c0d1b32.lean.js",revision:null},{url:"assets/scripting_script-server.md.e49ce689.js",revision:null},{url:"assets/scripting_script-server.md.e49ce689.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.b807afd3.js",revision:null},{url:"assets/scripting_script-watchdog.md.b807afd3.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.fb332d2a.js",revision:null},{url:"assets/scripting_scripting-intro.md.fb332d2a.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.b8a6965b.js",revision:null},{url:"assets/scripting_starting-scripts.md.b8a6965b.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.b7bbaf9d.js",revision:null},{url:"assets/scripting_troubleshooting.md.b7bbaf9d.lean.js",revision:null},{url:"assets/scripting_typescript.md.50d7d9fc.js",revision:null},{url:"assets/scripting_typescript.md.50d7d9fc.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.d6ec57e6.js",revision:null},{url:"assets/scripting_what-is-script.md.d6ec57e6.lean.js",revision:null},{url:"assets/servers_index.md.10bda7df.js",revision:null},{url:"assets/servers_index.md.10bda7df.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.525960ba.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.525960ba.lean.js",revision:null},{url:"assets/servers_server-software.md.66648859.js",revision:null},{url:"assets/servers_server-software.md.66648859.lean.js",revision:null},{url:"assets/style.69ce7b21.css",revision:null},{url:"assets/test.md.21f4ffe3.js",revision:null},{url:"assets/test.md.21f4ffe3.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.569c7010.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.569c7010.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.3509bdbb.js",revision:null},{url:"assets/visuals_animation-effects.md.3509bdbb.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.cbcf7037.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.cbcf7037.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.8bd17369.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.8bd17369.lean.js",revision:null},{url:"assets/visuals_death-animations.md.def338b7.js",revision:null},{url:"assets/visuals_death-animations.md.def338b7.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.36c1619d.js",revision:null},{url:"assets/visuals_glowing-texture.md.36c1619d.lean.js",revision:null},{url:"assets/visuals_index.md.c0be42e2.js",revision:null},{url:"assets/visuals_index.md.c0be42e2.lean.js",revision:null},{url:"assets/visuals_introduction.md.2a0a6d9c.js",revision:null},{url:"assets/visuals_introduction.md.2a0a6d9c.lean.js",revision:null},{url:"assets/visuals_leash-position.md.b18572c1.js",revision:null},{url:"assets/visuals_leash-position.md.b18572c1.lean.js",revision:null},{url:"assets/visuals_material-creations.md.274f2cce.js",revision:null},{url:"assets/visuals_material-creations.md.274f2cce.lean.js",revision:null},{url:"assets/visuals_materials.md.ea4de4cd.js",revision:null},{url:"assets/visuals_materials.md.ea4de4cd.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.d8499c94.js",revision:null},{url:"assets/visuals_math-based-animations.md.d8499c94.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.86e79ee9.js",revision:null},{url:"assets/visuals_player-geometry.md.86e79ee9.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.f29401f7.js",revision:null},{url:"assets/visuals_remove-shadows.md.f29401f7.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.7acaf9dd.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.7acaf9dd.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.a57b0db1.js",revision:null},{url:"assets/visuals_structure-presentation.md.a57b0db1.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.3da19513.js",revision:null},{url:"assets/vr_editing-your-first-model.md.3da19513.lean.js",revision:null},{url:"assets/vr_index.md.9d9cb032.js",revision:null},{url:"assets/vr_index.md.9d9cb032.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.606878e3.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.606878e3.lean.js",revision:null},{url:"assets/vr_pack_setup.md.c33a52d6.js",revision:null},{url:"assets/vr_pack_setup.md.c33a52d6.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.bf1eb22b.js",revision:null},{url:"assets/world-generation_biome-tags.md.bf1eb22b.lean.js",revision:null},{url:"assets/world-generation_biomes.md.bd7372f7.js",revision:null},{url:"assets/world-generation_biomes.md.bd7372f7.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.461833f3.js",revision:null},{url:"assets/world-generation_custom-ores.md.461833f3.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.da96c827.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.da96c827.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.48b4ae1e.js",revision:null},{url:"assets/world-generation_feature-types.md.48b4ae1e.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.a153d515.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.a153d515.lean.js",revision:null},{url:"assets/world-generation_index.md.a6217fbf.js",revision:null},{url:"assets/world-generation_index.md.a6217fbf.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.69514b4d.js",revision:null},{url:"assets/world-generation_structure-features.md.69514b4d.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.352ae47c.js",revision:null},{url:"assets/world-generation_surface-builder.md.352ae47c.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.e95a1259.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.e95a1259.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
