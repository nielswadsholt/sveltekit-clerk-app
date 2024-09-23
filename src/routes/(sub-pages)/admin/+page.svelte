<script lang="ts">
    import ClerkLoaded from "clerk-sveltekit/client/ClerkLoaded.svelte";
    import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
    import ActiveSessionResource from "@clerk/clerk-js";

    const checkAuthorization = (clerk: ActiveSessionResource) => {
        console.log(clerk);
        return clerk.session?.checkAuthorization({ role: "org:admin" });
    }
</script>

<h1>Admin Page</h1>
<SignedIn let:user>
    <ClerkLoaded let:clerk>
        {#if !!clerk && checkAuthorization(clerk)}
            <p>Welcome {user?.fullName ?? user?.primaryEmailAddress}!</p>
            <p>Your organization is {clerk.organization?.name} with {clerk.organization?.membersCount} members.</p>
        {/if}    
    </ClerkLoaded>
</SignedIn>
<SignedOut>Only admins are allowed in here.</SignedOut>