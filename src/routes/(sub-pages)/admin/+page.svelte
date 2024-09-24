<script lang="ts">
    import ClerkLoaded from "clerk-sveltekit/client/ClerkLoaded.svelte";
    import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
	import OrganizationProfile from 'clerk-sveltekit/client/OrganizationProfile.svelte';
    import ActiveSessionResource from "@clerk/clerk-js";

    const checkAuthorization = (clerk: ActiveSessionResource) => {
        console.log(clerk);
        return clerk.session?.checkAuthorization({ role: "org:admin" });
    }
</script>

<h1>Admin Page</h1>
<SignedIn>
    <ClerkLoaded let:clerk>
        {#if !!clerk && checkAuthorization(clerk)}
            <OrganizationProfile />
        {:else}
            <p>Only admins are allowed in here.</p>
        {/if}    
    </ClerkLoaded>
</SignedIn>
<SignedOut>You must be signed in to view this page.</SignedOut>