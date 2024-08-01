import { _decorator, Component, SpriteComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('QueuedHeroView')
export class QueuedHeroView extends Component {
    @property(SpriteComponent)
    portrait: SpriteComponent | null = null;
    @property(SpriteComponent)
    rank: SpriteComponent | null = null;
    @property(SpriteComponent)
    type: SpriteComponent | null = null;

    @property(SpriteComponent)
    progress: SpriteComponent | null = null;

    heroData: Hero | null = null;


    display(heroData: Hero, progress: number){
        this.heroData = heroData;
        this.updateProgress(progress);
    }

    updateProgress(progress: number){
        if (this.progress && this.heroData)
            this.progress.fillRange = progress / this.heroData?.cost;
    }

    clear(){
        this.heroData = null;
        if (this.portrait)
            this.portrait.spriteFrame = null;
    }
}


