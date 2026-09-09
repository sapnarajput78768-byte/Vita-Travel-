import React from 'react'
import Coaches_child from './Coaches_child'

const Coaches = () => {

  const coachesData = [
    {
      id: "1",
      title: "Lauren Thompson",
      title_1: "Yoga Couch",
      image: "https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69897f6cc589808c226f0cd7_ea8e8b2e1274331d29db4f187ea3aebb_1.webp",
      discription: `I work with yoga as a practical tool for improving mobility, balance,<br and body awareness. My sessions focus on breath, alignment, and calm strength, without pressure or competition. I support people who want to build a steady practice that fits real life and long-term wellbeing.\nMy approach is grounded, structured, and accessible for different experience levels.`,
      country: "14",
      attended: "18"
    },
    {
      id: "2",
      title: "Elena Rossi",
      title_1: "Wellbeing & Balance Coach",
      image: "https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69897f6c01ae0a19d848cade_2.webp",
      discription: `I believe that health and fitness are built through sustainable lifestyle changes — and that is exactly what I offer my clients.I focus on teaching real, whole-food nutrition, practical meal preparation, effective resistance and cardiovascular training, and, most importantly, consistency.\nI believe that anyone can achieve their health and fitness goals with the right approach and support.`,
      country: "14",
      attended: "12"
    },
    {
      id: "3",
      title: "Matteo Conti",
      title_1: "Transformational Retreat Guide",
      image: "https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69897f6d9e98ad2b3be778bb_3.webp",
      discription: `I guide retreats focused on personal clarity, reflection, and intentional change. My work combines structured sessions, nature-based practices, and group processes. I support participants in slowing down, reassessing priorities, and reconnecting with their inner direction.\nI value clarity, presence, and honest self-observation as tools for long-term change.`,
      country: "22",
      attended: "123"
    },
    {
      id: "4",
      title: "Clara Hoffmann",
      title_1: "Holistic Wellness Coach",
      image: "https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69897f6cafd3294f0e4cae21_db00e622a71ec4d40f731da73d631f15_4.webp",
      discription: `I work with people who want to improve their overall wellbeing by aligning mental, emotional, and physical health. My approach is holistic and supportive, focusing on balance rather than extremes.\nI help clients build routines that support stability, energy, and self-awareness in daily life.`,
      country: "28",
      attended: "45"
    },
    {
      id: "5",
      title: "Julien Lefèvre",
      title_1: "Coach",
      image: "https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69897f6c580fbb67421bc1c7_5.webp",
      discription: `I work with people who want to improve their overall wellbeing by aligning mental, emotional, and physical health. My approach is holistic and supportive, focusing on balance rather than extremes.\nI help clients build routines that support stability, energy, and self-awareness in daily life.`,
      country: "16",
      attended: "21"
    },
    {
      id: "6",
      title: "David Schneider",
      title_1: "Nature Retreat Guide",
      image: "https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69897f6c71bd8132d7c6bad8_6.webp",
      discription: `I design and guide retreats centered around nature, walking practices, and quiet observation.\nMy work uses natural environments as a space for reflection and mental reset. I support participants in reconnecting with simplicity, presence, and physical awareness through structured outdoor experiences.`,
      country: "32",
      attended: "68"
    },
    {
      id: "7",
      title: "Anna Kowalska",
      title_1: "Conscious Movement Instructor",
      image: "https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69897f6cedcfe088ce4dce7b_e51670bc392ea39ffcefd508131351a6_7.webp",
      discription: `I work with conscious movement practices that improve mobility, coordination, and body awareness. My sessions help participants understand how they move and how movement affects emotional state.\nI focus on clarity, control, and ease, supporting sustainable physical health without strain.`,
      country: "15",
      attended: "32"
    },
    {
      id: "8",
      title: "Thomas Weber",
      title_1: "Silent Retreat Guide",
      image: "https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69897f6c6152e02c42a97084_8.webp",
      discription: `I facilitate silent retreats focused on rest, mental clarity, and deep reflection. My work creates a structured and safe environment where participants can step away from constant input and reconnect with their inner processes. Silence is used as a practical tool for awareness and insight.`,
      country: "22",
      attended: "124"
    },
    {
      id: "9",
      title: "Isabelle Martin",
      title_1: "Stress-Relief Guide",
      image: "https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69897f6cb4387b1312d7ae14_9.webp",
      discription: `I work with stress reduction through structured breathing practices, gentle movement, and nervous system regulation. My sessions focus on restoring balance, improving emotional stability, and reducing physical tension. I support people who experience long-term stress and want practical, repeatable tools they can use in everyday life. My approach is calm, grounded, and focused on sustainable recovery rather than quick fixes.`,
      country: "14",
      attended: "18"
    },
    {
      id: "10",
      title: "Sarah Johnson",
      title_1: "Nutrition Specialist",
      image: "https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69897f6c6400b1ebc3956333_43c66f9116f860d81fe61e822e465e88_10.webp",
      discription: `I support retreat participants with nutrition that is simple, nourishing, and adapted to real needs. My work focuses on whole foods, energy balance, and practical eating habits that support focus and recovery. I help people understand how nutrition affects their physical and mental state, without strict rules or unnecessary restrictions, and with respect for individual lifestyles.`,
      country: "17",
      attended: "89"
    },
    {
      id: "11",
      title: "Laura Sánchez",
      title_1: "Yoga Couch",
      image: "https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69897f6c292a68644a3e07b6_11.webp",
      discription: `I teach yoga as a consistent daily practice that supports strength, flexibility, and mental clarity. My sessions are structured, calm, and focused on breath, alignment, and body awareness. I work with people who want to integrate yoga into their routine in a realistic and sustainable way, without pressure or performance-based expectations.`,
      country: "26",
      attended: "224"
    },
    {
      id: "12",
      title: "Michael Wilson",
      title_1: "Meditation Coach",
      image: "https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/69897f6ccb670b10285a47bf_12.webp",
      discription: `I work with meditation as a practical tool for emotional stability, focus, and self-discipline. My approach is structured and accessible, helping people build a consistent practice that fits into real life.\nI support participants in developing awareness and resilience through techniques that can be applied both during retreats and in everyday situations.`,
      country: "19",
      attended: "18"
    }

  ]
  const valuesData = [
  {
    id: "01",
    title: "Honesty",
    description:
      "Having the courage to be transparent in our feelings and what we do",
    image:"./public/Honesty.svg",
  },
  {
    id: "02",
    title: "Self-responsibility",
    description:
      "Taking responsibility for our situation in life and not engaging in the blame game",
     image:"./public/Self-responsibility.svg",
  },
  {
    id: "03",
    title: "Kindness",
    description:
      "Show compassion, empathy, and patience to enhance comfort and joy in life.",
    image:"./public/Kindness.svg",
  },
  {
    id: "04",
    title: "Dedication",
    description:
      "Taking on the challenge of the journey and focus upon the vision we want to manifest",
    image:"./public/Dedication.svg",
  },
  {
    id: "05",
    title: "Service",
    description:
      "Placing our gifts and talents at the services of increasing the loving consciousness of the world",
    image:"./public/Service.svg",
  },
  {
    id: "06",
    title: "Beauty",
    description:
      "Expressing openly the core essence that inhabits each one of us",
    image:"./public/Beauty.svg",
  },
  {
    id: "07",
    title: "Human Wellbeing",
    description:
      "In the end, we are all in the business of human wellbeing",
    image:"./public/Human Wellbeing.svg",
  },
  {
    id: "08",
    title: "Travel & track progress",
    description:
      "Use VITA Journal to reflect and rebook.",
    image:"./public/Travel & track progress.svg",
  },
];

  return (

    <>
      <section>
        <div className="container">
          <div className="bg-[#061c20] text-white min-h-screen">
            <div className="pt-25 pb-10 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-5">
                Our Coaches
              </h1>
              <p className="max-w-3xl mx-auto   px-5 text-gray-300 leading-7">
                Our fully remote lives, travels, and works all over the world.<br />
                From India to Indonesia, the Philippines to Portugal, Ukraine to<br />
                the US; and everywhere else in between.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {coachesData.map((item) => (
                <Coaches_child key={item.id} coachesData={item} />
              ))}


            </div>


<section className="bg-[#061c20] text-white px-6 md:px-10 lg:px-0 py-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
    <div>
      <h2 className="text-4xl   font-semibold">
        Our values
      </h2>
    </div>
    <div className="max-w-xl">
      <p className="text-gray-400  ">
        As a company we've been inspired to be a link in the chain of
        happiness in the world. In order to manifest that inspiration,
        we strive to embody these
      </p>
    </div>
  </div>

  <div className="grid grid-cols-4">
    {valuesData.map((value) => (

      <div
        key={value.id}
        className=" p-8 transition-all duration-500 hover:bg-[#0b272b] group">

        <div className="flex items-start justify-between mb-20">
          <div className="text-5xl text-white transition-transform duration-500 group-hover:scale-110">
            <img src={value.image} alt={value.title} className="w-full h-full object-contain" />
          </div>
          <span className="text-gray-500 text-sm font-semibold">
            {value.id}
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-5">
          {value.title}
        </h3>
        <p className="text-gray-400 text-base leading-6">
          {value.description}
        </p>

      </div>

    ))}

  </div>

</section>
<div>
  <img className="opacity-100 w-full h-auto" src="https://cdn.prod.website-files.com/696eeb61714a6c90a5f18c9e/697b6310adee6f369b84c520_illustration.webp" alt="image" />
</div>
<footer className="border-t border-gray-700">
          <div className="grid grid-cols-3 min-h-[258px]">
            <div className="p-9">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <button  onClick={() => window.location.href = "http://localhost:5173"}><span className="text-xl">✱  </span>Vita Travels</button>
              </h2>

            </div>
            <div className="p-9">
              <div className="text-4xl font-bold leading-[1.25]">
                <button className='hover:text-amber-300'  onClick={() => window.location.href = "http://localhost:5173/coaches"}><span className="text-gray-500"> + </span> Coaches </button>
                <button className='hover:text-amber-300'  onClick={() => window.location.href = "http://localhost:5173/contact"}><span className="text-gray-500"> +</span> Contacts </button>
              </div>
            </div>

            <div className="p-9">
              <p className="text-lg font-semibold">+1 012 345 678</p>      
              <p className="text-lg font-semibold mt-3"> vita-travels@gmail.com</p>
            </div>
          </div>

          <div className="border-t border-gray-700">
            <div className="grid grid-cols-4 min-h-[78px]">
              <div className="p-7 border-r border-gray-700">
                <p className="text-sm font-semibold text-gray-400">
                  ©All Rights Reserved. Vita Travel, 2026</p>
              </div>

              <div className="p-7">

                <p className="text-sm font-semibold text-gray-400">  Made by ✱ Phenomenon Studio</p>
                
              </div>

              <div className="p-7 flex justify-end">
                <p className="text-sm font-semibold text-gray-400"> Terms and Conditions</p>
              </div>

              <div className="p-7">
                <p className="text-sm font-semibold text-gray-400"></p>
              </div>

            </div>

          </div>

        </footer>

          </div>

        </div>

      </section>

    </>

  )
}

export default Coaches