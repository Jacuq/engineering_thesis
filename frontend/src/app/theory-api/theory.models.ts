export class Scale {
    constructor(
        public name: string,
        public notes: string[],
    ) { }
}

export class Chord {
    constructor(
        public name: string,
        public notes: string[],
    ) { }
}

export class Interval {
    constructor(
        public name: string,
        public note: string,
    ) { }
}
