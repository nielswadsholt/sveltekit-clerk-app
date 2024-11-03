<script lang="ts">
    import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
    import { getMessage } from '@src/routes/api/client'

    let message_fetched : Promise<string>;
</script>

<h1>User Page</h1>
<SignedIn let:user>
    {#if !!user}
        <p>Welcome {user.fullName ?? user.primaryEmailAddress}!</p>
        <p>User id: {user.id}</p>
        <p>Memberships: {user?.organizationMemberships.map(x => x.organization.name).toString()}</p>
        <button on:click={() => { message_fetched = getMessage(user.id)}}>Load message from db</button>
        {#await message_fetched}
            <p>Loading message ...</p>
        {:then message}
            {#if !!message}
                <p>{message}</p>                 
            {/if}         
        {/await}
    {/if}
</SignedIn>
<SignedOut>You must be signed in to view this page.</SignedOut>
