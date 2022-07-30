
export class TreeFactory {
    static treeTypes : Record<string, Tree>
    getTreeType(name : string,color : string,texture : string) {
        const key = `${name}_${color}_${texture}`;
        const tree = TreeFactory.treeTypes[key]
        if(!tree) {
            TreeFactory.treeTypes[key] = new Tree(name,color,texture)
        }
        return TreeFactory.treeTypes[key]
    }
}
