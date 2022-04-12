import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 99;
    Elf.racesInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.racesInstances;
  }
}

export default Elf;
