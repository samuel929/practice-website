import img1 from "../../assets/member1.jpg";
import img2 from "../../assets/member2.jpg";
import img3 from "../../assets/member3.jpg";
import img4 from "../../assets/member4.jpg";
import img5 from "../../assets/member5.jpg";
import img6 from "../../assets/member6.jpg";
import img7 from "../../assets/member7.jpg";
import img8 from "../../assets/member8.jpg";
import img9 from "../../assets/member9.jpg";
import { Board, newsType } from "../../types/types";
import news1 from '../../assets/news1.png';
import news2 from '../../assets/news2.png';
import news3 from '../../assets/news3.png';

export const board: Board[] = [
    {
        id: "1",
        name: "Nathaniel Streich",
        title: "Partner | Head of Competition",
        group: "Law group",
        image: img1,
    },
    {
        id: "2",
        name: "Nathaniel Streich",
        title: "Partner | Head of Competition",
        group: "Law group",
        image: img2,
    },
    {
        id: "3",
        name: "Nathaniel Streich",
        title: "Partner | Head of Competition",
        group: "Law group",
        image: img3,
    },
    {
        id: "4",
        name: "Nathaniel Streich",
        title: "Partner | Head of Competition",
        group: "Law group",
        image: img4,
    },
    {
        id: "5",
        name: "Nathaniel Streich",
        title: "Partner | Head of Competition",
        group: "Law group",
        image: img5,
    },
    {
        id: "6",
        name: "Nathaniel Streich",
        title: "Partner | Head of Competition",
        group: "Law group",
        image: img6,
    },
    {
        id: "7",
        name: "Nathaniel Streich",
        title: "Partner | Head of Competition",
        group: "Law group",
        image: img7,
    },
    {
        id: "8",
        name: "Nathaniel Streich",
        title: "Partner | Head of Competition",
        group: "Law group",
        image: img8,
    },
    {
        id: "9",
        name: "Nathaniel Streich",
        title: "Partner | Head of Competition",
        group: "Law group",
        image: img9,
    },
];


export const news: newsType[] = [
    {
        id: '1',
        img: news1,
        title: 'Are midstream reviews of proceedings at an investigative stage permissible?',
        body: 'An appeal serving before a full bench in the High Court of South Africa, Gauteng Division, Pretoria has recently shed light on whether a midstream review of proceedings conducted at…',
        date: 'February 19, 2024',
        badges: ['Insurance Law']
    },
    {
        id: '2',
        img: news2,
        title: 'Technical issues affecting the online patent filing system resolved',
        body: 'The online platform at the Egyptian Patent Office which malfunctioned and had been offline since Saturday, 3 February 2024, has been restored. The Patent Office has issued an official communication…',
        date: 'February 9, 2024',
        badges: ['Firm News', 'Egypt', 'Adams News']
    },
    {
        id: '3',
        img: news3,
        title: 'Zambia passes new trademarks act (act no.11 of 2023).',
        body: 'A new Trade Marks Act has been passed in Zambia! This signals a significant modernization effort, introducing provisions for “non-traditional” marks, multiclass applications, and alignment with international frameworks such as…',
        date: 'February 8, 2024',
        badges: ['Adams news', 'Zambia']
    }
];

export const tabs = [
    {
        id: 1,
        head: "All",
        text: ''
    },
    {
        id: 2,
        head: "Partners",
        text: ''
    },
    {
        id: 3,
        head: "Senior Associates",
        text: ''
    },
    {
        id: 4,
        head: "Associates",
        text: ''
    },
    {
        id: 5,
        head: "Consultants",
        text: ''
    },
    {
        id: 6,
        head: "Business Support",
        text: ''
    },
]