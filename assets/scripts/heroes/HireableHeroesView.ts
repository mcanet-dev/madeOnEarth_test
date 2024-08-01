import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import HeroAssetManager from '../assetManagement/HeroAssetManager';
import { HireableHeroView } from './HireableHeroView';
const { ccclass, property } = _decorator;

@ccclass('HireableHeroesView')
export class HireableHeroesView extends Component {
    @property(Node)
    public container: Node | null = null;
    @property(Prefab)
    public template: Prefab | null = null;

    start() {
        HeroAssetManager.loadAll(() => this.populateView());
    }

    public populateView(){
        this.container?.destroyAllChildren();
        HeroAssetManager.heroes.heroes.forEach(element => {
            this.loadHero(element);
        });
    }
    
    public loadHero(hero: Hero){
        if (!this.template)
            return;

        const node : Node = instantiate(this.template);
        const view = node.getComponent(HireableHeroView);
        view?.display(hero);
        this.container?.addChild(node);
    }
}


