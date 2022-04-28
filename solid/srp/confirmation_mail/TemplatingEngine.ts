export class TemplatingEngineInterface {
    render(template : string , params : Array<string>) : string {
        return `
            <div>
                ${params.join(" </br> ")}
            </div>
        `
    }
}