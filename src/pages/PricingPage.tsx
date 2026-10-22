import Layout from '../components/Layout';

const Stories = [
  {
    title: 'A note from the version of me who was still figuring it out.',
    quote:
      'I wrote to myself before I left for university. Reading it again reminded me how much I’ve changed and how far I’ve carried my own courage.',
  },
  {
    title: 'A letter written during a quiet season.',
    quote:
      'I wanted a way to keep my future self company. Dear Tomorrow gave me a place to leave gentle encouragement behind.',
  },
  {
    title: 'The memory I almost forgot.',
    quote:
      'When it arrived, it felt like opening a window into my own life. I saw myself more clearly than I had in years.',
  },
];

const StoriesPage = () => (
  <Layout>
    <div className="content-page">
      <div className="content-header">
        <p className="eyebrow">Stories</p>
        <h1>Letters that came back with perspective.</h1>
      </div>

      <div className="story-grid">
        {Stories.map((story) => (
          <article key={story.title} className="story-card">
            <h2>{story.title}</h2>
            <p>“{story.quote}”</p>
          </article>
        ))}
      </div>
    </div>
  </Layout>
);

export default StoriesPage;
