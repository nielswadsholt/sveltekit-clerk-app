<script>
    import SignedIn from 'clerk-sveltekit/client/SignedIn.svelte'
</script>

<SignedIn let:user>
    <slot />
</SignedIn>

<footer>
    <div>Go to <a href="/">Main Page</a></div>
</footer>