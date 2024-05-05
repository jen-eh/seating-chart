import { guests } from "./constants";

export const findTableByName = (name) => {
    if (Object.keys(guests).includes(name.toLowerCase())) {
        return guests[name.toLowerCase()];
    } else {
        return "Could not find a guest by this name.";
    }
};