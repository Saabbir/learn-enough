<template>
  <div class="c-home">
    <div class="u-section-padding u-bg-gray u-flex-grow-1">
      <div class="l-wrap">
        <div class="l-row l-row--equal-height">
          <div
            v-for="(subject, index) in subjects"
            :key="index"
            class="l-col l-col--sm-6 l-col--md-4"
          >
            <div class="c-card">
              <router-link
                :to="subject.link"
                class="c-card__link"
              ></router-link>
              <div class="c-card__icon">
                <i :class="subject.icon"></i>
              </div>
              <h6 class="c-card__title">{{ subject.title }}</h6>
              <p class="c-card__text">{{ subject.description }}</p>
            </div>
            <!-- /.c-card -->
          </div>
          <!-- /.l-col -->
        </div>
        <!-- /.l-row -->
      </div>
      <!-- /.l-wrap -->
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
const subjects = [
  {
    title: "Learn enough command line",
    description:
      "Learn enough command-line to work with unix environments and windows command prompt.",
    icon: "fas fa-terminal",
    link: { name: "CommandLine" },
  },
  {
    title: "Learn enough text editor",
    description:
      "Learn the basics functionality and Keyboard shortcuts of all the modern text-editor has.",
    icon: "fas fa-edit",
    link: { name: "TextEditor" },
  },
  {
    title: "Learn enough Git",
    description:
      "Learn enough Git to collborate in projects and work with fellow team members. Learn most used git commands in day-to-day basis.",
    icon: "fab fa-git-square",
    link: { name: "Git" },
  },
  {
    title: "Learn enough CSS",
    description:
      "Learn enough CSS to create amazing layouts, animations and designs of your site.",
    icon: "fab fa-css3-alt",
    link: { name: "Css" },
  },
  {
    title: "Learn enough JavaScript",
    description:
      "Learn enough JavaScript to know how to solve problems using documentation. Understand the fundamental concepts.",
    icon: "fab fa-js-square",
    link: { name: "JavaScript" },
  },
  {
    title: "Learn enough PHP",
    description:
      "Learn enough PHP to build simple yet beautiful working websites. Learn the similarities between JavaScript and PHP.",
    icon: "fab fa-php",
    link: { name: "Php" },
  },
  {
    title: "Learn enough WordPress",
    description:
      "Learn enough WordPress to create any type of website as quickly as possible.",
    icon: "fab fa-wordpress",
    link: { name: "WordPress" },
  },
  {
    title: "Learn enough Vue JS",
    description:
      "Learn enough Vue to create single page applications as well as multi-page application.",
    icon: "fab fa-vuejs",
    link: { name: "Vue" },
  },
  {
    title: "Learn enough HTML Email",
    description:
      "Learn enough HTML email to build amazing custom HTML email templates which display properly across various email clients.",
    icon: "fas fa-envelope-open-text",
    link: { name: "HtmlEmail" },
  },
  {
    title: "Learn enough regular expressionss",
    description:
      "Learn enough regular expressionss to match any patterns in a large block of text string.",
    icon: "fas fa-search",
    link: { name: "Regex" },
  },
  {
    title: "More on Web Development",
    description: "Learn more about web development.",
    icon: "fas fa-code",
    link: { name: "WebDevelopment" },
  },
];

import Footer from "@/components/Footer";

export default {
  name: "Home",
  data() {
    return {
      subjects,
    };
  },
  components: {
    "app-footer": Footer,
  },
};
</script>