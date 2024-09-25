<script lang="ts">
	import UserButton from 'clerk-sveltekit/client/UserButton.svelte'
	import SignInButton from 'clerk-sveltekit/client/SignInButton.svelte'
	import SignUpButton from 'clerk-sveltekit/client/SignUpButton.svelte'
	import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte'
	import SignedOut from 'clerk-sveltekit/client/SignedOut.svelte'
	import OrganizationSwitcher from 'clerk-sveltekit/client/OrganizationSwitcher.svelte';
</script>

<header>
    <SignedIn>
        <div style="display: flex; flex-direction: row; justify-content: space-between;">
            <OrganizationSwitcher appearance={{
                elements: {
                    organizationSwitcherPopoverFooter: {
                        display: "none"
                    }
                }
            }} />
            <UserButton afterSignOutUrl="/" showName appearance={{
                layout: {
                    shimmer: true
                },
                variables: {
                    colorPrimary: '#114B5F',
                    colorInputBackground: '#C6DABF',
                    colorBackground: '#F3E9D2'
                },
                elements: {
                    userButtonPopoverFooter: {
                        display: "none"
                    }
                }
            }}/>
        </div>
    </SignedIn>
    <SignedOut>
        <SignInButton mode="modal" style="background-color: #424B54; border-radius: 8px; color: white; padding: 5px 10px;" />
        <SignUpButton mode="modal" style="background-color: #424B54; border-radius: 8px; color: white; padding: 5px 10px;" />
    </SignedOut>
</header>

<main>
    <slot />
</main>