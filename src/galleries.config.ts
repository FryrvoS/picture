export interface GalleryConfig {
  owner: string;       // org onwer FryrvoS 
  repo: string;        //  repo  name
  imagePath: string;   // Path
  title: string;       // Page title
  description: string; // Meta desc
}

export const galleries: Record<string, Record<string, GalleryConfig>> = {

laylai: {
    "gymnastics-2026": {
      owner: "FryrvoS",
      repo: "PictureArchive_Laylai_Rhythmic-Gymnastics-Thailand-Championships-2026",
      imagePath: "src/images",
      title: "Gymnastics 2026",
      description: "Rhythmic-Gymnastics-Thailand-Championships-2026",
      icon: "https://cdn.fryrvo.com/assets/fryrvomusic/cover/SingalSONGCOVER.jpg",
    },
    "gymnastics-2024": {
      owner: "FryrvoS",
      repo: "PictureArchive_Laylai_Rhythmic-Gymnastics-Thailand-Championships-2024",
      imagePath: "src/images",
      title: "Gymnastics 2024",
      description: "Rhythmic-Gymnastics-Thailand-Championships-2024",
      icon: "https://cdn.fryrvo.com/assets/fryrvomusic/cover/TimeSONGCOVER.jpg",
    },
    "apac-cup-2023": {
      owner: "FryrvoS",
      repo: "PictureArchive_Laylai_APAC-CUP-2023",
      imagePath: "src/images",
      title: "APAC Cup 2023",
      description: "APAC-CUP-2023",
    },
    "petrina-cup-2023": {
      owner: "FryrvoS",
      repo: "PictureArchive_Laylai_Petrina-Cup2023",
      imagePath: "src/images",
      title: "Petrina Cup 2023",
      description: "Petrina-Cup2023",
    },
    "singapore-2022": {
      owner: "FryrvoS",
      repo: "PictureArchive_Laylai_Singapore2022",
      imagePath: "src/images",
      title: "Singapore 2022",
      description: "Singapore2022",
    },
    "apex-hongkong-2023": {
      owner: "FryrvoS",
      repo: "PictureArchive_Laylai_Apex-2023---HongKong",
      imagePath: "src/images",
      title: "Apex Hong Kong 2023",
      description: "Apex-2023---HongKong",
    },
    "atod-2023": {
      owner: "FryrvoS",
      repo: "PictureArchive_Laylai_ATOD-2023",
      imagePath: "src/images",
      title: "ATOD 2023",
      description: "ATOD-2023",
    },
    "sukothai": {
      owner: "FryrvoS",
      repo: "PictureArchive_Laylai_Sukothai",
      imagePath: "src/images",
      title: "Sukothai",
      description: "Sukothai",
    },
    "korat-2025": {
      owner: "FryrvoS",
      repo: "PictureArchive_Laylai_Korat2025",
      imagePath: "src/images",
      title: "Korat 2025",
      description: "Korat2025",
    },
  },
  ilyanna: {
    "Korat2026": {
      owner: "FryrvoS",
      repo: "PictureArchive_Ilyanna_Korat-2026",
      imagePath: "Img",
      title: "Ilyanna-Korat-2026",
      description: "Rhythmic Gymnastics Thailand Championship Korat2026",
    },
  },
};