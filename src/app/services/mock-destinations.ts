import { Destination } from '../models/destination';

export const DESTINATIONS: Destination[] = [
  {
    id: 1,
    type: 'france',
    name: 'Citadelle Médiévale',
    country: 'France',
    image:
      'https://images.unsplash.com/photo-1647700310392-17a7546cd724?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2700,
    location: 'Carcassonne',
    description:
      "Immergez-vous dans l'histoire médiévale de la Citadelle Médiévale, un site historique magnifiquement préservé où vous pourrez explorer des remparts centenaires, déambuler dans des ruelles pittoresques et découvrir l'atmosphère envoûtante du Moyen Âge.",
  },
  {
    id: 2,
    type: 'france',
    name: 'Champs de Lavande',
    country: 'France',
    image:
      'https://images.unsplash.com/photo-1600699260716-d5ed9a3f9efe?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3000,
    location: 'Provence',
    description:
      'Plongez dans un océan de violet aux Champs de Lavande, où vous pourrez vous promener à travers des champs de lavande parfumée, admirer des vues imprenables sur les collines vallonnées et découvrir la beauté de la campagne provençale.',
  },
  {
    id: 3,
    type: 'france',
    name: 'Tour Eiffel',
    country: 'France',
    image:
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2500,
    location: 'Paris',
    description:
      "Émerveillez-vous devant l'emblématique Tour Eiffel, un chef-d'œuvre architectural qui offre des vues à couper le souffle sur Paris depuis ses hauteurs vertigineuses, et imprégnez-vous de la romance et de l'élégance de la Ville Lumière.",
  },
  {
    id: 4,
    type: 'france',
    name: 'Côte d`Azur',
    country: 'France',
    image:
      'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3500,
    location: 'Nice',
    description:
      "Indulgez dans le glamour et la beauté de la Côte d'Azur, où vous pourrez vous prélasser au soleil méditerranéen sur des plages immaculées, explorer des villes côtières charmantes et vivre le style de vie chic des riches et célèbres.",
  },
  {
    id: 5,
    type: 'france',
    name: 'Mont Saint-Michel',
    country: 'France',
    image:
      'https://images.unsplash.com/photo-1562614174-c82de799351a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3200,
    location: 'Normandie',
    description:
      "Découvrez la magie du Mont Saint-Michel, une commune insulaire enchanteresse couronnée d'une superbe abbaye médiévale, où vous pourrez vous promener dans des rues étroites, monter des escaliers anciens et découvrir la beauté intemporelle de ce site classé au patrimoine mondial de l'UNESCO.",
  },
  {
    id: 6,
    type: 'france',
    name: 'Châteaux de la Loire',
    country: 'France',
    image:
      'https://images.unsplash.com/photo-1571504211935-1c936b327411?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2800,
    location: 'Vallée de la Loire',
    description:
      "Embarquez pour un voyage à travers l'histoire aux Châteaux de la Loire, où vous pourrez explorer de magnifiques châteaux, vous promener dans des jardins luxuriants et vous immerger dans la grandeur et l'élégance de la Renaissance française.",
  },
  {
    id: 7,
    type: 'france',
    name: 'Alpes Françaises',
    country: 'France',
    image:
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 4000,
    location: 'Chamonix',
    description:
      "Vivez l'émotion des montagnes dans les Alpes françaises, où vous pourrez skier sur des pentes en poudreuse, randonner dans une nature sauvage immaculée et vous émerveiller devant des vues imprenables sur les sommets enneigés.",
  },
  {
    id: 8,
    type: 'france',
    name: 'Dîner au château de Versailles',
    country: 'France',
    image:
      'https://images.unsplash.com/photo-1602003472234-6a9fde86a446?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2900,
    location: 'Versailles',
    description:
      "Replongez dans l'histoire au somptueux Palais de Versailles, une résidence royale somptueuse qui offre une architecture exquise, des jardins magnifiques et une histoire riche qui incarne la splendeur et la grandeur de la monarchie française.",
  },
  {
    id: 9,
    type: 'france',
    name: 'Villages Provençaux',
    country: 'France',
    image:
      'https://images.unsplash.com/photo-1551568697-4b520d9743f4?q=80&w=1874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2700,
    location: 'Provence',
    description:
      "Découvrez le charme des villages provençaux, où des rues pavées étroites serpentent entre des maisons de pierre anciennes, des marchés animés regorgent de délices locaux, et le parfum de la lavande embaume l'air.",
  },
  {
    id: 10,
    type: 'france',
    name: 'Pays du Vin Français',
    country: 'France',
    image:
      'https://plus.unsplash.com/premium_photo-1671531113340-beadcd4eb406?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3300,
    location: 'Bordeaux',
    description:
      "Savourez les saveurs du pays du vin français, où des vignobles vallonnés s'étendent à perte de vue, des caves séculaires proposent des dégustations de vins renommés dans le monde entier, et l'art de la vinification est célébré avec passion et expertise.",
  },
  {
    id: 11,
    type: 'outFrance',
    name: 'Sand Dunes Oasis',
    country: 'Émirats arabes unis',
    image:
      'https://images.unsplash.com/photo-1504626113995-a0e5d91f925d?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2600,
    location: 'Dubai',
    description:
      "Échappez à l'agitation urbaine à Sand Dunes Oasis, où vous pourrez explorer les vastes déserts de l'Émirat et vous détendre dans des oasis luxuriantes loin de l'agitation de la ville.",
  },
  {
    id: 12,
    type: 'outFrance',
    name: 'Azure Waters Retreat',
    country: 'Fidji',
    image:
      'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3400,
    location: 'Nadi',
    description:
      'Plongez dans les eaux azurées du Azure Waters Retreat, un lieu paisible où vous pourrez vous détendre sur des plages de sable blanc, explorer les récifs coralliens colorés et découvrir la richesse marine des îles Fidji.',
  },
  {
    id: 13,
    type: 'france',
    name: 'Medieval Citadel',
    country: 'France',
    image:
      'https://images.unsplash.com/photo-1588278183316-7c7a88cc683d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2700,
    location: 'Carcassonne',
    description:
      "Imprégnez-vous de l'histoire médiévale à la Citadelle médiévale, un site historique magnifiquement préservé où vous pourrez explorer des remparts centenaires, déambuler dans des ruelles pittoresques et découvrir l'atmosphère envoûtante du Moyen Âge.",
  },
  {
    id: 14,
    type: 'outFrance',
    name: 'Exploration Haven',
    country: 'Nouvelle-Zélande',
    image:
      'https://images.unsplash.com/photo-1568454537842-d933259bb258?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3800,
    location: 'Queenstown',
    description:
      "Plongez dans l'aventure à Exploration Haven, où vous pourrez explorer les paysages époustouflants de la Nouvelle-Zélande, découvrir des lacs cristallins et des montagnes majestueuses, et vivre des expériences inoubliables en plein air.",
  },
  {
    id: 15,
    type: 'outFrance',
    name: 'Tropical Paradise',
    country: 'Thaïlande',
    image:
      'https://plus.unsplash.com/premium_photo-1664478083744-affd1f117efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3000,
    location: 'Phuket',
    description:
      'Plongez dans le paradis tropical de Tropical Paradise, où vous pourrez vous détendre sur des plages de sable blanc immaculées, explorer des îles exotiques et découvrir la culture vibrante de la Thaïlande.',
  },
  {
    id: 16,
    type: 'outFrance',
    name: 'Snowy Peaks',
    country: 'Canada',
    image:
      'https://images.unsplash.com/photo-1596476024644-67452de3d693?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3200,
    location: 'Whistler',
    description:
      "Découvrez la beauté hivernale des Snowy Peaks, où vous pourrez dévaler des pistes immaculées, respirer l'air pur de la montagne et vous détendre dans des stations de ski de renommée mondiale.",
  },
  {
    id: 17,
    type: 'outFrance',
    name: 'Cultural Capital',
    country: 'Italie',
    image:
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2800,
    location: 'Rome',
    description:
      "Explorez la richesse culturelle de la Capitale culturelle, où vous pourrez découvrir des trésors artistiques, déguster une délicieuse cuisine italienne et vous imprégner de l'atmosphère envoûtante de la ville éternelle.",
  },
  {
    id: 18,
    type: 'outFrance',
    name: 'Red Sands Sanctuary',
    country: 'États-Unis',
    image:
      'https://images.unsplash.com/photo-1575408264798-b50b252663e6?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2500,
    location: 'Arizona',
    description:
      "Échappez à l'agitation de la vie urbaine à Red Sands Sanctuary, où vous pourrez vous reconnecter avec la nature dans des paysages désertiques époustouflants et vous détendre dans des refuges luxueux au cœur du désert.",
  },
  {
    id: 19,
    type: 'outFrance',
    name: 'Exotic Retreat',
    country: 'Indonésie',
    image:
      'https://images.unsplash.com/photo-1523592121529-f6dde35f079e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3600,
    location: 'Bali',
    description:
      "Plongez dans l'exotisme de Exotic Retreat, où vous pourrez vous détendre sur des plages de sable blanc immaculées, découvrir des temples anciens et explorer la riche culture balinaise.",
  },
  {
    id: 20,
    type: 'outFrance',
    name: 'Ancient Temples',
    country: 'Cambodge',
    image:
      'https://images.unsplash.com/photo-1463694023725-91c761715d21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3100,
    location: 'Siem Reap',
    description:
      "Explorez les trésors antiques de Ancient Temples, où vous pourrez découvrir les majestueux temples d'Angkor, déambuler dans des ruines millénaires et vous imprégner de la spiritualité de l'ancienne civilisation khmère.",
  },
  {
    id: 21,
    type: 'outFrance',
    name: 'Wild Safari',
    country: 'Kenya',
    image:
      'https://images.unsplash.com/photo-1577971132997-c10be9372519?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2900,
    location: 'Nairobi',
    description:
      "Partez à l'aventure dans la savane africaine lors d'un Wild Safari, où vous pourrez découvrir la faune sauvage de l'Afrique, observer des animaux majestueux dans leur habitat naturel et vivre des moments inoubliables en pleine nature.",
  },
  {
    id: 22,
    type: 'outFrance',
    name: 'Kite Surfing Paradise',
    country: 'Grèce',
    image:
      'https://images.unsplash.com/photo-1615692536613-e1dac68ae264?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2700,
    location: 'Crète',
    description:
      'Détendez-vous sur les plages de sable doré de Golden Sands, où vous pourrez vous baigner dans des eaux cristallines, explorer des criques isolées et profiter du soleil méditerranéen.',
  },
  {
    id: 23,
    type: 'Excursion en bateau en Suisse',
    name: 'Alpine Retreat',
    country: 'Suisse',
    image:
      'https://images.unsplash.com/photo-1665131439247-287a396b4edf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 3300,
    location: 'Interlaken',
    description:
      "Échappez à la routine quotidienne à Alpine Retreat, où vous pourrez respirer l'air pur de la montagne, explorer des sentiers panoramiques et vous détendre dans des villages alpins pittoresques.",
  },
  {
    id: 24,
    type: 'outFrance',
    name: 'La promenade des monuments',
    country: 'Espagne',
    image:
      'https://images.unsplash.com/photo-1558642084-fd07fae5282e?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 2600,
    location: 'Barcelone',
    description:
      "Explorez la richesse culturelle de Cultural Hub, où vous pourrez découvrir des trésors artistiques, déguster une délicieuse cuisine espagnole et vous imprégner de l'atmosphère envoûtante de la ville.",
  },
];
