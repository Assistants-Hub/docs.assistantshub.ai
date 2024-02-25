import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: React.ComponentType<React.ComponentProps<'img'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Rapid Development',
    image: require('@site/static/img/developer.jpg').default,
    description: (
      <>
          Jumpstart your AI assistant project with our easy-to-follow setup and comprehensive documentation.
      </>
    ),
  },
  {
    title: 'Seamless Integration',
    image: require('@site/static/img/integration.jpg').default,
    description: (
      <>
          Connect your assistant with a wide array of APIs and services to enhance its functionality and intelligence.
      </>
    ),
  },
  {
    title: 'Community-Powered',
    image: require('@site/static/img/community.jpg').default,
    description: (
      <>
          Tap into the collective knowledge of a vibrant community dedicated to pushing the boundaries of AI assistants.
      </>
    ),
  }
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
