<script lang="ts">
    import ClerkLoaded from "clerk-sveltekit/client/ClerkLoaded.svelte";
    import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte';
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte';
    import ActiveSessionResource from "@clerk/clerk-js";

    const checkAuthorization = (clerk: ActiveSessionResource) => {
        console.log(clerk);
        return clerk.session?.checkAuthorization({ role: "org:admin" });
    }

    const loadUsers = async (clerk: ActiveSessionResource) => {
        const users = await clerk.organization?.getMemberships();
        console.log(users);

        return users?.map(x => `${x.publicUserData.lastName
                ? `${x.publicUserData.firstName} ${x.publicUserData.lastName}`
                : x.publicUserData.identifier}
            ${x.role == "org:admin" ? "(admin)" : ""}`           
        )
    }
</script>

<h1>Admin Page</h1>
<SignedIn let:user>
    <ClerkLoaded let:clerk>
        {#if !!clerk && checkAuthorization(clerk)}
            <p>Welcome {user?.fullName ?? user?.primaryEmailAddress}!</p>
            <p>Your organization is {clerk.organization?.name} with {clerk.organization?.membersCount} members:</p>
            {#await loadUsers(clerk) then users}
                {#if !!users}
                    {#each users as user}
                        <p style="margin-left: 2em;">{user}</p>
                    {/each}
                {/if}
            {/await}
        {:else}
            <p>Only admins are allowed in here.</p>
        {/if}    
    </ClerkLoaded>
</SignedIn>
<SignedOut>You must be signed in to view this page.</SignedOut>