<script lang="ts">
	import Navbar from '../components/navbar.svelte';
	import MessagesHome from '../components/MessagesHome.svelte';
	import Rightbar from '../components/Rightbar.svelte';
	import Login from '../components/Login.svelte';

	let cookieName = 'monCookie';
	let isCookieStored: boolean;

	import { onMount } from 'svelte';

	onMount(() => {
		isCookieStored = document.cookie.includes(cookieName);
	});
</script>

<title>ApyNext - Home</title>

{#if isCookieStored}
	<div class="flex h-screen justify-center">
		{' '}
		<div class="xl:w-1/5 2xl:w-1/6 xl:ml-20 2xl:ml-40">
			{' '}
			<Navbar />
		</div>
		<MessagesHome />
		<Rightbar />
	</div>
{:else}
	<div
		class="h-screen flex justify-center items-center bg-[url('/src/assets/img/banner-login.png')] bg-cover"
	>
		<Login />
	</div>
{/if}
