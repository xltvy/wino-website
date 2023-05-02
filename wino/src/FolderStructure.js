import { lazy } from 'react';

import Petra1 from './finder/design/petra/01.jpg';
import Petra2 from './finder/design/petra/02.jpg';
import Petra3 from './finder/design/petra/03.jpg';
import Petra4 from './finder/design/petra/04.jpg';
import Petra5 from './finder/design/petra/05.jpg';
import Petra6 from './finder/design/petra/06.jpg';
import Petra7 from './finder/design/petra/07.png';
import Petra8 from './finder/design/petra/08.png';
import Petra9 from './finder/design/petra/09.jpg';
import Petra10 from './finder/design/petra/10.jpg';
import Petra11 from './finder/design/petra/11.jpg';
import Petra12 from './finder/design/petra/12.jpeg';
import Petra13 from './finder/design/petra/13.jpeg';
import Petra14 from './finder/design/petra/14.png';
import Petra15 from './finder/design/petra/15.jpeg';
import Petra16 from './finder/design/petra/16.jpg';
import Petra17 from './finder/design/petra/17.jpg';
import Petra18 from './finder/design/petra/18.jpg';
import Petra19 from './finder/design/petra/19.jpg';
import Petra20 from './finder/design/petra/20.jpg';
import Petra21 from './finder/design/petra/21.jpg';
import Petra22 from './finder/design/petra/22.jpg';

import LunaMerdin1 from './finder/branding/luna_merdin/01.png';
import LunaMerdin2 from './finder/branding/luna_merdin/02.png';
import LunaMerdin3 from './finder/branding/luna_merdin/03.png';
import LunaMerdin4 from './finder/branding/luna_merdin/04.png';
import LunaMerdin5 from './finder/branding/luna_merdin/05.png';
import LunaMerdin6 from './finder/branding/luna_merdin/06.png';
import LunaMerdin7 from './finder/branding/luna_merdin/07.png';
import LunaMerdin8 from './finder/branding/luna_merdin/08.png';
import LunaMerdin9 from './finder/branding/luna_merdin/09.png';
import LunaMerdin10 from './finder/branding/luna_merdin/10.png';
import LunaMerdin11 from './finder/branding/luna_merdin/11.png';
import LunaMerdin12 from './finder/branding/luna_merdin/12.png';
import LunaMerdin13 from './finder/branding/luna_merdin/13.png';
import LunaMerdin14 from './finder/branding/luna_merdin/14.png';
import LunaMerdin15 from './finder/branding/luna_merdin/15.png';
import LunaMerdin16 from './finder/branding/luna_merdin/16.png';

import Bodhita1 from './finder/branding/bodhita/01.png';
import Bodhita2 from './finder/branding/bodhita/02.png';
import Bodhita3 from './finder/branding/bodhita/03.png';
import Bodhita4 from './finder/branding/bodhita/04.png';
import Bodhita5 from './finder/branding/bodhita/05.png';
import Bodhita6 from './finder/branding/bodhita/06.png';
import Bodhita7 from './finder/branding/bodhita/07.png';
import Bodhita8 from './finder/branding/bodhita/08.png';
import Bodhita9 from './finder/branding/bodhita/09.png';


import PetraContent from './components/info_texts/PetraContent.js';
import LunaMerdinContent from './components/info_texts/LunaMerdinContent.js';
import BodhitaContent from './components/info_texts/BodhitaContent.js';

const FolderStructure = [
    {
        title: 'Featured',
        hasSubfolder: false,
        images: [
            //
        ]
    },
    {
        title: 'Campaigns',
        hasSubfolder: true,
        subfolders: [
            {
                title: 'Subfolder 1',
                images: [
                    //
                ],
            },
            // Other subfolders for Campaigns
        ],
    },
    {
        title: 'Upgrading',
        hasSubfolder: true,
        subfolders: [
            {
                title: 'Subfolder 2',
                images: [
                    //
                ],
            },
            // Other subfolders for Upgrading
        ],
    },
    {
        title: 'Design',
        hasSubfolder: true,
        subfolders: [
            {
                title: 'Petra',
                images: [
                    {
                        id: 1,
                        src: Petra1,
                        alt: 'Petra Roasting Co. Coffee Boxes',
                        title: 'PETRA_FAMILY',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 2,
                        src: Petra2,
                        alt: 'Petra Roasting Co. Coffee Boxes',
                        title: 'PETRA_01',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 3,
                        src: Petra3,
                        alt: 'Petra Roasting Co. Coffee Boxes',
                        title: 'PETRA_02',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 4,
                        src: Petra4,
                        alt: 'Petra Roasting Co. Coffee Boxes',
                        title: 'ACME',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 5,
                        src: Petra5,
                        alt: 'Petra Roasting Co. Coffee Boxes',
                        title: 'GUATEMALA',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 6,
                        src: Petra6,
                        alt: 'Petra Roasting Co. Acme Coffee',
                        title: 'PETRA_05',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 7,
                        src: Petra7,
                        alt: 'Petra Roasting Co. Ethiopia Coffee',
                        title: 'ETHIOPIA',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 8,
                        src: Petra8,
                        alt: 'Petra Roasting Co. Guatemala Coffee',
                        title: 'PETRA_07',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 9,
                        src: Petra9,
                        alt: 'Petra Roasting Co. Coffee Boxes',
                        title: 'ACME&RWANDA',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 10,
                        src: Petra10,
                        alt: 'Petra Roasting Co. Coffee Boxes',
                        title: 'PETRA_09',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 11,
                        src: Petra11,
                        alt: 'Petra Roasting Co. Guatemala Coffee',
                        title: 'PETRA_10',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 12,
                        src: Petra12,
                        alt: 'Petra Roasting Co. Rwanda Coffee',
                        title: 'RWANDA',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 13,
                        src: Petra13,
                        alt: 'Petra Roasting Co. Brazil Coffee',
                        title: 'BRAZIL',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 14,
                        src: Petra14,
                        alt: 'Petra Roasting Co. Kenya Coffee',
                        title: 'KENYA',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 15,
                        src: Petra15,
                        alt: 'Petra Roasting Co. Acme Coffee',
                        title: 'ACME',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 16,
                        src: Petra16,
                        alt: 'Petra Roasting Co. Kenya Illustration',
                        title: 'KENYA',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 17,
                        src: Petra17,
                        alt: 'Petra Roasting Co. Rwanda Illustration',
                        title: 'RWANDA',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 18,
                        src: Petra18,
                        alt: 'Petra Roasting Co. Burundi Illustration',
                        title: 'BURUNDI',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 19,
                        src: Petra19,
                        alt: 'Petra Roasting Co. Ethiopia Illustration',
                        title: 'ETHIOPIA',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 20,
                        src: Petra20,
                        alt: 'Petra Roasting Co. Guatemala Illustration',
                        title: 'GUATEMALA',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 21,
                        src: Petra21,
                        alt: 'Petra Roasting Co. Brazil Illustration',
                        title: 'BRAZIL',
                        content: PetraContent,
                        isVideo: false,
                    },
                    {
                        id: 22,
                        src: Petra22,
                        alt: 'Petra Roasting Co. Colombia Illustration',
                        title: 'COLOMBIA',
                        content: PetraContent,
                        isVideo: false,
                    }
                ]
            }
        ]
    },
    {
        title: 'Branding',
        hasSubfolder: true,
        subfolders: [
            {
                title: 'Luna Merdin',
                images: [
                    {
                        id: 1,
                        src: LunaMerdin1,
                        alt: 'Luna Merdin',
                        title: 'LUNAMERDIN_EMBLEM',
                        content: LunaMerdinContent,
                        isVideo: false,
                    },
                    {
                        id: 2,
                        src: LunaMerdin2,
                        alt: 'Luna Merdin',
                        title: 'LUNAMERDIN_LOGO_01',
                        content: LunaMerdinContent,
                        isVideo: false,
                    },
                    {
                        id: 3,
                        src: LunaMerdin3,
                        alt: 'Luna Merdin',
                        title: 'LUNAMERDIN_LOGO_02',
                        content: LunaMerdinContent,
                        isVideo: false,
                    },
                    {
                        id: 4,
                        src: LunaMerdin4,
                        alt: 'Luna Merdin',
                        title: 'LUNAMERDIN_01',
                        content: LunaMerdinContent,
                        isVideo: false,
                    },
                    {
                        id: 5,
                        src: LunaMerdin5,
                        alt: 'Luna Merdin',
                        title: 'LUNAMERDIN_02',
                        content: LunaMerdinContent,
                        isVideo: false,
                    },
                    {
                        id: 6,
                        src: LunaMerdin6,
                        alt: 'Luna Merdin',
                        title: 'LUNAMERDIN_03',
                        content: LunaMerdinContent,
                        isVideo: false,
                    },
                    {
                        id: 7,
                        src: LunaMerdin7,
                        alt: 'Luna Merdin',
                        title: 'LUNAMERDIN_04',
                        content: LunaMerdinContent,
                        isVideo: false,
                    },
                    {
                        id: 8,
                        src: LunaMerdin8,
                        alt: 'Luna Merdin',
                        title: 'LUNAMERDIN_05',
                        content: LunaMerdinContent,
                        isVideo: false,
                    },
                    {
                        id: 9,
                        src: LunaMerdin9,
                        alt: 'Luna Merdin',
                        title: 'LUNAMERDIN_06',
                        content: LunaMerdinContent,
                        isVideo: false,
                    },
                    {
                        id: 10,
                        src: LunaMerdin10,
                        alt: 'Luna Merdin',
                        title: 'LUNAMERDIN_07',
                        content: LunaMerdinContent,
                        isVideo: false,
                    },
                    {
                        id: 11,
                        src: LunaMerdin11,
                        alt: 'Luna Merdin',
                        title: 'LUNAMERDIN_08',
                        content: LunaMerdinContent,
                        isVideo: false,
                    },
                    {
                        id: 12,
                        src: LunaMerdin12,
                        alt: 'Luna Merdin',
                        title: 'LUNAMERDIN_09',
                        content: LunaMerdinContent,
                        isVideo: false,
                    },
                    {
                        id: 13,
                        src: LunaMerdin13,
                        alt: 'Luna Merdin',
                        title: 'LUNAMERDIN_10',
                        content: LunaMerdinContent,
                        isVideo: false,
                    },
                    {
                        id: 14,
                        src: LunaMerdin14,
                        alt: 'Luna Merdin',
                        title: 'LUNAMERDIN_11',
                        content: LunaMerdinContent,
                        isVideo: false,
                    },
                    {
                        id: 15,
                        src: LunaMerdin15,
                        alt: 'Luna Merdin',
                        title: 'LUNAMERDIN_12',
                        content: LunaMerdinContent,
                        isVideo: false,
                    },
                    {
                        id: 16,
                        src: LunaMerdin16,
                        alt: 'Luna Merdin',
                        title: 'LUNAMERDIN_13',
                        content: LunaMerdinContent,
                        isVideo: false,
                    }
                ]
            },
            {
                title: 'Pinoli',
                images: [
                    //
                ]
            },
            {
                title: 'Mercy Born',
                images: [
                    //
                ]
            },
            {
                title: 'Ankh',
                images: [
                    //
                ]
            },
            {
                title: 'Spada',
                images: [
                    //
                ]
            },
            {
                title: 'Sundei',
                images: [
                    //
                ]
            },
            {
                title: 'Bodhita',
                images: [
                    {
                        id: 1,
                        src: Bodhita1,
                        alt: 'Bodhita',
                        title: 'BODHITA_FAMILY',
                        content: BodhitaContent,
                        isVideo: false,
                    },
                    {
                        id: 2,
                        src: Bodhita2,
                        alt: 'Bodhita',
                        title: 'BODHITA_LOGO',
                        content: BodhitaContent,
                        isVideo: false,
                    },
                    {
                        id: 3,
                        src: Bodhita3,
                        alt: 'Bodhita',
                        title: 'BODHITA_PATTERN',
                        content: BodhitaContent,
                        isVideo: false,
                    },
                    {
                        id: 4,
                        src: Bodhita4,
                        alt: 'Bodhita',
                        title: 'BODHITA_01',
                        content: BodhitaContent,
                        isVideo: false,
                    },
                    {
                        id: 5,
                        src: Bodhita5,
                        alt: 'Bodhita',
                        title: 'BODHITA_02',
                        content: BodhitaContent,
                        isVideo: false,
                    },
                    {
                        id: 6,
                        src: Bodhita6,
                        alt: 'Bodhita',
                        title: 'BODHITA_03',
                        content: BodhitaContent,
                        isVideo: false,
                    },
                    {
                        id: 7,
                        src: Bodhita7,
                        alt: 'Bodhita',
                        title: 'BODHITA_04',
                        content: BodhitaContent,
                        isVideo: false,
                    },
                    {
                        id: 8,
                        src: Bodhita8,
                        alt: 'Bodhita',
                        title: 'BODHITA_05',
                        content: BodhitaContent,
                        isVideo: false,
                    },
                    {
                        id: 9,
                        src: Bodhita9,
                        alt: 'Bodhita',
                        title: 'BODHITA_06',
                        content: BodhitaContent,
                        isVideo: false,
                    }
                ]
            }
        ],
    },
    {
        title: 'Sustainability',
        hasSubfolder: true,
        subfolders: [
            {
                title: 'Subfolder 3',
                images: [
                    //
                ],
            },
            // Other subfolders for Sustainability
        ],
    }
];

export default FolderStructure;