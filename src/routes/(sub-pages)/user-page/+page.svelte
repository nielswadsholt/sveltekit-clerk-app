<script>
    import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
</script>

<h1>User Page</h1>
<SignedIn let:user>
    {#if !!user}
        <p>Welcome {user.fullName ?? user.primaryEmailAddress}!</p>
        <p>User id: {user.id}</p>
        <p>Memberships: {user?.organizationMemberships.map(x => x.organization.name).toString()}</p>
    {/if}
</SignedIn>
<SignedOut>You must be signed in to view this page.</SignedOut>
