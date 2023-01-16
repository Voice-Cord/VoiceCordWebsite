<template>
	<SkewBox
		:rightBG="{
			backgroundImage: `url(${require('@/assets/img/Microphone/OrangeBlueMic.jpg')})`,
			'background-position': 'top',
			'background-size': 'cover',
			'background-repeat': 'none',
			width: '58vw!important',
		}"
		:rightColor="'transparent'"
		:leftColor="'var(--primary); backdrop-filter: blur(5px);'"
		:height="500"
		:padding="'0'"
	>
		<template v-slot:left>
			<div class="vertical-center">
				<h1 class="white">VoiceCord</h1>
				<h3 class="white">The best voice messaging bot on Discord!</h3>
			</div>
		</template>
		<template v-slot:right>
			<div class="vertical-center">
				<div class="w-100 mx-5 px-5 row">
					<div
						class="col-6"
						style="display: flex; justify-content: end"
					>
						<a
							href="https://www.discord.com"
							target="_blank"
							class="btn btn-primary btn-lg"
						>
							Invite to Server
						</a>
					</div>
					<div
						class="col-6"
						style="display: flex; justify-content: start"
					>
						<router-link
							to="/documentation"
							class="btn btn-primary btn-lg"
						>
							Documentation
						</router-link>
					</div>
				</div>
			</div>
		</template>
	</SkewBox>
	<Parallax
		:image="{
			backgroundImage: `url(${require('@/assets/img/Discord2.jpg')})`,
			'background-position': 'center',
			'backdrop-filter': '5px',
		}"
		:height="'0'"
		:opacity="0.7"
		:overlayColor="'0, 0, 0'"
	>
		<div class="blur">
			<div class="container h-100 py-5">
				<h1 class="white center">About VoiceCord</h1>
				<p class="white justify-large">
					{{ data }} Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Sequi numquam facere id reiciendis iusto repudiandae,
					nesciunt totam voluptas aliquam sapiente labore voluptate,
					unde natus, ipsa non amet! Fugiat, vitae officia? Lorem,
					ipsum dolor sit amet consectetur adipisicing elit. At
					obcaecati rerum esse totam. Facilis minus, laudantium qui
					beatae incidunt suscipit quidem sit sed? Sed quam impedit
					voluptate, temporibus quisquam magnam! Lorem ipsum dolor,
					sit amet consectetur adipisicing elit. Porro soluta,
					quisquam voluptatibus beatae nobis minus at itaque
					reiciendis eligendi. Eaque quasi consequuntur quisquam sint
					amet laudantium esse ab eius asperiores! Lorem ipsum dolor
					sit amet consectetur, adipisicing elit. Quod, temporibus rem
					eveniet numquam totam omnis repellendus fugit eius quae eum.
					Facilis sapiente cupiditate odio commodi ullam id autem est
					quaerat. Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Sequi numquam facere id reiciendis iusto repudiandae,
					nesciunt totam voluptas aliquam sapiente labore voluptate,
					unde natus, ipsa non amet! Fugiat, vitae officia? Lorem,
					ipsum dolor sit amet consectetur adipisicing elit. At
					obcaecati rerum esse totam. Facilis minus, laudantium qui
					beatae incidunt suscipit quidem sit sed? Sed quam impedit
					voluptate, temporibus quisquam magnam! Lorem ipsum dolor,
					sit amet consectetur adipisicing elit. Porro soluta,
					quisquam voluptatibus beatae nobis minus at itaque
					reiciendis eligendi. Eaque quasi consequuntur quisquam sint
					amet laudantium esse ab eius asperiores! Lorem ipsum dolor
					sit amet consectetur, adipisicing elit. Quod, temporibus rem
					eveniet numquam totam omnis repellendus fugit eius quae eum.
					Facilis sapiente cupiditate odio commodi ullam id autem est
					quaerat.
				</p>
			</div>
		</div>
	</Parallax>
</template>

<script>
import Parallax from "@/components/Parallax.vue";
import SkewBox from "@/components/SkewBox.vue";
import { supabase } from "@/supabase";

export default {
	components: {
		SkewBox,
		Parallax,
	},
	data() {
		return {
			data: "",
		};
	},
	async mounted() {
		const { data, error } = await supabase.from("test").select('data');

        if (error) {
            console.log("AYO THIS IS AN ERROR", error);
            return;
        }

        this.data = data;
	},
};
</script>

<style>
</style>