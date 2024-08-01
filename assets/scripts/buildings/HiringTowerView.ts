import { _decorator, Component, LabelComponent, Node } from 'cc';
import { QueuedHeroView } from '../heroes/QueuedHeroView';
const { ccclass, property } = _decorator;

@ccclass('HiringTowerView')
export class HiringTowerView extends Component {
    @property(LabelComponent)
    title: LabelComponent | null = null;
    @property(LabelComponent)
    description: LabelComponent | null = null;

    @property([QueuedHeroView])
    heroQueue: QueuedHeroView[] = [];


    start() {

    }

    update(deltaTime: number) {
        
    }
}


