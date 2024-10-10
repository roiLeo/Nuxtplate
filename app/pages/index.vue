<template>
  <div>
    <div class="my-24 grid max-w-7xl gap-16 sm:grid-cols-2 sm:gap-y-24 lg:items-center">
      <div>
        <h1 class="mb-5 max-w-sm text-5xl font-bold lg:text-6xl lg:tracking-tight">Kickstart your Nuxt&nbsp;app</h1>
        <p class="max-w-sm text-xl text-gray-400">Use this project Starter Kit to build your collaborative app in minutes.</p>
        <div class="mt-6 flex flex-col gap-3 sm:flex-row">
          <UButton label="Get started" variant="solid" color="primary" to="https://app.netlify.com/start/deploy?repository=https://github.com/roiLeo/Nuxtplate" taget="_blank" />
          <UButton label="Learn more" color="gray" to="https://github.com/roiLeo/Nuxtplate" taget="_blank" />
        </div>
      </div>

      <div>
        <!-- <img class="ml-auto aspect-video w-auto rounded-lg duration-300 ease-in-out sm:max-h-[300px] sm:hover:scale-125" src="https://images.unsplash.com/photo-1685173864989-37060e18b3d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lyon" /> -->
        <AnimatedFish />
      </div>
    </div>
    <div class="my-24">
      <h2 class="mb-4 text-2xl font-semibold">Features</h2>
      <div class="mt-4 sm:mt-8">
        <div class="grid gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
          <SimpleCardLink to="/" label="Nuxt" subtitle="Best practices followed, using a mixture of SSR and custom API endpoints." />
          <SimpleCardLink to="/" label="User Interface" subtitle="Adjust our reusable interface & design system to fit your needs." />
          <SimpleCardLink to="/" label="Typescript" subtitle="All custom client and server functions are fully typed, and easy to update." />
          <SimpleCardLink to="/" label="SWR" subtitle="See data update live using the SWR (state-while-revalidate) library." />
        </div>
      </div>
    </div>
  </div>
</template>
