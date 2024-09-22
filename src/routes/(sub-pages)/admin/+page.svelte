<script>
    import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
</script>

<h1>Admin Page</h1>
<SignedIn let:user>
    <!-- TODO: Verify admin -->
    {#if !!user}
        <p>Welcome admin {user.fullName ?? user.primaryEmailAddress}!</p>
        <p>User id: {user.id}</p>
    {/if}
</SignedIn>
<SignedOut>Only admins are allowed in here.</SignedOut>