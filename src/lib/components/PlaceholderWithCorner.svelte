<div>
	<slot />
</div>

<style>
    div {
        position: relative;
    }

    div:before, div:after {
        @apply border-fpn-orange;
        position: absolute;
        width: 40px;
        height: 40px;
        border-style: solid; /* or whatever style */
        content: ' ';
    }

    div:after {
        bottom: 0;
        left: 0;
        border-width: 0 0 12px 12px
    }

    div:before {
        top: 0;
        right: 0;
        border-width: 12px 12px 0 0
    }

    div > :global(:first-child) {
        padding: 25px;
    }
</style>