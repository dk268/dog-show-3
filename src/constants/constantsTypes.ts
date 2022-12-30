enum DogBreedEnum {
  Affenpinscher = "affenpinscher",
  African = "african",
  Airedale = "airedale",
  Akita = "akita",
  Appenzeller = "appenzeller",
  Australian = "australian",
  Basenji = "basenji",
  Beagle = "beagle",
  Bluetick = "bluetick",
  Borzoi = "borzoi",
  Bouvier = "bouvier",
  Boxer = "boxer",
  Brabancon = "brabancon",
  Briard = "briard",
  Buhund = "buhund",
  Bulldog = "bulldog",
  Bullterrier = "bullterrier",
  Cattledog = "cattledog",
  Chihuahua = "chihuahua",
  Chow = "chow",
  Clumber = "clumber",
  Cockapoo = "cockapoo",
  Collie = "collie",
  Coonhound = "coonhound",
  Corgi = "corgi",
  Cotondetulear = "cotondetulear",
  Dachshund = "dachshund",
  Dalmatian = "dalmatian",
  Dane = "dane",
  Deerhound = "deerhound",
  Dhole = "dhole",
  Dingo = "dingo",
  Doberman = "doberman",
  Elkhound = "elkhound",
  Entlebucher = "entlebucher",
  Eskimo = "eskimo",
  Finnish = "finnish",
  Frise = "frise",
  Germanshepherd = "germanshepherd",
  Greyhound = "greyhound",
  Groenendael = "groenendael",
  Havanese = "havanese",
  Hound = "hound",
  Husky = "husky",
  Keeshond = "keeshond",
  Kelpie = "kelpie",
  Komondor = "komondor",
  Kuvasz = "kuvasz",
  Labradoodle = "labradoodle",
  Labrador = "labrador",
  Leonberg = "leonberg",
  Lhasa = "lhasa",
  Malamute = "malamute",
  Malinois = "malinois",
  Maltese = "maltese",
  Mastiff = "mastiff",
  Mexicanhairless = "mexicanhairless",
  Mix = "mix",
  Mountain = "mountain",
  Newfoundland = "newfoundland",
  Otterhound = "otterhound",
  Ovcharka = "ovcharka",
  Papillon = "papillon",
  Pekinese = "pekinese",
  Pembroke = "pembroke",
  Pinscher = "pinscher",
  Pitbull = "pitbull",
  Pointer = "pointer",
  Pomeranian = "pomeranian",
  Poodle = "poodle",
  Pug = "pug",
  Puggle = "puggle",
  Pyrenees = "pyrenees",
  Redbone = "redbone",
  Retriever = "retriever",
  Ridgeback = "ridgeback",
  Rottweiler = "rottweiler",
  Saluki = "saluki",
  Samoyed = "samoyed",
  Schipperke = "schipperke",
  Schnauzer = "schnauzer",
  Segugio = "segugio",
  Setter = "setter",
  Sharpei = "sharpei",
  Sheepdog = "sheepdog",
  Shiba = "shiba",
  Shihtzu = "shihtzu",
  Spaniel = "spaniel",
  Spitz = "spitz",
  Springer = "springer",
  Stbernard = "stbernard",
  Terrier = "terrier",
  Tervuren = "tervuren",
  Vizsla = "vizsla",
  Waterdog = "waterdog",
  Weimaraner = "weimaraner",
  Whippet = "whippet",
  Wolfhound = "wolfhound",
}

export type DogBreed = `${DogBreedEnum}`;

enum DogSubBreedEnum {
  Shepherd = "shepherd",
  Boston = "boston",
  French = "french",
  Staffordshire = "staffordshire",
  Cardigan = "cardigan",
  Great = "great",
  Norwegian = "norwegian",
  Lapphund = "lapphund",
  Bichon = "bichon",
  Afghan = "afghan",
  Basset = "basset",
  Blood = "blood",
  Ibizan = "ibizan",
  Plott = "plott",
  Walker = "walker",
  Bull = "bull",
  Bernese = "bernese",
  Swiss = "swiss",
  Caucasian = "caucasian",
  German = "german",
  Germanlonghair = "germanlonghair",
  Medium = "medium",
  Standard = "standard",
  Chesapeake = "chesapeake",
  Curly = "curly",
  Flatcoated = "flatcoated",
  Golden = "golden",
  Rhodesian = "rhodesian",
  Giant = "giant",
  Miniature = "miniature",
  Italian = "italian",
  Gordon = "gordon",
  Shetland = "shetland",
  Blenheim = "blenheim",
  Brittany = "brittany",
  Cocker = "cocker",
  Sussex = "sussex",
  Japanese = "japanese",
  English = "english",
  American = "american",
  Australian = "australian",
  Bedlington = "bedlington",
  Border = "border",
  Cairn = "cairn",
  Dandie = "dandie",
  Fox = "fox",
  Kerryblue = "kerryblue",
  Lakeland = "lakeland",
  Norfolk = "norfolk",
  Norwich = "norwich",
  Patterdale = "patterdale",
  Russell = "russell",
  Scottish = "scottish",
  Sealyham = "sealyham",
  Silky = "silky",
  Tibetan = "tibetan",
  Toy = "toy",
  Welsh = "welsh",
  Westhighland = "westhighland",
  Wheaten = "wheaten",
  Yorkshire = "yorkshire",
  Spanish = "spanish",
  Irish = "irish",
}

export type DogSubBreed = `${DogSubBreedEnum}`;

type AustrialianSubBreed = "shepherd";
type BuhundSubBreed = "norwegian";
type BulldogSubBreed = "boston" | "english" | "french";
type BullterrierSubBreed = "staffordshire";
type CattledogSubBreed = "australian";
type CollieSubBreed = "border";
type CorgiSubBreed = "cardigan";
type DaneSubBreed = "great";
type DeerhoundSubBreed = "scottish";
type ElkhoundSubBreed = "norwegian";
type FinnishSubBreed = "lapphund";
type FriseSubBreed = "bichon";
type GreyhoundSubBreed = "italian";
type HoundSubBreed = "afghan" | "basset" | "blood" | "english" | "ibizan" | "plott" | "walker";
type MastiffSubBreed = "bull" | "english" | "tibetan";
type MountainSubBreed = "bernese" | "swiss";
type OvcharkaSubBreed = "caucasian";
type PinscherSubBreed = "miniature";
type PointerSubBreed = "german" | "germanlonghair";
type PoodleSubBreed = "medium" | "miniature" | "standard" | "toy";
type RetrieverSubBreed = "chesapeake" | "curly" | "flatcoated" | "golden";
type RidgebackSubBreed = "rhodesian";
type SchnauzerSubBreed = "giant" | "miniature";
type SegugioSubBreed = "italian";
type SetterSubBreed = "english" | "gordon" | "irish";
type SheepdogSubBreed = "english" | "shetland";
type SpanielSubBreed =
  | "blenheim"
  | "brittany"
  | "cocker"
  | "irish"
  | "japanese"
  | "sussex"
  | "welsh";
type SpitzSubBreed = "japanese";
type SpringerSubBreed = "english";
type TerrierSubBreed =
  | "american"
  | "australian"
  | "bedlington"
  | "border"
  | "cairn"
  | "dandie"
  | "fox"
  | "irish"
  | "kerryblue"
  | "lakeland"
  | "norfolk"
  | "norwich"
  | "patterdale"
  | "russell"
  | "scottish"
  | "sealyham"
  | "silky"
  | "tibetan"
  | "toy"
  | "welsh"
  | "westhighland"
  | "wheaten"
  | "yorkshire";
type WaterdogSubBreed = "spanish";
type WolfhoundSubBreed = "irish";

export type BreedWithSubBreed =
  | "australian"
  | "buhund"
  | "bulldog"
  | "bullterrier"
  | "cattledog"
  | "collie"
  | "corgi"
  | "dane"
  | "deerhound"
  | "elkhound"
  | "finnish"
  | "frise"
  | "greyhound"
  | "hound"
  | "mastiff"
  | "mountain"
  | "ovcharka"
  | "pinscher"
  | "pointer"
  | "poodle"
  | "retriever"
  | "ridgeback"
  | "schnauzer"
  | "segugio"
  | "setter"
  | "sheepdog"
  | "spaniel"
  | "spitz"
  | "springer"
  | "terrier"
  | "waterdog"
  | "wolfhound";

export type SubBreedByBreed = {
  australian: AustrialianSubBreed;
  buhund: BuhundSubBreed;
  bulldog: BulldogSubBreed;
  bullterrier: BullterrierSubBreed;
  cattledog: CattledogSubBreed;
  collie: CollieSubBreed;
  corgi: CorgiSubBreed;
  dane: DaneSubBreed;
  deerhound: DeerhoundSubBreed;
  elkhound: ElkhoundSubBreed;
  finnish: FinnishSubBreed;
  frise: FriseSubBreed;
  greyhound: GreyhoundSubBreed;
  hound: HoundSubBreed;
  mastiff: MastiffSubBreed;
  mountain: MountainSubBreed;
  ovcharka: OvcharkaSubBreed;
  pinscher: PinscherSubBreed;
  pointer: PointerSubBreed;
  poodle: PoodleSubBreed;
  retriever: RetrieverSubBreed;
  ridgeback: RidgebackSubBreed;
  schnauzer: SchnauzerSubBreed;
  segugio: SegugioSubBreed;
  setter: SetterSubBreed;
  sheepdog: SheepdogSubBreed;
  spaniel: SpanielSubBreed;
  spitz: SpitzSubBreed;
  springer: SpringerSubBreed;
  terrier: TerrierSubBreed;
  waterdog: WaterdogSubBreed;
  wolfhound: WolfhoundSubBreed;
};
