<script>
	let email = '';
	let password = '';

	function handleSubmit() {
		// Vous pouvez ajouter ici la logique de gestion de la connexion
		alert(`Email: ${email}\nPassword: ${password}`);
	}

	import Logo from '../assets/img/apynext.png';
</script>

<main class="min-h-screen flex items-center justify-center">
	<div
		class="bg-white p-8 rounded-lg shadow-md border border-primary hover:shadow-lg transition duration-300 ease-in-out"
	>
		<div class="flex item-center">
			<img src={Logo} class="h-16 mr-4 mb-5" alt="" />
			<h2 class="text-2xl">Déjà de retour ?</h2>
		</div>
		<form on:submit={handleSubmit}>
			<div class="mb-4">
				<label for="email" class="block text-gray-600">Adresse e-mail</label>
				<input
					type="email"
					id="email"
					class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300"
					bind:value={email}
					required
				/>
			</div>
			<div class="mb-6">
				<label for="password" class="block text-gray-600">Mot de passe</label>
				<input
					type="password"
					id="password"
					class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition duration-300"
					bind:value={password}
					required
				/>
			</div>
			<div class="flex items-center justify-between">
				<a href="/" class="text-primary group relative inline-block overflow-hidden"
					>Mot de passe perdu ?
					<span
						class="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-yellow transition-all duration-300 group-hover:w-full xl:inline-flex hidden xl:visible"
					/></a
				>
				<button
					type="submit"
					class="bg-bg text-white py-2 mx-3 px-4 rounded hover:bg-bg-100 transition duration-300"
				>
					Se connecter
				</button>
			</div>
			<div class="flex justify-center mt-5">
				<a class="group relative inline-block overflow-hidden" href="/register"
					>Pas de compte ?
					<span
						class="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary transition-all duration-300 group-hover:w-full xl:inline-flex hidden xl:visible"
					/>
				</a>
			</div>
		</form>
	</div>
</main>
