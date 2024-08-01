interface Hero{
    id: string;
    name: string;
    description: string;
    cost: number;
    summonCooldown: number;
    type: string;
    rank: string;
}

interface Heroes{
    heroes: Hero[];
}

interface HeroHiring{
    hero: Hero;
    progress: number;
}