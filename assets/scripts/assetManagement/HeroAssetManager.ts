import { JsonAsset, resources } from 'cc';
import SpriteRepository from './SpriteRepository';

class HeroAssetManager {
    public static heroSprites: SpriteRepository;
    public static rankSprites: SpriteRepository;
    public static typeSprites: SpriteRepository;
    public static heroes: Heroes;

    public static cb: () => void;
    public static loadingInProgress: number;

    public static loadAll(callback: () => void){
        HeroAssetManager.cb = callback;

        HeroAssetManager.loadingInProgress = 4;
        HeroAssetManager.loadHeroesData("settings/heroes", HeroAssetManager.onLoadDone);
        HeroAssetManager.heroSprites = new SpriteRepository("sprites/heroes/portraits", HeroAssetManager.onLoadDone);
        HeroAssetManager.rankSprites = new SpriteRepository("sprites/heroes/ranks", HeroAssetManager.onLoadDone);
        HeroAssetManager.typeSprites = new SpriteRepository("sprites/heroes/types", HeroAssetManager.onLoadDone);
    }

    static loadHeroesData(path: string, callback: () => void){
        resources.load(path, JsonAsset, (err, jsonAsset) => {
            if (err) {
                console.error('Failed to load file at', path, ': ', err);
                return;
            }
            HeroAssetManager.heroes = jsonAsset.json as Heroes;
            console.log("Heroes loaded", HeroAssetManager.heroes.heroes.length);
            callback();
        });
    }

    public static onLoadDone(){
        console.log("loading", HeroAssetManager.loadingInProgress)
        HeroAssetManager.loadingInProgress--;
        console.log("loading", HeroAssetManager.loadingInProgress)
        if (HeroAssetManager.loadingInProgress == 0){
            console.log("loading", HeroAssetManager.loadingInProgress)
            HeroAssetManager.cb();
            HeroAssetManager.cb = () => {};
        }
    }
}

export default HeroAssetManager;
