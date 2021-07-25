<template>
  <div class="l-page-wrapper">
    <div class="u-section-padding u-fg-1">
      <div class="l-wrap l-wrap--narrow">
        <h1>Page Not Found</h1>
        <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
        <p><a href="/"><i class="fas fa-angle-left"></i> Back to home page</a></p>
      </div><!-- /.l-wrap -->
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Footer from '@/components/Footer';

  export default {
    name: 'NotFound',
    components: {
      'app-footer': Footer
    }
  }
</script>