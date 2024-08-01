interface Building{
    id: string;
    name: string;
    description: string;
    cost: number;
    settings: BuildingSettings;
}

interface BuildingSettings{
    hireSlots: number;
}

interface Buildings{
    buildings: Building[];
}