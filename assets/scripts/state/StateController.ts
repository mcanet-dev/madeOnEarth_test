import { _decorator, assetManager, Component, JsonAsset, resources, TextAsset } from 'cc';
import HeroAssetManager from '../assetManagement/HeroAssetManager';
const { ccclass, property } = _decorator;

@ccclass('StateController')
export class StateController extends Component {
    state: InitialState | null = null;

    start() {
        this.loadData("settings/initial_state");
        HeroAssetManager.loadAll();
    }

    loadData(path: string){
        resources.load(path, JsonAsset, (err, jsonAsset) => {
            if (err) {
                console.error('Failed to load file at', path, ': ', err);
                return;
            }
            const state = jsonAsset.json as InitialState;
            console.log(state.state.buildings[0]);
        });
    }
}


