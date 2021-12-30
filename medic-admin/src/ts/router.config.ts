import { UIRouter, Category } from '@uirouter/core';
import { Visualizer } from '@uirouter/visualizer';

export function routerConfigFn(router: UIRouter) {
  const transitionService = router.transitionService;
  
  router.trace.enable(Category.TRANSITION);
  router.plugin(Visualizer);
}