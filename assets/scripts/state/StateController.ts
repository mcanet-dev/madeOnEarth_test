import { _decorator, assetManager, Component, JsonAsset, resources, TextAsset } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('StateController')
export class StateController extends Component {
    state: InitialState | undefined;

    start() {
        this.loadData("settings/initial_state");
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


