<script lang="ts">
	import UserButton from 'clerk-sveltekit/client/UserButton.svelte'
	import SignInButton from 'clerk-sveltekit/client/SignInButton.svelte'
	import SignUpButton from 'clerk-sveltekit/client/SignUpButton.svelte'
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte'
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte'
</script>

<header>
    <SignedIn>
        <UserButton afterSignOutUrl="/" />
    </SignedIn>
    <SignedOut>
        <SignInButton mode="modal" />
        <SignUpButton mode="modal" />
    </SignedOut>
</header>

<main>
    <slot />
</main>