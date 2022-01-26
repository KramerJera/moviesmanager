import routes from './appRoutes';
import store from '@/store';

routes.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = store.getters.hasSession;

  if (requiresAuth && !isAuthenticated) {
    next('/entrar');
  } else if (!requiresAuth && isAuthenticated) {
    next();
  } else {
    next();
  }
});

export default routes;