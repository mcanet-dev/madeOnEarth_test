import { resources, SpriteFrame } from 'cc';

class SpriteRepository {
    private spriteDict: { [key: string]: SpriteFrame } = {};


    constructor(directory: string, callback: () => void){
        

        resources.loadDir(directory, SpriteFrame, (err, assets) => {
            if (err) {
                console.error('Error loading sprites:', err);
                return;
            }
            
            assets.forEach((asset: SpriteFrame) => {
                const assetName = asset.name;
                this.spriteDict[assetName] = asset;
            });
            console.log('All sprites loaded:', Object.keys(this.spriteDict).length);
            callback();
        });
    }

    public getSpriteFrame(spriteName: string): SpriteFrame | null {
        return this.spriteDict[spriteName];
    }
}

export default SpriteRepository;
