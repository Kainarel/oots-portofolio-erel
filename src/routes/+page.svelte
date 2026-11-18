<script lang="ts">
	import { onMount } from 'svelte';
	import { initPortfolioEngine } from '$lib/portfolio-engine';
	import {
		orbitNodes,
		educations,
		experiences,
		softwares,
		projects,
		profile
	} from '$lib/data';

	onMount(() => {
		initPortfolioEngine();
	});
</script>

<div class="bg"><i></i><i></i><i></i></div>
<div id="ell"></div>
<div id="ld" class="landing-loader">
	<div class="ld-box">
		<div class="ld-brand-logo">
			<span class="ld-rel-txt">rel<span class="ld-rel-dot">.</span></span>
			<span class="ld-rel-tag">CREATIVE STUDIO</span>
		</div>
		<div class="ld-bar-track">
			<div class="ld-bar-fill" id="ld-prog-fill"></div>
		</div>
		<div class="ld-meta-row">
			<span class="ld-status-text">INITIALIZING EXPERIENCE</span>
			<span class="ld-counter-text" id="ltc">0%</span>
		</div>
	</div>
</div>
<div id="ld-ir" style="display:none"></div>

<aside class="sd">
	<button class="hm" aria-label="Menu"><span></span><span></span><span></span></button>
	<div class="dd">
		<button data-go="intro">Home</button>
		<button data-go="profil">Profil</button>
		<button data-go="project">Project</button>
		<button data-go="contact">Contact</button>
	</div>
	<div class="dots">
		<button class="a" data-go="intro" aria-label="Home"></button>
		<button data-go="profil" aria-label="Profil"></button>
		<button data-go="project" aria-label="Project"></button>
		<button data-go="contact" aria-label="Contact"></button>
	</div>
</aside>

<header class="hd">
	<div class="rel-logo-btn" data-go="intro" role="button" tabindex="0" aria-label="rel Home">
		<span class="rel-logo-mark">rel<span class="rel-logo-dot">.</span></span>
	</div>
</header>

<main>
	<section class="pg" id="intro">
		<div class="hm-desc">
			<b class="hm-slogan">WHERE CREATIVITY MEETS PURPOSE.</b>
			<span class="hm-sub">
				A passionate creative exploring the world of visual design, digital media, and technology.
				Every project is an opportunity to create something meaningful and unique.
			</span>
		</div>
		<div class="hm-logo">
			<div class="hero-rel-lockup">
				<h1 class="hero-rel-title">rel<span class="hero-rel-dot">.</span></h1>
				<span class="hero-rel-studio">Welcome To My Portofolio</span>
			</div>
		</div>
		<div class="hm-btns-wrap">
			<div class="hm-btns">
				<button class="cta" data-go="profil">LEARN MORE</button>
				<button class="cta o" data-go="project">VIEW PROJECT</button>
			</div>
		</div>
		<div class="hm-orb">
			<div class="orb">
				<div class="rl"></div>
				<div class="rl r2"></div>
				<div class="rot">
					{#each orbitNodes as node (node.index)}
						<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
						<div
							class="nd"
							tabindex="0"
							style="--a:{node.angle};--k:{node.index}"
							data-n={node.name}
							data-c={node.category}
							data-d={node.description}
						>
							<div class="nb">
								<i class="nl fi">
									{#if node.iconType === 'code'}
										<svg
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<polyline points="16 18 22 12 16 6" />
											<polyline points="8 6 2 12 8 18" />
										</svg>
									{:else if node.iconType === 'video'}
										<svg viewBox="0 0 24 24">
											<rect x="2.5" y="4.5" width="19" height="15" rx="2.2" />
											<path d="M2.5 9.5h19M8 9.5v10M14 9.5v10" />
											<path d="M5 6.8h2M10 6.8h2" />
										</svg>
									{:else if node.iconType === 'motion'}
										<svg viewBox="0 0 24 24">
											<path d="M3 17l5.5-6 4 3.5L20.5 6" />
											<path d="M15.5 6h5v5" />
											<circle cx="3" cy="17" r="1.2" />
											<circle cx="8.5" cy="11" r="1.2" />
											<circle cx="12.5" cy="14.5" r="1.2" />
										</svg>
									{:else if node.iconType === 'photo'}
										<svg viewBox="0 0 24 24">
											<circle cx="12" cy="12" r="9" />
											<path d="M12 3l4.5 7.8M21 12l-7.8 4.5M12 21l-4.5-7.8M3 12l7.8-4.5" />
											<circle cx="12" cy="12" r="2.2" />
										</svg>
									{:else}
										<svg viewBox="0 0 24 24">
											<path d="M12 2.8l4.2 6.5-4.2 11.9-4.2-11.9z" />
											<path d="M12 9.3V21" />
											<circle cx="12" cy="7.6" r="1" />
										</svg>
									{/if}
								</i>
							</div>
						</div>
					{/each}
				</div>
				<div class="ctr">
					<div class="cm-rel-badge">
						<span class="rel-ring-txt">rel<span class="rel-logo-dot">.</span></span>
					</div>
					<div class="inf">
						<em></em>
						<b></b>
						<p></p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="pg" id="profil">
		<div class="pf">
			<div class="cols ab">
				<div class="pic" data-s style="--i:0">
					<div class="fl" data-s style="--x:22.4%;--y:-14.8%;--s:24.0%;--r:-12deg;--d:6.5s;--dl:-0s;--i:2">
						<i class="u-my"></i>
					</div>
					<div class="fl" data-s style="--x:30.8%;--y:-13.3%;--s:50.4%;--r:0deg;--d:7.2s;--dl:-1.3s;--i:3">
						<i class="u-am"></i>
					</div>
					<div class="fl" data-s style="--x:4.4%;--y:-6.4%;--s:29.4%;--r:-22deg;--d:7.9s;--dl:-2.6s;--i:4">
						<i class="u-dv"></i>
					</div>
					<div class="fl" data-s style="--x:78.2%;--y:-3.8%;--s:21.6%;--r:5deg;--d:8.6s;--dl:-3.9s;--i:5">
						<i class="u-ps"></i>
					</div>
					<div class="fl" data-s style="--x:-1.0%;--y:18.8%;--s:36.6%;--r:-24deg;--d:9.3s;--dl:-5.2s;--i:6">
						<i class="u-cc"></i>
					</div>
					<div class="fl" data-s style="--x:69.2%;--y:17.6%;--s:31.2%;--r:10deg;--d:10s;--dl:-6.5s;--i:7">
						<i class="u-gh"></i>
					</div>
					<div class="fl" data-s style="--x:11.0%;--y:2.0%;--s:40.2%;--r:-3deg;--d:10.7s;--dl:-7.8s;--i:8">
						<i class="u-vc"></i>
					</div>
					<div class="fl" data-s style="--x:66.2%;--y:3.2%;--s:35.4%;--r:4deg;--d:11.4s;--dl:-9.1s;--i:9">
						<i class="u-ae"></i>
					</div>
					<img src="/assets/images/diki-portrait.webp" loading="lazy" decoding="async" alt={profile.fullName} />
				</div>
				<div>
					<p class="hi" data-s style="--i:1">Introduce, My Self</p>
					<h2 class="disp nm" data-s style="--i:2">{profile.name}</h2>
					<p class="fn" data-s style="--i:3">{profile.major}</p>
					<p class="role" style="--i:3;margin:6px 0 0" data-s>{profile.role}</p>
					<h3 class="disp" data-s style="--i:4">About Me</h3>
					<p class="txt" data-s style="--i:5">{profile.bio1}</p>
					<p class="txt" data-s style="--i:6">{profile.bio2}</p>
				</div>
			</div>

			<div class="ps ed">
				<div class="rv">
					<p class="sn">01 — EDUCATION</p>
					<h2 class="disp">Latar Pendidikan</h2>
				</div>
				<div class="pcs">
					{#each educations as edu (edu.id)}
						<div
							class="pc rv"
							style="--i:{edu.index};--t:{edu.tilt}"
							tabindex="0"
							role="button"
							aria-label={edu.name}
						>
							<div class="pc-t">
								<div class="pc-in">
									<div class="pc-f">
										<div class="pc-top">
											<span>{edu.id}</span>
											<b>{edu.level}</b>
										</div>
										<div class="pc-l {edu.logoClass}"></div>
										<div>
											<div class="pc-nm">{edu.name}</div>
											<div class="pc-sb">{edu.sub}</div>
											<div class="pc-h">KLIK UNTUK DETAIL</div>
										</div>
									</div>
									<div class="pc-b">
										<em>{edu.level}</em>
										<div class="pc-nm">{edu.name}</div>
										<p>{edu.description}</p>
										<div class="pc-h">KLIK UNTUK KEMBALI</div>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="ps xp-s">
				<div class="rv">
					<p class="sn">02 — EXPERIENCE</p>
					<h2 class="disp">Experience</h2>
					<p class="pd">Organisasi, kepemimpinan, dan kompetensi yang pernah dan sedang saya jalani.</p>
				</div>
				<div class="xpc">
					{#each experiences as xp (xp.id)}
						<div class="xc rv" style="--i:{xp.index}">
							<div class="xc-top">
								<span>{xp.id}</span>
								<b>{xp.period}</b>
							</div>
							<div class="xc-lg">
								<img src="/{xp.image}" loading="lazy" decoding="async" alt={xp.alt} />
							</div>
							<div class="xc-b">
								<div class="xc-org">{xp.org}</div>
								<h3 class="xc-role">{xp.role}</h3>
								<p class="xc-d">{xp.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="ps sk3">
				<div class="rv">
					<p class="sn">03 — SKILLS</p>
					<h2 class="disp">Skills &amp; Software</h2>
				</div>
				<div class="skreel rv" id="ed" style="--p:0;--ac:#4d7cff;--i:1">
					<div class="ed-bar">
						<span class="ed-dots"><i></i><i></i><i></i></span>
						<span class="ed-ttl">SEQUENCE 01 · SKILL_REEL</span>
						<span class="ed-r">
							<span class="ed-tc" id="edtc">00:00:00:00</span>
							<button type="button" class="ed-pp" id="edpp" aria-label="Jeda"></button>
						</span>
					</div>
					<div class="ed-top">
						<div class="ed-mon">
							<div class="ed-scr" id="edscr">
								<div class="ed-sl" data-i="0">
									<div class="sk-v v1">
										<span class="vt">FULLSTACK · DEV</span>
										<span data-tc style="display:none">00:00:00:00</span>
										<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
											<defs>
												<linearGradient id="codeGrad" x1="0" y1="0" x2="1" y2="1">
													<stop offset="0%" stop-color="#0e131f" />
													<stop offset="100%" stop-color="#080b12" />
												</linearGradient>
												<pattern id="codeGrid" width="16" height="16" patternUnits="userSpaceOnUse">
													<path d="M16 0H0V16" fill="none" stroke="#ffffff08" stroke-width="0.5" />
												</pattern>
											</defs>
											<rect width="320" height="180" fill="url(#codeGrad)" />
											<rect width="320" height="180" fill="url(#codeGrid)" />
											<rect width="320" height="24" fill="#090d16" stroke="#ffffff12" stroke-width="0.8" />
											<path
												d="M110 3 h74 a3 3 0 0 1 3 3 v18 h-80 v-18 a3 3 0 0 1 3 -3 z"
												fill="#0e131f"
												stroke="#ffffff18"
												stroke-width="0.8"
											/>
											<rect x="116" y="8" width="8" height="8" rx="1.5" fill="#3178c6" />
											<text
												x="120"
												y="14.5"
												fill="#fff"
												font-size="5"
												font-weight="bold"
												font-family="monospace"
												text-anchor="middle">TS</text
											>
											<text
												x="128"
												y="15"
												fill="#e6edf3"
												font-size="7"
												font-family="ui-monospace,SFMono-Regular,Consolas,monospace"
												font-weight="600">developer.ts</text
											>
											<rect x="187" y="4" width="60" height="19" rx="2" fill="#090d16" />
											<rect x="192" y="8" width="8" height="8" rx="1.5" fill="#777bb4" />
											<text
												x="196"
												y="14.5"
												fill="#fff"
												font-size="4.5"
												font-weight="bold"
												font-family="monospace"
												text-anchor="middle">PHP</text
											>
											<text
												x="204"
												y="15"
												fill="#7d8590"
												font-size="7"
												font-family="ui-monospace,SFMono-Regular,Consolas,monospace">server.php</text
											>
											<rect x="250" y="4" width="54" height="19" rx="2" fill="#090d16" />
											<rect x="255" y="8" width="8" height="8" rx="1.5" fill="#00758f" />
											<text
												x="259"
												y="14.5"
												fill="#fff"
												font-size="4.5"
												font-weight="bold"
												font-family="monospace"
												text-anchor="middle">SQL</text
											>
											<text
												x="267"
												y="15"
												fill="#7d8590"
												font-size="7"
												font-family="ui-monospace,SFMono-Regular,Consolas,monospace">db.sql</text
											>
											<rect x="0" y="24" width="26" height="138" fill="#080b12" stroke="#ffffff0a" stroke-width="0.8" />
											<g font-family="ui-monospace,Consolas,monospace" font-size="6.5" fill="#3d4450" text-anchor="end">
												<text x="20" y="38">1</text>
												<text x="20" y="49">2</text>
												<text x="20" y="60">3</text>
												<text x="20" y="71">4</text>
												<text x="20" y="82">5</text>
												<text x="20" y="93">6</text>
												<text x="20" y="104">7</text>
												<text x="20" y="115">8</text>
												<text x="20" y="126">9</text>
												<text x="20" y="137">10</text>
												<text x="20" y="148">11</text>
											</g>
											<g font-family="ui-monospace,SFMono-Regular,Consolas,monospace" font-size="6.8" letter-spacing="0.02em">
												<text x="32" y="38" class="cd-cm">// M. Erel — Fullstack Web Developer</text>
												<text x="32" y="49">
													<tspan class="cd-kw">import</tspan> <tspan class="cd-sy">{'{'}</tspan>
													<tspan class="cd-vr">SvelteKit</tspan><tspan class="cd-sy">, </tspan><tspan class="cd-vr">Tailwind</tspan>
													<tspan class="cd-sy">{'}'}</tspan> <tspan class="cd-kw">from</tspan>
													<tspan class="cd-st">'@web/stack'</tspan><tspan class="cd-sy">;</tspan>
												</text>
												<text x="32" y="60">
													<tspan class="cd-kw">interface</tspan> <tspan class="cd-ty">Skills</tspan>
													<tspan class="cd-sy">{'{'}</tspan>
												</text>
												<text x="40" y="71">
													<tspan class="cd-vr">languages</tspan><tspan class="cd-sy">: [</tspan><tspan class="cd-st">"JS"</tspan><tspan
														class="cd-sy">, </tspan
													><tspan class="cd-st">"TS"</tspan><tspan class="cd-sy">, </tspan><tspan class="cd-st">"PHP"</tspan><tspan
														class="cd-sy">, </tspan
													><tspan class="cd-st">"SQL"</tspan><tspan class="cd-sy">];</tspan>
												</text>
												<text x="40" y="82">
													<tspan class="cd-vr">frameworks</tspan><tspan class="cd-sy">: [</tspan><tspan class="cd-st">"SvelteKit"</tspan
													><tspan class="cd-sy">, </tspan><tspan class="cd-st">"Tailwind CSS"</tspan><tspan class="cd-sy">];</tspan>
												</text>
												<text x="40" y="93">
													<tspan class="cd-vr">backend</tspan><tspan class="cd-sy">: [</tspan><tspan class="cd-st">"Node.js"</tspan
													><tspan class="cd-sy">, </tspan><tspan class="cd-st">"REST API"</tspan><tspan class="cd-sy">, </tspan><tspan
														class="cd-st">"MySQL"</tspan
													><tspan class="cd-sy">];</tspan>
												</text>
												<text x="32" y="104"><tspan class="cd-sy">{'}'}</tspan></text>
												<text x="32" y="115">
													<tspan class="cd-kw">export const</tspan> <tspan class="cd-fn">createPortfolio</tspan>
													<tspan class="cd-sy">= () =&gt;</tspan> <tspan class="cd-sy">({'{'}</tspan>
												</text>
												<text x="40" y="126">
													<tspan class="cd-vr">author</tspan><tspan class="cd-sy">: </tspan><tspan class="cd-st">"M. Erel"</tspan
													><tspan class="cd-sy">, </tspan><tspan class="cd-vr">status</tspan><tspan class="cd-sy">: </tspan><tspan
														class="cd-st">"ready_for_code"</tspan
													>
												</text>
												<text x="32" y="137">
													<tspan class="cd-sy">{'}'});</tspan>
													<tspan class="cd-cur" fill="#4d7cff" font-weight="bold">|</tspan>
												</text>
											</g>
											<rect x="0" y="162" width="320" height="18" fill="#090d16" stroke="#ffffff12" stroke-width="0.8" />
											<g font-family="ui-monospace,SFMono-Regular,Consolas,monospace" font-size="6.5">
												<circle cx="10" cy="171" r="2.2" fill="#3fb950" />
												<text x="16" y="173" fill="#8b949e">main*</text>
												<text x="48" y="173" fill="#8b949e">✓ 0 Errors</text>
												<text x="210" y="173" fill="#8b949e">TypeScript · UTF-8</text>
												<text x="290" y="173" fill="#4d7cff" font-weight="bold">READY</text>
											</g>
										</svg>
										<div class="vp"><i></i></div>
									</div>
								</div>

								<div class="ed-sl" data-i="1">
									<div class="sk-v v2">
										<span class="vt">EDITING · TIMELINE</span>
										<div class="mon">
											<i style="--k:0"></i><i style="--k:1"></i><i style="--k:2"></i><i style="--k:3"></i>
										</div>
										<div class="vtl">
											<div class="tlw">
												<div class="trk">
													<b style="left:8%;width:22%;background:#a14dff">TITLE</b>
													<b style="left:58%;width:20%;background:#a14dff">LOWER THIRD</b>
												</div>
												<div class="trk">
													<b style="left:0;width:24%;background:#3b6cff">A-ROLL</b>
													<b style="left:25%;width:22%;background:#e0508a">B-ROLL</b>
													<b style="left:48%;width:26%;background:#1fa88a">INTERVIEW</b>
													<b style="left:75%;width:25%;background:#d98324">OUTRO</b>
												</div>
												<div class="trk"><b class="wf" style="left:0;width:100%"></b></div>
												<span class="vph"></span>
											</div>
										</div>
									</div>
								</div>

								<div class="ed-sl" data-i="2">
									<div class="sk-v v3">
										<span class="vt">DESIGN · VECTOR</span>
										<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
											<defs>
												<pattern id="gp" width="12" height="12" patternUnits="userSpaceOnUse">
													<path d="M12 0H0V12" fill="none" stroke="#ffffff12" stroke-width=".6" />
												</pattern>
												<linearGradient id="gg" x1="0" y1="0" x2="1" y2="1">
													<stop offset="0" stop-color="#eef1f8" />
													<stop offset="1" stop-color="#c27bff" />
												</linearGradient>
											</defs>
											<rect width="320" height="180" fill="#0c1020" />
											<rect width="320" height="180" fill="url(#gp)" />
											<rect x="64" y="24" width="192" height="136" rx="4" fill="#111830" stroke="#ffffff26" />
											<g fill="#ffffff1c"><rect x="14" y="28" width="30" height="124" rx="7" /></g>
											<g fill="none" stroke="#ffffff77" stroke-width="1.3" stroke-linecap="round">
												<path d="M24 44l6 6 6-6" />
												<circle cx="29" cy="72" r="5" />
												<rect x="24" y="92" width="10" height="9" rx="1.5" />
												<path d="M24 126l10-10" />
											</g>
											<path
												class="lgf"
												fill-rule="evenodd"
												fill="url(#gg)"
												d="M120 58H166C204 58 224 78 224 102C224 128 204 148 166 148H120ZM146 80V126H164C180 126 194 116 194 103C194 90 180 80 164 80Z"
											/>
											<path
												class="lgs"
												pathLength="100"
												fill="none"
												stroke="#fff"
												stroke-width="1.6"
												stroke-linejoin="round"
												d="M120 58H166C204 58 224 78 224 102C224 128 204 148 166 148H120ZM146 80V126H164C180 126 194 116 194 103C194 90 180 80 164 80Z"
											/>
											<g class="an">
												<g fill="#0c1020" stroke="#eef1f8" stroke-width="1.2">
													<rect x="117" y="55" width="6" height="6" />
													<rect x="163" y="55" width="6" height="6" />
													<rect x="221" y="99" width="6" height="6" />
													<rect x="163" y="145" width="6" height="6" />
													<rect x="117" y="145" width="6" height="6" />
												</g>
												<g stroke="#eef1f8" stroke-width=".8">
													<path d="M166 58L196 58M224 102L224 82" />
												</g>
												<g fill="#eef1f8">
													<circle cx="196" cy="58" r="2" />
													<circle cx="224" cy="82" r="2" />
												</g>
											</g>
											<g>
												<circle cx="290" cy="56" r="8" fill="#eef1f8" />
												<circle cx="290" cy="82" r="8" fill="#c27bff" />
												<circle cx="290" cy="108" r="8" fill="#ff7a9c" />
												<circle cx="290" cy="134" r="8" fill="#ffd36e" />
												<circle class="sel" cx="290" cy="56" r="12" fill="none" stroke="#fff" stroke-width="1.2" />
											</g>
										</svg>
										<div class="vp"><i></i></div>
									</div>
								</div>

								<div class="ed-sl" data-i="3">
									<div class="sk-v v4">
										<span class="vt">PHOTO · BEFORE / AFTER</span>
										<div class="ly b">
											<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
												<defs>
													<linearGradient id="pbs" x1="0" y1="0" x2="0" y2="1">
														<stop offset="0" stop-color="#2f6bff" />
														<stop offset=".55" stop-color="#ff8fb1" />
														<stop offset="1" stop-color="#ffd78a" />
													</linearGradient>
													<linearGradient id="pbw" x1="0" y1="0" x2="0" y2="1">
														<stop offset="0" stop-color="#ff9ab5" />
														<stop offset="1" stop-color="#1c2f6e" />
													</linearGradient>
												</defs>
												<rect width="320" height="112" fill="url(#pbs)" />
												<circle cx="222" cy="86" r="20" fill="#fff3c4" />
												<path d="M0 112 L48 64 L86 98 L140 50 L196 106 L250 72 L320 112Z" fill="#4a3a8a" />
												<path d="M0 122 L60 88 L118 114 L180 80 L240 116 L320 92 V112 H0Z" fill="#2a1f5a" />
												<rect y="112" width="320" height="68" fill="url(#pbw)" />
												<path d="M204 114h40M210 122h28M216 130h16" stroke="#fff3c4" stroke-width="2" stroke-linecap="round" opacity=".75" />
												<path d="M0 180V150L20 132L40 156L62 136L84 162L100 180Z" fill="#0d1230" />
											</svg>
										</div>
										<div class="ly a">
											<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
												<defs>
													<linearGradient id="pas" x1="0" y1="0" x2="0" y2="1">
														<stop offset="0" stop-color="#2f6bff" />
														<stop offset=".55" stop-color="#ff8fb1" />
														<stop offset="1" stop-color="#ffd78a" />
													</linearGradient>
													<linearGradient id="paw" x1="0" y1="0" x2="0" y2="1">
														<stop offset="0" stop-color="#ff9ab5" />
														<stop offset="1" stop-color="#1c2f6e" />
													</linearGradient>
												</defs>
												<rect width="320" height="112" fill="url(#pas)" />
												<circle cx="222" cy="86" r="20" fill="#fff3c4" />
												<path d="M0 112 L48 64 L86 98 L140 50 L196 106 L250 72 L320 112Z" fill="#4a3a8a" />
												<path d="M0 122 L60 88 L118 114 L180 80 L240 116 L320 92 V112 H0Z" fill="#2a1f5a" />
												<rect y="112" width="320" height="68" fill="url(#paw)" />
												<path d="M204 114h40M210 122h28M216 130h16" stroke="#fff3c4" stroke-width="2" stroke-linecap="round" opacity=".75" />
												<path d="M0 180V150L20 132L40 156L62 136L84 162L100 180Z" fill="#0d1230" />
											</svg>
										</div>
										<i class="dv"><b></b></i>
										<span class="lb l1">BEFORE</span>
										<span class="lb l2">AFTER</span>
										<div class="ls">
											<p><em>Exposure</em><u><s style="--t:72"></s></u></p>
											<p><em>Contrast</em><u><s style="--t:62"></s></u></p>
											<p><em>Vibrance</em><u><s style="--t:84"></s></u></p>
										</div>
										<div class="vp"><i></i></div>
									</div>
								</div>

								<div class="ed-sl" data-i="4">
									<div class="sk-v v5">
										<span class="vt">MOTION · KEYFRAMES</span>
										<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
											<rect width="320" height="180" fill="#080b17" />
											<circle class="mo" cx="160" cy="62" r="46" fill="none" stroke="#ffffff33" stroke-width="1" stroke-dasharray="3 6" />
											<circle class="mc" cx="100" cy="62" r="15" fill="#eef1f8" />
											<rect class="mr" x="144" y="47" width="30" height="30" rx="7" fill="#ff7a9c" />
											<path class="mt" d="M204 77L219 47L234 77Z" fill="#ffd36e" />
											<line x1="30" y1="160" x2="290" y2="160" stroke="#ffffff30" />
											<g fill="#ffd36e">
												<rect class="kf" x="54" y="156" width="8" height="8" rx="1" style="--k:0" />
												<rect class="kf" x="104" y="156" width="8" height="8" rx="1" style="--k:1" />
												<rect class="kf" x="154" y="156" width="8" height="8" rx="1" style="--k:2" />
												<rect class="kf" x="204" y="156" width="8" height="8" rx="1" style="--k:3" />
												<rect class="kf" x="254" y="156" width="8" height="8" rx="1" style="--k:4" />
											</g>
											<line class="mph" x1="30" y1="146" x2="30" y2="172" stroke="#ff4d5e" stroke-width="1.6" />
										</svg>
										<div class="mtx" aria-hidden="true">
											<b><i style="--k:0">M</i></b><b><i style="--k:1">O</i></b><b><i style="--k:2">T</i></b><b><i style="--k:3">I</i></b><b><i style="--k:4">O</i></b><b><i style="--k:5">N</i></b>
										</div>
										<div class="vp"><i></i></div>
									</div>
								</div>

								<i class="ed-cb"></i>
							</div>
							<div class="ed-cap">
								<span id="ednm">FULLSTACK DEVELOPER</span>
								<span id="edno">01 / 05</span>
							</div>
						</div>

						<div class="ed-ins" id="edins">
							<div class="ed-pn" data-i="0" style="--c:#4d7cff">
								<span class="ed-ey" style="--j:0">CLIP 01 / 05</span>
								<h3 style="--j:1">Fullstack Developer</h3>
								<p class="sk-d" style="--j:2">
									Membangun aplikasi web dan sistem informasi interaktif: mulai dari antarmuka frontend yang responsif,
									logika server backend yang tangguh, hingga arsitektur basis data terstruktur. Berfokus pada penulisan kode
									yang bersih, efisien, dan performa optimal.
								</p>
								<ul class="sk-b">
									<li style="--j:3"><b>Frontend:</b> HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), TypeScript, SvelteKit</li>
									<li style="--j:4"><b>Backend &amp; DB:</b> PHP, Node.js, RESTful API &amp; MySQL</li>
									<li style="--j:5"><b>Workflow:</b> Git, GitHub, VS Code, Responsive Design &amp; Linux</li>
								</ul>
								<div class="skc" style="--j:6">
									<span><i class="u-vc"></i>VS Code</span>
									<span><i class="u-gh"></i>GitHub</span>
									<span><i class="u-my"></i>MySQL</span>
									<span class="tg">JavaScript</span>
									<span class="tg">TypeScript</span>
									<span class="tg">PHP</span>
									<span class="tg">SvelteKit</span>
									<span class="tg">Tailwind</span>
								</div>
							</div>

							<div class="ed-pn" data-i="1" style="--c:#ff5c9a">
								<span class="ed-ey" style="--j:0">CLIP 02 / 05</span>
								<h3 style="--j:1">Video Editing</h3>
								<p class="sk-d" style="--j:2">
									Menata rekaman mentah menjadi konten yang runut, dinamis, dan menarik perhatian. Menguasai alur kerja
									timeline multi-layer, sinkronisasi audio, subtitling, hingga color grading untuk video panjang maupun format
									vertikal cepat (TikTok / Reels).
								</p>
								<ul class="sk-b">
									<li style="--j:3">Cutting presisi, pacing dinamis &amp; storytelling</li>
									<li style="--j:4">Audio balancing, sound effects &amp; subtitling</li>
									<li style="--j:5">Color grading &amp; render optimal multiplatform</li>
								</ul>
								<div class="skc" style="--j:6">
									<span><i class="u-cc"></i>CapCut</span>
									<span><i class="u-dv"></i>DaVinci Resolve</span>
								</div>
							</div>

							<div class="ed-pn" data-i="2" style="--c:#b266ff">
								<span class="ed-ey" style="--j:0">CLIP 03 / 05</span>
								<h3 style="--j:1">Graphic Design</h3>
								<p class="sk-d" style="--j:2">
									Merancang elemen visual yang komunikatif, estetis, dan konsisten. Berfokus pada kejelasan informasi melalui
									harmoni tipografi, hierarki tata letak, dan pemilihan palet warna untuk kebutuhan identitas brand, poster,
									dan media promosi digital.
								</p>
								<ul class="sk-b">
									<li style="--j:3">Desain identitas brand, logo &amp; vektor</li>
									<li style="--j:4">Poster event, banner &amp; feed media sosial</li>
									<li style="--j:5">Perancangan thumbnail &amp; layout publikasi</li>
								</ul>
								<div class="skc" style="--j:6">
									<span><i class="u-ps"></i>Photoshop</span>
									<span class="tg">Canva</span>
								</div>
							</div>

							<div class="ed-pn" data-i="3" style="--c:#ff9f3d">
								<span class="ed-ey" style="--j:0">CLIP 04 / 05</span>
								<h3 style="--j:1">Photo Editing</h3>
								<p class="sk-d" style="--j:2">
									Penyempurnaan foto digital melalui pengaturan tonal, koreksi pencahayaan, dan retouching detail. Menjaga
									konsistensi mood dan tone warna agar foto terlihat bersih, tajam, dan siap untuk publikasi digital maupun
									media cetak.
								</p>
								<ul class="sk-b">
									<li style="--j:3">Color correction &amp; tone curve balancing</li>
									<li style="--j:4">Retouching objek &amp; pembersihan detail visual</li>
									<li style="--j:5">Batch processing &amp; grading foto berseri</li>
								</ul>
								<div class="skc" style="--j:6">
									<span><i class="u-ps"></i>Photoshop</span>
								</div>
							</div>

							<div class="ed-pn" data-i="4" style="--c:#2fd6a6">
								<span class="ed-ey" style="--j:0">CLIP 05 / 05</span>
								<h3 style="--j:1">Motion Graphics</h3>
								<p class="sk-d" style="--j:2">
									Menganimasikan grafis diam, logo, dan teks agar pesan tersampaikan lebih hidup dan interaktif. Menerapkan
									kurva easing halus dan sinkronisasi ketukan audio untuk menciptakan intro, bumper, dan elemen grafis gerak
									modern.
								</p>
								<ul class="sk-b">
									<li style="--j:3">Animasi logo reveal, intro &amp; lower third</li>
									<li style="--j:4">Tipografi kinetik &amp; infografis animasi</li>
									<li style="--j:5">Keyframing halus, transisi kustom &amp; sinkronisasi audio</li>
								</ul>
								<div class="skc" style="--j:6">
									<span><i class="u-ae"></i>After Effects</span>
									<span><i class="u-am"></i>Alight Motion</span>
								</div>
							</div>
						</div>
					</div>

					<div
						class="ed-tl"
						id="edtl"
						tabindex="0"
						role="slider"
						aria-label="Timeline bidang keahlian"
						aria-valuemin="0"
						aria-valuemax="4"
						aria-valuenow="0"
					>
						<div class="ed-ro">
							<span class="ed-lb"></span>
							<div class="ed-rul" id="edrul"></div>
						</div>
						<div class="ed-ro">
							<span class="ed-lb">V1</span>
							<div class="ed-ln v1">
								<button type="button" class="ed-cl" tabindex="-1" style="--c:#4d7cff;--i:0" data-i="0">
									<span class="fl"></span><span class="n">01</span><span class="ctt">Fullstack Developer</span>
								</button>
								<button type="button" class="ed-cl" tabindex="-1" style="--c:#ff5c9a;--i:1" data-i="1">
									<span class="fl"></span><span class="n">02</span><span class="ctt">Video Editing</span>
								</button>
								<button type="button" class="ed-cl" tabindex="-1" style="--c:#b266ff;--i:2" data-i="2">
									<span class="fl"></span><span class="n">03</span><span class="ctt">Graphic Design</span>
								</button>
								<button type="button" class="ed-cl" tabindex="-1" style="--c:#ff9f3d;--i:3" data-i="3">
									<span class="fl"></span><span class="n">04</span><span class="ctt">Photo Editing</span>
								</button>
								<button type="button" class="ed-cl" tabindex="-1" style="--c:#2fd6a6;--i:4" data-i="4">
									<span class="fl"></span><span class="n">05</span><span class="ctt">Motion Graphics</span>
								</button>
							</div>
						</div>
						<div class="ed-ro">
							<span class="ed-lb">V2</span>
							<div class="ed-ln v2">
								<div class="ed-tg" style="--i:0" data-i="0">
									<i class="u-vc"></i><i class="u-gh"></i><i class="u-my"></i>
								</div>
								<div class="ed-tg" style="--i:1" data-i="1">
									<i class="u-cc"></i><i class="u-dv"></i>
								</div>
								<div class="ed-tg" style="--i:2" data-i="2"><i class="u-ps"></i></div>
								<div class="ed-tg" style="--i:3" data-i="3"><i class="u-ps"></i></div>
								<div class="ed-tg" style="--i:4" data-i="4">
									<i class="u-ae"></i><i class="u-am"></i>
								</div>
							</div>
						</div>
						<div class="ed-ro">
							<span class="ed-lb">A1</span>
							<div class="ed-ln aw">
								<b class="ed-wd"></b>
								<div class="ed-wuw"><b class="ed-wu"></b></div>
							</div>
						</div>
						<div class="ed-lane" id="edlane"><span class="ed-ph"><i></i></span></div>
					</div>
					<p class="ed-ht">SERET PLAYHEAD ATAU KLIK KLIP UNTUK MENJELAJAH</p>
				</div>

				<div class="rv sup">
					<p class="sn">Made By Erel</p>
					<p class="pd">Klik logo software untuk melihat performa saya.</p>
				</div>
				<div class="sa rv" id="sa" style="--i:1">
					{#each softwares as sw (sw.index)}
						<div
							class="fb"
							role="button"
							tabindex="0"
							style="--k:{sw.index}"
							data-u={sw.code}
							data-n={sw.name}
							data-f={sw.category}
							data-d={sw.description}
						>
							<div class="fbp"><i class="fbi {sw.code}"></i></div>
							<em>{sw.name}</em>
						</div>
					{/each}
					<div class="sc" id="sc">
						<i class="sc-l"></i>
						<div>
							<em></em>
							<b></b>
							<p></p>
						</div>
						<button class="sc-x" aria-label="Tutup">&times;</button>
					</div>
				</div>
			</div>

			<div class="ps pv">
				<p class="sn rv">04 — SELECTED WORK</p>
				<h2 class="disp rv" style="--i:1">Preview Karya</h2>
				<p class="pd rv" style="--i:2">Sekilas hasil karya. Lihat detail lengkapnya di halaman Project.</p>
				<div class="pvf rv" id="pvf" style="--i:1" aria-label="Preview karya"></div>
				<div class="rv" style="--i:4">
					<button class="cta" data-go="project">LIHAT SEMUA PROJECT →</button>
				</div>
			</div>
		</div>
	</section>

	<section class="pg" id="project">
		<div class="bd">
			<div class="bd-hd" data-s>
				<h2 class="disp">Recap Project</h2>
				<p>Hasil Karya</p>
			</div>
			<div class="bd-tb" data-s style="--i:1">
				<div class="bd-ch" id="bdch">
					<button data-f="all" class="a">Semua</button>
					<button data-f="Web">Web</button>
					<button data-f="Foto">Foto</button>
					<button data-f="Video">Video</button>
					<button data-f="Motion">Motion</button>
					<button data-f="Design">Design</button>
				</div>
				<div class="bd-ac">
					<span class="bd-n"><b id="bdn">10</b> KARYA</span>
					<button id="bdr">Rapikan</button>
					<button id="bdx">Acak</button>
				</div>
			</div>
			<div class="bd-gr" id="bdg">
				{#each projects as proj (proj.id)}
					<div class="bd-c" style="--k:{proj.index};--r:{proj.rotation}" data-cat={proj.category}>
						{#if proj.href}
							<a
								class="pcd hasimg"
								style="--h:{proj.hue}"
								href={proj.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								<i class="pcd-bg"></i><i class="pcd-ln"></i><i class="pcd-sp"></i>
								<div class="pcd-hd">
									<span>rel</span><span>2026</span><span>{proj.id}</span>
								</div>
								<em class="pcd-vv">CREATIVE STUDIO</em><i class="pcd-dt"></i>
								<div class="pcd-fr">
									<div class="pcd-ph">
										<img src="/{proj.image}" loading="lazy" decoding="async" alt={proj.alt} draggable="false" />
									</div>
								</div>
								<div class="pcd-ft">
									<small>{proj.subtitle}</small>
									<b>{proj.title}</b>
									<dl class="pcd-meta">
										<div><dt>Project Type</dt><dd>{proj.projectType}</dd></div>
										<div><dt>Role</dt><dd>{proj.role}</dd></div>
										<div><dt>Tools</dt><dd>{proj.tools}</dd></div>
										<div><dt>Year</dt><dd>{proj.year}</dd></div>
										<div><dt>Output</dt><dd>{proj.output}</dd></div>
									</dl>
								</div>
								<i class="pcd-sw"></i>
							</a>
						{:else}
							<div class="pcd hasimg" style="--h:{proj.hue}">
								<i class="pcd-bg"></i><i class="pcd-ln"></i><i class="pcd-sp"></i>
								<div class="pcd-hd">
									<span>rel</span><span>2026</span><span>{proj.id}</span>
								</div>
								<em class="pcd-vv">CREATIVE STUDIO</em><i class="pcd-dt"></i>
								<div class="pcd-fr">
									<div class="pcd-ph">
										<img src="/{proj.image}" loading="lazy" decoding="async" alt={proj.alt} draggable="false" />
									</div>
								</div>
								<div class="pcd-ft">
									<small>{proj.subtitle}</small>
									<b>{proj.title}</b>
									<dl class="pcd-meta">
										<div><dt>Project Type</dt><dd>{proj.projectType}</dd></div>
										<div><dt>Role</dt><dd>{proj.role}</dd></div>
										<div><dt>Tools</dt><dd>{proj.tools}</dd></div>
										<div><dt>Year</dt><dd>{proj.year}</dd></div>
										<div><dt>Output</dt><dd>{proj.output}</dd></div>
									</dl>
								</div>
								<i class="pcd-sw"></i>
							</div>
						{/if}
					</div>
				{/each}
			</div>
			<p class="bd-ht" id="bdht" data-s style="--i:2">
				SERET KARTU UNTUK MENATA ULANG · ARAHKAN UNTUK PRATINJAU · KLIK UNTUK BUKA VIDEO
			</p>
		</div>
	</section>

	<section class="pg" id="contact">
		<div class="ct">
			<div class="cn-info">
				<p class="t-sub" data-s style="--i:0">04 — KONTAK</p>
				<h3 class="disp cn-h" data-s style="--i:0">Punya pertanyaan atau ingin bekerja sama? Kirim pesan.</h3>
				<div class="soc">
					<a href="https://wa.me/6281234395899" target="_blank" rel="noopener noreferrer" data-s style="--i:1">
						<b class="ci" aria-label="WA">
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path
									fill="none"
									stroke="#000"
									stroke-width="2"
									stroke-linejoin="round"
									d="M12 3.2a8.8 8.8 0 0 0-7.6 13.3L3.2 20.8l4.5-1.2A8.8 8.8 0 1 0 12 3.2z"
								/>
								<path
									fill="#000"
									d="M9 8.6c.2-.4.5-.4.7-.4h.5c.2 0 .4 0 .5.4l.7 1.6c.1.3 0 .5-.2.7l-.4.5c.5 1 1.3 1.8 2.3 2.3l.5-.4c.2-.2.4-.3.7-.2l1.5.7c.3.1.4.3.3.6-.2.9-1 1.4-1.9 1.3-2.6-.5-4.6-2.5-5.1-5.1-.1-.8.3-1.5.9-1.9z"
								/>
							</svg>
						</b>
						{profile.phone}
					</a>
					<a href="mailto:{profile.email}" data-s style="--i:2">
						<b class="ci" aria-label="@">
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<rect x="3" y="5.5" width="18" height="13" rx="2.5" fill="none" stroke="#000" stroke-width="2" />
								<path d="M4 7.5l8 5.5 8-5.5" fill="none" stroke="#000" stroke-width="2" stroke-linejoin="round" />
							</svg>
						</b>
						{profile.email}
					</a>
					<a href="https://www.instagram.com/rel.mes/" target="_blank" rel="noopener noreferrer" data-s style="--i:3">
						<b class="ci" aria-label="IG">
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="#000" stroke-width="2" />
								<circle cx="12" cy="12" r="4.2" fill="none" stroke="#000" stroke-width="2" />
								<circle cx="17.3" cy="6.7" r="1.3" fill="#000" />
							</svg>
						</b>
						{profile.instagram}
					</a>
					<a href="https://www.tiktok.com/@reiforrel" target="_blank" rel="noopener noreferrer" data-s style="--i:4">
						<b class="ci" aria-label="TT">
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path
									fill="#000"
									d="M16.2 3c.3 2.6 1.9 4.4 4.6 4.6v3.2c-1.7 0-3.2-.5-4.6-1.4v6.6a5.8 5.8 0 1 1-5.8-5.8c.3 0 .6 0 .9.1v3.3a2.6 2.6 0 1 0 1.9 2.5V3h2.8z"
								/>
							</svg>
						</b>
						{profile.tiktok}
					</a>
					<a
						href="https://www.youtube.com/results?search_query=Relmes Channel"
						target="_blank"
						rel="noopener noreferrer"
						data-s
						style="--i:5"
					>
						<b class="ci" aria-label="YT">
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<rect x="2" y="5" width="20" height="14" rx="4" fill="#000" />
								<path d="M10 9.2v5.6l4.8-2.8z" fill="#fff" />
							</svg>
						</b>
						{profile.youtube}
					</a>
				</div>
			</div>

			<div class="cn-form-wrap" data-s style="--i:2">
				<div class="cf-card">
					<div class="cf-badge">
						<span class="cf-dot"></span>
						<span>PESAN LANGSUNG KE EMAIL</span>
					</div>

					<form id="contactForm" class="cf-form" method="POST" action="?/kirim" novalidate>
						<div class="cf-field">
							<label for="cf-nama" class="cf-label">NAMA</label>
							<input
								type="text"
								id="cf-nama"
								name="nama"
								required
								autocomplete="name"
								placeholder="Nama lengkap kamu"
								class="cf-input"
							/>
						</div>

						<div class="cf-field">
							<label for="cf-email" class="cf-label">EMAIL</label>
							<input
								type="email"
								id="cf-email"
								name="email"
								required
								autocomplete="email"
								placeholder="nama@email.com"
								class="cf-input"
							/>
						</div>

						<div class="cf-field">
							<label for="cf-pesan" class="cf-label">PESAN</label>
							<textarea
								id="cf-pesan"
								name="pesan"
								required
								rows="5"
								placeholder="Tulis pesan kamu di sini"
								class="cf-textarea"
							></textarea>
						</div>

						<button type="submit" id="cf-btn" class="cf-btn">
							<span class="cf-btn-text">Kirim pesan</span>
							<svg
								class="cf-spinner"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								aria-hidden="true"
							>
								<path d="M12 3a9 9 0 1 0 9 9" />
							</svg>
							<svg
								class="cf-arrow"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<path d="M5 12h14M12 5l7 7-7 7" />
							</svg>
						</button>

						<div id="cf-status" class="cf-status" role="alert" aria-live="polite">
							<span class="cf-status-icon"></span>
							<span class="cf-status-msg"></span>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</main>
