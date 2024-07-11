export type FooterLinks = {
    title: string,
    text: string[]
}

export type Board = {
    id: string,
    name: string,
    title: string,
    group: string,
    image: string
}

export type awardsType = {
    id: number,
    img: string
}

export type newsType = {
    id: string,
    img: string,
    title: string,
    body: string,
    date: string,
    badges: string[]
}


export type PracticeMember = {
    title: string,
    subText: string,
    image: string
}

export type PracticeAreasSection = {
    id: string,
    title: string,
    path?: string,
    body: string,
}

export type ABoutUsArrowsType = {
    id: number,
    text: string,
    path?: string,
    body: string
}

export type testimonialsType = {
    text: string,
    card: {
        button: string
        id: number,
        text: string,
    }[]
}

export type aboutCareers = {
    title: string,
    text1: string,
    text2: string
}


export type MegaMenu = {
    Heading: string;
    navItems: {
        title: string;
        subMenu: string[];
    }[];
}


export type MegaMenuAbout = {
    title: string,
    subMenu: string[]
}

export type DropdownType = {
    id: number,
    title: string,
    body: string,
    sections: {
        title: string,
        body: string
    }[]
}

export enum paths {
    PRACTICE = '/practice',
    IPAFRICA = '/ip-Africa',
    PEOPLE = '/people',
    ABOUT = '/about',
    CONTACT = '/contact',
}