/* eslint-disable no-case-declarations */
const CHARGEBEE_REGEX = /^chargebee:\/?\/?(.+)/;

export default ({ _type: type, blank, page, href }) => {
  const linkProps = {
    target: blank ? '_blank' : null,
  };

  if (!type) {
    return null;
  }

  switch (type) {
    case 'internalLink':
      const { current } = page.slug;
      linkProps.href = `/${current.replace(/^\//, '')}`;
      linkProps.title = page.seo.seo_title;
      break;
    case 'externalLink':
    default:
      if (!CHARGEBEE_REGEX.test(href)) {
        linkProps.href = href;
        break;
      }
      const [, plan] = href.match(CHARGEBEE_REGEX);
      linkProps.href = '#';
      linkProps['data-cb-type'] = 'checkout';
      linkProps['data-cb-plan-id'] = plan;
      linkProps['data-cb-plan-quantity'] = 1;
  }

  return linkProps;
};
