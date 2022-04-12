interface Energy {
  amount : number;
  type_: EnergyType;
}

export type EnergyType = 'mana' | 'stamina';

export default Energy;
