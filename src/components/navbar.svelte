<script lang="ts">
	import IconHome from '../assets/icons/icon-home.svg';
	import IconExplore from '../assets/icons/icon-explore.png';
	import IconSearch from '../assets/icons/icon-search.svg';
	import IconProfile from '../assets/icons/icon-profile.png';
	import IconSend from '../assets/icons/icon-send.png';
	import IconMessages from '../assets/icons/icon-message.png';
	import Logo from '../assets/img/apynext.png';

	import Modal from './SendMessage.svelte';

	let showModal = false;
</script>

<Modal bind:showModal>
	<h2 class="text-white text-center text-3xl" slot="header">Créer un Post</h2>

	<input
		type="text"
		class="border-white border rounded-3xl w-full p-4 bg-transparent placeholder-gray-100 text-white-100 focus:border-white-100"
		placeholder="Hello, my day was..."
		id="create-post"
	/>
</Modal>

<div class="h-screen w-20">
	<div class="fixed mx-0 border-r-2 h-screen w-24 xl:w-auto">
		<ul class="w-5/6 flex flex-col items-start ml-8">
			<img src={Logo} alt="ApyNext Logo" class="h-10 xl:h-16 my-5" loading="lazy" />
			<a
				class="group relative inline-block overflow-hidden rounded border-gray-100 bg-gray-200 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none active:bg-indigo-600 active:text-white"
				href="/"
			>
				<span
					class="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary transition-all duration-300 group-hover:w-full xl:inline-flex hidden xl:visible"
				/>
				<li class={`py-4 flex items-start `}>
					<img
						src={IconHome}
						alt="Icon home"
						class="h-8 sm:h-9 md:h-10 xl:h-12 bg-bg rounded-md p-1 sm:p-2"
						loading="lazy"
					/>
					<span
						class="mx-6 text-3xl duration-300 xl:inline-flex rounded items-center hidden xl:visible font-concretica"
					>
						Home
					</span>
				</li>
			</a>

			<a
				class="group relative inline-block overflow-hidden rounded border-gray-100 bg-gray-200 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
				href="/explore"
			>
				<span
					class="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary transition-all duration-300 group-hover:w-full xl:inline-flex hidden xl:visible"
				/>
				<li class={`py-4 flex items-start `}>
					<img
						src={IconExplore}
						alt="Icon explore"
						class="h-8 sm:h-9 md:h-10 xl:h-12 bg-bg rounded-md p-1 sm:p-2"
						loading="lazy"
					/>
					<span
						class="mx-6 text-3xl duration-300 xl:inline-flex rounded items-center hidden xl:visible font-concretica"
					>
						Explore
					</span>
				</li>
			</a>

			<a
				class="group relative inline-block overflow-hidden rounded border-gray-100 bg-gray-200 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
				href="/search"
			>
				<span
					class="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary transition-all duration-300 group-hover:w-full xl:inline-flex hidden xl:visible"
				/>
				<li class={`py-4 flex items-start `}>
					<img
						src={IconSearch}
						alt="Icon search"
						class="h-8 sm:h-9 md:h-10 xl:h-12 bg-bg rounded-md p-1 sm:p-2"
						loading="lazy"
					/>
					<span
						class="mx-6 text-3xl duration-300 xl:inline-flex rounded items-center hidden xl:visible font-concretica"
					>
						Search
					</span>
				</li>
			</a>

			<a
				class="group relative inline-block overflow-hidden rounded border-gray-100 bg-gray-200 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
				href="/messages"
			>
				<span
					class="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary transition-all duration-300 group-hover:w-full xl:inline-flex hidden xl:visible"
				/>
				<li class={`py-4 flex items-start `}>
					<img
						src={IconMessages}
						alt="Icon profile"
						class="h-8 sm:h-9 md:h-10 xl:h-12 bg-bg rounded-md p-1 sm:p-2"
						loading="lazy"
					/>
					<span
						class="mx-6 text-3xl duration-300 xl:inline-flex rounded items-center hidden xl:visible font-concretica"
					>
						Messages
					</span>
				</li>
			</a>
		</ul>
		{' '}
		<div class="flex w-full">
			<button
				on:click={() => (showModal = true)}
				class="my-4 p-1 px-2 mx-4 xl:p-3 xl:px-8 w-full rounded-3xl xl:w-full bg-bg hover:bg-bg-100 duration-300 text-black text-sm xl:text-3xl border-primary font-concretica font-bold"
			>
				<p class="xl:inline-flex rounded items-center hidden xl:visible text-yellow">Send</p>
				<img
					src={IconSend}
					class="mx-auto p-1 inline-flex rounded items-center visibile xl:hidden h-6 sm:h-7 md:h-8 xl:h-10"
					alt="Send"
					loading="lazy"
				/>
			</button>
		</div>
		<div class="flex flex-col ml-8 justify-end h-3/6 xl:h-96">
			<a
				class="group relative inline-block overflow-hidden rounded border-gray-100 bg-gray-200 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white"
				href="/profile"
			>
				<span
					class="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary transition-all duration-300 group-hover:w-full xl:inline-flex hidden xl:visible"
				/>
				<li class={`py-4 flex items-start`}>
					<img
						src={IconProfile}
						alt="Icon profile"
						class="h-8 sm:h-9 md:h-10 xl:h-12 bg-bg rounded-md p-1 sm:p-2"
						loading="lazy"
					/>
					<span
						class="mx-6 text-3xl duration-300 xl:inline-flex rounded items-center hidden xl:visible font-concretica"
					>
						Profile
					</span>
				</li>
			</a>
		</div>
	</div>
</div>
