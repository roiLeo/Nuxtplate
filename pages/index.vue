<template>
  <div>
    <div class="my-24">
      <h1
        class="max-w-sm text-5xl lg:text-6xl font-bold lg:tracking-tight mb-5">
        Kickstart your Nuxt&nbsp;app
      </h1>
      <p class="max-w-sm text-xl text-gray-400">
        Use this project Starter Kit to build your collaborative app in minutes.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <UButton
          label="Get started"
          variant="solid"
          color="primary"
          to="https://app.netlify.com/start/deploy?repository=https://github.com/roiLeo/Nuxtplate"
          taget="_blank" />
        <UButton
          label="Learn more"
          color="gray"
          to="https://github.com/roiLeo/Nuxtplate"
          taget="_blank" />
      </div>
    </div>
    <div class="my-24">
      <h2 class="mb-4 font-semibold text-2xl">Features</h2>
      <div class="mt-4 sm:mt-8">
        <div
          class="grid gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
          <SimpleCardLink
            to="/"
            label="Nuxt"
            subtitle="Best practices followed, using a mixture of SSR and custom API endpoints." />
          <SimpleCardLink
            to="/"
            label="User Interface"
            subtitle="Adjust our reusable interface & design system to fit your needs." />
          <SimpleCardLink
            to="/"
            label="Typescript"
            subtitle="All custom client and server functions are fully typed, and easy to update." />
          <SimpleCardLink
            to="/"
            label="SWR"
            subtitle="See data update live using the SWR (state-while-revalidate) library." />
        </div>
      </div>
    </div>
  </div>
</template>
