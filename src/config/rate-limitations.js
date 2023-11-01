export default {
  'default': {
    name: 'default',
    allowedRequests: 5,
    period: 1
  },
  '/': {
    name: 'homepage',
    allowedRequests: 10,
    period: 1
  },
  '/somewhere': {
    name: 'somewhere',
    allowedRequests: 1,
    period: 10
  }
}
