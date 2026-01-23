import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Blog = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const categoryColors = {
    'Architecture': { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/20' },
    'Machine Learning': { bg: 'bg-purple/10', text: 'text-purple', border: 'border-purple/20' },
    'Frontend': { bg: 'bg-warm/10', text: 'text-warm', border: 'border-warm/20' },
  };

  return (
    <section id="blog" className="section-wrapper bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-accent font-mono text-sm">03.1</span>
            <span className="w-12 h-[1px] bg-accent/50" />
            <span className="text-text-tertiary uppercase tracking-widest text-sm">Insights</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl">
            Thoughts, learnings, and insights from my journey in data science and engineering.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {portfolioData.blog.map((post, index) => {
            const colors = categoryColors[post.category] || categoryColors['Architecture'];
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="glass-card glass-card-hover h-full flex flex-col overflow-hidden">
                  {/* Gradient header */}
                  <div className={`h-2 ${
                    index === 0 
                      ? 'bg-gradient-to-r from-accent to-accent-light' 
                      : index === 1 
                        ? 'bg-gradient-to-r from-purple to-purple-light'
                        : 'bg-gradient-to-r from-warm to-warm-light'
                  }`} />

                  <div className="p-6 flex flex-col flex-grow">
                    {/* Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <time className="text-text-muted text-sm font-mono">
                        {formatDate(post.date)}
                      </time>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} border ${colors.border}`}>
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
                      <a href={`#${post.slug}`} className="block">
                        {post.title}
                      </a>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-text-secondary text-sm leading-relaxed flex-grow mb-6">
                      {post.excerpt}
                    </p>

                    {/* Read more */}
                    <a
                      href={`#${post.slug}`}
                      className="inline-flex items-center gap-2 text-accent text-sm font-medium group/link"
                    >
                      Read article
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
