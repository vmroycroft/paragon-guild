<template>
	<div class="home">
		<div class="above-fold d-flex flex-column justify-space-around wrapper">
			<div class="home__title">
				<img class="title__logo" :src="'./assets/images/emblem.svg'" />
				<h1 class="title__text paragon-font">
					Paragon
				</h1>
				<div class="title__info">A WoW Classic community</div>
			</div>
			<div class="about-us">
				<h2 class="section__title paragon-font">About Us</h2>
				<p>
					In order to secure our brand as an expansive guild vying for lasting success, we strive to constitute a Paragon of camaraderie. We believe that the social development of the guild and the
					members at its core are what define the culture that will resonate with the group’s success as a whole. In our core, we have parents, business owners, those working or studying full time,
					yet consistently manage an active roster at all hours of the day. Whatever your niche of gameplay, you’re sure to find yourself at home here at Paragon.
				</p>
			</div>
		</div>
		<div class="below-fold">
			<div class="below-fold__section wrapper">
				<h2 class="section__title paragon-font">What to Expect</h2>
				<p>
					A team of well-rounded, outgoing individuals who intend to achieve early game success that transcends into an infallible structure for future members to build upon, and veteran players to
					uphold in their climb to server success of all future content. After peeling back the elitist pride, you’ll discover a fellowship of friendly gamers, bathing in the nostalgic euphoria which
					is Vanilla WoW. We’re here for a good time, and intend on making every moment within the guild one worthy of recall.
				</p>
			</div>
			<hr />
			<div class="below-fold__section wrapper">
				<h2 class="section__title paragon-font">What We Expect of You</h2>
				<p>
					We commend your attempt at real-world obligations, but between those arduous treks to the front door to retrieve the pizza delivery and occasional breaks for bio, we expect you to be as
					active and participatory as could be in the guild! Developing a community requires engagement and contribution well beyond what a managing body can offer, and all members should be equipped
					with the vigor to drive new content to the guild. Keep personal disputes outside of the public realm of the guild, and do your best to maintain peace and unity. Beyond the social aspect
					comes the dedicated gamer aura. Can and will you take it upon yourself to research: appropriate addons to assist with team-related ventures such as new raid content, class development, BiS
					gear and character planning to become the best version of your role for the benefit of the guild as a whole? More importantly, can you be held accountable within your role, understanding
					that your position in a raid group, coordinated event team, class lead or position of management serves not only an obligation to a video game, but to dozens of other people actively engaged
					in a similar interest as you?
				</p>
			</div>
			<hr />
			<div class="below-fold__section wrapper">
				<h2 class="section__title paragon-font">What We're Looking For</h2>
				<p>
					Paragon is currently recruiting ALL members interested who can subscribe to the culture aforementioned in this post. If you feel as though the guild would be a suitable home for you, find
					any one of our members online (/who Paragon) as everyone has the right to invite!
				</p>
				<p>
					Moreover, we are also recruiting for Officer ranks to fulfill managerial responsibilities within the guild. Information regarding these specific ranks can be obtained by request ingame to
					any officer you see online, or with invitation to our guild’s discord server:
				</p>
				<ul>
					<li>Class Leads for Priest, Mage, Warlock, Druid, Shaman, Hunter</li>
					<li>Recruitment Manager</li>
					<li>
						Activities Coordinator
					</li>
					<li>Raid-lead Management</li>
					<li>QOL/HR</li>
					<li>Committee/Board</li>
				</ul>
				<p>
					If you have a particular interest or skillset regarding one of these positions, please reach out to us either by responding to this post, messaging/mailing Brujeria (GM) ingame, or by
					Discord @ Ricky James#2083.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home'
};
</script>

<style scoped>
.above-fold {
	min-height: calc(100vh - 64px);
}

.below-fold {
	background: #0e0807;
	/* background: #0c0c0c; */
	padding-bottom: 2.5rem;
}

.below-fold__section {
	padding: 2.5rem 0;
}

.below-fold__section:last-of-type {
	padding-bottom: 0;
}

.home > * {
	position: relative;
}

.home::before {
	content: '';
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(~@/../public/assets/images/background.jpg) no-repeat center center;
	background-size: cover;
}

.home__title {
	text-align: center;
}

.section__title {
	font-size: 3rem;
}

.title__logo {
	height: 220px;
	width: auto;
}

.title__text {
	font-size: 10rem;
	margin-bottom: -50px;
	margin-top: -40px;
}

@media (max-width: 960px) {
	.above-fold {
		min-height: calc(100vh - 56px);
	}

	.title__logo {
		height: 150px;
	}

	.title__text {
		font-size: 6.7rem;
		margin-top: -27px;
		margin-bottom: -35px;
	}

	.section__title {
		font-size: 2.5rem;
	}
}

@media (max-width: 375px) {
	.above-fold {
		min-height: calc(100vh - 56px);
		padding: 2rem 0;
	}

	.home__title {
		padding-bottom: 4rem;
	}

	.title__logo {
		height: 100px;
	}

	.title__text {
		font-size: 4.5rem;
		margin-top: -17px;
		margin-bottom: -21px;
	}

	.section__title {
		font-size: 1.8rem !important;
	}
}
</style>
