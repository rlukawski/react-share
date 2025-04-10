import assert from './utils/assert';
import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './hocs/createShareButton';

function wykopLink(url: string, { title, desc }: { title?: string; desc?: string }) {
  assert(url, 'reddit.url');

  return (
    'https://www.wykop.pl/dodaj/link/' +
    objectToGetParams({
      url,
      title,
      desc,
    })
  );
}

const WykopShareButton = createShareButton<{ title?: string; desc?: string }>(
  'wykop',
  wykopLink,
  props => ({
    title: props.title,
    desc: props.desc,
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
    windowPosition: 'windowCenter',
  },
);

export default WykopShareButton;
