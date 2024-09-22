<script>
    import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
</script>

<SignedIn let:user>
    {#if !!user}
        <h1>Welcome {user.fullName ?? user.primaryEmailAddress}!</h1>
    {/if}
</SignedIn>
