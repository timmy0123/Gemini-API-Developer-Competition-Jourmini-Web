import { createRouter, createWebHistory } from "vue-router";
import ConversationContent from "./components/ConversationContent.vue";
import ExploreContent from "./components/ExploreContent.vue";
import NotFound from "./components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/plan" },
    { path: "/plan", component: ConversationContent },
    { path: "/explore", component: ExploreContent },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
