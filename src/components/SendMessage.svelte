<script lang="ts">
	export let showModal: Boolean;

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) dialog.showModal();

	import CloseIcon from '../assets/icons/close.png';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<div class="flex justify-center mx-0">
	<dialog
		class="z-20 bg-gradient-to-r from-gray via-gray-100 to-gray rounded-2xl w-2/3 h-64 m-10 mx-auto"
		bind:this={dialog}
		on:close={() => (showModal = false)}
	>
		>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="m-0" on:click|stopPropagation>
			<button class="mb-4" on:click={() => dialog.close()}>
				<img class=" h-5" src={CloseIcon} alt="Close" /></button
			>
			<slot name="header" />
			<br />
			<slot />
			<!-- svelte-ignore a11y-autofocus -->
		</div>
	</dialog>
</div>

<style>
	dialog {
		max-width: 32em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: #59b4cf34;
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
