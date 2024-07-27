import { _decorator, Component, JsonAsset, Node, resources } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BuildingsController')
export class BuildingsController extends Component {
    start() {
        this.loadJson("settings/buildings")
    }

    loadJson(path: string){
        resources.load(path, JsonAsset, (err, jsonAsset) => {
            if (err) {
                console.error('Failed to load file at', path, ': ', err);
                return;
            }
            const buildings = jsonAsset.json as Buildings;
            console.log(buildings.buildings[0].description);
        });
    }
}


