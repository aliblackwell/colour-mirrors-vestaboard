const bottles = [
  {
    "name": "The Sun",
    "id": "1",
    "bottle_id": "1",
    "top": "yellow",
    "bottom": "yellow"
  },
  {
    "name": "The Moon",
    "id": "2",
    "bottle_id": "2",
    "top": "pale blue",
    "bottom": "royal blue"
  },
  {
    "name": "Jupiter",
    "id": "3",
    "bottle_id": "3",
    "top": "coral",
    "bottom": "coral"
  },
  {
    "name": "Uranus",
    "id": "4",
    "bottle_id": "4",
    "top": "yellow",
    "bottom": "deep turquoise"
  },
  {
    "name": "Mercury",
    "id": "5",
    "bottle_id": "5",
    "top": "green",
    "bottom": "pale green"
  },
  {
    "name": "Venus",
    "id": "6",
    "bottle_id": "6",
    "top": "pink",
    "bottom": "pink"
  },
  {
    "name": "Neptune",
    "id": "7",
    "bottle_id": "7",
    "top": "turquoise",
    "bottom": "deep turquoise"
  },
  {
    "name": "Saturn",
    "id": "8",
    "bottle_id": "8",
    "top": "pale violet",
    "bottom": "violet"
  },
  {
    "name": "Mars",
    "id": "9",
    "bottle_id": "9",
    "top": "red",
    "bottom": "orange"
  },
  {
    "name": "Wheel of Fortune",
    "id": "10",
    "bottle_id": "10",
    "top": "gold",
    "bottom": "olive"
  },
  {
    "name": "Duality",
    "id": "11",
    "bottle_id": "11",
    "top": "deep magenta",
    "bottom": "clear"
  },
  {
    "name": "Heaven on Earth",
    "id": "12",
    "bottle_id": "12",
    "top": "violet",
    "bottom": "red"
  },
  {
    "name": "Transformation",
    "id": "13",
    "bottle_id": "13",
    "top": "dark violet",
    "bottom": "pale violet"
  },
  {
    "name": "Movement",
    "id": "14",
    "bottle_id": "14",
    "top": "pale turquoise",
    "bottom": "pale turquoise"
  },
  {
    "name": "Magician",
    "id": "15",
    "bottle_id": "15",
    "top": "olive",
    "bottom": "olive"
  },
  {
    "name": "The Tower",
    "id": "16",
    "bottle_id": "16",
    "top": "olive",
    "bottom": "lilac"
  },
  {
    "name": "The Wish",
    "id": "17",
    "bottle_id": "17",
    "top": "coral",
    "bottom": "royal blue"
  },
  {
    "name": "Spiritual and Material Conflict",
    "id": "18",
    "bottle_id": "18",
    "top": "red",
    "bottom": "rose pink"
  },
  {
    "name": "Buddhic Bliss",
    "id": "19",
    "bottle_id": "19",
    "top": "pale magenta",
    "bottom": "gold"
  },
  {
    "name": "Awakening",
    "id": "20",
    "bottle_id": "20",
    "top": "magenta",
    "bottom": "copper"
  },
  {
    "name": "The Key",
    "id": "21",
    "bottle_id": "21",
    "top": "gold",
    "bottom": "yellow"
  },
  {
    "name": "Forgiveness",
    "id": "22",
    "bottle_id": "22",
    "top": "deep magenta",
    "bottom": "pale magenta"
  },
  {
    "name": "Initiation",
    "id": "23",
    "bottle_id": "23",
    "top": "royal blue",
    "bottom": "royal blue"
  },
  {
    "name": "Love, Money & Creativity",
    "id": "24",
    "bottle_id": "24",
    "top": "pale magenta",
    "bottom": "pale olive"
  },
  {
    "name": "Trust",
    "id": "25",
    "bottle_id": "25",
    "top": "turquoise",
    "bottom": "yellow"
  },
  {
    "name": "Partnerships",
    "id": "26",
    "bottle_id": "26",
    "top": "magenta",
    "bottom": "olive"
  },
  {
    "name": "Harvest",
    "id": "27",
    "bottle_id": "27",
    "top": "orange",
    "bottom": "gold"
  },
  {
    "name": "New beginnings",
    "id": "28",
    "bottle_id": "28",
    "top": "yellow",
    "bottom": "pale turquoise"
  },
  {
    "name": "Grace Under Pressure",
    "id": "29",
    "bottle_id": "29",
    "top": "deep turquoise",
    "bottom": "deep magenta"
  },
  {
    "name": "Creativity",
    "id": "30",
    "bottle_id": "30",
    "top": "turquoise",
    "bottom": "turquoise"
  },
  {
    "name": "The Hermit",
    "id": "31",
    "bottle_id": "31",
    "top": "pale green",
    "bottom": "deep green"
  },
  {
    "name": "Communication",
    "id": "32",
    "bottle_id": "32",
    "top": "royal blue",
    "bottom": "olive"
  },
  {
    "name": "Love & Magic",
    "id": "33",
    "bottle_id": "33",
    "top": "pale pink",
    "bottom": "rose pink"
  },
  {
    "name": "The Whale",
    "id": "34",
    "bottle_id": "34",
    "top": "deep turquoise",
    "bottom": "blue"
  },
  {
    "name": "The Inner Guide",
    "id": "35",
    "bottle_id": "35",
    "top": "blue lilac",
    "bottom": "pale green"
  },
  {
    "name": "The Gateway",
    "id": "36",
    "bottle_id": "36",
    "top": "blue lilac",
    "bottom": "blue lilac"
  },
  {
    "name": "Base Chakra",
    "id": "37",
    "bottle_id": "C1",
    "top": "coral",
    "bottom": "red"
  },
  {
    "name": "Sacral Chakra",
    "id": "38",
    "bottle_id": "C2",
    "top": "gold",
    "bottom": "orange"
  },
  {
    "name": "Solar Plexus",
    "id": "39",
    "bottle_id": "C3",
    "top": "olive",
    "bottom": "yellow"
  },
  {
    "name": "Heart Chakra",
    "id": "40",
    "bottle_id": "C4",
    "top": "turquoise",
    "bottom": "green"
  },
  {
    "name": "Throat Chakra",
    "id": "41",
    "bottle_id": "C5",
    "top": "royal blue",
    "bottom": "blue"
  },
  {
    "name": "Third Eye Chakra",
    "id": "42",
    "bottle_id": "C6",
    "top": "violet",
    "bottom": "royal blue"
  },
  {
    "name": "Crown Chakra",
    "id": "43",
    "bottle_id": "C7",
    "top": "magenta",
    "bottom": "violet"
  },
  {
    "name": "Higher Crown Chakra - The Bridge",
    "id": "44",
    "bottle_id": "C8",
    "top": "pink",
    "bottom": "magenta"
  },
  {
    "name": "Base Chakra - The Light Body",
    "id": "45",
    "bottle_id": "C9",
    "top": "clear",
    "bottom": "clear"
  },
  {
    "name": "Sacral Chakra - Suchness",
    "id": "46",
    "bottle_id": "C10",
    "top": "orange",
    "bottom": "rose pink"
  },
  {
    "name": "Solar Plexus Chakra - Wisdom",
    "id": "47",
    "bottle_id": "C11",
    "top": "gold",
    "bottom": "gold"
  },
  {
    "name": "Heart Chakra - Love",
    "id": "48",
    "bottle_id": "C12",
    "top": "lilac",
    "bottom": "pink"
  },
  {
    "name": "Throat Chakra - I Speak My Spirit",
    "id": "49",
    "bottle_id": "C13",
    "top": "blue violet",
    "bottom": "blue violet"
  },
  {
    "name": "Third Eye Chakra - Vision",
    "id": "50",
    "bottle_id": "C14",
    "top": "gold",
    "bottom": "clear"
  },
  {
    "name": "Crown Chakra - Crystal Being",
    "id": "51",
    "bottle_id": "C15",
    "top": "clear",
    "bottom": "lilac"
  },
  {
    "name": "Incarnating",
    "id": "52",
    "bottle_id": "G1",
    "top": "clear",
    "bottom": "copper"
  },
  {
    "name": "The Core",
    "id": "53",
    "bottle_id": "G2",
    "top": "copper",
    "bottom": "copper"
  },
  {
    "name": "Return from Atlantis",
    "id": "54",
    "bottle_id": "G3",
    "top": "copper",
    "bottom": "turquoise"
  },
  {
    "name": "Ancient Mother",
    "id": "55",
    "bottle_id": "G4",
    "top": "pink",
    "bottom": "copper"
  },
  {
    "name": "Earth Wisdom",
    "id": "56",
    "bottle_id": "G5",
    "top": "gold",
    "bottom": "copper"
  },
  {
    "name": "The Goddess Awakens",
    "id": "57",
    "bottle_id": "G6",
    "top": "copper",
    "bottom": "olive"
  },
  {
    "name": "Gaia and The Elohim",
    "id": "58",
    "bottle_id": "G7",
    "top": "pale copper",
    "bottom": "clear"
  },
  {
    "name": "Illumination",
    "id": "59",
    "bottle_id": "G8",
    "top": "deep magenta",
    "bottom": "deep magenta"
  },
  {
    "name": "Faith",
    "id": "60",
    "bottle_id": "G9",
    "top": "turquoise",
    "bottom": "pale gold"
  },
  {
    "name": "Impeccability",
    "id": "61",
    "bottle_id": "G10",
    "top": "pale gold",
    "bottom": "blue lilac"
  },
  {
    "name": "Generosity",
    "id": "62",
    "bottle_id": "G11",
    "top": "pale coral",
    "bottom": "pale gold"
  },
  {
    "name": "I Am",
    "id": "63",
    "bottle_id": "G12",
    "top": "pale gold",
    "bottom": "pale gold"
  },
  {
    "name": "Grace",
    "id": "64",
    "bottle_id": "G13",
    "top": "pale gold",
    "bottom": "pink"
  },
  {
    "name": "Ascension Light",
    "id": "65",
    "bottle_id": "G14",
    "top": "pale gold",
    "bottom": "clear"
  },
  {
    "name": "Satori",
    "id": "66",
    "bottle_id": "G15",
    "top": "solid gold",
    "bottom": "magenta"
  },
  {
    "name": "Serenity",
    "id": "67",
    "bottle_id": "G16",
    "top": "pale coral",
    "bottom": "platinum"
  },
  {
    "name": "Elohim",
    "id": "68",
    "bottle_id": "G17",
    "top": "platinum",
    "bottom": "pale gold"
  },
  {
    "name": "Limitless",
    "id": "69",
    "bottle_id": "G18",
    "top": "pale turquoise",
    "bottom": "platinum"
  },
  {
    "name": "Om",
    "id": "70",
    "bottle_id": "G19",
    "top": "platinum",
    "bottom": "platinum"
  },
  {
    "name": "Abode of Bliss",
    "id": "71",
    "bottle_id": "G20",
    "top": "platinum",
    "bottom": "pale green"
  },
  {
    "name": "The Beloved",
    "id": "72",
    "bottle_id": "G21",
    "top": "platinum",
    "bottom": "magenta"
  },
  {
    "name": "Sacred Mystery",
    "id": "73",
    "bottle_id": "G22",
    "top": "platinum",
    "bottom": "olive"
  },
  {
    "name": "Acceptance",
    "id": "74",
    "bottle_id": "G23",
    "top": "clear",
    "bottom": "pale coral"
  },
  {
    "name": "Reconnection",
    "id": "75",
    "bottle_id": "G24",
    "top": "pale coral",
    "bottom": "copper"
  },
  {
    "name": "Integration",
    "id": "76",
    "bottle_id": "G25",
    "top": "pale coral",
    "bottom": "pale coral"
  },
  {
    "name": "Alignment",
    "id": "77",
    "bottle_id": "G26",
    "top": "pale coral",
    "bottom": "diamond clear"
  },
  {
    "name": "Unity",
    "id": "78",
    "bottle_id": "G27",
    "top": "diamond clear",
    "bottom": "diamond clear"
  },
  {
    "name": "New Dawn",
    "id": "79",
    "bottle_id": "G28",
    "top": "turquoise",
    "bottom": "silver"
  },
  {
    "name": "Children of the Light",
    "id": "80",
    "bottle_id": "G29",
    "top": "silver",
    "bottom": "turquoise"
  },
  {
    "name": "Wisdom Keeper",
    "id": "81",
    "bottle_id": "G30",
    "top": "indigo",
    "bottom": "silver"
  },
  {
    "name": "Galactic Gateway",
    "id": "82",
    "bottle_id": "G31",
    "top": "silver",
    "bottom": "indigo"
  },
  {
    "name": "The Rose",
    "id": "83",
    "bottle_id": "G32",
    "top": "rose pink",
    "bottom": "silver"
  },
  {
    "name": "Love and Miracles",
    "id": "84",
    "bottle_id": "G33",
    "top": "silver",
    "bottom": "rose pink"
  },
  {
    "name": "The Gold Anchor",
    "id": "85",
    "bottle_id": "G34",
    "top": "pale gold",
    "bottom": "deep magenta"
  },
  {
    "name": "The Platinum Anchor",
    "id": "86",
    "bottle_id": "G35",
    "top": "platinum",
    "bottom": "deep magenta"
  },
  {
    "name": "The Love Anchor",
    "id": "87",
    "bottle_id": "G36",
    "top": "coral",
    "bottom": "deep magenta"
  }
]

export default bottles;