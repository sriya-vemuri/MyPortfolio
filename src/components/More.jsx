import { motion } from 'framer-motion';

const More = () => {
  const interests = [
    { icon: '📚', label: 'Business Strategy', desc: 'Applying data to drive business decisions' },
    { icon: '🎯', label: 'Product Analytics', desc: 'Understanding user behavior patterns' },
    { icon: '🧠', label: 'Machine Learning', desc: 'Building predictive models at scale' },
    { icon: '🌱', label: 'Continuous Learning', desc: 'Always exploring new technologies' },
  ];

  return (
    <section id="more" className="section-wrapper bg-background-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Beyond the <span className="gradient-text">Code</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            What drives my passion for data and technology
          </p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card glass-card-hover p-6 text-center group"
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.3 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="font-display text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                {item.label}
              </h3>
              <p className="text-text-secondary text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 md:p-12 relative">
            <div className="absolute top-4 left-8 text-6xl text-accent/20 font-display">"</div>
            <blockquote className="text-xl md:text-2xl text-text-secondary font-display italic leading-relaxed relative z-10">
              Data is the new oil, but like oil, it's valuable only when refined.
            </blockquote>
            <div className="mt-6 text-text-muted text-sm">
              — My approach to turning raw data into actionable insights
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default More;
