<template>
	<div class="wrapper">
		<div class="overlay"></div>
		<div class="nav-pad">
			<div class="container my-5">
				<h1 class="white center">Servers</h1>
				<div class="row gy-4">
					<div v-for="guild in guilds" :key="guild" class="col-xl-3 col-md-6 col-12">
						<div class="card" style="width: 18rem">
							<img
								class="card-img-top"
								:src="guild.icon"
								alt="Card image cap"
							/>
							<div class="card-body">
								<p class="card-text" style="color: black">
                                    {{ guild.name }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    data() {
        return {
            guilds: []
        }
    },
    async mounted() {
		const user = this.$store.getters.getAuth;
        if(user) {
            const item = {
                method: "GET",
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('discord.accessToken')
                }
            }

            const res = await fetch('https://discord.com/api/users/@me/guilds', item).catch((e) => console.log(e));
            if(!res) return;

            const guilds = await res.json().catch((e) => console.log(e));
            if(!guilds) return;

            this.guilds = guilds;

            console.log(guilds);
            this.guilds.forEach((guild) => {
                if(guild.icon) {
                    guild.icon = `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
                } else {
                    guild.icon = require('@/assets/img/Logo/TransparentBGFace.png')
                }
            });
        }
    }
};
</script>

<style>
</style>
