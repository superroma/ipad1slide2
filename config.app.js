const appConfig = {
  routes: 'client/routes.js',
  aggregates: [],
  readModels: [],
  viewModels: [
    {
      name: 'slideshow',
      projection: 'common/view-models/slideshow.projection.js'
    }
  ],
  redux: {
    reducers: { 'reducer-name': 'client/reducers/reducer-name.js' },
    middlewares: ['client/middlewares/middleware-name.js']
  }
}

export default appConfig
