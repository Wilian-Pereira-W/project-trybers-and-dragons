import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static ArchetypeInstances = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.ArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
  
  static createdArchetypeInstances(): number {
    return Necromancer.ArchetypeInstances;
  }
}

export default Necromancer;
