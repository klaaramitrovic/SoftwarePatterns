interface JSON {
    // json data 
    getJSONData: () => string;
}

class JSONObject implements JSON {
    public getJSONData(): string {
        return "JSON format data";
    }
}

interface XMLAdapter {
    // returns json in XML
    getXMLData: () => string;
}

class XMLAdapterImpl implements XMLAdapter {
    private jsonObj: JSON;

    constructor(jsonObj: JSON) {
        this.jsonObj = jsonObj;
    }
    
    public getXMLData(): string {
        return this.convertJSONtoXML(this.jsonObj.getJSONData());
    }
    
    private convertJSONtoXML(jsonData: string): string {
        return "Converted JSON data to XML";
    }
}

const jsonDataObj: JSON = new JSONObject();
const XMLAdapterImplObj: XMLAdapter = new XMLAdapterImpl(jsonDataObj);
 
console.log(XMLAdapterImplObj.getXMLData());

export {};
  