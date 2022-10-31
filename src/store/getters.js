const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  userinfo: state => state.user.userinfo,
  authRoutes: state => state.permission.authRoutes,
  update: state => state.app.update,
	/*productList: state => state.product.productList,
	applicationList: state => state.application.applicationList,
	resourcesList: state => state.resources.resourcesList,
	supportList: state => state.support.supportList,
	webList: state => state.web.webList,*/
};
export default getters;
