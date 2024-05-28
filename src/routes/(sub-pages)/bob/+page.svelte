<script>
    import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
    import { PUBLIC_BOB_EMAIL } from '$env/static/public';
</script>

<SignedIn let:user>
    {#if user?.emailAddresses.some(x => x.emailAddress == PUBLIC_BOB_EMAIL)}
        <h1>Bob's Page</h1>
        <p>This is Bob's personal space. Only he should be able to access it.</p>
    {:else}
        <p>Nothing to see here ...</p>
    {/if}
</SignedIn>
