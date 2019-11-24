<template>
	<div class="home">
		<h1 class="logo paragon-font">
			Paragon
		</h1>
		<div class="secondary-info">A WoW Classic community</div>
		<!-- <div class="logo d-flex justify-center align-center">
			<img class="logo__emblem" :src="'./assets/images/emblem-only.svg'" />
			<h1 class="logo__text">Paragon</h1>
		</div> -->
		<div class="intro">
			<p>
				We are a newly formed Classic WoW community, with members spanning all
				walks of WoW gameplay. Primarily focused as a leveling/group activity
				guild with intent to muscle through grinding the early game into Phase
				2, we are eagerly anticipating the development of our Raid structure,
				organized World PvP and Battleground teams, profession leveling intel,
				character development councils, and frequent activity coordination
				conducive to a laid-back retreat from the isolation of the open-world
				hustle. As we progress, we are hoping to bring along with us both
				veteran and novice players, who have an intrigue for the lore of the
				world and a dedicated drive to conquer end-game content.
			</p>
		</div>
		<div class="about-us">
			<h2 class="paragon-font">About Us</h2>
			<p>
				In order to secure our brand as an expansive guild vying for lasting
				success, we strive to constitute a Paragon of camaraderie. We believe
				that the social development of the guild and the members at its core are
				what define the culture that will resonate with the group’s success as a
				whole. In our core, we have parents, business owners, those working or
				studying full time, yet consistently manage an active roster at all
				hours of the day. Whatever your niche of gameplay, you’re sure to find
				yourself at home here at Paragon.
			</p>
		</div>
		<div class="what-to-expect">
			<h2 class="paragon-font">What to Expect</h2>
			<p>
				A team of well-rounded, outgoing individuals who intend to achieve early
				game success that transcends into an infallible structure for future
				members to build upon, and veteran players to uphold in their climb to
				server success of all future content. After peeling back the elitist
				pride, you’ll discover a fellowship of friendly gamers, bathing in the
				nostalgic euphoria which is Vanilla WoW. We’re here for a good time, and
				intend on making every moment within the guild one worthy of recall.
			</p>
		</div>
		<div class="expect-of-you">
			<h2 class="paragon-font">What We Expect of You</h2>
			<p>
				We commend your attempt at real-world obligations, but between those
				arduous treks to the front door to retrieve the pizza delivery and
				occasional breaks for bio, we expect you to be as active and
				participatory as could be in the guild! Developing a community requires
				engagement and contribution well beyond what a managing body can offer,
				and all members should be equipped with the vigor to drive new content
				to the guild. Keep personal disputes outside of the public realm of the
				guild, and do your best to maintain peace and unity. Beyond the social
				aspect comes the dedicated gamer aura. Can and will you take it upon
				yourself to research: appropriate addons to assist with team-related
				ventures such as new raid content, class development, BiS gear and
				character planning to become the best version of your role for the
				benefit of the guild as a whole? More importantly, can you be held
				accountable within your role, understanding that your position in a raid
				group, coordinated event team, class lead or position of management
				serves not only an obligation to a video game, but to dozens of other
				people actively engaged in a similar interest as you?
			</p>
		</div>
		<div class="looking-for">
			<h2>What We're Looking For</h2>
			<p>
				Paragon is currently recruiting ALL members interested who can subscribe
				to the culture aforementioned in this post. If you feel as though the
				guild would be a suitable home for you, find any one of our members
				online (/who Paragon) as everyone has the right to invite!
			</p>
			<p>
				Moreover, we are also recruiting for Officer ranks to fulfill managerial
				responsibilities within the guild. Information regarding these specific
				ranks can be obtained by request ingame to any officer you see online,
				or with invitation to our guild’s discord server:
			</p>
			<ul>
				<li>Class Leads for (/Priest/Mage/Warlock//Druid/Shaman/Hunter)</li>
				<li>Recruitment Manager</li>
				<li>
					Activities Coordinator
				</li>
				<li>Raid-lead Management</li>
				<li>QOL/HR</li>
				<li>Committee/Board</li>
			</ul>
			<p>
				If you have a particular interest or skillset regarding one of these
				positions, please reach out to us either by responding to this post,
				messaging/mailing Brujeria (GM) ingame, or by Discord @ Ricky James#2083
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home"
};
</script>

<style scoped>
/* .logo__emblem {
	height: 100px;
	width: auto;
} */

.paragon-font {
	font-family: "New Vera";
}

.logo {
	font-size: 12rem;
	text-align: center;
}
/* .logo__text {
	font-size: 12rem;
	font-family: "New Vera";
} */

.home > * {
	position: relative;
}

.home::before {
	content: "";
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75)),
		url(~/assets/images/background.jpg) no-repeat center center;
	background-size: cover;
}
</style>
