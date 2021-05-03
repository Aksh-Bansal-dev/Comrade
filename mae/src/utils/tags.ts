export type tagsType =
  | "personalexperience"
  | "educational"
  | "academic"
  | "tech"
  | "event"
  | "other";

export let map: Map<tagsType, string> = new Map();
map.set("personalexperience", "#9c27b0"); // purple
map.set("educational", "#ffc107"); // amber(yellow)
map.set("academic", "#009688"); // teal
map.set("tech", "#3f51b5"); // blue
map.set("event", "#f44336"); // red
map.set("other", "#a6a6a6"); // grey

type chechboxDataType = {
  label: string;
  name: string;
}[];

export const checkboxData: chechboxDataType = [
  {
    label: "Personal Experience",
    name: "0",
  },
  {
    label: "Educational",
    name: "1",
  },
  {
    label: "Academic",
    name: "2",
  },
  {
    label: "Tech",
    name: "3",
  },
  {
    label: "Events",
    name: "4",
  },
  {
    label: "Other",
    name: "5",
  },
];

export let nameToTag: Map<string, tagsType> = new Map();
// nameToTag.set("0", "firstyear");
nameToTag.set("0", "personalexperience");
nameToTag.set("1", "educational");
nameToTag.set("2", "academic");
nameToTag.set("3", "tech");
nameToTag.set("4", "event");
nameToTag.set("5", "other");
