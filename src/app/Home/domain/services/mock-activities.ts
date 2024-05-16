import { Activity } from '../models/Activity';

export const ACTIVITIES: Activity[] = [
  {
    id: 1,
    continent: 'europe',
    name: 'Exploración de la Citadelle Médiévale',
    image:
      'https://images.unsplash.com/photo-1647700310392-17a7546cd724?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2700,
    location: 'Carcassonne,France',
    description:
      "Immergez-vous dans l'histoire médiévale de la Citadelle Médiévale, un site historique magnifiquement préservé où vous pourrez explorer des remparts centenaires, déambuler dans des ruelles pittoresques et découvrir l'atmosphère envoûtante du Moyen Âge.",
  },
  {
    id: 2,
    continent: 'europe',
    name: 'Promenade à travers les Champs de Lavande',
    image:
      'https://images.unsplash.com/photo-1600699260716-d5ed9a3f9efe?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3000,
    location: 'Provence, France',
    description:
      'Plongez dans un océan de violet aux Champs de Lavande, où vous pourrez vous promener à travers des champs de lavande parfumée, admirer des vues imprenables sur les collines vallonnées et découvrir la beauté de la campagne provençale.',
  },
  {
    id: 3,
    continent: 'europe',
    name: "Escalade jusqu'au Sommet de la Tour Eiffel",
    image:
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2500,
    location: 'Paris, France',
    description:
      "Émerveillez-vous devant l'emblématique Tour Eiffel, un chef-d'œuvre architectural qui offre des vues à couper le souffle sur Paris depuis ses hauteurs vertigineuses, et imprégnez-vous de la romance et de l'élégance de la Ville Lumière.",
  },
  {
    id: 4,
    continent: 'europe',
    name: 'Croisière sur la Côte d`Azur',
    image:
      'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3500,
    location: 'Nice, France',
    description:
      "Indulgez dans le glamour et la beauté de la Côte d'Azur, où vous pourrez vous prélasser au soleil méditerranéen sur des plages immaculées, explorer des villes côtières charmantes et vivre le style de vie chic des riches et célèbres.",
  },
  {
    id: 5,
    continent: 'europe',
    name: 'Randonnée autour du Mont Saint-Michel',
    image:
      'https://images.unsplash.com/photo-1562614174-c82de799351a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3200,
    location: 'Normandie, France',
    description:
      "Découvrez la magie du Mont Saint-Michel, une commune insulaire enchanteresse couronnée d'une superbe abbaye médiévale, où vous pourrez vous promener dans des rues étroites, monter des escaliers anciens et découvrir la beauté intemporelle de ce site classé au patrimoine mondial de l'UNESCO.",
  },
  {
    id: 6,
    continent: 'europe',
    name: 'Visite des Châteaux de la Loire',
    image:
      'https://images.unsplash.com/photo-1571504211935-1c936b327411?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2800,
    location: 'Vallée de la Loire, France',
    description:
      "Embarquez pour un voyage à travers l'histoire aux Châteaux de la Loire, où vous pourrez explorer de magnifiques châteaux, vous promener dans des jardins luxuriants et vous immerger dans la grandeur et l'élégance de la Renaissance française.",
  },
  {
    id: 7,
    continent: 'europe',
    name: 'Ski dans les Alpes françaises',
    image:
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 4000,
    location: 'Chamonix, France',
    description:
      "Vivez l'émotion des montagnes dans les Alpes françaises, où vous pourrez skier sur des pentes en poudreuse, randonner dans une nature sauvage immaculée et vous émerveiller devant des vues imprenables sur les sommets enneigés.",
  },
  {
    id: 8,
    continent: 'europe',
    name: 'Dîner au château de Versailles',
    image:
      'https://images.unsplash.com/photo-1602003472234-6a9fde86a446?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2900,
    location: 'Versailles, France',
    description:
      "Replongez dans l'histoire au somptueux Palais de Versailles, une résidence royale somptueuse qui offre une architecture exquise, des jardins magnifiques et une histoire riche qui incarne la splendeur et la grandeur de la monarchie française.",
  },
  {
    id: 9,
    continent: 'europe',
    name: 'Exploration des Villages Provençaux',
    image:
      'https://images.unsplash.com/photo-1551568697-4b520d9743f4?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2700,
    location: 'Provence, France',
    description:
      "Découvrez le charme des villages provençaux, où des rues pavées étroites serpentent entre des maisons de pierre anciennes, des marchés animés regorgent de délices locaux, et le parfum de la lavande embaume l'air.",
  },
  {
    id: 10,
    continent: 'europe',
    name: 'Excursion dans les Vignobles Bordelais',
    image:
      'https://plus.unsplash.com/premium_photo-1671531113340-beadcd4eb406?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3300,
    location: 'Bordeaux, France',
    description:
      "Savourez les saveurs du pays du vin français, où des vignobles vallonnés s'étendent à perte de vue, des châteaux majestueux surplombent des rivières sinueuses, et des dégustations de vin vous invitent à découvrir les secrets des vins fins français.",
  },
  {
    id: 11,
    continent: 'europe',
    name: 'Exploration de la Rome Antique',
    image:
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2900,
    location: 'Rome, Italy',
    description:
      "Plongez dans l'histoire de Rome antique, où des ruines majestueuses témoignent de la grandeur de l'Empire romain, des places animées révèlent le rythme de la vie romaine et des trésors artistiques captivent l'imagination dans chaque coin de rue.",
  },
  {
    id: 12,
    continent: 'europe',
    name: 'Balade en Gondole à Venise',
    image:
      'https://images.unsplash.com/photo-1638376851565-42db4491b05b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3200,
    location: 'Venise, Italy',
    description:
      "Tombez sous le charme de Venise romantique, où des canaux sinueux invitent à des balades en gondole, des palais opulents bordent des places élégantes et l'atmosphère envoûtante de la ville vous transporte dans une époque de romance et de splendeur.",
  },
  {
    id: 13,
    continent: 'europe',
    name: 'Exploration de la Florence Renaissance',
    image:
      'https://images.unsplash.com/photo-1543429258-cc721a300e8a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3000,
    location: 'Florence, Italy',
    description:
      "Laissez-vous enchanter par la Renaissance à Florence, où des chefs-d'œuvre artistiques célèbrent l'âge d'or de la ville, des ruelles médiévales révèlent des trésors architecturaux et des places animées capturent l'essence vibrante de la vie florentine.",
  },
  {
    id: 14,
    continent: 'asie',
    name: 'Aventure dans le désert',
    image:
      'https://images.unsplash.com/photo-1504626113995-a0e5d91f925d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2600,
    location: 'Dubai, Émirats arabes unis',
    description:
      "Échappez à l'agitation urbaine à Sand Dunes Oasis, où vous pourrez explorer les vastes déserts de l'Émirat et vous détendre dans des oasis luxuriantes loin de l'agitation de la ville.",
  },
  {
    id: 15,
    continent: 'europe',
    name: 'Randonnée dans les Dolomites italiennes',
    image:
      'https://plus.unsplash.com/premium_photo-1676885540188-0044057cc684?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 4000,
    location: 'Dolomites, Italy',
    description:
      'Découvrez la majesté des Dolomites italiennes, où des sommets imposants dominent des vallées verdoyantes, des sentiers de randonnée serpentent à travers des paysages alpins époustouflants et des refuges de montagne vous invitent à une pause bien méritée.',
  },
  {
    id: 16,
    continent: 'Oceanie',
    name: 'Retraite aux Eaux Azurées',
    image:
      'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3400,
    location: 'Nadi, Fidji',
    description:
      'Plongez dans les eaux azurées du Azure Waters Retreat, un lieu paisible où vous pourrez vous détendre sur des plages de sable blanc, explorer les récifs coralliens colorés et découvrir la richesse marine des îles Fidji.',
  },
  {
    id: 17,
    continent: 'europe',
    name: "Promenade dans l'Alhambra de Grenade",
    image:
      'https://images.unsplash.com/photo-1484503369601-c5f45a1bf914?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3000,
    location: 'Grenade, Spain',
    description:
      "Plongez dans l'histoire mauresque à l'Alhambra de Grenade, où des palais somptueux vous transportent dans un monde de contes de fées, des jardins exotiques captivent vos sens et des vues panoramiques sur la ville vous offrent des moments inoubliables.",
  },
  {
    id: 18,
    continent: 'Oceanie',
    name: 'Refuge des Explorateurs',
    image:
      'https://images.unsplash.com/photo-1568454537842-d933259bb258?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3800,
    location: 'Queenstown, Nouvelle-Zélande',
    description:
      "Plongez dans l'aventure au Refuge des Explorateurs, où vous pourrez explorer les paysages époustouflants de la Nouvelle-Zélande, découvrir des lacs cristallins et des montagnes majestueuses, et vivre des expériences inoubliables en plein air.",
  },
  {
    id: 19,
    continent: 'asie',
    name: 'Exploration des Îles de Phuket',
    image:
      'https://plus.unsplash.com/premium_photo-1664478083744-affd1f117efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3000,
    location: 'Phuket, Thaïlande',
    description:
      'Plongez dans le paradis tropical de Tropical Paradise, où vous pourrez vous détendre sur des plages de sable blanc immaculées, explorer des îles exotiques et découvrir la culture vibrante de la Thaïlande.',
  },

  {
    id: 20,
    continent: 'ameriquedunord',
    name: 'Aurore Boréale Éclatante',
    image:
      'https://images.unsplash.com/photo-1596476024644-67452de3d693?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3200,
    location: 'Whistler, Canada',
    description:
      "Découvrez la beauté hivernale des Snowy Peaks, où vous pourrez dévaler des pistes immaculées, respirer l'air pur de la montagne et vous détendre dans des stations de ski de renommée mondiale.",
  },
  {
    id: 21,
    continent: 'ameriquedunord',
    name: 'Sérénité du Désert Rouge',
    image:
      'https://images.unsplash.com/photo-1575408264798-b50b252663e6?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2500,
    location: 'Arizona, États-Unis',
    description:
      "Échappez à l'agitation de la vie urbaine à Red Sands Sanctuary, où vous pourrez vous reconnecter avec la nature dans des paysages désertiques époustouflants et vous détendre dans des refuges luxueux au cœur du désert.",
  },
  {
    id: 22,
    continent: 'asie',
    name: 'Havre Exotique',
    image:
      'https://images.unsplash.com/photo-1523592121529-f6dde35f079e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3600,
    location: 'Bali, Indonésie',
    description:
      "Plongez dans l'exotisme du Havre Exotique, où vous pourrez vous détendre sur des plages de sable blanc immaculées, découvrir des temples anciens et explorer la riche culture balinaise.",
  },
  {
    id: 23,
    continent: 'asie',
    name: 'Temple Perdu',
    image:
      'https://images.unsplash.com/photo-1463694023725-91c761715d21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3100,
    location: 'Siem Reap, Cambodge',
    description:
      "Explorez les trésors antiques du Temple Perdu, où vous pourrez découvrir les majestueux temples d'Angkor, déambuler dans des ruines millénaires et vous imprégner de la spiritualité de l'ancienne civilisation khmère.",
  },
  {
    id: 24,
    continent: 'Afrique',
    name: 'Safari Sauvage',
    image:
      'https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2900,
    location: 'Nairobi, Kenya',
    description:
      "Partez à l'aventure dans la savane africaine lors d'un Safari Sauvage, où vous pourrez découvrir la faune sauvage de l'Afrique, observer des animaux majestueux dans leur habitat naturel et vivre des moments inoubliables en pleine nature.",
  },
  {
    id: 25,
    continent: 'europe',
    name: 'Paradis du Kite Surf',
    image:
      'https://images.unsplash.com/photo-1615692536613-e1dac68ae264?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2700,
    location: 'Crète, Grèce',
    description:
      'Détendez-vous sur les plages de sable doré de Paradis du Kite Surf, où vous pourrez vous baigner dans des eaux cristallines, explorer des criques isolées et profiter du soleil méditerranéen.',
  },
  {
    id: 26,
    continent: 'europe',
    name: 'Excursion en bateau en Suisse',
    image:
      'https://images.unsplash.com/photo-1665131439247-287a396b4edf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3300,
    location: 'Interlaken, Suisse',
    description:
      "Échappez à la routine quotidienne à Retraite Alpine, où vous pourrez respirer l'air pur de la montagne, explorer des sentiers panoramiques et vous détendre dans des villages alpins pittoresques.",
  },
  {
    id: 27,
    continent: 'ameriquedusud',
    name: 'Aventure en Patagonie',
    image:
      'https://images.unsplash.com/photo-1637580981009-c13f27517703?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3800,
    location: 'Torres del Paine, Chili',
    description:
      'Lancez-vous dans une aventure passionnante dans la majestueuse Patagonie, où vous pourrez explorer des glaciers millénaires, marcher sur des sentiers sauvages et vous émerveiller devant la beauté naturelle des pics de granit des Torres del Paine.',
  },
];
