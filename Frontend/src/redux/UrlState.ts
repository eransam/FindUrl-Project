import UrlModel from "../Models/UrlModel";

export class UrlState {
    public Url: UrlModel[] = [];
}

export enum UrlActionType {
    FetchUrl = "FetchUrl",
    AddUrl = "AddUrl",
    DeleteUrl = "DeleteUrl"

}

export interface UrlAction {
    type: UrlActionType;
    payload?: any;
}

export function fetchUrlAction(Url: UrlModel[]): UrlAction {
    return { type: UrlActionType.FetchUrl, payload: Url };
}

export function addUrlAction(Url: UrlModel): UrlAction {
    return { type: UrlActionType.AddUrl, payload: Url };
}

export function DeleteUrlAction(): UrlAction {
    return { type: UrlActionType.DeleteUrl };
}



// נישלחת ישירות לפרמטר השני הפונ' הרדיוסר dispeach האובייקט המגיע מהפקודה 
export function UrlReducer(currentState = new UrlState(), action: UrlAction): UrlState {

    const newState = { ...currentState };

    switch (action.type) {

        case UrlActionType.FetchUrl:
            newState.Url = action.payload; 
            break;

            case UrlActionType.AddUrl:
                newState.Url.push(action.payload); 
                break;
                
                case UrlActionType.DeleteUrl:
                    newState.Url = [];
                    break;
            

                
    }






    return newState;
}
