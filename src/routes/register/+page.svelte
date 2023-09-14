<script>
	let name = '';
	let email = '';
	let password = '';
	let date = '';
	let is_male = '';

	function handleSubmit() {
		// Vous pouvez ajouter ici la logique de gestion de l'enregistrement
		alert(`Nom: ${name}\nEmail: ${email}\nMot de passe: ${password}`);
	}

	import Logo from '../../assets/img/apynext.png';
</script>

<title>Se créer un compte</title>

<div class="bg-[url('/src/assets/img/banner-register.png')] bg-cover h-screen">
	<main class="min-h-screen flex items-center justify-center">
		<div
			class="bg-white p-8 rounded-lg shadow-md border border-primary hover:shadow-lg transition duration-300 ease-in-out"
		>
			<div class="flex item-center">
				<img src={Logo} class="h-16 mr-4 mb-5" alt="" />
				<h2 class="text-2xl">Vous êtes nouveau ?</h2>
			</div>
			<form on:submit={handleSubmit} class="">
				<div class="mb-4">
					<label for="name" class="block text-gray">Username</label>
					<input
						type="text"
						id="name"
						class="w-full p-2 border border-gray-100 rounded focus:outline-none focus:border-blue-500 transition duration-300"
						bind:value={name}
						required
					/>
				</div>
				<div class="mb-4">
					<label for="email" class="block text-gray">Adresse e-mail</label>
					<input
						type="email"
						id="email"
						class="w-full p-2 border border-gray-100 rounded focus:outline-none focus:border-blue-500 transition duration-300"
						bind:value={email}
						required
					/>
				</div>
				<div class="mb-6">
					<label for="password" class="block text-gray">Mot de passe</label>
					<input
						type="password"
						id="password"
						class="w-full p-2 border border-gray-100 rounded focus:outline-none focus:border-blue-500 transition duration-300"
						bind:value={password}
						required
					/>
				</div>
				<div class="mb-6">
					<label for="password" class="block text-gray">Date de naissance</label>
					<input
						type="date"
						id="password"
						class="w-full p-2 border border-gray-100 rounded focus:outline-none focus:border-blue-500 transition duration-300"
						bind:value={date}
						required
					/>
				</div>
				<div class="flex items-center justify-between">
					<a href="/" class="group relative inline-block overflow-hidden"
						>Déjà inscrit ?
						<span
							class="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary transition-all duration-300 group-hover:w-full xl:inline-flex hidden xl:visible"
						/></a
					>
					<button
						type="submit"
						class="bg-bg text-white py-2 mx-3 px-4 rounded hover:bg-bg-100 transition duration-300"
					>
						S'inscrire
					</button>
				</div>
			</form>
		</div>
	</main>
</div>
