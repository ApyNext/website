<script>
	import Navbar from '../components/navbar.svelte';
	import MessagesHome from '../components/MessagesHome.svelte';
	import Rightbar from '../components/Rightbar.svelte';
</script>

<title>ApyNext - Home</title>

<div class="flex h-screen justify-center">
	{' '}
	<div class="xl:w-1/5 2xl:w-1/6 xl:ml-20 2xl:ml-40">
		{' '}
		<Navbar />
	</div>
	<MessagesHome />
	<Rightbar />
</div>
