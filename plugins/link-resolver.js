/**
 * To learn more about Link Resolving check out the Prismic documentation
 */

export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'layout') {
    return '/'
  }

  if (doc.type === 'product') {
    return '/product/' + doc.uid
  }

  return '/not-found'
}
