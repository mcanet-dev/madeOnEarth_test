import { _decorator, assetManager, Component, JsonAsset, resources, TextAsset } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HeroesController')
export class HeroesController extends Component {

    start(){
        console.log("Heroes")
        this.loadJson("settings/heroes")
    }

    loadJson(path: string){
        resources.load(path, JsonAsset, (err, jsonAsset) => {
            if (err) {
                console.error('Failed to load file at', path, ': ', err);
                return;
            }
            const heroes = jsonAsset.json as Heroes;
            console.log(heroes.heroes.length);
        });
    }
}