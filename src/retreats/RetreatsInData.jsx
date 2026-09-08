// const retreatsData = [
//   {
//     id: 1,
//     title: "7 Day Mystic Mountain Retreat in Romania",
//     about:`In the wonderful Maremma, enjoy a revitalizing relaxing journey together with Paula and Erico. In a quiet environment in the middle of the countryside, this is a customized private or small group yoga retreat with optional guided outdoor or cultural activities.\n

// Paula will prepare a specific yoga and food program tailored to your needs. She is an expert guide who accompanies you from your starting point to achieving your goals.\n
// Maremma is rich in culture and different natural environments. Ideal for those seeking tranquility, nature, culture, and good healthy food.\n
// This retreat is suitable for all levels and ages and you can choose your own arrival date.`,
//     packagel:`6 nights accommodatio\n
// 7 daily delicious and nutritious meals\n
// Water, tea, coffee served throughout the day\n
// Daily meditation classes\n
// Daily guided outdoor activities\n
// Specialized workshops`,
// packager:`Three integration sessions during the retreat\n
// Optional sessions with ancestral tools\n
// Post retreat online integration\n
// Pre and post retreat support from our team\n
// Wifi connection`,
// RetreatSpecial:`Eqylife Center specializes in organizing silent retreats, providing a serene and peaceful environment for individuals seeking inner reflection, relaxation, and personal growth.

// The center offers a tranquil space away from the noise and distractions of everyday life, allowing students to disconnect, find stillness, and explore their inner selves.`,
// fullprogram:`↪
// Check-in:
// 6:00 PM
// ↪
// Check-out:
// 4:00 PM
// You can come any time of the year. From May to mid-October you can enjoy the sun the sea and the natural environment between meditation walks and excursions.`,
// Schedule:`05:00
// Morning wake-up bell,
// Meditate in the hall

// 07:00
// Breakfast break

// 10:00
// Meditate in the hall
// according to the teacher's instructions

// 13:30
// Rest and interviews with the teacher

// 16:00
// Meditate in the hall according to the
// teacher's instructions

// 20:00
// Retire to your own room - Lights out`,
// food:`At the Eqylife Center, we take immense pride in our vegetarian kitchen, a place where food becomes a culinary art, and healthy eating lies at the heart of all we do. Here, food is not only about satiating hunger but also nourishing the body and mind.`,
// Meals:`✓
// Breakfast
// ✓
// Lunch
// ✓
// Dinner
// ✓
// Snacks`,  
// Diets:`✓
// Egg-free
// ✓
// Gluten Free
// ✓
// Vegan
// ✓
// Vegetarian`,
// team: `Julien Lefèvre
// Meditation Coach

// I teach meditation as a practical skill for focus, emotional regulation, and mental clarity. My sessions are simple and structured, suitable for both beginners and experienced practitioners.

// I focus on techniques that can be integrated into daily routines and professional life without isolating meditation from reality.`,
//  meet:`◉
// Eqylife Str. Nistoresti nr. 143, Măgura 137038, Romania

// Located in Magura, Dambovita county, the Eqylife Center benefits from its unique surroundings and proximity to Targoviste, offering a special blend of natural beauty, historical charm, and convenient amenities.

// Here's a description of what makes the location and neighborhood special, along with some highlights of what visitors can find nearby:`,
// notIncludedl:`×
// Airport transfers
// ×
// Flights costs
// ×
// Travel insurance `,
// notIncludedr:`×
// Visa fee
// ×
// Additional treatments
// ×
// Additional activities not included`,
// like:`You may also like
// Discover unique locations, engaging activities, and expert-
// led workshops designed to inspire and refresh your spirit.`,
// price: "$1,000",
//     date: "Feb 15 - 21, 2026",
//     image1: "/romania.jpg"

//   },
//   {
//     id: 2,
//     title: "Yoga & Outdoor Retreat in Tuscany, Italy",
//     price: "$1,328",
//     date: "Jan 15 - 21, 2026",
//     image: "/tuscany.jpg"
//   }
// ];
// export default retreatsData;
 const RetreatsInData = [
  {
    id: 1,
    title: "7 Day Mystic Mountain Retreat in Romania",
    price: "$1,000",
    location: "Gura Humorului, Romania",
    date: "Feb 15 - 21, 2026",
    duration: "7 days, 6 nights",
    guests: "12 guests",
   
    

    images: [
      "/retreats1.webp",
      "/retreats1.1.webp",
      "/retreats1.2.webp",
      "/retreats1.3.webp",
    ],

    about: (
      <>
        Vipassana meditation, also known as insight meditation, is an ancient
        technique that focuses on developing deep self-awareness and
        understanding of the true nature of reality.
        <br />
        <br />
        It involves observing sensations, thoughts, and emotions in a
        non-reactive way, fostering clarity and mindfulness. By practicing
        Vipassana, individuals aim to see things as they truly are, gaining
        insight into impermanence, suffering, and the nature of the mind.
        This practice ultimately helps individuals develop inner peace,
        awareness, and freedom from mental conditioning.
      </>
    ),

    included: [
      "6 nights accommodation",
      "7 daily delicious and nutritious meals",
      "Water, tea, coffee served throughout the day",
      "Daily meditation classes",
      "Specialized workshops"],
    includedr:[  
      "Three integration sessions during the retreat",
      "Optional sessions with ancestral tools",
      "Post retreat online integration",
      "Pre and post retreat support from our team",
      "Wifi connection",
    ],

    special: (
      <>
        Eqylife Center specializes in organizing silent retreats, providing a
        serene and peaceful environment for individuals seeking inner
        reflection, relaxation, and personal growth.
        <br />
        <br />
        The center offers a tranquil space away from the noise and
        distractions of everyday life, allowing students to disconnect, find
        stillness, and explore their inner selves.
      </>
    ),

    programText: (
      <>
        You can come any time of the year. From May to mid-October you can
        enjoy the sun the sea and the natural environment between meditation
        walks and excursions.
      </>
    ),

    schedule: [
      {
        time: "05:00",
        text: (
          <>
            Morning wake-up bell,
            <br />
            Meditate in the hall
          </>
        ),
      },
      {
        time: "07:00",
        text: "Breakfast break",
      },
      {
        time: "10:00",
        text: (
          <>
            Meditate in the hall
            <br />
            according to the teacher's instructions
          </>
        ),
      },
      {
        time: "13:30",
        text: "Rest and interviews with the teacher",
      },
      {
        time: "16:00",
        text: (
          <>
            Meditate in the hall according to the
            <br />
            teacher's instructions
          </>
        ),
      },
      {
        time: "20:00",
        text: (
          <>
            Retire to your own room - Lights out
          </>
        ),
      },
    ],

    meals: [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snacks",
    ],

    diets: [
      "Egg-free",
      "Gluten Free",
      "Vegan",
      "Vegetarian",
    ],

    foodDescription: (
      <>
        At the Eqylife Center, we take immense pride in our vegetarian
        kitchen, a place where food becomes a culinary art, and healthy
        eating lies at the heart of all we do. Here, food is not only about
        satiating hunger but also nourishing the body and mind.
      </>
    ),

    foodImages: [
      "/food1.webp",
      "/food2.webp",
      "/food3.webp",
      "/food4.webp",
    ],

    team: {
      name: "Julien Lefèvre",
      role: "Meditation Coach",
      image: "/team.webp",
      description1:
        "I teach meditation as a practical skill for focus, emotional regulation, and mental clarity. My sessions are simple and structured, suitable for both beginners and experienced practitioners.",
      description2:
        "I focus on techniques that can be integrated into daily routines and professional life without isolating meditation from reality.",
    },

    locationData: {
      address:
        "Eqylife Str. Nistoresti nr. 143, Măgura 137038, Romania",
      description1:
        "Located in Magura, Dambovita county, the Eqylife Center benefits from its unique surroundings and proximity to Targoviste, offering a special blend of natural beauty, historical charm, and convenient amenities.",
      description2:
        "Here's a description of what makes the location and neighborhood special, along with some highlights of what visitors can find nearby:",
      image: "/location.webp",
    },

    notIncluded: [
      "Airport transfers",
      "Flights costs",
      "Travel insurance",
      "Visa fee",
      "Additional treatments",
      "Additional activities not included",
    ],
  },


    {
    id: 2,
    title: "7 4 Day Custom Relax Yoga & Outdoor Retreat in Tuscany, Italy",
    price: "$1,328",
    location: "Province of Grosseto, Tuscany, Italy",
    date: "Jan 15 - 21, 2026",
    duration: "7 days, 6 nights",
    guests: "12 guests",

    images: [
       "/retreats2.webp",
      "/retreats2.1.webp",
      "/retreats2.2.webp",
      "/retreats2.3.webp",
    ],

    about: (
      <>
        In the wonderful Maremma, enjoy a revitalizing relaxing journey together with Paula and Erico. In a quiet environment in the middle of the countryside, this is a customized private or small group yoga retreat with optional guided outdoor or cultural activities.
        
        <br />
        <br />
        Paula will prepare a specific yoga and food program tailored to your needs. She is an expert guide who accompanies you from your starting point to achieving your goals.
Maremma is rich in culture and different natural environments. Ideal for those seeking tranquility, nature, culture, and good healthy food.
This retreat is suitable for all levels and ages and you can choose your own arrival date.
      </>
    ),

    included: [
      "3 Nights Accommodation",
      "3 daily delicious and nutritious meals",
      "Water, tea, coffee served throughout the day",
      "Daily meditation classes",
      "Specialized workshops"],
    includedr:[  
      "Three integration sessions during the retreat",
      "Optional sessions with ancestral tools",
      "Post retreat online integration",
      "Pre and post retreat support from our team",
      "Wifi connection",
    ],

    special: (
      <>
        Is not just a retreat or yoga holiday is more than that, you will be part of the family.
The most important thing for me is to arrive deep into the person, what it looks like with
the yoga practice, and the experience in this beautiful land.
      </>
    ),

    programText: (
      <>
        You can come any time of the year. From May to mid-October you can
        enjoy the sun the sea and the natural environment between meditation
        walks and excursions.
      </>
    ),

    schedule: [
      {
        time: "09:00",
        text: (
          <>
            Breakfast for those not,
            <br />
          participating
          </>
        ),
      },
      {
        time: "12:00",
        text: "Group integration session",
      },
      {
        time: "14:00",
        text:" Lunch for non-participants"

      },
      {
        time: "18:30",
        text: "Afternoon snack",
      },
      {
        time: "20:00",
        text: "Group preparation session"
      },
      {
        time: "22:00",
        text: (
          <>
           Nighttime ayahuasca ceremony
          </>
        ),
      },
    ],

    meals: [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snacks",
    ],

    diets: [
      "Egg-free",
      "Gluten Free",
      "Vegan",
      "Vegetarian",
    ],

    foodDescription: (
      <>
       Erico and Paula have a great passion for good and healthy eating. Paula is a Natural Bio
Vegan Chef, she has experience in natural nutrition based on the use of local products.
      </>
    ),

    foodImages: [
      "/retreats2.4.webp",
      "/retreats2.5.webp",
      "/retreats2.6.webp",
      "/retreats2.7.webp",
    ],

    team: {
      name: "Maria Paula Medina",
      role: "Meditation Coach",
      image: "/retreats2.8.webp",
      description1:
        "Maria Paula Medina is a certified yoga teacher and she's going to lead this yoga retreat.",
      description2:
        "Yoga formed part of her life from the age of 19, and from there she devoted many hours of study and practice in Argentina, Europe, and India for Hatha and Vinyasa yoga.",
    },

    locationData: {
      address:
        `Villa Artemisia\n
Strada Poggetti, 4/B, 58011 Capalbio GR, Italy`,
      description1:
        "In a few minutes you can reach and visit Ansedonia and Monte Argentario, Feniglia, Orbetello, and Talamone. The medieval villages of Magliano in Toscana, Sorano, Sovana, and Pitigliano, the thermal baths of Saturnia, the Hermitage of Poggio Conte, the Tarot Garden, and the Maremma Natural Park are some of the beauties not to be missed, and visited.",
            image: "/retreats2.9.webp",
    },

    notIncluded: [
      "Airport transfers",
      "Flights costs",
      "Travel insurance",
      "Visa fee",
      "Additional treatments",
      "Additional activities not included",
    ],
  },
  {
    id: 3,
    title: "Photography Retreat & Tour in Magical Morocco",
    price: "$5,575",
    location: "Province of Grosseto, Tuscany, Italy",
    date: "March 06 - 20, 2026 ",
    duration: "7 days, 6 nights",
    guests: "12 guests",

    images: [
      "/retreats3.webp",
      "/retreats3.1.webp",
      "/retreats3.2.webp",
      "/retreats3.3.webp",
    ],

    about: (
      <>
Calling all photographers, this retreat will give plenty of opportunity for landscape, street, still life, and wildlife, and so much more. It's an opportunity to make memories that are life lasting.
        <br />
       Please join me on this magical photography adventure through Morocco.        

      </>
    ),

    included: [
      "14 Nights Accommodation",
      "15 daily delicious and nutritious meals",
      "Water, tea, coffee served throughout the day",
      "Daily meditation classes",
      "Specialized workshops"],
    includedr:[  
      "Three integration sessions during the retreat",
      "Optional sessions with ancestral tools",
      "Post retreat online integration",
      "Pre and post retreat support from our team",
      "Wifi connection",
    ],

    special: (
      <>
        Take this opportunity to grow as a photographer and take time to edit and perfect your
photos among like-minded people and peers. Your passionate host is here to guide and
encourage along the way.
      </>
    ),

    programText: (
      <>
        Experience the Magic of Morocco: 15-Day Tour of Cities, Culture, and
Nature and Photography
      </>
    ),

    schedule: [
      {
        time: "Day1",
        text: (
          <>
           Arrival in Casablanca or Marrakech
          </>
        ),
      },
      {
        time: "Day2",
        text: "Marrakech Guided Tour",
      },
      {
        time: "Day3",
        text:" Marrakech Free Day"

      },
    
      {
        time: "Day4",
        text: "Marrakech To Essaouira"
      },
      {
        time: "Day5",
        text: (
          <>
           Essaouira back to Marrakech
          </>
        ),
      },
      {
        time: "Day6",
        text: (
          <>
           Marrakech To Dades Valley via
           <br/>
           Kasbah Ait Benhaddou
          </>
        ),
      },
      {
        time: "Day7-8",
        text: (
          <>
          Dades Valley To Sahara Desert
          </>
        ),
      },
      {
        time: "Day9-10",
        text: (
          <>
           Sahara Desert To Fes
          </>
        ),
      },
      {
        time: "Day11-12",
        text: (
          <>
          Fes to Chefchaouen
          </>
        ),
      },
      {
        time: "Day13",
        text: (
          <>
           Chefchaouen at leisure
          </>
        ),
      },
      {
        time: "Day14",
        text: (
          <>
          Chefchaouen at leisure
          </>
        ),
      },
      {
        time: "Day15",
        text: (
          <>
           Transfer to the airport at your flight time.
          </>
        ),
      },
    ],

    meals: [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snacks",
    ],

    diets: [
      "Egg-free",
      "Gluten Free",
      "Vegan",
      "Vegetarian",
    ],

    foodDescription: (
      <>
       Moroccan food is rich, diverse, and packed with bold flavors, influenced by the
country's varied landscapes, history, and cultures.
      </>
    ),

    foodImages: [
      "/retreats3.4.webp",
      "/retreats3.5.webp",
      "/retreats3.6.webp",
      "/retreats3.7.webp",
    ],

    team: {
      name: "Matteo Conti",
      role: "Transformational Retreat Guide",
      image: "/retreats3.8.webp",
      description1:
        "I guide retreats focused on personal clarity, reflection, and intentional change. My work combines structured sessions, nature-based practices, and group processes. I support participants in slowing down, reassessing priorities, and reconnecting with their inner direction.",
    },

    locationData: {
      address:"Morocco",
      description1:
        "Morocco is a country in North Africa with a mountainous interior, Atlantic and Mediterranean coastlines, and a rich history and culture.",
        description2:"Beautiful landscape, friendly inviting people and a great place to experience a diverse culture.",
            image: "/retreats3.9.webp",
    },

    notIncluded: [
      "Airport transfers",
      "Flights costs",
      "Travel insurance",
      "Visa fee",
      "Additional treatments",
      "Additional activities not included",
    ],
  },

{
    id: 4,
    title: "8 Day Juice Detox, Retreat in Portugal",
    price: "$3,829",
    location: "R. Moinhos Velhos 3, 8600-077 Lagos, Portugal",
    date: "Feb 06 - 14, 2026 ",
    duration: "8 days, 7 nights",
    guests: "12 guests",

    images: [
      "/retreats4.webp",
      "/retreats4.1.webp",
      "/retreats4.2.webp",
      "/retreats4.3.webp",
    ],

    about: (
      <>
Have For over three decades, we’ve helped thousands rediscover balance, vitality, and peace through the simple, powerful practice of juice fasting.
<br/>
As one of the world’s first dedicated juice fasting retreats, and named by The Sunday Times among the Top 10 Detox Retreats Worldwide,we combine deep expertise with genuine care to guide you on a truly
transformative wellness journey.

      </>
    ),

    included: [
      "7 Nights Accommodation",
      "3 daily delicious and nutritious meals",
      "Water, tea, coffee served throughout the day",
      "Daily meditation classes",
      "Specialized workshops"],
    includedr:[  
      "Three integration sessions during the retreat",
      "Optional sessions with ancestral tools",
      "Post retreat online integration",
      "Pre and post retreat support from our team",
      "Wifi connection",
    ],

    special: (
      <>
      Our yoga classes are accessible to all - whether you are a beginner or seasoned yogi
our skilled teachers can guide you through an enriching and relaxing practice that
supports your detox.
<br/>
Yoga is a fundamental part of our programme because the combination of gentle
moving, stretching, and twisting together with deep breathing, significantly helps the
detox process for body, mind and spirit. The lymph and blood transporting the released
toxins are pumped through the body at a faster rate, speeding up the elimination
process.
      </>
    ),

    programText: (
      <>
       We are also a magical programme if you simply wish to deepen your knowledge and
experience of natural health practices and living abundantly and positively - and
crucially - feeling empowered to take that awareness back out into your daily life. We
have daily wellness workshops and table talks around nutrition and healthy living which
are always very popular and informative.
      </>
    ),

    schedule: [
      {
        time: "05:00",
        text: (
          <>
           Wake up,lemon tea
          </>
        ),
      },
      {
        time: "07:00",
        text:(
          <>
Yoga
          </>
        ),
      },
      {
        time: "10:00",
        text:(
          <>
Orange juice, therapies or
free time
          </>
        )

      },
    
      {
        time: "13:30",
        text:(
          <>
Fruit or vegetable juice
          </>
        )
      },
      {
        time: "16:00",
        text: (
          <>
   Vegetable juice & nutrition workshop
          </>
        ),
      },
      {
        time: "20:00",
        text: (
          <>
Mixed vegetable broth – mineral rich          </>
        ),
      },

    ],

    meals: [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snacks",
    ],

    diets: [
      "Egg-free",
      "Gluten Free",
      "Vegan",
      "Vegetarian",
    ],

    foodDescription: (
      <>
      To keep you attuned to nature, our juices and broths are prepared in accordance with
the season and also we ensure that across the retreat you have variety and a range of
vitamins and minerals to replenish and cleanse your nervous system.
      </>
    ),

    foodImages: [
      "/retreats4.4.webp",
      "/retreats4.5.webp",
      "/retreats4.6.webp",
      "/retreats4.7.webp",
    ],

    team: {
      name: "Sarah Johnson",
      role: "Nutrition Specialist",
      image: "/retreats4.8.webp",
      description1:
        "I support retreat participants with nutrition that is simple, nourishing, and adapted to real needs. My work focuses on whole foods, energy balance, and practical eating habits that support focus and recovery.",
      description2:"I help people understand how nutrition affects their physical and mental state, without strict rules or unnecessary restrictions, and with respect for individual lifestyles."
      },

    locationData: {
      address:"R. Moinhos Velhos 3, 8600-077 Lagos, Portugal",
      description1:
       "Nestled in a secluded valley with an abundance of quartz crystal naturally embedded in the Earth, Moinhos Velhos is in equal parts beautiful, energising and regenerative! Here we wake up to the creative life force of nature and the songs of the birds in the morning and retire with the silence of the stars at night",
            image: "/retreats4.9.webp",
    },

    notIncluded: [
      "Airport transfers",
      "Flights costs",
      "Travel insurance",
      "Visa fee",
      "Additional treatments",
      "Additional activities not included",
    ],
  },
  {
    id: 5,
    title: "7 Day Solo Travelers Retreat: Fun in Bali",
    price: "$406",
    location: "Ubud, Bali, Indonesia",
    date: "Jan | Feb | Mar | Apr | May ",
    duration: "7 days, 6 nights",
    guests: "solo",

    images: [
      "/retreats6.webp",
      "/retreats6.1.webp",
      "/retreats6.2.webp",
      "/retreats6.3.webp",
    ],

    about: (
      <>
Firefly Retreat Bali is located just a 25-minute walk from Ubud’s bustling main street, offering a peaceful sanctuary away from the crowds while still being close enough to explore the town’s vibrant cultural
attractions.<br/>
Surrounded by lush rice paddies, tropical forests, and tranquil villages, the retreat provides the perfect setting
for relaxation, reflection, and rejuvenation. The serene natural environment is ideal for your yoga practice and wellness journey.
      </>
    ),

    included: [
      "6 Nights Accommodation",
      "Chocolate making class, cooking class",
      "Herbal drink-making class",
      "Meeting other solo travelers",
      "Initial health check-up"],
    includedr:[  
      "Three integration sessions during the retreat",
      "Optional sessions with ancestral tools",
      "Post retreat online integration",
      "Pre and post retreat support from our team",
      "Wifi connection",
    ],

    special: (
      <>
Firefly Retreat Bali offers a unique experience by blending affordability with a
welcoming, community-driven atmosphere. It's not a luxurious resort or a strict ashram
but rather a warm, budget-friendly destination where guests can relax and enjoy
enriching activities without the pressure of formality. Located just a 25-minute walk from
Ubud's main street, the retreat is surrounded by nature, offering a perfect setting for
yoga, meditation, and connection with Balinese culture.
      </>
    ),

    programText: (
      <>
We are also a magical programme if you simply wish to deepen your knowledge and
experience of natural health practices and living abundantly and positively - and
crucially - feeling empowered to take that awareness back out into your daily life. We
have daily wellness workshops and table talks around nutrition and healthy living which
are always very popular and informative.
      </>
    ),

    schedule: [
      {
        time: "Day1",
        text: (
          <>
          Arrival and settle in, First
meeting and introduction

          </>
        ),
      },
      {
        time: "Day2",
        text: "Sunrise Yoga,  Morning walk and introduction to Balinese natural medicines",
      },
      {
        time: "Day3",
        text:"Balinese Excursion OR Sound Healing At Pyramids Of Chi"

      },
    
      {
        time: "Day4",
        text: "Sunrise yoga, Cooking class, Jamu making"
      },
      {
        time: "Day5-6",
        text: (
          <>
          Herbal remedies tasting, Chocolate making
          </>
        ),
      },
      {
        time: "Day7",
        text: (
          <>
        Departure
          </>
        ),
      },
      
    ],

    meals: [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snacks",
    ],

    diets: [
      "Egg-free",
      "Gluten Free",
      "Vegan",
      "Vegetarian",
    ],

    foodDescription: (
      <>
       Moroccan food is rich, diverse, and packed with bold flavors, influenced by the
country's varied landscapes, history, and cultures.
      </>
    ),

    foodImages: [
      "/retreats6.4.webp",
      "/retreats6.5.webp",
      "/retreats6.6.webp",
      "/retreats6.7.webp",
    ],

    team: {
      name: "David Schneider",
      role: "Nature Retreat Guide",
      image: "/retreats6.8.webp",
      description1:
        "I guide retreats focused on personal clarity, reflection, and intentional change. My work combines structured sessions, nature-based practices, and group processes. I support participants in slowing down, reassessing priorities, and reconnecting with their inner direction.",
    },

    locationData: {
      address:"Morocco",
      description1:
"I design and guide retreats centered around nature, walking practices, and quiet observation.",        
description2:"Beautiful landscape, friendly inviting people and a great place to experience a diverse culture.",
description2:"My work uses natural environments as a space for reflection and mental reset. I support participantin reconnecting with simplicity, presence, and physical awareness through structured outdoor experiences.",          
image: "/retreats6.9.webp",
    },

    notIncluded: [
      "Airport transfers",
      "Flights costs",
      "Travel insurance",
      "Visa fee",
      "Additional treatments",
      "Additional activities not included",
    ],
  },

   {
    id: 6,
    title: "7 Day Solo Travelers Retreat: Fun in Bali",
    price: "$406",
    location: "Ubud, Bali, Indonesia",
    date: "Jan | Feb | Mar | Apr | May ",
    duration: "7 days, 6 nights",
    guests: "solo",

    images: [
      "/retreats6.webp",
      "/retreats6.1.webp",
      "/retreats6.2.webp",
      "/retreats6.3.webp",
    ],

    about: (
      <>
Firefly Retreat Bali is located just a 25-minute walk from Ubud’s bustling main street, offering a peaceful sanctuary away from the crowds while still being close enough to explore the town’s vibrant cultural
attractions.<br/>
Surrounded by lush rice paddies, tropical forests, and tranquil villages, the retreat provides the perfect setting
for relaxation, reflection, and rejuvenation. The serene natural environment is ideal for your yoga practice and wellness journey.
      </>
    ),

    included: [
      "6 Nights Accommodation",
      "Chocolate making class, cooking class",
      "Herbal drink-making class",
      "Meeting other solo travelers",
      "Initial health check-up"],
    includedr:[  
      "Three integration sessions during the retreat",
      "Optional sessions with ancestral tools",
      "Post retreat online integration",
      "Pre and post retreat support from our team",
      "Wifi connection",
    ],

    special: (
      <>
Firefly Retreat Bali offers a unique experience by blending affordability with a
welcoming, community-driven atmosphere. It's not a luxurious resort or a strict ashram
but rather a warm, budget-friendly destination where guests can relax and enjoy
enriching activities without the pressure of formality. Located just a 25-minute walk from
Ubud's main street, the retreat is surrounded by nature, offering a perfect setting for
yoga, meditation, and connection with Balinese culture.
      </>
    ),

    programText: (
      <>
We are also a magical programme if you simply wish to deepen your knowledge and
experience of natural health practices and living abundantly and positively - and
crucially - feeling empowered to take that awareness back out into your daily life. We
have daily wellness workshops and table talks around nutrition and healthy living which
are always very popular and informative.
      </>
    ),

    schedule: [
      {
        time: "Day1",
        text: (
          <>
          Arrival and settle in, First
meeting and introduction

          </>
        ),
      },
      {
        time: "Day2",
        text: "Sunrise Yoga,  Morning walk and introduction to Balinese natural medicines",
      },
      {
        time: "Day3",
        text:"Balinese Excursion OR Sound Healing At Pyramids Of Chi"

      },
    
      {
        time: "Day4",
        text: "Sunrise yoga, Cooking class, Jamu making"
      },
      {
        time: "Day5-6",
        text: (
          <>
          Herbal remedies tasting, Chocolate making
          </>
        ),
      },
      {
        time: "Day7",
        text: (
          <>
        Departure
          </>
        ),
      },
      
    ],

    meals: [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snacks",
    ],

    diets: [
      "Egg-free",
      "Gluten Free",
      "Vegan",
      "Vegetarian",
    ],

    foodDescription: (
      <>
       Moroccan food is rich, diverse, and packed with bold flavors, influenced by the
country's varied landscapes, history, and cultures.
      </>
    ),

    foodImages: [
      "/retreats6.4.webp",
      "/retreats6.5.webp",
      "/retreats6.6.webp",
      "/retreats6.7.webp",
    ],

    team: {
      name: "David Schneider",
      role: "Nature Retreat Guide",
      image: "/retreats6.8.webp",
      description1:
        "I guide retreats focused on personal clarity, reflection, and intentional change. My work combines structured sessions, nature-based practices, and group processes. I support participants in slowing down, reassessing priorities, and reconnecting with their inner direction.",
    },

    locationData: {
      address:"Morocco",
      description1:
"I design and guide retreats centered around nature, walking practices, and quiet observation.",        
description2:"Beautiful landscape, friendly inviting people and a great place to experience a diverse culture.",
description2:"My work uses natural environments as a space for reflection and mental reset. I support participantin reconnecting with simplicity, presence, and physical awareness through structured outdoor experiences.",          
image: "/retreats6.9.webp",
    },

    notIncluded: [
      "Airport transfers",
      "Flights costs",
      "Travel insurance",
      "Visa fee",
      "Additional treatments",
      "Additional activities not included",
    ],
  },


];

export default RetreatsInData;