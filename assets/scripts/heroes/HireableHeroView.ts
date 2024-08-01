import { _decorator, Component, SpriteComponent } from 'cc';
import HeroAssetManager from '../assetManagement/HeroAssetManager';
const { ccclass, property } = _decorator;

@ccclass('HireableHeroView')
export class HireableHeroView extends Component {
    @property(SpriteComponent)
    portrait: SpriteComponent | null = null;
    @property(SpriteComponent)
    rank: SpriteComponent | null = null;
    @property(SpriteComponent)
    type: SpriteComponent | null = null;

    heroData: Hero | null = null;
    
    display(heroData: Hero){
        this.heroData = heroData;
        if (this.portrait)
            this.portrait.spriteFrame = HeroAssetManager.heroSprites.getSpriteFrame(heroData.id);
        if (this.rank)
            this.rank.spriteFrame = HeroAssetManager.rankSprites.getSpriteFrame(heroData.rank);
        if (this.type)
            this.type.spriteFrame = HeroAssetManager.typeSprites.getSpriteFrame(heroData.type);
    }
}


