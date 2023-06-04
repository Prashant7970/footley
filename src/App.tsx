import React from 'react';
import Catalog from './catalog';



const App: React.FC = () => {
  const images = [
    {
      img:'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg',
      title:"Image title 1",
      des:"Mauna Kea (/ˌmɔːnə ˈkeɪə/ or /ˌmaʊnə ˈkeɪə/;[6] Hawaiian: [ˈmɐwnə ˈkɛə]; abbreviation for Mauna a Wākea)[7] is an active volcano on the island of Hawaiʻi.[8] Its peak is 4,207.3 m (13,803 ft) above sea level, making it the highest point in the state of Hawaiʻi and second-highest peak of an island on Earth. The peak is about 38 m (125 ft) higher than Mauna Loa, its more massive neighbor. Mauna Kea is unusually topographically prominent for its height: its wet prominence is fifteenth in the world among mountains, at 4,205 m (13,796 ft); its dry prominence is 9,330 m (30,610 ft). This dry prominence is greater than Mount Everest's height above sea level of 8,848.86 m (29,032 ft), and some authorities have labelled Mauna Kea the tallest mountain in the world, from its underwater base."
    },
    {
      img:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg',
      title:"Image title 2",
      des:"The origin of the word travel is most likely lost to history. The term travel may originate from the Old French word travail, which means 'work'.[2] According to the Merriam-Webster dictionary, the first known use of the word travel was in the 14th century. It also states that the word comes from Middle English travailen, travelen (which means to torment, labor, strive, journey) and earlier from Old French travailler (which means to work strenuously, toil).In English, people still occasionally use the words travail, which means struggle. According to Simon Winchester in his book The Best Travelers' Tales (2004), the words travel and travail both share an even more ancient root: a Roman instrument of torture called the tripalium (in Latin it means three stakes, as in to impale).[citation needed] This link may reflect the extreme difficulty of travel in ancient times. Travel in modern times may or may not be much easier, depending upon the destination. Travel to Mount Everest, the Amazon rainforest, extreme tourism, and adventure travel are more difficult forms of travel."
    },
    {
      img:'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_640.jpg',
      title:"Image title 3",
      des:"Vrindavan is considered to be a sacred place for Vaisnavism tradition of Hinduism. The other prominent areas surrounding Vrindavan are Govardhana, Gokul, Nandgaon, Barsana, Mathura and Bhandirvan. Along with Vrindavan, all these places are considered to be the center of Radha and Krishna worship. Millions of devotees of Radha Krishna visit Vrindavan and its nearby areas every year to participate in number of festivals.[16] The common salutation or greetings used in Braj region by its residents is Radhe Radhe which is associated with the Goddess Radha[17] or Hare Krishna which is associated with Krishna."
    }, {
      img:'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_640.jpg',
      title:"Image title 4",
      des:"Japanese gardens (日本庭園, nihon teien) are traditional gardens whose designs are accompanied by Japanese aesthetics and philosophical ideas, avoid artificial ornamentation, and highlight the natural landscape. Plants and worn, aged materials are generally used by Japanese garden designers to suggest a natural landscape, and to express the fragility of existence as well as time's unstoppable advance. 6 Ancient Japanese art inspired past garden designers.[1] Water is an important feature of many gardens, as are rocks and often gravel. Despite there being many attractive Japanese flowering plants, herbaceous flowers generally play much less of a role in Japanese gardens than in the West, though seasonally flowering shrubs and trees are important, all the more dramatic because of the contrast with the usual predominant green. Evergreen plants are the bones of the garden in Japan.[2] Though a natural-seeming appearance is the aim."
    }, {
      img:'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_640.jpg',
      title:"Image title 5",
      des:"Kashmir is the northernmost geographical region of the Indian subcontinent. Until the mid-19th century, the term Kashmir denoted only the Kashmir Valley between the Great Himalayas and the Pir Panjal Range. Today, the term encompasses a larger area that includes the India-administered territories of Jammu and Kashmir and Ladakh, the Pakistan-administered territories of Azad Kashmir and Gilgit-Baltistan, and the Chinese-administered territories of Aksai Chin and the Trans-Karakoram Tract.its their plants, including trees, with great rigour. An island in Kōraku-en gardens, Okayama, with azaleas in flower"
    },

  ];

  return (
    <div className="App">
      <Catalog images={images} />
    </div>
  );
};

export default App;

