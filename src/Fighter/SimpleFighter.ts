import Fighter from './Fighter';

interface SimpleFighter extends Fighter {
  attack(enemy: SimpleFighter): void;
}

export default SimpleFighter;
