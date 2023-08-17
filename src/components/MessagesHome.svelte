<script>
	import IconHome from '../assets/icons/icon-home.svg';
	import Logo from '../assets/img/apynext.png';

	import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';

	import IconLike from '../assets/icons/icon-like.png';
	import IconBoost from '../assets/icons/icon-boost.png';
	import IconShare from '../assets/icons/icon-share.png';
	import IconMore from '../assets/icons/icon-more.png';

	import PlaceHolder from '../assets/img/PLACEHOLDER.png';

	import SvelteMarkdown from 'svelte-markdown';

	const source = `
  **Hello** [test](hello.fr)  *italic*
  # hello 
  `;
</script>

<div class="flex-grow 2xl:ml-14 xl:ml-20 lg:ml-7 ml-2 h-screen break-all">
	<div class="border mx-2 p-2 bg-bg-100 w-28 flex items-start">
		<img src={IconHome} loading="lazy" class="h-6 mx-2" alt="home" />
		<p>Home</p>
	</div>
	<div
		class="flex items-start border-gray-200 rounded-lg mx-2 p-2 break-all max-w-3xl border my-2 duration-300 hover:bg-white-100"
	>
		<img
			src={Logo}
			class="w-16 h-16 rounded-full mr-4 mt-2 duration-300 hover:sepia"
			alt="PP"
			loading="lazy"
		/>
		<div class="flex-1">
			<div class="flex items-center mb-1">
				<a
					href="/"
					class="group relative inline-block overflow-hidden rounded border-gray-100 bg-gray-200 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none active:bg-indigo-600 active:text-white"
					><h2 class="text-lg font-bold mr-2 duration-100 hover:border-b-2">Maël</h2>
					<span
						class="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary transition-all duration-300 group-hover:w-full xl:inline-flex hidden xl:visible"
					/>
				</a>
				<p class="text-gray-500 text-sm">16/08/2023</p>
			</div>
			<div id="content">
				<SvelteMarkdown {source} />
			</div>
			<!-- <p class="text-base break-all" /> -->
			<div class="grid grid-cols-4 w-full my-2">
				<div class="flex items-center">
					<img
						src={IconLike}
						alt="Like"
						class="h-10 hover:cursor-pointer duration-300 hover:bg-bg rounded-full p-1"
					/>
					<p class="px-1 sm:inline-flex hidden sm:visible">34</p>
				</div>
				<img
					src={IconBoost}
					alt="Boost"
					class="h-10 hover:cursor-pointer duration-300 hover:bg-bg rounded-full p-1"
				/>
				<img
					src={IconShare}
					alt="Share"
					class="h-10 hover:cursor-pointer duration-300 hover:bg-bg rounded-full p-1"
				/>
				<Button
					><img
						src={IconMore}
						alt="More"
						class="h-10 hover:cursor-pointer duration-300 hover:bg-bg rounded-full p-1"
					/></Button
				>
				<Dropdown class=" bg-gray p-3 rounded-md" placement="top">
					<DropdownItem class="p-1 text-lg text-primary duration-150 hover:text-xl"
						>Report</DropdownItem
					>
				</Dropdown>
				<!-- <img
					src={IconMore}
					alt="More"
					class="h-10 hover:cursor-pointer duration-300 hover:bg-bg rounded-full p-1"
				/> -->
			</div>
		</div>
	</div>
	<div
		class="flex items-start border-gray-200 rounded-lg mx-2 p-2 break-all max-w-3xl border my-2 duration-300 hover:bg-white-100"
	>
		<img
			src={Logo}
			class="w-16 h-16 rounded-full mr-4 mt-2 duration-300 hover:sepia"
			alt="PP"
			loading="lazy"
		/>
		<div class="flex-1">
			<div class="flex items-center mb-1">
				<a
					href="/"
					class="group relative inline-block overflow-hidden rounded border-gray-100 bg-gray-200 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none active:bg-indigo-600 active:text-white"
					><h2 class="text-lg font-bold mr-2 duration-100 hover:border-b-2">Maël</h2>
					<span
						class="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary transition-all duration-300 group-hover:w-full xl:inline-flex hidden xl:visible"
					/>
				</a>

				<p class="text-gray-500 text-sm">16/08/2023</p>
			</div>
			<img src={PlaceHolder} alt="" class="rounded-xl" />
			<div class="grid grid-cols-4 w-full my-2">
				<div class="flex items-center">
					<img
						src={IconLike}
						alt="Like"
						class="h-10 hover:cursor-pointer duration-300 hover:bg-bg rounded-full p-1"
					/>
					<p class="px-1 sm:inline-flex hidden sm:visible">34</p>
				</div>
				<img
					src={IconBoost}
					alt="Boost"
					class="h-10 hover:cursor-pointer duration-300 hover:bg-bg rounded-full p-1"
				/>
				<img
					src={IconShare}
					alt="Share"
					class="h-10 hover:cursor-pointer duration-300 hover:bg-bg rounded-full p-1"
				/>
				<Button
					><img
						src={IconMore}
						alt="More"
						class="h-10 hover:cursor-pointer duration-300 hover:bg-bg rounded-full p-1"
					/></Button
				>
				<Dropdown class=" bg-gray p-3 rounded-md" placement="top">
					<DropdownItem class="p-1 text-lg text-primary duration-150 hover:text-xl"
						>Report</DropdownItem
					>
				</Dropdown>
				<!-- <img
					src={IconMore}
					alt="More"
					class="h-10 hover:cursor-pointer duration-300 hover:bg-bg rounded-full p-1"
				/> -->
			</div>
		</div>
	</div>
	<div
		class="flex items-start border-gray-200 rounded-lg mx-2 p-2 break-all max-w-3xl border my-2 duration-300 hover:bg-white-100"
	>
		<img
			src={Logo}
			class="w-16 h-16 rounded-full mr-4 mt-2 duration-300 hover:sepia"
			alt="PP"
			loading="lazy"
		/>
		<div class="flex-1">
			<div class="flex items-center mb-1">
				<a
					href="/"
					class="group relative inline-block overflow-hidden rounded border-gray-100 bg-gray-200 text-sm font-medium text-slate-800 hover:text-violet-600 focus:outline-none active:bg-indigo-600 active:text-white"
					><h2 class="text-lg font-bold mr-2 duration-100 hover:border-b-2">Maël</h2>
					<span
						class="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary transition-all duration-300 group-hover:w-full xl:inline-flex hidden xl:visible"
					/>
				</a>
				<p class="text-gray-500 text-sm">16/08/2023</p>
			</div>
			<div id="content">
				<SvelteMarkdown {source} />
			</div>
			<!-- <p class="text-base break-all" /> -->
			<div class="grid grid-cols-4 w-full my-2">
				<div class="flex items-center">
					<img
						src={IconLike}
						alt="Like"
						class="h-10 hover:cursor-pointer duration-300 hover:bg-bg rounded-full p-1"
					/>
					<p class="px-1 sm:inline-flex hidden sm:visible">34</p>
				</div>
				<img
					src={IconBoost}
					alt="Boost"
					class="h-10 hover:cursor-pointer duration-300 hover:bg-bg rounded-full p-1"
				/>
				<img
					src={IconShare}
					alt="Share"
					class="h-10 hover:cursor-pointer duration-300 hover:bg-bg rounded-full p-1"
				/>
				<Button
					><img
						src={IconMore}
						alt="More"
						class="h-10 hover:cursor-pointer duration-300 hover:bg-bg rounded-full p-1"
					/></Button
				>
				<Dropdown class=" bg-gray p-3 rounded-md" placement="top">
					<DropdownItem class="p-1 text-lg text-primary duration-150 hover:text-xl"
						>Report</DropdownItem
					>
				</Dropdown>
				<!-- <img
					src={IconMore}
					alt="More"
					class="h-10 hover:cursor-pointer duration-300 hover:bg-bg rounded-full p-1"
				/> -->
			</div>
		</div>
	</div>
</div>
