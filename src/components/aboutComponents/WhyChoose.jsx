import React from 'react'

const whyChoose = () => {
    const features = [
      { title: "🚀 Tech-Integrated Learning", desc: "Interactive classrooms." },
      { title: "🌍 Collaborations", desc: "blah blah blah." },
      { title: "🎨 Creative Expression", desc: "Focus on arts, music, and media education." },
      { title: "🔬 Innovative Curriculum", desc: "Taekwondo." },
      { title: "⚡ Student-Centric Approach", desc: "Flexible and personalized learning paths." },
    ];
  
    return (
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default whyChoose
  