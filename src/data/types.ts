
export interface Site {
        name: string;
        description: string;
        img : string[];
        goals: string[];
        techs: string[];
        url: string;
}

export interface SiteProps {
    site : Site
}