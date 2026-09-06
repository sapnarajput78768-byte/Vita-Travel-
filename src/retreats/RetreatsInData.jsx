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
      "Specialized workshops",
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

    title: "Yoga & Outdoor Retreat in Tuscany, Italy",

    price: "$1,328",

    location: "Province of Grosseto, Tuscany, Italy",

    date: "Jan 15 - 21, 2026",

    duration: "7 days, 6 nights",

    guests: "6 guests",

    images: [
      "/tuscany1.webp",
      "/tuscany2.webp",
      "/tuscany3.webp",
      "/tuscany4.webp",
    ],

    about: (
      <>
        Experience a peaceful yoga and outdoor retreat surrounded by the
        beautiful landscapes of Tuscany.
        <br />
        <br />
        This retreat is designed for people who want to slow down, reconnect
        with nature and improve their physical and mental wellbeing through
        yoga, meditation and outdoor activities.
      </>
    ),

    included: [
      "6 nights accommodation",
      "Daily yoga classes",
      "Healthy and nutritious meals",
      "Daily meditation sessions",
      "Outdoor activities",
      "Specialized yoga workshops",
      "Nature walks",
      "Pre and post retreat support",
      "Wifi connection",
      "Free time for relaxation",
    ],

    special: (
      <>
        This retreat combines yoga, nature and outdoor activities to create a
        relaxing and refreshing experience.
        <br />
        <br />
        Surrounded by the peaceful Tuscan countryside, guests can disconnect
        from their busy routines and spend quality time focusing on their
        body, mind and wellbeing.
      </>
    ),

    programText: (
      <>
        Enjoy a balanced daily routine with yoga, meditation, outdoor
        activities and plenty of time to relax and explore the beautiful
        Tuscan surroundings.
      </>
    ),

    schedule: [
      {
        time: "07:00",
        text: (
          <>
            Morning yoga session,
            <br />
            Breathwork and meditation
          </>
        ),
      },
      {
        time: "08:30",
        text: "Healthy breakfast",
      },
      {
        time: "10:30",
        text: (
          <>
            Outdoor activity
            <br />
            and nature exploration
          </>
        ),
      },
      {
        time: "13:30",
        text: "Lunch and relaxation",
      },
      {
        time: "16:00",
        text: (
          <>
            Yoga workshop
            <br />
            according to the teacher's instructions
          </>
        ),
      },
      {
        time: "20:00",
        text: "Dinner and free time",
      },
    ],

    meals: [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snacks",
    ],

    diets: [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "Egg-free",
    ],

    foodDescription: (
      <>
        Enjoy fresh, healthy and locally inspired meals prepared with
        nutritious ingredients. Our menu is designed to support your yoga
        practice and keep you energized throughout the retreat.
      </>
    ),

    foodImages: [
      "/tuscany-food1.webp",
      "/tuscany-food2.webp",
      "/tuscany-food3.webp",
      "/tuscany-food4.webp",
    ],

    team: {
      name: "Elena Rossi",
      role: "Yoga Coach",
      image: "/tuscany-team.webp",
      description1:
        "I teach yoga as a practical way to improve mobility, balance, strength and awareness. My sessions are suitable for both beginners and experienced practitioners.",
      description2:
        "My approach combines movement, breathwork and mindfulness to create a calm and supportive environment for every participant.",
    },

    locationData: {
      address: "Province of Grosseto, Tuscany, Italy",
      description1:
        "The retreat is located in the peaceful countryside of Tuscany, surrounded by rolling hills, vineyards and beautiful natural landscapes.",
      description2:
        "Guests can enjoy the quiet surroundings while also exploring nearby villages, local food and the unique culture of Tuscany.",
      image: "/tuscany-location.webp",
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

    location: "Morocco",

    date: "March 06 - 20, 2026",

    duration: "15 days, 14 nights",

    guests: "18 guests",

    images: [
      "/morocco1.webp",
      "/morocco2.webp",
      "/morocco3.webp",
      "/morocco4.webp",
    ],

    about: (
      <>
        Explore the beauty of Morocco through photography, culture and
        unforgettable outdoor experiences.
        <br />
        <br />
        This retreat gives photographers the opportunity to discover
        traditional villages, desert landscapes, local culture and beautiful
        natural scenery while developing their photography skills.
      </>
    ),

    included: [
      "14 nights accommodation",
      "Daily breakfast",
      "Photography workshops",
      "Guided photography tours",
      "Desert excursion",
      "Local cultural experiences",
      "Outdoor activities",
      "Professional photography guidance",
      "Pre retreat support",
      "Wifi connection",
    ],

    special: (
      <>
        Morocco offers a unique combination of dramatic landscapes, rich
        culture and unforgettable photographic opportunities.
        <br />
        <br />
        From traditional markets to desert landscapes, every day offers a new
        environment to explore and photograph.
      </>
    ),

    programText: (
      <>
        The program combines photography workshops, guided tours, cultural
        experiences and outdoor adventures across some of Morocco's most
        beautiful locations.
      </>
    ),

    schedule: [
      {
        time: "07:00",
        text: "Morning photography walk",
      },
      {
        time: "08:30",
        text: "Breakfast break",
      },
      {
        time: "10:00",
        text: (
          <>
            Photography workshop
            <br />
            and guided tour
          </>
        ),
      },
      {
        time: "13:30",
        text: "Lunch and relaxation",
      },
      {
        time: "16:00",
        text: (
          <>
            Outdoor photography
            <br />
            session
          </>
        ),
      },
      {
        time: "20:00",
        text: "Dinner and free time",
      },
    ],

    meals: [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snacks",
    ],

    diets: [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "Egg-free",
    ],

    foodDescription: (
      <>
        Discover delicious Moroccan cuisine prepared with fresh local
        ingredients. Vegetarian and other dietary options are available for
        guests throughout the retreat.
      </>
    ),

    foodImages: [
      "/morocco-food1.webp",
      "/morocco-food2.webp",
      "/morocco-food3.webp",
      "/morocco-food4.webp",
    ],

    team: {
      name: "Amir Benali",
      role: "Photography Coach",
      image: "/morocco-team.webp",
      description1:
        "I teach photography through practical outdoor sessions where participants can develop their composition, lighting and storytelling skills.",
      description2:
        "My goal is to help photographers become more confident while capturing authentic moments and beautiful landscapes.",
    },

    locationData: {
      address: "Morocco",
      description1:
        "Morocco is known for its diverse landscapes, traditional architecture, colourful markets and spectacular desert scenery.",
      description2:
        "The retreat allows guests to explore different regions while experiencing local culture and discovering unique photography locations.",
      image: "/morocco-location.webp",
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

    title: "Morocco Holiday & Desert Moon",

    price: "$3,829",

    location: "Morocco Desert",

    date: "April 10 - 17, 2026",

    duration: "8 days, 7 nights",

    guests: "10 guests",

    images: [
      "/desert1.webp",
      "/desert2.webp",
      "/desert3.webp",
      "/desert4.webp",
    ],

    about: (
      <>
        Experience the magic of Morocco's desert landscapes, traditional
        culture and peaceful nights under the stars.
        <br />
        <br />
        This retreat is designed for travellers who want to disconnect from
        everyday life and enjoy a unique desert experience.
      </>
    ),

    included: [
      "7 nights accommodation",
      "Daily breakfast",
      "Lunch and dinner",
      "Desert excursion",
      "Camel experience",
      "Guided local tours",
      "Meditation sessions",
      "Outdoor activities",
      "Local cultural experiences",
      "Wifi connection",
    ],

    special: (
      <>
        Spend unforgettable evenings under the desert sky while experiencing
        Moroccan traditions, landscapes and local hospitality.
        <br />
        <br />
        The retreat offers a peaceful environment where guests can relax,
        explore and reconnect with themselves.
      </>
    ),

    programText: (
      <>
        Explore the desert, experience local culture, enjoy outdoor activities
        and spend peaceful evenings surrounded by beautiful landscapes.
      </>
    ),

    schedule: [
      {
        time: "07:00",
        text: "Morning meditation",
      },
      {
        time: "08:30",
        text: "Breakfast",
      },
      {
        time: "10:00",
        text: "Desert exploration",
      },
      {
        time: "13:30",
        text: "Lunch and relaxation",
      },
      {
        time: "16:00",
        text: "Outdoor desert activity",
      },
      {
        time: "20:00",
        text: "Dinner under the stars",
      },
    ],

    meals: [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snacks",
    ],

    diets: [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "Egg-free",
    ],

    foodDescription: (
      <>
        Enjoy traditional Moroccan dishes prepared with fresh ingredients and
        served throughout the retreat.
      </>
    ),

    foodImages: [
      "/desert-food1.webp",
      "/desert-food2.webp",
      "/desert-food3.webp",
      "/desert-food4.webp",
    ],

    team: {
      name: "Youssef Hassan",
      role: "Desert Retreat Coach",
      image: "/desert-team.webp",
      description1:
        "I help guests experience Morocco through outdoor adventures, meditation and local cultural experiences.",
      description2:
        "My focus is creating a relaxed environment where everyone can enjoy the desert at their own pace.",
    },

    locationData: {
      address: "Morocco Desert",
      description1:
        "The Moroccan desert offers incredible landscapes, peaceful surroundings and unforgettable sunsets.",
      description2:
        "Guests can explore the desert, experience local traditions and enjoy peaceful nights beneath the stars.",
      image: "/desert-location.webp",
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