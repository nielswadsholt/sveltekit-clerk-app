<script>
    import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
    import { PUBLIC_ALICE_EMAIL } from '$env/static/public';
</script>

<SignedIn let:user>
    {#if user?.emailAddresses.some(x => x.emailAddress == PUBLIC_ALICE_EMAIL)}
        <h1>Alice's Page</h1>
        <p>This is Alice's personal space. Only she should be able to access it.</p> 
    {:else}
        <p>Nothing to see here ...</p>
    {/if}
</SignedIn>
