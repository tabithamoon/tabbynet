<script>
    import { page } from '$app/stores';
</script>

<title>whoops</title>

<div class="bg-cerulean flex flex-col h-screen">
    <div class="text-white font-bsod font-light m-auto w-2/5">
        <div class="text-8xl p-2">
            :(
        </div>
        <div class="p-2 text-lg">oopsie whoopsie!! we made a fucky wucky!! we are working vewy hawd to fix this!!</div>
        <div class="flex flex-row h-30">
            <div class="p-2">
                <img src="https://files.tabbynet.com/tabbynet/qr_error.png" alt="error qr code"/>
            </div>
            <div class="p-3 text-sm flex flex-col">
                <p>error info:</p>
                <p>{$page.status} - {$page.error.message}</p>
                <a class="underline underline-offset-2 mt-auto" href="/">go back to safety</a>
            </div>
        </div>
    </div>
</div>